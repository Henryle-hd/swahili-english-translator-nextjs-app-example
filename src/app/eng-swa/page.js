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
import { Label } from "@/components/ui/label";

export default function TranslateEnglish() {
  const [inputValue, setInputValue] = useState("");
  const [userInput, setUserInput] = useState("");
  const [swaResult, setSwaResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput(inputValue);
    const result = translateEng(inputValue.trim());
    setSwaResult(result);
  };

  return (
    <main className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl font-bold text-center">
            English to Swahili Translator
          </CardTitle>
          <CardDescription className="text-center text-sm sm:text-base">
            {/* Enter an English word to get its Swahili translation */}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center mb-6">
            <Image
              src={imageGif}
              alt="Translation animation"
              width={100}
              height={100}
              className="rounded-full w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40"
            />
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="englishWord">English Word</Label>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input
                  id="englishWord"
                  placeholder="Type English word..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-grow focus-visible:ring-transparent"
                />
                <Button type="submit" className="w-full sm:w-auto">
                  Translate
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        {swaResult && (
          <CardFooter className="flex flex-col">
            <Separator className="my-4" />
            <div className="w-full space-y-4">
              <div>
                <h3 className="font-semibold text-sm sm:text-base">Word</h3>
                <p className="text-sm sm:text-base">{userInput}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">
                  Translation
                </h3>
                <p className="text-primary text-sm sm:text-base">
                  {swaResult.meaning}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">Type</h3>
                <p className="text-sm sm:text-base">{swaResult.type}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">Examples</h3>
                <p className="text-sm sm:text-base">
                  English: {swaResult.example.eng}
                </p>
                <p className="text-sm sm:text-base">
                  Swahili: {swaResult.example.ksw}
                </p>
              </div>
            </div>
          </CardFooter>
        )}
      </Card>
    </main>
  );
}
