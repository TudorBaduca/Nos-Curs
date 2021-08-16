import "./Secondaryvid.css";
import VideoJS from "./VideoJS";
import circle from "./img/Circle.svg"

function Secondaryvid() {
    var video1JSOptions = {
        controls: true,
        fluid: true,
        playsInline: true,
        sources: [{ src: 'video1/master.m3u8' }]
    };
    var video2JSOptions = {...video1JSOptions,
        controls: true,
        fluid: true,
        playsInline: true,
        sources: [{ src: 'video2/master.m3u8'}]
    }
    return (
        <div id="Video_container">
            <div id="left_border"></div>
            <img id="Circle_1" src= {circle} alt=""></img>
            <img id="Circle_2" src= {circle} alt=""></img>

            <p id="until" class="text-center">[ UNTIL THEN YOU CAN WATCH THESE... ]</p>


            <div class="video_box2 row d-flex justify-content-center align-items-center">
                <div class="video_description1 col-lg-4 col-md-4 col-xs-12 col-sm-12 order-xs-1 order-sm-1 order-md-2 ">
                    <p id="title1">[ TAKE A LOOK HERE ... ]</p>
                </div>
                <div class="videos col-lg-6 col-md-6 col-xs-12 col-sm-12">
                    <VideoJS options={video1JSOptions} />
                </div>
            </div>

            <div class="video_box3 row d-flex justify-content-center align-items-center">
                <div class="video_description2 col-lg-4 col-md-4 col-xs-12 col-sm-12 ">
                    <p id="title2">[ NEW START IS COMING ... ]</p>
                </div>
                <div class="videos col-lg-6 col-md-6 col-xs-12 col-sm-12">
                    <VideoJS options={video2JSOptions} />
                </div>
            </div>
        </div>
    )
}

export default Secondaryvid;