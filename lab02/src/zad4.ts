enum BookStatus {
    DOSTEPNA = "DOSTEPNA",
    WYPOZYCZONA = "WYPOZYCZONA",
    ZGUBIONA = "ZGUBIONA",
}

class Book {
    public title: string;
    public author: string;
    public year: number;
    public status: BookStatus;

    public constructor(title: string, author: string, year: number, status: BookStatus) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.status = status;
      }
}

class Library {
    public books: Book[];

    public constructor(){
        this.books = []
    }

    public addBook(book: Book): void{
        this.books.push(book);
        console.log("Dodano \"" + book.title + "\" do biblioteki")
    }
    public borrowBook(title: string): void {
        for (const book of this.books) {
            if (book.title.toLowerCase() === title.toLowerCase() && book.status === BookStatus.DOSTEPNA) {
                book.status = BookStatus.WYPOZYCZONA;
                console.log("Zmieniono status książki \"" + book.title + "\" na " + book.status)
                break;
            }
        }
    } 

    public returnBook(title: string): void{
        for (const book of this.books) {
            if (book.title.toLowerCase() === title.toLowerCase() && book.status === BookStatus.WYPOZYCZONA) {
                book.status = BookStatus.DOSTEPNA;
                console.log("Zmieniono status książki \"" + book.title + "\" na " + book.status)
                break;
            }
        }
    }

    public findBooksByAuthor(author: string): Book[] {
        const matchingBooks: Book[] = this.books.filter((book: Book)=> book.author.toLowerCase() === author.toLowerCase());
        return matchingBooks;
    }

    public findBooksByStatus(status: BookStatus): Book[]{
        const matchingBooks: Book[] = this.books.filter((book: Book)=> book.status === status);
        return matchingBooks;
    }

}


const library: Library =  new Library();

const panTadeusz: Book = {
    title: "Pan Tadeusz",
    author: "Adam Mickiewicz",
    year: 1772,
    status: BookStatus.DOSTEPNA
}

const lalka: Book = {
    title: "Lalka",
    author: "Bolesław Prus",
    year: 1845,
    status: BookStatus.DOSTEPNA
}

const dziady3: Book = {
    title: "Dziady cz.III",
    author: "Adam Mickiewicz",
    year: 1776,
    status: BookStatus.WYPOZYCZONA
}

library.addBook(panTadeusz)
library.addBook(lalka)
library.addBook(dziady3)

library.borrowBook("lalka")
library.returnBook("lalka")

// console.log(library.findBooksByAuthor("Adam Mickiewicz"));
// console.log(library.findBooksByStatus(BookStatus.WYPOZYCZONA))