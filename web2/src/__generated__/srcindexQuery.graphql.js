/**
 * @flow
 * @relayHash 4a49a45b9da112a24ccafd4ce2bd5bfb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type quoteslist_quoteslist$ref = any;
export type srcindexQueryVariables = {|
  first?: ?number
|};
export type srcindexQueryResponse = {|
  +quotesLibrary: ?{|
    +$fragmentRefs: quoteslist_quoteslist$ref
  |}
|};
export type srcindexQuery = {|
  variables: srcindexQueryVariables,
  response: srcindexQueryResponse,
|};
*/


/*
query srcindexQuery(
  $first: Int = 5
) {
  quotesLibrary {
    ...quoteslist_quoteslist
  }
}

fragment quoteslist_quoteslist on QuotesLibrary {
  quotesConnection(first: $first) {
    edges {
      node {
        ...quote_quote
      }
    }
  }
}

fragment quote_quote on Quote {
  id
  text
  author
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": 5
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "srcindexQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "quotesLibrary",
        "storageKey": null,
        "args": null,
        "concreteType": "QuotesLibrary",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "quoteslist_quoteslist",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "srcindexQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "quotesLibrary",
        "storageKey": null,
        "args": null,
        "concreteType": "QuotesLibrary",
        "plural": false,
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
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "srcindexQuery",
    "id": null,
    "text": "query srcindexQuery(\n  $first: Int = 5\n) {\n  quotesLibrary {\n    ...quoteslist_quoteslist\n  }\n}\n\nfragment quoteslist_quoteslist on QuotesLibrary {\n  quotesConnection(first: $first) {\n    edges {\n      node {\n        ...quote_quote\n      }\n    }\n  }\n}\n\nfragment quote_quote on Quote {\n  id\n  text\n  author\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cde51a766b7104302283d8245ef18747';
module.exports = node;
