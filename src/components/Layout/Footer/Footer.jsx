import React from "react";
import styles from "./Footer.module.css";

const DUMMY_LINK = [
  {
    title: "customer service",
    children: [
      "Help and contact us",
      "Returns and refund",
      "Online stores",
      "Tems and conditions",
    ],
  },
  {
    title: "company",
    children: ["What we do", "Available Services", "Latest past", "FAQs"],
  },
  {
    title: "Social media",
    children: ["Twitter", "Instagram", "Facebook", "Pinterest"],
  },
];

function Footer(props) {
  return (
    <ul className={styles.container}>
      {DUMMY_LINK.map((item, index) => (
        <li key={index}>
          <h2>{item.title}</h2>
          {item.children.map((sub, subIndex) => (
            <p key={subIndex}>{sub}</p>
          ))}
        </li>
      ))}
    </ul>
  );
}

export default Footer;
