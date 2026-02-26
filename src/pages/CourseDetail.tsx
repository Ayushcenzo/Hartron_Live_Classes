import { useParams, Link } from "react-router-dom";
import { coursesData, type Course } from "../data/coursesData";
import { motion } from "framer-motion";

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const allPrograms: Course[] = [
    ...coursesData.Student_Programs.programs,
    ...coursesData.Faculty_Programs.programs,
  ];

  const course = allPrograms.find((p) => p.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Course Not Found
        </h1>
        <p className="text-slate-500 mb-8">
          We couldn't find the curriculum you're looking for.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Return to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition mb-8"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>

          <div className="relative z-10 w-full max-w-2xl">
            {course.category && (
              <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                {course.category}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              {course.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-300">
              <span className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {course.duration}
              </span>
              {course.modules_count && (
                <span className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
                  <svg
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  {course.modules_count} Modules
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              Course Curriculum
            </h2>

            {course.key_topics && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <ul className="space-y-4">
                  {course.key_topics.map((topic, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </div>
                      <div className="pt-1 text-slate-700 font-medium leading-relaxed">
                        {topic}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {course.core_modules && (
              <div className="space-y-4">
                {Object.entries(course.core_modules).map(
                  ([modName, modDesc], i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex gap-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">
                          {modName.replace(/_/g, " ")}
                        </h3>
                        <p className="text-slate-600">{modDesc}</p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            )}
          </div>

          <div className="md:col-span-1 space-y-6 sticky top-28">
            {course.fees && (
              <div className="bg-white rounded-2xl border border-blue-100 shadow-xl shadow-blue-50 p-6 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full blur-2xl opacity-70"></div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 relative z-10">
                  Course Fees
                </h3>
                <div className="text-4xl font-extrabold text-slate-800 mb-6 relative z-10">
                  {course.fees}
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-blue-200 hover:-translate-y-0.5 mt-2 relative z-10">
                  Enroll Now
                </button>
              </div>
            )}

            <div className="bg-indigo-50/50 rounded-2xl border border-indigo-100 p-6">
              <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Assessment Criteria
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-3 border-b border-indigo-100/50">
                  <span className="text-slate-600 font-medium">MCQ Theory</span>
                  <span className="text-slate-800 font-bold">
                    {course.assessment.MCQ}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-indigo-100/50">
                  <span className="text-slate-600 font-medium">
                    Practical/Lab
                  </span>
                  <span className="text-slate-800 font-bold">
                    {course.assessment.Practical}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-slate-800 font-extrabold uppercase text-xs tracking-wider">
                    Total Marks
                  </span>
                  <span className="text-indigo-600 font-extrabold text-lg">
                    {course.assessment.Total}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseDetail;
