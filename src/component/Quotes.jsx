import React from "react";
//import quotes from "./quotes.json";
import QuoteItem from "./QuoteItem";

const Quotes = () => {
    console.log(quotes);

    return (
        <div className="App">
            <ul>
                {quotes.map((quote) => (
                    <QuoteItem quote={quote} key={quote.quote} />
                ))}
            </ul>
        </div>
    );
};

export default Quotes;
