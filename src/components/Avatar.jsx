const Avatar = ({ data }) => {
    const {avatar } = data;

    return <div>
        <img src = {avatar} className="card-img-top"/>
    </div>
}

export default  Avatar