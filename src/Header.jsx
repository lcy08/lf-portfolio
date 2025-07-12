import React from 'react';
import { useState, useEffect } from 'react';
import NavItem from './NavItem';

function Header(){
    const [isActive, setIsActive] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            const sectionsArray = Array.from(sections).map(section => section.id);

            const current = sectionsArray.find(id => {
                const el = document.getElementById(id);
                if (!el) return false;
                const rect = el.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });
            if (current) setIsActive(current);
            if (window.scrollY === 0) {
                setIsActive(null);
                document.querySelector('header').classList.remove('opacity-85');
            }
            else if (window.scrollY > 0) document.querySelector('header').classList.add('opacity-85');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="sticky top-3 z-10">
            <section className="m-9 bg-background rounded-2xl p-3 shadow-lg">
                <ul className="p-1 grid grid-cols-2 gap-3 md:flex md:justify-center md:items-center">
                    <NavItem id='aboutMe' activeId={isActive}> About Me </NavItem>
                    <NavItem id='experience' activeId={isActive}> Experience </NavItem>
                </ul>
            </section>
        </header>
    )
}

export default Header