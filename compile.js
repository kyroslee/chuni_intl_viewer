const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
const bookmarklet = require("bookmarklet");

console.log("Compiling...");
fetch("https://closure-compiler.appspot.com/compile", {
    method: "POST",
    body: new URLSearchParams({
        js_code: fs.readFileSync(path.join(__dirname, "main.js")),
        compilation_level: "SIMPLE_OPTIMIZATIONS",
        output_format: "json",
        output_info: "compiled_code"
    })
})
.then(res => res.json())
.then(({ compiledCode }) => {
    fs.writeFileSync(path.join(__dirname, "main.min.js"), compiledCode);
    console.log("Finished");
})
.catch((e) => {
    console.error(e);
});