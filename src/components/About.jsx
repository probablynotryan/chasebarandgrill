// import westand from '../img/we_stand.jpg';
import outdoors from "../img/outdoors.jpg";
import { AboutPanel } from "./about_subcomponents/AboutPanel";

function About() {
  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundSize: "contain",
          backgroundImage: `url(${outdoors})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: 0,
          paddingTop: "54.33%",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <div
            style={{ left: "12.5%", top: "12.5%", width: "75%", height: "75%" }}
            className="relative bg-opacity-60 bg-black"
          >
            <div
              style={{
                fontSize: "4vw",
                paddingTop: "18%",
                paddingBottom: "2px",
              }}
              className="relative font-roboto text-white text-center"
            >
              Where food, fun and friends{" "}
              <span className="text-amber-200">meet</span>.
            </div>
            <div className="text-center pt-2 ">
              <button
                style={{ fontSize: "2vw" }}
                className="hover:bg-slate-900 text-white font-bold py-2 px-4 border-solid border border-gray-400 rounded"
              >
                Our Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ fontSize: "2vm" }}
        className="flex justify-between py-4 px-5 text-black text-lg"
      >
        <AboutPanel />
      </div>
    </>
  );
}

export default About;
