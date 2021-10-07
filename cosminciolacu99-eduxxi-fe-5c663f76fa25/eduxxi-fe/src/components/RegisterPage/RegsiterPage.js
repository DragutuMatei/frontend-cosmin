import React, { Component } from 'react';
import API from '../../api/api_action/api';
import { Formik, Field, Form } from "formik";
import * as yup from 'yup';
import { UserRegister } from '../../api/api_action/models/User';
import { Redirect } from 'react-router';
import Routes from '../../api/routes/routes';
import Header from '../header/Header';

const Regsiterpage = (props) => {
        return (
            <div>
            <h1 style={{paddingTop:'50px'}}>Register</h1>
            <Formik
                initialValues={{ 
                    username: "", email: "", 
                    password: "", accountType: "",
                    photoUrl: "", discipline: "", 
                    studentClass: ""
                }}
                validationSchema={yup.object({
                    email: yup.string()
                        .required('Introdu emailul')
                        .email('Te rugam sa introduci un email valid'),
                    password: yup.string()
                        .required('Introdu o parola')
                        .min(8, 'Parola trebuie sa aiba cel putin 8 caractere'),
                    username: yup.string()
                        .required('Introdu un nume de utilizator')
                        .min(5, 'Numele de utilizator trebuie sa aiba cel putin 5 caractere'),
                    })}
                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    
                    const user = new UserRegister(
                        data.username,
                        data.email,
                        data.password,
                        data.accountType,
                        data.photoUrl,
                        data.discipline,
                        data.studentClass,
                        false
                    );
                    API.registerUser(
                        user,
                        (result) => {
                            console.log(result);
                            const successful = result.data.meta.message;

                            if (successful === "CREATED") {
                                // <Redirect to={Routes.LOGIN} />
                                // location.href="login";
                            } else if(successful === "FOUND") {
                                alert("Utilizatorul deja exista!");
                            }
                        },
                        (error) => {
                            setSubmitting(false);
                        }
                    )                
                }}
            >
                <Form>
                <Field name="username" type="text" />
                <Field name="email" type="email" />
                <Field name="password" type="password" />
                <Field name="accountType" type="text" />
                <Field name="photoUrl" type="text" />
                <Field name="discipline" type="text" />
                <Field name="studentClass" type="text" />
                <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
        );
}

export default Regsiterpage;
