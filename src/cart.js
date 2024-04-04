import React from "react";

var order = {
    name: "",
    email: "",
    card: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: ""
};

function validateOrder(order) {
    let bool = true;
    let email = document.getElementById("email");
    let card = document.getElementById("card");
    let address = document.getElementById("address");
    let address2 = document.getElementById("address2");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let zip = document.getElementById("zip");
    const cardSum = document.querySelector(".card");
    const sList = document.querySelector(".card > ul");
    const alerter = document.getElementById("alerterHolder");

    if (order.name === "" && order.email === "" && order.card === "" && order.address === "" && order.city === "" && order.state === "" && order.zip === "") {
        alert("Please enter a name.");
        bool = false;
    }
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)) {
        alert("Please enter a valid email.");
        bool = false;
    }
    if (!/^\d{16}$/.test(card.value)) {
        alert("Please enter a valid card number.");
        bool = false;
    }
    if (!/^[a-zA-Z0-9\s,'-]*$/.test(address.value)) {
        alert("Please enter a valid address.");
        bool = false;
    }
    if (!/^[a-zA-Z\s-]+$/.test(city.value)) {
        alert("Please enter a valid city.");
        bool = false;
    }
    if (!/^[a-zA-Z\s-]+$/.test(state.value)) {
        alert("Please enter a valid state.");
        bool = false;
    }
    if (!/^\d{5}$/.test(zip.value)) {
        alert("Please enter a valid zip code.");
        bool = false;
    }


    if (bool) {
        form.classList.add("collapse");
        backButton.classList.add("collapse");

        for (var [key, value] of Object.entries(order)) {
            console.log(key, value);

            if (key === "card") {
                value = value.replace(/\d(?=\d{4})/g, "*");
            }
        }
        sList.innerHTML = `
            <li>${key}</li>
            <li>${value}</li>
        `;
        cardSum.classList.remove("collapse");
        alerter.innerHTML = "";
        alert(
            '<li>You have completed your order!</li>',
            "success"
        );
    }
    return bool;
}