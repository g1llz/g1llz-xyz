import React from "react";

import { links } from "./Data";

export default function Social() {
  return (
    <div className="social-list">
      {links.map((link, index) => (
        <p key={index} style={{ color: link.color }}>
          <a
            className="social-link"
            href={link.src}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
        </p>
      ))}
    </div>
  );
}
