import "../progress bar/CircleProgressBar.css";

const CircleProgressBar = ({ progress, circleWidth }: any) => {
  const radius = 30;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * progress) / 100;
  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="20%" stopColor="#c471ed" />
            <stop offset="50%" stopColor="#b04ff6" />
            <stop offset="100%" stopColor="#12c2e9" />
          </linearGradient>
        </defs>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="8px"
          r={radius}
          className="circle_background"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="8px"
          r={radius}
          className="circle_progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          stroke="url(#gradient)"
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="circle_text"
          fill="blue"
        >
          {progress}
        </text>
      </svg>
    </div>
  );
};

export default CircleProgressBar;
