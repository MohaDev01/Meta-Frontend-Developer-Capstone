import './About.css';
import ImgA from '../assets/icons_assets/Mario_and_Adrian_A.jpg';
import ImgB from '../assets/icons_assets/Mario_and_Adrian_B.jpg'
function About () {
  return (
    <>
      <div className="container" id="about">
        <div className="row">
          <div className="col-6 group">
            <h1>Little Lemon</h1>
            <h3>Kurdistan</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
          </div>
          <div className="col-6 text-end">
            <img src={ImgA} className="img-fluid" />
            <img src={ImgB} className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;