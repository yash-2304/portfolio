export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#e5e5e5] py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Main footer text */}
        <p className="text-gray-500 text-sm">
          Designed & Built by <span className="text-black font-medium">Yash Prajapati</span>
        </p>

        {/* Copyright */}
        <p className="text-gray-400 text-xs mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}