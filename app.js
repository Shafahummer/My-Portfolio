const express = require('express')

const PORT = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
    res.send("This is home page")
})

app.listen(PORT, () => {
    console.log(`Server running at port : ${PORT}`);
})
