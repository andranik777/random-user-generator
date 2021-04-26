 const EmailGenerator = ({data}) => {
    const {firstName,lastName } = data
    const email_prefix = ["gmail.com", "yahoo.com", "mail.ru","hotmail.com","protonmail.com"]
    let random =  Math.floor(Math.random() * email_prefix.length)

    const email = firstName + "." + lastName + "@" + email_prefix[random]

    return <div>
            <a href = {"mailto:" + email} className="btn btn-primary emailPnj">Envoyer un mail</a>
        </div>
}

export default EmailGenerator