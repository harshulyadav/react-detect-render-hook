import React, { useState, useEffect } from 'react';
import { useDidUpdate } from './useDidUpdate';
import './style.css';

export default function App() {
  const [state, setState] = useState({
    key: false,
  });

  useEffect(() => {
    console.log('ran for first time');
  }, []);

  useDidUpdate(() => {
    // react please run me if 'key' changes, but not on initial render
    console.log('Yes updated')
  }, [state.key]);

  const handleClick = (e) => {
    console.log('clicked');
    setState(!state);
  };

  return (
    console.log('render'),
    <div onClick={handleClick}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
