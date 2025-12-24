import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default async function AuthButton() {
  return (
    <div className="flex gap-2">
      <span className="block md:hidden">
        <Button
          asChild
          size="sm"
          className="opacity-75 bg-black text-white"
          variant={"outline"}
        >
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </span>

      <span className="hidden md:block">
        <Button asChild size="sm" variant={"outline"}>
          <Link href="/sign-in">Sign in</Link>
        </Button>
      </span>
      <span className="hidden md:block">
        <Button asChild size="sm" variant={"default"}>
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </span>
    </div>
  );
}
