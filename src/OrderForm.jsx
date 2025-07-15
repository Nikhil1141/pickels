import React, { memo, useState } from 'react'
import logo from './assets/logo.jpg'; // place your logo image in /assets folder
import './index.css';

const OrderForm = () => {

    const mail = import.meta.env.VITE_MAIL;
    const [orderType, setOrderType] = useState('single');


    return (
        <div>
            <div className="container">
                {/* Logo */}
                <div className="logo">
                    <img src={logo} alt="Pickle Logo" />
                </div>

                {/* Form */}
                <div className="form-box">
                    <h2>Order Your Pickle's</h2>
                    <form action={`https://formsubmit.co/${mail}`} method="POST">
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <input type="text" name="address" placeholder="Delivery Address" required />
                        <input type="tel" name="phone" placeholder="Phone Number" required />


                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="orderType"
                                    value="single"
                                    checked={orderType === 'single'}
                                    onChange={() => setOrderType('single')}
                                />
                                Single Item
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="orderType"
                                    value="multiple"
                                    checked={orderType === 'multiple'}
                                    onChange={() => setOrderType('multiple')}
                                />
                                Multiple Items
                            </label>
                        </div>

                        {orderType === 'single' && (
                            <>
                                <select name="pickle_type" required>
                                    <option value="">Select Pickle Type</option>

                                    <optgroup label="Non-Veg Pickles">
                                        <option value="Chicken Pickle (Boneless)">Chicken Pickle (Boneless)</option>
                                        <option value="Chicken Thokku Pickle (Boneless)">Chicken Thokku Pickle (Boneless)</option>
                                        <option value="Mutton Gongura Pickle">Mutton Gongura Pickle</option>
                                        <option value="Prawns Pickle">Prawns Pickle</option>
                                    </optgroup>

                                    <optgroup label="Veg Pickles">
                                        <option value="Ginger Pickle (Sweet)">Ginger Pickle (Sweet)</option>
                                        <option value="Ginger Pickle (Hot)">Ginger Pickle (Hot)</option>
                                        <option value="Tomato Pickle">Tomato Pickle</option>
                                        <option value="Gongura Pickle">Gongura Pickle</option>
                                        <option value="Gongura Pandumirchi Pickle">Gongura Pandumirchi Pickle</option>
                                    </optgroup>

                                    <optgroup label="Karampodi / Spice Powders">
                                        <option value="Karivepaku (Curry Leaves) Podi">Karivepaku (Curry Leaves) Podi</option>
                                        <option value="Monaga Aaku Karam (Moringa Leaves)">Monaga Aaku Karam (Moringa Leaves)</option>
                                        <option value="Flax Seeds Podi (Avisi Ginjala Karam)">Flax Seeds Podi (Avisi Ginjala Karam)</option>
                                    </optgroup>
                                </select>

                                <input
                                    type="text"
                                    name="quantity"
                                    placeholder="Quantity (e.g. 500g, 1kg)"
                                    required
                                />
                            </>
                        )}

                        {orderType === 'multiple' && (
                            <textarea
                                name="multiple_items"
                                placeholder={`List your pickles and quantities here:\nEg:\nChicken Pickle (Boneless) - 1kg\nTomato Pickle - 500g\nKarivepaku Podi - 500g`}
                                rows="6"
                                required
                            />
                        )}


                        <textarea
                            name="comments"
                            placeholder="Any additional instructions? (e.g., make it extra spicy)"
                            rows="4"
                        />


                        {/* Hidden Fields */}
                        <input
                            type="hidden"
                            name="_autoresponse"
                            value="Thank you for your pickle order! We'll get in touch soon."
                        />

                        <button type="submit">Place Order</button>
                    </form>
                    <p className="note">Note: We will contact you to confirm your order and delivery details.</p>
                    <p className="note"> "Kindly check your inbox or spam folder for submitted details." </p>
                </div>
            </div>
        </div>
    )
}

export default memo(OrderForm)