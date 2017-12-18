import React from 'react';
import { Row, Input } from 'react-materialize';


const SearchBar = ({ types, handleFilterByType, genres, handleFilterByGenre, skillLevels, handleFilterBySkillLevel, locations, handleFilterByLocation }) => {
// const SearchBar = ({ handleFilterByType, handleFilterByGenre, handleFilterBySkillLevel, handleFilterByLocation, types, genres, skillLevels, locations }) => {
  console.log(types);
  return (
    <div className="container">
      <Row>
        <h5>Select Filter(s)</h5>
        <form>
          <Input s={6}
            type="select"
            name="select"
            onChange={handleFilterByType}
          >
            <option value='all'>Select type</option>
            {types.map(type => <option key={type}>{type}</option>)}
          </Input>

          <Input s={6}
            type="select"
            name="select"
            onChange={handleFilterByGenre}
          >
            <option value='all'>Select Genre</option>
            {genres.map(genre => <option key={genre}>{genre}</option>)}
          </Input>

          <Input s={6}
            type="select"
            name="select"
            onChange={handleFilterBySkillLevel}
          >
            <option value='all'>Select Skill Level</option>
            {skillLevels.map(skillLevel => <option key={skillLevel}>{skillLevel}</option>)}
          </Input>

          <Input s={6}
            type="select"
            name="select"
            onChange={handleFilterByLocation}
          >
            <option value='all'>Select Location</option>
            {locations.map(location => <option key={location}>{location}</option>)}
          </Input>

        </form>
      </Row>
    </div>

  );
};

export default SearchBar;
