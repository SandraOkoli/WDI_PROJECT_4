import React from 'react';
import { Row, Input } from 'react-materialize';

const SearchBar = ({ handleFilterByType, types }) => {
  return (
    <div className="container">
      <Row>
        <form>
          <Input s={12}
            type="select"
            name="select"
            onChange={handleFilterByType}
          >
            <option value='all'>Select type</option>
            {types.map(type => <option key={type}>{type}</option>)}
          </Input>
        </form>
      </Row>
    </div>

  );
};

export default SearchBar;
