import './Library.css';
import React from 'react';
import '../../Fontawesome/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Library() {
    return (
        <div className="library-container" id="library">
            {/* Filter book */}
            <div className="library-filter">
                <div className="category-filter">
                    <h1>Categories</h1>
                    <div>
                        <div className="category-checkbox">
                            <input
                                type="checkbox"
                                name="Romance"
                                value="Romance"
                            ></input>
                            <label htmlFor="Romance">Romance</label>
                        </div>
                        <div className="category-checkbox">
                            <input
                                type="checkbox"
                                name="Classic"
                                value="Classic"
                            ></input>
                            <label htmlFor="Classic">Classic</label>
                        </div>
                        <div className="category-checkbox">
                            <input
                                type="checkbox"
                                name="Poetry"
                                value="Poetry"
                            ></input>
                            <label htmlFor="Poetry">Poetry</label>
                        </div>
                        <div className="category-checkbox">
                            <input
                                type="checkbox"
                                name="Science"
                                value="Science"
                            ></input>
                            <label htmlFor="Science">Science</label>
                        </div>
                        <div className="category-checkbox">
                            <input
                                type="checkbox"
                                name="Literature"
                                value="Literature"
                            ></input>
                            <label htmlFor="Literature">Literature</label>
                        </div>
                    </div>
                </div>

                <div className="status-filter">
                    <div>
                        <h1>Status</h1>
                        <div>
                            <div className="status-checkbox">
                                <input
                                    type="checkbox"
                                    name="Romance"
                                    value="Romance"
                                ></input>
                                <label htmlFor="Romance">New</label>
                            </div>
                            <div className="status-checkbox">
                                <input
                                    type="checkbox"
                                    name="Classic"
                                    value="Classic"
                                ></input>
                                <label htmlFor="Classic">On sale</label>
                            </div>
                            <div className="status-checkbox">
                                <input
                                    type="checkbox"
                                    name="Poetry"
                                    value="Poetry"
                                ></input>
                                <label htmlFor="Poetry">Hired a lot</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="price-filter">
                    <div>
                        <h1>Price</h1>
                        <div>
                            <input
                                type="text"
                                placeholder="Min"
                                className="price-input"
                            ></input>
                            <p>to</p>
                            <input
                                type="text"
                                placeholder="Max"
                                className="price-input"
                            ></input>
                        </div>
                    </div>

                    <button className="apply-btn">Apply</button>
                </div>
            </div>

            {/* Search book */}
            <div className="library-item">
                <button className="sort-btn">
                    Sort by 
                    <FontAwesomeIcon icon="angle-down" />
                </button>

                <div className="book-row">
                    <div className="book-item">
                        <img
                            className="book-img"
                            alt=""
                            src="https://lh3.googleusercontent.com/EGp3z-F9GyuVMhn62soHEYnnjc1gRR-ZdenQsdDBsiFzmzGQaYTbojtqykX9-pSJ2gz1Q5cLvg8p2h4tzc0FVrU4nJ6azmJmOvJbfg=w600"
                        ></img>
                        <div>
                            <h4>Confessions of a Cryptomaniac</h4>
                            <div className="book-price">
                                <h5>Price</h5>
                                <h4>0.001</h4>
                            </div>
                        </div>
                    </div>

                    <div className="book-item">
                        <img
                            className="book-img"
                            alt=""
                            src="https://lh3.googleusercontent.com/tMW_DQoq1_MkNXXdmT_S9RfRQyX_G1UKso4Da-fyfw3DXCIJnWl9Lx1lVEkgDjDEqBrq3sMBnUwEC7pUQ-kqdyyzRxkvj4a37nnK8A=w600"
                        ></img>
                        <div>
                            <h4>Confessions of a Cryptomaniac</h4>
                            <div className="book-price">
                                <h5>Price</h5>
                                <h4>0.001</h4>
                            </div>
                        </div>
                    </div>

                    <div className="book-item">
                        <img
                            className="book-img"
                            alt=""
                            src="https://lh3.googleusercontent.com/EPPK7X0bwpsex_YbrFe6Tw1BKWLvWQu2CvBOky36EuKUQjSKsfQKELVLtoP9W2wrigA0jgUZ6GhNU_srKwiuW-qJrYcmk3XOraz9Ug=w600"
                        ></img>
                        <div>
                            <h4>Confessions of a Cryptomaniac</h4>
                            <div className="book-price">
                                <h5>Price</h5>
                                <h4>0.001</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="book-row">
                    <div className="book-item">
                        <img
                            className="book-img"
                            alt=""
                            src="https://lh3.googleusercontent.com/EGp3z-F9GyuVMhn62soHEYnnjc1gRR-ZdenQsdDBsiFzmzGQaYTbojtqykX9-pSJ2gz1Q5cLvg8p2h4tzc0FVrU4nJ6azmJmOvJbfg=w600"
                        ></img>
                        <div>
                            <h4>Confessions of a Cryptomaniac</h4>
                            <div className="book-price">
                                <h5>Price</h5>
                                <h4>0.001</h4>
                            </div>
                        </div>
                    </div>

                    <div className="book-item">
                        <img
                            className="book-img"
                            alt=""
                            src="https://lh3.googleusercontent.com/tMW_DQoq1_MkNXXdmT_S9RfRQyX_G1UKso4Da-fyfw3DXCIJnWl9Lx1lVEkgDjDEqBrq3sMBnUwEC7pUQ-kqdyyzRxkvj4a37nnK8A=w600"
                        ></img>
                        <div>
                            <h4>Confessions of a Cryptomaniac</h4>
                            <div className="book-price">
                                <h5>Price</h5>
                                <h4>0.001</h4>
                            </div>
                        </div>
                    </div>

                    <div className="book-item">
                        <img
                            className="book-img"
                            alt=""
                            src="https://lh3.googleusercontent.com/EPPK7X0bwpsex_YbrFe6Tw1BKWLvWQu2CvBOky36EuKUQjSKsfQKELVLtoP9W2wrigA0jgUZ6GhNU_srKwiuW-qJrYcmk3XOraz9Ug=w600"
                        ></img>
                        <div>
                            <h4>Confessions of a Cryptomaniac</h4>
                            <div className="book-price">
                                <h5>Price</h5>
                                <h4>0.001</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="book-row">
                    <div className="book-item">
                        <img
                            className="book-img"
                            alt=""
                            src="https://lh3.googleusercontent.com/EGp3z-F9GyuVMhn62soHEYnnjc1gRR-ZdenQsdDBsiFzmzGQaYTbojtqykX9-pSJ2gz1Q5cLvg8p2h4tzc0FVrU4nJ6azmJmOvJbfg=w600"
                        ></img>
                        <div>
                            <h4>Confessions of a Cryptomaniac</h4>
                            <div className="book-price">
                                <h5>Price</h5>
                                <h4>0.001</h4>
                            </div>
                        </div>
                    </div>

                    <div className="book-item">
                        <img
                            className="book-img"
                            alt=""
                            src="https://lh3.googleusercontent.com/tMW_DQoq1_MkNXXdmT_S9RfRQyX_G1UKso4Da-fyfw3DXCIJnWl9Lx1lVEkgDjDEqBrq3sMBnUwEC7pUQ-kqdyyzRxkvj4a37nnK8A=w600"
                        ></img>
                        <div>
                            <h4>Confessions of a Cryptomaniac</h4>
                            <div className="book-price">
                                <h5>Price</h5>
                                <h4>0.001</h4>
                            </div>
                        </div>
                    </div>

                    <div className="book-item">
                        <img
                            className="book-img"
                            alt=""
                            src="https://lh3.googleusercontent.com/EPPK7X0bwpsex_YbrFe6Tw1BKWLvWQu2CvBOky36EuKUQjSKsfQKELVLtoP9W2wrigA0jgUZ6GhNU_srKwiuW-qJrYcmk3XOraz9Ug=w600"
                        ></img>
                        <div>
                            <h4>Confessions of a Cryptomaniac</h4>
                            <div className="book-price">
                                <h5>Price</h5>
                                <h4>0.001</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pagination">
                    <a href="/">&laquo;</a>
                    <a href="/">1</a>
                    <a href="/">2</a>
                    <a href="/">3</a>
                    <a href="/">4</a>
                    <a href="/">5</a>
                    <a href="/">&raquo;</a>
                </div>
            </div>
        </div>
    );
}

export default Library;
