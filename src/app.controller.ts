import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BooksService } from './books/books.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly booksService: BooksService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hh')
  getBooks(): { id: number; name: string }[] {
    return this.booksService.getBooks();
  }
}
