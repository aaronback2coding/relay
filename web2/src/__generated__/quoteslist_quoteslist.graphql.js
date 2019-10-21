/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type quote_quote$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type quoteslist_quoteslist$ref: FragmentReference;
declare export opaque type quoteslist_quoteslist$fragmentType: quoteslist_quoteslist$ref;
export type quoteslist_quoteslist = {|
  +quotesConnection: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: quote_quote$ref
      |}
    |}>
  |},
  +$refType: quoteslist_quoteslist$ref,
|};
export type quoteslist_quoteslist$data = quoteslist_quoteslist;
export type quoteslist_quoteslist$key = {
  +$data?: quoteslist_quoteslist$data,
  +$fragmentRefs: quoteslist_quoteslist$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "quoteslist_quoteslist",
  "type": "QuotesLibrary",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "first",
      "type": "Int"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "quotesConnection",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "first"
        }
      ],
      "concreteType": "QuoteConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "QuoteEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Quote",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "quote_quote",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3cff4cbe7f565f2a5ab8c7d82b6dd59a';
module.exports = node;
