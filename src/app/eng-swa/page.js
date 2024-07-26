"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { translateEng } from "swahili-english-translator";
import Image from "next/image";
import imageGif from "../assets/translationnomads-translation-tog.gif";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
export default function TranslateEnglish() {
  const [inputValue, setInputValue] = useState("");
  const [userInput, setUserInput] = useState("");
  const [swaResult, setSwaResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput(inputValue);
    const result = translateEng(inputValue);
    setSwaResult(result);
  };

  return (
    <main className="flex flex-col justify-center items-center">
      <Image src={imageGif} alt="alt" width={200} height={200} />
      <form
        onSubmit={handleSubmit}
        className="flex gap-1 justify-center items-center"
      >
        <Input
          placeholder="Type English word..."
          className="w-96 h-16 mt-5 rounded-none rounded-l-xl text-lg focus-visible:ring-transparent"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit" className="h-16 mt-5 rounded-none rounded-r-xl">
          search
        </Button>
      </form>
      <div className="mt-5 text-lg">
        {swaResult && (
          <>
            {/* <Separator className="max-w-[100%]" /> */}
            <Card className=" pt-1 w-[25em]">
              <CardHeader>
                <CardDescription>Word</CardDescription>
                <CardTitle>{userInput}</CardTitle>
              </CardHeader>
              <Separator className="" />
              <CardContent className="pt-2">
                <CardDescription>meaning & type</CardDescription>
                <p>
                  <span>Swahili: </span>
                  <span className="text-easycl-100">{swaResult.meaning}</span>
                </p>
                <p>
                  <span>Type: </span>
                  <span>{swaResult.type}</span>
                </p>
              </CardContent>
              <Separator className="" />
              <CardFooter className="flex flex-col justify-start items-start">
                <CardDescription>Examples</CardDescription>
                <br />
                <p>
                  <h1>- {swaResult.example.eng}</h1>
                  <h1>- {swaResult.example.ksw}</h1>
                </p>
              </CardFooter>
            </Card>
          </>
        )}
      </div>
    </main>
  );
}
