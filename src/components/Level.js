import React from 'react';

const Level = (props) => {

  return (
    <div className="level-wrapper">
      <h3>Current Levels</h3>
      {props.currentLevel}
    </div>
  );
}

export default Level;