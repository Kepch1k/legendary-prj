module.exports = {
    apps: [
        {
            name: "client",
            cwd: "./client",
            script: "npm",
            args: "run watch_dev"
        },
        {
            name: "server",
            cwd: "./server",
            script: "npm",
            args: "run watch_dev"
        }
    ]
}
