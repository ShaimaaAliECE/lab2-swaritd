import React from 'react';
import './index.css';

// function react component for squares in the board where each square has an id so we can reference it for actions

function Square(props) {

  var currSquare = document.getElementById(props.number);

  if (props.value === 'P1')
  {
    currSquare.classList.add("circle1");
  }

  else if (props.value === 'P2')
  {
    currSquare.classList.add("circle2");
  }

  else
  {
    // to remove all chips
    if (currSquare != null)
    {
      currSquare.classList.remove('circle1');
      currSquare.classList.remove('circle2');
    }
  }

    return (
      <button className="square">
      <span id={props.number}></span>
      </button>
    );
}

export default Square;