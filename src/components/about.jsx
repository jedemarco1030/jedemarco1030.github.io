import React from "react";
// import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { 
          id: "HTML_skill", 
          content: "HTML", 
          percentage: "90%", 
          value: "90" 
        },
        { 
          id: "CSS_skill", 
          content: "CSS", 
          percentage: "85%", 
          value: "85" 
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          percentage: "80%",
          value: "80"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          percentage: "80%",
          value: "80"
        },
        {
          id: "Jest_skill",
          content: "Jest",
          percentage: "70%",
          value: "70"
        },
        {
          id: "GitHub_skill",
          content: "GitHub",
          percentage: "80%",
          value: "80"
        },
        {
          id: "Jenkins_skill",
          content: "Jenkins PCF",
          percentage: "75%",
          value: "75"
        },
        {
          id: "LaunchDarkly_skill",
          content: "LaunchDarkly",
          percentage: "75%",
          value: "75"
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "My name is Jamie DeMarco. I am a Software Engineering Advisor at Cigna, working under Express Scripts in the B2C Home Delivery space. I've been with the company for 5 years and have worked on multiple teams, as well as with many different developers. I also have experience collaborating with several business partners including Technical Product Owners, Analytics, UI/UX, and Release Management."
        },
        {
          id: "second-p-about",
          content:
            "I've worked on several different products in the past including Registration, Account Recovery, Login, and the Home Page. With my current team, I'm actively working on Conversion Framework which includes the Retail to Mail, Smart90 Active Choice, Smart90 Incentive Choice, and Migraine Care Value products. These products give members opportunities to convert their prescriptions from retail to home delivery, allowing them to save money."
        },
        {
          id: "third-p-about",
          content:
            "Another product I'm currently working on is the Member Dashboard. Hundreds of thousands of members land on the dashboard each day, so this is a highly visible product that frequently engages a number of other product teams to ensure that the quality is at a level our members expect. There are numerous stakeholders from the Software Engineering organization as well as from the Product Ownership organization, Analytics, and UI/UX that my team consistently engages with to prioritize improvements to the product."
        },
        {
          id: "fourth-p-about",
          content:
            "My day-to-day responsibilities include participating in daily standup meetings, troubleshooting issues that the team might be experiencing at the moment, reviewing pull requests, and working on user stories. We are an agile Kanban team so we go through the process of sizing stories, estimating the time required, and identifying the scope of work required. If there are changes to analytics or the UI, we would have to engage with those contacts to ensure our changes are correct."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skills</p>
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.percentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.percentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
