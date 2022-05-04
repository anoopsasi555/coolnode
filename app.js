const express = require('express')
const app = express()


const PORT = process.env.port || 3000

app.get('/', (req, res) => {
    res.send('new server')
})

app.listen(PORT, () => {
    console.log(`new server started at ${PORT}`);
})

