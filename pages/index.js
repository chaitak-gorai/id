import React, { useCallback, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import CardPrint from '../helpers/CardPrint';
import { toPng } from 'html-to-image';

const Home = () => {
  // const ref = useRef();
  useEffect(() => {
    // handlePrint();
    // onButtonClick();
  }, []);

  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  return (
    <div>
      <CardPrint />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default Home;
