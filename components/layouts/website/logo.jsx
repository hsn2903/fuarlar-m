import Image from "next/image";
import Link from "next/link";
import logoImage from "@/assets/images/logo.webp";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logoImage}
        height={40}
        width={150}
        className="w-auto "
        alt="Fuar sorgu logo"
      />
    </Link>
  );
};
export default Logo;
