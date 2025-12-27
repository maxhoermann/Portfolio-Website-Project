import logo_dark from "../assets/MH_Logo_Dark.svg"
import logo_white from "../assets/MH_Logo_White.svg"
import linkedInLogo from "../assets/LinkedInLogo.png"
import githubLogo from "../assets/github-mark-white.svg"
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';

function Navbar(){
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return(
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="https://maxhoermann.de">
                    <img 
                        className="mx-2 w-10" 
                        src={theme === 'dark' ? logo_white : logo_dark} 
                        alt="logo" 
                    />
                </a>                
            </div>
            <div className="flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/max-h%C3%B6rmann-588576341/" target="_blank">
                    <img src={linkedInLogo} alt="logo" width="32" height="32" className="bg-white rounded-md" />
                </a>
                <a href="https://github.com/maxhoermann" target="_blank">
                    <img src={githubLogo} alt="logo" width="32" height="32" className="dark:invert-0 invert" />
                </a>
                <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-neutral-200/70 dark:bg-neutral-800/70 backdrop-blur-md 
                    hover:bg-neutral-300/80 dark:hover:bg-neutral-700/80 
                    transition-all border border-neutral-300/50 dark:border-neutral-700/50"
                    aria-label="Toggle theme"
                >
                    {theme === 'dark' ? (
                        <MoonIcon className="w-6 h-6 text-neutral-400" />
                    ) : (
                        <SunIcon className="w-6 h-6 text-yellow-500" />
                    )}
                </button>
            </div>
            
            {/* Floating theme toggle button that appears when scrolling */}
            <button 
                onClick={toggleTheme}
                className={`fixed top-6 right-6 z-50 p-3 rounded-full 
                bg-neutral-200/70 dark:bg-neutral-800/70 backdrop-blur-md 
                hover:bg-neutral-300/80 dark:hover:bg-neutral-700/80 
                transition-all shadow-lg border border-neutral-300/50 dark:border-neutral-700/50
                ${isScrolled ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                aria-label="Toggle theme"
            >
                {theme === 'dark' ? (
                    <MoonIcon className="w-6 h-6 text-neutral-400" />
                ) : (
                    <SunIcon className="w-6 h-6 text-yellow-500" />
                )}
            </button>
        </nav>
    );
}
export default Navbar;