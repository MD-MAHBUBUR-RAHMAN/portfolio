import { Link } from "react-router-dom";
import me from "../assets/me-blue.png";
import ProjectsSummery from "./Projects/ProjectsSummery";

const Home = () => {
  return (
    <section>
      <div className=" bg-gray-100">
        <div
          style={{ height: "600px" }}
          className="md:w-3/4 mx-auto lg:w-5/6 md:grid grid-cols-2 items-center gap-10"
        >
          <img className="md:w-[400px] lg:w-[600px]" src={me} alt="mypicture" />
          <div className="text-2xl p-5 flex-shrink">
            <p className="mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam nesciunt sit doloribus facilis, iusto eos doloremque
              culpa accusamus
            </p>

            <button className="bg-yellow-400 mx-auto py-2 px-5 rounded relative left-24">
              <Link to="pdf">MyResume</Link>
            </button>
          </div>
        </div>
        <svg
          className="md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,64L60,80C120,96,240,128,360,117.3C480,107,600,53,720,74.7C840,96,960,192,1080,208C1200,224,1320,160,1380,128L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <ProjectsSummery />
    </section>
  );
};

export default Home;
