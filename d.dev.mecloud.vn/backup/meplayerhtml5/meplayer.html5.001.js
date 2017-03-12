 (function(w,d){
     if(w.MePlayerHTML5) return;
     var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            PREROLL = "pre", MIDROLL = "mid", POSTROLL = "post",
            GOOGLE_IMA = "ima", VAST = "vast",
            EVENT = {
                AD_COUNTDOWN: "MEME.adTimeCountDown",
                AD_SKIPCOUNTDOWN: "MEME.adSkipCountDown",
                PLAY: "MEME.play",
                PAUSE: "MEME.pause",
                SEEK: "MEME.seek",
                PLAYING: "MEME.playing",
                FULLSCREEN: "MEME.fullscreenOn",
                EXIT_FULLSCREEN: "MEME.fullscreenOff",
                CLICK: "MEME.click",
                MOVE: "MEME.move"
            },
    COMP_EVENT = {
        SHOW: "MEME.show",
        HIDE: "MEME.hide"
    }, VideoPlayer = {
        VERSION: "CloudVideoPlayerVersion100"
    },template=    '<div class="mep-html-box" style="display:none;"> <video class="mep-video-stage" src="" controls="false"></video> <div class="mep-ctr"> <div style="background-color: #333; position: absolute; width: 100%; left: 0; height: 30px; bottom: 0;"> <div class="mep-btn-play mep-controls mep-status-active"> <div class="mep-playing" > <svg version="1.1" id="play" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve"> <path d="M1.002,15.381c0,2.818,3.19,1.062,3.19,1.062s10.62-5.268,10.624-5.312c4.798-1.968,0-4.251,0-4.251s0,0-10.624-5.312c-3.398-1.699-3.19,1.062-3.19,1.062L1.002,15.381L1.002,15.381z"></path> </svg> </div><div class="mep-pause" > <svg version="1.1" id="pause" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve"> <path d="M5.5,17h-1C3.672,17,3,16.328,3,15.5v-13C3,1.672,3.672,1,4.5,1h1c0.829,0,1.499,0.672,1.499,1.5v13C6.999,16.328,6.329,17,5.5,17L5.5,17z M12.5,17h-1c-0.828,0-1.499-0.672-1.499-1.501V2.5c0-0.828,0.67-1.5,1.499-1.5h1C13.328,1,14,1.672,14,2.5v13C14,16.328,13.328,17,12.5,17L12.5,17z"></path> </svg> </div></div><div class="mep-btn-volume mep-controls mep-status-mute"> <div title="Âm thanh: Đang bật" class="mep-unmute" > <svg version="1.1" id="volume" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve"> <path d="M11.147,16.377v-1.706c2.615-0.15,4.696-2.359,4.696-5.089c0-2.728-2.082-4.937-4.696-5.088V2.789C14.676,2.94,17.5,5.912,17.5,9.583C17.499,13.254,14.675,16.225,11.147,16.377L11.147,16.377z M6.912,17.046c0,0-1.019-1.754-3.176-3.199c-1.826-1.223-3.197-1.053-3.176-1.066c0,0.016-1.059-0.154-1.059-1.066c0-1.552,0-3.204,0-4.266c0-0.777,1.059-1.066,1.059-1.066s1.33-0.005,3.176-1.066c1.166-1.03,2.435-2.437,3.176-3.199c3.291-1.892,3.176,1.066,3.176,1.066V15.98C10.088,18.548,6.912,17.046,6.912,17.046L6.912,17.046z M14.962,9.582c0,1.885-1.483,3.412-3.314,3.412c-0.183,0-0.345-0.028-0.501-0.057v-1.814c0.098,0.102,0.251,0.164,0.501,0.164c0.915,0,1.656-0.762,1.656-1.706c0-0.941-0.741-1.706-1.656-1.706c-0.251,0-0.403,0.062-0.501,0.164V6.227c0.157-0.029,0.318-0.057,0.501-0.057C13.479,6.171,14.962,7.699,14.962,9.582L14.962,9.582z"></path> </svg> </div><div title="Âm thanh: Đang tắt" class="mep-mute"> <svg version="1.1" id="volume-mute" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve"> <path d="M16.936,12.319l-5.25-5.286l1.063-1.215l5.25,5.286L16.936,12.319L16.936,12.319z M16.936,12.319l-5.25-5.286l1.063-1.215l5.25,5.286L16.936,12.319L16.936,12.319z M12.75,12.319l-1.063-1.216l5.25-5.286L18,7.033L12.75,12.319L12.75,12.319zM12.75,12.319l-1.063-1.216l5.25-5.286L18,7.033L12.75,12.319L12.75,12.319z M7.438,16.506c0,0-1.022-1.748-3.188-3.188c-1.833-1.219-3.208-1.05-3.188-1.063C1.063,12.272,0,12.103,0,11.194c0-1.547,0-3.193,0-4.251C0,6.146,1.063,5.88,1.063,5.88S2.396,5.875,4.25,4.818C5.42,3.791,6.694,2.389,7.438,1.63c3.302-1.886,3.188,1.062,3.188,1.062v12.751C10.625,18.002,7.438,16.506,7.438,16.506L7.438,16.506z"></path> </svg> </div><div class="mep-volume-panel" id="id-drap-volume" role="slider" aria-valuemin="0" aria-valuemax="100" tabindex="6200" aria-valuenow="100" aria-valuetext="100% âm lượng đã tắt tiếng"> <div class="mep-volume-slider" draggable="true" > <div class="mep-volume-slider-foreground" style="left: 0px;"> </div></div></div></div><div class="mep-btn-time-line mep-controls"> <span class="mep-label-played">00:00</span>/<span class="mep-label-total">00:00</span> </div><div class="controls mep-btn-fullscreen mep-controls"> <div class="mep-btn-action-fullscreen" title="Xem toàn màn hình"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="18px" viewBox="0 0 20 18" enable-background="new 0 0 20 18" xml:space="preserve"> <path d="M19.5,3h-4c-0.276,0-0.499-0.223-0.499-0.499v-1C15.001,1.224,15.224,1,15.5,1h2.501c1.338,0,2,0.849,2,2C20,3.276,19.776,3,19.5,3L19.5,3z M19.5,5.999h-1c-0.276,0-0.499-0.223-0.499-0.499V3h2V5.5C20,5.776,19.776,5.999,19.5,5.999L19.5,5.999z M18.001,17H15.5c-0.276,0-0.499-0.225-0.499-0.501v-1c0-0.276,0.223-0.499,0.499-0.499h4C19.776,15,20,14.724,20,15C20,16.151,19.338,17,18.001,17L18.001,17z M18.001,15V12.5c0-0.276,0.223-0.499,0.499-0.499h1c0.276,0,0.501,0.223,0.501,0.499V15H18.001L18.001,15z M4.501,3H3C2.724,3,0,3.276,0,3c0-1.151,0.662-2,2-2h2.501C4.777,1,5,1.224,5,1.501v1C5,2.777,4.777,3,4.501,3L4.501,3z M1.501,5.999h-1C0.225,5.999,0,5.776,0,5.5V3h2V5.5C2,5.776,1.777,5.999,1.501,5.999L1.501,5.999z M4.501,17H2c-1.338,0-2-0.849-2-2c0-0.276,0.225,0,0.501,0h4C4.777,15,5,15.223,5,15.5v1C5,16.776,4.777,17,4.501,17L4.501,17z M0,15V12.5c0-0.276,0.225-0.499,0.501-0.499h1C1.777,12.001,2,12.224,2,12.5V15L0,15.5V15z M14.001,13.001H6c-1.105,0-2-0.895-2-2V6.999c0-1.105,0.895-2,2-2h8.001c1.105,0,2,0.895,2,2v4.001C16.001,12.105,15.105,13.001,14.001,13.001L14.001,13.001z"></path> </svg> </div><div class="mep-btn-action-exitfullscreen" title="Xem toàn màn hình" style="display: none;"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="18px" viewBox="0 0 20 18" enable-background="new 0 0 20 18" xml:space="preserve"> <path d="M12.999,12.001H7c-1.105,0-2-0.897-2-2.002v-2c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v2C14.999,11.104,14.104,12.001,12.999,12.001L12.999,12.001z M19.5,5.999h-2.501c-1.338,0-2-0.849-2-2c0-0.276,0.225,0,0.501,0h4C19.776,3.999,20,4.224,20,4.5v1C20,5.776,19.776,5.999,19.5,5.999L19.5,5.999z M14.999,3.999V1.501C14.999,1.224,15.224,1,15.5,1h1c0.276,0,0.499,0.225,0.499,0.501v2.499H14.999L14.999,3.999z M3,5.999H0.499C0.223,5.999,0,5.776,0,5.5v-1c0-0.276,0.223-0.501,0.499-0.501h4c0.276,0,0.501-0.276,0.501,0C5,5.15,4.338,5.999,3,5.999L3,5.999z M3,3.999V1.501C3,1.224,3.223,1,3.499,1h1C4.775,1,5,1.224,5,1.501v2.499H3L3,3.999z M4.499,14.001h-4C0.223,14.001,0,13.776,0,13.5v-1c0-0.276,0.223-0.499,0.499-0.499H3c1.338,0,2,0.847,2,2C5,14.277,4.775,14.001,4.499,14.001L4.499,14.001z M4.499,17h-1C3.223,17,3,16.776,3,16.499v-2.499h2v2.499C5,16.776,4.775,17,4.499,17L4.499,17z M15.502,14.001c-0.276,0-0.501,0.276-0.501,0c0-1.153,0.662-2,2-2h2.501c0.276,0,0.499,0.223,0.499,0.499v1c0,0.276-0.223,0.501-0.499,0.501H15.502L15.502,14.001z M15.502,17c-0.276,0-0.501-0.225-0.501-0.501v-2.499h2v2.499c0,0.276-0.223,0.501-0.499,0.501H15.502L15.502,17z"></path> </svg> </div></div><div class="mep-btn-meicon mep-controls"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20" height="18" viewBox="0 0 20.134 18" enable-background="new 0 0 20.134 18" xml:space="preserve"> <g> <path d="M17.409,1.97c-0.216-0.128-0.449-0.23-0.697-0.3c-0.258-0.073-0.529-0.115-0.81-0.115c-1.454,0-2.661,1.049-2.913,2.43c-0.481-0.855-1.202-1.559-2.073-2.015c-0.216-0.128-0.449-0.23-0.697-0.3C9.962,1.597,9.691,1.555,9.41,1.555c-1.433,0-2.627,1.017-2.903,2.367C6.026,3.096,5.32,2.415,4.469,1.97c-0.216-0.128-0.449-0.23-0.697-0.3c-0.258-0.073-0.529-0.115-0.81-0.115C1.326,1.555,0,2.882,0,4.518c0,0.253,0.035,0.498,0.095,0.733c0.356-0.152,0.747-0.237,1.158-0.237c1.383,0,2.542,0.95,2.868,2.232c0.06,0.234,0.095,0.478,0.095,0.731c0,0.01-0.001,0.02-0.002,0.03v3.077c0.001-0.001,0.003-0.001,0.004-0.002v2.408l0.002,0.003c0.002,1.635,1.336,2.951,2.972,2.951l0.003-9.611C7.193,6.725,7.193,6.589,7.193,6.465c0-0.473-0.066-0.93-0.187-1.364C7.229,5.046,7.46,5.014,7.7,5.014c1.383,0,2.542,0.95,2.868,2.232c0.06,0.234,0.095,0.478,0.095,0.731c0,0.01-0.001,0.02-0.002,0.03v3.077c0.001-0.001,0.003-0.001,0.004-0.002v2.408l0.002,0.003c0.002,1.635,1.336,2.951,2.972,2.951l0.003-9.611C13.64,6.725,13.64,6.589,13.64,6.465c0-0.469-0.065-0.922-0.184-1.353c0.236-0.061,0.482-0.097,0.737-0.097c1.383,0,2.542,0.95,2.868,2.232c0.06,0.234,0.095,0.478,0.095,0.731c0,0.01-0.001,0.02-0.002,0.03v3.077c0.001-0.001,0.003-0.001,0.004-0.002v2.408l0.002,0.003c0.002,1.635,1.336,2.951,2.972,2.951l0.003-9.611c-0.002-0.109-0.002-0.244-0.002-0.369C20.132,4.512,19.027,2.818,17.409,1.97z"></path> <g> <path d="M3.499,6.39C3.5,6.347,3.501,6.303,3.503,6.26C3.499,6.291,3.497,6.322,3.497,6.353C3.497,6.366,3.499,6.378,3.499,6.39z"></path> <path d="M9.992,6.39c0.001-0.044,0.002-0.087,0.003-0.13C9.992,6.291,9.99,6.322,9.99,6.353C9.99,6.366,9.991,6.378,9.992,6.39z"></path> <path d="M17.409,1.97c-0.216-0.128-0.449-0.23-0.697-0.3c-0.258-0.073-0.529-0.115-0.81-0.115c-1.454,0-2.661,1.049-2.913,2.43c-0.481-0.855-1.202-1.559-2.073-2.015c-0.216-0.128-0.449-0.23-0.697-0.3C9.962,1.597,9.691,1.555,9.41,1.555c-1.433,0-2.627,1.017-2.903,2.367C6.026,3.096,5.32,2.415,4.469,1.97c-0.216-0.128-0.449-0.23-0.697-0.3c-0.258-0.073-0.529-0.115-0.81-0.115C1.326,1.555,0,2.882,0,4.518c0,0.253,0.035,0.498,0.095,0.733c0.356-0.152,0.747-0.237,1.158-0.237c1.383,0,2.542,0.95,2.868,2.232c0.06,0.234,0.095,0.478,0.095,0.731c0,0.01-0.001,0.02-0.002,0.03v3.077c0.001-0.001,0.003-0.001,0.004-0.002v2.408l0.002,0.003c0.002,1.635,1.336,2.951,2.972,2.951l0.003-9.611C7.193,6.725,7.193,6.589,7.193,6.465c0-0.473-0.066-0.93-0.187-1.364C7.229,5.046,7.46,5.014,7.7,5.014c1.383,0,2.542,0.95,2.868,2.232c0.06,0.234,0.095,0.478,0.095,0.731c0,0.01-0.001,0.02-0.002,0.03v3.077c0.001-0.001,0.003-0.001,0.004-0.002v2.408l0.002,0.003c0.002,1.635,1.336,2.951,2.972,2.951l0.003-9.611C13.64,6.725,13.64,6.589,13.64,6.465c0-0.469-0.065-0.922-0.184-1.353c0.236-0.061,0.482-0.097,0.737-0.097c1.383,0,2.542,0.95,2.868,2.232c0.06,0.234,0.095,0.478,0.095,0.731c0,0.01-0.001,0.02-0.002,0.03v3.077c0.001-0.001,0.003-0.001,0.004-0.002v2.408l0.002,0.003c0.002,1.635,1.336,2.951,2.972,2.951l0.003-9.611c-0.002-0.109-0.002-0.244-0.002-0.369C20.132,4.512,19.027,2.818,17.409,1.97z"></path> </g> <path d="M3.499,6.39C3.5,6.347,3.501,6.303,3.503,6.26C3.499,6.291,3.497,6.322,3.497,6.353C3.497,6.366,3.499,6.378,3.499,6.39z"></path> <path d="M9.992,6.39c0.001-0.044,0.002-0.087,0.003-0.13C9.992,6.291,9.99,6.322,9.99,6.353C9.99,6.366,9.991,6.378,9.992,6.39z"></path> </g> </svg> </div><div title="Đổi chất lượng video" class="mep-btn-quality mep-controls"> <svg version="1.1" id="setting" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve"> <path d="M15.932,10.6H14.64c-0.125,0.441-0.297,0.858-0.515,1.251l0.908,0.906c0.418,0.42,0.418,1.097,0,1.517l-0.758,0.758c-0.42,0.418-1.099,0.418-1.517,0l-0.906-0.908c-0.393,0.218-0.812,0.391-1.251,0.515v1.293c0,0.59-0.478,1.068-1.068,1.068H8.466C7.876,17,7.4,16.522,7.4,15.932V14.64c-0.457-0.129-0.889-0.31-1.292-0.54l-0.933,0.933c-0.418,0.418-1.097,0.418-1.515,0l-0.758-0.758c-0.42-0.42-0.42-1.097,0-1.517L3.85,11.81c-0.208-0.38-0.37-0.786-0.488-1.209H2.066C1.478,10.6,1,10.122,1,9.532V8.466C1,7.878,1.478,7.4,2.066,7.4H3.36c0.125-0.441,0.295-0.86,0.513-1.251L2.901,5.174c-0.42-0.418-0.42-1.097,0-1.515l0.758-0.758c0.418-0.42,1.097-0.42,1.515,0l0.975,0.973C6.54,3.655,6.959,3.485,7.4,3.36V2.066C7.4,1.478,7.876,1,8.466,1h1.066c0.59,0,1.068,0.478,1.068,1.066V3.36c0.424,0.118,0.829,0.281,1.209,0.488L12.757,2.9c0.418-0.42,1.097-0.42,1.517,0l0.758,0.758c0.418,0.418,0.418,1.097,0,1.515l-0.933,0.933c0.229,0.403,0.411,0.835,0.54,1.293h1.293C16.522,7.4,17,7.878,17,8.466v1.066C17,10.122,16.522,10.6,15.932,10.6L15.932,10.6z M9,5.8C7.232,5.8,5.8,7.232,5.8,9c0,1.766,1.432,3.2,3.2,3.2c1.766,0,3.2-1.434,3.2-3.2C12.2,7.232,10.766,5.8,9,5.8L9,5.8z"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8,10.8h-1.454c-0.141,0.496-0.333,0.967-0.58,1.406l1.021,1.021c0.472,0.472,0.472,1.235,0,1.707l-0.852,0.852c-0.472,0.472-1.235,0.472-1.707,0l-1.021-1.019c-0.439,0.245-0.911,0.437-1.406,0.578V16.8C10.8,17.463,10.263,18,9.599,18H8.401C7.737,18,7.2,17.463,7.2,16.8v-1.454c-0.513-0.146-1-0.35-1.454-0.607l-1.048,1.048c-0.472,0.472-1.235,0.472-1.707,0l-0.852-0.852c-0.472-0.472-0.472-1.235,0-1.707l1.067-1.067c-0.233-0.427-0.415-0.883-0.551-1.36H1.2C0.537,10.8,0,10.263,0,9.599V8.401C0,7.737,0.537,7.2,1.2,7.2h1.454c0.141-0.496,0.334-0.967,0.58-1.408L2.139,4.698c-0.472-0.472-0.472-1.235,0-1.707l0.852-0.852c0.472-0.472,1.235-0.472,1.707,0l1.096,1.096C6.233,2.988,6.706,2.795,7.2,2.655V1.2C7.2,0.537,7.737,0,8.401,0h1.199C10.263,0,10.8,0.537,10.8,1.2v1.454c0.477,0.135,0.935,0.317,1.36,0.551l1.067-1.067c0.472-0.472,1.235-0.472,1.707,0l0.852,0.852c0.472,0.472,0.472,1.235,0,1.707l-1.048,1.048C14.995,6.2,15.199,6.687,15.345,7.2H16.8C17.463,7.2,18,7.737,18,8.401v1.199C18,10.263,17.463,10.8,16.8,10.8L16.8,10.8z M9.001,5.399c-1.99,0-3.6,1.612-3.6,3.6c0,1.99,1.611,3.6,3.6,3.6c1.988,0,3.598-1.611,3.598-3.6C12.599,7.011,10.989,5.399,9.001,5.399L9.001,5.399z"></path> </svg> </div></div><div class="mep-comp-timeduration"> <div class="mep-time-duration-loaded" style="width:0%;"></div></div></div><div class="mep-btn-quality-list" style="display: none;"></div><div class="mep-overlay-player"> <div class="mep-btn-play-large"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 18 18" enable-background="new 0 0 18 18" xml:space="preserve"><path d="M1.002,15.381c0,2.818,3.19,1.062,3.19,1.062s10.62-5.268,10.624-5.312c4.798-1.968,0-4.251,0-4.251s0,0-10.624-5.312c-3.398-1.699-3.19,1.062-3.19,1.062L1.002,15.381L1.002,15.381z"></path></svg></div><div class="title-video-player"><span class="mep-video-title"></span></div></div><div class="mep-hover-box"> <div class="mep-hover-duration">00:00</div></div><div class="mep-contextmenu"> </div><div class="mep-error-message"> </div><div class="mep-video-ads" style="display:none;"></div></div>',
    css="video::-webkit-media-controls{display:none!important}.mep-html-box ::-webkit-media-controls,.mep-html-box ::-webkit-media-controls-enclosure,.mep-html-box video::media-controls{display:none!important}.mep-html-box{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;-moz-box-sizing:border-box;width:100%;height:100%;position:absolute!important;padding-bottom:30px!important;overflow:hidden}.mep-html-box video.mep-video-stage{background:#000;height:100%;width:100%}.mep-html-box svg{fill:currentColor!important}.mep-html-box .mep-ctr{background:0 0;height:36px;bottom:0;width:100%;position:absolute;z-index:2147483647;left:0;overflow:hidden}.mep-html-box .mep-btn-fullscreen,.mep-html-box .mep-btn-meicon,.mep-html-box .mep-btn-quality,.mep-html-box .mep-comp-timeduration{float:right}.mep-html-box .mep-btn-play,.mep-html-box .mep-btn-time-line,.mep-html-box .mep-btn-volume{float:left}.mep-html-box .mep-btn-play{width:15px}.mep-html-box .mep-btn-play .mep-playing{display:none}.mep-html-box .mep-btn-play .mep-pause,.mep-html-box .mep-btn-play.mep-status-active .mep-playing{display:block}.mep-html-box .mep-btn-play.mep-status-active .mep-pause,.mep-html-box .mep-btn-volume .mep-volume-panel{display:none}.mep-html-box .mep-btn-volume{width:22px}.mep-html-box .mep-btn-volume:hover{width:78px}.mep-html-box .mep-btn-volume:hover .mep-volume-panel{display:block}.mep-html-box .mep-btn-volume .mep-mute{display:none;float:left}.mep-html-box .mep-btn-volume .mep-unmute{display:block;float:left}.mep-html-box .mep-btn-volume.mep-status-mute .mep-mute{display:block}.mep-html-box .mep-btn-volume.mep-status-mute .mep-unmute{display:none}.mep-volume-panel{-ms-touch-action:none;display:block;width:51px;overflow:hidden;-moz-transition:width .5s ease-out .2s;-webkit-transition:width .5s ease-out .2s;transition:width .5s ease-out .2s;float:left}.mep-volume-panel:focus{outline:0}.mep-volume-slider{position:relative;display:block;height:23px;width:51px;float:left;margin:0;padding:0;cursor:pointer;overflow:hidden}.mep-volume-slider-foreground{position:absolute;bottom:6.5px;height:14px;width:4px;background:#aaa}.mep-volume-slider-foreground:before{position:absolute;top:5px;left:-55px;display:block;width:55px;height:4px;background:#b91f1f;content:''}.mep-volume-slider-foreground:after{position:absolute;top:5px;display:block;width:55px;height:4px;content:'';background:#777;left:4px}.mep-html-box .mep-btn-time-line{cursor:default}.mep-html-box .mep-btn-time-line:hover{color:#aaa}.mep-html-box .mep-btn-fullscreen,.mep-html-box .mep-btn-meicon,.mep-html-box .mep-btn-quality{width:15px}.mep-html-box .mep-ctr .mep-controls{color:#aaa;height:100%;margin:6px 7px;cursor:pointer;display:inline-block}.mep-html-box .mep-ctr .mep-controls:hover{color:#fff}.mep-html-box .mep-comp-timeduration{position:absolute;height:3px;width:100%;background:#aaa;bottom:30px;-webkit-transition:height .5s,top .5s;transition:height .5s,top .5s}.mep-html-box .mep-comp-timeduration.mep-rate-hover{height:6px}.mep-html-box .mep-comp-timeduration .mep-time-duration-loaded{height:100%;display:block;background:#3EA9F5}.mep-html-box .mep-overlay-player{background:url(http://player.tuyenbui.com/images/tbg.png);height:100%;width:100%;position:absolute;top:0;bottom:0}.mep-html-box .mep-btn-play-large{cursor:pointer!important;border:3px solid #3da6f1!important;width:90px!important;height:70px!important;background-color:rgba(36,143,219,.9)!important;line-height:85px!important;text-align:center!important;box-shadow:0 0 50px rgba(255,255,255,.25)!important;-webkit-box-shadow:0 0 50px rgba(255,255,255,.25)!important;-moz-box-shadow:0 0 50px rgba(255,255,255,.25)!important;-ms-box-shadow:0 0 50px rgba(255,255,255,.25)!important;border-radius:20px!important;-webkit-border-radius:20px!important;-moz-border-radius:20px!important;-ms-border-radius:20px!important;-ms-transition:all 200ms ease-in!important;transition:all 200ms ease-in!important;color:#fff;margin:10px 15px 0 10px;float:left;font-size:18px}.mep-html-box .mep-btn-play-large,.mep-html-box .title-video-player span{-webkit-transition:all 200ms ease-in!important;-moz-transition:all 200ms ease-in!important}.mep-html-box .mep-btn-play-large:hover{background-color:#3ea9f5!important;border-color:#fff!important;box-shadow:0 0 70px rgba(255,255,255,1)!important;-webkit-box-shadow:0 0 70px rgba(255,255,255,1)!important;-moz-box-shadow:0 0 70px rgba(255,255,255,1)!important;-ms-box-shadow:0 0 70px rgba(255,255,255,1)!important}.mep-html-box .title-video-player{margin:10px}.mep-html-box .title-video-player span{font-family:arial!important;margin:0!important;-ms-transition:all 200ms ease-in!important;transition:all 200ms ease-in!important;text-shadow:3px 1px 3px #000!important;-webkit-text-shadow:3px 1px 3px #000!important;-moz-text-shadow:3px 1px 3px #000!important;-ms-text-shadow:3px 1px 3px #000!important;background-color:transparent!important;color:#fff}.mep-html-box .mep-hover-duration{background-color:#000;color:#aaa;font-size:12px;position:absolute;bottom:0}.mep-html-box .mep-hover-box{position:absolute;bottom:38px;left:100px;width:40px;height:80px;display:none}.mep-html-box .mep-contextmenu{background:#fff;position:absolute;border:1px solid #ddd;width:166px;display:none;z-index:2147483647}.mep-html-box .mep-contextmenu a{margin:8px;display:block;color:#555;text-decoration:none}.mep-html-box .mep-error-message{position:absolute;text-align:center;color:#fff}.mep-html-box .mep-btn-quality-list{position:absolute;bottom:32px;background-color:#333;display:none;color:#fff;font-family:arial}.mep-html-box .mep-btn-quality-list>div{padding:5px 19px;text-align:center;white-space:nowrap}.mep-html-box .mep-btn-quality-list>div:hover{color:red;background:#eee;cursor:pointer}.mep-html-box .mep-btn-quality-list>div.active{color:red}@media only screen and (max-device-width:1024px){.mep-html-box .mep-btn-volume{display:none}}.mep-html-box .mep-video-ads{position:absolute;background:#000;left:1px;bottom:80px;right:0;top:0;z-index:2147483647}";
         
 function extend(src, obj) {
        for (var key in obj) {
            src[key] = obj[key];
        }
    }
 function attr(ele, attrName) {
        if (!ele || !ele.attributes[attrName])
            return null;
        return ele.attributes[attrName].value;
    }
    
    function toTimeTemp(number) {
        var date = new Date(number * 1000);
        var hh = date.getUTCHours();
        var mm = date.getUTCMinutes();
        var ss = date.getSeconds();
        if (isNaN(ss))
            ss = 0;
        if (isNaN(hh))
            hh = 0;
        if (isNaN(mm))
            mm = 0;
        if (hh < 10) {
            hh = "0" + hh;
        }
        if (mm < 10) {
            mm = "0" + mm;
        }
        if (ss < 10) {
            ss = "0" + ss;
        }

        if (hh === "00")
            return mm + ":" + ss;
        return hh + ":" + mm + ":" + ss;
    }
    var MeList=function(parent){
        this.ele=parent;
    };
    MeList.prototype={
        ele:null,
        _list:[],
        add:function(el){
            this.ele.appendChild(el);
            this._list.push(el);
        },
        remove:function(el){
            this.ele.removeChild(el);
            var i = this._list.indexOf(el);
            if(i != -1) {
                    this._list.splice(i, 1);
            }
            
        },
        active:function(ele){
            this._list.forEach(function(o){o.classList.remove("active");});
            ele.classList.add("active");
        },
        activeAt: function (index) {
            if (this._list[index]) {
                this._list.forEach(function(o){o.classList.remove("active");});
                this._list[index].classList.add("active");
            }
        }
    };
    w.loadcss=false;
    var MePlayerHTML5=function(element,data,parent){
        if(!w.loadcss&&false){
            w.loadcss=true;
            var c=d.createElement("style");
            c.innerHTML=css;
            d.body.appendChild(c);
        }
        this.__handler={};
        this.ele=element;
        //this.ele.innerHTML=template;
        this._ctn=parent;
        this._cfg=data;
        var self=this;
        this.on("ready",function(){
            if(self._cfg.autoplay)
                self.play();
        });
        this.setup();
    };
    MePlayerHTML5.prototype={
        _ctn:null,
        ele:null,
        box:null,
        title:null,
        _cfg:{},
        stage:null,
        ads:null,
        controls:null,
        btnPlay:null,
        btnPause:null,
        btnMute:null,
        btnUnMute:null,
        btnVolume:null,
        volumeSlider:null,
        btnBigPlay:null,
        btnFullScreen:null,
        btnExitFullScreen:null,
        timeLine:null,
        isMute:true,
        hoverBox:null,
        adsmg:{isPlaying:false,disabled:true},
        //__handler:{},
        setup:function(){
            var self=this;
            var config=this._cfg;
              if (config.advertising) {
                w.meplayer.mg.plugin.addPlugin("//imasdk.googleapis.com/js/sdkloader/ima3.js", function () {
                    w.meplayer.mg.plugin.addPlugin(w.meplayer.mg.ads_path, function () {
                        self.ads=self.receiveControl("mep-video-ads",{init:function(element){}});
                        self.init();
                        self.config();
                        
                        self.adsmg=new AdControl(self);
                        if(self.adsmg.pending_play){ 
                            self.adsmg.on("ready",function(){
                                self.trigger("ready");
                            });
                        }else{
                          self.trigger("ready");
                        }
                        
//                        console.log("ready");
                        
//                        if(self._cfg.autoplay){
//                            self.play();
//                        }
                    });
                });

            }else{
                self.init();
                self.config();
                self.trigger("ready");
//                if(self._cfg.autoplay){
//                    self.play();
//                }
            }
            
        },
        config:function(){
            
            var self=this;
            //console.log(self.adsmg);
            var config=this._cfg;
            if(config.sources){
                    //console.log(config.sources);
                    var list=new MeList(self.qualityList);
                    config.sources.forEach(function(s){
                        var e=d.createElement("div");
                        //console.log(s);
                       e.textContent=s.label;
                       e.addEventListener("click",function(){
                           self.changeSource(s.file);
                           list.active(e);
                       });
                       if(s.default) config.file=s.file;
                       list.add(e);
                       //self.qualityList.appendChild(e);
                    });
            }
            if(config.file){
                if(typeof this._cfg.file === "string"){
                    this.stage.src=config.file;
                    this.stage.load();
                }
            }
            //if(!config.title) config.title=config.file;
            if(config.title){
                this.title.setText(config.title);
            }
            if(Array.isArray( config.playlist)){
                this.load(config.playlist); 
                if(typeof config.playlist[0].file === "string"){
                    this.stage.src=config.playlist[0].file;
                    //alert(config.playlist[0].title||config.playlist[0].label);
                    this.title.setText(config.playlist[0].title||config.playlist[0].label);
                    this.stage.load();
                }
            }
            
            
            if (config.ga) {
                w.meplayer.mg.plugin.addPlugin(w.meplayer.mg.ga_path, function () {
                     self._ctn._ga=new MeGATrack(config.ga,self._ctn);
                     self._ctn._ga.init();
                });
            }
            if(config.image){
                //this.btnBigPlay.style.backgroundImage="url('"+config.image+"')";
                this.btnBigPlay.style.backgroundSize="100%";
            }
        },
        init: function(){
            var self=this;
            /***init layout*********/
            var config=this._cfg;
            var ce=this.ele;
            var _padding = 0;
            var pe=d.createElement("div");
           
            ce.style.cssText="";
            
            ce.style.position="relative";
            ce.id=this.ele.id+'_wrapper';
            pe.style.cssText="";
            
            if (!isNaN(config.width))
                ce.style.width=config.width + "px";
            
            else if (typeof config.width==="string"){
                ce.style.width=config.width;
            }
            if (config.aspectration) {
                var split = config.aspectration.split(":");
                var _sw = Number(split[0]);
                var _sh = Number(split[1]);
                if (_sw !== 0) {
                    _padding = _sh / _sw * 100;
                }
            } else {
                if (!isNaN(config.height))
                        ce.style.height=config.height + "px";
                else if (config.height instanceof String)
                    ce.style.height=config.height;
            }
            
//            pad.id=this.id+"-padding";
            if(_padding!==0)
            pe.style.paddingBottom=_padding+"%";
            this.controls=this.receiveControl("mep-ctr",{init:function(element){}});
            ce.style.marginBottom=this.controls.offsetHeight+"px";
            ce.appendChild(pe);
            ce.getElementsByClassName("mep-html-box")[0].style.display="block";
            /************ end init layout *********/
            this.stage=this.receiveControl("mep-video-stage",{init:function(element){
                    var _timeClick=(new Date()).getTime(),clickTiming=0;
                    element.addEventListener("click",function(){
                        var time = (new Date()).getTime();
                        if(time-_timeClick<200){
                            if(self.isFullScreen) self.exitFullScreen();
                            self.requestFullScreen();
                            clearTimeout(clickTiming);
                        }else{
                            _timeClick=time;
                            clickTiming=setTimeout(function(){self.togglePlay();},200)
                        }
                    });
                    var menu=self.receiveControl("mep-contextmenu");
                    var a=d.createElement("a");
                    a.href="http://mecloud.vn/";
                    a.target="_blank";
                    //a.style="display:block;width:100%;";
                    a.textContent="About Meplayer";
                    menu.appendChild(a);
                    self.ele.addEventListener("contextmenu",function(ev){
                        //console.log(ev);
//                        menu.style.position="absolute";
//                        menu.style.top=ev.pageY+"px";// self.isFullScreen?ev.pageY+"px":(ev.pageY-self.box.offsetTop)+"px";
//                        menu.style.left=ev.pageX+"px";//self.isFullScreen?ev.pageX+"px":(ev.pageX-self.box.offsetLeft)+"px";
//                        menu.style.display="block";
                        //ev.preventDefault();
                    });
                    d.addEventListener("click",function(ev){
                       menu.style.display="none"; 
                    });
                    menu.addEventListener("click",function(ev){
                        //ev.stopPropagation();
                    });
            }});
            
            this.title=this.receiveControl("mep-video-title",{init:function(element){
                    element.setText=function(title){this.textContent=title;return this;};
            }});
            this.error=this.receiveControl("mep-error-message",{init:function(element){
                    element.setText=function(title){this.textContent=title;return this;};
            },show:function(element){//console.log(element);
                element.style.top=(self.stage.offsetHeight-element.offsetHeight)/2+"px";
                element.style.left=(self.stage.offsetWidth-element.offsetWidth)/2+"px";
            }});
            this.box=this.receiveControl("mep-html-box");
//            this.controls=this.ele.getElementsByClassName("mep-ctr")[0];
            this.btnPlay=this.receiveControl("mep-btn-play",{init:function(element){
                    element.addEventListener("click", function (ev) {
                        // console.log(self.isPlaying);
                        if (self.state==="playing"){
                            //self.stage.pause();
                            self.pause();
                        
                    }else{
//                            self.stage.play();
                            self.play();
                        }
                    });
            }});
            this.createPlaybackBtn();
            if(!config.playlist||config.playlist.length==0){
                this.btnNext.hide();
                this.btnPrev.hide();
            }
//            this.btnPlay=this.ele.getElementsByClassName("mep-btn-play")[0];
            this.btnVolume = this.receiveControl("mep-btn-volume", {init: function (element) {
            }});
//            this.btnVolume=this.ele.getElementsByClassName("mep-btn-volume")[0];
            this.volumeSlider = this.receiveControl("mep-volume-panel", {init: function (element) {
                    element.roller=element.getElementsByClassName("mep-volume-slider-foreground")[0];
                    element.slider=element.getElementsByClassName("mep-volume-slider")[0];
                    
           }});
           self.setupVolumeSlider();
//           this.volumeSlider= this.ele.getElementsByClassName("mep-volume-panel")[0];
           this.btnMute = this.receiveControl("mep-mute", {init: function (element) {
                    element.addEventListener("click",function(ev){self.unmute();});
                    
           }});
//           this.btnMute=this.ele.getElementsByClassName("mep-mute")[0];
//           this.btnMute.addEventListener("click",function(ev){self.unmute();});
           this.btnUnMute = this.receiveControl("mep-unmute", {init: function (element) {
                    element.addEventListener("click",function(ev){self.mute();});
                    
           }});
            this.timeRate = this.receiveControl("mep-comp-timeduration", {init: function (element) {
                    element.roller = element.getElementsByClassName("mep-time-duration-loaded")[0];
                    element.addEventListener("click", function (ev) {
                        var seekto = ev.offsetX / this.offsetWidth * self.duration;
                        self.timeRate.roller.style.width = (ev.offsetX / this.offsetWidth * 100) + "%";
                        self.seek(seekto);

                    });
                    element.setValue = function (val) {
                        if (val > 100)
                            val = 100;
                        if (val < 0)
                            val = 0;
                        self.timeRate.roller.style.width = val + "%";
                    };
                    

                }});
           this.timeLine = this.receiveControl("mep-btn-time-line", {init: function (element) {
                    element.played=element.getElementsByClassName("mep-label-played")[0];
                    element.total=element.getElementsByClassName("mep-label-total")[0];
                    element.setValue=function(played,total){
                        element.played.textContent=toTimeTemp(played);
                        element.total.textContent=toTimeTemp(total);
                    };
                    
           }});
           this.btnBigPlay = this.receiveControl("mep-overlay-player", {init: function (element) {
                    element.addEventListener("click",function(ev){self.play();});
                    //console.log (self);
                    self.on("play",function(){self.btnBigPlay.style.display="none";});
                    self.on("pause",function(){self.btnBigPlay.style.display="block";});
                    self.on("complete",function(){self.btnBigPlay.style.display="block";});
                    
           }});
       
            this.btnQuality = this.receiveControl("mep-btn-quality", {init: function (element) {
                    d.addEventListener("click", function () {
                        self.qualityList.hide();
                    });
                    element.addEventListener("click", function (ev) {
                        if (self.qualityList.style.display === 'none')
                            self.qualityList.show();
                        else
                            self.qualityList.hide();
                        ev.stopPropagation();
                    });
                    self.qualityList = self.receiveControl("mep-btn-quality-list",
                            {
                                init: function (le) {

                                },
                                show: function (le) {
                                    //if(element.offsetLeft+le.offsetWidth/2)
                                    var l=(element.offsetLeft+element.offsetWidth/2-le.offsetWidth/2);
                                    if(l+le.offsetWidth>self.ele.offsetWidth) l=self.ele.offsetWidth-le.offsetWidth;
                                    le.style.left=l+"px";
                                }
                            }
                    );
                }});
           
           d.addEventListener("fullscreenchange", function(ev){self.fullScreenChange(ev,self);});
           d.addEventListener("webkitfullscreenchange", function(ev){self.fullScreenChange(ev,self);});
           d.addEventListener("mozfullscreenchange", function(ev){self.fullScreenChange(ev,self);});
           d.addEventListener("MSFullscreenChange", function(ev){self.fullScreenChange(ev,self);});
            this.btnFullScreen = this.receiveControl("mep-btn-action-fullscreen", {init: function (element) {
                    element.addEventListener("click", function (ev) {
                        self.requestFullScreen();
                    });

                }});
            this.btnExitFullScreen = this.receiveControl("mep-btn-action-exitfullscreen", {init: function (element) {
                    element.addEventListener("click", function (ev) {
                        self.exitFullScreen();
                    });

            }});
           this.hoverBox = this.receiveControl("mep-hover-box", {init: function (element) {
                    element.duration=element.getElementsByClassName("mep-hover-duration")[0];
                    self.timeRate.addEventListener("mousemove", function (ev) {
                        element.style.display = "block";
                        var w = this.offsetWidth;
                        var x = (ev.offsetX - element.offsetWidth / 2);
                        if (x > w - element.offsetWidth)
                            x = w - element.offsetWidth;
                        if (x < 0)
                            x = 0;
                        element.style.left = x + "px";
                        element.duration.textContent = toTimeTemp(ev.offsetX / w * self.duration);
                        element.duration.style.left = (element.offsetWidth - element.duration.offsetWidth) / 2 + "px";
                    });
                    self.timeRate.addEventListener("mouseout", function (ev) {
                        element.style.display = "none";
                    });

            }});
           self.setupStreamEvent();
           self.setupEvent();
           w.addEventListener("resize",function(){
               //console.log("sdfsdsdfsdfsdfsdf");
               self.updateSize(self);
           });
           self.updateSize(self);
           
        },
        createPlaybackBtn:function(){
            var self=this;
            var n=d.createElement("div");
            var p=d.createElement("div");
            n.classList.add("mep-controls");
            p.classList.add("mep-controls");
            n.style.float="left";
            p.style.float="left";
            p.innerHTML='<svg version="1.1" id="prev" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="27.935px" height="16px" viewBox="0 0 27.935 16" enable-background="new 0 0 27.935 16" xml:space="preserve"><path d="M27.935,14.271c0,2.729-3.04,1.029-3.04,1.029S14.763,9.169,14.76,9.125c-1.76-1.111,0-2.058,0-2.058s0.5-0.305,10.134-6.175C28-1,27.935,1.921,27.935,1.921V14.271z"></path><path d="M15.935,14.271c0,2.729-3.04,1.029-3.04,1.029S2.763,9.169,2.76,9.125c-1.76-1.111,0-2.058,0-2.058s0.5-0.305,10.134-6.175C16-1,15.935,1.921,15.935,1.921V14.271z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1,0h1c0.552,0,1,0.448,1,1v14c0,0.552-0.448,1-1,1H1c-0.552,0-1-0.448-1-1V1C0,0.448,0.448,0,1,0z"></path></svg>';
            n.innerHTML='<svg version="1.1" id="next" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="16px" viewBox="0 0 28 16" enable-background="new 0 0 28 16" xml:space="preserve"><path d="M0,14c0,2.652,3,1,3,1s9.997-5.957,10-6c1.737-1.08,0-2,0-2S12.507,6.704,3,1c-3.065-1.839-3,1-3,1V14z"></path><path d="M12,14c0,2.652,3,1,3,1s9.997-5.957,10-6c1.737-1.08,0-2,0-2s-0.493-0.296-10-6c-3.065-1.839-3,1-3,1V14z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M26,0h1c0.552,0,1,0.448,1,1v14c0,0.552-0.448,1-1,1h-1c-0.552,0-1-0.448-1-1V1C25,0.448,25.448,0,26,0z"></path></svg>';
            this.btnPlay.parentNode.insertBefore(p,this.btnPlay);
//            this.btnPlay.parentNode.insertAfter(btnNext,this.btnPlay);
            this.btnPlay.parentNode.insertBefore(n, this.btnPlay.nextSibling);
            n.addEventListener("click",function(){
                self.trigger("next");
            });
            p.addEventListener("click",function(){
                self.trigger("prev");
            });
            p.hide=function(){this.style.display="none";};
            p.show=function(){this.style.display="inline-block";};
            n.hide=function(){this.style.display="none";};
            n.show=function(){this.style.display="inline-block";};
            this.btnNext=n;
            this.btnPrev=p;
        },
        changeSource:function(source){
            self=this;
            var time=self.stage.currentTime;
            
            self.stage.src=source;
            function onLoad(){
                //console.log("seek to "+time );
                self.seek(time);
                self.stage.removeEventListener("loadeddata",onLoad);
            }
            self.stage.addEventListener("loadeddata",onLoad);
            self.stage.load();
            
        },
        isFullScreen:false,
        requestFullScreen: function () {
            var elem = this.stage;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            }else if(elem.webkitEnterFullscreen){
                elem.webkitEnterFullscreen();
            }
            //this.player.hideAdContainer();
        },
        exitFullScreen: function () {
            if (d.webkitExitFullscreen)
                d.webkitExitFullscreen();
            else if (d.mozCancelFullscreen)
                d.mozCancelFullscreen();
            else if (d.exitFullscreen)
                d.exitFullscreen();
            //this.player.showAdContainer();
        },
        fullScreenChange:function(ev,instance){
            var self=instance;
//            console.log(self.isFullScreen);
            //self.stage.removeAttribute("controls");
            self.isFullScreen=!self.isFullScreen;
            if (self.isFullScreen){
                self.btnExitFullScreen.style.display="block";
               self.btnFullScreen.style.display="none";
               self.trigger("fullscreen");
            }else{ 
                self.trigger("exitfullscreen");
                self.btnExitFullScreen.style.display="none";
               self.btnFullScreen.style.display="block";
           }
           self.trigger("fullscreenchange");
        },
        on: function (ev, fn) {
            if (!this.__handler[ev])
                this.__handler[ev] = [];
            this.__handler[ev].push(fn);
        },
        trigger: function (ev) {
            
            if (this.__handler[ev] && this.__handler[ev].length) {
                for (var i = 0; i < this.__handler[ev].length; i++){ 
                    this.__handler[ev][i].call(this);
                    //alert(this.__handler[ev][i]);
                    }
            }
        },
        updateStatus:function(){
            this.timeRate.setValue(this.stage.currentTime/this.stage.duration*100);
            this.timeLine.setValue(this.stage.currentTime,this.stage.duration);
        },
        state:"idle",
        duration:0,
        getCurrentTime:function(){return this.stage.currentTime;},
        setupStreamEvent:function(){
            var timeming=0,self=this;
           this.stage.addEventListener("loadedmetadata",function(){
               self.duration=self.stage.duration;
               self.timeLine.total.textContent=toTimeTemp(self.stage.duration);
           });
           this.stage.addEventListener("loadeddata",function(){
               self.trigger("firstFrame");
           });
           var isended=false;
           this.stage.addEventListener("play",function(){
               timeming=setInterval(function(){
                   self.updateStatus();
                   self.trigger("playing");
               },50);
               if(isended) {
                   self.trigger("replay");
                   isended=false;
               }
               
               self.trigger("play");
               self.btnPlay.classList.remove("mep-status-active");
               self.state="playing";
           });
           this.stage.addEventListener("pause",function(){
               self.trigger("pause");
               self.btnPlay.classList.add("mep-status-active");
               self.state="paused";
               clearInterval(timeming);
           });
           
           this.stage.addEventListener("ended",function(){
               isended=true;
               self.trigger("complete");
               self.btnPlay.classList.add("mep-status-active");
               self.state="idle";
               self.trigger("idle");
               clearInterval(timeming);
           });
           this.stage.addEventListener("waiting",function(){
               self.state="buffering";
               self.trigger("buffer");
           });
           this.stage.addEventListener("playing",function(){//resume when buffer
               self.state="playing";
//               self.trigger("buffer");
           });
           this.stage.addEventListener("error",function(ev){
               //console.log(ev);
               self.error.setText("Lỗi: không thể play video!").show();
               self.btnPlay.classList.add("mep-status-active");
               self.state="idle";
               self.trigger("idle");
           });
           this.stage.addEventListener("seeking",function(){
               self.trigger("seek");
           });
           this.stage.addEventListener("seeked",function(){
               self.trigger("seeked");
           });
           self.volumeSlider.setValue(self.stage.volume*100);
           if(self.stage.muted){
               self.mute();
           }else{
               self.unmute();
           }
        },
        setupEvent: function () {
            var self = this;
            var htimeline = 0;
            var timerate=0;
            self.ele.addEventListener("mousemove", function () {
                if (self.isFullScreen&&!self.adsmg.isPlaying) {
                    self.controls.show();
                    self.stage.style.cursor = "auto";
                    clearInterval(htimeline);

                    htimeline = setInterval(function () {
                        if (self.isFullScreen) {
                            self.controls.hide();
                            self.stage.style.cursor = "none";//url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'),auto";
                        }
                    }, 4000);
                }
                clearInterval(timerate);
                //self.timeRate.classList.add("mep-rate-hover");
                /*timerate = setInterval(function () {
                        self.timeRate.classList.remove("mep-rate-hover");
                }, 1000);*/
                
            });
           self.on("fullscreenchange",function(ev){self.controls.show();self.stage.style.cursor="default";});
           self.on("prev",function(){
               if(isNaN(self.clitem)) self.clitem=0;
               if(this.playlist[self.clitem-1])
                    self.playlistItem(self.clitem-1);
               else{
                   self.clitem=0;
                   self.playlistItem(self.clitem);
               } 
           });
           self.on("next",function(){
               if(isNaN(self.clitem)) self.clitem=0;
               if(this.playlist[self.clitem+1])
               self.playlistItem(self.clitem+1);
               else{
                   self.clitem=0;
                   self.playlistItem(self.clitem);
               } 
           });
           self.on("complete",function(){
               if(isNaN(self.clitem)) self.clitem=0;
               //console.log("next item ------>");
               if(Array.isArray(this.playlist) && this.playlist[self.clitem+1])
               self.trigger("next");
              
           });
          
        },
        updateSize : function(instance){
            ///var self=instance;
            
        },
        receiveControl:function (className, profile) {

                var element = this.ele.getElementsByClassName(className)[0];
                if (profile && profile.init) {
                    profile.init(element);
                }
                if (profile && profile.onResize) {
                    this.on("resize", profile.onResize);
                }
                element.show = function () {
                    element.style.display = "block";
                    if (profile && profile.show) {
                        profile.show(element);
                        
                    }
                    
                };
                element.hide = function () {
                    element.style.display = "none";
                        if (profile && profile.hide) {
                            profile.hide(element);
                            
                        }
                        
                        
                    };
                    return element;
                },
        reset:function(){
            this.ads.hide();
            this.adsmg.resetAds();
        },
        load:function(list){
            this.playlist=[];
            if(Array.isArray(list)){
                for(var i=0;i<list.length;i++){
                    this.playlist.push(list[i]);
                }
            }
            if(this.playlist.length>0){
                this.btnNext.show();
                this.btnPrev.show();
            }
            
        },
        playlistItem:function(index){
            console.log("Play item:"+index);
            
            if(!this.playlist[index]) return;
            var i=this.playlist[index];
            self.clitem=index;
            this.stage.src=i.file;
            this.title.setText(i.title||i.label);
            
            this.stage.load();
            if(!this.adsmg.disabled)
            if(i.advertising){
                this.adsmg.load_cfg(i.advertising);
                this.adsmg.resetAds();
            }else{
                this.adsmg.load_cfg({});
            } 
            
            this.play();
            if(index==0) this.btnPrev.hide();
            else this.btnPrev.show();
            
//            if(index==this.playlist.length-1) this.btnNext.hide();
//            else this.btnNext.show();
            
        },
        
        
    };
    MePlayerHTML5.prototype.setupVolumeSlider=function(){
        //var e =document.getElementById("id-drap-volume");
        var self=this;
        var slider=this.volumeSlider.slider;
        var roller= this.volumeSlider.roller;
        this.volumeSlider.setValue=function(val){//console.log(val);
               if(val<=0){
                   val=0;
                   self.mute();
               }else{
                   
               }//self.btnVolume.classList.remove("mep-status-mute");
               if(val>=100){
                   val=100;
               }
               self.volumeSlider.roller.style.left=((self.volumeSlider.offsetWidth-self.volumeSlider.roller.offsetWidth)*val/100)+"px";
               self.volumeSlider.slider.setAttribute("val",val);
               if(self.isMute&&val>0)
                   self.unmute();
               self.stage.volume=val/100;
           };
           this.volumeSlider.getValue=function(){
               if(self.volumeSlider.slider.getAttribute("val"))
                return parseInt( self.volumeSlider.slider.getAttribute("val"));
               else return 0;
           };
        /****setup drag event*****/
        var x=0;
        var px=0;
        var dragging=false;
        slider.addEventListener("mousedown",function(ev){
      if(ev.target == roller ){
          roller.style.left=(roller.offsetLeft+ev.layerX-roller.offsetWidth/2)+"px";
      }else{
          roller.style.left=(ev.layerX-roller.offsetWidth/2)+"px";
      }
      
            x=roller.offsetLeft;
            self.volumeSlider.setValue((roller.offsetLeft)/slider.offsetWidth*100);
            px=ev.pageX;
        });
        slider.addEventListener("dragstart", function(ev){//event.preventDefault();
            var dragImage = document.createElement('img');
            dragImage.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
            dragImage.width = 75;
            ev.dataTransfer.setDragImage(dragImage, 0, 0);
             dragging=true;
            return false;
        });
        d.addEventListener("dragover", function(ev){
            if(!dragging) return;
            if((ev.pageX-px+x)<0){
                self.volumeSlider.setValue(0);
                self.btnVolume.classList.add("mep-status-mute");
                return;
            }else self.btnVolume.classList.remove("mep-status-mute");
            if((ev.pageX-px+x)>slider.offsetWidth-roller.offsetWidth/2){
                //roller.style.left=(slider.offsetWidth-roller.offsetWidth)+"px";
                self.volumeSlider.setValue(100);
                return;
            }
            self.volumeSlider.setValue((ev.pageX-px+x)/self.volumeSlider.offsetWidth*100);
            //roller.style.left=(ev.pageX-px+x)+"px";
        });
         slider.addEventListener("dragend", function(){
            //console.log("dragend");
            dragging=false;
        });
        self.btnVolume.addEventListener("mouseover", function(ev){//event.preventDefault();
            //return;
            if(!self.stage.muted)
            self.volumeSlider.setValue(self.volumeSlider.getValue());
            //console.log("mouse over");
        });
    }
    MePlayerHTML5.prototype.mute=function(){
        //console.log("mute");
        var self=this;
        self.isMute=true;
        self.btnVolume.classList.add("mep-status-mute");
        self.volumeSlider.roller.style.left=0;
        self.stage.muted=true;
        
    };
    MePlayerHTML5.prototype.unmute=function(){
        //console.log("unmute");
        var self=this;
        self.isMute=false;
        self.btnVolume.classList.remove("mep-status-mute");
        console.log(self.volumeSlider.getValue());
        self.volumeSlider.setValue(self.volumeSlider.getValue());
        self.stage.muted=false;
    };
    MePlayerHTML5.prototype.play=function(){
        self=this;//console.log(self.adsmg.isPlaying);
        //self.btnBigPlay.style.display="none";
        console.log(self.stage);
        if(self.adsmg.isPlaying) return;
        self.stage.play();
    };
    MePlayerHTML5.prototype.pause=function(){
        this.stage.pause();
    };
    MePlayerHTML5.prototype.seek=function(seekto){
        self=this;
        if(self.adsmg.isPlaying){
            
            return;
        }
        var toplay=false;
        if(self.state==='playing') toplay=true;
        //self.stage.seek(seekto);
        self.stage.currentTime=seekto;
        if(toplay) self.stage.play();
    };
    MePlayerHTML5.prototype.togglePlay=function(){
        self=this;
        if(self.state==='playing') self.pause();
        else self.play();
    };
    MePlayerHTML5.prototype.getState=function(){
        self=this;
        
    };
    MePlayerHTML5.prototype.getFullscreen=function(){
        return this.isFullScreen;
        
    };
    MePlayerHTML5.prototype.playAd=function(tag){//console.log(tag);
        self=this;console.log("play ads ");
        if(typeof tag=="string"){
        self.adsmg.playGroup({tag:[{
            client:"vast",
            tag:tag,
            type:"manual",
            skipoffset:5
            
        }]});
        }else{
            self.adsmg.playGroup({tag:[tag]});
        }
//        if (ad.client === "ima"||ad.client === "vpaid") {
//                imads.type = type;
//                imads.skipoffset = ad.skipoffset || 5;
//                imads.requestAds(ad.tag);
//            } else {
//                vastds.type = type;
//                vastds.skipoffset = ad.skipoffset || 5;
//                vastds.requestAds(ad.tag);
//            }
        
    };
    MePlayerHTML5.prototype.setVolume=function(v){
        self=this;
       //return  this.stage?this.stage.volume=v:0;
       return self.volumeSlider.setValue(v*100);
        
    };
    MePlayerHTML5.prototype.getVolume=function(){
        self=this;
        //alert(self.volumeSlider.getValue());
       return self.volumeSlider.getValue()/100;
        
    };
    
    
    w.MePlayerHTML5=MePlayerHTML5;
})(window,document);

/**
 * the event list below:
play
pause
buffer
idle
complete
firstFrame
error
seek
seeked
time
 */