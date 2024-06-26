import Link from "next/link";

function Navigation() {
  return (
    <nav className="text-lg">
      <ul className="flex items-center gap-8 ">
        <li>
          <Link
            className="rounded-full px-7 py-2 border border-primary-50 border-opacity-20 hover:bg-primary-50 hover:border-transparent transition-all hover:text-black"
            href="/login"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            className="transition-all  rounded-full bg-white text-black px-7 py-2 border border-white hover:bg-transparent hover:border-transparent hover:text-primary-50"
            href="/register"
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
