import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_vcldfpy",
      "template_fxbel0o",
      form.current,
      "eIeMKfZjCfxl6_2HM"
    )
      .then(() => {
        alert("Message sent successfully");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send message",);
      });



  };

  return (
    <div className='w-full h-auto mx-auto '>
      <div className='mx-auto flex flex-col items-center justify-center my-20 py-5'>
        <div className=' md:px-40 md:py-10    '>
          <div className='flex flex-col items-center justify-center py-4 md:px-6 md:mb-5'>
            <h1 data-aos="fade-up"
              data-aos-delay="100"
              className='font-inknut font-bold text-green-300 md:mt-4 py-3'> What's Next? </h1>
            <h2 data-aos="fade-up"
              data-aos-delay="200"
              className='text-[#D1855C] font-gravitas text-3xl md:py-4 py-3'>Get In Touch</h2>
            <p data-aos="fade-up"
              data-aos-delay="300"
              className='font-marcellus text-[#F6F0D7] text-center py-3 px-7'>Let’s Chat! Whether you have a question, a project idea, or just want to connect, I’m always happy to hear from you. Drop me a message, and I’ll be in touch soon!</p>
          </div>
          <div className='flex flex-col items-center justify-center md:px-6  md:py-5 '>
            <form ref={form} onSubmit={sendEmail} >
              <div data-aos="fade-up"
                data-aos-delay="400"
                className='w-80  my-3'>
                <input
                  type='text'
                  name="name"
                  id="name"
                  required
                  className=' w-full px-4 py-3 border  focus:border-2 text-xs bg-white border-lightest-navy rounded focus:border-green-600 font-inknut placeholder:text-black focus:outline-none text-black ng-pristine ng-invalid ng-touched' placeholder="Name" />
              </div>
              <div data-aos="fade-up"
                data-aos-delay="500"
                className='w-80 my-3'>
                <input
                  type='email'
                  name="email"
                  id="email"
                  required
                  className=' w-full px-4 py-3 border  focus:border-2 text-xs bg-white  border-lightest-navy rounded focus:border-green-600 font-inknut placeholder:text-black focus:outline-none text-black ng-pristine ng-invalid ng-touched' placeholder="Email" />
              </div>
              <div data-aos="fade-up"
                data-aos-delay="600"
                className='w-80 my-3'>
                <input
                  type='text'
                  name="subject"
                  id="subject"
                  required
                  className=' w-full px-4 py-3 border  focus:border-2 text-xs bg-white  border-lightest-navy rounded focus:border-green-600 font-inknut placeholder:text-black focus:outline-none text-black ng-pristine ng-invalid ng-touched' placeholder="Subject" />
              </div>
              <div data-aos="fade-up"
                data-aos-delay="700"
                className='w-80  my-3'>
                <textarea
                  name="message"
                  id="message"
                  required
                  className=' w-full px-4 py-3 border  focus:border-2 text-xs bg-white  border-lightest-navy rounded focus:border-green-600 font-inknut placeholder:text-black focus:outline-none text-black ng-pristine ng-invalid ng-touched'
                  placeholder='message'
                />
              </div>
              <button
                data-aos="zoom-out-up"
                data-aos-delay="800"
                type="submit"
                className='bg-green-300 text-black rounded-2xl py-2 px-4 font-inknut text-xs transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-[#E5BA41] hover:text-[#2D3C59]'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
