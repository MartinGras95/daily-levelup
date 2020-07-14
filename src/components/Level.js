import React from 'react';

const Level = (props) => {

  return (
    <div className="level-wrapper">
      <h3>Current Level</h3>
      {props.currentLevel}
    </div>
  );
}

export default Level;