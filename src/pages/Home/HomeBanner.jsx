import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const HomeBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="flex  justify-between mt-7 ">
        <div className="ml-24 mt-24 w-1/2 " data-aos="zoom-in-right">
          <h1 className="text-4xl">
            Empower Your Procurement Journey with{" "}
            <span className="text-green-500">E-Procure Excellence</span>
          </h1>
          <p className="text-justify mt-4 ">
            Experience seamless procurement solutions tailored for efficiency
            and precision. Elevate your sourcing processes with our
            user-friendly platform. Simplify, strategize, and succeed with
            E-Procurement excellence."
          </p>
          <button className="mt-4 bg-green-500 px-4 py-1 rounded-md text-white font font-semibold">
            Registration now
          </button>
        </div>
        <div className="w-1/2 ml-10" data-aos="fade-down-left">
          <img
            className="rounded-xl w-[540px] mt-4"
            src="https://img.freepik.com/free-vector/logistics-industry-freight-profit-analyzing-supply-chain-analytics-transportation-providers-data-transportation-costs-optimization-concept-pinkish-coral-bluevector-isolated-illustration_335657-1765.jpg?w=740&t=st=1703239497~exp=1703240097~hmac=20347d65661aa39e8bd14e35bf8cb339d9b8056f921bbea30ea67bc1b17bf48a"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
