/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type quote_quote$ref: FragmentReference;
declare export opaque type quote_quote$fragmentType: quote_quote$ref;
export type quote_quote = {|
  +id: ?string,
  +text: ?string,
  +author: ?string,
  +$refType: quote_quote$ref,
|};
export type quote_quote$data = quote_quote;
export type quote_quote$key = {
  +$data?: quote_quote$data,
  +$fragmentRefs: quote_quote$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "quote_quote",
  "type": "Quote",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "text",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "author",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8dce8da52867896b82ded3fb069272c5';
module.exports = node;
