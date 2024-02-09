import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Room = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');

  useEffect(() => {
    // logic to initialise user to a room
  }, [name]);
  return (
    <>
      <div>Room page</div>
      <div>Hi {name}</div>
    </>
  );
};
