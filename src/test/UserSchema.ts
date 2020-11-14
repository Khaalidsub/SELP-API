import {gql} from "apollo-server-express";

export const ADD_USER = gql`
  mutation addUser($user: AddUser!) {
    addUser(user: $user) {
      success
    }
  }
`;
