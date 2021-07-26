import './index.css';
import React, { useState } from 'react';

function SubmitBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [bookCover, setBookCover] = useState('');
    const [bookPDF, setBookPDF] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    function submitBook() {
        var book = {
            title,
            author,
            bookCover,
            bookPDF,
            description,
            price,
        }
        localStorage.setItem('book', JSON.stringify(book));
    }

    return (
        <div className="submit-book-form">
            <h2>Submit book to your library</h2>
            <div className="form-control">
                <label>Title</label>
                <input
                    type="text"
                    required
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
            </div>
            <div className="form-control">
                <label>Author</label>
                <input
                    type="text"
                    required
                    id="author"
                    name="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                ></input>
            </div>
            <div className="form-control">
                <label>Description</label>
                <textarea
                    type="text"
                    required
                    rows="5"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <div className="form-control">
                <label>Price</label>
                <input
                    type="number"
                    required
                    id="price"
                    name="price"
                    step="0.001"
                    min="0"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                ></input>
            </div>
            <div className="form-control">
                <label>Book Cover</label>
                <input
                    type="file"

                    id="bookCover"
                    name="bookCover"
                    value={bookCover}
                    onChange={(e) => setBookCover(e.target.value)}
                ></input>
            </div>
            <div className="form-control">
                <label>Book PDF</label>
                <input
                    type="file"

                    id="bookPDF"
                    name="bookPDF"
                    value={bookPDF}
                    onChange={(e) => setBookPDF(e.target.value)}
                ></input>
            </div>
            <button 
                className="submit-book-btn"
                onClick={submitBook}
            >Submit</button>
        </div>
    );
}

export default SubmitBook;
