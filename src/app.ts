import express from 'express';
import cors from 'cors';
import { Routes } from './config/routes';

class Application {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  };

  routes() {
    new Routes(this.app).run();
  };

  middlewares() {
    this.app.use(cors({ origin: '*' }));
    this.app.use(express.json({ limit: 9 * 1024 * 1024 }));// limit em bytes - 9mb
    this.app.use(express.urlencoded({ extended: true }));
  };
};

export default new Application().app;
