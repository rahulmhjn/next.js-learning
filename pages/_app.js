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
      <section className="bg-blue text-white p-5 flex sm:flex-col md:flex-row">
        <div className="grow flex items-center justify-center">
          <h1 className="text-lg font-extrabold">NOTIFY ME OF NEW COURSES</h1>
        </div>
        <form className="grow flex sm:justify-center md:justify-start items-center">
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
      </section>
      <section className="bg-[url('/images/bg-pattern-1.png')] p-5">
        <div className="max-w-[1100px] m-auto">
          <h1 className="text-xl font-extrabold text-center mt-[1.875rem] mb-5 mx-0">
            <span className="text-blue">Latest</span> Courses
          </h1>
          <p className="text-[1.3rem] text-center mb-[1.875rem] py-2.5">
            Hover over the course to see this months discount code
          </p>
        </div>
      </section>
      <section className="bg-[url('/images/bg-pattern-1.png')]">
        <Component {...pageProps} />
      </section>
      <footer></footer>
    </div>
  );
}
