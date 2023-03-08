import React, { useCallback } from "react";

function Home() {
  return (
    <div className="w-[100vw] h-[100vh] bg-white flex overflow-y-scroll smooth-scroll flex-col">
      <section className="relative min-h-[100vh] bg-orange-600" id="home">
        <section className="flex h-full justify-center items-center">
          <div className="w-full h-full bg-white flex overflow-x-scroll snap-mandatory snap-x">
            <div
              id="homePage"
              className="min-w-full bg-blue-300 flex justify-center items-center text-5xl  snap-center"
            >
              Home
            </div>
            <div
              id="servicesPage"
              className="bg-orange-400 min-w-full flex justify-center items-center text-5xl snap-x snap-center"
            >
              Services
            </div>
            <div
              id="galleryPage"
              className="min-w-full bg-green-300 flex justify-center items-center text-5xl snap-x snap-center"
            >
                {/*
  .column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
} 
*/}
              <div className="flex flex-wrap px-1">
                <div className="flex-[25%] max-w-[25%] md:flex-[50%] md:max-w-[50%] lg:flex-[100%] lg:max-w-[100%] px-1">
                  <div className="bg-white w-300 h-240">
                    <img className="mt-2 align-middle w-full object-cover h-full" src="https://via.placeholder.com/200x500"></img>
                  </div>
                  <img className="mt-2 align-middle w-full" src="https://via.placeholder.com/200x500"></img>
                  <img className="mt-2 align-middle w-full" src="https://via.placeholder.com/200x500"></img>
                  <img className="mt-2 align-middle w-full" src="https://via.placeholder.com/200x500"></img>
                  <img className="mt-2 align-middle w-full" src="https://via.placeholder.com/200x500"></img>
                  <img className="mt-2 align-middle w-full" src="https://via.placeholder.com/200x500"></img>
                  <img className="mt-2 align-middle w-full" src="https://via.placeholder.com/200x500"></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="home" className="absolute bottom-1 border-black w-full">
          <ul className="tabs flex items-center justify-center bg-white p-4 gap-8 drop-shadow-2xl ">
            <li className="tab">
              <a href="#homePage">Home</a>
            </li>
            <li className="tab">
              <a href="#servicesPage">Services</a>
            </li>
            <li className="tab">
              <a href="#galleryPage">Gallery</a>
            </li>
          </ul>
          <a href="#contact">GO TO CONTACT SECTION</a>
        </div>
      </section>

      <section
        className="min-h-[100vh] flex justify-center items-center  bg-red-400"
        id="contact"
      >
        <div className="flex justify-center flex-col items-center box border border-black">
          <img src="https://via.placeholder.com/200x200"></img>
          <a href="#home">GO TO HOME PAGE</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
