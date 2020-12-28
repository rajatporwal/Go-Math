import * as Yup from 'yup';

// const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@.]+\.[^\s@.]+$/;

export const authSchema = Yup.object().shape({
  email: Yup.string().required().label('email').matches(emailRegex, {
    message: 'Please enter valid email address',
  }),
  password: Yup.string().required().label('passowrd'),
  // password: Yup.string().required().label("passowrd").matches(passwordRegex, {
  //   message: "Minimum eight characters, at least one letter and one number."
  // }),
  cpassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
});
