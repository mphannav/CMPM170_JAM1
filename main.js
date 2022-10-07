title = "GROUND TOUCHER";

description = `
  [Hold] Stretch
Touch the ground
     and dodge!
`;

characters = [ 
  `
 r rr
rrrrrr
 grr
 grr
rrrrrr
r rr
`,
];

options = {
  isPlayingBgm: true,
  isReplayEnabled: true,
  seed: 4,
};
let cord;
let pins;
let pinMain;
let nextPinDist;
const cordLength = 0;
function update() {
  if (!ticks) {
    pins = [vec(5, 50)]; //pin position
    pinMain = [vec(50, 5)];
    nextPinDist = 5;
    cord = { angle: 1.57, length: cordLength, pin: pinMain[0] };
  }
  let scr = 0.2;
  if (input.isPressed) {
    cord.length += 2; // how fast it goes out
    play("lazer");
    if(cord.length > 90)
    {
      cord.length = 90;
      addScore(1);
    }
  } else {
    cord.length += (cordLength - cord.length) * 0.2; //how fast it retracts
  }
  //cord.angle += 0.05;
  line(cord.pin, vec(cord.pin).addWithAngle(cord.angle, cord.length));
  if (cord.pin.y > 98) {
    end();
  }
  remove(pins, (p) => {
      //p.y  += scr;
      p.x  += scr;
      box(p,2);
    });
    nextPinDist -= scr;
    while (nextPinDist < 0) {
      pins.push(vec(-2 - nextPinDist, rnd(10, 90)));
      nextPinDist += rnd(5, 50);
    }
    color("light_black");
    rect(0, 90, 100, 100);
}
addEventListener("load", onLoad);