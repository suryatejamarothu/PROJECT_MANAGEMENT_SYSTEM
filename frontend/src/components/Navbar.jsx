import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, PlusCircle } from 'lucide-react';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo">TaskMaster</Link>
            <div className="nav-actions">
                <Link to="/add" className="btn btn-primary">
                    <PlusCircle size={20} />
                    <span>New Task</span>
                </Link>
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                    {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
