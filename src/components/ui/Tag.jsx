const COLORS = {
  indigo: "bg-[#EEEDFC] text-[#4338CA]",
  coral: "bg-[#FBEAE3] text-[#A6431F]",
  amber: "bg-[#FBF0DD] text-[#8A5A16]",
};

export function Tag({ children, color = "indigo" }) {
  return (
    <span className={`font-mono text-[11.5px] px-2 py-0.5 rounded-md ${COLORS[color]}`}>
      {children}
    </span>
  );
}
