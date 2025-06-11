import { education } from "../data/education";
import { courses } from "../data/courses";
import { useState } from "react";

export default function Credentials() {
  const [selectedSchool, setSelectedSchool] = useState<
  {
    school: string;
    classes: string[];
  } | null>(null);

  const [showModal, setShowModal] = useState(false);

  const openModal = (course: {
    school: string;
    classes: string[];
  }) => {
    setSelectedSchool(course);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedSchool(null);
    setShowModal(false);
  };

  return (
    <div className="text-4xl m-3 flex flex-col justify-center items-center" id="skills">
      <h1 className="font-bold text-white">Credentials</h1>
      <div className="flex flex-col justify-center items-start m-3">
        {education.map((data, index) => (
          <div
            key={index}
            className="m-3 w-160 min-h-50 text-white bg-[#181823] outline-1 outline-[#181823] rounded-lg shadow-lg shadow-black px-5 py-6 flex flex-col gap-3 transition-all duration-500 ease-in-out hover:-translate-y-2"
          >
            <div className="flex flex-row gap-3">
              <div className="w-1/6 h-50%">
              <img src={data.image} />
              </div>

              <div className="flex flex-col text-[#b1b2b3]">
                <h2 className="text-[20px] text-[#F2F3F4] font-semibold mb-2">{data.school}</h2>
                <h3 className="text-[14px]">{data.degree}</h3>
                <h3 className="text-[14px]">{data.degree2}</h3>
                <h3 className="text-[14px]">{data.degree3}</h3>
                <h4 className="text-[12px] mt-2">{data.date}</h4>
              </div>
            </div>

            <div className="text-[14px] leading-relaxed text-[#b1b2b3]">
              {data.description}
            </div>

            <div
              className="w-25 h-10 bg-[#2a2a2e] rounded-md p-1 flex justify-center items-center self-center font-normal text-[14px] cursor-hover hover:text-[#854CE6]"
              onClick={() => {
                  const courseData = courses.find((course) => course.school === data.school);
                  if (courseData) 
                    openModal(courseData);
              }}
            >
              Coursework
            </div>
          </div>
        ))}
      </div>

        {showModal && selectedSchool && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-[#181823] p-6 rounded-xl max-w-11/12 text-white relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-2xl font-bold hover:text-[#854CE6] cursor-hover"
            >
              ×
            </button>
            <h2 className="text-[24px] font-semibold mb-3">{selectedSchool.school}</h2>

            <div className="flex flex-col gap-2 mb-4">
               {selectedSchool.classes.map((classes, index) => (
                <span
                  key={index}
                  className="bg-[#3c1a79] text-xs px-3 py-1 rounded-md text-[#854CE6] font-normal"
                  >
                   {classes}
                </span>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

