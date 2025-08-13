"use client";
import React, { useState } from "react";
import Intro from "./components/Intro";
import Photo from "./components/Photo";
import Caro from "./components/Caro";

export default function Home() {
  return (
    <>
      <Caro />
      <Intro />
      <Photo />
    </>
  );
}
