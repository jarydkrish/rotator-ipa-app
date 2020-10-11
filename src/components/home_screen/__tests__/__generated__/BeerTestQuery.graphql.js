/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Beer_beer$ref = any;
export type BeerTestQueryVariables = {||};
export type BeerTestQueryResponse = {|
  +beer: ?{|
    +$fragmentRefs: Beer_beer$ref
  |}
|};
export type BeerTestQuery = {|
  variables: BeerTestQueryVariables,
  response: BeerTestQueryResponse,
|};
*/


/*
query BeerTestQuery {
  beer: node(id: "test-id") {
    __typename
    ...Beer_beer
    id
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
    "name": "id",
    "value": "test-id"
  }
],
v1 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BeerTestQuery",
    "selections": [
      {
        "alias": "beer",
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Beer_beer"
          }
        ],
        "storageKey": "node(id:\"test-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BeerTestQuery",
    "selections": [
      {
        "alias": "beer",
        "args": (v0/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
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
            "type": "Beer",
            "abstractKey": null
          }
        ],
        "storageKey": "node(id:\"test-id\")"
      }
    ]
  },
  "params": {
    "cacheID": "3c0292a55fa6b92abe1e254233fc4826",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "beer": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Node"
        },
        "beer.__typename": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "String"
        },
        "beer.id": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ID"
        },
        "beer.kind": (v1/*: any*/),
        "beer.name": (v1/*: any*/)
      }
    },
    "name": "BeerTestQuery",
    "operationKind": "query",
    "text": "query BeerTestQuery {\n  beer: node(id: \"test-id\") {\n    __typename\n    ...Beer_beer\n    id\n  }\n}\n\nfragment Beer_beer on Beer {\n  id\n  name\n  kind\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5894962b9b46c2e406cf3ddb56010900';

module.exports = node;
