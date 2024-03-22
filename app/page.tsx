import { Kalam } from "next/font/google";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Kalam({
  subsets: ["latin"],
  weight: ["700"],
});

const content = Kalam({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <main className="flex h-[100vh] flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-red-600 drop-shadow-md",
            font.className
          )}
        >
          PYYES
        </h1>
        <p className={cn('text-xl',content.className)}>A un paso del mundo del PYE</p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
