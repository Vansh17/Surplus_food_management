# FilterPrice Component Documentation

The `FilterPrice` component is a part of a React Native application and is used to filter items based on a price range. It provides a slider for the user to select a price range and a button to apply the selected filter. 

## Props

- `navigation`: This prop is used for navigating between different screens of the application. 

## State

- `sliderValue`: This state variable holds the current value of the slider. It is initially set to "100".

## Key Components and Functions

- `Slider`: This is a UI component that allows users to select a value from a range. In this case, it is used to select a price range from 100 to 1000 with a step of 100. The `onValueChange` prop is used to update the `sliderValue` state variable whenever the slider value changes.

- `onPressApply`: This function is invoked when the 'Apply Filters' button is pressed. It navigates the user to the 'Customer_search' screen.

- `TouchableOpacity`: This is a wrapper for making views respond properly to touches. In this case, it is used to create the 'Apply Filters' button.

- `CustomerFooter`: This component is not used in the current component but is imported from another file. It's likely used in other parts of the application for displaying a footer.

## Styles

The component uses the `StyleSheet.create` method to define its styles. Key styles include:

- `location`: Styles for the 'Price' label.
- `button`: Styles for the 'Apply Filters' button.

## Usage

The `FilterPrice` component is typically used in a screen where items can be filtered based on price. The user moves the slider to select a price, then presses the 'Apply Filters' button to apply the selected price filter. The selected price is displayed below the slider. After applying the filter, the user is navigated to the 'Customer_search' screen.

Example:

```js
import FilterPrice from './FilterPrice';

// In render method of a component
<FilterPrice navigation={this.props.navigation} />
```

Note: The `navigation` prop needs to be passed to the `FilterPrice` component to enable navigation.