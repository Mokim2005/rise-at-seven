import { ArrowUpRight } from "lucide-react"; // install lucide-react if you haven't

export default function Footer() {
  return (
    <footer className=" w-full py-6 px-4 md:px-10"> 
      {/* Outer wrapper for spacing from screen edges */}
      <div className="max-w-[1440px] mx-auto bg-[#0a0a0a] text-white rounded-[40px] p-8 md:p-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* Left - Newsletter & Socials */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Stay updated with Rise news
            </h2>

            <div className="relative max-w-md group">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-[#1a1a1a] border-none rounded-full py-4 px-6 text-white placeholder-gray-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#b2f5ea] hover:bg-white text-black p-3 rounded-full transition-colors">
                <ArrowUpRight size={20} strokeWidth={3} />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-2">
              {['f', 'x', 'in', 'yt', 'tt', 'ig'].map((icon) => (
                <a 
                  key={icon} 
                  href="#" 
                  className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold hover:bg-teal-200 transition-colors"
                >
                  {icon} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Right - Link Groups */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <a href="#" className="font-bold text-lg hover:text-teal-200">Services</a>
              <a href="#" className="font-bold text-lg hover:text-teal-200">Work</a>
              <a href="#" className="font-bold text-lg hover:text-teal-200">About</a>
              <a href="#" className="font-bold text-lg hover:text-teal-200">Culture</a>
              <a href="#" className="font-bold text-lg hover:text-teal-200">Meet The Risers</a>
            </div>

            <div className="flex flex-col gap-3">
              <a href="#" className="font-bold text-lg hover:text-teal-200">Testimonials</a>
              <a href="#" className="font-bold text-lg hover:text-teal-200">Blog & Resources</a>
              <a href="#" className="font-bold text-lg hover:text-teal-200">Webinars</a>
              <a href="#" className="font-bold text-lg hover:text-teal-200">Careers</a>
            </div>

            <div className="flex flex-col gap-3">
              <a href="#" className="font-bold text-lg hover:text-teal-200">Sheffield</a>
              <a href="#" className="font-bold text-lg hover:text-teal-200">Manchester</a>
              <a href="#" className="font-bold text-lg hover:text-teal-200">London</a>
              <a href="#" className="font-bold text-lg hover:text-teal-200">New York</a>
              <a href="#" className="font-bold text-lg hover:text-teal-200">Contact</a>
            </div>
          </div>
        </div>

        {/* Big Brand Text */}
        <div className="mt-24 mb-12">
          <h1 className="text-[12vw] font-bold leading-[0.8] tracking-tighter text-white uppercase flex justify-between items-end">
            Rise at Seven
            <span className="text-xl md:text-4xl border-2 border-white rounded-full w-8 h-8 md:w-16 md:h-16 flex items-center justify-center mb-4 ml-2">®</span>
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] md:text-xs text-gray-400 font-medium pt-8 border-t border-gray-800">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <span>© 2026 Rise at Seven Ltd. All rights reserved</span>
            <span className="hidden md:inline">•</span>
            <span>Company Number 11955187</span>
            <span className="hidden md:inline">•</span>
            <span>VAT Registered GB 322402945</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & conditions</a>
            <span className="text-gray-600 ml-4">Website Made By Shape</span>
          </div>
        </div>
      </div>
    </footer>
  );
}