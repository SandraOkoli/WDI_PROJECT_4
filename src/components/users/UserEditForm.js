import React from 'react';

import {Row, Input, Button} from 'react-materialize';
import Auth from '../../lib/Auth';

//Use a functional component as forms do not require requests to the api
//Pass in user props, handleChange and handleSubmit
const UserEditForm = ({ user, handleChange, handleSubmit }) => {
  return (
    <div className="container">
      { Auth.isAuthenticated() && <h2>Edit Profile</h2>}
      { !Auth.isAuthenticated()
        && <h2>Register</h2>
        && <p>Connect with creatives worldwide today!</p>}
      <form onSubmit={handleSubmit}>
        <Row>
          <Input s={6}
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
          <Input s={6}
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
          <Input s={12}
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          <Input s={12}
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <Input s={12}
            type="text"
            name="avatar"
            value={user.avatar}
            onChange={handleChange}
          />
          <Input s={12}
            type="text"
            name="image"
            value={user.image}
            onChange={handleChange}
          />
          <Input s={12}
            type="text"
            name="bio"
            value={user.bio}
            onChange={handleChange}
          />
          <Input s={12}
            type="text"
            name="genre"
            value={user.genre}
            onChange={handleChange}
          />
          <Input s={12}
            type="text"
            name="location"
            value={user.location}
            onChange={handleChange}
          />
          <Input s={12}
            type="select"
            name="select"
            value={user.type}
            onChange={handleChange}
          >
            <option value='1'>Artist</option>
            <option value='2'>Songwriter</option>
            <option value='3'>Producer</option>
          </Input>
          <Input s={12}
            type="select"
            name="select"
            label="Skill Level"
            value={user.skillLevel}
            onChange={handleChange}
          >
            <option value='1'>Beginner</option>
            <option value='2'>Intermediate</option>
            <option value='3'>Pro</option>
          </Input>
          { Auth.isAuthenticated() && <Button>Save Changes</Button>}
          { !Auth.isAuthenticated() && <Button>Register</Button>}
        </Row>
      </form>
    </div>
  );
};

export default UserEditForm;
