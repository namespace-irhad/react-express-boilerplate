import dotenv from 'dotenv';
dotenv.config();

const { env } = process;

export const isDev = env.NODE_ENV === 'development';

export const server = {
  port: parseInt(env.PORT, 10),
  hostName: env.HOSTNAME,
  sessionSecret: env.SESSION_SECRET,
};

export const database = {
  dbUser: env.DB_USER,
  dbPassword: env.DB_PASSWORD,
  dbConnectString: env.DB_CONNECT_STRING,
};
