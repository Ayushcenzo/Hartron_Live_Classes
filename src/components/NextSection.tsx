import { motion } from "framer-motion";

const NextSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-50 rounded-bl-full -z-10 blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-50 rounded-tr-full -z-10 blur-3xl opacity-60"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl max-auto"
      >
        <h2 className="text-5xl md:text-7xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
          Ready to Start Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Journey?
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Join thousands of students learning from the best industry experts.
          Experience hands-on training and elevate your career.
        </p>
        <button className="px-10 py-5 bg-[#0f172a] text-white rounded-full font-bold text-lg hover:bg-blue-900 transition-all duration-300 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1">
          Enroll Now
        </button>
      </motion.div>
    </section>
  );
};

export default NextSection;
