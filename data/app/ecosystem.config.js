module.exports = {
    apps: [{
        name: 'cyu-microblogging',
        script: './index.js',
        cwd: '/app/src',
        interpreter: '/usr/local/bin/node',
        exec_mode: 'fork',
        // autorestart: true,
        watch: ['/app/src'],
        watch_delay: 1000,
        ignore_watch: ['/app/node_modules'],
        watch_options: {
            'followSymlinks': false,
            'usePolling': true
        },
        env: {
            NODE_ENV: 'development',
        }
    }]
}
