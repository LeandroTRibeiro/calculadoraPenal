import videoBackground from "../assets/videos/backgroundVideo.mp4";

export const BackgroundVideo = () => {
    return (
        <>
            <div className="absolute right-0 bottom-0 min-w-full min-h-full w-auto h-auto z-[-1] backdrop-blur-sm dark:bg-black/60 bg-white/50"></div>
            <video 
                autoPlay={true} 
                loop={true} 
                muted={true} 
                className="absolute right-0 bottom-0 min-w-full min-h-full w-auto h-auto z-[-2] object-cover"
            >
                <source src={videoBackground} className="" />
            </video>
        </>
    );
};