const recordList = [];
/*
{
	title: [string],
	difficulty: "EXP" || "MAS"
	score: [int],
	date: [string],
	playCount: [int]
}
*/

const songList = [...document.querySelectorAll("form")];
songList.shift();

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

const requestRecordFrag = async (idx, token) => {
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

const parseRecordFrag = (frag) => {
	const strToNum = (str) => Number([...str].filter(e => e !== ",").join(""));
	
	const ret = [];
	const title = frag.querySelector(".play_musicdata_title").innerText;
	const expertData = frag.querySelector(".bg_expert");
	const masterData = frag.querySelector(".bg_master");
	if (expertData) {
		ret[0] = {};
		ret[0].title = title;
		ret[0].difficulty = "EXP"; 
		ret[0].date = expertData.querySelector(".musicdata_detail_date").innerText;
		ret[0].score = strToNum(expertData.querySelector(".text_b").innerText);
		ret[0].playCount = strToNum(expertData.querySelector(".text_n").nextElementSibling.innerText);
	}
	if (masterData) {
		ret[1] = {};
		ret[1].title = title;
		ret[1].difficulty = "MAS"; 
		ret[1].date = masterData.querySelector(".musicdata_detail_date").innerText;
		ret[1].score = strToNum(masterData.querySelector(".text_b").innerText);
		ret[1].playCount = strToNum(masterData.querySelector(".text_n").nextElementSibling.innerText);
	}
	
	return ret.filter(e => e);
}

const msgEl = document.createElement("div");
msgEl.style.fontSize = "1.5rem";
msgEl.style.padding = "1rem";
document.body.insertAdjacentElement("afterBegin", msgEl);
for (const [i, s] of songList.entries()) {
	msgEl.innerText = `Fetching song data: ${i+1} / ${songList.length}`;
    recordList.push(...parseRecordFrag(await requestRecordFrag(s.idx.value, s.token.value)));
}

msgEl.innerText = "Fetch Complete";

const musicData =  await(await fetch("https://api.chunirec.net/1.3/music/showall.json?token=252db1d77e53f52fd85c5b346fef7c90e345b3b3f0b12018a2074298e4b35182")).json();
recordList.map(r => {
    const songInfo = musicData.find(md => md.meta.title === r.title);
    const songConst = songInfo.data[r.difficulty].const;
    r.rating = ratingCalc(r.score, songConst);
	r.songConst = songConst;
    return r;
});
recordList.sort((a,b) => b.rating - a.rating);

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

table.appendChild(
    createRow(["Song Name", "Difficulty", "Constant", "Play Count", "Rating"], true)
);

for (const [i, r] of recordList.entries()) {
    table.appendChild(
        createRow([r.title, r.difficulty, r.songConst, r.playCount, r.rating])
    );

    if (i === 29) {
        table.appendChild(
            createRow(Array(5).fill("-------------------"))
        );
    }
}
document.body.insertAdjacentElement("afterBegin", table);
