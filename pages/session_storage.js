import { useEffect, useState } from 'react';

export default function SessionStorage({ cookies = '' }) {
  const [sessionValue, setSessionValue] = useState('');

  useEffect(() => {
    // Read the session storage value on the client-side
    setSessionValue(sessionStorage.getItem('nextjs_demo'));
  }, []);

  return (<section className="p-2">
    <h1 className="text-xl">session storage:</h1>
    <p>{`> ${sessionValue}`}</p>
  </section>);
}