import TableOfUsers from "./TableOfUsers";

const TableSection = () => {
  return (
    <section className="w-full h-[40vh] px-8 flex flex-col items-center mb-[18rem]">
      <h2 className="text-center text-[2rem] mb-6 font-bold">
        Table of Content
      </h2>
      <TableOfUsers />
    </section>
  );
};

export default TableSection;
