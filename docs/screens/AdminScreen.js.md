# AdminScreen Documentation

## Overview

`AdminScreen` is a React Native screen component that displays the admin page of an application. This component includes a logo at the top of the screen and the `AdminPage` component. It also has a function to navigate back to the Login screen.

## Components

### AdminScreen

The `AdminScreen` component is a functional component that accepts a `navigation` prop. This prop is an object provided by the React Navigation library and is used to navigate between different screens in the app.

#### Props

- `navigation`: Object provided by the React Navigation library. It includes various methods to navigate between different screens.

#### Functions

- `onPressLogoutFromAdmin`: This function is triggered when the logout button is pressed from the Admin screen. It uses the `navigate` method from the `navigation` prop to navigate to the 'LoginScreen'.

### AdminPage

The `AdminPage` component is imported from `../components/admin/AdminPage` and is rendered within the `AdminScreen` component. It also receives the `navigation` prop.

## Styles

The `AdminScreen` component uses the `StyleSheet.create` method from React Native to create a `styles` object. This object includes styles for the `container`, `logoContainer`, and `logo` elements.

- `container`: This style is applied to the main container `View`. It sets the background color to white, makes the container take up the full screen with `flex: 1`, and adds a top padding of 60 pixels.

- `logoContainer`: This style is applied to the `View` that wraps the logo image. It aligns the logo in the center of the view and adds a top margin of 40 pixels.

- `logo`: This style is applied to the logo `Image`. It sets the height and width of the logo to 180 pixels and adds a bottom margin of -60 pixels.

## Usage

The `AdminScreen` component is typically used within a React Navigation stack navigator. Here's an example:

```js
import { createStackNavigator } from '@react-navigation/stack';
import AdminScreen from './AdminScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Admin" component={AdminScreen} />
      {/* Other screens */}
    </Stack.Navigator>
  );
}

export default App;
```

In this example, the `AdminScreen` component is added to the stack navigator with the name "Admin". This name can be used with the `navigation.navigate` method to navigate to the `AdminScreen`.