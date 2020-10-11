import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import Beer from './Beer';

const Beers = ({ props: { beers }, navigation }) => {
  if (!beers || !beers.nodes) {
    return null;
  }
  return (
    <View>
      {
        beers.nodes.map((beer) => (
          <Beer key={beer.id} beer={beer} navigation={navigation} />
        ))
      }
    </View>
  );
};

Beers.propTypes = {
  props: PropTypes.shape({
    beers: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
      })),
    }),
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Beers;
