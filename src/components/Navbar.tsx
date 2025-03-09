import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/Skillo.svg";
import { logout } from "@/app/action/Logout";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import userData from "@/interface/userData";
import { ScrollProgress } from "./magicui/scroll-progress";
import { CircleUserRound } from "lucide-react";

export default function Navbar({ userData }: { userData: userData }) {
  const { token, name } = userData;

  return (
    <nav className="fixed w-screen border border-b-1 bg-background border-neutral-200 flex items-center justify-between py-2 px-4 sm:px-12">
      <span className="flex items-center gap-4">
        <Link href="/">
          {" "}
          <Image src={Logo} alt="Logo" width={80} height={80} />
        </Link>
      </span>

      <span className="flex items-center gap-4">
        {token ? (
          <span className="flex items-center gap-2">
            <CircleUserRound />
            <Popover>
              <PopoverTrigger className="text-lg">{name}</PopoverTrigger>
              <PopoverContent className="space-y-2 w-fit">
                <Link href="/history" className="text-neutral-500">
                  History
                </Link>
                <hr />
                <form action={logout}>
                  <button type="submit" className="text-red-500">
                    Logout
                  </button>
                </form>
              </PopoverContent>
            </Popover>
          </span>
        ) : (
          <Link
            href="/login"
            className="bg-foreground text-background py-2 px-4 rounded-xl"
          >
            Sign In
          </Link>
        )}
      </span>
      <ScrollProgress className="top-[62px]" />
    </nav>
  );
}
