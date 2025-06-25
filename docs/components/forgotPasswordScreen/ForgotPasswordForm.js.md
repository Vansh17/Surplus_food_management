# ForgotPasswordForm Component Documentation

The `ForgotPasswordForm` is a React Native component that renders a form for users to input their email to receive an OTP (One Time Password) for password recovery. This form uses Formik for form handling and Yup for form validation. 

## Props

- `navigation`: This prop is used for handling navigation to different screens in the application.

## State

- `email`: This state variable holds the value of the email input field.
- `password`: This state variable holds the value of the password input field.

## Functions

- `LoginFormSchema`: This is a Yup object that defines the validation rules for the form fields. The email field is required and must be a valid email. The password field is required and must be at least 6 characters long.

- `onSubmit`: This function is triggered when the form is submitted. It takes the values of the email and password fields and passes them to the `onLogin` function.

## Components

- `Formik`: This component is a form handler from the Formik library. It takes the initial values of the form fields, the onSubmit function, the validation schema, and a boolean that determines whether validation should be run on mount. 

- `TextInput`: This component renders an input field for the email. It has several props for customization such as `placeholderTextColor`, `placeholder`, `autoCapitalize`, `keyboardType`, `textContentType`, and `autoFocus`. It also has the `onChangeText` and `onBlur` props for handling changes and blur events respectively.

- `TouchableOpacity`: This component renders a button that submits the form when pressed. The button is disabled if the form is not valid.

## Styles

The styles for the components are defined in the `styles` object using `StyleSheet.create`. The styles include `inputField`, `wrapper`, `button`, `buttonText`, and `signupContainer`.

## Example Usage

This component can be used in a screen component as follows:

```js
import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View>
      <ForgotPasswordForm navigation={navigation} />
    </View>
  );
};

export default ForgotPasswordScreen;
```

In this example, the `ForgotPasswordForm` component is imported and used in the `ForgotPasswordScreen` component. The `navigation` prop is passed to the `ForgotPasswordForm` component to handle navigation.