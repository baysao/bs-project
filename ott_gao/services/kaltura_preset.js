module.exports = function() {
  return [
    {
      "objectType": "KalturaFlavorParams",
      "videoBitrate": "0",
      "audioBitrate": "0",
      "audioChannels": "0",
      "audioSampleRate": "0",
      "width": "0",
      "height": "0",
      "frameRate": "0",
      "gopSize": "0",
      "twoPass": "0",
      "deinterlice": "0",
      "rotate": "0",
      "engineVersion": "0",
      "format": "copy",
      "aspectRatioProcessingMode": "0",
      "forceFrameToMultiplication16": "1",
      "isGopInSec": "0",
      "isAvoidVideoShrinkFramesizeToSource": "0",
      "isAvoidVideoShrinkBitrateToSource": "0",
      "isVideoFrameRateForLowBrAppleHls": "0",
      "anamorphicPixels": "0",
      "isAvoidForcedKeyFrames": "0",
      "isCropIMX": "0",
      "optimizationPolicy": "1",
      "maxFrameRate": "0",
      "videoConstantBitrate": "0",
      "videoBitrateTolerance": "0",
      "id": "0",
      "partnerId": "0",
      "name": "Source",
      "systemName": "Source",
      "description": "Maintains the original format and settings of the file - duplicate of the source file ",
      "createdAt": "1264317015",
      "isSystemDefault": "1",
      "tags": "source",
      "sourceRemoteStorageProfileId": "0",
      "mediaParserType": "0"
    },
    {
      "objectType": "KalturaFlavorParams",
      "videoCodec": "mpeg4",
      "videoBitrate": "300",
      "audioCodec": "aac",
      "audioBitrate": "64",
      "audioChannels": "0",
      "audioSampleRate": "0",
      "width": "320",
      "height": "0",
      "frameRate": "0",
      "gopSize": "300",
      "conversionEngines": "2,99,3",
      "conversionEnginesExtraParams": "-async 2 -vsync 1 | -async 2 -vsync 1",
      "twoPass": "0",
      "deinterlice": "0",
      "rotate": "0",
      "engineVersion": "0",
      "format": "3gp",
      "aspectRatioProcessingMode": "0",
      "forceFrameToMultiplication16": "1",
      "isGopInSec": "0",
      "isAvoidVideoShrinkFramesizeToSource": "0",
      "isAvoidVideoShrinkBitrateToSource": "0",
      "isVideoFrameRateForLowBrAppleHls": "0",
      "anamorphicPixels": "0",
      "isAvoidForcedKeyFrames": "0",
      "isCropIMX": "0",
      "optimizationPolicy": "1",
      "maxFrameRate": "0",
      "videoConstantBitrate": "0",
      "videoBitrateTolerance": "0",
      "id": "301991",
      "partnerId": "0",
      "name": "Mobile (3GP)",
      "systemName": "Mobile(3GP)",
      "description": "Nokia/Blackberry",
      "createdAt": "1300960710",
      "isSystemDefault": "1",
      "tags": "mobile,mpeg4",
      "sourceRemoteStorageProfileId": "0",
      "mediaParserType": "0"
    },
    {
      "objectType": "KalturaFlavorParams",
      "videoCodec": "h264b",
      "videoBitrate": "400",
      "audioCodec": "aac",
      "audioBitrate": "64",
      "audioChannels": "2",
      "audioSampleRate": "44100",
      "width": "640",
      "height": "0",
      "frameRate": "0",
      "gopSize": "0",
      "conversionEngines": "2,99,3",
      "conversionEnginesExtraParams": "-flags +loop+mv4 -cmp 256 -partitions +parti4x4+partp8x8+partb8x8 -trellis 1 -refs 1 -me_range 16 -keyint_min 20 -sc_threshold 40 -i_qfactor 0.71 -bt 100k -maxrate 400k -bufsize 1200k -rc_eq 'blurCplx^(1-qComp)' -level 30 -async 2 -vsync 1 -threads 4 | -flags +loop+mv4 -cmp 256 -partitions +parti4x4+partp8x8+partb8x8 -trellis 1 -refs 1 -me_range 16 -keyint_min 20 -sc_threshold 40 -i_qfactor 0.71 -bt 100k -maxrate 400k -bufsize 1200k -rc_eq 'blurCplx^(1-qComp)' -level 30 -async 2 -vsync 1 | -x264encopts qcomp=0.6:qpmin=10:qpmax=50:qpstep=4:frameref=1:bframes=0:threads=auto:level_idc=30:global_header:partitions=i4x4+p8x8+b8x8:trellis=1:me_range=16:keyint_min=20:scenecut=40:ipratio=0.71:ratetol=20:vbv-maxrate=400:vbv-bufsize=1200 ",
      "twoPass": "0",
      "deinterlice": "0",
      "rotate": "0",
      "engineVersion": "0",
      "format": "mp4",
      "aspectRatioProcessingMode": "0",
      "forceFrameToMultiplication16": "1",
      "isGopInSec": "0",
      "isAvoidVideoShrinkFramesizeToSource": "0",
      "isAvoidVideoShrinkBitrateToSource": "0",
      "isVideoFrameRateForLowBrAppleHls": "0",
      "anamorphicPixels": "0",
      "isAvoidForcedKeyFrames": "0",
      "isCropIMX": "0",
      "optimizationPolicy": "1",
      "maxFrameRate": "0",
      "videoConstantBitrate": "0",
      "videoBitrateTolerance": "0",
      "id": "487041",
      "partnerId": "0",
      "name": "Basic/Small - WEB/MBL (H264/400)",
      "systemName": "Basic/Small - WEB/MBL (H264/400)",
      "description": "Basic/Small - WEB/MBL (H264/400)",
      "createdAt": "1348150198",
      "isSystemDefault": "1",
      "tags": "mobile,web,mbr,iphone,iphonenew",
      "requiredPermissions": {
        "item": {
          "objectType": "KalturaString",
          "value": "FEATURE_V2_FLAVORS"
        }
      },
      "sourceRemoteStorageProfileId": "0",
      "mediaParserType": "0"
    },
    {
      "objectType": "KalturaFlavorParams",
      "videoCodec": "h264b",
      "videoBitrate": "600",
      "audioCodec": "aac",
      "audioBitrate": "64",
      "audioChannels": "2",
      "audioSampleRate": "44100",
      "width": "640",
      "height": "0",
      "frameRate": "0",
      "gopSize": "0",
      "conversionEngines": "2,99,3",
      "conversionEnginesExtraParams": "-flags +loop+mv4 -cmp 256 -partitions +parti4x4+partp8x8+partb8x8 -trellis 1 -refs 1 -me_range 16 -keyint_min 20 -sc_threshold 40 -i_qfactor 0.71 -bt 200k -maxrate 600k -bufsize 1200k -rc_eq 'blurCplx^(1-qComp)' -level 30 -async 2 -vsync 1 -threads 4 | -flags +loop+mv4 -cmp 256 -partitions +parti4x4+partp8x8+partb8x8 -trellis 1 -refs 1 -me_range 16 -keyint_min 20 -sc_threshold 40 -i_qfactor 0.71 -bt 200k -maxrate 600k -bufsize 1200k -rc_eq 'blurCplx^(1-qComp)' -level 30 -async 2 -vsync 1 | -x264encopts qcomp=0.6:qpmin=10:qpmax=50:qpstep=4:frameref=1:bframes=0:threads=auto:level_idc=30:global_header:partitions=i4x4+p8x8+b8x8:trellis=1:me_range=16:keyint_min=20:scenecut=40:ipratio=0.71:ratetol=20:vbv-maxrate=600:vbv-bufsize=1200 ",
      "twoPass": "0",
      "deinterlice": "0",
      "rotate": "0",
      "engineVersion": "0",
      "format": "mp4",
      "aspectRatioProcessingMode": "0",
      "forceFrameToMultiplication16": "1",
      "isGopInSec": "0",
      "isAvoidVideoShrinkFramesizeToSource": "0",
      "isAvoidVideoShrinkBitrateToSource": "0",
      "isVideoFrameRateForLowBrAppleHls": "0",
      "anamorphicPixels": "0",
      "isAvoidForcedKeyFrames": "0",
      "isCropIMX": "0",
      "optimizationPolicy": "1",
      "maxFrameRate": "0",
      "videoConstantBitrate": "0",
      "videoBitrateTolerance": "0",
      "id": "487051",
      "partnerId": "0",
      "name": "Basic/Small - WEB/MBL (H264/600)",
      "systemName": "Basic/Small - WEB/MBL (H264/600)",
      "description": "Basic/Small - WEB/MBL (H264/600)",
      "createdAt": "1348150222",
      "isSystemDefault": "1",
      "tags": "mobile,web,mbr,iphone,iphonenew",
      "requiredPermissions": {
        "item": {
          "objectType": "KalturaString",
          "value": "FEATURE_V2_FLAVORS"
        }
      },
      "sourceRemoteStorageProfileId": "0",
      "mediaParserType": "0"
    },
    {
      "objectType": "KalturaFlavorParams",
      "videoCodec": "h264m",
      "videoBitrate": "900",
      "audioCodec": "aac",
      "audioBitrate": "64",
      "audioChannels": "2",
      "audioSampleRate": "44100",
      "width": "640",
      "height": "0",
      "frameRate": "0",
      "gopSize": "0",
      "conversionEngines": "2,99,3",
      "conversionEnginesExtraParams": "-flags +loop+mv4 -cmp 256 -partitions +parti4x4+partp8x8+partb8x8 -trellis 1 -refs 1 -me_range 16 -keyint_min 20 -sc_threshold 40 -i_qfactor 0.71 -bt 300k -maxrate 900k -bufsize 1200k -rc_eq 'blurCplx^(1-qComp)' -level 31 -async 2 -vsync 1 -threads 4 | -flags +loop+mv4 -cmp 256 -partitions +parti4x4+partp8x8+partb8x8 -trellis 1 -refs 1 -me_range 16 -keyint_min 20 -sc_threshold 40 -i_qfactor 0.71 -bt 300k -maxrate 900k -bufsize 1200k -rc_eq 'blurCplx^(1-qComp)' -level 31 -async 2 -vsync 1 | -x264encopts qcomp=0.6:qpmin=10:qpmax=50:qpstep=4:frameref=1:bframes=0:threads=auto:level_idc=31:global_header:partitions=i4x4+p8x8+b8x8:trellis=1:me_range=16:keyint_min=20:scenecut=40:ipratio=0.71:ratetol=40:vbv-maxrate=900:vbv-bufsize=1200 ",
      "twoPass": "0",
      "deinterlice": "0",
      "rotate": "0",
      "engineVersion": "0",
      "format": "mp4",
      "aspectRatioProcessingMode": "0",
      "forceFrameToMultiplication16": "1",
      "isGopInSec": "0",
      "isAvoidVideoShrinkFramesizeToSource": "0",
      "isAvoidVideoShrinkBitrateToSource": "0",
      "isVideoFrameRateForLowBrAppleHls": "0",
      "anamorphicPixels": "0",
      "isAvoidForcedKeyFrames": "0",
      "isCropIMX": "0",
      "optimizationPolicy": "1",
      "maxFrameRate": "0",
      "videoConstantBitrate": "0",
      "videoBitrateTolerance": "0",
      "id": "487061",
      "partnerId": "0",
      "name": "SD/Small - WEB/MBL (H264/900)",
      "systemName": "SD/Small - WEB/MBL (H264/900)",
      "description": "SD/Small - WEB/MBL (H264)",
      "createdAt": "1348150243",
      "isSystemDefault": "1",
      "tags": "mobile,web,mbr,ipad,ipadnew,dash",
      "requiredPermissions": {
        "item": {
          "objectType": "KalturaString",
          "value": "FEATURE_V2_FLAVORS"
        }
      },
      "sourceRemoteStorageProfileId": "0",
      "mediaParserType": "0"
    },
    {
      "objectType": "KalturaFlavorParams",
      "videoCodec": "h264m",
      "videoBitrate": "1500",
      "audioCodec": "aac",
      "audioBitrate": "128",
      "audioChannels": "2",
      "audioSampleRate": "44100",
      "width": "0",
      "height": "720",
      "frameRate": "0",
      "gopSize": "0",
      "conversionEngines": "2,99,3",
      "conversionEnginesExtraParams": "-flags +loop+mv4 -cmp 256 -partitions +parti4x4+partp8x8+partb8x8 -trellis 1 -refs 1 -me_range 16 -keyint_min 20 -sc_threshold 40 -i_qfactor 0.71 -bt 400k -maxrate 1500k -bufsize 1200k -rc_eq 'blurCplx^(1-qComp)' -level 31 -async 2 -vsync 1 -threads 4 | -flags +loop+mv4 -cmp 256 -partitions +parti4x4+partp8x8+partb8x8 -trellis 1 -refs 1 -me_range 16 -keyint_min 20 -sc_threshold 40 -i_qfactor 0.71 -bt 400k -maxrate 1500k -bufsize 1200k -rc_eq 'blurCplx^(1-qComp)' -level 31 -async 2 -vsync 1 | -x264encopts qcomp=0.6:qpmin=10:qpmax=50:qpstep=4:frameref=1:bframes=0:threads=auto:level_idc=31:global_header:partitions=i4x4+p8x8+b8x8:trellis=1:me_range=16:keyint_min=20:scenecut=40:ipratio=0.71:ratetol=40:vbv-maxrate=1500:vbv-bufsize=1200 ",
      "twoPass": "0",
      "deinterlice": "0",
      "rotate": "0",
      "engineVersion": "0",
      "format": "mp4",
      "aspectRatioProcessingMode": "0",
      "forceFrameToMultiplication16": "1",
      "isGopInSec": "0",
      "isAvoidVideoShrinkFramesizeToSource": "0",
      "isAvoidVideoShrinkBitrateToSource": "0",
      "isVideoFrameRateForLowBrAppleHls": "0",
      "anamorphicPixels": "0",
      "isAvoidForcedKeyFrames": "0",
      "isCropIMX": "0",
      "optimizationPolicy": "1",
      "maxFrameRate": "0",
      "videoConstantBitrate": "0",
      "videoBitrateTolerance": "0",
      "id": "487071",
      "partnerId": "0",
      "name": "SD/Large - WEB/MBL (H264/1500)",
      "systemName": "SD/Large - WEB/MBL (H264/1500)",
      "description": "SD/Large - WEB/MBL (H264/1500)",
      "createdAt": "1348150294",
      "isSystemDefault": "1",
      "tags": "mobile,web,mbr,ipad,ipadnew,dash",
      "requiredPermissions": {
        "item": {
          "objectType": "KalturaString",
          "value": "FEATURE_V2_FLAVORS"
        }
      },
      "sourceRemoteStorageProfileId": "0",
      "mediaParserType": "0"
    },
    {
      "objectType": "KalturaFlavorParams",
      "videoCodec": "h264h",
      "videoBitrate": "2500",
      "audioCodec": "aac",
      "audioBitrate": "128",
      "audioChannels": "2",
      "audioSampleRate": "44100",
      "width": "0",
      "height": "720",
      "frameRate": "0",
      "gopSize": "0",
      "conversionEngines": "2,99,3",
      "conversionEnginesExtraParams": "-flags +loop+mv4 -cmp 256 -partitions +parti4x4+partp8x8+partb8x8 -trellis 1 -refs 6 -me_range 16 -keyint_min 20 -sc_threshold 40 -i_qfactor 0.71 -bt 700k -maxrate 2500k -bufsize 5000k -rc_eq 'blurCplx^(1-qComp)' -async 2 -vsync 1 -threads 4 | -flags +loop+mv4 -cmp 256 -partitions +parti4x4+partp8x8+partb8x8 -trellis 1 -refs 6 -me_range 16 -keyint_min 20 -sc_threshold 40 -i_qfactor 0.71 -bt 700k -maxrate 2500k -bufsize 5000k -rc_eq 'blurCplx^(1-qComp)' -async 2 -vsync 1 | -x264encopts qcomp=0.6:qpmin=10:qpmax=50:qpstep=4:frameref=6:bframes=0:threads=auto:global_header:partitions=i4x4+p8x8+b8x8:trellis=1:me_range=16:keyint_min=20:scenecut=40:ipratio=0.71:ratetol=40:vbv-maxrate=2500:vbv-bufsize=5000 ",
      "twoPass": "0",
      "deinterlice": "0",
      "rotate": "0",
      "engineVersion": "0",
      "format": "mp4",
      "aspectRatioProcessingMode": "0",
      "forceFrameToMultiplication16": "1",
      "isGopInSec": "0",
      "isAvoidVideoShrinkFramesizeToSource": "0",
      "isAvoidVideoShrinkBitrateToSource": "0",
      "isVideoFrameRateForLowBrAppleHls": "0",
      "anamorphicPixels": "0",
      "isAvoidForcedKeyFrames": "0",
      "isCropIMX": "0",
      "optimizationPolicy": "1",
      "maxFrameRate": "0",
      "videoConstantBitrate": "0",
      "videoBitrateTolerance": "0",
      "id": "487081",
      "partnerId": "0",
      "name": "HD/720 - WEB (H264/2500)",
      "systemName": "HD/720 - WEB (H264/2500)",
      "description": "HD/720 - WEB (H264/2500)",
      "createdAt": "1348150476",
      "isSystemDefault": "1",
      "tags": "web,mbr,dash",
      "requiredPermissions": {
        "item": {
          "objectType": "KalturaString",
          "value": "FEATURE_V2_FLAVORS"
        }
      },
      "sourceRemoteStorageProfileId": "0",
      "mediaParserType": "0"
    },
    {
      "objectType": "KalturaFlavorParams",
      "videoCodec": "h264h",
      "videoBitrate": "4000",
      "audioCodec": "aac",
      "audioBitrate": "128",
      "audioChannels": "2",
      "audioSampleRate": "44100",
      "width": "0",
      "height": "1080",
      "frameRate": "0",
      "gopSize": "0",
      "conversionEngines": "2,99,3",
      "conversionEnginesExtraParams": "-flags +loop+mv4 -cmp 256 -partitions +parti4x4+partp8x8+partb8x8 -trellis 1 -refs 6 -me_range 16 -keyint_min 20 -sc_threshold 40 -i_qfactor 0.71 -bt 1200k -maxrate 4000k -bufsize 8000k -rc_eq 'blurCplx^(1-qComp)' -async 2 -vsync 1 -threads 4 | -flags +loop+mv4 -cmp 256 -partitions +parti4x4+partp8x8+partb8x8 -trellis 1 -refs 6 -me_range 16 -keyint_min 20 -sc_threshold 40 -i_qfactor 0.71 -bt 1200k -maxrate 4000k -bufsize 8000k -rc_eq 'blurCplx^(1-qComp)' -async 2 -vsync 1 | -x264encopts qcomp=0.6:qpmin=10:qpmax=50:qpstep=4:frameref=6:bframes=0:threads=auto:global_header:partitions=i4x4+p8x8+b8x8:trellis=1:me_range=16:keyint_min=20:scenecut=40:ipratio=0.71:ratetol=40:vbv-maxrate=4000:vbv-bufsize=8000 ",
      "twoPass": "0",
      "deinterlice": "0",
      "rotate": "0",
      "engineVersion": "0",
      "format": "mp4",
      "aspectRatioProcessingMode": "0",
      "forceFrameToMultiplication16": "1",
      "isGopInSec": "0",
      "isAvoidVideoShrinkFramesizeToSource": "0",
      "isAvoidVideoShrinkBitrateToSource": "0",
      "isVideoFrameRateForLowBrAppleHls": "0",
      "anamorphicPixels": "0",
      "isAvoidForcedKeyFrames": "0",
      "isCropIMX": "0",
      "optimizationPolicy": "1",
      "maxFrameRate": "0",
      "videoConstantBitrate": "0",
      "videoBitrateTolerance": "0",
      "id": "487091",
      "partnerId": "0",
      "name": "HD/1080 - WEB (H264/4000)",
      "systemName": "HD/1080 - WEB (H264/4000)",
      "description": "HD/1080 - WEB (H264/4000)",
      "createdAt": "1348150521",
      "isSystemDefault": "1",
      "tags": "web,mbr,dash",
      "requiredPermissions": {
        "item": {
          "objectType": "KalturaString",
          "value": "FEATURE_V2_FLAVORS"
        }
      },
      "sourceRemoteStorageProfileId": "0",
      "mediaParserType": "0"
    },
    {
      "objectType": "KalturaFlavorParams",
      "videoCodec": "vp8",
      "videoBitrate": "750",
      "audioCodec": "vorbis",
      "audioBitrate": "96",
      "audioChannels": "0",
      "audioSampleRate": "0",
      "width": "0",
      "height": "360",
      "frameRate": "0",
      "gopSize": "0",
      "conversionEngines": "2,99",
      "twoPass": "0",
      "deinterlice": "0",
      "rotate": "0",
      "engineVersion": "0",
      "format": "webm",
      "aspectRatioProcessingMode": "0",
      "forceFrameToMultiplication16": "1",
      "isGopInSec": "0",
      "isAvoidVideoShrinkFramesizeToSource": "0",
      "isAvoidVideoShrinkBitrateToSource": "0",
      "isVideoFrameRateForLowBrAppleHls": "0",
      "anamorphicPixels": "0",
      "isAvoidForcedKeyFrames": "0",
      "isCropIMX": "0",
      "optimizationPolicy": "1",
      "maxFrameRate": "0",
      "videoConstantBitrate": "0",
      "videoBitrateTolerance": "0",
      "id": "487111",
      "partnerId": "0",
      "name": "WebM",
      "systemName": "WebM",
      "description": "WebM",
      "createdAt": "1348150713",
      "isSystemDefault": "1",
      "tags": "html5,webm",
      "sourceRemoteStorageProfileId": "0",
      "mediaParserType": "0"
    }
  ]
}