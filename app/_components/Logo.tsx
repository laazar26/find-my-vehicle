import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.webp";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4">
      {/* <Image src={logo} height="60" width="60" alt="the find my vehicle logo" /> */}
      <span className="font-bold text-xl text-primary-50">Find My Vehicle</span>
    </Link>
  );
}

export default Logo;
