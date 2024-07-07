import Image from "next/image";
import c1 from "../../public/clogo1.svg";
import c2 from "../../public/clogo2.svg";
import c3 from "../../public/clogo3.svg";
import c4 from "../../public/clogo4.svg";
import c5 from "../../public/clogo5.svg";
import c6 from "../../public/clogo6.svg";
import c7 from "../../public/clogo7.svg";
import ci1 from "../../public/cardIcon1.svg";
import ci2 from "../../public/cardIcon2.svg";
import ci3 from "../../public/cardIcon3.svg";
import hero from "../../public/2hero.svg";

export default function TopPart({ darkMode }) {
  return (
    <div className="top-part flex flex-col justify-center mt-14 items-center max-w-[1086px] mx-auto px-5">
      <h1
        className={`text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold ${
          darkMode ? "text-gray-200" : "text-[#1e272c]"
        }`}
      >
        Our Clients
      </h1>
      <p className="text-sm sm:text-base md:text-xl font-medium text-[#89939E] mt-3">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="w-full flex flex-wrap md:flex-nowrap justify-between items-center mt-10 mb-5 felxw gap-5 sm:gap-[35px] md:gap-[55px] lg:gap-[75px] xl:gap-[85px]">
        <Image src={c1} alt="company logo" className="w-[6vw] min-w-[50px]" />
        <Image src={c2} alt="company logo" className="w-[6vw] min-w-[50px]" />
        <Image src={c3} alt="company logo" className="w-[6vw] min-w-[50px]" />
        <Image src={c4} alt="company logo" className="w-[6vw] min-w-[50px]" />
        <Image src={c5} alt="company logo" className="w-[6vw] min-w-[50px]" />
        <Image src={c6} alt="company logo" className="w-[6vw] min-w-[50px]" />
        <Image src={c7} alt="company logo" className="w-[6vw] min-w-[50px]" />
      </div>
      <div
        className={`w-full mt-6 text-xl sm:text-2xl md:text-3xl xl:text-4xl text-center font-bold ${
          darkMode ? "text-gray-200" : "text-[#1e272c]"
        } `}
      >
        Manage your entire community <br /> in a single system
      </div>
      <p className="mt-3 text-sm sm:text-base md:text-xl font-medium text-[#89939E]">
        Who is Nextcent suitable for?
      </p>
      <div className="cards w-full flex flex-wrap justify-center text-center items-center gap-8 md:gap-10 lg:gap-20  mt-5 md:mt-10">
        <div
          className={`flex flex-col gap-2 w-[21vw] min-w-[250px] max-w-[280px] justify-center items-center px-5 py-8 rounded-md shadow-[0_5px_30px_-23px_rgba(0,0,0,0.5)] ${
            darkMode && "bg-gray-600"
          } `}
        >
          <Image src={ci1} alt="cardImage" className="w-[5vw] min-w-[50px]" />
          <h1
            className={`text-xl sm:text-2xl font-bold ${
              darkMode ? "text-[#1e272c]" : "text-[#263238]"
            }`}
          >
            Membership Organisations
          </h1>
          <p
            className={`text-sm sm:text-base font-medium ${
              darkMode ? "text-gray-200" : "text-[#89939E]"
            }`}
          >
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div
          className={`flex flex-col gap-2 w-[21vw] min-w-[250px] max-w-[280px] justify-center items-center px-5 py-8 rounded-md shadow-[0_5px_30px_-23px_rgba(0,0,0,0.5)] ${
            darkMode && "bg-gray-600"
          }`}
        >
          <Image src={ci2} alt="cardImage" className="w-[5vw] min-w-[50px]" />
          <h1
            className={`text-xl sm:text-2xl font-bold ${
              darkMode ? "text-[#1e272c]" : "text-[#263238]"
            }`}
          >
            National <br /> Associations
          </h1>
          <p
            className={`text-sm sm:text-base font-medium ${
              darkMode ? "text-gray-200" : "text-[#89939E]"
            }`}
          >
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div
          className={`flex flex-col gap-2 w-[21vw] min-w-[250px] max-w-[280px] justify-center items-center px-5 py-8 rounded-md shadow-[0_5px_30px_-23px_rgba(0,0,0,0.5)] ${
            darkMode && "bg-gray-600"
          }`}
        >
          <Image src={ci3} alt="cardImage" className="w-[5vw] min-w-[50px]" />
          <h1
            className={`text-xl sm:text-2xl font-bold ${
              darkMode ? "text-[#1e272c]" : "text-[#263238]"
            }`}
          >
            Clubs And <br /> Groups
          </h1>
          <p
            className={`text-sm sm:text-base font-medium ${
              darkMode ? "text-gray-200" : "text-[#89939E]"
            }`}
          >
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center my-10 md:my-5 lg:mt-0 px-10">
        <div className="w-full md:w-[50%] flex justify-center items-center">
          <Image
            src={hero}
            alt="auth image"
            className="w-full md:w-[35vw] max-h-[80vh] object-cover"
          />
        </div>
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center md:items-start text-center md:text-start gap-5 py-5 md:py-10">
          <h1
            className={`text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold ${
              darkMode ? "text-gray-200" : "text-[#1e272c]"
            }`}
          >
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="font-medium text-[#89939E] text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="bg-[#49A74B] hover:bg-[#3f9240] text-sm md:text-base text-white px-5 py-2 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
