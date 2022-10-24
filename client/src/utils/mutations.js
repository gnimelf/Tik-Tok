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

export const ADD_POST = gql`
  mutation addPost($title: String!) {
    addPost(title: $title) {
      _id
      title
      username
      description
      createdAt
      reviews {
        _id
        reviewText
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($postId: ID!, $reviewText: String!) {
    addReview(postId: $postId, reviewText: $reviewText) {
      _id
      title
      username
      description
      createdAt
      reviews {
        _id
        reviewText
        createdAt
      }
    }
  }
`;
