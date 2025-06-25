# PaymentScreen Component Documentation

## Overview

`PaymentScreen` is a React Native screen component that allows users to select a payment method and proceed with their payment. The screen uses a radio button group for payment method selection and a button to trigger the payment process.

## Functions

### getToken

This function retrieves the user's token from AsyncStorage. The token is used for authentication when making a POST request to the server.

### payment

This function is an asynchronous function that sends a POST request to the server to process the payment. The function first retrieves the user's token by calling the `getToken` function. It then sends a POST request to the server, passing the token in the headers for authentication. If the request is successful, the response data is stored in the `pay` state variable, and the user is navigated to the "Customer_search" screen.

## Components

### RadioButtonGroup

This component is used to create a group of radio buttons for payment method selection. It has a `selected` prop that determines which radio button is currently selected, and an `onSelected` prop that is a function to be called when a radio button is selected.

### RadioButtonItem

This component is used to create individual radio buttons within the `RadioButtonGroup`. It has a `value` prop that determines the value of the radio button, and a `label` prop that determines the label of the radio button.

### TouchableOpacity

This component is used to create a button that triggers the payment process when pressed. It has an `onPress` prop that is a function to be called when the button is pressed.

## Props

The `PaymentScreen` component receives the following prop:

- `navigation`: This prop is passed by the navigation library (React Navigation). It allows the component to navigate to different screens.

## State

The `PaymentScreen` component uses the following state variables:

- `current`: This state variable stores the currently selected payment method.
- `pay`: This state variable stores the response data from the payment request.

## Styles

The `PaymentScreen` component uses the following styles:

- `container`: Styles for the main container view.
- `box`: Styles for the box containing the radio button group and the proceed button.
- `text`: Styles for the text of the radio buttons.
- `button`: Styles for the proceed button.
- `buttontext`: Styles for the text of the proceed button.

## Example Usage

When the `PaymentScreen` component is rendered, it displays a radio button group for payment method selection and a proceed button. The user can select a payment method by clicking on one of the radio buttons. The user can then click on the proceed button to trigger the payment process. The payment process involves sending a POST request to the server with the user's token for authentication. If the request is successful, the user is navigated to the "Customer_search" screen.