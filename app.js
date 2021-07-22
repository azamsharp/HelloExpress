const express = require('express')
const app = express() 

app.get('/hello', (req, res) => {
    res.json({'message': 'hello world'})
})

const PORT = process.env.port || 3000

app.listen(PORT, () => {
    console.log('Server is running')
})