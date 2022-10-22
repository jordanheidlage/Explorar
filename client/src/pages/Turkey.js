import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { SAVE_LOCATION } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries'
import Auth from '../utils/auth';
import { saveLocationIds, getSavedLocationIds } from '../utils/localStorage';

function Turkey() {

    const [saveLocation, { error }] = useMutation(SAVE_LOCATION, {
        update(cache, { data: { saveLocation } }) {
          try {
            const { me } = cache.readQuery({ query: QUERY_ME });
    
            cache.writeQuery({
              query: QUERY_ME,
              data: { me: saveLocation.savedLocations },
            });
          } catch (e) {
            console.error(e);
          }
        },
      });
    
      const handleSaveLocation = async () => {
        const locationToSave = {
          name: "Turkey",
          locationId: "4",
          image: "placeholder"
        }
    
        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;
    
        if (!token) {
          return false;
        }
    
        try {
          console.log({locationToSave})
          const { data } = await saveLocation({
            variables: {
              ...locationToSave
            },
          });
        } catch (err) {
          console.error(err);
        }
      };
    
    return (
        <>
        
        {/*html here*/}
        
        </>
    )
}

export default Turkey;