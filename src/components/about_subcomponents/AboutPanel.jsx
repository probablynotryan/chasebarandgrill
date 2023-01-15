import trivia from "../../img/about_tiles/trivia.jpg";
import saturdaySpecials from "../../img/about_tiles/saturday-specials.jpg";
import studs from "../../img/about_tiles/studs.jpg";
import drinks from "../../img/about_tiles/drinks.jpg";

const tileContent = [
  {
    subText: "Trivia Tuesdays @ 7PM",
    picture: trivia,
    caption: "Filler information for Tuesday Trivia, as hosted by Olivia",
  },
  {
    subText: "Saturday Dinner Specials",
    picture: saturdaySpecials,
    caption: "Steakz 4 days bruh. Nice and hot and cooked and stuff.",
  },
  {
    subText: "Studs behind the Bar",
    picture: studs,
    caption:
      "Click these to see more information about any of these. Here's some test overflow text to see how it aligns yadda yadda ayadda.",
  },
  {
    subText: "Premium Cocktails",
    picture: drinks,
    caption: "Made with actual alcohol that you need to be over 21 to drink.",
  },
];

const square = [];

tileContent.forEach((content) => {
  square.push(
    <div className="h-fit relative text-center p-2 mb-4 flex-auto w-40 max-w-xs shadow-xl">
      <div
        style={{ fontSize: "calc(18px + .3vw)" }}
        className="border-2 border-black p-0 font-teko text-black w-full"
      >
        {content.subText}
        <img className="object-cover h-5/6 w-full" src={content.picture} />
      </div>
      <div className="p-1 text-left text-sm leading-4">{content.caption}</div>
    </div>
  );
});

export function AboutPanel() {
  return (
    <div className="space-evenly justify-around flex flex-wrap w-full">
      {square}
    </div>
  );
}
