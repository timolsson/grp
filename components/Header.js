import style from "./Style/header.module.scss"

const Header = () => {
    return (
        <div className={style.header}>
            <img src=""></img>
            <h1>Solutions</h1>
            <h1>Documents</h1>
            <h1>Initiatives</h1>
            <button className={style.LogInButton}>Login</button>
            <button>Sign Up</button>
        </div>
    )
}

export default Header;