document.addEventListener("DOMContentLoaded", () => {


    // burger
    const burgerMenu = document.querySelector(".burger-menu");
    const headerMenu = document.querySelector(".header-menu");
    const body = document.querySelector("body")
    burgerMenu.addEventListener("click", () => {
        headerMenu.classList.toggle("open");
        body.classList.toggle("lock");
    })

    // count fruits

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
    const popapBasket = document.querySelector(".popap-basket");
    const popapClose = document.querySelector(".popap-close");
    const submitButton = document.querySelector(".submit-button");
    const popapPurchase = document.querySelector(".popap-purchase");
    const purchaseClose = document.querySelector(".purchase-close")

    basketButton.addEventListener("click", () => {
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
    purchaseClose.addEventListener("click", () => {
        popapPurchase.classList.remove("visible");
        body.classList.remove("lock")
    })

    // add order

    let basketValue = document.querySelector(".basket-value");
    const addOrder = document.querySelectorAll(".add-order");
    addOrder.forEach(element => {
        element.addEventListener('click', event => {
            let value;
            if (event.target.id === "add-strawberry") {
                value = parseInt(valueStrawberry.textContent);
            } else if (event.target.id === "add-banana") {
                value = parseInt(valueBanana.textContent);
            } else if (event.target.id === "add-watermelon") {
                value = parseInt(valueWatermelon.textContent);
            } else if (event.target.id === "add-lime") {
                value = parseInt(valueLime.textContent);
            } else if (event.target.id === "add-apple") {
                value = parseInt(valueApple.textContent);
            } else if (event.target.id === "add-peach") {
                value = parseInt(valuePeach.textContent);
            } else if (event.target.id === "add-plums") {
                value = parseInt(valuePlums.textContent);
            } else if (event.target.id === "add-orange") {
                value = parseInt(valueOrange.textContent);
            } else if (event.target.id === "add-kiwi") {
                value = parseInt(valueKiwi.textContent);
            }
            const basketNumber = parseInt(basketValue.textContent);
            basketValue.textContent = basketNumber + value;
        });
    });
})
