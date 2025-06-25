# ViewOrder Component Documentation

The `ViewOrder` component is a React Native component that provides a UI interface for viewing orders. It includes a search bar for filtering orders and a button to navigate to the 'AddItemScreen' for adding new items.

## Props

- `navigation`: This prop is provided by the React Navigation library and is used to navigate between different screens.

## State

- `search`: This state variable is used to store the search input from the SearchBar component.

## Functions

- `onPressAddItem`: This function is triggered when the "Add item" button is pressed. It navigates the user to the 'AddItemScreen'.

- `updateSearch`: This function is used to update the `search` state variable based on the user's input in the SearchBar component.

## Components

- `View`: This is a built-in React Native component that is used as a container for holding other components.

- `SearchBar`: This component from 'react-native-elements' library provides a search bar for the user to filter orders.

- `TouchableOpacity`: This built-in React Native component is used to wrap the "Add item" button. It makes the button pressable and gives a visual feedback when pressed.

- `ScrollView`: This component from 'react-native-gesture-handler' library is used to enable scrolling when the content exceeds the screen height.

## Styles

The styles for the component are defined in the `styles` object using `StyleSheet.create`. It includes styles for the wrapper container and the "Add item" button.

## Example Usage

The `ViewOrder` component can be used in a screen component of a React Navigation Stack. Here is an example:

```js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ViewOrder from './ViewOrder';
import AddItemScreen from './AddItemScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="ViewOrder">
      <Stack.Screen name="ViewOrder" component={ViewOrder} />
      <Stack.Screen name="AddItemScreen" component={AddItemScreen} />
    </Stack.Navigator>
  );
}
```

In this example, the `ViewOrder` component is used as the initial screen in a stack navigator. When the "Add item" button is pressed, it navigates to the 'AddItemScreen'.