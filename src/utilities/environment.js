import axios from 'axios';
import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

function fetchQuery(operation, variables) {
  const body = {
    query: operation.text,
    variables,
  };
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios.post('https://rotatoripa.co/graphql', body, options).then((response) => response.data);
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
