import { useEffect,useState } from "react";

function userCurrencyInfo(currency){
    const [data, setData] = useState({})
    
    useEffect(() => {
        
          fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)

          .then((res) => res.json())
          .then((res) => setData(res[currency]))

    } , [currency])
//Here useEffect will take a call back i.e. arrow function and dependency array which is 'currency' here. Dependency array signifies that we will call API whenever there is change in any element of array.
    return data

}

export default userCurrencyInfo;
