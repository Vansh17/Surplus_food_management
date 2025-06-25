# ProviderSignupScreen

This file defines a React Native screen component for a service provider to sign up. The screen displays a logo, a title, and a form for the provider to enter their details.

## Components

### ProviderSignupScreen

This is the main component exported by the file. It is a functional component that takes one prop: `navigation`. This prop is used to navigate between different screens in the application.

The `ProviderSignupScreen` component returns a `View` component that contains the following:

- A logo image (`Image` component) wrapped in a `View` component for styling.
- A `Text` component that displays the title of the screen.
- A `ProviderSignupForm` component that displays a form for the provider to sign up. The `navigation` prop is passed down to this component.
- A `View` component that displays a styled footer.

### ProviderSignupForm

This component is imported from `../components/signupScreen/ProviderSignupForm`. It is a form that providers can fill out to sign up. The `navigation` prop is passed down to this component from `ProviderSignupScreen`.

## Styles

The styles for the components in this file are defined using `StyleSheet.create`. The styles object includes the following properties:

- `container`: Styles for the main container `View`. It has a white background and a top padding of 60.
- `logoContainer`: Styles for the `View` component that wraps the logo `Image`. It centers the logo.
- `logo`: Styles for the logo `Image`. It has a height and width of 200, and a bottom margin of -60.
- `signup_title`: Styles for the `Text` component that displays the title of the screen. It has a font size of 35, a bold font weight, and a black color.
- `texts`: Styles for the `View` component that wraps the title `Text`. It has a width of 80%, a padding of 10, a self-alignment of center, and a top margin of 40.

## Usage

This component is typically used in a navigation stack. When the user navigates to the provider sign up screen, this component will be rendered. The user can then fill out the `ProviderSignupForm` to sign up as a provider.