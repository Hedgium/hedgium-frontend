"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, Menu, LogIn } from "lucide-react";
import Link from "next/link";
import OpensInNewTabHint from "@/components/OpensInNewTabHint";

const NAV_LINKS = [
  { label: "What We Do", href: "/#what-we-do" },
  { label: "Unlock Potential", href: "/#unlock-potential" },
  { label: "Why Hedgium", href: "/#why-hedgium" },
  { label: "Fees", href: "/#fees" },
] as const;

const APP_LOGIN_URL = "https://app.hedgium.ai/";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    const close = (e: MouseEvent | PointerEvent) => {
      if (menuRef.current?.contains(e.target as Node)) return;
      setIsMenuOpen(false);
    };
    document.addEventListener("pointerdown", close, true);
    return () => document.removeEventListener("pointerdown", close, true);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const firstLink = mobileMenuRef.current?.querySelector<HTMLElement>("a, button");
    firstLink?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !mobileMenuRef.current) return;

      const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [isMenuOpen]);

  return (
    <nav className="w-full px-4 lg:px-4 py-1 lg:py-2 bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-300 glass-effect">
      <div className="navbar px-0 max-w-8xl mx-auto">
      <div className="navbar-start relative z-[100]">
        <Link
          href="/"
          className="flex items-center text-base-content hover:opacity-90 transition-opacity"
          aria-label="Hedgium home"
        >
          {/* Decorative: link aria-label provides the accessible name */}
          <img
            src="/images/logos/Hedgium Banner cropped.png"
            alt=""
            aria-hidden="true"
            className="h-10 lg:h-12 w-auto "
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1 flex-nowrap shrink-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href} className="shrink-0">
              <Link
                href={href}
                className="text-sm xl:text-base text-base-content hover:text-primary whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-2 lg:gap-6">
        <Link
          href="/get-started"
          className="btn btn-primary hidden lg:flex btn-sm lg:btn-md shadow hover:shadow-md shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Get Started
        </Link>

        <Link
          href={APP_LOGIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-1.5 text-base-content hover:text-primary text-base font-medium tracking-wide shrink-0 justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
        >
          <LogIn className="h-5 w-5 shrink-0" aria-hidden="true" />
          Login
          <OpensInNewTabHint />
        </Link>

        <div
          ref={menuRef}
          className={`dropdown dropdown-end ${isMenuOpen ? "dropdown-open" : ""} lg:hidden`}
        >
          <button
            ref={menuButtonRef}
            type="button"
            className="btn btn-ghost touch-target inline-flex items-center justify-center px-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-haspopup="true"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} height={24} aria-hidden="true" />
            ) : (
              <Menu size={24} height={24} aria-hidden="true" />
            )}
          </button>
          {isMenuOpen && (
            <ul
              ref={mobileMenuRef}
              id="mobile-nav-menu"
              className="menu menu-sm dropdown-content mt-3 z-[200] p-2 shadow-lg bg-base-100 rounded-box w-52 border border-base-300"
            >
              <li className="px-2">
                <Link
                  href="/get-started"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn btn-primary btn-sm w-full my-2 justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Get Started
                </Link>
              </li>

              <li className="px-2">
                <Link
                  href={APP_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn btn-outline btn-sm w-full mb-2 justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Login
                  <OpensInNewTabHint />
                </Link>
              </li>

              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      </div>
    </nav>
  );
}
