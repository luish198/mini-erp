import { useEffect, useState } from "react";


export default function Clients() {

    const [clients, setClients] = useState()
 
    useEffect(() => {

        fetch("http://localhost:8080/clients").
            then(res => res.json())
            .then(data =>{
              setClients(data); 
            })
        
    }, [])

    console.log(clients)

    return (
        <>
            {clients? 
            <div>
            <h1>Clients list !</h1>

             {clients.map((cli) => (
                <ul>
                    <li key={cli.id}>{cli.COMPANY_NAME}</li>
                    <li key={cli.id}>{cli.MAIN_CONTACT}</li>
                </ul>
                    ))}
             </div>       
            
            : "Loading..."}
        </>

    )
}