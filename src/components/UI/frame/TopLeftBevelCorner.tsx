function TopLeftBevelCorner() {
  return (
    <div className="over" style={{ gridArea: "1 / 1", zIndex: 155 }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        vector-effect="non-scaling-stroke"
      >
        <path
          d="M 10 100 L 10 90 L 90 10 L 100 10"
          stroke="#9FFF82"
          strokeWidth="2"
          fill="none"
        ></path>
        <path
          d="M 40 100 L 100 40"
          stroke="#9FFF82"
          strokeWidth="2"
          fill="none"
        ></path>
        <polygon
          points="10,100 0,100 0,0 100,0 100,10 90,10 10,90"
          fill="#00000080"
        ></polygon>
        <polygon
          points="40,100 10,100  10,90 90,10 100,10 100,40  "
          fill="#9FFF8226"
        ></polygon>
      </svg>
    </div>
  );
}

export default TopLeftBevelCorner;
