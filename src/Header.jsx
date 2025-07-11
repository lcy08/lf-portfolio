function Header(){
    return (
        <header>
            <section className="m-9 bg-slate-900 rounded-lg text-slate-200">
                <ul className="p-3 flex justify-center sticky top-0 z-10">
                <li className="mx-4">
                    <a className="text-blue-600 hover:text-blue-800 font-medium" href="#about-me">
                    About Me
                    </a>
                </li>
                <li className="mx-4">
                    <a className="text-blue-600 hover:text-blue-800 font-medium" href="#experience">
                    Experience
                    </a>
                </li>
                <li className="mx-4">
                    <a className="text-blue-600 hover:text-blue-800 font-medium" href="#course">
                    Course-work
                    </a>
                </li>
                <li className="mx-4">
                    <a className="text-blue-600 hover:text-blue-800 font-medium" href="#contact">
                    Contact
                    </a>
                </li>
                </ul>
            </section>
        </header>
    )
}

export default Header