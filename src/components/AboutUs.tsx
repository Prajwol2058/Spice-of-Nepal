"use client";
import * as React from "react";

function ImageGallery() {
  return (
    <div className="ml-5 grid grid-cols-3 gap-5 max-md:grid-cols-3 max-md:px-4 auto-rows-min">
      <div className="w-full">
        <img
          src="./aboutus/Jimbuthakali.jpg"
          alt="Nepalese cuisine presentation"
          className="object-cover w-full rounded-md h-[400px] max-md:h-[150px]"
        />
      </div>
      <div className="w-full">
        <img
          src="./aboutus/momo.jpg"
          alt="Traditional dishes display"
          className="object-cover w-full rounded-md h-[400px] mt-10 max-md:h-[180px] max-md:mt-0"
        />
      </div>
      <div className="w-full">
        <img
          src="./aboutus/naan.jpg"
          alt="Authentic food presentation"
          className="object-cover w-full rounded-md h-[400px] max-md:h-[160px]"
        />
      </div>
    </div>
  );
}

function AboutContent() {
  return (
    <article className="ml-5 mr-5 flex flex-col items-start max-md:items-center max-md:text-justify">
      <h2 className="text-4xl font-serif text-amber-500 max-md:text-3xl text-center">
        About Us
      </h2>
      <p className="text-black mt-6 text-lg max-md:max-w-full">
        The classic and traditionally authentic Nepalese and Indian cuisine is
        presented in a tasteful way, harboring the essences of freshest and
        choicest ingredients and best spices available.
        <br />
        The tastefully adapted Nepalese and Indian cuisine in a contemporary
        rustic setting: Cuisine Kathmandu is a modern yet simple rendering of
        age-old classic cuisine from the sub-continent; heralded for their rich
        cultural heritage and piquancy.
      </p>
      <button className="mt-6 px-4 py-3 text-lg text-center text-white bg-amber-500 rounded-md hover:bg-amber-600 transition">
        Discover About Us
      </button>
    </article>
  );
}

function AboutUs() {
  return (
    <section className="overflow-hidden py-10 max-md:px-4">
      <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
        <div className="w-full">
          <ImageGallery />
        </div>
        <div className="w-full flex justify-center">
          <AboutContent />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
