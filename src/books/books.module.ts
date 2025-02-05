import { Module, MiddlewareConsumer } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { AuthenticationMiddleware } from '../shared/middlewares/authentication';

const createConnection = () => {
  return 5;
};

@Module({
  controllers: [BooksController],
  providers: [
    BooksService,
    {
      provide: 'ASYNC_CONNECTION',
      // useFactory: async () => {
      //   const connection = await createConnection();
      //   return connection;
      // },
      useValue: createConnection(),
    },
  ],
  exports: [BooksService],
})
export class BooksModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes('books');
  }
}
