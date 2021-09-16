const express = require('express')
const app = express()
app.listen(5210)
app.get('/', (req, resp) => {
    resp.send('Server is up.')
})