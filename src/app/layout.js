import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import SmoothScroll from "@/components/shared/SmoothScroll";

export const metadata = {
  title: "Rise at Seven",
  description: "Award Winning Search-First Content Marketing Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen text-black">
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content — integrated with Lenis Smooth Scrolling */}
        <main className="flex-grow">
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}