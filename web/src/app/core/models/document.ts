export interface Document {
    exitFullscreen: () => void;
    mozCancelFullScreen: () => void;
    webkitExitFullscreen: () => void;
    fullscreenElement: () => void;
    mozFullScreenElement: () => void;
    webkitFullscreenElement: () => void;
    msExitFullscreen: () => void;
}