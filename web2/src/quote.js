import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class Quote extends React.Component {
    render() {
        return (
            <div className="notepaper">
                <figure className="quote">
                    <blockquote className="curly-quotes" cite="https://www.youtube.com/watch?v=qYLrc9hy0t0">
                        <p>{this.props.quote.text}</p>
                    </blockquote>
                    <figcaption className="quote-by">{this.props.quote.author}</figcaption>
                </figure>
            </div>

        );
    }
}

export default createFragmentContainer(Quote, {
    quote: graphql`
        fragment quote_quote on Quote {
            id, 
            text, 
            author
        }
    `,
});
