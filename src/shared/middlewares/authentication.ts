import { HttpException, HttpStatus, NestMiddleware, Res } from '@nestjs/common';
import { NextFunction } from 'express';

class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, @Res() res: Response, next: NextFunction) {
    console.log('AuthenticationMiddleware');
    console.log(req.headers, 'header');
    let token: any = req.headers;
    token = token.authorization;
    console.log(token, 'token123s');

    /* The line `return res.json({ message: 'Unauthorized' });` is sending a JSON response with a
    message "Unauthorized" when the authentication token is not present in the request headers.
    This is a common practice in middleware to handle unauthorized access by sending an
    appropriate response to the client. */
    if (!token) {
      console.log('here');
      throw new HttpException('Invalid', HttpStatus.FORBIDDEN);
    }

    next();
  }
}

export { AuthenticationMiddleware };
