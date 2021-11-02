import { SearchIcon } from 'comman/AppIcons';
import React from 'react'
import { Navbar } from 'react-bootstrap';
import Link from 'next/link'
import styles from '../Button/Button.module.css'

function GlobalHeader() {
    return (
      <div className="bg-white">
        <Navbar id="basic-navbar-nav" expand="xl" sticky="top">
          <header className="h-16 border-b md:flex md:items-center md:justify-between px-16 pb-0 shadow-lg md:pb-4">
            {/* Logo text or image */}
            <div className="flex items-center justify-between md:mb-0">
              <h1 className="leading-none text-2xl text-grey-darkest">
                <Link
                  // className="no-underline text-2xl text-grey-darkest hover:text-black"
                  href="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="logo"
                    width="193"
                    height="43"
                    viewBox="0 0 193 43"
                  >
                    <text
                      id="logo"
                      transform="translate(0 35)"
                      fill="#dd272d"
                      font-size="32"
                      font-family="SegoeUI, Segoe UI"
                      letter-spacing="0.04em"
                    >
                      <tspan x="0" y="0">
                        BECLOUT.IO
                      </tspan>
                    </text>
                  </svg>
                </Link>
              </h1>
              <a className="text-black hover:text-orange md:hidden" href="#">
                <i className="fa fa-2x fa-bars" />
              </a>
            </div>
            {/* END Logo text or image */}
            {/* Search field */}
            <form className="mb-4 w-full md:mb-0 md:w-1/4">
              <label className="hidden" htmlFor="search-form">
                Search
              </label>
              <input
                className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full mt-4"
                placeholder="Search"
                type="text"
                prefix={SearchIcon()}
              />
              <button className="hidden">Submit</button>
            </form>
            {/* END Search field */}
            {/* Global navigation */}
            <nav>
              <div className="list-reset md:flex md:items-center">
                <div className="md:ml-6 no-underline">
                  <Link
                    // className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                    href="/explore"
                  >
                    Explore
                  </Link>
                </div>
                <div className="md:ml-6 no-underline">
                  <Link
                    // className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                    href="/auction"
                  >
                    Auction
                  </Link>
                </div>
                <div className="md:ml-6 no-underline">
                  <Link
                    // className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                    href="/marketplace"
                  >
                    Marketplace
                  </Link>
                </div>
                <div className="md:ml-6 no-underline">
                  <Link
                    // className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                    href="/stats"
                  >
                    Stats
                  </Link>
                </div>
                <div className="md:ml-6 no-underline">
                  <Link
                    // className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                    href="/connect"
                  >
                    <button className={styles.button}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.button_svg}
                        width="153.718"
                        height="44.741"
                        viewBox="0 0 203.718 44.741"
                      >
                        <path
                          id="Path_2056"
                          className={styles.button_svg_path}
                          data-name="Path 2056"
                          d="M11.112,0H203.718L192.606,44.741H0Z"
                          fill="#dd272d"
                        />
                        <defs>
                          <linearGradient id="ButtonGradient">
                            <stop offset="0%" stopColor="#FC8F30" />
                            <stop offset="33%" stopColor="#E2604A" />

                            <stop offset="100%" stopColor="#BF074C" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <span>Connect wallet</span>
                    </button>
                  </Link>
                </div>
              </div>
            </nav>
            {/* END Global navigation */}
          </header>
        </Navbar>
      </div>
    );
}

export default GlobalHeader
