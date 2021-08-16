import logo from "./img/nos-2.png";
import menu from "./img/menu.svg";
import insta from "./img/instagram.svg";
import facebook from "./img/facebook.svg";
import "./Header.css";
import { Link } from "react-router-dom";




function Header({showmenu}){
    return (
        <header id="site-header" class="row">
            <div class="nav col-xl-2 col-lg-2 col-md-2 col-3 ">
                <img class="menu" src={menu} onClick = {showmenu}></img>
            </div>

            <div class="logo-holder col-xl-8 col-lg-8 col-md-8 col-6 "> 
                <Link to = "/"> <img class="logo" src={logo} alt="NoS [Society]"></img></Link>
            </div>

            <div class="icons col-xl-2 col-lg-2 col-md-2 col-3 ">
                <a href="https://www.instagram.com/nos.society/">
                    <img class="instagram" src={insta}></img>
                </a>
                <a href="https://www.facebook.com/nos.society/">
                    <img class="facebook " src={facebook}></img>
                </a>
            </div>
        </header>
    )
}
export default Header;