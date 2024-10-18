import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function SocialAccounts() {
  return (
    <ul className="list-none flex items-center justify-start space-x-2 my-1">
      <li className="inline-block">
        <Link
          href="https://www.facebook.com/AltinTours"
          className="block p-3 hover:bg-gray-600 hover:text-white rounded-full border"
        >
          <FaFacebookF size={16} />
        </Link>
      </li>
      {/* <li className="inline-block">
        <Link
          href="#"
          className="block p-3 hover:bg-gray-600 hover:text-white rounded-full border"
        >
          <FaTwitter size={16} />
        </Link>
      </li> */}
      <li className="inline-block">
        <Link
          href="https://www.instagram.com/altin_tours/"
          className="block p-3 hover:bg-gray-600 hover:text-white rounded-full border"
        >
          <FaInstagram size={16} />
        </Link>
      </li>
      {/* <li className="inline-block">
        <Link
          href="#"
          className="block p-3 hover:bg-gray-600 hover:text-white rounded-full border"
        >
          <FaLinkedinIn size={16} />
        </Link>
      </li> */}
    </ul>
  );
}
