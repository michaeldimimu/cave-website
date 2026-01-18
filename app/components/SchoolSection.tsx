const SchoolSection = ({
  theme,
  title,
  subtitle,
  description,
  highlightsTitle,
  highlights,
  image,
  cta,
  reverse,
}: any) => {
  const isDark = theme === "dark";

  return (
    <section
      className={`py-32 px-6 ${
        isDark ? "bg-[#0A0A0A] text-white" : "bg-[#F8F8F8] text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h2
            className={`text-4xl md:text-5xl font-black tracking-tighter mb-6 ${
              isDark
                ? "text-[#EBCB4B] drop-shadow-[0_0_25px_rgba(235,203,75,0.4)]"
                : ""
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-xl md:text-2xl font-medium ${
              isDark ? "text-gray-300" : "text-gray-800"
            }`}
          >
            {subtitle}
          </p>
        </div>

        {/* Content */}
        <div
          className={`grid md:grid-cols-2 gap-16 items-start ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Text */}
          <div className="space-y-8">
            <p
              className={`text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {description}
            </p>

            <div>
              <h4
                className={`font-bold text-xl mb-6 ${
                  isDark ? "text-[#EBCB4B]" : "text-[#D4AF37]"
                }`}
              >
                {highlightsTitle}
              </h4>

              <ul className="space-y-3">
                {highlights.map((item: any, i: number) => (
                  <li
                    key={i}
                    className={`flex items-start ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <span
                      className={`mr-3 font-bold ${
                        isDark ? "text-[#EBCB4B]" : "text-black"
                      }`}
                    >
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`mt-4 w-full md:w-max py-4 px-24 font-bold uppercase transition-all ${
                isDark
                  ? "bg-[#EBCB4B] text-black hover:bg-yellow-500"
                  : "bg-[#EBCB4B] text-black hover:bg-yellow-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              }`}
            >
              {cta}
            </button>
          </div>

          {/* Image */}
          <div className="w-full">
            <img
              src={image}
              alt={title}
              className={`w-full rounded-sm grayscale contrast-125 border ${
                isDark ? "border-gray-800" : "border-gray-300"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolSection;
