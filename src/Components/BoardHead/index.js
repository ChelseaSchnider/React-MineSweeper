import React from 'react';
import PropTypes from "prop-types";

const BoardHead = props => {
  let minutes = Math.floor(props.time / 60);
  let formattedSeconds = props.time - minutes * 60 || 0; 

  formattedSeconds = formattedSeconds < 10 ? `0${formattedSeconds}` : formattedSeconds; //use of a ternary operator

  let time = `${minutes}: ${formattedSeconds}`;
  let status =
    props.status === "running" || props.status === "waiting" ? (
      <i className= "icon ion-md-happy-outline" />
    ) : (
      <i className="icon ion-md-sad-outline" />  
    );
  return (
    <div className="board-head">
      <div className="flag-count">{props.flagsUsed}</div>
      <button className="reset" onClick={props.reset}>
        Reset
        {status}
      </button>
      <div className="timer">{time}</div>
    </div>
  );  
};

BoardHead.propTypes = {
  time: PropTypes.number.isRequired,
  flagsUsed: PropTypes.number.isRequired
};

export default BoardHead;