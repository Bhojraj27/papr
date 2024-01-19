import React, { useState } from 'react';
import { Box, Button, Container, makeStyles, Snackbar, TextField } from "@material-ui/core";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  
  },
  logincontent: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop:"40px",
    maxWidth: "490px",
    backgroundColor: "white",
    borderRadius:"20px",
    padding:"20px",
    fontFamily:"poppins",
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  forminput:{
    height:"70px",
  }
}));

const LoginForm = () => {
  const classes = useStyles();
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('Full Name is required')
      .matches(/^[a-zA-Z\s]{1,30}$/, 'Full Name should have name, middle name, and surname, and should not exceed 30 characters'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format'),
    phone: Yup.string()
      .required('Phone is required')
      .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
    subject: Yup.string()
      .required('Subject is required')
      .max(50, 'Subject should not exceed 50 characters'),
    message: Yup.string()
      .required('Message is required')
      .matches(/^[a-zA-Z\s]{1,256}$/, 'Message should only contain characters and should not exceed 256 characters'),
  });
  

  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };


  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setIsSignupSuccessful(true);
    setSubmitting(false);
    resetForm();
    console.log(values);
  };

  const handleCloseSnackbar = () => {
    setIsSignupSuccessful(false);
  };

  return (
    <Container className={classes.root}>
      <Box item className={classes.logincontent}>
        <h1 style={{ textAlign: "center" }}>Let's Work <span style={{color:"#ff2c54"}}>Together!</span></h1>
        <h3 style={{ textAlign: "center" }}>Contact Us</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <Form style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              <div className={classes.forminput}>
                <label htmlFor="fullName">Full Name</label>
                <Field
                  as={TextField}
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  variant="outlined"
                  className={classes.field}
                  fullWidth
                  error={touched.fullName && !!errors.fullName}
                  helperText={touched.fullName && errors.fullName}
                />
              </div>

              <div className={classes.forminput}>
                <label htmlFor="email">Email</label>
                <Field
                  as={TextField}
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              </div>

              <div className={classes.forminput}>
                <label htmlFor="phone">Phone</label>
                <Field
                  as={TextField}
                  id="phone"
                  name="phone"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  error={touched.phone && !!errors.phone}
                  helperText={touched.phone && errors.phone}
                />
              </div>

              <div className={classes.forminput}>
                <label htmlFor="subject">Subject</label>
                <Field
                  as={TextField}
                  id="subject"
                  name="subject"
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  error={touched.subject && !!errors.subject}
                  helperText={touched.subject && errors.subject}
                />
              </div>

              <div className={classes.forminput}>
                <label htmlFor="message">Message</label>
                <Field
                  as={TextField}
                  id="message"
                  name="message"
                  label="Message"
                  variant="outlined"
                  multiline
                  minRows={4}
                  fullWidth
                  error={touched.message && !!errors.message}
                  helperText={touched.message && errors.message}
                />
              </div>

              <div style={{paddingTop:"20px"}}>
              <Button
               style={{
                backgroundColor:"#ff2c54",
                color:"white",
                fontSize:"17px",
            }}
                  type="submit"
                  variant="contained"
                  backgroundColor="#ff2c54"
                  fullWidth
                  className={classes.submitButton}
                >
                  Submit
                </Button>

              </div>
            </Form>
          )}
        </Formik>
      </Box>

      <Snackbar
        open={isSignupSuccessful}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        message="Sign up successful!"
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
    </Container>
  );
};

export default LoginForm;
