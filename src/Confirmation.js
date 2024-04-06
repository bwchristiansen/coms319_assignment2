import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext, UserContext } from "./App";

function Confirmation() {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleReset = () => {
    setCart([]);
    navigate("/");
  };

  //   const updateHooks = () => {
  //     setDataF({});
  //     setViewer(0);
  //   };
  //return "PLACEHOLDER";
  //   <div>
  //     <h1>Payment summary:</h1>
  //     <h3>{dataF.fullName}</h3>
  //     <p>{dataF.email}</p>
  //     <p>{dataF.creditCard}</p>
  //     <p>{dataF.address}</p>
  //     <p>{dataF.address2}</p>
  //     <p>
  //       {dataF.city} {dataF.state} {dataF.zip}{" "}
  //     </p>
  //     <button onClick={updateHooks}>Submit</button>
  //   </div>

  return (
    <div>
      <h1>Payment summary:</h1>
      {cart.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.price} x {item.quantity}</p>
        </div>
      ))}
      <h2>Total: {total}</h2>
      <h3>User Information:</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Credit Card: **** **** **** {user.cardNumber.slice(-4)}</p>
      <p>Address: {user.address}</p>
      <p>Address 2: {user.address2}</p>
      <p>City: {user.city}, State: {user.state}, Zip: {user.zip}</p>
      <button onClick={handleReset}>Return to Browse View</button>
    </div>
  );
}

export default Confirmation;
