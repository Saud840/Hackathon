import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold">Hekto</h2>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full mt-4 p-2 rounded border"
          />
          <button className="bg-pink-600 text-white px-4 py-2 mt-2">
            Sign Up
          </button>
        </div>
        {/* Other Columns */}
        {/* Add Categories, Customer Care, and Pages columns here */}
      </div>
      <div className="text-center mt-8">
        <p>© 2024 Hekto — All Rights Reserved</p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="#"><FaFacebook /></Link>
          <Link href="#"><FaGithub /></Link>
          <Link href="#"><IoLogoVercel /></Link>
          <Link href="#"><FaLinkedin /></Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
