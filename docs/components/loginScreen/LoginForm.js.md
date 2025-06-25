# LoginForm Component Documentation

The `LoginForm` component is a React Native component used to handle user login functionality. It includes form validation and error handling, as well as navigation to other screens based on user actions.

## Key Functions

### `simpleAlertHandler()`
This function triggers a simple alert with the message 'Wrong Credentials!'.

### `loginUser(email, password)`
This function is responsible for making a POST request to the server to authenticate the user. It takes in two parameters: `email` and `password`. If the credentials are correct, it stores the received token in AsyncStorage and navigates to the appropriate screen. If the credentials are incorrect, it triggers an alert.

### `storeToken(token)`
This function stores the received token in AsyncStorage. It takes in one parameter: `token`.

### `onPressForgot()`, `onPressCustomer()`, `onPressProviderOrder()`, `onPressAdmin()`
These functions are used to navigate to different screens when the corresponding button is pressed.

## Props

- `navigation`: This prop is passed from the parent component and is used for navigating between different screens.

## State

- `login`: This state variable is used to store the response data from the login request.
- `email` and `password`: These state variables are used to store the input values of the email and password fields.
- `food`: This state variable is not used in the current implementation.

## API Logic

The component uses `axios` to make a POST request to the server with the user's email and password. If the server responds with a token, the token is stored in AsyncStorage and the user is navigated to the appropriate screen. If the server responds with an error, an alert is triggered.

## Example Usage

```jsx
<LoginForm navigation={navigation} />
```
In this example, `navigation` is a prop that should be passed from the parent component. It is used for navigating between different screens.