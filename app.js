
function tweeter(){
    const rwClient = require('./client.js')
const axios = require('axios').default
var quote = ''

    axios.get('https://programming-quotes-api.herokuapp.com/quotes/random').then((res)=>{
    let data =  res.data
     quote = `"${data.en}
     
- ${data.author}"`
     console.log(quote);

     const tweet = async (msg)=>{
        try {
            await rwClient.v2.tweet(msg)

            checktime()
    
        } catch (e) {
            console.log(e);
        }
    }
    tweet(quote)
})


}

function checktime(){
    let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if(time == '08:00'){
        tweeter()
    }else{
        setTimeout(checktime,30000)
    }
}


checktime()