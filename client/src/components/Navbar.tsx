import Link from "next/link";
import NavMenu from "./NavMenu";
import { ThemeSwitcher } from "./ThemeSwitcher";
import AuthButton from "./auth/AuthButton";

export function NavBar() {
  return (
    <header className="py-4 shadow-sm fixed top-0 w-full z-10 bg-background/95">
      <nav className="flex items-center gap-10 container mx-auto font-semibold">
        <Link
          href="/"
          className="mr-auto text-black items-center text-2xl dark:text-gray-50"
        >
          <h1 className="text-sm md:text-lg lg:text-2xl">💸 Wealth Assist</h1>
        </Link>
        <div className="hidden md:block">
          <NavMenu />
        </div>
        <ThemeSwitcher />
        <span className="text-lg">
          <AuthButton />
        </span>
      </nav>
    </header>
  );
}
