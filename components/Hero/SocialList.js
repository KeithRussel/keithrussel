import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SocialList = ({ url, icon }) => {
  return (
    <li>
      <Link href={url}>
        <a target="_blank">
          <FontAwesomeIcon icon={icon} size="2x" />
        </a>
      </Link>
    </li>
  );
};

export default SocialList;
