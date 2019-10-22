/**
 * @flow
 * @relayHash ded2e06e3bd81f5b07e8436222dbc08a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type quoteslist_quoteslist$ref = any;
export type srcIndexQueryVariables = {|
  count: number,
  after?: ?string,
|};
export type srcIndexQueryResponse = {|
  +quotesLibrary: ?{|
    +$fragmentRefs: quoteslist_quoteslist$ref
  |}
|};
export type srcIndexQuery = {|
  variables: srcIndexQueryVariables,
  response: srcIndexQueryResponse,
|};
*/


/*
query srcIndexQuery(
  $count: Int!
  $after: String
) {
  quotesLibrary {
    ...quoteslist_quoteslist
  }
}

fragment quoteslist_quoteslist on QuotesLibrary {
  quotesConnection(first: $count, after: $after) {
    edges {
      node {
        ...quote_quote
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
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
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "srcIndexQuery",
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
    "name": "srcIndexQuery",
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
            "args": (v1/*: any*/),
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
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "quotesConnection",
            "args": (v1/*: any*/),
            "handle": "connection",
            "key": "quoteslist_quotesConnection",
            "filters": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "srcIndexQuery",
    "id": null,
    "text": "query srcIndexQuery(\n  $count: Int!\n  $after: String\n) {\n  quotesLibrary {\n    ...quoteslist_quoteslist\n  }\n}\n\nfragment quoteslist_quoteslist on QuotesLibrary {\n  quotesConnection(first: $count, after: $after) {\n    edges {\n      node {\n        ...quote_quote\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment quote_quote on Quote {\n  id\n  text\n  author\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '02b784762c0a0674333fb3e99dbfb97f';
module.exports = node;
