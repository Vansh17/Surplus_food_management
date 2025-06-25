# ForgotPasswordForm Component Documentation

The `ForgotPasswordForm` is a React Native component that provides a form for users to input their email and request a One-Time Password (OTP) for password recovery. This form is validated using the Formik library and Yup for schema validation.

## Props

- `navigation`: This prop is used for navigating between different screens in the application.

## State

- `email` and `password`: These are the state variables managed by Formik to store the user's input and handle form submission.

## Key Functions

- `LoginFormSchema`: This is the validation schema for the form. It ensures that the email is in the correct format and that the password is at least 6 characters long.

- `onSubmit`: This function is triggered when the form is submitted. It calls the `onLogin` function with the email and password as arguments.

- `handleChange` and `handleBlur`: These are Formik's built-in functions for updating the form values and handling the form's blur events.

- `handleSubmit`: This function is triggered when the form is submitted. It checks if the form is valid before proceeding with the submission.

- `isValid`: This is a Formik's built-in function that checks if the form is valid based on the validation schema.

## Component

The component returns a form wrapped in a `View` component. The form includes a `TextInput` for the email, and a `TouchableOpacity` that acts as the submit button. The email input field has validation logic that changes its border color to red if the email is not valid.

## Usage

This component is typically used in the Forgot Password screen. When the user enters their email and presses the "Send Email for OTP" button, the form data is validated and then submitted.

```jsx
<ForgotPasswordForm navigation={navigation} />
```

In this example, `navigation` is the navigation prop passed from the parent component, which is typically the navigation stack.

## Styles

The component uses the `StyleSheet.create` method to define the styles for the different elements. The styles include `inputField`, `wrapper`, `button`, `buttonText`, and `signupContainer`. The `button` style is a function that changes the background color based on whether the form is valid or not.