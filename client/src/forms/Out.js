import React from 'react';

import { Nav, NavLink, Button } from 'react-bootstrap';
import "./FormStyles.css"
import Auth from '../utils/auth';



<Nav.Link onClick={Auth.logout}>Logout</Nav.Link>