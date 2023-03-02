import { useState } from "react";
import { useMutation } from "@apollo/client";
import {CREATE_USER_MUTATION} from '../GraphQL/Mutations'

export default function UserForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    //first is function we use to create user, second is an error
    const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);
  
    const addUser = () => {
        //passing the form data (our states) to the mutation
      createUser({
        variables: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
      });
  
      if (error) {
        console.log(error);
      }
    };
    return (
      <div>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={addUser}> Create User</button>
      </div>
    );
  }