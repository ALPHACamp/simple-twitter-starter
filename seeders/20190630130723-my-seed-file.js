'use strict'
const crypto = require('crypto')
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      'Users',
      Array.from({ length: 10 }).map((d, index) => ({
        name: `user${index}`,
        email: `user${index}@example.com`,
        password: crypto
          .createHash('md5')
          .update('12345678', 'utf8')
          .digest('hex'),
        avatar: faker.image.imageUrl(),
        introduction: faker.lorem.text(),
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      })),
      {}
    )
    queryInterface.bulkInsert(
      'Tweets',
      Array.from({ length: 10 }).map(d => ({
        description: faker.lorem.text(),
        UserId: Math.floor(Math.random() * 2) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      })),
      {}
    )
    return queryInterface.bulkInsert(
      'Replies',
      [
        {
          UserId: 1,
          TweetId: 1,
          comment: '好餓',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Users', null, {})
    return queryInterface.bulkDelete('Tweets', null, {})
  }
}
