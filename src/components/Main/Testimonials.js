import './Testimonials.css';
import Pic1 from '../../assets/icons_assets/testi.jpg';
import Pic2 from '../../assets/icons_assets/testi2.jpg';
import Pic3 from '../../assets/icons_assets/testi3.jpg';
import Pic4 from '../../assets/icons_assets/testi4.jpg';
export default function Testimonials () {
  return (
    <div className="container-fluid" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="heading">Testimonials</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-6">
            <div className="card">
              <img src={Pic1}className="card-img-top" />
              <div className="card-body">
                <h4 className='card-subtitle'>5/5</h4>
                <h2 className='card-title'>Mary</h2>
                <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan."</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="card">
              <img src={Pic2}className="card-img-top" />
              <div className="card-body">
                <h4 className='card-subtitle'>4.5/5</h4>
                <h2 className='card-title'>John</h2>
                <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan."</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="card">
              <img src={Pic3}className="card-img-top" />
              <div className="card-body">
                <h4 className='card-subtitle'>4/5</h4>
                <h2 className='card-title'>Sarah</h2>
                <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan."</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="card">
              <img src={Pic4}className="card-img-top" />
              <div className="card-body">
                <h4 className='card-subtitle'>4.5/5</h4>
                <h2 className='card-title'>Anthony</h2>
                <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}