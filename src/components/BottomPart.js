import Image from "next/image";
import cardImage1 from "../../public/cardImage1.svg";
import cardImage2 from "../../public/cardImage2.svg";
import cardImage3 from "../../public/cardImage3.svg";
import right from "../../public/right.svg";
import wright from "../../public/whiteright.svg";

export default function BottomPart({ darkMode }) {
  return (
    <>
      <div className="bottom-part w-full flex flex-col justify-center items-center mt-10 max-w-[1086px] mx-auto px-5">
        <h1
          className={`text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold ${
            darkMode ? "text-gray-200" : "text-[#1e272c]"
          } `}
        >
          Caring is the new marketing
        </h1>
        <p
          className={`font-medium text-sm md:text-base ${
            darkMode ? "text-gray-400" : "text-[#89939E]"
          } mt-5 text-center max-w-[786px]`}
        >
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.
        </p>
        <div className="w-full flex flex-wrap justify-center items-center my-10 md:mb-20 gap-10">
          <div className="card flex relative flex-col justify-center items-center mb-10">
            <Image
              src={cardImage1}
              alt="card Image"
              className="w-[22vw] min-w-[230px] max-w-[280px]"
            />
            <div
              className={`w-[16vw] absolute min-w-[190px] max-w-[215px] font-sans flex flex-col gap-4 justify-center items-center ${
                darkMode ? "bg-gray-200" : "bg-[#F5F7FA]"
              } rounded-md p-3 shadow-[0_5px_30px_-23px_rgba(0,0,0,1)] hover:shadow-[0_5px_35px_-20px_rgba(0,0,0,1)] translate-y-20 lg:translate-y-24 cursor-pointer`}
            >
              <p
                className={`text-sm font-medium ${
                  darkMode ? "text-gray-700" : "text-[#89939E]"
                } text-center`}
              >
                Creating Streamlined Safeguarding Processes with OneRen
              </p>
              <button
                className="text-sm md:text-base flex gap-2 justify-center items-center font-medium cursor-pointer text-[#49A74B]"
                aria-label="read more"
              >
                Read More
                <Image src={right} alt="right" className="" />
              </button>
            </div>
          </div>
          <div className="card relative flex flex-col justify-center items-center mb-10">
            <Image
              src={cardImage2}
              alt="card Image"
              className="w-[22vw] min-w-[230px] max-w-[280px]"
            />
            <div
              className={`w-[16vw] absolute min-w-[190px] max-w-[215px] font-sans flex flex-col gap-4 justify-center items-center ${
                darkMode ? "bg-gray-200" : "bg-[#F5F7FA]"
              } rounded-md p-3 shadow-[0_5px_30px_-23px_rgba(0,0,0,1)] hover:shadow-[0_5px_35px_-20px_rgba(0,0,0,1)] translate-y-20 lg:translate-y-24 cursor-pointer`}
            >
              <p
                className={`text-sm font-medium ${
                  darkMode ? "text-gray-700" : "text-[#89939E]"
                } text-center`}
              >
                What are your responsibilities and how can you manage them?
              </p>
              <button
                className="text-sm md:text-base flex gap-2 justify-center items-center font-medium cursor-pointer text-[#49A74B]"
                aria-label="read more"
              >
                Read More
                <Image src={right} alt="right" className="" />
              </button>
            </div>
          </div>
          <div className="card relative flex flex-col justify-center items-center mb-10">
            <Image
              src={cardImage3}
              alt="card Image"
              className="w-[22vw] min-w-[230px] max-w-[280px]"
            />
            <div
              className={`w-[16vw] absolute min-w-[190px] max-w-[215px] font-sans flex flex-col gap-4 justify-center items-center ${
                darkMode ? "bg-gray-200" : "bg-[#F5F7FA]"
              } rounded-md p-3 shadow-[0_5px_30px_-23px_rgba(0,0,0,1)] hover:shadow-[0_5px_35px_-20px_rgba(0,0,0,1)] translate-y-20 lg:translate-y-24 cursor-pointer`}
            >
              <p
                className={`text-sm font-medium ${
                  darkMode ? "text-gray-700" : "text-[#89939E]"
                } text-center`}
              >
                Revamping the Membership Model with Triathlon Australia
              </p>
              <button
                className="text-sm md:text-base flex gap-2 justify-center items-center font-medium cursor-pointer text-[#49A74B]"
                aria-label="read more"
              >
                Read More
                <Image src={right} alt="right" className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full ${
          darkMode ? "bg-gray-600" : "bg-[#F5F7FA]"
        } flex flex-col justify-center items-center p-10`}
      >
        <div className="max-w-[686px] text-center m-auto flex flex-col gap-6 justify-center items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1e272c] font-sans leading-10">
            Pellentesque suscipit fringilla libero eu.
          </h1>
          <button
            className="btn flex justify-center items-center gap-2 bg-[#49A74B] hover:bg-[#237D31] px-4 py-2 rounded-md text-white text-sm sm:text-base"
            aria-label="get a demo"
          >
            Get a Demo
            <Image src={wright} alt="right" className="w-4" />
          </button>
        </div>
      </div>
    </>
  );
}
