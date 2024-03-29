import html2canvas from "html2canvas";

const Difficulty = {
    ultima: 'ULT',
    master: "MAS",
    expert: "EXP",
    advance: "ADV",
    basic: "BAS"
}

const msgEl = document.createElement("div");

const strToNum = (str) => Number([...str].filter(e => e !== ",").join(""));
const getChunirecMusicData = async () => {
   const response = await fetch("https://api.chunirec.net/2.0/music/showall.json?token=252db1d77e53f52fd85c5b346fef7c90e345b3b3f0b12018a2074298e4b35182&region=jp2");
   const json = await response.json();
   if (!response.ok) {
       const { error } = json;
       alert(`
            Error occured when getting music data from chunirec.
            Code: ${error.code}
            Message: ${error.message}
            Additional Message: ${error.additional_message}
        `);
       throw new Error(`${error.code}: ${error.message}${error.additional_message}`);
   }
   return json;
};

const getCookie = (key) => {
    const cookieEntry = document.cookie
        .split(";")
        .map(e => decodeURIComponent(e.trim()))
        .map(e => e.split("="))
        .find(e => e[0] === key);
    if (cookieEntry) {
        return cookieEntry[1]; // value
    }
    return "";
}

const getSongDataList = async (difficulty = Difficulty.master) => {
    const fd = new FormData();
    fd.append("genre", 99);
    fd.append("token", getCookie("_t"));
    const api = {
        [Difficulty.ultima]: 'sendUltima',
        [Difficulty.master]: "sendMaster",
        [Difficulty.expert]: "sendExpert",
        [Difficulty.advance]: "sendAdvance",
        [Difficulty.basic]: "sendBasic"
    }
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
    if (score >= 1009000) {
        offset = 2.15;
    } else if (score >= 1007500) {
        offset = 2 + (score - 1007500) * 1 / 10000;
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

const fetchRecordList = async () => {
    const ret = [];

    msgEl.innerText = "Fetching song data...";
    for (const difficulty of Object.values(Difficulty)) {
        const songDataList = await getSongDataList(difficulty);

        for (const songData of songDataList) {
            const title = songData.querySelector(".music_title").innerText;
            const scoreStr = songData.querySelector(".text_b") ? songData.querySelector(".text_b").innerText : null;
            const badges = [...songData.querySelectorAll('img')];
            const isAllJustice = badges.some((badge) => badge.src.includes('alljustice'));
            const isFullCombo = isAllJustice ? true : badges.some((badge) => badge.src.includes('fullcombo'));

            if (title && scoreStr) {
                ret.push({
                    title: songData.querySelector(".music_title").innerText,
                    score: strToNum(songData.querySelector(".text_b").innerText),
                    difficulty,
                    isAllJustice,
                    isFullCombo
                });
            }
        }
    }
    msgEl.style.display = "none";
    return ret;
}

const parseRecordListWithMusicData = (recordList, chunirecMusicData, localConstant = []) => {
    const getConstant = (title, difficulty) => {
        const localConst = localConstant.find(c => c.name === title && c.difficulty === difficulty);
        if (localConst) {
            return parseFloat(localConst.constant);
        }

        return chunirecMusicData.find(md => md.meta.title === title).data[difficulty].const;
    }

    const parsedList = recordList.map(r => {
        const songConst = getConstant(r.title, r.difficulty);
        r.rating = ratingCalc(r.score, songConst);
        r.songConst = songConst;
        return r;
    });

    return parsedList.sort((a, b) => b.rating - a.rating);
}

const printResult = (recordList) => {
    const createTextDiv = (content = "") => {
        const div = document.createElement("div");
        div.style.textAlign = "left";
        div.style.margin = "0.1rem";
        div.innerText = content;
        return div;
    }

    const resultDiv = document.createElement("div");
    resultDiv.style.padding = "0.1rem";

    const best30Sum = recordList.slice(0, 30)
        .map((r) => r.rating)
        .reduce((acc, val) => acc + val);

    resultDiv.appendChild(createTextDiv(`Generated at: ${new Date().toLocaleDateString()}`));
    resultDiv.appendChild(createTextDiv(`Best 30 Average: ${(best30Sum / 30).toFixed(2)}`));
    resultDiv.appendChild(createTextDiv(`Maximum Achievable Rating: ${((best30Sum + recordList[0].rating * 10) / 40).toFixed(2)}`));

    const table = document.createElement("table");
    table.style.border = "0.1rem solid black";
    const createRow = (dataArr, isHeader = false) => {
        const row = document.createElement("tr");
        const tag = isHeader ? "th" : "td";
        for (const data of dataArr) {
            const item = document.createElement(tag);
            item.style.border = "0.1rem solid black";
            item.innerText = data;
            item.style.padding = "0.5rem";
            row.appendChild(item);
        }
        return row;
    }

    const headerRow = ["#", "Song Name", "Difficulty", "Constant", "Score", "Rating", "AJ/FC"];
    table.appendChild(
        createRow(headerRow, true)
    );

    for (const [i, r] of recordList.entries()) {
        const rowData = [
            i + 1, // #
            r.title, // Song Name
            r.difficulty, // Difficulty
            r.songConst.toFixed(1), // Constant
            r.score, // Score
            r.rating.toFixed(2), // Rating
            r.isAllJustice ? 'AJ' : (r.isFullCombo ? 'FC' : ''), // FC/AJ
        ];
        table.appendChild(
            createRow(rowData)
        );
    }
    resultDiv.appendChild(table);
    document.body.insertAdjacentElement("afterBegin", resultDiv);

    // generate button for download result as png
    const downloadBtn = document.createElement("button");
    downloadBtn.textContent = "Donwload Result as PNG";
    downloadBtn.style.margin = "0.5rem";
    downloadBtn.onclick = async () => {
        downloadBtn.textContent = "Generating result image...."
        const link = document.createElement("a");
        link.download = "result.png";
        link.href = (await html2canvas(resultDiv)).toDataURL();
        link.click();
        downloadBtn.textContent = "Donwload Result as PNG";
    }
    document.body.insertAdjacentElement("afterBegin", downloadBtn);

    const titleDiv = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.innerText = "Chunithm (International) Score Viewer";
    const githubContact = document.createElement("a");
    githubContact.href = "https://github.com/kyroslee/chuni_intl_viewer";
    githubContact.target = "_blank";
    githubContact.rel = "noopener noreferrer";
    githubContact.innerText = "kyroslee/chuni_intl_viewer@GitHub";
    titleDiv.appendChild(h3);
    titleDiv.appendChild(githubContact);
    document.body.insertAdjacentElement("afterbegin", titleDiv);
}

const main = async () => {
    if (window.location.hostname !== "chunithm-net-eng.com") {
        alert("[chuni_intl_viewer] This tools could only be used under chunithm-net international.");
        window.location.href  = "https://chunithm-net-eng.com/";
        return;
    }

    if (!getCookie("_t")) {
        alert("[chuni-intl-viewer] Token not found. Please login first.");
        window.location.href  = "https://chunithm-net-eng.com/";
        return;
    }

    const recordList = parseRecordListWithMusicData(
        await fetchRecordList(),
        await getChunirecMusicData()
    );
    printResult(recordList);
};

if (window.chuniIntlViewer) {
    alert("[chuni-intl-viewer] Please refresh the page before another new fetch.");
} else {
    window.chuniIntlViewer = true;
    msgEl.style.fontSize = "1.5rem";
    msgEl.style.padding = "1rem";
    document.body.insertAdjacentElement("afterBegin", msgEl);
    main();
}
