import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../shared/utils";

export default function Nav() {
  const [sectionActive, setSectionActive] = useState("");

  return (
    <>
      <header>
        <nav className="flex">
          <div className="flex items-center justify-around w-full p-8 shadow-lg">
            {navLinks.map((link) => (
              <Link
                href={link.path}
                key={link.title}
                onClick={() => {
                  setSectionActive(link.title);
                }}
                className={
                  sectionActive === link.title
                    ? "text-lg font-semibold hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300"
                    : "text-lg font-medium text-gray-400"
                }
              >
                {link.title}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
