enum BookStatus {
    DOSTEPNA = "DOSTEPNA",
    WYPOŻYCZONA = "WYPOŻYCZONA",
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
        const matchingTitles: Book[] = this.books.filter((book: Book)=> book.title === title)
        if (matchingTitles.length === 0)
            console.log("Nie znaleziono tytułu " + title)
        else if (matchingTitles.length === 1)
            console.log("Znaleziono " + title)
        // TODO: dokończyć to
    } 

}


const library: Library =  new Library();

const panTadeusz: Book = {
    title: "Pan Tadeusz",
    author: "Adam Mickiewicz",
    year: 1772,
    status: BookStatus.DOSTEPNA
}

library.addBook(panTadeusz)
library.borrowBook("Pan Tadeusz")