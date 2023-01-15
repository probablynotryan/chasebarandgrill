import trivia from "../../img/about_tiles/trivia.jpg";
import saturdaySpecials from "../../img/about_tiles/saturday-specials.jpg";
const tileContent = [
  {
    subText: "Trivia Tuesdays @ 7PM",
    // button: "Get Pre-Approved",
    picture: trivia,
  },
  {
    subText: "Saturday Dinner Specials",
    // button: "Refinancing Options",
    picture: saturdaySpecials,
  },
  {
    subText: "Other Stuff!",
    // button: "Get A Quick Quote",
    picture: trivia,
  },
  {
    subText: "More Stuff!",
    // button: "Get A Quick Quote",
    picture: trivia,
  },
];

const square = [];

tileContent.forEach((content) => {
  square.push(
    <div className="relative text-center p-2 mb-4 h-auto flex-initial w-56 max-w-sm shadow-xl">
      <div
        style={{ fontSize: "calc(18px + .3vw)" }}
        className="p-0 font-teko text-black w-full"
      >
        {content.subText}

        <img className="object-cover h-5/6 w-full" src={content.picture} />
      </div>
      <span className="text-sm">
        test ffffwfwfnijawi jefiojdsi jaisjd iojs jidj i ffff
      </span>
    </div>
  );
});

export function AboutPanel() {
  return (
    <div className="space-evenly justify-around flex flex-wrap h-auto w-full">
      {square}
    </div>
  );
}
