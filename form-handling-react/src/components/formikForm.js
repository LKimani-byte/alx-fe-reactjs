import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }} // Ensuring initialValues is explicitly defined
      validationSchema={validationSchema} // Ensuring validationSchema is explicitly defined
      onSubmit={(values, { setSubmitting }) => {
        console.log("Form submitted successfully:", values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="registration-form">
          <div>
            <label>Username:</label>
            <Field type="text" name="username" /> {/* Ensuring Field is used */}
            <ErrorMessage name="username" component="p" className="error" /> {/* Ensuring ErrorMessage is used */}
          </div>

          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="p" className="error" />
          </div>

          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="p" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;