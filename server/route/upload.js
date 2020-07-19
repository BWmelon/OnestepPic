const express = require('express')
const fs = require("fs");
const router = express.Router()

const multer = require('multer')
const upload = multer({
    dest: './imgs/'
})

router.post('/', upload.single('file'), async (req, res) => {
    const file = req.file

    let filename = "./imgs/" + file.originalname

    // if (file.mimetype == "image/jpeg") {
    //     filename += ".jpg";
    // }
    // if (file.mimetype == "image/png") {
    //     filename += ".png";
    // }
    // if (file.mimetype == "image/gif") {
    //     filename += ".gif";
    // }

    fs.renameSync(file.path, filename);

    file.url = `http://loaclhost:5002/${file.filename}`
    res.send(file)
})

module.exports = router