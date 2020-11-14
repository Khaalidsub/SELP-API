import {gql} from "apollo-server-express";

export const ADD_USER = gql`
  mutation addUser($user: AddUser!) {
    addUser(user: $user) {
      success
    }
  }
`;
export const FETCH_USERS = gql`
  query users {
    _id
  }
`;
