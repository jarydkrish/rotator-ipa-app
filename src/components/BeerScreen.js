import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

function BeerScreen({ route }) {
  const { id } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{id}</Text>
    </View>
  );
}

BeerScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default BeerScreen;
