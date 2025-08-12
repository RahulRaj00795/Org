"use client";
import React, { useState } from "react";
import Intro from "./components/Intro";
import Photo from "./components/Photo";

export default function Home() {
  return (
    <>
      <Intro />
      <Photo />
    </>
  );
}
