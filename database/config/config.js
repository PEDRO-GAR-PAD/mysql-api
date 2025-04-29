require('dotenv').config();

const sslConfig = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // A veces necesario si es un certificado autofirmado
    },
  },
};

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'mysql',
    ...sslConfig
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'mysql',
    ...sslConfig
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'mysql',
    ...sslConfig
  },
};