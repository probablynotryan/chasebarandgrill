import trivia from "../../img/about_tiles/trivia.jpg";
import familyOutdoors from "../../img/about_tiles/family_outdoors.jpg";
import manAtComputer from "../../img/about_tiles/man_at_computer.jpg";

const tileContent = [
  {
    subText: "Trivia Tuesdays @ 7PM",
    // button: "Get Pre-Approved",
    picture: trivia,
  },
  {
    subText: "Considering Refinancing?",
    // button: "Refinancing Options",
    picture: familyOutdoors,
  },
  {
    subText: "Need a Home Quote?",
    // button: "Get A Quick Quote",
    picture: manAtComputer,
  },
];

const square = [];

tileContent.forEach((content) => {
  square.push(
    <div className="px-1 ">
      <div className="w-full pb-2  shadow-xl text-center">
        <img src={content.picture} />
        <div className="h-fill" style={{ paddingTop: "5%", fontSize: "2.2vw" }}>
          <div style={{ paddingBottom: "3%" }}>{content.subText}</div>
          {/* <button
            style={{
              fontSize: "1.8vw",
              paddingTop: "1.5%",
              paddingBottom: "1.5%",
              width: "95%",
            }}
            className="bg-prestige hover:bg-slate-700 text-white rounded"
          >
            {content.button}
          </button> */}
        </div>
      </div>
    </div>
  );
});

export function AboutPanel() {
  return <div className="flex pb-2">{square}</div>;
}
