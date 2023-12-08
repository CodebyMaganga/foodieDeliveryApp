import React from "react";
import signIn from "../images/signIn.png";
import delivery from "../images/delivery.png";
import eat from "../images/fork n knife.png";
import kebab from "../images/kebab.jpg";
import kienyeji from "../images/kienyeji.jpg";
import juice from "../images/juice.jpg";
import person1 from "../images/person1.jpg";
import woman1 from "../images/woman1.jpg";
import woman2 from "../images/woman2.jpg";
import { Banner, Button, Label, TextInput } from "flowbite-react";
import { HiX } from "react-icons/hi";

import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero-container flex flex-row">
        <div className="text-box text-5xl font-extrabold text-white text-center w-screen sm:text-4xl text-left ">
          <p>
            Indulge in <span style={{ color: "#F55536" }}>Flavorful </span>
            <span style={{ color: "#FFB238" }}>Delights:</span> Where Every{" "}
            <span style={{ color: "#FFB238" }}> Bite </span>
            Tells a <span style={{ color: "#FF773D" }}>Story!"</span>
          </p>
        </div>
      </section>
      <div className="">
        <div className="text-center text-2xl font-extrabold">
          <h2>How It works</h2>
        </div>
        <div className=" info-section flex flex-row justify-around">
          <div className="iconvisuals w-24">
            <img src={signIn} alt="" />
            <p>Sign In and Choose From our weekly menu</p>
          </div>
          <div className="iconvisuals w-24">
            <img src={delivery} alt="" />
            <p>We will deliver your purchase</p>
          </div>
          <div className="iconvisuals w-24">
            <img src={eat} alt="" />
            <p>Enjoy your meal</p>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <button className="bg-tomato p-4 rounded-2xl shadow-lg shadow-raisinblack">
            Subscribe Now
          </button>
        </div>
      </div>
      <div className="text-center text-2xl font-extrabold mt-8">
        <h2>Our Menu Today</h2>
      </div>
      <div className="menu-today mt-10 flex flex-row justify-center space-x-8 ">
        <div className="card max-w-sm rounded overflow-hidden shadow-lg bg-white mt-8">
          <img className="w-full h-150" src={kebab} alt="Card image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card Title</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
              lorem et justo convallis posuere.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #Tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #Tag2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #Tag3
            </span>
          </div>
        </div>
        <div className="card max-w-sm rounded overflow-hidden shadow-lg bg-white mt-8">
          <img className="w-full h-150" src={kienyeji} alt="Card image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card Title</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
              lorem et justo convallis posuere.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #Tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #Tag2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #Tag3
            </span>
          </div>
        </div>
        <div className="card max-w-sm rounded overflow-hidden shadow-lg bg-white mt-8">
          <img className="w-full h-150" src={juice} alt="Card image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Card Title</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
              lorem et justo convallis posuere.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #Tag1
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #Tag2
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #Tag3
            </span>
          </div>
        </div>
      </div>
      <div className=" mt-20 py-5">
        <h2 className=" header text-center text-2xl font-extrabold">
          What they say about us
        </h2>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FFB238"
          fill-opacity="1"
          d="M0,160L40,176C80,192,160,224,240,245.3C320,267,400,277,480,282.7C560,288,640,288,720,272C800,256,880,224,960,218.7C1040,213,1120,235,1200,245.3C1280,256,1360,256,1400,256L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <div className="m-0">
        <div className="about-us bg-orangeweb flex h-screen flex-row justify-around space-x-10 m-0">
          <div className="person">
            <img
              className="w-40 h-40 rounded-full object-cover "
              src={person1}
              alt=""
            />
            <p>
              "I recently discovered Foodie while searching for a late night
              snack. Not only did they have the item I was looking for, but
              their selection was vast, and the prices were competitive. The
              website was easy to navigate, and the product descriptions were
              informative and accurate. I was pleasantly surprised by the fast
              shipping and the care they took in packaging my order."
              <span className="font-bold">-John Shelby</span>
            </p>
          </div>
          <div className="person">
            <img
              className="w-40 h-40 rounded-full object-cover "
              src={woman1}
              alt=""
            />
            <p>
              I always order my school lunch from Foodie, and I couldn’t be
              happier with my online shopping experience. Their website is
              user-friendly, making it easy to find the perfect item. The
              checkout process is smooth, and I received my order promptly. My
              lunch always arrives in excellent condition, exactly as described
              on their website. I’m thrilled with the quality and will
              definitely continue shopping at Foodie again in the future. Highly
              recommended!”<span className="font-bold">-Riziki Mulwa</span>
            </p>
          </div>
          <div className="person">
            <img
              className="w-40 h-40 rounded-full object-cover "
              src={woman2}
              alt=""
            />
            <p>
              "I ordered a plate of chicken cajun and rice from Foodie last
              week, and I was amazed at how quickly it arrived. The packaging
              was secure, ensuring the item was undamaged. The customer service
              was exceptional, as they kept me updated throughout the entire
              process. I had a question about the product, and their support
              team responded promptly and professionally. Overall, my experience
              with Foodie was outstanding, and I can’t wait for my next
              purchase.”
              <span className="font-bold">-Amanda Biles</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
