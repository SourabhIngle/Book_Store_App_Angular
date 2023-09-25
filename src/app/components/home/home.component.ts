import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { SharedCartService } from 'src/app/services/shared-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  numberOfBooks = 0;
  cartItemCount: number = 0;

  constructor(private book: BookService, 
    private sharedCardService: SharedCartService) {
  }

  // Creating an empty book array.
  public books: Book[] = [];

  ngOnInit(): void {
    // Fetch books from the backend and store them in the 'books' array
    this.book.getBooks().subscribe(response => {
      this.books = response;
      
      // Get the total number of books
      this.numberOfBooks = this.books.length;
    })
  }

  // Event handler when a book is clicked to add or remove it from the bag
  onClick(book: Book) {
    if (!book.addedToBag) {
      // If the book is not in the bag, fetch additional information (e.g., book details) and mark it as added
      this.book.getBookById(book.book_id).subscribe(response => {
        console.log("Clicked")
        book.addedToBag = true;
        this.sharedCardService.incrementItemCount();
      });
    } else {
      // If the book is already in the bag, mark it as not added
      book.addedToBag = false; 
      this.sharedCardService.decrementItemCount();
    }
  }
}
