import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { defaultDataIdFromObject, useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client'
import { REMOVE_LOCATION } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries'
import Auth from '../utils/auth';
import { removeLocationId } from '../utils/localStorage';

const Profile = () => {
    const [userData, setUserData] = useState({});
    const { loading, data } = useQuery( QUERY_ME );
    const [removeLocation, { error }] = useMutation(REMOVE_LOCATION, {
      // All returning data from Apollo Client queries/mutations return in a `data` field, followed by the the data returned by the request
      update(cache, { data: { removeLocation } }) {
        try {
          const { me } = cache.readQuery({ query: QUERY_ME });
  
          cache.writeQuery({
            query: QUERY_ME,
            data: { me: removeLocation.savedLocations },
          });
        } catch (e) {
          console.error(e);
        }
      },
    }); 

    return(
        <>
        {/* HTML here */}
        </>
    )
}

export default Profile