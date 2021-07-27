import './MarketPlace.css';
import React from 'react';

function MarketPlace() {
    return (
        <div className="market-place-container" id="market-place">
            <div className="market-place-row">
                <div className="market-place-item">
                    <img
                        className="market-place-item-img"
                        src="https://lh3.googleusercontent.com/EGp3z-F9GyuVMhn62soHEYnnjc1gRR-ZdenQsdDBsiFzmzGQaYTbojtqykX9-pSJ2gz1Q5cLvg8p2h4tzc0FVrU4nJ6azmJmOvJbfg=w600"
                        alt=""
                    ></img>

                    <div className="market-place-item-content">
                        <label>Token ID:</label>
                        <label>Name:</label>
                        <label>Minted By:</label>
                        <label>Owned By:</label>
                        <label>Previous Owner:</label>
                        <label>Price:</label>
                        <label>No. of Transfer:</label>
                    </div>

                    <div className="market-place-item-action">
                        <label>Change Price</label>
                        <input
                            type="number"
                            min="0"
                            step="0.001"
                            placeholder="Enter new price"
                        ></input>
                        <button className="change-price-btn">
                            Change price
                        </button>
                        <button className="remove-btn">
                            Remove from store
                        </button>
                    </div>
                </div>

                <div className="market-place-item">
                    <img
                        className="market-place-item-img"
                        src="https://lh3.googleusercontent.com/EPPK7X0bwpsex_YbrFe6Tw1BKWLvWQu2CvBOky36EuKUQjSKsfQKELVLtoP9W2wrigA0jgUZ6GhNU_srKwiuW-qJrYcmk3XOraz9Ug=w600"
                        alt=""
                    ></img>

                    <div className="market-place-item-content">
                        <label>Token ID:</label>
                        <label>Name:</label>
                        <label>Minted By:</label>
                        <label>Owned By:</label>
                        <label>Previous Owner:</label>
                        <label>Price:</label>
                        <label>No. of Transfer:</label>
                    </div>

                    <div className="market-place-item-action">
                        <label>Change Price</label>
                        <input
                            type="number"
                            min="0"
                            step="0.001"
                            placeholder="Enter new price"
                        ></input>
                        <button className="change-price-btn">
                            Change price
                        </button>
                        <button className="remove-btn">
                            Remove from store
                        </button>
                    </div>
                </div>

                <div className="market-place-item">
                    <img
                        className="market-place-item-img"
                        src="https://lh3.googleusercontent.com/EGp3z-F9GyuVMhn62soHEYnnjc1gRR-ZdenQsdDBsiFzmzGQaYTbojtqykX9-pSJ2gz1Q5cLvg8p2h4tzc0FVrU4nJ6azmJmOvJbfg=w600"
                        alt=""
                    ></img>

                    <div className="market-place-item-content">
                        <label>Token ID:</label>
                        <label>Name:</label>
                        <label>Minted By:</label>
                        <label>Owned By:</label>
                        <label>Previous Owner:</label>
                        <label>Price:</label>
                        <label>No. of Transfer:</label>
                    </div>

                    <div className="market-place-item-action">
                        <label>Change Price</label>
                        <input
                            type="number"
                            min="0"
                            step="0.001"
                            placeholder="Enter new price"
                        ></input>
                        <button className="change-price-btn">
                            Change price
                        </button>
                        <button className="remove-btn">
                            Remove from store
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarketPlace;
