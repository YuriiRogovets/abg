import css from './SideBar.module.css';

const SideBar = ({children}) => {
  return (
     <aside className={css.sidebar}>
      {children}
    </aside>
  )
}

export default SideBar;