import { useState } from "react";
import { RdButton, RdCard } from "readmedev-ds";
import { IBook } from "../../interfaces/IBook";

import "./BooksFeatured.css";

interface BooksFeaturedProps {
  books: IBook[];
}

const BooksFeatured = ({ books }: BooksFeaturedProps) => {
  const [selected, setSelected] = useState<IBook>(books[0]);

  return (
    <section className="books-section">
      <div>
        <ul className="books">
          {books.map((book) => {
            return (
              <li
                key={book.name}
                onClick={() => setSelected(book)}
                className={selected?.name === book.name ? "selected" : ""}
              >
                <img
                  src={book.image}
                  alt={`Capa do livro ${book.name} escrito por ${book.author}`}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container-rd-card">
        <RdCard>
          <div className="selected-details">
            <header>
              <h5>Sobre o livro:</h5>
            </header>
            <h6>{selected.name}</h6>
            <p>{selected.description}</p>
            <p>Por: {selected.author}</p>
            <footer>
              <div className="price">
                <em>A partir de: </em>
                <strong>
                  {Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(selected.price)}
                </strong>
              </div>
              <div>
                <RdButton text="Comprar" />
              </div>
            </footer>
          </div>
        </RdCard>
      </div>
    </section>
  );
};

export default BooksFeatured;
