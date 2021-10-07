import React from 'react'
import API from '../../api/api_action/api';
import { Formik, Field, Form } from "formik";
import * as yup from 'yup';

const LoginPage = (props) => {
    
    return (
        <div>
            <h1 style={{paddingTop:'50px'}}>Login</h1>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={yup.object({
                    email: yup.string()
                        .required('Introdu emailul')
                        .email('Te rugam sa introduci un email valid'),
                    password: yup.string()
                        .required('Introdu o parola')
                        .min(8, 'Parola trebuie sa aiba cel putin 8 caractere')
                })}
                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);

                    API.loginUser(
                        data.email, data.password,
                        (result) => {
                            const successful = result.data.data.data.success;

                            if (successful) {
                                API.authoriseLogin(undefined, undefined);
                            } else {
                                alert("Invalid credentials");
                            }
                        },
                        (error) => {
                            setSubmitting(false);
                        }
                    )                
                }}
            >
                <Form>
                <Field name="email" type="email" />
                <Field name="password" type="password" />
                <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default LoginPage;