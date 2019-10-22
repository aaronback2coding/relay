import React from 'react';
import Quote from './quote';
import { createPaginationContainer, graphql } from 'react-relay'


class Quoteslist extends React.Component {
    render() {
        return (
            <div>
                <button className="button" onClick={() => this._loadMore()}>
                    Load more!
                </button>
                {this.props.quoteslist.quotesConnection.edges.map(edge =>
                    <Quote key={edge.node.__id} quote={edge.node} />
                )}

            </div>
        )
    }



    _loadMore() {
        if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
            return;
        }
        this.props.relay.loadMore(
            1,  // Fetch the next 10 feed items
            error => {
                console.log(error);
            },
        );
    }
}

export default createPaginationContainer(
    Quoteslist,
    {
        quoteslist: graphql`
            fragment quoteslist_quoteslist on QuotesLibrary {
                quotesConnection(
                  first: $count,
                  after: $after
                ) @connection(key: "quoteslist_quotesConnection") {
                  edges {
                    node {
                      ...quote_quote
                    }
                  }
                  pageInfo {
                    hasNextPage
                    endCursor
                  }
                }
              }
            `,
    },
    {
        direction: 'forward',
        query: graphql`
          query quoteslistForwardQuery(
            $count: Int!,
            $after: String,
          ) {
            quotesLibrary {
              ...quoteslist_quoteslist
            }
          }
        `,
        getConnectionFromProps(props) {
            return props.quoteslist.quotesConnection;
        },
        getFragmentVariables(previousVariables, totalCount) {
            console.log("getFragmentVariables:totalCount", totalCount);
            console.log("getFragmentVariables:previousVariables", previousVariables);
            return {
                ...previousVariables,
                count: totalCount,
            }
        },
        getVariables(props, paginationInfo, fragmentVariables) {
            console.log('getVariables:props', props);
            console.log('getVariables:fragmentVariables', fragmentVariables);
            console.log('getVariables:paginationInfo', paginationInfo);

            return {
                count: paginationInfo.count + 1,
                after: paginationInfo.cursor,
            }
        },

    }
);

// export default createFragmentContainer(Quoteslist, {
//     quoteslist: graphql`
//         fragment quoteslist_quoteslist on  QuotesLibrary{
//             quotesConnection (first: $first) {
//                 edges {
//                   node {
//                     ...quote_quote
//                   }
//                 }
//               }
//         }
//     `,
// });





