import { education } from "../data/education";

export default function Credentials() {
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
                    </div>
                  ))}
                </div>
              </div>
  )
}
