type ValueCardProps = {
  title: string;
  body: string[];
  footer: string;
};

const ValueCard = ({ title, body, footer }: ValueCardProps) => {
  return (
    <div className="border border-[#EBCB4B] p-8 rounded-lg min-h-[300px] flex flex-col justify-between hover:bg-[#EBCB4B]/5 transition-colors duration-300">
      <div>
        <h3 className="text-xl font-bold mb-6">{title}</h3>

        {body.map((text, i) => (
          <p
            key={i}
            className="text-gray-400 text-sm leading-relaxed mb-4 last:mb-0"
          >
            {text}
          </p>
        ))}
      </div>

      <p className="text-white font-bold text-sm mt-6">{footer}</p>
    </div>
  );
};

export default ValueCard;
