# PlacedOrders Component Documentation

The `PlacedOrders` component in this file is a stateless functional component used to display a list of placed orders in a React Native application. It maps through an array of order details and renders each order detail in a styled view.

## Props

The `PlacedOrders` component accepts the following props:

- `navigation`: This is a required object prop that allows the component to navigate between different screens in the application.

## Component Rendering

The `PlacedOrders` component returns a fragment (`<>...</>`) that contains a list of views for each product in the `details` array. Each product view displays the food name, expiry, quantity and price of the product. 

The product details are displayed in a styled view, with each detail presented in a separate `Text` component. The style for each `Text` component is defined in the `styles` object at the bottom of the file.

Each product view is separated by a `Divider` component from the `react-native-elements` library, which creates a horizontal line for visual separation.

## Styles

The `PlacedOrders` component uses the `StyleSheet.create` method from `react-native` to define the styles for the component. The `styles` object includes the following properties:

- `wrapper`: Styles for the outermost view of each product. It sets the top margin to -5.
- `out_box`: Styles for the outer box of each product view. It sets the background color to `#E9E9E9`, top margin to 20, width to 92% of the parent container, aligns the box to the center of the parent container, and sets the height to 160.
- `in_box`: Styles for the inner box of each product view. It sets the padding to 10, and sets the flex direction to 'row' and justifies the content space between the start and end along the main axis.
- `text`: Styles for the text in each product view. It sets the padding to 2, font size to 15, and font weight to '500'.

## Example Usage

To use the `PlacedOrders` component, you can import it into a parent component and pass the `navigation` prop to it:

```js
import PlacedOrders from './PlacedOrders';

// In a parent component's render method
<PlacedOrders navigation={this.props.navigation} />
```

Please note that the `details` array is not defined in the provided code. You would need to pass `details` as a prop or fetch it inside the `PlacedOrders` component for the component to work correctly.