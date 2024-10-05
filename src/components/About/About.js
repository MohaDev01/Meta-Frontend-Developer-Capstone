import './About.css';
import ImgA from '../../assets/images/about/Mario_and_Adrian_A.jpg';
import ImgB from '../../assets/images/about/Mario_and_Adrian_B.jpg';
function About () {
  return (
    <>
      <div className="container" id="about">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6 mb-5 mb-md-0 mb-lg-0 group">
            <h1>Little Lemon</h1>
            <h3>Kurdistan</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="col-12 col-md-12 col-lg-6 d-flex flex-column flex-md-row flex-lg-column align-items-md-center align-items-lg-end">
            <img src={ImgA} className="lg-rounded-top img-fluid" alt="Mario and Adrian" loading="lazy" />
            <img src={ImgB} className="lg-rounded-bottom img-fluid" alt="Mario and Adrian 2" loading="lazy" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;