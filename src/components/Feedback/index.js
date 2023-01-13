// src/components/Feedback/index.js
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import React, { useState } from 'react';

export default function Feedback({ resource }) {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  const [haveVoted, setHaveVoted] = useState(false);
  const giveFeedback = (value) => {
    if (window.ga) {
      window.ga('send', {
        hitType: 'event',
        eventCategory: 'button',
        eventAction: 'feedback',
        eventLabel: label,
        eventValue: value,
      });
    }
    setHaveVoted(true);
  };

  return (
    <div className="docsRating">
      <hr />
      {haveVoted ? (
        'Thanks for letting us know!'
      ) : (
        <>
          <h3>Is this page useful?</h3>
          <button onClick={() => giveFeedback(1)}>Great!</button> &nbsp;&nbsp;
          <button onClick={() => giveFeedback(0)}>Not that great!</button>
        </>
      )}
    </div>
  );
}
