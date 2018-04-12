import express from 'express'
import bodyParser from 'body-parser'

const PORT = process.env.PORT || 8080
const app = express()
app.use(bodyParser.json())

app.post('/build', (req, res) => {
    console.log(req.body)
    res.status(200).end()
})

app.get('*', (req, res) => {
    console.log(req)
    res.status(200).send('pong').end()
})

app.listen(PORT, () => console.log(`Server listening port ${PORT}`))