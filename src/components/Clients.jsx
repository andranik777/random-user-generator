import React from 'react';
import faker from 'faker';
import Client from "./Client"
import Email from "./Email"
import Avatar from "./Avatar"
import Phone from "./Phone"
import Address from "./Address"
import Fakerator from "fakerator";
import MapContainer from "./googleMap"
import IconGenerator from "./ContactIcon"
var fakerator = Fakerator();



const  Clients = () => {
    const clientsList = Array.from({ length: 1 }, () => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: "+" + faker.phone.phoneNumberFormat(),
    job: faker.name.jobTitle(),
    avatar: faker.image.avatar(),
    address: fakerator.entity.address(),
    })
  );


  return (
    <ul className="mt-3">
      {clientsList.map(clientData=> {
        return <div key={clientData.id + "2"}>
        <div className="container d-flex justify-content-center" >
    <div className="card mt-3 row mr-3" style={{width: "17rem"}}>
      <div>
          <Avatar data= {clientData}/>
          <div className="card-body ">
            <Client data={clientData} key={clientData.id} />
            <div className="row mt-3">
              <Phone data = {clientData}/>
              <Email data = {clientData} key={clientData.id + "1"} />
            </div>
          </div>
      </div>
    </div>      
    <div className="card col-4 mt-3 ml-3">
      <div className="card-body">
      <h5 className="card-title text-center mb-3">🏠 L'Addresse</h5>
        <ul className="list-group list-group-flush">
          <Address data = {clientData}/>
          <IconGenerator data={clientData}/>
        </ul>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-1"></div>
    <div className="mt-3 ml-3"><MapContainer data ={clientData}/></div>
  </div>
  
</div>
    })}
    </ul>
  );


}

export default  Clients