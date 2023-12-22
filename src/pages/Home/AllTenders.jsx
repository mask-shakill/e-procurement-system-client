import React from "react";
import CountUp from "react-countup";
const AllTenders = () => {
  return (
    <>
      <h1 className="text-center mt-[140px] text-2xl font-semibold text-slate-800">
        Our Tenders
      </h1>
      <div className="grid grid-cols-4  p-10 gap-4">
        <div className="flex flex-col items-center col-span-1 text-slate-800 text-4xl border-2  rounded-lg shadow-lg p-4">
          <h1 className=" font-semibold">
            <CountUp start={0} duration={30} delay={0} end={1570} />{" "}
            <span>+</span>
          </h1>
          <h1 className="text-4xl font-semibold">New Tenders</h1>
        </div>

        <div className="flex flex-col items-center col-span-1 text-slate-800 text-4xl border-2  rounded-lg shadow-lg p-4">
          <h1 className=" font-semibold">
            <CountUp start={0} duration={30} delay={0} end={4510} />{" "}
            <span>+</span>
          </h1>
          <h1 className="text-4xl font-semibold">Total Tenders</h1>
        </div>

        <div className="flex flex-col items-center col-span-1 text-slate-800 text-4xl border-2  rounded-lg shadow-lg p-4">
          <h1 className=" font-semibold">
            <CountUp start={0} duration={30} delay={0} end={420} />{" "}
            <span>+</span>
          </h1>
          <h1 className="text-4xl font-semibold">Auctions</h1>
        </div>

        <div className="flex flex-col items-center col-span-1 text-slate-800 text-4xl border-2  rounded-lg shadow-lg p-4">
          <h1 className=" font-semibold">
            <CountUp start={0} duration={30} delay={0} end={540} />{" "}
            <span>+</span>
          </h1>
          <h1 className="text-4xl font-semibold">Corrigendum</h1>
        </div>
      </div>
    </>
  );
};

export default AllTenders;
