import "./Footer.css";
import pin from  "./img/pin.svg";
import call_pin from "./img/Call_pin.svg";
import arrow from "./img/arrow.svg";



function Footer(){
    return(
        <footer class="footer row ">

            <div class="col-lg-3 col-md-3  col-12 col-sm-12">
                <p class="footer_title">CONTACT</p>
                {/* <P class="cuttingPart remove">Cutting,coloring amd styling that amplifies your potential</P>  */}
                <img class="pins" src= {call_pin} alt=""></img>
                <span>0770 609 736</span>
                <br></br>
                <img class="pins" src= {pin} alt=""></img>
                <span>Memorandumului 10, Cluj Napoca</span>
                <p class="search">www.nossocietyeducation.ro</p>
            </div>
            <div class="col-lg-2 col-md-2 ">
                <p class="footer_title remove">MENU</p>
                <p class="remove">About Us</p>
                <p class="remove">Last courses</p>
                <p class="remove">Subscription</p>
                <p class="remove">Terms &amp; Conditions</p>
                <p class="remove">Pricavy Policy</p>
            </div>
            <div class="col-lg-2 col-md-2 ">
                <p class="footer_title remove">ACCOUNT</p>
                <p class="remove">My Account</p>
            </div>
            <div class="col-lg-2 col-md-2  ">
                <p class="footer_title connect remove ">STAY CONNECTED</p>
                <p class="remove">Facebook</p>
                <p class="remove">Instagram</p>
            </div>
            <div class="updated col-lg-3 col-md-3 ">
                <p class="footer_title connect ">STAY UPDATED</p>
                <input id="input2" type="text" placeholder="EMAIL ADDRESS" name="mail" required></input>
                <span>
                    <button id="submit2" type="submit" class="btn">
                        <img id="image_arrow" src={arrow}></img>
                    </button>
                </span>

            </div>

        </footer>
    )
}

export default Footer;