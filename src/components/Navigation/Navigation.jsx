// import React from "react"
import { NavLink } from "react-router-dom"
import clsx from "clsx";
import css from "./Navigation.module.css"

const bildLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

const Navigation = () => {
  return (
      <header className={css.header}>
          <div className={css.headerBox}>
              <a className={css.headerLogo} href="/">
              <img src="/src/assets/img/logo.png" alt="logo" />
              </a>
                

          </div>

          <nav className={css.nav}>
                <NavLink className={bildLinkClass} to="/">
                    Про Компанію
                </NavLink>

                <NavLink className={bildLinkClass} to="/putty">
                    Шпаклівки
                </NavLink>
                <NavLink className={bildLinkClass} to="/ceiling">
                  Підвісні стелі
                </NavLink>
            </nav> 
    </header>
  )
}

export default Navigation