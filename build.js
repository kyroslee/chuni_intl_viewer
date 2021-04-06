const path = require("path");
const { rollup } = require("rollup");
const nodeResolve = require("@rollup/plugin-node-resolve").default;
const { terser } = require("rollup-plugin-terser");

console.log("Compiling...");

const build = async() => {
    const bundle = await rollup({
        input: path.join(__dirname, "main.js"),
        plugins: [nodeResolve(), terser()]
    });
    await bundle.write({
        file: path.join(__dirname, "main.min.js"),
        format: "iife",
    })
}

build().then(() => {
    console.log("Finished");
});
