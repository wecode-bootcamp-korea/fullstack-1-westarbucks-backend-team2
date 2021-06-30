import express from 'express'
import route from './route'

const app = express()

app.use(express.json())
app.use(route)

app.use((err, req, res, next) => {
    const { status, message } = err
    console.error(err)
    res.status(status || 500).json({ message })
})

export { app }