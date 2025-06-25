# FilterHeader Component Documentation

The `FilterHeader` component is a reusable header component for screens in a React Native application. It renders a header with a cancel button and a title. The cancel button is an image that, when pressed, navigates the user back to the 'Customer_search' screen.

## Props

The `FilterHeader` component accepts the following props:

- `props`: An object containing the properties passed to the component. Currently, it only uses a `title` property, which is displayed in the center of the header.
- `navigation`: An object containing navigation functions. This is used to navigate the user back to the 'Customer_search' screen when the cancel button is pressed.

## Functions

The `FilterHeader` component defines the following function:

- `onPressCancel`: A function that is called when the cancel button is pressed. It navigates the user back to the 'Customer_search' screen and logs "hello" to the console.

## Usage

Here is an example of how to use the `FilterHeader` component:

```js
import FilterHeader from './FilterHeader';

// In your component's render function:
render() {
  return (
    <View>
      <FilterHeader title="My Screen Title" navigation={this.props.navigation} />
      // Rest of your component's code...
    </View>
  );
}
```

In this example, the `FilterHeader` component is used to render a header with the title "My Screen Title". The `navigation` prop is passed in so that the cancel button can navigate the user back to the 'Customer_search' screen.

## Styles

The `FilterHeader` component uses the following styles:

- `img`: Styles for the cancel button image. It sets the width and height to 5, adds 20 units of padding, and sets the `marginTop` to 10.
- `SafeAreaView`: The background color is set to white.
- `Text`: The text alignment is set to center, the font size is set to 25, the font weight is set to 500, the `marginTop` is set to -40, and `justifyContent` is set to center.