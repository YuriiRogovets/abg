import css from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={css.wrapper} >
      <div className={css.logoImg}>
          <img src="/src/assets/img/footer/logo_bg_white.png" alt="logo" />
      </div>
      <div className={css.footerContent}>
        ©&nbsp;2025&nbsp;Всі права захищені ТОВ Компанія Альфабуд. Розробка сайту - 
        <a className={css.footerLink}
          href="http://www.codex.ua/"
          target="_blank"
          rel="noopener noreferrer">
          CodEX World Studio
        </a>
         .
      </div>
      
    </footer>
  )
}

export default Footer