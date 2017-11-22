const Twitter = require('twitter');
const https = require("https");

// Gerekli apii bilgisi alınıyor...
const TwitterConfig = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY || '',
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '',
    access_token_key: process.env.TWITTER_TOKEN_KEY || '',
    access_token_secret: process.env.TWITTER_TOKEN_SECRET || ''
};

// API bilgisi yoksa boşuna uğraştırmıyorum ve komple hata döndürüyorum. API bilgisi olmayan bot, bot değildir.
if (!TwitterConfig.consumer_key) throw new Error("Twitter consumer key not found!")
if (!TwitterConfig.consumer_secret) throw new Error("Twitter consumer secret not found!")
if (!TwitterConfig.access_token_key) throw new Error("Twitter access token key not found!")
if (!TwitterConfig.access_token_secret) throw new Error("Twitter access token secret not found!")


var client = new Twitter(TwitterConfig);

const timer = setInterval(_ => {
    https.get("https://www.doviz.com/api/v1/currencies/USD/latest", (res) => {
        if(res.statusCode != 200) return console.log("Bağlantı problemi !")
        let dump = ""
        res.setEncoding('utf8');
        res.on('data', (d) => {
            dump += d
        });

        res.on("end", _ => {
            var data = JSON.parse(dump);
            const date = new Date();
            client.post('statuses/update', {
                    status: `#dolar alış fiyatı : ${data.buying} ve Satış Fiyatı : ${data.selling} \n \n Tarih : ${date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}`
                })
                .then(function (tweet) {
                    removeInterval(timer)
                    console.log("Tweet paylaşıldı. Alış fiyatı, " + data.buying + " ve satış fiyatı, " + data.selling)
                })
                .catch(function (error) {
                    console.log(new Date())
                    console.log(error)
                })
        })

    }).on('error', (e) => {
        console.error(e);
    });
}, 900000)