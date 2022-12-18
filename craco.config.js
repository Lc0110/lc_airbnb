const path = require("path")
const CracoLessPlugin = require('craco-less');

const resolove = pathname => path.resolve(__dirname, pathname)

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
        },
    ],
    webpack: {
        alias: {
            "@": resolove("src"),
            "components": resolove("src/components")
        }
    }

}