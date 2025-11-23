function BottomRightBevelCorner() {
  return (
    <div style={{ gridArea: "3 / 7", zIndex: "15" }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        vector-effect="non-scaling-stroke"
      >
        <path
          d="M 0 90 L 16 90 L 90 16 L 90 0"
          stroke="#9FFF82"
          stroke-width="2"
          fill="none"
        ></path>
        <path
          d="M 0 60 L 60 0"
          stroke="#9FFF82"
          stroke-width="2"
          fill="none"
        ></path>
        <polygon
          points="0,90 0,100  100,100 100,0 90,0 90,16 16,90"
          fill="#00000080"
        ></polygon>
        <polygon
          points="0,60 0,90 16,90 90,16 90,0 60,0"
          fill="#9FFF8226"
        ></polygon>
      </svg>
    </div>
  );
}

export default BottomRightBevelCorner;
