import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_LOCATION = gql`
mutation SaveLocation($name: String!, $locationId: ID!, $image: String!) {
  saveLocation(name: $name, locationId: $locationId, image: $image) {
    savedLocations {
      locationId
      name
      image
    }
  }
}
`;

export const REMOVE_LOCATION = gql`
mutation RemoveLocation($locationId: ID!) {
  removeLocation(locationId: $locationId) {
    savedLocations {
      locationId
      name
      image
    }
  }
}
`;
