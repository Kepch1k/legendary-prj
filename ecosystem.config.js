module.exports = {
    apps: [
        {
            name: "client",
            cwd: "./client",
            script: "npm",
            args: "run client_watch_prod"
        },
        {
            name: "server",
            cwd: "./server",
            script: "npm",
            args: "run server_watch"
        }
    ]
}
