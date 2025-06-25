# ViewOrderScreen Documentation

The `ViewOrderScreen` is a React Native screen component that is used to display the details of a specific order in the application. This screen is composed of three main components: `ViewOrder`, `OrderDetails`, and `ProviderFooter`.

## Components

### 1. ViewOrder

This component is used to display the main details of the order. It receives the `navigation` prop from the `ViewOrderScreen` component which is used to navigate between different screens in the application.

### 2. OrderDetails

This component is wrapped inside a `ScrollView` component which allows the user to scroll through the details of the order if they do not fit on the screen. Similar to the `ViewOrder` component, it also receives the `navigation` prop.

### 3. ProviderFooter

This component is used to display the footer on the screen. It also receives the `navigation` prop.

## Props

The `ViewOrderScreen` component receives the following props:

- `navigation`: This prop is provided by the React Navigation library and is used to navigate between different screens in the application.

## Styles

The `ViewOrderScreen` uses the following styles:

- `container`: This style is applied to the main container of the screen. It sets the `flex` property to `1` which means that the container will try to take up as much space as possible. The `backgroundColor` is set to `white`, and the `paddingTop` is set to `60`.

## Example Usage

The `ViewOrderScreen` component can be used in a React Navigation stack navigator as follows:

```js
import { createStackNavigator } from '@react-navigation/stack';
import ViewOrderScreen from './ViewOrderScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ViewOrder" component={ViewOrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

In this example, the `ViewOrderScreen` is added to the stack navigator with the name "ViewOrder". This means that you can navigate to this screen from any other screen in the application by using the `navigation.navigate('ViewOrder')` function.