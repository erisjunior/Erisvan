"use client";

import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

import { motion } from "framer-motion";
import { incrementStar } from "./actions";

export function Star() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    incrementStar();

    setClicked(true);
  }

  if (clicked) {
    return (
      <motion.div animate={{ scale: [1, 3, 1], rotate: [0, 180, 360] }}>
        <FaStar size="2em" />
      </motion.div>
    );
  }

  return <FaRegStar onClick={handleClick} size="2em" />;
}
