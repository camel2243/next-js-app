import { useEffect, useState } from 'react';

export default function LocalStorage({ cookies = '' }) {
  const [localValue, setLocalValue] = useState('');

  useEffect(() => {
    // Read the session storage value on the client-side
    setLocalValue(localStorage.getItem('nextjs_demo'));
  }, []);

  return (<section className="p-2">
    <h1 className="text-xl">local storage:</h1>
    <p>{`> ${localValue}`}</p>
  </section>);
}