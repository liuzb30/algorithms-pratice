/* hippy-react-qb: 2.0.34, built on: Mon Aug 10 2020 10:20:23 GMT+0800 */
(function(modules) {
    var __global = (0, eval)("this");
    var parentJsonpFunction = __global["webpackJsonp"];
    __global["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
        var moduleId, chunkId, i = 0,
        resolves = [],
        result;
        for (; i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) {
                resolves.push(installedChunks[chunkId][0])
            }
            installedChunks[chunkId] = 0
        }
        for (moduleId in moreModules) {
            if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
                modules[moduleId] = moreModules[moduleId]
            }
        }
        if (parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
        while (resolves.length) {
            resolves.shift()()
        }
        if (executeModules) {
            for (i = 0; i < executeModules.length; i++) {
                result = __webpack_require__(__webpack_require__.s = executeModules[i])
            }
        }
        return result
    };
    var installedModules = {};
    var installedChunks = {
        1 : 0
    };
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports
    }
    __webpack_require__.e = function requireEnsure(chunkId) {
        var installedChunkData = installedChunks[chunkId];
        if (installedChunkData === 0) {
            return new Promise((function(resolve) {
                resolve()
            }))
        }
        if (installedChunkData) {
            return installedChunkData[2]
        }
        var promise = new Promise((function(resolve, reject) {
            installedChunkData = installedChunks[chunkId] = [resolve, reject]
        }));
        installedChunkData[2] = promise;
        var head = document.getElementsByTagName("head")[0];
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.charset = "utf-8";
        script.async = true;
        script.timeout = 12e4;
        if (__webpack_require__.nc) {
            script.setAttribute("nonce", __webpack_require__.nc)
        }
        script.src = __webpack_require__.p + "" + chunkId + ".android.jsbundle";
        var timeout = setTimeout(onScriptComplete, 12e4);
        script.onerror = script.onload = onScriptComplete;
        function onScriptComplete() {
            script.onerror = script.onload = null;
            clearTimeout(timeout);
            var chunk = installedChunks[chunkId];
            if (chunk !== 0) {
                if (chunk) {
                    chunk[1](new Error("Loading chunk " + chunkId + " failed."))
                }
                installedChunks[chunkId] = undefined
            }
        }
        head.appendChild(script);
        return promise
    };
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                configurable: false,
                enumerable: true,
                get: getter
            })
        }
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ?
        function getDefault() {
            return module["default"]
        }: function getModuleExports() {
            return module
        };
        __webpack_require__.d(getter, "a", getter);
        return getter
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property)
    };
    __webpack_require__.p = "";
    __webpack_require__.oe = function(err) {
        console.error(err);
        throw err
    };
    return __webpack_require__(__webpack_require__.s = "./node_modules/@tencent/hippy-cli-plugin-hippypack/pack/bundle/base-config-hippy-react-qb.js")
})({
    "./node_modules/hippy-pack/buildin/global.js": function(module, exports) {
        var g;
        g = function() {
            return this
        } ();
        try {
            g = g || Function("return this")() || (1, eval)("this")
        } catch(e) {
            if (typeof window === "object") g = window
        }
        module.exports = g
    },
    "./node_modules/@tencent/hippy-cli-plugin-hippypack/pack/bundle/base-config-hippy-react-qb.js": function(module, exports, __webpack_require__) {
        __webpack_require__("./node_modules/@tencent/hippy-react-qb/index.js");
        __webpack_require__("./node_modules/@tencent/hippy-stream/index.js");
        __webpack_require__("./node_modules/@tencent/hippy-rpc/index.js")
    },
    "./node_modules/@tencent/hippy-react-qb/index.js": function(module, exports, __webpack_require__) {
        let Platform = __webpack_require__("./node_modules/@tencent/hippy-react/index.js").Platform;
        module.exports = {
            get HippyRegister() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").HippyRegister
            },
            get RNfqbRegister() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").HippyRegister
            },
            get UIManagerModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").UIManagerModule
            },
            get StyleSheet() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").StyleSheet
            },
            get Dimensions() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").Dimensions
            },
            get PixelRatio() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").PixelRatio
            },
            get TimerModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").TimerModule
            },
            get AsyncStorage() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").AsyncStorage
            },
            get NetInfo() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").NetInfo
            },
            get ConsoleModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").ConsoleModule
            },
            get Clipboard() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").Clipboard
            },
            get ImageLoaderModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").ImageLoaderModule
            },
            get Platform() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").Platform
            },
            get HippyEventListener() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").HippyEventListener
            },
            get RNfqbEventListener() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").HippyEventListener
            },
            get HippyEventEmitter() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").HippyEventEmitter
            },
            get RNfqbEventEmitter() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").HippyEventEmitter
            },
            get Animation() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").Animation
            },
            get AnimationSet() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").AnimationSet
            },
            get Hippy() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").Hippy
            },
            get RNfqb() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").Hippy
            },
            get View() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").View
            },
            get Text() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").Text
            },
            get Image() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").Image
            },
            get ListView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").ListView
            },
            get TextInput() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").TextInput
            },
            get ScrollView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").ScrollView
            },
            get colorParse() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").colorParse
            },
            get Modal() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").Modal
            },
            get QBWaterfallView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBWaterfallView.js").QBWaterfallView
            },
            get QBGifImageView() {
                if (true) {
                    return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBGifImageView.js").QBGifImageView
                } else {
                    return require("./lib/components/QBGifImageView.ios").QBGifImageView
                }
            },
            get QBStarView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBStarView.js").QBStarView
            },
            get QBSuperBgView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBSuperBgView.js").QBSuperBgView
            },
            get QBProgressBarView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBProgressBarView.js").QBProgressBarView
            },
            get QBTabHost() {
                if (true) {
                    return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBTabHost.js").QBTabHost
                } else {
                    return require("./lib/components/QBTabHost.ios").QBTabHost
                }
            },
            get QBViewListPager() {
                if (true) {
                    return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBViewListPager.js").QBViewListPager
                } else {
                    return require("./lib/components/QBViewListPager.ios").QBViewListPager
                }
            },
            get QBExploreZView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBExploreZView.js").QBExploreZView
            },
            get QBStyledButton() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBStyledButton.js").QBStyledButton
            },
            get QBViewPager() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/index.js").ViewPager
            },
            get QBDownloadButton() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBDownloadButton.js").QBDownloadButton
            },
            get QBStatisticModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBStatisticModule.js").QBStatisticModule
            },
            get QBAlertModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBAlertModule.js").QBAlertModule
            },
            get QBStatusBarModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBStatusBarModule.js").QBStatusBarModule
            },
            get QBAccountModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBAccountModule.js").QBAccountModule
            },
            get QBWupModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBWupModule.js").QBWupModule
            },
            get Taf() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/wup-js/libjce.js").Taf
            },
            get QBBrowserObserver() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBBrowserObserver.js").QBBrowserObserver
            },
            get QBWelfareModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBWelfareModule.js").QBWelfareModule
            },
            get QBWindowModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBWindowModule.js").QBWindowModule
            },
            get QBSimpleAudioRecorder() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBSimpleAudioRecorder.js").QBSimpleAudioRecorder
            },
            get QBToastModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBToastModule.js").QBToastModule
            },
            get QBWeAppModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBWeAppModule.js").QBWeAppModule
            },
            get QBNativeProxyModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBNativeProxyModule.js").QBNativeProxyModule
            },
            get QBDownloadModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBDownloadModule.js").QBDownloadModule
            },
            get QBDeviceModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBDeviceModule.js").QBDeviceModule
            },
            get QBWifiModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBWifiModule.js").QBWifiModule
            },
            get QBShareModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBShareModule.js").QBShareModule
            },
            get QBCircleModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBCircleModule.js").QBCircleModule
            },
            get QBLocationModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBLocationModule.js").QBLocationModule
            },
            get QBDeviceEventEmitter() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBDeviceEventEmitter.js").QBDeviceEventEmitter
            },
            get QBVideoView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBVideoView.js").QBVideoView
            },
            get QBWebView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBWebView.js").QBWebView
            },
            get QBListView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBListView.js").QBListView
            },
            get QBGallery() {
                if (true) {
                    return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBGallery.js").QBGallery
                } else {
                    return require("./lib/components/QBGallery.ios").QBGallery
                }
            },
            get QBGalleryNew() {
                if (true) {
                    return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBGalleryNew.js").QBGalleryNew
                } else {
                    return require("./lib/components/QBGallery.ios").QBGallery
                }
            },
            get QBVRImageView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBVRImageView.js").QBVRImageView
            },
            get QBScoreStar() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBScoreStar.js").QBScoreStar
            },
            get QBDoubleScrollView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBDoubleScrollView.js").QBDoubleScrollView
            },
            get QBFooterView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBFooterView.js").QBFooterView
            },
            get QBLottieView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBLottieView.js").QBLottieView
            },
            get TouchableOpacity() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/TouchableOpacity.js").TouchableOpacity
            },
            get TouchableWithoutFeedback() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/TouchableWithoutFeedback.js").TouchableWithoutFeedback
            },
            get TouchableFeedback() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/TouchableFeedback.js").TouchableFeedback
            },
            get QBMapView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBMapView.js").QBMapView
            },
            get QBMapMarkerView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBMapMarkerView.js").QBMapMarkerView
            },
            get QBLoopScrollImage() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBLoopScrollImage.js").QBLoopScrollImage
            },
            get QBPackageModule() {
                if (true) {
                    return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBPackageModule.js").QBPackageModule
                } else {
                    return require("./lib/modules/QBPackageModule.ios").QBPackageModule
                }
            },
            get QBActionSheetModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBActionSheetModule.js").QBActionSheetModule
            },
            get QBAudioPlayerModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBAudioPlayerModule.js").QBAudioPlayerModule
            },
            get QBAudioStorageModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBAudioStorageModule.js").QBAudioStorageModule
            },
            get QBAudioDownloadModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBAudioDownloadModule.js").QBAudioDownloadModule
            },
            get QBRechargeModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBRechargeModule.js").QBRechargeModule
            },
            get QBListViewWrapper() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBListViewWrapper.js").QBListViewWrapper
            },
            get QBRefreshWebView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBRefreshWebView.js").QBRefreshWebView
            },
            get QBKeyboardAccessoryView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBKeyboardAccessoryView.js").QBKeyboardAccessoryView
            },
            get QBRichEditView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBRichEditView.js").QBRichEditView
            },
            get QBFileModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBFileModule.js").QBFileModule
            },
            get QBSimpleAudioPlayer() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBSimpleAudioPlayer.js").QBSimpleAudioPlayer
            },
            get QBOfflineResourceModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBOfflineResourceModule.js").QBOfflineResourceModule
            },
            get QBFavoritesModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBFavoritesModule.js").QBFavoritesModule
            },
            get QBPictureModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBPictureModule.js").QBPictureModule
            },
            get QBPickerView() {
                if (true) {
                    return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBPickerView.android.js").QBPickerView
                } else {
                    return require("./lib/components/QBPickerView.ios").QBPickerView
                }
            },
            get QBDebugModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBDebugModule.js").QBDebugModule
            },
            get QBTextUtilsModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBTextUtilsModule.js").QBTextUtilsModule
            },
            get QBHistoryModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBHistoryModule.js").QBHistoryModule
            },
            get QBAudioSession() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBAudioSession.js").QBAudioSession
            },
            get QBSharedSettingModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBSharedSettingModule.js").QBSharedSettingModule
            },
            get QBUserSettingModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBUserSettingModule.js").QBUserSettingModule
            },
            get QBPhoneCallModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBPhoneCallModule.js").QBPhoneCallModule
            },
            get QBNovelText() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBNovelText.js").QBNovelText
            },
            get QBJsNativeCacheModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBJsNativeCacheModule.js").QBJsNativeCacheModule
            },
            get QBAppMarketGuideModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBAppMarketGuideModule.js").QBAppMarketGuideModule
            },
            get QBVideoViewForAms() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBVideoViewForAms.js").
            default
            },
            get QBVideoAnimationView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBVideoAnimationView.js").
            default
            },
            get QBLogsModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBLogsModule.js").
            default
            },
            get QBNowLiveModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBNowLiveModule.js").
            default
            },
            get QBMessageBubbleModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBMessageBubbleModule.js").
            default
            },
            get QBQQMiniGameModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBQQMiniGameModule.js").
            default
            },
            get PCGStatModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/PCGStatModule.js").
            default
            },
            get QBBusinessADModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBBusinessADModule.js").
            default
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBDoubleScrollView.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBDoubleScrollView", (function() {
            return QBDoubleScrollView
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        const COMMAND = {
            SCROLL_TO: "scrollTo"
        };
        let QBDoubleScrollView = class QBDoubleScrollView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props)
            }
            renderAndroid() {
                const contentContainerStyle = styles.contentContainerVertical;
                let newProps = Object.assign({},
                this.props);
                const newStyle = Object.assign({},
                this.props.style, styles.baseVertical);
                newProps.style = newStyle;
                let contentContainer = null;
                if (this.props.header && this.props.container) {
                    delete newProps.header;
                    delete newProps.container;
                    contentContainer = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], {
                        style: contentContainerStyle
                    },
                    this.props.header, this.props.container)
                } else {
                    contentContainer = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], {
                        style: contentContainerStyle
                    },
                    this.props.children)
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", newProps, contentContainer)
            }
            renderIOS() {
                let newProps = Object.assign({},
                this.props);
                const newStyle = Object.assign({},
                this.props.style, styles.baseVertical);
                newProps.style = newStyle;
                if (this.props.header && this.props.container) {
                    delete newProps.header;
                    delete newProps.container;
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", newProps, this.props.header, this.props.container)
                } else {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", newProps, this.props.children)
                }
            }
            render() {
                if (__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["Platform"].OS === "ios") {
                    return this.renderIOS()
                } else {
                    return this.renderAndroid()
                }
            }
            scrollTo(scrollParam) {
                if (scrollParam) {
                    let self = this;
                    let x = scrollParam.x;
                    let y = scrollParam.y;
                    let animated = scrollParam.animated;
                    __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(self, COMMAND.SCROLL_TO, [x || 0, y || 0, animated || false])
                }
            }
        };
        const styles = __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["StyleSheet"].create({
            baseVertical: {
                flexGrow: 1,
                flexShrink: 1,
                flexDirection: "column",
                overflow: "scroll"
            },
            contentContainerVertical: {
                collapse: false,
                flexDirection: "column"
            }
        })
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBDownloadButton.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBDownloadButton", (function() {
            return QBDownloadButton
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
        var __WEBPACK_IMPORTED_MODULE_2__modules_QBDeviceModule__ = __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBDeviceModule.js");
        var __WEBPACK_IMPORTED_MODULE_3__modules_QBPackageModule__ = __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBPackageModule.js");
        var __WEBPACK_IMPORTED_MODULE_4__modules_QBDownloadModule__ = __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBDownloadModule.js");
        var __WEBPACK_IMPORTED_MODULE_5__QBStyledButton__ = __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/components/QBStyledButton.js");
        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise((function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value
                        } catch(error) {
                            reject(error);
                            return
                        }
                        if (info.done) {
                            resolve(value)
                        } else {
                            return Promise.resolve(value).then((function(value) {
                                step("next", value)
                            }), (function(err) {
                                step("throw", err)
                            }))
                        }
                    }
                    return step("next")
                }))
            }
        }
        let QBDownloadButton = class QBDownloadButton extends __WEBPACK_IMPORTED_MODULE_1_react___default.a.Component {
            static get DownloadButtonStatus() {
                return {
                    BTN_STATUS_NONE: 1,
                    BTN_STATUS_DOWNLOADING: 2,
                    BTN_STATUS_PAUSE: 3,
                    BTN_STATUS_DOWNLOAD_COMPLETE: 4,
                    BTN_STATUS_INSTALLED: 5,
                    BTN_STATUS_UPDATE: 6,
                    BTN_STATUS_FAIL: 7
                }
            }
            constructor(props) {
                super(props);
                this.state = {
                    text: "下载",
                    style: 11,
                    progress: 0,
                    clickable: true,
                    enable: true,
                    resumeLoading: true,
                    textSize: 14
                };
                this.buttonState = QBDownloadButton.DownloadButtonStatus.BTN_STATUS_NONE;
                this.componentWillReceiveProps(props)
            }
            componentWillReceiveProps(props) {
                let appInfo = props.appInfo;
                if (!appInfo) {
                    return
                }
                if (this.currAppInfo) {
                    let oldPackageName = this.currAppInfo.pkgName;
                    if (appInfo.packageName != oldPackageName) {
                        __WEBPACK_IMPORTED_MODULE_3__modules_QBPackageModule__["QBPackageModule"].removePkgStatusListener(oldPackageName, this)
                    }
                    let oldUrl = this.currAppInfo.url;
                    if (appInfo.url != oldUrl) {
                        __WEBPACK_IMPORTED_MODULE_4__modules_QBDownloadModule__["QBDownloadModule"].removeDownloadStatusListener(oldUrl, this)
                    }
                }
                this.currAppInfo = {
                    url: appInfo.url,
                    pkgName: appInfo.pkgName,
                    fileName: appInfo.fileName == undefined ? appInfo.pkgName + ".apk": appInfo.fileName + ".apk",
                    fileSize: appInfo.fileSize || "0",
                    confirmWifiDownload: appInfo.confirmWifiDownload == undefined ? true: appInfo.confirmWifiDownload,
                    needToast: appInfo.needToast == undefined ? true: appInfo.needToast,
                    iconUrl: appInfo.iconUrl || "",
                    versionCode: appInfo.versionCode || "0",
                    retryUrls: appInfo.retryUrls != undefined && Array.isArray(appInfo.retryUrls) ? appInfo.retryUrls: [],
                    fromWhere: appInfo.fromWhere,
                    needAutoInstall: appInfo.needAutoInstall == undefined ? true: appInfo.needAutoInstall,
                    reportString: appInfo.reportString || ""
                };
                this.currOnClickCallback = undefined;
                let onClickCallback = props.onClick;
                if (onClickCallback && onClickCallback instanceof Function) {
                    this.currOnClickCallback = onClickCallback
                }
                this.currDownloadStatusCallback = undefined;
                let onDownloadStatusCallback = props.onDowloadStatusChanged;
                if (onDownloadStatusCallback && onDownloadStatusCallback instanceof Function) {
                    this.currDownloadStatusCallback = onDownloadStatusCallback
                }
                this.initAppStatusInfo(props)
            }
            componentDidMount() {}
            componentWillUnmount() {
                if (this.currAppInfo) {
                    __WEBPACK_IMPORTED_MODULE_3__modules_QBPackageModule__["QBPackageModule"].removePkgStatusListener(this.currAppInfo.pkgName, this);
                    __WEBPACK_IMPORTED_MODULE_4__modules_QBDownloadModule__["QBDownloadModule"].removeDownloadStatusListener(this.currAppInfo.url, this)
                }
            }
            render() {
                let self = this;
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__QBStyledButton__["QBStyledButton"], {
                    style: self.props.style,
                    buttonInfo: self.state,
                    onClick: this._OnClick.bind(this)
                })
            }
            _OnClick() {
                let nowBtnStatus = this.buttonState;
                if (nowBtnStatus == QBDownloadButton.DownloadButtonStatus.BTN_STATUS_NONE || nowBtnStatus == QBDownloadButton.DownloadButtonStatus.BTN_STATUS_UPDATE || nowBtnStatus == QBDownloadButton.DownloadButtonStatus.BTN_STATUS_FAIL || nowBtnStatus == QBDownloadButton.DownloadButtonStatus.BTN_STATUS_PAUSE) {
                    __WEBPACK_IMPORTED_MODULE_4__modules_QBDownloadModule__["QBDownloadModule"].startDownload(this.currAppInfo);
                    let self = this;
                    let lastAppInfo = Object.assign({},
                    this.currAppInfo);
                    __WEBPACK_IMPORTED_MODULE_2__modules_QBDeviceModule__["QBDeviceModule"].getDeviceInfo().then(bundle =>{
                        if (!lastAppInfo || lastAppInfo.url !== self.currAppInfo.url) {
                            return
                        }
                        if (bundle && bundle.networkType && bundle.networkType.indexOf("wifi") >= 0) {
                            let currBtnStatus = self.buttonState;
                            if (currBtnStatus == QBDownloadButton.DownloadButtonStatus.BTN_STATUS_NONE || currBtnStatus == QBDownloadButton.DownloadButtonStatus.BTN_STATUS_UPDATE || currBtnStatus == QBDownloadButton.DownloadButtonStatus.BTN_STATUS_FAIL || currBtnStatus == QBDownloadButton.DownloadButtonStatus.BTN_STATUS_PAUSE) {
                                self.doUpdateButtonView(QBDownloadButton.DownloadButtonStatus.BTN_STATUS_DOWNLOADING, this.state.progress)
                            }
                        }
                    })
                } else if (nowBtnStatus == QBDownloadButton.DownloadButtonStatus.BTN_STATUS_DOWNLOAD_COMPLETE) {
                    __WEBPACK_IMPORTED_MODULE_4__modules_QBDownloadModule__["QBDownloadModule"].installApp(this.currAppInfo)
                } else if (nowBtnStatus == QBDownloadButton.DownloadButtonStatus.BTN_STATUS_DOWNLOADING) {
                    __WEBPACK_IMPORTED_MODULE_4__modules_QBDownloadModule__["QBDownloadModule"].pauseDownload(this.currAppInfo);
                    this.doUpdateButtonView(QBDownloadButton.DownloadButtonStatus.BTN_STATUS_PAUSE, this.state.progress)
                } else if (nowBtnStatus == QBDownloadButton.DownloadButtonStatus.BTN_STATUS_INSTALLED) {
                    __WEBPACK_IMPORTED_MODULE_3__modules_QBPackageModule__["QBPackageModule"].runApp(this.currAppInfo.pkgName)
                }
                if (this.currOnClickCallback) {
                    this.currOnClickCallback(nowBtnStatus, this.currAppInfo)
                }
                return true
            }
            initAppStatusInfo(nextProps) {
                var _this = this;
                return _asyncToGenerator((function * () {
                    let appStatusInfo = yield __WEBPACK_IMPORTED_MODULE_3__modules_QBPackageModule__["QBPackageModule"].getAppPkgInfo(_this.currAppInfo.pkgName);
                    let downloadStatusInfo = yield __WEBPACK_IMPORTED_MODULE_4__modules_QBDownloadModule__["QBDownloadModule"].getDownloadInfo(_this.currAppInfo.url);
                    _this.refreshButtonView(appStatusInfo, downloadStatusInfo);
                    __WEBPACK_IMPORTED_MODULE_3__modules_QBPackageModule__["QBPackageModule"].addPkgStatusListener(_this.currAppInfo.pkgName, _this);
                    __WEBPACK_IMPORTED_MODULE_4__modules_QBDownloadModule__["QBDownloadModule"].addDownloadStatusListener(_this.currAppInfo.url, _this)
                }))()
            }
            onPackageStatusChanged(packageInfo) {
                var _this2 = this;
                return _asyncToGenerator((function * () {
                    if (packageInfo == undefined || packageInfo.pkgName != _this2.currAppInfo.pkgName) {
                        return
                    }
                    let downloadStatusInfo = yield __WEBPACK_IMPORTED_MODULE_4__modules_QBDownloadModule__["QBDownloadModule"].getDownloadInfo(_this2.currAppInfo.url);
                    _this2.refreshButtonView(packageInfo, downloadStatusInfo)
                }))()
            }
            onDownloadStatusChanged(downloadInfo) {
                var _this3 = this;
                return _asyncToGenerator((function * () {
                    if (downloadInfo == undefined || downloadInfo.pkgName != _this3.currAppInfo.pkgName) {
                        return
                    }
                    if (_this3.buttonState == QBDownloadButton.DownloadButtonStatus.BTN_STATUS_PAUSE) {
                        let downloadState = downloadInfo.downloadStatus;
                        if (downloadState == __WEBPACK_IMPORTED_MODULE_4__modules_QBDownloadModule__["QBDownloadModule"].DOWNLOAD_STATUS_PROGRESS && _this3.currAppInfo.pkgName == downloadInfo.pkgName) {
                            return
                        }
                    }
                    let appPkgInfo = yield __WEBPACK_IMPORTED_MODULE_3__modules_QBPackageModule__["QBPackageModule"].getAppPkgInfo(_this3.currAppInfo.pkgName);
                    _this3.refreshButtonView(appPkgInfo, downloadInfo);
                    if (_this3.currDownloadStatusCallback) {
                        _this3.currDownloadStatusCallback(downloadInfo, _this3.currAppInfo)
                    }
                }))()
            }
            judgeButtonStatus(appPkgInfo, downloadInfo) {
                let btnStatus = undefined;
                if (downloadInfo) {
                    let downloadState = downloadInfo.downloadStatus;
                    if (downloadState == __WEBPACK_IMPORTED_MODULE_4__modules_QBDownloadModule__["QBDownloadModule"].DOWNLOAD_STATUS_NONE || downloadState == __WEBPACK_IMPORTED_MODULE_4__modules_QBDownloadModule__["QBDownloadModule"].DOWNLOAD_STATUS_FILE_DELETED) {
                        btnStatus = QBDownloadButton.DownloadButtonStatus.BTN_STATUS_NONE
                    } else if (downloadState >= __WEBPACK_IMPORTED_MODULE_4__modules_QBDownloadModule__["QBDownloadModule"].DOWNLOAD_STATUS_CREATED && downloadState <= __WEBPACK_IMPORTED_MODULE_4__modules_QBDownloadModule__["QBDownloadModule"].DOWNLOAD_STATUS_PROGRESS) {
                        btnStatus = QBDownloadButton.DownloadButtonStatus.BTN_STATUS_DOWNLOADING
                    } else if (downloadState == __WEBPACK_IMPORTED_MODULE_4__modules_QBDownloadModule__["QBDownloadModule"].DOWNLOAD_STATUS_COMPLETED) {
                        btnStatus = QBDownloadButton.DownloadButtonStatus.BTN_STATUS_DOWNLOAD_COMPLETE
                    } else if (downloadState == __WEBPACK_IMPORTED_MODULE_4__modules_QBDownloadModule__["QBDownloadModule"].DOWNLOAD_STATUS_CANCELED) {
                        btnStatus = QBDownloadButton.DownloadButtonStatus.BTN_STATUS_PAUSE
                    } else if (downloadState == __WEBPACK_IMPORTED_MODULE_4__modules_QBDownloadModule__["QBDownloadModule"].DOWNLOAD_STATUS_FAILED) {
                        btnStatus = QBDownloadButton.DownloadButtonStatus.BTN_STATUS_FAIL
                    }
                }
                if (btnStatus == undefined || btnStatus == QBDownloadButton.DownloadButtonStatus.BTN_STATUS_NONE || btnStatus == QBDownloadButton.DownloadButtonStatus.BTN_STATUS_DOWNLOAD_COMPLETE) {
                    if (appPkgInfo && appPkgInfo.pkgStatus === __WEBPACK_IMPORTED_MODULE_3__modules_QBPackageModule__["QBPackageModule"].PACKAGE_STATUS_INSTALLED) {
                        let currVersion = Number(appPkgInfo.versionCode);
                        let remoteVersion = Number(this.currAppInfo.versionCode);
                        if (isNaN(currVersion) || isNaN(remoteVersion)) {
                            btnStatus = QBDownloadButton.DownloadButtonStatus.BTN_STATUS_NONE
                        } else if (currVersion < remoteVersion) {
                            if (btnStatus !== QBDownloadButton.DownloadButtonStatus.BTN_STATUS_DOWNLOAD_COMPLETE) {
                                btnStatus = QBDownloadButton.DownloadButtonStatus.BTN_STATUS_UPDATE
                            }
                        } else {
                            btnStatus = QBDownloadButton.DownloadButtonStatus.BTN_STATUS_INSTALLED
                        }
                    }
                }
                if (btnStatus == undefined) {
                    btnStatus = QBDownloadButton.DownloadButtonStatus.BTN_STATUS_NONE
                }
                return btnStatus
            }
            doUpdateButtonView(btnStatus, progress) {
                let btnText = this.getBtnText(btnStatus);
                let btnStyle = this.getBtnStyle(btnStatus);
                let btnEnable = this.getBtnEnable(btnStatus);
                let btnTextSize = this.getBtnTextSize(btnStatus);
                this.setState({
                    text: btnText,
                    style: btnStyle,
                    progress: progress,
                    clickable: btnEnable,
                    enable: btnEnable,
                    textSize: btnTextSize
                });
                this.buttonState = btnStatus
            }
            refreshButtonView(appPkgInfo, downloadInfo) {
                let btnStatus = this.judgeButtonStatus(appPkgInfo, downloadInfo);
                let progress = 0;
                if (downloadInfo && typeof downloadInfo.getProgress === "function") {
                    progress = downloadInfo.getProgress()
                }
                this.doUpdateButtonView(btnStatus, progress)
            }
            getBtnText(btnStatus) {
                switch (btnStatus) {
                case QBDownloadButton.DownloadButtonStatus.BTN_STATUS_UPDATE:
                    return "更新";
                case QBDownloadButton.DownloadButtonStatus.BTN_STATUS_NONE:
                    return "下载";
                case QBDownloadButton.DownloadButtonStatus.BTN_STATUS_DOWNLOADING:
                    return "暂停";
                case QBDownloadButton.DownloadButtonStatus.BTN_STATUS_PAUSE:
                    return "下载";
                case QBDownloadButton.DownloadButtonStatus.BTN_STATUS_DOWNLOAD_COMPLETE:
                    return "安装";
                case QBDownloadButton.DownloadButtonStatus.BTN_STATUS_INSTALLED:
                    return "打开";
                case QBDownloadButton.DownloadButtonStatus.BTN_STATUS_FAIL:
                    return "失败重试"
                }
            }
            getBtnStyle(btnStatus) {
                switch (btnStatus) {
                case QBDownloadButton.DownloadButtonStatus.BTN_STATUS_UPDATE:
                case QBDownloadButton.DownloadButtonStatus.BTN_STATUS_NONE:
                case QBDownloadButton.DownloadButtonStatus.BTN_STATUS_DOWNLOAD_COMPLETE:
                case QBDownloadButton.DownloadButtonStatus.BTN_STATUS_INSTALLED:
                case QBDownloadButton.DownloadButtonStatus.BTN_STATUS_FAIL:
                    return 7;
                case QBDownloadButton.DownloadButtonStatus.BTN_STATUS_DOWNLOADING:
                case QBDownloadButton.DownloadButtonStatus.BTN_STATUS_PAUSE:
                    return 11
                }
            }
            getBtnEnable(btnStatus) {
                if (btnStatus == QBDownloadButton.DownloadButtonStatus.BTN_STATUS_INSTALLED) {
                    if (this.currAppInfo.pkgName.indexOf("com.tencent.mtt") != -1) {
                        return false
                    }
                }
                return true
            }
            getBtnTextSize(btnStatus) {
                let textSize = 14;
                if (this.props.textSize != undefined) {
                    textSize = this.props.textSize
                }
                if (btnStatus == QBDownloadButton.DownloadButtonStatus.BTN_STATUS_FAIL) {
                    if (textSize > 4) {
                        return textSize - 4
                    } else {
                        return textSize
                    }
                }
                return textSize
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBExploreZView.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBExploreZView", (function() {
            return QBExploreZView
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var _extends = Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        let QBExploreZView = class QBExploreZView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props)
            }
            render() {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({},
                this.props, {
                    onExploreClick: this._onExploreClick.bind(this)
                }))
            }
            _onExploreClick(e) {
                this.props.onExploreClick && this.props.onExploreClick(e)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBFooterView.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBFooterView", (function() {
            return QBFooterView
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        let QBFooterView = class QBFooterView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            static get loadingStatus() {
                return {
                    LOADING_STATUS_NONE: 0,
                    LOADING_STATUS_LOADING: 1,
                    LOADING_STATUS_FINISH: 2,
                    LOADING_STATUS_ERROR: 3,
                    LOADING_STATUS_ERROR_RETRY: 4,
                    LOADING_STATUS_ERROR_PULL_UP: 5,
                    LOADING_STATUS_NOMORE_CLICKBACKWARDS: 6,
                    LOADING_STATUS_BLANK: 7,
                    LOADING_STATUS_FINISH_WITH_NUM: 8,
                    LOADING_STATUS_ERROR_NETWORK_DISCONNECTED: 9,
                    LOADING_STATUS_ERROR_NETWORK_ERROR: 10
                }
            }
            render() {
                let nativeProps = Object.assign({},
                this.props, {});
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", nativeProps)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBGallery.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBGallery", (function() {
            return QBGallery
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        let Indicator = class Indicator extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                this.state = {
                    current: this.props.current || 0
                }
            }
            render() {
                let itemCount = this.props.count;
                let currentIndex = this.state.current;
                let indicatorItems = [];
                for (let i = 0; i < itemCount; i++) {
                    if (currentIndex == i) {
                        indicatorItems.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["Image"], {
                            style: style_indicator_item,
                            src: img_indicator_item_checked,
                            noPicMode: {
                                enable: false
                            }
                        }))
                    } else {
                        indicatorItems.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["Image"], {
                            style: style_indicator_item,
                            src: img_indicator_item_unchecked,
                            noPicMode: {
                                enable: false
                            }
                        }))
                    }
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], {
                    style: style_indicator
                },
                indicatorItems)
            }
            update(currentIndex) {
                this.setState({
                    current: currentIndex
                })
            }
        };
        let QBGallery = class QBGallery extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                this.currentPage = this.props.currentPage || 0
            }
            render() {
                let indicatorView = "";
                let enableIndicator = true;
                if (this.props.indicatorInfo && this.props.indicatorInfo.enableIndicator != undefined) {
                    enableIndicator = this.props.indicatorInfo.enableIndicator
                }
                let itemCount = this.props.children.length;
                if (enableIndicator) {
                    indicatorView = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Indicator, {
                        ref: "indicator",
                        count: itemCount
                    })
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], {
                    style: [this.props.style, {
                        justifyContent: "center"
                    }]
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["ViewPager"], {
                    ref: "viewpager",
                    style: {
                        flex: 1
                    },
                    initialPage: this.currentPage,
                    scrollEnabled: this.props.scrollEnabled,
                    onPageSelected: this._onPageSelected.bind(this),
                    onPageScroll: this._onPageScroll.bind(this),
                    onPageScrollStateChanged: this._onPageScrollStateChanged.bind(this),
                    isGallery: true
                },
                this.props.children), indicatorView)
            }
            setPage(index) {
                this.refs.viewpager && this.refs.viewpager.setPage(index)
            }
            setPageWithoutAnimation(index) {
                this.refs.viewpager && this.refs.viewpager.setPageWithoutAnimation(index)
            }
            _onPageSelected(e) {
                let pos = e && e.position || 0;
                this.currentPage = pos;
                this.refs.indicator && this.refs.indicator.update && this.refs.indicator.update(pos);
                this.props.onPageSelected && this.props.onPageSelected(e)
            }
            _onPageScroll(e) {
                this.props.onPageScroll && this.props.onPageScroll(e)
            }
            _onPageScrollStateChanged(e) {
                this.props.onPageScrollStateChanged && this.props.onPageScrollStateChanged(e)
            }
        };
        const style_indicator = {
            position: "absolute",
            bottom: 6,
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row"
        };
        const style_indicator_item = {
            width: 4,
            height: 4,
            marginLeft: 2.5,
            marginRight: 2.5
        };
        const img_indicator_item_unchecked = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAAElBMVEXMzMzMzMzMzMzMzMzMzMzMzMweCT8dAAAABnRSTlOZAXxCdxBGkdB1AAAANUlEQVQI12MQFHZgMRRkEFVgYGAKZBBiAAJFBgMQxczgAKJYGFAAVBCqBKoBpl1QWIHJUBAAnNADl3MAGCUAAAAASUVORK5CYII=";
        const img_indicator_item_checked = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAAG1BMVEUAAACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqp3aYijAAAACHRSTlMA9s/HBm4bbfbVqmEAAAA2SURBVAjXY2BwNRQOYWBg0+joaEpgcOoAAhWGChDVzmABopoZJEBUI5SCCUaAqFaoBqh2qGEAoKQcS2Mt/zkAAAAASUVORK5CYII="
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBGalleryNew.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBGalleryNew", (function() {
            return QBGalleryNew
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        var _class, _temp;
        let Indicator = class Indicator extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                this.state = {
                    current: this.props.current || 0
                }
            }
            render() {
                let itemCount = this.props.count;
                let currentIndex = this.state.current;
                let indicatorItems = [];
                let transform_dotColors = this.props.dotColors;
                let transform_activeDotColors = this.props.activeDotColors;
                for (let i = 0; i < itemCount; i++) {
                    if (currentIndex == i) {
                        indicatorItems.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], {
                            style: [style_indicator_item, {
                                backgroundColors: transform_activeDotColors
                            }]
                        }))
                    } else {
                        indicatorItems.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], {
                            style: [style_indicator_item, {
                                backgroundColors: transform_dotColors
                            }]
                        }))
                    }
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], {
                    style: style_indicator
                },
                indicatorItems)
            }
            update(currentIndex) {
                this.setState({
                    current: currentIndex
                })
            }
        };
        let QBGalleryNew = (_temp = _class = class QBGalleryNew extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                this.currentPageIndex = this.props.currentPage || 0;
                this.dragFlag = false;
                this.offsetFlag = false
            }
            componentDidMount() {
                if (this.props.duration > 0) {
                    this.createTimer()
                }
            }
            componentDidupdate() {
                if (this.props.duration > 0) {
                    this.createTimer()
                }
            }
            componentWillReceiveProps(nextProps) {
                if (nextProps.currentPage != this.currentPageIndex) {
                    this.refs.viewpager && this.refs.viewpager.setPage(nextProps.currentPage)
                }
            }
            componentWillUnmount() {
                this.clearTimer()
            }
            createTimer() {
                if (this.dragFlag) {
                    this.dragFlag = false
                }
                this.clearTimer();
                let pageIndex = this.currentPageIndex;
                this.offsetFlag = true;
                if (this.refs.viewpager && this.props.images.length > 1) {
                    this.bannerInterval = setInterval(() =>{
                        if (this.offsetFlag) {
                            this.currentPageIndex = pageIndex;
                            this.offsetFlag = false
                        }
                        this.currentPageIndex++;
                        if (this.currentPageIndex >= this.props.images.length) {
                            this.currentPageIndex = 0
                        }
                        this.refs.viewpager.setPage(this.currentPageIndex)
                    },
                    this.props.duration * 1e3)
                } else {
                    this.bannerInterval = null
                }
            }
            clearTimer() {
                this.bannerInterval && clearInterval(this.bannerInterval);
                this.bannerInterval = null
            }
            render() {
                let itemCount = this.props.images.length;
                let indicatorView = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Indicator, {
                    ref: "indicator",
                    count: itemCount,
                    dotColors: this.props.dotColors,
                    activeDotColors: this.props.activeDotColors
                });
                let childrenViews = [];
                for (let i = 0; i < itemCount; i++) {
                    childrenViews.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["Image"], {
                        src: this.props.images[i],
                        style: {
                            flex: 1
                        }
                    }))
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], {
                    style: [this.props.style, {
                        justifyContent: "center"
                    }]
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["ViewPager"], {
                    ref: "viewpager",
                    style: {
                        flex: 1
                    },
                    initialPage: this.props.currentPage,
                    scrollEnabled: true,
                    onPageSelected: this._onSelectedPage.bind(this),
                    onPageScrollStateChanged: this._onPageScrollStateChanged.bind(this),
                    isGallery: true
                },
                childrenViews), indicatorView)
            }
            _onPageScrollStateChanged(state) {
                if (state === "dragging") {
                    this.clearTimer();
                    this.dragFlag = true
                } else {
                    if (this.dragFlag) {
                        this.createTimer()
                    }
                }
            }
            _onPageDidAppeared(e) {
                let pos = e && e.position || 0;
                if (this.props.onPageDidAppeared) {
                    this.props.onPageDidAppeared(pos)
                }
            }
            _onSelectedPage(e) {
                let pos = e && e.position || 0;
                this.currentPageIndex = pos;
                this.refs.indicator && this.refs.indicator.update && this.refs.indicator.update(pos);
                this.props.onSelectedPage && this.props.onSelectedPage(pos);
                this._onPageDidAppeared(e)
            }
        },
        _class.defaultProps = {
            duration: 0,
            currentPage: 0,
            images: [],
            dotColors: ["#2424244c", "#686d7466"],
            activeDotColors: ["#ffffffff", "#2424244c"]
        },
        _temp);
        const style_indicator = {
            position: "absolute",
            bottom: 6,
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row"
        };
        const style_indicator_item = {
            width: 4,
            height: 4,
            marginLeft: 2.5,
            marginRight: 2.5,
            borderRadius: 2
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBGifImageView.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBGifImageView", (function() {
            return QBGifImageView
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var _extends = Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        let QBGifImageView = class QBGifImageView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                let startPlay;
                if (props.gifInfo && typeof props.gifInfo.startPlay === "boolean") {
                    startPlay = props.gifInfo.startPlay
                } else {
                    startPlay = true
                }
                this.state = {
                    startPlay: startPlay
                }
            }
            clickGif() {
                const {
                    playGifReport: playGifReport
                } = this.props;
                if (typeof playGifReport === "function") {
                    playGifReport()
                }
                this.setState({
                    startPlay: !this.state.startPlay
                });
                return true
            }
            render() {
                const {
                    startPlay: startPlay
                } = this.state;
                const nativeProps = _extends({},
                this.props, {
                    gifInfo: _extends({},
                    this.props.gifInfo, {
                        startPlay: startPlay
                    })
                });
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", nativeProps)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBKeyboardAccessoryView.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBKeyboardAccessoryView", (function() {
            return QBKeyboardAccessoryView
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        const COMMAND = {
            SHOW_ACCESSORY_VIEW: "show_accessory_view",
            HIDE_ACCESSORY_VIEW: "hide_accessory_view"
        };
        let QBKeyboardAccessoryItem = class QBKeyboardAccessoryItem extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props)
            }
            render() {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", this.props)
            }
        };
        let QBKeyboardAccessoryView = class QBKeyboardAccessoryView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props)
            }
            render() {
                console.log("QBKeyboardAccessoryView", this.props.inputContainer, this.props.accessoryContainer);
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
                    style: this.props.style,
                    onAccessoryChange: this._onAccessoryChange.bind(this)
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(QBKeyboardAccessoryItem, {
                    type: "input"
                },
                this.props.inputContainer), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(QBKeyboardAccessoryItem, {
                    type: "accessory"
                },
                this.props.accessoryContainer))
            }
            _onAccessoryChange(event) {
                console.log("_onAccessoryChange", event);
                this.props.onAccessoryChange && this.props.onAccessoryChange(event)
            }
            showAccessoryView(skinType = 0) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.SHOW_ACCESSORY_VIEW, [skinType])
            }
            hideAccessoryView(noInputMethod = "") {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.HIDE_ACCESSORY_VIEW, [noInputMethod])
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBListView.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBListView", (function() {
            return QBListView
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        var _extends = Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        var _class, _temp;
        let QBListView = (_temp = _class = class QBListView extends __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["ListView"] {
            constructor(props) {
                super(props)
            }
            static get QBListViewLoadingStatus() {
                return {
                    LOADING_STATUS_SUCCESS: 0,
                    LOADING_STATUS_ERROR: 1,
                    LOADING_STATUS_NOMORE_DATA_SCROLLTOTOP: 2,
                    LOADING_STATUS_NOMORE_DATA_DISABLECLICK: 3,
                    LOADING_STATUS_NONE: 4
                }
            }
            processColor(colors) {
                if (Array.isArray(colors)) {
                    return colors.map(oneColor =>{
                        return Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(oneColor)
                    })
                } else {
                    return Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(colors)
                }
            }
            endReachedCompleted(status, text = "") {
                if (typeof status != "number" || typeof text != "string") {
                    return
                }
                let self = this;
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(self, "endReachedCompleted", [status, text])
            }
            refreshCompleted(status, text = "", duration = 1e3, textColor = "", imageUrl = "") {
                if (typeof status != "number" || typeof text != "string") {
                    return
                }
                if (typeof imageUrl != "string") imageUrl = "";
                let self = this;
                if ("ios" === __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["Platform"].OS) {
                    let methodsMap = __GLOBAL__.NativeModules["ListView"];
                    let methodsArray = Object.keys(methodsMap);
                    let contain = -1 != methodsArray.indexOf("refreshCompletedWithImage");
                    if (contain) {
                        let color = self.processColor(textColor);
                        if (undefined == color) color = self.processColor("#4c9afa");
                        __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(self, "refreshCompletedWithImage", [status, text, duration, color, imageUrl])
                    } else {
                        __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(self, "refreshCompleted", [status, text, duration])
                    }
                } else {
                    let color = self.processColor(textColor);
                    if (undefined == color) color = self.processColor("#4c9afa");
                    __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(self, "refreshCompleted", [status, text, duration, color, imageUrl])
                }
            }
            startRefresh(type = 1) {
                if (typeof type != "number") {
                    return
                }
                let self = this;
                if (type == 1) {
                    __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(self, "startRefresh", [])
                } else {
                    __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(self, "startRefreshWithType", [type])
                }
            }
            startLoadMore() {
                let self = this;
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(self, "startLoadMore", [])
            }
            callExposureReport() {
                let self = this;
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(self, "callExposureReport", [])
            }
            setRefreshPromptInfo({
                text: text = "",
                textColor: textColor = 0,
                textSize: textSize = 0,
                imgUrl: imgUrl = "",
                imgWidth: imgWidth = 0,
                imgHeight: imgHeight = 0
            }) {
                if (textColor) {
                    textColor = Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(textColor)
                }
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "setRefreshPromptInfo", [text, textColor, textSize, imgUrl, imgWidth, imgHeight])
            }
            setRefreshPromptInfoExt({
                text: text = "",
                textColor: textColor = 0,
                textSize: textSize = 0,
                imgUrl: imgUrl = "",
                imgWidth: imgWidth = 0,
                imgHeight: imgHeight = 0,
                visibleHeight: visibleHeight = 0
            }) {
                if (textColor) {
                    textColor = Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(textColor)
                }
                let methodName = "setRefreshPromptInfo";
                if ("android" === "ios" || __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["Platform"].OS === "ios") {
                    methodName = "setRefreshPromptInfoWithVisibleHeight"
                }
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, methodName, [text, textColor, textSize, imgUrl, imgWidth, imgHeight, visibleHeight])
            }
            refreshCompletedWithBgColor({
                status: status = 0,
                text: text = "",
                duration: duration = 300,
                textColor: textColor = 0,
                textSize: textSize = 0,
                imgUrl: imgUrl = "",
                bgBeginColor: bgBeginColor = 0,
                bgEndColor: bgEndColor = 0
            }) {
                if (textColor) {
                    textColor = Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(textColor)
                }
                if (bgBeginColor) {
                    bgBeginColor = Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(bgBeginColor)
                }
                if (bgEndColor) {
                    bgEndColor = Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(bgEndColor)
                }
                if (true) {
                    if (false) {
                        UIManagerModule.callUIFunction(this, "refreshCompletedWithBgColor", [status, text, duration, textColor, imgUrl, bgBeginColor, bgEndColor, textSize])
                    } else {
                        __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "refreshCompleted", [status, text, duration, textColor, imgUrl, bgBeginColor, bgEndColor, textSize])
                    }
                } else {
                    if ("ios" === Platform.OS) {
                        UIManagerModule.callUIFunction(this, "refreshCompletedWithBgColor", [status, text, duration, textColor, imgUrl, bgBeginColor, bgEndColor, textSize])
                    } else {
                        UIManagerModule.callUIFunction(this, "refreshCompleted", [status, text, duration, textColor, imgUrl, bgBeginColor, bgEndColor, textSize])
                    }
                }
            }
            refreshCompletedWithFrontImage({
                status: status = 0,
                text: text = "",
                duration: duration = 300,
                textColor: textColor = 0,
                textSize: textSize = 0,
                imgUrl: imgUrl = "",
                bgBeginColor: bgBeginColor = 0,
                bgEndColor: bgEndColor = 0,
                frontImgUrl: frontImgUrl = "",
                mainTab: mainTab = 0
            }) {
                if (textColor) {
                    textColor = Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(textColor)
                }
                if (bgBeginColor) {
                    bgBeginColor = Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(bgBeginColor)
                }
                if (bgEndColor) {
                    bgEndColor = Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(bgEndColor)
                }
                const args = [status, text, duration, textColor, imgUrl, bgBeginColor, bgEndColor, textSize];
                let methodName = "";
                if (true) {
                    if (false) {
                        methodName = "refreshCompletedWithFrontImage";
                        args.push(frontImgUrl)
                    } else {
                        if (frontImgUrl) {
                            imgUrl = frontImgUrl
                        }
                        methodName = "refreshCompleted";
                        args[4] = imgUrl;
                        if (Number.isInteger(mainTab)) {
                            args[8] = mainTab
                        }
                    }
                } else {
                    if ("ios" === Platform.OS) {
                        methodName = "refreshCompletedWithFrontImage";
                        args.push(frontImgUrl)
                    } else {
                        if (frontImgUrl) {
                            imgUrl = frontImgUrl
                        }
                        methodName = "refreshCompleted";
                        args[4] = imgUrl;
                        if (Number.isInteger(mainTab)) {
                            args[8] = mainTab
                        }
                    }
                }
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, methodName, args)
            }
            refreshCompletedWithScrollIndex({
                status: status = 0,
                text: text = "",
                duration: duration = 300,
                textColor: textColor = 0,
                textSize: textSize = 0,
                imgUrl: imgUrl = "",
                bgBeginColor: bgBeginColor = 0,
                bgEndColor: bgEndColor = 0,
                frontImgUrl: frontImgUrl = "",
                mainTab: mainTab = 0,
                scrollIndex: scrollIndex = 0
            },
            callback) {
                if (textColor) {
                    textColor = this.processColor(textColor)
                }
                if (bgBeginColor) {
                    bgBeginColor = this.processColor(bgBeginColor)
                }
                if (bgEndColor) {
                    bgEndColor = this.processColor(bgEndColor)
                }
                const args = [status, text, duration, textColor, imgUrl, bgBeginColor, bgEndColor, textSize];
                let methodName = "";
                if (!Number.isInteger(scrollIndex)) {
                    scrollIndex = 0
                }
                if ("android" === "ios" || __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["Platform"].OS === "ios") {
                    methodName = "refreshCompletedWithScrollIndex";
                    args.push(frontImgUrl);
                    args.push(scrollIndex)
                } else {
                    if (frontImgUrl) {
                        imgUrl = frontImgUrl
                    }
                    methodName = "refreshCompleted";
                    args[4] = imgUrl;
                    if (Number.isInteger(mainTab)) {
                        args[8] = mainTab
                    }
                    args.push(scrollIndex)
                }
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, methodName, args, callback)
            }
            refreshCompletedWithFrontImageAndCallback({
                status: status = 0,
                text: text = "",
                duration: duration = 300,
                textColor: textColor = 0,
                textSize: textSize = 0,
                imgUrl: imgUrl = "",
                bgBeginColor: bgBeginColor = 0,
                bgEndColor: bgEndColor = 0,
                frontImgUrl: frontImgUrl = "",
                mainTab: mainTab = 0
            },
            callback) {
                if (textColor) {
                    textColor = Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(textColor)
                }
                if (bgBeginColor) {
                    bgBeginColor = Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(bgBeginColor)
                }
                if (bgEndColor) {
                    bgEndColor = Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(bgEndColor)
                }
                const args = [status, text, duration, textColor, imgUrl, bgBeginColor, bgEndColor, textSize];
                let methodName = "";
                if (true) {
                    if (false) {
                        methodName = "refreshCompletedWithFrontImageAndCallback";
                        args.push(frontImgUrl)
                    } else {
                        if (frontImgUrl) {
                            imgUrl = frontImgUrl
                        }
                        methodName = "refreshCompleted";
                        args[4] = imgUrl;
                        if (Number.isInteger(mainTab)) {
                            args[8] = mainTab
                        }
                    }
                } else {
                    if ("ios" === Platform.OS) {
                        methodName = "refreshCompletedWithFrontImageAndCallback";
                        args.push(frontImgUrl)
                    } else {
                        if (frontImgUrl) {
                            imgUrl = frontImgUrl
                        }
                        methodName = "refreshCompleted";
                        args[4] = imgUrl;
                        if (Number.isInteger(mainTab)) {
                            args[8] = mainTab
                        }
                    }
                }
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, methodName, args, callback)
            }
            callOnScroll() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "callOnScroll", [])
            }
            onScrollEvent(event) {
                if (typeof this.props.onScroll === "function") {
                    this.props.onScroll(event)
                }
            }
            getVisibleItems(callback) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "getVisibleItems", event =>{
                    callback && typeof callback === "function" && callback(event)
                })
            }
            render() {
                let nativeProps = Object.assign({},
                this.props);
                delete nativeProps.numberOfRows;
                let {
                    onScrollForReport: onScrollForReport,
                    onExposureReport: onExposureReport,
                    refreshColors: refreshColors,
                    refreshColor: refreshColor,
                    refreshHeaderColors: refreshHeaderColors,
                    numberOfRows: numberOfRows,
                    onScroll: onScroll,
                    scrollEventThrottle: scrollEventThrottle
                } = this.props;
                nativeProps.numberOfRows = numberOfRows;
                nativeProps.totalOfRows = numberOfRows;
                nativeProps.enableOnScrollForReport = onScrollForReport && typeof onScrollForReport === "function";
                nativeProps.enableExposureReport = onExposureReport && typeof onExposureReport === "function";
                if (typeof onScroll !== "function") {
                    nativeProps.scrollEventThrottle = 0
                } else if (typeof scrollEventThrottle !== "number") {
                    nativeProps.scrollEventThrottle = 30
                }
                if (refreshColors) {
                    nativeProps.refreshColors = this.processColor(refreshColors)
                }
                if (refreshColor) {
                    nativeProps.refreshColor = this.processColor(refreshColor)
                }
                if (refreshHeaderColors) {
                    let refreshHeaderColors = {};
                    if (refreshHeaderColors.ballColors) {
                        refreshHeaderColors.ballColors = this.processColor(refreshHeaderColors.ballColors)
                    }
                    if (refreshHeaderColors.bgColors) {
                        refreshHeaderColors.bgColors = this.processColor(refreshHeaderColors.bgColors)
                    }
                    if (refreshHeaderColors.tipsBgColors) {
                        refreshHeaderColors.tipsBgColors = this.processColor(refreshHeaderColors.tipsBgColors)
                    }
                    nativeProps.refreshHeaderColors = refreshHeaderColors
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["ListView"], _extends({
                    nativeName: "ListView",
                    onScroll: this.onScrollEvent.bind(this)
                },
                nativeProps))
            }
        },
        _class.defaultProps = {
            scrollEventThrottle: 30
        },
        _temp)
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBListViewWrapper.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBListViewWrapper", (function() {
            return QBListViewWrapper
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        let QBListViewWrapper = class QBListViewWrapper extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            render() {
                let nativeProps = Object.assign({},
                this.props, {});
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", nativeProps)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBLoopScrollImage.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBLoopScrollImage", (function() {
            return QBLoopScrollImage
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        var _extends = Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        function log(msg) {}
        let QBLoopScrollImage = class QBLoopScrollImage extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                log("constructor props:" + JSON.stringify(props))
            }
            render() {
                log("render");
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({},
                this.props, {
                    onSelectedPage: this._onSelectedPage.bind(this),
                    onPageDidAppeared: this._onPageDidAppeared.bind(this)
                }))
            }
            _onSelectedPage(e) {
                log("_onSelectedPage: " + JSON.stringify(e));
                log("------------- " + JSON.stringify(this.props));
                this.props.onSelectedPage && this.props.onSelectedPage(e)
            }
            _onPageDidAppeared(e) {
                log("_onPageDidAppeared: " + JSON.stringify(e));
                log("------------- " + JSON.stringify(this.props));
                log("============= " + this.props.onPageDidAppeared);
                this.props.onPageDidAppeared && this.props.onPageDidAppeared(e)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBLottieView.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        }); (function(process) {
            __webpack_require__.d(__webpack_exports__, "QBLottieView", (function() {
                return QBLottieView
            }));
            var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
            var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
            var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
            var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
            const handleImgUrl = function(url) {
                if (url && !/^(http|https):\/\//.test(url) && url.indexOf("assets") > -1) {
                    if (process.env.NODE_ENV === "dev") {
                        return "http://127.0.0.1:" + process.env.PORT + "/" + url
                    } else {
                        return "hpfile://./" + url
                    }
                } else {
                    return url
                }
            };
            let QBLottieView = class QBLottieView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
                constructor(props) {
                    super(props)
                }
                render() {
                    let nativeProps = Object.assign({},
                    this.props, {});
                    if (nativeProps.src) {
                        if (nativeProps.src.jsonSrc) nativeProps.src.jsonSrc = handleImgUrl(nativeProps.src.jsonSrc)
                    }
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", nativeProps)
                }
                play() {
                    __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "play", [])
                }
            }
        }).call(__webpack_exports__, __webpack_require__("./node_modules/process/browser.js"))
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBMapMarkerView.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBMapMarkerView", (function() {
            return QBMapMarkerView
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        let QBMapMarkerView = class QBMapMarkerView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props)
            }
            render() {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", this.props)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBMapView.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBMapView", (function() {
            return QBMapView
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        var _extends = Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        const COMMAND = {
            SET_ZOOM: "setZoom",
            SET_CENTER: "setCenter",
            ANIMATE_TO: "animateTo",
            MOVE_CAMERA: "moveCamera",
            JUMP_TO_ANCHOR_POINT: "jumpToAnchorPoint"
        };
        let QBMapView = class QBMapView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props)
            }
            render() {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({},
                this.props, {
                    onMapLongClick: this._onMapLongClick.bind(this),
                    onCameraChangeFinish: this._onCameraChangeFinish.bind(this),
                    onMapClick: this._onMapClick.bind(this)
                }))
            }
            setZoom(zoom) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.SET_ZOOM, [zoom])
            }
            setCenter(lat, lng) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.SET_CENTER, [lat, lng])
            }
            animateTo(lat, lng) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.ANIMATE_TO, [lat, lng])
            }
            moveCamera(latlngs, padding) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.MOVE_CAMERA, [latlngs, padding])
            }
            jumpToAnchorPoint(animate) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.JUMP_TO_ANCHOR_POINT, [animate])
            }
            _onCameraChangeFinish(e) {
                this.props.onCameraChangeFinish && this.props.onCameraChangeFinish(e)
            }
            _onMapClick(e) {
                this.props.onMapClick && this.props.onMapClick(e)
            }
            _onMapLongClick(e) {
                this.props.onMapLongClick && this.props.onMapLongClick(e)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBNovelText.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_exports__["QBNovelText"] = QBNovelText;
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react_lib_util_UnicodeToChar__ = __webpack_require__("./node_modules/@tencent/hippy-react/lib/util/UnicodeToChar.js");
        var _extends = Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        function QBNovelText(props) {
            const newProps = _extends({},
            props);
            if (typeof newProps.children === "string") {
                newProps.children = Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react_lib_util_UnicodeToChar__["default"])(newProps.children)
            }
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", _extends({
                nativeName: "QBNovelText"
            },
            newProps))
        }
        __webpack_exports__["default"] = QBNovelText
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBPickerView.android.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBPickerView", (function() {
            return QBPickerView
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        var _extends = Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        let PickerWheel = class PickerWheel extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props)
            }
            _onValueChange(param) {
                if (typeof this.props.onChange == "function") {
                    this.props.onChange(this.props.wheelIndex, Number(param.newIndex))
                }
            }
            render() {
                const selectedIndex = typeof this.props.selectedIndex == "number" ? this.props.selectedIndex: 0;
                let items = [{
                    label: "",
                    value: "0"
                }];
                if (Array.isArray(this.props.renderItems) && this.props.renderItems.length > 0) {
                    items = this.props.renderItems.map((one, index) =>{
                        return {
                            label: one,
                            value: index + ""
                        }
                    })
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({},
                this.props, {
                    items: items,
                    selectedIndex: selectedIndex,
                    onChange: this._onValueChange.bind(this)
                }))
            }
        };
        const pickerStyle = __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["StyleSheet"].create({
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            collapsable: false
        });
        const headerStyle = __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["StyleSheet"].create({
            flexDirection: "row",
            height: 40,
            paddingLeft: 15,
            paddingRight: 15,
            justifyContent: "space-between",
            alignItems: "center"
        });
        const modalBgStyle = __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["StyleSheet"].create({
            backgroundColor: "#242424",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            opacity: .63
        });
        const modalContentStyle = __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["StyleSheet"].create({
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            flex: 1,
            flexDirection: "column",
            height: 247
        });
        let QBPickerView = class QBPickerView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                const tempState = this.propsToState(props);
                tempState.visible = true;
                this.state = tempState
            }
            componentWillReceiveProps(nextProps) {
                this.setState(this.propsToState(nextProps))
            }
            propsToState(props, newSelected) {
                const selectedIndex = newSelected ? newSelected: this._processSelectIndex(props);
                const pickerCounts = props.numberOfWheel ? props.numberOfWheel: 1;
                const newState = {
                    selectedIndex: selectedIndex,
                    items: [],
                    wheelCount: pickerCounts
                };
                for (let i = 0; i < pickerCounts; i++) {
                    newState.items.push(this._renderItems(i, newState.selectedIndex))
                }
                return newState
            }
            _onValueChange(wheelIndex, selectedIndex) {
                const currIndexArr = this.state.selectedIndex;
                currIndexArr[wheelIndex] = selectedIndex;
                if (typeof this.props.onChange == "function") {
                    this.props.onChange({
                        selected: currIndexArr
                    })
                }
                const newState = this.propsToState(this.props, currIndexArr);
                let needValueChange = false;
                for (let i = 0; i < newState.wheelCount; i++) {
                    const selected = newState.selectedIndex[i];
                    const itemSize = newState.items[i] ? newState.items[i].length: 0;
                    if (selected >= itemSize) {
                        newState.selectedIndex[i] = 0;
                        needValueChange = true
                    }
                }
                if (needValueChange && typeof this.props.onChange == "function") {
                    this.props.onChanged(newState.selectedIndex)
                }
                this.setState(newState)
            }
            _renderItems(index, selectedIndexArr) {
                return typeof this.props.getItems == "function" ? this.props.getItems(index, selectedIndexArr) : []
            }
            _processSelectIndex(props) {
                const pickerCounts = props.numberOfWheel ? props.numberOfWheel: 1;
                const selectedIndexArray = [];
                for (let i = 0; i < pickerCounts; i++) {
                    selectedIndexArray.push(0)
                }
                if (Array.isArray(props.selectedValue)) {
                    const selectedIndexSize = props.selectedValue.length;
                    for (let i = 0; i < selectedIndexSize; i++) {
                        if (i < selectedIndexArray.length) {
                            const oneSelect = Number(props.selectedValue[i]);
                            selectedIndexArray[i] = isNaN(oneSelect) ? 0 : oneSelect
                        }
                    }
                }
                return selectedIndexArray
            }
            onCancel() {
                typeof this.props.onCanceled == "function" && this.props.onCanceled();
                this.setState({
                    visible: false
                })
            }
            onSelect() {
                typeof this.props.onSelected == "function" && this.props.onSelected({
                    selected: this.state.selectedIndex
                });
                this.setState({
                    visible: false
                })
            }
            render() {
                if (this.props.itemStyle && this.props.itemStyle.color) {
                    this.props.itemStyle.color = Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(this.props.itemStyle.color)
                }
                const pickerArrays = [];
                for (let i = 0; i < this.state.wheelCount; i++) {
                    pickerArrays.push(i)
                }
                let title = null;
                if (typeof this.props.title == "string") {
                    title = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["Text"], {
                        style: {
                            color: "#242424",
                            fontSize: 16
                        }
                    },
                    this.props.title)
                }
                const pickerBgColor = this.props.style ? this.props.style.backgroundColor: "#ffffff";
                const windowWidth = __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["Dimensions"].get("window").width;
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["Modal"], {
                    visible: this.state.visible,
                    onRequestClose: this.onCancel.bind(this),
                    animationType: "none",
                    transparent: true
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], {
                    style: modalBgStyle,
                    onClick: this.onCancel.bind(this)
                }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], {
                    style: [this.props.style, modalContentStyle, {
                        width: windowWidth,
                        backgroundColor: pickerBgColor
                    }],
                    onClick: () =>{}
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], {
                    style: headerStyle
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["Text"], {
                    style: {
                        color: "#242424",
                        fontSize: 16
                    },
                    onClick: this.onCancel.bind(this)
                },
                "\\u53d6\\u6d88"), title, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["Text"], {
                    style: {
                        color: "#4c9afa",
                        fontSize: 16
                    },
                    onClick: this.onSelect.bind(this)
                },
                "\\u786e\\u5b9a")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], {
                    style: pickerStyle
                },
                pickerArrays.map(index =>__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PickerWheel, {
                    style: {
                        flex: 1,
                        backgroundColor: pickerBgColor
                    },
                    onChange: this._onValueChange.bind(this),
                    selectedIndex: this.state.selectedIndex[index],
                    itemStyle: this.props.itemStyle,
                    renderItems: this.state.items[index],
                    wheelIndex: index
                })))))
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBProgressBarView.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBProgressBarView", (function() {
            return QBProgressBarView
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        let QBProgressBarView = class QBProgressBarView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            render() {
                let nativeProps = Object.assign({},
                this.props, {});
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", nativeProps)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBRefreshWebView.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBRefreshWebView", (function() {
            return QBRefreshWebView
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        var _extends = Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        let QBRefreshWebView = class QBRefreshWebView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            render() {
                let newProps = Object.assign({},
                this.props);
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({},
                newProps, {
                    onRefresh: this._onRefresh.bind(this)
                }))
            }
            _onRefresh() {
                this.props.onRefresh && this.props.onRefresh()
            }
            markRefreshEnd(options) {
                let self = this;
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(self, "markRefreshEnd", [options])
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBRichEditView.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBRichEditView", (function() {
            return QBRichEditView
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        var _extends = Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        const COMMAND = {
            requestFocus: "requestFocus",
            backspace: "backspace",
            setBold: "setBold",
            setItalic: "setItalic",
            addQQEmoji: "addQQEmoji",
            setAlign: "setAlign",
            addTag: "addTag",
            addCustomViews: "addCustomViews",
            removeCustomViews: "removeCustomViews",
            showKeyboard: "showKeyboard",
            hideKeyboard: "hideKeyboard",
            setSource: "setSource",
            getSource: "getSource"
        };
        let tmpCustomViews;
        let QBRichEditView = class QBRichEditView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                this.state = {
                    customViews: []
                }
            }
            render() {
                let newPropsTemp = {
                    style: this.props.style,
                    enableHandleTag: this.props.enableHandleTag,
                    hint: this.props.hint,
                    customViewsCount: this.state.customViews.length
                };
                let newProps = Object.assign({},
                this.props, newPropsTemp);
                let items = [];
                for (let customView of this.state.customViews) {
                    items.push(customView.view)
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({},
                newProps, {
                    onReturnSource: this.props.onReturnSource,
                    onEnterTag: this.props.onEnterTag,
                    onCurrentTextStyleChanged: this.props.onCurrentTextStyleChanged,
                    onFocus: this.props.onFocus,
                    onSetSource: this._onSetSource.bind(this)
                }), items)
            }
            requestFocus() {
                if (__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["Platform"].OS === "ios") {} else {
                    __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.requestFocus)
                }
            }
            backspace() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.backspace, [])
            }
            setBold() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.setBold, [])
            }
            addQQEmoji(emojiText) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.addQQEmoji, [emojiText])
            }
            setAlign(align) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.setAlign, [align])
            }
            addTag(tag) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.addTag, [tag])
            }
            showKeyboard() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.showKeyboard, [])
            }
            hideKeyboard() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.hideKeyboard, [])
            }
            addCustomView(key, xml, view) {
                let customViews = this.state.customViews;
                customViews.push({
                    key: key,
                    xml: xml,
                    view: view
                });
                let xmls = [];
                xmls.push(xml);
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.addCustomViews, [xmls]);
                this.setState({
                    customViews: customViews
                })
            }
            addCustomViews(viewItems) {
                let customViews = this.state.customViews;
                let xmls = [];
                for (let item of viewItems) {
                    customViews.push(item);
                    xmls.push(item.xml)
                }
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.addCustomViews, [xmls]);
                this.setState({
                    customViews: customViews
                })
            }
            removeCustomView(key) {
                let customViews = this.state.customViews;
                for (let i = 0, l = customViews.length; i < l; i++) {
                    let item = customViews[i];
                    if (item.key === key) {
                        customViews.splice(i, 1);
                        this.setState({
                            customViews: customViews
                        });
                        let xmls = [];
                        xmls.push(item.xml);
                        __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.removeCustomViews, [xmls]);
                        break
                    }
                }
            }
            setSource(src) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.setSource, [src])
            }
            getSource() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.getSource, [])
            }
            recoverViews(src, customViewArr) {
                let customViews = this.state.customViews;
                customViews.splice(0, customViews.length);
                for (let item of customViewArr) {
                    customViews.push({
                        key: item.key,
                        xml: item.xml,
                        view: item.view
                    })
                }
                tmpCustomViews = customViews;
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.setSource, [src])
            }
            _onSetSource(event) {
                if (event.success && tmpCustomViews) {
                    this.setState({
                        customViews: tmpCustomViews
                    })
                }
            }
        };
        QBRichEditView.align = {
            left: 0,
            center: 1,
            right: 2
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBScoreStar.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBScoreStar", (function() {
            return QBScoreStar
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        const graystar = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAAAXNSR0IArs4c6QAAAk1JREFUSA2tlLtrFFEUxndmsoqWaxBNENEkBlHZxkaWfREkiLUIkiIqWFmlUUwKQYJYiGAliCCCdv4DNvtgH6yNRcBmG+0iKglBxX24m99Z9obM7JnMjHrhcOZ895zvO/c1sViEUSgUxorF4r0IJYNUO2LBAvn3q9Xq8Sh1oUX6/b5jWdYyPt7pdCKtJrRIqVS6hsD0cAWLxMfCriaUCOQ2tmxI+d6H3TVxkA8lQtdXIZrdTYbIzVqtNrkb8/sOFIFMclYUgv3tdvuOgo9A1ggyBCC36vX6RKvVugL0RMvjIvzG5m3bXkun0xtajmAW1/EwHZ0ieYZ4YAjMSIw/6Ffoxcn/BtYUo66JcBNs4McQuMHEQyZcdd7YNakE5I8Di12Q6V6vF0PkB/jlwXbxipcIHsvk/xoIbGGXstlsbedM+GXcBnyK2A72t4LwbLJd85lM5r1wuAi5qrcQefaPQt8RuMgKPpgmXSICsqJFOnmBUOD1NiTGU/cVm0NgzWDiR0QElF8IB/eKT0fiMAPydVYwxxZ99Oar3dLJG+nKmxwQv9MEpEYVaTQah9iuIwGk3umzXsDEqgiv3LfAFCr+tN85qiKcxxmFZE8IgQPlcnlKS1JFSPRbyRfmXnNebY3Mr7lQIpDK41pJJBJT+Xx+IR6Py7/uJUJ/PGJqc3uKQPQLkkeO45zkxq0mk8mfQppKpT7ncrnrCJ8jfCvYcKgiI++kUqlMdLvdTxQ9Z58f0Pm6YfDzPODzNLRK/iT5qpCrlsM7ymM84QJDBtSmtNRtwFzkrZ4h9ScAAAAASUVORK5CYII=";
        const halfstar = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAwCAMAAABkKdmIAAAA2FBMVEUAAADFvrH/qg3dtWvvsD/DvrXKu6H/qg3QupL/qg3/qg3Mu53UuIT/qg3Wt3//qg3/qg3/qg3btnL/qg3/qg3etWrftWb/qg3IvKbNu5rOupbUuIT/qg3btnD/qg3dtWzetWjetWn/qg3/qg3/qg3/qg3RuY7TuYn/qg3VuIH/qg3Xt3vYt3n/qg3/qg3/qg3/qg3/qg3etWr/qg3/qg3/qg3HvKn/qg3SuYv/qg3/qg3Xt33/qg3atnXatnT/qg3ctm//qg3ctW3/qg3/qg2/v7//qg3CvrjwmrbnAAAARXRSTlMA/u8mC/719eL++fHBvrCIeG9rU04XEwX47unEgV9ENiAdFBDl4NrOzriin5mSeXRpWy8oIhn61tPIsaeYf3dgWUtGOC19con+AAABbUlEQVRIx6XVZ1PCMADG8bR0QSnQgQjInspShntrwvf/RkbJlSp5jvT8v4O73z1HjrQEVc+QlG229bRkRs12OtHNUZpPR4qMppzp2pyAGTjyTcxymhFOeOfq5IztiKY809MFATNghBMwg0YEoQXVkT3RTlSEoQuiPlNigqjNGJ9hSRdE5EyCJZFVWUWLR6/P9tFEW8upT4P4Aq3f/Jk3yLK/0cNMy8lPG2VSZPIo6LpFyDwVOW2JI5IEhPhBPiBQ8C4VicVFbJROzOqQRFfZ48TlAhhAqgd/nTAHCBK8iBtMagaRFNmAIMFr2og4BgF5iDQISkdkgsSGITJCpAlJFREfEg2RC0hoG5A7TAJAbEwe5GLNMLmVkygp7hsFLUFc/JgUeR/8cye/jYl55MDGTfFNZhSjpZSMd+AmJPtaQ0GeZaLyc18GLxXyq3cHvwFWHPR9AZK91jgZykjI9Dm4FoFLLSJpUewR2JNL/tMXLsgJOvYwfKYAAAAASUVORK5CYII=";
        const fullstar = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAAAXNSR0IArs4c6QAAAm9JREFUSA2lVD1oU1EU/k5emtBCG3+Cv4hobEHUzUVcBJEgumkCSofq4OTkomiHghRxUMFJEEEEHdKm6KiLm4MgDgWXLDoIllibxh+a9uUdv5smpS/vPvOevfC4957zne+757x7DxBj6NsTSZ3K3IwR0oImYgVUP4xCvQktb9obJy6yiJYKDiC3SN6HZjNWNpFFgNcXAT3QzmBMX27ZEzWbSCKqEwZnsuiMFFbcG51Nr1l6AYxfp4cuwNMXPqygAU3lpDj/1We3bHpm0srC0/FArCINWbkesFsMoZmoqmAqu4tEBag+sMQa0xIcJ4+0zsrZxYUQDERntm+DuzwCcYcJGobyM7MI1zoQFmixf+ftq0BQoa8C5drhnOyrJOEuXQa8OyT3D+02+N2WXZZ/L0ueY6s+xjflF+CeaZVLS4PX6LhnCdyASeqs02kp/Hy39k+0NHSVxoc8yZrtvxVEauTJS7H+3nD4CLWUuQLxHm1ISGQekjgl52sfO4f0iRgjSzfG6Qm/ntebmO5RBZInpbgwu94REDFOls60kGdcsl9FHt/Y1ijw41N3hPW0rKV53TxVjCHyxiZgGKwiOjO4lb4dMSSYOA6H4a0icJ3QgDAiqhxsN9IAxC4i3qEAsrehH+X7ORvMLhKe+hzbzXMSLdvIWH3r4ewiov5ymceFxDgyAzkp1EfZFEf4xJ5SqOkTU88f13baRVRWwSJ/+Fzvol/2S3FxUvJzv02cnKt94Q28hGTqCLflNlfozw+8E33F9t5ofGZZHkPTt6VY5f3/99DpzFF27Emq7GavsmbjY9Bydifbyz6fMeJGy5uP26B/AVsauB6DWXEuAAAAAElFTkSuQmCC";
        let QBScoreStar = class QBScoreStar extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            render() {
                let {
                    style: style,
                    starInfo: starInfo
                } = this.props;
                let {
                    height: height = 12,
                    width: width = 68
                } = style || {};
                let startWidth = (width - 8) / 5;
                let startSize = height > startWidth ? startWidth: height;
                let startStyle = {
                    height: startSize,
                    width: startSize
                };
                let {
                    score: score = 1,
                    starTotalNum: starTotalNum = 5
                } = starInfo || {};
                let starView = [];
                for (let i = 0; i < starTotalNum; i++) {
                    let starURI = fullstar;
                    if (score >= 1) {
                        score--
                    } else if (score > 0) {
                        starURI = halfstar;
                        score = 0
                    } else {
                        starURI = graystar
                    }
                    starView.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], {
                        key: "star_" + i,
                        style: styles.starItem
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["Image"], {
                        style: startStyle,
                        source: {
                            uri: starURI
                        }
                    })))
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], {
                    style: style
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], {
                    style: styles.starContainer
                },
                starView))
            }
        };
        const styles = __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["StyleSheet"].create({
            starContainer: {
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center"
            },
            starItem: {
                marginRight: 2
            }
        })
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBStarView.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBStarView", (function() {
            return QBStarView
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        let QBStarView = class QBStarView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            render() {
                let nativeProps = Object.assign({},
                this.props, {});
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", nativeProps)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBStyledButton.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBStyledButton", (function() {
            return QBStyledButton
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        let QBStyledButton = class QBStyledButton extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props)
            }
            render() {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", this.props)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBSuperBgView.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBSuperBgView", (function() {
            return QBSuperBgView
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var _extends = Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        let QBSuperBgView = class QBSuperBgView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            render() {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({},
                this.props, {
                    nativeName: "QBSuperBgView"
                }))
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBTabHost.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBTabHost", (function() {
            return QBTabHost
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        var _extends = Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        let QBTabViewFloater = class QBTabViewFloater extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props)
            }
            render() {
                const baseStyle = {
                    flexDirection: "row",
                    flex: 1
                };
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({},
                this.props, {
                    style: [baseStyle, this.props.style]
                }), this.props.children)
            }
        };
        let QBTabView = class QBTabView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props)
            }
            render() {
                const contentContainer = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], {
                    style: {
                        flexDirection: "row",
                        collapsable: false,
                        overflow: "visible"
                    }
                },
                this.props.children);
                const baseStyle = {
                    flexGrow: 1,
                    flexShrink: 1,
                    flexDirection: "row",
                    overflow: "scroll"
                };
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({},
                this.props, {
                    style: [baseStyle, this.props.style]
                }), contentContainer)
            }
        };
        let QBTabHost = class QBTabHost extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                this.setPageWithoutAnimation = this.setPageWithoutAnimation.bind(this)
            }
            processColor(colors) {
                if (Array.isArray(colors)) {
                    return colors.map(oneColor =>{
                        return Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(oneColor)
                    })
                } else {
                    return Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(colors)
                }
            }
            normalizeColor() {
                if (this.props.tabInfo) {
                    if (this.props.tabInfo.textColor) {
                        this.props.tabInfo.textColor = this.processColor(this.props.tabInfo.textColor)
                    }
                    if (this.props.tabInfo.textColors) {
                        this.props.tabInfo.textColors = this.processColor(this.props.tabInfo.textColors)
                    }
                    if (this.props.tabInfo.textSelectColor) {
                        this.props.tabInfo.textSelectColor = this.processColor(this.props.tabInfo.textSelectColor)
                    }
                    if (this.props.tabInfo.textSelectColors) {
                        this.props.tabInfo.textSelectColors = this.processColor(this.props.tabInfo.textSelectColors)
                    }
                    if (this.props.tabInfo.backgroundColor) {
                        this.props.tabInfo.backgroundColor = this.processColor(this.props.tabInfo.backgroundColor)
                    }
                    if (this.props.tabInfo.backgroundColors) {
                        this.props.tabInfo.backgroundColors = this.processColor(this.props.tabInfo.backgroundColors)
                    }
                    if (this.props.tabInfo.backgroundSelectColor) {
                        this.props.tabInfo.backgroundSelectColor = this.processColor(this.props.tabInfo.backgroundSelectColor)
                    }
                    if (this.props.tabInfo.backgroundSelectColors) {
                        this.props.tabInfo.backgroundSelectColors = this.processColor(this.props.tabInfo.backgroundSelectColors)
                    }
                    if (this.props.tabInfo.dividerColor) {
                        this.props.tabInfo.dividerColor = this.processColor(this.props.tabInfo.dividerColor)
                    }
                    if (this.props.tabInfo.dividerColors) {
                        this.props.tabInfo.dividerColors = this.processColor(this.props.tabInfo.dividerColors)
                    }
                    if (this.props.tabInfo.tabScrollBarColor) {
                        this.props.tabInfo.tabScrollBarColor = this.processColor(this.props.tabInfo.tabScrollBarColor)
                    }
                    if (this.props.tabInfo.tabScrollBarColors) {
                        this.props.tabInfo.tabScrollBarColors = this.processColor(this.props.tabInfo.tabScrollBarColors)
                    }
                    if (this.props.tabInfo.tabScrollBarSecondColor) {
                        this.props.tabInfo.tabScrollBarSecondColor = this.processColor(this.props.tabInfo.tabScrollBarSecondColor)
                    }
                    if (this.props.tabInfo.tabScrollBarSecondColors) {
                        this.props.tabInfo.tabScrollBarSecondColors = this.processColor(this.props.tabInfo.tabScrollBarSecondColors)
                    }
                    if (this.props.tabInfo.tabViewBackgroundColors) {
                        this.props.tabInfo.tabViewBackgroundColors = this.processColor(this.props.tabInfo.tabViewBackgroundColors)
                    }
                }
            }
            _onTabClicked(param) {
                if (typeof this.props.onTabClicked == "function") {
                    this.props.onTabClicked(param)
                }
            }
            _onScroll(param) {
                if (typeof this.props.onScroll == "function") {
                    this.props.onScroll(param)
                }
            }
            _onTabScrollEnd(param) {
                if (typeof this.props.onTabScrollEnd == "function") {
                    this.props.onTabScrollEnd(param)
                }
            }
            _onTabDrag() {
                if (typeof this.props.onTabDrag == "function") {
                    this.props.onTabDrag()
                }
            }
            _onPageScroll(param) {
                if (typeof this.props.onPageScroll == "function") {
                    this.props.onPageScroll(param)
                }
            }
            _onPageScrollStateChanged(param) {
                if (typeof this.props.onPageScrollStateChanged == "function") {
                    this.props.onPageScrollStateChanged(param)
                }
            }
            _onPageSelected(param) {
                if (typeof this.props.onPageSelected == "function") {
                    this.props.onPageSelected(param)
                }
            }
            setPageWithoutAnimation(selectedPage) {
                if (typeof selectedPage !== "number") {
                    return
                }
                if (this.refs.qbTabhostViewPager) {
                    this.refs.qbTabhostViewPager.setPageWithoutAnimation(selectedPage)
                }
            }
            doTabExposed() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "doTabExposed", [])
            }
            scrollToXY(x, y, animated) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "scrollToXY", [x, y, animated])
            }
            render() {
                this.normalizeColor();
                var tabInfo = this.props.tabInfo;
                const nonViewProps = Object.assign({},
                this.props);
                delete nonViewProps.renderTab;
                delete nonViewProps.rightView;
                delete nonViewProps.leftView;
                delete nonViewProps.renderTabFloater;
                delete nonViewProps.floatTabIndex;
                let qbtabview = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(QBTabView, _extends({},
                nonViewProps, {
                    style: {
                        flexDirection: "row",
                        flex: 1,
                        height: tabInfo.tabHeight
                    },
                    onTabClicked: this._onTabClicked.bind(this),
                    onScroll: this._onScroll.bind(this),
                    onTabScrollEnd: this._onTabScrollEnd.bind(this),
                    onTabDrag: this._onTabDrag.bind(this)
                }), this.props.renderTab);
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({},
                nonViewProps, {
                    style: {
                        flex: 1
                    }
                }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], {
                    style: {
                        flexDirection: "row",
                        marginLeft: tabInfo.tabContainerLeftMargin,
                        marginRight: tabInfo.tabContainerRightMargin,
                        marginTop: tabInfo.tabContainerTopMargin,
                        marginBottom: tabInfo.tabContainerBottomMargin
                    }
                },
                this.props.leftView ? this.props.leftView: null, this.props.renderTabFloater ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(QBTabViewFloater, {
                    floatTabIndex: this.props.floatTabIndex,
                    style: {
                        height: tabInfo.tabHeight
                    }
                },
                qbtabview, this.props.renderTabFloater) : qbtabview, this.props.rightView ? this.props.rightView: null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["ViewPager"], _extends({},
                nonViewProps, {
                    ref: "qbTabhostViewPager",
                    style: {
                        flex: 1
                    },
                    onPageScroll: this._onPageScroll.bind(this),
                    onPageScrollStateChanged: this._onPageScrollStateChanged.bind(this),
                    onPageSelected: this._onPageSelected.bind(this)
                }), this.props.children))
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBVRImageView.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBVRImageView", (function() {
            return QBVRImageView
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        var _extends = Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        let QBVRImageView = class QBVRImageView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            setactive(rese) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "setactive", [rese])
            }
            startDownload() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "startDownload", [])
            }
            _onDownloadComplete(e) {
                if (this.props.onDownloadComplete) {
                    this.props.onDownloadComplete(e)
                }
            }
            _onRotateChange(e) {
                if (this.props.onRotateChange) {
                    this.props.onRotateChange(e)
                }
            }
            _onSetActiveFail(e) {
                if (this.props.onSetActiveFail) {
                    this.props.onSetActiveFail(e)
                }
            }
            render() {
                let onclick;
                if (this.props.onClick) {
                    onclick = this.props.onClick
                } else {
                    onclick = () =>{
                        return false
                    }
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({},
                this.props, {
                    onClick: onclick,
                    onDownloadComplete: this._onDownloadComplete.bind(this),
                    onRotateChange: this._onRotateChange.bind(this),
                    onSetActiveFail: this._onSetActiveFail.bind(this)
                }))
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBVideoAnimationView.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBVideoAnimationView", (function() {
            return QBVideoAnimationView
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        var _extends = Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) {
                if (keys.indexOf(i) >= 0) continue;
                if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
                target[i] = obj[i]
            }
            return target
        }
        let QBVideoAnimationView = class QBVideoAnimationView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                this.onPreloadEnd = this.onPreloadEnd.bind(this);
                this.onVideoExtraEvent = this.onVideoExtraEvent.bind(this)
            }
            onPreloadEnd(e) {
                const {
                    onPreloadEnd: onPreloadEnd
                } = this.props;
                if (typeof onPreloadEnd === "function") {
                    onPreloadEnd(e)
                }
            }
            onVideoExtraEvent(e) {
                const {
                    onPreloadEnd: onPreloadEnd
                } = this.props;
                if (typeof onPreloadEnd === "function" && e.eventName === "onPreloadEnd") {
                    onPreloadEnd(e)
                }
            }
            play() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "play", [])
            }
            pause() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "pause", [])
            }
            preload() {
                let args = [];
                if (true) {
                    args = [100]
                }
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "preload", args)
            }
            render() {
                const _props = this.props,
                {
                    onPreloadEnd: onPreloadEnd
                } = _props,
                nativeProps = _objectWithoutProperties(_props, ["onPreloadEnd"]);
                if (typeof onPreloadEnd === "function") {
                    nativeProps.onPreloadEnd = this.onPreloadEnd
                }
                let nativeName = "QBVideoAnimationView";
                if (true) {
                    nativeName = "QBVideoView";
                    nativeProps.onVideoExtraEvent = this.onVideoExtraEvent
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({
                    nativeName: nativeName
                },
                nativeProps))
            }
        };
        __webpack_exports__["default"] = QBVideoAnimationView
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBVideoView.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBVideoView", (function() {
            return QBVideoView
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        var _extends = Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        const COMMAND = {
            PLAY: "play",
            PAUSE: "pause",
            SEEK: "seek",
            ENTER_FULLSCREEN: "enterFullScreen",
            EXIT_FULLSCREEN: "exitFullScreen",
            RELEASE: "release",
            RESET: "reset",
            PRELOAD: "preload",
            ATTACH: "attach",
            REPORT: "report",
            RESET_FOR_AD: "resetforad"
        };
        let QBVideoView = class QBVideoView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            render() {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({},
                this.props, {
                    onDurationChange: this._onDurationChange.bind(this),
                    onVideoSizeChange: this._onVideoSizeChange.bind(this),
                    onTimeUpdate: this._onTimeUpdate.bind(this),
                    onVideoError: this._onVideoError.bind(this),
                    onVideoExtraEvent: this._onVideoExtraEvent.bind(this),
                    onExitFullScreen: this._onExitFullScreen.bind(this),
                    onEnterFullScreen: this._onEnterFullScreen.bind(this),
                    onSeeked: this._onSeeked.bind(this)
                }))
            }
            play() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.PLAY, [])
            }
            pause() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.PAUSE, [])
            }
            seek(seekTo) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.SEEK, [seekTo])
            }
            enterFullScreen(screenMode) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.ENTER_FULLSCREEN, [screenMode])
            }
            exitFullScreen() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.EXIT_FULLSCREEN, [])
            }
            release() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.RELEASE, [])
            }
            reset() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.RESET, [])
            }
            resetForAd() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.RESET_FOR_AD, [])
            }
            preload() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.PRELOAD, [])
            }
            attach() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.ATTACH, [])
            }
            report() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.REPORT, [])
            }
            _onDurationChange(e) {
                this.duration = e.duration;
                if (this.props.onDurationChange) this.props.onDurationChange(e)
            }
            _onVideoSizeChange(e) {
                this.videoWidth = e.width;
                this.videoHeight = e.height;
                if (this.props.onVideoSizeChange) this.props.onVideoSizeChange(e)
            }
            _onTimeUpdate(e) {
                this.currentTime = e.currentTime;
                this.currentProgress = e.currentProgress;
                if (this.props.onTimeUpdate) this.props.onTimeUpdate(e)
            }
            _onVideoError(e) {
                this.error = e;
                if (this.props.onVideoError) this.props.onVideoError(e)
            }
            _onVideoExtraEvent(e) {
                this.props.onVideoExtraEvent && this.props.onVideoExtraEvent(e)
            }
            _onExitFullScreen(e) {
                this.props.onExitFullScreen && this.props.onExitFullScreen(e)
            }
            _onEnterFullScreen(e) {
                this.props.onEnterFullScreen && this.props.onEnterFullScreen(e)
            }
            _onSeeked(e) {
                this.props.onSeeked && this.props.onSeeked(e)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBVideoViewForAms.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBVideoViewForAms", (function() {
            return QBVideoViewForAms
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        var _extends = Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) {
                if (keys.indexOf(i) >= 0) continue;
                if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
                target[i] = obj[i]
            }
            return target
        }
        let QBVideoViewForAms = class QBVideoViewForAms extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                this.duration = 0;
                this.videoWidth = 0;
                this.videoHeight = 0;
                this.currentTime = 0;
                this.currentProgress = 0;
                this.error = null;
                this.onDurationChange = this.onDurationChange.bind(this);
                this.onVideoSizeChange = this.onVideoSizeChange.bind(this);
                this.onTimeUpdate = this.onTimeUpdate.bind(this);
                this.onVideoError = this.onVideoError.bind(this)
            }
            onDurationChange(e) {
                const {
                    onDurationChange: onDurationChange
                } = this.props;
                this.duration = e.duration;
                if (typeof onDurationChange === "function") {
                    onDurationChange(e)
                }
            }
            onVideoSizeChange(e) {
                const {
                    onVideoSizeChange: onVideoSizeChange
                } = this.props;
                this.videoWidth = e.width;
                this.videoHeight = e.height;
                if (typeof onVideoSizeChange === "function") {
                    onVideoSizeChange(e)
                }
            }
            onTimeUpdate(e) {
                const {
                    onTimeUpdate: onTimeUpdate
                } = this.props;
                this.currentTime = e.currentTime;
                this.currentProgress = e.currentProgress;
                if (typeof onTimeUpdate === "function") {
                    onTimeUpdate(e)
                }
            }
            onVideoError(e) {
                const {
                    onVideoError: onVideoError
                } = this.props;
                this.error = e;
                if (typeof onVideoError === "function") {
                    onVideoError(e)
                }
            }
            play() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "play", [])
            }
            pause() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "pause", [])
            }
            seek(seekTo) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "seek", [seekTo])
            }
            enterFullScreen(screenMode) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "enterFullScreen", [screenMode])
            }
            exitFullScreen() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "exitFullScreen", [])
            }
            release() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "release", [])
            }
            reset() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "reset", [])
            }
            resetForAd() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "resetforad", [])
            }
            preload() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "preload", [])
            }
            attach() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "attach", [])
            }
            report() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "report", [])
            }
            render() {
                const _props = this.props,
                {
                    onDurationChange: onDurationChange,
                    onVideoSizeChange: onVideoSizeChange,
                    onTimeUpdate: onTimeUpdate,
                    onVideoError: onVideoError
                } = _props,
                nativeProps = _objectWithoutProperties(_props, ["onDurationChange", "onVideoSizeChange", "onTimeUpdate", "onVideoError"]);
                if (typeof onDurationChange === "function") {
                    nativeProps.onDurationChange = this.onDurationChange
                }
                if (typeof onVideoSizeChange === "function") {
                    nativeProps.onVideoSizeChange = this.onVideoSizeChange
                }
                if (typeof onTimeUpdate === "function") {
                    nativeProps.onTimeUpdate = this.onTimeUpdate
                }
                if (typeof onVideoError === "function") {
                    nativeProps.onVideoError = this.onVideoError
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({
                    nativeName: "QBVideoViewForAms"
                },
                nativeProps))
            }
        };
        __webpack_exports__["default"] = QBVideoViewForAms
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBViewListPager.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBViewListPager", (function() {
            return QBViewListPager
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        let QBViewListPagerItemView = class QBViewListPagerItemView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            render() {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", this.props)
            }
        };
        let QBViewListPager = class QBViewListPager extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            setScrollEnabled(enabled) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "setScrollEnabled", [enabled])
            }
            showNextItem() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "showNextItem", [])
            }
            showPreviousItem() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "showPreviousItem", [])
            }
            scrollToIndex(index, animated) {
                if (typeof index != "number") {
                    return
                }
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "scrollToIndex", [index, animated])
            }
            processColor(colors) {
                if (Array.isArray(colors)) {
                    return colors.map(oneColor =>{
                        return Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(oneColor)
                    })
                } else {
                    return Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(colors)
                }
            }
            render() {
                let {
                    numberOfRows: numberOfRows,
                    renderRow: renderRow
                } = this.props;
                let itemList = [];
                for (let index = 0; index < numberOfRows; index++) {
                    let content = renderRow(index);
                    itemList.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(QBViewListPagerItemView, {
                        key: "item_" + index
                    },
                    content))
                }
                let nativeProps = Object.assign({},
                this.props, {
                    style: [{
                        overflow: "scroll"
                    },
                    this.props.style]
                });
                delete nativeProps.renderRow;
                delete nativeProps.numberOfRows;
                if (this.props.refreshColors) {
                    nativeProps.refreshColors = this.processColor(this.props.refreshColors)
                }
                if (this.props.refreshColor) {
                    nativeProps.refreshColor = this.processColor(this.props.refreshColor)
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", nativeProps, itemList)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBWaterfallView.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBWaterfallView", (function() {
            return QBWaterfallView
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        var _extends = Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        var _class, _temp;
        let QBWaterfallViewItem = class QBWaterfallViewItem extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            render() {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", this.props)
            }
        };
        let QBWaterfallView = (_temp = _class = class QBWaterfallView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                let _initialListReady = false;
                if (__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["Platform"].OS === "ios") {
                    _initialListReady = true
                }
                this.state = {
                    initialListReady: _initialListReady
                }
            }
            static get LoadingStatus() {
                return {
                    LOADING_STATUS_SUCCESS: 0,
                    LOADING_STATUS_ERROR: 1,
                    LOADING_STATUS_NOMORE_DATA_SCROLLTOTOP: 2,
                    LOADING_STATUS_NOMORE_DATA_DISABLECLICK: 3,
                    LOADING_STATUS_CUSTOM: 3,
                    LOADING_STATUS_NONE: 4
                }
            }
            processColor(colors) {
                if (Array.isArray(colors)) {
                    return colors.map(oneColor =>{
                        return Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(oneColor)
                    })
                } else {
                    return Object(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["colorParse"])(colors)
                }
            }
            endReachedCompleted(status, text = "") {
                if (typeof status != "number" || typeof text != "string") {
                    return
                }
                let self = this;
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(self, "endReachedCompleted", [status, text])
            }
            refreshCompleted(status, text = "", duration = 1e3, imageUrl = "") {
                if (typeof status != "number" || typeof text != "string") {
                    return
                }
                if (typeof duration != "number") duration = 1e3;
                if (typeof imageUrl != "string") imageUrl = "";
                let self = this;
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(self, "refreshCompleted", [status, text, duration, imageUrl])
            }
            startRefresh(type = 1) {
                if (typeof type != "number") {
                    return
                }
                let self = this;
                if (type == 1) {
                    __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(self, "startRefresh", [])
                } else {
                    __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(self, "startRefreshWithType", [type])
                }
            }
            startLoadMore() {
                let self = this;
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(self, "startLoadMore", [])
            }
            scrollToIndex(xIndex, yIndex, animated) {
                if (typeof xIndex != "number" || typeof yIndex != "number" || typeof animated != "boolean") {
                    return
                }
                let self = this;
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(self, "scrollToIndex", [xIndex, yIndex, animated])
            }
            scrollToContentOffset(xOffset, yOffset, animated) {
                if (typeof xOffset != "number" || typeof yOffset != "number" || typeof animated != "boolean") {
                    return
                }
                let self = this;
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(self, "scrollToContentOffset", [xOffset, yOffset, animated])
            }
            callExposureReport() {
                let self = this;
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(self, "callExposureReport", [])
            }
            handleInitialListReady() {
                this.setState({
                    initialListReady: true
                })
            }
            render() {
                const {
                    bannerView: bannerView
                } = this.props;
                let currentRowCount;
                if (!this.state.initialListReady) {
                    currentRowCount = Math.min(this.props.numberOfItems, this.props.initialListSize)
                } else {
                    currentRowCount = this.props.numberOfItems
                }
                let nativeProps = Object.assign({},
                this.props, {
                    style: [{
                        overflow: "scroll"
                    },
                    this.props.style]
                });
                delete nativeProps.numberOfItems;
                delete nativeProps.numberOfRows;
                nativeProps.numberOfRows = currentRowCount;
                if (this.props.onScrollForReport) {
                    nativeProps.enableOnScrollForReport = true
                } else {
                    nativeProps.enableOnScrollForReport = false
                }
                if (this.props.onExposureReport) {
                    nativeProps.enableExposureReport = true
                } else {
                    nativeProps.enableExposureReport = false
                }
                if (this.props.refreshColors) {
                    nativeProps.refreshColors = this.processColor(this.props.refreshColors)
                }
                if (this.props.refreshColor) {
                    nativeProps.refreshColor = this.processColor(this.props.refreshColor)
                }
                let {
                    renderItem: renderItem,
                    getItemType: getItemType
                } = this.props;
                let itemList = [];
                let itemStyle = {};
                if (__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["Platform"].OS === "ios") {
                    let itemWidth = (__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["Dimensions"].get("window").width - this.props.contentInset.left - this.props.contentInset.right - (this.props.numberOfColumns - 1) * this.props.columnSpacing) / this.props.numberOfColumns;
                    itemStyle.width = itemWidth
                }
                if (typeof bannerView === "function") {
                    const banner = bannerView();
                    if (banner) {
                        itemList.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(QBWaterfallViewItem, {
                            key: "bannerView",
                            type: "bannerView"
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(banner)));
                        nativeProps.containBannerView = true;
                        nativeProps.numberOfRows += 1
                    }
                }
                for (let index = 0; index < currentRowCount; index++) {
                    let type = getItemType(index);
                    itemList.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(QBWaterfallViewItem, {
                        key: "item_" + type + "_" + index,
                        type: type,
                        style: itemStyle
                    },
                    renderItem(index)))
                }
                delete nativeProps.renderItem;
                delete nativeProps.getItemType;
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", _extends({
                    initialListReady: this.handleInitialListReady.bind(this)
                },
                nativeProps), itemList)
            }
        },
        _class.defaultProps = {
            initialListSize: 10,
            contentInset: {
                top: 0,
                bottom: 0,
                right: 0,
                left: 0
            },
            columnSpacing: 0
        },
        _temp)
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/QBWebView.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBWebView", (function() {
            return QBWebView
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        var _extends = Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        const COMMAND = {
            GO_BACK: "goBack",
            GO_FORWARD: "goForward",
            RELOAD: "reload",
            STOP_LOADING: "stopLoading",
            POST_MESSAGE: "postMessage",
            INJECT_JAVASCRIPT: "injectJavaScript",
            ACTIVE: "active",
            DEACTIVE: "deactive",
            PRELOAD: "preLoad"
        };
        let QBWebView = class QBWebView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            render() {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({},
                this.props, {
                    onShouldStartLoadWithRequest: this._onShouldStartLoadWithRequest.bind(this),
                    onLoadingError: this._onLoadingError.bind(this),
                    onLoadingFinish: this._onLoadingFinish.bind(this),
                    onLoadingStart: this._onLoadingStart.bind(this),
                    onBackOrForwardChange: this._onBackOrForwardChange.bind(this),
                    onMessage: this._onMessage.bind(this),
                    messagingEnabled: true
                }))
            }
            goBack() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.GO_BACK, [])
            }
            goForward() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.GO_FORWARD, [])
            }
            reload() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.RELOAD, [])
            }
            stopLoading() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.STOP_LOADING, [])
            }
            postMessage(msg) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.POST_MESSAGE, [msg])
            }
            injectScript(js) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.INJECT_JAVASCRIPT, [js])
            }
            active() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.ACTIVE, [])
            }
            deactive() {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.DEACTIVE, [])
            }
            preLoad(options) {
                __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, COMMAND.PRELOAD, [options])
            }
            _onShouldStartLoadWithRequest(e) {
                if (__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["Platform"].OS === "ios") {
                    if (this.props.onShouldStartLoadWithRequest) {
                        var shouldStart = this.props.onShouldStartLoadWithRequest(e);
                        __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "startLoadWithResult", [ !! shouldStart, e.lockIdentifier])
                    } else {
                        __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["UIManagerModule"].callUIFunction(this, "startLoadWithResult", [true, e.lockIdentifier])
                    }
                } else {
                    this.props.onShouldStartLoadWithRequest && this.props.onShouldStartLoadWithRequest(e)
                }
            }
            _onLoadingError(e) {
                var {
                    onError: onError,
                    onLoadEnd: onLoadEnd
                } = this.props;
                onError && onError(e);
                onLoadEnd && onLoadEnd(e);
                this.props.onLoadingError && this.props.onLoadingError(e)
            }
            _onLoadingFinish(e) {
                var {
                    onLoad: onLoad,
                    onLoadEnd: onLoadEnd
                } = this.props;
                onLoad && onLoad(e);
                onLoadEnd && onLoadEnd(e);
                this.props.onLoadingFinish && this.props.onLoadingFinish(e)
            }
            _onLoadingStart(e) {
                var {
                    onLoadStart: onLoadStart
                } = this.props;
                onLoadStart && onLoadStart(e);
                this.props.onLoadingStart && this.props.onLoadingStart(e)
            }
            _onMessage(e) {
                try {
                    this.props.onMessage && this.props.onMessage(e)
                } catch(e) {
                    console.log(e)
                }
            }
            _onBackOrForwardChange(e) {
                this.props.onBackOrForwardChange && this.props.onBackOrForwardChange(e)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/TouchableFeedback.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "TouchableFeedback", (function() {
            return TouchableFeedback
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        var __WEBPACK_IMPORTED_MODULE_2__modules_QBWindowModule__ = __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/QBWindowModule.js");
        let TouchableFeedback = class TouchableFeedback extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                this.state = {
                    isClicked: false
                }
            }
            render() {
                let {
                    pressBgColor: pressBgColor,
                    pressTextColor: pressTextColor,
                    pressTextSize: pressTextSize
                } = this.props;
                let children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], null);
                if (this.props.children) {
                    if (this.state.isClicked) {
                        let originStyle = this.props.children.props.style;
                        let newStyle = JSON.parse(JSON.stringify(originStyle));
                        if (pressBgColor) {
                            newStyle = Object.assign(newStyle, {
                                backgroundColors: pressBgColor
                            })
                        }
                        if (pressTextColor) {
                            newStyle = Object.assign(newStyle, {
                                colors: pressTextColor
                            })
                        }
                        if (pressTextSize) {
                            newStyle = Object.assign(newStyle, {
                                textSize: pressTextSize
                            })
                        }
                        children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(this.props.children, {
                            style: newStyle
                        })
                    } else {
                        children = this.props.children
                    }
                }
                let nativeStyle = {};
                if (children && children.props && children.props.style) {
                    if (typeof children.props.style.flex != "undefined") {
                        nativeStyle = {
                            flex: children.props.style.flex
                        }
                    } else if (typeof children.props.style.flexGrow != "undefined") {
                        nativeStyle = {
                            flexGrow: children.props.style.flexGrow
                        }
                    }
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], {
                    style: nativeStyle,
                    onPressIn: this._onPressIn.bind(this),
                    onPressOut: this._onPressOut.bind(this),
                    onClick: this._loadUrl.bind(this)
                },
                children || __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], null))
            }
            _onPressIn() {
                this.setState({
                    isClicked: true
                })
            }
            _onPressOut() {
                this.setState({
                    isClicked: false
                })
            }
            _loadUrl() {
                let {
                    onClick: onClick,
                    url: url,
                    source: source
                } = this.props;
                if (onClick) {
                    onClick()
                } else if (url && source) {
                    __WEBPACK_IMPORTED_MODULE_2__modules_QBWindowModule__["QBWindowModule"].loadUrl(url, source)
                }
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/TouchableOpacity.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "TouchableOpacity", (function() {
            return TouchableOpacity
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__);
        var _extends = Object.assign ||
        function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        let TouchableOpacity = class TouchableOpacity extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                this.state = {
                    updateOpacity: 1
                }
            }
            _pressIn() {
                this.setState({
                    updateOpacity: .2
                })
            }
            _pressOut() {
                this.setState({
                    updateOpacity: 1
                })
            }
            render() {
                let newProps = Object.assign({},
                this.props);
                let newStyle = Object.assign({},
                newProps.style, {
                    opacity: this.state.updateOpacity
                });
                delete newProps.style;
                newProps.style = newStyle;
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__tencent_hippy_react__["View"], _extends({},
                newProps, {
                    onPressIn: this._pressIn.bind(this),
                    onPressOut: this._pressOut.bind(this)
                }))
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/components/TouchableWithoutFeedback.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "TouchableWithoutFeedback", (function() {
            return TouchableWithoutFeedback
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        let TouchableWithoutFeedback = class TouchableWithoutFeedback extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            render() {
                const child = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children);
                let onClick = this.props.onClick;
                let onPressIn = this.props.onPressIn;
                let onPressOut = this.props.onPressOut;
                let children = child.props.children;
                let style = child.props.style;
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
                    onPressIn: onPressIn,
                    onPressOut: onPressOut,
                    onClick: onClick,
                    style: style,
                    children: children
                })
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/PCGStatModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "PCGStatModule", (function() {
            return PCGStatModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const MODULE_NAME = "PCGStatModule";
        const PCGStatModule = {
            dtReportEventName: {
                PG_IN: "pgin",
                PG_OUT: "pgout",
                ELE_EXP: "imp",
                CLICK: "clck"
            },
            dtManualReport(eventName = "", params = {},
            viewTag = 0) {
                if (!Number.isInteger(viewTag)) return;
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "dtManualReport", eventName, params, viewTag)
            }
        };
        __webpack_exports__["default"] = PCGStatModule
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBAccountModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBAccountModule", (function() {
            return QBAccountModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const MODULE_NAME = "QBAccountModule";
        const QBAccountModule = {
            LOGIN_APP_TYPE_QQ: 1,
            LOGIN_APP_TYPE_WECHAT: 2,
            LOGIN_BUSINESS_TYPE_FEEDS: 1e4,
            LOGIN_BUSINESS_TYPE_USER_CENTER: 10001,
            getAccountInfo: function() {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "getAccountInfo")
            },
            refreshToken: function(option) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "refreshToken", option)
            },
            showLoginPanel: function(fromWhere, dataMap) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "showLoginPanel", "10000", dataMap)
            },
            doQuickLogin: function(appType, dataMap) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "doQuickLogin", appType, dataMap)
            },
            checkLoginAppInstalled: function(appType) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "checkLoginAppInstalled", appType)
            },
            getAccountInfoWithAppID: function(appID) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "getAccountInfoWithAppID", appID)
            },
            doQuickLoginWithAppID: function(appType, dataMap) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "doQuickLoginWithAppID", appType, dataMap)
            },
            doLogoutWithAppID: function(appID) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "doLogoutWithAppID", appID)
            },
            showLoginSelectPanel: function() {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "showLoginSelectPanel")
            },
            hasGuestLogin: function() {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "hasGuestLogin")
            },
            getGuestAccountInfo: function() {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "getGuestAccountInfo")
            },
            isRealName: function(dataMap) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "isRealName", dataMap)
            },
            doRealName: function(dataMap) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "doRealName", dataMap)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBActionSheetModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBActionSheetModule", (function() {
            return QBActionSheetModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const MODULE_NAME = "QBActionSheetModule";
        const QBActionSheetModule = {
            showActionSheet: function(items, selectedIndex) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "showActionSheet", items, selectedIndex)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBAlertModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBAlertModule", (function() {
            return QBAlertModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBAlertModule = {
            showAlert: function(title, message, buttons) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBAlertModule", "showAlert", title, message, buttons)
            },
            showMenu: function(position, menus) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBAlertModule", "showMenu", position, menus)
            },
            showPopMenu: function(menus, shareInfo) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBAlertModule", "showPopMenu", menus, shareInfo)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBAppMarketGuideModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBAppMarketGuideModule", (function() {
            return QBAppMarketGuideModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBAppMarketGuideModule = {
            tryShowAppMarketGuide: function(scene = "default") {
                if (__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["Platform"].OS === "ios") {
                    return Promise.reject(new Error("Android only"))
                }
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBAppMarketGuideModule", "tryShowAppMarketGuide", scene)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBAudioDownloadModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBAudioDownloadModule", (function() {
            return QBAudioDownloadModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        var __WEBPACK_IMPORTED_MODULE_1__audio_download_AudioDownloadStatusInfo__ = __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/audio-download/AudioDownloadStatusInfo.js");
        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise((function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value
                        } catch(error) {
                            reject(error);
                            return
                        }
                        if (info.done) {
                            resolve(value)
                        } else {
                            return Promise.resolve(value).then((function(value) {
                                step("next", value)
                            }), (function(err) {
                                step("throw", err)
                            }))
                        }
                    }
                    return step("next")
                }))
            }
        }
        const MODULE_NAME = "QBAudioDownloadModule";
        let QBAudioDownloadObserver = class QBAudioDownloadObserver extends __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["HippyEventEmitter"] {
            addListener(eventType, listener, context) {
                const count = super.listenerSize(eventType);
                if (count < 1) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "addListener", eventType)
                }
                return super.addListener(eventType, listener, context)
            }
            removeListener(eventType, listener) {
                const count = super.listenerSize(eventType);
                if (count <= 1) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "removeListener", eventType)
                }
                listener.remove()
            }
        };
        var createObserver = function() {
            if (__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["Platform"].OS === "ios") {
                return new QBAudioDownloadObserver
            } else {
                return new __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["HippyEventEmitter"]
            }
        };
        const AudioDownloadModuleEventEmitter = createObserver();
        const EVENT_AUDIO_DOWNLOAD_STATUS_CHANGED = "ReactAudioDownloadStatusChanged";
        const _downloadListenerMap = new Map;
        const _downloadStatusCache = new Map;
        const QBAudioDownloadModule = {
            DOWNLOAD_STATUS_NONE: __WEBPACK_IMPORTED_MODULE_1__audio_download_AudioDownloadStatusInfo__["default"].DownloadStatusConst.DOWNLOAD_STATUS_NONE,
            DOWNLOAD_STATUS_DOWNLOADING: __WEBPACK_IMPORTED_MODULE_1__audio_download_AudioDownloadStatusInfo__["default"].DownloadStatusConst.DOWNLOAD_STATUS_DOWNLOADING,
            DOWNLOAD_STATUS_PAUSE: __WEBPACK_IMPORTED_MODULE_1__audio_download_AudioDownloadStatusInfo__["default"].DownloadStatusConst.DOWNLOAD_STATUS_PAUSE,
            DOWNLOAD_STATUS_COMPLETED: __WEBPACK_IMPORTED_MODULE_1__audio_download_AudioDownloadStatusInfo__["default"].DownloadStatusConst.DOWNLOAD_STATUS_COMPLETED,
            DOWNLOAD_STATUS_ERROR: __WEBPACK_IMPORTED_MODULE_1__audio_download_AudioDownloadStatusInfo__["default"].DownloadStatusConst.DOWNLOAD_STATUS_ERROR,
            DOWNLOAD_ITEM_KEY_ALBUM_ID: "sAlbumId",
            DOWNLOAD_ITEM_KEY_TRACK_ID: "sTrackId",
            DOWNLOAD_ITEM_KEY_Title: "sTitle",
            DOWNLOAD_ITEM_KEY_URL: "sDownloadUrl",
            DOWNLOAD_ITEM_KEY_TOTAL_SIZE: "iSize",
            DOWNLOAD_ITEM_KEY_DOWNLOAD_SIZE: "iDownloadSize"
        };
        const _downloadCtrl = {
            _initDownloadCtrl() {
                if (this.mHasInited === true) {
                    return
                }
                const downloadStatusCount = AudioDownloadModuleEventEmitter.listenerSize(EVENT_AUDIO_DOWNLOAD_STATUS_CHANGED);
                if (downloadStatusCount < 1) {
                    AudioDownloadModuleEventEmitter.addListener(EVENT_AUDIO_DOWNLOAD_STATUS_CHANGED, downloadInfo =>{
                        this._onTaskStatusChanged(downloadInfo)
                    })
                }
                this.mHasInited = true
            },
            _startDownload(downloadArgsList, isNewTask) {
                var _this = this;
                return _asyncToGenerator((function * () {
                    if (downloadArgsList == undefined || downloadArgsList.length == 0) {
                        return
                    }
                    _this._initDownloadCtrl();
                    const resultFromNative = yield Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "startDownload", downloadArgsList, isNewTask);
                    return resultFromNative
                }))()
            },
            _onTaskStatusChanged(downloadInfo) {
                if (downloadInfo == undefined) {
                    console.warn("_onTaskStatusChanged: but downloadStatus is undefined");
                    return
                }
                const downloadUrl = downloadInfo.sDownloadUrl;
                if (downloadUrl == undefined) {
                    console.warn("_onTaskStatusChanged: but download url is undefined");
                    return
                }
                let cachedStatus = _downloadStatusCache.get(downloadUrl);
                if (!cachedStatus) {
                    cachedStatus = new __WEBPACK_IMPORTED_MODULE_1__audio_download_AudioDownloadStatusInfo__["default"]
                }
                cachedStatus.updateDownloadStatus(downloadInfo);
                _downloadStatusCache.set(downloadUrl, cachedStatus);
                const callbackList = _downloadListenerMap.get(downloadUrl);
                if (callbackList != undefined && Array.isArray(callbackList)) {
                    const cpCallbackList = Object.assign([], callbackList);
                    cpCallbackList.map(oneListener =>{
                        if (oneListener != undefined && oneListener instanceof Function) {
                            oneListener(cachedStatus)
                        }
                    })
                }
            },
            _pauseDownload(downloadArgsList) {
                var _this2 = this;
                return _asyncToGenerator((function * () {
                    if (downloadArgsList == undefined || downloadArgsList.length == 0) {
                        console.warn("_pauseDownload: but downloadArgsList is undefined");
                        return
                    }
                    _this2._initDownloadCtrl();
                    const resultFromNative = yield Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "pauseDownload", downloadArgsList);
                    return resultFromNative
                }))()
            },
            _deleteDownload(downloadArgsList) {
                var _this3 = this;
                return _asyncToGenerator((function * () {
                    if (downloadArgsList == undefined || downloadArgsList.length == 0) {
                        console.warn("_pauseDownload: but downloadArgsList is undefined");
                        return
                    }
                    _this3._initDownloadCtrl();
                    const resultFromNative = yield Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "deleteDownload", downloadArgsList);
                    return resultFromNative
                }))()
            },
            _deleteAllDownloadingTask(category) {
                this._initDownloadCtrl();
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "deleteAllDownloadingTask", category)
            },
            _getDownloadInfo(downloadArgsList) {
                var _this4 = this;
                return _asyncToGenerator((function * () {
                    if (downloadArgsList == undefined || downloadArgsList.length == 0) {
                        console.warn("_getDownloadInfo: but downloadArgsList is undefined");
                        return
                    }
                    _this4._initDownloadCtrl();
                    let downloadInfoListFromNative = yield Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "getDownloadInfo", downloadArgsList);
                    return downloadInfoListFromNative
                }))()
            },
            _getCurrentDownloadTaskList(category) {
                this._initDownloadCtrl();
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "getCurrentDownloadTaskList", category)
            },
            _getDownloadedTaskList(albumIdList, category) {
                this._initDownloadCtrl();
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "getDownloadedTaskList", albumIdList, category)
            },
            _addDownloadStatusListener(downloadUrl, listener) {
                if (downloadUrl == undefined || listener == undefined) {
                    console.warn("_addDownloadStatusListener: but downloadUrl or listener undefined");
                    return
                }
                this._initDownloadCtrl();
                let callbackList = [];
                if (_downloadListenerMap.has(downloadUrl)) {
                    callbackList = _downloadListenerMap.get(downloadUrl);
                    if (callbackList == undefined || !Array.isArray(callbackList)) {
                        callbackList = [listener]
                    } else if (callbackList.indexOf(listener) >= 0) {
                        console.log("_addDownloadStatusListener: already added");
                        return
                    } else {
                        callbackList.push(listener)
                    }
                } else {
                    callbackList = [listener]
                }
                _downloadListenerMap.set(downloadUrl, callbackList);
                console.log("_addDownloadStatusListener: add to callback list succ")
            },
            _removeDownloadStatusListener(downloadUrl, listener) {
                if (downloadUrl == undefined) {
                    console.warn("_removeDownloadStatusListener: but downloadUrl undefined");
                    return
                }
                this._initDownloadCtrl();
                if (!_downloadListenerMap.has(downloadUrl)) {
                    console.log("_removeDownloadStatusListener: downloadUrl=" + downloadUrl + " not exits in map");
                    return
                }
                let callbackList = _downloadListenerMap.get(downloadUrl);
                if (callbackList != undefined && Array.isArray(callbackList)) {
                    if (listener) {
                        let index = callbackList.indexOf(listener);
                        if (index >= 0) {
                            callbackList.splice(index, 1);
                            if (callbackList.length == 0) {
                                _downloadListenerMap.delete(downloadUrl)
                            } else {
                                _downloadListenerMap.set(downloadUrl, callbackList)
                            }
                            console.log("_removeDownloadStatusListener: remove from callback list succ")
                        }
                    } else {
                        _downloadListenerMap.delete(downloadUrl);
                        console.log("_removeDownloadStatusListener: remove all from callback list succ")
                    }
                }
            }
        };
        QBAudioDownloadModule.startDownload = function(downloadArgsList, isNewTask) {
            return _downloadCtrl._startDownload(downloadArgsList, isNewTask)
        };
        QBAudioDownloadModule.pauseDownload = function(downloadArgsList) {
            return _downloadCtrl._pauseDownload(downloadArgsList)
        };
        QBAudioDownloadModule.deleteDownload = function(downloadArgsList) {
            return _downloadCtrl._deleteDownload(downloadArgsList)
        };
        QBAudioDownloadModule.deleteAllDownloadingTask = function(category) {
            return _downloadCtrl._deleteAllDownloadingTask(category)
        };
        QBAudioDownloadModule.getDownloadInfo = function(downloadArgsList) {
            return _downloadCtrl._getDownloadInfo(downloadArgsList)
        };
        QBAudioDownloadModule.getCurrentDownloadTaskList = function(category) {
            return _downloadCtrl._getCurrentDownloadTaskList(category)
        };
        QBAudioDownloadModule.getDownloadedTaskList = function(albumIdList, category) {
            return _downloadCtrl._getDownloadedTaskList(albumIdList, category)
        };
        QBAudioDownloadModule.addDownloadStatusListener = function(downloadInfo, listener) {
            const downloadUrl = downloadInfo.sDownloadUrl;
            if (downloadUrl == undefined || !listener) {
                return
            }
            if (typeof listener == "function") {
                _downloadCtrl._addDownloadStatusListener(downloadUrl, listener)
            }
        };
        QBAudioDownloadModule.removeDownloadStatusListener = function(downloadInfo, listener) {
            const downloadUrl = downloadInfo.sDownloadUrl;
            if (downloadUrl == undefined) {
                return
            }
            _downloadCtrl._removeDownloadStatusListener(downloadUrl, listener)
        };
        QBAudioDownloadModule.removeDownloadStatusListenerAll = function(downloadArgsList) {
            if (downloadArgsList && downloadArgsList.length) {
                downloadArgsList.forEach((function(downloadInfo) {
                    const downloadUrl = downloadInfo.sDownloadUrl;
                    if (downloadUrl == undefined) {
                        return
                    }
                    _downloadCtrl._removeDownloadStatusListener(downloadUrl)
                }))
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBAudioPlayerModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBAudioPlayerModule", (function() {
            return QBAudioPlayerModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const MODULE_NAME = "QBAudioPlayerModule";
        let QBAudioPlayerModule = {
            DEFAULT_FORWARD_BACKWARD_TIME: 15,
            PLAYER_EVENT_CHANGE: "audio_player_event_change",
            EVENT_FUNC_NAME: "eventFuncName",
            EVENT_PARAM_ARG1: "arg1",
            EVENT_PARAM_ARG2: "arg2",
            EVENT_ON_ENTER_SCENE: "_onEnterScene",
            EVENT_ON_EXIT_SCENE: "_onExitScene",
            EVENT_ON_START_NEW_AUDIO: "_onStartNewAudio",
            EVENT_ON_OPEN: "_onOpen",
            EVENT_ON_PREPARED: "_onPrepared",
            EVENT_ON_AUDIO_CHANGE: "_onAudioChange",
            EVENT_ON_PLAY: "_onPlay",
            EVENT_ON_END: "_onEnd",
            EVENT_ON_PAUSE: "_onPause",
            EVENT_ON_CLOSE: "_onClose",
            EVENT_ON_PROGRESS_CHANGE: "_onTimeUpdate",
            EVENT_ON_TOTAL_TIME_UPDATE: "_onTotalTimeUpdate",
            EVENT_ON_AUDIO_ERROR: "_onAudioError",
            EVENT_ON_PLAY_TIMER_UPDATE: "_onPlayTimerUpdate",
            EVENT_ON_SAMPLE_LISTEN_FINISHED: "_onSampleListenFinished",
            PLAY_ITEM_TYPE_WEB: 0,
            PLAY_ITEM_TYPE_FM: 1,
            PLAY_ITEM_TYPE_SIRI: 2,
            PLAY_ITEM_KEY_ID: "id",
            PLAY_ITEM_KEY_TYPE: "type",
            PLAY_ITEM_KEY_TITLE: "sTitle",
            PLAY_ITEM_KEY_ARTIST: "sAuthorName",
            PLAY_ITEM_KEY_COVER_URL: "sCoverUrl",
            PLAY_ITEM_KEY_ORIGINAL_WEB_URL: "originWebUrl",
            PLAY_ITEM_KEY_AUDIO_PLAY_URL: "audioURL",
            PLAY_ITEM_KEY_IS_VALID: "isValid",
            PLAY_ITEM_KEY_TOTAL_TIME: "lDuration",
            PLAY_ITEM_KEY_ALBUM_ID: "sAlbumId",
            PLAY_ITEM_KEY_TRACK_ID: "sTrackId",
            PLAY_ITEM_KEY_SERIAL_ID: "iSerialId",
            PLAY_ITEM_KEY_ISSUBSCRIPTION: "isSubscription",
            PLAY_ITEM_KEY_S_JSON: "sJson"
        };
        QBAudioPlayerModule.setPlayList = function(playlist) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "setPlayList", playlist)
        };
        QBAudioPlayerModule.getPlayList = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "getPlayList")
        };
        QBAudioPlayerModule.getCurPlayItem = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "getCurPlayItem")
        };
        QBAudioPlayerModule.getCurPlayIndex = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "getCurPlayIndex")
        };
        QBAudioPlayerModule.updatePlayList = function(playlist, index) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "updatePlayList", playlist, index)
        };
        QBAudioPlayerModule.setPlayListMode = function(mode) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "setPlayListMode", mode)
        };
        QBAudioPlayerModule.getPlayListMode = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "getPlayListMode")
        };
        QBAudioPlayerModule.startPlay = function(index, seek = 0) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "startPlay", index, seek)
        };
        QBAudioPlayerModule.setPlayLoopMode = function(mode) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "setPlayLoopMode", mode)
        };
        QBAudioPlayerModule.getPlayLoopMode = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "getPlayLoopMode")
        };
        QBAudioPlayerModule.setPlayRate = function(rate) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "setPlayRate", rate)
        };
        QBAudioPlayerModule.getPlayRate = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "getPlayRate")
        };
        QBAudioPlayerModule.play = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "play")
        };
        QBAudioPlayerModule.isOpen = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "isOpen")
        };
        QBAudioPlayerModule.isPlaying = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "isPlaying")
        };
        QBAudioPlayerModule.pause = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "pause")
        };
        QBAudioPlayerModule.close = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "close")
        };
        QBAudioPlayerModule.fastForward = function(time = QBAudioPlayerModule.DEFAULT_FORWARD_BACKWARD_TIME) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "fastForward", time)
        };
        QBAudioPlayerModule.fastBackward = function(time = QBAudioPlayerModule.DEFAULT_FORWARD_BACKWARD_TIME) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "fastBackward", time)
        };
        QBAudioPlayerModule.playNextItem = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "playNextItem")
        };
        QBAudioPlayerModule.playLastItem = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "playLastItem")
        };
        QBAudioPlayerModule.setPlaybackTimer = function(time) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "setPlaybackTimer", time)
        };
        QBAudioPlayerModule.getPlaybackTimer = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "getPlaybackTimer")
        };
        QBAudioPlayerModule.seek = function(time) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "seek", time)
        };
        QBAudioPlayerModule.removeFromPlayHistory = function(index) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "removeFromPlayHistory", index)
        };
        QBAudioPlayerModule.openFullPlayerWindow = function(url) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "openFullPlayerWindow", url)
        };
        QBAudioPlayerModule.closeFullPlayerWindow = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "closeFullPlayerWindow")
        };
        QBAudioPlayerModule.synchronizeNativeProgress = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "synchronizeNativeProgress")
        };
        QBAudioPlayerModule.canSupportSpeedSet = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "canSupportSpeedSet")
        };
        QBAudioPlayerModule.isSampleListenFinished = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "isSampleListenFinished")
        };
        QBAudioPlayerModule.getCurPlayItemProgress = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "getCurPlayItemProgress")
        };
        QBAudioPlayerModule.getPlayListFromIndex = function(index, count) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "getPlayListFromIndex", index, count)
        };
        QBAudioPlayerModule.getPlayListSize = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "getPlayListSize")
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBAudioSession.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBAudioSession", (function() {
            return QBAudioSession
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const _subscriptions = new Map;
        const _audioObserver = new __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["HippyEventEmitter"];
        const VOLUME_CHANGE_EVENT = "volumeDidChanged";
        let AudioSessionEventRevoker = class AudioSessionEventRevoker {
            constructor(eventName, handler) {
                this.eventName = eventName;
                this.handler = handler
            }
            remove() {
                QBAudioSession.removeEventListener(this.eventName, this.handler)
            }
        };
        const QBAudioSession = {
            addEventListener: function(eventName, handler) {
                let finalEventName = eventName;
                if (eventName && eventName === "change") {
                    finalEventName = VOLUME_CHANGE_EVENT
                }
                const count = _audioObserver.listenerSize(finalEventName);
                if (count < 1) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBAudioSession", "addListener", finalEventName)
                }
                if (handler) {
                    const listener = _audioObserver.addListener(finalEventName, data =>{
                        handler(data)
                    });
                    _subscriptions.set(handler, listener);
                    return new AudioSessionEventRevoker(eventName, handler)
                }
            },
            removeEventListener: function(eventName, handler) {
                let finalEventName = eventName;
                if (handler instanceof AudioSessionEventRevoker) {
                    handler.remove();
                    return
                }
                if (eventName && eventName === "change") {
                    finalEventName = VOLUME_CHANGE_EVENT
                }
                const count = _audioObserver.listenerSize(finalEventName);
                if (count <= 1) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBAudioSession", "removeListener", finalEventName)
                }
                const listener = _subscriptions.get(handler);
                if (!listener) {
                    return
                }
                listener.remove();
                _subscriptions.delete(handler)
            },
            hideVolumeControl: function() {
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBAudioSession", "hideVolumeControl")
            },
            showVolumeControl: function() {
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBAudioSession", "showVolumeControl")
            },
            isShowVolumeControl: function() {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBAudioSession", "isShowVolumeControl")
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBAudioStorageModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBAudioStorageModule", (function() {
            return QBAudioStorageModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const MODULE_NAME = "QBAudioStorageModule";
        const QBAudioStorageModule = {
            queryDownloadListFromDB: function(needRemoveData) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "queryDownloadListFromDB", needRemoveData)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBBrowserObserver.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBBrowserObserver", (function() {
            return QBBrowserObserver
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const MODULE_NAME = "QBBrowserObserver";
        var callNativeObserver = function(func, par) {
            Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, func, par)
        };
        let QBBrowserObserverClass = class QBBrowserObserverClass extends __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["HippyEventEmitter"] {
            addListener(eventType, listener, context) {
                const count = super.listenerSize(eventType);
                if (count < 1) {
                    callNativeObserver("addListener", eventType)
                }
                return super.addListener(eventType, listener, context)
            }
            removeListener(eventType, listener) {
                const count = super.listenerSize(eventType);
                if (count <= 1) {
                    callNativeObserver("removeListener", eventType)
                }
                listener.remove()
            }
        };
        const QBBrowserObserver = new QBBrowserObserverClass
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBBusinessADModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBBusinessADModule", (function() {
            return QBBusinessADModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const MODULE_NAME = "QBBusinessADModule";
        const EVENT_AD_STATE_CHANGE = "@event_ad_state_change";
        __webpack_exports__["EVENT_AD_STATE_CHANGE"] = EVENT_AD_STATE_CHANGE;
        const EVENT_AD_RESULT_RECEIVE = "@event_ad_result_receive";
        __webpack_exports__["EVENT_AD_RESULT_RECEIVE"] = EVENT_AD_RESULT_RECEIVE;
        const TYPE_AMS_REWARD_VIDEO_AD = 1;
        __webpack_exports__["TYPE_AMS_REWARD_VIDEO_AD"] = TYPE_AMS_REWARD_VIDEO_AD;
        let QBBusinessADStateListener = class QBBusinessADStateListener extends __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["HippyEventEmitter"] {
            addListener(eventType, listener, context) {
                const count = super.listenerSize(eventType);
                if (count < 1) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "addListener", eventType)
                }
                return super.addListener(eventType, listener, context)
            }
            removeListener(eventType, listener) {
                const count = super.listenerSize(eventType);
                if (count <= 1) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "removeListener", eventType)
                }
                listener.remove()
            }
        };
        function createObserver() {
            if (__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["Platform"].OS === "ios") {
                return new QBBusinessADStateListener
            }
            return new __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["HippyEventEmitter"]
        }
        const QBBusinessADStateEventEmitter = createObserver();
        const adStateChangeListenerList = [];
        const addResultReceiveListenerList = [];
        const QBBusinessADModule = {
            PARAM_POS_ID: "posId",
            PARAM_DATA: "adData",
            RST_CODE: "code",
            RST_DATA: "data",
            RST_ERR_MSG: "errMsg",
            _initListenerList() {
                if (this.mHasInited === true) {
                    return
                }
                const listenerCount = QBBusinessADStateEventEmitter.listenerSize(EVENT_AD_STATE_CHANGE);
                if (listenerCount < 1) {
                    QBBusinessADStateEventEmitter.addListener(EVENT_AD_STATE_CHANGE, event =>this._onADStateChanged(event))
                }
                const receiveListenerCount = QBBusinessADStateEventEmitter.listenerSize(EVENT_AD_RESULT_RECEIVE);
                if (receiveListenerCount < 1) {
                    QBBusinessADStateEventEmitter.addListener(EVENT_AD_RESULT_RECEIVE, event =>this._onResultReceived(event))
                }
                this.mHasInited = true
            },
            _onADStateChanged(event) {
                if (event === undefined) {
                    return
                }
                adStateChangeListenerList.forEach(listener =>{
                    if (listener instanceof Function) {
                        listener(event)
                    }
                })
            },
            _onResultReceived(event) {
                if (event === undefined) {
                    return
                }
                addResultReceiveListenerList.forEach(listener =>{
                    if (listener instanceof Function) {
                        listener(event)
                    }
                })
            },
            addADStateChangeListener(listener) {
                this._initListenerList();
                if (adStateChangeListenerList.indexOf(listener) < 0) {
                    adStateChangeListenerList.push(listener)
                }
            },
            removeADStateChangeListener(listener) {
                this._initListenerList();
                const index = adStateChangeListenerList.indexOf(listener);
                if (index >= 0) {
                    adStateChangeListenerList.slice(index, 1)
                }
            },
            addResultReceiveListener(listener) {
                this._initListenerList();
                if (addResultReceiveListenerList.indexOf(listener) < 0) {
                    addResultReceiveListenerList.push(listener)
                }
            },
            setAmsRewardVideoAD(params) {
                this._initListenerList();
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "setAmsRewardVideoAD", params)
            },
            showAmsRewardVideoAD(params) {
                this._initListenerList();
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "showAmsRewardVideoAD", params)
            },
            releaseAmsRewardVideoAD(params) {
                this._initListenerList();
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "releaseAmsRewardVideoAD", params)
            },
            getAmsAdDeviceInfo(params) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "getDeviceInfo", params)
            },
            doAmsAdClick(params) {
                this._initListenerList();
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "doClick", params)
            },
            perloadAfterAdLoaded(params) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "preloadAfterAdLoaded", params)
            }
        };
        __webpack_exports__["default"] = QBBusinessADModule
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBCircleModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBCircleModule", (function() {
            return QBCircleModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const MODULE_NAME = "QBCircleModule";
        let QBCircleObserver = class QBCircleObserver extends __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["HippyEventEmitter"] {
            addListener(eventType, listener, context) {
                const count = super.listenerSize(eventType);
                if (count < 1) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "addListener", eventType)
                }
                return super.addListener(eventType, listener, context)
            }
            removeListener(eventType, listener) {
                const count = super.listenerSize(eventType);
                if (count <= 1) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "removeListener", eventType)
                }
                listener.remove()
            }
        };
        let createObserver = function() {
            if (__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["Platform"].OS === "ios") {
                return new QBCircleObserver
            } else {
                return new __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["HippyEventEmitter"]
            }
        };
        const CircleEventEmitter = createObserver();
        const EVENT_PUBLISH_PROGRESS = "publishProgress";
        const EVENT_PUBLISH_FINISH = "publishFinish";
        const EVENT_CIRCLE_FOLLOW = "circleFollow";
        const EVENT_CIRCLE_ADDVOTE = "circleAddVote";
        const _finishCallbackMap = new Map;
        const _progressCallbackMap = new Map;
        const _circlePublishCtrl = {
            _openCirclePublisher(publishArgs, onFinishCallback, onProgressCallback) {
                const publishProgressCount = CircleEventEmitter.listenerSize(EVENT_PUBLISH_PROGRESS);
                if (publishProgressCount < 1) {
                    CircleEventEmitter.addListener(EVENT_PUBLISH_PROGRESS, progressData =>{
                        this._onProgressCallback(progressData)
                    })
                }
                const publishFinishCount = CircleEventEmitter.listenerSize(EVENT_PUBLISH_FINISH);
                if (publishFinishCount < 1) {
                    CircleEventEmitter.addListener(EVENT_PUBLISH_FINISH, resultData =>{
                        this._onFinishCallback(resultData)
                    })
                }
                let jsonfyArguments = null;
                try {
                    jsonfyArguments = JSON.stringify(publishArgs)
                } catch(error) {
                    return
                }
                const _callbackId = (new Date).getTime() + "_" + Math.ceil(Math.random() * 1e4);
                const invokeParam = {
                    _ReactCallbackId: _callbackId,
                    args: jsonfyArguments
                };
                if (onFinishCallback && typeof onFinishCallback == "function") {
                    _finishCallbackMap.set(_callbackId, onFinishCallback)
                }
                if (onProgressCallback && typeof onProgressCallback == "function") {
                    _progressCallbackMap.set(_callbackId, onProgressCallback)
                }
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "launchCirclePublisher", invokeParam)
            },
            _notifyFollowComplete(options) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "notifyFollowComplete", options)
            },
            _addFollowListener(listener) {
                if (typeof listener !== "function") {
                    return
                }
                if (__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["Platform"].OS === "ios") {
                    return CircleEventEmitter.addListener(EVENT_CIRCLE_FOLLOW, listener)
                } else {
                    let followListenerLength = CircleEventEmitter.listenerSize(EVENT_CIRCLE_FOLLOW);
                    if (followListenerLength < 1) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "addCircleListener", EVENT_CIRCLE_FOLLOW)
                    }
                    return CircleEventEmitter.addListener(EVENT_CIRCLE_FOLLOW, listener)
                }
            },
            _removeFollowListener(listener) {
                if (__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["Platform"].OS === "ios") {
                    CircleEventEmitter.removeListener(EVENT_CIRCLE_FOLLOW, listener)
                } else {
                    let followListenerLength = CircleEventEmitter.listenerSize(EVENT_CIRCLE_FOLLOW);
                    if (followListenerLength <= 1) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "removeCircleListener", EVENT_CIRCLE_FOLLOW)
                    }
                    listener.remove()
                }
            },
            _notifyAddVoteComplete(options) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "notifyAddVoteComplete", options)
            },
            _addAddVoteListener(listener) {
                if (typeof listener !== "function") {
                    return
                }
                if (__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["Platform"].OS === "ios") {
                    return CircleEventEmitter.addListener(EVENT_CIRCLE_ADDVOTE, listener)
                } else {
                    let addVoteListenerLength = CircleEventEmitter.listenerSize(EVENT_CIRCLE_ADDVOTE);
                    if (addVoteListenerLength < 1) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "addCircleListener", EVENT_CIRCLE_ADDVOTE)
                    }
                    return CircleEventEmitter.addListener(EVENT_CIRCLE_ADDVOTE, listener)
                }
            },
            _removeAddVoteListener(listener) {
                if (__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["Platform"].OS === "ios") {
                    CircleEventEmitter.removeListener(EVENT_CIRCLE_ADDVOTE, listener)
                } else {
                    let addVoteListenerLength = CircleEventEmitter.listenerSize(EVENT_CIRCLE_ADDVOTE);
                    if (addVoteListenerLength <= 1) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "removeCircleListener", EVENT_CIRCLE_ADDVOTE)
                    }
                    listener.remove()
                }
            },
            _onProgressCallback(progressData) {
                if (progressData == undefined || progressData._ReactCallbackId == undefined) {
                    return
                }
                const currProgressListener = _progressCallbackMap.get(progressData._ReactCallbackId);
                if (!currProgressListener) {
                    return
                }
                currProgressListener(progressData)
            },
            _onFinishCallback(finishData) {
                if (finishData == undefined || finishData._ReactCallbackId == undefined) {
                    return
                }
                const callbackId = finishData._ReactCallbackId;
                const currFinishListener = _finishCallbackMap.get(callbackId);
                if (currFinishListener) {
                    currFinishListener(finishData)
                }
                if (_finishCallbackMap.has(callbackId)) {
                    _finishCallbackMap.delete(callbackId)
                }
                if (_progressCallbackMap.has(callbackId)) {
                    _progressCallbackMap.delete(callbackId)
                }
                if (_finishCallbackMap.size === 0) {
                    CircleEventEmitter.removeAllListeners(EVENT_PUBLISH_FINISH)
                }
                if (_progressCallbackMap.size === 0) {
                    CircleEventEmitter.removeAllListeners(EVENT_PUBLISH_PROGRESS)
                }
            }
        };
        const EVENT_UPLOAD_PROGRESS = "uploadProgress";
        const EVENT_UPLOAD_SUCCESS = "uploadSuccess";
        const EVENT_UPLOAD_FAILED = "uploadFailed";
        const EVENT_VIDEO_MISSION_PROGRESS = "videoMissionProgress";
        const EVENT_VIDEO_MISSION_THUMBNAIL = "videoMissionThumbnail";
        const EVENT_VIDEO_MISSION_RESULT = "videoMissionResult";
        const _subscriptions = new Map;
        const _eventEmitter = new __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["HippyEventEmitter"];
        function addEventListener(eventName, handler) {
            const count = _eventEmitter.listenerSize(eventName);
            if (count < 1) {
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "addListener", eventName)
            }
            const listener = _eventEmitter.addListener(eventName, data =>{
                handler(data)
            });
            _subscriptions.set(handler, listener);
            return {
                remove: () =>removeEventListener(eventName, handler)
            }
        }
        function removeEventListener(eventName, handler) {
            const count = _eventEmitter.listenerSize(eventName);
            if (count <= 1) {
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "removeListener", eventName)
            }
            const listener = _subscriptions.get(handler);
            if (!listener) {
                return
            }
            listener.remove();
            _subscriptions.delete(handler)
        }
        let CircleUploader = class CircleUploader {
            constructor() {}
            addUploadListener(type, listener) {
                addEventListener(type, listener)
            }
            removeUploadListener(type, listener) {
                removeEventListener(type, listener)
            }
            addUploadFile(param) {
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "addUploadFile", param)
            }
            addUploadMission(param) {
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "addUploadMission", param)
            }
            removeTask(param) {
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "removeTask", param)
            }
            startUploader() {
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBCircleModule", "startUploader")
            }
            pauseUploader() {
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBCircleModule", "pauseUploader")
            }
            getUploaderProgress(func) {
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "getUploaderProgress", func)
            }
            releaseUploader() {
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBCircleModule", "releaseUploader")
            }
        };
        const QBCircleModule = {
            openCirclePublisher(publishArgs, onFinishCallback, onProgressCallback) {
                _circlePublishCtrl._openCirclePublisher(publishArgs, onFinishCallback, onProgressCallback)
            },
            notifyFollowComplete(options) {
                return _circlePublishCtrl._notifyFollowComplete(options)
            },
            addFollowListener(listener) {
                return _circlePublishCtrl._addFollowListener(listener)
            },
            removeFollowListener(listener) {
                _circlePublishCtrl._removeFollowListener(listener)
            },
            notifyAddVoteComplete(options) {
                return _circlePublishCtrl._notifyAddVoteComplete(options)
            },
            addAddVoteListener(listener) {
                return _circlePublishCtrl._addAddVoteListener(listener)
            },
            removeAddVoteListener(listener) {
                _circlePublishCtrl.removeAddVoteListener(listener)
            },
            UploadEventTypes: {
                PROGRESS: EVENT_UPLOAD_PROGRESS,
                SUCCESS: EVENT_UPLOAD_SUCCESS,
                FAILED: EVENT_UPLOAD_FAILED
            },
            MissionEventTypes: {
                PROGRESS: EVENT_VIDEO_MISSION_PROGRESS,
                THUMBNAIL: EVENT_VIDEO_MISSION_THUMBNAIL,
                RESULT: EVENT_VIDEO_MISSION_RESULT
            },
            createUploader() {
                return new CircleUploader
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBDebugModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBDebugModule", (function() {
            return QBDebugModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBDebugModule = {
            log: function(map) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBDebugModule", "eventLog", map)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBDeviceEventEmitter.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBDeviceEventEmitter", (function() {
            return QBDeviceEventEmitter
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        let QBDeviceEventEmitter = new __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["HippyEventEmitter"]
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBDeviceModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBDeviceModule", (function() {
            return QBDeviceModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBDeviceModule = {
            getDeviceInfo() {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBDeviceModule", "getDeviceInfo")
            },
            getQADID() {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBDeviceModule", "getQADID")
            },
            getQAID() {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBDeviceModule", "getQAID")
            },
            getTAID() {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBDeviceModule", "getTAID")
            },
            getOAID() {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBDeviceModule", "getOAID")
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBDownloadModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBDownloadModule", (function() {
            return QBDownloadModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        var __WEBPACK_IMPORTED_MODULE_1__app_download_DownloadStatusInfo__ = __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/app-download/DownloadStatusInfo.js");
        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise((function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value
                        } catch(error) {
                            reject(error);
                            return
                        }
                        if (info.done) {
                            resolve(value)
                        } else {
                            return Promise.resolve(value).then((function(value) {
                                step("next", value)
                            }), (function(err) {
                                step("throw", err)
                            }))
                        }
                    }
                    return step("next")
                }))
            }
        }
        const DownloadModuleEventEmitter = new __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["HippyEventEmitter"];
        const DOWNLOAD_MODULE = "QBDownloadModule";
        const EVENT_DOWNLOAD_STATUS_CHANGED = "HippyDownloadStatusChanged";
        const _downloadListenerMap = new Map;
        const _downloadStatusCache = new Map;
        const QBDownloadModule = {
            DOWNLOAD_STATUS_NONE: __WEBPACK_IMPORTED_MODULE_1__app_download_DownloadStatusInfo__["default"].DownloadStatusConst.DOWNLOAD_STATUS_NONE,
            DOWNLOAD_STATUS_CREATED: __WEBPACK_IMPORTED_MODULE_1__app_download_DownloadStatusInfo__["default"].DownloadStatusConst.DOWNLOAD_STATUS_CREATED,
            DOWNLOAD_STATUS_STARTED: __WEBPACK_IMPORTED_MODULE_1__app_download_DownloadStatusInfo__["default"].DownloadStatusConst.DOWNLOAD_STATUS_STARTED,
            DOWNLOAD_STATUS_PROGRESS: __WEBPACK_IMPORTED_MODULE_1__app_download_DownloadStatusInfo__["default"].DownloadStatusConst.DOWNLOAD_STATUS_PROGRESS,
            DOWNLOAD_STATUS_COMPLETED: __WEBPACK_IMPORTED_MODULE_1__app_download_DownloadStatusInfo__["default"].DownloadStatusConst.DOWNLOAD_STATUS_COMPLETED,
            DOWNLOAD_STATUS_CANCELED: __WEBPACK_IMPORTED_MODULE_1__app_download_DownloadStatusInfo__["default"].DownloadStatusConst.DOWNLOAD_STATUS_CANCELED,
            DOWNLOAD_STATUS_FAILED: __WEBPACK_IMPORTED_MODULE_1__app_download_DownloadStatusInfo__["default"].DownloadStatusConst.DOWNLOAD_STATUS_FAILED,
            DOWNLOAD_STATUS_FILE_DELETED: __WEBPACK_IMPORTED_MODULE_1__app_download_DownloadStatusInfo__["default"].DownloadStatusConst.DOWNLOAD_STATUS_FILE_DELETED
        };
        const _downloadCtrl = {
            _initDownloadCtrl() {
                if (this.mHasInited === true) {
                    return
                }
                const downloadStatusCount = DownloadModuleEventEmitter.listenerSize(EVENT_DOWNLOAD_STATUS_CHANGED);
                if (downloadStatusCount < 1) {
                    DownloadModuleEventEmitter.addListener(EVENT_DOWNLOAD_STATUS_CHANGED, downloadInfo =>{
                        this._onTaskStatusChanged(downloadInfo)
                    })
                }
                this.mHasInited = true
            },
            _startDownload(downloadArgs) {
                if (downloadArgs === undefined || downloadArgs.url === undefined) {
                    return
                }
                this._initDownloadCtrl();
                const downloadUrl = downloadArgs.url;
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(DOWNLOAD_MODULE, "startDownload", downloadArgs)
            },
            _onTaskStatusChanged(downloadStatus) {
                if (downloadStatus === undefined) {
                    return
                }
                const downloadUrl = downloadStatus.url;
                if (downloadUrl === undefined) {
                    return
                }
                let cachedStatus = _downloadStatusCache.get(downloadUrl);
                if (!cachedStatus) {
                    cachedStatus = new __WEBPACK_IMPORTED_MODULE_1__app_download_DownloadStatusInfo__["default"](downloadUrl)
                }
                cachedStatus.updateDownloadStatus(downloadStatus);
                _downloadStatusCache.set(downloadUrl, cachedStatus);
                const callbackList = _downloadListenerMap.get(downloadUrl);
                if (callbackList !== undefined && Array.isArray(callbackList)) {
                    callbackList.map(oneListener =>{
                        if (oneListener !== undefined && oneListener.onDownloadStatusChanged instanceof Function) {
                            oneListener.onDownloadStatusChanged(cachedStatus)
                        } else if (oneListener !== undefined && oneListener instanceof Function) {
                            oneListener(cachedStatus)
                        }
                    })
                }
            },
            _preDownload(downloadArgs) {
                if (downloadArgs === undefined || downloadArgs.pkgName === undefined) {
                    return
                }
                this._initDownloadCtrl();
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(DOWNLOAD_MODULE, "preDownload", downloadArgs)
            },
            _pauseDownload(downloadArgs) {
                if (downloadArgs === undefined || downloadArgs.url === undefined) {
                    return
                }
                this._initDownloadCtrl();
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(DOWNLOAD_MODULE, "pauseDownload", downloadArgs)
            },
            _installApp(downloadArgs) {
                if (downloadArgs === undefined || downloadArgs.url === undefined) {
                    return
                }
                this._initDownloadCtrl();
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(DOWNLOAD_MODULE, "installApp", downloadArgs)
            },
            _getDownloadStatus(downloadUrl) {
                var _this = this;
                return _asyncToGenerator((function * () {
                    if (downloadUrl === undefined || downloadUrl == null || downloadUrl === "") {
                        return
                    }
                    _this._initDownloadCtrl();
                    let ret = _downloadStatusCache.get(downloadUrl);
                    if (ret && ret.downloadStatus !== __WEBPACK_IMPORTED_MODULE_1__app_download_DownloadStatusInfo__["default"].DownloadStatusConst.DOWNLOAD_STATUS_COMPLETED) {
                        return ret
                    } else {
                        let fromNative = yield Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(DOWNLOAD_MODULE, "getDownloadInfo", downloadUrl);
                        let nativeDownloadStatus = null;
                        if (fromNative && fromNative.url !== undefined) {
                            nativeDownloadStatus = new __WEBPACK_IMPORTED_MODULE_1__app_download_DownloadStatusInfo__["default"](downloadUrl);
                            nativeDownloadStatus.updateDownloadStatus(fromNative)
                        }
                        _downloadStatusCache.set(downloadUrl, nativeDownloadStatus);
                        return nativeDownloadStatus
                    }
                }))()
            },
            _addDownloadStatusListener(downloadUrl, listener) {
                if (downloadUrl === undefined || listener === undefined) {
                    return
                }
                this._initDownloadCtrl();
                let callbackList = [];
                if (_downloadListenerMap.has(downloadUrl)) {
                    callbackList = _downloadListenerMap.get(downloadUrl);
                    if (callbackList === undefined || !Array.isArray(callbackList)) {
                        callbackList = [listener]
                    } else if (callbackList.indexOf(listener) >= 0) {
                        return
                    } else {
                        callbackList.push(listener)
                    }
                } else {
                    callbackList = [listener]
                }
                _downloadListenerMap.set(downloadUrl, callbackList)
            },
            _removeDownloadStatusListener(downloadUrl, listener) {
                if (downloadUrl === undefined || listener === undefined) {
                    return
                }
                this._initDownloadCtrl();
                if (!_downloadListenerMap.has(downloadUrl)) {
                    return
                }
                let callbackList = _downloadListenerMap.get(downloadUrl);
                if (callbackList !== undefined && Array.isArray(callbackList)) {
                    let index = callbackList.indexOf(listener);
                    if (index >= 0) {
                        callbackList.splice(index, 1);
                        _downloadListenerMap.set(downloadUrl, callbackList)
                    }
                }
            }
        };
        QBDownloadModule.startDownload = function(downloadArgs) {
            _downloadCtrl._startDownload(downloadArgs)
        };
        QBDownloadModule.preDownload = function(downloadArgs) {
            _downloadCtrl._preDownload(downloadArgs)
        };
        QBDownloadModule.pauseDownload = function(downloadArgs) {
            _downloadCtrl._pauseDownload(downloadArgs)
        };
        QBDownloadModule.getDownloadInfo = function(downloadUrl) {
            return _downloadCtrl._getDownloadStatus(downloadUrl)
        };
        QBDownloadModule.installApp = function(downloadArgs) {
            _downloadCtrl._installApp(downloadArgs)
        };
        QBDownloadModule.addDownloadStatusListener = function(downloadUrl, listener) {
            if (downloadUrl === undefined || !listener) {
                return
            }
            if (typeof listener == "object" && listener.onDownloadStatusChanged instanceof Function) {
                _downloadCtrl._addDownloadStatusListener(downloadUrl, listener)
            } else if (typeof listener == "function") {
                _downloadCtrl._addDownloadStatusListener(downloadUrl, listener)
            }
        };
        QBDownloadModule.removeDownloadStatusListener = function(downloadUrl, listener) {
            if (downloadUrl === undefined) {
                return
            }
            _downloadCtrl._removeDownloadStatusListener(downloadUrl, listener)
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBFavoritesModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBFavoritesModule", (function() {
            return QBFavoritesModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBFavoritesModule = {
            addFavorites: function(params = {}) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBFavoritesModule", "addFavorites", params)
            },
            deleteFavorites: function(params = {}) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBFavoritesModule", "deleteFavorites", params)
            },
            hasFavored: function(params = {}) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBFavoritesModule", "hasFavored", params)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBFileModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBFileModule", (function() {
            return QBFileModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const EVENT_MEDIA_VIEWER_DELETE = "mediaViewerDelete";
        const MODULE_NAME = "QBFileModule";
        const _eventEmitter = new __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["HippyEventEmitter"];
        const _subscriptions = new Map;
        const QBFileModule = {
            startScan() {
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "startScan")
            },
            openMediaPicker(params) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "openMediaPicker", params)
            },
            openMediaViewer(params) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "openMediaViewer", params)
            },
            addEventListener: function(eventName, handler) {
                const count = _eventEmitter.listenerSize(eventName);
                if (count < 1) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "addListener", eventName)
                }
                const listener = _eventEmitter.addListener(eventName, data =>{
                    handler(data)
                });
                _subscriptions.set(handler, listener);
                return {
                    remove: () =>removeEventListener(eventName, handler)
                }
            },
            removeEventListener: function(eventName, handler) {
                const count = _eventEmitter.listenerSize(eventName);
                if (count <= 1) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "removeListener", eventName)
                }
                const listener = _subscriptions.get(handler);
                if (!listener) {
                    return
                }
                listener.remove();
                _subscriptions.delete(handler)
            },
            addViewDeleteListener(listener) {
                QBFileModule.addEventListener(EVENT_MEDIA_VIEWER_DELETE, listener)
            },
            removeViewDeleteListener(listener) {
                QBFileModule.removeEventListener(EVENT_MEDIA_VIEWER_DELETE, listener)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBHistoryModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBHistoryModule", (function() {
            return QBHistoryModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBHistoryModule = {
            addHistory: function({
                title: title = "",
                url: url = ""
            }) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBHistoryModule", "addHistory", title, url)
            },
            addHistoryEx: function(args) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBHistoryModule", "addHistoryEx", args)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBJsNativeCacheModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBJsNativeCacheModule", (function() {
            return QBJsNativeCacheModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBJsNativeCacheModule = {
            memLruCacheOpen(memName, maxCountSize, expireTime) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBJsNativeCacheModule", "memLruCacheOpen", memName, maxCountSize, expireTime)
            },
            memLruCacheGet(memName, strKey) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBJsNativeCacheModule", "memLruCacheGet", memName, strKey)
            },
            memLruCacheSet(memName, strKey, jsonValue) {
                if (__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["Platform"].OS == "ios") {
                    return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBJsNativeCacheModule", "memLruCacheSetObject", memName, strKey, jsonValue)
                } else {
                    if (typeof jsonValue == "object") {
                        if (Array.isArray(jsonValue)) {
                            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBJsNativeCacheModule", "memLruCacheSetArray", memName, strKey, jsonValue)
                        } else {
                            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBJsNativeCacheModule", "memLruCacheSetMap", memName, strKey, jsonValue)
                        }
                    } else {
                        return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBJsNativeCacheModule", "memLruCacheSetString", memName, strKey, jsonValue)
                    }
                }
            },
            memLruCacheRemoveByKey(memName, strKey) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBJsNativeCacheModule", "memLruCacheRemoveByKey", memName, strKey)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBLocationModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBLocationModule", (function() {
            return QBLocationModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const LOCATIONC_CHANGE_EVENT = "locationChange";
        const LOCATION_MODULE_NAME = "QBLocationModule";
        let QBLocationModule = {
            _subscriptions: new Map,
            _LocationEventEmitter: new __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["HippyEventEmitter"]
        };
        let LocationEventRevoker = class LocationEventRevoker {
            constructor(handler) {
                this.handler = handler
            }
            remove() {
                QBLocationModule.removeEventListener(this.handler)
            }
        };
        QBLocationModule.getLocationInfo = function(canGps = true) {
            if (__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["Platform"].OS === "ios") {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(LOCATION_MODULE_NAME, "getLocationInfo")
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(LOCATION_MODULE_NAME, "getLocationInfo", canGps)
            }
        };
        QBLocationModule.getLocationMode = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(LOCATION_MODULE_NAME, "getLocationMode")
        };
        QBLocationModule.jumpToLocationSetting = function() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(LOCATION_MODULE_NAME, "jumpToLocationSetting")
        };
        QBLocationModule.addEventListener = function(eventName, handler) {
            if (typeof eventName != "string") {
                return
            }
            if (handler) {
                const listener = this._LocationEventEmitter.addListener(LOCATIONC_CHANGE_EVENT, data =>{
                    handler(data)
                });
                this._subscriptions.set(handler, listener);
                return new LocationEventRevoker(handler)
            }
        };
        QBLocationModule.removeEventListener = function(handler) {
            if (handler) {
                const listener = this._subscriptions.get(handler);
                if (!listener) {
                    return
                }
                listener.remove();
                this._subscriptions.delete(handler)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBLogsModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBLogsModule = {};
        function wrap(method) {
            return (...args) =>Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBLogsModule", method, ...args)
        } ["i", "d", "w", "e"].forEach(method =>{
            QBLogsModule[method] = wrap(method)
        });
        __webpack_exports__["default"] = QBLogsModule
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBMessageBubbleModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const MODULE_NAME = "QBMessageBubbleModule";
        const QBMessageBubbleModule = {
            showMessageBubble(dataMap) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "showMessageBubble", dataMap)
            },
            closeMyBubble(bubbleID) {
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "closeMyBubble", bubbleID)
            }
        };
        __webpack_exports__["default"] = QBMessageBubbleModule
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBNativeProxyModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBNativeProxyModule", (function() {
            return QBNativeProxyModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBNativeProxyModule = {
            callNativeMethod: function(module, method, args, callback) {
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBNativeProxyModule", "callNativeMethod", module, method, args, callback)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBNowLiveModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBNowLiveModule = {
            preStart() {
                if (true) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("MttRNNowLiveModule", "preStart", "feeds")
                }
            }
        };
        __webpack_exports__["default"] = QBNowLiveModule
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBOfflineResourceModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBOfflineResourceModule", (function() {
            return QBOfflineResourceModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBOfflineResourceModule = {};
        QBOfflineResourceModule.getResource = function(params) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBOfflineResourceModule", "getResource", params)
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBPackageModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBPackageModule", (function() {
            return QBPackageModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const NATIVE_PKG_MODULE_NAME = "QBPackageModule";
        const _packageModuleEventEmitter = new __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["HippyEventListener"]("HippyPkgStatusChanged");
        const _packageListenerMap = new Map;
        const _packageStatusCache = new Map;
        const QBPackageModule = {
            PACKAGE_STATUS_INSTALLED: 1,
            PACKAGE_STATUS_UNINSTALL: 2
        };
        const _packageCtrl = {
            _initPackageInfoIfNeeded() {
                if (this.mHasInited) {
                    return
                }
                const callbackCount = _packageModuleEventEmitter.getSize();
                if (callbackCount < 1) {
                    _packageModuleEventEmitter.addCallback(packageInfo =>{
                        this._onPackageStatusChanged(packageInfo)
                    })
                }
                if (_packageStatusCache.size == 0) {
                    let resultPromise = Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(NATIVE_PKG_MODULE_NAME, "getInstalledPkgInfo");
                    resultPromise.then(installedPkgs =>{
                        this._onGetInstalledPkgs(installedPkgs)
                    })
                }
                this.mHasInited = true
            },
            _onGetInstalledPkgs(installedPkgs) {
                if (installedPkgs == undefined || installedPkgs == null || installedPkgs.length <= 0) {
                    return
                }
                for (let onePkg of installedPkgs) {
                    if (!onePkg || !onePkg.pkgName) {
                        continue
                    }
                    const pkgCacheInfo = {
                        pkgName: onePkg.pkgName,
                        pkgStatus: QBPackageModule.PACKAGE_STATUS_INSTALLED,
                        versionName: onePkg.versionName,
                        versionCode: onePkg.versionCode
                    };
                    _packageStatusCache.set(onePkg.pkgName, pkgCacheInfo)
                }
            },
            _onPackageStatusChanged(packageInfo) {
                if (packageInfo == undefined) {
                    return
                }
                if (packageInfo.pkgStatus == undefined || packageInfo.pkgName == undefined) {
                    return
                }
                if (packageInfo.pkgStatus === QBPackageModule.PACKAGE_STATUS_INSTALLED) {
                    _packageStatusCache.set(packageInfo.pkgName, packageInfo)
                } else if (packageInfo.pkgStatus === QBPackageModule.PACKAGE_STATUS_UNINSTALL) {
                    if (_packageStatusCache.has(packageInfo.pkgName)) {
                        _packageStatusCache.delete(packageInfo.pkgName)
                    }
                }
                const callbackList = _packageListenerMap.get(packageInfo.pkgName);
                if (callbackList != undefined && Array.isArray(callbackList)) {
                    callbackList.map(oneListener =>{
                        if (oneListener != undefined && oneListener.onPackageStatusChanged instanceof Function) {
                            oneListener.onPackageStatusChanged(packageInfo)
                        } else if (oneListener != undefined && oneListener instanceof Function) {
                            oneListener(packageInfo)
                        }
                    })
                }
            },
            _runApp(pkgName) {
                this._initPackageInfoIfNeeded();
                if (pkgName != undefined && typeof pkgName == "string") {
                    Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(NATIVE_PKG_MODULE_NAME, "runApp", pkgName)
                }
            },
            _openUniversalLink(universalLink) {
                let finalPromise = {};
                if (typeof universalLink === "string") {
                    finalPromise = Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(NATIVE_PKG_MODULE_NAME, "openUniversalLink", universalLink);
                    return finalPromise
                }
                return Promise.resolve(finalPromise)
            },
            _addPkgStatusListener(pkgName, listener) {
                if (pkgName == undefined || listener == undefined || typeof listener !== "object" && typeof listener !== "function") {
                    return
                }
                if (typeof listener == "object" && !(listener.onPackageStatusChanged instanceof Function)) {
                    return
                }
                this._initPackageInfoIfNeeded();
                let callbackList = [];
                if (_packageListenerMap.has(pkgName)) {
                    callbackList = _packageListenerMap.get(pkgName);
                    if (callbackList == undefined || !Array.isArray(callbackList)) {
                        callbackList = [listener]
                    } else if (callbackList.indexOf(listener) >= 0) {
                        return
                    } else {
                        callbackList.push(listener)
                    }
                } else {
                    callbackList = [listener]
                }
                _packageListenerMap.set(pkgName, callbackList)
            },
            _removePkgStatusListener(pkgName, listener) {
                if (pkgName == undefined || listener == undefined) {
                    return
                }
                if (!_packageListenerMap.has(pkgName)) {
                    return
                }
                let callbackList = _packageListenerMap.get(pkgName);
                if (callbackList != undefined && Array.isArray(callbackList)) {
                    let index = callbackList.indexOf(listener);
                    if (index >= 0) {
                        callbackList.splice(index, 1);
                        _packageListenerMap.set(pkgName, callbackList)
                    }
                }
            }
        };
        QBPackageModule.getAppPkgInfo = function(pkgName) {
            if (typeof pkgName !== "string") {
                return Promise.resolve({})
            }
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(NATIVE_PKG_MODULE_NAME, "getAppPkgInfo", pkgName)
        };
        QBPackageModule.openUniversalLink = function(universalLink) {
            let ret = _packageCtrl._openUniversalLink(universalLink);
            return ret
        };
        QBPackageModule.runApp = function(pkgName) {
            _packageCtrl._runApp(pkgName)
        };
        QBPackageModule.addPkgStatusListener = function(pkgName, listener) {
            _packageCtrl._addPkgStatusListener(pkgName, listener)
        };
        QBPackageModule.removePkgStatusListener = function(pkgName, listener) {
            _packageCtrl._removePkgStatusListener(pkgName, listener)
        };
        QBPackageModule.checkMarketAppIfInstall = function(packageArgs) {
            if (!packageArgs) {
                return Promise.resolve()
            }
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(NATIVE_PKG_MODULE_NAME, "checkMarketAppIfInstall", packageArgs)
        };
        QBPackageModule.runMarketAppWithSchema = function(packageArgs) {
            if (!packageArgs) {
                return Promise.resolve()
            }
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(NATIVE_PKG_MODULE_NAME, "runMarketAppWithSchema", packageArgs)
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBPhoneCallModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBPhoneCallModule", (function() {
            return QBPhoneCallModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBPhoneCallModule = {
            call(number = "") {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBPhoneCallModule", "call", number)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBPictureModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBPictureModule", (function() {
            return QBPictureModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBPictureModule = {
            openPicture: function(params = {}) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBPictureModule", "openPicture", params)
            },
            savePicture: function(params = {}) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBPictureModule", "savePicture", params)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBQQMiniGameModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBQQMiniGameModule", (function() {
            return QBQQMiniGameModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const MODULE_NAME = "QBQQMiniGameModule";
        const QBQQMiniGameModule = {
            PARAM_APP_ID: "appId",
            PARAM_REFER: "refer",
            PARAM_LINK: "link",
            PARAM_LINK_TYPE: "linkType",
            isSupport() {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "isSupport")
            },
            openQQMiniGameByAppId(dataMap) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "openQQMiniGameByAppId", dataMap)
            },
            openQQMiniGameByLink(dataMap) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "openQQMiniGameByLink", dataMap)
            },
            preLoad(dataMap) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "preLoad", dataMap)
            },
            preInstall(dataMap) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "preInstall", dataMap)
            }
        };
        __webpack_exports__["default"] = QBQQMiniGameModule
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBRechargeModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBRechargeModule", (function() {
            return QBRechargeModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const MODULE_NAME = "QBRechargeModule";
        const EVENT_RECHARGE_RESULT = "RechargeQmiResult";
        var createObserver = function() {
            return new __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["HippyEventEmitter"]
        };
        const RechargeEventEmitter = createObserver();
        const _rechargeCtrl = {
            _rechargeQmi(rechargeArgs, onLaunchCallback, onResultCallback) {
                RechargeEventEmitter.addListener(EVENT_RECHARGE_RESULT, resultData =>{
                    if (resultData == undefined) {
                        return
                    }
                    if (onResultCallback != undefined) {
                        onResultCallback(resultData)
                    }
                    RechargeEventEmitter.removeAllListeners(EVENT_RECHARGE_RESULT)
                });
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "rechargeQmi", rechargeArgs).then((function(launchResult) {
                    console.log("RCTRechargeModule rechargeQmi isLaunched ", launchResult.isLaunched);
                    onLaunchCallback(launchResult)
                }))
            }
        };
        const QBRechargeModule = {
            rechargeQmi(rechargeArgs, onLaunchCallback, onResultCallback) {
                _rechargeCtrl._rechargeQmi(rechargeArgs, onLaunchCallback, onResultCallback)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBShareModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBShareModule", (function() {
            return QBShareModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBShareModule = {};
        QBShareModule.share = function(params) {
            if (typeof params !== "object") {
                return
            }
            return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBShareModule", "share", params)
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBSharedSettingModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBSharedSettingModule", (function() {
            return QBSharedSettingModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBSharedSettingModule = {
            writeSettings: function(object, saveToDisk = false) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBSharedSettingModule", "writeSettings", object, saveToDisk)
            },
            readSettings: function(keys) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBSharedSettingModule", "readSettings", keys)
            },
            removeSettings: function(keys) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBSharedSettingModule", "removeSettings", keys)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBSimpleAudioPlayer.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBSimpleAudioPlayer", (function() {
            return QBSimpleAudioPlayer
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        let QBSimpleAudioPlayerClass = class QBSimpleAudioPlayerClass extends __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["HippyEventEmitter"] {
            constructor(sharedListeners) {
                super(sharedListeners);
                this._externalListener = null;
                super.addListener("QBSimpleAudioPlayer_onStart",
                function(info) {
                    if (this._externalListener && this._externalListener.onStart) {
                        this._externalListener.onStart(info)
                    }
                }.bind(this));
                super.addListener("QBSimpleAudioPlayer_onStop",
                function() {
                    console.log("QBSimpleAudioPlayer_onStop " + " @" + new Date);
                    if (this._externalListener && this._externalListener.onStop) {
                        this._externalListener.onStop()
                    }
                }.bind(this))
            }
            start(filePath) {
                this.callNative("start", filePath)
            }
            stop() {
                this.callNative("stop")
            }
            setListener(listener) {
                console.log("QBSimpleAudioPlayer.setListener: " + listener);
                this._externalListener = listener
            }
            callNative(func, par) {
                console.log("QBSimpleAudioPlayer.callNative: " + func);
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBSimpleAudioPlayer", func, par)
            }
        };
        const QBSimpleAudioPlayer = new QBSimpleAudioPlayerClass
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBSimpleAudioRecorder.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBSimpleAudioRecorder", (function() {
            return QBSimpleAudioRecorder
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        let QBSimpleAudioRecorderClass = class QBSimpleAudioRecorderClass extends __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["HippyEventEmitter"] {
            constructor(sharedListeners) {
                super(sharedListeners);
                this._externalListener = null;
                super.addListener("QBSimpleAudioRecorder_onRecordStart",
                function() {
                    if (this._externalListener && this._externalListener.onRecordStart) {
                        this._externalListener.onRecordStart()
                    }
                }.bind(this));
                super.addListener("QBSimpleAudioRecorder_onRecordStop",
                function(info) {
                    if (this._externalListener && this._externalListener.onRecordStop) {
                        this._externalListener.onRecordStop(info)
                    }
                }.bind(this));
                super.addListener("QBSimpleAudioRecorder_onPlayStart",
                function(info) {
                    if (this._externalListener && this._externalListener.onPlayStart) {
                        this._externalListener.onPlayStart(info)
                    }
                }.bind(this));
                super.addListener("QBSimpleAudioRecorder_onPlayStop",
                function() {
                    if (this._externalListener && this._externalListener.onPlayStop) {
                        this._externalListener.onPlayStop()
                    }
                }.bind(this))
            }
            startRecord() {
                this.callNative("startRecord")
            }
            startPlay() {
                this.callNative("startPlay")
            }
            stop() {
                this.callNative("stop")
            }
            setListener(listener) {
                this._externalListener = listener
            }
            callNative(func) {
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBSimpleAudioRecorder", func)
            }
        };
        const QBSimpleAudioRecorder = new QBSimpleAudioRecorderClass
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBStatisticModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBStatisticModule", (function() {
            return QBStatisticModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const MODULE_NAME = "QBStatisticModule";
        const QBStatisticModule = {
            statBeaconEvent: function(statBeaconMap) {
                if (typeof statBeaconMap !== "object" || typeof statBeaconMap["eventName"] != "string") {
                    return
                }
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "statBeaconEvent", statBeaconMap)
            },
            statBeaconCommonEvent: function(eventName, eventParams, eventUrl, sampled) {
                let reportUrl = eventUrl;
                if (typeof reportUrl != "string") {
                    reportUrl = ""
                }
                let sampleEvent = sampled;
                if (typeof sampleEvent != "boolean") {
                    sampleEvent = false
                }
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "statBeaconCommonEvent", eventName, eventParams, reportUrl, sampleEvent)
            },
            userBehaviorStatistics: function(action, value, isAccumulate, rnExtInfo) {
                if (typeof action != "string" || typeof value != "number") {
                    return
                }
                if (typeof isAccumulate != "boolean") {
                    isAccumulate = true
                }
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "userBehaviorStatistics", action, value, isAccumulate, rnExtInfo)
            },
            reportCustomBusiness: function(moduleName, log) {
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "reportCustomBusiness", moduleName, log)
            },
            MMAOnClick: function(adUrl) {
                if (typeof adUrl !== "string" || adUrl.length === 0) {
                    return
                }
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "MMAOnClick", adUrl)
            },
            MMAOnExpose: function(adUrl, viewTag) {
                if (typeof adUrl !== "string" || adUrl.length === 0 || !Number.isInteger(viewTag)) {
                    return
                }
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "MMAOnExpose", adUrl, viewTag)
            },
            MMAOnVideoExpose(adUrl, viewTag, videoPlayType) {
                if (!adUrl || typeof adUrl !== "string" || !Number.isInteger(viewTag)) {
                    return
                }
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "MMAOnVideoExpose", adUrl, viewTag, videoPlayType)
            },
            MMASetLogState: function(isPrintOut) {
                if (typeof isPrintOut !== "boolean") {
                    return
                }
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, "MMASetLogState", isPrintOut)
            },
            MMAIsReady: function() {
                let retPromise = true;
                if (__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["Platform"].OS === "android") {
                    retPromise = Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(MODULE_NAME, "MMAIsReady")
                }
                return Promise.resolve(retPromise)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBStatusBarModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBStatusBarModule", (function() {
            return QBStatusBarModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBStatusBarModule = {
            HEIGHT: __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["Dimensions"].get("screen").statusBarHeight,
            setStyle: function(style) {
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBStatusBarModule", "setStyle", style)
            },
            StatusBarStyleIOS_Default: 0,
            StatusBarStyleIOS_DARK_CONTENT: 0,
            StatusBarStyleIOS_LIGHT_CONTENT: 1,
            StatusBarStyleIOS_BLACK_TRANSLUCENT: 1,
            StatusBarStyleIOS_BLACK_OPAQUE: 2
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBTextUtilsModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBTextUtilsModule", (function() {
            return QBTextUtilsModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBTextUtilsModule = {
            calculateTextHeights: function(options) {
                if (!Array.isArray(options)) {
                    throw new Error("options must be an array");
                    return null
                }
                let moduleName = "TextUtilsModule";
                if (true) {
                    moduleName = "QBTextUtilsModule"
                } else if (Platform.OS === "android") {
                    moduleName = "QBTextUtilsModule"
                }
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])(moduleName, "calculateTextHeights", options)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBToastModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBToastModule", (function() {
            return QBToastModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBToastModule = {
            show: function(message = "", linkMessage = "", duration = 2e3, backupMessage = "") {
                if (__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["Platform"].OS === "ios") {
                    return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBToastModule", "show", message, linkMessage, duration)
                } else {
                    return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBToastModule", "show", message, linkMessage, duration, backupMessage)
                }
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBUserSettingModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBUserSettingModule", (function() {
            return QBUserSettingModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBUserSettingModule = {
            getBoolean: function(key, defaultValue = false) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBUserSettingModule", "getBoolean", key, defaultValue)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBWeAppModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBWeAppModule", (function() {
            return QBWeAppModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBWeAppModule = {
            preload: function(jsToBundle) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBWeAppModule", "preload", jsToBundle)
            },
            preloadWxMiniProgram(jsToBundle) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBWeAppModule", "preloadWxMiniProgram", jsToBundle)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBWelfareModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBWelfareModule", (function() {
            return QBWelfareModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const MODULE_NAME = "QBWelfareModule";
        var callNativeObserver = function(func, par) {
            Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])(MODULE_NAME, func, par)
        };
        let QBWelfareModuleClass = class QBWelfareModuleClass extends __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["HippyEventEmitter"] {
            addListener(eventType, listener, context) {
                const count = super.listenerSize(eventType);
                if (count < 1) {
                    callNativeObserver("addListener", eventType)
                }
                return super.addListener(eventType, listener, context)
            }
            removeListener(eventType, listener) {
                const count = super.listenerSize(eventType);
                if (count <= 1) {
                    callNativeObserver("removeListener", eventType)
                }
                listener.remove()
            }
        };
        const QBWelfareModule = new QBWelfareModuleClass
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBWifiModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBWifiModule", (function() {
            return QBWifiModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const WIFI_CONN_STATE_CHANGE = "wifiConnStateChange";
        const WIFI_LIST_CHANGE = "wifiListChange";
        const _subscriptions = new Map;
        const EventEmitter = new __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["HippyEventEmitter"];
        const QBWifiModule = {
            connectAp: function(ssid = "") {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBWifiModule", "connectAp", ssid)
            },
            getConnectedAp: function() {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBWifiModule", "getConnectedAp")
            },
            getWifiList: function() {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBWifiModule", "getWifiList")
            },
            getWifiHelperEnable: function() {
                return Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBWifiModule", "getWifiHelperEnable")
            },
            scanNGetWifi: function(forceScan = false) {
                Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBWifiModule", "scanNGetWifi", forceScan)
            },
            addEventListener: function(eventName, handler) {
                const count = EventEmitter.listenerSize(eventName);
                if (count < 1) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBWifiModule", "addListener", eventName)
                }
                const listener = EventEmitter.addListener(eventName, data =>{
                    handler(data)
                });
                _subscriptions.set(handler, listener);
                return {
                    remove: () =>QBWifiModule.removeEventListener(eventName, handler)
                }
            },
            removeEventListener: function(eventName, handler) {
                const count = EventEmitter.listenerSize(eventName);
                if (count <= 1) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBWifiModule", "removeListener", eventName)
                }
                const listener = _subscriptions.get(handler);
                if (!listener) {
                    return
                }
                listener.remove();
                _subscriptions.delete(handler)
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBWindowModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBWindowModule", (function() {
            return QBWindowModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        const QBWindowModule = {
            URL_FROM_SPORTS_PORTAL: 115,
            URL_FROM_USER_MESSAGE_CENTER_NOTIFICATION: 127,
            URL_FROM_USER_MESSAGE_CENTER: 126,
            URL_FROM_TIPS_MYVIDEO_GUIDE: 125,
            URL_FROM_TBS_TIPS: 124,
            URL_FROM_FLOAT_WINDOW_SEARCH: 123,
            URL_FROM_WIDGET_HOTWORD: 122,
            URL_FROM_WIDGET_SEARCH: 121,
            URL_FROM_WIDGET: 120,
            URL_FROM_QQ_CALL_PAGE_BOTTOM_BTN: 111,
            URL_FROM_START_NAVI_END: 110,
            URL_FROM_SEARCH_BACK_FORWARD: 97,
            URL_FROM_VERTICAL_SEARCH_ENTRANCE_NEWS: 91,
            URL_FROM_VERTICAL_SEARCH_ENTRANCE_NORVEL_OR_APP: 92,
            URL_FROM_SEARCH_START_PAGE_AND_SUGGEST: 93,
            URL_FROM_VERTICAL_SEARCH_PAGE_SEARCH_BUTTON: 94,
            URL_FROM_VERTICAL_SEARCH_SUGGEST_WORD: 95,
            URL_FROM_SEARCH_FINISH_CONDUCT: 96,
            URL_FROM_START_NAVI_START: 90,
            URL_FROM_TMS_SEARCH: 80,
            URL_FROM_HOME_FEEDS_END: 79,
            URL_FROM_CIRCLE: 61,
            URL_FROM_HOME_FEEDS_START: 60,
            URL_FROM_HOME_PAGE_GUIDE: 51,
            URL_FROM_WEB_NAVIGATION: 54,
            URL_FROM_FIXED_FASTLINK: 53,
            URL_FROM_HOME_ACCOUNT_POINTS: 52,
            URL_FROM_HOME_PAGE_WEATHER: 51,
            URL_FROM_WEB_ADDRESS_BAR_SEARCH: 50,
            URL_FROM_SEARCH_PAGE_ADDRESS_BAR: 49,
            URL_FROM_START_SEARCH_HOTWORD: 48,
            URL_FROM_USER_DESKTOP_BOOKMARK: 47,
            URL_FROM_SOFTWARE_PUSH: 46,
            URL_FROM_FREQUENT_BOOKMARK: 45,
            URL_FROM_FILE_READER: 44,
            URL_FROM_INTERCEPT_DIALOG: 43,
            URL_FROM_OTHER_SEARCH: 42,
            URL_FROM_RESIDENT_NOTIFICATION: 41,
            URL_FROM_READ: 40,
            URL_FROM_NOVEL_PAGE: 39,
            URL_FROM_WE_CHAT: 38,
            URL_FROM_LIGHT_APP: 37,
            URL_FROM_INNER_PUSH: 36,
            URL_FROM_START_SEARCH_DIRECT: 35,
            URL_FROM_COLLECT: 34,
            URL_FROM_PLUGIN_REFRESH: 33,
            URL_FROM_PUSH_NOTIFY: 32,
            URL_FROM_PLUGIN: 31,
            URL_FROM_WIFI_WEBLOGIN: 30,
            URL_FROM_LOCAL_FILE: 29,
            URL_FROM_PAI_LI_DE: 28,
            URL_FROM_SHARE_PAGE_NOTIFY: 27,
            URL_FROM_SPREAD_SEARCH: 26,
            URL_FROM_RECOVERY_UPDATE: 25,
            URL_FROM_STARTPAGE_SEARCH: 24,
            URL_FROM_DESKTOP_BOOKMARK: 23,
            URL_FROM_PUSH_AD: 22,
            URL_FROM_SEARCH_DIRECT: 21,
            URL_FROM_FENLEI_SEARCH: 20,
            URL_FROM_RECOVERY: 19,
            URL_FROM_INTER_WND: 18,
            URL_FROM_EXTERNAL_SEARCH: 17,
            URL_FROM_VOICE: 16,
            URL_FROM_APPCENTER: 15,
            URL_FROM_HOTWORD: 14,
            URL_FROM_SETTING: 13,
            URL_FROM_SPEC_EXTERNAL: 12,
            URL_FROM_INNER_QB: 11,
            URL_FROM_QB: 10,
            URL_FROM_EXTERNAL: 9,
            URL_FROM_FEEDS_ADDRESSBAR_SEARCH: 8,
            URL_FROM_OFTENUSE: 7,
            URL_FROM_FASTLINK: 6,
            URL_FROM_STARTLINK: 5,
            URL_FROM_ADDRESSINPUT: 4,
            URL_FROM_BOOKMARK: 3,
            URL_FROM_HISTORY: 2,
            URL_FROM_MENU: 1,
            URL_FROM_WEBVIEW: 0,
            URL_FROM_NONE: -1,
            POST_URL_NEW_BG: 36,
            POST_URL_NEW: 35,
            LOAD_URL_IN_CURRENT_WIN: 33,
            LOAD_URL_NEW_BG_DELAY: 59,
            LOAD_URL_NEW_BG: 15,
            POST_URL: 3,
            LOAD_URL_APPID: 12,
            LOAD_URL_VALID_WND: 60,
            LOAD_URL_NEW: 2,
            LOAD_URL: 1
        };
        QBWindowModule.loadUrl = function(url, props) {
            Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBWindowModule", "loadUrl", url, props)
        };
        QBWindowModule.showPic = function(url) {
            Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNative"])("QBWindowModule", "showPic", url)
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/QBWupModule.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "QBWupModule", (function() {
            return QBWupModule
        }));
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__ = __webpack_require__("./node_modules/@tencent/hippy-react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__);
        var __WEBPACK_IMPORTED_MODULE_1__wup_js_libjce__ = __webpack_require__("./node_modules/@tencent/hippy-react-qb/lib/modules/wup-js/libjce.js");
        function _asyncToGenerator(fn) {
            return function() {
                var gen = fn.apply(this, arguments);
                return new Promise((function(resolve, reject) {
                    function step(key, arg) {
                        try {
                            var info = gen[key](arg);
                            var value = info.value
                        } catch(error) {
                            reject(error);
                            return
                        }
                        if (info.done) {
                            resolve(value)
                        } else {
                            return Promise.resolve(value).then((function(value) {
                                step("next", value)
                            }), (function(err) {
                                step("throw", err)
                            }))
                        }
                    }
                    return step("next")
                }))
            }
        }
        var base64 = __webpack_require__("./node_modules/base64-js/index.js");
        const QBWupModule = {};
        QBWupModule.send = (() =>{
            var _ref = _asyncToGenerator((function * (params, value, def) {
                let os = new __WEBPACK_IMPORTED_MODULE_1__wup_js_libjce__["Taf"].JceOutputStream;
                os.writeStruct(0, value);
                let view = new Uint8Array(os.getBuffer());
                let data = base64.fromByteArray(view);
                let requestData = Object.assign({},
                params, {
                    base64data: data
                });
                var result = yield Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBWupModule", "send", requestData);
                var outRes = "";
                if (result.code == 0 && params.rspName) {
                    let buffer = base64.toByteArray(result.body);
                    let input = new __WEBPACK_IMPORTED_MODULE_1__wup_js_libjce__["Taf"].JceInputStream(buffer.buffer);
                    outRes = input.readStruct(0, true, def)
                }
                return Object.assign({},
                {
                    code: result.code,
                    jcedata: outRes
                })
            }));
            return function(_x, _x2, _x3) {
                return _ref.apply(this, arguments)
            }
        })();
        QBWupModule.doTokenFeature = (() =>{
            var _ref2 = _asyncToGenerator((function * (params) {
                var result = yield Object(__WEBPACK_IMPORTED_MODULE_0__tencent_hippy_react__["callNativeWithPromise"])("QBWupModule", "doTokenFeature", params);
                return result
            }));
            return function(_x4) {
                return _ref2.apply(this, arguments)
            }
        })()
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/app-download/DownloadStatusInfo.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "default", (function() {
            return DownloadStatusInfo
        }));
        let DownloadStatusInfo = class DownloadStatusInfo {
            static get DownloadStatusConst() {
                return {
                    DOWNLOAD_STATUS_NONE: 1,
                    DOWNLOAD_STATUS_CREATED: 2,
                    DOWNLOAD_STATUS_STARTED: 3,
                    DOWNLOAD_STATUS_PROGRESS: 4,
                    DOWNLOAD_STATUS_COMPLETED: 5,
                    DOWNLOAD_STATUS_CANCELED: 6,
                    DOWNLOAD_STATUS_FAILED: 7,
                    DOWNLOAD_STATUS_FILE_DELETED: 8
                }
            }
            constructor(downloadUrl) {
                this.url = downloadUrl;
                this.pkgName = "";
                this.downloadStatus = DownloadStatusInfo.DownloadStatusConst.DOWNLOAD_STATUS_NONE;
                this.downloadedSize = 0;
                this.totalSize = 0
            }
            updateDownloadStatus(params) {
                this.downloadedSize = params.downloadedSize;
                this.totalSize = params.totalSize;
                this.pkgName = params.pkgName;
                this.setTaskStatus(params.downloadStatus)
            }
            setTaskStatus(taskStatusStr) {
                if (taskStatusStr == undefined || taskStatusStr == null || taskStatusStr == "") {
                    this.downloadStatus = DownloadStatusInfo.DownloadStatusConst.DOWNLOAD_STATUS_NONE
                } else if (taskStatusStr.indexOf("DOWNLOAD_STATUS_NONE") >= 0) {
                    this.downloadStatus = DownloadStatusInfo.DownloadStatusConst.DOWNLOAD_STATUS_NONE
                } else if (taskStatusStr.indexOf("DOWNLOAD_STATUS_CREATED") >= 0) {
                    this.downloadStatus = DownloadStatusInfo.DownloadStatusConst.DOWNLOAD_STATUS_CREATED
                } else if (taskStatusStr.indexOf("DOWNLOAD_STATUS_STARTED") >= 0) {
                    this.downloadStatus = DownloadStatusInfo.DownloadStatusConst.DOWNLOAD_STATUS_STARTED
                } else if (taskStatusStr.indexOf("DOWNLOAD_STATUS_PROGRESS") >= 0) {
                    this.downloadStatus = DownloadStatusInfo.DownloadStatusConst.DOWNLOAD_STATUS_PROGRESS
                } else if (taskStatusStr.indexOf("DOWNLOAD_STATUS_COMPLETED") >= 0) {
                    this.downloadStatus = DownloadStatusInfo.DownloadStatusConst.DOWNLOAD_STATUS_COMPLETED
                } else if (taskStatusStr.indexOf("DOWNLOAD_STATUS_CANCELED") >= 0) {
                    this.downloadStatus = DownloadStatusInfo.DownloadStatusConst.DOWNLOAD_STATUS_CANCELED
                } else if (taskStatusStr.indexOf("DOWNLOAD_STATUS_FAILED") >= 0) {
                    this.downloadStatus = DownloadStatusInfo.DownloadStatusConst.DOWNLOAD_STATUS_FAILED
                } else if (taskStatusStr.indexOf("DOWNLOAD_STATUS_FILE_DELETED") >= 0) {
                    this.downloadStatus = DownloadStatusInfo.DownloadStatusConst.DOWNLOAD_STATUS_FILE_DELETED
                }
            }
            getProgress() {
                if (this.totalSize == 0) {
                    return 0
                }
                var progressfloat = this.downloadedSize / this.totalSize * 100;
                var progress = parseInt(progressfloat);
                return progress
            }
        }
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/audio-download/AudioDownloadStatusInfo.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "default", (function() {
            return AudioDownloadStatusInfo
        }));
        var _class, _temp;
        let AudioDownloadStatusInfo = (_temp = _class = class AudioDownloadStatusInfo {
            constructor() {
                this.sAlbumId = "";
                this.sTrackId = "";
                this.sDownloadUrl = "";
                this.downloadStatus = AudioDownloadStatusInfo.DownloadStatusConst.DOWNLOAD_STATUS_NONE;
                this.iDownloadSize = 0;
                this.iDownloadSpeed = 0;
                this.iSize = 0;
                this.iDownloadTime = 0;
                this.categoryType = 0
            }
            updateDownloadStatus(params) {
                this.iDownloadSize = parseInt(params.iDownloadSize);
                this.iSize = parseInt(params.iSize);
                this.sAlbumId = params.sAlbumId;
                this.sTrackId = params.sTrackId;
                this.sDownloadUrl = params.sDownloadUrl;
                this.downloadStatus = parseInt(params.downloadStatus);
                this.iDownloadSpeed = parseInt(params.iDownloadSpeed);
                this.iDownloadTime = parseInt(params.iDownloadTime);
                this.categoryType = parseInt(params.categoryType)
            }
            getProgress() {
                if (this.iSize == 0) {
                    return 0
                }
                var progressfloat = this.iDownloadSize / this.iSize * 100;
                var progress = parseInt(progressfloat);
                return progress
            }
        },
        _class.DownloadStatusConst = {
            DOWNLOAD_STATUS_NONE: 0,
            DOWNLOAD_STATUS_DOWNLOADING: 1,
            DOWNLOAD_STATUS_PAUSE: 2,
            DOWNLOAD_STATUS_COMPLETED: 3,
            DOWNLOAD_STATUS_ERROR: 4
        },
        _temp)
    },
    "./node_modules/@tencent/hippy-react-qb/lib/modules/wup-js/libjce.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "Taf", (function() {
            return Taf
        }));
        var Big = __webpack_require__("./node_modules/big.js/big.js");
        var Taf = Taf || {};
        Taf.DataHelp = {
            EN_INT8: 0,
            EN_INT16: 1,
            EN_INT32: 2,
            EN_INT64: 3,
            EN_FLOAT: 4,
            EN_DOUBLE: 5,
            EN_STRING1: 6,
            EN_STRING4: 7,
            EN_MAP: 8,
            EN_LIST: 9,
            EN_STRUCTBEGIN: 10,
            EN_STRUCTEND: 11,
            EN_ZERO: 12,
            EN_SIMPLELIST: 13
        };
        Taf.INT16 = function() {
            this._clone = function() {
                return 0
            };
            this._write = function(os, tag, val) {
                return os.writeInt16(tag, val)
            };
            this._read = function(is, tag, def) {
                return is.readInt16(tag, true, def)
            }
        };
        Taf.INT32 = function() {
            this._clone = function() {
                return 0
            };
            this._write = function(os, tag, val) {
                return os.writeInt32(tag, val)
            };
            this._read = function(is, tag, def) {
                return is.readInt32(tag, true, def)
            }
        };
        Taf.INT64 = function() {
            this._clone = function() {
                return 0
            };
            this._write = function(os, tag, val) {
                return os.writeInt64(tag, val)
            };
            this._read = function(is, tag, def) {
                return is.readInt64(tag, true, def)
            }
        };
        Taf.UINT8 = function() {
            this._clone = function() {
                return 0
            };
            this._write = function(os, tag, val) {
                return os.writeInt16(tag, val)
            };
            this._read = function(is, tag, def) {
                return is.readInt16(tag, true, def)
            }
        };
        Taf.UInt16 = function() {
            this._clone = function() {
                return 0
            };
            this._write = function(os, tag, val) {
                return os.writeInt32(tag, val)
            };
            this._read = function(is, tag, def) {
                return is.readInt32(tag, true, def)
            }
        };
        Taf.UInt32 = function() {
            this._clone = function() {
                return 0
            };
            this._write = function(os, tag, val) {
                return os.writeInt64(tag, val)
            };
            this._read = function(is, tag, def) {
                return is.readInt64(tag, true, def)
            }
        };
        Taf.DOUBLE = function() {
            this._clone = function() {
                return 0
            };
            this._write = function(os, tag, val) {
                return os.writeDouble(tag, val)
            };
            this._read = function(is, tag, def) {
                return is.readDouble(tag, true, def)
            }
        };
        Taf.STRING = function() {
            this._clone = function() {
                return 0
            };
            this._write = function(os, tag, val) {
                return os.writeString(tag, val)
            };
            this._read = function(is, tag, def) {
                return is.readString(tag, true, def)
            }
        };
        Taf.BOOLEAN = function() {
            this._clone = function() {
                return false
            };
            this._write = function(os, tag, val) {
                return os.writeBoolean(tag, val)
            };
            this._read = function(is, tag, def) {
                return is.readBoolean(tag, true, def)
            }
        };
        Taf.ENUM = function() {
            this._clone = function() {
                return 0
            };
            this._write = function(os, tag, val) {
                return os.writeInt32(tag, val)
            };
            this._read = function(is, tag, def) {
                return is.readInt32(tag, true, def)
            }
        };
        Taf.Vector = function(proto) {
            this.proto = proto;
            this.val = new Array
        };
        Taf.Vector.prototype._clone = function() {
            return new Taf.Vector(this.proto)
        };
        Taf.Vector.prototype._write = function(os, tag, val) {
            return os.writeVector(tag, val)
        };
        Taf.Vector.prototype._read = function(is, tag, def) {
            return is.readVector(tag, true, def)
        };
        Taf.Map = function(kproto, vproto) {
            this.kproto = kproto;
            this.vproto = vproto;
            this.val = new Object
        };
        Taf.Map.prototype._clone = function() {
            return new Taf.Map(this.kproto, this.vproto)
        };
        Taf.Map.prototype._write = function(os, tag, val) {
            return os.writeMap(tag, val)
        };
        Taf.Map.prototype._read = function(is, tag, def) {
            return is.readMap(tag, true, def)
        };
        Taf.Map.prototype.put = function(key, value) {
            this.val[key] = value
        };
        Taf.Map.prototype.get = function(key) {
            return this.val[key]
        };
        Taf.Map.prototype.remove = function(key) {
            delete this.val[key]
        };
        Taf.Map.prototype.clear = function() {
            this.val = new Object
        };
        Taf.Map.prototype.size = function() {
            var anum = 0;
            for (var key in this.val) {
                anum++
            }
            return anum
        };
        Taf.BinBuffer = function(buffer) {
            this.buf = null;
            this.vew = null;
            this.len = 0;
            this.position = 0;
            if (buffer != null && buffer != undefined && buffer instanceof Taf.BinBuffer) {
                this.buf = buffer.buf;
                this.vew = new DataView(this.buf);
                this.len = buffer.length;
                this.position = buffer.position
            }
            if (buffer != null && buffer != undefined && buffer instanceof ArrayBuffer) {
                this.buf = buffer;
                this.vew = new DataView(this.buf);
                this.len = this.vew.byteLength;
                this.position = 0
            }
            this.__defineGetter__("length", (function() {
                return this.len
            }));
            this.__defineGetter__("buffer", (function() {
                return this.buf
            }))
        };
        Taf.BinBuffer.prototype._clone = function() {
            return new Taf.BinBuffer(this.buf)
        };
        Taf.BinBuffer.prototype._write = function(os, tag, val) {
            return os.writeBytes(tag, val)
        };
        Taf.BinBuffer.prototype._read = function(os, tag, def) {
            return os.readBytes(tag, true, def)
        };
        Taf.BinBuffer.prototype.allocate = function(uiLength) {
            uiLength = this.position + uiLength;
            if (this.buf != null && this.buf.length > uiLength) {
                return
            }
            var temp = new ArrayBuffer(Math.max(512, uiLength * 2));
            if (this.buf != null) {
                new Uint8Array(temp).set(new Uint8Array(this.buf));
                this.buf = undefined
            }
            this.buf = temp;
            this.vew = undefined;
            this.vew = new DataView(this.buf)
        };
        Taf.BinBuffer.prototype.getBuffer = function() {
            var temp = new ArrayBuffer(this.len);
            new Uint8Array(temp).set(new Uint8Array(this.buf, 0, this.len));
            return temp
        };
        Taf.BinBuffer.prototype.memset = function(fbuf, offset, length) {
            this.allocate(length);
            new Uint8Array(this.buf).set(new Uint8Array(fbuf, offset, length), this.position)
        };
        Taf.BinBuffer.prototype.writeInt8 = function(value) {
            this.allocate(1);
            this.vew.setInt8(this.position, value);
            this.position += 1;
            this.len = this.position
        };
        Taf.BinBuffer.prototype.writeUInt8 = function(value) {
            this.allocate(1);
            this.vew.setUint8(this.position++, value);
            this.len = this.position
        };
        Taf.BinBuffer.prototype.writeInt16 = function(value) {
            this.allocate(2);
            this.vew.setInt16(this.position, value);
            this.position += 2;
            this.len = this.position
        };
        Taf.BinBuffer.prototype.writeUInt16 = function(value) {
            this.allocate(2);
            this.vew.setUint16(this.position, value);
            this.position += 2;
            this.len = this.position
        };
        Taf.BinBuffer.prototype.writeInt32 = function(value) {
            this.allocate(4);
            this.vew.setInt32(this.position, value);
            this.position += 4;
            this.len = this.position
        };
        Taf.BinBuffer.prototype.writeUInt32 = function(value) {
            this.allocate(4);
            this.vew.setUint32(this.position, value);
            this.position += 4;
            this.len = this.position
        };
        Taf.BinBuffer.prototype.writeInt64 = function(value) {
            var H4, L4;
            var BIT32 = 4294967296;
            if (typeof value == "string") {
                var val = new Big(value);
                if (val.s === 1) {
                    H4 = +val.div(BIT32).round(0, 0).toString();
                    L4 = +val.mod(BIT32).toString()
                } else {
                    H4 = val.div(BIT32).round(0, 3);
                    L4 = +val.minus(new Big(H4).times(BIT32)).toString();
                    H4 = +H4.plus(BIT32).toString()
                }
            } else {
                var val = +value;
                if (val > 0) {
                    H4 = Math.floor(val / BIT32);
                    L4 = val - H4 * BIT32
                } else {
                    H4 = Math.floor(val / BIT32);
                    L4 = val - H4 * BIT32;
                    H4 += BIT32
                }
            }
            this.allocate(8);
            this.vew.setUint32(this.position, H4);
            this.vew.setUint32(this.position + 4, L4);
            this.position += 8;
            this.len = this.position
        };
        Taf.BinBuffer.prototype.writeFloat = function(value) {
            this.allocate(4);
            this.vew.setFloat32(this.position, value);
            this.position += 4;
            this.len = this.position
        };
        Taf.BinBuffer.prototype.writeDouble = function(value) {
            this.allocate(8);
            this.vew.setFloat64(this.position, value);
            this.position += 8;
            this.len = this.position
        };
        Taf.BinBuffer.prototype.writeString = function(value) {
            for (var arr = [], i = 0; i < value.length; i++) {
                arr.push(value.charCodeAt(i) & 255)
            }
            this.allocate(arr.length);
            new Uint8Array(this.buf).set(new Uint8Array(arr), this.position);
            this.position += arr.length;
            this.len = this.position
        };
        Taf.BinBuffer.prototype.writeBytes = function(value) {
            if (value.length == 0 || value.buf == null) return;
            this.allocate(value.length);
            new Uint8Array(this.buf).set(new Uint8Array(value.buf, 0, value.length), this.position);
            this.position += value.length;
            this.len = this.position
        };
        Taf.BinBuffer.prototype.readInt8 = function() {
            return this.vew.getInt8(this.position++)
        };
        Taf.BinBuffer.prototype.readInt16 = function() {
            this.position += 2;
            return this.vew.getInt16(this.position - 2)
        };
        Taf.BinBuffer.prototype.readInt32 = function() {
            this.position += 4;
            return this.vew.getInt32(this.position - 4)
        };
        Taf.BinBuffer.prototype.readDouble = function() {
            this.position += 8;
            return this.vew.getFloat64(this.position - 8)
        };
        Taf.BinBuffer.prototype.readFloat = function() {
            this.position += 4;
            return this.vew.getFloat32(this.position - 4)
        };
        Taf.BinBuffer.prototype.readUInt8 = function() {
            this.position += 1;
            return this.vew.getUint8(this.position - 1)
        };
        Taf.BinBuffer.prototype.readUInt16 = function() {
            this.position += 2;
            return this.vew.getUint16(this.position - 2)
        };
        Taf.BinBuffer.prototype.readUInt32 = function() {
            this.position += 4;
            return this.vew.getUint32(this.position - 4)
        };
        Taf.BinBuffer.prototype.readInt64 = function() {
            var H4 = this.vew.getUint32(this.position);
            var L4 = this.vew.getUint32(this.position + 4);
            this.position += 8;
            return H4 * 4294967296 + L4
        };
        Taf.BinBuffer.prototype.readString = function(value) {
            for (var arr = [], i = 0; i < value; i++) {
                arr.push(String.fromCharCode(this.vew.getUint8(this.position++)))
            }
            return decodeURIComponent(escape(arr.join("")))
        };
        Taf.BinBuffer.prototype.readBytes = function(value) {
            var temp = new Taf.BinBuffer;
            temp.allocate(value);
            temp.memset(this.buf, this.position, value);
            temp.position = 0;
            temp.len = value;
            this.position = this.position + value;
            return temp
        };
        Taf.JceOutputStream = function() {
            this.buf = new Taf.BinBuffer;
            this.getBinBuffer = function() {
                return this.buf
            };
            this.getBuffer = function() {
                return this.buf.getBuffer()
            }
        };
        Taf.JceOutputStream.prototype.writeTo = function(tag, type) {
            if (tag < 15) {
                this.buf.writeUInt8(tag << 4 & 240 | type)
            } else {
                this.buf.writeUInt16((240 | type) << 8 | tag)
            }
        };
        Taf.JceOutputStream.prototype.writeBoolean = function(tag, value) {
            this.writeInt8(tag, value == true ? 1 : 0)
        };
        Taf.JceOutputStream.prototype.writeInt8 = function(tag, value) {
            if (value == 0) {
                this.writeTo(tag, Taf.DataHelp.EN_ZERO)
            } else {
                this.writeTo(tag, Taf.DataHelp.EN_INT8);
                this.buf.writeInt8(value)
            }
        };
        Taf.JceOutputStream.prototype.writeInt16 = function(tag, value) {
            if (value >= -128 && value <= 127) {
                this.writeInt8(tag, value)
            } else {
                this.writeTo(tag, Taf.DataHelp.EN_INT16);
                this.buf.writeInt16(value)
            }
        };
        Taf.JceOutputStream.prototype.writeInt32 = function(tag, value) {
            if (value >= -32768 && value <= 32767) {
                this.writeInt16(tag, value)
            } else {
                this.writeTo(tag, Taf.DataHelp.EN_INT32);
                this.buf.writeInt32(value)
            }
        };
        Taf.JceOutputStream.prototype.writeInt64 = function(tag, value) {
            if (value >= -2147483648 && value <= 2147483647) {
                this.writeInt32(tag, value)
            } else {
                this.writeTo(tag, Taf.DataHelp.EN_INT64);
                this.buf.writeInt64(value)
            }
        };
        Taf.JceOutputStream.prototype.writeUInt8 = function(tag, value) {
            this.writeInt16(tag, value)
        };
        Taf.JceOutputStream.prototype.writeUInt16 = function(tag, value) {
            this.writeInt32(tag, value)
        };
        Taf.JceOutputStream.prototype.writeUInt32 = function(tag, value) {
            this.writeInt64(tag, value)
        };
        Taf.JceOutputStream.prototype.writeFloat = function(tag, value) {
            if (value == 0) {
                this.writeTo(tag, Taf.DataHelp.EN_ZERO)
            } else {
                this.writeTo(tag, Taf.DataHelp.EN_FLOAT);
                this.buf.writeFloat(value)
            }
        };
        Taf.JceOutputStream.prototype.writeDouble = function(tag, value) {
            if (value == 0) {
                this.writeTo(tag, Taf.DataHelp.EN_ZERO)
            } else {
                this.writeTo(tag, Taf.DataHelp.EN_DOUBLE);
                this.buf.writeDouble(value)
            }
        };
        Taf.JceOutputStream.prototype.writeStruct = function(tag, value) {
            if (value.writeTo == undefined) {
                throw Error("not defined writeTo Function")
            }
            this.writeTo(tag, Taf.DataHelp.EN_STRUCTBEGIN);
            value.writeTo(this);
            this.writeTo(0, Taf.DataHelp.EN_STRUCTEND)
        };
        Taf.JceOutputStream.prototype.writeString = function(tag, value) {
            var str = unescape(encodeURIComponent(value));
            if (str.length > 255) {
                this.writeTo(tag, Taf.DataHelp.EN_STRING4);
                this.buf.writeUInt32(str.length)
            } else {
                this.writeTo(tag, Taf.DataHelp.EN_STRING1);
                this.buf.writeUInt8(str.length)
            }
            this.buf.writeString(str)
        };
        Taf.JceOutputStream.prototype.writeBytes = function(tag, value) {
            if (! (value instanceof Taf.BinBuffer)) {
                throw Error("value not instanceof Taf.BinBuffer")
            }
            this.writeTo(tag, Taf.DataHelp.EN_SIMPLELIST);
            this.writeTo(0, Taf.DataHelp.EN_INT8);
            this.writeInt32(0, value.length);
            this.buf.writeBytes(value)
        };
        Taf.JceOutputStream.prototype.writeVector = function(tag, value) {
            this.writeTo(tag, Taf.DataHelp.EN_LIST);
            this.writeInt32(0, value.val.length);
            for (var i = 0; i < value.val.length; i++) {
                value.proto._write(this, 0, value.val[i])
            }
        };
        Taf.JceOutputStream.prototype.writeMap = function(tag, value) {
            this.writeTo(tag, Taf.DataHelp.EN_MAP);
            this.writeInt32(0, value.size());
            for (var temp in value.val) {
                value.kproto._write(this, 0, temp);
                value.vproto._write(this, 1, value.val[temp])
            }
        };
        Taf.JceInputStream = function(buffer) {
            this.buf = new Taf.BinBuffer(buffer)
        };
        Taf.JceInputStream.prototype.readFrom = function() {
            var temp = this.buf.readUInt8();
            var tag = (temp & 240) >> 4;
            var type = temp & 15;
            if (tag >= 15) tag = this.buf.readUInt8();
            return {
                tag: tag,
                type: type
            }
        };
        Taf.JceInputStream.prototype.peekFrom = function() {
            var pos = this.buf.position;
            var head = this.readFrom();
            this.buf.position = pos;
            return {
                tag: head.tag,
                type: head.type,
                size: head.tag >= 15 ? 2 : 1
            }
        };
        Taf.JceInputStream.prototype.skipField = function(type) {
            switch (type) {
            case Taf.DataHelp.EN_INT8:
                this.buf.position += 1;
                break;
            case Taf.DataHelp.EN_INT16:
                this.buf.position += 2;
                break;
            case Taf.DataHelp.EN_INT32:
                this.buf.position += 4;
                break;
            case Taf.DataHelp.EN_INT64:
                this.buf.position += 8;
                break;
            case Taf.DataHelp.EN_FLOAT:
                this.buf.position += 4;
                break;
            case Taf.DataHelp.EN_DOUBLE:
                this.buf.position += 8;
                break;
            case Taf.DataHelp.EN_STRUCTBEGIN:
                this.skipToStructEnd();
                break;
            case Taf.DataHelp.EN_STRUCTEND:
            case Taf.DataHelp.EN_ZERO:
                break;
            case Taf.DataHelp.EN_MAP:
                {
                    var size = this.readInt32(0, true);
                    for (var i = 0; i < size * 2; ++i) {
                        var head = this.readFrom();
                        this.skipField(head.type)
                    }
                    break
                }
            case Taf.DataHelp.EN_STRING1:
                {
                    let len = this.buf.readUInt8();
                    if (len < 0) len += 256;
                    this.buf.position += len;
                    break
                }
            case Taf.DataHelp.EN_STRING4:
                {
                    let len = this.buf.readInt32();
                    this.buf.position += len;
                    break
                }
            case Taf.DataHelp.EN_SIMPLELIST:
                {
                    var head = this.readFrom();
                    if (head.type != Taf.DataHelp.EN_INT8) {
                        throw Error("skipField with invalid type, type value: " + type + "," + head.type)
                    }
                    this.buf.position += this.readInt32(0, true);
                    break
                }
            case Taf.DataHelp.EN_LIST:
                {
                    var size = this.readInt32(0, true);
                    for (var i = 0; i < size; ++i) {
                        var head = this.readFrom();
                        this.skipField(head.type)
                    }
                    break
                }
            default:
                throw new Error("skipField with invalid type, type value: " + type)
            }
        };
        Taf.JceInputStream.prototype.skipToStructEnd = function() {
            for (;;) {
                var head = this.readFrom();
                this.skipField(head.type);
                if (head.type == Taf.DataHelp.EN_STRUCTEND) {
                    return
                }
            }
        };
        Taf.JceInputStream.prototype.skipToTag = function(tag, require) {
            while (this.buf.position < this.buf.length) {
                var head = this.peekFrom();
                if (tag <= head.tag || head.type == Taf.DataHelp.EN_STRUCTEND) {
                    let skip = head.type == Taf.DataHelp.EN_STRUCTEND ? false: tag == head.tag;
                    if (skip) {
                        return true
                    } else {
                        if (require) {
                            throw Error("require field not exist, tag:" + tag)
                        }
                        return false
                    }
                }
                this.buf.position += head.size;
                this.skipField(head.type)
            }
            if (require) throw Error("require field not exist, tag:" + tag);
            return false
        };
        Taf.JceInputStream.prototype.readBoolean = function(tag, require, def) {
            return this.readInt8(tag, require, def) == 1 ? true: false
        };
        Taf.JceInputStream.prototype.readInt8 = function(tag, require, def) {
            if (this.skipToTag(tag, require) == false) {
                return def
            }
            var head = this.readFrom();
            switch (head.type) {
            case Taf.DataHelp.EN_ZERO:
                return 0;
            case Taf.DataHelp.EN_INT8:
                return this.buf.readInt8()
            }
            throw Error("read int8 type mismatch, tag:" + tag + ", get type:" + head.type)
        };
        Taf.JceInputStream.prototype.readInt16 = function(tag, require, def) {
            if (this.skipToTag(tag, require) == false) {
                return def
            }
            var head = this.readFrom();
            switch (head.type) {
            case Taf.DataHelp.EN_ZERO:
                return 0;
            case Taf.DataHelp.EN_INT8:
                return this.buf.readInt8();
            case Taf.DataHelp.EN_INT16:
                return this.buf.readInt16()
            }
            throw Error("read int8 type mismatch, tag:" + tag + ", get type:" + head.type)
        };
        Taf.JceInputStream.prototype.readInt32 = function(tag, requrire, def) {
            if (this.skipToTag(tag, requrire) == false) {
                return def
            }
            var head = this.readFrom();
            switch (head.type) {
            case Taf.DataHelp.EN_ZERO:
                return 0;
            case Taf.DataHelp.EN_INT8:
                return this.buf.readInt8();
            case Taf.DataHelp.EN_INT16:
                return this.buf.readInt16();
            case Taf.DataHelp.EN_INT32:
                return this.buf.readInt32()
            }
            throw Error("read int8 type mismatch, tag:" + tag + ", get type:" + head.type)
        };
        Taf.JceInputStream.prototype.readInt64 = function(tag, require, def) {
            if (this.skipToTag(tag, require) == false) {
                return def
            }
            var head = this.readFrom();
            switch (head.type) {
            case Taf.DataHelp.EN_ZERO:
                return 0;
            case Taf.DataHelp.EN_INT8:
                return this.buf.readInt8();
            case Taf.DataHelp.EN_INT16:
                return this.buf.readInt16();
            case Taf.DataHelp.EN_INT32:
                return this.buf.readInt32();
            case Taf.DataHelp.EN_INT64:
                return this.buf.readInt64()
            }
            throw Error("read int64 type mismatch, tag:" + tag + ", get type:" + h.type)
        };
        Taf.JceInputStream.prototype.readDouble = function(tag, require, def) {
            if (this.skipToTag(tag, require) == false) {
                return def
            }
            var head = this.readFrom();
            switch (head.type) {
            case Taf.DataHelp.EN_ZERO:
                return 0;
            case Taf.DataHelp.EN_DOUBLE:
                return this.buf.readDouble()
            }
            throw Error("readDouble type mismatch, tag:" + tag + ", get type:" + h.type)
        };
        Taf.JceInputStream.prototype.readFloat = function(tag, require, def) {
            if (this.skipToTag(tag, require) == false) {
                return def
            }
            var head = this.readFrom();
            switch (head.type) {
            case Taf.DataHelp.EN_ZERO:
                return 0;
            case Taf.DataHelp.EN_FLOAT:
                return this.buf.readFloat()
            }
            throw Error("readFloat type mismatch, tag:" + tag + ", get type:" + h.type)
        };
        Taf.JceInputStream.prototype.readUInt8 = function(tag, require, def) {
            return this.readInt16(tag, require, def)
        };
        Taf.JceInputStream.prototype.readUInt16 = function(tag, require, def) {
            return this.readInt32(tag, require, def)
        };
        Taf.JceInputStream.prototype.readUInt32 = function(tag, require, def) {
            return this.readInt64(tag, require, def)
        };
        Taf.JceInputStream.prototype.readStruct = function(tag, require, def) {
            if (this.skipToTag(tag, require) == false) {
                return def
            }
            var head = this.readFrom();
            if (head.type != Taf.DataHelp.EN_STRUCTBEGIN) {
                throw Error("read struct type mismatch, tag: " + tag + ", get type:" + head.type)
            }
            def.readFrom(this);
            this.skipToStructEnd();
            return def
        };
        Taf.JceInputStream.prototype.readString = function(tag, require, def) {
            if (this.skipToTag(tag, require) == false) {
                return def
            }
            var head = this.readFrom();
            if (head.type == Taf.DataHelp.EN_STRING1) {
                return this.buf.readString(this.buf.readUInt8())
            }
            if (head.type == Taf.DataHelp.EN_STRING4) {
                return this.buf.readString(this.buf.readUInt32())
            }
            throw Error("read 'string' type mismatch, tag: " + tag + ", get type: " + head.type + ".")
        };
        Taf.JceInputStream.prototype.readBytes = function(tag, require, def) {
            if (this.skipToTag(tag, require) == false) {
                return def
            }
            var head = this.readFrom();
            if (head.type == Taf.DataHelp.EN_SIMPLELIST) {
                var temp = this.readFrom();
                if (temp.type != Taf.DataHelp.EN_INT8) {
                    throw Error("type mismatch, tag:" + tag + ",type:" + head.type + "," + temp.type)
                }
                var size = this.readInt32(0, true);
                if (size < 0) {
                    throw Error("invalid size, tag:" + tag + ",type:" + head.type + "," + temp.type)
                }
                return this.buf.readBytes(size)
            }
            if (head.type == Taf.DataHelp.EN_LIST) {
                var size = this.readInt32(0, true);
                this.position += size;
                return (new Taf.BinBuffer).memset(this.buf, this.position - size, size)
            }
            throw Error("type mismatch, tag:" + tag + ",type:" + head.type)
        };
        Taf.JceInputStream.prototype.readVector = function(tag, require, def) {
            if (this.skipToTag(tag, require) == false) {
                return def
            }
            var head = this.readFrom();
            if (head.type != Taf.DataHelp.EN_LIST) {
                throw Error("read 'vector' type mismatch, tag: " + tag + ", get type: " + head.type)
            }
            var size = this.readInt32(0, true);
            if (size < 0) {
                throw Error("invalid size, tag: " + tag + ", type: " + head.type + ", size: " + size)
            }
            for (var i = 0; i < size; ++i) {
                def.val.push(def.proto._read(this, 0, def.proto._clone()))
            }
            return def
        };
        Taf.JceInputStream.prototype.readMap = function(tag, require, def) {
            if (this.skipToTag(tag, require) == false) {
                return def
            }
            var head = this.readFrom();
            if (head.type != Taf.DataHelp.EN_MAP) {
                throw Error("read 'map' type mismatch, tag: " + tag + ", get type: " + head.type)
            }
            var size = this.readInt32(0, true);
            if (size < 0) {
                throw Error("invalid map, tag: " + tag + ", size: " + size)
            }
            for (var i = 0; i < size; i++) {
                var key = def.kproto._read(this, 0, def.kproto._clone());
                var val = def.vproto._read(this, 1, def.vproto._clone());
                def.put(key, val)
            }
            return def
        }
    },
    "./node_modules/@tencent/hippy-react/index.js": function(module, exports, __webpack_require__) {
        __webpack_require__("./node_modules/@tencent/hippy-react/lib/global.js");
        __webpack_require__("./node_modules/@tencent/hippy-react/lib/event/EventDispatcher.js");
        __webpack_require__("./node_modules/@tencent/hippy-react/lib/event/HippyEventListener.js");
        __webpack_require__("./node_modules/@tencent/hippy-react/lib/event/HippyEventEmitter.js");
        const GlobalEventEmitter = new Event.Emitter;
        GlobalEventEmitter.addListener("startPerformanceMonitor", () =>{
            __GLOBAL__.report_js_trace = true
        });
        GlobalEventEmitter.addListener("endPerformanceMonitor", () =>{
            __GLOBAL__.report_js_trace = false
        });
        const {
            HippyRegister: HippyRegister,
            Bridge: Bridge,
            Device: Device,
            AsyncStorage: AsyncStorage
        } = __webpack_require__("./node_modules/@tencent/hippy-react/lib/native.js");
        module.exports = {
            get UIManagerModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/modules/UIManagerModule.js").
            default
            },
            get StyleSheet() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/modules/StyleSheet.js").
            default
            },
            get Dimensions() {
                return {
                    get(name) {
                        return Device[name]
                    }
                }
            },
            get PixelRatio() {
                return {
                    get() {
                        return Device.screen.scale
                    }
                }
            },
            get TimerModule() {
                return null
            },
            get NetworkModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/modules/NetworkModule.js").
            default
            },
            get NetInfo() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/modules/NetInfo.js").
            default
            },
            get Clipboard() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/modules/Clipboard.js").
            default
            },
            get ConsoleModule() {
                return console
            },
            get ImageLoaderModule() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/modules/ImageLoaderModule.js").
            default
            },
            get Platform() {
                return Device.platform
            },
            get BackAndroid() {
                if (true) {
                    if (true) {
                        return __webpack_require__("./node_modules/@tencent/hippy-react/lib/modules/BackAndroid.js").
                    default
                    }
                } else if (Device.platform.OS === "android") {
                    return require("./lib/modules/BackAndroid").
                default
                }
                return {
                    exitApp() {},
                    addListener() {},
                    removeListener() {}
                }
            },
            get HippyEventListener() {
                return Event.Listener
            },
            get RNfqbEventListener() {
                return Event.Listener
            },
            get HippyEventEmitter() {
                return Event.Emitter
            },
            get RNfqbEventEmitter() {
                return Event.Emitter
            },
            get Animation() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/modules/Animation.js").
            default
            },
            get AnimationSet() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/modules/AnimationSet.js").
            default
            },
            get Hippy() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/hippy.js").Hippy
            },
            get RNfqb() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/hippy.js").Hippy
            },
            get View() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/components/View/index.js").View
            },
            get Text() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/components/Text/index.js").Text
            },
            get Image() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/components/Image/index.js").Image
            },
            get ListView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/components/ListView/index.js").ListView
            },
            get RefreshWrapper() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/components/RefreshWrapper/index.js").RefreshWrapper
            },
            get Navigator() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/components/Navigator/index.js").Navigator
            },
            get ViewPager() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/components/ViewPager/index.js").
            default
            },
            get TextInput() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/components/TextInput/index.js").TextInput
            },
            get ScrollView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/components/Scroll/index.js").ScrollView
            },
            get colorParse() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/transfer/colorParse/index.js").colorParse
            },
            get Modal() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/components/Modal/index.js").Modal
            },
            get Focusable() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/components/Focusable/index.js").Focusable
            },
            get WebView() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/components/WebView/index.js").WebView
            },
            get AppRegistry() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/adapterForRn/AppRegistry.js").AppRegistry
            },
            get Animated() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/adapterForRn/Animated.js").Animated
            },
            get Easing() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/adapterForRn/Easing.js").Easing
            },
            get ImageBackground() {
                return __webpack_require__("./node_modules/@tencent/hippy-react/lib/components/Image/index.js").Image
            },
            callNative: Bridge.callNative,
            callNativeWithPromise: Bridge.callNativeWithPromise,
            callNativeWithCallbackId: Bridge.callNativeWithCallbackId,
            removeNativeCallback: Bridge.removeNativeCallback,
            RNfqbRegister: HippyRegister,
            HippyRegister: HippyRegister,
            AsyncStorage: AsyncStorage
        }
    },
    "./node_modules/@tencent/hippy-react/lib/adapterForRn/Animated.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "Animated", (function() {
            return Animated
        }));
        var __WEBPACK_IMPORTED_MODULE_0__modules_Animation__ = __webpack_require__("./node_modules/@tencent/hippy-react/lib/modules/Animation.js");
        var __WEBPACK_IMPORTED_MODULE_1__components_View__ = __webpack_require__("./node_modules/@tencent/hippy-react/lib/components/View/index.js");
        var __WEBPACK_IMPORTED_MODULE_2__components_Text__ = __webpack_require__("./node_modules/@tencent/hippy-react/lib/components/Text/index.js");
        var __WEBPACK_IMPORTED_MODULE_3__components_Image__ = __webpack_require__("./node_modules/@tencent/hippy-react/lib/components/Image/index.js");
        let Animated = class Animated {
            static Value(val) {
                return val
            }
            static timing(value, config) {
                return new __WEBPACK_IMPORTED_MODULE_0__modules_Animation__["Animation"]({
                    mode: "timing",
                    delay: 0,
                    startValue: value,
                    toValue: config.toValue,
                    duration: config.duration,
                    timingFunction: config.easing || "linear"
                })
            }
        };
        Animated.prototype.Value = Animated.Value;
        Animated.View = __WEBPACK_IMPORTED_MODULE_1__components_View__["View"];
        Animated.Text = __WEBPACK_IMPORTED_MODULE_2__components_Text__["Text"];
        Animated.Image = __WEBPACK_IMPORTED_MODULE_3__components_Image__["Image"];
        __webpack_exports__["default"] = Animated
    },
    "./node_modules/@tencent/hippy-react/lib/adapterForRn/AppRegistry.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "AppRegistry", (function() {
            return AppRegistry
        }));
        var __WEBPACK_IMPORTED_MODULE_0__hippy__ = __webpack_require__("./node_modules/@tencent/hippy-react/lib/hippy.js");
        const AppRegistry = {
            registerComponent(appName, entryPage) {
                const hippy = new __WEBPACK_IMPORTED_MODULE_0__hippy__["Hippy"]({
                    appName: appName,
                    entryPage: entryPage
                });
                hippy.regist()
            }
        };
        __webpack_exports__["default"] = AppRegistry
    },
    "./node_modules/@tencent/hippy-react/lib/adapterForRn/Easing.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "Easing", (function() {
            return Easing
        }));
        let Easing = class Easing {
            static step0(n) {
                return n > 0 ? 1 : 0
            }
            static step1(n) {
                return n >= 1 ? 1 : 0
            }
            static linear() {
                return "linear"
            }
            static ease() {
                return "ease"
            }
            static quad(t) {
                return t * t
            }
            static cubic(t) {
                return t * t * t
            }
            static poly(n) {
                return t =>Math.pow(t, n)
            }
            static sin(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }
            static circle(t) {
                return 1 - Math.sqrt(1 - t * t)
            }
            static exp(t) {
                return Math.pow(2, 10 * (t - 1))
            }
            static elastic() {
                return "elastic"
            }
            static back(s_) {
                let s = s_;
                if (s === undefined) {
                    s = 1.70158
                }
                return t =>t * t * ((s + 1) * t - s)
            }
            static bounce(t_) {
                let t = t_;
                if (t < 1 / 2.75) {
                    return 7.5625 * t * t
                }
                if (t < 2 / 2.75) {
                    t -= 1.5 / 2.75;
                    return 7.5625 * t * t + .75
                }
                if (t < 2.5 / 2.75) {
                    t -= 2.25 / 2.75;
                    return 7.5625 * t * t + .9375
                }
                t -= 2.625 / 2.75;
                return 7.5625 * t * t + .984375
            }
            static bezier() {
                return "bezier"
            }
            static in () {
                return "ease-in"
            }
            static out() {
                return "ease-out"
            }
            static inOut() {
                return "ease-in-out"
            }
        };
        __webpack_exports__["default"] = Easing
    },
    "./node_modules/@tencent/hippy-react/lib/components/Focusable/index.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        __webpack_require__.d(__webpack_exports__, "Focusable", (function() {
            return Focusable
        }));
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
        var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
        var __WEBPACK_IMPORTED_MODULE_1__View__ = __webpack_require__("./node_modules/@tencent/hippy-react/lib/components/View/index.js");
        var __WEBPACK_IMPORTED_MODULE_2__modules_UIManagerModule__ = __webpack_require__("./node_modules/@tencent/hippy-react/lib/modules/UIManagerModule.js");
        let Focusable = class Focusable extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
            constructor(props) {
                super(props);
                const {
                    requestFocus: requestFocus
                } = this.props;
                this.state = {
                    isFocus: !!requestFocus
                };
                this.handleFocus = this.handleFocus.bind(this)
            }
            handleFocus(e) {
                const {
                    onFocus: userOnFocus
                } = this.props;
                if (typeof userOnFocus === "function") {
                    userOnFocus(e)
                }
                const {
                    isFocus: isFocus
                } = this.state;
                if (isFocus !== e.focus) {
                    this.setState({
                        isFocus: e.focus
                    })
                }
            }
            render() {
                const {
                    requestFocus: requestFocus,
                    style: style,
                    noFocusStyle: noFocusStyle,
                    focusStyle: focusStyle,
                    onClick: onClick
                } = this.props;
                let {
                    children: children,
                    nextFocusDownId: nextFocusDownId,
                    nextFocusUpId: nextFocusUpId,
                    nextFocusLeftId: nextFocusLeftId,
                    nextFocusRightId: nextFocusRightId
                } = this.props;
                const child = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(children);
                let type;
                if (child && child.child && child.child.memoizedProps && child.child.memoizedProps.nativeName) {
                    type = child.child.memoizedProps.nativeName
                } else if (child && child.type && child.type.name) {
                    type = child.type.name
                }
                nextFocusDownId = nextFocusDownId && __WEBPACK_IMPORTED_MODULE_2__modules_UIManagerModule__["default"].getNodeIdByRef(nextFocusDownId);
                nextFocusUpId = nextFocusUpId && __WEBPACK_IMPORTED_MODULE_2__modules_UIManagerModule__["default"].getNodeIdByRef(nextFocusUpId);
                nextFocusLeftId = nextFocusLeftId && __WEBPACK_IMPORTED_MODULE_2__modules_UIManagerModule__["default"].getNodeIdByRef(nextFocusLeftId);
                nextFocusRightId = nextFocusRightId && __WEBPACK_IMPORTED_MODULE_2__modules_UIManagerModule__["default"].getNodeIdByRef(nextFocusRightId);
                const childStyle = child.props.style;
                const nativeStyle = {};
                if (type === "Text") {
                    Object.assign(nativeStyle, style)
                } else {
                    Object.assign(nativeStyle, style, childStyle)
                }
                const {
                    isFocus: isFocus
                } = this.state;
                Object.assign(nativeStyle, isFocus ? focusStyle: noFocusStyle); ({
                    children: children
                } = child.props);
                if (type === "Text") {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__View__["View"], {
                        focusable: true,
                        nextFocusDownId: nextFocusDownId,
                        nextFocusUpId: nextFocusUpId,
                        nextFocusLeftId: nextFocusLeftId,
                        nextFocusRightId: nextFocusRightId,
                        requestFocus: requestFocus,
                        style: nativeStyle,
                        onClick: onClick,
                        onFocus: this.handleFocus
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {}))
                }
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, {
                    focusable: true,
                    nextFocusDownId: nextFocusDownId,
                    nextFocusUpId: nextFocusUpId,
                    nextFocusLeftId: nextFocusLeftId,
                    nextFocusRightId: nextFocusRightId,
                    requestFocus: requestFocus,
                    style: nativeStyle,
                    onClick: onClick,
                    children: children,
                    onFocus: this.handleFocus
                })
            }
        };
        __webpack_exports__["default"] = Focusable
    },
    "./node_modules/@tencent/hippy-react/lib/components/Image/hippy-image.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict"; (function(process) {
            __webpack_require__.d(__webpack_exports__, "default", (function() {
                return HippyImage
            }));
            var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
            var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
            var __WEBPACK_IMPORTED_MODULE_1__modules_ImageLoaderModule__ = __webpack_require__("./node_modules/@tencent/hippy-react/lib/modules/ImageLoaderModule.js");
            var __WEBPACK_IMPORTED_MODULE_2__native__ = __webpack_require__("./node_modules/@tencent/hippy-react/lib/native.js");
            var _extends = Object.assign ||
            function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key]
                        }
                    }
                }
                return target
            };
            const handleImgUrl = url =>{
                if (url && !/^(http|https):\/\//.test(url) && url.indexOf("assets") > -1) {
                    if (process.env.NODE_ENV === "dev") {
                        const addStr1 = "http://";
                        return`$ {
                            addStr1
                        }
                        127.0.0.1 : $ {
                            process.env.PORT
                        }
                        /${url}`}const addStr2="hpfile:/ / ";return`${addStr2}./${url}`}return url};let HippyImage=class HippyImage extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component{static get resizeMode(){return{contain:"contain ",cover:"cover ",stretch:"stretch ",center:"center ",repeat:"repeat "}}static getSize(url,success,failure){__WEBPACK_IMPORTED_MODULE_1__modules_ImageLoaderModule__["default "].getSize(url).then(result=>{success(result.width,result.height)}).catch(failure||(()=>{}))}static prefetch(url){__WEBPACK_IMPORTED_MODULE_1__modules_ImageLoaderModule__["default "].prefetch(url)}render(){const nativeProps=Object.assign({},this.props);if(typeof nativeProps.source==="string "){nativeProps.source={uri:nativeProps.source}}if(nativeProps.source){const source=handleImgUrl(nativeProps.source.uri);nativeProps.source=[{uri:source}];nativeProps.src=source}else if(nativeProps.sources&&Array.isArray(nativeProps.sources)){const sources=nativeProps.sources.map(src=>handleImgUrl(src.uri));nativeProps.source=sources.map(src=>{const source={uri:src};return source});nativeProps.srcs=sources}else if(nativeProps.src){const source=handleImgUrl(nativeProps.src);nativeProps.source=[{uri:source}];nativeProps.src=source}else if(nativeProps.srcs&&Array.isArray(nativeProps.srcs)){const sources=nativeProps.srcs.map(src=>handleImgUrl(src));nativeProps.source=sources.map(src=>{const source={uri:src};return source});nativeProps.srcs=sources}if(typeof nativeProps.defaultSource==="string "){if(nativeProps.defaultSource.indexOf("data:image / ")!==0){console.warn(" [Image] defaultSource prop must be a local base64 image ")}nativeProps.defaultSource=handleImgUrl(nativeProps.defaultSource)}if(nativeProps.tintColor||nativeProps.tintColors){const{style:style}=this.props;const nativeStyle=Object.assign({},style);if(nativeProps.tintColor){nativeStyle.tintColor=nativeProps.tintColor;delete nativeProps.tintColor}if(nativeProps.tintColors){nativeStyle.tintColors=nativeProps.tintColors;delete nativeProps.tintColors}delete nativeProps.style;nativeProps.style=nativeStyle}if(__WEBPACK_IMPORTED_MODULE_2__native__["Device "].platform.OS==="android "){delete nativeProps.source}else if(__WEBPACK_IMPORTED_MODULE_2__native__["Device "].platform.OS==="ios "){delete nativeProps.src;delete nativeProps.srcs}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img ",_extends({nativeName:"Image "},nativeProps,{alt:""}))}}}).call(__webpack_exports__,__webpack_require__(". / node_modules / process / browser.js "))},". / node_modules / @tencent / hippy - react / lib / components / Image / index.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";Object.defineProperty(__webpack_exports__,"__esModule ",{value:true});__webpack_require__.d(__webpack_exports__,"Image ",(function(){return Image}));var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(". / node_modules / react / index.js ");var __WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);var __WEBPACK_IMPORTED_MODULE_1__View_index__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / components / View / index.js ");var __WEBPACK_IMPORTED_MODULE_2__modules_ImageLoaderModule__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / modules / ImageLoaderModule.js ");var __WEBPACK_IMPORTED_MODULE_3__hippy_image__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / components / Image / hippy - image.js ");var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i]}return target}let Image=class Image extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component{static get resizeMode(){return{contain:"contain ",cover:"cover ",stretch:"stretch ",center:"center ",repeat:"repeat "}}static getSize(url,success,failure){__WEBPACK_IMPORTED_MODULE_2__modules_ImageLoaderModule__["default "].getSize(url).then(result=>{success(result.width,result.height)}).catch(failure||(()=>{}))}static prefetch(url){__WEBPACK_IMPORTED_MODULE_2__modules_ImageLoaderModule__["default "].prefetch(url)}render(){const _props=this.props,{children:children,style:style,imageStyle:imageStyle,imageRef:imageRef}=_props,props=_objectWithoutProperties(_props,["children ","style ","imageStyle ","imageRef "]);if(children){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__View_index__["View "],{style:style},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__hippy_image__["default "],_extends({},props,{style:[{position:"absolute ",left:0,right:0,top:0,bottom:0,width:style.width,height:style.height},imageStyle],ref:imageRef})),children)}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__hippy_image__["default "],this.props)}};__webpack_exports__["default "]=Image},". / node_modules / @tencent / hippy - react / lib / components / ListView / index.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";Object.defineProperty(__webpack_exports__,"__esModule ",{value:true});__webpack_require__.d(__webpack_exports__,"ListView ",(function(){return ListView}));var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(". / node_modules / react / index.js ");var __WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);var __WEBPACK_IMPORTED_MODULE_1__util_Log__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / util / Log.js ");var __WEBPACK_IMPORTED_MODULE_2__modules_UIManagerModule__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / modules / UIManagerModule.js ");var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};function ListViewItem(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li ",_extends({nativeName:"ListViewItem "},props))}let ListView=class ListView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component{constructor(props){super(props);this.state={initialListReady:false}}componentDidMount(){const{getRowKey:getRowKey}=this.props;if(!getRowKey){__WEBPACK_IMPORTED_MODULE_1__util_Log__["default "].warn("ListView needs getRowKey to specific the key of item ")}}scrollToIndex(xIndex,yIndex,animated){if(typeof xIndex!=="number "||typeof yIndex!=="number "||typeof animated!=="boolean "){return}__WEBPACK_IMPORTED_MODULE_2__modules_UIManagerModule__["default "].callUIFunction(this,"scrollToIndex ",[xIndex,yIndex,animated])}scrollToContentOffset(xOffset,yOffset,animated){if(typeof xOffset!=="number "||typeof yOffset!=="number "||typeof animated!=="boolean "){return}__WEBPACK_IMPORTED_MODULE_2__modules_UIManagerModule__["default "].callUIFunction(this,"scrollToContentOffset ",[xOffset,yOffset,animated])}handleInitialListReady(){this.setState({initialListReady:true})}render(){let{numberOfRows:numberOfRows}=this.props;const{style:style,renderRow:renderRow,getRowType:getRowType,getRowStyle:getRowStyle,getRowKey:getRowKey,dataSource:dataSource,initialListSize:initialListSize,rowShouldSticky:rowShouldSticky,onRowLayout:onRowLayout}=this.props;const{initialListReady:initialListReady}=this.state;const itemList=[];if(!numberOfRows&&dataSource){numberOfRows=dataSource.length}if(!initialListReady){numberOfRows=Math.min(numberOfRows,initialListSize||10)}for(let index=0;index<numberOfRows;index+=1){let renderRowParam;if(dataSource){renderRowParam=dataSource[index]}else{renderRowParam=index}let itemStyle={};if(typeof getRowStyle==="function "){itemStyle=getRowStyle(index)}let key;if(getRowKey){key=getRowKey(index)}else{key=index}const renderRowChildren=dataSource?renderRow(renderRowParam,null,index):renderRow(renderRowParam);const otherProps={};if(typeof onRowLayout==="function "){otherProps.onLayout=e=>{onRowLayout(e,index)}}if(renderRowChildren){itemList.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListViewItem,_extends({key:key,style:itemStyle,type:getRowType?`${getRowType(index)}`:`${0}`,iSticky:rowShouldSticky?rowShouldSticky(index):false,itemViewType:getRowType?getRowType(index):0,sticky:rowShouldSticky?rowShouldSticky(index):false},otherProps),renderRowChildren))}}const nativeProps=Object.assign({},this.props,{style:_extends({overflow:"scroll "},style)});nativeProps.numberOfRows=itemList.length;delete nativeProps.renderRow;delete nativeProps.getRowType;delete nativeProps.getRowHeight;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul ",_extends({nativeName:"ListView ",initialListReady:this.handleInitialListReady.bind(this)},nativeProps),itemList)}};ListView.defaultProps=10;__webpack_exports__["default "]=ListView},". / node_modules / @tencent / hippy - react / lib / components / Modal / index.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";Object.defineProperty(__webpack_exports__,"__esModule ",{value:true});__webpack_require__.d(__webpack_exports__,"Modal ",(function(){return Modal}));var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(". / node_modules / react / index.js ");var __WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);var __WEBPACK_IMPORTED_MODULE_1__View_index__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / components / View / index.js ");var __WEBPACK_IMPORTED_MODULE_2__native__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / native.js ");var __WEBPACK_IMPORTED_MODULE_3__modules_StyleSheet__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / modules / StyleSheet.js ");var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};const side="left ";const styles=__WEBPACK_IMPORTED_MODULE_3__modules_StyleSheet__["default "].create({modal:{position:"absolute "},container:{position:"absolute ",[side]:0,top:0}});let Modal=class Modal extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component{componentDidMount(){if(__WEBPACK_IMPORTED_MODULE_2__native__["Device "].platform.OS==="ios "){this._eventSubscription=new Event.Listener("modalDismissed ");this._eventSubscription.addCallback(params=>{const{primaryKey:primaryKey,onDismiss:onDismiss}=this.props;if(params.primaryKey===primaryKey&&typeof onDismiss==="function "){onDismiss()}})}}componentWillUnmount(){if(__WEBPACK_IMPORTED_MODULE_2__native__["Device "].platform.OS==="ios "){if(this._eventSubscription){this._eventSubscription.unregister()}}}render(){const{children:children,visible:visible,transparent:transparent,animated:animated}=this.props;let{animationType:animationType}=this.props;if(visible===false){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__View_index__["View "],null)}const containerStyles={backgroundColor:transparent?"transparent ":"white "};if(!animationType){animationType="none ";if(animated){animationType="slide "}}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div ",_extends({nativeName:"Modal ",animationType:animationType,style:styles.modal},this.props),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__View_index__["View "],{style:[styles.container,containerStyles]},children))}};Modal.defaultProps={visible:true};__webpack_exports__["default "]=Modal},". / node_modules / @tencent / hippy - react / lib / components / Navigator / index.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";Object.defineProperty(__webpack_exports__,"__esModule ",{value:true});__webpack_require__.d(__webpack_exports__,"Navigator ",(function(){return Navigator}));var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(". / node_modules / react / index.js ");var __WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);var __WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / modules / UIManagerModule.js ");var __WEBPACK_IMPORTED_MODULE_2__modules_BackAndroid__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / modules / BackAndroid.js ");var __WEBPACK_IMPORTED_MODULE_3__hippy__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / hippy.js ");var __WEBPACK_IMPORTED_MODULE_4__native__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / native.js ");var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};let Stack=class Stack{constructor(){this.top=null;this.size=0}push(data){this.top={data:data,next:this.top};this.size+=1}peek(){return this.top===null?null:this.top.data}pop(){if(this.top===null){return null}const out=this.top;this.top=this.top.next;if(this.size>0){this.size-=1}return out.data}clear(){this.top=null;this.size=0}displayAll(){if(this.top===null){return null}const arr=[];let current=this.top;for(let i=0,len=this.size;i<len;i+=1){arr[i]=current.data;current=current.next}return arr}};let Navigator=class Navigator extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component{constructor(props){super(props);this.stack=new Stack;this.routeList={};const{initialRoute:initialRoute}=this.props;if(initialRoute&&initialRoute.component){const hippy=new __WEBPACK_IMPORTED_MODULE_3__hippy__["Hippy "]({appName:initialRoute.routeName,entryPage:initialRoute.component});hippy.regist();this.routeList[initialRoute.routeName]=true}}componentWillMount(){if(__WEBPACK_IMPORTED_MODULE_4__native__["Device "].platform.OS==="android "){this.backListener=__WEBPACK_IMPORTED_MODULE_2__modules_BackAndroid__["default "].addListener(this.handleAndroidBack.bind(this))}}componentDidMount(){const{initialRoute:initialRoute}=this.props;this.stack.push({routeName:initialRoute.routeName||"",component:initialRoute.component||"",initProps:initialRoute.initProps||""})}componentWillUnmount(){if(this.backListener){this.backListener.remove()}}getCurrentPage(){return this.stack.peek()}handleAndroidBack(){if(this.stack.size>1){this.pop({animated:true});return true}return false}push(pams){if(pams&&pams.component){if(!this.routeList[pams.routeName]){const hippy=new __WEBPACK_IMPORTED_MODULE_3__hippy__["Hippy "]({appName:pams.routeName,entryPage:pams.component});hippy.regist();this.routeList[pams.routeName]=true}const pams_=pams;delete pams_.component}const parms=[pams];this.stack.push(pams);__WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__["default "].callUIFunction(this,"push ",parms)}pop(pams){if(this.stack.size>1){const parms=[pams];this.stack.pop();__WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__["default "].callUIFunction(this,"pop ",parms)}}clear(){this.stack.clear()}render(){const newProps=Object.assign({},this.props);if(newProps.initialRoute&&newProps.initialRoute.component){delete newProps.initialRoute.component}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div ",_extends({nativeName:"Navigator "},newProps))}};__webpack_exports__["default "]=Navigator},". / node_modules / @tencent / hippy - react / lib / components / RefreshWrapper / index.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";Object.defineProperty(__webpack_exports__,"__esModule ",{value:true});__webpack_require__.d(__webpack_exports__,"RefreshWrapper ",(function(){return RefreshWrapper}));var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(". / node_modules / react / index.js ");var __WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);var __WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / modules / UIManagerModule.js ");var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};function RefreshWrapperItemView(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div ",_extends({nativeName:"RefreshWrapperItemView "},props))}let RefreshWrapper=class RefreshWrapper extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component{onRefresh(){const{onRefresh:onRefresh}=this.props;if(typeof onRefresh==="function "){onRefresh()}}getRefresh(){const{getRefresh:getRefresh}=this.props;if(typeof getRefresh==="function "){return getRefresh()}return null}startRefresh(){__WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__["default "].callUIFunction(this,"startRefresh ",null)}refreshComplected(){__WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__["default "].callUIFunction(this,"refreshComplected ",null)}render(){const newProps=Object.assign({},this.props);newProps.onRefresh=this.onRefresh.bind(this);const{children:children}=this.props;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div ",_extends({nativeName:"RefreshWrapper "},newProps),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RefreshWrapperItemView,{style:[{left:0,right:0,position:"absolute "}]},this.getRefresh()),children)}};__webpack_exports__["default "]=RefreshWrapper},". / node_modules / @tencent / hippy - react / lib / components / Scroll / index.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";Object.defineProperty(__webpack_exports__,"__esModule ",{value:true});__webpack_require__.d(__webpack_exports__,"ScrollView ",(function(){return ScrollView}));var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(". / node_modules / react / index.js ");var __WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);var __WEBPACK_IMPORTED_MODULE_1__View_index__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / components / View / index.js ");var __WEBPACK_IMPORTED_MODULE_2__modules_UIManagerModule__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / modules / UIManagerModule.js ");var __WEBPACK_IMPORTED_MODULE_3__modules_StyleSheet__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / modules / StyleSheet.js ");var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};const styles=__WEBPACK_IMPORTED_MODULE_3__modules_StyleSheet__["default "].create({baseVertical:{flexGrow:1,flexShrink:1,flexDirection:"column ",overflow:"scroll "},baseHorizontal:{flexGrow:1,flexShrink:1,flexDirection:"row ",overflow:"scroll "},contentContainerVertical:{collapse:false,flexDirection:"column "},contentContainerHorizontal:{collapse:false,flexDirection:"row "}});let ScrollView=class ScrollView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component{scrollTo(x,y,animated){let x_=x;let y_=y;let animated_=animated;if(typeof x==="number "){}else if(typeof x==="object "&&x){({x:x_,y:y_,animated:animated_}=x)}x_=x_||0;y_=y_||0;animated_=!!animated_;if(this._view){__WEBPACK_IMPORTED_MODULE_2__modules_UIManagerModule__["default "].callUIFunction(this._view,"scrollTo ",[x_,y_,animated_])}}scrollToWithDuration(x=0,y=0,duration=1e3){if(this._view){__WEBPACK_IMPORTED_MODULE_2__modules_UIManagerModule__["default "].callUIFunction(this._view,"scrollToWithOptions ",[{x:x,y:y,duration:duration}])}}render(){const{horizontal:horizontal,contentContainerStyle:contentContainerStyle,children:children,style:style}=this.props;const contentContainerStyle_=[horizontal?styles.contentContainerHorizontal:styles.contentContainerVertical,contentContainerStyle];const contentContainer=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__View_index__["View "],{style:contentContainerStyle_},children);const newProps=Object.assign({},this.props);const newStyle=horizontal?Object.assign({},style,styles.baseHorizontal):Object.assign({},style,styles.baseVertical);newProps.style=newStyle;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div ",_extends({nativeName:"ScrollView ",ref:ref=>{this._view=ref;return ref}},newProps),contentContainer)}};__webpack_exports__["default "]=ScrollView},". / node_modules / @tencent / hippy - react / lib / components / Text / index.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";Object.defineProperty(__webpack_exports__,"__esModule ",{value:true});__webpack_exports__["Text "]=Text;var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(". / node_modules / react / index.js ");var __WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);var __WEBPACK_IMPORTED_MODULE_1__util_UnicodeToChar__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / util / UnicodeToChar.js ");var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};function Text(props){const newProps=_extends({},props);if(typeof newProps.children==="string "){newProps.children=Object(__WEBPACK_IMPORTED_MODULE_1__util_UnicodeToChar__["default "])(newProps.children)}if(newProps.style){const{style:style}=newProps;if(Array.isArray(style)){if(style.filter(x=>typeof x==="object "&&x!==null).findIndex(s=>s.color||s.colors)===-1){newProps.style[0].color="#000 "}}else if(typeof style==="object "){if(style.color===undefined&&style.colors===undefined){newProps.style.color="#000 "}}}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p ",_extends({nativeName:"Text "},newProps))}__webpack_exports__["default "]=Text},". / node_modules / @tencent / hippy - react / lib / components / TextInput / index.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";Object.defineProperty(__webpack_exports__,"__esModule ",{value:true});__webpack_require__.d(__webpack_exports__,"TextInput ",(function(){return TextInput}));var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(". / node_modules / react / index.js ");var __WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);var __WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / modules / UIManagerModule.js ");var __WEBPACK_IMPORTED_MODULE_2__native__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / native.js ");var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};const COMMAND={COMMAND_CLEAR:"clear ",COMMAND_FOCUS:"focusTextInput ",COMMAND_BLUR:"blurTextInput ",COMMAND_SHOW_INPUTMETHOD:"showInputMethod ",COMMAND_HIDE_INPUTMETHOD:"hideInputMethod ",COMMAND_GET_VALUE:"getValue ",COMMAND_SET_VALUE:"setValue "};let TextInput=class TextInput extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component{constructor(props){super(props);this._inputRef=null;this._lastNativeText=null;this.state={};this._onChangeText=this._onChangeText.bind(this);this._onEndEditing=this._onEndEditing.bind(this);this._onBlur=this._onBlur.bind(this);this._onFocus=this._onFocus.bind(this);this._onSelectionChange=this._onSelectionChange.bind(this);this._onKeyPress=this._onKeyPress.bind(this);this._onKeyboardWillShow=this._onKeyboardWillShow.bind(this)}componentDidMount(){const{value:_lastNativeText,autoFocus:autoFocus}=this.props;this._lastNativeText=_lastNativeText;if(autoFocus){this._focusTextInput()}}shouldComponentUpdate(nextProps){const{props:props}=this;return Object.keys(nextProps).some(key=>{if(key!=="value "){if(nextProps[key]!==props[key]){return true}}else if(nextProps[key]!==props[key]){this.setNativeProps({value:nextProps[key]})}return false})}componentWillUnmount(){this._blurTextInput()}getValue(){return new Promise(resolve=>{__WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__["default "].callUIFunction(this,COMMAND.COMMAND_GET_VALUE,res=>resolve(res.text))})}setValue(value){__WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__["default "].callUIFunction(this,COMMAND.COMMAND_SET_VALUE,[value]);return value}_onChangeText(e){const{onChangeText:onChangeText}=this.props;if(typeof onChangeText==="function "){onChangeText(e.text)}if(!this._inputRef){return}this._lastNativeText=e.text}_onEndEditing(e){const{onEndEditing:onEndEditing}=this.props;if(typeof onEndEditing==="function "){onEndEditing(e)}}_onBlur(e){const{onBlur:onBlur}=this.props;if(typeof onBlur==="function "){onBlur(e)}}_onFocus(e){const{onFocus:onFocus}=this.props;if(typeof onFocus==="function "){onFocus(e)}}_onSelectionChange(e){const{onSelectionChange:onSelectionChange}=this.props;if(typeof onSelectionChange==="function "){onSelectionChange(e)}}_onKeyPress(e){const{onKeyPress:onKeyPress}=this.props;if(typeof onKeyPress==="function "){onKeyPress(e)}}_focusTextInput(){__WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__["default "].callUIFunction(this,COMMAND.COMMAND_FOCUS,[])}_blurTextInput(){__WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__["default "].callUIFunction(this,COMMAND.COMMAND_BLUR,[])}_onKeyboardWillShow(e){const{onKeyboardWillShow:onKeyboardWillShow}=this.props;if(__WEBPACK_IMPORTED_MODULE_2__native__["Device "].platform.OS==="android "){e.keyboardHeight/=__WEBPACK_IMPORTED_MODULE_2__native__["Device "].screen.scale}if(typeof onKeyboardWillShow==="function "){onKeyboardWillShow(e)}}focus(){this._focusTextInput()}blur(){this._blurTextInput()}showInputMethod(){__WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__["default "].callUIFunction(this,COMMAND.COMMAND_SHOW_INPUTMETHOD,[])}hideInputMethod(){__WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__["default "].callUIFunction(this,COMMAND.COMMAND_HIDE_INPUTMETHOD,[])}clear(){__WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__["default "].callUIFunction(this,COMMAND.COMMAND_CLEAR,[])}render(){const{underlineColorAndroid:underlineColorAndroid,placeholderTextColor:placeholderTextColor,placeholderTextColors:placeholderTextColors}=this.props;let{props:props}=this;if(underlineColorAndroid||placeholderTextColor||placeholderTextColors){props=Object.assign({},this.props);if(underlineColorAndroid){if(props.style){props.style.underlineColorAndroid=underlineColorAndroid}else{props.style={underlineColorAndroid:underlineColorAndroid}}delete props.underlineColorAndroid}if(placeholderTextColor){if(props.style){props.style.placeholderTextColor=placeholderTextColor}else{props.style={placeholderTextColor:placeholderTextColor}}delete props.placeholderTextColor}if(placeholderTextColors){if(props.style){props.style.placeholderTextColors=placeholderTextColors}else{props.style={placeholderTextColors:placeholderTextColors}}delete props.placeholderTextColors}}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div ",_extends({nativeName:"TextInput "},props,{ref:ref=>{this._inputRef=ref},onChangeText:this._onChangeText,onEndEditing:this._onEndEditing,onBlur:this._onBlur,onFocus:this._onFocus,onSelectionChange:this._onSelectionChange,onKeyPress:this._onKeyPress,onKeyboardWillShow:this._onKeyboardWillShow}))}};__webpack_exports__["default "]=TextInput},". / node_modules / @tencent / hippy - react / lib / components / View / index.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";Object.defineProperty(__webpack_exports__,"__esModule ",{value:true});__webpack_require__.d(__webpack_exports__,"View ",(function(){return View}));var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(". / node_modules / react / index.js ");var __WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);var __WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / modules / UIManagerModule.js ");var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};let View=class View extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component{constructor(props){super(props);this.state={}}callUIModule(){__WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__["default "].callUIFunction(this,"testView ",["123 ",1])}render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div ",_extends({nativeName:"View "},this.props))}};__webpack_exports__["default "]=View},". / node_modules / @tencent / hippy - react / lib / components / ViewPager / index.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";Object.defineProperty(__webpack_exports__,"__esModule ",{value:true});__webpack_require__.d(__webpack_exports__,"ViewPager ",(function(){return ViewPager}));var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(". / node_modules / react / index.js ");var __WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);var __WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / modules / UIManagerModule.js ");var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};function ViewPagerItem(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div ",_extends({nativeName:"ViewPagerItem "},props,{style:{flex:1,position:"absolute ",left:0,top:0,right:0,bottom:0,width:undefined,height:undefined,collapsable:false}}))}let ViewPager=class ViewPager extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component{constructor(props){super(props);this.setPage=this.setPage.bind(this);this.setPageWithoutAnimation=this.setPageWithoutAnimation.bind(this)}setPage(selectedPage){if(typeof selectedPage!=="number "){return}__WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__["default "].callUIFunction(this,"setPage ",[selectedPage])}setPageWithoutAnimation(selectedPage){if(typeof selectedPage!=="number "){return}__WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__["default "].callUIFunction(this,"setPageWithoutAnimation ",[selectedPage])}_onPageScrollStateChanged(params){const{onPageScrollStateChanged:onPageScrollStateChanged}=this.props;if(typeof onPageScrollStateChanged==="function "&&typeof params.pageScrollState==="string "){onPageScrollStateChanged(params.pageScrollState)}}render(){const{children:viewPagerChildrens}=this.props;let mappedChildern=[];if(viewPagerChildrens!==undefined){mappedChildern=viewPagerChildrens.map(oneChild=>{let childKey;if(oneChild&&oneChild.key){childKey=`viewpager_${oneChild.key}`}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ViewPagerItem,{key:childKey},oneChild)})}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div ",_extends({nativeName:"ViewPager "},this.props,{onPageScrollStateChanged:this._onPageScrollStateChanged.bind(this)}),mappedChildern)}};__webpack_exports__["default "]=ViewPager},". / node_modules / @tencent / hippy - react / lib / components / WebView / index.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";Object.defineProperty(__webpack_exports__,"__esModule ",{value:true});__webpack_require__.d(__webpack_exports__,"WebView ",(function(){return WebView}));var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(". / node_modules / react / index.js ");var __WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};let WebView=class WebView extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component{constructor(props){super(props);this.state={}}render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p ",_extends({nativeName:"WebView "},this.props))}};__webpack_exports__["default "]=WebView},". / node_modules / @tencent / hippy - react / lib / event / EventDispatcher.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";Object.defineProperty(__webpack_exports__,"__esModule ",{value:true});var __WEBPACK_IMPORTED_MODULE_0__modules_UIManagerModule__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / modules / UIManagerModule.js ");let HippyEventHub=class HippyEventHub{constructor(event){this.handlerContainer={};this.nextIdForHandler=0;this.eventName=event;this._doNotifyEventListeners=this._doNotifyEventListeners.bind(this)}addEventHandler(handler,callContext){if(!handler){throw new TypeError("Invalid arguments ")}const currId=this.nextIdForHandler;this.nextIdForHandler+=1;const eventHandlerWrapper={id:currId,eventHandler:handler,context:callContext};const idAttrName=`eventHandler_${currId}`;this.handlerContainer[idAttrName]=eventHandlerWrapper;return currId}removeEventHandler(handlerId){if(typeof handlerId!=="number "){throw new TypeError("Invalid arguments ")}const idAttrName=`eventHandler_${handlerId}`;if(this.handlerContainer[idAttrName]){delete this.handlerContainer[idAttrName]}}notifyEvent(eventParams){this._doNotifyEventListeners(eventParams)}_doNotifyEventListeners(eventParams){Object.values(this.handlerContainer).forEach(wrapperInstance=>{if(wrapperInstance&&wrapperInstance.eventHandler){if(wrapperInstance.context){wrapperInstance.eventHandler.call(wrapperInstance.context,eventParams)}else{wrapperInstance.eventHandler(eventParams)}}})}getEventListeners(){const listeners=[];Object.values(this.handlerContainer).forEach(wrapperInstance=>{if(wrapperInstance){listeners.push(wrapperInstance)}});return listeners}getHandlerSize(){return Object.keys(this.handlerContainer).length}};__GLOBAL__.jsModuleList.EventDispatcher={_eventHub:{},registerNativeEventHub(event){if(typeof event!=="string "){throw new TypeError("Invalid arguments ")}if(!this._eventHub[event]){this._eventHub[event]=new HippyEventHub(event)}return this._eventHub[event]},getHippyEventHub(event){if(typeof event!=="string "){throw new TypeError("Invalid arguments ")}if(!this._eventHub[event]){return null}return this._eventHub[event]},unregisterNativeEventHub(event){if(typeof event!=="string "){throw new TypeError("Invalid arguments ")}if(this._eventHub[event]){delete this._eventHub[event]}},receiveNativeEvent(params){if(!params||!(params instanceof Array)||params.length<2){throw new TypeError("Invalid arguments ")}const eventName=params[0];if(typeof eventName!=="string "){throw new TypeError("Invalid arguments ")}let eventParams;if(params.length===2){[,eventParams]=params}const currEventHub=this.getHippyEventHub(eventName);if(currEventHub){currEventHub.notifyEvent(eventParams)}else{}},receiveNativeGesture(params){if(!params){throw new TypeError("Invalid arguments ")}const paramArray=[];if(!(params instanceof Array)){paramArray.push(params)}paramArray.forEach(iter=>{if(!iter){return}const viewTag=iter.id;const currNode=this._getNodeItemByTag(viewTag);if(currNode){try{this._iterateNodeTreeForNativeGesture(currNode,iter)}catch(e){console.reportUncaughtException(e)}}else{}})},receiveUIComponentEvent(params){if(!params||!(params instanceof Array)||params.length<2){throw new TypeError("Invalid arguments ")}const[nodeId,eventName,eventParam]=params;if(typeof nodeId!=="number "||typeof eventName!=="string "){throw new TypeError("Invalid arguments ")}const currNode=this._getNodeItemByTag(nodeId);if(currNode){if(currNode.memoizedProps&&currNode.memoizedProps[eventName]&&typeof currNode.memoizedProps[eventName]==="function "){currNode.memoizedProps[eventName](eventParam)}}else{}},_iterateNodeTreeForNativeGesture(oneNode,eventParam){let gestureType=eventParam.name;const callbackParam=eventParam;let eventHandled=false;let nextNodeItem=oneNode;do{let gestureHandleFunc;if(nextNodeItem.memoizedProps&&!nextNodeItem.memoizedProps[gestureType]&&gestureType==="onClick "&&nextNodeItem.memoizedProps.onPress){gestureType="onPress "}if(nextNodeItem.memoizedProps&&nextNodeItem.memoizedProps[gestureType]&&typeof nextNodeItem.memoizedProps[gestureType]==="function "){gestureHandleFunc=nextNodeItem.memoizedProps[gestureType];eventHandled=gestureHandleFunc(callbackParam)}if(typeof eventHandled!=="boolean "){eventHandled=true}if(eventHandled===false){nextNodeItem=nextNodeItem.return;while(nextNodeItem&&nextNodeItem.tag!==5){nextNodeItem=nextNodeItem.return}}}while(!eventHandled&&nextNodeItem)},_getNodeItemByTag(viewId){if(viewId===undefined||viewId===null||typeof viewId!=="number "){return undefined}return __WEBPACK_IMPORTED_MODULE_0__modules_UIManagerModule__["default "].getNodeById(viewId)}}},". / node_modules / @tencent / hippy - react / lib / event / HippyEventEmitter.js ":function(module,exports,__webpack_require__){(function(global){let EventEmitterRevoker=class EventEmitterRevoker{constructor(id,listener){this.callback=id;this.bindListner=listener}remove(){if(typeof this.callback!=="number "||!this.bindListner){return}this.bindListner.removeCallback(this.callback);delete this.bindListner}};const getNameForEvent=event=>{if(typeof event!=="string "){throw new TypeError("Invalid arguments ")}return`eventEmitter_${event}`};let HippyEventEmitter=class HippyEventEmitter{constructor(sharedListeners){if(sharedListeners&&typeof sharedListeners==="object "){this.hippyEventListeners=sharedListeners}else{this.hippyEventListeners={}}}sharedListeners(){return this.hippyEventListeners}addListener(event,callback,context){if(typeof event!=="string "||typeof callback!=="function "){throw new TypeError("Invalid arguments ")}let registedListener=this.hippyEventListeners[getNameForEvent(event)];if(!registedListener){registedListener=new Event.Listener(event);this.hippyEventListeners[getNameForEvent(event)]=registedListener}const listenerId=registedListener.addCallback(callback,context);if(typeof listenerId!=="number "){throw new Error("Fail to addCallback ")}return new EventEmitterRevoker(listenerId,registedListener)}removeAllListeners(event){if(typeof event!=="string "){throw new TypeError("Invalid arguments ")}const registedListener=this.hippyEventListeners[getNameForEvent(event)];if(registedListener){registedListener.unregister();delete this.hippyEventListeners[getNameForEvent(event)]}}static emit(event,param){if(typeof event!=="string "){return false}const eventHub=__GLOBAL__.jsModuleList.EventDispatcher.getHippyEventHub(event);if(!eventHub){return false}eventHub.notifyEvent(param);return true}listenerSize(event){if(typeof event!=="string "){throw new TypeError("Invalid arguments ")}const registedListener=this.hippyEventListeners[getNameForEvent(event)];if(registedListener){return registedListener.getSize()}return 0}};HippyEventEmitter.prototype.emit=HippyEventEmitter.emit;global.Event.Emitter=HippyEventEmitter}).call(exports,__webpack_require__(". / node_modules / hippy - pack / buildin / global.js "))},". / node_modules / @tencent / hippy - react / lib / event / HippyEventListener.js ":function(module,exports,__webpack_require__){(function(global){const getEventDispatcher=()=>__GLOBAL__.jsModuleList.EventDispatcher;let HippyEventListener=class HippyEventListener{constructor(event){this.eventName=event;this.listenerIds=[]}addCallback(handleFunc,callContext){if(typeof handleFunc!=="function "){throw new TypeError("Invalid arguments ")}const eventHub=getEventDispatcher().registerNativeEventHub(this.eventName);if(!eventHub){throw new ReferenceError(`No listeners for ${this.eventName}`)}const id=eventHub.addEventHandler(handleFunc,callContext);if(typeof id!=="number "){throw new Error("Fail to addEventHandler ")}this.listenerIds.push(id);return id}removeCallback(callbackId){if(typeof callbackId!=="number "){throw new TypeError("Invalid arguments ")}const eventHub=getEventDispatcher().getHippyEventHub(this.eventName);if(!eventHub){throw new ReferenceError(`No listeners for ${this.eventName}`)}eventHub.removeEventHandler(callbackId);const size=this.listenerIds.length;for(let i=0;i<size;i+=1){if(callbackId===this.listenerIds[i]){this.listenerIds.splice(i,1);break}}}unregister(){const size=this.listenerIds.length;const eventHub=getEventDispatcher().getHippyEventHub(this.eventName);if(!eventHub){throw new ReferenceError(`No listeners for ${this.eventName}`)}for(let i=0;i<size;i+=1){eventHub.removeEventHandler(this.listenerIds[i])}this.listenerIds=[];if(eventHub.getHandlerSize()===0){getEventDispatcher().unregisterNativeEventHub(this.eventName)}}getSize(){return this.listenerIds.length}};global.Event.Listener=HippyEventListener}).call(exports,__webpack_require__(". / node_modules / hippy - pack / buildin / global.js "))},". / node_modules / @tencent / hippy - react / lib / global.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";Object.defineProperty(__webpack_exports__,"__esModule ",{value:true});(function(global){global.Event={};if(!global.__GLOBAL__){global.__GLOBAL__={}}__GLOBAL__.nodeId=0;__GLOBAL__.animationId=0;__GLOBAL__.renderCount=0;__GLOBAL__.nodeDeleteIdCache={};function initGlobalCache(rootViewId){if(!__GLOBAL__.nodeIdCache[rootViewId]){__GLOBAL__.nodeIdCache[rootViewId]=[]}if(!__GLOBAL__.nodeParamCache[rootViewId]){__GLOBAL__.nodeParamCache[rootViewId]={}}if(!__GLOBAL__.nodeDeleteIdCache[rootViewId]){__GLOBAL__.nodeDeleteIdCache[rootViewId]={}}}__webpack_exports__["default "]=initGlobalCache}).call(__webpack_exports__,__webpack_require__(". / node_modules / hippy - pack / buildin / global.js "))},". / node_modules / @tencent / hippy - react / lib / hippy.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";Object.defineProperty(__webpack_exports__,"__esModule ",{value:true});__webpack_require__.d(__webpack_exports__,"Hippy ",(function(){return Hippy}));var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(". / node_modules / react / index.js ");var __WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);var __WEBPACK_IMPORTED_MODULE_1__hippyReactRender_index__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / hippyReactRender / index.js ");var __WEBPACK_IMPORTED_MODULE_2__native__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / native.js ");var __WEBPACK_IMPORTED_MODULE_3__global__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / global.js ");let Hippy=class Hippy{constructor(config){if(!config.appName||!config.entryPage){throw new TypeError("Invalid arguments ")}this.appName=config.appName;this.entryPage=config.entryPage;this.renderConfig=config.renderConfig||""}regist(){const{appName:appName}=this;const entryFunc=this.getEntryFunc();__WEBPACK_IMPORTED_MODULE_2__native__["HippyRegister "].regist(appName,entryFunc)}run(superProps){__WEBPACK_IMPORTED_MODULE_1__hippyReactRender_index__["HippyReactDOM "].render(this.appName,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(this.entryPage,superProps),this.renderConfig)}getEntryFunc(){return superProps=>{Object(__WEBPACK_IMPORTED_MODULE_3__global__["default "])(superProps.__instanceId__);__WEBPACK_IMPORTED_MODULE_1__hippyReactRender_index__["HippyReactDOM "].render(this.appName,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(this.entryPage,superProps),this.renderConfig)}}};__webpack_exports__["default "]=Hippy},". / node_modules / @tencent / hippy - react / lib / hippyReactRender / commitToRender.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";__webpack_require__.d(__webpack_exports__,"commitToRender ",(function(){return commitToRender}));var __WEBPACK_IMPORTED_MODULE_0__native_createNativeNode__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / hippyReactRender / native / createNativeNode.js ");var __WEBPACK_IMPORTED_MODULE_1__native_updateNativeNode__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / hippyReactRender / native / updateNativeNode.js ");var __WEBPACK_IMPORTED_MODULE_2__native_deleteNativeNode__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / hippyReactRender / native / deleteNativeNode.js ");const commitToRender=(type,nodeInfo)=>{switch(type){case"create ":Object(__WEBPACK_IMPORTED_MODULE_0__native_createNativeNode__["createNativeNode "])(nodeInfo);break;case"update ":Object(__WEBPACK_IMPORTED_MODULE_1__native_updateNativeNode__["updateNativeNode "])(nodeInfo);break;case"delete ":Object(__WEBPACK_IMPORTED_MODULE_2__native_deleteNativeNode__["deleteNativeNode "])(nodeInfo);break;default:break}};var _unused_webpack_default_export=commitToRender},". / node_modules / @tencent / hippy - react / lib / hippyReactRender / index.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";__webpack_require__.d(__webpack_exports__,"HippyReactDOM ",(function(){return HippyReactDOM}));var __WEBPACK_IMPORTED_MODULE_0__reactReconciler__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / hippyReactRender / reactReconciler.js ");const HippyReactDOM={render(containerName,appElement,renderConfig){const newRoot=__WEBPACK_IMPORTED_MODULE_0__reactReconciler__["DOMRenderer "].createContainer(containerName);__WEBPACK_IMPORTED_MODULE_0__reactReconciler__["DOMRenderer "].updateContainer(newRoot,appElement,null,null,renderConfig)}};var _unused_webpack_default_export=HippyReactDOM},". / node_modules / @tencent / hippy - react / lib / hippyReactRender / native / createNativeNode.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";__webpack_require__.d(__webpack_exports__,"createNativeNode ",(function(){return createNativeNode}));var __WEBPACK_IMPORTED_MODULE_0__transfer_colorParse_index__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / transfer / colorParse / index.js ");var __WEBPACK_IMPORTED_MODULE_1__deleteNativeNode__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / hippyReactRender / native / deleteNativeNode.js ");var __WEBPACK_IMPORTED_MODULE_2__util_Log__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / util / Log.js ");var __WEBPACK_IMPORTED_MODULE_3__modules_UIManagerModule__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / modules / UIManagerModule.js ");const getRootViewId=currentNode=>{let workNode=Object.assign({},currentNode);while(!(workNode&&workNode.memoizedProps&&typeof workNode.memoizedProps.__instanceId__!=="undefined ")){workNode=workNode.return}return workNode.memoizedProps.__instanceId__};const getNext=(currentNode,createNodeList,workedIdList)=>{if(currentNode==null||createNodeList.length>0&&currentNode._debugID===createNodeList[0].id&&(currentNode.child==null||workedIdList[currentNode.child._debugID])){return null}if(currentNode.child&&!workedIdList[currentNode.child._debugID]){return currentNode.child}if(currentNode.sibling&&!workedIdList[currentNode.sibling._debugID]){return currentNode.sibling}return getNext(currentNode.return,createNodeList,workedIdList)};const getWorkNode=(rootViewId,currentNode)=>{const nativeName=currentNode&&currentNode.memoizedProps&&currentNode.memoizedProps.nativeName||"";let tempNode=Object.assign({},currentNode);while(tempNode.return!=null&&tempNode.return.tag!==5){tempNode=tempNode.return}if(tempNode.type&&tempNode.type.name&&(tempNode.type.name==="View "||nativeName==="View ")&&Object.keys(tempNode.memoizedProps).length===0&&tempNode.return&&(tempNode.return.type==="p "||tempNode.return.memoizedProps&&tempNode.return.memoizedProps.nativeName==="Text ")){return false}if(tempNode.return==null){return{_debugID:currentNode._debugID,memoizedProps:currentNode.memoizedProps,name:nativeName||currentNode.return.type.name,index:0,pId:rootViewId}}if(tempNode.return.tag===5){let textHackIndex=0;if(tempNode.type&&tempNode.type.name&&(nativeName==="Text "||tempNode.type.name==="Text ")&&tempNode.return&&(tempNode.return.memoizedProps&&tempNode.return.memoizedProps.nativeName==="Text "||tempNode.return.type==="p ")){const targetId=tempNode._debugID;if(tempNode.return.child._debugID===targetId){textHackIndex=0}else{let targetNode=tempNode.return.child;while(targetNode!=null&&targetNode._debugID!==targetId){if(targetNode.type&&(targetNode.child&&targetNode.child.memoizedProps&&targetNode.child.memoizedProps.nativeName==="View "||targetNode.type.name==="View ")){textHackIndex+=1}targetNode=targetNode.sibling}}}return{_debugID:currentNode._debugID,memoizedProps:currentNode.memoizedProps,name:nativeName||currentNode.return.type.name,index:textHackIndex?tempNode.index-textHackIndex:tempNode.index,pId:tempNode.return._debugID}}return undefined};const _getProps=element=>{const elementProps=Object.assign({},element.memoizedProps);if(element.name==="Text "){if(typeof elementProps.children==="string "||typeof elementProps.children==="number "){if(elementProps.children&&typeof elementProps.children==="string "&&elementProps.children.indexOf("\\u ")>-1){elementProps.text=unescape(elementProps.children.replace(/\\u/g," % u "))}else{elementProps.text=String(elementProps.children)}}else if(Array.isArray(elementProps.children)){let hackText="";elementProps.children.forEach(item=>{if(typeof item==="string "||typeof item==="number "){hackText+=item}});if(hackText&&typeof hackText==="string "&&hackText.indexOf("\\u ")>-1){elementProps.text=unescape(hackText.replace(/\\u/g," % u "))}else{elementProps.text=String(hackText)}}else{elementProps.text=""}}delete elementProps.children;if(elementProps.src){const tempSrc=elementProps.src;delete elementProps.src;elementProps.src=tempSrc}else if(elementProps.srcs){const tempSrcs=elementProps.srcs;delete elementProps.srcs;elementProps.srcs=tempSrcs}if(elementProps.requestFocus){const temp=elementProps.requestFocus;delete elementProps.requestFocus;elementProps.requestFocus=temp}if(elementProps.style){const originStyle=Object.assign({},elementProps.style);const tempStyle={};delete elementProps.style;if(typeof elementProps.useAnimation!=="undefined "){delete elementProps.useAnimation;__WEBPACK_IMPORTED_MODULE_2__util_Log__["default "].error("useAnimation是sdk内部属性，请不要在业务里使用")}Object.entries(originStyle).forEach(([key,value])=>{if(["0 ","1 ","2 ","3 ","4 ","5 ","6 ","7 ","8 ","9 "].includes(key)){if(Array.isArray(value)){value.forEach(item=>{Object.assign(tempStyle,item)})}else{Object.assign(tempStyle,value)}}else{tempStyle[key]=value}});Object.entries(tempStyle).forEach(([key,value])=>{if(value&&Array.isArray(value)){value.forEach(item=>{if(typeof item==="object "){Object.entries(item).forEach(([childKey,childValue])=>{const item_=item;if(typeof childValue==="object "&&childValue!==null&&typeof childValue.animationId==="number "){item_[childKey]={animationId:childValue.animationId};elementProps.useAnimation=true}else if(childKey.indexOf("colors ")>-1||childKey.indexOf("Colors ")>-1){item_[childKey]=Object(__WEBPACK_IMPORTED_MODULE_0__transfer_colorParse_index__["colorArrayParse "])(childValue)}else if(childKey.indexOf("color ")>-1||childKey.indexOf("Color ")>-1){item_[childKey]=Object(__WEBPACK_IMPORTED_MODULE_0__transfer_colorParse_index__["colorParse "])(childValue)}})}else if(typeof value==="object "&&value!==null&&typeof value.animationId==="number "){tempStyle[key]={animationId:value.animationId};elementProps.useAnimation=true}else if(key.indexOf("colors ")>-1||key.indexOf("Colors ")>-1){tempStyle[key]=Object(__WEBPACK_IMPORTED_MODULE_0__transfer_colorParse_index__["colorArrayParse "])(value)}else if(key.indexOf("color ")>-1||key.indexOf("Color ")>-1){tempStyle[key]=Object(__WEBPACK_IMPORTED_MODULE_0__transfer_colorParse_index__["colorParse "])(value)}})}else if(typeof value==="object "&&value!==null&&typeof value.animationId==="number "){tempStyle[key]={animationId:value.animationId};elementProps.useAnimation=true}else if(key.indexOf("colors ")>-1||key.indexOf("Colors ")>-1){tempStyle[key]=Object(__WEBPACK_IMPORTED_MODULE_0__transfer_colorParse_index__["colorArrayParse "])(value)}else if(key.indexOf("color ")>-1||key.indexOf("Color ")>-1){tempStyle[key]=Object(__WEBPACK_IMPORTED_MODULE_0__transfer_colorParse_index__["colorParse "])(value)}});elementProps.style=tempStyle}Object.entries(elementProps).forEach(([key,value])=>{if(typeof value==="function "){if(key==="onPress "){elementProps.onClick=true}elementProps[key]=true}});return elementProps};const createNativeNodeInstance=element=>{const elementProps=_getProps(element);const{pId:pId,index:index,name:name,_debugID:id}=element;return{id:id,pId:pId,index:index,name:name,props:elementProps}};const createNodeWork=(rootViewId,currentNode,createNodeList,workedIdList,cacheNodeList,cacheIdList)=>{workedIdList[currentNode._debugID]=1;if(currentNode.tag===5){const workNode=getWorkNode(rootViewId,currentNode);if(workNode){if(__GLOBAL__.nodeTreeCache&&__GLOBAL__.nodeTreeCache[rootViewId]&&__GLOBAL__.nodeTreeCache[rootViewId][currentNode._debugID]){if(__GLOBAL__.nodeDeleteIdCache&&__GLOBAL__.nodeDeleteIdCache[rootViewId][currentNode._debugID]){__GLOBAL__.nodeDeleteIdCache[rootViewId][currentNode._debugID]=false}else{Object(__WEBPACK_IMPORTED_MODULE_1__deleteNativeNode__["deleteNativeNode "])({current:currentNode});__GLOBAL__.nodeDeleteIdCache[rootViewId][currentNode._debugID]=false}}const nativeNodeInfo=createNativeNodeInstance(workNode);createNodeList.push(nativeNodeInfo);const cacheNodeList_=cacheNodeList;cacheNodeList_[currentNode._debugID]={_debugID:currentNode._debugID,memoizedProps:currentNode.memoizedProps,child:currentNode.child,sibling:currentNode.sibling,return:currentNode.return,stateNode:currentNode.stateNode,ref:currentNode.ref};cacheIdList.push(currentNode._debugID);if(__GLOBAL__.nodeParamCache){if(!__GLOBAL__.nodeParamCache[rootViewId]){__GLOBAL__.nodeParamCache[rootViewId]={}}__GLOBAL__.nodeParamCache[rootViewId][nativeNodeInfo.id]=nativeNodeInfo}}}return getNext(currentNode,createNodeList,workedIdList)};const createNodeWorkLoop=(rootViewId,currentNode)=>{const workedIdList={};const createNodeList=[];const cacheNodeList=[];const cacheIdList=[];let currentNode_=currentNode;while(currentNode_!=null){currentNode_=createNodeWork(rootViewId,currentNode_,createNodeList,workedIdList,cacheNodeList,cacheIdList)}__WEBPACK_IMPORTED_MODULE_3__modules_UIManagerModule__["default "].setNodeTree(rootViewId,cacheNodeList);__WEBPACK_IMPORTED_MODULE_3__modules_UIManagerModule__["default "].setNodeId(rootViewId,cacheIdList);return createNodeList};const createNativeNode=nodeInfo=>{const currentNode=nodeInfo.nodeTree;const rootViewId=getRootViewId(currentNode);if(!__GLOBAL__.destroyInstanceList[rootViewId]){const createNodeList=createNodeWorkLoop(rootViewId,currentNode);if(createNodeList.length>0){__WEBPACK_IMPORTED_MODULE_3__modules_UIManagerModule__["default "].createNode(rootViewId,createNodeList)}}};var _unused_webpack_default_export=createNativeNode},". / node_modules / @tencent / hippy - react / lib / hippyReactRender / native / deleteNativeNode.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";__webpack_require__.d(__webpack_exports__,"deleteNativeNode ",(function(){return deleteNativeNode}));var __WEBPACK_IMPORTED_MODULE_0__modules_UIManagerModule__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / modules / UIManagerModule.js ");const getRootViewId=currentNode=>{let workNode=Object.assign({},currentNode);while(!(workNode&&workNode.memoizedProps&&typeof workNode.memoizedProps.__instanceId__!=="undefined ")){workNode=workNode.return}return workNode.memoizedProps.__instanceId__};const cleanNodeCache=(currentNode,rootViewId)=>{if(!currentNode){return}const{nodeParamCache:nodeParamCache,nodeTreeCache:nodeTreeCache,nodeIdCache:nodeIdCache}=__GLOBAL__;const{_debugID:targetNodeDebugId}=currentNode;if(currentNode.tag===5){__GLOBAL__.nodeDeleteIdCache[rootViewId][targetNodeDebugId]=true}if(nodeParamCache[rootViewId]&&nodeParamCache[rootViewId][targetNodeDebugId]){delete nodeParamCache[rootViewId][targetNodeDebugId]}if(nodeTreeCache[rootViewId]&&nodeTreeCache[rootViewId][targetNodeDebugId]){delete nodeTreeCache[rootViewId][targetNodeDebugId]}if(Array.isArray(nodeIdCache[rootViewId])){const index=nodeIdCache[rootViewId].indexOf(targetNodeDebugId);if(index!==-1){nodeIdCache[rootViewId].splice(index,1)}}};const deleteNodeWork=(currentNode,rootViewId)=>{if(!currentNode.child){return cleanNodeCache(currentNode,rootViewId)}let firstDeleteNode=currentNode;const tmpQueue=[currentNode];while(tmpQueue.length){const node=tmpQueue.shift();if(node!==firstDeleteNode){node.nextDeleteNode=firstDeleteNode;firstDeleteNode=node}firstDeleteNode=node;if(node.child){tmpQueue.push(node.child)}if(node.sibling){tmpQueue.push(node.sibling)}}let deleteNode=firstDeleteNode;while(deleteNode){cleanNodeCache(deleteNode,rootViewId);deleteNode=deleteNode.nextDeleteNode}return firstDeleteNode};const deleteNativeNode=nodeInfo=>{let{current:current}=nodeInfo;const rootViewId=getRootViewId(current);while(current!=null&&current.tag!==5){current=current.child}if(current!=null){const deleteNodeInfo={id:current._debugID};if(__GLOBAL__.nodeParamCache&&__GLOBAL__.nodeParamCache[rootViewId]&&__GLOBAL__.nodeParamCache[rootViewId][current._debugID]){Object.assign(deleteNodeInfo,{index:__GLOBAL__.nodeParamCache[rootViewId][current._debugID].index,pId:__GLOBAL__.nodeParamCache[rootViewId][current._debugID].pId})}const deleteQueue=[deleteNodeInfo];__WEBPACK_IMPORTED_MODULE_0__modules_UIManagerModule__["default "].deleteNode(rootViewId,deleteQueue);try{deleteNodeWork(current,rootViewId)}catch(err){}}};var _unused_webpack_default_export=deleteNativeNode},". / node_modules / @tencent / hippy - react / lib / hippyReactRender / native / updateNativeNode.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";__webpack_require__.d(__webpack_exports__,"updateNativeNode ",(function(){return updateNativeNode}));var __WEBPACK_IMPORTED_MODULE_0__transfer_colorParse_index__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / transfer / colorParse / index.js ");var __WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / modules / UIManagerModule.js ");const getRootViewId=currentNode=>{let workNode=Object.assign({},currentNode);while(!(workNode&&workNode.memoizedProps&&typeof workNode.memoizedProps.__instanceId__!=="undefined ")){workNode=workNode.return}return workNode.memoizedProps.__instanceId__};const updateNativeNode=nodeInfo=>{const{instance:instance}=nodeInfo;const newUpdateProps=Object.assign({},nodeInfo.finishedWork.memoizedProps);if(instance&&instance.type==="p "){if(typeof newUpdateProps.children==="string "||typeof newUpdateProps.children==="number "){if(newUpdateProps.children&&typeof newUpdateProps.children==="string "&&newUpdateProps.children.indexOf("\\u ")>-1){newUpdateProps.text=unescape(newUpdateProps.children.replace(/\\u/g," % u "))}else{newUpdateProps.text=String(newUpdateProps.children)}}else if(Array.isArray(newUpdateProps.children)){let hackText="";newUpdateProps.children.forEach(item=>{if(typeof item==="string "||typeof item==="number "){hackText=item}});if(hackText&&typeof hackText==="string "&&hackText.indexOf("\\u ")>-1){newUpdateProps.text=unescape(hackText.replace(/\\u/g," % u "))}else{newUpdateProps.text=String(hackText)}}else{newUpdateProps.text=""}delete newUpdateProps.children}else{delete newUpdateProps.children}const rootViewId=getRootViewId(instance);if(newUpdateProps.src){const tempSrc=newUpdateProps.src;delete newUpdateProps.src;newUpdateProps.src=tempSrc}else if(newUpdateProps.srcs){const tempSrcs=newUpdateProps.srcs;delete newUpdateProps.srcs;newUpdateProps.srcs=tempSrcs}if(newUpdateProps.requestFocus){const temp=newUpdateProps.requestFocus;delete newUpdateProps.requestFocus;newUpdateProps.requestFocus=temp}if(newUpdateProps.style){const originStyle=Object.assign({},newUpdateProps.style);const tempStyle={};delete newUpdateProps.style;Object.entries(originStyle).forEach(([key,value])=>{if(["0 ","1 ","2 ","3 ","4 ","5 ","6 ","7 ","8 ","9 "].includes(key)){if(Array.isArray(value)){value.forEach(item=>{Object.assign(tempStyle,item)})}else{Object.assign(tempStyle,value)}}else{tempStyle[key]=value}});Object.entries(tempStyle).forEach(([key,value])=>{if(value&&Array.isArray(value)){value.forEach(item=>{if(typeof item==="object "){const item_=item;Object.entries(item).forEach(([childKey,childValue])=>{if(typeof childValue==="object "&&childValue!==null&&typeof childValue.animationId==="number "){item_[childKey]={animationId:childValue.animationId};newUpdateProps.useAnimation=true}else if(childKey.indexOf("colors ")>-1||childKey.indexOf("Colors ")>-1){item_[childKey]=Object(__WEBPACK_IMPORTED_MODULE_0__transfer_colorParse_index__["colorArrayParse "])(childValue)}else if(childKey.indexOf("color ")>-1||childKey.indexOf("Color ")>-1){item_[childKey]=Object(__WEBPACK_IMPORTED_MODULE_0__transfer_colorParse_index__["colorParse "])(childValue)}})}else if(typeof value==="object "&&value!==null&&typeof value.animationId==="number "){tempStyle[key]={animationId:value.animationId};newUpdateProps.useAnimation=true}else if(key.indexOf("colors ")>-1||key.indexOf("Colors ")>-1){tempStyle[key]=Object(__WEBPACK_IMPORTED_MODULE_0__transfer_colorParse_index__["colorArrayParse "])(value)}else if(key.indexOf("color ")>-1||key.indexOf("Color ")>-1){tempStyle[key]=Object(__WEBPACK_IMPORTED_MODULE_0__transfer_colorParse_index__["colorParse "])(value)}})}else if(typeof value==="object "&&value!==null&&typeof value.animationId==="number "){tempStyle[key]={animationId:value.animationId};newUpdateProps.useAnimation=true}else if(key.indexOf("colors ")>-1||key.indexOf("Colors ")>-1){tempStyle[key]=Object(__WEBPACK_IMPORTED_MODULE_0__transfer_colorParse_index__["colorArrayParse "])(value)}else if(key.indexOf("color ")>-1||key.indexOf("Color ")>-1){tempStyle[key]=Object(__WEBPACK_IMPORTED_MODULE_0__transfer_colorParse_index__["colorParse "])(value)}});newUpdateProps.style=tempStyle}Object.entries(newUpdateProps).forEach(([key,value])=>{if(typeof value==="function "){if(key==="onPress "){newUpdateProps.onClick=true}newUpdateProps[key]=true}});const updateQueue=[{id:instance._debugID,name:instance.memoizedProps&&instance.memoizedProps.nativeName||instance.return.type.name,props:newUpdateProps}];if(!__GLOBAL__.nodeDeleteIdCache[rootViewId][instance._debugID]){__WEBPACK_IMPORTED_MODULE_1__modules_UIManagerModule__["default "].updateNode(rootViewId,updateQueue)}};var _unused_webpack_default_export=updateNativeNode},". / node_modules / @tencent / hippy - react / lib / hippyReactRender / reactReconciler.js ":function(module,__webpack_exports__,__webpack_require__){"use strict ";__webpack_require__.d(__webpack_exports__,"DOMRenderer ",(function(){return DOMRenderer}));var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__(". / node_modules / react / index.js ");var __WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);var __WEBPACK_IMPORTED_MODULE_1__commitToRender__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / hippyReactRender / commitToRender.js ");var __WEBPACK_IMPORTED_MODULE_2__components_View__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / components / View / index.js ");var __WEBPACK_IMPORTED_MODULE_3__util_Log__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / util / Log.js ");var __WEBPACK_IMPORTED_MODULE_4__modules_UIManagerModule__=__webpack_require__(". / node_modules / @tencent / hippy - react / lib / modules / UIManagerModule.js ");const emptyObject={};const hasOwnProperty=(obj,name)=>Object.prototype.hasOwnProperty.call(obj,name);let ROOT_VIEW_ID=0;let RENDER_LOCK="";const enableMutatingReconciler=true;const IndeterminateComponent=0;const FunctionalComponent=1;const ClassComponent=2;const HostRoot=3;const HostPortal=4;const HostComponent=5;const HostText=6;const CallComponent=7;const CallHandlerPhase=8;const ReturnComponent=9;const Fragment=10;const randomKey=Math.random().toString(36).slice(2);const internalInstanceKey=`__reactInternalInstance$${randomKey}`;const NoEffect=0;const PerformedWork=1;const NoWork=0;const Placement=2;const Update=4;const PlacementAndUpdate=6;const Deletion=8;const ContentReset=16;const Callback=32;const Err=64;const Ref=128;const enableAsyncSubtreeAPI=true;let isCommitting=false;const Sync=1;const Never=2147483647;const AsyncUpdates=1;let valueStack=[];let fiberStack=[];let index=-1;const createCursor=defaultValue=>({current:defaultValue});let previousContext=emptyObject;const contextStackCursor=createCursor(emptyObject);const didPerformWorkStackCursor=createCursor(false);const NO_CONTEXT={};let eventsEnabled=null;const onCommitFiberRoot=null;const DANGEROUSLY_SET_INNER_HTML="dangerouslySetInnerHTML ";const SUPPRESS_CONTENT_EDITABLE_WARNING="suppressContentEditableWarning ";const SUPPRESS_HYDRATION_WARNING$1="suppressHydrationWarning ";const AUTOFOCUS="autoFocus ";const CHILDREN="children ";const STYLE="style ";const HTML="__html ";const registrationNameModules={};let debugCounter=__GLOBAL__.nodeId;const getDebugCounter=()=>{debugCounter+=1;if(debugCounter%10===0){debugCounter+=1}if(debugCounter%10===ROOT_VIEW_ID){debugCounter+=1}return debugCounter};const DOCUMENT_NODE=9;const enableReactFragment=false;let REACT_ELEMENT_TYPE;let REACT_CALL_TYPE;let REACT_RETURN_TYPE;let REACT_FRAGMENT_TYPE;const REACT_PORTAL_TYPE=typeof Symbol==="function "&&Symbol.for&&Symbol.for("react.portal ")||60106;if(typeof Symbol==="function "&&Symbol.for){REACT_ELEMENT_TYPE=Symbol.for("react.element ");REACT_CALL_TYPE=Symbol.for("react.call ");REACT_RETURN_TYPE=Symbol.for("react.
                        return ");REACT_FRAGMENT_TYPE=Symbol.for("react.fragment ")}else{REACT_ELEMENT_TYPE=60103;REACT_CALL_TYPE=60104;REACT_RETURN_TYPE=60105;REACT_FRAGMENT_TYPE=60107}const ITERATOR_SYMBOL=typeof Symbol==="function "&&Symbol.iterator;const FAUX_ITERATOR_SYMBOL="@@iterator ";const MOUNTING=1;const MOUNTED=2;const UNMOUNTED=3;const fakeInternalInstance={};let _enabled=true;const ReactInternals=__WEBPACK_IMPORTED_MODULE_0_react___default.a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;const{ReactCurrentOwner:ReactCurrentOwner}=ReactInternals;const HTML_NAMESPACE$1="http: //www.w3.org/1999/xhtml";const MATH_NAMESPACE="http://www.w3.org/1998/Math/MathML";const SVG_NAMESPACE="http://www.w3.org/2000/svg";function isEqual(x,y){if(x===y){return x!==0||y!==0||1/x===1/y}return Number.isNaN(x)&&Number.isNaN(y)}function shallowEqual(objA,objB){if(isEqual(objA,objB)){return true}if(typeof objA!=="object"||objA===null||typeof objB!=="object"||objB===null){return false}const keysA=Object.keys(objA);const keysB=Object.keys(objB);if(keysA.length!==keysB.length){return false}for(let i=0;i<keysA.length;i+=1){if(!hasOwnProperty(objB,keysA[i])||!isEqual(objA[keysA[i]],objB[keysA[i]])){return false}}return true}const getRootViewId=currentNode=>{let workNode=Object.assign({},currentNode);while(!(workNode&&workNode.memoizedProps&&typeof workNode.memoizedProps.__instanceId__!=="undefined")){workNode=workNode.return}return workNode.memoizedProps.__instanceId__};function getIntrinsicNamespace(type){switch(type){case"svg":return SVG_NAMESPACE;case"math":return MATH_NAMESPACE;default:return HTML_NAMESPACE$1}}function getChildNamespace(parentNamespace,type){if(parentNamespace==null||parentNamespace===HTML_NAMESPACE$1){return getIntrinsicNamespace(type)}if(parentNamespace===SVG_NAMESPACE&&type==="foreignObject"){return HTML_NAMESPACE$1}return parentNamespace}const UNSAFE_LIFECYCLES={componentWillMount:"UNSAFE_componentWillMount",componentWillReceiveProps:"UNSAFE_componentWillReceiveProps",componentWillUpdate:"UNSAFE_componentWillUpdate"};function getUnsafeLifecycle(instance,func){if(!instance){return null}if(typeof instance[func]==="function"){return instance[func]}if(UNSAFE_LIFECYCLES[func]&&typeof instance[UNSAFE_LIFECYCLES[func]]==="function"){return instance[UNSAFE_LIFECYCLES[func]]}return null}function setEnabled(enabled){_enabled=!!enabled}function isEnabled(){return _enabled}function FiberNode(tag,key,internalContextTag){this.tag=tag;this.key=key||null;this.type=null;this.stateNode=null;this.return=null;this.child=null;this.sibling=null;this.index=0;this.ref=null;this.pendingProps=null;this.memoizedProps=null;this.updateQueue=null;this.memoizedState=null;this.internalContextTag=internalContextTag||0;this.effectTag=NoEffect;this.nextEffect=null;this.firstEffect=null;this.lastEffect=null;this.expirationTime=NoWork;this.alternate=null;this._debugID=getDebugCounter();this._debugSource=null;this._debugOwner=null;this._debugIsCurrentlyTiming=false}const createFiber=(tag,key)=>new FiberNode(tag,key);function createHostRootFiber(){const fiber=createFiber(HostRoot);return fiber}function createFiberRoot(containerName){const uninitializedFiber=createHostRootFiber();const containerInfo={id:__GLOBAL__.appRegister[containerName].id,name:containerName,superProps:__GLOBAL__.appRegister[containerName].superProps};const root={containerInfo:containerInfo,current:uninitializedFiber,pendingChildren:null,remainingExpirationTime:NoWork,isReadyForCommit:false,finishedWork:null,context:null,pendingContext:null,nextScheduledRoot:null};uninitializedFiber.stateNode=root;return root}function shouldConstruct(Component){return!!(Component.prototype&&Component.prototype.isReactComponent)}function createFiberFromElement(element,internalContextTag,expirationTime){let fiber;let{type:type}=element;const{key:key}=element;if(type&&type.default){type=type.default}if(typeof type==="function"){fiber=shouldConstruct(type)?createFiber(ClassComponent,key,internalContextTag):createFiber(IndeterminateComponent,key,internalContextTag);fiber.type=type;fiber.pendingProps=element.props}else if(typeof type==="string"){fiber=createFiber(HostComponent,key,internalContextTag);fiber.type=type;fiber.pendingProps=element.props}else if(typeof type==="object"&&type!==null&&typeof type.tag==="number"){fiber=type;fiber.pendingProps=element.props}if(!fiber){__WEBPACK_IMPORTED_MODULE_3__util_Log__["default"].error("render函数里存在一个undefine的UI！");return fiber}fiber.expirationTime=expirationTime;return fiber}function createFiberFromCall(call,internalContextTag,expirationTime){const fiber=createFiber(CallComponent,call.key,internalContextTag);fiber.type=call.handler;fiber.pendingProps=call;fiber.expirationTime=expirationTime;return fiber}function createFiberFromText(content,internalContextTag,expirationTime){const fiber=createFiber(HostText,null,internalContextTag);fiber.pendingProps=content;fiber.expirationTime=expirationTime;return fiber}function createFiberFromReturn(returnNode,internalContextTag,expirationTime){const fiber=createFiber(ReturnComponent,null,internalContextTag);fiber.expirationTime=expirationTime;return fiber}function createFiberFromPortal(portal,internalContextTag,expirationTime){const fiber=createFiber(HostPortal,portal.key,internalContextTag);fiber.pendingProps=portal.children||[];fiber.expirationTime=expirationTime;fiber.stateNode={containerInfo:portal.containerInfo,pendingChildren:null,implementation:portal.implementation};return fiber}function createFiberFromFragment(elements,internalContextTag,expirationTime,key){const fiber=createFiber(Fragment,key,internalContextTag);fiber.pendingProps=elements;fiber.expirationTime=expirationTime;return fiber}function createWorkInProgress(current,pendingProps,expirationTime){let workInProgress=current.alternate;if(workInProgress===null){workInProgress=createFiber(current.tag,current.key);workInProgress.type=current.type;workInProgress.stateNode=current.stateNode;workInProgress._debugID=current._debugID;workInProgress._debugSource=current._debugSource;workInProgress._debugOwner=current._debugOwner;workInProgress.alternate=current;const current_=current;current_.alternate=workInProgress}else{workInProgress.effectTag=NoEffect;workInProgress.nextEffect=null;workInProgress.firstEffect=null;workInProgress.lastEffect=null}workInProgress.expirationTime=expirationTime;workInProgress.pendingProps=pendingProps;workInProgress.child=current.child;workInProgress.memoizedProps=current.memoizedProps;workInProgress.memoizedState=current.memoizedState;workInProgress.updateQueue=current.updateQueue;workInProgress.sibling=current.sibling;workInProgress.index=current.index;workInProgress.ref=current.ref;return workInProgress}function cloneChildFibers(current,workInProgress){if(workInProgress.child===null||!workInProgress.child){return}let currentChild=workInProgress.child;let newChild=createWorkInProgress(currentChild,currentChild.pendingProps,currentChild.expirationTime);const workInProgress_=workInProgress;workInProgress_.child=newChild;newChild.return=workInProgress;while(currentChild.sibling!==null&&currentChild.sibling){currentChild=currentChild.sibling;newChild.sibling=createWorkInProgress(currentChild,currentChild.pendingProps,currentChild.expirationTime);newChild=newChild.sibling;newChild.return=workInProgress}newChild.sibling=null}function pop(cursor){if(index<0){return}const cursor_=cursor;cursor_.current=valueStack[index];valueStack[index]=null;fiberStack[index]=null;index-=1}function push(cursor,value,fiber){index+=1;valueStack[index]=cursor.current;fiberStack[index]=fiber;const cursor_=cursor;cursor_.current=value}function isContextProvider(fiber){const{type:type,tag:tag}=fiber;if(tag!==ClassComponent||type.childContextTypes==null){return false}if(typeof type.propTypes==="object"){return typeof type.propTypes.children==="function"}return true}function popContextProvider(fiber){if(!isContextProvider(fiber)){return}pop(didPerformWorkStackCursor);pop(contextStackCursor)}function popTopLevelContextObject(fiber){pop(didPerformWorkStackCursor,fiber);pop(contextStackCursor,fiber)}function pushTopLevelContextObject(fiber,context,didChange){push(contextStackCursor,context,fiber);push(didPerformWorkStackCursor,didChange,fiber)}function pushContextProvider(workInProgress){if(!isContextProvider(workInProgress)){return false}const instance=workInProgress.stateNode;const memoizedMergedChildContext=instance&&instance.__reactInternalMemoizedMergedChildContext||emptyObject;previousContext=contextStackCursor.current;push(contextStackCursor,memoizedMergedChildContext,workInProgress);push(didPerformWorkStackCursor,didPerformWorkStackCursor.current,workInProgress);return true}function processChildContext(fiber,parentContext){const instance=fiber.stateNode;if(typeof instance.getChildContext!=="function"){return parentContext}const childContext=instance.getChildContext();return Object.assign({},parentContext,childContext)}function invalidateContextProvider(workInProgress,didChange){const instance=workInProgress.stateNode;if(didChange){const mergedContext=processChildContext(workInProgress,previousContext);instance.__reactInternalMemoizedMergedChildContext=mergedContext;pop(didPerformWorkStackCursor,workInProgress);pop(contextStackCursor,workInProgress);push(contextStackCursor,mergedContext,workInProgress);push(didPerformWorkStackCursor,didChange,workInProgress)}else{pop(didPerformWorkStackCursor,workInProgress);push(didPerformWorkStackCursor,didChange,workInProgress)}}function getUnmaskedContext(workInProgress){const hasOwnContext=isContextProvider(workInProgress);if(hasOwnContext){return previousContext}return contextStackCursor.current}function cacheContext(workInProgress,unmaskedContext,maskedContext){const instance=workInProgress.stateNode;instance.__reactInternalMemoizedUnmaskedChildContext=unmaskedContext;instance.__reactInternalMemoizedMaskedChildContext=maskedContext}function getMaskedContext(workInProgress,unmaskedContext){const{type:type}=workInProgress;const{contextTypes:contextTypes}=type;if(!contextTypes){return emptyObject}const instance=workInProgress.stateNode;if(instance&&instance.__reactInternalMemoizedUnmaskedChildContext===unmaskedContext){return instance.__reactInternalMemoizedMaskedChildContext}const context={};Object.keys(contextTypes).forEach(key=>{context[key]=unmaskedContext[key]});if(instance){cacheContext(workInProgress,unmaskedContext,context)}return context}function hasContextChanged(){return didPerformWorkStackCursor.current}function getContextForSubtree(parentComponent){if(!parentComponent){return emptyObject}return undefined}const now=()=>Date.now();function msToExpirationTime(ms){const UNIT_SIZE=10;const MAGIC_NUMBER_OFFSET=2;return(ms/UNIT_SIZE|0)+MAGIC_NUMBER_OFFSET}function ceiling(num,precision){return((num/precision|0)+1)*precision}function computeExpirationBucket(currentTime,expirationInMs,bucketSizeMs){const UNIT_SIZE=10;return ceiling(currentTime+expirationInMs/UNIT_SIZE,bucketSizeMs/UNIT_SIZE)}function getStateFromUpdate(update,instance,prevState,props){const{partialState:partialState}=update;if(typeof partialState==="function"){const updateFn=partialState;return updateFn.call(instance,prevState,props)}return partialState}function processUpdateQueue(current,workInProgress,queue,instance,props,renderExpirationTime){let queue_=queue;const workInProgress_=workInProgress;if(current!==null&&current.updateQueue===queue_){queue_={baseState:queue_.baseState,expirationTime:queue_.expirationTime,first:queue_.first,last:queue_.last,isInitialized:queue_.isInitialized,callbackList:null,hasForceUpdate:false};workInProgress_.updateQueue=queue_}queue_.isProcessing=true;queue_.expirationTime=NoWork;let state;if(queue_.isInitialized){state=queue_.baseState}else{queue_.baseState=workInProgress.memoizedState;state=queue_.baseState;queue_.isInitialized=true}let dontMutatePrevState=true;let update=queue_.first;let didSkip=false;while(update!==null){const updateExpirationTime=update.expirationTime;if(updateExpirationTime>renderExpirationTime){const remainingExpirationTime=queue_.expirationTime;if(remainingExpirationTime===NoWork||remainingExpirationTime>updateExpirationTime){queue_.expirationTime=updateExpirationTime}if(!didSkip){didSkip=true;queue_.baseState=state}}else{if(!didSkip){queue_.first=update.next;if(queue_.first===null){queue_.last=null}}let _partialState;if(update.isReplace){state=getStateFromUpdate(update,instance,state,props);dontMutatePrevState=true}else{_partialState=getStateFromUpdate(update,instance,state,props);if(_partialState){if(dontMutatePrevState){state=Object.assign({},state,_partialState)}else{state=Object.assign(state,_partialState)}dontMutatePrevState=false}}if(update.isForced){queue_.hasForceUpdate=true}if(update.callback!==null){let _callbackList=queue_.callbackList;if(_callbackList===null){queue_.callbackList=[];_callbackList=queue_.callbackList}_callbackList.push(update)}}update=update.next}if(queue_.callbackList!==null){workInProgress_.effectTag|=Callback}else if(queue_.first===null&&!queue_.hasForceUpdate){workInProgress_.updateQueue=null}if(!didSkip){didSkip=true;queue_.baseState=state}queue_.isProcessing=false;return state}function commitCallbacks(queue,context){const{callbackList:callbackList}=queue;if(callbackList===null){return}const _queue=queue;_queue.callbackList=null;for(let i=0;i<callbackList.length;i+=1){const update=callbackList[i];const _callback=update.callback;update.callback=null;_callback.call(context)}}function isContextConsumer(fiber){return fiber.tag===ClassComponent&&fiber.type.contextTypes!=null}function reset$1(){while(index>-1){valueStack[index]=null;fiberStack[index]=null;index-=1}}function resetContext(){previousContext=emptyObject;contextStackCursor.current=emptyObject;didPerformWorkStackCursor.current=false}function getOwnerDocumentFromRootContainer(rootContainerElement){return rootContainerElement.nodeType===DOCUMENT_NODE?rootContainerElement:rootContainerElement.ownerDocument}function createTextNode(text,rootContainerElement){const ownerDocumentFromRootContainer=getOwnerDocumentFromRootContainer(rootContainerElement);return ownerDocumentFromRootContainer?ownerDocumentFromRootContainer.createTextNode(text):null}function precacheFiberNode(hostInst,node){const node_=node;node_[internalInstanceKey]=hostInst}function coerceRef(current,element){const mixedRef=element.ref;if(mixedRef!==null&&typeof mixedRef!=="function"){if(element._owner){const owner=element._owner;let inst;if(owner){const ownerFiber=owner;inst=ownerFiber.stateNode}const stringRef=`${mixedRef}`;if(current!==null&&current.ref!==null&&current.ref._stringRef===stringRef){return current.ref}const ref=value=>{const refs=inst.refs===emptyObject?inst.refs={}:inst.refs;if(value===null){delete refs[stringRef]}else{refs[stringRef]=value}};ref._stringRef=stringRef;return ref}}return mixedRef}function getUpdateExpirationTime(fiber){if(fiber.tag!==ClassComponent&&fiber.tag!==HostRoot){return NoWork}const{updateQueue:updateQueue}=fiber;if(updateQueue===null){return NoWork}return updateQueue.expirationTime}function isFiberMountedImpl(fiber){let node=fiber;if(!fiber.alternate){if((node.effectTag&Placement)!==NoEffect){return MOUNTING}while(node.return){node=node.return;if((node.effectTag&Placement)!==NoEffect){return MOUNTING}}}else{while(node.return){node=node.return}}if(node.tag===HostRoot){return MOUNTED}return UNMOUNTED}function get(key){return key._reactInternalFiber}function set(key,value){const key_=key;key_._reactInternalFiber=value}function isMounted(component){const fiber=get(component);if(!fiber){return false}return isFiberMountedImpl(fiber)===MOUNTED}function stopWorkLoopTimer(){fiberStack=[];valueStack=[]}function createUpdateQueue(baseState){const queue={baseState:baseState,expirationTime:NoWork,first:null,last:null,callbackList:null,hasForceUpdate:false,isInitialized:false};queue.isProcessing=false;return queue}function insertUpdateIntoQueue(queue,update){const _queue=queue;if(_queue.last===null){_queue.last=update;_queue.first=_queue.last}else{_queue.last.next=update;_queue.last=update}if(_queue.expirationTime===NoWork||_queue.expirationTime>update.expirationTime){_queue.expirationTime=update.expirationTime}}function insertUpdateIntoFiber(fiber,update){const alternateFiber=fiber.alternate;let queue1=fiber.updateQueue;if(queue1===null){const fiber_=fiber;fiber_.updateQueue=createUpdateQueue(null);queue1=fiber.updateQueue}let queue2;if(alternateFiber!==null){queue2=alternateFiber.updateQueue;if(queue2===null){alternateFiber.updateQueue=createUpdateQueue(null);queue2=alternateFiber.updateQueue}}else{queue2=null}queue2=queue2!==queue1?queue2:null;if(queue2===null){insertUpdateIntoQueue(queue1,update);return}if(queue1.last===null||queue2.last===null){insertUpdateIntoQueue(queue1,update);insertUpdateIntoQueue(queue2,update);return}insertUpdateIntoQueue(queue1,update);queue2.last=update}function onCommitRoot(root){if(typeof onCommitFiberRoot==="function"){onCommitFiberRoot(root)}}function getIteratorFn(maybeIterable){if(maybeIterable===null||typeof maybeIterable==="undefined"){return null}const iteratorFn=ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL];if(typeof iteratorFn==="function"){return iteratorFn}return null}const diffProperties=(lastRawProps,nextRawProps)=>{let updatePayload=null;let lastProps;try{if(lastRawProps&&lastRawProps.style&&Array.isArray(lastRawProps.style)){lastProps={};Object.assign(lastProps,lastRawProps);delete lastProps.style;lastProps.style={};lastRawProps.style.forEach(item=>{Object.assign(lastProps.style,item)})}else{lastProps=lastRawProps}}catch(e){lastProps=lastRawProps}let nextProps;try{if(nextRawProps&&nextRawProps.style&&Array.isArray(nextRawProps.style)){nextProps={};Object.assign(nextProps,nextRawProps);delete nextProps.style;nextProps.style={};nextRawProps.style.forEach(item=>{Object.assign(nextProps.style,item)})}else{nextProps=nextRawProps}}catch(e){nextProps=nextRawProps}let styleUpdates=null;Object.keys(lastProps).forEach(propKey=>{if(hasOwnProperty(nextProps,propKey)||lastProps[propKey]==null){return}if(propKey===STYLE){const lastStyle=lastProps[propKey];Object.keys(lastStyle).forEach(styleName=>{if(!styleUpdates){styleUpdates={}}styleUpdates[styleName]=""})}else if(propKey===DANGEROUSLY_SET_INNER_HTML||propKey===CHILDREN){}else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING||propKey===SUPPRESS_HYDRATION_WARNING$1){}else if(propKey===AUTOFOCUS){}else if(hasOwnProperty(registrationNameModules,propKey)){if(!updatePayload){updatePayload=[]}}else{(updatePayload=updatePayload||[]).push(propKey,null)}});Object.keys(nextProps).forEach(propKey=>{const nextProp=nextProps[propKey];const lastProp=lastProps!=null?lastProps[propKey]:undefined;if(nextProp===lastProp||nextProp==null&&lastProp==null){return}if(propKey===STYLE){if(nextProp){Object.freeze(nextProp)}if(lastProp){Object.keys(lastProp).forEach(styleName=>{if(!nextProp||!hasOwnProperty(nextProp,styleName)){if(!styleUpdates){styleUpdates={}}styleUpdates[styleName]=""}});if(typeof nextProp==="object"&&nextProp!==null){Object.keys(nextProp).forEach(styleName=>{if(typeof nextProp[styleName]==="object"){const styleDiff=(nextStyle,lastStyle)=>{if(typeof nextStyle==="object"&&nextStyle!==null&&lastStyle!==null){if(typeof nextStyle===typeof lastStyle){if(Array.isArray(nextStyle)){if(Array.isArray(lastStyle)&&nextStyle.length===lastStyle.length){let diffRes=false;nextStyle.forEach((item,idx)=>{if(styleDiff(item,lastStyle[idx])){diffRes=true}});return diffRes}return true}let diffRes=false;Object.entries(nextStyle).forEach(([key,value])=>{if(styleDiff(value,lastStyle[key])){diffRes=true}});return diffRes}return true}if(nextStyle!==lastStyle){return true}return false};const isStyleDiff=styleDiff(nextProp[styleName],lastProp[styleName]);if(isStyleDiff){if(!styleUpdates){styleUpdates={}}styleUpdates[styleName]=nextProp[styleName]}}else if(lastProp[styleName]!==nextProp[styleName]){if(!styleUpdates){styleUpdates={}}styleUpdates[styleName]=nextProp[styleName]}})}}else{if(!styleUpdates){if(!updatePayload){updatePayload=[]}updatePayload.push(propKey,styleUpdates)}styleUpdates=nextProp}}else if(propKey===DANGEROUSLY_SET_INNER_HTML){const nextHtml=nextProp?nextProp[HTML]:undefined;const lastHtml=lastProp?lastProp[HTML]:undefined;if(nextHtml!=null){if(lastHtml!==nextHtml){(updatePayload=updatePayload||[]).push(propKey,`${nextHtml}`)}}}else if(propKey===CHILDREN){if(lastProp!==nextProp&&(typeof nextProp==="string"||typeof nextProp==="number")){(updatePayload=updatePayload||[]).push(propKey,`${nextProp}`)}}else if(propKey===SUPPRESS_CONTENT_EDITABLE_WARNING||propKey===SUPPRESS_HYDRATION_WARNING$1){}else if(hasOwnProperty(registrationNameModules,propKey)){if(!updatePayload&&lastProp!==nextProp){updatePayload=[]}}else if(typeof nextProp==="function"&&typeof lastProp==="function"&&nextProp.name===lastProp.name){}else if(typeof nextProp==="object"&&typeof lastProp==="object"){const propsDiff=(nextProp_,lastProp_)=>{if(typeof nextProp_==="object"&&nextProp_!=null&&lastProp_!=null){if(typeof nextProp_===typeof lastProp_){if(Array.isArray(nextProp_)){if(Array.isArray(lastProp_)&&nextProp_.length===lastProp_.length){let diffRes=false;nextProp_.forEach((item,idx)=>{if(propsDiff(item,lastProp_[idx])){diffRes=true}});return diffRes}return true}let diffRes=false;Object.entries(nextProp_).forEach(([key,value])=>{if(propsDiff(value,lastProp_[key])){diffRes=true}});return diffRes}return true}if(nextProp_!==lastProp_){return true}return false};const isPropsDiff=propsDiff(nextProp,lastProp);if(isPropsDiff){(updatePayload=updatePayload||[]).push(propKey,nextProp)}}else if(nextProp!==lastProp){(updatePayload=updatePayload||[]).push(propKey,nextProp)}});if(styleUpdates){(updatePayload=updatePayload||[]).push(STYLE,styleUpdates)}return updatePayload};const ReactFiberHostContext=config=>{const{getChildHostContext:getChildHostContext,getRootHostContext:getRootHostContext}=config;const contextStackCursor_=createCursor(NO_CONTEXT);const contextFiberStackCursor=createCursor(NO_CONTEXT);const rootInstanceStackCursor=createCursor(NO_CONTEXT);function resetHostContainer(){contextStackCursor_.current=NO_CONTEXT;rootInstanceStackCursor.current=NO_CONTEXT}function pushHostContainer(fiber,nextRootInstance){push(rootInstanceStackCursor,nextRootInstance,fiber);const nextRootContext=getRootHostContext(nextRootInstance);push(contextFiberStackCursor,fiber,fiber);push(contextStackCursor_,nextRootContext,fiber)}function popHostContainer(fiber){pop(contextStackCursor_,fiber);pop(contextFiberStackCursor,fiber);pop(rootInstanceStackCursor,fiber)}function getRootHostContainer(){return rootInstanceStackCursor.current}function getHostContext(){return contextStackCursor_.current}function pushHostContext(fiber){const rootInstance=rootInstanceStackCursor.current;const context=contextStackCursor_.current;const nextContext=getChildHostContext(context,fiber.type,rootInstance);if(context===nextContext){return}push(contextFiberStackCursor,fiber,fiber);push(contextStackCursor_,nextContext,fiber)}return{resetHostContainer:resetHostContainer,pushHostContainer:pushHostContainer,pushHostContext:pushHostContext,popHostContainer:popHostContainer,getRootHostContainer:getRootHostContainer,getHostContext:getHostContext}};const ReactFiberCommitWork=config=>{const{mutation:{resetTextContent:resetTextContent,commitMount:commitMount},getPublicInstance:getPublicInstance}=config;function isHostParent(fiber){return fiber.tag===HostComponent||fiber.tag===HostRoot||fiber.tag===HostPortal}function getHostParentFiber(fiber){let parent=fiber.return;while(parent!==null){if(isHostParent(parent)){return parent}parent=parent.return}return undefined}function getHostSibling(fiber){let node=fiber;for(;;){while(node.sibling===null){if(node.return===null||isHostParent(node.return)){return null}node=node.return}node.sibling.return=node.return;node=node.sibling;let bContinue=false;while(node.tag!==HostComponent&&node.tag!==HostText){if(node.effectTag&Placement){bContinue=true;break}else if(node.child===null||node.tag===HostPortal){bContinue=true;break}else{node.child.return=node;node=node.child}}if(bContinue===false&&!(node.effectTag&Placement)){return node.stateNode}}}function commitDetachRef(current){const currentRef=current.ref;if(currentRef!==null){currentRef(null)}}function commitLifeCycles(current,finishedWork){switch(finishedWork.tag){case ClassComponent:{const instance=finishedWork.stateNode;if(finishedWork.effectTag&Update){if(current===null){instance.props=finishedWork.memoizedProps;instance.state=finishedWork.memoizedState;instance.componentDidMount()}else{const prevProps=current.memoizedProps;const prevState=current.memoizedState;instance.props=finishedWork.memoizedProps;instance.state=finishedWork.memoizedState;instance.componentDidUpdate(prevProps,prevState)}}const{updateQueue:updateQueue}=finishedWork;if(updateQueue!==null){commitCallbacks(updateQueue,instance)}break}case HostRoot:{const _updateQueue=finishedWork.updateQueue;if(_updateQueue!==null){const _instance=finishedWork.child!==null?finishedWork.child.stateNode:null;commitCallbacks(_updateQueue,_instance)}break}case HostComponent:{const _instance2=finishedWork.stateNode;if(current===null&&finishedWork.effectTag&Update){const{type:type}=finishedWork;const props=finishedWork.memoizedProps;commitMount(_instance2,type,props,finishedWork)}break}default:{break}}}function commitAttachRef(finishedWork){const{ref:ref}=finishedWork;if(ref!==null&&typeof ref==="function"){const instance=finishedWork.stateNode;switch(finishedWork.tag){case HostComponent:ref(getPublicInstance(instance));break;default:ref(instance)}}}function commitResetTextContent(current){resetTextContent(current.stateNode)}function commitPlacement(finishedWork){const parentFiber=getHostParentFiber(finishedWork);let parent;switch(parentFiber.tag){case HostComponent:parent=parentFiber.stateNode;break;case HostRoot:parent=parentFiber.stateNode.containerInfo;break;case HostPortal:parent=parentFiber.stateNode.containerInfo;break;default:break}const before=getHostSibling(finishedWork);let node=finishedWork;for(;;){let bContinue=false;if(node.tag===HostComponent||node.tag===HostText){Object(__WEBPACK_IMPORTED_MODULE_1__commitToRender__["commitToRender"])("create",{node:node,parent:parent,before:before,nodeTree:node})}else if(node.tag===HostPortal){}else if(node.child!==null){node.child.return=node;node=node.child;bContinue=true}if(!bContinue){if(node===finishedWork){return}while(node.sibling===null){if(node.return===null||node.return===finishedWork){return}node=node.return}node.sibling.return=node.return;node=node.sibling}}}const commitWork=(current,finishedWork)=>{switch(finishedWork.tag){case HostComponent:{const instance=finishedWork.stateNode;if(instance!=null){const newProps=finishedWork.memoizedProps;const oldProps=current!==null?current.memoizedProps:newProps;const{type:type}=finishedWork;const updatePayload=finishedWork.updateQueue;const finishedWork_=finishedWork;finishedWork_.updateQueue=null;if(updatePayload!==null){Object(__WEBPACK_IMPORTED_MODULE_1__commitToRender__["commitToRender"])("update",{instance:instance,updatePayload:updatePayload,type:type,oldProps:oldProps,newProps:newProps,finishedWork:finishedWork})}}break}default:{break}}};function safelyDetachRef(current){const{ref:ref}=current;if(ref!==null&&typeof ref==="function"){try{ref()}catch(e){__WEBPACK_IMPORTED_MODULE_3__util_Log__["default"].error(e)}}}function commitUnmount(current){Object(__WEBPACK_IMPORTED_MODULE_1__commitToRender__["commitToRender"])("delete",{current:current});const deleteNodeWork=root=>{let node=root;while(true){const instance=node.stateNode;if(instance&&typeof instance.componentWillUnmount==="function"){try{instance.componentWillUnmount()}catch(e){__WEBPACK_IMPORTED_MODULE_3__util_Log__["default"].error(e)}}safelyDetachRef(node);node.firstEffect=null;node.lastEffect=null;if(node.child!==null){node.child.return=node;node=node.child;continue}if(node===root){return}while(node.sibling===null){if(node.return===null||node.return===root){return}node=node.return}node.sibling.return=node.return;node=node.sibling}};switch(current.tag){case ClassComponent:{deleteNodeWork(current);break}case HostComponent:{safelyDetachRef(current);break}case CallComponent:{deleteNodeWork(current);break}default:{break}}}function detachFiber(current){const current_=current;current_.return=null;current_.child=null;if(current_.alternate){current_.alternate.child=null;current_.alternate.return=null}}function commitDeletion(current){commitUnmount(current);detachFiber(current)}return{commitResetTextContent:commitResetTextContent,commitDetachRef:commitDetachRef,commitPlacement:commitPlacement,commitWork:commitWork,commitDeletion:commitDeletion,commitLifeCycles:commitLifeCycles,commitAttachRef:commitAttachRef}};const ReactFiberClassComponent=(scheduleWork,computeExpirationForFiber,memoizeProps,memoizeState)=>{const updater={isMounted:isMounted,enqueueSetState(instance,partialState,callback){const fiber=get(instance);const expirationTime=computeExpirationForFiber(fiber);const update={expirationTime:expirationTime,partialState:partialState,callback:callback===undefined?null:callback,isReplace:false,isForced:false,nextCallback:null,next:null};insertUpdateIntoFiber(fiber,update);scheduleWork(fiber,expirationTime)},enqueueReplaceState(instance,state,callback){const fiber=get(instance);const expirationTime=computeExpirationForFiber(fiber);const update={expirationTime:expirationTime,partialState:state,callback:callback===undefined?null:callback,isReplace:true,isForced:false,nextCallback:null,next:null};insertUpdateIntoFiber(fiber,update);scheduleWork(fiber,expirationTime)},enqueueForceUpdate(instance,callback){const fiber=get(instance);const expirationTime=computeExpirationForFiber(fiber);const update={expirationTime:expirationTime,partialState:null,callback:callback===undefined?null:callback,isReplace:false,isForced:true,nextCallback:null,next:null};insertUpdateIntoFiber(fiber,update);scheduleWork(fiber,expirationTime)}};const setNativePropsFunc=(instance,newProps)=>{if(instance&&instance._reactInternalFiber&&instance._reactInternalFiber.child){let targetNode=instance._reactInternalFiber.child;while(targetNode.tag!==5){targetNode=targetNode.child}const nodeId=targetNode._debugID;const rootViewId=getRootViewId(targetNode);if(!__GLOBAL__.nodeDeleteIdCache[rootViewId][nodeId]){const currentInstance=Object.assign({},targetNode);const finishedWorkInstance=Object.assign({},targetNode);const newProps_=newProps;const newSrc=newProps_.src;const newSource=newProps_.source;delete newProps_.src;delete newProps_.source;delete newProps_.value;let newStyle;if(finishedWorkInstance.memoizedProps.style){if(newProps_.style){newStyle=Object.assign({},finishedWorkInstance.memoizedProps.style,newProps_.style);delete newProps_.style}else{newStyle=Object.assign({},finishedWorkInstance.memoizedProps.style,newProps_)}}else if(newProps_.style){newStyle=newProps_.style;delete newProps_.style}else{newStyle=newProps_}const finishedNewProps=Object.assign({},finishedWorkInstance.memoizedProps);if(newSrc){finishedNewProps.src=newSrc}if(newSource){finishedNewProps.source=newSource}delete finishedNewProps.style;finishedNewProps.style=newStyle;delete finishedWorkInstance.memoizedProps;finishedWorkInstance.memoizedProps=finishedNewProps;__GLOBAL__.renderCount+=1;if(__GLOBAL__.renderCount>1e4){__GLOBAL__.renderCount=0}const renderId=`${Date.now()+__GLOBAL__.renderCount}`;if(!RENDER_LOCK){__WEBPACK_IMPORTED_MODULE_4__modules_UIManagerModule__["default"].startBatch(renderId);RENDER_LOCK=renderId}try{Object(__WEBPACK_IMPORTED_MODULE_1__commitToRender__["commitToRender"])("update",{instance:currentInstance,finishedWork:finishedWorkInstance})}catch(e){__WEBPACK_IMPORTED_MODULE_4__modules_UIManagerModule__["default"].sendRenderError(e)}if(RENDER_LOCK===renderId){__WEBPACK_IMPORTED_MODULE_4__modules_UIManagerModule__["default"].endBatch(renderId);RENDER_LOCK=""}if(__GLOBAL__&&__GLOBAL__.nodeTreeCache&&__GLOBAL__.nodeTreeCache[rootViewId]&&__GLOBAL__.nodeTreeCache[rootViewId][currentInstance._debugID]){if(!__GLOBAL__.destroyInstanceList[rootViewId]){delete __GLOBAL__.nodeTreeCache[rootViewId][currentInstance._debugID];__GLOBAL__.nodeTreeCache[rootViewId][currentInstance._debugID]={_debugID:finishedWorkInstance._debugID,memoizedProps:finishedWorkInstance.memoizedProps,child:finishedWorkInstance.child,sibling:finishedWorkInstance.sibling,return:finishedWorkInstance.return,stateNode:finishedWorkInstance.stateNode,ref:finishedWorkInstance.ref}}}}}};function checkShouldComponentUpdate(workInProgress,oldProps,newProps,oldState,newState,newContext){if(oldProps===null||workInProgress.updateQueue!==null&&workInProgress.updateQueue.hasForceUpdate){return true}const instance=workInProgress.stateNode;const{type:type}=workInProgress;if(typeof instance.shouldComponentUpdate==="function"){const shouldUpdate=instance.shouldComponentUpdate(newProps,newState,newContext);return shouldUpdate}if(type.prototype&&type.prototype.isPureReactComponent){return!shallowEqual(oldProps,newProps)||!shallowEqual(oldState,newState)}return true}function resetInputPointers(workInProgress,instance){const instance_=instance;instance_.props=workInProgress.memoizedProps;instance_.state=workInProgress.memoizedState}function adoptClassInstance(workInProgress,instance){const instance_=instance;if(instance_){instance_.updater=updater;instance_.setNativeProps=newProps=>{setNativePropsFunc(instance_,newProps)};const workInProgress_=workInProgress;workInProgress_.stateNode=instance_;set(instance_,workInProgress);instance_._reactInternalInstance=fakeInternalInstance}}function constructClassInstance(workInProgress,props){const Ctor=workInProgress.type;const unmaskedContext=getUnmaskedContext(workInProgress);const needsContext=isContextConsumer(workInProgress);const context=needsContext?getMaskedContext(workInProgress,unmaskedContext):emptyObject;const instance=new Ctor(props,context);adoptClassInstance(workInProgress,instance);if(needsContext){cacheContext(workInProgress,unmaskedContext,context)}return instance}function callComponentWillMount(workInProgress,instance){const oldState=instance.state;getUnsafeLifecycle(instance,"componentWillMount").call(instance);if(oldState!==instance.state){updater.enqueueReplaceState(instance,instance.state,null)}}function callComponentWillReceiveProps(workInProgress,instance,newProps,newContext){const oldState=instance.state;getUnsafeLifecycle(instance,"componentWillReceiveProps").call(instance,newProps,newContext);if(instance.state!==oldState){updater.enqueueReplaceState(instance,instance.state,null)}}function mountClassInstance(workInProgress,renderExpirationTime){const workInProgress_=workInProgress;const current=workInProgress_.alternate;const instance=workInProgress_.stateNode;const state=instance.state||null;const props=workInProgress_.pendingProps;const unmaskedContext=getUnmaskedContext(workInProgress_);instance.props=props;workInProgress_.memoizedState=state;instance.state=workInProgress_.memoizedState;instance.refs=emptyObject;instance.context=getMaskedContext(workInProgress_,unmaskedContext);if(enableAsyncSubtreeAPI&&workInProgress_.type!=null&&workInProgress_.type.prototype!=null&&workInProgress_.type.prototype.unstable_isAsyncReactComponent===true){workInProgress_.internalContextTag|=AsyncUpdates}if(getUnsafeLifecycle(instance,"componentWillMount")){callComponentWillMount(workInProgress_,instance);const{updateQueue:updateQueue}=workInProgress_;if(updateQueue!==null){instance.state=processUpdateQueue(current,workInProgress_,updateQueue,instance,props,renderExpirationTime)}}if(typeof instance.componentDidMount==="function"){workInProgress_.effectTag|=Update}}function updateClassInstance(current,workInProgress,renderExpirationTime){const workInProgress_=workInProgress;const instance=workInProgress_.stateNode;resetInputPointers(workInProgress_,instance);const oldProps=workInProgress_.memoizedProps;let newProps=workInProgress_.pendingProps;if(!newProps){newProps=oldProps}const oldContext=instance.context;const newUnmaskedContext=getUnmaskedContext(workInProgress_);const newContext=getMaskedContext(workInProgress_,newUnmaskedContext);if(getUnsafeLifecycle(instance,"componentWillReceiveProps")&&(oldProps!==newProps||oldContext!==newContext)){callComponentWillReceiveProps(workInProgress_,instance,newProps,newContext)}const oldState=workInProgress_.memoizedState;let newState;if(workInProgress_.updateQueue!==null){newState=processUpdateQueue(current,workInProgress_,workInProgress_.updateQueue,instance,newProps,renderExpirationTime)}else{newState=oldState}if(oldProps===newProps&&oldState===newState&&!hasContextChanged()&&!(workInProgress_.updateQueue!==null&&workInProgress_.updateQueue.hasForceUpdate)){if(typeof instance.componentDidUpdate==="function"){if(oldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress_.effectTag|=Update}}return false}const shouldUpdate=checkShouldComponentUpdate(workInProgress_,oldProps,newProps,oldState,newState,newContext);if(shouldUpdate){const willUpdateFunc=getUnsafeLifecycle(instance,"componentWillUpdate");if(willUpdateFunc){willUpdateFunc.call(instance,newProps,newState,newContext)}if(typeof instance.componentDidUpdate==="function"){workInProgress_.effectTag|=Update}}else{if(typeof instance.componentDidUpdate==="function"){if(oldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress_.effectTag|=Update}}memoizeProps(workInProgress_,newProps);memoizeState(workInProgress_,newState)}instance.props=newProps;instance.state=newState;instance.context=newContext;return shouldUpdate}return{adoptClassInstance:adoptClassInstance,constructClassInstance:constructClassInstance,mountClassInstance:mountClassInstance,updateClassInstance:updateClassInstance}};const ChildReconciler=(shouldClone,shouldTrackSideEffects)=>{function deleteChild(returnFiber,childToDelete){if(!shouldTrackSideEffects){return}let childToDelete_=childToDelete;const returnFiber_=returnFiber;if(!shouldClone){if(childToDelete_.alternate===null){return}childToDelete_=childToDelete_.alternate}const last=returnFiber_.lastEffect;if(last!==null){last.nextEffect=childToDelete_;returnFiber_.lastEffect=childToDelete_}else{returnFiber_.lastEffect=childToDelete_;returnFiber_.firstEffect=returnFiber_.lastEffect}childToDelete_.nextEffect=null;childToDelete_.effectTag=Deletion}function deleteRemainingChildren(returnFiber,currentFirstChild){if(!shouldTrackSideEffects){return null}let childToDelete=currentFirstChild;while(childToDelete!==null){deleteChild(returnFiber,childToDelete);childToDelete=childToDelete.sibling}return null}function mapRemainingChildren(returnFiber,currentFirstChild){const existingChildren=new Map;let existingChild=currentFirstChild;while(existingChild!==null){if(existingChild.key!==null){existingChildren.set(existingChild.key,existingChild)}else{existingChildren.set(existingChild.index,existingChild)}existingChild=existingChild.sibling}return existingChildren}function useFiber(fiber,pendingProps,expirationTime){const fiber_=fiber;if(shouldClone){const clone=createWorkInProgress(fiber_,pendingProps,expirationTime);clone.index=0;clone.sibling=null;return clone}fiber_.expirationTime=expirationTime;fiber_.effectTag=NoEffect;fiber_.index=0;fiber_.sibling=null;fiber_.pendingProps=pendingProps;return fiber_}function placeChild(newFiber,lastPlacedIndex,newIndex){const _newFiber=newFiber;_newFiber.index=newIndex;if(!shouldTrackSideEffects){return lastPlacedIndex}const current=_newFiber.alternate;if(current!==null){const oldIndex=current.index;if(oldIndex<lastPlacedIndex){_newFiber.effectTag=Placement;return lastPlacedIndex}return oldIndex}_newFiber.effectTag=Placement;return lastPlacedIndex}function placeSingleChild(newFiber){const _newFiber=newFiber;if(shouldTrackSideEffects&&_newFiber&&_newFiber.alternate===null){_newFiber.effectTag=Placement}return _newFiber}function updateTextNode(returnFiber,current,textContent,expirationTime){if(current===null||current.tag!==HostText){const created=createFiberFromText(textContent,returnFiber.internalContextTag,expirationTime);created.return=returnFiber;return created}const existing=useFiber(current,textContent,expirationTime);existing.return=returnFiber;return existing}function updateElement(returnFiber,current,element,expirationTime){if(current!==null&&current.type===element.type){const existing=useFiber(current,element.props,expirationTime);existing.ref=coerceRef(current,element);existing.return=returnFiber;return existing}const created=createFiberFromElement(element,returnFiber.internalContextTag,expirationTime);created.ref=coerceRef(current,element);created.return=returnFiber;return created}function updateCall(returnFiber,current,call,expirationTime){if(current===null||current.tag!==CallComponent){const created=createFiberFromCall(call,returnFiber.internalContextTag,expirationTime);created.return=returnFiber;return created}const existing=useFiber(current,call,expirationTime);existing.return=returnFiber;return existing}function updateReturn(returnFiber,current,returnNode,expirationTime){if(current===null||current.tag!==ReturnComponent){const created=createFiberFromReturn(returnNode,returnFiber.internalContextTag,expirationTime);created.type=returnNode.value;created.return=returnFiber;return created}const existing=useFiber(current,null,expirationTime);existing.type=returnNode.value;existing.return=returnFiber;return existing}function updatePortal(returnFiber,current,portal,expirationTime){if(current===null||current.tag!==HostPortal||current.stateNode.containerInfo!==portal.containerInfo||current.stateNode.implementation!==portal.implementation){const created=createFiberFromPortal(portal,returnFiber.internalContextTag,expirationTime);created.return=returnFiber;return created}const existing=useFiber(current,portal.children||[],expirationTime);existing.return=returnFiber;return existing}function updateFragment(returnFiber,current,fragment,expirationTime,key){if(current===null||current.tag!==Fragment){const created=createFiberFromFragment(fragment,returnFiber.internalContextTag,expirationTime,key);created.return=returnFiber;return created}const existing=useFiber(current,fragment,expirationTime);existing.return=returnFiber;return existing}function createChild(returnFiber,newChild_,expirationTime){let newChild=newChild_;if(newChild==null&&returnFiber&&returnFiber.type&&returnFiber.tag===2){newChild=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_View__["View"],{})}if(typeof newChild==="string"||typeof newChild==="number"){const created=createFiberFromText(`${newChild}`,returnFiber.internalContextTag,expirationTime);created.return=returnFiber;return created}if(typeof newChild==="object"&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{if(newChild.type===REACT_FRAGMENT_TYPE){const _created=createFiberFromFragment(newChild.props.children,returnFiber.internalContextTag,expirationTime,newChild.key);_created.return=returnFiber;return _created}const _created2=createFiberFromElement(newChild,returnFiber.internalContextTag,expirationTime);_created2.ref=coerceRef(null,newChild);_created2.return=returnFiber;return _created2}case REACT_CALL_TYPE:{const _created3=createFiberFromCall(newChild,returnFiber.internalContextTag,expirationTime);_created3.return=returnFiber;return _created3}case REACT_RETURN_TYPE:{const _created4=createFiberFromReturn(newChild,returnFiber.internalContextTag,expirationTime);_created4.type=newChild.value;_created4.return=returnFiber;return _created4}case REACT_PORTAL_TYPE:{const _created5=createFiberFromPortal(newChild,returnFiber.internalContextTag,expirationTime);_created5.return=returnFiber;return _created5}default:{break}}if(Array.isArray(newChild)||getIteratorFn(newChild)){let _created6;if(Array.isArray(newChild)){const newInstanceChildList=[];let formatNewChild=[];newChild.forEach(item=>{if(Array.isArray(item)){formatNewChild=formatNewChild.concat(item)}else{formatNewChild.push(item)}});formatNewChild.forEach(item=>{if(item&&typeof item==="object"&&item.type&&item.type!=null){newInstanceChildList.push(item)}else{newInstanceChildList.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_View__["View"],{}))}});_created6=createFiberFromFragment(newInstanceChildList,returnFiber.internalContextTag,expirationTime,null);_created6.return=returnFiber;return _created6}_created6=createFiberFromFragment(newChild,returnFiber.internalContextTag,expirationTime,null);_created6.return=returnFiber;return _created6}}return null}function updateSlot(returnFiber,oldFiber,newChild_,expirationTime){let newChild=newChild_;if(newChild==null&&returnFiber&&returnFiber.type&&returnFiber.tag===2){newChild=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_View__["View"],{})}const key=oldFiber!==null?oldFiber.key:null;if(typeof newChild==="string"||typeof newChild==="number"){if(key!==null){return null}return updateTextNode(returnFiber,oldFiber,`${newChild}`,expirationTime)}if(typeof newChild==="object"&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{if(newChild.key===key){if(newChild.type===REACT_FRAGMENT_TYPE){return updateFragment(returnFiber,oldFiber,newChild.props.children,expirationTime,key)}return updateElement(returnFiber,oldFiber,newChild,expirationTime)}return null}case REACT_CALL_TYPE:{if(newChild.key===key){return updateCall(returnFiber,oldFiber,newChild,expirationTime)}return null}case REACT_RETURN_TYPE:{if(key===null){return updateReturn(returnFiber,oldFiber,newChild,expirationTime)}return null}case REACT_PORTAL_TYPE:{if(newChild.key===key){return updatePortal(returnFiber,oldFiber,newChild,expirationTime)}return null}default:{break}}if(Array.isArray(newChild)||getIteratorFn(newChild)){if(Array.isArray(newChild)){const newInstanceChildList=[];let formatNewChild=[];newChild.forEach(item=>{if(Array.isArray(item)){formatNewChild=formatNewChild.concat(item)}else{formatNewChild.push(item)}});formatNewChild.forEach(item=>{if(item&&typeof item==="object"&&item.type&&item.type!=null){newInstanceChildList.push(item)}else{newInstanceChildList.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_View__["View"],{}))}});if(key!==null){return null}return updateFragment(returnFiber,oldFiber,newInstanceChildList,expirationTime,null)}if(key!==null){return null}return updateFragment(returnFiber,oldFiber,newChild,expirationTime,null)}}return null}function updateFromMap(existingChildren,returnFiber,newIdx,newChild_,expirationTime){let newChild=newChild_;if(newChild==null&&returnFiber&&returnFiber.type&&returnFiber.tag===2){newChild=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_View__["View"],{})}if(typeof newChild==="string"||typeof newChild==="number"){const matchedFiber=existingChildren.get(newIdx)||null;return updateTextNode(returnFiber,matchedFiber,`${newChild}`,expirationTime)}if(typeof newChild==="object"&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{const _matchedFiber=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;if(newChild.type===REACT_FRAGMENT_TYPE){return updateFragment(returnFiber,_matchedFiber,newChild.props.children,expirationTime,newChild.key)}return updateElement(returnFiber,_matchedFiber,newChild,expirationTime)}case REACT_CALL_TYPE:{const _matchedFiber2=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;return updateCall(returnFiber,_matchedFiber2,newChild,expirationTime)}case REACT_RETURN_TYPE:{const _matchedFiber3=existingChildren.get(newIdx)||null;return updateReturn(returnFiber,_matchedFiber3,newChild,expirationTime)}case REACT_PORTAL_TYPE:{const _matchedFiber4=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;return updatePortal(returnFiber,_matchedFiber4,newChild,expirationTime)}default:{break}}if(Array.isArray(newChild)||getIteratorFn(newChild)){let _matchedFiber5;if(Array.isArray(newChild)){const newInstanceChildList=[];let formatNewChild=[];newChild.forEach(item=>{if(Array.isArray(item)){formatNewChild=formatNewChild.concat(item)}else{formatNewChild.push(item)}});formatNewChild.forEach(item=>{if(item&&typeof item==="object"&&item.type&&item.type!=null){newInstanceChildList.push(item)}else{newInstanceChildList.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_View__["View"],{}))}});_matchedFiber5=existingChildren.get(newIdx)||null;return updateFragment(returnFiber,_matchedFiber5,newInstanceChildList,expirationTime,null)}_matchedFiber5=existingChildren.get(newIdx)||null;return updateFragment(returnFiber,_matchedFiber5,newChild,expirationTime,null)}}return null}function reconcileChildrenArray(returnFiber,currentFirstChild,newChildren,expirationTime){let resultingFirstChild=null;let previousNewFiber=null;let oldFiber=currentFirstChild;let lastPlacedIndex=0;let newIdx=0;let nextOldFiber=null;for(;oldFiber!==null&&newIdx<newChildren.length;newIdx+=1){if(oldFiber.index>newIdx){nextOldFiber=oldFiber;oldFiber=null}else{nextOldFiber=oldFiber.sibling}const newFiber=updateSlot(returnFiber,oldFiber,newChildren[newIdx],expirationTime);if(newFiber===null){if(oldFiber===null){oldFiber=nextOldFiber}break}if(shouldTrackSideEffects){if(oldFiber&&newFiber.alternate===null){deleteChild(returnFiber,oldFiber)}}lastPlacedIndex=placeChild(newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=newFiber}else{previousNewFiber.sibling=newFiber}previousNewFiber=newFiber;oldFiber=nextOldFiber}if(newIdx===newChildren.length){deleteRemainingChildren(returnFiber,oldFiber);return resultingFirstChild}if(oldFiber===null){for(;newIdx<newChildren.length;newIdx+=1){const _newFiber=createChild(returnFiber,newChildren[newIdx],expirationTime);if(_newFiber){lastPlacedIndex=placeChild(_newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=_newFiber}else{previousNewFiber.sibling=_newFiber}previousNewFiber=_newFiber}}return resultingFirstChild}const existingChildren=mapRemainingChildren(returnFiber,oldFiber);for(;newIdx<newChildren.length;newIdx+=1){const _newFiber2=updateFromMap(existingChildren,returnFiber,newIdx,newChildren[newIdx],expirationTime);if(_newFiber2){if(shouldTrackSideEffects){if(_newFiber2.alternate!==null){existingChildren.delete(_newFiber2.key===null?newIdx:_newFiber2.key)}}lastPlacedIndex=placeChild(_newFiber2,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=_newFiber2}else{previousNewFiber.sibling=_newFiber2}previousNewFiber=_newFiber2}}if(shouldTrackSideEffects){existingChildren.forEach(child=>deleteChild(returnFiber,child))}return resultingFirstChild}function reconcileChildrenIterator(returnFiber,currentFirstChild,newChildrenIterable,expirationTime){const iteratorFn=getIteratorFn(newChildrenIterable);const newChildren=iteratorFn.call(newChildrenIterable);let resultingFirstChild=null;let previousNewFiber=null;let oldFiber=currentFirstChild;let lastPlacedIndex=0;let newIdx=0;let nextOldFiber=null;let step=newChildren.next();for(;oldFiber!==null&&!step.done;newIdx+=1,step=newChildren.next()){if(oldFiber.index>newIdx){nextOldFiber=oldFiber;oldFiber=null}else{nextOldFiber=oldFiber.sibling}const newFiber=updateSlot(returnFiber,oldFiber,step.value,expirationTime);if(newFiber===null){if(!oldFiber){oldFiber=nextOldFiber}break}if(shouldTrackSideEffects){if(oldFiber&&newFiber.alternate===null){deleteChild(returnFiber,oldFiber)}}lastPlacedIndex=placeChild(newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=newFiber}else{previousNewFiber.sibling=newFiber}previousNewFiber=newFiber;oldFiber=nextOldFiber}if(step.done){deleteRemainingChildren(returnFiber,oldFiber);return resultingFirstChild}if(oldFiber===null){for(;!step.done;newIdx+=1,step=newChildren.next()){const _newFiber3=createChild(returnFiber,step.value,expirationTime);if(_newFiber3!==null){lastPlacedIndex=placeChild(_newFiber3,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=_newFiber3}else{previousNewFiber.sibling=_newFiber3}previousNewFiber=_newFiber3}}return resultingFirstChild}const existingChildren=mapRemainingChildren(returnFiber,oldFiber);for(;!step.done;newIdx+=1,step=newChildren.next()){const _newFiber4=updateFromMap(existingChildren,returnFiber,newIdx,step.value,expirationTime);if(_newFiber4!==null){if(shouldTrackSideEffects){if(_newFiber4.alternate!==null){existingChildren.delete(_newFiber4.key===null?newIdx:_newFiber4.key)}}lastPlacedIndex=placeChild(_newFiber4,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=_newFiber4}else{previousNewFiber.sibling=_newFiber4}previousNewFiber=_newFiber4}}if(shouldTrackSideEffects){existingChildren.forEach(child=>deleteChild(returnFiber,child))}return resultingFirstChild}function reconcileSingleTextNode(returnFiber,currentFirstChild,textContent,expirationTime){if(currentFirstChild!==null&&currentFirstChild.tag===HostText){deleteRemainingChildren(returnFiber,currentFirstChild.sibling);const existing=useFiber(currentFirstChild,textContent,expirationTime);existing.return=returnFiber;return existing}deleteRemainingChildren(returnFiber,currentFirstChild);const created=createFiberFromText(textContent,returnFiber.internalContextTag,expirationTime);created.return=returnFiber;return created}function reconcileSingleElement(returnFiber,currentFirstChild,element,expirationTime){const{key:key}=element;let child=currentFirstChild;while(child!==null){if(child.key===key){if(child.tag===Fragment?element.type===REACT_FRAGMENT_TYPE:child.type===element.type){deleteRemainingChildren(returnFiber,child.sibling);const existing=useFiber(child,element.type===REACT_FRAGMENT_TYPE?element.props.children:element.props,expirationTime);existing.ref=coerceRef(child,element);existing.return=returnFiber;return existing}deleteRemainingChildren(returnFiber,child);break}else{deleteChild(returnFiber,child)}child=child.sibling}if(element.type===REACT_FRAGMENT_TYPE){const created=createFiberFromFragment(element.props.children,returnFiber.internalContextTag,expirationTime,element.key);created.return=returnFiber;return created}const _created7=createFiberFromElement(element,returnFiber.internalContextTag,expirationTime);_created7.ref=coerceRef(currentFirstChild,element);_created7.return=returnFiber;return _created7}function reconcileSingleCall(returnFiber,currentFirstChild,call,expirationTime){const{key:key}=call;let child=currentFirstChild;while(child!==null){if(child.key===key){if(child.tag===CallComponent){deleteRemainingChildren(returnFiber,child.sibling);const existing=useFiber(child,call,expirationTime);existing.return=returnFiber;return existing}deleteRemainingChildren(returnFiber,child);break}else{deleteChild(returnFiber,child)}child=child.sibling}const created=createFiberFromCall(call,returnFiber.internalContextTag,expirationTime);created.return=returnFiber;return created}function reconcileSingleReturn(returnFiber,currentFirstChild,returnNode,expirationTime){const child=currentFirstChild;if(child!==null){if(child.tag===ReturnComponent){deleteRemainingChildren(returnFiber,child.sibling);const existing=useFiber(child,null,expirationTime);existing.type=returnNode.value;existing.return=returnFiber;return existing}deleteRemainingChildren(returnFiber,child)}const created=createFiberFromReturn(returnNode,returnFiber.internalContextTag,expirationTime);created.type=returnNode.value;created.return=returnFiber;return created}function reconcileSinglePortal(returnFiber,currentFirstChild,portal,expirationTime){const{key:key}=portal;let child=currentFirstChild;while(child!==null){if(child.key===key){if(child.tag===HostPortal&&child.stateNode.containerInfo===portal.containerInfo&&child.stateNode.implementation===portal.implementation){deleteRemainingChildren(returnFiber,child.sibling);const existing=useFiber(child,portal.children||[],expirationTime);existing.return=returnFiber;return existing}deleteRemainingChildren(returnFiber,child);break}else{deleteChild(returnFiber,child)}child=child.sibling}const created=createFiberFromPortal(portal,returnFiber.internalContextTag,expirationTime);created.return=returnFiber;return created}function reconcileChildFibers(returnFiber,currentFirstChild,newChild_,expirationTime){let newChild=newChild_;if(newChild==null&&returnFiber&&returnFiber.type&&returnFiber.tag===2){newChild=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_View__["View"],{})}if(enableReactFragment&&typeof newChild==="object"&&newChild!==null&&newChild.type===REACT_FRAGMENT_TYPE&&newChild.key===null){newChild=newChild.props.children}const isObject=typeof newChild==="object"&&newChild!==null;if(isObject){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:return placeSingleChild(reconcileSingleElement(returnFiber,currentFirstChild,newChild,expirationTime));case REACT_CALL_TYPE:return placeSingleChild(reconcileSingleCall(returnFiber,currentFirstChild,newChild,expirationTime));case REACT_RETURN_TYPE:return placeSingleChild(reconcileSingleReturn(returnFiber,currentFirstChild,newChild,expirationTime));case REACT_PORTAL_TYPE:return placeSingleChild(reconcileSinglePortal(returnFiber,currentFirstChild,newChild,expirationTime));default:break}}if(typeof newChild==="string"||typeof newChild==="number"){return placeSingleChild(reconcileSingleTextNode(returnFiber,currentFirstChild,`${newChild}`,expirationTime))}if(Array.isArray(newChild)){const newInstanceChildList=[];let formatNewChild=[];newChild.forEach(item=>{if(Array.isArray(item)){formatNewChild=formatNewChild.concat(item)}else{formatNewChild.push(item)}});formatNewChild.forEach(item=>{if(item&&typeof item==="object"&&item.type&&item.type!=null){newInstanceChildList.push(item)}else{newInstanceChildList.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_View__["View"],{}))}});return reconcileChildrenArray(returnFiber,currentFirstChild,newInstanceChildList,expirationTime)}if(getIteratorFn(newChild)){return reconcileChildrenIterator(returnFiber,currentFirstChild,newChild,expirationTime)}return deleteRemainingChildren(returnFiber,currentFirstChild)}return reconcileChildFibers};const reconcileChildFibers=ChildReconciler(true,true);const reconcileChildFibersInPlace=ChildReconciler(false,true);const mountChildFibersInPlace=ChildReconciler(false,false);const ReactFiberBeginWork=(config,hostContext,scheduleWork,computeExpirationForFiber)=>{const{shouldSetTextContent:shouldSetTextContent,useSyncScheduling:useSyncScheduling,shouldDeprioritizeSubtree:shouldDeprioritizeSubtree}=config;const{pushHostContext:pushHostContext,pushHostContainer:pushHostContainer}=hostContext;const memoizeProps=(workInProgress,nextProps)=>{const workInProgress_=workInProgress;workInProgress_.memoizedProps=nextProps};const memoizeState=(workInProgress,nextState)=>{const workInProgress_=workInProgress;workInProgress_.memoizedState=nextState};const{adoptClassInstance:adoptClassInstance,constructClassInstance:constructClassInstance,mountClassInstance:mountClassInstance,updateClassInstance:updateClassInstance}=ReactFiberClassComponent(scheduleWork,computeExpirationForFiber,memoizeProps,memoizeState);function reconcileChildrenAtExpirationTime(current,workInProgress,nextChildren,renderExpirationTime){const workInProgress_=workInProgress;if(workInProgress_){if(current===null){workInProgress_.child=mountChildFibersInPlace(workInProgress_,workInProgress_.child,nextChildren,renderExpirationTime)}else if(current.child===workInProgress_.child){workInProgress_.child=reconcileChildFibers(workInProgress_,workInProgress_.child,nextChildren,renderExpirationTime)}else{workInProgress_.child=reconcileChildFibersInPlace(workInProgress_,workInProgress_.child,nextChildren,renderExpirationTime)}}}function reconcileChildren(current,workInProgress,nextChildren){reconcileChildrenAtExpirationTime(current,workInProgress,nextChildren,workInProgress.expirationTime)}function bailoutOnAlreadyFinishedWork(current,workInProgress){cloneChildFibers(current,workInProgress);return workInProgress.child}function updateFragment(current,workInProgress){let nextChildren=workInProgress.pendingProps;if(hasContextChanged()){if(nextChildren===null){nextChildren=workInProgress.memoizedProps}}else if(nextChildren===null||workInProgress.memoizedProps===nextChildren){return bailoutOnAlreadyFinishedWork(current,workInProgress)}reconcileChildren(current,workInProgress,nextChildren);memoizeProps(workInProgress,nextChildren);return workInProgress.child}function markRef(current,workInProgress){const{ref:ref}=workInProgress;if(ref!==null&&(!current||current.ref!==ref)){const workInProgress_=workInProgress;workInProgress_.effectTag|=Ref}}function updateFunctionalComponent(current,workInProgress){const workInProgress_=workInProgress;const fn=workInProgress_.type;let nextProps=workInProgress_.pendingProps;const{memoizedProps:memoizedProps}=workInProgress_;if(hasContextChanged()){if(nextProps===null){nextProps=memoizedProps}}else if(nextProps===null||memoizedProps===nextProps){return bailoutOnAlreadyFinishedWork(current,workInProgress_)}const unmaskedContext=getUnmaskedContext(workInProgress_);const context=getMaskedContext(workInProgress_,unmaskedContext);const nextChildren=fn(nextProps,context);ReactCurrentOwner.current=workInProgress_;workInProgress_.effectTag|=PerformedWork;reconcileChildren(current,workInProgress_,nextChildren);memoizeProps(workInProgress_,nextProps);return workInProgress_.child}function finishClassComponent(current,workInProgress,shouldUpdate,hasContext){const workInProgress_=workInProgress;markRef(current,workInProgress_);if(!shouldUpdate){return bailoutOnAlreadyFinishedWork(current,workInProgress_)}const instance=workInProgress_.stateNode;ReactCurrentOwner.current=workInProgress_;let nextChildren;if(instance&&instance!=null){nextChildren=instance.render()}else{nextChildren=null}workInProgress_.effectTag|=PerformedWork;reconcileChildren(current,workInProgress_,nextChildren);memoizeState(workInProgress_,instance.state);memoizeProps(workInProgress_,instance.props);if(hasContext){invalidateContextProvider(workInProgress_,true)}return workInProgress_.child}function updateClassComponent(current,workInProgress,renderExpirationTime){const hasContext=pushContextProvider(workInProgress);let shouldUpdate;if(current===null){if(!workInProgress.stateNode){constructClassInstance(workInProgress,workInProgress.pendingProps);mountClassInstance(workInProgress,renderExpirationTime);shouldUpdate=true}}else{shouldUpdate=updateClassInstance(current,workInProgress,renderExpirationTime)}return finishClassComponent(current,workInProgress,shouldUpdate,hasContext)}function pushHostRootContext(workInProgress){const root=workInProgress.stateNode;if(root.pendingContext){pushTopLevelContextObject(workInProgress,root.pendingContext,root.pendingContext!==root.context)}else if(root.context){pushTopLevelContextObject(workInProgress,root.context,false)}pushHostContainer(workInProgress,root.containerInfo)}function updateHostRoot(current,workInProgress,renderExpirationTime){const workInProgress_=workInProgress;pushHostRootContext(workInProgress_);const{updateQueue:updateQueue}=workInProgress_;if(updateQueue!==null){const prevState=workInProgress_.memoizedState;const state=processUpdateQueue(current,workInProgress_,updateQueue,null,null,renderExpirationTime);if(prevState===state){return bailoutOnAlreadyFinishedWork(current,workInProgress_)}const{element:element}=state;reconcileChildren(current,workInProgress_,element);memoizeState(workInProgress_,state);return workInProgress_.child}return bailoutOnAlreadyFinishedWork(current,workInProgress)}function updateHostComponent(current,workInProgress,renderExpirationTime){const workInProgress_=workInProgress;pushHostContext(workInProgress_);const{type:type,memoizedProps:memoizedProps}=workInProgress_.type;let nextProps=workInProgress_.pendingProps;if(nextProps===null){nextProps=memoizedProps}const prevProps=current!==null?current.memoizedProps:null;if(!hasContextChanged()&&(nextProps===null||memoizedProps===nextProps)){return bailoutOnAlreadyFinishedWork(current,workInProgress_)}let nextChildren=nextProps.children;const isDirectTextChild=shouldSetTextContent(type,nextProps);if(isDirectTextChild){nextChildren=null}else if(prevProps&&shouldSetTextContent(type,prevProps)){workInProgress_.effectTag|=ContentReset}markRef(current,workInProgress_);if(renderExpirationTime!==Never&&!useSyncScheduling&&shouldDeprioritizeSubtree(type,nextProps)){workInProgress_.expirationTime=Never;return null}reconcileChildren(current,workInProgress_,nextChildren);memoizeProps(workInProgress_,nextProps);return workInProgress_.child}function updateHostText(current,workInProgress){let nextProps=workInProgress.pendingProps;if(nextProps===null){nextProps=workInProgress.memoizedProps}memoizeProps(workInProgress,nextProps);return null}function mountIndeterminateComponent(current,workInProgress,renderExpirationTime){const workInProgress_=workInProgress;const fn=workInProgress_.type;const props=workInProgress_.pendingProps;const unmaskedContext=getUnmaskedContext(workInProgress_);const context=getMaskedContext(workInProgress_,unmaskedContext);ReactCurrentOwner.current=workInProgress_;const value=fn(props,context);workInProgress_.effectTag|=PerformedWork;if(typeof value==="object"&&value!==null&&typeof value.render==="function"){workInProgress_.tag=ClassComponent;const hasContext=pushContextProvider(workInProgress_);adoptClassInstance(workInProgress_,value);mountClassInstance(workInProgress_,renderExpirationTime);return finishClassComponent(current,workInProgress_,true,hasContext)}workInProgress_.tag=FunctionalComponent;reconcileChildren(current,workInProgress_,value);memoizeProps(workInProgress_,props);return workInProgress_.child}function updateCallComponent(current,workInProgress,renderExpirationTime){const workInProgress_=workInProgress;let nextCall=workInProgress_.pendingProps;if(hasContextChanged()){if(nextCall===null){nextCall=current&&current.memoizedProps}}else if(nextCall===null||workInProgress_.memoizedProps===nextCall){nextCall=workInProgress_.memoizedProps}const nextChildren=nextCall.children;if(current===null){workInProgress_.stateNode=mountChildFibersInPlace(workInProgress_,workInProgress_.stateNode,nextChildren,renderExpirationTime)}else if(current.child===workInProgress_.child){workInProgress_.stateNode=reconcileChildFibers(workInProgress_,workInProgress_.stateNode,nextChildren,renderExpirationTime)}else{workInProgress_.stateNode=reconcileChildFibersInPlace(workInProgress_,workInProgress_.stateNode,nextChildren,renderExpirationTime)}memoizeProps(workInProgress_,nextCall);return workInProgress_.stateNode}function updatePortalComponent(current,workInProgress,renderExpirationTime){pushHostContainer(workInProgress,workInProgress.stateNode.containerInfo);let nextChildren=workInProgress.pendingProps;if(hasContextChanged()){if(nextChildren===null){nextChildren=current&&current.memoizedProps}}else if(nextChildren===null||workInProgress.memoizedProps===nextChildren){return bailoutOnAlreadyFinishedWork(current,workInProgress)}if(current===null){const workInProgress_=workInProgress;workInProgress_.child=reconcileChildFibersInPlace(workInProgress_,workInProgress_.child,nextChildren,renderExpirationTime);memoizeProps(workInProgress_,nextChildren)}else{reconcileChildren(current,workInProgress,nextChildren);memoizeProps(workInProgress,nextChildren)}return workInProgress.child}function bailoutOnLowPriority(current,workInProgress){switch(workInProgress.tag){case HostRoot:pushHostRootContext(workInProgress);break;case ClassComponent:pushContextProvider(workInProgress);break;case HostPortal:pushHostContainer(workInProgress,workInProgress.stateNode.containerInfo);break;default:break}return null}function beginWork(current,workInProgress,renderExpirationTime){if(workInProgress.expirationTime===NoWork||workInProgress.expirationTime>renderExpirationTime){return bailoutOnLowPriority(current,workInProgress)}switch(workInProgress.tag){case IndeterminateComponent:return mountIndeterminateComponent(current,workInProgress,renderExpirationTime);case FunctionalComponent:return updateFunctionalComponent(current,workInProgress);case ClassComponent:return updateClassComponent(current,workInProgress,renderExpirationTime);case HostRoot:return updateHostRoot(current,workInProgress,renderExpirationTime);case HostComponent:return updateHostComponent(current,workInProgress,renderExpirationTime);case HostText:return updateHostText(current,workInProgress);case CallHandlerPhase:{const workInProgress_=workInProgress;workInProgress_.tag=CallComponent;return null}case CallComponent:return updateCallComponent(current,workInProgress,renderExpirationTime);case ReturnComponent:return null;case HostPortal:return updatePortalComponent(current,workInProgress,renderExpirationTime);case Fragment:return updateFragment(current,workInProgress);default:break}return null}return{beginWork:beginWork}};const ReactFiberCompleteWork=(config,hostContext)=>{const{createInstance:createInstance,createTextInstance:createTextInstance,prepareUpdate:prepareUpdate,mutation:mutation}=config;const{getRootHostContainer:getRootHostContainer,getHostContext:getHostContext,popHostContainer:popHostContainer}=hostContext;function markUpdate(workInProgress){const workInProgress_=workInProgress;workInProgress_.effectTag|=Update}function markRef(workInProgress){const workInProgress_=workInProgress;workInProgress_.effectTag|=Ref}let updateHostContainer;let updateHostComponent;let updateHostText;if(mutation){if(enableMutatingReconciler){updateHostContainer=()=>{};updateHostComponent=(workInProgress,updatePayload)=>{const workInProgress_=workInProgress;workInProgress_.updateQueue=updatePayload;if(updatePayload){markUpdate(workInProgress_)}};updateHostText=(current,workInProgress,oldText,newText)=>{if(oldText!==newText){markUpdate(workInProgress)}}}}function completeWork(current,workInProgress,renderExpirationTime){const workInProgress_=workInProgress;if(workInProgress_&&workInProgress_!=null&&__GLOBAL__&&__GLOBAL__.nodeTreeCache&&__GLOBAL__.nodeTreeCache[ROOT_VIEW_ID]&&__GLOBAL__.nodeTreeCache[ROOT_VIEW_ID][workInProgress_._debugID]){if(!__GLOBAL__.destroyInstanceList[ROOT_VIEW_ID]){__GLOBAL__.nodeTreeCache[ROOT_VIEW_ID][workInProgress_._debugID]={_debugID:workInProgress_._debugID,memoizedProps:workInProgress_.memoizedProps,child:workInProgress_.child,sibling:workInProgress_.sibling,return:workInProgress_.return,stateNode:workInProgress_.stateNode,ref:workInProgress_.ref}}}let newProps=workInProgress_.pendingProps;if(newProps===null){newProps=workInProgress_.memoizedProps}else if(workInProgress_.expirationTime!==Never||renderExpirationTime===Never){workInProgress_.pendingProps=null}switch(workInProgress_.tag){case ClassComponent:{popContextProvider(workInProgress_);break}case HostRoot:{popHostContainer(workInProgress_);popTopLevelContextObject(workInProgress_);const fiberRoot=workInProgress_.stateNode;if(fiberRoot.pendingContext){fiberRoot.context=fiberRoot.pendingContext;fiberRoot.pendingContext=null}if(current===null||current.child===null){workInProgress_.effectTag&=~Placement}updateHostContainer(workInProgress_);break}case HostComponent:{if(current!==null&&workInProgress_.stateNode!=null){const oldProps=current.memoizedProps;const updatePayload=prepareUpdate(oldProps,newProps);updateHostComponent(workInProgress_,updatePayload);if(current.ref!==workInProgress_.ref){markRef(workInProgress_)}}else{if(!newProps){break}const _instance=createInstance(workInProgress_);workInProgress_.stateNode=_instance;if(workInProgress_.ref!==null){markRef(workInProgress_)}}break}case HostText:{const newText=newProps;if(current&&workInProgress_.stateNode!=null){const oldText=current.memoizedProps;updateHostText(current,workInProgress_,oldText,newText)}else{if(typeof newText!=="string"){break}const _rootContainerInstance=getRootHostContainer();const _currentHostContext2=getHostContext();workInProgress_.stateNode=createTextInstance(newText,_rootContainerInstance,_currentHostContext2,workInProgress_)}break}case CallHandlerPhase:workInProgress_.tag=CallComponent;break;case HostPortal:popHostContainer(workInProgress_);updateHostContainer(workInProgress_);break;case FunctionalComponent:case ReturnComponent:case Fragment:default:{break}}return null}return{completeWork:completeWork}};const ReactFiberScheduler=config=>{const hostContext=ReactFiberHostContext(config);const{resetHostContainer:resetHostContainer}=hostContext;const{prepareForCommit:prepareForCommit,resetAfterCommit:resetAfterCommit}=config;let beginWork;const{completeWork:completeWork}=ReactFiberCompleteWork(config,hostContext);const{commitResetTextContent:commitResetTextContent,commitDetachRef:commitDetachRef,commitPlacement:commitPlacement,commitWork:commitWork,commitLifeCycles:commitLifeCycles,commitAttachRef:commitAttachRef,commitDeletion:commitDeletion}=ReactFiberCommitWork(config);const startTime=now();let mostRecentCurrentTime=msToExpirationTime(0);let isWorking=false;let nextRenderExpirationTime=NoWork;let nextRoot=null;let nextEffect=null;let nextUnitOfWork=null;let firstScheduledRoot=null;let lastScheduledRoot=null;const expirationContext=NoWork;let isRendering=false;const isBatchingUpdates=false;const isUnbatchingUpdates=false;let deadline=null;let deadlineDidExpire=false;let nextFlushedRoot=null;let nextFlushedExpirationTime=NoWork;const timeHeuristicForUnitOfWork=1;let isCallbackScheduled=false;function resetContextStack(){reset$1();resetContext();resetHostContainer()}function commitAllHostEffects(){while(nextEffect!==null){const{effectTag:effectTag}=nextEffect;if(effectTag&ContentReset){commitResetTextContent(nextEffect)}if(effectTag&Ref){const current=nextEffect.alternate;if(current!==null){commitDetachRef(current)}}const primaryEffectTag=effectTag&~(Callback|Err|ContentReset|Ref|PerformedWork);switch(primaryEffectTag){case Placement:{commitPlacement(nextEffect);nextEffect.effectTag&=~Placement;break}case PlacementAndUpdate:{commitPlacement(nextEffect);nextEffect.effectTag&=~Placement;const _current=nextEffect.alternate;commitWork(_current,nextEffect);break}case Update:{const _current2=nextEffect.alternate;commitWork(_current2,nextEffect);break}case Deletion:{commitDeletion(nextEffect);break}default:{break}}({nextEffect:nextEffect}=nextEffect)}}function findHighestPriorityRoot(){let highestPriorityWork=NoWork;let highestPriorityRoot=null;if(lastScheduledRoot!==null){let previousScheduledRoot=lastScheduledRoot;let root=firstScheduledRoot;while(root!==null){const{remainingExpirationTime:remainingExpirationTime}=root;if(remainingExpirationTime===NoWork){if(root===root.nextScheduledRoot){root.nextScheduledRoot=null;firstScheduledRoot=null;lastScheduledRoot=null;break}else if(root===firstScheduledRoot){const next=root.nextScheduledRoot;firstScheduledRoot=next;lastScheduledRoot.nextScheduledRoot=next;root.nextScheduledRoot=null}else if(root===lastScheduledRoot){lastScheduledRoot=previousScheduledRoot;lastScheduledRoot.nextScheduledRoot=firstScheduledRoot;root.nextScheduledRoot=null;break}else{previousScheduledRoot.nextScheduledRoot=root.nextScheduledRoot;root.nextScheduledRoot=null}root=previousScheduledRoot.nextScheduledRoot}else{if(highestPriorityWork===NoWork||remainingExpirationTime<highestPriorityWork){highestPriorityWork=remainingExpirationTime;highestPriorityRoot=root}if(root===lastScheduledRoot){break}previousScheduledRoot=root;root=root.nextScheduledRoot}}}nextFlushedRoot=highestPriorityRoot;nextFlushedExpirationTime=highestPriorityWork}function commitAllLifeCycles(){while(nextEffect!==null){const{effectTag:effectTag}=nextEffect;if(effectTag&(Update|Callback)){const current=nextEffect.alternate;commitLifeCycles(current,nextEffect)}if(effectTag&Ref){commitAttachRef(nextEffect)}const next=nextEffect.nextEffect;nextEffect.nextEffect=null;nextEffect=next}}function commitRoot(finishedWork){isWorking=true;isCommitting=true;const root=finishedWork.stateNode;root.isReadyForCommit=false;ReactCurrentOwner.current=null;let firstEffect;if(finishedWork.effectTag>PerformedWork){if(finishedWork.lastEffect!==null){const finishedWork_=finishedWork;finishedWork_.lastEffect.nextEffect=finishedWork_;({firstEffect:firstEffect}=finishedWork)}else{firstEffect=finishedWork}}else{({firstEffect:firstEffect}=finishedWork)}prepareForCommit();nextEffect=firstEffect;while(nextEffect!==null){commitAllHostEffects()}resetAfterCommit();root.current=finishedWork;nextEffect=firstEffect;while(nextEffect!==null){commitAllLifeCycles()}isCommitting=false;isWorking=false;if(typeof onCommitRoot==="function"){onCommitRoot(finishedWork.stateNode)}return root.current.expirationTime}function shouldYield(){if(deadline===null){return false}if(deadline.timeRemaining()>timeHeuristicForUnitOfWork){return false}deadlineDidExpire=true;return true}function recalculateCurrentTime(){const ms=now()-startTime;mostRecentCurrentTime=msToExpirationTime(ms);return mostRecentCurrentTime}function resetExpirationTime(workInProgress,renderTime){if(renderTime!==Never&&workInProgress.expirationTime===Never){return}let newExpirationTime=getUpdateExpirationTime(workInProgress);let{child:child}=workInProgress;while(child!==null){if(child.expirationTime!==NoWork&&(newExpirationTime===NoWork||newExpirationTime>child.expirationTime)){newExpirationTime=child.expirationTime}child=child.sibling}const workInProgress_=workInProgress;workInProgress_.expirationTime=newExpirationTime}function completeUnitOfWork(workInProgress){let workInProgress_=workInProgress;for(;;){const current=workInProgress_.alternate;const next=completeWork(current,workInProgress_,nextRenderExpirationTime);const returnFiber=workInProgress_.return;const siblingFiber=workInProgress_.sibling;resetExpirationTime(workInProgress_,nextRenderExpirationTime);if(next!==null){return next}if(returnFiber!==null){if(returnFiber.firstEffect===null){returnFiber.firstEffect=workInProgress_.firstEffect}if(workInProgress_.lastEffect!==null){if(returnFiber.lastEffect!==null){returnFiber.lastEffect.nextEffect=workInProgress_.firstEffect}returnFiber.lastEffect=workInProgress_.lastEffect}const{effectTag:effectTag}=workInProgress_;if(effectTag>PerformedWork){if(returnFiber.lastEffect!==null){returnFiber.lastEffect.nextEffect=workInProgress_}else{returnFiber.firstEffect=workInProgress_}returnFiber.lastEffect=workInProgress_}}if(siblingFiber!==null){return siblingFiber}if(returnFiber!==null){workInProgress_=returnFiber}else{const root=workInProgress_.stateNode;root.isReadyForCommit=true;return null}}}function performUnitOfWork(workInProgress){const current=workInProgress.alternate;let next=beginWork(current,workInProgress,nextRenderExpirationTime);if(next&&next.memoizedProps&&next.memoizedProps.__instanceId__){ROOT_VIEW_ID=next.memoizedProps.__instanceId__}else if(next&&next.pendingProps&&next.pendingProps.__instanceId__){ROOT_VIEW_ID=next.pendingProps.__instanceId__}if(next===null){next=completeUnitOfWork(workInProgress)}ReactCurrentOwner.current=null;return next}function workLoop(expirationTime){if(nextRenderExpirationTime===NoWork||nextRenderExpirationTime>expirationTime){return}if(nextRenderExpirationTime<=mostRecentCurrentTime){while(nextUnitOfWork!==null){nextUnitOfWork=performUnitOfWork(nextUnitOfWork)}}else{while(nextUnitOfWork!==null&&!shouldYield()){nextUnitOfWork=performUnitOfWork(nextUnitOfWork)}}}function renderRoot(root,expirationTime){isWorking=true;const root_=root;root_.isReadyForCommit=false;if(root!==nextRoot||expirationTime!==nextRenderExpirationTime||nextUnitOfWork===null){resetContextStack();nextRoot=root;nextRenderExpirationTime=expirationTime;nextUnitOfWork=createWorkInProgress(nextRoot.current,null,expirationTime)}workLoop();stopWorkLoopTimer();isWorking=false;return root.isReadyForCommit?root.current.alternate:null}function performWorkOnRoot(root,expirationTime){const root_=root;isRendering=true;if(expirationTime<=recalculateCurrentTime()){let{finishedWork:finishedWork}=root_;if(finishedWork!==null){root_.finishedWork=null;root_.remainingExpirationTime=commitRoot(finishedWork)}else{root_.finishedWork=null;finishedWork=renderRoot(root_,expirationTime);if(finishedWork!==null){root_.remainingExpirationTime=commitRoot(finishedWork)}}}else{let _finishedWork=root_.finishedWork;if(_finishedWork!==null){root_.finishedWork=null;root_.remainingExpirationTime=commitRoot(_finishedWork)}else{root_.finishedWork=null;_finishedWork=renderRoot(root_,expirationTime);if(_finishedWork!==null){if(!shouldYield()){root_.remainingExpirationTime=commitRoot(_finishedWork)}else{root_.finishedWork=_finishedWork}}}}isRendering=false}function performWork(minExpirationTime,dl){deadline=dl;findHighestPriorityRoot();while(nextFlushedRoot!==null&&nextFlushedExpirationTime!==NoWork&&(minExpirationTime===NoWork||nextFlushedExpirationTime<=minExpirationTime)&&!deadlineDidExpire){performWorkOnRoot(nextFlushedRoot,nextFlushedExpirationTime);findHighestPriorityRoot()}if(deadline!==null){isCallbackScheduled=false}if(nextFlushedRoot!==null&&!isCallbackScheduled){isCallbackScheduled=true}deadline=null;deadlineDidExpire=false}function requestWork(root,expirationTime){const root_=root;if(root_.nextScheduledRoot===null){root_.remainingExpirationTime=expirationTime;if(lastScheduledRoot===null){lastScheduledRoot=root_;firstScheduledRoot=lastScheduledRoot;root_.nextScheduledRoot=root_}else{lastScheduledRoot.nextScheduledRoot=root_;lastScheduledRoot=root_;lastScheduledRoot.nextScheduledRoot=firstScheduledRoot}}else{const{remainingExpirationTime:remainingExpirationTime}=root_;if(remainingExpirationTime===NoWork||expirationTime<remainingExpirationTime){root_.remainingExpirationTime=expirationTime}}if(isRendering){return}if(isBatchingUpdates){if(isUnbatchingUpdates){performWorkOnRoot(root_,Sync)}return}if(expirationTime===Sync){performWork(Sync,null)}}function scheduleWorkImpl(fiber,expirationTime){let node=fiber;while(node&&node!==null){if(node.expirationTime===NoWork||node.expirationTime>expirationTime){node.expirationTime=expirationTime}if(node.alternate!==null){if(node.alternate.expirationTime===NoWork||node.alternate.expirationTime>expirationTime){node.alternate.expirationTime=expirationTime}}if(node.return===null){if(node.tag===HostRoot){const root=node.stateNode;if(!isWorking&&root===nextRoot&&expirationTime<=nextRenderExpirationTime){nextRoot=null;nextUnitOfWork=null;nextRenderExpirationTime=NoWork}requestWork(root,expirationTime)}else{return}}node=node.return}}function scheduleWork(fiber,expirationTime){__GLOBAL__.renderCount+=1;if(__GLOBAL__.renderCount>1e4){__GLOBAL__.renderCount=0}const renderId=`${Date.now()+__GLOBAL__.renderCount}`;if(!RENDER_LOCK){__WEBPACK_IMPORTED_MODULE_4__modules_UIManagerModule__["default"].startBatch(renderId);RENDER_LOCK=renderId}let workResult;try{workResult=scheduleWorkImpl(fiber,expirationTime)}catch(e){__WEBPACK_IMPORTED_MODULE_4__modules_UIManagerModule__["default"].sendRenderError(e)}if(RENDER_LOCK===renderId){__WEBPACK_IMPORTED_MODULE_4__modules_UIManagerModule__["default"].endBatch(renderId);RENDER_LOCK=""}return workResult}function computeAsyncExpiration(){const currentTime=recalculateCurrentTime();const expirationMs=1e3;const bucketSizeMs=200;return computeExpirationBucket(currentTime,expirationMs,bucketSizeMs)}function computeExpirationForFiber(fiber){let expirationTime;if(expirationContext!==NoWork){expirationTime=expirationContext}else if(isWorking){if(isCommitting){expirationTime=Sync}else{expirationTime=nextRenderExpirationTime}}else if(!(fiber.internalContextTag&AsyncUpdates)){expirationTime=Sync}else{expirationTime=computeAsyncExpiration()}return expirationTime}({beginWork:beginWork}=ReactFiberBeginWork(config,hostContext,scheduleWork,computeExpirationForFiber));return{computeAsyncExpiration:computeAsyncExpiration,computeExpirationForFiber:computeExpirationForFiber,scheduleWork:scheduleWork}};const reactReconciler=config=>{const{computeAsyncExpiration:computeAsyncExpiration,scheduleWork:scheduleWork,computeExpirationForFiber:computeExpirationForFiber}=ReactFiberScheduler(config);function scheduleTopLevelUpdate(current,element,callback){let expirationTime;if(enableAsyncSubtreeAPI&&element!=null&&element.type!=null&&element.type.prototype!=null&&element.type.prototype.unstable_isAsyncReactComponent===true){expirationTime=computeAsyncExpiration()}else{expirationTime=computeExpirationForFiber(current)}const update={expirationTime:expirationTime,partialState:{element:element},callback:callback===undefined?null:callback,isReplace:false,isForced:false,nextCallback:null,next:null};insertUpdateIntoFiber(current,update);scheduleWork(current,expirationTime)}return{createContainer:containerName=>createFiberRoot(containerName),updateContainer:(container,element,parentComponent,callback)=>{const container_=container;const{current:current}=container_;const context=getContextForSubtree(parentComponent);if(container_.context===null){container_.context=context}else{container_.pendingContext=context}scheduleTopLevelUpdate(current,element,callback)}}};const DOMRenderer=reactReconciler({getRootHostContext(){return{namespace:"http://www.w3.org/1999/xhtml",ancestorInfo:{current:{tag:"div"}}}},createInstance(internalInstanceHandle){return Object.assign({},internalInstanceHandle,{nativeNodeName:internalInstanceHandle.type,nativeNodeProps:internalInstanceHandle.memoizedProps})},createTextInstance(text,rootContainerInstance,hostContext,internalInstanceHandle){const textNode=createTextNode(text,rootContainerInstance);if(textNode){precacheFiberNode(internalInstanceHandle,textNode)}return textNode},mutation:{commitMount(domElement){domElement.focus()},resetTextContent(domElement){const ele=domElement;ele.textContent=""}},prepareForCommit(){eventsEnabled=isEnabled();setEnabled(false)},resetAfterCommit(){setEnabled(eventsEnabled);eventsEnabled=null},prepareUpdate(oldProps,newProps,rootContainerInstance){return diffProperties(oldProps,newProps,rootContainerInstance)},getPublicInstance(instance){return instance},getChildHostContext(parentHostContext,type){const parentHostContextDev=parentHostContext;const _namespace=getChildNamespace(parentHostContextDev.namespace,type);const _ancestorInfo2={};return{namespace:_namespace,ancestorInfo:_ancestorInfo2}},shouldSetTextContent(type,props){return type==="textarea"||typeof props.children==="string"||typeof props.children==="number"||typeof props.dangerouslySetInnerHTML==="object"&&props.dangerouslySetInnerHTML!==null&&typeof props.dangerouslySetInnerHTML.__html==="string"},shouldDeprioritizeSubtree(type,props){return!!props.hidden}});var _unused_webpack_default_export=DOMRenderer},"./node_modules/@tencent/hippy-react/lib/modules/Animation.js":function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});__webpack_require__.d(__webpack_exports__,"Animation",(function(){return Animation}));var __WEBPACK_IMPORTED_MODULE_0__util_Log__=__webpack_require__("./node_modules/@tencent/hippy-react/lib/util/Log.js");var __WEBPACK_IMPORTED_MODULE_1__native__=__webpack_require__("./node_modules/@tencent/hippy-react/lib/native.js");const repeatCountDict=repeatCount=>{if(repeatCount==="loop"){return-1}return repeatCount};const AnimationEventEmitter=new Event.Emitter;let Animation=class Animation{constructor(config){let startValue=0;if(config.startValue&&config.startValue.constructor&&config.startValue.constructor.name==="Animation"){startValue={animationId:config.startValue.animationId}}else{({startValue:startValue}=config)}this.mode=config.mode||"timing";this.delay=config.delay||0;this.startValue=startValue||0;this.toValue=config.toValue||0;this.valueType=config.valueType||undefined;this.duration=config.duration||0;this.direction=config.direction||"center";this.timingFunction=config.timingFunction||"linear";this.repeatCount=repeatCountDict(config.repeatCount||0);this.inputRange=config.inputRange||[];this.outputRange=config.outputRange||[];this.animationId=__WEBPACK_IMPORTED_MODULE_1__native__["Bridge"].callNativeWithCallbackId("AnimationModule","createAnimation",true,this.mode,Object.assign({delay:this.delay,startValue:this.startValue,toValue:this.toValue,duration:this.duration,direction:this.direction,timingFunction:this.timingFunction,repeatCount:this.repeatCount,inputRange:this.inputRange,outputRange:this.outputRange},this.valueType?{valueType:this.valueType}:{}));this.destroy=this.destroy.bind(this);this.onRNfqbAnimationStart=this.onHippyAnimationStart.bind(this);this.onRNfqbAnimationEnd=this.onHippyAnimationEnd.bind(this);this.onRNfqbAnimationCancel=this.onHippyAnimationCancel.bind(this);this.onRNfqbAnimationRepeat=this.onHippyAnimationRepeat.bind(this)}start(){this.removeEventListener();let animationEventName="onAnimation";if(true){animationEventName="onHippyAnimation"}else if(Device.platform.OS==="android"){animationEventName="onHippyAnimation"}if(typeof this.onAnimationStartCallback==="function"){this.animationStartListener=AnimationEventEmitter.addListener(`${animationEventName}Start`,animationId=>{if(animationId===this.animationId){this.animationStartListener.remove();if(typeof this.onAnimationStartCallback==="function"){this.onAnimationStartCallback()}}})}if(typeof this.onAnimationEndCallback==="function"){this.animationEndListener=AnimationEventEmitter.addListener(`${animationEventName}End`,animationId=>{if(animationId===this.animationId){this.animationEndListener.remove();if(typeof this.onAnimationEndCallback==="function"){this.onAnimationEndCallback()}}})}if(typeof this.onAnimationCancelCallback==="function"){this.animationCancelListener=AnimationEventEmitter.addListener(`${animationEventName}Cancel`,animationId=>{if(animationId===this.animationId){this.animationCancelListener.remove();if(typeof this.onAnimationCancelCallback==="function"){this.onAnimationCancelCallback()}}})}if(typeof this.onAnimationRepeatCallback==="function"){this.animationRepeatListener=AnimationEventEmitter.addListener(`${animationEventName}Repeat`,animationId=>{if(animationId===this.animationId){if(typeof this.onAnimationRepeatCallback==="function"){this.onAnimationRepeatCallback()}}})}__WEBPACK_IMPORTED_MODULE_1__native__["Bridge"].callNative("AnimationModule","startAnimation",this.animationId)}removeEventListener(){if(this.animationStartListener){this.animationStartListener.remove()}if(this.animationEndListener){this.animationEndListener.remove()}if(this.animationCancelListener){this.animationCancelListener.remove()}if(this.animationRepeatListener){this.animationRepeatListener.remove()}}destory(){__WEBPACK_IMPORTED_MODULE_0__util_Log__["default"].warn("Animation.destory() method will be deprecated soon, please use Animation.destroy() as soon as possible");this.destroy()}destroy(){this.removeEventListener();__WEBPACK_IMPORTED_MODULE_1__native__["Bridge"].callNative("AnimationModule","destroyAnimation",this.animationId)}pause(){__WEBPACK_IMPORTED_MODULE_1__native__["Bridge"].callNative("AnimationModule","pauseAnimation",this.animationId)}resume(){__WEBPACK_IMPORTED_MODULE_1__native__["Bridge"].callNative("AnimationModule","resumeAnimation",this.animationId)}updateAnimation(newConfig){if(typeof newConfig!=="object"){throw new TypeError("Invalid arguments")}if(typeof newConfig.mode==="string"&&newConfig.mode!==this.mode){throw new TypeError("Update animation mode not supported")}Object.entries(newConfig).forEach(([prop,value])=>{if(prop==="startValue"){let startValue=0;if(newConfig.startValue.constructor&&newConfig.startValue.constructor.name==="Animation"){startValue={animationId:newConfig.startValue.animationId}}else{({startValue:startValue}=newConfig)}this.startValue=startValue||0}else if(prop==="repeatCount"){this.repeatCount=repeatCountDict(newConfig.repeatCount||0)}else{this[prop]=value}});__WEBPACK_IMPORTED_MODULE_1__native__["Bridge"].callNative("AnimationModule","updateAnimation",this.animationId,Object.assign({delay:this.delay,startValue:this.startValue,toValue:this.toValue,duration:this.duration,direction:this.direction,timingFunction:this.timingFunction,repeatCount:this.repeatCount,inputRange:this.inputRange,outputRange:this.outputRange},this.valueType?{valueType:this.valueType}:{}))}onAnimationStart(cb){this.onAnimationStartCallback=cb}onAnimationEnd(cb){this.onAnimationEndCallback=cb}onAnimationCancel(cb){this.onAnimationCancelCallback=cb}onAnimationRepeat(cb){this.onAnimationRepeatCallback=cb}onHippyAnimationStart(cb){__WEBPACK_IMPORTED_MODULE_0__util_Log__["default"].warn("onHippyAnimationStart will deprecate soon, please change to use onAnimationStart");this.onAnimationStart(cb)}onHippyAnimationEnd(cb){__WEBPACK_IMPORTED_MODULE_0__util_Log__["default"].warn("onHippyAnimationEnd will deprecate soon, please change to use onAnimationEnd");this.onAnimationEnd(cb)}onHippyAnimationCancel(cb){__WEBPACK_IMPORTED_MODULE_0__util_Log__["default"].warn("onHippyAnimationCancel will deprecate soon, please change to use onAnimationCancel");this.onAnimationCancel(cb)}onHippyAnimationRepeat(cb){__WEBPACK_IMPORTED_MODULE_0__util_Log__["default"].warn("onHippyAnimationRepeat will deprecate soon, please change to use onAnimationRepeat");this.onAnimationRepeat(cb)}};__webpack_exports__["default"]=Animation},"./node_modules/@tencent/hippy-react/lib/modules/AnimationSet.js":function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});__webpack_require__.d(__webpack_exports__,"AnimationSet",(function(){return AnimationSet}));var __WEBPACK_IMPORTED_MODULE_0__util_Log__=__webpack_require__("./node_modules/@tencent/hippy-react/lib/util/Log.js");var __WEBPACK_IMPORTED_MODULE_1__native__=__webpack_require__("./node_modules/@tencent/hippy-react/lib/native.js");const repeatCountDict=repeatCount=>{if(repeatCount==="loop"){return-1}return repeatCount};const AnimationEventEmitter=new Event.Emitter;let AnimationSet=class AnimationSet{constructor(config){this.animationList=[];config.children.forEach(item=>{this.animationList.push({animationId:item.animation.animationId,follow:item.follow||false})});this.animationId=__WEBPACK_IMPORTED_MODULE_1__native__["Bridge"].callNativeWithCallbackId("AnimationModule","createAnimationSet",true,{repeatCount:repeatCountDict(config.repeatCount||0),children:this.animationList,virtual:config.virtual});this.onRNfqbAnimationStart=this.onHippyAnimationStart.bind(this);this.onRNfqbAnimationEnd=this.onHippyAnimationEnd.bind(this);this.onRNfqbAnimationCancel=this.onHippyAnimationCancel.bind(this);this.onRNfqbAnimationRepeat=this.onHippyAnimationRepeat.bind(this)}start(){this.removeEventListener();let animationEventName="onAnimation";if(true){animationEventName="onHippyAnimation"}else if(Device.platform.OS==="android"){animationEventName="onHippyAnimation"}if(typeof this.onAnimationStartCallback==="function"){this.animationStartListener=AnimationEventEmitter.addListener(`${animationEventName}Start`,animationId=>{if(animationId===this.animationId){this.animationStartListener.remove();if(typeof this.onAnimationStartCallback==="function"){this.onAnimationStartCallback()}}})}if(typeof this.onAnimationEndCallback==="function"){this.animationEndListener=AnimationEventEmitter.addListener(`${animationEventName}End`,animationId=>{if(animationId===this.animationId){this.animationEndListener.remove();if(typeof this.onAnimationEndCallback==="function"){this.onAnimationEndCallback()}}})}if(typeof this.onAnimationCancelCallback==="function"){this.animationCancelListener=AnimationEventEmitter.addListener(`${animationEventName}Cancel`,animationId=>{if(animationId===this.animationId){this.animationCancelListener.remove();if(typeof this.onAnimationCancelCallback==="function"){this.onAnimationCancelCallback()}}})}if(typeof this.onAnimationRepeatCallback==="function"){this.animationRepeatListener=AnimationEventEmitter.addListener(`${animationEventName}Repeat`,animationId=>{if(animationId===this.animationId){if(typeof this.onAnimationRepeatCallback==="function"){this.onAnimationRepeatCallback()}}})}__WEBPACK_IMPORTED_MODULE_1__native__["Bridge"].callNative("AnimationModule","startAnimation",this.animationId)}removeEventListener(){if(this.animationStartListener){this.animationStartListener.remove()}if(this.animationEndListener){this.animationEndListener.remove()}if(this.animationCancelListener){this.animationCancelListener.remove()}if(this.animationRepeatListener){this.animationRepeatListener.remove()}}destory(){__WEBPACK_IMPORTED_MODULE_0__util_Log__["default"].warn("AnimationSet.destory() method will be deprecated soon, please use Animation.destroy() as soon as possible");this.destroy()}destroy(){this.removeEventListener();__WEBPACK_IMPORTED_MODULE_1__native__["Bridge"].callNative("AnimationModule","destroyAnimation",this.animationId)}pause(){__WEBPACK_IMPORTED_MODULE_1__native__["Bridge"].callNative("AnimationModule","pauseAnimation",this.animationId)}resume(){__WEBPACK_IMPORTED_MODULE_1__native__["Bridge"].callNative("AnimationModule","resumeAnimation",this.animationId)}onAnimationStart(cb){this.onAnimationStartCallback=cb}onAnimationEnd(cb){this.onAnimationEndCallback=cb}onAnimationCancel(cb){this.onAnimationCancelCallback=cb}onAnimationRepeat(cb){this.onAnimationRepeatCallback=cb}onHippyAnimationStart(cb){__WEBPACK_IMPORTED_MODULE_0__util_Log__["default"].warn("onHippyAnimationStart will deprecate soon, please change to use onAnimationStart");this.onAnimationStart(cb)}onHippyAnimationEnd(cb){__WEBPACK_IMPORTED_MODULE_0__util_Log__["default"].warn("onHippyAnimationEnd will deprecate soon, please change to use onAnimationEnd");this.onAnimationEnd(cb)}onHippyAnimationCancel(cb){__WEBPACK_IMPORTED_MODULE_0__util_Log__["default"].warn("onHippyAnimationCancel will deprecate soon, please change to use onAnimationCancel");this.onAnimationCancel(cb)}onHippyAnimationRepeat(cb){__WEBPACK_IMPORTED_MODULE_0__util_Log__["default"].warn("onHippyAnimationRepeat will deprecate soon, please change to use onAnimationRepeat");this.onAnimationRepeat(cb)}};__webpack_exports__["default"]=AnimationSet},"./node_modules/@tencent/hippy-react/lib/modules/BackAndroid.js":function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});var __WEBPACK_IMPORTED_MODULE_0__native__=__webpack_require__("./node_modules/@tencent/hippy-react/lib/native.js");const hippyEventEmitter=new Event.Emitter;const backPressSubscriptions=new Set;const BackAndroid={exitApp(){__WEBPACK_IMPORTED_MODULE_0__native__["Bridge"].callNative("DeviceEventModule","invokeDefaultBackPressHandler")},addListener(handler){__WEBPACK_IMPORTED_MODULE_0__native__["Bridge"].callNative("DeviceEventModule","setListenBackPress",true);backPressSubscriptions.add(handler);return{remove:()=>BackAndroid.removeListener(handler)}},removeListener(handler){backPressSubscriptions.delete(handler);if(backPressSubscriptions.size===0){__WEBPACK_IMPORTED_MODULE_0__native__["Bridge"].callNative("DeviceEventModule","setListenBackPress",false)}}};hippyEventEmitter.addListener("hardwareBackPress",()=>{let invokeDefault=true;const subscriptions=[...backPressSubscriptions].reverse();subscriptions.every(subscription=>{if(subscription()){invokeDefault=false;return false}return true});if(invokeDefault){BackAndroid.exitApp()}});__webpack_exports__["default"]=BackAndroid},"./node_modules/@tencent/hippy-react/lib/modules/Clipboard.js":function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});__webpack_require__.d(__webpack_exports__,"Clipboard",(function(){return Clipboard}));var __WEBPACK_IMPORTED_MODULE_0__native__=__webpack_require__("./node_modules/@tencent/hippy-react/lib/native.js");let Clipboard=class Clipboard{static getString(){return __WEBPACK_IMPORTED_MODULE_0__native__["Bridge"].callNativeWithPromise("ClipboardModule","getString")}static setString(text){__WEBPACK_IMPORTED_MODULE_0__native__["Bridge"].callNative("ClipboardModule","setString",text)}};__webpack_exports__["default"]=Clipboard},"./node_modules/@tencent/hippy-react/lib/modules/ImageLoaderModule.js":function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});var __WEBPACK_IMPORTED_MODULE_0__native__=__webpack_require__("./node_modules/@tencent/hippy-react/lib/native.js");const ImageHelper={getSize(url){return __WEBPACK_IMPORTED_MODULE_0__native__["Bridge"].callNativeWithPromise("ImageLoaderModule","getSize",url)},prefetch(url){__WEBPACK_IMPORTED_MODULE_0__native__["Bridge"].callNative("ImageLoaderModule","prefetch",url)}};__webpack_exports__["default"]=ImageHelper},"./node_modules/@tencent/hippy-react/lib/modules/NetInfo.js":function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});var __WEBPACK_IMPORTED_MODULE_0__native__=__webpack_require__("./node_modules/@tencent/hippy-react/lib/native.js");const DEVICE_CONNECTIVITY_EVENT="networkStatusDidChange";const subScriptions=new Map;let NetInfoEventEmitter;let NetInfoRevoker=class NetInfoRevoker{constructor(eventName,handler){this.eventName=eventName;this.handler=handler}remove(){if(this.eventName&&this.handler){NetInfo.removeEventListener(this.eventName,this.handler)}delete this.handler}};const NetInfo={addEventListener(eventName,handler){NetInfoEventEmitter=new Event.Emitter;let event=eventName;if(eventName&&eventName==="change"){event=DEVICE_CONNECTIVITY_EVENT}const count=NetInfoEventEmitter.listenerSize(event);if(count<1){__WEBPACK_IMPORTED_MODULE_0__native__["Bridge"].callNative("NetInfo","addListener",event)}const listener=NetInfoEventEmitter.addListener(event,data=>{handler(data)});subScriptions.set(handler,listener);return new NetInfoRevoker(event,handler)},removeEventListener(eventName,handler){if(handler instanceof NetInfoRevoker){handler.remove();return}let event=eventName;if(eventName&&eventName==="change"){event=DEVICE_CONNECTIVITY_EVENT}const count=NetInfoEventEmitter.listenerSize(event);if(count<=1){__WEBPACK_IMPORTED_MODULE_0__native__["Bridge"].callNative("NetInfo","removeListener",event)}const listener=subScriptions.get(handler);if(!listener){return}listener.remove();subScriptions.delete(handler)},fetch(){return __WEBPACK_IMPORTED_MODULE_0__native__["Bridge"].callNativeWithPromise("NetInfo","getCurrentConnectivity").then(resp=>resp.network_info)}};__webpack_exports__["default"]=NetInfo},"./node_modules/@tencent/hippy-react/lib/modules/NetworkModule.js":function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});var __WEBPACK_IMPORTED_MODULE_0__native__=__webpack_require__("./node_modules/@tencent/hippy-react/lib/native.js");const NetworkModule={getCookies(url){return __WEBPACK_IMPORTED_MODULE_0__native__["Bridge"].callNativeWithPromise("network","getCookie",url)},setCookie(url,keyValue,expires){const expireStr=typeof expires==="string"?expires:"";__WEBPACK_IMPORTED_MODULE_0__native__["Bridge"].callNative("network","setCookie",url,keyValue,expireStr)}};__webpack_exports__["default"]=NetworkModule},"./node_modules/@tencent/hippy-react/lib/modules/StyleSheet.js":function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});var __WEBPACK_IMPORTED_MODULE_0__native__=__webpack_require__("./node_modules/@tencent/hippy-react/lib/native.js");const ratio=__WEBPACK_IMPORTED_MODULE_0__native__["Device"].pixelRatio;let onePixel=Math.round(.4*ratio)/ratio;if(onePixel===0){onePixel=1/ratio}const StyleSheet={create:styleObj=>styleObj,hairlineWidth:onePixel};__webpack_exports__["default"]=StyleSheet},"./node_modules/@tencent/hippy-react/lib/modules/UIManagerModule.js":function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});var __WEBPACK_IMPORTED_MODULE_0__native__=__webpack_require__("./node_modules/@tencent/hippy-react/lib/native.js");const getRootViewId=currentNode=>{let workNode=Object.assign({},currentNode);while(!(workNode&&workNode.memoizedProps&&typeof workNode.memoizedProps.__instanceId__!=="undefined")){workNode=workNode.return;if(!workNode){break}}if(!workNode||!workNode.memoizedProps||!workNode.memoizedProps.__instanceId__){return null}return workNode.memoizedProps.__instanceId__};const UIManagerModule={setNodeTree(rootViewId,newNodeTree){if(__GLOBAL__.nodeTreeCache[rootViewId]){Object.assign(__GLOBAL__.nodeTreeCache[rootViewId],newNodeTree)}else{__GLOBAL__.nodeTreeCache[rootViewId]=newNodeTree}},setNodeId(rootViewId,cacheIdList){if(__GLOBAL__.nodeIdCache[rootViewId]){__GLOBAL__.nodeIdCache[rootViewId]=__GLOBAL__.nodeIdCache[rootViewId].concat(cacheIdList)}else{__GLOBAL__.nodeIdCache[rootViewId]=cacheIdList}},getNodeById(nodeId){let instanceId=0;Object.entries(__GLOBAL__.nodeIdCache).every(([key,value])=>{if(value&&value.includes(nodeId)){instanceId=key;return false}return true});let findNode;if(__GLOBAL__.nodeTreeCache&&__GLOBAL__.nodeTreeCache[instanceId]&&__GLOBAL__.nodeTreeCache[instanceId][nodeId]){findNode=Object.assign({},__GLOBAL__.nodeTreeCache[instanceId][nodeId])}return findNode},getNodeIdByRef(ref){let nodeId;let isFind=false;Object.values(__GLOBAL__.nodeTreeCache).forEach(value=>{Object.values(value).every(cValue=>{const targetId=cValue._debugID;let targetValue=cValue;while(targetValue!=null){if(targetValue&&targetValue.return&&targetValue.return.ref&&targetValue.return.ref._stringRef&&targetValue.return.ref._stringRef===ref){nodeId=targetId;targetValue=null;isFind=true}else{targetValue=targetValue.return}}if(isFind){return false}return true})});return nodeId},callUIFunction(...args){const[node,funcName,...options]=args;let[paramList,callback]=options;let targetNode;let componentName;if(typeof paramList==="function"){callback=paramList;paramList=[]}if(node._reactInternalFiber){targetNode=node._reactInternalFiber.child;componentName=node._reactInternalFiber.child&&node._reactInternalFiber.child.memoizedProps&&node._reactInternalFiber.child.memoizedProps.nativeName||node._reactInternalFiber.type.name}else{targetNode=node;componentName=node&&node.memoizedProps&&node.memoizedProps.nativeName||node.return.type.name}while(targetNode&&targetNode.tag!==5){targetNode=targetNode.child}const nodeId=targetNode?targetNode._debugID:0;const rootViewId=getRootViewId(targetNode);if(rootViewId===null){return}if(!__GLOBAL__.nodeDeleteIdCache[rootViewId][nodeId]){if(__GLOBAL__&&__GLOBAL__.nodeTreeCache&&__GLOBAL__.nodeTreeCache[rootViewId]&&__GLOBAL__.nodeTreeCache[rootViewId][nodeId]){if(__WEBPACK_IMPORTED_MODULE_0__native__["Device"].platform.OS==="ios"){if(typeof callback==="function"&&Array.isArray(paramList)){paramList.push(callback)}__WEBPACK_IMPORTED_MODULE_0__native__["Bridge"].callNative("UIManagerModule","callUIFunction",[componentName,nodeId,funcName,paramList])}else if(__WEBPACK_IMPORTED_MODULE_0__native__["Device"].platform.OS==="android"){if(typeof callback==="function"){__WEBPACK_IMPORTED_MODULE_0__native__["Bridge"].callNative("UIManagerModule","callUIFunction",[nodeId,funcName,paramList],callback)}else{__WEBPACK_IMPORTED_MODULE_0__native__["Bridge"].callNative("UIManagerModule","callUIFunction",[nodeId,funcName,paramList])}}}}},measureInWindow(node,callBack){let targetNode=node._reactInternalFiber.child;while(targetNode&&targetNode.tag!==5){targetNode=targetNode.child}const nodeId=targetNode?targetNode._debugID:0;if(nodeId){__WEBPACK_IMPORTED_MODULE_0__native__["Bridge"].callNative("UIManagerModule","measureInWindow",nodeId,callBack)}},createNode:__WEBPACK_IMPORTED_MODULE_0__native__["UIManager"].createNode,updateNode:__WEBPACK_IMPORTED_MODULE_0__native__["UIManager"].updateNode,deleteNode:__WEBPACK_IMPORTED_MODULE_0__native__["UIManager"].deleteNode,flushBatch:__WEBPACK_IMPORTED_MODULE_0__native__["UIManager"].flushBatch,startBatch:__WEBPACK_IMPORTED_MODULE_0__native__["UIManager"].startBatch,endBatch:__WEBPACK_IMPORTED_MODULE_0__native__["UIManager"].endBatch,sendRenderError:__WEBPACK_IMPORTED_MODULE_0__native__["UIManager"].sendRenderError};__webpack_exports__["default"]=UIManagerModule},"./node_modules/@tencent/hippy-react/lib/native.js":function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});__webpack_require__.d(__webpack_exports__,"Device",(function(){return Device}));__webpack_require__.d(__webpack_exports__,"Bridge",(function(){return Bridge}));__webpack_require__.d(__webpack_exports__,"HippyRegister",(function(){return HippyRegister}));__webpack_require__.d(__webpack_exports__,"HippyOn",(function(){return HippyOn}));__webpack_require__.d(__webpack_exports__,"UIManager",(function(){return UIManager}));__webpack_require__.d(__webpack_exports__,"AsyncStorage",(function(){return AsyncStorage}));const{device:Device,bridge:Bridge,register:HippyRegister,on:HippyOn,document:UIManager,asyncStorage:AsyncStorage}=Hippy},"./node_modules/@tencent/hippy-react/lib/transfer/colorParse/color2int.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__["default"]=baseColor;const names={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199};const call=(...args)=>`\\(\\s*(${args.join(")\\s*,\\s*(")})\\s*\\)`;const NUMBER="[-+]?\\d*\\.?\\d+";const PERCENTAGE=`${NUMBER}%`;const matchers={rgb:new RegExp(`rgb${call(NUMBER,NUMBER,NUMBER)}`),rgba:new RegExp(`rgba${call(NUMBER,NUMBER,NUMBER,NUMBER)}`),hsl:new RegExp(`hsl${call(NUMBER,PERCENTAGE,PERCENTAGE)}`),hsla:new RegExp(`hsla${call(NUMBER,PERCENTAGE,PERCENTAGE,NUMBER)}`),hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex4:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{6})$/,hex8:/^#([0-9a-fA-F]{8})$/};const parse255=str=>{const int=parseInt(str,10);if(int<0){return 0}if(int>255){return 255}return int};const parse1=str=>{const num=parseFloat(str);if(num<0){return 0}if(num>1){return 255}return Math.round(num*255)};const hue2rgb=(p,q,tx)=>{let t=tx;if(t<0){t+=1}if(t>1){t-=1}if(t<1/6){return p+(q-p)*6*t}if(t<1/2){return q}if(t<2/3){return p+(q-p)*(2/3-t)*6}return p};const hslToRgb=(h,s,l)=>{const q=l<.5?l*(1+s):l+s-l*s;const p=2*l-q;const r=hue2rgb(p,q,h+1/3);const g=hue2rgb(p,q,h);const b=hue2rgb(p,q,h-1/3);return Math.round(r*255)<<24|Math.round(g*255)<<16|Math.round(b*255)<<8};const parse360=str=>{const int=parseFloat(str);return(int%360+360)%360/360};const parsePercentage=str=>{const int=parseFloat(str,10);if(int<0){return 0}if(int>100){return 1}return int/100};function baseColor(color){let match;if(typeof color==="number"){if(color>>>0===color&&color>=0&&color<=4294967295){return color}return null}match=matchers.hex6.exec(color);if(Array.isArray(match)){return parseInt(`${match[1]}ff`,16)>>>0}if(Object.hasOwnProperty.call(names,color)){return names[color]}match=matchers.rgb.exec(color);if(Array.isArray(match)){return(parse255(match[1])<<24|parse255(match[2])<<16|parse255(match[3])<<8|255)>>>0}match=matchers.rgba.exec(color);if(match){return(parse255(match[1])<<24|parse255(match[2])<<16|parse255(match[3])<<8|parse1(match[4]))>>>0}match=matchers.hex3.exec(color);if(match){return parseInt(`${match[1]+match[1]+match[2]+match[2]+match[3]+match[3]}ff`,16)>>>0}match=matchers.hex8.exec(color);if(match){return parseInt(match[1],16)>>>0}match=matchers.hex4.exec(color);if(match){return parseInt(match[1]+match[1]+match[2]+match[2]+match[3]+match[3]+match[4]+match[4],16)>>>0}match=matchers.hsl.exec(color);if(match){return(hslToRgb(parse360(match[1]),parsePercentage(match[2]),parsePercentage(match[3]))|255)>>>0}match=matchers.hsla.exec(color);if(match){return(hslToRgb(parse360(match[1]),parsePercentage(match[2]),parsePercentage(match[3]))|parse1(match[4]))>>>0}return null}},"./node_modules/@tencent/hippy-react/lib/transfer/colorParse/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});__webpack_require__.d(__webpack_exports__,"colorParse",(function(){return colorParse}));__webpack_require__.d(__webpack_exports__,"colorArrayParse",(function(){return colorArrayParse}));var __WEBPACK_IMPORTED_MODULE_0__native__=__webpack_require__("./node_modules/@tencent/hippy-react/lib/native.js");var __WEBPACK_IMPORTED_MODULE_1__color2int__=__webpack_require__("./node_modules/@tencent/hippy-react/lib/transfer/colorParse/color2int.js");const colorParse=color=>{let int32Color=Object(__WEBPACK_IMPORTED_MODULE_1__color2int__["default"])(color);if(int32Color===null){return undefined}int32Color=(int32Color<<24|int32Color>>>8)>>>0;if(__WEBPACK_IMPORTED_MODULE_0__native__["Device"].platform.OS==="android"){int32Color|=0}return int32Color};const colorArrayParse=colorArray=>{if(Array.isArray(colorArray)){return colorArray.map(color=>colorParse(color))}return colorArray}},"./node_modules/@tencent/hippy-react/lib/util/Log.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"default",(function(){return Log}));let Log=class Log{static log(...arg){console.log(...arg)}static warn(...arg){console.warn(...arg)}static info(...arg){console.info(...arg)}static error(...arg){console.error(...arg)}}},"./node_modules/@tencent/hippy-react/lib/util/UnicodeToChar.js":function(module,__webpack_exports__,__webpack_require__){"use strict";function unicodeToChar(text){return text.replace(/\\u[\dA-F]{4}|\\x[\dA-F]{2}/gi,match=>String.fromCharCode(parseInt(match.replace(/\\u|\\x/g,""),16)))}__webpack_exports__["default"]=unicodeToChar},"./node_modules/@tencent/hippy-rpc/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});(function(global){__webpack_require__.d(__webpack_exports__,"Communicator",(function(){return Communicator}));__webpack_require__.d(__webpack_exports__,"client",(function(){return client}));__webpack_require__.d(__webpack_exports__,"error",(function(){return ErrorCodes}));var __WEBPACK_IMPORTED_MODULE_0_assert__=__webpack_require__("./node_modules/assert/assert.js");var __WEBPACK_IMPORTED_MODULE_0_assert___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_assert__);var __WEBPACK_IMPORTED_MODULE_1_buffer__=__webpack_require__("./node_modules/node-libs-browser/node_modules/buffer/index.js");var __WEBPACK_IMPORTED_MODULE_1_buffer___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_buffer__);var __WEBPACK_IMPORTED_MODULE_2__tencent_hippy_stream__=__webpack_require__("./node_modules/@tencent/hippy-rpc/node_modules/@tencent/hippy-stream/index.js");var __WEBPACK_IMPORTED_MODULE_2__tencent_hippy_stream___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__tencent_hippy_stream__);var ErrorCodes={SUCCESS:0,CLIENT:{DECODE_ERROR:-11e3,REQUEST_TIMEOUT:-13001}};const{callNativeWithPromise:callNativeWithPromise}=global.Hippy.bridge;const kOptions=Symbol("kOptions");const kInvoke=Symbol("kInvoke");const kName=Symbol("kName");const kDefaultOptions={timeout:30*1e3};if(!global.__HIPPYNATIVEGLOBAL__.Platform){global.__HIPPYNATIVEGLOBAL__.Platform={}}const MODULE_NAME=global.__HIPPYNATIVEGLOBAL__.Platform.PackageName==="mqq"?"TKDWupModule":"QBWupModule";let ObjectProxy=class ObjectProxy{constructor(name,options){this[kName]=name;this[kOptions]=Object.assign(kDefaultOptions,options)}set timeout(iTimeout){this[kOptions].timeout=iTimeout}get timeout(){return this[kOptions].timeout}set version(iVersion){__WEBPACK_IMPORTED_MODULE_0_assert___default.a.fail("unchangeable")}get version(){return __WEBPACK_IMPORTED_MODULE_2__tencent_hippy_stream__["UniAttribute"].WUP_SIMPLE}taf_invoke(){__WEBPACK_IMPORTED_MODULE_0_assert___default.a.fail("notsupport")}wup_invoke(funcName,wupAttribute,extProperty,funcInfo){let header="";let context=null;if(typeof extProperty==="object"&&extProperty!==null){if(Object.prototype.hasOwnProperty.call(extProperty,"header")&&typeof extProperty.header==="string"){({header:header}=extProperty)}if(typeof extProperty.context==="object"){({context:context}=extProperty)}}__WEBPACK_IMPORTED_MODULE_0_assert___default()(funcInfo.arguments.length>0&&funcInfo.arguments.length<=2,"arguments signature(<struct>, out <struct>) mismatch");let reqName="";let reqClassName="";let rspName="";for(const argument of funcInfo.arguments){switch(argument.direction){case"in":{reqName=argument.name;reqClassName=argument.class;break}case"out":{rspName=argument.name;break}default:{__WEBPACK_IMPORTED_MODULE_0_assert___default.a.fail("proxy file version mismatch")}}}__WEBPACK_IMPORTED_MODULE_0_assert___default()(reqName!==""&&reqClassName!=="","arguments signature(<struct>, out <struct>) mismatch");const reqMessage={serviceName:this[kName],funcName:funcName,reqName:reqName,reqClassName:reqClassName,rspName:rspName,header:header};if(context!==null){reqMessage.headers=context}const reqPayload=wupAttribute._data.get(reqName);__WEBPACK_IMPORTED_MODULE_0_assert___default()(reqPayload!==undefined,`${reqName} not found in data`);reqMessage.base64data=reqPayload.toNodeBuffer().toString("base64");return this[kInvoke](reqMessage)}[kInvoke](reqMessage){const startTime=Date.now();return new Promise((resolve,reject)=>{let timer=setTimeout(()=>{timer=null;reject({code:ErrorCodes.CLIENT.REQUEST_TIMEOUT,cause:"request timeout"})},this[kOptions].timeout);callNativeWithPromise(MODULE_NAME,"send",reqMessage).then(result=>{if(timer===null){return}clearTimeout(timer);timer=null;if(result.code===ErrorCodes.SUCCESS){const wup=new __WEBPACK_IMPORTED_MODULE_2__tencent_hippy_stream__["UniAttribute"];wup.wupVersion=__WEBPACK_IMPORTED_MODULE_2__tencent_hippy_stream__["UniAttribute"].WUP_SIMPLE;if(reqMessage.rspName!==""){try{wup._data.set(reqMessage.rspName,new __WEBPACK_IMPORTED_MODULE_2__tencent_hippy_stream__["BinBuffer"](__WEBPACK_IMPORTED_MODULE_1_buffer__["Buffer"].from(result.body,"base64")))}catch(err){reject({code:ErrorCodes.CLIENT.DECODE_ERROR,cause:`${err}`});return}}resolve({wup:wup,context:result.headers})}else{reject({code:result.code,cause:"result code != 0"})}},err=>{if(timer===null){return}clearTimeout(timer);timer=null;reject(err)})}).then(({wup:wup,context:context})=>({request:{message:reqMessage,costtime:Date.now()-startTime},response:{wup:wup,context:context}}),err=>{throw{request:{costtime:Date.now()-startTime,message:reqMessage},error:{code:err.code,message:err.cause}}})}};const kCreateObjectProxy=Symbol("kCreateObjectProxy");const kProperty=Symbol("kProperty");let Communicator=class Communicator{static New(){return new Communicator}constructor(){this[kProperty]={}}setProperty(key,value){this[kProperty][key]=value}getProperty(key,value){return this[kProperty][key]||value}stringToProxy(Handler,name){__WEBPACK_IMPORTED_MODULE_0_assert___default()(Handler,"please specify the arguments[0] for ProxyHandle");__WEBPACK_IMPORTED_MODULE_0_assert___default()(typeof name==="string"&&name!=="","please specify the arguments[1] for ServiceName");const proxy=new Handler;proxy._name=name;proxy._worker=this[kCreateObjectProxy](name);return proxy}[kCreateObjectProxy](name){const options={};const timeout=this.getProperty("timeout");if(timeout>0){options.timeout=timeout}return new ObjectProxy(name,options)}};const client=Communicator.New()}).call(__webpack_exports__,__webpack_require__("./node_modules/hippy-pack/buildin/global.js"))},"./node_modules/@tencent/hippy-rpc/node_modules/@tencent/hippy-stream/index.js":function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/@tencent/taf-stream/libjce.js")},"./node_modules/@tencent/hippy-stream/index.js":function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/@tencent/taf-stream/libjce.js")},"./node_modules/@tencent/taf-stream/libjce.js":function(module,exports,__webpack_require__){(function(Buffer){var assert=__webpack_require__("./node_modules/assert/assert.js");var util=__webpack_require__("./node_modules/util/util.js");var Big=__webpack_require__("./node_modules/big.js/big.js");var Taf=module.exports={};var BIT32=4294967296;var BIT31=BIT32/2;Taf.JceException=function($code,$message){this.code=$code;this.message=$message};util.inherits(Taf.JceException,Error);Taf.JceEncodeException=function($message){this.code=-2;this.message=$message};util.inherits(Taf.JceEncodeException,Taf.JceException);Taf.JceDecodeException=function($message){this.code=-1;this.message=$message};util.inherits(Taf.JceDecodeException,Taf.JceException);Taf.JceDecodeMismatch=function($message){this.code=-1;this.message=$message};util.inherits(Taf.JceDecodeMismatch,Taf.JceDecodeException);Taf.JceDecodeRequireNotExist=function($message){this.code=-1;this.message=$message};util.inherits(Taf.JceDecodeRequireNotExist,Taf.JceDecodeException);Taf.JceDecodeInvalidValue=function($message){this.code=-1;this.message=$message};util.inherits(Taf.JceDecodeInvalidValue,Taf.JceDecodeException);Taf.WupNotFoundKey=function($message){this.code=-1;this.message=$message};util.inherits(Taf.WupNotFoundKey,Taf.JceException);Taf.DataHelp={EN_INT8:0,EN_INT16:1,EN_INT32:2,EN_INT64:3,EN_FLOAT:4,EN_DOUBLE:5,EN_STRING1:6,EN_STRING4:7,EN_MAP:8,EN_LIST:9,EN_STRUCTBEGIN:10,EN_STRUCTEND:11,EN_ZERO:12,EN_SIMPLELIST:13};Taf.Boolean={_write:function(os,tag,val){return os.writeBoolean(tag,val)},_read:function(is,tag,def){return is.readBoolean(tag,true,def)},_classname:"bool"};Taf.Int8={_write:function(os,tag,val){return os.writeInt8(tag,val)},_read:function(is,tag,def){return is.readInt8(tag,true,def)},_classname:"char"};Taf.Int16={_write:function(os,tag,val){return os.writeInt16(tag,val)},_read:function(is,tag,def){return is.readInt16(tag,true,def)},_classname:"short"};Taf.Int32={_write:function(os,tag,val){return os.writeInt32(tag,val)},_read:function(is,tag,def){return is.readInt32(tag,true,def)},_classname:"int32"};Taf.Int64={_write:function(os,tag,val,bString){return os.writeInt64(tag,val,bString)},_read:function(is,tag,def,bString){return is.readInt64(tag,true,def,bString)},_classname:"int64"};Taf.UInt8={_write:function(os,tag,val){return os.writeInt16(tag,val)},_read:function(is,tag,def){return is.readInt16(tag,true,def)},_classname:"short"};Taf.UInt16={_write:function(os,tag,val){return os.writeInt32(tag,val)},_read:function(is,tag,def){return is.readInt32(tag,true,def)},_classname:"int32"};Taf.UInt32={_write:function(os,tag,val){return os.writeInt64(tag,val)},_read:function(is,tag,def){return is.readInt64(tag,true,def)},_classname:"int64"};Taf.Float={_write:function(os,tag,val){return os.writeFloat(tag,val)},_read:function(is,tag,def){return is.readFloat(tag,true,def)},_classname:"float"};Taf.Double={_write:function(os,tag,val){return os.writeDouble(tag,val)},_read:function(is,tag,def){return is.readDouble(tag,true,def)},_classname:"double"};Taf.String={_write:function(os,tag,val,bRaw){return os.writeString(tag,val,bRaw)},_read:function(is,tag,def,bRaw){return is.readString(tag,true,def,bRaw)},_classname:"string"};Taf.Enum={_write:function(os,tag,val){return os.writeInt32(tag,val)},_read:function(is,tag,def){return is.readInt32(tag,true,def)},_classname:"int32"};var HeroList=function(proto,bValue){this._proto=proto;this._bValue=bValue||0;this.value=new Array;this._classname="List<"+proto._classname+">"};HeroList.prototype._write=function(os,tag,val,bRaw,bString){return os.writeList(tag,val,bRaw,bString)};HeroList.prototype._read=function(is,tag,def,bRaw,bString){return is.readList(tag,true,def,bRaw,bString)};HeroList.prototype.new=function(){return new HeroList(this._proto)};HeroList.prototype.at=function(index){return this.value[index]};HeroList.prototype.push=function(value){this.value.push(value)};HeroList.prototype.forEach=function(callback){for(var i=0;i<this.value.length;i++){if(callback.call(null,this.value[i],i,this.value)==false)break}};HeroList.prototype.toObject=function(){var tmp=[];for(var i=0,len=this.value.length;i<len;i++){tmp.push(!this.value[i].toObject?this.value[i]:this.value[i].toObject())}return tmp};HeroList.prototype.readFromObject=function(json){var vsimple=!this._proto.create&&!this._proto._vproto&&!this._proto._proto&&!this._proto.new;for(var i=0,len=json.length;i<len;i++){if(vsimple){this.push(json[i])}else{var temp=this._proto.new();temp.readFromObject(json[i]);this.push(temp)}}return this};HeroList.prototype.__defineGetter__("length",(function(){return this.value.length}));Taf.List=function(proto,bValue){return new HeroList(proto,bValue)};var MultiMap=function(kproto,vproto,bKey,bValue){this._kproto=kproto;this._vproto=vproto;this._bKey=bKey||0;this._bValue=bValue||0;this.keys=new Object;this.value=new Object;this._classname="map<"+kproto._classname+","+vproto._classname+">"};MultiMap.prototype._write=function(os,tag,val,bRaw){return os.writeMap(tag,val,bRaw)};MultiMap.prototype._read=function(is,tag,def,bRaw){return is.readMap(tag,true,def,bRaw)};MultiMap.prototype.put=function(key,value){this.insert(key,value)};MultiMap.prototype.set=function(key,value){this.insert(key,value)};MultiMap.prototype.remove=function(key){delete this.keys[key._genKey()];delete this.value[key._genKey()]};MultiMap.prototype.size=function(){return Object.keys(this.keys||{}).length};MultiMap.prototype.has=function(key){return this.keys.hasOwnProperty(key._genKey())};MultiMap.prototype.insert=function(key,value){var keys=Object.keys(this.keys||{});for(var i=0;i<keys.length;i++){var anItem=keys[i];if(key._equal(this.keys[anItem])){this.value[anItem]=value;return}}this.keys[key._genKey()]=key;this.value[key._genKey()]=value};MultiMap.prototype.get=function(key){var keys=Object.keys(this.keys||{});for(var i=0;i<keys.length;i++){var anItem=keys[i];if(key._equal(this.keys[anItem])){return this.value[anItem]}}return undefined};MultiMap.prototype.clear=function(){delete this.keys;delete this.value;this.keys=new Object;this.value=new Object};MultiMap.prototype.forEach=function(callback){var keys=Object.keys(this.value||{});for(var i=0;i<keys.length;i++){var key=keys[i];if(callback.call(null,this.keys[key],this.value[key])==false)break}};MultiMap.prototype.toObject=function(){assert(false,"multimap has no toObject function")};MultiMap.prototype.readFromObject=function(){assert(false,"multimap has no toObject readFromObject")};var HeroMap=function(kproto,vproto,bKey,bValue){this._kproto=kproto;this._vproto=vproto;this._bKey=bKey||0;this._bValue=bValue||0;this.value=new Object;this._classname="map<"+kproto._classname+","+vproto._classname+">"};HeroMap.prototype._write=function(os,tag,val){return os.writeMap(tag,val)};HeroMap.prototype._read=function(is,tag,def){return is.readMap(tag,true,def)};HeroMap.prototype.new=function(){return new HeroMap(this._kproto,this._vproto)};HeroMap.prototype.put=function(key,value){this.insert(key,value)};HeroMap.prototype.set=function(key,value){this.insert(key,value)};HeroMap.prototype.remove=function(key){delete this.value[key]};HeroMap.prototype.size=function(){return Object.keys(this.value||{}).length};HeroMap.prototype.has=function(key){return this.value.hasOwnProperty(key)};HeroMap.prototype.insert=function(key,value){this.value[key]=value};HeroMap.prototype.get=function(key){return this.value[key]};HeroMap.prototype.clear=function(){delete this.value;this.value=new Object};HeroMap.prototype.forEach=function(callback,bKey){var keys=Object.keys(this.value||{});for(var i=0;i<keys.length;i++){var key=keys[i];switch(this._kproto){case Taf.Int8:case Taf.Int16:case Taf.Int32:case Taf.UInt8:case Taf.UInt16:case Taf.UInt32:case Taf.Float:case Taf.Double:key=Number(key);break;case Taf.Int64:if(!bKey){key=Number(key)}break}if(callback.call(null,key,this.value[key])==false)break}};HeroMap.prototype.toObject=function(){var tmp={};var keys=Object.keys(this.value||{});for(var i=0;i<keys.length;i++){var key=keys[i];tmp[key]=!this.value[key].toObject?this.value[key]:this.value[key].toObject()}return tmp};HeroMap.prototype.readFromObject=function(json){var vsimple=!this._vproto.create&&!this._vproto._vproto&&!this._vproto._proto;var keys=Object.keys(json||{});for(var i=0;i<keys.length;i++){var key=keys[i];if(vsimple){this.insert(key,json[key])}else{var temp=this._vproto.new();temp.readFromObject(json[key]);this.insert(key,temp)}}};Taf.Map=function(kproto,vproto,bKey,bValue){if(kproto.prototype&&kproto.prototype._equal){return new MultiMap(kproto,vproto,bKey,bValue)}return new HeroMap(kproto,vproto,bKey,bValue)};var createNodeBuffer=function(){if("allocUnsafe"in Buffer){return function(data){return Buffer.allocUnsafe(data)}}else{return function(data){return new Buffer(data)}}}();Taf.BinBuffer=function(buffer){if(!buffer){buffer=createNodeBuffer(0)}this._buffer=buffer!=undefined&&buffer instanceof Buffer?buffer:null;this._length=buffer!=undefined&&buffer instanceof Buffer?buffer.length:0;this._capacity=this._length;this._position=0};Taf.BinBuffer._classname="list<char>";Taf.BinBuffer.prototype.__defineGetter__("length",(function(){return this._length}));Taf.BinBuffer.prototype.__defineGetter__("capacity",(function(){return this._capacity}));Taf.BinBuffer.prototype.__defineGetter__("position",(function(){return this._position}));Taf.BinBuffer.prototype.__defineSetter__("position",(function(position){this._position=position}));Taf.BinBuffer._write=function(os,tag,val){return os.writeBytes(tag,val)};Taf.BinBuffer._read=function(os,tag,def){return os.readBytes(tag,true,def)};Taf.BinBuffer.new=function(){return new Taf.BinBuffer};Taf.BinBuffer.from=function(data){var binBuffer=new Taf.BinBuffer;binBuffer.writeString(data);return binBuffer};Taf.BinBuffer.prototype.reset=function(){this._length=0;this._position=0};Taf.BinBuffer.prototype._allocate=function(byteLength){if(this._capacity>this._position+byteLength){return}this._capacity=Math.max(512,(this._position+byteLength)*2);var temp=createNodeBuffer(this._capacity);if(this._buffer!=null){this._buffer.copy(temp,0,0,this._position);this._buffer=undefined}this._buffer=temp};Taf.BinBuffer.prototype.replace=function(srcBuffer,offset,byteLength){srcBuffer.copy(this._buffer,0,offset,offset+byteLength)};Taf.BinBuffer.prototype.writeInt8=function(value){value=+value;this._allocate(1);this._buffer.writeInt8(value,this._position);this._position+=1;this._length=this._position};Taf.BinBuffer.prototype.writeUInt8=function(value){value=+value;this._allocate(1);this._buffer.writeUInt8(value,this._position);this._position+=1;this._length=this._position};Taf.BinBuffer.prototype.writeInt16=function(value){value=+value;this._allocate(2);this._buffer.writeInt16BE(value,this._position);this._position+=2;this._length=this._position};Taf.BinBuffer.prototype.writeUInt16=function(value){value=+value;this._allocate(2);this._buffer.writeUInt16BE(value,this._position);this._position+=2;this._length=this._position};Taf.BinBuffer.prototype.writeInt32=function(value){value=+value;this._allocate(4);this._buffer.writeInt32BE(value,this._position);this._position+=4;this._length=this._position};Taf.BinBuffer.prototype.writeUInt32=function(value){value=+value;this._allocate(4);this._buffer.writeUInt32BE(value,this._position);this._position+=4;this._length=this._position};Taf.BinBuffer.prototype.writeInt64=function(value,bString){var H4,L4;if(bString===true||bString===1){var val=new Big(value);if(val.s===1){H4=+val.div(BIT32).round(0,0).toString();L4=+val.mod(BIT32).toString()}else{H4=val.div(BIT32).round(0,3);L4=+val.minus(new Big(H4).times(BIT32)).toString();H4=+H4.plus(BIT32).toString()}}else{var val=+value;if(val>0){H4=Math.floor(val/BIT32);L4=val-H4*BIT32}else{H4=Math.floor(val/BIT32);L4=val-H4*BIT32;H4+=BIT32}}this._allocate(8);this._buffer.writeUInt32BE(H4,this._position);this._buffer.writeUInt32BE(L4,this._position+4);this._position+=8;this._length=this._position};Taf.BinBuffer.prototype.writeFloat=function(value){this._allocate(4);this._buffer.writeFloatBE(value,this._position);this._position+=4;this._length=this._position};Taf.BinBuffer.prototype.writeDouble=function(value){this._allocate(8);this._buffer.writeDoubleBE(value,this._position);this._position+=8;this._length=this._position};Taf.BinBuffer.prototype.writeString=function(value,ByteLength,bRaw){if(bRaw===true||bRaw===1){this._allocate(ByteLength);value.copy(this._buffer,this._position);this._position+=ByteLength;this._length=this._position;return}var byteLength=ByteLength||Buffer.byteLength(value);this._allocate(byteLength);this._buffer.write(value,this._position,byteLength,"utf8");this._position+=byteLength;this._length=this._position};Taf.BinBuffer.prototype.writeBinBuffer=function(srcBinBuffer){if(srcBinBuffer._length==0||srcBinBuffer._buffer==null)return;this._allocate(srcBinBuffer.length);srcBinBuffer._buffer.copy(this._buffer,this._position,0,srcBinBuffer._length);this._position+=srcBinBuffer._length;this._length=this._position};Taf.BinBuffer.prototype.writeNodeBuffer=function(srcBuffer,offset,byteLength){offset=offset==undefined?0:offset;byteLength=byteLength==undefined?srcBuffer.length:byteLength;this._allocate(byteLength);srcBuffer.copy(this._buffer,this._position,offset,offset+byteLength);this._length+=byteLength;this._position+=byteLength};Taf.BinBuffer.prototype.readInt8=function(){return this._buffer.readInt8(this._position++)};Taf.BinBuffer.prototype.readInt16=function(){this._position+=2;return this._buffer.readInt16BE(this._position-2)};Taf.BinBuffer.prototype.readInt32=function(){this._position+=4;return this._buffer.readInt32BE(this._position-4)};Taf.BinBuffer.prototype.readUInt8=function(){this._position+=1;return this._buffer.readUInt8(this._position-1)};Taf.BinBuffer.prototype.readUInt16=function(){this._position+=2;return this._buffer.readUInt16BE(this._position-2)};Taf.BinBuffer.prototype.readUInt32=function(){this._position+=4;return this._buffer.readUInt32BE(this._position-4)};Taf.BinBuffer.prototype.readInt64=function(bString){var H4=this._buffer.readUInt32BE(this._position);var L4=this._buffer.readUInt32BE(this._position+4);this._position+=8;if(bString===true||bString===1){if(H4<BIT31){return new Big(H4).times(BIT32).plus(L4).toString()}else{H4=BIT32-1-H4;return"-"+new Big(H4).times(BIT32).plus(BIT32-L4).toString()}}if(H4<BIT31){return H4*BIT32+L4}else{return-(BIT32-L4+BIT32*(BIT32-1-H4))}};Taf.BinBuffer.prototype.readFloat=function(){this._position+=4;return this._buffer.readFloatBE(this._position-4)};Taf.BinBuffer.prototype.readDouble=function(){this._position+=8;return this._buffer.readDoubleBE(this._position-8)};Taf.BinBuffer.prototype.readString=function(byteLength,bRaw){var temp=createNodeBuffer(byteLength);var ret;if(bRaw===true||bRaw===1){this._buffer.copy(temp,0,this._position,this._position+byteLength);this._position+=byteLength;return temp}this._buffer.copy(temp,0,this._position,this._position+byteLength);this._position+=byteLength;if(temp.length==1){if(temp[0]&128){ret=temp.toString("binary",0,temp.length)}else{ret=temp.toString("utf8",0,temp.length)}}else{ret=temp.toString("utf8",0,temp.length)}return ret};Taf.BinBuffer.prototype.readBinBuffer=function(byteLength,bReuse){if(bReuse===true){var temp=new Taf.BinBuffer;temp._buffer=this._buffer.slice(this._position,this._position+byteLength);temp._length=byteLength;temp._capacity=byteLength;temp._position=0;return temp}var temp=new Taf.BinBuffer;temp.writeNodeBuffer(this._buffer,this._position,byteLength);this._position+=byteLength;return temp};Taf.BinBuffer.prototype.toNodeBuffer=function(){var temp=createNodeBuffer(this._length);this._buffer.copy(temp,0,0,this._length);return temp};Taf.BinBuffer.prototype.toNodeBufferUnSafe=function(){return this._buffer.slice(0,this._length)};Taf.BinBuffer.prototype.toObject=function(){return this.toNodeBuffer()};Taf.BinBuffer.prototype.readFromObject=Taf.BinBuffer.prototype.writeNodeBuffer;Taf.BinBuffer.prototype.print=function(){var str="";for(var i=0;i<this._length;i++){str+=(this._buffer[i]>15?"":"0")+this._buffer[i].toString(16)+((i+1)%16==0?"\n":" ")}console.log(str.toUpperCase())};Taf.JceOutputStream=function(){this._binBuffer=new Taf.BinBuffer};Taf.JceOutputStream.prototype._writeTo=function(tag,type){if(tag<15){this._binBuffer.writeUInt8(tag<<4&240|type)}else{this._binBuffer.writeUInt16((240|type)<<8|tag)}};Taf.JceOutputStream.prototype.setHeaderLength=function(value){var position=this._binBuffer._position===0?4:this._binBuffer._position;var length=this._binBuffer._position===0?4:this._binBuffer._length;this._binBuffer._position=0;this._binBuffer.writeInt32(value);this._binBuffer._position=position;this._binBuffer._length=length};Taf.JceOutputStream.prototype.writeBoolean=function(tag,value){this.writeInt8(tag,value==true?1:0)};Taf.JceOutputStream.prototype.writeInt8=function(tag,value){value=+value;if(value==0){this._writeTo(tag,Taf.DataHelp.EN_ZERO)}else{this._writeTo(tag,Taf.DataHelp.EN_INT8);this._binBuffer.writeInt8(value)}};Taf.JceOutputStream.prototype.writeInt16=function(tag,value){value=+value;if(value>=-128&&value<=127){this.writeInt8(tag,value)}else{this._writeTo(tag,Taf.DataHelp.EN_INT16);this._binBuffer.writeInt16(value)}};Taf.JceOutputStream.prototype.writeInt32=function(tag,value){value=+value;if(value>=-32768&&value<=32767){this.writeInt16(tag,value)}else{this._writeTo(tag,Taf.DataHelp.EN_INT32);this._binBuffer.writeInt32(value)}};Taf.JceOutputStream.prototype.writeInt64=function(tag,value,bString){var val=+value;if(val>=-2147483648&&val<=2147483647){this.writeInt32(tag,val);return}this._writeTo(tag,Taf.DataHelp.EN_INT64);this._binBuffer.writeInt64(value,bString)};Taf.JceOutputStream.prototype.writeUInt8=function(tag,value){this.writeInt16(tag,value)};Taf.JceOutputStream.prototype.writeUInt16=function(tag,value){this.writeInt32(tag,value)};Taf.JceOutputStream.prototype.writeUInt32=function(tag,value){this.writeInt64(tag,value)};Taf.JceOutputStream.prototype.writeFloat=function(tag,value){if(value==0){this._writeTo(tag,Taf.DataHelp.EN_ZERO)}else{this._writeTo(tag,Taf.DataHelp.EN_FLOAT);this._binBuffer.writeFloat(value)}};Taf.JceOutputStream.prototype.writeDouble=function(tag,value){if(value==0){this._writeTo(tag,Taf.DataHelp.EN_ZERO)}else{this._writeTo(tag,Taf.DataHelp.EN_DOUBLE);this._binBuffer.writeDouble(value)}};Taf.JceOutputStream.prototype.writeStruct=function(tag,value){if(value._writeTo==undefined){throw Error("not defined writeTo Function")}this._writeTo(tag,Taf.DataHelp.EN_STRUCTBEGIN);value._writeTo(this);this._writeTo(0,Taf.DataHelp.EN_STRUCTEND)};Taf.JceOutputStream.prototype.writeString=function(tag,value,bRaw){if(bRaw!=undefined&&bRaw==true){var byteLength=value.length;if(byteLength>255){this._writeTo(tag,Taf.DataHelp.EN_STRING4);this._binBuffer.writeUInt32(byteLength)}else{this._writeTo(tag,Taf.DataHelp.EN_STRING1);this._binBuffer.writeUInt8(byteLength)}this._binBuffer.writeString(value,byteLength,bRaw);return}var byteLength=Buffer.byteLength(value,"utf8");if(byteLength>255){this._writeTo(tag,Taf.DataHelp.EN_STRING4);this._binBuffer.writeUInt32(byteLength)}else{this._writeTo(tag,Taf.DataHelp.EN_STRING1);this._binBuffer.writeUInt8(byteLength)}this._binBuffer.writeString(value,byteLength)};Taf.JceOutputStream.prototype.writeBytes=function(tag,value){this._writeTo(tag,Taf.DataHelp.EN_SIMPLELIST);this._writeTo(0,Taf.DataHelp.EN_INT8);this.writeInt32(0,value.length);this._binBuffer.writeBinBuffer(value)};var writeListDeprecateWarnning=util.deprecate((function(){}),"bRaw in writeList is deprecated, use List(TafStream.String, bRaw) instead");Taf.JceOutputStream.prototype.writeList=function(tag,value,bRaw){this._writeTo(tag,Taf.DataHelp.EN_LIST);this.writeInt32(0,value.length);if(bRaw===true){writeListDeprecateWarnning()}var bValue=value._bValue||bRaw;for(var i=0,len=value.value.length;i<len;i++){value._proto._write(this,0,value.value[i],bValue)}};Taf.JceOutputStream.prototype.writeMap=function(tag,value){this._writeTo(tag,Taf.DataHelp.EN_MAP);this.writeInt32(0,value.size());var self=this;var bKey=value._bKey,bValue=value._bValue;if(value._kproto==Taf.String){bKey=false}value.forEach((function(key,val){value._kproto._write(self,0,key,bKey);value._vproto._write(self,1,val,bValue)}),bKey)};Taf.JceOutputStream.prototype.getBinBuffer=function(){return this._binBuffer};Taf.JceInputStream=function(binBuffer){this._binBuffer=binBuffer;this._binBuffer._position=0};Taf.JceInputStream.prototype.setBinBuffer=function(binBuffer){this._binBuffer=binBuffer;this._binBuffer._position=0};Taf.JceInputStream.prototype._readFrom=function(){var temp=this._binBuffer.readUInt8();var tag=(temp&240)>>4;var type=temp&15;if(tag>=15)tag=this._binBuffer.readUInt8();return{tag:tag,type:type}};Taf.JceInputStream.prototype._peekFrom=function(){var pos=this._binBuffer._position;var head=this._readFrom();this._binBuffer.position=pos;return{tag:head.tag,type:head.type,size:head.tag>=15?2:1}};Taf.JceInputStream.prototype._skipField=function(type){switch(type){case Taf.DataHelp.EN_INT8:this._binBuffer._position+=1;break;case Taf.DataHelp.EN_INT16:this._binBuffer._position+=2;break;case Taf.DataHelp.EN_INT32:this._binBuffer._position+=4;break;case Taf.DataHelp.EN_INT64:this._binBuffer._position+=8;break;case Taf.DataHelp.EN_FLOAT:this._binBuffer._position+=4;break;case Taf.DataHelp.EN_DOUBLE:this._binBuffer._position+=8;break;case Taf.DataHelp.EN_STRING1:{var Length=this._binBuffer.readUInt8();this._binBuffer._position+=Length;break}case Taf.DataHelp.EN_STRING4:{var Length=this._binBuffer.readUInt32();this._binBuffer._position+=Length;break}case Taf.DataHelp.EN_STRUCTBEGIN:this._skipToStructEnd();break;case Taf.DataHelp.EN_STRUCTEND:case Taf.DataHelp.EN_ZERO:break;case Taf.DataHelp.EN_MAP:{var size=this.readInt32(0,true);for(var i=0;i<size*2;++i){var head=this._readFrom();this._skipField(head.type)}break}case Taf.DataHelp.EN_SIMPLELIST:{var head=this._readFrom();if(head.type!=Taf.DataHelp.EN_INT8){throw new Taf.JceDecodeInvalidValue("skipField with invalid type, type value: "+type+","+head.type)}var Length=this.readInt32(0,true);this._binBuffer._position+=Length;break}case Taf.DataHelp.EN_LIST:{var size=this.readInt32(0,true);for(var i=0;i<size;++i){var head=this._readFrom();this._skipField(head.type)}break}default:throw new Taf.JceDecodeInvalidValue("skipField with invalid type, type value: "+type)}};Taf.JceInputStream.prototype._skipToStructEnd=function(){for(;;){var head=this._readFrom();this._skipField(head.type);if(head.type==Taf.DataHelp.EN_STRUCTEND){return}}};Taf.JceInputStream.prototype._skipToTag=function(tag,require){while(this._binBuffer._position<this._binBuffer._length){var head=this._peekFrom();if(this._tagPosMap){this._tagPosMap[head.tag]=this._binBuffer._position;this._tagPosMap._current=this._binBuffer._position}if(tag<=head.tag||head.type==Taf.DataHelp.EN_STRUCTEND){if(head.type===Taf.DataHelp.EN_STRUCTEND?false:tag===head.tag){return true}break}this._binBuffer._position+=head.size;this._skipField(head.type)}if(require)throw new Taf.JceDecodeRequireNotExist("require field not exist, tag:"+tag);return false};Taf.JceInputStream.prototype.readBoolean=function(tag,require,DEFAULT_VALUE){return this.readInt8(tag,require,DEFAULT_VALUE)==1?true:false};Taf.JceInputStream.prototype.readInt8=function(tag,require,DEFAULT_VALUE){if(this._skipToTag(tag,require)==false){return DEFAULT_VALUE}var head=this._readFrom();switch(head.type){case Taf.DataHelp.EN_ZERO:return 0;case Taf.DataHelp.EN_INT8:return this._binBuffer.readInt8()}throw new Taf.JceDecodeMismatch("read int8 type mismatch, tag:"+tag+", get type:"+head.type)};Taf.JceInputStream.prototype.readInt16=function(tag,require,DEFAULT_VALUE){if(this._skipToTag(tag,require)==false){return DEFAULT_VALUE}var head=this._readFrom();switch(head.type){case Taf.DataHelp.EN_ZERO:return 0;case Taf.DataHelp.EN_INT8:return this._binBuffer.readInt8();case Taf.DataHelp.EN_INT16:return this._binBuffer.readInt16()}throw new Taf.JceDecodeMismatch("read int8 type mismatch, tag:"+tag+", get type:"+head.type)};Taf.JceInputStream.prototype.readInt32=function(tag,requrire,DEFAULT_VALUE){if(this._skipToTag(tag,requrire)==false){return DEFAULT_VALUE}var head=this._readFrom();switch(head.type){case Taf.DataHelp.EN_ZERO:return 0;case Taf.DataHelp.EN_INT8:return this._binBuffer.readInt8();case Taf.DataHelp.EN_INT16:return this._binBuffer.readInt16();case Taf.DataHelp.EN_INT32:return this._binBuffer.readInt32()}throw new Taf.JceDecodeMismatch("read int8 type mismatch, tag:"+tag+", get type:"+head.type)};Taf.JceInputStream.prototype.readInt64=function(tag,require,DEFAULT_VALUE,bString){if(this._skipToTag(tag,require)==false){return DEFAULT_VALUE}var head=this._readFrom();switch(head.type){case Taf.DataHelp.EN_ZERO:return 0;case Taf.DataHelp.EN_INT8:return this._binBuffer.readInt8();case Taf.DataHelp.EN_INT16:return this._binBuffer.readInt16();case Taf.DataHelp.EN_INT32:return this._binBuffer.readInt32();case Taf.DataHelp.EN_INT64:return this._binBuffer.readInt64(bString)}throw new Taf.JceDecodeMismatch("read int64 type mismatch, tag:"+tag+", get type:"+head.type)};Taf.JceInputStream.prototype.readFloat=function(tag,require,DEFAULT_VALUE){if(this._skipToTag(tag,require)==false){return DEFAULT_VALUE}var head=this._readFrom();switch(head.type){case Taf.DataHelp.EN_ZERO:return 0;case Taf.DataHelp.EN_FLOAT:return this._binBuffer.readFloat()}throw new Taf.JceDecodeMismatch("read float type mismatch, tag:"+tag+", get type:"+head.type)};Taf.JceInputStream.prototype.readDouble=function(tag,require,DEFAULT_VALUE){if(this._skipToTag(tag,require)==false){return DEFAULT_VALUE}var head=this._readFrom();switch(head.type){case Taf.DataHelp.EN_ZERO:return 0;case Taf.DataHelp.EN_DOUBLE:return this._binBuffer.readDouble()}throw new Taf.JceDecodeMismatch("read double type mismatch, tag:"+tag+", get type:"+head.type)};Taf.JceInputStream.prototype.readUInt8=function(tag,require,DEFAULT_VALUE){return this.readInt16(tag,require,DEFAULT_VALUE)};Taf.JceInputStream.prototype.readUInt16=function(tag,require,DEFAULT_VALUE){return this.readInt32(tag,require,DEFAULT_VALUE)};Taf.JceInputStream.prototype.readUInt32=function(tag,require,DEFAULT_VALUE){return this.readInt64(tag,require,DEFAULT_VALUE)};Taf.JceInputStream.prototype.readString=function(tag,require,DEFAULT_VALUE,bRaw){if(this._skipToTag(tag,require)==false){return DEFAULT_VALUE}var head=this._readFrom();if(head.type==Taf.DataHelp.EN_STRING1){return this._binBuffer.readString(this._binBuffer.readUInt8(),bRaw)}if(head.type==Taf.DataHelp.EN_STRING4){return this._binBuffer.readString(this._binBuffer.readUInt32(),bRaw)}throw new Taf.JceDecodeMismatch("read 'string' type mismatch, tag: "+tag+", get type: "+head.type+".")};Taf.JceInputStream.prototype.readStruct=function(tag,require,TYPE_T){if(this._skipToTag(tag,require)==false){return new TYPE_T}var head=this._readFrom();if(head.type!=Taf.DataHelp.EN_STRUCTBEGIN){throw new Taf.JceDecodeMismatch("read struct type mismatch, tag: "+tag+", get type:"+head.type)}var temp=TYPE_T._readFrom(this);this._skipToStructEnd();return temp};Taf.JceInputStream.prototype.readBytes=function(tag,require,TYPE_T,bRaw){if(this._skipToTag(tag,require)==false){return new TYPE_T}var head=this._readFrom();if(head.type==Taf.DataHelp.EN_SIMPLELIST){var temp=this._readFrom();if(temp.type!=Taf.DataHelp.EN_INT8){throw new Taf.JceDecodeMismatch("type mismatch, tag:"+tag+",type:"+head.type+","+temp.type)}var size=this.readInt32(0,true);if(size<0){throw new Taf.JceDecodeInvalidValue("invalid size, tag:"+tag+",type:"+head.type+","+temp.type)}var bytes=this._binBuffer.readBinBuffer(size,bRaw);bytes.position=0;return bytes}throw new Taf.JceDecodeMismatch("type mismatch, tag:"+tag+",type:"+head.type)};var readListDeprecateWarnning=util.deprecate((function(){}),"bRaw in readList is deprecated, use List(TafStream.String, bRaw) instead");Taf.JceInputStream.prototype.readList=function(tag,require,TYPE_T,bRaw){if(this._skipToTag(tag,require)==false){return TYPE_T}var head=this._readFrom();if(head.type!=Taf.DataHelp.EN_LIST){throw new Taf.JceDecodeMismatch("read 'vector' type mismatch, tag: "+tag+", get type: "+head.type)}var size=this.readInt32(0,true);if(size<0){throw new Taf.JceDecodeInvalidValue("invalid size, tag: "+tag+", type: "+head.type+", size: "+size)}if(bRaw===true){readListDeprecateWarnning()}var bValue=TYPE_T._bValue||bRaw;var TEMP=new Taf.List(TYPE_T._proto);for(var i=0;i<size;++i){TEMP.value.push(TEMP._proto._read(this,0,TEMP._proto,bValue))}return TEMP};Taf.JceInputStream.prototype.readMap=function(tag,require,TYPE_T){if(this._skipToTag(tag,require)==false){return TYPE_T}var head=this._readFrom();if(head.type!=Taf.DataHelp.EN_MAP){throw new Taf.JceDecodeMismatch("read 'map' type mismatch, tag: "+tag+", get type: "+head.type)}var size=this.readInt32(0,true);if(size<0){throw new Taf.JceDecodeMismatch("invalid map, tag: "+tag+", size: "+size)}var bKey=TYPE_T._bKey,bValue=TYPE_T._bValue;if(TYPE_T._kproto==Taf.String){bKey=false}var TEMP=new Taf.Map(TYPE_T._kproto,TYPE_T._vproto,bKey,bValue);for(var i=0;i<size;i++){var key=TEMP._kproto._read(this,0,TEMP._kproto,bKey);var val=TEMP._vproto._read(this,1,TEMP._vproto,bValue);TEMP.insert(key,val)}return TEMP};Taf.UniAttribute=function(){this._data=new Taf.Map(Taf.String,Taf.BinBuffer);this._mmap=new Taf.Map(Taf.String,Taf.Map(Taf.String,Taf.BinBuffer));this._buff=new Taf.JceOutputStream;this._temp=new Taf.JceInputStream(new Taf.BinBuffer);this._iver=Taf.UniAttribute.WUP_SIMPLE;this.__defineGetter__("wupVersion",(function(){return this._iver}));this.__defineSetter__("wupVersion",(function(value){this._iver=value}))};Taf.UniAttribute.WUP_COMPLEX=2;Taf.UniAttribute.WUP_SIMPLE=3;Taf.UniAttribute.prototype._getkey=function(name,DEFAULT_VALUE,TYPE_T,FUNC,bValue){if(this._iver==Taf.UniAttribute.WUP_SIMPLE){var binBuffer=this._data.get(name);if(binBuffer==undefined&&DEFAULT_VALUE==undefined){throw new Taf.WupNotFoundKey("UniAttribute not found key:"+name)}if(binBuffer==undefined&&DEFAULT_VALUE!=undefined){return DEFAULT_VALUE}}else{var item=this._mmap.get(name);if(item==undefined&&DEFAULT_VALUE==undefined){throw new Taf.WupNotFoundKey("UniAttribute not found key:"+name)}if(item==undefined&&DEFAULT_VALUE!=undefined){return DEFAULT_VALUE}var binBuffer=item.get(TYPE_T._classname);if(binBuffer==undefined){throw new Taf.WupNotFoundKey("UniAttribute type match fail,key:"+name+",type:"+TYPE_T._classname)}}this._temp.setBinBuffer(binBuffer);return FUNC.call(this._temp,0,true,TYPE_T,bValue)};Taf.UniAttribute.prototype._setkey=function(name,value,TYPE_T,FUNC,bValue){this._buff._binBuffer.reset();FUNC.call(this._buff,0,value,bValue);if(this._iver==Taf.UniAttribute.WUP_SIMPLE){this._data.set(name,new Taf.BinBuffer(this._buff.getBinBuffer().toNodeBuffer()))}else{var temp=new Taf.Map(Taf.String,Taf.BinBuffer);temp.set(TYPE_T._classname,new Taf.BinBuffer(this._buff.getBinBuffer().toNodeBuffer()));this._mmap.set(name,temp)}};Taf.UniAttribute.prototype.decode=function(binBuffer){var is=new Taf.JceInputStream(binBuffer);if(this._iver==Taf.UniAttribute.WUP_SIMPLE){this._data.clear();this._data=is.readMap(0,true,Taf.Map(Taf.String,Taf.BinBuffer))}else{this._mmap.clear();this._mmap=is.readMap(0,true,Taf.Map(Taf.String,Taf.Map(Taf.String,Taf.BinBuffer)))}};Taf.UniAttribute.prototype.encode=function(){var os=new Taf.JceOutputStream;os.writeMap(0,this._iver==Taf.UniAttribute.WUP_SIMPLE?this._data:this._mmap);return os.getBinBuffer()};Taf.UniAttribute.prototype.writeBoolean=function(name,value){this._setkey(name,value,Taf.Boolean,this._buff.writeBoolean)};Taf.UniAttribute.prototype.writeInt8=function(name,value){this._setkey(name,value,Taf.Int8,this._buff.writeInt8)};Taf.UniAttribute.prototype.writeUInt8=function(name,value){this._setkey(name,value,Taf.UInt8,this._buff.writeUInt8)};Taf.UniAttribute.prototype.writeInt16=function(name,value){this._setkey(name,value,Taf.Int16,this._buff.writeInt16)};Taf.UniAttribute.prototype.writeUInt16=function(name,value){this._setkey(name,value,Taf.UInt16,this._buff.writeUInt16)};Taf.UniAttribute.prototype.writeInt32=function(name,value){this._setkey(name,value,Taf.Int32,this._buff.writeInt32)};Taf.UniAttribute.prototype.writeUInt32=function(name,value){this._setkey(name,value,Taf.UInt32,this._buff.writeUInt32)};Taf.UniAttribute.prototype.writeInt64=function(name,value,bValue){this._setkey(name,value,Taf.Int64,this._buff.writeInt64,bValue)};Taf.UniAttribute.prototype.writeFloat=function(name,value){this._setkey(name,value,Taf.Float,this._buff.writeFloat)};Taf.UniAttribute.prototype.writeDouble=function(name,value){this._setkey(name,value,Taf.Double,this._buff.writeDouble)};Taf.UniAttribute.prototype.writeBytes=function(name,value){this._setkey(name,value,Taf.BinBuffer,this._buff.writeBytes)};Taf.UniAttribute.prototype.writeString=function(name,value,bValue){this._setkey(name,value,Taf.String,this._buff.writeString,bValue)};Taf.UniAttribute.prototype.writeStruct=function(name,value){this._setkey(name,value,value,this._buff.writeStruct)};Taf.UniAttribute.prototype.writeList=function(name,value){this._setkey(name,value,value,this._buff.writeList)};Taf.UniAttribute.prototype.writeMap=function(name,value){this._setkey(name,value,value,this._buff.writeMap)};Taf.UniAttribute.prototype.readBoolean=function(name,DEFAULT_VALUE){return this._getkey(name,DEFAULT_VALUE,Taf.Boolean,this._temp.readBoolean)};Taf.UniAttribute.prototype.readInt8=function(name,DEFAULT_VALUE){return this._getkey(name,DEFAULT_VALUE,Taf.Int8,this._temp.readInt8)};Taf.UniAttribute.prototype.readUInt8=function(name,DEFAULT_VALUE){return this._getkey(name,DEFAULT_VALUE,Taf.UInt8,this._temp.readUInt8)};Taf.UniAttribute.prototype.readInt16=function(name,DEFAULT_VALUE){return this._getkey(name,DEFAULT_VALUE,Taf.Int16,this._temp.readInt16)};Taf.UniAttribute.prototype.readUInt16=function(name,DEFAULT_VALUE){return this._getkey(name,DEFAULT_VALUE,Taf.UInt16,this._temp.readUInt16)};Taf.UniAttribute.prototype.readInt32=function(name,DEFAULT_VALUE){return this._getkey(name,DEFAULT_VALUE,Taf.Int32,this._temp.readInt32)};Taf.UniAttribute.prototype.readUInt32=function(name,DEFAULT_VALUE){return this._getkey(name,DEFAULT_VALUE,Taf.UInt32,this._temp.readUInt32)};Taf.UniAttribute.prototype.readInt64=function(name,DEFAULT_VALUE,bValue){return this._getkey(name,DEFAULT_VALUE,Taf.Int64,this._temp.readInt64,bValue)};Taf.UniAttribute.prototype.readFloat=function(name,DEFAULT_VALUE){return this._getkey(name,DEFAULT_VALUE,Taf.Float,this._temp.readFloat)};Taf.UniAttribute.prototype.readDouble=function(name,DEFAULT_VALUE){return this._getkey(name,DEFAULT_VALUE,Taf.Double,this._temp.readDouble)};Taf.UniAttribute.prototype.readBytes=function(name,DEFAULT_VALUE){return this._getkey(name,DEFAULT_VALUE,Taf.BinBuffer,this._temp.readBytes)};Taf.UniAttribute.prototype.readString=function(name,DEFAULT_VALUE,bValue){return this._getkey(name,DEFAULT_VALUE,Taf.String,this._temp.readString,bValue)};Taf.UniAttribute.prototype.readStruct=function(name,TYPE_T,DEFAULT_VALUE){return this._getkey(name,DEFAULT_VALUE,TYPE_T,this._temp.readStruct)};Taf.UniAttribute.prototype.readList=function(name,TYPE_T,DEFAULT_VALUE){return this._getkey(name,DEFAULT_VALUE,TYPE_T,this._temp.readList)};Taf.UniAttribute.prototype.readMap=function(name,TYPE_T,DEFAULT_VALUE){return this._getkey(name,DEFAULT_VALUE,TYPE_T,this._temp.readMap)};Taf.Wup=function(){this._iVersion=0;this._cPacketType=0;this._iMessageType=0;this._iRequestId=0;this._sServantName="";this._sFuncName="";this._binBuffer=new Taf.BinBuffer;this._iTimeout=0;this._context=new Taf.Map(Taf.String,Taf.String);this._status=new Taf.Map(Taf.String,Taf.String);this._attribute=new Taf.UniAttribute;this.__defineGetter__("servantName",(function(){return this._sServantName}));this.__defineSetter__("servantName",(function(value){this._sServantName=value}));this.__defineGetter__("funcName",(function(){return this._sFuncName}));this.__defineSetter__("funcName",(function(value){this._sFuncName=value}));this.__defineGetter__("requestId",(function(){return this._iRequestId}));this.__defineSetter__("requestId",(function(value){this._iRequestId=value}));this.__defineGetter__("wupVersion",(function(){return this._attribute.wupVersion}));this.__defineSetter__("wupVersion",(function(value){this._attribute.wupVersion=value}))};Taf.Wup.WUP_COMPLEX=Taf.UniAttribute.WUP_COMPLEX;Taf.Wup.WUP_SIMPLE=Taf.UniAttribute.WUP_SIMPLE;Taf.Wup.prototype._writeTo=function(){var os=new Taf.JceOutputStream;os._binBuffer.writeInt32(0);os.writeInt16(1,this._attribute.wupVersion);os.writeInt8(2,this._cPacketType);os.writeInt32(3,this._iMessageType);os.writeInt32(4,this._iRequestId);os.writeString(5,this._sServantName);os.writeString(6,this._sFuncName);os.writeBytes(7,this._binBuffer);os.writeInt32(8,this._iTimeout);os.writeMap(9,this._context);os.writeMap(10,this._status);var pos=os._binBuffer._position;var len=os._binBuffer._length;os._binBuffer._position=0;os._binBuffer.writeInt32(os._binBuffer._length);os._binBuffer._length=len;os._binBuffer._position=pos;return os.getBinBuffer()};Taf.Wup.prototype._readFrom=function(is){this._iVersion=is.readInt16(1,true);this._cPacketType=is.readInt8(2,true);this._iMessageType=is.readInt32(3,true);this._iRequestId=is.readInt32(4,true);this._sServantName=is.readString(5,true);this._sFuncName=is.readString(6,true);this._binBuffer=is.readBytes(7,true);this._iTimeout=is.readInt32(8,true);this._context=is.readMap(9,false,Taf.Map(Taf.String,Taf.String));this._status=is.readMap(10,false,Taf.Map(Taf.String,Taf.String));this._attribute.wupVersion=this._iVersion};Taf.Wup.prototype.encode=function(){this._binBuffer=this._attribute.encode();return this._writeTo()};Taf.Wup.prototype.decode=function(binBuffer){var is=new Taf.JceInputStream(binBuffer);var len=is._binBuffer.readInt32();if(len<4){throw Error("packet length too short")}this._readFrom(is);this._attribute.decode(this._binBuffer)};Taf.Wup.prototype.getTafResultCode=function(){var code=this._status.get("STATUS_RESULT_CODE");return code===undefined?0:parseInt(code)};Taf.Wup.prototype.getTafResultDesc=function(){var desc=this._status.get("STATUS_RESULT_DESC");return desc===undefined?"":desc};Taf.Wup.prototype.writeBoolean=function(name,value){this._attribute.writeBoolean(name,value)};Taf.Wup.prototype.writeInt8=function(name,value){this._attribute.writeInt8(name,value)};Taf.Wup.prototype.writeUInt8=function(name,value){this._attribute.writeUInt8(name,value)};Taf.Wup.prototype.writeInt16=function(name,value){this._attribute.writeInt16(name,value)};Taf.Wup.prototype.writeUInt16=function(name,value){this._attribute.writeUInt16(name,value)};Taf.Wup.prototype.writeInt32=function(name,value){this._attribute.writeInt32(name,value)};Taf.Wup.prototype.writeUInt32=function(name,value){this._attribute.writeUInt32(name,value)};Taf.Wup.prototype.writeInt64=function(name,value,bValue){this._attribute.writeInt64(name,value,bValue)};Taf.Wup.prototype.writeFloat=function(name,value){this._attribute.writeFloat(name,value)};Taf.Wup.prototype.writeDouble=function(name,value){this._attribute.writeDouble(name,value)};Taf.Wup.prototype.writeBytes=function(name,value){this._attribute.writeBytes(name,value)};Taf.Wup.prototype.writeString=function(name,value,bValue){this._attribute.writeString(name,value,bValue)};Taf.Wup.prototype.writeStruct=function(name,value){this._attribute.writeStruct(name,value)};Taf.Wup.prototype.writeList=function(name,value){this._attribute.writeList(name,value)};Taf.Wup.prototype.writeMap=function(name,value){this._attribute.writeMap(name,value)};Taf.Wup.prototype.readBoolean=function(name,DEFAULT_VALUE){return this._attribute.readBoolean(name,DEFAULT_VALUE)};Taf.Wup.prototype.readInt8=function(name,DEFAULT_VALUE){return this._attribute.readInt8(name,DEFAULT_VALUE)};Taf.Wup.prototype.readUInt8=function(name,DEFAULT_VALUE){return this._attribute.readUInt8(name,DEFAULT_VALUE)};Taf.Wup.prototype.readInt16=function(name,DEFAULT_VALUE){return this._attribute.readInt16(name,DEFAULT_VALUE)};Taf.Wup.prototype.readUInt16=function(name,DEFAULT_VALUE){return this._attribute.readUInt16(name,DEFAULT_VALUE)};Taf.Wup.prototype.readInt32=function(name,DEFAULT_VALUE){return this._attribute.readInt32(name,DEFAULT_VALUE)};Taf.Wup.prototype.readUInt32=function(name,DEFAULT_VALUE){return this._attribute.readUInt32(name,DEFAULT_VALUE)};Taf.Wup.prototype.readInt64=function(name,DEFAULT_VALUE,bValue){return this._attribute.readInt64(name,DEFAULT_VALUE,bValue)};Taf.Wup.prototype.readFloat=function(name,DEFAULT_VALUE){return this._attribute.readFloat(name,DEFAULT_VALUE)};Taf.Wup.prototype.readDouble=function(name,DEFAULT_VALUE){return this._attribute.readDouble(name,DEFAULT_VALUE)};Taf.Wup.prototype.readBytes=function(name,DEFAULT_VALUE){return this._attribute.readBytes(name,DEFAULT_VALUE)};Taf.Wup.prototype.readString=function(name,DEFAULT_VALUE,bValue){return this._attribute.readString(name,DEFAULT_VALUE,bValue)};Taf.Wup.prototype.readStruct=function(name,TYPE_T,DEFAULT_VALUE){return this._attribute.readStruct(name,TYPE_T,DEFAULT_VALUE)};Taf.Wup.prototype.readList=function(name,TYPE_T,DEFAULT_VALUE){return this._attribute.readList(name,TYPE_T,DEFAULT_VALUE)};Taf.Wup.prototype.readMap=function(name,TYPE_T,DEFAULT_VALUE){return this._attribute.readMap(name,TYPE_T,DEFAULT_VALUE)}}).call(exports,__webpack_require__("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer)},"./node_modules/assert/assert.js":function(module,exports,__webpack_require__){"use strict";(function(global){
                        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
                        function compare(a, b) {
                            if (a === b) {
                                return 0
                            }
                            var x = a.length;
                            var y = b.length;
                            for (var i = 0,
                            len = Math.min(x, y); i < len; ++i) {
                                if (a[i] !== b[i]) {
                                    x = a[i];
                                    y = b[i];
                                    break
                                }
                            }
                            if (x < y) {
                                return - 1
                            }
                            if (y < x) {
                                return 1
                            }
                            return 0
                        }
                        function isBuffer(b) {
                            if (global.Buffer && typeof global.Buffer.isBuffer === "function") {
                                return global.Buffer.isBuffer(b)
                            }
                            return !! (b != null && b._isBuffer)
                        }
                        var util = __webpack_require__("./node_modules/util/util.js");
                        var hasOwn = Object.prototype.hasOwnProperty;
                        var pSlice = Array.prototype.slice;
                        var functionsHaveNames = function() {
                            return function foo() {}.name === "foo"
                        } ();
                        function pToString(obj) {
                            return Object.prototype.toString.call(obj)
                        }
                        function isView(arrbuf) {
                            if (isBuffer(arrbuf)) {
                                return false
                            }
                            if (typeof global.ArrayBuffer !== "function") {
                                return false
                            }
                            if (typeof ArrayBuffer.isView === "function") {
                                return ArrayBuffer.isView(arrbuf)
                            }
                            if (!arrbuf) {
                                return false
                            }
                            if (arrbuf instanceof DataView) {
                                return true
                            }
                            if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
                                return true
                            }
                            return false
                        }
                        var assert = module.exports = ok;
                        var regex = /\s*function\s+([^\(\s]*)\s*/;
                        function getName(func) {
                            if (!util.isFunction(func)) {
                                return
                            }
                            if (functionsHaveNames) {
                                return func.name
                            }
                            var str = func.toString();
                            var match = str.match(regex);
                            return match && match[1]
                        }
                        assert.AssertionError = function AssertionError(options) {
                            this.name = "AssertionError";
                            this.actual = options.actual;
                            this.expected = options.expected;
                            this.operator = options.operator;
                            if (options.message) {
                                this.message = options.message;
                                this.generatedMessage = false
                            } else {
                                this.message = getMessage(this);
                                this.generatedMessage = true
                            }
                            var stackStartFunction = options.stackStartFunction || fail;
                            if (Error.captureStackTrace) {
                                Error.captureStackTrace(this, stackStartFunction)
                            } else {
                                var err = new Error;
                                if (err.stack) {
                                    var out = err.stack;
                                    var fn_name = getName(stackStartFunction);
                                    var idx = out.indexOf("\n" + fn_name);
                                    if (idx >= 0) {
                                        var next_line = out.indexOf("\n", idx + 1);
                                        out = out.substring(next_line + 1)
                                    }
                                    this.stack = out
                                }
                            }
                        };
                        util.inherits(assert.AssertionError, Error);
                        function truncate(s, n) {
                            if (typeof s === "string") {
                                return s.length < n ? s: s.slice(0, n)
                            } else {
                                return s
                            }
                        }
                        function inspect(something) {
                            if (functionsHaveNames || !util.isFunction(something)) {
                                return util.inspect(something)
                            }
                            var rawname = getName(something);
                            var name = rawname ? ": " + rawname: "";
                            return "[Function" + name + "]"
                        }
                        function getMessage(self) {
                            return truncate(inspect(self.actual), 128) + " " + self.operator + " " + truncate(inspect(self.expected), 128)
                        }
                        function fail(actual, expected, message, operator, stackStartFunction) {
                            throw new assert.AssertionError({
                                message: message,
                                actual: actual,
                                expected: expected,
                                operator: operator,
                                stackStartFunction: stackStartFunction
                            })
                        }
                        assert.fail = fail;
                        function ok(value, message) {
                            if (!value) fail(value, true, message, "==", assert.ok)
                        }
                        assert.ok = ok;
                        assert.equal = function equal(actual, expected, message) {
                            if (actual != expected) fail(actual, expected, message, "==", assert.equal)
                        };
                        assert.notEqual = function notEqual(actual, expected, message) {
                            if (actual == expected) {
                                fail(actual, expected, message, "!=", assert.notEqual)
                            }
                        };
                        assert.deepEqual = function deepEqual(actual, expected, message) {
                            if (!_deepEqual(actual, expected, false)) {
                                fail(actual, expected, message, "deepEqual", assert.deepEqual)
                            }
                        };
                        assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
                            if (!_deepEqual(actual, expected, true)) {
                                fail(actual, expected, message, "deepStrictEqual", assert.deepStrictEqual)
                            }
                        };
                        function _deepEqual(actual, expected, strict, memos) {
                            if (actual === expected) {
                                return true
                            } else if (isBuffer(actual) && isBuffer(expected)) {
                                return compare(actual, expected) === 0
                            } else if (util.isDate(actual) && util.isDate(expected)) {
                                return actual.getTime() === expected.getTime()
                            } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
                                return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase
                            } else if ((actual === null || typeof actual !== "object") && (expected === null || typeof expected !== "object")) {
                                return strict ? actual === expected: actual == expected
                            } else if (isView(actual) && isView(expected) && pToString(actual) === pToString(expected) && !(actual instanceof Float32Array || actual instanceof Float64Array)) {
                                return compare(new Uint8Array(actual.buffer), new Uint8Array(expected.buffer)) === 0
                            } else if (isBuffer(actual) !== isBuffer(expected)) {
                                return false
                            } else {
                                memos = memos || {
                                    actual: [],
                                    expected: []
                                };
                                var actualIndex = memos.actual.indexOf(actual);
                                if (actualIndex !== -1) {
                                    if (actualIndex === memos.expected.indexOf(expected)) {
                                        return true
                                    }
                                }
                                memos.actual.push(actual);
                                memos.expected.push(expected);
                                return objEquiv(actual, expected, strict, memos)
                            }
                        }
                        function isArguments(object) {
                            return Object.prototype.toString.call(object) == "[object Arguments]"
                        }
                        function objEquiv(a, b, strict, actualVisitedObjects) {
                            if (a === null || a === undefined || b === null || b === undefined) return false;
                            if (util.isPrimitive(a) || util.isPrimitive(b)) return a === b;
                            if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;
                            var aIsArgs = isArguments(a);
                            var bIsArgs = isArguments(b);
                            if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs) return false;
                            if (aIsArgs) {
                                a = pSlice.call(a);
                                b = pSlice.call(b);
                                return _deepEqual(a, b, strict)
                            }
                            var ka = objectKeys(a);
                            var kb = objectKeys(b);
                            var key, i;
                            if (ka.length !== kb.length) return false;
                            ka.sort();
                            kb.sort();
                            for (i = ka.length - 1; i >= 0; i--) {
                                if (ka[i] !== kb[i]) return false
                            }
                            for (i = ka.length - 1; i >= 0; i--) {
                                key = ka[i];
                                if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects)) return false
                            }
                            return true
                        }
                        assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
                            if (_deepEqual(actual, expected, false)) {
                                fail(actual, expected, message, "notDeepEqual", assert.notDeepEqual)
                            }
                        };
                        assert.notDeepStrictEqual = notDeepStrictEqual;
                        function notDeepStrictEqual(actual, expected, message) {
                            if (_deepEqual(actual, expected, true)) {
                                fail(actual, expected, message, "notDeepStrictEqual", notDeepStrictEqual)
                            }
                        }
                        assert.strictEqual = function strictEqual(actual, expected, message) {
                            if (actual !== expected) {
                                fail(actual, expected, message, "===", assert.strictEqual)
                            }
                        };
                        assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
                            if (actual === expected) {
                                fail(actual, expected, message, "!==", assert.notStrictEqual)
                            }
                        };
                        function expectedException(actual, expected) {
                            if (!actual || !expected) {
                                return false
                            }
                            if (Object.prototype.toString.call(expected) == "[object RegExp]") {
                                return expected.test(actual)
                            }
                            try {
                                if (actual instanceof expected) {
                                    return true
                                }
                            } catch(e) {}
                            if (Error.isPrototypeOf(expected)) {
                                return false
                            }
                            return expected.call({},
                            actual) === true
                        }
                        function _tryBlock(block) {
                            var error;
                            try {
                                block()
                            } catch(e) {
                                error = e
                            }
                            return error
                        }
                        function _throws(shouldThrow, block, expected, message) {
                            var actual;
                            if (typeof block !== "function") {
                                throw new TypeError('"block" argument must be a function')
                            }
                            if (typeof expected === "string") {
                                message = expected;
                                expected = null
                            }
                            actual = _tryBlock(block);
                            message = (expected && expected.name ? " (" + expected.name + ").": ".") + (message ? " " + message: ".");
                            if (shouldThrow && !actual) {
                                fail(actual, expected, "Missing expected exception" + message)
                            }
                            var userProvidedMessage = typeof message === "string";
                            var isUnwantedException = !shouldThrow && util.isError(actual);
                            var isUnexpectedException = !shouldThrow && actual && !expected;
                            if (isUnwantedException && userProvidedMessage && expectedException(actual, expected) || isUnexpectedException) {
                                fail(actual, expected, "Got unwanted exception" + message)
                            }
                            if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
                                throw actual
                            }
                        }
                        assert.throws = function(block, error, message) {
                            _throws(true, block, error, message)
                        };
                        assert.doesNotThrow = function(block, error, message) {
                            _throws(false, block, error, message)
                        };
                        assert.ifError = function(err) {
                            if (err) throw err
                        };
                        var objectKeys = Object.keys ||
                        function(obj) {
                            var keys = [];
                            for (var key in obj) {
                                if (hasOwn.call(obj, key)) keys.push(key)
                            }
                            return keys
                        }
                    }).call(exports, __webpack_require__("./node_modules/hippy-pack/buildin/global.js"))
                },
                "./node_modules/base64-js/index.js": function(module, exports, __webpack_require__) {
                    "use strict";
                    exports.byteLength = byteLength;
                    exports.toByteArray = toByteArray;
                    exports.fromByteArray = fromByteArray;
                    var lookup = [];
                    var revLookup = [];
                    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array: Array;
                    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                    for (var i = 0,
                    len = code.length; i < len; ++i) {
                        lookup[i] = code[i];
                        revLookup[code.charCodeAt(i)] = i
                    }
                    revLookup["-".charCodeAt(0)] = 62;
                    revLookup["_".charCodeAt(0)] = 63;
                    function getLens(b64) {
                        var len = b64.length;
                        if (len % 4 > 0) {
                            throw new Error("Invalid string. Length must be a multiple of 4")
                        }
                        var validLen = b64.indexOf("=");
                        if (validLen === -1) validLen = len;
                        var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
                        return [validLen, placeHoldersLen]
                    }
                    function byteLength(b64) {
                        var lens = getLens(b64);
                        var validLen = lens[0];
                        var placeHoldersLen = lens[1];
                        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen
                    }
                    function _byteLength(b64, validLen, placeHoldersLen) {
                        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen
                    }
                    function toByteArray(b64) {
                        var tmp;
                        var lens = getLens(b64);
                        var validLen = lens[0];
                        var placeHoldersLen = lens[1];
                        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
                        var curByte = 0;
                        var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
                        var i;
                        for (i = 0; i < len; i += 4) {
                            tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
                            arr[curByte++] = tmp >> 16 & 255;
                            arr[curByte++] = tmp >> 8 & 255;
                            arr[curByte++] = tmp & 255
                        }
                        if (placeHoldersLen === 2) {
                            tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
                            arr[curByte++] = tmp & 255
                        }
                        if (placeHoldersLen === 1) {
                            tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
                            arr[curByte++] = tmp >> 8 & 255;
                            arr[curByte++] = tmp & 255
                        }
                        return arr
                    }
                    function tripletToBase64(num) {
                        return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63]
                    }
                    function encodeChunk(uint8, start, end) {
                        var tmp;
                        var output = [];
                        for (var i = start; i < end; i += 3) {
                            tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
                            output.push(tripletToBase64(tmp))
                        }
                        return output.join("")
                    }
                    function fromByteArray(uint8) {
                        var tmp;
                        var len = uint8.length;
                        var extraBytes = len % 3;
                        var parts = [];
                        var maxChunkLength = 16383;
                        for (var i = 0,
                        len2 = len - extraBytes; i < len2; i += maxChunkLength) {
                            parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2: i + maxChunkLength))
                        }
                        if (extraBytes === 1) {
                            tmp = uint8[len - 1];
                            parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==")
                        } else if (extraBytes === 2) {
                            tmp = (uint8[len - 2] << 8) + uint8[len - 1];
                            parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=")
                        }
                        return parts.join("")
                    }
                },
                "./node_modules/big.js/big.js": function(module, exports, __webpack_require__) {
                    var __WEBPACK_AMD_DEFINE_RESULT__; (function(global) {
                        "use strict";
                        var DP = 20,
                        RM = 1,
                        MAX_DP = 1e6,
                        MAX_POWER = 1e6,
                        E_NEG = -7,
                        E_POS = 21,
                        P = {},
                        isValid = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                        Big;
                        function bigFactory() {
                            function Big(n) {
                                var x = this;
                                if (! (x instanceof Big)) {
                                    return n === void 0 ? bigFactory() : new Big(n)
                                }
                                if (n instanceof Big) {
                                    x.s = n.s;
                                    x.e = n.e;
                                    x.c = n.c.slice()
                                } else {
                                    parse(x, n)
                                }
                                x.constructor = Big
                            }
                            Big.prototype = P;
                            Big.DP = DP;
                            Big.RM = RM;
                            Big.E_NEG = E_NEG;
                            Big.E_POS = E_POS;
                            return Big
                        }
                        function format(x, dp, toE) {
                            var Big = x.constructor,
                            i = dp - (x = new Big(x)).e,
                            c = x.c;
                            if (c.length > ++dp) {
                                rnd(x, i, Big.RM)
                            }
                            if (!c[0]) {++i
                            } else if (toE) {
                                i = dp
                            } else {
                                c = x.c;
                                i = x.e + i + 1
                            }
                            for (; c.length < i; c.push(0)) {}
                            i = x.e;
                            return toE === 1 || toE && (dp <= i || i <= Big.E_NEG) ? (x.s < 0 && c[0] ? "-": "") + (c.length > 1 ? c[0] + "." + c.join("").slice(1) : c[0]) + (i < 0 ? "e": "e+") + i: x.toString()
                        }
                        function parse(x, n) {
                            var e, i, nL;
                            if (n === 0 && 1 / n < 0) {
                                n = "-0"
                            } else if (!isValid.test(n += "")) {
                                throwErr(NaN)
                            }
                            x.s = n.charAt(0) == "-" ? (n = n.slice(1), -1) : 1;
                            if ((e = n.indexOf(".")) > -1) {
                                n = n.replace(".", "")
                            }
                            if ((i = n.search(/e/i)) > 0) {
                                if (e < 0) {
                                    e = i
                                }
                                e += +n.slice(i + 1);
                                n = n.substring(0, i)
                            } else if (e < 0) {
                                e = n.length
                            }
                            nL = n.length;
                            for (i = 0; i < nL && n.charAt(i) == "0"; i++) {}
                            if (i == nL) {
                                x.c = [x.e = 0]
                            } else {
                                for (; nL > 0 && n.charAt(--nL) == "0";) {}
                                x.e = e - i - 1;
                                x.c = [];
                                for (; i <= nL; x.c.push( + n.charAt(i++))) {}
                            }
                            return x
                        }
                        function rnd(x, dp, rm, more) {
                            var u, xc = x.c,
                            i = x.e + dp + 1;
                            if (rm === 1) {
                                more = xc[i] >= 5
                            } else if (rm === 2) {
                                more = xc[i] > 5 || xc[i] == 5 && (more || i < 0 || xc[i + 1] !== u || xc[i - 1] & 1)
                            } else if (rm === 3) {
                                more = more || xc[i] !== u || i < 0
                            } else {
                                more = false;
                                if (rm !== 0) {
                                    throwErr("!Big.RM!")
                                }
                            }
                            if (i < 1 || !xc[0]) {
                                if (more) {
                                    x.e = -dp;
                                    x.c = [1]
                                } else {
                                    x.c = [x.e = 0]
                                }
                            } else {
                                xc.length = i--;
                                if (more) {
                                    for (; ++xc[i] > 9;) {
                                        xc[i] = 0;
                                        if (!i--) {++x.e;
                                            xc.unshift(1)
                                        }
                                    }
                                }
                                for (i = xc.length; ! xc[--i]; xc.pop()) {}
                            }
                            return x
                        }
                        function throwErr(message) {
                            var err = new Error(message);
                            err.name = "BigError";
                            throw err
                        }
                        P.abs = function() {
                            var x = new this.constructor(this);
                            x.s = 1;
                            return x
                        };
                        P.cmp = function(y) {
                            var xNeg, x = this,
                            xc = x.c,
                            yc = (y = new x.constructor(y)).c,
                            i = x.s,
                            j = y.s,
                            k = x.e,
                            l = y.e;
                            if (!xc[0] || !yc[0]) {
                                return ! xc[0] ? !yc[0] ? 0 : -j: i
                            }
                            if (i != j) {
                                return i
                            }
                            xNeg = i < 0;
                            if (k != l) {
                                return k > l ^ xNeg ? 1 : -1
                            }
                            i = -1;
                            j = (k = xc.length) < (l = yc.length) ? k: l;
                            for (; ++i < j;) {
                                if (xc[i] != yc[i]) {
                                    return xc[i] > yc[i] ^ xNeg ? 1 : -1
                                }
                            }
                            return k == l ? 0 : k > l ^ xNeg ? 1 : -1
                        };
                        P.div = function(y) {
                            var x = this,
                            Big = x.constructor,
                            dvd = x.c,
                            dvs = (y = new Big(y)).c,
                            s = x.s == y.s ? 1 : -1,
                            dp = Big.DP;
                            if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
                                throwErr("!Big.DP!")
                            }
                            if (!dvd[0] || !dvs[0]) {
                                if (dvd[0] == dvs[0]) {
                                    throwErr(NaN)
                                }
                                if (!dvs[0]) {
                                    throwErr(s / 0)
                                }
                                return new Big(s * 0)
                            }
                            var dvsL, dvsT, next, cmp, remI, u, dvsZ = dvs.slice(),
                            dvdI = dvsL = dvs.length,
                            dvdL = dvd.length,
                            rem = dvd.slice(0, dvsL),
                            remL = rem.length,
                            q = y,
                            qc = q.c = [],
                            qi = 0,
                            digits = dp + (q.e = x.e - y.e) + 1;
                            q.s = s;
                            s = digits < 0 ? 0 : digits;
                            dvsZ.unshift(0);
                            for (; remL++<dvsL; rem.push(0)) {}
                            do {
                                for (next = 0; next < 10; next++) {
                                    if (dvsL != (remL = rem.length)) {
                                        cmp = dvsL > remL ? 1 : -1
                                    } else {
                                        for (remI = -1, cmp = 0; ++remI < dvsL;) {
                                            if (dvs[remI] != rem[remI]) {
                                                cmp = dvs[remI] > rem[remI] ? 1 : -1;
                                                break
                                            }
                                        }
                                    }
                                    if (cmp < 0) {
                                        for (dvsT = remL == dvsL ? dvs: dvsZ; remL;) {
                                            if (rem[--remL] < dvsT[remL]) {
                                                remI = remL;
                                                for (; remI && !rem[--remI]; rem[remI] = 9) {}--rem[remI];
                                                rem[remL] += 10
                                            }
                                            rem[remL] -= dvsT[remL]
                                        }
                                        for (; ! rem[0]; rem.shift()) {}
                                    } else {
                                        break
                                    }
                                }
                                qc[qi++] = cmp ? next: ++next;
                                if (rem[0] && cmp) {
                                    rem[remL] = dvd[dvdI] || 0
                                } else {
                                    rem = [dvd[dvdI]]
                                }
                            } while (( dvdI ++< dvdL || rem [ 0 ] !== u) && s--);
                            if (!qc[0] && qi != 1) {
                                qc.shift();
                                q.e--
                            }
                            if (qi > digits) {
                                rnd(q, dp, Big.RM, rem[0] !== u)
                            }
                            return q
                        };
                        P.eq = function(y) {
                            return ! this.cmp(y)
                        };
                        P.gt = function(y) {
                            return this.cmp(y) > 0
                        };
                        P.gte = function(y) {
                            return this.cmp(y) > -1
                        };
                        P.lt = function(y) {
                            return this.cmp(y) < 0
                        };
                        P.lte = function(y) {
                            return this.cmp(y) < 1
                        };
                        P.sub = P.minus = function(y) {
                            var i, j, t, xLTy, x = this,
                            Big = x.constructor,
                            a = x.s,
                            b = (y = new Big(y)).s;
                            if (a != b) {
                                y.s = -b;
                                return x.plus(y)
                            }
                            var xc = x.c.slice(),
                            xe = x.e,
                            yc = y.c,
                            ye = y.e;
                            if (!xc[0] || !yc[0]) {
                                return yc[0] ? (y.s = -b, y) : new Big(xc[0] ? x: 0)
                            }
                            if (a = xe - ye) {
                                if (xLTy = a < 0) {
                                    a = -a;
                                    t = xc
                                } else {
                                    ye = xe;
                                    t = yc
                                }
                                t.reverse();
                                for (b = a; b--; t.push(0)) {}
                                t.reverse()
                            } else {
                                j = ((xLTy = xc.length < yc.length) ? xc: yc).length;
                                for (a = b = 0; b < j; b++) {
                                    if (xc[b] != yc[b]) {
                                        xLTy = xc[b] < yc[b];
                                        break
                                    }
                                }
                            }
                            if (xLTy) {
                                t = xc;
                                xc = yc;
                                yc = t;
                                y.s = -y.s
                            }
                            if ((b = (j = yc.length) - (i = xc.length)) > 0) {
                                for (; b--; xc[i++] = 0) {}
                            }
                            for (b = i; j > a;) {
                                if (xc[--j] < yc[j]) {
                                    for (i = j; i && !xc[--i]; xc[i] = 9) {}--xc[i];
                                    xc[j] += 10
                                }
                                xc[j] -= yc[j]
                            }
                            for (; xc[--b] === 0; xc.pop()) {}
                            for (; xc[0] === 0;) {
                                xc.shift(); --ye
                            }
                            if (!xc[0]) {
                                y.s = 1;
                                xc = [ye = 0]
                            }
                            y.c = xc;
                            y.e = ye;
                            return y
                        };
                        P.mod = function(y) {
                            var yGTx, x = this,
                            Big = x.constructor,
                            a = x.s,
                            b = (y = new Big(y)).s;
                            if (!y.c[0]) {
                                throwErr(NaN)
                            }
                            x.s = y.s = 1;
                            yGTx = y.cmp(x) == 1;
                            x.s = a;
                            y.s = b;
                            if (yGTx) {
                                return new Big(x)
                            }
                            a = Big.DP;
                            b = Big.RM;
                            Big.DP = Big.RM = 0;
                            x = x.div(y);
                            Big.DP = a;
                            Big.RM = b;
                            return this.minus(x.times(y))
                        };
                        P.add = P.plus = function(y) {
                            var t, x = this,
                            Big = x.constructor,
                            a = x.s,
                            b = (y = new Big(y)).s;
                            if (a != b) {
                                y.s = -b;
                                return x.minus(y)
                            }
                            var xe = x.e,
                            xc = x.c,
                            ye = y.e,
                            yc = y.c;
                            if (!xc[0] || !yc[0]) {
                                return yc[0] ? y: new Big(xc[0] ? x: a * 0)
                            }
                            xc = xc.slice();
                            if (a = xe - ye) {
                                if (a > 0) {
                                    ye = xe;
                                    t = yc
                                } else {
                                    a = -a;
                                    t = xc
                                }
                                t.reverse();
                                for (; a--; t.push(0)) {}
                                t.reverse()
                            }
                            if (xc.length - yc.length < 0) {
                                t = yc;
                                yc = xc;
                                xc = t
                            }
                            a = yc.length;
                            for (b = 0; a;) {
                                b = (xc[--a] = xc[a] + yc[a] + b) / 10 | 0;
                                xc[a] %= 10
                            }
                            if (b) {
                                xc.unshift(b); ++ye
                            }
                            for (a = xc.length; xc[--a] === 0; xc.pop()) {}
                            y.c = xc;
                            y.e = ye;
                            return y
                        };
                        P.pow = function(n) {
                            var x = this,
                            one = new x.constructor(1),
                            y = one,
                            isNeg = n < 0;
                            if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) {
                                throwErr("!pow!")
                            }
                            n = isNeg ? -n: n;
                            for (;;) {
                                if (n & 1) {
                                    y = y.times(x)
                                }
                                n >>= 1;
                                if (!n) {
                                    break
                                }
                                x = x.times(x)
                            }
                            return isNeg ? one.div(y) : y
                        };
                        P.round = function(dp, rm) {
                            var x = this,
                            Big = x.constructor;
                            if (dp == null) {
                                dp = 0
                            } else if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
                                throwErr("!round!")
                            }
                            rnd(x = new Big(x), dp, rm == null ? Big.RM: rm);
                            return x
                        };
                        P.sqrt = function() {
                            var estimate, r, approx, x = this,
                            Big = x.constructor,
                            xc = x.c,
                            i = x.s,
                            e = x.e,
                            half = new Big("0.5");
                            if (!xc[0]) {
                                return new Big(x)
                            }
                            if (i < 0) {
                                throwErr(NaN)
                            }
                            i = Math.sqrt(x.toString());
                            if (i === 0 || i === 1 / 0) {
                                estimate = xc.join("");
                                if (! (estimate.length + e & 1)) {
                                    estimate += "0"
                                }
                                r = new Big(Math.sqrt(estimate).toString());
                                r.e = ((e + 1) / 2 | 0) - (e < 0 || e & 1)
                            } else {
                                r = new Big(i.toString())
                            }
                            i = r.e + (Big.DP += 4);
                            do {
                                approx = r;
                                r = half.times(approx.plus(x.div(approx)))
                            } while ( approx . c . slice ( 0 , i ).join("") !== r.c.slice(0, i).join(""));
                            rnd(r, Big.DP -= 4, Big.RM);
                            return r
                        };
                        P.mul = P.times = function(y) {
                            var c, x = this,
                            Big = x.constructor,
                            xc = x.c,
                            yc = (y = new Big(y)).c,
                            a = xc.length,
                            b = yc.length,
                            i = x.e,
                            j = y.e;
                            y.s = x.s == y.s ? 1 : -1;
                            if (!xc[0] || !yc[0]) {
                                return new Big(y.s * 0)
                            }
                            y.e = i + j;
                            if (a < b) {
                                c = xc;
                                xc = yc;
                                yc = c;
                                j = a;
                                a = b;
                                b = j
                            }
                            for (c = new Array(j = a + b); j--; c[j] = 0) {}
                            for (i = b; i--;) {
                                b = 0;
                                for (j = a + i; j > i;) {
                                    b = c[j] + yc[i] * xc[j - i - 1] + b;
                                    c[j--] = b % 10;
                                    b = b / 10 | 0
                                }
                                c[j] = (c[j] + b) % 10
                            }
                            if (b) {++y.e
                            }
                            if (!c[0]) {
                                c.shift()
                            }
                            for (i = c.length; ! c[--i]; c.pop()) {}
                            y.c = c;
                            return y
                        };
                        P.toString = P.valueOf = P.toJSON = function() {
                            var x = this,
                            Big = x.constructor,
                            e = x.e,
                            str = x.c.join(""),
                            strL = str.length;
                            if (e <= Big.E_NEG || e >= Big.E_POS) {
                                str = str.charAt(0) + (strL > 1 ? "." + str.slice(1) : "") + (e < 0 ? "e": "e+") + e
                            } else if (e < 0) {
                                for (; ++e; str = "0" + str) {}
                                str = "0." + str
                            } else if (e > 0) {
                                if (++e > strL) {
                                    for (e -= strL; e--; str += "0") {}
                                } else if (e < strL) {
                                    str = str.slice(0, e) + "." + str.slice(e)
                                }
                            } else if (strL > 1) {
                                str = str.charAt(0) + "." + str.slice(1)
                            }
                            return x.s < 0 && x.c[0] ? "-" + str: str
                        };
                        P.toExponential = function(dp) {
                            if (dp == null) {
                                dp = this.c.length - 1
                            } else if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
                                throwErr("!toExp!")
                            }
                            return format(this, dp, 1)
                        };
                        P.toFixed = function(dp) {
                            var str, x = this,
                            Big = x.constructor,
                            neg = Big.E_NEG,
                            pos = Big.E_POS;
                            Big.E_NEG = -(Big.E_POS = 1 / 0);
                            if (dp == null) {
                                str = x.toString()
                            } else if (dp === ~~dp && dp >= 0 && dp <= MAX_DP) {
                                str = format(x, x.e + dp);
                                if (x.s < 0 && x.c[0] && str.indexOf("-") < 0) {
                                    str = "-" + str
                                }
                            }
                            Big.E_NEG = neg;
                            Big.E_POS = pos;
                            if (!str) {
                                throwErr("!toFix!")
                            }
                            return str
                        };
                        P.toPrecision = function(sd) {
                            if (sd == null) {
                                return this.toString()
                            } else if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
                                throwErr("!toPre!")
                            }
                            return format(this, sd - 1, 2)
                        };
                        Big = bigFactory();
                        if (true) { ! (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                                return Big
                            }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
                        } else if (typeof module !== "undefined" && module.exports) {
                            module.exports = Big;
                            module.exports.Big = Big
                        } else {
                            global.Big = Big
                        }
                    })(this)
                },
                "./node_modules/ieee754/index.js": function(module, exports) {
                    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
                        var e, m;
                        var eLen = nBytes * 8 - mLen - 1;
                        var eMax = (1 << eLen) - 1;
                        var eBias = eMax >> 1;
                        var nBits = -7;
                        var i = isLE ? nBytes - 1 : 0;
                        var d = isLE ? -1 : 1;
                        var s = buffer[offset + i];
                        i += d;
                        e = s & (1 << -nBits) - 1;
                        s >>= -nBits;
                        nBits += eLen;
                        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
                        m = e & (1 << -nBits) - 1;
                        e >>= -nBits;
                        nBits += mLen;
                        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
                        if (e === 0) {
                            e = 1 - eBias
                        } else if (e === eMax) {
                            return m ? NaN: (s ? -1 : 1) * Infinity
                        } else {
                            m = m + Math.pow(2, mLen);
                            e = e - eBias
                        }
                        return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
                    };
                    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
                        var e, m, c;
                        var eLen = nBytes * 8 - mLen - 1;
                        var eMax = (1 << eLen) - 1;
                        var eBias = eMax >> 1;
                        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                        var i = isLE ? 0 : nBytes - 1;
                        var d = isLE ? 1 : -1;
                        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
                        value = Math.abs(value);
                        if (isNaN(value) || value === Infinity) {
                            m = isNaN(value) ? 1 : 0;
                            e = eMax
                        } else {
                            e = Math.floor(Math.log(value) / Math.LN2);
                            if (value * (c = Math.pow(2, -e)) < 1) {
                                e--;
                                c *= 2
                            }
                            if (e + eBias >= 1) {
                                value += rt / c
                            } else {
                                value += rt * Math.pow(2, 1 - eBias)
                            }
                            if (value * c >= 2) {
                                e++;
                                c /= 2
                            }
                            if (e + eBias >= eMax) {
                                m = 0;
                                e = eMax
                            } else if (e + eBias >= 1) {
                                m = (value * c - 1) * Math.pow(2, mLen);
                                e = e + eBias
                            } else {
                                m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                                e = 0
                            }
                        }
                        for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {}
                        e = e << mLen | m;
                        eLen += mLen;
                        for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {}
                        buffer[offset + i - d] |= s * 128
                    }
                },
                "./node_modules/isarray/index.js": function(module, exports) {
                    var toString = {}.toString;
                    module.exports = Array.isArray ||
                    function(arr) {
                        return toString.call(arr) == "[object Array]"
                    }
                },
                "./node_modules/node-libs-browser/node_modules/buffer/index.js": function(module, exports, __webpack_require__) {
                    "use strict"; (function(global) {
                        /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
                        var base64 = __webpack_require__("./node_modules/base64-js/index.js");
                        var ieee754 = __webpack_require__("./node_modules/ieee754/index.js");
                        var isArray = __webpack_require__("./node_modules/isarray/index.js");
                        exports.Buffer = Buffer;
                        exports.SlowBuffer = SlowBuffer;
                        exports.INSPECT_MAX_BYTES = 50;
                        Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT: typedArraySupport();
                        exports.kMaxLength = kMaxLength();
                        function typedArraySupport() {
                            try {
                                var arr = new Uint8Array(1);
                                arr.__proto__ = {
                                    __proto__: Uint8Array.prototype,
                                    foo: function() {
                                        return 42
                                    }
                                };
                                return arr.foo() === 42 && typeof arr.subarray === "function" && arr.subarray(1, 1).byteLength === 0
                            } catch(e) {
                                return false
                            }
                        }
                        function kMaxLength() {
                            return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                        }
                        function createBuffer(that, length) {
                            if (kMaxLength() < length) {
                                throw new RangeError("Invalid typed array length")
                            }
                            if (Buffer.TYPED_ARRAY_SUPPORT) {
                                that = new Uint8Array(length);
                                that.__proto__ = Buffer.prototype
                            } else {
                                if (that === null) {
                                    that = new Buffer(length)
                                }
                                that.length = length
                            }
                            return that
                        }
                        function Buffer(arg, encodingOrOffset, length) {
                            if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
                                return new Buffer(arg, encodingOrOffset, length)
                            }
                            if (typeof arg === "number") {
                                if (typeof encodingOrOffset === "string") {
                                    throw new Error("If encoding is specified then the first argument must be a string")
                                }
                                return allocUnsafe(this, arg)
                            }
                            return from(this, arg, encodingOrOffset, length)
                        }
                        Buffer.poolSize = 8192;
                        Buffer._augment = function(arr) {
                            arr.__proto__ = Buffer.prototype;
                            return arr
                        };
                        function from(that, value, encodingOrOffset, length) {
                            if (typeof value === "number") {
                                throw new TypeError('"value" argument must not be a number')
                            }
                            if (typeof ArrayBuffer !== "undefined" && value instanceof ArrayBuffer) {
                                return fromArrayBuffer(that, value, encodingOrOffset, length)
                            }
                            if (typeof value === "string") {
                                return fromString(that, value, encodingOrOffset)
                            }
                            return fromObject(that, value)
                        }
                        Buffer.from = function(value, encodingOrOffset, length) {
                            return from(null, value, encodingOrOffset, length)
                        };
                        if (Buffer.TYPED_ARRAY_SUPPORT) {
                            Buffer.prototype.__proto__ = Uint8Array.prototype;
                            Buffer.__proto__ = Uint8Array;
                            if (typeof Symbol !== "undefined" && Symbol.species && Buffer[Symbol.species] === Buffer) {
                                Object.defineProperty(Buffer, Symbol.species, {
                                    value: null,
                                    configurable: true
                                })
                            }
                        }
                        function assertSize(size) {
                            if (typeof size !== "number") {
                                throw new TypeError('"size" argument must be a number')
                            } else if (size < 0) {
                                throw new RangeError('"size" argument must not be negative')
                            }
                        }
                        function alloc(that, size, fill, encoding) {
                            assertSize(size);
                            if (size <= 0) {
                                return createBuffer(that, size)
                            }
                            if (fill !== undefined) {
                                return typeof encoding === "string" ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill)
                            }
                            return createBuffer(that, size)
                        }
                        Buffer.alloc = function(size, fill, encoding) {
                            return alloc(null, size, fill, encoding)
                        };
                        function allocUnsafe(that, size) {
                            assertSize(size);
                            that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
                            if (!Buffer.TYPED_ARRAY_SUPPORT) {
                                for (var i = 0; i < size; ++i) {
                                    that[i] = 0
                                }
                            }
                            return that
                        }
                        Buffer.allocUnsafe = function(size) {
                            return allocUnsafe(null, size)
                        };
                        Buffer.allocUnsafeSlow = function(size) {
                            return allocUnsafe(null, size)
                        };
                        function fromString(that, string, encoding) {
                            if (typeof encoding !== "string" || encoding === "") {
                                encoding = "utf8"
                            }
                            if (!Buffer.isEncoding(encoding)) {
                                throw new TypeError('"encoding" must be a valid string encoding')
                            }
                            var length = byteLength(string, encoding) | 0;
                            that = createBuffer(that, length);
                            var actual = that.write(string, encoding);
                            if (actual !== length) {
                                that = that.slice(0, actual)
                            }
                            return that
                        }
                        function fromArrayLike(that, array) {
                            var length = array.length < 0 ? 0 : checked(array.length) | 0;
                            that = createBuffer(that, length);
                            for (var i = 0; i < length; i += 1) {
                                that[i] = array[i] & 255
                            }
                            return that
                        }
                        function fromArrayBuffer(that, array, byteOffset, length) {
                            array.byteLength;
                            if (byteOffset < 0 || array.byteLength < byteOffset) {
                                throw new RangeError("'offset' is out of bounds")
                            }
                            if (array.byteLength < byteOffset + (length || 0)) {
                                throw new RangeError("'length' is out of bounds")
                            }
                            if (byteOffset === undefined && length === undefined) {
                                array = new Uint8Array(array)
                            } else if (length === undefined) {
                                array = new Uint8Array(array, byteOffset)
                            } else {
                                array = new Uint8Array(array, byteOffset, length)
                            }
                            if (Buffer.TYPED_ARRAY_SUPPORT) {
                                that = array;
                                that.__proto__ = Buffer.prototype
                            } else {
                                that = fromArrayLike(that, array)
                            }
                            return that
                        }
                        function fromObject(that, obj) {
                            if (Buffer.isBuffer(obj)) {
                                var len = checked(obj.length) | 0;
                                that = createBuffer(that, len);
                                if (that.length === 0) {
                                    return that
                                }
                                obj.copy(that, 0, 0, len);
                                return that
                            }
                            if (obj) {
                                if (typeof ArrayBuffer !== "undefined" && obj.buffer instanceof ArrayBuffer || "length" in obj) {
                                    if (typeof obj.length !== "number" || isnan(obj.length)) {
                                        return createBuffer(that, 0)
                                    }
                                    return fromArrayLike(that, obj)
                                }
                                if (obj.type === "Buffer" && isArray(obj.data)) {
                                    return fromArrayLike(that, obj.data)
                                }
                            }
                            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                        }
                        function checked(length) {
                            if (length >= kMaxLength()) {
                                throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + kMaxLength().toString(16) + " bytes")
                            }
                            return length | 0
                        }
                        function SlowBuffer(length) {
                            if ( + length != length) {
                                length = 0
                            }
                            return Buffer.alloc( + length)
                        }
                        Buffer.isBuffer = function isBuffer(b) {
                            return !! (b != null && b._isBuffer)
                        };
                        Buffer.compare = function compare(a, b) {
                            if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
                                throw new TypeError("Arguments must be Buffers")
                            }
                            if (a === b) return 0;
                            var x = a.length;
                            var y = b.length;
                            for (var i = 0,
                            len = Math.min(x, y); i < len; ++i) {
                                if (a[i] !== b[i]) {
                                    x = a[i];
                                    y = b[i];
                                    break
                                }
                            }
                            if (x < y) return - 1;
                            if (y < x) return 1;
                            return 0
                        };
                        Buffer.isEncoding = function isEncoding(encoding) {
                            switch (String(encoding).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return true;
                            default:
                                return false
                            }
                        };
                        Buffer.concat = function concat(list, length) {
                            if (!isArray(list)) {
                                throw new TypeError('"list" argument must be an Array of Buffers')
                            }
                            if (list.length === 0) {
                                return Buffer.alloc(0)
                            }
                            var i;
                            if (length === undefined) {
                                length = 0;
                                for (i = 0; i < list.length; ++i) {
                                    length += list[i].length
                                }
                            }
                            var buffer = Buffer.allocUnsafe(length);
                            var pos = 0;
                            for (i = 0; i < list.length; ++i) {
                                var buf = list[i];
                                if (!Buffer.isBuffer(buf)) {
                                    throw new TypeError('"list" argument must be an Array of Buffers')
                                }
                                buf.copy(buffer, pos);
                                pos += buf.length
                            }
                            return buffer
                        };
                        function byteLength(string, encoding) {
                            if (Buffer.isBuffer(string)) {
                                return string.length
                            }
                            if (typeof ArrayBuffer !== "undefined" && typeof ArrayBuffer.isView === "function" && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
                                return string.byteLength
                            }
                            if (typeof string !== "string") {
                                string = "" + string
                            }
                            var len = string.length;
                            if (len === 0) return 0;
                            var loweredCase = false;
                            for (;;) {
                                switch (encoding) {
                                case "ascii":
                                case "latin1":
                                case "binary":
                                    return len;
                                case "utf8":
                                case "utf-8":
                                case undefined:
                                    return utf8ToBytes(string).length;
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return len * 2;
                                case "hex":
                                    return len >>> 1;
                                case "base64":
                                    return base64ToBytes(string).length;
                                default:
                                    if (loweredCase) return utf8ToBytes(string).length;
                                    encoding = ("" + encoding).toLowerCase();
                                    loweredCase = true
                                }
                            }
                        }
                        Buffer.byteLength = byteLength;
                        function slowToString(encoding, start, end) {
                            var loweredCase = false;
                            if (start === undefined || start < 0) {
                                start = 0
                            }
                            if (start > this.length) {
                                return ""
                            }
                            if (end === undefined || end > this.length) {
                                end = this.length
                            }
                            if (end <= 0) {
                                return ""
                            }
                            end >>>= 0;
                            start >>>= 0;
                            if (end <= start) {
                                return ""
                            }
                            if (!encoding) encoding = "utf8";
                            while (true) {
                                switch (encoding) {
                                case "hex":
                                    return hexSlice(this, start, end);
                                case "utf8":
                                case "utf-8":
                                    return utf8Slice(this, start, end);
                                case "ascii":
                                    return asciiSlice(this, start, end);
                                case "latin1":
                                case "binary":
                                    return latin1Slice(this, start, end);
                                case "base64":
                                    return base64Slice(this, start, end);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return utf16leSlice(this, start, end);
                                default:
                                    if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                                    encoding = (encoding + "").toLowerCase();
                                    loweredCase = true
                                }
                            }
                        }
                        Buffer.prototype._isBuffer = true;
                        function swap(b, n, m) {
                            var i = b[n];
                            b[n] = b[m];
                            b[m] = i
                        }
                        Buffer.prototype.swap16 = function swap16() {
                            var len = this.length;
                            if (len % 2 !== 0) {
                                throw new RangeError("Buffer size must be a multiple of 16-bits")
                            }
                            for (var i = 0; i < len; i += 2) {
                                swap(this, i, i + 1)
                            }
                            return this
                        };
                        Buffer.prototype.swap32 = function swap32() {
                            var len = this.length;
                            if (len % 4 !== 0) {
                                throw new RangeError("Buffer size must be a multiple of 32-bits")
                            }
                            for (var i = 0; i < len; i += 4) {
                                swap(this, i, i + 3);
                                swap(this, i + 1, i + 2)
                            }
                            return this
                        };
                        Buffer.prototype.swap64 = function swap64() {
                            var len = this.length;
                            if (len % 8 !== 0) {
                                throw new RangeError("Buffer size must be a multiple of 64-bits")
                            }
                            for (var i = 0; i < len; i += 8) {
                                swap(this, i, i + 7);
                                swap(this, i + 1, i + 6);
                                swap(this, i + 2, i + 5);
                                swap(this, i + 3, i + 4)
                            }
                            return this
                        };
                        Buffer.prototype.toString = function toString() {
                            var length = this.length | 0;
                            if (length === 0) return "";
                            if (arguments.length === 0) return utf8Slice(this, 0, length);
                            return slowToString.apply(this, arguments)
                        };
                        Buffer.prototype.equals = function equals(b) {
                            if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
                            if (this === b) return true;
                            return Buffer.compare(this, b) === 0
                        };
                        Buffer.prototype.inspect = function inspect() {
                            var str = "";
                            var max = exports.INSPECT_MAX_BYTES;
                            if (this.length > 0) {
                                str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
                                if (this.length > max) str += " ... "
                            }
                            return "<Buffer " + str + ">"
                        };
                        Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
                            if (!Buffer.isBuffer(target)) {
                                throw new TypeError("Argument must be a Buffer")
                            }
                            if (start === undefined) {
                                start = 0
                            }
                            if (end === undefined) {
                                end = target ? target.length: 0
                            }
                            if (thisStart === undefined) {
                                thisStart = 0
                            }
                            if (thisEnd === undefined) {
                                thisEnd = this.length
                            }
                            if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
                                throw new RangeError("out of range index")
                            }
                            if (thisStart >= thisEnd && start >= end) {
                                return 0
                            }
                            if (thisStart >= thisEnd) {
                                return - 1
                            }
                            if (start >= end) {
                                return 1
                            }
                            start >>>= 0;
                            end >>>= 0;
                            thisStart >>>= 0;
                            thisEnd >>>= 0;
                            if (this === target) return 0;
                            var x = thisEnd - thisStart;
                            var y = end - start;
                            var len = Math.min(x, y);
                            var thisCopy = this.slice(thisStart, thisEnd);
                            var targetCopy = target.slice(start, end);
                            for (var i = 0; i < len; ++i) {
                                if (thisCopy[i] !== targetCopy[i]) {
                                    x = thisCopy[i];
                                    y = targetCopy[i];
                                    break
                                }
                            }
                            if (x < y) return - 1;
                            if (y < x) return 1;
                            return 0
                        };
                        function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                            if (buffer.length === 0) return - 1;
                            if (typeof byteOffset === "string") {
                                encoding = byteOffset;
                                byteOffset = 0
                            } else if (byteOffset > 2147483647) {
                                byteOffset = 2147483647
                            } else if (byteOffset < -2147483648) {
                                byteOffset = -2147483648
                            }
                            byteOffset = +byteOffset;
                            if (isNaN(byteOffset)) {
                                byteOffset = dir ? 0 : buffer.length - 1
                            }
                            if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
                            if (byteOffset >= buffer.length) {
                                if (dir) return - 1;
                                else byteOffset = buffer.length - 1
                            } else if (byteOffset < 0) {
                                if (dir) byteOffset = 0;
                                else return - 1
                            }
                            if (typeof val === "string") {
                                val = Buffer.from(val, encoding)
                            }
                            if (Buffer.isBuffer(val)) {
                                if (val.length === 0) {
                                    return - 1
                                }
                                return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
                            } else if (typeof val === "number") {
                                val = val & 255;
                                if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === "function") {
                                    if (dir) {
                                        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
                                    } else {
                                        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
                                    }
                                }
                                return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
                            }
                            throw new TypeError("val must be string, number or Buffer")
                        }
                        function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                            var indexSize = 1;
                            var arrLength = arr.length;
                            var valLength = val.length;
                            if (encoding !== undefined) {
                                encoding = String(encoding).toLowerCase();
                                if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
                                    if (arr.length < 2 || val.length < 2) {
                                        return - 1
                                    }
                                    indexSize = 2;
                                    arrLength /= 2;
                                    valLength /= 2;
                                    byteOffset /= 2
                                }
                            }
                            function read(buf, i) {
                                if (indexSize === 1) {
                                    return buf[i]
                                } else {
                                    return buf.readUInt16BE(i * indexSize)
                                }
                            }
                            var i;
                            if (dir) {
                                var foundIndex = -1;
                                for (i = byteOffset; i < arrLength; i++) {
                                    if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                                        if (foundIndex === -1) foundIndex = i;
                                        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
                                    } else {
                                        if (foundIndex !== -1) i -= i - foundIndex;
                                        foundIndex = -1
                                    }
                                }
                            } else {
                                if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
                                for (i = byteOffset; i >= 0; i--) {
                                    var found = true;
                                    for (var j = 0; j < valLength; j++) {
                                        if (read(arr, i + j) !== read(val, j)) {
                                            found = false;
                                            break
                                        }
                                    }
                                    if (found) return i
                                }
                            }
                            return - 1
                        }
                        Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
                            return this.indexOf(val, byteOffset, encoding) !== -1
                        };
                        Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
                            return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
                        };
                        Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
                            return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
                        };
                        function hexWrite(buf, string, offset, length) {
                            offset = Number(offset) || 0;
                            var remaining = buf.length - offset;
                            if (!length) {
                                length = remaining
                            } else {
                                length = Number(length);
                                if (length > remaining) {
                                    length = remaining
                                }
                            }
                            var strLen = string.length;
                            if (strLen % 2 !== 0) throw new TypeError("Invalid hex string");
                            if (length > strLen / 2) {
                                length = strLen / 2
                            }
                            for (var i = 0; i < length; ++i) {
                                var parsed = parseInt(string.substr(i * 2, 2), 16);
                                if (isNaN(parsed)) return i;
                                buf[offset + i] = parsed
                            }
                            return i
                        }
                        function utf8Write(buf, string, offset, length) {
                            return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
                        }
                        function asciiWrite(buf, string, offset, length) {
                            return blitBuffer(asciiToBytes(string), buf, offset, length)
                        }
                        function latin1Write(buf, string, offset, length) {
                            return asciiWrite(buf, string, offset, length)
                        }
                        function base64Write(buf, string, offset, length) {
                            return blitBuffer(base64ToBytes(string), buf, offset, length)
                        }
                        function ucs2Write(buf, string, offset, length) {
                            return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
                        }
                        Buffer.prototype.write = function write(string, offset, length, encoding) {
                            if (offset === undefined) {
                                encoding = "utf8";
                                length = this.length;
                                offset = 0
                            } else if (length === undefined && typeof offset === "string") {
                                encoding = offset;
                                length = this.length;
                                offset = 0
                            } else if (isFinite(offset)) {
                                offset = offset | 0;
                                if (isFinite(length)) {
                                    length = length | 0;
                                    if (encoding === undefined) encoding = "utf8"
                                } else {
                                    encoding = length;
                                    length = undefined
                                }
                            } else {
                                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")
                            }
                            var remaining = this.length - offset;
                            if (length === undefined || length > remaining) length = remaining;
                            if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
                                throw new RangeError("Attempt to write outside buffer bounds")
                            }
                            if (!encoding) encoding = "utf8";
                            var loweredCase = false;
                            for (;;) {
                                switch (encoding) {
                                case "hex":
                                    return hexWrite(this, string, offset, length);
                                case "utf8":
                                case "utf-8":
                                    return utf8Write(this, string, offset, length);
                                case "ascii":
                                    return asciiWrite(this, string, offset, length);
                                case "latin1":
                                case "binary":
                                    return latin1Write(this, string, offset, length);
                                case "base64":
                                    return base64Write(this, string, offset, length);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return ucs2Write(this, string, offset, length);
                                default:
                                    if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                                    encoding = ("" + encoding).toLowerCase();
                                    loweredCase = true
                                }
                            }
                        };
                        Buffer.prototype.toJSON = function toJSON() {
                            return {
                                type: "Buffer",
                                data: Array.prototype.slice.call(this._arr || this, 0)
                            }
                        };
                        function base64Slice(buf, start, end) {
                            if (start === 0 && end === buf.length) {
                                return base64.fromByteArray(buf)
                            } else {
                                return base64.fromByteArray(buf.slice(start, end))
                            }
                        }
                        function utf8Slice(buf, start, end) {
                            end = Math.min(buf.length, end);
                            var res = [];
                            var i = start;
                            while (i < end) {
                                var firstByte = buf[i];
                                var codePoint = null;
                                var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
                                if (i + bytesPerSequence <= end) {
                                    var secondByte, thirdByte, fourthByte, tempCodePoint;
                                    switch (bytesPerSequence) {
                                    case 1:
                                        if (firstByte < 128) {
                                            codePoint = firstByte
                                        }
                                        break;
                                    case 2:
                                        secondByte = buf[i + 1];
                                        if ((secondByte & 192) === 128) {
                                            tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                                            if (tempCodePoint > 127) {
                                                codePoint = tempCodePoint
                                            }
                                        }
                                        break;
                                    case 3:
                                        secondByte = buf[i + 1];
                                        thirdByte = buf[i + 2];
                                        if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                                            tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                                            if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                                                codePoint = tempCodePoint
                                            }
                                        }
                                        break;
                                    case 4:
                                        secondByte = buf[i + 1];
                                        thirdByte = buf[i + 2];
                                        fourthByte = buf[i + 3];
                                        if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                                            tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                                            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                                                codePoint = tempCodePoint
                                            }
                                        }
                                    }
                                }
                                if (codePoint === null) {
                                    codePoint = 65533;
                                    bytesPerSequence = 1
                                } else if (codePoint > 65535) {
                                    codePoint -= 65536;
                                    res.push(codePoint >>> 10 & 1023 | 55296);
                                    codePoint = 56320 | codePoint & 1023
                                }
                                res.push(codePoint);
                                i += bytesPerSequence
                            }
                            return decodeCodePointsArray(res)
                        }
                        var MAX_ARGUMENTS_LENGTH = 4096;
                        function decodeCodePointsArray(codePoints) {
                            var len = codePoints.length;
                            if (len <= MAX_ARGUMENTS_LENGTH) {
                                return String.fromCharCode.apply(String, codePoints)
                            }
                            var res = "";
                            var i = 0;
                            while (i < len) {
                                res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH))
                            }
                            return res
                        }
                        function asciiSlice(buf, start, end) {
                            var ret = "";
                            end = Math.min(buf.length, end);
                            for (var i = start; i < end; ++i) {
                                ret += String.fromCharCode(buf[i] & 127)
                            }
                            return ret
                        }
                        function latin1Slice(buf, start, end) {
                            var ret = "";
                            end = Math.min(buf.length, end);
                            for (var i = start; i < end; ++i) {
                                ret += String.fromCharCode(buf[i])
                            }
                            return ret
                        }
                        function hexSlice(buf, start, end) {
                            var len = buf.length;
                            if (!start || start < 0) start = 0;
                            if (!end || end < 0 || end > len) end = len;
                            var out = "";
                            for (var i = start; i < end; ++i) {
                                out += toHex(buf[i])
                            }
                            return out
                        }
                        function utf16leSlice(buf, start, end) {
                            var bytes = buf.slice(start, end);
                            var res = "";
                            for (var i = 0; i < bytes.length; i += 2) {
                                res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
                            }
                            return res
                        }
                        Buffer.prototype.slice = function slice(start, end) {
                            var len = this.length;
                            start = ~~start;
                            end = end === undefined ? len: ~~end;
                            if (start < 0) {
                                start += len;
                                if (start < 0) start = 0
                            } else if (start > len) {
                                start = len
                            }
                            if (end < 0) {
                                end += len;
                                if (end < 0) end = 0
                            } else if (end > len) {
                                end = len
                            }
                            if (end < start) end = start;
                            var newBuf;
                            if (Buffer.TYPED_ARRAY_SUPPORT) {
                                newBuf = this.subarray(start, end);
                                newBuf.__proto__ = Buffer.prototype
                            } else {
                                var sliceLen = end - start;
                                newBuf = new Buffer(sliceLen, undefined);
                                for (var i = 0; i < sliceLen; ++i) {
                                    newBuf[i] = this[i + start]
                                }
                            }
                            return newBuf
                        };
                        function checkOffset(offset, ext, length) {
                            if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
                            if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length")
                        }
                        Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
                            offset = offset | 0;
                            byteLength = byteLength | 0;
                            if (!noAssert) checkOffset(offset, byteLength, this.length);
                            var val = this[offset];
                            var mul = 1;
                            var i = 0;
                            while (++i < byteLength && (mul *= 256)) {
                                val += this[offset + i] * mul
                            }
                            return val
                        };
                        Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
                            offset = offset | 0;
                            byteLength = byteLength | 0;
                            if (!noAssert) {
                                checkOffset(offset, byteLength, this.length)
                            }
                            var val = this[offset + --byteLength];
                            var mul = 1;
                            while (byteLength > 0 && (mul *= 256)) {
                                val += this[offset + --byteLength] * mul
                            }
                            return val
                        };
                        Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
                            if (!noAssert) checkOffset(offset, 1, this.length);
                            return this[offset]
                        };
                        Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
                            if (!noAssert) checkOffset(offset, 2, this.length);
                            return this[offset] | this[offset + 1] << 8
                        };
                        Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
                            if (!noAssert) checkOffset(offset, 2, this.length);
                            return this[offset] << 8 | this[offset + 1]
                        };
                        Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
                            if (!noAssert) checkOffset(offset, 4, this.length);
                            return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216
                        };
                        Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
                            if (!noAssert) checkOffset(offset, 4, this.length);
                            return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3])
                        };
                        Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
                            offset = offset | 0;
                            byteLength = byteLength | 0;
                            if (!noAssert) checkOffset(offset, byteLength, this.length);
                            var val = this[offset];
                            var mul = 1;
                            var i = 0;
                            while (++i < byteLength && (mul *= 256)) {
                                val += this[offset + i] * mul
                            }
                            mul *= 128;
                            if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                            return val
                        };
                        Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
                            offset = offset | 0;
                            byteLength = byteLength | 0;
                            if (!noAssert) checkOffset(offset, byteLength, this.length);
                            var i = byteLength;
                            var mul = 1;
                            var val = this[offset + --i];
                            while (i > 0 && (mul *= 256)) {
                                val += this[offset + --i] * mul
                            }
                            mul *= 128;
                            if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                            return val
                        };
                        Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
                            if (!noAssert) checkOffset(offset, 1, this.length);
                            if (! (this[offset] & 128)) return this[offset];
                            return (255 - this[offset] + 1) * -1
                        };
                        Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
                            if (!noAssert) checkOffset(offset, 2, this.length);
                            var val = this[offset] | this[offset + 1] << 8;
                            return val & 32768 ? val | 4294901760 : val
                        };
                        Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
                            if (!noAssert) checkOffset(offset, 2, this.length);
                            var val = this[offset + 1] | this[offset] << 8;
                            return val & 32768 ? val | 4294901760 : val
                        };
                        Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
                            if (!noAssert) checkOffset(offset, 4, this.length);
                            return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24
                        };
                        Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
                            if (!noAssert) checkOffset(offset, 4, this.length);
                            return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]
                        };
                        Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
                            if (!noAssert) checkOffset(offset, 4, this.length);
                            return ieee754.read(this, offset, true, 23, 4)
                        };
                        Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
                            if (!noAssert) checkOffset(offset, 4, this.length);
                            return ieee754.read(this, offset, false, 23, 4)
                        };
                        Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
                            if (!noAssert) checkOffset(offset, 8, this.length);
                            return ieee754.read(this, offset, true, 52, 8)
                        };
                        Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
                            if (!noAssert) checkOffset(offset, 8, this.length);
                            return ieee754.read(this, offset, false, 52, 8)
                        };
                        function checkInt(buf, value, offset, ext, max, min) {
                            if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
                            if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
                            if (offset + ext > buf.length) throw new RangeError("Index out of range")
                        }
                        Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
                            value = +value;
                            offset = offset | 0;
                            byteLength = byteLength | 0;
                            if (!noAssert) {
                                var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                                checkInt(this, value, offset, byteLength, maxBytes, 0)
                            }
                            var mul = 1;
                            var i = 0;
                            this[offset] = value & 255;
                            while (++i < byteLength && (mul *= 256)) {
                                this[offset + i] = value / mul & 255
                            }
                            return offset + byteLength
                        };
                        Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
                            value = +value;
                            offset = offset | 0;
                            byteLength = byteLength | 0;
                            if (!noAssert) {
                                var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                                checkInt(this, value, offset, byteLength, maxBytes, 0)
                            }
                            var i = byteLength - 1;
                            var mul = 1;
                            this[offset + i] = value & 255;
                            while (--i >= 0 && (mul *= 256)) {
                                this[offset + i] = value / mul & 255
                            }
                            return offset + byteLength
                        };
                        Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
                            value = +value;
                            offset = offset | 0;
                            if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
                            if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
                            this[offset] = value & 255;
                            return offset + 1
                        };
                        function objectWriteUInt16(buf, value, offset, littleEndian) {
                            if (value < 0) value = 65535 + value + 1;
                            for (var i = 0,
                            j = Math.min(buf.length - offset, 2); i < j; ++i) {
                                buf[offset + i] = (value & 255 << 8 * (littleEndian ? i: 1 - i)) >>> (littleEndian ? i: 1 - i) * 8
                            }
                        }
                        Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
                            value = +value;
                            offset = offset | 0;
                            if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                            if (Buffer.TYPED_ARRAY_SUPPORT) {
                                this[offset] = value & 255;
                                this[offset + 1] = value >>> 8
                            } else {
                                objectWriteUInt16(this, value, offset, true)
                            }
                            return offset + 2
                        };
                        Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
                            value = +value;
                            offset = offset | 0;
                            if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                            if (Buffer.TYPED_ARRAY_SUPPORT) {
                                this[offset] = value >>> 8;
                                this[offset + 1] = value & 255
                            } else {
                                objectWriteUInt16(this, value, offset, false)
                            }
                            return offset + 2
                        };
                        function objectWriteUInt32(buf, value, offset, littleEndian) {
                            if (value < 0) value = 4294967295 + value + 1;
                            for (var i = 0,
                            j = Math.min(buf.length - offset, 4); i < j; ++i) {
                                buf[offset + i] = value >>> (littleEndian ? i: 3 - i) * 8 & 255
                            }
                        }
                        Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
                            value = +value;
                            offset = offset | 0;
                            if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                            if (Buffer.TYPED_ARRAY_SUPPORT) {
                                this[offset + 3] = value >>> 24;
                                this[offset + 2] = value >>> 16;
                                this[offset + 1] = value >>> 8;
                                this[offset] = value & 255
                            } else {
                                objectWriteUInt32(this, value, offset, true)
                            }
                            return offset + 4
                        };
                        Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
                            value = +value;
                            offset = offset | 0;
                            if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                            if (Buffer.TYPED_ARRAY_SUPPORT) {
                                this[offset] = value >>> 24;
                                this[offset + 1] = value >>> 16;
                                this[offset + 2] = value >>> 8;
                                this[offset + 3] = value & 255
                            } else {
                                objectWriteUInt32(this, value, offset, false)
                            }
                            return offset + 4
                        };
                        Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
                            value = +value;
                            offset = offset | 0;
                            if (!noAssert) {
                                var limit = Math.pow(2, 8 * byteLength - 1);
                                checkInt(this, value, offset, byteLength, limit - 1, -limit)
                            }
                            var i = 0;
                            var mul = 1;
                            var sub = 0;
                            this[offset] = value & 255;
                            while (++i < byteLength && (mul *= 256)) {
                                if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
                                    sub = 1
                                }
                                this[offset + i] = (value / mul >> 0) - sub & 255
                            }
                            return offset + byteLength
                        };
                        Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
                            value = +value;
                            offset = offset | 0;
                            if (!noAssert) {
                                var limit = Math.pow(2, 8 * byteLength - 1);
                                checkInt(this, value, offset, byteLength, limit - 1, -limit)
                            }
                            var i = byteLength - 1;
                            var mul = 1;
                            var sub = 0;
                            this[offset + i] = value & 255;
                            while (--i >= 0 && (mul *= 256)) {
                                if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
                                    sub = 1
                                }
                                this[offset + i] = (value / mul >> 0) - sub & 255
                            }
                            return offset + byteLength
                        };
                        Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
                            value = +value;
                            offset = offset | 0;
                            if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
                            if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
                            if (value < 0) value = 255 + value + 1;
                            this[offset] = value & 255;
                            return offset + 1
                        };
                        Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
                            value = +value;
                            offset = offset | 0;
                            if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                            if (Buffer.TYPED_ARRAY_SUPPORT) {
                                this[offset] = value & 255;
                                this[offset + 1] = value >>> 8
                            } else {
                                objectWriteUInt16(this, value, offset, true)
                            }
                            return offset + 2
                        };
                        Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
                            value = +value;
                            offset = offset | 0;
                            if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                            if (Buffer.TYPED_ARRAY_SUPPORT) {
                                this[offset] = value >>> 8;
                                this[offset + 1] = value & 255
                            } else {
                                objectWriteUInt16(this, value, offset, false)
                            }
                            return offset + 2
                        };
                        Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
                            value = +value;
                            offset = offset | 0;
                            if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                            if (Buffer.TYPED_ARRAY_SUPPORT) {
                                this[offset] = value & 255;
                                this[offset + 1] = value >>> 8;
                                this[offset + 2] = value >>> 16;
                                this[offset + 3] = value >>> 24
                            } else {
                                objectWriteUInt32(this, value, offset, true)
                            }
                            return offset + 4
                        };
                        Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
                            value = +value;
                            offset = offset | 0;
                            if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                            if (value < 0) value = 4294967295 + value + 1;
                            if (Buffer.TYPED_ARRAY_SUPPORT) {
                                this[offset] = value >>> 24;
                                this[offset + 1] = value >>> 16;
                                this[offset + 2] = value >>> 8;
                                this[offset + 3] = value & 255
                            } else {
                                objectWriteUInt32(this, value, offset, false)
                            }
                            return offset + 4
                        };
                        function checkIEEE754(buf, value, offset, ext, max, min) {
                            if (offset + ext > buf.length) throw new RangeError("Index out of range");
                            if (offset < 0) throw new RangeError("Index out of range")
                        }
                        function writeFloat(buf, value, offset, littleEndian, noAssert) {
                            if (!noAssert) {
                                checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22)
                            }
                            ieee754.write(buf, value, offset, littleEndian, 23, 4);
                            return offset + 4
                        }
                        Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
                            return writeFloat(this, value, offset, true, noAssert)
                        };
                        Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
                            return writeFloat(this, value, offset, false, noAssert)
                        };
                        function writeDouble(buf, value, offset, littleEndian, noAssert) {
                            if (!noAssert) {
                                checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292)
                            }
                            ieee754.write(buf, value, offset, littleEndian, 52, 8);
                            return offset + 8
                        }
                        Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
                            return writeDouble(this, value, offset, true, noAssert)
                        };
                        Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
                            return writeDouble(this, value, offset, false, noAssert)
                        };
                        Buffer.prototype.copy = function copy(target, targetStart, start, end) {
                            if (!start) start = 0;
                            if (!end && end !== 0) end = this.length;
                            if (targetStart >= target.length) targetStart = target.length;
                            if (!targetStart) targetStart = 0;
                            if (end > 0 && end < start) end = start;
                            if (end === start) return 0;
                            if (target.length === 0 || this.length === 0) return 0;
                            if (targetStart < 0) {
                                throw new RangeError("targetStart out of bounds")
                            }
                            if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
                            if (end < 0) throw new RangeError("sourceEnd out of bounds");
                            if (end > this.length) end = this.length;
                            if (target.length - targetStart < end - start) {
                                end = target.length - targetStart + start
                            }
                            var len = end - start;
                            var i;
                            if (this === target && start < targetStart && targetStart < end) {
                                for (i = len - 1; i >= 0; --i) {
                                    target[i + targetStart] = this[i + start]
                                }
                            } else if (len < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) {
                                for (i = 0; i < len; ++i) {
                                    target[i + targetStart] = this[i + start]
                                }
                            } else {
                                Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart)
                            }
                            return len
                        };
                        Buffer.prototype.fill = function fill(val, start, end, encoding) {
                            if (typeof val === "string") {
                                if (typeof start === "string") {
                                    encoding = start;
                                    start = 0;
                                    end = this.length
                                } else if (typeof end === "string") {
                                    encoding = end;
                                    end = this.length
                                }
                                if (val.length === 1) {
                                    var code = val.charCodeAt(0);
                                    if (code < 256) {
                                        val = code
                                    }
                                }
                                if (encoding !== undefined && typeof encoding !== "string") {
                                    throw new TypeError("encoding must be a string")
                                }
                                if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) {
                                    throw new TypeError("Unknown encoding: " + encoding)
                                }
                            } else if (typeof val === "number") {
                                val = val & 255
                            }
                            if (start < 0 || this.length < start || this.length < end) {
                                throw new RangeError("Out of range index")
                            }
                            if (end <= start) {
                                return this
                            }
                            start = start >>> 0;
                            end = end === undefined ? this.length: end >>> 0;
                            if (!val) val = 0;
                            var i;
                            if (typeof val === "number") {
                                for (i = start; i < end; ++i) {
                                    this[i] = val
                                }
                            } else {
                                var bytes = Buffer.isBuffer(val) ? val: utf8ToBytes(new Buffer(val, encoding).toString());
                                var len = bytes.length;
                                for (i = 0; i < end - start; ++i) {
                                    this[i + start] = bytes[i % len]
                                }
                            }
                            return this
                        };
                        var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
                        function base64clean(str) {
                            str = stringtrim(str).replace(INVALID_BASE64_RE, "");
                            if (str.length < 2) return "";
                            while (str.length % 4 !== 0) {
                                str = str + "="
                            }
                            return str
                        }
                        function stringtrim(str) {
                            if (str.trim) return str.trim();
                            return str.replace(/^\s+|\s+$/g, "")
                        }
                        function toHex(n) {
                            if (n < 16) return "0" + n.toString(16);
                            return n.toString(16)
                        }
                        function utf8ToBytes(string, units) {
                            units = units || Infinity;
                            var codePoint;
                            var length = string.length;
                            var leadSurrogate = null;
                            var bytes = [];
                            for (var i = 0; i < length; ++i) {
                                codePoint = string.charCodeAt(i);
                                if (codePoint > 55295 && codePoint < 57344) {
                                    if (!leadSurrogate) {
                                        if (codePoint > 56319) {
                                            if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                            continue
                                        } else if (i + 1 === length) {
                                            if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                            continue
                                        }
                                        leadSurrogate = codePoint;
                                        continue
                                    }
                                    if (codePoint < 56320) {
                                        if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                        leadSurrogate = codePoint;
                                        continue
                                    }
                                    codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536
                                } else if (leadSurrogate) {
                                    if ((units -= 3) > -1) bytes.push(239, 191, 189)
                                }
                                leadSurrogate = null;
                                if (codePoint < 128) {
                                    if ((units -= 1) < 0) break;
                                    bytes.push(codePoint)
                                } else if (codePoint < 2048) {
                                    if ((units -= 2) < 0) break;
                                    bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128)
                                } else if (codePoint < 65536) {
                                    if ((units -= 3) < 0) break;
                                    bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128)
                                } else if (codePoint < 1114112) {
                                    if ((units -= 4) < 0) break;
                                    bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128)
                                } else {
                                    throw new Error("Invalid code point")
                                }
                            }
                            return bytes
                        }
                        function asciiToBytes(str) {
                            var byteArray = [];
                            for (var i = 0; i < str.length; ++i) {
                                byteArray.push(str.charCodeAt(i) & 255)
                            }
                            return byteArray
                        }
                        function utf16leToBytes(str, units) {
                            var c, hi, lo;
                            var byteArray = [];
                            for (var i = 0; i < str.length; ++i) {
                                if ((units -= 2) < 0) break;
                                c = str.charCodeAt(i);
                                hi = c >> 8;
                                lo = c % 256;
                                byteArray.push(lo);
                                byteArray.push(hi)
                            }
                            return byteArray
                        }
                        function base64ToBytes(str) {
                            return base64.toByteArray(base64clean(str))
                        }
                        function blitBuffer(src, dst, offset, length) {
                            for (var i = 0; i < length; ++i) {
                                if (i + offset >= dst.length || i >= src.length) break;
                                dst[i + offset] = src[i]
                            }
                            return i
                        }
                        function isnan(val) {
                            return val !== val
                        }
                    }).call(exports, __webpack_require__("./node_modules/hippy-pack/buildin/global.js"))
                },
                "./node_modules/object-assign/index.js": function(module, exports, __webpack_require__) {
                    "use strict";
                    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
                    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
                    var hasOwnProperty = Object.prototype.hasOwnProperty;
                    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
                    function toObject(val) {
                        if (val === null || val === undefined) {
                            throw new TypeError("Object.assign cannot be called with null or undefined")
                        }
                        return Object(val)
                    }
                    function shouldUseNative() {
                        try {
                            if (!Object.assign) {
                                return false
                            }
                            var test1 = new String("abc");
                            test1[5] = "de";
                            if (Object.getOwnPropertyNames(test1)[0] === "5") {
                                return false
                            }
                            var test2 = {};
                            for (var i = 0; i < 10; i++) {
                                test2["_" + String.fromCharCode(i)] = i
                            }
                            var order2 = Object.getOwnPropertyNames(test2).map((function(n) {
                                return test2[n]
                            }));
                            if (order2.join("") !== "0123456789") {
                                return false
                            }
                            var test3 = {};
                            "abcdefghijklmnopqrst".split("").forEach((function(letter) {
                                test3[letter] = letter
                            }));
                            if (Object.keys(Object.assign({},
                            test3)).join("") !== "abcdefghijklmnopqrst") {
                                return false
                            }
                            return true
                        } catch(err) {
                            return false
                        }
                    }
                    module.exports = shouldUseNative() ? Object.assign: function(target, source) {
                        var from;
                        var to = toObject(target);
                        var symbols;
                        for (var s = 1; s < arguments.length; s++) {
                            from = Object(arguments[s]);
                            for (var key in from) {
                                if (hasOwnProperty.call(from, key)) {
                                    to[key] = from[key]
                                }
                            }
                            if (getOwnPropertySymbols) {
                                symbols = getOwnPropertySymbols(from);
                                for (var i = 0; i < symbols.length; i++) {
                                    if (propIsEnumerable.call(from, symbols[i])) {
                                        to[symbols[i]] = from[symbols[i]]
                                    }
                                }
                            }
                        }
                        return to
                    }
                },
                "./node_modules/process/browser.js": function(module, exports) {
                    var process = module.exports = {};
                    var cachedSetTimeout;
                    var cachedClearTimeout;
                    function defaultSetTimout() {
                        throw new Error("setTimeout has not been defined")
                    }
                    function defaultClearTimeout() {
                        throw new Error("clearTimeout has not been defined")
                    } (function() {
                        try {
                            if (typeof setTimeout === "function") {
                                cachedSetTimeout = setTimeout
                            } else {
                                cachedSetTimeout = defaultSetTimout
                            }
                        } catch(e) {
                            cachedSetTimeout = defaultSetTimout
                        }
                        try {
                            if (typeof clearTimeout === "function") {
                                cachedClearTimeout = clearTimeout
                            } else {
                                cachedClearTimeout = defaultClearTimeout
                            }
                        } catch(e) {
                            cachedClearTimeout = defaultClearTimeout
                        }
                    })();
                    function runTimeout(fun) {
                        if (cachedSetTimeout === setTimeout) {
                            return setTimeout(fun, 0)
                        }
                        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                            cachedSetTimeout = setTimeout;
                            return setTimeout(fun, 0)
                        }
                        try {
                            return cachedSetTimeout(fun, 0)
                        } catch(e) {
                            try {
                                return cachedSetTimeout.call(null, fun, 0)
                            } catch(e) {
                                return cachedSetTimeout.call(this, fun, 0)
                            }
                        }
                    }
                    function runClearTimeout(marker) {
                        if (cachedClearTimeout === clearTimeout) {
                            return clearTimeout(marker)
                        }
                        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                            cachedClearTimeout = clearTimeout;
                            return clearTimeout(marker)
                        }
                        try {
                            return cachedClearTimeout(marker)
                        } catch(e) {
                            try {
                                return cachedClearTimeout.call(null, marker)
                            } catch(e) {
                                return cachedClearTimeout.call(this, marker)
                            }
                        }
                    }
                    var queue = [];
                    var draining = false;
                    var currentQueue;
                    var queueIndex = -1;
                    function cleanUpNextTick() {
                        if (!draining || !currentQueue) {
                            return
                        }
                        draining = false;
                        if (currentQueue.length) {
                            queue = currentQueue.concat(queue)
                        } else {
                            queueIndex = -1
                        }
                        if (queue.length) {
                            drainQueue()
                        }
                    }
                    function drainQueue() {
                        if (draining) {
                            return
                        }
                        var timeout = runTimeout(cleanUpNextTick);
                        draining = true;
                        var len = queue.length;
                        while (len) {
                            currentQueue = queue;
                            queue = [];
                            while (++queueIndex < len) {
                                if (currentQueue) {
                                    currentQueue[queueIndex].run()
                                }
                            }
                            queueIndex = -1;
                            len = queue.length
                        }
                        currentQueue = null;
                        draining = false;
                        runClearTimeout(timeout)
                    }
                    process.nextTick = function(fun) {
                        var args = new Array(arguments.length - 1);
                        if (arguments.length > 1) {
                            for (var i = 1; i < arguments.length; i++) {
                                args[i - 1] = arguments[i]
                            }
                        }
                        queue.push(new Item(fun, args));
                        if (queue.length === 1 && !draining) {
                            runTimeout(drainQueue)
                        }
                    };
                    function Item(fun, array) {
                        this.fun = fun;
                        this.array = array
                    }
                    Item.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    };
                    process.title = "browser";
                    process.browser = true;
                    process.env = {};
                    process.argv = [];
                    process.version = "";
                    process.versions = {};
                    function noop() {}
                    process.on = noop;
                    process.addListener = noop;
                    process.once = noop;
                    process.off = noop;
                    process.removeListener = noop;
                    process.removeAllListeners = noop;
                    process.emit = noop;
                    process.prependListener = noop;
                    process.prependOnceListener = noop;
                    process.listeners = function(name) {
                        return []
                    };
                    process.binding = function(name) {
                        throw new Error("process.binding is not supported")
                    };
                    process.cwd = function() {
                        return "/"
                    };
                    process.chdir = function(dir) {
                        throw new Error("process.chdir is not supported")
                    };
                    process.umask = function() {
                        return 0
                    }
                },
                "./node_modules/prop-types/checkPropTypes.js": function(module, exports, __webpack_require__) {
                    "use strict"; (function(process) {
                        var printWarning = function() {};
                        if (process.env.NODE_ENV !== "production") {
                            var ReactPropTypesSecret = __webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");
                            var loggedTypeFailures = {};
                            var has = Function.call.bind(Object.prototype.hasOwnProperty);
                            printWarning = function(text) {
                                var message = "Warning: " + text;
                                if (typeof console !== "undefined") {
                                    console.error(message)
                                }
                                try {
                                    throw new Error(message)
                                } catch(x) {}
                            }
                        }
                        function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
                            if (process.env.NODE_ENV !== "production") {
                                for (var typeSpecName in typeSpecs) {
                                    if (has(typeSpecs, typeSpecName)) {
                                        var error;
                                        try {
                                            if (typeof typeSpecs[typeSpecName] !== "function") {
                                                var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
                                                err.name = "Invariant Violation";
                                                throw err
                                            }
                                            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret)
                                        } catch(ex) {
                                            error = ex
                                        }
                                        if (error && !(error instanceof Error)) {
                                            printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker " + "function must return `null` or an `Error` but returned a " + typeof error + ". " + "You may have forgotten to pass an argument to the type checker " + "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " + "shape all require an argument).")
                                        }
                                        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                                            loggedTypeFailures[error.message] = true;
                                            var stack = getStack ? getStack() : "";
                                            printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack: ""))
                                        }
                                    }
                                }
                            }
                        }
                        checkPropTypes.resetWarningCache = function() {
                            if (process.env.NODE_ENV !== "production") {
                                loggedTypeFailures = {}
                            }
                        };
                        module.exports = checkPropTypes
                    }).call(exports, __webpack_require__("./node_modules/process/browser.js"))
                },
                "./node_modules/prop-types/lib/ReactPropTypesSecret.js": function(module, exports, __webpack_require__) {
                    "use strict";
                    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
                    module.exports = ReactPropTypesSecret
                },
                "./node_modules/react/cjs/react.development.js": function(module, exports, __webpack_require__) {
                    "use strict"; (function(process) {
                        /** @license React v16.13.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
                        if (process.env.NODE_ENV !== "production") { (function() {
                                "use strict";
                                var _assign = __webpack_require__("./node_modules/object-assign/index.js");
                                var checkPropTypes = __webpack_require__("./node_modules/prop-types/checkPropTypes.js");
                                var ReactVersion = "16.13.1";
                                var hasSymbol = typeof Symbol === "function" && Symbol.
                                for;
                                var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.
                                for ("react.element") : 60103;
                                var REACT_PORTAL_TYPE = hasSymbol ? Symbol.
                                for ("react.portal") : 60106;
                                var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.
                                for ("react.fragment") : 60107;
                                var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.
                                for ("react.strict_mode") : 60108;
                                var REACT_PROFILER_TYPE = hasSymbol ? Symbol.
                                for ("react.profiler") : 60114;
                                var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.
                                for ("react.provider") : 60109;
                                var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.
                                for ("react.context") : 60110;
                                var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.
                                for ("react.concurrent_mode") : 60111;
                                var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.
                                for ("react.forward_ref") : 60112;
                                var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.
                                for ("react.suspense") : 60113;
                                var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.
                                for ("react.suspense_list") : 60120;
                                var REACT_MEMO_TYPE = hasSymbol ? Symbol.
                                for ("react.memo") : 60115;
                                var REACT_LAZY_TYPE = hasSymbol ? Symbol.
                                for ("react.lazy") : 60116;
                                var REACT_BLOCK_TYPE = hasSymbol ? Symbol.
                                for ("react.block") : 60121;
                                var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.
                                for ("react.fundamental") : 60117;
                                var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.
                                for ("react.responder") : 60118;
                                var REACT_SCOPE_TYPE = hasSymbol ? Symbol.
                                for ("react.scope") : 60119;
                                var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
                                var FAUX_ITERATOR_SYMBOL = "@@iterator";
                                function getIteratorFn(maybeIterable) {
                                    if (maybeIterable === null || typeof maybeIterable !== "object") {
                                        return null
                                    }
                                    var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
                                    if (typeof maybeIterator === "function") {
                                        return maybeIterator
                                    }
                                    return null
                                }
                                var ReactCurrentDispatcher = {
                                    current: null
                                };
                                var ReactCurrentBatchConfig = {
                                    suspense: null
                                };
                                var ReactCurrentOwner = {
                                    current: null
                                };
                                var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
                                function describeComponentFrame(name, source, ownerName) {
                                    var sourceInfo = "";
                                    if (source) {
                                        var path = source.fileName;
                                        var fileName = path.replace(BEFORE_SLASH_RE, ""); {
                                            if (/^index\./.test(fileName)) {
                                                var match = path.match(BEFORE_SLASH_RE);
                                                if (match) {
                                                    var pathBeforeSlash = match[1];
                                                    if (pathBeforeSlash) {
                                                        var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, "");
                                                        fileName = folderName + "/" + fileName
                                                    }
                                                }
                                            }
                                        }
                                        sourceInfo = " (at " + fileName + ":" + source.lineNumber + ")"
                                    } else if (ownerName) {
                                        sourceInfo = " (created by " + ownerName + ")"
                                    }
                                    return "\n    in " + (name || "Unknown") + sourceInfo
                                }
                                var Resolved = 1;
                                function refineResolvedLazyComponent(lazyComponent) {
                                    return lazyComponent._status === Resolved ? lazyComponent._result: null
                                }
                                function getWrappedName(outerType, innerType, wrapperName) {
                                    var functionName = innerType.displayName || innerType.name || "";
                                    return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")": wrapperName)
                                }
                                function getComponentName(type) {
                                    if (type == null) {
                                        return null
                                    } {
                                        if (typeof type.tag === "number") {
                                            error("Received an unexpected object in getComponentName(). " + "This is likely a bug in React. Please file an issue.")
                                        }
                                    }
                                    if (typeof type === "function") {
                                        return type.displayName || type.name || null
                                    }
                                    if (typeof type === "string") {
                                        return type
                                    }
                                    switch (type) {
                                    case REACT_FRAGMENT_TYPE:
                                        return "Fragment";
                                    case REACT_PORTAL_TYPE:
                                        return "Portal";
                                    case REACT_PROFILER_TYPE:
                                        return "Profiler";
                                    case REACT_STRICT_MODE_TYPE:
                                        return "StrictMode";
                                    case REACT_SUSPENSE_TYPE:
                                        return "Suspense";
                                    case REACT_SUSPENSE_LIST_TYPE:
                                        return "SuspenseList"
                                    }
                                    if (typeof type === "object") {
                                        switch (type.$$typeof) {
                                        case REACT_CONTEXT_TYPE:
                                            return "Context.Consumer";
                                        case REACT_PROVIDER_TYPE:
                                            return "Context.Provider";
                                        case REACT_FORWARD_REF_TYPE:
                                            return getWrappedName(type, type.render, "ForwardRef");
                                        case REACT_MEMO_TYPE:
                                            return getComponentName(type.type);
                                        case REACT_BLOCK_TYPE:
                                            return getComponentName(type.render);
                                        case REACT_LAZY_TYPE:
                                            {
                                                var thenable = type;
                                                var resolvedThenable = refineResolvedLazyComponent(thenable);
                                                if (resolvedThenable) {
                                                    return getComponentName(resolvedThenable)
                                                }
                                                break
                                            }
                                        }
                                    }
                                    return null
                                }
                                var ReactDebugCurrentFrame = {};
                                var currentlyValidatingElement = null;
                                function setCurrentlyValidatingElement(element) {
                                    {
                                        currentlyValidatingElement = element
                                    }
                                } {
                                    ReactDebugCurrentFrame.getCurrentStack = null;
                                    ReactDebugCurrentFrame.getStackAddendum = function() {
                                        var stack = "";
                                        if (currentlyValidatingElement) {
                                            var name = getComponentName(currentlyValidatingElement.type);
                                            var owner = currentlyValidatingElement._owner;
                                            stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type))
                                        }
                                        var impl = ReactDebugCurrentFrame.getCurrentStack;
                                        if (impl) {
                                            stack += impl() || ""
                                        }
                                        return stack
                                    }
                                }
                                var IsSomeRendererActing = {
                                    current: false
                                };
                                var ReactSharedInternals = {
                                    ReactCurrentDispatcher: ReactCurrentDispatcher,
                                    ReactCurrentBatchConfig: ReactCurrentBatchConfig,
                                    ReactCurrentOwner: ReactCurrentOwner,
                                    IsSomeRendererActing: IsSomeRendererActing,
                                    assign: _assign
                                }; {
                                    _assign(ReactSharedInternals, {
                                        ReactDebugCurrentFrame: ReactDebugCurrentFrame,
                                        ReactComponentTreeHook: {}
                                    })
                                }
                                function warn(format) {
                                    {
                                        for (var _len = arguments.length,
                                        args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                                            args[_key - 1] = arguments[_key]
                                        }
                                        printWarning("warn", format, args)
                                    }
                                }
                                function error(format) {
                                    {
                                        for (var _len2 = arguments.length,
                                        args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                                            args[_key2 - 1] = arguments[_key2]
                                        }
                                        printWarning("error", format, args)
                                    }
                                }
                                function printWarning(level, format, args) {
                                    {
                                        var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === "string" && args[args.length - 1].indexOf("\n    in") === 0;
                                        if (!hasExistingStack) {
                                            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                                            var stack = ReactDebugCurrentFrame.getStackAddendum();
                                            if (stack !== "") {
                                                format += "%s";
                                                args = args.concat([stack])
                                            }
                                        }
                                        var argsWithFormat = args.map((function(item) {
                                            return "" + item
                                        }));
                                        argsWithFormat.unshift("Warning: " + format);
                                        Function.prototype.apply.call(console[level], console, argsWithFormat);
                                        try {
                                            var argIndex = 0;
                                            var message = "Warning: " + format.replace(/%s/g, (function() {
                                                return args[argIndex++]
                                            }));
                                            throw new Error(message)
                                        } catch(x) {}
                                    }
                                }
                                var didWarnStateUpdateForUnmountedComponent = {};
                                function warnNoop(publicInstance, callerName) {
                                    {
                                        var _constructor = publicInstance.constructor;
                                        var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
                                        var warningKey = componentName + "." + callerName;
                                        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                                            return
                                        }
                                        error("Can't call %s on a component that is not yet mounted. " + "This is a no-op, but it might indicate a bug in your application. " + "Instead, assign to `this.state` directly or define a `state = {};` " + "class property with the desired state in the %s component.", callerName, componentName);
                                        didWarnStateUpdateForUnmountedComponent[warningKey] = true
                                    }
                                }
                                var ReactNoopUpdateQueue = {
                                    isMounted: function(publicInstance) {
                                        return false
                                    },
                                    enqueueForceUpdate: function(publicInstance, callback, callerName) {
                                        warnNoop(publicInstance, "forceUpdate")
                                    },
                                    enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
                                        warnNoop(publicInstance, "replaceState")
                                    },
                                    enqueueSetState: function(publicInstance, partialState, callback, callerName) {
                                        warnNoop(publicInstance, "setState")
                                    }
                                };
                                var emptyObject = {}; {
                                    Object.freeze(emptyObject)
                                }
                                function Component(props, context, updater) {
                                    this.props = props;
                                    this.context = context;
                                    this.refs = emptyObject;
                                    this.updater = updater || ReactNoopUpdateQueue
                                }
                                Component.prototype.isReactComponent = {};
                                Component.prototype.setState = function(partialState, callback) {
                                    if (! (typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
                                        {
                                            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.")
                                        }
                                    }
                                    this.updater.enqueueSetState(this, partialState, callback, "setState")
                                };
                                Component.prototype.forceUpdate = function(callback) {
                                    this.updater.enqueueForceUpdate(this, callback, "forceUpdate")
                                }; {
                                    var deprecatedAPIs = {
                                        isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in " + "componentWillUnmount to prevent memory leaks."],
                                        replaceState: ["replaceState", "Refactor your code to use setState instead (see " + "https://github.com/facebook/react/issues/3236)."]
                                    };
                                    var defineDeprecationWarning = function(methodName, info) {
                                        Object.defineProperty(Component.prototype, methodName, {
                                            get: function() {
                                                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                                                return undefined
                                            }
                                        })
                                    };
                                    for (var fnName in deprecatedAPIs) {
                                        if (deprecatedAPIs.hasOwnProperty(fnName)) {
                                            defineDeprecationWarning(fnName, deprecatedAPIs[fnName])
                                        }
                                    }
                                }
                                function ComponentDummy() {}
                                ComponentDummy.prototype = Component.prototype;
                                function PureComponent(props, context, updater) {
                                    this.props = props;
                                    this.context = context;
                                    this.refs = emptyObject;
                                    this.updater = updater || ReactNoopUpdateQueue
                                }
                                var pureComponentPrototype = PureComponent.prototype = new ComponentDummy;
                                pureComponentPrototype.constructor = PureComponent;
                                _assign(pureComponentPrototype, Component.prototype);
                                pureComponentPrototype.isPureReactComponent = true;
                                function createRef() {
                                    var refObject = {
                                        current: null
                                    }; {
                                        Object.seal(refObject)
                                    }
                                    return refObject
                                }
                                var hasOwnProperty = Object.prototype.hasOwnProperty;
                                var RESERVED_PROPS = {
                                    key: true,
                                    ref: true,
                                    __self: true,
                                    __source: true
                                };
                                var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs; {
                                    didWarnAboutStringRefs = {}
                                }
                                function hasValidRef(config) {
                                    {
                                        if (hasOwnProperty.call(config, "ref")) {
                                            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                                            if (getter && getter.isReactWarning) {
                                                return false
                                            }
                                        }
                                    }
                                    return config.ref !== undefined
                                }
                                function hasValidKey(config) {
                                    {
                                        if (hasOwnProperty.call(config, "key")) {
                                            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                                            if (getter && getter.isReactWarning) {
                                                return false
                                            }
                                        }
                                    }
                                    return config.key !== undefined
                                }
                                function defineKeyPropWarningGetter(props, displayName) {
                                    var warnAboutAccessingKey = function() {
                                        {
                                            if (!specialPropKeyWarningShown) {
                                                specialPropKeyWarningShown = true;
                                                error("%s: `key` is not a prop. Trying to access it will result " + "in `undefined` being returned. If you need to access the same " + "value within the child component, you should pass it as a different " + "prop. (https://fb.me/react-special-props)", displayName)
                                            }
                                        }
                                    };
                                    warnAboutAccessingKey.isReactWarning = true;
                                    Object.defineProperty(props, "key", {
                                        get: warnAboutAccessingKey,
                                        configurable: true
                                    })
                                }
                                function defineRefPropWarningGetter(props, displayName) {
                                    var warnAboutAccessingRef = function() {
                                        {
                                            if (!specialPropRefWarningShown) {
                                                specialPropRefWarningShown = true;
                                                error("%s: `ref` is not a prop. Trying to access it will result " + "in `undefined` being returned. If you need to access the same " + "value within the child component, you should pass it as a different " + "prop. (https://fb.me/react-special-props)", displayName)
                                            }
                                        }
                                    };
                                    warnAboutAccessingRef.isReactWarning = true;
                                    Object.defineProperty(props, "ref", {
                                        get: warnAboutAccessingRef,
                                        configurable: true
                                    })
                                }
                                function warnIfStringRefCannotBeAutoConverted(config) {
                                    {
                                        if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                                            var componentName = getComponentName(ReactCurrentOwner.current.type);
                                            if (!didWarnAboutStringRefs[componentName]) {
                                                error('Component "%s" contains the string ref "%s". ' + "Support for string refs will be removed in a future major release. " + "This case cannot be automatically converted to an arrow function. " + "We ask you to manually fix this case by using useRef() or createRef() instead. " + "Learn more about using refs safely here: " + "https://fb.me/react-strict-mode-string-ref", getComponentName(ReactCurrentOwner.current.type), config.ref);
                                                didWarnAboutStringRefs[componentName] = true
                                            }
                                        }
                                    }
                                }
                                var ReactElement = function(type, key, ref, self, source, owner, props) {
                                    var element = {
                                        $$typeof: REACT_ELEMENT_TYPE,
                                        type: type,
                                        key: key,
                                        ref: ref,
                                        props: props,
                                        _owner: owner
                                    }; {
                                        element._store = {};
                                        Object.defineProperty(element._store, "validated", {
                                            configurable: false,
                                            enumerable: false,
                                            writable: true,
                                            value: false
                                        });
                                        Object.defineProperty(element, "_self", {
                                            configurable: false,
                                            enumerable: false,
                                            writable: false,
                                            value: self
                                        });
                                        Object.defineProperty(element, "_source", {
                                            configurable: false,
                                            enumerable: false,
                                            writable: false,
                                            value: source
                                        });
                                        if (Object.freeze) {
                                            Object.freeze(element.props);
                                            Object.freeze(element)
                                        }
                                    }
                                    return element
                                };
                                function createElement(type, config, children) {
                                    var propName;
                                    var props = {};
                                    var key = null;
                                    var ref = null;
                                    var self = null;
                                    var source = null;
                                    if (config != null) {
                                        if (hasValidRef(config)) {
                                            ref = config.ref; {
                                                warnIfStringRefCannotBeAutoConverted(config)
                                            }
                                        }
                                        if (hasValidKey(config)) {
                                            key = "" + config.key
                                        }
                                        self = config.__self === undefined ? null: config.__self;
                                        source = config.__source === undefined ? null: config.__source;
                                        for (propName in config) {
                                            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                                props[propName] = config[propName]
                                            }
                                        }
                                    }
                                    var childrenLength = arguments.length - 2;
                                    if (childrenLength === 1) {
                                        props.children = children
                                    } else if (childrenLength > 1) {
                                        var childArray = Array(childrenLength);
                                        for (var i = 0; i < childrenLength; i++) {
                                            childArray[i] = arguments[i + 2]
                                        } {
                                            if (Object.freeze) {
                                                Object.freeze(childArray)
                                            }
                                        }
                                        props.children = childArray
                                    }
                                    if (type && type.defaultProps) {
                                        var defaultProps = type.defaultProps;
                                        for (propName in defaultProps) {
                                            if (props[propName] === undefined) {
                                                props[propName] = defaultProps[propName]
                                            }
                                        }
                                    } {
                                        if (key || ref) {
                                            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown": type;
                                            if (key) {
                                                defineKeyPropWarningGetter(props, displayName)
                                            }
                                            if (ref) {
                                                defineRefPropWarningGetter(props, displayName)
                                            }
                                        }
                                    }
                                    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props)
                                }
                                function cloneAndReplaceKey(oldElement, newKey) {
                                    var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
                                    return newElement
                                }
                                function cloneElement(element, config, children) {
                                    if ( !! (element === null || element === undefined)) {
                                        {
                                            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".")
                                        }
                                    }
                                    var propName;
                                    var props = _assign({},
                                    element.props);
                                    var key = element.key;
                                    var ref = element.ref;
                                    var self = element._self;
                                    var source = element._source;
                                    var owner = element._owner;
                                    if (config != null) {
                                        if (hasValidRef(config)) {
                                            ref = config.ref;
                                            owner = ReactCurrentOwner.current
                                        }
                                        if (hasValidKey(config)) {
                                            key = "" + config.key
                                        }
                                        var defaultProps;
                                        if (element.type && element.type.defaultProps) {
                                            defaultProps = element.type.defaultProps
                                        }
                                        for (propName in config) {
                                            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                                if (config[propName] === undefined && defaultProps !== undefined) {
                                                    props[propName] = defaultProps[propName]
                                                } else {
                                                    props[propName] = config[propName]
                                                }
                                            }
                                        }
                                    }
                                    var childrenLength = arguments.length - 2;
                                    if (childrenLength === 1) {
                                        props.children = children
                                    } else if (childrenLength > 1) {
                                        var childArray = Array(childrenLength);
                                        for (var i = 0; i < childrenLength; i++) {
                                            childArray[i] = arguments[i + 2]
                                        }
                                        props.children = childArray
                                    }
                                    return ReactElement(element.type, key, ref, self, source, owner, props)
                                }
                                function isValidElement(object) {
                                    return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE
                                }
                                var SEPARATOR = ".";
                                var SUBSEPARATOR = ":";
                                function escape(key) {
                                    var escapeRegex = /[=:]/g;
                                    var escaperLookup = {
                                        "=": "=0",
                                        ":": "=2"
                                    };
                                    var escapedString = ("" + key).replace(escapeRegex, (function(match) {
                                        return escaperLookup[match]
                                    }));
                                    return "$" + escapedString
                                }
                                var didWarnAboutMaps = false;
                                var userProvidedKeyEscapeRegex = /\/+/g;
                                function escapeUserProvidedKey(text) {
                                    return ("" + text).replace(userProvidedKeyEscapeRegex, "$&/")
                                }
                                var POOL_SIZE = 10;
                                var traverseContextPool = [];
                                function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
                                    if (traverseContextPool.length) {
                                        var traverseContext = traverseContextPool.pop();
                                        traverseContext.result = mapResult;
                                        traverseContext.keyPrefix = keyPrefix;
                                        traverseContext.func = mapFunction;
                                        traverseContext.context = mapContext;
                                        traverseContext.count = 0;
                                        return traverseContext
                                    } else {
                                        return {
                                            result: mapResult,
                                            keyPrefix: keyPrefix,
                                            func: mapFunction,
                                            context: mapContext,
                                            count: 0
                                        }
                                    }
                                }
                                function releaseTraverseContext(traverseContext) {
                                    traverseContext.result = null;
                                    traverseContext.keyPrefix = null;
                                    traverseContext.func = null;
                                    traverseContext.context = null;
                                    traverseContext.count = 0;
                                    if (traverseContextPool.length < POOL_SIZE) {
                                        traverseContextPool.push(traverseContext)
                                    }
                                }
                                function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
                                    var type = typeof children;
                                    if (type === "undefined" || type === "boolean") {
                                        children = null
                                    }
                                    var invokeCallback = false;
                                    if (children === null) {
                                        invokeCallback = true
                                    } else {
                                        switch (type) {
                                        case "string":
                                        case "number":
                                            invokeCallback = true;
                                            break;
                                        case "object":
                                            switch (children.$$typeof) {
                                            case REACT_ELEMENT_TYPE:
                                            case REACT_PORTAL_TYPE:
                                                invokeCallback = true
                                            }
                                        }
                                    }
                                    if (invokeCallback) {
                                        callback(traverseContext, children, nameSoFar === "" ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
                                        return 1
                                    }
                                    var child;
                                    var nextName;
                                    var subtreeCount = 0;
                                    var nextNamePrefix = nameSoFar === "" ? SEPARATOR: nameSoFar + SUBSEPARATOR;
                                    if (Array.isArray(children)) {
                                        for (var i = 0; i < children.length; i++) {
                                            child = children[i];
                                            nextName = nextNamePrefix + getComponentKey(child, i);
                                            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext)
                                        }
                                    } else {
                                        var iteratorFn = getIteratorFn(children);
                                        if (typeof iteratorFn === "function") {
                                            {
                                                if (iteratorFn === children.entries) {
                                                    if (!didWarnAboutMaps) {
                                                        warn("Using Maps as children is deprecated and will be removed in " + "a future major release. Consider converting children to " + "an array of keyed ReactElements instead.")
                                                    }
                                                    didWarnAboutMaps = true
                                                }
                                            }
                                            var iterator = iteratorFn.call(children);
                                            var step;
                                            var ii = 0;
                                            while (! (step = iterator.next()).done) {
                                                child = step.value;
                                                nextName = nextNamePrefix + getComponentKey(child, ii++);
                                                subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext)
                                            }
                                        } else if (type === "object") {
                                            var addendum = ""; {
                                                addendum = " If you meant to render a collection of children, use an array " + "instead." + ReactDebugCurrentFrame.getStackAddendum()
                                            }
                                            var childrenString = "" + children; {
                                                {
                                                    throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}": childrenString) + ")." + addendum)
                                                }
                                            }
                                        }
                                    }
                                    return subtreeCount
                                }
                                function traverseAllChildren(children, callback, traverseContext) {
                                    if (children == null) {
                                        return 0
                                    }
                                    return traverseAllChildrenImpl(children, "", callback, traverseContext)
                                }
                                function getComponentKey(component, index) {
                                    if (typeof component === "object" && component !== null && component.key != null) {
                                        return escape(component.key)
                                    }
                                    return index.toString(36)
                                }
                                function forEachSingleChild(bookKeeping, child, name) {
                                    var func = bookKeeping.func,
                                    context = bookKeeping.context;
                                    func.call(context, child, bookKeeping.count++)
                                }
                                function forEachChildren(children, forEachFunc, forEachContext) {
                                    if (children == null) {
                                        return children
                                    }
                                    var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
                                    traverseAllChildren(children, forEachSingleChild, traverseContext);
                                    releaseTraverseContext(traverseContext)
                                }
                                function mapSingleChildIntoContext(bookKeeping, child, childKey) {
                                    var result = bookKeeping.result,
                                    keyPrefix = bookKeeping.keyPrefix,
                                    func = bookKeeping.func,
                                    context = bookKeeping.context;
                                    var mappedChild = func.call(context, child, bookKeeping.count++);
                                    if (Array.isArray(mappedChild)) {
                                        mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, (function(c) {
                                            return c
                                        }))
                                    } else if (mappedChild != null) {
                                        if (isValidElement(mappedChild)) {
                                            mappedChild = cloneAndReplaceKey(mappedChild, keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + "/": "") + childKey)
                                        }
                                        result.push(mappedChild)
                                    }
                                }
                                function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
                                    var escapedPrefix = "";
                                    if (prefix != null) {
                                        escapedPrefix = escapeUserProvidedKey(prefix) + "/"
                                    }
                                    var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
                                    traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
                                    releaseTraverseContext(traverseContext)
                                }
                                function mapChildren(children, func, context) {
                                    if (children == null) {
                                        return children
                                    }
                                    var result = [];
                                    mapIntoWithKeyPrefixInternal(children, result, null, func, context);
                                    return result
                                }
                                function countChildren(children) {
                                    return traverseAllChildren(children, (function() {
                                        return null
                                    }), null)
                                }
                                function toArray(children) {
                                    var result = [];
                                    mapIntoWithKeyPrefixInternal(children, result, null, (function(child) {
                                        return child
                                    }));
                                    return result
                                }
                                function onlyChild(children) {
                                    if (!isValidElement(children)) {
                                        {
                                            throw Error("React.Children.only expected to receive a single React element child.")
                                        }
                                    }
                                    return children
                                }
                                function createContext(defaultValue, calculateChangedBits) {
                                    if (calculateChangedBits === undefined) {
                                        calculateChangedBits = null
                                    } else {
                                        {
                                            if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") {
                                                error("createContext: Expected the optional second argument to be a " + "function. Instead received: %s", calculateChangedBits)
                                            }
                                        }
                                    }
                                    var context = {
                                        $$typeof: REACT_CONTEXT_TYPE,
                                        _calculateChangedBits: calculateChangedBits,
                                        _currentValue: defaultValue,
                                        _currentValue2: defaultValue,
                                        _threadCount: 0,
                                        Provider: null,
                                        Consumer: null
                                    };
                                    context.Provider = {
                                        $$typeof: REACT_PROVIDER_TYPE,
                                        _context: context
                                    };
                                    var hasWarnedAboutUsingNestedContextConsumers = false;
                                    var hasWarnedAboutUsingConsumerProvider = false; {
                                        var Consumer = {
                                            $$typeof: REACT_CONTEXT_TYPE,
                                            _context: context,
                                            _calculateChangedBits: context._calculateChangedBits
                                        };
                                        Object.defineProperties(Consumer, {
                                            Provider: {
                                                get: function() {
                                                    if (!hasWarnedAboutUsingConsumerProvider) {
                                                        hasWarnedAboutUsingConsumerProvider = true;
                                                        error("Rendering <Context.Consumer.Provider> is not supported and will be removed in " + "a future major release. Did you mean to render <Context.Provider> instead?")
                                                    }
                                                    return context.Provider
                                                },
                                                set: function(_Provider) {
                                                    context.Provider = _Provider
                                                }
                                            },
                                            _currentValue: {
                                                get: function() {
                                                    return context._currentValue
                                                },
                                                set: function(_currentValue) {
                                                    context._currentValue = _currentValue
                                                }
                                            },
                                            _currentValue2: {
                                                get: function() {
                                                    return context._currentValue2
                                                },
                                                set: function(_currentValue2) {
                                                    context._currentValue2 = _currentValue2
                                                }
                                            },
                                            _threadCount: {
                                                get: function() {
                                                    return context._threadCount
                                                },
                                                set: function(_threadCount) {
                                                    context._threadCount = _threadCount
                                                }
                                            },
                                            Consumer: {
                                                get: function() {
                                                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                                                        hasWarnedAboutUsingNestedContextConsumers = true;
                                                        error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in " + "a future major release. Did you mean to render <Context.Consumer> instead?")
                                                    }
                                                    return context.Consumer
                                                }
                                            }
                                        });
                                        context.Consumer = Consumer
                                    } {
                                        context._currentRenderer = null;
                                        context._currentRenderer2 = null
                                    }
                                    return context
                                }
                                function lazy(ctor) {
                                    var lazyType = {
                                        $$typeof: REACT_LAZY_TYPE,
                                        _ctor: ctor,
                                        _status: -1,
                                        _result: null
                                    }; {
                                        var defaultProps;
                                        var propTypes;
                                        Object.defineProperties(lazyType, {
                                            defaultProps: {
                                                configurable: true,
                                                get: function() {
                                                    return defaultProps
                                                },
                                                set: function(newDefaultProps) {
                                                    error("React.lazy(...): It is not supported to assign `defaultProps` to " + "a lazy component import. Either specify them where the component " + "is defined, or create a wrapping component around it.");
                                                    defaultProps = newDefaultProps;
                                                    Object.defineProperty(lazyType, "defaultProps", {
                                                        enumerable: true
                                                    })
                                                }
                                            },
                                            propTypes: {
                                                configurable: true,
                                                get: function() {
                                                    return propTypes
                                                },
                                                set: function(newPropTypes) {
                                                    error("React.lazy(...): It is not supported to assign `propTypes` to " + "a lazy component import. Either specify them where the component " + "is defined, or create a wrapping component around it.");
                                                    propTypes = newPropTypes;
                                                    Object.defineProperty(lazyType, "propTypes", {
                                                        enumerable: true
                                                    })
                                                }
                                            }
                                        })
                                    }
                                    return lazyType
                                }
                                function forwardRef(render) {
                                    {
                                        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                                            error("forwardRef requires a render function but received a `memo` " + "component. Instead of forwardRef(memo(...)), use " + "memo(forwardRef(...)).")
                                        } else if (typeof render !== "function") {
                                            error("forwardRef requires a render function but was given %s.", render === null ? "null": typeof render)
                                        } else {
                                            if (render.length !== 0 && render.length !== 2) {
                                                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?": "Any additional parameter will be undefined.")
                                            }
                                        }
                                        if (render != null) {
                                            if (render.defaultProps != null || render.propTypes != null) {
                                                error("forwardRef render functions do not support propTypes or defaultProps. " + "Did you accidentally pass a React component?")
                                            }
                                        }
                                    }
                                    return {
                                        $$typeof: REACT_FORWARD_REF_TYPE,
                                        render: render
                                    }
                                }
                                function isValidElementType(type) {
                                    return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE)
                                }
                                function memo(type, compare) {
                                    {
                                        if (!isValidElementType(type)) {
                                            error("memo: The first argument must be a component. Instead " + "received: %s", type === null ? "null": typeof type)
                                        }
                                    }
                                    return {
                                        $$typeof: REACT_MEMO_TYPE,
                                        type: type,
                                        compare: compare === undefined ? null: compare
                                    }
                                }
                                function resolveDispatcher() {
                                    var dispatcher = ReactCurrentDispatcher.current;
                                    if (! (dispatcher !== null)) {
                                        {
                                            throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.")
                                        }
                                    }
                                    return dispatcher
                                }
                                function useContext(Context, unstable_observedBits) {
                                    var dispatcher = resolveDispatcher(); {
                                        if (unstable_observedBits !== undefined) {
                                            error("useContext() second argument is reserved for future " + "use in React. Passing it is not supported. " + "You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? " + "Calling Hooks inside a loop is not supported. " + "Learn more at https://fb.me/rules-of-hooks": "")
                                        }
                                        if (Context._context !== undefined) {
                                            var realContext = Context._context;
                                            if (realContext.Consumer === Context) {
                                                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be " + "removed in a future major release. Did you mean to call useContext(Context) instead?")
                                            } else if (realContext.Provider === Context) {
                                                error("Calling useContext(Context.Provider) is not supported. " + "Did you mean to call useContext(Context) instead?")
                                            }
                                        }
                                    }
                                    return dispatcher.useContext(Context, unstable_observedBits)
                                }
                                function useState(initialState) {
                                    var dispatcher = resolveDispatcher();
                                    return dispatcher.useState(initialState)
                                }
                                function useReducer(reducer, initialArg, init) {
                                    var dispatcher = resolveDispatcher();
                                    return dispatcher.useReducer(reducer, initialArg, init)
                                }
                                function useRef(initialValue) {
                                    var dispatcher = resolveDispatcher();
                                    return dispatcher.useRef(initialValue)
                                }
                                function useEffect(create, deps) {
                                    var dispatcher = resolveDispatcher();
                                    return dispatcher.useEffect(create, deps)
                                }
                                function useLayoutEffect(create, deps) {
                                    var dispatcher = resolveDispatcher();
                                    return dispatcher.useLayoutEffect(create, deps)
                                }
                                function useCallback(callback, deps) {
                                    var dispatcher = resolveDispatcher();
                                    return dispatcher.useCallback(callback, deps)
                                }
                                function useMemo(create, deps) {
                                    var dispatcher = resolveDispatcher();
                                    return dispatcher.useMemo(create, deps)
                                }
                                function useImperativeHandle(ref, create, deps) {
                                    var dispatcher = resolveDispatcher();
                                    return dispatcher.useImperativeHandle(ref, create, deps)
                                }
                                function useDebugValue(value, formatterFn) {
                                    {
                                        var dispatcher = resolveDispatcher();
                                        return dispatcher.useDebugValue(value, formatterFn)
                                    }
                                }
                                var propTypesMisspellWarningShown; {
                                    propTypesMisspellWarningShown = false
                                }
                                function getDeclarationErrorAddendum() {
                                    if (ReactCurrentOwner.current) {
                                        var name = getComponentName(ReactCurrentOwner.current.type);
                                        if (name) {
                                            return "\n\nCheck the render method of `" + name + "`."
                                        }
                                    }
                                    return ""
                                }
                                function getSourceInfoErrorAddendum(source) {
                                    if (source !== undefined) {
                                        var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                                        var lineNumber = source.lineNumber;
                                        return "\n\nCheck your code at " + fileName + ":" + lineNumber + "."
                                    }
                                    return ""
                                }
                                function getSourceInfoErrorAddendumForProps(elementProps) {
                                    if (elementProps !== null && elementProps !== undefined) {
                                        return getSourceInfoErrorAddendum(elementProps.__source)
                                    }
                                    return ""
                                }
                                var ownerHasKeyUseWarning = {};
                                function getCurrentComponentErrorInfo(parentType) {
                                    var info = getDeclarationErrorAddendum();
                                    if (!info) {
                                        var parentName = typeof parentType === "string" ? parentType: parentType.displayName || parentType.name;
                                        if (parentName) {
                                            info = "\n\nCheck the top-level render call using <" + parentName + ">."
                                        }
                                    }
                                    return info
                                }
                                function validateExplicitKey(element, parentType) {
                                    if (!element._store || element._store.validated || element.key != null) {
                                        return
                                    }
                                    element._store.validated = true;
                                    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
                                    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                                        return
                                    }
                                    ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
                                    var childOwner = "";
                                    if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
                                        childOwner = " It was passed a child from " + getComponentName(element._owner.type) + "."
                                    }
                                    setCurrentlyValidatingElement(element); {
                                        error('Each child in a list should have a unique "key" prop.' + "%s%s See https://fb.me/react-warning-keys for more information.", currentComponentErrorInfo, childOwner)
                                    }
                                    setCurrentlyValidatingElement(null)
                                }
                                function validateChildKeys(node, parentType) {
                                    if (typeof node !== "object") {
                                        return
                                    }
                                    if (Array.isArray(node)) {
                                        for (var i = 0; i < node.length; i++) {
                                            var child = node[i];
                                            if (isValidElement(child)) {
                                                validateExplicitKey(child, parentType)
                                            }
                                        }
                                    } else if (isValidElement(node)) {
                                        if (node._store) {
                                            node._store.validated = true
                                        }
                                    } else if (node) {
                                        var iteratorFn = getIteratorFn(node);
                                        if (typeof iteratorFn === "function") {
                                            if (iteratorFn !== node.entries) {
                                                var iterator = iteratorFn.call(node);
                                                var step;
                                                while (! (step = iterator.next()).done) {
                                                    if (isValidElement(step.value)) {
                                                        validateExplicitKey(step.value, parentType)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                function validatePropTypes(element) {
                                    {
                                        var type = element.type;
                                        if (type === null || type === undefined || typeof type === "string") {
                                            return
                                        }
                                        var name = getComponentName(type);
                                        var propTypes;
                                        if (typeof type === "function") {
                                            propTypes = type.propTypes
                                        } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
                                            propTypes = type.propTypes
                                        } else {
                                            return
                                        }
                                        if (propTypes) {
                                            setCurrentlyValidatingElement(element);
                                            checkPropTypes(propTypes, element.props, "prop", name, ReactDebugCurrentFrame.getStackAddendum);
                                            setCurrentlyValidatingElement(null)
                                        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
                                            propTypesMisspellWarningShown = true;
                                            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", name || "Unknown")
                                        }
                                        if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                                            error("getDefaultProps is only used on classic React.createClass " + "definitions. Use a static property named `defaultProps` instead.")
                                        }
                                    }
                                }
                                function validateFragmentProps(fragment) {
                                    {
                                        setCurrentlyValidatingElement(fragment);
                                        var keys = Object.keys(fragment.props);
                                        for (var i = 0; i < keys.length; i++) {
                                            var key = keys[i];
                                            if (key !== "children" && key !== "key") {
                                                error("Invalid prop `%s` supplied to `React.Fragment`. " + "React.Fragment can only have `key` and `children` props.", key);
                                                break
                                            }
                                        }
                                        if (fragment.ref !== null) {
                                            error("Invalid attribute `ref` supplied to `React.Fragment`.")
                                        }
                                        setCurrentlyValidatingElement(null)
                                    }
                                }
                                function createElementWithValidation(type, props, children) {
                                    var validType = isValidElementType(type);
                                    if (!validType) {
                                        var info = "";
                                        if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                                            info += " You likely forgot to export your component from the file " + "it's defined in, or you might have mixed up default and named imports."
                                        }
                                        var sourceInfo = getSourceInfoErrorAddendumForProps(props);
                                        if (sourceInfo) {
                                            info += sourceInfo
                                        } else {
                                            info += getDeclarationErrorAddendum()
                                        }
                                        var typeString;
                                        if (type === null) {
                                            typeString = "null"
                                        } else if (Array.isArray(type)) {
                                            typeString = "array"
                                        } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                                            typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
                                            info = " Did you accidentally export a JSX literal instead of a component?"
                                        } else {
                                            typeString = typeof type
                                        } {
                                            error("React.createElement: type is invalid -- expected a string (for " + "built-in components) or a class/function (for composite " + "components) but got: %s.%s", typeString, info)
                                        }
                                    }
                                    var element = createElement.apply(this, arguments);
                                    if (element == null) {
                                        return element
                                    }
                                    if (validType) {
                                        for (var i = 2; i < arguments.length; i++) {
                                            validateChildKeys(arguments[i], type)
                                        }
                                    }
                                    if (type === REACT_FRAGMENT_TYPE) {
                                        validateFragmentProps(element)
                                    } else {
                                        validatePropTypes(element)
                                    }
                                    return element
                                }
                                var didWarnAboutDeprecatedCreateFactory = false;
                                function createFactoryWithValidation(type) {
                                    var validatedFactory = createElementWithValidation.bind(null, type);
                                    validatedFactory.type = type; {
                                        if (!didWarnAboutDeprecatedCreateFactory) {
                                            didWarnAboutDeprecatedCreateFactory = true;
                                            warn("React.createFactory() is deprecated and will be removed in " + "a future major release. Consider using JSX " + "or use React.createElement() directly instead.")
                                        }
                                        Object.defineProperty(validatedFactory, "type", {
                                            enumerable: false,
                                            get: function() {
                                                warn("Factory.type is deprecated. Access the class directly " + "before passing it to createFactory.");
                                                Object.defineProperty(this, "type", {
                                                    value: type
                                                });
                                                return type
                                            }
                                        })
                                    }
                                    return validatedFactory
                                }
                                function cloneElementWithValidation(element, props, children) {
                                    var newElement = cloneElement.apply(this, arguments);
                                    for (var i = 2; i < arguments.length; i++) {
                                        validateChildKeys(arguments[i], newElement.type)
                                    }
                                    validatePropTypes(newElement);
                                    return newElement
                                } {
                                    try {
                                        var frozenObject = Object.freeze({});
                                        var testMap = new Map([[frozenObject, null]]);
                                        var testSet = new Set([frozenObject]);
                                        testMap.set(0, 0);
                                        testSet.add(0)
                                    } catch(e) {}
                                }
                                var createElement$1 = createElementWithValidation;
                                var cloneElement$1 = cloneElementWithValidation;
                                var createFactory = createFactoryWithValidation;
                                var Children = {
                                    map: mapChildren,
                                    forEach: forEachChildren,
                                    count: countChildren,
                                    toArray: toArray,
                                    only: onlyChild
                                };
                                exports.Children = Children;
                                exports.Component = Component;
                                exports.Fragment = REACT_FRAGMENT_TYPE;
                                exports.Profiler = REACT_PROFILER_TYPE;
                                exports.PureComponent = PureComponent;
                                exports.StrictMode = REACT_STRICT_MODE_TYPE;
                                exports.Suspense = REACT_SUSPENSE_TYPE;
                                exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
                                exports.cloneElement = cloneElement$1;
                                exports.createContext = createContext;
                                exports.createElement = createElement$1;
                                exports.createFactory = createFactory;
                                exports.createRef = createRef;
                                exports.forwardRef = forwardRef;
                                exports.isValidElement = isValidElement;
                                exports.lazy = lazy;
                                exports.memo = memo;
                                exports.useCallback = useCallback;
                                exports.useContext = useContext;
                                exports.useDebugValue = useDebugValue;
                                exports.useEffect = useEffect;
                                exports.useImperativeHandle = useImperativeHandle;
                                exports.useLayoutEffect = useLayoutEffect;
                                exports.useMemo = useMemo;
                                exports.useReducer = useReducer;
                                exports.useRef = useRef;
                                exports.useState = useState;
                                exports.version = ReactVersion
                            })()
                        }
                    }).call(exports, __webpack_require__("./node_modules/process/browser.js"))
                },
                "./node_modules/react/cjs/react.production.min.js": function(module, exports, __webpack_require__) {
                    "use strict";
                    /** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
                    var l = __webpack_require__("./node_modules/object-assign/index.js"),
                    n = "function" === typeof Symbol && Symbol.
                    for,
                    p = n ? Symbol.
                    for ("react.element") : 60103,
                    q = n ? Symbol.
                    for ("react.portal") : 60106,
                    r = n ? Symbol.
                    for ("react.fragment") : 60107,
                    t = n ? Symbol.
                    for ("react.strict_mode") : 60108,
                    u = n ? Symbol.
                    for ("react.profiler") : 60114,
                    v = n ? Symbol.
                    for ("react.provider") : 60109,
                    w = n ? Symbol.
                    for ("react.context") : 60110,
                    x = n ? Symbol.
                    for ("react.forward_ref") : 60112,
                    y = n ? Symbol.
                    for ("react.suspense") : 60113,
                    z = n ? Symbol.
                    for ("react.memo") : 60115,
                    A = n ? Symbol.
                    for ("react.lazy") : 60116,
                    B = "function" === typeof Symbol && Symbol.iterator;
                    function C(a) {
                        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a,
                        c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
                        return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                    }
                    var D = {
                        isMounted: function() {
                            return ! 1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    E = {};
                    function F(a, b, c) {
                        this.props = a;
                        this.context = b;
                        this.refs = E;
                        this.updater = c || D
                    }
                    F.prototype.isReactComponent = {};
                    F.prototype.setState = function(a, b) {
                        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(C(85));
                        this.updater.enqueueSetState(this, a, b, "setState")
                    };
                    F.prototype.forceUpdate = function(a) {
                        this.updater.enqueueForceUpdate(this, a, "forceUpdate")
                    };
                    function G() {}
                    G.prototype = F.prototype;
                    function H(a, b, c) {
                        this.props = a;
                        this.context = b;
                        this.refs = E;
                        this.updater = c || D
                    }
                    var I = H.prototype = new G;
                    I.constructor = H;
                    l(I, F.prototype);
                    I.isPureReactComponent = !0;
                    var J = {
                        current: null
                    },
                    K = Object.prototype.hasOwnProperty,
                    L = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };
                    function M(a, b, c) {
                        var e, d = {},
                        g = null,
                        k = null;
                        if (null != b) for (e in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) K.call(b, e) && !L.hasOwnProperty(e) && (d[e] = b[e]);
                        var f = arguments.length - 2;
                        if (1 === f) d.children = c;
                        else if (1 < f) {
                            for (var h = Array(f), m = 0; m < f; m++) h[m] = arguments[m + 2];
                            d.children = h
                        }
                        if (a && a.defaultProps) for (e in f = a.defaultProps, f) void 0 === d[e] && (d[e] = f[e]);
                        return {
                            $$typeof: p,
                            type: a,
                            key: g,
                            ref: k,
                            props: d,
                            _owner: J.current
                        }
                    }
                    function N(a, b) {
                        return {
                            $$typeof: p,
                            type: a.type,
                            key: b,
                            ref: a.ref,
                            props: a.props,
                            _owner: a._owner
                        }
                    }
                    function O(a) {
                        return "object" === typeof a && null !== a && a.$$typeof === p
                    }
                    function escape(a) {
                        var b = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + ("" + a).replace(/[=:]/g, (function(a) {
                            return b[a]
                        }))
                    }
                    var P = /\/+/g,
                    Q = [];
                    function R(a, b, c, e) {
                        if (Q.length) {
                            var d = Q.pop();
                            d.result = a;
                            d.keyPrefix = b;
                            d.func = c;
                            d.context = e;
                            d.count = 0;
                            return d
                        }
                        return {
                            result: a,
                            keyPrefix: b,
                            func: c,
                            context: e,
                            count: 0
                        }
                    }
                    function S(a) {
                        a.result = null;
                        a.keyPrefix = null;
                        a.func = null;
                        a.context = null;
                        a.count = 0;
                        10 > Q.length && Q.push(a)
                    }
                    function T(a, b, c, e) {
                        var d = typeof a;
                        if ("undefined" === d || "boolean" === d) a = null;
                        var g = !1;
                        if (null === a) g = !0;
                        else switch (d) {
                        case "string":
                        case "number":
                            g = !0;
                            break;
                        case "object":
                            switch (a.$$typeof) {
                            case p:
                            case q:
                                g = !0
                            }
                        }
                        if (g) return c(e, a, "" === b ? "." + U(a, 0) : b),
                        1;
                        g = 0;
                        b = "" === b ? ".": b + ":";
                        if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
                            d = a[k];
                            var f = b + U(d, k);
                            g += T(d, f, c, e)
                        } else if (null === a || "object" !== typeof a ? f = null: (f = B && a[B] || a["@@iterator"], f = "function" === typeof f ? f: null), "function" === typeof f) for (a = f.call(a), k = 0; ! (d = a.next()).done;) d = d.value,
                        f = b + U(d, k++),
                        g += T(d, f, c, e);
                        else if ("object" === d) throw c = "" + a,
                        Error(C(31, "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}": c, ""));
                        return g
                    }
                    function V(a, b, c) {
                        return null == a ? 0 : T(a, "", b, c)
                    }
                    function U(a, b) {
                        return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36)
                    }
                    function W(a, b) {
                        a.func.call(a.context, b, a.count++)
                    }
                    function aa(a, b, c) {
                        var e = a.result,
                        d = a.keyPrefix;
                        a = a.func.call(a.context, b, a.count++);
                        Array.isArray(a) ? X(a, e, c, (function(a) {
                            return a
                        })) : null != a && (O(a) && (a = N(a, d + (!a.key || b && b.key === a.key ? "": ("" + a.key).replace(P, "$&/") + "/") + c)), e.push(a))
                    }
                    function X(a, b, c, e, d) {
                        var g = "";
                        null != c && (g = ("" + c).replace(P, "$&/") + "/");
                        b = R(b, g, e, d);
                        V(a, aa, b);
                        S(b)
                    }
                    var Y = {
                        current: null
                    };
                    function Z() {
                        var a = Y.current;
                        if (null === a) throw Error(C(321));
                        return a
                    }
                    var ba = {
                        ReactCurrentDispatcher: Y,
                        ReactCurrentBatchConfig: {
                            suspense: null
                        },
                        ReactCurrentOwner: J,
                        IsSomeRendererActing: {
                            current: !1
                        },
                        assign: l
                    };
                    exports.Children = {
                        map: function(a, b, c) {
                            if (null == a) return a;
                            var e = [];
                            X(a, e, null, b, c);
                            return e
                        },
                        forEach: function(a, b, c) {
                            if (null == a) return a;
                            b = R(null, null, b, c);
                            V(a, W, b);
                            S(b)
                        },
                        count: function(a) {
                            return V(a, (function() {
                                return null
                            }), null)
                        },
                        toArray: function(a) {
                            var b = [];
                            X(a, b, null, (function(a) {
                                return a
                            }));
                            return b
                        },
                        only: function(a) {
                            if (!O(a)) throw Error(C(143));
                            return a
                        }
                    };
                    exports.Component = F;
                    exports.Fragment = r;
                    exports.Profiler = u;
                    exports.PureComponent = H;
                    exports.StrictMode = t;
                    exports.Suspense = y;
                    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba;
                    exports.cloneElement = function(a, b, c) {
                        if (null === a || void 0 === a) throw Error(C(267, a));
                        var e = l({},
                        a.props),
                        d = a.key,
                        g = a.ref,
                        k = a._owner;
                        if (null != b) {
                            void 0 !== b.ref && (g = b.ref, k = J.current);
                            void 0 !== b.key && (d = "" + b.key);
                            if (a.type && a.type.defaultProps) var f = a.type.defaultProps;
                            for (h in b) K.call(b, h) && !L.hasOwnProperty(h) && (e[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h])
                        }
                        var h = arguments.length - 2;
                        if (1 === h) e.children = c;
                        else if (1 < h) {
                            f = Array(h);
                            for (var m = 0; m < h; m++) f[m] = arguments[m + 2];
                            e.children = f
                        }
                        return {
                            $$typeof: p,
                            type: a.type,
                            key: d,
                            ref: g,
                            props: e,
                            _owner: k
                        }
                    };
                    exports.createContext = function(a, b) {
                        void 0 === b && (b = null);
                        a = {
                            $$typeof: w,
                            _calculateChangedBits: b,
                            _currentValue: a,
                            _currentValue2: a,
                            _threadCount: 0,
                            Provider: null,
                            Consumer: null
                        };
                        a.Provider = {
                            $$typeof: v,
                            _context: a
                        };
                        return a.Consumer = a
                    };
                    exports.createElement = M;
                    exports.createFactory = function(a) {
                        var b = M.bind(null, a);
                        b.type = a;
                        return b
                    };
                    exports.createRef = function() {
                        return {
                            current: null
                        }
                    };
                    exports.forwardRef = function(a) {
                        return {
                            $$typeof: x,
                            render: a
                        }
                    };
                    exports.isValidElement = O;
                    exports.lazy = function(a) {
                        return {
                            $$typeof: A,
                            _ctor: a,
                            _status: -1,
                            _result: null
                        }
                    };
                    exports.memo = function(a, b) {
                        return {
                            $$typeof: z,
                            type: a,
                            compare: void 0 === b ? null: b
                        }
                    };
                    exports.useCallback = function(a, b) {
                        return Z().useCallback(a, b)
                    };
                    exports.useContext = function(a, b) {
                        return Z().useContext(a, b)
                    };
                    exports.useDebugValue = function() {};
                    exports.useEffect = function(a, b) {
                        return Z().useEffect(a, b)
                    };
                    exports.useImperativeHandle = function(a, b, c) {
                        return Z().useImperativeHandle(a, b, c)
                    };
                    exports.useLayoutEffect = function(a, b) {
                        return Z().useLayoutEffect(a, b)
                    };
                    exports.useMemo = function(a, b) {
                        return Z().useMemo(a, b)
                    };
                    exports.useReducer = function(a, b, c) {
                        return Z().useReducer(a, b, c)
                    };
                    exports.useRef = function(a) {
                        return Z().useRef(a)
                    };
                    exports.useState = function(a) {
                        return Z().useState(a)
                    };
                    exports.version = "16.13.1"
                },
                "./node_modules/react/index.js": function(module, exports, __webpack_require__) {
                    "use strict"; (function(process) {
                        if (process.env.NODE_ENV === "production") {
                            module.exports = __webpack_require__("./node_modules/react/cjs/react.production.min.js")
                        } else {
                            module.exports = __webpack_require__("./node_modules/react/cjs/react.development.js")
                        }
                    }).call(exports, __webpack_require__("./node_modules/process/browser.js"))
                },
                "./node_modules/util/node_modules/inherits/inherits_browser.js": function(module, exports) {
                    if (typeof Object.create === "function") {
                        module.exports = function inherits(ctor, superCtor) {
                            ctor.super_ = superCtor;
                            ctor.prototype = Object.create(superCtor.prototype, {
                                constructor: {
                                    value: ctor,
                                    enumerable: false,
                                    writable: true,
                                    configurable: true
                                }
                            })
                        }
                    } else {
                        module.exports = function inherits(ctor, superCtor) {
                            ctor.super_ = superCtor;
                            var TempCtor = function() {};
                            TempCtor.prototype = superCtor.prototype;
                            ctor.prototype = new TempCtor;
                            ctor.prototype.constructor = ctor
                        }
                    }
                },
                "./node_modules/util/support/isBufferBrowser.js": function(module, exports) {
                    module.exports = function isBuffer(arg) {
                        return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function"
                    }
                },
                "./node_modules/util/util.js": function(module, exports, __webpack_require__) { (function(global, process) {
                        var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
                        function getOwnPropertyDescriptors(obj) {
                            var keys = Object.keys(obj);
                            var descriptors = {};
                            for (var i = 0; i < keys.length; i++) {
                                descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i])
                            }
                            return descriptors
                        };
                        var formatRegExp = /%[sdj%]/g;
                        exports.format = function(f) {
                            if (!isString(f)) {
                                var objects = [];
                                for (var i = 0; i < arguments.length; i++) {
                                    objects.push(inspect(arguments[i]))
                                }
                                return objects.join(" ")
                            }
                            var i = 1;
                            var args = arguments;
                            var len = args.length;
                            var str = String(f).replace(formatRegExp, (function(x) {
                                if (x === "%%") return "%";
                                if (i >= len) return x;
                                switch (x) {
                                case "%s":
                                    return String(args[i++]);
                                case "%d":
                                    return Number(args[i++]);
                                case "%j":
                                    try {
                                        return JSON.stringify(args[i++])
                                    } catch(_) {
                                        return "[Circular]"
                                    }
                                default:
                                    return x
                                }
                            }));
                            for (var x = args[i]; i < len; x = args[++i]) {
                                if (isNull(x) || !isObject(x)) {
                                    str += " " + x
                                } else {
                                    str += " " + inspect(x)
                                }
                            }
                            return str
                        };
                        exports.deprecate = function(fn, msg) {
                            if (isUndefined(global.process)) {
                                return function() {
                                    return exports.deprecate(fn, msg).apply(this, arguments)
                                }
                            }
                            if (process.noDeprecation === true) {
                                return fn
                            }
                            var warned = false;
                            function deprecated() {
                                if (!warned) {
                                    if (process.throwDeprecation) {
                                        throw new Error(msg)
                                    } else if (process.traceDeprecation) {
                                        console.trace(msg)
                                    } else {
                                        console.error(msg)
                                    }
                                    warned = true
                                }
                                return fn.apply(this, arguments)
                            }
                            return deprecated
                        };
                        var debugs = {};
                        var debugEnviron;
                        exports.debuglog = function(set) {
                            if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || "";
                            set = set.toUpperCase();
                            if (!debugs[set]) {
                                if (new RegExp("\\b" + set + "\\b", "i").test(debugEnviron)) {
                                    var pid = process.pid;
                                    debugs[set] = function() {
                                        var msg = exports.format.apply(exports, arguments);
                                        console.error("%s %d: %s", set, pid, msg)
                                    }
                                } else {
                                    debugs[set] = function() {}
                                }
                            }
                            return debugs[set]
                        };
                        function inspect(obj, opts) {
                            var ctx = {
                                seen: [],
                                stylize: stylizeNoColor
                            };
                            if (arguments.length >= 3) ctx.depth = arguments[2];
                            if (arguments.length >= 4) ctx.colors = arguments[3];
                            if (isBoolean(opts)) {
                                ctx.showHidden = opts
                            } else if (opts) {
                                exports._extend(ctx, opts)
                            }
                            if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
                            if (isUndefined(ctx.depth)) ctx.depth = 2;
                            if (isUndefined(ctx.colors)) ctx.colors = false;
                            if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
                            if (ctx.colors) ctx.stylize = stylizeWithColor;
                            return formatValue(ctx, obj, ctx.depth)
                        }
                        exports.inspect = inspect;
                        inspect.colors = {
                            bold: [1, 22],
                            italic: [3, 23],
                            underline: [4, 24],
                            inverse: [7, 27],
                            white: [37, 39],
                            grey: [90, 39],
                            black: [30, 39],
                            blue: [34, 39],
                            cyan: [36, 39],
                            green: [32, 39],
                            magenta: [35, 39],
                            red: [31, 39],
                            yellow: [33, 39]
                        };
                        inspect.styles = {
                            special: "cyan",
                            number: "yellow",
                            boolean: "yellow",
                            undefined: "grey",
                            null: "bold",
                            string: "green",
                            date: "magenta",
                            regexp: "red"
                        };
                        function stylizeWithColor(str, styleType) {
                            var style = inspect.styles[styleType];
                            if (style) {
                                return "[" + inspect.colors[style][0] + "m" + str + "[" + inspect.colors[style][1] + "m"
                            } else {
                                return str
                            }
                        }
                        function stylizeNoColor(str, styleType) {
                            return str
                        }
                        function arrayToHash(array) {
                            var hash = {};
                            array.forEach((function(val, idx) {
                                hash[val] = true
                            }));
                            return hash
                        }
                        function formatValue(ctx, value, recurseTimes) {
                            if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
                                var ret = value.inspect(recurseTimes, ctx);
                                if (!isString(ret)) {
                                    ret = formatValue(ctx, ret, recurseTimes)
                                }
                                return ret
                            }
                            var primitive = formatPrimitive(ctx, value);
                            if (primitive) {
                                return primitive
                            }
                            var keys = Object.keys(value);
                            var visibleKeys = arrayToHash(keys);
                            if (ctx.showHidden) {
                                keys = Object.getOwnPropertyNames(value)
                            }
                            if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
                                return formatError(value)
                            }
                            if (keys.length === 0) {
                                if (isFunction(value)) {
                                    var name = value.name ? ": " + value.name: "";
                                    return ctx.stylize("[Function" + name + "]", "special")
                                }
                                if (isRegExp(value)) {
                                    return ctx.stylize(RegExp.prototype.toString.call(value), "regexp")
                                }
                                if (isDate(value)) {
                                    return ctx.stylize(Date.prototype.toString.call(value), "date")
                                }
                                if (isError(value)) {
                                    return formatError(value)
                                }
                            }
                            var base = "",
                            array = false,
                            braces = ["{", "}"];
                            if (isArray(value)) {
                                array = true;
                                braces = ["[", "]"]
                            }
                            if (isFunction(value)) {
                                var n = value.name ? ": " + value.name: "";
                                base = " [Function" + n + "]"
                            }
                            if (isRegExp(value)) {
                                base = " " + RegExp.prototype.toString.call(value)
                            }
                            if (isDate(value)) {
                                base = " " + Date.prototype.toUTCString.call(value)
                            }
                            if (isError(value)) {
                                base = " " + formatError(value)
                            }
                            if (keys.length === 0 && (!array || value.length == 0)) {
                                return braces[0] + base + braces[1]
                            }
                            if (recurseTimes < 0) {
                                if (isRegExp(value)) {
                                    return ctx.stylize(RegExp.prototype.toString.call(value), "regexp")
                                } else {
                                    return ctx.stylize("[Object]", "special")
                                }
                            }
                            ctx.seen.push(value);
                            var output;
                            if (array) {
                                output = formatArray(ctx, value, recurseTimes, visibleKeys, keys)
                            } else {
                                output = keys.map((function(key) {
                                    return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array)
                                }))
                            }
                            ctx.seen.pop();
                            return reduceToSingleString(output, base, braces)
                        }
                        function formatPrimitive(ctx, value) {
                            if (isUndefined(value)) return ctx.stylize("undefined", "undefined");
                            if (isString(value)) {
                                var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                                return ctx.stylize(simple, "string")
                            }
                            if (isNumber(value)) return ctx.stylize("" + value, "number");
                            if (isBoolean(value)) return ctx.stylize("" + value, "boolean");
                            if (isNull(value)) return ctx.stylize("null", "null")
                        }
                        function formatError(value) {
                            return "[" + Error.prototype.toString.call(value) + "]"
                        }
                        function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
                            var output = [];
                            for (var i = 0,
                            l = value.length; i < l; ++i) {
                                if (hasOwnProperty(value, String(i))) {
                                    output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true))
                                } else {
                                    output.push("")
                                }
                            }
                            keys.forEach((function(key) {
                                if (!key.match(/^\d+$/)) {
                                    output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true))
                                }
                            }));
                            return output
                        }
                        function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
                            var name, str, desc;
                            desc = Object.getOwnPropertyDescriptor(value, key) || {
                                value: value[key]
                            };
                            if (desc.get) {
                                if (desc.set) {
                                    str = ctx.stylize("[Getter/Setter]", "special")
                                } else {
                                    str = ctx.stylize("[Getter]", "special")
                                }
                            } else {
                                if (desc.set) {
                                    str = ctx.stylize("[Setter]", "special")
                                }
                            }
                            if (!hasOwnProperty(visibleKeys, key)) {
                                name = "[" + key + "]"
                            }
                            if (!str) {
                                if (ctx.seen.indexOf(desc.value) < 0) {
                                    if (isNull(recurseTimes)) {
                                        str = formatValue(ctx, desc.value, null)
                                    } else {
                                        str = formatValue(ctx, desc.value, recurseTimes - 1)
                                    }
                                    if (str.indexOf("\n") > -1) {
                                        if (array) {
                                            str = str.split("\n").map((function(line) {
                                                return "  " + line
                                            })).join("\n").substr(2)
                                        } else {
                                            str = "\n" + str.split("\n").map((function(line) {
                                                return "   " + line
                                            })).join("\n")
                                        }
                                    }
                                } else {
                                    str = ctx.stylize("[Circular]", "special")
                                }
                            }
                            if (isUndefined(name)) {
                                if (array && key.match(/^\d+$/)) {
                                    return str
                                }
                                name = JSON.stringify("" + key);
                                if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                                    name = name.substr(1, name.length - 2);
                                    name = ctx.stylize(name, "name")
                                } else {
                                    name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
                                    name = ctx.stylize(name, "string")
                                }
                            }
                            return name + ": " + str
                        }
                        function reduceToSingleString(output, base, braces) {
                            var numLinesEst = 0;
                            var length = output.reduce((function(prev, cur) {
                                numLinesEst++;
                                if (cur.indexOf("\n") >= 0) numLinesEst++;
                                return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1
                            }), 0);
                            if (length > 60) {
                                return braces[0] + (base === "" ? "": base + "\n ") + " " + output.join(",\n  ") + " " + braces[1]
                            }
                            return braces[0] + base + " " + output.join(", ") + " " + braces[1]
                        }
                        function isArray(ar) {
                            return Array.isArray(ar)
                        }
                        exports.isArray = isArray;
                        function isBoolean(arg) {
                            return typeof arg === "boolean"
                        }
                        exports.isBoolean = isBoolean;
                        function isNull(arg) {
                            return arg === null
                        }
                        exports.isNull = isNull;
                        function isNullOrUndefined(arg) {
                            return arg == null
                        }
                        exports.isNullOrUndefined = isNullOrUndefined;
                        function isNumber(arg) {
                            return typeof arg === "number"
                        }
                        exports.isNumber = isNumber;
                        function isString(arg) {
                            return typeof arg === "string"
                        }
                        exports.isString = isString;
                        function isSymbol(arg) {
                            return typeof arg === "symbol"
                        }
                        exports.isSymbol = isSymbol;
                        function isUndefined(arg) {
                            return arg === void 0
                        }
                        exports.isUndefined = isUndefined;
                        function isRegExp(re) {
                            return isObject(re) && objectToString(re) === "[object RegExp]"
                        }
                        exports.isRegExp = isRegExp;
                        function isObject(arg) {
                            return typeof arg === "object" && arg !== null
                        }
                        exports.isObject = isObject;
                        function isDate(d) {
                            return isObject(d) && objectToString(d) === "[object Date]"
                        }
                        exports.isDate = isDate;
                        function isError(e) {
                            return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error)
                        }
                        exports.isError = isError;
                        function isFunction(arg) {
                            return typeof arg === "function"
                        }
                        exports.isFunction = isFunction;
                        function isPrimitive(arg) {
                            return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined"
                        }
                        exports.isPrimitive = isPrimitive;
                        exports.isBuffer = __webpack_require__("./node_modules/util/support/isBufferBrowser.js");
                        function objectToString(o) {
                            return Object.prototype.toString.call(o)
                        }
                        function pad(n) {
                            return n < 10 ? "0" + n.toString(10) : n.toString(10)
                        }
                        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        function timestamp() {
                            var d = new Date;
                            var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(":");
                            return [d.getDate(), months[d.getMonth()], time].join(" ")
                        }
                        exports.log = function() {
                            console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments))
                        };
                        exports.inherits = __webpack_require__("./node_modules/util/node_modules/inherits/inherits_browser.js");
                        exports._extend = function(origin, add) {
                            if (!add || !isObject(add)) return origin;
                            var keys = Object.keys(add);
                            var i = keys.length;
                            while (i--) {
                                origin[keys[i]] = add[keys[i]]
                            }
                            return origin
                        };
                        function hasOwnProperty(obj, prop) {
                            return Object.prototype.hasOwnProperty.call(obj, prop)
                        }
                        var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : undefined;
                        exports.promisify = function promisify(original) {
                            if (typeof original !== "function") throw new TypeError('The "original" argument must be of type Function');
                            if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
                                var fn = original[kCustomPromisifiedSymbol];
                                if (typeof fn !== "function") {
                                    throw new TypeError('The "util.promisify.custom" argument must be of type Function')
                                }
                                Object.defineProperty(fn, kCustomPromisifiedSymbol, {
                                    value: fn,
                                    enumerable: false,
                                    writable: false,
                                    configurable: true
                                });
                                return fn
                            }
                            function fn() {
                                var promiseResolve, promiseReject;
                                var promise = new Promise((function(resolve, reject) {
                                    promiseResolve = resolve;
                                    promiseReject = reject
                                }));
                                var args = [];
                                for (var i = 0; i < arguments.length; i++) {
                                    args.push(arguments[i])
                                }
                                args.push((function(err, value) {
                                    if (err) {
                                        promiseReject(err)
                                    } else {
                                        promiseResolve(value)
                                    }
                                }));
                                try {
                                    original.apply(this, args)
                                } catch(err) {
                                    promiseReject(err)
                                }
                                return promise
                            }
                            Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
                            if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
                                value: fn,
                                enumerable: false,
                                writable: false,
                                configurable: true
                            });
                            return Object.defineProperties(fn, getOwnPropertyDescriptors(original))
                        };
                        exports.promisify.custom = kCustomPromisifiedSymbol;
                        function callbackifyOnRejected(reason, cb) {
                            if (!reason) {
                                var newReason = new Error("Promise was rejected with a falsy value");
                                newReason.reason = reason;
                                reason = newReason
                            }
                            return cb(reason)
                        }
                        function callbackify(original) {
                            if (typeof original !== "function") {
                                throw new TypeError('The "original" argument must be of type Function')
                            }
                            function callbackified() {
                                var args = [];
                                for (var i = 0; i < arguments.length; i++) {
                                    args.push(arguments[i])
                                }
                                var maybeCb = args.pop();
                                if (typeof maybeCb !== "function") {
                                    throw new TypeError("The last argument must be of type Function")
                                }
                                var self = this;
                                var cb = function() {
                                    return maybeCb.apply(self, arguments)
                                };
                                original.apply(this, args).then((function(ret) {
                                    process.nextTick(cb, null, ret)
                                }), (function(rej) {
                                    process.nextTick(callbackifyOnRejected, rej, cb)
                                }))
                            }
                            Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
                            Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
                            return callbackified
                        }
                        exports.callbackify = callbackify
                    }).call(exports, __webpack_require__("./node_modules/hippy-pack/buildin/global.js"), __webpack_require__("./node_modules/process/browser.js"))
                }
            });