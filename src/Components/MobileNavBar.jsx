import {motion} from "framer-motion";
import dash from "../Photos/menu-3-line-white.svg";
import {Dropdown, DropdownButton, DropdownItem, DropdownMenu, DropdownToggle} from "react-bootstrap/Dropdown";
import aboutMe from "../Pages/AboutMe";
import App from "../Pages/App";
import PreviousProjects from "../Pages/PreviousProjects";
import Resume from "../Pages/Resume";
import Socials from "../Pages/Socials";
import ContactMe from "../Pages/ContactMe";
import {Link} from "react-router-dom";
import {useState} from "react";
import {ToggleSwitch} from "flowbite-react";
export default function MobileNavBar() {
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
    }
    const [isOpen, setIsOpen] = useState(true)

        return (
            <motion.nav
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                initial={<button>Hi</button>}
                onClick={() => setIsOpen(isOpen => !isOpen)}
            >
                <button>Hi</button>
            </motion.nav>
        )

}
