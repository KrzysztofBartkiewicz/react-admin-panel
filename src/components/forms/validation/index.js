import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('Name is a required field')
    .min(3, 'Name must be at least 3 characters'),
  lastName: yup
    .string()
    .required('Last name is a required field')
    .min(3, 'Last name must be at least 3 characters'),
  email: yup.string().email().required('Email is a required field'),
  password: yup
    .string()
    .required('Please enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      'Password must contain min 6 characters, at least one letter and one number.'
    ),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .when('password', {
      is: (password) => (password && password.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref('password')], "Password doesn't match"),
    }),
});
