require('dotenv').config()

const cors = require('cors')
const express = require('express')

const connectDB = require('./db/connect')
const routes = require('./routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/v1/', routes)

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(
      process.env.PORT,
      console.log(`🚀 Server is running! ${process.env.PORT}...`),
    )
  } catch (error) {
    console.log(error)
  }
}

startServer()
