// data/categoryStyles.js
// Une icône + une couleur par catégorie. Utilisé par la grille (Portfolio) et la page de détail.
import { FaCloud, FaMicrochip, FaLaptopCode, FaMobileScreenButton, FaServer } from "react-icons/fa6"

export const CATEGORY_STYLES = {
    "Web Development": { icon: FaLaptopCode, color: "#CBACF9" },
    "Backend Development": { icon: FaServer, color: "#7DD3FC" },
    "Mobile Development": { icon: FaMobileScreenButton, color: "#5EEAD4" },
    "DevOps & Cloud": { icon: FaCloud, color: "#F2A93B" },
    "Computer Science": { icon: FaMicrochip, color: "#F0ABFC" },
}

export const getCategoryStyle = (category) => CATEGORY_STYLES[category] || CATEGORY_STYLES["Web Development"]