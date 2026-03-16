import { useState } from 'react';
import Nav from './components/Nav';

function App() {
  const [user, setUser] = useState({ name: 'John' });

  return (
    <>
      <Nav user={user} />
    </>
  );
}

export default App;
