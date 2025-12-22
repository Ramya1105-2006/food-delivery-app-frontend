import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons/Logo";
import { CartIcon } from "../cart/CartIcon";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="CuisineConnect Home">
          <Logo className="h-8 w-8 text-primary" />
          <span className="hidden text-xl font-bold font-headline sm:inline-block">
            CuisineConnect
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="#">Log In</Link>
          </Button>
          <Button className="bg-primary hover:bg-primary/90" asChild>
            <Link href="#">Sign Up</Link>
          </Button>
          <CartIcon />
        </div>
      </div>
    </header>
  );
}
