import { database } from './env';

module.exports = {
  development: {
    user: database.dbUser,
    password: database.dbPassword,
    connectString: database.dbConnectString,
  },
};
