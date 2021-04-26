import Fakerator from "fakerator";


const Address = ({ data }) => {

    const {address} = data;

    return <div>
        <li className="list-group-item">Pays: {address.country}</li>  
        <li className="list-group-item">Code de pays: {address.countryCode}</li>  
        <li className="list-group-item">Région: {address.state}</li> 
        <li className="list-group-item">Ville: {address.city}</li>  
        <li className="list-group-item">Rue: {address.street}</li>  
        <li className="list-group-item">Code postal: {address.zip}</li>         
        </div>
}

export default  Address