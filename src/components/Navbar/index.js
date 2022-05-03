/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import classNames from "classnames";
import logo from "../../assets/images/logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="px-2 sm:px-4">
      <div className="container flex flex-wrap justify-between items-center h-[10vh] mx-auto">
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="Karamela DAO Logo"
            className="mr-3 h-9 sm:h-12"
          />
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 md:hidden focus:outline-none"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <MenuIcon
            className={classNames(
              {
                hidden: isOpen,
              },
              "w-6 h-6"
            )}
          />
          <CloseIcon
            className={classNames(
              {
                hidden: !isOpen,
              },
              "w-6 h-6"
            )}
          />
        </button>
        <div
          className={classNames(
            { hidden: !isOpen },
            "w-full md:block md:w-auto"
          )}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Wiki
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Vote
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                DEX
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-2 pl-2 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <div className="flex items-center">
                  <Discord className="mr-2.5" />
                  <Twitter className="mr-2.5" />
                  <Linkedin />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
