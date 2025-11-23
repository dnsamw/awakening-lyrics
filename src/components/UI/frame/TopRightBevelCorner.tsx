function TopRightBevelCorner() {
  return (
    <div style={{ gridArea: "1 / 7", zIndex: 15 }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        vector-effect="non-scaling-stroke"
      >
        <path
          d="M 0 10 L 16 10 L 90 84 L 90 100"
          stroke="#9FFF82"
          stroke-width="2"
          fill="none"
        ></path>
        <path
          d="M 0 40 L 60 100"
          stroke="#9FFF82"
          stroke-width="2"
          fill="none"
        ></path>
        <polygon
          points="0,0 0,10 16,10 90,84 90,100 100,100 100,90 100,0"
          fill="#00000080"
        ></polygon>
        <polygon
          points="0,40 0,10 16,10 90,84 90,100 60,100"
          fill="#9FFF8226"
        ></polygon>
      </svg>
    </div>
  );
}

export default TopRightBevelCorner;
