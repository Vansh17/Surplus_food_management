# AddItem Component Documentation

The `AddItem` component is a form that allows users to add new food items to a restaurant menu. The form fields include the restaurant name, food name, age, quantity, price, city, restaurant area, phone number, and description. It also includes functionality to upload an image of the food item.

## Key Functions and Components

### `AddItemSchema`

This is a Yup validation schema that ensures all form fields are filled in correctly. It checks that the restaurant name, food name, age, quantity, price, city, restaurant area, and phone number are all provided.

### `useState`

React's `useState` hook is used to manage local state for each form field. There is also state for the item being added (`item`), the image being uploaded (`image`), and whether the image is being uploaded (`upload`).

### `convertUrlToBlob`

This function takes an image URL and converts it into a blob for uploading.

### `pickImage`

This function uses the `expo-image-picker` to allow the user to select an image from their device's library. The selected image is then converted to a blob and set to the `upload` state.

### `getToken`

This function retrieves the user's token from AsyncStorage.

### `addItem`

This function takes all form field values as parameters, retrieves the user's token, and sends a POST request to the `/api/food/` endpoint to add the new food item. If successful, it navigates to the "ViewOrderScreen".

## Props

This component does not take any props.

## State

- `item`: The item being added
- `name`: The name of the food
- `age`: The age of the food
- `price`: The price of the food
- `restaurant_name`: The name of the restaurant
- `city`: The city the restaurant is in
- `area`: The area of the restaurant
- `phone`: The phone number of the restaurant
- `quantity`: The quantity of the food
- `description`: The description of the food
- `category`: The category of the food
- `image`: The image of the food
- `upload`: Whether the image is being uploaded

## Usage

This component is used by importing it and including it in JSX like any other component:

```jsx
import AddItem from './AddItem';

// ...

<AddItem />
```

When the submit button is pressed, the `addItem` function is called with all form field values as parameters. If the addition is successful, the user is navigated to the "ViewOrderScreen".