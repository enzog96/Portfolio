import "./Project.css";
import React from "react";
import "flowbite/dist/flowbite.js";
import Fade from 'react-reveal/Fade';

import { AiFillGithub } from "react-icons/ai";
import { MdOutlineLiveTv } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";

import Hongo from "../image/previews/hongo.png";
import Molearning from "../image/previews/molearning.jpg";
import Fashe from "../image/previews/fashe.jpg";
import Chef from "../image/previews/chef.png";
import Himara from "../image/previews/himara.png";
import Video from "../image/previews/video.jpg";

const Project = () => {
  return (
    <div id="project" className="project2">
      <h1>Projects</h1>
      <div className="cards">
      <Fade left>
      <div className="card">
        <div className="cardimage">
          <img src={Himara} alt="" />
        </div>
        <div className="buttons1">
          <a href="https://github.com/enzog96/Project-himara">
            <button className="flex justify-center items-center gap-3" type="">
              <AiFillGithub className="mb-1" />
              Github
            </button>
          </a>
          <button
            data-modal-target="img1"
            data-modal-toggle="img1"
            className="flex justify-center items-center gap-3"
            type="button"
          >
            <AiFillInfoCircle />
            Info
          </button>
        </div>
      </div>
      <div
            id="img1"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
          >
            <div className="relative w-full h-full max-w-2xl md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Himara
                  </h3>
                
                </div>

                <div className="p-6 space-y-6">
                  <p className="text-4xl leading-relaxed text-black dark:text-black">
                    Project done with laravel,
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    took care of the backend aspect, giving the possibilities
                    for user to create an account/log in and to book any room
                    they wish to. Created different roles such as
                    admin/webmaster/moderator to give them the possibility to
                    change any part of the website and to control the booking of
                    the rooms.
                  </p>
                </div>

                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="img1"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
      </Fade>
      <Fade right>
      <div className="card">
      <div className="cardimage">
          <img src={Hongo} alt="" />
      </div>
      <div className="buttons">
              <a href="https://github.com/enzog96/cs23_projetjs_Grillo_Enzo">
                <button
                  className="flex justify-center items-center gap-3"
                  type=""
                >
                  <AiFillGithub className="mb-1" />Github
                </button>
              </a>
              <a href="https://enzog96.github.io/cs23_projetjs_Grillo_Enzo/">
                <button
                  className="flex justify-center items-center gap-3"
                  type=""
                >
                  <MdOutlineLiveTv className="mb-1" />Demo
                </button>
              </a>
              <button
                data-modal-target="img2"
                data-modal-toggle="img2"
                className="flex justify-center items-center gap-3"
                type="button"
              >
                <AiFillInfoCircle />
                Info
              </button>
            </div>
      </div>
      <div
            id="img2"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
          >
            <div className="relative w-full h-full max-w-2xl md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Hongo
                  </h3>
               
                </div>

                <div className="p-6 space-y-6">
                  <p className="text-4xl leading-relaxed text-black dark:text-black">
                    Project done in JavaScript,
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    to learn different techniques such as creating a carousel, darkmode, adding color to the wishlist/basket when clicking on a product.
                  </p>
                </div>

                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="img2"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
      </Fade>
      <Fade left>
      <div className="card">
      <div className="cardimage">
          <img src={Fashe} alt="" />
        </div>
        <div className="buttons">
              <a href="https://github.com/enzog96/Fashe-project">
                <button
                  className="flex justify-center items-center gap-3"
                  type=""
                >
                  <AiFillGithub className="mb-1" />Github
                </button>
              </a>
              <a href="https://enzog96.github.io/Fashe-project/">
                <button
                  className="flex justify-center items-center gap-3"
                  type=""
                >
                  <MdOutlineLiveTv className="mb-1" />Demo
                </button>
              </a>
              <button
                data-modal-target="img3"
                data-modal-toggle="img3"
                className="flex justify-center items-center gap-3"
                type="button"
              >
                <AiFillInfoCircle />
                Info
              </button>
            </div>

      </div>
      <div
            id="img3"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
          >
            <div className="relative w-full h-full max-w-2xl md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Fashe
                  </h3>
                 
                </div>

                <div className="p-6 space-y-6">
                  <p className="text-4xl leading-relaxed text-black dark:text-black">
                    Group project done in React,
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  made it so that it would be possible to chose from a variety of different products, to add them to a wish list or to the basket and then having the total amount of the selected products.

                  </p>
                </div>

                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="img3"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
      </Fade>
      <Fade right>
      <div className="card">
      <div className="cardimage">
          <img src={Chef} alt="" />
      </div>
      <div className="buttons">
              <a href="https://github.com/enzog96/chefs">
                <button
                  className="flex justify-center items-center gap-3"
                  type=""
                >
                  <AiFillGithub className="mb-1" />Github
                </button>
              </a>
              <a href="https://enzog96.github.io/chefs/">
                <button
                  className="flex justify-center items-center gap-3"
                  type=""
                >
                  <MdOutlineLiveTv className="mb-1" />Demo
                </button>
              </a>
              <button
                data-modal-target="img4"
                data-modal-toggle="img4"
                className="flex justify-center items-center gap-3"
                type="button"
              >
                <AiFillInfoCircle />
                Info
              </button>
             
            </div>
      </div>
      <div
            id="img4"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
          >
            <div className="relative w-full h-full max-w-2xl md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Chef
                  </h3>
               
                </div>

                <div className="p-6 space-y-6">
                  <p className="text-4xl leading-relaxed text-black dark:text-black">
                    Project done with Bootstrap,
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    to learn how to fully use boostrap, directly changing the className without going into the css, adding all the already made elements to create a fast and responsive website.
                  </p>
                </div>

                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="img4"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
      </Fade>
      <Fade left>
      <div className="card">
      <div className="cardimage">
          <img src={Molearning} alt="" />
      </div>
      <div className="buttons1">
              <a href="https://github.com/enzog96/project-react-molengeek">
                <button
                  className="flex justify-center items-center gap-3"
                  type=""
                >
                  <AiFillGithub className="mb-1" />Github
                </button>
              </a>
              <button
                data-modal-target="img5"
                data-modal-toggle="img5"
                className="flex justify-center items-center gap-3"
                type="button"
              >
                <AiFillInfoCircle />
                Info
              </button>
            </div>
      </div>
      <div
            id="img5"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
          >
            <div className="relative w-full h-full max-w-2xl md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Molearning
                  </h3>
                
                </div>

                <div className="p-6 space-y-6">
                  <p className="text-4xl leading-relaxed text-black dark:text-black">
                    Group project done with React and a little bit of laravel,
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    created it for the place I was studying to become a fullstack developer, giving the possibility for all the coaches there to book the rooms available and have a schedule to avoid any confusion.
                  </p>
                </div>

                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="img5"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
      </Fade>
      <Fade right>
      <div className="card">
      <div className="cardimage">
          <img src={Video} alt="" />
      </div>
      <div className="buttons">
              <a href="https://github.com/enzog96/chefs">
                <button
                  className="flex justify-center items-center gap-3"
                  type=""
                >
                  <AiFillGithub className="mb-1" />
                  Github
                </button>
              </a>
              <a href="https://enzog96.github.io/chefs/">
                <button
                  className="flex justify-center items-center gap-3"
                  type=""
                >
                  <MdOutlineLiveTv className="mb-1" />
                  Demo
                </button>
              </a>
              <button
                data-modal-target="img6"
                data-modal-toggle="img6"
                className="flex justify-center items-center gap-3"
                type="button"
              >
                <AiFillInfoCircle />
                Info
              </button>
             
            </div>
      </div>
      <div
            id="img6"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
          >
            <div className="relative w-full h-full max-w-2xl md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Glx Travel
                  </h3>
            
                </div>

                <div className="p-6 space-y-6">
                  <p className="text-4xl leading-relaxed text-black dark:text-black">
                    Project done with React,
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    when I started learning React I was following a lot of tutorials on how to use it properly and this was one of the result of everything I had learned.
                  </p>
                </div>

                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="img6"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
      </Fade>
      </div>
    </div>
  );
};

export default Project;
