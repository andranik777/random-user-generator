import React from "react"
import mail from "./img/mail.svg"
import phoneImg from "./img/phone.png"
import user from "./img/user.svg"





const IconGenerator = ({data}) => {
    const {phone} = data;

    const HandleChange = (count) => {
        if(count ==0){
            return ""
        }
        if(count==1){
            return <li className="list-group-item mt-3">{phone}</li>
        }
        if(count==2){
            const name = document.querySelector(".profilName").innerText
            return <li className="list-group-item mt-3">{name}</li>
        }
        if(count==3){
            const email = document.querySelector(".emailPnj").getAttribute("href").slice(7)
            return <li className="list-group-item mt-3">{email}</li>
        }
    }

    const [count, setCount] = React.useState(0)  
    return <div>
        <div className="row td-flex justify-content-center mt-3">
        <img src ={phoneImg} style={{width:"40px"}} onClick={() => count == 0 ? setCount(1) :  setCount(0)} className="ml-2 logo"></img>
        <img src ={user} style={{width:"40px"}} onClick={() => count == 0 ? setCount(2) :  setCount(0)} className="ml-2 logo"></img>
        <img src ={mail} style={{width:"40px"}} onClick={() => count == 0 ? setCount(3) :  setCount(0)} className="ml-2 logo"></img>
        </div>
        {HandleChange(count)}
    </div>
}
   


export default IconGenerator