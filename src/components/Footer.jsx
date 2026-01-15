import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='mx-auto'>
      <div className='w-full h-auto flex flex-col md:flex md:flex-row items-center justify-center   md:justify-around px-5 py-4'>
        <div     
          className='py-2'>
          <h1
            className='text-[#D1855C] font-inknut text-sm md:text-lg'>Made with 👻 By Athul Krishna A</h1>
        </div>
        <div className='py-2'>
          <div 
            className='flex  gap-3'>
            <a
              href="https://github.com/Athulkrishna-a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={26} className='text-amber-500' />
            </a>

            <a
              href="https://www.linkedin.com/in/a-athul-krishna/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={26} className='text-amber-500' />
            </a>

            <a
              href="https://www.instagram.com/_.athul_krishna._/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={26} className='text-amber-500' />
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
