import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-center py-6 mt-16 border-t border-slate-700">
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Vinith Bylapudi. All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <a
          href="mailto:bylapudivinith0812@gmail.com"
          className="text-blue-400 text-sm hover:underline"
        >
          Email
        </a>
        <a
          href="https://github.com/Vinith1801"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-sm hover:underline"
        >
          GitHub
        </a>
        {/* Add LinkedIn or Portfolio if needed */}
      </div>
    </footer>
  );
};

export default Footer;
