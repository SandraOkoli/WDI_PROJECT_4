import React from 'react';

import {Row, Input, Button} from 'react-materialize';

const LoginForm = ({ user, handleChange, handleSubmit }) => {
  return(
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Row>
          <Input s={12}
            type="text"
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <Input s={12}
            type="password"
            label="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <Button>Login</Button>
        </Row>
      </form>
    </div>
  );
};

export default LoginForm;
