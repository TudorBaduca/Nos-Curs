import { Link } from "react-router-dom";
import "./Menu.css";

function Menu({ menuIsVisible }) {
    if (menuIsVisible) {
        var cls = "menu_bar show"
    }
    else { var cls = "menu_bar" }
    return (
        <div class={cls}>
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <a href="#" class="nav-link link-dark" >
                        ABOUT US
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link link-dark">
                        LAST COURSES
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link link-dark">
                        SUBSCRIPTION
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link link-dark">
                        TERMS &amp; CONDITIONS
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link link-dark">
                        PRIVACY POLICY
                    </a>
                </li>

                <li class="nav-item">
                        <Link className="nav-link link-dark" to = "/LogIn">LOG IN</Link>
                </li>
            </ul>

        </div>

    )
}

export default Menu;