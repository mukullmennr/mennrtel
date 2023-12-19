import React from "react";
const Main = () => {
  return (
    <>
      <div className="main">
        <div className="main_heading">
          <h1>We're passionate about helping <span>businesses succeed</span> online</h1>
          <p>Lucky for you, <span>digital marketing</span> is our forte.</p>
        </div>
        <div>
          <img src="/main/image.svg" alt="image" />
        </div>
      </div>
      <div className="main_img">
        <div>
        <img src="/main/Google_certificate.svg" alt="Google_certificate" />
        </div>
        <div>
        <img src="/main/hubspot_certificate.svg" alt="hunspot_certificate" />
        </div>
        <div>
        <img src="/main/Yext_certificate.svg" alt="Yext_certificate" />
        </div>
        <p>Yes, we’re certified</p>
      </div>
    </>
  );
};

export default Main;
