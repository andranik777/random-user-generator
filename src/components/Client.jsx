const Client = ({ data }) => {
    const { firstName, lastName, job  } = data;
  
    return (
    <div className = "mt-3">
      <h5 className="card-title profilName">{firstName} {lastName}</h5>
        
      <h6 className="card-text">{job}</h6>
    </div>
    );
  };

  
export default Client