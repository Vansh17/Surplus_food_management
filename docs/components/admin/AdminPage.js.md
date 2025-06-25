# AdminPage Component

The `AdminPage` component is a screen in a React Native application that provides administrative functionality. It allows the admin to send messages to users and log out from the admin panel. It uses Formik for form handling, Yup for form validation, and Axios for making HTTP requests.

## Key Functions

### onPressLogoutFromAdmin()

This function is used to navigate the user back to the LoginScreen.

### simpleAlertHandler()

This function is used to display an alert message when a message is successfully sent.

### getToken()

This function retrieves the token stored in AsyncStorage.

### messageFromAdmin(message)

This function sends a POST request to the specified API endpoint to create a new notification with the provided message. The token retrieved from the `getToken()` function is used in the Authorization header.

### logoutUser()

This function sends a POST request to the specified API endpoint to log out the user. The token retrieved from the `getToken()` function is used in the Authorization header.

## Props

- `navigation`: This prop is provided by React Navigation and is used to navigate between different screens.

## State Variables

- `selected`: This state variable is used to store the selected user type.
- `message`: This state variable is used to store the message entered by the admin.
- `logout`: This state variable is used to store the response from the logout API.

## Usage

The `AdminPage` component is typically used as a screen in a React Navigation stack. The admin can select a user type from the dropdown, enter a message, and click the "SEND" button to send the message. The admin can also log out by clicking the "Log out" button.

```jsx
<Stack.Navigator>
  <Stack.Screen name="AdminPage" component={AdminPage} />
</Stack.Navigator>
```

## Styles

The component uses the StyleSheet API from React Native to create styles for the different elements. The styles include `inputField`, `wrapper`, `button`, and `buttonText`.