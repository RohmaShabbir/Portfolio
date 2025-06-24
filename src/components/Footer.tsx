'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className=" text-white py-10">
      <div className="container mx-auto px-2 ">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="mb-4 text-xs hover:text-gray-300 transition-colors duration-300"
          >
            BACK TO TOP
          </button>
          <p className="text-sm text-gray-400">
            ©{currentYear} Rohma Shabbir. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}