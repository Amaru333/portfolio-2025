"use client";

import { useTheme } from "../context/ThemeContext";
import { Moon, Sun, Home, Briefcase, Mail, User } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Briefcase, label: "Projects", href: "/#projects" },
    { icon: Mail, label: "Contact", href: "/#contact" },
    { icon: User, label: "About", href: "/#about" },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30">
      <motion.div
        className="flex items-center bg-background/80 backdrop-blur-sm rounded-full shadow-lg p-2 text-black dark:text-white"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <motion.div
              className={`p-3 mx-1 rounded-full hover:bg-accent`}
              //   className={`p-3 mx-1 rounded-full ${pathname === item.href ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon size={24} />
            </motion.div>
          </Link>
        ))}
        <motion.button
          onClick={toggleTheme}
          className="p-3 mx-1 rounded-full hover:bg-accent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
        </motion.button>
      </motion.div>
    </nav>
  );
}
