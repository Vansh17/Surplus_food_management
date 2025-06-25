# Customer_search Screen Documentation

The `Customer_search` screen is a React Native component that renders a search screen for customers. It includes a header, a scrollable list of food items, and a footer. The food items are fetched and displayed using the `FoodItem` component. The screen is wrapped in a `ScrollView` to allow vertical scrolling when the content overflows the screen height.

## Components

### Customer_header

This component renders the header of the screen. It receives two props: `route` and `navigation`.

- `route`: This is an object that contains various information about the current screen's route. It's provided by the `useRoute` hook from `@react-navigation/native`.
- `navigation`: This is an object that contains various navigation functions. It's passed down from the parent component.

### FoodItem

This component is used to render each food item in the list. It also receives `route` and `navigation` as props.

### CustomerFooter

This component renders the footer of the screen. It receives `navigation` as a prop.

## Styles

The `Customer_search` screen has a `container` style that sets `flex` to `1`. This makes the container take up the full available space on the screen.

## Usage

To use the `Customer_search` screen, import it and include it in your navigation stack:

```js
import Customer_search from './path/to/Customer_search'

// In your navigation stack
<Stack.Screen name="CustomerSearch" component={Customer_search} />
```

Then, you can navigate to this screen from any other screen in your app:

```js
navigation.navigate('CustomerSearch')
```

Please note that the actual path to `Customer_search` and the name of the screen in your navigation stack may vary depending on your project structure and configuration.