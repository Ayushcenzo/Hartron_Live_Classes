import { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { scrollData, type ScrollItem } from "../data/scrollData";

const AnimatedSentence = ({
  sentence,
  index,
  highlights,
}: {
  sentence: string;
  index: number;
  highlights?: string[];
}) => {
  const renderHighlightedText = (text: string) => {
    if (!highlights || highlights.length === 0) return text;
    const escapeRegExp = (string: string) =>
      string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regexPattern = highlights.map((h) => escapeRegExp(h)).join("|");
    const regex = new RegExp(`(${regexPattern})`, "gi");

    const parts = text.split(regex);

    return parts.map((part, i) => {
      if (highlights.find((h) => h.toLowerCase() === part.toLowerCase())) {
        return (
          <span key={i} className="text-[#4169e1] font-extrabold">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.4, ease: "easeOut" }}
      className="inline-block mr-2 lg:mr-3 mb-2"
    >
      {renderHighlightedText(sentence)}.
    </motion.span>
  );
};

const TextBlock = ({
  item,
  isActive,
}: {
  item: ScrollItem;
  isActive: boolean;
}) => {
  const sentences = item.paragraph
    .split(".")
    .map((s: string) => s.trim())
    .filter((s: string) => s.length > 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? "auto" : "none",
        y: isActive ? 0 : 20,
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-4 text-center md:text-left"
    >
      {isActive && (
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0f172a] mb-6 drop-shadow-sm">
          {sentences.map((sentence: string, sIndex: number) => (
            <AnimatedSentence
              key={sIndex}
              sentence={sentence}
              index={sIndex}
              highlights={item.highlightWords}
            />
          ))}
        </h2>
      )}
    </motion.div>
  );
};

const AnimationOne = ({ isActive }: { isActive: boolean }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: isActive ? 1 : 0 }}
    transition={{ duration: 0.8 }}
    className="w-full h-full flex items-center justify-center relative scale-75 md:scale-100"
    style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
  >
    {isActive && (
      <div className="relative w-full h-full max-w-md max-h-[400px] flex items-center justify-center perspective-[1000px]">
        <motion.div
          className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -ml-20 -mt-20"
          style={{ willChange: "transform" }}
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-56 h-56 bg-purple-500/20 rounded-full blur-3xl ml-32 mt-32"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="w-48 h-48 bg-white/60 backdrop-blur-xl rounded-full border border-white/80 shadow-2xl flex flex-col items-center justify-center relative z-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 0.8, type: "spring", bounce: 0.4 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="w-20 h-20 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-full shadow-lg flex items-center justify-center mb-2">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">
            Live Classes
          </div>
        </motion.div>

        <motion.div
          className="absolute -left-4 md:-left-12 top-10 w-44 bg-white/80 backdrop-blur-xl rounded-xl border border-white shadow-xl p-3 z-30"
          initial={{ x: -30, opacity: 0, rotate: -10 }}
          animate={{ x: 0, opacity: 1, rotate: -5, y: [0, 8, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.4 },
            x: { duration: 0.8, delay: 0.4, type: "spring" },
            rotate: { duration: 0.8, delay: 0.4 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center border-2 border-white shadow-sm font-bold text-orange-500 text-lg">
              👨‍🏫
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800">
                Expert Mentors
              </div>
              <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-3 h-3 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute -right-4 md:-right-10 bottom-12 w-48 bg-white/80 backdrop-blur-xl rounded-xl border border-white shadow-xl p-4 z-30"
          initial={{ x: 30, opacity: 0, rotate: 10 }}
          animate={{ x: 0, opacity: 1, rotate: 5, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.6 },
            x: { duration: 0.8, delay: 0.6, type: "spring" },
            rotate: { duration: 0.8, delay: 0.6 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-bold text-slate-800">Future Ready</div>
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">
              🚀
            </div>
          </div>
          <div className="flex items-end gap-2 h-12 w-full">
            {[40, 60, 80, 100].map((h, i) => (
              <motion.div
                key={i}
                className="w-full bg-gradient-to-t from-blue-500 to-cyan-400 rounded-sm"
                style={{ originY: 1, height: `${h}%`, willChange: "transform" }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 1 + i * 0.2, type: "spring" }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="absolute top-4 right-10 text-2xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-10 text-xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 2,
            delay: 1,
          }}
        >
          🎯
        </motion.div>
      </div>
    )}
  </motion.div>
);

const AnimationTwo = ({ isActive }: { isActive: boolean }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: isActive ? 1 : 0 }}
    transition={{ duration: 0.8 }}
    className="w-full h-full flex items-center justify-center relative scale-75 md:scale-100"
    style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
  >
    {isActive && (
      <div className="relative w-full h-full max-w-md max-h-[400px] flex items-center justify-center perspective-[1000px]">
        <motion.div
          className="absolute w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -ml-20 -mt-20"
          style={{ willChange: "transform" }}
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="w-80 p-3 bg-white/50 backdrop-blur-md rounded-2xl border border-white/60 shadow-xl grid grid-cols-2 gap-3 z-20"
          initial={{ y: 30, rotateY: -15, opacity: 0 }}
          animate={{ y: [0, -5, 0], rotateY: 0, opacity: 1 }}
          transition={{
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 0.8, ease: "easeOut" },
            opacity: { duration: 0.8 },
          }}
        >
          <div className="col-span-2 h-32 bg-blue-900/90 rounded-xl relative overflow-hidden border border-white/20">
            <motion.div
              className="absolute top-2 left-2 px-2 py-0.5 bg-red-500 rounded text-[10px] text-white font-bold flex items-center gap-1"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div> LIVE
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="w-16 h-16 rounded-full bg-blue-400 blur-xl"></div>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white absolute bottom-3 left-3"></div>
            <div className="h-2 w-24 bg-white/20 rounded-full absolute bottom-4 left-14"></div>
            <div className="h-2 w-16 bg-white/20 rounded-full absolute bottom-7 left-14"></div>
          </div>

          <div className="h-20 bg-slate-800 rounded-xl relative overflow-hidden">
            <div className="w-6 h-6 rounded-full bg-indigo-400 absolute bottom-2 left-2 hidden md:block"></div>
            <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-slate-600/50 flex items-center justify-center">
              <div className="w-2 h-0.5 bg-white/80 line-through rotate-45"></div>
            </div>
          </div>

          <div className="h-20 bg-slate-800 rounded-xl relative overflow-hidden">
            <motion.div
              className="absolute inset-0 border-2 border-green-400 rounded-xl"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="w-6 h-6 rounded-full bg-emerald-500 absolute bottom-2 left-2 hidden md:block"></div>
          </div>
        </motion.div>

        <motion.div
          className="absolute -right-6 bottom-10 w-40 bg-white/80 backdrop-blur-xl rounded-xl border border-white/80 shadow-2xl p-3 z-30"
          initial={{ x: 20, y: 20, opacity: 0 }}
          animate={{ x: 0, y: [0, -8, 0], opacity: 1 }}
          transition={{
            opacity: { duration: 0.6, delay: 0.8 },
            x: { duration: 0.6, delay: 0.8, type: "spring" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
        >
          <div className="flex gap-2 items-center mb-2">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <div className="h-1.5 w-16 bg-slate-200 rounded-full"></div>
          </div>
          <div className="h-8 bg-blue-50/80 rounded-lg p-2 flex items-center">
            <motion.div
              className="h-1 w-full bg-blue-300 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.5, duration: 1 }}
            />
          </div>

          <div className="flex gap-2 items-center mt-2">
            <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
            <div className="h-1.5 w-12 bg-slate-200 rounded-full"></div>
          </div>
          <div className="h-6 bg-slate-50 rounded-lg mt-1 flex items-center px-2">
            <motion.div
              className="h-1 w-full bg-slate-300 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "60%" }}
              transition={{ delay: 2.5, duration: 0.5 }}
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute -left-4 top-24 w-10 h-10 bg-yellow-100/90 backdrop-blur-md rounded-full border border-yellow-200 shadow-lg flex items-center justify-center z-30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: 1, y: [0, -5, 0] }}
          transition={{
            scale: { duration: 0.5, delay: 1.2 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
          }}
        >
          <span className="text-xl leading-none">✋</span>
        </motion.div>
      </div>
    )}
  </motion.div>
);

const AnimationThree = ({ isActive }: { isActive: boolean }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: isActive ? 1 : 0 }}
    transition={{ duration: 0.8 }}
    className="w-full h-full flex items-end justify-center relative pb-12 px-8"
  >
    {isActive && (
      <>
        <div className="flex items-end justify-center w-full h-4/5 gap-6 relative z-10 max-w-sm mx-auto">
          {[40, 60, 80, 100].map((height, i) => (
            <motion.div
              key={i}
              className="w-16 bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t-xl shadow-lg relative"
              initial={{ height: "0%" }}
              animate={{ height: `${height}%` }}
              transition={{
                duration: 1,
                delay: i * 0.2,
                type: "spring",
                stiffness: 60,
              }}
            ></motion.div>
          ))}
        </div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 border-4 border-indigo-200 rounded-full flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
        </motion.div>
      </>
    )}
  </motion.div>
);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });


  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest < 0.33) {
        if (activeIndex !== 0) setActiveIndex(0);
      } else if (latest < 0.66) {
        if (activeIndex !== 1) setActiveIndex(1);
      } else {
        if (activeIndex !== 2) setActiveIndex(2);
      }
    });
  }, [scrollYProgress, activeIndex]);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (containerRef.current) {
        const currentScrollY = window.scrollY;
        const heroTop = containerRef.current.offsetTop;
        const heroBottom = heroTop + containerRef.current.scrollHeight;

        // Prevent auto-scrolling if the user has scrolled past the Hero section
        if (currentScrollY <= heroBottom && currentScrollY >= heroTop - 100) {
          const scrollableDistance =
            containerRef.current.scrollHeight - window.innerHeight;
          let targetScroll = 0;

          if (activeIndex === 0) {
            targetScroll =
              heroTop + scrollableDistance * 0.45;
          } else if (activeIndex === 1) {
            targetScroll =
              heroTop + scrollableDistance * 0.85;
          } else if (activeIndex === 2) {
            targetScroll = heroTop + 10;
          }

          document.documentElement.style.scrollBehavior = "smooth";
          window.scrollTo({
            top: targetScroll,
            behavior: "smooth",
          });

          setTimeout(() => {
            document.documentElement.style.scrollBehavior = "auto";
          }, 1500);
        }
      }
    }, 5000); // 5 seconds per phase

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [activeIndex]);

  return (
    <section ref={containerRef} className="relative h-[250vh] bg-white">
      <div className="sticky top-[3.5rem] md:top-[5rem] h-[calc(100svh-3.5rem)] md:h-[calc(100svh-5rem)] w-full flex flex-col md:flex-row overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 items-center justify-center md:justify-between py-2 md:py-0">
        <div className="w-full h-1/2 md:w-1/2 md:h-[65vh] relative flex items-center justify-center order-1 md:order-none">
          <div className="h-full w-full relative">
            <div className="absolute inset-0 z-0">
              <AnimationOne isActive={activeIndex === 0} />
            </div>
            <div className="absolute inset-0 z-10">
              <AnimationTwo isActive={activeIndex === 1} />
            </div>
            <div className="absolute inset-0 z-20">
              <AnimationThree isActive={activeIndex === 2} />
            </div>
          </div>
        </div>

        <div className="w-full h-1/2 md:w-1/2 md:h-[70vh] relative flex items-center justify-center lg:pl-16 order-2 md:order-none pb-8 md:pb-0">
          {scrollData.map((item: ScrollItem, index: number) => (
            <TextBlock
              key={item.id}
              item={item}
              isActive={activeIndex === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
