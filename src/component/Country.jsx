import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react'


const Country = () => {

    const [country, setCountry] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [info, setInfo] = useState("demography");

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/alpha/ru")
            .then((res) => {
                setCountry(res.data[0]);
                //
            })
            .finally(() => setIsLoading(false));
    }, []);

    console.log(country);

    return (
        <div className="App">
            {isLoading ? (
                <h1>Esta cargando...</h1>
            ) : (
                <>
                    <h1>{country.name?.common}</h1>
                    <img src={country.flags?.svg} style={{ width: "300px" }} alt="" />
                    <br />
                    <button onClick={() => setInfo("demography")}>Demography</button>
                    <button onClick={() => setInfo("location")}>location</button>
                    <button onClick={() => setInfo("capital")}>capital</button>
                    <GetInfo info={info} country={country} />
                </>
            )}
        </div>
    );
};


export default Country;