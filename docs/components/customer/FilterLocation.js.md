# FilterLocation Component Documentation

The `FilterLocation` component is a simple, stateless component in React Native that renders a list of locations. Each location is a button that, when clicked, could be used to filter data based on the selected location. This component is typically used in applications that need location-based filtering like listing services, e-commerce apps, etc.

## Component Structure

The component uses the `View`, `Text`, `StyleSheet`, and `TouchableOpacity` components from the `react-native` library. 

The component structure is as follows:

- A parent `View` wraps everything.
- A `Text` component displays the title "Location".
- Two `View` components, each containing three location buttons arranged in a row. Each button is a `TouchableOpacity` component wrapping a `Text` component.

## Styles

The component uses the `StyleSheet.create` method to define the styles for the components. 

- `location`: This style is applied to the "Location" `Text` component. It sets the font size to 20, font weight to bold, and left margin to 20.
- `box`: This style is applied to each `TouchableOpacity` component. It sets the background color to '#F0F0F0', height to 40, width to 100, left margin to 20, and border radius to 10.

## Usage

Since this component is stateless and does not accept any props, you can use it directly in your render method:

```jsx
import FilterLocation from './FilterLocation';

// In your render method:
<FilterLocation />
```

## Note

This component does not currently handle any user interactions. To make it functional, you would need to add `onPress` handlers to the `TouchableOpacity` components, and possibly accept a callback as a prop to notify the parent component when a location is selected.