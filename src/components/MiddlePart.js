"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import members from "../../public/members.svg";
import clubs from "../../public/clubs.svg";
import events from "../../public/events.svg";
import payments from "../../public/payments.svg";
import hero from "../../public/3hero.svg";
import tesla from "../../public/tesla.svg";
import c1 from "../../public/clogo1.svg";
import c2 from "../../public/clogo2.svg";
import c3 from "../../public/clogo3.svg";
import c4 from "../../public/clogo4.svg";
import c5 from "../../public/clogo5.svg";
import c6 from "../../public/clogo6.svg";
import right from "../../public/right.svg";

export default function MiddlePart({ darkMode }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="middle-part w-full flex flex-col justify-center items-center">
      <div
        className={`${
          darkMode ? "bg-gray-600" : "bg-[#F5F7FA]"
        }  w-full px-5 sm:px-10`}
      >
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-0 justify-center items-center max-w-[1086px] m-auto py-16">
          <div className="left w-full md:w-[50%] flex flex-col justify-center items-center md:items-start gap-4 md:gap-8">
            <h1 className="text-2xl text-center md:text-start md:text-3xl xl:text-4xl font-bold text-[#1e272c]">
              Helping a local
              <br />
              <span className="text-[#49A74B]">business reinvent itself</span>
            </h1>
            <p
              className={`font-medium ${
                darkMode ? "text-gray-200" : "text-[#89939E]"
              }  text-sm sm:text-base`}
            >
              We reached here with our hard work and dedication
            </p>
          </div>
          <div
            ref={ref}
            className="right w-full md:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 lg:gap-12"
          >
            <div className="flex justify-center items-center gap-5">
              <Image
                src={members}
                alt="icons"
                className="w-[3vw] min-w-[40px]"
              />
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-xl md:text-2xl font-bold text-[#1e272c]">
                  {inView ? <CountUp end={2245341} duration={2.5} /> : 0}
                </h1>
                <p
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-200" : "text-[#89939E]"
                  } `}
                >
                  Members
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <Image
                src={clubs}
                alt="icons"
                className="w-[3.3vw] min-w-[40px]"
              />
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-xl md:text-2xl font-bold text-[#1e272c]">
                  {inView ? <CountUp end={46328} duration={2.5} /> : 0}
                </h1>
                <p
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-200" : "text-[#89939E]"
                  } `}
                >
                  Clubs
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <Image
                src={events}
                alt="icons"
                className="w-[2.5vw] min-w-[40px]"
              />
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-xl md:text-2xl font-bold text-[#1e272c]">
                  {inView ? <CountUp end={828867} duration={2.5} /> : 0}
                </h1>
                <p
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-200" : "text-[#89939E]"
                  } `}
                >
                  Event Bookings
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-5">
              <Image
                src={payments}
                alt="icons"
                className="w-[3vw] min-w-[40px]"
              />
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-xl md:text-2xl font-bold text-[#1e272c]">
                  {inView ? <CountUp end={1926436} duration={2.5} /> : 0}
                </h1>
                <p
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-200" : "text-[#89939E]"
                  } `}
                >
                  Payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-10 flex flex-col md:flex-row gap-10 md:gap-0 justify-center items-center max-w-[1086px] mx-auto px-10">
        <div className="w-full md:w-[50%] flex justify-center items-center">
          <Image
            src={hero}
            alt="auth image"
            className="w-[80%] md:w-[30vw] min-w-[250px] object-cover"
          />
        </div>
        <div className="w-full md:w-[50%] text-center md:text-start flex flex-col justify-center items-center md:items-start gap-5">
          <h1
            className={`text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold ${
              darkMode ? "text-gray-200" : "text-[#1e272c]"
            } `}
          >
            The unseen of spending three years at Pixelgrade
          </h1>
          <p
            className={`font-medium ${
              darkMode ? "text-gray-400" : "text-[#89939E]"
            }  text-sm sm:text-base`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="bg-[#49A74B] hover:bg-[#3f9240] text-white text-sm sm:text-base px-5 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>
      <div
        className={`w-full ${
          darkMode ? "bg-gray-600" : "bg-[#F5F7FA]"
        } py-4 pb-11 px-5 sm:px-10`}
      >
        <div className="w-full mt-10 flex flex-col md:flex-row justify-center items-center max-w-[1086px] m-auto  gap-5 md:gap-10">
          <div className="w-[60%] md:w-[30%] flex justify-center items-center">
            <Image
              src={tesla}
              alt="auth image"
              className="w-[70%] md:w-[30vw] object-cover"
            />
          </div>
          <div className="w-[80%] md:w-[70%] flex flex-col justify-center items-start gap-3">
            <p
              className={`font-medium ${
                darkMode ? "text-gray-300" : "text-[#89939E]"
              } text-sm lg:text-base`}
            >
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <div className="text-base md:text-xl lg:text-2xl font-medium text-[#49A74B]">
              Tim Smith
            </div>
            <p
              className={`text-sm lg:text-base font-medium ${
                darkMode ? "text-gray-300" : "text-[#89939E]"
              } `}
            >
              British Dragon Boat Racing Association
            </p>
            <div className="flex flex-wrap justify-between items-center gap-8">
              <Image
                src={c1}
                alt="company logo"
                className="w-[4vw] min-w-[40px]"
                flex-wrap
              />
              <Image
                src={c2}
                alt="company logo"
                className="w-[4vw] min-w-[40px]"
                flex-wrap
              />
              <Image
                src={c3}
                alt="company logo"
                className="w-[4vw] min-w-[40px]"
                flex-wrap
              />
              <Image
                src={c4}
                alt="company logo"
                className="w-[4vw] min-w-[40px]"
                flex-wrap
              />
              <Image
                src={c5}
                alt="company logo"
                className="w-[4vw] min-w-[40px]"
                flex-wrap
              />
              <Image
                src={c6}
                alt="company logo"
                className="w-[4vw] min-w-[40px]"
              />
              <button className="lg:flex gap-2 justify-center items-center text-xl font-medium cursor-pointer text-[#49A74B] hidden">
                Meet all customers
                <Image src={right} alt="right" className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
