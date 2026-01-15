
const Experience = () => {


  return (
    <div className='mx-auto md:mt-12'>
      <div className=' w-full h-auto md:flex justify-center items-center px-7 py-4 mb-4 '>
        <div className='md: basis-1/3 hidden md:block'>
        </div>
        <div className='basis-2/3  md:px-10 md:py-8'>
          <h1 data-aos="fade-left"
            data-aos-delay="100"
            className='text-[#D1855C] font-gravitas text-3xl w-20 '>Experience</h1>
          <h2 data-aos="fade-left"
            data-aos-delay="200"
            className='font-inknut py-2 text-2xl md:pt-7 text-green-300 md:pb-5'>Professional Journey</h2>
          <div>
            <h3 data-aos="fade-left"
              data-aos-delay="300"
              className='font-marcellus text-[#FFE797] md:py-2 text-lg' >Java Fullstack Developer Intern</h3>
            <h3 data-aos="fade-left"
              data-aos-delay="300"
              className='font-marcellus text-[#FFE797] md:py-2 text-lg'>Techzmatrix Software Technologies | <span>September 2025 – Present</span></h3>
            <div className='md:px-15 md:py-4 px-4 py-4'>
              <ul data-aos="fade-left"
                data-aos-delay="400"
                className=' text-[#F6F0D7] font-marcellus text-sm leading-5 list-disc py-2 '>
                <li className='py-2'>
                  Developed 20+ RESTful APIs using Java and Spring Boot with layered architecture (Controller, Service, Repository), integrating
                  MySQL database and implementing CRUD operations for core business functionality
                </li>
                <li className='py-2'>
                  Built 15+ responsive React components consuming REST APIs, improving user experience by 30% through seamless
                  frontend-backend integration
                </li>
                <li className='py-2'>
                  Tested and debugged applications using Postman, reducing bug count by 40% through systematic validation and code review with
                  senior developers
                </li>
              </ul >
            </div>
          </div>
          <div>
            <h3 data-aos="fade-left"
              data-aos-delay="300"
              className='font-marcellus text-[#FFE797] md:py-2 text-lg'>Frontend Developer Intern</h3>
            <h3 data-aos="fade-left"
              data-aos-delay="300"
              className='font-marcellus text-[#FFE797] md:py-2 text-lg'>Rubix Crew Private Limited | <span>May 2023 – July 2023</span></h3>
            <div className='md:px-15 md:py-4 px-4 py-4'>
              <ul data-aos="fade-left"
                data-aos-delay="400"
                className=' text-[#F6F0D7] font-marcellus text-sm leading-5 list-disc '>
                <li className='py-2'>
                  Built 10+ responsive web pages with HTML, CSS, and JavaScript, improving UI consistency by 25% and user engagement by 25%
                  through custom animations

                </li>
                <li className='py-2'>
                  Collaborated with design team to deliver pixel-perfect implementations, reducing revision cycles by 20%
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Experience;
