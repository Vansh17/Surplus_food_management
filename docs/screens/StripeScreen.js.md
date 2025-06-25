# StripeScreen Documentation

## Overview

The `StripeScreen` is a React Native component that provides an interface for a shopping cart and payment processing using Stripe. It allows users to add products to a cart, view the cart, and make a payment.

## Key Components

### StripeProvider

The `StripeProvider` component is a wrapper component that provides Stripe functionality to all its child components. It requires a `publishableKey` prop which is your Stripe public API key.

### ProductsScreen

The `ProductsScreen` component displays a list of products. Each product has an "Add" and "Remove" button to adjust the quantity in the cart. Once the user is done adding products to the cart, they can press "Continue" to proceed to the checkout screen.

### CheckoutScreen

The `CheckoutScreen` component displays the items in the cart and their total price. It allows the user to select a payment method and make a payment. If the payment is successful, it shows a success message.

## Key Functions

### handleContinuePress

This function is called when the user presses "Continue" on the `ProductsScreen`. It sends the cart data to the server to create a payment intent, and then navigates to the `CheckoutScreen`.

### handleSelectMethod

This function is called when the user presses the payment method selector on the `CheckoutScreen`. It presents the Stripe PaymentSheet for the user to select a payment method.

### handleBuyPress

This function is called when the user presses "Buy" on the `CheckoutScreen`. It confirms the payment with Stripe and shows a success or error message.

## Props, State, and API Logic

### Props

- `products`: An array of product objects, each with a `price`, `name`, and `id`.

### State

- `cart`: An object that tracks the quantity of each product in the cart. The keys are product IDs and the values are quantities.
- `paymentMethod`: The user's selected payment method.

### API Logic

The `handleContinuePress` function sends a POST request to the server with the cart data. The server should create a Stripe PaymentIntent and return its client secret.

The `handleBuyPress` function calls Stripe's `confirmPaymentSheetPayment` function to confirm the payment.

## Example Usage

```jsx
import StripeScreen from './StripeScreen';

const App = () => {
  const products = [
    { price: 10, name: 'Pizza Pepperoni', id: 'pizza-pepperoni' },
    { price: 12, name: 'Pizza 4 Fromaggi', id: 'pizza-fromaggi' },
    { price: 8, name: 'Pizza BBQ', id: 'pizza-bbq' },
  ];

  return <StripeScreen products={products} />;
};
```

In this example, the `App` component renders a `StripeScreen` with three products. The user can add these products to their cart, view the cart, and make a payment.