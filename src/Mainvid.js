import "./Mainvid.css";
import VideoJS from "./VideoJS"
function Mainvid (){
    var videoJSOptions = {
        autoplay: true,
        muted: true,
        loop: true,
        controls: false,
        fluid: true,
        playsinline: true,
        sources: [{ src: 'teaser/master.m3u8' }]
    };
    return (

        <div class="video_box1 row">
                <div class = "video_with_button">
                    <VideoJS options={videoJSOptions} />
                    <button class="mute_button">
                        <i class="bi bi-volume-mute"></i>
                        <i class="bi bi-volume-down"></i>
                    </button>

                </div>

                <div class=" shadow-sm box col-12 col-md-4">
                    <div class="blur_background"></div>
                    <p id="essential">ESSENTIAL</p>
                    <p id="soon">[ MORE COMING SOON ... ]</p>
                    <p id="updates">GET UPDATES ABOUT COURSES</p>
                    <input id="input" type="text" placeholder="YOUR EMAIL ADDRESS" name="mail" required></input>
                    <input id="subscribe" type="Submit" value="SUBSCRIBE"></input>
                </div>

            </div>
        

    )

}
export default Mainvid;