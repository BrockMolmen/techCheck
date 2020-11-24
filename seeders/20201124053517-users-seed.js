'use strict';
const bcrypt = require('bcrypt')


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, { truncate: true, cascade: true, restartIdentity: true });

    const bulkUsers = await queryInterface.bulkInsert('users', [
      {
        email: 'B_Excellent@email.com',
        firstName: 'Keanu',
        lastName: 'Reeves',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'LN@email.com',
        firstName: 'Lauren',
        lastName: 'Nguyen',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'B_Excellent@email.com',
        firstName: 'Jamie',
        lastName: 'Cabriges',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'brock@email.com',
        firstName: 'Brock',
        lastName: 'Molmen',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'lizzo@email.com',
        firstName: 'Lizzo',
        lastName: 'Beeaten',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'storm@email.com',
        firstName: 'Sandy',
        lastName: 'Storm',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'GusBus@email.com',
        firstName: 'Gus',
        lastName: 'Bus',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Klyf@email.com',
        firstName: 'Klyf',
        lastName: 'Kong',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'RKO@email.com',
        firstName: 'Randy',
        lastName: 'Orton',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'jane@email.com',
        firstName: 'Jane',
        lastName: 'Superwoman',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'wally@email.com',
        firstName: 'wally',
        lastName: 'waldo',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'ultimatePower@email.com',
        firstName: 'Sheeve',
        lastName: 'Palpatine',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Hambone@email.com',
        firstName: 'Rigby',
        lastName: 'Racoon',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'KwEeLeSdO@email.com',
        firstName: 'Kelso',
        lastName: 'Coolguy',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'imabird@email.com',
        firstName: 'Mordicai',
        lastName: 'Bird',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'SweetT@email.com',
        firstName: 'Trina',
        lastName: 'Oolong',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'pikachu@email.com',
        firstName: 'Ash',
        lastName: 'Chackum',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'ThickTheighs@email.com',
        firstName: 'Brock',
        lastName: 'Lesner',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'DogCat@email.com',
        firstName: 'Cat',
        lastName: 'Dog',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'ItsaMe@email.com',
        firstName: 'Mario',
        lastName: 'Mario',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'ElseBoo@email.com',
        firstName: 'Elsa',
        lastName: 'Boo',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'MarioIsMyBrother@email.com',
        firstName: 'Luigi',
        lastName: 'Mario',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'RuRoo@email.com',
        firstName: 'Scooby',
        lastName: 'Doo',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Kbear@email.com',
        firstName: 'Knut',
        lastName: 'Bear',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'LetMeAtEm@email.com',
        firstName: 'Scrappy',
        lastName: 'Doo',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'GoTe@email.com',
        firstName: 'Hank',
        lastName: 'Venture',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'amVenture@email.com',
        firstName: 'Dean',
        lastName: 'Venture',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'OhYeahBrother@email.com',
        firstName: 'Hulk',
        lastName: 'Hogan',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'daveystealssandles@email.com',
        firstName: 'Johnnie',
        lastName: 'Daveston',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'CantSeeMe@email.com',
        firstName: 'John',
        lastName: 'Cena',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'CopperRod@email.com',
        firstName: 'Rodney',
        lastName: 'Copper',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'Wooooooo@email.com',
        firstName: 'Rick',
        lastName: 'Flair',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'LegoLloyd@email.com',
        firstName: 'Lloyd',
        lastName: 'legoland',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'TheUndertaker@email.com',
        firstName: 'Mark',
        lastName: 'Calaway',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'PeeWee@email.com',
        firstName: 'Paul',
        lastName: 'Ruben',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'billbuttlicker@email.com',
        firstName: 'Bill',
        lastName: 'Butcher',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'admin@techcheck.com',
        firstName: 'Milton',
        lastName: 'Megabucks',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], { returning: true })

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
