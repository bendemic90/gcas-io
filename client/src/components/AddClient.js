export default function AddClient() {
  return (
    <>
      <h1 className="profile">Add a new client:</h1>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First Name"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last Name"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Emergency Contact Information</label>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
              ></input>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Relation"
              ></input>
              <small className="form-text text-muted">e.g. Brother</small>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Contact #"
              ></input>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
