import './Highlights.css';
import GreekSaladImg from '../../assets/icons_assets/greekSalad.jpg';
import BruchettaImg from '../../assets/icons_assets/bruchetta.jpg';
import LemonDessertImg from '../../assets/icons_assets/lemonDessert.jpg';
import DeliveryImg from '../../assets/icons_assets/Group.svg';
import { Link } from 'react-router-dom';
export default function Highlights () {
  return (
    <div className="container-fluid" id="highlights">
      <div className="row px-0 px-md-2 px-lg-5 specials">
        <div className="col-12 col-md-6 col-lg-6 text-center text-md-left text-lg-center">
          <h2>This weeks specials!</h2>
        </div>
        <div className="col-12 col-md-6 col-lg-6 pt-3 pt-md-0 pt-lg-0 text-center text-md-right text-lg-center">
          <Link className="btn btn-outline-dark px-4 my-4 my-md-0 my-lg-0" aria-label="Online Menu" aria-current="page" to="/menu">
            Online Menu
          </Link>
        </div>
      </div>
      <div className="row px-0 px-md-2 px-lg-5 menu">
        <div className="col-lg-4 col-md-6 col-12 pb-5 pb-md-5 pb-lg-0 d-flex justify-content-center justify-content-lg-end col">
          <div className="card">
            <img src={GreekSaladImg} className="img-card-top" alt="Greek Salad" />
            <div className="card-body">
              <div className="row px-3 d-flex justify-content-between align-items-center">
                <div className="card-title align-self-start">Greek Salad</div>
                <div className="card-subtitle align-self-end">$12.99</div>
              </div>
              <div className="card-text py-4">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</div>
              <div className="card-link">Order a delivery <img src={DeliveryImg} alt="Order a delivery" /></div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 pb-5 pb-md-0 pb-lg-0 d-flex justify-content-center col">
          <div className="card">
            <img src={BruchettaImg} className="img-card-top" alt="Bruchetta" />
            <div className="card-body">
              <div className="row px-3 d-flex justify-content-between align-items-center">
                <div className="card-title align-self-start">Bruchetta</div>
                <div className="card-subtitle align-self-end">$5.99</div>
              </div>
              <div className="card-text py-4">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</div>
              <div className="card-link">Order a delivery <img src={DeliveryImg} alt="Order a delivery" /></div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 pb-5 pb-md-0 pb-lg-0 d-flex justify-content-center justify-content-lg-start col">
          <div className="card">
            <img src={LemonDessertImg} className="img-card-top" alt="Lemon Dessert" />
            <div className="card-body">
              <div className="row px-3 d-flex justify-content-between align-items-center">
                <div className="card-title align-self-start">Lemon Dessert</div>
                <div className="card-subtitle align-self-end">$5.00</div>
              </div>
              <div className="card-text py-4">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</div>
              <div className="card-link">Order a delivery <img src={DeliveryImg} alt="Order a delivery" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}