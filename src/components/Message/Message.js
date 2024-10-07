import { useEffect } from 'react';
export default function Message () {
  useEffect(() => {
    import('./Message.css');
  }, [])
  return (
    <section className="container" id="message">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h1>Under Construction</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}