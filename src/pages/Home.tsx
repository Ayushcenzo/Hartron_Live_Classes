import Hero from "../components/Hero";
import NextSection from "../components/NextSection";

const Home = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-500/30">
      <Hero />
      <NextSection />
    </div>
  );
};

export default Home;
