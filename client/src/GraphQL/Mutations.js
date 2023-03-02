import { gql } from '@apollo/client';

//essentially a graphql query that is formatted properly
export const CREATE_USER_MUTATION = gql`
mutation createUser($firstName: String! $lastName: String! $email: String! $password: String) {
        createUser(
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
            ) {
                firstName,
                lastName
            }
    }
`;