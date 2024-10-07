
import { useEffect } from 'react';
import Pic1 from '../../assets/images/testimonials/testi.jpg';
import Pic2 from '../../assets/images/testimonials/testi2.jpg';
import Pic3 from '../../assets/images/testimonials/testi3.jpg';
import Pic4 from '../../assets/images/testimonials/testi4.jpg';
export default function Testimonials () {
  useEffect(() => {
    import('./Testimonials.css');
  }, [])
  return (
    <div className="container-fluid" id="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="heading">Testimonials</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active d-flex flex-row justify-content-center">
                  <div className="card">
                    <img src={Pic1}className="card-img-top" alt="Mary" loading="lazy" />
                    <div className="card-body">
                      <h4 className='card-subtitle'>5/5</h4>
                      <h2 className='card-title'>Mary</h2>
                      <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan."</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item d-flex justify-content-center">
                  <div className="card">
                    <img src={Pic2}className="card-img-top" alt="John" loading="lazy" />
                    <div className="card-body">
                      <h4 className='card-subtitle'>4.5/5</h4>
                      <h2 className='card-title'>John</h2>
                      <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan."</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item d-flex justify-content-center">
                  <div className="card">
                    <img src={Pic3}className="card-img-top" alt="Sarah" loading="lazy" />
                    <div className="card-body">
                      <h4 className='card-subtitle'>4/5</h4>
                      <h2 className='card-title'>Sarah</h2>
                      <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan."</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item d-flex justify-content-center">
                  <div className="card">
                    <img src={Pic4}className="card-img-top" alt="Anthony" loading="lazy" />
                    <div className="card-body">
                      <h4 className='card-subtitle'>4.5/5</h4>
                      <h2 className='card-title'>Anthony</h2>
                      <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus tempor felis a accumsan."</p>
                    </div>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carousel" rel="noreferrer" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carousel" rel="noreferrer" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}