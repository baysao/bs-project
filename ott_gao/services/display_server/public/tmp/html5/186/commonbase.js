var showTitleBar = true;
var videoStarted = false;
var rollPromptTimeoutId;
var hideRollPromptButton;
var intervalHandle;
var currentStage;

var padding = { top: 0, right: 0, bottom: 0, left: 0 };
var titleBarHeight = 40;
var actualTitleBarHeight = 0;
var bottomLogoPadding = { top: 0, right: 0, bottom: 0, left: 0 };
var edgeToEdge = true;
var useAppsTrigger = false;
var videoControlsBelow = false;
var menuPeek = false;
var appsTop;
var appsWidth;
var appsHeight;
var appIframes = [];
var menuItemHeight = 32;
var menuItemHeightTouch = 64;
var menuItemBottomMargin = 3;
var menuItemRightMargin = 0;
var AppAnimationDuration = 0.5;

var menuOnBottom = false; // Also implies that menu appears in apps overlay instead of in video
var menuSlidesDownFromCtaButton = false;

function setInitialMenuControlsAndTitle() {
    if (menuSlidesDownFromCtaButton && !VBX.Layout.isState('vbx-show-cta-button')) {
        VBX.Layout.addStateClasses('vbx-show-cta-button');
    }
    if (VBX.Layout.isState('touchscreen')) {
        document.querySelector('#menu1').style.display = 'block';
        if (useAppsTrigger) {
            document.querySelector('#appsTrigger').style.display = 'block';
            document.querySelector('#menu1').style.display = 'none';
        }
        if (showTitleBar) {
            document.querySelector('#title1').style.display = 'block';
        }
        if (VBX.Layout.isState('novideo-tech')) {
            hideControlsImmediate();
        }
        if (menuSlidesDownFromCtaButton) {
            hideMenuImmediate();
        }
    } else if (VBX.Layout.isState('keep-controls-visible')) {
        if (useAppsTrigger) {
            showAppsTrigger();
        }
        else if (!menuSlidesDownFromCtaButton) {
            showMenu();
        }
        showTitle();
        if (!menuSlidesDownFromCtaButton) {
            setTimeout(function () {
                showMenuMinimized();
                hideControlBar();
            }, 3000);
        }
    } else if (!edgeToEdge) {
        showTitle();
        showMenuAndControlBar();
    } else if (window.location.href.indexOf('&ap=true') != -1 && !VBX.Layout.isState('novideo-tech')) {
        // jolt and autoplay - show controls for 3 seconds and then hide them
        if (useAppsTrigger) {
            showAppsTrigger();
            showControlBar();
            setTimeout(function () {
                hideControlBar();
                hideTitle(0.5);
            }, 3000);
        }
        else if (menuSlidesDownFromCtaButton) {
            hideMenuImmediate();
            showControlBar();
            setTimeout(function () {
                hideControlBar();
                hideTitle(0.5);
            }, 3000);
        }
        else {
            showMenuAndControlBar();
            setTimeout(function () {
                hideMenuAndControlBar();
                hideTitle(0.5);
            }, 3000);
        }
        showTitle();
    }
    else {
        hideMenuImmediate();
        hideAppsTriggerImmediate();
        hideControlsImmediate();
        hideTitle(0);
    }
}

function createAppCloseButtonTouchTrappers() {
    if (VBX.Layout.isState('touchscreen') && !VBX.Layout.isState('iphone')) {
        var appContainers = document.querySelectorAll('.vbx-app');
        for (var i = 0; i < appContainers.length; i++) {
            var appCloseButtonTouchTrapper = document.createElement('div');
            appCloseButtonTouchTrapper.className = 'vbx-close-button-touch-trapper';
            appContainers[i].appendChild(appCloseButtonTouchTrapper);
        }
    }
}


function onReady() {
    fixControlsOrder();

    if (videoControlsBelow) {
        VBX.addClass(document.body, 'video-controls-below');
    }

    hideRollPromptButton = document.querySelector('#apps1 .vbx-close-button').cloneNode(true);
    VBX.removeClass(hideRollPromptButton, 'vbx-close-button');
    VBX.addClass(hideRollPromptButton, 'vbx-hide-roll-prompt-button');
    document.querySelector('#apps1 .vbx-close-button').parentNode.appendChild(hideRollPromptButton);

    createAppCloseButtonTouchTrappers();

    if (controlsExist()) {
        var shareButtons = document.querySelector('#shareButtons');
        var controlBar = document.querySelector('#video1 .vjs-control-bar');
        controlBar.appendChild(shareButtons);
    }

    var appsContainer = document.querySelector('#apps1');
    var embedApp = document.querySelector('#embedApp');
    var moreApp = document.querySelector('#moreApp');

    VBX.Layout.appendContainerItem(appsContainer, embedApp);
    VBX.Layout.appendContainerItem(appsContainer, moreApp);

    setInitialMenuControlsAndTitle();

    // Set up listeners

    VBX.listen(document.querySelector('#video1'), ['click'], function (e) {
        if (VBX.Layout.isState('kaltura')) {
            //console.log('video1 received event: ' + e.type);
            if (VBX.Layout.isState('video-playing')) {
                VBX.Layout.pauseVideo();
            }
            else {
                VBX.Layout.playVideo();
            }
        } else {
            //console.log('video1 (kaltura) received event: ' + e.type);
        }
        initTimer();
    }, true);

    if (menuSlidesDownFromCtaButton) {
        VBX.listen(document.querySelector('#cta-button'), ['click'], function (e) {
            initTimer();
        }, true);
    }


    VBX.listen(hideRollPromptButton, 'click', function (e) {
        hideRollPrompt();
    });

    /*
      VBX.listen(document.querySelector('#video1'), 'resize', function (e) {
          updateVideoSize();
          updateMenu();
      });
      */

    VBX.listen(document.querySelector('#mask'), 'resize', function (e) {
        updateVideoSize();
        updateMenu();
        updateCustomLogoSize();
        if (menuSlidesDownFromCtaButton) {
            updateCtaButtonMenuContainer();
        }
    });

    if (controlsExist() && !menuOnBottom) {
        VBX.listen(document.querySelector('#video1 .vjs-control-bar'), 'resize', function (e) {
            updateMenu();
        });
    }

    if (!menuOnBottom) {
        VBX.listen(document.querySelector('#title1'), 'resize', function (e) {
            updateMenu();
        });
    }

    VBX.listen(document.querySelector('#cta-button'), 'resize', function (e) {
        updateCustomLogoSize();
    });

    VBX.listen(document.querySelector('#menu1'), 'resize', function (e) {
        if (VBX.Layout.isState('mouseout || apps1-item-selected')) {
            hideMenuImmediate();
            updateMenu();
        }
    });

    VBX.listen(document.querySelector('#bottomLogo'), 'resize', function (e) {
        updateVideoSize();
        updateMenu();
    });

    VBX.listen(document.querySelector('#viewbixBranding'), 'resize', function (e) {
        updateVideoSize();
    });

    VBX.Layout.listen('customLogoUrl', function (value) {
        updateActualTitleBarHeight();
    });

    VBX.Layout.listen('title', function (value) {
        updateActualTitleBarHeight();
    });

    VBX.Layout.listen('ctaText', function (value) {
        updateActualTitleBarHeight();
    });

    VBX.Layout.listen('bottomLogoUrl', function (value) {
        updateVideoSize();
        updateMenu();
    });
    if (menuSlidesDownFromCtaButton) {
        VBX.Layout.addStateClasses('ctamouseout');
        VBX.Layout.addStateClasses('menumouseout');
        var ctaButton = document.querySelector('#cta-button');
        if (VBX.Layout.isState('touchscreen')) {
            VBX.listen(ctaButton, 'click', function () {
                if (VBX.Layout.isState('ctamouseout')) {
                    VBX.Layout.removeAddStateClasses('ctamouseout', 'ctamouseover');
                } else {
                    VBX.Layout.removeAddStateClasses('ctamouseover', 'ctamouseout');
                }
            });
        }
        else {
            VBX.listenMouseEnter(ctaButton, function (e) {
                VBX.Layout.removeAddStateClasses('ctamouseout', 'ctamouseover');
                //console.log('cta in');
            }, false, this);

            VBX.listenMouseLeave(ctaButton, function (e) {
                VBX.Layout.removeAddStateClasses('ctamouseover', 'ctamouseout');
                //console.log('cta out');
            }, false, this);

            var menu = document.querySelector('#menu1');
            VBX.listenMouseEnter(menu, function (e) {
                VBX.Layout.removeAddStateClasses('menumouseout', 'menumouseover');
                //console.log('menu in');
            }, false, this);

            VBX.listenMouseLeave(menu, function (e) {
                VBX.Layout.removeAddStateClasses('menumouseover', 'menumouseout');
                //console.log('menu out');
            }, false, this);
        }

    }


    // React to state changes
    VBX.Layout.onState('ui-show', function () {
        document.querySelector('#title1').style.display = 'inherit';
        document.querySelector('#menu1').style.display = 'inherit';
        updateToolTip();
    });

    VBX.Layout.onState('ui-hide', function () {
        document.querySelector('#title1').style.display = 'none';
        document.querySelector('#menu1').style.display = 'none';
    });



    VBX.Layout.onState('((mouseover && !mousestill) || iphone) && !apps1-item-selected', function () {
        if (useAppsTrigger) {
            showAppsTrigger();
            showControlBar();
        }
        else {
            showMenuAndControlBar();
        }
    });

    if (menuSlidesDownFromCtaButton) {
        VBX.Layout.onState('(ctamouseover || menumouseover) && !apps1-item-selected', function () {
            showMenu();
        });
    }




    if (VBX.Layout.isState('vpaid-nonlinear-ad')) {
        showYoutubeTouchTrapper();
    }
    VBX.Layout.onState('video-playing || vpaid-nonlinear-ad', function () {
        showYoutubeTouchTrapper();
    });
    // Handles the case where the main video was non-youtube and the youtube app was selected
    VBX.Layout.onState('video-paused && vpaid-ad && youtube-tech', function () {
        hideYoutubeTouchTrapper();
    });

    VBX.Layout.onState('(mouseout) || apps1-item-selected || mousestill', function () {
        if (useAppsTrigger) {
            clearTimer();
            hideAppsTrigger();
            hideControlBar();
        }
        else if (!menuSlidesDownFromCtaButton) {
            clearTimer();
            hideMenuAndControlBar();
        }
    });

    if (menuSlidesDownFromCtaButton) {
        VBX.Layout.onState('touchscreen && apps1-item-selected', function () {
            VBX.Layout.removeAddStateClasses('ctamouseover', 'ctamouseout');
        });
    }



    if (menuSlidesDownFromCtaButton) {
        VBX.Layout.onState('(ctamouseout && menumouseout) || apps1-item-selected', function () {
            hideMenu();
        });
        VBX.Layout.onState('(mouseout) || apps1-item-selected', function () {
            clearTimer();
            hideMenuAndControlBar();
        });

    }

    VBX.Layout.onState('(mouseover && !mousestill) || apps1-item-selected', function () {
        showTitle();
    });

    VBX.Layout.onState('(mouseout || mousestill) && !apps1-item-selected && !keep-controls-visible', function () {
        hideTitle(0.5);
    });

    VBX.Layout.onState('keep-controls-visible', function () {
        showTitle();
    });

    VBX.Layout.onState('video-ended && !apps1-item-selected && !novideo-tech', function () {
        if (useAppsTrigger) {
            showAppsTrigger();
            showControlBar();
        }
        else {
            showMenuAndControlBar();
        }
        showTitle();
        hideYoutubeTouchTrapper();
    });

    VBX.Layout.onState('is-full-screen', function () {
        updateVideoSize();
    });

    VBX.Layout.onState('not-full-screen', function () {
        updateVideoSize();
    });

    VBX.Layout.onState('iphone', function () {
        updateVideoSize();
        updateMenu();
    });

    VBX.Layout.onState('mraid-ad', function () {
        if (useAppsTrigger) {
            var appsTriggerElement = document.querySelector('#appsTrigger');
            appsTriggerElement.src = appsTriggerElement.src.replace('http://', 'https://');
        }
    });


    var ctaButtonTextColor = '#FFFFFF';
    var ctaButtonBackgroundColor = VBX.Layout.config('ctaButtonBackgroundColor');
    if (!VBX.ok(ctaButtonBackgroundColor)) {
        ctaButtonBackgroundColor = '16763904'; // Golden yellow is default CTA button color
        document.querySelector('#cta-button').style.backgroundColor = '#FFCC00';
    }
    if (VBX.colorIsBright(parseInt(ctaButtonBackgroundColor))) {
        ctaButtonTextColor = '#000000';
    }
    document.querySelector('#cta-button').style.color = ctaButtonTextColor;

    if (menuSlidesDownFromCtaButton) {
        updateCtaButtonMenuContainer();
    }

    showControlBar();

    updateVideoSize();

    updateMenu();
    initAppsTrigger();

}


function fixControlsOrder() {
    var volumeControl = document.querySelector('.vjs-volume-control');
    var muteControl = document.querySelector('.vjs-mute-control');
    var timeControl = document.querySelector('.vjs-current-time');
    if (volumeControl != null && timeControl != null && muteControl != null) {
        volumeControl.parentNode.insertBefore(volumeControl, timeControl);
        volumeControl.parentNode.insertBefore(muteControl, volumeControl);
    }
}


function onAppClose() {
    if (useAppsTrigger) {
        hideMenu();
        hideAppsContainer();
        initTimer();
    }
    else {
        if (!VBX.Layout.isState('keep-controls-visible') && !VBX.Layout.isState('iphone')) {
            hideTitle(0.5);
        }
        initTimer();
    }
}

function updateActualTitleBarHeight() {
    var customLogoUrl = VBX.Layout.config('customLogoUrl');
    var title = VBX.Layout.config('title');
    var ctaText = VBX.Layout.config('ctaText');
    var hasCustomLogo = (customLogoUrl != null && customLogoUrl.trim() != "");
    var hasTitleOrCustomLogo = hasCustomLogo || (title != null && title.trim() != "");
    var hasCtaText = (ctaText != null && ctaText.trim() != "");
    showTitleBar = hasTitleOrCustomLogo || hasCtaText;

    if (showTitleBar) {
        actualTitleBarHeight = titleBarHeight;
    } else {
        actualTitleBarHeight = padding.top;
    }

    updateCustomLogoSize();
}

function updateCustomLogoSize() {
    var customLogoUrl = VBX.Layout.config('customLogoUrl');
    var hasCustomLogo = (customLogoUrl != null && customLogoUrl.trim() != "");
    if (hasCustomLogo) {
        var ctaText = VBX.Layout.config('ctaText');
        var hasCtaText = (ctaText != null && ctaText.trim() != "");
        var bodyWidth = VBX.select('body').getSize().width;
        var ctaElement = document.querySelector('#cta-button');
        var ctaParentNode = ctaElement.parentNode;
        var ctaParentNodeDisplay = ctaParentNode.style.display;
        var availableCustomLogoWidth = bodyWidth;
        if (hasCtaText) {
            ctaParentNode.style.display = 'block';
            availableCustomLogoWidth = Math.round(ctaElement.getBoundingClientRect().left - 16);
            ctaParentNode.style.display = ctaParentNodeDisplay;
        }
        var customLogoElement = document.querySelector('.custom-logo');
        customLogoElement.style.maxWidth = availableCustomLogoWidth + 'px';
    }
}

function bodyClass(customLogoUrl, title, ctaText, showFacebookButton, showTwitterButton, showShareButton, keepControlsVisible, backgroundImage) {
    var classes = {
        remove: "",
        add: ""
    };

    var hasTitleOrCustomLogo = (customLogoUrl != null && customLogoUrl.trim() != "") || (title != null && title.trim() != "");
    var hasCtaText = (ctaText != null && ctaText.trim() != "");
    showTitleBar = hasTitleOrCustomLogo || hasCtaText;

    if (showTitleBar) {
        classes["remove"] = "hide-title-bar";
    } else {
        classes["add"] = "hide-title-bar";
    }

    updateActualTitleBarHeight();

    if (VBX.toBoolean(showFacebookButton)) {
        classes["add"] += " show-facebook-button";
    } else {
        classes["remove"] += " show-facebook-button";
    }

    if (VBX.toBoolean(showTwitterButton)) {
        classes["add"] += " show-twitter-button";
    } else {
        classes["remove"] += " show-twitter-button";
    }

    if (VBX.toBoolean(showShareButton)) {
        classes["add"] += " show-share-button";
    } else {
        classes["remove"] += " show-share-button";
    }

    if (VBX.toBoolean(keepControlsVisible)) {
        classes["add"] += " keep-controls-visible";
    } else {
        classes["remove"] += " keep-controls-visible";
    }

    if (!VBX.empty(backgroundImage)) {
        classes["add"] += " has-background-image";
    } else {
        classes["remove"] += " has-background-image";
    }

    return classes;
}

function customLogoClass(customLogoUrl, scaleLogoToTitleBar, customLogoLink) {
    var classes = {
        remove: "",
        add: ""
    };

    if (customLogoUrl != null && customLogoUrl.trim() != "") {
        classes["add"] = "has-custom-logo";

        if (VBX.toBoolean(scaleLogoToTitleBar)) {
            classes["add"] += " scale-logo-to-title-bar";
        } else {
            classes["remove"] = "scale-logo-to-title-bar";
        }

        if (customLogoLink != null && customLogoLink.trim() != "") {
            classes["add"] += " custom-logo-clickable";
        } else {
            classes["remove"] += " custom-logo-clickable";
        }

    } else {
        classes["remove"] = "has-custom-logo scale-logo-to-title-bar";
    }

    return classes;
}

function titleClass(customLogoUrl) {
    var classes = {
        remove: "",
        add: ""
    };

    if (customLogoUrl != null && customLogoUrl.trim() != "") {
        classes["add"] = "has-custom-logo";
    } else {
        classes["remove"] = "has-custom-logo";
    }

    return classes;
}

function bottomLogoClass(bottomLogoUrl, bottomLogoLink, bannerApps) {
    var classes = {
        remove: "",
        add: ""
    };

    if (bottomLogoUrl != null && bottomLogoUrl.trim() != "") {
        classes["add"] = "has-bottom-logo";

        if ((bottomLogoLink != null && bottomLogoLink.trim() != "") || (bannerApps != null && bannerApps.length > 0)) {
            classes["add"] += " banner-clickable";
        } else {
            classes["remove"] += " banner-clickable";
        }
    } else {
        classes["remove"] = "has-bottom-logo";
    }

    return classes;
}

function facebookButtonClass(showFacebookButton) {
    var classes = {
        remove: "",
        add: ""
    };

    if (VBX.toBoolean(showFacebookButton)) {
        classes["add"] = "show-facebook-button";
    } else {
        classes["remove"] = "show-facebook-button";
    }

    return classes;
}

function twitterButtonClass(showTwitterButton) {
    var classes = {
        remove: "",
        add: ""
    };

    if (VBX.toBoolean(showTwitterButton)) {
        classes["add"] = "show-twitter-button";
    } else {
        classes["remove"] = "show-twitter-button";
    }

    return classes;
}

function shareButtonClass(showShareButton) {
    var classes = {
        remove: "",
        add: ""
    };

    if (VBX.toBoolean(showShareButton)) {
        classes["add"] = "show-share-button";
    } else {
        classes["remove"] = "show-share-button";
    }

    return classes;
}


function ctaButtonTextColor(ctaButtonBackgroundColor) {
    var color = '#FFFFFF';
    if (!VBX.ok(ctaButtonBackgroundColor)) {
        ctaButtonBackgroundColor = '16763904'; // Golden yellow is default CTA button color
    }
    if (VBX.colorIsBright(parseInt(ctaButtonBackgroundColor))) {
        color = '#000000';
    }

    return color;
}


function showYoutubeTouchTrapper() {
    var touchTrapper = document.querySelector('#youtubetouchtrapper');
    if (!VBX.ok(touchTrapper)) {
        touchTrapper = document.createElement('div');
        touchTrapper.id = 'youtubetouchtrapper';
        touchTrapper.style.display = 'none';
        videoStarted = false;
    }

    if (VBX.ok(touchTrapper)) {
        if (!videoStarted) {
            videoStarted = true;
            initTimer();
            //if (VBX.Layout.isState('touchscreen && (youtube-tech || vpaid-ad || kaltura) && !iphone')) {
            if (VBX.Layout.isState('touchscreen && !iphone')) {
                document.querySelector('#video1').appendChild(touchTrapper);
                touchTrapper.style.display = 'block';
                updateYoutubeTouchTrapperSize();
            }
        } else {
            // this must be after the video was already played. Just make the div visible again
            if (VBX.Layout.isState('touchscreen') && VBX.Layout.isState('youtube-tech') && !VBX.Layout.isState('iphone')) {
                touchTrapper.style.display = 'block';
                updateYoutubeTouchTrapperSize();
            }
        }
    }
}

function hideYoutubeTouchTrapper() {
    var touchTrapper = document.querySelector('#youtubetouchtrapper');
    if (VBX.ok(touchTrapper)) {
        clearTimer();
        touchTrapper.style.display = 'none';
    }
    videoStarted = false;
}

function updateYoutubeTouchTrapperSize() {
    var videoElement = document.querySelector('#video1');
    var youtubeTouchTrapper = document.querySelector('#youtubetouchtrapper');
    if (VBX.ok(videoElement) && VBX.ok(youtubeTouchTrapper)) {
        youtubeTouchTrapper.style.height = videoElement.style.height;
        youtubeTouchTrapper.style.width = videoElement.style.width;
        youtubeTouchTrapper.style.left = '0px';
        youtubeTouchTrapper.style.top = '0px';
    }
}

function hideControlBar() {
    if (controlsExist() && edgeToEdge) {
        var $controls = VBX.select('#video1 .vjs-control-bar');
        var $progressBar = VBX.select('#video1 .vjs-progress-control');
        var h = $controls.getSize().height;
        var progressHeight = $progressBar.getSize().height;
        var totalHeight = h + progressHeight;
        TweenLite.to($controls.first(), 0.5, { bottom: -totalHeight, ease: Cubic.easeIn });
    }
}


function hideMenuAndControlBar() {
    hideMenu();
    hideControlBar();
}

function showControlBar() {
    if (!VBX.Layout.isState('iphone') && !VBX.Layout.isState('vpaid-ad') && controlsExist()) {
        var $controls = VBX.select('#video1 .vjs-control-bar');
        $controls.first().style.display = 'block';
        if (edgeToEdge) {
            TweenLite.to($controls.first(), 0.5, { bottom: 0, ease: Cubic.easeOut });
        } else {
            var h = $controls.getSize().height;
            $controls.first().style.bottom = '-' + h + 'px';
        }

    }
}



function showMenu() {
    if (VBX.Layout.isState('ui-hide')) {
        return;
    }
    // handles case where user clicks on app and menu is shown before hiding it.
    if (!useAppsTrigger && VBX.Layout.isState('apps1-item-selected')) {
        return;
    }
    // handles case where icons are minimized and user mouses out. Don't start showing before hiding. However, if the video has ended, we want to show the menus
    if (!useAppsTrigger && VBX.Layout.isState('mouseout') && !VBX.Layout.isState('video-ended')) {
        return;
    }
    var menuElement = document.querySelector('#menu1');
    menuElement.style.display = 'block';
    if (useAppsTrigger) {
        // menu should slide in from left to right together with apps
        menuElement.style.opacity = 0;
        TweenLite.to(menuElement, AppAnimationDuration, { right: 0, left: 0, ease: Cubic.easeOut, autoAlpha: 1 });
    }
    else if (menuSlidesDownFromCtaButton) {
        updateCtaButtonMenuContainer();
        var ctaButton = document.getElementById('cta-button');
        var ctaButtonBottom = ctaButton.offsetHeight + ctaButton.offsetTop;
        menuElement.style.width = ctaButton.offsetWidth.toString() + 'px';
        TweenLite.to(menuElement, 0.5, { top: ctaButtonBottom, ease: Cubic.easeOut });
    }
    else {
        TweenLite.to(menuElement, 0.5, { right: 0, ease: Cubic.easeOut });
    }
}

function showAppsTrigger() {
    if (useAppsTrigger) {
        if (VBX.Layout.isState('ui-hide')) {
            return;
        }
        // handles case where user clicks on app and menu is shown before hiding it.
        if (VBX.Layout.isState('apps1-item-selected')) {
            return;
        }
        // handles case where icons are minimized and user mouses out. Don't start showing before hiding. However, if the video has ended, we want to show the menus
        if (VBX.Layout.isState('mouseout') && !VBX.Layout.isState('video-ended')) {
            return;
        }
        var appsTriggerElement = document.querySelector('#appsTrigger');
        appsTriggerElement.style.display = 'block';
        TweenLite.to(appsTriggerElement, 0.5, { left: 0, ease: Cubic.easeOut });
    }
}


function showMenuMinimized() {
    if (menuSlidesDownFromCtaButton) {
        // there is no minimized menu if the menu descends from the cta menu
        hideMenu();
    }
    if (VBX.Layout.isState('ui-hide')) {
        return;
    }
    var $menu = VBX.select('#menu1');
    var $menuIcon = VBX.select('#menu1 img');
    var menuIconWidth;
    if ($menuIcon.length() == 0) {
        return;
    } else if ($menuIcon.length() == 1) {
        menuIconWidth = $menuIcon.getSize().width;
    } else {
        menuIconWidth = $menuIcon.getSize()[0].width;
    }

    var paddingLeft = $menuIcon.first().offsetLeft;

    var w = Math.ceil($menu.getSize().width) - Math.ceil(menuIconWidth + (2 * paddingLeft)) + 1;
    TweenLite.to($menu.first(), 0.5, { right: -w, ease: Cubic.easeIn });
}


function showMenuAndControlBar() {
    if (VBX.Layout.isState('touchscreen')) {
        initTimer();
    } else {
        showControlBar();
    }
    if (!menuSlidesDownFromCtaButton) {
        showMenu();
    }
}

var lastSelectedAppElement = null;
var selectedAppId = null;
var appsContainerIsShowing = false;

function hideAppsContainer() {
    if (!appsContainerIsShowing) {
        return;
    }

    appsContainerIsShowing = false;

    if (!VBX.ok(lastSelectedAppElement)) {
        return;
    }

    var lastSelectedAppElementDisplay = lastSelectedAppElement.style.display;
    lastSelectedAppElement.style.display = 'block';
    var appsElement = document.querySelector('#apps1');
    var w = appsElement.clientWidth;
    TweenLite.to(appsElement, AppAnimationDuration, {
        left: -w, ease: Cubic.easeIn, onComplete: function () {
            lastSelectedAppElement.style.display = lastSelectedAppElementDisplay;
            lastSelectedAppElement = null;
        }
    });
    TweenLite.to(appsElement, AppAnimationDuration, { ease: Cubic.easeIn, autoAlpha: 0 });
}

function showAppsContainer() {
    if (VBX.Layout.isState('ui-hide')) {
        return;
    }
    if (!appsContainerIsShowing) {
        appsContainerIsShowing = true;
        var appsElement = document.querySelector('#apps1');
        appsElement.style.opacity = 0;
        appsElement.style.display = 'block';
        var w = appsElement.clientWidth;
        appsElement.style.left = '-' + w + 'px';
        TweenLite.to(appsElement, AppAnimationDuration, { left: 0, ease: Cubic.easeOut });
        TweenLite.to(appsElement, AppAnimationDuration, { autoAlpha: 1 });
    }
}

function scrollToSelectedApp() {
    var selectedAppElement = document.querySelector('.vbx-selected');
    if (lastSelectedAppElement == null) {
        lastSelectedAppElement = selectedAppElement;
        return;
    }
    if (selectedAppElement == lastSelectedAppElement) {
        return;
    }

    var lastSelectedAppElementDisplay = lastSelectedAppElement.style.display;
    var lastSelectedAppElementLeft = lastSelectedAppElement.style.left;
    lastSelectedAppElement.style.display = 'block';
    var direction;
    // calculate the direction
    var thisElement = selectedAppElement;
    while ((thisElement = thisElement.previousElementSibling) != null && thisElement != lastSelectedAppElement);
    var w = selectedAppElement.clientWidth;
    var lastSelectedAppDestination;
    if (thisElement === lastSelectedAppElement) { // slide left
        selectedAppElement.style.left = w + 'px';
        lastSelectedAppDestination = -w;
    } else { // slide right
        selectedAppElement.style.left = '-' + w + 'px';
        lastSelectedAppDestination = w;
    }
    selectedAppElement.style.zIndex = 5;
    lastSelectedAppElement.style.zIndex = 4;
    TweenLite.to(selectedAppElement, AppAnimationDuration, { left: 0, ease: Cubic.easeOut });
    TweenLite.to(lastSelectedAppElement, AppAnimationDuration, {
        left: lastSelectedAppDestination, ease: Cubic.easeOut, onComplete: function () {
            lastSelectedAppElement.style.display = lastSelectedAppElementDisplay;
            lastSelectedAppElement.style.left = lastSelectedAppElementLeft;
            lastSelectedAppElement = selectedAppElement;
        }
    });
}

function colorMenuButtons() {
    var menuListElements = document.querySelectorAll('#menu1 li');
    var menuButtonSelectedColor = VBX.Layout.config('menuButtonSelectedColor');
    var menuButtonColor = VBX.Layout.config('menuButtonColor');
    for (i = 0; i < menuListElements.length; i++) {
        if (menuListElements[i].getAttribute('data-app-id') == selectedAppId) {
            menuListElements[i].style.backgroundColor = VBX.colorToString(menuButtonSelectedColor);
            if (VBX.colorIsBright(parseInt(menuButtonSelectedColor))) {
                menuListElements[i].style.color = '#000000';
            } else {
                menuListElements[i].style.color = '#FFFFFF';
            }
        } else {
            menuListElements[i].style.backgroundColor = VBX.colorToString(menuButtonColor);
            if (VBX.colorIsBright(parseInt(menuButtonColor))) {
                menuListElements[i].style.color = '#000000';
            } else {
                menuListElements[i].style.color = '#FFFFFF';
            }
        }
    }
}

function onAppSelected(appId) {
    if (useAppsTrigger) {
        selectedAppId = appId;
        showAppsContainer();
        scrollToSelectedApp();
        if (getMenuNumApps('menu1') > 1) {
            showMenu();
        }
        colorMenuButtons();
    }
    if (VBX.Layout.isState('iphone') || VBX.Layout.isState('ipad')) {
        // need to hide control bar because the video div is now fixed instead of relative and won't cover the video progress bar
        document.querySelector('#video1 .vjs-control-bar').style.display = 'none';
    }
}

function showEmbedApp(element, appId) {
    if (VBX.Layout.isState('ui-hide')) {
        return;
    }

    VBX.Layout.trackShare(element);

    var appsContainer = document.querySelector('#apps1');
    var embedApp = document.querySelector('#embedApp');
    var linkField = document.querySelector('#link-text');
    var embedField = document.querySelector('#embed-text');
    linkField.textContent = VBX.Layout.getPreviewUrl();
    embedField.textContent = VBX.Layout.getEmbed();
    VBX.Layout.selectContainerItem(appsContainer, embedApp);
    linkField.focus();
    try {
        linkField.select();
    } catch (err) {
        // Do nothing. IE bug.
    }
    onAppSelected(appId);
}

function showMoreApp(appId) {
    if (VBX.Layout.isState('ui-hide')) {
        return;
    }

    var appsContainer = document.querySelector('#apps1');
    var moreApp = document.querySelector('#moreApp');
    VBX.Layout.selectContainerItem(appsContainer, moreApp);
    onAppSelected(appId);
}

function clearRollPromptTimeout() {
    if (VBX.ok(rollPromptTimeoutId)) {
        clearTimeout(rollPromptTimeoutId);
        rollPromptTimeoutId = null;
    }
}

function hideMenuImmediate() {
    if (useAppsTrigger) {
        document.querySelector('#menu1').style.left = (-Math.ceil(VBX.select('#menu1').getSize().width) + 1) + 'px';
        document.querySelector('#menu1').style.right = (Math.ceil(VBX.select('#menu1').getSize().width) + 1) + 'px';
    }
    else if (menuSlidesDownFromCtaButton) {
        var $menu = VBX.select('#menu1');
        var h = Math.ceil($menu.getSize().height) + 1;
        var titleBar = document.querySelector('#title1');
        var titleBottom = titleBar.offsetTop + titleBar.offsetHeight;
        var ctaButton = document.querySelector('#cta-button');
        var ctaButtonBottom = ctaButton.offsetTop + ctaButton.offsetHeight;
        //TweenLite.to($menu.first(), 0.5, { top: titleBottom - ctaButtonBottom - h, ease: Cubic.easeIn });
        document.querySelector('#menu1').style.top = titleBottom - ctaButtonBottom - h + 'px';
    }
    else {
        document.querySelector('#menu1').style.right = (-Math.ceil(VBX.select('#menu1').getSize().width) + 1) + 'px';
    }
}
function hideAppsTriggerImmediate() {
    if (useAppsTrigger) {
        document.querySelector('#appsTrigger').style.right = (-Math.ceil(VBX.select('#appsTrigger').getSize().width) + 1) + 'px';
    }
}

function hideControlsImmediate() {
    if (controlsExist() || VBX.Layout.isState('novideo-tech')) {
        document.querySelector('#video1 .vjs-control-bar').style.bottom = (-VBX.select('#video1 .vjs-control-bar').getSize().height) + 'px';
    }
}

function showTitle() {
    if (VBX.Layout.isState('ui-hide')) {
        return;
    }

    if (!showTitleBar) {
        return;
    }

    document.querySelector('#title1').style.display = 'block';
    if (VBX.select('#title1 .custom-logo.has-custom-logo.scale-logo-to-title-bar').length() == 1 || VBX.select('#title1 .custom-logo.has-custom-logo').length() == 0) {
        TweenLite.to(document.querySelector('#title1'), 0.5, { top: 0, ease: Cubic.easeOut });
    } else {
        TweenLite.to(document.querySelector('#title1'), 0.5, { top: 0, autoAlpha: 1, ease: Cubic.easeOut });
    }
}

function hideTitle(duration) {
    if (!showTitleBar || !edgeToEdge) {
        return;
    }
    var $title = VBX.select('#title1');
    var h = $title.getSize().height;

    var completeFunction;
    if (menuSlidesDownFromCtaButton) {
        completeFunction = hideMenu;
    } else {
        completeFunction = function () { };
    }

    if (VBX.select('#title1 .custom-logo.has-custom-logo.scale-logo-to-title-bar').length() == 1 || VBX.select('#title1 .custom-logo.has-custom-logo').length() == 0) {
        TweenLite.to($title.first(), duration, { top: -h, ease: Cubic.easeIn, onComplete: completeFunction });
    }
    else {
        TweenLite.to($title.first(), duration, { top: -h, autoAlpha: 0, ease: Cubic.easeIn, onComplete: completeFunction });
    }
}

function showRollPrompt() {
    if (VBX.Layout.isState('ui-hide')) {
        return;
    }

    clearRollPromptTimeout();

    document.querySelector('#apps1 .vbx-close-button').style.display = 'none';
    TweenLite.to(document.querySelector('#apps1 .vbx-close-button'), 0, { autoAlpha: 0 });
    TweenLite.to(document.querySelector('#apps1 .vbx-hide-roll-prompt-button'), 0, { autoAlpha: 0 });
    document.querySelector('#apps1 .vbx-hide-roll-prompt-button').style.display = 'block';

    TweenLite.to(document.querySelector('#apps1 .vbx-hide-roll-prompt-button'), 0.5, { delay: 0.5, autoAlpha: 1 });

    var rollPromptElement = document.querySelector('#rollPrompt');
    rollPromptElement.style.display = 'block';
    TweenLite.to(rollPromptElement, 0.5, { left: 0, ease: Cubic.easeOut });

    rollPromptTimeoutId = setTimeout(hideRollPrompt, 3000);
}

function hideRollPrompt() {
    clearRollPromptTimeout();

    document.querySelector('#apps1 .vbx-hide-roll-prompt-button').style.display = 'none';
    var closebuttonElement = document.querySelector('#apps1 .vbx-close-button');
    closebuttonElement.style.display = 'block';
    TweenLite.to(closebuttonElement, 0.5, { delay: 0.5, autoAlpha: 1 });

    var bodyWidth = VBX.select('body').getSize().width;
    TweenLite.to(document.querySelector('#rollPrompt'), 0.5, { left: bodyWidth, ease: Cubic.easeIn });
}

function gotoStage1() {
    currentStage = 1;
    // show everything in stage 1
    if (useAppsTrigger) {
        showAppsTrigger();
    } else {
        showMenu();
    }
    showControlBar();
    showTitle();

}

function gotoStage2() {
    currentStage = 2;
    if (!useAppsTrigger) {
        showMenuMinimized();
    }
}

function gotoStage3() {
    if (VBX.Layout.isState('keep-controls-visible')) {
        hideControlBar();
        if (menuSlidesDownFromCtaButton) {
            hideMenu();
        }
    } else {
        if (useAppsTrigger) {
            hideAppsTrigger();
            hideControlBar();
        } else {
            hideMenuAndControlBar();
        }
        hideTitle(0.5);
    }
    clearTimer();
}

function clearTimer() {
    clearInterval(intervalHandle);
    intervalHandle = null;
}

function initTimer() {
    if ((!VBX.Layout.isState('touchscreen') || VBX.Layout.isState('iphone'))) {
        return;
    }
    clearTimer();
    gotoStage1();
    if (!VBX.Layout.isState('keep-controls-visible')) {
        VBX.Layout.removeStateClasses('mouseover');
    }
    if (intervalHandle != null) {
        clearTimer();
    }
    intervalHandle = setInterval(function () {
        switch (currentStage) {
            case 1:
                if (menuSlidesDownFromCtaButton) {
                    gotoStage3();
                } else {
                    gotoStage2();
                }
                break;
            case 2:
                gotoStage3();
                break;
        }
    }, 2000);
};

function controlsExist() {
    // controls don't exist for edgetoedge poster-only players
    return (VBX.select('#video1 .vjs-control-bar').length() > 0 && (!VBX.Layout.isState('novideo-tech') || !edgeToEdge));
}

function updateCtaButtonMenuContainer(opt_size) {
    //    if (VBX.ok(opt_size))
    //        console.log('hiding ctaButtonMenuContainer');
    //    else console.log('showing ctaButtonMenuContainer');
    var ctaButtonMenuContainerElement = document.querySelector('#cta-button-menu-container');
    var menuTop = showTitleBar ? VBX.select('#title1').getSize().height + 10 : 10;
    var controlsHeight = controlsExist() ? VBX.select('#video1 .vjs-control-bar').getSize().height : 0;
    var videoHeight = VBX.select('#video1').getSize().height;
    ctaButtonMenuContainerElement.style.height = VBX.ok(opt_size) ? opt_size + 'px' : videoHeight - menuTop - controlsHeight - 10 + 'px';
}

function updateToolTip() {
    // update the width of the tooltip to 75% of the video width
    var toolTipWidth = Math.floor((VBX.select('#video1').getSize().width - VBX.select('#cta-button').getSize().width) * 0.75);
    var toolTipElements = document.querySelectorAll('.tooltip');
    for (var i = 0; i < toolTipElements.length; i++) {
        toolTipElements[i].style.width = toolTipWidth + 'px';
    }
}

function updateMenu() {
    if (menuOnBottom) {
        var availableMenuWidth = VBX.select('#video1').getSize().width;
        var menuElement = document.querySelector('#menu1');
        menuElement.style.width = availableMenuWidth;
        var bottomLogoHeight = document.querySelector('#bottomLogo img').offsetHeight;
        var menuBottom = bottomLogoHeight;
        document.querySelector('#menu1').style.bottom = menuBottom + 'px';
        var menuItemWidth = VBX.Layout.getMenuWidestItemWidth('menu1'); //calculate max width of all menu items.
        var maxItems = Math.max(1, Math.floor(availableMenuWidth / menuItemWidth));
        VBX.Layout.setMenuMaxItems('menu1', maxItems);
        colorMenuButtons();
        if (!VBX.Layout.isState('apps1-item-selected')) {
            // if the menu was resized and hidden, we need to reposition it off to the left according to its new size
            hideMenu();
        }


    } else {
        var totalMenuItemHeight = VBX.Layout.isState('touchscreen') ? menuItemHeightTouch + menuItemBottomMargin : menuItemHeight + menuItemBottomMargin;

        var menuTop;
        if (showTitleBar) {
            menuTop = VBX.select('#title1').getSize().height + 10;
        } else {
            menuTop = 10;
        }

        var videoHeight = VBX.select('#video1').getSize().height;
        var controlsHeight = controlsExist() ? VBX.select('#video1 .vjs-control-bar').getSize().height : 0;
        var availableMenuHeight = videoHeight - menuTop - controlsHeight - 10;
        var maxItems = Math.max(1, Math.floor(availableMenuHeight / totalMenuItemHeight));
        VBX.Layout.setMenuMaxItems('menu1', maxItems);
        // call it here because setMenuMaxItems rebuilds the DOM
        updateToolTip();
        if (menuSlidesDownFromCtaButton) {
            var ctaButton = document.querySelector('#cta-button');
            var ctaButtonWidth = ctaButton.offsetWidth;
            var menu = document.querySelector('#menu1');
            menu.style.width = ctaButtonWidth.toString() + 'px';
        } else {
            // only set menu top if it's sliding in from the side
            VBX.Layout.setMenuTop('menu1', menuTop.toString() + "px");
        }
    }
}

function initAppsTrigger() {

    if (useAppsTrigger) {
        var appsTriggerElement = document.getElementById('appsTrigger');
        if (VBX.Layout.isState('mraid-ad')) {
            // mraid requires https for the apps trigger
            appsTriggerElement.src = appsTriggerElement.src.replace('http://', 'https://');
        }

        /*
          var parent = appsTriggerElement.parentElement;
          var parentHeight = parent.clientHeight;
          var imageSrc = appsTriggerElement.style.backgroundImage;
          imageSrc = imageSrc.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
          var image = new Image();
          image.src = imageSrc;
          image.onload = function (e) {
              var width = image.width;
              var height = image.height;
              appsTriggerElement.style.height = height + 'px';
              appsTriggerElement.style.width = width + 'px';
          }
        */
        VBX.listen(appsTriggerElement, ['click'], function (e) {
            //console.log('appsTriggerElement received event: ' + e.type);
            var appId = VBX.Layout.getMenuAppIdByIndex('menu1', 0);
            VBX.Layout.selectApp(appId);
        });
    }
}

function getMenuNumApps(id) {
    return VBX.Layout.getMenuNumApps(id);
}

function updateVideoSize() {
    var backgroundImageUrl = VBX.Layout.config('backgroundImage');
    var hasBackgroundImage = !VBX.empty(backgroundImageUrl);
    var bottomLogoHeight = document.querySelector('#bottomLogo img').offsetHeight;
    var bottomSliceHeight = bottomLogoHeight == 0 ? padding.bottom : hasBackgroundImage ? bottomLogoHeight : bottomLogoHeight + bottomLogoPadding.top + bottomLogoPadding.bottom;

    var bodyHeight = VBX.select('body').getSize().height;
    var bodyWidth = VBX.select('body').getSize().width;

    var controlsHeight = controlsExist() ? VBX.select('#video1 .vjs-control-bar').getSize().height : 0;

    var videoTop = (edgeToEdge ? 0 : actualTitleBarHeight);
    var videoElement = document.querySelector('#video1');
    videoElement.style.height = ((bodyHeight - videoTop - bottomSliceHeight - (edgeToEdge || VBX.Layout.isState('iphone') ? 0 : controlsHeight)) + 'px');
    videoElement.style.width = (bodyWidth - padding.left - padding.right) + 'px';
    videoElement.style.left = (padding.left) + 'px';
    videoElement.style.top = videoTop + 'px';

    updateYoutubeTouchTrapperSize();

    if (showTitleBar) {
        appsTop = VBX.select('#title1').getSize().height;
    } else {
        appsTop = padding.top;
    }

    var appsElement = document.querySelector('#apps1');
    appsWidth = (bodyWidth - padding.left - padding.right);
    if (menuOnBottom) {
        var menuHeight = getMenuNumApps('menu1') > 1 ? menuItemHeight : 0;
        appsHeight = (bodyHeight - bottomSliceHeight - appsTop - menuHeight);
    } else {
        appsHeight = (bodyHeight - bottomSliceHeight - appsTop);
    }
    appsElement.style.width = appsWidth + 'px';
    appsElement.style.height = appsHeight + 'px';
    appsElement.style.left = (padding.left) + 'px';
    appsElement.style.top = (appsTop) + 'px';

    resizeAppIframes();

    var background = document.querySelector('#background');
    if (background != null) {
        background.style.height = (bodyHeight) + 'px';
        background.style.display = edgeToEdge ? 'none' : 'block';
    }

    if (!edgeToEdge) {
        if (!hasBackgroundImage) {
            background.style.borderImage = null;
            background.style.borderWidth = null;
            background.style.borderImageWidth = null;
        } else {
            background.style.borderWidth = '39px 5px ' + bottomSliceHeight + 'px 5px';
            background.style.borderImage = 'url("' + backgroundImageUrl + '") 39 5 ' + bottomSliceHeight + ' 5 stretch';
            background.style.borderImageWidth = background.style.borderWidth;

            if (!VBX.supports('borderImage')) {
                background.style.backgroundImage = backgroundImageUrl;
                background.style.backgroundSize = '100% 100%';
                background.style.padding = '39px 5px ' + bottomSliceHeight + 'px 5px';
            }
        }
    }

    document.querySelector('#rollPrompt').style.left = bodyWidth + 'px';

    if (window.hasOwnProperty("updateVideoSizeHook")) {
        window["updateVideoSizeHook"]({
            bodyHeight: bodyHeight,
            videoTop: videoTop,
            videoHeight: VBX.select('#video1').getSize().height
        });
    }
}

//function logStack() {
//    var e = new Error('dummy');
//    var stack = e.stack.replace(/^[^\(]+?[\n$]/gm, '')
//        .replace(/^\s+at\s+/gm, '')
//        .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
//        .split('\n');
//    console.log(stack);
//    console.log(hideMenuCounter++);
//}

function hideMenu() {
    if (menuPeek && !VBX.Layout.isState('apps1-item-selected')) {
        showMenuMinimized();
    }
    else if (VBX.Layout.isState('keep-controls-visible') && !VBX.Layout.isState('apps1-item-selected') && !menuSlidesDownFromCtaButton) {
        gotoStage2();
    }
    else if (useAppsTrigger) {
        var $menu = VBX.select('#menu1');
        var w = Math.ceil($menu.getSize().width) + 1;
        TweenLite.to($menu.first(), AppAnimationDuration, { left: -w, ease: Cubic.easeIn });
        TweenLite.to($menu.first(), AppAnimationDuration, { right: w, ease: Cubic.easeIn });
    }
    else if (menuSlidesDownFromCtaButton) {
        var $menu = VBX.select('#menu1');
        var h = Math.ceil($menu.getSize().height) + 1;
        var titleBar = document.querySelector('#title1');
        var titleBottom = titleBar.offsetTop + titleBar.offsetHeight;
        var ctaButton = document.querySelector('#cta-button');
        var ctaButtonBottom = ctaButton.offsetTop + ctaButton.offsetHeight;
        TweenLite.to($menu.first(), 0.5, { top: titleBottom - ctaButtonBottom - h, ease: Cubic.easeIn, onComplete: onHideMenuComplete });
    }
    else {
        var $menu = VBX.select('#menu1');
        var w = Math.ceil($menu.getSize().width) + 1;
        TweenLite.to($menu.first(), 0.5, { right: -w, ease: Cubic.easeIn });
    }
}

function onHideMenuComplete() {
    // when menu is finished being hidden, change height of cta-button-menu-container
    var ctaButton = document.querySelector('#cta-button');
    updateCtaButtonMenuContainer(ctaButton.clientHeight);
}

function hideAppsTrigger() {
    var $appsTrigger = VBX.select('#appsTrigger');
    var w = Math.ceil($appsTrigger.getSize().width) + 1;
    TweenLite.to($appsTrigger.first(), 0.5, { left: -w, ease: Cubic.easeIn });
}

function resizeAppIframes() {
    // Resize all app iframes explicitly. Must be explicit for scrolling in iOs.
    for (var i = 0; i < appIframes.length; ++i) {
        resizeAppIframe(appIframes[i]);

    }
}

function resizeAppIframe(iframe) {
    if (VBX.ok(appsWidth) && VBX.ok(appsHeight)) {
        iframe.style.width = appsWidth + 'px';
        iframe.style.height = appsHeight + 'px';
    }
}


function onAppIframeCreated(iframe) {
    appIframes.push(iframe);
    resizeAppIframe(iframe);
}