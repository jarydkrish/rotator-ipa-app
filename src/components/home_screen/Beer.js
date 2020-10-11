import PropTypes from 'prop-types';
import React from 'react';
import { Icon, ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

export const Beer = ({ beer, navigation }) => (
  <ListItem
    Component={TouchableScale}
    friction={90} //
    tension={100} // These props are passed to the parent component (here TouchableScale)
    activeScale={0.95} //
    linearGradientProps={{
      colors: ['#FF9800', '#F44336'],
      start: { x: 1, y: 0 },
      end: { x: 0.2, y: 0 },
    }}
    onPress={() => navigation.navigate('Beer', { id: beer.id })}
    ViewComponent={LinearGradient} // Only if no expo
  >
    <Icon name="rowing" />
    <ListItem.Content>
      <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
        {beer.name}
      </ListItem.Title>
      <ListItem.Subtitle style={{ color: 'white' }}>
        {beer.kind}
      </ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Chevron color="white" />
  </ListItem>
);

Beer.propTypes = {
  beer: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    kind: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default createFragmentContainer(Beer, {
  beer: graphql`
    fragment Beer_beer on Beer {
      id
      name
      kind
    }
  `,
});
