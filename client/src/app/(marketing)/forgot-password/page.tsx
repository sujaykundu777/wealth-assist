import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/submit-button";
import { FormMessage, Message } from "@/components/FormMessage";

export default async function ForgotPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;

  return (
    <div className="mx-auto w-full md:w-150 py-40">
      <form className="flex flex-col mx-8 text-foreground [&>input]:mb-6">
        <div>
          <h1 className="text-2xl font-medium">Reset Password</h1>

          <p className="text-sm text-secondary-foreground">
            Already have an account?
            <Link className="text-primary underline" href="/sign-in">
              Sign in
            </Link>
          </p>
        </div>

        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email"> Email </Label>

          <Input name="email" placeholder="you@example.com" required />

          <SubmitButton>Reset Password</SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </div>
  );
}
