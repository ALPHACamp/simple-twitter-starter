'use strict';
const bcrypt = require('bcrypt-nodejs')
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Users', [{
      email: 'root@example.com',
      password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
      role: "Admin",
      name: 'root',
      avatar: "",
      introduction: "hi,i'm a User",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: 'user1@example.com',
      password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
      role: "User",
      name: 'user1',
      avatar: "",
      introduction: "hi,i'm a User",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: 'user2@example.com',
      password: bcrypt.hashSync('12345678', bcrypt.genSaltSync(10), null),
      role: "User",
      name: 'user2',
      avatar: "",
      introduction: "hi,i'm a User",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})

    return queryInterface.bulkInsert('Tweets',
      Array.from({ length: 50 }).map(d =>
        ({
          UserId: Math.floor(Math.random() * 3) + 1,
          description: faker.lorem.text(),
          createdAt: new Date(),
          updatedAt: new Date()
        })
      ), {})
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Tweets', null, {})
    return queryInterface.bulkDelete('Users', null, {})
  }
};