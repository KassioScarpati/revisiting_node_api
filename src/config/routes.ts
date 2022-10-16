import { Application } from 'express';

import { PingsController } from './../controllers';

export class Routes {
  constructor(
    private readonly app: Application,
    private readonly pingController: PingsController = new PingsController(),
  ) {};

  run() {
    this.publicRoutes();
  };

  private publicRoutes() {
    // ping
    this.app.route('/ping').get(
      async (req, res) => await this.pingController.ping(req, res),
    );
  };
};
