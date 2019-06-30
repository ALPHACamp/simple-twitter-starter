'use strict'
const crypto = require('crypto')

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'root',
          email: 'root@example.com',
          password: crypto
            .createHash('md5')
            .update('12345678', 'utf8')
            .digest('hex'),
          avatar: null,
          introduction: 'Hello world',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'user1',
          email: 'user1@example.com',
          password: crypto
            .createHash('md5')
            .update('12345678', 'utf8')
            .digest('hex'),
          avatar: null,
          introduction: 'Hello world',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
    return queryInterface.bulkInsert(
      'Tweets',
      Array.from({ length: 10 }).map(d => ({
        description: '今天天氣真好',
        UserId: Math.floor(Math.random() * 2) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      })),
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Users', null, {})
    return queryInterface.bulkDelete('Tweets', null, {})
  }
}
