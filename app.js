const express = require('express')
const app = express()
const port = 5002

const upload = require('./route/upload')

app.use('/upload', upload)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
})