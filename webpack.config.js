module.exports = {
    entry: "./app.js",
    output: {
        filename: "./public/js/bundle.js"
    },
	node: {
        fs: "empty"
    }
};