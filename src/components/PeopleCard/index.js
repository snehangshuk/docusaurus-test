import React from 'react';
import clsx from 'clsx';

export function Person(props) {

	
  return (
      <>
      <div className="col col--6 margin-bottom--lg">
       <div className={clsx('card')}>
        <div className={clsx('card__image')}>
            <img src={props.image} alt={`${props.first}'s image`} />
        </div>
        <div className="card__body">
          <h3>{props.first} {props.last}</h3>
          <p>{props.notes}</p>
        </div>
       </div>
      </div>
      </>	  
  )
}

export default Person;
