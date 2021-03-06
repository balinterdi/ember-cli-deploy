module.exports = {
  "development": {
    "store": {
      "host": "localhost",
      "port": 63790
    },
    "assets": {
      "accessKeyId": "<your-access-key-goes-here>",
      "secretAccessKey": "<your-secret-access-key-goes-here>",
      "bucket": "<your-bucket-name>"
    }
  },

  "staging": {
    "store": {
      "host": "staging-redis.firstiwaslike.com",
      "port": 6379
    },
    "assets": {
      "accessKeyId": "<your-access-key-goes-here>",
      "secretAccessKey": "<your-secret-access-key-goes-here>",
      "bucket": "<your-bucket-name>",
      "prefix": "<optional-remote-prefix>",
      "gzipExtensions": ["js", "css", "svg", "json"]
    }
  }
}
