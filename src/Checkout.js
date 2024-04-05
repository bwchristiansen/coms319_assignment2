import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './App';

const Checkout = () => {
    const { cart } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let newTotal = 0;
        cart.forEach(item => {
            newTotal += item.price * item.quantity;
        });
        setTotal(newTotal);
    }, [cart]);
    
    return (
        <div>
            <h1>Checkout</h1>
            <div class="card">
                <div class="row">
                    <div class="col-md-8 cart">
                        <div class="title">
                            <div class="row">
                                <div class="col">
                                    <h4><b>Shopping Cart</b></h4>
                                </div>
                                <div class="col align-self-center text-right text-muted">
                                    Products selected {cart.length}
                                </div>
                            </div>
                        </div>
                        { 
                            cart.map((item) => (
                                <div class="row border-top border-bottom" key={item.id}>
                                    <div class="row main align-items-center">
                                        <div class="col-2"><img class="img-fluid" src={item.image} /></div>
                                        <div class="col">
                                            <div class="row text-muted">{item.title}</div>
                                            <div class="row">{item.category}</div>
                                        </div>
                                        <div class="col">${item.price} x {item.quantity}</div>
                                    </div>
                                </div>
                            ))
                        }
                        <div class="row">
                            <div class="col align-self-center text-right text-muted">
                                Order total: ${total.toFixed(2)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/" class="btn btn-primary">Return</Link>
        </div>
    );
};

export default Checkout;