import { useEffect, useState } from "react";
const Api = () => {
const [apiInfo, setApiInfo] = useState(null);
useEffect(() => {
    const getData = async () => {

        try {
            const response = await fetch('https://randomuser.me/api/?results=15');
            // console.log(response);
    
            const data     = await response.json()
            setApiInfo(data.results)
            console.log(data)
    
        } catch (error) {
            
             console.log("Hay un error en tu API")   
            
        }      
               
        }
        getData();
    }, []);
    // console.log(apiInfo.results)
    return(
        <>
        <ul>{apiInfo &&
        apiInfo.map((item, i) => {
            <li key={i}>{item.name.first}</li>
        })}
        </ul>
        <h1>holis</h1>
        </>
    );

}




export default Api;