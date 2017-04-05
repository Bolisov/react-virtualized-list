module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "demo.js",
        path: __dirname + "/bin",
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
            },
        ]
    }
}