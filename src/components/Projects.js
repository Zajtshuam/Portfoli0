import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/MusicMockup.png";
import projImg2 from "../assets/img/SignInMockup.png";
import projImg3 from "../assets/img/LandingPageMockup.png";
import projImg4 from "../assets/img/StreamingMockup.png";
import projImg5 from "../assets/img/NewsletterMockup.png";
import projImg6 from "../assets/img/Coming Soon.png";
import caseStudy1 from "../assets/img/MusicoalitionCaseStudy.png";
import caseStudy2 from "../assets/img/VPalCaseStudy.png";
import caseStudy3 from "../assets/img/LifeboatCaseStudy.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import webDev1 from "../assets/img/RPSWebDev.png";
import webDev2 from "../assets/img/WeatherWebDev.png";
import webDev3 from "../assets/img/NetflixWebDev.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      
    },
    
  ];



  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are a collection of personal projects that I have completed. In the future I plan to add links to projects that I have completed professionally as they become available for me to share.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Web Dev</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p>Click Case Study to See More</p>
                    <Row>
                        {/* {
                          // project.map((project, index) => {
                          //   return (
                          //     <ProjectCard
                          //       key={index}
                          //       {...project}
                                />
                            )
                          })
                        } */}
                      </Row>
                      </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Click Application to See More</p>
                      <Row>
                        {/* {
                          webdev.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        } */}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
