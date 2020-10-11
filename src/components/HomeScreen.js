import PropTypes from 'prop-types';
import React from 'react';
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import environment from '../utilities/environment';

import Beers from './home_screen/Beers';

const query = graphql`
  query HomeScreenQuery {
    beers(first: 8) {
      nodes {
        id
        ...Beer_beer
      }
    }
  }
`;

const HomeScreen = ({ navigation }) => (
  <QueryRenderer
    environment={environment}
    query={query}
    variables={{}}
    render={({ props }) => {
      if (!props) {
        return null;
      }
      return <Beers navigation={navigation} props={props} />;
    }}
  />
);

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default HomeScreen;
