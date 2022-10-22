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

    useEffect(() => {
      const getUserData = async () => {
        try {
          if (data){
            console.log(data.me)
            setUserData(data.me);
          }
        } catch (err) {
          console.error(err);
        }
      };
  
      getUserData();
    }, [data]);
  
    const handleDeleteLocation = async (locationId) => {
      console.log(locationId)
      const token = Auth.loggedIn() ? Auth.getToken() : null;
  
      if (!token) {
        return false;
      }
      try {
        const {updatedUser} = await removeLocation({
          variables: {
            locationId
          }
        });
  
        setUserData(updatedUser);
        
      } catch (err) {
        console.error(err);
      }
    };
    
    const userDataLength = userData? Object.keys(userData).length: 0;
    // if data isn't here yet, say so
    if (!userDataLength) {
      return <h2>LOADING...</h2>;
    }

    return(
        <>
        <CardColumns>
          {userData.savedLocations.map((location) => {
            return (
              <Card key={location.locationId} border='dark'>
                {location.image ? <Card.Img src={location.image} alt={`The cover for ${location.name}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{location.name}</Card.Title>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteLocation(location.locationId)}>
                    Delete this Location!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
        {/* HTML here */}
        </>
    )
}

export default Profile