import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css"

function RootLayouts() {
    return(
        <>
        <NavLink className={({ isActive,isPending }) => isActive ? "active" : isPending ? "pending" : ""}
        style={{marginRight: "5px"}}
        to="/">Home</NavLink>
        <NavLink 
        style={{marginRight: "5px", marginLeft: "5px"}}
        to="/blog">Blog</NavLink>
        <NavLink style={{marginLeft: "5px"}} to="/about" >About</NavLink>
        <p />
        <Outlet />
        </>
    )
}

export default RootLayouts