export default function Hero({ themeClasses, t }) {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-3xl opacity-20 rounded-full"></div>
          <h1
            className={`relative text-5xl md:text-7xl font-bold ${themeClasses.text} mb-6`}
          >
            {t.hero.title.split(" ").slice(0, -1).join(" ")}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              {t.hero.title.split(" ").slice(-1)}
            </span>
          </h1>
        </div>

        <p
          className={`text-xl ${themeClasses.textSecondary} mb-8 mx-auto leading-relaxed`}
        >
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
          >
            {t.hero.viewProjects}
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            {t.hero.contact}
          </a>
        </div>
      </div>
    </section>
  );
}
