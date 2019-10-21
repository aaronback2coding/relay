import React from 'react';
import Quote from './quote';
import { createFragmentContainer, graphql } from 'react-relay'


class Quoteslist extends React.Component {
    render() {
        console.log("quoteslist ", this.props.quoteslist.quotesConnection.edges);
        return (
            <div>
                {this.props.quoteslist.quotesConnection.edges.map(edge =>
                    <Quote key={edge.node.__id} quote={edge.node} />
                )}
            </div>
        )
    }
}



// export default createFragmentContainer(Quoteslist, {
//     quoteslist: graphql`
//         fragment quoteslist_quoteslist on  QuotesLibrary{
//             allQuotes {
//                 ...quote_quote
//             }
//         }
//     `,
// });




export default createFragmentContainer(Quoteslist, {
    quoteslist: graphql`
        fragment quoteslist_quoteslist on  QuotesLibrary{
            quotesConnection (first: $first) {
                edges {
                  node {
                    ...quote_quote
                  }
                }
              }
        }
    `,
});


