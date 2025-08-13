"use client";
import React, { useState } from "react";
import Intro from "../components/Intro";
import Photo from "../components/Photo";
import Caro from "../components/Caro";
import News from "../components/News";

export default function Home() {
  return (
    <>
      <Caro />
      <Intro />
      <News />
      <Photo />
    </>
  );
}
