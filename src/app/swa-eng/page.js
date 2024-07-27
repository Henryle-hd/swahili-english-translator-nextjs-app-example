"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { translateKsw } from "swahili-english-translator";
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

export default function TranslateSwahili() {
  const [inputValue, setInputValue] = useState("");
  const [userInput, setUserInput] = useState("");
  const [engResult, setEngResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput(inputValue);
    try {
      const result = translateKsw(inputValue.trim());
      setEngResult(result);
    } catch (error) {
      console.error("Translation error:", error);
      setEngResult(null);
    }
  };

  return (
    <main className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl font-bold text-center">
            Swahili to English Translator
          </CardTitle>
          <CardDescription className="text-center text-sm sm:text-base">
            {/* Enter a Swahili word to get its English translation */}
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
              <Label htmlFor="swahiliWord">Swahili Word</Label>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input
                  id="swahiliWord"
                  placeholder="Andika neno la kiswahili..."
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
        {engResult && (
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
                  {engResult.meaning}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">Type</h3>
                <p className="text-sm sm:text-base">{engResult.type}</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">Examples</h3>
                <p className="text-sm sm:text-base">
                  English: {engResult.example.eng}
                </p>
                <p className="text-sm sm:text-base">
                  Swahili: {engResult.example.ksw}
                </p>
              </div>
            </div>
          </CardFooter>
        )}
      </Card>
    </main>
  );
}
