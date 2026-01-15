
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)



    return (
        <nav className='w-full md:h-20 flex justify-around items-center mx-auto text-[#D1855C]  sticky top-0 z-50 bg-[#2D3C59]'>
            <div className='flex flex-col'>
                <div className='flex gap-30 md:gap-40 items-center  justify-around'>
                    <div className=' '>
                        <h1 data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            className='font-gravitas text-base md:text-2xl text-[#D1855C]'>
                            ATHUL KRISHNA A</h1>
                    </div>
                    <div className='flex gap-3  items-center  '>
                        <ul className='md:flex gap-4 font-inknut hidden'>
                            <li data-aos="fade-down" data-aos-delay="100" className='hover:text-[#94A378] ' ><Link to="/">Home</Link></li>
                            <li data-aos="fade-down" data-aos-delay="150" className='hover:text-[#94A378]'><Link to="/about">About</Link></li>
                            <li data-aos="fade-down" data-aos-delay="200" className='hover:text-[#94A378]'><Link to="/experience">Experience</Link></li>
                            <li data-aos="fade-down" data-aos-delay="250" className='hover:text-[#94A378]'><Link to="/projects">Projects</Link></li>
                            <li data-aos="fade-down" data-aos-delay="300" className='hover:text-[#94A378]'><Link to="/contact">Contact</Link></li>
                        </ul>
                        <a data-aos="fade-down" data-aos-delay="400" href='/athul_resume.pdf' target="_blank">
                            <button className='bg-[#D1855C]  text-[#213448] hidden md:block py-1 px-2 md:py-2 md:px-3 text-base md:text-lg font-inknut rounded-2xl shadow-2xl mx-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#E5BA41] hover:text-[#2D3C59]'>
                                Resume
                            </button>
                        </a>
                        <button
                            onClick={() => setIsOpen(prev => !prev)}
                            className='text-4xl md:hidden items-center justify-center  pb-4 hover:text-[#94A378] cursor-pointer'>
                            &#8801;
                        </button>
                    </div>
                </div>
                <div

                    className={`${isOpen ? "block" : "hidden"} md:hidden bg-[#D1855C] rounded-b-xl  transform transition-all duration-300  ease-out `}

                >
                    <ul className='flex flex-col items-center gap-4 text-[#2D3C59] font-inknut'>
                        <li className='hover:text-[#ffffff] py-1 ' ><Link to="/">Home</Link></li>
                        <li className='hover:text-[#ffffff] py-1'><Link to="/about">About</Link></li>
                        <li className='hover:text-[#ffffff] py-1'><Link to="/experience">Experience</Link></li>
                        <li className='hover:text-[#ffffff] py-1'><Link to="/projects">Projects</Link></li>
                        <li className='hover:text-[#ffffff] py-1'><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar