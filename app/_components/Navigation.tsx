import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";

async function Navigation() {
  const session = await auth();
  console.log(session);

  return (
    <nav className="text-lg">
      <ul className="flex items-center gap-8 ">
        <li>
          {session?.user?.image ? (
            <Image
              // className="h-8 rounded-full"
              src={session.user.image}
              width={32}
              height={32}
              alt={session.user.image}
              referrerPolicy="no-referrer"
            />
          ) : (
            <Link
              className="transition-all  rounded bg-white text-black px-7 py-2 border border-white hover:bg-transparent hover:border-transparent hover:text-primary-50"
              href="/register"
            >
              Sign in
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
