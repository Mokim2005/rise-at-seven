import Navbar from "../component/Navbar";
import "./globals.css";
import Footer from "../component/Footer";

export const metadata = {
  title: "Rise at Seven",
  description: "Next.js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}