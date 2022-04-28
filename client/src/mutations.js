
// This converts GraphQL strings into the format that Apollo libraries expect when working with operations and schemas. 
import {
  gql
} from '@apollo/client';


// Login User Mutation
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


// Add User Mutation
export const ADD_USER = gql`
	mutation addUser($username: String!, $password: String!, $email: String!) {
		addUser(username: $username, password: $password, email: $email) {
			token
			user {
				_id
				username
			}
		}
	}
`;


// Remove Book Mutation
export const REMOVE_BOOK = gql`
	mutation removeBook($bookId: ID!) {
		removeBook(bookId: $bookId) {
			_id
			username
			email
			savedBooks {
				authors
				description
				bookId
				image
				link
				title
			}
		}
	}
`;


// Save Book Mutation
export const SAVE_BOOK = gql`
	mutation saveBook($bookData: bookInput!) {
		saveBook(bookData: $bookData) {
			_id
			username
			email
			savedBooks {
				authors
				description
				bookId
				image
				link
				title
			}
		}
	}
`;