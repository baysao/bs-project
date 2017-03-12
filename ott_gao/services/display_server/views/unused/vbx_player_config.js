var VBX_VERSION = [[[= model.vbxversion]]];
var VBX_LAYOUT_NAME = 'jolt';
function getPlayerConfigurations() {
    return {
        //"affiliateRegex": ["greensmoke\\.co.+?\\/aff\\/(?P<ac>\\d+)\\/ad\\/(?P<aid>\\d+)", "tplclick\\?lid=\\d+&pubid=(?P<ac>.+)", "bin/.+?\\?id=(?P<ac>[^&]+)&offerid=(?P<aid>[^&]+)|bin/.+?\\?id=(?P<ac>.+?)&", "&pubid=(?P<ac>[^&]*)", "&aid=(?P<aid>[\\d\\.]+)&pid=(?P<ac>\\d+)&", "/click-(?P<ac>\\d+)-(?P<aid>[\\d\\.]+)", "shareasale\\.com[^?]*\\?(?P<query>.*)", "/t/\\d+-\\d+-(?P<ac>\\d+)-\\d+", "linkconnector\\.com[^?]*\\?(?P<query>.*)", "(?:/BI/(?P<ac>\\d+)/KBID/(?P<aid>\\d+))|(?:BI=(?P<ac>\\d+).+?KBID=(?P<aid>\\d+))"],
        "deleted": false,
        "locked": false,
        "ctaLink": "[[[= model.ctaLink || '']]]",
        "videoEmailUrl": "",
        "ctaApps": "[[[= model.ctaApps || '']]]",
        "ctaButtonBackgroundColor": "[[[= model.ctaButtonBackgroundColor]]]",
        "customLogoLink": "[[[= model.customLogoLink || model.ctaLink || '']]]",
        "showQualityButton": "[[[? model.showQualityButton == 1]]]true[[[??]]]false[[[?]]]",
        "showTwitterButton": "[[[? model.showTwitterButton == 1]]]true[[[??]]]false[[[?]]]",
        "bannerApps": "[[[= model.bannerApps || '']]]",
        "customLogoUrl": "[[[= model.customLogoUrl || '']]]",
        "showShareButton": "[[[? model.showShareButton == 1]]]true[[[??]]]false[[[?]]]",
        "showFacebookButton": "[[[? model.showFacebookButton == 1]]]true[[[??]]]false[[[?]]]",
        "midRollApps": "[[[= model.midRollApps || '']]]",
        "bottomLogoUrl": "[[[= model.bottomLogoUrl || '']]]",
        "ctaText": "[[[= model.ctaText || '']]]",
        "preRollApps": "[[[= model.preRollApps || '']]]",
        "facebookSharePageUrl": "[[[= model.facebookSharePageUrl || '']]]",
        "tinyUrl": "[[[= model.tinyUrl || '']]]",
        "titleTextFormatColor": "[[[= model.titleTextFormatColor || '0xFFFFFF']]]",
        "defaultTwitterMessage": "Check out this video for {title}: {link}",
        "bottomLogoLink": "[[[= model.bottomLogoLink||'']]]",
        "fbConversionPixel": "[[[= model.fbConversionPixel || '']]]",
        "keepControlsVisible": "[[[? model.keepControlsVisible == 1]]]false[[[??]]]true[[[?]]]",
        "videoThumbnailUrl": "[[[= model.thumbnail]]]",
        "showHideUi": "",
        "postRollApps": "[[[= model.postRollApps || '']]]",
        "showViewbixBranding": "false",
        "standardTextFormatFont": "[[[= model.standardTextFormatFont || 'Arial']]]",
        "videoLink": "",
        "useYouTubeHighQuality": "[[[? model.useYouTubeHighQuality == 1]]]true[[[??]]]false[[[?]]]",
        "videoUrl": "[[[= model.url || 'http://dp.gao.easyvideo.vn/empty.m3u8']]]",
        "detailsAppId": "",
        "openvvTrackScriptUrl": "",
        "ctaButtonButtonTextFormatColor": "[[[= model.ctaButtonButtonTextFormatColor || '0x000000']]]",
        "title": "[[[= model.title || '']]]",
        "scaleLogoToTitleBar": "[[[? model.scaleLogoToTitleBar == 1]]]true[[[??]]]false[[[?]]]",
        "playVideoInApps": "[[[? model.playVideoInApps == 1]]]true[[[??]]]false[[[?]]]",
        "applications": [[[= JSON.stringify(model.applications)]]],
        "playerId": "",
        "memberId": ""
    };
}
VBX_layoutConfig = {
    video: {id: 'video1',   preload: true,
        autoplay: true,
        [[[? model.player_type == 'theoplayer']]]
        platform: VBX.Layout.VideoPlayerPlatform.THEO},
        [[[??]]]
        platform: VBX.Layout.VideoPlayerPlatform.VIDEOJS},
        [[[?]]]
    menu: {
        id: 'menu1',
        iconSize: 32,
        overflow: 'moreApp',
        overflowFunction: showMoreApp,
        share: 'embedApp',
        shareFunction: showEmbedApp,
        addShareIfNoVideo: true
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
    ready: function () {
        [[[? model.player_type == 'theoplayer']]]
        theoplayer.onReady = function () {
            [[[= model.lazyload_videourl || '']]]
            onReady();
        }
        [[[??]]]
        onReady();
        [[[?]]]
    }
};
VBX.Layout.init(VBX_layoutConfig);