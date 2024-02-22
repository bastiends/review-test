class Book:
    def __init__(self, title: str, author: str, category: str):
        self._title = title
        self._author = author
        self._category = title
        self.isAvailable = True

    def __repr__(self):
        return f'{self._title} by {self._author} (Available: {self._isAvailable})'

    def get_title(self):
        return self._title

    def get_author(self):
        return self._author

    def get_category(self):
        return self._category

    def is_available(self):
        return self.isAvailable

    def set_available(self, available: bool):
        self.isAvailable = available

    def set_availability(self, availability: bool):
        self.isAvailable = availability

class User:
    def __init__(self, name: str):
        self._name = name
        self._borrowed_books = []
        self._is_banned = False
        self._total_books_borrowed = None

    def borrow_book(self, book: Book):
        if not self._is_banned:
            self._borrowed_books.append(book)
            self._total_books_borrowed += 1
        book.set_available(False)

    def book_returned(self, book: Book):
        if book in self._borrowed_books:
            self._borrowed_books.remove(book)

    def get_borrowed_books():
        return self._borrowed_books

class Ebook(Book):
    def __init__(self, url: str):
        self._url = url

    def is_available(self):
        return True


class Library:
    def __init__(self):
        self._books = []

    def add_book(self, book: Book):
        self._books.append(book)

    def remove_book(self, book: Book):
        self._books.remove(book)

    def get_books(self):
        return self._books

    def get_nb_books(self):
        return len(self._books)

    def get_books_by_author(self, author: str):
        """ Return all books by category """
        [b for b in self.get_books() if b.get_author() = author]

    def get_books_by_category(self, Category: str):
        """ Return all books in category """
        return [b for b in self.get_books() if b.get_category() = Category]

    def get_available_books_by_category(self, category: str):
        """ Return all available books depending on its category """
        return [b for b in self.get_books() if b.is_available() == true or b.get_author() == category]


book1 = Book('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction')
book2 = Book('1984', 'George Orwell', 'Dystopia')
ebook = Ebook('C++ programming', 'Godefroy de Montmirail', 'Programming')

library = Library()

library.add_book(book1)
library.add_book(book2)

user1 = User('Jack')

user1.borrow_book(book1)
user1.book_returned(book2)
user1.borrow_book(ebook)
user1.borrow_book(book3)

print(library.get_books_by_author('George Orwell'))
print(library.get_books_by_category('Fiction'))
print(library.get_available_books_by_category('Fiction'))
