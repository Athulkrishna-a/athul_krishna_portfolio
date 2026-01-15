import React from 'react'
import augumented from '../../assets/images/augumented.png'
import ecomshop from '../../assets/images/ecom.png'

const Projects = () => {
  return (
    <div className='mx-auto md:mt-12'>
      <div className=' w-full h-auto  justify-center items-center px-7 py-4 mb-4 md:px-10 md:py-7'>
        <h1 data-aos="fade-up"
          data-aos-delay="100"
          className='text-[#D1855C] font-gravitas text-[26px] md:text-3xl' >Things I've worked on</h1>
        <div className=''>
          <div className=' md:flex md:flex-row-reverse pb-6 md:px-4 md:py-4 gap-4 items-center justify-center'>
            <div className='basis-1/3 md:px-7 px-4 py-4 md:py-5 '>
              <div data-aos="fade-up-left"
                data-aos-delay="200"
                className='bg-amber-300 w-70 h-50 rounded-3xl shadow-2xl shadow-black object-cover overflow-hidden transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                <img src={ecomshop} alt="" />
              </div>
            </div>
            <div className='basis-2/3'>
              <h1 data-aos="fade-up"
                data-aos-delay="200"
                className='font-marcellus text-green-300 py-3 text-xl md:pt-2'>Featured Project</h1>
              <h2 data-aos="fade-up"
                data-aos-delay="300"
                className='font-inknut font-bold text-[#FFE797] text-xl md:pt-2 md:pb-2 pb-2 '>EcomShop</h2>
              <div className='md:px-8 px-7 py-3'>
                <ul data-aos="fade-up"
                  data-aos-delay="400"
                  className=' text-[#F6F0D7] font-marcellus text-sm leading-5 list-disc '>
                  <li className='md:pt-3 pt-2'>
                    Developed scalable e-commerce backend using Java and Spring Boot, exposing 15+ RESTful APIs for product management, image
                    upload, and order processing with 100+ products
                  </li>
                  <li className='md:pt-3 pt-2'>
                    Implemented CRUD operations with DTO-based request/response handling, reducing API response time by 25% and ensuring clean
                    data transfer between layers
                  </li>
                  <li className='md:pt-3 pt-2'>
                    Integrated MySQL with Spring Data JPA following layered architecture (Controller, Service, Repository) for maintainability and
                    scalability
                  </li>
                </ul>
              </div>
              <h3 data-aos="fade-up"
                data-aos-delay="500"
                className=' text-[#F6F0D7] font-marcellus text-sm leading-5 px-4 py-2 md:px-4 md:py-3'> Java, SpringBoot, MySQL, SQL, Hiberante, Postman</h3>
            </div>
          </div>
          <div className=' md:flex md:flex-row-reverse md:px-4 md:py-4 gap-4 items-center justify-center'>
            <div className='basis-1/3 md:px-7 md:py-5 px-4 py-4 '>
              <div data-aos="fade-up-left"
                data-aos-delay="200"
                className='bg-amber-300 w-60 h-55 rounded-3xl shadow-2xl  shadow-black object-cover overflow-hidden transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                <img src={augumented} alt="" />
              </div>
            </div>
            <div className='basis-2/3'>
              <h1 data-aos="fade-up"
                data-aos-delay="200"
                className='font-marcellus text-green-300 text-xl py-2 md:pt-2'>Featured Project</h1>
              <h2 data-aos="fade-up"
                data-aos-delay="300"
                className='font-inknut font-bold text-[#FFE797] text-xl md:pt-2 md:pb-2 pb-2'>VirtuSpace</h2>
              <div className='md:px-8 px-7 py-2'>
                <ul data-aos="fade-up"
                  data-aos-delay="400" className=' text-[#F6F0D7] font-marcellus text-sm leading-5 list-disc '>
                  <li className='md:pt-3 pt-2'>
                    Built AR-based interior design app using Flutter, ARCore, and Unity to visualize 50+ 3D furniture models in real-world environments
                  </li>
                  <li className='md:pt-3 pt-2 '>
                    Implemented real-time object placement, scaling, rotation, and lighting adjustments with Firebase backend for smooth user interaction
                  </li>
                  <li className='md:pt-3 pt-2'>
                    Optimized 3D rendering performance, reducing load time by 40% and achieving 60 FPS for seamless AR experience

                  </li>
                </ul>
              </div>
              <h3 data-aos="fade-up"
                data-aos-delay="500" className=' text-[#F6F0D7] font-marcellus text-sm leading-5 md:px-4 md:py-3 px-4 py-2'> Flutter,  ARCore, Unity, Firebase</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
