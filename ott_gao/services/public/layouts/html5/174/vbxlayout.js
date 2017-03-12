(function () {
    var $JSCompiler_prototypeAlias$$, $goog$$ = $goog$$ || {}, $goog$global$$ = this;

    function $goog$isDef$$($val$$) {
        return void 0 !== $val$$;
    }

    function $goog$exportPath_$$($name$$49_parts$$, $opt_object$$, $cur_opt_objectToExportTo$$) {
        //console.log($name$$49_parts$$);
        $name$$49_parts$$ = $name$$49_parts$$.split(".");
        $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$ || $goog$global$$;
        $name$$49_parts$$[0] in $cur_opt_objectToExportTo$$ || !$cur_opt_objectToExportTo$$.execScript || $cur_opt_objectToExportTo$$.execScript("var " + $name$$49_parts$$[0]);
        for (var $part$$; $name$$49_parts$$.length && ($part$$ = $name$$49_parts$$.shift());) {
            !$name$$49_parts$$.length && $goog$isDef$$($opt_object$$) ? $cur_opt_objectToExportTo$$[$part$$] = $opt_object$$ : $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$[$part$$] ? $cur_opt_objectToExportTo$$[$part$$] : $cur_opt_objectToExportTo$$[$part$$] = {};
        }
    }

    function $goog$getObjectByName$$($name$$54$$, $opt_obj$$) {
        for (var $parts$$1$$ = $name$$54$$.split("."), $cur$$1$$ = $opt_obj$$ || $goog$global$$, $part$$1$$; $part$$1$$ = $parts$$1$$.shift();) {
            if (null != $cur$$1$$[$part$$1$$]) {
                $cur$$1$$ = $cur$$1$$[$part$$1$$];
            } else {
                return null;
            }
        }
        return $cur$$1$$;
    }

    function $goog$nullFunction$$() {
    }

    function $goog$addSingletonGetter$$($ctor$$) {
        $ctor$$.$getInstance$ = function $$ctor$$$$getInstance$$() {
            return $ctor$$.$instance_$ ? $ctor$$.$instance_$ : $ctor$$.$instance_$ = new $ctor$$;
        };
    }

    function $goog$typeOf$$($value$$58$$) {
        var $s$$2$$ = typeof $value$$58$$;
        if ("object" == $s$$2$$) {
            if ($value$$58$$) {
                if ($value$$58$$ instanceof Array) {
                    return "array";
                }
                if ($value$$58$$ instanceof Object) {
                    return $s$$2$$;
                }
                var $className$$2$$ = Object.prototype.toString.call($value$$58$$);
                if ("[object Window]" == $className$$2$$) {
                    return "object";
                }
                if ("[object Array]" == $className$$2$$ || "number" == typeof $value$$58$$.length && "undefined" != typeof $value$$58$$.splice && "undefined" != typeof $value$$58$$.propertyIsEnumerable && !$value$$58$$.propertyIsEnumerable("splice")) {
                    return "array";
                }
                if ("[object Function]" == $className$$2$$ || "undefined" != typeof $value$$58$$.call && "undefined" != typeof $value$$58$$.propertyIsEnumerable && !$value$$58$$.propertyIsEnumerable("call")) {
                    return "function";
                }
            } else {
                return "null";
            }
        } else {
            if ("function" == $s$$2$$ && "undefined" == typeof $value$$58$$.call) {
                return "object";
            }
        }
        return $s$$2$$;
    }

    function $goog$isNull$$($val$$1$$) {
        return null === $val$$1$$;
    }

    function $goog$isArray$$($val$$3$$) {
        return "array" == $goog$typeOf$$($val$$3$$);
    }

    function $goog$isArrayLike$$($val$$4$$) {
        var $type$$77$$ = $goog$typeOf$$($val$$4$$);
        return "array" == $type$$77$$ || "object" == $type$$77$$ && "number" == typeof $val$$4$$.length;
    }

    function $goog$isString$$($val$$6$$) {
        return "string" == typeof $val$$6$$;
    }

    function $goog$isBoolean$$($val$$7$$) {
        return "boolean" == typeof $val$$7$$;
    }

    function $goog$isNumber$$($val$$8$$) {
        return "number" == typeof $val$$8$$;
    }

    function $goog$isFunction$$($val$$9$$) {
        return "function" == $goog$typeOf$$($val$$9$$);
    }

    function $goog$isObject$$($val$$10$$) {
        var $type$$78$$ = typeof $val$$10$$;
        return "object" == $type$$78$$ && null != $val$$10$$ || "function" == $type$$78$$;
    }

    function $goog$getUid$$($obj$$37$$) {
        return $obj$$37$$[$goog$UID_PROPERTY_$$] || ($obj$$37$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$);
    }

    var $goog$UID_PROPERTY_$$ = "closure_uid_" + (1E9 * Math.random() >>> 0), $goog$uidCounter_$$ = 0;

    function $goog$bindNative_$$($fn$$, $selfObj$$1$$, $var_args$$39$$) {
        return $fn$$.call.apply($fn$$.bind, arguments);
    }

    function $goog$bindJs_$$($fn$$1$$, $selfObj$$2$$, $var_args$$40$$) {
        if (!$fn$$1$$) {
            throw Error();
        }
        if (2 < arguments.length) {
            var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
            return function () {
                var $newArgs$$ = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
                return $fn$$1$$.apply($selfObj$$2$$, $newArgs$$);
            };
        }
        return function () {
            return $fn$$1$$.apply($selfObj$$2$$, arguments);
        };
    }

    function $goog$bind$$($fn$$2$$, $selfObj$$3$$, $var_args$$41$$) {
        $goog$bind$$ = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bindNative_$$ : $goog$bindJs_$$;
        return $goog$bind$$.apply(null, arguments);
    }

    function $goog$partial$$($fn$$3$$, $var_args$$42$$) {
        var $args$$3$$ = Array.prototype.slice.call(arguments, 1);
        return function () {
            var $newArgs$$1$$ = $args$$3$$.slice();
            $newArgs$$1$$.push.apply($newArgs$$1$$, arguments);
            return $fn$$3$$.apply(this, $newArgs$$1$$);
        };
    }

    var $goog$now$$ = Date.now || function () {
            return +new Date;
        };

    function $goog$inherits$$($childCtor$$, $parentCtor$$) {
        function $tempCtor$$() {
        }

        $tempCtor$$.prototype = $parentCtor$$.prototype;
        $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
        $childCtor$$.prototype = new $tempCtor$$;
        $childCtor$$.prototype.constructor = $childCtor$$;
        $childCtor$$.$base$ = function $$childCtor$$$$base$$($me$$, $methodName$$, $var_args$$43$$) {
            var $args$$4$$ = Array.prototype.slice.call(arguments, 2);
            return $parentCtor$$.prototype[$methodName$$].apply($me$$, $args$$4$$);
        };
    }
    ;
    function $goog$debug$Error$$($opt_msg$$) {
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, $goog$debug$Error$$);
        } else {
            var $stack$$ = Error().stack;
            $stack$$ && (this.stack = $stack$$);
        }
        $opt_msg$$ && (this.message = String($opt_msg$$));
    }

    $goog$inherits$$($goog$debug$Error$$, Error);
    $goog$debug$Error$$.prototype.name = "CustomError";
    function $goog$debug$LogRecord$$($level$$7$$, $msg$$, $loggerName$$, $opt_time$$, $opt_sequenceNumber$$) {
        this.reset($level$$7$$, $msg$$, $loggerName$$, $opt_time$$, $opt_sequenceNumber$$);
    }

    $goog$debug$LogRecord$$.prototype.$exception_$ = null;
    $goog$debug$LogRecord$$.prototype.$exceptionText_$ = null;
    var $goog$debug$LogRecord$nextSequenceNumber_$$ = 0;
    $goog$debug$LogRecord$$.prototype.reset = function $$goog$debug$LogRecord$$$$reset$($level$$8$$, $msg$$1$$, $loggerName$$1$$, $opt_time$$1$$, $opt_sequenceNumber$$1$$) {
        "number" == typeof $opt_sequenceNumber$$1$$ || $goog$debug$LogRecord$nextSequenceNumber_$$++;
        $opt_time$$1$$ || $goog$now$$();
        this.$level_$ = $level$$8$$;
        this.$msg_$ = $msg$$1$$;
        delete this.$exception_$;
        delete this.$exceptionText_$;
    };
    $goog$debug$LogRecord$$.prototype.$setLevel$ = function $$goog$debug$LogRecord$$$$$setLevel$$($level$$9$$) {
        this.$level_$ = $level$$9$$;
    };
    $goog$debug$LogRecord$$.prototype.getMessage = function $$goog$debug$LogRecord$$$$getMessage$() {
        return this.$msg_$;
    };
    function $goog$Disposable$$() {
        0 != $goog$Disposable$MonitoringMode$OFF$$ && ($goog$Disposable$instances_$$[$goog$getUid$$(this)] = this);
    }

    var $goog$Disposable$MonitoringMode$OFF$$ = 0, $goog$Disposable$instances_$$ = {};
    $goog$Disposable$$.prototype.$disposed_$ = !1;
    $goog$Disposable$$.prototype.$dispose$ = function $$goog$Disposable$$$$$dispose$$() {
        if (!this.$disposed_$ && (this.$disposed_$ = !0, this.$disposeInternal$(), 0 != $goog$Disposable$MonitoringMode$OFF$$)) {
            var $uid$$ = $goog$getUid$$(this);
            delete $goog$Disposable$instances_$$[$uid$$];
        }
    };
    function $JSCompiler_StaticMethods_addOnDisposeCallback$$($JSCompiler_StaticMethods_addOnDisposeCallback$self$$, $callback$$54$$) {
        $JSCompiler_StaticMethods_addOnDisposeCallback$self$$.$onDisposeCallbacks_$ || ($JSCompiler_StaticMethods_addOnDisposeCallback$self$$.$onDisposeCallbacks_$ = []);
        $JSCompiler_StaticMethods_addOnDisposeCallback$self$$.$onDisposeCallbacks_$.push($goog$isDef$$(void 0) ? $goog$bind$$($callback$$54$$, void 0) : $callback$$54$$);
    }

    $goog$Disposable$$.prototype.$disposeInternal$ = function $$goog$Disposable$$$$$disposeInternal$$() {
        if (this.$onDisposeCallbacks_$) {
            for (; this.$onDisposeCallbacks_$.length;) {
                this.$onDisposeCallbacks_$.shift()();
            }
        }
    };
    function $goog$dispose$$($obj$$42$$) {
        $obj$$42$$ && "function" == typeof $obj$$42$$.$dispose$ && $obj$$42$$.$dispose$();
    }
    ;
    var $goog$dom$defaultDomHelper_$$;

    function $goog$events$Event$$($type$$80$$, $opt_target$$) {
        this.type = $type$$80$$;
        this.currentTarget = this.target = $opt_target$$;
        this.defaultPrevented = this.$propagationStopped_$ = !1;
        this.$returnValue_$ = !0;
    }

    $goog$events$Event$$.prototype.$disposeInternal$ = function $$goog$events$Event$$$$$disposeInternal$$() {
    };
    $goog$events$Event$$.prototype.$dispose$ = function $$goog$events$Event$$$$$dispose$$() {
    };
    $goog$events$Event$$.prototype.preventDefault = function $$goog$events$Event$$$$preventDefault$() {
        this.defaultPrevented = !0;
        this.$returnValue_$ = !1;
    };
    var $goog$events$Listenable$IMPLEMENTED_BY_PROP$$ = "closure_listenable_" + (1E6 * Math.random() | 0);

    function $goog$events$Listenable$isImplementedBy$$($obj$$43$$) {
        return !(!$obj$$43$$ || !$obj$$43$$[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$]);
    }

    var $goog$events$ListenableKey$counter_$$ = 0;

    function $goog$events$Listener$$($listener$$43$$, $src$$4$$, $type$$81$$, $capture$$, $opt_handler$$) {
        this.$listener$ = $listener$$43$$;
        this.proxy = null;
        this.src = $src$$4$$;
        this.type = $type$$81$$;
        this.$capture$ = !!$capture$$;
        this.$handler$ = $opt_handler$$;
        this.key = ++$goog$events$ListenableKey$counter_$$;
        this.$removed$ = this.$callOnce$ = !1;
    }

    function $JSCompiler_StaticMethods_markAsRemoved$$($JSCompiler_StaticMethods_markAsRemoved$self$$) {
        $JSCompiler_StaticMethods_markAsRemoved$self$$.$removed$ = !0;
        $JSCompiler_StaticMethods_markAsRemoved$self$$.$listener$ = null;
        $JSCompiler_StaticMethods_markAsRemoved$self$$.proxy = null;
        $JSCompiler_StaticMethods_markAsRemoved$self$$.src = null;
        $JSCompiler_StaticMethods_markAsRemoved$self$$.$handler$ = null;
    }
    ;
    function $goog$functions$TRUE$$() {
        return !0;
    }
    ;
    function $goog$json$parse$$($o_s$$6$$) {
        $o_s$$6$$ = String($o_s$$6$$);
        if (/^\s*$/.test($o_s$$6$$) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test($o_s$$6$$.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
            try {
                return eval("(" + $o_s$$6$$ + ")");
            } catch ($ex$$1$$) {
            }
        }
        throw Error("Invalid JSON string: " + $o_s$$6$$);
    }

    function $goog$json$unsafeParse$$($s$$7$$) {
        return eval("(" + $s$$7$$ + ")");
    }

    function $goog$json$serialize$$($object$$2$$) {
        return (new $goog$json$Serializer$$(void 0)).serialize($object$$2$$);
    }

    function $goog$json$Serializer$$($opt_replacer$$2$$) {
        this.$replacer_$ = $opt_replacer$$2$$;
    }

    $goog$json$Serializer$$.prototype.serialize = function $$goog$json$Serializer$$$$serialize$($object$$3$$) {
        var $sb$$ = [];
        $JSCompiler_StaticMethods_serializeInternal$$(this, $object$$3$$, $sb$$);
        return $sb$$.join("");
    };
    function $JSCompiler_StaticMethods_serializeInternal$$($JSCompiler_StaticMethods_serializeInternal$self$$, $object$$4$$, $sb$$1$$) {
        switch (typeof $object$$4$$) {
            case "string":
                $JSCompiler_StaticMethods_serializeString_$$($object$$4$$, $sb$$1$$);
                break;
            case "number":
                $sb$$1$$.push(isFinite($object$$4$$) && !isNaN($object$$4$$) ? $object$$4$$ : "null");
                break;
            case "boolean":
                $sb$$1$$.push($object$$4$$);
                break;
            case "undefined":
                $sb$$1$$.push("null");
                break;
            case "object":
                if (null == $object$$4$$) {
                    $sb$$1$$.push("null");
                    break;
                }
                if ($goog$isArray$$($object$$4$$)) {
                    $JSCompiler_StaticMethods_serializeInternal$self$$.serializeArray($object$$4$$, $sb$$1$$);
                    break;
                }
                $sb$$1$$.push("{");
                var $sep$$inline_86$$ = "", $key$$inline_87$$;
                for ($key$$inline_87$$ in $object$$4$$) {
                    if (Object.prototype.hasOwnProperty.call($object$$4$$, $key$$inline_87$$)) {
                        var $value$$inline_88$$ = $object$$4$$[$key$$inline_87$$];
                        "function" != typeof $value$$inline_88$$ && ($sb$$1$$.push($sep$$inline_86$$), $JSCompiler_StaticMethods_serializeString_$$($key$$inline_87$$, $sb$$1$$), $sb$$1$$.push(":"), $JSCompiler_StaticMethods_serializeInternal$$($JSCompiler_StaticMethods_serializeInternal$self$$, $JSCompiler_StaticMethods_serializeInternal$self$$.$replacer_$ ? $JSCompiler_StaticMethods_serializeInternal$self$$.$replacer_$.call($object$$4$$, $key$$inline_87$$, $value$$inline_88$$) : $value$$inline_88$$, $sb$$1$$),
                            $sep$$inline_86$$ = ",");
                    }
                }
                $sb$$1$$.push("}");
                break;
            case "function":
                break;
            default:
                throw Error("Unknown type: " + typeof $object$$4$$);
                ;
        }
    }

    var $goog$json$Serializer$charToJsonCharCache_$$ = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }, $goog$json$Serializer$charsToReplace_$$ = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function $JSCompiler_StaticMethods_serializeString_$$($s$$8$$, $sb$$2$$) {
        $sb$$2$$.push('"', $s$$8$$.replace($goog$json$Serializer$charsToReplace_$$, function ($c$$) {
            if ($c$$ in $goog$json$Serializer$charToJsonCharCache_$$) {
                return $goog$json$Serializer$charToJsonCharCache_$$[$c$$];
            }
            var $cc$$ = $c$$.charCodeAt(0), $rv$$ = "\\u";
            16 > $cc$$ ? $rv$$ += "000" : 256 > $cc$$ ? $rv$$ += "00" : 4096 > $cc$$ && ($rv$$ += "0");
            return $goog$json$Serializer$charToJsonCharCache_$$[$c$$] = $rv$$ + $cc$$.toString(16);
        }), '"');
    }

    $goog$json$Serializer$$.prototype.serializeArray = function $$goog$json$Serializer$$$$serializeArray$($arr$$16$$, $sb$$4$$) {
        var $l$$1$$ = $arr$$16$$.length;
        $sb$$4$$.push("[");
        for (var $sep_value$$60$$ = "", $i$$13$$ = 0; $i$$13$$ < $l$$1$$; $i$$13$$++) {
            $sb$$4$$.push($sep_value$$60$$), $sep_value$$60$$ = $arr$$16$$[$i$$13$$], $JSCompiler_StaticMethods_serializeInternal$$(this, this.$replacer_$ ? this.$replacer_$.call($arr$$16$$, String($i$$13$$), $sep_value$$60$$) : $sep_value$$60$$, $sb$$4$$), $sep_value$$60$$ = ",";
        }
        $sb$$4$$.push("]");
    };
    function $goog$math$Size$$($width$$12$$, $height$$11$$) {
        this.width = $width$$12$$;
        this.height = $height$$11$$;
    }

    $JSCompiler_prototypeAlias$$ = $goog$math$Size$$.prototype;
    $JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
        return new $goog$math$Size$$(this.width, this.height);
    };
    $JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
        return "(" + this.width + " x " + this.height + ")";
    };
    $JSCompiler_prototypeAlias$$.$isEmpty$ = function $$JSCompiler_prototypeAlias$$$$isEmpty$$() {
        return !(this.width * this.height);
    };
    $JSCompiler_prototypeAlias$$.ceil = function $$JSCompiler_prototypeAlias$$$ceil$() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this;
    };
    $JSCompiler_prototypeAlias$$.floor = function $$JSCompiler_prototypeAlias$$$floor$() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this;
    };
    $JSCompiler_prototypeAlias$$.round = function $$JSCompiler_prototypeAlias$$$round$() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this;
    };
    function $goog$net$XmlHttpFactory$$() {
    }

    $goog$net$XmlHttpFactory$$.prototype.$cachedOptions_$ = null;
    $goog$net$XmlHttpFactory$$.prototype.getOptions = function $$goog$net$XmlHttpFactory$$$$getOptions$() {
        var $JSCompiler_temp$$49_options$$inline_91$$;
        ($JSCompiler_temp$$49_options$$inline_91$$ = this.$cachedOptions_$) || ($JSCompiler_temp$$49_options$$inline_91$$ = {}, $JSCompiler_StaticMethods_getProgId_$$(this) && ($JSCompiler_temp$$49_options$$inline_91$$[0] = !0, $JSCompiler_temp$$49_options$$inline_91$$[1] = !0), $JSCompiler_temp$$49_options$$inline_91$$ = this.$cachedOptions_$ = $JSCompiler_temp$$49_options$$inline_91$$);
        return $JSCompiler_temp$$49_options$$inline_91$$;
    };
    function $goog$object$forEach$$($obj$$46$$, $f$$3$$, $opt_obj$$1$$) {
        for (var $key$$23$$ in $obj$$46$$) {
            $f$$3$$.call($opt_obj$$1$$, $obj$$46$$[$key$$23$$], $key$$23$$, $obj$$46$$);
        }
    }

    function $goog$object$getValues$$($obj$$55$$) {
        var $res$$2$$ = [], $i$$14$$ = 0, $key$$31$$;
        for ($key$$31$$ in $obj$$55$$) {
            $res$$2$$[$i$$14$$++] = $obj$$55$$[$key$$31$$];
        }
        return $res$$2$$;
    }

    function $goog$object$getKeys$$($obj$$56$$) {
        var $res$$3$$ = [], $i$$15$$ = 0, $key$$32$$;
        for ($key$$32$$ in $obj$$56$$) {
            $res$$3$$[$i$$15$$++] = $key$$32$$;
        }
        return $res$$3$$;
    }

    function $goog$object$findValue$$($obj$$61$$, $f$$9_key$$36$$, $opt_this$$1$$) {
        a: {
            for (var $key$$inline_96$$ in $obj$$61$$) {
                if ($f$$9_key$$36$$.call($opt_this$$1$$, $obj$$61$$[$key$$inline_96$$], $key$$inline_96$$, $obj$$61$$)) {
                    $f$$9_key$$36$$ = $key$$inline_96$$;
                    break a;
                }
            }
            $f$$9_key$$36$$ = void 0;
        }
        return $f$$9_key$$36$$ && $obj$$61$$[$f$$9_key$$36$$];
    }

    function $goog$object$isEmpty$$($obj$$62$$) {
        for (var $key$$37$$ in $obj$$62$$) {
            return !1;
        }
        return !0;
    }

    function $goog$object$add$$($obj$$65$$, $key$$39$$, $val$$13$$) {
        if ($key$$39$$ in $obj$$65$$) {
            throw Error('The object already contains the key "' + $key$$39$$ + '"');
        }
        $obj$$65$$[$key$$39$$] = $val$$13$$;
    }

    function $goog$object$get$$($obj$$66$$, $key$$40$$) {
        return $key$$40$$ in $obj$$66$$ ? $obj$$66$$[$key$$40$$] : void 0;
    }

    var $goog$object$PROTOTYPE_FIELDS_$$ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function $goog$object$extend$$($target$$49$$, $var_args$$53$$) {
        for (var $key$$46$$, $source$$3$$, $i$$18$$ = 1; $i$$18$$ < arguments.length; $i$$18$$++) {
            $source$$3$$ = arguments[$i$$18$$];
            for ($key$$46$$ in $source$$3$$) {
                $target$$49$$[$key$$46$$] = $source$$3$$[$key$$46$$];
            }
            for (var $j$$1$$ = 0; $j$$1$$ < $goog$object$PROTOTYPE_FIELDS_$$.length; $j$$1$$++) {
                $key$$46$$ = $goog$object$PROTOTYPE_FIELDS_$$[$j$$1$$], Object.prototype.hasOwnProperty.call($source$$3$$, $key$$46$$) && ($target$$49$$[$key$$46$$] = $source$$3$$[$key$$46$$]);
            }
        }
    }

    function $goog$object$createSet$$($var_args$$55$$) {
        var $argLength$$1$$ = arguments.length;
        if (1 == $argLength$$1$$ && $goog$isArray$$(arguments[0])) {
            return $goog$object$createSet$$.apply(null, arguments[0]);
        }
        for (var $rv$$4$$ = {}, $i$$20$$ = 0; $i$$20$$ < $argLength$$1$$; $i$$20$$++) {
            $rv$$4$$[arguments[$i$$20$$]] = !0;
        }
        return $rv$$4$$;
    }
    ;
    var $goog$dom$tags$VOID_TAGS_$$ = $goog$object$createSet$$("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));

    function $goog$Thenable$addImplementation$$($ctor$$2$$) {
        $ctor$$2$$.prototype.then = $ctor$$2$$.prototype.then;
        $ctor$$2$$.prototype.$goog_Thenable = !0;
    }

    function $goog$Thenable$isImplementedBy$$($object$$5$$) {
        if (!$object$$5$$) {
            return !1;
        }
        try {
            return !!$object$$5$$.$goog_Thenable;
        } catch ($e$$14$$) {
            return !1;
        }
    }
    ;
    function $goog$reflect$sinkValue$$($x$$54$$) {
        $goog$reflect$sinkValue$$[" "]($x$$54$$);
        return $x$$54$$;
    }

    $goog$reflect$sinkValue$$[" "] = $goog$nullFunction$$;
    function $goog$reflect$canAccessProperty$$($obj$$74$$, $prop$$4$$) {
        try {
            return $goog$reflect$sinkValue$$($obj$$74$$[$prop$$4$$]), !0;
        } catch ($e$$15$$) {
        }
        return !1;
    }
    ;
    function $goog$string$caseInsensitiveStartsWith$$($str$$26$$, $prefix$$3$$) {
        return 0 == $goog$string$caseInsensitiveCompare$$($prefix$$3$$, $str$$26$$.substr(0, $prefix$$3$$.length));
    }

    function $goog$string$caseInsensitiveEndsWith$$($str$$27$$, $suffix$$1$$) {
        return 0 == $goog$string$caseInsensitiveCompare$$($suffix$$1$$, $str$$27$$.substr($str$$27$$.length - $suffix$$1$$.length, $suffix$$1$$.length));
    }

    function $goog$string$subs$$($str$$28$$, $var_args$$56$$) {
        for (var $splitParts$$ = $str$$28$$.split("%s"), $returnString$$ = "", $subsArguments$$ = Array.prototype.slice.call(arguments, 1); $subsArguments$$.length && 1 < $splitParts$$.length;) {
            $returnString$$ += $splitParts$$.shift() + $subsArguments$$.shift();
        }
        return $returnString$$ + $splitParts$$.join("%s");
    }

    function $goog$string$isEmptySafe$$($str$$31$$) {
        return /^[\s\xa0]*$/.test(null == $str$$31$$ ? "" : String($str$$31$$));
    }

    function $goog$string$trim$$($str$$41$$) {
        return $str$$41$$.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    }

    function $goog$string$caseInsensitiveCompare$$($str1$$1$$, $str2$$1$$) {
        var $test1$$ = String($str1$$1$$).toLowerCase(), $test2$$ = String($str2$$1$$).toLowerCase();
        return $test1$$ < $test2$$ ? -1 : $test1$$ == $test2$$ ? 0 : 1;
    }

    function $goog$string$htmlEscape$$($str$$47$$) {
        if (!$goog$string$ALL_RE_$$.test($str$$47$$)) {
            return $str$$47$$;
        }
        -1 != $str$$47$$.indexOf("&") && ($str$$47$$ = $str$$47$$.replace($goog$string$AMP_RE_$$, "&amp;"));
        -1 != $str$$47$$.indexOf("<") && ($str$$47$$ = $str$$47$$.replace($goog$string$LT_RE_$$, "&lt;"));
        -1 != $str$$47$$.indexOf(">") && ($str$$47$$ = $str$$47$$.replace($goog$string$GT_RE_$$, "&gt;"));
        -1 != $str$$47$$.indexOf('"') && ($str$$47$$ = $str$$47$$.replace($goog$string$QUOT_RE_$$, "&quot;"));
        -1 != $str$$47$$.indexOf("'") && ($str$$47$$ = $str$$47$$.replace($goog$string$SINGLE_QUOTE_RE_$$, "&#39;"));
        -1 != $str$$47$$.indexOf("\x00") && ($str$$47$$ = $str$$47$$.replace($goog$string$NULL_RE_$$, "&#0;"));
        return $str$$47$$;
    }

    var $goog$string$AMP_RE_$$ = /&/g, $goog$string$LT_RE_$$ = /</g, $goog$string$GT_RE_$$ = />/g, $goog$string$QUOT_RE_$$ = /"/g, $goog$string$SINGLE_QUOTE_RE_$$ = /'/g, $goog$string$NULL_RE_$$ = /\x00/g, $goog$string$ALL_RE_$$ = /[\x00&<>"']/;

    function $goog$string$stripQuotes$$($str$$54$$) {
        for (var $i$$22$$ = 0; 2 > $i$$22$$; $i$$22$$++) {
            var $quoteChar$$ = "\"'".charAt($i$$22$$);
            if ($str$$54$$.charAt(0) == $quoteChar$$ && $str$$54$$.charAt($str$$54$$.length - 1) == $quoteChar$$) {
                return $str$$54$$.substring(1, $str$$54$$.length - 1);
            }
        }
        return $str$$54$$;
    }

    function $goog$string$regExpEscape$$($s$$18$$) {
        return String($s$$18$$).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
    }

    function $goog$string$compareElements_$$($left$$3$$, $right$$3$$) {
        return $left$$3$$ < $right$$3$$ ? -1 : $left$$3$$ > $right$$3$$ ? 1 : 0;
    }

    function $goog$string$toCamelCase$$($str$$64$$) {
        return String($str$$64$$).replace(/\-([a-z])/g, function ($all$$, $match$$1$$) {
            return $match$$1$$.toUpperCase();
        });
    }

    function $goog$string$toTitleCase$$($str$$66$$) {
        var $delimiters$$ = $goog$isString$$(void 0) ? $goog$string$regExpEscape$$(void 0) : "\\s";
        return $str$$66$$.replace(new RegExp("(^" + ($delimiters$$ ? "|[" + $delimiters$$ + "]+" : "") + ")([a-z])", "g"), function ($all$$1$$, $p1$$, $p2$$) {
            return $p1$$ + $p2$$.toUpperCase();
        });
    }

    function $goog$string$parseInt$$($value$$66$$) {
        isFinite($value$$66$$) && ($value$$66$$ = String($value$$66$$));
        return $goog$isString$$($value$$66$$) ? /^\s*-?0x/i.test($value$$66$$) ? parseInt($value$$66$$, 16) : parseInt($value$$66$$, 10) : NaN;
    }
    ;
    function $goog$asserts$AssertionError$$($messagePattern$$, $messageArgs$$) {
        $messageArgs$$.unshift($messagePattern$$);
        $goog$debug$Error$$.call(this, $goog$string$subs$$.apply(null, $messageArgs$$));
        $messageArgs$$.shift();
    }

    $goog$inherits$$($goog$asserts$AssertionError$$, $goog$debug$Error$$);
    $goog$asserts$AssertionError$$.prototype.name = "AssertionError";
    function $goog$asserts$doAssertFailure_$$($defaultMessage$$, $defaultArgs$$, $givenMessage$$, $givenArgs$$) {
        var $message$$22$$ = "Assertion failed";
        if ($givenMessage$$) {
            var $message$$22$$ = $message$$22$$ + (": " + $givenMessage$$), $args$$6$$ = $givenArgs$$
        } else {
            $defaultMessage$$ && ($message$$22$$ += ": " + $defaultMessage$$, $args$$6$$ = $defaultArgs$$);
        }
        throw new $goog$asserts$AssertionError$$("" + $message$$22$$, $args$$6$$ || []);
    }

    function $goog$asserts$assert$$($condition$$1$$, $opt_message$$8$$, $var_args$$58$$) {
        $condition$$1$$ || $goog$asserts$doAssertFailure_$$("", null, $opt_message$$8$$, Array.prototype.slice.call(arguments, 2));
    }

    function $goog$asserts$fail$$($opt_message$$9$$, $var_args$$59$$) {
        throw new $goog$asserts$AssertionError$$("Failure" + ($opt_message$$9$$ ? ": " + $opt_message$$9$$ : ""), Array.prototype.slice.call(arguments, 1));
    }

    function $goog$asserts$assertObject$$($value$$70$$, $opt_message$$13$$, $var_args$$63$$) {
        $goog$isObject$$($value$$70$$) || $goog$asserts$doAssertFailure_$$("Expected object but got %s: %s.", [$goog$typeOf$$($value$$70$$), $value$$70$$], $opt_message$$13$$, Array.prototype.slice.call(arguments, 2));
    }
    ;
    var $goog$array$ARRAY_PROTOTYPE_$$ = Array.prototype, $goog$array$indexOf$$ = $goog$array$ARRAY_PROTOTYPE_$$.indexOf ? function ($arr$$17$$, $obj$$76$$, $opt_fromIndex$$6$$) {
        $goog$asserts$assert$$(null != $arr$$17$$.length);
        return $goog$array$ARRAY_PROTOTYPE_$$.indexOf.call($arr$$17$$, $obj$$76$$, $opt_fromIndex$$6$$);
    } : function ($arr$$18$$, $obj$$77$$, $fromIndex$$2_i$$27_opt_fromIndex$$7$$) {
        $fromIndex$$2_i$$27_opt_fromIndex$$7$$ = null == $fromIndex$$2_i$$27_opt_fromIndex$$7$$ ? 0 : 0 > $fromIndex$$2_i$$27_opt_fromIndex$$7$$ ? Math.max(0, $arr$$18$$.length + $fromIndex$$2_i$$27_opt_fromIndex$$7$$) : $fromIndex$$2_i$$27_opt_fromIndex$$7$$;
        if ($goog$isString$$($arr$$18$$)) {
            return $goog$isString$$($obj$$77$$) && 1 == $obj$$77$$.length ? $arr$$18$$.indexOf($obj$$77$$, $fromIndex$$2_i$$27_opt_fromIndex$$7$$) : -1;
        }
        for (; $fromIndex$$2_i$$27_opt_fromIndex$$7$$ < $arr$$18$$.length; $fromIndex$$2_i$$27_opt_fromIndex$$7$$++) {
            if ($fromIndex$$2_i$$27_opt_fromIndex$$7$$ in $arr$$18$$ && $arr$$18$$[$fromIndex$$2_i$$27_opt_fromIndex$$7$$] === $obj$$77$$) {
                return $fromIndex$$2_i$$27_opt_fromIndex$$7$$;
            }
        }
        return -1;
    }, $goog$array$lastIndexOf$$ = $goog$array$ARRAY_PROTOTYPE_$$.lastIndexOf ? function ($arr$$19$$, $obj$$78$$, $opt_fromIndex$$8$$) {
        $goog$asserts$assert$$(null != $arr$$19$$.length);
        return $goog$array$ARRAY_PROTOTYPE_$$.lastIndexOf.call($arr$$19$$, $obj$$78$$, null == $opt_fromIndex$$8$$ ? $arr$$19$$.length - 1 : $opt_fromIndex$$8$$);
    } : function ($arr$$20$$, $obj$$79$$, $fromIndex$$4_i$$28_opt_fromIndex$$9$$) {
        $fromIndex$$4_i$$28_opt_fromIndex$$9$$ = null == $fromIndex$$4_i$$28_opt_fromIndex$$9$$ ? $arr$$20$$.length - 1 : $fromIndex$$4_i$$28_opt_fromIndex$$9$$;
        0 > $fromIndex$$4_i$$28_opt_fromIndex$$9$$ && ($fromIndex$$4_i$$28_opt_fromIndex$$9$$ = Math.max(0, $arr$$20$$.length + $fromIndex$$4_i$$28_opt_fromIndex$$9$$));
        if ($goog$isString$$($arr$$20$$)) {
            return $goog$isString$$($obj$$79$$) && 1 == $obj$$79$$.length ? $arr$$20$$.lastIndexOf($obj$$79$$, $fromIndex$$4_i$$28_opt_fromIndex$$9$$) : -1;
        }
        for (; 0 <= $fromIndex$$4_i$$28_opt_fromIndex$$9$$; $fromIndex$$4_i$$28_opt_fromIndex$$9$$--) {
            if ($fromIndex$$4_i$$28_opt_fromIndex$$9$$ in $arr$$20$$ && $arr$$20$$[$fromIndex$$4_i$$28_opt_fromIndex$$9$$] === $obj$$79$$) {
                return $fromIndex$$4_i$$28_opt_fromIndex$$9$$;
            }
        }
        return -1;
    }, $goog$array$forEach$$ = $goog$array$ARRAY_PROTOTYPE_$$.forEach ? function ($arr$$21$$, $f$$10$$, $opt_obj$$6$$) {
        $goog$asserts$assert$$(null != $arr$$21$$.length);
        $goog$array$ARRAY_PROTOTYPE_$$.forEach.call($arr$$21$$, $f$$10$$, $opt_obj$$6$$);
    } : function ($arr$$22$$, $f$$11$$, $opt_obj$$7$$) {
        for (var $l$$3$$ = $arr$$22$$.length, $arr2$$ = $goog$isString$$($arr$$22$$) ? $arr$$22$$.split("") : $arr$$22$$, $i$$29$$ = 0; $i$$29$$ < $l$$3$$; $i$$29$$++) {
            $i$$29$$ in $arr2$$ && $f$$11$$.call($opt_obj$$7$$, $arr2$$[$i$$29$$], $i$$29$$, $arr$$22$$);
        }
    }, $goog$array$filter$$ = $goog$array$ARRAY_PROTOTYPE_$$.filter ? function ($arr$$24$$, $f$$13$$, $opt_obj$$9$$) {
        $goog$asserts$assert$$(null != $arr$$24$$.length);
        return $goog$array$ARRAY_PROTOTYPE_$$.filter.call($arr$$24$$, $f$$13$$, $opt_obj$$9$$);
    } : function ($arr$$25$$, $f$$14$$, $opt_obj$$10$$) {
        for (var $l$$5$$ = $arr$$25$$.length, $res$$5$$ = [], $resLength$$ = 0, $arr2$$2$$ = $goog$isString$$($arr$$25$$) ? $arr$$25$$.split("") : $arr$$25$$, $i$$31$$ = 0; $i$$31$$ < $l$$5$$; $i$$31$$++) {
            if ($i$$31$$ in $arr2$$2$$) {
                var $val$$14$$ = $arr2$$2$$[$i$$31$$];
                $f$$14$$.call($opt_obj$$10$$, $val$$14$$, $i$$31$$, $arr$$25$$) && ($res$$5$$[$resLength$$++] = $val$$14$$);
            }
        }
        return $res$$5$$;
    }, $goog$array$map$$ = $goog$array$ARRAY_PROTOTYPE_$$.map ? function ($arr$$26$$, $f$$15$$, $opt_obj$$11$$) {
        $goog$asserts$assert$$(null != $arr$$26$$.length);
        return $goog$array$ARRAY_PROTOTYPE_$$.map.call($arr$$26$$, $f$$15$$, $opt_obj$$11$$);
    } : function ($arr$$27$$, $f$$16$$, $opt_obj$$12$$) {
        for (var $l$$6$$ = $arr$$27$$.length, $res$$6$$ = Array($l$$6$$), $arr2$$3$$ = $goog$isString$$($arr$$27$$) ? $arr$$27$$.split("") : $arr$$27$$, $i$$32$$ = 0; $i$$32$$ < $l$$6$$; $i$$32$$++) {
            $i$$32$$ in $arr2$$3$$ && ($res$$6$$[$i$$32$$] = $f$$16$$.call($opt_obj$$12$$, $arr2$$3$$[$i$$32$$], $i$$32$$, $arr$$27$$));
        }
        return $res$$6$$;
    }, $goog$array$some$$ = $goog$array$ARRAY_PROTOTYPE_$$.some ? function ($arr$$32$$, $f$$21$$, $opt_obj$$17$$) {
        $goog$asserts$assert$$(null != $arr$$32$$.length);
        return $goog$array$ARRAY_PROTOTYPE_$$.some.call($arr$$32$$, $f$$21$$, $opt_obj$$17$$);
    } : function ($arr$$33$$, $f$$22$$, $opt_obj$$18$$) {
        for (var $l$$7$$ = $arr$$33$$.length, $arr2$$4$$ = $goog$isString$$($arr$$33$$) ? $arr$$33$$.split("") : $arr$$33$$, $i$$33$$ = 0; $i$$33$$ < $l$$7$$; $i$$33$$++) {
            if ($i$$33$$ in $arr2$$4$$ && $f$$22$$.call($opt_obj$$18$$, $arr2$$4$$[$i$$33$$], $i$$33$$, $arr$$33$$)) {
                return !0;
            }
        }
        return !1;
    }, $goog$array$every$$ = $goog$array$ARRAY_PROTOTYPE_$$.every ? function ($arr$$34$$, $f$$23$$, $opt_obj$$19$$) {
        $goog$asserts$assert$$(null != $arr$$34$$.length);
        return $goog$array$ARRAY_PROTOTYPE_$$.every.call($arr$$34$$, $f$$23$$, $opt_obj$$19$$);
    } : function ($arr$$35$$, $f$$24$$, $opt_obj$$20$$) {
        for (var $l$$8$$ = $arr$$35$$.length, $arr2$$5$$ = $goog$isString$$($arr$$35$$) ? $arr$$35$$.split("") : $arr$$35$$, $i$$34$$ = 0; $i$$34$$ < $l$$8$$; $i$$34$$++) {
            if ($i$$34$$ in $arr2$$5$$ && !$f$$24$$.call($opt_obj$$20$$, $arr2$$5$$[$i$$34$$], $i$$34$$, $arr$$35$$)) {
                return !1;
            }
        }
        return !0;
    };

    function $goog$array$find$$($arr$$38$$, $f$$26_i$$35$$, $opt_obj$$22$$) {
        a: {
            for (var $l$$inline_113$$ = $arr$$38$$.length, $arr2$$inline_114$$ = $goog$isString$$($arr$$38$$) ? $arr$$38$$.split("") : $arr$$38$$, $i$$inline_115$$ = 0; $i$$inline_115$$ < $l$$inline_113$$; $i$$inline_115$$++) {
                if ($i$$inline_115$$ in $arr2$$inline_114$$ && $f$$26_i$$35$$.call($opt_obj$$22$$, $arr2$$inline_114$$[$i$$inline_115$$], $i$$inline_115$$, $arr$$38$$)) {
                    $f$$26_i$$35$$ = $i$$inline_115$$;
                    break a;
                }
            }
            $f$$26_i$$35$$ = -1;
        }
        return 0 > $f$$26_i$$35$$ ? null : $goog$isString$$($arr$$38$$) ? $arr$$38$$.charAt($f$$26_i$$35$$) : $arr$$38$$[$f$$26_i$$35$$];
    }

    function $goog$array$contains$$($arr$$42$$, $obj$$80$$) {
        return 0 <= $goog$array$indexOf$$($arr$$42$$, $obj$$80$$);
    }

    function $goog$array$clear$$($arr$$44$$) {
        if (!$goog$isArray$$($arr$$44$$)) {
            for (var $i$$39$$ = $arr$$44$$.length - 1; 0 <= $i$$39$$; $i$$39$$--) {
                delete $arr$$44$$[$i$$39$$];
            }
        }
        $arr$$44$$.length = 0;
    }

    function $goog$array$insert$$($arr$$45$$, $obj$$81$$) {
        $goog$array$contains$$($arr$$45$$, $obj$$81$$) || $arr$$45$$.push($obj$$81$$);
    }

    function $goog$array$remove$$($arr$$49$$, $obj$$84$$) {
        var $i$$41$$ = $goog$array$indexOf$$($arr$$49$$, $obj$$84$$), $rv$$7$$;
        ($rv$$7$$ = 0 <= $i$$41$$) && $goog$array$removeAt$$($arr$$49$$, $i$$41$$);
        return $rv$$7$$;
    }

    function $goog$array$removeAt$$($arr$$50$$, $i$$42$$) {
        $goog$asserts$assert$$(null != $arr$$50$$.length);
        $goog$array$ARRAY_PROTOTYPE_$$.splice.call($arr$$50$$, $i$$42$$, 1);
    }

    function $goog$array$concat$$($var_args$$68$$) {
        return $goog$array$ARRAY_PROTOTYPE_$$.concat.apply($goog$array$ARRAY_PROTOTYPE_$$, arguments);
    }

    function $goog$array$toArray$$($object$$7$$) {
        var $length$$18$$ = $object$$7$$.length;
        if (0 < $length$$18$$) {
            for (var $rv$$8$$ = Array($length$$18$$), $i$$44$$ = 0; $i$$44$$ < $length$$18$$; $i$$44$$++) {
                $rv$$8$$[$i$$44$$] = $object$$7$$[$i$$44$$];
            }
            return $rv$$8$$;
        }
        return [];
    }

    function $goog$array$extend$$($arr1$$, $var_args$$70$$) {
        for (var $i$$45$$ = 1; $i$$45$$ < arguments.length; $i$$45$$++) {
            var $arr2$$8$$ = arguments[$i$$45$$], $isArrayLike$$1$$;
            if ($goog$isArray$$($arr2$$8$$) || ($isArrayLike$$1$$ = $goog$isArrayLike$$($arr2$$8$$)) && Object.prototype.hasOwnProperty.call($arr2$$8$$, "callee")) {
                $arr1$$.push.apply($arr1$$, $arr2$$8$$);
            } else {
                if ($isArrayLike$$1$$) {
                    for (var $len1$$ = $arr1$$.length, $len2$$ = $arr2$$8$$.length, $j$$2$$ = 0; $j$$2$$ < $len2$$; $j$$2$$++) {
                        $arr1$$[$len1$$ + $j$$2$$] = $arr2$$8$$[$j$$2$$];
                    }
                } else {
                    $arr1$$.push($arr2$$8$$);
                }
            }
        }
    }

    function $goog$array$slice$$($arr$$53$$, $start$$7$$, $opt_end$$13$$) {
        $goog$asserts$assert$$(null != $arr$$53$$.length);
        return 2 >= arguments.length ? $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$53$$, $start$$7$$) : $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$53$$, $start$$7$$, $opt_end$$13$$);
    }

    function $goog$array$sort$$($arr$$58$$, $opt_compareFn$$1$$) {
        $arr$$58$$.sort($opt_compareFn$$1$$ || $goog$array$defaultCompare$$);
    }

    function $goog$array$defaultCompare$$($a$$11$$, $b$$4$$) {
        return $a$$11$$ > $b$$4$$ ? 1 : $a$$11$$ < $b$$4$$ ? -1 : 0;
    }

    function $goog$array$bucket$$($array$$12$$, $sorter$$, $opt_obj$$28$$) {
        for (var $buckets$$ = {}, $i$$50$$ = 0; $i$$50$$ < $array$$12$$.length; $i$$50$$++) {
            var $value$$77$$ = $array$$12$$[$i$$50$$], $key$$50$$ = $sorter$$.call($opt_obj$$28$$, $value$$77$$, $i$$50$$, $array$$12$$);
            $goog$isDef$$($key$$50$$) && ($buckets$$[$key$$50$$] || ($buckets$$[$key$$50$$] = [])).push($value$$77$$);
        }
        return $buckets$$;
    }

    function $goog$array$toObject$$($arr$$62$$, $keyFunc$$, $opt_obj$$29$$) {
        var $ret$$1$$ = {};
        $goog$array$forEach$$($arr$$62$$, function ($element$$6$$, $index$$54$$) {
            $ret$$1$$[$keyFunc$$.call($opt_obj$$29$$, $element$$6$$, $index$$54$$, $arr$$62$$)] = $element$$6$$;
        });
        return $ret$$1$$;
    }
    ;
    function $goog$async$nextTick$$($callback$$58$$) {
        $goog$isFunction$$($goog$global$$.setImmediate) ? $goog$global$$.setImmediate($callback$$58$$) : ($goog$async$nextTick$setImmediate_$$ || ($goog$async$nextTick$setImmediate_$$ = $goog$async$nextTick$getSetImmediateEmulator_$$()), $goog$async$nextTick$setImmediate_$$($callback$$58$$));
    }

    var $goog$async$nextTick$setImmediate_$$;

    function $goog$async$nextTick$getSetImmediateEmulator_$$() {
        var $Channel$$ = $goog$global$$.MessageChannel;
        "undefined" === typeof $Channel$$ && "undefined" !== typeof window && window.postMessage && window.addEventListener && ($Channel$$ = function $$Channel$$$() {
            var $doc$$4_iframe_onmessage$$ = document.createElement("iframe");
            $doc$$4_iframe_onmessage$$.style.display = "none";
            $doc$$4_iframe_onmessage$$.src = "";
            document.documentElement.appendChild($doc$$4_iframe_onmessage$$);
            var $win$$ = $doc$$4_iframe_onmessage$$.contentWindow, $doc$$4_iframe_onmessage$$ = $win$$.document;
            $doc$$4_iframe_onmessage$$.open();
            $doc$$4_iframe_onmessage$$.write("");
            $doc$$4_iframe_onmessage$$.close();
            var $message$$23$$ = "callImmediate" + Math.random(), $origin$$ = $win$$.location.protocol + "//" + $win$$.location.host, $doc$$4_iframe_onmessage$$ = $goog$bind$$(function ($e$$18$$) {
                if ($e$$18$$.origin == $origin$$ || $e$$18$$.data == $message$$23$$) {
                    this.port1.onmessage();
                }
            }, this);
            $win$$.addEventListener("message", $doc$$4_iframe_onmessage$$, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function $this$port2$postMessage$() {
                    $win$$.postMessage($message$$23$$, $origin$$);
                }
            };
        });
        if ("undefined" !== typeof $Channel$$) {
            var $channel$$ = new $Channel$$, $head$$ = {}, $tail$$ = $head$$;
            $channel$$.port1.onmessage = function $$channel$$$port1$onmessage$() {
                $head$$ = $head$$.next;
                var $cb$$1$$ = $head$$.$cb$;
                $head$$.$cb$ = null;
                $cb$$1$$();
            };
            return function ($cb$$2$$) {
                $tail$$.next = {$cb$: $cb$$2$$};
                $tail$$ = $tail$$.next;
                $channel$$.port2.postMessage(0);
            };
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function ($cb$$3$$) {
            var $script$$1$$ = document.createElement("script");
            $script$$1$$.onreadystatechange = function $$script$$1$$$onreadystatechange$() {
                $script$$1$$.onreadystatechange = null;
                $script$$1$$.parentNode.removeChild($script$$1$$);
                $script$$1$$ = null;
                $cb$$3$$();
                $cb$$3$$ = null;
            };
            document.documentElement.appendChild($script$$1$$);
        } : function ($cb$$4$$) {
            $goog$global$$.setTimeout($cb$$4$$, 0);
        };
    }
    ;
    function $goog$dom$classlist$get$$($className$$9_element$$17$$) {
        if ($className$$9_element$$17$$.classList) {
            return $className$$9_element$$17$$.classList;
        }
        $className$$9_element$$17$$ = $className$$9_element$$17$$.className;
        return $goog$isString$$($className$$9_element$$17$$) && $className$$9_element$$17$$.match(/\S+/g) || [];
    }

    function $goog$dom$classlist$contains$$($element$$19$$, $className$$11$$) {
        return $element$$19$$.classList ? $element$$19$$.classList.contains($className$$11$$) : $goog$array$contains$$($goog$dom$classlist$get$$($element$$19$$), $className$$11$$);
    }

    function $goog$dom$classlist$add$$($element$$20$$, $className$$12$$) {
        $element$$20$$.classList ? $element$$20$$.classList.add($className$$12$$) : $goog$dom$classlist$contains$$($element$$20$$, $className$$12$$) || ($element$$20$$.className += 0 < $element$$20$$.className.length ? " " + $className$$12$$ : $className$$12$$);
    }

    function $goog$dom$classlist$addAll$$($element$$21$$, $classesToAdd$$1$$) {
        if ($element$$21$$.classList) {
            $goog$array$forEach$$($classesToAdd$$1$$, function ($className$$14$$) {
                $goog$dom$classlist$add$$($element$$21$$, $className$$14$$);
            });
        } else {
            var $classMap$$ = {};
            $goog$array$forEach$$($goog$dom$classlist$get$$($element$$21$$), function ($className$$15$$) {
                $classMap$$[$className$$15$$] = !0;
            });
            $goog$array$forEach$$($classesToAdd$$1$$, function ($className$$16$$) {
                $classMap$$[$className$$16$$] = !0;
            });
            $element$$21$$.className = "";
            for (var $className$$13$$ in $classMap$$) {
                $element$$21$$.className += 0 < $element$$21$$.className.length ? " " + $className$$13$$ : $className$$13$$;
            }
        }
    }

    function $goog$dom$classlist$remove$$($element$$22$$, $className$$17$$) {
        $element$$22$$.classList ? $element$$22$$.classList.remove($className$$17$$) : $goog$dom$classlist$contains$$($element$$22$$, $className$$17$$) && ($element$$22$$.className = $goog$array$filter$$($goog$dom$classlist$get$$($element$$22$$), function ($c$$2$$) {
            return $c$$2$$ != $className$$17$$;
        }).join(" "));
    }

    function $goog$dom$classlist$removeAll$$($element$$23$$, $classesToRemove$$1$$) {
        $element$$23$$.classList ? $goog$array$forEach$$($classesToRemove$$1$$, function ($className$$18$$) {
            $goog$dom$classlist$remove$$($element$$23$$, $className$$18$$);
        }) : $element$$23$$.className = $goog$array$filter$$($goog$dom$classlist$get$$($element$$23$$), function ($className$$19$$) {
            return !$goog$array$contains$$($classesToRemove$$1$$, $className$$19$$);
        }).join(" ");
    }

    function $goog$dom$classlist$addRemove$$($element$$28$$, $classToRemove$$, $classToAdd$$) {
        $goog$dom$classlist$remove$$($element$$28$$, $classToRemove$$);
        $goog$dom$classlist$add$$($element$$28$$, $classToAdd$$);
    }
    ;
    function $goog$events$ListenerMap$$($src$$5$$) {
        this.src = $src$$5$$;
        this.$listeners$ = {};
        this.$typeCount_$ = 0;
    }

    $goog$events$ListenerMap$$.prototype.add = function $$goog$events$ListenerMap$$$$add$($listenerArray_type$$87$$, $listener$$44_listenerObj$$, $callOnce$$, $opt_useCapture$$37$$, $opt_listenerScope$$) {
        var $typeStr$$ = $listenerArray_type$$87$$.toString();
        $listenerArray_type$$87$$ = this.$listeners$[$typeStr$$];
        $listenerArray_type$$87$$ || ($listenerArray_type$$87$$ = this.$listeners$[$typeStr$$] = [], this.$typeCount_$++);
        var $index$$55$$ = $goog$events$ListenerMap$findListenerIndex_$$($listenerArray_type$$87$$, $listener$$44_listenerObj$$, $opt_useCapture$$37$$, $opt_listenerScope$$);
        -1 < $index$$55$$ ? ($listener$$44_listenerObj$$ = $listenerArray_type$$87$$[$index$$55$$], $callOnce$$ || ($listener$$44_listenerObj$$.$callOnce$ = !1)) : ($listener$$44_listenerObj$$ = new $goog$events$Listener$$($listener$$44_listenerObj$$, this.src, $typeStr$$, !!$opt_useCapture$$37$$, $opt_listenerScope$$), $listener$$44_listenerObj$$.$callOnce$ = $callOnce$$, $listenerArray_type$$87$$.push($listener$$44_listenerObj$$));
        return $listener$$44_listenerObj$$;
    };
    $goog$events$ListenerMap$$.prototype.remove = function $$goog$events$ListenerMap$$$$remove$($type$$88_typeStr$$1$$, $index$$56_listener$$45$$, $opt_useCapture$$38$$, $opt_listenerScope$$1$$) {
        $type$$88_typeStr$$1$$ = $type$$88_typeStr$$1$$.toString();
        if (!($type$$88_typeStr$$1$$ in this.$listeners$)) {
            return !1;
        }
        var $listenerArray$$1$$ = this.$listeners$[$type$$88_typeStr$$1$$];
        $index$$56_listener$$45$$ = $goog$events$ListenerMap$findListenerIndex_$$($listenerArray$$1$$, $index$$56_listener$$45$$, $opt_useCapture$$38$$, $opt_listenerScope$$1$$);
        return -1 < $index$$56_listener$$45$$ ? ($JSCompiler_StaticMethods_markAsRemoved$$($listenerArray$$1$$[$index$$56_listener$$45$$]), $goog$array$removeAt$$($listenerArray$$1$$, $index$$56_listener$$45$$), 0 == $listenerArray$$1$$.length && (delete this.$listeners$[$type$$88_typeStr$$1$$], this.$typeCount_$--), !0) : !1;
    };
    function $JSCompiler_StaticMethods_removeByKey$$($JSCompiler_StaticMethods_removeByKey$self$$, $listener$$46$$) {
        var $type$$89$$ = $listener$$46$$.type;
        if (!($type$$89$$ in $JSCompiler_StaticMethods_removeByKey$self$$.$listeners$)) {
            return !1;
        }
        var $removed$$1$$ = $goog$array$remove$$($JSCompiler_StaticMethods_removeByKey$self$$.$listeners$[$type$$89$$], $listener$$46$$);
        $removed$$1$$ && ($JSCompiler_StaticMethods_markAsRemoved$$($listener$$46$$), 0 == $JSCompiler_StaticMethods_removeByKey$self$$.$listeners$[$type$$89$$].length && (delete $JSCompiler_StaticMethods_removeByKey$self$$.$listeners$[$type$$89$$], $JSCompiler_StaticMethods_removeByKey$self$$.$typeCount_$--));
        return $removed$$1$$;
    }

    $goog$events$ListenerMap$$.prototype.removeAll = function $$goog$events$ListenerMap$$$$removeAll$($opt_type$$7_typeStr$$2$$) {
        $opt_type$$7_typeStr$$2$$ = $opt_type$$7_typeStr$$2$$ && $opt_type$$7_typeStr$$2$$.toString();
        var $count$$11$$ = 0, $type$$90$$;
        for ($type$$90$$ in this.$listeners$) {
            if (!$opt_type$$7_typeStr$$2$$ || $type$$90$$ == $opt_type$$7_typeStr$$2$$) {
                for (var $listenerArray$$2$$ = this.$listeners$[$type$$90$$], $i$$62$$ = 0; $i$$62$$ < $listenerArray$$2$$.length; $i$$62$$++) {
                    ++$count$$11$$, $JSCompiler_StaticMethods_markAsRemoved$$($listenerArray$$2$$[$i$$62$$]);
                }
                delete this.$listeners$[$type$$90$$];
                this.$typeCount_$--;
            }
        }
        return $count$$11$$;
    };
    $goog$events$ListenerMap$$.prototype.$getListener$ = function $$goog$events$ListenerMap$$$$$getListener$$($listenerArray$$4_type$$92$$, $listener$$47$$, $capture$$2$$, $opt_listenerScope$$2$$) {
        $listenerArray$$4_type$$92$$ = this.$listeners$[$listenerArray$$4_type$$92$$.toString()];
        var $i$$64$$ = -1;
        $listenerArray$$4_type$$92$$ && ($i$$64$$ = $goog$events$ListenerMap$findListenerIndex_$$($listenerArray$$4_type$$92$$, $listener$$47$$, $capture$$2$$, $opt_listenerScope$$2$$));
        return -1 < $i$$64$$ ? $listenerArray$$4_type$$92$$[$i$$64$$] : null;
    };
    function $goog$events$ListenerMap$findListenerIndex_$$($listenerArray$$6$$, $listener$$48$$, $opt_useCapture$$39$$, $opt_listenerScope$$3$$) {
        for (var $i$$66$$ = 0; $i$$66$$ < $listenerArray$$6$$.length; ++$i$$66$$) {
            var $listenerObj$$3$$ = $listenerArray$$6$$[$i$$66$$];
            if (!$listenerObj$$3$$.$removed$ && $listenerObj$$3$$.$listener$ == $listener$$48$$ && $listenerObj$$3$$.$capture$ == !!$opt_useCapture$$39$$ && $listenerObj$$3$$.$handler$ == $opt_listenerScope$$3$$) {
                return $i$$66$$;
            }
        }
        return -1;
    }
    ;
    var $goog$labs$userAgent$util$userAgent_$$;
    a: {
        var $navigator$$inline_117$$ = $goog$global$$.navigator;
        if ($navigator$$inline_117$$) {
            var $userAgent$$inline_118$$ = $navigator$$inline_117$$.userAgent;
            if ($userAgent$$inline_118$$) {
                $goog$labs$userAgent$util$userAgent_$$ = $userAgent$$inline_118$$;
                break a;
            }
        }
        $goog$labs$userAgent$util$userAgent_$$ = "";
    }
    function $goog$labs$userAgent$util$matchUserAgent$$($str$$71$$) {
        return -1 != $goog$labs$userAgent$util$userAgent_$$.indexOf($str$$71$$);
    }
    ;
    function $goog$labs$userAgent$device$isTablet$$() {
        return $goog$labs$userAgent$util$matchUserAgent$$("iPad") || $goog$labs$userAgent$util$matchUserAgent$$("Android") && !$goog$labs$userAgent$util$matchUserAgent$$("Mobile") || $goog$labs$userAgent$util$matchUserAgent$$("Silk");
    }
    ;
    function $goog$math$Coordinate$$($opt_x$$2$$, $opt_y$$2$$) {
        this.x = $goog$isDef$$($opt_x$$2$$) ? $opt_x$$2$$ : 0;
        this.y = $goog$isDef$$($opt_y$$2$$) ? $opt_y$$2$$ : 0;
    }

    $JSCompiler_prototypeAlias$$ = $goog$math$Coordinate$$.prototype;
    $JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
        return new $goog$math$Coordinate$$(this.x, this.y);
    };
    $JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
        return "(" + this.x + ", " + this.y + ")";
    };
    $JSCompiler_prototypeAlias$$.ceil = function $$JSCompiler_prototypeAlias$$$ceil$() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
    };
    $JSCompiler_prototypeAlias$$.floor = function $$JSCompiler_prototypeAlias$$$floor$() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    };
    $JSCompiler_prototypeAlias$$.round = function $$JSCompiler_prototypeAlias$$$round$() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    };
    var $goog$net$XmlHttp$factory_$$;

    function $goog$net$DefaultXmlHttpFactory$$() {
    }

    $goog$inherits$$($goog$net$DefaultXmlHttpFactory$$, $goog$net$XmlHttpFactory$$);
    function $JSCompiler_StaticMethods_createInstance$$($JSCompiler_StaticMethods_createInstance$self_progId$$1$$) {
        return ($JSCompiler_StaticMethods_createInstance$self_progId$$1$$ = $JSCompiler_StaticMethods_getProgId_$$($JSCompiler_StaticMethods_createInstance$self_progId$$1$$)) ? new ActiveXObject($JSCompiler_StaticMethods_createInstance$self_progId$$1$$) : new XMLHttpRequest;
    }

    function $JSCompiler_StaticMethods_getProgId_$$($JSCompiler_StaticMethods_getProgId_$self$$) {
        if (!$JSCompiler_StaticMethods_getProgId_$self$$.$ieProgId_$ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var $ACTIVE_X_IDENTS$$ = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], $i$$75$$ = 0; $i$$75$$ < $ACTIVE_X_IDENTS$$.length; $i$$75$$++) {
                var $candidate$$1$$ = $ACTIVE_X_IDENTS$$[$i$$75$$];
                try {
                    return new ActiveXObject($candidate$$1$$), $JSCompiler_StaticMethods_getProgId_$self$$.$ieProgId_$ = $candidate$$1$$;
                } catch ($e$$21$$) {
                }
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return $JSCompiler_StaticMethods_getProgId_$self$$.$ieProgId_$;
    }

    $goog$net$XmlHttp$factory_$$ = new $goog$net$DefaultXmlHttpFactory$$;
    function $goog$string$StringBuffer$$($opt_a1$$, $var_args$$85$$) {
        null != $opt_a1$$ && this.append.apply(this, arguments);
    }

    $JSCompiler_prototypeAlias$$ = $goog$string$StringBuffer$$.prototype;
    $JSCompiler_prototypeAlias$$.$buffer_$ = "";
    $JSCompiler_prototypeAlias$$.set = function $$JSCompiler_prototypeAlias$$$set$($s$$25$$) {
        this.$buffer_$ = "" + $s$$25$$;
    };
    $JSCompiler_prototypeAlias$$.append = function $$JSCompiler_prototypeAlias$$$append$($a1$$, $opt_a2$$, $var_args$$86$$) {
        this.$buffer_$ += $a1$$;
        if (null != $opt_a2$$) {
            for (var $i$$76$$ = 1; $i$$76$$ < arguments.length; $i$$76$$++) {
                this.$buffer_$ += arguments[$i$$76$$];
            }
        }
        return this;
    };
    $JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
        this.$buffer_$ = "";
    };
    $JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
        return this.$buffer_$;
    };
    function $goog$string$Const$$() {
        this.$stringConstValueWithSecurityContract__googStringSecurityPrivate_$ = "";
        this.$STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_$ = $goog$string$Const$TYPE_MARKER_$$;
    }

    $goog$string$Const$$.prototype.$implementsGoogStringTypedString$ = !0;
    $goog$string$Const$$.prototype.$getTypedStringValue$ = function $$goog$string$Const$$$$$getTypedStringValue$$() {
        return this.$stringConstValueWithSecurityContract__googStringSecurityPrivate_$;
    };
    $goog$string$Const$$.prototype.toString = function $$goog$string$Const$$$$toString$() {
        return "Const{" + this.$stringConstValueWithSecurityContract__googStringSecurityPrivate_$ + "}";
    };
    function $goog$string$Const$unwrap$$($stringConst$$) {
        if ($stringConst$$ instanceof $goog$string$Const$$ && $stringConst$$.constructor === $goog$string$Const$$ && $stringConst$$.$STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_$ === $goog$string$Const$TYPE_MARKER_$$) {
            return $stringConst$$.$stringConstValueWithSecurityContract__googStringSecurityPrivate_$;
        }
        $goog$asserts$fail$$("expected object of type Const, got '" + $stringConst$$ + "'");
        return "type_error:Const";
    }

    var $goog$string$Const$TYPE_MARKER_$$ = {};

    function $goog$html$SafeStyle$$() {
        this.$privateDoNotAccessOrElseSafeStyleWrappedValue_$ = "";
        this.$SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$ = $goog$html$SafeStyle$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
    }

    $goog$html$SafeStyle$$.prototype.$implementsGoogStringTypedString$ = !0;
    var $goog$html$SafeStyle$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {};
    $goog$html$SafeStyle$$.prototype.$getTypedStringValue$ = function $$goog$html$SafeStyle$$$$$getTypedStringValue$$() {
        return this.$privateDoNotAccessOrElseSafeStyleWrappedValue_$;
    };
    $goog$html$SafeStyle$$.prototype.toString = function $$goog$html$SafeStyle$$$$toString$() {
        return "SafeStyle{" + this.$privateDoNotAccessOrElseSafeStyleWrappedValue_$ + "}";
    };
    function $goog$html$SafeStyle$createSafeStyleSecurityPrivateDoNotAccessOrElse_$$($style$$2$$) {
        var $safeStyle$$1$$ = new $goog$html$SafeStyle$$;
        $safeStyle$$1$$.$privateDoNotAccessOrElseSafeStyleWrappedValue_$ = $style$$2$$;
        return $safeStyle$$1$$;
    }

    var $goog$html$SafeStyle$EMPTY$$ = $goog$html$SafeStyle$createSafeStyleSecurityPrivateDoNotAccessOrElse_$$(""), $goog$html$SafeStyle$VALUE_RE_$$ = /^[-.%_!# a-zA-Z0-9]+$/;

    function $goog$html$SafeUrl$$() {
        this.$privateDoNotAccessOrElseSafeHtmlWrappedValue_$ = "";
        this.$SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$ = $goog$html$SafeUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
    }

    $JSCompiler_prototypeAlias$$ = $goog$html$SafeUrl$$.prototype;
    $JSCompiler_prototypeAlias$$.$implementsGoogStringTypedString$ = !0;
    $JSCompiler_prototypeAlias$$.$getTypedStringValue$ = function $$JSCompiler_prototypeAlias$$$$getTypedStringValue$$() {
        return this.$privateDoNotAccessOrElseSafeHtmlWrappedValue_$;
    };
    $JSCompiler_prototypeAlias$$.$implementsGoogI18nBidiDirectionalString$ = !0;
    $JSCompiler_prototypeAlias$$.$getDirection$ = function $$JSCompiler_prototypeAlias$$$$getDirection$$() {
        return 1;
    };
    $JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
        return "SafeUrl{" + this.$privateDoNotAccessOrElseSafeHtmlWrappedValue_$ + "}";
    };
    var $goog$html$SafeUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {};

    function $goog$html$SafeHtml$$() {
        this.$privateDoNotAccessOrElseSafeHtmlWrappedValue_$ = "";
        this.$SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$ = $goog$html$SafeHtml$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$;
        this.$dir_$ = null;
    }

    $JSCompiler_prototypeAlias$$ = $goog$html$SafeHtml$$.prototype;
    $JSCompiler_prototypeAlias$$.$implementsGoogI18nBidiDirectionalString$ = !0;
    $JSCompiler_prototypeAlias$$.$getDirection$ = function $$JSCompiler_prototypeAlias$$$$getDirection$$() {
        return this.$dir_$;
    };
    $JSCompiler_prototypeAlias$$.$implementsGoogStringTypedString$ = !0;
    $JSCompiler_prototypeAlias$$.$getTypedStringValue$ = function $$JSCompiler_prototypeAlias$$$$getTypedStringValue$$() {
        return this.$privateDoNotAccessOrElseSafeHtmlWrappedValue_$;
    };
    $JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
        return "SafeHtml{" + this.$privateDoNotAccessOrElseSafeHtmlWrappedValue_$ + "}";
    };
    function $goog$html$SafeHtml$unwrap$$($safeHtml$$) {
        if ($safeHtml$$ instanceof $goog$html$SafeHtml$$ && $safeHtml$$.constructor === $goog$html$SafeHtml$$ && $safeHtml$$.$SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$ === $goog$html$SafeHtml$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$) {
            return $safeHtml$$.$privateDoNotAccessOrElseSafeHtmlWrappedValue_$;
        }
        $goog$asserts$fail$$("expected object of type SafeHtml, got '" + $safeHtml$$ + "'");
        return "type_error:SafeHtml";
    }

    var $goog$html$SafeHtml$VALID_NAMES_IN_TAG_$$ = /^[a-zA-Z0-9-]+$/, $goog$html$SafeHtml$URL_ATTRIBUTES_$$ = $goog$object$createSet$$("action", "cite", "data", "formaction", "href", "manifest", "poster", "src"), $goog$html$SafeHtml$NOT_ALLOWED_TAG_NAMES_$$ = $goog$object$createSet$$("link", "script", "style");

    function $goog$html$SafeHtml$concat$$($var_args$$88$$) {
        function $addArgument$$1$$($argument$$1_html$$5_htmlDir$$) {
            if ($goog$isArray$$($argument$$1_html$$5_htmlDir$$)) {
                $goog$array$forEach$$($argument$$1_html$$5_htmlDir$$, $addArgument$$1$$);
            } else {
                if (!($argument$$1_html$$5_htmlDir$$ instanceof $goog$html$SafeHtml$$)) {
                    var $dir$$inline_133$$ = null;
                    $argument$$1_html$$5_htmlDir$$.$implementsGoogI18nBidiDirectionalString$ && ($dir$$inline_133$$ = $argument$$1_html$$5_htmlDir$$.$getDirection$());
                    $argument$$1_html$$5_htmlDir$$ = $goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse_$$($goog$string$htmlEscape$$($argument$$1_html$$5_htmlDir$$.$implementsGoogStringTypedString$ ? $argument$$1_html$$5_htmlDir$$.$getTypedStringValue$() : String($argument$$1_html$$5_htmlDir$$)), $dir$$inline_133$$);
                }
                $content$$5$$ += $goog$html$SafeHtml$unwrap$$($argument$$1_html$$5_htmlDir$$);
                $argument$$1_html$$5_htmlDir$$ = $argument$$1_html$$5_htmlDir$$.$getDirection$();
                0 == $dir$$5$$ ? $dir$$5$$ = $argument$$1_html$$5_htmlDir$$ : 0 != $argument$$1_html$$5_htmlDir$$ && $dir$$5$$ != $argument$$1_html$$5_htmlDir$$ && ($dir$$5$$ = null);
            }
        }

        var $dir$$5$$ = 0, $content$$5$$ = "";
        $goog$array$forEach$$(arguments, $addArgument$$1$$);
        return $goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse_$$($content$$5$$, $dir$$5$$);
    }

    var $goog$html$SafeHtml$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {};

    function $goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse_$$($html$$7$$, $dir$$7$$) {
        var $safeHtml$$1$$ = new $goog$html$SafeHtml$$;
        $safeHtml$$1$$.$privateDoNotAccessOrElseSafeHtmlWrappedValue_$ = $html$$7$$;
        $safeHtml$$1$$.$dir_$ = $dir$$7$$;
        return $safeHtml$$1$$;
    }

    $goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse_$$("", 0);
    function $goog$structs$Map$$($opt_map$$, $var_args$$90$$) {
        this.$map_$ = {};
        this.$keys_$ = [];
        this.$count_$ = 0;
        var $argLength$$2$$ = arguments.length;
        if (1 < $argLength$$2$$) {
            if ($argLength$$2$$ % 2) {
                throw Error("Uneven number of arguments");
            }
            for (var $i$$78$$ = 0; $i$$78$$ < $argLength$$2$$; $i$$78$$ += 2) {
                this.set(arguments[$i$$78$$], arguments[$i$$78$$ + 1]);
            }
        } else {
            $opt_map$$ && this.$addAll$($opt_map$$);
        }
    }

    $JSCompiler_prototypeAlias$$ = $goog$structs$Map$$.prototype;
    $JSCompiler_prototypeAlias$$.$getCount$ = function $$JSCompiler_prototypeAlias$$$$getCount$$() {
        return this.$count_$;
    };
    $JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
        $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
        for (var $rv$$12$$ = [], $i$$79$$ = 0; $i$$79$$ < this.$keys_$.length; $i$$79$$++) {
            $rv$$12$$.push(this.$map_$[this.$keys_$[$i$$79$$]]);
        }
        return $rv$$12$$;
    };
    $JSCompiler_prototypeAlias$$.$getKeys$ = function $$JSCompiler_prototypeAlias$$$$getKeys$$() {
        $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
        return this.$keys_$.concat();
    };
    $JSCompiler_prototypeAlias$$.$containsKey$ = function $$JSCompiler_prototypeAlias$$$$containsKey$$($key$$53$$) {
        return $goog$structs$Map$hasKey_$$(this.$map_$, $key$$53$$);
    };
    $JSCompiler_prototypeAlias$$.$isEmpty$ = function $$JSCompiler_prototypeAlias$$$$isEmpty$$() {
        return 0 == this.$count_$;
    };
    $JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
        this.$map_$ = {};
        this.$count_$ = this.$keys_$.length = 0;
    };
    $JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($key$$56$$) {
        return $goog$structs$Map$hasKey_$$(this.$map_$, $key$$56$$) ? (delete this.$map_$[$key$$56$$], this.$count_$--, this.$keys_$.length > 2 * this.$count_$ && $JSCompiler_StaticMethods_cleanupKeysArray_$$(this), !0) : !1;
    };
    function $JSCompiler_StaticMethods_cleanupKeysArray_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$) {
        if ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$count_$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length) {
            for (var $srcIndex$$ = 0, $destIndex$$ = 0; $srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length;) {
                var $key$$57$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$srcIndex$$];
                $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$map_$, $key$$57$$) && ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$destIndex$$++] = $key$$57$$);
                $srcIndex$$++;
            }
            $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length = $destIndex$$;
        }
        if ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$count_$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length) {
            for (var $seen$$2$$ = {}, $destIndex$$ = $srcIndex$$ = 0; $srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length;) {
                $key$$57$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$srcIndex$$], $goog$structs$Map$hasKey_$$($seen$$2$$, $key$$57$$) || ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$destIndex$$++] = $key$$57$$, $seen$$2$$[$key$$57$$] = 1), $srcIndex$$++;
            }
            $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length = $destIndex$$;
        }
    }

    $JSCompiler_prototypeAlias$$.get = function $$JSCompiler_prototypeAlias$$$get$($key$$58$$, $opt_val$$1$$) {
        return $goog$structs$Map$hasKey_$$(this.$map_$, $key$$58$$) ? this.$map_$[$key$$58$$] : $opt_val$$1$$;
    };
    $JSCompiler_prototypeAlias$$.set = function $$JSCompiler_prototypeAlias$$$set$($key$$59$$, $value$$95$$) {
        $goog$structs$Map$hasKey_$$(this.$map_$, $key$$59$$) || (this.$count_$++, this.$keys_$.push($key$$59$$));
        this.$map_$[$key$$59$$] = $value$$95$$;
    };
    $JSCompiler_prototypeAlias$$.$addAll$ = function $$JSCompiler_prototypeAlias$$$$addAll$$($map$$1_values$$4$$) {
        var $keys$$3$$;
        $map$$1_values$$4$$ instanceof $goog$structs$Map$$ ? ($keys$$3$$ = $map$$1_values$$4$$.$getKeys$(), $map$$1_values$$4$$ = $map$$1_values$$4$$.$getValues$()) : ($keys$$3$$ = $goog$object$getKeys$$($map$$1_values$$4$$), $map$$1_values$$4$$ = $goog$object$getValues$$($map$$1_values$$4$$));
        for (var $i$$82$$ = 0; $i$$82$$ < $keys$$3$$.length; $i$$82$$++) {
            this.set($keys$$3$$[$i$$82$$], $map$$1_values$$4$$[$i$$82$$]);
        }
    };
    $JSCompiler_prototypeAlias$$.forEach = function $$JSCompiler_prototypeAlias$$$forEach$($f$$42$$, $opt_obj$$40$$) {
        for (var $keys$$4$$ = this.$getKeys$(), $i$$83$$ = 0; $i$$83$$ < $keys$$4$$.length; $i$$83$$++) {
            var $key$$60$$ = $keys$$4$$[$i$$83$$], $value$$96$$ = this.get($key$$60$$);
            $f$$42$$.call($opt_obj$$40$$, $value$$96$$, $key$$60$$, this);
        }
    };
    $JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
        return new $goog$structs$Map$$(this);
    };
    function $goog$structs$Map$hasKey_$$($obj$$86$$, $key$$64$$) {
        return Object.prototype.hasOwnProperty.call($obj$$86$$, $key$$64$$);
    }
    ;
    function $goog$structs$Node$$($key$$65$$, $value$$98$$) {
        this.$key_$ = $key$$65$$;
        this.$value_$ = $value$$98$$;
    }

    $goog$structs$Node$$.prototype.getKey = function $$goog$structs$Node$$$$getKey$() {
        return this.$key_$;
    };
    $goog$structs$Node$$.prototype.getValue = function $$goog$structs$Node$$$$getValue$() {
        return this.$value_$;
    };
    $goog$structs$Node$$.prototype.clone = function $$goog$structs$Node$$$$clone$() {
        return new $goog$structs$Node$$(this.$key_$, this.$value_$);
    };
    function $goog$structs$Heap$$($nodes$$inline_139_opt_heap$$) {
        this.$nodes_$ = [];
        if ($nodes$$inline_139_opt_heap$$) {
            a: {
                var $keys$$inline_137$$, $values$$inline_138$$;
                if ($nodes$$inline_139_opt_heap$$ instanceof $goog$structs$Heap$$) {
                    if ($keys$$inline_137$$ = $nodes$$inline_139_opt_heap$$.$getKeys$(), $values$$inline_138$$ = $nodes$$inline_139_opt_heap$$.$getValues$(), 0 >= $nodes$$inline_139_opt_heap$$.$getCount$()) {
                        $nodes$$inline_139_opt_heap$$ = this.$nodes_$;
                        for (var $i$$inline_140$$ = 0; $i$$inline_140$$ < $keys$$inline_137$$.length; $i$$inline_140$$++) {
                            $nodes$$inline_139_opt_heap$$.push(new $goog$structs$Node$$($keys$$inline_137$$[$i$$inline_140$$], $values$$inline_138$$[$i$$inline_140$$]));
                        }
                        break a;
                    }
                } else {
                    $keys$$inline_137$$ = $goog$object$getKeys$$($nodes$$inline_139_opt_heap$$), $values$$inline_138$$ = $goog$object$getValues$$($nodes$$inline_139_opt_heap$$);
                }
                for ($i$$inline_140$$ = 0; $i$$inline_140$$ < $keys$$inline_137$$.length; $i$$inline_140$$++) {
                    $JSCompiler_StaticMethods_insert$$(this, $keys$$inline_137$$[$i$$inline_140$$], $values$$inline_138$$[$i$$inline_140$$]);
                }
            }
        }
    }

    function $JSCompiler_StaticMethods_insert$$($JSCompiler_StaticMethods_insert$self_nodes$$inline_144$$, $index$$inline_143_key$$66$$, $node$$inline_145_value$$99$$) {
        var $nodes_parentIndex$$inline_146$$ = $JSCompiler_StaticMethods_insert$self_nodes$$inline_144$$.$nodes_$;
        $nodes_parentIndex$$inline_146$$.push(new $goog$structs$Node$$($index$$inline_143_key$$66$$, $node$$inline_145_value$$99$$));
        $index$$inline_143_key$$66$$ = $nodes_parentIndex$$inline_146$$.length - 1;
        $JSCompiler_StaticMethods_insert$self_nodes$$inline_144$$ = $JSCompiler_StaticMethods_insert$self_nodes$$inline_144$$.$nodes_$;
        for ($node$$inline_145_value$$99$$ = $JSCompiler_StaticMethods_insert$self_nodes$$inline_144$$[$index$$inline_143_key$$66$$]; 0 < $index$$inline_143_key$$66$$;) {
            if ($nodes_parentIndex$$inline_146$$ = $index$$inline_143_key$$66$$ - 1 >> 1, $JSCompiler_StaticMethods_insert$self_nodes$$inline_144$$[$nodes_parentIndex$$inline_146$$].getKey() > $node$$inline_145_value$$99$$.getKey()) {
                $JSCompiler_StaticMethods_insert$self_nodes$$inline_144$$[$index$$inline_143_key$$66$$] = $JSCompiler_StaticMethods_insert$self_nodes$$inline_144$$[$nodes_parentIndex$$inline_146$$], $index$$inline_143_key$$66$$ = $nodes_parentIndex$$inline_146$$;
            } else {
                break;
            }
        }
        $JSCompiler_StaticMethods_insert$self_nodes$$inline_144$$[$index$$inline_143_key$$66$$] = $node$$inline_145_value$$99$$;
    }

    $JSCompiler_prototypeAlias$$ = $goog$structs$Heap$$.prototype;
    $JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$() {
        var $index$$inline_149_nodes$$2$$ = this.$nodes_$, $count$$33_nodes$$inline_150$$ = $index$$inline_149_nodes$$2$$.length, $rootNode$$ = $index$$inline_149_nodes$$2$$[0];
        if (!(0 >= $count$$33_nodes$$inline_150$$)) {
            if (1 == $count$$33_nodes$$inline_150$$) {
                $goog$array$clear$$($index$$inline_149_nodes$$2$$);
            } else {
                $index$$inline_149_nodes$$2$$[0] = $index$$inline_149_nodes$$2$$.pop();
                for (var $index$$inline_149_nodes$$2$$ = 0, $count$$33_nodes$$inline_150$$ = this.$nodes_$, $count$$inline_151$$ = $count$$33_nodes$$inline_150$$.length, $node$$inline_152$$ = $count$$33_nodes$$inline_150$$[$index$$inline_149_nodes$$2$$]; $index$$inline_149_nodes$$2$$ < $count$$inline_151$$ >> 1;) {
                    var $leftChildIndex$$inline_153_smallerChildIndex$$inline_155$$ = 2 * $index$$inline_149_nodes$$2$$ + 1, $rightChildIndex$$inline_154$$ = 2 * $index$$inline_149_nodes$$2$$ + 2, $leftChildIndex$$inline_153_smallerChildIndex$$inline_155$$ = $rightChildIndex$$inline_154$$ < $count$$inline_151$$ && $count$$33_nodes$$inline_150$$[$rightChildIndex$$inline_154$$].getKey() < $count$$33_nodes$$inline_150$$[$leftChildIndex$$inline_153_smallerChildIndex$$inline_155$$].getKey() ? $rightChildIndex$$inline_154$$ :
                        $leftChildIndex$$inline_153_smallerChildIndex$$inline_155$$;
                    if ($count$$33_nodes$$inline_150$$[$leftChildIndex$$inline_153_smallerChildIndex$$inline_155$$].getKey() > $node$$inline_152$$.getKey()) {
                        break;
                    }
                    $count$$33_nodes$$inline_150$$[$index$$inline_149_nodes$$2$$] = $count$$33_nodes$$inline_150$$[$leftChildIndex$$inline_153_smallerChildIndex$$inline_155$$];
                    $index$$inline_149_nodes$$2$$ = $leftChildIndex$$inline_153_smallerChildIndex$$inline_155$$;
                }
                $count$$33_nodes$$inline_150$$[$index$$inline_149_nodes$$2$$] = $node$$inline_152$$;
            }
            return $rootNode$$.getValue();
        }
    };
    $JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
        for (var $nodes$$6$$ = this.$nodes_$, $rv$$13$$ = [], $l$$16$$ = $nodes$$6$$.length, $i$$88$$ = 0; $i$$88$$ < $l$$16$$; $i$$88$$++) {
            $rv$$13$$.push($nodes$$6$$[$i$$88$$].getValue());
        }
        return $rv$$13$$;
    };
    $JSCompiler_prototypeAlias$$.$getKeys$ = function $$JSCompiler_prototypeAlias$$$$getKeys$$() {
        for (var $nodes$$7$$ = this.$nodes_$, $rv$$14$$ = [], $l$$17$$ = $nodes$$7$$.length, $i$$89$$ = 0; $i$$89$$ < $l$$17$$; $i$$89$$++) {
            $rv$$14$$.push($nodes$$7$$[$i$$89$$].getKey());
        }
        return $rv$$14$$;
    };
    $JSCompiler_prototypeAlias$$.$containsKey$ = function $$JSCompiler_prototypeAlias$$$$containsKey$$($key$$67$$) {
        return $goog$array$some$$(this.$nodes_$, function ($node$$9$$) {
            return $node$$9$$.getKey() == $key$$67$$;
        });
    };
    $JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
        return new $goog$structs$Heap$$(this);
    };
    $JSCompiler_prototypeAlias$$.$getCount$ = function $$JSCompiler_prototypeAlias$$$$getCount$$() {
        return this.$nodes_$.length;
    };
    $JSCompiler_prototypeAlias$$.$isEmpty$ = function $$JSCompiler_prototypeAlias$$$$isEmpty$$() {
        return 0 == this.$nodes_$.length;
    };
    $JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
        $goog$array$clear$$(this.$nodes_$);
    };
    function $goog$structs$PriorityQueue$$() {
        $goog$structs$Heap$$.call(this);
    }

    $goog$inherits$$($goog$structs$PriorityQueue$$, $goog$structs$Heap$$);
    $goog$structs$PriorityQueue$$.prototype.$enqueue$ = function $$goog$structs$PriorityQueue$$$$$enqueue$$($priority$$, $value$$100$$) {
        $JSCompiler_StaticMethods_insert$$(this, $priority$$, $value$$100$$);
    };
    $goog$structs$PriorityQueue$$.prototype.dequeue = function $$goog$structs$PriorityQueue$$$$dequeue$() {
        return this.remove();
    };
    function $goog$structs$Queue$$() {
        this.$front_$ = [];
        this.$back_$ = [];
    }

    $JSCompiler_prototypeAlias$$ = $goog$structs$Queue$$.prototype;
    $JSCompiler_prototypeAlias$$.$enqueue$ = function $$JSCompiler_prototypeAlias$$$$enqueue$$($element$$29$$) {
        this.$back_$.push($element$$29$$);
    };
    $JSCompiler_prototypeAlias$$.dequeue = function $$JSCompiler_prototypeAlias$$$dequeue$() {
        0 == this.$front_$.length && (this.$front_$ = this.$back_$, this.$front_$.reverse(), this.$back_$ = []);
        return this.$front_$.pop();
    };
    $JSCompiler_prototypeAlias$$.$getCount$ = function $$JSCompiler_prototypeAlias$$$$getCount$$() {
        return this.$front_$.length + this.$back_$.length;
    };
    $JSCompiler_prototypeAlias$$.$isEmpty$ = function $$JSCompiler_prototypeAlias$$$$isEmpty$$() {
        return 0 == this.$front_$.length && 0 == this.$back_$.length;
    };
    $JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
        this.$front_$ = [];
        this.$back_$ = [];
    };
    $JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($obj$$87$$) {
        return $goog$array$contains$$(this.$front_$, $obj$$87$$) || $goog$array$contains$$(this.$back_$, $obj$$87$$);
    };
    $JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($obj$$88$$) {
        var $index$$66$$ = $goog$array$lastIndexOf$$(this.$front_$, $obj$$88$$);
        if (0 > $index$$66$$) {
            return $goog$array$remove$$(this.$back_$, $obj$$88$$);
        }
        $goog$array$removeAt$$(this.$front_$, $index$$66$$);
        return !0;
    };
    $JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
        for (var $res$$8$$ = [], $i$$90$$ = this.$front_$.length - 1; 0 <= $i$$90$$; --$i$$90$$) {
            $res$$8$$.push(this.$front_$[$i$$90$$]);
        }
        for (var $len$$1$$ = this.$back_$.length, $i$$90$$ = 0; $i$$90$$ < $len$$1$$; ++$i$$90$$) {
            $res$$8$$.push(this.$back_$[$i$$90$$]);
        }
        return $res$$8$$;
    };
    function $goog$structs$getValues$$($col$$1$$) {
        if ("function" == typeof $col$$1$$.$getValues$) {
            return $col$$1$$.$getValues$();
        }
        if ($goog$isString$$($col$$1$$)) {
            return $col$$1$$.split("");
        }
        if ($goog$isArrayLike$$($col$$1$$)) {
            for (var $rv$$15$$ = [], $l$$18$$ = $col$$1$$.length, $i$$91$$ = 0; $i$$91$$ < $l$$18$$; $i$$91$$++) {
                $rv$$15$$.push($col$$1$$[$i$$91$$]);
            }
            return $rv$$15$$;
        }
        return $goog$object$getValues$$($col$$1$$);
    }

    function $goog$structs$forEach$$($col$$6$$, $f$$43$$) {
        if ("function" == typeof $col$$6$$.forEach) {
            $col$$6$$.forEach($f$$43$$, void 0);
        } else {
            if ($goog$isArrayLike$$($col$$6$$) || $goog$isString$$($col$$6$$)) {
                $goog$array$forEach$$($col$$6$$, $f$$43$$, void 0);
            } else {
                var $keys$$7_rv$$inline_160$$;
                if ("function" == typeof $col$$6$$.$getKeys$) {
                    $keys$$7_rv$$inline_160$$ = $col$$6$$.$getKeys$();
                } else {
                    if ("function" != typeof $col$$6$$.$getValues$) {
                        if ($goog$isArrayLike$$($col$$6$$) || $goog$isString$$($col$$6$$)) {
                            $keys$$7_rv$$inline_160$$ = [];
                            for (var $l$$inline_161_values$$6$$ = $col$$6$$.length, $i$$inline_162_l$$20$$ = 0; $i$$inline_162_l$$20$$ < $l$$inline_161_values$$6$$; $i$$inline_162_l$$20$$++) {
                                $keys$$7_rv$$inline_160$$.push($i$$inline_162_l$$20$$);
                            }
                        } else {
                            $keys$$7_rv$$inline_160$$ = $goog$object$getKeys$$($col$$6$$);
                        }
                    } else {
                        $keys$$7_rv$$inline_160$$ = void 0;
                    }
                }
                for (var $l$$inline_161_values$$6$$ = $goog$structs$getValues$$($col$$6$$), $i$$inline_162_l$$20$$ = $l$$inline_161_values$$6$$.length, $i$$93$$ = 0; $i$$93$$ < $i$$inline_162_l$$20$$; $i$$93$$++) {
                    $f$$43$$.call(void 0, $l$$inline_161_values$$6$$[$i$$93$$], $keys$$7_rv$$inline_160$$ && $keys$$7_rv$$inline_160$$[$i$$93$$], $col$$6$$);
                }
            }
        }
    }
    ;
    function $goog$structs$Set$$($opt_values$$1$$) {
        this.$map_$ = new $goog$structs$Map$$;
        $opt_values$$1$$ && this.$addAll$($opt_values$$1$$);
    }

    function $goog$structs$Set$getKey_$$($val$$33$$) {
        var $type$$94$$ = typeof $val$$33$$;
        return "object" == $type$$94$$ && $val$$33$$ || "function" == $type$$94$$ ? "o" + $goog$getUid$$($val$$33$$) : $type$$94$$.substr(0, 1) + $val$$33$$;
    }

    $JSCompiler_prototypeAlias$$ = $goog$structs$Set$$.prototype;
    $JSCompiler_prototypeAlias$$.$getCount$ = function $$JSCompiler_prototypeAlias$$$$getCount$$() {
        return this.$map_$.$getCount$();
    };
    $JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($element$$30$$) {
        this.$map_$.set($goog$structs$Set$getKey_$$($element$$30$$), $element$$30$$);
    };
    $JSCompiler_prototypeAlias$$.$addAll$ = function $$JSCompiler_prototypeAlias$$$$addAll$$($col$$11_values$$11$$) {
        $col$$11_values$$11$$ = $goog$structs$getValues$$($col$$11_values$$11$$);
        for (var $l$$25$$ = $col$$11_values$$11$$.length, $i$$98$$ = 0; $i$$98$$ < $l$$25$$; $i$$98$$++) {
            this.add($col$$11_values$$11$$[$i$$98$$]);
        }
    };
    $JSCompiler_prototypeAlias$$.removeAll = function $$JSCompiler_prototypeAlias$$$removeAll$($col$$12_values$$12$$) {
        $col$$12_values$$12$$ = $goog$structs$getValues$$($col$$12_values$$12$$);
        for (var $l$$26$$ = $col$$12_values$$12$$.length, $i$$99$$ = 0; $i$$99$$ < $l$$26$$; $i$$99$$++) {
            this.remove($col$$12_values$$12$$[$i$$99$$]);
        }
    };
    $JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($element$$31$$) {
        return this.$map_$.remove($goog$structs$Set$getKey_$$($element$$31$$));
    };
    $JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
        this.$map_$.clear();
    };
    $JSCompiler_prototypeAlias$$.$isEmpty$ = function $$JSCompiler_prototypeAlias$$$$isEmpty$$() {
        return this.$map_$.$isEmpty$();
    };
    $JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($element$$32$$) {
        return this.$map_$.$containsKey$($goog$structs$Set$getKey_$$($element$$32$$));
    };
    $JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
        return this.$map_$.$getValues$();
    };
    $JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
        return new $goog$structs$Set$$(this);
    };
    function $goog$structs$Pool$$($opt_minCount$$, $opt_maxCount$$) {
        $goog$Disposable$$.call(this);
        this.$minCount_$ = $opt_minCount$$ || 0;
        this.$maxCount_$ = $opt_maxCount$$ || 10;
        if (this.$minCount_$ > this.$maxCount_$) {
            throw Error($goog$structs$Pool$ERROR_MIN_MAX_$$);
        }
        this.$freeQueue_$ = new $goog$structs$Queue$$;
        this.$inUseSet_$ = new $goog$structs$Set$$;
        this.delay = 0;
        this.$lastAccess$ = null;
        this.$adjustForMinMax$();
    }

    $goog$inherits$$($goog$structs$Pool$$, $goog$Disposable$$);
    var $goog$structs$Pool$ERROR_MIN_MAX_$$ = "[goog.structs.Pool] Min can not be greater than max";
    $JSCompiler_prototypeAlias$$ = $goog$structs$Pool$$.prototype;
    $JSCompiler_prototypeAlias$$.$getObject$ = function $$JSCompiler_prototypeAlias$$$$getObject$$() {
        var $time$$1$$ = $goog$now$$();
        if (!(null != this.$lastAccess$ && $time$$1$$ - this.$lastAccess$ < this.delay)) {
            for (var $obj$$89_obj$$inline_165$$; 0 < this.$freeQueue_$.$getCount$() && ($obj$$89_obj$$inline_165$$ = this.$freeQueue_$.dequeue(), !this.$objectCanBeReused$($obj$$89_obj$$inline_165$$));) {
                this.$adjustForMinMax$();
            }
            !$obj$$89_obj$$inline_165$$ && this.$getCount$() < this.$maxCount_$ && ($obj$$89_obj$$inline_165$$ = this.$createObject$());
            $obj$$89_obj$$inline_165$$ && (this.$lastAccess$ = $time$$1$$, this.$inUseSet_$.add($obj$$89_obj$$inline_165$$));
            return $obj$$89_obj$$inline_165$$;
        }
    };
    $JSCompiler_prototypeAlias$$.$addFreeObject$ = function $$JSCompiler_prototypeAlias$$$$addFreeObject$$($obj$$92$$) {
        this.$inUseSet_$.remove($obj$$92$$);
        this.$objectCanBeReused$($obj$$92$$) && this.$getCount$() < this.$maxCount_$ ? this.$freeQueue_$.$enqueue$($obj$$92$$) : $JSCompiler_StaticMethods_disposeObject$$($obj$$92$$);
    };
    $JSCompiler_prototypeAlias$$.$adjustForMinMax$ = function $$JSCompiler_prototypeAlias$$$$adjustForMinMax$$() {
        for (var $freeQueue$$ = this.$freeQueue_$; this.$getCount$() < this.$minCount_$;) {
            $freeQueue$$.$enqueue$(this.$createObject$());
        }
        for (; this.$getCount$() > this.$maxCount_$ && 0 < this.$freeQueue_$.$getCount$();) {
            $JSCompiler_StaticMethods_disposeObject$$($freeQueue$$.dequeue());
        }
    };
    $JSCompiler_prototypeAlias$$.$createObject$ = function $$JSCompiler_prototypeAlias$$$$createObject$$() {
        return {};
    };
    function $JSCompiler_StaticMethods_disposeObject$$($obj$$93$$) {
        if ("function" == typeof $obj$$93$$.$dispose$) {
            $obj$$93$$.$dispose$();
        } else {
            for (var $i$$101$$ in $obj$$93$$) {
                $obj$$93$$[$i$$101$$] = null;
            }
        }
    }

    $JSCompiler_prototypeAlias$$.$objectCanBeReused$ = function $$JSCompiler_prototypeAlias$$$$objectCanBeReused$$($obj$$94$$) {
        return "function" == typeof $obj$$94$$.$canBeReused$ ? $obj$$94$$.$canBeReused$() : !0;
    };
    $JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($obj$$95$$) {
        return this.$freeQueue_$.contains($obj$$95$$) || this.$inUseSet_$.contains($obj$$95$$);
    };
    $JSCompiler_prototypeAlias$$.$getCount$ = function $$JSCompiler_prototypeAlias$$$$getCount$$() {
        return this.$freeQueue_$.$getCount$() + this.$inUseSet_$.$getCount$();
    };
    $JSCompiler_prototypeAlias$$.$isEmpty$ = function $$JSCompiler_prototypeAlias$$$$isEmpty$$() {
        return this.$freeQueue_$.$isEmpty$() && this.$inUseSet_$.$isEmpty$();
    };
    $JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
        $goog$structs$Pool$$.$superClass_$.$disposeInternal$.call(this);
        if (0 < this.$inUseSet_$.$getCount$()) {
            throw Error("[goog.structs.Pool] Objects not released");
        }
        delete this.$inUseSet_$;
        for (var $freeQueue$$1$$ = this.$freeQueue_$; !$freeQueue$$1$$.$isEmpty$();) {
            $JSCompiler_StaticMethods_disposeObject$$($freeQueue$$1$$.dequeue());
        }
        delete this.$freeQueue_$;
    };
    function $goog$structs$PriorityPool$$($opt_minCount$$1$$, $opt_maxCount$$1$$) {
        this.$delayTimeout_$ = void 0;
        this.$requestQueue_$ = new $goog$structs$PriorityQueue$$;
        $goog$structs$Pool$$.call(this, $opt_minCount$$1$$, $opt_maxCount$$1$$);
    }

    $goog$inherits$$($goog$structs$PriorityPool$$, $goog$structs$Pool$$);
    $JSCompiler_prototypeAlias$$ = $goog$structs$PriorityPool$$.prototype;
    $JSCompiler_prototypeAlias$$.$getObject$ = function $$JSCompiler_prototypeAlias$$$$getObject$$($opt_callback$$6$$, $opt_priority$$1$$) {
        if (!$opt_callback$$6$$) {
            var $result$$16$$ = $goog$structs$PriorityPool$$.$superClass_$.$getObject$.call(this);
            $result$$16$$ && this.delay && (this.$delayTimeout_$ = $goog$global$$.setTimeout($goog$bind$$(this.$handleQueueRequests_$, this), this.delay));
            return $result$$16$$;
        }
        this.$requestQueue_$.$enqueue$($goog$isDef$$($opt_priority$$1$$) ? $opt_priority$$1$$ : 100, $opt_callback$$6$$);
        this.$handleQueueRequests_$();
    };
    $JSCompiler_prototypeAlias$$.$handleQueueRequests_$ = function $$JSCompiler_prototypeAlias$$$$handleQueueRequests_$$() {
        for (var $requestQueue$$ = this.$requestQueue_$; 0 < $requestQueue$$.$getCount$();) {
            var $obj$$96$$ = this.$getObject$();
            if ($obj$$96$$) {
                $requestQueue$$.dequeue().apply(this, [$obj$$96$$]);
            } else {
                break;
            }
        }
    };
    $JSCompiler_prototypeAlias$$.$addFreeObject$ = function $$JSCompiler_prototypeAlias$$$$addFreeObject$$($obj$$97$$) {
        $goog$structs$PriorityPool$$.$superClass_$.$addFreeObject$.call(this, $obj$$97$$);
        this.$handleQueueRequests_$();
    };
    $JSCompiler_prototypeAlias$$.$adjustForMinMax$ = function $$JSCompiler_prototypeAlias$$$$adjustForMinMax$$() {
        $goog$structs$PriorityPool$$.$superClass_$.$adjustForMinMax$.call(this);
        this.$handleQueueRequests_$();
    };
    $JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
        $goog$structs$PriorityPool$$.$superClass_$.$disposeInternal$.call(this);
        $goog$global$$.clearTimeout(this.$delayTimeout_$);
        this.$requestQueue_$.clear();
        this.$requestQueue_$ = null;
    };
    function $goog$async$throwException$$($exception$$1$$) {
        $goog$async$nextTick$$(function () {
            throw $exception$$1$$;
        });
    }

    function $goog$async$run$$($callback$$59$$, $opt_context$$7$$) {
        $goog$async$run$workQueueScheduled_$$ || ($goog$async$nextTick$$($goog$async$run$processWorkQueue$$), $goog$async$run$workQueueScheduled_$$ = !0);
        $goog$async$run$workQueue_$$.push(new $goog$async$run$WorkItem_$$($callback$$59$$, $opt_context$$7$$));
    }

    var $goog$async$run$workQueueScheduled_$$ = !1, $goog$async$run$workQueue_$$ = [];

    function $goog$async$run$processWorkQueue$$() {
        for (; $goog$async$run$workQueue_$$.length;) {
            var $workItems$$ = $goog$async$run$workQueue_$$;
            $goog$async$run$workQueue_$$ = [];
            for (var $i$$103$$ = 0; $i$$103$$ < $workItems$$.length; $i$$103$$++) {
                var $workItem$$ = $workItems$$[$i$$103$$];
                try {
                    $workItem$$.fn.call($workItem$$.scope);
                } catch ($e$$23$$) {
                    $goog$async$throwException$$($e$$23$$);
                }
            }
        }
        $goog$async$run$workQueueScheduled_$$ = !1;
    }

    function $goog$async$run$WorkItem_$$($fn$$8$$, $scope$$1$$) {
        this.fn = $fn$$8$$;
        this.scope = $scope$$1$$;
    }
    ;
    function $goog$Promise$$($resolver$$1$$, $opt_context$$8$$) {
        this.$state_$ = $goog$Promise$State_$PENDING$$;
        this.$result_$ = void 0;
        this.$callbackEntries_$ = this.$parent_$ = null;
        this.$hadUnhandledRejection_$ = this.$executing_$ = !1;
        this.$stack_$ = [];
        $JSCompiler_StaticMethods_addStackTrace_$$(this, Error("created"));
        this.$currentStep_$ = 0;
        try {
            var $self$$1$$ = this;
            $resolver$$1$$.call($opt_context$$8$$, function ($value$$103$$) {
                $JSCompiler_StaticMethods_resolve_$$($self$$1$$, $goog$Promise$State_$FULFILLED$$, $value$$103$$);
            }, function ($reason$$) {
                $JSCompiler_StaticMethods_resolve_$$($self$$1$$, $goog$Promise$State_$REJECTED$$, $reason$$);
            });
        } catch ($e$$24$$) {
            $JSCompiler_StaticMethods_resolve_$$(this, $goog$Promise$State_$REJECTED$$, $e$$24$$);
        }
    }

    var $goog$Promise$State_$PENDING$$ = 0, $goog$Promise$State_$FULFILLED$$ = 2, $goog$Promise$State_$REJECTED$$ = 3;
    $goog$Promise$$.prototype.then = function $$goog$Promise$$$$then$($opt_onFulfilled$$3$$, $opt_onRejected$$3$$, $opt_context$$9$$) {
        $JSCompiler_StaticMethods_addStackTrace_$$(this, Error("then"));
        return $JSCompiler_StaticMethods_addChildPromise_$$(this, $goog$isFunction$$($opt_onFulfilled$$3$$) ? $opt_onFulfilled$$3$$ : null, $goog$isFunction$$($opt_onRejected$$3$$) ? $opt_onRejected$$3$$ : null, $opt_context$$9$$);
    };
    $goog$Thenable$addImplementation$$($goog$Promise$$);
    $goog$Promise$$.prototype.cancel = function $$goog$Promise$$$$cancel$($opt_message$$18$$) {
        this.$state_$ == $goog$Promise$State_$PENDING$$ && $goog$async$run$$(function () {
            var $err$$2$$ = new $goog$Promise$CancellationError$$($opt_message$$18$$);
            $JSCompiler_StaticMethods_cancelInternal_$$(this, $err$$2$$);
        }, this);
    };
    function $JSCompiler_StaticMethods_cancelInternal_$$($JSCompiler_StaticMethods_cancelInternal_$self$$, $err$$3$$) {
        if ($JSCompiler_StaticMethods_cancelInternal_$self$$.$state_$ == $goog$Promise$State_$PENDING$$) {
            if ($JSCompiler_StaticMethods_cancelInternal_$self$$.$parent_$) {
                var $JSCompiler_StaticMethods_cancelChild_$self$$inline_167$$ = $JSCompiler_StaticMethods_cancelInternal_$self$$.$parent_$;
                if ($JSCompiler_StaticMethods_cancelChild_$self$$inline_167$$.$callbackEntries_$) {
                    for (var $callbackEntry$$inline_175_childCount$$inline_170$$ = 0, $childIndex$$inline_171$$ = -1, $i$$inline_172$$ = 0, $child$$inline_174_entry$$inline_173$$; $child$$inline_174_entry$$inline_173$$ = $JSCompiler_StaticMethods_cancelChild_$self$$inline_167$$.$callbackEntries_$[$i$$inline_172$$]; $i$$inline_172$$++) {
                        if ($child$$inline_174_entry$$inline_173$$ = $child$$inline_174_entry$$inline_173$$.$child$) {
                            if ($callbackEntry$$inline_175_childCount$$inline_170$$++, $child$$inline_174_entry$$inline_173$$ == $JSCompiler_StaticMethods_cancelInternal_$self$$ && ($childIndex$$inline_171$$ = $i$$inline_172$$), 0 <= $childIndex$$inline_171$$ && 1 < $callbackEntry$$inline_175_childCount$$inline_170$$) {
                                break;
                            }
                        }
                    }
                    0 <= $childIndex$$inline_171$$ && ($JSCompiler_StaticMethods_cancelChild_$self$$inline_167$$.$state_$ == $goog$Promise$State_$PENDING$$ && 1 == $callbackEntry$$inline_175_childCount$$inline_170$$ ? $JSCompiler_StaticMethods_cancelInternal_$$($JSCompiler_StaticMethods_cancelChild_$self$$inline_167$$, $err$$3$$) : ($callbackEntry$$inline_175_childCount$$inline_170$$ = $JSCompiler_StaticMethods_cancelChild_$self$$inline_167$$.$callbackEntries_$.splice($childIndex$$inline_171$$, 1)[0], $JSCompiler_StaticMethods_executeCallback_$$($JSCompiler_StaticMethods_cancelChild_$self$$inline_167$$,
                        $callbackEntry$$inline_175_childCount$$inline_170$$, $goog$Promise$State_$REJECTED$$, $err$$3$$)));
                }
            } else {
                $JSCompiler_StaticMethods_resolve_$$($JSCompiler_StaticMethods_cancelInternal_$self$$, $goog$Promise$State_$REJECTED$$, $err$$3$$);
            }
        }
    }

    function $JSCompiler_StaticMethods_addCallbackEntry_$$($JSCompiler_StaticMethods_addCallbackEntry_$self$$, $callbackEntry$$1$$) {
        $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$callbackEntries_$ && $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$callbackEntries_$.length || $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$state_$ != $goog$Promise$State_$FULFILLED$$ && $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$state_$ != $goog$Promise$State_$REJECTED$$ || $JSCompiler_StaticMethods_scheduleCallbacks_$$($JSCompiler_StaticMethods_addCallbackEntry_$self$$);
        $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$callbackEntries_$ || ($JSCompiler_StaticMethods_addCallbackEntry_$self$$.$callbackEntries_$ = []);
        $JSCompiler_StaticMethods_addCallbackEntry_$self$$.$callbackEntries_$.push($callbackEntry$$1$$);
    }

    function $JSCompiler_StaticMethods_addChildPromise_$$($JSCompiler_StaticMethods_addChildPromise_$self$$, $onFulfilled$$, $onRejected$$1$$, $opt_context$$12$$) {
        var $callbackEntry$$2$$ = {$child$: null, $onFulfilled$: null, $onRejected$: null};
        $callbackEntry$$2$$.$child$ = new $goog$Promise$$(function ($resolve$$6$$, $reject$$6$$) {
            $callbackEntry$$2$$.$onFulfilled$ = $onFulfilled$$ ? function ($value$$106$$) {
                try {
                    var $result$$17$$ = $onFulfilled$$.call($opt_context$$12$$, $value$$106$$);
                    $resolve$$6$$($result$$17$$);
                } catch ($err$$5$$) {
                    $reject$$6$$($err$$5$$);
                }
            } : $resolve$$6$$;
            $callbackEntry$$2$$.$onRejected$ = $onRejected$$1$$ ? function ($reason$$3$$) {
                try {
                    var $result$$18$$ = $onRejected$$1$$.call($opt_context$$12$$, $reason$$3$$);
                    !$goog$isDef$$($result$$18$$) && $reason$$3$$ instanceof $goog$Promise$CancellationError$$ ? $reject$$6$$($reason$$3$$) : $resolve$$6$$($result$$18$$);
                } catch ($err$$6$$) {
                    $reject$$6$$($err$$6$$);
                }
            } : $reject$$6$$;
        });
        $callbackEntry$$2$$.$child$.$parent_$ = $JSCompiler_StaticMethods_addChildPromise_$self$$;
        $JSCompiler_StaticMethods_addCallbackEntry_$$($JSCompiler_StaticMethods_addChildPromise_$self$$, $callbackEntry$$2$$);
        return $callbackEntry$$2$$.$child$;
    }

    $goog$Promise$$.prototype.$unblockAndFulfill_$ = function $$goog$Promise$$$$$unblockAndFulfill_$$($value$$107$$) {
        $goog$asserts$assert$$(1 == this.$state_$);
        this.$state_$ = $goog$Promise$State_$PENDING$$;
        $JSCompiler_StaticMethods_resolve_$$(this, $goog$Promise$State_$FULFILLED$$, $value$$107$$);
    };
    $goog$Promise$$.prototype.$unblockAndReject_$ = function $$goog$Promise$$$$$unblockAndReject_$$($reason$$4$$) {
        $goog$asserts$assert$$(1 == this.$state_$);
        this.$state_$ = $goog$Promise$State_$PENDING$$;
        $JSCompiler_StaticMethods_resolve_$$(this, $goog$Promise$State_$REJECTED$$, $reason$$4$$);
    };
    function $JSCompiler_StaticMethods_resolve_$$($JSCompiler_StaticMethods_resolve_$self$$, $state$$1$$, $x$$62$$) {
        if ($JSCompiler_StaticMethods_resolve_$self$$.$state_$ == $goog$Promise$State_$PENDING$$) {
            if ($JSCompiler_StaticMethods_resolve_$self$$ == $x$$62$$) {
                $state$$1$$ = $goog$Promise$State_$REJECTED$$, $x$$62$$ = new TypeError("Promise cannot resolve to itself");
            } else {
                if ($goog$Thenable$isImplementedBy$$($x$$62$$)) {
                    $JSCompiler_StaticMethods_resolve_$self$$.$state_$ = 1;
                    $x$$62$$.then($JSCompiler_StaticMethods_resolve_$self$$.$unblockAndFulfill_$, $JSCompiler_StaticMethods_resolve_$self$$.$unblockAndReject_$, $JSCompiler_StaticMethods_resolve_$self$$);
                    return;
                }
                if ($goog$isObject$$($x$$62$$)) {
                    try {
                        var $then$$ = $x$$62$$.then;
                        if ($goog$isFunction$$($then$$)) {
                            $JSCompiler_StaticMethods_tryThen_$$($JSCompiler_StaticMethods_resolve_$self$$, $x$$62$$, $then$$);
                            return;
                        }
                    } catch ($e$$25$$) {
                        $state$$1$$ = $goog$Promise$State_$REJECTED$$, $x$$62$$ = $e$$25$$;
                    }
                }
            }
            $JSCompiler_StaticMethods_resolve_$self$$.$result_$ = $x$$62$$;
            $JSCompiler_StaticMethods_resolve_$self$$.$state_$ = $state$$1$$;
            $JSCompiler_StaticMethods_scheduleCallbacks_$$($JSCompiler_StaticMethods_resolve_$self$$);
            $state$$1$$ != $goog$Promise$State_$REJECTED$$ || $x$$62$$ instanceof $goog$Promise$CancellationError$$ || $goog$Promise$addUnhandledRejection_$$($JSCompiler_StaticMethods_resolve_$self$$, $x$$62$$);
        }
    }

    function $JSCompiler_StaticMethods_tryThen_$$($JSCompiler_StaticMethods_tryThen_$self$$, $thenable$$, $then$$1$$) {
        function $reject$$7$$($reason$$5$$) {
            $called$$1$$ || ($called$$1$$ = !0, $JSCompiler_StaticMethods_tryThen_$self$$.$unblockAndReject_$($reason$$5$$));
        }

        function $resolve$$7$$($value$$108$$) {
            $called$$1$$ || ($called$$1$$ = !0, $JSCompiler_StaticMethods_tryThen_$self$$.$unblockAndFulfill_$($value$$108$$));
        }

        $JSCompiler_StaticMethods_tryThen_$self$$.$state_$ = 1;
        var $called$$1$$ = !1;
        try {
            $then$$1$$.call($thenable$$, $resolve$$7$$, $reject$$7$$);
        } catch ($e$$26$$) {
            $reject$$7$$($e$$26$$);
        }
    }

    function $JSCompiler_StaticMethods_scheduleCallbacks_$$($JSCompiler_StaticMethods_scheduleCallbacks_$self$$) {
        $JSCompiler_StaticMethods_scheduleCallbacks_$self$$.$executing_$ || ($JSCompiler_StaticMethods_scheduleCallbacks_$self$$.$executing_$ = !0, $goog$async$run$$($JSCompiler_StaticMethods_scheduleCallbacks_$self$$.$executeCallbacks_$, $JSCompiler_StaticMethods_scheduleCallbacks_$self$$));
    }

    $goog$Promise$$.prototype.$executeCallbacks_$ = function $$goog$Promise$$$$$executeCallbacks_$$() {
        for (; this.$callbackEntries_$ && this.$callbackEntries_$.length;) {
            var $entries$$ = this.$callbackEntries_$;
            this.$callbackEntries_$ = [];
            for (var $i$$108$$ = 0; $i$$108$$ < $entries$$.length; $i$$108$$++) {
                this.$currentStep_$++, $JSCompiler_StaticMethods_executeCallback_$$(this, $entries$$[$i$$108$$], this.$state_$, this.$result_$);
            }
        }
        this.$executing_$ = !1;
    };
    function $JSCompiler_StaticMethods_executeCallback_$$($JSCompiler_StaticMethods_executeCallback_$self_p$$inline_178$$, $callbackEntry$$3$$, $state$$2$$, $result$$19$$) {
        if ($state$$2$$ == $goog$Promise$State_$FULFILLED$$) {
            $callbackEntry$$3$$.$onFulfilled$($result$$19$$);
        } else {
            for (; $JSCompiler_StaticMethods_executeCallback_$self_p$$inline_178$$ && $JSCompiler_StaticMethods_executeCallback_$self_p$$inline_178$$.$hadUnhandledRejection_$; $JSCompiler_StaticMethods_executeCallback_$self_p$$inline_178$$ = $JSCompiler_StaticMethods_executeCallback_$self_p$$inline_178$$.$parent_$) {
                $JSCompiler_StaticMethods_executeCallback_$self_p$$inline_178$$.$hadUnhandledRejection_$ = !1;
            }
            $callbackEntry$$3$$.$onRejected$($result$$19$$);
        }
    }

    function $JSCompiler_StaticMethods_addStackTrace_$$($JSCompiler_StaticMethods_addStackTrace_$self$$, $err$$7$$) {
        if ($goog$isString$$($err$$7$$.stack)) {
            var $trace$$ = $err$$7$$.stack.split("\n", 4)[3], $message$$24$$ = $err$$7$$.message, $message$$24$$ = $message$$24$$ + Array(11 - $message$$24$$.length).join(" ");
            $JSCompiler_StaticMethods_addStackTrace_$self$$.$stack_$.push($message$$24$$ + $trace$$);
        }
    }

    function $goog$Promise$addUnhandledRejection_$$($promise$$6$$, $reason$$6$$) {
        $promise$$6$$.$hadUnhandledRejection_$ = !0;
        $goog$async$run$$(function () {
            if ($promise$$6$$.$hadUnhandledRejection_$) {
                if ($reason$$6$$ && $goog$isString$$($reason$$6$$.stack) && $promise$$6$$.$stack_$.length) {
                    for (var $longTrace$$inline_182$$ = ["Promise trace:"], $promise$$inline_183$$ = $promise$$6$$; $promise$$inline_183$$; $promise$$inline_183$$ = $promise$$inline_183$$.$parent_$) {
                        for (var $i$$inline_184$$ = $promise$$6$$.$currentStep_$; 0 <= $i$$inline_184$$; $i$$inline_184$$--) {
                            $longTrace$$inline_182$$.push($promise$$inline_183$$.$stack_$[$i$$inline_184$$]);
                        }
                        $longTrace$$inline_182$$.push("Value: [" + ($promise$$inline_183$$.$state_$ == $goog$Promise$State_$REJECTED$$ ? "REJECTED" : "FULFILLED") + "] <" + String($promise$$inline_183$$.$result_$) + ">");
                    }
                    $reason$$6$$.stack += "\n\n" + $longTrace$$inline_182$$.join("\n");
                }
                $goog$Promise$handleRejection_$$.call(null, $reason$$6$$);
            }
        });
    }

    var $goog$Promise$handleRejection_$$ = $goog$async$throwException$$;

    function $goog$Promise$CancellationError$$($opt_message$$19$$) {
        $goog$debug$Error$$.call(this, $opt_message$$19$$);
    }

    $goog$inherits$$($goog$Promise$CancellationError$$, $goog$debug$Error$$);
    $goog$Promise$CancellationError$$.prototype.name = "cancel";
    function $goog$ui$IdGenerator$$() {
    }

    $goog$addSingletonGetter$$($goog$ui$IdGenerator$$);
    $goog$ui$IdGenerator$$.prototype.$nextId_$ = 0;
    var $goog$userAgent$detectedAndroid_$$, $goog$userAgent$detectedIPhone_$$, $goog$userAgent$OPERA$$ = $goog$labs$userAgent$util$matchUserAgent$$("Opera") || $goog$labs$userAgent$util$matchUserAgent$$("OPR"), $goog$userAgent$IE$$ = $goog$labs$userAgent$util$matchUserAgent$$("Trident") || $goog$labs$userAgent$util$matchUserAgent$$("MSIE"), $goog$userAgent$GECKO$$ = $goog$labs$userAgent$util$matchUserAgent$$("Gecko") && !$goog$labs$userAgent$util$matchUserAgent$$("WebKit") && !($goog$labs$userAgent$util$matchUserAgent$$("Trident") ||
        $goog$labs$userAgent$util$matchUserAgent$$("MSIE")), $goog$userAgent$WEBKIT$$ = $goog$labs$userAgent$util$matchUserAgent$$("WebKit"), $goog$userAgent$MOBILE$$ = $goog$userAgent$WEBKIT$$ && $goog$labs$userAgent$util$matchUserAgent$$("Mobile"), $ua$$inline_186$$ = $goog$labs$userAgent$util$userAgent_$$;
    $goog$userAgent$detectedAndroid_$$ = !!$ua$$inline_186$$ && -1 != $ua$$inline_186$$.indexOf("Android");
    $goog$userAgent$detectedIPhone_$$ = !!$ua$$inline_186$$ && -1 != $ua$$inline_186$$.indexOf("iPhone");
    var $goog$userAgent$IPAD$$ = !!$ua$$inline_186$$ && -1 != $ua$$inline_186$$.indexOf("iPad");

    function $goog$userAgent$getDocumentMode_$$() {
        var $doc$$5$$ = $goog$global$$.document;
        return $doc$$5$$ ? $doc$$5$$.documentMode : void 0;
    }

    var $goog$userAgent$VERSION$$ = function () {
        var $arr$$76_operaVersion_version$$11$$ = "", $docMode_re$$2$$;
        if ($goog$userAgent$OPERA$$ && $goog$global$$.opera) {
            return $arr$$76_operaVersion_version$$11$$ = $goog$global$$.opera.version, $goog$isFunction$$($arr$$76_operaVersion_version$$11$$) ? $arr$$76_operaVersion_version$$11$$() : $arr$$76_operaVersion_version$$11$$;
        }
        $goog$userAgent$GECKO$$ ? $docMode_re$$2$$ = /rv\:([^\);]+)(\)|;)/ : $goog$userAgent$IE$$ ? $docMode_re$$2$$ = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : $goog$userAgent$WEBKIT$$ && ($docMode_re$$2$$ = /WebKit\/(\S+)/);
        $docMode_re$$2$$ && ($arr$$76_operaVersion_version$$11$$ = ($arr$$76_operaVersion_version$$11$$ = $docMode_re$$2$$.exec($goog$labs$userAgent$util$userAgent_$$)) ? $arr$$76_operaVersion_version$$11$$[1] : "");
        return $goog$userAgent$IE$$ && ($docMode_re$$2$$ = $goog$userAgent$getDocumentMode_$$(), $docMode_re$$2$$ > parseFloat($arr$$76_operaVersion_version$$11$$)) ? String($docMode_re$$2$$) : $arr$$76_operaVersion_version$$11$$;
    }(), $goog$userAgent$isVersionOrHigherCache_$$ = {};

    function $goog$userAgent$isVersionOrHigher$$($version$$12$$) {
        var $JSCompiler_temp$$75_order$$inline_190$$;
        if (!($JSCompiler_temp$$75_order$$inline_190$$ = $goog$userAgent$isVersionOrHigherCache_$$[$version$$12$$])) {
            $JSCompiler_temp$$75_order$$inline_190$$ = 0;
            for (var $v1Subs$$inline_191$$ = $goog$string$trim$$(String($goog$userAgent$VERSION$$)).split("."), $v2Subs$$inline_192$$ = $goog$string$trim$$(String($version$$12$$)).split("."), $subCount$$inline_193$$ = Math.max($v1Subs$$inline_191$$.length, $v2Subs$$inline_192$$.length), $subIdx$$inline_194$$ = 0; 0 == $JSCompiler_temp$$75_order$$inline_190$$ && $subIdx$$inline_194$$ < $subCount$$inline_193$$; $subIdx$$inline_194$$++) {
                var $v1Sub$$inline_195$$ = $v1Subs$$inline_191$$[$subIdx$$inline_194$$] || "", $v2Sub$$inline_196$$ = $v2Subs$$inline_192$$[$subIdx$$inline_194$$] || "", $v1CompParser$$inline_197$$ = RegExp("(\\d*)(\\D*)", "g"), $v2CompParser$$inline_198$$ = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var $v1Comp$$inline_199$$ = $v1CompParser$$inline_197$$.exec($v1Sub$$inline_195$$) || ["", "", ""], $v2Comp$$inline_200$$ = $v2CompParser$$inline_198$$.exec($v2Sub$$inline_196$$) || ["", "", ""];
                    if (0 == $v1Comp$$inline_199$$[0].length && 0 == $v2Comp$$inline_200$$[0].length) {
                        break;
                    }
                    $JSCompiler_temp$$75_order$$inline_190$$ = $goog$string$compareElements_$$(0 == $v1Comp$$inline_199$$[1].length ? 0 : parseInt($v1Comp$$inline_199$$[1], 10), 0 == $v2Comp$$inline_200$$[1].length ? 0 : parseInt($v2Comp$$inline_200$$[1], 10)) || $goog$string$compareElements_$$(0 == $v1Comp$$inline_199$$[2].length, 0 == $v2Comp$$inline_200$$[2].length) || $goog$string$compareElements_$$($v1Comp$$inline_199$$[2], $v2Comp$$inline_200$$[2]);
                } while (0 == $JSCompiler_temp$$75_order$$inline_190$$);
            }
            $JSCompiler_temp$$75_order$$inline_190$$ = $goog$userAgent$isVersionOrHigherCache_$$[$version$$12$$] = 0 <= $JSCompiler_temp$$75_order$$inline_190$$;
        }
        return $JSCompiler_temp$$75_order$$inline_190$$;
    }

    var $doc$$inline_202$$ = $goog$global$$.document, $goog$userAgent$DOCUMENT_MODE$$ = $doc$$inline_202$$ && $goog$userAgent$IE$$ ? $goog$userAgent$getDocumentMode_$$() || ("CSS1Compat" == $doc$$inline_202$$.compatMode ? parseInt($goog$userAgent$VERSION$$, 10) : 5) : void 0;

    function $goog$debug$getStacktrace$$($opt_fn$$5$$) {
        var $stack$$3$$;
        $stack$$3$$ || ($stack$$3$$ = $goog$debug$getStacktraceHelper_$$($opt_fn$$5$$ || arguments.callee.caller, []));
        return $stack$$3$$;
    }

    function $goog$debug$getStacktraceHelper_$$($fn$$11$$, $visited$$) {
        var $sb$$9$$ = [];
        if ($goog$array$contains$$($visited$$, $fn$$11$$)) {
            $sb$$9$$.push("[...circular reference...]");
        } else {
            if ($fn$$11$$ && 50 > $visited$$.length) {
                $sb$$9$$.push($goog$debug$getFunctionName$$($fn$$11$$) + "(");
                for (var $args$$13$$ = $fn$$11$$.arguments, $i$$111$$ = 0; $args$$13$$ && $i$$111$$ < $args$$13$$.length; $i$$111$$++) {
                    0 < $i$$111$$ && $sb$$9$$.push(", ");
                    var $arg$$5_argDesc$$;
                    $arg$$5_argDesc$$ = $args$$13$$[$i$$111$$];
                    switch (typeof $arg$$5_argDesc$$) {
                        case "object":
                            $arg$$5_argDesc$$ = $arg$$5_argDesc$$ ? "object" : "null";
                            break;
                        case "string":
                            break;
                        case "number":
                            $arg$$5_argDesc$$ = String($arg$$5_argDesc$$);
                            break;
                        case "boolean":
                            $arg$$5_argDesc$$ = $arg$$5_argDesc$$ ? "true" : "false";
                            break;
                        case "function":
                            $arg$$5_argDesc$$ = ($arg$$5_argDesc$$ = $goog$debug$getFunctionName$$($arg$$5_argDesc$$)) ? $arg$$5_argDesc$$ : "[fn]";
                            break;
                        default:
                            $arg$$5_argDesc$$ = typeof $arg$$5_argDesc$$;
                    }
                    40 < $arg$$5_argDesc$$.length && ($arg$$5_argDesc$$ = $arg$$5_argDesc$$.substr(0, 40) + "...");
                    $sb$$9$$.push($arg$$5_argDesc$$);
                }
                $visited$$.push($fn$$11$$);
                $sb$$9$$.push(")\n");
                try {
                    $sb$$9$$.push($goog$debug$getStacktraceHelper_$$($fn$$11$$.caller, $visited$$));
                } catch ($e$$34$$) {
                    $sb$$9$$.push("[exception trying to get caller]\n");
                }
            } else {
                $fn$$11$$ ? $sb$$9$$.push("[...long stack...]") : $sb$$9$$.push("[end]");
            }
        }
        return $sb$$9$$.join("");
    }

    function $goog$debug$getFunctionName$$($fn$$12_functionSource$$) {
        if ($goog$debug$fnNameCache_$$[$fn$$12_functionSource$$]) {
            return $goog$debug$fnNameCache_$$[$fn$$12_functionSource$$];
        }
        $fn$$12_functionSource$$ = String($fn$$12_functionSource$$);
        if (!$goog$debug$fnNameCache_$$[$fn$$12_functionSource$$]) {
            var $matches$$ = /function ([^\(]+)/.exec($fn$$12_functionSource$$);
            $goog$debug$fnNameCache_$$[$fn$$12_functionSource$$] = $matches$$ ? $matches$$[1] : "[Anonymous]";
        }
        return $goog$debug$fnNameCache_$$[$fn$$12_functionSource$$];
    }

    var $goog$debug$fnNameCache_$$ = {};

    function $goog$debug$Logger$$($name$$59$$) {
        this.$name_$ = $name$$59$$;
        this.$handlers_$ = this.$children_$ = this.$level_$ = this.$parent_$ = null;
    }

    function $goog$debug$Logger$Level$$($name$$60$$, $value$$109$$) {
        this.name = $name$$60$$;
        this.value = $value$$109$$;
    }

    $goog$debug$Logger$Level$$.prototype.toString = function $$goog$debug$Logger$Level$$$$toString$() {
        return this.name;
    };
    var $goog$debug$Logger$Level$SEVERE$$ = new $goog$debug$Logger$Level$$("SEVERE", 1E3), $goog$debug$Logger$Level$WARNING$$ = new $goog$debug$Logger$Level$$("WARNING", 900), $goog$debug$Logger$Level$INFO$$ = new $goog$debug$Logger$Level$$("INFO", 800), $goog$debug$Logger$Level$CONFIG$$ = new $goog$debug$Logger$Level$$("CONFIG", 700), $goog$debug$Logger$Level$FINE$$ = new $goog$debug$Logger$Level$$("FINE", 500), $goog$debug$Logger$Level$FINEST$$ = new $goog$debug$Logger$Level$$("FINEST", 300);
    $JSCompiler_prototypeAlias$$ = $goog$debug$Logger$$.prototype;
    $JSCompiler_prototypeAlias$$.getName = function $$JSCompiler_prototypeAlias$$$getName$() {
        return this.$name_$;
    };
    $JSCompiler_prototypeAlias$$.getParent = function $$JSCompiler_prototypeAlias$$$getParent$() {
        return this.$parent_$;
    };
    $JSCompiler_prototypeAlias$$.$getChildren$ = function $$JSCompiler_prototypeAlias$$$$getChildren$$() {
        this.$children_$ || (this.$children_$ = {});
        return this.$children_$;
    };
    $JSCompiler_prototypeAlias$$.$setLevel$ = function $$JSCompiler_prototypeAlias$$$$setLevel$$($level$$13$$) {
        this.$level_$ = $level$$13$$;
    };
    function $JSCompiler_StaticMethods_getEffectiveLevel$$($JSCompiler_StaticMethods_getEffectiveLevel$self$$) {
        if ($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$level_$) {
            return $JSCompiler_StaticMethods_getEffectiveLevel$self$$.$level_$;
        }
        if ($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$parent_$) {
            return $JSCompiler_StaticMethods_getEffectiveLevel$$($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$parent_$);
        }
        $goog$asserts$fail$$("Root logger has no level set.");
        return null;
    }

    $JSCompiler_prototypeAlias$$.log = function $$JSCompiler_prototypeAlias$$$log$($level$$15_logRecord$$inline_205$$, $msg$$5_msg$$inline_1000_target$$inline_206$$, $JSCompiler_StaticMethods_callPublish_$self$$inline_1002_opt_exception$$) {
        if ($level$$15_logRecord$$inline_205$$.value >= $JSCompiler_StaticMethods_getEffectiveLevel$$(this).value) {
            for ($goog$isFunction$$($msg$$5_msg$$inline_1000_target$$inline_206$$) && ($msg$$5_msg$$inline_1000_target$$inline_206$$ = $msg$$5_msg$$inline_1000_target$$inline_206$$()), $level$$15_logRecord$$inline_205$$ = this.$getLogRecord$($level$$15_logRecord$$inline_205$$, $msg$$5_msg$$inline_1000_target$$inline_206$$, $JSCompiler_StaticMethods_callPublish_$self$$inline_1002_opt_exception$$, $goog$debug$Logger$$.prototype.log), $msg$$5_msg$$inline_1000_target$$inline_206$$ = "log:" + $level$$15_logRecord$$inline_205$$.getMessage(),
                 $goog$global$$.console && ($goog$global$$.console.timeStamp ? $goog$global$$.console.timeStamp($msg$$5_msg$$inline_1000_target$$inline_206$$) : $goog$global$$.console.markTimeline && $goog$global$$.console.markTimeline($msg$$5_msg$$inline_1000_target$$inline_206$$)), $goog$global$$.msWriteProfilerMark && $goog$global$$.msWriteProfilerMark($msg$$5_msg$$inline_1000_target$$inline_206$$), $msg$$5_msg$$inline_1000_target$$inline_206$$ = this; $msg$$5_msg$$inline_1000_target$$inline_206$$;) {
                $JSCompiler_StaticMethods_callPublish_$self$$inline_1002_opt_exception$$ = $msg$$5_msg$$inline_1000_target$$inline_206$$;
                var $logRecord$$inline_1003$$ = $level$$15_logRecord$$inline_205$$;
                if ($JSCompiler_StaticMethods_callPublish_$self$$inline_1002_opt_exception$$.$handlers_$) {
                    for (var $i$$inline_1004$$ = 0, $handler$$inline_1005$$ = void 0; $handler$$inline_1005$$ = $JSCompiler_StaticMethods_callPublish_$self$$inline_1002_opt_exception$$.$handlers_$[$i$$inline_1004$$]; $i$$inline_1004$$++) {
                        $handler$$inline_1005$$($logRecord$$inline_1003$$);
                    }
                }
                $msg$$5_msg$$inline_1000_target$$inline_206$$ = $msg$$5_msg$$inline_1000_target$$inline_206$$.getParent();
            }
        }
    };
    $JSCompiler_prototypeAlias$$.$getLogRecord$ = function $$JSCompiler_prototypeAlias$$$$getLogRecord$$($level$$16_logRecord$$, $msg$$6_threwError$$inline_1011$$, $opt_exception$$1$$, $opt_fn$$inline_220_opt_fnStackContext$$) {
        $level$$16_logRecord$$ = new $goog$debug$LogRecord$$($level$$16_logRecord$$, String($msg$$6_threwError$$inline_1011$$), this.$name_$);
        if ($opt_exception$$1$$) {
            $level$$16_logRecord$$.$exception_$ = $opt_exception$$1$$;
            var $JSCompiler_inline_result$$56$$;
            $opt_fn$$inline_220_opt_fnStackContext$$ = $opt_fn$$inline_220_opt_fnStackContext$$ || $goog$debug$Logger$$.prototype.$getLogRecord$;
            try {
                var $e$$inline_221$$;
                var $href$$inline_1008$$ = $goog$getObjectByName$$("window.location.href");
                if ($goog$isString$$($opt_exception$$1$$)) {
                    $e$$inline_221$$ = {
                        message: $opt_exception$$1$$,
                        name: "Unknown error",
                        lineNumber: "Not available",
                        fileName: $href$$inline_1008$$,
                        stack: "Not available"
                    };
                } else {
                    var $lineNumber$$inline_1009$$, $fileName$$inline_1010$$;
                    $msg$$6_threwError$$inline_1011$$ = !1;
                    try {
                        $lineNumber$$inline_1009$$ = $opt_exception$$1$$.lineNumber || $opt_exception$$1$$.$line$ || "Not available";
                    } catch ($e$$inline_1012$$) {
                        $lineNumber$$inline_1009$$ = "Not available", $msg$$6_threwError$$inline_1011$$ = !0;
                    }
                    try {
                        $fileName$$inline_1010$$ = $opt_exception$$1$$.fileName || $opt_exception$$1$$.filename || $opt_exception$$1$$.sourceURL || $goog$global$$.$googDebugFname || $href$$inline_1008$$;
                    } catch ($e$$inline_1013$$) {
                        $fileName$$inline_1010$$ = "Not available", $msg$$6_threwError$$inline_1011$$ = !0;
                    }
                    $e$$inline_221$$ = !$msg$$6_threwError$$inline_1011$$ && $opt_exception$$1$$.lineNumber && $opt_exception$$1$$.fileName && $opt_exception$$1$$.stack && $opt_exception$$1$$.message && $opt_exception$$1$$.name ? $opt_exception$$1$$ : {
                        message: $opt_exception$$1$$.message || "Not available",
                        name: $opt_exception$$1$$.name || "UnknownError",
                        lineNumber: $lineNumber$$inline_1009$$,
                        fileName: $fileName$$inline_1010$$,
                        stack: $opt_exception$$1$$.stack || "Not available"
                    };
                }
                $JSCompiler_inline_result$$56$$ = "Message: " + $goog$string$htmlEscape$$($e$$inline_221$$.message) + '\nUrl: <a href="view-source:' + $e$$inline_221$$.fileName + '" target="_new">' + $e$$inline_221$$.fileName + "</a>\nLine: " + $e$$inline_221$$.lineNumber + "\n\nBrowser stack:\n" + $goog$string$htmlEscape$$($e$$inline_221$$.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + $goog$string$htmlEscape$$($goog$debug$getStacktrace$$($opt_fn$$inline_220_opt_fnStackContext$$) + "-> ");
            } catch ($e2$$inline_222$$) {
                $JSCompiler_inline_result$$56$$ = "Exception trying to expose exception! You win, we lose. " + $e2$$inline_222$$;
            }
            $level$$16_logRecord$$.$exceptionText_$ = $JSCompiler_inline_result$$56$$;
        }
        return $level$$16_logRecord$$;
    };
    $JSCompiler_prototypeAlias$$.info = function $$JSCompiler_prototypeAlias$$$info$($msg$$10$$, $opt_exception$$5$$) {
        this.log($goog$debug$Logger$Level$INFO$$, $msg$$10$$, $opt_exception$$5$$);
    };
    var $goog$debug$LogManager$loggers_$$ = {}, $goog$debug$LogManager$rootLogger_$$ = null;

    function $goog$debug$LogManager$getLogger$$($name$$64$$) {
        $goog$debug$LogManager$rootLogger_$$ || ($goog$debug$LogManager$rootLogger_$$ = new $goog$debug$Logger$$(""), $goog$debug$LogManager$loggers_$$[""] = $goog$debug$LogManager$rootLogger_$$, $goog$debug$LogManager$rootLogger_$$.$setLevel$($goog$debug$Logger$Level$CONFIG$$));
        var $JSCompiler_temp$$4_logger$$inline_229$$;
        if (!($JSCompiler_temp$$4_logger$$inline_229$$ = $goog$debug$LogManager$loggers_$$[$name$$64$$])) {
            $JSCompiler_temp$$4_logger$$inline_229$$ = new $goog$debug$Logger$$($name$$64$$);
            var $lastDotIndex$$inline_230_parentLogger$$inline_232$$ = $name$$64$$.lastIndexOf("."), $leafName$$inline_231$$ = $name$$64$$.substr($lastDotIndex$$inline_230_parentLogger$$inline_232$$ + 1), $lastDotIndex$$inline_230_parentLogger$$inline_232$$ = $goog$debug$LogManager$getLogger$$($name$$64$$.substr(0, $lastDotIndex$$inline_230_parentLogger$$inline_232$$));
            $lastDotIndex$$inline_230_parentLogger$$inline_232$$.$getChildren$()[$leafName$$inline_231$$] = $JSCompiler_temp$$4_logger$$inline_229$$;
            $JSCompiler_temp$$4_logger$$inline_229$$.$parent_$ = $lastDotIndex$$inline_230_parentLogger$$inline_232$$;
            $goog$debug$LogManager$loggers_$$[$name$$64$$] = $JSCompiler_temp$$4_logger$$inline_229$$;
        }
        return $JSCompiler_temp$$4_logger$$inline_229$$;
    }
    ;
    var $goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ = !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$, $goog$dom$BrowserFeature$CAN_USE_CHILDREN_ATTRIBUTE$$ = !$goog$userAgent$GECKO$$ && !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$ || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersionOrHigher$$("1.9.1");
    $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("9");
    var $goog$dom$BrowserFeature$CAN_USE_PARENT_ELEMENT_PROPERTY$$ = $goog$userAgent$IE$$ || $goog$userAgent$OPERA$$ || $goog$userAgent$WEBKIT$$;

    function $goog$dom$getDomHelper$$($opt_element$$10$$) {
        return $opt_element$$10$$ ? new $goog$dom$DomHelper$$($goog$dom$getOwnerDocument$$($opt_element$$10$$)) : $goog$dom$defaultDomHelper_$$ || ($goog$dom$defaultDomHelper_$$ = new $goog$dom$DomHelper$$);
    }

    function $goog$dom$getElementHelper_$$($doc$$7$$, $element$$34$$) {
        return $goog$isString$$($element$$34$$) ? $doc$$7$$.getElementById($element$$34$$) : $element$$34$$;
    }

    function $goog$dom$setProperties$$($element$$36$$, $properties$$7$$) {
        $goog$object$forEach$$($properties$$7$$, function ($val$$34$$, $key$$68$$) {
            "style" == $key$$68$$ ? $element$$36$$.style.cssText = $val$$34$$ : "class" == $key$$68$$ ? $element$$36$$.className = $val$$34$$ : "for" == $key$$68$$ ? $element$$36$$.htmlFor = $val$$34$$ : $key$$68$$ in $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ ? $element$$36$$.setAttribute($goog$dom$DIRECT_ATTRIBUTE_MAP_$$[$key$$68$$], $val$$34$$) : 0 == $key$$68$$.lastIndexOf("aria-", 0) || 0 == $key$$68$$.lastIndexOf("data-", 0) ? $element$$36$$.setAttribute($key$$68$$, $val$$34$$) : $element$$36$$[$key$$68$$] =
                $val$$34$$;
        });
    }

    var $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function $goog$dom$createDom$$($tagName$$6$$, $opt_attributes$$2$$, $var_args$$91$$) {
        var $args$$inline_237$$ = arguments, $doc$$inline_238$$ = document, $element$$inline_243_tagName$$inline_239_tagNameArr$$inline_241$$ = $args$$inline_237$$[0], $attributes$$inline_240$$ = $args$$inline_237$$[1];
        if (!$goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ && $attributes$$inline_240$$ && ($attributes$$inline_240$$.name || $attributes$$inline_240$$.type)) {
            $element$$inline_243_tagName$$inline_239_tagNameArr$$inline_241$$ = ["<", $element$$inline_243_tagName$$inline_239_tagNameArr$$inline_241$$];
            $attributes$$inline_240$$.name && $element$$inline_243_tagName$$inline_239_tagNameArr$$inline_241$$.push(' name="', $goog$string$htmlEscape$$($attributes$$inline_240$$.name), '"');
            if ($attributes$$inline_240$$.type) {
                $element$$inline_243_tagName$$inline_239_tagNameArr$$inline_241$$.push(' type="', $goog$string$htmlEscape$$($attributes$$inline_240$$.type), '"');
                var $clone$$inline_242$$ = {};
                $goog$object$extend$$($clone$$inline_242$$, $attributes$$inline_240$$);
                delete $clone$$inline_242$$.type;
                $attributes$$inline_240$$ = $clone$$inline_242$$;
            }
            $element$$inline_243_tagName$$inline_239_tagNameArr$$inline_241$$.push(">");
            $element$$inline_243_tagName$$inline_239_tagNameArr$$inline_241$$ = $element$$inline_243_tagName$$inline_239_tagNameArr$$inline_241$$.join("");
        }
        $element$$inline_243_tagName$$inline_239_tagNameArr$$inline_241$$ = $doc$$inline_238$$.createElement($element$$inline_243_tagName$$inline_239_tagNameArr$$inline_241$$);
        $attributes$$inline_240$$ && ($goog$isString$$($attributes$$inline_240$$) ? $element$$inline_243_tagName$$inline_239_tagNameArr$$inline_241$$.className = $attributes$$inline_240$$ : $goog$isArray$$($attributes$$inline_240$$) ? $element$$inline_243_tagName$$inline_239_tagNameArr$$inline_241$$.className = $attributes$$inline_240$$.join(" ") : $goog$dom$setProperties$$($element$$inline_243_tagName$$inline_239_tagNameArr$$inline_241$$, $attributes$$inline_240$$));
        2 < $args$$inline_237$$.length && $goog$dom$append_$$($doc$$inline_238$$, $element$$inline_243_tagName$$inline_239_tagNameArr$$inline_241$$, $args$$inline_237$$, 2);
        return $element$$inline_243_tagName$$inline_239_tagNameArr$$inline_241$$;
    }

    function $goog$dom$append_$$($doc$$16$$, $parent$$7$$, $args$$15$$, $i$$117_startIndex$$) {
        function $childHandler$$($child$$2$$) {
            $child$$2$$ && $parent$$7$$.appendChild($goog$isString$$($child$$2$$) ? $doc$$16$$.createTextNode($child$$2$$) : $child$$2$$);
        }

        for (; $i$$117_startIndex$$ < $args$$15$$.length; $i$$117_startIndex$$++) {
            var $arg$$6$$ = $args$$15$$[$i$$117_startIndex$$];
            !$goog$isArrayLike$$($arg$$6$$) || $goog$isObject$$($arg$$6$$) && 0 < $arg$$6$$.nodeType ? $childHandler$$($arg$$6$$) : $goog$array$forEach$$($goog$dom$isNodeList$$($arg$$6$$) ? $goog$array$toArray$$($arg$$6$$) : $arg$$6$$, $childHandler$$);
        }
    }

    function $goog$dom$removeChildren$$($node$$11$$) {
        for (var $child$$4$$; $child$$4$$ = $node$$11$$.firstChild;) {
            $node$$11$$.removeChild($child$$4$$);
        }
    }

    function $goog$dom$removeNode$$($node$$12$$) {
        $node$$12$$ && $node$$12$$.parentNode && $node$$12$$.parentNode.removeChild($node$$12$$);
    }

    function $goog$dom$getChildren$$($element$$39$$) {
        return $goog$dom$BrowserFeature$CAN_USE_CHILDREN_ATTRIBUTE$$ && void 0 != $element$$39$$.children ? $element$$39$$.children : $goog$array$filter$$($element$$39$$.childNodes, function ($node$$13$$) {
            return 1 == $node$$13$$.nodeType;
        });
    }

    function $goog$dom$isElement$$($obj$$102$$) {
        return $goog$isObject$$($obj$$102$$) && 1 == $obj$$102$$.nodeType;
    }

    function $goog$dom$getParentElement$$($element$$40$$) {
        var $parent$$13$$;
        if ($goog$dom$BrowserFeature$CAN_USE_PARENT_ELEMENT_PROPERTY$$ && !($goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("9") && !$goog$userAgent$isVersionOrHigher$$("10") && $goog$global$$.SVGElement && $element$$40$$ instanceof $goog$global$$.SVGElement) && ($parent$$13$$ = $element$$40$$.parentElement)) {
            return $parent$$13$$;
        }
        $parent$$13$$ = $element$$40$$.parentNode;
        return $goog$dom$isElement$$($parent$$13$$) ? $parent$$13$$ : null;
    }

    function $goog$dom$contains$$($parent$$14$$, $descendant$$) {
        if ($parent$$14$$.contains && 1 == $descendant$$.nodeType) {
            return $parent$$14$$ == $descendant$$ || $parent$$14$$.contains($descendant$$);
        }
        if ("undefined" != typeof $parent$$14$$.compareDocumentPosition) {
            return $parent$$14$$ == $descendant$$ || Boolean($parent$$14$$.compareDocumentPosition($descendant$$) & 16);
        }
        for (; $descendant$$ && $parent$$14$$ != $descendant$$;) {
            $descendant$$ = $descendant$$.parentNode;
        }
        return $descendant$$ == $parent$$14$$;
    }

    function $goog$dom$getOwnerDocument$$($node$$23$$) {
        $goog$asserts$assert$$($node$$23$$, "Node cannot be null or undefined.");
        return 9 == $node$$23$$.nodeType ? $node$$23$$ : $node$$23$$.ownerDocument || $node$$23$$.document;
    }

    function $goog$dom$findNodes_$$($child$$7_root$$4$$, $p$$3$$, $rv$$21$$, $findOne$$) {
        if (null != $child$$7_root$$4$$) {
            for ($child$$7_root$$4$$ = $child$$7_root$$4$$.firstChild; $child$$7_root$$4$$;) {
                if ($p$$3$$($child$$7_root$$4$$) && ($rv$$21$$.push($child$$7_root$$4$$), $findOne$$) || $goog$dom$findNodes_$$($child$$7_root$$4$$, $p$$3$$, $rv$$21$$, $findOne$$)) {
                    return !0;
                }
                $child$$7_root$$4$$ = $child$$7_root$$4$$.nextSibling;
            }
        }
        return !1;
    }

    function $goog$dom$isNodeList$$($val$$35$$) {
        if ($val$$35$$ && "number" == typeof $val$$35$$.length) {
            if ($goog$isObject$$($val$$35$$)) {
                return "function" == typeof $val$$35$$.item || "string" == typeof $val$$35$$.item;
            }
            if ($goog$isFunction$$($val$$35$$)) {
                return "function" == typeof $val$$35$$.item;
            }
        }
        return !1;
    }

    function $goog$dom$getAncestor$$($element$$51$$, $matcher$$) {
        $element$$51$$ = $element$$51$$.parentNode;
        for (var $steps$$ = 0; $element$$51$$;) {
            if ($matcher$$($element$$51$$)) {
                return $element$$51$$;
            }
            $element$$51$$ = $element$$51$$.parentNode;
            $steps$$++;
        }
        return null;
    }

    function $goog$dom$DomHelper$$($opt_document$$1$$) {
        this.$document_$ = $opt_document$$1$$ || $goog$global$$.document || document;
    }

    $JSCompiler_prototypeAlias$$ = $goog$dom$DomHelper$$.prototype;
    $JSCompiler_prototypeAlias$$.$getElement$ = function $$JSCompiler_prototypeAlias$$$$getElement$$($element$$52$$) {
        return $goog$dom$getElementHelper_$$(this.$document_$, $element$$52$$);
    };
    $JSCompiler_prototypeAlias$$.createElement = function $$JSCompiler_prototypeAlias$$$createElement$($name$$67$$) {
        return this.$document_$.createElement($name$$67$$);
    };
    $JSCompiler_prototypeAlias$$.createTextNode = function $$JSCompiler_prototypeAlias$$$createTextNode$($content$$7$$) {
        return this.$document_$.createTextNode(String($content$$7$$));
    };
    $JSCompiler_prototypeAlias$$.$getWindow$ = function $$JSCompiler_prototypeAlias$$$$getWindow$$() {
        var $doc$$inline_1221$$ = this.$document_$;
        return $doc$$inline_1221$$.parentWindow || $doc$$inline_1221$$.defaultView;
    };
    $JSCompiler_prototypeAlias$$.appendChild = function $$JSCompiler_prototypeAlias$$$appendChild$($parent$$8$$, $child$$3$$) {
        $parent$$8$$.appendChild($child$$3$$);
    };
    $JSCompiler_prototypeAlias$$.append = function $$JSCompiler_prototypeAlias$$$append$($parent$$9$$, $var_args$$92$$) {
        $goog$dom$append_$$($goog$dom$getOwnerDocument$$($parent$$9$$), $parent$$9$$, arguments, 1);
    };
    $JSCompiler_prototypeAlias$$.$getChildren$ = $goog$dom$getChildren$$;
    $JSCompiler_prototypeAlias$$.contains = $goog$dom$contains$$;
    function $goog$cssom$getAllCssStyleRules$$() {
        for (var $styleSheet$$inline_245$$ = document.styleSheets, $cssOut$$inline_247$$ = [], $styleSheets$$inline_248$$ = $goog$cssom$getAllCssStyleSheets$$($styleSheet$$inline_245$$), $i$$inline_249$$ = 0; $styleSheet$$inline_245$$ = $styleSheets$$inline_248$$[$i$$inline_249$$]; $i$$inline_249$$++) {
            var $cssRuleList$$inline_250$$ = $goog$cssom$getCssRulesFromStyleSheet$$($styleSheet$$inline_245$$);
            if ($cssRuleList$$inline_250$$ && $cssRuleList$$inline_250$$.length) {
                for (var $ruleIndex$$inline_251$$ = 0, $j$$inline_252$$ = 0, $n$$inline_253$$ = $cssRuleList$$inline_250$$.length, $cssRule$$inline_254$$; $j$$inline_252$$ < $n$$inline_253$$; $j$$inline_252$$++) {
                    $cssRule$$inline_254$$ = $cssRuleList$$inline_250$$[$j$$inline_252$$], $cssRule$$inline_254$$.href || ($cssRule$$inline_254$$.style && ($cssRule$$inline_254$$.parentStyleSheet || ($cssRule$$inline_254$$.style["-closure-parent-stylesheet"] = $styleSheet$$inline_245$$), $cssRule$$inline_254$$.style["-closure-rule-index"] = $ruleIndex$$inline_251$$), $cssOut$$inline_247$$.push($cssRule$$inline_254$$)), $ruleIndex$$inline_251$$++;
                }
            }
        }
        return $cssOut$$inline_247$$;
    }

    function $goog$cssom$getCssRulesFromStyleSheet$$($styleSheet$$2$$) {
        var $cssRuleList$$ = null;
        try {
            $cssRuleList$$ = $styleSheet$$2$$.cssRules || $styleSheet$$2$$.rules;
        } catch ($e$$36$$) {
            if (15 == $e$$36$$.code) {
                throw $e$$36$$.styleSheet = $styleSheet$$2$$, $e$$36$$;
            }
        }
        return $cssRuleList$$;
    }

    function $goog$cssom$getAllCssStyleSheets$$($opt_styleSheet$$2_styleSheet$$3$$) {
        var $styleSheetsOutput$$ = [];
        $opt_styleSheet$$2_styleSheet$$3$$ = $opt_styleSheet$$2_styleSheet$$3$$ || document.styleSheets;
        var $includeDisabled$$ = $goog$isDef$$(void 0) ? void 0 : !1;
        if ($opt_styleSheet$$2_styleSheet$$3$$.imports && $opt_styleSheet$$2_styleSheet$$3$$.imports.length) {
            for (var $i$$121$$ = 0, $n$$11$$ = $opt_styleSheet$$2_styleSheet$$3$$.imports.length; $i$$121$$ < $n$$11$$; $i$$121$$++) {
                $goog$array$extend$$($styleSheetsOutput$$, $goog$cssom$getAllCssStyleSheets$$($opt_styleSheet$$2_styleSheet$$3$$.imports[$i$$121$$]));
            }
        } else {
            if ($opt_styleSheet$$2_styleSheet$$3$$.length) {
                for ($i$$121$$ = 0, $n$$11$$ = $opt_styleSheet$$2_styleSheet$$3$$.length; $i$$121$$ < $n$$11$$; $i$$121$$++) {
                    $goog$array$extend$$($styleSheetsOutput$$, $goog$cssom$getAllCssStyleSheets$$($opt_styleSheet$$2_styleSheet$$3$$[$i$$121$$]));
                }
            } else {
                var $cssRuleList$$1$$ = $goog$cssom$getCssRulesFromStyleSheet$$($opt_styleSheet$$2_styleSheet$$3$$);
                if ($cssRuleList$$1$$ && $cssRuleList$$1$$.length) {
                    for (var $i$$121$$ = 0, $n$$11$$ = $cssRuleList$$1$$.length, $cssRule$$; $i$$121$$ < $n$$11$$; $i$$121$$++) {
                        $cssRule$$ = $cssRuleList$$1$$[$i$$121$$], $cssRule$$.styleSheet && $goog$array$extend$$($styleSheetsOutput$$, $goog$cssom$getAllCssStyleSheets$$($cssRule$$.styleSheet));
                    }
                }
            }
        }
        !($opt_styleSheet$$2_styleSheet$$3$$.type || $opt_styleSheet$$2_styleSheet$$3$$.rules || $opt_styleSheet$$2_styleSheet$$3$$.cssRules) || $opt_styleSheet$$2_styleSheet$$3$$.disabled && !$includeDisabled$$ || $styleSheetsOutput$$.push($opt_styleSheet$$2_styleSheet$$3$$);
        return $styleSheetsOutput$$;
    }
    ;
    var $goog$dom$fullscreen$EventType$CHANGE$$ = $goog$userAgent$WEBKIT$$ ? "webkitfullscreenchange" : $goog$userAgent$GECKO$$ ? "mozfullscreenchange" : $goog$userAgent$IE$$ ? "MSFullscreenChange" : "fullscreenchange";

    function $goog$dom$fullscreen$exitFullScreen$$() {
        var $doc$$28$$ = $goog$dom$getDomHelper$$().$document_$;
        $doc$$28$$.webkitCancelFullScreen ? $doc$$28$$.webkitCancelFullScreen() : $doc$$28$$.mozCancelFullScreen ? $doc$$28$$.mozCancelFullScreen() : $doc$$28$$.msExitFullscreen ? $doc$$28$$.msExitFullscreen() : $doc$$28$$.exitFullscreen && $doc$$28$$.exitFullscreen();
    }
    ;
    var $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ = !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$, $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersionOrHigher$$("9");
    !$goog$userAgent$WEBKIT$$ || $goog$userAgent$isVersionOrHigher$$("528");
    $goog$userAgent$GECKO$$ && $goog$userAgent$isVersionOrHigher$$("1.9b") || $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("8") || $goog$userAgent$OPERA$$ && $goog$userAgent$isVersionOrHigher$$("9.5") || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersionOrHigher$$("528");
    $goog$userAgent$GECKO$$ && !$goog$userAgent$isVersionOrHigher$$("8") || $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("9");
    function $goog$events$BrowserEvent$$($opt_e$$, $opt_currentTarget$$) {
        $goog$events$Event$$.call(this, $opt_e$$ ? $opt_e$$.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.$event_$ = this.state = null;
        $opt_e$$ && this.$init$($opt_e$$, $opt_currentTarget$$);
    }

    $goog$inherits$$($goog$events$BrowserEvent$$, $goog$events$Event$$);
    $goog$events$BrowserEvent$$.prototype.$init$ = function $$goog$events$BrowserEvent$$$$$init$$($e$$37$$, $opt_currentTarget$$1$$) {
        var $type$$95$$ = this.type = $e$$37$$.type;
        this.target = $e$$37$$.target || $e$$37$$.srcElement;
        this.currentTarget = $opt_currentTarget$$1$$;
        var $relatedTarget$$ = $e$$37$$.relatedTarget;
        $relatedTarget$$ ? $goog$userAgent$GECKO$$ && ($goog$reflect$canAccessProperty$$($relatedTarget$$, "nodeName") || ($relatedTarget$$ = null)) : "mouseover" == $type$$95$$ ? $relatedTarget$$ = $e$$37$$.fromElement : "mouseout" == $type$$95$$ && ($relatedTarget$$ = $e$$37$$.toElement);
        this.relatedTarget = $relatedTarget$$;
        this.offsetX = $goog$userAgent$WEBKIT$$ || void 0 !== $e$$37$$.offsetX ? $e$$37$$.offsetX : $e$$37$$.layerX;
        this.offsetY = $goog$userAgent$WEBKIT$$ || void 0 !== $e$$37$$.offsetY ? $e$$37$$.offsetY : $e$$37$$.layerY;
        this.clientX = void 0 !== $e$$37$$.clientX ? $e$$37$$.clientX : $e$$37$$.pageX;
        this.clientY = void 0 !== $e$$37$$.clientY ? $e$$37$$.clientY : $e$$37$$.pageY;
        this.screenX = $e$$37$$.screenX || 0;
        this.screenY = $e$$37$$.screenY || 0;
        this.button = $e$$37$$.button;
        this.keyCode = $e$$37$$.keyCode || 0;
        this.charCode = $e$$37$$.charCode || ("keypress" == $type$$95$$ ? $e$$37$$.keyCode : 0);
        this.ctrlKey = $e$$37$$.ctrlKey;
        this.altKey = $e$$37$$.altKey;
        this.shiftKey = $e$$37$$.shiftKey;
        this.metaKey = $e$$37$$.metaKey;
        this.state = $e$$37$$.state;
        this.$event_$ = $e$$37$$;
        $e$$37$$.defaultPrevented && this.preventDefault();
    };
    $goog$events$BrowserEvent$$.prototype.preventDefault = function $$goog$events$BrowserEvent$$$$preventDefault$() {
        $goog$events$BrowserEvent$$.$superClass_$.preventDefault.call(this);
        var $be$$ = this.$event_$;
        if ($be$$.preventDefault) {
            $be$$.preventDefault();
        } else {
            if ($be$$.returnValue = !1, $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$) {
                try {
                    if ($be$$.ctrlKey || 112 <= $be$$.keyCode && 123 >= $be$$.keyCode) {
                        $be$$.keyCode = -1;
                    }
                } catch ($ex$$9$$) {
                }
            }
        }
    };
    $goog$events$BrowserEvent$$.prototype.$disposeInternal$ = function $$goog$events$BrowserEvent$$$$$disposeInternal$$() {
    };
    var $goog$events$LISTENER_MAP_PROP_$$ = "closure_lm_" + (1E6 * Math.random() | 0), $goog$events$onStringMap_$$ = {}, $goog$events$listenerCountEstimate_$$ = 0;

    function $goog$events$listen$$($src$$6$$, $type$$96$$, $listener$$49$$, $opt_capt$$, $opt_handler$$1$$) {
        if ($goog$isArray$$($type$$96$$)) {
            for (var $i$$124$$ = 0; $i$$124$$ < $type$$96$$.length; $i$$124$$++) {
                $goog$events$listen$$($src$$6$$, $type$$96$$[$i$$124$$], $listener$$49$$, $opt_capt$$, $opt_handler$$1$$);
            }
            return null;
        }
        $listener$$49$$ = $goog$events$wrapListener$$($listener$$49$$);
        return $goog$events$Listenable$isImplementedBy$$($src$$6$$) ? $src$$6$$.$listen$($type$$96$$, $listener$$49$$, $opt_capt$$, $opt_handler$$1$$) : $goog$events$listen_$$($src$$6$$, $type$$96$$, $listener$$49$$, !1, $opt_capt$$, $opt_handler$$1$$);
    }

    function $goog$events$listen_$$($src$$7$$, $type$$97$$, $listener$$50_listenerObj$$4$$, $callOnce$$1_proxy$$1$$, $opt_capt$$1$$, $opt_handler$$2$$) {
        if (!$type$$97$$) {
            throw Error("Invalid event type");
        }
        var $capture$$3$$ = !!$opt_capt$$1$$, $listenerMap$$ = $goog$events$getListenerMap_$$($src$$7$$);
        $listenerMap$$ || ($src$$7$$[$goog$events$LISTENER_MAP_PROP_$$] = $listenerMap$$ = new $goog$events$ListenerMap$$($src$$7$$));
        $listener$$50_listenerObj$$4$$ = $listenerMap$$.add($type$$97$$, $listener$$50_listenerObj$$4$$, $callOnce$$1_proxy$$1$$, $opt_capt$$1$$, $opt_handler$$2$$);
        if ($listener$$50_listenerObj$$4$$.proxy) {
            return $listener$$50_listenerObj$$4$$;
        }
        $callOnce$$1_proxy$$1$$ = $goog$events$getProxy$$();
        $listener$$50_listenerObj$$4$$.proxy = $callOnce$$1_proxy$$1$$;
        $callOnce$$1_proxy$$1$$.src = $src$$7$$;
        $callOnce$$1_proxy$$1$$.$listener$ = $listener$$50_listenerObj$$4$$;
        $src$$7$$.addEventListener ? $src$$7$$.addEventListener($type$$97$$.toString(), $callOnce$$1_proxy$$1$$, $capture$$3$$) : $src$$7$$.attachEvent($goog$events$getOnString_$$($type$$97$$.toString()), $callOnce$$1_proxy$$1$$);
        $goog$events$listenerCountEstimate_$$++;
        return $listener$$50_listenerObj$$4$$;
    }

    function $goog$events$getProxy$$() {
        var $proxyCallbackFunction$$ = $goog$events$handleBrowserEvent_$$, $f$$48$$ = $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ ? function ($eventObject$$) {
            return $proxyCallbackFunction$$.call($f$$48$$.src, $f$$48$$.$listener$, $eventObject$$);
        } : function ($eventObject$$1_v$$1$$) {
            $eventObject$$1_v$$1$$ = $proxyCallbackFunction$$.call($f$$48$$.src, $f$$48$$.$listener$, $eventObject$$1_v$$1$$);
            if (!$eventObject$$1_v$$1$$) {
                return $eventObject$$1_v$$1$$;
            }
        };
        return $f$$48$$;
    }

    function $goog$events$listenOnce$$($src$$8$$, $type$$98$$, $listener$$51$$, $opt_capt$$2$$, $opt_handler$$3$$) {
        if ($goog$isArray$$($type$$98$$)) {
            for (var $i$$125$$ = 0; $i$$125$$ < $type$$98$$.length; $i$$125$$++) {
                $goog$events$listenOnce$$($src$$8$$, $type$$98$$[$i$$125$$], $listener$$51$$, $opt_capt$$2$$, $opt_handler$$3$$);
            }
            return null;
        }
        $listener$$51$$ = $goog$events$wrapListener$$($listener$$51$$);
        return $goog$events$Listenable$isImplementedBy$$($src$$8$$) ? $src$$8$$.$listenOnce$($type$$98$$, $listener$$51$$, $opt_capt$$2$$, $opt_handler$$3$$) : $goog$events$listen_$$($src$$8$$, $type$$98$$, $listener$$51$$, !0, $opt_capt$$2$$, $opt_handler$$3$$);
    }

    function $goog$events$unlisten$$($listenerMap$$1_src$$10$$, $listenerObj$$5_type$$99$$, $listener$$53$$, $opt_capt$$4$$, $opt_handler$$5$$) {
        if ($goog$isArray$$($listenerObj$$5_type$$99$$)) {
            for (var $i$$126$$ = 0; $i$$126$$ < $listenerObj$$5_type$$99$$.length; $i$$126$$++) {
                $goog$events$unlisten$$($listenerMap$$1_src$$10$$, $listenerObj$$5_type$$99$$[$i$$126$$], $listener$$53$$, $opt_capt$$4$$, $opt_handler$$5$$);
            }
            return null;
        }
        $listener$$53$$ = $goog$events$wrapListener$$($listener$$53$$);
        if ($goog$events$Listenable$isImplementedBy$$($listenerMap$$1_src$$10$$)) {
            return $listenerMap$$1_src$$10$$.$unlisten$($listenerObj$$5_type$$99$$, $listener$$53$$, $opt_capt$$4$$, $opt_handler$$5$$);
        }
        if (!$listenerMap$$1_src$$10$$) {
            return !1;
        }
        if ($listenerMap$$1_src$$10$$ = $goog$events$getListenerMap_$$($listenerMap$$1_src$$10$$)) {
            if ($listenerObj$$5_type$$99$$ = $listenerMap$$1_src$$10$$.$getListener$($listenerObj$$5_type$$99$$, $listener$$53$$, !!$opt_capt$$4$$, $opt_handler$$5$$)) {
                return $goog$events$unlistenByKey$$($listenerObj$$5_type$$99$$);
            }
        }
        return !1;
    }

    function $goog$events$unlistenByKey$$($key$$69$$) {
        if ($goog$isNumber$$($key$$69$$) || !$key$$69$$ || $key$$69$$.$removed$) {
            return !1;
        }
        var $src$$11$$ = $key$$69$$.src;
        if ($goog$events$Listenable$isImplementedBy$$($src$$11$$)) {
            return $JSCompiler_StaticMethods_removeByKey$$($src$$11$$.$eventTargetListeners_$, $key$$69$$);
        }
        var $listenerMap$$2_type$$100$$ = $key$$69$$.type, $proxy$$2$$ = $key$$69$$.proxy;
        $src$$11$$.removeEventListener ? $src$$11$$.removeEventListener($listenerMap$$2_type$$100$$, $proxy$$2$$, $key$$69$$.$capture$) : $src$$11$$.detachEvent && $src$$11$$.detachEvent($goog$events$getOnString_$$($listenerMap$$2_type$$100$$), $proxy$$2$$);
        $goog$events$listenerCountEstimate_$$--;
        ($listenerMap$$2_type$$100$$ = $goog$events$getListenerMap_$$($src$$11$$)) ? ($JSCompiler_StaticMethods_removeByKey$$($listenerMap$$2_type$$100$$, $key$$69$$), 0 == $listenerMap$$2_type$$100$$.$typeCount_$ && ($listenerMap$$2_type$$100$$.src = null, $src$$11$$[$goog$events$LISTENER_MAP_PROP_$$] = null)) : $JSCompiler_StaticMethods_markAsRemoved$$($key$$69$$);
        return !0;
    }

    function $goog$events$getListener$$($listenerMap$$5_src$$13$$, $type$$103$$, $listener$$56$$, $capture$$6_opt_capt$$6$$, $opt_handler$$7$$) {
        $listener$$56$$ = $goog$events$wrapListener$$($listener$$56$$);
        $capture$$6_opt_capt$$6$$ = !!$capture$$6_opt_capt$$6$$;
        return $goog$events$Listenable$isImplementedBy$$($listenerMap$$5_src$$13$$) ? $listenerMap$$5_src$$13$$.$getListener$($type$$103$$, $listener$$56$$, $capture$$6_opt_capt$$6$$, $opt_handler$$7$$) : $listenerMap$$5_src$$13$$ ? ($listenerMap$$5_src$$13$$ = $goog$events$getListenerMap_$$($listenerMap$$5_src$$13$$)) ? $listenerMap$$5_src$$13$$.$getListener$($type$$103$$, $listener$$56$$, $capture$$6_opt_capt$$6$$, $opt_handler$$7$$) : null : null;
    }

    function $goog$events$getOnString_$$($type$$104$$) {
        return $type$$104$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$$104$$] : $goog$events$onStringMap_$$[$type$$104$$] = "on" + $type$$104$$;
    }

    function $goog$events$fireListeners_$$($i$$128_listenerMap$$7_obj$$108$$, $listenerArray$$7_type$$106$$, $capture$$8$$, $eventObject$$3$$) {
        var $retval$$ = 1;
        if ($i$$128_listenerMap$$7_obj$$108$$ = $goog$events$getListenerMap_$$($i$$128_listenerMap$$7_obj$$108$$)) {
            if ($listenerArray$$7_type$$106$$ = $i$$128_listenerMap$$7_obj$$108$$.$listeners$[$listenerArray$$7_type$$106$$.toString()]) {
                for ($listenerArray$$7_type$$106$$ = $listenerArray$$7_type$$106$$.concat(), $i$$128_listenerMap$$7_obj$$108$$ = 0; $i$$128_listenerMap$$7_obj$$108$$ < $listenerArray$$7_type$$106$$.length; $i$$128_listenerMap$$7_obj$$108$$++) {
                    var $listener$$57$$ = $listenerArray$$7_type$$106$$[$i$$128_listenerMap$$7_obj$$108$$];
                    $listener$$57$$ && $listener$$57$$.$capture$ == $capture$$8$$ && !$listener$$57$$.$removed$ && ($retval$$ &= !1 !== $goog$events$fireListener$$($listener$$57$$, $eventObject$$3$$));
                }
            }
        }
        return Boolean($retval$$);
    }

    function $goog$events$fireListener$$($listener$$58$$, $eventObject$$4$$) {
        var $listenerFn$$ = $listener$$58$$.$listener$, $listenerHandler$$ = $listener$$58$$.$handler$ || $listener$$58$$.src;
        $listener$$58$$.$callOnce$ && $goog$events$unlistenByKey$$($listener$$58$$);
        return $listenerFn$$.call($listenerHandler$$, $eventObject$$4$$);
    }

    function $goog$events$dispatchEvent$$($src$$14$$, $e$$39$$) {
        $goog$asserts$assert$$($goog$events$Listenable$isImplementedBy$$($src$$14$$), "Can not use goog.events.dispatchEvent with non-goog.events.Listenable instance.");
        $src$$14$$.dispatchEvent($e$$39$$);
    }

    function $goog$events$handleBrowserEvent_$$($listener$$59$$, $opt_evt$$) {
        if ($listener$$59$$.$removed$) {
            return !0;
        }
        if (!$goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$) {
            var $ancestors$$1_ieEvent$$ = $opt_evt$$ || $goog$getObjectByName$$("window.event"), $evt$$21$$ = new $goog$events$BrowserEvent$$($ancestors$$1_ieEvent$$, this), $retval$$1$$ = !0;
            if (!(0 > $ancestors$$1_ieEvent$$.keyCode || void 0 != $ancestors$$1_ieEvent$$.returnValue)) {
                a: {
                    var $parent$$17_type$$107_useReturnValue$$inline_258$$ = !1;
                    if (0 == $ancestors$$1_ieEvent$$.keyCode) {
                        try {
                            $ancestors$$1_ieEvent$$.keyCode = -1;
                            break a;
                        } catch ($ex$$inline_259$$) {
                            $parent$$17_type$$107_useReturnValue$$inline_258$$ = !0;
                        }
                    }
                    if ($parent$$17_type$$107_useReturnValue$$inline_258$$ || void 0 == $ancestors$$1_ieEvent$$.returnValue) {
                        $ancestors$$1_ieEvent$$.returnValue = !0;
                    }
                }
                $ancestors$$1_ieEvent$$ = [];
                for ($parent$$17_type$$107_useReturnValue$$inline_258$$ = $evt$$21$$.currentTarget; $parent$$17_type$$107_useReturnValue$$inline_258$$; $parent$$17_type$$107_useReturnValue$$inline_258$$ = $parent$$17_type$$107_useReturnValue$$inline_258$$.parentNode) {
                    $ancestors$$1_ieEvent$$.push($parent$$17_type$$107_useReturnValue$$inline_258$$);
                }
                for (var $parent$$17_type$$107_useReturnValue$$inline_258$$ = $listener$$59$$.type, $i$$129$$ = $ancestors$$1_ieEvent$$.length - 1; !$evt$$21$$.$propagationStopped_$ && 0 <= $i$$129$$; $i$$129$$--) {
                    $evt$$21$$.currentTarget = $ancestors$$1_ieEvent$$[$i$$129$$], $retval$$1$$ &= $goog$events$fireListeners_$$($ancestors$$1_ieEvent$$[$i$$129$$], $parent$$17_type$$107_useReturnValue$$inline_258$$, !0, $evt$$21$$);
                }
                for ($i$$129$$ = 0; !$evt$$21$$.$propagationStopped_$ && $i$$129$$ < $ancestors$$1_ieEvent$$.length; $i$$129$$++) {
                    $evt$$21$$.currentTarget = $ancestors$$1_ieEvent$$[$i$$129$$], $retval$$1$$ &= $goog$events$fireListeners_$$($ancestors$$1_ieEvent$$[$i$$129$$], $parent$$17_type$$107_useReturnValue$$inline_258$$, !1, $evt$$21$$);
                }
            }
            return $retval$$1$$;
        }
        return $goog$events$fireListener$$($listener$$59$$, new $goog$events$BrowserEvent$$($opt_evt$$, this));
    }

    function $goog$events$getListenerMap_$$($listenerMap$$8_src$$15$$) {
        $listenerMap$$8_src$$15$$ = $listenerMap$$8_src$$15$$[$goog$events$LISTENER_MAP_PROP_$$];
        return $listenerMap$$8_src$$15$$ instanceof $goog$events$ListenerMap$$ ? $listenerMap$$8_src$$15$$ : null;
    }

    var $goog$events$LISTENER_WRAPPER_PROP_$$ = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function $goog$events$wrapListener$$($listener$$60$$) {
        $goog$asserts$assert$$($listener$$60$$, "Listener can not be null.");
        if ($goog$isFunction$$($listener$$60$$)) {
            return $listener$$60$$;
        }
        $goog$asserts$assert$$($listener$$60$$.handleEvent, "An object listener must have handleEvent method.");
        return $listener$$60$$[$goog$events$LISTENER_WRAPPER_PROP_$$] || ($listener$$60$$[$goog$events$LISTENER_WRAPPER_PROP_$$] = function $$listener$$60$$$$goog$events$LISTENER_WRAPPER_PROP_$$$($e$$42$$) {
                return $listener$$60$$.handleEvent($e$$42$$);
            });
    }
    ;
    function $goog$events$EventHandler$$($opt_scope$$1$$) {
        $goog$Disposable$$.call(this);
        this.$handler_$ = $opt_scope$$1$$;
        this.$keys_$ = {};
    }

    $goog$inherits$$($goog$events$EventHandler$$, $goog$Disposable$$);
    var $goog$events$EventHandler$typeArray_$$ = [];
    $JSCompiler_prototypeAlias$$ = $goog$events$EventHandler$$.prototype;
    $JSCompiler_prototypeAlias$$.$listen$ = function $$JSCompiler_prototypeAlias$$$$listen$$($src$$16$$, $type$$108_type$$inline_263$$, $opt_fn$$6$$, $opt_capture$$2$$) {
        $goog$isArray$$($type$$108_type$$inline_263$$) || ($type$$108_type$$inline_263$$ && ($goog$events$EventHandler$typeArray_$$[0] = $type$$108_type$$inline_263$$.toString()), $type$$108_type$$inline_263$$ = $goog$events$EventHandler$typeArray_$$);
        for (var $i$$inline_267$$ = 0; $i$$inline_267$$ < $type$$108_type$$inline_263$$.length; $i$$inline_267$$++) {
            var $listenerObj$$inline_268$$ = $goog$events$listen$$($src$$16$$, $type$$108_type$$inline_263$$[$i$$inline_267$$], $opt_fn$$6$$ || this.handleEvent, $opt_capture$$2$$ || !1, this.$handler_$ || this);
            if (!$listenerObj$$inline_268$$) {
                break;
            }
            this.$keys_$[$listenerObj$$inline_268$$.key] = $listenerObj$$inline_268$$;
        }
        return this;
    };
    $JSCompiler_prototypeAlias$$.$listenOnce$ = function $$JSCompiler_prototypeAlias$$$$listenOnce$$($src$$19$$, $type$$111$$, $opt_fn$$8$$, $opt_capture$$4$$) {
        return $JSCompiler_StaticMethods_listenOnce_$$(this, $src$$19$$, $type$$111$$, $opt_fn$$8$$, $opt_capture$$4$$);
    };
    function $JSCompiler_StaticMethods_listenOnce_$$($JSCompiler_StaticMethods_listenOnce_$self$$, $listenerObj$$7_src$$21$$, $type$$113$$, $opt_fn$$9$$, $opt_capture$$5$$, $opt_scope$$3$$) {
        if ($goog$isArray$$($type$$113$$)) {
            for (var $i$$131$$ = 0; $i$$131$$ < $type$$113$$.length; $i$$131$$++) {
                $JSCompiler_StaticMethods_listenOnce_$$($JSCompiler_StaticMethods_listenOnce_$self$$, $listenerObj$$7_src$$21$$, $type$$113$$[$i$$131$$], $opt_fn$$9$$, $opt_capture$$5$$, $opt_scope$$3$$);
            }
        } else {
            $listenerObj$$7_src$$21$$ = $goog$events$listenOnce$$($listenerObj$$7_src$$21$$, $type$$113$$, $opt_fn$$9$$ || $JSCompiler_StaticMethods_listenOnce_$self$$.handleEvent, $opt_capture$$5$$, $opt_scope$$3$$ || $JSCompiler_StaticMethods_listenOnce_$self$$.$handler_$ || $JSCompiler_StaticMethods_listenOnce_$self$$);
            if (!$listenerObj$$7_src$$21$$) {
                return $JSCompiler_StaticMethods_listenOnce_$self$$;
            }
            $JSCompiler_StaticMethods_listenOnce_$self$$.$keys_$[$listenerObj$$7_src$$21$$.key] = $listenerObj$$7_src$$21$$;
        }
        return $JSCompiler_StaticMethods_listenOnce_$self$$;
    }

    $JSCompiler_prototypeAlias$$.$unlisten$ = function $$JSCompiler_prototypeAlias$$$$unlisten$$($listener$$65_src$$25$$, $type$$114$$, $opt_fn$$10$$, $opt_capture$$6$$, $opt_scope$$5$$) {
        if ($goog$isArray$$($type$$114$$)) {
            for (var $i$$132$$ = 0; $i$$132$$ < $type$$114$$.length; $i$$132$$++) {
                this.$unlisten$($listener$$65_src$$25$$, $type$$114$$[$i$$132$$], $opt_fn$$10$$, $opt_capture$$6$$, $opt_scope$$5$$);
            }
        } else {
            if ($listener$$65_src$$25$$ = $goog$events$getListener$$($listener$$65_src$$25$$, $type$$114$$, $opt_fn$$10$$ || this.handleEvent, $opt_capture$$6$$, $opt_scope$$5$$ || this.$handler_$ || this)) {
                $goog$events$unlistenByKey$$($listener$$65_src$$25$$), delete this.$keys_$[$listener$$65_src$$25$$.key];
            }
        }
        return this;
    };
    $JSCompiler_prototypeAlias$$.removeAll = function $$JSCompiler_prototypeAlias$$$removeAll$() {
        $goog$object$forEach$$(this.$keys_$, $goog$events$unlistenByKey$$);
        this.$keys_$ = {};
    };
    $JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
        $goog$events$EventHandler$$.$superClass_$.$disposeInternal$.call(this);
        this.removeAll();
    };
    $JSCompiler_prototypeAlias$$.handleEvent = function $$JSCompiler_prototypeAlias$$$handleEvent$() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    function $goog$events$EventTarget$$() {
        $goog$Disposable$$.call(this);
        this.$eventTargetListeners_$ = new $goog$events$ListenerMap$$(this);
        this.$actualEventTarget_$ = this;
        this.$parentEventTarget_$ = null;
    }

    $goog$inherits$$($goog$events$EventTarget$$, $goog$Disposable$$);
    $goog$events$EventTarget$$.prototype[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$] = !0;
    $JSCompiler_prototypeAlias$$ = $goog$events$EventTarget$$.prototype;
    $JSCompiler_prototypeAlias$$.addEventListener = function $$JSCompiler_prototypeAlias$$$addEventListener$($type$$115$$, $handler$$45$$, $opt_capture$$7$$, $opt_handlerScope$$) {
        $goog$events$listen$$(this, $type$$115$$, $handler$$45$$, $opt_capture$$7$$, $opt_handlerScope$$);
    };
    $JSCompiler_prototypeAlias$$.removeEventListener = function $$JSCompiler_prototypeAlias$$$removeEventListener$($type$$116$$, $handler$$46$$, $opt_capture$$8$$, $opt_handlerScope$$1$$) {
        $goog$events$unlisten$$(this, $type$$116$$, $handler$$46$$, $opt_capture$$8$$, $opt_handlerScope$$1$$);
    };
    $JSCompiler_prototypeAlias$$.dispatchEvent = function $$JSCompiler_prototypeAlias$$$dispatchEvent$($e$$44_e$$inline_273$$) {
        $JSCompiler_StaticMethods_assertInitialized_$$(this);
        var $ancestorsTree_opt_ancestorsTree$$inline_274$$, $ancestor_target$$inline_272$$ = this.$parentEventTarget_$;
        if ($ancestor_target$$inline_272$$) {
            $ancestorsTree_opt_ancestorsTree$$inline_274$$ = [];
            for (var $ancestorCount_type$$inline_275$$ = 1; $ancestor_target$$inline_272$$; $ancestor_target$$inline_272$$ = $ancestor_target$$inline_272$$.$parentEventTarget_$) {
                $ancestorsTree_opt_ancestorsTree$$inline_274$$.push($ancestor_target$$inline_272$$), $goog$asserts$assert$$(1E3 > ++$ancestorCount_type$$inline_275$$, "infinite loop");
            }
        }
        $ancestor_target$$inline_272$$ = this.$actualEventTarget_$;
        $ancestorCount_type$$inline_275$$ = $e$$44_e$$inline_273$$.type || $e$$44_e$$inline_273$$;
        if ($goog$isString$$($e$$44_e$$inline_273$$)) {
            $e$$44_e$$inline_273$$ = new $goog$events$Event$$($e$$44_e$$inline_273$$, $ancestor_target$$inline_272$$);
        } else {
            if ($e$$44_e$$inline_273$$ instanceof $goog$events$Event$$) {
                $e$$44_e$$inline_273$$.target = $e$$44_e$$inline_273$$.target || $ancestor_target$$inline_272$$;
            } else {
                var $oldEvent$$inline_276_rv$$inline_277$$ = $e$$44_e$$inline_273$$;
                $e$$44_e$$inline_273$$ = new $goog$events$Event$$($ancestorCount_type$$inline_275$$, $ancestor_target$$inline_272$$);
                $goog$object$extend$$($e$$44_e$$inline_273$$, $oldEvent$$inline_276_rv$$inline_277$$);
            }
        }
        var $oldEvent$$inline_276_rv$$inline_277$$ = !0, $currentTarget$$inline_278$$;
        if ($ancestorsTree_opt_ancestorsTree$$inline_274$$) {
            for (var $i$$inline_279$$ = $ancestorsTree_opt_ancestorsTree$$inline_274$$.length - 1; !$e$$44_e$$inline_273$$.$propagationStopped_$ && 0 <= $i$$inline_279$$; $i$$inline_279$$--) {
                $currentTarget$$inline_278$$ = $e$$44_e$$inline_273$$.currentTarget = $ancestorsTree_opt_ancestorsTree$$inline_274$$[$i$$inline_279$$], $oldEvent$$inline_276_rv$$inline_277$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$$inline_278$$, $ancestorCount_type$$inline_275$$, !0, $e$$44_e$$inline_273$$) && $oldEvent$$inline_276_rv$$inline_277$$;
            }
        }
        $e$$44_e$$inline_273$$.$propagationStopped_$ || ($currentTarget$$inline_278$$ = $e$$44_e$$inline_273$$.currentTarget = $ancestor_target$$inline_272$$, $oldEvent$$inline_276_rv$$inline_277$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$$inline_278$$, $ancestorCount_type$$inline_275$$, !0, $e$$44_e$$inline_273$$) && $oldEvent$$inline_276_rv$$inline_277$$, $e$$44_e$$inline_273$$.$propagationStopped_$ || ($oldEvent$$inline_276_rv$$inline_277$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$$inline_278$$,
                $ancestorCount_type$$inline_275$$, !1, $e$$44_e$$inline_273$$) && $oldEvent$$inline_276_rv$$inline_277$$));
        if ($ancestorsTree_opt_ancestorsTree$$inline_274$$) {
            for ($i$$inline_279$$ = 0; !$e$$44_e$$inline_273$$.$propagationStopped_$ && $i$$inline_279$$ < $ancestorsTree_opt_ancestorsTree$$inline_274$$.length; $i$$inline_279$$++) {
                $currentTarget$$inline_278$$ = $e$$44_e$$inline_273$$.currentTarget = $ancestorsTree_opt_ancestorsTree$$inline_274$$[$i$$inline_279$$], $oldEvent$$inline_276_rv$$inline_277$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$$inline_278$$, $ancestorCount_type$$inline_275$$, !1, $e$$44_e$$inline_273$$) && $oldEvent$$inline_276_rv$$inline_277$$;
            }
        }
        return $oldEvent$$inline_276_rv$$inline_277$$;
    };
    $JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
        $goog$events$EventTarget$$.$superClass_$.$disposeInternal$.call(this);
        this.removeAllListeners();
        this.$parentEventTarget_$ = null;
    };
    $JSCompiler_prototypeAlias$$.$listen$ = function $$JSCompiler_prototypeAlias$$$$listen$$($type$$117$$, $listener$$67$$, $opt_useCapture$$40$$, $opt_listenerScope$$4$$) {
        $JSCompiler_StaticMethods_assertInitialized_$$(this);
        return this.$eventTargetListeners_$.add(String($type$$117$$), $listener$$67$$, !1, $opt_useCapture$$40$$, $opt_listenerScope$$4$$);
    };
    $JSCompiler_prototypeAlias$$.$listenOnce$ = function $$JSCompiler_prototypeAlias$$$$listenOnce$$($type$$118$$, $listener$$68$$, $opt_useCapture$$41$$, $opt_listenerScope$$5$$) {
        return this.$eventTargetListeners_$.add(String($type$$118$$), $listener$$68$$, !0, $opt_useCapture$$41$$, $opt_listenerScope$$5$$);
    };
    $JSCompiler_prototypeAlias$$.$unlisten$ = function $$JSCompiler_prototypeAlias$$$$unlisten$$($type$$119$$, $listener$$69$$, $opt_useCapture$$42$$, $opt_listenerScope$$6$$) {
        return this.$eventTargetListeners_$.remove(String($type$$119$$), $listener$$69$$, $opt_useCapture$$42$$, $opt_listenerScope$$6$$);
    };
    $JSCompiler_prototypeAlias$$.removeAllListeners = function $$JSCompiler_prototypeAlias$$$removeAllListeners$($opt_type$$11$$) {
        return this.$eventTargetListeners_$ ? this.$eventTargetListeners_$.removeAll($opt_type$$11$$) : 0;
    };
    function $JSCompiler_StaticMethods_fireListeners$$($JSCompiler_StaticMethods_fireListeners$self$$, $listenerArray$$8_type$$120$$, $capture$$12$$, $eventObject$$5$$) {
        $listenerArray$$8_type$$120$$ = $JSCompiler_StaticMethods_fireListeners$self$$.$eventTargetListeners_$.$listeners$[String($listenerArray$$8_type$$120$$)];
        if (!$listenerArray$$8_type$$120$$) {
            return !0;
        }
        $listenerArray$$8_type$$120$$ = $listenerArray$$8_type$$120$$.concat();
        for (var $rv$$22$$ = !0, $i$$133$$ = 0; $i$$133$$ < $listenerArray$$8_type$$120$$.length; ++$i$$133$$) {
            var $listener$$70$$ = $listenerArray$$8_type$$120$$[$i$$133$$];
            if ($listener$$70$$ && !$listener$$70$$.$removed$ && $listener$$70$$.$capture$ == $capture$$12$$) {
                var $listenerFn$$1$$ = $listener$$70$$.$listener$, $listenerHandler$$1$$ = $listener$$70$$.$handler$ || $listener$$70$$.src;
                $listener$$70$$.$callOnce$ && $JSCompiler_StaticMethods_removeByKey$$($JSCompiler_StaticMethods_fireListeners$self$$.$eventTargetListeners_$, $listener$$70$$);
                $rv$$22$$ = !1 !== $listenerFn$$1$$.call($listenerHandler$$1$$, $eventObject$$5$$) && $rv$$22$$;
            }
        }
        return $rv$$22$$ && !1 != $eventObject$$5$$.$returnValue_$;
    }

    $JSCompiler_prototypeAlias$$.$getListener$ = function $$JSCompiler_prototypeAlias$$$$getListener$$($type$$122$$, $listener$$71$$, $capture$$14$$, $opt_listenerScope$$7$$) {
        return this.$eventTargetListeners_$.$getListener$(String($type$$122$$), $listener$$71$$, $capture$$14$$, $opt_listenerScope$$7$$);
    };
    function $JSCompiler_StaticMethods_assertInitialized_$$($JSCompiler_StaticMethods_assertInitialized_$self$$) {
        $goog$asserts$assert$$($JSCompiler_StaticMethods_assertInitialized_$self$$.$eventTargetListeners_$, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
    }
    ;
    $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$(8);
    function $goog$log$log$$($msg$$15$$) {
        var $logger$$6$$ = $goog$net$xpc$logger$$;
        $logger$$6$$ && $logger$$6$$.log($goog$debug$Logger$Level$FINEST$$, $msg$$15$$, void 0);
    }

    function $goog$log$error$$($logger$$7$$, $msg$$16$$, $opt_exception$$11$$) {
        $logger$$7$$ && $logger$$7$$.log($goog$debug$Logger$Level$SEVERE$$, $msg$$16$$, $opt_exception$$11$$);
    }

    function $goog$log$warning$$($logger$$8$$, $msg$$17$$, $opt_exception$$12$$) {
        $logger$$8$$ && $logger$$8$$.log($goog$debug$Logger$Level$WARNING$$, $msg$$17$$, $opt_exception$$12$$);
    }

    function $goog$log$info$$($msg$$18$$) {
        var $logger$$9$$ = $goog$net$xpc$logger$$;
        $logger$$9$$ && $logger$$9$$.info($msg$$18$$, void 0);
    }

    function $goog$log$fine$$($logger$$10$$, $msg$$19$$) {
        $logger$$10$$ && $logger$$10$$.log($goog$debug$Logger$Level$FINE$$, $msg$$19$$, void 0);
    }
    ;
    function $goog$messaging$AbstractChannel$$() {
        $goog$Disposable$$.call(this);
        this.$services_$ = {};
    }

    $goog$inherits$$($goog$messaging$AbstractChannel$$, $goog$Disposable$$);
    $goog$messaging$AbstractChannel$$.prototype.logger = $goog$debug$LogManager$getLogger$$("goog.messaging.AbstractChannel");
    $goog$messaging$AbstractChannel$$.prototype.$connect$ = function $$goog$messaging$AbstractChannel$$$$$connect$$($opt_connectCb$$1$$) {
        $opt_connectCb$$1$$ && $opt_connectCb$$1$$();
    };
    $goog$messaging$AbstractChannel$$.prototype.$isConnected$ = function $$goog$messaging$AbstractChannel$$$$$isConnected$$() {
        return !0;
    };
    function $JSCompiler_StaticMethods_registerService$$($JSCompiler_StaticMethods_registerService$self$$,
                                                         $serviceName$$2$$,
                                                         $callback$$61$$,
                                                         $opt_objectPayload$$1$$) {
        //console.log('registerService:' + $serviceName$$2$$);
        //console.log($opt_objectPayload$$1$$);
        $JSCompiler_StaticMethods_registerService$self$$.$services_$[$serviceName$$2$$] = {
            $callback$: $callback$$61$$,
            $objectPayload$: !!$opt_objectPayload$$1$$
        };
    }

    $goog$messaging$AbstractChannel$$.prototype.$disposeInternal$ = function $$goog$messaging$AbstractChannel$$$$$disposeInternal$$() {
        $goog$messaging$AbstractChannel$$.$superClass_$.$disposeInternal$.call(this);
        delete this.logger;
        delete this.$services_$;
        delete this.$defaultService_$;
    };
    var $goog$net$xpc$TransportNames$$ = {
        1: "NativeMessagingTransport",
        2: "FrameElementMethodTransport",
        3: "IframeRelayTransport",
        4: "IframePollingTransport",
        5: "FlashTransport",
        6: "NixTransport",
        7: "DirectTransport"
    }, $goog$net$xpc$UriCfgFields$$ = ["pu", "lru", "pru", "lpu", "ppu"], $goog$net$xpc$channels$$ = {};

    function $goog$net$xpc$getRandomString$$($length$$22$$) {
        for (var $chars$$2$$ = $goog$net$xpc$randomStringCharacters_$$, $charsLength$$ = $chars$$2$$.length, $s$$30$$ = ""; 0 < $length$$22$$--;) {
            $s$$30$$ += $chars$$2$$.charAt(Math.floor(Math.random() * $charsLength$$));
        }
        return $s$$30$$;
    }

    var $goog$net$xpc$randomStringCharacters_$$ = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", $goog$net$xpc$logger$$ = $goog$debug$LogManager$getLogger$$("goog.net.xpc");

    function $goog$net$xpc$Transport$$($opt_domHelper$$5$$) {
        $goog$Disposable$$.call(this);
        this.$domHelper_$ = $opt_domHelper$$5$$ || $goog$dom$getDomHelper$$();
    }

    $goog$inherits$$($goog$net$xpc$Transport$$, $goog$Disposable$$);
    $goog$net$xpc$Transport$$.prototype.$transportType$ = 0;
    $goog$net$xpc$Transport$$.prototype.$getWindow$ = function $$goog$net$xpc$Transport$$$$$getWindow$$() {
        return this.$domHelper_$.$getWindow$();
    };
    $goog$net$xpc$Transport$$.prototype.getName = function $$goog$net$xpc$Transport$$$$getName$() {
        return $goog$net$xpc$TransportNames$$[this.$transportType$] || "";
    };
    function $goog$net$xpc$FrameElementMethodTransport$$($channel$$1$$, $opt_domHelper$$6$$) {
        $goog$net$xpc$Transport$$.call(this, $opt_domHelper$$6$$);
        this.$channel_$ = $channel$$1$$;
        this.$queue_$ = [];
        this.$deliverQueuedCb_$ = $goog$bind$$(this.$deliverQueued_$, this);
    }

    $goog$inherits$$($goog$net$xpc$FrameElementMethodTransport$$, $goog$net$xpc$Transport$$);
    $JSCompiler_prototypeAlias$$ = $goog$net$xpc$FrameElementMethodTransport$$.prototype;
    $JSCompiler_prototypeAlias$$.$transportType$ = 2;
    $JSCompiler_prototypeAlias$$.$recursive_$ = !1;
    $JSCompiler_prototypeAlias$$.$timer_$ = 0;
    $JSCompiler_prototypeAlias$$.$connect$ = function $$JSCompiler_prototypeAlias$$$$connect$$() {
        0 == $JSCompiler_StaticMethods_getRole$$(this.$channel_$) ? (this.$iframeElm_$ = this.$channel_$.$iframeElement_$, this.$iframeElm_$.XPC_toOuter = $goog$bind$$(this.$incoming_$, this)) : this.$attemptSetup_$();
    };
    $JSCompiler_prototypeAlias$$.$attemptSetup_$ = function $$JSCompiler_prototypeAlias$$$$attemptSetup_$$() {
        var $retry$$ = !0;
        try {
            this.$iframeElm_$ || (this.$iframeElm_$ = this.$getWindow$().frameElement), this.$iframeElm_$ && this.$iframeElm_$.XPC_toOuter && (this.$outgoing_$ = this.$iframeElm_$.XPC_toOuter, this.$iframeElm_$.XPC_toOuter.XPC_toInner = $goog$bind$$(this.$incoming_$, this), $retry$$ = !1, this.send("tp", "SETUP_ACK"), this.$channel_$.$notifyConnected$());
        } catch ($e$$46$$) {
            $goog$log$error$$($goog$net$xpc$logger$$, "exception caught while attempting setup: " + $e$$46$$);
        }
        $retry$$ && (this.$attemptSetupCb_$ || (this.$attemptSetupCb_$ = $goog$bind$$(this.$attemptSetup_$, this)), this.$getWindow$().setTimeout(this.$attemptSetupCb_$, 100));
    };
    $JSCompiler_prototypeAlias$$.$transportServiceHandler$ = function $$JSCompiler_prototypeAlias$$$$transportServiceHandler$$($payload$$4$$) {
        if (0 != $JSCompiler_StaticMethods_getRole$$(this.$channel_$) || this.$channel_$.$isConnected$() || "SETUP_ACK" != $payload$$4$$) {
            throw Error("Got unexpected transport message.");
        }
        this.$outgoing_$ = this.$iframeElm_$.XPC_toOuter.XPC_toInner;
        this.$channel_$.$notifyConnected$();
    };
    $JSCompiler_prototypeAlias$$.$incoming_$ = function $$JSCompiler_prototypeAlias$$$$incoming_$$($serviceName$$6$$, $payload$$5$$) {
        this.$recursive_$ || 0 != this.$queue_$.length ? (this.$queue_$.push({
            $serviceName$: $serviceName$$6$$,
            $payload$: $payload$$5$$
        }), 1 == this.$queue_$.length && (this.$timer_$ = this.$getWindow$().setTimeout(this.$deliverQueuedCb_$, 1))) : this.$channel_$.$xpcDeliver$($serviceName$$6$$, $payload$$5$$);
    };
    $JSCompiler_prototypeAlias$$.$deliverQueued_$ = function $$JSCompiler_prototypeAlias$$$$deliverQueued_$$() {
        for (; this.$queue_$.length;) {
            var $msg$$20$$ = this.$queue_$.shift();
            this.$channel_$.$xpcDeliver$($msg$$20$$.$serviceName$, $msg$$20$$.$payload$);
        }
    };
    $JSCompiler_prototypeAlias$$.send = function $$JSCompiler_prototypeAlias$$$send$($service$$2$$, $payload$$6$$) {
        this.$recursive_$ = !0;
        this.$outgoing_$($service$$2$$, $payload$$6$$);
        this.$recursive_$ = !1;
    };
    $JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
        $goog$net$xpc$FrameElementMethodTransport$$.$superClass_$.$disposeInternal$.call(this);
        this.$iframeElm_$ = this.$outgoing_$ = null;
    };
    function $goog$net$xpc$IframePollingTransport$$($channel$$2$$, $opt_domHelper$$7$$) {
        $goog$net$xpc$Transport$$.call(this, $opt_domHelper$$7$$);
        this.$channel_$ = $channel$$2$$;
        this.$sendUri_$ = this.$channel_$.$cfg_$.ppu;
        this.$rcvUri_$ = this.$channel_$.$cfg_$.lpu;
        this.$sendQueue_$ = [];
    }

    var $goog$net$xpc$IframePollingTransport$lastActivity_$$, $goog$net$xpc$IframePollingTransport$rcvTimer_$$;
    $goog$inherits$$($goog$net$xpc$IframePollingTransport$$, $goog$net$xpc$Transport$$);
    $JSCompiler_prototypeAlias$$ = $goog$net$xpc$IframePollingTransport$$.prototype;
    $JSCompiler_prototypeAlias$$.$pollsBeforeReconnect_$ = 5;
    $JSCompiler_prototypeAlias$$.$transportType$ = 4;
    $JSCompiler_prototypeAlias$$.$sequence_$ = 0;
    $JSCompiler_prototypeAlias$$.$waitForAck_$ = !1;
    $JSCompiler_prototypeAlias$$.$initialized_$ = !1;
    $JSCompiler_prototypeAlias$$.$reconnectFrame_$ = null;
    function $JSCompiler_StaticMethods_getMsgFrameName_$$($JSCompiler_StaticMethods_getMsgFrameName_$self$$) {
        return "googlexpc_" + $JSCompiler_StaticMethods_getMsgFrameName_$self$$.$channel_$.name + "_msg";
    }

    function $JSCompiler_StaticMethods_getAckFrameName_$$($JSCompiler_StaticMethods_getAckFrameName_$self$$) {
        return "googlexpc_" + $JSCompiler_StaticMethods_getAckFrameName_$self$$.$channel_$.name + "_ack";
    }

    function $JSCompiler_StaticMethods_getPeerFrames_$$($JSCompiler_StaticMethods_getPeerFrames_$self$$) {
        try {
            if (!$JSCompiler_StaticMethods_getPeerFrames_$self$$.$disposed_$ && $JSCompiler_StaticMethods_isPeerAvailable$$($JSCompiler_StaticMethods_getPeerFrames_$self$$.$channel_$)) {
                return $JSCompiler_StaticMethods_getPeerFrames_$self$$.$channel_$.$peerWindowObject_$.frames || {};
            }
        } catch ($e$$47$$) {
            $goog$log$fine$$($goog$net$xpc$logger$$, "error retrieving peer frames");
        }
        return {};
    }

    function $JSCompiler_StaticMethods_getPeerFrame_$$($JSCompiler_StaticMethods_getPeerFrame_$self$$, $frameName$$) {
        return $JSCompiler_StaticMethods_getPeerFrames_$$($JSCompiler_StaticMethods_getPeerFrame_$self$$)[$frameName$$];
    }

    $JSCompiler_prototypeAlias$$.$connect$ = function $$JSCompiler_prototypeAlias$$$$connect$$() {
        if (!this.$disposed_$ && $JSCompiler_StaticMethods_isPeerAvailable$$(this.$channel_$)) {
            $goog$log$fine$$($goog$net$xpc$logger$$, "transport connect called");
            if (!this.$initialized_$) {
                $goog$log$fine$$($goog$net$xpc$logger$$, "initializing...");
                var $frames$$inline_1029_name$$inline_294$$ = $JSCompiler_StaticMethods_getMsgFrameName_$$(this);
                this.$msgIframeElm_$ = $JSCompiler_StaticMethods_constructSenderFrame_$$(this, $frames$$inline_1029_name$$inline_294$$);
                this.$msgWinObj_$ = this.$getWindow$().frames[$frames$$inline_1029_name$$inline_294$$];
                $frames$$inline_1029_name$$inline_294$$ = $JSCompiler_StaticMethods_getAckFrameName_$$(this);
                this.$ackIframeElm_$ = $JSCompiler_StaticMethods_constructSenderFrame_$$(this, $frames$$inline_1029_name$$inline_294$$);
                this.$ackWinObj_$ = this.$getWindow$().frames[$frames$$inline_1029_name$$inline_294$$];
                this.$initialized_$ = !0;
            }
            if ($JSCompiler_StaticMethods_isRcvFrameReady_$$(this, $JSCompiler_StaticMethods_getMsgFrameName_$$(this)) && $JSCompiler_StaticMethods_isRcvFrameReady_$$(this, $JSCompiler_StaticMethods_getAckFrameName_$$(this))) {
                $goog$log$fine$$($goog$net$xpc$logger$$, "foreign frames present"), this.$msgReceiver_$ = new $goog$net$xpc$IframePollingTransport$Receiver$$(this, $JSCompiler_StaticMethods_getPeerFrame_$$(this, $JSCompiler_StaticMethods_getMsgFrameName_$$(this)), $goog$bind$$(this.$processIncomingMsg$, this)), this.$ackReceiver_$ = new $goog$net$xpc$IframePollingTransport$Receiver$$(this, $JSCompiler_StaticMethods_getPeerFrame_$$(this, $JSCompiler_StaticMethods_getAckFrameName_$$(this)), $goog$bind$$(this.$processIncomingAck$,
                    this)), this.$checkLocalFramesPresent_$();
            } else {
                $goog$log$log$$("foreign frames not (yet) present");
                if (1 == $JSCompiler_StaticMethods_getRole$$(this.$channel_$)) {
                    this.$reconnectFrame_$ || 0 < this.$pollsBeforeReconnect_$-- || ($goog$log$log$$("Inner peer reconnect triggered."), $JSCompiler_StaticMethods_updateChannelNameAndCatalog$$(this.$channel_$, $goog$net$xpc$getRandomString$$(10)), $goog$log$log$$("switching channels: " + this.$channel_$.name), $JSCompiler_StaticMethods_deconstructSenderFrames_$$(this), this.$initialized_$ = !1, this.$reconnectFrame_$ = $JSCompiler_StaticMethods_constructSenderFrame_$$(this, "googlexpc_reconnect_" + this.$channel_$.name))
                    ;
                } else {
                    if (0 == $JSCompiler_StaticMethods_getRole$$(this.$channel_$)) {
                        $goog$log$log$$("outerPeerReconnect called");
                        for (var $frames$$inline_1029_name$$inline_294$$ = $JSCompiler_StaticMethods_getPeerFrames_$$(this), $length$$inline_1030$$ = $frames$$inline_1029_name$$inline_294$$.length, $i$$inline_1031$$ = 0; $i$$inline_1031$$ < $length$$inline_1030$$; $i$$inline_1031$$++) {
                            var $frameName$$inline_1032$$;
                            try {
                                $frames$$inline_1029_name$$inline_294$$[$i$$inline_1031$$] && $frames$$inline_1029_name$$inline_294$$[$i$$inline_1031$$].name && ($frameName$$inline_1032$$ = $frames$$inline_1029_name$$inline_294$$[$i$$inline_1031$$].name);
                            } catch ($e$$inline_1034$$) {
                            }
                            if ($frameName$$inline_1032$$) {
                                var $message$$inline_1033$$ = $frameName$$inline_1032$$.split("_");
                                if (3 == $message$$inline_1033$$.length && "googlexpc" == $message$$inline_1033$$[0] && "reconnect" == $message$$inline_1033$$[1]) {
                                    this.$channel_$.name = $message$$inline_1033$$[2];
                                    $JSCompiler_StaticMethods_deconstructSenderFrames_$$(this);
                                    this.$initialized_$ = !1;
                                    break;
                                }
                            }
                        }
                    }
                }
                this.$getWindow$().setTimeout($goog$bind$$(this.$connect$, this), 100);
            }
        }
    };
    function $JSCompiler_StaticMethods_constructSenderFrame_$$($JSCompiler_StaticMethods_constructSenderFrame_$self$$, $id$$10$$) {
        $goog$log$log$$("constructing sender frame: " + $id$$10$$);
        var $ifr$$ = document.createElement("iframe"), $s$$31$$ = $ifr$$.style;
        $s$$31$$.position = "absolute";
        $s$$31$$.top = "-10px";
        $s$$31$$.left = "10px";
        $s$$31$$.width = "1px";
        $s$$31$$.height = "1px";
        $ifr$$.id = $ifr$$.name = $id$$10$$;
        $ifr$$.src = $JSCompiler_StaticMethods_constructSenderFrame_$self$$.$sendUri_$ + "#INITIAL";
        $JSCompiler_StaticMethods_constructSenderFrame_$self$$.$getWindow$().document.body.appendChild($ifr$$);
        return $ifr$$;
    }

    function $JSCompiler_StaticMethods_deconstructSenderFrames_$$($JSCompiler_StaticMethods_deconstructSenderFrames_$self$$) {
        $goog$log$log$$("deconstructSenderFrames called");
        $JSCompiler_StaticMethods_deconstructSenderFrames_$self$$.$msgIframeElm_$ && ($JSCompiler_StaticMethods_deconstructSenderFrames_$self$$.$msgIframeElm_$.parentNode.removeChild($JSCompiler_StaticMethods_deconstructSenderFrames_$self$$.$msgIframeElm_$), $JSCompiler_StaticMethods_deconstructSenderFrames_$self$$.$msgIframeElm_$ = null, $JSCompiler_StaticMethods_deconstructSenderFrames_$self$$.$msgWinObj_$ = null);
        $JSCompiler_StaticMethods_deconstructSenderFrames_$self$$.$ackIframeElm_$ && ($JSCompiler_StaticMethods_deconstructSenderFrames_$self$$.$ackIframeElm_$.parentNode.removeChild($JSCompiler_StaticMethods_deconstructSenderFrames_$self$$.$ackIframeElm_$), $JSCompiler_StaticMethods_deconstructSenderFrames_$self$$.$ackIframeElm_$ = null, $JSCompiler_StaticMethods_deconstructSenderFrames_$self$$.$ackWinObj_$ = null);
    }

    function $JSCompiler_StaticMethods_isRcvFrameReady_$$($JSCompiler_StaticMethods_isRcvFrameReady_$self$$, $frameName$$2$$) {
        $goog$log$log$$("checking for receive frame: " + $frameName$$2$$);
        try {
            var $winObj$$ = $JSCompiler_StaticMethods_getPeerFrame_$$($JSCompiler_StaticMethods_isRcvFrameReady_$self$$, $frameName$$2$$);
            if (!$winObj$$ || 0 != $winObj$$.location.href.indexOf($JSCompiler_StaticMethods_isRcvFrameReady_$self$$.$rcvUri_$)) {
                return !1;
            }
        } catch ($e$$49$$) {
            return !1;
        }
        return !0;
    }

    $JSCompiler_prototypeAlias$$.$checkLocalFramesPresent_$ = function $$JSCompiler_prototypeAlias$$$$checkLocalFramesPresent_$$() {
        var $frames$$1$$ = $JSCompiler_StaticMethods_getPeerFrames_$$(this);
        $frames$$1$$[$JSCompiler_StaticMethods_getAckFrameName_$$(this)] && $frames$$1$$[$JSCompiler_StaticMethods_getMsgFrameName_$$(this)] ? (this.$msgSender_$ = new $goog$net$xpc$IframePollingTransport$Sender$$(this.$sendUri_$, this.$msgWinObj_$), this.$ackSender_$ = new $goog$net$xpc$IframePollingTransport$Sender$$(this.$sendUri_$, this.$ackWinObj_$), $goog$log$fine$$($goog$net$xpc$logger$$, "local frames ready"), this.$getWindow$().setTimeout($goog$bind$$(function () {
            this.$msgSender_$.send("SETUP");
            this.$waitForAck_$ = !0;
            $goog$log$fine$$($goog$net$xpc$logger$$, "SETUP sent");
        }, this), 100)) : (this.$checkLocalFramesPresentCb_$ || (this.$checkLocalFramesPresentCb_$ = $goog$bind$$(this.$checkLocalFramesPresent_$, this)), this.$getWindow$().setTimeout(this.$checkLocalFramesPresentCb_$, 100), $goog$log$fine$$($goog$net$xpc$logger$$, "local frames not (yet) present"));
    };
    function $JSCompiler_StaticMethods_checkIfConnected_$$($JSCompiler_StaticMethods_checkIfConnected_$self$$) {
        if ($JSCompiler_StaticMethods_checkIfConnected_$self$$.$sentConnectionSetupAck_$ && $JSCompiler_StaticMethods_checkIfConnected_$self$$.$rcvdConnectionSetupAck_$) {
            if ($JSCompiler_StaticMethods_checkIfConnected_$self$$.$channel_$.$notifyConnected$(), $JSCompiler_StaticMethods_checkIfConnected_$self$$.$deliveryQueue_$) {
                $goog$log$fine$$($goog$net$xpc$logger$$, "delivering queued messages (" + $JSCompiler_StaticMethods_checkIfConnected_$self$$.$deliveryQueue_$.length + ")");
                for (var $i$$138$$ = 0, $m$$3$$; $i$$138$$ < $JSCompiler_StaticMethods_checkIfConnected_$self$$.$deliveryQueue_$.length; $i$$138$$++) {
                    $m$$3$$ = $JSCompiler_StaticMethods_checkIfConnected_$self$$.$deliveryQueue_$[$i$$138$$], $JSCompiler_StaticMethods_checkIfConnected_$self$$.$channel_$.$xpcDeliver$($m$$3$$.$service$, $m$$3$$.$payload$);
                }
                delete $JSCompiler_StaticMethods_checkIfConnected_$self$$.$deliveryQueue_$;
            }
        } else {
            $goog$log$log$$("checking if connected: ack sent:" + $JSCompiler_StaticMethods_checkIfConnected_$self$$.$sentConnectionSetupAck_$ + ", ack rcvd: " + $JSCompiler_StaticMethods_checkIfConnected_$self$$.$rcvdConnectionSetupAck_$);
        }
    }

    $JSCompiler_prototypeAlias$$.$processIncomingMsg$ = function $$JSCompiler_prototypeAlias$$$$processIncomingMsg$$($frame$$2_raw$$) {
        $goog$log$log$$("msg received: " + $frame$$2_raw$$);
        if ("SETUP" == $frame$$2_raw$$) {
            this.$ackSender_$ && (this.$ackSender_$.send("SETUP_ACK"), $goog$log$log$$("SETUP_ACK sent"), this.$sentConnectionSetupAck_$ = !0, $JSCompiler_StaticMethods_checkIfConnected_$$(this));
        } else {
            if (this.$channel_$.$isConnected$() || this.$sentConnectionSetupAck_$) {
                var $part0_pos$$1$$ = $frame$$2_raw$$.indexOf("|"), $head$$2_part1_partInfo$$ = $frame$$2_raw$$.substring(0, $part0_pos$$1$$);
                $frame$$2_raw$$ = $frame$$2_raw$$.substring($part0_pos$$1$$ + 1);
                $part0_pos$$1$$ = $head$$2_part1_partInfo$$.indexOf(",");
                if (-1 == $part0_pos$$1$$) {
                    var $seq$$;
                    this.$ackSender_$.send("ACK:" + $head$$2_part1_partInfo$$);
                    $JSCompiler_StaticMethods_deliverPayload_$$(this, $frame$$2_raw$$);
                } else {
                    $seq$$ = $head$$2_part1_partInfo$$.substring(0, $part0_pos$$1$$), this.$ackSender_$.send("ACK:" + $seq$$), $head$$2_part1_partInfo$$ = $head$$2_part1_partInfo$$.substring($part0_pos$$1$$ + 1).split("/"), $part0_pos$$1$$ = parseInt($head$$2_part1_partInfo$$[0], 10), $head$$2_part1_partInfo$$ = parseInt($head$$2_part1_partInfo$$[1], 10), 1 == $part0_pos$$1$$ && (this.$parts_$ = []), this.$parts_$.push($frame$$2_raw$$), $part0_pos$$1$$ == $head$$2_part1_partInfo$$ && ($JSCompiler_StaticMethods_deliverPayload_$$(this,
                        this.$parts_$.join("")), delete this.$parts_$);
                }
            } else {
                $goog$log$warning$$($goog$net$xpc$logger$$, "received msg, but channel is not connected");
            }
        }
    };
    $JSCompiler_prototypeAlias$$.$processIncomingAck$ = function $$JSCompiler_prototypeAlias$$$$processIncomingAck$$($msgStr$$) {
        $goog$log$log$$("ack received: " + $msgStr$$);
        "SETUP_ACK" == $msgStr$$ ? (this.$waitForAck_$ = !1, this.$rcvdConnectionSetupAck_$ = !0, $JSCompiler_StaticMethods_checkIfConnected_$$(this)) : this.$channel_$.$isConnected$() ? this.$waitForAck_$ ? parseInt($msgStr$$.split(":")[1], 10) == this.$sequence_$ ? (this.$waitForAck_$ = !1, $JSCompiler_StaticMethods_sendNextFrame_$$(this)) : $goog$log$warning$$($goog$net$xpc$logger$$, "got ack with wrong sequence") : $goog$log$warning$$($goog$net$xpc$logger$$, "got unexpected ack") : $goog$log$warning$$($goog$net$xpc$logger$$,
            "received ack, but channel not connected");
    };
    function $JSCompiler_StaticMethods_sendNextFrame_$$($JSCompiler_StaticMethods_sendNextFrame_$self$$) {
        if (!$JSCompiler_StaticMethods_sendNextFrame_$self$$.$waitForAck_$ && $JSCompiler_StaticMethods_sendNextFrame_$self$$.$sendQueue_$.length) {
            var $s$$32$$ = $JSCompiler_StaticMethods_sendNextFrame_$self$$.$sendQueue_$.shift();
            ++$JSCompiler_StaticMethods_sendNextFrame_$self$$.$sequence_$;
            $JSCompiler_StaticMethods_sendNextFrame_$self$$.$msgSender_$.send($JSCompiler_StaticMethods_sendNextFrame_$self$$.$sequence_$ + $s$$32$$);
            $goog$log$log$$("msg sent: " + $JSCompiler_StaticMethods_sendNextFrame_$self$$.$sequence_$ + $s$$32$$);
            $JSCompiler_StaticMethods_sendNextFrame_$self$$.$waitForAck_$ = !0;
        }
    }

    function $JSCompiler_StaticMethods_deliverPayload_$$($JSCompiler_StaticMethods_deliverPayload_$self$$, $s$$33$$) {
        var $payload$$7_pos$$2$$ = $s$$33$$.indexOf(":"), $service$$3$$ = $s$$33$$.substr(0, $payload$$7_pos$$2$$), $payload$$7_pos$$2$$ = $s$$33$$.substring($payload$$7_pos$$2$$ + 1);
        $JSCompiler_StaticMethods_deliverPayload_$self$$.$channel_$.$isConnected$() ? $JSCompiler_StaticMethods_deliverPayload_$self$$.$channel_$.$xpcDeliver$($service$$3$$, $payload$$7_pos$$2$$) : (($JSCompiler_StaticMethods_deliverPayload_$self$$.$deliveryQueue_$ || ($JSCompiler_StaticMethods_deliverPayload_$self$$.$deliveryQueue_$ = [])).push({
            $service$: $service$$3$$,
            $payload$: $payload$$7_pos$$2$$
        }), $goog$log$log$$("queued delivery"));
    }

    $JSCompiler_prototypeAlias$$.$MAX_FRAME_LENGTH_$ = 3800;
    $JSCompiler_prototypeAlias$$.send = function $$JSCompiler_prototypeAlias$$$send$($service$$4$$, $payload$$8$$) {
        var $frame$$3$$ = $service$$4$$ + ":" + $payload$$8$$;
        if (!$goog$userAgent$IE$$ || $payload$$8$$.length <= this.$MAX_FRAME_LENGTH_$) {
            this.$sendQueue_$.push("|" + $frame$$3$$);
        } else {
            for (var $l$$27$$ = $payload$$8$$.length, $num$$14$$ = Math.ceil($l$$27$$ / this.$MAX_FRAME_LENGTH_$), $pos$$3$$ = 0, $i$$139$$ = 1; $pos$$3$$ < $l$$27$$;) {
                this.$sendQueue_$.push("," + $i$$139$$ + "/" + $num$$14$$ + "|" + $frame$$3$$.substr($pos$$3$$, this.$MAX_FRAME_LENGTH_$)), $i$$139$$++, $pos$$3$$ += this.$MAX_FRAME_LENGTH_$;
            }
        }
        $JSCompiler_StaticMethods_sendNextFrame_$$(this);
    };
    $JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
        $goog$net$xpc$IframePollingTransport$$.$superClass_$.$disposeInternal$.call(this);
        var $receivers$$ = $goog$net$xpc$IframePollingTransport$receivers_$$;
        $goog$array$remove$$($receivers$$, this.$msgReceiver_$);
        $goog$array$remove$$($receivers$$, this.$ackReceiver_$);
        this.$msgReceiver_$ = this.$ackReceiver_$ = null;
        $goog$dom$removeNode$$(this.$msgIframeElm_$);
        $goog$dom$removeNode$$(this.$ackIframeElm_$);
        this.$msgWinObj_$ = this.$ackWinObj_$ = this.$msgIframeElm_$ = this.$ackIframeElm_$ = null;
    };
    var $goog$net$xpc$IframePollingTransport$receivers_$$ = [], $goog$net$xpc$IframePollingTransport$receiveCb_$$ = $goog$bind$$(function () {
        var $now$$3_receivers$$1$$ = $goog$net$xpc$IframePollingTransport$receivers_$$, $JSCompiler_StaticMethods_notifyTransportError$self$$inline_302_receiver$$, $rcvd$$ = !1;
        try {
            for (var $i$$140$$ = 0; $JSCompiler_StaticMethods_notifyTransportError$self$$inline_302_receiver$$ = $now$$3_receivers$$1$$[$i$$140$$]; $i$$140$$++) {
                var $JSCompiler_temp$$23$$;
                if (!($JSCompiler_temp$$23$$ = $rcvd$$)) {
                    var $JSCompiler_StaticMethods_receive$self$$inline_298$$ = $JSCompiler_StaticMethods_notifyTransportError$self$$inline_302_receiver$$, $loc$$inline_299$$ = $JSCompiler_StaticMethods_receive$self$$inline_298$$.$rcvFrame_$.location.href;
                    if ($loc$$inline_299$$ != $JSCompiler_StaticMethods_receive$self$$inline_298$$.$currentLoc_$) {
                        $JSCompiler_StaticMethods_receive$self$$inline_298$$.$currentLoc_$ = $loc$$inline_299$$;
                        var $payload$$inline_300$$ = $loc$$inline_299$$.split("#")[1];
                        $payload$$inline_300$$ && ($payload$$inline_300$$ = $payload$$inline_300$$.substr(1), $JSCompiler_StaticMethods_receive$self$$inline_298$$.$cb_$(decodeURIComponent($payload$$inline_300$$)));
                        $JSCompiler_temp$$23$$ = !0;
                    } else {
                        $JSCompiler_temp$$23$$ = !1;
                    }
                }
                $rcvd$$ = $JSCompiler_temp$$23$$;
            }
        } catch ($e$$50$$) {
            if ($goog$log$info$$("receive_() failed: " + $e$$50$$), $JSCompiler_StaticMethods_notifyTransportError$self$$inline_302_receiver$$ = $JSCompiler_StaticMethods_notifyTransportError$self$$inline_302_receiver$$.$transport_$.$channel_$, $goog$log$info$$("Transport Error"), $JSCompiler_StaticMethods_notifyTransportError$self$$inline_302_receiver$$.close(), !$now$$3_receivers$$1$$.length) {
                return;
            }
        }
        $now$$3_receivers$$1$$ = $goog$now$$();
        $rcvd$$ && ($goog$net$xpc$IframePollingTransport$lastActivity_$$ = $now$$3_receivers$$1$$);
        $goog$net$xpc$IframePollingTransport$rcvTimer_$$ = window.setTimeout($goog$net$xpc$IframePollingTransport$receiveCb_$$, 1E3 > $now$$3_receivers$$1$$ - $goog$net$xpc$IframePollingTransport$lastActivity_$$ ? 10 : 100);
    }, $goog$net$xpc$IframePollingTransport$$);

    function $goog$net$xpc$IframePollingTransport$startRcvTimer_$$() {
        $goog$log$fine$$($goog$net$xpc$logger$$, "starting receive-timer");
        $goog$net$xpc$IframePollingTransport$lastActivity_$$ = $goog$now$$();
        $goog$net$xpc$IframePollingTransport$rcvTimer_$$ && window.clearTimeout($goog$net$xpc$IframePollingTransport$rcvTimer_$$);
        $goog$net$xpc$IframePollingTransport$rcvTimer_$$ = window.setTimeout($goog$net$xpc$IframePollingTransport$receiveCb_$$, 10);
    }

    function $goog$net$xpc$IframePollingTransport$Sender$$($url$$35$$, $windowObj$$) {
        this.$sendUri_$ = $url$$35$$;
        this.$sendFrame_$ = $windowObj$$;
        this.$cycle_$ = 0;
    }

    $goog$net$xpc$IframePollingTransport$Sender$$.prototype.send = function $$goog$net$xpc$IframePollingTransport$Sender$$$$send$($payload$$9_url$$36$$) {
        this.$cycle_$ = ++this.$cycle_$ % 2;
        $payload$$9_url$$36$$ = this.$sendUri_$ + "#" + this.$cycle_$ + encodeURIComponent($payload$$9_url$$36$$);
        try {
            $goog$userAgent$WEBKIT$$ ? this.$sendFrame_$.location.href = $payload$$9_url$$36$$ : this.$sendFrame_$.location.replace($payload$$9_url$$36$$);
        } catch ($e$$51$$) {
            $goog$log$error$$($goog$net$xpc$logger$$, "sending failed", $e$$51$$);
        }
        $goog$net$xpc$IframePollingTransport$startRcvTimer_$$();
    };
    function $goog$net$xpc$IframePollingTransport$Receiver$$($transport$$, $windowObj$$1$$, $callback$$64$$) {
        this.$transport_$ = $transport$$;
        this.$rcvFrame_$ = $windowObj$$1$$;
        this.$cb_$ = $callback$$64$$;
        this.$currentLoc_$ = this.$rcvFrame_$.location.href.split("#")[0] + "#INITIAL";
        $goog$net$xpc$IframePollingTransport$receivers_$$.push(this);
        $goog$net$xpc$IframePollingTransport$startRcvTimer_$$();
    }
    ;
    function $goog$net$xpc$IframeRelayTransport$$($channel$$3$$, $opt_domHelper$$8$$) {
        $goog$net$xpc$Transport$$.call(this, $opt_domHelper$$8$$);
        this.$channel_$ = $channel$$3$$;
        this.$peerRelayUri_$ = this.$channel_$.$cfg_$.pru;
        this.$peerIframeId_$ = this.$channel_$.$cfg_$.ifrid;
        $goog$userAgent$WEBKIT$$ && $goog$net$xpc$IframeRelayTransport$startCleanupTimer_$$();
    }

    $goog$inherits$$($goog$net$xpc$IframeRelayTransport$$, $goog$net$xpc$Transport$$);
    if ($goog$userAgent$WEBKIT$$) {
        var $goog$net$xpc$IframeRelayTransport$iframeRefs_$$ = [], $goog$net$xpc$IframeRelayTransport$cleanupTimer_$$ = 0, $goog$net$xpc$IframeRelayTransport$startCleanupTimer_$$ = function $$goog$net$xpc$IframeRelayTransport$startCleanupTimer_$$$() {
            $goog$net$xpc$IframeRelayTransport$cleanupTimer_$$ || ($goog$net$xpc$IframeRelayTransport$cleanupTimer_$$ = window.setTimeout(function () {
                $goog$net$xpc$IframeRelayTransport$cleanup_$$();
            }, 1E3));
        }, $goog$net$xpc$IframeRelayTransport$cleanup_$$ = function $$goog$net$xpc$IframeRelayTransport$cleanup_$$$($maxAge_opt_maxAge$$) {
            var $now$$4$$ = $goog$now$$();
            for ($maxAge_opt_maxAge$$ = $maxAge_opt_maxAge$$ || 3E3; $goog$net$xpc$IframeRelayTransport$iframeRefs_$$.length && $now$$4$$ - $goog$net$xpc$IframeRelayTransport$iframeRefs_$$[0].timestamp >= $maxAge_opt_maxAge$$;) {
                var $ifr$$1$$ = $goog$net$xpc$IframeRelayTransport$iframeRefs_$$.shift().$iframeElement$;
                $goog$dom$removeNode$$($ifr$$1$$);
                $goog$log$log$$("iframe removed");
            }
            $goog$net$xpc$IframeRelayTransport$cleanupTimer_$$ = window.setTimeout($goog$net$xpc$IframeRelayTransport$cleanupCb_$$, 1E3);
        }, $goog$net$xpc$IframeRelayTransport$cleanupCb_$$ = function $$goog$net$xpc$IframeRelayTransport$cleanupCb_$$$() {
            $goog$net$xpc$IframeRelayTransport$cleanup_$$();
        }
    }
    var $goog$net$xpc$IframeRelayTransport$fragmentMap_$$ = {};
    $JSCompiler_prototypeAlias$$ = $goog$net$xpc$IframeRelayTransport$$.prototype;
    $JSCompiler_prototypeAlias$$.$transportType$ = 3;
    $JSCompiler_prototypeAlias$$.$connect$ = function $$JSCompiler_prototypeAlias$$$$connect$$() {
        this.$getWindow$().xpcRelay || (this.$getWindow$().xpcRelay = $goog$net$xpc$IframeRelayTransport$receiveMessage_$$);
        this.send("tp", "SETUP");
    };
    function $goog$net$xpc$IframeRelayTransport$receiveMessage_$$($channelName$$, $frame$$4$$) {
        var $fragmentNum_pos$$4$$ = $frame$$4$$.indexOf(":"), $fragmentIdStr_header$$4$$ = $frame$$4$$.substr(0, $fragmentNum_pos$$4$$), $payload$$11$$ = $frame$$4$$.substr($fragmentNum_pos$$4$$ + 1);
        if ($goog$userAgent$IE$$ && -1 != ($fragmentNum_pos$$4$$ = $fragmentIdStr_header$$4$$.indexOf("|"))) {
            var $service$$5$$ = $fragmentIdStr_header$$4$$.substr(0, $fragmentNum_pos$$4$$), $fragmentIdStr_header$$4$$ = $fragmentIdStr_header$$4$$.substr($fragmentNum_pos$$4$$ + 1), $fragmentNum_pos$$4$$ = $fragmentIdStr_header$$4$$.indexOf("+"), $messageIdStr$$ = $fragmentIdStr_header$$4$$.substr(0, $fragmentNum_pos$$4$$), $fragmentNum_pos$$4$$ = parseInt($fragmentIdStr_header$$4$$.substr($fragmentNum_pos$$4$$ + 1), 10), $fragmentInfo$$ = $goog$net$xpc$IframeRelayTransport$fragmentMap_$$[$messageIdStr$$];
            $fragmentInfo$$ || ($fragmentInfo$$ = $goog$net$xpc$IframeRelayTransport$fragmentMap_$$[$messageIdStr$$] = {
                $fragments$: [],
                $received$: 0,
                $expected$: 0
            });
            -1 != $fragmentIdStr_header$$4$$.indexOf("++") && ($fragmentInfo$$.$expected$ = $fragmentNum_pos$$4$$ + 1);
            $fragmentInfo$$.$fragments$[$fragmentNum_pos$$4$$] = $payload$$11$$;
            $fragmentInfo$$.$received$++;
            if ($fragmentInfo$$.$received$ != $fragmentInfo$$.$expected$) {
                return;
            }
            $payload$$11$$ = $fragmentInfo$$.$fragments$.join("");
            delete $goog$net$xpc$IframeRelayTransport$fragmentMap_$$[$messageIdStr$$];
        } else {
            var $service$$5$$ = $fragmentIdStr_header$$4$$
        }
        $goog$net$xpc$channels$$[$channelName$$].$xpcDeliver$($service$$5$$, decodeURIComponent($payload$$11$$));
    }

    $JSCompiler_prototypeAlias$$.$transportServiceHandler$ = function $$JSCompiler_prototypeAlias$$$$transportServiceHandler$$($payload$$12$$) {
        "SETUP" == $payload$$12$$ ? (this.send("tp", "SETUP_ACK"), this.$channel_$.$notifyConnected$()) : "SETUP_ACK" == $payload$$12$$ && this.$channel_$.$notifyConnected$();
    };
    $JSCompiler_prototypeAlias$$.send = function $$JSCompiler_prototypeAlias$$$send$($service$$6$$, $payload$$13$$) {
        console.log('send');
        var $encodedPayload$$ = encodeURIComponent($payload$$13$$),
            $encodedLen$$ = $encodedPayload$$.length;
        if ($goog$userAgent$IE$$ && 1800 < $encodedLen$$) {
            for (var $messageIdStr$$1$$ = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ $goog$now$$()).toString(36), $startIndex$$1$$ = 0, $fragmentNum$$1$$ = 0; $startIndex$$1$$ < $encodedLen$$; $fragmentNum$$1$$++) {
                var $payloadFragment$$ = $encodedPayload$$.substr($startIndex$$1$$, 1800), $startIndex$$1$$ = $startIndex$$1$$ + 1800;
                $JSCompiler_StaticMethods_send_$$(this, $service$$6$$, $payloadFragment$$, $messageIdStr$$1$$ + ($startIndex$$1$$ >= $encodedLen$$ ? "++" : "+") + $fragmentNum$$1$$);
            }
        } else {
            $JSCompiler_StaticMethods_send_$$(this, $service$$6$$, $encodedPayload$$);
        }
    };
    function $JSCompiler_StaticMethods_send_$$($JSCompiler_StaticMethods_send_$self$$, $service$$7$$, $encodedPayload$$1$$, $opt_fragmentIdStr$$) {
        console.log('send1');
        if ($goog$userAgent$IE$$) {
            var $div$$2_ifr$$2$$ = $JSCompiler_StaticMethods_send_$self$$.$getWindow$().document.createElement("div"), $html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$;
            $html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$ = new $goog$string$Const$$;
            $html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$.$stringConstValueWithSecurityContract__googStringSecurityPrivate_$ = "this.xpcOnload()";
            var $dirAttribute$$inline_1043_opt_attributes$$inline_1036$$ = {onload: $html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$};
            if (!$goog$html$SafeHtml$VALID_NAMES_IN_TAG_$$.test("iframe")) {
                throw Error("Invalid tag name <iframe>.");
            }
            if ("iframe" in $goog$html$SafeHtml$NOT_ALLOWED_TAG_NAMES_$$) {
                throw Error("Tag name <iframe> is not allowed for SafeHtml.");
            }
            var $dir$$inline_1037_html$$inline_1042$$ = null;
            $html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$ = "<iframe";
            if ($dirAttribute$$inline_1043_opt_attributes$$inline_1036$$) {
                for (var $content$$inline_1041_name$$inline_1039$$ in $dirAttribute$$inline_1043_opt_attributes$$inline_1036$$) {
                    if (!$goog$html$SafeHtml$VALID_NAMES_IN_TAG_$$.test($content$$inline_1041_name$$inline_1039$$)) {
                        throw Error('Invalid attribute name "' + $content$$inline_1041_name$$inline_1039$$ + '".');
                    }
                    var $map$$inline_1226_value$$inline_1040_value$$inline_1225$$ = $dirAttribute$$inline_1043_opt_attributes$$inline_1036$$[$content$$inline_1041_name$$inline_1039$$];
                    if (null != $map$$inline_1226_value$$inline_1040_value$$inline_1225$$) {
                        if ($map$$inline_1226_value$$inline_1040_value$$inline_1225$$ instanceof $goog$string$Const$$) {
                            $map$$inline_1226_value$$inline_1040_value$$inline_1225$$ = $goog$string$Const$unwrap$$($map$$inline_1226_value$$inline_1040_value$$inline_1225$$);
                        } else {
                            if ("style" == $content$$inline_1041_name$$inline_1039$$.toLowerCase()) {
                                if (!$goog$isObject$$($map$$inline_1226_value$$inline_1040_value$$inline_1225$$)) {
                                    throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof $map$$inline_1226_value$$inline_1040_value$$inline_1225$$ + " given: " + $map$$inline_1226_value$$inline_1040_value$$inline_1225$$);
                                }
                                if (!($map$$inline_1226_value$$inline_1040_value$$inline_1225$$ instanceof $goog$html$SafeStyle$$)) {
                                    var $JSCompiler_inline_result$$inline_1230_style$$inline_1227$$ = "", $name$$inline_1228$$ = void 0;
                                    for ($name$$inline_1228$$ in $map$$inline_1226_value$$inline_1040_value$$inline_1225$$) {
                                        if (!/^[-_a-zA-Z0-9]+$/.test($name$$inline_1228$$)) {
                                            throw Error("Name allows only [-_a-zA-Z0-9], got: " + $name$$inline_1228$$);
                                        }
                                        var $value$$inline_1229$$ = $map$$inline_1226_value$$inline_1040_value$$inline_1225$$[$name$$inline_1228$$];
                                        null != $value$$inline_1229$$ && ($value$$inline_1229$$ instanceof $goog$string$Const$$ ? ($value$$inline_1229$$ = $goog$string$Const$unwrap$$($value$$inline_1229$$), $goog$asserts$assert$$(!/[{;}]/.test($value$$inline_1229$$), "Value does not allow [{;}].")) : $goog$html$SafeStyle$VALUE_RE_$$.test($value$$inline_1229$$) || ($goog$asserts$fail$$("String value allows only [-.%_!# a-zA-Z0-9], got: " + $value$$inline_1229$$), $value$$inline_1229$$ = "zClosurez"), $JSCompiler_inline_result$$inline_1230_style$$inline_1227$$ +=
                                            $name$$inline_1228$$ + ":" + $value$$inline_1229$$ + ";");
                                    }
                                    $JSCompiler_inline_result$$inline_1230_style$$inline_1227$$ ? ($goog$asserts$assert$$(!/[<>]/.test($JSCompiler_inline_result$$inline_1230_style$$inline_1227$$), "Forbidden characters in style string: " + $JSCompiler_inline_result$$inline_1230_style$$inline_1227$$), $map$$inline_1226_value$$inline_1040_value$$inline_1225$$ = $goog$html$SafeStyle$createSafeStyleSecurityPrivateDoNotAccessOrElse_$$($JSCompiler_inline_result$$inline_1230_style$$inline_1227$$)) : $map$$inline_1226_value$$inline_1040_value$$inline_1225$$ =
                                        $goog$html$SafeStyle$EMPTY$$;
                                }
                                $JSCompiler_inline_result$$inline_1230_style$$inline_1227$$ = void 0;
                                $map$$inline_1226_value$$inline_1040_value$$inline_1225$$ instanceof $goog$html$SafeStyle$$ && $map$$inline_1226_value$$inline_1040_value$$inline_1225$$.constructor === $goog$html$SafeStyle$$ && $map$$inline_1226_value$$inline_1040_value$$inline_1225$$.$SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$ === $goog$html$SafeStyle$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ ? $JSCompiler_inline_result$$inline_1230_style$$inline_1227$$ = $map$$inline_1226_value$$inline_1040_value$$inline_1225$$.$privateDoNotAccessOrElseSafeStyleWrappedValue_$ :
                                    ($goog$asserts$fail$$("expected object of type SafeStyle, got '" + $map$$inline_1226_value$$inline_1040_value$$inline_1225$$ + "'"), $JSCompiler_inline_result$$inline_1230_style$$inline_1227$$ = "type_error:SafeStyle");
                                $map$$inline_1226_value$$inline_1040_value$$inline_1225$$ = $JSCompiler_inline_result$$inline_1230_style$$inline_1227$$;
                            } else {
                                if (/^on/i.test($content$$inline_1041_name$$inline_1039$$)) {
                                    throw Error('Attribute "' + $content$$inline_1041_name$$inline_1039$$ + '" requires goog.string.Const value, "' + $map$$inline_1226_value$$inline_1040_value$$inline_1225$$ + '" given.');
                                }
                                if ($map$$inline_1226_value$$inline_1040_value$$inline_1225$$ instanceof $goog$html$SafeUrl$$) {
                                    $map$$inline_1226_value$$inline_1040_value$$inline_1225$$ instanceof $goog$html$SafeUrl$$ && $map$$inline_1226_value$$inline_1040_value$$inline_1225$$.constructor === $goog$html$SafeUrl$$ && $map$$inline_1226_value$$inline_1040_value$$inline_1225$$.$SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$ === $goog$html$SafeUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ ? $map$$inline_1226_value$$inline_1040_value$$inline_1225$$ = $map$$inline_1226_value$$inline_1040_value$$inline_1225$$.$privateDoNotAccessOrElseSafeHtmlWrappedValue_$ :
                                        ($goog$asserts$fail$$("expected object of type SafeUrl, got '" + $map$$inline_1226_value$$inline_1040_value$$inline_1225$$ + "'"), $map$$inline_1226_value$$inline_1040_value$$inline_1225$$ = "type_error:SafeUrl");
                                } else {
                                    if ($content$$inline_1041_name$$inline_1039$$.toLowerCase() in $goog$html$SafeHtml$URL_ATTRIBUTES_$$) {
                                        throw Error('Attribute "' + $content$$inline_1041_name$$inline_1039$$ + '" requires goog.string.Const or goog.html.SafeUrl value, "' + $map$$inline_1226_value$$inline_1040_value$$inline_1225$$ + '" given.');
                                    }
                                }
                            }
                        }
                        $goog$asserts$assert$$($goog$isString$$($map$$inline_1226_value$$inline_1040_value$$inline_1225$$) || $goog$isNumber$$($map$$inline_1226_value$$inline_1040_value$$inline_1225$$), "String or number value expected, got " + typeof $map$$inline_1226_value$$inline_1040_value$$inline_1225$$ + " with value: " + $map$$inline_1226_value$$inline_1040_value$$inline_1225$$);
                        $html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$ += " " + $content$$inline_1041_name$$inline_1039$$ + '="' + $goog$string$htmlEscape$$(String($map$$inline_1226_value$$inline_1040_value$$inline_1225$$)) + '"';
                    }
                }
            }
            $content$$inline_1041_name$$inline_1039$$ = void 0;
            $goog$isDef$$($content$$inline_1041_name$$inline_1039$$) ? $goog$isArray$$($content$$inline_1041_name$$inline_1039$$) || ($content$$inline_1041_name$$inline_1039$$ = [$content$$inline_1041_name$$inline_1039$$]) : $content$$inline_1041_name$$inline_1039$$ = [];
            "iframe" in $goog$dom$tags$VOID_TAGS_$$ ? ($goog$asserts$assert$$(!$content$$inline_1041_name$$inline_1039$$.length, "Void tag <iframe> does not allow content."), $html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$ += ">") : ($dir$$inline_1037_html$$inline_1042$$ = $goog$html$SafeHtml$concat$$($content$$inline_1041_name$$inline_1039$$), $html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$ += ">" + $goog$html$SafeHtml$unwrap$$($dir$$inline_1037_html$$inline_1042$$) +
                "</iframe>", $dir$$inline_1037_html$$inline_1042$$ = $dir$$inline_1037_html$$inline_1042$$.$getDirection$());
            ($dirAttribute$$inline_1043_opt_attributes$$inline_1036$$ = $dirAttribute$$inline_1043_opt_attributes$$inline_1036$$ && $dirAttribute$$inline_1043_opt_attributes$$inline_1036$$.dir) && ($dir$$inline_1037_html$$inline_1042$$ = /^(ltr|rtl|auto)$/i.test($dirAttribute$$inline_1043_opt_attributes$$inline_1036$$) ? 0 : null);
            $html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$ = $goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse_$$($html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$, $dir$$inline_1037_html$$inline_1042$$);
            $div$$2_ifr$$2$$.innerHTML = $goog$html$SafeHtml$unwrap$$($html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$);
            $div$$2_ifr$$2$$ = $div$$2_ifr$$2$$.childNodes[0];
            $div$$2_ifr$$2$$.xpcOnload = $goog$net$xpc$IframeRelayTransport$iframeLoadHandler_$$;
        } else {
            $div$$2_ifr$$2$$ = $JSCompiler_StaticMethods_send_$self$$.$getWindow$().document.createElement("iframe"), $goog$userAgent$WEBKIT$$ ? $goog$net$xpc$IframeRelayTransport$iframeRefs_$$.push({
                timestamp: $goog$now$$(),
                $iframeElement$: $div$$2_ifr$$2$$
            }) : $goog$events$listen$$($div$$2_ifr$$2$$, "load", $goog$net$xpc$IframeRelayTransport$iframeLoadHandler_$$);
        }
        $html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$ = $div$$2_ifr$$2$$.style;
        $html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$.visibility = "hidden";
        $html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$.width = $div$$2_ifr$$2$$.style.height = "0px";
        $html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$.position = "absolute";
        $html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$ = $JSCompiler_StaticMethods_send_$self$$.$peerRelayUri_$;
        $html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$ += "#" + $JSCompiler_StaticMethods_send_$self$$.$channel_$.name;
        $JSCompiler_StaticMethods_send_$self$$.$peerIframeId_$ && ($html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$ += "," + $JSCompiler_StaticMethods_send_$self$$.$peerIframeId_$);
        $html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$ += "|" + $service$$7$$;
        $opt_fragmentIdStr$$ && ($html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$ += "|" + $opt_fragmentIdStr$$);
        $html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$ += ":" + $encodedPayload$$1$$;
        $div$$2_ifr$$2$$.src = $html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$;
        $JSCompiler_StaticMethods_send_$self$$.$getWindow$().document.body.appendChild($div$$2_ifr$$2$$);
        $goog$log$log$$("msg sent: " + $html$$inline_305_result$$inline_1038_stringConst$$inline_1223_style$$7_url$$37$$);
    }

    function $goog$net$xpc$IframeRelayTransport$iframeLoadHandler_$$() {
        $goog$log$log$$("iframe-load");
        $goog$dom$removeNode$$(this);
    }

    $JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
        $goog$net$xpc$IframeRelayTransport$$.$superClass_$.$disposeInternal$.call(this);
        $goog$userAgent$WEBKIT$$ && $goog$net$xpc$IframeRelayTransport$cleanup_$$(0);
    };
    function $goog$net$xpc$NixTransport$$($channel$$4$$, $opt_domHelper$$9$$) {
        $goog$net$xpc$Transport$$.call(this, $opt_domHelper$$9$$);
        this.$channel_$ = $channel$$4$$;
        this.$authToken_$ = $channel$$4$$.at || "";
        this.$remoteAuthToken_$ = $channel$$4$$.rat || "";
        var $listenWindow$$inline_307$$ = this.$getWindow$();
        if (!$listenWindow$$inline_307$$.nix_setup_complete) {
            var $vbscript$$inline_308$$ = "Class GCXPC____NIXVBS_wrapper\n Private m_Transport\nPrivate m_Auth\nPublic Sub SetTransport(transport)\nIf isEmpty(m_Transport) Then\nSet m_Transport = transport\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\nIf isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub SendMessage(service, payload)\n Call m_Transport." + $goog$net$xpc$NixTransport$NIX_HANDLE_MESSAGE$$ + "(service, payload)\nEnd Sub\nPublic Sub CreateChannel(channel)\n Call m_Transport." +
                $goog$net$xpc$NixTransport$NIX_CREATE_CHANNEL$$ + "(channel)\nEnd Sub\nPublic Sub GCXPC____NIXVBS_container()\n End Sub\nEnd Class\n Function GCXPC____NIXVBS_get_wrapper(transport, auth)\nDim wrap\nSet wrap = New GCXPC____NIXVBS_wrapper\nwrap.SetTransport transport\nwrap.SetAuth auth\nSet GCXPC____NIXVBS_get_wrapper = wrap\nEnd Function";
            try {
                $listenWindow$$inline_307$$.execScript($vbscript$$inline_308$$, "vbscript"), $listenWindow$$inline_307$$.nix_setup_complete = !0;
            } catch ($e$$inline_309$$) {
                $goog$log$error$$($goog$net$xpc$logger$$, "exception caught while attempting global setup: " + $e$$inline_309$$);
            }
        }
        this[$goog$net$xpc$NixTransport$NIX_HANDLE_MESSAGE$$] = this.$handleMessage_$;
        this[$goog$net$xpc$NixTransport$NIX_CREATE_CHANNEL$$] = this.$createChannel_$;
    }

    $goog$inherits$$($goog$net$xpc$NixTransport$$, $goog$net$xpc$Transport$$);
    var $goog$net$xpc$NixTransport$NIX_HANDLE_MESSAGE$$ = "GCXPC____NIXJS_handle_message", $goog$net$xpc$NixTransport$NIX_CREATE_CHANNEL$$ = "GCXPC____NIXJS_create_channel";
    $JSCompiler_prototypeAlias$$ = $goog$net$xpc$NixTransport$$.prototype;
    $JSCompiler_prototypeAlias$$.$transportType$ = 6;
    $JSCompiler_prototypeAlias$$.$localSetupCompleted_$ = !1;
    $JSCompiler_prototypeAlias$$.$nixChannel_$ = null;
    $JSCompiler_prototypeAlias$$.$connect$ = function $$JSCompiler_prototypeAlias$$$$connect$$() {
        0 == $JSCompiler_StaticMethods_getRole$$(this.$channel_$) ? this.$attemptOuterSetup_$() : this.$attemptInnerSetup_$();
    };
    $JSCompiler_prototypeAlias$$.$attemptOuterSetup_$ = function $$JSCompiler_prototypeAlias$$$$attemptOuterSetup_$$() {
        if (!this.$localSetupCompleted_$) {
            var $innerFrame$$ = this.$channel_$.$iframeElement_$;
            try {
                $innerFrame$$.contentWindow.opener = (0, this.$getWindow$().GCXPC____NIXVBS_get_wrapper)(this, this.$authToken_$), this.$localSetupCompleted_$ = !0;
            } catch ($e$$54$$) {
                $goog$log$error$$($goog$net$xpc$logger$$, "exception caught while attempting setup: " + $e$$54$$);
            }
            this.$localSetupCompleted_$ || this.$getWindow$().setTimeout($goog$bind$$(this.$attemptOuterSetup_$, this), 100);
        }
    };
    $JSCompiler_prototypeAlias$$.$attemptInnerSetup_$ = function $$JSCompiler_prototypeAlias$$$$attemptInnerSetup_$$() {
        if (!this.$localSetupCompleted_$) {
            try {
                var $opener$$ = this.$getWindow$().opener;
                if ($opener$$ && "GCXPC____NIXVBS_container" in $opener$$) {
                    this.$nixChannel_$ = $opener$$;
                    if (this.$nixChannel_$.GetAuthToken() != this.$remoteAuthToken_$) {
                        $goog$log$error$$($goog$net$xpc$logger$$, "Invalid auth token from other party");
                        return;
                    }
                    this.$nixChannel_$.CreateChannel((0, this.$getWindow$().GCXPC____NIXVBS_get_wrapper)(this, this.$authToken_$));
                    this.$localSetupCompleted_$ = !0;
                    this.$channel_$.$notifyConnected$();
                }
            } catch ($e$$55$$) {
                $goog$log$error$$($goog$net$xpc$logger$$, "exception caught while attempting setup: " + $e$$55$$);
                return;
            }
            this.$localSetupCompleted_$ || this.$getWindow$().setTimeout($goog$bind$$(this.$attemptInnerSetup_$, this), 100);
        }
    };
    $JSCompiler_prototypeAlias$$.$createChannel_$ = function $$JSCompiler_prototypeAlias$$$$createChannel_$$($channel$$5$$) {
        "unknown" == typeof $channel$$5$$ && "GCXPC____NIXVBS_container" in $channel$$5$$ || $goog$log$error$$($goog$net$xpc$logger$$, "Invalid NIX channel given to createChannel_");
        this.$nixChannel_$ = $channel$$5$$;
        this.$nixChannel_$.GetAuthToken() != this.$remoteAuthToken_$ ? $goog$log$error$$($goog$net$xpc$logger$$, "Invalid auth token from other party") : this.$channel_$.$notifyConnected$();
    };
    $JSCompiler_prototypeAlias$$.$handleMessage_$ = function $$JSCompiler_prototypeAlias$$$$handleMessage_$$($serviceName$$7$$, $payload$$14$$) {
        this.$getWindow$().setTimeout($goog$bind$$(function () {
            this.$channel_$.$xpcDeliver$($serviceName$$7$$, $payload$$14$$);
        }, this), 1);
    };
    $JSCompiler_prototypeAlias$$.send = function $$JSCompiler_prototypeAlias$$$send$($service$$8$$, $payload$$15$$) {
        "unknown" !== typeof this.$nixChannel_$ && $goog$log$error$$($goog$net$xpc$logger$$, "NIX channel not connected");
        this.$nixChannel_$.SendMessage($service$$8$$, $payload$$15$$);
    };
    $JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
        $goog$net$xpc$NixTransport$$.$superClass_$.$disposeInternal$.call(this);
        this.$nixChannel_$ = null;
    };
    var $goog$soy$defaultTemplateData_$$ = {};

    function $goog$style$setStyle$$($element$$56$$, $style$$8$$, $opt_value$$9$$) {
        $goog$isString$$($style$$8$$) ? $goog$style$setStyle_$$($element$$56$$, $opt_value$$9$$, $style$$8$$) : $goog$object$forEach$$($style$$8$$, $goog$partial$$($goog$style$setStyle_$$, $element$$56$$));
    }

    function $goog$style$setStyle_$$($element$$57$$, $value$$111$$, $propertyName$$9_style$$9$$) {
        ($propertyName$$9_style$$9$$ = $goog$style$getVendorJsStyleName_$$($element$$57$$, $propertyName$$9_style$$9$$)) && ($element$$57$$.style[$propertyName$$9_style$$9$$] = $value$$111$$);
    }

    function $goog$style$getVendorJsStyleName_$$($element$$58$$, $style$$10$$) {
        var $camelStyle$$ = $goog$string$toCamelCase$$($style$$10$$);
        if (void 0 === $element$$58$$.style[$camelStyle$$]) {
            var $prefixedStyle$$ = ($goog$userAgent$WEBKIT$$ ? "Webkit" : $goog$userAgent$GECKO$$ ? "Moz" : $goog$userAgent$IE$$ ? "ms" : $goog$userAgent$OPERA$$ ? "O" : null) + $goog$string$toTitleCase$$($camelStyle$$);
            if (void 0 !== $element$$58$$.style[$prefixedStyle$$]) {
                return $prefixedStyle$$;
            }
        }
        return $camelStyle$$;
    }

    function $goog$style$getStyle$$($element$$60$$, $property$$16$$) {
        var $styleValue$$ = $element$$60$$.style[$goog$string$toCamelCase$$($property$$16$$)];
        return "undefined" !== typeof $styleValue$$ ? $styleValue$$ : $element$$60$$.style[$goog$style$getVendorJsStyleName_$$($element$$60$$, $property$$16$$)] || "";
    }

    function $goog$style$getComputedStyle$$($element$$61$$, $property$$17$$) {
        var $doc$$30_styles$$ = $goog$dom$getOwnerDocument$$($element$$61$$);
        return $doc$$30_styles$$.defaultView && $doc$$30_styles$$.defaultView.getComputedStyle && ($doc$$30_styles$$ = $doc$$30_styles$$.defaultView.getComputedStyle($element$$61$$, null)) ? $doc$$30_styles$$[$property$$17$$] || $doc$$30_styles$$.getPropertyValue($property$$17$$) || "" : "";
    }

    function $goog$style$getStyle_$$($element$$63$$, $style$$13$$) {
        return $goog$style$getComputedStyle$$($element$$63$$, $style$$13$$) || ($element$$63$$.currentStyle ? $element$$63$$.currentStyle[$style$$13$$] : null) || $element$$63$$.style && $element$$63$$.style[$style$$13$$];
    }

    function $goog$style$getBoundingClientRect_$$($doc$$33_el$$5$$) {
        var $rect$$5$$;
        try {
            $rect$$5$$ = $doc$$33_el$$5$$.getBoundingClientRect();
        } catch ($e$$56$$) {
            return {left: 0, top: 0, right: 0, bottom: 0};
        }
        $goog$userAgent$IE$$ && $doc$$33_el$$5$$.ownerDocument.body && ($doc$$33_el$$5$$ = $doc$$33_el$$5$$.ownerDocument, $rect$$5$$.left -= $doc$$33_el$$5$$.documentElement.clientLeft + $doc$$33_el$$5$$.body.clientLeft, $rect$$5$$.top -= $doc$$33_el$$5$$.documentElement.clientTop + $doc$$33_el$$5$$.body.clientTop);
        return $rect$$5$$;
    }

    function $goog$style$getOffsetParent$$($element$$74_parent$$19$$) {
        if ($goog$userAgent$IE$$ && !($goog$userAgent$IE$$ && 8 <= $goog$userAgent$DOCUMENT_MODE$$)) {
            return $element$$74_parent$$19$$.offsetParent;
        }
        var $doc$$34$$ = $goog$dom$getOwnerDocument$$($element$$74_parent$$19$$), $positionStyle$$ = $goog$style$getStyle_$$($element$$74_parent$$19$$, "position"), $skipStatic$$ = "fixed" == $positionStyle$$ || "absolute" == $positionStyle$$;
        for ($element$$74_parent$$19$$ = $element$$74_parent$$19$$.parentNode; $element$$74_parent$$19$$ && $element$$74_parent$$19$$ != $doc$$34$$; $element$$74_parent$$19$$ = $element$$74_parent$$19$$.parentNode) {
            if ($positionStyle$$ = $goog$style$getStyle_$$($element$$74_parent$$19$$, "position"), $skipStatic$$ = $skipStatic$$ && "static" == $positionStyle$$ && $element$$74_parent$$19$$ != $doc$$34$$.documentElement && $element$$74_parent$$19$$ != $doc$$34$$.body, !$skipStatic$$ && ($element$$74_parent$$19$$.scrollWidth > $element$$74_parent$$19$$.clientWidth || $element$$74_parent$$19$$.scrollHeight > $element$$74_parent$$19$$.clientHeight || "fixed" == $positionStyle$$ || "absolute" == $positionStyle$$ ||
                "relative" == $positionStyle$$)) {
                return $element$$74_parent$$19$$;
            }
        }
        return null;
    }

    function $goog$style$getPageOffset$$($el$$8_el$$inline_1048_scrollCoord_vpBox$$) {
        var $box$$7_doc$$inline_312_parent$$20$$, $doc$$35_doc$$inline_1047_win$$inline_1049$$ = $goog$dom$getOwnerDocument$$($el$$8_el$$inline_1048_scrollCoord_vpBox$$), $positionStyle$$1$$ = $goog$style$getStyle_$$($el$$8_el$$inline_1048_scrollCoord_vpBox$$, "position");
        $goog$asserts$assertObject$$($el$$8_el$$inline_1048_scrollCoord_vpBox$$, "Parameter is required");
        var $BUGGY_GECKO_BOX_OBJECT$$ = $goog$userAgent$GECKO$$ && $doc$$35_doc$$inline_1047_win$$inline_1049$$.getBoxObjectFor && !$el$$8_el$$inline_1048_scrollCoord_vpBox$$.getBoundingClientRect && "absolute" == $positionStyle$$1$$ && ($box$$7_doc$$inline_312_parent$$20$$ = $doc$$35_doc$$inline_1047_win$$inline_1049$$.getBoxObjectFor($el$$8_el$$inline_1048_scrollCoord_vpBox$$)) && (0 > $box$$7_doc$$inline_312_parent$$20$$.screenX || 0 > $box$$7_doc$$inline_312_parent$$20$$.screenY), $pos$$6$$ = new $goog$math$Coordinate$$(0,
            0), $JSCompiler_temp$$997_viewportElement$$;
        $box$$7_doc$$inline_312_parent$$20$$ = $doc$$35_doc$$inline_1047_win$$inline_1049$$ ? $goog$dom$getOwnerDocument$$($doc$$35_doc$$inline_1047_win$$inline_1049$$) : document;
        ($JSCompiler_temp$$997_viewportElement$$ = !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$) || ($JSCompiler_temp$$997_viewportElement$$ = "CSS1Compat" == $goog$dom$getDomHelper$$($box$$7_doc$$inline_312_parent$$20$$).$document_$.compatMode);
        $JSCompiler_temp$$997_viewportElement$$ = $JSCompiler_temp$$997_viewportElement$$ ? $box$$7_doc$$inline_312_parent$$20$$.documentElement : $box$$7_doc$$inline_312_parent$$20$$.body;
        if ($el$$8_el$$inline_1048_scrollCoord_vpBox$$ == $JSCompiler_temp$$997_viewportElement$$) {
            return $pos$$6$$;
        }
        if ($el$$8_el$$inline_1048_scrollCoord_vpBox$$.getBoundingClientRect) {
            $box$$7_doc$$inline_312_parent$$20$$ = $goog$style$getBoundingClientRect_$$($el$$8_el$$inline_1048_scrollCoord_vpBox$$), $doc$$35_doc$$inline_1047_win$$inline_1049$$ = $goog$dom$getDomHelper$$($doc$$35_doc$$inline_1047_win$$inline_1049$$).$document_$, $el$$8_el$$inline_1048_scrollCoord_vpBox$$ = $goog$userAgent$WEBKIT$$ || "CSS1Compat" != $doc$$35_doc$$inline_1047_win$$inline_1049$$.compatMode ? $doc$$35_doc$$inline_1047_win$$inline_1049$$.body || $doc$$35_doc$$inline_1047_win$$inline_1049$$.documentElement :
                $doc$$35_doc$$inline_1047_win$$inline_1049$$.documentElement, $doc$$35_doc$$inline_1047_win$$inline_1049$$ = $doc$$35_doc$$inline_1047_win$$inline_1049$$.parentWindow || $doc$$35_doc$$inline_1047_win$$inline_1049$$.defaultView, $el$$8_el$$inline_1048_scrollCoord_vpBox$$ = $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("10") && $doc$$35_doc$$inline_1047_win$$inline_1049$$.pageYOffset != $el$$8_el$$inline_1048_scrollCoord_vpBox$$.scrollTop ? new $goog$math$Coordinate$$($el$$8_el$$inline_1048_scrollCoord_vpBox$$.scrollLeft,
                $el$$8_el$$inline_1048_scrollCoord_vpBox$$.scrollTop) : new $goog$math$Coordinate$$($doc$$35_doc$$inline_1047_win$$inline_1049$$.pageXOffset || $el$$8_el$$inline_1048_scrollCoord_vpBox$$.scrollLeft, $doc$$35_doc$$inline_1047_win$$inline_1049$$.pageYOffset || $el$$8_el$$inline_1048_scrollCoord_vpBox$$.scrollTop), $pos$$6$$.x = $box$$7_doc$$inline_312_parent$$20$$.left + $el$$8_el$$inline_1048_scrollCoord_vpBox$$.x, $pos$$6$$.y = $box$$7_doc$$inline_312_parent$$20$$.top + $el$$8_el$$inline_1048_scrollCoord_vpBox$$.y
            ;
        } else {
            if ($doc$$35_doc$$inline_1047_win$$inline_1049$$.getBoxObjectFor && !$BUGGY_GECKO_BOX_OBJECT$$) {
                $box$$7_doc$$inline_312_parent$$20$$ = $doc$$35_doc$$inline_1047_win$$inline_1049$$.getBoxObjectFor($el$$8_el$$inline_1048_scrollCoord_vpBox$$), $el$$8_el$$inline_1048_scrollCoord_vpBox$$ = $doc$$35_doc$$inline_1047_win$$inline_1049$$.getBoxObjectFor($JSCompiler_temp$$997_viewportElement$$), $pos$$6$$.x = $box$$7_doc$$inline_312_parent$$20$$.screenX - $el$$8_el$$inline_1048_scrollCoord_vpBox$$.screenX, $pos$$6$$.y = $box$$7_doc$$inline_312_parent$$20$$.screenY - $el$$8_el$$inline_1048_scrollCoord_vpBox$$.screenY
                ;
            } else {
                $box$$7_doc$$inline_312_parent$$20$$ = $el$$8_el$$inline_1048_scrollCoord_vpBox$$;
                do {
                    $pos$$6$$.x += $box$$7_doc$$inline_312_parent$$20$$.offsetLeft;
                    $pos$$6$$.y += $box$$7_doc$$inline_312_parent$$20$$.offsetTop;
                    $box$$7_doc$$inline_312_parent$$20$$ != $el$$8_el$$inline_1048_scrollCoord_vpBox$$ && ($pos$$6$$.x += $box$$7_doc$$inline_312_parent$$20$$.clientLeft || 0, $pos$$6$$.y += $box$$7_doc$$inline_312_parent$$20$$.clientTop || 0);
                    if ($goog$userAgent$WEBKIT$$ && "fixed" == $goog$style$getStyle_$$($box$$7_doc$$inline_312_parent$$20$$, "position")) {
                        $pos$$6$$.x += $doc$$35_doc$$inline_1047_win$$inline_1049$$.body.scrollLeft;
                        $pos$$6$$.y += $doc$$35_doc$$inline_1047_win$$inline_1049$$.body.scrollTop;
                        break;
                    }
                    $box$$7_doc$$inline_312_parent$$20$$ = $box$$7_doc$$inline_312_parent$$20$$.offsetParent;
                } while ($box$$7_doc$$inline_312_parent$$20$$ && $box$$7_doc$$inline_312_parent$$20$$ != $el$$8_el$$inline_1048_scrollCoord_vpBox$$);
                if ($goog$userAgent$OPERA$$ || $goog$userAgent$WEBKIT$$ && "absolute" == $positionStyle$$1$$) {
                    $pos$$6$$.y -= $doc$$35_doc$$inline_1047_win$$inline_1049$$.body.offsetTop;
                }
                for ($box$$7_doc$$inline_312_parent$$20$$ = $el$$8_el$$inline_1048_scrollCoord_vpBox$$; ($box$$7_doc$$inline_312_parent$$20$$ = $goog$style$getOffsetParent$$($box$$7_doc$$inline_312_parent$$20$$)) && $box$$7_doc$$inline_312_parent$$20$$ != $doc$$35_doc$$inline_1047_win$$inline_1049$$.body && $box$$7_doc$$inline_312_parent$$20$$ != $JSCompiler_temp$$997_viewportElement$$;) {
                    $pos$$6$$.x -= $box$$7_doc$$inline_312_parent$$20$$.scrollLeft, $goog$userAgent$OPERA$$ && "TR" == $box$$7_doc$$inline_312_parent$$20$$.tagName || ($pos$$6$$.y -= $box$$7_doc$$inline_312_parent$$20$$.scrollTop);
                }
            }
        }
        return $pos$$6$$;
    }

    function $goog$style$getPixelStyleValue_$$($value$$112$$) {
        "number" == typeof $value$$112$$ && ($value$$112$$ = Math.round($value$$112$$) + "px");
        return $value$$112$$;
    }

    function $goog$style$evaluateWithTemporaryDisplay_$$($element$$82_retVal$$3$$) {
        var $fn$$15$$ = $goog$style$getSizeWithDisplay_$$;
        if ("none" != $goog$style$getStyle_$$($element$$82_retVal$$3$$, "display")) {
            return $fn$$15$$($element$$82_retVal$$3$$);
        }
        var $style$$14$$ = $element$$82_retVal$$3$$.style, $originalDisplay$$ = $style$$14$$.display, $originalVisibility$$ = $style$$14$$.visibility, $originalPosition$$ = $style$$14$$.position;
        $style$$14$$.visibility = "hidden";
        $style$$14$$.position = "absolute";
        $style$$14$$.display = "inline";
        $element$$82_retVal$$3$$ = $fn$$15$$($element$$82_retVal$$3$$);
        $style$$14$$.display = $originalDisplay$$;
        $style$$14$$.position = $originalPosition$$;
        $style$$14$$.visibility = $originalVisibility$$;
        return $element$$82_retVal$$3$$;
    }

    function $goog$style$getSizeWithDisplay_$$($clientRect_element$$83$$) {
        var $offsetWidth$$ = $clientRect_element$$83$$.offsetWidth, $offsetHeight$$ = $clientRect_element$$83$$.offsetHeight, $webkitOffsetsZero$$ = $goog$userAgent$WEBKIT$$ && !$offsetWidth$$ && !$offsetHeight$$;
        return $goog$isDef$$($offsetWidth$$) && !$webkitOffsetsZero$$ || !$clientRect_element$$83$$.getBoundingClientRect ? new $goog$math$Size$$($offsetWidth$$, $offsetHeight$$) : ($clientRect_element$$83$$ = $goog$style$getBoundingClientRect_$$($clientRect_element$$83$$), new $goog$math$Size$$($clientRect_element$$83$$.right - $clientRect_element$$83$$.left, $clientRect_element$$83$$.bottom - $clientRect_element$$83$$.top));
    }
    ;
    function $goog$Timer$$($opt_interval$$, $opt_timerObject$$) {
        $goog$events$EventTarget$$.call(this);
        this.$interval_$ = $opt_interval$$ || 1;
        this.$timerObject_$ = $opt_timerObject$$ || $goog$global$$;
        this.$boundTick_$ = $goog$bind$$(this.$tick_$, this);
        this.$last_$ = $goog$now$$();
    }

    $goog$inherits$$($goog$Timer$$, $goog$events$EventTarget$$);
    $JSCompiler_prototypeAlias$$ = $goog$Timer$$.prototype;
    $JSCompiler_prototypeAlias$$.enabled = !1;
    $JSCompiler_prototypeAlias$$.$timer_$ = null;
    $JSCompiler_prototypeAlias$$.$tick_$ = function $$JSCompiler_prototypeAlias$$$$tick_$$() {
        if (this.enabled) {
            var $elapsed$$ = $goog$now$$() - this.$last_$;
            0 < $elapsed$$ && $elapsed$$ < .8 * this.$interval_$ ? this.$timer_$ = this.$timerObject_$.setTimeout(this.$boundTick_$, this.$interval_$ - $elapsed$$) : (this.$timer_$ && (this.$timerObject_$.clearTimeout(this.$timer_$), this.$timer_$ = null), this.dispatchEvent($goog$Timer$TICK$$), this.enabled && (this.$timer_$ = this.$timerObject_$.setTimeout(this.$boundTick_$, this.$interval_$), this.$last_$ = $goog$now$$()));
        }
    };
    $JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
        this.enabled = !0;
        this.$timer_$ || (this.$timer_$ = this.$timerObject_$.setTimeout(this.$boundTick_$, this.$interval_$), this.$last_$ = $goog$now$$());
    };
    $JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
        this.enabled = !1;
        this.$timer_$ && (this.$timerObject_$.clearTimeout(this.$timer_$), this.$timer_$ = null);
    };
    $JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
        $goog$Timer$$.$superClass_$.$disposeInternal$.call(this);
        this.stop();
        delete this.$timerObject_$;
    };
    var $goog$Timer$TICK$$ = "tick";

    function $goog$Timer$callOnce$$($listener$$72$$, $opt_delay$$, $opt_handler$$9$$) {
        if ($goog$isFunction$$($listener$$72$$)) {
            $opt_handler$$9$$ && ($listener$$72$$ = $goog$bind$$($listener$$72$$, $opt_handler$$9$$));
        } else {
            if ($listener$$72$$ && "function" == typeof $listener$$72$$.handleEvent) {
                $listener$$72$$ = $goog$bind$$($listener$$72$$.handleEvent, $listener$$72$$);
            } else {
                throw Error("Invalid listener argument");
            }
        }
        return 2147483647 < $opt_delay$$ ? -1 : $goog$global$$.setTimeout($listener$$72$$, $opt_delay$$ || 0);
    }
    ;
    function $goog$async$Delay$$($listener$$73$$, $opt_interval$$1$$, $opt_handler$$10$$) {
        $goog$Disposable$$.call(this);
        this.$listener_$ = $listener$$73$$;
        this.$interval_$ = $opt_interval$$1$$ || 0;
        this.$handler_$ = $opt_handler$$10$$;
        this.$callback_$ = $goog$bind$$(this.$doAction_$, this);
    }

    $goog$inherits$$($goog$async$Delay$$, $goog$Disposable$$);
    $JSCompiler_prototypeAlias$$ = $goog$async$Delay$$.prototype;
    $JSCompiler_prototypeAlias$$.$id_$ = 0;
    $JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
        $goog$async$Delay$$.$superClass_$.$disposeInternal$.call(this);
        this.stop();
        delete this.$listener_$;
        delete this.$handler_$;
    };
    $JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$($opt_interval$$2$$) {
        this.stop();
        this.$id_$ = $goog$Timer$callOnce$$(this.$callback_$, $goog$isDef$$($opt_interval$$2$$) ? $opt_interval$$2$$ : this.$interval_$);
    };
    $JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
        this.$isActive$() && $goog$global$$.clearTimeout(this.$id_$);
        this.$id_$ = 0;
    };
    $JSCompiler_prototypeAlias$$.$isActive$ = function $$JSCompiler_prototypeAlias$$$$isActive$$() {
        return 0 != this.$id_$;
    };
    $JSCompiler_prototypeAlias$$.$doAction_$ = function $$JSCompiler_prototypeAlias$$$$doAction_$$() {
        this.$id_$ = 0;
        this.$listener_$ && this.$listener_$.call(this.$handler_$);
    };
    var $goog$uri$utils$splitRe_$$ = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

    function $goog$uri$utils$split$$($uri$$11$$) {
        if ($goog$uri$utils$needsPhishingProtection_$$) {
            $goog$uri$utils$needsPhishingProtection_$$ = !1;
            var $location$$inline_320$$ = $goog$global$$.location;
            if ($location$$inline_320$$) {
                var $domain$$inline_322_href$$inline_321_uri$$inline_1235$$ = $location$$inline_320$$.href;
                if ($domain$$inline_322_href$$inline_321_uri$$inline_1235$$ && ($domain$$inline_322_href$$inline_321_uri$$inline_1235$$ = ($domain$$inline_322_href$$inline_321_uri$$inline_1235$$ = $goog$uri$utils$split$$($domain$$inline_322_href$$inline_321_uri$$inline_1235$$)[3] || null) && decodeURIComponent($domain$$inline_322_href$$inline_321_uri$$inline_1235$$)) && $domain$$inline_322_href$$inline_321_uri$$inline_1235$$ != $location$$inline_320$$.hostname) {
                    throw $goog$uri$utils$needsPhishingProtection_$$ = !0, Error();
                }
            }
        }
        return $uri$$11$$.match($goog$uri$utils$splitRe_$$);
    }

    var $goog$uri$utils$needsPhishingProtection_$$ = $goog$userAgent$WEBKIT$$;

    function $goog$uri$utils$getHost$$($opt_scheme$$inline_324_uri$$27$$) {
        var $opt_port$$inline_327_pieces$$ = $goog$uri$utils$split$$($opt_scheme$$inline_324_uri$$27$$);
        $opt_scheme$$inline_324_uri$$27$$ = $opt_port$$inline_327_pieces$$[1];
        var $opt_userInfo$$inline_325$$ = $opt_port$$inline_327_pieces$$[2], $opt_domain$$inline_326$$ = $opt_port$$inline_327_pieces$$[3], $opt_port$$inline_327_pieces$$ = $opt_port$$inline_327_pieces$$[4], $out$$inline_331$$ = "";
        $opt_scheme$$inline_324_uri$$27$$ && ($out$$inline_331$$ += $opt_scheme$$inline_324_uri$$27$$ + ":");
        $opt_domain$$inline_326$$ && ($out$$inline_331$$ += "//", $opt_userInfo$$inline_325$$ && ($out$$inline_331$$ += $opt_userInfo$$inline_325$$ + "@"), $out$$inline_331$$ += $opt_domain$$inline_326$$, $opt_port$$inline_327_pieces$$ && ($out$$inline_331$$ += ":" + $opt_port$$inline_327_pieces$$));
        return $out$$inline_331$$;
    }
    ;
    function $goog$net$XhrIo$$($opt_xmlHttpFactory$$) {
        $goog$events$EventTarget$$.call(this);
        this.headers = new $goog$structs$Map$$;
        this.$xmlHttpFactory_$ = $opt_xmlHttpFactory$$ || null;
        this.$active_$ = !1;
        this.$xhrOptions_$ = this.$xhr_$ = null;
        this.$lastMethod_$ = this.$lastUri_$ = "";
        this.$lastErrorCode_$ = 0;
        this.$lastError_$ = "";
        this.$inAbort_$ = this.$inOpen_$ = this.$inSend_$ = this.$errorDispatched_$ = !1;
        this.$timeoutInterval_$ = 0;
        this.$timeoutId_$ = null;
        this.$responseType_$ = $goog$net$XhrIo$ResponseType$DEFAULT$$;
        this.$useXhr2Timeout_$ = this.$withCredentials_$ = !1;
    }

    $goog$inherits$$($goog$net$XhrIo$$, $goog$events$EventTarget$$);
    var $goog$net$XhrIo$ResponseType$DEFAULT$$ = "";
    $goog$net$XhrIo$$.prototype.$logger_$ = $goog$debug$LogManager$getLogger$$("goog.net.XhrIo");
    var $goog$net$XhrIo$HTTP_SCHEME_PATTERN$$ = /^https?$/i, $goog$net$XhrIo$METHODS_WITH_FORM_DATA$$ = ["POST", "PUT"];
    $JSCompiler_prototypeAlias$$ = $goog$net$XhrIo$$.prototype;
    $JSCompiler_prototypeAlias$$.$setTimeoutInterval$ = function $$JSCompiler_prototypeAlias$$$$setTimeoutInterval$$($ms$$3$$) {
        this.$timeoutInterval_$ = Math.max(0, $ms$$3$$);
    };
    $JSCompiler_prototypeAlias$$.send = function $$JSCompiler_prototypeAlias$$$send$($content$$8_url$$39$$, $method$$3_opt_method$$1$$, $contentIsFormData_opt_content$$3$$, $contentTypeKey_opt_headers$$1$$) {
        if (this.$xhr_$) {
            throw Error("[goog.net.XhrIo] Object is active with another request=" + this.$lastUri_$ + "; newUri=" + $content$$8_url$$39$$);
        }
        $method$$3_opt_method$$1$$ = $method$$3_opt_method$$1$$ ? $method$$3_opt_method$$1$$.toUpperCase() : "GET";
        this.$lastUri_$ = $content$$8_url$$39$$;
        this.$lastError_$ = "";
        this.$lastErrorCode_$ = 0;
        this.$lastMethod_$ = $method$$3_opt_method$$1$$;
        this.$errorDispatched_$ = !1;
        this.$active_$ = !0;
        this.$xhr_$ = this.$xmlHttpFactory_$ ? $JSCompiler_StaticMethods_createInstance$$(this.$xmlHttpFactory_$) : $JSCompiler_StaticMethods_createInstance$$($goog$net$XmlHttp$factory_$$);
        this.$xhrOptions_$ = this.$xmlHttpFactory_$ ? this.$xmlHttpFactory_$.getOptions() : $goog$net$XmlHttp$factory_$$.getOptions();
        this.$xhr_$.onreadystatechange = $goog$bind$$(this.$onReadyStateChange_$, this);
        try {
            $goog$log$fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Opening Xhr")), this.$inOpen_$ = !0, this.$xhr_$.open($method$$3_opt_method$$1$$, String($content$$8_url$$39$$), !0), this.$inOpen_$ = !1;
        } catch ($err$$13$$) {
            $goog$log$fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Error opening Xhr: " + $err$$13$$.message));
            this.$error_$(5, $err$$13$$);
            return;
        }
        $content$$8_url$$39$$ = $contentIsFormData_opt_content$$3$$ || "";
        var $headers$$ = this.headers.clone();
        $contentTypeKey_opt_headers$$1$$ && $goog$structs$forEach$$($contentTypeKey_opt_headers$$1$$, function ($value$$122$$, $key$$79$$) {
            $headers$$.set($key$$79$$, $value$$122$$);
        });
        $contentTypeKey_opt_headers$$1$$ = $goog$array$find$$($headers$$.$getKeys$(), $goog$net$XhrIo$isContentTypeHeader_$$);
        $contentIsFormData_opt_content$$3$$ = $goog$global$$.FormData && $content$$8_url$$39$$ instanceof $goog$global$$.FormData;
        !$goog$array$contains$$($goog$net$XhrIo$METHODS_WITH_FORM_DATA$$, $method$$3_opt_method$$1$$) || $contentTypeKey_opt_headers$$1$$ || $contentIsFormData_opt_content$$3$$ || $headers$$.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        $headers$$.forEach(function ($value$$123$$, $key$$80$$) {
            this.$xhr_$.setRequestHeader($key$$80$$, $value$$123$$);
        }, this);
        this.$responseType_$ && (this.$xhr_$.responseType = this.$responseType_$);
        "withCredentials" in this.$xhr_$ && (this.$xhr_$.withCredentials = this.$withCredentials_$);
        try {
            $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$$(this), 0 < this.$timeoutInterval_$ && (this.$useXhr2Timeout_$ = $goog$net$XhrIo$shouldUseXhr2Timeout_$$(this.$xhr_$), $goog$log$fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Will abort after " + this.$timeoutInterval_$ + "ms if incomplete, xhr2 " + this.$useXhr2Timeout_$)), this.$useXhr2Timeout_$ ? (this.$xhr_$.timeout = this.$timeoutInterval_$, this.$xhr_$.ontimeout = $goog$bind$$(this.$timeout_$, this)) : this.$timeoutId_$ =
                $goog$Timer$callOnce$$(this.$timeout_$, this.$timeoutInterval_$, this)), $goog$log$fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Sending request")), this.$inSend_$ = !0, this.$xhr_$.send($content$$8_url$$39$$), this.$inSend_$ = !1;
        } catch ($err$$14$$) {
            $goog$log$fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Send error: " + $err$$14$$.message)), this.$error_$(5, $err$$14$$);
        }
    };
    function $goog$net$XhrIo$shouldUseXhr2Timeout_$$($xhr$$) {
        return $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$(9) && $goog$isNumber$$($xhr$$.timeout) && $goog$isDef$$($xhr$$.ontimeout);
    }

    function $goog$net$XhrIo$isContentTypeHeader_$$($header$$5$$) {
        return "content-type" == $header$$5$$.toLowerCase();
    }

    $JSCompiler_prototypeAlias$$.$timeout_$ = function $$JSCompiler_prototypeAlias$$$$timeout_$$() {
        "undefined" != typeof $goog$$ && this.$xhr_$ && (this.$lastError_$ = "Timed out after " + this.$timeoutInterval_$ + "ms, aborting", this.$lastErrorCode_$ = 8, $goog$log$fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, this.$lastError_$)), this.dispatchEvent("timeout"), this.abort(8));
    };
    $JSCompiler_prototypeAlias$$.$error_$ = function $$JSCompiler_prototypeAlias$$$$error_$$($errorCode$$1$$, $err$$15$$) {
        this.$active_$ = !1;
        this.$xhr_$ && (this.$inAbort_$ = !0, this.$xhr_$.abort(), this.$inAbort_$ = !1);
        this.$lastError_$ = $err$$15$$;
        this.$lastErrorCode_$ = $errorCode$$1$$;
        $JSCompiler_StaticMethods_dispatchErrors_$$(this);
        $JSCompiler_StaticMethods_cleanUpXhr_$$(this);
    };
    function $JSCompiler_StaticMethods_dispatchErrors_$$($JSCompiler_StaticMethods_dispatchErrors_$self$$) {
        $JSCompiler_StaticMethods_dispatchErrors_$self$$.$errorDispatched_$ || ($JSCompiler_StaticMethods_dispatchErrors_$self$$.$errorDispatched_$ = !0, $JSCompiler_StaticMethods_dispatchErrors_$self$$.dispatchEvent("complete"), $JSCompiler_StaticMethods_dispatchErrors_$self$$.dispatchEvent("error"));
    }

    $JSCompiler_prototypeAlias$$.abort = function $$JSCompiler_prototypeAlias$$$abort$($opt_failureCode$$) {
        this.$xhr_$ && this.$active_$ && ($goog$log$fine$$(this.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$(this, "Aborting")), this.$active_$ = !1, this.$inAbort_$ = !0, this.$xhr_$.abort(), this.$inAbort_$ = !1, this.$lastErrorCode_$ = $opt_failureCode$$ || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), $JSCompiler_StaticMethods_cleanUpXhr_$$(this));
    };
    $JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
        this.$xhr_$ && (this.$active_$ && (this.$active_$ = !1, this.$inAbort_$ = !0, this.$xhr_$.abort(), this.$inAbort_$ = !1), $JSCompiler_StaticMethods_cleanUpXhr_$$(this, !0));
        $goog$net$XhrIo$$.$superClass_$.$disposeInternal$.call(this);
    };
    $JSCompiler_prototypeAlias$$.$onReadyStateChange_$ = function $$JSCompiler_prototypeAlias$$$$onReadyStateChange_$$() {
        this.$disposed_$ || (this.$inOpen_$ || this.$inSend_$ || this.$inAbort_$ ? $JSCompiler_StaticMethods_onReadyStateChangeHelper_$$(this) : this.$onReadyStateChangeEntryPoint_$());
    };
    $JSCompiler_prototypeAlias$$.$onReadyStateChangeEntryPoint_$ = function $$JSCompiler_prototypeAlias$$$$onReadyStateChangeEntryPoint_$$() {
        $JSCompiler_StaticMethods_onReadyStateChangeHelper_$$(this);
    };
    function $JSCompiler_StaticMethods_onReadyStateChangeHelper_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$) {
        if ($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$active_$ && "undefined" != typeof $goog$$) {
            if ($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$xhrOptions_$[1] && 4 == $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$) && 2 == $JSCompiler_StaticMethods_getStatus$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$)) {
                $goog$log$fine$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "Local request error detected and ignored"));
            } else {
                if ($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$inSend_$ && 4 == $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$)) {
                    $goog$Timer$callOnce$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$onReadyStateChange_$, 0, $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$);
                } else {
                    if ($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.dispatchEvent("readystatechange"), 4 == $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$)) {
                        $goog$log$fine$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$logger_$, $JSCompiler_StaticMethods_formatMsg_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "Request complete"));
                        $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$active_$ = !1;
                        try {
                            if ($JSCompiler_StaticMethods_isSuccess$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$)) {
                                $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.dispatchEvent("complete"), $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.dispatchEvent("success");
                            } else {
                                $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$lastErrorCode_$ = 6;
                                var $JSCompiler_inline_result$$43$$;
                                try {
                                    $JSCompiler_inline_result$$43$$ = 2 < $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$) ? $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$xhr_$.statusText : "";
                                } catch ($e$$inline_337$$) {
                                    $goog$log$fine$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$logger_$, "Can not get status: " + $e$$inline_337$$.message), $JSCompiler_inline_result$$43$$ = "";
                                }
                                $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$lastError_$ = $JSCompiler_inline_result$$43$$ + " [" + $JSCompiler_StaticMethods_getStatus$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$) + "]";
                                $JSCompiler_StaticMethods_dispatchErrors_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$);
                            }
                        } finally {
                            $JSCompiler_StaticMethods_cleanUpXhr_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$);
                        }
                    }
                }
            }
        }
    }

    function $JSCompiler_StaticMethods_cleanUpXhr_$$($JSCompiler_StaticMethods_cleanUpXhr_$self$$, $opt_fromDispose$$) {
        if ($JSCompiler_StaticMethods_cleanUpXhr_$self$$.$xhr_$) {
            $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$$($JSCompiler_StaticMethods_cleanUpXhr_$self$$);
            var $xhr$$1$$ = $JSCompiler_StaticMethods_cleanUpXhr_$self$$.$xhr_$, $clearedOnReadyStateChange$$ = $JSCompiler_StaticMethods_cleanUpXhr_$self$$.$xhrOptions_$[0] ? $goog$nullFunction$$ : null;
            $JSCompiler_StaticMethods_cleanUpXhr_$self$$.$xhr_$ = null;
            $JSCompiler_StaticMethods_cleanUpXhr_$self$$.$xhrOptions_$ = null;
            $opt_fromDispose$$ || $JSCompiler_StaticMethods_cleanUpXhr_$self$$.dispatchEvent("ready");
            try {
                $xhr$$1$$.onreadystatechange = $clearedOnReadyStateChange$$;
            } catch ($e$$58$$) {
                $goog$log$error$$($JSCompiler_StaticMethods_cleanUpXhr_$self$$.$logger_$, "Problem encountered resetting onreadystatechange: " + $e$$58$$.message);
            }
        }
    }

    function $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$$($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$) {
        $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$xhr_$ && $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$useXhr2Timeout_$ && ($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$xhr_$.ontimeout = null);
        $goog$isNumber$$($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$timeoutId_$) && ($goog$global$$.clearTimeout($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$timeoutId_$), $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$timeoutId_$ = null);
    }

    $JSCompiler_prototypeAlias$$.$isActive$ = function $$JSCompiler_prototypeAlias$$$$isActive$$() {
        return !!this.$xhr_$;
    };
    function $JSCompiler_StaticMethods_isSuccess$$($JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1053_scheme$$inline_1052$$) {
        var $JSCompiler_temp$$10_status$$1$$ = $JSCompiler_StaticMethods_getStatus$$($JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1053_scheme$$inline_1052$$), $JSCompiler_inline_result$$79_JSCompiler_temp$$9$$;
        a: {
            switch ($JSCompiler_temp$$10_status$$1$$) {
                case 200:
                    ;
                case 201:
                    ;
                case 202:
                    ;
                case 204:
                    ;
                case 206:
                    ;
                case 304:
                    ;
                case 1223:
                    $JSCompiler_inline_result$$79_JSCompiler_temp$$9$$ = !0;
                    break a;
                default:
                    $JSCompiler_inline_result$$79_JSCompiler_temp$$9$$ = !1;
            }
        }
        if (!$JSCompiler_inline_result$$79_JSCompiler_temp$$9$$) {
            if ($JSCompiler_temp$$10_status$$1$$ = 0 === $JSCompiler_temp$$10_status$$1$$) {
                $JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1053_scheme$$inline_1052$$ = $goog$uri$utils$split$$(String($JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1053_scheme$$inline_1052$$.$lastUri_$))[1] || null, !$JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1053_scheme$$inline_1052$$ && self.location && ($JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1053_scheme$$inline_1052$$ = self.location.protocol, $JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1053_scheme$$inline_1052$$ =
                    $JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1053_scheme$$inline_1052$$.substr(0, $JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1053_scheme$$inline_1052$$.length - 1)), $JSCompiler_temp$$10_status$$1$$ = !$goog$net$XhrIo$HTTP_SCHEME_PATTERN$$.test($JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1053_scheme$$inline_1052$$ ? $JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1053_scheme$$inline_1052$$.toLowerCase() : "");
            }
            $JSCompiler_inline_result$$79_JSCompiler_temp$$9$$ = $JSCompiler_temp$$10_status$$1$$;
        }
        return $JSCompiler_inline_result$$79_JSCompiler_temp$$9$$;
    }

    function $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_getReadyState$self$$) {
        return $JSCompiler_StaticMethods_getReadyState$self$$.$xhr_$ ? $JSCompiler_StaticMethods_getReadyState$self$$.$xhr_$.readyState : 0;
    }

    function $JSCompiler_StaticMethods_getStatus$$($JSCompiler_StaticMethods_getStatus$self$$) {
        try {
            return 2 < $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_getStatus$self$$) ? $JSCompiler_StaticMethods_getStatus$self$$.$xhr_$.status : -1;
        } catch ($e$$59$$) {
            return -1;
        }
    }

    function $JSCompiler_StaticMethods_formatMsg_$$($JSCompiler_StaticMethods_formatMsg_$self$$, $msg$$21$$) {
        return $msg$$21$$ + " [" + $JSCompiler_StaticMethods_formatMsg_$self$$.$lastMethod_$ + " " + $JSCompiler_StaticMethods_formatMsg_$self$$.$lastUri_$ + " " + $JSCompiler_StaticMethods_getStatus$$($JSCompiler_StaticMethods_formatMsg_$self$$) + "]";
    }
    ;
    function $goog$net$XhrIoPool$$($opt_headers$$2$$, $opt_minCount$$2$$, $opt_maxCount$$2$$) {
        $goog$structs$PriorityPool$$.call(this, $opt_minCount$$2$$, $opt_maxCount$$2$$);
        this.$headers_$ = $opt_headers$$2$$;
    }

    $goog$inherits$$($goog$net$XhrIoPool$$, $goog$structs$PriorityPool$$);
    $goog$net$XhrIoPool$$.prototype.$createObject$ = function $$goog$net$XhrIoPool$$$$$createObject$$() {
        var $xhrIo$$ = new $goog$net$XhrIo$$, $headers$$1$$ = this.$headers_$;
        $headers$$1$$ && $headers$$1$$.forEach(function ($value$$124$$, $key$$82$$) {
            $xhrIo$$.headers.set($key$$82$$, $value$$124$$);
        });
        return $xhrIo$$;
    };
    $goog$net$XhrIoPool$$.prototype.$objectCanBeReused$ = function $$goog$net$XhrIoPool$$$$$objectCanBeReused$$($obj$$110$$) {
        return !$obj$$110$$.$disposed_$ && !$obj$$110$$.$isActive$();
    };
    function $goog$net$XhrManager$$($opt_maxRetries$$, $opt_headers$$3$$, $opt_minCount$$3$$, $opt_maxCount$$3$$, $opt_timeoutInterval$$1$$) {
        $goog$events$EventTarget$$.call(this);
        this.$maxRetries_$ = $goog$isDef$$($opt_maxRetries$$) ? $opt_maxRetries$$ : 1;
        this.$timeoutInterval_$ = $goog$isDef$$($opt_timeoutInterval$$1$$) ? Math.max(0, $opt_timeoutInterval$$1$$) : 0;
        this.$xhrPool_$ = new $goog$net$XhrIoPool$$($opt_headers$$3$$, $opt_minCount$$3$$, $opt_maxCount$$3$$);
        this.$requests_$ = new $goog$structs$Map$$;
        this.$eventHandler_$ = new $goog$events$EventHandler$$(this);
    }

    $goog$inherits$$($goog$net$XhrManager$$, $goog$events$EventTarget$$);
    var $goog$net$XhrManager$XHR_EVENT_TYPES_$$ = "ready complete success error abort timeout".split(" ");
    $JSCompiler_prototypeAlias$$ = $goog$net$XhrManager$$.prototype;
    $JSCompiler_prototypeAlias$$.$setTimeoutInterval$ = function $$JSCompiler_prototypeAlias$$$$setTimeoutInterval$$($ms$$4$$) {
        this.$timeoutInterval_$ = Math.max(0, $ms$$4$$);
    };
    $JSCompiler_prototypeAlias$$.send = function $$JSCompiler_prototypeAlias$$$send$($callback$$65_id$$11$$, $request_url$$40$$, $opt_method$$2$$, $opt_content$$4$$, $opt_headers$$4$$, $opt_priority$$2$$, $opt_callback$$8$$, $opt_maxRetries$$1$$, $opt_responseType$$) {
        if (this.$requests_$.get($callback$$65_id$$11$$)) {
            throw Error("[goog.net.XhrManager] ID in use");
        }
        $request_url$$40$$ = new $goog$net$XhrManager$Request$$($request_url$$40$$, $goog$bind$$(this.$handleEvent_$, this, $callback$$65_id$$11$$), $opt_method$$2$$, $opt_content$$4$$, $opt_headers$$4$$, $opt_callback$$8$$, $goog$isDef$$($opt_maxRetries$$1$$) ? $opt_maxRetries$$1$$ : this.$maxRetries_$, $opt_responseType$$);
        this.$requests_$.set($callback$$65_id$$11$$, $request_url$$40$$);
        $callback$$65_id$$11$$ = $goog$bind$$(this.$handleAvailableXhr_$, this, $callback$$65_id$$11$$);
        this.$xhrPool_$.$getObject$($callback$$65_id$$11$$, $opt_priority$$2$$);
        return $request_url$$40$$;
    };
    $JSCompiler_prototypeAlias$$.abort = function $$JSCompiler_prototypeAlias$$$abort$($id$$12$$, $opt_force$$) {
        var $request$$1$$ = this.$requests_$.get($id$$12$$);
        if ($request$$1$$) {
            var $xhrIo$$1$$ = $request$$1$$.$xhrIo$;
            $request$$1$$.$aborted_$ = !0;
            $opt_force$$ && ($xhrIo$$1$$ && (this.$eventHandler_$.$unlisten$($xhrIo$$1$$, $goog$net$XhrManager$XHR_EVENT_TYPES_$$, $request$$1$$.$xhrEventCallback_$), $goog$events$listenOnce$$($xhrIo$$1$$, "ready", function () {
                var $JSCompiler_StaticMethods_releaseObject$self$$inline_1061$$ = this.$xhrPool_$;
                $JSCompiler_StaticMethods_releaseObject$self$$inline_1061$$.$inUseSet_$.remove($xhrIo$$1$$) && $JSCompiler_StaticMethods_releaseObject$self$$inline_1061$$.$addFreeObject$($xhrIo$$1$$);
            }, !1, this)), this.$requests_$.remove($id$$12$$));
            $xhrIo$$1$$ && $xhrIo$$1$$.abort();
        }
    };
    $JSCompiler_prototypeAlias$$.$handleAvailableXhr_$ = function $$JSCompiler_prototypeAlias$$$$handleAvailableXhr_$$($id$$13$$, $xhrIo$$2$$) {
        var $JSCompiler_StaticMethods_releaseObject$self$$inline_1064_request$$2$$ = this.$requests_$.get($id$$13$$);
        $JSCompiler_StaticMethods_releaseObject$self$$inline_1064_request$$2$$ && !$JSCompiler_StaticMethods_releaseObject$self$$inline_1064_request$$2$$.$xhrIo$ ? (this.$eventHandler_$.$listen$($xhrIo$$2$$, $goog$net$XhrManager$XHR_EVENT_TYPES_$$, $JSCompiler_StaticMethods_releaseObject$self$$inline_1064_request$$2$$.$xhrEventCallback_$), $xhrIo$$2$$.$setTimeoutInterval$(this.$timeoutInterval_$), $xhrIo$$2$$.$responseType_$ = $JSCompiler_StaticMethods_releaseObject$self$$inline_1064_request$$2$$.$responseType_$,
            $JSCompiler_StaticMethods_releaseObject$self$$inline_1064_request$$2$$.$xhrIo$ = $xhrIo$$2$$, this.dispatchEvent(new $goog$net$XhrManager$Event$$("ready", this, $id$$13$$, $xhrIo$$2$$)), $JSCompiler_StaticMethods_retry_$$(this, $id$$13$$, $xhrIo$$2$$), $JSCompiler_StaticMethods_releaseObject$self$$inline_1064_request$$2$$.$aborted_$ && $xhrIo$$2$$.abort()) : ($JSCompiler_StaticMethods_releaseObject$self$$inline_1064_request$$2$$ = this.$xhrPool_$, $JSCompiler_StaticMethods_releaseObject$self$$inline_1064_request$$2$$.$inUseSet_$.remove($xhrIo$$2$$) &&
        $JSCompiler_StaticMethods_releaseObject$self$$inline_1064_request$$2$$.$addFreeObject$($xhrIo$$2$$));
    };
    $JSCompiler_prototypeAlias$$.$handleEvent_$ = function $$JSCompiler_prototypeAlias$$$$handleEvent_$$($id$$14$$, $e$$65$$) {
        var $JSCompiler_inline_result$$48_xhrIo$$3$$ = $e$$65$$.target;
        switch ($e$$65$$.type) {
            case "ready":
                $JSCompiler_StaticMethods_retry_$$(this, $id$$14$$, $JSCompiler_inline_result$$48_xhrIo$$3$$);
                break;
            case "complete":
                a: {
                    var $JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1069_request$$inline_358$$ = this.$requests_$.get($id$$14$$);
                    if (7 == $JSCompiler_inline_result$$48_xhrIo$$3$$.$lastErrorCode_$ || $JSCompiler_StaticMethods_isSuccess$$($JSCompiler_inline_result$$48_xhrIo$$3$$) || $JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1069_request$$inline_358$$.$attemptCount_$ > $JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1069_request$$inline_358$$.$maxRetries_$) {
                        if (this.dispatchEvent(new $goog$net$XhrManager$Event$$("complete", this, $id$$14$$, $JSCompiler_inline_result$$48_xhrIo$$3$$)), $JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1069_request$$inline_358$$ && ($JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1069_request$$inline_358$$.$completed_$ = !0, $JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1069_request$$inline_358$$.$completeCallback_$)) {
                            $JSCompiler_inline_result$$48_xhrIo$$3$$ = $JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1069_request$$inline_358$$.$completeCallback_$.call($JSCompiler_inline_result$$48_xhrIo$$3$$, $e$$65$$);
                            break a;
                        }
                    }
                    $JSCompiler_inline_result$$48_xhrIo$$3$$ = null;
                }
                return $JSCompiler_inline_result$$48_xhrIo$$3$$;
            case "success":
                this.dispatchEvent(new $goog$net$XhrManager$Event$$("success", this, $id$$14$$, $JSCompiler_inline_result$$48_xhrIo$$3$$));
                break;
            case "timeout":
                ;
            case "error":
                $JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1069_request$$inline_358$$ = this.$requests_$.get($id$$14$$);
                $JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1069_request$$inline_358$$.$attemptCount_$ > $JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1069_request$$inline_358$$.$maxRetries_$ && this.dispatchEvent(new $goog$net$XhrManager$Event$$("error", this, $id$$14$$, $JSCompiler_inline_result$$48_xhrIo$$3$$));
                break;
            case "abort":
                this.dispatchEvent(new $goog$net$XhrManager$Event$$("abort", this, $id$$14$$, $JSCompiler_inline_result$$48_xhrIo$$3$$));
        }
        return null;
    };
    function $JSCompiler_StaticMethods_retry_$$($JSCompiler_StaticMethods_releaseObject$self$$inline_1075_JSCompiler_StaticMethods_retry_$self$$, $id$$15$$, $xhrIo$$4$$) {
        var $request$$3$$ = $JSCompiler_StaticMethods_releaseObject$self$$inline_1075_JSCompiler_StaticMethods_retry_$self$$.$requests_$.get($id$$15$$);
        !$request$$3$$ || $request$$3$$.$completed_$ || $request$$3$$.$attemptCount_$ > $request$$3$$.$maxRetries_$ ? ($request$$3$$ && ($JSCompiler_StaticMethods_releaseObject$self$$inline_1075_JSCompiler_StaticMethods_retry_$self$$.$eventHandler_$.$unlisten$($xhrIo$$4$$, $goog$net$XhrManager$XHR_EVENT_TYPES_$$, $request$$3$$.$xhrEventCallback_$), $JSCompiler_StaticMethods_releaseObject$self$$inline_1075_JSCompiler_StaticMethods_retry_$self$$.$requests_$.remove($id$$15$$)), $JSCompiler_StaticMethods_releaseObject$self$$inline_1075_JSCompiler_StaticMethods_retry_$self$$ =
            $JSCompiler_StaticMethods_releaseObject$self$$inline_1075_JSCompiler_StaticMethods_retry_$self$$.$xhrPool_$, $JSCompiler_StaticMethods_releaseObject$self$$inline_1075_JSCompiler_StaticMethods_retry_$self$$.$inUseSet_$.remove($xhrIo$$4$$) && $JSCompiler_StaticMethods_releaseObject$self$$inline_1075_JSCompiler_StaticMethods_retry_$self$$.$addFreeObject$($xhrIo$$4$$)) : ($request$$3$$.$attemptCount_$++, $xhrIo$$4$$.send($request$$3$$.$url_$, $request$$3$$.$method_$, $request$$3$$.$content_$, $request$$3$$.$headers_$));
    }

    $JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
        $goog$net$XhrManager$$.$superClass_$.$disposeInternal$.call(this);
        this.$xhrPool_$.$dispose$();
        this.$xhrPool_$ = null;
        this.$eventHandler_$.$dispose$();
        this.$eventHandler_$ = null;
        this.$requests_$.clear();
        this.$requests_$ = null;
    };
    function $goog$net$XhrManager$Event$$($type$$128$$, $target$$55$$, $id$$20$$, $xhrIo$$11$$) {
        $goog$events$Event$$.call(this, $type$$128$$, $target$$55$$);
        this.id = $id$$20$$;
        this.$xhrIo$ = $xhrIo$$11$$;
    }

    $goog$inherits$$($goog$net$XhrManager$Event$$, $goog$events$Event$$);
    function $goog$net$XhrManager$Request$$($url$$41$$, $xhrEventCallback$$, $opt_method$$3$$, $opt_content$$5$$, $opt_headers$$5$$, $opt_callback$$9$$, $opt_maxRetries$$2$$, $opt_responseType$$1$$) {
        this.$url_$ = $url$$41$$;
        this.$method_$ = $opt_method$$3$$ || "GET";
        this.$content_$ = $opt_content$$5$$;
        this.$headers_$ = $opt_headers$$5$$ || null;
        this.$maxRetries_$ = $goog$isDef$$($opt_maxRetries$$2$$) ? $opt_maxRetries$$2$$ : 1;
        this.$attemptCount_$ = 0;
        this.$aborted_$ = this.$completed_$ = !1;
        this.$xhrEventCallback_$ = $xhrEventCallback$$;
        this.$completeCallback_$ = $opt_callback$$9$$;
        this.$responseType_$ = $opt_responseType$$1$$ || $goog$net$XhrIo$ResponseType$DEFAULT$$;
        this.$xhrIo$ = null;
    }
    ;
    function $goog$Uri$$($opt_uri$$, $opt_ignoreCase$$) {
        var $m$$4_newDomain$$inline_379_newFragment$$inline_387_newFragment$$inline_403_newPath$$inline_383_newUserInfo$$inline_375$$;
        if ($opt_uri$$ instanceof $goog$Uri$$) {
            this.$ignoreCase_$ = $goog$isDef$$($opt_ignoreCase$$) ? $opt_ignoreCase$$ : $opt_uri$$.$ignoreCase_$, $JSCompiler_StaticMethods_setScheme$$(this, $opt_uri$$.$scheme_$), $m$$4_newDomain$$inline_379_newFragment$$inline_387_newFragment$$inline_403_newPath$$inline_383_newUserInfo$$inline_375$$ = $opt_uri$$.$userInfo_$, $JSCompiler_StaticMethods_enforceReadOnly$$(this), this.$userInfo_$ = $m$$4_newDomain$$inline_379_newFragment$$inline_387_newFragment$$inline_403_newPath$$inline_383_newUserInfo$$inline_375$$,
                $m$$4_newDomain$$inline_379_newFragment$$inline_387_newFragment$$inline_403_newPath$$inline_383_newUserInfo$$inline_375$$ = $opt_uri$$.$domain_$, $JSCompiler_StaticMethods_enforceReadOnly$$(this), this.$domain_$ = $m$$4_newDomain$$inline_379_newFragment$$inline_387_newFragment$$inline_403_newPath$$inline_383_newUserInfo$$inline_375$$, $JSCompiler_StaticMethods_setPort$$(this, $opt_uri$$.$port_$), $m$$4_newDomain$$inline_379_newFragment$$inline_387_newFragment$$inline_403_newPath$$inline_383_newUserInfo$$inline_375$$ =
                $opt_uri$$.$path_$, $JSCompiler_StaticMethods_enforceReadOnly$$(this), this.$path_$ = $m$$4_newDomain$$inline_379_newFragment$$inline_387_newFragment$$inline_403_newPath$$inline_383_newUserInfo$$inline_375$$, $JSCompiler_StaticMethods_setQueryData$$(this, $opt_uri$$.$queryData_$.clone()), $m$$4_newDomain$$inline_379_newFragment$$inline_387_newFragment$$inline_403_newPath$$inline_383_newUserInfo$$inline_375$$ = $opt_uri$$.$fragment_$, $JSCompiler_StaticMethods_enforceReadOnly$$(this), this.$fragment_$ =
                $m$$4_newDomain$$inline_379_newFragment$$inline_387_newFragment$$inline_403_newPath$$inline_383_newUserInfo$$inline_375$$;
        } else {
            if ($opt_uri$$ && ($m$$4_newDomain$$inline_379_newFragment$$inline_387_newFragment$$inline_403_newPath$$inline_383_newUserInfo$$inline_375$$ = $goog$uri$utils$split$$(String($opt_uri$$)))) {
                this.$ignoreCase_$ = !!$opt_ignoreCase$$;
                $JSCompiler_StaticMethods_setScheme$$(this, $m$$4_newDomain$$inline_379_newFragment$$inline_387_newFragment$$inline_403_newPath$$inline_383_newUserInfo$$inline_375$$[1] || "", !0);
                var $newDomain$$inline_395_newPath$$inline_399_newUserInfo$$inline_391$$ = $m$$4_newDomain$$inline_379_newFragment$$inline_387_newFragment$$inline_403_newPath$$inline_383_newUserInfo$$inline_375$$[2] || "";
                $JSCompiler_StaticMethods_enforceReadOnly$$(this);
                this.$userInfo_$ = $goog$Uri$decodeOrEmpty_$$($newDomain$$inline_395_newPath$$inline_399_newUserInfo$$inline_391$$);
                $newDomain$$inline_395_newPath$$inline_399_newUserInfo$$inline_391$$ = $m$$4_newDomain$$inline_379_newFragment$$inline_387_newFragment$$inline_403_newPath$$inline_383_newUserInfo$$inline_375$$[3] || "";
                $JSCompiler_StaticMethods_enforceReadOnly$$(this);
                this.$domain_$ = $goog$Uri$decodeOrEmpty_$$($newDomain$$inline_395_newPath$$inline_399_newUserInfo$$inline_391$$);
                $JSCompiler_StaticMethods_setPort$$(this, $m$$4_newDomain$$inline_379_newFragment$$inline_387_newFragment$$inline_403_newPath$$inline_383_newUserInfo$$inline_375$$[4]);
                $newDomain$$inline_395_newPath$$inline_399_newUserInfo$$inline_391$$ = $m$$4_newDomain$$inline_379_newFragment$$inline_387_newFragment$$inline_403_newPath$$inline_383_newUserInfo$$inline_375$$[5] || "";
                $JSCompiler_StaticMethods_enforceReadOnly$$(this);
                this.$path_$ = $goog$Uri$decodeOrEmpty_$$($newDomain$$inline_395_newPath$$inline_399_newUserInfo$$inline_391$$);
                $JSCompiler_StaticMethods_setQueryData$$(this, $m$$4_newDomain$$inline_379_newFragment$$inline_387_newFragment$$inline_403_newPath$$inline_383_newUserInfo$$inline_375$$[6] || "", !0);
                $m$$4_newDomain$$inline_379_newFragment$$inline_387_newFragment$$inline_403_newPath$$inline_383_newUserInfo$$inline_375$$ = $m$$4_newDomain$$inline_379_newFragment$$inline_387_newFragment$$inline_403_newPath$$inline_383_newUserInfo$$inline_375$$[7] || "";
                $JSCompiler_StaticMethods_enforceReadOnly$$(this);
                this.$fragment_$ = $goog$Uri$decodeOrEmpty_$$($m$$4_newDomain$$inline_379_newFragment$$inline_387_newFragment$$inline_403_newPath$$inline_383_newUserInfo$$inline_375$$);
            } else {
                this.$ignoreCase_$ = !!$opt_ignoreCase$$, this.$queryData_$ = new $goog$Uri$QueryData$$(null, 0, this.$ignoreCase_$);
            }
        }
    }

    $JSCompiler_prototypeAlias$$ = $goog$Uri$$.prototype;
    $JSCompiler_prototypeAlias$$.$scheme_$ = "";
    $JSCompiler_prototypeAlias$$.$userInfo_$ = "";
    $JSCompiler_prototypeAlias$$.$domain_$ = "";
    $JSCompiler_prototypeAlias$$.$port_$ = null;
    $JSCompiler_prototypeAlias$$.$path_$ = "";
    $JSCompiler_prototypeAlias$$.$fragment_$ = "";
    $JSCompiler_prototypeAlias$$.$isReadOnly_$ = !1;
    $JSCompiler_prototypeAlias$$.$ignoreCase_$ = !1;
    $JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
        var $out$$2$$ = [], $domain$$1_fragment$$2_path$$8_port_query$$6_scheme$$2$$ = this.$scheme_$;
        $domain$$1_fragment$$2_path$$8_port_query$$6_scheme$$2$$ && $out$$2$$.push($goog$Uri$encodeSpecialChars_$$($domain$$1_fragment$$2_path$$8_port_query$$6_scheme$$2$$, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$), ":");
        if ($domain$$1_fragment$$2_path$$8_port_query$$6_scheme$$2$$ = this.$domain_$) {
            $out$$2$$.push("//");
            var $userInfo$$ = this.$userInfo_$;
            $userInfo$$ && $out$$2$$.push($goog$Uri$encodeSpecialChars_$$($userInfo$$, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$), "@");
            $out$$2$$.push(encodeURIComponent(String($domain$$1_fragment$$2_path$$8_port_query$$6_scheme$$2$$)));
            $domain$$1_fragment$$2_path$$8_port_query$$6_scheme$$2$$ = this.$port_$;
            null != $domain$$1_fragment$$2_path$$8_port_query$$6_scheme$$2$$ && $out$$2$$.push(":", String($domain$$1_fragment$$2_path$$8_port_query$$6_scheme$$2$$));
        }
        if ($domain$$1_fragment$$2_path$$8_port_query$$6_scheme$$2$$ = this.$path_$) {
            this.$domain_$ && "/" != $domain$$1_fragment$$2_path$$8_port_query$$6_scheme$$2$$.charAt(0) && $out$$2$$.push("/"), $out$$2$$.push($goog$Uri$encodeSpecialChars_$$($domain$$1_fragment$$2_path$$8_port_query$$6_scheme$$2$$, "/" == $domain$$1_fragment$$2_path$$8_port_query$$6_scheme$$2$$.charAt(0) ? $goog$Uri$reDisallowedInAbsolutePath_$$ : $goog$Uri$reDisallowedInRelativePath_$$));
        }
        ($domain$$1_fragment$$2_path$$8_port_query$$6_scheme$$2$$ = this.$queryData_$.toString()) && $out$$2$$.push("?", $domain$$1_fragment$$2_path$$8_port_query$$6_scheme$$2$$);
        ($domain$$1_fragment$$2_path$$8_port_query$$6_scheme$$2$$ = this.$fragment_$) && $out$$2$$.push("#", $goog$Uri$encodeSpecialChars_$$($domain$$1_fragment$$2_path$$8_port_query$$6_scheme$$2$$, $goog$Uri$reDisallowedInFragment_$$));
        return $out$$2$$.join("");
    };
    $JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
        return new $goog$Uri$$(this);
    };
    function $JSCompiler_StaticMethods_setScheme$$($JSCompiler_StaticMethods_setScheme$self$$, $newScheme$$, $opt_decode$$) {
        $JSCompiler_StaticMethods_enforceReadOnly$$($JSCompiler_StaticMethods_setScheme$self$$);
        $JSCompiler_StaticMethods_setScheme$self$$.$scheme_$ = $opt_decode$$ ? $goog$Uri$decodeOrEmpty_$$($newScheme$$) : $newScheme$$;
        $JSCompiler_StaticMethods_setScheme$self$$.$scheme_$ && ($JSCompiler_StaticMethods_setScheme$self$$.$scheme_$ = $JSCompiler_StaticMethods_setScheme$self$$.$scheme_$.replace(/:$/, ""));
    }

    function $JSCompiler_StaticMethods_setPort$$($JSCompiler_StaticMethods_setPort$self$$, $newPort$$) {
        $JSCompiler_StaticMethods_enforceReadOnly$$($JSCompiler_StaticMethods_setPort$self$$);
        if ($newPort$$) {
            $newPort$$ = Number($newPort$$);
            if (isNaN($newPort$$) || 0 > $newPort$$) {
                throw Error("Bad port number " + $newPort$$);
            }
            $JSCompiler_StaticMethods_setPort$self$$.$port_$ = $newPort$$;
        } else {
            $JSCompiler_StaticMethods_setPort$self$$.$port_$ = null;
        }
    }

    function $JSCompiler_StaticMethods_setQueryData$$($JSCompiler_StaticMethods_setQueryData$self$$, $queryData$$, $opt_decode$$4$$) {
        $JSCompiler_StaticMethods_enforceReadOnly$$($JSCompiler_StaticMethods_setQueryData$self$$);
        $queryData$$ instanceof $goog$Uri$QueryData$$ ? ($JSCompiler_StaticMethods_setQueryData$self$$.$queryData_$ = $queryData$$, $JSCompiler_StaticMethods_setQueryData$self$$.$queryData_$.$setIgnoreCase$($JSCompiler_StaticMethods_setQueryData$self$$.$ignoreCase_$)) : ($opt_decode$$4$$ || ($queryData$$ = $goog$Uri$encodeSpecialChars_$$($queryData$$, $goog$Uri$reDisallowedInQuery_$$)), $JSCompiler_StaticMethods_setQueryData$self$$.$queryData_$ = new $goog$Uri$QueryData$$($queryData$$, 0, $JSCompiler_StaticMethods_setQueryData$self$$.$ignoreCase_$));
    }

    function $JSCompiler_StaticMethods_getDecodedQuery$$($JSCompiler_StaticMethods_getDecodedQuery$self$$) {
        return $goog$Uri$decodeOrEmpty_$$($JSCompiler_StaticMethods_getDecodedQuery$self$$.$queryData_$.toString());
    }

    function $JSCompiler_StaticMethods_enforceReadOnly$$($JSCompiler_StaticMethods_enforceReadOnly$self$$) {
        if ($JSCompiler_StaticMethods_enforceReadOnly$self$$.$isReadOnly_$) {
            throw Error("Tried to modify a read-only Uri");
        }
    }

    $JSCompiler_prototypeAlias$$.$setIgnoreCase$ = function $$JSCompiler_prototypeAlias$$$$setIgnoreCase$$($ignoreCase$$) {
        this.$ignoreCase_$ = $ignoreCase$$;
        this.$queryData_$ && this.$queryData_$.$setIgnoreCase$($ignoreCase$$);
        return this;
    };
    function $goog$Uri$decodeOrEmpty_$$($val$$41$$) {
        return $val$$41$$ ? decodeURIComponent($val$$41$$) : "";
    }

    function $goog$Uri$encodeSpecialChars_$$($unescapedPart$$, $extra$$) {
        return $goog$isString$$($unescapedPart$$) ? encodeURI($unescapedPart$$).replace($extra$$, $goog$Uri$encodeChar_$$) : null;
    }

    function $goog$Uri$encodeChar_$$($ch$$3_n$$15$$) {
        $ch$$3_n$$15$$ = $ch$$3_n$$15$$.charCodeAt(0);
        return "%" + ($ch$$3_n$$15$$ >> 4 & 15).toString(16) + ($ch$$3_n$$15$$ & 15).toString(16);
    }

    var $goog$Uri$reDisallowedInSchemeOrUserInfo_$$ = /[#\/\?@]/g, $goog$Uri$reDisallowedInRelativePath_$$ = /[\#\?:]/g, $goog$Uri$reDisallowedInAbsolutePath_$$ = /[\#\?]/g, $goog$Uri$reDisallowedInQuery_$$ = /[\#\?@]/g, $goog$Uri$reDisallowedInFragment_$$ = /#/g;

    function $goog$Uri$QueryData$$($opt_query$$1$$, $opt_uri$$1$$, $opt_ignoreCase$$3$$) {
        this.$encodedQuery_$ = $opt_query$$1$$ || null;
        this.$ignoreCase_$ = !!$opt_ignoreCase$$3$$;
    }

    function $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$) {
        if (!$JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$keyMap_$ && ($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$keyMap_$ = new $goog$structs$Map$$, $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$count_$ = 0, $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$encodedQuery_$)) {
            for (var $pairs$$2$$ = $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$encodedQuery_$.split("&"), $i$$147$$ = 0; $i$$147$$ < $pairs$$2$$.length; $i$$147$$++) {
                var $indexOfEquals$$ = $pairs$$2$$[$i$$147$$].indexOf("="), $name$$73$$ = null, $value$$126$$ = null;
                0 <= $indexOfEquals$$ ? ($name$$73$$ = $pairs$$2$$[$i$$147$$].substring(0, $indexOfEquals$$), $value$$126$$ = $pairs$$2$$[$i$$147$$].substring($indexOfEquals$$ + 1)) : $name$$73$$ = $pairs$$2$$[$i$$147$$];
                $name$$73$$ = decodeURIComponent($name$$73$$.replace(/\+/g, " "));
                $name$$73$$ = $JSCompiler_StaticMethods_getKeyName_$$($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$, $name$$73$$);
                $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.add($name$$73$$, $value$$126$$ ? decodeURIComponent($value$$126$$.replace(/\+/g, " ")) : "");
            }
        }
    }

    $JSCompiler_prototypeAlias$$ = $goog$Uri$QueryData$$.prototype;
    $JSCompiler_prototypeAlias$$.$keyMap_$ = null;
    $JSCompiler_prototypeAlias$$.$count_$ = null;
    $JSCompiler_prototypeAlias$$.$getCount$ = function $$JSCompiler_prototypeAlias$$$$getCount$$() {
        $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
        return this.$count_$;
    };
    $JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($key$$87$$, $value$$128$$) {
        $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
        this.$encodedQuery_$ = null;
        $key$$87$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$$87$$);
        var $values$$18$$ = this.$keyMap_$.get($key$$87$$);
        $values$$18$$ || this.$keyMap_$.set($key$$87$$, $values$$18$$ = []);
        $values$$18$$.push($value$$128$$);
        this.$count_$++;
        return this;
    };
    $JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($key$$88$$) {
        $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
        $key$$88$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$$88$$);
        return this.$keyMap_$.$containsKey$($key$$88$$) ? (this.$encodedQuery_$ = null, this.$count_$ -= this.$keyMap_$.get($key$$88$$).length, this.$keyMap_$.remove($key$$88$$)) : !1;
    };
    $JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
        this.$keyMap_$ = this.$encodedQuery_$ = null;
        this.$count_$ = 0;
    };
    $JSCompiler_prototypeAlias$$.$isEmpty$ = function $$JSCompiler_prototypeAlias$$$$isEmpty$$() {
        $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
        return 0 == this.$count_$;
    };
    $JSCompiler_prototypeAlias$$.$containsKey$ = function $$JSCompiler_prototypeAlias$$$$containsKey$$($key$$89$$) {
        $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
        $key$$89$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$$89$$);
        return this.$keyMap_$.$containsKey$($key$$89$$);
    };
    $JSCompiler_prototypeAlias$$.$getKeys$ = function $$JSCompiler_prototypeAlias$$$$getKeys$$() {
        $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
        for (var $vals$$1$$ = this.$keyMap_$.$getValues$(), $keys$$14$$ = this.$keyMap_$.$getKeys$(), $rv$$25$$ = [], $i$$150$$ = 0; $i$$150$$ < $keys$$14$$.length; $i$$150$$++) {
            for (var $val$$42$$ = $vals$$1$$[$i$$150$$], $j$$9$$ = 0; $j$$9$$ < $val$$42$$.length; $j$$9$$++) {
                $rv$$25$$.push($keys$$14$$[$i$$150$$]);
            }
        }
        return $rv$$25$$;
    };
    $JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$($opt_key$$1_values$$19$$) {
        $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
        var $rv$$26$$ = [];
        if ($goog$isString$$($opt_key$$1_values$$19$$)) {
            this.$containsKey$($opt_key$$1_values$$19$$) && ($rv$$26$$ = $goog$array$concat$$($rv$$26$$, this.$keyMap_$.get($JSCompiler_StaticMethods_getKeyName_$$(this, $opt_key$$1_values$$19$$))));
        } else {
            $opt_key$$1_values$$19$$ = this.$keyMap_$.$getValues$();
            for (var $i$$151$$ = 0; $i$$151$$ < $opt_key$$1_values$$19$$.length; $i$$151$$++) {
                $rv$$26$$ = $goog$array$concat$$($rv$$26$$, $opt_key$$1_values$$19$$[$i$$151$$]);
            }
        }
        return $rv$$26$$;
    };
    $JSCompiler_prototypeAlias$$.set = function $$JSCompiler_prototypeAlias$$$set$($key$$90$$, $value$$130$$) {
        $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
        this.$encodedQuery_$ = null;
        $key$$90$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$$90$$);
        this.$containsKey$($key$$90$$) && (this.$count_$ -= this.$keyMap_$.get($key$$90$$).length);
        this.$keyMap_$.set($key$$90$$, [$value$$130$$]);
        this.$count_$++;
        return this;
    };
    $JSCompiler_prototypeAlias$$.get = function $$JSCompiler_prototypeAlias$$$get$($key$$91$$, $opt_default$$2$$) {
        var $values$$20$$ = $key$$91$$ ? this.$getValues$($key$$91$$) : [];
        return 0 < $values$$20$$.length ? String($values$$20$$[0]) : $opt_default$$2$$;
    };
    $JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
        if (this.$encodedQuery_$) {
            return this.$encodedQuery_$;
        }
        if (!this.$keyMap_$) {
            return "";
        }
        for (var $sb$$10$$ = [], $keys$$15$$ = this.$keyMap_$.$getKeys$(), $i$$152$$ = 0; $i$$152$$ < $keys$$15$$.length; $i$$152$$++) {
            for (var $key$$93_val$$43$$ = $keys$$15$$[$i$$152$$], $encodedKey$$ = encodeURIComponent(String($key$$93_val$$43$$)), $key$$93_val$$43$$ = this.$getValues$($key$$93_val$$43$$), $j$$10$$ = 0; $j$$10$$ < $key$$93_val$$43$$.length; $j$$10$$++) {
                var $param$$3$$ = $encodedKey$$;
                "" !== $key$$93_val$$43$$[$j$$10$$] && ($param$$3$$ += "=" + encodeURIComponent(String($key$$93_val$$43$$[$j$$10$$])));
                $sb$$10$$.push($param$$3$$);
            }
        }
        return this.$encodedQuery_$ = $sb$$10$$.join("&");
    };
    $JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
        var $rv$$27$$ = new $goog$Uri$QueryData$$;
        $rv$$27$$.$encodedQuery_$ = this.$encodedQuery_$;
        this.$keyMap_$ && ($rv$$27$$.$keyMap_$ = this.$keyMap_$.clone(), $rv$$27$$.$count_$ = this.$count_$);
        return $rv$$27$$;
    };
    function $JSCompiler_StaticMethods_getKeyName_$$($JSCompiler_StaticMethods_getKeyName_$self$$, $arg$$7$$) {
        var $keyName$$ = String($arg$$7$$);
        $JSCompiler_StaticMethods_getKeyName_$self$$.$ignoreCase_$ && ($keyName$$ = $keyName$$.toLowerCase());
        return $keyName$$;
    }

    $JSCompiler_prototypeAlias$$.$setIgnoreCase$ = function $$JSCompiler_prototypeAlias$$$$setIgnoreCase$$($ignoreCase$$1$$) {
        $ignoreCase$$1$$ && !this.$ignoreCase_$ && ($JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this), this.$encodedQuery_$ = null, this.$keyMap_$.forEach(function ($value$$132$$, $key$$95$$) {
            var $lowerCase$$ = $key$$95$$.toLowerCase();
            $key$$95$$ != $lowerCase$$ && (this.remove($key$$95$$), this.remove($lowerCase$$), 0 < $value$$132$$.length && (this.$encodedQuery_$ = null, this.$keyMap_$.set($JSCompiler_StaticMethods_getKeyName_$$(this, $lowerCase$$), $goog$array$toArray$$($value$$132$$)), this.$count_$ += $value$$132$$.length));
        }, this));
        this.$ignoreCase_$ = $ignoreCase$$1$$;
    };
    function $soy$renderElement$$($element$$55$$, $opt_templateData$$) {
        var $JSCompiler_inline_result$$991_template_templateResult$$inline_1090$$ = $viewbix$sdk$menu$template$standard$main$$;
        $goog$asserts$assert$$($JSCompiler_inline_result$$991_template_templateResult$$inline_1090$$, "Soy template may not be null.");
        $JSCompiler_inline_result$$991_template_templateResult$$inline_1090$$ = $JSCompiler_inline_result$$991_template_templateResult$$inline_1090$$($opt_templateData$$ || $goog$soy$defaultTemplateData_$$, void 0, void 0);
        $goog$isObject$$($JSCompiler_inline_result$$991_template_templateResult$$inline_1090$$) ? ($goog$asserts$fail$$("Soy template output is unsafe for use as HTML: " + $JSCompiler_inline_result$$991_template_templateResult$$inline_1090$$), $JSCompiler_inline_result$$991_template_templateResult$$inline_1090$$ = "zSoyz") : $JSCompiler_inline_result$$991_template_templateResult$$inline_1090$$ = String($JSCompiler_inline_result$$991_template_templateResult$$inline_1090$$);
        $element$$55$$.innerHTML = $JSCompiler_inline_result$$991_template_templateResult$$inline_1090$$;
    }

    function $soy$$0$0escapeHtml$$($value$$134$$) {
        return "object" === typeof $value$$134$$ && $value$$134$$ && 0 === $value$$134$$.$contentKind$ ? $value$$134$$.content : String($value$$134$$).replace($soy$esc$$0$0MATCHER_FOR_ESCAPE_HTML_$$, $soy$esc$$0$0REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$);
    }

    var $soy$esc$$0$0ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$ = {
        "\x00": "&#0;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        "-": "&#45;",
        "/": "&#47;",
        "=": "&#61;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function $soy$esc$$0$0REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$($ch$$7$$) {
        return $soy$esc$$0$0ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$[$ch$$7$$];
    }

    var $soy$esc$$0$0MATCHER_FOR_ESCAPE_HTML_$$ = /[\x00\x22\x26\x27\x3c\x3e]/g;

    function $viewbix$sdk$menu$template$standard$main$$($opt_data$$5$$, $opt_sb$$1$$) {
        var $output$$1$$ = $opt_sb$$1$$ || new $goog$string$StringBuffer$$;
        $output$$1$$.append('<ul class="', $soy$$0$0escapeHtml$$($opt_data$$5$$.$menuClassName$), '">');
        for (var $appList6$$ = $opt_data$$5$$.$apps$, $appListLen6$$ = $appList6$$.length, $appIndex6$$ = 0; $appIndex6$$ < $appListLen6$$; $appIndex6$$++) {
            var $appData6$$ = $appList6$$[$appIndex6$$];
            $output$$1$$.append('<li data-app-id="', $soy$$0$0escapeHtml$$($appData6$$.id), '"><img src="', $soy$$0$0escapeHtml$$($appData6$$.icon), '" /><div class="vbx-menu-label">', $soy$$0$0escapeHtml$$($appData6$$.label), "</div></li>");
        }
        $output$$1$$.append("</ul>");
        return $opt_sb$$1$$ ? "" : $output$$1$$.toString();
    }
    ;
    /*
     Portions of this code are from the Dojo Toolkit, received by
     The Closure Library Authors under the BSD license. All other code is
     Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

     The "New" BSD License:

     Copyright (c) 2005-2009, The Dojo Foundation
     All rights reserved.

     Redistribution and use in source and binary forms, with or without
     modification, are permitted provided that the following conditions are met:

     Redistributions of source code must retain the above copyright notice, this
     list of conditions and the following disclaimer.
     Redistributions in binary form must reproduce the above copyright notice,
     this list of conditions and the following disclaimer in the documentation
     and/or other materials provided with the distribution.
     Neither the name of the Dojo Foundation nor the names of its contributors
     may be used to endorse or promote products derived from this software
     without specific prior written permission.

     THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
     ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
     WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
     DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
     FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
     DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
     SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
     CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
     OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
     OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */
    var $goog$dom$query$$ = function () {
        function $query$$7$$($query$$13$$, $root$$20$$) {
            if (!$query$$13$$) {
                return [];
            }
            if ($query$$13$$.constructor == Array) {
                return $query$$13$$;
            }
            if (!$goog$isString$$($query$$13$$)) {
                return [$query$$13$$];
            }
            if ($goog$isString$$($root$$20$$) && ($root$$20$$ = $goog$dom$getElementHelper_$$(document, $root$$20$$), !$root$$20$$)) {
                return [];
            }
            $root$$20$$ = $root$$20$$ || document;
            var $od_r$$9$$ = $root$$20$$.ownerDocument || $root$$20$$.documentElement;
            $caseSensitive$$ = $root$$20$$.contentType && "application/xml" == $root$$20$$.contentType || $goog$userAgent$OPERA$$ && ($root$$20$$.doctype || "[object XMLDocument]" == $od_r$$9$$.toString()) || !!$od_r$$9$$ && ($goog$userAgent$IE$$ ? $od_r$$9$$.xml : $root$$20$$.xmlVersion || $od_r$$9$$.xmlVersion);
            return ($od_r$$9$$ = $getQueryFunc$$($query$$13$$)($root$$20$$)) && $od_r$$9$$.$nozip$ ? $od_r$$9$$ : $_zip$$($od_r$$9$$);
        }

        function $_zip$$($arr$$83$$) {
            if ($arr$$83$$ && $arr$$83$$.$nozip$) {
                return $arr$$83$$;
            }
            var $ret$$13$$ = [];
            if (!$arr$$83$$ || !$arr$$83$$.length) {
                return $ret$$13$$;
            }
            $arr$$83$$[0] && $ret$$13$$.push($arr$$83$$[0]);
            if (2 > $arr$$83$$.length) {
                return $ret$$13$$;
            }
            $_zipIdx$$++;
            if ($goog$userAgent$IE$$ && $caseSensitive$$) {
                var $szidx$$ = $_zipIdx$$ + "";
                $arr$$83$$[0].setAttribute("_zipIdx", $szidx$$);
                for (var $x$$78$$ = 1, $te$$8$$; $te$$8$$ = $arr$$83$$[$x$$78$$]; $x$$78$$++) {
                    $arr$$83$$[$x$$78$$].getAttribute("_zipIdx") != $szidx$$ && $ret$$13$$.push($te$$8$$), $te$$8$$.setAttribute("_zipIdx", $szidx$$);
                }
            } else {
                if ($goog$userAgent$IE$$ && $arr$$83$$.$commentStrip$) {
                    try {
                        for ($x$$78$$ = 1; $te$$8$$ = $arr$$83$$[$x$$78$$]; $x$$78$$++) {
                            $isElement$$($te$$8$$) && $ret$$13$$.push($te$$8$$);
                        }
                    } catch ($e$$69$$) {
                    }
                } else {
                    for ($arr$$83$$[0] && ($arr$$83$$[0]._zipIdx = $_zipIdx$$), $x$$78$$ = 1; $te$$8$$ = $arr$$83$$[$x$$78$$]; $x$$78$$++) {
                        $arr$$83$$[$x$$78$$]._zipIdx != $_zipIdx$$ && $ret$$13$$.push($te$$8$$), $te$$8$$._zipIdx = $_zipIdx$$;
                    }
                }
            }
            return $ret$$13$$;
        }

        function $_isUnique$$($node$$40$$, $bag$$4$$) {
            if (!$bag$$4$$) {
                return 1;
            }
            var $id$$21$$ = $_nodeUID$$($node$$40$$);
            return $bag$$4$$[$id$$21$$] ? 0 : $bag$$4$$[$id$$21$$] = 1;
        }

        function $getQueryFunc$$($query$$12$$, $opt_forceDOM$$) {
            if ($qsaAvail$$) {
                var $domCached_qcz_qsaCached$$ = $_queryFuncCacheQSA$$[$query$$12$$];
                if ($domCached_qcz_qsaCached$$ && !$opt_forceDOM$$) {
                    return $domCached_qcz_qsaCached$$;
                }
            }
            if ($domCached_qcz_qsaCached$$ = $_queryFuncCacheDOM$$[$query$$12$$]) {
                return $domCached_qcz_qsaCached$$;
            }
            var $domCached_qcz_qsaCached$$ = $query$$12$$.charAt(0), $nospace$$ = -1 == $query$$12$$.indexOf(" ");
            0 <= $query$$12$$.indexOf("#") && $nospace$$ && ($opt_forceDOM$$ = !0);
            if (!$qsaAvail$$ || $opt_forceDOM$$ || -1 != ">~+".indexOf($domCached_qcz_qsaCached$$) || $goog$userAgent$IE$$ && -1 != $query$$12$$.indexOf(":") || $cssCaseBug$$ && 0 <= $query$$12$$.indexOf(".") || -1 != $query$$12$$.indexOf(":contains") || -1 != $query$$12$$.indexOf("|=")) {
                var $parts$$14$$ = $query$$12$$.split(/\s*,\s*/);
                return $_queryFuncCacheDOM$$[$query$$12$$] = 2 > $parts$$14$$.length ? $getStepQueryFunc$$($query$$12$$) : function ($root$$19$$) {
                    for (var $pindex$$ = 0, $ret$$12$$ = [], $tp$$; $tp$$ = $parts$$14$$[$pindex$$++];) {
                        $ret$$12$$ = $ret$$12$$.concat($getStepQueryFunc$$($tp$$)($root$$19$$));
                    }
                    return $ret$$12$$;
                };
            }
            var $tq$$ = 0 <= ">~+".indexOf($query$$12$$.charAt($query$$12$$.length - 1)) ? $query$$12$$ + " *" : $query$$12$$;
            return $_queryFuncCacheQSA$$[$query$$12$$] = function $$_queryFuncCacheQSA$$$$query$$12$$$($root$$18$$) {
                try {
                    if (9 != $root$$18$$.nodeType && !$nospace$$) {
                        throw "";
                    }
                    var $r$$8$$ = $root$$18$$.querySelectorAll($tq$$);
                    $goog$userAgent$IE$$ ? $r$$8$$.$commentStrip$ = !0 : $r$$8$$.$nozip$ = !0;
                    return $r$$8$$;
                } catch ($e$$68$$) {
                    return $getQueryFunc$$($query$$12$$, !0)($root$$18$$);
                }
            };
        }

        function $getStepQueryFunc$$($query$$11$$) {
            var $qparts$$ = $getQueryParts$$($goog$string$trim$$($query$$11$$));
            if (1 == $qparts$$.length) {
                var $tef$$ = $getElementsFunc$$($qparts$$[0]);
                return function ($r$$7_root$$16$$) {
                    if ($r$$7_root$$16$$ = $tef$$($r$$7_root$$16$$, [])) {
                        $r$$7_root$$16$$.$nozip$ = !0;
                    }
                    return $r$$7_root$$16$$;
                };
            }
            return function ($candidates$$inline_421_root$$17$$) {
                $candidates$$inline_421_root$$17$$ = $getArr$$($candidates$$inline_421_root$$17$$);
                for (var $qp$$inline_422_te$$inline_424$$, $gef$$inline_429_x$$inline_423$$, $qpl$$inline_425$$ = $qparts$$.length, $bag$$inline_426$$, $ret$$inline_427$$, $i$$inline_428$$ = 0; $i$$inline_428$$ < $qpl$$inline_425$$; $i$$inline_428$$++) {
                    $ret$$inline_427$$ = [];
                    $qp$$inline_422_te$$inline_424$$ = $qparts$$[$i$$inline_428$$];
                    $gef$$inline_429_x$$inline_423$$ = $candidates$$inline_421_root$$17$$.length - 1;
                    0 < $gef$$inline_429_x$$inline_423$$ && ($bag$$inline_426$$ = {}, $ret$$inline_427$$.$nozip$ = !0);
                    $gef$$inline_429_x$$inline_423$$ = $getElementsFunc$$($qp$$inline_422_te$$inline_424$$);
                    for (var $j$$inline_430$$ = 0; $qp$$inline_422_te$$inline_424$$ = $candidates$$inline_421_root$$17$$[$j$$inline_430$$]; $j$$inline_430$$++) {
                        $gef$$inline_429_x$$inline_423$$($qp$$inline_422_te$$inline_424$$, $ret$$inline_427$$, $bag$$inline_426$$);
                    }
                    if (!$ret$$inline_427$$.length) {
                        break;
                    }
                    $candidates$$inline_421_root$$17$$ = $ret$$inline_427$$;
                }
                return $ret$$inline_427$$;
            };
        }

        function $getElementsFunc$$($query$$10$$) {
            var $retFunc$$ = $_getElementsFuncCache$$[$query$$10$$.$query$];
            if ($retFunc$$) {
                return $retFunc$$;
            }
            var $io_oper$$ = $query$$10$$.$infixOper$, $io_oper$$ = $io_oper$$ ? $io_oper$$.$oper$ : "", $filterFunc$$3$$ = $getSimpleFilterFunc$$($query$$10$$, {$el$: 1}), $wildcardTag$$ = "*" == $query$$10$$.tag, $ecs_skipFilters$$ = document.getElementsByClassName;
            if ($io_oper$$) {
                $ecs_skipFilters$$ = {$el$: 1}, $wildcardTag$$ && ($ecs_skipFilters$$.tag = 1), $filterFunc$$3$$ = $getSimpleFilterFunc$$($query$$10$$, $ecs_skipFilters$$), "+" == $io_oper$$ ? $retFunc$$ = $nextSiblingIterator$$($filterFunc$$3$$) : "~" == $io_oper$$ ? $retFunc$$ = $nextSiblingsIterator$$($filterFunc$$3$$) : ">" == $io_oper$$ && ($retFunc$$ = $_childElements$$($filterFunc$$3$$));
            } else {
                if ($query$$10$$.id) {
                    $filterFunc$$3$$ = !$query$$10$$.$loops$ && $wildcardTag$$ ? $goog$functions$TRUE$$ : $getSimpleFilterFunc$$($query$$10$$, {
                        $el$: 1,
                        id: 1
                    }), $retFunc$$ = function $$retFunc$$$($root$$11$$, $arr$$79$$) {
                        var $te$$3$$ = $goog$dom$getDomHelper$$($root$$11$$).$getElement$($query$$10$$.id), $JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_417$$;
                        if (($JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_417$$ = $te$$3$$ && $filterFunc$$3$$($te$$3$$)) && !($JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_417$$ = 9 == $root$$11$$.nodeType)) {
                            for ($JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_417$$ = $te$$3$$.parentNode; $JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_417$$ && $JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_417$$ != $root$$11$$;) {
                                $JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_417$$ = $JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_417$$.parentNode;
                            }
                            $JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_417$$ = !!$JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_417$$;
                        }
                        if ($JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_417$$) {
                            return $getArr$$($te$$3$$, $arr$$79$$);
                        }
                    };
                } else {
                    if ($ecs_skipFilters$$ && /\{\s*\[native code\]\s*\}/.test(String($ecs_skipFilters$$)) && $query$$10$$.$classes$.length && !$cssCaseBug$$) {
                        var $filterFunc$$3$$ = $getSimpleFilterFunc$$($query$$10$$, {
                            $el$: 1,
                            $classes$: 1,
                            id: 1
                        }), $classesString$$ = $query$$10$$.$classes$.join(" "), $retFunc$$ = function $$retFunc$$$($root$$12$$, $arr$$80$$) {
                            for (var $ret$$8$$ = $getArr$$(0, $arr$$80$$), $te$$4$$, $x$$74$$ = 0, $tret$$2$$ = $root$$12$$.getElementsByClassName($classesString$$); $te$$4$$ = $tret$$2$$[$x$$74$$++];) {
                                $filterFunc$$3$$($te$$4$$, $root$$12$$) && $ret$$8$$.push($te$$4$$);
                            }
                            return $ret$$8$$;
                        }
                    } else {
                        $wildcardTag$$ || $query$$10$$.$loops$ ? ($filterFunc$$3$$ = $getSimpleFilterFunc$$($query$$10$$, {
                            $el$: 1,
                            tag: 1,
                            id: 1
                        }), $retFunc$$ = function $$retFunc$$$($root$$14$$, $arr$$82$$) {
                            for (var $ret$$10$$ = $getArr$$(0, $arr$$82$$), $te$$6$$, $x$$76$$ = 0, $tret$$4$$ = $root$$14$$.getElementsByTagName($query$$10$$.$getTag$()); $te$$6$$ = $tret$$4$$[$x$$76$$++];) {
                                $filterFunc$$3$$($te$$6$$, $root$$14$$) && $ret$$10$$.push($te$$6$$);
                            }
                            return $ret$$10$$;
                        }) : $retFunc$$ = function $$retFunc$$$($root$$13$$, $arr$$81$$) {
                            for (var $ret$$9$$ = $getArr$$(0, $arr$$81$$), $te$$5$$, $x$$75$$ = 0, $tret$$3$$ = $root$$13$$.getElementsByTagName($query$$10$$.$getTag$()); $te$$5$$ = $tret$$3$$[$x$$75$$++];) {
                                $ret$$9$$.push($te$$5$$);
                            }
                            return $ret$$9$$;
                        };
                    }
                }
            }
            return $_getElementsFuncCache$$[$query$$10$$.$query$] = $retFunc$$;
        }

        function $_childElements$$($filterFunc$$2$$) {
            $filterFunc$$2$$ = $filterFunc$$2$$ || $goog$functions$TRUE$$;
            return function ($root$$9_te$$2$$, $ret$$7$$, $bag$$2$$) {
                for (var $x$$73$$ = 0, $tret$$1$$ = $root$$9_te$$2$$[$childNodesName$$]; $root$$9_te$$2$$ = $tret$$1$$[$x$$73$$++];) {
                    $simpleNodeTest$$($root$$9_te$$2$$) && (!$bag$$2$$ || $_isUnique$$($root$$9_te$$2$$, $bag$$2$$)) && $filterFunc$$2$$($root$$9_te$$2$$, $x$$73$$) && $ret$$7$$.push($root$$9_te$$2$$);
                }
                return $ret$$7$$;
            };
        }

        function $nextSiblingsIterator$$($filterFunc$$1$$) {
            return function ($root$$8_te$$1$$, $ret$$6$$, $bag$$1$$) {
                for ($root$$8_te$$1$$ = $root$$8_te$$1$$[$nSibling$$]; $root$$8_te$$1$$;) {
                    if ($simpleNodeTest$$($root$$8_te$$1$$)) {
                        if ($bag$$1$$ && !$_isUnique$$($root$$8_te$$1$$, $bag$$1$$)) {
                            break;
                        }
                        $filterFunc$$1$$($root$$8_te$$1$$) && $ret$$6$$.push($root$$8_te$$1$$);
                    }
                    $root$$8_te$$1$$ = $root$$8_te$$1$$[$nSibling$$];
                }
                return $ret$$6$$;
            };
        }

        function $nextSiblingIterator$$($filterFunc$$) {
            return function ($node$$36$$, $ret$$5$$, $bag$$) {
                for (; $node$$36$$ = $node$$36$$[$nSibling$$];) {
                    if (!$noNextElementSibling$$ || $isElement$$($node$$36$$)) {
                        $bag$$ && !$_isUnique$$($node$$36$$, $bag$$) || !$filterFunc$$($node$$36$$) || $ret$$5$$.push($node$$36$$);
                        break;
                    }
                }
                return $ret$$5$$;
            };
        }

        function $getSimpleFilterFunc$$($query$$9$$, $ignores$$1$$) {
            if (!$query$$9$$) {
                return $goog$functions$TRUE$$;
            }
            $ignores$$1$$ = $ignores$$1$$ || {};
            var $ff$$ = null;
            $ignores$$1$$.$el$ || ($ff$$ = $agree$$($ff$$, $isElement$$));
            $ignores$$1$$.tag || "*" != $query$$9$$.tag && ($ff$$ = $agree$$($ff$$, function ($elem$$31$$) {
                return $elem$$31$$ && $elem$$31$$.tagName == $query$$9$$.$getTag$();
            }));
            $ignores$$1$$.$classes$ || $goog$array$forEach$$($query$$9$$.$classes$, function ($cname$$, $idx$$1$$) {
                var $re$$3$$ = new RegExp("(?:^|\\s)" + $cname$$ + "(?:\\s|$)");
                $ff$$ = $agree$$($ff$$, function ($elem$$32$$) {
                    return $re$$3$$.test($elem$$32$$.className);
                });
                $ff$$.count = $idx$$1$$;
            });
            $ignores$$1$$.$pseudos$ || $goog$array$forEach$$($query$$9$$.$pseudos$, function ($pseudo$$) {
                var $pn$$ = $pseudo$$.name;
                $pseudos$$[$pn$$] && ($ff$$ = $agree$$($ff$$, $pseudos$$[$pn$$]($pn$$, $pseudo$$.value)));
            });
            $ignores$$1$$.$attrs$ || $goog$array$forEach$$($query$$9$$.$attrs$, function ($attr$$7$$) {
                var $matcher$$1$$, $a$$38$$ = $attr$$7$$.attr;
                $attr$$7$$.type && $attrs$$[$attr$$7$$.type] ? $matcher$$1$$ = $attrs$$[$attr$$7$$.type]($a$$38$$, $attr$$7$$.$matchFor$) : $a$$38$$.length && ($matcher$$1$$ = $defaultGetter$$($a$$38$$));
                $matcher$$1$$ && ($ff$$ = $agree$$($ff$$, $matcher$$1$$));
            });
            $ignores$$1$$.id || $query$$9$$.id && ($ff$$ = $agree$$($ff$$, function ($elem$$33$$) {
                return !!$elem$$33$$ && $elem$$33$$.id == $query$$9$$.id;
            }));
            $ff$$ || "default" in $ignores$$1$$ || ($ff$$ = $goog$functions$TRUE$$);
            return $ff$$;
        }

        function $isOdd$$($elem$$22$$) {
            return $getNodeIndex$$($elem$$22$$) % 2;
        }

        function $isEven$$($elem$$21$$) {
            return !($getNodeIndex$$($elem$$21$$) % 2);
        }

        function $getNodeIndex$$($node$$34$$) {
            var $root$$7_te$$ = $node$$34$$.parentNode, $i$$155$$ = 0, $l$$28_tret$$ = $root$$7_te$$[$childNodesName$$], $ci$$ = $node$$34$$._i || -1, $cl$$ = $root$$7_te$$._l || -1;
            if (!$l$$28_tret$$) {
                return -1;
            }
            $l$$28_tret$$ = $l$$28_tret$$.length;
            if ($cl$$ == $l$$28_tret$$ && 0 <= $ci$$ && 0 <= $cl$$) {
                return $ci$$;
            }
            $root$$7_te$$._l = $l$$28_tret$$;
            $ci$$ = -1;
            for ($root$$7_te$$ = $root$$7_te$$.firstElementChild || $root$$7_te$$.firstChild; $root$$7_te$$; $root$$7_te$$ = $root$$7_te$$[$nSibling$$]) {
                $simpleNodeTest$$($root$$7_te$$) && ($root$$7_te$$._i = ++$i$$155$$, $node$$34$$ === $root$$7_te$$ && ($ci$$ = $i$$155$$));
            }
            return $ci$$;
        }

        function $_lookRight$$($node$$33$$) {
            for (; $node$$33$$ = $node$$33$$[$nSibling$$];) {
                if ($simpleNodeTest$$($node$$33$$)) {
                    return !1;
                }
            }
            return !0;
        }

        function $_lookLeft$$($node$$32$$) {
            for (; $node$$32$$ = $node$$32$$[$pSibling$$];) {
                if ($simpleNodeTest$$($node$$32$$)) {
                    return !1;
                }
            }
            return !0;
        }

        function $getAttr$$($elem$$14$$, $attr$$) {
            return $elem$$14$$ ? "class" == $attr$$ ? $elem$$14$$.className || "" : "for" == $attr$$ ? $elem$$14$$.htmlFor || "" : "style" == $attr$$ ? $elem$$14$$.style.cssText || "" : ($caseSensitive$$ ? $elem$$14$$.getAttribute($attr$$) : $elem$$14$$.getAttribute($attr$$, 2)) || "" : "";
        }

        function $isElement$$($n$$16$$) {
            return 1 == $n$$16$$.nodeType;
        }

        function $agree$$($first$$5$$, $second$$2$$) {
            return $first$$5$$ ? $second$$2$$ ? function () {
                return $first$$5$$.apply(window, arguments) && $second$$2$$.apply(window, arguments);
            } : $first$$5$$ : $second$$2$$;
        }

        function $getQueryParts$$($query$$8$$) {
            function $endAll$$() {
                0 <= $inId$$ && ($currentPart$$.id = $ts$$($inId$$, $x$$71$$).replace(/\\/g, ""), $inId$$ = -1);
                if (0 <= $inTag$$) {
                    var $tv$$inline_411$$ = $inTag$$ == $x$$71$$ ? null : $ts$$($inTag$$, $x$$71$$);
                    0 > ">~+".indexOf($tv$$inline_411$$) ? $currentPart$$.tag = $tv$$inline_411$$ : $currentPart$$.$oper$ = $tv$$inline_411$$;
                    $inTag$$ = -1;
                }
                0 <= $inClass$$ && ($currentPart$$.$classes$.push($ts$$($inClass$$ + 1, $x$$71$$).replace(/\\/g, "")), $inClass$$ = -1);
            }

            function $ts$$($s$$35$$, $e$$67$$) {
                return $goog$string$trim$$($query$$8$$.slice($s$$35$$, $e$$67$$));
            }

            $query$$8$$ = 0 <= ">~+".indexOf($query$$8$$.slice(-1)) ? $query$$8$$ + " * " : $query$$8$$ + " ";
            for (var $queryParts$$ = [], $cmf_inBrackets$$ = -1, $inParens$$ = -1, $addToCc_inMatchFor$$ = -1, $inPseudo$$ = -1, $inClass$$ = -1, $inId$$ = -1, $inTag$$ = -1, $lc$$ = "", $cc$$3$$ = "", $pStart$$, $x$$71$$ = 0, $ql$$ = $query$$8$$.length, $currentPart$$ = null, $cp$$ = null; $lc$$ = $cc$$3$$, $cc$$3$$ = $query$$8$$.charAt($x$$71$$), $x$$71$$ < $ql$$; $x$$71$$++) {
                "\\" != $lc$$ && ($currentPart$$ || ($pStart$$ = $x$$71$$, $currentPart$$ = {
                    $query$: null,
                    $pseudos$: [],
                    $attrs$: [],
                    $classes$: [],
                    tag: null,
                    $oper$: null,
                    id: null,
                    $getTag$: function $$currentPart$$$$getTag$$() {
                        return $caseSensitive$$ ? this.$otag$ : this.tag;
                    }
                }, $inTag$$ = $x$$71$$), 0 <= $cmf_inBrackets$$ ? "]" == $cc$$3$$ ? ($cp$$.attr ? $cp$$.$matchFor$ = $ts$$($addToCc_inMatchFor$$ || $cmf_inBrackets$$ + 1, $x$$71$$) : $cp$$.attr = $ts$$($cmf_inBrackets$$ + 1, $x$$71$$), !($cmf_inBrackets$$ = $cp$$.$matchFor$) || '"' != $cmf_inBrackets$$.charAt(0) && "'" != $cmf_inBrackets$$.charAt(0) || ($cp$$.$matchFor$ = $cmf_inBrackets$$.slice(1, -1)), $currentPart$$.$attrs$.push($cp$$), $cp$$ = null, $cmf_inBrackets$$ = $addToCc_inMatchFor$$ = -1) : "=" ==
                $cc$$3$$ && ($addToCc_inMatchFor$$ = 0 <= "|~^$*".indexOf($lc$$) ? $lc$$ : "", $cp$$.type = $addToCc_inMatchFor$$ + $cc$$3$$, $cp$$.attr = $ts$$($cmf_inBrackets$$ + 1, $x$$71$$ - $addToCc_inMatchFor$$.length), $addToCc_inMatchFor$$ = $x$$71$$ + 1) : 0 <= $inParens$$ ? ")" == $cc$$3$$ && (0 <= $inPseudo$$ && ($cp$$.value = $ts$$($inParens$$ + 1, $x$$71$$)), $inPseudo$$ = $inParens$$ = -1) : "#" == $cc$$3$$ ? ($endAll$$(), $inId$$ = $x$$71$$ + 1) : "." == $cc$$3$$ ? ($endAll$$(), $inClass$$ =
                    $x$$71$$) : ":" == $cc$$3$$ ? ($endAll$$(), $inPseudo$$ = $x$$71$$) : "[" == $cc$$3$$ ? ($endAll$$(), $cmf_inBrackets$$ = $x$$71$$, $cp$$ = {}) : "(" == $cc$$3$$ ? (0 <= $inPseudo$$ && ($cp$$ = {
                    name: $ts$$($inPseudo$$ + 1, $x$$71$$),
                    value: null
                }, $currentPart$$.$pseudos$.push($cp$$)), $inParens$$ = $x$$71$$) : " " == $cc$$3$$ && $lc$$ != $cc$$3$$ && ($endAll$$(), 0 <= $inPseudo$$ && $currentPart$$.$pseudos$.push({name: $ts$$($inPseudo$$ + 1, $x$$71$$)}), $currentPart$$.$loops$ = $currentPart$$.$pseudos$.length ||
                    $currentPart$$.$attrs$.length || $currentPart$$.$classes$.length, $currentPart$$.$oquery$ = $currentPart$$.$query$ = $ts$$($pStart$$, $x$$71$$), $currentPart$$.$otag$ = $currentPart$$.tag = $currentPart$$.$oper$ ? null : $currentPart$$.tag || "*", $currentPart$$.tag && ($currentPart$$.tag = $currentPart$$.tag.toUpperCase()), $queryParts$$.length && $queryParts$$[$queryParts$$.length - 1].$oper$ && ($currentPart$$.$infixOper$ = $queryParts$$.pop(), $currentPart$$.$query$ = $currentPart$$.$infixOper$.$query$ +
                    " " + $currentPart$$.$query$), $queryParts$$.push($currentPart$$), $currentPart$$ = null));
            }
            return $queryParts$$;
        }

        function $getArr$$($i$$154$$, $opt_arr$$) {
            var $r$$6$$ = $opt_arr$$ || [];
            $i$$154$$ && $r$$6$$.push($i$$154$$);
            return $r$$6$$;
        }

        var $cssCaseBug$$ = $goog$userAgent$WEBKIT$$ && "BackCompat" == document.compatMode, $childNodesName$$ = document.firstChild.children ? "children" : "childNodes", $caseSensitive$$ = !1, $attrs$$ = {
            "*=": function ($attr$$1$$, $value$$162$$) {
                return function ($elem$$15$$) {
                    return 0 <= $getAttr$$($elem$$15$$, $attr$$1$$).indexOf($value$$162$$);
                };
            }, "^=": function ($attr$$2$$, $value$$163$$) {
                return function ($elem$$16$$) {
                    return 0 == $getAttr$$($elem$$16$$, $attr$$2$$).indexOf($value$$163$$);
                };
            }, "$=": function ($attr$$3$$, $value$$164$$) {
                return function ($ea_elem$$17$$) {
                    $ea_elem$$17$$ = " " + $getAttr$$($ea_elem$$17$$, $attr$$3$$);
                    return $ea_elem$$17$$.lastIndexOf($value$$164$$) == $ea_elem$$17$$.length - $value$$164$$.length;
                };
            }, "~=": function ($attr$$4$$, $value$$165$$) {
                var $tval$$1$$ = " " + $value$$165$$ + " ";
                return function ($elem$$18$$) {
                    return 0 <= (" " + $getAttr$$($elem$$18$$, $attr$$4$$) + " ").indexOf($tval$$1$$);
                };
            }, "|=": function ($attr$$5$$, $value$$166$$) {
                $value$$166$$ = " " + $value$$166$$;
                return function ($ea$$2_elem$$19$$) {
                    $ea$$2_elem$$19$$ = " " + $getAttr$$($ea$$2_elem$$19$$, $attr$$5$$);
                    return $ea$$2_elem$$19$$ == $value$$166$$ || 0 == $ea$$2_elem$$19$$.indexOf($value$$166$$ + "-");
                };
            }, "=": function ($attr$$6$$, $value$$167$$) {
                return function ($elem$$20$$) {
                    return $getAttr$$($elem$$20$$, $attr$$6$$) == $value$$167$$;
                };
            }
        }, $noNextElementSibling$$ = "undefined" == typeof document.firstChild.nextElementSibling, $nSibling$$ = $noNextElementSibling$$ ? "nextSibling" : "nextElementSibling", $pSibling$$ = $noNextElementSibling$$ ? "previousSibling" : "previousElementSibling", $simpleNodeTest$$ = $noNextElementSibling$$ ? $isElement$$ : $goog$functions$TRUE$$, $pseudos$$ = {
            checked: function () {
                return function ($elem$$23$$) {
                    return $elem$$23$$.checked || $elem$$23$$.attributes.checked;
                };
            }, "first-child": function () {
                return $_lookLeft$$;
            }, "last-child": function () {
                return $_lookRight$$;
            }, "only-child": function () {
                return function ($node$$35$$) {
                    return $_lookLeft$$($node$$35$$) && $_lookRight$$($node$$35$$) ? !0 : !1;
                };
            }, empty: function () {
                return function ($elem$$24_x$$72$$) {
                    var $cn$$ = $elem$$24_x$$72$$.childNodes;
                    for ($elem$$24_x$$72$$ = $elem$$24_x$$72$$.childNodes.length - 1; 0 <= $elem$$24_x$$72$$; $elem$$24_x$$72$$--) {
                        var $nt$$ = $cn$$[$elem$$24_x$$72$$].nodeType;
                        if (1 === $nt$$ || 3 == $nt$$) {
                            return !1;
                        }
                    }
                    return !0;
                };
            }, contains: function ($name$$77$$, $condition$$5$$) {
                var $cz$$ = $condition$$5$$.charAt(0);
                if ('"' == $cz$$ || "'" == $cz$$) {
                    $condition$$5$$ = $condition$$5$$.slice(1, -1);
                }
                return function ($elem$$25$$) {
                    return 0 <= $elem$$25$$.innerHTML.indexOf($condition$$5$$);
                };
            }, not: function ($name$$78$$, $condition$$6$$) {
                var $p$$4$$ = $getQueryParts$$($condition$$6$$)[0], $ignores$$ = {$el$: 1};
                "*" != $p$$4$$.tag && ($ignores$$.tag = 1);
                $p$$4$$.$classes$.length || ($ignores$$.$classes$ = 1);
                var $ntf$$ = $getSimpleFilterFunc$$($p$$4$$, $ignores$$);
                return function ($elem$$26$$) {
                    return !$ntf$$($elem$$26$$);
                };
            }, "nth-child": function ($name$$79$$, $condition$$7$$) {
                if ("odd" == $condition$$7$$) {
                    return $isOdd$$;
                }
                if ("even" == $condition$$7$$) {
                    return $isEven$$;
                }
                if (-1 != $condition$$7$$.indexOf("n")) {
                    var $tparts$$ = $condition$$7$$.split("n", 2), $pred$$ = $tparts$$[0] ? "-" == $tparts$$[0] ? -1 : parseInt($tparts$$[0], 10) : 1, $idx$$ = $tparts$$[1] ? parseInt($tparts$$[1], 10) : 0, $lb$$ = 0, $ub$$ = -1;
                    0 < $pred$$ ? 0 > $idx$$ ? $idx$$ = $idx$$ % $pred$$ && $pred$$ + $idx$$ % $pred$$ : 0 < $idx$$ && ($idx$$ >= $pred$$ && ($lb$$ = $idx$$ - $idx$$ % $pred$$), $idx$$ %= $pred$$) : 0 > $pred$$ && ($pred$$ *= -1, 0 < $idx$$ && ($ub$$ = $idx$$, $idx$$ %= $pred$$));
                    if (0 < $pred$$) {
                        return function ($elem$$27_i$$156$$) {
                            $elem$$27_i$$156$$ = $getNodeIndex$$($elem$$27_i$$156$$);
                            return $elem$$27_i$$156$$ >= $lb$$ && (0 > $ub$$ || $elem$$27_i$$156$$ <= $ub$$) && $elem$$27_i$$156$$ % $pred$$ == $idx$$;
                        };
                    }
                    $condition$$7$$ = $idx$$;
                }
                var $ncount$$ = parseInt($condition$$7$$, 10);
                return function ($elem$$28$$) {
                    return $getNodeIndex$$($elem$$28$$) == $ncount$$;
                };
            }
        }, $defaultGetter$$ = $goog$userAgent$IE$$ ? function ($cond$$) {
            var $clc$$ = $cond$$.toLowerCase();
            "class" == $clc$$ && ($cond$$ = "className");
            return function ($elem$$29$$) {
                return $caseSensitive$$ ? $elem$$29$$.getAttribute($cond$$) : $elem$$29$$[$cond$$] || $elem$$29$$[$clc$$];
            };
        } : function ($cond$$1$$) {
            return function ($elem$$30$$) {
                return $elem$$30$$ && $elem$$30$$.getAttribute && $elem$$30$$.hasAttribute($cond$$1$$);
            };
        }, $_getElementsFuncCache$$ = {}, $_queryFuncCacheDOM$$ = {}, $_queryFuncCacheQSA$$ = {}, $qsaAvail$$ = !!document.querySelectorAll && (!$goog$userAgent$WEBKIT$$ || $goog$userAgent$isVersionOrHigher$$("526")), $_zipIdx$$ = 0, $_nodeUID$$ = $goog$userAgent$IE$$ ? function ($node$$38$$) {
            return $caseSensitive$$ ? $node$$38$$.getAttribute("_uid") || $node$$38$$.setAttribute("_uid", ++$_zipIdx$$) || $_zipIdx$$ : $node$$38$$.uniqueID;
        } : function ($node$$39$$) {
            return $node$$39$$._uid || ($node$$39$$._uid = ++$_zipIdx$$);
        };
        $query$$7$$.$pseudos$ = $pseudos$$;
        return $query$$7$$;
    }();
    $goog$exportPath_$$("goog.dom.query", $goog$dom$query$$, void 0);
    $goog$exportPath_$$("goog.dom.query.pseudos", $goog$dom$query$$.$pseudos$, void 0);
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
     */
    function $goog$async$Deferred$$($opt_onCancelFunction$$, $opt_defaultScope$$) {
        this.$sequence_$ = [];
        this.$onCancelFunction_$ = $opt_onCancelFunction$$;
        this.$defaultScope_$ = $opt_defaultScope$$ || null;
        this.$hadError_$ = this.$fired_$ = !1;
        this.$result_$ = void 0;
        this.$silentlyCanceled_$ = this.$blocking_$ = this.$blocked_$ = !1;
        this.$unhandledErrorId_$ = 0;
        this.$parent_$ = null;
        this.$branches_$ = 0;
        this.$constructorStack_$ = null;
        if (Error.captureStackTrace) {
            var $target$$56$$ = {stack: ""};
            Error.captureStackTrace($target$$56$$, $goog$async$Deferred$$);
            "string" == typeof $target$$56$$.stack && (this.$constructorStack_$ = $target$$56$$.stack.replace(/^[^\n]*\n/, ""));
        }
    }

    $JSCompiler_prototypeAlias$$ = $goog$async$Deferred$$.prototype;
    $JSCompiler_prototypeAlias$$.cancel = function $$JSCompiler_prototypeAlias$$$cancel$($opt_deepCancel$$) {
        if (this.$fired_$) {
            this.$result_$ instanceof $goog$async$Deferred$$ && this.$result_$.cancel();
        } else {
            if (this.$parent_$) {
                var $parent$$21$$ = this.$parent_$;
                delete this.$parent_$;
                $opt_deepCancel$$ ? $parent$$21$$.cancel($opt_deepCancel$$) : ($parent$$21$$.$branches_$--, 0 >= $parent$$21$$.$branches_$ && $parent$$21$$.cancel());
            }
            this.$onCancelFunction_$ ? this.$onCancelFunction_$.call(this.$defaultScope_$, this) : this.$silentlyCanceled_$ = !0;
            this.$fired_$ || this.$errback$(new $goog$async$Deferred$CanceledError$$(this));
        }
    };
    $JSCompiler_prototypeAlias$$.$continue_$ = function $$JSCompiler_prototypeAlias$$$$continue_$$($isSuccess$$, $res$$10$$) {
        this.$blocked_$ = !1;
        $JSCompiler_StaticMethods_updateResult_$$(this, $isSuccess$$, $res$$10$$);
    };
    function $JSCompiler_StaticMethods_updateResult_$$($JSCompiler_StaticMethods_updateResult_$self$$, $isSuccess$$1$$, $res$$11$$) {
        $JSCompiler_StaticMethods_updateResult_$self$$.$fired_$ = !0;
        $JSCompiler_StaticMethods_updateResult_$self$$.$result_$ = $res$$11$$;
        $JSCompiler_StaticMethods_updateResult_$self$$.$hadError_$ = !$isSuccess$$1$$;
        $JSCompiler_StaticMethods_fire_$$($JSCompiler_StaticMethods_updateResult_$self$$);
    }

    function $JSCompiler_StaticMethods_check_$$($JSCompiler_StaticMethods_check_$self$$) {
        if ($JSCompiler_StaticMethods_check_$self$$.$fired_$) {
            if (!$JSCompiler_StaticMethods_check_$self$$.$silentlyCanceled_$) {
                throw new $goog$async$Deferred$AlreadyCalledError$$($JSCompiler_StaticMethods_check_$self$$);
            }
            $JSCompiler_StaticMethods_check_$self$$.$silentlyCanceled_$ = !1;
        }
    }

    $JSCompiler_prototypeAlias$$.$callback$ = function $$JSCompiler_prototypeAlias$$$$callback$$($opt_result$$3$$) {
        $JSCompiler_StaticMethods_check_$$(this);
        $JSCompiler_StaticMethods_assertNotDeferred_$$($opt_result$$3$$);
        $JSCompiler_StaticMethods_updateResult_$$(this, !0, $opt_result$$3$$);
    };
    $JSCompiler_prototypeAlias$$.$errback$ = function $$JSCompiler_prototypeAlias$$$$errback$$($opt_result$$4$$) {
        $JSCompiler_StaticMethods_check_$$(this);
        $JSCompiler_StaticMethods_assertNotDeferred_$$($opt_result$$4$$);
        $JSCompiler_StaticMethods_makeStackTraceLong_$$(this, $opt_result$$4$$);
        $JSCompiler_StaticMethods_updateResult_$$(this, !1, $opt_result$$4$$);
    };
    function $JSCompiler_StaticMethods_makeStackTraceLong_$$($JSCompiler_StaticMethods_makeStackTraceLong_$self$$, $error$$4$$) {
        $JSCompiler_StaticMethods_makeStackTraceLong_$self$$.$constructorStack_$ && $goog$isObject$$($error$$4$$) && $error$$4$$.stack && /^[^\n]+(\n   [^\n]+)+/.test($error$$4$$.stack) && ($error$$4$$.stack = $error$$4$$.stack + "\nDEFERRED OPERATION:\n" + $JSCompiler_StaticMethods_makeStackTraceLong_$self$$.$constructorStack_$);
    }

    function $JSCompiler_StaticMethods_assertNotDeferred_$$($obj$$111$$) {
        $goog$asserts$assert$$(!($obj$$111$$ instanceof $goog$async$Deferred$$), "An execution sequence may not be initiated with a blocking Deferred.");
    }

    function $JSCompiler_StaticMethods_addCallbacks$$($JSCompiler_StaticMethods_addCallbacks$self$$, $cb$$6$$, $eb$$1$$, $opt_scope$$10$$) {
        $goog$asserts$assert$$(!$JSCompiler_StaticMethods_addCallbacks$self$$.$blocking_$, "Blocking Deferreds can not be re-used");
        $JSCompiler_StaticMethods_addCallbacks$self$$.$sequence_$.push([$cb$$6$$, $eb$$1$$, $opt_scope$$10$$]);
        $JSCompiler_StaticMethods_addCallbacks$self$$.$fired_$ && $JSCompiler_StaticMethods_fire_$$($JSCompiler_StaticMethods_addCallbacks$self$$);
    }

    $JSCompiler_prototypeAlias$$.then = function $$JSCompiler_prototypeAlias$$$then$($opt_onFulfilled$$4$$, $opt_onRejected$$4$$, $opt_context$$13$$) {
        var $resolve$$9$$, $reject$$9$$, $promise$$8$$ = new $goog$Promise$$(function ($res$$12$$, $rej$$) {
            $resolve$$9$$ = $res$$12$$;
            $reject$$9$$ = $rej$$;
        });
        $JSCompiler_StaticMethods_addCallbacks$$(this, $resolve$$9$$, function ($reason$$7$$) {
            $reason$$7$$ instanceof $goog$async$Deferred$CanceledError$$ ? $promise$$8$$.cancel() : $reject$$9$$($reason$$7$$);
        });
        return $promise$$8$$.then($opt_onFulfilled$$4$$, $opt_onRejected$$4$$, $opt_context$$13$$);
    };
    $goog$Thenable$addImplementation$$($goog$async$Deferred$$);
    function $JSCompiler_StaticMethods_awaitDeferred$$($JSCompiler_StaticMethods_awaitDeferred$self$$, $otherDeferred$$1$$) {
        var $cb$$inline_443$$ = $goog$bind$$($otherDeferred$$1$$.$branch$, $otherDeferred$$1$$);
        $JSCompiler_StaticMethods_addCallbacks$$($JSCompiler_StaticMethods_awaitDeferred$self$$, $cb$$inline_443$$, null, void 0);
    }

    $goog$async$Deferred$$.prototype.$branch$ = function $$goog$async$Deferred$$$$$branch$$($opt_propagateCancel$$) {
        var $d$$6$$ = new $goog$async$Deferred$$;
        $JSCompiler_StaticMethods_addCallbacks$$(this, $d$$6$$.$callback$, $d$$6$$.$errback$, $d$$6$$);
        $opt_propagateCancel$$ && ($d$$6$$.$parent_$ = this, this.$branches_$++);
        return $d$$6$$;
    };
    $goog$async$Deferred$$.prototype.isError = function $$goog$async$Deferred$$$$isError$($res$$13$$) {
        return $res$$13$$ instanceof Error;
    };
    function $JSCompiler_StaticMethods_hasErrback_$$($JSCompiler_StaticMethods_hasErrback_$self$$) {
        return $goog$array$some$$($JSCompiler_StaticMethods_hasErrback_$self$$.$sequence_$, function ($sequenceRow$$) {
            return $goog$isFunction$$($sequenceRow$$[1]);
        });
    }

    function $JSCompiler_StaticMethods_fire_$$($JSCompiler_StaticMethods_fire_$self$$) {
        if ($JSCompiler_StaticMethods_fire_$self$$.$unhandledErrorId_$ && $JSCompiler_StaticMethods_fire_$self$$.$fired_$ && $JSCompiler_StaticMethods_hasErrback_$$($JSCompiler_StaticMethods_fire_$self$$)) {
            var $deferredError$$inline_453_id$$inline_449_res$$14$$ = $JSCompiler_StaticMethods_fire_$self$$.$unhandledErrorId_$, $error$$inline_450_unhandledException$$ = $goog$async$Deferred$errorMap_$$[$deferredError$$inline_453_id$$inline_449_res$$14$$];
            $error$$inline_450_unhandledException$$ && ($goog$global$$.clearTimeout($error$$inline_450_unhandledException$$.$id_$), delete $goog$async$Deferred$errorMap_$$[$deferredError$$inline_453_id$$inline_449_res$$14$$]);
            $JSCompiler_StaticMethods_fire_$self$$.$unhandledErrorId_$ = 0;
        }
        $JSCompiler_StaticMethods_fire_$self$$.$parent_$ && ($JSCompiler_StaticMethods_fire_$self$$.$parent_$.$branches_$--, delete $JSCompiler_StaticMethods_fire_$self$$.$parent_$);
        for (var $deferredError$$inline_453_id$$inline_449_res$$14$$ = $JSCompiler_StaticMethods_fire_$self$$.$result_$, $isNewlyBlocked_onErrback$$ = $error$$inline_450_unhandledException$$ = !1; $JSCompiler_StaticMethods_fire_$self$$.$sequence_$.length && !$JSCompiler_StaticMethods_fire_$self$$.$blocked_$;) {
            var $scope$$5_sequenceEntry$$ = $JSCompiler_StaticMethods_fire_$self$$.$sequence_$.shift(), $callback$$66_f$$50$$ = $scope$$5_sequenceEntry$$[0], $errback$$ = $scope$$5_sequenceEntry$$[1], $scope$$5_sequenceEntry$$ = $scope$$5_sequenceEntry$$[2];
            if ($callback$$66_f$$50$$ = $JSCompiler_StaticMethods_fire_$self$$.$hadError_$ ? $errback$$ : $callback$$66_f$$50$$) {
                try {
                    var $onCallback_ret$$14$$ = $callback$$66_f$$50$$.call($scope$$5_sequenceEntry$$ || $JSCompiler_StaticMethods_fire_$self$$.$defaultScope_$, $deferredError$$inline_453_id$$inline_449_res$$14$$);
                    $goog$isDef$$($onCallback_ret$$14$$) && ($JSCompiler_StaticMethods_fire_$self$$.$hadError_$ = $JSCompiler_StaticMethods_fire_$self$$.$hadError_$ && ($onCallback_ret$$14$$ == $deferredError$$inline_453_id$$inline_449_res$$14$$ || $JSCompiler_StaticMethods_fire_$self$$.isError($onCallback_ret$$14$$)), $JSCompiler_StaticMethods_fire_$self$$.$result_$ = $deferredError$$inline_453_id$$inline_449_res$$14$$ = $onCallback_ret$$14$$);
                    $goog$Thenable$isImplementedBy$$($deferredError$$inline_453_id$$inline_449_res$$14$$) && ($isNewlyBlocked_onErrback$$ = !0, $JSCompiler_StaticMethods_fire_$self$$.$blocked_$ = !0);
                } catch ($ex$$12$$) {
                    $deferredError$$inline_453_id$$inline_449_res$$14$$ = $ex$$12$$, $JSCompiler_StaticMethods_fire_$self$$.$hadError_$ = !0, $JSCompiler_StaticMethods_makeStackTraceLong_$$($JSCompiler_StaticMethods_fire_$self$$, $deferredError$$inline_453_id$$inline_449_res$$14$$), $JSCompiler_StaticMethods_hasErrback_$$($JSCompiler_StaticMethods_fire_$self$$) || ($error$$inline_450_unhandledException$$ = !0);
                }
            }
        }
        $JSCompiler_StaticMethods_fire_$self$$.$result_$ = $deferredError$$inline_453_id$$inline_449_res$$14$$;
        $isNewlyBlocked_onErrback$$ && ($onCallback_ret$$14$$ = $goog$bind$$($JSCompiler_StaticMethods_fire_$self$$.$continue_$, $JSCompiler_StaticMethods_fire_$self$$, !0), $isNewlyBlocked_onErrback$$ = $goog$bind$$($JSCompiler_StaticMethods_fire_$self$$.$continue_$, $JSCompiler_StaticMethods_fire_$self$$, !1), $deferredError$$inline_453_id$$inline_449_res$$14$$ instanceof $goog$async$Deferred$$ ? ($JSCompiler_StaticMethods_addCallbacks$$($deferredError$$inline_453_id$$inline_449_res$$14$$, $onCallback_ret$$14$$,
            $isNewlyBlocked_onErrback$$), $deferredError$$inline_453_id$$inline_449_res$$14$$.$blocking_$ = !0) : $deferredError$$inline_453_id$$inline_449_res$$14$$.then($onCallback_ret$$14$$, $isNewlyBlocked_onErrback$$));
        $error$$inline_450_unhandledException$$ && ($deferredError$$inline_453_id$$inline_449_res$$14$$ = new $goog$async$Deferred$Error_$$($deferredError$$inline_453_id$$inline_449_res$$14$$), $goog$async$Deferred$errorMap_$$[$deferredError$$inline_453_id$$inline_449_res$$14$$.$id_$] = $deferredError$$inline_453_id$$inline_449_res$$14$$, $JSCompiler_StaticMethods_fire_$self$$.$unhandledErrorId_$ = $deferredError$$inline_453_id$$inline_449_res$$14$$.$id_$);
    }

    function $goog$async$Deferred$AlreadyCalledError$$($deferred$$2$$) {
        $goog$debug$Error$$.call(this);
        this.deferred = $deferred$$2$$;
    }

    $goog$inherits$$($goog$async$Deferred$AlreadyCalledError$$, $goog$debug$Error$$);
    $goog$async$Deferred$AlreadyCalledError$$.prototype.message = "Deferred has already fired";
    $goog$async$Deferred$AlreadyCalledError$$.prototype.name = "AlreadyCalledError";
    function $goog$async$Deferred$CanceledError$$($deferred$$3$$) {
        $goog$debug$Error$$.call(this);
        this.deferred = $deferred$$3$$;
    }

    $goog$inherits$$($goog$async$Deferred$CanceledError$$, $goog$debug$Error$$);
    $goog$async$Deferred$CanceledError$$.prototype.message = "Deferred was canceled";
    $goog$async$Deferred$CanceledError$$.prototype.name = "CanceledError";
    function $goog$async$Deferred$Error_$$($error$$5$$) {
        this.$id_$ = $goog$global$$.setTimeout($goog$bind$$(this.$throwError$, this), 0);
        this.$error_$ = $error$$5$$;
    }

    $goog$async$Deferred$Error_$$.prototype.$throwError$ = function $$goog$async$Deferred$Error_$$$$$throwError$$() {
        $goog$asserts$assert$$($goog$async$Deferred$errorMap_$$[this.$id_$], "Cannot throw an error that is not scheduled.");
        delete $goog$async$Deferred$errorMap_$$[this.$id_$];
        throw this.$error_$;
    };
    var $goog$async$Deferred$errorMap_$$ = {};

    function $goog$net$xpc$DirectTransport$$($channel$$6$$, $opt_domHelper$$12$$) {
        $goog$net$xpc$Transport$$.call(this, $opt_domHelper$$12$$);
        this.$channel_$ = $channel$$6$$;
        this.$eventHandler_$ = new $goog$events$EventHandler$$(this);
        $JSCompiler_StaticMethods_addOnDisposeCallback$$(this, $goog$partial$$($goog$dispose$$, this.$eventHandler_$));
        this.$maybeAttemptToConnectTimer_$ = new $goog$Timer$$(100, this.$getWindow$());
        $JSCompiler_StaticMethods_addOnDisposeCallback$$(this, $goog$partial$$($goog$dispose$$, this.$maybeAttemptToConnectTimer_$));
        this.$setupAckReceived_$ = new $goog$async$Deferred$$;
        this.$setupAckSent_$ = new $goog$async$Deferred$$;
        this.$connected_$ = new $goog$async$Deferred$$;
        this.$endpointId_$ = $goog$net$xpc$getRandomString$$(10);
        this.$peerEndpointId_$ = null;
        this.$asyncSendsMap_$ = {};
        this.$originalChannelName_$ = this.$channel_$.name;
        $JSCompiler_StaticMethods_updateChannelNameAndCatalog$$(this.$channel_$, this.$channel_$.name + "_" + $JSCompiler_StaticMethods_getRole$$(this.$channel_$));
        this.$initialized_$ = !1;
        $JSCompiler_StaticMethods_awaitDeferred$$(this.$connected_$, this.$setupAckReceived_$);
        $JSCompiler_StaticMethods_awaitDeferred$$(this.$connected_$, this.$setupAckSent_$);
        $JSCompiler_StaticMethods_addCallbacks$$(this.$connected_$, this.$notifyConnected_$, null, this);
        this.$connected_$.$callback$(!0);
        this.$eventHandler_$.$listen$(this.$maybeAttemptToConnectTimer_$, $goog$Timer$TICK$$, this.$maybeAttemptToConnect_$);
        $goog$log$info$$("DirectTransport created. role=" + $JSCompiler_StaticMethods_getRole$$(this.$channel_$));
    }

    $goog$inherits$$($goog$net$xpc$DirectTransport$$, $goog$net$xpc$Transport$$);
    var $goog$net$xpc$DirectTransport$activeCount_$$ = {};

    function $goog$net$xpc$DirectTransport$messageReceivedHandler_$$($channelName$$2_literal$$) {
        var $msg$$22_payload$$16$$ = new $goog$net$xpc$DirectTransport$Message_$$($channelName$$2_literal$$.channelName, $channelName$$2_literal$$.service, $channelName$$2_literal$$.payload);
        $channelName$$2_literal$$ = $msg$$22_payload$$16$$.$channelName$;
        var $service$$9$$ = $msg$$22_payload$$16$$.$service$, $msg$$22_payload$$16$$ = $msg$$22_payload$$16$$.$payload$;
        $goog$log$fine$$($goog$net$xpc$logger$$, "messageReceived: channel=" + $channelName$$2_literal$$ + ", service=" + $service$$9$$ + ", payload=" + $msg$$22_payload$$16$$);
        var $channel$$7_transportMessageType$$ = $goog$net$xpc$channels$$[$channelName$$2_literal$$];
        if ($channel$$7_transportMessageType$$) {
            return $channel$$7_transportMessageType$$.$xpcDeliver$($service$$9$$, $msg$$22_payload$$16$$), !0;
        }
        var $channel$$7_transportMessageType$$ = $goog$net$xpc$DirectTransport$parseTransportPayload_$$($msg$$22_payload$$16$$)[0], $staleChannelName$$;
        for ($staleChannelName$$ in $goog$net$xpc$channels$$) {
            var $staleChannel$$ = $goog$net$xpc$channels$$[$staleChannelName$$];
            if (1 == $JSCompiler_StaticMethods_getRole$$($staleChannel$$) && !$staleChannel$$.$isConnected$() && "tp" == $service$$9$$ && "SETUP" == $channel$$7_transportMessageType$$) {
                return $JSCompiler_StaticMethods_updateChannelNameAndCatalog$$($staleChannel$$, $channelName$$2_literal$$), $staleChannel$$.$xpcDeliver$($service$$9$$, $msg$$22_payload$$16$$), !0;
            }
        }
        $goog$log$info$$("channel name mismatch; message ignored.");
        return !1;
    }

    $JSCompiler_prototypeAlias$$ = $goog$net$xpc$DirectTransport$$.prototype;
    $JSCompiler_prototypeAlias$$.$transportType$ = 7;
    $JSCompiler_prototypeAlias$$.$transportServiceHandler$ = function $$JSCompiler_prototypeAlias$$$$transportServiceHandler$$($payload$$17_transportParts$$) {
        $payload$$17_transportParts$$ = $goog$net$xpc$DirectTransport$parseTransportPayload_$$($payload$$17_transportParts$$);
        var $peerEndpointId$$ = $payload$$17_transportParts$$[1];
        switch ($payload$$17_transportParts$$[0]) {
            case "SETUP_ACK":
                this.$setupAckReceived_$.$fired_$ || this.$setupAckReceived_$.$callback$(!0);
                break;
            case "SETUP":
                this.$sendSetupAckMessage_$(), null != this.$peerEndpointId_$ && this.$peerEndpointId_$ != $peerEndpointId$$ && ($goog$log$info$$("Sending SETUP and changing peer ID to: " + $peerEndpointId$$), this.$sendSetupMessage_$()), this.$peerEndpointId_$ = $peerEndpointId$$;
        }
    };
    $JSCompiler_prototypeAlias$$.$sendSetupMessage_$ = function $$JSCompiler_prototypeAlias$$$$sendSetupMessage_$$() {
        var $payload$$18$$;
        $payload$$18$$ = "SETUP," + this.$endpointId_$;
        this.send("tp", $payload$$18$$);
    };
    $JSCompiler_prototypeAlias$$.$sendSetupAckMessage_$ = function $$JSCompiler_prototypeAlias$$$$sendSetupAckMessage_$$() {
        this.send("tp", "SETUP_ACK");
        this.$setupAckSent_$.$fired_$ || this.$setupAckSent_$.$callback$(!0);
    };
    $JSCompiler_prototypeAlias$$.$connect$ = function $$JSCompiler_prototypeAlias$$$$connect$$() {
        var $win$$9$$ = this.$getWindow$();
        if ($win$$9$$) {
            var $uid$$inline_466$$ = $goog$getUid$$($win$$9$$);
            0 == ($goog$net$xpc$DirectTransport$activeCount_$$[$uid$$inline_466$$] || 0) && null == $goog$getObjectByName$$("crosswindowmessaging.channel", $win$$9$$) && $goog$exportPath_$$("crosswindowmessaging.channel", $goog$net$xpc$DirectTransport$messageReceivedHandler_$$, $win$$9$$);
            $goog$net$xpc$DirectTransport$activeCount_$$[$uid$$inline_466$$]++;
            this.$initialized_$ = !0;
            this.$maybeAttemptToConnect_$();
        } else {
            $goog$log$fine$$($goog$net$xpc$logger$$, "connect(): no window to initialize.");
        }
    };
    $JSCompiler_prototypeAlias$$.$maybeAttemptToConnect_$ = function $$JSCompiler_prototypeAlias$$$$maybeAttemptToConnect_$$() {
        this.$channel_$.$isConnected$() ? this.$maybeAttemptToConnectTimer_$.stop() : (this.$maybeAttemptToConnectTimer_$.start(), this.$sendSetupMessage_$());
    };
    $JSCompiler_prototypeAlias$$.send = function $$JSCompiler_prototypeAlias$$$send$($service$$10$$, $payload$$19$$) {
        if (this.$channel_$.$peerWindowObject_$) {
            var $message$$27$$ = new $goog$net$xpc$DirectTransport$Message_$$(this.$originalChannelName_$ + "_" + (0 == $JSCompiler_StaticMethods_getRole$$(this.$channel_$) ? 1 : 0), $service$$10$$, $payload$$19$$);
            this.$channel_$.$cfg_$.directSyncMode ? this.$executeScheduledSend_$($message$$27$$) : this.$asyncSendsMap_$[$goog$getUid$$($message$$27$$)] = $goog$Timer$callOnce$$($goog$bind$$(this.$executeScheduledSend_$, this, $message$$27$$), 0);
        } else {
            $goog$log$fine$$($goog$net$xpc$logger$$, "send(): window not ready");
        }
    };
    $JSCompiler_prototypeAlias$$.$executeScheduledSend_$ = function $$JSCompiler_prototypeAlias$$$$executeScheduledSend_$$($message$$28$$) {
        var $messageId$$ = $goog$getUid$$($message$$28$$);
        this.$asyncSendsMap_$[$messageId$$] && delete this.$asyncSendsMap_$[$messageId$$];
        try {
            var $peerProxy$$ = $goog$getObjectByName$$("crosswindowmessaging.channel", this.$channel_$.$peerWindowObject_$);
        } catch ($error$$9$$) {
            $goog$log$warning$$($goog$net$xpc$logger$$, "Can't access other window, ignoring.", $error$$9$$);
            return;
        }
        if (null === $peerProxy$$) {
            $goog$log$warning$$($goog$net$xpc$logger$$, "Peer window had no global function.");
        } else {
            try {
                $peerProxy$$({
                    channelName: $message$$28$$.$channelName$,
                    service: $message$$28$$.$service$,
                    payload: $message$$28$$.$payload$
                }), $goog$log$info$$("send(): channelName=" + $message$$28$$.$channelName$ + " service=" + $message$$28$$.$service$ + " payload=" + $message$$28$$.$payload$);
            } catch ($error$$10$$) {
                $goog$log$warning$$($goog$net$xpc$logger$$, "Error performing call, ignoring.", $error$$10$$);
            }
        }
    };
    $JSCompiler_prototypeAlias$$.$notifyConnected_$ = function $$JSCompiler_prototypeAlias$$$$notifyConnected_$$() {
        this.$channel_$.$notifyConnected$(0);
    };
    $JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
        if (this.$initialized_$) {
            var $listenWindow$$2$$ = this.$getWindow$(), $uid$$4$$ = $goog$getUid$$($listenWindow$$2$$);
            1 == --$goog$net$xpc$DirectTransport$activeCount_$$[$uid$$4$$] && $goog$exportPath_$$("crosswindowmessaging.channel", null, $listenWindow$$2$$);
        }
        this.$asyncSendsMap_$ && ($goog$object$forEach$$(this.$asyncSendsMap_$, function ($timerId$$1$$) {
            $goog$global$$.clearTimeout($timerId$$1$$);
        }), this.$asyncSendsMap_$ = null);
        this.$setupAckReceived_$ && (this.$setupAckReceived_$.cancel(), delete this.$setupAckReceived_$);
        this.$setupAckSent_$ && (this.$setupAckSent_$.cancel(), delete this.$setupAckSent_$);
        this.$connected_$ && (this.$connected_$.cancel(), delete this.$connected_$);
        $goog$net$xpc$DirectTransport$$.$superClass_$.$disposeInternal$.call(this);
    };
    function $goog$net$xpc$DirectTransport$parseTransportPayload_$$($payload$$20_transportParts$$1$$) {
        $payload$$20_transportParts$$1$$ = $payload$$20_transportParts$$1$$.split(",");
        $payload$$20_transportParts$$1$$[1] = $payload$$20_transportParts$$1$$[1] || null;
        return $payload$$20_transportParts$$1$$;
    }

    function $goog$net$xpc$DirectTransport$Message_$$($channelName$$4$$, $service$$11$$, $payload$$21$$) {
        this.$channelName$ = $channelName$$4$$;
        this.$service$ = $service$$11$$;
        this.$payload$ = $payload$$21$$;
    }
    ;
    function $goog$net$xpc$NativeMessagingTransport$$($channel$$8$$, $peerHostname$$, $opt_domHelper$$13$$, $opt_oneSidedHandshake$$, $opt_protocolVersion$$) {
        $goog$net$xpc$Transport$$.call(this, $opt_domHelper$$13$$);
        this.$channel_$ = $channel$$8$$;
        this.$protocolVersion_$ = $opt_protocolVersion$$ || 2;
        $goog$asserts$assert$$(1 <= this.$protocolVersion_$);
        $goog$asserts$assert$$(2 >= this.$protocolVersion_$);
        this.$peerHostname_$ = $peerHostname$$ || "*";
        this.$eventHandler_$ = new $goog$events$EventHandler$$(this);
        this.$maybeAttemptToConnectTimer_$ = new $goog$Timer$$(100, this.$getWindow$());
        this.$oneSidedHandshake_$ = !!$opt_oneSidedHandshake$$;
        this.$setupAckReceived_$ = new $goog$async$Deferred$$;
        this.$setupAckSent_$ = new $goog$async$Deferred$$;
        this.$connected_$ = new $goog$async$Deferred$$;
        this.$endpointId_$ = $goog$net$xpc$getRandomString$$(10);
        this.$peerEndpointId_$ = null;
        this.$oneSidedHandshake_$ ? 1 == $JSCompiler_StaticMethods_getRole$$(this.$channel_$) ? $JSCompiler_StaticMethods_awaitDeferred$$(this.$connected_$, this.$setupAckReceived_$) : $JSCompiler_StaticMethods_awaitDeferred$$(this.$connected_$, this.$setupAckSent_$) : ($JSCompiler_StaticMethods_awaitDeferred$$(this.$connected_$, this.$setupAckReceived_$), 2 == this.$protocolVersion_$ && $JSCompiler_StaticMethods_awaitDeferred$$(this.$connected_$, this.$setupAckSent_$));
        $JSCompiler_StaticMethods_addCallbacks$$(this.$connected_$, this.$notifyConnected_$, null, this);
        this.$connected_$.$callback$(!0);
        this.$eventHandler_$.$listen$(this.$maybeAttemptToConnectTimer_$, $goog$Timer$TICK$$, this.$maybeAttemptToConnect_$);
        $goog$log$info$$("NativeMessagingTransport created.  protocolVersion=" + this.$protocolVersion_$ + ", oneSidedHandshake=" + this.$oneSidedHandshake_$ + ", role=" + $JSCompiler_StaticMethods_getRole$$(this.$channel_$));
    }

    $goog$inherits$$($goog$net$xpc$NativeMessagingTransport$$, $goog$net$xpc$Transport$$);
    $goog$net$xpc$NativeMessagingTransport$$.prototype.$peerProtocolVersion_$ = null;
    $goog$net$xpc$NativeMessagingTransport$$.prototype.$initialized_$ = !1;
    $goog$net$xpc$NativeMessagingTransport$$.prototype.$transportType$ = 1;
    var $goog$net$xpc$NativeMessagingTransport$activeCount_$$ = {};

    function $goog$net$xpc$NativeMessagingTransport$messageReceived_$$($msgEvt_transportMessageType$$2$$) {
        var $data$$68_payload$$22$$ = $msgEvt_transportMessageType$$2$$.$event_$.data;
        if (!$goog$isString$$($data$$68_payload$$22$$)) {
            return !1;
        }
        var $headDelim_service$$12$$ = $data$$68_payload$$22$$.indexOf("|"), $channel$$9_serviceDelim_staleChannel$$1$$ = $data$$68_payload$$22$$.indexOf(":");
        if (-1 == $headDelim_service$$12$$ || -1 == $channel$$9_serviceDelim_staleChannel$$1$$) {
            return !1;
        }
        var $channelName$$5$$ = $data$$68_payload$$22$$.substring(0, $headDelim_service$$12$$), $headDelim_service$$12$$ = $data$$68_payload$$22$$.substring($headDelim_service$$12$$ + 1, $channel$$9_serviceDelim_staleChannel$$1$$), $data$$68_payload$$22$$ = $data$$68_payload$$22$$.substring($channel$$9_serviceDelim_staleChannel$$1$$ + 1);
        $goog$log$fine$$($goog$net$xpc$logger$$, "messageReceived: channel=" + $channelName$$5$$ + ", service=" + $headDelim_service$$12$$ + ", payload=" + $data$$68_payload$$22$$);
        if ($channel$$9_serviceDelim_staleChannel$$1$$ = $goog$net$xpc$channels$$[$channelName$$5$$]) {
            return $channel$$9_serviceDelim_staleChannel$$1$$.$xpcDeliver$($headDelim_service$$12$$, $data$$68_payload$$22$$, $msgEvt_transportMessageType$$2$$.$event_$.origin), !0;
        }
        $msgEvt_transportMessageType$$2$$ = $goog$net$xpc$NativeMessagingTransport$parseTransportPayload_$$($data$$68_payload$$22$$)[0];
        for (var $staleChannelName$$1$$ in $goog$net$xpc$channels$$) {
            if ($channel$$9_serviceDelim_staleChannel$$1$$ = $goog$net$xpc$channels$$[$staleChannelName$$1$$], 1 == $JSCompiler_StaticMethods_getRole$$($channel$$9_serviceDelim_staleChannel$$1$$) && !$channel$$9_serviceDelim_staleChannel$$1$$.$isConnected$() && "tp" == $headDelim_service$$12$$ && ("SETUP" == $msgEvt_transportMessageType$$2$$ || "SETUP_NTPV2" == $msgEvt_transportMessageType$$2$$)) {
                return $JSCompiler_StaticMethods_updateChannelNameAndCatalog$$($channel$$9_serviceDelim_staleChannel$$1$$, $channelName$$5$$), $channel$$9_serviceDelim_staleChannel$$1$$.$xpcDeliver$($headDelim_service$$12$$, $data$$68_payload$$22$$), !0;
            }
        }
        $goog$log$info$$('channel name mismatch; message ignored"');
        return !1;
    }

    $JSCompiler_prototypeAlias$$ = $goog$net$xpc$NativeMessagingTransport$$.prototype;
    $JSCompiler_prototypeAlias$$.$transportServiceHandler$ = function $$JSCompiler_prototypeAlias$$$$transportServiceHandler$$($payload$$23_peerEndpointId$$1$$) {
        var $prevPeerProtocolVersion_transportParts$$2$$ = $goog$net$xpc$NativeMessagingTransport$parseTransportPayload_$$($payload$$23_peerEndpointId$$1$$);
        $payload$$23_peerEndpointId$$1$$ = $prevPeerProtocolVersion_transportParts$$2$$[1];
        switch ($prevPeerProtocolVersion_transportParts$$2$$[0]) {
            case "SETUP_ACK":
                $JSCompiler_StaticMethods_setPeerProtocolVersion_$$(this, 1);
                this.$setupAckReceived_$.$fired_$ || this.$setupAckReceived_$.$callback$(!0);
                break;
            case "SETUP_ACK_NTPV2":
                2 == this.$protocolVersion_$ && ($JSCompiler_StaticMethods_setPeerProtocolVersion_$$(this, 2), this.$setupAckReceived_$.$fired_$ || this.$setupAckReceived_$.$callback$(!0));
                break;
            case "SETUP":
                $JSCompiler_StaticMethods_setPeerProtocolVersion_$$(this, 1);
                this.$sendSetupAckMessage_$(1);
                break;
            case "SETUP_NTPV2":
                2 == this.$protocolVersion_$ && ($prevPeerProtocolVersion_transportParts$$2$$ = this.$peerProtocolVersion_$, $JSCompiler_StaticMethods_setPeerProtocolVersion_$$(this, 2), this.$sendSetupAckMessage_$(2), 1 != $prevPeerProtocolVersion_transportParts$$2$$ && null == this.$peerEndpointId_$ || this.$peerEndpointId_$ == $payload$$23_peerEndpointId$$1$$ || ($goog$log$info$$("Sending SETUP and changing peer ID to: " + $payload$$23_peerEndpointId$$1$$), this.$sendSetupMessage_$()), this.$peerEndpointId_$ =
                    $payload$$23_peerEndpointId$$1$$);
        }
    };
    $JSCompiler_prototypeAlias$$.$sendSetupMessage_$ = function $$JSCompiler_prototypeAlias$$$$sendSetupMessage_$$() {
        $goog$asserts$assert$$(!(1 == this.$protocolVersion_$ && 2 == this.$peerProtocolVersion_$));
        if (2 == this.$protocolVersion_$ && (null == this.$peerProtocolVersion_$ || 2 == this.$peerProtocolVersion_$)) {
            var $payload$$24$$;
            $payload$$24$$ = "SETUP_NTPV2," + this.$endpointId_$;
            this.send("tp", $payload$$24$$);
        }
        null != this.$peerProtocolVersion_$ && 1 != this.$peerProtocolVersion_$ || this.send("tp", "SETUP");
    };
    $JSCompiler_prototypeAlias$$.$sendSetupAckMessage_$ = function $$JSCompiler_prototypeAlias$$$$sendSetupAckMessage_$$($protocolVersion$$) {
        $goog$asserts$assert$$(1 != this.$protocolVersion_$ || 2 != $protocolVersion$$, "Shouldn't try to send a v2 setup ack in v1 mode.");
        if (2 != this.$protocolVersion_$ || null != this.$peerProtocolVersion_$ && 2 != this.$peerProtocolVersion_$ || 2 != $protocolVersion$$) {
            if (null != this.$peerProtocolVersion_$ && 1 != this.$peerProtocolVersion_$ || 1 != $protocolVersion$$) {
                return;
            }
            this.send("tp", "SETUP_ACK");
        } else {
            this.send("tp", "SETUP_ACK_NTPV2");
        }
        this.$setupAckSent_$.$fired_$ || this.$setupAckSent_$.$callback$(!0);
    };
    function $JSCompiler_StaticMethods_setPeerProtocolVersion_$$($JSCompiler_StaticMethods_setPeerProtocolVersion_$self$$, $version$$14$$) {
        $version$$14$$ > $JSCompiler_StaticMethods_setPeerProtocolVersion_$self$$.$peerProtocolVersion_$ && ($JSCompiler_StaticMethods_setPeerProtocolVersion_$self$$.$peerProtocolVersion_$ = $version$$14$$);
        1 == $JSCompiler_StaticMethods_setPeerProtocolVersion_$self$$.$peerProtocolVersion_$ && ($JSCompiler_StaticMethods_setPeerProtocolVersion_$self$$.$setupAckSent_$.$fired_$ || $JSCompiler_StaticMethods_setPeerProtocolVersion_$self$$.$oneSidedHandshake_$ || $JSCompiler_StaticMethods_setPeerProtocolVersion_$self$$.$setupAckSent_$.$callback$(!0), $JSCompiler_StaticMethods_setPeerProtocolVersion_$self$$.$peerEndpointId_$ = null);
    }

    $JSCompiler_prototypeAlias$$.$connect$ = function $$JSCompiler_prototypeAlias$$$$connect$$() {
        var $listenWindow$$inline_474$$ = this.$getWindow$(), $uid$$inline_475$$ = $goog$getUid$$($listenWindow$$inline_474$$), $value$$inline_476$$ = $goog$net$xpc$NativeMessagingTransport$activeCount_$$[$uid$$inline_475$$];
        $goog$isNumber$$($value$$inline_476$$) || ($value$$inline_476$$ = 0);
        0 == $value$$inline_476$$ && $goog$events$listen$$($listenWindow$$inline_474$$.postMessage ? $listenWindow$$inline_474$$ : $listenWindow$$inline_474$$.document, "message", $goog$net$xpc$NativeMessagingTransport$messageReceived_$$, !1, $goog$net$xpc$NativeMessagingTransport$$);
        $goog$net$xpc$NativeMessagingTransport$activeCount_$$[$uid$$inline_475$$] = $value$$inline_476$$ + 1;
        this.$initialized_$ = !0;
        this.$maybeAttemptToConnect_$();
    };
    $JSCompiler_prototypeAlias$$.$maybeAttemptToConnect_$ = function $$JSCompiler_prototypeAlias$$$$maybeAttemptToConnect_$$() {
        var $outerFrame$$ = 0 == $JSCompiler_StaticMethods_getRole$$(this.$channel_$);
        this.$oneSidedHandshake_$ && $outerFrame$$ || this.$channel_$.$isConnected$() || this.$disposed_$ ? this.$maybeAttemptToConnectTimer_$.stop() : (this.$maybeAttemptToConnectTimer_$.start(), this.$sendSetupMessage_$());
    };
    $JSCompiler_prototypeAlias$$.send = function $$JSCompiler_prototypeAlias$$$send$($service$$13$$, $payload$$25$$) {
        var $win$$10$$ = this.$channel_$.$peerWindowObject_$;
        $win$$10$$ ? (this.send = function $this$send$($service$$14$$, $payload$$26$$) {
            var $transport$$1$$ = this, $channelName$$6$$ = this.$channel_$.name;
            this.$sendTimerId_$ = $goog$Timer$callOnce$$(function () {
                $transport$$1$$.$sendTimerId_$ = 0;
                try {
                    var $obj$$112$$ = $win$$10$$.postMessage ? $win$$10$$ : $win$$10$$.document;
                    $obj$$112$$.postMessage ? ($obj$$112$$.postMessage($channelName$$6$$ + "|" + $service$$14$$ + ":" + $payload$$26$$, $transport$$1$$.$peerHostname_$), $goog$log$fine$$($goog$net$xpc$logger$$, "send(): service=" + $service$$14$$ + " payload=" + $payload$$26$$ + " to hostname=" + $transport$$1$$.$peerHostname_$)) : $goog$log$warning$$($goog$net$xpc$logger$$, "Peer window had no postMessage function.");
                } catch ($error$$11$$) {
                    $goog$log$warning$$($goog$net$xpc$logger$$, "Error performing postMessage, ignoring.", $error$$11$$);
                }
            }, 0);
        }, this.send($service$$13$$, $payload$$25$$)) : $goog$log$fine$$($goog$net$xpc$logger$$, "send(): window not ready");
    };
    $JSCompiler_prototypeAlias$$.$notifyConnected_$ = function $$JSCompiler_prototypeAlias$$$$notifyConnected_$$() {
        this.$channel_$.$notifyConnected$(1 == this.$protocolVersion_$ || 1 == this.$peerProtocolVersion_$ ? 200 : void 0);
    };
    $JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
        if (this.$initialized_$) {
            var $listenWindow$$4$$ = this.$getWindow$(), $uid$$6$$ = $goog$getUid$$($listenWindow$$4$$), $value$$172$$ = $goog$net$xpc$NativeMessagingTransport$activeCount_$$[$uid$$6$$];
            $goog$net$xpc$NativeMessagingTransport$activeCount_$$[$uid$$6$$] = $value$$172$$ - 1;
            1 == $value$$172$$ && $goog$events$unlisten$$($listenWindow$$4$$.postMessage ? $listenWindow$$4$$ : $listenWindow$$4$$.document, "message", $goog$net$xpc$NativeMessagingTransport$messageReceived_$$, !1, $goog$net$xpc$NativeMessagingTransport$$);
        }
        this.$sendTimerId_$ && ($goog$global$$.clearTimeout(this.$sendTimerId_$), this.$sendTimerId_$ = 0);
        $goog$dispose$$(this.$eventHandler_$);
        delete this.$eventHandler_$;
        $goog$dispose$$(this.$maybeAttemptToConnectTimer_$);
        delete this.$maybeAttemptToConnectTimer_$;
        this.$setupAckReceived_$.cancel();
        delete this.$setupAckReceived_$;
        this.$setupAckSent_$.cancel();
        delete this.$setupAckSent_$;
        this.$connected_$.cancel();
        delete this.$connected_$;
        delete this.send;
        $goog$net$xpc$NativeMessagingTransport$$.$superClass_$.$disposeInternal$.call(this);
    };
    function $goog$net$xpc$NativeMessagingTransport$parseTransportPayload_$$($payload$$27_transportParts$$3$$) {
        $payload$$27_transportParts$$3$$ = $payload$$27_transportParts$$3$$.split(",");
        $payload$$27_transportParts$$3$$[1] = $payload$$27_transportParts$$3$$[1] || null;
        return $payload$$27_transportParts$$3$$;
    }
    ;
    function $goog$net$xpc$CrossPageChannel$$($cfg$$, $opt_domHelper$$14$$) {
        $goog$messaging$AbstractChannel$$.call(this);
        for (var $i$$158$$ = 0, $uriField$$; $uriField$$ = $goog$net$xpc$UriCfgFields$$[$i$$158$$]; $i$$158$$++) {
            if ($uriField$$ in $cfg$$ && !/^https?:\/\//.test($cfg$$[$uriField$$])) {
                throw Error("URI " + $cfg$$[$uriField$$] + " is invalid for field " + $uriField$$);
            }
        }
        this.$cfg_$ = $cfg$$;
        this.name = this.$cfg_$.cn || $goog$net$xpc$getRandomString$$(10);
        this.$domHelper_$ = $opt_domHelper$$14$$ || $goog$dom$getDomHelper$$();
        this.$deferredDeliveries_$ = [];
        this.$peerLoadHandler_$ = new $goog$events$EventHandler$$(this);
        $cfg$$.lpu = $cfg$$.lpu || $goog$uri$utils$getHost$$(this.$domHelper_$.$getWindow$().location.href) + "/robots.txt";
        $cfg$$.ppu = $cfg$$.ppu || $goog$uri$utils$getHost$$($cfg$$.pu || "") + "/robots.txt";
        $goog$net$xpc$channels$$[this.name] = this;
        $goog$events$getListener$$(window, "unload", $goog$net$xpc$CrossPageChannel$disposeAll_$$) || $goog$events$listenOnce$$(window, "unload", $goog$net$xpc$CrossPageChannel$disposeAll_$$);
        $goog$log$info$$("CrossPageChannel created: " + this.name);
    }

    $goog$inherits$$($goog$net$xpc$CrossPageChannel$$, $goog$messaging$AbstractChannel$$);
    var $goog$net$xpc$CrossPageChannel$TRANSPORT_SERVICE_ESCAPE_RE_$$ = /^%*tp$/, $goog$net$xpc$CrossPageChannel$TRANSPORT_SERVICE_UNESCAPE_RE_$$ = /^%+tp$/;
    $JSCompiler_prototypeAlias$$ = $goog$net$xpc$CrossPageChannel$$.prototype;
    $JSCompiler_prototypeAlias$$.$connectionDelay_$ = null;
    $JSCompiler_prototypeAlias$$.$peerWindowDeferred_$ = null;
    $JSCompiler_prototypeAlias$$.$transport_$ = null;
    $JSCompiler_prototypeAlias$$.$state_$ = 1;
    $JSCompiler_prototypeAlias$$.$isConnected$ = function $$JSCompiler_prototypeAlias$$$$isConnected$$() {
        return 2 == this.$state_$;
    };
    $JSCompiler_prototypeAlias$$.$peerWindowObject_$ = null;
    $JSCompiler_prototypeAlias$$.$iframeElement_$ = null;
    function $JSCompiler_StaticMethods_isPeerAvailable$$($JSCompiler_StaticMethods_isPeerAvailable$self$$) {
        try {
            return !!$JSCompiler_StaticMethods_isPeerAvailable$self$$.$peerWindowObject_$ && !Boolean($JSCompiler_StaticMethods_isPeerAvailable$self$$.$peerWindowObject_$.closed);
        } catch ($e$$71$$) {
            return !1;
        }
    }

    function $JSCompiler_StaticMethods_createPeerIframe$$($JSCompiler_StaticMethods_createPeerIframe$self$$, $parentElm$$, $opt_configureIframeCb$$) {
        $goog$log$info$$("createPeerIframe()");
        var $iframeId$$ = $JSCompiler_StaticMethods_createPeerIframe$self$$.$cfg_$.ifrid;
        $iframeId$$ || ($iframeId$$ = $JSCompiler_StaticMethods_createPeerIframe$self$$.$cfg_$.ifrid = "xpcpeer" + $goog$net$xpc$getRandomString$$(4));
        var $iframeElm$$ = $goog$dom$getDomHelper$$($parentElm$$).createElement("IFRAME");
        $iframeElm$$.id = $iframeElm$$.name = $iframeId$$;
        $opt_configureIframeCb$$ ? $opt_configureIframeCb$$($iframeElm$$) : $iframeElm$$.style.width = $iframeElm$$.style.height = "100%";
        $JSCompiler_StaticMethods_cleanUpIncompleteConnection_$$($JSCompiler_StaticMethods_createPeerIframe$self$$);
        $JSCompiler_StaticMethods_createPeerIframe$self$$.$peerWindowDeferred_$ = new $goog$async$Deferred$$(void 0, $JSCompiler_StaticMethods_createPeerIframe$self$$);
        var $peerUri$$ = $JSCompiler_StaticMethods_getPeerUri$$($JSCompiler_StaticMethods_createPeerIframe$self$$);
        $JSCompiler_StaticMethods_listenOnce_$$($JSCompiler_StaticMethods_createPeerIframe$self$$.$peerLoadHandler_$, $iframeElm$$, "load", $JSCompiler_StaticMethods_createPeerIframe$self$$.$peerWindowDeferred_$.$callback$, !1, $JSCompiler_StaticMethods_createPeerIframe$self$$.$peerWindowDeferred_$);
        $goog$userAgent$GECKO$$ || $goog$userAgent$WEBKIT$$ ? window.setTimeout($goog$bind$$(function () {
            $parentElm$$.appendChild($iframeElm$$);
            $iframeElm$$.src = $peerUri$$.toString();
            $goog$log$info$$("peer iframe created (" + $iframeId$$ + ")");
        }, $JSCompiler_StaticMethods_createPeerIframe$self$$), 1) : ($iframeElm$$.src = $peerUri$$.toString(), $parentElm$$.appendChild($iframeElm$$), $goog$log$info$$("peer iframe created (" + $iframeId$$ + ")"));
    }

    function $JSCompiler_StaticMethods_cleanUpIncompleteConnection_$$($JSCompiler_StaticMethods_cleanUpIncompleteConnection_$self$$) {
        $JSCompiler_StaticMethods_cleanUpIncompleteConnection_$self$$.$peerWindowDeferred_$ && ($JSCompiler_StaticMethods_cleanUpIncompleteConnection_$self$$.$peerWindowDeferred_$.cancel(), $JSCompiler_StaticMethods_cleanUpIncompleteConnection_$self$$.$peerWindowDeferred_$ = null);
        $JSCompiler_StaticMethods_cleanUpIncompleteConnection_$self$$.$deferredDeliveries_$.length = 0;
        $JSCompiler_StaticMethods_cleanUpIncompleteConnection_$self$$.$peerLoadHandler_$.removeAll();
    }

    function $JSCompiler_StaticMethods_getPeerUri$$($JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_484_role$$inline_482$$) {
        var $peerUri$$1$$ = $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_484_role$$inline_482$$.$cfg_$.pu;
        $goog$isString$$($peerUri$$1$$) && ($peerUri$$1$$ = $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_484_role$$inline_482$$.$cfg_$.pu = new $goog$Uri$$($peerUri$$1$$));
        var $peerCfg$$inline_481_value$$inline_485$$ = {};
        $peerCfg$$inline_481_value$$inline_485$$.cn = $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_484_role$$inline_482$$.name;
        $peerCfg$$inline_481_value$$inline_485$$.tp = $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_484_role$$inline_482$$.$cfg_$.tp;
        $peerCfg$$inline_481_value$$inline_485$$.osh = $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_484_role$$inline_482$$.$cfg_$.osh;
        $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_484_role$$inline_482$$.$cfg_$.lru && ($peerCfg$$inline_481_value$$inline_485$$.pru = $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_484_role$$inline_482$$.$cfg_$.lru);
        $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_484_role$$inline_482$$.$cfg_$.lpu && ($peerCfg$$inline_481_value$$inline_485$$.ppu = $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_484_role$$inline_482$$.$cfg_$.lpu);
        $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_484_role$$inline_482$$.$cfg_$.ppu && ($peerCfg$$inline_481_value$$inline_485$$.lpu = $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_484_role$$inline_482$$.$cfg_$.ppu);
        ($JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_484_role$$inline_482$$ = $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_484_role$$inline_482$$.$cfg_$.role) && ($peerCfg$$inline_481_value$$inline_485$$.role = 1 == $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_484_role$$inline_482$$ ? 0 : 1);
        $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_484_role$$inline_482$$ = $peerUri$$1$$;
        $peerCfg$$inline_481_value$$inline_485$$ = $goog$json$serialize$$($peerCfg$$inline_481_value$$inline_485$$);
        $JSCompiler_StaticMethods_enforceReadOnly$$($JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_484_role$$inline_482$$);
        $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_484_role$$inline_482$$.$queryData_$.set("xpc", $peerCfg$$inline_481_value$$inline_485$$);
        return $peerUri$$1$$;
    }

    $JSCompiler_prototypeAlias$$.$connect$ = function $$JSCompiler_prototypeAlias$$$$connect$$($opt_connectCb$$2$$) {
        this.$connectCb_$ = $opt_connectCb$$2$$ || $goog$nullFunction$$;
        this.$peerWindowDeferred_$ ? $JSCompiler_StaticMethods_addCallbacks$$(this.$peerWindowDeferred_$, this.$continueConnection_$, null, void 0) : this.$continueConnection_$();
    };
    $JSCompiler_prototypeAlias$$.$continueConnection_$ = function $$JSCompiler_prototypeAlias$$$$continueConnection_$$() {
        $goog$log$info$$("continueConnection_()");
        this.$peerWindowDeferred_$ = null;
        this.$cfg_$.ifrid && (this.$iframeElement_$ = this.$domHelper_$.$getElement$(this.$cfg_$.ifrid));
        if (this.$iframeElement_$) {
            var $JSCompiler_temp$$990_JSCompiler_temp_const$$1214_winObj$$1$$ = this.$iframeElement_$.contentWindow;
            $JSCompiler_temp$$990_JSCompiler_temp_const$$1214_winObj$$1$$ || ($JSCompiler_temp$$990_JSCompiler_temp_const$$1214_winObj$$1$$ = window.frames[this.$cfg_$.ifrid]);
            this.$peerWindowObject_$ = $JSCompiler_temp$$990_JSCompiler_temp_const$$1214_winObj$$1$$;
        }
        if (!this.$peerWindowObject_$) {
            if (window == window.top) {
                throw Error("CrossPageChannel: Can't connect, peer window-object not set.");
            }
            this.$peerWindowObject_$ = window.parent;
        }
        if (!this.$transport_$) {
            if (!this.$cfg_$.tp) {
                var $JSCompiler_temp$$990_JSCompiler_temp_const$$1214_winObj$$1$$ = this.$cfg_$, $JSCompiler_temp$$1215_JSCompiler_temp$$1216_JSCompiler_temp$$1217_oldOpener$$inline_1238$$;
                if ($goog$isFunction$$(document.postMessage) || $goog$isFunction$$(window.postMessage) || $goog$userAgent$IE$$ && window.postMessage) {
                    $JSCompiler_temp$$1215_JSCompiler_temp$$1216_JSCompiler_temp$$1217_oldOpener$$inline_1238$$ = 1;
                } else {
                    if ($goog$userAgent$GECKO$$) {
                        $JSCompiler_temp$$1215_JSCompiler_temp$$1216_JSCompiler_temp$$1217_oldOpener$$inline_1238$$ = 2;
                    } else {
                        if ($goog$userAgent$IE$$ && this.$cfg_$.pru) {
                            $JSCompiler_temp$$1215_JSCompiler_temp$$1216_JSCompiler_temp$$1217_oldOpener$$inline_1238$$ = 3;
                        } else {
                            var $JSCompiler_temp$$1218_isSupported$$inline_1237$$;
                            if ($JSCompiler_temp$$1218_isSupported$$inline_1237$$ = $goog$userAgent$IE$$) {
                                $JSCompiler_temp$$1218_isSupported$$inline_1237$$ = !1;
                                try {
                                    $JSCompiler_temp$$1215_JSCompiler_temp$$1216_JSCompiler_temp$$1217_oldOpener$$inline_1238$$ = window.opener, window.opener = {}, $JSCompiler_temp$$1218_isSupported$$inline_1237$$ = $goog$reflect$canAccessProperty$$(window, "opener"), window.opener = $JSCompiler_temp$$1215_JSCompiler_temp$$1216_JSCompiler_temp$$1217_oldOpener$$inline_1238$$;
                                } catch ($e$$inline_1239$$) {
                                }
                            }
                            $JSCompiler_temp$$1215_JSCompiler_temp$$1216_JSCompiler_temp$$1217_oldOpener$$inline_1238$$ = $JSCompiler_temp$$1218_isSupported$$inline_1237$$ ? 6 : 4;
                        }
                    }
                }
                $JSCompiler_temp$$990_JSCompiler_temp_const$$1214_winObj$$1$$.tp = $JSCompiler_temp$$1215_JSCompiler_temp$$1216_JSCompiler_temp$$1217_oldOpener$$inline_1238$$;
            }
            switch (this.$cfg_$.tp) {
                case 1:
                    this.$transport_$ = new $goog$net$xpc$NativeMessagingTransport$$(this, this.$cfg_$.ph, this.$domHelper_$, !!this.$cfg_$.osh, this.$cfg_$.nativeProtocolVersion || 2);
                    break;
                case 6:
                    this.$transport_$ = new $goog$net$xpc$NixTransport$$(this, this.$domHelper_$);
                    break;
                case 2:
                    this.$transport_$ = new $goog$net$xpc$FrameElementMethodTransport$$(this, this.$domHelper_$);
                    break;
                case 3:
                    this.$transport_$ = new $goog$net$xpc$IframeRelayTransport$$(this, this.$domHelper_$);
                    break;
                case 4:
                    this.$transport_$ = new $goog$net$xpc$IframePollingTransport$$(this, this.$domHelper_$);
                    break;
                case 7:
                    if ($JSCompiler_temp$$990_JSCompiler_temp_const$$1214_winObj$$1$$ = this.$peerWindowObject_$) {
                        try {
                            $JSCompiler_temp$$990_JSCompiler_temp_const$$1214_winObj$$1$$ = window.document.domain == this.$peerWindowObject_$.document.domain;
                        } catch ($e$$inline_1104$$) {
                            $JSCompiler_temp$$990_JSCompiler_temp_const$$1214_winObj$$1$$ = !1;
                        }
                    }
                    $JSCompiler_temp$$990_JSCompiler_temp_const$$1214_winObj$$1$$ ? this.$transport_$ = new $goog$net$xpc$DirectTransport$$(this, this.$domHelper_$) : $goog$log$info$$("DirectTransport not supported for this window, peer window in different security context or not set yet.");
            }
            if (this.$transport_$) {
                $goog$log$info$$("Transport created: " + this.$transport_$.getName());
            } else {
                throw Error("CrossPageChannel: No suitable transport found!");
            }
        }
        for (this.$transport_$.$connect$(); 0 < this.$deferredDeliveries_$.length;) {
            this.$deferredDeliveries_$.shift()();
        }
    };
    $JSCompiler_prototypeAlias$$.close = function $$JSCompiler_prototypeAlias$$$close$() {
        $JSCompiler_StaticMethods_cleanUpIncompleteConnection_$$(this);
        this.$state_$ = 3;
        $goog$dispose$$(this.$transport_$);
        this.$connectCb_$ = this.$transport_$ = null;
        $goog$dispose$$(this.$connectionDelay_$);
        this.$connectionDelay_$ = null;
        $goog$log$info$$('Channel "' + this.name + '" closed');
    };
    $JSCompiler_prototypeAlias$$.$notifyConnected$ = function $$JSCompiler_prototypeAlias$$$$notifyConnected$$($opt_delay$$1$$) {
        this.$isConnected$() || this.$connectionDelay_$ && this.$connectionDelay_$.$isActive$() || (this.$state_$ = 2, $goog$log$info$$('Channel "' + this.name + '" connected'), $goog$dispose$$(this.$connectionDelay_$), $goog$isDef$$($opt_delay$$1$$) ? (this.$connectionDelay_$ = new $goog$async$Delay$$(this.$connectCb_$, $opt_delay$$1$$), this.$connectionDelay_$.start()) : (this.$connectionDelay_$ = null, this.$connectCb_$()));
    };
    $JSCompiler_prototypeAlias$$.$notifyConnected_$ = $goog$net$xpc$CrossPageChannel$$.prototype.$notifyConnected$;
    $JSCompiler_prototypeAlias$$.send = function $$JSCompiler_prototypeAlias$$$send$($serviceName$$8$$, $payload$$28$$) {
        this.$isConnected$() ? $JSCompiler_StaticMethods_isPeerAvailable$$(this) ? ($goog$isObject$$($payload$$28$$) && ($payload$$28$$ = $goog$json$serialize$$($payload$$28$$)), this.$transport_$.send($JSCompiler_StaticMethods_escapeServiceName_$$($serviceName$$8$$), $payload$$28$$)) : ($goog$log$error$$($goog$net$xpc$logger$$, "Peer has disappeared."), this.close()) : $goog$log$error$$($goog$net$xpc$logger$$, "Can't send. Channel not connected.");
    };
    $JSCompiler_prototypeAlias$$.$xpcDeliver$ = function $$JSCompiler_prototypeAlias$$$$xpcDeliver$$($name$$inline_500_serviceName$$9_serviceName$$inline_503$$, $payload$$29$$, $opt_origin_service$$inline_1109_service$$inline_505$$) {
        if (this.$peerWindowDeferred_$) {
            this.$deferredDeliveries_$.push($goog$bind$$(this.$xpcDeliver$, this, $name$$inline_500_serviceName$$9_serviceName$$inline_503$$, $payload$$29$$, $opt_origin_service$$inline_1109_service$$inline_505$$));
        } else {
            var $objectPayload$$inline_1114_peerHostname$$inline_498$$ = this.$cfg_$.ph;
            if ($goog$string$isEmptySafe$$($opt_origin_service$$inline_1109_service$$inline_505$$) || $goog$string$isEmptySafe$$($objectPayload$$inline_1114_peerHostname$$inline_498$$) || $opt_origin_service$$inline_1109_service$$inline_505$$ == this.$cfg_$.ph) {
                if (this.$disposed_$) {
                    $goog$log$warning$$($goog$net$xpc$logger$$, "CrossPageChannel::xpcDeliver(): Disposed.");
                } else {
                    if ($name$$inline_500_serviceName$$9_serviceName$$inline_503$$ && "tp" != $name$$inline_500_serviceName$$9_serviceName$$inline_503$$) {
                        if (this.$isConnected$()) {
                            if ($name$$inline_500_serviceName$$9_serviceName$$inline_503$$ = $name$$inline_500_serviceName$$9_serviceName$$inline_503$$.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), $name$$inline_500_serviceName$$9_serviceName$$inline_503$$ = $goog$net$xpc$CrossPageChannel$TRANSPORT_SERVICE_UNESCAPE_RE_$$.test($name$$inline_500_serviceName$$9_serviceName$$inline_503$$) ? $name$$inline_500_serviceName$$9_serviceName$$inline_503$$.substring(1) : $name$$inline_500_serviceName$$9_serviceName$$inline_503$$,
                                    $opt_origin_service$$inline_1109_service$$inline_505$$ = this.$services_$[$name$$inline_500_serviceName$$9_serviceName$$inline_503$$], $opt_origin_service$$inline_1109_service$$inline_505$$ || (this.$defaultService_$ ? $opt_origin_service$$inline_1109_service$$inline_505$$ = {
                                    $callback$: $goog$partial$$(this.$defaultService_$, $name$$inline_500_serviceName$$9_serviceName$$inline_503$$),
                                    $objectPayload$: $goog$isObject$$($payload$$29$$)
                                } : ($goog$log$warning$$(this.logger, 'Unknown service name "' +
                                    $name$$inline_500_serviceName$$9_serviceName$$inline_503$$ + '"'), $opt_origin_service$$inline_1109_service$$inline_505$$ = null)), $opt_origin_service$$inline_1109_service$$inline_505$$) {
                                var $decodedPayload$$inline_506$$;
                                a: {
                                    if (($objectPayload$$inline_1114_peerHostname$$inline_498$$ = $opt_origin_service$$inline_1109_service$$inline_505$$.$objectPayload$) && $goog$isString$$($payload$$29$$)) {
                                        try {
                                            $decodedPayload$$inline_506$$ = $goog$json$parse$$($payload$$29$$);
                                            break a;
                                        } catch ($err$$inline_1115$$) {
                                            $goog$log$warning$$(this.logger, "Expected JSON payload for " + $name$$inline_500_serviceName$$9_serviceName$$inline_503$$ + ', was "' + $payload$$29$$ + '"');
                                            $decodedPayload$$inline_506$$ = null;
                                            break a;
                                        }
                                    } else {
                                        if (!$objectPayload$$inline_1114_peerHostname$$inline_498$$ && !$goog$isString$$($payload$$29$$)) {
                                            $decodedPayload$$inline_506$$ = $goog$json$serialize$$($payload$$29$$);
                                            break a;
                                        }
                                    }
                                    $decodedPayload$$inline_506$$ = $payload$$29$$;
                                }
                                null != $decodedPayload$$inline_506$$ && $opt_origin_service$$inline_1109_service$$inline_505$$.$callback$($decodedPayload$$inline_506$$);
                            }
                        } else {
                            $goog$log$info$$("CrossPageChannel::xpcDeliver(): Not connected.");
                        }
                    } else {
                        this.$transport_$.$transportServiceHandler$($payload$$29$$);
                    }
                }
            } else {
                $goog$log$warning$$($goog$net$xpc$logger$$, 'Message received from unapproved origin "' + $opt_origin_service$$inline_1109_service$$inline_505$$ + '" - rejected.');
            }
        }
    };
    function $JSCompiler_StaticMethods_escapeServiceName_$$($name$$80$$) {
        $goog$net$xpc$CrossPageChannel$TRANSPORT_SERVICE_ESCAPE_RE_$$.test($name$$80$$) && ($name$$80$$ = "%" + $name$$80$$);
        return $name$$80$$.replace(/[%:|]/g, encodeURIComponent);
    }

    function $JSCompiler_StaticMethods_getRole$$($JSCompiler_StaticMethods_getRole$self$$) {
        var $role$$3$$ = $JSCompiler_StaticMethods_getRole$self$$.$cfg_$.role;
        return $goog$isNumber$$($role$$3$$) ? $role$$3$$ : window.parent == $JSCompiler_StaticMethods_getRole$self$$.$peerWindowObject_$ ? 1 : 0;
    }

    function $JSCompiler_StaticMethods_updateChannelNameAndCatalog$$($JSCompiler_StaticMethods_updateChannelNameAndCatalog$self$$, $name$$82$$) {
        $goog$log$fine$$($goog$net$xpc$logger$$, "changing channel name to " + $name$$82$$);
        delete $goog$net$xpc$channels$$[$JSCompiler_StaticMethods_updateChannelNameAndCatalog$self$$.name];
        $JSCompiler_StaticMethods_updateChannelNameAndCatalog$self$$.name = $name$$82$$;
        $goog$net$xpc$channels$$[$name$$82$$] = $JSCompiler_StaticMethods_updateChannelNameAndCatalog$self$$;
    }

    $JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
        this.close();
        this.$iframeElement_$ = this.$peerWindowObject_$ = null;
        delete $goog$net$xpc$channels$$[this.name];
        $goog$dispose$$(this.$peerLoadHandler_$);
        delete this.$peerLoadHandler_$;
        $goog$net$xpc$CrossPageChannel$$.$superClass_$.$disposeInternal$.call(this);
    };
    function $goog$net$xpc$CrossPageChannel$disposeAll_$$() {
        for (var $name$$83$$ in $goog$net$xpc$channels$$) {
            $goog$dispose$$($goog$net$xpc$channels$$[$name$$83$$]);
        }
    }
    ;
    function $viewbix$sdk$component$Component$$($id$$23$$, $element$$119$$) {
        this.id = $id$$23$$;
        this.element = $element$$119$$;
    }
    ;
    function $viewbix$sdk$component$AppContainer$$($id$$24$$, $element$$120$$) {
        $viewbix$sdk$component$Component$$.call(this, $id$$24$$, $element$$120$$);
        this.$overlaysVideo$ = !0;
        this.$rollPromptFunction$ = this.$rollPromptElement$ = null;
        this.$completeAllowSkipRollApp$ = !0;
    }

    $goog$inherits$$($viewbix$sdk$component$AppContainer$$, $viewbix$sdk$component$Component$$);
    function $viewbix$sdk$event$IframeCreatedEvent$$($iframe$$1$$) {
        $goog$events$Event$$.call(this, $viewbix$sdk$event$IframeCreatedEvent$APP_IFRAME_CREATED$$);
        this.$iframe$ = $iframe$$1$$;
    }

    $goog$inherits$$($viewbix$sdk$event$IframeCreatedEvent$$, $goog$events$Event$$);
    var $viewbix$sdk$event$IframeCreatedEvent$APP_IFRAME_CREATED$$ = "APP_IFRAME_CREATED";

    function $viewbix$sdk$event$MenuEvent$$($type$$129$$, $menu$$, $data$$69$$, $dataType$$4$$) {
        $goog$events$Event$$.call(this, $type$$129$$);
        this.data = $data$$69$$;
        this.dataType = $dataType$$4$$;
        this.$menu$ = $menu$$;
    }

    $goog$inherits$$($viewbix$sdk$event$MenuEvent$$, $goog$events$Event$$);
    function $viewbix$sdk$event$PropertyChangeEvent$$($name$$84$$, $value$$173$$) {
        $goog$events$Event$$.call(this, $viewbix$sdk$event$PropertyChangeEvent$EVENT_TYPE_PREFIX$$ + $name$$84$$);
        this.name = $name$$84$$;
        this.value = $value$$173$$;
    }

    $goog$inherits$$($viewbix$sdk$event$PropertyChangeEvent$$, $goog$events$Event$$);
    var $viewbix$sdk$event$PropertyChangeEvent$EVENT_TYPE_PREFIX$$ = "PROPERTY_CHANGED_";

    function $viewbix$sdk$event$ThresholdEvent$$($type$$130$$, $value$$174$$, $url$$42$$) {
        $goog$events$Event$$.call(this, $type$$130$$);
        this.value = $value$$174$$;
        this.url = $url$$42$$;
    }

    $goog$inherits$$($viewbix$sdk$event$ThresholdEvent$$, $goog$events$Event$$);
    function $viewbix$sdk$event$TrackerServiceEvent$$($info$$2$$, $opt_trackingData$$) {
        $goog$events$Event$$.call(this, $viewbix$sdk$event$TrackerServiceEvent$TRACKER_TRACK$$);
        this.info = $info$$2$$;
        this.$trackingData$ = $opt_trackingData$$;
    }

    $goog$inherits$$($viewbix$sdk$event$TrackerServiceEvent$$, $goog$events$Event$$);
    var $viewbix$sdk$event$TrackerServiceEvent$TRACKER_TRACK$$ = "TRACKER_TRACK";

    function $viewbix$sdk$event$VideoEvent$$($type$$131$$) {
        $goog$events$Event$$.call(this, $type$$131$$);
    }

    $goog$inherits$$($viewbix$sdk$event$VideoEvent$$, $goog$events$Event$$);
    var $viewbix$sdk$event$VideoEvent$Type$$ = {
        $CLICK$: "click",
        $DURATION_CHANGE$: "durationchange",
        $ENDED$: "ended",
        ERROR: "error",
        $FULLSCREEN_CHANGE$: "fullscreenchange",
        $LOADED_DATA$: "loadeddata",
        $LOAD_START$: "loadstart",
        $PAUSE$: "pause",
        $PLAYING$: "play",
        $SEEKED$: "seeked",
        $SEEKING$: "seeking",
        $TIME_UPDATE$: "timeupdate"
    };

    function $viewbix$sdk$helper$BindHelper$$() {
        $goog$events$EventTarget$$.call(this);
        this.$data_$ = {};
    }

    $goog$inherits$$($viewbix$sdk$helper$BindHelper$$, $goog$events$EventTarget$$);
    $goog$addSingletonGetter$$($viewbix$sdk$helper$BindHelper$$);
    function $JSCompiler_StaticMethods_bindConfigDefinition$$($JSCompiler_StaticMethods_bindConfigDefinition$self_methodBinding$$, $configDefinition$$, $callback$$68$$, $opt_scope$$12$$) {
        var $configsToBind$$ = [], $configValues$$ = [], $methodHandle$$ = null;
        $JSCompiler_StaticMethods_bindConfigDefinition$self_methodBinding$$ = /([^\(]+)\(([^\)]+)\)/.exec($configDefinition$$);
        null != $JSCompiler_StaticMethods_bindConfigDefinition$self_methodBinding$$ ? ($methodHandle$$ = eval($JSCompiler_StaticMethods_bindConfigDefinition$self_methodBinding$$[1]), $configsToBind$$ = $viewbix$sdk$helper$StringHelper$splitAndTrim$$($JSCompiler_StaticMethods_bindConfigDefinition$self_methodBinding$$[2], ",")) : $goog$array$insert$$($configsToBind$$, $configDefinition$$);
        $goog$array$forEach$$($configsToBind$$, function ($config$$, $i$$159$$) {
            $configValues$$[$i$$159$$] = void 0;
        });
        $goog$array$forEach$$($configsToBind$$, function ($configName$$) {
            $viewbix$sdk$helper$BindHelper$listenToConfig$$($configName$$, function ($configValue$$) {
                if ($goog$isFunction$$($methodHandle$$)) {
                    var $configIndex$$ = $goog$array$indexOf$$($configsToBind$$, $configName$$);
                    $configValues$$[$configIndex$$] = $configValue$$;
                    if ($goog$array$every$$($configValues$$, function ($cv$$) {
                            return $goog$isDef$$($cv$$);
                        })) {
                        $configValue$$ = $methodHandle$$.apply(null, $configValues$$);
                    } else {
                        return;
                    }
                }
                $opt_scope$$12$$ = null != $opt_scope$$12$$ ? $opt_scope$$12$$ : this;
                $callback$$68$$.call($opt_scope$$12$$, $configValue$$);
            });
        });
    }

    function $viewbix$sdk$helper$BindHelper$bindConfigDefinition$$($configDefinition$$1$$, $callback$$69$$, $opt_scope$$13$$) {
        $JSCompiler_StaticMethods_bindConfigDefinition$$($viewbix$sdk$helper$BindHelper$$.$getInstance$(), $configDefinition$$1$$, $callback$$69$$, $opt_scope$$13$$);
    }

    function $JSCompiler_StaticMethods_listenToConfig$$($JSCompiler_StaticMethods_listenToConfig$self$$,
                                                        $name$$85$$,
                                                        $callback$$70$$,
                                                        $opt_scope$$14$$,
                                                        $opt_returnNullIfMissing_value$$175$$) {

        var $parts$$15$$ = $name$$85$$.split(":");
        $name$$85$$ = $parts$$15$$[0];
        //console.log('listenToConfig:' + $name$$85$$);
        var $defaultValue$$2$$ = null;
        1 < $parts$$15$$.length && ($defaultValue$$2$$ = $parts$$15$$[1]);
        //console.log('listen:' + $viewbix$sdk$event$PropertyChangeEvent$EVENT_TYPE_PREFIX$$ + $name$$85$$);
        $goog$events$listen$$($JSCompiler_StaticMethods_listenToConfig$self$$,
            $viewbix$sdk$event$PropertyChangeEvent$EVENT_TYPE_PREFIX$$ + $name$$85$$, function ($event$$1$$) {
                //console.log('callback:' + $name$$85$$);
                $callback$$70$$.call(this, $event$$1$$.value, $event$$1$$.name);
            }, !1, $opt_scope$$14$$);
        if ($name$$85$$ in $JSCompiler_StaticMethods_listenToConfig$self$$.$data_$) {
            $opt_returnNullIfMissing_value$$175$$ = $goog$object$get$$($JSCompiler_StaticMethods_listenToConfig$self$$.$data_$, $name$$85$$),
                $callback$$70$$.call(null != $opt_scope$$14$$ ?
                        $opt_scope$$14$$ :
                        $JSCompiler_StaticMethods_listenToConfig$self$$,
                    $opt_returnNullIfMissing_value$$175$$, $name$$85$$);
        } else {
            if (null != $opt_returnNullIfMissing_value$$175$$ && $opt_returnNullIfMissing_value$$175$$ || null != $defaultValue$$2$$) {
                null != $defaultValue$$2$$ ?
                    $callback$$70$$.call($opt_scope$$14$$,
                        $defaultValue$$2$$, $name$$85$$) :
                    $callback$$70$$.call($opt_scope$$14$$, null, $name$$85$$);
            }
        }
    }

    function $viewbix$sdk$helper$BindHelper$listenToConfig$$($name$$86$$, $callback$$71$$, $opt_scope$$15$$, $opt_returnNullIfMissing$$1$$) {
        $JSCompiler_StaticMethods_listenToConfig$$($viewbix$sdk$helper$BindHelper$$.$getInstance$(),
            $name$$86$$, $callback$$71$$, $opt_scope$$15$$, $opt_returnNullIfMissing$$1$$);
    };
    function $viewbix$sdk$helper$BooleanHelper$convertToBoolean$$($value$$178$$, $opt_defaultValue$$) {
        $opt_defaultValue$$ = $opt_defaultValue$$ || !1;
        if (null === $value$$178$$ || !$goog$isDef$$($value$$178$$)) {
            return $opt_defaultValue$$;
        }
        if ($goog$isBoolean$$($value$$178$$)) {
            return $value$$178$$;
        }
        if ($goog$isNumber$$($value$$178$$)) {
            return 0 != $value$$178$$;
        }
        if ($goog$isString$$($value$$178$$)) {
            var $cleaned$$ = $goog$string$trim$$($value$$178$$), $cleaned$$ = $goog$string$stripQuotes$$($cleaned$$), $cleaned$$ = $goog$string$trim$$($cleaned$$), $cleaned$$ = $cleaned$$.toLowerCase();
            switch ($cleaned$$) {
                case "true":
                    ;
                case "1":
                    return !0;
                case "false":
                    ;
                case "0":
                    return !1;
            }
        }
        return $opt_defaultValue$$;
    }
    ;
    function $viewbix$sdk$helper$ColorHelper$colorToString$$($rgb$$10$$, $opt_prefix$$) {
        $opt_prefix$$ = $opt_prefix$$ || "#";
        if ($goog$isString$$($rgb$$10$$) && $goog$string$caseInsensitiveStartsWith$$($rgb$$10$$, $opt_prefix$$)) {
            return $rgb$$10$$;
        }
        for (var $colorText$$ = $goog$string$parseInt$$($rgb$$10$$).toString(16); 6 > $colorText$$.length;) {
            $colorText$$ = "0" + $colorText$$;
        }
        return $opt_prefix$$ + $colorText$$;
    }
    ;
    function $viewbix$sdk$helper$ElementHelper$getAutoSize$$($element$$121$$) {
        var $originalWidth$$ = $element$$121$$.style.width, $originalHeight$$ = $element$$121$$.style.height, $size$$14_style$$inline_518_w$$inline_513$$ = "auto", $h$$inline_515_originalDisplay$$inline_519$$;
        $size$$14_style$$inline_518_w$$inline_513$$ instanceof $goog$math$Size$$ ? ($h$$inline_515_originalDisplay$$inline_519$$ = $size$$14_style$$inline_518_w$$inline_513$$.height, $size$$14_style$$inline_518_w$$inline_513$$ = $size$$14_style$$inline_518_w$$inline_513$$.width) : $h$$inline_515_originalDisplay$$inline_519$$ = "auto";
        $element$$121$$.style.width = $goog$style$getPixelStyleValue_$$($size$$14_style$$inline_518_w$$inline_513$$);
        $element$$121$$.style.height = $goog$style$getPixelStyleValue_$$($h$$inline_515_originalDisplay$$inline_519$$);
        $size$$14_style$$inline_518_w$$inline_513$$ = $element$$121$$.style;
        $h$$inline_515_originalDisplay$$inline_519$$ = $size$$14_style$$inline_518_w$$inline_513$$.display;
        var $originalVisibility$$inline_520$$ = $size$$14_style$$inline_518_w$$inline_513$$.visibility, $originalPosition$$inline_521$$ = $size$$14_style$$inline_518_w$$inline_513$$.position, $originalWidth$$inline_522$$ = $size$$14_style$$inline_518_w$$inline_513$$.width, $originalheight$$inline_523$$ = $size$$14_style$$inline_518_w$$inline_513$$.height;
        $size$$14_style$$inline_518_w$$inline_513$$.visibility = "hidden";
        $size$$14_style$$inline_518_w$$inline_513$$.position = "absolute";
        $size$$14_style$$inline_518_w$$inline_513$$.display = "inline-block";
        $size$$14_style$$inline_518_w$$inline_513$$.width = "auto";
        $size$$14_style$$inline_518_w$$inline_513$$.height = "auto";
        var $w$$inline_524$$ = $element$$121$$.offsetWidth, $h$$inline_525$$ = $element$$121$$.offsetHeight;
        $size$$14_style$$inline_518_w$$inline_513$$.display = $h$$inline_515_originalDisplay$$inline_519$$;
        $size$$14_style$$inline_518_w$$inline_513$$.position = $originalPosition$$inline_521$$;
        $size$$14_style$$inline_518_w$$inline_513$$.visibility = $originalVisibility$$inline_520$$;
        $size$$14_style$$inline_518_w$$inline_513$$.width = $originalWidth$$inline_522$$;
        $size$$14_style$$inline_518_w$$inline_513$$.height = $originalheight$$inline_523$$;
        $size$$14_style$$inline_518_w$$inline_513$$ = new $goog$math$Size$$($w$$inline_524$$, $h$$inline_525$$);
        $element$$121$$.style.width = $originalWidth$$;
        $element$$121$$.style.height = $originalHeight$$;
        return $size$$14_style$$inline_518_w$$inline_513$$;
    }
    ;
    function $viewbix$sdk$helper$EventHelper$listenMouseEnter$$($listener$$74$$, $opt_handler$$11$$) {
        var $element$$123$$ = document.body;
        $goog$events$listen$$($element$$123$$, "mouseover", function ($e$$73$$) {
            $e$$73$$.relatedTarget && $goog$dom$contains$$($element$$123$$, $e$$73$$.relatedTarget) || $listener$$74$$.call($opt_handler$$11$$, $e$$73$$);
        }, !1, $opt_handler$$11$$);
    }

    function $viewbix$sdk$helper$EventHelper$listenMouseMove$$($listener$$75$$, $opt_handler$$12$$) {
        var $element$$124$$ = document.body, $lastMoveX$$, $lastMoveY$$;
        $goog$events$listen$$($element$$124$$, "mousemove", function ($e$$74$$) {
            if (isNaN($lastMoveX$$) || isNaN($lastMoveY$$) || $e$$74$$.screenX != $lastMoveX$$ || $e$$74$$.screenY != $lastMoveY$$) {
                $e$$74$$.relatedTarget && $goog$dom$contains$$($element$$124$$, $e$$74$$.relatedTarget) || $listener$$75$$.call($opt_handler$$12$$, $e$$74$$);
            }
            $lastMoveX$$ = $e$$74$$.screenX;
            $lastMoveY$$ = $e$$74$$.screenY;
        }, !1, $opt_handler$$12$$);
    }

    function $viewbix$sdk$helper$EventHelper$listenMouseLeave$$($listener$$76$$, $opt_handler$$13$$) {
        var $element$$125$$ = document.body;
        $goog$events$listen$$($element$$125$$, "mouseout", function ($e$$75$$) {
            $e$$75$$.relatedTarget && $goog$dom$contains$$($element$$125$$, $e$$75$$.relatedTarget) || $listener$$76$$.call($opt_handler$$13$$, $e$$75$$);
        }, !1, $opt_handler$$13$$);
    }

    function $viewbix$sdk$helper$EventHelper$setupResizeListening$$() {
        function $resetTriggers$$($element$$128_expand$$) {
            var $contract_triggers$$ = $element$$128_expand$$.$__resizeTriggers__$;
            $element$$128_expand$$ = $contract_triggers$$.firstElementChild;
            var $contract_triggers$$ = $contract_triggers$$.lastElementChild, $expandChild$$ = $element$$128_expand$$.firstElementChild;
            $contract_triggers$$.scrollLeft = $contract_triggers$$.scrollWidth;
            $contract_triggers$$.scrollTop = $contract_triggers$$.scrollHeight;
            $expandChild$$.style.width = $element$$128_expand$$.offsetWidth + 1 + "px";
            $expandChild$$.style.height = $element$$128_expand$$.offsetHeight + 1 + "px";
            $element$$128_expand$$.scrollLeft = $element$$128_expand$$.scrollWidth;
            $element$$128_expand$$.scrollTop = $element$$128_expand$$.scrollHeight;
        }

        function $scrollListener$$($e$$76$$) {
            var $element$$130$$ = $e$$76$$.currentTarget;
            $resetTriggers$$($element$$130$$);
            $element$$130$$.$__resizeRAF__$ && $cancelFrame$$($element$$130$$.$__resizeRAF__$);
            $element$$130$$.$__resizeRAF__$ = $requestFrame$$(function () {
                if ($element$$130$$.offsetWidth != $element$$130$$.$__resizeLast__$.width || $element$$130$$.offsetHeight != $element$$130$$.$__resizeLast__$.height) {
                    $element$$130$$.$__resizeLast__$.width = $element$$130$$.offsetWidth, $element$$130$$.$__resizeLast__$.height = $element$$130$$.offsetHeight, $element$$130$$.$__resizeListeners__$.forEach(function ($fn$$16$$) {
                        $fn$$16$$.call($element$$130$$, $e$$76$$);
                    });
                }
            });
        }

        var $attachEvent$$ = document.attachEvent;
        if (!$attachEvent$$) {
            var $requestFrame$$ = function () {
                var $raf$$2$$ = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function ($fn$$17$$) {
                        return window.setTimeout($fn$$17$$, 20);
                    };
                return function ($fn$$18$$) {
                    return $raf$$2$$.call(window, $fn$$18$$);
                };
            }(), $cancelFrame$$ = function () {
                var $cancel$$ = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
                return function ($id$$25$$) {
                    return $cancel$$.call(window, $id$$25$$);
                };
            }()
        }
        window.$addResizeListener$ = function $window$$addResizeListener$$($element$$131$$, $fn$$19$$) {
            $attachEvent$$ ? $element$$131$$.attachEvent("onresize", $fn$$19$$) :
                ($element$$131$$ && $element$$131$$.$__resizeTriggers__$ ||
                ("static" == $goog$style$getComputedStyle$$($element$$131$$, "position") &&
                ($element$$131$$.style.position = "relative"),
                    $element$$131$$.$__resizeLast__$ = {},
                    $element$$131$$.$__resizeListeners__$ = [],
                    ($element$$131$$.$__resizeTriggers__$ = document.createElement("div")).className = "resize-triggers", $element$$131$$.$__resizeTriggers__$.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',
                $element$$131$$ && $element$$131$$.appendChild($element$$131$$.$__resizeTriggers__$), $resetTriggers$$($element$$131$$), $element$$131$$.addEventListener("scroll", $scrollListener$$, !0)), $element$$131$$.$__resizeListeners__$.push($fn$$19$$));
        };
        window.$removeResizeListener$ = function $window$$removeResizeListener$$($element$$132$$, $fn$$20$$) {
            $attachEvent$$ ? $element$$132$$.detachEvent("onresize", $fn$$20$$) : ($element$$132$$.$__resizeListeners__$.splice($element$$132$$.$__resizeListeners__$.indexOf($fn$$20$$), 1), $element$$132$$.$__resizeListeners__$.length || ($element$$132$$.removeEventListener("scroll", $scrollListener$$), $element$$132$$.$__resizeTriggers__$ = !$element$$132$$.removeChild($element$$132$$.$__resizeTriggers__$)));
        };
    }
    ;
    function $viewbix$sdk$helper$JsonHelper$unsafeParseArray$$($s$$36$$) {
        $goog$string$isEmptySafe$$($s$$36$$) && ($s$$36$$ = "[]");
        return $goog$json$unsafeParse$$($s$$36$$);
    }
    ;
    function $viewbix$sdk$helper$ObjectHelper$modifyAllValuesRecursive$$($obj$$114$$, $func$$6$$) {
        ($goog$isArray$$($obj$$114$$) ? $goog$array$forEach$$ : $goog$object$forEach$$)($obj$$114$$, function ($element$$134$$, $index$$75$$) {
            $goog$isArray$$($element$$134$$) || $goog$isObject$$($element$$134$$) ? $viewbix$sdk$helper$ObjectHelper$modifyAllValuesRecursive$$($element$$134$$, $func$$6$$) : $obj$$114$$[$index$$75$$] = $func$$6$$($element$$134$$);
        });
    }
    ;
    function $viewbix$sdk$helper$ArrayHelper$getAsArray$$($obj$$115$$) {
        return $goog$isArray$$($obj$$115$$) ? $obj$$115$$ : [$obj$$115$$];
    }

    function $viewbix$sdk$helper$ArrayHelper$getAsArrayOfObjects$$($JSCompiler_inline_result$$29_JSCompiler_temp$$27_JSCompiler_temp$$28_obj$$116$$) {
        var $key$$102$$ = $viewbix$sdk$Layout$ContainerParamNames$ID$$;
        if (!$goog$isArray$$($JSCompiler_inline_result$$29_JSCompiler_temp$$27_JSCompiler_temp$$28_obj$$116$$)) {
            if (null != $JSCompiler_inline_result$$29_JSCompiler_temp$$27_JSCompiler_temp$$28_obj$$116$$) {
                if (!$goog$isObject$$($JSCompiler_inline_result$$29_JSCompiler_temp$$27_JSCompiler_temp$$28_obj$$116$$) || $goog$isArray$$($JSCompiler_inline_result$$29_JSCompiler_temp$$27_JSCompiler_temp$$28_obj$$116$$)) {
                    var $o$$inline_529$$ = {};
                    $o$$inline_529$$[$key$$102$$] = $JSCompiler_inline_result$$29_JSCompiler_temp$$27_JSCompiler_temp$$28_obj$$116$$;
                    $JSCompiler_inline_result$$29_JSCompiler_temp$$27_JSCompiler_temp$$28_obj$$116$$ = $o$$inline_529$$;
                }
                $JSCompiler_inline_result$$29_JSCompiler_temp$$27_JSCompiler_temp$$28_obj$$116$$ = [$JSCompiler_inline_result$$29_JSCompiler_temp$$27_JSCompiler_temp$$28_obj$$116$$];
            } else {
                $JSCompiler_inline_result$$29_JSCompiler_temp$$27_JSCompiler_temp$$28_obj$$116$$ = [];
            }
        }
        return $JSCompiler_inline_result$$29_JSCompiler_temp$$27_JSCompiler_temp$$28_obj$$116$$;
    }

    function $viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($arr$$84$$) {
        return !$goog$isArrayLike$$($arr$$84$$) || 0 == $arr$$84$$.length;
    }
    ;
    function $viewbix$sdk$helper$StringHelper$splitAndTrim$$($s$$37$$, $opt_delimiter$$) {
        if ($goog$string$isEmptySafe$$($s$$37$$)) {
            return [];
        }
        null != $opt_delimiter$$ || ($opt_delimiter$$ = ",");
        for (var $a$$39$$ = $s$$37$$.split($opt_delimiter$$), $i$$160$$ = 0; $i$$160$$ < $a$$39$$.length; $i$$160$$++) {
            $a$$39$$[$i$$160$$] = $goog$string$trim$$($a$$39$$[$i$$160$$]);
        }
        return $a$$39$$;
    }
    ;
    function $viewbix$sdk$helper$TwitterHelper$isInTwitterCard$$() {
        var $JSCompiler_temp$$987_queryParamValue$$ = $viewbix$sdk$helper$BooleanHelper$convertToBoolean$$($goog$object$get$$($viewbix$sdk$helper$UriHelper$getParameters$$(document.location.href), "twitter")), $referrer$$ = document.referrer, $query$$14$$ = new $goog$Uri$QueryData$$(document.location.search.substring(1));
        $query$$14$$.$containsKey$($viewbix$sdk$track$TrackingParam$HTTP_REFERRER$$) && ($referrer$$ = $query$$14$$.get($viewbix$sdk$track$TrackingParam$HTTP_REFERRER$$));
        $JSCompiler_temp$$987_queryParamValue$$ || ($JSCompiler_temp$$987_queryParamValue$$ = 0 <= (new $goog$Uri$$($referrer$$, !0)).$domain_$.indexOf("twitter.com"));
        return $JSCompiler_temp$$987_queryParamValue$$;
    }

    function $viewbix$sdk$helper$TwitterHelper$sanitizeConfig$$($playerConfig$$) {
        null != $playerConfig$$ && $viewbix$sdk$helper$TwitterHelper$isInTwitterCard$$() && ($playerConfig$$.applications = [], $playerConfig$$.detailsAppId = "", "ctaApps" in $playerConfig$$ && !$goog$string$isEmptySafe$$($playerConfig$$.ctaApps) && ($playerConfig$$.ctaText = ""), $playerConfig$$.preRollApps = "", $playerConfig$$.midRollApps = "", $playerConfig$$.postRollApps = "", $playerConfig$$.bannerApps = "", $playerConfig$$.ctaApps = "", $playerConfig$$.showShareButton = "false", $playerConfig$$.showViewbixBranding =
            "false", $playerConfig$$.bottomLogoUrl = "", $playerConfig$$.bottomLogoLink = "");
    }
    ;
    function $viewbix$sdk$helper$UriHelper$getProtocolAndDomain$$() {
        var $uri$$44$$ = new $goog$Uri$$(document.location.href);
        return $uri$$44$$.$scheme_$ + "://" + $uri$$44$$.$domain_$;
    }

    function $viewbix$sdk$helper$UriHelper$getParameters$$($p$$5_url$$44$$) {
        var $result$$23$$ = {};
        $p$$5_url$$44$$ = $JSCompiler_StaticMethods_getDecodedQuery$$(new $goog$Uri$$($p$$5_url$$44$$)).split("&");
        $goog$array$forEach$$($p$$5_url$$44$$, function ($el$$31_q$$) {
            $el$$31_q$$ = $el$$31_q$$.split("=");
            $result$$23$$[$el$$31_q$$[0]] = $el$$31_q$$[1];
        });
        return $result$$23$$;
    }

    function $viewbix$sdk$helper$UriHelper$objectToEncodedString$$($obj$$117$$) {
        var $result$$24$$ = "", $first$$6$$ = !0;
        $goog$object$forEach$$($obj$$117$$, function ($value$$180$$, $key$$103$$) {
            $first$$6$$ ? ($first$$6$$ = !1, $result$$24$$ += $key$$103$$ + "=" + encodeURIComponent($value$$180$$)) : $result$$24$$ += "&" + $key$$103$$ + "=" + encodeURIComponent($value$$180$$);
        });
        return $result$$24$$;
    }
    ;
    function $viewbix$sdk$helper$WindowHelper$contentLoaded$$($handler$$49$$) {
        function $ready$$() {
            $called$$2$$ || ($called$$2$$ = !0, $handler$$49$$());
        }

        var $called$$2$$ = !1;
        if ("complete" == document.readyState) {
            $handler$$49$$.call(window, "lazy");
        } else {
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", $ready$$, !1);
            } else {
                if (document.attachEvent) {
                    try {
                        var $isFrame$$ = null != window.frameElement;
                    } catch ($e$$77$$) {
                    }
                    if (document.documentElement.doScroll && !$isFrame$$) {
                        var $tryScroll$$ = function $$tryScroll$$$() {
                            if (!$called$$2$$) {
                                try {
                                    document.documentElement.doScroll("left"), $ready$$();
                                } catch ($e$$78$$) {
                                    setTimeout($tryScroll$$, 10);
                                }
                            }
                        };
                        $tryScroll$$();
                    }
                    document.attachEvent("onreadystatechange", function () {
                        "complete" === document.readyState && $ready$$();
                    });
                }
            }
        }
    }
    ;
    function $viewbix$sdk$helper$XhrHelper$$() {
        this.$MAX_RETRIES$ = 2;
        this.$TIMEOUT_INTERVAL$ = 15E3;
        this.$manager_$ = {};
        $goog$object$add$$(this.$manager_$, this.$TIMEOUT_INTERVAL$.toString(),
            new $goog$net$XhrManager$$(this.$MAX_RETRIES$, void 0, void 0, void 0, this.$TIMEOUT_INTERVAL$));
        this.$idGenerator_$ = new $goog$ui$IdGenerator$$;
    }

    $goog$addSingletonGetter$$($viewbix$sdk$helper$XhrHelper$$);
    function $viewbix$sdk$helper$XhrHelper$send$$($endpoint_url$$47$$) {
        var $opt_callback$$10$$, $opt_method$$4$$, $opt_priority$$3$$, $manager_opt_timeout$$, $id$$27_instance$$ = $viewbix$sdk$helper$XhrHelper$$.$getInstance$();
        $manager_opt_timeout$$ = $manager_opt_timeout$$ || $id$$27_instance$$.$TIMEOUT_INTERVAL$;
        $manager_opt_timeout$$ in $id$$27_instance$$.$manager_$ || $goog$object$add$$($id$$27_instance$$.$manager_$, $manager_opt_timeout$$.toString(), new $goog$net$XhrManager$$($id$$27_instance$$.$MAX_RETRIES$, void 0, void 0, void 0, $manager_opt_timeout$$));
        $manager_opt_timeout$$ = $goog$object$get$$($id$$27_instance$$.$manager_$, $manager_opt_timeout$$.toString());
        $endpoint_url$$47$$ = new $goog$Uri$$($endpoint_url$$47$$);
        var $id$$27_instance$$ = ":" + ($id$$27_instance$$.$idGenerator_$.$nextId_$++).toString(36), $headers$$2$$ = new $goog$structs$Map$$;
        $opt_method$$4$$ = $opt_method$$4$$ || "GET";
        $opt_priority$$3$$ = $opt_priority$$3$$ || 50;
        $opt_callback$$10$$ = $opt_callback$$10$$ || $goog$nullFunction$$;
        switch ($opt_method$$4$$) {
            case "GET":
                $headers$$2$$.set("Accept", "application/json");
                break;
            case "POST":
                $headers$$2$$.set("Content-Type", "application/json");
                break;
            default:
                throw "Invalid method";
                ;
        }
        var $postData$$;
        $goog$isString$$(void 0) && ($postData$$ = void 0);
        $manager_opt_timeout$$.send($id$$27_instance$$, $endpoint_url$$47$$.toString(), $opt_method$$4$$, $postData$$, $headers$$2$$, $opt_priority$$3$$, function ($e$$82_xhrIo$$12$$) {
            $e$$82_xhrIo$$12$$ = $e$$82_xhrIo$$12$$.currentTarget;
            if ($JSCompiler_StaticMethods_isSuccess$$($e$$82_xhrIo$$12$$)) {
                var $resultText$$;
                try {
                    $resultText$$ = $e$$82_xhrIo$$12$$.$xhr_$ ? $e$$82_xhrIo$$12$$.$xhr_$.responseText : "";
                } catch ($e$$inline_536$$) {
                    $goog$log$fine$$($e$$82_xhrIo$$12$$.$logger_$, "Can not get responseText: " + $e$$inline_536$$.message), $resultText$$ = "";
                }
                if ($goog$isString$$($resultText$$) && !$goog$string$isEmptySafe$$($resultText$$)) {
                    var $result$$26$$ = "";
                    try {
                        $resultText$$ = $resultText$$.replace(/\u2028/g, ""), $result$$26$$ = $goog$json$parse$$($resultText$$), $goog$isFunction$$(void 0) && ($result$$26$$ = (void 0)($result$$26$$));
                    } catch ($err$$16$$) {
                        $result$$26$$ = $resultText$$;
                    }
                    $opt_callback$$10$$($result$$26$$, $e$$82_xhrIo$$12$$);
                } else {
                    $opt_callback$$10$$($resultText$$, $e$$82_xhrIo$$12$$);
                }
            } else {
                $opt_callback$$10$$(null, $e$$82_xhrIo$$12$$);
            }
        }, void 0);
    }
    ;
    function $viewbix$sdk$helper$GuidHelper$padLeft_$$($paddingString$$, $width$$17$$, $replacementChar$$) {
        return $paddingString$$.length >= $width$$17$$ ? $paddingString$$ : $viewbix$sdk$helper$GuidHelper$padLeft_$$($replacementChar$$ + $paddingString$$, $width$$17$$, $replacementChar$$ || " ");
    }

    function $viewbix$sdk$helper$GuidHelper$s4_$$($hexadecimalResult_number$$) {
        $hexadecimalResult_number$$ = $hexadecimalResult_number$$.toString(16);
        return $viewbix$sdk$helper$GuidHelper$padLeft_$$($hexadecimalResult_number$$, 4, "0");
    }

    function $viewbix$sdk$helper$GuidHelper$guid_$$() {
        var $currentDateMilliseconds$$ = (new Date).getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function ($currentChar$$) {
            var $randomChar$$ = ($currentDateMilliseconds$$ + 16 * Math.random()) % 16 | 0;
            $currentDateMilliseconds$$ = Math.floor($currentDateMilliseconds$$ / 16);
            return ("x" === $currentChar$$ ? $randomChar$$ : $randomChar$$ & 7 | 8).toString(16);
        });
    }

    function $viewbix$sdk$helper$GuidHelper$newGuid$$() {
        var $opt_addDashes$$ = !0, $opt_addDashes$$ = $goog$isBoolean$$($opt_addDashes$$) ? $opt_addDashes$$ : !0, $JSCompiler_temp$$980_buffer$$inline_1125_guid$$1_hasCrypto$$inline_538$$, $hasRandomValues$$inline_539$$ = ($JSCompiler_temp$$980_buffer$$inline_1125_guid$$1_hasCrypto$$inline_538$$ = "undefined" != typeof window.crypto) && "undefined" != typeof window.crypto.getRandomValues;
        $JSCompiler_temp$$980_buffer$$inline_1125_guid$$1_hasCrypto$$inline_538$$ && $hasRandomValues$$inline_539$$ ? ($JSCompiler_temp$$980_buffer$$inline_1125_guid$$1_hasCrypto$$inline_538$$ = new window.Uint16Array(8), window.crypto.getRandomValues($JSCompiler_temp$$980_buffer$$inline_1125_guid$$1_hasCrypto$$inline_538$$), $JSCompiler_temp$$980_buffer$$inline_1125_guid$$1_hasCrypto$$inline_538$$ = [$viewbix$sdk$helper$GuidHelper$s4_$$($JSCompiler_temp$$980_buffer$$inline_1125_guid$$1_hasCrypto$$inline_538$$[0]) +
        $viewbix$sdk$helper$GuidHelper$s4_$$($JSCompiler_temp$$980_buffer$$inline_1125_guid$$1_hasCrypto$$inline_538$$[1]), $viewbix$sdk$helper$GuidHelper$s4_$$($JSCompiler_temp$$980_buffer$$inline_1125_guid$$1_hasCrypto$$inline_538$$[2]), $viewbix$sdk$helper$GuidHelper$s4_$$($JSCompiler_temp$$980_buffer$$inline_1125_guid$$1_hasCrypto$$inline_538$$[3]), $viewbix$sdk$helper$GuidHelper$s4_$$($JSCompiler_temp$$980_buffer$$inline_1125_guid$$1_hasCrypto$$inline_538$$[4]), $viewbix$sdk$helper$GuidHelper$s4_$$($JSCompiler_temp$$980_buffer$$inline_1125_guid$$1_hasCrypto$$inline_538$$[5]) +
        $viewbix$sdk$helper$GuidHelper$s4_$$($JSCompiler_temp$$980_buffer$$inline_1125_guid$$1_hasCrypto$$inline_538$$[6]) + $viewbix$sdk$helper$GuidHelper$s4_$$($JSCompiler_temp$$980_buffer$$inline_1125_guid$$1_hasCrypto$$inline_538$$[7])].join("-")) : $JSCompiler_temp$$980_buffer$$inline_1125_guid$$1_hasCrypto$$inline_538$$ = $viewbix$sdk$helper$GuidHelper$guid_$$();
        return $opt_addDashes$$ ? $JSCompiler_temp$$980_buffer$$inline_1125_guid$$1_hasCrypto$$inline_538$$ : $JSCompiler_temp$$980_buffer$$inline_1125_guid$$1_hasCrypto$$inline_538$$.replace(/\-/g, "");
    }
    ;
    function $viewbix$sdk$helper$YouTubeHelper$extractId$$($id$$28_url$$49$$) {
        if ($goog$string$isEmptySafe$$($id$$28_url$$49$$)) {
            return null;
        }
        var $start$$24$$ = $viewbix$sdk$helper$YouTubeHelper$getYouTubeIdOffset$$($id$$28_url$$49$$);
        return -1 != $start$$24$$ ? ($id$$28_url$$49$$ = $id$$28_url$$49$$.substr($start$$24$$, 11), 11 == $id$$28_url$$49$$.length ? $id$$28_url$$49$$ : null) : 11 == $id$$28_url$$49$$.length && -1 == $id$$28_url$$49$$.indexOf("/") ? $id$$28_url$$49$$ : 22 < $id$$28_url$$49$$.length && 0 <= $id$$28_url$$49$$.indexOf("youtube.com") && $id$$28_url$$49$$.lastIndexOf("/") == $id$$28_url$$49$$.length - 12 ? $id$$28_url$$49$$.substr(-11) : null;
    }

    function $viewbix$sdk$helper$YouTubeHelper$getYouTubeIdOffset$$($url$$50$$) {
        if ($goog$string$isEmptySafe$$($url$$50$$)) {
            return -1;
        }
        var $start$$25$$ = -1, $index$$76$$;
        $index$$76$$ = $url$$50$$.indexOf("://gdata.youtube.com/feeds/api/videos/");
        -1 != $index$$76$$ ? $start$$25$$ = $index$$76$$ + 38 : ($index$$76$$ = $url$$50$$.indexOf("://gdata.youtube.com/feeds/videos/"), -1 != $index$$76$$ ? $start$$25$$ = $index$$76$$ + 34 : ($index$$76$$ = $url$$50$$.indexOf("youtube.com/watch?v="), -1 != $index$$76$$ ? $start$$25$$ = $index$$76$$ + 20 : ($index$$76$$ = $url$$50$$.indexOf("youtube.com/v/"), -1 != $index$$76$$ ? $start$$25$$ = $index$$76$$ + 14 : ($index$$76$$ = $url$$50$$.indexOf("youtube.com/vi/"), -1 != $index$$76$$ ? $start$$25$$ =
            $index$$76$$ + 15 : ($index$$76$$ = $url$$50$$.indexOf("youtube.com/watch#!v="), -1 != $index$$76$$ ? $start$$25$$ = $index$$76$$ + 21 : ($index$$76$$ = $url$$50$$.indexOf("youtu.be/"), -1 != $index$$76$$ ? $start$$25$$ = $index$$76$$ + 9 : ($index$$76$$ = $url$$50$$.indexOf("youtube.com/watch?feature=player_embedded&v="), -1 != $index$$76$$ && ($start$$25$$ = $index$$76$$ + 44))))))));
        return $start$$25$$;
    }

    function $viewbix$sdk$helper$YouTubeHelper$normalizeUrl$$($id$$29_url$$51$$) {
        $id$$29_url$$51$$ = $viewbix$sdk$helper$YouTubeHelper$extractId$$($id$$29_url$$51$$);
        return null === $id$$29_url$$51$$ ? null : "http://www.youtube.com/watch?v=" + $id$$29_url$$51$$;
    }

    function $viewbix$sdk$helper$YouTubeHelper$isYouTubeThumbnail$$($url$$52$$) {
        return $goog$string$isEmptySafe$$($url$$52$$) ? !1 : 0 <= $url$$52$$.toLowerCase().indexOf("img.youtube.com") || 0 <= $url$$52$$.toLowerCase().indexOf("i.ytimg.com");
    }
    ;
    function $viewbix$sdk$menu$Menu$$($element$$135$$, $params$$, $apps$$) {
        $goog$events$EventTarget$$.call(this);
        this.element = $element$$135$$;
        this.$apps$ = $apps$$;
        this.$overflowElement$ = $viewbix$sdk$menu$Menu$MenuConfigurationName$OVERFLOW$$ in $params$$ ? $goog$dom$getElementHelper_$$(document, $params$$[$viewbix$sdk$menu$Menu$MenuConfigurationName$OVERFLOW$$]) : null;
        this.$overflowFunction$ = $viewbix$sdk$menu$Menu$MenuConfigurationName$OVERFLOW_FUNCTION$$ in $params$$ ? $params$$[$viewbix$sdk$menu$Menu$MenuConfigurationName$OVERFLOW_FUNCTION$$] : null;
        this.$shareFunction$ = $viewbix$sdk$menu$Menu$MenuConfigurationName$SHARE_FUNCTION$$ in $params$$ ? $params$$[$viewbix$sdk$menu$Menu$MenuConfigurationName$SHARE_FUNCTION$$] : null;
        this.$maxItems$ = "maxItems" in $params$$ ? $params$$.maxItems : $goog$dom$isElement$$(this.$overflowElement$) ? 6 : 99;
        $JSCompiler_StaticMethods_buildDom$$(this);
        $goog$events$listen$$(this.element, "click", this.$onMenuClick$, !1, this);
        $goog$dom$isElement$$(this.$overflowElement$) && $goog$events$listen$$(this.$overflowElement$, "click", this.$onMenuClick$, !1, this);
    }

    $goog$inherits$$($viewbix$sdk$menu$Menu$$, $goog$events$EventTarget$$);
    $viewbix$sdk$menu$Menu$$.prototype.$onMenuClick$ = function $$viewbix$sdk$menu$Menu$$$$$onMenuClick$$($app_event$$2$$) {
        for (var $p$$6$$ = $app_event$$2$$.target, $appId$$4$$ = null; $p$$6$$ != document;) {
            if ($appId$$4$$ = $p$$6$$.getAttribute("data-app-id"), $goog$string$isEmptySafe$$($appId$$4$$)) {
                $p$$6$$ = $goog$dom$getParentElement$$($p$$6$$);
            } else {
                break;
            }
        }
        "706289ed-8409-4ebb-ad25-909d98576fad" == $appId$$4$$ ? $goog$isFunction$$(this.$overflowFunction$) && this.$overflowFunction$($appId$$4$$) : "c22951af-d11e-4252-8f30-2ed1ac30eb88" == $appId$$4$$ ? $goog$isFunction$$(this.$shareFunction$) && this.$shareFunction$($app_event$$2$$.target.parentElement, $appId$$4$$) : ($app_event$$2$$ = $goog$array$find$$(this.$apps$, function ($a$$40$$) {
            return 0 == $goog$string$caseInsensitiveCompare$$($a$$40$$.id, $appId$$4$$);
        }, this), null != $app_event$$2$$ && $goog$events$dispatchEvent$$($viewbix$sdk$Layout$getLayoutInstance$$(), new $viewbix$sdk$event$MenuEvent$$("MENU_CLICKED", this, $app_event$$2$$, "APP_CONFIG")));
    };
    var $viewbix$sdk$menu$Menu$MenuConfigurationName$OVERFLOW$$ = "overflow", $viewbix$sdk$menu$Menu$MenuConfigurationName$OVERFLOW_FUNCTION$$ = "overflowFunction", $viewbix$sdk$menu$Menu$MenuConfigurationName$SHARE_FUNCTION$$ = "shareFunction";

    function $viewbix$sdk$menu$StandardMenu$$($root$$22$$, $configuration$$4$$, $apps$$1$$) {
        $viewbix$sdk$menu$Menu$$.call(this, $root$$22$$, $configuration$$4$$, $apps$$1$$);
        this.$visibleApps$ = [];
        this.$overflowApps$ = [];
        this.$firstOverflowAppIndex$ = NaN;
    }

    $goog$inherits$$($viewbix$sdk$menu$StandardMenu$$, $viewbix$sdk$menu$Menu$$);
    function $JSCompiler_StaticMethods_buildDom$$($JSCompiler_StaticMethods_buildDom$self$$) {
        $JSCompiler_StaticMethods_buildDom$self$$.element.innerHTML = "";
        $goog$dom$isElement$$($JSCompiler_StaticMethods_buildDom$self$$.$overflowElement$) && ($JSCompiler_StaticMethods_buildDom$self$$.$overflowElement$.innerHTML = "");
        $JSCompiler_StaticMethods_buildDom$self$$.$visibleApps$ = [];
        $JSCompiler_StaticMethods_buildDom$self$$.$overflowApps$ = [];
        $JSCompiler_StaticMethods_buildDom$self$$.$firstOverflowAppIndex$ = NaN;
        if ($JSCompiler_StaticMethods_buildDom$self$$.$apps$.length > $JSCompiler_StaticMethods_buildDom$self$$.$maxItems$ && $goog$dom$isElement$$($JSCompiler_StaticMethods_buildDom$self$$.$overflowElement$)) {
            $JSCompiler_StaticMethods_buildDom$self$$.$firstOverflowAppIndex$ = Math.max(0, $JSCompiler_StaticMethods_buildDom$self$$.$maxItems$ - 1);
            $JSCompiler_StaticMethods_buildDom$self$$.$overflowApps$ = $goog$array$slice$$($JSCompiler_StaticMethods_buildDom$self$$.$apps$, $JSCompiler_StaticMethods_buildDom$self$$.$firstOverflowAppIndex$);
            0 < $JSCompiler_StaticMethods_buildDom$self$$.$firstOverflowAppIndex$ && ($JSCompiler_StaticMethods_buildDom$self$$.$visibleApps$ = $goog$array$slice$$($JSCompiler_StaticMethods_buildDom$self$$.$apps$, 0, $JSCompiler_StaticMethods_buildDom$self$$.$firstOverflowAppIndex$));
            var $moreApp$$ = {
                id: "706289ed-8409-4ebb-ad25-909d98576fad",
                internalId: "706289ed-8409-4ebb-ad25-909d98576fad",
                order: 999,
                icon: "/storage/content/icon/svg/more.svg",
                label: "More",
                showInMenu: "true"
            };
            0 == $JSCompiler_StaticMethods_buildDom$self$$.$firstOverflowAppIndex$ && ($moreApp$$.label = "Menu");
            $JSCompiler_StaticMethods_buildDom$self$$.$visibleApps$.push($moreApp$$);
            $soy$renderElement$$($JSCompiler_StaticMethods_buildDom$self$$.$overflowElement$, {
                $menuClassName$: "vbx-menu",
                $apps$: $JSCompiler_StaticMethods_buildDom$self$$.$overflowApps$
            });
        } else {
            $JSCompiler_StaticMethods_buildDom$self$$.$visibleApps$ = $goog$array$slice$$($JSCompiler_StaticMethods_buildDom$self$$.$apps$, 0, $JSCompiler_StaticMethods_buildDom$self$$.$maxItems$);
        }
        $soy$renderElement$$($JSCompiler_StaticMethods_buildDom$self$$.element, {
            $menuClassName$: "vbx-menu",
            $apps$: $JSCompiler_StaticMethods_buildDom$self$$.$visibleApps$
        });
    }
    ;
    function $viewbix$sdk$XpcMessage$$($name$$90$$, $opt_data$$6$$) {
        this.name = $name$$90$$;
        this.data = null != $opt_data$$6$$ ? $opt_data$$6$$ : {};
    }

    function $viewbix$sdk$XpcMessage$createXpcPayload$$($name$$91$$, $opt_data$$7$$) {
        return {name: $name$$91$$, data: null != $opt_data$$7$$ ? $opt_data$$7$$ : {}};
    }

    function $viewbix$sdk$XpcMessage$fromXpcPayload$$($payload$$30$$) {
        var $objPayload$$ = $payload$$30$$;
        $goog$isString$$($payload$$30$$) && ($objPayload$$ = $goog$json$parse$$($payload$$30$$));
        return new $viewbix$sdk$XpcMessage$$($objPayload$$.name, $objPayload$$.data);
    }
    ;
    function $viewbix$sdk$track$InteractionData$$($id$$30$$, $control$$, $location$$22$$, $targetIsApp$$, $target$$58$$, $icon$$1$$, $label$$7$$, $scope$$6$$) {
        this.id = $id$$30$$;
        this.control = $control$$;
        this.location = $location$$22$$;
        this.$targetIsApp$ = $targetIsApp$$;
        this.target = $target$$58$$;
        this.icon = $icon$$1$$;
        this.label = $label$$7$$;
        this.scope = $scope$$6$$;
    }

    var $viewbix$sdk$track$InteractionData$Id$$ = {
        FULLSCREEN: "fullscreen",
        CTA_BUTTON: "ctabutton",
        SHARE: "share",
        SHARE_FACEBOOK: "sharefacebook",
        SHARE_TWITTER: "sharetwitter",
        CUSTOM_LOGO: "customlogo",
        POWERED_BY_VIEWBIX: "poweredbyviewbix",
        BANNER2: "banner2",
        VIDEO1: "video1"
    };

    function $viewbix$sdk$track$RollData$$($type$$134$$, $allowSkip$$, $action$$) {
        this.type = $type$$134$$;
        this.$allowSkip$ = $allowSkip$$;
        this.action = $action$$;
    }
    ;
    function $viewbix$sdk$track$Snowplow$$() {
        $goog$events$EventTarget$$.call(this);
        this.$eventTrackingMap_$ = {};
        $JSCompiler_StaticMethods_setUpInteractionEvent$$(this, $viewbix$sdk$track$TrackEventType$USER_CLICK_CALL_TO_ACTION$$, [$viewbix$sdk$track$Snowplow$getVideoContext$$, $viewbix$sdk$track$Snowplow$getPlayerContext$$, $viewbix$sdk$track$Snowplow$getAppContext$$]);
        $JSCompiler_StaticMethods_setUpInteractionEvent$$(this, $viewbix$sdk$track$TrackEventType$USER_CLICK_LOGO$$, [$viewbix$sdk$track$Snowplow$getVideoContext$$, $viewbix$sdk$track$Snowplow$getPlayerContext$$, $viewbix$sdk$track$Snowplow$getAppContext$$]);
        $JSCompiler_StaticMethods_setUpInteractionEvent$$(this, $viewbix$sdk$track$TrackEventType$USER_CLICK_SLIDER_IMAGE$$, [$viewbix$sdk$track$Snowplow$getVideoContext$$, $viewbix$sdk$track$Snowplow$getPlayerContext$$, $viewbix$sdk$track$Snowplow$getAppContext$$]);
        $JSCompiler_StaticMethods_setUpInteractionEvent$$(this, $viewbix$sdk$track$TrackEventType$USER_CLICK_MENU_ITEM$$, [$viewbix$sdk$track$Snowplow$getVideoContext$$, $viewbix$sdk$track$Snowplow$getPlayerContext$$, $viewbix$sdk$track$Snowplow$getListContext$$, $viewbix$sdk$track$Snowplow$getAppContext$$]);
        $JSCompiler_StaticMethods_setUpInteractionEvent$$(this, $viewbix$sdk$track$TrackEventType$USER_CLICK_VIDEO_CALL_TO_ACTION$$, [$viewbix$sdk$track$Snowplow$getVideoContext$$, $viewbix$sdk$track$Snowplow$getPlayerContext$$]);
        $JSCompiler_StaticMethods_setUpInteractionEvent$$(this, $viewbix$sdk$track$TrackEventType$USER_NAVIGATE_TO_PAGE$$, [$viewbix$sdk$track$Snowplow$getVideoContext$$, $viewbix$sdk$track$Snowplow$getPlayerContext$$, $viewbix$sdk$track$Snowplow$getAppContext$$]);
        $JSCompiler_StaticMethods_setUpVideoProgressEvent$$(this, $viewbix$sdk$track$TrackEventType$VSTART_UNIQUE$$);
        $JSCompiler_StaticMethods_setUpVideoProgressEvent$$(this, $viewbix$sdk$track$TrackEventType$VTHRESH_100$$);
        $JSCompiler_StaticMethods_setUpVideoProgressEvent$$(this, $viewbix$sdk$track$TrackEventType$VTHRESH_25$$);
        $JSCompiler_StaticMethods_setUpVideoProgressEvent$$(this, $viewbix$sdk$track$TrackEventType$VTHRESH_50$$);
        $JSCompiler_StaticMethods_setUpVideoProgressEvent$$(this, $viewbix$sdk$track$TrackEventType$VTHRESH_75$$);
        $goog$object$add$$(this.$eventTrackingMap_$, $viewbix$sdk$track$TrackEventType$IMPRESSION$$, {
            schema: "iglu:com.viewbix/impression/jsonschema/1-0-0",
            contexts: [$viewbix$sdk$track$Snowplow$getVideoContext$$, $viewbix$sdk$track$Snowplow$getPlayerContext$$, $viewbix$sdk$track$Snowplow$getPlayerConfigContext$$, $viewbix$sdk$track$Snowplow$getPlayerAppContexts$$, $viewbix$sdk$track$Snowplow$getAppAssociationContexts$$],
            data: $viewbix$sdk$track$Snowplow$getImpressionData$$
        });
        $JSCompiler_StaticMethods_setUpRollEvent$$(this, $viewbix$sdk$track$TrackEventType$SYSTEM_SHOW_PREROLL_APP$$);
        $JSCompiler_StaticMethods_setUpRollEvent$$(this, $viewbix$sdk$track$TrackEventType$SYSTEM_SHOW_MIDROLL_APP$$);
        $JSCompiler_StaticMethods_setUpRollEvent$$(this, $viewbix$sdk$track$TrackEventType$SYSTEM_SHOW_POSTROLL_APP$$);
        $JSCompiler_StaticMethods_setUpRollEvent$$(this, $viewbix$sdk$track$TrackEventType$USER_APP_SKIP$$);
        $JSCompiler_StaticMethods_setUpRollEvent$$(this, $viewbix$sdk$track$TrackEventType$USER_ROLLAPP_COMPLETE$$);
        $JSCompiler_StaticMethods_setUpAppInteractionEvent$$(this, $viewbix$sdk$track$TrackEventType$USER_APP_SELECT$$, [$viewbix$sdk$track$Snowplow$getVideoContext$$, $viewbix$sdk$track$Snowplow$getPlayerContext$$, $viewbix$sdk$track$Snowplow$getAppContext$$]);
        $JSCompiler_StaticMethods_setUpAppInteractionEvent$$(this, $viewbix$sdk$track$TrackEventType$USER_APP_DESELECT$$, [$viewbix$sdk$track$Snowplow$getVideoContext$$, $viewbix$sdk$track$Snowplow$getPlayerContext$$, $viewbix$sdk$track$Snowplow$getAppContext$$]);
        $JSCompiler_StaticMethods_setUpAppInteractionEvent$$(this, $viewbix$sdk$track$TrackEventType$USER_APP_COMPLETE$$, [$viewbix$sdk$track$Snowplow$getVideoContext$$, $viewbix$sdk$track$Snowplow$getPlayerContext$$, $viewbix$sdk$track$Snowplow$getAppContext$$]);
        $JSCompiler_StaticMethods_setUpAppInteractionEvent$$(this, $viewbix$sdk$track$TrackEventType$USER_APP_LOAD$$, [$viewbix$sdk$track$Snowplow$getVideoContext$$, $viewbix$sdk$track$Snowplow$getPlayerContext$$, $viewbix$sdk$track$Snowplow$getAppContext$$]);
        $JSCompiler_StaticMethods_setUpAppInteractionEvent$$(this, $viewbix$sdk$track$TrackEventType$USER_APP_RENDER$$, [$viewbix$sdk$track$Snowplow$getVideoContext$$, $viewbix$sdk$track$Snowplow$getPlayerContext$$, $viewbix$sdk$track$Snowplow$getAppContext$$, $viewbix$sdk$track$Snowplow$getAppConfigContext$$]);
    }

    $goog$inherits$$($viewbix$sdk$track$Snowplow$$, $goog$events$EventTarget$$);
    $goog$addSingletonGetter$$($viewbix$sdk$track$Snowplow$$);
    function $viewbix$sdk$track$Snowplow$getPlayerAppContexts$$() {
        var $contexts$$ = [], $apps$$2$$ = window.getPlayerConfigurations().applications;
        $goog$array$forEach$$($apps$$2$$, function ($context$$8_contextInfo$$) {
            $context$$8_contextInfo$$ = null != $context$$8_contextInfo$$ ? {
                schema: "iglu:com.viewbix/player_app_context/jsonschema/1-0-0",
                data: $viewbix$sdk$track$Snowplow$adaptContextToSchema$$($context$$8_contextInfo$$, "id internalId component order showInMenu icon label".split(" "), ["showInMenu"], [], ["order"])
            } : null;
            null != $context$$8_contextInfo$$ && $contexts$$.push($context$$8_contextInfo$$);
        });
        return $contexts$$;
    }

    function $viewbix$sdk$track$Snowplow$adaptContextToSchema$$($context$$9$$, $schemaProperties$$1$$, $booleanProperties$$1$$, $numberProperties$$1$$, $integerProperties$$1$$) {
        var $newContext$$ = {};
        $goog$array$forEach$$($goog$object$getKeys$$($context$$9$$), function ($key$$105$$) {
            $goog$array$contains$$($schemaProperties$$1$$, $key$$105$$) && $goog$object$add$$($newContext$$, $key$$105$$, $context$$9$$[$key$$105$$]);
            if ($goog$array$contains$$($booleanProperties$$1$$, $key$$105$$) && $goog$isString$$($newContext$$[$key$$105$$])) {
                $newContext$$[$key$$105$$] = "true" === $newContext$$[$key$$105$$];
            } else {
                if ($goog$array$contains$$($numberProperties$$1$$, $key$$105$$) && $goog$isString$$($newContext$$[$key$$105$$])) {
                    var $property$$inline_543_result$$inline_544_result$$inline_547$$ = $newContext$$[$key$$105$$];
                    if (null != $property$$inline_543_result$$inline_544_result$$inline_547$$) {
                        var $num$$inline_1128$$ = Number($property$$inline_543_result$$inline_544_result$$inline_547$$), $property$$inline_543_result$$inline_544_result$$inline_547$$ = 0 == $num$$inline_1128$$ && /^[\s\xa0]*$/.test($property$$inline_543_result$$inline_544_result$$inline_547$$) ? NaN : $num$$inline_1128$$;
                        isNaN($property$$inline_543_result$$inline_544_result$$inline_547$$) && ($property$$inline_543_result$$inline_544_result$$inline_547$$ = null);
                    } else {
                        $property$$inline_543_result$$inline_544_result$$inline_547$$ = null;
                    }
                    $newContext$$[$key$$105$$] = $property$$inline_543_result$$inline_544_result$$inline_547$$;
                } else {
                    $goog$array$contains$$($integerProperties$$1$$, $key$$105$$) && $goog$isString$$($newContext$$[$key$$105$$]) && ($property$$inline_543_result$$inline_544_result$$inline_547$$ = $goog$string$parseInt$$($newContext$$[$key$$105$$]), isNaN($property$$inline_543_result$$inline_544_result$$inline_547$$) && ($property$$inline_543_result$$inline_544_result$$inline_547$$ = null), $newContext$$[$key$$105$$] = $property$$inline_543_result$$inline_544_result$$inline_547$$);
                }
            }
        });
        return $newContext$$;
    }

    function $viewbix$sdk$track$Snowplow$getAppAssociationContexts$$() {
        var $contexts$$1$$ = [], $playerConfigs$$1$$ = window.getPlayerConfigurations();
        $goog$array$forEach$$(["bannerApps", "ctaApps", "midRollApps", "postRollApps", "preRollApps"], function ($appAssociationProperty$$) {
            var $appAssociations_appAssociationsString$$ = $playerConfigs$$1$$[$appAssociationProperty$$];
            $goog$string$isEmptySafe$$($appAssociations_appAssociationsString$$) || ($appAssociations_appAssociationsString$$ = $goog$json$parse$$($appAssociations_appAssociationsString$$), $goog$array$forEach$$($appAssociations_appAssociationsString$$, function ($appAssociation_context$$10$$) {
                $appAssociation_context$$10$$ = null != $appAssociation_context$$10$$ ? {
                    schema: "iglu:com.viewbix/app_association_context/jsonschema/1-0-0",
                    data: $viewbix$sdk$track$Snowplow$adaptContextToSchema$$($appAssociation_context$$10$$, ["playerAppInternalId", "appPlacement", "allowSkip", "prompt", "startTime"], ["allowSkip"], ["startTime"], [])
                } : null;
                if (null != $appAssociation_context$$10$$) {
                    var $appPlacement_re$$inline_551$$;
                    $appPlacement_re$$inline_551$$ = new RegExp($goog$string$regExpEscape$$("Apps"), "");
                    $appPlacement_re$$inline_551$$ = $appAssociationProperty$$.replace($appPlacement_re$$inline_551$$, "");
                    $goog$object$add$$($appAssociation_context$$10$$.data, "appPlacement", $appPlacement_re$$inline_551$$);
                    $contexts$$1$$.push($appAssociation_context$$10$$);
                }
            }));
        });
        return $contexts$$1$$;
    }

    function $viewbix$sdk$track$Snowplow$getAppContext$$($opt_trackingData$$1$$) {
        return null != $opt_trackingData$$1$$ && null != $opt_trackingData$$1$$.$application$ ? {
            schema: "iglu:com.viewbix/app_context/jsonschema/1-0-0",
            data: {app: $opt_trackingData$$1$$.$application$.component, appId: $opt_trackingData$$1$$.$application$.id}
        } : null;
    }

    function $viewbix$sdk$track$Snowplow$getListContext$$($opt_trackingData$$2$$) {
        if (null != $opt_trackingData$$2$$ && null != $opt_trackingData$$2$$.$menu$ && null != $opt_trackingData$$2$$.$menu$.$apps$ && null != $opt_trackingData$$2$$.$application$) {
            var $selectedAppId$$ = $opt_trackingData$$2$$.$application$.id, $firstVisibleApp_menuElements$$ = $opt_trackingData$$2$$.$menu$.element.children[0].children, $lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$ = $firstVisibleApp_menuElements$$.length - ($opt_trackingData$$2$$.$menu$.$maxItems$ <= $opt_trackingData$$2$$.$menu$.$apps$.length ? 1 : 0), $appInMenu$$ = $goog$array$find$$($firstVisibleApp_menuElements$$, function ($element$$136$$) {
                return $element$$136$$.getAttribute("data-app-id") == $selectedAppId$$;
            });
            null == $appInMenu$$ && null != $opt_trackingData$$2$$.$menu$.$overflowElement$ && 0 < $opt_trackingData$$2$$.$menu$.$overflowElement$.children.length && ($firstVisibleApp_menuElements$$ = $opt_trackingData$$2$$.$menu$.$overflowElement$.children[0].children, $appInMenu$$ = $goog$array$find$$($firstVisibleApp_menuElements$$, function ($element$$137$$) {
                return $element$$137$$.getAttribute("data-app-id") == $selectedAppId$$;
            }), null != $appInMenu$$ && ($lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$ = $firstVisibleApp_menuElements$$.length));
            var $lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$ = $lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$ - 1, $firstVisibleAppId$$ = $firstVisibleApp_menuElements$$[0].getAttribute("data-app-id"), $lastVisibleAppId$$ = $firstVisibleApp_menuElements$$[$lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$].getAttribute("data-app-id"), $firstVisibleApp_menuElements$$ = $goog$array$find$$($opt_trackingData$$2$$.$menu$.$apps$, function ($element$$138$$) {
                return $element$$138$$.id == $firstVisibleAppId$$;
            }), $lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$ = $goog$array$find$$($opt_trackingData$$2$$.$menu$.$apps$, function ($element$$139$$) {
                return $element$$139$$.id == $lastVisibleAppId$$;
            });
            return {
                schema: "iglu:com.viewbix/list_context/jsonschema/1-0-0",
                data: {
                    numItems: $opt_trackingData$$2$$.$menu$.$apps$.length,
                    index: $opt_trackingData$$2$$.$application$.order - 1,
                    firstVisibleItem: $firstVisibleApp_menuElements$$.order - 1,
                    lastVisibleItem: $lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$.order - 1
                }
            };
        }
        return null;
    }

    function $viewbix$sdk$track$Snowplow$getAppConfigContext$$($opt_trackingData$$3$$) {
        return null != $opt_trackingData$$3$$ && null != $opt_trackingData$$3$$.$application$ ? {
            schema: "iglu:com.viewbix/app_config_context/jsonschema/1-0-0",
            data: $viewbix$sdk$track$Snowplow$adaptContextToSchema$$($opt_trackingData$$3$$.$application$, "address apiKey artist bool1 checkboxLabel commentsLabel coupon document emails followLink form from htmlForm icon image includeCheckbox includeComments instructions label listIds message navLink pageSize password query showInMenu submitText success symbol text1 text2 text3 thumbnailSize thumbnailWidth title tokenName units url username zoom".split(" "),
                ["bool1", "includeCheckbox", "includeComments", "showInMenu"], ["pageSize", "thumbnailWidth", "zoom"], [])
        } : null;
    }

    function $viewbix$sdk$track$Snowplow$getPlayerConfigContext$$() {
        var $playerConfigurations$$ = getPlayerConfigurations();
        "applications" in $playerConfigurations$$ && delete $playerConfigurations$$.applications;
        return {
            schema: "iglu:com.viewbix/player_config_context/jsonschema/1-0-0",
            data: $viewbix$sdk$track$Snowplow$adaptContextToSchema$$($playerConfigurations$$, "affiliateRegex deleted locked videoEmailUrl tinyUrl detailsAppId defaultTwitterMessage facebookSharePageUrl playerId memberId videoUrl videoThumbnailUrl title ctaText ctaLink backgroundColor backButton|buttonBackgroundColor0 backButton|buttonBackgroundColor1 titleTextFormatColor ctaButtonBackgroundColor ctaButton|buttonBackgroundColor0 ctaButtonButtonTextFormatColor standardTextFormatFont cornerRadius customLogoUrl customLogoLink scaleLogoToTitleBar backgroundImage bottomLogoUrl bottomLogoLink showFacebookButton showTwitterButton showShareButton playVideoInApps backToVideoText showQualityButton useYouTubeHighQuality showViewbixBranding shareASaleAffiliateId videoLink keepControlsVisible fbConversionPixel".split(" "),
                "deleted locked scaleLogoToTitleBar showFacebookButton showTwitterButton showShareButton playVideoInApps showQualityButton useYouTubeHighQuality showViewbixBranding keepControlsVisible".split(" "), "backgroundColor backButton|buttonBackgroundColor0 backButton|buttonBackgroundColor1 titleTextFormatColor ctaButtonBackgroundColor ctaButton|buttonBackgroundColor0 ctaButtonButtonTextFormatColor cornerRadius".split(" "), [])
        };
    }

    function $viewbix$sdk$track$Snowplow$getVideoContext$$() {
        var $JSCompiler_temp$$68_JSCompiler_temp_const$$69$$;
        if ($goog$string$isEmptySafe$$($viewbix$sdk$track$Snowplow$$.$getInstance$().$videoUrl$)) {
            $JSCompiler_temp$$68_JSCompiler_temp_const$$69$$ = null;
        } else {
            $JSCompiler_temp$$68_JSCompiler_temp_const$$69$$ = $viewbix$sdk$track$Snowplow$$.$getInstance$().$videoPlayer$.currentTime();
            var $JSCompiler_inline_result$$70_timeRanges$$inline_553$$;
            $JSCompiler_inline_result$$70_timeRanges$$inline_553$$ = $viewbix$sdk$track$Snowplow$$.$getInstance$().$videoPlayer$.played();
            $JSCompiler_inline_result$$70_timeRanges$$inline_553$$ = null == $JSCompiler_inline_result$$70_timeRanges$$inline_553$$ || 0 == $JSCompiler_inline_result$$70_timeRanges$$inline_553$$.length || 0 == $JSCompiler_inline_result$$70_timeRanges$$inline_553$$.start(0) && 0 == $JSCompiler_inline_result$$70_timeRanges$$inline_553$$.end(0) ? $viewbix$sdk$track$PlayerState$UNSTARTED$$ : $viewbix$sdk$track$Snowplow$$.$getInstance$().$videoPlayer$.paused() ? $viewbix$sdk$track$PlayerState$PAUSED$$ : $viewbix$sdk$track$PlayerState$PLAYING$$;
            $JSCompiler_temp$$68_JSCompiler_temp_const$$69$$ = {
                schema: "iglu:com.viewbix/video_context/jsonschema/1-0-0",
                data: {
                    currentTime: $JSCompiler_temp$$68_JSCompiler_temp_const$$69$$,
                    state: $JSCompiler_inline_result$$70_timeRanges$$inline_553$$,
                    src: $viewbix$sdk$track$Snowplow$$.$getInstance$().$videoPlayer$.currentSrc(),
                    volume: $viewbix$sdk$track$Snowplow$$.$getInstance$().$videoPlayer$.volume(),
                    height: $viewbix$sdk$track$Snowplow$$.$getInstance$().$videoPlayer$.height()
                }
            };
        }
        return $JSCompiler_temp$$68_JSCompiler_temp_const$$69$$;
    }

    function $viewbix$sdk$track$Snowplow$getPlayerContext$$() {
        return {
            schema: "iglu:com.viewbix/player_context/jsonschema/2-0-0",
            data: {
                playerId: $viewbix$sdk$track$Snowplow$$.$getInstance$().$playerId$,
                memberId: $viewbix$sdk$track$Snowplow$$.$getInstance$().$memberId$,
                sessionId: $viewbix$sdk$track$Snowplow$$.$getInstance$().$sessionId$
            }
        };
    }

    function $viewbix$sdk$track$Snowplow$getAppInteractionData$$($opt_trackingData$$4$$) {
        if (null != $opt_trackingData$$4$$ && null != $opt_trackingData$$4$$.$appAction$) {
            return {action: $opt_trackingData$$4$$.$appAction$};
        }
        throw "No data provided for appInteractionData method";
    }

    function $viewbix$sdk$track$Snowplow$getInteractionData$$($data$$71_interactionData_trackingData$$) {
        $data$$71_interactionData_trackingData$$ = $data$$71_interactionData_trackingData$$.$interactionData$;
        $data$$71_interactionData_trackingData$$ = {
            id: $data$$71_interactionData_trackingData$$.id,
            control: $data$$71_interactionData_trackingData$$.control,
            location: $data$$71_interactionData_trackingData$$.location,
            targetIsApp: $data$$71_interactionData_trackingData$$.$targetIsApp$,
            icon: $data$$71_interactionData_trackingData$$.icon,
            target: $data$$71_interactionData_trackingData$$.target,
            label: $data$$71_interactionData_trackingData$$.label,
            scope: $data$$71_interactionData_trackingData$$.scope
        };
        null == $data$$71_interactionData_trackingData$$.target && "target" in $data$$71_interactionData_trackingData$$ && delete $data$$71_interactionData_trackingData$$.target;
        return $data$$71_interactionData_trackingData$$;
    }

    function $viewbix$sdk$track$Snowplow$getRollData$$($opt_trackingData$$5$$) {
        if (null != $opt_trackingData$$5$$ && null != $opt_trackingData$$5$$.$rollData$) {
            return {
                type: $opt_trackingData$$5$$.$rollData$.type,
                allowSkip: $opt_trackingData$$5$$.$rollData$.$allowSkip$,
                action: $opt_trackingData$$5$$.$rollData$.action
            };
        }
        throw "No data provided for rollData method";
    }

    function $viewbix$sdk$track$Snowplow$getVideoProgessData$$($trackEventType$$) {
        var $percent$$1$$ = NaN;
        switch ($trackEventType$$) {
            case $viewbix$sdk$track$TrackEventType$VSTART_UNIQUE$$:
                $percent$$1$$ = 0;
                break;
            case $viewbix$sdk$track$TrackEventType$VTHRESH_25$$:
                $percent$$1$$ = 25;
                break;
            case $viewbix$sdk$track$TrackEventType$VTHRESH_50$$:
                $percent$$1$$ = 50;
                break;
            case $viewbix$sdk$track$TrackEventType$VTHRESH_75$$:
                $percent$$1$$ = 75;
                break;
            case $viewbix$sdk$track$TrackEventType$VTHRESH_100$$:
                $percent$$1$$ = 100;
        }
        return {percent: $percent$$1$$};
    }

    function $viewbix$sdk$track$Snowplow$getImpressionData$$() {
        var $referrer$$1$$ = document.referrer, $query$$16$$ = new $goog$Uri$QueryData$$(document.location.search.substring(1));
        $query$$16$$.$containsKey$($viewbix$sdk$track$TrackingParam$HTTP_REFERRER$$) && ($referrer$$1$$ = $query$$16$$.get($viewbix$sdk$track$TrackingParam$HTTP_REFERRER$$), window.spvb("setReferrerUrl", $referrer$$1$$));
        return {
            autoplay: -1 != window.location.href.indexOf("&ap=true"),
            layout: window.VBX_LAYOUT_NAME,
            query: window.location.search,
            cookies: document.cookie,
            headers: [$referrer$$1$$]
        };
    }

    function $viewbix$sdk$track$Snowplow$buildContexts$$($eventTrackingInfo$$, $opt_trackingData$$6$$) {
        var $contexts$$2$$ = [];
        $goog$array$forEach$$($eventTrackingInfo$$.contexts, function ($contextFunction_contextOrContexts$$) {
            $contextFunction_contextOrContexts$$ = $contextFunction_contextOrContexts$$($opt_trackingData$$6$$);
            $goog$isArray$$($contextFunction_contextOrContexts$$) ? $goog$array$forEach$$($contextFunction_contextOrContexts$$, function ($context$$11$$) {
                null != $context$$11$$ && $contexts$$2$$.push($context$$11$$);
            }) : null != $contextFunction_contextOrContexts$$ && $contexts$$2$$.push($contextFunction_contextOrContexts$$);
        });
        return $contexts$$2$$;
    }

    function $JSCompiler_StaticMethods_setUpInteractionEvent$$($JSCompiler_StaticMethods_setUpInteractionEvent$self$$, $trackEventType$$1$$, $contexts$$3$$) {
        $goog$object$add$$($JSCompiler_StaticMethods_setUpInteractionEvent$self$$.$eventTrackingMap_$, $trackEventType$$1$$, {
            schema: "iglu:com.viewbix/interaction/jsonschema/1-0-0",
            contexts: $contexts$$3$$,
            data: $viewbix$sdk$track$Snowplow$getInteractionData$$
        });
    }

    function $JSCompiler_StaticMethods_setUpAppInteractionEvent$$($JSCompiler_StaticMethods_setUpAppInteractionEvent$self$$, $trackEventType$$2$$, $contexts$$4$$) {
        $goog$object$add$$($JSCompiler_StaticMethods_setUpAppInteractionEvent$self$$.$eventTrackingMap_$, $trackEventType$$2$$, {
            schema: "iglu:com.viewbix/app_interaction/jsonschema/1-0-0",
            contexts: $contexts$$4$$,
            data: $viewbix$sdk$track$Snowplow$getAppInteractionData$$
        });
    }

    function $JSCompiler_StaticMethods_setUpVideoProgressEvent$$($JSCompiler_StaticMethods_setUpVideoProgressEvent$self$$, $trackEventType$$3$$) {
        $goog$object$add$$($JSCompiler_StaticMethods_setUpVideoProgressEvent$self$$.$eventTrackingMap_$, $trackEventType$$3$$, {
            schema: "iglu:com.viewbix/video_progress/jsonschema/1-0-0",
            contexts: [$viewbix$sdk$track$Snowplow$getVideoContext$$, $viewbix$sdk$track$Snowplow$getPlayerContext$$],
            data: $goog$partial$$($viewbix$sdk$track$Snowplow$getVideoProgessData$$, $trackEventType$$3$$)
        });
    }

    function $JSCompiler_StaticMethods_setUpRollEvent$$($JSCompiler_StaticMethods_setUpRollEvent$self$$, $trackEventType$$4$$) {
        $goog$object$add$$($JSCompiler_StaticMethods_setUpRollEvent$self$$.$eventTrackingMap_$, $trackEventType$$4$$, {
            schema: "iglu:com.viewbix/roll/jsonschema/1-0-0",
            contexts: [$viewbix$sdk$track$Snowplow$getVideoContext$$, $viewbix$sdk$track$Snowplow$getPlayerContext$$, $viewbix$sdk$track$Snowplow$getAppContext$$],
            data: $viewbix$sdk$track$Snowplow$getRollData$$
        });
    }

    function $viewbix$sdk$track$Snowplow$track$$($eventType$$10$$, $opt_trackingData$$9$$) {
        var $eventTrackingInfo$$2$$ = $viewbix$sdk$track$Snowplow$$.$getInstance$().$eventTrackingMap_$[$eventType$$10$$];
        null != $eventTrackingInfo$$2$$ && window.spvb("trackUnstructEvent", {
            schema: $eventTrackingInfo$$2$$.schema,
            data: $eventTrackingInfo$$2$$.data($opt_trackingData$$9$$)
        }, $viewbix$sdk$track$Snowplow$buildContexts$$($eventTrackingInfo$$2$$, $opt_trackingData$$9$$));
    }
    ;
    function $viewbix$sdk$track$TrackingData$$($interactionData$$1$$, $application$$1$$, $menu$$1$$, $appAction$$, $rollData$$) {
        this.$interactionData$ = $interactionData$$1$$;
        this.$application$ = $application$$1$$;
        this.$menu$ = $menu$$1$$;
        this.$appAction$ = $appAction$$;
        this.$rollData$ = $rollData$$;
    }

    function $viewbix$sdk$track$TrackingData$CreateTrackingData$$($interactionData$$2_trackEvent$$, $applicationObject_trackData$$, $apps$$3_getPlayerConfig_layout$$14_target$$59_vbx$$) {
        var $trackingData$$1$$ = null;
        switch ($interactionData$$2_trackEvent$$) {
            case "USER_CLICK_LOGO":
                $interactionData$$2_trackEvent$$ = new $viewbix$sdk$track$InteractionData$$($viewbix$sdk$track$InteractionData$Id$$[$applicationObject_trackData$$], "button", "top left", !1, $apps$$3_getPlayerConfig_layout$$14_target$$59_vbx$$, null, null, "player");
                $trackingData$$1$$ = new $viewbix$sdk$track$TrackingData$$($interactionData$$2_trackEvent$$, null, null, null, null);
                break;
            case "USER_CLICK_SLIDER_IMAGE":
                $interactionData$$2_trackEvent$$ = new $viewbix$sdk$track$InteractionData$$("appstrigger", "button", "left", !0, null, null, null, "player"), $applicationObject_trackData$$ = null, null != window.VBX && ($apps$$3_getPlayerConfig_layout$$14_target$$59_vbx$$ = window.VBX, null != $apps$$3_getPlayerConfig_layout$$14_target$$59_vbx$$ && null != $apps$$3_getPlayerConfig_layout$$14_target$$59_vbx$$.Layout && ($apps$$3_getPlayerConfig_layout$$14_target$$59_vbx$$ = $apps$$3_getPlayerConfig_layout$$14_target$$59_vbx$$.Layout,
                null != $apps$$3_getPlayerConfig_layout$$14_target$$59_vbx$$ && null != $apps$$3_getPlayerConfig_layout$$14_target$$59_vbx$$.getPlayerConfig && ($apps$$3_getPlayerConfig_layout$$14_target$$59_vbx$$ = $apps$$3_getPlayerConfig_layout$$14_target$$59_vbx$$.getPlayerConfig, null != $apps$$3_getPlayerConfig_layout$$14_target$$59_vbx$$ && ($apps$$3_getPlayerConfig_layout$$14_target$$59_vbx$$ = $apps$$3_getPlayerConfig_layout$$14_target$$59_vbx$$("applications"), null != $apps$$3_getPlayerConfig_layout$$14_target$$59_vbx$$ &&
                0 != $apps$$3_getPlayerConfig_layout$$14_target$$59_vbx$$.length && ($applicationObject_trackData$$ = $apps$$3_getPlayerConfig_layout$$14_target$$59_vbx$$[0]))))), $trackingData$$1$$ = new $viewbix$sdk$track$TrackingData$$($interactionData$$2_trackEvent$$, $applicationObject_trackData$$, null, null, null);
        }
        return $trackingData$$1$$;
    }

    function $viewbix$sdk$track$TrackingData$CreateTrackingDataFromStringLiteralObject$$($generic$$1$$) {
        var $generic$$inline_555$$ = $generic$$1$$.interactionData;
        return new $viewbix$sdk$track$TrackingData$$(new $viewbix$sdk$track$InteractionData$$($generic$$inline_555$$.id, $generic$$inline_555$$.control, $generic$$inline_555$$.location, $generic$$inline_555$$.targetIsApp, $generic$$inline_555$$.target, $generic$$inline_555$$.icon, $generic$$inline_555$$.label, $generic$$inline_555$$.scope), $generic$$1$$.application, $generic$$1$$.menu, $generic$$1$$.appAction, $generic$$1$$.rollData);
    }
    ;
    function $viewbix$sdk$VbxNodeList$$($target$$60$$) {
        this.$nodeList_$ = document.querySelectorAll($target$$60$$);
        this.length = this.length;
        this.nodes = this.$nodes$;
        this.first = this.first;
        this.getSize = this.$getSize$;
        this.getAutoSize = this.$getAutoSize$;
        this.getPageOffset = this.$getPageOffset$;
        this.getPageOffsetLeft = this.$getPageOffsetLeft$;
        this.getPageOffsetTop = this.$getPageOffsetTop$;
    }

    $JSCompiler_prototypeAlias$$ = $viewbix$sdk$VbxNodeList$$.prototype;
    $JSCompiler_prototypeAlias$$.length = function $$JSCompiler_prototypeAlias$$$length$() {
        return this.$nodeList_$.length;
    };
    $JSCompiler_prototypeAlias$$.$nodes$ = function $$JSCompiler_prototypeAlias$$$$nodes$$($opt_index$$4$$) {
        return $goog$isNumber$$($opt_index$$4$$) ? null != this.$nodeList_$ && 0 < this.$nodeList_$.length && this.$nodeList_$.length > $opt_index$$4$$ ? this.$nodeList_$[$opt_index$$4$$] : null : this.$nodeList_$;
    };
    $JSCompiler_prototypeAlias$$.first = function $$JSCompiler_prototypeAlias$$$first$() {
        return this.$nodes$(0);
    };
    $JSCompiler_prototypeAlias$$.$getSize$ = function $$JSCompiler_prototypeAlias$$$$getSize$$() {
        var $result$$30$$;
        1 == this.$nodeList_$.length ? $result$$30$$ = $goog$style$evaluateWithTemporaryDisplay_$$(this.$nodeList_$[0]) : ($result$$30$$ = [], $goog$array$forEach$$(this.$nodeList_$, function ($node$$42$$) {
            $result$$30$$.push($goog$style$evaluateWithTemporaryDisplay_$$($node$$42$$));
        }));
        return $result$$30$$;
    };
    $JSCompiler_prototypeAlias$$.$getAutoSize$ = function $$JSCompiler_prototypeAlias$$$$getAutoSize$$() {
        var $result$$31$$;
        1 == this.$nodeList_$.length ? $result$$31$$ = $viewbix$sdk$helper$ElementHelper$getAutoSize$$(this.$nodeList_$[0]) : ($result$$31$$ = [], $goog$array$forEach$$(this.$nodeList_$, function ($node$$43$$) {
            $result$$31$$.push($viewbix$sdk$helper$ElementHelper$getAutoSize$$($node$$43$$));
        }));
        return $result$$31$$;
    };
    $JSCompiler_prototypeAlias$$.$getPageOffset$ = function $$JSCompiler_prototypeAlias$$$$getPageOffset$$() {
        var $result$$32$$;
        1 == this.$nodeList_$.length ? $result$$32$$ = $goog$style$getPageOffset$$(this.$nodeList_$[0]) : ($result$$32$$ = [], $goog$array$forEach$$(this.$nodeList_$, function ($node$$44$$) {
            $result$$32$$.push($goog$style$getPageOffset$$($node$$44$$));
        }));
        return $result$$32$$;
    };
    $JSCompiler_prototypeAlias$$.$getPageOffsetLeft$ = function $$JSCompiler_prototypeAlias$$$$getPageOffsetLeft$$() {
        var $result$$33$$;
        1 == this.$nodeList_$.length ? $result$$33$$ = $goog$style$getPageOffset$$(this.$nodeList_$[0]).x : ($result$$33$$ = [], $goog$array$forEach$$(this.$nodeList_$, function ($node$$45$$) {
            $result$$33$$.push($goog$style$getPageOffset$$($node$$45$$).x);
        }));
        return $result$$33$$;
    };
    $JSCompiler_prototypeAlias$$.$getPageOffsetTop$ = function $$JSCompiler_prototypeAlias$$$$getPageOffsetTop$$() {
        var $result$$34$$;
        1 == this.$nodeList_$.length ? $result$$34$$ = $goog$style$getPageOffset$$(this.$nodeList_$[0]).y : ($result$$34$$ = [], $goog$array$forEach$$(this.$nodeList_$, function ($node$$46$$) {
            $result$$34$$.push($goog$style$getPageOffset$$($node$$46$$).y);
        }));
        return $result$$34$$;
    };
    function $viewbix$sdk$video$External$$($channel$$10$$) {
        $goog$events$EventTarget$$.call(this);
        this.$channel_$ = $channel$$10$$;
        this.$paused_$ = !0;
        this.$autoplay_$ = !1;
        this.$currentTime_$ = 0;
        this.$played_$ = {
            length: 0, start: function $this$$played_$$start$() {
                return 0;
            }, end: function $this$$played_$$end$() {
                return 0;
            }
        };
        this.$currentSrc_$ = "";
        this.$height_$ = this.$volume_$ = 0;
    }

    $goog$inherits$$($viewbix$sdk$video$External$$, $goog$events$EventTarget$$);
    $JSCompiler_prototypeAlias$$ = $viewbix$sdk$video$External$$.prototype;
    $JSCompiler_prototypeAlias$$.$videoId$ = function $$JSCompiler_prototypeAlias$$$$videoId$$() {
        return "";
    };
    $JSCompiler_prototypeAlias$$.id = function $$JSCompiler_prototypeAlias$$$id$() {
        return "";
    };
    $JSCompiler_prototypeAlias$$.$techName$ = function $$JSCompiler_prototypeAlias$$$$techName$$() {
        return "";
    };
    $JSCompiler_prototypeAlias$$.$techElement$ = function $$JSCompiler_prototypeAlias$$$$techElement$$() {
        return null;
    };
    $JSCompiler_prototypeAlias$$.currentSrc = function $$JSCompiler_prototypeAlias$$$currentSrc$() {
        return this.$currentSrc_$;
    };
    $JSCompiler_prototypeAlias$$.volume = function $$JSCompiler_prototypeAlias$$$volume$() {
        return this.$volume_$;
    };
    $JSCompiler_prototypeAlias$$.height = function $$JSCompiler_prototypeAlias$$$height$() {
        return this.$height_$;
    };
    $JSCompiler_prototypeAlias$$.load = function $$JSCompiler_prototypeAlias$$$load$($src$$29$$) {
        $JSCompiler_StaticMethods_setupXpcChannel$$(this);
        if (null != $src$$29$$ && $goog$isString$$($src$$29$$)) {
            var $normalizedYoutubeUrl$$ = $viewbix$sdk$helper$YouTubeHelper$normalizeUrl$$($src$$29$$);
            null === $normalizedYoutubeUrl$$ || ($src$$29$$ = $normalizedYoutubeUrl$$);
        }
        $JSCompiler_StaticMethods_sendMessageToHostPlayer$$(this, "LOAD", $src$$29$$);
    };
    $JSCompiler_prototypeAlias$$.play = function $$JSCompiler_prototypeAlias$$$play$() {
        this.$paused_$ = !1;
        $JSCompiler_StaticMethods_sendMessageToHostPlayer$$(this, "PLAY");
    };
    $JSCompiler_prototypeAlias$$.pause = function $$JSCompiler_prototypeAlias$$$pause$() {
        $JSCompiler_StaticMethods_sendMessageToHostPlayer$$(this, "PAUSE");
    };
    $JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
        this.pause();
        this.currentTime(0);
    };
    $JSCompiler_prototypeAlias$$.duration = function $$JSCompiler_prototypeAlias$$$duration$() {
        return this.$duration_$;
    };
    $JSCompiler_prototypeAlias$$.played = function $$JSCompiler_prototypeAlias$$$played$() {
        return this.$played_$;
    };
    $JSCompiler_prototypeAlias$$.exitFullscreen = function $$JSCompiler_prototypeAlias$$$exitFullscreen$($opt_callback$$12$$) {
        $goog$isFunction$$($opt_callback$$12$$) && $opt_callback$$12$$();
    };
    $JSCompiler_prototypeAlias$$.$beforeShowOverlay$ = function $$JSCompiler_prototypeAlias$$$$beforeShowOverlay$$() {
        $JSCompiler_StaticMethods_sendMessageToHostPlayer$$(this, "BEFORE_SHOW_OVERLAY");
    };
    $JSCompiler_prototypeAlias$$.$afterHideOverlay$ = function $$JSCompiler_prototypeAlias$$$$afterHideOverlay$$() {
        $JSCompiler_StaticMethods_sendMessageToHostPlayer$$(this, "AFTER_HIDE_OVERLAY");
    };
    $JSCompiler_prototypeAlias$$.$afterCreatePlayer$ = function $$JSCompiler_prototypeAlias$$$$afterCreatePlayer$$() {
        $JSCompiler_StaticMethods_sendMessageToHostPlayer$$(this, "AFTER_CREATE_PLAYER");
    };
    $JSCompiler_prototypeAlias$$.currentTime = function $$JSCompiler_prototypeAlias$$$currentTime$($opt_seconds$$3$$) {
        null != $opt_seconds$$3$$ && $JSCompiler_StaticMethods_sendMessageToHostPlayer$$(this, "CURRENT_TIME", $opt_seconds$$3$$);
        return this.$currentTime_$;
    };
    $JSCompiler_prototypeAlias$$.poster = function $$JSCompiler_prototypeAlias$$$poster$($opt_src$$2$$) {
        null != $opt_src$$2$$ && $JSCompiler_StaticMethods_sendMessageToHostPlayer$$(this, "POSTER", $opt_src$$2$$);
        return this.$poster_$;
    };
    $JSCompiler_prototypeAlias$$.paused = function $$JSCompiler_prototypeAlias$$$paused$() {
        return this.$paused_$;
    };
    $JSCompiler_prototypeAlias$$.autoplay = function $$JSCompiler_prototypeAlias$$$autoplay$($opt_value$$15$$) {
        null != $opt_value$$15$$ && $JSCompiler_StaticMethods_sendMessageToHostPlayer$$(this, "AUTO_PLAY", $opt_value$$15$$);
        return this.$autoplay_$;
    };
    $JSCompiler_prototypeAlias$$.$listenInternal_$ = function $$JSCompiler_prototypeAlias$$$$listenInternal_$$($eventType$$11$$, $callback$$86$$, $opt_scope$$28$$) {
        return null != $eventType$$11$$ ? ($goog$events$listen$$(this, $eventType$$11$$, function () {
            switch ($eventType$$11$$) {
                case "pause":
                    this.$paused_$ = !0;
                    break;
                case "play":
                    this.$paused_$ = !1;
            }
            $opt_scope$$28$$ = null != $opt_scope$$28$$ ? $opt_scope$$28$$ : this;
            $callback$$86$$.call($opt_scope$$28$$);
        }, !1, this), !0) : !1;
    };
    $JSCompiler_prototypeAlias$$.$unlistenAll$ = function $$JSCompiler_prototypeAlias$$$$unlistenAll$$() {
    };
    $JSCompiler_prototypeAlias$$.$listenDurationChange$ = function $$JSCompiler_prototypeAlias$$$$listenDurationChange$$($callback$$87$$, $opt_scope$$29$$) {
        return this.$listenInternal_$("durationchange", $callback$$87$$, $opt_scope$$29$$);
    };
    $JSCompiler_prototypeAlias$$.$listenEnded$ = function $$JSCompiler_prototypeAlias$$$$listenEnded$$($callback$$88$$, $opt_scope$$30$$) {
        return this.$listenInternal_$("ended", $callback$$88$$, $opt_scope$$30$$);
    };
    $JSCompiler_prototypeAlias$$.$listenError$ = function $$JSCompiler_prototypeAlias$$$$listenError$$($callback$$89$$, $opt_scope$$31$$) {
        return this.$listenInternal_$("error", $callback$$89$$, $opt_scope$$31$$);
    };
    $JSCompiler_prototypeAlias$$.$listenLoadedData$ = function $$JSCompiler_prototypeAlias$$$$listenLoadedData$$($callback$$90$$, $opt_scope$$32$$) {
        return this.$listenInternal_$("loadeddata", $callback$$90$$, $opt_scope$$32$$);
    };
    $JSCompiler_prototypeAlias$$.$listenLoadStart$ = function $$JSCompiler_prototypeAlias$$$$listenLoadStart$$($callback$$91$$, $opt_scope$$33$$) {
        return this.$listenInternal_$("loadstart", $callback$$91$$, $opt_scope$$33$$);
    };
    $JSCompiler_prototypeAlias$$.$listenPause$ = function $$JSCompiler_prototypeAlias$$$$listenPause$$($callback$$92$$, $opt_scope$$34$$) {
        return this.$listenInternal_$("pause", $callback$$92$$, $opt_scope$$34$$);
    };
    $JSCompiler_prototypeAlias$$.$listenPlaying$ = function $$JSCompiler_prototypeAlias$$$$listenPlaying$$($callback$$93$$, $opt_scope$$35$$) {
        return this.$listenInternal_$("play", $callback$$93$$, $opt_scope$$35$$);
    };
    $JSCompiler_prototypeAlias$$.$listenSeeked$ = function $$JSCompiler_prototypeAlias$$$$listenSeeked$$($callback$$94$$, $opt_scope$$36$$) {
        return this.$listenInternal_$("seeked", $callback$$94$$, $opt_scope$$36$$);
    };
    $JSCompiler_prototypeAlias$$.$listenSeeking$ = function $$JSCompiler_prototypeAlias$$$$listenSeeking$$($callback$$95$$, $opt_scope$$37$$) {
        return this.$listenInternal_$("seeking", $callback$$95$$, $opt_scope$$37$$);
    };
    $JSCompiler_prototypeAlias$$.$listenTimeUpdate$ = function $$JSCompiler_prototypeAlias$$$$listenTimeUpdate$$($callback$$96$$, $opt_scope$$38$$) {
        return this.$listenInternal_$("timeupdate", $callback$$96$$, $opt_scope$$38$$);
    };
    $JSCompiler_prototypeAlias$$.$listenFullscreenChange$ = function $$JSCompiler_prototypeAlias$$$$listenFullscreenChange$$($callback$$97$$, $opt_scope$$39$$) {
        return this.$listenInternal_$("fullscreenchange", $callback$$97$$, $opt_scope$$39$$);
    };
    function $JSCompiler_StaticMethods_setupXpcChannel$$($JSCompiler_StaticMethods_setupXpcChannel$self$$) {
        $JSCompiler_StaticMethods_registerService$$(
            $JSCompiler_StaticMethods_setupXpcChannel$self$$.$channel_$,
            "EXTERNAL_PLAYER_SERVICE",
            $goog$bind$$(function ($payload$$31$$) {
                this.$onMessage$($viewbix$sdk$XpcMessage$fromXpcPayload$$($payload$$31$$));
            }, $JSCompiler_StaticMethods_setupXpcChannel$self$$));
    }

    $JSCompiler_prototypeAlias$$.$onMessage$ = function $$JSCompiler_prototypeAlias$$$$onMessage$$($message$$29$$) {
        var $oldDuration$$ = this.$duration_$;
        this.$duration_$ = $message$$29$$.data.duration;
        this.$currentTime_$ = $message$$29$$.data.currentTime;
        null != $message$$29$$.data.volume && (this.$volume_$ = $message$$29$$.data.volume);
        this.$currentSrc_$ = $message$$29$$.data.currentSrc;
        this.$height_$ = $message$$29$$.data.height;
        "durationchange" != $message$$29$$.name &&
        $oldDuration$$ != this.$duration_$ &&
        $goog$events$dispatchEvent$$(this, new $viewbix$sdk$event$VideoEvent$$("durationchange"));
        $goog$events$dispatchEvent$$(this, new $viewbix$sdk$event$VideoEvent$$($message$$29$$.name));
    };
    function $JSCompiler_StaticMethods_sendMessageToHostPlayer$$($JSCompiler_StaticMethods_sendMessageToHostPlayer$self$$,
                                                                 $name$$92_payload$$32$$,
                                                                 $opt_data$$8$$) {
        console.log('sendMessageToHostPlayer');
        if (void 0 == $name$$92_payload$$32$$) {
            debugger;
        }
        $name$$92_payload$$32$$ = $viewbix$sdk$XpcMessage$createXpcPayload$$($name$$92_payload$$32$$, $opt_data$$8$$);
        console.log('payload');
        console.log($name$$92_payload$$32$$);
        null != $name$$92_payload$$32$$ &&
        $JSCompiler_StaticMethods_sendMessageToHostPlayer$self$$.$channel_$.send("EXTERNAL_PLAYER_SERVICE", $name$$92_payload$$32$$);
    }
    ;
    function $viewbix$sdk$video$Run$$($startTime$$2$$) {
        this.end = this.start = $startTime$$2$$;
    }

    $viewbix$sdk$video$Run$$.prototype.duration = function $$viewbix$sdk$video$Run$$$$duration$() {
        return this.end - this.start;
    };
    function $viewbix$sdk$video$VideoJs$$($elementId$$1$$) {
        this.$player_$ = videojs($elementId$$1$$, {
            techOrder: ["html5", "flash", "youtube", "Novideo"],
            ytcontrols: !1,
            nativeControlsForTouch: !1,
            reportTouchActivity: !1
        });
        console.log(this.$player_$);
        if ($goog$labs$userAgent$util$matchUserAgent$$("Android")) {
            this.$player_$.on("userinactive", $goog$bind$$(function () {
                this.$player_$.removeClass("vjs-user-inactive");
                this.$player_$.addClass("vjs-user-active");
            }, this));
        }
        this.$exitingFullscreen_$ = !1;
    }

    $JSCompiler_prototypeAlias$$ = $viewbix$sdk$video$VideoJs$$.prototype;
    $JSCompiler_prototypeAlias$$.$videoId$ = function $$JSCompiler_prototypeAlias$$$$videoId$$() {
        return this.$player_$.tech.videoId;
    };
    $JSCompiler_prototypeAlias$$.id = function $$JSCompiler_prototypeAlias$$$id$() {
        return this.$player_$.id();
    };
    $JSCompiler_prototypeAlias$$.$techName$ = function $$JSCompiler_prototypeAlias$$$$techName$$() {
        return this.$player_$.techName;
    };
    $JSCompiler_prototypeAlias$$.$techElement$ = function $$JSCompiler_prototypeAlias$$$$techElement$$() {
        return this.$player_$.tech.el();
    };
    $JSCompiler_prototypeAlias$$.currentSrc = function $$JSCompiler_prototypeAlias$$$currentSrc$() {
        return this.$player_$.currentSrc();
    };
    $JSCompiler_prototypeAlias$$.volume = function $$JSCompiler_prototypeAlias$$$volume$($value$$187$$) {
        return this.$player_$.volume($value$$187$$);
    };
    $JSCompiler_prototypeAlias$$.height = function $$JSCompiler_prototypeAlias$$$height$() {
        return this.$techElement$().clientHeight;
    };
    $JSCompiler_prototypeAlias$$.load = function $$JSCompiler_prototypeAlias$$$load$($src$$30$$, $opt_startSeconds$$1$$) {
        var $type$$135$$ = "";
        if (null != $src$$30$$ && $goog$isString$$($src$$30$$)) {
            var $normalizedYoutubeUrl$$1_srcWithoutQuery$$ = $viewbix$sdk$helper$YouTubeHelper$normalizeUrl$$($src$$30$$);
            null === $normalizedYoutubeUrl$$1_srcWithoutQuery$$ ? ("" != $src$$30$$ && ($type$$135$$ = "video/mp4"), $normalizedYoutubeUrl$$1_srcWithoutQuery$$ = $src$$30$$.split("?")[0], $goog$string$caseInsensitiveEndsWith$$($normalizedYoutubeUrl$$1_srcWithoutQuery$$, ".flv") ? $type$$135$$ = "video/flv" : $goog$string$caseInsensitiveEndsWith$$($normalizedYoutubeUrl$$1_srcWithoutQuery$$, ".mp4") ? $type$$135$$ = "video/mp4" : $goog$string$caseInsensitiveEndsWith$$($normalizedYoutubeUrl$$1_srcWithoutQuery$$,
                ".m4v") ? $type$$135$$ = "video/m4v" : $goog$string$caseInsensitiveEndsWith$$($normalizedYoutubeUrl$$1_srcWithoutQuery$$, ".bmp") ? $type$$135$$ = "image/bmp" : $goog$string$caseInsensitiveEndsWith$$($normalizedYoutubeUrl$$1_srcWithoutQuery$$, ".gif") ? $type$$135$$ = "image/gif" : $goog$string$caseInsensitiveEndsWith$$($normalizedYoutubeUrl$$1_srcWithoutQuery$$, ".jpg") || $goog$string$caseInsensitiveEndsWith$$($normalizedYoutubeUrl$$1_srcWithoutQuery$$, ".jpeg") ? $type$$135$$ = "image/jpeg" :
            $goog$string$caseInsensitiveEndsWith$$($normalizedYoutubeUrl$$1_srcWithoutQuery$$, ".png") && ($type$$135$$ = "image/png")) : ($src$$30$$ = $normalizedYoutubeUrl$$1_srcWithoutQuery$$, $type$$135$$ = "video/youtube");
        }
        null != $src$$30$$ && this.$player_$.src([{
            src: $src$$30$$,
            type: $type$$135$$,
            startSeconds: $opt_startSeconds$$1$$
        }]);
    };
    $JSCompiler_prototypeAlias$$.play = function $$JSCompiler_prototypeAlias$$$play$() {
        this.$player_$.play();
    };
    $JSCompiler_prototypeAlias$$.pause = function $$JSCompiler_prototypeAlias$$$pause$() {
        this.$player_$.pause();
    };
    $JSCompiler_prototypeAlias$$.exitFullscreen = function $$JSCompiler_prototypeAlias$$$exitFullscreen$($opt_callback$$13$$) {
        this.$exitingFullscreen_$ || (this.$exitingFullscreen_$ = !0, this.$player_$.exitFullscreen(function () {
            this.$exitingFullscreen_$ = !1;
            $opt_callback$$13$$();
        }));
    };
    $JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
        this.pause();
        this.currentTime(0);
    };
    $JSCompiler_prototypeAlias$$.duration = function $$JSCompiler_prototypeAlias$$$duration$() {
        return this.$player_$.duration();
    };
    $JSCompiler_prototypeAlias$$.played = function $$JSCompiler_prototypeAlias$$$played$() {
        return this.$player_$.played();
    };
    $JSCompiler_prototypeAlias$$.$beforeShowOverlay$ = function $$JSCompiler_prototypeAlias$$$$beforeShowOverlay$$() {
    };
    $JSCompiler_prototypeAlias$$.$afterHideOverlay$ = function $$JSCompiler_prototypeAlias$$$$afterHideOverlay$$() {
    };
    $JSCompiler_prototypeAlias$$.$afterCreatePlayer$ = function $$JSCompiler_prototypeAlias$$$$afterCreatePlayer$$() {
    };
    $JSCompiler_prototypeAlias$$.currentTime = function $$JSCompiler_prototypeAlias$$$currentTime$($opt_seconds$$4$$) {
        return this.$player_$.currentTime($opt_seconds$$4$$);
    };
    $JSCompiler_prototypeAlias$$.poster = function $$JSCompiler_prototypeAlias$$$poster$($opt_src$$3$$) {
        return this.$player_$.poster($opt_src$$3$$);
    };
    $JSCompiler_prototypeAlias$$.paused = function $$JSCompiler_prototypeAlias$$$paused$() {
        return this.$player_$.paused();
    };
    $JSCompiler_prototypeAlias$$.autoplay = function $$JSCompiler_prototypeAlias$$$autoplay$($opt_value$$17$$) {
        return this.$player_$.autoplay($opt_value$$17$$);
    };
    function $JSCompiler_StaticMethods_getEventType_$$($eventType$$12$$) {
        var $videoJsEventType$$ = null;
        switch ($eventType$$12$$) {
            case "click":
                $videoJsEventType$$ = "click";
                break;
            case "durationchange":
                $videoJsEventType$$ = "durationchange";
                break;
            case "ended":
                $videoJsEventType$$ = "ended";
                break;
            case "error":
                $videoJsEventType$$ = "error";
                break;
            case "loadeddata":
                $videoJsEventType$$ = "loadeddata";
                break;
            case "loadstart":
                $videoJsEventType$$ = "loadstart";
                break;
            case "pause":
                $videoJsEventType$$ = "pause";
                break;
            case "play":
                $videoJsEventType$$ = "play";
                break;
            case "timeupdate":
                $videoJsEventType$$ = "timeupdate";
                break;
            case "fullscreenchange":
                $videoJsEventType$$ = "fullscreenchange";
        }
        return $videoJsEventType$$;
    }

    $JSCompiler_prototypeAlias$$.$listenInternal_$ = function $$JSCompiler_prototypeAlias$$$$listenInternal_$$($eventType$$13_videoJsEventType$$1$$, $callback$$99$$, $opt_scope$$41$$) {
        $eventType$$13_videoJsEventType$$1$$ = $JSCompiler_StaticMethods_getEventType_$$($eventType$$13_videoJsEventType$$1$$);
        return null != $eventType$$13_videoJsEventType$$1$$ ? (this.$player_$.on($eventType$$13_videoJsEventType$$1$$, $goog$bind$$(function () {
            $opt_scope$$41$$ = null != $opt_scope$$41$$ ? $opt_scope$$41$$ : this;
            $callback$$99$$.call($opt_scope$$41$$);
        }, this)), !0) : !1;
    };
    $JSCompiler_prototypeAlias$$.$unlistenAll$ = function $$JSCompiler_prototypeAlias$$$$unlistenAll$$() {
        $goog$object$forEach$$($viewbix$sdk$event$VideoEvent$Type$$, function ($key$$106$$, $val$$45$$) {
            this.$player_$.off($val$$45$$);
        }, this);
    };
    $JSCompiler_prototypeAlias$$.$listenDurationChange$ = function $$JSCompiler_prototypeAlias$$$$listenDurationChange$$($callback$$100$$, $opt_scope$$42$$) {
        return this.$listenInternal_$("durationchange", $callback$$100$$, $opt_scope$$42$$);
    };
    $JSCompiler_prototypeAlias$$.$listenEnded$ = function $$JSCompiler_prototypeAlias$$$$listenEnded$$($callback$$101$$, $opt_scope$$43$$) {
        return this.$listenInternal_$("ended", $callback$$101$$, $opt_scope$$43$$);
    };
    $JSCompiler_prototypeAlias$$.$listenError$ = function $$JSCompiler_prototypeAlias$$$$listenError$$($callback$$102$$, $opt_scope$$44$$) {
        return this.$listenInternal_$("error", $callback$$102$$, $opt_scope$$44$$);
    };
    $JSCompiler_prototypeAlias$$.$listenLoadedData$ = function $$JSCompiler_prototypeAlias$$$$listenLoadedData$$($callback$$103$$, $opt_scope$$45$$) {
        return this.$listenInternal_$("loadeddata", $callback$$103$$, $opt_scope$$45$$);
    };
    $JSCompiler_prototypeAlias$$.$listenLoadStart$ = function $$JSCompiler_prototypeAlias$$$$listenLoadStart$$($callback$$104$$, $opt_scope$$46$$) {
        return this.$listenInternal_$("loadstart", $callback$$104$$, $opt_scope$$46$$);
    };
    $JSCompiler_prototypeAlias$$.$listenPause$ = function $$JSCompiler_prototypeAlias$$$$listenPause$$($callback$$105$$, $opt_scope$$47$$) {
        return this.$listenInternal_$("pause", $callback$$105$$, $opt_scope$$47$$);
    };
    $JSCompiler_prototypeAlias$$.$listenPlaying$ = function $$JSCompiler_prototypeAlias$$$$listenPlaying$$($callback$$106$$, $opt_scope$$48$$) {
        return this.$listenInternal_$("play", $callback$$106$$, $opt_scope$$48$$);
    };
    $JSCompiler_prototypeAlias$$.$listenSeeked$ = function $$JSCompiler_prototypeAlias$$$$listenSeeked$$($callback$$107$$, $opt_scope$$49$$) {
        return this.$listenInternal_$("seeked", $callback$$107$$, $opt_scope$$49$$);
    };
    $JSCompiler_prototypeAlias$$.$listenSeeking$ = function $$JSCompiler_prototypeAlias$$$$listenSeeking$$($callback$$108$$, $opt_scope$$50$$) {
        return this.$listenInternal_$("seeking", $callback$$108$$, $opt_scope$$50$$);
    };
    $JSCompiler_prototypeAlias$$.$listenTimeUpdate$ = function $$JSCompiler_prototypeAlias$$$$listenTimeUpdate$$($callback$$109$$, $opt_scope$$51$$) {
        return this.$listenInternal_$("timeupdate", $callback$$109$$, $opt_scope$$51$$);
    };
    $JSCompiler_prototypeAlias$$.$listenFullscreenChange$ = function $$JSCompiler_prototypeAlias$$$$listenFullscreenChange$$($callback$$110$$, $opt_scope$$52$$) {
        return this.$listenInternal_$("fullscreenchange", $callback$$110$$, $opt_scope$$52$$);
    };
    function $viewbix$sdk$video$VideoRuns$$($s$$38$$, $totalTime$$) {
        this.url = $s$$38$$;
        this.$runs_$ = [];
        this.$totalTime_$ = $totalTime$$;
        this.$alreadyDispatchedStart$ = this.$alreadyDispatchedOne$ = !1;
    }

    $viewbix$sdk$video$VideoRuns$$.prototype.totalTime = function $$viewbix$sdk$video$VideoRuns$$$$totalTime$($opt_value$$18$$) {
        null != $opt_value$$18$$ && (this.$totalTime_$ = $opt_value$$18$$);
        return this.$totalTime_$;
    };
    $viewbix$sdk$video$VideoRuns$$.prototype.push = function $$viewbix$sdk$video$VideoRuns$$$$push$($run$$) {
        $goog$array$insert$$(this.$runs_$, $run$$);
    };
    $viewbix$sdk$video$VideoRuns$$.prototype.$findRun$ = function $$viewbix$sdk$video$VideoRuns$$$$$findRun$$($t$$8$$) {
        for (var $run$$1$$ = null, $i$$164$$ = 0; $i$$164$$ < this.$runs_$.length; $i$$164$$++) {
            var $r$$11$$ = this.$runs_$[$i$$164$$];
            if ($r$$11$$.start <= $t$$8$$ && $r$$11$$.end >= $t$$8$$) {
                $run$$1$$ = $r$$11$$;
                break;
            }
        }
        return $run$$1$$;
    };
    function $JSCompiler_StaticMethods_ratio$$($JSCompiler_StaticMethods_ratio$self$$) {
        var $t$$9$$ = 0;
        $goog$array$forEach$$($JSCompiler_StaticMethods_ratio$self$$.$runs_$, function ($r$$12$$) {
            $t$$9$$ += $r$$12$$.duration();
        }, $JSCompiler_StaticMethods_ratio$self$$);
        return 0 < $JSCompiler_StaticMethods_ratio$self$$.$totalTime_$ && .1 > $JSCompiler_StaticMethods_ratio$self$$.$totalTime_$ - $t$$9$$ ? 1 : 0 < $JSCompiler_StaticMethods_ratio$self$$.$totalTime_$ ? $t$$9$$ / $JSCompiler_StaticMethods_ratio$self$$.$totalTime_$ : 0;
    }
    ;
    function $viewbix$sdk$video$UniqueRunTracker$$($videoPlayer$$1$$, $thresholds$$) {
        $goog$events$EventTarget$$.call(this);
        this.$videoPlayer_$ = $videoPlayer$$1$$;
        this.$videos_$ = [];
        this.$currentVideoUrl_$ = "";
        this.$openRun_$ = null;
        this.$thresholds_$ = $thresholds$$;
        this.$videoPlayer_$.$listenTimeUpdate$(this.$onPlayheadUpdate$, this);
        this.$videoPlayer_$.$listenPause$(this.$onPause$, this);
        this.$videoPlayer_$.$listenPlaying$(this.$onPlaying$, this);
        this.$videoPlayer_$.$listenDurationChange$(this.$onDurationChange$, this);
    }

    $goog$inherits$$($viewbix$sdk$video$UniqueRunTracker$$, $goog$events$EventTarget$$);
    $JSCompiler_prototypeAlias$$ = $viewbix$sdk$video$UniqueRunTracker$$.prototype;
    $JSCompiler_prototypeAlias$$.$onPlayheadUpdate$ = function $$JSCompiler_prototypeAlias$$$$onPlayheadUpdate$$() {
        this.$videoPlayer_$.paused() || this.log();
    };
    $JSCompiler_prototypeAlias$$.$onPause$ = function $$JSCompiler_prototypeAlias$$$$onPause$$() {
        $JSCompiler_StaticMethods_stopLogging$$(this);
    };
    $JSCompiler_prototypeAlias$$.$onPlaying$ = function $$JSCompiler_prototypeAlias$$$$onPlaying$$() {
        this.log();
    };
    $JSCompiler_prototypeAlias$$.$onDurationChange$ = function $$JSCompiler_prototypeAlias$$$$onDurationChange$$() {
        $JSCompiler_StaticMethods_getVideoRuns$$(this, this.$videoPlayer_$.currentSrc()).totalTime(this.$videoPlayer_$.duration());
    };
    $JSCompiler_prototypeAlias$$.log = function $$JSCompiler_prototypeAlias$$$log$() {
        var $existingRun_url$$54$$ = this.$videoPlayer_$.currentSrc(), $run$$2_t$$10$$ = this.$videoPlayer_$.currentTime(), $totalTime$$1_videoRuns$$1$$ = this.$videoPlayer_$.duration();
        null === this.$openRun_$ ? $goog$isNull$$(this.$findRun$($existingRun_url$$54$$, $run$$2_t$$10$$)) && ($run$$2_t$$10$$ = new $viewbix$sdk$video$Run$$($run$$2_t$$10$$), $totalTime$$1_videoRuns$$1$$ = $JSCompiler_StaticMethods_getVideoRuns$$(this, $existingRun_url$$54$$, $totalTime$$1_videoRuns$$1$$), $totalTime$$1_videoRuns$$1$$.push($run$$2_t$$10$$), this.$openRun_$ = $run$$2_t$$10$$, this.$currentVideoUrl_$ = $existingRun_url$$54$$, $totalTime$$1_videoRuns$$1$$.$alreadyDispatchedStart$ || ($totalTime$$1_videoRuns$$1$$.$alreadyDispatchedStart$ = !0)) : $existingRun_url$$54$$ != this.$currentVideoUrl_$ ? ($JSCompiler_StaticMethods_stopLogging$$(this), this.log()) : ($existingRun_url$$54$$ = this.$findRun$($existingRun_url$$54$$, $run$$2_t$$10$$), null === $existingRun_url$$54$$ || $existingRun_url$$54$$ === this.$openRun_$ ? $JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$$(this, $run$$2_t$$10$$, $totalTime$$1_videoRuns$$1$$) : ($JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$$(this, $existingRun_url$$54$$.start,
            $totalTime$$1_videoRuns$$1$$), this.$openRun_$ = null));
    };
    function $JSCompiler_StaticMethods_stopLogging$$($JSCompiler_StaticMethods_stopLogging$self$$) {
        var $t$$11$$ = $JSCompiler_StaticMethods_stopLogging$self$$.$videoPlayer_$.currentTime();
        null != $JSCompiler_StaticMethods_stopLogging$self$$.$openRun_$ && $t$$11$$ > $JSCompiler_StaticMethods_stopLogging$self$$.$openRun_$.end && $JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$$($JSCompiler_StaticMethods_stopLogging$self$$, $t$$11$$, $JSCompiler_StaticMethods_stopLogging$self$$.$videoPlayer_$.duration());
        $JSCompiler_StaticMethods_stopLogging$self$$.$openRun_$ = null;
        $JSCompiler_StaticMethods_stopLogging$self$$.$currentVideoUrl_$ = "";
    }

    $JSCompiler_prototypeAlias$$.$findRun$ = function $$JSCompiler_prototypeAlias$$$$findRun$$($url$$55$$, $t$$12$$) {
        return $JSCompiler_StaticMethods_getVideoRuns$$(this, $url$$55$$).$findRun$($t$$12$$);
    };
    function $JSCompiler_StaticMethods_getVideoRuns$$($JSCompiler_StaticMethods_getVideoRuns$self$$, $url$$56_videoRuns$$3$$, $opt_totalTime$$) {
        null != $opt_totalTime$$ || ($opt_totalTime$$ = NaN);
        for (var $i$$165$$ = 0; $i$$165$$ < $JSCompiler_StaticMethods_getVideoRuns$self$$.$videos_$.length; $i$$165$$++) {
            var $v$$3$$ = $JSCompiler_StaticMethods_getVideoRuns$self$$.$videos_$[$i$$165$$];
            if ($v$$3$$.url == $url$$56_videoRuns$$3$$) {
                return $v$$3$$;
            }
        }
        $url$$56_videoRuns$$3$$ = new $viewbix$sdk$video$VideoRuns$$($url$$56_videoRuns$$3$$, $opt_totalTime$$);
        $goog$array$insert$$($JSCompiler_StaticMethods_getVideoRuns$self$$.$videos_$, $url$$56_videoRuns$$3$$);
        return $url$$56_videoRuns$$3$$;
    }

    function $JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$$($JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$, $newRatio_t$$13$$, $d$$11_oldRatio$$) {
        if ("" == $JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$.$currentVideoUrl_$) {
            $JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$.$openRun_$.end = $newRatio_t$$13$$;
        } else {
            var $videoRuns$$5$$ = $JSCompiler_StaticMethods_getVideoRuns$$($JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$, $JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$.$currentVideoUrl_$);
            isNaN($videoRuns$$5$$.totalTime()) && $videoRuns$$5$$.totalTime($d$$11_oldRatio$$);
            $videoRuns$$5$$.$alreadyDispatchedStart$ || ($videoRuns$$5$$.$alreadyDispatchedStart$ = !0);
            $d$$11_oldRatio$$ = $JSCompiler_StaticMethods_ratio$$($videoRuns$$5$$);
            $JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$.$openRun_$.end = $newRatio_t$$13$$;
            $newRatio_t$$13$$ = $JSCompiler_StaticMethods_ratio$$($videoRuns$$5$$);
            for (var $closeEnough$$ = 60 <= $JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$.$videoPlayer_$.duration() ? .99 : .965, $i$$166$$ = 0; $i$$166$$ < $JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$.$thresholds_$.length; $i$$166$$++) {
                ($d$$11_oldRatio$$ < $JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$.$thresholds_$[$i$$166$$] || 0 == $d$$11_oldRatio$$ && 0 == $JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$.$thresholds_$[$i$$166$$]) && $newRatio_t$$13$$ >= $JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$.$thresholds_$[$i$$166$$] && (1 == $JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$.$thresholds_$[$i$$166$$] && $videoRuns$$5$$.$alreadyDispatchedOne$ ||
                $goog$events$dispatchEvent$$($JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$, new $viewbix$sdk$event$ThresholdEvent$$("threshold", $JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$.$thresholds_$[$i$$166$$], $JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$.$currentVideoUrl_$)), 1 == $JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$.$thresholds_$[$i$$166$$] && ($videoRuns$$5$$.$alreadyDispatchedOne$ = !0)), 1 == $JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$.$thresholds_$[$i$$166$$] &&
                $newRatio_t$$13$$ > $closeEnough$$ && !$videoRuns$$5$$.$alreadyDispatchedOne$ && ($videoRuns$$5$$.$alreadyDispatchedOne$ = !0, $goog$events$dispatchEvent$$($JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$, new $viewbix$sdk$event$ThresholdEvent$$("threshold", $JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$.$thresholds_$[$i$$166$$], $JSCompiler_StaticMethods_extendOpenRunAndCheckForThreshold$self$$.$currentVideoUrl_$)));
            }
        }
    }
    ;
    function $viewbix$sdk$track$Tracker$$() {
        $goog$events$EventTarget$$.call(this);
        this.$sessionBeginTime$ = NaN;
        this.$serverPrefix$ = "";
        var $prefixIndex_query$$17$$ = document.URL.indexOf("://") + 3;
        "local" == document.URL.substr($prefixIndex_query$$17$$, 5) ? this.$serverPrefix$ = "local" : "az-" == document.URL.substr($prefixIndex_query$$17$$, 3) && (this.$serverPrefix$ = "az-");
        this.$tracked100$ = this.$tracked75$ = this.$tracked50$ = this.$tracked25$ = this.$tracked0$ = !1;
        this.$videoRunTracker$ = this.$trackPage$ = this.$trackHost$ = null;
        $prefixIndex_query$$17$$ = new $goog$Uri$QueryData$$(document.location.search.substring(1));
        $prefixIndex_query$$17$$.$containsKey$($viewbix$sdk$track$TrackingParam$LOG_TRACKING$$) && $prefixIndex_query$$17$$.get($viewbix$sdk$track$TrackingParam$LOG_TRACKING$$);
    }

    $goog$inherits$$($viewbix$sdk$track$Tracker$$, $goog$events$EventTarget$$);
    $goog$addSingletonGetter$$($viewbix$sdk$track$Tracker$$);
    function $viewbix$sdk$track$Tracker$onVideoThreshold$$($e$$83$$) {
        $viewbix$sdk$track$Tracker$trackVideoQuartile$$($e$$83$$.value);
    }

    function $viewbix$sdk$track$Tracker$trackVideoQuartile$$($percent$$3$$, $opt_ended$$) {
        var $tracker$$1$$ = $viewbix$sdk$track$Tracker$$.$getInstance$(), $video$$ = $tracker$$1$$.$videoPlayer$;
        0 != $percent$$3$$ || $tracker$$1$$.$tracked0$ ? .25 != $percent$$3$$ || $tracker$$1$$.$tracked25$ ? .5 != $percent$$3$$ || $tracker$$1$$.$tracked50$ ? .75 != $percent$$3$$ || $tracker$$1$$.$tracked75$ ? 1 != $percent$$3$$ && !$opt_ended$$ || $tracker$$1$$.$tracked100$ || ($tracker$$1$$.$tracked100$ = !0, $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$VTHRESH_100$$, "", {$videoUrl$: $video$$.currentSrc()})) : ($tracker$$1$$.$tracked75$ = !0, $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$VTHRESH_75$$,
            "", {$videoUrl$: $video$$.currentSrc()})) : ($tracker$$1$$.$tracked50$ = !0, $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$VTHRESH_50$$, "", {$videoUrl$: $video$$.currentSrc()})) : ($tracker$$1$$.$tracked25$ = !0, $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$VTHRESH_25$$, "", {$videoUrl$: $video$$.currentSrc()})) : ($tracker$$1$$.$tracked0$ = !0, $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$VSTART_UNIQUE$$, "", {$videoUrl$: $video$$.currentSrc()}));
    }

    function $viewbix$sdk$track$Tracker$track$$($eventType$$14_host$$1_trackUrl_trackUrlTemplate_videoTime$$, $opt_data$$9_query$$20_trackPage$$, $opt_moreParams$$, $opt_trackingData$$10$$) {
        return;
        $viewbix$sdk$track$Snowplow$track$$($eventType$$14_host$$1_trackUrl_trackUrlTemplate_videoTime$$, $opt_trackingData$$10$$);
        if (!$goog$array$contains$$([$viewbix$sdk$track$TrackEventType$USER_APP_SKIP$$], $eventType$$14_host$$1_trackUrl_trackUrlTemplate_videoTime$$)) {
            var $info$$3_res$$inline_597$$ = {};
            if (null != $opt_moreParams$$) {
                var $info$$3_res$$inline_597$$ = {}, $key$$inline_598$$;
                for ($key$$inline_598$$ in $opt_moreParams$$) {
                    $info$$3_res$$inline_597$$[$key$$inline_598$$] = $opt_moreParams$$[$key$$inline_598$$];
                }
            }
            $info$$3_res$$inline_597$$[$viewbix$sdk$track$TrackingParam$EVENT_TYPE$$] = $eventType$$14_host$$1_trackUrl_trackUrlTemplate_videoTime$$;
            null != $opt_data$$9_query$$20_trackPage$$ && ($info$$3_res$$inline_597$$[$viewbix$sdk$track$TrackingParam$DATA$$] = $opt_data$$9_query$$20_trackPage$$);
            $info$$3_res$$inline_597$$[$viewbix$sdk$track$TrackingParam$SESSION_ID$$] = $viewbix$sdk$track$Tracker$$.$getInstance$().$sessionId$;
            $info$$3_res$$inline_597$$[$viewbix$sdk$track$TrackingParam$WIDGET_ID$$] = $viewbix$sdk$track$Tracker$$.$getInstance$().$playerId$;
            if (!($viewbix$sdk$track$TrackingParam$VIDEO_TIME$$ in $info$$3_res$$inline_597$$)) {
                $eventType$$14_host$$1_trackUrl_trackUrlTemplate_videoTime$$ = 0;
                try {
                    $eventType$$14_host$$1_trackUrl_trackUrlTemplate_videoTime$$ = $viewbix$sdk$track$Tracker$$.$getInstance$().$videoPlayer$.currentTime();
                } catch ($e$$84$$) {
                }
                $info$$3_res$$inline_597$$[$viewbix$sdk$track$TrackingParam$VIDEO_TIME$$] = $eventType$$14_host$$1_trackUrl_trackUrlTemplate_videoTime$$;
            }
            isNaN($viewbix$sdk$track$Tracker$$.$getInstance$().$sessionBeginTime$) ? ($viewbix$sdk$track$Tracker$$.$getInstance$().$sessionBeginTime$ = (new Date).getTime(), $info$$3_res$$inline_597$$[$viewbix$sdk$track$TrackingParam$SESSION_OFFSET$$] = 0) : $info$$3_res$$inline_597$$[$viewbix$sdk$track$TrackingParam$SESSION_OFFSET$$] = (new Date).getTime() - $viewbix$sdk$track$Tracker$$.$getInstance$().$sessionBeginTime$;
            $info$$3_res$$inline_597$$[$viewbix$sdk$track$TrackingParam$TRACKING_ID$$] = $viewbix$sdk$helper$GuidHelper$newGuid$$();
            $goog$object$extend$$($info$$3_res$$inline_597$$, $viewbix$sdk$track$Tracker$$.$getInstance$().$additionalParams$);
            $eventType$$14_host$$1_trackUrl_trackUrlTemplate_videoTime$$ = $goog$string$isEmptySafe$$($viewbix$sdk$track$Tracker$$.$getInstance$().$trackHost$) ? "https://" + $viewbix$sdk$track$Tracker$$.$getInstance$().$serverPrefix$ + "track.viewbix.com" : $viewbix$sdk$track$Tracker$$.$getInstance$().$trackHost$;
            $opt_data$$9_query$$20_trackPage$$ = $goog$string$isEmptySafe$$($viewbix$sdk$track$Tracker$$.$getInstance$().$trackPage$) ? "tracklog" : $viewbix$sdk$track$Tracker$$.$getInstance$().$trackPage$;
            $eventType$$14_host$$1_trackUrl_trackUrlTemplate_videoTime$$ = $eventType$$14_host$$1_trackUrl_trackUrlTemplate_videoTime$$ + "/" + $opt_data$$9_query$$20_trackPage$$ + "?";
            $opt_data$$9_query$$20_trackPage$$ = $viewbix$sdk$helper$UriHelper$objectToEncodedString$$($info$$3_res$$inline_597$$);
            $eventType$$14_host$$1_trackUrl_trackUrlTemplate_videoTime$$ += $opt_data$$9_query$$20_trackPage$$;
            $goog$events$dispatchEvent$$($viewbix$sdk$track$Tracker$$.$getInstance$(), new $viewbix$sdk$event$TrackerServiceEvent$$($info$$3_res$$inline_597$$, $opt_trackingData$$10$$));
            $viewbix$sdk$helper$XhrHelper$send$$($eventType$$14_host$$1_trackUrl_trackUrlTemplate_videoTime$$);
        }
    }

    var $viewbix$sdk$track$TrackingParam$EVENT_TYPE$$ = "et", $viewbix$sdk$track$TrackingParam$HTTP_REFERRER$$ = "r", $viewbix$sdk$track$TrackingParam$SESSION_ID$$ = "s", $viewbix$sdk$track$TrackingParam$SESSION_OFFSET$$ = "soms", $viewbix$sdk$track$TrackingParam$TRACKING_ID$$ = "t", $viewbix$sdk$track$TrackingParam$DATA$$ = "td", $viewbix$sdk$track$TrackingParam$VIDEO_TIME$$ = "vt", $viewbix$sdk$track$TrackingParam$WIDGET_ID$$ = "w", $viewbix$sdk$track$TrackingParam$LOG_TRACKING$$ = "logtracking", $viewbix$sdk$track$TrackEventType$VSTART_UNIQUE$$ =
        "VSTART_UNIQUE", $viewbix$sdk$track$TrackEventType$VTHRESH_25$$ = "VTHRESH_25", $viewbix$sdk$track$TrackEventType$VTHRESH_50$$ = "VTHRESH_50", $viewbix$sdk$track$TrackEventType$VTHRESH_75$$ = "VTHRESH_75", $viewbix$sdk$track$TrackEventType$VTHRESH_100$$ = "VTHRESH_100", $viewbix$sdk$track$TrackEventType$USER_CLICK_CALL_TO_ACTION$$ = "USER_CLICK_CALL_TO_ACTION", $viewbix$sdk$track$TrackEventType$USER_CLICK_VIDEO_CALL_TO_ACTION$$ = "USER_CLICK_VIDEO_CALL_TO_ACTION", $viewbix$sdk$track$TrackEventType$USER_CLICK_MENU_ITEM$$ =
        "USER_CLICK_MENU_ITEM", $viewbix$sdk$track$TrackEventType$SYSTEM_SHOW_PREROLL_APP$$ = "SYSTEM_SHOW_PREROLL_APP", $viewbix$sdk$track$TrackEventType$SYSTEM_SHOW_MIDROLL_APP$$ = "SYSTEM_SHOW_MIDROLL_APP", $viewbix$sdk$track$TrackEventType$SYSTEM_SHOW_POSTROLL_APP$$ = "SYSTEM_SHOW_POSTROLL_APP", $viewbix$sdk$track$TrackEventType$USER_APP_COMPLETE$$ = "USER_APP_COMPLETE", $viewbix$sdk$track$TrackEventType$USER_ROLLAPP_COMPLETE$$ = "USER_ROLLAPP_COMPLETE", $viewbix$sdk$track$TrackEventType$USER_APP_SKIP$$ =
        "USER_APP_SKIP", $viewbix$sdk$track$TrackEventType$USER_APP_SELECT$$ = "USER_APP_SELECT", $viewbix$sdk$track$TrackEventType$USER_APP_DESELECT$$ = "USER_APP_DESELECT", $viewbix$sdk$track$TrackEventType$USER_APP_LOAD$$ = "USER_APP_LOAD", $viewbix$sdk$track$TrackEventType$USER_APP_RENDER$$ = "USER_APP_RENDER", $viewbix$sdk$track$TrackEventType$USER_CLICK_LOGO$$ = "USER_CLICK_LOGO", $viewbix$sdk$track$TrackEventType$USER_CLICK_SLIDER_IMAGE$$ = "USER_CLICK_SLIDER_IMAGE", $viewbix$sdk$track$TrackEventType$USER_NAVIGATE_TO_PAGE$$ =
        "USER_NAVIGATE_TO_PAGE", $viewbix$sdk$track$TrackEventType$IMPRESSION$$ = "IMPRESSION", $viewbix$sdk$track$PlayerState$UNSTARTED$$ = "unstarted", $viewbix$sdk$track$PlayerState$PLAYING$$ = "playing", $viewbix$sdk$track$PlayerState$PAUSED$$ = "paused";

    function $viewbix$sdk$Agent$$($configuration$$5$$, $cssRuleTexts$$, $opt_serviceUrl$$) {
        $goog$events$EventTarget$$.call(this);
        this.$configuration_$ = $configuration$$5$$;
        this.$selected_$ = !1;
        this.$serviceUrl_$ = null != $opt_serviceUrl$$ ? $opt_serviceUrl$$ : $viewbix$sdk$helper$UriHelper$getProtocolAndDomain$$();
        this.$completeCallbacks_$ = [];
        this.$messageCallbacks_$ = [];
        this.$cssRuleTexts_$ = $cssRuleTexts$$ || [];
    }

    $goog$inherits$$($viewbix$sdk$Agent$$, $goog$events$EventTarget$$);
    $viewbix$sdk$Agent$$.prototype.$onMessage$ = function $$viewbix$sdk$Agent$$$$$onMessage$$($message$$31$$) {
        console.log('onMessage:' + $message$$31$$.name);
        switch ($message$$31$$.name) {
            case "COMPLETE":
                var $referrer$$3_trackingData$$2$$ = new $viewbix$sdk$track$TrackingData$$(null, this.$configuration_$, null, "complete", null);
                $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$USER_APP_COMPLETE$$, this.$configuration_$[$viewbix$sdk$Layout$ConfigurationsPropertyName$COMPONENT$$], null, $referrer$$3_trackingData$$2$$);
                $goog$array$forEach$$(this.$completeCallbacks_$, function ($callback$$112$$) {
                    $callback$$112$$.$func$.call($callback$$112$$.scope);
                }, this);
                this.$completeCallbacks_$ = [];
                break;
            case "TRACK":
                var $data$$72_query$$21$$ = $message$$31$$.data, $referrer$$3_trackingData$$2$$ = $viewbix$sdk$track$TrackingData$CreateTrackingDataFromStringLiteralObject$$($data$$72_query$$21$$.trackingData);
                $viewbix$sdk$track$Tracker$track$$($data$$72_query$$21$$.eventType, $data$$72_query$$21$$.data, $data$$72_query$$21$$.params, $referrer$$3_trackingData$$2$$);
                break;
            case "DOM_CONTENT_LOADED":
                $referrer$$3_trackingData$$2$$ = new $viewbix$sdk$track$TrackingData$$(null, this.$configuration_$, null, "render", null), $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$USER_APP_RENDER$$, this.$configuration_$[$viewbix$sdk$Layout$ConfigurationsPropertyName$COMPONENT$$], null, $referrer$$3_trackingData$$2$$), this.send($viewbix$sdk$XpcMessage$createXpcPayload$$("SET_CSS", this.$cssRuleTexts_$)), $referrer$$3_trackingData$$2$$ = document.referrer, $data$$72_query$$21$$ =
                    new $goog$Uri$QueryData$$(document.location.search.substring(1)), $data$$72_query$$21$$.$containsKey$($viewbix$sdk$track$TrackingParam$HTTP_REFERRER$$) && ($referrer$$3_trackingData$$2$$ = $data$$72_query$$21$$.get($viewbix$sdk$track$TrackingParam$HTTP_REFERRER$$)), this.send($viewbix$sdk$XpcMessage$createXpcPayload$$("SET_CONFIG", {
                    name: "player.referrer",
                    value: $referrer$$3_trackingData$$2$$
                }));
        }
        $goog$array$forEach$$(this.$messageCallbacks_$, function ($callback$$113$$) {
            $callback$$113$$.$func$.call($callback$$113$$.scope, $message$$31$$, this);
        }, this);
    };
    $viewbix$sdk$Agent$$.prototype.load = function $$viewbix$sdk$Agent$$$$load$($opt_callback$$14$$) {
        console.log('agent load');
        var $config$$1$$ = {};
        $config$$1$$.pu = this.$serviceUrl_$ + "/app/" + VBX_VERSION + "/" +
            this.$configuration_$[$viewbix$sdk$Agent$ConfigurationsPropertyName$ID$$] +
            document.location.search;
        //console.log($config$$1$$);
        this.$channel_$ = new $goog$net$xpc$CrossPageChannel$$($config$$1$$);
        //console.log('channel');
        //console.log(this.$channel_$);
        $JSCompiler_StaticMethods_registerService$$(this.$channel_$, "AGENT",
            $goog$bind$$(function ($payload$$33$$) {
                this.$onMessage$($viewbix$sdk$XpcMessage$fromXpcPayload$$($payload$$33$$));
            }, this), !0);

        this.$element_$ = $goog$dom$createDom$$("DIV", {"class": "vbx-app"});
        $JSCompiler_StaticMethods_createPeerIframe$$(this.$channel_$, this.$element_$,
            $goog$bind$$(function ($iframe$$3$$) {
                this.$iframeElement_$ = $iframe$$3$$;
                this.dispatchEvent(new $viewbix$sdk$event$IframeCreatedEvent$$($iframe$$3$$));
                $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$USER_APP_LOAD$$, void 0, null, new $viewbix$sdk$track$TrackingData$$(null, this.$configuration_$, null, "load", null));
            }, this));

        this.$channel_$.$connect$($goog$bind$$(function () {
            $goog$isFunction$$($opt_callback$$14$$) && $opt_callback$$14$$();
        }, this));
        return this.$element_$;
    };
    $viewbix$sdk$Agent$$.prototype.$getElement$ = function $$viewbix$sdk$Agent$$$$$getElement$$() {
        return this.$element_$;
    };
    function $JSCompiler_StaticMethods_setSelected$$($JSCompiler_StaticMethods_setSelected$self$$, $set$$) {
        if (!$JSCompiler_StaticMethods_setSelected$self$$.$selected_$ && $set$$) {
            var $trackingData$$4$$ = new $viewbix$sdk$track$TrackingData$$(null, $JSCompiler_StaticMethods_setSelected$self$$.$configuration_$, null, "select", null);
            $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$USER_APP_SELECT$$, $JSCompiler_StaticMethods_setSelected$self$$.$configuration_$[$viewbix$sdk$Layout$ConfigurationsPropertyName$COMPONENT$$], null, $trackingData$$4$$);
        } else {
            $JSCompiler_StaticMethods_setSelected$self$$.$selected_$ && !$set$$ && ($trackingData$$4$$ = new $viewbix$sdk$track$TrackingData$$(null, $JSCompiler_StaticMethods_setSelected$self$$.$configuration_$, null, "deselect", null), $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$USER_APP_DESELECT$$, $JSCompiler_StaticMethods_setSelected$self$$.$configuration_$[$viewbix$sdk$Layout$ConfigurationsPropertyName$COMPONENT$$], null, $trackingData$$4$$));
        }
        $JSCompiler_StaticMethods_setSelected$self$$.$selected_$ = $set$$;
        $JSCompiler_StaticMethods_setSelected$self$$.send($viewbix$sdk$XpcMessage$createXpcPayload$$("SET_SELECTED", $set$$));
    }

    $viewbix$sdk$Agent$$.prototype.send = function $$viewbix$sdk$Agent$$$$send$($payload$$34$$) {
        //console.log('send:AGENT');
        //console.log($payload$$34$$);
        null != $payload$$34$$ && this.$channel_$.send("AGENT", $payload$$34$$);
    };
    function $JSCompiler_StaticMethods_listenOnceComplete$$($JSCompiler_StaticMethods_listenOnceComplete$self$$, $func$$7$$, $scope$$7$$) {
        $goog$array$insert$$($JSCompiler_StaticMethods_listenOnceComplete$self$$.$completeCallbacks_$, {
            $func$: $func$$7$$,
            scope: $scope$$7$$
        });
    }

    var $viewbix$sdk$Agent$ConfigurationsPropertyName$ID$$ = "id";

    function $viewbix$sdk$helper$LinkHelper$changeHrefToWindowOpen$$($rootNode$$1$$) {
        if ("link" != $rootNode$$1$$.tagName.toLowerCase()) {
            var $originalOnClick$$ = $rootNode$$1$$.onclick;
            if (!$goog$string$isEmptySafe$$($rootNode$$1$$.getAttribute("href"))) {
                var $href$$3$$ = $rootNode$$1$$.getAttribute("href"), $target$$61$$ = $rootNode$$1$$.getAttribute("target");
                $goog$string$isEmptySafe$$($target$$61$$) && ($target$$61$$ = "_blank");
                var $trackEvent$$1$$ = "", $trackData$$1$$ = "", $children_track$$2_trackParams$$ = $rootNode$$1$$.getAttribute("data-vbx-track");
                $goog$string$isEmptySafe$$($children_track$$2_trackParams$$) || ($children_track$$2_trackParams$$ = $children_track$$2_trackParams$$.split(","), 0 < $children_track$$2_trackParams$$.length && ($trackEvent$$1$$ = $children_track$$2_trackParams$$[0]), 1 < $children_track$$2_trackParams$$.length && ($trackData$$1$$ = $children_track$$2_trackParams$$[1]));
                $goog$style$setStyle$$($rootNode$$1$$, "cursor", "pointer");
                $rootNode$$1$$.onclick = null != $originalOnClick$$ ? function () {
                    $originalOnClick$$.apply($rootNode$$1$$) && ($goog$string$isEmptySafe$$($trackEvent$$1$$) || $viewbix$sdk$track$Tracker$track$$($trackEvent$$1$$, $trackData$$1$$), window.open($href$$3$$, $target$$61$$));
                    return !1;
                } : function () {
                    if (!$goog$string$isEmptySafe$$($trackEvent$$1$$)) {
                        var $trackingData$$5$$ = $viewbix$sdk$track$TrackingData$CreateTrackingData$$($trackEvent$$1$$, $trackData$$1$$, $href$$3$$);
                        $viewbix$sdk$track$Tracker$track$$($trackEvent$$1$$, $trackData$$1$$, null, $trackingData$$5$$);
                    }
                    window.open($href$$3$$, $target$$61$$);
                    return !1;
                };
            }
            for (var $children_track$$2_trackParams$$ = $rootNode$$1$$.children, $i$$167$$ = 0; $i$$167$$ < $children_track$$2_trackParams$$.length; $i$$167$$++) {
                $viewbix$sdk$helper$LinkHelper$changeHrefToWindowOpen$$($children_track$$2_trackParams$$[$i$$167$$]);
            }
        }
    }
    ;
    function $viewbix$sdk$Core$$() {
        $goog$events$EventTarget$$.call(this);
    }

    $goog$inherits$$($viewbix$sdk$Core$$, $goog$events$EventTarget$$);
    var $viewbix$sdk$Core$detectedFeatures$$ = null;

    function $JSCompiler_StaticMethods_bindDataAttribute$$($JSCompiler_StaticMethods_bindDataAttribute$self$$, $element$$141$$, $attribute$$) {
        var $configDefinition$$2$$ = $attribute$$.value.split("/"), $configDefinition$$2$$ = $configDefinition$$2$$[$configDefinition$$2$$.length - 1], $rawTarget$$ = $attribute$$.name.substr(8);
        $viewbix$sdk$helper$BindHelper$bindConfigDefinition$$($configDefinition$$2$$, function ($configValue$$1_hex$$4_removeString$$) {
            var $addString_target$$62_toAdd$$ = $rawTarget$$;
            if ($goog$string$isEmptySafe$$($addString_target$$62_toAdd$$)) {
                $element$$141$$.innerHTML = $configValue$$1_hex$$4_removeString$$;
            } else {
                if ($goog$string$caseInsensitiveStartsWith$$($addString_target$$62_toAdd$$, "-style-")) {
                    $addString_target$$62_toAdd$$ = $addString_target$$62_toAdd$$.substr(7), /color/i.test($addString_target$$62_toAdd$$) ? ($configValue$$1_hex$$4_removeString$$ = $viewbix$sdk$helper$ColorHelper$colorToString$$($configValue$$1_hex$$4_removeString$$), $goog$style$setStyle$$($element$$141$$, $addString_target$$62_toAdd$$, $configValue$$1_hex$$4_removeString$$)) : "background-image" == $addString_target$$62_toAdd$$ ? $goog$style$setStyle$$($element$$141$$, $addString_target$$62_toAdd$$, "url(" +
                        $configValue$$1_hex$$4_removeString$$ + ")") : $goog$style$setStyle$$($element$$141$$, $addString_target$$62_toAdd$$, $configValue$$1_hex$$4_removeString$$);
                } else {
                    if ("-track" != $addString_target$$62_toAdd$$) {
                        if ($goog$string$caseInsensitiveStartsWith$$($addString_target$$62_toAdd$$, "-") && ($addString_target$$62_toAdd$$ = $addString_target$$62_toAdd$$.substr(1)), "class" == $addString_target$$62_toAdd$$) {
                            var $addString_target$$62_toAdd$$ = [], $toRemove$$ = [];
                            $goog$isObject$$($configValue$$1_hex$$4_removeString$$) ? ($addString_target$$62_toAdd$$ = $goog$string$trim$$($goog$object$get$$($configValue$$1_hex$$4_removeString$$, "add")), $configValue$$1_hex$$4_removeString$$ = $goog$string$trim$$($goog$object$get$$($configValue$$1_hex$$4_removeString$$, "remove")), $addString_target$$62_toAdd$$ = $viewbix$sdk$helper$StringHelper$splitAndTrim$$($addString_target$$62_toAdd$$, " "), $toRemove$$ = $viewbix$sdk$helper$StringHelper$splitAndTrim$$($configValue$$1_hex$$4_removeString$$,
                                " ")) : $goog$isString$$($configValue$$1_hex$$4_removeString$$) && $goog$array$insert$$($addString_target$$62_toAdd$$, $configValue$$1_hex$$4_removeString$$);
                            $element$$141$$ == document.querySelector("body") ? $JSCompiler_StaticMethods_removeAddStateClasses$$(0, $toRemove$$, $addString_target$$62_toAdd$$) : ($goog$dom$classlist$removeAll$$($element$$141$$, $toRemove$$), $goog$dom$classlist$addAll$$($element$$141$$, $addString_target$$62_toAdd$$));
                        } else {
                            $element$$141$$.setAttribute($addString_target$$62_toAdd$$, $configValue$$1_hex$$4_removeString$$);
                        }
                    }
                }
            }
        }, $JSCompiler_StaticMethods_bindDataAttribute$self$$);
    }

    $viewbix$sdk$Core$$.prototype.$bindElement$ = function $$viewbix$sdk$Core$$$$$bindElement$$($element$$142$$) {
        if ($goog$dom$isElement$$($element$$142$$) && $goog$array$some$$($element$$142$$.attributes, function ($a$$42$$) {
                return $goog$string$caseInsensitiveStartsWith$$($a$$42$$.name, "data-vbx");
            })) {
            var $attributesObject$$ = $goog$array$toObject$$($element$$142$$.attributes, function ($attr$$8$$) {
                return $attr$$8$$.name;
            }, this);
            $goog$object$forEach$$($attributesObject$$, function ($attr$$9$$, $name$$94$$) {
                $goog$string$caseInsensitiveStartsWith$$($name$$94$$, "data-vbx") && $JSCompiler_StaticMethods_bindDataAttribute$$(this, $element$$142$$, $attr$$9$$);
            }, this);
        }
        return !1;
    };
    function $viewbix$sdk$Core$isIPhone$$() {
        return $goog$userAgent$detectedIPhone_$$;
    }

    function $viewbix$sdk$Core$isTouch$$() {
        var $isTablet$$ = $goog$labs$userAgent$device$isTablet$$();
        return !$goog$labs$userAgent$device$isTablet$$() && ($goog$labs$userAgent$util$matchUserAgent$$("iPod") || $goog$labs$userAgent$util$matchUserAgent$$("iPhone") || $goog$labs$userAgent$util$matchUserAgent$$("Android")) || $isTablet$$;
    }

    function $viewbix$sdk$Core$booleanParser$$($statement$$, $callback$$114$$) {
        for (var $re$$5$$ = /[^\&\|\(\)\! ]+/g, $m$$6$$ = null, $newStatement$$ = "", $lastIndex$$ = 0; $m$$6$$ = $re$$5$$.exec($statement$$);) {
            $newStatement$$ += $statement$$.substring($lastIndex$$, $m$$6$$.index), $newStatement$$ += $callback$$114$$($m$$6$$[0]), $lastIndex$$ = $m$$6$$.index + $m$$6$$[0].length;
        }
        $newStatement$$ += $statement$$.substring($lastIndex$$);
        return eval($newStatement$$);
    }

    var $viewbix$sdk$Core$stateCallbacks_$$ = {};
    $viewbix$sdk$Core$$.prototype.$removeStateClasses$ = function $$viewbix$sdk$Core$$$$$removeStateClasses$$($var_args$$97$$) {
        $goog$isArrayLike$$(arguments) && 0 < arguments.length && !$goog$string$isEmptySafe$$(arguments[0]) && ($goog$dom$classlist$removeAll$$.apply(this, [document.body, $goog$array$toArray$$(arguments)]), $viewbix$sdk$Core$callStateCallbacks$$());
    };
    $viewbix$sdk$Core$$.prototype.$addStateClasses$ = function $$viewbix$sdk$Core$$$$$addStateClasses$$($var_args$$98$$) {
        $goog$isArrayLike$$(arguments) && 0 < arguments.length && !$goog$string$isEmptySafe$$(arguments[0]) && ($goog$dom$classlist$addAll$$.apply(this, [document.body, $goog$array$toArray$$(arguments)]), $viewbix$sdk$Core$callStateCallbacks$$());
    };
    function $JSCompiler_StaticMethods_removeAddStateClasses$$($JSCompiler_StaticMethods_removeAddStateClasses$self_didRemoveOrAdd$$, $remove$$, $add$$3$$) {
        $JSCompiler_StaticMethods_removeAddStateClasses$self_didRemoveOrAdd$$ = !1;
        if (!$viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($remove$$) && !$goog$string$isEmptySafe$$($remove$$[0]) || $goog$isString$$($remove$$) && !$goog$string$isEmptySafe$$($remove$$)) {
            $goog$dom$classlist$removeAll$$(document.body, $viewbix$sdk$helper$ArrayHelper$getAsArray$$($remove$$)), $JSCompiler_StaticMethods_removeAddStateClasses$self_didRemoveOrAdd$$ = !0;
        }
        if (!$viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($add$$3$$) && !$goog$string$isEmptySafe$$($add$$3$$[0]) || $goog$isString$$($add$$3$$) && !$goog$string$isEmptySafe$$($add$$3$$)) {
            $goog$dom$classlist$addAll$$(document.body, $viewbix$sdk$helper$ArrayHelper$getAsArray$$($add$$3$$)), $JSCompiler_StaticMethods_removeAddStateClasses$self_didRemoveOrAdd$$ = !0;
        }
        $JSCompiler_StaticMethods_removeAddStateClasses$self_didRemoveOrAdd$$ && $viewbix$sdk$Core$callStateCallbacks$$();
    }

    var $viewbix$sdk$Core$firingStateCallbacks_$$ = !1;

    function $viewbix$sdk$Core$callStateCallbacks$$() {
        $viewbix$sdk$Core$firingStateCallbacks_$$ || ($viewbix$sdk$Core$firingStateCallbacks_$$ = !0, $goog$object$forEach$$($viewbix$sdk$Core$stateCallbacks_$$, function ($callbacks$$2$$, $state$$3$$) {
            $viewbix$sdk$Core$booleanParser$$($state$$3$$, function ($s$$39$$) {
                return $goog$dom$classlist$contains$$(document.body, $s$$39$$);
            }) && $goog$array$forEach$$($callbacks$$2$$, function ($callback$$115$$) {
                $callback$$115$$();
            });
        }), $viewbix$sdk$Core$firingStateCallbacks_$$ = !1);
    }

    function $viewbix$sdk$Core$isState$$($state$$4$$) {
        return $viewbix$sdk$Core$booleanParser$$($state$$4$$, function ($s$$40$$) {
            return $goog$dom$classlist$contains$$(document.body, $s$$40$$);
        });
    }

    var $viewbix$sdk$Core$PAUSE_ALL_MEDIA_FUNCTION$$ = null, $viewbix$sdk$Core$windowOpen$$ = window.open;
    window.open = function $window$open$($opt_url$$3_queryParams$$inline_604$$, $opt_name$$1$$, $opt_features$$, $opt_bool$$) {
        null != $viewbix$sdk$Core$PAUSE_ALL_MEDIA_FUNCTION$$ && $viewbix$sdk$Core$PAUSE_ALL_MEDIA_FUNCTION$$();
        a: {
            var $qp$$inline_617_url$$inline_602$$ = $opt_url$$3_queryParams$$inline_604$$, $configFunction$$inline_603_linkParts$$inline_616_namedGroups$$inline_610_reString0$$inline_607$$ = null;
            try {
                null != getPlayerConfigurations && $goog$isFunction$$(getPlayerConfigurations) && ($configFunction$$inline_603_linkParts$$inline_616_namedGroups$$inline_610_reString0$$inline_607$$ = getPlayerConfigurations);
            } catch ($e$$inline_625$$) {
            }
            try {
                null != getAppConfigs && $goog$isFunction$$(getAppConfigs) && ($configFunction$$inline_603_linkParts$$inline_616_namedGroups$$inline_610_reString0$$inline_607$$ = getAppConfigs);
            } catch ($e$$inline_626$$) {
            }
            if ($goog$isFunction$$($configFunction$$inline_603_linkParts$$inline_616_namedGroups$$inline_610_reString0$$inline_607$$)) {
                $opt_url$$3_queryParams$$inline_604$$ = $viewbix$sdk$helper$UriHelper$getParameters$$(document.location.href);
                for (var $k$$inline_620_linkQuery$$inline_618_regexArray$$inline_605$$ = $configFunction$$inline_603_linkParts$$inline_616_namedGroups$$inline_610_reString0$$inline_607$$().affiliateRegex, $currentValue$$inline_1143_i$$inline_606_linkQueryParams$$inline_619$$ = 0; $currentValue$$inline_1143_i$$inline_606_linkQueryParams$$inline_619$$ < $k$$inline_620_linkQuery$$inline_618_regexArray$$inline_605$$.length; $currentValue$$inline_1143_i$$inline_606_linkQueryParams$$inline_619$$++) {
                    for (var $configFunction$$inline_603_linkParts$$inline_616_namedGroups$$inline_610_reString0$$inline_607$$ = $k$$inline_620_linkQuery$$inline_618_regexArray$$inline_605$$[$currentValue$$inline_1143_i$$inline_606_linkQueryParams$$inline_619$$], $configFunction$$inline_603_linkParts$$inline_616_namedGroups$$inline_610_reString0$$inline_607$$ = $configFunction$$inline_603_linkParts$$inline_616_namedGroups$$inline_610_reString0$$inline_607$$.replace(/\\\|/g, "&pipe;"), $index$$inline_1144_linkQueryParamParts$$inline_621_reArray$$inline_608$$ =
                        $configFunction$$inline_603_linkParts$$inline_616_namedGroups$$inline_610_reString0$$inline_607$$.split("|"), $j$$inline_609_linkQueryParamName$$inline_622$$ = 0; $j$$inline_609_linkQueryParamName$$inline_622$$ < $index$$inline_1144_linkQueryParamParts$$inline_621_reArray$$inline_608$$.length; $j$$inline_609_linkQueryParamName$$inline_622$$++) {
                        var $configFunction$$inline_603_linkParts$$inline_616_namedGroups$$inline_610_reString0$$inline_607$$ = {}, $m$$inline_615_reString$$inline_611$$ = $index$$inline_1144_linkQueryParamParts$$inline_621_reArray$$inline_608$$[$j$$inline_609_linkQueryParamName$$inline_622$$], $m$$inline_615_reString$$inline_611$$ = $m$$inline_615_reString$$inline_611$$.replace("&pipe;", "\\|"), $reGroupFinder$$inline_612$$ = /\?P<([^>]+)>/g, $groupNumber$$inline_613$$ = 0, $groupMatch$$inline_614$$;
                        do {
                            $groupMatch$$inline_614$$ = $reGroupFinder$$inline_612$$.exec($m$$inline_615_reString$$inline_611$$), null != $groupMatch$$inline_614$$ && ($groupNumber$$inline_613$$++, $configFunction$$inline_603_linkParts$$inline_616_namedGroups$$inline_610_reString0$$inline_607$$[$groupNumber$$inline_613$$] = $groupMatch$$inline_614$$[1]);
                        } while (null != $groupMatch$$inline_614$$);
                        $reGroupFinder$$inline_612$$.lastIndex = 0;
                        $m$$inline_615_reString$$inline_611$$ = $m$$inline_615_reString$$inline_611$$.replace($reGroupFinder$$inline_612$$, "");
                        $m$$inline_615_reString$$inline_611$$ = (new RegExp($m$$inline_615_reString$$inline_611$$)).exec($qp$$inline_617_url$$inline_602$$);
                        if (null != $m$$inline_615_reString$$inline_611$$) {
                            if ("query" == $configFunction$$inline_603_linkParts$$inline_616_namedGroups$$inline_610_reString0$$inline_607$$[1]) {
                                if ($configFunction$$inline_603_linkParts$$inline_616_namedGroups$$inline_610_reString0$$inline_607$$ = $qp$$inline_617_url$$inline_602$$.split("?"), 1 < $configFunction$$inline_603_linkParts$$inline_616_namedGroups$$inline_610_reString0$$inline_607$$.length) {
                                    $qp$$inline_617_url$$inline_602$$ = {};
                                    $k$$inline_620_linkQuery$$inline_618_regexArray$$inline_605$$ = $configFunction$$inline_603_linkParts$$inline_616_namedGroups$$inline_610_reString0$$inline_607$$[1];
                                    $currentValue$$inline_1143_i$$inline_606_linkQueryParams$$inline_619$$ = $k$$inline_620_linkQuery$$inline_618_regexArray$$inline_605$$.split("&");
                                    for ($k$$inline_620_linkQuery$$inline_618_regexArray$$inline_605$$ = 0; $k$$inline_620_linkQuery$$inline_618_regexArray$$inline_605$$ < $currentValue$$inline_1143_i$$inline_606_linkQueryParams$$inline_619$$.length; $k$$inline_620_linkQuery$$inline_618_regexArray$$inline_605$$++) {
                                        $index$$inline_1144_linkQueryParamParts$$inline_621_reArray$$inline_608$$ = $currentValue$$inline_1143_i$$inline_606_linkQueryParams$$inline_619$$[$k$$inline_620_linkQuery$$inline_618_regexArray$$inline_605$$].split("="), $j$$inline_609_linkQueryParamName$$inline_622$$ = $index$$inline_1144_linkQueryParamParts$$inline_621_reArray$$inline_608$$[0], $qp$$inline_617_url$$inline_602$$[$j$$inline_609_linkQueryParamName$$inline_622$$] = $opt_url$$3_queryParams$$inline_604$$.hasOwnProperty($j$$inline_609_linkQueryParamName$$inline_622$$) ?
                                            $opt_url$$3_queryParams$$inline_604$$[$j$$inline_609_linkQueryParamName$$inline_622$$] : 1 < $index$$inline_1144_linkQueryParamParts$$inline_621_reArray$$inline_608$$.length ? null : $index$$inline_1144_linkQueryParamParts$$inline_621_reArray$$inline_608$$[1];
                                    }
                                    var $k$$inline_620_linkQuery$$inline_618_regexArray$$inline_605$$ = "", $key$$inline_623_queryParamValue$$inline_624$$;
                                    for ($key$$inline_623_queryParamValue$$inline_624$$ in $qp$$inline_617_url$$inline_602$$) {
                                        0 < $k$$inline_620_linkQuery$$inline_618_regexArray$$inline_605$$.length && ($k$$inline_620_linkQuery$$inline_618_regexArray$$inline_605$$ += "&"), $k$$inline_620_linkQuery$$inline_618_regexArray$$inline_605$$ += $key$$inline_623_queryParamValue$$inline_624$$ + "=" + $qp$$inline_617_url$$inline_602$$[$key$$inline_623_queryParamValue$$inline_624$$];
                                    }
                                    $qp$$inline_617_url$$inline_602$$ = $configFunction$$inline_603_linkParts$$inline_616_namedGroups$$inline_610_reString0$$inline_607$$[0] + "?" + $k$$inline_620_linkQuery$$inline_618_regexArray$$inline_605$$;
                                }
                            } else {
                                for ($k$$inline_620_linkQuery$$inline_618_regexArray$$inline_605$$ = 1; $k$$inline_620_linkQuery$$inline_618_regexArray$$inline_605$$ < $m$$inline_615_reString$$inline_611$$.length; $k$$inline_620_linkQuery$$inline_618_regexArray$$inline_605$$++) {
                                    $key$$inline_623_queryParamValue$$inline_624$$ = $opt_url$$3_queryParams$$inline_604$$[$configFunction$$inline_603_linkParts$$inline_616_namedGroups$$inline_610_reString0$$inline_607$$[$k$$inline_620_linkQuery$$inline_618_regexArray$$inline_605$$]], null != $key$$inline_623_queryParamValue$$inline_624$$ && ($currentValue$$inline_1143_i$$inline_606_linkQueryParams$$inline_619$$ = $m$$inline_615_reString$$inline_611$$[$k$$inline_620_linkQuery$$inline_618_regexArray$$inline_605$$], $index$$inline_1144_linkQueryParamParts$$inline_621_reArray$$inline_608$$ =
                                        $qp$$inline_617_url$$inline_602$$.indexOf($currentValue$$inline_1143_i$$inline_606_linkQueryParams$$inline_619$$, $m$$inline_615_reString$$inline_611$$.index), $qp$$inline_617_url$$inline_602$$ = $qp$$inline_617_url$$inline_602$$.substring(0, $index$$inline_1144_linkQueryParamParts$$inline_621_reArray$$inline_608$$) + $key$$inline_623_queryParamValue$$inline_624$$ + $qp$$inline_617_url$$inline_602$$.substr($index$$inline_1144_linkQueryParamParts$$inline_621_reArray$$inline_608$$ +
                                            $currentValue$$inline_1143_i$$inline_606_linkQueryParams$$inline_619$$.length));
                                }
                            }
                            $opt_url$$3_queryParams$$inline_604$$ = $qp$$inline_617_url$$inline_602$$;
                            break a;
                        }
                    }
                }
            }
            $opt_url$$3_queryParams$$inline_604$$ = $qp$$inline_617_url$$inline_602$$;
        }
        return $viewbix$sdk$Core$windowOpen$$.call(window, $opt_url$$3_queryParams$$inline_604$$, $opt_name$$1$$, $opt_features$$, $opt_bool$$);
    };
    $goog$exportPath_$$("VBX.select", function ($target$$63$$) {
        return new $viewbix$sdk$VbxNodeList$$($target$$63$$);
    }, void 0);
    $goog$exportPath_$$("VBX.contentLoaded", $viewbix$sdk$helper$WindowHelper$contentLoaded$$, void 0);
    $goog$exportPath_$$("VBX.listen", function ($element$$126$$, $type$$132$$, $listener$$77$$, $opt_capt$$13$$, $opt_handler$$14$$) {
        return $goog$isString$$($type$$132$$) && "resize" == $type$$132$$ && $element$$126$$ != window ? (window.$addResizeListener$ || $viewbix$sdk$helper$EventHelper$setupResizeListening$$(), window.$addResizeListener$($element$$126$$, null != $opt_handler$$14$$ ? $goog$bind$$($listener$$77$$, $opt_handler$$14$$) : $listener$$77$$), null) : $goog$events$listen$$($element$$126$$, $type$$132$$, $listener$$77$$, $opt_capt$$13$$, $opt_handler$$14$$);
    }, void 0);
    $goog$exportPath_$$("VBX.unlisten", function ($element$$127$$, $type$$133$$, $listener$$78$$, $opt_capt$$14$$, $opt_handler$$15$$) {
        return $goog$isString$$($type$$133$$) && "resize" == $type$$133$$ && $element$$127$$ != window && window.$removeResizeListener$ ? (window.$removeResizeListener$($element$$127$$, $listener$$78$$), !0) : $goog$events$unlisten$$($element$$127$$, $type$$133$$, $listener$$78$$, $opt_capt$$14$$, $opt_handler$$15$$);
    }, void 0);
    $goog$exportPath_$$("VBX.getSize", function ($element$$81$$) {
        return $goog$style$evaluateWithTemporaryDisplay_$$($element$$81$$);
    }, void 0);
    $goog$exportPath_$$("VBX.track", $viewbix$sdk$track$Tracker$track$$, void 0);
    $goog$exportPath_$$("VBX.empty", $goog$string$isEmptySafe$$, void 0);
    $goog$exportPath_$$("VBX.ok", function ($val$$2$$) {
        return null != $val$$2$$;
    }, void 0);
    $goog$exportPath_$$("VBX.px", function ($value$$179$$, $opt_units$$) {
        $goog$string$isEmptySafe$$($opt_units$$) && ($opt_units$$ = "px");
        var $num$$15$$ = parseFloat($value$$179$$);
        return isNaN($num$$15$$) ? "" : $num$$15$$.toString() + $opt_units$$;
    }, void 0);
    $goog$exportPath_$$("VBX.loading", function ($element$$133$$, $opt_loading$$) {
        $goog$isBoolean$$($opt_loading$$) || ($opt_loading$$ = !0);
        $goog$dom$isElement$$($element$$133$$) && ($opt_loading$$ ? $goog$dom$classlist$add$$($element$$133$$, "vbx-loading") : $goog$dom$classlist$remove$$($element$$133$$, "vbx-loading"));
    }, void 0);
    $goog$exportPath_$$("VBX.addClass", $goog$dom$classlist$add$$, void 0);
    $goog$exportPath_$$("VBX.removeClass", $goog$dom$classlist$remove$$, void 0);
    $goog$exportPath_$$("VBX.toBoolean", $viewbix$sdk$helper$BooleanHelper$convertToBoolean$$, void 0);
    $goog$exportPath_$$("VBX.colorIsBright", function ($b$$33_rgb$$11$$) {
        var $r$$10$$ = $b$$33_rgb$$11$$ >> 16 & 255, $g$$5$$ = $b$$33_rgb$$11$$ >> 8 & 255;
        $b$$33_rgb$$11$$ &= 255;
        return 145 < Math.sqrt(.241 * $r$$10$$ * $r$$10$$ + .691 * $g$$5$$ * $g$$5$$ + .068 * $b$$33_rgb$$11$$ * $b$$33_rgb$$11$$);
    }, void 0);
    $goog$exportPath_$$("VBX.colorToString", $viewbix$sdk$helper$ColorHelper$colorToString$$, void 0);
    $goog$exportPath_$$("VBX.supports", function ($feature$$4$$) {
        if (null === $viewbix$sdk$Core$detectedFeatures$$) {
            var $props$$1$$ = "textShadow textStroke boxShadow borderRadius borderImage opacity".split(" "), $CSSprefix$$ = ["Webkit", "Moz", "O", "ms", "Khtml"], $d$$12$$ = document.createElement("browserFeatureDetectElement"), $test$$ = [], $p$$7$$, $JSCompiler_inline_result$$73_all$$inline_690_pty$$;
            for ($p$$7$$ in $props$$1$$) {
                var $JSCompiler_temp_const$$72$$ = $JSCompiler_inline_result$$73_all$$inline_690_pty$$ = $props$$1$$[$p$$7$$];
                a: {
                    var $n$$inline_691_uprop$$inline_689$$ = $JSCompiler_inline_result$$73_all$$inline_690_pty$$.charAt(0).toUpperCase() + $JSCompiler_inline_result$$73_all$$inline_690_pty$$.substr(1);
                    $JSCompiler_inline_result$$73_all$$inline_690_pty$$ = ($JSCompiler_inline_result$$73_all$$inline_690_pty$$ + " " + $CSSprefix$$.join($n$$inline_691_uprop$$inline_689$$ + " ") + $n$$inline_691_uprop$$inline_689$$).split(" ");
                    for (var $n$$inline_691_uprop$$inline_689$$ = 0, $np$$inline_692$$ = $JSCompiler_inline_result$$73_all$$inline_690_pty$$.length; $n$$inline_691_uprop$$inline_689$$ < $np$$inline_692$$; $n$$inline_691_uprop$$inline_689$$++) {
                        if ("" === $d$$12$$.style[$JSCompiler_inline_result$$73_all$$inline_690_pty$$[$n$$inline_691_uprop$$inline_689$$]]) {
                            $JSCompiler_inline_result$$73_all$$inline_690_pty$$ = !0;
                            break a;
                        }
                    }
                    $JSCompiler_inline_result$$73_all$$inline_690_pty$$ = !1;
                }
                $test$$[$JSCompiler_temp_const$$72$$] = $JSCompiler_inline_result$$73_all$$inline_690_pty$$;
            }
            $viewbix$sdk$Core$detectedFeatures$$ = $test$$;
        }
        return $viewbix$sdk$Core$detectedFeatures$$[$feature$$4$$];
    }, void 0);
    $goog$exportPath_$$("VBX.extractLink", function ($JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$) {
        if (null == $JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$) {
            return null;
        }
        $JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$ = /(\<a\s+href\s*=\s*["']{1}|\<iframe.+?src\s*=\s*["']{1}(?:\/\/)?|data-href\s*=\s*["']{1})?\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u202A\u202C]))/ig.exec($JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$);
        null != $JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$ ? ($JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$ = $JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$[2], null != $JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$ ? ($JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$ = $goog$string$trim$$($JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$) || "", $goog$string$isEmptySafe$$($JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$) || 0 == $JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$.lastIndexOf("http://",
            0) || 0 == $JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$.lastIndexOf("https://", 0) || 0 == $JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$.lastIndexOf("tel://", 0) || 0 == $JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$.lastIndexOf("//", 0) || ($JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$ = "http://" + $JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$)) : $JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$ = null) : $JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$ =
            null;
        return $JSCompiler_temp$$7_m$$5_text$$23_text$$inline_698$$;
    }, void 0);
    $goog$exportPath_$$("VBX.linkify", function ($text$$24$$) {
        if (null == $text$$24$$) {
            return "";
        }
        $text$$24$$ = $text$$24$$.replace(/(\<a\s+href\s*=\s*["']{1}|\<img.+?src\s*=\s*["']{1}|\<iframe.+?src\s*=\s*["']{1}(?:\/\/)?|data-href\s*=\s*["']{1})?\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u202A\u202C]))/ig, function ($$0$$, $$1$$, $$2$$) {
            return null == $$1$$ || /^[\s\xa0]*$/.test($$1$$) ? "<a onclick='window.open(\"" + $$2$$ + '", "_blank");return false;\'>' + $$2$$ + "</a>" : $goog$string$caseInsensitiveStartsWith$$($$1$$, "<img") || $goog$string$caseInsensitiveStartsWith$$($$1$$, "<iframe") || $goog$string$caseInsensitiveStartsWith$$($$1$$, "data-href") ? $$0$$ : "<a onclick='window.open(\"" + $$2$$ + '", "_blank");return false;\'';
        });
        $text$$24$$ = $text$$24$$.replace(/\"www/g, '"http://www');
        return $goog$string$trim$$($text$$24$$);
    }, void 0);
    function $viewbix$sdk$Layout$$() {
        $goog$events$EventTarget$$.call(this);
        this.$videoPlayer$ = this.$containerParams_$ = this.$menuParams_$ = this.$videoPlayerParams_$ = this.$playerConfig$ = null;
        this.$showHideUiMap_$ = {};
        this.$showHideUiArray_$ = [];
        this.$menus$ = {};
        this.$containers_$ = {};
        this.$agents$ = {};
        this.$preRollApps_$ = [];
        this.$midRollApps_$ = [];
        this.$postRollApps_$ = [];
        this.$rollApps_$ = [];
        this.$currentRollApp_$ = null;
        this.$ctaApps_$ = [];
        this.$bannerApps_$ = [];
        this.$autoplay_$ = this.$firstInteractionTracked_$ = this.$vStartUniqueTracked_$ = this.$videoWasPlaying_$ = !1;
        this.$iosFixOverlay_$ = this.$posterUrl_$ = this.$videoUrl_$ = this.$appIframeCreatedCallback_$ = this.$appSelectedCallback_$ = this.$appCloseCallback_$ = null;
        this.$iosFixOverlayShown_$ = !1;
        this.$mouseTimer_$ = this.$videoDuration$ = this.$recentDuration$ = this.$recentStartSeconds$ = NaN;
        this.$vjsParentElementWidth$ = this.$vjsParentElementHeight$ = this.$vjsParentElementLeft$ = this.$vjsParentElementTop$ = this.$vjsParentElementPosition$ = null;
        this.ready = !1;
        var $autoPlayParam$$inline_711_queryParams$$inline_710$$ = $viewbix$sdk$helper$UriHelper$getParameters$$(document.location.href);
        $viewbix$sdk$Layout$QueryParamNames$AUTO_PLAY$$ in $autoPlayParam$$inline_711_queryParams$$inline_710$$ &&
        ($autoPlayParam$$inline_711_queryParams$$inline_710$$ = $autoPlayParam$$inline_711_queryParams$$inline_710$$[$viewbix$sdk$Layout$QueryParamNames$AUTO_PLAY$$].toLowerCase(),
        "false" == $autoPlayParam$$inline_711_queryParams$$inline_710$$ || "true" == $autoPlayParam$$inline_711_queryParams$$inline_710$$) && (this.$autoplay_$ = $viewbix$sdk$helper$BooleanHelper$convertToBoolean$$($autoPlayParam$$inline_711_queryParams$$inline_710$$));
        $goog$events$listen$$(this, "MENU_CLICKED", this.$onMenuClicked$, !1, this);
    }

    $goog$inherits$$($viewbix$sdk$Layout$$, $viewbix$sdk$Core$$);
    $goog$addSingletonGetter$$($viewbix$sdk$Layout$$);
    function $JSCompiler_StaticMethods_dispatchAllConfigEvents$$($JSCompiler_StaticMethods_dispatchAllConfigEvents$self$$) {
        $goog$object$forEach$$($JSCompiler_StaticMethods_dispatchAllConfigEvents$self$$.$playerConfig$, function ($value$$189$$, $name$$95$$) {
            var $JSCompiler_StaticMethods_dispatch$self$$inline_1146$$ = $viewbix$sdk$helper$BindHelper$$.$getInstance$();
            $JSCompiler_StaticMethods_dispatch$self$$inline_1146$$.$data_$[$name$$95$$] = $value$$189$$;
            $goog$events$dispatchEvent$$($JSCompiler_StaticMethods_dispatch$self$$inline_1146$$, new $viewbix$sdk$event$PropertyChangeEvent$$($name$$95$$, $value$$189$$));
        }, $JSCompiler_StaticMethods_dispatchAllConfigEvents$self$$);
    }

    $JSCompiler_prototypeAlias$$ = $viewbix$sdk$Layout$$.prototype;
    $JSCompiler_prototypeAlias$$.$init$ = function $$JSCompiler_prototypeAlias$$$$init$$($params$$2$$) {
        this.$videoPlayerParams_$ = $params$$2$$[$viewbix$sdk$Layout$ParamName$VIDEO_PLAYER$$] || null;
        this.$menuParams_$ = $params$$2$$[$viewbix$sdk$Layout$ParamName$MENU$$] || null;
        this.$containerParams_$ = $params$$2$$[$viewbix$sdk$Layout$ParamName$CONTAINER$$] || null;
        var $readyCallback$$ = $params$$2$$[$viewbix$sdk$Layout$ParamName$READY$$] || null;
        $viewbix$sdk$helper$WindowHelper$contentLoaded$$($goog$bind$$(function () {
            this.$playerConfig$ = window.getPlayerConfigurations();
            $JSCompiler_StaticMethods_modifyConfigValues$$(this);
            this.$videoDuration$ = this.$recentDuration$ = NaN;
            $JSCompiler_StaticMethods_initVideoPlayer$$(this);
            var $match$$inline_723_p$$inline_1172_playerId$$inline_717_result$$inline_1169_url$$inline_724$$ =
                    $JSCompiler_StaticMethods_getPlayerConfig$$(this,
                        $viewbix$sdk$Layout$PlayerConfigurationName$PLAYER_ID$$),
                $videoUrl$$inline_718$$ = $JSCompiler_StaticMethods_getPlayerConfig$$(this, $viewbix$sdk$Layout$PlayerConfigurationName$VIDEO_URL$$),
                $memberId$$inline_719$$ = $JSCompiler_StaticMethods_getPlayerConfig$$(this, $viewbix$sdk$Layout$PlayerConfigurationName$MEMBER_ID$$),
                $sessionId$$inline_720_trackingPixElement$$inline_1161_videoPlayer$$inline_1165$$ = $viewbix$sdk$helper$GuidHelper$newGuid$$();
            this.$playerConfig$[$viewbix$sdk$Layout$PlayerConfigurationName$SESSION_ID$$] = $sessionId$$inline_720_trackingPixElement$$inline_1161_videoPlayer$$inline_1165$$;
            //if (null === $sessionId$$inline_720_trackingPixElement$$inline_1161_videoPlayer$$inline_1165$$ || null === $match$$inline_723_p$$inline_1172_playerId$$inline_717_result$$inline_1169_url$$inline_724$$ || null === $memberId$$inline_719$$) {
            //    throw "missing sessionId or playerId or memberId";
            //}
            //var $referrer$$inline_1159_tracker$$inline_1241_videoPlayer$$inline_1156$$ = this.$videoPlayer$, $host$$inline_1158_instance$$inline_1157$$ = $viewbix$sdk$track$Tracker$$.$getInstance$();
            //$host$$inline_1158_instance$$inline_1157$$.$videoPlayer$ = $referrer$$inline_1159_tracker$$inline_1241_videoPlayer$$inline_1156$$;
            //null != $referrer$$inline_1159_tracker$$inline_1241_videoPlayer$$inline_1156$$ && ($host$$inline_1158_instance$$inline_1157$$.$videoRunTracker$ = new $viewbix$sdk$video$UniqueRunTracker$$($referrer$$inline_1159_tracker$$inline_1241_videoPlayer$$inline_1156$$, [0, .25, .5, .75, 1]), $goog$events$listen$$($host$$inline_1158_instance$$inline_1157$$.$videoRunTracker$, "threshold", $viewbix$sdk$track$Tracker$onVideoThreshold$$));
            //$host$$inline_1158_instance$$inline_1157$$.$sessionId$ = $sessionId$$inline_720_trackingPixElement$$inline_1161_videoPlayer$$inline_1165$$;
            //$host$$inline_1158_instance$$inline_1157$$.$playerId$ = $match$$inline_723_p$$inline_1172_playerId$$inline_717_result$$inline_1169_url$$inline_724$$;
            //$host$$inline_1158_instance$$inline_1157$$.$memberId$ = $memberId$$inline_719$$;
            //$referrer$$inline_1159_tracker$$inline_1241_videoPlayer$$inline_1156$$ = $viewbix$sdk$track$Tracker$$.$getInstance$();
            //$referrer$$inline_1159_tracker$$inline_1241_videoPlayer$$inline_1156$$.$additionalParams$ = {};
            //var $query$$inline_1160_query$$inline_1242$$ = new $goog$Uri$QueryData$$(document.location.search.substring(1));
            //$query$$inline_1160_query$$inline_1242$$.$containsKey$("utm_source") && ($referrer$$inline_1159_tracker$$inline_1241_videoPlayer$$inline_1156$$.$additionalParams$.utms = $query$$inline_1160_query$$inline_1242$$.get("utm_source"));
            //$query$$inline_1160_query$$inline_1242$$.$containsKey$("utm_medium") && ($referrer$$inline_1159_tracker$$inline_1241_videoPlayer$$inline_1156$$.$additionalParams$.utmm = $query$$inline_1160_query$$inline_1242$$.get("utm_medium"));
            //$query$$inline_1160_query$$inline_1242$$.$containsKey$("utm_term") && ($referrer$$inline_1159_tracker$$inline_1241_videoPlayer$$inline_1156$$.$additionalParams$.utmt = $query$$inline_1160_query$$inline_1242$$.get("utm_term"));
            //$query$$inline_1160_query$$inline_1242$$.$containsKey$("utm_content") && ($referrer$$inline_1159_tracker$$inline_1241_videoPlayer$$inline_1156$$.$additionalParams$.utmco = $query$$inline_1160_query$$inline_1242$$.get("utm_content"));
            //$query$$inline_1160_query$$inline_1242$$.$containsKey$("utm_campaign") && ($referrer$$inline_1159_tracker$$inline_1241_videoPlayer$$inline_1156$$.$additionalParams$.utmca = $query$$inline_1160_query$$inline_1242$$.get("utm_campaign"));
            //$host$$inline_1158_instance$$inline_1157$$ = $goog$string$isEmptySafe$$($host$$inline_1158_instance$$inline_1157$$.$trackHost$) ? "https://" + $host$$inline_1158_instance$$inline_1157$$.$serverPrefix$ + "track.viewbix.com" : $host$$inline_1158_instance$$inline_1157$$.$trackHost$;
            //$referrer$$inline_1159_tracker$$inline_1241_videoPlayer$$inline_1156$$ = document.referrer;
            //$query$$inline_1160_query$$inline_1242$$ = new $goog$Uri$QueryData$$(document.location.search.substring(1));
            //$query$$inline_1160_query$$inline_1242$$.$containsKey$($viewbix$sdk$track$TrackingParam$HTTP_REFERRER$$) && ($referrer$$inline_1159_tracker$$inline_1241_videoPlayer$$inline_1156$$ = $query$$inline_1160_query$$inline_1242$$.get($viewbix$sdk$track$TrackingParam$HTTP_REFERRER$$));
            //$sessionId$$inline_720_trackingPixElement$$inline_1161_videoPlayer$$inline_1165$$ = $goog$dom$createDom$$("img", {
            //    src: $host$$inline_1158_instance$$inline_1157$$ + "/pix.gif?w=" + $match$$inline_723_p$$inline_1172_playerId$$inline_717_result$$inline_1169_url$$inline_724$$ + "&m=" + $memberId$$inline_719$$ + "&s=" + $sessionId$$inline_720_trackingPixElement$$inline_1161_videoPlayer$$inline_1165$$ + "&r=" + encodeURIComponent($referrer$$inline_1159_tracker$$inline_1241_videoPlayer$$inline_1156$$)
            //});
            //document.body.appendChild($sessionId$$inline_720_trackingPixElement$$inline_1161_videoPlayer$$inline_1165$$);
            //$sessionId$$inline_720_trackingPixElement$$inline_1161_videoPlayer$$inline_1165$$ = this.$videoPlayer$;
            //$viewbix$sdk$track$Snowplow$$.$getInstance$().$videoPlayer$ = $sessionId$$inline_720_trackingPixElement$$inline_1161_videoPlayer$$inline_1165$$;
            //$viewbix$sdk$track$Snowplow$$.$getInstance$().$playerId$ = $match$$inline_723_p$$inline_1172_playerId$$inline_717_result$$inline_1169_url$$inline_724$$;
            //$viewbix$sdk$track$Snowplow$$.$getInstance$().$videoUrl$ = $videoUrl$$inline_718$$;
            //$viewbix$sdk$track$Snowplow$$.$getInstance$().$memberId$ = $memberId$$inline_719$$;
            //$viewbix$sdk$track$Snowplow$$.$getInstance$().$sessionId$ = uuid.v4();
            //$viewbix$sdk$track$Snowplow$track$$($viewbix$sdk$track$TrackEventType$IMPRESSION$$);
            //$goog$events$listen$$($viewbix$sdk$track$Tracker$$.$getInstance$(), $viewbix$sdk$event$TrackerServiceEvent$TRACKER_TRACK$$, this.$onTrackerTrack$, !1, this);
            //this.$fbConversionPixel_$ = $JSCompiler_StaticMethods_getPlayerConfig$$(this, $viewbix$sdk$Layout$PlayerConfigurationName$FB_CONVERSION_PIXEL$$);
            //null != this.$fbConversionPixel_$ ? ($match$$inline_723_p$$inline_1172_playerId$$inline_717_result$$inline_1169_url$$inline_724$$ = this.$fbConversionPixel_$.match(/"(https:\/\/www\.facebook\.com\/tr\?.+?)"/), null != $match$$inline_723_p$$inline_1172_playerId$$inline_717_result$$inline_1169_url$$inline_724$$ && 0 < $match$$inline_723_p$$inline_1172_playerId$$inline_717_result$$inline_1169_url$$inline_724$$.length ? this.$fbConversionPixel_$ = $goog$string$stripQuotes$$($match$$inline_723_p$$inline_1172_playerId$$inline_717_result$$inline_1169_url$$inline_724$$[0]) :
            //    ($match$$inline_723_p$$inline_1172_playerId$$inline_717_result$$inline_1169_url$$inline_724$$ = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd]))/i.exec(this.$fbConversionPixel_$), $match$$inline_723_p$$inline_1172_playerId$$inline_717_result$$inline_1169_url$$inline_724$$ = null == $match$$inline_723_p$$inline_1172_playerId$$inline_717_result$$inline_1169_url$$inline_724$$ ?
            //        null : $match$$inline_723_p$$inline_1172_playerId$$inline_717_result$$inline_1169_url$$inline_724$$[0], this.$fbConversionPixel_$ = null != $match$$inline_723_p$$inline_1172_playerId$$inline_717_result$$inline_1169_url$$inline_724$$ ? $match$$inline_723_p$$inline_1172_playerId$$inline_717_result$$inline_1169_url$$inline_724$$ : null)) : this.$fbConversionPixel_$ = null;
            $JSCompiler_StaticMethods_initMenu$$(this);
            $JSCompiler_StaticMethods_initContainers$$(this);
            $JSCompiler_StaticMethods_initStates$$(this);
            var $opt_rootNode$$inline_727$$;
            null == $opt_rootNode$$inline_727$$ && ($opt_rootNode$$inline_727$$ = document.body);
            this.$bindElement$($opt_rootNode$$inline_727$$);
            $match$$inline_723_p$$inline_1172_playerId$$inline_717_result$$inline_1169_url$$inline_724$$ = $goog$bind$$(this.$bindElement$, this);
            $goog$dom$findNodes_$$($opt_rootNode$$inline_727$$, $match$$inline_723_p$$inline_1172_playerId$$inline_717_result$$inline_1169_url$$inline_724$$, [], !1);
            $JSCompiler_StaticMethods_dispatchAllConfigEvents$$(this);
            $viewbix$sdk$helper$LinkHelper$changeHrefToWindowOpen$$(document.body);
            $JSCompiler_StaticMethods_initApps$$(this);
            $JSCompiler_StaticMethods_initFullScreen$$(this);
            $goog$events$listen$$(document.body, "mousedown", this.$trackFirstInteraction$, !1, this);
            this.ready = !0;
            $goog$isFunction$$($readyCallback$$) && $readyCallback$$();
        }, this));
    };
    function $JSCompiler_StaticMethods_modifyConfigValues$$($JSCompiler_StaticMethods_modifyConfigValues$self$$) {
        $viewbix$sdk$helper$TwitterHelper$sanitizeConfig$$($JSCompiler_StaticMethods_modifyConfigValues$self$$.$playerConfig$);
        if ($viewbix$sdk$Core$isIPhone$$) {
            var $re$$7$$ = /tel:\/\//gi;
            $viewbix$sdk$helper$ObjectHelper$modifyAllValuesRecursive$$($JSCompiler_StaticMethods_modifyConfigValues$self$$.$playerConfig$, function ($val$$46$$) {
                $goog$isString$$($val$$46$$) && $re$$7$$.test($val$$46$$) && ($val$$46$$ = $val$$46$$.replace($re$$7$$, "tel:"));
                return $val$$46$$;
            });
        }
        var $videoUrl$$1$$ = $JSCompiler_StaticMethods_modifyConfigValues$self$$.$playerConfig$[$viewbix$sdk$Layout$PlayerConfigurationName$VIDEO_URL$$];
        $goog$string$isEmptySafe$$($JSCompiler_StaticMethods_modifyConfigValues$self$$.$playerConfig$[$viewbix$sdk$Layout$PlayerConfigurationName$VIDEO_POSTER$$]) &&
        $goog$string$isEmptySafe$$($videoUrl$$1$$) && (
            $JSCompiler_StaticMethods_modifyConfigValues$self$$.$playerConfig$[$viewbix$sdk$Layout$PlayerConfigurationName$VIDEO_URL$$] = $viewbix$sdk$Layout$BLANK_VIDEO_URL$$
        );
    }

    function $JSCompiler_StaticMethods_getVideoPlayerInterface$$($videoPlayerElement$$, $opt_explicitVideoPlayerPlatform_videoPlayer$$4$$, $opt_channel$$) {
        //console.log('channel');
        //console.log($opt_channel$$);
        var $platform$$ = null;
        null != $opt_explicitVideoPlayerPlatform_videoPlayer$$4$$ && ($platform$$ = $opt_explicitVideoPlayerPlatform_videoPlayer$$4$$);
        $opt_explicitVideoPlayerPlatform_videoPlayer$$4$$ = null;
        console.log($platform$$);
        console.log($viewbix$sdk$Layout$VideoPlayerPlatform$VIDEOJS$$);
        switch ($platform$$) {
            case $viewbix$sdk$Layout$VideoPlayerPlatform$VIDEOJS$$:
                $opt_explicitVideoPlayerPlatform_videoPlayer$$4$$ =
                    new $viewbix$sdk$video$VideoJs$$($videoPlayerElement$$.id);
                break;
            case $viewbix$sdk$Layout$VideoPlayerPlatform$EXTERNAL$$:
                null != $opt_channel$$ && (
                    $opt_explicitVideoPlayerPlatform_videoPlayer$$4$$ =
                        new $viewbix$sdk$video$External$$($opt_channel$$)
                );
                break;
            default:
                throw "video platform not supported";
                ;
        }
        return $opt_explicitVideoPlayerPlatform_videoPlayer$$4$$;
    }

    function $JSCompiler_StaticMethods_initVideoPlayer$$($JSCompiler_StaticMethods_initVideoPlayer$self$$, $opt_startSeconds$$2$$) {
        var $params$$4_videoDomParams$$ = $JSCompiler_StaticMethods_initVideoPlayer$self$$.$videoPlayerParams_$,
            $videoPlaceholder$$ = null, $explicitVideoPlayerPlatform$$ = null,
            $videoPlayerChannel$$ = null, $videoElement$$ = null;
        $JSCompiler_StaticMethods_initVideoPlayer$self$$.$iosFixOverlay_$ = null;
        var playerConfig = window.getPlayerConfigurations();
        console.log($params$$4_videoDomParams$$);
        null != $params$$4_videoDomParams$$ && (
            $goog$isString$$($params$$4_videoDomParams$$) ?
                $videoPlaceholder$$ = $goog$dom$getElementHelper_$$(document, $params$$4_videoDomParams$$) :
            $goog$isObject$$($params$$4_videoDomParams$$) && (
                $videoPlaceholder$$ = $goog$dom$getElementHelper_$$(document, $params$$4_videoDomParams$$[$viewbix$sdk$Layout$VideoPlayerParamName$ID$$]),
                    $explicitVideoPlayerPlatform$$ = $params$$4_videoDomParams$$[$viewbix$sdk$Layout$VideoPlayerParamName$PLATFORM$$] || null,
                    $videoPlayerChannel$$ = $params$$4_videoDomParams$$[$viewbix$sdk$Layout$VideoPlayerParamName$CHANNEL$$] || null),
            null != $videoPlaceholder$$ && ($params$$4_videoDomParams$$ = {
                id: "video_" + Math.round(1E8 * Math.random()),
                class: playerConfig[$viewbix$sdk$Layout$PlayerConfigurationName$VIDEO_CLASS$$] || "video-js vjs-default-skin vjs-big-play-centered",
                poster: playerConfig[$viewbix$sdk$Layout$PlayerConfigurationName$VIDEO_POSTER$$] || "/videojs/blank_poster.png",
                width: "100%",
                height: "100%",
                //controls: true,
                style: "width:100%;height:100%",
                src: playerConfig[$viewbix$sdk$Layout$PlayerConfigurationName$VIDEO_URL$$]
                //src: '//cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8'
            }, $goog$userAgent$IE$$ || ($params$$4_videoDomParams$$.preload = "auto"),
                console.log($params$$4_videoDomParams$$),
                $videoElement$$ = $goog$dom$createDom$$("video", $params$$4_videoDomParams$$),
                $goog$dom$removeChildren$$($videoPlaceholder$$),
                console.log($videoElement$$),
                $videoPlaceholder$$.appendChild($videoElement$$)));
        //console.log('video el');
        //console.log($videoElement$$);
        //console.log('channel:');
        //console.log($videoPlayerChannel$$);
        //console.log('platform:' + $explicitVideoPlayerPlatform$$);

        null != $explicitVideoPlayerPlatform$$ && (
            $JSCompiler_StaticMethods_initVideoPlayer$self$$.$videoPlayer$ =
                $JSCompiler_StaticMethods_getVideoPlayerInterface$$(
                    $videoElement$$,
                    $explicitVideoPlayerPlatform$$,
                    $videoPlayerChannel$$),
                $JSCompiler_StaticMethods_initVideoPlayer$self$$.$afterCreatePlayer$(),
            $JSCompiler_StaticMethods_initVideoPlayer$self$$.$videoPlayer$ &&
            $JSCompiler_StaticMethods_initVideoPlayer$self$$.$videoPlayer$.$listenPlaying$(function () {
                "Youtube" == this.$videoPlayer$.$techName$() ?
                    this.$addStateClasses$("youtube-tech") :
                    this.$removeStateClasses$("youtube-tech");
            }, $JSCompiler_StaticMethods_initVideoPlayer$self$$));
        null != $JSCompiler_StaticMethods_initVideoPlayer$self$$.$videoPlayer$ &&
        $JSCompiler_StaticMethods_configureVideoPlayer$$($JSCompiler_StaticMethods_initVideoPlayer$self$$,
            $opt_startSeconds$$2$$);
    }

    $JSCompiler_prototypeAlias$$.$afterCreatePlayer$ =
        function $$JSCompiler_prototypeAlias$$$$afterCreatePlayer$$() {
        };
    function $JSCompiler_StaticMethods_initIosFixOverlay$$($JSCompiler_StaticMethods_initIosFixOverlay$self$$) {
        if (null == $JSCompiler_StaticMethods_initIosFixOverlay$self$$.$iosFixOverlay_$) {
            var $videoPlaceholder$$1$$ = $goog$dom$getElementHelper_$$(document, $JSCompiler_StaticMethods_initIosFixOverlay$self$$.$videoPlayerParams_$[$viewbix$sdk$Layout$VideoPlayerParamName$ID$$]);
            if (null != $videoPlaceholder$$1$$ && ($videoPlaceholder$$1$$.style.position = "relative", $goog$userAgent$detectedIPhone_$$)) {
                var $iosFixOverlayPoster_posterUrl$$ = $JSCompiler_StaticMethods_getPlayerConfig$$($JSCompiler_StaticMethods_initIosFixOverlay$self$$, $viewbix$sdk$Layout$PlayerConfigurationName$VIDEO_POSTER$$), $iosFixOverlayPoster_posterUrl$$ = "Youtube" != $JSCompiler_StaticMethods_initIosFixOverlay$self$$.$videoPlayer$.$techName$() || $viewbix$sdk$helper$YouTubeHelper$isYouTubeThumbnail$$($iosFixOverlayPoster_posterUrl$$) ? $JSCompiler_StaticMethods_initIosFixOverlay$self$$.$videoPlayer$.poster() : "//img.youtube.com/vi/" +
                $JSCompiler_StaticMethods_initIosFixOverlay$self$$.$videoPlayer$.$videoId$() + "/0.jpg";
                $JSCompiler_StaticMethods_initIosFixOverlay$self$$.$iosFixOverlay_$ = $goog$dom$createDom$$("div", {
                    id: "iosFixOverlay",
                    "class": "vbx-ios-fix-overlay video-js vjs-default-skin vjs-big-play-centered"
                }, $goog$dom$createDom$$("div", {
                    id: "iosFixPoster",
                    "class": "vbx-ios-fix-poster",
                    style: 'background: url("' + $iosFixOverlayPoster_posterUrl$$ + '")'
                }), $goog$dom$createDom$$("div", {id: "iosFixPlayButton", "class": "vjs-big-play-button"}));
                $videoPlaceholder$$1$$.appendChild($JSCompiler_StaticMethods_initIosFixOverlay$self$$.$iosFixOverlay_$);
                $videoPlaceholder$$1$$.style.position = "relative";
                $videoPlaceholder$$1$$.style.overflow = "hidden";
                $videoPlaceholder$$1$$.firstChild.style.position = "relative";
                $videoPlaceholder$$1$$.firstChild.style.width = "100%";
                $videoPlaceholder$$1$$.firstChild.style.height = "100%";
                $goog$events$listen$$($JSCompiler_StaticMethods_initIosFixOverlay$self$$.$iosFixOverlay_$, "touchstart", function () {
                    window.setTimeout($goog$bind$$(function () {
                        this.$iosFixOverlayShown_$ ? ($goog$userAgent$detectedIPhone_$$ && (this.$iosFixOverlay_$.visibility = "hidden", $goog$style$setStyle$$(this.$videoPlayer$.$techElement$().parentElement, {
                            visibility: "visible",
                            position: "static",
                            "-webkit-transform": "translateX(0)",
                            "margin-top": "6px",
                            "margin-left": "5px",
                            "float": "left"
                        }), this.$iosFixOverlayShown_$ = !1), this.$videoPlayer$.play()) : $JSCompiler_StaticMethods_showIosFixOverlay$$(this);
                    }, this), 750);
                }, !1, $JSCompiler_StaticMethods_initIosFixOverlay$self$$);
                $JSCompiler_StaticMethods_initIosFixOverlay$self$$.$videoPlayer$.$listenPause$($goog$bind$$(function () {
                    $JSCompiler_StaticMethods_showIosFixOverlay$$(this);
                }, $JSCompiler_StaticMethods_initIosFixOverlay$self$$));
                $JSCompiler_StaticMethods_initIosFixOverlay$self$$.$videoPlayer$.$listenEnded$($goog$bind$$(function () {
                    $JSCompiler_StaticMethods_showIosFixOverlay$$(this);
                }, $JSCompiler_StaticMethods_initIosFixOverlay$self$$));
            }
        }
    }

    function $JSCompiler_StaticMethods_rebuildRollApps$$($JSCompiler_StaticMethods_rebuildRollApps$self$$) {
        //console.log('rebuildRollApps');
        $JSCompiler_StaticMethods_rebuildRollApps$self$$.$rollApps_$ = $goog$array$concat$$(
            $JSCompiler_StaticMethods_rebuildRollApps$self$$.$preRollApps_$,
            $JSCompiler_StaticMethods_rebuildRollApps$self$$.$midRollApps_$,
            $JSCompiler_StaticMethods_rebuildRollApps$self$$.$postRollApps_$);
        $goog$array$sort$$($JSCompiler_StaticMethods_rebuildRollApps$self$$.$rollApps_$, function ($ra1$$, $ra2$$) {
            return $ra1$$[$viewbix$sdk$Layout$AppConfigurationName$START_TIME$$] < $ra2$$[$viewbix$sdk$Layout$AppConfigurationName$START_TIME$$] ? -1 :
                $ra1$$[$viewbix$sdk$Layout$AppConfigurationName$START_TIME$$] > $ra2$$[$viewbix$sdk$Layout$AppConfigurationName$START_TIME$$] ? 1 : 0;
        });
    }

    function $JSCompiler_StaticMethods_hasValidCtaApp$$($JSCompiler_StaticMethods_hasValidCtaApp$self$$) {
        if ($viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($JSCompiler_StaticMethods_hasValidCtaApp$self$$.$ctaApps_$)) {
            return !1;
        }
        var $ctaAppId$$ = $JSCompiler_StaticMethods_hasValidCtaApp$self$$.$ctaApps_$[0][$viewbix$sdk$Layout$AppConfigurationName$PLAYER_APP_INTERNAL_ID$$];
        return $goog$array$some$$($JSCompiler_StaticMethods_hasValidCtaApp$self$$.$playerConfig$[$viewbix$sdk$Layout$ConfigurationsPropertyName$APPLICATIONS$$], function ($a$$43$$) {
            return 0 == $goog$string$caseInsensitiveCompare$$($a$$43$$[$viewbix$sdk$Layout$ConfigurationsPropertyName$INTERNAL_ID$$], $ctaAppId$$);
        }, $JSCompiler_StaticMethods_hasValidCtaApp$self$$);
    }

    function $JSCompiler_StaticMethods_hasValidBannerApp$$($JSCompiler_StaticMethods_hasValidBannerApp$self$$) {
        if ($viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($JSCompiler_StaticMethods_hasValidBannerApp$self$$.$bannerApps_$)) {
            return !1;
        }
        var $bannerAppId$$ = $JSCompiler_StaticMethods_hasValidBannerApp$self$$.$bannerApps_$[0][$viewbix$sdk$Layout$AppConfigurationName$PLAYER_APP_INTERNAL_ID$$];
        return $goog$array$some$$($JSCompiler_StaticMethods_hasValidBannerApp$self$$.$playerConfig$[$viewbix$sdk$Layout$ConfigurationsPropertyName$APPLICATIONS$$], function ($a$$44$$) {
            return 0 == $goog$string$caseInsensitiveCompare$$($a$$44$$[$viewbix$sdk$Layout$ConfigurationsPropertyName$INTERNAL_ID$$], $bannerAppId$$);
        }, $JSCompiler_StaticMethods_hasValidBannerApp$self$$);
    }

    function $JSCompiler_StaticMethods_updateCtaState$$($JSCompiler_StaticMethods_updateCtaState$self$$) {
        $goog$string$isEmptySafe$$($JSCompiler_StaticMethods_getPlayerConfig$$($JSCompiler_StaticMethods_updateCtaState$self$$, $viewbix$sdk$Layout$PlayerConfigurationName$CTA_TEXT$$)) ? $JSCompiler_StaticMethods_updateCtaState$self$$.$removeStateClasses$("vbx-show-cta-button") : $JSCompiler_StaticMethods_updateCtaState$self$$.$addStateClasses$("vbx-show-cta-button");
    }

    function $JSCompiler_StaticMethods_calculateShowHide$$($JSCompiler_StaticMethods_calculateShowHide$self$$, $currentTime$$) {
        if (null != $JSCompiler_StaticMethods_calculateShowHide$self$$.$showHideUiArray_$ && 0 < $JSCompiler_StaticMethods_calculateShowHide$self$$.$showHideUiArray_$.length) {
            for (var $action$$1$$ = "show" == $JSCompiler_StaticMethods_calculateShowHide$self$$.$showHideUiMap_$[$JSCompiler_StaticMethods_calculateShowHide$self$$.$showHideUiArray_$[0].toString()] ? "hide" : "show", $i$$169$$ = 0; $i$$169$$ < $JSCompiler_StaticMethods_calculateShowHide$self$$.$showHideUiArray_$.length; $i$$169$$++) {
                if ($currentTime$$ >= $JSCompiler_StaticMethods_calculateShowHide$self$$.$showHideUiArray_$[$i$$169$$] && ($i$$169$$ == $JSCompiler_StaticMethods_calculateShowHide$self$$.$showHideUiArray_$.length - 1 || $currentTime$$ < $JSCompiler_StaticMethods_calculateShowHide$self$$.$showHideUiArray_$[$i$$169$$ + 1])) {
                    $action$$1$$ = $JSCompiler_StaticMethods_calculateShowHide$self$$.$showHideUiMap_$[$JSCompiler_StaticMethods_calculateShowHide$self$$.$showHideUiArray_$[$i$$169$$].toString()];
                    break;
                }
            }
            "show" != $action$$1$$ || $viewbix$sdk$Core$isState$$("ui-show") ? "hide" != $action$$1$$ || $viewbix$sdk$Core$isState$$("ui-hide") || $JSCompiler_StaticMethods_removeAddStateClasses$$(0, "ui-show", "ui-hide") : $JSCompiler_StaticMethods_removeAddStateClasses$$(0, "ui-hide", "ui-show");
        }
    }

    function $JSCompiler_StaticMethods_initStates$$($JSCompiler_StaticMethods_initStates$self$$) {
        console.log('initStates');
        $viewbix$sdk$Core$isTouch$$() &&
        $JSCompiler_StaticMethods_initStates$self$$.$addStateClasses$("touchscreen");
        $goog$userAgent$detectedIPhone_$$ &&
        $JSCompiler_StaticMethods_initStates$self$$.$addStateClasses$("iphone");
        $goog$userAgent$IPAD$$ &&
        $JSCompiler_StaticMethods_initStates$self$$.$addStateClasses$("ipad");
        $goog$userAgent$IE$$ && "11.0" == $goog$userAgent$VERSION$$ &&
        $JSCompiler_StaticMethods_initStates$self$$.$addStateClasses$("ie11");
        $viewbix$sdk$helper$BindHelper$listenToConfig$$(
            $viewbix$sdk$Layout$PlayerConfigurationName$SHOW_HIDE_UI$$,
            function ($showHideUiString$$) {
                $goog$string$isEmptySafe$$($showHideUiString$$) ? this.$showHideUiArray_$ = this.$showHideUiMap_$ = null : (this.$showHideUiMap_$ = {}, this.$showHideUiArray_$ = [], $goog$array$forEach$$($showHideUiString$$.split(","), function ($pair$$4_part$$3$$) {
                    $pair$$4_part$$3$$ = $pair$$4_part$$3$$.split("=");
                    var $key$$109$$ = parseFloat($pair$$4_part$$3$$[0]);
                    this.$showHideUiMap_$[$key$$109$$.toString()] = 1 < $pair$$4_part$$3$$.length ? $pair$$4_part$$3$$[1] : "show";
                    $goog$array$insert$$(this.$showHideUiArray_$, $key$$109$$);
                }, this), $goog$array$sort$$(this.$showHideUiArray_$), $JSCompiler_StaticMethods_calculateShowHide$$(this, 0));
            }, $JSCompiler_StaticMethods_initStates$self$$);
        $viewbix$sdk$helper$BindHelper$listenToConfig$$($viewbix$sdk$Layout$PlayerConfigurationName$PRE_ROLL_APPS$$,
            function ($preRollAppsString$$) {
                this.$preRollApps_$ = $viewbix$sdk$helper$JsonHelper$unsafeParseArray$$($preRollAppsString$$);
                $goog$array$forEach$$(this.$preRollApps_$, function ($preRollApp$$) {
                    $JSCompiler_StaticMethods_setRollAppDefaultValue$$($preRollApp$$, $viewbix$sdk$Layout$AppConfigurationName$PROMPT$$, "Complete form to play video");
                    $JSCompiler_StaticMethods_setRollAppDefaultValue$$($preRollApp$$, $viewbix$sdk$Layout$AppConfigurationName$ALLOW_SKIP$$, !0);
                    $JSCompiler_StaticMethods_setRollAppDefaultValue$$($preRollApp$$, $viewbix$sdk$Layout$AppConfigurationName$START_TIME$$, 0);
                    $JSCompiler_StaticMethods_setRollAppDefaultValue$$($preRollApp$$, $viewbix$sdk$Layout$AppConfigurationName$ROLL_TYPE$$, $viewbix$sdk$Layout$RollAppType$PRE_ROLL$$);
                }, this);
                $JSCompiler_StaticMethods_rebuildRollApps$$(this);
            }, $JSCompiler_StaticMethods_initStates$self$$);
        $viewbix$sdk$helper$BindHelper$listenToConfig$$($viewbix$sdk$Layout$PlayerConfigurationName$MID_ROLL_APPS$$, function ($midRollAppsString$$) {
            this.$midRollApps_$ = $viewbix$sdk$helper$JsonHelper$unsafeParseArray$$($midRollAppsString$$);
            $goog$array$forEach$$(this.$midRollApps_$, function ($midRollApp$$) {
                $JSCompiler_StaticMethods_setRollAppDefaultValue$$($midRollApp$$, $viewbix$sdk$Layout$AppConfigurationName$PROMPT$$, "Complete form to play video");
                $JSCompiler_StaticMethods_setRollAppDefaultValue$$($midRollApp$$, $viewbix$sdk$Layout$AppConfigurationName$ALLOW_SKIP$$, !0);
                $JSCompiler_StaticMethods_setRollAppDefaultValue$$($midRollApp$$, $viewbix$sdk$Layout$AppConfigurationName$START_TIME$$, 5);
                $JSCompiler_StaticMethods_setRollAppDefaultValue$$($midRollApp$$, $viewbix$sdk$Layout$AppConfigurationName$ROLL_TYPE$$, $viewbix$sdk$Layout$RollAppType$MID_ROLL$$);
            }, this);
            $JSCompiler_StaticMethods_rebuildRollApps$$(this);
        }, $JSCompiler_StaticMethods_initStates$self$$);
        $viewbix$sdk$helper$BindHelper$listenToConfig$$($viewbix$sdk$Layout$PlayerConfigurationName$POST_ROLL_APPS$$, function ($postRollAppsString$$) {
            this.$postRollApps_$ = $viewbix$sdk$helper$JsonHelper$unsafeParseArray$$($postRollAppsString$$);
            $goog$array$forEach$$(this.$postRollApps_$, function ($postRollApp$$) {
                $JSCompiler_StaticMethods_setRollAppDefaultValue$$($postRollApp$$, $viewbix$sdk$Layout$AppConfigurationName$ALLOW_SKIP$$, !0);
                $JSCompiler_StaticMethods_setRollAppDefaultValue$$($postRollApp$$, $viewbix$sdk$Layout$AppConfigurationName$START_TIME$$, -1);
                $JSCompiler_StaticMethods_setRollAppDefaultValue$$($postRollApp$$, $viewbix$sdk$Layout$AppConfigurationName$ROLL_TYPE$$, $viewbix$sdk$Layout$RollAppType$POST_ROLL$$);
            }, this);
            $JSCompiler_StaticMethods_rebuildRollApps$$(this);
        }, $JSCompiler_StaticMethods_initStates$self$$);
        $viewbix$sdk$helper$BindHelper$listenToConfig$$($viewbix$sdk$Layout$PlayerConfigurationName$CTA_APPS$$, function ($ctaAppsString$$) {
            this.$ctaApps_$ = $viewbix$sdk$helper$JsonHelper$unsafeParseArray$$($ctaAppsString$$);
            $JSCompiler_StaticMethods_updateCtaState$$(this);
        }, $JSCompiler_StaticMethods_initStates$self$$);
        $viewbix$sdk$helper$BindHelper$listenToConfig$$($viewbix$sdk$Layout$PlayerConfigurationName$BANNER_APPS$$, function ($bannerAppsString$$) {
            this.$bannerApps_$ = $viewbix$sdk$helper$JsonHelper$unsafeParseArray$$($bannerAppsString$$);
        }, $JSCompiler_StaticMethods_initStates$self$$);
        $viewbix$sdk$helper$BindHelper$listenToConfig$$($viewbix$sdk$Layout$PlayerConfigurationName$CTA_LINK$$, function () {
            $JSCompiler_StaticMethods_updateCtaState$$(this);
        }, $JSCompiler_StaticMethods_initStates$self$$);
        $viewbix$sdk$helper$BindHelper$listenToConfig$$($viewbix$sdk$Layout$PlayerConfigurationName$CTA_TEXT$$, function () {
            $JSCompiler_StaticMethods_updateCtaState$$(this);
        }, $JSCompiler_StaticMethods_initStates$self$$);
        $viewbix$sdk$Core$isTouch$$() || (
            $viewbix$sdk$helper$EventHelper$listenMouseEnter$$(function () {
                    $JSCompiler_StaticMethods_removeAddStateClasses$$(0, "mouseout", "mouseover");
                },
                $JSCompiler_StaticMethods_initStates$self$$),
                $viewbix$sdk$helper$EventHelper$listenMouseLeave$$(function () {
                    $JSCompiler_StaticMethods_removeAddStateClasses$$(0, "mouseover", "mouseout");
                }, $JSCompiler_StaticMethods_initStates$self$$),
                $viewbix$sdk$helper$EventHelper$listenMouseMove$$(function () {
                    clearTimeout(this.$mouseTimer_$);
                    this.$removeStateClasses$("mousestill");
                    this.$mouseTimer_$ = setTimeout($goog$bind$$(function () {
                        this.$addStateClasses$("mousestill");
                    }, this), 3E3);
                }, $JSCompiler_StaticMethods_initStates$self$$)
        );
    }

    function $JSCompiler_StaticMethods_setRollAppDefaultValue$$($ra$$, $prop$$10$$, $val$$48$$) {
        $prop$$10$$ in $ra$$ || ($ra$$[$prop$$10$$] = $val$$48$$);
    }

    $JSCompiler_prototypeAlias$$.$trackFirstInteraction$ = function $$JSCompiler_prototypeAlias$$$$trackFirstInteraction$$() {
        $goog$events$unlisten$$(document.body, "mousedown", this.$trackFirstInteraction$, !1, this);
        this.$firstInteractionTracked_$ || (this.$firstInteractionTracked_$ = !0, $viewbix$sdk$track$Tracker$track$$("USER_FIRST_CLICK"));
    };
    $JSCompiler_prototypeAlias$$.$onTrackerTrack$ = function $$JSCompiler_prototypeAlias$$$$onTrackerTrack$$($event$$3_url$$inline_741_url$$inline_743_url$$inline_745$$) {
        if (null != this.$fbConversionPixel_$ && null != $event$$3_url$$inline_741_url$$inline_743_url$$inline_745$$.info && $viewbix$sdk$track$TrackingParam$EVENT_TYPE$$ in $event$$3_url$$inline_741_url$$inline_743_url$$inline_745$$.info) {
            switch ($event$$3_url$$inline_741_url$$inline_743_url$$inline_745$$.info[$viewbix$sdk$track$TrackingParam$EVENT_TYPE$$]) {
                case $viewbix$sdk$track$TrackEventType$USER_APP_COMPLETE$$:
                    $event$$3_url$$inline_741_url$$inline_743_url$$inline_745$$ = this.$fbConversionPixel_$;
                    document.createElement("img").src = $event$$3_url$$inline_741_url$$inline_743_url$$inline_745$$;
                    break;
                case $viewbix$sdk$track$TrackEventType$USER_CLICK_CALL_TO_ACTION$$:
                    if (null == $event$$3_url$$inline_741_url$$inline_743_url$$inline_745$$.$trackingData$ || null == $event$$3_url$$inline_741_url$$inline_743_url$$inline_745$$.$trackingData$.$application$) {
                        $event$$3_url$$inline_741_url$$inline_743_url$$inline_745$$ = this.$fbConversionPixel_$, document.createElement("img").src = $event$$3_url$$inline_741_url$$inline_743_url$$inline_745$$;
                    }
                    break;
                case $viewbix$sdk$track$TrackEventType$USER_CLICK_LOGO$$:
                    (null == $event$$3_url$$inline_741_url$$inline_743_url$$inline_745$$.$trackingData$ || null == $event$$3_url$$inline_741_url$$inline_743_url$$inline_745$$.$trackingData$.$application$) && $viewbix$sdk$track$TrackingParam$DATA$$ in $event$$3_url$$inline_741_url$$inline_743_url$$inline_745$$.info && "POWERED_BY_VIEWBIX" != $event$$3_url$$inline_741_url$$inline_743_url$$inline_745$$.info[$viewbix$sdk$track$TrackingParam$DATA$$] && ($event$$3_url$$inline_741_url$$inline_743_url$$inline_745$$ =
                        this.$fbConversionPixel_$, document.createElement("img").src = $event$$3_url$$inline_741_url$$inline_743_url$$inline_745$$);
            }
        }
    };
    $JSCompiler_prototypeAlias$$.$onMenuClicked$ = function $$JSCompiler_prototypeAlias$$$$onMenuClicked$$($event$$4$$) {
        switch ($event$$4$$.dataType) {
            case "APP_CONFIG":
                null == this.$videoPlayer$ || this.$videoPlayer$.paused() || (this.$videoWasPlaying_$ = !0);
                var $app$$1$$ = $event$$4$$.data;
                $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$USER_CLICK_MENU_ITEM$$, $app$$1$$[$viewbix$sdk$Layout$ConfigurationsPropertyName$COMPONENT$$], null, new $viewbix$sdk$track$TrackingData$$(new $viewbix$sdk$track$InteractionData$$($event$$4$$.$menu$.element.id, "menu", "right", !0, null, null, $app$$1$$.label, "player"), $app$$1$$, $event$$4$$.$menu$, null, null));
                $JSCompiler_StaticMethods_selectApp$$(this, $app$$1$$);
        }
    };
    function $JSCompiler_StaticMethods_createMenuFromParamsAndAddToCollection$$($JSCompiler_StaticMethods_createMenuFromParamsAndAddToCollection$self$$, $id$$33$$, $menu$$2_params$$5$$) {
        var $menuElement$$ = $goog$dom$getElementHelper_$$(document, $id$$33$$), $apps$$6$$ = $goog$array$filter$$($JSCompiler_StaticMethods_createMenuFromParamsAndAddToCollection$self$$.$playerConfig$[$viewbix$sdk$Layout$ConfigurationsPropertyName$APPLICATIONS$$], function ($app$$2$$) {
            return $viewbix$sdk$Layout$AppConfigurationName$SHOW_IN_MENU$$ in $app$$2$$ && $viewbix$sdk$helper$BooleanHelper$convertToBoolean$$($app$$2$$[$viewbix$sdk$Layout$AppConfigurationName$SHOW_IN_MENU$$]);
        }, $JSCompiler_StaticMethods_createMenuFromParamsAndAddToCollection$self$$);
        $goog$array$forEach$$($apps$$6$$, function ($app$$3$$) {
            $viewbix$sdk$Layout$AppConfigurationName$ICON$$ in $app$$3$$ && ($app$$3$$[$viewbix$sdk$Layout$AppConfigurationName$ICON$$] = $app$$3$$[$viewbix$sdk$Layout$AppConfigurationName$ICON$$].replace(".png", ".svg"), $app$$3$$[$viewbix$sdk$Layout$AppConfigurationName$ICON$$] = $app$$3$$[$viewbix$sdk$Layout$AppConfigurationName$ICON$$].replace(/\d{2}\//, "svg/"));
        }, $JSCompiler_StaticMethods_createMenuFromParamsAndAddToCollection$self$$);
        if (!$viewbix$sdk$helper$TwitterHelper$isInTwitterCard$$() && ($goog$userAgent$detectedIPhone_$$ || $goog$string$isEmptySafe$$($JSCompiler_StaticMethods_getPlayerConfig$$($JSCompiler_StaticMethods_createMenuFromParamsAndAddToCollection$self$$, $viewbix$sdk$Layout$PlayerConfigurationName$VIDEO_URL$$)) && $menu$$2_params$$5$$[$viewbix$sdk$Layout$MenuParamName$ADD_SHARE_IF_NO_VIDEO$$])) {
            var $showFacebookButton$$ = $viewbix$sdk$helper$BooleanHelper$convertToBoolean$$($JSCompiler_StaticMethods_createMenuFromParamsAndAddToCollection$self$$.$playerConfig$[$viewbix$sdk$Layout$PlayerConfigurationName$SHOW_FACEBOOK_BUTTON$$]), $showTwitterButton$$ = $viewbix$sdk$helper$BooleanHelper$convertToBoolean$$($JSCompiler_StaticMethods_createMenuFromParamsAndAddToCollection$self$$.$playerConfig$[$viewbix$sdk$Layout$PlayerConfigurationName$SHOW_TWITTER_BUTTON$$]), $icon$$2_showShareButton$$ =
                $viewbix$sdk$helper$BooleanHelper$convertToBoolean$$($JSCompiler_StaticMethods_createMenuFromParamsAndAddToCollection$self$$.$playerConfig$[$viewbix$sdk$Layout$PlayerConfigurationName$SHOW_SHARE_BUTTON$$]), $numShareButtons$$ = 0;
            $showFacebookButton$$ && $numShareButtons$$++;
            $showTwitterButton$$ && $numShareButtons$$++;
            $icon$$2_showShareButton$$ && $numShareButtons$$++;
            0 < $numShareButtons$$ && ($icon$$2_showShareButton$$ = "/storage/content/icon/svg/share.svg", 1 == $numShareButtons$$ && $showFacebookButton$$ && ($icon$$2_showShareButton$$ = "/storage/content/icon/svg/fb.svg"), 1 == $numShareButtons$$ && $showTwitterButton$$ && ($icon$$2_showShareButton$$ = "/storage/content/icon/svg/twitter.svg"), $goog$array$some$$($apps$$6$$, function ($item$$2$$) {
                return "id" in $item$$2$$ && "c22951af-d11e-4252-8f30-2ed1ac30eb88" == $item$$2$$.id;
            }) || $apps$$6$$.push({
                icon: $icon$$2_showShareButton$$,
                id: "c22951af-d11e-4252-8f30-2ed1ac30eb88",
                internalId: "c22951af-d11e-4252-8f30-2ed1ac30eb88",
                label: "Share",
                order: 99,
                showInMenu: "true"
            }));
        }
        $menu$$2_params$$5$$ = new $viewbix$sdk$menu$StandardMenu$$($menuElement$$, $menu$$2_params$$5$$, $apps$$6$$);
        $JSCompiler_StaticMethods_createMenuFromParamsAndAddToCollection$self$$.$menus$[$id$$33$$] = $menu$$2_params$$5$$;
    }

    function $JSCompiler_StaticMethods_selectApp$$($JSCompiler_StaticMethods_selectApp$self$$, $agent_app$$5$$, $opt_throwExceptionIfAppNotFound$$) {
        console.log('selectApp');
        console.log($agent_app$$5$$);
        $opt_throwExceptionIfAppNotFound$$ = $goog$isBoolean$$($opt_throwExceptionIfAppNotFound$$) ?
            $opt_throwExceptionIfAppNotFound$$ : !0;
        var $appObject$$ = null,
            $appObject$$ = $goog$isString$$($agent_app$$5$$) ?
                $JSCompiler_StaticMethods_getApplication$$($JSCompiler_StaticMethods_selectApp$self$$, $agent_app$$5$$) :
                $agent_app$$5$$;
        if (null != $appObject$$) {
            if ($viewbix$sdk$Layout$AppConfigurationName$NAV_LINK$$ in $appObject$$ && $viewbix$sdk$helper$BooleanHelper$convertToBoolean$$($appObject$$[$viewbix$sdk$Layout$AppConfigurationName$NAV_LINK$$])) {
                return window.open($appObject$$[$viewbix$sdk$Layout$AppConfigurationName$URL$$], "_blank"), null;
            }
            $agent_app$$5$$ = $goog$object$get$$($JSCompiler_StaticMethods_selectApp$self$$.$agents$,
                $appObject$$[$viewbix$sdk$Layout$ConfigurationsPropertyName$ID$$]);
            $JSCompiler_StaticMethods_selectContainerItem$$($JSCompiler_StaticMethods_selectApp$self$$,
                $agent_app$$5$$.$container$,
                $agent_app$$5$$.$getElement$());
            $goog$isFunction$$($JSCompiler_StaticMethods_selectApp$self$$.$appSelectedCallback_$) &&
            $JSCompiler_StaticMethods_selectApp$self$$.$appSelectedCallback_$($appObject$$[$viewbix$sdk$Layout$ConfigurationsPropertyName$ID$$]);
            return $agent_app$$5$$;
        }
        if ($opt_throwExceptionIfAppNotFound$$) {
            throw Error("selectApp: null");
        }
        return null;
    }

    function $JSCompiler_StaticMethods_isFullScreen$$() {
        $viewbix$sdk$Layout$getLayoutInstance$$();
        var $doc$$inline_1174$$ = $goog$dom$getDomHelper$$().$document_$;
        return !!($doc$$inline_1174$$.webkitIsFullScreen || $doc$$inline_1174$$.mozFullScreen || $doc$$inline_1174$$.msFullscreenElement || $doc$$inline_1174$$.fullscreenElement);
    }

    function $viewbix$sdk$Layout$appendContainerItem$$($containerElement$$, $itemElement$$) {
        //console.log('appendContainerItem');
        //console.log($containerElement$$);
        //console.log($itemElement$$);
        $containerElement$$.appendChild($itemElement$$);
        $goog$dom$classlist$remove$$($itemElement$$, "vbx-selected");
        $goog$dom$classlist$addAll$$($itemElement$$, ["vbx-container-item", "vbx-unselected"]);
        var $agent$$2$$ = $JSCompiler_StaticMethods_getAgentFromElement$$($viewbix$sdk$Layout$getLayoutInstance$$(), $itemElement$$);
        null != $agent$$2$$ && $JSCompiler_StaticMethods_setSelected$$($agent$$2$$, !1);
    }

    function $JSCompiler_StaticMethods_selectContainerItem$$($JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$,
                                                             $children$$1_container$$42$$,
                                                             $itemElement$$2$$) {
        console.log('selectContainerItem');
        //console.log($children$$1_container$$42$$);
        console.log($itemElement$$2$$);
        var $containerElement$$2$$ = $children$$1_container$$42$$.element;
        if ($goog$userAgent$detectedIPhone_$$ || $goog$userAgent$IPAD$$) {
            var $parentElement$$1$$ = document.querySelector(".video-js"),
                $videoPlaceholder$$2_videoPlaceholderWidth$$ = $goog$dom$getElementHelper_$$(document, $JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$.$videoPlayerParams_$[$viewbix$sdk$Layout$VideoPlayerParamName$ID$$]);
            if (null != $parentElement$$1$$ && null != $videoPlaceholder$$2_videoPlaceholderWidth$$) {
                var $videoPlaceholderTop$$ = $goog$style$getStyle$$($videoPlaceholder$$2_videoPlaceholderWidth$$, "top"),
                    $videoPlaceholderLeft$$ = $goog$style$getStyle$$($videoPlaceholder$$2_videoPlaceholderWidth$$, "left"),
                    $videoPlaceholderHeight$$ = $goog$style$getStyle$$($videoPlaceholder$$2_videoPlaceholderWidth$$, "height"),
                    $videoPlaceholder$$2_videoPlaceholderWidth$$ = $goog$style$getStyle$$($videoPlaceholder$$2_videoPlaceholderWidth$$, "width");
                $goog$dom$classlist$contains$$($containerElement$$2$$, $viewbix$sdk$Layout$ContainerClass$ITEM_SELECTED$$) ||
                ($JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$.$vjsParentElementPosition$ = $goog$style$getStyle$$($parentElement$$1$$, "position"),
                    $JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$.$vjsParentElementTop$ = $goog$style$getStyle$$($parentElement$$1$$, "top"),
                    $JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$.$vjsParentElementLeft$ = $goog$style$getStyle$$($parentElement$$1$$, "left"),
                    $JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$.$vjsParentElementHeight$ = $goog$style$getStyle$$($parentElement$$1$$, "height"),
                    $JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$.$vjsParentElementWidth$ = $goog$style$getStyle$$($parentElement$$1$$, "width"));
                $goog$style$setStyle$$($parentElement$$1$$, {
                    position: "fixed",
                    top: $videoPlaceholderTop$$,
                    left: $videoPlaceholderLeft$$,
                    height: $videoPlaceholderHeight$$,
                    width: $videoPlaceholder$$2_videoPlaceholderWidth$$
                });
            }
        }
        $JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$.$videoPlayer$ && $JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$.$videoPlayer$.paused() || ($JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$.$videoWasPlaying_$ = !0);
        $children$$1_container$$42$$.$overlaysVideo$ && !$viewbix$sdk$helper$BooleanHelper$convertToBoolean$$($JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$.$playerConfig$[$viewbix$sdk$Layout$ConfigurationsPropertyName$PLAY_VIDEO_IN_APPS$$]) && $JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$.$videoPlayer$ && $JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$.$videoPlayer$.pause();
        $children$$1_container$$42$$.$overlaysVideo$ && $JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$.$videoPlayer$ &&
        $JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$.$videoPlayer$.$beforeShowOverlay$();
        $children$$1_container$$42$$ = $goog$dom$getChildren$$($containerElement$$2$$);
        $goog$object$forEach$$($children$$1_container$$42$$, function ($c$$4$$) {
            $goog$dom$classlist$contains$$($c$$4$$, "vbx-selected") && $c$$4$$ !== $itemElement$$2$$ && $goog$dom$classlist$addRemove$$($c$$4$$, "vbx-selected", "vbx-unselected");
        }, $JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$);
        $goog$dom$classlist$add$$($containerElement$$2$$, $viewbix$sdk$Layout$ContainerClass$ITEM_SELECTED$$);
        $goog$dom$classlist$addRemove$$($itemElement$$2$$, "vbx-unselected", "vbx-selected");
        $JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$.$addStateClasses$($containerElement$$2$$.id + "-" + $viewbix$sdk$Layout$ContainerClass$ITEM_SELECTED$$);
        $JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$ = $JSCompiler_StaticMethods_getAgentFromElement$$($JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$, $itemElement$$2$$);
        null != $JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$ &&
        $JSCompiler_StaticMethods_setSelected$$($JSCompiler_StaticMethods_selectContainerItem$self_agent$$3$$, !0);
    }

    function $JSCompiler_StaticMethods_deselectContainerItems$$($JSCompiler_StaticMethods_deselectContainerItems$self$$, $container$$43$$) {
        console.log('deselectContainer');
        if ($goog$userAgent$detectedIPhone_$$ || $goog$userAgent$IPAD$$) {
            var $containerElement$$3_parentElement$$2$$ = document.querySelector(".video-js");
            null != $containerElement$$3_parentElement$$2$$ && $goog$style$setStyle$$($containerElement$$3_parentElement$$2$$, {
                position: $JSCompiler_StaticMethods_deselectContainerItems$self$$.$vjsParentElementPosition$,
                top: $JSCompiler_StaticMethods_deselectContainerItems$self$$.$vjsParentElementTop$,
                left: $JSCompiler_StaticMethods_deselectContainerItems$self$$.$vjsParentElementLeft$,
                height: $JSCompiler_StaticMethods_deselectContainerItems$self$$.$vjsParentElementHeight$,
                width: $JSCompiler_StaticMethods_deselectContainerItems$self$$.$vjsParentElementWidth$
            });
        }
        $JSCompiler_StaticMethods_deselectContainerItems$self$$.$removeStateClasses$($viewbix$sdk$Layout$BodyClass$SHOW_ROLL_PROMPT$$);
        var $containerElement$$3_parentElement$$2$$ = $container$$43$$.element,
            $wasSelected$$1$$ = $goog$dom$classlist$contains$$($containerElement$$3_parentElement$$2$$, $viewbix$sdk$Layout$ContainerClass$ITEM_SELECTED$$),
            $children$$2$$ = $goog$dom$getChildren$$($containerElement$$3_parentElement$$2$$);
        //console.log($children$$2$$);
        $goog$object$forEach$$($children$$2$$, function ($c$$5$$) {
            $goog$dom$classlist$contains$$($c$$5$$, "vbx-selected") &&
            $goog$dom$classlist$addRemove$$($c$$5$$, "vbx-selected", "vbx-unselected");
        }, $JSCompiler_StaticMethods_deselectContainerItems$self$$);
        $goog$object$forEach$$($JSCompiler_StaticMethods_deselectContainerItems$self$$.$agents$,
            function ($agent$$4$$) {
                $agent$$4$$.$container$ == $container$$43$$ && (
                    $agent$$4$$.send($viewbix$sdk$XpcMessage$createXpcPayload$$("PAUSE_ALL_MEDIA")),
                        $JSCompiler_StaticMethods_setSelected$$($agent$$4$$, !1));
            }, $JSCompiler_StaticMethods_deselectContainerItems$self$$);
        $goog$dom$classlist$remove$$($containerElement$$3_parentElement$$2$$, $viewbix$sdk$Layout$ContainerClass$ITEM_SELECTED$$);
        $JSCompiler_StaticMethods_deselectContainerItems$self$$.$removeStateClasses$($containerElement$$3_parentElement$$2$$.id + "-" + $viewbix$sdk$Layout$ContainerClass$ITEM_SELECTED$$);
        $wasSelected$$1$$ && $container$$43$$.$overlaysVideo$ && !$viewbix$sdk$helper$BooleanHelper$convertToBoolean$$(
            $JSCompiler_StaticMethods_deselectContainerItems$self$$.$playerConfig$[$viewbix$sdk$Layout$ConfigurationsPropertyName$PLAY_VIDEO_IN_APPS$$]
        ) &&
        $JSCompiler_StaticMethods_deselectContainerItems$self$$.$videoWasPlaying_$ &&
        (
            $JSCompiler_StaticMethods_deselectContainerItems$self$$.$videoPlayer$ &&
            $JSCompiler_StaticMethods_deselectContainerItems$self$$.$videoPlayer$.play(),
                $JSCompiler_StaticMethods_deselectContainerItems$self$$.$videoWasPlaying_$ = !1
        );
        $wasSelected$$1$$ && $container$$43$$.$overlaysVideo$ &&
        $JSCompiler_StaticMethods_deselectContainerItems$self$$.$videoPlayer$ &&
        $JSCompiler_StaticMethods_deselectContainerItems$self$$.$videoPlayer$.$afterHideOverlay$();
    }

    function $JSCompiler_StaticMethods_getAgentFromElement$$($JSCompiler_StaticMethods_getAgentFromElement$self$$, $appElement$$) {
        return $goog$object$findValue$$($JSCompiler_StaticMethods_getAgentFromElement$self$$.$agents$, function ($agent$$5$$) {
                return $agent$$5$$.$getElement$() == $appElement$$;
            }, $JSCompiler_StaticMethods_getAgentFromElement$self$$) || null;
    }

    function $JSCompiler_StaticMethods_getMenu$$($JSCompiler_StaticMethods_getMenu$self$$, $id$$41$$) {
        return $goog$object$get$$($JSCompiler_StaticMethods_getMenu$self$$.$menus$, $id$$41$$);
    }

    function $viewbix$sdk$Layout$getPlayerConfig$$($configName$$1$$) {
        return $JSCompiler_StaticMethods_getPlayerConfig$$($viewbix$sdk$Layout$getLayoutInstance$$(), $configName$$1$$);
    }

    function $JSCompiler_StaticMethods_getPlayerConfig$$($JSCompiler_StaticMethods_getPlayerConfig$self$$, $configName$$2$$) {
        return null != $JSCompiler_StaticMethods_getPlayerConfig$self$$.$playerConfig$ && $configName$$2$$ in $JSCompiler_StaticMethods_getPlayerConfig$self$$.$playerConfig$ ? $JSCompiler_StaticMethods_getPlayerConfig$self$$.$playerConfig$[$configName$$2$$] : null;
    }

    function $JSCompiler_StaticMethods_getPreviewUrl$$($JSCompiler_StaticMethods_getPreviewUrl$self_playerId$$3_uri$$46_uri$$inline_765$$) {
        var $previewUrl_title$$7$$ = $JSCompiler_StaticMethods_getPreviewUrl$self_playerId$$3_uri$$46_uri$$inline_765$$.$playerConfig$[$viewbix$sdk$Layout$PlayerConfigurationName$TITLE$$];
        $JSCompiler_StaticMethods_getPreviewUrl$self_playerId$$3_uri$$46_uri$$inline_765$$ = $JSCompiler_StaticMethods_getPreviewUrl$self_playerId$$3_uri$$46_uri$$inline_765$$.$playerConfig$[$viewbix$sdk$Layout$PlayerConfigurationName$PLAYER_ID$$];
        $previewUrl_title$$7$$ = $viewbix$sdk$helper$UriHelper$getProtocolAndDomain$$() + "/v/" + ($goog$string$isEmptySafe$$($previewUrl_title$$7$$) ? "" : encodeURIComponent($previewUrl_title$$7$$.replace(/[^A-Za-z0-9]/g, "-"))) + "/" + $JSCompiler_StaticMethods_getPreviewUrl$self_playerId$$3_uri$$46_uri$$inline_765$$;
        $JSCompiler_StaticMethods_getPreviewUrl$self_playerId$$3_uri$$46_uri$$inline_765$$ = location.href;
        $JSCompiler_StaticMethods_getPreviewUrl$self_playerId$$3_uri$$46_uri$$inline_765$$ = $JSCompiler_StaticMethods_getPreviewUrl$self_playerId$$3_uri$$46_uri$$inline_765$$ instanceof $goog$Uri$$ ? $JSCompiler_StaticMethods_getPreviewUrl$self_playerId$$3_uri$$46_uri$$inline_765$$.clone() : new $goog$Uri$$($JSCompiler_StaticMethods_getPreviewUrl$self_playerId$$3_uri$$46_uri$$inline_765$$, void 0);
        var $paramValue_vbxap$$ = $JSCompiler_StaticMethods_getPreviewUrl$self_playerId$$3_uri$$46_uri$$inline_765$$.$queryData_$.get("vbxap");
        if (!$goog$string$isEmptySafe$$($paramValue_vbxap$$)) {
            for (var $params$$6$$ = $paramValue_vbxap$$.split(","), $previewUrl_title$$7$$ = $previewUrl_title$$7$$ + ("?vbxap=" + encodeURIComponent($paramValue_vbxap$$)), $i$$170$$ = 0; $i$$170$$ < $params$$6$$.length; $i$$170$$++) {
                var $param$$4$$ = $params$$6$$[$i$$170$$], $paramValue_vbxap$$ = $JSCompiler_StaticMethods_getPreviewUrl$self_playerId$$3_uri$$46_uri$$inline_765$$.$queryData_$.get($param$$4$$) || "", $previewUrl_title$$7$$ = $previewUrl_title$$7$$ + ("&" + $param$$4$$ + "=" + encodeURIComponent($paramValue_vbxap$$))
            }
        }
        return $previewUrl_title$$7$$;
    }

    function $JSCompiler_StaticMethods_initContainers$$($JSCompiler_StaticMethods_initContainers$self$$) {
        var $containersParamsArray$$ = $viewbix$sdk$helper$ArrayHelper$getAsArrayOfObjects$$(
            $JSCompiler_StaticMethods_initContainers$self$$.$containerParams_$);
        $goog$array$forEach$$($containersParamsArray$$,
            function ($containerParams$$) {
                var $completeAllowSkipRollApp_containerId$$2_overlaysVideo$$ = $containerParams$$[$viewbix$sdk$Layout$ContainerParamNames$ID$$],
                    $containerElement$$4$$ = $goog$dom$getElementHelper_$$(document, $completeAllowSkipRollApp_containerId$$2_overlaysVideo$$),
                    $closeButtonElement_container$$44$$ = new $viewbix$sdk$component$AppContainer$$($completeAllowSkipRollApp_containerId$$2_overlaysVideo$$,
                        $containerElement$$4$$);
                $goog$object$add$$(this.$containers_$,
                    $completeAllowSkipRollApp_containerId$$2_overlaysVideo$$, $closeButtonElement_container$$44$$);

                $viewbix$sdk$Layout$ContainerParamNames$OVERLAYS_VIDEO$$ in $containerParams$$ &&
                (
                    $completeAllowSkipRollApp_containerId$$2_overlaysVideo$$ = $viewbix$sdk$helper$BooleanHelper$convertToBoolean$$(
                        $containerParams$$[$viewbix$sdk$Layout$ContainerParamNames$OVERLAYS_VIDEO$$], !0),
                        $closeButtonElement_container$$44$$.$overlaysVideo$ = $completeAllowSkipRollApp_containerId$$2_overlaysVideo$$
                );

                $viewbix$sdk$Layout$ContainerParamNames$ROLL_PROMPT$$ in $containerParams$$ &&
                (
                    $closeButtonElement_container$$44$$.$rollPromptElement$ = $goog$dom$getElementHelper_$$(document, $containerParams$$[$viewbix$sdk$Layout$ContainerParamNames$ROLL_PROMPT$$])
                );

                $viewbix$sdk$Layout$ContainerParamNames$ROLL_PROMPT_FUNCTION$$ in $containerParams$$ &&
                $goog$isFunction$$($containerParams$$[$viewbix$sdk$Layout$ContainerParamNames$ROLL_PROMPT_FUNCTION$$]) &&
                (
                    $closeButtonElement_container$$44$$.$rollPromptFunction$ = $containerParams$$[$viewbix$sdk$Layout$ContainerParamNames$ROLL_PROMPT_FUNCTION$$]
                );

                $viewbix$sdk$Layout$ContainerParamNames$COMPLETE_ALLOW_SKIP_ROLL_APP$$ in $containerParams$$ &&
                (
                    $completeAllowSkipRollApp_containerId$$2_overlaysVideo$$ = $viewbix$sdk$helper$BooleanHelper$convertToBoolean$$($containerParams$$[$viewbix$sdk$Layout$ContainerParamNames$COMPLETE_ALLOW_SKIP_ROLL_APP$$], !0),
                        $closeButtonElement_container$$44$$.$completeAllowSkipRollApp$ = $completeAllowSkipRollApp_containerId$$2_overlaysVideo$$
                );

                $viewbix$sdk$Layout$ContainerParamNames$CLOSE_BUTTON$$ in $containerParams$$ &&
                !0 == $containerParams$$[$viewbix$sdk$Layout$ContainerParamNames$CLOSE_BUTTON$$] &&
                (
                    $closeButtonElement_container$$44$$ = document.createElement("button"),
                        $goog$dom$classlist$add$$($closeButtonElement_container$$44$$, "vbx-close-button"),
                        $containerElement$$4$$.appendChild($closeButtonElement_container$$44$$),
                        $goog$events$listen$$($closeButtonElement_container$$44$$, "click", this.$onClickCloseButton$, !1, this)
                );

                $viewbix$sdk$Layout$ContainerParamNames$APP_CLOSE_CALLBACK$$ in $containerParams$$ &&
                (
                    this.$appCloseCallback_$ = $containerParams$$[$viewbix$sdk$Layout$ContainerParamNames$APP_CLOSE_CALLBACK$$]
                );

                $viewbix$sdk$Layout$ContainerParamNames$APP_SELECTED_CALLBACK$$ in $containerParams$$ &&
                (
                    this.$appSelectedCallback_$ = $containerParams$$[$viewbix$sdk$Layout$ContainerParamNames$APP_SELECTED_CALLBACK$$]
                );

                $viewbix$sdk$Layout$ContainerParamNames$APP_IFRAME_CREATED_CALLBACK$$ in $containerParams$$ &&
                (
                    this.$appIframeCreatedCallback_$ = $containerParams$$[$viewbix$sdk$Layout$ContainerParamNames$APP_IFRAME_CREATED_CALLBACK$$]
                );
            }, $JSCompiler_StaticMethods_initContainers$self$$);
    }

    function $JSCompiler_StaticMethods_initFullScreen$$($JSCompiler_StaticMethods_initFullScreen$self$$) {
        document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled ? $goog$events$listen$$(document, $goog$dom$fullscreen$EventType$CHANGE$$, function () {
            $JSCompiler_StaticMethods_isFullScreen$$() ? $JSCompiler_StaticMethods_removeAddStateClasses$$(0, "not-full-screen", "is-full-screen") : $JSCompiler_StaticMethods_removeAddStateClasses$$(0, "is-full-screen", "not-full-screen");
        }, !1, $JSCompiler_StaticMethods_initFullScreen$self$$) : $JSCompiler_StaticMethods_initFullScreen$self$$.$addStateClasses$("full-screen-disabled");
    }

    function $JSCompiler_StaticMethods_initApps$$($JSCompiler_StaticMethods_initApps$self$$) {
        var $firstApp$$ = !0;
        $goog$array$forEach$$($JSCompiler_StaticMethods_initApps$self$$.$playerConfig$[$viewbix$sdk$Layout$ConfigurationsPropertyName$APPLICATIONS$$], function ($app$$9_appElement$$1_containerId$$3$$) {
            if (!($viewbix$sdk$Layout$AppConfigurationName$NAV_LINK$$ in $app$$9_appElement$$1_containerId$$3$$ && $viewbix$sdk$helper$BooleanHelper$convertToBoolean$$($app$$9_appElement$$1_containerId$$3$$[$viewbix$sdk$Layout$AppConfigurationName$NAV_LINK$$]))) {
                var $agent$$6$$ = new $viewbix$sdk$Agent$$($app$$9_appElement$$1_containerId$$3$$, $JSCompiler_StaticMethods_getAppCssRuleTexts$$(this));
                $goog$events$listen$$($agent$$6$$, $viewbix$sdk$event$IframeCreatedEvent$APP_IFRAME_CREATED$$, function ($e$$90$$) {
                    $goog$isFunction$$(this.$appIframeCreatedCallback_$) && this.$appIframeCreatedCallback_$($e$$90$$.$iframe$);
                }, !1, this);
                $agent$$6$$.load();
                $goog$object$add$$(this.$agents$, $app$$9_appElement$$1_containerId$$3$$[$viewbix$sdk$Layout$ConfigurationsPropertyName$ID$$], $agent$$6$$);
                $goog$array$insert$$($agent$$6$$.$messageCallbacks_$, {$func$: this.$onAgentMessage$, scope: this});
                if (!$goog$object$isEmpty$$(this.$containers_$)) {
                    var $container$$45$$ = $goog$object$getValues$$(this.$containers_$)[0];
                    $app$$9_appElement$$1_containerId$$3$$ = $app$$9_appElement$$1_containerId$$3$$[$viewbix$sdk$Layout$ConfigurationsPropertyName$CONTAINER_ID$$];
                    null != $app$$9_appElement$$1_containerId$$3$$ && $app$$9_appElement$$1_containerId$$3$$ in this.$containers_$ && ($container$$45$$ = $goog$object$get$$(this.$containers_$, $app$$9_appElement$$1_containerId$$3$$));
                    null != $container$$45$$ &&
                    $goog$dom$isElement$$($container$$45$$.element) &&
                    ($app$$9_appElement$$1_containerId$$3$$ = $agent$$6$$.$getElement$(),
                        $viewbix$sdk$Layout$appendContainerItem$$($container$$45$$.element, $app$$9_appElement$$1_containerId$$3$$),
                    $firstApp$$ && ($goog$dom$classlist$addRemove$$($app$$9_appElement$$1_containerId$$3$$, "vbx-unselected", "vbx-selected"),
                        $firstApp$$ = !1), $agent$$6$$.$container$ = $container$$45$$);
                }
            }
        }, $JSCompiler_StaticMethods_initApps$self$$);
    }

    function $JSCompiler_StaticMethods_getAppCssRuleTexts$$($JSCompiler_StaticMethods_getAppCssRuleTexts$self$$) {
        if (null == $JSCompiler_StaticMethods_getAppCssRuleTexts$self$$.$appCssRuleTexts_$) {
            var $allRules_bucket$$1$$ = $goog$cssom$getAllCssStyleRules$$(), $allRules_bucket$$1$$ = $goog$array$bucket$$($allRules_bucket$$1$$, function ($rule$$3$$) {
                if (null != $rule$$3$$ && "selectorText" in $rule$$3$$ && 0 <= $rule$$3$$.selectorText.indexOf("vbx-app-body")) {
                    return "rules";
                }
            }, $JSCompiler_StaticMethods_getAppCssRuleTexts$self$$);
            $JSCompiler_StaticMethods_getAppCssRuleTexts$self$$.$appCssRuleTexts_$ = "rules" in $allRules_bucket$$1$$ ? $goog$array$map$$($allRules_bucket$$1$$.rules, function ($rule$$4_styleText$$) {
                var $selectors$$9$$ = $viewbix$sdk$helper$StringHelper$splitAndTrim$$($rule$$4_styleText$$.selectorText, ","), $selectors$$9$$ = $goog$array$filter$$($selectors$$9$$, function ($s$$41$$) {
                    return 0 <= $s$$41$$.indexOf("vbx-app-body");
                });
                $rule$$4_styleText$$ = $rule$$4_styleText$$.cssText.substring($rule$$4_styleText$$.cssText.indexOf("{"));
                return $selectors$$9$$.join(",") + $rule$$4_styleText$$;
            }, $JSCompiler_StaticMethods_getAppCssRuleTexts$self$$) : [];
            $JSCompiler_StaticMethods_getAppCssRuleTexts$self$$.$appCssRuleTexts_$.push('.vbx-app-body, .vbx-app-body input, .vbx-app-body button {font-family:"' + $JSCompiler_StaticMethods_getAppCssRuleTexts$self$$.$playerConfig$[$viewbix$sdk$Layout$ConfigurationsPropertyName$STANDARD_FONT$$] + '"}');
        }
        return $JSCompiler_StaticMethods_getAppCssRuleTexts$self$$.$appCssRuleTexts_$;
    }

    function $JSCompiler_StaticMethods_initMenu$$($JSCompiler_StaticMethods_initMenu$self$$) {
        var $params$$8$$ = $JSCompiler_StaticMethods_initMenu$self$$.$menuParams_$;
        null != $params$$8$$ && ($goog$isString$$($params$$8$$) ?
            $JSCompiler_StaticMethods_createMenuFromParamsAndAddToCollection$$($JSCompiler_StaticMethods_initMenu$self$$, $params$$8$$, {}) :
            $goog$isObject$$($params$$8$$) ?
                $JSCompiler_StaticMethods_createMenuFromParamsAndAddToCollection$$($JSCompiler_StaticMethods_initMenu$self$$,
                    $params$$8$$[$viewbix$sdk$Layout$MenuParamName$ID$$], $params$$8$$) :
            $goog$isArray$$($params$$8$$) &&
            $goog$array$forEach$$($params$$8$$, function ($param$$5$$) {
                $JSCompiler_StaticMethods_createMenuFromParamsAndAddToCollection$$(this, $param$$5$$[$viewbix$sdk$Layout$MenuParamName$ID$$], $param$$5$$);
            }, $JSCompiler_StaticMethods_initMenu$self$$));
    }

    function $JSCompiler_StaticMethods_getApplication$$($JSCompiler_StaticMethods_getApplication$self$$, $id$$42$$) {
        return $goog$array$find$$($JSCompiler_StaticMethods_getApplication$self$$.$playerConfig$[$viewbix$sdk$Layout$ConfigurationsPropertyName$APPLICATIONS$$], function ($a$$46$$) {
            return 0 == $goog$string$caseInsensitiveCompare$$($a$$46$$[$viewbix$sdk$Layout$ConfigurationsPropertyName$ID$$], $id$$42$$) || 0 == $goog$string$caseInsensitiveCompare$$($a$$46$$[$viewbix$sdk$Layout$ConfigurationsPropertyName$INTERNAL_ID$$], $id$$42$$);
        }, $JSCompiler_StaticMethods_getApplication$self$$);
    }

    function $JSCompiler_StaticMethods_configureVideoPlayer$$($JSCompiler_StaticMethods_configureVideoPlayer$self$$, $opt_startSeconds$$4$$) {
        console.log('configureVideoPlayer');
        $JSCompiler_StaticMethods_configureVideoPlayer$self$$
            .$videoPlayer$
            .autoplay($JSCompiler_StaticMethods_configureVideoPlayer$self$$.$autoplay_$);
        $viewbix$sdk$helper$BindHelper$listenToConfig$$(
            $viewbix$sdk$Layout$PlayerConfigurationName$VIDEO_URL$$,
            function ($videoUrl$$3$$) {
                console.log($videoUrl$$3$$);
                this.$addRemoveNoVideoClass$($videoUrl$$3$$);
                this.$videoUrl_$ = $videoUrl$$3$$;
                this.$ignoreCustomThumbnailForMobileYoutube$();
                this.$videoPlayer$.load($videoUrl$$3$$, $opt_startSeconds$$4$$);
            }, $JSCompiler_StaticMethods_configureVideoPlayer$self$$);
        $viewbix$sdk$Layout$$.prototype.$addRemoveNoVideoClass$ = function $$viewbix$sdk$Layout$$$$$addRemoveNoVideoClass$$($videoUrl$$4$$) {
            $goog$string$isEmptySafe$$($videoUrl$$4$$) ?
                this.$addStateClasses$("novideo-tech") :
                this.$removeStateClasses$("novideo-tech");
        };
        $viewbix$sdk$Layout$$.prototype.$ignoreCustomThumbnailForMobileYoutube$ = function $$viewbix$sdk$Layout$$$$$ignoreCustomThumbnailForMobileYoutube$$() {
            if (null != this.$videoUrl_$ && null != this.$posterUrl_$) {
                var $JSCompiler_temp$$3_iosFixPosterElement_url$$inline_774$$;
                if ($JSCompiler_temp$$3_iosFixPosterElement_url$$inline_774$$ = $goog$userAgent$MOBILE$$ || $goog$userAgent$detectedAndroid_$$) {
                    $JSCompiler_temp$$3_iosFixPosterElement_url$$inline_774$$ = $viewbix$sdk$helper$YouTubeHelper$normalizeUrl$$(this.$videoUrl_$), $JSCompiler_temp$$3_iosFixPosterElement_url$$inline_774$$ = $goog$string$isEmptySafe$$($JSCompiler_temp$$3_iosFixPosterElement_url$$inline_774$$) ? !1 : null === $JSCompiler_temp$$3_iosFixPosterElement_url$$inline_774$$ ? !1 : -1 != $viewbix$sdk$helper$YouTubeHelper$getYouTubeIdOffset$$($JSCompiler_temp$$3_iosFixPosterElement_url$$inline_774$$);
                }
                $JSCompiler_temp$$3_iosFixPosterElement_url$$inline_774$$ && !$viewbix$sdk$helper$YouTubeHelper$isYouTubeThumbnail$$(this.$posterUrl_$) && (this.$posterUrl_$ = "//img.youtube.com/vi/" + $viewbix$sdk$helper$YouTubeHelper$extractId$$(this.$videoUrl_$) + "/0.jpg");
                this.$videoPlayer$.poster(this.$posterUrl_$);
                $JSCompiler_StaticMethods_initIosFixOverlay$$(this);
                $JSCompiler_temp$$3_iosFixPosterElement_url$$inline_774$$ = document.querySelector("#iosFixPoster");
                null != $JSCompiler_temp$$3_iosFixPosterElement_url$$inline_774$$ &&
                (
                    $JSCompiler_temp$$3_iosFixPosterElement_url$$inline_774$$.style.background = 'url("' + this.$posterUrl_$ + '") no-repeat center center',
                        $JSCompiler_temp$$3_iosFixPosterElement_url$$inline_774$$.style.$backgroundSize$ = "cover"
                );
            }
        };
        $viewbix$sdk$helper$BindHelper$listenToConfig$$($viewbix$sdk$Layout$PlayerConfigurationName$VIDEO_POSTER$$, function ($posterUrl$$1$$) {
            var $youTubeId$$ = $viewbix$sdk$helper$YouTubeHelper$extractId$$($posterUrl$$1$$);
            null != $youTubeId$$ && 11 == $posterUrl$$1$$.length && ($posterUrl$$1$$ = "https://img.youtube.com/vi/" + $youTubeId$$ + "/0.jpg");
            this.$posterUrl_$ = $posterUrl$$1$$;
            this.$ignoreCustomThumbnailForMobileYoutube$();
        }, $JSCompiler_StaticMethods_configureVideoPlayer$self$$)
        ;
        $JSCompiler_StaticMethods_configureVideoPlayer$self$$.$videoPlayer$.$unlistenAll$();
        $JSCompiler_StaticMethods_configureVideoPlayer$self$$.$videoPlayer$.$listenDurationChange$($JSCompiler_StaticMethods_configureVideoPlayer$self$$.$onVideoDurationChange$, $JSCompiler_StaticMethods_configureVideoPlayer$self$$);
        $JSCompiler_StaticMethods_configureVideoPlayer$self$$.$videoPlayer$.$listenEnded$($JSCompiler_StaticMethods_configureVideoPlayer$self$$.$onVideoEnded$, $JSCompiler_StaticMethods_configureVideoPlayer$self$$);
        $JSCompiler_StaticMethods_configureVideoPlayer$self$$.$videoPlayer$.$listenError$($JSCompiler_StaticMethods_configureVideoPlayer$self$$.$onVideoError$, $JSCompiler_StaticMethods_configureVideoPlayer$self$$);
        $JSCompiler_StaticMethods_configureVideoPlayer$self$$.$videoPlayer$.$listenLoadedData$($JSCompiler_StaticMethods_configureVideoPlayer$self$$.$onVideoLoadedData$, $JSCompiler_StaticMethods_configureVideoPlayer$self$$);
        $JSCompiler_StaticMethods_configureVideoPlayer$self$$.$videoPlayer$.$listenLoadStart$($JSCompiler_StaticMethods_configureVideoPlayer$self$$.$onVideoLoadStart$, $JSCompiler_StaticMethods_configureVideoPlayer$self$$);
        $JSCompiler_StaticMethods_configureVideoPlayer$self$$.$videoPlayer$.$listenPause$($JSCompiler_StaticMethods_configureVideoPlayer$self$$.$onVideoPause$, $JSCompiler_StaticMethods_configureVideoPlayer$self$$);
        $JSCompiler_StaticMethods_configureVideoPlayer$self$$.$videoPlayer$.$listenPlaying$($JSCompiler_StaticMethods_configureVideoPlayer$self$$.$onVideoPlaying$, $JSCompiler_StaticMethods_configureVideoPlayer$self$$);
        $JSCompiler_StaticMethods_configureVideoPlayer$self$$.$videoPlayer$.$listenSeeked$($JSCompiler_StaticMethods_configureVideoPlayer$self$$.$onVideoSeeked$, $JSCompiler_StaticMethods_configureVideoPlayer$self$$);
        $JSCompiler_StaticMethods_configureVideoPlayer$self$$.$videoPlayer$.$listenSeeking$($JSCompiler_StaticMethods_configureVideoPlayer$self$$.$onVideoSeeking$, $JSCompiler_StaticMethods_configureVideoPlayer$self$$);
        $JSCompiler_StaticMethods_configureVideoPlayer$self$$.$videoPlayer$.$listenTimeUpdate$($JSCompiler_StaticMethods_configureVideoPlayer$self$$.$onVideoTimeUpdate$, $JSCompiler_StaticMethods_configureVideoPlayer$self$$);
        $JSCompiler_StaticMethods_configureVideoPlayer$self$$.$videoPlayer$.$listenFullscreenChange$($JSCompiler_StaticMethods_configureVideoPlayer$self$$.$onVideoFullscreenChange$, $JSCompiler_StaticMethods_configureVideoPlayer$self$$);
    }

    $JSCompiler_prototypeAlias$$.$onVideoDurationChange$ = function $$JSCompiler_prototypeAlias$$$$onVideoDurationChange$$() {
        isNaN(this.$videoDuration$) && 0 == this.$videoDuration$ || (this.$videoDuration$ = this.$videoPlayer$.duration());
    };
    $JSCompiler_prototypeAlias$$.$onVideoEnded$ = function $$JSCompiler_prototypeAlias$$$$onVideoEnded$$() {
        this.$videoPlayer$.stop();
        $JSCompiler_StaticMethods_removeAddStateClasses$$(0, ["video-playing", "video-paused"], "video-ended");
        $viewbix$sdk$track$Tracker$trackVideoQuartile$$(1, !0);
        $JSCompiler_StaticMethods_attemptSelectRollApp$$(this, $viewbix$sdk$Layout$RollAppType$POST_ROLL$$);
    };
    $JSCompiler_prototypeAlias$$.$onVideoError$ = function $$JSCompiler_prototypeAlias$$$$onVideoError$$() {
    };
    $JSCompiler_prototypeAlias$$.$onVideoLoadedData$ = function $$JSCompiler_prototypeAlias$$$$onVideoLoadedData$$() {
    };
    $JSCompiler_prototypeAlias$$.$onVideoLoadStart$ = function $$JSCompiler_prototypeAlias$$$$onVideoLoadStart$$() {
    };
    $JSCompiler_prototypeAlias$$.$onAgentMessage$ = function $$JSCompiler_prototypeAlias$$$$onAgentMessage$$($message$$33$$, $agent$$7$$) {
        switch ($message$$33$$.name) {
            case "PAUSE_ALL_MEDIA":
                this.$videoPlayer$.pause();
                break;
            case "SEEK_AND_PLAY":
                this.$videoPlayer$.currentTime(parseFloat($message$$33$$.data.time));
                this.$videoPlayer$.play();
                $JSCompiler_StaticMethods_deselectContainerItems$$(this, $agent$$7$$.$container$);
                break;
            case "REPLACE_AND_PLAY":
                var $videoUrl$$5$$ = $message$$33$$.data.videoUrl;
                this.$addRemoveNoVideoClass$($videoUrl$$5$$);
                this.$videoPlayer$.load($videoUrl$$5$$);
                this.$videoPlayer$.play();
                "Youtube" == this.$videoPlayer$.$techName$() ? this.$addStateClasses$("youtube-tech") : this.$removeStateClasses$("youtube-tech");
                $JSCompiler_StaticMethods_deselectContainerItems$$(this, $agent$$7$$.$container$);
                $goog$isFunction$$(this.$appCloseCallback_$) && this.$appCloseCallback_$();
        }
    };
    function $JSCompiler_StaticMethods_getCurrentTime$$($JSCompiler_StaticMethods_getCurrentTime$self$$) {
        return isNaN($JSCompiler_StaticMethods_getCurrentTime$self$$.$recentStartSeconds$) ?
        $JSCompiler_StaticMethods_getCurrentTime$self$$.$videoPlayer$ &&
        $JSCompiler_StaticMethods_getCurrentTime$self$$.$videoPlayer$.currentTime() :
            $JSCompiler_StaticMethods_getCurrentTime$self$$.$recentStartSeconds$;
    }

    function $JSCompiler_StaticMethods_getCurrentDuration$$($JSCompiler_StaticMethods_getCurrentDuration$self$$) {
        return isNaN($JSCompiler_StaticMethods_getCurrentDuration$self$$.$recentDuration$) ?
        $JSCompiler_StaticMethods_getCurrentDuration$self$$.$videoPlayer$ &&
        $JSCompiler_StaticMethods_getCurrentDuration$self$$.$videoPlayer$.duration() :
            $JSCompiler_StaticMethods_getCurrentDuration$self$$.$recentDuration$;
    }

    function $JSCompiler_StaticMethods_isCompleteDispatcher$$($JSCompiler_StaticMethods_isCompleteDispatcher$self$$, $app$$10$$) {
        return 0 == $JSCompiler_StaticMethods_getApplication$$($JSCompiler_StaticMethods_isCompleteDispatcher$self$$, $app$$10$$[$viewbix$sdk$Layout$AppConfigurationName$PLAYER_APP_INTERNAL_ID$$])[$viewbix$sdk$Layout$ConfigurationsPropertyName$COMPONENT$$].indexOf("com.qoof.sdk.components.forms");
    }

    function $JSCompiler_StaticMethods_getNextRollApp$$($JSCompiler_StaticMethods_getNextRollApp$self_rollApp$$) {
        if ($goog$string$isEmptySafe$$($JSCompiler_StaticMethods_getNextRollApp$self_rollApp$$.$videoUrl_$) && !$goog$string$isEmptySafe$$($JSCompiler_StaticMethods_getNextRollApp$self_rollApp$$.$posterUrl_$)) {
            return null;
        }
        var $currentTime$$1$$ = $JSCompiler_StaticMethods_getCurrentTime$$($JSCompiler_StaticMethods_getNextRollApp$self_rollApp$$), $duration$$10$$ = $JSCompiler_StaticMethods_getCurrentDuration$$($JSCompiler_StaticMethods_getNextRollApp$self_rollApp$$);
        if (0 < $currentTime$$1$$ && $currentTime$$1$$ >= $duration$$10$$ || 0 == $currentTime$$1$$ && 0 == $duration$$10$$ && !isNaN($JSCompiler_StaticMethods_getNextRollApp$self_rollApp$$.$videoDuration$)) {
            $currentTime$$1$$ = -1;
        }
        $JSCompiler_StaticMethods_getNextRollApp$self_rollApp$$ = $goog$array$find$$($JSCompiler_StaticMethods_getNextRollApp$self_rollApp$$.$rollApps_$, function ($ra$$1$$) {
            var $startTime$$3$$ = parseFloat($ra$$1$$[$viewbix$sdk$Layout$AppConfigurationName$START_TIME$$]);
            return (-1 == $currentTime$$1$$ && -1 == $startTime$$3$$ || $startTime$$3$$ <= $currentTime$$1$$ && -1 != $startTime$$3$$) && !$ra$$1$$.$completed$ ? !0 : !1;
        }, $JSCompiler_StaticMethods_getNextRollApp$self_rollApp$$);
        return null != $JSCompiler_StaticMethods_getNextRollApp$self_rollApp$$ && $viewbix$sdk$Core$isState$$("ui-hide") ? ($JSCompiler_StaticMethods_getNextRollApp$self_rollApp$$.$completed$ = !0, null) : $JSCompiler_StaticMethods_getNextRollApp$self_rollApp$$;
    }

    function $JSCompiler_StaticMethods_getNextPostRollApp$$($JSCompiler_StaticMethods_getNextPostRollApp$self$$) {
        return $goog$array$find$$($JSCompiler_StaticMethods_getNextPostRollApp$self$$.$rollApps_$, function ($ra$$2$$) {
            return -1 != parseFloat($ra$$2$$[$viewbix$sdk$Layout$AppConfigurationName$START_TIME$$]) || $ra$$2$$.$completed$ ? !1 : !0;
        }, $JSCompiler_StaticMethods_getNextPostRollApp$self$$);
    }

    function $JSCompiler_StaticMethods_selectRollApp$$($JSCompiler_StaticMethods_selectRollApp$self$$, $rollApp$$2$$) {
        console.log('selectRollApp');
        console.log($rollApp$$2$$);
        var $internalId$$1$$ = $rollApp$$2$$[$viewbix$sdk$Layout$AppConfigurationName$PLAYER_APP_INTERNAL_ID$$],
            $allowSkip$$1$$ = $rollApp$$2$$[$viewbix$sdk$Layout$AppConfigurationName$ALLOW_SKIP$$],
            $prompt$$1$$ = $rollApp$$2$$[$viewbix$sdk$Layout$AppConfigurationName$PROMPT$$],
            $applicationObject$$3_trackingData$$15$$ = $JSCompiler_StaticMethods_getApplication$$($JSCompiler_StaticMethods_selectRollApp$self$$,
                $rollApp$$2$$[$viewbix$sdk$Layout$AppConfigurationName$PLAYER_APP_INTERNAL_ID$$]),
            $agent$$8_componentClass$$ =
                $goog$object$get$$($JSCompiler_StaticMethods_selectRollApp$self$$.$agents$,
                    $applicationObject$$3_trackingData$$15$$[$viewbix$sdk$Layout$ConfigurationsPropertyName$ID$$]);
        if (!$goog$dom$classlist$contains$$($agent$$8_componentClass$$.$getElement$(), "vbx-selected")) {
            switch ($agent$$8_componentClass$$ = "", null != $applicationObject$$3_trackingData$$15$$ &&
            ($agent$$8_componentClass$$ = $applicationObject$$3_trackingData$$15$$[$viewbix$sdk$Layout$ConfigurationsPropertyName$COMPONENT$$]),
                $applicationObject$$3_trackingData$$15$$ = new $viewbix$sdk$track$TrackingData$$(null, $applicationObject$$3_trackingData$$15$$, null, null,
                    new $viewbix$sdk$track$RollData$$($rollApp$$2$$[$viewbix$sdk$Layout$AppConfigurationName$ROLL_TYPE$$],
                        $allowSkip$$1$$, "start")),
                $rollApp$$2$$[$viewbix$sdk$Layout$AppConfigurationName$ROLL_TYPE$$]) {
                case $viewbix$sdk$Layout$RollAppType$PRE_ROLL$$:
                    $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$SYSTEM_SHOW_PREROLL_APP$$, $agent$$8_componentClass$$, null, $applicationObject$$3_trackingData$$15$$);
                    break;
                case $viewbix$sdk$Layout$RollAppType$MID_ROLL$$:
                    $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$SYSTEM_SHOW_MIDROLL_APP$$, $agent$$8_componentClass$$, null, $applicationObject$$3_trackingData$$15$$);
                    break;
                case $viewbix$sdk$Layout$RollAppType$POST_ROLL$$:
                    $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$SYSTEM_SHOW_POSTROLL_APP$$, $agent$$8_componentClass$$, null, $applicationObject$$3_trackingData$$15$$);
            }
        }
        $agent$$8_componentClass$$ = $JSCompiler_StaticMethods_selectApp$$($JSCompiler_StaticMethods_selectRollApp$self$$, $internalId$$1$$, !1);
        if (null !== $agent$$8_componentClass$$) {
            $JSCompiler_StaticMethods_selectRollApp$self$$.$currentRollApp_$ = $rollApp$$2$$;
            switch ($rollApp$$2$$[$viewbix$sdk$Layout$AppConfigurationName$ROLL_TYPE$$]) {
                case $viewbix$sdk$Layout$RollAppType$POST_ROLL$$:
                    return;
            }
            $allowSkip$$1$$ ? $agent$$8_componentClass$$.$container$.$completeAllowSkipRollApp$ ? $rollApp$$2$$.$completed$ = !0 : $rollApp$$2$$.$listened$ || ($rollApp$$2$$.$listened$ = !0, $JSCompiler_StaticMethods_listenOnceComplete$$($agent$$8_componentClass$$, function () {
                $rollApp$$2$$.$completed$ = !0;
                this.$removeStateClasses$($viewbix$sdk$Layout$BodyClass$GATED$$);
                var $app$$11$$ = $JSCompiler_StaticMethods_getApplication$$(this, $internalId$$1$$);
                $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$USER_ROLLAPP_COMPLETE$$, void 0, null, new $viewbix$sdk$track$TrackingData$$(null, $app$$11$$, null, null, new $viewbix$sdk$track$RollData$$($rollApp$$2$$[$viewbix$sdk$Layout$AppConfigurationName$ROLL_TYPE$$], $rollApp$$2$$[$viewbix$sdk$Layout$AppConfigurationName$ALLOW_SKIP$$], "complete")));
                $JSCompiler_StaticMethods_deselectContainerItems$$(this, $goog$object$get$$(this.$agents$, $app$$11$$[$viewbix$sdk$Layout$ConfigurationsPropertyName$ID$$]).$container$);
                $JSCompiler_StaticMethods_attemptSelectRollApp$$(this);
            }, $JSCompiler_StaticMethods_selectRollApp$self$$)) : null != $agent$$8_componentClass$$ && ($JSCompiler_StaticMethods_selectRollApp$self$$.$addStateClasses$($viewbix$sdk$Layout$BodyClass$GATED$$), $rollApp$$2$$.$listened$ || ($rollApp$$2$$.$listened$ = !0, $JSCompiler_StaticMethods_listenOnceComplete$$($agent$$8_componentClass$$, function () {
                $rollApp$$2$$.$completed$ = !0;
                this.$removeStateClasses$($viewbix$sdk$Layout$BodyClass$GATED$$);
                var $app$$12$$ = $JSCompiler_StaticMethods_getApplication$$(this, $internalId$$1$$);
                $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$USER_ROLLAPP_COMPLETE$$, void 0, null, new $viewbix$sdk$track$TrackingData$$(null, $app$$12$$, null, null, new $viewbix$sdk$track$RollData$$($rollApp$$2$$[$viewbix$sdk$Layout$AppConfigurationName$ROLL_TYPE$$], $rollApp$$2$$[$viewbix$sdk$Layout$AppConfigurationName$ALLOW_SKIP$$], "complete")));
                $JSCompiler_StaticMethods_deselectContainerItems$$(this, $goog$object$get$$(this.$agents$, $app$$12$$[$viewbix$sdk$Layout$ConfigurationsPropertyName$ID$$]).$container$);
                $JSCompiler_StaticMethods_attemptSelectRollApp$$(this);
            }, $JSCompiler_StaticMethods_selectRollApp$self$$)));
            document.body.setAttribute("data-vbx-roll-prompt", $prompt$$1$$);
            $goog$dom$isElement$$($agent$$8_componentClass$$.$container$.$rollPromptElement$) && $agent$$8_componentClass$$.$container$.$rollPromptElement$.setAttribute("data-vbx-roll-prompt", $prompt$$1$$);
            $JSCompiler_StaticMethods_isCompleteDispatcher$$($JSCompiler_StaticMethods_selectRollApp$self$$, $rollApp$$2$$) && ($JSCompiler_StaticMethods_selectRollApp$self$$.$addStateClasses$($viewbix$sdk$Layout$BodyClass$SHOW_ROLL_PROMPT$$), $goog$isFunction$$($agent$$8_componentClass$$.$container$.$rollPromptFunction$) && $agent$$8_componentClass$$.$container$.$rollPromptFunction$());
        }
    }

    function $JSCompiler_StaticMethods_attemptSelectRollApp$$($JSCompiler_StaticMethods_attemptSelectRollApp$self$$, $opt_type$$13$$) {
        console.log('attemptSelectRollApp');
        if (null != $JSCompiler_StaticMethods_attemptSelectRollApp$self$$.$videoPlayer$) {
            var $rollApp$$3$$;
            $rollApp$$3$$ = $opt_type$$13$$ == $viewbix$sdk$Layout$RollAppType$POST_ROLL$$ ? $JSCompiler_StaticMethods_getNextPostRollApp$$($JSCompiler_StaticMethods_attemptSelectRollApp$self$$) : $JSCompiler_StaticMethods_getNextRollApp$$($JSCompiler_StaticMethods_attemptSelectRollApp$self$$);
            if (null === $rollApp$$3$$ || $goog$isNull$$($JSCompiler_StaticMethods_getApplication$$($JSCompiler_StaticMethods_attemptSelectRollApp$self$$, $rollApp$$3$$[$viewbix$sdk$Layout$AppConfigurationName$PLAYER_APP_INTERNAL_ID$$]))) {
                if (null !== $JSCompiler_StaticMethods_attemptSelectRollApp$self$$.$currentRollApp_$) {
                    $goog$dom$classlist$contains$$(document.body, $viewbix$sdk$Layout$BodyClass$SHOW_ROLL_PROMPT$$) && $JSCompiler_StaticMethods_attemptSelectRollApp$self$$.$removeStateClasses$($viewbix$sdk$Layout$BodyClass$SHOW_ROLL_PROMPT$$);
                    var $app$$13$$ = $JSCompiler_StaticMethods_getApplication$$($JSCompiler_StaticMethods_attemptSelectRollApp$self$$, $JSCompiler_StaticMethods_attemptSelectRollApp$self$$.$currentRollApp_$[$viewbix$sdk$Layout$AppConfigurationName$PLAYER_APP_INTERNAL_ID$$]);
                    $JSCompiler_StaticMethods_deselectContainerItems$$($JSCompiler_StaticMethods_attemptSelectRollApp$self$$, $goog$object$get$$($JSCompiler_StaticMethods_attemptSelectRollApp$self$$.$agents$, $app$$13$$[$viewbix$sdk$Layout$ConfigurationsPropertyName$ID$$]).$container$);
                    $goog$isFunction$$($JSCompiler_StaticMethods_attemptSelectRollApp$self$$.$appCloseCallback_$) && $JSCompiler_StaticMethods_attemptSelectRollApp$self$$.$appCloseCallback_$();
                }
                $JSCompiler_StaticMethods_attemptSelectRollApp$self$$.$currentRollApp_$ = null;
            } else {
                $JSCompiler_StaticMethods_attemptSelectRollApp$self$$.$removeStateClasses$($viewbix$sdk$Layout$BodyClass$SHOW_ROLL_PROMPT$$), $goog$userAgent$detectedIPhone_$$ ? $JSCompiler_StaticMethods_attemptSelectRollApp$self$$.$videoPlayer$.exitFullscreen($goog$bind$$(function () {
                    $JSCompiler_StaticMethods_selectRollApp$$(this, $rollApp$$3$$);
                }, $JSCompiler_StaticMethods_attemptSelectRollApp$self$$)) : ($JSCompiler_StaticMethods_isFullScreen$$() && $goog$dom$fullscreen$exitFullScreen$$(), $JSCompiler_StaticMethods_selectRollApp$$($JSCompiler_StaticMethods_attemptSelectRollApp$self$$, $rollApp$$3$$));
            }
        }
    }

    $JSCompiler_prototypeAlias$$.$onVideoPause$ = function $$JSCompiler_prototypeAlias$$$$onVideoPause$$() {
        $viewbix$sdk$Core$isState$$("video-ended") ? this.$removeStateClasses$("video-playing") : $JSCompiler_StaticMethods_removeAddStateClasses$$(0, "video-playing", "video-paused");
    };
    $JSCompiler_prototypeAlias$$.$onVideoPlaying$ = function $$JSCompiler_prototypeAlias$$$$onVideoPlaying$$() {
        console.log('onVideoPlaying');
        var $isVideoEnded_video$$inline_778$$ = $goog$dom$classlist$contains$$(document.body, "video-ended");
        $JSCompiler_StaticMethods_removeAddStateClasses$$(0, ["video-paused", "video-ended"], "video-playing");
        this.$recentStartSeconds$ = NaN;
        this.$vStartUniqueTracked_$ ? $isVideoEnded_video$$inline_778$$ && $viewbix$sdk$track$Tracker$track$$("USER_CLICK_REPLAY_IN_END_DIALOG") : (this.$vStartUniqueTracked_$ = !0, $viewbix$sdk$track$Tracker$$.$getInstance$().$tracked0$ || ($viewbix$sdk$track$Tracker$$.$getInstance$().$tracked0$ = !0, $isVideoEnded_video$$inline_778$$ = $viewbix$sdk$track$Tracker$$.$getInstance$().$videoPlayer$, $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$VSTART_UNIQUE$$, "", {$videoUrl$: $isVideoEnded_video$$inline_778$$.currentSrc()})));
        $JSCompiler_StaticMethods_attemptSelectRollApp$$(this);
    };
    function $JSCompiler_StaticMethods_showIosFixOverlay$$($JSCompiler_StaticMethods_showIosFixOverlay$self$$) {
        $goog$userAgent$detectedIPhone_$$ && ($JSCompiler_StaticMethods_showIosFixOverlay$self$$.$iosFixOverlay_$.visibility = "visible", $goog$style$setStyle$$($JSCompiler_StaticMethods_showIosFixOverlay$self$$.$videoPlayer$.$techElement$().parentElement, {
            visibility: "hidden",
            position: "fixed",
            "float": "left",
            "-webkit-transform": "translateX(-2048px)"
        }), $JSCompiler_StaticMethods_showIosFixOverlay$self$$.$iosFixOverlayShown_$ = !0);
    }

    $JSCompiler_prototypeAlias$$.$onVideoFullscreenChange$ = function $$JSCompiler_prototypeAlias$$$$onVideoFullscreenChange$$() {
    };
    $JSCompiler_prototypeAlias$$.$onVideoTimeUpdate$ = function $$JSCompiler_prototypeAlias$$$$onVideoTimeUpdate$$() {
        this.$recentStartSeconds$ = NaN;
        $JSCompiler_StaticMethods_calculateShowHide$$(this, $JSCompiler_StaticMethods_getCurrentTime$$(this));
        this.$videoPlayer$.paused() || $JSCompiler_StaticMethods_attemptSelectRollApp$$(this);
    };
    $JSCompiler_prototypeAlias$$.$onVideoSeeked$ = function $$JSCompiler_prototypeAlias$$$$onVideoSeeked$$() {
    };
    $JSCompiler_prototypeAlias$$.$onVideoSeeking$ = function $$JSCompiler_prototypeAlias$$$$onVideoSeeking$$() {
    };
    function $viewbix$sdk$Layout$pauseVideo$$() {
        $viewbix$sdk$Layout$getLayoutInstance$$().$videoPlayer$ && $viewbix$sdk$Layout$getLayoutInstance$$().$videoPlayer$.pause();
    }

    $JSCompiler_prototypeAlias$$.$onClickCloseButton$ = function $$JSCompiler_prototypeAlias$$$$onClickCloseButton$$($container$$46_event$$5$$) {
        $container$$46_event$$5$$ = $JSCompiler_StaticMethods_getContainerByElement$$(this, $container$$46_event$$5$$.currentTarget.parentNode);
        var $closedPostRoll$$ = !1;
        null !== this.$currentRollApp_$ && this.$currentRollApp_$[$viewbix$sdk$Layout$AppConfigurationName$ROLL_TYPE$$] == $viewbix$sdk$Layout$RollAppType$POST_ROLL$$ && this.$currentRollApp_$[$viewbix$sdk$Layout$AppConfigurationName$ALLOW_SKIP$$] && (this.$currentRollApp_$.$completed$ = !0, this.$videoWasPlaying_$ = !1, $closedPostRoll$$ = !0);
        null !== this.$currentRollApp_$ && this.$currentRollApp_$[$viewbix$sdk$Layout$AppConfigurationName$ALLOW_SKIP$$] && !$JSCompiler_StaticMethods_isCompleteDispatcher$$(this, this.$currentRollApp_$) && (this.$currentRollApp_$.$completed$ = !0);
        var $rollApp$$4$$ = $JSCompiler_StaticMethods_getNextRollApp$$(this), $showingRollPrompt$$ = !1;
        null === $rollApp$$4$$ || $rollApp$$4$$ != this.$currentRollApp_$ || $rollApp$$4$$.$completed$ ? (null != $container$$46_event$$5$$ && $JSCompiler_StaticMethods_deselectContainerItems$$(this, $container$$46_event$$5$$), null === $rollApp$$4$$ && !$closedPostRoll$$ && $JSCompiler_StaticMethods_attemptSelectRollApp$$(this)) : ($showingRollPrompt$$ = !0, $JSCompiler_StaticMethods_attemptSelectRollApp$$(this));
        $goog$isFunction$$(this.$appCloseCallback_$) && !$showingRollPrompt$$ && this.$appCloseCallback_$();
    };
    function $JSCompiler_StaticMethods_getContainerByElement$$($JSCompiler_StaticMethods_getContainerByElement$self$$, $element$$145$$) {
        return $goog$object$findValue$$($JSCompiler_StaticMethods_getContainerByElement$self$$.$containers_$, function ($container$$48$$) {
            return $container$$48$$.element == $element$$145$$;
        });
    }

    function $JSCompiler_StaticMethods_isInContainer$$($JSCompiler_StaticMethods_isInContainer$self$$, $element$$146$$) {
        var $containerElementId$$ = $JSCompiler_StaticMethods_isInContainer$self$$.$containerParams_$[$viewbix$sdk$Layout$ContainerParamNames$ID$$];
        return null != $goog$dom$getAncestor$$($element$$146$$, function ($node$$47$$) {
                return $node$$47$$.id == $containerElementId$$;
            });
    }

    function $JSCompiler_StaticMethods_isInMenu$$($JSCompiler_StaticMethods_isInMenu$self$$, $element$$147$$) {
        var $menuElementId$$ = $JSCompiler_StaticMethods_isInMenu$self$$.$menuParams_$[$viewbix$sdk$Layout$MenuParamName$ID$$];
        return null != $goog$dom$getAncestor$$($element$$147$$, function ($node$$48$$) {
                return $node$$48$$.id == $menuElementId$$;
            });
    }

    function $JSCompiler_StaticMethods_trackShareClick$$($JSCompiler_StaticMethods_trackShareClick$self_trackingData$$19$$, $data$$73$$, $element$$153$$, $id$$43_interactionData$$10$$) {
        var $menuObject$$ = $JSCompiler_StaticMethods_trackShareClick$self_trackingData$$19$$.$menus$[$JSCompiler_StaticMethods_trackShareClick$self_trackingData$$19$$.$menuParams_$[$viewbix$sdk$Layout$MenuParamName$ID$$]], $JSCompiler_temp_const$$34_atTop$$inline_1179$$, $atRight$$inline_1182_elementLocation$$inline_1177$$ = $element$$153$$.getBoundingClientRect(), $topLocation$$inline_1178$$ = document.body.getBoundingClientRect();
        $JSCompiler_temp_const$$34_atTop$$inline_1179$$ = $atRight$$inline_1182_elementLocation$$inline_1177$$.top <= $topLocation$$inline_1178$$.top + .05 * $topLocation$$inline_1178$$.height;
        var $JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$ = $atRight$$inline_1182_elementLocation$$inline_1177$$.bottom >= $topLocation$$inline_1178$$.bottom - .05 * $topLocation$$inline_1178$$.height, $atLeft$$inline_1181$$ = $atRight$$inline_1182_elementLocation$$inline_1177$$.left <= $topLocation$$inline_1178$$.left + .05 * $topLocation$$inline_1178$$.width, $atRight$$inline_1182_elementLocation$$inline_1177$$ = $atRight$$inline_1182_elementLocation$$inline_1177$$.right >=
            $topLocation$$inline_1178$$.right - .05 * $topLocation$$inline_1178$$.width;
        $JSCompiler_temp_const$$34_atTop$$inline_1179$$ = $JSCompiler_temp_const$$34_atTop$$inline_1179$$ && !$JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$ && $atLeft$$inline_1181$$ && !$atRight$$inline_1182_elementLocation$$inline_1177$$ ? "top left" : $JSCompiler_temp_const$$34_atTop$$inline_1179$$ && !$JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$ && !$atLeft$$inline_1181$$ &&
        $atRight$$inline_1182_elementLocation$$inline_1177$$ ? "top right" : !$JSCompiler_temp_const$$34_atTop$$inline_1179$$ && $JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$ && $atLeft$$inline_1181$$ && !$atRight$$inline_1182_elementLocation$$inline_1177$$ ? "bottom left" : !$JSCompiler_temp_const$$34_atTop$$inline_1179$$ && $JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$ && !$atLeft$$inline_1181$$ && $atRight$$inline_1182_elementLocation$$inline_1177$$ ? "bottom right" : $JSCompiler_temp_const$$34_atTop$$inline_1179$$ && !$JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$ && $atLeft$$inline_1181$$ && $atRight$$inline_1182_elementLocation$$inline_1177$$ || $JSCompiler_temp_const$$34_atTop$$inline_1179$$ && !$JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$ && !$atLeft$$inline_1181$$ && !$atRight$$inline_1182_elementLocation$$inline_1177$$ ? "top" : !$JSCompiler_temp_const$$34_atTop$$inline_1179$$ && $JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$ && $atLeft$$inline_1181$$ && $atRight$$inline_1182_elementLocation$$inline_1177$$ || !$JSCompiler_temp_const$$34_atTop$$inline_1179$$ && $JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$ && !$atLeft$$inline_1181$$ && !$atRight$$inline_1182_elementLocation$$inline_1177$$ ? "bottom" : $JSCompiler_temp_const$$34_atTop$$inline_1179$$ && $JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$ && $atLeft$$inline_1181$$ && !$atRight$$inline_1182_elementLocation$$inline_1177$$ || !$JSCompiler_temp_const$$34_atTop$$inline_1179$$ && !$JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$ &&
        $atLeft$$inline_1181$$ && !$atRight$$inline_1182_elementLocation$$inline_1177$$ ? "left" : $JSCompiler_temp_const$$34_atTop$$inline_1179$$ && $JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$ && !$atLeft$$inline_1181$$ && $atRight$$inline_1182_elementLocation$$inline_1177$$ || !$JSCompiler_temp_const$$34_atTop$$inline_1179$$ && !$JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$ && !$atLeft$$inline_1181$$ && $atRight$$inline_1182_elementLocation$$inline_1177$$ ? "right" : "center";
        a: {
            $JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$ = $goog$dom$getOwnerDocument$$($element$$153$$);
            if ($JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$.defaultView && $JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$.defaultView.getComputedStyle && ($JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$ = $JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$.defaultView.getComputedStyle($element$$153$$,
                    ":before")) && ($JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$ = $JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$.backgroundImage || $JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$.getPropertyValue("backgroundImage"))) {
                $JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$ = $JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$.replace("url(", "").replace(")", "");
                break a;
            }
            $JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$ = null;
        }
        $id$$43_interactionData$$10$$ = new $viewbix$sdk$track$InteractionData$$($id$$43_interactionData$$10$$, "button", $JSCompiler_temp_const$$34_atTop$$inline_1179$$, !1, null, $JSCompiler_inline_result$$35_atBottom$$inline_1180_backgroundImage$$inline_785_doc$$inline_783_styles$$inline_784$$, null, $JSCompiler_StaticMethods_isInContainer$$($JSCompiler_StaticMethods_trackShareClick$self_trackingData$$19$$, $element$$153$$) ? "app" : "player");
        $JSCompiler_StaticMethods_trackShareClick$self_trackingData$$19$$ = new $viewbix$sdk$track$TrackingData$$($id$$43_interactionData$$10$$, null, $JSCompiler_StaticMethods_isInMenu$$($JSCompiler_StaticMethods_trackShareClick$self_trackingData$$19$$, $element$$153$$) ? $menuObject$$ : null, null, null);
        $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$USER_CLICK_MENU_ITEM$$, $data$$73$$, null, $JSCompiler_StaticMethods_trackShareClick$self_trackingData$$19$$);
    }

    var $viewbix$sdk$Layout$ParamName$VIDEO_PLAYER$$ = "video",
        $viewbix$sdk$Layout$ParamName$MENU$$ = "menu",
        $viewbix$sdk$Layout$ParamName$CONTAINER$$ = "container",
        $viewbix$sdk$Layout$ParamName$READY$$ = "ready",
        $viewbix$sdk$Layout$VideoPlayerParamName$ID$$ = "id",
        $viewbix$sdk$Layout$VideoPlayerParamName$PLATFORM$$ = "platform",
        $viewbix$sdk$Layout$VideoPlayerParamName$CHANNEL$$ = "channel",
        $viewbix$sdk$Layout$MenuParamName$ID$$ = "id",
        $viewbix$sdk$Layout$MenuParamName$ADD_SHARE_IF_NO_VIDEO$$ = "addShareIfNoVideo",
        $viewbix$sdk$Layout$ContainerParamNames$ID$$ = "id",
        $viewbix$sdk$Layout$ContainerParamNames$CLOSE_BUTTON$$ = "closeButton",
        $viewbix$sdk$Layout$ContainerParamNames$ROLL_PROMPT$$ = "rollPrompt",
        $viewbix$sdk$Layout$ContainerParamNames$ROLL_PROMPT_FUNCTION$$ = "rollPromptFunction",
        $viewbix$sdk$Layout$ContainerParamNames$COMPLETE_ALLOW_SKIP_ROLL_APP$$ = "completeAllowSkipRollApp",
        $viewbix$sdk$Layout$ContainerParamNames$OVERLAYS_VIDEO$$ = "overlaysVideo",
        $viewbix$sdk$Layout$ContainerParamNames$APP_CLOSE_CALLBACK$$ = "appCloseCallback",
        $viewbix$sdk$Layout$ContainerParamNames$APP_SELECTED_CALLBACK$$ = "appSelectedCallback",
        $viewbix$sdk$Layout$ContainerParamNames$APP_IFRAME_CREATED_CALLBACK$$ = "appIframeCreatedCallback",
        $viewbix$sdk$Layout$VideoPlayerPlatform$VIDEOJS$$ = "videojs",
        $viewbix$sdk$Layout$VideoPlayerPlatform$EXTERNAL$$ = "external",
        $viewbix$sdk$Layout$VideoPlayerPlatform$$ = {
            $VIDEOJS$: $viewbix$sdk$Layout$VideoPlayerPlatform$VIDEOJS$$,
            $EXTERNAL$: $viewbix$sdk$Layout$VideoPlayerPlatform$EXTERNAL$$
        },
        $viewbix$sdk$Layout$ConfigurationsPropertyName$APPLICATIONS$$ = "applications",
        $viewbix$sdk$Layout$ConfigurationsPropertyName$ID$$ = "id",
        $viewbix$sdk$Layout$ConfigurationsPropertyName$CONTAINER_ID$$ = "containerId",
        $viewbix$sdk$Layout$ConfigurationsPropertyName$COMPONENT$$ = "component",
        $viewbix$sdk$Layout$ConfigurationsPropertyName$INTERNAL_ID$$ = "internalId",
        $viewbix$sdk$Layout$ConfigurationsPropertyName$PLAY_VIDEO_IN_APPS$$ = "playVideoInApps",
        $viewbix$sdk$Layout$ConfigurationsPropertyName$STANDARD_FONT$$ = "standardTextFormatFont",

        $viewbix$sdk$Layout$PlayerConfigurationName$BANNER_APPS$$ = "bannerApps",
        $viewbix$sdk$Layout$PlayerConfigurationName$CTA_APPS$$ = "ctaApps",
        $viewbix$sdk$Layout$PlayerConfigurationName$CTA_LINK$$ = "ctaLink",
        $viewbix$sdk$Layout$PlayerConfigurationName$CTA_TEXT$$ = "ctaText",
        $viewbix$sdk$Layout$PlayerConfigurationName$FB_CONVERSION_PIXEL$$ = "fbConversionPixel",
        $viewbix$sdk$Layout$PlayerConfigurationName$MEMBER_ID$$ = "memberId",
        $viewbix$sdk$Layout$PlayerConfigurationName$MID_ROLL_APPS$$ = "midRollApps",
        $viewbix$sdk$Layout$PlayerConfigurationName$PLAYER_ID$$ = "playerId",
        $viewbix$sdk$Layout$PlayerConfigurationName$POST_ROLL_APPS$$ = "postRollApps",
        $viewbix$sdk$Layout$PlayerConfigurationName$PRE_ROLL_APPS$$ = "preRollApps",
        $viewbix$sdk$Layout$PlayerConfigurationName$SESSION_ID$$ = "sessionId",
        $viewbix$sdk$Layout$PlayerConfigurationName$SHOW_FACEBOOK_BUTTON$$ = "showFacebookButton",
        $viewbix$sdk$Layout$PlayerConfigurationName$SHOW_HIDE_UI$$ = "showHideUi",
        $viewbix$sdk$Layout$PlayerConfigurationName$SHOW_SHARE_BUTTON$$ = "showShareButton",
        $viewbix$sdk$Layout$PlayerConfigurationName$SHOW_TWITTER_BUTTON$$ = "showTwitterButton",
        $viewbix$sdk$Layout$PlayerConfigurationName$TITLE$$ = "title",
        $viewbix$sdk$Layout$PlayerConfigurationName$VIDEO_URL$$ = "videoUrl",
        $viewbix$sdk$Layout$PlayerConfigurationName$VIDEO_POSTER$$ = "videoThumbnailUrl",
        $viewbix$sdk$Layout$PlayerConfigurationName$VIDEO_CLASS$$ = "videoClass",

        $viewbix$sdk$Layout$AppConfigurationName$START_TIME$$ = "startTime",
        $viewbix$sdk$Layout$AppConfigurationName$ALLOW_SKIP$$ = "allowSkip",
        $viewbix$sdk$Layout$AppConfigurationName$PROMPT$$ = "prompt",
        $viewbix$sdk$Layout$AppConfigurationName$PLAYER_APP_INTERNAL_ID$$ = "playerAppInternalId",
        $viewbix$sdk$Layout$AppConfigurationName$NAV_LINK$$ = "navLink",
        $viewbix$sdk$Layout$AppConfigurationName$URL$$ = "url",
        $viewbix$sdk$Layout$AppConfigurationName$ICON$$ = "icon",
        $viewbix$sdk$Layout$AppConfigurationName$SHOW_IN_MENU$$ = "showInMenu",
        $viewbix$sdk$Layout$AppConfigurationName$ROLL_TYPE$$ = "rollType",

        $viewbix$sdk$Layout$BodyClass$GATED$$ = "gated",
        $viewbix$sdk$Layout$BodyClass$SHOW_ROLL_PROMPT$$ = "show-roll-prompt",
        $viewbix$sdk$Layout$ContainerClass$ITEM_SELECTED$$ = "item-selected",
        $viewbix$sdk$Layout$RollAppType$PRE_ROLL$$ = "preRoll",
        $viewbix$sdk$Layout$RollAppType$MID_ROLL$$ = "midRoll",
        $viewbix$sdk$Layout$RollAppType$POST_ROLL$$ = "postRoll",
        $viewbix$sdk$Layout$QueryParamNames$AUTO_PLAY$$ = "ap",
        $viewbix$sdk$Layout$BLANK_VIDEO_URL$$ = "i9DmNS72SGI",
        $viewbix$sdk$Layout$getLayoutInstance$$ = $viewbix$sdk$Layout$$.$getInstance$,
        $viewbix$sdk$Core$PAUSE_ALL_MEDIA_FUNCTION$$ = $viewbix$sdk$Layout$pauseVideo$$;
    $goog$exportPath_$$("loadPlayer", function ($id$$31$$) {
        $viewbix$sdk$Layout$getLayoutInstance$$().$videoPlayer$.pause();
        null != $id$$31$$ && location.replace("/frame/" + $id$$31$$ + location.search);
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.init", function ($params$$1$$) {
        $viewbix$sdk$Layout$getLayoutInstance$$().$init$($params$$1$$);
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.appendContainerItem", $viewbix$sdk$Layout$appendContainerItem$$, void 0);
    $goog$exportPath_$$("VBX.Layout.selectContainerItem", function ($containerElement$$1$$, $itemElement$$1$$) {
        //console.log("VBX.Layout.selectContainerItem");
        //console.log($containerElement$$1$$);
        //console.log($itemElement$$1$$);
        var $container$$41$$ = $JSCompiler_StaticMethods_getContainerByElement$$(
            $viewbix$sdk$Layout$getLayoutInstance$$(),
            $containerElement$$1$$
        );
        //console.log($container$$41$$);
        if (null != $container$$41$$) {
            $JSCompiler_StaticMethods_selectContainerItem$$(
                $viewbix$sdk$Layout$getLayoutInstance$$(),
                $container$$41$$,
                $itemElement$$1$$);
        } else {
            throw "Invalid containerElement or itemElement";
        }
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.selectApp", function ($app$$4$$) {
        //console.log('selectApp');
        //console.log($app$$4$$);
        $JSCompiler_StaticMethods_selectApp$$($viewbix$sdk$Layout$getLayoutInstance$$(), $app$$4$$);
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.clickCtaButton", function () {
        var $JSCompiler_StaticMethods_selectCtaApp$self$$inline_1184_JSCompiler_inline_result$$979_ctaLink$$;
        $JSCompiler_StaticMethods_selectCtaApp$self$$inline_1184_JSCompiler_inline_result$$979_ctaLink$$ = $viewbix$sdk$Layout$getLayoutInstance$$();
        if ($JSCompiler_StaticMethods_hasValidCtaApp$$($JSCompiler_StaticMethods_selectCtaApp$self$$inline_1184_JSCompiler_inline_result$$979_ctaLink$$)) {
            var $ctaAppId$$inline_1185_interactionData$$6$$ = $JSCompiler_StaticMethods_selectCtaApp$self$$inline_1184_JSCompiler_inline_result$$979_ctaLink$$.$ctaApps_$[0][$viewbix$sdk$Layout$AppConfigurationName$PLAYER_APP_INTERNAL_ID$$], $ctaAppComponentName$$inline_1186$$ = $JSCompiler_StaticMethods_getApplication$$($JSCompiler_StaticMethods_selectCtaApp$self$$inline_1184_JSCompiler_inline_result$$979_ctaLink$$, $ctaAppId$$inline_1185_interactionData$$6$$)[$viewbix$sdk$Layout$ConfigurationsPropertyName$COMPONENT$$],
                $applicationObject$$inline_1187$$ = $JSCompiler_StaticMethods_getApplication$$($JSCompiler_StaticMethods_selectCtaApp$self$$inline_1184_JSCompiler_inline_result$$979_ctaLink$$, $ctaAppId$$inline_1185_interactionData$$6$$), $interactionData$$inline_1188$$ = new $viewbix$sdk$track$InteractionData$$("ctabutton", "button", "top right", !0, null, null, $viewbix$sdk$Layout$getPlayerConfig$$("ctaText"), "player");
            $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$USER_CLICK_CALL_TO_ACTION$$, $ctaAppComponentName$$inline_1186$$, null, new $viewbix$sdk$track$TrackingData$$($interactionData$$inline_1188$$, $applicationObject$$inline_1187$$, null, null, null));
            $JSCompiler_StaticMethods_selectApp$$($JSCompiler_StaticMethods_selectCtaApp$self$$inline_1184_JSCompiler_inline_result$$979_ctaLink$$, $ctaAppId$$inline_1185_interactionData$$6$$);
            $JSCompiler_StaticMethods_selectCtaApp$self$$inline_1184_JSCompiler_inline_result$$979_ctaLink$$ = !0;
        } else {
            $JSCompiler_StaticMethods_selectCtaApp$self$$inline_1184_JSCompiler_inline_result$$979_ctaLink$$ = !1;
        }
        !$JSCompiler_StaticMethods_selectCtaApp$self$$inline_1184_JSCompiler_inline_result$$979_ctaLink$$ && ($JSCompiler_StaticMethods_selectCtaApp$self$$inline_1184_JSCompiler_inline_result$$979_ctaLink$$ = $viewbix$sdk$Layout$getPlayerConfig$$("ctaLink")) && ($ctaAppId$$inline_1185_interactionData$$6$$ = new $viewbix$sdk$track$InteractionData$$("ctabutton", "button", "top right", !1, $JSCompiler_StaticMethods_selectCtaApp$self$$inline_1184_JSCompiler_inline_result$$979_ctaLink$$, null, $viewbix$sdk$Layout$getPlayerConfig$$("ctaText"),
            "player"), $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$USER_CLICK_CALL_TO_ACTION$$, "", null, new $viewbix$sdk$track$TrackingData$$($ctaAppId$$inline_1185_interactionData$$6$$, null, null, null, null)), window.open($JSCompiler_StaticMethods_selectCtaApp$self$$inline_1184_JSCompiler_inline_result$$979_ctaLink$$, "_blank"));
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.clickBanner", function () {
        var $JSCompiler_StaticMethods_selectBannerApp$self$$inline_1190_JSCompiler_inline_result$$996_bannerLink$$ = null;
        $JSCompiler_StaticMethods_selectBannerApp$self$$inline_1190_JSCompiler_inline_result$$996_bannerLink$$ = $viewbix$sdk$Layout$getLayoutInstance$$();
        if ($JSCompiler_StaticMethods_hasValidBannerApp$$($JSCompiler_StaticMethods_selectBannerApp$self$$inline_1190_JSCompiler_inline_result$$996_bannerLink$$)) {
            var $bannerAppId$$inline_1191$$ = $JSCompiler_StaticMethods_selectBannerApp$self$$inline_1190_JSCompiler_inline_result$$996_bannerLink$$.$bannerApps_$[0][$viewbix$sdk$Layout$AppConfigurationName$PLAYER_APP_INTERNAL_ID$$], $applicationObject$$inline_1192$$ = $JSCompiler_StaticMethods_getApplication$$($JSCompiler_StaticMethods_selectBannerApp$self$$inline_1190_JSCompiler_inline_result$$996_bannerLink$$, $bannerAppId$$inline_1191$$), $bannerAppComponentName$$inline_1193$$ = $JSCompiler_StaticMethods_getApplication$$($JSCompiler_StaticMethods_selectBannerApp$self$$inline_1190_JSCompiler_inline_result$$996_bannerLink$$,
                $bannerAppId$$inline_1191$$)[$viewbix$sdk$Layout$ConfigurationsPropertyName$COMPONENT$$];
            $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$USER_CLICK_LOGO$$, "BOTTOM_LOGO|" + $bannerAppComponentName$$inline_1193$$, null, new $viewbix$sdk$track$TrackingData$$(new $viewbix$sdk$track$InteractionData$$("banner2", "button", "bottom", !0, null, null, null, "player"), $applicationObject$$inline_1192$$, null, null, null));
            $JSCompiler_StaticMethods_selectApp$$($JSCompiler_StaticMethods_selectBannerApp$self$$inline_1190_JSCompiler_inline_result$$996_bannerLink$$, $bannerAppId$$inline_1191$$);
            $JSCompiler_StaticMethods_selectBannerApp$self$$inline_1190_JSCompiler_inline_result$$996_bannerLink$$ = !0;
        } else {
            $JSCompiler_StaticMethods_selectBannerApp$self$$inline_1190_JSCompiler_inline_result$$996_bannerLink$$ = !1;
        }
        $JSCompiler_StaticMethods_selectBannerApp$self$$inline_1190_JSCompiler_inline_result$$996_bannerLink$$ || ($JSCompiler_StaticMethods_selectBannerApp$self$$inline_1190_JSCompiler_inline_result$$996_bannerLink$$ = $viewbix$sdk$Layout$getPlayerConfig$$("bottomLogoLink"), $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$USER_CLICK_LOGO$$, "BOTTOM_LOGO", null, new $viewbix$sdk$track$TrackingData$$(new $viewbix$sdk$track$InteractionData$$("banner2", "button", "bottom", !1, $JSCompiler_StaticMethods_selectBannerApp$self$$inline_1190_JSCompiler_inline_result$$996_bannerLink$$,
            null, null, "player"), null, null, null, null)), $JSCompiler_StaticMethods_selectBannerApp$self$$inline_1190_JSCompiler_inline_result$$996_bannerLink$$ && window.open($JSCompiler_StaticMethods_selectBannerApp$self$$inline_1190_JSCompiler_inline_result$$996_bannerLink$$, "_blank"));
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.clickCustomLogo", function () {
        var $href$$4_trackingData$$11$$ = $viewbix$sdk$Layout$getPlayerConfig$$("customLogoLink");
        $goog$string$isEmptySafe$$($href$$4_trackingData$$11$$) || window.open($href$$4_trackingData$$11$$);
        $href$$4_trackingData$$11$$ = $viewbix$sdk$track$TrackingData$CreateTrackingData$$($viewbix$sdk$track$TrackEventType$USER_CLICK_LOGO$$, "CUSTOM_LOGO", $href$$4_trackingData$$11$$);
        $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$USER_CLICK_LOGO$$, "CUSTOM_LOGO", null, $href$$4_trackingData$$11$$);
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.clickSliderImage", function () {
        var $trackingData$$10$$ = $viewbix$sdk$track$TrackingData$CreateTrackingData$$($viewbix$sdk$track$TrackEventType$USER_CLICK_SLIDER_IMAGE$$, null, null);
        $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$USER_CLICK_SLIDER_IMAGE$$, null, null, $trackingData$$10$$);
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.VideoPlayerPlatform", $viewbix$sdk$Layout$VideoPlayerPlatform$$, void 0);
    $goog$exportPath_$$("VBX.Layout.VideoPlayerPlatform.VIDEOJS", $viewbix$sdk$Layout$VideoPlayerPlatform$VIDEOJS$$, void 0);
    $goog$exportPath_$$("VBX.Layout.onState", function ($state$$5$$, $callback$$116$$) {
        $state$$5$$ in $viewbix$sdk$Core$stateCallbacks_$$ ? $goog$array$insert$$($goog$object$get$$($viewbix$sdk$Core$stateCallbacks_$$, $state$$5$$), $callback$$116$$) : $goog$object$add$$($viewbix$sdk$Core$stateCallbacks_$$, $state$$5$$, [$callback$$116$$]);
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.offState", function ($state$$6$$, $opt_callback$$15$$) {
        $state$$6$$ in $viewbix$sdk$Core$stateCallbacks_$$ && ($goog$isFunction$$($opt_callback$$15$$) ? $goog$array$remove$$($goog$object$get$$($viewbix$sdk$Core$stateCallbacks_$$, $state$$6$$), $opt_callback$$15$$) : $state$$6$$ in $viewbix$sdk$Core$stateCallbacks_$$ && delete $viewbix$sdk$Core$stateCallbacks_$$[$state$$6$$]);
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.isState", $viewbix$sdk$Core$isState$$, void 0);
    $goog$exportPath_$$("VBX.Layout.shareFacebook", function ($element$$154_facebookSharePageUrl$$inline_848$$) {
        var $JSCompiler_StaticMethods_shareFacebook$self$$inline_846$$ = $viewbix$sdk$Layout$getLayoutInstance$$();
        $JSCompiler_StaticMethods_trackShareClick$$($JSCompiler_StaticMethods_shareFacebook$self$$inline_846$$, "Share this", $element$$154_facebookSharePageUrl$$inline_848$$, "sharefacebook");
        $element$$154_facebookSharePageUrl$$inline_848$$ = $JSCompiler_StaticMethods_shareFacebook$self$$inline_846$$.$playerConfig$.facebookSharePageUrl;
        var $url$$inline_849$$ = "http://www.facebook.com/sharer.php?u=", $url$$inline_849$$ = $goog$string$isEmptySafe$$($element$$154_facebookSharePageUrl$$inline_848$$) ? $url$$inline_849$$ + encodeURIComponent($JSCompiler_StaticMethods_getPreviewUrl$$($JSCompiler_StaticMethods_shareFacebook$self$$inline_846$$)) : $url$$inline_849$$ + encodeURIComponent($element$$154_facebookSharePageUrl$$inline_848$$);
        window.open($url$$inline_849$$, "_blank");
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.shareTwitter", function ($element$$156_shortUrl$$inline_858_tinyUrl$$inline_857$$) {
        var $JSCompiler_StaticMethods_shareTwitter$self$$inline_855_url$$inline_859$$ = $viewbix$sdk$Layout$getLayoutInstance$$();
        $JSCompiler_StaticMethods_trackShareClick$$($JSCompiler_StaticMethods_shareTwitter$self$$inline_855_url$$inline_859$$, "Tweet this", $element$$156_shortUrl$$inline_858_tinyUrl$$inline_857$$, "sharetwitter");
        $element$$156_shortUrl$$inline_858_tinyUrl$$inline_857$$ = $JSCompiler_StaticMethods_shareTwitter$self$$inline_855_url$$inline_859$$.$playerConfig$.tinyUrl;
        $element$$156_shortUrl$$inline_858_tinyUrl$$inline_857$$ = $goog$string$isEmptySafe$$("") ? $goog$string$isEmptySafe$$($element$$156_shortUrl$$inline_858_tinyUrl$$inline_857$$) ? $JSCompiler_StaticMethods_getPreviewUrl$$($JSCompiler_StaticMethods_shareTwitter$self$$inline_855_url$$inline_859$$) : $element$$156_shortUrl$$inline_858_tinyUrl$$inline_857$$ : "";
        var $defaultTwitterMessage$$inline_860$$ = $JSCompiler_StaticMethods_shareTwitter$self$$inline_855_url$$inline_859$$.$playerConfig$.defaultTwitterMessage;
        $goog$string$isEmptySafe$$($defaultTwitterMessage$$inline_860$$) && ($defaultTwitterMessage$$inline_860$$ = "Check out this video for {title}: {link}");
        $JSCompiler_StaticMethods_shareTwitter$self$$inline_855_url$$inline_859$$ = "http://twitter.com/home?status=" + encodeURIComponent($defaultTwitterMessage$$inline_860$$.replace("{title}", $JSCompiler_StaticMethods_shareTwitter$self$$inline_855_url$$inline_859$$.$playerConfig$[$viewbix$sdk$Layout$PlayerConfigurationName$TITLE$$].substr(0, 70)).replace("{link}", $element$$156_shortUrl$$inline_858_tinyUrl$$inline_857$$));
        window.open($JSCompiler_StaticMethods_shareTwitter$self$$inline_855_url$$inline_859$$, "_blank");
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.trackShare", function ($element$$143$$) {
        var $JSCompiler_StaticMethods_trackShare$self$$inline_866$$ = $viewbix$sdk$Layout$getLayoutInstance$$();
        $JSCompiler_StaticMethods_trackShareClick$$($JSCompiler_StaticMethods_trackShare$self$$inline_866$$, "Share", $element$$143$$, "share");
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.getPreviewUrl", function () {
        return $JSCompiler_StaticMethods_getPreviewUrl$$($viewbix$sdk$Layout$getLayoutInstance$$());
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.getEmbed", function () {
        var $JSCompiler_StaticMethods_getEmbed$self$$inline_877_id$$inline_1199$$ = $viewbix$sdk$Layout$getLayoutInstance$$(), $opt_queryParams$$inline_1202_size$$inline_878$$ = $goog$style$evaluateWithTemporaryDisplay_$$(document.body), $iframe$$inline_1205_url$$inline_1198$$ = $viewbix$sdk$helper$UriHelper$getProtocolAndDomain$$(), $JSCompiler_StaticMethods_getEmbed$self$$inline_877_id$$inline_1199$$ = $JSCompiler_StaticMethods_getEmbed$self$$inline_877_id$$inline_1199$$.$playerConfig$[$viewbix$sdk$Layout$PlayerConfigurationName$PLAYER_ID$$],
            $w$$inline_1200$$ = $opt_queryParams$$inline_1202_size$$inline_878$$.width, $h$$inline_1201$$ = $opt_queryParams$$inline_1202_size$$inline_878$$.height, $opt_queryParams$$inline_1202_size$$inline_878$$ = $viewbix$sdk$helper$UriHelper$getParameters$$(location.href), $l$$inline_1204$$ = $iframe$$inline_1205_url$$inline_1198$$.length - 1;
        0 <= $l$$inline_1204$$ && $iframe$$inline_1205_url$$inline_1198$$.indexOf("/", $l$$inline_1204$$) == $l$$inline_1204$$ || ($iframe$$inline_1205_url$$inline_1198$$ += "/");
        $iframe$$inline_1205_url$$inline_1198$$ = '<iframe width="' + $w$$inline_1200$$ + '" height="' + $h$$inline_1201$$ + '" src="' + $iframe$$inline_1205_url$$inline_1198$$ + "frame/" + $JSCompiler_StaticMethods_getEmbed$self$$inline_877_id$$inline_1199$$ + "?w=" + $w$$inline_1200$$ + "&h=" + $h$$inline_1201$$;
        null != $opt_queryParams$$inline_1202_size$$inline_878$$ && ($iframe$$inline_1205_url$$inline_1198$$ += "&" + $viewbix$sdk$helper$UriHelper$objectToEncodedString$$($opt_queryParams$$inline_1202_size$$inline_878$$));
        return $iframe$$inline_1205_url$$inline_1198$$ + '" frameborder="0" scrolling="no" allowTransparency="true" ap="false"></iframe>';
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.getPlayerConfig", $viewbix$sdk$Layout$getPlayerConfig$$, void 0);
    $goog$exportPath_$$("VBX.Layout.setMenuMaxItems", function ($id$$34$$, $value$$190$$) {
        var $JSCompiler_StaticMethods_setMenuMaxItems$self$$inline_888_menu$$inline_891$$ = $viewbix$sdk$Layout$getLayoutInstance$$(), $JSCompiler_StaticMethods_setMenuMaxItems$self$$inline_888_menu$$inline_891$$ = $goog$object$get$$($JSCompiler_StaticMethods_setMenuMaxItems$self$$inline_888_menu$$inline_891$$.$menus$, $id$$34$$);
        null != $JSCompiler_StaticMethods_setMenuMaxItems$self$$inline_888_menu$$inline_891$$ && ($JSCompiler_StaticMethods_setMenuMaxItems$self$$inline_888_menu$$inline_891$$.$maxItems$ = $value$$190$$, $JSCompiler_StaticMethods_buildDom$$($JSCompiler_StaticMethods_setMenuMaxItems$self$$inline_888_menu$$inline_891$$));
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.setMenuTop", function ($id$$36$$, $value$$192$$) {
        var $JSCompiler_StaticMethods_setMenuTop$self$$inline_897_menu$$inline_900$$ = $viewbix$sdk$Layout$getLayoutInstance$$(), $JSCompiler_StaticMethods_setMenuTop$self$$inline_897_menu$$inline_900$$ = $goog$object$get$$($JSCompiler_StaticMethods_setMenuTop$self$$inline_897_menu$$inline_900$$.$menus$, $id$$36$$);
        null != $JSCompiler_StaticMethods_setMenuTop$self$$inline_897_menu$$inline_900$$ && ($JSCompiler_StaticMethods_setMenuTop$self$$inline_897_menu$$inline_900$$.element.style.top = $value$$192$$);
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.getMenuWidestItemWidth", function ($JSCompiler_temp$$6_id$$38_menu$$5$$) {
        $JSCompiler_temp$$6_id$$38_menu$$5$$ = $JSCompiler_StaticMethods_getMenu$$($viewbix$sdk$Layout$getLayoutInstance$$(), $JSCompiler_temp$$6_id$$38_menu$$5$$);
        if (null != $JSCompiler_temp$$6_id$$38_menu$$5$$) {
            var $maxWidth$$inline_907$$ = 0;
            if (0 < $JSCompiler_temp$$6_id$$38_menu$$5$$.$apps$.length && $goog$dom$isElement$$($JSCompiler_temp$$6_id$$38_menu$$5$$.element)) {
                var $originalDisplay$$inline_908$$ = $JSCompiler_temp$$6_id$$38_menu$$5$$.element.style.display;
                $JSCompiler_temp$$6_id$$38_menu$$5$$.element.style.display = "inline-block";
                var $node$$inline_909$$ = $JSCompiler_temp$$6_id$$38_menu$$5$$.element.querySelector("li");
                if (null != $node$$inline_909$$) {
                    var $clone$$inline_910$$ = $node$$inline_909$$.cloneNode(!0), $i$$inline_912_style$$inline_911$$ = $clone$$inline_910$$.style;
                    $i$$inline_912_style$$inline_911$$.visibility = "hidden";
                    $i$$inline_912_style$$inline_911$$.position = "absolute";
                    $i$$inline_912_style$$inline_911$$.display = "inline-block";
                    $i$$inline_912_style$$inline_911$$.width = "auto";
                    $i$$inline_912_style$$inline_911$$.height = "auto";
                    $node$$inline_909$$.parentElement.insertBefore($clone$$inline_910$$, $node$$inline_909$$.parentElement.firstChild);
                    for ($i$$inline_912_style$$inline_911$$ = 0; $i$$inline_912_style$$inline_911$$ < $JSCompiler_temp$$6_id$$38_menu$$5$$.$apps$.length; $i$$inline_912_style$$inline_911$$++) {
                        $clone$$inline_910$$.querySelector("img").src = $JSCompiler_temp$$6_id$$38_menu$$5$$.$apps$[$i$$inline_912_style$$inline_911$$].icon, $clone$$inline_910$$.querySelector(".vbx-menu-label").innerHTML = $JSCompiler_temp$$6_id$$38_menu$$5$$.$apps$[$i$$inline_912_style$$inline_911$$].label, $maxWidth$$inline_907$$ = Math.max($clone$$inline_910$$.offsetWidth, $maxWidth$$inline_907$$);
                    }
                    $node$$inline_909$$.parentElement.removeChild($clone$$inline_910$$);
                }
                $JSCompiler_temp$$6_id$$38_menu$$5$$.element.style.display = $originalDisplay$$inline_908$$;
            }
            $JSCompiler_temp$$6_id$$38_menu$$5$$ = $maxWidth$$inline_907$$;
        } else {
            $JSCompiler_temp$$6_id$$38_menu$$5$$ = 0;
        }
        return $JSCompiler_temp$$6_id$$38_menu$$5$$;
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.getMenuNumApps", function ($id$$39_menu$$6$$) {
        $id$$39_menu$$6$$ = $JSCompiler_StaticMethods_getMenu$$($viewbix$sdk$Layout$getLayoutInstance$$(), $id$$39_menu$$6$$);
        return null != $id$$39_menu$$6$$ ? $id$$39_menu$$6$$.$apps$.length : 0;
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.getMenuAppIdByIndex", function ($id$$40$$, $index$$81$$) {
        var $menu$$7$$ = $JSCompiler_StaticMethods_getMenu$$($viewbix$sdk$Layout$getLayoutInstance$$(), $id$$40$$);
        return null != $menu$$7$$ ? $menu$$7$$.$apps$[$index$$81$$].id : null;
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.toggleFullScreen", function () {
        $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$USER_CLICK_MENU_ITEM$$, "Fullscreen", null, new $viewbix$sdk$track$TrackingData$$(new $viewbix$sdk$track$InteractionData$$("fullscreen", "button", "bottom right", !1, null, null, null, "player"), null, null, null, null));
        if ($JSCompiler_StaticMethods_isFullScreen$$()) {
            $goog$dom$fullscreen$exitFullScreen$$();
        } else {
            var $element$$inline_926$$ = document.documentElement;
            $element$$inline_926$$.webkitRequestFullscreen ? $element$$inline_926$$.webkitRequestFullscreen() : $element$$inline_926$$.mozRequestFullScreen ? $element$$inline_926$$.mozRequestFullScreen() : $element$$inline_926$$.msRequestFullscreen ? $element$$inline_926$$.msRequestFullscreen() : $element$$inline_926$$.requestFullscreen && $element$$inline_926$$.requestFullscreen();
        }
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.setRollAppCompleted", function () {
        var $JSCompiler_StaticMethods_setCurrentRollAppCompleted$self$$inline_932$$ = $viewbix$sdk$Layout$getLayoutInstance$$();
        if (null !== $JSCompiler_StaticMethods_setCurrentRollAppCompleted$self$$inline_932$$.$currentRollApp_$) {
            var $applicationObject$$inline_933$$ = $JSCompiler_StaticMethods_getApplication$$($JSCompiler_StaticMethods_setCurrentRollAppCompleted$self$$inline_932$$,
                $JSCompiler_StaticMethods_setCurrentRollAppCompleted$self$$inline_932$$.$currentRollApp_$[$viewbix$sdk$Layout$AppConfigurationName$PLAYER_APP_INTERNAL_ID$$]);
            $viewbix$sdk$track$Tracker$track$$($viewbix$sdk$track$TrackEventType$USER_APP_SKIP$$, void 0, null, new $viewbix$sdk$track$TrackingData$$(null, $applicationObject$$inline_933$$, null, null, new $viewbix$sdk$track$RollData$$($JSCompiler_StaticMethods_setCurrentRollAppCompleted$self$$inline_932$$.$currentRollApp_$[$viewbix$sdk$Layout$AppConfigurationName$ROLL_TYPE$$],
                $JSCompiler_StaticMethods_setCurrentRollAppCompleted$self$$inline_932$$.$currentRollApp_$[$viewbix$sdk$Layout$AppConfigurationName$ALLOW_SKIP$$],
                "skip")));
            $JSCompiler_StaticMethods_setCurrentRollAppCompleted$self$$inline_932$$.$currentRollApp_$.$completed$ = !0;
            $JSCompiler_StaticMethods_attemptSelectRollApp$$($JSCompiler_StaticMethods_setCurrentRollAppCompleted$self$$inline_932$$);
            $goog$isFunction$$($JSCompiler_StaticMethods_setCurrentRollAppCompleted$self$$inline_932$$.$appCloseCallback_$)
            && null === $JSCompiler_StaticMethods_setCurrentRollAppCompleted$self$$inline_932$$.$currentRollApp_$ &&
            $JSCompiler_StaticMethods_setCurrentRollAppCompleted$self$$inline_932$$.$appCloseCallback_$();
        }
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.removeAddStateClasses", function ($remove$$1$$, $add$$4$$) {
        $JSCompiler_StaticMethods_removeAddStateClasses$$($viewbix$sdk$Layout$getLayoutInstance$$(), $remove$$1$$, $add$$4$$);
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.removeStateClasses", function ($var_args$$99$$) {
        $viewbix$sdk$Layout$getLayoutInstance$$().$removeStateClasses$($var_args$$99$$);
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.addStateClasses", function ($var_args$$100$$) {
        $viewbix$sdk$Layout$getLayoutInstance$$().$addStateClasses$($var_args$$100$$);
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.config", $viewbix$sdk$Layout$getPlayerConfig$$, void 0);
    $goog$exportPath_$$("VBX.Layout.listen", $viewbix$sdk$helper$BindHelper$listenToConfig$$, void 0);
    $goog$exportPath_$$("VBX.Layout.reconfigVideoPlayer", function ($duration$$9$$, $opt_startSeconds$$3$$) {
        $viewbix$sdk$Layout$getLayoutInstance$$().$recentStartSeconds$ = $opt_startSeconds$$3$$ || NaN;
        $viewbix$sdk$Layout$getLayoutInstance$$().$recentDuration$ = $duration$$9$$;
        $JSCompiler_StaticMethods_initVideoPlayer$$($viewbix$sdk$Layout$getLayoutInstance$$(), $opt_startSeconds$$3$$);
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.MORE_APP_GUID", "706289ed-8409-4ebb-ad25-909d98576fad", void 0);
    $goog$exportPath_$$("VBX.Layout.playVideo", function () {
        $viewbix$sdk$Layout$getLayoutInstance$$().$videoPlayer$.play();
    }, void 0);
    $goog$exportPath_$$("VBX.Layout.pauseVideo", $viewbix$sdk$Layout$pauseVideo$$, void 0);
})();
