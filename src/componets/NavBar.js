const NavBar = () => {
//revisar img
    return(
        <nav className="navbar">
            <div className="container-fluid"> 
                <a className="navbar-brand text-light" href="#">
                    <img src="/public/SkyCast.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></img>
                    SkyCast
                </a>
            </div>
        </nav>

    );

}

export default NavBar;