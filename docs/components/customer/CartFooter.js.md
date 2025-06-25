# CartFooter Component Documentation

The `CartFooter` component is a functional component in React Native that displays the total price of the items in the cart and provides a button to navigate to the Payment Screen. It fetches the total price of the cart items from an API endpoint and stores it in the component's state.

## Props

- `navigation`: This prop is passed from the parent component and is used to navigate between different screens in the application.

## State Variables

- `cartTotal`: This state variable is an array that holds the total price of the cart items.
- `total`: This state variable holds the total price of the cart items.

## Functions

- `onPressGoToPayment`: This function is called when the 'Next' button is pressed. It navigates to the 'PaymentScreen'.
- `getToken`: This asynchronous function retrieves the token stored in AsyncStorage. This token is used for authentication when making API requests.
- `fetchTotalPrice`: This asynchronous function makes a GET request to the API endpoint to fetch the total price of the cart items. It sets the response data to the `total` state variable.

## useEffect Hook

The `useEffect` hook is used to call the `fetchTotalPrice` function when the component mounts. This ensures that the total price of the cart items is fetched and displayed as soon as the component is rendered.

## Styles

The `styles` object contains the styles for the different elements in the component. It uses the `StyleSheet.create` method from 'react-native' to create the styles.

## Usage

This component is used in the application where the total price of the cart items needs to be displayed and a button to navigate to the Payment Screen is required. It is typically used at the bottom of the Cart Screen.

```jsx
<CartFooter navigation={navigation} />
```

In the above code, `navigation` is the navigation prop passed from the parent component. This prop is required for the component to function correctly.