import React from 'react';

//Use a functional component as forms do not require requests to the api
//Pass in user props, handleChange and handleSubmit
const RegisterForm = ({ user, handleChange, handleSubmit }) => {
  return (
    <div className="row">
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className= "form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={user.firstName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={user.lastName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm Password"
            value={user.passwordConfirmation}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="avatar"
            placeholder="Avatar"
            value={user.avatar}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="image"
            placeholder="Cover Image"
            value={user.image}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="bio"
            placeholder="Bio"
            value={user.bio}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={user.genre}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={user.location}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            className="form-control"
            name="type"
            value={user.type}
            onChange={handleChange}
          >
            <option defaultValue="" disabled>Please Select</option>
            <option>Artist</option>
            <option>Songwriter</option>
            <option>Producer</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="skillLevel">Skill Level</label>
          <select
            className="form-control"
            name="skillLevel"
            value={user.skillLevel}
            onChange={handleChange}
          >
            <option defaultValue="" disabled>Please Select</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Pro</option>
          </select>
          {/* Add social links  */}
        </div>
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
