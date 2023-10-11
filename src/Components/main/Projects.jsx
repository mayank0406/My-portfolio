import React from "react";
import "./projects.css";

import {
  SiHtml5,
  SiReact,
  // SiEthereum,
  // SiExpress,
  // SiSocketdotio,
  // SiTailwindcss,
  SiReactrouter,
  // SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiCss3,
  SiBootstrap,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
// import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import Weather from "./../../Assets/Weather.png";
import Shopping from "./../../Assets/Shopping.png";
import instclone from './../../Assets/instclone.png';
import landingpage from './../../Assets/landingpage.png';
function Projects() {
  return (
    <div id="Projects">
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={Shopping} alt="Shoppingcart" />
                </div>
              </div>
              <div className="project_information">
                <h2>Shopping Cart</h2>
                <p>
                  Shopping cart is a shopping application who add the lots of
                  shopping items like Earphone, and many more. we build clone of
                  their store website.
                </p>
                <div>
                <SiNodedotjs />
                  <SiHtml5 />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://home-shopping-cart.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/mayank0406/HomeShoppingCart"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://reactjsexample.com/content/images/2020/01/React-MovieCards.jpg"
                    alt="Movie_Api"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Movie_Api</h2>
                <p>
                  Check out the most popular movies on movie_api.
                  Also checked mostpopular and Toprated Movies.
                  also you  can see all movie rating given by the others.

                </p>
                <div>
                <SiNodedotjs />
                  <SiHtml5 />
                  <SiMongodb />


                </div>
                <div>
                  <a
                    href="https://moviecinemate-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/mayank0406/ott"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://th.bing.com/th/id/OIP.-ojHOJiNPWEqrIBui1qxBAHaD4?pid=ImgDet&rs=1" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Tic-Tac-Toe</h2>
                <p>
                  Tic Tac Toe Master is a free online game where 2 player game in which the objective is to
                  take turns and mark the correct spaces, play against computer or against a friend.
                  Challenge yourself from a traditional 3 X 3 grid

                </p>
                <div>
                  <SiNodedotjs />
                  <SiHtml5 />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://6475dd73896c33090cce8967--fantastic-sundae-1b9232.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/mayank0406/Tic_Tac_Toe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={Weather} alt="weather" />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather App</h2>
                <p>
                  Display the current weather conditions for the searched location.This can include the temperature, humidity, wind speed, weather description (sunny, rainy, cloudy, etc.)

                </p>
                <div>
                  <SiHtml5 />
                  <SiCss3 />
                  <SiBootstrap />
                  < SiReactrouter />
                  < SiReact />
                </div>
                <div>
                  <a
                    href="https://weather-877dby4u8-mayank0406.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See The Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/mayank0406/Weather-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={instclone} alt="instaclone" />
                </div>
              </div>
              <div className="project_information">
                <h2>Instgram Clone</h2>
                <p>
                  Instagram is a social network site. we all are added friend
                  sell friend posts in online mode through their website. We
                  cloned their website.
                </p>
                <div>

                  <SiNodedotjs />

                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://instagram-signup-virid.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/mayank0406/InstagramSignup"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                <img src={landingpage} alt="landingpage" />
                </div>
              </div>
              <div className="project_information">
                <h2>FrontEnd Bootcamp</h2>
                <p>
                  FrontEnd bootcamp is  web application for online Buying
                  Courses and Consult to a good trainer and Book .
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://6475e00a8d46870e39913537--funny-nasturtium-447db5.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/mayank0406/BootStrap_Home-page"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default Projects;