const express = require('express')
const app = express() 

app.get('/hello', (req, res) => {
    res.json({'message': 'hello world'})
})

app.listen(3000, () => {
    console.log('Server is running')
})