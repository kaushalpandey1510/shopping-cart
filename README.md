### README: Project Shopping Cart

---

## Features

- **Product Display**:
  - Dessert products are displayed as cards with details like name, price, and category.
  - A button on each card allows adding the product to the shopping cart.

- **Shopping Cart**:
  - Items can be added to the cart with a single click.
  - Displays the number of items, subtotal, taxes, and the total price.
  - Provides a button to clear all items in the cart.

- **Dynamic UI**:
  - Updates item count dynamically as users add items.
  - Shows and hides the cart with a toggle button.

- **Tax Calculation**:
  - Automatically calculates and displays taxes at a rate of 8.25%.

---

## Project Files

- **`index.html`**: Contains the structure and layout of the application.
- **`style.css`**: Styles the product cards, shopping cart, and overall layout.
- **`script.js`**: Implements the application logic, including product rendering, cart management, and event handling.

---

## How It Works

1. **Product Display**:
   - The product list is stored in an array of objects.
   - Each product is rendered as a card dynamically using JavaScript.

2. **Add to Cart**:
   - When the "Add to Cart" button is clicked, the selected product is added to the cart.
   - If the product is already in the cart, its count is incremented.

3. **Cart Management**:
   - The shopping cart tracks all added items and calculates the subtotal, taxes, and total price dynamically.
   - Users can clear the cart, resetting all values.

4. **Toggle Cart Visibility**:
   - A "Show/Hide Cart" button toggles the visibility of the cart container.

---

## Usage Instructions

### Running the Application
1. Clone or download the project files.
2. Open the `index.html` file in a web browser.

### Interaction
- Browse the products displayed on the screen.
- Click the **Add to Cart** button on a product to add it to the shopping cart.
- View the shopping cart by toggling the **Show/Hide Cart** button.
- Clear the cart using the **Clear Cart** button.

---

## Key JavaScript Concepts

1. **DOM Manipulation**:
   - Dynamically renders products and updates the cart display.

2. **Event Handling**:
   - Listens for button clicks to add items, toggle cart visibility, and clear the cart.

3. **Classes**:
   - Encapsulates shopping cart functionality within a `ShoppingCart` class for modular and reusable code.

4. **Data Handling**:
   - Utilizes arrays to store product and cart data and calculates totals using array methods like `.reduce()`.

---

## Future Enhancements

- Add user authentication to save cart items across sessions.
- Integrate with a backend to store product and order data.
- Add quantity adjustment buttons directly in the cart.
- Support for multiple tax rates based on user location.
- Improved responsive design for mobile users.

--- 

## Author

This project was created to demonstrate an interactive shopping cart implementation. If you have any questions or suggestions, feel free to reach out!# shopping-cart
