import { Controller, Get, UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { AuthGuard } from 'src/shared/gaurds/auth.gaurd';

@Controller('books')
@UseGuards(AuthGuard)
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get()
  getBooks(): { id: number; name: string }[] {
    return this.booksService.getBooks();
  }
}
