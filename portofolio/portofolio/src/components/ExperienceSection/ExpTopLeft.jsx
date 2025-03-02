import ExpInfo from "./ExpInfo";

const ExpTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-lightOrange font-bold uppercase text-3xl font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExpInfo number="1" text="Years" />
        <p className="font-bold text-6xl text-lightGray"></p>
        <ExpInfo number="10" text="Web(3) & Logo(7)" />
      </div>
      <p className="text-center text-white">
        With 1 years of experience building dinamic and user-friendly web
        application and build brand identity in a logo design
      </p>
      <ExpInfo number="$100" text="Min Budget" />
    </div>
  );
};

export default ExpTopLeft;
