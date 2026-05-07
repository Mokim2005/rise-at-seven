export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white px-10 py-16 rounded-t-3xl">
      
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">

        {/* Left - Newsletter */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">
            Stay updated with Rise news
          </h2>

          <div className="flex items-center bg-[#1c1c1c] rounded-full overflow-hidden w-[320px]">
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-transparent px-5 py-3 outline-none flex-1 text-sm"
            />
            <button className="bg-teal-200 text-black w-10 h-10 flex items-center justify-center rounded-full mr-2">
              ↗
            </button>
          </div>

          {/* Social Icons (simple placeholders) */}
          <div className="flex gap-3 mt-2 text-sm">
            <span className="bg-white text-black px-2 py-1 rounded-full">f</span>
            <span className="bg-white text-black px-2 py-1 rounded-full">x</span>
            <span className="bg-white text-black px-2 py-1 rounded-full">in</span>
            <span className="bg-white text-black px-2 py-1 rounded-full">yt</span>
            <span className="bg-white text-black px-2 py-1 rounded-full">tt</span>
            <span className="bg-white text-black px-2 py-1 rounded-full">ig</span>
          </div>
        </div>

        {/* Middle Links */}
        <div className="flex gap-20 text-sm text-gray-300">
          <div className="flex flex-col gap-2">
            <a href="#">Services</a>
            <a href="#">Work</a>
            <a href="#">About</a>
            <a href="#">Culture</a>
            <a href="#">Meet The Risers</a>
          </div>

          <div className="flex flex-col gap-2">
            <a href="#">Testimonials</a>
            <a href="#">Blog & Resources</a>
            <a href="#">Webinars</a>
            <a href="#">Careers</a>
          </div>

          <div className="flex flex-col gap-2">
            <a href="#">Sheffield</a>
            <a href="#">Manchester</a>
            <a href="#">London</a>
            <a href="#">New York</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>

      {/* Big Brand Text */}
      <div className="mt-20 text-[80px] md:text-[140px] font-bold leading-none tracking-tight text-white">
        Rise at Seven
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-6 border-t border-gray-800 pt-4">
        <p>© 2026 MyApp. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & conditions</a>
        </div>
      </div>
    </footer>
  );
}