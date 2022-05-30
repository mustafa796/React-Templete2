import React from "react";

export default function Section1() {
  return (
    <>
      <section className="hero" id="section_1">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12 m-auto">
              <div className="hero-text">
                <h1 className="text-white mb-4 sec1-h1">
                  <u className="text-info">Leadership</u> Conference 2022
                </h1>

                <div className="d-flex justify-content-center align-items-center">
                  <span className="date-text">July 12 to 18, 2022</span>

                  <span className="location-text">Times Square, NY</span>
                </div>

                <a
                  href="#section_2"
                  className="custom-link bi-arrow-down arrow-icon"
                ></a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="video-bk">
          <video autoplay="" loop="" muted="" className="custom-video">
            <source src="https://youtu.be/2Gg6Seob5Mg" type="video/mp4" />
          </video>
        </div> */}
      </section>
      <div class="video-bk">
                    <video autoplay="" loop="" muted="" class="custom-video">
                        <source src="videos/pexels-pavel-danilyuk-8716790.mp4" type="video/mp4"/>

                    </video>
                </div>
    </>
  );
}
