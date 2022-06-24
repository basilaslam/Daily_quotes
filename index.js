const cronJob = require('cron').CronJob
const rwClient = require('./client.js')
const axios = require('axios').default
var quote = ''




     const tweet = async (msg)=>{
        try {
            await rwClient.v2.tweet(msg)

    
        } catch (e) {
            console.log(e);
        }
    }

const job = new cronJob('0 9 * * *', ()=>{
    axios.get('https://programming-quotes-api.herokuapp.com/quotes/random').then((res)=>{
        let data =  res.data
         quote = `"${data.en}
         
    - ${data.author}"`
         console.log(quote);
        })


    console.log('tweeted');
  tweet(quote)
})
job.start()