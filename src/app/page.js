import Image from "next/image";
import logo from "../app/assets/translationnomads-translation-tog.gif";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-[60vh] bg-gradient-to-b p-4 ">
      <Card className="backdrop-blur-md rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md">
        {" "}
        <CardHeader>
          <Image
            src={logo}
            alt="Translation Nomads Logo"
            width={200}
            height={200}
            className="w-full max-w-[150px] sm:max-w-[200px] h-auto mx-auto mb-4 sm:mb-6 "
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-slate-100">
            SwaEngTranX
          </h1>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 sm:space-y-4">
            <Button
              variant="default"
              className="w-full text-sm sm:text-base"
              asChild
            >
              <Link href="/eng-swa">English to Swahili</Link>
            </Button>
            <Button
              variant="secondary"
              className="w-full text-sm sm:text-base"
              asChild
            >
              <Link href="/swa-eng">Swahili to English</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
