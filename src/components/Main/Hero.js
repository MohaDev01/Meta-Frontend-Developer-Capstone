import './Hero.css';
import HeroImg from '../../assets/icons_assets/restauranfood.jpg';
import { useNavigate } from 'react-router-dom';
export default function Hero () {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/reservations');
  };
  return (
    <div className="container-fluid" id="hero">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 left">
            <h1>Little Lemon</h1>
            <h3>Kurdistan</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipies served with modern twist.</p>
            <button className="btn" onClick={handleButtonClick}>
              Reserve a table
            </button>
          </div>
          <div className="col-12 col-lg-6 right">
            <img src={HeroImg} className="img-fluid" alt="Hero Section Image" />
          </div>
        </div>
      </div>
    </div>
  );
}