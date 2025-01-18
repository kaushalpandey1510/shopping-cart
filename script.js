// Get references to DOM elements for managing cart and product display
const cartContainer = document.getElementById("cart-container"); // The main container for the shopping cart
const productsContainer = document.getElementById("products-container"); // Container to list products added to the cart
const dessertCards = document.getElementById("dessert-card-container"); // Container for displaying dessert cards
const cartBtn = document.getElementById("cart-btn"); // Button to toggle cart visibility
const clearCartBtn = document.getElementById("clear-cart-btn"); // Button to clear all items in the cart
const totalNumberOfItems = document.getElementById("total-items"); // Displays the total number of items in the cart
const cartSubTotal = document.getElementById("subtotal"); // Displays the cart subtotal (before taxes)
const cartTaxes = document.getElementById("taxes"); // Displays the calculated taxes
const cartTotal = document.getElementById("total"); // Displays the final total (subtotal + taxes)
const showHideCartSpan = document.getElementById("show-hide-cart"); // Span text for showing or hiding cart status
let isCartShowing = false; // Boolean to track cart visibility

// Array of dessert products with their details
const products = [
  {
    id: 1,
    name: "Vanilla Cupcakes (6 Pack)", // Product name
    price: 12.99, // Product price
    category: "Cupcake", // Product category
  },
  {
    id: 2,
    name: "French Macaron",
    price: 3.99,
    category: "Macaron",
  },
  {
    id: 3,
    name: "Pumpkin Cupcake",
    price: 3.99,
    category: "Cupcake",
  },
  {
    id: 4,
    name: "Chocolate Cupcake",
    price: 5.99,
    category: "Cupcake",
  },
  {
    id: 5,
    name: "Chocolate Pretzels (4 Pack)",
    price: 10.99,
    category: "Pretzel",
  },
  {
    id: 6,
    name: "Strawberry Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 7,
    name: "Chocolate Macarons (4 Pack)",
    price: 9.99,
    category: "Macaron",
  },
  {
    id: 8,
    name: "Strawberry Pretzel",
    price: 4.99,
    category: "Pretzel",
  },
  {
    id: 9,
    name: "Butter Pecan Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 10,
    name: "Rocky Road Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 11,
    name: "Vanilla Macarons (5 Pack)",
    price: 11.99,
    category: "Macaron",
  },
  {
    id: 12,
    name: "Lemon Cupcakes (4 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
];

// Dynamically render dessert cards on the page using the product array
products.forEach(
  ({ name, id, price, category }) => {
    dessertCards.innerHTML += `
      <div class="dessert-card">
        <h2>${name}</h2> <!-- Product name -->
        <p class="dessert-price">$${price}</p> <!-- Product price -->
        <p class="product-category">Category: ${category}</p> <!-- Product category -->
        <button 
          id="${id}" 
          class="btn add-to-cart-btn">Add to cart <!-- Add to cart button -->
        </button>
      </div>
    `;
  }
);
