const Phone = ({data}) => {
    const {phone } = data

    return (
        <div className="col-5">
        <a href={"tel:"+ phone} className="btn btn-primary">Appeler</a>
        </div>
    )
}

export default Phone