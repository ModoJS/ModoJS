import dotenv from 'dotenv'
import Server from './Api/server';
import dbConnection from './DAL/Entities/mongodb';

dotenv.config();

const server = new Server();
server.listen();

dbConnection();

