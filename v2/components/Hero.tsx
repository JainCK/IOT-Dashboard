"use client";

import { useRouter } from 'next/navigation'

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Section } from "./ui/section";
import { Mockup, MockupFrame } from "./ui/mockup";
import Glow from "./ui/glow";
import Image from "next/image";
import Github from "./logos/github";

export default function Hero() {
  const router = useRouter();

  const src = "/mock.png";


  return (
    <Section className="overflow-hidden pb-0 sm:pb-0 md:pb-0 bg-gray-900">
      <div className="mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          <Badge variant="outline" className="animate-appear">
            <span className="text-muted-foreground">
              Welcome to the IoT Dashboard!
            </span>
            <a
              href="/"
              className="flex items-center gap-1"
            >
              Get started
              <ArrowRightIcon className="h-3 w-3" />
            </a>
          </Badge>
          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-gray-300 to-gray-600 bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            Monitor and Control Your IoT Devices
          </h1>
          <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-gray-400 opacity-0 delay-100 sm:text-xl">
            A powerful dashboard to receive data and test your IoT devices with ease.
          </p>
          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
            <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
              <Button variant="default" size="lg" onClick={() => router.push("/SigninForm")}>
                Get Started
              </Button>
              <Button variant="glow" size="lg" asChild>
                <a href="/">
                  <Github className="mr-2 h-4 w-4" /> Github
                </a>
              </Button>
            </div>
          </div>
          <div className="relative pt-12">
            <MockupFrame
              className="animate-appear opacity-0 delay-700"
              size="small"
            >
              <Mockup type="responsive">
                <Image
                  src={src}
                  alt="IoT Dashboard app screenshot"
                  width={1248}
                  height={765}
                />
              </Mockup>
            </MockupFrame>
            <Glow
              variant="top"
              className="animate-appear-zoom opacity-0 delay-1000"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
