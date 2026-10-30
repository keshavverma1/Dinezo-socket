// Loader.jsx — React + Tailwind (keyframes component ke andar hain, config change ki zarurat nahi)
const L =
  "opacity-0 animate-[dz-drop_2.8s_cubic-bezier(.3,1.4,.5,1)_infinite] motion-reduce:animate-none motion-reduce:opacity-100";
const DOT =
  "text-[#FAA419] animate-[dz-dot_1.2s_ease-in-out_infinite] motion-reduce:animate-none";

export default function Loader({ text = "Dinezo" }) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-2 sm:gap-4 bg-white p-4"
    >
      <style>{`
        @keyframes dz-drop{
          0%{opacity:0;transform:translateY(-220px)}
          18%{opacity:1;transform:translateY(0)}
          80%{opacity:1;transform:translateY(0)}
          92%,100%{opacity:0;transform:translateY(0)}
        }
        @keyframes dz-dot{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-.3em)}}
      `}</style>

      <svg className="w-[clamp(110px,30vw,230px)] h-auto overflow-visible" viewBox="480 510 970 910" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g className={L} style={{ animationDelay: "0s" }}>
          <path d="M523 1233H1407C1416 1233 1423 1240 1423 1249V1320C1423 1366 1385 1403 1340 1403H592C547 1403 508 1366 508 1320V1249C508 1240 515 1233 523 1233Z" fill="#FAA419"/>
          <path d="M1360 1233H1407C1416 1233 1423 1240 1423 1249V1320C1423 1366 1385 1403 1340 1403H900C1100 1370 1280 1300 1360 1233Z" fill="#F8981B"/>
        </g>
        <g className={L} style={{ animationDelay: ".25s" }}>
          <rect x="525" y="1108" width="881" height="125" rx="28" fill="#964A21"/>
        </g>
        <g className={L} style={{ animationDelay: ".5s" }}>
          <rect x="532" y="1043" width="867" height="65" rx="18" fill="#EA2429"/>
          <path d="M655 1043H1316L1180 1185C1000 1090 820 1060 655 1043Z" fill="#FDBF0A"/>
        </g>
        <g className={L} style={{ animationDelay: ".75s" }}>
          <rect x="532" y="950" width="868" height="95" rx="22" fill="#BA6027"/>
          <path d="M525 888L496 945C482 975 510 990 540 988C570 985 580 950 615 950C645 950 660 965 680 980C720 1010 770 1005 800 970C830 940 860 945 890 965C920 985 945 1010 975 1008C1010 1005 1020 985 1035 970C1060 945 1110 940 1140 970C1175 1010 1220 1010 1275 965C1310 940 1340 945 1360 968C1385 992 1450 985 1435 945L1405 888Z" fill="#39743A"/>
        </g>
        <g className={L} style={{ animationDelay: "1s" }}>
          <path d="M515 888C515 700 720 530 958 530C1196 530 1414 700 1414 888Z" fill="#FAA419"/>
          <path d="M940 888C1060 830 1180 760 1230 640C1330 700 1414 800 1414 888Z" fill="#F8981B"/>
          <path d="M541 862C580 720 690 610 865 570C720 660 600 760 541 862Z" fill="#FDB75A"/>
          <g fill="#fff">
            <ellipse cx="800" cy="672" rx="13" ry="24" transform="rotate(40 800 672)"/>
            <ellipse cx="888" cy="610" rx="13" ry="24" transform="rotate(-40 888 610)"/>
            <ellipse cx="955" cy="672" rx="13" ry="28" transform="rotate(8 955 672)"/>
            <ellipse cx="1040" cy="618" rx="14" ry="24" transform="rotate(-75 1040 618)"/>
            <ellipse cx="1118" cy="672" rx="13" ry="24" transform="rotate(60 1118 672)"/>
          </g>
        </g>
      </svg>

      <div className="flex items-end gap-0.5 font-extrabold tracking-wider text-[#964A21] text-[clamp(1.3rem,4.5vw,2.2rem)]">
        {text}
        <span className={DOT}>.</span>
        <span className={DOT} style={{ animationDelay: ".15s" }}>.</span>
        <span className={DOT} style={{ animationDelay: ".3s" }}>.</span>
      </div>
    </div>
  );
}