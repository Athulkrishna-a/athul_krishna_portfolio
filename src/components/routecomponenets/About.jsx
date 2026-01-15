
import image from '../../assets/images/athul_new.png'


const About = () => {
    return (
        <div className=' mx-auto bounce-once-on-load'>
            <div className='max-w-full md:max-w-full mx-auto overflow-hidden '>
                <div className='md:flex md:flex-row-reverse md:gap-4 md:py-4 md:mt-10 md:px-10  items-center justify-center'>
                    <div
                        data-aos="zoom-out-down"
                        data-aos-delay="100"
                        className=' basis-1/2  max-w-sm  mx-auto px-10 '>
                        <img
                            className='w-full h-full object-cover rounded-lg p-4'
                            src={image} alt="" />

                    </div>
                    <div className='basis-1/2 text-white px-6 mt-4 mb-5'>
                        <h3 data-aos="fade-up"
                            data-aos-delay="200"
                            className='font-marcellus md:text-base text-green-300 md:py-1'>Hi, My name is</h3>
                        <h1 data-aos="fade-up"
                            data-aos-delay="300"
                            className='font-space-mono md:text-5xl md:py-2 text-4xl py-2 text-[#D1855C]'>Athul Krishna A</h1>
                        <h1 data-aos="fade-up"
                            data-aos-delay="400"
                            className='font-marcellus font-bold md:text-3xl text-3xl py-2  md:pt-2'>
                            Building the web, better.
                        </h1>
                        <p data-aos="fade-up"
                            data-aos-delay="500"
                            className='font-marcellus text-sm leading-5  md:pt-4 md:pb-3 py-2 text-[#F6F0D7]'>
                            I'm Athul Krishna A, a Java Full Stack Developer specializing in building scalable web applications using Java, Spring Boot, React, and MySQL. With hands-on experience developing 20+ RESTful APIs and responsive frontend components, I focus on delivering efficient, maintainable solutions across the entire development stack—from backend architecture to intuitive user interfaces.
                        </p>
                        <p data-aos="fade-up"
                            data-aos-delay="600"
                            className='font-marcellus text-sm leading-5 md:pt-4 md:pb-3 text-[#F6F0D7] py-3'>
                            Looking forward to sharpening my skills in a challenging environment. I guarantee enthusiasm in work and fulfilling my projects with inexpressible effort.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;