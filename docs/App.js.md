# App.js

This is the main application file for a React Native application. It is responsible for setting up the navigation stack and rendering the application screens.

## Key Components/Functions

- `NavigationContainer`: This component wraps the whole app and provides the navigation context. 

- `createStackNavigator`: This function creates a stack navigator, which allows for screens to be stacked on top of each other, where each new screen is placed on top of the stack.

- `Stack.Navigator`: This is the component that provides a way to transition between screens where each new screen is placed on top of a stack.

- `Stack.Screen`: Each screen component in the app is wrapped in a `Stack.Screen` component.

## Props or Inputs

- `name`: The name prop is used to refer to the screen component.

- `component`: The component prop is the component that will be rendered when a screen is active.

- `initialRouteName`: This prop defines the first screen to be displayed when the app loads.

- `screenOptions`: These are the default options to use for the screens in the navigator.

## Sample Usage

```js
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='LoginScreen'
        screenOptions={screenOptions}
      >
        <Stack.Screen name='AdminScreen' component={AdminScreen}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        //...other screens
      </Stack.Navigator>
    </NavigationContainer>
  )
}
```

In this example, `App` is a functional component that returns a `NavigationContainer` wrapping a `Stack.Navigator`. The `Stack.Navigator` contains multiple `Stack.Screen` components, each representing a screen in the app. The `initialRouteName` prop is set to 'LoginScreen', which means this will be the first screen displayed when the app loads. The `screenOptions` prop is set to `screenOptions`, which defines default options for the screens in the navigator.