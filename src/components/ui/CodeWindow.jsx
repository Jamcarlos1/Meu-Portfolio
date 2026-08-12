import { Children } from "react";

export function LineGutter({ children, startAt = 1 }) {
  const lines = Children.toArray(children);
  return (
    <div className="flex">
      <div className="select-none pr-4 mr-4 border-r border-[#E5E1D6] text-right">
        {lines.map((_, index) => (
          <div key={index} className="font-mono text-[12px] leading-7 text-[#C2BEB0]">
            {startAt + index}
          </div>
        ))}
      </div>
      <div className="flex-1">
        {lines.map((line, index) => (
          <div key={index} className="leading-7">{line}</div>
        ))}
      </div>
    </div>
  );
}

export function WindowChrome({ filename }) {
  return (
    <div className="flex items-center gap-2 px-5 py-3 border-b border-[#EEEBE3] bg-[#FCFBF9] rounded-t-2xl">
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#F0997B]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FAC775]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#97C459]" />
      </div>
      <span className="font-mono text-[12px] text-[#9B9890] ml-2">{filename}</span>
    </div>
  );
}
