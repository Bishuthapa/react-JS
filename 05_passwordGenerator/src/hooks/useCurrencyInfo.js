import { useEffect, useState} from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect (() =>{

        fetch (`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((respond) => respond.json())
        .then((respond) => setData(respond[currency]))


    }, [currency])
    return data;
}



export default useCurrencyInfo;