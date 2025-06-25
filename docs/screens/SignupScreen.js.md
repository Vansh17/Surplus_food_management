# SignupScreen Component Documentation

## Overview

The `SignupScreen` component is a React Native screen that provides the user interface for the signup process. It displays a logo, a title, and a form for users to enter their details for registration.

## Props

- `navigation`: This prop is passed to the component by React Navigation. It is an object that contains various navigation functions that enable navigation to different screens in the application.

## Components

- `SignupForm`: This is a custom component that renders the signup form. It is imported from '../components/signupScreen/SignupForm'. The navigation prop is passed to this component to enable navigation upon successful signup.

## Styles

The component uses the `StyleSheet.create` method from React Native to define styles for the various elements in the component. The styles object contains the following properties:

- `container`: Styles for the main container view. It has a flex of 1, which means it will take up the entire available space. The background color is set to white and a padding top of 60 is added.

- `logoContainer`: Styles for the logo container view. It is centered using the `alignItems` property.

- `logo`: Styles for the logo image. It has a height and width of 200 and a margin bottom of -60 to overlap with the next view.

- `signup_title`: Styles for the signup title text. It has a color of black, a font size of 42, and a font weight of bold.

- `texts`: Styles for the text container view. It has a width of 80% of the parent, padding of 10, is centered using the `alignSelf` property, and has a top margin of 40.

## Usage

The `SignupScreen` is typically used as one of the screens in a React Navigation stack navigator. Here's an example of how it might be used:

```js
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './SignupScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={SignupScreen} />
        {/* Other screens */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

In the above example, the `SignupScreen` is added to a stack navigator, and can be navigated to using the name "Signup".