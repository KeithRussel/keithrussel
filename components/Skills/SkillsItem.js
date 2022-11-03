import React from "react";
import Image from "next/image";

const SkillsItem = ({ src, alt }) => {
  return (
    <li>
      <Image src={src} alt={alt} width={200} height={200} />
    </li>
  );
};

export default SkillsItem;
