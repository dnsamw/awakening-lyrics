import ConcertCountdown from "./ConcertCountdown";
import BottomLeftBevelCorner from "./UI/frame/BottomLeftBevelCorner";
import BottomLeftHShort from "./UI/frame/BottomLeftHShort";
import BottomLeftMidBevel from "./UI/frame/BottomLeftMidBevel";
import BottomMidH from "./UI/frame/BottomMidH";
import BottomRightBevelCorner from "./UI/frame/BottomRightBevelCorner";
import BottomRightHShort from "./UI/frame/BottomRightHShort";
import BottomRightMidBevel from "./UI/frame/BottomRightMidBevel";
import LeftVLong from "./UI/frame/LeftVLong";
import RightVLong from "./UI/frame/RightVLong";
import TopLeftBevelCorner from "./UI/frame/TopLeftBevelCorner";
import TopLeftHLong from "./UI/frame/TopLeftHLong";
import TopLeftMidBevel from "./UI/frame/TopLeftMidBevel";
import TopMidH from "./UI/frame/TopMidH";
import TopRightBevelCorner from "./UI/frame/TopRightBevelCorner";
import TopRightHLong from "./UI/frame/TopRightHLong";
import TopRightMidBevel from "./UI/frame/TopRightMidBevel";

export default function SciFiBorderBox({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="w-full h-full min-h-screen flex flex-col">
        <div className="flex-1 relative">
          {/* DESKTOP */}
          <div
            className="w-full h-screen relative hidden md:grid"
            id="colorful-grid"
            style={{
              gridTemplateColumns: "70px 1fr 30px 200px 30px 1fr 70px",
              gridTemplateRows: "70px 1fr 70px",
              gap: "0px",
            }}
          >
            <TopLeftBevelCorner />
            <TopLeftHLong />
            <TopLeftMidBevel />
            <TopMidH />
            <TopRightMidBevel />
            <TopRightHLong />
            <TopRightBevelCorner />

            <LeftVLong />

            <BottomLeftBevelCorner />
            <div
              className="flex"
              style={{ gridArea: "3 / 2 / auto / span 5", zIndex: "15" }}
            >
              <BottomLeftHShort />
              <BottomLeftMidBevel />

              <div className="w-[700px] h-[70px] relative">
                <div className="absolute top-[30px] w-full">
                  <div
                    className="overflow-hidden whitespace-nowrap "
                    style={{ maxWidth: "700px" }}
                  >
                    <div
                      className="inline-block animate-marquee font-['VT323'] text-lime-400"
                      style={{
                        animation:
                          "60s linear 0s infinite normal none running marquee",
                        whiteSpace: "nowrap",
                        fontSize: "14px",
                      }}
                    >
                      yoKgUeWsEhNwIari | Awakening - Born Between Two Prayers Lyrics | yoKgUeWsEhNwIari | Awakening - Born Between Two Prayers Lyrics | yoKgUeWsEhNwIari | Awakening - Born Between Two Prayers Lyrics |
                      yoKgUeWsEhNwIari | Awakening - Born Between Two Prayers Lyrics | yoKgUeWsEhNwIari | Awakening - Born Between Two Prayers Lyrics | yoKgUeWsEhNwIari | Awakening - Born Between Two Prayers Lyrics |
                    </div>
                  </div>
                </div>
                <BottomMidH />
              </div>
              <BottomRightMidBevel />

              <BottomRightHShort />
            </div>
            <BottomRightBevelCorner />
            <RightVLong />

            <div></div>
            <div></div>
            <div className="absolute w-screen h-screen px-8 py-20">
              {children}
            </div>
            <div></div>
          </div>

          {/* MOBILE */}
          <div className="w-full min-h-screen relative grid md:hidden">
            <div
              className="absolute inset-0 w-full z-0 flex items-center justify-center"
              // style={{ height: "100vh" }}
            >
              <img
                alt="Face Background"
                className="w-full opacity-40 "
                src="/assets/face-new-CiDGrYXw.png"
                style={{ height: "100vh", objectFit: "cover" }}
              />
            </div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 p-2 z-50">
              <div
                className="text-primary font-['VT323'] text-lime-400"
                style={{ fontSize: "16px" }}
              >
                <ConcertCountdown />
              </div>
            </div>
            <div className="absolute -bottom-px left-1/2 transform -translate-x-1/2 p-3 z-50">
              <div
                className="overflow-hidden whitespace-nowrap "
                style={{ maxWidth: "72vw" }}
              >
                <div
                  className="inline-block animate-marquee font-['VT323'] text-lime-400"
                  style={{
                    animation:
                      "60s linear 0s infinite normal none running marquee",
                    whiteSpace: "nowrap",
                    fontSize: "18px",
                  }}
                >
                  yoKgUeWsEhNwIari | Awakening - Born Between Two Prayers Lyrics | yoKgUeWsEhNwIari | Awakening - Born Between Two Prayers Lyrics | yoKgUeWsEhNwIari | Awakening - Born Between Two Prayers Lyrics |
                      yoKgUeWsEhNwIari | Awakening - Born Between Two Prayers Lyrics | yoKgUeWsEhNwIari | Awakening - Born Between Two Prayers Lyrics | yoKgUeWsEhNwIari | Awakening - Born Between Two Prayers Lyrics |
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full w-full">
              <div className="h-10 w-full shrink-0 z-30">
                <svg
                  viewBox="0 0 60 4"
                  className="w-full h-full"
                  preserveAspectRatio="none"
                  vector-effect="non-scaling-stroke"
                >
                  <path
                    vector-effect="non-scaling-stroke"
                    d="M 0.25 4 L 4 0 L 17 0 L 19 3 L 41 3 L 43 0 L 56 0 L 59.75 4"
                    style={{
                      stroke: "rgb(159, 255, 130)",
                      strokeWidth: 5,
                      strokeLinecap: "round",
                      fill: "none",
                    }}
                  ></path>
                  <polygon points="0,0 0,3.4 3.2,0" fill="#00000099"></polygon>
                  <polygon
                    points="17.7,0 19.6,2.7 40.4,2.7 42.3,0"
                    fill="#00000099"
                  ></polygon>
                  <polygon
                    points=" 56.6,0  60.4,4 60,0"
                    fill="#00000099"
                  ></polygon>
                </svg>
              </div>

              <div className="flex-1 relative p-4 z-30">
                <svg
                  viewBox="0 0 60 100"
                  className="w-full h-full absolute top-0 left-0 pointer-events-none"
                  preserveAspectRatio="none"
                  vector-effect="non-scaling-stroke"
                >
                  <path
                    vector-effect="non-scaling-stroke"
                    d=" M 0 0 L 0 100 M 60 0 L 60 100"
                    style={{
                      stroke: "rgb(159, 255, 130)",
                      strokeWidth: 8,
                      strokeLinecap: "round",
                      fill: "none",
                    }}
                  ></path>
                </svg>

                {/* <!-- Mobile Content --> */}
                <div className="absolute w-[calc(100%-16px)] h-full px-8">
                  {children}
                </div>
              </div>
              <div className="h-10 w-full z-30">
                <svg
                  viewBox="0 0 60 5"
                  className="w-full h-full "
                  preserveAspectRatio="none"
                  vector-effect="non-scaling-stroke"
                >
                  <path
                    vector-effect="non-scaling-stroke"
                    d=" M 0.25 0 L 4 4 L 6 4 L 8 0 L 52 0 L 54 4 L 56 4 L 59.75 0"
                    style={{
                      stroke: "rgb(159, 255, 130)",
                      strokeWidth: 5,
                      strokeLinecap: "square",
                      fill: "none",
                    }}
                  ></path>
                  <polygon
                    points=" 0,0.25 3.7,4.3 6.4,4.3 8.3,0.2 51.8,0.3 53.8,4.3 56.2,4.3 60.5,0 60,5, 0,5"
                    fill="#00000099"
                  ></polygon>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
