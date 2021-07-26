import './index.css';
import React, { useState } from 'react';

function BookInfo() {
    var book = localStorage.getItem('book');
    book = JSON.parse(book);
    console.log(book.bookCover);

    return (
        <div className="book-info-container">
            <div className="book-info">
                <div>
                    <div className="book-img">
                        <img
                            src={"file:/" + book.bookCover}
                            alt=""
                        ></img>
                    </div>
                    <div className="book-description">
                        <label>Description</label>
                        <textarea
                            name="description"
                            rows="12"
                            disabled
                            defaultValue={book.description}
                        ></textarea>
                    </div>
                </div>

                <div className="book-item">
                    <h1>{book.title}</h1>
                    <h3>Author by {book.author}</h3>

                    <div className="book-content">
                        <div className="book-price">
                            <label>Current price</label>
                            <h3>{book.price}</h3>
                        </div>

                        <div className="book-action">
                            <button className="buy-book-btn">Buy</button>
                            <button className="borrow-book-btn">Borrow</button>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="recommend-book-container"></div>

            <div className="review-book-container"></div>
        </div>
    );
}

export default BookInfo;
