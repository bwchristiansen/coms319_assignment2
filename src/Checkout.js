import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './App';

const Checkout = () => {
    const { cart } = useContext(CartContext);
    
    return (
        <div>
            <h1>Checkout</h1>
            { 
                cart.map((item) => (
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                        { /* Need to implement quantity */}
                    </div>
                ))
            }
            {/* Need to implement total cost */}
            { /* Need to implement form */}
            <Link to="/" class="btn btn-primary">Return</Link>
        </div>
    );
};

export default Checkout;