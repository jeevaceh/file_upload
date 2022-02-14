const express = require('express');
const multer = require('multer');
const app = express();



app.get('/', (req, res) => {
    res.sent('Image upload app using postman');

});
app.listen(3100, () => {
    console.log('Started on port 3100')
});


const uploads = multer({ dest: 'uploads/' }).single('image');
app.post('/image', (req, res) => {
    uploads(req, res, (err) => {
        if (err) {
            res.status(400).sendStatus('something went wrong')
        }
        res.send(req.file);
    });
});


