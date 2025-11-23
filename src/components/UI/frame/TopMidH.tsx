function TopMidH() {
  return (
    <div className="relative" style={{ gridArea: "1 / 4", zIndex: 15 }}>
      <div className="absolute font-['VT323'] text-light-green top-2 w-full text-center">
        <div className="text-lime-400 font-['VT323']" style={{ fontSize: "16px" }}>
          Online Lyrics - Awakening
        </div>
      </div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        vector-effect="non-scaling-stroke"
      >
        <path
          d="M 0 60  L 100 60"
          stroke="#9FFF82"
          stroke-width="2"
          fill="none"
        ></path>
        <path
          d="M 0 90 L 100 90"
          stroke="#9FFF82"
          stroke-width="2"
          fill="none"
        ></path>
        <polygon points="0,0 0,60 100,60 100,0" fill="#00000080"></polygon>
        <polygon points="0,90 0,60 100,60 100,90" fill="#9FFF8226"></polygon>
      </svg>
    </div>
  );
}

export default TopMidH;
