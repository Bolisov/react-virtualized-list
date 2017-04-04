module.exports = {
    entry: {
        "virtualized-scroll-viewer": "./src/virtualized-scroll-viewer.ts",
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/bin",
        libraryTarget: "umd",
        library: "virtualized-scroll-viewer"
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
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