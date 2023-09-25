import React from 'react';
import './style.css';
import StarRating from './components/StarRating';

export default function App() {
  return (
    <div>
      <StarRating limit={5} rate={2} />
    </div>
  );
}
