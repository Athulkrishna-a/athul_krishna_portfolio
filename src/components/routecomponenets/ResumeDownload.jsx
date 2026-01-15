import { FaFileDownload } from "react-icons/fa";

const ResumeDownload = () => {
    return (
        <div className="w-full h-auto mx-auto">
            <div className="mx-17 mt-10">
                <h1 data-aos="fade-up"
                    data-aos-delay="200"
                    className="font-gravitas text-3xl text-[#D1855C] py-5">Resume</h1>
                <p data-aos="fade-up"
                    data-aos-delay="300"
                    className="text-lg font-marcellus  text-[#FFE797] py-2 px-4">
                    Download my complete professional resume to learn more about my experience, skills, and achievements.
                </p>
                <div data-aos="zoom-in-down"

                    data-aos-delay="300"
                    className="flex items-center justify-center py-7">
                    <a href="/athul_resume.pdf" target="_blank">
                        <button className="bg-green-300 rounded-2xl shadow-2xl w-40 h-10 gap-3 py-2 flex flex-row items-center justify-center ">
                            <h1 className="font-inknut ">Download</h1>
                            <FaFileDownload />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ResumeDownload
