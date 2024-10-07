import Message from "../Message/Message";
import { useEffect } from 'react';
function Menu () {
  useEffect(() => {
    import('./Menu.css');
  }, [])
  return (
    <div className="container" id="menu">
      <Message />
    </div>
  );
}

export default Menu;