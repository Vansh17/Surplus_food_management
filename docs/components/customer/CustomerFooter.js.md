# CustomerFooter Component Documentation

The `CustomerFooter` component is a custom footer component that is used in the application. It contains four icons that represent different pages in the application, and clicking on each icon navigates the user to the corresponding page. The footer also provides a logout functionality for the user.

## Key Functions

### getToken()
This function retrieves the user's token saved in the AsyncStorage.

### onPressLogoutFromCustomer()
This function navigates the user to the 'LoginScreen' when the logout icon is clicked.

### onPressGoToCart()
This function navigates the user to the 'CartScreen' when the cart icon is clicked.

### onPressCustomerSearch()
This function navigates the user to the 'Customer_search' screen when the search icon is clicked.

### logoutUser()
This function logs out the user by making a POST request to the logout API endpoint. It also navigates the user to the 'LoginScreen' after a successful logout.

## Props
The `CustomerFooter` component receives the following prop:

- `navigation`: This prop is used to navigate between different screens in the application.

## State
The `CustomerFooter` component maintains the following state variables:

- `activeTabs`: This state variable keeps track of the currently active tab in the footer.
- `logout`: This state variable stores the response from the logout API.

## Styles
The component uses the `StyleSheet.create` method to define the styles used in the component. The styles include `wrapper`, `icon`, `container`, and `profilePic`.

## Example Usage
The `CustomerFooter` component can be used in a screen component as follows:

```js
import CustomerFooter from './path_to_CustomerFooter';

const SomeScreen = ({navigation}) => {
  return (
    <View>
      {/* Other components */}
      <CustomerFooter navigation={navigation} />
    </View>
  );
};
```
In the example above, the `navigation` prop is passed to the `CustomerFooter` component to enable it to navigate between different screens.