import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const Form = () => {
  const phoneRegExp =
    /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;

  const ContactValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is  required'),

    phone_number: Yup.string()
      .required('Phone is  required')
      .matches(phoneRegExp, 'Phone number is not valid'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        phone_number: '',
      }}
      // по сабміту форми буде відправлятись action
      // в payload якого буде новий обєкт контакту
      // contactsReducer буде обробляти цей action і додавати новий контакт в список сонтаків
      onSubmit={(value, actions) => {
        console.log(value);
        // const newContact = {

        //   ...value,
        // };

        actions.resetForm();
      }}
      validationSchema={ContactValidationSchema}
    >
      <form>
        <label>
          Name
          <Field type="text" name="name" placeholder="Enter name" />
        </label>
        <ErrorMessage name="name" component="div" />
        <label htmlFor="phone_number">
          Phone number
          <Field type="tel" name="phone_number" />
        </label>
        <ErrorMessage name="phone_number" component="div" />
        <button type="submit"> Add contact </button>
      </form>
    </Formik>
  );
};
