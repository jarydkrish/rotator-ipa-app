/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Beer_beer$ref = any;
export type HomeScreenQueryVariables = {||};
export type HomeScreenQueryResponse = {|
  +beers: {|
    +nodes: ?$ReadOnlyArray<?{|
      +id: string,
      +$fragmentRefs: Beer_beer$ref,
    |}>
  |}
|};
export type HomeScreenQuery = {|
  variables: HomeScreenQueryVariables,
  response: HomeScreenQueryResponse,
|};
*/


/*
query HomeScreenQuery {
  beers(first: 8) {
    nodes {
      id
      ...Beer_beer
    }
  }
}

fragment Beer_beer on Beer {
  id
  name
  kind
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 8
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "BeerConnection",
        "kind": "LinkedField",
        "name": "beers",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Beer",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "Beer_beer"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "beers(first:8)"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "BeerConnection",
        "kind": "LinkedField",
        "name": "beers",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Beer",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "kind",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "beers(first:8)"
      }
    ]
  },
  "params": {
    "cacheID": "a01711fce395b9a6103db29e80f15fb0",
    "id": null,
    "metadata": {},
    "name": "HomeScreenQuery",
    "operationKind": "query",
    "text": "query HomeScreenQuery {\n  beers(first: 8) {\n    nodes {\n      id\n      ...Beer_beer\n    }\n  }\n}\n\nfragment Beer_beer on Beer {\n  id\n  name\n  kind\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c581e80f30e6cb579b60fa4e9863a716';

module.exports = node;
