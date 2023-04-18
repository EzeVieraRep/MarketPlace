const mongoose = require('mongoose');
const mongodbURL = require('./config')
    (async () => {
        try {
            await mongoose.connect(mongodbURL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            })
            console.log("******DB CONECTADA******")
        } catch (error) {
            console.log(error)
            process.exit(1)
        }
    })()