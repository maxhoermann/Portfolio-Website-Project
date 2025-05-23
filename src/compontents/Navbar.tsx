import logo from "../assets/PersonalLog.png"
import linkedInLogo from "../assets/LinkedInLogo.png"
import githubLogo from "../assets/github-mark-white.svg"
function Navbar(){

    return(
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="https://maxhoermann.de">
                     <img className="mx-2 w-10" src={logo} alt="logo" />
                </a>                
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/max-h%C3%B6rmann-588576341/" target="_blank">
                    <img src={linkedInLogo} alt="logo" width="32" height="32" className="bg-white rounded-md" />
                </a>
                <a href="https://github.com/maxhoermann" target="_blank">
                    <img src={githubLogo} alt="logo" width="32" height="32" />
                </a>                             
            </div>
        </nav>
    );
}

export default Navbar;