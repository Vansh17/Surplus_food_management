# OrderDetails Component Documentation

The `OrderDetails` component is a React Native component that fetches and displays order details from a remote API. The component is designed to be used in a mobile application.

## Component Description

The `OrderDetails` component fetches order details from a REST API endpoint and displays these details in a list format. Each list item displays the name of the user who placed the order, the name of the food item ordered, the quantity of the food item, and the price of the order. 

## State Variables

- `details`: This state variable is used to store the order details fetched from the API. It is initialized as an empty array.

## Functions

- `getToken`: This function retrieves the token from AsyncStorage. The token is used for authentication when making the API request.

- `getOrder`: This function fetches order details from the API. It first retrieves the token by calling the `getToken` function, then makes a GET request to the API with the token included in the headers for authentication. The response from the API is stored in the `details` state variable.

## useEffect Hook

A `useEffect` hook is used to call the `getOrder` function when the component mounts. This ensures that the order details are fetched from the API and stored in the `details` state variable as soon as the component is rendered.

## Rendered JSX

The component renders a list of order details. Each order detail is displayed in a `View` component with the user's name, the name of the food item, the quantity, and the price. An image is also displayed alongside each order detail.

## Styles

The component uses the `StyleSheet` method from React Native to define styles for the components. The styles include definitions for the wrapper, outer box, inner box, and text.

## Usage

This component does not accept any props. To use this component, simply import it and include it in the JSX of the parent component:

```jsx
import OrderDetails from './OrderDetails';

// In parent component's render method
<OrderDetails />
```

The component will automatically fetch the order details when it is rendered and display them in a list format.