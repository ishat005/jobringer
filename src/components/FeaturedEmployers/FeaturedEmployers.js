import React from "react";
import "./FeaturedEmployers.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../images/employers/img1.png";
import img2 from "../../images/employers/img2.png";
import img3 from "../../images/employers/img3.png";
import img4 from "../../images/employers/img4.png";
import googlePlay from "../../images/googlePlay.png";
import appStore from "../../images/appStore.png";

const FeaturedEmployers = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="featuredEmployersContainer">
      <h2 className="featuredEmployersTitle">
        FEATURED <span className="featuredEmployersSpan">EMPLOYERS</span>
      </h2>
      <Slider {...settings} className="slider">
        <div className="image-container">
          <img src={img1} alt="" />
        </div>

        <div>
          <div className="image-container" style={{ marginLeft: "52px" }}>
            <img src={img2} alt="" />
          </div>
        </div>

        <div className="image-container">
          <img src={img3} alt="" />
        </div>

        <div>
          <div className="image-container" style={{ marginLeft: "52px" }}>
            <img src={img4} alt="" />
          </div>
        </div>
      </Slider>

      <h2 className="applyJobs">APPLY TO THE JOBS ON-THE-GO</h2>
      <p className="jobringerMobileApp">Jobringer Mobile App</p>
      <div className="appStores">
        <img src={googlePlay} alt="" />
        <img src={appStore} alt="" />
      </div>

      <h3 className="mobileApp">
        Mobile App <br />
        <span>Download</span>
      </h3>

      <h3 className="mobileAppDesktop">
        Mobile App
        <span> Download</span>
      </h3>
    </div>
  );
};

export default FeaturedEmployers;
