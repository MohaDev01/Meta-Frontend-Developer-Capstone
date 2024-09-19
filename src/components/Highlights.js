import './Highlights.css';
import GreekSaladImg from '../assets/icons_assets/greek salad.jpg';
import BruchettaImg from '../assets/icons_assets/bruchetta.jpg';
import LemonDessertImg from '../assets/icons_assets/lemon dessert.jpg';
import DeliveryImg from '../assets/icons_assets/Group.svg';
import { Link, useNavigate } from 'react-router-dom';
export default function Highlights () {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/menu');
  };
  return (
    <div className="container" id="highlights">
      <div className="row">
        <div className="col-6">
          <h1>This weeks specials!</h1>
        </div>
        <div className="col-6 text-end">
          <button className="btn" onClick={handleButtonClick}>
            Online Menu
          </button>
        </div>
      </div>
      <div className="row cards-container">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card">
            <img src={GreekSaladImg} className="img-card-top" />
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="card-title">Greek Salad</div>
                </div>
                <div className="col-6 text-end">
                  <div className="card-subtitle">$12.99</div>
                </div>
              </div>
              <div className="card-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</div>
              <div className="card-link">Order a delivery <img src={DeliveryImg} /></div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card">
            <img src={BruchettaImg} className="img-card-top" />
            <div className="card-body">
            <div className="row">
                <div className="col-6">
                  <div className="card-title">Bruchetta</div>
                </div>
                <div className="col-6 text-end">
                  <div className="card-subtitle">$5.99</div>
                </div>
              </div>
              <div className="card-text">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</div>
              <div className="card-link">Order a delivery <img src={DeliveryImg} /></div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card">
            <img src={LemonDessertImg} className="img-card-top" />
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="card-title">Lemon Dessert</div>
                </div>
                <div className="col-6 text-end">
                  <div className="card-subtitle">$5.00</div>
                </div>
              </div>
              <div className="card-text">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</div>
              <div className="card-link">Order a delivery <img src={DeliveryImg} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}