import Image from "next/image";
import Logo from "@/assets/Skillo.svg";
import { logout } from "@/app/action/Logout";
import userData from "@/interface/userData";
import { ScrollProgress } from "./magicui/scroll-progress";
import { CircleUserRound, ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Navbar({ userData }: { userData: userData }) {
  const { token, name } = userData;

  return (
    <nav className="fixed z-100 w-screen border border-b-1 bg-background border-neutral-200 flex items-center justify-between py-2 px-4 sm:px-12">
      <span className="flex items-center gap-4">
        <a href="/">
          {" "} 
          <Image src={Logo} alt="Logo" width={80} height={80} />
        </a>
        <Popover>
          <PopoverTrigger asChild>
            <button className="sm:hidden flex items-center gap-2">
              Home <ChevronDown />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto">
            <ul className="grid gap-2">
              {["Home", "course", "community", "About"].map((item) => (
                <li key={item}>
                  <a href={`/${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      </span>

      <ul className="hidden sm:flex items-center space-x-4">
        {["Home", "Course", "community", "About"].map((item) => (
          <li className="text-lg " key={item}>
            <a href={`/${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <span className="flex items-center gap-4">
        {token && (
          <span className="flex items-center gap-2">
            <CircleUserRound />
            <p className="text-lg">{name}</p>
          </span>
        )}
        {token ? (
          <form action={logout}>
            <button
              className="bg-black text-white py-2 px-4 rounded-xl"
              type="submit"
            >
              Logout
            </button>
          </form>
        ) : (
          <a
            href="/login"
            className="bg-foreground text-background py-2 px-4 rounded-xl"
          >
            Sign In
          </a>
        )}
      </span>
      <ScrollProgress className="top-[62px]" />
    </nav>
  );
}
