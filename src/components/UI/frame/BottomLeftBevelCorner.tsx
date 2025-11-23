function BottomLeftBevelCorner() {
  return (
    <div style={{ gridArea: "3 / 1", zIndex: 15 }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        vector-effect="non-scaling-stroke"
      >
        <path
          d="M 10 0 L 10 16 L 84 90 L 100 90"
          stroke="#9FFF82"
          stroke-width="2"
          fill="none"
        ></path>
        <path
          d="M 40 0 L 100 60"
          stroke="#9FFF82"
          stroke-width="2"
          fill="none"
        ></path>
        <polygon
          points="0,0 0,100 100,100 100,90 84,90 10,16 10,0"
          fill="#00000080"
        ></polygon>
        <polygon
          points="40,0 10,0 10,16 84,90 100,90 100,60"
          fill="#9FFF8226"
        ></polygon>
      </svg>
    </div>
  );
}

export default BottomLeftBevelCorner;
