
document.addEventListener("DOMContentLoaded", () => {


    // burger
    const burgerMenu = document.querySelector(".burger-menu");
    const headerMenu = document.querySelector(".header-menu");
    const body = document.querySelector("body")
    burgerMenu.addEventListener("click", () => {
        headerMenu.classList.toggle("open");
        body.classList.toggle("lock");

    })
    const menuLink = document.querySelectorAll(".menu-link")
    menuLink.forEach(element => {
        element.addEventListener("click", () => {
            headerMenu.classList.remove("open")
            body.classList.remove("lock");
        })
    })


    // add count fruits

    const upStrawberry = document.querySelector("#up-strawberry");
    const downStrawberry = document.querySelector("#down-strawberry")
    let valueStrawberry = document.querySelector("#value-strawberry")

    const upBanana = document.querySelector("#up-banana");
    const downBanana = document.querySelector("#down-banana")
    let valueBanana = document.querySelector("#value-banana")

    const upWatermelon = document.querySelector("#up-watermelon");
    const downWatermelon = document.querySelector("#down-watermelon")
    let valueWatermelon = document.querySelector("#value-watermelon")

    const upLime = document.querySelector("#up-lime");
    const downLime = document.querySelector("#down-lime")
    let valueLime = document.querySelector("#value-lime")

    const upApple = document.querySelector("#up-apple");
    const downApple = document.querySelector("#down-apple")
    let valueApple = document.querySelector("#value-apple")

    const upPeach = document.querySelector("#up-peach");
    const downPeach = document.querySelector("#down-peach")
    let valuePeach = document.querySelector("#value-peach")

    const upPlums = document.querySelector("#up-plums");
    const downPlums = document.querySelector("#down-plums")
    let valuePlums = document.querySelector("#value-plums")

    const upOrange = document.querySelector("#up-orange");
    const downOrange = document.querySelector("#down-orange")
    let valueOrange = document.querySelector("#value-orange")

    const upKiwi = document.querySelector("#up-kiwi");
    const downKiwi = document.querySelector("#down-kiwi")
    let valueKiwi = document.querySelector("#value-kiwi")


    upStrawberry.addEventListener("click", () => {
        if (valueStrawberry.innerText < 99) {
            valueStrawberry.innerText++
        }
    })
    downStrawberry.addEventListener("click", () => {
        if (valueStrawberry.innerText > 1) {
            valueStrawberry.innerText--
        }
    })

    upBanana.addEventListener("click", () => {
        if (valueBanana.innerText < 99) {
            valueBanana.innerText++
        }
    })
    downBanana.addEventListener("click", () => {
        if (valueBanana.innerText > 1) {
            valueBanana.innerText--
        }
    })

    upWatermelon.addEventListener("click", () => {
        if (valueWatermelon.innerText < 99) {
            valueWatermelon.innerText++
        }
    })
    downWatermelon.addEventListener("click", () => {
        if (valueWatermelon.innerText > 1) {
            valueWatermelon.innerText--
        }
    })

    upLime.addEventListener("click", () => {
        if (valueLime.innerText < 99) {
            valueLime.innerText++
        }
    })
    downLime.addEventListener("click", () => {
        if (valueLime.innerText > 1) {
            valueLime.innerText--
        }
    })

    upApple.addEventListener("click", () => {
        if (valueApple.innerText < 99) {
            valueApple.innerText++
        }
    })
    downApple.addEventListener("click", () => {
        if (valueApple.innerText > 1) {
            valueApple.innerText--
        }
    })

    upPeach.addEventListener("click", () => {
        if (valuePeach.innerText < 99) {
            valuePeach.innerText++
        }
    })
    downPeach.addEventListener("click", () => {
        if (valuePeach.innerText > 1) {
            valuePeach.innerText--
        }
    })

    upPlums.addEventListener("click", () => {
        if (valuePlums.innerText < 99) {
            valuePlums.innerText++
        }
    })
    downPlums.addEventListener("click", () => {
        if (valuePlums.innerText > 1) {
            valuePlums.innerText--
        }
    })

    upOrange.addEventListener("click", () => {
        if (valueOrange.innerText < 99) {
            valueOrange.innerText++
        }
    })
    downOrange.addEventListener("click", () => {
        if (valueOrange.innerText > 1) {
            valueOrange.innerText--
        }
    })

    upKiwi.addEventListener("click", () => {
        if (valueKiwi.innerText < 99) {
            valueKiwi.innerText++
        }
    })
    downKiwi.addEventListener("click", () => {
        if (valueKiwi.innerText > 1) {
            valueKiwi.innerText--
        }
    })

    // popap

    const basketButton = document.querySelector(".basket-button");
    const basketButtonMobile = document.querySelector(".basket-button-mobile");
    const orderButton = document.querySelector(".order-button")
    const popapBasket = document.querySelector(".popap-basket");
    const popapClose = document.querySelector(".popap-close");
    const submitButton = document.querySelector(".submit-button");
    const popapPurchase = document.querySelector(".popap-purchase");
    const purchaseClose = document.querySelector(".purchase-close")


    basketButton.addEventListener("click", () => {
        popapBasket.classList.toggle("active");
        body.classList.toggle("lock");
    })
    orderButton.addEventListener("click", () => {
        popapBasket.classList.toggle("active");
        body.classList.toggle("lock");
    })
    basketButtonMobile.addEventListener("click", () => {
        popapBasket.classList.toggle("active");
        body.classList.toggle("lock");
    })
    popapClose.addEventListener("click", () => {
        popapBasket.classList.remove("active")
        body.classList.remove("lock")
    })
    submitButton.addEventListener("click", () => {
        popapPurchase.classList.toggle("visible");
        popapBasket.classList.remove("active")
    })
    submitButton.removeEventListener("click", () => {
        popapPurchase.classList.toggle("visible");
        popapBasket.classList.remove("active")
    })
    purchaseClose.addEventListener("click", () => {
        popapPurchase.classList.remove("visible");
        body.classList.remove("lock")
    })

    // add order

    let basketValue = document.querySelector(".basket-value");
    let basketValueMobile = document.querySelector(".basket-value-mobile");
    const addOrder = document.querySelectorAll(".add-order");

    let basket = {};
    const basketTable = document.querySelector("#basket-table");

    function updateBasketTable() {

        // Clear the table content
        basketTable.innerHTML = "";
        // Create the table header
        const headerRow = document.createElement("tr");
        const nameHeader = document.createElement("th");
        nameHeader.textContent = "Name";
        headerRow.appendChild(nameHeader);
        const quantityHeader = document.createElement("th");
        quantityHeader.textContent = "Quantity (kg)";
        headerRow.appendChild(quantityHeader);
        const priceHeader = document.createElement("th");
        priceHeader.textContent = "Price (UAH/kg)";
        headerRow.appendChild(priceHeader);
        basketTable.appendChild(headerRow);

        // Initialize the total sum

        let totalSum = 0;
        let totalQuantity = 0;



        // Loop through all added items in the basket
        for (const [item, data] of Object.entries(basket)) {

            // Create a new row to display information about the item

            const newRow = document.createElement("tr");
            const nameCell = document.createElement("td");
            nameCell.textContent = item;
            newRow.appendChild(nameCell);
            const quantityCell = document.createElement("td");

            // Create a container for the quantity buttons and value

            const quantityContainer = document.createElement("div");
            quantityContainer.style.display = "flex";

            // Create decrease button

            const decreaseButton = document.createElement("button");
            decreaseButton.textContent = "-";
            decreaseButton.addEventListener("click", () => {
                if (data.value > 0) {
                    data.value -= 1;
                    updateBasketTable();
                }
            });
            quantityContainer.appendChild(decreaseButton);

            // Create quantity value element

            const quantityValue = document.createElement("span");
            quantityValue.textContent = data.value;
            quantityValue.style.margin = "0 8px";
            quantityContainer.appendChild(quantityValue);

            // Create increase button

            const increaseButton = document.createElement("button");
            increaseButton.textContent = "+";
            increaseButton.addEventListener("click", () => {
                data.value += 1;
                updateBasketTable();
            });
            quantityContainer.appendChild(increaseButton);

            // Add container to the cell

            quantityCell.appendChild(quantityContainer);
            newRow.appendChild(quantityCell);
            const priceCell = document.createElement("td")
            priceCell.textContent = data.price

            // Remove position

            const removeButton = document.createElement("button");
            removeButton.innerHTML = "&#x1F5D1;";
            removeButton.addEventListener("click", () => {
                delete basket[item];
                updateBasketTable();
            });
            priceCell.appendChild(removeButton);
            newRow.appendChild(priceCell)
            basketTable.appendChild(newRow)

            // Update total sum

            totalSum += data.value * data.price
            totalQuantity += data.value;


            //Save information in localstorage

            localStorage.setItem("basket", JSON.stringify(basket));

        }

        basketValue.textContent = totalQuantity;

        const emptyBasketMessage = document.querySelector(".empty-basket-message")
        if (totalSum < 1) {
            submitButton.style.display = "none"
            emptyBasketMessage.style.display = "flex"
        }
        if (totalSum >= 1) {
            submitButton.style.display = "flex"
            emptyBasketMessage.style.display = "none"
        }
        // Create a new row to display the total sum
        const totalRow = document.createElement("tr")
        const totalLabelCell = document.createElement("td")
        totalLabelCell.colSpan = 2
        totalLabelCell.textContent = "Total"
        totalRow.appendChild(totalLabelCell)
        const totalSumCell = document.createElement("td")
        totalSumCell.textContent = totalSum
        totalRow.appendChild(totalSumCell)
        basketTable.appendChild(totalRow)

    }


    addOrder.forEach(element => {
        element.addEventListener('click', event => {
            let value;
            let item;
            let price;
            if (event.target.parentElement.id === "add-strawberry") {
                value = parseInt(valueStrawberry.textContent);
                item = "Strawberry";
                price = 100;
            } else if (event.target.parentElement.id === "add-banana") {
                value = parseInt(valueBanana.textContent);
                item = "Banana";
                price = 80;
            } else if (event.target.parentElement.id === "add-watermelon") {
                value = parseInt(valueWatermelon.textContent);
                item = "Watermelon";
                price = 40;
            } else if (event.target.parentElement.id === "add-lime") {
                value = parseInt(valueLime.textContent);
                item = "Lime";
                price = 60;
            } else if (event.target.parentElement.id === "add-apple") {
                value = parseInt(valueApple.textContent);
                item = "Apple";
                price = 50;
            } else if (event.target.parentElement.id === "add-peach") {
                value = parseInt(valuePeach.textContent);
                item = "Peach";
                price = 80;
            } else if (event.target.parentElement.id === "add-plums") {
                value = parseInt(valuePlums.textContent)
                item = "Plums"
                price = 40
            } else if (event.target.parentElement.id === "add-orange") {
                value = parseInt(valueOrange.textContent)
                item = "Orange"
                price = 60
            } else if (event.target.parentElement.id === "add-kiwi") {
                value = parseInt(valueKiwi.textContent)
                item = "Kiwi"
                price = 90
            }
            const basketNumber = parseInt(basketValue.textContent)
            basketValue.textContent = basketNumber + value

            const basketNumberMobile = parseInt(basketValueMobile.textContent)
            basketValueMobile.textContent = basketNumberMobile + value

            // Update information about the item in the basket

            if (!basket[item]) {
                basket[item] = { value: value, price: price }
            } else {
                basket[item].value += value
            }
            updateBasketTable()
        })
    })

    //Load information from localstorage

    window.addEventListener("load", () => {
        const savedBasket = localStorage.getItem("basket");
        if (savedBasket) {
            basket = JSON.parse(savedBasket);
            updateBasketTable();
        }
    });

    //Delete information from localstorage

    submitButton.addEventListener("click", () => {
        localStorage.removeItem("basket");
        basket = {};
        updateBasketTable();
    });

})

