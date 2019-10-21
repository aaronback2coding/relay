import React from "react";
import ReactDOM from "react-dom";

import QuoteList from "./quoteslist"
import './style.css';

import { QueryRenderer, graphql } from 'react-relay';
import {
  Environment,
  Network,
  RecordSource,
  Store,
  RequestNode,
  Variables,
} from 'relay-runtime';


function fetchQuery(
  operation,
  variables,
) {
  return fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}



const modernEnvironment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});


ReactDOM.render(
  <QueryRenderer
    environment={modernEnvironment}
    query={graphql`
      query srcindexQuery($first: Int = 5){
        quotesLibrary {
          ...quoteslist_quoteslist
        }
      }
    `}
    variables={{
      first: 10,
    }}
    render={({ error, props }) => {
      if (props) {
        console.log("index", props);
        return <QuoteList quoteslist={props.quotesLibrary} />;
      } else if (error) {
        return <div>{error.message}</div>;
      }

      return <div>Loading</div>;
    }}
  />,
  document.querySelector("#root"),
);



