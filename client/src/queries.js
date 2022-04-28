// This converts GraphQL strings into the format that Apollo libraries expect when working with operations and schemas. 
import {
  gql
} from '@apollo/client';

// Query to get Me and my Books
export const GET_ME = gql`
  {
	me {
	  _id
	  username
	  email
	  bookCount
	  savedBooks {
  		bookId
  		authors
  		description
  		title
  		image
  		link
	  }
	}
  }
`;