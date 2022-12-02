const http = require('http').createServer()
const io = require('socket.io')(http,{
    cors: {origin: "*"}
})

io.on('connection', (socket)=>{
    console.log('connected to server')
    socket.on('message',message=>{
        console.log(message)
        io.emit('message', `${socket.id.substring(0,2)} is saying ${message}`);
    })
})

http.listen(9000,()=>{
    console.log('the server is running.....')
})