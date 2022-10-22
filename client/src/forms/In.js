import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import "./FormStyles.css"
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function In() {

    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER)
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({ ...userFormData, [name]: value });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(userFormData);
      try {
        const { data } = await login({
          variables: { ...userFormData },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setUserFormData({
        email: '',
        password: '',
      });
    };

    return (
        <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          id="loginButt">
          Submit
        </Button>
      </Form>


{/*             <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-check">

                </div>
                <button id="loginButt" type="submit" className="btn btn-outline-warning">Login</button>
            </form>*/}

        </>
    )
}

export default In;