import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import SmoothScroll from "@/components/shared/SmoothScroll";

export const metadata = {
  title: "My App",
  description: "Next.js App",
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