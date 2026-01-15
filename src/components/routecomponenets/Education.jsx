import React from 'react'

const Education = () => {
  return (
    <div className='w-full h-auto mx-auto '>
      <div className=' w-full h-auto  justify-center items-center mx-7 my-12  md:px-13 md:py-4 mb-4 '>
        <h1 data-aos="fade-up"
          data-aos-delay="100"
          className='text-[#D1855C] font-gravitas text-3xl '>Education</h1>
        <div className='md:px-3'>
          <div className='px-3 py-3'>
            <h1 data-aos="fade-up"
              data-aos-delay="200"
              className='font-inknut font-bold text-green-300 md:mt-5 text-base md:py-1 py-1'>Master of Technology (M.Tech) – Computer Science & Engineering</h1>
            <h2 data-aos="fade-up"
              data-aos-delay="300"
              className='font-marcellus text-[#FFE797] md:py-1 py-0.5'>Sree Chitra Thirunal College of Engineering</h2>
            <h2 data-aos="fade-up"
              data-aos-delay="300"
              className='font-marcellus text-[#FFE797] md:py-1 py-0.5'>
              September 2022 - September 2022</h2>
            <h2 data-aos="fade-up"
              data-aos-delay="300"
              className='font-marcellus text-[#FFE797] md:py-1 py-0.5'>CGPA: 8.39</h2>
            <div data-aos="fade-up"
              data-aos-delay="400"
              className='md:px-6 px-4'>
              <ul className='font-marcellus text-[#F6F0D7] leading-5 list-disc '>
                <li className='md:py-1  py-1'>Focus: Software Engineering, Advanced Algorithms, Distributed Systems</li>
                <li className='py-1'>Final Project: VirtuSpace – AR-based Interior Design Platform</li>
              </ul>
            </div>
          </div>
          <div className='px-3 py-3'>
            <h1 data-aos="fade-up"
              data-aos-delay="200"
              className='font-inknut font-bold text-green-300 md:mt-5 text-base md:py-1 py-1'>Bachelor of Technology (B.Tech) – Computer Science & Engineering</h1>
            <h2 data-aos="fade-up"
              data-aos-delay="300"
              className='font-marcellus text-[#FFE797] md:py-1 py-0.5'>PRS College of Engineering and Technology</h2>
            <h2 data-aos="fade-up"
              data-aos-delay="300"
              className='font-marcellus text-[#FFE797] md:py-1 py-0.5'>
              August 2022 - August 2022</h2>
            <h2 data-aos="fade-up"
              data-aos-delay="300"
              className='font-marcellus text-[#FFE797] md:py-1 py-0.5' >CGPA: 8.94</h2>
            <div data-aos="fade-up"
              data-aos-delay="400"
              className='md:px-6 px-5'>
              <ul className='font-marcellus text-[#F6F0D7] leading-5 list-disc '>
                <li className='md:py-1 py-1'>Core Subjects (Applied): OOP (Java, SOLID), DBMS (SQL, transactions), OS (processes, memory), Computer Networks</li>
                <li className='md:py-1 py-1'>Final Project: Blockchain-based Electronic Health Record system ensuring secure, immutable storage and controlled sharing of medical data</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;
