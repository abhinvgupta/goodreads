import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class BooksService {
  constructor(@Inject('ASYNC_CONNECTION') private connection) {}
  getBooks(): { id: number; name: string }[] {
    return [
      {
        id: 1,
        name: 'WOW',
      },
      {
        id: 2,
        name: 'LOTR',
      },
      {
        id: this.connection,
        name: 'Harry Potter',
      },
    ];
  }
}
