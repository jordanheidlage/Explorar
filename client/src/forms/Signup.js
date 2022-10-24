import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });

    const [validated] = useState(false);

    const [showAlert, setShowAlert] = useState(false);
    const [addUser, { error, data }] = useMutation(ADD_USER)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(userFormData);

        try {
            const { data } = await addUser({
                variables: { ...userFormData },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
        />
        <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji.
        </Form.Text>
    </>

    )
}








   


export default Signup;