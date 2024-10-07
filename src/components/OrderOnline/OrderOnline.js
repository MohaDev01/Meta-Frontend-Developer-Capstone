import Message from "../Message/Message";
import { useEffect } from 'react';
function OrderOnline () {
  useEffect(() => {
    import('./OrderOnline.css');
  })
  return (
    <div className="container" id="order-online">
      <Message />
    </div>
  );
}

export default OrderOnline;