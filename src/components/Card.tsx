type CardProps = {
  content: string[];
  icon: string;
};

export default function Card({ content, icon }: CardProps) {
  return (
    <div
      className="
    w-full h-full flex flex-col justify-between items-center transition-all duration-250 rounded-lg bg-gradient-to-br
    from-[#111827] to-[#4B5563] border-2 border-white text-white p-4 cursor-default hover:shadow-xl hover:scale-[1.01]"
    >
      <header>
        <img
          src={icon}
          alt="icon"
          style={{
            width: "100px",
            height: "100px",
            fill: "white",
          }}
          className="fill-white"
        />
      </header>
      <footer>
        <div className="gap-4 flex flex-col mt-4">
          {content.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </footer>
    </div>
  );
}
