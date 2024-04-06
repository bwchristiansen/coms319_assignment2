import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from './App';
import Select from 'react-select';

const Checkout = () => {
    const { cart } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [state, setState] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        let newTotal = 0;
        cart.forEach(item => {
            newTotal += item.price * item.quantity;
        });
        setTotal(newTotal);
    }, [cart]);

    const handleOrder = (event) => {
        event.preventDefault();
        // Add your validation logic here
        navigate('/confirmation');
    };

    const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
    const stateOptions = states.map(state => ({ value: state, label: state }));

    return (
        <div>
            <Link to="/" class="btn btn-primary">Return</Link>
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
            <form onSubmit={handleOrder}>
                <h2>Payment Information</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <input style={{ flex: 1 }} type="text" placeholder="Full Name" required />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <input style={{ flex: 1 }} type="email" placeholder="Email" required />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <input style={{ flex: 1 }} type="text" placeholder="Card Number XXXX-XXXX-XXXX-XXXX" required />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <input style={{ flex: 1 }} type="text" placeholder="Address" required />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <input style={{ flex: 1 }} type="text" placeholder="Address 2" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <input style={{ flex: 1 }} type="text" placeholder="City" required />
                    <Select options={stateOptions} defaultValue={stateOptions[0]} onChange={selectedOption => setState(selectedOption.value)} style={{ flex: 1 }} />
                    <input style={{ flex: 1 }} type="text" pattern="\d{5}" placeholder="Zip" required />
                </div>
                <div>
                    <input type="checkbox" id="confirm" required />
                    <label for="confirm">Check me out</label>
                </div>
                <button type="submit">Order</button>
            </form>
        </div>
    );
};

export default Checkout;