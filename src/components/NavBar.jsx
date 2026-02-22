import Button from './Button'

function NavBar() {

    return (
        <nav className="flex items-center justify-between px-16 py-4 border-b border-gray-200 bg-[rgb(250,248,245)] ">
            <a href="#" className="flex ml-2 mt-2 font-['Cormorant_Garamond']">
                <div
                    className="w-9 h-9 bg-slate-950 
            [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]
            flex items-center justify-center text-base text-white font-bold">
                    UV
                </div >
                <span className=" ml-2  text-xl mt-1 font-semibold tracking-[0.5px]">
                    UV
                    <em className="not-italic text-[rgb(232,100,12)]">TECH</em>
                    Multiservices
                </span>
            </a>
            <ul className="flex justify-center items-center gap-10 font-['Outfit'] text-sm w-full text-[rgb(93,116,140)] font-medium">
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#certification">Certification</a>
                </li>
                <li>
                    <a href="#project">Project</a>
                </li>
                <li>
                    <a href="#clients">Clients</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <Button title="Tender Inquiry" showIcon className=" flex items-center gap-2 bg-[rgb(13,26,41)] text-sm text-white min-w-max whitespace-nowrap px-6 py-2 font-semibold" />
        </nav >
    );
}
export default NavBar