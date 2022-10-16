import { Request, Response } from 'express';

export class PingsController {
  public async ping(req: Request, res: Response) {
    res.json({
      message: 'PONG',
    });
  };
};
