import React, { useState } from 'react';

export default function StarRating(props) {
  let limit = props.limit || 5;
  const [rating, setRating] = useState(props.rate || 2);
  function handleChage(e) {
    setRating(+e.target.getAttribute('data'));
  }

  return (
    <>
      <div onClick={handleChage}>
        <div>Start Rating</div>
        {[...new Array(limit).keys()].map((i) => (
          <spam key={i} data={i + 1}>
            {i < rating ? '⭐' : '⚝'}
          </spam>
        ))}
      </div>
    </>
  );
}
