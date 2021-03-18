const Difficulty = {
    master: "MAS",
    expert: "EXP",
    advance: "ADV",
    basic: "BAS"
}

const msgEl = document.createElement("div");
msgEl.style.fontSize = "1.5rem";
msgEl.style.padding = "1rem";
document.body.insertAdjacentElement("afterBegin", msgEl);

const strToNum = (str) => Number([...str].filter(e => e !== ",").join(""));


const getSongList = async (difficulty = Difficulty.master) => {
    const fd = new FormData();
    fd.append("genre", 99);
    fd.append("token", document.cookie.substring(3));
    const api = {
        [Difficulty.master]: "sendMaster",
        [Difficulty.expert]: "sendExpert",
        [Difficulty.advance]: "sendAdvance",
        [Difficulty.basic]: "sendBasic"
    }
    console.log(api.difficulty);
    const res = await fetch(`https://chunithm-net-eng.com/mobile/record/musicGenre/${api[difficulty]}`, {
        headers: {
            "Cache-Control": "no-cache"
        },
        method: "POST",
        body: fd
    });
    const htmlStr = await res.text();
    const el = document.createElement("div");
    el.innerHTML = htmlStr;
    const frag = document.createDocumentFragment();
    frag.appendChild(el);
    const formList = [...frag.querySelectorAll("form")];
    formList.shift();
    return formList;
}

const ratingCalc = (score, songRating) => {
    let offset = 0;
    if (score >= 1007500) {
        offset = 2;
    } else if (score >= 1005000) {
        offset = 1.5 + (score - 1005000) * 10 / 50000;
    } else if (score >= 1000000) {
        offset = 1 + (score - 1000000) * 5 / 50000;
    } else if (score >= 975000) {
        offset = (score - 975000) * 2 / 50000;
    } else if (score >= 950000) {
        offset = -1.5 + (score - 950000) * 3 / 50000;
    } else if (score >= 925000) {
        offset = -3 + (score - 925000) * 3 / 50000;
    } else {
        offset = -5 + (score - 900000) * 4 / 50000;
    }

    return Math.floor((songRating + offset) * 100) / 100;
}

const requestSongRecordFrag = async (idx, token) => {
    const fd = new FormData();
    fd.append("idx", idx);
    fd.append("token", token);

    const res = await fetch("https://chunithm-net-eng.com/mobile/record/musicGenre/sendMusicDetail/", {
        headers: {
            "Cache-Control": "no-cache"
        },
        method: "POST",
        body: fd
    });

    const htmlStr = await res.text();
    const el = document.createElement("div");
    el.innerHTML = htmlStr;

    const frag = document.createDocumentFragment();
    frag.appendChild(el);
    return frag;
}

const parseSongRecordFrag = (frag) => {
    const ret = [];
    const title = frag.querySelector(".play_musicdata_title").innerText;
    const divMap = {
        [Difficulty.master]: frag.querySelector(".bg_master"),
        [Difficulty.expert]: frag.querySelector(".bg_expert"),
        [Difficulty.advance]: frag.querySelector(".bg_advance"),
        [Difficulty.basic]: frag.querySelector(".bg_basic")
    }

    for (const [difficulty, div] of Object.entries(divMap)) {
        if (div) {
            ret.push({
                title,
                difficulty,
                date: div.querySelector(".musicdata_detail_date").innerText,
                score: strToNum(div.querySelector(".text_b").innerText),
                playCount: strToNum(div.querySelector(".text_n").nextElementSibling.innerText)
            });
        }
    }

    return ret;
}

const fullRecordFetch = async () => {
    const ret = [];

    const songList = await getSongList();

    for (const [i, s] of songList.entries()) {
        msgEl.innerText = `Fetching song data: ${i + 1} / ${songList.length}`;
        ret.push(...parseSongRecordFrag(await requestSongRecordFrag(s.idx.value, s.token.value)));
    }

    msgEl.style.display = "none";
    return ret;
}

// fetch without date and play count
const fastRecordFetch = async () => {
    const ret = [];

    msgEl.innerText = "Fetching song data...";
    for (const difficulty of Object.values(Difficulty)) {
        const songList = await getSongList(difficulty);

        for (const songData of songList) {
            const title = songData.querySelector(".music_title").innerText;
            const scoreStr = songData.querySelector(".text_b") ? songData.querySelector(".text_b").innerText : null;
            if (title && scoreStr) {
                ret.push({
                    title: songData.querySelector(".music_title").innerText,
                    score: strToNum(songData.querySelector(".text_b").innerText),
                    difficulty
                });
            }
        }
    }
    msgEl.style.display = "none";
    return ret;
}

(async () => {
    if (window.location.hostname !== "chunithm-net-eng.com") {
        alert("[chuni_intl_viewer] This tools could only be used under chunithm-net international.");
        window.location.replace("https://chunithm-net-eng.com/");
    }

    const isFastFetch = confirm("Do you want to perform a fast fetch ?");
    const recordList = isFastFetch ? await fastRecordFetch() : await fullRecordFetch();

    // do rating calc for record list
    const musicData = await (await fetch("https://api.chunirec.net/1.3/music/showall.json?token=252db1d77e53f52fd85c5b346fef7c90e345b3b3f0b12018a2074298e4b35182")).json();
    recordList.map(r => {
        const songInfo = musicData.find(md => md.meta.title === r.title);
        const songConst = songInfo.data[r.difficulty].const;
        r.rating = ratingCalc(r.score, songConst);
        r.songConst = songConst;
        return r;
    });
    recordList.sort((a, b) => b.rating - a.rating);

    // print out record list
    const table = document.createElement("table");
    const createRow = (dataArr, isHeader = false) => {
        const row = document.createElement("tr");
        const tag = isHeader ? "th" : "td";
        for (const data of dataArr) {
            const item = document.createElement(tag);
            item.innerText = data;
            item.style.padding = "0.5rem";
            row.appendChild(item);
        }
        return row;
    }

    const headerRow = ["Song Name", "Difficulty", "Constant", "Score", "Rating"];
    if (!isFastFetch) {
        headerRow.push("Last Play", "Play Count");
    }
    table.appendChild(
        createRow(headerRow, true)
    );

    for (const [i, r] of recordList.entries()) {
        const rowData = [r.title, r.difficulty, r.songConst.toFixed(1), r.score, r.rating.toFixed(2)];
        if (!isFastFetch) {
            rowData.push(r.date, r.playCount);
        }
        table.appendChild(
            createRow(rowData)
        );

        if (i === 29) {
            table.appendChild(
                createRow(["=====(Best 30 Border)====="])
            );
        }
    }
    document.body.insertAdjacentElement("afterBegin", table);

    // debug
    window.recordList = recordList;
    window.musicData = musicData;
})();
