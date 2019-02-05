import { Query } from 'react-apollo'
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import {CURRENT_USER_QUERY} from './globals/queries/queries';


const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
)

User.propTypes = {
  children: PropTypes.func.isRequired,
}

export default User;
export { CURRENT_USER_QUERY };