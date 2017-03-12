padding = {top: 5, right: 5, bottom: 5, left: 5};
titleBarHeight = 39;
bottomLogoPadding = {top: 5, right: 5, bottom: 5, left: 5};
edgeToEdge = false;
animateTitle = false;
videoControlsBelow = true;
menuPeek = true;
menuItemHeight = 30;
menuItemHeightTouch = 60;
menuItemBottomMargin = 1;

VBX.Layout.init({
    video: {
        //id: 'video1', platform: 'external'
        id: 'video1', platform: 'videojs'
    },
    menu: {
        id: 'menu1',
        iconSize: 32,
        overflow: 'moreApp',
        overflowFunction: showMoreApp,
        share: 'embedApp',
        shareFunction: showEmbedApp,
        addShareIfNoVideo: false
    },
    container: {
        id: 'apps1',
        closeButton: true,
        rollPrompt: 'rollPrompt',
        rollPromptFunction: showRollPrompt,
        completeAllowSkipRollApp: false,
        appCloseCallback: onAppClose,
        appIframeCreatedCallback: onAppIframeCreated
    },
    ready: viewbixOnReady
});

function viewbixOnReady() {
    //loadScript("/theoplayer/1572/theoplayer.loader.js", function () {
    //    console.log('theoplayer done');
    //    theoplayer.onReady = function () {
    //        console.log('theoplayer ready');
    //        [[[= model.after_player_loaded]]]

            onReady();

            VBX.Layout.onState('has-background-image || !has-background-image', function () {
                updateVideoSize();
            });
        //}
    //})

}
var VBX_VERSION = "[[[= model.vbixver]]]";
var VBX_LAYOUT_NAME = 'viewbix';
var playerConfig = {
    "videoClass": "theoplayer theo-style-1 video-js vjs-default-skin theoplayer-skin theoplayer-size-large theoplayer-dvr-now",
    "affiliateRegex": [],
    "deleted": false,
    "locked": false,
    "useYouTubeHighQuality": "false",
    "postRollApps": "[]",
    "buttonBackgroundColor0": "3552822",
    "showQualityButton": "false",
    "postRollAppId": "",
    "midRollApps": "[]",
    "title": "",
    "backToVideoText": "Back to Video",
    "ctaApps": "[]",
    "ctaButtonBackgroundColor": "16763904",
    "openvvTrackScriptUrl": "",
    "showFacebookButton": "true",
    "customLogoUrl": "",
    "ctaAppId": "",
    "facebookSharePageUrl": "",
    "preRollApps": "[]",
    "videoUrl": "[[[= model.url]]]",
    "bottomLogoLink": "",
    "defaultTwitterMessage": "Check out this video for {title}: {link}",
    "ctaButtonButtonTextFormatColor": "0x000000",
    "showHideUi": "",
    "showTwitterButton": "true",
    "ctaLink": "",
    "scaleLogoToTitleBar": "true",
    "standardTextFormatFont": "Arial",
    "videoThumbnailUrl": "[[[= model.thumbnail]]]",
    "ctaText": "",
    "tinyUrl": "",
    "bannerApps": "[]",
    "buttonBackgroundColor1": "3552822",
    "fbConversionPixel": "",
    "videoEmailUrl": "",
    "backgroundImage": "",
    "bottomLogoUrl": "",
    "showShareButton": "true",
    "titleTextFormatColor": "0xFFFFFF",
    "backgroundColor": "3552822",
    "playVideoInApps": "false",
    "cornerRadius": "0",
    "customLogoLink": "",
    "keepControlsVisible": "false",
    "showViewbixBranding": "false",
    "applications": [],
};
getPlayerConfigurations = function () {
    return playerConfig;
}