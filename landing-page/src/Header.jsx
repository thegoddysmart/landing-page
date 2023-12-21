
const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <img src="./goddylogo.svg" alt="logo" className='logo' width={128} height={30} />

            {/* More things to implement later */}
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        ProGrowingMentee
                    </li>

                    <li className="navbar-item">
                        About
                    </li>
                </ul>
            </nav>
        </div>      
    </header>
  )
}

export default Header
