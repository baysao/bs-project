(function(){var $JSCompiler_prototypeAlias$$, $goog$$ = $goog$$ || {}, $goog$global$$ = this;
function $goog$isDef$$($val$$) {
  return void 0 !== $val$$;
}
function $goog$exportPath_$$($name$$49_parts$$, $opt_object$$, $cur_opt_objectToExportTo$$) {
  $name$$49_parts$$ = $name$$49_parts$$.split(".");
  $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$ || $goog$global$$;
  $name$$49_parts$$[0] in $cur_opt_objectToExportTo$$ || !$cur_opt_objectToExportTo$$.execScript || $cur_opt_objectToExportTo$$.execScript("var " + $name$$49_parts$$[0]);
  for (var $part$$;$name$$49_parts$$.length && ($part$$ = $name$$49_parts$$.shift());) {
    !$name$$49_parts$$.length && $goog$isDef$$($opt_object$$) ? $cur_opt_objectToExportTo$$[$part$$] = $opt_object$$ : $cur_opt_objectToExportTo$$ = $cur_opt_objectToExportTo$$[$part$$] ? $cur_opt_objectToExportTo$$[$part$$] : $cur_opt_objectToExportTo$$[$part$$] = {};
  }
}
function $goog$getObjectByName$$($name$$54$$, $opt_obj$$) {
  for (var $parts$$1$$ = $name$$54$$.split("."), $cur$$1$$ = $opt_obj$$ || $goog$global$$, $part$$1$$;$part$$1$$ = $parts$$1$$.shift();) {
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
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$$1$$.apply($selfObj$$2$$, $newArgs$$);
    };
  }
  return function() {
    return $fn$$1$$.apply($selfObj$$2$$, arguments);
  };
}
function $goog$bind$$($fn$$2$$, $selfObj$$3$$, $var_args$$41$$) {
  $goog$bind$$ = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bindNative_$$ : $goog$bindJs_$$;
  return $goog$bind$$.apply(null, arguments);
}
function $goog$partial$$($fn$$3$$, $var_args$$42$$) {
  var $args$$3$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $newArgs$$1$$ = $args$$3$$.slice();
    $newArgs$$1$$.push.apply($newArgs$$1$$, arguments);
    return $fn$$3$$.apply(this, $newArgs$$1$$);
  };
}
var $goog$now$$ = Date.now || function() {
  return+new Date;
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
;function $goog$debug$Error$$($opt_msg$$) {
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
    for (;this.$onDisposeCallbacks_$.length;) {
      this.$onDisposeCallbacks_$.shift()();
    }
  }
};
function $goog$dispose$$($obj$$42$$) {
  $obj$$42$$ && "function" == typeof $obj$$42$$.$dispose$ && $obj$$42$$.$dispose$();
}
;var $goog$dom$defaultDomHelper_$$;
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
  return!(!$obj$$43$$ || !$obj$$43$$[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$]);
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
;function $goog$functions$TRUE$$() {
  return!0;
}
;var $goog$i18n$DateTimeSymbols$$;
$goog$i18n$DateTimeSymbols$$ = {$ERAS$:["BC", "AD"], $ERANAMES$:["Before Christ", "Anno Domini"], $NARROWMONTHS$:"JFMAMJJASOND".split(""), $STANDALONENARROWMONTHS$:"JFMAMJJASOND".split(""), $MONTHS$:"January February March April May June July August September October November December".split(" "), $STANDALONEMONTHS$:"January February March April May June July August September October November December".split(" "), $SHORTMONTHS$:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), $STANDALONESHORTMONTHS$:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), 
$WEEKDAYS$:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), $STANDALONEWEEKDAYS$:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), $SHORTWEEKDAYS$:"Sun Mon Tue Wed Thu Fri Sat".split(" "), $STANDALONESHORTWEEKDAYS$:"Sun Mon Tue Wed Thu Fri Sat".split(" "), $NARROWWEEKDAYS$:"SMTWTFS".split(""), $STANDALONENARROWWEEKDAYS$:"SMTWTFS".split(""), $SHORTQUARTERS$:["Q1", "Q2", "Q3", "Q4"], $QUARTERS$:["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], 
$AMPMS$:["AM", "PM"], $DATEFORMATS$:["EEEE, MMMM d, y", "MMMM d, y", "MMM d, y", "M/d/yy"], $TIMEFORMATS$:["h:mm:ss a zzzz", "h:mm:ss a z", "h:mm:ss a", "h:mm a"], $DATETIMEFORMATS$:["{1} 'at' {0}", "{1} 'at' {0}", "{1}, {0}", "{1}, {0}"], $FIRSTDAYOFWEEK$:6, $WEEKENDRANGE$:[5, 6], $FIRSTWEEKCUTOFFDAY$:5};
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
function $goog$json$serialize$$($object$$2$$) {
  return(new $goog$json$Serializer$$(void 0)).serialize($object$$2$$);
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
  switch(typeof $object$$4$$) {
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
      var $sep$$inline_101$$ = "", $key$$inline_102$$;
      for ($key$$inline_102$$ in $object$$4$$) {
        if (Object.prototype.hasOwnProperty.call($object$$4$$, $key$$inline_102$$)) {
          var $value$$inline_103$$ = $object$$4$$[$key$$inline_102$$];
          "function" != typeof $value$$inline_103$$ && ($sb$$1$$.push($sep$$inline_101$$), $JSCompiler_StaticMethods_serializeString_$$($key$$inline_102$$, $sb$$1$$), $sb$$1$$.push(":"), $JSCompiler_StaticMethods_serializeInternal$$($JSCompiler_StaticMethods_serializeInternal$self$$, $JSCompiler_StaticMethods_serializeInternal$self$$.$replacer_$ ? $JSCompiler_StaticMethods_serializeInternal$self$$.$replacer_$.call($object$$4$$, $key$$inline_102$$, $value$$inline_103$$) : $value$$inline_103$$, $sb$$1$$), 
          $sep$$inline_101$$ = ",");
        }
      }
      $sb$$1$$.push("}");
      break;
    case "function":
      break;
    default:
      throw Error("Unknown type: " + typeof $object$$4$$);;
  }
}
var $goog$json$Serializer$charToJsonCharCache_$$ = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, $goog$json$Serializer$charsToReplace_$$ = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function $JSCompiler_StaticMethods_serializeString_$$($s$$8$$, $sb$$2$$) {
  $sb$$2$$.push('"', $s$$8$$.replace($goog$json$Serializer$charsToReplace_$$, function($c$$) {
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
  for (var $sep_value$$60$$ = "", $i$$13$$ = 0;$i$$13$$ < $l$$1$$;$i$$13$$++) {
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
  return!(this.width * this.height);
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
  var $JSCompiler_temp$$51_options$$inline_106$$;
  ($JSCompiler_temp$$51_options$$inline_106$$ = this.$cachedOptions_$) || ($JSCompiler_temp$$51_options$$inline_106$$ = {}, $JSCompiler_StaticMethods_getProgId_$$(this) && ($JSCompiler_temp$$51_options$$inline_106$$[0] = !0, $JSCompiler_temp$$51_options$$inline_106$$[1] = !0), $JSCompiler_temp$$51_options$$inline_106$$ = this.$cachedOptions_$ = $JSCompiler_temp$$51_options$$inline_106$$);
  return $JSCompiler_temp$$51_options$$inline_106$$;
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
function $goog$object$remove$$($obj$$64$$, $key$$38$$) {
  $key$$38$$ in $obj$$64$$ && delete $obj$$64$$[$key$$38$$];
}
function $goog$object$add$$($obj$$65$$, $key$$39$$, $val$$13$$) {
  if ($key$$39$$ in $obj$$65$$) {
    throw Error('The object already contains the key "' + $key$$39$$ + '"');
  }
  $obj$$65$$[$key$$39$$] = $val$$13$$;
}
function $goog$object$get$$($obj$$66$$, $key$$40$$, $opt_val$$) {
  return $key$$40$$ in $obj$$66$$ ? $obj$$66$$[$key$$40$$] : $opt_val$$;
}
var $goog$object$PROTOTYPE_FIELDS_$$ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function $goog$object$extend$$($target$$49$$, $var_args$$53$$) {
  for (var $key$$46$$, $source$$3$$, $i$$18$$ = 1;$i$$18$$ < arguments.length;$i$$18$$++) {
    $source$$3$$ = arguments[$i$$18$$];
    for ($key$$46$$ in $source$$3$$) {
      $target$$49$$[$key$$46$$] = $source$$3$$[$key$$46$$];
    }
    for (var $j$$1$$ = 0;$j$$1$$ < $goog$object$PROTOTYPE_FIELDS_$$.length;$j$$1$$++) {
      $key$$46$$ = $goog$object$PROTOTYPE_FIELDS_$$[$j$$1$$], Object.prototype.hasOwnProperty.call($source$$3$$, $key$$46$$) && ($target$$49$$[$key$$46$$] = $source$$3$$[$key$$46$$]);
    }
  }
}
function $goog$object$createSet$$($var_args$$55$$) {
  var $argLength$$1$$ = arguments.length;
  if (1 == $argLength$$1$$ && $goog$isArray$$(arguments[0])) {
    return $goog$object$createSet$$.apply(null, arguments[0]);
  }
  for (var $rv$$4$$ = {}, $i$$20$$ = 0;$i$$20$$ < $argLength$$1$$;$i$$20$$++) {
    $rv$$4$$[arguments[$i$$20$$]] = !0;
  }
  return $rv$$4$$;
}
;var $goog$dom$tags$VOID_TAGS_$$ = $goog$object$createSet$$("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
function $goog$Thenable$addImplementation$$($ctor$$2$$) {
  $ctor$$2$$.prototype.then = $ctor$$2$$.prototype.then;
  $ctor$$2$$.prototype.$goog_Thenable = !0;
}
function $goog$Thenable$isImplementedBy$$($object$$5$$) {
  if (!$object$$5$$) {
    return!1;
  }
  try {
    return!!$object$$5$$.$goog_Thenable;
  } catch ($e$$14$$) {
    return!1;
  }
}
;function $goog$reflect$sinkValue$$($x$$54$$) {
  $goog$reflect$sinkValue$$[" "]($x$$54$$);
  return $x$$54$$;
}
$goog$reflect$sinkValue$$[" "] = $goog$nullFunction$$;
function $goog$reflect$canAccessProperty$$($obj$$74$$, $prop$$4$$) {
  try {
    return $goog$reflect$sinkValue$$($obj$$74$$[$prop$$4$$]), !0;
  } catch ($e$$15$$) {
  }
  return!1;
}
;function $goog$string$caseInsensitiveStartsWith$$($str$$26$$, $prefix$$3$$) {
  var $test1$$inline_118$$ = String($prefix$$3$$).toLowerCase(), $test2$$inline_119$$ = String($str$$26$$.substr(0, $prefix$$3$$.length)).toLowerCase();
  return 0 == ($test1$$inline_118$$ < $test2$$inline_119$$ ? -1 : $test1$$inline_118$$ == $test2$$inline_119$$ ? 0 : 1);
}
function $goog$string$subs$$($str$$28$$, $var_args$$56$$) {
  for (var $splitParts$$ = $str$$28$$.split("%s"), $returnString$$ = "", $subsArguments$$ = Array.prototype.slice.call(arguments, 1);$subsArguments$$.length && 1 < $splitParts$$.length;) {
    $returnString$$ += $splitParts$$.shift() + $subsArguments$$.shift();
  }
  return $returnString$$ + $splitParts$$.join("%s");
}
function $goog$string$isEmptySafe$$($str$$31$$) {
  return/^[\s\xa0]*$/.test(null == $str$$31$$ ? "" : String($str$$31$$));
}
function $goog$string$trim$$($str$$41$$) {
  return $str$$41$$.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
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
function $goog$string$regExpEscape$$($s$$18$$) {
  return String($s$$18$$).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
}
function $goog$string$padNumber$$($num$$6$$, $length$$17$$) {
  var $s$$19$$ = $goog$isDef$$(void 0) ? $num$$6$$.toFixed(void 0) : String($num$$6$$), $index$$48_length$$inline_121$$ = $s$$19$$.indexOf(".");
  -1 == $index$$48_length$$inline_121$$ && ($index$$48_length$$inline_121$$ = $s$$19$$.length);
  $index$$48_length$$inline_121$$ = Math.max(0, $length$$17$$ - $index$$48_length$$inline_121$$);
  return Array($index$$48_length$$inline_121$$ + 1).join("0") + $s$$19$$;
}
function $goog$string$compareElements_$$($left$$3$$, $right$$3$$) {
  return $left$$3$$ < $right$$3$$ ? -1 : $left$$3$$ > $right$$3$$ ? 1 : 0;
}
function $goog$string$toCamelCase$$($str$$64$$) {
  return String($str$$64$$).replace(/\-([a-z])/g, function($all$$, $match$$1$$) {
    return $match$$1$$.toUpperCase();
  });
}
function $goog$string$toTitleCase$$($str$$66$$) {
  var $delimiters$$ = $goog$isString$$(void 0) ? $goog$string$regExpEscape$$(void 0) : "\\s";
  return $str$$66$$.replace(new RegExp("(^" + ($delimiters$$ ? "|[" + $delimiters$$ + "]+" : "") + ")([a-z])", "g"), function($all$$1$$, $p1$$, $p2$$) {
    return $p1$$ + $p2$$.toUpperCase();
  });
}
function $goog$string$parseInt$$($value$$66$$) {
  isFinite($value$$66$$) && ($value$$66$$ = String($value$$66$$));
  return $goog$isString$$($value$$66$$) ? /^\s*-?0x/i.test($value$$66$$) ? parseInt($value$$66$$, 16) : parseInt($value$$66$$, 10) : NaN;
}
;function $goog$asserts$AssertionError$$($messagePattern$$, $messageArgs$$) {
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
;var $goog$array$ARRAY_PROTOTYPE_$$ = Array.prototype, $goog$array$indexOf$$ = $goog$array$ARRAY_PROTOTYPE_$$.indexOf ? function($arr$$17$$, $obj$$76$$, $opt_fromIndex$$6$$) {
  $goog$asserts$assert$$(null != $arr$$17$$.length);
  return $goog$array$ARRAY_PROTOTYPE_$$.indexOf.call($arr$$17$$, $obj$$76$$, $opt_fromIndex$$6$$);
} : function($arr$$18$$, $obj$$77$$, $fromIndex$$2_i$$27_opt_fromIndex$$7$$) {
  $fromIndex$$2_i$$27_opt_fromIndex$$7$$ = null == $fromIndex$$2_i$$27_opt_fromIndex$$7$$ ? 0 : 0 > $fromIndex$$2_i$$27_opt_fromIndex$$7$$ ? Math.max(0, $arr$$18$$.length + $fromIndex$$2_i$$27_opt_fromIndex$$7$$) : $fromIndex$$2_i$$27_opt_fromIndex$$7$$;
  if ($goog$isString$$($arr$$18$$)) {
    return $goog$isString$$($obj$$77$$) && 1 == $obj$$77$$.length ? $arr$$18$$.indexOf($obj$$77$$, $fromIndex$$2_i$$27_opt_fromIndex$$7$$) : -1;
  }
  for (;$fromIndex$$2_i$$27_opt_fromIndex$$7$$ < $arr$$18$$.length;$fromIndex$$2_i$$27_opt_fromIndex$$7$$++) {
    if ($fromIndex$$2_i$$27_opt_fromIndex$$7$$ in $arr$$18$$ && $arr$$18$$[$fromIndex$$2_i$$27_opt_fromIndex$$7$$] === $obj$$77$$) {
      return $fromIndex$$2_i$$27_opt_fromIndex$$7$$;
    }
  }
  return-1;
}, $goog$array$lastIndexOf$$ = $goog$array$ARRAY_PROTOTYPE_$$.lastIndexOf ? function($arr$$19$$, $obj$$78$$, $opt_fromIndex$$8$$) {
  $goog$asserts$assert$$(null != $arr$$19$$.length);
  return $goog$array$ARRAY_PROTOTYPE_$$.lastIndexOf.call($arr$$19$$, $obj$$78$$, null == $opt_fromIndex$$8$$ ? $arr$$19$$.length - 1 : $opt_fromIndex$$8$$);
} : function($arr$$20$$, $obj$$79$$, $fromIndex$$4_i$$28_opt_fromIndex$$9$$) {
  $fromIndex$$4_i$$28_opt_fromIndex$$9$$ = null == $fromIndex$$4_i$$28_opt_fromIndex$$9$$ ? $arr$$20$$.length - 1 : $fromIndex$$4_i$$28_opt_fromIndex$$9$$;
  0 > $fromIndex$$4_i$$28_opt_fromIndex$$9$$ && ($fromIndex$$4_i$$28_opt_fromIndex$$9$$ = Math.max(0, $arr$$20$$.length + $fromIndex$$4_i$$28_opt_fromIndex$$9$$));
  if ($goog$isString$$($arr$$20$$)) {
    return $goog$isString$$($obj$$79$$) && 1 == $obj$$79$$.length ? $arr$$20$$.lastIndexOf($obj$$79$$, $fromIndex$$4_i$$28_opt_fromIndex$$9$$) : -1;
  }
  for (;0 <= $fromIndex$$4_i$$28_opt_fromIndex$$9$$;$fromIndex$$4_i$$28_opt_fromIndex$$9$$--) {
    if ($fromIndex$$4_i$$28_opt_fromIndex$$9$$ in $arr$$20$$ && $arr$$20$$[$fromIndex$$4_i$$28_opt_fromIndex$$9$$] === $obj$$79$$) {
      return $fromIndex$$4_i$$28_opt_fromIndex$$9$$;
    }
  }
  return-1;
}, $goog$array$forEach$$ = $goog$array$ARRAY_PROTOTYPE_$$.forEach ? function($arr$$21$$, $f$$10$$, $opt_obj$$6$$) {
  $goog$asserts$assert$$(null != $arr$$21$$.length);
  $goog$array$ARRAY_PROTOTYPE_$$.forEach.call($arr$$21$$, $f$$10$$, $opt_obj$$6$$);
} : function($arr$$22$$, $f$$11$$, $opt_obj$$7$$) {
  for (var $l$$3$$ = $arr$$22$$.length, $arr2$$ = $goog$isString$$($arr$$22$$) ? $arr$$22$$.split("") : $arr$$22$$, $i$$29$$ = 0;$i$$29$$ < $l$$3$$;$i$$29$$++) {
    $i$$29$$ in $arr2$$ && $f$$11$$.call($opt_obj$$7$$, $arr2$$[$i$$29$$], $i$$29$$, $arr$$22$$);
  }
};
function $goog$array$forEachRight$$($arr$$23$$, $f$$12$$, $opt_obj$$8$$) {
  for (var $arr2$$1$$ = $goog$isString$$($arr$$23$$) ? $arr$$23$$.split("") : $arr$$23$$, $i$$30$$ = $arr$$23$$.length - 1;0 <= $i$$30$$;--$i$$30$$) {
    $i$$30$$ in $arr2$$1$$ && $f$$12$$.call($opt_obj$$8$$, $arr2$$1$$[$i$$30$$], $i$$30$$, $arr$$23$$);
  }
}
var $goog$array$filter$$ = $goog$array$ARRAY_PROTOTYPE_$$.filter ? function($arr$$24$$, $f$$13$$, $opt_obj$$9$$) {
  $goog$asserts$assert$$(null != $arr$$24$$.length);
  return $goog$array$ARRAY_PROTOTYPE_$$.filter.call($arr$$24$$, $f$$13$$, $opt_obj$$9$$);
} : function($arr$$25$$, $f$$14$$, $opt_obj$$10$$) {
  for (var $l$$5$$ = $arr$$25$$.length, $res$$5$$ = [], $resLength$$ = 0, $arr2$$2$$ = $goog$isString$$($arr$$25$$) ? $arr$$25$$.split("") : $arr$$25$$, $i$$31$$ = 0;$i$$31$$ < $l$$5$$;$i$$31$$++) {
    if ($i$$31$$ in $arr2$$2$$) {
      var $val$$14$$ = $arr2$$2$$[$i$$31$$];
      $f$$14$$.call($opt_obj$$10$$, $val$$14$$, $i$$31$$, $arr$$25$$) && ($res$$5$$[$resLength$$++] = $val$$14$$);
    }
  }
  return $res$$5$$;
}, $goog$array$map$$ = $goog$array$ARRAY_PROTOTYPE_$$.map ? function($arr$$26$$, $f$$15$$, $opt_obj$$11$$) {
  $goog$asserts$assert$$(null != $arr$$26$$.length);
  return $goog$array$ARRAY_PROTOTYPE_$$.map.call($arr$$26$$, $f$$15$$, $opt_obj$$11$$);
} : function($arr$$27$$, $f$$16$$, $opt_obj$$12$$) {
  for (var $l$$6$$ = $arr$$27$$.length, $res$$6$$ = Array($l$$6$$), $arr2$$3$$ = $goog$isString$$($arr$$27$$) ? $arr$$27$$.split("") : $arr$$27$$, $i$$32$$ = 0;$i$$32$$ < $l$$6$$;$i$$32$$++) {
    $i$$32$$ in $arr2$$3$$ && ($res$$6$$[$i$$32$$] = $f$$16$$.call($opt_obj$$12$$, $arr2$$3$$[$i$$32$$], $i$$32$$, $arr$$27$$));
  }
  return $res$$6$$;
}, $goog$array$some$$ = $goog$array$ARRAY_PROTOTYPE_$$.some ? function($arr$$32$$, $f$$21$$, $opt_obj$$17$$) {
  $goog$asserts$assert$$(null != $arr$$32$$.length);
  return $goog$array$ARRAY_PROTOTYPE_$$.some.call($arr$$32$$, $f$$21$$, $opt_obj$$17$$);
} : function($arr$$33$$, $f$$22$$, $opt_obj$$18$$) {
  for (var $l$$7$$ = $arr$$33$$.length, $arr2$$4$$ = $goog$isString$$($arr$$33$$) ? $arr$$33$$.split("") : $arr$$33$$, $i$$33$$ = 0;$i$$33$$ < $l$$7$$;$i$$33$$++) {
    if ($i$$33$$ in $arr2$$4$$ && $f$$22$$.call($opt_obj$$18$$, $arr2$$4$$[$i$$33$$], $i$$33$$, $arr$$33$$)) {
      return!0;
    }
  }
  return!1;
}, $goog$array$every$$ = $goog$array$ARRAY_PROTOTYPE_$$.every ? function($arr$$34$$, $f$$23$$, $opt_obj$$19$$) {
  $goog$asserts$assert$$(null != $arr$$34$$.length);
  return $goog$array$ARRAY_PROTOTYPE_$$.every.call($arr$$34$$, $f$$23$$, $opt_obj$$19$$);
} : function($arr$$35$$, $f$$24$$, $opt_obj$$20$$) {
  for (var $l$$8$$ = $arr$$35$$.length, $arr2$$5$$ = $goog$isString$$($arr$$35$$) ? $arr$$35$$.split("") : $arr$$35$$, $i$$34$$ = 0;$i$$34$$ < $l$$8$$;$i$$34$$++) {
    if ($i$$34$$ in $arr2$$5$$ && !$f$$24$$.call($opt_obj$$20$$, $arr2$$5$$[$i$$34$$], $i$$34$$, $arr$$35$$)) {
      return!1;
    }
  }
  return!0;
};
function $goog$array$find$$($arr$$38$$, $f$$26$$) {
  var $i$$35_l$$inline_131$$;
  a: {
    $i$$35_l$$inline_131$$ = $arr$$38$$.length;
    for (var $arr2$$inline_132$$ = $goog$isString$$($arr$$38$$) ? $arr$$38$$.split("") : $arr$$38$$, $i$$inline_133$$ = 0;$i$$inline_133$$ < $i$$35_l$$inline_131$$;$i$$inline_133$$++) {
      if ($i$$inline_133$$ in $arr2$$inline_132$$ && $f$$26$$.call(void 0, $arr2$$inline_132$$[$i$$inline_133$$], $i$$inline_133$$, $arr$$38$$)) {
        $i$$35_l$$inline_131$$ = $i$$inline_133$$;
        break a;
      }
    }
    $i$$35_l$$inline_131$$ = -1;
  }
  return 0 > $i$$35_l$$inline_131$$ ? null : $goog$isString$$($arr$$38$$) ? $arr$$38$$.charAt($i$$35_l$$inline_131$$) : $arr$$38$$[$i$$35_l$$inline_131$$];
}
function $goog$array$contains$$($arr$$42$$, $obj$$80$$) {
  return 0 <= $goog$array$indexOf$$($arr$$42$$, $obj$$80$$);
}
function $goog$array$clear$$($arr$$44$$) {
  if (!$goog$isArray$$($arr$$44$$)) {
    for (var $i$$39$$ = $arr$$44$$.length - 1;0 <= $i$$39$$;$i$$39$$--) {
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
    for (var $rv$$8$$ = Array($length$$18$$), $i$$44$$ = 0;$i$$44$$ < $length$$18$$;$i$$44$$++) {
      $rv$$8$$[$i$$44$$] = $object$$7$$[$i$$44$$];
    }
    return $rv$$8$$;
  }
  return[];
}
function $goog$array$splice$$($arr$$52$$, $index$$52$$, $howMany$$, $var_args$$71$$) {
  $goog$asserts$assert$$(null != $arr$$52$$.length);
  $goog$array$ARRAY_PROTOTYPE_$$.splice.apply($arr$$52$$, $goog$array$slice$$(arguments, 1));
}
function $goog$array$slice$$($arr$$53$$, $start$$7$$, $opt_end$$13$$) {
  $goog$asserts$assert$$(null != $arr$$53$$.length);
  return 2 >= arguments.length ? $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$53$$, $start$$7$$) : $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$53$$, $start$$7$$, $opt_end$$13$$);
}
function $goog$array$toObject$$($arr$$62$$, $keyFunc$$, $opt_obj$$29$$) {
  var $ret$$1$$ = {};
  $goog$array$forEach$$($arr$$62$$, function($element$$8$$, $index$$55$$) {
    $ret$$1$$[$keyFunc$$.call($opt_obj$$29$$, $element$$8$$, $index$$55$$, $arr$$62$$)] = $element$$8$$;
  });
  return $ret$$1$$;
}
;function $goog$async$nextTick$$($callback$$58$$) {
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
    var $message$$23$$ = "callImmediate" + Math.random(), $origin$$ = $win$$.location.protocol + "//" + $win$$.location.host, $doc$$4_iframe_onmessage$$ = $goog$bind$$(function($e$$18$$) {
      if ($e$$18$$.origin == $origin$$ || $e$$18$$.data == $message$$23$$) {
        this.port1.onmessage();
      }
    }, this);
    $win$$.addEventListener("message", $doc$$4_iframe_onmessage$$, !1);
    this.port1 = {};
    this.port2 = {postMessage:function $this$port2$postMessage$() {
      $win$$.postMessage($message$$23$$, $origin$$);
    }};
  });
  if ("undefined" !== typeof $Channel$$) {
    var $channel$$ = new $Channel$$, $head$$ = {}, $tail$$ = $head$$;
    $channel$$.port1.onmessage = function $$channel$$$port1$onmessage$() {
      $head$$ = $head$$.next;
      var $cb$$1$$ = $head$$.$cb$;
      $head$$.$cb$ = null;
      $cb$$1$$();
    };
    return function($cb$$2$$) {
      $tail$$.next = {$cb$:$cb$$2$$};
      $tail$$ = $tail$$.next;
      $channel$$.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function($cb$$3$$) {
    var $script$$1$$ = document.createElement("script");
    $script$$1$$.onreadystatechange = function $$script$$1$$$onreadystatechange$() {
      $script$$1$$.onreadystatechange = null;
      $script$$1$$.parentNode.removeChild($script$$1$$);
      $script$$1$$ = null;
      $cb$$3$$();
      $cb$$3$$ = null;
    };
    document.documentElement.appendChild($script$$1$$);
  } : function($cb$$4$$) {
    $goog$global$$.setTimeout($cb$$4$$, 0);
  };
}
;function $goog$dom$classlist$get$$($className$$9_element$$19$$) {
  if ($className$$9_element$$19$$.classList) {
    return $className$$9_element$$19$$.classList;
  }
  $className$$9_element$$19$$ = $className$$9_element$$19$$.className;
  return $goog$isString$$($className$$9_element$$19$$) && $className$$9_element$$19$$.match(/\S+/g) || [];
}
function $goog$dom$classlist$contains$$($element$$21$$, $className$$11$$) {
  return $element$$21$$.classList ? $element$$21$$.classList.contains($className$$11$$) : $goog$array$contains$$($goog$dom$classlist$get$$($element$$21$$), $className$$11$$);
}
function $goog$dom$classlist$add$$($element$$22$$, $className$$12$$) {
  $element$$22$$.classList ? $element$$22$$.classList.add($className$$12$$) : $goog$dom$classlist$contains$$($element$$22$$, $className$$12$$) || ($element$$22$$.className += 0 < $element$$22$$.className.length ? " " + $className$$12$$ : $className$$12$$);
}
function $goog$dom$classlist$addAll$$($element$$23$$, $classesToAdd$$1$$) {
  if ($element$$23$$.classList) {
    $goog$array$forEach$$($classesToAdd$$1$$, function($className$$14$$) {
      $goog$dom$classlist$add$$($element$$23$$, $className$$14$$);
    });
  } else {
    var $classMap$$ = {};
    $goog$array$forEach$$($goog$dom$classlist$get$$($element$$23$$), function($className$$15$$) {
      $classMap$$[$className$$15$$] = !0;
    });
    $goog$array$forEach$$($classesToAdd$$1$$, function($className$$16$$) {
      $classMap$$[$className$$16$$] = !0;
    });
    $element$$23$$.className = "";
    for (var $className$$13$$ in $classMap$$) {
      $element$$23$$.className += 0 < $element$$23$$.className.length ? " " + $className$$13$$ : $className$$13$$;
    }
  }
}
function $goog$dom$classlist$remove$$($element$$24$$, $className$$17$$) {
  $element$$24$$.classList ? $element$$24$$.classList.remove($className$$17$$) : $goog$dom$classlist$contains$$($element$$24$$, $className$$17$$) && ($element$$24$$.className = $goog$array$filter$$($goog$dom$classlist$get$$($element$$24$$), function($c$$2$$) {
    return $c$$2$$ != $className$$17$$;
  }).join(" "));
}
function $goog$dom$classlist$removeAll$$($element$$25$$, $classesToRemove$$1$$) {
  $element$$25$$.classList ? $goog$array$forEach$$($classesToRemove$$1$$, function($className$$18$$) {
    $goog$dom$classlist$remove$$($element$$25$$, $className$$18$$);
  }) : $element$$25$$.className = $goog$array$filter$$($goog$dom$classlist$get$$($element$$25$$), function($className$$19$$) {
    return!$goog$array$contains$$($classesToRemove$$1$$, $className$$19$$);
  }).join(" ");
}
;function $goog$events$ListenerMap$$($src$$5$$) {
  this.src = $src$$5$$;
  this.$listeners$ = {};
  this.$typeCount_$ = 0;
}
$goog$events$ListenerMap$$.prototype.add = function $$goog$events$ListenerMap$$$$add$($listenerArray_type$$87$$, $listener$$44_listenerObj$$, $callOnce$$, $opt_useCapture$$37$$, $opt_listenerScope$$) {
  var $typeStr$$ = $listenerArray_type$$87$$.toString();
  $listenerArray_type$$87$$ = this.$listeners$[$typeStr$$];
  $listenerArray_type$$87$$ || ($listenerArray_type$$87$$ = this.$listeners$[$typeStr$$] = [], this.$typeCount_$++);
  var $index$$56$$ = $goog$events$ListenerMap$findListenerIndex_$$($listenerArray_type$$87$$, $listener$$44_listenerObj$$, $opt_useCapture$$37$$, $opt_listenerScope$$);
  -1 < $index$$56$$ ? ($listener$$44_listenerObj$$ = $listenerArray_type$$87$$[$index$$56$$], $callOnce$$ || ($listener$$44_listenerObj$$.$callOnce$ = !1)) : ($listener$$44_listenerObj$$ = new $goog$events$Listener$$($listener$$44_listenerObj$$, this.src, $typeStr$$, !!$opt_useCapture$$37$$, $opt_listenerScope$$), $listener$$44_listenerObj$$.$callOnce$ = $callOnce$$, $listenerArray_type$$87$$.push($listener$$44_listenerObj$$));
  return $listener$$44_listenerObj$$;
};
$goog$events$ListenerMap$$.prototype.remove = function $$goog$events$ListenerMap$$$$remove$($type$$88_typeStr$$1$$, $index$$57_listener$$45$$, $opt_useCapture$$38$$, $opt_listenerScope$$1$$) {
  $type$$88_typeStr$$1$$ = $type$$88_typeStr$$1$$.toString();
  if (!($type$$88_typeStr$$1$$ in this.$listeners$)) {
    return!1;
  }
  var $listenerArray$$1$$ = this.$listeners$[$type$$88_typeStr$$1$$];
  $index$$57_listener$$45$$ = $goog$events$ListenerMap$findListenerIndex_$$($listenerArray$$1$$, $index$$57_listener$$45$$, $opt_useCapture$$38$$, $opt_listenerScope$$1$$);
  return-1 < $index$$57_listener$$45$$ ? ($JSCompiler_StaticMethods_markAsRemoved$$($listenerArray$$1$$[$index$$57_listener$$45$$]), $goog$array$removeAt$$($listenerArray$$1$$, $index$$57_listener$$45$$), 0 == $listenerArray$$1$$.length && (delete this.$listeners$[$type$$88_typeStr$$1$$], this.$typeCount_$--), !0) : !1;
};
function $JSCompiler_StaticMethods_removeByKey$$($JSCompiler_StaticMethods_removeByKey$self$$, $listener$$46$$) {
  var $type$$89$$ = $listener$$46$$.type;
  if (!($type$$89$$ in $JSCompiler_StaticMethods_removeByKey$self$$.$listeners$)) {
    return!1;
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
      for (var $listenerArray$$2$$ = this.$listeners$[$type$$90$$], $i$$62$$ = 0;$i$$62$$ < $listenerArray$$2$$.length;$i$$62$$++) {
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
  return-1 < $i$$64$$ ? $listenerArray$$4_type$$92$$[$i$$64$$] : null;
};
function $goog$events$ListenerMap$findListenerIndex_$$($listenerArray$$6$$, $listener$$48$$, $opt_useCapture$$39$$, $opt_listenerScope$$3$$) {
  for (var $i$$66$$ = 0;$i$$66$$ < $listenerArray$$6$$.length;++$i$$66$$) {
    var $listenerObj$$3$$ = $listenerArray$$6$$[$i$$66$$];
    if (!$listenerObj$$3$$.$removed$ && $listenerObj$$3$$.$listener$ == $listener$$48$$ && $listenerObj$$3$$.$capture$ == !!$opt_useCapture$$39$$ && $listenerObj$$3$$.$handler$ == $opt_listenerScope$$3$$) {
      return $i$$66$$;
    }
  }
  return-1;
}
;function $goog$i18n$TimeZone$$() {
}
function $goog$i18n$TimeZone$createTimeZone$$($offset$$inline_1062_str$$inline_137_timeZoneData$$) {
  if ("number" == typeof $offset$$inline_1062_str$$inline_137_timeZoneData$$) {
    var $tz$$1_tz$$inline_136$$ = new $goog$i18n$TimeZone$$;
    $tz$$1_tz$$inline_136$$.$standardOffset_$ = $offset$$inline_1062_str$$inline_137_timeZoneData$$;
    var $JSCompiler_inline_result$$1058_offset$$inline_1059_parts$$inline_1063$$;
    $JSCompiler_inline_result$$1058_offset$$inline_1059_parts$$inline_1063$$ = $offset$$inline_1062_str$$inline_137_timeZoneData$$;
    if (0 == $JSCompiler_inline_result$$1058_offset$$inline_1059_parts$$inline_1063$$) {
      $JSCompiler_inline_result$$1058_offset$$inline_1059_parts$$inline_1063$$ = "Etc/GMT";
    } else {
      var $parts$$inline_1060$$ = ["Etc/GMT", 0 > $JSCompiler_inline_result$$1058_offset$$inline_1059_parts$$inline_1063$$ ? "-" : "+"];
      $JSCompiler_inline_result$$1058_offset$$inline_1059_parts$$inline_1063$$ = Math.abs($JSCompiler_inline_result$$1058_offset$$inline_1059_parts$$inline_1063$$);
      $parts$$inline_1060$$.push(Math.floor($JSCompiler_inline_result$$1058_offset$$inline_1059_parts$$inline_1063$$ / 60) % 100);
      $JSCompiler_inline_result$$1058_offset$$inline_1059_parts$$inline_1063$$ %= 60;
      0 != $JSCompiler_inline_result$$1058_offset$$inline_1059_parts$$inline_1063$$ && $parts$$inline_1060$$.push(":", $goog$string$padNumber$$($JSCompiler_inline_result$$1058_offset$$inline_1059_parts$$inline_1063$$, 2));
      $JSCompiler_inline_result$$1058_offset$$inline_1059_parts$$inline_1063$$ = $parts$$inline_1060$$.join("");
    }
    $tz$$1_tz$$inline_136$$.$timeZoneId_$ = $JSCompiler_inline_result$$1058_offset$$inline_1059_parts$$inline_1063$$;
    0 == $offset$$inline_1062_str$$inline_137_timeZoneData$$ ? $offset$$inline_1062_str$$inline_137_timeZoneData$$ = "UTC" : ($JSCompiler_inline_result$$1058_offset$$inline_1059_parts$$inline_1063$$ = ["UTC", 0 > $offset$$inline_1062_str$$inline_137_timeZoneData$$ ? "+" : "-"], $offset$$inline_1062_str$$inline_137_timeZoneData$$ = Math.abs($offset$$inline_1062_str$$inline_137_timeZoneData$$), $JSCompiler_inline_result$$1058_offset$$inline_1059_parts$$inline_1063$$.push(Math.floor($offset$$inline_1062_str$$inline_137_timeZoneData$$ / 
    60) % 100), $offset$$inline_1062_str$$inline_137_timeZoneData$$ %= 60, 0 != $offset$$inline_1062_str$$inline_137_timeZoneData$$ && $JSCompiler_inline_result$$1058_offset$$inline_1059_parts$$inline_1063$$.push(":", $offset$$inline_1062_str$$inline_137_timeZoneData$$), $offset$$inline_1062_str$$inline_137_timeZoneData$$ = $JSCompiler_inline_result$$1058_offset$$inline_1059_parts$$inline_1063$$.join(""));
    $tz$$1_tz$$inline_136$$.$tzNames_$ = [$offset$$inline_1062_str$$inline_137_timeZoneData$$, $offset$$inline_1062_str$$inline_137_timeZoneData$$];
    $tz$$1_tz$$inline_136$$.$transitions_$ = [];
    return $tz$$1_tz$$inline_136$$;
  }
  $tz$$1_tz$$inline_136$$ = new $goog$i18n$TimeZone$$;
  $tz$$1_tz$$inline_136$$.$timeZoneId_$ = $offset$$inline_1062_str$$inline_137_timeZoneData$$.id;
  $tz$$1_tz$$inline_136$$.$standardOffset_$ = -$offset$$inline_1062_str$$inline_137_timeZoneData$$.std_offset;
  $tz$$1_tz$$inline_136$$.$tzNames_$ = $offset$$inline_1062_str$$inline_137_timeZoneData$$.names;
  $tz$$1_tz$$inline_136$$.$transitions_$ = $offset$$inline_1062_str$$inline_137_timeZoneData$$.transitions;
  return $tz$$1_tz$$inline_136$$;
}
function $JSCompiler_StaticMethods_getDaylightAdjustment$$($JSCompiler_StaticMethods_getDaylightAdjustment$self$$, $date$$16$$) {
  for (var $timeInHours$$ = Date.UTC($date$$16$$.getUTCFullYear(), $date$$16$$.getUTCMonth(), $date$$16$$.getUTCDate(), $date$$16$$.getUTCHours(), $date$$16$$.getUTCMinutes()) / 36E5, $index$$58$$ = 0;$index$$58$$ < $JSCompiler_StaticMethods_getDaylightAdjustment$self$$.$transitions_$.length && $timeInHours$$ >= $JSCompiler_StaticMethods_getDaylightAdjustment$self$$.$transitions_$[$index$$58$$];) {
    $index$$58$$ += 2;
  }
  return 0 == $index$$58$$ ? 0 : $JSCompiler_StaticMethods_getDaylightAdjustment$self$$.$transitions_$[$index$$58$$ - 1];
}
;function $goog$i18n$DateTimeFormat$$($pattern$$2$$, $opt_dateTimeSymbols$$) {
  $goog$asserts$assert$$($goog$isDef$$($pattern$$2$$), "Pattern must be defined");
  $goog$asserts$assert$$($goog$isDef$$($opt_dateTimeSymbols$$) || $goog$isDef$$($goog$i18n$DateTimeSymbols$$), "goog.i18n.DateTimeSymbols or explicit symbols must be defined");
  this.$patternParts_$ = [];
  this.$dateTimeSymbols_$ = $opt_dateTimeSymbols$$ || $goog$i18n$DateTimeSymbols$$;
  "number" == typeof $pattern$$2$$ ? $JSCompiler_StaticMethods_applyStandardPattern_$$(this, $pattern$$2$$) : $JSCompiler_StaticMethods_applyPattern_$$(this, $pattern$$2$$);
}
var $goog$i18n$DateTimeFormat$TOKENS_$$ = [/^\'(?:[^\']|\'\')*\'/, /^(?:G+|y+|M+|k+|S+|E+|a+|h+|K+|H+|c+|L+|Q+|d+|m+|s+|v+|w+|z+|Z+)/, /^[^\'GyMkSEahKHcLQdmsvwzZ]+/];
function $JSCompiler_StaticMethods_applyPattern_$$($JSCompiler_StaticMethods_applyPattern_$self$$, $pattern$$3$$) {
  for (;$pattern$$3$$;) {
    for (var $i$$67$$ = 0;$i$$67$$ < $goog$i18n$DateTimeFormat$TOKENS_$$.length;++$i$$67$$) {
      var $m$$2_part$$2$$ = $pattern$$3$$.match($goog$i18n$DateTimeFormat$TOKENS_$$[$i$$67$$]);
      if ($m$$2_part$$2$$) {
        $m$$2_part$$2$$ = $m$$2_part$$2$$[0];
        $pattern$$3$$ = $pattern$$3$$.substring($m$$2_part$$2$$.length);
        0 == $i$$67$$ && ("''" == $m$$2_part$$2$$ ? $m$$2_part$$2$$ = "'" : ($m$$2_part$$2$$ = $m$$2_part$$2$$.substring(1, $m$$2_part$$2$$.length - 1), $m$$2_part$$2$$ = $m$$2_part$$2$$.replace(/\'\'/, "'")));
        $JSCompiler_StaticMethods_applyPattern_$self$$.$patternParts_$.push({text:$m$$2_part$$2$$, type:$i$$67$$});
        break;
      }
    }
  }
}
$goog$i18n$DateTimeFormat$$.prototype.format = function $$goog$i18n$DateTimeFormat$$$$format$($date$$23$$, $opt_timeZone$$) {
  if (!$date$$23$$) {
    throw Error("The date to format must be non-null.");
  }
  var $diff_out$$ = $opt_timeZone$$ ? 6E4 * ($date$$23$$.getTimezoneOffset() - ($opt_timeZone$$.$standardOffset_$ - $JSCompiler_StaticMethods_getDaylightAdjustment$$($opt_timeZone$$, $date$$23$$))) : 0, $dateForDate$$ = $diff_out$$ ? new Date($date$$23$$.getTime() + $diff_out$$) : $date$$23$$, $dateForTime$$ = $dateForDate$$;
  $opt_timeZone$$ && $dateForDate$$.getTimezoneOffset() != $date$$23$$.getTimezoneOffset() && ($dateForTime$$ = new Date($date$$23$$.getTime() + ($diff_out$$ + (0 < $diff_out$$ ? -864E5 : 864E5))));
  for (var $diff_out$$ = [], $i$$68$$ = 0;$i$$68$$ < this.$patternParts_$.length;++$i$$68$$) {
    var $text$$13$$ = this.$patternParts_$[$i$$68$$].text;
    1 == this.$patternParts_$[$i$$68$$].type ? $diff_out$$.push($JSCompiler_StaticMethods_formatField_$$(this, $text$$13$$, $date$$23$$, $dateForDate$$, $dateForTime$$, $opt_timeZone$$)) : $diff_out$$.push($text$$13$$);
  }
  return $diff_out$$.join("");
};
function $JSCompiler_StaticMethods_applyStandardPattern_$$($JSCompiler_StaticMethods_applyStandardPattern_$self$$, $formatType$$) {
  var $pattern$$4$$;
  if (4 > $formatType$$) {
    $pattern$$4$$ = $JSCompiler_StaticMethods_applyStandardPattern_$self$$.$dateTimeSymbols_$.$DATEFORMATS$[$formatType$$];
  } else {
    if (8 > $formatType$$) {
      $pattern$$4$$ = $JSCompiler_StaticMethods_applyStandardPattern_$self$$.$dateTimeSymbols_$.$TIMEFORMATS$[$formatType$$ - 4];
    } else {
      if (12 > $formatType$$) {
        $pattern$$4$$ = $JSCompiler_StaticMethods_applyStandardPattern_$self$$.$dateTimeSymbols_$.$DATETIMEFORMATS$[$formatType$$ - 8], $pattern$$4$$ = $pattern$$4$$.replace("{1}", $JSCompiler_StaticMethods_applyStandardPattern_$self$$.$dateTimeSymbols_$.$DATEFORMATS$[$formatType$$ - 8]), $pattern$$4$$ = $pattern$$4$$.replace("{0}", $JSCompiler_StaticMethods_applyStandardPattern_$self$$.$dateTimeSymbols_$.$TIMEFORMATS$[$formatType$$ - 8]);
      } else {
        $JSCompiler_StaticMethods_applyStandardPattern_$$($JSCompiler_StaticMethods_applyStandardPattern_$self$$, 10);
        return;
      }
    }
  }
  $JSCompiler_StaticMethods_applyPattern_$$($JSCompiler_StaticMethods_applyStandardPattern_$self$$, $pattern$$4$$);
}
function $JSCompiler_StaticMethods_localizeNumbers_$$($JSCompiler_StaticMethods_localizeNumbers_$self$$, $input$$) {
  var $JSCompiler_inline_result$$73_input$$inline_139$$;
  $JSCompiler_inline_result$$73_input$$inline_139$$ = String($input$$);
  var $dateTimeSymbols$$inline_141$$ = $JSCompiler_StaticMethods_localizeNumbers_$self$$.$dateTimeSymbols_$ || $goog$i18n$DateTimeSymbols$$;
  if (void 0 !== $dateTimeSymbols$$inline_141$$.$ZERODIGIT$) {
    for (var $parts$$inline_142$$ = [], $i$$inline_143$$ = 0;$i$$inline_143$$ < $JSCompiler_inline_result$$73_input$$inline_139$$.length;$i$$inline_143$$++) {
      var $c$$inline_144$$ = $JSCompiler_inline_result$$73_input$$inline_139$$.charCodeAt($i$$inline_143$$);
      $parts$$inline_142$$.push(48 <= $c$$inline_144$$ && 57 >= $c$$inline_144$$ ? String.fromCharCode($dateTimeSymbols$$inline_141$$.$ZERODIGIT$ + $c$$inline_144$$ - 48) : $JSCompiler_inline_result$$73_input$$inline_139$$.charAt($i$$inline_143$$));
    }
    $JSCompiler_inline_result$$73_input$$inline_139$$ = $parts$$inline_142$$.join("");
  }
  return $JSCompiler_inline_result$$73_input$$inline_139$$;
}
function $goog$i18n$DateTimeFormat$validateDateHasTime_$$($date$$27$$) {
  if (!($date$$27$$.getHours && $date$$27$$.getSeconds && $date$$27$$.getMinutes)) {
    throw Error("The date to format has no time (probably a goog.date.Date). Use Date or goog.date.DateTime, or use a pattern without time fields.");
  }
}
function $JSCompiler_StaticMethods_formatField_$$($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$, $firstday$$inline_1071_opt_timeZone$$inline_228_patternStr$$, $cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$, 
$dateForDate$$1$$, $dateForTime$$1$$, $opt_timeZone$$4$$) {
  var $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$ = $firstday$$inline_1071_opt_timeZone$$inline_228_patternStr$$.length;
  switch($firstday$$inline_1071_opt_timeZone$$inline_228_patternStr$$.charAt(0)) {
    case "G":
      return $cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$ = 0 < $dateForDate$$1$$.getFullYear() ? 1 : 0, 4 <= $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$ ? $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$dateTimeSymbols_$.$ERANAMES$[$cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$] : 
      $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$dateTimeSymbols_$.$ERAS$[$cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$];
    case "y":
      return $cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$ = $dateForDate$$1$$.getFullYear(), 0 > $cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$ && ($cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$ = 
      -$cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$), 2 == $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$ && ($cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$ %= 
      100), $JSCompiler_StaticMethods_localizeNumbers_$$($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$, $goog$string$padNumber$$($cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$, 
      $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$));
    case "M":
      a: {
        switch($cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$ = $dateForDate$$1$$.getMonth(), $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$) {
          case 5:
            $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ = $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$dateTimeSymbols_$.$NARROWMONTHS$[$cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$];
            break a;
          case 4:
            $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ = $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$dateTimeSymbols_$.$MONTHS$[$cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$];
            break a;
          case 3:
            $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ = $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$dateTimeSymbols_$.$SHORTMONTHS$[$cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$];
            break a;
          default:
            $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ = $JSCompiler_StaticMethods_localizeNumbers_$$($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$, 
            $goog$string$padNumber$$($cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$ + 1, $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$));
        }
      }
      return $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$;
    case "k":
      return $goog$i18n$DateTimeFormat$validateDateHasTime_$$($dateForTime$$1$$), $JSCompiler_StaticMethods_localizeNumbers_$$($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$, $goog$string$padNumber$$($dateForTime$$1$$.getHours() || 24, $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$));
    case "S":
      return $JSCompiler_StaticMethods_localizeNumbers_$$($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$, ($dateForTime$$1$$.getTime() % 1E3 / 1E3).toFixed(Math.min(3, $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$)).substr(2) + (3 < $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$ ? 
      $goog$string$padNumber$$(0, $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$ - 3) : ""));
    case "E":
      return $cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$ = $dateForDate$$1$$.getDay(), 4 <= $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$ ? $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$dateTimeSymbols_$.$WEEKDAYS$[$cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$] : 
      $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$dateTimeSymbols_$.$SHORTWEEKDAYS$[$cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$];
    case "a":
      return $goog$i18n$DateTimeFormat$validateDateHasTime_$$($dateForTime$$1$$), $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$ = $dateForTime$$1$$.getHours(), $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$dateTimeSymbols_$.$AMPMS$[12 <= $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$ && 
      24 > $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$ ? 1 : 0];
    case "h":
      return $goog$i18n$DateTimeFormat$validateDateHasTime_$$($dateForTime$$1$$), $JSCompiler_StaticMethods_localizeNumbers_$$($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$, $goog$string$padNumber$$($dateForTime$$1$$.getHours() % 12 || 12, $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$));
    case "K":
      return $goog$i18n$DateTimeFormat$validateDateHasTime_$$($dateForTime$$1$$), $JSCompiler_StaticMethods_localizeNumbers_$$($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$, $goog$string$padNumber$$($dateForTime$$1$$.getHours() % 12, $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$));
    case "H":
      return $goog$i18n$DateTimeFormat$validateDateHasTime_$$($dateForTime$$1$$), $JSCompiler_StaticMethods_localizeNumbers_$$($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$, $goog$string$padNumber$$($dateForTime$$1$$.getHours(), $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$));
    case "c":
      a: {
        switch($cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$ = $dateForDate$$1$$.getDay(), $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$) {
          case 5:
            $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ = $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$dateTimeSymbols_$.$STANDALONENARROWWEEKDAYS$[$cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$];
            break a;
          case 4:
            $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ = $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$dateTimeSymbols_$.$STANDALONEWEEKDAYS$[$cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$];
            break a;
          case 3:
            $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ = $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$dateTimeSymbols_$.$STANDALONESHORTWEEKDAYS$[$cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$];
            break a;
          default:
            $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ = $JSCompiler_StaticMethods_localizeNumbers_$$($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$, 
            $goog$string$padNumber$$($cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$, 1));
        }
      }
      return $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$;
    case "L":
      a: {
        switch($cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$ = $dateForDate$$1$$.getMonth(), $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$) {
          case 5:
            $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ = $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$dateTimeSymbols_$.$STANDALONENARROWMONTHS$[$cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$];
            break a;
          case 4:
            $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ = $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$dateTimeSymbols_$.$STANDALONEMONTHS$[$cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$];
            break a;
          case 3:
            $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ = $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$dateTimeSymbols_$.$STANDALONESHORTMONTHS$[$cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$];
            break a;
          default:
            $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ = $JSCompiler_StaticMethods_localizeNumbers_$$($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$, 
            $goog$string$padNumber$$($cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$ + 1, $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$));
        }
      }
      return $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$;
    case "Q":
      return $cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$ = Math.floor($dateForDate$$1$$.getMonth() / 3), 4 > $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$ ? $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$dateTimeSymbols_$.$SHORTQUARTERS$[$cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$] : 
      $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$dateTimeSymbols_$.$QUARTERS$[$cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$];
    case "d":
      return $JSCompiler_StaticMethods_localizeNumbers_$$($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$, $goog$string$padNumber$$($dateForDate$$1$$.getDate(), $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$));
    case "m":
      return $goog$i18n$DateTimeFormat$validateDateHasTime_$$($dateForTime$$1$$), $JSCompiler_StaticMethods_localizeNumbers_$$($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$, $goog$string$padNumber$$($dateForTime$$1$$.getMinutes(), $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$));
    case "s":
      return $goog$i18n$DateTimeFormat$validateDateHasTime_$$($dateForTime$$1$$), $JSCompiler_StaticMethods_localizeNumbers_$$($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$, $goog$string$padNumber$$($dateForTime$$1$$.getSeconds(), $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$));
    case "v":
      return $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ = $opt_timeZone$$4$$ || $goog$i18n$TimeZone$createTimeZone$$($cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$.getTimezoneOffset()), 
      $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$timeZoneId_$;
    case "w":
      return $cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$ = new Date($dateForTime$$1$$.getFullYear(), $dateForTime$$1$$.getMonth(), $dateForTime$$1$$.getDate()), $firstday$$inline_1071_opt_timeZone$$inline_228_patternStr$$ = $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$dateTimeSymbols_$.$FIRSTDAYOFWEEK$ || 
      0, $cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$ = $cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$.valueOf() + 864E5 * ((($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$dateTimeSymbols_$.$FIRSTWEEKCUTOFFDAY$ || 
      3) - $firstday$$inline_1071_opt_timeZone$$inline_228_patternStr$$ + 7) % 7 - (($cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$.getDay() + 6) % 7 - $firstday$$inline_1071_opt_timeZone$$inline_228_patternStr$$ + 7) % 7), $cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$ = 
      Math.floor(Math.round(($cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$ - (new Date((new Date($cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$)).getFullYear(), 
      0, 1)).valueOf()) / 864E5) / 7) + 1, $JSCompiler_StaticMethods_localizeNumbers_$$($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$, $goog$string$padNumber$$($cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$, 
      $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$));
    case "z":
      return $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ = $opt_timeZone$$4$$ || $goog$i18n$TimeZone$createTimeZone$$($cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$.getTimezoneOffset()), 
      4 > $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$ ? $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$tzNames_$[0 < $JSCompiler_StaticMethods_getDaylightAdjustment$$($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$, 
      $cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$) ? 2 : 0] : $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$.$tzNames_$[0 < $JSCompiler_StaticMethods_getDaylightAdjustment$$($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$, 
      $cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$) ? 3 : 1];
    case "Z":
      return $firstday$$inline_1071_opt_timeZone$$inline_228_patternStr$$ = $opt_timeZone$$4$$ || $goog$i18n$TimeZone$createTimeZone$$($cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$.getTimezoneOffset()), 4 > $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$ ? ($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ = 
      -($firstday$$inline_1071_opt_timeZone$$inline_228_patternStr$$.$standardOffset_$ - $JSCompiler_StaticMethods_getDaylightAdjustment$$($firstday$$inline_1071_opt_timeZone$$inline_228_patternStr$$, $cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$)), $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$ = 
      [0 > $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ ? "-" : "+"], $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ = Math.abs($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$), 
      $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$.push($goog$string$padNumber$$(Math.floor($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ / 60) % 100, 2), $goog$string$padNumber$$($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ % 
      60, 2)), $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ = $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$.join("")) : ($JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$ = $firstday$$inline_1071_opt_timeZone$$inline_228_patternStr$$.$standardOffset_$ - 
      $JSCompiler_StaticMethods_getDaylightAdjustment$$($firstday$$inline_1071_opt_timeZone$$inline_228_patternStr$$, $cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$), $cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$ = 
      ["GMT"], $cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$.push(0 >= $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$ ? "+" : "-"), $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$ = Math.abs($JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$), 
      $cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$.push($goog$string$padNumber$$(Math.floor($JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$ / 60) % 100, 2), ":", $goog$string$padNumber$$($JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$ % 
      60, 2)), $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$ = $cutoffSameWeek$$inline_1072_d$$inline_1070_date$$45_parts$$inline_1275_value$$inline_149_value$$inline_154_value$$inline_159_value$$inline_172_value$$inline_193_value$$inline_198_value$$inline_203_weekNum$$inline_219$$.join(""), $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$ = 
      $JSCompiler_StaticMethods_localizeNumbers_$$($JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$, $JSCompiler_inline_result$$1272_count$$31_hours$$inline_176_offset$$inline_1274_parts$$inline_1077$$)), $JSCompiler_StaticMethods_formatField_$self_JSCompiler_inline_result$$32_JSCompiler_inline_result$$47_JSCompiler_inline_result$$56_JSCompiler_temp$$1052_offset$$inline_1076_opt_timeZone$$inline_214_opt_timeZone$$inline_223$$;
    default:
      return "";
  }
}
;var $goog$labs$userAgent$util$userAgent_$$;
a: {
  var $navigator$$inline_230$$ = $goog$global$$.navigator;
  if ($navigator$$inline_230$$) {
    var $userAgent$$inline_231$$ = $navigator$$inline_230$$.userAgent;
    if ($userAgent$$inline_231$$) {
      $goog$labs$userAgent$util$userAgent_$$ = $userAgent$$inline_231$$;
      break a;
    }
  }
  $goog$labs$userAgent$util$userAgent_$$ = "";
}
function $goog$labs$userAgent$util$matchUserAgent$$($str$$71$$) {
  return-1 != $goog$labs$userAgent$util$userAgent_$$.indexOf($str$$71$$);
}
;function $goog$labs$userAgent$device$isTablet$$() {
  return $goog$labs$userAgent$util$matchUserAgent$$("iPad") || $goog$labs$userAgent$util$matchUserAgent$$("Android") && !$goog$labs$userAgent$util$matchUserAgent$$("Mobile") || $goog$labs$userAgent$util$matchUserAgent$$("Silk");
}
;function $goog$math$Coordinate$$($opt_x$$2$$, $opt_y$$2$$) {
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
  return($JSCompiler_StaticMethods_createInstance$self_progId$$1$$ = $JSCompiler_StaticMethods_getProgId_$$($JSCompiler_StaticMethods_createInstance$self_progId$$1$$)) ? new ActiveXObject($JSCompiler_StaticMethods_createInstance$self_progId$$1$$) : new XMLHttpRequest;
}
function $JSCompiler_StaticMethods_getProgId_$$($JSCompiler_StaticMethods_getProgId_$self$$) {
  if (!$JSCompiler_StaticMethods_getProgId_$self$$.$ieProgId_$ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var $ACTIVE_X_IDENTS$$ = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], $i$$75$$ = 0;$i$$75$$ < $ACTIVE_X_IDENTS$$.length;$i$$75$$++) {
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
    for (var $i$$76$$ = 1;$i$$76$$ < arguments.length;$i$$76$$++) {
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
        var $dir$$inline_246$$ = null;
        $argument$$1_html$$5_htmlDir$$.$implementsGoogI18nBidiDirectionalString$ && ($dir$$inline_246$$ = $argument$$1_html$$5_htmlDir$$.$getDirection$());
        $argument$$1_html$$5_htmlDir$$ = $goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse_$$($goog$string$htmlEscape$$($argument$$1_html$$5_htmlDir$$.$implementsGoogStringTypedString$ ? $argument$$1_html$$5_htmlDir$$.$getTypedStringValue$() : String($argument$$1_html$$5_htmlDir$$)), $dir$$inline_246$$);
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
    for (var $i$$78$$ = 0;$i$$78$$ < $argLength$$2$$;$i$$78$$ += 2) {
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
  for (var $rv$$12$$ = [], $i$$79$$ = 0;$i$$79$$ < this.$keys_$.length;$i$$79$$++) {
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
    for (var $srcIndex$$ = 0, $destIndex$$ = 0;$srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length;) {
      var $key$$57$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$srcIndex$$];
      $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$map_$, $key$$57$$) && ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$destIndex$$++] = $key$$57$$);
      $srcIndex$$++;
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length = $destIndex$$;
  }
  if ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$count_$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length) {
    for (var $seen$$2$$ = {}, $destIndex$$ = $srcIndex$$ = 0;$srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length;) {
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
  for (var $i$$82$$ = 0;$i$$82$$ < $keys$$3$$.length;$i$$82$$++) {
    this.set($keys$$3$$[$i$$82$$], $map$$1_values$$4$$[$i$$82$$]);
  }
};
$JSCompiler_prototypeAlias$$.forEach = function $$JSCompiler_prototypeAlias$$$forEach$($f$$42$$, $opt_obj$$40$$) {
  for (var $keys$$4$$ = this.$getKeys$(), $i$$83$$ = 0;$i$$83$$ < $keys$$4$$.length;$i$$83$$++) {
    var $key$$60$$ = $keys$$4$$[$i$$83$$], $value$$96$$ = this.get($key$$60$$);
    $f$$42$$.call($opt_obj$$40$$, $value$$96$$, $key$$60$$, this);
  }
};
$JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
  return new $goog$structs$Map$$(this);
};
$JSCompiler_prototypeAlias$$.$toObject$ = function $$JSCompiler_prototypeAlias$$$$toObject$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for (var $obj$$85$$ = {}, $i$$85$$ = 0;$i$$85$$ < this.$keys_$.length;$i$$85$$++) {
    var $key$$62$$ = this.$keys_$[$i$$85$$];
    $obj$$85$$[$key$$62$$] = this.$map_$[$key$$62$$];
  }
  return $obj$$85$$;
};
function $goog$structs$Map$hasKey_$$($obj$$86$$, $key$$64$$) {
  return Object.prototype.hasOwnProperty.call($obj$$86$$, $key$$64$$);
}
;function $goog$dom$forms$addFormDataToMap_$$($map$$4$$, $name$$59$$, $value$$99$$) {
  var $array$$17$$ = $map$$4$$.get($name$$59$$);
  $array$$17$$ || ($array$$17$$ = [], $map$$4$$.set($name$$59$$, $array$$17$$));
  $array$$17$$.push($value$$99$$);
}
function $goog$dom$forms$getValue$$($el$$6$$) {
  var $selectedIndex$$inline_249_type$$94_values$$inline_252$$ = $el$$6$$.type;
  if (!$goog$isDef$$($selectedIndex$$inline_249_type$$94_values$$inline_252$$)) {
    return null;
  }
  switch($selectedIndex$$inline_249_type$$94_values$$inline_252$$.toLowerCase()) {
    case "checkbox":
    ;
    case "radio":
      return $el$$6$$.checked ? $el$$6$$.value : null;
    case "select-one":
      return $selectedIndex$$inline_249_type$$94_values$$inline_252$$ = $el$$6$$.selectedIndex, 0 <= $selectedIndex$$inline_249_type$$94_values$$inline_252$$ ? $el$$6$$.options[$selectedIndex$$inline_249_type$$94_values$$inline_252$$].value : null;
    case "select-multiple":
      for (var $selectedIndex$$inline_249_type$$94_values$$inline_252$$ = [], $option$$inline_253$$, $i$$inline_254$$ = 0;$option$$inline_253$$ = $el$$6$$.options[$i$$inline_254$$];$i$$inline_254$$++) {
        $option$$inline_253$$.selected && $selectedIndex$$inline_249_type$$94_values$$inline_252$$.push($option$$inline_253$$.value);
      }
      return $selectedIndex$$inline_249_type$$94_values$$inline_252$$.length ? $selectedIndex$$inline_249_type$$94_values$$inline_252$$ : null;
    default:
      return $goog$isDef$$($el$$6$$.value) ? $el$$6$$.value : null;
  }
}
;function $goog$structs$Node$$($key$$65$$, $value$$104$$) {
  this.$key_$ = $key$$65$$;
  this.$value_$ = $value$$104$$;
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
function $goog$structs$Heap$$($nodes$$inline_260_opt_heap$$) {
  this.$nodes_$ = [];
  if ($nodes$$inline_260_opt_heap$$) {
    a: {
      var $keys$$inline_258$$, $values$$inline_259$$;
      if ($nodes$$inline_260_opt_heap$$ instanceof $goog$structs$Heap$$) {
        if ($keys$$inline_258$$ = $nodes$$inline_260_opt_heap$$.$getKeys$(), $values$$inline_259$$ = $nodes$$inline_260_opt_heap$$.$getValues$(), 0 >= $nodes$$inline_260_opt_heap$$.$getCount$()) {
          $nodes$$inline_260_opt_heap$$ = this.$nodes_$;
          for (var $i$$inline_261$$ = 0;$i$$inline_261$$ < $keys$$inline_258$$.length;$i$$inline_261$$++) {
            $nodes$$inline_260_opt_heap$$.push(new $goog$structs$Node$$($keys$$inline_258$$[$i$$inline_261$$], $values$$inline_259$$[$i$$inline_261$$]));
          }
          break a;
        }
      } else {
        $keys$$inline_258$$ = $goog$object$getKeys$$($nodes$$inline_260_opt_heap$$), $values$$inline_259$$ = $goog$object$getValues$$($nodes$$inline_260_opt_heap$$);
      }
      for ($i$$inline_261$$ = 0;$i$$inline_261$$ < $keys$$inline_258$$.length;$i$$inline_261$$++) {
        $JSCompiler_StaticMethods_insert$$(this, $keys$$inline_258$$[$i$$inline_261$$], $values$$inline_259$$[$i$$inline_261$$]);
      }
    }
  }
}
function $JSCompiler_StaticMethods_insert$$($JSCompiler_StaticMethods_insert$self_nodes$$inline_265$$, $index$$inline_264_key$$66$$, $node$$inline_266_value$$105$$) {
  var $nodes_parentIndex$$inline_267$$ = $JSCompiler_StaticMethods_insert$self_nodes$$inline_265$$.$nodes_$;
  $nodes_parentIndex$$inline_267$$.push(new $goog$structs$Node$$($index$$inline_264_key$$66$$, $node$$inline_266_value$$105$$));
  $index$$inline_264_key$$66$$ = $nodes_parentIndex$$inline_267$$.length - 1;
  $JSCompiler_StaticMethods_insert$self_nodes$$inline_265$$ = $JSCompiler_StaticMethods_insert$self_nodes$$inline_265$$.$nodes_$;
  for ($node$$inline_266_value$$105$$ = $JSCompiler_StaticMethods_insert$self_nodes$$inline_265$$[$index$$inline_264_key$$66$$];0 < $index$$inline_264_key$$66$$;) {
    if ($nodes_parentIndex$$inline_267$$ = $index$$inline_264_key$$66$$ - 1 >> 1, $JSCompiler_StaticMethods_insert$self_nodes$$inline_265$$[$nodes_parentIndex$$inline_267$$].getKey() > $node$$inline_266_value$$105$$.getKey()) {
      $JSCompiler_StaticMethods_insert$self_nodes$$inline_265$$[$index$$inline_264_key$$66$$] = $JSCompiler_StaticMethods_insert$self_nodes$$inline_265$$[$nodes_parentIndex$$inline_267$$], $index$$inline_264_key$$66$$ = $nodes_parentIndex$$inline_267$$;
    } else {
      break;
    }
  }
  $JSCompiler_StaticMethods_insert$self_nodes$$inline_265$$[$index$$inline_264_key$$66$$] = $node$$inline_266_value$$105$$;
}
$JSCompiler_prototypeAlias$$ = $goog$structs$Heap$$.prototype;
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$() {
  var $index$$inline_270_nodes$$2$$ = this.$nodes_$, $count$$33_nodes$$inline_271$$ = $index$$inline_270_nodes$$2$$.length, $rootNode$$ = $index$$inline_270_nodes$$2$$[0];
  if (!(0 >= $count$$33_nodes$$inline_271$$)) {
    if (1 == $count$$33_nodes$$inline_271$$) {
      $goog$array$clear$$($index$$inline_270_nodes$$2$$);
    } else {
      $index$$inline_270_nodes$$2$$[0] = $index$$inline_270_nodes$$2$$.pop();
      for (var $index$$inline_270_nodes$$2$$ = 0, $count$$33_nodes$$inline_271$$ = this.$nodes_$, $count$$inline_272$$ = $count$$33_nodes$$inline_271$$.length, $node$$inline_273$$ = $count$$33_nodes$$inline_271$$[$index$$inline_270_nodes$$2$$];$index$$inline_270_nodes$$2$$ < $count$$inline_272$$ >> 1;) {
        var $leftChildIndex$$inline_274_smallerChildIndex$$inline_276$$ = 2 * $index$$inline_270_nodes$$2$$ + 1, $rightChildIndex$$inline_275$$ = 2 * $index$$inline_270_nodes$$2$$ + 2, $leftChildIndex$$inline_274_smallerChildIndex$$inline_276$$ = $rightChildIndex$$inline_275$$ < $count$$inline_272$$ && $count$$33_nodes$$inline_271$$[$rightChildIndex$$inline_275$$].getKey() < $count$$33_nodes$$inline_271$$[$leftChildIndex$$inline_274_smallerChildIndex$$inline_276$$].getKey() ? $rightChildIndex$$inline_275$$ : 
        $leftChildIndex$$inline_274_smallerChildIndex$$inline_276$$;
        if ($count$$33_nodes$$inline_271$$[$leftChildIndex$$inline_274_smallerChildIndex$$inline_276$$].getKey() > $node$$inline_273$$.getKey()) {
          break;
        }
        $count$$33_nodes$$inline_271$$[$index$$inline_270_nodes$$2$$] = $count$$33_nodes$$inline_271$$[$leftChildIndex$$inline_274_smallerChildIndex$$inline_276$$];
        $index$$inline_270_nodes$$2$$ = $leftChildIndex$$inline_274_smallerChildIndex$$inline_276$$;
      }
      $count$$33_nodes$$inline_271$$[$index$$inline_270_nodes$$2$$] = $node$$inline_273$$;
    }
    return $rootNode$$.getValue();
  }
};
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
  for (var $nodes$$6$$ = this.$nodes_$, $rv$$13$$ = [], $l$$16$$ = $nodes$$6$$.length, $i$$95$$ = 0;$i$$95$$ < $l$$16$$;$i$$95$$++) {
    $rv$$13$$.push($nodes$$6$$[$i$$95$$].getValue());
  }
  return $rv$$13$$;
};
$JSCompiler_prototypeAlias$$.$getKeys$ = function $$JSCompiler_prototypeAlias$$$$getKeys$$() {
  for (var $nodes$$7$$ = this.$nodes_$, $rv$$14$$ = [], $l$$17$$ = $nodes$$7$$.length, $i$$96$$ = 0;$i$$96$$ < $l$$17$$;$i$$96$$++) {
    $rv$$14$$.push($nodes$$7$$[$i$$96$$].getKey());
  }
  return $rv$$14$$;
};
$JSCompiler_prototypeAlias$$.$containsKey$ = function $$JSCompiler_prototypeAlias$$$$containsKey$$($key$$67$$) {
  return $goog$array$some$$(this.$nodes_$, function($node$$9$$) {
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
$goog$structs$PriorityQueue$$.prototype.$enqueue$ = function $$goog$structs$PriorityQueue$$$$$enqueue$$($priority$$, $value$$106$$) {
  $JSCompiler_StaticMethods_insert$$(this, $priority$$, $value$$106$$);
};
$goog$structs$PriorityQueue$$.prototype.dequeue = function $$goog$structs$PriorityQueue$$$$dequeue$() {
  return this.remove();
};
function $goog$structs$Queue$$() {
  this.$front_$ = [];
  this.$back_$ = [];
}
$JSCompiler_prototypeAlias$$ = $goog$structs$Queue$$.prototype;
$JSCompiler_prototypeAlias$$.$enqueue$ = function $$JSCompiler_prototypeAlias$$$$enqueue$$($element$$31$$) {
  this.$back_$.push($element$$31$$);
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
  var $index$$67$$ = $goog$array$lastIndexOf$$(this.$front_$, $obj$$88$$);
  if (0 > $index$$67$$) {
    return $goog$array$remove$$(this.$back_$, $obj$$88$$);
  }
  $goog$array$removeAt$$(this.$front_$, $index$$67$$);
  return!0;
};
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
  for (var $res$$8$$ = [], $i$$97$$ = this.$front_$.length - 1;0 <= $i$$97$$;--$i$$97$$) {
    $res$$8$$.push(this.$front_$[$i$$97$$]);
  }
  for (var $len$$1$$ = this.$back_$.length, $i$$97$$ = 0;$i$$97$$ < $len$$1$$;++$i$$97$$) {
    $res$$8$$.push(this.$back_$[$i$$97$$]);
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
    for (var $rv$$15$$ = [], $l$$18$$ = $col$$1$$.length, $i$$98$$ = 0;$i$$98$$ < $l$$18$$;$i$$98$$++) {
      $rv$$15$$.push($col$$1$$[$i$$98$$]);
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
      var $keys$$7_rv$$inline_281$$;
      if ("function" == typeof $col$$6$$.$getKeys$) {
        $keys$$7_rv$$inline_281$$ = $col$$6$$.$getKeys$();
      } else {
        if ("function" != typeof $col$$6$$.$getValues$) {
          if ($goog$isArrayLike$$($col$$6$$) || $goog$isString$$($col$$6$$)) {
            $keys$$7_rv$$inline_281$$ = [];
            for (var $l$$inline_282_values$$8$$ = $col$$6$$.length, $i$$inline_283_l$$20$$ = 0;$i$$inline_283_l$$20$$ < $l$$inline_282_values$$8$$;$i$$inline_283_l$$20$$++) {
              $keys$$7_rv$$inline_281$$.push($i$$inline_283_l$$20$$);
            }
          } else {
            $keys$$7_rv$$inline_281$$ = $goog$object$getKeys$$($col$$6$$);
          }
        } else {
          $keys$$7_rv$$inline_281$$ = void 0;
        }
      }
      for (var $l$$inline_282_values$$8$$ = $goog$structs$getValues$$($col$$6$$), $i$$inline_283_l$$20$$ = $l$$inline_282_values$$8$$.length, $i$$100$$ = 0;$i$$100$$ < $i$$inline_283_l$$20$$;$i$$100$$++) {
        $f$$43$$.call(void 0, $l$$inline_282_values$$8$$[$i$$100$$], $keys$$7_rv$$inline_281$$ && $keys$$7_rv$$inline_281$$[$i$$100$$], $col$$6$$);
      }
    }
  }
}
;function $goog$structs$Set$$($opt_values$$1$$) {
  this.$map_$ = new $goog$structs$Map$$;
  $opt_values$$1$$ && this.$addAll$($opt_values$$1$$);
}
function $goog$structs$Set$getKey_$$($val$$34$$) {
  var $type$$96$$ = typeof $val$$34$$;
  return "object" == $type$$96$$ && $val$$34$$ || "function" == $type$$96$$ ? "o" + $goog$getUid$$($val$$34$$) : $type$$96$$.substr(0, 1) + $val$$34$$;
}
$JSCompiler_prototypeAlias$$ = $goog$structs$Set$$.prototype;
$JSCompiler_prototypeAlias$$.$getCount$ = function $$JSCompiler_prototypeAlias$$$$getCount$$() {
  return this.$map_$.$getCount$();
};
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($element$$32$$) {
  this.$map_$.set($goog$structs$Set$getKey_$$($element$$32$$), $element$$32$$);
};
$JSCompiler_prototypeAlias$$.$addAll$ = function $$JSCompiler_prototypeAlias$$$$addAll$$($col$$11_values$$13$$) {
  $col$$11_values$$13$$ = $goog$structs$getValues$$($col$$11_values$$13$$);
  for (var $l$$25$$ = $col$$11_values$$13$$.length, $i$$105$$ = 0;$i$$105$$ < $l$$25$$;$i$$105$$++) {
    this.add($col$$11_values$$13$$[$i$$105$$]);
  }
};
$JSCompiler_prototypeAlias$$.removeAll = function $$JSCompiler_prototypeAlias$$$removeAll$($col$$12_values$$14$$) {
  $col$$12_values$$14$$ = $goog$structs$getValues$$($col$$12_values$$14$$);
  for (var $l$$26$$ = $col$$12_values$$14$$.length, $i$$106$$ = 0;$i$$106$$ < $l$$26$$;$i$$106$$++) {
    this.remove($col$$12_values$$14$$[$i$$106$$]);
  }
};
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($element$$33$$) {
  return this.$map_$.remove($goog$structs$Set$getKey_$$($element$$33$$));
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$map_$.clear();
};
$JSCompiler_prototypeAlias$$.$isEmpty$ = function $$JSCompiler_prototypeAlias$$$$isEmpty$$() {
  return this.$map_$.$isEmpty$();
};
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($element$$34$$) {
  return this.$map_$.$containsKey$($goog$structs$Set$getKey_$$($element$$34$$));
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
    for (var $obj$$89_obj$$inline_286$$;0 < this.$freeQueue_$.$getCount$() && ($obj$$89_obj$$inline_286$$ = this.$freeQueue_$.dequeue(), !this.$objectCanBeReused$($obj$$89_obj$$inline_286$$));) {
      this.$adjustForMinMax$();
    }
    !$obj$$89_obj$$inline_286$$ && this.$getCount$() < this.$maxCount_$ && ($obj$$89_obj$$inline_286$$ = this.$createObject$());
    $obj$$89_obj$$inline_286$$ && (this.$lastAccess$ = $time$$1$$, this.$inUseSet_$.add($obj$$89_obj$$inline_286$$));
    return $obj$$89_obj$$inline_286$$;
  }
};
$JSCompiler_prototypeAlias$$.$addFreeObject$ = function $$JSCompiler_prototypeAlias$$$$addFreeObject$$($obj$$92$$) {
  this.$inUseSet_$.remove($obj$$92$$);
  this.$objectCanBeReused$($obj$$92$$) && this.$getCount$() < this.$maxCount_$ ? this.$freeQueue_$.$enqueue$($obj$$92$$) : $JSCompiler_StaticMethods_disposeObject$$($obj$$92$$);
};
$JSCompiler_prototypeAlias$$.$adjustForMinMax$ = function $$JSCompiler_prototypeAlias$$$$adjustForMinMax$$() {
  for (var $freeQueue$$ = this.$freeQueue_$;this.$getCount$() < this.$minCount_$;) {
    $freeQueue$$.$enqueue$(this.$createObject$());
  }
  for (;this.$getCount$() > this.$maxCount_$ && 0 < this.$freeQueue_$.$getCount$();) {
    $JSCompiler_StaticMethods_disposeObject$$($freeQueue$$.dequeue());
  }
};
$JSCompiler_prototypeAlias$$.$createObject$ = function $$JSCompiler_prototypeAlias$$$$createObject$$() {
  return{};
};
function $JSCompiler_StaticMethods_disposeObject$$($obj$$93$$) {
  if ("function" == typeof $obj$$93$$.$dispose$) {
    $obj$$93$$.$dispose$();
  } else {
    for (var $i$$108$$ in $obj$$93$$) {
      $obj$$93$$[$i$$108$$] = null;
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
  for (var $freeQueue$$1$$ = this.$freeQueue_$;!$freeQueue$$1$$.$isEmpty$();) {
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
    var $result$$17$$ = $goog$structs$PriorityPool$$.$superClass_$.$getObject$.call(this);
    $result$$17$$ && this.delay && (this.$delayTimeout_$ = $goog$global$$.setTimeout($goog$bind$$(this.$handleQueueRequests_$, this), this.delay));
    return $result$$17$$;
  }
  this.$requestQueue_$.$enqueue$($goog$isDef$$($opt_priority$$1$$) ? $opt_priority$$1$$ : 100, $opt_callback$$6$$);
  this.$handleQueueRequests_$();
};
$JSCompiler_prototypeAlias$$.$handleQueueRequests_$ = function $$JSCompiler_prototypeAlias$$$$handleQueueRequests_$$() {
  for (var $requestQueue$$ = this.$requestQueue_$;0 < $requestQueue$$.$getCount$();) {
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
  $goog$async$nextTick$$(function() {
    throw $exception$$1$$;
  });
}
function $goog$async$run$$($callback$$59$$, $opt_context$$7$$) {
  $goog$async$run$workQueueScheduled_$$ || ($goog$async$nextTick$$($goog$async$run$processWorkQueue$$), $goog$async$run$workQueueScheduled_$$ = !0);
  $goog$async$run$workQueue_$$.push(new $goog$async$run$WorkItem_$$($callback$$59$$, $opt_context$$7$$));
}
var $goog$async$run$workQueueScheduled_$$ = !1, $goog$async$run$workQueue_$$ = [];
function $goog$async$run$processWorkQueue$$() {
  for (;$goog$async$run$workQueue_$$.length;) {
    var $workItems$$ = $goog$async$run$workQueue_$$;
    $goog$async$run$workQueue_$$ = [];
    for (var $i$$110$$ = 0;$i$$110$$ < $workItems$$.length;$i$$110$$++) {
      var $workItem$$ = $workItems$$[$i$$110$$];
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
;function $goog$Promise$$($resolver$$1$$, $opt_context$$8$$) {
  this.$state_$ = $goog$Promise$State_$PENDING$$;
  this.$result_$ = void 0;
  this.$callbackEntries_$ = this.$parent_$ = null;
  this.$hadUnhandledRejection_$ = this.$executing_$ = !1;
  this.$stack_$ = [];
  $JSCompiler_StaticMethods_addStackTrace_$$(this, Error("created"));
  this.$currentStep_$ = 0;
  try {
    var $self$$1$$ = this;
    $resolver$$1$$.call($opt_context$$8$$, function($value$$109$$) {
      $JSCompiler_StaticMethods_resolve_$$($self$$1$$, $goog$Promise$State_$FULFILLED$$, $value$$109$$);
    }, function($reason$$) {
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
  this.$state_$ == $goog$Promise$State_$PENDING$$ && $goog$async$run$$(function() {
    var $err$$2$$ = new $goog$Promise$CancellationError$$($opt_message$$18$$);
    $JSCompiler_StaticMethods_cancelInternal_$$(this, $err$$2$$);
  }, this);
};
function $JSCompiler_StaticMethods_cancelInternal_$$($JSCompiler_StaticMethods_cancelInternal_$self$$, $err$$3$$) {
  if ($JSCompiler_StaticMethods_cancelInternal_$self$$.$state_$ == $goog$Promise$State_$PENDING$$) {
    if ($JSCompiler_StaticMethods_cancelInternal_$self$$.$parent_$) {
      var $JSCompiler_StaticMethods_cancelChild_$self$$inline_288$$ = $JSCompiler_StaticMethods_cancelInternal_$self$$.$parent_$;
      if ($JSCompiler_StaticMethods_cancelChild_$self$$inline_288$$.$callbackEntries_$) {
        for (var $callbackEntry$$inline_296_childCount$$inline_291$$ = 0, $childIndex$$inline_292$$ = -1, $i$$inline_293$$ = 0, $child$$inline_295_entry$$inline_294$$;$child$$inline_295_entry$$inline_294$$ = $JSCompiler_StaticMethods_cancelChild_$self$$inline_288$$.$callbackEntries_$[$i$$inline_293$$];$i$$inline_293$$++) {
          if ($child$$inline_295_entry$$inline_294$$ = $child$$inline_295_entry$$inline_294$$.$child$) {
            if ($callbackEntry$$inline_296_childCount$$inline_291$$++, $child$$inline_295_entry$$inline_294$$ == $JSCompiler_StaticMethods_cancelInternal_$self$$ && ($childIndex$$inline_292$$ = $i$$inline_293$$), 0 <= $childIndex$$inline_292$$ && 1 < $callbackEntry$$inline_296_childCount$$inline_291$$) {
              break;
            }
          }
        }
        0 <= $childIndex$$inline_292$$ && ($JSCompiler_StaticMethods_cancelChild_$self$$inline_288$$.$state_$ == $goog$Promise$State_$PENDING$$ && 1 == $callbackEntry$$inline_296_childCount$$inline_291$$ ? $JSCompiler_StaticMethods_cancelInternal_$$($JSCompiler_StaticMethods_cancelChild_$self$$inline_288$$, $err$$3$$) : ($callbackEntry$$inline_296_childCount$$inline_291$$ = $JSCompiler_StaticMethods_cancelChild_$self$$inline_288$$.$callbackEntries_$.splice($childIndex$$inline_292$$, 1)[0], $JSCompiler_StaticMethods_executeCallback_$$($JSCompiler_StaticMethods_cancelChild_$self$$inline_288$$, 
        $callbackEntry$$inline_296_childCount$$inline_291$$, $goog$Promise$State_$REJECTED$$, $err$$3$$)));
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
  var $callbackEntry$$2$$ = {$child$:null, $onFulfilled$:null, $onRejected$:null};
  $callbackEntry$$2$$.$child$ = new $goog$Promise$$(function($resolve$$6$$, $reject$$6$$) {
    $callbackEntry$$2$$.$onFulfilled$ = $onFulfilled$$ ? function($value$$112$$) {
      try {
        var $result$$18$$ = $onFulfilled$$.call($opt_context$$12$$, $value$$112$$);
        $resolve$$6$$($result$$18$$);
      } catch ($err$$5$$) {
        $reject$$6$$($err$$5$$);
      }
    } : $resolve$$6$$;
    $callbackEntry$$2$$.$onRejected$ = $onRejected$$1$$ ? function($reason$$3$$) {
      try {
        var $result$$19$$ = $onRejected$$1$$.call($opt_context$$12$$, $reason$$3$$);
        !$goog$isDef$$($result$$19$$) && $reason$$3$$ instanceof $goog$Promise$CancellationError$$ ? $reject$$6$$($reason$$3$$) : $resolve$$6$$($result$$19$$);
      } catch ($err$$6$$) {
        $reject$$6$$($err$$6$$);
      }
    } : $reject$$6$$;
  });
  $callbackEntry$$2$$.$child$.$parent_$ = $JSCompiler_StaticMethods_addChildPromise_$self$$;
  $JSCompiler_StaticMethods_addCallbackEntry_$$($JSCompiler_StaticMethods_addChildPromise_$self$$, $callbackEntry$$2$$);
  return $callbackEntry$$2$$.$child$;
}
$goog$Promise$$.prototype.$unblockAndFulfill_$ = function $$goog$Promise$$$$$unblockAndFulfill_$$($value$$113$$) {
  $goog$asserts$assert$$(1 == this.$state_$);
  this.$state_$ = $goog$Promise$State_$PENDING$$;
  $JSCompiler_StaticMethods_resolve_$$(this, $goog$Promise$State_$FULFILLED$$, $value$$113$$);
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
  function $resolve$$7$$($value$$114$$) {
    $called$$1$$ || ($called$$1$$ = !0, $JSCompiler_StaticMethods_tryThen_$self$$.$unblockAndFulfill_$($value$$114$$));
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
  for (;this.$callbackEntries_$ && this.$callbackEntries_$.length;) {
    var $entries$$ = this.$callbackEntries_$;
    this.$callbackEntries_$ = [];
    for (var $i$$115$$ = 0;$i$$115$$ < $entries$$.length;$i$$115$$++) {
      this.$currentStep_$++, $JSCompiler_StaticMethods_executeCallback_$$(this, $entries$$[$i$$115$$], this.$state_$, this.$result_$);
    }
  }
  this.$executing_$ = !1;
};
function $JSCompiler_StaticMethods_executeCallback_$$($JSCompiler_StaticMethods_executeCallback_$self_p$$inline_299$$, $callbackEntry$$3$$, $state$$2$$, $result$$20$$) {
  if ($state$$2$$ == $goog$Promise$State_$FULFILLED$$) {
    $callbackEntry$$3$$.$onFulfilled$($result$$20$$);
  } else {
    for (;$JSCompiler_StaticMethods_executeCallback_$self_p$$inline_299$$ && $JSCompiler_StaticMethods_executeCallback_$self_p$$inline_299$$.$hadUnhandledRejection_$;$JSCompiler_StaticMethods_executeCallback_$self_p$$inline_299$$ = $JSCompiler_StaticMethods_executeCallback_$self_p$$inline_299$$.$parent_$) {
      $JSCompiler_StaticMethods_executeCallback_$self_p$$inline_299$$.$hadUnhandledRejection_$ = !1;
    }
    $callbackEntry$$3$$.$onRejected$($result$$20$$);
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
  $goog$async$run$$(function() {
    if ($promise$$6$$.$hadUnhandledRejection_$) {
      if ($reason$$6$$ && $goog$isString$$($reason$$6$$.stack) && $promise$$6$$.$stack_$.length) {
        for (var $longTrace$$inline_303$$ = ["Promise trace:"], $promise$$inline_304$$ = $promise$$6$$;$promise$$inline_304$$;$promise$$inline_304$$ = $promise$$inline_304$$.$parent_$) {
          for (var $i$$inline_305$$ = $promise$$6$$.$currentStep_$;0 <= $i$$inline_305$$;$i$$inline_305$$--) {
            $longTrace$$inline_303$$.push($promise$$inline_304$$.$stack_$[$i$$inline_305$$]);
          }
          $longTrace$$inline_303$$.push("Value: [" + ($promise$$inline_304$$.$state_$ == $goog$Promise$State_$REJECTED$$ ? "REJECTED" : "FULFILLED") + "] <" + String($promise$$inline_304$$.$result_$) + ">");
        }
        $reason$$6$$.stack += "\n\n" + $longTrace$$inline_303$$.join("\n");
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
$goog$ui$IdGenerator$$.prototype.$getNextUniqueId$ = function $$goog$ui$IdGenerator$$$$$getNextUniqueId$$() {
  return ":" + (this.$nextId_$++).toString(36);
};
var $goog$userAgent$OPERA$$ = $goog$labs$userAgent$util$matchUserAgent$$("Opera") || $goog$labs$userAgent$util$matchUserAgent$$("OPR"), $goog$userAgent$IE$$ = $goog$labs$userAgent$util$matchUserAgent$$("Trident") || $goog$labs$userAgent$util$matchUserAgent$$("MSIE"), $goog$userAgent$GECKO$$ = $goog$labs$userAgent$util$matchUserAgent$$("Gecko") && !$goog$labs$userAgent$util$matchUserAgent$$("WebKit") && !($goog$labs$userAgent$util$matchUserAgent$$("Trident") || $goog$labs$userAgent$util$matchUserAgent$$("MSIE")), 
$goog$userAgent$WEBKIT$$ = $goog$labs$userAgent$util$matchUserAgent$$("WebKit");
function $goog$userAgent$getDocumentMode_$$() {
  var $doc$$5$$ = $goog$global$$.document;
  return $doc$$5$$ ? $doc$$5$$.documentMode : void 0;
}
var $goog$userAgent$VERSION$$ = function() {
  var $arr$$76_operaVersion_version$$11$$ = "", $docMode_re$$2$$;
  if ($goog$userAgent$OPERA$$ && $goog$global$$.opera) {
    return $arr$$76_operaVersion_version$$11$$ = $goog$global$$.opera.version, $goog$isFunction$$($arr$$76_operaVersion_version$$11$$) ? $arr$$76_operaVersion_version$$11$$() : $arr$$76_operaVersion_version$$11$$;
  }
  $goog$userAgent$GECKO$$ ? $docMode_re$$2$$ = /rv\:([^\);]+)(\)|;)/ : $goog$userAgent$IE$$ ? $docMode_re$$2$$ = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : $goog$userAgent$WEBKIT$$ && ($docMode_re$$2$$ = /WebKit\/(\S+)/);
  $docMode_re$$2$$ && ($arr$$76_operaVersion_version$$11$$ = ($arr$$76_operaVersion_version$$11$$ = $docMode_re$$2$$.exec($goog$labs$userAgent$util$userAgent_$$)) ? $arr$$76_operaVersion_version$$11$$[1] : "");
  return $goog$userAgent$IE$$ && ($docMode_re$$2$$ = $goog$userAgent$getDocumentMode_$$(), $docMode_re$$2$$ > parseFloat($arr$$76_operaVersion_version$$11$$)) ? String($docMode_re$$2$$) : $arr$$76_operaVersion_version$$11$$;
}(), $goog$userAgent$isVersionOrHigherCache_$$ = {};
function $goog$userAgent$isVersionOrHigher$$($version$$12$$) {
  var $JSCompiler_temp$$86_order$$inline_309$$;
  if (!($JSCompiler_temp$$86_order$$inline_309$$ = $goog$userAgent$isVersionOrHigherCache_$$[$version$$12$$])) {
    $JSCompiler_temp$$86_order$$inline_309$$ = 0;
    for (var $v1Subs$$inline_310$$ = $goog$string$trim$$(String($goog$userAgent$VERSION$$)).split("."), $v2Subs$$inline_311$$ = $goog$string$trim$$(String($version$$12$$)).split("."), $subCount$$inline_312$$ = Math.max($v1Subs$$inline_310$$.length, $v2Subs$$inline_311$$.length), $subIdx$$inline_313$$ = 0;0 == $JSCompiler_temp$$86_order$$inline_309$$ && $subIdx$$inline_313$$ < $subCount$$inline_312$$;$subIdx$$inline_313$$++) {
      var $v1Sub$$inline_314$$ = $v1Subs$$inline_310$$[$subIdx$$inline_313$$] || "", $v2Sub$$inline_315$$ = $v2Subs$$inline_311$$[$subIdx$$inline_313$$] || "", $v1CompParser$$inline_316$$ = RegExp("(\\d*)(\\D*)", "g"), $v2CompParser$$inline_317$$ = RegExp("(\\d*)(\\D*)", "g");
      do {
        var $v1Comp$$inline_318$$ = $v1CompParser$$inline_316$$.exec($v1Sub$$inline_314$$) || ["", "", ""], $v2Comp$$inline_319$$ = $v2CompParser$$inline_317$$.exec($v2Sub$$inline_315$$) || ["", "", ""];
        if (0 == $v1Comp$$inline_318$$[0].length && 0 == $v2Comp$$inline_319$$[0].length) {
          break;
        }
        $JSCompiler_temp$$86_order$$inline_309$$ = $goog$string$compareElements_$$(0 == $v1Comp$$inline_318$$[1].length ? 0 : parseInt($v1Comp$$inline_318$$[1], 10), 0 == $v2Comp$$inline_319$$[1].length ? 0 : parseInt($v2Comp$$inline_319$$[1], 10)) || $goog$string$compareElements_$$(0 == $v1Comp$$inline_318$$[2].length, 0 == $v2Comp$$inline_319$$[2].length) || $goog$string$compareElements_$$($v1Comp$$inline_318$$[2], $v2Comp$$inline_319$$[2]);
      } while (0 == $JSCompiler_temp$$86_order$$inline_309$$);
    }
    $JSCompiler_temp$$86_order$$inline_309$$ = $goog$userAgent$isVersionOrHigherCache_$$[$version$$12$$] = 0 <= $JSCompiler_temp$$86_order$$inline_309$$;
  }
  return $JSCompiler_temp$$86_order$$inline_309$$;
}
var $doc$$inline_321$$ = $goog$global$$.document, $goog$userAgent$DOCUMENT_MODE$$ = $doc$$inline_321$$ && $goog$userAgent$IE$$ ? $goog$userAgent$getDocumentMode_$$() || ("CSS1Compat" == $doc$$inline_321$$.compatMode ? parseInt($goog$userAgent$VERSION$$, 10) : 5) : void 0;
function $goog$debug$getStacktrace$$($opt_fn$$5$$) {
  var $stack$$3$$;
  $stack$$3$$ || ($stack$$3$$ = $goog$debug$getStacktraceHelper_$$($opt_fn$$5$$ || arguments.callee.caller, []));
  return $stack$$3$$;
}
function $goog$debug$getStacktraceHelper_$$($fn$$11$$, $visited$$) {
  var $sb$$11$$ = [];
  if ($goog$array$contains$$($visited$$, $fn$$11$$)) {
    $sb$$11$$.push("[...circular reference...]");
  } else {
    if ($fn$$11$$ && 50 > $visited$$.length) {
      $sb$$11$$.push($goog$debug$getFunctionName$$($fn$$11$$) + "(");
      for (var $args$$13$$ = $fn$$11$$.arguments, $i$$118$$ = 0;$args$$13$$ && $i$$118$$ < $args$$13$$.length;$i$$118$$++) {
        0 < $i$$118$$ && $sb$$11$$.push(", ");
        var $arg$$5_argDesc$$;
        $arg$$5_argDesc$$ = $args$$13$$[$i$$118$$];
        switch(typeof $arg$$5_argDesc$$) {
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
        $sb$$11$$.push($arg$$5_argDesc$$);
      }
      $visited$$.push($fn$$11$$);
      $sb$$11$$.push(")\n");
      try {
        $sb$$11$$.push($goog$debug$getStacktraceHelper_$$($fn$$11$$.caller, $visited$$));
      } catch ($e$$34$$) {
        $sb$$11$$.push("[exception trying to get caller]\n");
      }
    } else {
      $fn$$11$$ ? $sb$$11$$.push("[...long stack...]") : $sb$$11$$.push("[end]");
    }
  }
  return $sb$$11$$.join("");
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
function $goog$debug$Logger$$($name$$64$$) {
  this.$name_$ = $name$$64$$;
  this.$handlers_$ = this.$children_$ = this.$level_$ = this.$parent_$ = null;
}
function $goog$debug$Logger$Level$$($name$$65$$, $value$$115$$) {
  this.name = $name$$65$$;
  this.value = $value$$115$$;
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
$JSCompiler_prototypeAlias$$.log = function $$JSCompiler_prototypeAlias$$$log$($level$$15_logRecord$$inline_324$$, $msg$$5_msg$$inline_1081_target$$inline_325$$, $JSCompiler_StaticMethods_callPublish_$self$$inline_1083_opt_exception$$) {
  if ($level$$15_logRecord$$inline_324$$.value >= $JSCompiler_StaticMethods_getEffectiveLevel$$(this).value) {
    for ($goog$isFunction$$($msg$$5_msg$$inline_1081_target$$inline_325$$) && ($msg$$5_msg$$inline_1081_target$$inline_325$$ = $msg$$5_msg$$inline_1081_target$$inline_325$$()), $level$$15_logRecord$$inline_324$$ = this.$getLogRecord$($level$$15_logRecord$$inline_324$$, $msg$$5_msg$$inline_1081_target$$inline_325$$, $JSCompiler_StaticMethods_callPublish_$self$$inline_1083_opt_exception$$, $goog$debug$Logger$$.prototype.log), $msg$$5_msg$$inline_1081_target$$inline_325$$ = "log:" + $level$$15_logRecord$$inline_324$$.getMessage(), 
    $goog$global$$.console && ($goog$global$$.console.timeStamp ? $goog$global$$.console.timeStamp($msg$$5_msg$$inline_1081_target$$inline_325$$) : $goog$global$$.console.markTimeline && $goog$global$$.console.markTimeline($msg$$5_msg$$inline_1081_target$$inline_325$$)), $goog$global$$.msWriteProfilerMark && $goog$global$$.msWriteProfilerMark($msg$$5_msg$$inline_1081_target$$inline_325$$), $msg$$5_msg$$inline_1081_target$$inline_325$$ = this;$msg$$5_msg$$inline_1081_target$$inline_325$$;) {
      $JSCompiler_StaticMethods_callPublish_$self$$inline_1083_opt_exception$$ = $msg$$5_msg$$inline_1081_target$$inline_325$$;
      var $logRecord$$inline_1084$$ = $level$$15_logRecord$$inline_324$$;
      if ($JSCompiler_StaticMethods_callPublish_$self$$inline_1083_opt_exception$$.$handlers_$) {
        for (var $i$$inline_1085$$ = 0, $handler$$inline_1086$$ = void 0;$handler$$inline_1086$$ = $JSCompiler_StaticMethods_callPublish_$self$$inline_1083_opt_exception$$.$handlers_$[$i$$inline_1085$$];$i$$inline_1085$$++) {
          $handler$$inline_1086$$($logRecord$$inline_1084$$);
        }
      }
      $msg$$5_msg$$inline_1081_target$$inline_325$$ = $msg$$5_msg$$inline_1081_target$$inline_325$$.getParent();
    }
  }
};
$JSCompiler_prototypeAlias$$.$getLogRecord$ = function $$JSCompiler_prototypeAlias$$$$getLogRecord$$($level$$16_logRecord$$, $msg$$6_threwError$$inline_1092$$, $opt_exception$$1$$, $opt_fn$$inline_339_opt_fnStackContext$$) {
  $level$$16_logRecord$$ = new $goog$debug$LogRecord$$($level$$16_logRecord$$, String($msg$$6_threwError$$inline_1092$$), this.$name_$);
  if ($opt_exception$$1$$) {
    $level$$16_logRecord$$.$exception_$ = $opt_exception$$1$$;
    var $JSCompiler_inline_result$$61$$;
    $opt_fn$$inline_339_opt_fnStackContext$$ = $opt_fn$$inline_339_opt_fnStackContext$$ || $goog$debug$Logger$$.prototype.$getLogRecord$;
    try {
      var $e$$inline_340$$;
      var $href$$inline_1089$$ = $goog$getObjectByName$$("window.location.href");
      if ($goog$isString$$($opt_exception$$1$$)) {
        $e$$inline_340$$ = {message:$opt_exception$$1$$, name:"Unknown error", lineNumber:"Not available", fileName:$href$$inline_1089$$, stack:"Not available"};
      } else {
        var $lineNumber$$inline_1090$$, $fileName$$inline_1091$$;
        $msg$$6_threwError$$inline_1092$$ = !1;
        try {
          $lineNumber$$inline_1090$$ = $opt_exception$$1$$.lineNumber || $opt_exception$$1$$.$line$ || "Not available";
        } catch ($e$$inline_1093$$) {
          $lineNumber$$inline_1090$$ = "Not available", $msg$$6_threwError$$inline_1092$$ = !0;
        }
        try {
          $fileName$$inline_1091$$ = $opt_exception$$1$$.fileName || $opt_exception$$1$$.filename || $opt_exception$$1$$.sourceURL || $goog$global$$.$googDebugFname || $href$$inline_1089$$;
        } catch ($e$$inline_1094$$) {
          $fileName$$inline_1091$$ = "Not available", $msg$$6_threwError$$inline_1092$$ = !0;
        }
        $e$$inline_340$$ = !$msg$$6_threwError$$inline_1092$$ && $opt_exception$$1$$.lineNumber && $opt_exception$$1$$.fileName && $opt_exception$$1$$.stack && $opt_exception$$1$$.message && $opt_exception$$1$$.name ? $opt_exception$$1$$ : {message:$opt_exception$$1$$.message || "Not available", name:$opt_exception$$1$$.name || "UnknownError", lineNumber:$lineNumber$$inline_1090$$, fileName:$fileName$$inline_1091$$, stack:$opt_exception$$1$$.stack || "Not available"};
      }
      $JSCompiler_inline_result$$61$$ = "Message: " + $goog$string$htmlEscape$$($e$$inline_340$$.message) + '\nUrl: <a href="view-source:' + $e$$inline_340$$.fileName + '" target="_new">' + $e$$inline_340$$.fileName + "</a>\nLine: " + $e$$inline_340$$.lineNumber + "\n\nBrowser stack:\n" + $goog$string$htmlEscape$$($e$$inline_340$$.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + $goog$string$htmlEscape$$($goog$debug$getStacktrace$$($opt_fn$$inline_339_opt_fnStackContext$$) + "-> ");
    } catch ($e2$$inline_341$$) {
      $JSCompiler_inline_result$$61$$ = "Exception trying to expose exception! You win, we lose. " + $e2$$inline_341$$;
    }
    $level$$16_logRecord$$.$exceptionText_$ = $JSCompiler_inline_result$$61$$;
  }
  return $level$$16_logRecord$$;
};
$JSCompiler_prototypeAlias$$.info = function $$JSCompiler_prototypeAlias$$$info$($msg$$10$$, $opt_exception$$5$$) {
  this.log($goog$debug$Logger$Level$INFO$$, $msg$$10$$, $opt_exception$$5$$);
};
var $goog$debug$LogManager$loggers_$$ = {}, $goog$debug$LogManager$rootLogger_$$ = null;
function $goog$debug$LogManager$getLogger$$($name$$69$$) {
  $goog$debug$LogManager$rootLogger_$$ || ($goog$debug$LogManager$rootLogger_$$ = new $goog$debug$Logger$$(""), $goog$debug$LogManager$loggers_$$[""] = $goog$debug$LogManager$rootLogger_$$, $goog$debug$LogManager$rootLogger_$$.$setLevel$($goog$debug$Logger$Level$CONFIG$$));
  var $JSCompiler_temp$$5_logger$$inline_348$$;
  if (!($JSCompiler_temp$$5_logger$$inline_348$$ = $goog$debug$LogManager$loggers_$$[$name$$69$$])) {
    $JSCompiler_temp$$5_logger$$inline_348$$ = new $goog$debug$Logger$$($name$$69$$);
    var $lastDotIndex$$inline_349_parentLogger$$inline_351$$ = $name$$69$$.lastIndexOf("."), $leafName$$inline_350$$ = $name$$69$$.substr($lastDotIndex$$inline_349_parentLogger$$inline_351$$ + 1), $lastDotIndex$$inline_349_parentLogger$$inline_351$$ = $goog$debug$LogManager$getLogger$$($name$$69$$.substr(0, $lastDotIndex$$inline_349_parentLogger$$inline_351$$));
    $lastDotIndex$$inline_349_parentLogger$$inline_351$$.$getChildren$()[$leafName$$inline_350$$] = $JSCompiler_temp$$5_logger$$inline_348$$;
    $JSCompiler_temp$$5_logger$$inline_348$$.$parent_$ = $lastDotIndex$$inline_349_parentLogger$$inline_351$$;
    $goog$debug$LogManager$loggers_$$[$name$$69$$] = $JSCompiler_temp$$5_logger$$inline_348$$;
  }
  return $JSCompiler_temp$$5_logger$$inline_348$$;
}
;var $goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ = !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$, $goog$dom$BrowserFeature$CAN_USE_CHILDREN_ATTRIBUTE$$ = !$goog$userAgent$GECKO$$ && !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$ || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersionOrHigher$$("1.9.1"), $goog$dom$BrowserFeature$CAN_USE_INNER_TEXT$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersionOrHigher$$("9");
function $goog$dom$getDomHelper$$($opt_element$$10$$) {
  return $opt_element$$10$$ ? new $goog$dom$DomHelper$$($goog$dom$getOwnerDocument$$($opt_element$$10$$)) : $goog$dom$defaultDomHelper_$$ || ($goog$dom$defaultDomHelper_$$ = new $goog$dom$DomHelper$$);
}
function $goog$dom$getElementHelper_$$($doc$$7$$, $element$$36$$) {
  return $goog$isString$$($element$$36$$) ? $doc$$7$$.getElementById($element$$36$$) : $element$$36$$;
}
function $goog$dom$setProperties$$($element$$38$$, $properties$$7$$) {
  $goog$object$forEach$$($properties$$7$$, function($val$$35$$, $key$$68$$) {
    "style" == $key$$68$$ ? $element$$38$$.style.cssText = $val$$35$$ : "class" == $key$$68$$ ? $element$$38$$.className = $val$$35$$ : "for" == $key$$68$$ ? $element$$38$$.htmlFor = $val$$35$$ : $key$$68$$ in $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ ? $element$$38$$.setAttribute($goog$dom$DIRECT_ATTRIBUTE_MAP_$$[$key$$68$$], $val$$35$$) : 0 == $key$$68$$.lastIndexOf("aria-", 0) || 0 == $key$$68$$.lastIndexOf("data-", 0) ? $element$$38$$.setAttribute($key$$68$$, $val$$35$$) : $element$$38$$[$key$$68$$] = 
    $val$$35$$;
  });
}
var $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function $goog$dom$createDom$$($tagName$$6$$, $opt_attributes$$2$$, $var_args$$91$$) {
  var $args$$inline_356$$ = arguments, $doc$$inline_357$$ = document, $element$$inline_362_tagName$$inline_358_tagNameArr$$inline_360$$ = $args$$inline_356$$[0], $attributes$$inline_359$$ = $args$$inline_356$$[1];
  if (!$goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ && $attributes$$inline_359$$ && ($attributes$$inline_359$$.name || $attributes$$inline_359$$.type)) {
    $element$$inline_362_tagName$$inline_358_tagNameArr$$inline_360$$ = ["<", $element$$inline_362_tagName$$inline_358_tagNameArr$$inline_360$$];
    $attributes$$inline_359$$.name && $element$$inline_362_tagName$$inline_358_tagNameArr$$inline_360$$.push(' name="', $goog$string$htmlEscape$$($attributes$$inline_359$$.name), '"');
    if ($attributes$$inline_359$$.type) {
      $element$$inline_362_tagName$$inline_358_tagNameArr$$inline_360$$.push(' type="', $goog$string$htmlEscape$$($attributes$$inline_359$$.type), '"');
      var $clone$$inline_361$$ = {};
      $goog$object$extend$$($clone$$inline_361$$, $attributes$$inline_359$$);
      delete $clone$$inline_361$$.type;
      $attributes$$inline_359$$ = $clone$$inline_361$$;
    }
    $element$$inline_362_tagName$$inline_358_tagNameArr$$inline_360$$.push(">");
    $element$$inline_362_tagName$$inline_358_tagNameArr$$inline_360$$ = $element$$inline_362_tagName$$inline_358_tagNameArr$$inline_360$$.join("");
  }
  $element$$inline_362_tagName$$inline_358_tagNameArr$$inline_360$$ = $doc$$inline_357$$.createElement($element$$inline_362_tagName$$inline_358_tagNameArr$$inline_360$$);
  $attributes$$inline_359$$ && ($goog$isString$$($attributes$$inline_359$$) ? $element$$inline_362_tagName$$inline_358_tagNameArr$$inline_360$$.className = $attributes$$inline_359$$ : $goog$isArray$$($attributes$$inline_359$$) ? $element$$inline_362_tagName$$inline_358_tagNameArr$$inline_360$$.className = $attributes$$inline_359$$.join(" ") : $goog$dom$setProperties$$($element$$inline_362_tagName$$inline_358_tagNameArr$$inline_360$$, $attributes$$inline_359$$));
  2 < $args$$inline_356$$.length && $goog$dom$append_$$($doc$$inline_357$$, $element$$inline_362_tagName$$inline_358_tagNameArr$$inline_360$$, $args$$inline_356$$, 2);
  return $element$$inline_362_tagName$$inline_358_tagNameArr$$inline_360$$;
}
function $goog$dom$append_$$($doc$$16$$, $parent$$7$$, $args$$15$$, $i$$124_startIndex$$) {
  function $childHandler$$($child$$2$$) {
    $child$$2$$ && $parent$$7$$.appendChild($goog$isString$$($child$$2$$) ? $doc$$16$$.createTextNode($child$$2$$) : $child$$2$$);
  }
  for (;$i$$124_startIndex$$ < $args$$15$$.length;$i$$124_startIndex$$++) {
    var $arg$$6$$ = $args$$15$$[$i$$124_startIndex$$];
    !$goog$isArrayLike$$($arg$$6$$) || $goog$isObject$$($arg$$6$$) && 0 < $arg$$6$$.nodeType ? $childHandler$$($arg$$6$$) : $goog$array$forEach$$($goog$dom$isNodeList$$($arg$$6$$) ? $goog$array$toArray$$($arg$$6$$) : $arg$$6$$, $childHandler$$);
  }
}
function $goog$dom$htmlToDocumentFragment_$$($fragment_htmlString$$1$$) {
  var $doc$$18$$ = document, $tempDiv$$ = $doc$$18$$.createElement("div");
  $goog$userAgent$IE$$ ? ($tempDiv$$.innerHTML = "<br>" + $fragment_htmlString$$1$$, $tempDiv$$.removeChild($tempDiv$$.firstChild)) : $tempDiv$$.innerHTML = $fragment_htmlString$$1$$;
  if (1 == $tempDiv$$.childNodes.length) {
    return $tempDiv$$.removeChild($tempDiv$$.firstChild);
  }
  for ($fragment_htmlString$$1$$ = $doc$$18$$.createDocumentFragment();$tempDiv$$.firstChild;) {
    $fragment_htmlString$$1$$.appendChild($tempDiv$$.firstChild);
  }
  return $fragment_htmlString$$1$$;
}
function $goog$dom$removeChildren$$($node$$11$$) {
  for (var $child$$4$$;$child$$4$$ = $node$$11$$.firstChild;) {
    $node$$11$$.removeChild($child$$4$$);
  }
}
function $goog$dom$removeNode$$($node$$12$$) {
  $node$$12$$ && $node$$12$$.parentNode && $node$$12$$.parentNode.removeChild($node$$12$$);
}
function $goog$dom$getChildren$$($element$$41$$) {
  return $goog$dom$BrowserFeature$CAN_USE_CHILDREN_ATTRIBUTE$$ && void 0 != $element$$41$$.children ? $element$$41$$.children : $goog$array$filter$$($element$$41$$.childNodes, function($node$$13$$) {
    return 1 == $node$$13$$.nodeType;
  });
}
function $goog$dom$isElement$$($obj$$102$$) {
  return $goog$isObject$$($obj$$102$$) && 1 == $obj$$102$$.nodeType;
}
function $goog$dom$contains$$($parent$$14$$, $descendant$$) {
  if ($parent$$14$$.contains && 1 == $descendant$$.nodeType) {
    return $parent$$14$$ == $descendant$$ || $parent$$14$$.contains($descendant$$);
  }
  if ("undefined" != typeof $parent$$14$$.compareDocumentPosition) {
    return $parent$$14$$ == $descendant$$ || Boolean($parent$$14$$.compareDocumentPosition($descendant$$) & 16);
  }
  for (;$descendant$$ && $parent$$14$$ != $descendant$$;) {
    $descendant$$ = $descendant$$.parentNode;
  }
  return $descendant$$ == $parent$$14$$;
}
function $goog$dom$getOwnerDocument$$($node$$23$$) {
  $goog$asserts$assert$$($node$$23$$, "Node cannot be null or undefined.");
  return 9 == $node$$23$$.nodeType ? $node$$23$$ : $node$$23$$.ownerDocument || $node$$23$$.document;
}
function $goog$dom$setTextContent$$($node$$24$$, $text$$14$$) {
  $goog$asserts$assert$$(null != $node$$24$$, "goog.dom.setTextContent expects a non-null value for node");
  if ("textContent" in $node$$24$$) {
    $node$$24$$.textContent = $text$$14$$;
  } else {
    if (3 == $node$$24$$.nodeType) {
      $node$$24$$.data = $text$$14$$;
    } else {
      if ($node$$24$$.firstChild && 3 == $node$$24$$.firstChild.nodeType) {
        for (;$node$$24$$.lastChild != $node$$24$$.firstChild;) {
          $node$$24$$.removeChild($node$$24$$.lastChild);
        }
        $node$$24$$.firstChild.data = $text$$14$$;
      } else {
        $goog$dom$removeChildren$$($node$$24$$);
        var $doc$$22$$ = $goog$dom$getOwnerDocument$$($node$$24$$);
        $node$$24$$.appendChild($doc$$22$$.createTextNode(String($text$$14$$)));
      }
    }
  }
}
function $goog$dom$findNodes_$$($child$$7_root$$4$$, $p$$3$$, $rv$$21$$, $findOne$$) {
  if (null != $child$$7_root$$4$$) {
    for ($child$$7_root$$4$$ = $child$$7_root$$4$$.firstChild;$child$$7_root$$4$$;) {
      if ($p$$3$$($child$$7_root$$4$$) && ($rv$$21$$.push($child$$7_root$$4$$), $findOne$$) || $goog$dom$findNodes_$$($child$$7_root$$4$$, $p$$3$$, $rv$$21$$, $findOne$$)) {
        return!0;
      }
      $child$$7_root$$4$$ = $child$$7_root$$4$$.nextSibling;
    }
  }
  return!1;
}
var $goog$dom$TAGS_TO_IGNORE_$$ = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, $goog$dom$PREDEFINED_TAG_VALUES_$$ = {IMG:" ", BR:"\n"};
function $goog$dom$getTextContent$$($node$$25_textContent$$) {
  if ($goog$dom$BrowserFeature$CAN_USE_INNER_TEXT$$ && "innerText" in $node$$25_textContent$$) {
    $node$$25_textContent$$ = $node$$25_textContent$$.innerText.replace(/(\r\n|\r|\n)/g, "\n");
  } else {
    var $buf$$ = [];
    $goog$dom$getTextContent_$$($node$$25_textContent$$, $buf$$, !0);
    $node$$25_textContent$$ = $buf$$.join("");
  }
  $node$$25_textContent$$ = $node$$25_textContent$$.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  $node$$25_textContent$$ = $node$$25_textContent$$.replace(/\u200B/g, "");
  $goog$dom$BrowserFeature$CAN_USE_INNER_TEXT$$ || ($node$$25_textContent$$ = $node$$25_textContent$$.replace(/ +/g, " "));
  " " != $node$$25_textContent$$ && ($node$$25_textContent$$ = $node$$25_textContent$$.replace(/^\s*/, ""));
  return $node$$25_textContent$$;
}
function $goog$dom$getTextContent_$$($child$$8_node$$27$$, $buf$$2$$, $normalizeWhitespace$$) {
  if (!($child$$8_node$$27$$.nodeName in $goog$dom$TAGS_TO_IGNORE_$$)) {
    if (3 == $child$$8_node$$27$$.nodeType) {
      $normalizeWhitespace$$ ? $buf$$2$$.push(String($child$$8_node$$27$$.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : $buf$$2$$.push($child$$8_node$$27$$.nodeValue);
    } else {
      if ($child$$8_node$$27$$.nodeName in $goog$dom$PREDEFINED_TAG_VALUES_$$) {
        $buf$$2$$.push($goog$dom$PREDEFINED_TAG_VALUES_$$[$child$$8_node$$27$$.nodeName]);
      } else {
        for ($child$$8_node$$27$$ = $child$$8_node$$27$$.firstChild;$child$$8_node$$27$$;) {
          $goog$dom$getTextContent_$$($child$$8_node$$27$$, $buf$$2$$, $normalizeWhitespace$$), $child$$8_node$$27$$ = $child$$8_node$$27$$.nextSibling;
        }
      }
    }
  }
}
function $goog$dom$isNodeList$$($val$$36$$) {
  if ($val$$36$$ && "number" == typeof $val$$36$$.length) {
    if ($goog$isObject$$($val$$36$$)) {
      return "function" == typeof $val$$36$$.item || "string" == typeof $val$$36$$.item;
    }
    if ($goog$isFunction$$($val$$36$$)) {
      return "function" == typeof $val$$36$$.item;
    }
  }
  return!1;
}
function $goog$dom$DomHelper$$($opt_document$$1$$) {
  this.$document_$ = $opt_document$$1$$ || $goog$global$$.document || document;
}
$JSCompiler_prototypeAlias$$ = $goog$dom$DomHelper$$.prototype;
$JSCompiler_prototypeAlias$$.createElement = function $$JSCompiler_prototypeAlias$$$createElement$($name$$72$$) {
  return this.$document_$.createElement($name$$72$$);
};
$JSCompiler_prototypeAlias$$.createTextNode = function $$JSCompiler_prototypeAlias$$$createTextNode$($content$$7$$) {
  return this.$document_$.createTextNode(String($content$$7$$));
};
$JSCompiler_prototypeAlias$$.$getWindow$ = function $$JSCompiler_prototypeAlias$$$$getWindow$$() {
  var $doc$$inline_1277$$ = this.$document_$;
  return $doc$$inline_1277$$.parentWindow || $doc$$inline_1277$$.defaultView;
};
$JSCompiler_prototypeAlias$$.appendChild = function $$JSCompiler_prototypeAlias$$$appendChild$($parent$$8$$, $child$$3$$) {
  $parent$$8$$.appendChild($child$$3$$);
};
$JSCompiler_prototypeAlias$$.append = function $$JSCompiler_prototypeAlias$$$append$($parent$$9$$, $var_args$$92$$) {
  $goog$dom$append_$$($goog$dom$getOwnerDocument$$($parent$$9$$), $parent$$9$$, arguments, 1);
};
$JSCompiler_prototypeAlias$$.$getChildren$ = $goog$dom$getChildren$$;
$JSCompiler_prototypeAlias$$.contains = $goog$dom$contains$$;
function $goog$dom$xml$loadXml$$($xml$$2$$) {
  if ("undefined" != typeof DOMParser) {
    return(new DOMParser).parseFromString($xml$$2$$, "application/xml");
  }
  if ("undefined" != typeof ActiveXObject) {
    var $doc$$inline_364$$ = new ActiveXObject("MSXML2.DOMDocument");
    if ($doc$$inline_364$$) {
      $doc$$inline_364$$.resolveExternals = !1;
      $doc$$inline_364$$.validateOnParse = !1;
      try {
        $doc$$inline_364$$.setProperty("ProhibitDTD", !0), $doc$$inline_364$$.setProperty("MaxXMLSize", 2048), $doc$$inline_364$$.setProperty("MaxElementDepth", 256);
      } catch ($e$$inline_365$$) {
      }
    }
    $doc$$inline_364$$.loadXML($xml$$2$$);
    return $doc$$inline_364$$;
  }
  throw Error("Your browser does not support loading xml documents");
}
;var $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ = !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$, $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersionOrHigher$$("9");
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
$goog$events$BrowserEvent$$.prototype.$init$ = function $$goog$events$BrowserEvent$$$$$init$$($e$$39$$, $opt_currentTarget$$1$$) {
  var $type$$97$$ = this.type = $e$$39$$.type;
  this.target = $e$$39$$.target || $e$$39$$.srcElement;
  this.currentTarget = $opt_currentTarget$$1$$;
  var $relatedTarget$$ = $e$$39$$.relatedTarget;
  $relatedTarget$$ ? $goog$userAgent$GECKO$$ && ($goog$reflect$canAccessProperty$$($relatedTarget$$, "nodeName") || ($relatedTarget$$ = null)) : "mouseover" == $type$$97$$ ? $relatedTarget$$ = $e$$39$$.fromElement : "mouseout" == $type$$97$$ && ($relatedTarget$$ = $e$$39$$.toElement);
  this.relatedTarget = $relatedTarget$$;
  this.offsetX = $goog$userAgent$WEBKIT$$ || void 0 !== $e$$39$$.offsetX ? $e$$39$$.offsetX : $e$$39$$.layerX;
  this.offsetY = $goog$userAgent$WEBKIT$$ || void 0 !== $e$$39$$.offsetY ? $e$$39$$.offsetY : $e$$39$$.layerY;
  this.clientX = void 0 !== $e$$39$$.clientX ? $e$$39$$.clientX : $e$$39$$.pageX;
  this.clientY = void 0 !== $e$$39$$.clientY ? $e$$39$$.clientY : $e$$39$$.pageY;
  this.screenX = $e$$39$$.screenX || 0;
  this.screenY = $e$$39$$.screenY || 0;
  this.button = $e$$39$$.button;
  this.keyCode = $e$$39$$.keyCode || 0;
  this.charCode = $e$$39$$.charCode || ("keypress" == $type$$97$$ ? $e$$39$$.keyCode : 0);
  this.ctrlKey = $e$$39$$.ctrlKey;
  this.altKey = $e$$39$$.altKey;
  this.shiftKey = $e$$39$$.shiftKey;
  this.metaKey = $e$$39$$.metaKey;
  this.state = $e$$39$$.state;
  this.$event_$ = $e$$39$$;
  $e$$39$$.defaultPrevented && this.preventDefault();
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
function $goog$events$listen$$($src$$6$$, $type$$98$$, $listener$$49$$, $opt_capt$$, $opt_handler$$1$$) {
  if ($goog$isArray$$($type$$98$$)) {
    for (var $i$$132$$ = 0;$i$$132$$ < $type$$98$$.length;$i$$132$$++) {
      $goog$events$listen$$($src$$6$$, $type$$98$$[$i$$132$$], $listener$$49$$, $opt_capt$$, $opt_handler$$1$$);
    }
    return null;
  }
  $listener$$49$$ = $goog$events$wrapListener$$($listener$$49$$);
  return $goog$events$Listenable$isImplementedBy$$($src$$6$$) ? $src$$6$$.$listen$($type$$98$$, $listener$$49$$, $opt_capt$$, $opt_handler$$1$$) : $goog$events$listen_$$($src$$6$$, $type$$98$$, $listener$$49$$, !1, $opt_capt$$, $opt_handler$$1$$);
}
function $goog$events$listen_$$($src$$7$$, $type$$99$$, $listener$$50_listenerObj$$4$$, $callOnce$$1_proxy$$1$$, $opt_capt$$1$$, $opt_handler$$2$$) {
  if (!$type$$99$$) {
    throw Error("Invalid event type");
  }
  var $capture$$3$$ = !!$opt_capt$$1$$, $listenerMap$$ = $goog$events$getListenerMap_$$($src$$7$$);
  $listenerMap$$ || ($src$$7$$[$goog$events$LISTENER_MAP_PROP_$$] = $listenerMap$$ = new $goog$events$ListenerMap$$($src$$7$$));
  $listener$$50_listenerObj$$4$$ = $listenerMap$$.add($type$$99$$, $listener$$50_listenerObj$$4$$, $callOnce$$1_proxy$$1$$, $opt_capt$$1$$, $opt_handler$$2$$);
  if ($listener$$50_listenerObj$$4$$.proxy) {
    return $listener$$50_listenerObj$$4$$;
  }
  $callOnce$$1_proxy$$1$$ = $goog$events$getProxy$$();
  $listener$$50_listenerObj$$4$$.proxy = $callOnce$$1_proxy$$1$$;
  $callOnce$$1_proxy$$1$$.src = $src$$7$$;
  $callOnce$$1_proxy$$1$$.$listener$ = $listener$$50_listenerObj$$4$$;
  $src$$7$$.addEventListener ? $src$$7$$.addEventListener($type$$99$$.toString(), $callOnce$$1_proxy$$1$$, $capture$$3$$) : $src$$7$$.attachEvent($goog$events$getOnString_$$($type$$99$$.toString()), $callOnce$$1_proxy$$1$$);
  $goog$events$listenerCountEstimate_$$++;
  return $listener$$50_listenerObj$$4$$;
}
function $goog$events$getProxy$$() {
  var $proxyCallbackFunction$$ = $goog$events$handleBrowserEvent_$$, $f$$48$$ = $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ ? function($eventObject$$) {
    return $proxyCallbackFunction$$.call($f$$48$$.src, $f$$48$$.$listener$, $eventObject$$);
  } : function($eventObject$$1_v$$1$$) {
    $eventObject$$1_v$$1$$ = $proxyCallbackFunction$$.call($f$$48$$.src, $f$$48$$.$listener$, $eventObject$$1_v$$1$$);
    if (!$eventObject$$1_v$$1$$) {
      return $eventObject$$1_v$$1$$;
    }
  };
  return $f$$48$$;
}
function $goog$events$listenOnce$$($src$$8$$, $type$$100$$, $listener$$51$$, $opt_capt$$2$$, $opt_handler$$3$$) {
  if ($goog$isArray$$($type$$100$$)) {
    for (var $i$$133$$ = 0;$i$$133$$ < $type$$100$$.length;$i$$133$$++) {
      $goog$events$listenOnce$$($src$$8$$, $type$$100$$[$i$$133$$], $listener$$51$$, $opt_capt$$2$$, $opt_handler$$3$$);
    }
    return null;
  }
  $listener$$51$$ = $goog$events$wrapListener$$($listener$$51$$);
  return $goog$events$Listenable$isImplementedBy$$($src$$8$$) ? $src$$8$$.$listenOnce$($type$$100$$, $listener$$51$$, $opt_capt$$2$$, $opt_handler$$3$$) : $goog$events$listen_$$($src$$8$$, $type$$100$$, $listener$$51$$, !0, $opt_capt$$2$$, $opt_handler$$3$$);
}
function $goog$events$unlisten$$($listenerMap$$1_src$$10$$, $listenerObj$$5_type$$101$$, $listener$$53$$, $opt_capt$$4$$, $opt_handler$$5$$) {
  if ($goog$isArray$$($listenerObj$$5_type$$101$$)) {
    for (var $i$$134$$ = 0;$i$$134$$ < $listenerObj$$5_type$$101$$.length;$i$$134$$++) {
      $goog$events$unlisten$$($listenerMap$$1_src$$10$$, $listenerObj$$5_type$$101$$[$i$$134$$], $listener$$53$$, $opt_capt$$4$$, $opt_handler$$5$$);
    }
    return null;
  }
  $listener$$53$$ = $goog$events$wrapListener$$($listener$$53$$);
  if ($goog$events$Listenable$isImplementedBy$$($listenerMap$$1_src$$10$$)) {
    return $listenerMap$$1_src$$10$$.$unlisten$($listenerObj$$5_type$$101$$, $listener$$53$$, $opt_capt$$4$$, $opt_handler$$5$$);
  }
  if (!$listenerMap$$1_src$$10$$) {
    return!1;
  }
  if ($listenerMap$$1_src$$10$$ = $goog$events$getListenerMap_$$($listenerMap$$1_src$$10$$)) {
    if ($listenerObj$$5_type$$101$$ = $listenerMap$$1_src$$10$$.$getListener$($listenerObj$$5_type$$101$$, $listener$$53$$, !!$opt_capt$$4$$, $opt_handler$$5$$)) {
      return $goog$events$unlistenByKey$$($listenerObj$$5_type$$101$$);
    }
  }
  return!1;
}
function $goog$events$unlistenByKey$$($key$$70$$) {
  if ($goog$isNumber$$($key$$70$$) || !$key$$70$$ || $key$$70$$.$removed$) {
    return!1;
  }
  var $src$$11$$ = $key$$70$$.src;
  if ($goog$events$Listenable$isImplementedBy$$($src$$11$$)) {
    return $JSCompiler_StaticMethods_removeByKey$$($src$$11$$.$eventTargetListeners_$, $key$$70$$);
  }
  var $listenerMap$$2_type$$102$$ = $key$$70$$.type, $proxy$$2$$ = $key$$70$$.proxy;
  $src$$11$$.removeEventListener ? $src$$11$$.removeEventListener($listenerMap$$2_type$$102$$, $proxy$$2$$, $key$$70$$.$capture$) : $src$$11$$.detachEvent && $src$$11$$.detachEvent($goog$events$getOnString_$$($listenerMap$$2_type$$102$$), $proxy$$2$$);
  $goog$events$listenerCountEstimate_$$--;
  ($listenerMap$$2_type$$102$$ = $goog$events$getListenerMap_$$($src$$11$$)) ? ($JSCompiler_StaticMethods_removeByKey$$($listenerMap$$2_type$$102$$, $key$$70$$), 0 == $listenerMap$$2_type$$102$$.$typeCount_$ && ($listenerMap$$2_type$$102$$.src = null, $src$$11$$[$goog$events$LISTENER_MAP_PROP_$$] = null)) : $JSCompiler_StaticMethods_markAsRemoved$$($key$$70$$);
  return!0;
}
function $goog$events$getListener$$($listenerMap$$5_src$$13$$, $type$$105$$, $listener$$56$$, $capture$$6_opt_capt$$6$$, $opt_handler$$7$$) {
  $listener$$56$$ = $goog$events$wrapListener$$($listener$$56$$);
  $capture$$6_opt_capt$$6$$ = !!$capture$$6_opt_capt$$6$$;
  return $goog$events$Listenable$isImplementedBy$$($listenerMap$$5_src$$13$$) ? $listenerMap$$5_src$$13$$.$getListener$($type$$105$$, $listener$$56$$, $capture$$6_opt_capt$$6$$, $opt_handler$$7$$) : $listenerMap$$5_src$$13$$ ? ($listenerMap$$5_src$$13$$ = $goog$events$getListenerMap_$$($listenerMap$$5_src$$13$$)) ? $listenerMap$$5_src$$13$$.$getListener$($type$$105$$, $listener$$56$$, $capture$$6_opt_capt$$6$$, $opt_handler$$7$$) : null : null;
}
function $goog$events$getOnString_$$($type$$106$$) {
  return $type$$106$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$$106$$] : $goog$events$onStringMap_$$[$type$$106$$] = "on" + $type$$106$$;
}
function $goog$events$fireListeners_$$($i$$136_listenerMap$$7_obj$$108$$, $listenerArray$$7_type$$108$$, $capture$$8$$, $eventObject$$3$$) {
  var $retval$$ = 1;
  if ($i$$136_listenerMap$$7_obj$$108$$ = $goog$events$getListenerMap_$$($i$$136_listenerMap$$7_obj$$108$$)) {
    if ($listenerArray$$7_type$$108$$ = $i$$136_listenerMap$$7_obj$$108$$.$listeners$[$listenerArray$$7_type$$108$$.toString()]) {
      for ($listenerArray$$7_type$$108$$ = $listenerArray$$7_type$$108$$.concat(), $i$$136_listenerMap$$7_obj$$108$$ = 0;$i$$136_listenerMap$$7_obj$$108$$ < $listenerArray$$7_type$$108$$.length;$i$$136_listenerMap$$7_obj$$108$$++) {
        var $listener$$57$$ = $listenerArray$$7_type$$108$$[$i$$136_listenerMap$$7_obj$$108$$];
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
function $goog$events$dispatchEvent$$($src$$14$$, $e$$41$$) {
  $goog$asserts$assert$$($goog$events$Listenable$isImplementedBy$$($src$$14$$), "Can not use goog.events.dispatchEvent with non-goog.events.Listenable instance.");
  $src$$14$$.dispatchEvent($e$$41$$);
}
function $goog$events$handleBrowserEvent_$$($listener$$59$$, $opt_evt$$) {
  if ($listener$$59$$.$removed$) {
    return!0;
  }
  if (!$goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$) {
    var $ancestors$$1_ieEvent$$ = $opt_evt$$ || $goog$getObjectByName$$("window.event"), $evt$$21$$ = new $goog$events$BrowserEvent$$($ancestors$$1_ieEvent$$, this), $retval$$1$$ = !0;
    if (!(0 > $ancestors$$1_ieEvent$$.keyCode || void 0 != $ancestors$$1_ieEvent$$.returnValue)) {
      a: {
        var $parent$$17_type$$109_useReturnValue$$inline_368$$ = !1;
        if (0 == $ancestors$$1_ieEvent$$.keyCode) {
          try {
            $ancestors$$1_ieEvent$$.keyCode = -1;
            break a;
          } catch ($ex$$inline_369$$) {
            $parent$$17_type$$109_useReturnValue$$inline_368$$ = !0;
          }
        }
        if ($parent$$17_type$$109_useReturnValue$$inline_368$$ || void 0 == $ancestors$$1_ieEvent$$.returnValue) {
          $ancestors$$1_ieEvent$$.returnValue = !0;
        }
      }
      $ancestors$$1_ieEvent$$ = [];
      for ($parent$$17_type$$109_useReturnValue$$inline_368$$ = $evt$$21$$.currentTarget;$parent$$17_type$$109_useReturnValue$$inline_368$$;$parent$$17_type$$109_useReturnValue$$inline_368$$ = $parent$$17_type$$109_useReturnValue$$inline_368$$.parentNode) {
        $ancestors$$1_ieEvent$$.push($parent$$17_type$$109_useReturnValue$$inline_368$$);
      }
      for (var $parent$$17_type$$109_useReturnValue$$inline_368$$ = $listener$$59$$.type, $i$$137$$ = $ancestors$$1_ieEvent$$.length - 1;!$evt$$21$$.$propagationStopped_$ && 0 <= $i$$137$$;$i$$137$$--) {
        $evt$$21$$.currentTarget = $ancestors$$1_ieEvent$$[$i$$137$$], $retval$$1$$ &= $goog$events$fireListeners_$$($ancestors$$1_ieEvent$$[$i$$137$$], $parent$$17_type$$109_useReturnValue$$inline_368$$, !0, $evt$$21$$);
      }
      for ($i$$137$$ = 0;!$evt$$21$$.$propagationStopped_$ && $i$$137$$ < $ancestors$$1_ieEvent$$.length;$i$$137$$++) {
        $evt$$21$$.currentTarget = $ancestors$$1_ieEvent$$[$i$$137$$], $retval$$1$$ &= $goog$events$fireListeners_$$($ancestors$$1_ieEvent$$[$i$$137$$], $parent$$17_type$$109_useReturnValue$$inline_368$$, !1, $evt$$21$$);
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
  return $listener$$60$$[$goog$events$LISTENER_WRAPPER_PROP_$$] || ($listener$$60$$[$goog$events$LISTENER_WRAPPER_PROP_$$] = function $$listener$$60$$$$goog$events$LISTENER_WRAPPER_PROP_$$$($e$$44$$) {
    return $listener$$60$$.handleEvent($e$$44$$);
  });
}
;function $goog$events$EventHandler$$($opt_scope$$1$$) {
  $goog$Disposable$$.call(this);
  this.$handler_$ = $opt_scope$$1$$;
  this.$keys_$ = {};
}
$goog$inherits$$($goog$events$EventHandler$$, $goog$Disposable$$);
var $goog$events$EventHandler$typeArray_$$ = [];
$JSCompiler_prototypeAlias$$ = $goog$events$EventHandler$$.prototype;
$JSCompiler_prototypeAlias$$.$listen$ = function $$JSCompiler_prototypeAlias$$$$listen$$($src$$16$$, $type$$110_type$$inline_373$$, $opt_fn$$6$$, $opt_capture$$2$$) {
  $goog$isArray$$($type$$110_type$$inline_373$$) || ($type$$110_type$$inline_373$$ && ($goog$events$EventHandler$typeArray_$$[0] = $type$$110_type$$inline_373$$.toString()), $type$$110_type$$inline_373$$ = $goog$events$EventHandler$typeArray_$$);
  for (var $i$$inline_377$$ = 0;$i$$inline_377$$ < $type$$110_type$$inline_373$$.length;$i$$inline_377$$++) {
    var $listenerObj$$inline_378$$ = $goog$events$listen$$($src$$16$$, $type$$110_type$$inline_373$$[$i$$inline_377$$], $opt_fn$$6$$ || this.handleEvent, $opt_capture$$2$$ || !1, this.$handler_$ || this);
    if (!$listenerObj$$inline_378$$) {
      break;
    }
    this.$keys_$[$listenerObj$$inline_378$$.key] = $listenerObj$$inline_378$$;
  }
  return this;
};
$JSCompiler_prototypeAlias$$.$listenOnce$ = function $$JSCompiler_prototypeAlias$$$$listenOnce$$($src$$19$$, $type$$113$$, $opt_fn$$8$$, $opt_capture$$4$$) {
  return $JSCompiler_StaticMethods_listenOnce_$$(this, $src$$19$$, $type$$113$$, $opt_fn$$8$$, $opt_capture$$4$$);
};
function $JSCompiler_StaticMethods_listenOnce_$$($JSCompiler_StaticMethods_listenOnce_$self$$, $listenerObj$$7_src$$21$$, $type$$115$$, $opt_fn$$9$$, $opt_capture$$5$$, $opt_scope$$3$$) {
  if ($goog$isArray$$($type$$115$$)) {
    for (var $i$$139$$ = 0;$i$$139$$ < $type$$115$$.length;$i$$139$$++) {
      $JSCompiler_StaticMethods_listenOnce_$$($JSCompiler_StaticMethods_listenOnce_$self$$, $listenerObj$$7_src$$21$$, $type$$115$$[$i$$139$$], $opt_fn$$9$$, $opt_capture$$5$$, $opt_scope$$3$$);
    }
  } else {
    $listenerObj$$7_src$$21$$ = $goog$events$listenOnce$$($listenerObj$$7_src$$21$$, $type$$115$$, $opt_fn$$9$$ || $JSCompiler_StaticMethods_listenOnce_$self$$.handleEvent, $opt_capture$$5$$, $opt_scope$$3$$ || $JSCompiler_StaticMethods_listenOnce_$self$$.$handler_$ || $JSCompiler_StaticMethods_listenOnce_$self$$);
    if (!$listenerObj$$7_src$$21$$) {
      return $JSCompiler_StaticMethods_listenOnce_$self$$;
    }
    $JSCompiler_StaticMethods_listenOnce_$self$$.$keys_$[$listenerObj$$7_src$$21$$.key] = $listenerObj$$7_src$$21$$;
  }
  return $JSCompiler_StaticMethods_listenOnce_$self$$;
}
$JSCompiler_prototypeAlias$$.$unlisten$ = function $$JSCompiler_prototypeAlias$$$$unlisten$$($listener$$65_src$$25$$, $type$$116$$, $opt_fn$$10$$, $opt_capture$$6$$, $opt_scope$$5$$) {
  if ($goog$isArray$$($type$$116$$)) {
    for (var $i$$140$$ = 0;$i$$140$$ < $type$$116$$.length;$i$$140$$++) {
      this.$unlisten$($listener$$65_src$$25$$, $type$$116$$[$i$$140$$], $opt_fn$$10$$, $opt_capture$$6$$, $opt_scope$$5$$);
    }
  } else {
    if ($listener$$65_src$$25$$ = $goog$events$getListener$$($listener$$65_src$$25$$, $type$$116$$, $opt_fn$$10$$ || this.handleEvent, $opt_capture$$6$$, $opt_scope$$5$$ || this.$handler_$ || this)) {
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
$JSCompiler_prototypeAlias$$.addEventListener = function $$JSCompiler_prototypeAlias$$$addEventListener$($type$$117$$, $handler$$45$$, $opt_capture$$7$$, $opt_handlerScope$$) {
  $goog$events$listen$$(this, $type$$117$$, $handler$$45$$, $opt_capture$$7$$, $opt_handlerScope$$);
};
$JSCompiler_prototypeAlias$$.removeEventListener = function $$JSCompiler_prototypeAlias$$$removeEventListener$($type$$118$$, $handler$$46$$, $opt_capture$$8$$, $opt_handlerScope$$1$$) {
  $goog$events$unlisten$$(this, $type$$118$$, $handler$$46$$, $opt_capture$$8$$, $opt_handlerScope$$1$$);
};
$JSCompiler_prototypeAlias$$.dispatchEvent = function $$JSCompiler_prototypeAlias$$$dispatchEvent$($e$$46_e$$inline_383$$) {
  $JSCompiler_StaticMethods_assertInitialized_$$(this);
  var $ancestorsTree_opt_ancestorsTree$$inline_384$$, $ancestor_target$$inline_382$$ = this.$parentEventTarget_$;
  if ($ancestor_target$$inline_382$$) {
    $ancestorsTree_opt_ancestorsTree$$inline_384$$ = [];
    for (var $ancestorCount_type$$inline_385$$ = 1;$ancestor_target$$inline_382$$;$ancestor_target$$inline_382$$ = $ancestor_target$$inline_382$$.$parentEventTarget_$) {
      $ancestorsTree_opt_ancestorsTree$$inline_384$$.push($ancestor_target$$inline_382$$), $goog$asserts$assert$$(1E3 > ++$ancestorCount_type$$inline_385$$, "infinite loop");
    }
  }
  $ancestor_target$$inline_382$$ = this.$actualEventTarget_$;
  $ancestorCount_type$$inline_385$$ = $e$$46_e$$inline_383$$.type || $e$$46_e$$inline_383$$;
  if ($goog$isString$$($e$$46_e$$inline_383$$)) {
    $e$$46_e$$inline_383$$ = new $goog$events$Event$$($e$$46_e$$inline_383$$, $ancestor_target$$inline_382$$);
  } else {
    if ($e$$46_e$$inline_383$$ instanceof $goog$events$Event$$) {
      $e$$46_e$$inline_383$$.target = $e$$46_e$$inline_383$$.target || $ancestor_target$$inline_382$$;
    } else {
      var $oldEvent$$inline_386_rv$$inline_387$$ = $e$$46_e$$inline_383$$;
      $e$$46_e$$inline_383$$ = new $goog$events$Event$$($ancestorCount_type$$inline_385$$, $ancestor_target$$inline_382$$);
      $goog$object$extend$$($e$$46_e$$inline_383$$, $oldEvent$$inline_386_rv$$inline_387$$);
    }
  }
  var $oldEvent$$inline_386_rv$$inline_387$$ = !0, $currentTarget$$inline_388$$;
  if ($ancestorsTree_opt_ancestorsTree$$inline_384$$) {
    for (var $i$$inline_389$$ = $ancestorsTree_opt_ancestorsTree$$inline_384$$.length - 1;!$e$$46_e$$inline_383$$.$propagationStopped_$ && 0 <= $i$$inline_389$$;$i$$inline_389$$--) {
      $currentTarget$$inline_388$$ = $e$$46_e$$inline_383$$.currentTarget = $ancestorsTree_opt_ancestorsTree$$inline_384$$[$i$$inline_389$$], $oldEvent$$inline_386_rv$$inline_387$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$$inline_388$$, $ancestorCount_type$$inline_385$$, !0, $e$$46_e$$inline_383$$) && $oldEvent$$inline_386_rv$$inline_387$$;
    }
  }
  $e$$46_e$$inline_383$$.$propagationStopped_$ || ($currentTarget$$inline_388$$ = $e$$46_e$$inline_383$$.currentTarget = $ancestor_target$$inline_382$$, $oldEvent$$inline_386_rv$$inline_387$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$$inline_388$$, $ancestorCount_type$$inline_385$$, !0, $e$$46_e$$inline_383$$) && $oldEvent$$inline_386_rv$$inline_387$$, $e$$46_e$$inline_383$$.$propagationStopped_$ || ($oldEvent$$inline_386_rv$$inline_387$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$$inline_388$$, 
  $ancestorCount_type$$inline_385$$, !1, $e$$46_e$$inline_383$$) && $oldEvent$$inline_386_rv$$inline_387$$));
  if ($ancestorsTree_opt_ancestorsTree$$inline_384$$) {
    for ($i$$inline_389$$ = 0;!$e$$46_e$$inline_383$$.$propagationStopped_$ && $i$$inline_389$$ < $ancestorsTree_opt_ancestorsTree$$inline_384$$.length;$i$$inline_389$$++) {
      $currentTarget$$inline_388$$ = $e$$46_e$$inline_383$$.currentTarget = $ancestorsTree_opt_ancestorsTree$$inline_384$$[$i$$inline_389$$], $oldEvent$$inline_386_rv$$inline_387$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$$inline_388$$, $ancestorCount_type$$inline_385$$, !1, $e$$46_e$$inline_383$$) && $oldEvent$$inline_386_rv$$inline_387$$;
    }
  }
  return $oldEvent$$inline_386_rv$$inline_387$$;
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$events$EventTarget$$.$superClass_$.$disposeInternal$.call(this);
  this.removeAllListeners();
  this.$parentEventTarget_$ = null;
};
$JSCompiler_prototypeAlias$$.$listen$ = function $$JSCompiler_prototypeAlias$$$$listen$$($type$$119$$, $listener$$67$$, $opt_useCapture$$40$$, $opt_listenerScope$$4$$) {
  $JSCompiler_StaticMethods_assertInitialized_$$(this);
  return this.$eventTargetListeners_$.add(String($type$$119$$), $listener$$67$$, !1, $opt_useCapture$$40$$, $opt_listenerScope$$4$$);
};
$JSCompiler_prototypeAlias$$.$listenOnce$ = function $$JSCompiler_prototypeAlias$$$$listenOnce$$($type$$120$$, $listener$$68$$, $opt_useCapture$$41$$, $opt_listenerScope$$5$$) {
  return this.$eventTargetListeners_$.add(String($type$$120$$), $listener$$68$$, !0, $opt_useCapture$$41$$, $opt_listenerScope$$5$$);
};
$JSCompiler_prototypeAlias$$.$unlisten$ = function $$JSCompiler_prototypeAlias$$$$unlisten$$($type$$121$$, $listener$$69$$, $opt_useCapture$$42$$, $opt_listenerScope$$6$$) {
  return this.$eventTargetListeners_$.remove(String($type$$121$$), $listener$$69$$, $opt_useCapture$$42$$, $opt_listenerScope$$6$$);
};
$JSCompiler_prototypeAlias$$.removeAllListeners = function $$JSCompiler_prototypeAlias$$$removeAllListeners$($opt_type$$11$$) {
  return this.$eventTargetListeners_$ ? this.$eventTargetListeners_$.removeAll($opt_type$$11$$) : 0;
};
function $JSCompiler_StaticMethods_fireListeners$$($JSCompiler_StaticMethods_fireListeners$self$$, $listenerArray$$8_type$$122$$, $capture$$12$$, $eventObject$$5$$) {
  $listenerArray$$8_type$$122$$ = $JSCompiler_StaticMethods_fireListeners$self$$.$eventTargetListeners_$.$listeners$[String($listenerArray$$8_type$$122$$)];
  if (!$listenerArray$$8_type$$122$$) {
    return!0;
  }
  $listenerArray$$8_type$$122$$ = $listenerArray$$8_type$$122$$.concat();
  for (var $rv$$22$$ = !0, $i$$141$$ = 0;$i$$141$$ < $listenerArray$$8_type$$122$$.length;++$i$$141$$) {
    var $listener$$70$$ = $listenerArray$$8_type$$122$$[$i$$141$$];
    if ($listener$$70$$ && !$listener$$70$$.$removed$ && $listener$$70$$.$capture$ == $capture$$12$$) {
      var $listenerFn$$1$$ = $listener$$70$$.$listener$, $listenerHandler$$1$$ = $listener$$70$$.$handler$ || $listener$$70$$.src;
      $listener$$70$$.$callOnce$ && $JSCompiler_StaticMethods_removeByKey$$($JSCompiler_StaticMethods_fireListeners$self$$.$eventTargetListeners_$, $listener$$70$$);
      $rv$$22$$ = !1 !== $listenerFn$$1$$.call($listenerHandler$$1$$, $eventObject$$5$$) && $rv$$22$$;
    }
  }
  return $rv$$22$$ && !1 != $eventObject$$5$$.$returnValue_$;
}
$JSCompiler_prototypeAlias$$.$getListener$ = function $$JSCompiler_prototypeAlias$$$$getListener$$($type$$124$$, $listener$$71$$, $capture$$14$$, $opt_listenerScope$$7$$) {
  return this.$eventTargetListeners_$.$getListener$(String($type$$124$$), $listener$$71$$, $capture$$14$$, $opt_listenerScope$$7$$);
};
function $JSCompiler_StaticMethods_assertInitialized_$$($JSCompiler_StaticMethods_assertInitialized_$self$$) {
  $goog$asserts$assert$$($JSCompiler_StaticMethods_assertInitialized_$self$$.$eventTargetListeners_$, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
}
;$goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$(8);
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
;function $goog$messaging$AbstractChannel$$() {
  $goog$Disposable$$.call(this);
  this.$services_$ = {};
}
$goog$inherits$$($goog$messaging$AbstractChannel$$, $goog$Disposable$$);
$goog$messaging$AbstractChannel$$.prototype.logger = $goog$debug$LogManager$getLogger$$("goog.messaging.AbstractChannel");
$goog$messaging$AbstractChannel$$.prototype.$connect$ = function $$goog$messaging$AbstractChannel$$$$$connect$$($opt_connectCb$$1$$) {
  $opt_connectCb$$1$$ && $opt_connectCb$$1$$();
};
$goog$messaging$AbstractChannel$$.prototype.$isConnected$ = function $$goog$messaging$AbstractChannel$$$$$isConnected$$() {
  return!0;
};
function $JSCompiler_StaticMethods_registerService$$($JSCompiler_StaticMethods_registerService$self$$, $callback$$61$$) {
  $JSCompiler_StaticMethods_registerService$self$$.$services_$.AGENT = {$callback$:$callback$$61$$, $objectPayload$:!1};
}
$goog$messaging$AbstractChannel$$.prototype.$disposeInternal$ = function $$goog$messaging$AbstractChannel$$$$$disposeInternal$$() {
  $goog$messaging$AbstractChannel$$.$superClass_$.$disposeInternal$.call(this);
  delete this.logger;
  delete this.$services_$;
  delete this.$defaultService_$;
};
var $goog$net$xpc$TransportNames$$ = {1:"NativeMessagingTransport", 2:"FrameElementMethodTransport", 3:"IframeRelayTransport", 4:"IframePollingTransport", 5:"FlashTransport", 6:"NixTransport", 7:"DirectTransport"}, $goog$net$xpc$UriCfgFields$$ = ["pu", "lru", "pru", "lpu", "ppu"], $goog$net$xpc$channels$$ = {};
function $goog$net$xpc$getRandomString$$() {
  for (var $length$$22$$ = 10, $chars$$2$$ = $goog$net$xpc$randomStringCharacters_$$, $charsLength$$ = $chars$$2$$.length, $s$$31$$ = "";0 < $length$$22$$--;) {
    $s$$31$$ += $chars$$2$$.charAt(Math.floor(Math.random() * $charsLength$$));
  }
  return $s$$31$$;
}
var $goog$net$xpc$randomStringCharacters_$$ = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", $goog$net$xpc$logger$$ = $goog$debug$LogManager$getLogger$$("goog.net.xpc");
function $goog$net$xpc$Transport$$($opt_domHelper$$1$$) {
  $goog$Disposable$$.call(this);
  this.$domHelper_$ = $opt_domHelper$$1$$ || $goog$dom$getDomHelper$$();
}
$goog$inherits$$($goog$net$xpc$Transport$$, $goog$Disposable$$);
$goog$net$xpc$Transport$$.prototype.$transportType$ = 0;
$goog$net$xpc$Transport$$.prototype.$getWindow$ = function $$goog$net$xpc$Transport$$$$$getWindow$$() {
  return this.$domHelper_$.$getWindow$();
};
$goog$net$xpc$Transport$$.prototype.getName = function $$goog$net$xpc$Transport$$$$getName$() {
  return $goog$net$xpc$TransportNames$$[this.$transportType$] || "";
};
function $goog$net$xpc$FrameElementMethodTransport$$($channel$$1$$, $opt_domHelper$$2$$) {
  $goog$net$xpc$Transport$$.call(this, $opt_domHelper$$2$$);
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
  } catch ($e$$48$$) {
    $goog$log$error$$($goog$net$xpc$logger$$, "exception caught while attempting setup: " + $e$$48$$);
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
  this.$recursive_$ || 0 != this.$queue_$.length ? (this.$queue_$.push({$serviceName$:$serviceName$$6$$, $payload$:$payload$$5$$}), 1 == this.$queue_$.length && (this.$timer_$ = this.$getWindow$().setTimeout(this.$deliverQueuedCb_$, 1))) : this.$channel_$.$xpcDeliver$($serviceName$$6$$, $payload$$5$$);
};
$JSCompiler_prototypeAlias$$.$deliverQueued_$ = function $$JSCompiler_prototypeAlias$$$$deliverQueued_$$() {
  for (;this.$queue_$.length;) {
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
function $goog$net$xpc$IframePollingTransport$$($channel$$2$$, $opt_domHelper$$3$$) {
  $goog$net$xpc$Transport$$.call(this, $opt_domHelper$$3$$);
  this.$channel_$ = $channel$$2$$;
  this.$sendUri_$ = this.$channel_$.$getConfig$().ppu;
  this.$rcvUri_$ = this.$channel_$.$getConfig$().lpu;
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
  } catch ($e$$49$$) {
    $goog$log$fine$$($goog$net$xpc$logger$$, "error retrieving peer frames");
  }
  return{};
}
function $JSCompiler_StaticMethods_getPeerFrame_$$($JSCompiler_StaticMethods_getPeerFrame_$self$$, $frameName$$) {
  return $JSCompiler_StaticMethods_getPeerFrames_$$($JSCompiler_StaticMethods_getPeerFrame_$self$$)[$frameName$$];
}
$JSCompiler_prototypeAlias$$.$connect$ = function $$JSCompiler_prototypeAlias$$$$connect$$() {
  if (!this.$disposed_$ && $JSCompiler_StaticMethods_isPeerAvailable$$(this.$channel_$)) {
    $goog$log$fine$$($goog$net$xpc$logger$$, "transport connect called");
    if (!this.$initialized_$) {
      $goog$log$fine$$($goog$net$xpc$logger$$, "initializing...");
      var $frames$$inline_1106_name$$inline_404$$ = $JSCompiler_StaticMethods_getMsgFrameName_$$(this);
      this.$msgIframeElm_$ = $JSCompiler_StaticMethods_constructSenderFrame_$$(this, $frames$$inline_1106_name$$inline_404$$);
      this.$msgWinObj_$ = this.$getWindow$().frames[$frames$$inline_1106_name$$inline_404$$];
      $frames$$inline_1106_name$$inline_404$$ = $JSCompiler_StaticMethods_getAckFrameName_$$(this);
      this.$ackIframeElm_$ = $JSCompiler_StaticMethods_constructSenderFrame_$$(this, $frames$$inline_1106_name$$inline_404$$);
      this.$ackWinObj_$ = this.$getWindow$().frames[$frames$$inline_1106_name$$inline_404$$];
      this.$initialized_$ = !0;
    }
    if ($JSCompiler_StaticMethods_isRcvFrameReady_$$(this, $JSCompiler_StaticMethods_getMsgFrameName_$$(this)) && $JSCompiler_StaticMethods_isRcvFrameReady_$$(this, $JSCompiler_StaticMethods_getAckFrameName_$$(this))) {
      $goog$log$fine$$($goog$net$xpc$logger$$, "foreign frames present"), this.$msgReceiver_$ = new $goog$net$xpc$IframePollingTransport$Receiver$$(this, $JSCompiler_StaticMethods_getPeerFrame_$$(this, $JSCompiler_StaticMethods_getMsgFrameName_$$(this)), $goog$bind$$(this.$processIncomingMsg$, this)), this.$ackReceiver_$ = new $goog$net$xpc$IframePollingTransport$Receiver$$(this, $JSCompiler_StaticMethods_getPeerFrame_$$(this, $JSCompiler_StaticMethods_getAckFrameName_$$(this)), $goog$bind$$(this.$processIncomingAck$, 
      this)), this.$checkLocalFramesPresent_$();
    } else {
      $goog$log$log$$("foreign frames not (yet) present");
      if (1 == $JSCompiler_StaticMethods_getRole$$(this.$channel_$)) {
        this.$reconnectFrame_$ || 0 < this.$pollsBeforeReconnect_$-- || ($goog$log$log$$("Inner peer reconnect triggered."), $JSCompiler_StaticMethods_updateChannelNameAndCatalog$$(this.$channel_$, $goog$net$xpc$getRandomString$$()), $goog$log$log$$("switching channels: " + this.$channel_$.name), $JSCompiler_StaticMethods_deconstructSenderFrames_$$(this), this.$initialized_$ = !1, this.$reconnectFrame_$ = $JSCompiler_StaticMethods_constructSenderFrame_$$(this, "googlexpc_reconnect_" + this.$channel_$.name))
        ;
      } else {
        if (0 == $JSCompiler_StaticMethods_getRole$$(this.$channel_$)) {
          $goog$log$log$$("outerPeerReconnect called");
          for (var $frames$$inline_1106_name$$inline_404$$ = $JSCompiler_StaticMethods_getPeerFrames_$$(this), $length$$inline_1107$$ = $frames$$inline_1106_name$$inline_404$$.length, $i$$inline_1108$$ = 0;$i$$inline_1108$$ < $length$$inline_1107$$;$i$$inline_1108$$++) {
            var $frameName$$inline_1109$$;
            try {
              $frames$$inline_1106_name$$inline_404$$[$i$$inline_1108$$] && $frames$$inline_1106_name$$inline_404$$[$i$$inline_1108$$].name && ($frameName$$inline_1109$$ = $frames$$inline_1106_name$$inline_404$$[$i$$inline_1108$$].name);
            } catch ($e$$inline_1111$$) {
            }
            if ($frameName$$inline_1109$$) {
              var $message$$inline_1110$$ = $frameName$$inline_1109$$.split("_");
              if (3 == $message$$inline_1110$$.length && "googlexpc" == $message$$inline_1110$$[0] && "reconnect" == $message$$inline_1110$$[1]) {
                this.$channel_$.name = $message$$inline_1110$$[2];
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
  var $ifr$$ = document.createElement("iframe"), $s$$32$$ = $ifr$$.style;
  $s$$32$$.position = "absolute";
  $s$$32$$.top = "-10px";
  $s$$32$$.left = "10px";
  $s$$32$$.width = "1px";
  $s$$32$$.height = "1px";
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
      return!1;
    }
  } catch ($e$$51$$) {
    return!1;
  }
  return!0;
}
$JSCompiler_prototypeAlias$$.$checkLocalFramesPresent_$ = function $$JSCompiler_prototypeAlias$$$$checkLocalFramesPresent_$$() {
  var $frames$$1$$ = $JSCompiler_StaticMethods_getPeerFrames_$$(this);
  $frames$$1$$[$JSCompiler_StaticMethods_getAckFrameName_$$(this)] && $frames$$1$$[$JSCompiler_StaticMethods_getMsgFrameName_$$(this)] ? (this.$msgSender_$ = new $goog$net$xpc$IframePollingTransport$Sender$$(this.$sendUri_$, this.$msgWinObj_$), this.$ackSender_$ = new $goog$net$xpc$IframePollingTransport$Sender$$(this.$sendUri_$, this.$ackWinObj_$), $goog$log$fine$$($goog$net$xpc$logger$$, "local frames ready"), this.$getWindow$().setTimeout($goog$bind$$(function() {
    this.$msgSender_$.send("SETUP");
    this.$waitForAck_$ = !0;
    $goog$log$fine$$($goog$net$xpc$logger$$, "SETUP sent");
  }, this), 100)) : (this.$checkLocalFramesPresentCb_$ || (this.$checkLocalFramesPresentCb_$ = $goog$bind$$(this.$checkLocalFramesPresent_$, this)), this.$getWindow$().setTimeout(this.$checkLocalFramesPresentCb_$, 100), $goog$log$fine$$($goog$net$xpc$logger$$, "local frames not (yet) present"));
};
function $JSCompiler_StaticMethods_checkIfConnected_$$($JSCompiler_StaticMethods_checkIfConnected_$self$$) {
  if ($JSCompiler_StaticMethods_checkIfConnected_$self$$.$sentConnectionSetupAck_$ && $JSCompiler_StaticMethods_checkIfConnected_$self$$.$rcvdConnectionSetupAck_$) {
    if ($JSCompiler_StaticMethods_checkIfConnected_$self$$.$channel_$.$notifyConnected$(), $JSCompiler_StaticMethods_checkIfConnected_$self$$.$deliveryQueue_$) {
      $goog$log$fine$$($goog$net$xpc$logger$$, "delivering queued messages (" + $JSCompiler_StaticMethods_checkIfConnected_$self$$.$deliveryQueue_$.length + ")");
      for (var $i$$146$$ = 0, $m$$3$$;$i$$146$$ < $JSCompiler_StaticMethods_checkIfConnected_$self$$.$deliveryQueue_$.length;$i$$146$$++) {
        $m$$3$$ = $JSCompiler_StaticMethods_checkIfConnected_$self$$.$deliveryQueue_$[$i$$146$$], $JSCompiler_StaticMethods_checkIfConnected_$self$$.$channel_$.$xpcDeliver$($m$$3$$.$service$, $m$$3$$.$payload$);
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
      var $part0_pos$$5$$ = $frame$$2_raw$$.indexOf("|"), $head$$2_part1_partInfo$$ = $frame$$2_raw$$.substring(0, $part0_pos$$5$$);
      $frame$$2_raw$$ = $frame$$2_raw$$.substring($part0_pos$$5$$ + 1);
      $part0_pos$$5$$ = $head$$2_part1_partInfo$$.indexOf(",");
      if (-1 == $part0_pos$$5$$) {
        var $seq$$;
        this.$ackSender_$.send("ACK:" + $head$$2_part1_partInfo$$);
        $JSCompiler_StaticMethods_deliverPayload_$$(this, $frame$$2_raw$$);
      } else {
        $seq$$ = $head$$2_part1_partInfo$$.substring(0, $part0_pos$$5$$), this.$ackSender_$.send("ACK:" + $seq$$), $head$$2_part1_partInfo$$ = $head$$2_part1_partInfo$$.substring($part0_pos$$5$$ + 1).split("/"), $part0_pos$$5$$ = parseInt($head$$2_part1_partInfo$$[0], 10), $head$$2_part1_partInfo$$ = parseInt($head$$2_part1_partInfo$$[1], 10), 1 == $part0_pos$$5$$ && (this.$parts_$ = []), this.$parts_$.push($frame$$2_raw$$), $part0_pos$$5$$ == $head$$2_part1_partInfo$$ && ($JSCompiler_StaticMethods_deliverPayload_$$(this, 
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
    var $s$$33$$ = $JSCompiler_StaticMethods_sendNextFrame_$self$$.$sendQueue_$.shift();
    ++$JSCompiler_StaticMethods_sendNextFrame_$self$$.$sequence_$;
    $JSCompiler_StaticMethods_sendNextFrame_$self$$.$msgSender_$.send($JSCompiler_StaticMethods_sendNextFrame_$self$$.$sequence_$ + $s$$33$$);
    $goog$log$log$$("msg sent: " + $JSCompiler_StaticMethods_sendNextFrame_$self$$.$sequence_$ + $s$$33$$);
    $JSCompiler_StaticMethods_sendNextFrame_$self$$.$waitForAck_$ = !0;
  }
}
function $JSCompiler_StaticMethods_deliverPayload_$$($JSCompiler_StaticMethods_deliverPayload_$self$$, $s$$34$$) {
  var $payload$$7_pos$$6$$ = $s$$34$$.indexOf(":"), $service$$3$$ = $s$$34$$.substr(0, $payload$$7_pos$$6$$), $payload$$7_pos$$6$$ = $s$$34$$.substring($payload$$7_pos$$6$$ + 1);
  $JSCompiler_StaticMethods_deliverPayload_$self$$.$channel_$.$isConnected$() ? $JSCompiler_StaticMethods_deliverPayload_$self$$.$channel_$.$xpcDeliver$($service$$3$$, $payload$$7_pos$$6$$) : (($JSCompiler_StaticMethods_deliverPayload_$self$$.$deliveryQueue_$ || ($JSCompiler_StaticMethods_deliverPayload_$self$$.$deliveryQueue_$ = [])).push({$service$:$service$$3$$, $payload$:$payload$$7_pos$$6$$}), $goog$log$log$$("queued delivery"));
}
$JSCompiler_prototypeAlias$$.$MAX_FRAME_LENGTH_$ = 3800;
$JSCompiler_prototypeAlias$$.send = function $$JSCompiler_prototypeAlias$$$send$($service$$4$$, $payload$$8$$) {
  var $frame$$3$$ = $service$$4$$ + ":" + $payload$$8$$;
  if (!$goog$userAgent$IE$$ || $payload$$8$$.length <= this.$MAX_FRAME_LENGTH_$) {
    this.$sendQueue_$.push("|" + $frame$$3$$);
  } else {
    for (var $l$$27$$ = $payload$$8$$.length, $num$$14$$ = Math.ceil($l$$27$$ / this.$MAX_FRAME_LENGTH_$), $pos$$7$$ = 0, $i$$147$$ = 1;$pos$$7$$ < $l$$27$$;) {
      this.$sendQueue_$.push("," + $i$$147$$ + "/" + $num$$14$$ + "|" + $frame$$3$$.substr($pos$$7$$, this.$MAX_FRAME_LENGTH_$)), $i$$147$$++, $pos$$7$$ += this.$MAX_FRAME_LENGTH_$;
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
var $goog$net$xpc$IframePollingTransport$receivers_$$ = [], $goog$net$xpc$IframePollingTransport$receiveCb_$$ = $goog$bind$$(function() {
  var $now$$3_receivers$$1$$ = $goog$net$xpc$IframePollingTransport$receivers_$$, $JSCompiler_StaticMethods_notifyTransportError$self$$inline_412_receiver$$, $rcvd$$ = !1;
  try {
    for (var $i$$148$$ = 0;$JSCompiler_StaticMethods_notifyTransportError$self$$inline_412_receiver$$ = $now$$3_receivers$$1$$[$i$$148$$];$i$$148$$++) {
      var $JSCompiler_temp$$22$$;
      if (!($JSCompiler_temp$$22$$ = $rcvd$$)) {
        var $JSCompiler_StaticMethods_receive$self$$inline_408$$ = $JSCompiler_StaticMethods_notifyTransportError$self$$inline_412_receiver$$, $loc$$inline_409$$ = $JSCompiler_StaticMethods_receive$self$$inline_408$$.$rcvFrame_$.location.href;
        if ($loc$$inline_409$$ != $JSCompiler_StaticMethods_receive$self$$inline_408$$.$currentLoc_$) {
          $JSCompiler_StaticMethods_receive$self$$inline_408$$.$currentLoc_$ = $loc$$inline_409$$;
          var $payload$$inline_410$$ = $loc$$inline_409$$.split("#")[1];
          $payload$$inline_410$$ && ($payload$$inline_410$$ = $payload$$inline_410$$.substr(1), $JSCompiler_StaticMethods_receive$self$$inline_408$$.$cb_$(decodeURIComponent($payload$$inline_410$$)));
          $JSCompiler_temp$$22$$ = !0;
        } else {
          $JSCompiler_temp$$22$$ = !1;
        }
      }
      $rcvd$$ = $JSCompiler_temp$$22$$;
    }
  } catch ($e$$52$$) {
    if ($goog$log$info$$("receive_() failed: " + $e$$52$$), $JSCompiler_StaticMethods_notifyTransportError$self$$inline_412_receiver$$ = $JSCompiler_StaticMethods_notifyTransportError$self$$inline_412_receiver$$.$transport_$.$channel_$, $goog$log$info$$("Transport Error"), $JSCompiler_StaticMethods_notifyTransportError$self$$inline_412_receiver$$.close(), !$now$$3_receivers$$1$$.length) {
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
  } catch ($e$$53$$) {
    $goog$log$error$$($goog$net$xpc$logger$$, "sending failed", $e$$53$$);
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
;function $goog$net$xpc$IframeRelayTransport$$($channel$$3$$, $opt_domHelper$$4$$) {
  $goog$net$xpc$Transport$$.call(this, $opt_domHelper$$4$$);
  this.$channel_$ = $channel$$3$$;
  this.$peerRelayUri_$ = this.$channel_$.$getConfig$().pru;
  this.$peerIframeId_$ = this.$channel_$.$getConfig$().ifrid;
  $goog$userAgent$WEBKIT$$ && $goog$net$xpc$IframeRelayTransport$startCleanupTimer_$$();
}
$goog$inherits$$($goog$net$xpc$IframeRelayTransport$$, $goog$net$xpc$Transport$$);
if ($goog$userAgent$WEBKIT$$) {
  var $goog$net$xpc$IframeRelayTransport$iframeRefs_$$ = [], $goog$net$xpc$IframeRelayTransport$cleanupTimer_$$ = 0, $goog$net$xpc$IframeRelayTransport$startCleanupTimer_$$ = function $$goog$net$xpc$IframeRelayTransport$startCleanupTimer_$$$() {
    $goog$net$xpc$IframeRelayTransport$cleanupTimer_$$ || ($goog$net$xpc$IframeRelayTransport$cleanupTimer_$$ = window.setTimeout(function() {
      $goog$net$xpc$IframeRelayTransport$cleanup_$$();
    }, 1E3));
  }, $goog$net$xpc$IframeRelayTransport$cleanup_$$ = function $$goog$net$xpc$IframeRelayTransport$cleanup_$$$($maxAge_opt_maxAge$$) {
    var $now$$4$$ = $goog$now$$();
    for ($maxAge_opt_maxAge$$ = $maxAge_opt_maxAge$$ || 3E3;$goog$net$xpc$IframeRelayTransport$iframeRefs_$$.length && $now$$4$$ - $goog$net$xpc$IframeRelayTransport$iframeRefs_$$[0].timestamp >= $maxAge_opt_maxAge$$;) {
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
  var $fragmentNum_pos$$8$$ = $frame$$4$$.indexOf(":"), $fragmentIdStr_header$$4$$ = $frame$$4$$.substr(0, $fragmentNum_pos$$8$$), $payload$$11$$ = $frame$$4$$.substr($fragmentNum_pos$$8$$ + 1);
  if ($goog$userAgent$IE$$ && -1 != ($fragmentNum_pos$$8$$ = $fragmentIdStr_header$$4$$.indexOf("|"))) {
    var $service$$5$$ = $fragmentIdStr_header$$4$$.substr(0, $fragmentNum_pos$$8$$), $fragmentIdStr_header$$4$$ = $fragmentIdStr_header$$4$$.substr($fragmentNum_pos$$8$$ + 1), $fragmentNum_pos$$8$$ = $fragmentIdStr_header$$4$$.indexOf("+"), $messageIdStr$$ = $fragmentIdStr_header$$4$$.substr(0, $fragmentNum_pos$$8$$), $fragmentNum_pos$$8$$ = parseInt($fragmentIdStr_header$$4$$.substr($fragmentNum_pos$$8$$ + 1), 10), $fragmentInfo$$ = $goog$net$xpc$IframeRelayTransport$fragmentMap_$$[$messageIdStr$$];
    $fragmentInfo$$ || ($fragmentInfo$$ = $goog$net$xpc$IframeRelayTransport$fragmentMap_$$[$messageIdStr$$] = {$fragments$:[], $received$:0, $expected$:0});
    -1 != $fragmentIdStr_header$$4$$.indexOf("++") && ($fragmentInfo$$.$expected$ = $fragmentNum_pos$$8$$ + 1);
    $fragmentInfo$$.$fragments$[$fragmentNum_pos$$8$$] = $payload$$11$$;
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
  var $encodedPayload$$ = encodeURIComponent($payload$$13$$), $encodedLen$$ = $encodedPayload$$.length;
  if ($goog$userAgent$IE$$ && 1800 < $encodedLen$$) {
    for (var $messageIdStr$$1$$ = Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ $goog$now$$()).toString(36), $startIndex$$1$$ = 0, $fragmentNum$$1$$ = 0;$startIndex$$1$$ < $encodedLen$$;$fragmentNum$$1$$++) {
      var $payloadFragment$$ = $encodedPayload$$.substr($startIndex$$1$$, 1800), $startIndex$$1$$ = $startIndex$$1$$ + 1800;
      $JSCompiler_StaticMethods_send_$$(this, $service$$6$$, $payloadFragment$$, $messageIdStr$$1$$ + ($startIndex$$1$$ >= $encodedLen$$ ? "++" : "+") + $fragmentNum$$1$$);
    }
  } else {
    $JSCompiler_StaticMethods_send_$$(this, $service$$6$$, $encodedPayload$$);
  }
};
function $JSCompiler_StaticMethods_send_$$($JSCompiler_StaticMethods_send_$self$$, $service$$7$$, $encodedPayload$$1$$, $opt_fragmentIdStr$$) {
  if ($goog$userAgent$IE$$) {
    var $div$$2_ifr$$2$$ = $JSCompiler_StaticMethods_send_$self$$.$getWindow$().document.createElement("div"), $html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$;
    $html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$ = new $goog$string$Const$$;
    $html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$.$stringConstValueWithSecurityContract__googStringSecurityPrivate_$ = "this.xpcOnload()";
    var $dirAttribute$$inline_1120_opt_attributes$$inline_1113$$ = {onload:$html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$};
    if (!$goog$html$SafeHtml$VALID_NAMES_IN_TAG_$$.test("iframe")) {
      throw Error("Invalid tag name <iframe>.");
    }
    if ("iframe" in $goog$html$SafeHtml$NOT_ALLOWED_TAG_NAMES_$$) {
      throw Error("Tag name <iframe> is not allowed for SafeHtml.");
    }
    var $dir$$inline_1114_html$$inline_1119$$ = null;
    $html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$ = "<iframe";
    if ($dirAttribute$$inline_1120_opt_attributes$$inline_1113$$) {
      for (var $content$$inline_1118_name$$inline_1116$$ in $dirAttribute$$inline_1120_opt_attributes$$inline_1113$$) {
        if (!$goog$html$SafeHtml$VALID_NAMES_IN_TAG_$$.test($content$$inline_1118_name$$inline_1116$$)) {
          throw Error('Invalid attribute name "' + $content$$inline_1118_name$$inline_1116$$ + '".');
        }
        var $map$$inline_1282_value$$inline_1117_value$$inline_1281$$ = $dirAttribute$$inline_1120_opt_attributes$$inline_1113$$[$content$$inline_1118_name$$inline_1116$$];
        if (null != $map$$inline_1282_value$$inline_1117_value$$inline_1281$$) {
          if ($map$$inline_1282_value$$inline_1117_value$$inline_1281$$ instanceof $goog$string$Const$$) {
            $map$$inline_1282_value$$inline_1117_value$$inline_1281$$ = $goog$string$Const$unwrap$$($map$$inline_1282_value$$inline_1117_value$$inline_1281$$);
          } else {
            if ("style" == $content$$inline_1118_name$$inline_1116$$.toLowerCase()) {
              if (!$goog$isObject$$($map$$inline_1282_value$$inline_1117_value$$inline_1281$$)) {
                throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof $map$$inline_1282_value$$inline_1117_value$$inline_1281$$ + " given: " + $map$$inline_1282_value$$inline_1117_value$$inline_1281$$);
              }
              if (!($map$$inline_1282_value$$inline_1117_value$$inline_1281$$ instanceof $goog$html$SafeStyle$$)) {
                var $JSCompiler_inline_result$$inline_1286_style$$inline_1283$$ = "", $name$$inline_1284$$ = void 0;
                for ($name$$inline_1284$$ in $map$$inline_1282_value$$inline_1117_value$$inline_1281$$) {
                  if (!/^[-_a-zA-Z0-9]+$/.test($name$$inline_1284$$)) {
                    throw Error("Name allows only [-_a-zA-Z0-9], got: " + $name$$inline_1284$$);
                  }
                  var $value$$inline_1285$$ = $map$$inline_1282_value$$inline_1117_value$$inline_1281$$[$name$$inline_1284$$];
                  null != $value$$inline_1285$$ && ($value$$inline_1285$$ instanceof $goog$string$Const$$ ? ($value$$inline_1285$$ = $goog$string$Const$unwrap$$($value$$inline_1285$$), $goog$asserts$assert$$(!/[{;}]/.test($value$$inline_1285$$), "Value does not allow [{;}].")) : $goog$html$SafeStyle$VALUE_RE_$$.test($value$$inline_1285$$) || ($goog$asserts$fail$$("String value allows only [-.%_!# a-zA-Z0-9], got: " + $value$$inline_1285$$), $value$$inline_1285$$ = "zClosurez"), $JSCompiler_inline_result$$inline_1286_style$$inline_1283$$ += 
                  $name$$inline_1284$$ + ":" + $value$$inline_1285$$ + ";");
                }
                $JSCompiler_inline_result$$inline_1286_style$$inline_1283$$ ? ($goog$asserts$assert$$(!/[<>]/.test($JSCompiler_inline_result$$inline_1286_style$$inline_1283$$), "Forbidden characters in style string: " + $JSCompiler_inline_result$$inline_1286_style$$inline_1283$$), $map$$inline_1282_value$$inline_1117_value$$inline_1281$$ = $goog$html$SafeStyle$createSafeStyleSecurityPrivateDoNotAccessOrElse_$$($JSCompiler_inline_result$$inline_1286_style$$inline_1283$$)) : $map$$inline_1282_value$$inline_1117_value$$inline_1281$$ = 
                $goog$html$SafeStyle$EMPTY$$;
              }
              $JSCompiler_inline_result$$inline_1286_style$$inline_1283$$ = void 0;
              $map$$inline_1282_value$$inline_1117_value$$inline_1281$$ instanceof $goog$html$SafeStyle$$ && $map$$inline_1282_value$$inline_1117_value$$inline_1281$$.constructor === $goog$html$SafeStyle$$ && $map$$inline_1282_value$$inline_1117_value$$inline_1281$$.$SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$ === $goog$html$SafeStyle$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ ? $JSCompiler_inline_result$$inline_1286_style$$inline_1283$$ = $map$$inline_1282_value$$inline_1117_value$$inline_1281$$.$privateDoNotAccessOrElseSafeStyleWrappedValue_$ : 
              ($goog$asserts$fail$$("expected object of type SafeStyle, got '" + $map$$inline_1282_value$$inline_1117_value$$inline_1281$$ + "'"), $JSCompiler_inline_result$$inline_1286_style$$inline_1283$$ = "type_error:SafeStyle");
              $map$$inline_1282_value$$inline_1117_value$$inline_1281$$ = $JSCompiler_inline_result$$inline_1286_style$$inline_1283$$;
            } else {
              if (/^on/i.test($content$$inline_1118_name$$inline_1116$$)) {
                throw Error('Attribute "' + $content$$inline_1118_name$$inline_1116$$ + '" requires goog.string.Const value, "' + $map$$inline_1282_value$$inline_1117_value$$inline_1281$$ + '" given.');
              }
              if ($map$$inline_1282_value$$inline_1117_value$$inline_1281$$ instanceof $goog$html$SafeUrl$$) {
                $map$$inline_1282_value$$inline_1117_value$$inline_1281$$ instanceof $goog$html$SafeUrl$$ && $map$$inline_1282_value$$inline_1117_value$$inline_1281$$.constructor === $goog$html$SafeUrl$$ && $map$$inline_1282_value$$inline_1117_value$$inline_1281$$.$SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$ === $goog$html$SafeUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ ? $map$$inline_1282_value$$inline_1117_value$$inline_1281$$ = $map$$inline_1282_value$$inline_1117_value$$inline_1281$$.$privateDoNotAccessOrElseSafeHtmlWrappedValue_$ : 
                ($goog$asserts$fail$$("expected object of type SafeUrl, got '" + $map$$inline_1282_value$$inline_1117_value$$inline_1281$$ + "'"), $map$$inline_1282_value$$inline_1117_value$$inline_1281$$ = "type_error:SafeUrl");
              } else {
                if ($content$$inline_1118_name$$inline_1116$$.toLowerCase() in $goog$html$SafeHtml$URL_ATTRIBUTES_$$) {
                  throw Error('Attribute "' + $content$$inline_1118_name$$inline_1116$$ + '" requires goog.string.Const or goog.html.SafeUrl value, "' + $map$$inline_1282_value$$inline_1117_value$$inline_1281$$ + '" given.');
                }
              }
            }
          }
          $goog$asserts$assert$$($goog$isString$$($map$$inline_1282_value$$inline_1117_value$$inline_1281$$) || $goog$isNumber$$($map$$inline_1282_value$$inline_1117_value$$inline_1281$$), "String or number value expected, got " + typeof $map$$inline_1282_value$$inline_1117_value$$inline_1281$$ + " with value: " + $map$$inline_1282_value$$inline_1117_value$$inline_1281$$);
          $html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$ += " " + $content$$inline_1118_name$$inline_1116$$ + '="' + $goog$string$htmlEscape$$(String($map$$inline_1282_value$$inline_1117_value$$inline_1281$$)) + '"';
        }
      }
    }
    $content$$inline_1118_name$$inline_1116$$ = void 0;
    $goog$isDef$$($content$$inline_1118_name$$inline_1116$$) ? $goog$isArray$$($content$$inline_1118_name$$inline_1116$$) || ($content$$inline_1118_name$$inline_1116$$ = [$content$$inline_1118_name$$inline_1116$$]) : $content$$inline_1118_name$$inline_1116$$ = [];
    "iframe" in $goog$dom$tags$VOID_TAGS_$$ ? ($goog$asserts$assert$$(!$content$$inline_1118_name$$inline_1116$$.length, "Void tag <iframe> does not allow content."), $html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$ += ">") : ($dir$$inline_1114_html$$inline_1119$$ = $goog$html$SafeHtml$concat$$($content$$inline_1118_name$$inline_1116$$), $html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$ += ">" + $goog$html$SafeHtml$unwrap$$($dir$$inline_1114_html$$inline_1119$$) + 
    "</iframe>", $dir$$inline_1114_html$$inline_1119$$ = $dir$$inline_1114_html$$inline_1119$$.$getDirection$());
    ($dirAttribute$$inline_1120_opt_attributes$$inline_1113$$ = $dirAttribute$$inline_1120_opt_attributes$$inline_1113$$ && $dirAttribute$$inline_1120_opt_attributes$$inline_1113$$.dir) && ($dir$$inline_1114_html$$inline_1119$$ = /^(ltr|rtl|auto)$/i.test($dirAttribute$$inline_1120_opt_attributes$$inline_1113$$) ? 0 : null);
    $html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$ = $goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse_$$($html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$, $dir$$inline_1114_html$$inline_1119$$);
    $div$$2_ifr$$2$$.innerHTML = $goog$html$SafeHtml$unwrap$$($html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$);
    $div$$2_ifr$$2$$ = $div$$2_ifr$$2$$.childNodes[0];
    $div$$2_ifr$$2$$.xpcOnload = $goog$net$xpc$IframeRelayTransport$iframeLoadHandler_$$;
  } else {
    $div$$2_ifr$$2$$ = $JSCompiler_StaticMethods_send_$self$$.$getWindow$().document.createElement("iframe"), $goog$userAgent$WEBKIT$$ ? $goog$net$xpc$IframeRelayTransport$iframeRefs_$$.push({timestamp:$goog$now$$(), $iframeElement$:$div$$2_ifr$$2$$}) : $goog$events$listen$$($div$$2_ifr$$2$$, "load", $goog$net$xpc$IframeRelayTransport$iframeLoadHandler_$$);
  }
  $html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$ = $div$$2_ifr$$2$$.style;
  $html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$.visibility = "hidden";
  $html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$.width = $div$$2_ifr$$2$$.style.height = "0px";
  $html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$.position = "absolute";
  $html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$ = $JSCompiler_StaticMethods_send_$self$$.$peerRelayUri_$;
  $html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$ += "#" + $JSCompiler_StaticMethods_send_$self$$.$channel_$.name;
  $JSCompiler_StaticMethods_send_$self$$.$peerIframeId_$ && ($html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$ += "," + $JSCompiler_StaticMethods_send_$self$$.$peerIframeId_$);
  $html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$ += "|" + $service$$7$$;
  $opt_fragmentIdStr$$ && ($html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$ += "|" + $opt_fragmentIdStr$$);
  $html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$ += ":" + $encodedPayload$$1$$;
  $div$$2_ifr$$2$$.src = $html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$;
  $JSCompiler_StaticMethods_send_$self$$.$getWindow$().document.body.appendChild($div$$2_ifr$$2$$);
  $goog$log$log$$("msg sent: " + $html$$inline_415_result$$inline_1115_stringConst$$inline_1279_style$$7_url$$37$$);
}
function $goog$net$xpc$IframeRelayTransport$iframeLoadHandler_$$() {
  $goog$log$log$$("iframe-load");
  $goog$dom$removeNode$$(this);
}
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$net$xpc$IframeRelayTransport$$.$superClass_$.$disposeInternal$.call(this);
  $goog$userAgent$WEBKIT$$ && $goog$net$xpc$IframeRelayTransport$cleanup_$$(0);
};
function $goog$net$xpc$NixTransport$$($channel$$4$$, $opt_domHelper$$5$$) {
  $goog$net$xpc$Transport$$.call(this, $opt_domHelper$$5$$);
  this.$channel_$ = $channel$$4$$;
  this.$authToken_$ = $channel$$4$$.at || "";
  this.$remoteAuthToken_$ = $channel$$4$$.rat || "";
  var $listenWindow$$inline_417$$ = this.$getWindow$();
  if (!$listenWindow$$inline_417$$.nix_setup_complete) {
    var $vbscript$$inline_418$$ = "Class GCXPC____NIXVBS_wrapper\n Private m_Transport\nPrivate m_Auth\nPublic Sub SetTransport(transport)\nIf isEmpty(m_Transport) Then\nSet m_Transport = transport\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\nIf isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub SendMessage(service, payload)\n Call m_Transport." + $goog$net$xpc$NixTransport$NIX_HANDLE_MESSAGE$$ + "(service, payload)\nEnd Sub\nPublic Sub CreateChannel(channel)\n Call m_Transport." + 
    $goog$net$xpc$NixTransport$NIX_CREATE_CHANNEL$$ + "(channel)\nEnd Sub\nPublic Sub GCXPC____NIXVBS_container()\n End Sub\nEnd Class\n Function GCXPC____NIXVBS_get_wrapper(transport, auth)\nDim wrap\nSet wrap = New GCXPC____NIXVBS_wrapper\nwrap.SetTransport transport\nwrap.SetAuth auth\nSet GCXPC____NIXVBS_get_wrapper = wrap\nEnd Function";
    try {
      $listenWindow$$inline_417$$.execScript($vbscript$$inline_418$$, "vbscript"), $listenWindow$$inline_417$$.nix_setup_complete = !0;
    } catch ($e$$inline_419$$) {
      $goog$log$error$$($goog$net$xpc$logger$$, "exception caught while attempting global setup: " + $e$$inline_419$$);
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
      $innerFrame$$.contentWindow.opener = (0,this.$getWindow$().GCXPC____NIXVBS_get_wrapper)(this, this.$authToken_$), this.$localSetupCompleted_$ = !0;
    } catch ($e$$56$$) {
      $goog$log$error$$($goog$net$xpc$logger$$, "exception caught while attempting setup: " + $e$$56$$);
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
        this.$nixChannel_$.CreateChannel((0,this.$getWindow$().GCXPC____NIXVBS_get_wrapper)(this, this.$authToken_$));
        this.$localSetupCompleted_$ = !0;
        this.$channel_$.$notifyConnected$();
      }
    } catch ($e$$57$$) {
      $goog$log$error$$($goog$net$xpc$logger$$, "exception caught while attempting setup: " + $e$$57$$);
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
  this.$getWindow$().setTimeout($goog$bind$$(function() {
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
var $goog$soy$INVALID_TAG_TO_RENDER_$$ = /^<(body|caption|col|colgroup|head|html|tr|td|tbody|thead|tfoot)>/i, $goog$soy$defaultTemplateData_$$ = {};
function $goog$style$setStyle$$($element$$57$$, $style$$8$$, $opt_value$$13$$) {
  $goog$isString$$($style$$8$$) ? $goog$style$setStyle_$$($element$$57$$, $opt_value$$13$$, $style$$8$$) : $goog$object$forEach$$($style$$8$$, $goog$partial$$($goog$style$setStyle_$$, $element$$57$$));
}
function $goog$style$setStyle_$$($element$$58$$, $value$$119$$, $camelStyle$$inline_423_propertyName$$9_style$$9$$) {
  a: {
    if ($camelStyle$$inline_423_propertyName$$9_style$$9$$ = $goog$string$toCamelCase$$($camelStyle$$inline_423_propertyName$$9_style$$9$$), void 0 === $element$$58$$.style[$camelStyle$$inline_423_propertyName$$9_style$$9$$]) {
      var $prefixedStyle$$inline_424$$ = ($goog$userAgent$WEBKIT$$ ? "Webkit" : $goog$userAgent$GECKO$$ ? "Moz" : $goog$userAgent$IE$$ ? "ms" : $goog$userAgent$OPERA$$ ? "O" : null) + $goog$string$toTitleCase$$($camelStyle$$inline_423_propertyName$$9_style$$9$$);
      if (void 0 !== $element$$58$$.style[$prefixedStyle$$inline_424$$]) {
        $camelStyle$$inline_423_propertyName$$9_style$$9$$ = $prefixedStyle$$inline_424$$;
        break a;
      }
    }
  }
  $camelStyle$$inline_423_propertyName$$9_style$$9$$ && ($element$$58$$.style[$camelStyle$$inline_423_propertyName$$9_style$$9$$] = $value$$119$$);
}
function $goog$style$getComputedStyle$$($element$$62$$, $property$$17$$) {
  var $doc$$33_styles$$ = $goog$dom$getOwnerDocument$$($element$$62$$);
  return $doc$$33_styles$$.defaultView && $doc$$33_styles$$.defaultView.getComputedStyle && ($doc$$33_styles$$ = $doc$$33_styles$$.defaultView.getComputedStyle($element$$62$$, null)) ? $doc$$33_styles$$[$property$$17$$] || $doc$$33_styles$$.getPropertyValue($property$$17$$) || "" : "";
}
function $goog$style$getStyle_$$($element$$64$$, $style$$13$$) {
  return $goog$style$getComputedStyle$$($element$$64$$, $style$$13$$) || ($element$$64$$.currentStyle ? $element$$64$$.currentStyle[$style$$13$$] : null) || $element$$64$$.style && $element$$64$$.style[$style$$13$$];
}
function $goog$style$getBoundingClientRect_$$($doc$$36_el$$20$$) {
  var $rect$$5$$;
  try {
    $rect$$5$$ = $doc$$36_el$$20$$.getBoundingClientRect();
  } catch ($e$$58$$) {
    return{left:0, top:0, right:0, bottom:0};
  }
  $goog$userAgent$IE$$ && $doc$$36_el$$20$$.ownerDocument.body && ($doc$$36_el$$20$$ = $doc$$36_el$$20$$.ownerDocument, $rect$$5$$.left -= $doc$$36_el$$20$$.documentElement.clientLeft + $doc$$36_el$$20$$.body.clientLeft, $rect$$5$$.top -= $doc$$36_el$$20$$.documentElement.clientTop + $doc$$36_el$$20$$.body.clientTop);
  return $rect$$5$$;
}
function $goog$style$getOffsetParent$$($element$$75_parent$$19$$) {
  if ($goog$userAgent$IE$$ && !($goog$userAgent$IE$$ && 8 <= $goog$userAgent$DOCUMENT_MODE$$)) {
    return $element$$75_parent$$19$$.offsetParent;
  }
  var $doc$$37$$ = $goog$dom$getOwnerDocument$$($element$$75_parent$$19$$), $positionStyle$$ = $goog$style$getStyle_$$($element$$75_parent$$19$$, "position"), $skipStatic$$ = "fixed" == $positionStyle$$ || "absolute" == $positionStyle$$;
  for ($element$$75_parent$$19$$ = $element$$75_parent$$19$$.parentNode;$element$$75_parent$$19$$ && $element$$75_parent$$19$$ != $doc$$37$$;$element$$75_parent$$19$$ = $element$$75_parent$$19$$.parentNode) {
    if ($positionStyle$$ = $goog$style$getStyle_$$($element$$75_parent$$19$$, "position"), $skipStatic$$ = $skipStatic$$ && "static" == $positionStyle$$ && $element$$75_parent$$19$$ != $doc$$37$$.documentElement && $element$$75_parent$$19$$ != $doc$$37$$.body, !$skipStatic$$ && ($element$$75_parent$$19$$.scrollWidth > $element$$75_parent$$19$$.clientWidth || $element$$75_parent$$19$$.scrollHeight > $element$$75_parent$$19$$.clientHeight || "fixed" == $positionStyle$$ || "absolute" == $positionStyle$$ || 
    "relative" == $positionStyle$$)) {
      return $element$$75_parent$$19$$;
    }
  }
  return null;
}
function $goog$style$getPageOffset$$($el$$23_el$$inline_1125_scrollCoord_vpBox$$) {
  var $box$$7_doc$$inline_427_parent$$20$$, $doc$$38_doc$$inline_1124_win$$inline_1126$$ = $goog$dom$getOwnerDocument$$($el$$23_el$$inline_1125_scrollCoord_vpBox$$), $positionStyle$$1$$ = $goog$style$getStyle_$$($el$$23_el$$inline_1125_scrollCoord_vpBox$$, "position");
  $goog$asserts$assertObject$$($el$$23_el$$inline_1125_scrollCoord_vpBox$$, "Parameter is required");
  var $BUGGY_GECKO_BOX_OBJECT$$ = $goog$userAgent$GECKO$$ && $doc$$38_doc$$inline_1124_win$$inline_1126$$.getBoxObjectFor && !$el$$23_el$$inline_1125_scrollCoord_vpBox$$.getBoundingClientRect && "absolute" == $positionStyle$$1$$ && ($box$$7_doc$$inline_427_parent$$20$$ = $doc$$38_doc$$inline_1124_win$$inline_1126$$.getBoxObjectFor($el$$23_el$$inline_1125_scrollCoord_vpBox$$)) && (0 > $box$$7_doc$$inline_427_parent$$20$$.screenX || 0 > $box$$7_doc$$inline_427_parent$$20$$.screenY), $pos$$10$$ = new $goog$math$Coordinate$$(0, 
  0), $JSCompiler_temp$$1057_viewportElement$$;
  $box$$7_doc$$inline_427_parent$$20$$ = $doc$$38_doc$$inline_1124_win$$inline_1126$$ ? $goog$dom$getOwnerDocument$$($doc$$38_doc$$inline_1124_win$$inline_1126$$) : document;
  ($JSCompiler_temp$$1057_viewportElement$$ = !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$) || ($JSCompiler_temp$$1057_viewportElement$$ = "CSS1Compat" == $goog$dom$getDomHelper$$($box$$7_doc$$inline_427_parent$$20$$).$document_$.compatMode);
  $JSCompiler_temp$$1057_viewportElement$$ = $JSCompiler_temp$$1057_viewportElement$$ ? $box$$7_doc$$inline_427_parent$$20$$.documentElement : $box$$7_doc$$inline_427_parent$$20$$.body;
  if ($el$$23_el$$inline_1125_scrollCoord_vpBox$$ == $JSCompiler_temp$$1057_viewportElement$$) {
    return $pos$$10$$;
  }
  if ($el$$23_el$$inline_1125_scrollCoord_vpBox$$.getBoundingClientRect) {
    $box$$7_doc$$inline_427_parent$$20$$ = $goog$style$getBoundingClientRect_$$($el$$23_el$$inline_1125_scrollCoord_vpBox$$), $doc$$38_doc$$inline_1124_win$$inline_1126$$ = $goog$dom$getDomHelper$$($doc$$38_doc$$inline_1124_win$$inline_1126$$).$document_$, $el$$23_el$$inline_1125_scrollCoord_vpBox$$ = $goog$userAgent$WEBKIT$$ || "CSS1Compat" != $doc$$38_doc$$inline_1124_win$$inline_1126$$.compatMode ? $doc$$38_doc$$inline_1124_win$$inline_1126$$.body || $doc$$38_doc$$inline_1124_win$$inline_1126$$.documentElement : 
    $doc$$38_doc$$inline_1124_win$$inline_1126$$.documentElement, $doc$$38_doc$$inline_1124_win$$inline_1126$$ = $doc$$38_doc$$inline_1124_win$$inline_1126$$.parentWindow || $doc$$38_doc$$inline_1124_win$$inline_1126$$.defaultView, $el$$23_el$$inline_1125_scrollCoord_vpBox$$ = $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("10") && $doc$$38_doc$$inline_1124_win$$inline_1126$$.pageYOffset != $el$$23_el$$inline_1125_scrollCoord_vpBox$$.scrollTop ? new $goog$math$Coordinate$$($el$$23_el$$inline_1125_scrollCoord_vpBox$$.scrollLeft, 
    $el$$23_el$$inline_1125_scrollCoord_vpBox$$.scrollTop) : new $goog$math$Coordinate$$($doc$$38_doc$$inline_1124_win$$inline_1126$$.pageXOffset || $el$$23_el$$inline_1125_scrollCoord_vpBox$$.scrollLeft, $doc$$38_doc$$inline_1124_win$$inline_1126$$.pageYOffset || $el$$23_el$$inline_1125_scrollCoord_vpBox$$.scrollTop), $pos$$10$$.x = $box$$7_doc$$inline_427_parent$$20$$.left + $el$$23_el$$inline_1125_scrollCoord_vpBox$$.x, $pos$$10$$.y = $box$$7_doc$$inline_427_parent$$20$$.top + $el$$23_el$$inline_1125_scrollCoord_vpBox$$.y
    ;
  } else {
    if ($doc$$38_doc$$inline_1124_win$$inline_1126$$.getBoxObjectFor && !$BUGGY_GECKO_BOX_OBJECT$$) {
      $box$$7_doc$$inline_427_parent$$20$$ = $doc$$38_doc$$inline_1124_win$$inline_1126$$.getBoxObjectFor($el$$23_el$$inline_1125_scrollCoord_vpBox$$), $el$$23_el$$inline_1125_scrollCoord_vpBox$$ = $doc$$38_doc$$inline_1124_win$$inline_1126$$.getBoxObjectFor($JSCompiler_temp$$1057_viewportElement$$), $pos$$10$$.x = $box$$7_doc$$inline_427_parent$$20$$.screenX - $el$$23_el$$inline_1125_scrollCoord_vpBox$$.screenX, $pos$$10$$.y = $box$$7_doc$$inline_427_parent$$20$$.screenY - $el$$23_el$$inline_1125_scrollCoord_vpBox$$.screenY
      ;
    } else {
      $box$$7_doc$$inline_427_parent$$20$$ = $el$$23_el$$inline_1125_scrollCoord_vpBox$$;
      do {
        $pos$$10$$.x += $box$$7_doc$$inline_427_parent$$20$$.offsetLeft;
        $pos$$10$$.y += $box$$7_doc$$inline_427_parent$$20$$.offsetTop;
        $box$$7_doc$$inline_427_parent$$20$$ != $el$$23_el$$inline_1125_scrollCoord_vpBox$$ && ($pos$$10$$.x += $box$$7_doc$$inline_427_parent$$20$$.clientLeft || 0, $pos$$10$$.y += $box$$7_doc$$inline_427_parent$$20$$.clientTop || 0);
        if ($goog$userAgent$WEBKIT$$ && "fixed" == $goog$style$getStyle_$$($box$$7_doc$$inline_427_parent$$20$$, "position")) {
          $pos$$10$$.x += $doc$$38_doc$$inline_1124_win$$inline_1126$$.body.scrollLeft;
          $pos$$10$$.y += $doc$$38_doc$$inline_1124_win$$inline_1126$$.body.scrollTop;
          break;
        }
        $box$$7_doc$$inline_427_parent$$20$$ = $box$$7_doc$$inline_427_parent$$20$$.offsetParent;
      } while ($box$$7_doc$$inline_427_parent$$20$$ && $box$$7_doc$$inline_427_parent$$20$$ != $el$$23_el$$inline_1125_scrollCoord_vpBox$$);
      if ($goog$userAgent$OPERA$$ || $goog$userAgent$WEBKIT$$ && "absolute" == $positionStyle$$1$$) {
        $pos$$10$$.y -= $doc$$38_doc$$inline_1124_win$$inline_1126$$.body.offsetTop;
      }
      for ($box$$7_doc$$inline_427_parent$$20$$ = $el$$23_el$$inline_1125_scrollCoord_vpBox$$;($box$$7_doc$$inline_427_parent$$20$$ = $goog$style$getOffsetParent$$($box$$7_doc$$inline_427_parent$$20$$)) && $box$$7_doc$$inline_427_parent$$20$$ != $doc$$38_doc$$inline_1124_win$$inline_1126$$.body && $box$$7_doc$$inline_427_parent$$20$$ != $JSCompiler_temp$$1057_viewportElement$$;) {
        $pos$$10$$.x -= $box$$7_doc$$inline_427_parent$$20$$.scrollLeft, $goog$userAgent$OPERA$$ && "TR" == $box$$7_doc$$inline_427_parent$$20$$.tagName || ($pos$$10$$.y -= $box$$7_doc$$inline_427_parent$$20$$.scrollTop);
      }
    }
  }
  return $pos$$10$$;
}
function $goog$style$getPixelStyleValue_$$($value$$120$$) {
  "number" == typeof $value$$120$$ && ($value$$120$$ = Math.round($value$$120$$) + "px");
  return $value$$120$$;
}
function $goog$style$evaluateWithTemporaryDisplay_$$($element$$83_retVal$$3$$) {
  var $fn$$15$$ = $goog$style$getSizeWithDisplay_$$;
  if ("none" != $goog$style$getStyle_$$($element$$83_retVal$$3$$, "display")) {
    return $fn$$15$$($element$$83_retVal$$3$$);
  }
  var $style$$14$$ = $element$$83_retVal$$3$$.style, $originalDisplay$$ = $style$$14$$.display, $originalVisibility$$ = $style$$14$$.visibility, $originalPosition$$ = $style$$14$$.position;
  $style$$14$$.visibility = "hidden";
  $style$$14$$.position = "absolute";
  $style$$14$$.display = "inline";
  $element$$83_retVal$$3$$ = $fn$$15$$($element$$83_retVal$$3$$);
  $style$$14$$.display = $originalDisplay$$;
  $style$$14$$.position = $originalPosition$$;
  $style$$14$$.visibility = $originalVisibility$$;
  return $element$$83_retVal$$3$$;
}
function $goog$style$getSizeWithDisplay_$$($clientRect_element$$84$$) {
  var $offsetWidth$$ = $clientRect_element$$84$$.offsetWidth, $offsetHeight$$ = $clientRect_element$$84$$.offsetHeight, $webkitOffsetsZero$$ = $goog$userAgent$WEBKIT$$ && !$offsetWidth$$ && !$offsetHeight$$;
  return $goog$isDef$$($offsetWidth$$) && !$webkitOffsetsZero$$ || !$clientRect_element$$84$$.getBoundingClientRect ? new $goog$math$Size$$($offsetWidth$$, $offsetHeight$$) : ($clientRect_element$$84$$ = $goog$style$getBoundingClientRect_$$($clientRect_element$$84$$), new $goog$math$Size$$($clientRect_element$$84$$.right - $clientRect_element$$84$$.left, $clientRect_element$$84$$.bottom - $clientRect_element$$84$$.top));
}
function $goog$style$setElementShown$$($el$$35$$, $isShown$$) {
  $el$$35$$.style.display = $isShown$$ ? "" : "none";
}
;function $goog$Timer$$($opt_interval$$, $opt_timerObject$$) {
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
;function $goog$async$Delay$$($listener$$73$$, $opt_interval$$1$$, $opt_handler$$10$$) {
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
    var $location$$inline_435$$ = $goog$global$$.location;
    if ($location$$inline_435$$) {
      var $domain$$inline_437_href$$inline_436_uri$$inline_1291$$ = $location$$inline_435$$.href;
      if ($domain$$inline_437_href$$inline_436_uri$$inline_1291$$ && ($domain$$inline_437_href$$inline_436_uri$$inline_1291$$ = ($domain$$inline_437_href$$inline_436_uri$$inline_1291$$ = $goog$uri$utils$split$$($domain$$inline_437_href$$inline_436_uri$$inline_1291$$)[3] || null) && decodeURIComponent($domain$$inline_437_href$$inline_436_uri$$inline_1291$$)) && $domain$$inline_437_href$$inline_436_uri$$inline_1291$$ != $location$$inline_435$$.hostname) {
        throw $goog$uri$utils$needsPhishingProtection_$$ = !0, Error();
      }
    }
  }
  return $uri$$11$$.match($goog$uri$utils$splitRe_$$);
}
var $goog$uri$utils$needsPhishingProtection_$$ = $goog$userAgent$WEBKIT$$;
function $goog$uri$utils$getHost$$($opt_scheme$$inline_439_uri$$27$$) {
  var $opt_port$$inline_442_pieces$$ = $goog$uri$utils$split$$($opt_scheme$$inline_439_uri$$27$$);
  $opt_scheme$$inline_439_uri$$27$$ = $opt_port$$inline_442_pieces$$[1];
  var $opt_userInfo$$inline_440$$ = $opt_port$$inline_442_pieces$$[2], $opt_domain$$inline_441$$ = $opt_port$$inline_442_pieces$$[3], $opt_port$$inline_442_pieces$$ = $opt_port$$inline_442_pieces$$[4], $out$$inline_446$$ = "";
  $opt_scheme$$inline_439_uri$$27$$ && ($out$$inline_446$$ += $opt_scheme$$inline_439_uri$$27$$ + ":");
  $opt_domain$$inline_441$$ && ($out$$inline_446$$ += "//", $opt_userInfo$$inline_440$$ && ($out$$inline_446$$ += $opt_userInfo$$inline_440$$ + "@"), $out$$inline_446$$ += $opt_domain$$inline_441$$, $opt_port$$inline_442_pieces$$ && ($out$$inline_446$$ += ":" + $opt_port$$inline_442_pieces$$));
  return $out$$inline_446$$;
}
;function $goog$net$XhrIo$$($opt_xmlHttpFactory$$) {
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
  $contentTypeKey_opt_headers$$1$$ && $goog$structs$forEach$$($contentTypeKey_opt_headers$$1$$, function($value$$130$$, $key$$80$$) {
    $headers$$.set($key$$80$$, $value$$130$$);
  });
  $contentTypeKey_opt_headers$$1$$ = $goog$array$find$$($headers$$.$getKeys$(), $goog$net$XhrIo$isContentTypeHeader_$$);
  $contentIsFormData_opt_content$$3$$ = $goog$global$$.FormData && $content$$8_url$$39$$ instanceof $goog$global$$.FormData;
  !$goog$array$contains$$($goog$net$XhrIo$METHODS_WITH_FORM_DATA$$, $method$$3_opt_method$$1$$) || $contentTypeKey_opt_headers$$1$$ || $contentIsFormData_opt_content$$3$$ || $headers$$.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  $headers$$.forEach(function($value$$131$$, $key$$81$$) {
    this.$xhr_$.setRequestHeader($key$$81$$, $value$$131$$);
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
              } catch ($e$$inline_452$$) {
                $goog$log$fine$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$logger_$, "Can not get status: " + $e$$inline_452$$.message), $JSCompiler_inline_result$$43$$ = "";
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
    } catch ($e$$60$$) {
      $goog$log$error$$($JSCompiler_StaticMethods_cleanUpXhr_$self$$.$logger_$, "Problem encountered resetting onreadystatechange: " + $e$$60$$.message);
    }
  }
}
function $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$$($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$) {
  $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$xhr_$ && $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$useXhr2Timeout_$ && ($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$xhr_$.ontimeout = null);
  $goog$isNumber$$($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$timeoutId_$) && ($goog$global$$.clearTimeout($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$timeoutId_$), $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$timeoutId_$ = null);
}
$JSCompiler_prototypeAlias$$.$isActive$ = function $$JSCompiler_prototypeAlias$$$$isActive$$() {
  return!!this.$xhr_$;
};
function $JSCompiler_StaticMethods_isSuccess$$($JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1130_scheme$$inline_1129$$) {
  var $JSCompiler_temp$$10_status$$1$$ = $JSCompiler_StaticMethods_getStatus$$($JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1130_scheme$$inline_1129$$), $JSCompiler_inline_result$$90_JSCompiler_temp$$9$$;
  a: {
    switch($JSCompiler_temp$$10_status$$1$$) {
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
        $JSCompiler_inline_result$$90_JSCompiler_temp$$9$$ = !0;
        break a;
      default:
        $JSCompiler_inline_result$$90_JSCompiler_temp$$9$$ = !1;
    }
  }
  if (!$JSCompiler_inline_result$$90_JSCompiler_temp$$9$$) {
    if ($JSCompiler_temp$$10_status$$1$$ = 0 === $JSCompiler_temp$$10_status$$1$$) {
      $JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1130_scheme$$inline_1129$$ = $goog$uri$utils$split$$(String($JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1130_scheme$$inline_1129$$.$lastUri_$))[1] || null, !$JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1130_scheme$$inline_1129$$ && self.location && ($JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1130_scheme$$inline_1129$$ = self.location.protocol, $JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1130_scheme$$inline_1129$$ = 
      $JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1130_scheme$$inline_1129$$.substr(0, $JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1130_scheme$$inline_1129$$.length - 1)), $JSCompiler_temp$$10_status$$1$$ = !$goog$net$XhrIo$HTTP_SCHEME_PATTERN$$.test($JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1130_scheme$$inline_1129$$ ? $JSCompiler_StaticMethods_isSuccess$self_protocol$$inline_1130_scheme$$inline_1129$$.toLowerCase() : "");
    }
    $JSCompiler_inline_result$$90_JSCompiler_temp$$9$$ = $JSCompiler_temp$$10_status$$1$$;
  }
  return $JSCompiler_inline_result$$90_JSCompiler_temp$$9$$;
}
function $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_getReadyState$self$$) {
  return $JSCompiler_StaticMethods_getReadyState$self$$.$xhr_$ ? $JSCompiler_StaticMethods_getReadyState$self$$.$xhr_$.readyState : 0;
}
function $JSCompiler_StaticMethods_getStatus$$($JSCompiler_StaticMethods_getStatus$self$$) {
  try {
    return 2 < $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_getStatus$self$$) ? $JSCompiler_StaticMethods_getStatus$self$$.$xhr_$.status : -1;
  } catch ($e$$61$$) {
    return-1;
  }
}
function $JSCompiler_StaticMethods_formatMsg_$$($JSCompiler_StaticMethods_formatMsg_$self$$, $msg$$21$$) {
  return $msg$$21$$ + " [" + $JSCompiler_StaticMethods_formatMsg_$self$$.$lastMethod_$ + " " + $JSCompiler_StaticMethods_formatMsg_$self$$.$lastUri_$ + " " + $JSCompiler_StaticMethods_getStatus$$($JSCompiler_StaticMethods_formatMsg_$self$$) + "]";
}
;function $goog$net$XhrIoPool$$($opt_headers$$2$$, $opt_minCount$$2$$, $opt_maxCount$$2$$) {
  $goog$structs$PriorityPool$$.call(this, $opt_minCount$$2$$, $opt_maxCount$$2$$);
  this.$headers_$ = $opt_headers$$2$$;
}
$goog$inherits$$($goog$net$XhrIoPool$$, $goog$structs$PriorityPool$$);
$goog$net$XhrIoPool$$.prototype.$createObject$ = function $$goog$net$XhrIoPool$$$$$createObject$$() {
  var $xhrIo$$ = new $goog$net$XhrIo$$, $headers$$1$$ = this.$headers_$;
  $headers$$1$$ && $headers$$1$$.forEach(function($value$$132$$, $key$$83$$) {
    $xhrIo$$.headers.set($key$$83$$, $value$$132$$);
  });
  return $xhrIo$$;
};
$goog$net$XhrIoPool$$.prototype.$objectCanBeReused$ = function $$goog$net$XhrIoPool$$$$$objectCanBeReused$$($obj$$110$$) {
  return!$obj$$110$$.$disposed_$ && !$obj$$110$$.$isActive$();
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
    $opt_force$$ && ($xhrIo$$1$$ && (this.$eventHandler_$.$unlisten$($xhrIo$$1$$, $goog$net$XhrManager$XHR_EVENT_TYPES_$$, $request$$1$$.$xhrEventCallback_$), $goog$events$listenOnce$$($xhrIo$$1$$, "ready", function() {
      var $JSCompiler_StaticMethods_releaseObject$self$$inline_1138$$ = this.$xhrPool_$;
      $JSCompiler_StaticMethods_releaseObject$self$$inline_1138$$.$inUseSet_$.remove($xhrIo$$1$$) && $JSCompiler_StaticMethods_releaseObject$self$$inline_1138$$.$addFreeObject$($xhrIo$$1$$);
    }, !1, this)), this.$requests_$.remove($id$$12$$));
    $xhrIo$$1$$ && $xhrIo$$1$$.abort();
  }
};
$JSCompiler_prototypeAlias$$.$handleAvailableXhr_$ = function $$JSCompiler_prototypeAlias$$$$handleAvailableXhr_$$($id$$13$$, $xhrIo$$2$$) {
  var $JSCompiler_StaticMethods_releaseObject$self$$inline_1141_request$$2$$ = this.$requests_$.get($id$$13$$);
  $JSCompiler_StaticMethods_releaseObject$self$$inline_1141_request$$2$$ && !$JSCompiler_StaticMethods_releaseObject$self$$inline_1141_request$$2$$.$xhrIo$ ? (this.$eventHandler_$.$listen$($xhrIo$$2$$, $goog$net$XhrManager$XHR_EVENT_TYPES_$$, $JSCompiler_StaticMethods_releaseObject$self$$inline_1141_request$$2$$.$xhrEventCallback_$), $xhrIo$$2$$.$setTimeoutInterval$(this.$timeoutInterval_$), $xhrIo$$2$$.$responseType_$ = $JSCompiler_StaticMethods_releaseObject$self$$inline_1141_request$$2$$.$responseType_$, 
  $JSCompiler_StaticMethods_releaseObject$self$$inline_1141_request$$2$$.$xhrIo$ = $xhrIo$$2$$, this.dispatchEvent(new $goog$net$XhrManager$Event$$("ready", this, $id$$13$$, $xhrIo$$2$$)), $JSCompiler_StaticMethods_retry_$$(this, $id$$13$$, $xhrIo$$2$$), $JSCompiler_StaticMethods_releaseObject$self$$inline_1141_request$$2$$.$aborted_$ && $xhrIo$$2$$.abort()) : ($JSCompiler_StaticMethods_releaseObject$self$$inline_1141_request$$2$$ = this.$xhrPool_$, $JSCompiler_StaticMethods_releaseObject$self$$inline_1141_request$$2$$.$inUseSet_$.remove($xhrIo$$2$$) && 
  $JSCompiler_StaticMethods_releaseObject$self$$inline_1141_request$$2$$.$addFreeObject$($xhrIo$$2$$));
};
$JSCompiler_prototypeAlias$$.$handleEvent_$ = function $$JSCompiler_prototypeAlias$$$$handleEvent_$$($id$$14$$, $e$$67$$) {
  var $JSCompiler_inline_result$$50_xhrIo$$3$$ = $e$$67$$.target;
  switch($e$$67$$.type) {
    case "ready":
      $JSCompiler_StaticMethods_retry_$$(this, $id$$14$$, $JSCompiler_inline_result$$50_xhrIo$$3$$);
      break;
    case "complete":
      a: {
        var $JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1146_request$$inline_473$$ = this.$requests_$.get($id$$14$$);
        if (7 == $JSCompiler_inline_result$$50_xhrIo$$3$$.$lastErrorCode_$ || $JSCompiler_StaticMethods_isSuccess$$($JSCompiler_inline_result$$50_xhrIo$$3$$) || $JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1146_request$$inline_473$$.$attemptCount_$ > $JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1146_request$$inline_473$$.$maxRetries_$) {
          if (this.dispatchEvent(new $goog$net$XhrManager$Event$$("complete", this, $id$$14$$, $JSCompiler_inline_result$$50_xhrIo$$3$$)), $JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1146_request$$inline_473$$ && ($JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1146_request$$inline_473$$.$completed_$ = !0, $JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1146_request$$inline_473$$.$completeCallback_$)) {
            $JSCompiler_inline_result$$50_xhrIo$$3$$ = $JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1146_request$$inline_473$$.$completeCallback_$.call($JSCompiler_inline_result$$50_xhrIo$$3$$, $e$$67$$);
            break a;
          }
        }
        $JSCompiler_inline_result$$50_xhrIo$$3$$ = null;
      }
      return $JSCompiler_inline_result$$50_xhrIo$$3$$;
    case "success":
      this.dispatchEvent(new $goog$net$XhrManager$Event$$("success", this, $id$$14$$, $JSCompiler_inline_result$$50_xhrIo$$3$$));
      break;
    case "timeout":
    ;
    case "error":
      $JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1146_request$$inline_473$$ = this.$requests_$.get($id$$14$$);
      $JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1146_request$$inline_473$$.$attemptCount_$ > $JSCompiler_StaticMethods_hasReachedMaxRetries$self$$inline_1146_request$$inline_473$$.$maxRetries_$ && this.dispatchEvent(new $goog$net$XhrManager$Event$$("error", this, $id$$14$$, $JSCompiler_inline_result$$50_xhrIo$$3$$));
      break;
    case "abort":
      this.dispatchEvent(new $goog$net$XhrManager$Event$$("abort", this, $id$$14$$, $JSCompiler_inline_result$$50_xhrIo$$3$$));
  }
  return null;
};
function $JSCompiler_StaticMethods_retry_$$($JSCompiler_StaticMethods_releaseObject$self$$inline_1152_JSCompiler_StaticMethods_retry_$self$$, $id$$15$$, $xhrIo$$4$$) {
  var $request$$3$$ = $JSCompiler_StaticMethods_releaseObject$self$$inline_1152_JSCompiler_StaticMethods_retry_$self$$.$requests_$.get($id$$15$$);
  !$request$$3$$ || $request$$3$$.$completed_$ || $request$$3$$.$attemptCount_$ > $request$$3$$.$maxRetries_$ ? ($request$$3$$ && ($JSCompiler_StaticMethods_releaseObject$self$$inline_1152_JSCompiler_StaticMethods_retry_$self$$.$eventHandler_$.$unlisten$($xhrIo$$4$$, $goog$net$XhrManager$XHR_EVENT_TYPES_$$, $request$$3$$.$xhrEventCallback_$), $JSCompiler_StaticMethods_releaseObject$self$$inline_1152_JSCompiler_StaticMethods_retry_$self$$.$requests_$.remove($id$$15$$)), $JSCompiler_StaticMethods_releaseObject$self$$inline_1152_JSCompiler_StaticMethods_retry_$self$$ = 
  $JSCompiler_StaticMethods_releaseObject$self$$inline_1152_JSCompiler_StaticMethods_retry_$self$$.$xhrPool_$, $JSCompiler_StaticMethods_releaseObject$self$$inline_1152_JSCompiler_StaticMethods_retry_$self$$.$inUseSet_$.remove($xhrIo$$4$$) && $JSCompiler_StaticMethods_releaseObject$self$$inline_1152_JSCompiler_StaticMethods_retry_$self$$.$addFreeObject$($xhrIo$$4$$)) : ($request$$3$$.$attemptCount_$++, $xhrIo$$4$$.send($request$$3$$.$url_$, $request$$3$$.$method_$, $request$$3$$.$content_$, $request$$3$$.$headers_$));
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
function $goog$net$XhrManager$Event$$($type$$130$$, $target$$55$$, $id$$20$$, $xhrIo$$11$$) {
  $goog$events$Event$$.call(this, $type$$130$$, $target$$55$$);
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
;function $goog$Uri$$($opt_uri$$, $opt_ignoreCase$$) {
  var $m$$4_newDomain$$inline_494_newFragment$$inline_502_newFragment$$inline_518_newPath$$inline_498_newUserInfo$$inline_490$$;
  if ($opt_uri$$ instanceof $goog$Uri$$) {
    this.$ignoreCase_$ = $goog$isDef$$($opt_ignoreCase$$) ? $opt_ignoreCase$$ : $opt_uri$$.$ignoreCase_$, $JSCompiler_StaticMethods_setScheme$$(this, $opt_uri$$.$scheme_$), $m$$4_newDomain$$inline_494_newFragment$$inline_502_newFragment$$inline_518_newPath$$inline_498_newUserInfo$$inline_490$$ = $opt_uri$$.$userInfo_$, $JSCompiler_StaticMethods_enforceReadOnly$$(this), this.$userInfo_$ = $m$$4_newDomain$$inline_494_newFragment$$inline_502_newFragment$$inline_518_newPath$$inline_498_newUserInfo$$inline_490$$, 
    $m$$4_newDomain$$inline_494_newFragment$$inline_502_newFragment$$inline_518_newPath$$inline_498_newUserInfo$$inline_490$$ = $opt_uri$$.$domain_$, $JSCompiler_StaticMethods_enforceReadOnly$$(this), this.$domain_$ = $m$$4_newDomain$$inline_494_newFragment$$inline_502_newFragment$$inline_518_newPath$$inline_498_newUserInfo$$inline_490$$, $JSCompiler_StaticMethods_setPort$$(this, $opt_uri$$.$port_$), $m$$4_newDomain$$inline_494_newFragment$$inline_502_newFragment$$inline_518_newPath$$inline_498_newUserInfo$$inline_490$$ = 
    $opt_uri$$.$path_$, $JSCompiler_StaticMethods_enforceReadOnly$$(this), this.$path_$ = $m$$4_newDomain$$inline_494_newFragment$$inline_502_newFragment$$inline_518_newPath$$inline_498_newUserInfo$$inline_490$$, $JSCompiler_StaticMethods_setQueryData$$(this, $opt_uri$$.$queryData_$.clone()), $m$$4_newDomain$$inline_494_newFragment$$inline_502_newFragment$$inline_518_newPath$$inline_498_newUserInfo$$inline_490$$ = $opt_uri$$.$fragment_$, $JSCompiler_StaticMethods_enforceReadOnly$$(this), this.$fragment_$ = 
    $m$$4_newDomain$$inline_494_newFragment$$inline_502_newFragment$$inline_518_newPath$$inline_498_newUserInfo$$inline_490$$;
  } else {
    if ($opt_uri$$ && ($m$$4_newDomain$$inline_494_newFragment$$inline_502_newFragment$$inline_518_newPath$$inline_498_newUserInfo$$inline_490$$ = $goog$uri$utils$split$$(String($opt_uri$$)))) {
      this.$ignoreCase_$ = !!$opt_ignoreCase$$;
      $JSCompiler_StaticMethods_setScheme$$(this, $m$$4_newDomain$$inline_494_newFragment$$inline_502_newFragment$$inline_518_newPath$$inline_498_newUserInfo$$inline_490$$[1] || "", !0);
      var $newDomain$$inline_510_newPath$$inline_514_newUserInfo$$inline_506$$ = $m$$4_newDomain$$inline_494_newFragment$$inline_502_newFragment$$inline_518_newPath$$inline_498_newUserInfo$$inline_490$$[2] || "";
      $JSCompiler_StaticMethods_enforceReadOnly$$(this);
      this.$userInfo_$ = $goog$Uri$decodeOrEmpty_$$($newDomain$$inline_510_newPath$$inline_514_newUserInfo$$inline_506$$);
      $newDomain$$inline_510_newPath$$inline_514_newUserInfo$$inline_506$$ = $m$$4_newDomain$$inline_494_newFragment$$inline_502_newFragment$$inline_518_newPath$$inline_498_newUserInfo$$inline_490$$[3] || "";
      $JSCompiler_StaticMethods_enforceReadOnly$$(this);
      this.$domain_$ = $goog$Uri$decodeOrEmpty_$$($newDomain$$inline_510_newPath$$inline_514_newUserInfo$$inline_506$$);
      $JSCompiler_StaticMethods_setPort$$(this, $m$$4_newDomain$$inline_494_newFragment$$inline_502_newFragment$$inline_518_newPath$$inline_498_newUserInfo$$inline_490$$[4]);
      $newDomain$$inline_510_newPath$$inline_514_newUserInfo$$inline_506$$ = $m$$4_newDomain$$inline_494_newFragment$$inline_502_newFragment$$inline_518_newPath$$inline_498_newUserInfo$$inline_490$$[5] || "";
      $JSCompiler_StaticMethods_enforceReadOnly$$(this);
      this.$path_$ = $goog$Uri$decodeOrEmpty_$$($newDomain$$inline_510_newPath$$inline_514_newUserInfo$$inline_506$$);
      $JSCompiler_StaticMethods_setQueryData$$(this, $m$$4_newDomain$$inline_494_newFragment$$inline_502_newFragment$$inline_518_newPath$$inline_498_newUserInfo$$inline_490$$[6] || "", !0);
      $m$$4_newDomain$$inline_494_newFragment$$inline_502_newFragment$$inline_518_newPath$$inline_498_newUserInfo$$inline_490$$ = $m$$4_newDomain$$inline_494_newFragment$$inline_502_newFragment$$inline_518_newPath$$inline_498_newUserInfo$$inline_490$$[7] || "";
      $JSCompiler_StaticMethods_enforceReadOnly$$(this);
      this.$fragment_$ = $goog$Uri$decodeOrEmpty_$$($m$$4_newDomain$$inline_494_newFragment$$inline_502_newFragment$$inline_518_newPath$$inline_498_newUserInfo$$inline_490$$);
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
  var $out$$2$$ = [], $domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$ = this.$scheme_$;
  $domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$ && $out$$2$$.push($goog$Uri$encodeSpecialChars_$$($domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$), ":");
  if ($domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$ = this.$domain_$) {
    $out$$2$$.push("//");
    var $userInfo$$ = this.$userInfo_$;
    $userInfo$$ && $out$$2$$.push($goog$Uri$encodeSpecialChars_$$($userInfo$$, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$), "@");
    $out$$2$$.push(encodeURIComponent(String($domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$)));
    $domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$ = this.$port_$;
    null != $domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$ && $out$$2$$.push(":", String($domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$));
  }
  if ($domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$ = this.$path_$) {
    this.$domain_$ && "/" != $domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$.charAt(0) && $out$$2$$.push("/"), $out$$2$$.push($goog$Uri$encodeSpecialChars_$$($domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$, "/" == $domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$.charAt(0) ? $goog$Uri$reDisallowedInAbsolutePath_$$ : $goog$Uri$reDisallowedInRelativePath_$$));
  }
  ($domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$ = this.$queryData_$.toString()) && $out$$2$$.push("?", $domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$);
  ($domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$ = this.$fragment_$) && $out$$2$$.push("#", $goog$Uri$encodeSpecialChars_$$($domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$, $goog$Uri$reDisallowedInFragment_$$));
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
function $JSCompiler_StaticMethods_getDecodedQuery$$() {
  var $JSCompiler_StaticMethods_getDecodedQuery$self$$ = new $goog$Uri$$(document.location.href);
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
function $goog$Uri$decodeOrEmpty_$$($val$$42$$) {
  return $val$$42$$ ? decodeURIComponent($val$$42$$) : "";
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
    for (var $pairs$$2$$ = $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$encodedQuery_$.split("&"), $i$$155$$ = 0;$i$$155$$ < $pairs$$2$$.length;$i$$155$$++) {
      var $indexOfEquals$$ = $pairs$$2$$[$i$$155$$].indexOf("="), $name$$78$$ = null, $value$$134$$ = null;
      0 <= $indexOfEquals$$ ? ($name$$78$$ = $pairs$$2$$[$i$$155$$].substring(0, $indexOfEquals$$), $value$$134$$ = $pairs$$2$$[$i$$155$$].substring($indexOfEquals$$ + 1)) : $name$$78$$ = $pairs$$2$$[$i$$155$$];
      $name$$78$$ = decodeURIComponent($name$$78$$.replace(/\+/g, " "));
      $name$$78$$ = $JSCompiler_StaticMethods_getKeyName_$$($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$, $name$$78$$);
      $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.add($name$$78$$, $value$$134$$ ? decodeURIComponent($value$$134$$.replace(/\+/g, " ")) : "");
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
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($key$$88$$, $value$$136$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  this.$encodedQuery_$ = null;
  $key$$88$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$$88$$);
  var $values$$20$$ = this.$keyMap_$.get($key$$88$$);
  $values$$20$$ || this.$keyMap_$.set($key$$88$$, $values$$20$$ = []);
  $values$$20$$.push($value$$136$$);
  this.$count_$++;
  return this;
};
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($key$$89$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  $key$$89$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$$89$$);
  return this.$keyMap_$.$containsKey$($key$$89$$) ? (this.$encodedQuery_$ = null, this.$count_$ -= this.$keyMap_$.get($key$$89$$).length, this.$keyMap_$.remove($key$$89$$)) : !1;
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$keyMap_$ = this.$encodedQuery_$ = null;
  this.$count_$ = 0;
};
$JSCompiler_prototypeAlias$$.$isEmpty$ = function $$JSCompiler_prototypeAlias$$$$isEmpty$$() {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  return 0 == this.$count_$;
};
$JSCompiler_prototypeAlias$$.$containsKey$ = function $$JSCompiler_prototypeAlias$$$$containsKey$$($key$$90$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  $key$$90$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$$90$$);
  return this.$keyMap_$.$containsKey$($key$$90$$);
};
$JSCompiler_prototypeAlias$$.$getKeys$ = function $$JSCompiler_prototypeAlias$$$$getKeys$$() {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  for (var $vals$$1$$ = this.$keyMap_$.$getValues$(), $keys$$14$$ = this.$keyMap_$.$getKeys$(), $rv$$25$$ = [], $i$$158$$ = 0;$i$$158$$ < $keys$$14$$.length;$i$$158$$++) {
    for (var $val$$43$$ = $vals$$1$$[$i$$158$$], $j$$11$$ = 0;$j$$11$$ < $val$$43$$.length;$j$$11$$++) {
      $rv$$25$$.push($keys$$14$$[$i$$158$$]);
    }
  }
  return $rv$$25$$;
};
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$($opt_key$$1_values$$21$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  var $rv$$26$$ = [];
  if ($goog$isString$$($opt_key$$1_values$$21$$)) {
    this.$containsKey$($opt_key$$1_values$$21$$) && ($rv$$26$$ = $goog$array$concat$$($rv$$26$$, this.$keyMap_$.get($JSCompiler_StaticMethods_getKeyName_$$(this, $opt_key$$1_values$$21$$))));
  } else {
    $opt_key$$1_values$$21$$ = this.$keyMap_$.$getValues$();
    for (var $i$$159$$ = 0;$i$$159$$ < $opt_key$$1_values$$21$$.length;$i$$159$$++) {
      $rv$$26$$ = $goog$array$concat$$($rv$$26$$, $opt_key$$1_values$$21$$[$i$$159$$]);
    }
  }
  return $rv$$26$$;
};
$JSCompiler_prototypeAlias$$.set = function $$JSCompiler_prototypeAlias$$$set$($key$$91$$, $value$$138$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  this.$encodedQuery_$ = null;
  $key$$91$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$$91$$);
  this.$containsKey$($key$$91$$) && (this.$count_$ -= this.$keyMap_$.get($key$$91$$).length);
  this.$keyMap_$.set($key$$91$$, [$value$$138$$]);
  this.$count_$++;
  return this;
};
$JSCompiler_prototypeAlias$$.get = function $$JSCompiler_prototypeAlias$$$get$($key$$92$$, $opt_default$$2$$) {
  var $values$$22$$ = $key$$92$$ ? this.$getValues$($key$$92$$) : [];
  return 0 < $values$$22$$.length ? String($values$$22$$[0]) : $opt_default$$2$$;
};
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
  if (this.$encodedQuery_$) {
    return this.$encodedQuery_$;
  }
  if (!this.$keyMap_$) {
    return "";
  }
  for (var $sb$$12$$ = [], $keys$$15$$ = this.$keyMap_$.$getKeys$(), $i$$160$$ = 0;$i$$160$$ < $keys$$15$$.length;$i$$160$$++) {
    for (var $key$$94_val$$44$$ = $keys$$15$$[$i$$160$$], $encodedKey$$ = encodeURIComponent(String($key$$94_val$$44$$)), $key$$94_val$$44$$ = this.$getValues$($key$$94_val$$44$$), $j$$12$$ = 0;$j$$12$$ < $key$$94_val$$44$$.length;$j$$12$$++) {
      var $param$$3$$ = $encodedKey$$;
      "" !== $key$$94_val$$44$$[$j$$12$$] && ($param$$3$$ += "=" + encodeURIComponent(String($key$$94_val$$44$$[$j$$12$$])));
      $sb$$12$$.push($param$$3$$);
    }
  }
  return this.$encodedQuery_$ = $sb$$12$$.join("&");
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
  $ignoreCase$$1$$ && !this.$ignoreCase_$ && ($JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this), this.$encodedQuery_$ = null, this.$keyMap_$.forEach(function($value$$140$$, $key$$96$$) {
    var $lowerCase$$ = $key$$96$$.toLowerCase();
    $key$$96$$ != $lowerCase$$ && (this.remove($key$$96$$), this.remove($lowerCase$$), 0 < $value$$140$$.length && (this.$encodedQuery_$ = null, this.$keyMap_$.set($JSCompiler_StaticMethods_getKeyName_$$(this, $lowerCase$$), $goog$array$toArray$$($value$$140$$)), this.$count_$ += $value$$140$$.length));
  }, this));
  this.$ignoreCase_$ = $ignoreCase$$1$$;
};
function $soy$renderAsElement$$($firstChild$$inline_531_html$$inline_530_opt_templateData$$4_templateResult$$inline_1167$$) {
  var $JSCompiler_inline_result$$24_opt_domHelper$$inline_528_wrapper$$inline_529$$;
  a: {
    var $html$$inline_1169_template$$inline_525$$ = $viewbix$sdk$formfield$template$field$$;
    $JSCompiler_inline_result$$24_opt_domHelper$$inline_528_wrapper$$inline_529$$ = new $goog$dom$DomHelper$$(void 0);
    $goog$asserts$assert$$($html$$inline_1169_template$$inline_525$$, "Soy template may not be null.");
    $JSCompiler_inline_result$$24_opt_domHelper$$inline_528_wrapper$$inline_529$$ = ($JSCompiler_inline_result$$24_opt_domHelper$$inline_528_wrapper$$inline_529$$ || $goog$dom$getDomHelper$$()).createElement("DIV");
    $firstChild$$inline_531_html$$inline_530_opt_templateData$$4_templateResult$$inline_1167$$ = $html$$inline_1169_template$$inline_525$$($firstChild$$inline_531_html$$inline_530_opt_templateData$$4_templateResult$$inline_1167$$ || $goog$soy$defaultTemplateData_$$, void 0, void 0);
    $goog$isObject$$($firstChild$$inline_531_html$$inline_530_opt_templateData$$4_templateResult$$inline_1167$$) ? ($goog$asserts$fail$$("Soy template output is unsafe for use as HTML: " + $firstChild$$inline_531_html$$inline_530_opt_templateData$$4_templateResult$$inline_1167$$), $firstChild$$inline_531_html$$inline_530_opt_templateData$$4_templateResult$$inline_1167$$ = "zSoyz") : $firstChild$$inline_531_html$$inline_530_opt_templateData$$4_templateResult$$inline_1167$$ = String($firstChild$$inline_531_html$$inline_530_opt_templateData$$4_templateResult$$inline_1167$$);
    var $html$$inline_1169_template$$inline_525$$ = $firstChild$$inline_531_html$$inline_530_opt_templateData$$4_templateResult$$inline_1167$$, $matches$$inline_1170$$ = $html$$inline_1169_template$$inline_525$$.match($goog$soy$INVALID_TAG_TO_RENDER_$$);
    $goog$asserts$assert$$(!$matches$$inline_1170$$, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", $matches$$inline_1170$$ && $matches$$inline_1170$$[0], $html$$inline_1169_template$$inline_525$$);
    $JSCompiler_inline_result$$24_opt_domHelper$$inline_528_wrapper$$inline_529$$.innerHTML = $firstChild$$inline_531_html$$inline_530_opt_templateData$$4_templateResult$$inline_1167$$;
    if (1 == $JSCompiler_inline_result$$24_opt_domHelper$$inline_528_wrapper$$inline_529$$.childNodes.length && ($firstChild$$inline_531_html$$inline_530_opt_templateData$$4_templateResult$$inline_1167$$ = $JSCompiler_inline_result$$24_opt_domHelper$$inline_528_wrapper$$inline_529$$.firstChild, 1 == $firstChild$$inline_531_html$$inline_530_opt_templateData$$4_templateResult$$inline_1167$$.nodeType)) {
      $JSCompiler_inline_result$$24_opt_domHelper$$inline_528_wrapper$$inline_529$$ = $firstChild$$inline_531_html$$inline_530_opt_templateData$$4_templateResult$$inline_1167$$;
      break a;
    }
  }
  return $JSCompiler_inline_result$$24_opt_domHelper$$inline_528_wrapper$$inline_529$$;
}
function $soy$$0$0escapeHtml$$($value$$142$$) {
  return "object" === typeof $value$$142$$ && $value$$142$$ && 0 === $value$$142$$.$contentKind$ ? $value$$142$$.content : String($value$$142$$).replace($soy$esc$$0$0MATCHER_FOR_ESCAPE_HTML_$$, $soy$esc$$0$0REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$);
}
var $soy$esc$$0$0ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$ = {"\x00":"&#0;", '"':"&quot;", "&":"&amp;", "'":"&#39;", "<":"&lt;", ">":"&gt;", "\t":"&#9;", "\n":"&#10;", "\x0B":"&#11;", "\f":"&#12;", "\r":"&#13;", " ":"&#32;", "-":"&#45;", "/":"&#47;", "=":"&#61;", "`":"&#96;", "\u0085":"&#133;", "\u00a0":"&#160;", "\u2028":"&#8232;", "\u2029":"&#8233;"};
function $soy$esc$$0$0REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$($ch$$7$$) {
  return $soy$esc$$0$0ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$[$ch$$7$$];
}
var $soy$esc$$0$0MATCHER_FOR_ESCAPE_HTML_$$ = /[\x00\x22\x26\x27\x3c\x3e]/g;
function $viewbix$sdk$formfield$template$field$$($opt_data$$5$$, $opt_sb$$1$$) {
  var $output$$1$$ = $opt_sb$$1$$ || new $goog$string$StringBuffer$$;
  $output$$1$$.append("\t");
  switch($opt_data$$5$$.$formField$.type) {
    case $opt_data$$5$$.types.$ADDRESS$:
      $viewbix$sdk$formfield$template$textField$$($opt_data$$5$$.$formField$, $output$$1$$);
      break;
    case $opt_data$$5$$.types.$EMAIL$:
      $viewbix$sdk$formfield$template$inputField$$($opt_data$$5$$.$formField$, $output$$1$$);
      break;
    case $opt_data$$5$$.types.$TEXT_INPUT$:
      $viewbix$sdk$formfield$template$textField$$($opt_data$$5$$.$formField$, $output$$1$$);
      break;
    case $opt_data$$5$$.types.$TEXT_AREA$:
      $viewbix$sdk$formfield$template$fieldLabel$$($opt_data$$5$$.$formField$, $output$$1$$);
      $output$$1$$.append('<textarea id="', $soy$$0$0escapeHtml$$($opt_data$$5$$.$formField$.id), '" name="', $soy$$0$0escapeHtml$$($opt_data$$5$$.$formField$.name), '" ', $opt_data$$5$$.$formField$.placeholder ? 'placeholder="' + $soy$$0$0escapeHtml$$($opt_data$$5$$.$formField$.placeholder) + '"' : "", " >", $opt_data$$5$$.$formField$.defaultValue ? $soy$$0$0escapeHtml$$($opt_data$$5$$.$formField$.defaultValue) : "", "</textarea>");
      break;
    case $opt_data$$5$$.types.$NUMBER$:
      $viewbix$sdk$formfield$template$inputField$$($opt_data$$5$$.$formField$, $output$$1$$);
      break;
    case $opt_data$$5$$.types.$LABEL$:
      $output$$1$$.append('<div id="', $soy$$0$0escapeHtml$$($opt_data$$5$$.$formField$.id), '">', $opt_data$$5$$.$formField$.defaultValue ? $soy$$0$0escapeHtml$$($opt_data$$5$$.$formField$.defaultValue) : "", "</div>");
      break;
    case $opt_data$$5$$.types.$PASSWORD$:
      $viewbix$sdk$formfield$template$inputField$$($opt_data$$5$$.$formField$, $output$$1$$);
      break;
    case $opt_data$$5$$.types.$CHECKBOX$:
      $viewbix$sdk$formfield$template$checkboxFields$$($opt_data$$5$$.$formField$, $output$$1$$);
      break;
    case $opt_data$$5$$.types.$RADIO$:
      $viewbix$sdk$formfield$template$checkboxFields$$($opt_data$$5$$.$formField$, $output$$1$$);
      break;
    case $opt_data$$5$$.types.$SELECT$:
      $viewbix$sdk$formfield$template$fieldLabel$$($opt_data$$5$$.$formField$, $output$$1$$);
      $output$$1$$.append('<select id="', $soy$$0$0escapeHtml$$($opt_data$$5$$.$formField$.id), '" name="', $soy$$0$0escapeHtml$$($opt_data$$5$$.$formField$.name), '">');
      for (var $optionList51$$ = $opt_data$$5$$.$formField$.options, $optionListLen51$$ = $optionList51$$.length, $optionIndex51$$ = 0;$optionIndex51$$ < $optionListLen51$$;$optionIndex51$$++) {
        var $optionData51$$ = $optionList51$$[$optionIndex51$$];
        $output$$1$$.append('<option value="', $soy$$0$0escapeHtml$$($optionData51$$.value), '" ', $opt_data$$5$$.$formField$.defaultValue == $optionData51$$.value ? 'selected="selected"' : "", ">", $soy$$0$0escapeHtml$$($optionData51$$.text), "</option>");
      }
      $output$$1$$.append("</select>");
      break;
    case $opt_data$$5$$.types.$HIDDEN$:
      $output$$1$$.append('<input type="hidden" id="', $soy$$0$0escapeHtml$$($opt_data$$5$$.$formField$.id), '" name="', $soy$$0$0escapeHtml$$($opt_data$$5$$.$formField$.name), '" ', $opt_data$$5$$.$formField$.defaultValue ? 'value="' + $soy$$0$0escapeHtml$$($opt_data$$5$$.$formField$.defaultValue) + '"' : "", " />");
      break;
    case $opt_data$$5$$.types.$DATE$:
      $viewbix$sdk$formfield$template$inputField$$($opt_data$$5$$.$formField$, $output$$1$$);
      break;
    case $opt_data$$5$$.types.$BIRTHDAY$:
      $viewbix$sdk$formfield$template$textField$$($opt_data$$5$$.$formField$, $output$$1$$);
      break;
    case $opt_data$$5$$.types.$TEL$:
      $viewbix$sdk$formfield$template$inputField$$($opt_data$$5$$.$formField$, $output$$1$$);
      break;
    case $opt_data$$5$$.types.$ZIP$:
      $viewbix$sdk$formfield$template$textField$$($opt_data$$5$$.$formField$, $output$$1$$);
      break;
    case $opt_data$$5$$.types.URL:
      $viewbix$sdk$formfield$template$inputField$$($opt_data$$5$$.$formField$, $output$$1$$);
      break;
    case $opt_data$$5$$.types.$SUBMIT$:
      $viewbix$sdk$formfield$template$buttonField$$($opt_data$$5$$.$formField$, $output$$1$$);
      break;
    case $opt_data$$5$$.types.$RESET$:
      $viewbix$sdk$formfield$template$buttonField$$($opt_data$$5$$.$formField$, $output$$1$$);
      break;
    case $opt_data$$5$$.types.$FORM_LINK$:
      $output$$1$$.append('<div class="vbx-form-link-label">', $soy$$0$0escapeHtml$$($opt_data$$5$$.$formField$.label), '</div><button type="button" class="vbx-form-link-button" onclick="VBX.App.loadForm(', $soy$$0$0escapeHtml$$($opt_data$$5$$.$formName$), ", '", $soy$$0$0escapeHtml$$($opt_data$$5$$.$formField$.name), "', '", $soy$$0$0escapeHtml$$($opt_data$$5$$.$formField$.label), "')\">Subscribe</button>");
  }
  return $opt_sb$$1$$ ? "" : $output$$1$$.toString();
}
function $viewbix$sdk$formfield$template$buttonField$$($opt_data$$6$$, $opt_sb$$2$$) {
  ($opt_sb$$2$$ || new $goog$string$StringBuffer$$).append('<button type="button" id="', $soy$$0$0escapeHtml$$($opt_data$$6$$.id), '" name="', $soy$$0$0escapeHtml$$($opt_data$$6$$.name), '">', $soy$$0$0escapeHtml$$($opt_data$$6$$.label), "</button>");
}
function $viewbix$sdk$formfield$template$checkboxFields$$($opt_data$$7$$, $opt_sb$$3$$) {
  var $output$$3$$ = $opt_sb$$3$$ || new $goog$string$StringBuffer$$;
  $output$$3$$.append("\t\t");
  if ($opt_data$$7$$.options) {
    ($output$$3$$ || new $goog$string$StringBuffer$$).append($opt_data$$7$$.label ? '<label for="' + $soy$$0$0escapeHtml$$($opt_data$$7$$.id) + '" class="checkboxfieldlabel">' + $soy$$0$0escapeHtml$$($opt_data$$7$$.label) + "</label>" : "");
    $output$$3$$.append("<ul>");
    for (var $optionList117$$ = $opt_data$$7$$.options, $optionListLen117$$ = $optionList117$$.length, $optionIndex117$$ = 0;$optionIndex117$$ < $optionListLen117$$;$optionIndex117$$++) {
      var $optionData117$$ = $optionList117$$[$optionIndex117$$];
      $output$$3$$.append("<li>");
      $viewbix$sdk$formfield$template$checkboxField$$({type:$opt_data$$7$$.type, name:$opt_data$$7$$.name, label:$opt_data$$7$$.label, $option$:$optionData117$$}, $output$$3$$);
      $output$$3$$.append("</li>");
    }
    $output$$3$$.append("</ul>");
  } else {
    $viewbix$sdk$formfield$template$checkboxField$$({id:$opt_data$$7$$.id, type:$opt_data$$7$$.type, name:$opt_data$$7$$.name, label:$opt_data$$7$$.label, checked:!0}, $output$$3$$);
  }
}
function $viewbix$sdk$formfield$template$checkboxField$$($opt_data$$8$$, $opt_sb$$4$$) {
  var $output$$4$$ = $opt_sb$$4$$ || new $goog$string$StringBuffer$$;
  $opt_data$$8$$.$option$ ? ($output$$4$$.append('<input id="', $soy$$0$0escapeHtml$$($opt_data$$8$$.$option$.id), '" type="', $soy$$0$0escapeHtml$$($opt_data$$8$$.type), '" name="', $soy$$0$0escapeHtml$$($opt_data$$8$$.name), '" value="', $soy$$0$0escapeHtml$$($opt_data$$8$$.$option$.value), '" ', $opt_data$$8$$.checked ? 'checked="checked"' : "", " />"), $viewbix$sdk$formfield$template$fieldLabel$$({id:$opt_data$$8$$.$option$.id, label:$opt_data$$8$$.$option$.text}, $output$$4$$)) : ($output$$4$$.append('<input id="', 
  $soy$$0$0escapeHtml$$($opt_data$$8$$.id), '" type="', $soy$$0$0escapeHtml$$($opt_data$$8$$.type), '" name="', $soy$$0$0escapeHtml$$($opt_data$$8$$.name), '" value="', $soy$$0$0escapeHtml$$($opt_data$$8$$.name), '" ', $opt_data$$8$$.checked ? 'checked="checked"' : "", " />"), $viewbix$sdk$formfield$template$fieldLabel$$($opt_data$$8$$, $output$$4$$));
}
function $viewbix$sdk$formfield$template$inputField$$($opt_data$$9$$, $opt_sb$$5$$) {
  var $output$$5$$ = $opt_sb$$5$$ || new $goog$string$StringBuffer$$;
  $viewbix$sdk$formfield$template$fieldLabel$$($opt_data$$9$$, $output$$5$$);
  $output$$5$$.append('<input id="', $soy$$0$0escapeHtml$$($opt_data$$9$$.id), '" type="', $soy$$0$0escapeHtml$$($opt_data$$9$$.type), '" name="', $soy$$0$0escapeHtml$$($opt_data$$9$$.name), '" ', $opt_data$$9$$.placeholder ? 'placeholder="' + $soy$$0$0escapeHtml$$($opt_data$$9$$.placeholder) + '" ' : "", $opt_data$$9$$.defaultValue ? 'value="' + $soy$$0$0escapeHtml$$($opt_data$$9$$.defaultValue) + '"' : "", " />");
}
function $viewbix$sdk$formfield$template$textField$$($opt_data$$10$$, $opt_sb$$6$$) {
  var $output$$6$$ = $opt_sb$$6$$ || new $goog$string$StringBuffer$$;
  $viewbix$sdk$formfield$template$fieldLabel$$($opt_data$$10$$, $output$$6$$);
  $output$$6$$.append('<input id="', $soy$$0$0escapeHtml$$($opt_data$$10$$.id), '" type="text" name="', $soy$$0$0escapeHtml$$($opt_data$$10$$.name), '" ', $opt_data$$10$$.placeholder ? 'placeholder="' + $soy$$0$0escapeHtml$$($opt_data$$10$$.placeholder) + '" ' : "", $opt_data$$10$$.defaultValue ? 'value="' + $soy$$0$0escapeHtml$$($opt_data$$10$$.defaultValue) + '"' : "", " />");
}
function $viewbix$sdk$formfield$template$fieldLabel$$($opt_data$$11$$, $opt_sb$$7$$) {
  ($opt_sb$$7$$ || new $goog$string$StringBuffer$$).append($opt_data$$11$$.label ? '<label for="' + $soy$$0$0escapeHtml$$($opt_data$$11$$.id) + '"' + ($opt_data$$11$$.required || $opt_data$$11$$["class"] ? ' class="' + ($opt_data$$11$$.required ? "vbx-field-required" : "") + ($opt_data$$11$$["class"] ? " " + $soy$$0$0escapeHtml$$($opt_data$$11$$["class"]) : "") + '"' : "") + ">" + $soy$$0$0escapeHtml$$($opt_data$$11$$.label) + "</label>" : "");
}
;/*
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
var $goog$dom$query$$ = function() {
  function $query$$7$$($query$$13$$, $root$$20$$) {
    if (!$query$$13$$) {
      return[];
    }
    if ($query$$13$$.constructor == Array) {
      return $query$$13$$;
    }
    if (!$goog$isString$$($query$$13$$)) {
      return[$query$$13$$];
    }
    if ($goog$isString$$($root$$20$$) && ($root$$20$$ = $goog$dom$getElementHelper_$$(document, $root$$20$$), !$root$$20$$)) {
      return[];
    }
    $root$$20$$ = $root$$20$$ || document;
    var $od_r$$9$$ = $root$$20$$.ownerDocument || $root$$20$$.documentElement;
    $caseSensitive$$ = $root$$20$$.contentType && "application/xml" == $root$$20$$.contentType || $goog$userAgent$OPERA$$ && ($root$$20$$.doctype || "[object XMLDocument]" == $od_r$$9$$.toString()) || !!$od_r$$9$$ && ($goog$userAgent$IE$$ ? $od_r$$9$$.xml : $root$$20$$.xmlVersion || $od_r$$9$$.xmlVersion);
    return($od_r$$9$$ = $getQueryFunc$$($query$$13$$)($root$$20$$)) && $od_r$$9$$.$nozip$ ? $od_r$$9$$ : $_zip$$($od_r$$9$$);
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
      for (var $x$$78$$ = 1, $te$$8$$;$te$$8$$ = $arr$$83$$[$x$$78$$];$x$$78$$++) {
        $arr$$83$$[$x$$78$$].getAttribute("_zipIdx") != $szidx$$ && $ret$$13$$.push($te$$8$$), $te$$8$$.setAttribute("_zipIdx", $szidx$$);
      }
    } else {
      if ($goog$userAgent$IE$$ && $arr$$83$$.$commentStrip$) {
        try {
          for ($x$$78$$ = 1;$te$$8$$ = $arr$$83$$[$x$$78$$];$x$$78$$++) {
            $isElement$$($te$$8$$) && $ret$$13$$.push($te$$8$$);
          }
        } catch ($e$$71$$) {
        }
      } else {
        for ($arr$$83$$[0] && ($arr$$83$$[0]._zipIdx = $_zipIdx$$), $x$$78$$ = 1;$te$$8$$ = $arr$$83$$[$x$$78$$];$x$$78$$++) {
          $arr$$83$$[$x$$78$$]._zipIdx != $_zipIdx$$ && $ret$$13$$.push($te$$8$$), $te$$8$$._zipIdx = $_zipIdx$$;
        }
      }
    }
    return $ret$$13$$;
  }
  function $_isUnique$$($node$$42$$, $bag$$4$$) {
    if (!$bag$$4$$) {
      return 1;
    }
    var $id$$21$$ = $_nodeUID$$($node$$42$$);
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
      return $_queryFuncCacheDOM$$[$query$$12$$] = 2 > $parts$$14$$.length ? $getStepQueryFunc$$($query$$12$$) : function($root$$19$$) {
        for (var $pindex$$ = 0, $ret$$12$$ = [], $tp$$;$tp$$ = $parts$$14$$[$pindex$$++];) {
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
      } catch ($e$$70$$) {
        return $getQueryFunc$$($query$$12$$, !0)($root$$18$$);
      }
    };
  }
  function $getStepQueryFunc$$($query$$11$$) {
    var $qparts$$ = $getQueryParts$$($goog$string$trim$$($query$$11$$));
    if (1 == $qparts$$.length) {
      var $tef$$ = $getElementsFunc$$($qparts$$[0]);
      return function($r$$7_root$$16$$) {
        if ($r$$7_root$$16$$ = $tef$$($r$$7_root$$16$$, [])) {
          $r$$7_root$$16$$.$nozip$ = !0;
        }
        return $r$$7_root$$16$$;
      };
    }
    return function($candidates$$inline_551_root$$17$$) {
      $candidates$$inline_551_root$$17$$ = $getArr$$($candidates$$inline_551_root$$17$$);
      for (var $qp$$inline_552_te$$inline_554$$, $gef$$inline_559_x$$inline_553$$, $qpl$$inline_555$$ = $qparts$$.length, $bag$$inline_556$$, $ret$$inline_557$$, $i$$inline_558$$ = 0;$i$$inline_558$$ < $qpl$$inline_555$$;$i$$inline_558$$++) {
        $ret$$inline_557$$ = [];
        $qp$$inline_552_te$$inline_554$$ = $qparts$$[$i$$inline_558$$];
        $gef$$inline_559_x$$inline_553$$ = $candidates$$inline_551_root$$17$$.length - 1;
        0 < $gef$$inline_559_x$$inline_553$$ && ($bag$$inline_556$$ = {}, $ret$$inline_557$$.$nozip$ = !0);
        $gef$$inline_559_x$$inline_553$$ = $getElementsFunc$$($qp$$inline_552_te$$inline_554$$);
        for (var $j$$inline_560$$ = 0;$qp$$inline_552_te$$inline_554$$ = $candidates$$inline_551_root$$17$$[$j$$inline_560$$];$j$$inline_560$$++) {
          $gef$$inline_559_x$$inline_553$$($qp$$inline_552_te$$inline_554$$, $ret$$inline_557$$, $bag$$inline_556$$);
        }
        if (!$ret$$inline_557$$.length) {
          break;
        }
        $candidates$$inline_551_root$$17$$ = $ret$$inline_557$$;
      }
      return $ret$$inline_557$$;
    };
  }
  function $getElementsFunc$$($query$$10$$) {
    var $retFunc$$ = $_getElementsFuncCache$$[$query$$10$$.$query$];
    if ($retFunc$$) {
      return $retFunc$$;
    }
    var $io_oper$$ = $query$$10$$.$infixOper$, $io_oper$$ = $io_oper$$ ? $io_oper$$.$oper$ : "", $filterFunc$$3$$ = $getSimpleFilterFunc$$($query$$10$$, {$el$:1}), $wildcardTag$$ = "*" == $query$$10$$.tag, $ecs_skipFilters$$ = document.getElementsByClassName;
    if ($io_oper$$) {
      $ecs_skipFilters$$ = {$el$:1}, $wildcardTag$$ && ($ecs_skipFilters$$.tag = 1), $filterFunc$$3$$ = $getSimpleFilterFunc$$($query$$10$$, $ecs_skipFilters$$), "+" == $io_oper$$ ? $retFunc$$ = $nextSiblingIterator$$($filterFunc$$3$$) : "~" == $io_oper$$ ? $retFunc$$ = $nextSiblingsIterator$$($filterFunc$$3$$) : ">" == $io_oper$$ && ($retFunc$$ = $_childElements$$($filterFunc$$3$$));
    } else {
      if ($query$$10$$.id) {
        $filterFunc$$3$$ = !$query$$10$$.$loops$ && $wildcardTag$$ ? $goog$functions$TRUE$$ : $getSimpleFilterFunc$$($query$$10$$, {$el$:1, id:1}), $retFunc$$ = function $$retFunc$$$($root$$11$$, $arr$$79$$) {
          var $JSCompiler_StaticMethods_getElement$self$$inline_542_te$$3$$;
          $JSCompiler_StaticMethods_getElement$self$$inline_542_te$$3$$ = $goog$dom$getDomHelper$$($root$$11$$);
          $JSCompiler_StaticMethods_getElement$self$$inline_542_te$$3$$ = $goog$dom$getElementHelper_$$($JSCompiler_StaticMethods_getElement$self$$inline_542_te$$3$$.$document_$, $query$$10$$.id);
          var $JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_547$$;
          if (($JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_547$$ = $JSCompiler_StaticMethods_getElement$self$$inline_542_te$$3$$ && $filterFunc$$3$$($JSCompiler_StaticMethods_getElement$self$$inline_542_te$$3$$)) && !($JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_547$$ = 9 == $root$$11$$.nodeType)) {
            for ($JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_547$$ = $JSCompiler_StaticMethods_getElement$self$$inline_542_te$$3$$.parentNode;$JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_547$$ && $JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_547$$ != $root$$11$$;) {
              $JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_547$$ = $JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_547$$.parentNode;
            }
            $JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_547$$ = !!$JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_547$$;
          }
          if ($JSCompiler_temp$$1_JSCompiler_temp$$2_pn$$inline_547$$) {
            return $getArr$$($JSCompiler_StaticMethods_getElement$self$$inline_542_te$$3$$, $arr$$79$$);
          }
        };
      } else {
        if ($ecs_skipFilters$$ && /\{\s*\[native code\]\s*\}/.test(String($ecs_skipFilters$$)) && $query$$10$$.$classes$.length && !$cssCaseBug$$) {
          var $filterFunc$$3$$ = $getSimpleFilterFunc$$($query$$10$$, {$el$:1, $classes$:1, id:1}), $classesString$$ = $query$$10$$.$classes$.join(" "), $retFunc$$ = function $$retFunc$$$($root$$12$$, $arr$$80$$) {
            for (var $ret$$8$$ = $getArr$$(0, $arr$$80$$), $te$$4$$, $x$$74$$ = 0, $tret$$2$$ = $root$$12$$.getElementsByClassName($classesString$$);$te$$4$$ = $tret$$2$$[$x$$74$$++];) {
              $filterFunc$$3$$($te$$4$$, $root$$12$$) && $ret$$8$$.push($te$$4$$);
            }
            return $ret$$8$$;
          }
        } else {
          $wildcardTag$$ || $query$$10$$.$loops$ ? ($filterFunc$$3$$ = $getSimpleFilterFunc$$($query$$10$$, {$el$:1, tag:1, id:1}), $retFunc$$ = function $$retFunc$$$($root$$14$$, $arr$$82$$) {
            for (var $ret$$10$$ = $getArr$$(0, $arr$$82$$), $te$$6$$, $x$$76$$ = 0, $tret$$4$$ = $root$$14$$.getElementsByTagName($query$$10$$.$getTag$());$te$$6$$ = $tret$$4$$[$x$$76$$++];) {
              $filterFunc$$3$$($te$$6$$, $root$$14$$) && $ret$$10$$.push($te$$6$$);
            }
            return $ret$$10$$;
          }) : $retFunc$$ = function $$retFunc$$$($root$$13$$, $arr$$81$$) {
            for (var $ret$$9$$ = $getArr$$(0, $arr$$81$$), $te$$5$$, $x$$75$$ = 0, $tret$$3$$ = $root$$13$$.getElementsByTagName($query$$10$$.$getTag$());$te$$5$$ = $tret$$3$$[$x$$75$$++];) {
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
    return function($root$$9_te$$2$$, $ret$$7$$, $bag$$2$$) {
      for (var $x$$73$$ = 0, $tret$$1$$ = $root$$9_te$$2$$[$childNodesName$$];$root$$9_te$$2$$ = $tret$$1$$[$x$$73$$++];) {
        $simpleNodeTest$$($root$$9_te$$2$$) && (!$bag$$2$$ || $_isUnique$$($root$$9_te$$2$$, $bag$$2$$)) && $filterFunc$$2$$($root$$9_te$$2$$, $x$$73$$) && $ret$$7$$.push($root$$9_te$$2$$);
      }
      return $ret$$7$$;
    };
  }
  function $nextSiblingsIterator$$($filterFunc$$1$$) {
    return function($root$$8_te$$1$$, $ret$$6$$, $bag$$1$$) {
      for ($root$$8_te$$1$$ = $root$$8_te$$1$$[$nSibling$$];$root$$8_te$$1$$;) {
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
    return function($node$$38$$, $ret$$5$$, $bag$$) {
      for (;$node$$38$$ = $node$$38$$[$nSibling$$];) {
        if (!$noNextElementSibling$$ || $isElement$$($node$$38$$)) {
          $bag$$ && !$_isUnique$$($node$$38$$, $bag$$) || !$filterFunc$$($node$$38$$) || $ret$$5$$.push($node$$38$$);
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
    $ignores$$1$$.tag || "*" != $query$$9$$.tag && ($ff$$ = $agree$$($ff$$, function($elem$$31$$) {
      return $elem$$31$$ && $elem$$31$$.tagName == $query$$9$$.$getTag$();
    }));
    $ignores$$1$$.$classes$ || $goog$array$forEach$$($query$$9$$.$classes$, function($cname$$, $idx$$1$$) {
      var $re$$3$$ = new RegExp("(?:^|\\s)" + $cname$$ + "(?:\\s|$)");
      $ff$$ = $agree$$($ff$$, function($elem$$32$$) {
        return $re$$3$$.test($elem$$32$$.className);
      });
      $ff$$.count = $idx$$1$$;
    });
    $ignores$$1$$.$pseudos$ || $goog$array$forEach$$($query$$9$$.$pseudos$, function($pseudo$$) {
      var $pn$$ = $pseudo$$.name;
      $pseudos$$[$pn$$] && ($ff$$ = $agree$$($ff$$, $pseudos$$[$pn$$]($pn$$, $pseudo$$.value)));
    });
    $ignores$$1$$.$attrs$ || $goog$array$forEach$$($query$$9$$.$attrs$, function($attr$$7$$) {
      var $matcher$$1$$, $a$$38$$ = $attr$$7$$.attr;
      $attr$$7$$.type && $attrs$$[$attr$$7$$.type] ? $matcher$$1$$ = $attrs$$[$attr$$7$$.type]($a$$38$$, $attr$$7$$.$matchFor$) : $a$$38$$.length && ($matcher$$1$$ = $defaultGetter$$($a$$38$$));
      $matcher$$1$$ && ($ff$$ = $agree$$($ff$$, $matcher$$1$$));
    });
    $ignores$$1$$.id || $query$$9$$.id && ($ff$$ = $agree$$($ff$$, function($elem$$33$$) {
      return!!$elem$$33$$ && $elem$$33$$.id == $query$$9$$.id;
    }));
    $ff$$ || "default" in $ignores$$1$$ || ($ff$$ = $goog$functions$TRUE$$);
    return $ff$$;
  }
  function $isOdd$$($elem$$22$$) {
    return $getNodeIndex$$($elem$$22$$) % 2;
  }
  function $isEven$$($elem$$21$$) {
    return!($getNodeIndex$$($elem$$21$$) % 2);
  }
  function $getNodeIndex$$($node$$36$$) {
    var $root$$7_te$$ = $node$$36$$.parentNode, $i$$163$$ = 0, $l$$28_tret$$ = $root$$7_te$$[$childNodesName$$], $ci$$ = $node$$36$$._i || -1, $cl$$ = $root$$7_te$$._l || -1;
    if (!$l$$28_tret$$) {
      return-1;
    }
    $l$$28_tret$$ = $l$$28_tret$$.length;
    if ($cl$$ == $l$$28_tret$$ && 0 <= $ci$$ && 0 <= $cl$$) {
      return $ci$$;
    }
    $root$$7_te$$._l = $l$$28_tret$$;
    $ci$$ = -1;
    for ($root$$7_te$$ = $root$$7_te$$.firstElementChild || $root$$7_te$$.firstChild;$root$$7_te$$;$root$$7_te$$ = $root$$7_te$$[$nSibling$$]) {
      $simpleNodeTest$$($root$$7_te$$) && ($root$$7_te$$._i = ++$i$$163$$, $node$$36$$ === $root$$7_te$$ && ($ci$$ = $i$$163$$));
    }
    return $ci$$;
  }
  function $_lookRight$$($node$$35$$) {
    for (;$node$$35$$ = $node$$35$$[$nSibling$$];) {
      if ($simpleNodeTest$$($node$$35$$)) {
        return!1;
      }
    }
    return!0;
  }
  function $_lookLeft$$($node$$34$$) {
    for (;$node$$34$$ = $node$$34$$[$pSibling$$];) {
      if ($simpleNodeTest$$($node$$34$$)) {
        return!1;
      }
    }
    return!0;
  }
  function $getAttr$$($elem$$14$$, $attr$$) {
    return $elem$$14$$ ? "class" == $attr$$ ? $elem$$14$$.className || "" : "for" == $attr$$ ? $elem$$14$$.htmlFor || "" : "style" == $attr$$ ? $elem$$14$$.style.cssText || "" : ($caseSensitive$$ ? $elem$$14$$.getAttribute($attr$$) : $elem$$14$$.getAttribute($attr$$, 2)) || "" : "";
  }
  function $isElement$$($n$$16$$) {
    return 1 == $n$$16$$.nodeType;
  }
  function $agree$$($first$$5$$, $second$$2$$) {
    return $first$$5$$ ? $second$$2$$ ? function() {
      return $first$$5$$.apply(window, arguments) && $second$$2$$.apply(window, arguments);
    } : $first$$5$$ : $second$$2$$;
  }
  function $getQueryParts$$($query$$8$$) {
    function $endAll$$() {
      0 <= $inId$$ && ($currentPart$$.id = $ts$$($inId$$, $x$$71$$).replace(/\\/g, ""), $inId$$ = -1);
      if (0 <= $inTag$$) {
        var $tv$$inline_538$$ = $inTag$$ == $x$$71$$ ? null : $ts$$($inTag$$, $x$$71$$);
        0 > ">~+".indexOf($tv$$inline_538$$) ? $currentPart$$.tag = $tv$$inline_538$$ : $currentPart$$.$oper$ = $tv$$inline_538$$;
        $inTag$$ = -1;
      }
      0 <= $inClass$$ && ($currentPart$$.$classes$.push($ts$$($inClass$$ + 1, $x$$71$$).replace(/\\/g, "")), $inClass$$ = -1);
    }
    function $ts$$($s$$36$$, $e$$69$$) {
      return $goog$string$trim$$($query$$8$$.slice($s$$36$$, $e$$69$$));
    }
    $query$$8$$ = 0 <= ">~+".indexOf($query$$8$$.slice(-1)) ? $query$$8$$ + " * " : $query$$8$$ + " ";
    for (var $queryParts$$ = [], $cmf_inBrackets$$ = -1, $inParens$$ = -1, $addToCc_inMatchFor$$ = -1, $inPseudo$$ = -1, $inClass$$ = -1, $inId$$ = -1, $inTag$$ = -1, $lc$$ = "", $cc$$3$$ = "", $pStart$$, $x$$71$$ = 0, $ql$$ = $query$$8$$.length, $currentPart$$ = null, $cp$$ = null;$lc$$ = $cc$$3$$, $cc$$3$$ = $query$$8$$.charAt($x$$71$$), $x$$71$$ < $ql$$;$x$$71$$++) {
      "\\" != $lc$$ && ($currentPart$$ || ($pStart$$ = $x$$71$$, $currentPart$$ = {$query$:null, $pseudos$:[], $attrs$:[], $classes$:[], tag:null, $oper$:null, id:null, $getTag$:function $$currentPart$$$$getTag$$() {
        return $caseSensitive$$ ? this.$otag$ : this.tag;
      }}, $inTag$$ = $x$$71$$), 0 <= $cmf_inBrackets$$ ? "]" == $cc$$3$$ ? ($cp$$.attr ? $cp$$.$matchFor$ = $ts$$($addToCc_inMatchFor$$ || $cmf_inBrackets$$ + 1, $x$$71$$) : $cp$$.attr = $ts$$($cmf_inBrackets$$ + 1, $x$$71$$), !($cmf_inBrackets$$ = $cp$$.$matchFor$) || '"' != $cmf_inBrackets$$.charAt(0) && "'" != $cmf_inBrackets$$.charAt(0) || ($cp$$.$matchFor$ = $cmf_inBrackets$$.slice(1, -1)), $currentPart$$.$attrs$.push($cp$$), $cp$$ = null, $cmf_inBrackets$$ = $addToCc_inMatchFor$$ = -1) : "=" == 
      $cc$$3$$ && ($addToCc_inMatchFor$$ = 0 <= "|~^$*".indexOf($lc$$) ? $lc$$ : "", $cp$$.type = $addToCc_inMatchFor$$ + $cc$$3$$, $cp$$.attr = $ts$$($cmf_inBrackets$$ + 1, $x$$71$$ - $addToCc_inMatchFor$$.length), $addToCc_inMatchFor$$ = $x$$71$$ + 1) : 0 <= $inParens$$ ? ")" == $cc$$3$$ && (0 <= $inPseudo$$ && ($cp$$.value = $ts$$($inParens$$ + 1, $x$$71$$)), $inPseudo$$ = $inParens$$ = -1) : "#" == $cc$$3$$ ? ($endAll$$(), $inId$$ = $x$$71$$ + 1) : "." == $cc$$3$$ ? ($endAll$$(), $inClass$$ = 
      $x$$71$$) : ":" == $cc$$3$$ ? ($endAll$$(), $inPseudo$$ = $x$$71$$) : "[" == $cc$$3$$ ? ($endAll$$(), $cmf_inBrackets$$ = $x$$71$$, $cp$$ = {}) : "(" == $cc$$3$$ ? (0 <= $inPseudo$$ && ($cp$$ = {name:$ts$$($inPseudo$$ + 1, $x$$71$$), value:null}, $currentPart$$.$pseudos$.push($cp$$)), $inParens$$ = $x$$71$$) : " " == $cc$$3$$ && $lc$$ != $cc$$3$$ && ($endAll$$(), 0 <= $inPseudo$$ && $currentPart$$.$pseudos$.push({name:$ts$$($inPseudo$$ + 1, $x$$71$$)}), $currentPart$$.$loops$ = $currentPart$$.$pseudos$.length || 
      $currentPart$$.$attrs$.length || $currentPart$$.$classes$.length, $currentPart$$.$oquery$ = $currentPart$$.$query$ = $ts$$($pStart$$, $x$$71$$), $currentPart$$.$otag$ = $currentPart$$.tag = $currentPart$$.$oper$ ? null : $currentPart$$.tag || "*", $currentPart$$.tag && ($currentPart$$.tag = $currentPart$$.tag.toUpperCase()), $queryParts$$.length && $queryParts$$[$queryParts$$.length - 1].$oper$ && ($currentPart$$.$infixOper$ = $queryParts$$.pop(), $currentPart$$.$query$ = $currentPart$$.$infixOper$.$query$ + 
      " " + $currentPart$$.$query$), $queryParts$$.push($currentPart$$), $currentPart$$ = null));
    }
    return $queryParts$$;
  }
  function $getArr$$($i$$162$$, $opt_arr$$) {
    var $r$$6$$ = $opt_arr$$ || [];
    $i$$162$$ && $r$$6$$.push($i$$162$$);
    return $r$$6$$;
  }
  var $cssCaseBug$$ = $goog$userAgent$WEBKIT$$ && "BackCompat" == document.compatMode, $childNodesName$$ = document.firstChild.children ? "children" : "childNodes", $caseSensitive$$ = !1, $attrs$$ = {"*=":function($attr$$1$$, $value$$170$$) {
    return function($elem$$15$$) {
      return 0 <= $getAttr$$($elem$$15$$, $attr$$1$$).indexOf($value$$170$$);
    };
  }, "^=":function($attr$$2$$, $value$$171$$) {
    return function($elem$$16$$) {
      return 0 == $getAttr$$($elem$$16$$, $attr$$2$$).indexOf($value$$171$$);
    };
  }, "$=":function($attr$$3$$, $value$$172$$) {
    return function($ea_elem$$17$$) {
      $ea_elem$$17$$ = " " + $getAttr$$($ea_elem$$17$$, $attr$$3$$);
      return $ea_elem$$17$$.lastIndexOf($value$$172$$) == $ea_elem$$17$$.length - $value$$172$$.length;
    };
  }, "~=":function($attr$$4$$, $value$$173$$) {
    var $tval$$1$$ = " " + $value$$173$$ + " ";
    return function($elem$$18$$) {
      return 0 <= (" " + $getAttr$$($elem$$18$$, $attr$$4$$) + " ").indexOf($tval$$1$$);
    };
  }, "|=":function($attr$$5$$, $value$$174$$) {
    $value$$174$$ = " " + $value$$174$$;
    return function($ea$$2_elem$$19$$) {
      $ea$$2_elem$$19$$ = " " + $getAttr$$($ea$$2_elem$$19$$, $attr$$5$$);
      return $ea$$2_elem$$19$$ == $value$$174$$ || 0 == $ea$$2_elem$$19$$.indexOf($value$$174$$ + "-");
    };
  }, "=":function($attr$$6$$, $value$$175$$) {
    return function($elem$$20$$) {
      return $getAttr$$($elem$$20$$, $attr$$6$$) == $value$$175$$;
    };
  }}, $noNextElementSibling$$ = "undefined" == typeof document.firstChild.nextElementSibling, $nSibling$$ = $noNextElementSibling$$ ? "nextSibling" : "nextElementSibling", $pSibling$$ = $noNextElementSibling$$ ? "previousSibling" : "previousElementSibling", $simpleNodeTest$$ = $noNextElementSibling$$ ? $isElement$$ : $goog$functions$TRUE$$, $pseudos$$ = {checked:function() {
    return function($elem$$23$$) {
      return $elem$$23$$.checked || $elem$$23$$.attributes.checked;
    };
  }, "first-child":function() {
    return $_lookLeft$$;
  }, "last-child":function() {
    return $_lookRight$$;
  }, "only-child":function() {
    return function($node$$37$$) {
      return $_lookLeft$$($node$$37$$) && $_lookRight$$($node$$37$$) ? !0 : !1;
    };
  }, empty:function() {
    return function($elem$$24_x$$72$$) {
      var $cn$$ = $elem$$24_x$$72$$.childNodes;
      for ($elem$$24_x$$72$$ = $elem$$24_x$$72$$.childNodes.length - 1;0 <= $elem$$24_x$$72$$;$elem$$24_x$$72$$--) {
        var $nt$$ = $cn$$[$elem$$24_x$$72$$].nodeType;
        if (1 === $nt$$ || 3 == $nt$$) {
          return!1;
        }
      }
      return!0;
    };
  }, contains:function($name$$82$$, $condition$$5$$) {
    var $cz$$ = $condition$$5$$.charAt(0);
    if ('"' == $cz$$ || "'" == $cz$$) {
      $condition$$5$$ = $condition$$5$$.slice(1, -1);
    }
    return function($elem$$25$$) {
      return 0 <= $elem$$25$$.innerHTML.indexOf($condition$$5$$);
    };
  }, not:function($name$$83$$, $condition$$6$$) {
    var $p$$4$$ = $getQueryParts$$($condition$$6$$)[0], $ignores$$ = {$el$:1};
    "*" != $p$$4$$.tag && ($ignores$$.tag = 1);
    $p$$4$$.$classes$.length || ($ignores$$.$classes$ = 1);
    var $ntf$$ = $getSimpleFilterFunc$$($p$$4$$, $ignores$$);
    return function($elem$$26$$) {
      return!$ntf$$($elem$$26$$);
    };
  }, "nth-child":function($name$$84$$, $condition$$7$$) {
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
        return function($elem$$27_i$$164$$) {
          $elem$$27_i$$164$$ = $getNodeIndex$$($elem$$27_i$$164$$);
          return $elem$$27_i$$164$$ >= $lb$$ && (0 > $ub$$ || $elem$$27_i$$164$$ <= $ub$$) && $elem$$27_i$$164$$ % $pred$$ == $idx$$;
        };
      }
      $condition$$7$$ = $idx$$;
    }
    var $ncount$$ = parseInt($condition$$7$$, 10);
    return function($elem$$28$$) {
      return $getNodeIndex$$($elem$$28$$) == $ncount$$;
    };
  }}, $defaultGetter$$ = $goog$userAgent$IE$$ ? function($cond$$) {
    var $clc$$ = $cond$$.toLowerCase();
    "class" == $clc$$ && ($cond$$ = "className");
    return function($elem$$29$$) {
      return $caseSensitive$$ ? $elem$$29$$.getAttribute($cond$$) : $elem$$29$$[$cond$$] || $elem$$29$$[$clc$$];
    };
  } : function($cond$$1$$) {
    return function($elem$$30$$) {
      return $elem$$30$$ && $elem$$30$$.getAttribute && $elem$$30$$.hasAttribute($cond$$1$$);
    };
  }, $_getElementsFuncCache$$ = {}, $_queryFuncCacheDOM$$ = {}, $_queryFuncCacheQSA$$ = {}, $qsaAvail$$ = !!document.querySelectorAll && (!$goog$userAgent$WEBKIT$$ || $goog$userAgent$isVersionOrHigher$$("526")), $_zipIdx$$ = 0, $_nodeUID$$ = $goog$userAgent$IE$$ ? function($node$$40$$) {
    return $caseSensitive$$ ? $node$$40$$.getAttribute("_uid") || $node$$40$$.setAttribute("_uid", ++$_zipIdx$$) || $_zipIdx$$ : $node$$40$$.uniqueID;
  } : function($node$$41$$) {
    return $node$$41$$._uid || ($node$$41$$._uid = ++$_zipIdx$$);
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
    var $target$$56$$ = {stack:""};
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
  var $resolve$$9$$, $reject$$9$$, $promise$$8$$ = new $goog$Promise$$(function($res$$12$$, $rej$$) {
    $resolve$$9$$ = $res$$12$$;
    $reject$$9$$ = $rej$$;
  });
  $JSCompiler_StaticMethods_addCallbacks$$(this, $resolve$$9$$, function($reason$$7$$) {
    $reason$$7$$ instanceof $goog$async$Deferred$CanceledError$$ ? $promise$$8$$.cancel() : $reject$$9$$($reason$$7$$);
  });
  return $promise$$8$$.then($opt_onFulfilled$$4$$, $opt_onRejected$$4$$, $opt_context$$13$$);
};
$goog$Thenable$addImplementation$$($goog$async$Deferred$$);
function $JSCompiler_StaticMethods_awaitDeferred$$($JSCompiler_StaticMethods_awaitDeferred$self$$, $otherDeferred$$1$$) {
  var $cb$$inline_573$$ = $goog$bind$$($otherDeferred$$1$$.$branch$, $otherDeferred$$1$$);
  $JSCompiler_StaticMethods_addCallbacks$$($JSCompiler_StaticMethods_awaitDeferred$self$$, $cb$$inline_573$$, null, void 0);
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
  return $goog$array$some$$($JSCompiler_StaticMethods_hasErrback_$self$$.$sequence_$, function($sequenceRow$$) {
    return $goog$isFunction$$($sequenceRow$$[1]);
  });
}
function $JSCompiler_StaticMethods_fire_$$($JSCompiler_StaticMethods_fire_$self$$) {
  if ($JSCompiler_StaticMethods_fire_$self$$.$unhandledErrorId_$ && $JSCompiler_StaticMethods_fire_$self$$.$fired_$ && $JSCompiler_StaticMethods_hasErrback_$$($JSCompiler_StaticMethods_fire_$self$$)) {
    var $deferredError$$inline_583_id$$inline_579_res$$14$$ = $JSCompiler_StaticMethods_fire_$self$$.$unhandledErrorId_$, $error$$inline_580_unhandledException$$ = $goog$async$Deferred$errorMap_$$[$deferredError$$inline_583_id$$inline_579_res$$14$$];
    $error$$inline_580_unhandledException$$ && ($goog$global$$.clearTimeout($error$$inline_580_unhandledException$$.$id_$), delete $goog$async$Deferred$errorMap_$$[$deferredError$$inline_583_id$$inline_579_res$$14$$]);
    $JSCompiler_StaticMethods_fire_$self$$.$unhandledErrorId_$ = 0;
  }
  $JSCompiler_StaticMethods_fire_$self$$.$parent_$ && ($JSCompiler_StaticMethods_fire_$self$$.$parent_$.$branches_$--, delete $JSCompiler_StaticMethods_fire_$self$$.$parent_$);
  for (var $deferredError$$inline_583_id$$inline_579_res$$14$$ = $JSCompiler_StaticMethods_fire_$self$$.$result_$, $isNewlyBlocked_onErrback$$ = $error$$inline_580_unhandledException$$ = !1;$JSCompiler_StaticMethods_fire_$self$$.$sequence_$.length && !$JSCompiler_StaticMethods_fire_$self$$.$blocked_$;) {
    var $scope$$5_sequenceEntry$$ = $JSCompiler_StaticMethods_fire_$self$$.$sequence_$.shift(), $callback$$66_f$$50$$ = $scope$$5_sequenceEntry$$[0], $errback$$ = $scope$$5_sequenceEntry$$[1], $scope$$5_sequenceEntry$$ = $scope$$5_sequenceEntry$$[2];
    if ($callback$$66_f$$50$$ = $JSCompiler_StaticMethods_fire_$self$$.$hadError_$ ? $errback$$ : $callback$$66_f$$50$$) {
      try {
        var $onCallback_ret$$14$$ = $callback$$66_f$$50$$.call($scope$$5_sequenceEntry$$ || $JSCompiler_StaticMethods_fire_$self$$.$defaultScope_$, $deferredError$$inline_583_id$$inline_579_res$$14$$);
        $goog$isDef$$($onCallback_ret$$14$$) && ($JSCompiler_StaticMethods_fire_$self$$.$hadError_$ = $JSCompiler_StaticMethods_fire_$self$$.$hadError_$ && ($onCallback_ret$$14$$ == $deferredError$$inline_583_id$$inline_579_res$$14$$ || $JSCompiler_StaticMethods_fire_$self$$.isError($onCallback_ret$$14$$)), $JSCompiler_StaticMethods_fire_$self$$.$result_$ = $deferredError$$inline_583_id$$inline_579_res$$14$$ = $onCallback_ret$$14$$);
        $goog$Thenable$isImplementedBy$$($deferredError$$inline_583_id$$inline_579_res$$14$$) && ($isNewlyBlocked_onErrback$$ = !0, $JSCompiler_StaticMethods_fire_$self$$.$blocked_$ = !0);
      } catch ($ex$$12$$) {
        $deferredError$$inline_583_id$$inline_579_res$$14$$ = $ex$$12$$, $JSCompiler_StaticMethods_fire_$self$$.$hadError_$ = !0, $JSCompiler_StaticMethods_makeStackTraceLong_$$($JSCompiler_StaticMethods_fire_$self$$, $deferredError$$inline_583_id$$inline_579_res$$14$$), $JSCompiler_StaticMethods_hasErrback_$$($JSCompiler_StaticMethods_fire_$self$$) || ($error$$inline_580_unhandledException$$ = !0);
      }
    }
  }
  $JSCompiler_StaticMethods_fire_$self$$.$result_$ = $deferredError$$inline_583_id$$inline_579_res$$14$$;
  $isNewlyBlocked_onErrback$$ && ($onCallback_ret$$14$$ = $goog$bind$$($JSCompiler_StaticMethods_fire_$self$$.$continue_$, $JSCompiler_StaticMethods_fire_$self$$, !0), $isNewlyBlocked_onErrback$$ = $goog$bind$$($JSCompiler_StaticMethods_fire_$self$$.$continue_$, $JSCompiler_StaticMethods_fire_$self$$, !1), $deferredError$$inline_583_id$$inline_579_res$$14$$ instanceof $goog$async$Deferred$$ ? ($JSCompiler_StaticMethods_addCallbacks$$($deferredError$$inline_583_id$$inline_579_res$$14$$, $onCallback_ret$$14$$, 
  $isNewlyBlocked_onErrback$$), $deferredError$$inline_583_id$$inline_579_res$$14$$.$blocking_$ = !0) : $deferredError$$inline_583_id$$inline_579_res$$14$$.then($onCallback_ret$$14$$, $isNewlyBlocked_onErrback$$));
  $error$$inline_580_unhandledException$$ && ($deferredError$$inline_583_id$$inline_579_res$$14$$ = new $goog$async$Deferred$Error_$$($deferredError$$inline_583_id$$inline_579_res$$14$$), $goog$async$Deferred$errorMap_$$[$deferredError$$inline_583_id$$inline_579_res$$14$$.$id_$] = $deferredError$$inline_583_id$$inline_579_res$$14$$, $JSCompiler_StaticMethods_fire_$self$$.$unhandledErrorId_$ = $deferredError$$inline_583_id$$inline_579_res$$14$$.$id_$);
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
function $goog$net$xpc$DirectTransport$$($channel$$6$$, $opt_domHelper$$8$$) {
  $goog$net$xpc$Transport$$.call(this, $opt_domHelper$$8$$);
  this.$channel_$ = $channel$$6$$;
  this.$eventHandler_$ = new $goog$events$EventHandler$$(this);
  $JSCompiler_StaticMethods_addOnDisposeCallback$$(this, $goog$partial$$($goog$dispose$$, this.$eventHandler_$));
  this.$maybeAttemptToConnectTimer_$ = new $goog$Timer$$(100, this.$getWindow$());
  $JSCompiler_StaticMethods_addOnDisposeCallback$$(this, $goog$partial$$($goog$dispose$$, this.$maybeAttemptToConnectTimer_$));
  this.$setupAckReceived_$ = new $goog$async$Deferred$$;
  this.$setupAckSent_$ = new $goog$async$Deferred$$;
  this.$connected_$ = new $goog$async$Deferred$$;
  this.$endpointId_$ = $goog$net$xpc$getRandomString$$();
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
  return!1;
}
$JSCompiler_prototypeAlias$$ = $goog$net$xpc$DirectTransport$$.prototype;
$JSCompiler_prototypeAlias$$.$transportType$ = 7;
$JSCompiler_prototypeAlias$$.$transportServiceHandler$ = function $$JSCompiler_prototypeAlias$$$$transportServiceHandler$$($payload$$17_transportParts$$) {
  $payload$$17_transportParts$$ = $goog$net$xpc$DirectTransport$parseTransportPayload_$$($payload$$17_transportParts$$);
  var $peerEndpointId$$ = $payload$$17_transportParts$$[1];
  switch($payload$$17_transportParts$$[0]) {
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
    var $uid$$inline_596$$ = $goog$getUid$$($win$$9$$);
    0 == ($goog$net$xpc$DirectTransport$activeCount_$$[$uid$$inline_596$$] || 0) && null == $goog$getObjectByName$$("crosswindowmessaging.channel", $win$$9$$) && $goog$exportPath_$$("crosswindowmessaging.channel", $goog$net$xpc$DirectTransport$messageReceivedHandler_$$, $win$$9$$);
    $goog$net$xpc$DirectTransport$activeCount_$$[$uid$$inline_596$$]++;
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
    this.$channel_$.$getConfig$().directSyncMode ? this.$executeScheduledSend_$($message$$27$$) : this.$asyncSendsMap_$[$goog$getUid$$($message$$27$$)] = $goog$Timer$callOnce$$($goog$bind$$(this.$executeScheduledSend_$, this, $message$$27$$), 0);
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
      $peerProxy$$({channelName:$message$$28$$.$channelName$, service:$message$$28$$.$service$, payload:$message$$28$$.$payload$}), $goog$log$info$$("send(): channelName=" + $message$$28$$.$channelName$ + " service=" + $message$$28$$.$service$ + " payload=" + $message$$28$$.$payload$);
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
  this.$asyncSendsMap_$ && ($goog$object$forEach$$(this.$asyncSendsMap_$, function($timerId$$1$$) {
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
;function $goog$net$xpc$NativeMessagingTransport$$($channel$$8$$, $peerHostname$$, $opt_domHelper$$9$$, $opt_oneSidedHandshake$$, $opt_protocolVersion$$) {
  $goog$net$xpc$Transport$$.call(this, $opt_domHelper$$9$$);
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
  this.$endpointId_$ = $goog$net$xpc$getRandomString$$();
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
    return!1;
  }
  var $headDelim_service$$12$$ = $data$$68_payload$$22$$.indexOf("|"), $channel$$9_serviceDelim_staleChannel$$1$$ = $data$$68_payload$$22$$.indexOf(":");
  if (-1 == $headDelim_service$$12$$ || -1 == $channel$$9_serviceDelim_staleChannel$$1$$) {
    return!1;
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
  return!1;
}
$JSCompiler_prototypeAlias$$ = $goog$net$xpc$NativeMessagingTransport$$.prototype;
$JSCompiler_prototypeAlias$$.$transportServiceHandler$ = function $$JSCompiler_prototypeAlias$$$$transportServiceHandler$$($payload$$23_peerEndpointId$$1$$) {
  var $prevPeerProtocolVersion_transportParts$$2$$ = $goog$net$xpc$NativeMessagingTransport$parseTransportPayload_$$($payload$$23_peerEndpointId$$1$$);
  $payload$$23_peerEndpointId$$1$$ = $prevPeerProtocolVersion_transportParts$$2$$[1];
  switch($prevPeerProtocolVersion_transportParts$$2$$[0]) {
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
  var $listenWindow$$inline_604$$ = this.$getWindow$(), $uid$$inline_605$$ = $goog$getUid$$($listenWindow$$inline_604$$), $value$$inline_606$$ = $goog$net$xpc$NativeMessagingTransport$activeCount_$$[$uid$$inline_605$$];
  $goog$isNumber$$($value$$inline_606$$) || ($value$$inline_606$$ = 0);
  0 == $value$$inline_606$$ && $goog$events$listen$$($listenWindow$$inline_604$$.postMessage ? $listenWindow$$inline_604$$ : $listenWindow$$inline_604$$.document, "message", $goog$net$xpc$NativeMessagingTransport$messageReceived_$$, !1, $goog$net$xpc$NativeMessagingTransport$$);
  $goog$net$xpc$NativeMessagingTransport$activeCount_$$[$uid$$inline_605$$] = $value$$inline_606$$ + 1;
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
    this.$sendTimerId_$ = $goog$Timer$callOnce$$(function() {
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
    var $listenWindow$$4$$ = this.$getWindow$(), $uid$$6$$ = $goog$getUid$$($listenWindow$$4$$), $value$$180$$ = $goog$net$xpc$NativeMessagingTransport$activeCount_$$[$uid$$6$$];
    $goog$net$xpc$NativeMessagingTransport$activeCount_$$[$uid$$6$$] = $value$$180$$ - 1;
    1 == $value$$180$$ && $goog$events$unlisten$$($listenWindow$$4$$.postMessage ? $listenWindow$$4$$ : $listenWindow$$4$$.document, "message", $goog$net$xpc$NativeMessagingTransport$messageReceived_$$, !1, $goog$net$xpc$NativeMessagingTransport$$);
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
;function $goog$net$xpc$CrossPageChannel$$($cfg$$, $opt_domHelper$$10$$) {
  $goog$messaging$AbstractChannel$$.call(this);
  for (var $i$$166$$ = 0, $uriField$$;$uriField$$ = $goog$net$xpc$UriCfgFields$$[$i$$166$$];$i$$166$$++) {
    if ($uriField$$ in $cfg$$ && !/^https?:\/\//.test($cfg$$[$uriField$$])) {
      throw Error("URI " + $cfg$$[$uriField$$] + " is invalid for field " + $uriField$$);
    }
  }
  this.$cfg_$ = $cfg$$;
  this.name = this.$cfg_$.cn || $goog$net$xpc$getRandomString$$();
  this.$domHelper_$ = $opt_domHelper$$10$$ || $goog$dom$getDomHelper$$();
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
$JSCompiler_prototypeAlias$$.$getConfig$ = function $$JSCompiler_prototypeAlias$$$$getConfig$$() {
  return this.$cfg_$;
};
function $JSCompiler_StaticMethods_isPeerAvailable$$($JSCompiler_StaticMethods_isPeerAvailable$self$$) {
  try {
    return!!$JSCompiler_StaticMethods_isPeerAvailable$self$$.$peerWindowObject_$ && !Boolean($JSCompiler_StaticMethods_isPeerAvailable$self$$.$peerWindowObject_$.closed);
  } catch ($e$$73$$) {
    return!1;
  }
}
$JSCompiler_prototypeAlias$$.$connect$ = function $$JSCompiler_prototypeAlias$$$$connect$$($opt_connectCb$$2$$) {
  this.$connectCb_$ = $opt_connectCb$$2$$ || $goog$nullFunction$$;
  this.$peerWindowDeferred_$ ? $JSCompiler_StaticMethods_addCallbacks$$(this.$peerWindowDeferred_$, this.$continueConnection_$, null, void 0) : this.$continueConnection_$();
};
$JSCompiler_prototypeAlias$$.$continueConnection_$ = function $$JSCompiler_prototypeAlias$$$$continueConnection_$$() {
  $goog$log$info$$("continueConnection_()");
  this.$peerWindowDeferred_$ = null;
  this.$cfg_$.ifrid && (this.$iframeElement_$ = $goog$dom$getElementHelper_$$(this.$domHelper_$.$document_$, this.$cfg_$.ifrid));
  if (this.$iframeElement_$) {
    var $JSCompiler_temp$$1053_JSCompiler_temp_const$$1265_winObj$$1$$ = this.$iframeElement_$.contentWindow;
    $JSCompiler_temp$$1053_JSCompiler_temp_const$$1265_winObj$$1$$ || ($JSCompiler_temp$$1053_JSCompiler_temp_const$$1265_winObj$$1$$ = window.frames[this.$cfg_$.ifrid]);
    this.$peerWindowObject_$ = $JSCompiler_temp$$1053_JSCompiler_temp_const$$1265_winObj$$1$$;
  }
  if (!this.$peerWindowObject_$) {
    if (window == window.top) {
      throw Error("CrossPageChannel: Can't connect, peer window-object not set.");
    }
    this.$peerWindowObject_$ = window.parent;
  }
  if (!this.$transport_$) {
    if (!this.$cfg_$.tp) {
      var $JSCompiler_temp$$1053_JSCompiler_temp_const$$1265_winObj$$1$$ = this.$cfg_$, $JSCompiler_temp$$1266_JSCompiler_temp$$1267_JSCompiler_temp$$1268_oldOpener$$inline_1294$$;
      if ($goog$isFunction$$(document.postMessage) || $goog$isFunction$$(window.postMessage) || $goog$userAgent$IE$$ && window.postMessage) {
        $JSCompiler_temp$$1266_JSCompiler_temp$$1267_JSCompiler_temp$$1268_oldOpener$$inline_1294$$ = 1;
      } else {
        if ($goog$userAgent$GECKO$$) {
          $JSCompiler_temp$$1266_JSCompiler_temp$$1267_JSCompiler_temp$$1268_oldOpener$$inline_1294$$ = 2;
        } else {
          if ($goog$userAgent$IE$$ && this.$cfg_$.pru) {
            $JSCompiler_temp$$1266_JSCompiler_temp$$1267_JSCompiler_temp$$1268_oldOpener$$inline_1294$$ = 3;
          } else {
            var $JSCompiler_temp$$1269_isSupported$$inline_1293$$;
            if ($JSCompiler_temp$$1269_isSupported$$inline_1293$$ = $goog$userAgent$IE$$) {
              $JSCompiler_temp$$1269_isSupported$$inline_1293$$ = !1;
              try {
                $JSCompiler_temp$$1266_JSCompiler_temp$$1267_JSCompiler_temp$$1268_oldOpener$$inline_1294$$ = window.opener, window.opener = {}, $JSCompiler_temp$$1269_isSupported$$inline_1293$$ = $goog$reflect$canAccessProperty$$(window, "opener"), window.opener = $JSCompiler_temp$$1266_JSCompiler_temp$$1267_JSCompiler_temp$$1268_oldOpener$$inline_1294$$;
              } catch ($e$$inline_1295$$) {
              }
            }
            $JSCompiler_temp$$1266_JSCompiler_temp$$1267_JSCompiler_temp$$1268_oldOpener$$inline_1294$$ = $JSCompiler_temp$$1269_isSupported$$inline_1293$$ ? 6 : 4;
          }
        }
      }
      $JSCompiler_temp$$1053_JSCompiler_temp_const$$1265_winObj$$1$$.tp = $JSCompiler_temp$$1266_JSCompiler_temp$$1267_JSCompiler_temp$$1268_oldOpener$$inline_1294$$;
    }
    switch(this.$cfg_$.tp) {
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
        if ($JSCompiler_temp$$1053_JSCompiler_temp_const$$1265_winObj$$1$$ = this.$peerWindowObject_$) {
          try {
            $JSCompiler_temp$$1053_JSCompiler_temp_const$$1265_winObj$$1$$ = window.document.domain == this.$peerWindowObject_$.document.domain;
          } catch ($e$$inline_1179$$) {
            $JSCompiler_temp$$1053_JSCompiler_temp_const$$1265_winObj$$1$$ = !1;
          }
        }
        $JSCompiler_temp$$1053_JSCompiler_temp_const$$1265_winObj$$1$$ ? this.$transport_$ = new $goog$net$xpc$DirectTransport$$(this, this.$domHelper_$) : $goog$log$info$$("DirectTransport not supported for this window, peer window in different security context or not set yet.");
    }
    if (this.$transport_$) {
      $goog$log$info$$("Transport created: " + this.$transport_$.getName());
    } else {
      throw Error("CrossPageChannel: No suitable transport found!");
    }
  }
  for (this.$transport_$.$connect$();0 < this.$deferredDeliveries_$.length;) {
    this.$deferredDeliveries_$.shift()();
  }
};
$JSCompiler_prototypeAlias$$.close = function $$JSCompiler_prototypeAlias$$$close$() {
  this.$peerWindowDeferred_$ && (this.$peerWindowDeferred_$.cancel(), this.$peerWindowDeferred_$ = null);
  this.$deferredDeliveries_$.length = 0;
  this.$peerLoadHandler_$.removeAll();
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
$JSCompiler_prototypeAlias$$.$xpcDeliver$ = function $$JSCompiler_prototypeAlias$$$$xpcDeliver$$($name$$inline_624_serviceName$$9_serviceName$$inline_627$$, $payload$$29$$, $opt_origin_service$$inline_1184_service$$inline_629$$) {
  if (this.$peerWindowDeferred_$) {
    this.$deferredDeliveries_$.push($goog$bind$$(this.$xpcDeliver$, this, $name$$inline_624_serviceName$$9_serviceName$$inline_627$$, $payload$$29$$, $opt_origin_service$$inline_1184_service$$inline_629$$));
  } else {
    var $objectPayload$$inline_1189_peerHostname$$inline_622$$ = this.$cfg_$.ph;
    if ($goog$string$isEmptySafe$$($opt_origin_service$$inline_1184_service$$inline_629$$) || $goog$string$isEmptySafe$$($objectPayload$$inline_1189_peerHostname$$inline_622$$) || $opt_origin_service$$inline_1184_service$$inline_629$$ == this.$cfg_$.ph) {
      if (this.$disposed_$) {
        $goog$log$warning$$($goog$net$xpc$logger$$, "CrossPageChannel::xpcDeliver(): Disposed.");
      } else {
        if ($name$$inline_624_serviceName$$9_serviceName$$inline_627$$ && "tp" != $name$$inline_624_serviceName$$9_serviceName$$inline_627$$) {
          if (this.$isConnected$()) {
            if ($name$$inline_624_serviceName$$9_serviceName$$inline_627$$ = $name$$inline_624_serviceName$$9_serviceName$$inline_627$$.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), $name$$inline_624_serviceName$$9_serviceName$$inline_627$$ = $goog$net$xpc$CrossPageChannel$TRANSPORT_SERVICE_UNESCAPE_RE_$$.test($name$$inline_624_serviceName$$9_serviceName$$inline_627$$) ? $name$$inline_624_serviceName$$9_serviceName$$inline_627$$.substring(1) : $name$$inline_624_serviceName$$9_serviceName$$inline_627$$, 
            $opt_origin_service$$inline_1184_service$$inline_629$$ = this.$services_$[$name$$inline_624_serviceName$$9_serviceName$$inline_627$$], $opt_origin_service$$inline_1184_service$$inline_629$$ || (this.$defaultService_$ ? $opt_origin_service$$inline_1184_service$$inline_629$$ = {$callback$:$goog$partial$$(this.$defaultService_$, $name$$inline_624_serviceName$$9_serviceName$$inline_627$$), $objectPayload$:$goog$isObject$$($payload$$29$$)} : ($goog$log$warning$$(this.logger, 'Unknown service name "' + 
            $name$$inline_624_serviceName$$9_serviceName$$inline_627$$ + '"'), $opt_origin_service$$inline_1184_service$$inline_629$$ = null)), $opt_origin_service$$inline_1184_service$$inline_629$$) {
              var $decodedPayload$$inline_630$$;
              a: {
                if (($objectPayload$$inline_1189_peerHostname$$inline_622$$ = $opt_origin_service$$inline_1184_service$$inline_629$$.$objectPayload$) && $goog$isString$$($payload$$29$$)) {
                  try {
                    $decodedPayload$$inline_630$$ = $goog$json$parse$$($payload$$29$$);
                    break a;
                  } catch ($err$$inline_1190$$) {
                    $goog$log$warning$$(this.logger, "Expected JSON payload for " + $name$$inline_624_serviceName$$9_serviceName$$inline_627$$ + ', was "' + $payload$$29$$ + '"');
                    $decodedPayload$$inline_630$$ = null;
                    break a;
                  }
                } else {
                  if (!$objectPayload$$inline_1189_peerHostname$$inline_622$$ && !$goog$isString$$($payload$$29$$)) {
                    $decodedPayload$$inline_630$$ = $goog$json$serialize$$($payload$$29$$);
                    break a;
                  }
                }
                $decodedPayload$$inline_630$$ = $payload$$29$$;
              }
              null != $decodedPayload$$inline_630$$ && $opt_origin_service$$inline_1184_service$$inline_629$$.$callback$($decodedPayload$$inline_630$$);
            }
          } else {
            $goog$log$info$$("CrossPageChannel::xpcDeliver(): Not connected.");
          }
        } else {
          this.$transport_$.$transportServiceHandler$($payload$$29$$);
        }
      }
    } else {
      $goog$log$warning$$($goog$net$xpc$logger$$, 'Message received from unapproved origin "' + $opt_origin_service$$inline_1184_service$$inline_629$$ + '" - rejected.');
    }
  }
};
function $JSCompiler_StaticMethods_escapeServiceName_$$($name$$85$$) {
  $goog$net$xpc$CrossPageChannel$TRANSPORT_SERVICE_ESCAPE_RE_$$.test($name$$85$$) && ($name$$85$$ = "%" + $name$$85$$);
  return $name$$85$$.replace(/[%:|]/g, encodeURIComponent);
}
function $JSCompiler_StaticMethods_getRole$$($JSCompiler_StaticMethods_getRole$self$$) {
  var $role$$3$$ = $JSCompiler_StaticMethods_getRole$self$$.$cfg_$.role;
  return $goog$isNumber$$($role$$3$$) ? $role$$3$$ : window.parent == $JSCompiler_StaticMethods_getRole$self$$.$peerWindowObject_$ ? 1 : 0;
}
function $JSCompiler_StaticMethods_updateChannelNameAndCatalog$$($JSCompiler_StaticMethods_updateChannelNameAndCatalog$self$$, $name$$87$$) {
  $goog$log$fine$$($goog$net$xpc$logger$$, "changing channel name to " + $name$$87$$);
  delete $goog$net$xpc$channels$$[$JSCompiler_StaticMethods_updateChannelNameAndCatalog$self$$.name];
  $JSCompiler_StaticMethods_updateChannelNameAndCatalog$self$$.name = $name$$87$$;
  $goog$net$xpc$channels$$[$name$$87$$] = $JSCompiler_StaticMethods_updateChannelNameAndCatalog$self$$;
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
  for (var $name$$88$$ in $goog$net$xpc$channels$$) {
    $goog$dispose$$($goog$net$xpc$channels$$[$name$$88$$]);
  }
}
;function $viewbix$sdk$event$PropertyChangeEvent$$($name$$89$$, $value$$181$$) {
  $goog$events$Event$$.call(this, $viewbix$sdk$event$PropertyChangeEvent$EVENT_TYPE_PREFIX$$ + $name$$89$$);
  this.name = $name$$89$$;
  this.value = $value$$181$$;
}
$goog$inherits$$($viewbix$sdk$event$PropertyChangeEvent$$, $goog$events$Event$$);
var $viewbix$sdk$event$PropertyChangeEvent$EVENT_TYPE_PREFIX$$ = "PROPERTY_CHANGED_";
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
  $goog$array$forEach$$($configsToBind$$, function($config$$, $i$$167$$) {
    $configValues$$[$i$$167$$] = void 0;
  });
  $goog$array$forEach$$($configsToBind$$, function($configName$$) {
    $viewbix$sdk$helper$BindHelper$listenToConfig$$($configName$$, function($configValue$$) {
      if ($goog$isFunction$$($methodHandle$$)) {
        var $configIndex$$ = $goog$array$indexOf$$($configsToBind$$, $configName$$);
        $configValues$$[$configIndex$$] = $configValue$$;
        if ($goog$array$every$$($configValues$$, function($cv$$) {
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
$viewbix$sdk$helper$BindHelper$$.prototype.$listenToConfig$ = function $$viewbix$sdk$helper$BindHelper$$$$$listenToConfig$$($name$$90$$, $callback$$70$$, $opt_scope$$14$$, $opt_returnNullIfMissing_value$$183$$) {
  var $parts$$15$$ = $name$$90$$.split(":");
  $name$$90$$ = $parts$$15$$[0];
  var $defaultValue$$2$$ = null;
  1 < $parts$$15$$.length && ($defaultValue$$2$$ = $parts$$15$$[1]);
  $goog$events$listen$$(this, $viewbix$sdk$event$PropertyChangeEvent$EVENT_TYPE_PREFIX$$ + $name$$90$$, function($event$$1$$) {
    $callback$$70$$.call(this, $event$$1$$.value, $event$$1$$.name);
  }, !1, $opt_scope$$14$$);
  if ($name$$90$$ in this.$data_$) {
    $opt_returnNullIfMissing_value$$183$$ = $goog$object$get$$(this.$data_$, $name$$90$$), $callback$$70$$.call(null != $opt_scope$$14$$ ? $opt_scope$$14$$ : this, $opt_returnNullIfMissing_value$$183$$, $name$$90$$);
  } else {
    if (null != $opt_returnNullIfMissing_value$$183$$ && $opt_returnNullIfMissing_value$$183$$ || null != $defaultValue$$2$$) {
      null != $defaultValue$$2$$ ? $callback$$70$$.call($opt_scope$$14$$, $defaultValue$$2$$, $name$$90$$) : $callback$$70$$.call($opt_scope$$14$$, null, $name$$90$$);
    }
  }
};
function $viewbix$sdk$helper$BindHelper$listenToConfig$$($name$$91$$, $callback$$71$$, $opt_scope$$15$$, $opt_returnNullIfMissing$$1$$) {
  $viewbix$sdk$helper$BindHelper$$.$getInstance$().$listenToConfig$($name$$91$$, $callback$$71$$, $opt_scope$$15$$, $opt_returnNullIfMissing$$1$$);
}
function $viewbix$sdk$helper$BindHelper$dispatch$$($name$$92$$, $value$$184$$) {
  var $JSCompiler_StaticMethods_dispatch$self$$inline_632$$ = $viewbix$sdk$helper$BindHelper$$.$getInstance$();
  $JSCompiler_StaticMethods_dispatch$self$$inline_632$$.$data_$[$name$$92$$] = $value$$184$$;
  $goog$events$dispatchEvent$$($JSCompiler_StaticMethods_dispatch$self$$inline_632$$, new $viewbix$sdk$event$PropertyChangeEvent$$($name$$92$$, $value$$184$$));
}
;function $viewbix$sdk$helper$BooleanHelper$convertToBoolean$$($value$$186$$, $opt_defaultValue$$) {
  $opt_defaultValue$$ = $opt_defaultValue$$ || !1;
  if (null === $value$$186$$ || !$goog$isDef$$($value$$186$$)) {
    return $opt_defaultValue$$;
  }
  if ("boolean" == typeof $value$$186$$) {
    return $value$$186$$;
  }
  if ($goog$isNumber$$($value$$186$$)) {
    return 0 != $value$$186$$;
  }
  if ($goog$isString$$($value$$186$$)) {
    var $cleaned$$ = $goog$string$trim$$($value$$186$$);
    a: {
      for (var $i$$inline_643$$ = 0;2 > $i$$inline_643$$;$i$$inline_643$$++) {
        var $quoteChar$$inline_644$$ = "\"'".charAt($i$$inline_643$$);
        if ($cleaned$$.charAt(0) == $quoteChar$$inline_644$$ && $cleaned$$.charAt($cleaned$$.length - 1) == $quoteChar$$inline_644$$) {
          $cleaned$$ = $cleaned$$.substring(1, $cleaned$$.length - 1);
          break a;
        }
      }
    }
    $cleaned$$ = $goog$string$trim$$($cleaned$$);
    $cleaned$$ = $cleaned$$.toLowerCase();
    switch($cleaned$$) {
      case "true":
      ;
      case "1":
        return!0;
      case "false":
      ;
      case "0":
        return!1;
    }
  }
  return $opt_defaultValue$$;
}
function $viewbix$sdk$helper$BooleanHelper$booleanParser$$($statement$$, $callback$$72$$) {
  for (var $re$$5$$ = /[^\&\|\(\)\! ]+/g, $m$$5$$ = null, $newStatement$$ = "", $lastIndex$$ = 0;$m$$5$$ = $re$$5$$.exec($statement$$);) {
    $newStatement$$ += $statement$$.substring($lastIndex$$, $m$$5$$.index), $newStatement$$ += $callback$$72$$($m$$5$$[0]), $lastIndex$$ = $m$$5$$.index + $m$$5$$[0].length;
  }
  $newStatement$$ += $statement$$.substring($lastIndex$$);
  return eval($newStatement$$);
}
;function $viewbix$sdk$helper$ColorHelper$colorToString$$($rgb$$10$$, $opt_prefix$$) {
  $opt_prefix$$ = $opt_prefix$$ || "#";
  if ($goog$isString$$($rgb$$10$$) && $goog$string$caseInsensitiveStartsWith$$($rgb$$10$$, $opt_prefix$$)) {
    return $rgb$$10$$;
  }
  for (var $colorText$$ = $goog$string$parseInt$$($rgb$$10$$).toString(16);6 > $colorText$$.length;) {
    $colorText$$ = "0" + $colorText$$;
  }
  return $opt_prefix$$ + $colorText$$;
}
;function $viewbix$sdk$helper$ElementHelper$getChildTextContent$$($parent$$22$$, $childName$$) {
  var $elements$$4$$ = $parent$$22$$.getElementsByTagName($childName$$);
  return $viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($elements$$4$$) ? null : $goog$dom$getTextContent$$($elements$$4$$[0]);
}
function $viewbix$sdk$helper$ElementHelper$getChildTextContentWithLineBreaks$$($parent$$23$$, $childName$$1$$) {
  var $JSCompiler_temp$$92_elements$$5$$ = $parent$$23$$.getElementsByTagName($childName$$1$$);
  if ($viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($JSCompiler_temp$$92_elements$$5$$)) {
    $JSCompiler_temp$$92_elements$$5$$ = null;
  } else {
    var $buf$$inline_647$$ = [];
    $goog$dom$getTextContent_$$($JSCompiler_temp$$92_elements$$5$$[0], $buf$$inline_647$$, !1);
    $JSCompiler_temp$$92_elements$$5$$ = $buf$$inline_647$$.join("");
  }
  return $JSCompiler_temp$$92_elements$$5$$;
}
function $viewbix$sdk$helper$ElementHelper$getAutoSize$$($element$$120$$) {
  var $originalWidth$$ = $element$$120$$.style.width, $originalHeight$$ = $element$$120$$.style.height, $size$$14_style$$inline_655_w$$inline_650$$ = "auto", $h$$inline_652_originalDisplay$$inline_656$$;
  $size$$14_style$$inline_655_w$$inline_650$$ instanceof $goog$math$Size$$ ? ($h$$inline_652_originalDisplay$$inline_656$$ = $size$$14_style$$inline_655_w$$inline_650$$.height, $size$$14_style$$inline_655_w$$inline_650$$ = $size$$14_style$$inline_655_w$$inline_650$$.width) : $h$$inline_652_originalDisplay$$inline_656$$ = "auto";
  $element$$120$$.style.width = $goog$style$getPixelStyleValue_$$($size$$14_style$$inline_655_w$$inline_650$$);
  $element$$120$$.style.height = $goog$style$getPixelStyleValue_$$($h$$inline_652_originalDisplay$$inline_656$$);
  $size$$14_style$$inline_655_w$$inline_650$$ = $element$$120$$.style;
  $h$$inline_652_originalDisplay$$inline_656$$ = $size$$14_style$$inline_655_w$$inline_650$$.display;
  var $originalVisibility$$inline_657$$ = $size$$14_style$$inline_655_w$$inline_650$$.visibility, $originalPosition$$inline_658$$ = $size$$14_style$$inline_655_w$$inline_650$$.position, $originalWidth$$inline_659$$ = $size$$14_style$$inline_655_w$$inline_650$$.width, $originalheight$$inline_660$$ = $size$$14_style$$inline_655_w$$inline_650$$.height;
  $size$$14_style$$inline_655_w$$inline_650$$.visibility = "hidden";
  $size$$14_style$$inline_655_w$$inline_650$$.position = "absolute";
  $size$$14_style$$inline_655_w$$inline_650$$.display = "inline-block";
  $size$$14_style$$inline_655_w$$inline_650$$.width = "auto";
  $size$$14_style$$inline_655_w$$inline_650$$.height = "auto";
  var $w$$inline_661$$ = $element$$120$$.offsetWidth, $h$$inline_662$$ = $element$$120$$.offsetHeight;
  $size$$14_style$$inline_655_w$$inline_650$$.display = $h$$inline_652_originalDisplay$$inline_656$$;
  $size$$14_style$$inline_655_w$$inline_650$$.position = $originalPosition$$inline_658$$;
  $size$$14_style$$inline_655_w$$inline_650$$.visibility = $originalVisibility$$inline_657$$;
  $size$$14_style$$inline_655_w$$inline_650$$.width = $originalWidth$$inline_659$$;
  $size$$14_style$$inline_655_w$$inline_650$$.height = $originalheight$$inline_660$$;
  $size$$14_style$$inline_655_w$$inline_650$$ = new $goog$math$Size$$($w$$inline_661$$, $h$$inline_662$$);
  $element$$120$$.style.width = $originalWidth$$;
  $element$$120$$.style.height = $originalHeight$$;
  return $size$$14_style$$inline_655_w$$inline_650$$;
}
;function $viewbix$sdk$helper$EventHelper$listenMouseEnter$$($element$$122$$, $listener$$74$$, $opt_capt$$10$$, $opt_handler$$11$$) {
  return $goog$events$listen$$($element$$122$$, "mouseover", function($e$$75$$) {
    $e$$75$$.relatedTarget && $goog$dom$contains$$($element$$122$$, $e$$75$$.relatedTarget) || $listener$$74$$.call($opt_handler$$11$$, $e$$75$$);
  }, $opt_capt$$10$$, $opt_handler$$11$$);
}
function $viewbix$sdk$helper$EventHelper$listenMouseLeave$$($element$$124$$, $listener$$76$$, $opt_capt$$12$$, $opt_handler$$13$$) {
  return $goog$events$listen$$($element$$124$$, "mouseout", function($e$$77$$) {
    $e$$77$$.relatedTarget && $goog$dom$contains$$($element$$124$$, $e$$77$$.relatedTarget) || $listener$$76$$.call($opt_handler$$13$$, $e$$77$$);
  }, $opt_capt$$12$$, $opt_handler$$13$$);
}
function $viewbix$sdk$helper$EventHelper$setupResizeListening$$() {
  function $resetTriggers$$($element$$127_expand$$) {
    var $contract_triggers$$ = $element$$127_expand$$.$__resizeTriggers__$;
    $element$$127_expand$$ = $contract_triggers$$.firstElementChild;
    var $contract_triggers$$ = $contract_triggers$$.lastElementChild, $expandChild$$ = $element$$127_expand$$.firstElementChild;
    $contract_triggers$$.scrollLeft = $contract_triggers$$.scrollWidth;
    $contract_triggers$$.scrollTop = $contract_triggers$$.scrollHeight;
    $expandChild$$.style.width = $element$$127_expand$$.offsetWidth + 1 + "px";
    $expandChild$$.style.height = $element$$127_expand$$.offsetHeight + 1 + "px";
    $element$$127_expand$$.scrollLeft = $element$$127_expand$$.scrollWidth;
    $element$$127_expand$$.scrollTop = $element$$127_expand$$.scrollHeight;
  }
  function $scrollListener$$($e$$78$$) {
    var $element$$129$$ = $e$$78$$.currentTarget;
    $resetTriggers$$($element$$129$$);
    $element$$129$$.$__resizeRAF__$ && $cancelFrame$$($element$$129$$.$__resizeRAF__$);
    $element$$129$$.$__resizeRAF__$ = $requestFrame$$(function() {
      if ($element$$129$$.offsetWidth != $element$$129$$.$__resizeLast__$.width || $element$$129$$.offsetHeight != $element$$129$$.$__resizeLast__$.height) {
        $element$$129$$.$__resizeLast__$.width = $element$$129$$.offsetWidth, $element$$129$$.$__resizeLast__$.height = $element$$129$$.offsetHeight, $element$$129$$.$__resizeListeners__$.forEach(function($fn$$16$$) {
          $fn$$16$$.call($element$$129$$, $e$$78$$);
        });
      }
    });
  }
  var $attachEvent$$ = document.attachEvent;
  if (!$attachEvent$$) {
    var $requestFrame$$ = function() {
      var $raf$$2$$ = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function($fn$$17$$) {
        return window.setTimeout($fn$$17$$, 20);
      };
      return function($fn$$18$$) {
        return $raf$$2$$.call(window, $fn$$18$$);
      };
    }(), $cancelFrame$$ = function() {
      var $cancel$$ = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
      return function($id$$23$$) {
        return $cancel$$.call(window, $id$$23$$);
      };
    }()
  }
  window.$addResizeListener$ = function $window$$addResizeListener$$($element$$130$$, $fn$$19$$) {
    $attachEvent$$ ? $element$$130$$.attachEvent("onresize", $fn$$19$$) : ($element$$130$$.$__resizeTriggers__$ || ("static" == $goog$style$getComputedStyle$$($element$$130$$, "position") && ($element$$130$$.style.position = "relative"), $element$$130$$.$__resizeLast__$ = {}, $element$$130$$.$__resizeListeners__$ = [], ($element$$130$$.$__resizeTriggers__$ = document.createElement("div")).className = "resize-triggers", $element$$130$$.$__resizeTriggers__$.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>', 
    $element$$130$$.appendChild($element$$130$$.$__resizeTriggers__$), $resetTriggers$$($element$$130$$), $element$$130$$.addEventListener("scroll", $scrollListener$$, !0)), $element$$130$$.$__resizeListeners__$.push($fn$$19$$));
  };
  window.$removeResizeListener$ = function $window$$removeResizeListener$$($element$$131$$, $fn$$20$$) {
    $attachEvent$$ ? $element$$131$$.detachEvent("onresize", $fn$$20$$) : ($element$$131$$.$__resizeListeners__$.splice($element$$131$$.$__resizeListeners__$.indexOf($fn$$20$$), 1), $element$$131$$.$__resizeListeners__$.length || ($element$$131$$.removeEventListener("scroll", $scrollListener$$), $element$$131$$.$__resizeTriggers__$ = !$element$$131$$.removeChild($element$$131$$.$__resizeTriggers__$)));
  };
}
;function $viewbix$sdk$helper$GoogleHelper$$() {
  $goog$events$EventTarget$$.call(this);
  this.$isLoaderLoaded_$ = this.$isLoaderLoading_$ = !1;
  this.$apiState_$ = {};
}
$goog$inherits$$($viewbix$sdk$helper$GoogleHelper$$, $goog$events$EventTarget$$);
$goog$addSingletonGetter$$($viewbix$sdk$helper$GoogleHelper$$);
function $JSCompiler_StaticMethods_loadApiAfterLoaderLoaded$$($JSCompiler_StaticMethods_loadApiAfterLoaderLoaded$self$$, $name$$94$$, $version$$15$$, $key$$101$$, $callback$$73$$) {
  switch($goog$object$get$$($JSCompiler_StaticMethods_loadApiAfterLoaderLoaded$self$$.$apiState_$, $key$$101$$)) {
    case "NOT_LOADED":
      $JSCompiler_StaticMethods_loadApiAfterLoaderLoaded$self$$.$apiState_$[$key$$101$$] = "LOADING";
      window.google.load($name$$94$$, $version$$15$$, {callback:function() {
        this.$apiState_$[$key$$101$$] = "LOADED";
        $callback$$73$$();
        $goog$events$dispatchEvent$$(this, $viewbix$sdk$helper$GoogleHelper$GOOGLE_API_PREFIX$$ + $key$$101$$);
      }});
      break;
    case "LOADING":
      $goog$events$listenOnce$$($JSCompiler_StaticMethods_loadApiAfterLoaderLoaded$self$$, $viewbix$sdk$helper$GoogleHelper$GOOGLE_API_PREFIX$$ + $key$$101$$, function() {
        $callback$$73$$();
      }, !1, $JSCompiler_StaticMethods_loadApiAfterLoaderLoaded$self$$);
      break;
    case "LOADED":
      $callback$$73$$();
  }
}
function $JSCompiler_StaticMethods_loadApi$$($JSCompiler_StaticMethods_loadApi$self$$, $callback$$74$$) {
  var $apiConfig_apiUrl_autoLoadJson_googApiScriptTag$$ = {name:"feeds", version:"1"}, $name$$95$$ = $apiConfig_apiUrl_autoLoadJson_googApiScriptTag$$.name, $version$$16$$ = $apiConfig_apiUrl_autoLoadJson_googApiScriptTag$$.version, $key$$102$$ = $name$$95$$ + "_" + $version$$16$$;
  $JSCompiler_StaticMethods_loadApi$self$$.$isLoaderLoaded_$ ? $JSCompiler_StaticMethods_loadApiAfterLoaderLoaded$$($JSCompiler_StaticMethods_loadApi$self$$, $name$$95$$, $version$$16$$, $key$$102$$, $callback$$74$$) : $JSCompiler_StaticMethods_loadApi$self$$.$isLoaderLoading_$ ? $goog$events$listenOnce$$($JSCompiler_StaticMethods_loadApi$self$$, $viewbix$sdk$helper$GoogleHelper$GOOGLE_LOADER_LOADED$$, function() {
    $JSCompiler_StaticMethods_loadApiAfterLoaderLoaded$$(this, $name$$95$$, $version$$16$$, $key$$102$$, $callback$$74$$);
  }, !1, $JSCompiler_StaticMethods_loadApi$self$$) : ($JSCompiler_StaticMethods_loadApi$self$$.$isLoaderLoading_$ = !0, $JSCompiler_StaticMethods_loadApi$self$$.$apiState_$[$key$$102$$] = "LOADING", $apiConfig_apiUrl_autoLoadJson_googApiScriptTag$$.callback = "vbxGoogleLoaderCallback", $apiConfig_apiUrl_autoLoadJson_googApiScriptTag$$ = $goog$json$serialize$$({modules:[$apiConfig_apiUrl_autoLoadJson_googApiScriptTag$$]}), $apiConfig_apiUrl_autoLoadJson_googApiScriptTag$$ = "https://www.google.com/jsapi?autoload=" + 
  encodeURIComponent($apiConfig_apiUrl_autoLoadJson_googApiScriptTag$$), window.vbxGoogleLoaderCallback = $goog$bind$$(function() {
    this.$isLoaderLoaded_$ = !0;
    this.$apiState_$[$key$$102$$] = "LOADED";
    $callback$$74$$();
    $goog$events$dispatchEvent$$(this, $viewbix$sdk$helper$GoogleHelper$GOOGLE_LOADER_LOADED$$);
  }, $JSCompiler_StaticMethods_loadApi$self$$), $apiConfig_apiUrl_autoLoadJson_googApiScriptTag$$ = $goog$dom$createDom$$("SCRIPT", {type:"text/javascript", src:$apiConfig_apiUrl_autoLoadJson_googApiScriptTag$$}), document.body.appendChild($apiConfig_apiUrl_autoLoadJson_googApiScriptTag$$));
}
function $viewbix$sdk$helper$GoogleHelper$loadApi$$($callback$$75$$) {
  $JSCompiler_StaticMethods_loadApi$$($viewbix$sdk$helper$GoogleHelper$$.$getInstance$(), $callback$$75$$);
}
var $viewbix$sdk$helper$GoogleHelper$GOOGLE_LOADER_LOADED$$ = "GOOGLE_LOADER_LOADED", $viewbix$sdk$helper$GoogleHelper$GOOGLE_API_PREFIX$$ = "GOOGLE_API_LOADED_";
function $viewbix$sdk$helper$IdHelper$$() {
}
$goog$addSingletonGetter$$($viewbix$sdk$helper$IdHelper$$);
$viewbix$sdk$helper$IdHelper$$.prototype.$nextId_$ = 0;
$viewbix$sdk$helper$IdHelper$$.prototype.$getNextUniqueId$ = function $$viewbix$sdk$helper$IdHelper$$$$$getNextUniqueId$$() {
  return(this.$nextId_$++).toString(36);
};
function $viewbix$sdk$helper$LoadingHelper$setLoading$$($element$$132$$, $opt_loading$$) {
  "boolean" == typeof $opt_loading$$ || ($opt_loading$$ = !0);
  $goog$dom$isElement$$($element$$132$$) && ($opt_loading$$ ? $goog$dom$classlist$add$$($element$$132$$, "vbx-loading") : $goog$dom$classlist$remove$$($element$$132$$, "vbx-loading"));
}
;function $viewbix$sdk$helper$ObjectHelper$copyProps$$($target$$57$$, $source$$4$$) {
  $goog$isObject$$($target$$57$$) && !$goog$isArray$$($target$$57$$) && $goog$isObject$$($source$$4$$) && !$goog$isArray$$($source$$4$$) && $goog$object$forEach$$($source$$4$$, function($val$$45$$, $key$$104$$) {
    $target$$57$$[$key$$104$$] = $val$$45$$;
  });
}
;function $viewbix$sdk$helper$ArrayHelper$getAsArray$$($obj$$115$$) {
  return $goog$isArray$$($obj$$115$$) ? $obj$$115$$ : [$obj$$115$$];
}
function $viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($arr$$84$$) {
  return!$goog$isArrayLike$$($arr$$84$$) || 0 == $arr$$84$$.length;
}
;function $viewbix$sdk$helper$RegExpHelper$replace$$($str$$116$$, $re$$6$$, $func$$7$$) {
  $re$$6$$.lastIndex = 0;
  var $val$$46$$ = null, $match$$7$$ = null, $replacementString$$ = "", $nextStartIndex$$ = 0;
  if ($re$$6$$.global) {
    for (;null !== ($match$$7$$ = $re$$6$$.exec($str$$116$$));) {
      null != $match$$7$$ && ($val$$46$$ = $func$$7$$($match$$7$$), null != $val$$46$$ || ($val$$46$$ = ""), $replacementString$$ += $str$$116$$.substring($nextStartIndex$$, $match$$7$$.index) + $val$$46$$, $nextStartIndex$$ = $match$$7$$.index + $match$$7$$[0].length);
    }
  } else {
    $match$$7$$ = $re$$6$$.exec($str$$116$$), null !== $match$$7$$ && ($val$$46$$ = $func$$7$$($match$$7$$), null != $val$$46$$ || ($val$$46$$ = ""), $replacementString$$ += $str$$116$$.substring($nextStartIndex$$, $match$$7$$.index) + $val$$46$$, $nextStartIndex$$ = $match$$7$$.index + $match$$7$$[0].length);
  }
  return $replacementString$$ += $str$$116$$.substring($nextStartIndex$$);
}
;var $viewbix$sdk$helper$StateHelper$stateCallbacks_$$ = {};
function $viewbix$sdk$helper$StateHelper$addStateClasses$$($var_args$$98$$) {
  $goog$isArrayLike$$(arguments) && 0 < arguments.length && !$goog$string$isEmptySafe$$(arguments[0]) && ($goog$dom$classlist$addAll$$.apply(null, [document.body, $goog$array$toArray$$(arguments)]), $viewbix$sdk$helper$StateHelper$callStateCallbacks$$());
}
function $viewbix$sdk$helper$StateHelper$removeAddStateClasses$$($remove$$, $add$$2$$) {
  var $didRemoveOrAdd$$ = !1;
  if (!$viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($remove$$) && !$goog$string$isEmptySafe$$($remove$$[0]) || $goog$isString$$($remove$$) && !$goog$string$isEmptySafe$$($remove$$)) {
    $goog$dom$classlist$removeAll$$(document.body, $viewbix$sdk$helper$ArrayHelper$getAsArray$$($remove$$)), $didRemoveOrAdd$$ = !0;
  }
  if (!$viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($add$$2$$) && !$goog$string$isEmptySafe$$($add$$2$$[0]) || $goog$isString$$($add$$2$$) && !$goog$string$isEmptySafe$$($add$$2$$)) {
    $goog$dom$classlist$addAll$$(document.body, $viewbix$sdk$helper$ArrayHelper$getAsArray$$($add$$2$$)), $didRemoveOrAdd$$ = !0;
  }
  $didRemoveOrAdd$$ && $viewbix$sdk$helper$StateHelper$callStateCallbacks$$();
}
var $viewbix$sdk$helper$StateHelper$firingStateCallbacks_$$ = !1;
function $viewbix$sdk$helper$StateHelper$callStateCallbacks$$() {
  $viewbix$sdk$helper$StateHelper$firingStateCallbacks_$$ || ($viewbix$sdk$helper$StateHelper$firingStateCallbacks_$$ = !0, $goog$object$forEach$$($viewbix$sdk$helper$StateHelper$stateCallbacks_$$, function($callbacks$$2$$, $state$$4$$) {
    $viewbix$sdk$helper$BooleanHelper$booleanParser$$($state$$4$$, function($s$$37$$) {
      return $goog$dom$classlist$contains$$(document.body, $s$$37$$);
    }) && $goog$array$forEach$$($callbacks$$2$$, function($callback$$76$$) {
      $callback$$76$$();
    });
  }), $viewbix$sdk$helper$StateHelper$firingStateCallbacks_$$ = !1);
}
;function $viewbix$sdk$helper$StringHelper$splitAndTrim$$($s$$39$$, $opt_delimiter$$) {
  if ($goog$string$isEmptySafe$$($s$$39$$)) {
    return[];
  }
  null != $opt_delimiter$$ || ($opt_delimiter$$ = ",");
  for (var $a$$39$$ = $s$$39$$.split($opt_delimiter$$), $i$$168$$ = 0;$i$$168$$ < $a$$39$$.length;$i$$168$$++) {
    $a$$39$$[$i$$168$$] = $goog$string$trim$$($a$$39$$[$i$$168$$]);
  }
  return $a$$39$$;
}
function $viewbix$sdk$helper$StringHelper$newLineToBr$$($text$$21$$) {
  return null == $text$$21$$ ? "" : $text$$21$$ = $text$$21$$.replace(/\u000a/ig, "<br/>");
}
;function $viewbix$sdk$helper$TwitterHelper$tweetify$$($text$$22$$) {
  $text$$22$$ = $text$$22$$.replace(/(^|\s)@(\w+)/g, '$1<a onclick=\'window.open("http://www.twitter.com/$2", "_blank");return false;\'>@$2</a>');
  return $text$$22$$ = $text$$22$$.replace(/(^|\s)#(\w+)/g, '$1<a onclick=\'window.open("https://twitter.com/search?q=%23$2", "_blank");return false;\'>#$2</a>');
}
;function $viewbix$sdk$helper$UriHelper$getParameters$$() {
  var $result$$25$$ = {};
  $goog$array$forEach$$($JSCompiler_StaticMethods_getDecodedQuery$$().split("&"), function($el$$46_q$$) {
    $el$$46_q$$ = $el$$46_q$$.split("=");
    $result$$25$$[$el$$46_q$$[0]] = $el$$46_q$$[1];
  });
  return $result$$25$$;
}
;function $viewbix$sdk$helper$ValidationHelper$validateEmail$$($email$$) {
  var $re$$7_valid$$ = /^[a-zA-Z0-9!#$%&*+\/=?^_`{|}~\-@\.]*$/;
  if ($re$$7_valid$$ = $re$$7_valid$$.test($email$$)) {
    $re$$7_valid$$ = /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/, $re$$7_valid$$ = $re$$7_valid$$.test($email$$);
  }
  return $re$$7_valid$$;
}
function $viewbix$sdk$helper$ValidationHelper$validatePhone$$($phone$$) {
  return/^\s*[0-9\-\. \(\)\+]{10,}\s*$/.test($phone$$);
}
function $viewbix$sdk$helper$ValidationHelper$validateUrl$$($url$$45$$) {
  return/(ftp|http|https|tel):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test($url$$45$$);
}
;function $viewbix$sdk$helper$WindowHelper$contentLoaded$$($handler$$49$$) {
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
        } catch ($e$$81$$) {
        }
        if (document.documentElement.doScroll && !$isFrame$$) {
          var $tryScroll$$ = function $$tryScroll$$$() {
            if (!$called$$2$$) {
              try {
                document.documentElement.doScroll("left"), $ready$$();
              } catch ($e$$82$$) {
                setTimeout($tryScroll$$, 10);
              }
            }
          };
          $tryScroll$$();
        }
        document.attachEvent("onreadystatechange", function() {
          "complete" === document.readyState && $ready$$();
        });
      }
    }
  }
}
;function $viewbix$sdk$helper$XhrHelper$$() {
  this.$MAX_RETRIES$ = 2;
  this.$TIMEOUT_INTERVAL$ = 15E3;
  this.$manager_$ = {};
  $goog$object$add$$(this.$manager_$, this.$TIMEOUT_INTERVAL$.toString(), new $goog$net$XhrManager$$(this.$MAX_RETRIES$, void 0, void 0, void 0, this.$TIMEOUT_INTERVAL$));
  this.$idGenerator_$ = new $goog$ui$IdGenerator$$;
}
$goog$addSingletonGetter$$($viewbix$sdk$helper$XhrHelper$$);
function $viewbix$sdk$helper$XhrHelper$send$$($endpoint_url$$48$$, $opt_callback$$11$$, $opt_method$$4$$, $opt_model$$) {
  var $opt_priority$$3$$, $manager_opt_timeout$$, $id$$24_instance$$ = $viewbix$sdk$helper$XhrHelper$$.$getInstance$();
  $manager_opt_timeout$$ = $manager_opt_timeout$$ || $id$$24_instance$$.$TIMEOUT_INTERVAL$;
  $manager_opt_timeout$$ in $id$$24_instance$$.$manager_$ || $goog$object$add$$($id$$24_instance$$.$manager_$, $manager_opt_timeout$$.toString(), new $goog$net$XhrManager$$($id$$24_instance$$.$MAX_RETRIES$, void 0, void 0, void 0, $manager_opt_timeout$$));
  $manager_opt_timeout$$ = $goog$object$get$$($id$$24_instance$$.$manager_$, $manager_opt_timeout$$.toString());
  $endpoint_url$$48$$ = new $goog$Uri$$($endpoint_url$$48$$);
  var $id$$24_instance$$ = $id$$24_instance$$.$idGenerator_$.$getNextUniqueId$(), $headers$$2$$ = new $goog$structs$Map$$;
  $opt_method$$4$$ = $opt_method$$4$$ || "GET";
  $opt_priority$$3$$ = $opt_priority$$3$$ || 50;
  $opt_callback$$11$$ = $opt_callback$$11$$ || $goog$nullFunction$$;
  switch($opt_method$$4$$) {
    case "GET":
      $headers$$2$$.set("Accept", "application/json");
      break;
    case "POST":
      $headers$$2$$.set("Content-Type", "application/json");
      break;
    default:
      throw "Invalid method";;
  }
  $goog$isObject$$(void 0) && $goog$object$forEach$$(void 0, function($headerValue$$, $headerName$$) {
    $headers$$2$$.set($headerName$$, $headerValue$$);
  });
  var $postData$$;
  $goog$isString$$($opt_model$$) ? $postData$$ = $opt_model$$ : null != $opt_model$$ && ($postData$$ = $goog$json$serialize$$($opt_model$$));
  $manager_opt_timeout$$.send($id$$24_instance$$, $endpoint_url$$48$$.toString(), $opt_method$$4$$, $postData$$, $headers$$2$$, $opt_priority$$3$$, function($e$$86_xhrIo$$12$$) {
    $e$$86_xhrIo$$12$$ = $e$$86_xhrIo$$12$$.currentTarget;
    if ($JSCompiler_StaticMethods_isSuccess$$($e$$86_xhrIo$$12$$)) {
      var $resultText$$;
      try {
        $resultText$$ = $e$$86_xhrIo$$12$$.$xhr_$ ? $e$$86_xhrIo$$12$$.$xhr_$.responseText : "";
      } catch ($e$$inline_685$$) {
        $goog$log$fine$$($e$$86_xhrIo$$12$$.$logger_$, "Can not get responseText: " + $e$$inline_685$$.message), $resultText$$ = "";
      }
      if ($goog$isString$$($resultText$$) && !$goog$string$isEmptySafe$$($resultText$$)) {
        var $result$$28$$ = "";
        try {
          $resultText$$ = $resultText$$.replace(/\u2028/g, ""), $result$$28$$ = $goog$json$parse$$($resultText$$), $goog$isFunction$$(void 0) && ($result$$28$$ = (void 0)($result$$28$$));
        } catch ($err$$16$$) {
          $result$$28$$ = $resultText$$;
        }
        $opt_callback$$11$$($result$$28$$, $e$$86_xhrIo$$12$$);
      } else {
        $opt_callback$$11$$($resultText$$, $e$$86_xhrIo$$12$$);
      }
    } else {
      $opt_callback$$11$$(null, $e$$86_xhrIo$$12$$);
    }
  }, void 0);
}
;function $viewbix$sdk$helper$YouTubeHelper$getAllVideosPlaylistIdForChannel$$($channelName$$7$$, $callback$$79$$) {
  $viewbix$sdk$helper$XhrHelper$send$$("https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=" + encodeURIComponent($channelName$$7$$) + "&fields=items/contentDetails/relatedPlaylists/uploads&maxResults=1&key=AIzaSyC0jP7teT6j50zBukQfVZHtUL59O0tP-fE", function($result$$29$$) {
    $viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($result$$29$$.items) && $callback$$79$$(null);
    $callback$$79$$($result$$29$$.items[0].contentDetails.relatedPlaylists.uploads);
  });
}
;function $viewbix$sdk$FeedEntry$$() {
}
$viewbix$sdk$FeedEntry$$.prototype.$toObject$ = function $$viewbix$sdk$FeedEntry$$$$$toObject$$() {
  return{author:this.author, content:this.content, contentSnippet:this.contentSnippet, link:this.link, title:this.title, url:this.url, categories:this.categories, publishedDate:this.publishedDate};
};
function $viewbix$sdk$FormField$$() {
}
function $viewbix$sdk$FormFieldOption$$() {
}
$viewbix$sdk$FormFieldOption$$.prototype.$toObject$ = function $$viewbix$sdk$FormFieldOption$$$$$toObject$$() {
  return{id:this.id, text:this.text, value:this.value};
};
$viewbix$sdk$FormField$$.prototype.$toObject$ = function $$viewbix$sdk$FormField$$$$$toObject$$() {
  return{id:this.id, type:this.type, name:this.name, placeholder:this.placeholder, label:this.label, defaultValue:this.defaultValue, helpText:this.$helpText$, dateFormat:this.$dateFormat$, phoneFormat:this.$phoneFormat$, required:this.required, width:this.width, options:null != this.options ? $goog$array$map$$(this.options, function($o$$3$$) {
    return $o$$3$$.$toObject$();
  }) : null};
};
function $viewbix$sdk$FormField$fromObject$$($obj$$123$$) {
  var $formField$$ = new $viewbix$sdk$FormField$$;
  $goog$isObject$$($obj$$123$$) && ($obj$$123$$.hasOwnProperty("id") && ($formField$$.id = $obj$$123$$.id), $obj$$123$$.hasOwnProperty("type") && ($formField$$.type = $obj$$123$$.type), $obj$$123$$.hasOwnProperty("name") && ($formField$$.name = $obj$$123$$.name), $obj$$123$$.hasOwnProperty("placeholder") && ($formField$$.placeholder = $obj$$123$$.placeholder), $obj$$123$$.hasOwnProperty("label") && ($formField$$.label = $obj$$123$$.label), $obj$$123$$.hasOwnProperty("defaultValue") && ($formField$$.defaultValue = 
  $obj$$123$$.defaultValue), $obj$$123$$.hasOwnProperty("helpText") && ($formField$$.$helpText$ = $obj$$123$$.helpText), $obj$$123$$.hasOwnProperty("dateFormat") && ($formField$$.$dateFormat$ = $obj$$123$$.dateFormat), $obj$$123$$.hasOwnProperty("phoneFormat") && ($formField$$.$phoneFormat$ = $obj$$123$$.phoneFormat), $obj$$123$$.hasOwnProperty("required") && ($formField$$.required = $obj$$123$$.required), $obj$$123$$.hasOwnProperty("width") && ($formField$$.width = $obj$$123$$.width), $obj$$123$$.hasOwnProperty("options") && 
  ($formField$$.options = null != $obj$$123$$.options ? $goog$array$map$$($obj$$123$$.options, function($o$$4$$) {
    var $option$$inline_688$$ = new $viewbix$sdk$FormFieldOption$$;
    $option$$inline_688$$.id = $o$$4$$.id;
    $option$$inline_688$$.text = $o$$4$$.text;
    $option$$inline_688$$.value = $o$$4$$.value;
    return $option$$inline_688$$;
  }) : null));
  return $formField$$;
}
var $viewbix$sdk$FormField$Type$$ = {$ADDRESS$:"address", $EMAIL$:"email", $TEXT_INPUT$:"text", $TEXT_AREA$:"textarea", $NUMBER$:"number", $LABEL$:"label", $PASSWORD$:"password", $CHECKBOX$:"checkbox", $RADIO$:"radio", $SELECT$:"select", $HIDDEN$:"hidden", $SUBMIT$:"submit", $RESET$:"reset", $DATE$:"date", $DATE_PICKER$:"date", $BIRTHDAY$:"birthday", $TEL$:"tel", $ZIP$:"zip", URL:"url", $UPLOAD_IMAGE$:"uploadimage", $FORM_LINK$:"formlink"};
function $viewbix$sdk$SubmitResponse$$() {
}
;function $viewbix$sdk$Form$$($params$$) {
  $goog$events$EventTarget$$.call(this);
  this.$playerAppId_$ = $params$$[$viewbix$sdk$FormParamName$PLAYER_APP_ID$$];
  this.$params_$ = $params$$;
  this.$fixedFields_$ = [];
  this.$functionFields_$ = {};
  this.$source_$ = null;
  this.$idGenerator_$ = $viewbix$sdk$helper$IdHelper$$.$getInstance$();
  this.$uniqueName_$ = "appForm_" + this.$idGenerator_$.$getNextUniqueId$();
  window[this.$uniqueName_$] = this;
  this.$init$();
}
$goog$inherits$$($viewbix$sdk$Form$$, $goog$events$EventTarget$$);
function $JSCompiler_StaticMethods_setSubmitElement$$($JSCompiler_StaticMethods_setSubmitElement$self$$, $submitElement$$) {
  null != $JSCompiler_StaticMethods_setSubmitElement$self$$.$submitElement_$ && ($goog$events$unlisten$$($JSCompiler_StaticMethods_setSubmitElement$self$$.$submitElement_$, "click", $JSCompiler_StaticMethods_setSubmitElement$self$$.$onSubmit$), $goog$dom$removeNode$$($JSCompiler_StaticMethods_setSubmitElement$self$$.$submitElement_$));
  $JSCompiler_StaticMethods_setSubmitElement$self$$.$submitElement_$ = $submitElement$$;
  $goog$events$listen$$($JSCompiler_StaticMethods_setSubmitElement$self$$.$submitElement_$, "click", $JSCompiler_StaticMethods_setSubmitElement$self$$.$onSubmit$, !1, $JSCompiler_StaticMethods_setSubmitElement$self$$);
  $goog$dom$classlist$add$$($JSCompiler_StaticMethods_setSubmitElement$self$$.$submitElement_$, "vbx-submit");
}
$JSCompiler_prototypeAlias$$ = $viewbix$sdk$Form$$.prototype;
$JSCompiler_prototypeAlias$$.removeError = function $$JSCompiler_prototypeAlias$$$removeError$() {
  $goog$dom$classlist$remove$$(document.body, this.$errorCssClassName_$);
  $goog$dom$classlist$remove$$(document.body, "vbx-form-error");
};
function $JSCompiler_StaticMethods_setFieldValid$$($JSCompiler_StaticMethods_setFieldValid$self_rowElement$$, $index$$80$$, $valid$$1$$, $opt_fieldType$$) {
  var $fieldElement$$ = $JSCompiler_StaticMethods_setFieldValid$self_rowElement$$.$fieldElements_$[$index$$80$$];
  $JSCompiler_StaticMethods_setFieldValid$self_rowElement$$ = $JSCompiler_StaticMethods_setFieldValid$self_rowElement$$.$rowElements_$[$index$$80$$];
  if ($valid$$1$$) {
    $goog$dom$classlist$removeAll$$($fieldElement$$, ["vbx-field-invalid", "vbx-field-valid"]), $goog$dom$classlist$removeAll$$($JSCompiler_StaticMethods_setFieldValid$self_rowElement$$, ["vbx-field-invalid", "vbx-field-valid"]), $goog$string$isEmptySafe$$($fieldElement$$.value) || $goog$dom$classlist$add$$($fieldElement$$, "vbx-field-valid"), $goog$dom$classlist$add$$($JSCompiler_StaticMethods_setFieldValid$self_rowElement$$, "vbx-field-valid");
  } else {
    switch($goog$dom$classlist$remove$$($fieldElement$$, "vbx-field-valid"), $goog$dom$classlist$add$$($fieldElement$$, "vbx-field-invalid"), $goog$dom$classlist$remove$$($JSCompiler_StaticMethods_setFieldValid$self_rowElement$$, "vbx-field-valid"), $goog$dom$classlist$add$$($JSCompiler_StaticMethods_setFieldValid$self_rowElement$$, "vbx-field-invalid"), $opt_fieldType$$) {
      case "address":
      ;
      case "text":
      ;
      case "textarea":
      ;
      case "password":
      ;
      case "radio":
      ;
      case "date":
      ;
      case "date":
      ;
      case "birthday":
        $JSCompiler_StaticMethods_setFieldValid$self_rowElement$$.setAttribute("data-invalid-text", "This field is required");
        break;
      case "email":
        $JSCompiler_StaticMethods_setFieldValid$self_rowElement$$.setAttribute("data-invalid-text", "Valid email required");
        break;
      case "number":
        $JSCompiler_StaticMethods_setFieldValid$self_rowElement$$.setAttribute("data-invalid-text", "Number required");
        break;
      case "tel":
        $JSCompiler_StaticMethods_setFieldValid$self_rowElement$$.setAttribute("data-invalid-text", "Valid phone required");
        break;
      case "zip":
        $JSCompiler_StaticMethods_setFieldValid$self_rowElement$$.setAttribute("data-invalid-text", "Valid zip code required");
        break;
      case "url":
        $JSCompiler_StaticMethods_setFieldValid$self_rowElement$$.setAttribute("data-invalid-text", "Valid URL required");
        break;
      case "select":
        $JSCompiler_StaticMethods_setFieldValid$self_rowElement$$.setAttribute("data-invalid-text", "Please select an option");
    }
  }
}
function $JSCompiler_StaticMethods_initFixedFields$$($JSCompiler_StaticMethods_initFixedFields$self$$, $fieldDefs$$) {
  $JSCompiler_StaticMethods_initFixedFields$self$$.$fixedFields_$ = [];
  $JSCompiler_StaticMethods_initFixedFields$self$$.$functionFields_$ = {};
  $goog$object$forEach$$($fieldDefs$$, function($def$$, $fieldName$$) {
    if (null == $def$$ || $goog$isObject$$($def$$)) {
      $goog$isFunction$$($def$$) ? this.$functionFields_$[$fieldName$$] = $def$$ : $goog$isObject$$($def$$) && !$goog$isArray$$($def$$) && ($field$$ = $viewbix$sdk$FormField$fromObject$$($def$$), this.$fixedFields_$.push($field$$));
    } else {
      var $field$$ = new $viewbix$sdk$FormField$$;
      $field$$.type = "hidden";
      $field$$.name = $fieldName$$;
      $field$$.defaultValue = $def$$;
      this.$fixedFields_$.push($field$$);
    }
  }, $JSCompiler_StaticMethods_initFixedFields$self$$);
}
function $JSCompiler_StaticMethods_initReloadOnConfigs$$($JSCompiler_StaticMethods_initReloadOnConfigs$self$$, $configs$$) {
  $goog$array$forEach$$($configs$$, function($configName$$1$$) {
    $viewbix$sdk$helper$BindHelper$listenToConfig$$($configName$$1$$, function() {
      $goog$dom$removeChildren$$(this.$formElement_$);
      $JSCompiler_StaticMethods_getFields$$(this);
    }, this);
  }, $JSCompiler_StaticMethods_initReloadOnConfigs$self$$);
}
$JSCompiler_prototypeAlias$$.$init$ = function $$JSCompiler_prototypeAlias$$$$init$$() {
  $goog$object$forEach$$(this.$params_$, function($param$$4$$, $name$$96$$) {
    switch($name$$96$$) {
      case $viewbix$sdk$FormParamName$FORM$$:
        this.$formElement_$ = $goog$dom$getElementHelper_$$(document, $param$$4$$);
        this.$successCssClassName_$ = $param$$4$$ + "-success";
        this.$errorCssClassName_$ = $param$$4$$ + "-error";
        $goog$events$listen$$(this.$formElement_$, "submit", this.$onSubmit$, !1, this);
        $goog$dom$classlist$add$$(this.$formElement_$, "vbx-form");
        break;
      case $viewbix$sdk$FormParamName$CHOOSER$$:
        this.$chooserElement_$ = $goog$dom$getElementHelper_$$(document, $param$$4$$);
        $goog$style$setElementShown$$(this.$chooserElement_$, !1);
        break;
      case $viewbix$sdk$FormParamName$FORM_PANE$$:
        this.$formPaneElement_$ = $goog$dom$getElementHelper_$$(document, $param$$4$$);
        $goog$style$setElementShown$$(this.$formPaneElement_$, !1);
        break;
      case $viewbix$sdk$FormParamName$TITLE$$:
        this.$titleElement_$ = $goog$dom$getElementHelper_$$(document, $param$$4$$);
        break;
      case $viewbix$sdk$FormParamName$SUBMIT$$:
        $JSCompiler_StaticMethods_setSubmitElement$$(this, $goog$dom$getElementHelper_$$(document, $param$$4$$));
        break;
      case $viewbix$sdk$FormParamName$ON_BUILT$$:
        this.$builtCallback_$ = $param$$4$$;
        break;
      case $viewbix$sdk$FormParamName$FIXED_FIELDS$$:
        $JSCompiler_StaticMethods_initFixedFields$$(this, $param$$4$$);
        break;
      case $viewbix$sdk$FormParamName$SOURCE$$:
        this.$source_$ = $param$$4$$;
        break;
      case $viewbix$sdk$FormParamName$RELOAD_ON_CONFIGS$$:
        $JSCompiler_StaticMethods_initReloadOnConfigs$$(this, $param$$4$$);
    }
  }, this);
  $JSCompiler_StaticMethods_getFields$$(this);
};
function $JSCompiler_StaticMethods_validate$$($JSCompiler_StaticMethods_validate$self$$) {
  var $valid$$2$$ = !0;
  $goog$array$forEachRight$$($JSCompiler_StaticMethods_validate$self$$.$fields_$, function($field$$1$$, $index$$81$$) {
    switch($field$$1$$.type) {
      case "address":
      ;
      case "text":
      ;
      case "textarea":
      ;
      case "password":
      ;
      case "radio":
      ;
      case "date":
      ;
      case "date":
      ;
      case "birthday":
      ;
      case "select":
        var $val$$48$$ = this.$fieldElements_$[$index$$81$$].value;
        $field$$1$$.required && $goog$string$isEmptySafe$$($val$$48$$) ? ($JSCompiler_StaticMethods_setFieldValid$$(this, $index$$81$$, !1, $field$$1$$.type), $valid$$2$$ = !1) : $JSCompiler_StaticMethods_setFieldValid$$(this, $index$$81$$, !0);
        break;
      case "email":
        $val$$48$$ = this.$fieldElements_$[$index$$81$$].value;
        $field$$1$$.required && !$viewbix$sdk$helper$ValidationHelper$validateEmail$$($val$$48$$) || !$goog$string$isEmptySafe$$($val$$48$$) && !$viewbix$sdk$helper$ValidationHelper$validateEmail$$($val$$48$$) ? ($JSCompiler_StaticMethods_setFieldValid$$(this, $index$$81$$, !1, $field$$1$$.type), $valid$$2$$ = !1) : $JSCompiler_StaticMethods_setFieldValid$$(this, $index$$81$$, !0);
        break;
      case "number":
        $val$$48$$ = this.$fieldElements_$[$index$$81$$].value;
        $field$$1$$.required && isNaN(parseFloat($val$$48$$)) || !$goog$string$isEmptySafe$$($val$$48$$) && isNaN(parseFloat($val$$48$$)) ? ($JSCompiler_StaticMethods_setFieldValid$$(this, $index$$81$$, !1, $field$$1$$.type), $valid$$2$$ = !1) : $JSCompiler_StaticMethods_setFieldValid$$(this, $index$$81$$, !0);
        break;
      case "tel":
        $val$$48$$ = this.$fieldElements_$[$index$$81$$].value;
        $field$$1$$.required && !$viewbix$sdk$helper$ValidationHelper$validatePhone$$($val$$48$$) || !$goog$string$isEmptySafe$$($val$$48$$) && !$viewbix$sdk$helper$ValidationHelper$validatePhone$$($val$$48$$) ? ($JSCompiler_StaticMethods_setFieldValid$$(this, $index$$81$$, !1, $field$$1$$.type), $valid$$2$$ = !1) : $JSCompiler_StaticMethods_setFieldValid$$(this, $index$$81$$, !0);
        break;
      case "zip":
        $val$$48$$ = this.$fieldElements_$[$index$$81$$].value;
        $field$$1$$.required && !/^\s*[0-9]{5}(-[0-9]{4})?\s*$/.test($val$$48$$) || !$goog$string$isEmptySafe$$($val$$48$$) && !/^\s*[0-9]{5}(-[0-9]{4})?\s*$/.test($val$$48$$) ? ($JSCompiler_StaticMethods_setFieldValid$$(this, $index$$81$$, !1, $field$$1$$.type), $valid$$2$$ = !1) : $JSCompiler_StaticMethods_setFieldValid$$(this, $index$$81$$, !0);
        break;
      case "url":
        $val$$48$$ = this.$fieldElements_$[$index$$81$$].value, $field$$1$$.required && !$viewbix$sdk$helper$ValidationHelper$validateUrl$$($val$$48$$) || !$goog$string$isEmptySafe$$($val$$48$$) && !$viewbix$sdk$helper$ValidationHelper$validateUrl$$($val$$48$$) ? ($JSCompiler_StaticMethods_setFieldValid$$(this, $index$$81$$, !1, $field$$1$$.type), $valid$$2$$ = !1) : $JSCompiler_StaticMethods_setFieldValid$$(this, $index$$81$$, !0);
    }
  }, $JSCompiler_StaticMethods_validate$self$$);
  $goog$object$forEach$$($JSCompiler_StaticMethods_validate$self$$.$functionFields_$, function($func$$8$$) {
    $func$$8$$({}) || ($valid$$2$$ = !1);
  }, $JSCompiler_StaticMethods_validate$self$$);
  return $valid$$2$$;
}
function $JSCompiler_StaticMethods_getFormDataMap$$($dataMap_form$$6$$) {
  for (var $map$$inline_711$$ = new $goog$structs$Map$$, $els$$inline_1213_inputs$$inline_1220$$ = $dataMap_form$$6$$.elements, $el$$inline_1214_input$$inline_1221_values$$inline_1217$$, $i$$inline_1215$$ = 0;$el$$inline_1214_input$$inline_1221_values$$inline_1217$$ = $els$$inline_1213_inputs$$inline_1220$$[$i$$inline_1215$$];$i$$inline_1215$$++) {
    if ($el$$inline_1214_input$$inline_1221_values$$inline_1217$$.form == $dataMap_form$$6$$ && !$el$$inline_1214_input$$inline_1221_values$$inline_1217$$.disabled && "fieldset" != $el$$inline_1214_input$$inline_1221_values$$inline_1217$$.tagName.toLowerCase()) {
      var $name$$inline_1216$$ = $el$$inline_1214_input$$inline_1221_values$$inline_1217$$.name;
      switch($el$$inline_1214_input$$inline_1221_values$$inline_1217$$.type.toLowerCase()) {
        case "file":
        ;
        case "submit":
        ;
        case "reset":
        ;
        case "button":
          break;
        case "select-multiple":
          $el$$inline_1214_input$$inline_1221_values$$inline_1217$$ = $goog$dom$forms$getValue$$($el$$inline_1214_input$$inline_1221_values$$inline_1217$$);
          if (null != $el$$inline_1214_input$$inline_1221_values$$inline_1217$$) {
            for (var $value$$inline_1218$$, $j$$inline_1219$$ = 0;$value$$inline_1218$$ = $el$$inline_1214_input$$inline_1221_values$$inline_1217$$[$j$$inline_1219$$];$j$$inline_1219$$++) {
              $goog$dom$forms$addFormDataToMap_$$($map$$inline_711$$, $name$$inline_1216$$, $value$$inline_1218$$);
            }
          }
          break;
        default:
          $value$$inline_1218$$ = $goog$dom$forms$getValue$$($el$$inline_1214_input$$inline_1221_values$$inline_1217$$), null != $value$$inline_1218$$ && $goog$dom$forms$addFormDataToMap_$$($map$$inline_711$$, $name$$inline_1216$$, $value$$inline_1218$$);
      }
    }
  }
  $els$$inline_1213_inputs$$inline_1220$$ = $dataMap_form$$6$$.getElementsByTagName("input");
  for ($i$$inline_1215$$ = 0;$el$$inline_1214_input$$inline_1221_values$$inline_1217$$ = $els$$inline_1213_inputs$$inline_1220$$[$i$$inline_1215$$];$i$$inline_1215$$++) {
    $el$$inline_1214_input$$inline_1221_values$$inline_1217$$.form == $dataMap_form$$6$$ && "image" == $el$$inline_1214_input$$inline_1221_values$$inline_1217$$.type.toLowerCase() && ($name$$inline_1216$$ = $el$$inline_1214_input$$inline_1221_values$$inline_1217$$.name, $goog$dom$forms$addFormDataToMap_$$($map$$inline_711$$, $name$$inline_1216$$, $el$$inline_1214_input$$inline_1221_values$$inline_1217$$.value), $goog$dom$forms$addFormDataToMap_$$($map$$inline_711$$, $name$$inline_1216$$ + ".x", "0"), 
    $goog$dom$forms$addFormDataToMap_$$($map$$inline_711$$, $name$$inline_1216$$ + ".y", "0"));
  }
  $dataMap_form$$6$$ = $map$$inline_711$$.$toObject$();
  $goog$object$remove$$($dataMap_form$$6$$, "");
  $goog$object$remove$$($dataMap_form$$6$$, ".x");
  $goog$object$remove$$($dataMap_form$$6$$, ".y");
  return $dataMap_form$$6$$;
}
function $JSCompiler_StaticMethods_getFunctionFieldValues$$($JSCompiler_StaticMethods_getFunctionFieldValues$self$$) {
  var $functionData$$ = {};
  $goog$object$forEach$$($JSCompiler_StaticMethods_getFunctionFieldValues$self$$.$functionFields_$, function($func$$9$$, $fieldName$$2$$) {
    var $val$$50$$ = {};
    $func$$9$$($val$$50$$) && ($functionData$$[$fieldName$$2$$] = [$val$$50$$.value]);
  }, $JSCompiler_StaticMethods_getFunctionFieldValues$self$$);
  return $functionData$$;
}
$JSCompiler_prototypeAlias$$.$onSubmit$ = function $$JSCompiler_prototypeAlias$$$$onSubmit$$($event$$2_submitData$$) {
  $event$$2_submitData$$.preventDefault();
  if (this.$validateWithMessage$()) {
    $viewbix$sdk$helper$LoadingHelper$setLoading$$(document.body, !0);
    $event$$2_submitData$$ = $JSCompiler_StaticMethods_getFormDataMap$$(this.$formElement_$);
    var $functionFieldValues$$ = $JSCompiler_StaticMethods_getFunctionFieldValues$$(this);
    $viewbix$sdk$helper$ObjectHelper$copyProps$$($event$$2_submitData$$, $functionFieldValues$$);
    $viewbix$sdk$helper$XhrHelper$send$$("/api/form/submit/" + this.$playerAppId_$, $goog$bind$$(function($element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$) {
      $viewbix$sdk$helper$LoadingHelper$setLoading$$(document.body, !1);
      var $classToAdd$$inline_1225_classToAdd$$inline_1233_errorElement$$inline_720_response$$inline_714$$ = new $viewbix$sdk$SubmitResponse$$;
      $classToAdd$$inline_1225_classToAdd$$inline_1233_errorElement$$inline_720_response$$inline_714$$.success = $element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$.success;
      $classToAdd$$inline_1225_classToAdd$$inline_1233_errorElement$$inline_720_response$$inline_714$$.message = $element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$.message;
      if ($classToAdd$$inline_1225_classToAdd$$inline_1233_errorElement$$inline_720_response$$inline_714$$.success) {
        $element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$ = document.body, $classToAdd$$inline_1225_classToAdd$$inline_1233_errorElement$$inline_720_response$$inline_714$$ = this.$successCssClassName_$, $goog$dom$classlist$remove$$($element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$, this.$errorCssClassName_$), $goog$dom$classlist$add$$($element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$, 
        $classToAdd$$inline_1225_classToAdd$$inline_1233_errorElement$$inline_720_response$$inline_714$$), $element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$ = document.body, $goog$dom$classlist$remove$$($element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$, "vbx-form-error"), $goog$dom$classlist$add$$($element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$, 
        "vbx-form-success"), this.dispatchEvent(new $goog$events$Event$$("formComplete"));
      } else {
        $element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$ = $element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$.message;
        if (null != $element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$ && !$goog$string$isEmptySafe$$($element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$) && ($classToAdd$$inline_1225_classToAdd$$inline_1233_errorElement$$inline_720_response$$inline_714$$ = document.querySelector(".vbx-form-error-msg"), null != $classToAdd$$inline_1225_classToAdd$$inline_1233_errorElement$$inline_720_response$$inline_714$$)) {
          var $errorText$$inline_721$$ = $goog$dom$getTextContent$$($classToAdd$$inline_1225_classToAdd$$inline_1233_errorElement$$inline_720_response$$inline_714$$);
          null != $classToAdd$$inline_1225_classToAdd$$inline_1233_errorElement$$inline_720_response$$inline_714$$ || ($errorText$$inline_721$$ = "");
          $goog$dom$setTextContent$$($classToAdd$$inline_1225_classToAdd$$inline_1233_errorElement$$inline_720_response$$inline_714$$, $errorText$$inline_721$$ + $element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$);
        }
        $element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$ = document.body;
        $classToAdd$$inline_1225_classToAdd$$inline_1233_errorElement$$inline_720_response$$inline_714$$ = this.$errorCssClassName_$;
        $goog$dom$classlist$remove$$($element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$, this.$successCssClassName_$);
        $goog$dom$classlist$add$$($element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$, $classToAdd$$inline_1225_classToAdd$$inline_1233_errorElement$$inline_720_response$$inline_714$$);
        $element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$ = document.body;
        $goog$dom$classlist$remove$$($element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$, "vbx-form-success");
        $goog$dom$classlist$add$$($element$$inline_1223_element$$inline_1227_element$$inline_1231_element$$inline_1235_opt_errorMessage$$inline_719_result$$30$$, "vbx-form-error");
      }
    }, this), "POST", $event$$2_submitData$$);
  } else {
    $goog$events$listen$$(this.$formElement_$, "mousedown", this.$validateWithoutMessage$, !1, this), $goog$events$listen$$(this.$formElement_$, "input", this.$validateWithoutMessage$, !1, this), $goog$events$listen$$(this.$formElement_$, "change", this.$validateWithMessage$, !1, this);
  }
};
$JSCompiler_prototypeAlias$$.$validateWithMessage$ = function $$JSCompiler_prototypeAlias$$$$validateWithMessage$$() {
  $goog$dom$classlist$add$$(this.$formElement_$, "show-invalid-message");
  return $JSCompiler_StaticMethods_validate$$(this);
};
$JSCompiler_prototypeAlias$$.$validateWithoutMessage$ = function $$JSCompiler_prototypeAlias$$$$validateWithoutMessage$$() {
  $goog$dom$classlist$remove$$(this.$formElement_$, "show-invalid-message");
  return $JSCompiler_StaticMethods_validate$$(this);
};
function $JSCompiler_StaticMethods_buildDom$$($JSCompiler_StaticMethods_buildDom$self$$, $fields$$) {
  $JSCompiler_StaticMethods_buildDom$self$$.$fields_$ = $fields$$;
  $JSCompiler_StaticMethods_buildDom$self$$.$fieldElements_$ = [];
  $JSCompiler_StaticMethods_buildDom$self$$.$rowElements_$ = [];
  $viewbix$sdk$helper$BindHelper$listenToConfig$$("title", function($enterTriggerElement_title$$7$$) {
    $goog$dom$removeChildren$$(this.$formElement_$);
    var $hasTitleField$$ = !1, $fieldsToBuild$$ = $goog$array$toArray$$(this.$fields_$);
    if (null != $enterTriggerElement_title$$7$$) {
      var $hasTitleField$$ = !0, $formField$$1$$ = new $viewbix$sdk$FormField$$;
      $formField$$1$$.name = "vbx-form-title";
      $formField$$1$$.type = "label";
      $formField$$1$$.defaultValue = $enterTriggerElement_title$$7$$;
      $goog$array$splice$$($fieldsToBuild$$, 0, 0, $formField$$1$$);
    }
    $goog$array$forEach$$($fieldsToBuild$$, function($field$$2$$, $index$$82$$) {
      $goog$string$isEmptySafe$$($field$$2$$.id) && ($field$$2$$.id = "vbx_field_" + this.$idGenerator_$.$getNextUniqueId$());
      null != $field$$2$$.options && $goog$array$forEach$$($field$$2$$.options, function($option$$4$$) {
        $option$$4$$.id = "vbx_field_option_" + this.$idGenerator_$.$getNextUniqueId$();
      }, this);
      var $fieldElement$$1_fields$$1_rowElement$$1$$ = $soy$renderAsElement$$({$formField$:$field$$2$$, types:$viewbix$sdk$FormField$Type$$});
      this.$formElement_$.appendChild($fieldElement$$1_fields$$1_rowElement$$1$$);
      $goog$dom$classlist$add$$($fieldElement$$1_fields$$1_rowElement$$1$$, "vbx-form-row");
      this.$rowElements_$.push($fieldElement$$1_fields$$1_rowElement$$1$$);
      if (!$hasTitleField$$ || 0 < $index$$82$$) {
        $fieldElement$$1_fields$$1_rowElement$$1$$ = this.$formElement_$.querySelector("#" + $field$$2$$.id), null != $fieldElement$$1_fields$$1_rowElement$$1$$ ? "submit" == $field$$2$$.type ? $JSCompiler_StaticMethods_setSubmitElement$$(this, $fieldElement$$1_fields$$1_rowElement$$1$$) : this.$fieldElements_$.push($fieldElement$$1_fields$$1_rowElement$$1$$) : null != $field$$2$$.options && ($fieldElement$$1_fields$$1_rowElement$$1$$ = $goog$array$map$$($field$$2$$.options, function($option$$5$$) {
          return this.$formElement_$.querySelector("#" + $option$$5$$.id);
        }, this), this.$fieldElements_$.push($fieldElement$$1_fields$$1_rowElement$$1$$));
      }
    }, this);
    $enterTriggerElement_title$$7$$ = $goog$dom$htmlToDocumentFragment_$$('<input class="input-pix" type=image src="//www.viewbix.com/pix.gif"></input>');
    this.$formElement_$.appendChild($enterTriggerElement_title$$7$$);
    $goog$isFunction$$(this.$builtCallback_$) && this.$builtCallback_$();
  }, $JSCompiler_StaticMethods_buildDom$self$$, !0);
}
function $JSCompiler_StaticMethods_buildFormChooser$$($JSCompiler_StaticMethods_buildFormChooser$self$$, $fields$$2$$) {
  if (!$goog$dom$isElement$$($JSCompiler_StaticMethods_buildFormChooser$self$$.$chooserElement_$)) {
    throw'Missing required param "chooserElement"';
  }
  $goog$dom$isElement$$($JSCompiler_StaticMethods_buildFormChooser$self$$.$chooserElement_$) && $goog$dom$removeChildren$$($JSCompiler_StaticMethods_buildFormChooser$self$$.$chooserElement_$);
  $JSCompiler_StaticMethods_showChooser$$($JSCompiler_StaticMethods_buildFormChooser$self$$);
  $goog$array$forEach$$($fields$$2$$, function($field$$3_rowElement$$2$$) {
    $field$$3_rowElement$$2$$ = $soy$renderAsElement$$({$formField$:$field$$3_rowElement$$2$$, types:$viewbix$sdk$FormField$Type$$, $formName$:this.$uniqueName_$});
    this.$chooserElement_$.appendChild($field$$3_rowElement$$2$$);
    $goog$dom$classlist$add$$($field$$3_rowElement$$2$$, "vbx-form-row");
  }, $JSCompiler_StaticMethods_buildFormChooser$self$$);
}
function $JSCompiler_StaticMethods_getFields$$($JSCompiler_StaticMethods_getFields$self$$, $opt_listId$$) {
  if ($goog$isFunction$$($JSCompiler_StaticMethods_getFields$self$$.$source_$)) {
    var $published_result$$31$$ = $JSCompiler_StaticMethods_getFields$self$$.$source_$();
    $JSCompiler_StaticMethods_processFields$$($JSCompiler_StaticMethods_getFields$self$$, $published_result$$31$$);
  } else {
    var $published_result$$31$$ = !0, $endpoint$$2_publishedParam$$ = (new $goog$Uri$$(window.location.href)).$queryData_$.get("published");
    $goog$string$isEmptySafe$$($endpoint$$2_publishedParam$$) || ($published_result$$31$$ = $viewbix$sdk$helper$BooleanHelper$convertToBoolean$$($endpoint$$2_publishedParam$$));
    $endpoint$$2_publishedParam$$ = "/api/form/fields/" + $JSCompiler_StaticMethods_getFields$self$$.$playerAppId_$ + ($goog$string$isEmptySafe$$($opt_listId$$) ? "" : "/" + $opt_listId$$);
    $endpoint$$2_publishedParam$$ += "?published=" + $published_result$$31$$;
    $viewbix$sdk$helper$LoadingHelper$setLoading$$(document.body, !0);
    $viewbix$sdk$helper$XhrHelper$send$$($endpoint$$2_publishedParam$$, $goog$bind$$(function($result$$32$$) {
      $viewbix$sdk$helper$LoadingHelper$setLoading$$(document.body, !1);
      $JSCompiler_StaticMethods_processFields$$(this, $result$$32$$);
    }, $JSCompiler_StaticMethods_getFields$self$$));
  }
}
function $JSCompiler_StaticMethods_processFields$$($JSCompiler_StaticMethods_processFields$self$$, $result$$33$$) {
  var $fields$$3$$;
  null == $result$$33$$ && $viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($JSCompiler_StaticMethods_processFields$self$$.$fixedFields_$) ? (null != $JSCompiler_StaticMethods_processFields$self$$.$formElement_$ && $goog$dom$classlist$add$$($JSCompiler_StaticMethods_processFields$self$$.$formElement_$, "vbx-no-valid-form"), null != $JSCompiler_StaticMethods_processFields$self$$.$titleElement_$ && $goog$dom$classlist$add$$($JSCompiler_StaticMethods_processFields$self$$.$titleElement_$, "vbx-no-valid-form"), 
  null != $JSCompiler_StaticMethods_processFields$self$$.$submitElement_$ && $goog$dom$classlist$add$$($JSCompiler_StaticMethods_processFields$self$$.$submitElement_$, "vbx-no-valid-form"), $JSCompiler_StaticMethods_showForm$$($JSCompiler_StaticMethods_processFields$self$$)) : (null != $JSCompiler_StaticMethods_processFields$self$$.$formElement_$ && $goog$dom$classlist$remove$$($JSCompiler_StaticMethods_processFields$self$$.$formElement_$, "vbx-no-valid-form"), null != $JSCompiler_StaticMethods_processFields$self$$.$titleElement_$ && 
  $goog$dom$classlist$remove$$($JSCompiler_StaticMethods_processFields$self$$.$titleElement_$, "vbx-no-valid-form"), null != $JSCompiler_StaticMethods_processFields$self$$.$submitElement_$ && $goog$dom$classlist$remove$$($JSCompiler_StaticMethods_processFields$self$$.$submitElement_$, "vbx-no-valid-form"), $fields$$3$$ = $goog$array$map$$($result$$33$$, function($f$$53$$) {
    return $viewbix$sdk$FormField$fromObject$$($f$$53$$);
  }, $JSCompiler_StaticMethods_processFields$self$$), $goog$isArray$$($JSCompiler_StaticMethods_processFields$self$$.$fixedFields_$) && ($fields$$3$$ = $fields$$3$$.concat($JSCompiler_StaticMethods_processFields$self$$.$fixedFields_$)), 0 < $fields$$3$$.length && "formlink" == $fields$$3$$[0].type ? $JSCompiler_StaticMethods_buildFormChooser$$($JSCompiler_StaticMethods_processFields$self$$, $fields$$3$$) : ($JSCompiler_StaticMethods_buildDom$$($JSCompiler_StaticMethods_processFields$self$$, $fields$$3$$), 
  $JSCompiler_StaticMethods_showForm$$($JSCompiler_StaticMethods_processFields$self$$)));
}
function $JSCompiler_StaticMethods_loadFormByListId$$($JSCompiler_StaticMethods_loadFormByListId$self$$, $listId$$, $title$$8$$) {
  $goog$dom$removeChildren$$($JSCompiler_StaticMethods_loadFormByListId$self$$.$formElement_$);
  var $backButtonContainer$$ = $goog$dom$isElement$$($JSCompiler_StaticMethods_loadFormByListId$self$$.$formPaneElement_$) ? $JSCompiler_StaticMethods_loadFormByListId$self$$.$formPaneElement_$ : $JSCompiler_StaticMethods_loadFormByListId$self$$.$formElement_$, $backButton$$ = $backButtonContainer$$.querySelector(".vbx-form-back-button");
  $goog$dom$isElement$$($backButton$$) || ($backButton$$ = document.createElement("div"), $backButtonContainer$$.insertBefore($backButton$$, $backButtonContainer$$.childNodes[0] || null), $goog$dom$classlist$add$$($backButton$$, "vbx-form-back-button"));
  $goog$events$listen$$($backButton$$, "click", function() {
    $JSCompiler_StaticMethods_showChooser$$(this);
  }, !1, $JSCompiler_StaticMethods_loadFormByListId$self$$);
  $JSCompiler_StaticMethods_getFields$$($JSCompiler_StaticMethods_loadFormByListId$self$$, $listId$$);
  $JSCompiler_StaticMethods_showForm$$($JSCompiler_StaticMethods_loadFormByListId$self$$, $title$$8$$);
}
function $JSCompiler_StaticMethods_showChooser$$($JSCompiler_StaticMethods_showChooser$self$$) {
  $goog$dom$classlist$remove$$(document.body, $JSCompiler_StaticMethods_showChooser$self$$.$successCssClassName_$);
  $goog$dom$classlist$remove$$(document.body, "vbx-form-success");
  $JSCompiler_StaticMethods_showChooser$self$$.removeError();
  $goog$style$setElementShown$$($JSCompiler_StaticMethods_showChooser$self$$.$chooserElement_$, !0);
  $goog$style$setElementShown$$($JSCompiler_StaticMethods_showChooser$self$$.$formPaneElement_$, !1);
}
function $JSCompiler_StaticMethods_showForm$$($JSCompiler_StaticMethods_showForm$self$$, $opt_title$$2$$) {
  null != $JSCompiler_StaticMethods_showForm$self$$.$chooserElement_$ && $goog$style$setElementShown$$($JSCompiler_StaticMethods_showForm$self$$.$chooserElement_$, !1);
  null != $JSCompiler_StaticMethods_showForm$self$$.$formPaneElement_$ && $goog$style$setElementShown$$($JSCompiler_StaticMethods_showForm$self$$.$formPaneElement_$, !0);
  null != $opt_title$$2$$ && !$goog$string$isEmptySafe$$($opt_title$$2$$) && $goog$dom$isElement$$($JSCompiler_StaticMethods_showForm$self$$.$titleElement_$) && $goog$dom$setTextContent$$($JSCompiler_StaticMethods_showForm$self$$.$titleElement_$, $opt_title$$2$$);
}
var $viewbix$sdk$FormParamName$FORM$$ = "formElement", $viewbix$sdk$FormParamName$SUBMIT$$ = "submitElement", $viewbix$sdk$FormParamName$ON_BUILT$$ = "onBuilt", $viewbix$sdk$FormParamName$PLAYER_APP_ID$$ = "playerAppId", $viewbix$sdk$FormParamName$CHOOSER$$ = "chooserElement", $viewbix$sdk$FormParamName$FORM_PANE$$ = "formPaneElement", $viewbix$sdk$FormParamName$TITLE$$ = "titleElement", $viewbix$sdk$FormParamName$FIXED_FIELDS$$ = "fixedFields", $viewbix$sdk$FormParamName$SOURCE$$ = "source", $viewbix$sdk$FormParamName$RELOAD_ON_CONFIGS$$ = 
"reloadOnConfigs";
function $viewbix$sdk$XpcMessage$$($name$$97$$, $opt_data$$13$$) {
  this.name = $name$$97$$;
  this.data = null != $opt_data$$13$$ ? $opt_data$$13$$ : {};
}
function $viewbix$sdk$XpcMessage$createXpcPayload$$($name$$98$$, $opt_data$$14$$) {
  return{name:$name$$98$$, data:null != $opt_data$$14$$ ? $opt_data$$14$$ : {}};
}
;function $viewbix$sdk$track$InteractionData$$($id$$27$$, $control$$, $location$$22$$, $targetIsApp$$, $target$$58$$, $icon$$, $label$$6$$, $scope$$6$$) {
  this.id = $id$$27$$;
  this.control = $control$$;
  this.location = $location$$22$$;
  this.$targetIsApp$ = $targetIsApp$$;
  this.target = $target$$58$$;
  this.icon = $icon$$;
  this.label = $label$$6$$;
  this.scope = $scope$$6$$;
}
$viewbix$sdk$track$InteractionData$$.prototype.$toStringLiteralObject$ = function $$viewbix$sdk$track$InteractionData$$$$$toStringLiteralObject$$() {
  return{id:this.id, control:this.control, location:this.location, targetIsApp:this.$targetIsApp$, target:this.target, icon:this.icon, label:this.label, scope:this.scope};
};
var $viewbix$sdk$track$InteractionData$Id$$ = {FULLSCREEN:"fullscreen", CTA_BUTTON:"ctabutton", SHARE:"share", SHARE_FACEBOOK:"sharefacebook", SHARE_TWITTER:"sharetwitter", CUSTOM_LOGO:"customlogo", BANNER2:"banner2", VIDEO1:"video1"};
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
  $goog$object$add$$(this.$eventTrackingMap_$, $viewbix$sdk$track$TrackEventType$IMPRESSION$$, {schema:"iglu:com.viewbix/impression/jsonschema/1-0-0", contexts:[$viewbix$sdk$track$Snowplow$getVideoContext$$, $viewbix$sdk$track$Snowplow$getPlayerContext$$, $viewbix$sdk$track$Snowplow$getPlayerConfigContext$$, $viewbix$sdk$track$Snowplow$getPlayerAppContexts$$, $viewbix$sdk$track$Snowplow$getAppAssociationContexts$$], data:$viewbix$sdk$track$Snowplow$getImpressionData$$});
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
  var $contexts$$ = [], $apps$$ = window.getPlayerConfigurations().applications;
  $goog$array$forEach$$($apps$$, function($context$$8_contextInfo$$) {
    $context$$8_contextInfo$$ = null != $context$$8_contextInfo$$ ? {schema:"iglu:com.viewbix/player_app_context/jsonschema/1-0-0", data:$viewbix$sdk$track$Snowplow$adaptContextToSchema$$($context$$8_contextInfo$$, "id internalId component order showInMenu icon label".split(" "), ["showInMenu"], [], ["order"])} : null;
    null != $context$$8_contextInfo$$ && $contexts$$.push($context$$8_contextInfo$$);
  });
  return $contexts$$;
}
function $viewbix$sdk$track$Snowplow$adaptContextToSchema$$($context$$9$$, $schemaProperties$$1$$, $booleanProperties$$1$$, $numberProperties$$1$$, $integerProperties$$1$$) {
  var $newContext$$ = {};
  $goog$array$forEach$$($goog$object$getKeys$$($context$$9$$), function($key$$111$$) {
    $goog$array$contains$$($schemaProperties$$1$$, $key$$111$$) && $goog$object$add$$($newContext$$, $key$$111$$, $context$$9$$[$key$$111$$]);
    if ($goog$array$contains$$($booleanProperties$$1$$, $key$$111$$) && $goog$isString$$($newContext$$[$key$$111$$])) {
      $newContext$$[$key$$111$$] = "true" === $newContext$$[$key$$111$$];
    } else {
      if ($goog$array$contains$$($numberProperties$$1$$, $key$$111$$) && $goog$isString$$($newContext$$[$key$$111$$])) {
        var $property$$inline_744_result$$inline_745_result$$inline_748$$ = $newContext$$[$key$$111$$];
        if (null != $property$$inline_744_result$$inline_745_result$$inline_748$$) {
          var $num$$inline_1246$$ = Number($property$$inline_744_result$$inline_745_result$$inline_748$$), $property$$inline_744_result$$inline_745_result$$inline_748$$ = 0 == $num$$inline_1246$$ && /^[\s\xa0]*$/.test($property$$inline_744_result$$inline_745_result$$inline_748$$) ? NaN : $num$$inline_1246$$;
          isNaN($property$$inline_744_result$$inline_745_result$$inline_748$$) && ($property$$inline_744_result$$inline_745_result$$inline_748$$ = null);
        } else {
          $property$$inline_744_result$$inline_745_result$$inline_748$$ = null;
        }
        $newContext$$[$key$$111$$] = $property$$inline_744_result$$inline_745_result$$inline_748$$;
      } else {
        $goog$array$contains$$($integerProperties$$1$$, $key$$111$$) && $goog$isString$$($newContext$$[$key$$111$$]) && ($property$$inline_744_result$$inline_745_result$$inline_748$$ = $goog$string$parseInt$$($newContext$$[$key$$111$$]), isNaN($property$$inline_744_result$$inline_745_result$$inline_748$$) && ($property$$inline_744_result$$inline_745_result$$inline_748$$ = null), $newContext$$[$key$$111$$] = $property$$inline_744_result$$inline_745_result$$inline_748$$);
      }
    }
  });
  return $newContext$$;
}
function $viewbix$sdk$track$Snowplow$getAppAssociationContexts$$() {
  var $contexts$$1$$ = [], $playerConfigs$$1$$ = window.getPlayerConfigurations();
  $goog$array$forEach$$(["bannerApps", "ctaApps", "midRollApps", "postRollApps", "preRollApps"], function($appAssociationProperty$$) {
    var $appAssociations_appAssociationsString$$ = $playerConfigs$$1$$[$appAssociationProperty$$];
    $goog$string$isEmptySafe$$($appAssociations_appAssociationsString$$) || ($appAssociations_appAssociationsString$$ = $goog$json$parse$$($appAssociations_appAssociationsString$$), $goog$array$forEach$$($appAssociations_appAssociationsString$$, function($appAssociation_context$$10$$) {
      $appAssociation_context$$10$$ = null != $appAssociation_context$$10$$ ? {schema:"iglu:com.viewbix/app_association_context/jsonschema/1-0-0", data:$viewbix$sdk$track$Snowplow$adaptContextToSchema$$($appAssociation_context$$10$$, ["playerAppInternalId", "appPlacement", "allowSkip", "prompt", "startTime"], ["allowSkip"], ["startTime"], [])} : null;
      if (null != $appAssociation_context$$10$$) {
        var $appPlacement_re$$inline_752$$;
        $appPlacement_re$$inline_752$$ = new RegExp($goog$string$regExpEscape$$("Apps"), "");
        $appPlacement_re$$inline_752$$ = $appAssociationProperty$$.replace($appPlacement_re$$inline_752$$, "");
        $goog$object$add$$($appAssociation_context$$10$$.data, "appPlacement", $appPlacement_re$$inline_752$$);
        $contexts$$1$$.push($appAssociation_context$$10$$);
      }
    }));
  });
  return $contexts$$1$$;
}
function $viewbix$sdk$track$Snowplow$getAppContext$$($opt_trackingData$$1$$) {
  return null != $opt_trackingData$$1$$ && null != $opt_trackingData$$1$$.$application$ ? {schema:"iglu:com.viewbix/app_context/jsonschema/1-0-0", data:{app:$opt_trackingData$$1$$.$application$.component, appId:$opt_trackingData$$1$$.$application$.id}} : null;
}
function $viewbix$sdk$track$Snowplow$getListContext$$($opt_trackingData$$2$$) {
  if (null != $opt_trackingData$$2$$ && null != $opt_trackingData$$2$$.$menu$ && null != $opt_trackingData$$2$$.$menu$.$apps$ && null != $opt_trackingData$$2$$.$application$) {
    var $selectedAppId$$ = $opt_trackingData$$2$$.$application$.id, $firstVisibleApp_menuElements$$ = $opt_trackingData$$2$$.$menu$.element.children[0].children, $lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$ = $firstVisibleApp_menuElements$$.length - ($opt_trackingData$$2$$.$menu$.$maxItems$ <= $opt_trackingData$$2$$.$menu$.$apps$.length ? 1 : 0), $appInMenu$$ = $goog$array$find$$($firstVisibleApp_menuElements$$, function($element$$138$$) {
      return $element$$138$$.getAttribute("data-app-id") == $selectedAppId$$;
    });
    null == $appInMenu$$ && null != $opt_trackingData$$2$$.$menu$.$overflowElement$ && 0 < $opt_trackingData$$2$$.$menu$.$overflowElement$.children.length && ($firstVisibleApp_menuElements$$ = $opt_trackingData$$2$$.$menu$.$overflowElement$.children[0].children, $appInMenu$$ = $goog$array$find$$($firstVisibleApp_menuElements$$, function($element$$139$$) {
      return $element$$139$$.getAttribute("data-app-id") == $selectedAppId$$;
    }), null != $appInMenu$$ && ($lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$ = $firstVisibleApp_menuElements$$.length));
    var $lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$ = $lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$ - 1, $firstVisibleAppId$$ = $firstVisibleApp_menuElements$$[0].getAttribute("data-app-id"), $lastVisibleAppId$$ = $firstVisibleApp_menuElements$$[$lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$].getAttribute("data-app-id"), $firstVisibleApp_menuElements$$ = $goog$array$find$$($opt_trackingData$$2$$.$menu$.$apps$, function($element$$140$$) {
      return $element$$140$$.id == $firstVisibleAppId$$;
    }), $lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$ = $goog$array$find$$($opt_trackingData$$2$$.$menu$.$apps$, function($element$$141$$) {
      return $element$$141$$.id == $lastVisibleAppId$$;
    });
    return{schema:"iglu:com.viewbix/list_context/jsonschema/1-0-0", data:{numItems:$opt_trackingData$$2$$.$menu$.$apps$.length, index:$opt_trackingData$$2$$.$application$.order - 1, firstVisibleItem:$firstVisibleApp_menuElements$$.order - 1, lastVisibleItem:$lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$.order - 1}};
  }
  return null;
}
function $viewbix$sdk$track$Snowplow$getAppConfigContext$$($opt_trackingData$$3$$) {
  return null != $opt_trackingData$$3$$ && null != $opt_trackingData$$3$$.$application$ ? {schema:"iglu:com.viewbix/app_config_context/jsonschema/1-0-0", data:$viewbix$sdk$track$Snowplow$adaptContextToSchema$$($opt_trackingData$$3$$.$application$, "address apiKey artist bool1 checkboxLabel commentsLabel coupon document emails followLink form from htmlForm icon image includeCheckbox includeComments instructions label listIds message navLink pageSize password query showInMenu submitText success symbol text1 text2 text3 thumbnailSize thumbnailWidth title tokenName units url username zoom".split(" "), 
  ["bool1", "includeCheckbox", "includeComments", "showInMenu"], ["pageSize", "thumbnailWidth", "zoom"], [])} : null;
}
function $viewbix$sdk$track$Snowplow$getPlayerConfigContext$$() {
  var $playerConfigurations$$ = getPlayerConfigurations();
  $goog$object$remove$$($playerConfigurations$$, "applications");
  return{schema:"iglu:com.viewbix/player_config_context/jsonschema/1-0-0", data:$viewbix$sdk$track$Snowplow$adaptContextToSchema$$($playerConfigurations$$, "affiliateRegex deleted locked videoEmailUrl tinyUrl detailsAppId defaultTwitterMessage facebookSharePageUrl playerId memberId videoUrl videoThumbnailUrl title ctaText ctaLink backgroundColor backButton|buttonBackgroundColor0 backButton|buttonBackgroundColor1 titleTextFormatColor ctaButtonBackgroundColor ctaButton|buttonBackgroundColor0 ctaButtonButtonTextFormatColor standardTextFormatFont cornerRadius customLogoUrl customLogoLink scaleLogoToTitleBar backgroundImage bottomLogoUrl bottomLogoLink showFacebookButton showTwitterButton showShareButton playVideoInApps backToVideoText showQualityButton useYouTubeHighQuality showViewbixBranding shareASaleAffiliateId videoLink keepControlsVisible fbConversionPixel".split(" "), 
  "deleted locked scaleLogoToTitleBar showFacebookButton showTwitterButton showShareButton playVideoInApps showQualityButton useYouTubeHighQuality showViewbixBranding keepControlsVisible".split(" "), "backgroundColor backButton|buttonBackgroundColor0 backButton|buttonBackgroundColor1 titleTextFormatColor ctaButtonBackgroundColor ctaButton|buttonBackgroundColor0 ctaButtonButtonTextFormatColor cornerRadius".split(" "), [])};
}
function $viewbix$sdk$track$Snowplow$getVideoContext$$() {
  var $JSCompiler_temp$$78_JSCompiler_temp_const$$79$$;
  if ($goog$string$isEmptySafe$$($viewbix$sdk$track$Snowplow$$.$getInstance$().$videoUrl$)) {
    $JSCompiler_temp$$78_JSCompiler_temp_const$$79$$ = null;
  } else {
    $JSCompiler_temp$$78_JSCompiler_temp_const$$79$$ = $viewbix$sdk$track$Snowplow$$.$getInstance$().$videoPlayer$.currentTime();
    var $JSCompiler_inline_result$$80_timeRanges$$inline_754$$;
    $JSCompiler_inline_result$$80_timeRanges$$inline_754$$ = $viewbix$sdk$track$Snowplow$$.$getInstance$().$videoPlayer$.played();
    $JSCompiler_inline_result$$80_timeRanges$$inline_754$$ = null == $JSCompiler_inline_result$$80_timeRanges$$inline_754$$ || 0 == $JSCompiler_inline_result$$80_timeRanges$$inline_754$$.length || 0 == $JSCompiler_inline_result$$80_timeRanges$$inline_754$$.start(0) && 0 == $JSCompiler_inline_result$$80_timeRanges$$inline_754$$.end(0) ? $viewbix$sdk$track$PlayerState$UNSTARTED$$ : $viewbix$sdk$track$Snowplow$$.$getInstance$().$videoPlayer$.paused() ? $viewbix$sdk$track$PlayerState$PAUSED$$ : $viewbix$sdk$track$PlayerState$PLAYING$$;
    $JSCompiler_temp$$78_JSCompiler_temp_const$$79$$ = {schema:"iglu:com.viewbix/video_context/jsonschema/1-0-0", data:{currentTime:$JSCompiler_temp$$78_JSCompiler_temp_const$$79$$, state:$JSCompiler_inline_result$$80_timeRanges$$inline_754$$, src:$viewbix$sdk$track$Snowplow$$.$getInstance$().$videoPlayer$.currentSrc(), volume:$viewbix$sdk$track$Snowplow$$.$getInstance$().$videoPlayer$.volume(), height:$viewbix$sdk$track$Snowplow$$.$getInstance$().$videoPlayer$.height()}};
  }
  return $JSCompiler_temp$$78_JSCompiler_temp_const$$79$$;
}
function $viewbix$sdk$track$Snowplow$getPlayerContext$$() {
  return{schema:"iglu:com.viewbix/player_context/jsonschema/2-0-0", data:{playerId:$viewbix$sdk$track$Snowplow$$.$getInstance$().$playerId$, memberId:$viewbix$sdk$track$Snowplow$$.$getInstance$().$memberId$, sessionId:$viewbix$sdk$track$Snowplow$$.$getInstance$().$sessionId$}};
}
function $viewbix$sdk$track$Snowplow$getAppInteractionData$$($opt_trackingData$$4$$) {
  if (null != $opt_trackingData$$4$$ && null != $opt_trackingData$$4$$.$appAction$) {
    return{action:$opt_trackingData$$4$$.$appAction$};
  }
  throw "No data provided for appInteractionData method";
}
function $viewbix$sdk$track$Snowplow$getInteractionData$$($data$$70_interactionData_trackingData$$) {
  $data$$70_interactionData_trackingData$$ = $data$$70_interactionData_trackingData$$.$interactionData$;
  $data$$70_interactionData_trackingData$$ = {id:$data$$70_interactionData_trackingData$$.id, control:$data$$70_interactionData_trackingData$$.control, location:$data$$70_interactionData_trackingData$$.location, targetIsApp:$data$$70_interactionData_trackingData$$.$targetIsApp$, icon:$data$$70_interactionData_trackingData$$.icon, target:$data$$70_interactionData_trackingData$$.target, label:$data$$70_interactionData_trackingData$$.label, scope:$data$$70_interactionData_trackingData$$.scope};
  null != $data$$70_interactionData_trackingData$$.target || $goog$object$remove$$($data$$70_interactionData_trackingData$$, "target");
  return $data$$70_interactionData_trackingData$$;
}
function $viewbix$sdk$track$Snowplow$getRollData$$($opt_trackingData$$5$$) {
  if (null != $opt_trackingData$$5$$ && null != $opt_trackingData$$5$$.$rollData$) {
    return{type:$opt_trackingData$$5$$.$rollData$.type, allowSkip:$opt_trackingData$$5$$.$rollData$.$allowSkip$, action:$opt_trackingData$$5$$.$rollData$.action};
  }
  throw "No data provided for rollData method";
}
function $viewbix$sdk$track$Snowplow$getVideoProgessData$$($trackEventType$$) {
  var $percent$$1$$ = NaN;
  switch($trackEventType$$) {
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
  return{percent:$percent$$1$$};
}
function $viewbix$sdk$track$Snowplow$getImpressionData$$() {
  var $referrer$$1$$ = document.referrer, $query$$16$$ = new $goog$Uri$QueryData$$(document.location.search.substring(1));
  $query$$16$$.$containsKey$($viewbix$sdk$track$TrackingParam$HTTP_REFERRER$$) && ($referrer$$1$$ = $query$$16$$.get($viewbix$sdk$track$TrackingParam$HTTP_REFERRER$$), window.spvb("setReferrerUrl", $referrer$$1$$));
  return{autoplay:-1 != window.location.href.indexOf("&ap=true"), layout:window.VBX_LAYOUT_NAME, query:window.location.search, cookies:document.cookie, headers:[$referrer$$1$$]};
}
function $viewbix$sdk$track$Snowplow$buildContexts$$($eventTrackingInfo$$, $opt_trackingData$$6$$) {
  var $contexts$$2$$ = [];
  $goog$array$forEach$$($eventTrackingInfo$$.contexts, function($contextFunction_contextOrContexts$$) {
    $contextFunction_contextOrContexts$$ = $contextFunction_contextOrContexts$$($opt_trackingData$$6$$);
    $goog$isArray$$($contextFunction_contextOrContexts$$) ? $goog$array$forEach$$($contextFunction_contextOrContexts$$, function($context$$11$$) {
      null != $context$$11$$ && $contexts$$2$$.push($context$$11$$);
    }) : null != $contextFunction_contextOrContexts$$ && $contexts$$2$$.push($contextFunction_contextOrContexts$$);
  });
  return $contexts$$2$$;
}
function $JSCompiler_StaticMethods_setUpInteractionEvent$$($JSCompiler_StaticMethods_setUpInteractionEvent$self$$, $trackEventType$$1$$, $contexts$$3$$) {
  $goog$object$add$$($JSCompiler_StaticMethods_setUpInteractionEvent$self$$.$eventTrackingMap_$, $trackEventType$$1$$, {schema:"iglu:com.viewbix/interaction/jsonschema/1-0-0", contexts:$contexts$$3$$, data:$viewbix$sdk$track$Snowplow$getInteractionData$$});
}
function $JSCompiler_StaticMethods_setUpAppInteractionEvent$$($JSCompiler_StaticMethods_setUpAppInteractionEvent$self$$, $trackEventType$$2$$, $contexts$$4$$) {
  $goog$object$add$$($JSCompiler_StaticMethods_setUpAppInteractionEvent$self$$.$eventTrackingMap_$, $trackEventType$$2$$, {schema:"iglu:com.viewbix/app_interaction/jsonschema/1-0-0", contexts:$contexts$$4$$, data:$viewbix$sdk$track$Snowplow$getAppInteractionData$$});
}
function $JSCompiler_StaticMethods_setUpVideoProgressEvent$$($JSCompiler_StaticMethods_setUpVideoProgressEvent$self$$, $trackEventType$$3$$) {
  $goog$object$add$$($JSCompiler_StaticMethods_setUpVideoProgressEvent$self$$.$eventTrackingMap_$, $trackEventType$$3$$, {schema:"iglu:com.viewbix/video_progress/jsonschema/1-0-0", contexts:[$viewbix$sdk$track$Snowplow$getVideoContext$$, $viewbix$sdk$track$Snowplow$getPlayerContext$$], data:$goog$partial$$($viewbix$sdk$track$Snowplow$getVideoProgessData$$, $trackEventType$$3$$)});
}
function $JSCompiler_StaticMethods_setUpRollEvent$$($JSCompiler_StaticMethods_setUpRollEvent$self$$, $trackEventType$$4$$) {
  $goog$object$add$$($JSCompiler_StaticMethods_setUpRollEvent$self$$.$eventTrackingMap_$, $trackEventType$$4$$, {schema:"iglu:com.viewbix/roll/jsonschema/1-0-0", contexts:[$viewbix$sdk$track$Snowplow$getVideoContext$$, $viewbix$sdk$track$Snowplow$getPlayerContext$$, $viewbix$sdk$track$Snowplow$getAppContext$$], data:$viewbix$sdk$track$Snowplow$getRollData$$});
}
function $viewbix$sdk$track$Snowplow$track$$($eventType$$10$$, $opt_trackingData$$9$$) {
  var $eventTrackingInfo$$2$$ = $viewbix$sdk$track$Snowplow$$.$getInstance$().$eventTrackingMap_$[$eventType$$10$$];
  null != $eventTrackingInfo$$2$$ && window.spvb("trackUnstructEvent", {schema:$eventTrackingInfo$$2$$.schema, data:$eventTrackingInfo$$2$$.data($opt_trackingData$$9$$)}, $viewbix$sdk$track$Snowplow$buildContexts$$($eventTrackingInfo$$2$$, $opt_trackingData$$9$$));
}
;function $viewbix$sdk$track$TrackingData$$($interactionData$$1$$, $application$$1$$, $menu$$, $appAction$$, $rollData$$) {
  this.$interactionData$ = $interactionData$$1$$;
  this.$application$ = $application$$1$$;
  this.$menu$ = $menu$$;
  this.$appAction$ = $appAction$$;
  this.$rollData$ = $rollData$$;
}
$viewbix$sdk$track$TrackingData$$.prototype.$toStringLiteralObject$ = function $$viewbix$sdk$track$TrackingData$$$$$toStringLiteralObject$$() {
  return{interactionData:this.$interactionData$.$toStringLiteralObject$(), application:this.$application$, menu:this.$menu$, appAction:this.$appAction$, rollData:this.$rollData$};
};
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
$JSCompiler_prototypeAlias$$.$nodes$ = function $$JSCompiler_prototypeAlias$$$$nodes$$($opt_index$$5$$) {
  return $goog$isNumber$$($opt_index$$5$$) ? null != this.$nodeList_$ && 0 < this.$nodeList_$.length && this.$nodeList_$.length > $opt_index$$5$$ ? this.$nodeList_$[$opt_index$$5$$] : null : this.$nodeList_$;
};
$JSCompiler_prototypeAlias$$.first = function $$JSCompiler_prototypeAlias$$$first$() {
  return this.$nodes$(0);
};
$JSCompiler_prototypeAlias$$.$getSize$ = function $$JSCompiler_prototypeAlias$$$$getSize$$() {
  var $result$$36$$;
  1 == this.$nodeList_$.length ? $result$$36$$ = $goog$style$evaluateWithTemporaryDisplay_$$(this.$nodeList_$[0]) : ($result$$36$$ = [], $goog$array$forEach$$(this.$nodeList_$, function($node$$44$$) {
    $result$$36$$.push($goog$style$evaluateWithTemporaryDisplay_$$($node$$44$$));
  }));
  return $result$$36$$;
};
$JSCompiler_prototypeAlias$$.$getAutoSize$ = function $$JSCompiler_prototypeAlias$$$$getAutoSize$$() {
  var $result$$37$$;
  1 == this.$nodeList_$.length ? $result$$37$$ = $viewbix$sdk$helper$ElementHelper$getAutoSize$$(this.$nodeList_$[0]) : ($result$$37$$ = [], $goog$array$forEach$$(this.$nodeList_$, function($node$$45$$) {
    $result$$37$$.push($viewbix$sdk$helper$ElementHelper$getAutoSize$$($node$$45$$));
  }));
  return $result$$37$$;
};
$JSCompiler_prototypeAlias$$.$getPageOffset$ = function $$JSCompiler_prototypeAlias$$$$getPageOffset$$() {
  var $result$$38$$;
  1 == this.$nodeList_$.length ? $result$$38$$ = $goog$style$getPageOffset$$(this.$nodeList_$[0]) : ($result$$38$$ = [], $goog$array$forEach$$(this.$nodeList_$, function($node$$46$$) {
    $result$$38$$.push($goog$style$getPageOffset$$($node$$46$$));
  }));
  return $result$$38$$;
};
$JSCompiler_prototypeAlias$$.$getPageOffsetLeft$ = function $$JSCompiler_prototypeAlias$$$$getPageOffsetLeft$$() {
  var $result$$39$$;
  1 == this.$nodeList_$.length ? $result$$39$$ = $goog$style$getPageOffset$$(this.$nodeList_$[0]).x : ($result$$39$$ = [], $goog$array$forEach$$(this.$nodeList_$, function($node$$47$$) {
    $result$$39$$.push($goog$style$getPageOffset$$($node$$47$$).x);
  }));
  return $result$$39$$;
};
$JSCompiler_prototypeAlias$$.$getPageOffsetTop$ = function $$JSCompiler_prototypeAlias$$$$getPageOffsetTop$$() {
  var $result$$40$$;
  1 == this.$nodeList_$.length ? $result$$40$$ = $goog$style$getPageOffset$$(this.$nodeList_$[0]).y : ($result$$40$$ = [], $goog$array$forEach$$(this.$nodeList_$, function($node$$48$$) {
    $result$$40$$.push($goog$style$getPageOffset$$($node$$48$$).y);
  }));
  return $result$$40$$;
};
var $viewbix$sdk$track$TrackingParam$HTTP_REFERRER$$ = "r", $viewbix$sdk$track$TrackEventType$VSTART_UNIQUE$$ = "VSTART_UNIQUE", $viewbix$sdk$track$TrackEventType$VTHRESH_25$$ = "VTHRESH_25", $viewbix$sdk$track$TrackEventType$VTHRESH_50$$ = "VTHRESH_50", $viewbix$sdk$track$TrackEventType$VTHRESH_75$$ = "VTHRESH_75", $viewbix$sdk$track$TrackEventType$VTHRESH_100$$ = "VTHRESH_100", $viewbix$sdk$track$TrackEventType$USER_CLICK_CALL_TO_ACTION$$ = "USER_CLICK_CALL_TO_ACTION", $viewbix$sdk$track$TrackEventType$USER_CLICK_VIDEO_CALL_TO_ACTION$$ = 
"USER_CLICK_VIDEO_CALL_TO_ACTION", $viewbix$sdk$track$TrackEventType$USER_CLICK_MENU_ITEM$$ = "USER_CLICK_MENU_ITEM", $viewbix$sdk$track$TrackEventType$SYSTEM_SHOW_PREROLL_APP$$ = "SYSTEM_SHOW_PREROLL_APP", $viewbix$sdk$track$TrackEventType$SYSTEM_SHOW_MIDROLL_APP$$ = "SYSTEM_SHOW_MIDROLL_APP", $viewbix$sdk$track$TrackEventType$SYSTEM_SHOW_POSTROLL_APP$$ = "SYSTEM_SHOW_POSTROLL_APP", $viewbix$sdk$track$TrackEventType$USER_APP_COMPLETE$$ = "USER_APP_COMPLETE", $viewbix$sdk$track$TrackEventType$USER_ROLLAPP_COMPLETE$$ = 
"USER_ROLLAPP_COMPLETE", $viewbix$sdk$track$TrackEventType$USER_APP_SKIP$$ = "USER_APP_SKIP", $viewbix$sdk$track$TrackEventType$USER_APP_SELECT$$ = "USER_APP_SELECT", $viewbix$sdk$track$TrackEventType$USER_APP_DESELECT$$ = "USER_APP_DESELECT", $viewbix$sdk$track$TrackEventType$USER_APP_LOAD$$ = "USER_APP_LOAD", $viewbix$sdk$track$TrackEventType$USER_APP_RENDER$$ = "USER_APP_RENDER", $viewbix$sdk$track$TrackEventType$USER_CLICK_LOGO$$ = "USER_CLICK_LOGO", $viewbix$sdk$track$TrackEventType$USER_CLICK_SLIDER_IMAGE$$ = 
"USER_CLICK_SLIDER_IMAGE", $viewbix$sdk$track$TrackEventType$USER_NAVIGATE_TO_PAGE$$ = "USER_NAVIGATE_TO_PAGE", $viewbix$sdk$track$TrackEventType$IMPRESSION$$ = "IMPRESSION", $viewbix$sdk$track$PlayerState$UNSTARTED$$ = "unstarted", $viewbix$sdk$track$PlayerState$PLAYING$$ = "playing", $viewbix$sdk$track$PlayerState$PAUSED$$ = "paused";
function $viewbix$sdk$helper$LinkHelper$linkify$$($text$$26$$) {
  if (null == $text$$26$$) {
    return "";
  }
  $text$$26$$ = $text$$26$$.replace(/(\<a\s+href\s*=\s*["']{1}|\<img.+?src\s*=\s*["']{1}|\<iframe.+?src\s*=\s*["']{1}(?:\/\/)?|data-href\s*=\s*["']{1})?\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u202A\u202C]))/ig, function($$0$$, $$1$$, $$2$$) {
    return null == $$1$$ || /^[\s\xa0]*$/.test($$1$$) ? "<a onclick='window.open(\"" + $$2$$ + '", "_blank");return false;\'>' + $$2$$ + "</a>" : $goog$string$caseInsensitiveStartsWith$$($$1$$, "<img") || $goog$string$caseInsensitiveStartsWith$$($$1$$, "<iframe") || $goog$string$caseInsensitiveStartsWith$$($$1$$, "data-href") ? $$0$$ : "<a onclick='window.open(\"" + $$2$$ + '", "_blank");return false;\'';
  });
  $text$$26$$ = $text$$26$$.replace(/\"www/g, '"http://www');
  return $goog$string$trim$$($text$$26$$);
}
function $viewbix$sdk$helper$LinkHelper$changeHrefToWindowOpen$$($rootNode$$1$$) {
  if ("link" != $rootNode$$1$$.tagName.toLowerCase()) {
    var $originalOnClick$$ = $rootNode$$1$$.onclick;
    if (!$goog$string$isEmptySafe$$($rootNode$$1$$.getAttribute("href"))) {
      var $href$$3$$ = $rootNode$$1$$.getAttribute("href"), $target$$61$$ = $rootNode$$1$$.getAttribute("target");
      $goog$string$isEmptySafe$$($target$$61$$) && ($target$$61$$ = "_blank");
      var $trackEvent$$1$$ = "", $trackData$$1$$ = "", $children$$2_track$$2_trackParams$$ = $rootNode$$1$$.getAttribute("data-vbx-track");
      $goog$string$isEmptySafe$$($children$$2_track$$2_trackParams$$) || ($children$$2_track$$2_trackParams$$ = $children$$2_track$$2_trackParams$$.split(","), 0 < $children$$2_track$$2_trackParams$$.length && ($trackEvent$$1$$ = $children$$2_track$$2_trackParams$$[0]), 1 < $children$$2_track$$2_trackParams$$.length && ($trackData$$1$$ = $children$$2_track$$2_trackParams$$[1]));
      $goog$style$setStyle$$($rootNode$$1$$, "cursor", "pointer");
      $rootNode$$1$$.onclick = null != $originalOnClick$$ ? function() {
        $originalOnClick$$.apply($rootNode$$1$$) && ($goog$string$isEmptySafe$$($trackEvent$$1$$) || $viewbix$sdk$track$Snowplow$track$$($trackEvent$$1$$, void 0), window.open($href$$3$$, $target$$61$$));
        return!1;
      } : function() {
        if (!$goog$string$isEmptySafe$$($trackEvent$$1$$)) {
          var $interactionData$$inline_797_trackingData$$inline_796$$ = null;
          switch($trackEvent$$1$$) {
            case "USER_CLICK_LOGO":
              $interactionData$$inline_797_trackingData$$inline_796$$ = new $viewbix$sdk$track$InteractionData$$($viewbix$sdk$track$InteractionData$Id$$[$trackData$$1$$], "button", "top left", !1, $href$$3$$, null, null, "player");
              $interactionData$$inline_797_trackingData$$inline_796$$ = new $viewbix$sdk$track$TrackingData$$($interactionData$$inline_797_trackingData$$inline_796$$, null, null, null, null);
              break;
            case "USER_CLICK_SLIDER_IMAGE":
              var $interactionData$$inline_797_trackingData$$inline_796$$ = new $viewbix$sdk$track$InteractionData$$("appstrigger", "button", "left", !0, null, null, null, "player"), $applicationObject$$inline_798$$ = null;
              if (null != window.VBX) {
                var $apps$$inline_802_getPlayerConfig$$inline_801_layout$$inline_800_vbx$$inline_799$$ = window.VBX;
                null != $apps$$inline_802_getPlayerConfig$$inline_801_layout$$inline_800_vbx$$inline_799$$ && null != $apps$$inline_802_getPlayerConfig$$inline_801_layout$$inline_800_vbx$$inline_799$$.Layout && ($apps$$inline_802_getPlayerConfig$$inline_801_layout$$inline_800_vbx$$inline_799$$ = $apps$$inline_802_getPlayerConfig$$inline_801_layout$$inline_800_vbx$$inline_799$$.Layout, null != $apps$$inline_802_getPlayerConfig$$inline_801_layout$$inline_800_vbx$$inline_799$$ && null != $apps$$inline_802_getPlayerConfig$$inline_801_layout$$inline_800_vbx$$inline_799$$.getPlayerConfig && 
                ($apps$$inline_802_getPlayerConfig$$inline_801_layout$$inline_800_vbx$$inline_799$$ = $apps$$inline_802_getPlayerConfig$$inline_801_layout$$inline_800_vbx$$inline_799$$.getPlayerConfig, null != $apps$$inline_802_getPlayerConfig$$inline_801_layout$$inline_800_vbx$$inline_799$$ && ($apps$$inline_802_getPlayerConfig$$inline_801_layout$$inline_800_vbx$$inline_799$$ = $apps$$inline_802_getPlayerConfig$$inline_801_layout$$inline_800_vbx$$inline_799$$("applications"), null != $apps$$inline_802_getPlayerConfig$$inline_801_layout$$inline_800_vbx$$inline_799$$ && 
                0 != $apps$$inline_802_getPlayerConfig$$inline_801_layout$$inline_800_vbx$$inline_799$$.length && ($applicationObject$$inline_798$$ = $apps$$inline_802_getPlayerConfig$$inline_801_layout$$inline_800_vbx$$inline_799$$[0]))));
              }
              $interactionData$$inline_797_trackingData$$inline_796$$ = new $viewbix$sdk$track$TrackingData$$($interactionData$$inline_797_trackingData$$inline_796$$, $applicationObject$$inline_798$$, null, null, null);
          }
          $viewbix$sdk$track$Snowplow$track$$($trackEvent$$1$$, $interactionData$$inline_797_trackingData$$inline_796$$);
        }
        window.open($href$$3$$, $target$$61$$);
        return!1;
      };
    }
    for (var $children$$2_track$$2_trackParams$$ = $rootNode$$1$$.children, $i$$173$$ = 0;$i$$173$$ < $children$$2_track$$2_trackParams$$.length;$i$$173$$++) {
      $viewbix$sdk$helper$LinkHelper$changeHrefToWindowOpen$$($children$$2_track$$2_trackParams$$[$i$$173$$]);
    }
  }
}
;function $viewbix$sdk$Core$$() {
  $goog$events$EventTarget$$.call(this);
}
$goog$inherits$$($viewbix$sdk$Core$$, $goog$events$EventTarget$$);
var $viewbix$sdk$Core$detectedFeatures$$ = null;
function $JSCompiler_StaticMethods_bindDataAttribute$$($JSCompiler_StaticMethods_bindDataAttribute$self$$, $element$$143$$, $attribute$$) {
  var $configDefinition$$2$$ = $attribute$$.value.split("/"), $configDefinition$$2$$ = $configDefinition$$2$$[$configDefinition$$2$$.length - 1], $rawTarget$$ = $attribute$$.name.substr(8);
  $viewbix$sdk$helper$BindHelper$bindConfigDefinition$$($configDefinition$$2$$, function($configValue$$1_hex$$4_removeString$$) {
    var $addString_target$$62_toAdd$$ = $rawTarget$$;
    if ($goog$string$isEmptySafe$$($addString_target$$62_toAdd$$)) {
      $element$$143$$.innerHTML = $configValue$$1_hex$$4_removeString$$;
    } else {
      if ($goog$string$caseInsensitiveStartsWith$$($addString_target$$62_toAdd$$, "-style-")) {
        $addString_target$$62_toAdd$$ = $addString_target$$62_toAdd$$.substr(7), /color/i.test($addString_target$$62_toAdd$$) ? ($configValue$$1_hex$$4_removeString$$ = $viewbix$sdk$helper$ColorHelper$colorToString$$($configValue$$1_hex$$4_removeString$$), $goog$style$setStyle$$($element$$143$$, $addString_target$$62_toAdd$$, $configValue$$1_hex$$4_removeString$$)) : "background-image" == $addString_target$$62_toAdd$$ ? $goog$style$setStyle$$($element$$143$$, $addString_target$$62_toAdd$$, "url(" + 
        $configValue$$1_hex$$4_removeString$$ + ")") : $goog$style$setStyle$$($element$$143$$, $addString_target$$62_toAdd$$, $configValue$$1_hex$$4_removeString$$);
      } else {
        if ("-track" != $addString_target$$62_toAdd$$) {
          if ($goog$string$caseInsensitiveStartsWith$$($addString_target$$62_toAdd$$, "-") && ($addString_target$$62_toAdd$$ = $addString_target$$62_toAdd$$.substr(1)), "class" == $addString_target$$62_toAdd$$) {
            var $addString_target$$62_toAdd$$ = [], $toRemove$$ = [];
            $goog$isObject$$($configValue$$1_hex$$4_removeString$$) ? ($addString_target$$62_toAdd$$ = $goog$string$trim$$($goog$object$get$$($configValue$$1_hex$$4_removeString$$, "add")), $configValue$$1_hex$$4_removeString$$ = $goog$string$trim$$($goog$object$get$$($configValue$$1_hex$$4_removeString$$, "remove")), $addString_target$$62_toAdd$$ = $viewbix$sdk$helper$StringHelper$splitAndTrim$$($addString_target$$62_toAdd$$, " "), $toRemove$$ = $viewbix$sdk$helper$StringHelper$splitAndTrim$$($configValue$$1_hex$$4_removeString$$, 
            " ")) : $goog$isString$$($configValue$$1_hex$$4_removeString$$) && $goog$array$insert$$($addString_target$$62_toAdd$$, $configValue$$1_hex$$4_removeString$$);
            $element$$143$$ == document.querySelector("body") ? $viewbix$sdk$helper$StateHelper$removeAddStateClasses$$($toRemove$$, $addString_target$$62_toAdd$$) : ($goog$dom$classlist$removeAll$$($element$$143$$, $toRemove$$), $goog$dom$classlist$addAll$$($element$$143$$, $addString_target$$62_toAdd$$));
          } else {
            $element$$143$$.setAttribute($addString_target$$62_toAdd$$, $configValue$$1_hex$$4_removeString$$);
          }
        }
      }
    }
  }, $JSCompiler_StaticMethods_bindDataAttribute$self$$);
}
$viewbix$sdk$Core$$.prototype.$bindElement$ = function $$viewbix$sdk$Core$$$$$bindElement$$($element$$144$$) {
  if ($goog$dom$isElement$$($element$$144$$) && $goog$array$some$$($element$$144$$.attributes, function($a$$42$$) {
    return $goog$string$caseInsensitiveStartsWith$$($a$$42$$.name, "data-vbx");
  })) {
    var $attributesObject$$ = $goog$array$toObject$$($element$$144$$.attributes, function($attr$$8$$) {
      return $attr$$8$$.name;
    }, this);
    $goog$object$forEach$$($attributesObject$$, function($attr$$9$$, $name$$99$$) {
      $goog$string$caseInsensitiveStartsWith$$($name$$99$$, "data-vbx") && $JSCompiler_StaticMethods_bindDataAttribute$$(this, $element$$144$$, $attr$$9$$);
    }, this);
  }
  return!1;
};
function $JSCompiler_StaticMethods_bindDataAttributes$$($JSCompiler_StaticMethods_bindDataAttributes$self$$, $opt_rootNode$$) {
  null == $opt_rootNode$$ && ($opt_rootNode$$ = document.body);
  $JSCompiler_StaticMethods_bindDataAttributes$self$$.$bindElement$($opt_rootNode$$);
  var $p$$inline_810$$ = $goog$bind$$($JSCompiler_StaticMethods_bindDataAttributes$self$$.$bindElement$, $JSCompiler_StaticMethods_bindDataAttributes$self$$);
  $goog$dom$findNodes_$$($opt_rootNode$$, $p$$inline_810$$, [], !1);
}
function $viewbix$sdk$Core$isTouch$$() {
  var $isTablet$$ = $goog$labs$userAgent$device$isTablet$$();
  return!$goog$labs$userAgent$device$isTablet$$() && ($goog$labs$userAgent$util$matchUserAgent$$("iPod") || $goog$labs$userAgent$util$matchUserAgent$$("iPhone") || $goog$labs$userAgent$util$matchUserAgent$$("Android")) || $isTablet$$;
}
var $viewbix$sdk$Core$WINDOW_OPEN_TRACK_FUNCTION$$ = null, $viewbix$sdk$Core$PAUSE_ALL_MEDIA_FUNCTION$$ = null, $viewbix$sdk$Core$windowOpen$$ = window.open;
window.open = function $window$open$($opt_url$$3_queryParams$$inline_815$$, $opt_name$$1$$, $opt_features$$, $opt_bool$$) {
  null != $viewbix$sdk$Core$PAUSE_ALL_MEDIA_FUNCTION$$ && $viewbix$sdk$Core$PAUSE_ALL_MEDIA_FUNCTION$$();
  a: {
    var $qp$$inline_828_url$$inline_813$$ = $opt_url$$3_queryParams$$inline_815$$, $configFunction$$inline_814_linkParts$$inline_827_namedGroups$$inline_821_reString0$$inline_818$$ = null;
    try {
      null != getPlayerConfigurations && $goog$isFunction$$(getPlayerConfigurations) && ($configFunction$$inline_814_linkParts$$inline_827_namedGroups$$inline_821_reString0$$inline_818$$ = getPlayerConfigurations);
    } catch ($e$$inline_836$$) {
    }
    try {
      null != getAppConfigs && $goog$isFunction$$(getAppConfigs) && ($configFunction$$inline_814_linkParts$$inline_827_namedGroups$$inline_821_reString0$$inline_818$$ = getAppConfigs);
    } catch ($e$$inline_837$$) {
    }
    if ($goog$isFunction$$($configFunction$$inline_814_linkParts$$inline_827_namedGroups$$inline_821_reString0$$inline_818$$)) {
      $opt_url$$3_queryParams$$inline_815$$ = $viewbix$sdk$helper$UriHelper$getParameters$$();
      for (var $k$$inline_831_linkQuery$$inline_829_regexArray$$inline_816$$ = $configFunction$$inline_814_linkParts$$inline_827_namedGroups$$inline_821_reString0$$inline_818$$().affiliateRegex, $currentValue$$inline_1252_i$$inline_817_linkQueryParams$$inline_830$$ = 0;$currentValue$$inline_1252_i$$inline_817_linkQueryParams$$inline_830$$ < $k$$inline_831_linkQuery$$inline_829_regexArray$$inline_816$$.length;$currentValue$$inline_1252_i$$inline_817_linkQueryParams$$inline_830$$++) {
        for (var $configFunction$$inline_814_linkParts$$inline_827_namedGroups$$inline_821_reString0$$inline_818$$ = $k$$inline_831_linkQuery$$inline_829_regexArray$$inline_816$$[$currentValue$$inline_1252_i$$inline_817_linkQueryParams$$inline_830$$], $configFunction$$inline_814_linkParts$$inline_827_namedGroups$$inline_821_reString0$$inline_818$$ = $configFunction$$inline_814_linkParts$$inline_827_namedGroups$$inline_821_reString0$$inline_818$$.replace(/\\\|/g, "&pipe;"), $index$$inline_1253_linkQueryParamParts$$inline_832_reArray$$inline_819$$ = 
        $configFunction$$inline_814_linkParts$$inline_827_namedGroups$$inline_821_reString0$$inline_818$$.split("|"), $j$$inline_820_linkQueryParamName$$inline_833$$ = 0;$j$$inline_820_linkQueryParamName$$inline_833$$ < $index$$inline_1253_linkQueryParamParts$$inline_832_reArray$$inline_819$$.length;$j$$inline_820_linkQueryParamName$$inline_833$$++) {
          var $configFunction$$inline_814_linkParts$$inline_827_namedGroups$$inline_821_reString0$$inline_818$$ = {}, $m$$inline_826_reString$$inline_822$$ = $index$$inline_1253_linkQueryParamParts$$inline_832_reArray$$inline_819$$[$j$$inline_820_linkQueryParamName$$inline_833$$], $m$$inline_826_reString$$inline_822$$ = $m$$inline_826_reString$$inline_822$$.replace("&pipe;", "\\|"), $reGroupFinder$$inline_823$$ = /\?P<([^>]+)>/g, $groupNumber$$inline_824$$ = 0, $groupMatch$$inline_825$$;
          do {
            $groupMatch$$inline_825$$ = $reGroupFinder$$inline_823$$.exec($m$$inline_826_reString$$inline_822$$), null != $groupMatch$$inline_825$$ && ($groupNumber$$inline_824$$++, $configFunction$$inline_814_linkParts$$inline_827_namedGroups$$inline_821_reString0$$inline_818$$[$groupNumber$$inline_824$$] = $groupMatch$$inline_825$$[1]);
          } while (null != $groupMatch$$inline_825$$);
          $reGroupFinder$$inline_823$$.lastIndex = 0;
          $m$$inline_826_reString$$inline_822$$ = $m$$inline_826_reString$$inline_822$$.replace($reGroupFinder$$inline_823$$, "");
          $m$$inline_826_reString$$inline_822$$ = (new RegExp($m$$inline_826_reString$$inline_822$$)).exec($qp$$inline_828_url$$inline_813$$);
          if (null != $m$$inline_826_reString$$inline_822$$) {
            if ("query" == $configFunction$$inline_814_linkParts$$inline_827_namedGroups$$inline_821_reString0$$inline_818$$[1]) {
              if ($configFunction$$inline_814_linkParts$$inline_827_namedGroups$$inline_821_reString0$$inline_818$$ = $qp$$inline_828_url$$inline_813$$.split("?"), 1 < $configFunction$$inline_814_linkParts$$inline_827_namedGroups$$inline_821_reString0$$inline_818$$.length) {
                $qp$$inline_828_url$$inline_813$$ = {};
                $k$$inline_831_linkQuery$$inline_829_regexArray$$inline_816$$ = $configFunction$$inline_814_linkParts$$inline_827_namedGroups$$inline_821_reString0$$inline_818$$[1];
                $currentValue$$inline_1252_i$$inline_817_linkQueryParams$$inline_830$$ = $k$$inline_831_linkQuery$$inline_829_regexArray$$inline_816$$.split("&");
                for ($k$$inline_831_linkQuery$$inline_829_regexArray$$inline_816$$ = 0;$k$$inline_831_linkQuery$$inline_829_regexArray$$inline_816$$ < $currentValue$$inline_1252_i$$inline_817_linkQueryParams$$inline_830$$.length;$k$$inline_831_linkQuery$$inline_829_regexArray$$inline_816$$++) {
                  $index$$inline_1253_linkQueryParamParts$$inline_832_reArray$$inline_819$$ = $currentValue$$inline_1252_i$$inline_817_linkQueryParams$$inline_830$$[$k$$inline_831_linkQuery$$inline_829_regexArray$$inline_816$$].split("="), $j$$inline_820_linkQueryParamName$$inline_833$$ = $index$$inline_1253_linkQueryParamParts$$inline_832_reArray$$inline_819$$[0], $qp$$inline_828_url$$inline_813$$[$j$$inline_820_linkQueryParamName$$inline_833$$] = $opt_url$$3_queryParams$$inline_815$$.hasOwnProperty($j$$inline_820_linkQueryParamName$$inline_833$$) ? 
                  $opt_url$$3_queryParams$$inline_815$$[$j$$inline_820_linkQueryParamName$$inline_833$$] : 1 < $index$$inline_1253_linkQueryParamParts$$inline_832_reArray$$inline_819$$.length ? null : $index$$inline_1253_linkQueryParamParts$$inline_832_reArray$$inline_819$$[1];
                }
                var $k$$inline_831_linkQuery$$inline_829_regexArray$$inline_816$$ = "", $key$$inline_834_queryParamValue$$inline_835$$;
                for ($key$$inline_834_queryParamValue$$inline_835$$ in $qp$$inline_828_url$$inline_813$$) {
                  0 < $k$$inline_831_linkQuery$$inline_829_regexArray$$inline_816$$.length && ($k$$inline_831_linkQuery$$inline_829_regexArray$$inline_816$$ += "&"), $k$$inline_831_linkQuery$$inline_829_regexArray$$inline_816$$ += $key$$inline_834_queryParamValue$$inline_835$$ + "=" + $qp$$inline_828_url$$inline_813$$[$key$$inline_834_queryParamValue$$inline_835$$];
                }
                $qp$$inline_828_url$$inline_813$$ = $configFunction$$inline_814_linkParts$$inline_827_namedGroups$$inline_821_reString0$$inline_818$$[0] + "?" + $k$$inline_831_linkQuery$$inline_829_regexArray$$inline_816$$;
              }
            } else {
              for ($k$$inline_831_linkQuery$$inline_829_regexArray$$inline_816$$ = 1;$k$$inline_831_linkQuery$$inline_829_regexArray$$inline_816$$ < $m$$inline_826_reString$$inline_822$$.length;$k$$inline_831_linkQuery$$inline_829_regexArray$$inline_816$$++) {
                $key$$inline_834_queryParamValue$$inline_835$$ = $opt_url$$3_queryParams$$inline_815$$[$configFunction$$inline_814_linkParts$$inline_827_namedGroups$$inline_821_reString0$$inline_818$$[$k$$inline_831_linkQuery$$inline_829_regexArray$$inline_816$$]], null != $key$$inline_834_queryParamValue$$inline_835$$ && ($currentValue$$inline_1252_i$$inline_817_linkQueryParams$$inline_830$$ = $m$$inline_826_reString$$inline_822$$[$k$$inline_831_linkQuery$$inline_829_regexArray$$inline_816$$], $index$$inline_1253_linkQueryParamParts$$inline_832_reArray$$inline_819$$ = 
                $qp$$inline_828_url$$inline_813$$.indexOf($currentValue$$inline_1252_i$$inline_817_linkQueryParams$$inline_830$$, $m$$inline_826_reString$$inline_822$$.index), $qp$$inline_828_url$$inline_813$$ = $qp$$inline_828_url$$inline_813$$.substring(0, $index$$inline_1253_linkQueryParamParts$$inline_832_reArray$$inline_819$$) + $key$$inline_834_queryParamValue$$inline_835$$ + $qp$$inline_828_url$$inline_813$$.substr($index$$inline_1253_linkQueryParamParts$$inline_832_reArray$$inline_819$$ + 
                $currentValue$$inline_1252_i$$inline_817_linkQueryParams$$inline_830$$.length));
              }
            }
            $opt_url$$3_queryParams$$inline_815$$ = $qp$$inline_828_url$$inline_813$$;
            break a;
          }
        }
      }
    }
    $opt_url$$3_queryParams$$inline_815$$ = $qp$$inline_828_url$$inline_813$$;
  }
  null != $viewbix$sdk$Core$WINDOW_OPEN_TRACK_FUNCTION$$ && $goog$isFunction$$($viewbix$sdk$Core$WINDOW_OPEN_TRACK_FUNCTION$$) && $viewbix$sdk$Core$WINDOW_OPEN_TRACK_FUNCTION$$($opt_url$$3_queryParams$$inline_815$$);
  return $viewbix$sdk$Core$windowOpen$$.call(window, $opt_url$$3_queryParams$$inline_815$$, $opt_name$$1$$, $opt_features$$, $opt_bool$$);
};
$goog$exportPath_$$("VBX.select", function($target$$63$$) {
  return new $viewbix$sdk$VbxNodeList$$($target$$63$$);
}, void 0);
$goog$exportPath_$$("VBX.contentLoaded", $viewbix$sdk$helper$WindowHelper$contentLoaded$$, void 0);
$goog$exportPath_$$("VBX.listen", function($element$$125$$, $type$$133$$, $listener$$77$$, $opt_capt$$13$$, $opt_handler$$14$$) {
  return $goog$isString$$($type$$133$$) && "resize" == $type$$133$$ && $element$$125$$ != window ? (window.$addResizeListener$ || $viewbix$sdk$helper$EventHelper$setupResizeListening$$(), window.$addResizeListener$($element$$125$$, null != $opt_handler$$14$$ ? $goog$bind$$($listener$$77$$, $opt_handler$$14$$) : $listener$$77$$), null) : $goog$events$listen$$($element$$125$$, $type$$133$$, $listener$$77$$, $opt_capt$$13$$, $opt_handler$$14$$);
}, void 0);
$goog$exportPath_$$("VBX.unlisten", function($element$$126$$, $type$$134$$, $listener$$78$$, $opt_capt$$14$$, $opt_handler$$15$$) {
  return $goog$isString$$($type$$134$$) && "resize" == $type$$134$$ && $element$$126$$ != window && window.$removeResizeListener$ ? (window.$removeResizeListener$($element$$126$$, $listener$$78$$), !0) : $goog$events$unlisten$$($element$$126$$, $type$$134$$, $listener$$78$$, $opt_capt$$14$$, $opt_handler$$15$$);
}, void 0);
$goog$exportPath_$$("VBX.getSize", function($element$$82$$) {
  return $goog$style$evaluateWithTemporaryDisplay_$$($element$$82$$);
}, void 0);
$goog$exportPath_$$("VBX.track", function($eventType$$11$$, $opt_data$$15$$, $opt_moreParams$$, $opt_trackingData$$10$$) {
  $viewbix$sdk$track$Snowplow$track$$($eventType$$11$$, $opt_trackingData$$10$$);
}, void 0);
$goog$exportPath_$$("VBX.empty", $goog$string$isEmptySafe$$, void 0);
$goog$exportPath_$$("VBX.ok", function($val$$2$$) {
  return null != $val$$2$$;
}, void 0);
$goog$exportPath_$$("VBX.px", function($value$$187$$, $opt_units$$) {
  $goog$string$isEmptySafe$$($opt_units$$) && ($opt_units$$ = "px");
  var $num$$15$$ = parseFloat($value$$187$$);
  return isNaN($num$$15$$) ? "" : $num$$15$$.toString() + $opt_units$$;
}, void 0);
$goog$exportPath_$$("VBX.loading", $viewbix$sdk$helper$LoadingHelper$setLoading$$, void 0);
$goog$exportPath_$$("VBX.addClass", $goog$dom$classlist$add$$, void 0);
$goog$exportPath_$$("VBX.removeClass", $goog$dom$classlist$remove$$, void 0);
$goog$exportPath_$$("VBX.toBoolean", $viewbix$sdk$helper$BooleanHelper$convertToBoolean$$, void 0);
$goog$exportPath_$$("VBX.colorIsBright", function($b$$33_rgb$$11$$) {
  var $r$$10$$ = $b$$33_rgb$$11$$ >> 16 & 255, $g$$5$$ = $b$$33_rgb$$11$$ >> 8 & 255;
  $b$$33_rgb$$11$$ &= 255;
  return 145 < Math.sqrt(.241 * $r$$10$$ * $r$$10$$ + .691 * $g$$5$$ * $g$$5$$ + .068 * $b$$33_rgb$$11$$ * $b$$33_rgb$$11$$);
}, void 0);
$goog$exportPath_$$("VBX.colorToString", $viewbix$sdk$helper$ColorHelper$colorToString$$, void 0);
$goog$exportPath_$$("VBX.supports", function($feature$$4$$) {
  if (null === $viewbix$sdk$Core$detectedFeatures$$) {
    var $props$$1$$ = "textShadow textStroke boxShadow borderRadius borderImage opacity".split(" "), $CSSprefix$$ = ["Webkit", "Moz", "O", "ms", "Khtml"], $d$$12$$ = document.createElement("browserFeatureDetectElement"), $test$$ = [], $p$$6$$, $JSCompiler_inline_result$$83_all$$inline_901_pty$$;
    for ($p$$6$$ in $props$$1$$) {
      var $JSCompiler_temp_const$$82$$ = $JSCompiler_inline_result$$83_all$$inline_901_pty$$ = $props$$1$$[$p$$6$$];
      a: {
        var $n$$inline_902_uprop$$inline_900$$ = $JSCompiler_inline_result$$83_all$$inline_901_pty$$.charAt(0).toUpperCase() + $JSCompiler_inline_result$$83_all$$inline_901_pty$$.substr(1);
        $JSCompiler_inline_result$$83_all$$inline_901_pty$$ = ($JSCompiler_inline_result$$83_all$$inline_901_pty$$ + " " + $CSSprefix$$.join($n$$inline_902_uprop$$inline_900$$ + " ") + $n$$inline_902_uprop$$inline_900$$).split(" ");
        for (var $n$$inline_902_uprop$$inline_900$$ = 0, $np$$inline_903$$ = $JSCompiler_inline_result$$83_all$$inline_901_pty$$.length;$n$$inline_902_uprop$$inline_900$$ < $np$$inline_903$$;$n$$inline_902_uprop$$inline_900$$++) {
          if ("" === $d$$12$$.style[$JSCompiler_inline_result$$83_all$$inline_901_pty$$[$n$$inline_902_uprop$$inline_900$$]]) {
            $JSCompiler_inline_result$$83_all$$inline_901_pty$$ = !0;
            break a;
          }
        }
        $JSCompiler_inline_result$$83_all$$inline_901_pty$$ = !1;
      }
      $test$$[$JSCompiler_temp_const$$82$$] = $JSCompiler_inline_result$$83_all$$inline_901_pty$$;
    }
    $viewbix$sdk$Core$detectedFeatures$$ = $test$$;
  }
  return $viewbix$sdk$Core$detectedFeatures$$[$feature$$4$$];
}, void 0);
$goog$exportPath_$$("VBX.extractLink", function($JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$) {
  if (null == $JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$) {
    return null;
  }
  $JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$ = /(\<a\s+href\s*=\s*["']{1}|\<iframe.+?src\s*=\s*["']{1}(?:\/\/)?|data-href\s*=\s*["']{1})?\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u202A\u202C]))/ig.exec($JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$);
  null != $JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$ ? ($JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$ = $JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$[2], null != $JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$ ? ($JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$ = $goog$string$trim$$($JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$) || "", $goog$string$isEmptySafe$$($JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$) || 0 == $JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$.lastIndexOf("http://", 
  0) || 0 == $JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$.lastIndexOf("https://", 0) || 0 == $JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$.lastIndexOf("tel://", 0) || 0 == $JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$.lastIndexOf("//", 0) || ($JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$ = "http://" + $JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$)) : $JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$ = null) : $JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$ = 
  null;
  return $JSCompiler_temp$$7_m$$6_text$$25_text$$inline_909$$;
}, void 0);
$goog$exportPath_$$("VBX.linkify", $viewbix$sdk$helper$LinkHelper$linkify$$, void 0);
$goog$exportPath_$$("VBX.listenMouseEnter", $viewbix$sdk$helper$EventHelper$listenMouseEnter$$, void 0);
$goog$exportPath_$$("VBX.listenMouseLeave", $viewbix$sdk$helper$EventHelper$listenMouseLeave$$, void 0);
function $viewbix$sdk$Feed$$($params$$1$$) {
  $goog$events$EventTarget$$.call(this);
  this.$params_$ = $params$$1$$;
  this.$customTokenFunctions_$ = {};
  this.$pageSizeConfigName_$ = "pageSize";
  this.$pageSize_$ = NaN;
  this.$firstEntry_$ = null;
  this.$pageSizeBound_$ = !1;
  this.$linkifyContent_$ = !0;
  this.$init$();
}
$goog$inherits$$($viewbix$sdk$Feed$$, $viewbix$sdk$Core$$);
function $JSCompiler_StaticMethods_getThumbnail$$($entry$$6$$, $xml$$7$$) {
  if (null != $entry$$6$$.thumbnail) {
    return $entry$$6$$.thumbnail;
  }
  if (null != $xml$$7$$) {
    var $images_match$$8_re$$12$$;
    $images_match$$8_re$$12$$ = $xml$$7$$.querySelector("thumbnailUrl");
    if ($goog$isObject$$($images_match$$8_re$$12$$) && 0 < $images_match$$8_re$$12$$.nodeType && !$goog$string$isEmptySafe$$($goog$dom$getTextContent$$($images_match$$8_re$$12$$))) {
      return $goog$dom$getTextContent$$($images_match$$8_re$$12$$);
    }
    if (!$viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($images_match$$8_re$$12$$)) {
      return $goog$dom$getTextContent$$($images_match$$8_re$$12$$[0]);
    }
    $images_match$$8_re$$12$$ = $xml$$7$$.querySelector('enclosure[type^="image/"]');
    if (!$viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($images_match$$8_re$$12$$)) {
      return $images_match$$8_re$$12$$[0].getAttribute("url");
    }
    $images_match$$8_re$$12$$ = $xml$$7$$.querySelector("thumbnail");
    if (!$viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($images_match$$8_re$$12$$)) {
      return $images_match$$8_re$$12$$[0].getAttribute("url");
    }
    if (null != $images_match$$8_re$$12$$) {
      return $images_match$$8_re$$12$$.getAttribute("url");
    }
    $images_match$$8_re$$12$$ = $xml$$7$$.querySelector("image");
    if (!$viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($images_match$$8_re$$12$$)) {
      return $goog$dom$getTextContent$$($images_match$$8_re$$12$$[$images_match$$8_re$$12$$.length - 1]);
    }
    $images_match$$8_re$$12$$ = $xml$$7$$.querySelector("coverArt");
    if (!$viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($images_match$$8_re$$12$$)) {
      return $goog$dom$getTextContent$$($images_match$$8_re$$12$$[$images_match$$8_re$$12$$.length - 1]);
    }
    $images_match$$8_re$$12$$ = $xml$$7$$.querySelector("imagelink");
    if (!$viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($images_match$$8_re$$12$$)) {
      return $goog$dom$getTextContent$$($images_match$$8_re$$12$$[0]);
    }
    $images_match$$8_re$$12$$ = /<\s*img\s*.*?src\s*=\s*(['"]?)([^\s]+(\.jpg|\.gif|\.png|\.jpeg))\1/i;
    if (null != $entry$$6$$ && ($images_match$$8_re$$12$$ = $images_match$$8_re$$12$$.exec($entry$$6$$.content), !$viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($images_match$$8_re$$12$$))) {
      return $images_match$$8_re$$12$$[2];
    }
  }
  return null;
}
function $JSCompiler_StaticMethods_getToken$$($JSCompiler_StaticMethods_getToken$self$$, $name$$100$$, $entry$$7$$, $xml$$8$$, $index$$87$$) {
  var $value$$190$$ = "";
  if ($name$$100$$ in $JSCompiler_StaticMethods_getToken$self$$.$customTokenFunctions_$) {
    $value$$190$$ = $goog$object$get$$($JSCompiler_StaticMethods_getToken$self$$.$customTokenFunctions_$, $name$$100$$)($entry$$7$$, $xml$$8$$, $index$$87$$);
  } else {
    switch($name$$100$$) {
      case "thumbnail":
        $value$$190$$ = $JSCompiler_StaticMethods_getThumbnail$$($entry$$7$$, $xml$$8$$);
        break;
      default:
        $value$$190$$ = $goog$object$get$$($entry$$7$$, $name$$100$$);
    }
  }
  return $value$$190$$;
}
function $JSCompiler_StaticMethods_buildEntry$$($JSCompiler_StaticMethods_buildEntry$self$$, $entry$$9$$, $xml$$10$$, $index$$89$$) {
  if (!$goog$string$isEmptySafe$$($JSCompiler_StaticMethods_buildEntry$self$$.$template_$)) {
    var $entryHtml_entryHtmlDom$$ = $viewbix$sdk$helper$RegExpHelper$replace$$($JSCompiler_StaticMethods_buildEntry$self$$.$template_$, /{\s*\$(\w+)\s*}/g, $goog$bind$$(function($match$$9$$) {
      return $JSCompiler_StaticMethods_getToken$$(this, $match$$9$$[1], $entry$$9$$, $xml$$10$$, $index$$89$$);
    }, $JSCompiler_StaticMethods_buildEntry$self$$)), $entryHtml_entryHtmlDom$$ = $viewbix$sdk$helper$RegExpHelper$replace$$($entryHtml_entryHtmlDom$$, /{\s*if\s+\$(\w+)\s*}([\s\S]*?){\s*\/if\s*}/g, $goog$bind$$(function($isTrue$$inline_935_match$$10_tokenValue$$inline_934$$) {
      var $conditional$$inline_930$$ = $isTrue$$inline_935_match$$10_tokenValue$$inline_934$$[2];
      $isTrue$$inline_935_match$$10_tokenValue$$inline_934$$ = $JSCompiler_StaticMethods_getToken$$(this, $isTrue$$inline_935_match$$10_tokenValue$$inline_934$$[1], $entry$$9$$, $xml$$10$$, $index$$89$$);
      $isTrue$$inline_935_match$$10_tokenValue$$inline_934$$ = !$goog$string$isEmptySafe$$($isTrue$$inline_935_match$$10_tokenValue$$inline_934$$);
      var $elseMatch$$inline_936$$ = /{\s*else\s*}/.exec($conditional$$inline_930$$), $hasElseStatement$$inline_937$$ = null !== $elseMatch$$inline_936$$, $valueToReturn$$inline_938$$ = "";
      $isTrue$$inline_935_match$$10_tokenValue$$inline_934$$ ? $valueToReturn$$inline_938$$ = $hasElseStatement$$inline_937$$ ? $conditional$$inline_930$$.substring(0, $elseMatch$$inline_936$$.index) : $conditional$$inline_930$$ : $hasElseStatement$$inline_937$$ && ($valueToReturn$$inline_938$$ = $conditional$$inline_930$$.substring($elseMatch$$inline_936$$.index + $elseMatch$$inline_936$$[0].length));
      return $valueToReturn$$inline_938$$;
    }, $JSCompiler_StaticMethods_buildEntry$self$$)), $entryHtml_entryHtmlDom$$ = $goog$dom$htmlToDocumentFragment_$$($entryHtml_entryHtmlDom$$);
    $goog$dom$classlist$add$$($entryHtml_entryHtmlDom$$, "vbx-feed-item");
    $entryHtml_entryHtmlDom$$.removeAttribute("id");
    $JSCompiler_StaticMethods_bindDataAttributes$$($JSCompiler_StaticMethods_buildEntry$self$$, $entryHtml_entryHtmlDom$$);
    $JSCompiler_StaticMethods_buildEntry$self$$.$container_$.appendChild($entryHtml_entryHtmlDom$$);
    $viewbix$sdk$helper$LinkHelper$changeHrefToWindowOpen$$($entryHtml_entryHtmlDom$$);
  }
}
function $JSCompiler_StaticMethods_loadFeedUrl$$($JSCompiler_StaticMethods_loadFeedUrl$self$$) {
  $goog$dom$isElement$$($JSCompiler_StaticMethods_loadFeedUrl$self$$.$container_$) && $goog$dom$removeChildren$$($JSCompiler_StaticMethods_loadFeedUrl$self$$.$container_$);
  var $entry$$10$$;
  $goog$string$caseInsensitiveStartsWith$$($JSCompiler_StaticMethods_loadFeedUrl$self$$.$source_$, "/api/twitter") ? $viewbix$sdk$helper$XhrHelper$send$$($JSCompiler_StaticMethods_loadFeedUrl$self$$.$source_$, $goog$bind$$(function($result$$41$$) {
    $JSCompiler_StaticMethods_onLoaded$$(this, $result$$41$$);
    $goog$array$forEach$$($result$$41$$.statuses, function($status$$3$$, $i$$175$$) {
      var $author$$inline_946$$ = $viewbix$sdk$helper$TwitterHelper$tweetify$$("@" + $status$$3$$.User.ScreenName), $content$$inline_947$$ = $viewbix$sdk$helper$TwitterHelper$tweetify$$($viewbix$sdk$helper$LinkHelper$linkify$$($status$$3$$.Text)), $realname$$inline_948$$ = $status$$3$$.User.Name, $thumbnailUrl$$inline_949$$ = $status$$3$$.User.ProfileImageUrl, $date$$inline_950_dateString$$inline_951$$ = new Date($status$$3$$.created_at), $date$$inline_950_dateString$$inline_951$$ = (new $goog$i18n$DateTimeFormat$$("MMM d")).format($date$$inline_950_dateString$$inline_951$$);
      $entry$$10$$ = {author:$author$$inline_946$$, content:$content$$inline_947$$, $realname$:$realname$$inline_948$$, thumbnailUrl:$thumbnailUrl$$inline_949$$, publishedDate:$date$$inline_950_dateString$$inline_951$$};
      $JSCompiler_StaticMethods_buildEntry$$(this, $entry$$10$$, null, $i$$175$$);
    }, this);
    $JSCompiler_StaticMethods_afterEntriesBuilt$$(this);
  }, $JSCompiler_StaticMethods_loadFeedUrl$self$$)) : $goog$string$caseInsensitiveStartsWith$$($JSCompiler_StaticMethods_loadFeedUrl$self$$.$source_$, "/api/youtube") ? $viewbix$sdk$helper$XhrHelper$send$$($JSCompiler_StaticMethods_loadFeedUrl$self$$.$source_$, $goog$bind$$(function($result$$42$$) {
    $JSCompiler_StaticMethods_onLoaded$$(this, $result$$42$$);
    null != this.$firstEntry_$ && $JSCompiler_StaticMethods_buildEntry$$(this, this.$firstEntry_$, null, 0);
    $goog$array$forEach$$($result$$42$$.feed.entry, function($entry$$11$$, $i$$176$$) {
      var $entry$$inline_953$$ = $entry$$11$$, $date$$inline_954_dateString$$inline_955$$ = new Date($entry$$inline_953$$.published), $date$$inline_954_dateString$$inline_955$$ = (new $goog$i18n$DateTimeFormat$$("MMM d yyyy")).format($date$$inline_954_dateString$$inline_955$$);
      $entry$$11$$ = {title:$entry$$inline_953$$.title, content:$entry$$inline_953$$.description, author:$entry$$inline_953$$.author, link:$entry$$inline_953$$.link, $thumbnail$:$entry$$inline_953$$.thumbnail, publishedDate:$date$$inline_954_dateString$$inline_955$$};
      $JSCompiler_StaticMethods_buildEntry$$(this, $entry$$11$$, null, $i$$176$$ + 1);
    }, this);
    $JSCompiler_StaticMethods_afterEntriesBuilt$$(this);
  }, $JSCompiler_StaticMethods_loadFeedUrl$self$$)) : $goog$string$caseInsensitiveStartsWith$$($JSCompiler_StaticMethods_loadFeedUrl$self$$.$source_$, "youtubechannel:") ? $viewbix$sdk$helper$YouTubeHelper$getAllVideosPlaylistIdForChannel$$($JSCompiler_StaticMethods_loadFeedUrl$self$$.$source_$.substring(15), $goog$bind$$(function($feedUrl_playlistId$$) {
    $goog$string$isEmptySafe$$($feedUrl_playlistId$$) || ($feedUrl_playlistId$$ = "/api/youtube/playlistfeed/?id=" + $feedUrl_playlistId$$, this.$pageSize_$ && ($feedUrl_playlistId$$ += "&maxresults=" + this.$pageSize_$), this.$source_$ = $feedUrl_playlistId$$, $JSCompiler_StaticMethods_loadFeedUrl$$(this));
  }, $JSCompiler_StaticMethods_loadFeedUrl$self$$)) : $goog$string$isEmptySafe$$($JSCompiler_StaticMethods_loadFeedUrl$self$$.$source_$) || $viewbix$sdk$helper$GoogleHelper$loadApi$$($goog$bind$$(function() {
    var $feed$$ = new google.feeds.Feed(this.$source_$);
    $feed$$.setResultFormat(google.feeds.Feed.MIXED_FORMAT);
    $feed$$.setNumEntries(this.$pageSize_$);
    $feed$$.load($goog$bind$$(function($result$$43$$) {
      $JSCompiler_StaticMethods_onLoaded$$(this, $result$$43$$);
      if (!$result$$43$$.error) {
        var $index$$90$$ = 0;
        null != this.$firstEntry_$ && $JSCompiler_StaticMethods_buildEntry$$(this, this.$firstEntry_$, null, $index$$90$$++);
        for (var $i$$177$$ = 0;$i$$177$$ < $result$$43$$.feed.entries.length;$i$$177$$++) {
          $entry$$10$$ = $result$$43$$.feed.entries[$i$$177$$], $JSCompiler_StaticMethods_buildEntry$$(this, $entry$$10$$, $entry$$10$$.xmlNode, $index$$90$$++);
        }
      }
      $JSCompiler_StaticMethods_afterEntriesBuilt$$(this);
    }, this));
  }, $JSCompiler_StaticMethods_loadFeedUrl$self$$));
}
function $JSCompiler_StaticMethods_loadFeedXml$$($JSCompiler_StaticMethods_loadFeedXml$self$$) {
  var $xml$$11_xmlEntries$$1$$ = $goog$dom$xml$loadXml$$($JSCompiler_StaticMethods_loadFeedXml$self$$.$source_$);
  $JSCompiler_StaticMethods_onLoaded$$($JSCompiler_StaticMethods_loadFeedXml$self$$, $xml$$11_xmlEntries$$1$$);
  var $feed$$1$$ = $xml$$11_xmlEntries$$1$$.getElementsByTagName("feed");
  $viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($feed$$1$$) && ($feed$$1$$ = $xml$$11_xmlEntries$$1$$.getElementsByTagName("items"));
  $viewbix$sdk$helper$ArrayHelper$isEmptySafe$$($feed$$1$$) || ($xml$$11_xmlEntries$$1$$ = $goog$dom$getChildren$$($feed$$1$$[0]), $goog$array$forEach$$($xml$$11_xmlEntries$$1$$, function($xmlEntry$$, $index$$91$$) {
    var $entry$$12$$ = new $viewbix$sdk$FeedEntry$$;
    $entry$$12$$.link = $viewbix$sdk$helper$ElementHelper$getChildTextContent$$($xmlEntry$$, "link");
    var $linkify$$ = this.$linkifyContent_$ && $goog$string$isEmptySafe$$($entry$$12$$.link);
    $entry$$12$$.title = $viewbix$sdk$helper$ElementHelper$getChildTextContent$$($xmlEntry$$, "title");
    $entry$$12$$.content = $viewbix$sdk$helper$StringHelper$newLineToBr$$($viewbix$sdk$helper$ElementHelper$getChildTextContentWithLineBreaks$$($xmlEntry$$, "content"));
    $linkify$$ && ($entry$$12$$.content = $viewbix$sdk$helper$LinkHelper$linkify$$($entry$$12$$.content));
    $entry$$12$$.contentSnippet = $viewbix$sdk$helper$StringHelper$newLineToBr$$($viewbix$sdk$helper$ElementHelper$getChildTextContentWithLineBreaks$$($xmlEntry$$, "contentSnippet"));
    $linkify$$ && ($entry$$12$$.contentSnippet = $viewbix$sdk$helper$LinkHelper$linkify$$($entry$$12$$.contentSnippet));
    $entry$$12$$.publishedDate = $viewbix$sdk$helper$ElementHelper$getChildTextContent$$($xmlEntry$$, "publishedDate");
    $JSCompiler_StaticMethods_buildEntry$$(this, $entry$$12$$.$toObject$(), $xmlEntry$$, $index$$91$$);
  }, $JSCompiler_StaticMethods_loadFeedXml$self$$));
  $JSCompiler_StaticMethods_afterEntriesBuilt$$($JSCompiler_StaticMethods_loadFeedXml$self$$);
}
function $JSCompiler_StaticMethods_onLoaded$$($JSCompiler_StaticMethods_onLoaded$self$$, $data$$71$$) {
  $goog$isFunction$$($JSCompiler_StaticMethods_onLoaded$self$$.$loadedCallback_$) && $JSCompiler_StaticMethods_onLoaded$self$$.$loadedCallback_$($data$$71$$);
}
function $JSCompiler_StaticMethods_afterEntriesBuilt$$($JSCompiler_StaticMethods_afterEntriesBuilt$self$$) {
  $goog$isFunction$$($JSCompiler_StaticMethods_afterEntriesBuilt$self$$.$builtCallback_$) && $JSCompiler_StaticMethods_afterEntriesBuilt$self$$.$builtCallback_$();
}
$viewbix$sdk$Feed$$.prototype.$setSource$ = function $$viewbix$sdk$Feed$$$$$setSource$$($value$$191$$) {
  this.$source_$ = $value$$191$$;
  $goog$dom$isElement$$(this.$container_$) && $goog$dom$removeChildren$$(this.$container_$);
  this.$sourceType_$ = $goog$string$caseInsensitiveStartsWith$$(this.$source_$, "http") || 0 == this.$source_$.lastIndexOf("/", 0) || $goog$string$caseInsensitiveStartsWith$$(this.$source_$, "/api/youtube") || 0 == this.$source_$.lastIndexOf("youtubechannel:", 0) ? $viewbix$sdk$Feed$SourceType$URL$$ : $viewbix$sdk$Feed$SourceType$XML$$;
  this.$sourceType_$ == $viewbix$sdk$Feed$SourceType$URL$$ ? isNaN(this.$pageSize_$) ? this.$pageSizeBound_$ || (this.$pageSizeBound_$ = !0, $viewbix$sdk$helper$BindHelper$bindConfigDefinition$$(this.$pageSizeConfigName_$, this.$setPageSize$, this)) : $JSCompiler_StaticMethods_loadFeedUrl$$(this) : $JSCompiler_StaticMethods_loadFeedXml$$(this);
};
$viewbix$sdk$Feed$$.prototype.$setFirstEntry$ = function $$viewbix$sdk$Feed$$$$$setFirstEntry$$($value$$192$$) {
  this.$firstEntry_$ = $value$$192$$;
};
$viewbix$sdk$Feed$$.prototype.$setPageSize$ = function $$viewbix$sdk$Feed$$$$$setPageSize$$($value$$193$$) {
  var $oldPageSize$$ = this.$pageSize_$;
  this.$pageSize_$ = parseInt($value$$193$$, 10);
  isNaN(this.$pageSize_$) || $oldPageSize$$ == this.$pageSize_$ || this.$sourceType_$ != $viewbix$sdk$Feed$SourceType$URL$$ || $JSCompiler_StaticMethods_loadFeedUrl$$(this);
};
$viewbix$sdk$Feed$$.prototype.$init$ = function $$viewbix$sdk$Feed$$$$$init$$() {
  $goog$object$forEach$$(this.$params_$, function($param$$5$$, $name$$102$$) {
    switch($name$$102$$) {
      case $viewbix$sdk$FeedConfigurationName$CONTAINER$$:
        this.$container_$ = $goog$dom$getElementHelper_$$(document, $param$$5$$);
        $goog$dom$isElement$$(this.$container_$) && $goog$dom$classlist$add$$(this.$container_$, "vbx-feed-container");
        break;
      case $viewbix$sdk$FeedConfigurationName$TEMPLATE$$:
        var $element$$inline_968_num$$inline_972$$ = $goog$dom$getElementHelper_$$(document, $param$$5$$);
        $goog$dom$isElement$$($element$$inline_968_num$$inline_972$$) && (this.$template_$ = $element$$inline_968_num$$inline_972$$.outerHTML, $goog$dom$removeNode$$($element$$inline_968_num$$inline_972$$));
        break;
      case $viewbix$sdk$FeedConfigurationName$SOURCE$$:
        $goog$string$caseInsensitiveStartsWith$$($param$$5$$, "http") ? this.$setSource$($param$$5$$) : $viewbix$sdk$helper$BindHelper$bindConfigDefinition$$($param$$5$$, this.$setSource$, this);
        break;
      case $viewbix$sdk$FeedConfigurationName$PREPEND$$:
        $viewbix$sdk$helper$BindHelper$bindConfigDefinition$$($param$$5$$, this.$setFirstEntry$, this);
        break;
      case $viewbix$sdk$FeedConfigurationName$ON_LOADED$$:
        this.$loadedCallback_$ = $param$$5$$;
        break;
      case $viewbix$sdk$FeedConfigurationName$ON_BUILT$$:
        this.$builtCallback_$ = $param$$5$$;
        break;
      case $viewbix$sdk$FeedConfigurationName$PAGE_SIZE$$:
        $element$$inline_968_num$$inline_972$$ = $param$$5$$;
        $goog$isString$$($param$$5$$) && ($element$$inline_968_num$$inline_972$$ = parseInt($param$$5$$, 10));
        $goog$isNumber$$($element$$inline_968_num$$inline_972$$) && !isNaN($element$$inline_968_num$$inline_972$$) ? this.$pageSize_$ = $element$$inline_968_num$$inline_972$$ : $goog$isString$$($param$$5$$) && !$goog$string$isEmptySafe$$($param$$5$$) && (this.$pageSizeConfigName_$ = $param$$5$$);
        break;
      case $viewbix$sdk$FeedConfigurationName$LINKIFY_CONTENT$$:
        this.$linkifyContent_$ = $param$$5$$;
        break;
      default:
        this.$customTokenFunctions_$[$name$$102$$] = $param$$5$$;
    }
  }, this);
};
var $viewbix$sdk$FeedConfigurationName$CONTAINER$$ = "container", $viewbix$sdk$FeedConfigurationName$TEMPLATE$$ = "template", $viewbix$sdk$FeedConfigurationName$SOURCE$$ = "source", $viewbix$sdk$FeedConfigurationName$PREPEND$$ = "prepend", $viewbix$sdk$FeedConfigurationName$ON_LOADED$$ = "onLoaded", $viewbix$sdk$FeedConfigurationName$ON_BUILT$$ = "onBuilt", $viewbix$sdk$FeedConfigurationName$PAGE_SIZE$$ = "pageSize", $viewbix$sdk$FeedConfigurationName$LINKIFY_CONTENT$$ = "linkifyContent", $viewbix$sdk$Feed$SourceType$URL$$ = 
"url", $viewbix$sdk$Feed$SourceType$XML$$ = "xml";
function $viewbix$sdk$App$$() {
  $goog$events$EventTarget$$.call(this);
  this.$appConfigs_$ = null;
  this.$components_$ = [];
  this.$contentIsLoaded_$ = this.$channelIsConnected_$ = !1;
  this.$pauseAllMediaCallback_$ = null;
}
$goog$inherits$$($viewbix$sdk$App$$, $viewbix$sdk$Core$$);
$goog$addSingletonGetter$$($viewbix$sdk$App$$);
function $JSCompiler_StaticMethods_processSetCssMessage$$($JSCompiler_StaticMethods_processSetCssMessage$self$$, $cssTexts$$) {
  $goog$array$forEach$$($cssTexts$$, function($cssText$$4$$) {
    var $document$$inline_985$$ = document, $cssNode$$inline_986$$ = $document$$inline_985$$.createElement("style");
    $cssNode$$inline_986$$.type = "text/css";
    $document$$inline_985$$.getElementsByTagName("head")[0].appendChild($cssNode$$inline_986$$);
    $cssNode$$inline_986$$.styleSheet ? $cssNode$$inline_986$$.styleSheet.cssText = $cssText$$4$$ : $cssNode$$inline_986$$.appendChild($document$$inline_985$$.createTextNode($cssText$$4$$));
  }, $JSCompiler_StaticMethods_processSetCssMessage$self$$);
}
function $JSCompiler_StaticMethods_setupXpcChannel$$($JSCompiler_StaticMethods_setupXpcChannel$self$$) {
  var $config$$2_xpc$$ = (new $goog$Uri$$(window.location.href)).$queryData_$.get("xpc");
  $config$$2_xpc$$ && ($config$$2_xpc$$ = $goog$json$parse$$($config$$2_xpc$$), $JSCompiler_StaticMethods_setupXpcChannel$self$$.$channel_$ = new $goog$net$xpc$CrossPageChannel$$($config$$2_xpc$$), $JSCompiler_StaticMethods_setupXpcChannel$self$$.$channel_$.$connect$($goog$bind$$(function() {
    $JSCompiler_StaticMethods_registerService$$(this.$channel_$, $goog$bind$$(function($message$$inline_992_name$$inline_1261_payload$$31$$) {
      var $config$$inline_1260_objPayload$$inline_989_value$$inline_1262$$ = $message$$inline_992_name$$inline_1261_payload$$31$$;
      $goog$isString$$($message$$inline_992_name$$inline_1261_payload$$31$$) && ($config$$inline_1260_objPayload$$inline_989_value$$inline_1262$$ = $goog$json$parse$$($message$$inline_992_name$$inline_1261_payload$$31$$));
      $message$$inline_992_name$$inline_1261_payload$$31$$ = new $viewbix$sdk$XpcMessage$$($config$$inline_1260_objPayload$$inline_989_value$$inline_1262$$.name, $config$$inline_1260_objPayload$$inline_989_value$$inline_1262$$.data);
      switch($message$$inline_992_name$$inline_1261_payload$$31$$.name) {
        case "SET_CONFIG":
          $config$$inline_1260_objPayload$$inline_989_value$$inline_1262$$ = $message$$inline_992_name$$inline_1261_payload$$31$$.data;
          $message$$inline_992_name$$inline_1261_payload$$31$$ = $config$$inline_1260_objPayload$$inline_989_value$$inline_1262$$.name;
          $config$$inline_1260_objPayload$$inline_989_value$$inline_1262$$ = $config$$inline_1260_objPayload$$inline_989_value$$inline_1262$$.value;
          this.$appConfigs_$[$message$$inline_992_name$$inline_1261_payload$$31$$] = $config$$inline_1260_objPayload$$inline_989_value$$inline_1262$$;
          $viewbix$sdk$helper$BindHelper$dispatch$$($message$$inline_992_name$$inline_1261_payload$$31$$, $config$$inline_1260_objPayload$$inline_989_value$$inline_1262$$);
          break;
        case "SET_CSS":
          $JSCompiler_StaticMethods_processSetCssMessage$$(this, $message$$inline_992_name$$inline_1261_payload$$31$$.data);
          break;
        case "PAUSE_ALL_MEDIA":
          $goog$isFunction$$(this.$pauseAllMediaCallback_$) && this.$pauseAllMediaCallback_$();
          break;
        case "SET_SELECTED":
          $message$$inline_992_name$$inline_1261_payload$$31$$.data ? $goog$dom$classlist$contains$$(document.body, "vbx-selected") || $viewbix$sdk$helper$StateHelper$removeAddStateClasses$$("vbx-unselected", "vbx-selected") : $goog$dom$classlist$contains$$(document.body, "vbx-unselected") || $viewbix$sdk$helper$StateHelper$removeAddStateClasses$$("vbx-selected", "vbx-unselected");
      }
    }, this));
    this.$channelIsConnected_$ = !0;
    $JSCompiler_StaticMethods_attemptSendDomContentLoadedMessage$$(this);
  }, $JSCompiler_StaticMethods_setupXpcChannel$self$$)));
}
function $JSCompiler_StaticMethods_createComponents$$($JSCompiler_StaticMethods_createComponents$self$$, $params$$2$$, $factory$$2$$, $opt_listeners$$) {
  $params$$2$$ = $viewbix$sdk$helper$ArrayHelper$getAsArray$$($params$$2$$);
  $goog$array$forEach$$($params$$2$$, function($p$$7$$) {
    var $component$$ = new $factory$$2$$($p$$7$$);
    $goog$array$insert$$(this.$components_$, $component$$);
    null != $opt_listeners$$ && ($opt_listeners$$ = $viewbix$sdk$helper$ArrayHelper$getAsArray$$($opt_listeners$$), $goog$array$forEach$$($opt_listeners$$, function($listener$$79$$) {
      $goog$events$listen$$($component$$, $listener$$79$$.$eventName$, $listener$$79$$.$callback$, !1, this);
    }, this));
  }, $JSCompiler_StaticMethods_createComponents$self$$);
}
function $JSCompiler_StaticMethods_initParams$$($JSCompiler_StaticMethods_initParams$self$$, $param$$6$$) {
  $goog$object$forEach$$($param$$6$$, function($value$$196$$, $key$$114$$) {
    switch($key$$114$$) {
      case $viewbix$sdk$App$ParamName$FEED$$:
        $JSCompiler_StaticMethods_createComponents$$(this, $value$$196$$, $viewbix$sdk$Feed$$);
        break;
      case $viewbix$sdk$App$ParamName$FORM$$:
        $value$$196$$[$viewbix$sdk$FormParamName$PLAYER_APP_ID$$] = this.$playerApplicationId_$;
        $JSCompiler_StaticMethods_createComponents$$(this, $value$$196$$, $viewbix$sdk$Form$$, {$eventName$:"formComplete", $callback$:this.$onFormComplete$});
        break;
      case $viewbix$sdk$App$ParamName$PAUSE_ALL_MEDIA$$:
        this.$pauseAllMediaCallback_$ = $value$$196$$;
    }
  }, $JSCompiler_StaticMethods_initParams$self$$);
}
function $JSCompiler_StaticMethods_initStates$$($JSCompiler_StaticMethods_initStates$self$$) {
  $viewbix$sdk$Core$isTouch$$() ? $viewbix$sdk$helper$StateHelper$addStateClasses$$("touchscreen") : ($viewbix$sdk$helper$StateHelper$removeAddStateClasses$$("mouseover", "mouseout"), $viewbix$sdk$helper$EventHelper$listenMouseEnter$$(document.body, function() {
    $viewbix$sdk$helper$StateHelper$removeAddStateClasses$$("mouseout", "mouseover");
  }, !1, $JSCompiler_StaticMethods_initStates$self$$), $viewbix$sdk$helper$EventHelper$listenMouseLeave$$(document.body, function() {
    $viewbix$sdk$helper$StateHelper$removeAddStateClasses$$("mouseover", "mouseout");
  }, !1, $JSCompiler_StaticMethods_initStates$self$$));
  $viewbix$sdk$helper$BooleanHelper$convertToBoolean$$($JSCompiler_StaticMethods_initStates$self$$.$getConfig$($viewbix$sdk$App$ConfigName$LIGHT_STYLE$$), !1) && $viewbix$sdk$helper$StateHelper$addStateClasses$$("vbx-light-style");
  $goog$userAgent$GECKO$$ && $viewbix$sdk$helper$StateHelper$addStateClasses$$("firefox");
}
$JSCompiler_prototypeAlias$$ = $viewbix$sdk$App$$.prototype;
$JSCompiler_prototypeAlias$$.$onFormComplete$ = function $$JSCompiler_prototypeAlias$$$$onFormComplete$$() {
  var $payload$$32$$ = $viewbix$sdk$XpcMessage$createXpcPayload$$("COMPLETE");
  null != $payload$$32$$ && this.$channel_$.send("AGENT", $payload$$32$$);
};
function $JSCompiler_StaticMethods_dispatchAllConfigEvents$$($JSCompiler_StaticMethods_dispatchAllConfigEvents$self$$) {
  $goog$object$forEach$$($JSCompiler_StaticMethods_dispatchAllConfigEvents$self$$.$appConfigs_$, function($value$$197$$, $name$$104$$) {
    $viewbix$sdk$helper$BindHelper$dispatch$$($name$$104$$, $value$$197$$);
  }, $JSCompiler_StaticMethods_dispatchAllConfigEvents$self$$);
}
$JSCompiler_prototypeAlias$$.$listenToConfig$ = function $$JSCompiler_prototypeAlias$$$$listenToConfig$$($name$$106$$, $callback$$93$$, $opt_scope$$29$$) {
  $viewbix$sdk$helper$BindHelper$listenToConfig$$($name$$106$$, $callback$$93$$, $opt_scope$$29$$);
};
$JSCompiler_prototypeAlias$$.$getConfig$ = function $$JSCompiler_prototypeAlias$$$$getConfig$$($name$$108$$) {
  return null != this.$appConfigs_$ ? $goog$object$get$$(this.$appConfigs_$, $name$$108$$, null) : null;
};
$JSCompiler_prototypeAlias$$.track = function $$JSCompiler_prototypeAlias$$$track$($eventType$$12_payload$$36$$, $opt_data$$16$$, $opt_moreParams$$1$$, $opt_trackingData$$11$$) {
  $eventType$$12_payload$$36$$ = $viewbix$sdk$XpcMessage$createXpcPayload$$("TRACK", {eventType:$eventType$$12_payload$$36$$, data:$opt_data$$16$$, params:$opt_moreParams$$1$$, trackingData:$opt_trackingData$$11$$});
  null != $eventType$$12_payload$$36$$ && this.$channel_$.send("AGENT", $eventType$$12_payload$$36$$);
};
$JSCompiler_prototypeAlias$$.$init$ = function $$JSCompiler_prototypeAlias$$$$init$$($params$$4$$) {
  $JSCompiler_StaticMethods_setupXpcChannel$$(this);
  var $readyCallback$$ = $params$$4$$[$viewbix$sdk$App$ParamName$READY$$] || null;
  $viewbix$sdk$helper$WindowHelper$contentLoaded$$($goog$bind$$(function() {
    $goog$dom$classlist$add$$(document.body, "vbx-app-body");
    this.$contentIsLoaded_$ = !0;
    $JSCompiler_StaticMethods_attemptSendDomContentLoadedMessage$$(this);
    this.$appConfigs_$ = window.getAppConfigs();
    this.$playerApplicationId_$ = this.$appConfigs_$[$viewbix$sdk$App$ConfigName$ID$$];
    $JSCompiler_StaticMethods_initParams$$(this, $params$$4$$);
    $JSCompiler_StaticMethods_initStates$$(this);
    $JSCompiler_StaticMethods_bindDataAttributes$$(this);
    $JSCompiler_StaticMethods_dispatchAllConfigEvents$$(this);
    $goog$isFunction$$($readyCallback$$) && $readyCallback$$();
  }, this));
};
function $JSCompiler_StaticMethods_attemptSendDomContentLoadedMessage$$($JSCompiler_StaticMethods_attemptSendDomContentLoadedMessage$self$$) {
  if ($JSCompiler_StaticMethods_attemptSendDomContentLoadedMessage$self$$.$channelIsConnected_$ && $JSCompiler_StaticMethods_attemptSendDomContentLoadedMessage$self$$.$contentIsLoaded_$) {
    var $payload$$37$$ = $viewbix$sdk$XpcMessage$createXpcPayload$$("DOM_CONTENT_LOADED");
    null != $payload$$37$$ && $JSCompiler_StaticMethods_attemptSendDomContentLoadedMessage$self$$.$channel_$.send("AGENT", $payload$$37$$);
  }
}
var $viewbix$sdk$App$APP_NAME$$ = null, $viewbix$sdk$App$PLAYER_APP_ID$$ = null, $viewbix$sdk$Core$PAUSE_ALL_MEDIA_FUNCTION$$ = function $$viewbix$sdk$Core$PAUSE_ALL_MEDIA_FUNCTION$$$() {
  var $JSCompiler_StaticMethods_pauseAllMedia$self$$inline_998$$ = $viewbix$sdk$App$$.$getInstance$(), $payload$$inline_999$$ = $viewbix$sdk$XpcMessage$createXpcPayload$$("PAUSE_ALL_MEDIA");
  null != $payload$$inline_999$$ && $JSCompiler_StaticMethods_pauseAllMedia$self$$inline_998$$.$channel_$.send("AGENT", $payload$$inline_999$$);
}, $viewbix$sdk$Core$WINDOW_OPEN_TRACK_FUNCTION$$ = function $$viewbix$sdk$Core$WINDOW_OPEN_TRACK_FUNCTION$$$($opt_url$$4_trackingData$$3$$) {
  null != $viewbix$sdk$App$PLAYER_APP_ID$$ || ($viewbix$sdk$App$PLAYER_APP_ID$$ = $viewbix$sdk$App$$.$getInstance$().$getConfig$($viewbix$sdk$App$ConfigName$ID$$));
  null != $viewbix$sdk$App$APP_NAME$$ || ($viewbix$sdk$App$APP_NAME$$ = $viewbix$sdk$App$$.$getInstance$().$getConfig$($viewbix$sdk$App$ConfigName$COMPONENT$$));
  var $appTrackingData$$ = $viewbix$sdk$App$PLAYER_APP_ID$$ + "|" + $viewbix$sdk$App$APP_NAME$$ + "|" + (null != $opt_url$$4_trackingData$$3$$ ? $opt_url$$4_trackingData$$3$$ : "");
  $opt_url$$4_trackingData$$3$$ = (new $viewbix$sdk$track$TrackingData$$(new $viewbix$sdk$track$InteractionData$$(null, null, null, !1, $opt_url$$4_trackingData$$3$$ || null, null, null, "app"), $viewbix$sdk$App$$.$getInstance$().$appConfigs_$, null, null, null)).$toStringLiteralObject$();
  $viewbix$sdk$App$$.$getInstance$().track($viewbix$sdk$track$TrackEventType$USER_NAVIGATE_TO_PAGE$$, $appTrackingData$$, null, $opt_url$$4_trackingData$$3$$);
}, $viewbix$sdk$App$ParamName$FEED$$ = "feed", $viewbix$sdk$App$ParamName$FORM$$ = "form", $viewbix$sdk$App$ParamName$READY$$ = "ready", $viewbix$sdk$App$ParamName$PAUSE_ALL_MEDIA$$ = "pauseAllMedia", $viewbix$sdk$App$ConfigName$ID$$ = "id", $viewbix$sdk$App$ConfigName$COMPONENT$$ = "component", $viewbix$sdk$App$ConfigName$LIGHT_STYLE$$ = "lightStyle";
$goog$exportPath_$$("VBX.App.init", function($params$$3$$) {
  $viewbix$sdk$App$$.$getInstance$().$init$($params$$3$$);
}, void 0);
$goog$exportPath_$$("VBX.App.listen", function($name$$105$$, $callback$$92$$, $opt_scope$$28$$) {
  $viewbix$sdk$App$$.$getInstance$().$listenToConfig$($name$$105$$, $callback$$92$$, $opt_scope$$28$$);
}, void 0);
$goog$exportPath_$$("VBX.App.config", function($name$$107$$) {
  return $viewbix$sdk$App$$.$getInstance$().$getConfig$.apply($viewbix$sdk$App$$.$getInstance$(), arguments);
}, void 0);
$goog$exportPath_$$("VBX.App.onState", function($state$$6$$, $callback$$77$$) {
  $state$$6$$ in $viewbix$sdk$helper$StateHelper$stateCallbacks_$$ ? $goog$array$insert$$($goog$object$get$$($viewbix$sdk$helper$StateHelper$stateCallbacks_$$, $state$$6$$), $callback$$77$$) : $goog$object$add$$($viewbix$sdk$helper$StateHelper$stateCallbacks_$$, $state$$6$$, [$callback$$77$$]);
}, void 0);
$goog$exportPath_$$("VBX.App.offState", function($state$$7$$, $opt_callback$$10$$) {
  $state$$7$$ in $viewbix$sdk$helper$StateHelper$stateCallbacks_$$ && ($goog$isFunction$$($opt_callback$$10$$) ? $goog$array$remove$$($goog$object$get$$($viewbix$sdk$helper$StateHelper$stateCallbacks_$$, $state$$7$$), $opt_callback$$10$$) : $goog$object$remove$$($viewbix$sdk$helper$StateHelper$stateCallbacks_$$, $state$$7$$));
}, void 0);
$goog$exportPath_$$("VBX.App.addState", $viewbix$sdk$helper$StateHelper$addStateClasses$$, void 0);
$goog$exportPath_$$("VBX.App.removeState", function($var_args$$97$$) {
  $goog$isArrayLike$$(arguments) && 0 < arguments.length && !$goog$string$isEmptySafe$$(arguments[0]) && ($goog$dom$classlist$removeAll$$.apply(null, [document.body, $goog$array$toArray$$(arguments)]), $viewbix$sdk$helper$StateHelper$callStateCallbacks$$());
}, void 0);
$goog$exportPath_$$("VBX.App.seekAndPlay", function($payload$$inline_1031_time$$18$$) {
  var $JSCompiler_StaticMethods_seekAndPlay$self$$inline_1029$$ = $viewbix$sdk$App$$.$getInstance$();
  $payload$$inline_1031_time$$18$$ = $viewbix$sdk$XpcMessage$createXpcPayload$$("SEEK_AND_PLAY", {time:$payload$$inline_1031_time$$18$$});
  null != $payload$$inline_1031_time$$18$$ && $JSCompiler_StaticMethods_seekAndPlay$self$$inline_1029$$.$channel_$.send("AGENT", $payload$$inline_1031_time$$18$$);
}, void 0);
$goog$exportPath_$$("VBX.App.replaceAndPlay", function($payload$$inline_1039_videoUrl$$1$$) {
  var $JSCompiler_StaticMethods_replaceAndPlay$self$$inline_1037$$ = $viewbix$sdk$App$$.$getInstance$();
  $payload$$inline_1039_videoUrl$$1$$ = $viewbix$sdk$XpcMessage$createXpcPayload$$("REPLACE_AND_PLAY", {videoUrl:$payload$$inline_1039_videoUrl$$1$$});
  null != $payload$$inline_1039_videoUrl$$1$$ && $JSCompiler_StaticMethods_replaceAndPlay$self$$inline_1037$$.$channel_$.send("AGENT", $payload$$inline_1039_videoUrl$$1$$);
}, void 0);
$goog$exportPath_$$("VBX.App.loadForm", function($form$$7$$, $listId$$1$$, $title$$9$$) {
  $JSCompiler_StaticMethods_loadFormByListId$$($form$$7$$, $listId$$1$$, $title$$9$$);
}, void 0);
})();
