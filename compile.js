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
    
    console.log("Generating bookmarklet...");
    const data = bookmarklet.parseFile(compiledCode);
    const bookmarkletCode = bookmarklet.convert(data.code, data.options);
    fs.writeFileSync(path.join(__dirname, "bookmarklet.js"), bookmarkletCode);

    console.log("Updating README.md ...");
    const readMe = fs.readFileSync(path.join(__dirname, "readMeTemplate.md"), "utf-8");
    fs.writeFileSync(
        path.join(__dirname, "README.md"),
        readMe.replace("{{ code }}", bookmarkletCode)
    );
    console.log("Finished");
})
.catch((e) => {
    console.error(e);
});