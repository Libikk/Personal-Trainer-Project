const env = process.env.NODE_ENV;

const config = {
  version: '0.01',
  url: env === 'production' ? 'http://kregielmarek.com' : 'http://localhost:3000',
  port: env === 'production' ? 80 : 3000,
};
// this is test/ branch one1
module.exports = config;
