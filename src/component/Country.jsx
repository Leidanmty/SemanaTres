import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react'


const Country = () => {

    const [country, setCountry] = useState([])

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(res => setCountry(res.data))
    }, [])

    console.log(country[0]);

    return (
        <div>
            <ul>
                {/*country.map((quote) => (
                    <QuoteItem quote={quote} key={quote.quote} />
                ))*/}
            </ul>
        </div>
    );
};


export default Country;