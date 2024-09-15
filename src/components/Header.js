import Nav from './Nav';
function Header () {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;