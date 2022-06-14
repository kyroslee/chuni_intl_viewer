// This file is used to generated chart constant result from https://docs.google.com/spreadsheets/d/1m9BXU3D8rD4qYPn4YrxnzI3-2NydDwB-GTs1h88UX-U/

// Hardcoded column titles of the CSV
const cols = {
    name: '曲名',difficulty: '譜面',genre: 'ジャンル',constant: 'NEW',constant_new_plus: 'NEW+'
}

const fs = require('fs');
const path = require('path');
const csvtojson = require('csvtojson');

// handle duplicated csv header from the spreadsheet
const preprocessCsv = (csvString) => {
    const preProcessHeaderRow = (headerRow) => {
        const items = headerRow.split(',');
        const headerCount = new Map();
    
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (!headerCount.has(item)) {
                headerCount.set(item, 1);
            } else {
                items[i] = `${item}__${headerCount.get(item)}`;
                headerCount.set(item, headerCount.get(item) + 1);
            }
        }
    
        return items;
    }

    const lines = csvString.split('\n');
    lines[0] = preProcessHeaderRow(lines[0]);
    return lines.join('\n');
}

const getExpectedLength = (row, needle) => {
    return Object.keys(row).filter(r => r.startsWith(needle)).length;
}
const getNumberedCol = (col, i) => parseInt(i) === 0 ? col : `${col}__${i}`;

const parseRow = (row) => {
    return Object.keys(Array(getExpectedLength(row, cols.name)).fill(null)).map((i) => {
        const tmpObj = {};
        for (const [key, col] of Object.entries(cols)) {
            if (row[getNumberedCol(col, i)] === '') {
                return null;
            }
            tmpObj[key] = row[getNumberedCol(col, i)];
        }
        return tmpObj;
    }).filter(e => e);
}

const parseData = (data) => {
    return data.map(row => parseRow(row)).flat();
}

const parseDataByPath = async(path) => {
    const csvString = preprocessCsv(fs.readFileSync(path).toString());
    return parseData(await (csvtojson().fromString(csvString)));
}

const main = async () => {
    const csvDir = 'rawCsv';
    const fileList = fs.readdirSync(csvDir);
    const result = await Promise.all(fileList.map(async(filename) => parseDataByPath(path.join(__dirname, csvDir, filename))));
    const jsonString = JSON.stringify(result.flat().sort((a, b) => a.constant - b.constnat));

    fs.writeFileSync(path.join(__dirname, 'chartConstant.json'), jsonString);

    console.log('Finish.');
}

main();
