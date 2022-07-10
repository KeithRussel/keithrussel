import React from "react";
import Image from "next/image";

const SkillsItem = (props) => {
  return (
    <li>
      <Image src={props.src} alt={props.alt} width={200} height={200} />
    </li>
  );
};

export default SkillsItem;
