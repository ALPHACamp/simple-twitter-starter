const express = require('express')
const SocketServer = require('ws').Server

const PORT = 3333

// 建立 express 物件並綁定在 port 3333
const server = express().listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})

const wss = new SocketServer({ server })
let onlineUser = []
// 監聽是否有新的 client 連上線
wss.on('connection', ws => {
  console.log('One client has connected.')

  let clients = wss.clients

  // 監聽 client 傳來的訊息
  ws.on('message', event => {
    let data = JSON.parse(event)
    switch (data.type) {
      case 'login':
        onlineUser.push(data.userData);
        break;
      case 'message':
        if (data.toId && data.content) {
          clients.forEach(client => {
            client.send(JSON.stringify(data))
          })
          // ws.send(JSON.stringify(data))
        }
        break;

    }
    console.log(data)
    console.log(onlineUser)
  })

  //當 WebSocket 的連線關閉時執行
  ws.on('close', () => {
    console.log('One client has disconnected.')
    onlineUser.length = 0
    clients.forEach(client => {
      let data = { type: 'reorganize' }
      client.send(JSON.stringify(data))
    })
  })
})


module.exports = wss