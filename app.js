const express = require('express')
const path = require('path')
const mongoose = require('mongoose');
const cors = require('cors')

const PORT = process.env.PORT || 5000
const app = express()

//4Y8LLoNNw1x4m6KF
const MONGOURI = "mongodb+srv://shafah:4Y8LLoNNw1x4m6KF@cluster0.w3hwu.mongodb.net/shafah?retryWrites=true&w=majority"

const aboutRoute = require('./routes/detailsRoute')
const projectRoute = require('./routes/projects')

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED..................")
}).catch((error) => {
    console.log("DB error->", error);
})

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'portfolio', 'build')))
app.use('/assets', express.static(path.join(__dirname)));
app.use('/api', aboutRoute)
app.use('/api', projectRoute)

app.listen(PORT, () => {
    console.log(`Server running at port : ${PORT}`);
})
