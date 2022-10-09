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
          <ul className="flex">
            <li className="">
              <a className="ml-8 pb-1.5 cursor-pointer hover:text-blue hover:border-b-2 hover:border-solid">
                Courses
              </a>
            </li>
            <li className="">
              <a className="ml-8 pb-1.5 cursor-pointer hover:text-blue hover:border-b-2 hover:border-solid">
                eBook
              </a>
            </li>
            <li className="">
              <a className="ml-8 pb-1.5 cursor-pointer hover:text-blue hover:border-b-2 hover:border-solid">
                Freelance Mastery
              </a>
            </li>
            <li className="">
              <a className="ml-8 pb-1.5 cursor-pointer hover:text-blue hover:border-b-2 hover:border-solid">
                YouTube
              </a>
            </li>
            <li className="">
              <Link href="/posts/first-post">
                <a className="ml-8 pb-1.5 cursor-pointer hover:text-blue hover:border-b-2 hover:border-solid">
                  Want more?
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <header className="bg-[url('/images/bg.png')] h-[1100px] w-full bg-cover bg-center relative flex justify-center items-center px-[100px] py-0 text-center before:w-full before:h-full before:bg-black/70 before:absolute">
        <div className="w-[700px] my-0 mx-auto z-2 relative">
          <h1 className="text-[20px] font-extrabold text-blue">
            Traversy Media
          </h1>
          <h1 className="text-4xl font-extrabold">
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
          <div className="grid grid-cols-3 gap-[40px] mt-[120px]">
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
      <section className="bg-[url('/images/bg-pattern-1.png')]">
        <Component {...pageProps} />
      </section>
      <footer></footer>
    </div>
  );
}
