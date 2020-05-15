const http = require('http')
const app = require('./app')
const config = require('./config')
const server = http.createServer(app)

app.io.attach(server) // Atach server 
app.io.origins([config.ORIGINS]) // Origin socket configiration

server.listen(config.PORT, () => {
    console.log(`Server Listening on port ${config.PORT}`)
});