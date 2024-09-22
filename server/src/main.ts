import app from './app'
import { startConnection } from './database'

const port = process.env.PORT ?? 4000

startConnection()
app.listen(port)
console.log('server runing and listening port' + port)
