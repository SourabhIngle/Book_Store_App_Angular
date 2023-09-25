export class Book {
    book_id!: number;
    bookName!: String;
    authorName!: String;
    description!: String;
    logo!: String;
    bookPrice!: number;
    quantity!: number;
    addedToBag: boolean = false; // Added property to track added state

}
