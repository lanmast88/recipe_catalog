import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import recipesRouter from './routes/recipes.js'
import logger from './middleware/logger.js'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger)

app.use('/api/recipes', recipesRouter)

app.use(express.static(path.join(__dirname, 'dist')))
app.get('*', (req,res)=>res.sendFile(path.join(__dirname,'dist','index.html')))

app.listen(3000,()=>console.log("http://localhost:3000"))