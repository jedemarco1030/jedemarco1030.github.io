import React from "react";

//import stock
import conversionFrameworkUI from "../img/conversion-framework-ui.png";
import conversionFrameworkUI1 from "../img/conversion-framework-ui-1.png";
import memberDashboardUI from "../img/member-dashboard-ui.png";
import memberDashboardUI1 from "../img/member-dashboard-ui-1.png";
import memberDashboardUI2 from "../img/member-dashboard-ui-2.png";
import memberDashboardUI3 from "../img/member-dashboard-ui-3.png";
import makeAPaymentUI from "../img/make-a-payment-ui.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Here is a list of projects that I've worked on at Cigna.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={conversionFrameworkUI} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={conversionFrameworkUI} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Conversion Framework UI</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 ReactJS Jenkins LaunchDarkly Cucumber
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={conversionFrameworkUI1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={memberDashboardUI} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={memberDashboardUI} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Member Dashboard UI</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 ReactJS Jenkins LaunchDarkly Jest
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={memberDashboardUI1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={memberDashboardUI2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={memberDashboardUI3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={makeAPaymentUI} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={makeAPaymentUI} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Make A Payment UI</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 CSS3 ReactJS Jenkins
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
