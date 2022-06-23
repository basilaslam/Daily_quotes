const {TwitterApi} = require('twitter-api-v2')
require('dotenv').config()

const client = new TwitterApi({
    appKey: process.env.appKey,
    appSecret: process.env.appSecret,
    accessToken: process.env.accessToken,
    accessSecret: process.env.accessSecret
})

const rw_client = client.readWrite


module.exports = rw_client