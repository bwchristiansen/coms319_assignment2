import React, { useState, useEffect } from "react";
import items from "./products.json";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

var order = {
  name: "",
  email: "",
  card: "",
  address: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
};

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const newTotal = cart.reduce((total, item) => total + item.price, 0);
    setCartTotal(newTotal);
    }, [cart]);

    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, item]);
    };
    
      const removeFromCart = (item) => {
        setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== item.id));
        };
      const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const filteredItems = items.filter((item) => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const listItems = filteredItems.map((el) => (
        // PRODUCT
        <div class="row border-top border-bottom" key={el.id}>
          <div class="row main align-items-center">
            <div class="col-2">
              <img class="img-fluid" src={el.image} />
            </div>
            <div class="col">
              <div class="row text-muted">{el.title}</div>
              <div class="row">{el.category}</div>
            </div>
            <div class="col">
              <button
                type="button"
                variant="light"
                onClick={() => removeFromCart(el)}
              >
                {" "}
                -{" "}
              </button>{" "}
              <button
                type="button"
                variant="light"
                onClick={() => addToCart(el)}
              >
                {" "}
                +{" "}
              </button>
            </div>
            <div class="col">
              ${el.price} <span class="close">&#10005;</span>
              {/* {howManyofThis(el.id)} */}
            </div>
          </div>
        </div>
      ));

  // function validateOrder(order) {
  //   let bool = true;
  //   let email = document.getElementById("email");
  //   let card = document.getElementById("card");
  //   let address = document.getElementById("address");
  //   let address2 = document.getElementById("address2");
  //   let city = document.getElementById("city");
  //   let state = document.getElementById("state");
  //   let zip = document.getElementById("zip");
  //   const cardSum = document.querySelector(".card");
  //   const sList = document.querySelector(".card > ul");
  //   const alerter = document.getElementById("alerterHolder");

  //   if (
  //     order.name === "" &&
  //     order.email === "" &&
  //     order.card === "" &&
  //     order.address === "" &&
  //     order.city === "" &&
  //     order.state === "" &&
  //     order.zip === ""
  //   ) {
  //     alert("Please enter a name.");
  //     bool = false;
  //   }
  //   if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)) {
  //     alert("Please enter a valid email.");
  //     bool = false;
  //   }
  //   if (!/^\d{16}$/.test(card.value)) {
  //     alert("Please enter a valid card number.");
  //     bool = false;
  //   }
  //   if (!/^[a-zA-Z0-9\s,'-]*$/.test(address.value)) {
  //     alert("Please enter a valid address.");
  //     bool = false;
  //   }
  //   if (!/^[a-zA-Z\s-]+$/.test(city.value)) {
  //     alert("Please enter a valid city.");
  //     bool = false;
  //   }
  //   if (!/^[a-zA-Z\s-]+$/.test(state.value)) {
  //     alert("Please enter a valid state.");
  //     bool = false;
  //   }
  //   if (!/^\d{5}$/.test(zip.value)) {
  //     alert("Please enter a valid zip code.");
  //     bool = false;
  //   }

  //   if (bool) {
  //     form.classList.add("collapse");
  //     backButton.classList.add("collapse");

  //     for (var [key, value] of Object.entries(order)) {
  //       console.log(key, value);

  //       if (key === "card") {
  //         value = value.replace(/\d(?=\d{4})/g, "*");
  //       }
  //     }
  //     sList.innerHTML = `
  //             <li>${key}</li>
  //             <li>${value}</li>
  //         `;
  //     cardSum.classList.remove("collapse");
  //     alerter.innerHTML = "";
  //     alert("<li>You have completed your order!</li>", "success");
  //   }
  //   return bool;
  // }

  return (
    <div>
        <input type = "text" placeHolder="Search" value={searchTerm} onChange={handleSearch} />
        { /* ... */}
        STORE
        <div class="card">
            <div class="row">
            {/* HERE, IT IS THE SHOPING CART */}
            <div class="col-md-8 cart">
                <div class="title">
                <div class="row">
                    <div class="col">
                    <h4>{/* <b>Shopping Cart</b> */}</h4>
                    </div>
                    <div class="col align-self-center text-right text-muted">
                    {/* Products selected {cart.length} */}
                    </div>
                </div>
                </div>
                <div>{listItems}</div>
            </div>
            <div class="float-end">
                <p class="mb-0 me-5 d-flex align-items-center">
                <span class="small text-muted me-2">Order total:</span>
                <span class="lead fw-normal">${ cartTotal }</span>
                </p>
                <Link to="/checkout" class="btn btn-primary">Checkout</Link>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Shop;
