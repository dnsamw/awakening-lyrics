function BottomRightMidBevel() {
  return (
    <div className="w-[30px] h-[70px] shrink-0">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        vector-effect="non-scaling-stroke"
      >
        <path
          d="M 0 40 L 100 90"
          stroke="#9FFF82"
          stroke-width="2"
          fill="none"
        ></path>
        <path
          d="M 0 10 L 100 60"
          stroke="#9FFF82"
          stroke-width="2"
          fill="none"
        ></path>
        <polygon
          points="0,0 0,100 100,100 100,90 0,40"
          fill="#00000080"
        ></polygon>
        <polygon points="0,40 0,10 100,60 100,90" fill="#9FFF8226"></polygon>
      </svg>
    </div>
  );
}

export default BottomRightMidBevel;
