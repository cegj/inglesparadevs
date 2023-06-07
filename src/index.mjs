import express from 'express'
import jsonServer from 'json-server'
import path from 'path'
import { fileURLToPath, URL } from 'url';

const PORT = process.env.PORT || 80
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const server = jsonServer.create()
const middlewares = jsonServer.defaults({
  static: path.join(__dirname, 'public')
})
const router = express.Router()
const jsonRouter = jsonServer.router(path.join(__dirname, 'db.json'))


// app.use(express.static('public'))
router.use('/api', jsonRouter)
server.use(middlewares)
server.use(router)
server.use(jsonServer.bodyParser)

server.listen(PORT, () => {
  console.log(`JSON server running on port ${PORT}`)
})