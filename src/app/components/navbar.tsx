"use client";
import React from "react";
import Button from "./Button";
import stl from "./styles/navbar.module.css";
import { useState, useEffect } from "react";

import Image from "next/image";

export default function Navbar() {
  const [isopen, setisopen] = useState(false);

  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <div className={stl.navbar}>
      <div>GenAi</div>
      <div className={stl.navlinks}>
        
        <div>Catalog</div>
        <Button text="Contact Us" />
      </div>
      <div className={stl.smallnavlinks}>
      <span >
          {!isopen ? (
            <span onClick={toggle} style={{cursor:'pointer'}} >O</span>
          ) : (
            <>
            <span onClick={toggle} style={{cursor:'pointer'}} >X</span>
            <div className={stl.smallnavnav}>
            <Button text="Home" />
            <Button text="About" />
            <Button text="Case Studies" />
            <Button text="Contact Us" />
            </div>
            </>
          )}
          </span>
      </div>
    </div>
  );
}
