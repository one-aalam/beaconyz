const ngrok = require('ngrok');

module.exports = {
    connect(port) {
        return new Promise((resolve, reject) => {
            ngrok.connect(3000, (err, url) => {
                if (err) {
                    console.log("## NGROK : Error gate");
                    reject(err);
                }
                if (url) {
                    console.log(`## NGROK : Gate to port ${port} created`);
                    resolve(url);
                }
            });
        });
    }
};