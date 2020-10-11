/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Beer_beer$ref: FragmentReference;
declare export opaque type Beer_beer$fragmentType: Beer_beer$ref;
export type Beer_beer = {|
  +id: string,
  +name: ?string,
  +kind: ?string,
  +$refType: Beer_beer$ref,
|};
export type Beer_beer$data = Beer_beer;
export type Beer_beer$key = {
  +$data?: Beer_beer$data,
  +$fragmentRefs: Beer_beer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Beer_beer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
};
// prettier-ignore
(node/*: any*/).hash = 'afe85bb526fd203009ca074092a2034c';

module.exports = node;
