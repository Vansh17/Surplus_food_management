# FilterScreen React Native Documentation

## Overview

The `FilterScreen` is a React Native screen component that allows users to filter search results based on food category, location, and price. It uses an API to fetch filtered data based on the user's selections.

## Key Functions/Components

### FilterScreen

The main component in the file. It renders the UI for the filter screen and handles user interactions.

### onPressApply

This function navigates the user to the 'Customer_search' screen when the 'Apply Filters' button is pressed.

### getToken

This asynchronous function retrieves the user's token from AsyncStorage. The token is used for authentication when making API requests.

### filterData

This asynchronous function makes a GET request to the API to fetch filtered data based on the user's selections. The response data is then set to the `filter` state.

## Props

- `navigation`: The navigation prop is passed to the FilterScreen component to enable navigation between different screens.
- `route`: The route prop contains various information about the current screen's route.

## State

- `sliderValue`: The current value of the price slider.
- `filter`: An array of filtered data fetched from the API.
- `category`: The selected food category.
- `price`: The selected price range.
- `location`: The selected location.

## API Logic

The `filterData` function makes a GET request to the API endpoint `https://wixstocle.pythonanywhere.com/api/search` with the query parameters `name`, `category`, `price_low`, `price_high`, and `location`. The `Authorization` and `Content-Type` headers are also set in the request.

## Example Usage

When the user opens the filter screen, they can select a food category, location, and price range. The selections are stored in the `category`, `location`, and `sliderValue` states respectively. When the 'Apply Filters' button is pressed, the `onPressApply` function is triggered, which navigates the user to the 'Customer_search' screen and passes the selections as parameters. The filtered data is then fetched from the API and displayed to the user.