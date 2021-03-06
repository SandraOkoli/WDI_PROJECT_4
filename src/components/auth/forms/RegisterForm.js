import React from 'react';

import {Row, Input, Button} from 'react-materialize';

//Use a functional component as forms do not require requests to the api
//Pass in user props, handleChange and handleSubmit
const RegisterForm = ({ user, handleChange, handleSubmit }) => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Row>
          <Input s={6}
            type="text"
            name="firstName"
            label="First Name"
            value={user.firstName}
            onChange={handleChange}
          />
          <Input s={6}
            type="text"
            name="lastName"
            label="Last Name"
            value={user.lastName}
            onChange={handleChange}
          />
          <Input s={12}
            type="text"
            name="username"
            label="Username"
            value={user.username}
            onChange={handleChange}
          />
          <Input s={12}
            type="text"
            name="email"
            label="Email"
            value={user.email}
            onChange={handleChange}
          />
          <Input s={6}
            type="password"
            name="password"
            label="Password"
            value={user.password}
            onChange={handleChange}
          />
          <Input s={6}
            type="password"
            name="passwordConfirmation"
            label="Password confirmation"
            value={user.passwordConfirmation}
            onChange={handleChange}
          />
          <Input s={12}
            type="text"
            name="avatar"
            label="Avatar"
            value={user.avatar}
            onChange={handleChange}
          />
          <Input s={12}
            type="text"
            name="image"
            label="Cover Image"
            value={user.image}
            onChange={handleChange}
          />
          <Input s={12}
            type="text"
            name="bio"
            label="Bio"
            value={user.bio}
            onChange={handleChange}
          />
          <Input s={12}
            type="text"
            name="genre"
            label="Genre"
            value={user.genre}
            onChange={handleChange}
          />
          <Input s={12}
            type="text"
            name="location"
            label="Location"
            value={user.location}
            onChange={handleChange}
          />
          <Input s={12}
            type="select"
            name="select"
            label="Type"
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
          <Button>Register</Button>
        </Row>
      </form>
    </div>
  );
};

export default RegisterForm;
