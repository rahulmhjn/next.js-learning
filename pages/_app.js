import Link from "next/link";
import Image from "next/image";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col bg-[#000000]">
      <nav className="mb-12 bg-[#000000] opacity-80 z-10 py-1.5 px-2.5 w-full h-[70px] fixed">
        <div className="flex items-center justify-between max-w-6xl m-auto">
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/logo.png"
                height="60px"
                width="250px"
                alt=""
              />
            </a>
          </Link>
          <ul className="md:flex hidden space-x-9">
            <li>
              <a className="pb-1.5 cursor-pointer hover:text-blue hover:border-b-2 hover:border-solid">
                Courses
              </a>
            </li>
            <li>
              <a className="pb-1.5 cursor-pointer hover:text-blue hover:border-b-2 hover:border-solid">
                eBook
              </a>
            </li>
            <li>
              <a className="pb-1.5 cursor-pointer hover:text-blue hover:border-b-2 hover:border-solid">
                Freelance Mastery
              </a>
            </li>
            <li>
              <a className="pb-1.5 cursor-pointer hover:text-blue hover:border-b-2 hover:border-solid">
                YouTube
              </a>
            </li>
            <li>
              <Link href="/posts/first-post">
                <a className="pb-1.5 cursor-pointer hover:text-blue hover:border-b-2 hover:border-solid">
                  Want more?
                </a>
              </Link>
            </li>
          </ul>
          {/* <!-- Hamburger Icon --> */}
          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none z-[1]"
          >
            <span className="hamburger-top z-[2]"></span>
            <span className="hamburger-middle z-[2]"></span>
            <span className="hamburger-bottom z-[2]"></span>
          </button>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div className="md:hidden">
          <div
            id="overlay"
            className="hidden top-0 left-0 w-full h-full items-center justify-center"
          >
            <div
              id="overlay1"
              className="hidden bg-black/100 rounded-[50%] w-[200vw] h-[200vw] items-center justify-center flex-none"
            >
              <div
                id="menu"
                className="absolute flex-col items-center hidden space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md text-lg"
              >
                <a className="pb-1.5 cursor-pointer hover:text-blue hover:border-b-2 hover:border-solid">
                  Courses
                </a>
                <a className="pb-1.5 cursor-pointer hover:text-blue hover:border-b-2 hover:border-solid">
                  eBook
                </a>
                <a className="pb-1.5 cursor-pointer hover:text-blue hover:border-b-2 hover:border-solid">
                  Freelance Mastery
                </a>
                <a className="pb-1.5 cursor-pointer hover:text-blue hover:border-b-2 hover:border-solid">
                  YouTube
                </a>
                <Link href="/posts/first-post">
                  <a className="pb-1.5 cursor-pointer hover:text-blue hover:border-b-2 hover:border-solid">
                    Want more?
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <header className="bg-[url('/images/bg.png')] h-[100vh] md:h-[1100px] w-full bg-cover bg-center relative flex justify-center items-center px-[100px] py-0 text-center before:w-full before:h-full before:bg-black/70 before:absolute">
        <div className="w-[700px] my-0 mx-auto z-2 relative">
          <h1 className="text-[20px] font-black text-blue">Traversy Media</h1>
          <h1 className="text-2xl md:text-4xl font-black">
            WEB DEVELOPMENT COURSES FOR{" "}
            <span className="text-blue">EVERYONE</span>
          </h1>
          <h1 className="text-[20px] my-[30px]">
            Practical project-based courses that are easy to understand and
            straight to the point with NO FLUFF
          </h1>
          <button className="bg-blue py-[10px] px-[30px] inline-block rounded-md text-[15px] font-extrabold leading-10 border-solid	border-[#00000000] border hover:bg-[#00000000] hover:border-[#fff]">
            START LEARNING TODAY
          </button>
          <div className="hidden md:grid grid-cols-3 gap-[40px] mt-[120px]">
            <div>
              <i className="fas fa-cogs fa-4x h-24 w-24 font-black text-[4em] inline-block leading-none	"></i>
              <h3 className="text-[50px] font-bold landing-[80px]">15</h3>
              <p className=" text-[20px] mx-0 mt-0 mb-2.5	">
                Years of Experience
              </p>
            </div>
            <div>
              <i className="fas fa-graduation-cap h-24 w-24 fa-4x font-black text-[4em] inline-block leading-none	"></i>
              <h3 className="text-[50px] font-bold	">400K+</h3>
              <p className=" text-[20px] mx-0 mt-0 mb-2.5	">Course Students</p>
            </div>
            <div>
              <i className="fab fa-youtube fa-4x h-24 w-24 font-black text-[4em]	inline-block leading-none	"></i>
              <h3 className="text-[50px] font-bold	">1.8M</h3>
              <p className=" text-[20px] mx-0 mt-0 mb-2.5	">Subscribers</p>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-blue text-white p-5">
        <div className="max-w-[1100px] m-auto flex flex-col md:flex-row">
          <div className="grow flex items-center justify-center md:justify-start">
            <h1 className="text-lg font-extrabold">NOTIFY ME OF NEW COURSES</h1>
          </div>
          <form className="grow flex justify-center md:justify-start items-center">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 inline rounded-l rounded-r-0 w-[60%] py-2.5 px-5"
              placeholder="Email"
            />
            <button
              onClick={(e) => e.preventDefault()}
              className="items-center py-2.5 px-3 text-white bg-black rounded-l-0 rounded-r	 border border-black"
            >
              NOTIFY ME
            </button>
          </form>
        </div>
      </section>
      <section className="bg-[url('/images/bg-pattern-1.png')] p-5">
        <div className="max-w-[1100px] m-auto">
          <h1 className="text-xl font-extrabold text-center mt-[1.875rem] mb-5 mx-0">
            <span className="text-blue">Latest</span> Courses
          </h1>
          <p className="text-[1.3rem] text-center mb-[1.875rem] py-2.5">
            Hover over the course to see this months discount code
          </p>

          {/* Latest Courses */}
          <div className="flex justify-center flex-col md:flex-row">
            {/* 1st card */}
            <div className="flex-[1_1_100%] bg-[#222] px-[1.875rem] py-5 relative border border-solid border-[#333] rounded-[5px]">
              <img
                src="/images/courses/tailwind_small.png"
                className="w-[3.75rem] top-2.5 right-2.5 absolute"
              />
              <div className="mb-2.5 h-[9.375rem] pt-[1.875rem]">
                <p className="text-blue">BEGINNER</p>
                <h3 className="text-md">Tailwind CSS From Scratch</h3>
              </div>
              <div className="flex">
                <img
                  src="/images/courses/udemy-logo.png"
                  className="w-[1.875rem] mr-2.5"
                />
                <a
                  href="https://www.udemy.com/course/tailwind-from-scratch/"
                  target="_blank"
                  className="no-underline	hover:text-[#ea5252]"
                >
                  View On Udemy
                </a>
              </div>
            </div>

            {/* 2nd card */}
            <div className="flex-[1_1_100%] bg-[#222] px-[1.875rem] py-5 relative border border-solid border-[#333] rounded-[5px] my-[2.5rem] mx-0 md:my-0 md:mx-[2.5rem]">
              <img
                src="/images/courses/react_front_to_back_small.png"
                className="w-[3.75rem] top-2.5 right-2.5 absolute"
              />
              <div className="mb-2.5 h-[9.375rem] pt-[1.875rem]">
                <p className="text-blue">BEGINNER - INTERMEDIATE</p>
                <h3 className="text-md">React Front To Back 2022</h3>
              </div>
              <div className="flex">
                <img
                  src="/images/courses/udemy-logo.png"
                  className="w-[1.875rem] mr-2.5"
                />
                <a
                  href="https://www.udemy.com/course/react-front-to-back-2022/?referralCode=4A622C7E48DB66154114"
                  target="_blank"
                  className="no-underline	hover:text-[#ea5252]"
                >
                  View On Udemy
                </a>
              </div>
            </div>
            {/* 3nd card */}
            <div className="flex-[1_1_100%] bg-[#222] px-[1.875rem] py-5 relative border border-solid border-[#333] rounded-[5px]">
              <img
                src="/images/courses/50projects_small.png"
                className="w-[3.75rem] top-2.5 right-2.5 absolute"
              />
              <div className="mb-2.5 h-[9.375rem] pt-[1.875rem]">
                <p className="text-blue">BEGINNER</p>
                <h3 className="text-md">
                  50 Projects in 50 Days - HTML, CSS & JavaScript
                </h3>
              </div>
              <div className="flex">
                <img
                  src="/images/courses/udemy-logo.png"
                  className="w-[1.875rem] mr-2.5"
                />
                <a
                  href="https://www.udemy.com/course/50-projects-50-days/?referralCode=684EE5F9DE1745B6428B"
                  target="_blank"
                  className="no-underline	hover:text-[#ea5252]"
                >
                  View On Udemy
                </a>
              </div>
            </div>
          </div>

          <h1 className="text-xl font-extrabold text-center mt-[3.125rem] mb-[1.875rem] mx-0">
            <span className="text-blue">Popular</span> Courses
          </h1>

          {/* Popular Courses */}
          <div className="flex justify-center flex-col md:flex-row">
            {/* 1st card */}
            <div className="flex-[1_1_100%] bg-[#222] px-[1.875rem] py-5 relative border border-solid border-[#333] rounded-[5px]">
              <img
                src="/images/courses/tailwind_small.png"
                className="w-[3.75rem] top-2.5 right-2.5 absolute"
              />
              <div className="mb-2.5 h-[9.375rem] pt-[1.875rem]">
                <p className="text-blue">BEGINNER</p>
                <h3 className="text-md">Tailwind CSS From Scratch</h3>
              </div>
              <div className="flex">
                <img
                  src="/images/courses/udemy-logo.png"
                  className="w-[1.875rem] mr-2.5"
                />
                <a
                  href="https://www.udemy.com/course/tailwind-from-scratch/"
                  target="_blank"
                  className="no-underline	hover:text-[#ea5252]"
                >
                  View On Udemy
                </a>
              </div>
            </div>

            {/* 2nd card */}
            <div className="flex-[1_1_100%] bg-[#222] px-[1.875rem] py-5 relative border border-solid border-[#333] rounded-[5px] my-[2.5rem] mx-0 md:my-0 md:mx-[2.5rem]">
              <img
                src="/images/courses/react_front_to_back_small.png"
                className="w-[3.75rem] top-2.5 right-2.5 absolute"
              />
              <div className="mb-2.5 h-[9.375rem] pt-[1.875rem]">
                <p className="text-blue">BEGINNER - INTERMEDIATE</p>
                <h3 className="text-md">React Front To Back 2022</h3>
              </div>
              <div className="flex">
                <img
                  src="/images/courses/udemy-logo.png"
                  className="w-[1.875rem] mr-2.5"
                />
                <a
                  href="https://www.udemy.com/course/react-front-to-back-2022/?referralCode=4A622C7E48DB66154114"
                  target="_blank"
                  className="no-underline	hover:text-[#ea5252]"
                >
                  View On Udemy
                </a>
              </div>
            </div>
            {/* 3nd card */}
            <div className="flex-[1_1_100%] bg-[#222] px-[1.875rem] py-5 relative border border-solid border-[#333] rounded-[5px]">
              <img
                src="/images/courses/50projects_small.png"
                className="w-[3.75rem] top-2.5 right-2.5 absolute"
              />
              <div className="mb-2.5 h-[9.375rem] pt-[1.875rem]">
                <p className="text-blue">BEGINNER</p>
                <h3 className="text-md">
                  50 Projects in 50 Days - HTML, CSS & JavaScript
                </h3>
              </div>
              <div className="flex">
                <img
                  src="/images/courses/udemy-logo.png"
                  className="w-[1.875rem] mr-2.5"
                />
                <a
                  href="https://www.udemy.com/course/50-projects-50-days/?referralCode=684EE5F9DE1745B6428B"
                  target="_blank"
                  className="no-underline	hover:text-[#ea5252]"
                >
                  View On Udemy
                </a>
              </div>
            </div>
          </div>

          <button className="bg-[#333] py-[10px] px-[30px] inline-block rounded-md text-[15px] font-extrabold leading-10 border-solid border-[#333] border hover:border-blue hover:bg-blue my-[2.5rem] mx-0 w-full">
            SHOW MORE
          </button>
        </div>
      </section>
      <section className="bg-[#143f7d] text-[#fff] py-[2.5rem] px-[1.25rem] md:py-[3.125rem] md:px-0 text-[1.1rem] md:text-[1.3rem]">
        <div className="mx-auto max-w-[1100px] flex flex-col md:flex-row items-center md:items-start">
          <img
            src="/images/ebook.png"
            className="grow w-[18.75rem] md:w-[28.125rem] mx-auto mb-[2.5rem] md:my-0 md:ml-0 md:mr-[80px]"
          />
          <div className="grow flex flex-col items-center md:items-stretch m-auto">
            <h4 className="text-[1.3rem]">Brad Traversy's</h4>
            <h3 className="text-[2.8rem]">Web Dev Guide</h3>
            <p className="my-2.5 mx-0 text-center md:text-left">
              The most complete guide to web development technologies on the
              planet.
            </p>
            <p className="my-2.5 mx-0 text-center md:text-left">
              This guide also goes into different programming concepts, careers
              and even mental health.
            </p>
            <div>
              <a
                href="https://traversy.gumroad.com/l/web-dev-guide"
                target="_blank"
                className="bg-black py-[5px] px-[25px] block rounded-md text-[15px] font-extrabold leading-10 border-solid border-black border hover:border-[#333] hover:bg-[#333] mt-[1.25rem]"
              >
                GET IT FOR $9.99
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="main-content">
        <Component {...pageProps} />
      </section>
      <footer></footer>
    </div>
  );
}
