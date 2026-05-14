const products = [
    {
        id: 1,
        name: "Classic Black Watch",
        price: 2999,
        image: "https://images.openai.com/thumbnails/url/7Rsyo3icDclbDkNAAADAE6FZjSBpGrasItSjXj8NS1HBYiPlVj1Ob9PO73w_DaVkkTmuGvC8EVqVDC0GwNYLzWmLWTz23NKMhLRDfZ5O_5MVp5QQ9sv25ebCFlZpCtYOhddMg0R82vp7UjGvGZXBB04PjvdymXXAhGMCAw8U0gFZl73P1ESy9HoVC9UIJxijtPfjDZl7bB-Rq6RCpEVo2nM9VkxRe3iB2GXMTYXr-AOSGD07"
    },
    {
        id: 2,
        name: "Silver Metal Watch",
        price: 4499,
        image: "https://images.openai.com/thumbnails/url/d4R0j3icDcndCoIwGADQJzJlhq4gwmVEJfajCXkTba450jm3ryifqtfpbercnu-nBtB26rpcMfPWwCsHqEIjYeEKko1Y17q27rSWSsz72f-mUVpNViw7QpH3uyylPCYZac-FY5796VA0qo0HgQsknVWYGGK2eZP20SIYaAhGBRIfq7Hf8q6EZIMeeJ-SA6q7uyGEMhxh9n41VenZUlpx04EWSz9I1jcvROiy9cUPt18-Sw"
    },
    {
        id: 3,
        name: "Leather Strap Watch",
        price: 3599,
        image: "https://images.openai.com/thumbnails/url/qiZzJHicDclJDoIwAADAFyHiQqyJMRKJkBCgwSr0BpSdllIqi6_yO_5G5zrfTyklH46qmrFULFxmRJEJ01bFIGNZpau0o-pQdpxXrDj3p_8dLy4BtxSGjNZark82zO45kHh2mREj2wn8xlDMkaPQCqZemUrqtB4Xi403h_17uIYCWP7jZc1kLeoD3UXbJhJusyCcmAWpISBtbeWITn4Ae93AAIrnPU88_EJjoBQ_9dFADw"
    },
    {
        id: 4,
        name: "Sport Digital Watch",
        price: 1999,
        image: "https://images.openai.com/thumbnails/url/QoQsQXicDcnfDkJQHADgJ4q5OIytNRnyLzTD3DQOOYrjh0OdnqrX6W3qu_2-H8IYLJooNhTPHFhT71hFJaFdWMk6LOBxEBcyAnS0PUz7_2n6uVZtfBlMPOXBdfH01VfNfpADxUFpL-lJZma-TEJ82gyI3W4ynkpkVcBoK2UE8fg2wdEzkEpodec2Hh26AS8Sh4xFWL9Bjkq1t9I2c9fi5RY8X43B5gw3CD1m_Qe_bUAJ"
    },
    {
        id: 5,
        name: "Rolex first copy Watch",
        price: 9999,
        image: "https://images.openai.com/thumbnails/url/5acgr3icDcltCoIwAADQE_kRCaYQoSZOrESNav2JudkU3Zxthesg3a3b1Pv7vp9WKSF9y2o4fmihGmKomtsmlQqpDpt4ZJZsRyE6TjfT-n9-cCBegsv8hAtD9hAODtOrDMHgdSuP21CfaYCWu7QHBCRxaMw9vYtB4GcSFRo5-4rF7lCpi-ssan0FjW2wHE6pPYURBx6J5_adhT-mBDWU"
    },
    {
        id: 6,
        name: "Smart Watch",
        price: 2599,
        image: "https://images.openai.com/thumbnails/url/9GZ3i3icDcnbCoIwAADQL_JWIChEWKIlqNMo1JfI6ZzOy9Rtpl_V7_Q3dV7P94MZo7OpKGUPp5WyspBY3qtyNbMXq6EMh06Z8UBp3VfH8fA_0woKw4XRTDJNk5zAB4Qv9KZe0JbEfuXZz9WYajY-PP_MhRV1BVgq7mfw3vKwPdldXBPnrQuA0DTYVxA0OmcaLgae70SXlU3mkFAAnIqmX1G8rWCfaggnaWS0xF1-Jq9BbQ"
    }
];
let cart = [];

const productsContainer = document.getElementById("products");
const cartElement = document.getElementById("cart");

function displayProducts() {
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(card);
    });
}

function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <p>${item.name}</p>
            <p>₹${item.price}</p>
        `;
        cartItems.appendChild(div);
    });

    document.getElementById("cart-total").innerText = total;
    document.getElementById("cart-count").innerText = cart.length;
}

function toggleCart() {
    cartElement.classList.toggle("active");
}

function checkout() {
    alert("Thank you for shopping with us!");
    cart = [];
    updateCart();
    toggleCart();
}

displayProducts();
