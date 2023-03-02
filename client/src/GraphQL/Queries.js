import { gql } from '@apollo/client';

//essentially a graphql query that is formatted properly
export const LOAD_USERS = gql`
query{
    getAllUsers {
      id,
      firstName,
      lastName,
      email,
      password
    }
  }
`;