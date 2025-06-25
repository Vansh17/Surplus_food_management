# ProviderFooter Component Documentation

The `ProviderFooter` component is a custom footer navigation bar, designed for a mobile application using React Native. It includes navigation to different screens and a logout function.

## Key Components and Functions

### Navigation

The component uses `createDrawerNavigator` from `@react-navigation/drawer` to create a navigation drawer. It also uses `NavigationContainer` from `@react-navigation/native` to manage and contain the navigation tree.

### AsyncStorage

The `AsyncStorage` module from `@react-native-async-storage/async-storage` is used to store and retrieve the user token used for authentication.

### Axios

`Axios` is used to make HTTP requests to the server. In this case, it's used to log out the user.

### useState and useEffect

`useState` and `useEffect` are React hooks used to manage component state and side effects.

## Props

This component does not take any props.

## State

- `activeTabs` - This state variable is used to keep track of which tab is currently active in the navigation bar.
- `logout` - This state variable is used to store the response from the logout API call.

## Functions

### onPressHome

This function navigates to the `ViewOrderScreen` when the home icon is pressed.

### onPressPlacedOrders

This function navigates to the `PlacedOrderScreen` when the placed orders icon is pressed.

### getToken

This asynchronous function retrieves the user token from `AsyncStorage`.

### logoutUser

This asynchronous function logs out the user by making a POST request to the logout API endpoint. After the user is successfully logged out, the function navigates to the `LoginScreen`.

## Usage

This component is typically used as the footer navigation bar in a mobile application. When a user taps on a navigation icon, the corresponding screen is displayed. The user can also log out by tapping on the logout icon.

## Styles

The styles for the component are defined in the `styles` object using `StyleSheet.create`. This includes styles for the wrapper, icon, container, and profile picture.