module.exports = {
  apps: [{
    name: 'youtube-sharing-be',
    script: './dist/index.js',
    node_args: '-r esm -r dotenv/config',

    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    time: true,
    out_file: './logs/out.log',
    error_file: './logs/err.log',
    log_file: './logs/combined.log'
  }],
};
