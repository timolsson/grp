/* Top page navigation and logo */
import style from "./Style/header.module.scss"

const Header = () => {
    return (
        <div className={style.header}>
            <img src="/logo.jpg"></img>
            <h1>Solutions</h1>
            <h1>Documents</h1>
            <h1>Initiatives</h1>
            <button className={style.LogInButton}>Login</button>
            <button className={style.signUpButton}>Sign Up</button>
        </div>
    )
}

export default Header;