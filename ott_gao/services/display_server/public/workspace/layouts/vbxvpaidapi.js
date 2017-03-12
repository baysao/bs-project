(function(){var $JSCompiler_prototypeAlias$$, $goog$global$$ = this;
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
;function $goog$json$parse$$($o_s$$6$$) {
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
      var $sep$$inline_66$$ = "", $key$$inline_67$$;
      for ($key$$inline_67$$ in $object$$4$$) {
        if (Object.prototype.hasOwnProperty.call($object$$4$$, $key$$inline_67$$)) {
          var $value$$inline_68$$ = $object$$4$$[$key$$inline_67$$];
          "function" != typeof $value$$inline_68$$ && ($sb$$1$$.push($sep$$inline_66$$), $JSCompiler_StaticMethods_serializeString_$$($key$$inline_67$$, $sb$$1$$), $sb$$1$$.push(":"), $JSCompiler_StaticMethods_serializeInternal$$($JSCompiler_StaticMethods_serializeInternal$self$$, $JSCompiler_StaticMethods_serializeInternal$self$$.$replacer_$ ? $JSCompiler_StaticMethods_serializeInternal$self$$.$replacer_$.call($object$$4$$, $key$$inline_67$$, $value$$inline_68$$) : $value$$inline_68$$, $sb$$1$$), 
          $sep$$inline_66$$ = ",");
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
function $goog$object$forEach$$($obj$$46$$, $f$$3$$) {
  for (var $key$$23$$ in $obj$$46$$) {
    $f$$3$$.call(void 0, $obj$$46$$[$key$$23$$], $key$$23$$, $obj$$46$$);
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
function $goog$object$add$$($obj$$65$$, $key$$39$$, $val$$13$$) {
  if ($key$$39$$ in $obj$$65$$) {
    throw Error('The object already contains the key "' + $key$$39$$ + '"');
  }
  $obj$$65$$[$key$$39$$] = $val$$13$$;
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
  var $test1$$inline_83$$ = String($prefix$$3$$).toLowerCase(), $test2$$inline_84$$ = String($str$$26$$.substr(0, $prefix$$3$$.length)).toLowerCase();
  return 0 == ($test1$$inline_83$$ < $test2$$inline_84$$ ? -1 : $test1$$inline_83$$ == $test2$$inline_84$$ ? 0 : 1);
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
function $goog$string$compareElements_$$($left$$3$$, $right$$3$$) {
  return $left$$3$$ < $right$$3$$ ? -1 : $left$$3$$ > $right$$3$$ ? 1 : 0;
}
function $goog$string$toNumber$$($str$$61$$) {
  var $num$$7$$ = Number($str$$61$$);
  return 0 == $num$$7$$ && /^[\s\xa0]*$/.test($str$$61$$) ? NaN : $num$$7$$;
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
}, $goog$array$forEach$$ = $goog$array$ARRAY_PROTOTYPE_$$.forEach ? function($arr$$21$$, $f$$10$$, $opt_obj$$6$$) {
  $goog$asserts$assert$$(null != $arr$$21$$.length);
  $goog$array$ARRAY_PROTOTYPE_$$.forEach.call($arr$$21$$, $f$$10$$, $opt_obj$$6$$);
} : function($arr$$22$$, $f$$11$$, $opt_obj$$7$$) {
  for (var $l$$3$$ = $arr$$22$$.length, $arr2$$ = $goog$isString$$($arr$$22$$) ? $arr$$22$$.split("") : $arr$$22$$, $i$$29$$ = 0;$i$$29$$ < $l$$3$$;$i$$29$$++) {
    $i$$29$$ in $arr2$$ && $f$$11$$.call($opt_obj$$7$$, $arr2$$[$i$$29$$], $i$$29$$, $arr$$22$$);
  }
}, $goog$array$filter$$ = $goog$array$ARRAY_PROTOTYPE_$$.filter ? function($arr$$24$$, $f$$13$$, $opt_obj$$9$$) {
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
};
function $goog$array$find$$($arr$$38$$, $f$$26$$) {
  var $i$$35_l$$inline_93$$;
  a: {
    $i$$35_l$$inline_93$$ = $arr$$38$$.length;
    for (var $arr2$$inline_94$$ = $goog$isString$$($arr$$38$$) ? $arr$$38$$.split("") : $arr$$38$$, $i$$inline_95$$ = 0;$i$$inline_95$$ < $i$$35_l$$inline_93$$;$i$$inline_95$$++) {
      if ($i$$inline_95$$ in $arr2$$inline_94$$ && $f$$26$$.call(void 0, $arr2$$inline_94$$[$i$$inline_95$$], $i$$inline_95$$, $arr$$38$$)) {
        $i$$35_l$$inline_93$$ = $i$$inline_95$$;
        break a;
      }
    }
    $i$$35_l$$inline_93$$ = -1;
  }
  return 0 > $i$$35_l$$inline_93$$ ? null : $goog$isString$$($arr$$38$$) ? $arr$$38$$.charAt($i$$35_l$$inline_93$$) : $arr$$38$$[$i$$35_l$$inline_93$$];
}
function $goog$array$remove$$($arr$$49$$, $obj$$84$$) {
  var $i$$41$$ = $goog$array$indexOf$$($arr$$49$$, $obj$$84$$), $rv$$7$$;
  if ($rv$$7$$ = 0 <= $i$$41$$) {
    $goog$asserts$assert$$(null != $arr$$49$$.length), $goog$array$ARRAY_PROTOTYPE_$$.splice.call($arr$$49$$, $i$$41$$, 1);
  }
  return $rv$$7$$;
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
  var $JSCompiler_temp$$52_arr$$inline_97$$;
  $element$$21$$.classList ? $JSCompiler_temp$$52_arr$$inline_97$$ = $element$$21$$.classList.contains($className$$11$$) : ($JSCompiler_temp$$52_arr$$inline_97$$ = $goog$dom$classlist$get$$($element$$21$$), $JSCompiler_temp$$52_arr$$inline_97$$ = 0 <= $goog$array$indexOf$$($JSCompiler_temp$$52_arr$$inline_97$$, $className$$11$$));
  return $JSCompiler_temp$$52_arr$$inline_97$$;
}
function $goog$dom$classlist$add$$($element$$22$$, $className$$12$$) {
  $element$$22$$.classList ? $element$$22$$.classList.add($className$$12$$) : $goog$dom$classlist$contains$$($element$$22$$, $className$$12$$) || ($element$$22$$.className += 0 < $element$$22$$.className.length ? " " + $className$$12$$ : $className$$12$$);
}
function $goog$dom$classlist$remove$$($element$$24$$, $className$$17$$) {
  $element$$24$$.classList ? $element$$24$$.classList.remove($className$$17$$) : $goog$dom$classlist$contains$$($element$$24$$, $className$$17$$) && ($element$$24$$.className = $goog$array$filter$$($goog$dom$classlist$get$$($element$$24$$), function($c$$2$$) {
    return $c$$2$$ != $className$$17$$;
  }).join(" "));
}
;function $goog$events$ListenerMap$$($src$$5$$) {
  this.src = $src$$5$$;
  this.$listeners$ = {};
  this.$typeCount_$ = 0;
}
$goog$events$ListenerMap$$.prototype.add = function $$goog$events$ListenerMap$$$$add$($listenerArray_type$$86$$, $listener$$44_listenerObj$$, $callOnce$$, $opt_useCapture$$37$$, $opt_listenerScope$$) {
  var $typeStr$$ = $listenerArray_type$$86$$.toString();
  $listenerArray_type$$86$$ = this.$listeners$[$typeStr$$];
  $listenerArray_type$$86$$ || ($listenerArray_type$$86$$ = this.$listeners$[$typeStr$$] = [], this.$typeCount_$++);
  var $index$$56$$ = $goog$events$ListenerMap$findListenerIndex_$$($listenerArray_type$$86$$, $listener$$44_listenerObj$$, $opt_useCapture$$37$$, $opt_listenerScope$$);
  -1 < $index$$56$$ ? ($listener$$44_listenerObj$$ = $listenerArray_type$$86$$[$index$$56$$], $callOnce$$ || ($listener$$44_listenerObj$$.$callOnce$ = !1)) : ($listener$$44_listenerObj$$ = new $goog$events$Listener$$($listener$$44_listenerObj$$, this.src, $typeStr$$, !!$opt_useCapture$$37$$, $opt_listenerScope$$), $listener$$44_listenerObj$$.$callOnce$ = $callOnce$$, $listenerArray_type$$86$$.push($listener$$44_listenerObj$$));
  return $listener$$44_listenerObj$$;
};
$goog$events$ListenerMap$$.prototype.remove = function $$goog$events$ListenerMap$$$$remove$($type$$87_typeStr$$1$$, $index$$57_listener$$45$$, $opt_useCapture$$38$$, $opt_listenerScope$$1$$) {
  $type$$87_typeStr$$1$$ = $type$$87_typeStr$$1$$.toString();
  if (!($type$$87_typeStr$$1$$ in this.$listeners$)) {
    return!1;
  }
  var $listenerArray$$1$$ = this.$listeners$[$type$$87_typeStr$$1$$];
  $index$$57_listener$$45$$ = $goog$events$ListenerMap$findListenerIndex_$$($listenerArray$$1$$, $index$$57_listener$$45$$, $opt_useCapture$$38$$, $opt_listenerScope$$1$$);
  return-1 < $index$$57_listener$$45$$ ? ($JSCompiler_StaticMethods_markAsRemoved$$($listenerArray$$1$$[$index$$57_listener$$45$$]), $goog$asserts$assert$$(null != $listenerArray$$1$$.length), $goog$array$ARRAY_PROTOTYPE_$$.splice.call($listenerArray$$1$$, $index$$57_listener$$45$$, 1), 0 == $listenerArray$$1$$.length && (delete this.$listeners$[$type$$87_typeStr$$1$$], this.$typeCount_$--), !0) : !1;
};
function $JSCompiler_StaticMethods_removeByKey$$($JSCompiler_StaticMethods_removeByKey$self$$, $listener$$46$$) {
  var $type$$88$$ = $listener$$46$$.type;
  if (!($type$$88$$ in $JSCompiler_StaticMethods_removeByKey$self$$.$listeners$)) {
    return!1;
  }
  var $removed$$1$$ = $goog$array$remove$$($JSCompiler_StaticMethods_removeByKey$self$$.$listeners$[$type$$88$$], $listener$$46$$);
  $removed$$1$$ && ($JSCompiler_StaticMethods_markAsRemoved$$($listener$$46$$), 0 == $JSCompiler_StaticMethods_removeByKey$self$$.$listeners$[$type$$88$$].length && (delete $JSCompiler_StaticMethods_removeByKey$self$$.$listeners$[$type$$88$$], $JSCompiler_StaticMethods_removeByKey$self$$.$typeCount_$--));
  return $removed$$1$$;
}
$goog$events$ListenerMap$$.prototype.removeAll = function $$goog$events$ListenerMap$$$$removeAll$($opt_type$$7_typeStr$$2$$) {
  $opt_type$$7_typeStr$$2$$ = $opt_type$$7_typeStr$$2$$ && $opt_type$$7_typeStr$$2$$.toString();
  var $count$$11$$ = 0, $type$$89$$;
  for ($type$$89$$ in this.$listeners$) {
    if (!$opt_type$$7_typeStr$$2$$ || $type$$89$$ == $opt_type$$7_typeStr$$2$$) {
      for (var $listenerArray$$2$$ = this.$listeners$[$type$$89$$], $i$$62$$ = 0;$i$$62$$ < $listenerArray$$2$$.length;$i$$62$$++) {
        ++$count$$11$$, $JSCompiler_StaticMethods_markAsRemoved$$($listenerArray$$2$$[$i$$62$$]);
      }
      delete this.$listeners$[$type$$89$$];
      this.$typeCount_$--;
    }
  }
  return $count$$11$$;
};
$goog$events$ListenerMap$$.prototype.$getListener$ = function $$goog$events$ListenerMap$$$$$getListener$$($listenerArray$$4_type$$91$$, $listener$$47$$, $capture$$2$$, $opt_listenerScope$$2$$) {
  $listenerArray$$4_type$$91$$ = this.$listeners$[$listenerArray$$4_type$$91$$.toString()];
  var $i$$64$$ = -1;
  $listenerArray$$4_type$$91$$ && ($i$$64$$ = $goog$events$ListenerMap$findListenerIndex_$$($listenerArray$$4_type$$91$$, $listener$$47$$, $capture$$2$$, $opt_listenerScope$$2$$));
  return-1 < $i$$64$$ ? $listenerArray$$4_type$$91$$[$i$$64$$] : null;
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
;var $goog$labs$userAgent$util$userAgent_$$;
a: {
  var $navigator$$inline_100$$ = $goog$global$$.navigator;
  if ($navigator$$inline_100$$) {
    var $userAgent$$inline_101$$ = $navigator$$inline_100$$.userAgent;
    if ($userAgent$$inline_101$$) {
      $goog$labs$userAgent$util$userAgent_$$ = $userAgent$$inline_101$$;
      break a;
    }
  }
  $goog$labs$userAgent$util$userAgent_$$ = "";
}
function $goog$labs$userAgent$util$matchUserAgent$$($str$$68$$) {
  return-1 != $goog$labs$userAgent$util$userAgent_$$.indexOf($str$$68$$);
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
function $goog$html$SafeHtml$concat$$($var_args$$86$$) {
  function $addArgument$$1$$($argument$$1_html$$5_htmlDir$$) {
    if ($goog$isArray$$($argument$$1_html$$5_htmlDir$$)) {
      $goog$array$forEach$$($argument$$1_html$$5_htmlDir$$, $addArgument$$1$$);
    } else {
      if (!($argument$$1_html$$5_htmlDir$$ instanceof $goog$html$SafeHtml$$)) {
        var $dir$$inline_116$$ = null;
        $argument$$1_html$$5_htmlDir$$.$implementsGoogI18nBidiDirectionalString$ && ($dir$$inline_116$$ = $argument$$1_html$$5_htmlDir$$.$getDirection$());
        $argument$$1_html$$5_htmlDir$$ = $goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse_$$($goog$string$htmlEscape$$($argument$$1_html$$5_htmlDir$$.$implementsGoogStringTypedString$ ? $argument$$1_html$$5_htmlDir$$.$getTypedStringValue$() : String($argument$$1_html$$5_htmlDir$$)), $dir$$inline_116$$);
      }
      $content$$5$$ += $goog$html$SafeHtml$unwrap$$($argument$$1_html$$5_htmlDir$$);
      $argument$$1_html$$5_htmlDir$$ = $argument$$1_html$$5_htmlDir$$.$getDirection$();
      0 == $dir$$4$$ ? $dir$$4$$ = $argument$$1_html$$5_htmlDir$$ : 0 != $argument$$1_html$$5_htmlDir$$ && $dir$$4$$ != $argument$$1_html$$5_htmlDir$$ && ($dir$$4$$ = null);
    }
  }
  var $dir$$4$$ = 0, $content$$5$$ = "";
  $goog$array$forEach$$(arguments, $addArgument$$1$$);
  return $goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse_$$($content$$5$$, $dir$$4$$);
}
var $goog$html$SafeHtml$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ = {};
function $goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse_$$($html$$7$$, $dir$$6$$) {
  var $safeHtml$$1$$ = new $goog$html$SafeHtml$$;
  $safeHtml$$1$$.$privateDoNotAccessOrElseSafeHtmlWrappedValue_$ = $html$$7$$;
  $safeHtml$$1$$.$dir_$ = $dir$$6$$;
  return $safeHtml$$1$$;
}
$goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse_$$("", 0);
function $goog$structs$Map$$($opt_map$$, $var_args$$88$$) {
  this.$map_$ = {};
  this.$keys_$ = [];
  this.$count_$ = 0;
  var $argLength$$2_keys$$inline_120$$ = arguments.length;
  if (1 < $argLength$$2_keys$$inline_120$$) {
    if ($argLength$$2_keys$$inline_120$$ % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var $i$$73_values$$inline_121$$ = 0;$i$$73_values$$inline_121$$ < $argLength$$2_keys$$inline_120$$;$i$$73_values$$inline_121$$ += 2) {
      this.set(arguments[$i$$73_values$$inline_121$$], arguments[$i$$73_values$$inline_121$$ + 1]);
    }
  } else {
    if ($opt_map$$) {
      $opt_map$$ instanceof $goog$structs$Map$$ ? ($argLength$$2_keys$$inline_120$$ = $opt_map$$.$getKeys$(), $i$$73_values$$inline_121$$ = $opt_map$$.$getValues$()) : ($argLength$$2_keys$$inline_120$$ = $goog$object$getKeys$$($opt_map$$), $i$$73_values$$inline_121$$ = $goog$object$getValues$$($opt_map$$));
      for (var $i$$inline_122$$ = 0;$i$$inline_122$$ < $argLength$$2_keys$$inline_120$$.length;$i$$inline_122$$++) {
        this.set($argLength$$2_keys$$inline_120$$[$i$$inline_122$$], $i$$73_values$$inline_121$$[$i$$inline_122$$]);
      }
    }
  }
}
$JSCompiler_prototypeAlias$$ = $goog$structs$Map$$.prototype;
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for (var $rv$$12$$ = [], $i$$74$$ = 0;$i$$74$$ < this.$keys_$.length;$i$$74$$++) {
    $rv$$12$$.push(this.$map_$[this.$keys_$[$i$$74$$]]);
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
$JSCompiler_prototypeAlias$$.set = function $$JSCompiler_prototypeAlias$$$set$($key$$59$$, $value$$87$$) {
  $goog$structs$Map$hasKey_$$(this.$map_$, $key$$59$$) || (this.$count_$++, this.$keys_$.push($key$$59$$));
  this.$map_$[$key$$59$$] = $value$$87$$;
};
$JSCompiler_prototypeAlias$$.forEach = function $$JSCompiler_prototypeAlias$$$forEach$($f$$42$$, $opt_obj$$40$$) {
  for (var $keys$$4$$ = this.$getKeys$(), $i$$78$$ = 0;$i$$78$$ < $keys$$4$$.length;$i$$78$$++) {
    var $key$$60$$ = $keys$$4$$[$i$$78$$], $value$$88$$ = this.get($key$$60$$);
    $f$$42$$.call($opt_obj$$40$$, $value$$88$$, $key$$60$$, this);
  }
};
$JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
  return new $goog$structs$Map$$(this);
};
function $goog$structs$Map$hasKey_$$($obj$$86$$, $key$$64$$) {
  return Object.prototype.hasOwnProperty.call($obj$$86$$, $key$$64$$);
}
;function $goog$structs$getValues$$($col$$1$$) {
  if ("function" == typeof $col$$1$$.$getValues$) {
    return $col$$1$$.$getValues$();
  }
  if ($goog$isString$$($col$$1$$)) {
    return $col$$1$$.split("");
  }
  if ($goog$isArrayLike$$($col$$1$$)) {
    for (var $rv$$15$$ = [], $l$$18$$ = $col$$1$$.length, $i$$86$$ = 0;$i$$86$$ < $l$$18$$;$i$$86$$++) {
      $rv$$15$$.push($col$$1$$[$i$$86$$]);
    }
    return $rv$$15$$;
  }
  return $goog$object$getValues$$($col$$1$$);
}
;function $goog$async$throwException$$($exception$$1$$) {
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
    for (var $i$$98$$ = 0;$i$$98$$ < $workItems$$.length;$i$$98$$++) {
      var $workItem$$ = $workItems$$[$i$$98$$];
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
    $resolver$$1$$.call($opt_context$$8$$, function($value$$95$$) {
      $JSCompiler_StaticMethods_resolve_$$($self$$1$$, $goog$Promise$State_$FULFILLED$$, $value$$95$$);
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
      var $JSCompiler_StaticMethods_cancelChild_$self$$inline_124$$ = $JSCompiler_StaticMethods_cancelInternal_$self$$.$parent_$;
      if ($JSCompiler_StaticMethods_cancelChild_$self$$inline_124$$.$callbackEntries_$) {
        for (var $callbackEntry$$inline_786_childCount$$inline_127$$ = 0, $childIndex$$inline_128$$ = -1, $i$$inline_129$$ = 0, $child$$inline_131_entry$$inline_130$$;$child$$inline_131_entry$$inline_130$$ = $JSCompiler_StaticMethods_cancelChild_$self$$inline_124$$.$callbackEntries_$[$i$$inline_129$$];$i$$inline_129$$++) {
          if ($child$$inline_131_entry$$inline_130$$ = $child$$inline_131_entry$$inline_130$$.$child$) {
            if ($callbackEntry$$inline_786_childCount$$inline_127$$++, $child$$inline_131_entry$$inline_130$$ == $JSCompiler_StaticMethods_cancelInternal_$self$$ && ($childIndex$$inline_128$$ = $i$$inline_129$$), 0 <= $childIndex$$inline_128$$ && 1 < $callbackEntry$$inline_786_childCount$$inline_127$$) {
              break;
            }
          }
        }
        0 <= $childIndex$$inline_128$$ && ($JSCompiler_StaticMethods_cancelChild_$self$$inline_124$$.$state_$ == $goog$Promise$State_$PENDING$$ && 1 == $callbackEntry$$inline_786_childCount$$inline_127$$ ? $JSCompiler_StaticMethods_cancelInternal_$$($JSCompiler_StaticMethods_cancelChild_$self$$inline_124$$, $err$$3$$) : ($callbackEntry$$inline_786_childCount$$inline_127$$ = $JSCompiler_StaticMethods_cancelChild_$self$$inline_124$$.$callbackEntries_$.splice($childIndex$$inline_128$$, 1)[0], $goog$Promise$State_$REJECTED$$ == 
        $goog$Promise$State_$FULFILLED$$ ? $callbackEntry$$inline_786_childCount$$inline_127$$.$onFulfilled$($err$$3$$) : ($JSCompiler_StaticMethods_removeUnhandledRejection_$$($JSCompiler_StaticMethods_cancelChild_$self$$inline_124$$), $callbackEntry$$inline_786_childCount$$inline_127$$.$onRejected$($err$$3$$))));
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
    $callbackEntry$$2$$.$onFulfilled$ = $onFulfilled$$ ? function($value$$98$$) {
      try {
        var $result$$14$$ = $onFulfilled$$.call($opt_context$$12$$, $value$$98$$);
        $resolve$$6$$($result$$14$$);
      } catch ($err$$5$$) {
        $reject$$6$$($err$$5$$);
      }
    } : $resolve$$6$$;
    $callbackEntry$$2$$.$onRejected$ = $onRejected$$1$$ ? function($reason$$3$$) {
      try {
        var $result$$15$$ = $onRejected$$1$$.call($opt_context$$12$$, $reason$$3$$);
        !$goog$isDef$$($result$$15$$) && $reason$$3$$ instanceof $goog$Promise$CancellationError$$ ? $reject$$6$$($reason$$3$$) : $resolve$$6$$($result$$15$$);
      } catch ($err$$6$$) {
        $reject$$6$$($err$$6$$);
      }
    } : $reject$$6$$;
  });
  $callbackEntry$$2$$.$child$.$parent_$ = $JSCompiler_StaticMethods_addChildPromise_$self$$;
  $JSCompiler_StaticMethods_addCallbackEntry_$$($JSCompiler_StaticMethods_addChildPromise_$self$$, $callbackEntry$$2$$);
  return $callbackEntry$$2$$.$child$;
}
$goog$Promise$$.prototype.$unblockAndFulfill_$ = function $$goog$Promise$$$$$unblockAndFulfill_$$($value$$99$$) {
  $goog$asserts$assert$$(1 == this.$state_$);
  this.$state_$ = $goog$Promise$State_$PENDING$$;
  $JSCompiler_StaticMethods_resolve_$$(this, $goog$Promise$State_$FULFILLED$$, $value$$99$$);
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
  function $resolve$$7$$($value$$100$$) {
    $called$$1$$ || ($called$$1$$ = !0, $JSCompiler_StaticMethods_tryThen_$self$$.$unblockAndFulfill_$($value$$100$$));
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
    for (var $i$$103$$ = 0;$i$$103$$ < $entries$$.length;$i$$103$$++) {
      this.$currentStep_$++;
      var $callbackEntry$$inline_791$$ = $entries$$[$i$$103$$], $result$$inline_793$$ = this.$result_$;
      this.$state_$ == $goog$Promise$State_$FULFILLED$$ ? $callbackEntry$$inline_791$$.$onFulfilled$($result$$inline_793$$) : ($JSCompiler_StaticMethods_removeUnhandledRejection_$$(this), $callbackEntry$$inline_791$$.$onRejected$($result$$inline_793$$));
    }
  }
  this.$executing_$ = !1;
};
function $JSCompiler_StaticMethods_addStackTrace_$$($JSCompiler_StaticMethods_addStackTrace_$self$$, $err$$7$$) {
  if ($goog$isString$$($err$$7$$.stack)) {
    var $trace$$ = $err$$7$$.stack.split("\n", 4)[3], $message$$24$$ = $err$$7$$.message, $message$$24$$ = $message$$24$$ + Array(11 - $message$$24$$.length).join(" ");
    $JSCompiler_StaticMethods_addStackTrace_$self$$.$stack_$.push($message$$24$$ + $trace$$);
  }
}
function $JSCompiler_StaticMethods_removeUnhandledRejection_$$($JSCompiler_StaticMethods_removeUnhandledRejection_$self_p$$) {
  for (;$JSCompiler_StaticMethods_removeUnhandledRejection_$self_p$$ && $JSCompiler_StaticMethods_removeUnhandledRejection_$self_p$$.$hadUnhandledRejection_$;$JSCompiler_StaticMethods_removeUnhandledRejection_$self_p$$ = $JSCompiler_StaticMethods_removeUnhandledRejection_$self_p$$.$parent_$) {
    $JSCompiler_StaticMethods_removeUnhandledRejection_$self_p$$.$hadUnhandledRejection_$ = !1;
  }
}
function $goog$Promise$addUnhandledRejection_$$($promise$$6$$, $reason$$6$$) {
  $promise$$6$$.$hadUnhandledRejection_$ = !0;
  $goog$async$run$$(function() {
    if ($promise$$6$$.$hadUnhandledRejection_$) {
      if ($reason$$6$$ && $goog$isString$$($reason$$6$$.stack) && $promise$$6$$.$stack_$.length) {
        for (var $longTrace$$inline_136$$ = ["Promise trace:"], $promise$$inline_137$$ = $promise$$6$$;$promise$$inline_137$$;$promise$$inline_137$$ = $promise$$inline_137$$.$parent_$) {
          for (var $i$$inline_138$$ = $promise$$6$$.$currentStep_$;0 <= $i$$inline_138$$;$i$$inline_138$$--) {
            $longTrace$$inline_136$$.push($promise$$inline_137$$.$stack_$[$i$$inline_138$$]);
          }
          $longTrace$$inline_136$$.push("Value: [" + ($promise$$inline_137$$.$state_$ == $goog$Promise$State_$REJECTED$$ ? "REJECTED" : "FULFILLED") + "] <" + String($promise$$inline_137$$.$result_$) + ">");
        }
        $reason$$6$$.stack += "\n\n" + $longTrace$$inline_136$$.join("\n");
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
var $goog$userAgent$OPERA$$ = $goog$labs$userAgent$util$matchUserAgent$$("Opera") || $goog$labs$userAgent$util$matchUserAgent$$("OPR"), $goog$userAgent$IE$$ = $goog$labs$userAgent$util$matchUserAgent$$("Trident") || $goog$labs$userAgent$util$matchUserAgent$$("MSIE"), $goog$userAgent$GECKO$$ = $goog$labs$userAgent$util$matchUserAgent$$("Gecko") && !$goog$labs$userAgent$util$matchUserAgent$$("WebKit") && !($goog$labs$userAgent$util$matchUserAgent$$("Trident") || $goog$labs$userAgent$util$matchUserAgent$$("MSIE")), 
$goog$userAgent$WEBKIT$$ = $goog$labs$userAgent$util$matchUserAgent$$("WebKit"), $ua$$inline_140$$ = $goog$labs$userAgent$util$userAgent_$$, $goog$userAgent$IPHONE$$ = !!$ua$$inline_140$$ && -1 != $ua$$inline_140$$.indexOf("iPhone");
function $goog$userAgent$getDocumentMode_$$() {
  var $doc$$5$$ = $goog$global$$.document;
  return $doc$$5$$ ? $doc$$5$$.documentMode : void 0;
}
var $goog$userAgent$VERSION$$ = function() {
  var $arr$$75_operaVersion_version$$11$$ = "", $docMode_re$$2$$;
  if ($goog$userAgent$OPERA$$ && $goog$global$$.opera) {
    return $arr$$75_operaVersion_version$$11$$ = $goog$global$$.opera.version, $goog$isFunction$$($arr$$75_operaVersion_version$$11$$) ? $arr$$75_operaVersion_version$$11$$() : $arr$$75_operaVersion_version$$11$$;
  }
  $goog$userAgent$GECKO$$ ? $docMode_re$$2$$ = /rv\:([^\);]+)(\)|;)/ : $goog$userAgent$IE$$ ? $docMode_re$$2$$ = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : $goog$userAgent$WEBKIT$$ && ($docMode_re$$2$$ = /WebKit\/(\S+)/);
  $docMode_re$$2$$ && ($arr$$75_operaVersion_version$$11$$ = ($arr$$75_operaVersion_version$$11$$ = $docMode_re$$2$$.exec($goog$labs$userAgent$util$userAgent_$$)) ? $arr$$75_operaVersion_version$$11$$[1] : "");
  return $goog$userAgent$IE$$ && ($docMode_re$$2$$ = $goog$userAgent$getDocumentMode_$$(), $docMode_re$$2$$ > parseFloat($arr$$75_operaVersion_version$$11$$)) ? String($docMode_re$$2$$) : $arr$$75_operaVersion_version$$11$$;
}(), $goog$userAgent$isVersionOrHigherCache_$$ = {};
function $goog$userAgent$isVersionOrHigher$$($version$$12$$) {
  var $JSCompiler_temp$$54_order$$inline_144$$;
  if (!($JSCompiler_temp$$54_order$$inline_144$$ = $goog$userAgent$isVersionOrHigherCache_$$[$version$$12$$])) {
    $JSCompiler_temp$$54_order$$inline_144$$ = 0;
    for (var $v1Subs$$inline_145$$ = $goog$string$trim$$(String($goog$userAgent$VERSION$$)).split("."), $v2Subs$$inline_146$$ = $goog$string$trim$$(String($version$$12$$)).split("."), $subCount$$inline_147$$ = Math.max($v1Subs$$inline_145$$.length, $v2Subs$$inline_146$$.length), $subIdx$$inline_148$$ = 0;0 == $JSCompiler_temp$$54_order$$inline_144$$ && $subIdx$$inline_148$$ < $subCount$$inline_147$$;$subIdx$$inline_148$$++) {
      var $v1Sub$$inline_149$$ = $v1Subs$$inline_145$$[$subIdx$$inline_148$$] || "", $v2Sub$$inline_150$$ = $v2Subs$$inline_146$$[$subIdx$$inline_148$$] || "", $v1CompParser$$inline_151$$ = RegExp("(\\d*)(\\D*)", "g"), $v2CompParser$$inline_152$$ = RegExp("(\\d*)(\\D*)", "g");
      do {
        var $v1Comp$$inline_153$$ = $v1CompParser$$inline_151$$.exec($v1Sub$$inline_149$$) || ["", "", ""], $v2Comp$$inline_154$$ = $v2CompParser$$inline_152$$.exec($v2Sub$$inline_150$$) || ["", "", ""];
        if (0 == $v1Comp$$inline_153$$[0].length && 0 == $v2Comp$$inline_154$$[0].length) {
          break;
        }
        $JSCompiler_temp$$54_order$$inline_144$$ = $goog$string$compareElements_$$(0 == $v1Comp$$inline_153$$[1].length ? 0 : parseInt($v1Comp$$inline_153$$[1], 10), 0 == $v2Comp$$inline_154$$[1].length ? 0 : parseInt($v2Comp$$inline_154$$[1], 10)) || $goog$string$compareElements_$$(0 == $v1Comp$$inline_153$$[2].length, 0 == $v2Comp$$inline_154$$[2].length) || $goog$string$compareElements_$$($v1Comp$$inline_153$$[2], $v2Comp$$inline_154$$[2]);
      } while (0 == $JSCompiler_temp$$54_order$$inline_144$$);
    }
    $JSCompiler_temp$$54_order$$inline_144$$ = $goog$userAgent$isVersionOrHigherCache_$$[$version$$12$$] = 0 <= $JSCompiler_temp$$54_order$$inline_144$$;
  }
  return $JSCompiler_temp$$54_order$$inline_144$$;
}
var $doc$$inline_156$$ = $goog$global$$.document, $goog$userAgent$DOCUMENT_MODE$$ = $doc$$inline_156$$ && $goog$userAgent$IE$$ ? $goog$userAgent$getDocumentMode_$$() || ("CSS1Compat" == $doc$$inline_156$$.compatMode ? parseInt($goog$userAgent$VERSION$$, 10) : 5) : void 0;
function $goog$debug$getStacktrace$$($opt_fn$$5$$) {
  var $stack$$3$$;
  $stack$$3$$ || ($stack$$3$$ = $goog$debug$getStacktraceHelper_$$($opt_fn$$5$$ || arguments.callee.caller, []));
  return $stack$$3$$;
}
function $goog$debug$getStacktraceHelper_$$($fn$$11$$, $visited$$) {
  var $sb$$9$$ = [];
  if (0 <= $goog$array$indexOf$$($visited$$, $fn$$11$$)) {
    $sb$$9$$.push("[...circular reference...]");
  } else {
    if ($fn$$11$$ && 50 > $visited$$.length) {
      $sb$$9$$.push($goog$debug$getFunctionName$$($fn$$11$$) + "(");
      for (var $args$$13$$ = $fn$$11$$.arguments, $i$$106$$ = 0;$args$$13$$ && $i$$106$$ < $args$$13$$.length;$i$$106$$++) {
        0 < $i$$106$$ && $sb$$9$$.push(", ");
        var $arg$$5_argDesc$$;
        $arg$$5_argDesc$$ = $args$$13$$[$i$$106$$];
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
function $goog$debug$Logger$Level$$($name$$60$$, $value$$101$$) {
  this.name = $name$$60$$;
  this.value = $value$$101$$;
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
$JSCompiler_prototypeAlias$$.log = function $$JSCompiler_prototypeAlias$$$log$($level$$15_logRecord$$inline_159$$, $msg$$5_msg$$inline_795_target$$inline_160$$, $JSCompiler_StaticMethods_callPublish_$self$$inline_797_opt_exception$$) {
  if ($level$$15_logRecord$$inline_159$$.value >= $JSCompiler_StaticMethods_getEffectiveLevel$$(this).value) {
    for ($goog$isFunction$$($msg$$5_msg$$inline_795_target$$inline_160$$) && ($msg$$5_msg$$inline_795_target$$inline_160$$ = $msg$$5_msg$$inline_795_target$$inline_160$$()), $level$$15_logRecord$$inline_159$$ = this.$getLogRecord$($level$$15_logRecord$$inline_159$$, $msg$$5_msg$$inline_795_target$$inline_160$$, $JSCompiler_StaticMethods_callPublish_$self$$inline_797_opt_exception$$, $goog$debug$Logger$$.prototype.log), $msg$$5_msg$$inline_795_target$$inline_160$$ = "log:" + $level$$15_logRecord$$inline_159$$.getMessage(), 
    $goog$global$$.console && ($goog$global$$.console.timeStamp ? $goog$global$$.console.timeStamp($msg$$5_msg$$inline_795_target$$inline_160$$) : $goog$global$$.console.markTimeline && $goog$global$$.console.markTimeline($msg$$5_msg$$inline_795_target$$inline_160$$)), $goog$global$$.msWriteProfilerMark && $goog$global$$.msWriteProfilerMark($msg$$5_msg$$inline_795_target$$inline_160$$), $msg$$5_msg$$inline_795_target$$inline_160$$ = this;$msg$$5_msg$$inline_795_target$$inline_160$$;) {
      $JSCompiler_StaticMethods_callPublish_$self$$inline_797_opt_exception$$ = $msg$$5_msg$$inline_795_target$$inline_160$$;
      var $logRecord$$inline_798$$ = $level$$15_logRecord$$inline_159$$;
      if ($JSCompiler_StaticMethods_callPublish_$self$$inline_797_opt_exception$$.$handlers_$) {
        for (var $i$$inline_799$$ = 0, $handler$$inline_800$$ = void 0;$handler$$inline_800$$ = $JSCompiler_StaticMethods_callPublish_$self$$inline_797_opt_exception$$.$handlers_$[$i$$inline_799$$];$i$$inline_799$$++) {
          $handler$$inline_800$$($logRecord$$inline_798$$);
        }
      }
      $msg$$5_msg$$inline_795_target$$inline_160$$ = $msg$$5_msg$$inline_795_target$$inline_160$$.getParent();
    }
  }
};
$JSCompiler_prototypeAlias$$.$getLogRecord$ = function $$JSCompiler_prototypeAlias$$$$getLogRecord$$($level$$16_logRecord$$, $msg$$6_threwError$$inline_806$$, $opt_exception$$1$$, $opt_fn$$inline_174_opt_fnStackContext$$) {
  $level$$16_logRecord$$ = new $goog$debug$LogRecord$$($level$$16_logRecord$$, String($msg$$6_threwError$$inline_806$$), this.$name_$);
  if ($opt_exception$$1$$) {
    $level$$16_logRecord$$.$exception_$ = $opt_exception$$1$$;
    var $JSCompiler_inline_result$$25$$;
    $opt_fn$$inline_174_opt_fnStackContext$$ = $opt_fn$$inline_174_opt_fnStackContext$$ || $goog$debug$Logger$$.prototype.$getLogRecord$;
    try {
      var $e$$inline_175$$;
      var $href$$inline_803$$ = $goog$getObjectByName$$("window.location.href");
      if ($goog$isString$$($opt_exception$$1$$)) {
        $e$$inline_175$$ = {message:$opt_exception$$1$$, name:"Unknown error", lineNumber:"Not available", fileName:$href$$inline_803$$, stack:"Not available"};
      } else {
        var $lineNumber$$inline_804$$, $fileName$$inline_805$$;
        $msg$$6_threwError$$inline_806$$ = !1;
        try {
          $lineNumber$$inline_804$$ = $opt_exception$$1$$.lineNumber || $opt_exception$$1$$.$line$ || "Not available";
        } catch ($e$$inline_807$$) {
          $lineNumber$$inline_804$$ = "Not available", $msg$$6_threwError$$inline_806$$ = !0;
        }
        try {
          $fileName$$inline_805$$ = $opt_exception$$1$$.fileName || $opt_exception$$1$$.filename || $opt_exception$$1$$.sourceURL || $goog$global$$.$googDebugFname || $href$$inline_803$$;
        } catch ($e$$inline_808$$) {
          $fileName$$inline_805$$ = "Not available", $msg$$6_threwError$$inline_806$$ = !0;
        }
        $e$$inline_175$$ = !$msg$$6_threwError$$inline_806$$ && $opt_exception$$1$$.lineNumber && $opt_exception$$1$$.fileName && $opt_exception$$1$$.stack && $opt_exception$$1$$.message && $opt_exception$$1$$.name ? $opt_exception$$1$$ : {message:$opt_exception$$1$$.message || "Not available", name:$opt_exception$$1$$.name || "UnknownError", lineNumber:$lineNumber$$inline_804$$, fileName:$fileName$$inline_805$$, stack:$opt_exception$$1$$.stack || "Not available"};
      }
      $JSCompiler_inline_result$$25$$ = "Message: " + $goog$string$htmlEscape$$($e$$inline_175$$.message) + '\nUrl: <a href="view-source:' + $e$$inline_175$$.fileName + '" target="_new">' + $e$$inline_175$$.fileName + "</a>\nLine: " + $e$$inline_175$$.lineNumber + "\n\nBrowser stack:\n" + $goog$string$htmlEscape$$($e$$inline_175$$.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + $goog$string$htmlEscape$$($goog$debug$getStacktrace$$($opt_fn$$inline_174_opt_fnStackContext$$) + "-> ");
    } catch ($e2$$inline_176$$) {
      $JSCompiler_inline_result$$25$$ = "Exception trying to expose exception! You win, we lose. " + $e2$$inline_176$$;
    }
    $level$$16_logRecord$$.$exceptionText_$ = $JSCompiler_inline_result$$25$$;
  }
  return $level$$16_logRecord$$;
};
$JSCompiler_prototypeAlias$$.info = function $$JSCompiler_prototypeAlias$$$info$($msg$$10$$, $opt_exception$$5$$) {
  this.log($goog$debug$Logger$Level$INFO$$, $msg$$10$$, $opt_exception$$5$$);
};
var $goog$debug$LogManager$loggers_$$ = {}, $goog$debug$LogManager$rootLogger_$$ = null;
function $goog$debug$LogManager$getLogger$$($name$$64$$) {
  $goog$debug$LogManager$rootLogger_$$ || ($goog$debug$LogManager$rootLogger_$$ = new $goog$debug$Logger$$(""), $goog$debug$LogManager$loggers_$$[""] = $goog$debug$LogManager$rootLogger_$$, $goog$debug$LogManager$rootLogger_$$.$setLevel$($goog$debug$Logger$Level$CONFIG$$));
  var $JSCompiler_temp$$6_logger$$inline_183$$;
  if (!($JSCompiler_temp$$6_logger$$inline_183$$ = $goog$debug$LogManager$loggers_$$[$name$$64$$])) {
    $JSCompiler_temp$$6_logger$$inline_183$$ = new $goog$debug$Logger$$($name$$64$$);
    var $lastDotIndex$$inline_184_parentLogger$$inline_186$$ = $name$$64$$.lastIndexOf("."), $leafName$$inline_185$$ = $name$$64$$.substr($lastDotIndex$$inline_184_parentLogger$$inline_186$$ + 1), $lastDotIndex$$inline_184_parentLogger$$inline_186$$ = $goog$debug$LogManager$getLogger$$($name$$64$$.substr(0, $lastDotIndex$$inline_184_parentLogger$$inline_186$$));
    $lastDotIndex$$inline_184_parentLogger$$inline_186$$.$getChildren$()[$leafName$$inline_185$$] = $JSCompiler_temp$$6_logger$$inline_183$$;
    $JSCompiler_temp$$6_logger$$inline_183$$.$parent_$ = $lastDotIndex$$inline_184_parentLogger$$inline_186$$;
    $goog$debug$LogManager$loggers_$$[$name$$64$$] = $JSCompiler_temp$$6_logger$$inline_183$$;
  }
  return $JSCompiler_temp$$6_logger$$inline_183$$;
}
;var $goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ = !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$, $goog$dom$BrowserFeature$CAN_USE_CHILDREN_ATTRIBUTE$$ = !$goog$userAgent$GECKO$$ && !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$ || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersionOrHigher$$("1.9.1");
$goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("9");
function $goog$dom$getDomHelper$$($opt_element$$10$$) {
  return $opt_element$$10$$ ? new $goog$dom$DomHelper$$($goog$dom$getOwnerDocument$$($opt_element$$10$$)) : $goog$dom$defaultDomHelper_$$ || ($goog$dom$defaultDomHelper_$$ = new $goog$dom$DomHelper$$);
}
function $goog$dom$setProperties$$($element$$38$$, $properties$$7$$) {
  $goog$object$forEach$$($properties$$7$$, function($val$$34$$, $key$$68$$) {
    "style" == $key$$68$$ ? $element$$38$$.style.cssText = $val$$34$$ : "class" == $key$$68$$ ? $element$$38$$.className = $val$$34$$ : "for" == $key$$68$$ ? $element$$38$$.htmlFor = $val$$34$$ : $key$$68$$ in $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ ? $element$$38$$.setAttribute($goog$dom$DIRECT_ATTRIBUTE_MAP_$$[$key$$68$$], $val$$34$$) : 0 == $key$$68$$.lastIndexOf("aria-", 0) || 0 == $key$$68$$.lastIndexOf("data-", 0) ? $element$$38$$.setAttribute($key$$68$$, $val$$34$$) : $element$$38$$[$key$$68$$] = 
    $val$$34$$;
  });
}
var $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function $goog$dom$createDom$$($tagName$$6$$, $opt_attributes$$2$$, $var_args$$89$$) {
  var $args$$inline_191$$ = arguments, $doc$$inline_192$$ = document, $element$$inline_197_tagName$$inline_193_tagNameArr$$inline_195$$ = $args$$inline_191$$[0], $attributes$$inline_194$$ = $args$$inline_191$$[1];
  if (!$goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ && $attributes$$inline_194$$ && ($attributes$$inline_194$$.name || $attributes$$inline_194$$.type)) {
    $element$$inline_197_tagName$$inline_193_tagNameArr$$inline_195$$ = ["<", $element$$inline_197_tagName$$inline_193_tagNameArr$$inline_195$$];
    $attributes$$inline_194$$.name && $element$$inline_197_tagName$$inline_193_tagNameArr$$inline_195$$.push(' name="', $goog$string$htmlEscape$$($attributes$$inline_194$$.name), '"');
    if ($attributes$$inline_194$$.type) {
      $element$$inline_197_tagName$$inline_193_tagNameArr$$inline_195$$.push(' type="', $goog$string$htmlEscape$$($attributes$$inline_194$$.type), '"');
      var $clone$$inline_196$$ = {};
      $goog$object$extend$$($clone$$inline_196$$, $attributes$$inline_194$$);
      delete $clone$$inline_196$$.type;
      $attributes$$inline_194$$ = $clone$$inline_196$$;
    }
    $element$$inline_197_tagName$$inline_193_tagNameArr$$inline_195$$.push(">");
    $element$$inline_197_tagName$$inline_193_tagNameArr$$inline_195$$ = $element$$inline_197_tagName$$inline_193_tagNameArr$$inline_195$$.join("");
  }
  $element$$inline_197_tagName$$inline_193_tagNameArr$$inline_195$$ = $doc$$inline_192$$.createElement($element$$inline_197_tagName$$inline_193_tagNameArr$$inline_195$$);
  $attributes$$inline_194$$ && ($goog$isString$$($attributes$$inline_194$$) ? $element$$inline_197_tagName$$inline_193_tagNameArr$$inline_195$$.className = $attributes$$inline_194$$ : $goog$isArray$$($attributes$$inline_194$$) ? $element$$inline_197_tagName$$inline_193_tagNameArr$$inline_195$$.className = $attributes$$inline_194$$.join(" ") : $goog$dom$setProperties$$($element$$inline_197_tagName$$inline_193_tagNameArr$$inline_195$$, $attributes$$inline_194$$));
  2 < $args$$inline_191$$.length && $goog$dom$append_$$($doc$$inline_192$$, $element$$inline_197_tagName$$inline_193_tagNameArr$$inline_195$$, $args$$inline_191$$);
  return $element$$inline_197_tagName$$inline_193_tagNameArr$$inline_195$$;
}
function $goog$dom$append_$$($doc$$16$$, $parent$$7$$, $args$$15$$) {
  function $childHandler$$($child$$2$$) {
    $child$$2$$ && $parent$$7$$.appendChild($goog$isString$$($child$$2$$) ? $doc$$16$$.createTextNode($child$$2$$) : $child$$2$$);
  }
  for (var $i$$112$$ = 2;$i$$112$$ < $args$$15$$.length;$i$$112$$++) {
    var $arg$$6$$ = $args$$15$$[$i$$112$$];
    !$goog$isArrayLike$$($arg$$6$$) || $goog$isObject$$($arg$$6$$) && 0 < $arg$$6$$.nodeType ? $childHandler$$($arg$$6$$) : $goog$array$forEach$$($goog$dom$isNodeList$$($arg$$6$$) ? $goog$array$toArray$$($arg$$6$$) : $arg$$6$$, $childHandler$$);
  }
}
function $goog$dom$removeNode$$($node$$12$$) {
  $node$$12$$ && $node$$12$$.parentNode && $node$$12$$.parentNode.removeChild($node$$12$$);
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
function $goog$dom$isNodeList$$($val$$35$$) {
  if ($val$$35$$ && "number" == typeof $val$$35$$.length) {
    if ($goog$isObject$$($val$$35$$)) {
      return "function" == typeof $val$$35$$.item || "string" == typeof $val$$35$$.item;
    }
    if ($goog$isFunction$$($val$$35$$)) {
      return "function" == typeof $val$$35$$.item;
    }
  }
  return!1;
}
function $goog$dom$DomHelper$$($opt_document$$1$$) {
  this.$document_$ = $opt_document$$1$$ || $goog$global$$.document || document;
}
$JSCompiler_prototypeAlias$$ = $goog$dom$DomHelper$$.prototype;
$JSCompiler_prototypeAlias$$.$getElement$ = function $$JSCompiler_prototypeAlias$$$$getElement$$($element$$54$$) {
  return $goog$isString$$($element$$54$$) ? this.$document_$.getElementById($element$$54$$) : $element$$54$$;
};
$JSCompiler_prototypeAlias$$.createElement = function $$JSCompiler_prototypeAlias$$$createElement$($name$$67$$) {
  return this.$document_$.createElement($name$$67$$);
};
$JSCompiler_prototypeAlias$$.createTextNode = function $$JSCompiler_prototypeAlias$$$createTextNode$($content$$7$$) {
  return this.$document_$.createTextNode(String($content$$7$$));
};
$JSCompiler_prototypeAlias$$.$getWindow$ = function $$JSCompiler_prototypeAlias$$$$getWindow$$() {
  var $doc$$inline_902$$ = this.$document_$;
  return $doc$$inline_902$$.parentWindow || $doc$$inline_902$$.defaultView;
};
$JSCompiler_prototypeAlias$$.appendChild = function $$JSCompiler_prototypeAlias$$$appendChild$($parent$$8$$, $child$$3$$) {
  $parent$$8$$.appendChild($child$$3$$);
};
$JSCompiler_prototypeAlias$$.$getChildren$ = function $$JSCompiler_prototypeAlias$$$$getChildren$$($element$$41$$) {
  return $goog$dom$BrowserFeature$CAN_USE_CHILDREN_ATTRIBUTE$$ && void 0 != $element$$41$$.children ? $element$$41$$.children : $goog$array$filter$$($element$$41$$.childNodes, function($node$$13$$) {
    return 1 == $node$$13$$.nodeType;
  });
};
$JSCompiler_prototypeAlias$$.contains = $goog$dom$contains$$;
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
  if ($opt_e$$) {
    var $type$$inline_202$$ = this.type = $opt_e$$.type;
    this.target = $opt_e$$.target || $opt_e$$.srcElement;
    this.currentTarget = $opt_currentTarget$$;
    var $relatedTarget$$inline_203$$ = $opt_e$$.relatedTarget;
    $relatedTarget$$inline_203$$ ? $goog$userAgent$GECKO$$ && ($goog$reflect$canAccessProperty$$($relatedTarget$$inline_203$$, "nodeName") || ($relatedTarget$$inline_203$$ = null)) : "mouseover" == $type$$inline_202$$ ? $relatedTarget$$inline_203$$ = $opt_e$$.fromElement : "mouseout" == $type$$inline_202$$ && ($relatedTarget$$inline_203$$ = $opt_e$$.toElement);
    this.relatedTarget = $relatedTarget$$inline_203$$;
    this.offsetX = $goog$userAgent$WEBKIT$$ || void 0 !== $opt_e$$.offsetX ? $opt_e$$.offsetX : $opt_e$$.layerX;
    this.offsetY = $goog$userAgent$WEBKIT$$ || void 0 !== $opt_e$$.offsetY ? $opt_e$$.offsetY : $opt_e$$.layerY;
    this.clientX = void 0 !== $opt_e$$.clientX ? $opt_e$$.clientX : $opt_e$$.pageX;
    this.clientY = void 0 !== $opt_e$$.clientY ? $opt_e$$.clientY : $opt_e$$.pageY;
    this.screenX = $opt_e$$.screenX || 0;
    this.screenY = $opt_e$$.screenY || 0;
    this.button = $opt_e$$.button;
    this.keyCode = $opt_e$$.keyCode || 0;
    this.charCode = $opt_e$$.charCode || ("keypress" == $type$$inline_202$$ ? $opt_e$$.keyCode : 0);
    this.ctrlKey = $opt_e$$.ctrlKey;
    this.altKey = $opt_e$$.altKey;
    this.shiftKey = $opt_e$$.shiftKey;
    this.metaKey = $opt_e$$.metaKey;
    this.state = $opt_e$$.state;
    this.$event_$ = $opt_e$$;
    $opt_e$$.defaultPrevented && this.preventDefault();
  }
}
$goog$inherits$$($goog$events$BrowserEvent$$, $goog$events$Event$$);
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
function $goog$events$listen$$($src$$6$$, $type$$95$$, $listener$$49$$, $opt_capt$$, $opt_handler$$1$$) {
  if ($goog$isArray$$($type$$95$$)) {
    for (var $i$$120$$ = 0;$i$$120$$ < $type$$95$$.length;$i$$120$$++) {
      $goog$events$listen$$($src$$6$$, $type$$95$$[$i$$120$$], $listener$$49$$, $opt_capt$$, $opt_handler$$1$$);
    }
    return null;
  }
  $listener$$49$$ = $goog$events$wrapListener$$($listener$$49$$);
  return $goog$events$Listenable$isImplementedBy$$($src$$6$$) ? $src$$6$$.$listen$($type$$95$$, $listener$$49$$, $opt_capt$$, $opt_handler$$1$$) : $goog$events$listen_$$($src$$6$$, $type$$95$$, $listener$$49$$, !1, $opt_capt$$, $opt_handler$$1$$);
}
function $goog$events$listen_$$($src$$7$$, $type$$96$$, $listener$$50_listenerObj$$4$$, $callOnce$$1_proxy$$1$$, $opt_capt$$1$$, $opt_handler$$2$$) {
  if (!$type$$96$$) {
    throw Error("Invalid event type");
  }
  var $capture$$3$$ = !!$opt_capt$$1$$, $listenerMap$$ = $goog$events$getListenerMap_$$($src$$7$$);
  $listenerMap$$ || ($src$$7$$[$goog$events$LISTENER_MAP_PROP_$$] = $listenerMap$$ = new $goog$events$ListenerMap$$($src$$7$$));
  $listener$$50_listenerObj$$4$$ = $listenerMap$$.add($type$$96$$, $listener$$50_listenerObj$$4$$, $callOnce$$1_proxy$$1$$, $opt_capt$$1$$, $opt_handler$$2$$);
  if ($listener$$50_listenerObj$$4$$.proxy) {
    return $listener$$50_listenerObj$$4$$;
  }
  $callOnce$$1_proxy$$1$$ = $goog$events$getProxy$$();
  $listener$$50_listenerObj$$4$$.proxy = $callOnce$$1_proxy$$1$$;
  $callOnce$$1_proxy$$1$$.src = $src$$7$$;
  $callOnce$$1_proxy$$1$$.$listener$ = $listener$$50_listenerObj$$4$$;
  $src$$7$$.addEventListener ? $src$$7$$.addEventListener($type$$96$$.toString(), $callOnce$$1_proxy$$1$$, $capture$$3$$) : $src$$7$$.attachEvent($goog$events$getOnString_$$($type$$96$$.toString()), $callOnce$$1_proxy$$1$$);
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
function $goog$events$listenOnce$$($src$$8$$, $type$$97$$, $listener$$51$$, $opt_capt$$2$$, $opt_handler$$3$$) {
  if ($goog$isArray$$($type$$97$$)) {
    for (var $i$$121$$ = 0;$i$$121$$ < $type$$97$$.length;$i$$121$$++) {
      $goog$events$listenOnce$$($src$$8$$, $type$$97$$[$i$$121$$], $listener$$51$$, $opt_capt$$2$$, $opt_handler$$3$$);
    }
    return null;
  }
  $listener$$51$$ = $goog$events$wrapListener$$($listener$$51$$);
  return $goog$events$Listenable$isImplementedBy$$($src$$8$$) ? $src$$8$$.$listenOnce$($type$$97$$, $listener$$51$$, $opt_capt$$2$$, $opt_handler$$3$$) : $goog$events$listen_$$($src$$8$$, $type$$97$$, $listener$$51$$, !0, $opt_capt$$2$$, $opt_handler$$3$$);
}
function $goog$events$unlisten$$($listenerMap$$1_src$$10$$, $listenerObj$$5_type$$98$$, $listener$$53$$, $opt_capt$$4$$, $opt_handler$$5$$) {
  if ($goog$isArray$$($listenerObj$$5_type$$98$$)) {
    for (var $i$$122$$ = 0;$i$$122$$ < $listenerObj$$5_type$$98$$.length;$i$$122$$++) {
      $goog$events$unlisten$$($listenerMap$$1_src$$10$$, $listenerObj$$5_type$$98$$[$i$$122$$], $listener$$53$$, $opt_capt$$4$$, $opt_handler$$5$$);
    }
    return null;
  }
  $listener$$53$$ = $goog$events$wrapListener$$($listener$$53$$);
  if ($goog$events$Listenable$isImplementedBy$$($listenerMap$$1_src$$10$$)) {
    return $listenerMap$$1_src$$10$$.$unlisten$($listenerObj$$5_type$$98$$, $listener$$53$$, $opt_capt$$4$$, $opt_handler$$5$$);
  }
  if (!$listenerMap$$1_src$$10$$) {
    return!1;
  }
  if ($listenerMap$$1_src$$10$$ = $goog$events$getListenerMap_$$($listenerMap$$1_src$$10$$)) {
    if ($listenerObj$$5_type$$98$$ = $listenerMap$$1_src$$10$$.$getListener$($listenerObj$$5_type$$98$$, $listener$$53$$, !!$opt_capt$$4$$, $opt_handler$$5$$)) {
      return $goog$events$unlistenByKey$$($listenerObj$$5_type$$98$$);
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
  var $listenerMap$$2_type$$99$$ = $key$$70$$.type, $proxy$$2$$ = $key$$70$$.proxy;
  $src$$11$$.removeEventListener ? $src$$11$$.removeEventListener($listenerMap$$2_type$$99$$, $proxy$$2$$, $key$$70$$.$capture$) : $src$$11$$.detachEvent && $src$$11$$.detachEvent($goog$events$getOnString_$$($listenerMap$$2_type$$99$$), $proxy$$2$$);
  $goog$events$listenerCountEstimate_$$--;
  ($listenerMap$$2_type$$99$$ = $goog$events$getListenerMap_$$($src$$11$$)) ? ($JSCompiler_StaticMethods_removeByKey$$($listenerMap$$2_type$$99$$, $key$$70$$), 0 == $listenerMap$$2_type$$99$$.$typeCount_$ && ($listenerMap$$2_type$$99$$.src = null, $src$$11$$[$goog$events$LISTENER_MAP_PROP_$$] = null)) : $JSCompiler_StaticMethods_markAsRemoved$$($key$$70$$);
  return!0;
}
function $goog$events$getListener$$($listenerMap$$5_src$$13$$, $type$$102$$, $listener$$56$$, $capture$$6_opt_capt$$6$$, $opt_handler$$7$$) {
  $listener$$56$$ = $goog$events$wrapListener$$($listener$$56$$);
  $capture$$6_opt_capt$$6$$ = !!$capture$$6_opt_capt$$6$$;
  return $goog$events$Listenable$isImplementedBy$$($listenerMap$$5_src$$13$$) ? $listenerMap$$5_src$$13$$.$getListener$($type$$102$$, $listener$$56$$, $capture$$6_opt_capt$$6$$, $opt_handler$$7$$) : $listenerMap$$5_src$$13$$ ? ($listenerMap$$5_src$$13$$ = $goog$events$getListenerMap_$$($listenerMap$$5_src$$13$$)) ? $listenerMap$$5_src$$13$$.$getListener$($type$$102$$, $listener$$56$$, $capture$$6_opt_capt$$6$$, $opt_handler$$7$$) : null : null;
}
function $goog$events$getOnString_$$($type$$103$$) {
  return $type$$103$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$$103$$] : $goog$events$onStringMap_$$[$type$$103$$] = "on" + $type$$103$$;
}
function $goog$events$fireListeners_$$($i$$124_listenerMap$$7_obj$$108$$, $listenerArray$$7_type$$105$$, $capture$$8$$, $eventObject$$3$$) {
  var $retval$$ = 1;
  if ($i$$124_listenerMap$$7_obj$$108$$ = $goog$events$getListenerMap_$$($i$$124_listenerMap$$7_obj$$108$$)) {
    if ($listenerArray$$7_type$$105$$ = $i$$124_listenerMap$$7_obj$$108$$.$listeners$[$listenerArray$$7_type$$105$$.toString()]) {
      for ($listenerArray$$7_type$$105$$ = $listenerArray$$7_type$$105$$.concat(), $i$$124_listenerMap$$7_obj$$108$$ = 0;$i$$124_listenerMap$$7_obj$$108$$ < $listenerArray$$7_type$$105$$.length;$i$$124_listenerMap$$7_obj$$108$$++) {
        var $listener$$57$$ = $listenerArray$$7_type$$105$$[$i$$124_listenerMap$$7_obj$$108$$];
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
function $goog$events$dispatchEvent$$($src$$14$$, $e$$40$$) {
  $goog$asserts$assert$$($goog$events$Listenable$isImplementedBy$$($src$$14$$), "Can not use goog.events.dispatchEvent with non-goog.events.Listenable instance.");
  $src$$14$$.dispatchEvent($e$$40$$);
}
function $goog$events$handleBrowserEvent_$$($listener$$59$$, $opt_evt$$) {
  if ($listener$$59$$.$removed$) {
    return!0;
  }
  if (!$goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$) {
    var $ancestors$$1_ieEvent$$ = $opt_evt$$ || $goog$getObjectByName$$("window.event"), $evt$$21$$ = new $goog$events$BrowserEvent$$($ancestors$$1_ieEvent$$, this), $retval$$1$$ = !0;
    if (!(0 > $ancestors$$1_ieEvent$$.keyCode || void 0 != $ancestors$$1_ieEvent$$.returnValue)) {
      a: {
        var $parent$$17_type$$106_useReturnValue$$inline_206$$ = !1;
        if (0 == $ancestors$$1_ieEvent$$.keyCode) {
          try {
            $ancestors$$1_ieEvent$$.keyCode = -1;
            break a;
          } catch ($ex$$inline_207$$) {
            $parent$$17_type$$106_useReturnValue$$inline_206$$ = !0;
          }
        }
        if ($parent$$17_type$$106_useReturnValue$$inline_206$$ || void 0 == $ancestors$$1_ieEvent$$.returnValue) {
          $ancestors$$1_ieEvent$$.returnValue = !0;
        }
      }
      $ancestors$$1_ieEvent$$ = [];
      for ($parent$$17_type$$106_useReturnValue$$inline_206$$ = $evt$$21$$.currentTarget;$parent$$17_type$$106_useReturnValue$$inline_206$$;$parent$$17_type$$106_useReturnValue$$inline_206$$ = $parent$$17_type$$106_useReturnValue$$inline_206$$.parentNode) {
        $ancestors$$1_ieEvent$$.push($parent$$17_type$$106_useReturnValue$$inline_206$$);
      }
      for (var $parent$$17_type$$106_useReturnValue$$inline_206$$ = $listener$$59$$.type, $i$$125$$ = $ancestors$$1_ieEvent$$.length - 1;!$evt$$21$$.$propagationStopped_$ && 0 <= $i$$125$$;$i$$125$$--) {
        $evt$$21$$.currentTarget = $ancestors$$1_ieEvent$$[$i$$125$$], $retval$$1$$ &= $goog$events$fireListeners_$$($ancestors$$1_ieEvent$$[$i$$125$$], $parent$$17_type$$106_useReturnValue$$inline_206$$, !0, $evt$$21$$);
      }
      for ($i$$125$$ = 0;!$evt$$21$$.$propagationStopped_$ && $i$$125$$ < $ancestors$$1_ieEvent$$.length;$i$$125$$++) {
        $evt$$21$$.currentTarget = $ancestors$$1_ieEvent$$[$i$$125$$], $retval$$1$$ &= $goog$events$fireListeners_$$($ancestors$$1_ieEvent$$[$i$$125$$], $parent$$17_type$$106_useReturnValue$$inline_206$$, !1, $evt$$21$$);
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
  return $listener$$60$$[$goog$events$LISTENER_WRAPPER_PROP_$$] || ($listener$$60$$[$goog$events$LISTENER_WRAPPER_PROP_$$] = function $$listener$$60$$$$goog$events$LISTENER_WRAPPER_PROP_$$$($e$$43$$) {
    return $listener$$60$$.handleEvent($e$$43$$);
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
$JSCompiler_prototypeAlias$$.$listen$ = function $$JSCompiler_prototypeAlias$$$$listen$$($src$$16$$, $type$$107_type$$inline_211$$, $opt_fn$$6$$, $opt_capture$$2$$) {
  $goog$isArray$$($type$$107_type$$inline_211$$) || ($type$$107_type$$inline_211$$ && ($goog$events$EventHandler$typeArray_$$[0] = $type$$107_type$$inline_211$$.toString()), $type$$107_type$$inline_211$$ = $goog$events$EventHandler$typeArray_$$);
  for (var $i$$inline_215$$ = 0;$i$$inline_215$$ < $type$$107_type$$inline_211$$.length;$i$$inline_215$$++) {
    var $listenerObj$$inline_216$$ = $goog$events$listen$$($src$$16$$, $type$$107_type$$inline_211$$[$i$$inline_215$$], $opt_fn$$6$$ || this.handleEvent, $opt_capture$$2$$ || !1, this.$handler_$ || this);
    if (!$listenerObj$$inline_216$$) {
      break;
    }
    this.$keys_$[$listenerObj$$inline_216$$.key] = $listenerObj$$inline_216$$;
  }
  return this;
};
$JSCompiler_prototypeAlias$$.$listenOnce$ = function $$JSCompiler_prototypeAlias$$$$listenOnce$$($src$$19$$, $type$$110$$, $opt_fn$$8$$, $opt_capture$$4$$) {
  return $JSCompiler_StaticMethods_listenOnce_$$(this, $src$$19$$, $type$$110$$, $opt_fn$$8$$, $opt_capture$$4$$);
};
function $JSCompiler_StaticMethods_listenOnce_$$($JSCompiler_StaticMethods_listenOnce_$self$$, $listenerObj$$7_src$$21$$, $type$$112$$, $opt_fn$$9$$, $opt_capture$$5$$, $opt_scope$$3$$) {
  if ($goog$isArray$$($type$$112$$)) {
    for (var $i$$127$$ = 0;$i$$127$$ < $type$$112$$.length;$i$$127$$++) {
      $JSCompiler_StaticMethods_listenOnce_$$($JSCompiler_StaticMethods_listenOnce_$self$$, $listenerObj$$7_src$$21$$, $type$$112$$[$i$$127$$], $opt_fn$$9$$, $opt_capture$$5$$, $opt_scope$$3$$);
    }
  } else {
    $listenerObj$$7_src$$21$$ = $goog$events$listenOnce$$($listenerObj$$7_src$$21$$, $type$$112$$, $opt_fn$$9$$ || $JSCompiler_StaticMethods_listenOnce_$self$$.handleEvent, $opt_capture$$5$$, $opt_scope$$3$$ || $JSCompiler_StaticMethods_listenOnce_$self$$.$handler_$ || $JSCompiler_StaticMethods_listenOnce_$self$$);
    if (!$listenerObj$$7_src$$21$$) {
      return $JSCompiler_StaticMethods_listenOnce_$self$$;
    }
    $JSCompiler_StaticMethods_listenOnce_$self$$.$keys_$[$listenerObj$$7_src$$21$$.key] = $listenerObj$$7_src$$21$$;
  }
  return $JSCompiler_StaticMethods_listenOnce_$self$$;
}
$JSCompiler_prototypeAlias$$.$unlisten$ = function $$JSCompiler_prototypeAlias$$$$unlisten$$($listener$$65_src$$25$$, $type$$113$$, $opt_fn$$10$$, $opt_capture$$6$$, $opt_scope$$5$$) {
  if ($goog$isArray$$($type$$113$$)) {
    for (var $i$$128$$ = 0;$i$$128$$ < $type$$113$$.length;$i$$128$$++) {
      this.$unlisten$($listener$$65_src$$25$$, $type$$113$$[$i$$128$$], $opt_fn$$10$$, $opt_capture$$6$$, $opt_scope$$5$$);
    }
  } else {
    if ($listener$$65_src$$25$$ = $goog$events$getListener$$($listener$$65_src$$25$$, $type$$113$$, $opt_fn$$10$$ || this.handleEvent, $opt_capture$$6$$, $opt_scope$$5$$ || this.$handler_$ || this)) {
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
$JSCompiler_prototypeAlias$$.addEventListener = function $$JSCompiler_prototypeAlias$$$addEventListener$($type$$114$$, $handler$$45$$, $opt_capture$$7$$, $opt_handlerScope$$) {
  $goog$events$listen$$(this, $type$$114$$, $handler$$45$$, $opt_capture$$7$$, $opt_handlerScope$$);
};
$JSCompiler_prototypeAlias$$.removeEventListener = function $$JSCompiler_prototypeAlias$$$removeEventListener$($type$$115$$, $handler$$46$$, $opt_capture$$8$$, $opt_handlerScope$$1$$) {
  $goog$events$unlisten$$(this, $type$$115$$, $handler$$46$$, $opt_capture$$8$$, $opt_handlerScope$$1$$);
};
$JSCompiler_prototypeAlias$$.dispatchEvent = function $$JSCompiler_prototypeAlias$$$dispatchEvent$($e$$45_e$$inline_221$$) {
  $JSCompiler_StaticMethods_assertInitialized_$$(this);
  var $ancestorsTree_opt_ancestorsTree$$inline_222$$, $ancestor_target$$inline_220$$ = this.$parentEventTarget_$;
  if ($ancestor_target$$inline_220$$) {
    $ancestorsTree_opt_ancestorsTree$$inline_222$$ = [];
    for (var $ancestorCount_type$$inline_223$$ = 1;$ancestor_target$$inline_220$$;$ancestor_target$$inline_220$$ = $ancestor_target$$inline_220$$.$parentEventTarget_$) {
      $ancestorsTree_opt_ancestorsTree$$inline_222$$.push($ancestor_target$$inline_220$$), $goog$asserts$assert$$(1E3 > ++$ancestorCount_type$$inline_223$$, "infinite loop");
    }
  }
  $ancestor_target$$inline_220$$ = this.$actualEventTarget_$;
  $ancestorCount_type$$inline_223$$ = $e$$45_e$$inline_221$$.type || $e$$45_e$$inline_221$$;
  if ($goog$isString$$($e$$45_e$$inline_221$$)) {
    $e$$45_e$$inline_221$$ = new $goog$events$Event$$($e$$45_e$$inline_221$$, $ancestor_target$$inline_220$$);
  } else {
    if ($e$$45_e$$inline_221$$ instanceof $goog$events$Event$$) {
      $e$$45_e$$inline_221$$.target = $e$$45_e$$inline_221$$.target || $ancestor_target$$inline_220$$;
    } else {
      var $oldEvent$$inline_224_rv$$inline_225$$ = $e$$45_e$$inline_221$$;
      $e$$45_e$$inline_221$$ = new $goog$events$Event$$($ancestorCount_type$$inline_223$$, $ancestor_target$$inline_220$$);
      $goog$object$extend$$($e$$45_e$$inline_221$$, $oldEvent$$inline_224_rv$$inline_225$$);
    }
  }
  var $oldEvent$$inline_224_rv$$inline_225$$ = !0, $currentTarget$$inline_226$$;
  if ($ancestorsTree_opt_ancestorsTree$$inline_222$$) {
    for (var $i$$inline_227$$ = $ancestorsTree_opt_ancestorsTree$$inline_222$$.length - 1;!$e$$45_e$$inline_221$$.$propagationStopped_$ && 0 <= $i$$inline_227$$;$i$$inline_227$$--) {
      $currentTarget$$inline_226$$ = $e$$45_e$$inline_221$$.currentTarget = $ancestorsTree_opt_ancestorsTree$$inline_222$$[$i$$inline_227$$], $oldEvent$$inline_224_rv$$inline_225$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$$inline_226$$, $ancestorCount_type$$inline_223$$, !0, $e$$45_e$$inline_221$$) && $oldEvent$$inline_224_rv$$inline_225$$;
    }
  }
  $e$$45_e$$inline_221$$.$propagationStopped_$ || ($currentTarget$$inline_226$$ = $e$$45_e$$inline_221$$.currentTarget = $ancestor_target$$inline_220$$, $oldEvent$$inline_224_rv$$inline_225$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$$inline_226$$, $ancestorCount_type$$inline_223$$, !0, $e$$45_e$$inline_221$$) && $oldEvent$$inline_224_rv$$inline_225$$, $e$$45_e$$inline_221$$.$propagationStopped_$ || ($oldEvent$$inline_224_rv$$inline_225$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$$inline_226$$, 
  $ancestorCount_type$$inline_223$$, !1, $e$$45_e$$inline_221$$) && $oldEvent$$inline_224_rv$$inline_225$$));
  if ($ancestorsTree_opt_ancestorsTree$$inline_222$$) {
    for ($i$$inline_227$$ = 0;!$e$$45_e$$inline_221$$.$propagationStopped_$ && $i$$inline_227$$ < $ancestorsTree_opt_ancestorsTree$$inline_222$$.length;$i$$inline_227$$++) {
      $currentTarget$$inline_226$$ = $e$$45_e$$inline_221$$.currentTarget = $ancestorsTree_opt_ancestorsTree$$inline_222$$[$i$$inline_227$$], $oldEvent$$inline_224_rv$$inline_225$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$$inline_226$$, $ancestorCount_type$$inline_223$$, !1, $e$$45_e$$inline_221$$) && $oldEvent$$inline_224_rv$$inline_225$$;
    }
  }
  return $oldEvent$$inline_224_rv$$inline_225$$;
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$events$EventTarget$$.$superClass_$.$disposeInternal$.call(this);
  this.removeAllListeners();
  this.$parentEventTarget_$ = null;
};
$JSCompiler_prototypeAlias$$.$listen$ = function $$JSCompiler_prototypeAlias$$$$listen$$($type$$116$$, $listener$$67$$, $opt_useCapture$$40$$, $opt_listenerScope$$4$$) {
  $JSCompiler_StaticMethods_assertInitialized_$$(this);
  return this.$eventTargetListeners_$.add(String($type$$116$$), $listener$$67$$, !1, $opt_useCapture$$40$$, $opt_listenerScope$$4$$);
};
$JSCompiler_prototypeAlias$$.$listenOnce$ = function $$JSCompiler_prototypeAlias$$$$listenOnce$$($type$$117$$, $listener$$68$$, $opt_useCapture$$41$$, $opt_listenerScope$$5$$) {
  return this.$eventTargetListeners_$.add(String($type$$117$$), $listener$$68$$, !0, $opt_useCapture$$41$$, $opt_listenerScope$$5$$);
};
$JSCompiler_prototypeAlias$$.$unlisten$ = function $$JSCompiler_prototypeAlias$$$$unlisten$$($type$$118$$, $listener$$69$$, $opt_useCapture$$42$$, $opt_listenerScope$$6$$) {
  return this.$eventTargetListeners_$.remove(String($type$$118$$), $listener$$69$$, $opt_useCapture$$42$$, $opt_listenerScope$$6$$);
};
$JSCompiler_prototypeAlias$$.removeAllListeners = function $$JSCompiler_prototypeAlias$$$removeAllListeners$($opt_type$$11$$) {
  return this.$eventTargetListeners_$ ? this.$eventTargetListeners_$.removeAll($opt_type$$11$$) : 0;
};
function $JSCompiler_StaticMethods_fireListeners$$($JSCompiler_StaticMethods_fireListeners$self$$, $listenerArray$$8_type$$119$$, $capture$$12$$, $eventObject$$5$$) {
  $listenerArray$$8_type$$119$$ = $JSCompiler_StaticMethods_fireListeners$self$$.$eventTargetListeners_$.$listeners$[String($listenerArray$$8_type$$119$$)];
  if (!$listenerArray$$8_type$$119$$) {
    return!0;
  }
  $listenerArray$$8_type$$119$$ = $listenerArray$$8_type$$119$$.concat();
  for (var $rv$$22$$ = !0, $i$$129$$ = 0;$i$$129$$ < $listenerArray$$8_type$$119$$.length;++$i$$129$$) {
    var $listener$$70$$ = $listenerArray$$8_type$$119$$[$i$$129$$];
    if ($listener$$70$$ && !$listener$$70$$.$removed$ && $listener$$70$$.$capture$ == $capture$$12$$) {
      var $listenerFn$$1$$ = $listener$$70$$.$listener$, $listenerHandler$$1$$ = $listener$$70$$.$handler$ || $listener$$70$$.src;
      $listener$$70$$.$callOnce$ && $JSCompiler_StaticMethods_removeByKey$$($JSCompiler_StaticMethods_fireListeners$self$$.$eventTargetListeners_$, $listener$$70$$);
      $rv$$22$$ = !1 !== $listenerFn$$1$$.call($listenerHandler$$1$$, $eventObject$$5$$) && $rv$$22$$;
    }
  }
  return $rv$$22$$ && !1 != $eventObject$$5$$.$returnValue_$;
}
$JSCompiler_prototypeAlias$$.$getListener$ = function $$JSCompiler_prototypeAlias$$$$getListener$$($type$$121$$, $listener$$71$$, $capture$$14$$, $opt_listenerScope$$7$$) {
  return this.$eventTargetListeners_$.$getListener$(String($type$$121$$), $listener$$71$$, $capture$$14$$, $opt_listenerScope$$7$$);
};
function $JSCompiler_StaticMethods_assertInitialized_$$($JSCompiler_StaticMethods_assertInitialized_$self$$) {
  $goog$asserts$assert$$($JSCompiler_StaticMethods_assertInitialized_$self$$.$eventTargetListeners_$, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
}
;function $goog$log$log$$($msg$$15$$) {
  var $logger$$6$$ = $goog$net$xpc$logger$$;
  $logger$$6$$ && $logger$$6$$.log($goog$debug$Logger$Level$FINEST$$, $msg$$15$$, void 0);
}
function $goog$log$error$$($msg$$16$$, $opt_exception$$11$$) {
  var $logger$$7$$ = $goog$net$xpc$logger$$;
  $logger$$7$$ && $logger$$7$$.log($goog$debug$Logger$Level$SEVERE$$, $msg$$16$$, $opt_exception$$11$$);
}
function $goog$log$warning$$($logger$$8$$, $msg$$17$$, $opt_exception$$12$$) {
  $logger$$8$$ && $logger$$8$$.log($goog$debug$Logger$Level$WARNING$$, $msg$$17$$, $opt_exception$$12$$);
}
function $goog$log$info$$($msg$$18$$) {
  var $logger$$9$$ = $goog$net$xpc$logger$$;
  $logger$$9$$ && $logger$$9$$.info($msg$$18$$, void 0);
}
function $goog$log$fine$$($msg$$19$$) {
  var $logger$$10$$ = $goog$net$xpc$logger$$;
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
function $JSCompiler_StaticMethods_registerService$$($JSCompiler_StaticMethods_registerService$self$$, $serviceName$$2$$, $callback$$61$$) {
  $JSCompiler_StaticMethods_registerService$self$$.$services_$[$serviceName$$2$$] = {$callback$:$callback$$61$$, $objectPayload$:!0};
}
$goog$messaging$AbstractChannel$$.prototype.$disposeInternal$ = function $$goog$messaging$AbstractChannel$$$$$disposeInternal$$() {
  $goog$messaging$AbstractChannel$$.$superClass_$.$disposeInternal$.call(this);
  delete this.logger;
  delete this.$services_$;
  delete this.$defaultService_$;
};
var $goog$net$xpc$TransportNames$$ = {1:"NativeMessagingTransport", 2:"FrameElementMethodTransport", 3:"IframeRelayTransport", 4:"IframePollingTransport", 5:"FlashTransport", 6:"NixTransport", 7:"DirectTransport"}, $goog$net$xpc$UriCfgFields$$ = ["pu", "lru", "pru", "lpu", "ppu"], $goog$net$xpc$channels$$ = {};
function $goog$net$xpc$getRandomString$$($length$$22$$) {
  for (var $chars$$2$$ = $goog$net$xpc$randomStringCharacters_$$, $charsLength$$ = $chars$$2$$.length, $s$$29$$ = "";0 < $length$$22$$--;) {
    $s$$29$$ += $chars$$2$$.charAt(Math.floor(Math.random() * $charsLength$$));
  }
  return $s$$29$$;
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
  } catch ($e$$47$$) {
    $goog$log$error$$("exception caught while attempting setup: " + $e$$47$$);
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
  } catch ($e$$48$$) {
    $goog$log$fine$$("error retrieving peer frames");
  }
  return{};
}
function $JSCompiler_StaticMethods_getPeerFrame_$$($JSCompiler_StaticMethods_getPeerFrame_$self$$, $frameName$$) {
  return $JSCompiler_StaticMethods_getPeerFrames_$$($JSCompiler_StaticMethods_getPeerFrame_$self$$)[$frameName$$];
}
$JSCompiler_prototypeAlias$$.$connect$ = function $$JSCompiler_prototypeAlias$$$$connect$$() {
  if (!this.$disposed_$ && $JSCompiler_StaticMethods_isPeerAvailable$$(this.$channel_$)) {
    $goog$log$fine$$("transport connect called");
    if (!this.$initialized_$) {
      $goog$log$fine$$("initializing...");
      var $frames$$inline_820_name$$inline_242$$ = $JSCompiler_StaticMethods_getMsgFrameName_$$(this);
      this.$msgIframeElm_$ = $JSCompiler_StaticMethods_constructSenderFrame_$$(this, $frames$$inline_820_name$$inline_242$$);
      this.$msgWinObj_$ = this.$getWindow$().frames[$frames$$inline_820_name$$inline_242$$];
      $frames$$inline_820_name$$inline_242$$ = $JSCompiler_StaticMethods_getAckFrameName_$$(this);
      this.$ackIframeElm_$ = $JSCompiler_StaticMethods_constructSenderFrame_$$(this, $frames$$inline_820_name$$inline_242$$);
      this.$ackWinObj_$ = this.$getWindow$().frames[$frames$$inline_820_name$$inline_242$$];
      this.$initialized_$ = !0;
    }
    if ($JSCompiler_StaticMethods_isRcvFrameReady_$$(this, $JSCompiler_StaticMethods_getMsgFrameName_$$(this)) && $JSCompiler_StaticMethods_isRcvFrameReady_$$(this, $JSCompiler_StaticMethods_getAckFrameName_$$(this))) {
      $goog$log$fine$$("foreign frames present"), this.$msgReceiver_$ = new $goog$net$xpc$IframePollingTransport$Receiver$$(this, $JSCompiler_StaticMethods_getPeerFrame_$$(this, $JSCompiler_StaticMethods_getMsgFrameName_$$(this)), $goog$bind$$(this.$processIncomingMsg$, this)), this.$ackReceiver_$ = new $goog$net$xpc$IframePollingTransport$Receiver$$(this, $JSCompiler_StaticMethods_getPeerFrame_$$(this, $JSCompiler_StaticMethods_getAckFrameName_$$(this)), $goog$bind$$(this.$processIncomingAck$, this)), 
      this.$checkLocalFramesPresent_$();
    } else {
      $goog$log$log$$("foreign frames not (yet) present");
      if (1 == $JSCompiler_StaticMethods_getRole$$(this.$channel_$)) {
        this.$reconnectFrame_$ || 0 < this.$pollsBeforeReconnect_$-- || ($goog$log$log$$("Inner peer reconnect triggered."), $JSCompiler_StaticMethods_updateChannelNameAndCatalog$$(this.$channel_$, $goog$net$xpc$getRandomString$$(10)), $goog$log$log$$("switching channels: " + this.$channel_$.name), $JSCompiler_StaticMethods_deconstructSenderFrames_$$(this), this.$initialized_$ = !1, this.$reconnectFrame_$ = $JSCompiler_StaticMethods_constructSenderFrame_$$(this, "googlexpc_reconnect_" + this.$channel_$.name))
        ;
      } else {
        if (0 == $JSCompiler_StaticMethods_getRole$$(this.$channel_$)) {
          $goog$log$log$$("outerPeerReconnect called");
          for (var $frames$$inline_820_name$$inline_242$$ = $JSCompiler_StaticMethods_getPeerFrames_$$(this), $length$$inline_821$$ = $frames$$inline_820_name$$inline_242$$.length, $i$$inline_822$$ = 0;$i$$inline_822$$ < $length$$inline_821$$;$i$$inline_822$$++) {
            var $frameName$$inline_823$$;
            try {
              $frames$$inline_820_name$$inline_242$$[$i$$inline_822$$] && $frames$$inline_820_name$$inline_242$$[$i$$inline_822$$].name && ($frameName$$inline_823$$ = $frames$$inline_820_name$$inline_242$$[$i$$inline_822$$].name);
            } catch ($e$$inline_825$$) {
            }
            if ($frameName$$inline_823$$) {
              var $message$$inline_824$$ = $frameName$$inline_823$$.split("_");
              if (3 == $message$$inline_824$$.length && "googlexpc" == $message$$inline_824$$[0] && "reconnect" == $message$$inline_824$$[1]) {
                this.$channel_$.name = $message$$inline_824$$[2];
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
  var $ifr$$;
  $ifr$$ = document.createElement("iframe");
  var $s$$30$$ = $ifr$$.style;
  $s$$30$$.position = "absolute";
  $s$$30$$.top = "-10px";
  $s$$30$$.left = "10px";
  $s$$30$$.width = "1px";
  $s$$30$$.height = "1px";
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
  } catch ($e$$50$$) {
    return!1;
  }
  return!0;
}
$JSCompiler_prototypeAlias$$.$checkLocalFramesPresent_$ = function $$JSCompiler_prototypeAlias$$$$checkLocalFramesPresent_$$() {
  var $frames$$1$$ = $JSCompiler_StaticMethods_getPeerFrames_$$(this);
  $frames$$1$$[$JSCompiler_StaticMethods_getAckFrameName_$$(this)] && $frames$$1$$[$JSCompiler_StaticMethods_getMsgFrameName_$$(this)] ? (this.$msgSender_$ = new $goog$net$xpc$IframePollingTransport$Sender$$(this.$sendUri_$, this.$msgWinObj_$), this.$ackSender_$ = new $goog$net$xpc$IframePollingTransport$Sender$$(this.$sendUri_$, this.$ackWinObj_$), $goog$log$fine$$("local frames ready"), this.$getWindow$().setTimeout($goog$bind$$(function() {
    this.$msgSender_$.send("SETUP");
    this.$waitForAck_$ = !0;
    $goog$log$fine$$("SETUP sent");
  }, this), 100)) : (this.$checkLocalFramesPresentCb_$ || (this.$checkLocalFramesPresentCb_$ = $goog$bind$$(this.$checkLocalFramesPresent_$, this)), this.$getWindow$().setTimeout(this.$checkLocalFramesPresentCb_$, 100), $goog$log$fine$$("local frames not (yet) present"));
};
function $JSCompiler_StaticMethods_checkIfConnected_$$($JSCompiler_StaticMethods_checkIfConnected_$self$$) {
  if ($JSCompiler_StaticMethods_checkIfConnected_$self$$.$sentConnectionSetupAck_$ && $JSCompiler_StaticMethods_checkIfConnected_$self$$.$rcvdConnectionSetupAck_$) {
    if ($JSCompiler_StaticMethods_checkIfConnected_$self$$.$channel_$.$notifyConnected$(), $JSCompiler_StaticMethods_checkIfConnected_$self$$.$deliveryQueue_$) {
      $goog$log$fine$$("delivering queued messages (" + $JSCompiler_StaticMethods_checkIfConnected_$self$$.$deliveryQueue_$.length + ")");
      for (var $i$$132$$ = 0, $m$$;$i$$132$$ < $JSCompiler_StaticMethods_checkIfConnected_$self$$.$deliveryQueue_$.length;$i$$132$$++) {
        $m$$ = $JSCompiler_StaticMethods_checkIfConnected_$self$$.$deliveryQueue_$[$i$$132$$], $JSCompiler_StaticMethods_checkIfConnected_$self$$.$channel_$.$xpcDeliver$($m$$.$service$, $m$$.$payload$);
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
    var $s$$31$$ = $JSCompiler_StaticMethods_sendNextFrame_$self$$.$sendQueue_$.shift();
    ++$JSCompiler_StaticMethods_sendNextFrame_$self$$.$sequence_$;
    $JSCompiler_StaticMethods_sendNextFrame_$self$$.$msgSender_$.send($JSCompiler_StaticMethods_sendNextFrame_$self$$.$sequence_$ + $s$$31$$);
    $goog$log$log$$("msg sent: " + $JSCompiler_StaticMethods_sendNextFrame_$self$$.$sequence_$ + $s$$31$$);
    $JSCompiler_StaticMethods_sendNextFrame_$self$$.$waitForAck_$ = !0;
  }
}
function $JSCompiler_StaticMethods_deliverPayload_$$($JSCompiler_StaticMethods_deliverPayload_$self$$, $s$$32$$) {
  var $payload$$7_pos$$2$$ = $s$$32$$.indexOf(":"), $service$$3$$ = $s$$32$$.substr(0, $payload$$7_pos$$2$$), $payload$$7_pos$$2$$ = $s$$32$$.substring($payload$$7_pos$$2$$ + 1);
  $JSCompiler_StaticMethods_deliverPayload_$self$$.$channel_$.$isConnected$() ? $JSCompiler_StaticMethods_deliverPayload_$self$$.$channel_$.$xpcDeliver$($service$$3$$, $payload$$7_pos$$2$$) : (($JSCompiler_StaticMethods_deliverPayload_$self$$.$deliveryQueue_$ || ($JSCompiler_StaticMethods_deliverPayload_$self$$.$deliveryQueue_$ = [])).push({$service$:$service$$3$$, $payload$:$payload$$7_pos$$2$$}), $goog$log$log$$("queued delivery"));
}
$JSCompiler_prototypeAlias$$.$MAX_FRAME_LENGTH_$ = 3800;
$JSCompiler_prototypeAlias$$.send = function $$JSCompiler_prototypeAlias$$$send$($service$$4$$, $payload$$8$$) {
  var $frame$$3$$ = $service$$4$$ + ":" + $payload$$8$$;
  if (!$goog$userAgent$IE$$ || $payload$$8$$.length <= this.$MAX_FRAME_LENGTH_$) {
    this.$sendQueue_$.push("|" + $frame$$3$$);
  } else {
    for (var $l$$27$$ = $payload$$8$$.length, $num$$14$$ = Math.ceil($l$$27$$ / this.$MAX_FRAME_LENGTH_$), $pos$$3$$ = 0, $i$$133$$ = 1;$pos$$3$$ < $l$$27$$;) {
      this.$sendQueue_$.push("," + $i$$133$$ + "/" + $num$$14$$ + "|" + $frame$$3$$.substr($pos$$3$$, this.$MAX_FRAME_LENGTH_$)), $i$$133$$++, $pos$$3$$ += this.$MAX_FRAME_LENGTH_$;
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
  var $now_receivers$$1$$ = $goog$net$xpc$IframePollingTransport$receivers_$$, $JSCompiler_StaticMethods_notifyTransportError$self$$inline_252_receiver$$, $rcvd$$ = !1;
  try {
    for (var $i$$134$$ = 0;$JSCompiler_StaticMethods_notifyTransportError$self$$inline_252_receiver$$ = $now_receivers$$1$$[$i$$134$$];$i$$134$$++) {
      var $JSCompiler_temp$$26$$;
      if (!($JSCompiler_temp$$26$$ = $rcvd$$)) {
        var $JSCompiler_StaticMethods_receive$self$$inline_248$$ = $JSCompiler_StaticMethods_notifyTransportError$self$$inline_252_receiver$$, $loc$$inline_249$$ = $JSCompiler_StaticMethods_receive$self$$inline_248$$.$rcvFrame_$.location.href;
        if ($loc$$inline_249$$ != $JSCompiler_StaticMethods_receive$self$$inline_248$$.$currentLoc_$) {
          $JSCompiler_StaticMethods_receive$self$$inline_248$$.$currentLoc_$ = $loc$$inline_249$$;
          var $payload$$inline_250$$ = $loc$$inline_249$$.split("#")[1];
          $payload$$inline_250$$ && ($payload$$inline_250$$ = $payload$$inline_250$$.substr(1), $JSCompiler_StaticMethods_receive$self$$inline_248$$.$cb_$(decodeURIComponent($payload$$inline_250$$)));
          $JSCompiler_temp$$26$$ = !0;
        } else {
          $JSCompiler_temp$$26$$ = !1;
        }
      }
      $rcvd$$ = $JSCompiler_temp$$26$$;
    }
  } catch ($e$$51$$) {
    if ($goog$log$info$$("receive_() failed: " + $e$$51$$), $JSCompiler_StaticMethods_notifyTransportError$self$$inline_252_receiver$$ = $JSCompiler_StaticMethods_notifyTransportError$self$$inline_252_receiver$$.$transport_$.$channel_$, $goog$log$info$$("Transport Error"), $JSCompiler_StaticMethods_notifyTransportError$self$$inline_252_receiver$$.close(), !$now_receivers$$1$$.length) {
      return;
    }
  }
  $now_receivers$$1$$ = $goog$now$$();
  $rcvd$$ && ($goog$net$xpc$IframePollingTransport$lastActivity_$$ = $now_receivers$$1$$);
  $goog$net$xpc$IframePollingTransport$rcvTimer_$$ = window.setTimeout($goog$net$xpc$IframePollingTransport$receiveCb_$$, 1E3 > $now_receivers$$1$$ - $goog$net$xpc$IframePollingTransport$lastActivity_$$ ? 10 : 100);
}, $goog$net$xpc$IframePollingTransport$$);
function $goog$net$xpc$IframePollingTransport$startRcvTimer_$$() {
  $goog$log$fine$$("starting receive-timer");
  $goog$net$xpc$IframePollingTransport$lastActivity_$$ = $goog$now$$();
  $goog$net$xpc$IframePollingTransport$rcvTimer_$$ && window.clearTimeout($goog$net$xpc$IframePollingTransport$rcvTimer_$$);
  $goog$net$xpc$IframePollingTransport$rcvTimer_$$ = window.setTimeout($goog$net$xpc$IframePollingTransport$receiveCb_$$, 10);
}
function $goog$net$xpc$IframePollingTransport$Sender$$($url$$27$$, $windowObj$$) {
  this.$sendUri_$ = $url$$27$$;
  this.$sendFrame_$ = $windowObj$$;
  this.$cycle_$ = 0;
}
$goog$net$xpc$IframePollingTransport$Sender$$.prototype.send = function $$goog$net$xpc$IframePollingTransport$Sender$$$$send$($payload$$9_url$$28$$) {
  this.$cycle_$ = ++this.$cycle_$ % 2;
  $payload$$9_url$$28$$ = this.$sendUri_$ + "#" + this.$cycle_$ + encodeURIComponent($payload$$9_url$$28$$);
  try {
    $goog$userAgent$WEBKIT$$ ? this.$sendFrame_$.location.href = $payload$$9_url$$28$$ : this.$sendFrame_$.location.replace($payload$$9_url$$28$$);
  } catch ($e$$52$$) {
    $goog$log$error$$("sending failed", $e$$52$$);
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
  this.$peerRelayUri_$ = this.$channel_$.$cfg_$.pru;
  this.$peerIframeId_$ = this.$channel_$.$cfg_$.ifrid;
  $goog$userAgent$WEBKIT$$ && $goog$net$xpc$IframeRelayTransport$startCleanupTimer_$$();
}
$goog$inherits$$($goog$net$xpc$IframeRelayTransport$$, $goog$net$xpc$Transport$$);
if ($goog$userAgent$WEBKIT$$) {
  var $goog$net$xpc$IframeRelayTransport$iframeRefs_$$ = [], $goog$net$xpc$IframeRelayTransport$cleanupTimer_$$ = 0, $goog$net$xpc$IframeRelayTransport$startCleanupTimer_$$ = function $$goog$net$xpc$IframeRelayTransport$startCleanupTimer_$$$() {
    $goog$net$xpc$IframeRelayTransport$cleanupTimer_$$ || ($goog$net$xpc$IframeRelayTransport$cleanupTimer_$$ = window.setTimeout(function() {
      $goog$net$xpc$IframeRelayTransport$cleanup_$$();
    }, 1E3));
  }, $goog$net$xpc$IframeRelayTransport$cleanup_$$ = function $$goog$net$xpc$IframeRelayTransport$cleanup_$$$($maxAge_opt_maxAge$$) {
    var $now$$1$$ = $goog$now$$();
    for ($maxAge_opt_maxAge$$ = $maxAge_opt_maxAge$$ || 3E3;$goog$net$xpc$IframeRelayTransport$iframeRefs_$$.length && $now$$1$$ - $goog$net$xpc$IframeRelayTransport$iframeRefs_$$[0].timestamp >= $maxAge_opt_maxAge$$;) {
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
    $fragmentInfo$$ || ($fragmentInfo$$ = $goog$net$xpc$IframeRelayTransport$fragmentMap_$$[$messageIdStr$$] = {$fragments$:[], $received$:0, $expected$:0});
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
    var $div$$2_ifr$$2$$ = $JSCompiler_StaticMethods_send_$self$$.$getWindow$().document.createElement("div"), $html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$;
    $html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$ = new $goog$string$Const$$;
    $html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$.$stringConstValueWithSecurityContract__googStringSecurityPrivate_$ = "this.xpcOnload()";
    var $dirAttribute$$inline_834_opt_attributes$$inline_827$$ = {onload:$html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$};
    if (!$goog$html$SafeHtml$VALID_NAMES_IN_TAG_$$.test("iframe")) {
      throw Error("Invalid tag name <iframe>.");
    }
    if ("iframe" in $goog$html$SafeHtml$NOT_ALLOWED_TAG_NAMES_$$) {
      throw Error("Tag name <iframe> is not allowed for SafeHtml.");
    }
    var $dir$$inline_828_html$$inline_833$$ = null;
    $html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$ = "<iframe";
    if ($dirAttribute$$inline_834_opt_attributes$$inline_827$$) {
      for (var $content$$inline_832_name$$inline_830$$ in $dirAttribute$$inline_834_opt_attributes$$inline_827$$) {
        if (!$goog$html$SafeHtml$VALID_NAMES_IN_TAG_$$.test($content$$inline_832_name$$inline_830$$)) {
          throw Error('Invalid attribute name "' + $content$$inline_832_name$$inline_830$$ + '".');
        }
        var $map$$inline_907_value$$inline_831_value$$inline_906$$ = $dirAttribute$$inline_834_opt_attributes$$inline_827$$[$content$$inline_832_name$$inline_830$$];
        if (null != $map$$inline_907_value$$inline_831_value$$inline_906$$) {
          if ($map$$inline_907_value$$inline_831_value$$inline_906$$ instanceof $goog$string$Const$$) {
            $map$$inline_907_value$$inline_831_value$$inline_906$$ = $goog$string$Const$unwrap$$($map$$inline_907_value$$inline_831_value$$inline_906$$);
          } else {
            if ("style" == $content$$inline_832_name$$inline_830$$.toLowerCase()) {
              if (!$goog$isObject$$($map$$inline_907_value$$inline_831_value$$inline_906$$)) {
                throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof $map$$inline_907_value$$inline_831_value$$inline_906$$ + " given: " + $map$$inline_907_value$$inline_831_value$$inline_906$$);
              }
              if (!($map$$inline_907_value$$inline_831_value$$inline_906$$ instanceof $goog$html$SafeStyle$$)) {
                var $JSCompiler_inline_result$$inline_911_style$$inline_908$$ = "", $name$$inline_909$$ = void 0;
                for ($name$$inline_909$$ in $map$$inline_907_value$$inline_831_value$$inline_906$$) {
                  if (!/^[-_a-zA-Z0-9]+$/.test($name$$inline_909$$)) {
                    throw Error("Name allows only [-_a-zA-Z0-9], got: " + $name$$inline_909$$);
                  }
                  var $value$$inline_910$$ = $map$$inline_907_value$$inline_831_value$$inline_906$$[$name$$inline_909$$];
                  null != $value$$inline_910$$ && ($value$$inline_910$$ instanceof $goog$string$Const$$ ? ($value$$inline_910$$ = $goog$string$Const$unwrap$$($value$$inline_910$$), $goog$asserts$assert$$(!/[{;}]/.test($value$$inline_910$$), "Value does not allow [{;}].")) : $goog$html$SafeStyle$VALUE_RE_$$.test($value$$inline_910$$) || ($goog$asserts$fail$$("String value allows only [-.%_!# a-zA-Z0-9], got: " + $value$$inline_910$$), $value$$inline_910$$ = "zClosurez"), $JSCompiler_inline_result$$inline_911_style$$inline_908$$ += 
                  $name$$inline_909$$ + ":" + $value$$inline_910$$ + ";");
                }
                $JSCompiler_inline_result$$inline_911_style$$inline_908$$ ? ($goog$asserts$assert$$(!/[<>]/.test($JSCompiler_inline_result$$inline_911_style$$inline_908$$), "Forbidden characters in style string: " + $JSCompiler_inline_result$$inline_911_style$$inline_908$$), $map$$inline_907_value$$inline_831_value$$inline_906$$ = $goog$html$SafeStyle$createSafeStyleSecurityPrivateDoNotAccessOrElse_$$($JSCompiler_inline_result$$inline_911_style$$inline_908$$)) : $map$$inline_907_value$$inline_831_value$$inline_906$$ = 
                $goog$html$SafeStyle$EMPTY$$;
              }
              $JSCompiler_inline_result$$inline_911_style$$inline_908$$ = void 0;
              $map$$inline_907_value$$inline_831_value$$inline_906$$ instanceof $goog$html$SafeStyle$$ && $map$$inline_907_value$$inline_831_value$$inline_906$$.constructor === $goog$html$SafeStyle$$ && $map$$inline_907_value$$inline_831_value$$inline_906$$.$SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$ === $goog$html$SafeStyle$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ ? $JSCompiler_inline_result$$inline_911_style$$inline_908$$ = $map$$inline_907_value$$inline_831_value$$inline_906$$.$privateDoNotAccessOrElseSafeStyleWrappedValue_$ : 
              ($goog$asserts$fail$$("expected object of type SafeStyle, got '" + $map$$inline_907_value$$inline_831_value$$inline_906$$ + "'"), $JSCompiler_inline_result$$inline_911_style$$inline_908$$ = "type_error:SafeStyle");
              $map$$inline_907_value$$inline_831_value$$inline_906$$ = $JSCompiler_inline_result$$inline_911_style$$inline_908$$;
            } else {
              if (/^on/i.test($content$$inline_832_name$$inline_830$$)) {
                throw Error('Attribute "' + $content$$inline_832_name$$inline_830$$ + '" requires goog.string.Const value, "' + $map$$inline_907_value$$inline_831_value$$inline_906$$ + '" given.');
              }
              if ($map$$inline_907_value$$inline_831_value$$inline_906$$ instanceof $goog$html$SafeUrl$$) {
                $map$$inline_907_value$$inline_831_value$$inline_906$$ instanceof $goog$html$SafeUrl$$ && $map$$inline_907_value$$inline_831_value$$inline_906$$.constructor === $goog$html$SafeUrl$$ && $map$$inline_907_value$$inline_831_value$$inline_906$$.$SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$ === $goog$html$SafeUrl$TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_$$ ? $map$$inline_907_value$$inline_831_value$$inline_906$$ = $map$$inline_907_value$$inline_831_value$$inline_906$$.$privateDoNotAccessOrElseSafeHtmlWrappedValue_$ : 
                ($goog$asserts$fail$$("expected object of type SafeUrl, got '" + $map$$inline_907_value$$inline_831_value$$inline_906$$ + "'"), $map$$inline_907_value$$inline_831_value$$inline_906$$ = "type_error:SafeUrl");
              } else {
                if ($content$$inline_832_name$$inline_830$$.toLowerCase() in $goog$html$SafeHtml$URL_ATTRIBUTES_$$) {
                  throw Error('Attribute "' + $content$$inline_832_name$$inline_830$$ + '" requires goog.string.Const or goog.html.SafeUrl value, "' + $map$$inline_907_value$$inline_831_value$$inline_906$$ + '" given.');
                }
              }
            }
          }
          $goog$asserts$assert$$($goog$isString$$($map$$inline_907_value$$inline_831_value$$inline_906$$) || $goog$isNumber$$($map$$inline_907_value$$inline_831_value$$inline_906$$), "String or number value expected, got " + typeof $map$$inline_907_value$$inline_831_value$$inline_906$$ + " with value: " + $map$$inline_907_value$$inline_831_value$$inline_906$$);
          $html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$ += " " + $content$$inline_832_name$$inline_830$$ + '="' + $goog$string$htmlEscape$$(String($map$$inline_907_value$$inline_831_value$$inline_906$$)) + '"';
        }
      }
    }
    $content$$inline_832_name$$inline_830$$ = void 0;
    $goog$isDef$$($content$$inline_832_name$$inline_830$$) ? $goog$isArray$$($content$$inline_832_name$$inline_830$$) || ($content$$inline_832_name$$inline_830$$ = [$content$$inline_832_name$$inline_830$$]) : $content$$inline_832_name$$inline_830$$ = [];
    "iframe" in $goog$dom$tags$VOID_TAGS_$$ ? ($goog$asserts$assert$$(!$content$$inline_832_name$$inline_830$$.length, "Void tag <iframe> does not allow content."), $html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$ += ">") : ($dir$$inline_828_html$$inline_833$$ = $goog$html$SafeHtml$concat$$($content$$inline_832_name$$inline_830$$), $html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$ += ">" + $goog$html$SafeHtml$unwrap$$($dir$$inline_828_html$$inline_833$$) + 
    "</iframe>", $dir$$inline_828_html$$inline_833$$ = $dir$$inline_828_html$$inline_833$$.$getDirection$());
    ($dirAttribute$$inline_834_opt_attributes$$inline_827$$ = $dirAttribute$$inline_834_opt_attributes$$inline_827$$ && $dirAttribute$$inline_834_opt_attributes$$inline_827$$.dir) && ($dir$$inline_828_html$$inline_833$$ = /^(ltr|rtl|auto)$/i.test($dirAttribute$$inline_834_opt_attributes$$inline_827$$) ? 0 : null);
    $html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$ = $goog$html$SafeHtml$createSafeHtmlSecurityPrivateDoNotAccessOrElse_$$($html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$, $dir$$inline_828_html$$inline_833$$);
    $div$$2_ifr$$2$$.innerHTML = $goog$html$SafeHtml$unwrap$$($html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$);
    $div$$2_ifr$$2$$ = $div$$2_ifr$$2$$.childNodes[0];
    $div$$2_ifr$$2$$.xpcOnload = $goog$net$xpc$IframeRelayTransport$iframeLoadHandler_$$;
  } else {
    $div$$2_ifr$$2$$ = $JSCompiler_StaticMethods_send_$self$$.$getWindow$().document.createElement("iframe"), $goog$userAgent$WEBKIT$$ ? $goog$net$xpc$IframeRelayTransport$iframeRefs_$$.push({timestamp:$goog$now$$(), $iframeElement$:$div$$2_ifr$$2$$}) : $goog$events$listen$$($div$$2_ifr$$2$$, "load", $goog$net$xpc$IframeRelayTransport$iframeLoadHandler_$$);
  }
  $html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$ = $div$$2_ifr$$2$$.style;
  $html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$.visibility = "hidden";
  $html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$.width = $div$$2_ifr$$2$$.style.height = "0px";
  $html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$.position = "absolute";
  $html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$ = $JSCompiler_StaticMethods_send_$self$$.$peerRelayUri_$;
  $html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$ += "#" + $JSCompiler_StaticMethods_send_$self$$.$channel_$.name;
  $JSCompiler_StaticMethods_send_$self$$.$peerIframeId_$ && ($html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$ += "," + $JSCompiler_StaticMethods_send_$self$$.$peerIframeId_$);
  $html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$ += "|" + $service$$7$$;
  $opt_fragmentIdStr$$ && ($html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$ += "|" + $opt_fragmentIdStr$$);
  $html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$ += ":" + $encodedPayload$$1$$;
  $div$$2_ifr$$2$$.src = $html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$;
  $JSCompiler_StaticMethods_send_$self$$.$getWindow$().document.body.appendChild($div$$2_ifr$$2$$);
  $goog$log$log$$("msg sent: " + $html$$inline_255_result$$inline_829_stringConst$$inline_904_style$$6_url$$29$$);
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
  var $listenWindow$$inline_257$$ = this.$getWindow$();
  if (!$listenWindow$$inline_257$$.nix_setup_complete) {
    var $vbscript$$inline_258$$ = "Class GCXPC____NIXVBS_wrapper\n Private m_Transport\nPrivate m_Auth\nPublic Sub SetTransport(transport)\nIf isEmpty(m_Transport) Then\nSet m_Transport = transport\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\nIf isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub SendMessage(service, payload)\n Call m_Transport." + $goog$net$xpc$NixTransport$NIX_HANDLE_MESSAGE$$ + "(service, payload)\nEnd Sub\nPublic Sub CreateChannel(channel)\n Call m_Transport." + 
    $goog$net$xpc$NixTransport$NIX_CREATE_CHANNEL$$ + "(channel)\nEnd Sub\nPublic Sub GCXPC____NIXVBS_container()\n End Sub\nEnd Class\n Function GCXPC____NIXVBS_get_wrapper(transport, auth)\nDim wrap\nSet wrap = New GCXPC____NIXVBS_wrapper\nwrap.SetTransport transport\nwrap.SetAuth auth\nSet GCXPC____NIXVBS_get_wrapper = wrap\nEnd Function";
    try {
      $listenWindow$$inline_257$$.execScript($vbscript$$inline_258$$, "vbscript"), $listenWindow$$inline_257$$.nix_setup_complete = !0;
    } catch ($e$$inline_259$$) {
      $goog$log$error$$("exception caught while attempting global setup: " + $e$$inline_259$$);
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
    } catch ($e$$55$$) {
      $goog$log$error$$("exception caught while attempting setup: " + $e$$55$$);
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
          $goog$log$error$$("Invalid auth token from other party");
          return;
        }
        this.$nixChannel_$.CreateChannel((0,this.$getWindow$().GCXPC____NIXVBS_get_wrapper)(this, this.$authToken_$));
        this.$localSetupCompleted_$ = !0;
        this.$channel_$.$notifyConnected$();
      }
    } catch ($e$$56$$) {
      $goog$log$error$$("exception caught while attempting setup: " + $e$$56$$);
      return;
    }
    this.$localSetupCompleted_$ || this.$getWindow$().setTimeout($goog$bind$$(this.$attemptInnerSetup_$, this), 100);
  }
};
$JSCompiler_prototypeAlias$$.$createChannel_$ = function $$JSCompiler_prototypeAlias$$$$createChannel_$$($channel$$5$$) {
  "unknown" == typeof $channel$$5$$ && "GCXPC____NIXVBS_container" in $channel$$5$$ || $goog$log$error$$("Invalid NIX channel given to createChannel_");
  this.$nixChannel_$ = $channel$$5$$;
  this.$nixChannel_$.GetAuthToken() != this.$remoteAuthToken_$ ? $goog$log$error$$("Invalid auth token from other party") : this.$channel_$.$notifyConnected$();
};
$JSCompiler_prototypeAlias$$.$handleMessage_$ = function $$JSCompiler_prototypeAlias$$$$handleMessage_$$($serviceName$$7$$, $payload$$14$$) {
  this.$getWindow$().setTimeout($goog$bind$$(function() {
    this.$channel_$.$xpcDeliver$($serviceName$$7$$, $payload$$14$$);
  }, this), 1);
};
$JSCompiler_prototypeAlias$$.send = function $$JSCompiler_prototypeAlias$$$send$($service$$8$$, $payload$$15$$) {
  "unknown" !== typeof this.$nixChannel_$ && $goog$log$error$$("NIX channel not connected");
  this.$nixChannel_$.SendMessage($service$$8$$, $payload$$15$$);
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$net$xpc$NixTransport$$.$superClass_$.$disposeInternal$.call(this);
  this.$nixChannel_$ = null;
};
function $goog$style$setStyle$$($element$$56$$, $style$$7$$) {
  $goog$isString$$($style$$7$$) ? $goog$style$setStyle_$$($element$$56$$, void 0, $style$$7$$) : $goog$object$forEach$$($style$$7$$, $goog$partial$$($goog$style$setStyle_$$, $element$$56$$));
}
function $goog$style$setStyle_$$($element$$57$$, $value$$103$$, $camelStyle$$inline_263_propertyName$$9_style$$8$$) {
  a: {
    if ($camelStyle$$inline_263_propertyName$$9_style$$8$$ = $goog$string$toCamelCase$$($camelStyle$$inline_263_propertyName$$9_style$$8$$), void 0 === $element$$57$$.style[$camelStyle$$inline_263_propertyName$$9_style$$8$$]) {
      var $prefixedStyle$$inline_264$$ = ($goog$userAgent$WEBKIT$$ ? "Webkit" : $goog$userAgent$GECKO$$ ? "Moz" : $goog$userAgent$IE$$ ? "ms" : $goog$userAgent$OPERA$$ ? "O" : null) + $goog$string$toTitleCase$$($camelStyle$$inline_263_propertyName$$9_style$$8$$);
      if (void 0 !== $element$$57$$.style[$prefixedStyle$$inline_264$$]) {
        $camelStyle$$inline_263_propertyName$$9_style$$8$$ = $prefixedStyle$$inline_264$$;
        break a;
      }
    }
  }
  $camelStyle$$inline_263_propertyName$$9_style$$8$$ && ($element$$57$$.style[$camelStyle$$inline_263_propertyName$$9_style$$8$$] = $value$$103$$);
}
function $goog$style$getComputedStyle$$($element$$61$$, $property$$17$$) {
  var $doc$$32_styles$$ = $goog$dom$getOwnerDocument$$($element$$61$$);
  return $doc$$32_styles$$.defaultView && $doc$$32_styles$$.defaultView.getComputedStyle && ($doc$$32_styles$$ = $doc$$32_styles$$.defaultView.getComputedStyle($element$$61$$, null)) ? $doc$$32_styles$$[$property$$17$$] || $doc$$32_styles$$.getPropertyValue($property$$17$$) || "" : "";
}
function $goog$style$getStyle_$$($element$$63$$, $style$$12$$) {
  return $goog$style$getComputedStyle$$($element$$63$$, $style$$12$$) || ($element$$63$$.currentStyle ? $element$$63$$.currentStyle[$style$$12$$] : null) || $element$$63$$.style && $element$$63$$.style[$style$$12$$];
}
function $goog$style$getBoundingClientRect_$$($doc$$35_el$$5$$) {
  var $rect$$5$$;
  try {
    $rect$$5$$ = $doc$$35_el$$5$$.getBoundingClientRect();
  } catch ($e$$57$$) {
    return{left:0, top:0, right:0, bottom:0};
  }
  $goog$userAgent$IE$$ && $doc$$35_el$$5$$.ownerDocument.body && ($doc$$35_el$$5$$ = $doc$$35_el$$5$$.ownerDocument, $rect$$5$$.left -= $doc$$35_el$$5$$.documentElement.clientLeft + $doc$$35_el$$5$$.body.clientLeft, $rect$$5$$.top -= $doc$$35_el$$5$$.documentElement.clientTop + $doc$$35_el$$5$$.body.clientTop);
  return $rect$$5$$;
}
function $goog$style$getOffsetParent$$($element$$74_parent$$19$$) {
  if ($goog$userAgent$IE$$ && !($goog$userAgent$IE$$ && 8 <= $goog$userAgent$DOCUMENT_MODE$$)) {
    return $element$$74_parent$$19$$.offsetParent;
  }
  var $doc$$36$$ = $goog$dom$getOwnerDocument$$($element$$74_parent$$19$$), $positionStyle$$ = $goog$style$getStyle_$$($element$$74_parent$$19$$, "position"), $skipStatic$$ = "fixed" == $positionStyle$$ || "absolute" == $positionStyle$$;
  for ($element$$74_parent$$19$$ = $element$$74_parent$$19$$.parentNode;$element$$74_parent$$19$$ && $element$$74_parent$$19$$ != $doc$$36$$;$element$$74_parent$$19$$ = $element$$74_parent$$19$$.parentNode) {
    if ($positionStyle$$ = $goog$style$getStyle_$$($element$$74_parent$$19$$, "position"), $skipStatic$$ = $skipStatic$$ && "static" == $positionStyle$$ && $element$$74_parent$$19$$ != $doc$$36$$.documentElement && $element$$74_parent$$19$$ != $doc$$36$$.body, !$skipStatic$$ && ($element$$74_parent$$19$$.scrollWidth > $element$$74_parent$$19$$.clientWidth || $element$$74_parent$$19$$.scrollHeight > $element$$74_parent$$19$$.clientHeight || "fixed" == $positionStyle$$ || "absolute" == $positionStyle$$ || 
    "relative" == $positionStyle$$)) {
      return $element$$74_parent$$19$$;
    }
  }
  return null;
}
function $goog$style$getPageOffset$$($el$$8_el$$inline_839_scrollCoord_vpBox$$) {
  var $box$$7_doc$$inline_267_parent$$20$$, $doc$$37_doc$$inline_838_win$$inline_840$$ = $goog$dom$getOwnerDocument$$($el$$8_el$$inline_839_scrollCoord_vpBox$$), $positionStyle$$1$$ = $goog$style$getStyle_$$($el$$8_el$$inline_839_scrollCoord_vpBox$$, "position");
  $goog$asserts$assertObject$$($el$$8_el$$inline_839_scrollCoord_vpBox$$, "Parameter is required");
  var $BUGGY_GECKO_BOX_OBJECT$$ = $goog$userAgent$GECKO$$ && $doc$$37_doc$$inline_838_win$$inline_840$$.getBoxObjectFor && !$el$$8_el$$inline_839_scrollCoord_vpBox$$.getBoundingClientRect && "absolute" == $positionStyle$$1$$ && ($box$$7_doc$$inline_267_parent$$20$$ = $doc$$37_doc$$inline_838_win$$inline_840$$.getBoxObjectFor($el$$8_el$$inline_839_scrollCoord_vpBox$$)) && (0 > $box$$7_doc$$inline_267_parent$$20$$.screenX || 0 > $box$$7_doc$$inline_267_parent$$20$$.screenY), $pos$$6$$ = new $goog$math$Coordinate$$(0, 
  0), $JSCompiler_temp$$776_viewportElement$$;
  $box$$7_doc$$inline_267_parent$$20$$ = $doc$$37_doc$$inline_838_win$$inline_840$$ ? $goog$dom$getOwnerDocument$$($doc$$37_doc$$inline_838_win$$inline_840$$) : document;
  ($JSCompiler_temp$$776_viewportElement$$ = !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$) || ($JSCompiler_temp$$776_viewportElement$$ = "CSS1Compat" == $goog$dom$getDomHelper$$($box$$7_doc$$inline_267_parent$$20$$).$document_$.compatMode);
  $JSCompiler_temp$$776_viewportElement$$ = $JSCompiler_temp$$776_viewportElement$$ ? $box$$7_doc$$inline_267_parent$$20$$.documentElement : $box$$7_doc$$inline_267_parent$$20$$.body;
  if ($el$$8_el$$inline_839_scrollCoord_vpBox$$ == $JSCompiler_temp$$776_viewportElement$$) {
    return $pos$$6$$;
  }
  if ($el$$8_el$$inline_839_scrollCoord_vpBox$$.getBoundingClientRect) {
    $box$$7_doc$$inline_267_parent$$20$$ = $goog$style$getBoundingClientRect_$$($el$$8_el$$inline_839_scrollCoord_vpBox$$), $doc$$37_doc$$inline_838_win$$inline_840$$ = $goog$dom$getDomHelper$$($doc$$37_doc$$inline_838_win$$inline_840$$).$document_$, $el$$8_el$$inline_839_scrollCoord_vpBox$$ = $goog$userAgent$WEBKIT$$ || "CSS1Compat" != $doc$$37_doc$$inline_838_win$$inline_840$$.compatMode ? $doc$$37_doc$$inline_838_win$$inline_840$$.body || $doc$$37_doc$$inline_838_win$$inline_840$$.documentElement : 
    $doc$$37_doc$$inline_838_win$$inline_840$$.documentElement, $doc$$37_doc$$inline_838_win$$inline_840$$ = $doc$$37_doc$$inline_838_win$$inline_840$$.parentWindow || $doc$$37_doc$$inline_838_win$$inline_840$$.defaultView, $el$$8_el$$inline_839_scrollCoord_vpBox$$ = $goog$userAgent$IE$$ && $goog$userAgent$isVersionOrHigher$$("10") && $doc$$37_doc$$inline_838_win$$inline_840$$.pageYOffset != $el$$8_el$$inline_839_scrollCoord_vpBox$$.scrollTop ? new $goog$math$Coordinate$$($el$$8_el$$inline_839_scrollCoord_vpBox$$.scrollLeft, 
    $el$$8_el$$inline_839_scrollCoord_vpBox$$.scrollTop) : new $goog$math$Coordinate$$($doc$$37_doc$$inline_838_win$$inline_840$$.pageXOffset || $el$$8_el$$inline_839_scrollCoord_vpBox$$.scrollLeft, $doc$$37_doc$$inline_838_win$$inline_840$$.pageYOffset || $el$$8_el$$inline_839_scrollCoord_vpBox$$.scrollTop), $pos$$6$$.x = $box$$7_doc$$inline_267_parent$$20$$.left + $el$$8_el$$inline_839_scrollCoord_vpBox$$.x, $pos$$6$$.y = $box$$7_doc$$inline_267_parent$$20$$.top + $el$$8_el$$inline_839_scrollCoord_vpBox$$.y
    ;
  } else {
    if ($doc$$37_doc$$inline_838_win$$inline_840$$.getBoxObjectFor && !$BUGGY_GECKO_BOX_OBJECT$$) {
      $box$$7_doc$$inline_267_parent$$20$$ = $doc$$37_doc$$inline_838_win$$inline_840$$.getBoxObjectFor($el$$8_el$$inline_839_scrollCoord_vpBox$$), $el$$8_el$$inline_839_scrollCoord_vpBox$$ = $doc$$37_doc$$inline_838_win$$inline_840$$.getBoxObjectFor($JSCompiler_temp$$776_viewportElement$$), $pos$$6$$.x = $box$$7_doc$$inline_267_parent$$20$$.screenX - $el$$8_el$$inline_839_scrollCoord_vpBox$$.screenX, $pos$$6$$.y = $box$$7_doc$$inline_267_parent$$20$$.screenY - $el$$8_el$$inline_839_scrollCoord_vpBox$$.screenY
      ;
    } else {
      $box$$7_doc$$inline_267_parent$$20$$ = $el$$8_el$$inline_839_scrollCoord_vpBox$$;
      do {
        $pos$$6$$.x += $box$$7_doc$$inline_267_parent$$20$$.offsetLeft;
        $pos$$6$$.y += $box$$7_doc$$inline_267_parent$$20$$.offsetTop;
        $box$$7_doc$$inline_267_parent$$20$$ != $el$$8_el$$inline_839_scrollCoord_vpBox$$ && ($pos$$6$$.x += $box$$7_doc$$inline_267_parent$$20$$.clientLeft || 0, $pos$$6$$.y += $box$$7_doc$$inline_267_parent$$20$$.clientTop || 0);
        if ($goog$userAgent$WEBKIT$$ && "fixed" == $goog$style$getStyle_$$($box$$7_doc$$inline_267_parent$$20$$, "position")) {
          $pos$$6$$.x += $doc$$37_doc$$inline_838_win$$inline_840$$.body.scrollLeft;
          $pos$$6$$.y += $doc$$37_doc$$inline_838_win$$inline_840$$.body.scrollTop;
          break;
        }
        $box$$7_doc$$inline_267_parent$$20$$ = $box$$7_doc$$inline_267_parent$$20$$.offsetParent;
      } while ($box$$7_doc$$inline_267_parent$$20$$ && $box$$7_doc$$inline_267_parent$$20$$ != $el$$8_el$$inline_839_scrollCoord_vpBox$$);
      if ($goog$userAgent$OPERA$$ || $goog$userAgent$WEBKIT$$ && "absolute" == $positionStyle$$1$$) {
        $pos$$6$$.y -= $doc$$37_doc$$inline_838_win$$inline_840$$.body.offsetTop;
      }
      for ($box$$7_doc$$inline_267_parent$$20$$ = $el$$8_el$$inline_839_scrollCoord_vpBox$$;($box$$7_doc$$inline_267_parent$$20$$ = $goog$style$getOffsetParent$$($box$$7_doc$$inline_267_parent$$20$$)) && $box$$7_doc$$inline_267_parent$$20$$ != $doc$$37_doc$$inline_838_win$$inline_840$$.body && $box$$7_doc$$inline_267_parent$$20$$ != $JSCompiler_temp$$776_viewportElement$$;) {
        $pos$$6$$.x -= $box$$7_doc$$inline_267_parent$$20$$.scrollLeft, $goog$userAgent$OPERA$$ && "TR" == $box$$7_doc$$inline_267_parent$$20$$.tagName || ($pos$$6$$.y -= $box$$7_doc$$inline_267_parent$$20$$.scrollTop);
      }
    }
  }
  return $pos$$6$$;
}
function $goog$style$getPixelStyleValue_$$($value$$104$$) {
  "number" == typeof $value$$104$$ && ($value$$104$$ = Math.round($value$$104$$) + "px");
  return $value$$104$$;
}
function $goog$style$evaluateWithTemporaryDisplay_$$($element$$82_retVal$$3$$) {
  var $fn$$15$$ = $goog$style$getSizeWithDisplay_$$;
  if ("none" != $goog$style$getStyle_$$($element$$82_retVal$$3$$, "display")) {
    return $fn$$15$$($element$$82_retVal$$3$$);
  }
  var $style$$13$$ = $element$$82_retVal$$3$$.style, $originalDisplay$$ = $style$$13$$.display, $originalVisibility$$ = $style$$13$$.visibility, $originalPosition$$ = $style$$13$$.position;
  $style$$13$$.visibility = "hidden";
  $style$$13$$.position = "absolute";
  $style$$13$$.display = "inline";
  $element$$82_retVal$$3$$ = $fn$$15$$($element$$82_retVal$$3$$);
  $style$$13$$.display = $originalDisplay$$;
  $style$$13$$.position = $originalPosition$$;
  $style$$13$$.visibility = $originalVisibility$$;
  return $element$$82_retVal$$3$$;
}
function $goog$style$getSizeWithDisplay_$$($clientRect_element$$83$$) {
  var $offsetWidth$$ = $clientRect_element$$83$$.offsetWidth, $offsetHeight$$ = $clientRect_element$$83$$.offsetHeight, $webkitOffsetsZero$$ = $goog$userAgent$WEBKIT$$ && !$offsetWidth$$ && !$offsetHeight$$;
  return $goog$isDef$$($offsetWidth$$) && !$webkitOffsetsZero$$ || !$clientRect_element$$83$$.getBoundingClientRect ? new $goog$math$Size$$($offsetWidth$$, $offsetHeight$$) : ($clientRect_element$$83$$ = $goog$style$getBoundingClientRect_$$($clientRect_element$$83$$), new $goog$math$Size$$($clientRect_element$$83$$.right - $clientRect_element$$83$$.left, $clientRect_element$$83$$.bottom - $clientRect_element$$83$$.top));
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
function $goog$Timer$callOnce$$($listener$$72$$, $opt_delay$$) {
  if (!$goog$isFunction$$($listener$$72$$)) {
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
    var $location$$inline_275$$ = $goog$global$$.location;
    if ($location$$inline_275$$) {
      var $domain$$inline_277_href$$inline_276_uri$$inline_916$$ = $location$$inline_275$$.href;
      if ($domain$$inline_277_href$$inline_276_uri$$inline_916$$ && ($domain$$inline_277_href$$inline_276_uri$$inline_916$$ = ($domain$$inline_277_href$$inline_276_uri$$inline_916$$ = $goog$uri$utils$split$$($domain$$inline_277_href$$inline_276_uri$$inline_916$$)[3] || null) && decodeURIComponent($domain$$inline_277_href$$inline_276_uri$$inline_916$$)) && $domain$$inline_277_href$$inline_276_uri$$inline_916$$ != $location$$inline_275$$.hostname) {
        throw $goog$uri$utils$needsPhishingProtection_$$ = !0, Error();
      }
    }
  }
  return $uri$$11$$.match($goog$uri$utils$splitRe_$$);
}
var $goog$uri$utils$needsPhishingProtection_$$ = $goog$userAgent$WEBKIT$$;
function $goog$uri$utils$getHost$$($opt_scheme$$inline_279_uri$$27$$) {
  var $opt_port$$inline_282_pieces$$ = $goog$uri$utils$split$$($opt_scheme$$inline_279_uri$$27$$);
  $opt_scheme$$inline_279_uri$$27$$ = $opt_port$$inline_282_pieces$$[1];
  var $opt_userInfo$$inline_280$$ = $opt_port$$inline_282_pieces$$[2], $opt_domain$$inline_281$$ = $opt_port$$inline_282_pieces$$[3], $opt_port$$inline_282_pieces$$ = $opt_port$$inline_282_pieces$$[4], $out$$inline_286$$ = "";
  $opt_scheme$$inline_279_uri$$27$$ && ($out$$inline_286$$ += $opt_scheme$$inline_279_uri$$27$$ + ":");
  $opt_domain$$inline_281$$ && ($out$$inline_286$$ += "//", $opt_userInfo$$inline_280$$ && ($out$$inline_286$$ += $opt_userInfo$$inline_280$$ + "@"), $out$$inline_286$$ += $opt_domain$$inline_281$$, $opt_port$$inline_282_pieces$$ && ($out$$inline_286$$ += ":" + $opt_port$$inline_282_pieces$$));
  return $out$$inline_286$$;
}
;$goog$debug$LogManager$getLogger$$("goog.net.XhrIo");
function $goog$Uri$$($opt_uri$$, $opt_ignoreCase$$) {
  var $m$$1_newDomain$$inline_304_newFragment$$inline_312_newFragment$$inline_328_newPath$$inline_308_newUserInfo$$inline_300$$;
  if ($opt_uri$$ instanceof $goog$Uri$$) {
    this.$ignoreCase_$ = $goog$isDef$$($opt_ignoreCase$$) ? $opt_ignoreCase$$ : $opt_uri$$.$ignoreCase_$, $JSCompiler_StaticMethods_setScheme$$(this, $opt_uri$$.$scheme_$), $m$$1_newDomain$$inline_304_newFragment$$inline_312_newFragment$$inline_328_newPath$$inline_308_newUserInfo$$inline_300$$ = $opt_uri$$.$userInfo_$, $JSCompiler_StaticMethods_enforceReadOnly$$(this), this.$userInfo_$ = $m$$1_newDomain$$inline_304_newFragment$$inline_312_newFragment$$inline_328_newPath$$inline_308_newUserInfo$$inline_300$$, 
    $m$$1_newDomain$$inline_304_newFragment$$inline_312_newFragment$$inline_328_newPath$$inline_308_newUserInfo$$inline_300$$ = $opt_uri$$.$domain_$, $JSCompiler_StaticMethods_enforceReadOnly$$(this), this.$domain_$ = $m$$1_newDomain$$inline_304_newFragment$$inline_312_newFragment$$inline_328_newPath$$inline_308_newUserInfo$$inline_300$$, $JSCompiler_StaticMethods_setPort$$(this, $opt_uri$$.$port_$), $m$$1_newDomain$$inline_304_newFragment$$inline_312_newFragment$$inline_328_newPath$$inline_308_newUserInfo$$inline_300$$ = 
    $opt_uri$$.$path_$, $JSCompiler_StaticMethods_enforceReadOnly$$(this), this.$path_$ = $m$$1_newDomain$$inline_304_newFragment$$inline_312_newFragment$$inline_328_newPath$$inline_308_newUserInfo$$inline_300$$, $JSCompiler_StaticMethods_setQueryData$$(this, $opt_uri$$.$queryData_$.clone()), $m$$1_newDomain$$inline_304_newFragment$$inline_312_newFragment$$inline_328_newPath$$inline_308_newUserInfo$$inline_300$$ = $opt_uri$$.$fragment_$, $JSCompiler_StaticMethods_enforceReadOnly$$(this), this.$fragment_$ = 
    $m$$1_newDomain$$inline_304_newFragment$$inline_312_newFragment$$inline_328_newPath$$inline_308_newUserInfo$$inline_300$$;
  } else {
    if ($opt_uri$$ && ($m$$1_newDomain$$inline_304_newFragment$$inline_312_newFragment$$inline_328_newPath$$inline_308_newUserInfo$$inline_300$$ = $goog$uri$utils$split$$(String($opt_uri$$)))) {
      this.$ignoreCase_$ = !!$opt_ignoreCase$$;
      $JSCompiler_StaticMethods_setScheme$$(this, $m$$1_newDomain$$inline_304_newFragment$$inline_312_newFragment$$inline_328_newPath$$inline_308_newUserInfo$$inline_300$$[1] || "", !0);
      var $newDomain$$inline_320_newPath$$inline_324_newUserInfo$$inline_316$$ = $m$$1_newDomain$$inline_304_newFragment$$inline_312_newFragment$$inline_328_newPath$$inline_308_newUserInfo$$inline_300$$[2] || "";
      $JSCompiler_StaticMethods_enforceReadOnly$$(this);
      this.$userInfo_$ = $goog$Uri$decodeOrEmpty_$$($newDomain$$inline_320_newPath$$inline_324_newUserInfo$$inline_316$$);
      $newDomain$$inline_320_newPath$$inline_324_newUserInfo$$inline_316$$ = $m$$1_newDomain$$inline_304_newFragment$$inline_312_newFragment$$inline_328_newPath$$inline_308_newUserInfo$$inline_300$$[3] || "";
      $JSCompiler_StaticMethods_enforceReadOnly$$(this);
      this.$domain_$ = $goog$Uri$decodeOrEmpty_$$($newDomain$$inline_320_newPath$$inline_324_newUserInfo$$inline_316$$);
      $JSCompiler_StaticMethods_setPort$$(this, $m$$1_newDomain$$inline_304_newFragment$$inline_312_newFragment$$inline_328_newPath$$inline_308_newUserInfo$$inline_300$$[4]);
      $newDomain$$inline_320_newPath$$inline_324_newUserInfo$$inline_316$$ = $m$$1_newDomain$$inline_304_newFragment$$inline_312_newFragment$$inline_328_newPath$$inline_308_newUserInfo$$inline_300$$[5] || "";
      $JSCompiler_StaticMethods_enforceReadOnly$$(this);
      this.$path_$ = $goog$Uri$decodeOrEmpty_$$($newDomain$$inline_320_newPath$$inline_324_newUserInfo$$inline_316$$);
      $JSCompiler_StaticMethods_setQueryData$$(this, $m$$1_newDomain$$inline_304_newFragment$$inline_312_newFragment$$inline_328_newPath$$inline_308_newUserInfo$$inline_300$$[6] || "", !0);
      $m$$1_newDomain$$inline_304_newFragment$$inline_312_newFragment$$inline_328_newPath$$inline_308_newUserInfo$$inline_300$$ = $m$$1_newDomain$$inline_304_newFragment$$inline_312_newFragment$$inline_328_newPath$$inline_308_newUserInfo$$inline_300$$[7] || "";
      $JSCompiler_StaticMethods_enforceReadOnly$$(this);
      this.$fragment_$ = $goog$Uri$decodeOrEmpty_$$($m$$1_newDomain$$inline_304_newFragment$$inline_312_newFragment$$inline_328_newPath$$inline_308_newUserInfo$$inline_300$$);
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
  var $out$$1$$ = [], $domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$ = this.$scheme_$;
  $domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$ && $out$$1$$.push($goog$Uri$encodeSpecialChars_$$($domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$), ":");
  if ($domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$ = this.$domain_$) {
    $out$$1$$.push("//");
    var $userInfo$$ = this.$userInfo_$;
    $userInfo$$ && $out$$1$$.push($goog$Uri$encodeSpecialChars_$$($userInfo$$, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$), "@");
    $out$$1$$.push(encodeURIComponent(String($domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$)));
    $domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$ = this.$port_$;
    null != $domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$ && $out$$1$$.push(":", String($domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$));
  }
  if ($domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$ = this.$path_$) {
    this.$domain_$ && "/" != $domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$.charAt(0) && $out$$1$$.push("/"), $out$$1$$.push($goog$Uri$encodeSpecialChars_$$($domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$, "/" == $domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$.charAt(0) ? $goog$Uri$reDisallowedInAbsolutePath_$$ : $goog$Uri$reDisallowedInRelativePath_$$));
  }
  ($domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$ = this.$queryData_$.toString()) && $out$$1$$.push("?", $domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$);
  ($domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$ = this.$fragment_$) && $out$$1$$.push("#", $goog$Uri$encodeSpecialChars_$$($domain$$1_fragment$$2_path$$10_port_query$$6_scheme$$2$$, $goog$Uri$reDisallowedInFragment_$$));
  return $out$$1$$.join("");
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
function $goog$Uri$decodeOrEmpty_$$($val$$36$$) {
  return $val$$36$$ ? decodeURIComponent($val$$36$$) : "";
}
function $goog$Uri$encodeSpecialChars_$$($unescapedPart$$, $extra$$) {
  return $goog$isString$$($unescapedPart$$) ? encodeURI($unescapedPart$$).replace($extra$$, $goog$Uri$encodeChar_$$) : null;
}
function $goog$Uri$encodeChar_$$($ch$$3_n$$11$$) {
  $ch$$3_n$$11$$ = $ch$$3_n$$11$$.charCodeAt(0);
  return "%" + ($ch$$3_n$$11$$ >> 4 & 15).toString(16) + ($ch$$3_n$$11$$ & 15).toString(16);
}
var $goog$Uri$reDisallowedInSchemeOrUserInfo_$$ = /[#\/\?@]/g, $goog$Uri$reDisallowedInRelativePath_$$ = /[\#\?:]/g, $goog$Uri$reDisallowedInAbsolutePath_$$ = /[\#\?]/g, $goog$Uri$reDisallowedInQuery_$$ = /[\#\?@]/g, $goog$Uri$reDisallowedInFragment_$$ = /#/g;
function $goog$Uri$QueryData$$($opt_query$$1$$, $opt_uri$$1$$, $opt_ignoreCase$$3$$) {
  this.$encodedQuery_$ = $opt_query$$1$$ || null;
  this.$ignoreCase_$ = !!$opt_ignoreCase$$3$$;
}
function $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$) {
  if (!$JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$keyMap_$ && ($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$keyMap_$ = new $goog$structs$Map$$, $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$count_$ = 0, $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$encodedQuery_$)) {
    for (var $pairs$$2$$ = $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$encodedQuery_$.split("&"), $i$$141$$ = 0;$i$$141$$ < $pairs$$2$$.length;$i$$141$$++) {
      var $indexOfEquals$$ = $pairs$$2$$[$i$$141$$].indexOf("="), $name$$73$$ = null, $value$$118$$ = null;
      0 <= $indexOfEquals$$ ? ($name$$73$$ = $pairs$$2$$[$i$$141$$].substring(0, $indexOfEquals$$), $value$$118$$ = $pairs$$2$$[$i$$141$$].substring($indexOfEquals$$ + 1)) : $name$$73$$ = $pairs$$2$$[$i$$141$$];
      $name$$73$$ = decodeURIComponent($name$$73$$.replace(/\+/g, " "));
      $name$$73$$ = $JSCompiler_StaticMethods_getKeyName_$$($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$, $name$$73$$);
      $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.add($name$$73$$, $value$$118$$ ? decodeURIComponent($value$$118$$.replace(/\+/g, " ")) : "");
    }
  }
}
$JSCompiler_prototypeAlias$$ = $goog$Uri$QueryData$$.prototype;
$JSCompiler_prototypeAlias$$.$keyMap_$ = null;
$JSCompiler_prototypeAlias$$.$count_$ = null;
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($key$$88$$, $value$$120$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  this.$encodedQuery_$ = null;
  $key$$88$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$$88$$);
  var $values$$18$$ = this.$keyMap_$.get($key$$88$$);
  $values$$18$$ || this.$keyMap_$.set($key$$88$$, $values$$18$$ = []);
  $values$$18$$.push($value$$120$$);
  this.$count_$++;
  return this;
};
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($key$$89$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  $key$$89$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$$89$$);
  return this.$keyMap_$.$containsKey$($key$$89$$) ? (this.$encodedQuery_$ = null, this.$count_$ -= this.$keyMap_$.get($key$$89$$).length, this.$keyMap_$.remove($key$$89$$)) : !1;
};
$JSCompiler_prototypeAlias$$.$containsKey$ = function $$JSCompiler_prototypeAlias$$$$containsKey$$($key$$90$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  $key$$90$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$$90$$);
  return this.$keyMap_$.$containsKey$($key$$90$$);
};
$JSCompiler_prototypeAlias$$.$getKeys$ = function $$JSCompiler_prototypeAlias$$$$getKeys$$() {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  for (var $vals$$1$$ = this.$keyMap_$.$getValues$(), $keys$$14$$ = this.$keyMap_$.$getKeys$(), $rv$$24$$ = [], $i$$144$$ = 0;$i$$144$$ < $keys$$14$$.length;$i$$144$$++) {
    for (var $val$$37$$ = $vals$$1$$[$i$$144$$], $j$$9$$ = 0;$j$$9$$ < $val$$37$$.length;$j$$9$$++) {
      $rv$$24$$.push($keys$$14$$[$i$$144$$]);
    }
  }
  return $rv$$24$$;
};
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$($opt_key$$1_values$$19$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  var $rv$$25$$ = [];
  if ($goog$isString$$($opt_key$$1_values$$19$$)) {
    this.$containsKey$($opt_key$$1_values$$19$$) && ($rv$$25$$ = $goog$array$concat$$($rv$$25$$, this.$keyMap_$.get($JSCompiler_StaticMethods_getKeyName_$$(this, $opt_key$$1_values$$19$$))));
  } else {
    $opt_key$$1_values$$19$$ = this.$keyMap_$.$getValues$();
    for (var $i$$145$$ = 0;$i$$145$$ < $opt_key$$1_values$$19$$.length;$i$$145$$++) {
      $rv$$25$$ = $goog$array$concat$$($rv$$25$$, $opt_key$$1_values$$19$$[$i$$145$$]);
    }
  }
  return $rv$$25$$;
};
$JSCompiler_prototypeAlias$$.set = function $$JSCompiler_prototypeAlias$$$set$($key$$91$$, $value$$122$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  this.$encodedQuery_$ = null;
  $key$$91$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$$91$$);
  this.$containsKey$($key$$91$$) && (this.$count_$ -= this.$keyMap_$.get($key$$91$$).length);
  this.$keyMap_$.set($key$$91$$, [$value$$122$$]);
  this.$count_$++;
  return this;
};
$JSCompiler_prototypeAlias$$.get = function $$JSCompiler_prototypeAlias$$$get$($key$$92$$, $opt_default$$2$$) {
  var $values$$20$$ = $key$$92$$ ? this.$getValues$($key$$92$$) : [];
  return 0 < $values$$20$$.length ? String($values$$20$$[0]) : $opt_default$$2$$;
};
function $JSCompiler_StaticMethods_setValues$$($JSCompiler_StaticMethods_setValues$self$$, $key$$93$$, $values$$21$$) {
  $JSCompiler_StaticMethods_setValues$self$$.remove($key$$93$$);
  0 < $values$$21$$.length && ($JSCompiler_StaticMethods_setValues$self$$.$encodedQuery_$ = null, $JSCompiler_StaticMethods_setValues$self$$.$keyMap_$.set($JSCompiler_StaticMethods_getKeyName_$$($JSCompiler_StaticMethods_setValues$self$$, $key$$93$$), $goog$array$toArray$$($values$$21$$)), $JSCompiler_StaticMethods_setValues$self$$.$count_$ += $values$$21$$.length);
}
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$() {
  if (this.$encodedQuery_$) {
    return this.$encodedQuery_$;
  }
  if (!this.$keyMap_$) {
    return "";
  }
  for (var $sb$$10$$ = [], $keys$$15$$ = this.$keyMap_$.$getKeys$(), $i$$146$$ = 0;$i$$146$$ < $keys$$15$$.length;$i$$146$$++) {
    for (var $key$$94_val$$38$$ = $keys$$15$$[$i$$146$$], $encodedKey$$ = encodeURIComponent(String($key$$94_val$$38$$)), $key$$94_val$$38$$ = this.$getValues$($key$$94_val$$38$$), $j$$10$$ = 0;$j$$10$$ < $key$$94_val$$38$$.length;$j$$10$$++) {
      var $param$$3$$ = $encodedKey$$;
      "" !== $key$$94_val$$38$$[$j$$10$$] && ($param$$3$$ += "=" + encodeURIComponent(String($key$$94_val$$38$$[$j$$10$$])));
      $sb$$10$$.push($param$$3$$);
    }
  }
  return this.$encodedQuery_$ = $sb$$10$$.join("&");
};
$JSCompiler_prototypeAlias$$.clone = function $$JSCompiler_prototypeAlias$$$clone$() {
  var $rv$$26$$ = new $goog$Uri$QueryData$$;
  $rv$$26$$.$encodedQuery_$ = this.$encodedQuery_$;
  this.$keyMap_$ && ($rv$$26$$.$keyMap_$ = this.$keyMap_$.clone(), $rv$$26$$.$count_$ = this.$count_$);
  return $rv$$26$$;
};
function $JSCompiler_StaticMethods_getKeyName_$$($JSCompiler_StaticMethods_getKeyName_$self$$, $arg$$7$$) {
  var $keyName$$ = String($arg$$7$$);
  $JSCompiler_StaticMethods_getKeyName_$self$$.$ignoreCase_$ && ($keyName$$ = $keyName$$.toLowerCase());
  return $keyName$$;
}
$JSCompiler_prototypeAlias$$.$setIgnoreCase$ = function $$JSCompiler_prototypeAlias$$$$setIgnoreCase$$($ignoreCase$$1$$) {
  $ignoreCase$$1$$ && !this.$ignoreCase_$ && ($JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this), this.$encodedQuery_$ = null, this.$keyMap_$.forEach(function($value$$124$$, $key$$96$$) {
    var $lowerCase$$ = $key$$96$$.toLowerCase();
    $key$$96$$ != $lowerCase$$ && (this.remove($key$$96$$), $JSCompiler_StaticMethods_setValues$$(this, $lowerCase$$, $value$$124$$));
  }, this));
  this.$ignoreCase_$ = $ignoreCase$$1$$;
};
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
$JSCompiler_prototypeAlias$$.$continue_$ = function $$JSCompiler_prototypeAlias$$$$continue_$$($isSuccess$$, $res$$9$$) {
  this.$blocked_$ = !1;
  $JSCompiler_StaticMethods_updateResult_$$(this, $isSuccess$$, $res$$9$$);
};
function $JSCompiler_StaticMethods_updateResult_$$($JSCompiler_StaticMethods_updateResult_$self$$, $isSuccess$$1$$, $res$$10$$) {
  $JSCompiler_StaticMethods_updateResult_$self$$.$fired_$ = !0;
  $JSCompiler_StaticMethods_updateResult_$self$$.$result_$ = $res$$10$$;
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
  var $resolve$$9$$, $reject$$9$$, $promise$$8$$ = new $goog$Promise$$(function($res$$11$$, $rej$$) {
    $resolve$$9$$ = $res$$11$$;
    $reject$$9$$ = $rej$$;
  });
  $JSCompiler_StaticMethods_addCallbacks$$(this, $resolve$$9$$, function($reason$$7$$) {
    $reason$$7$$ instanceof $goog$async$Deferred$CanceledError$$ ? $promise$$8$$.cancel() : $reject$$9$$($reason$$7$$);
  });
  return $promise$$8$$.then($opt_onFulfilled$$4$$, $opt_onRejected$$4$$, $opt_context$$13$$);
};
$goog$Thenable$addImplementation$$($goog$async$Deferred$$);
function $JSCompiler_StaticMethods_awaitDeferred$$($JSCompiler_StaticMethods_awaitDeferred$self$$, $otherDeferred$$1$$) {
  var $cb$$inline_346$$ = $goog$bind$$($otherDeferred$$1$$.$branch$, $otherDeferred$$1$$);
  $JSCompiler_StaticMethods_addCallbacks$$($JSCompiler_StaticMethods_awaitDeferred$self$$, $cb$$inline_346$$, null, void 0);
}
$goog$async$Deferred$$.prototype.$branch$ = function $$goog$async$Deferred$$$$$branch$$($opt_propagateCancel$$) {
  var $d$$1$$ = new $goog$async$Deferred$$;
  $JSCompiler_StaticMethods_addCallbacks$$(this, $d$$1$$.$callback$, $d$$1$$.$errback$, $d$$1$$);
  $opt_propagateCancel$$ && ($d$$1$$.$parent_$ = this, this.$branches_$++);
  return $d$$1$$;
};
$goog$async$Deferred$$.prototype.isError = function $$goog$async$Deferred$$$$isError$($res$$12$$) {
  return $res$$12$$ instanceof Error;
};
function $JSCompiler_StaticMethods_hasErrback_$$($JSCompiler_StaticMethods_hasErrback_$self$$) {
  return $goog$array$some$$($JSCompiler_StaticMethods_hasErrback_$self$$.$sequence_$, function($sequenceRow$$) {
    return $goog$isFunction$$($sequenceRow$$[1]);
  });
}
function $JSCompiler_StaticMethods_fire_$$($JSCompiler_StaticMethods_fire_$self$$) {
  if ($JSCompiler_StaticMethods_fire_$self$$.$unhandledErrorId_$ && $JSCompiler_StaticMethods_fire_$self$$.$fired_$ && $JSCompiler_StaticMethods_hasErrback_$$($JSCompiler_StaticMethods_fire_$self$$)) {
    var $deferredError$$inline_356_id$$inline_352_res$$13$$ = $JSCompiler_StaticMethods_fire_$self$$.$unhandledErrorId_$, $error$$inline_353_unhandledException$$ = $goog$async$Deferred$errorMap_$$[$deferredError$$inline_356_id$$inline_352_res$$13$$];
    $error$$inline_353_unhandledException$$ && ($goog$global$$.clearTimeout($error$$inline_353_unhandledException$$.$id_$), delete $goog$async$Deferred$errorMap_$$[$deferredError$$inline_356_id$$inline_352_res$$13$$]);
    $JSCompiler_StaticMethods_fire_$self$$.$unhandledErrorId_$ = 0;
  }
  $JSCompiler_StaticMethods_fire_$self$$.$parent_$ && ($JSCompiler_StaticMethods_fire_$self$$.$parent_$.$branches_$--, delete $JSCompiler_StaticMethods_fire_$self$$.$parent_$);
  for (var $deferredError$$inline_356_id$$inline_352_res$$13$$ = $JSCompiler_StaticMethods_fire_$self$$.$result_$, $isNewlyBlocked_onErrback$$ = $error$$inline_353_unhandledException$$ = !1;$JSCompiler_StaticMethods_fire_$self$$.$sequence_$.length && !$JSCompiler_StaticMethods_fire_$self$$.$blocked_$;) {
    var $scope$$5_sequenceEntry$$ = $JSCompiler_StaticMethods_fire_$self$$.$sequence_$.shift(), $callback$$66_f$$50$$ = $scope$$5_sequenceEntry$$[0], $errback$$ = $scope$$5_sequenceEntry$$[1], $scope$$5_sequenceEntry$$ = $scope$$5_sequenceEntry$$[2];
    if ($callback$$66_f$$50$$ = $JSCompiler_StaticMethods_fire_$self$$.$hadError_$ ? $errback$$ : $callback$$66_f$$50$$) {
      try {
        var $onCallback_ret$$4$$ = $callback$$66_f$$50$$.call($scope$$5_sequenceEntry$$ || $JSCompiler_StaticMethods_fire_$self$$.$defaultScope_$, $deferredError$$inline_356_id$$inline_352_res$$13$$);
        $goog$isDef$$($onCallback_ret$$4$$) && ($JSCompiler_StaticMethods_fire_$self$$.$hadError_$ = $JSCompiler_StaticMethods_fire_$self$$.$hadError_$ && ($onCallback_ret$$4$$ == $deferredError$$inline_356_id$$inline_352_res$$13$$ || $JSCompiler_StaticMethods_fire_$self$$.isError($onCallback_ret$$4$$)), $JSCompiler_StaticMethods_fire_$self$$.$result_$ = $deferredError$$inline_356_id$$inline_352_res$$13$$ = $onCallback_ret$$4$$);
        $goog$Thenable$isImplementedBy$$($deferredError$$inline_356_id$$inline_352_res$$13$$) && ($isNewlyBlocked_onErrback$$ = !0, $JSCompiler_StaticMethods_fire_$self$$.$blocked_$ = !0);
      } catch ($ex$$11$$) {
        $deferredError$$inline_356_id$$inline_352_res$$13$$ = $ex$$11$$, $JSCompiler_StaticMethods_fire_$self$$.$hadError_$ = !0, $JSCompiler_StaticMethods_makeStackTraceLong_$$($JSCompiler_StaticMethods_fire_$self$$, $deferredError$$inline_356_id$$inline_352_res$$13$$), $JSCompiler_StaticMethods_hasErrback_$$($JSCompiler_StaticMethods_fire_$self$$) || ($error$$inline_353_unhandledException$$ = !0);
      }
    }
  }
  $JSCompiler_StaticMethods_fire_$self$$.$result_$ = $deferredError$$inline_356_id$$inline_352_res$$13$$;
  $isNewlyBlocked_onErrback$$ && ($onCallback_ret$$4$$ = $goog$bind$$($JSCompiler_StaticMethods_fire_$self$$.$continue_$, $JSCompiler_StaticMethods_fire_$self$$, !0), $isNewlyBlocked_onErrback$$ = $goog$bind$$($JSCompiler_StaticMethods_fire_$self$$.$continue_$, $JSCompiler_StaticMethods_fire_$self$$, !1), $deferredError$$inline_356_id$$inline_352_res$$13$$ instanceof $goog$async$Deferred$$ ? ($JSCompiler_StaticMethods_addCallbacks$$($deferredError$$inline_356_id$$inline_352_res$$13$$, $onCallback_ret$$4$$, 
  $isNewlyBlocked_onErrback$$), $deferredError$$inline_356_id$$inline_352_res$$13$$.$blocking_$ = !0) : $deferredError$$inline_356_id$$inline_352_res$$13$$.then($onCallback_ret$$4$$, $isNewlyBlocked_onErrback$$));
  $error$$inline_353_unhandledException$$ && ($deferredError$$inline_356_id$$inline_352_res$$13$$ = new $goog$async$Deferred$Error_$$($deferredError$$inline_356_id$$inline_352_res$$13$$), $goog$async$Deferred$errorMap_$$[$deferredError$$inline_356_id$$inline_352_res$$13$$.$id_$] = $deferredError$$inline_356_id$$inline_352_res$$13$$, $JSCompiler_StaticMethods_fire_$self$$.$unhandledErrorId_$ = $deferredError$$inline_356_id$$inline_352_res$$13$$.$id_$);
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
function $goog$net$xpc$DirectTransport$$($channel$$6$$, $opt_domHelper$$6$$) {
  $goog$net$xpc$Transport$$.call(this, $opt_domHelper$$6$$);
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
  $goog$log$fine$$("messageReceived: channel=" + $channelName$$2_literal$$ + ", service=" + $service$$9$$ + ", payload=" + $msg$$22_payload$$16$$);
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
    var $uid$$inline_369$$ = $goog$getUid$$($win$$9$$);
    0 == ($goog$net$xpc$DirectTransport$activeCount_$$[$uid$$inline_369$$] || 0) && null == $goog$getObjectByName$$("crosswindowmessaging.channel", $win$$9$$) && $goog$exportPath_$$("crosswindowmessaging.channel", $goog$net$xpc$DirectTransport$messageReceivedHandler_$$, $win$$9$$);
    $goog$net$xpc$DirectTransport$activeCount_$$[$uid$$inline_369$$]++;
    this.$initialized_$ = !0;
    this.$maybeAttemptToConnect_$();
  } else {
    $goog$log$fine$$("connect(): no window to initialize.");
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
    $goog$log$fine$$("send(): window not ready");
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
;function $goog$net$xpc$NativeMessagingTransport$$($channel$$8$$, $peerHostname$$, $opt_domHelper$$7$$, $opt_oneSidedHandshake$$, $opt_protocolVersion$$) {
  $goog$net$xpc$Transport$$.call(this, $opt_domHelper$$7$$);
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
    return!1;
  }
  var $headDelim_service$$12$$ = $data$$68_payload$$22$$.indexOf("|"), $channel$$9_serviceDelim_staleChannel$$1$$ = $data$$68_payload$$22$$.indexOf(":");
  if (-1 == $headDelim_service$$12$$ || -1 == $channel$$9_serviceDelim_staleChannel$$1$$) {
    return!1;
  }
  var $channelName$$5$$ = $data$$68_payload$$22$$.substring(0, $headDelim_service$$12$$), $headDelim_service$$12$$ = $data$$68_payload$$22$$.substring($headDelim_service$$12$$ + 1, $channel$$9_serviceDelim_staleChannel$$1$$), $data$$68_payload$$22$$ = $data$$68_payload$$22$$.substring($channel$$9_serviceDelim_staleChannel$$1$$ + 1);
  $goog$log$fine$$("messageReceived: channel=" + $channelName$$5$$ + ", service=" + $headDelim_service$$12$$ + ", payload=" + $data$$68_payload$$22$$);
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
  var $listenWindow$$inline_377$$ = this.$getWindow$(), $uid$$inline_378$$ = $goog$getUid$$($listenWindow$$inline_377$$), $value$$inline_379$$ = $goog$net$xpc$NativeMessagingTransport$activeCount_$$[$uid$$inline_378$$];
  $goog$isNumber$$($value$$inline_379$$) || ($value$$inline_379$$ = 0);
  0 == $value$$inline_379$$ && $goog$events$listen$$($listenWindow$$inline_377$$.postMessage ? $listenWindow$$inline_377$$ : $listenWindow$$inline_377$$.document, "message", $goog$net$xpc$NativeMessagingTransport$messageReceived_$$, !1, $goog$net$xpc$NativeMessagingTransport$$);
  $goog$net$xpc$NativeMessagingTransport$activeCount_$$[$uid$$inline_378$$] = $value$$inline_379$$ + 1;
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
        $obj$$112$$.postMessage ? ($obj$$112$$.postMessage($channelName$$6$$ + "|" + $service$$14$$ + ":" + $payload$$26$$, $transport$$1$$.$peerHostname_$), $goog$log$fine$$("send(): service=" + $service$$14$$ + " payload=" + $payload$$26$$ + " to hostname=" + $transport$$1$$.$peerHostname_$)) : $goog$log$warning$$($goog$net$xpc$logger$$, "Peer window had no postMessage function.");
      } catch ($error$$11$$) {
        $goog$log$warning$$($goog$net$xpc$logger$$, "Error performing postMessage, ignoring.", $error$$11$$);
      }
    }, 0);
  }, this.send($service$$13$$, $payload$$25$$)) : $goog$log$fine$$("send(): window not ready");
};
$JSCompiler_prototypeAlias$$.$notifyConnected_$ = function $$JSCompiler_prototypeAlias$$$$notifyConnected_$$() {
  this.$channel_$.$notifyConnected$(1 == this.$protocolVersion_$ || 1 == this.$peerProtocolVersion_$ ? 200 : void 0);
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  if (this.$initialized_$) {
    var $listenWindow$$4$$ = this.$getWindow$(), $uid$$6$$ = $goog$getUid$$($listenWindow$$4$$), $value$$130$$ = $goog$net$xpc$NativeMessagingTransport$activeCount_$$[$uid$$6$$];
    $goog$net$xpc$NativeMessagingTransport$activeCount_$$[$uid$$6$$] = $value$$130$$ - 1;
    1 == $value$$130$$ && $goog$events$unlisten$$($listenWindow$$4$$.postMessage ? $listenWindow$$4$$ : $listenWindow$$4$$.document, "message", $goog$net$xpc$NativeMessagingTransport$messageReceived_$$, !1, $goog$net$xpc$NativeMessagingTransport$$);
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
;function $goog$net$xpc$CrossPageChannel$$($cfg$$, $opt_domHelper$$8$$) {
  $goog$messaging$AbstractChannel$$.call(this);
  for (var $i$$148$$ = 0, $uriField$$;$uriField$$ = $goog$net$xpc$UriCfgFields$$[$i$$148$$];$i$$148$$++) {
    if ($uriField$$ in $cfg$$ && !/^https?:\/\//.test($cfg$$[$uriField$$])) {
      throw Error("URI " + $cfg$$[$uriField$$] + " is invalid for field " + $uriField$$);
    }
  }
  this.$cfg_$ = $cfg$$;
  this.name = this.$cfg_$.cn || $goog$net$xpc$getRandomString$$(10);
  this.$domHelper_$ = $opt_domHelper$$8$$ || $goog$dom$getDomHelper$$();
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
    return!!$JSCompiler_StaticMethods_isPeerAvailable$self$$.$peerWindowObject_$ && !Boolean($JSCompiler_StaticMethods_isPeerAvailable$self$$.$peerWindowObject_$.closed);
  } catch ($e$$69$$) {
    return!1;
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
  $goog$userAgent$GECKO$$ || $goog$userAgent$WEBKIT$$ ? window.setTimeout($goog$bind$$(function() {
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
function $JSCompiler_StaticMethods_getPeerUri$$($JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_387_role$$inline_385$$) {
  var $peerUri$$1$$ = $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_387_role$$inline_385$$.$cfg_$.pu;
  $goog$isString$$($peerUri$$1$$) && ($peerUri$$1$$ = $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_387_role$$inline_385$$.$cfg_$.pu = new $goog$Uri$$($peerUri$$1$$));
  var $peerCfg$$inline_384_value$$inline_388$$ = {};
  $peerCfg$$inline_384_value$$inline_388$$.cn = $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_387_role$$inline_385$$.name;
  $peerCfg$$inline_384_value$$inline_388$$.tp = $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_387_role$$inline_385$$.$cfg_$.tp;
  $peerCfg$$inline_384_value$$inline_388$$.osh = $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_387_role$$inline_385$$.$cfg_$.osh;
  $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_387_role$$inline_385$$.$cfg_$.lru && ($peerCfg$$inline_384_value$$inline_388$$.pru = $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_387_role$$inline_385$$.$cfg_$.lru);
  $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_387_role$$inline_385$$.$cfg_$.lpu && ($peerCfg$$inline_384_value$$inline_388$$.ppu = $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_387_role$$inline_385$$.$cfg_$.lpu);
  $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_387_role$$inline_385$$.$cfg_$.ppu && ($peerCfg$$inline_384_value$$inline_388$$.lpu = $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_387_role$$inline_385$$.$cfg_$.ppu);
  ($JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_387_role$$inline_385$$ = $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_387_role$$inline_385$$.$cfg_$.role) && ($peerCfg$$inline_384_value$$inline_388$$.role = 1 == $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_387_role$$inline_385$$ ? 0 : 1);
  $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_387_role$$inline_385$$ = $peerUri$$1$$;
  $peerCfg$$inline_384_value$$inline_388$$ = $goog$json$serialize$$($peerCfg$$inline_384_value$$inline_388$$);
  $JSCompiler_StaticMethods_enforceReadOnly$$($JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_387_role$$inline_385$$);
  $JSCompiler_StaticMethods_getPeerUri$self_JSCompiler_StaticMethods_setParameterValue$self$$inline_387_role$$inline_385$$.$queryData_$.set("xpc", $peerCfg$$inline_384_value$$inline_388$$);
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
    var $JSCompiler_temp$$770_JSCompiler_temp_const$$895_winObj$$1$$ = this.$iframeElement_$.contentWindow;
    $JSCompiler_temp$$770_JSCompiler_temp_const$$895_winObj$$1$$ || ($JSCompiler_temp$$770_JSCompiler_temp_const$$895_winObj$$1$$ = window.frames[this.$cfg_$.ifrid]);
    this.$peerWindowObject_$ = $JSCompiler_temp$$770_JSCompiler_temp_const$$895_winObj$$1$$;
  }
  if (!this.$peerWindowObject_$) {
    if (window == window.top) {
      throw Error("CrossPageChannel: Can't connect, peer window-object not set.");
    }
    this.$peerWindowObject_$ = window.parent;
  }
  if (!this.$transport_$) {
    if (!this.$cfg_$.tp) {
      var $JSCompiler_temp$$770_JSCompiler_temp_const$$895_winObj$$1$$ = this.$cfg_$, $JSCompiler_temp$$896_JSCompiler_temp$$897_JSCompiler_temp$$898_oldOpener$$inline_919$$;
      if ($goog$isFunction$$(document.postMessage) || $goog$isFunction$$(window.postMessage) || $goog$userAgent$IE$$ && window.postMessage) {
        $JSCompiler_temp$$896_JSCompiler_temp$$897_JSCompiler_temp$$898_oldOpener$$inline_919$$ = 1;
      } else {
        if ($goog$userAgent$GECKO$$) {
          $JSCompiler_temp$$896_JSCompiler_temp$$897_JSCompiler_temp$$898_oldOpener$$inline_919$$ = 2;
        } else {
          if ($goog$userAgent$IE$$ && this.$cfg_$.pru) {
            $JSCompiler_temp$$896_JSCompiler_temp$$897_JSCompiler_temp$$898_oldOpener$$inline_919$$ = 3;
          } else {
            var $JSCompiler_temp$$899_isSupported$$inline_918$$;
            if ($JSCompiler_temp$$899_isSupported$$inline_918$$ = $goog$userAgent$IE$$) {
              $JSCompiler_temp$$899_isSupported$$inline_918$$ = !1;
              try {
                $JSCompiler_temp$$896_JSCompiler_temp$$897_JSCompiler_temp$$898_oldOpener$$inline_919$$ = window.opener, window.opener = {}, $JSCompiler_temp$$899_isSupported$$inline_918$$ = $goog$reflect$canAccessProperty$$(window, "opener"), window.opener = $JSCompiler_temp$$896_JSCompiler_temp$$897_JSCompiler_temp$$898_oldOpener$$inline_919$$;
              } catch ($e$$inline_920$$) {
              }
            }
            $JSCompiler_temp$$896_JSCompiler_temp$$897_JSCompiler_temp$$898_oldOpener$$inline_919$$ = $JSCompiler_temp$$899_isSupported$$inline_918$$ ? 6 : 4;
          }
        }
      }
      $JSCompiler_temp$$770_JSCompiler_temp_const$$895_winObj$$1$$.tp = $JSCompiler_temp$$896_JSCompiler_temp$$897_JSCompiler_temp$$898_oldOpener$$inline_919$$;
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
        if ($JSCompiler_temp$$770_JSCompiler_temp_const$$895_winObj$$1$$ = this.$peerWindowObject_$) {
          try {
            $JSCompiler_temp$$770_JSCompiler_temp_const$$895_winObj$$1$$ = window.document.domain == this.$peerWindowObject_$.document.domain;
          } catch ($e$$inline_854$$) {
            $JSCompiler_temp$$770_JSCompiler_temp_const$$895_winObj$$1$$ = !1;
          }
        }
        $JSCompiler_temp$$770_JSCompiler_temp_const$$895_winObj$$1$$ ? this.$transport_$ = new $goog$net$xpc$DirectTransport$$(this, this.$domHelper_$) : $goog$log$info$$("DirectTransport not supported for this window, peer window in different security context or not set yet.");
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
  this.$isConnected$() ? $JSCompiler_StaticMethods_isPeerAvailable$$(this) ? ($goog$isObject$$($payload$$28$$) && ($payload$$28$$ = $goog$json$serialize$$($payload$$28$$)), this.$transport_$.send($JSCompiler_StaticMethods_escapeServiceName_$$($serviceName$$8$$), $payload$$28$$)) : ($goog$log$error$$("Peer has disappeared."), this.close()) : $goog$log$error$$("Can't send. Channel not connected.");
};
$JSCompiler_prototypeAlias$$.$xpcDeliver$ = function $$JSCompiler_prototypeAlias$$$$xpcDeliver$$($name$$inline_403_serviceName$$9_serviceName$$inline_406$$, $payload$$29$$, $opt_origin_service$$inline_408_service$$inline_859$$) {
  if (this.$peerWindowDeferred_$) {
    this.$deferredDeliveries_$.push($goog$bind$$(this.$xpcDeliver$, this, $name$$inline_403_serviceName$$9_serviceName$$inline_406$$, $payload$$29$$, $opt_origin_service$$inline_408_service$$inline_859$$));
  } else {
    var $objectPayload$$inline_864_peerHostname$$inline_401$$ = this.$cfg_$.ph;
    if ($goog$string$isEmptySafe$$($opt_origin_service$$inline_408_service$$inline_859$$) || $goog$string$isEmptySafe$$($objectPayload$$inline_864_peerHostname$$inline_401$$) || $opt_origin_service$$inline_408_service$$inline_859$$ == this.$cfg_$.ph) {
      if (this.$disposed_$) {
        $goog$log$warning$$($goog$net$xpc$logger$$, "CrossPageChannel::xpcDeliver(): Disposed.");
      } else {
        if ($name$$inline_403_serviceName$$9_serviceName$$inline_406$$ && "tp" != $name$$inline_403_serviceName$$9_serviceName$$inline_406$$) {
          if (this.$isConnected$()) {
            if ($name$$inline_403_serviceName$$9_serviceName$$inline_406$$ = $name$$inline_403_serviceName$$9_serviceName$$inline_406$$.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), $name$$inline_403_serviceName$$9_serviceName$$inline_406$$ = $goog$net$xpc$CrossPageChannel$TRANSPORT_SERVICE_UNESCAPE_RE_$$.test($name$$inline_403_serviceName$$9_serviceName$$inline_406$$) ? $name$$inline_403_serviceName$$9_serviceName$$inline_406$$.substring(1) : $name$$inline_403_serviceName$$9_serviceName$$inline_406$$, 
            $opt_origin_service$$inline_408_service$$inline_859$$ = this.$services_$[$name$$inline_403_serviceName$$9_serviceName$$inline_406$$], $opt_origin_service$$inline_408_service$$inline_859$$ || (this.$defaultService_$ ? $opt_origin_service$$inline_408_service$$inline_859$$ = {$callback$:$goog$partial$$(this.$defaultService_$, $name$$inline_403_serviceName$$9_serviceName$$inline_406$$), $objectPayload$:$goog$isObject$$($payload$$29$$)} : ($goog$log$warning$$(this.logger, 'Unknown service name "' + 
            $name$$inline_403_serviceName$$9_serviceName$$inline_406$$ + '"'), $opt_origin_service$$inline_408_service$$inline_859$$ = null)), $opt_origin_service$$inline_408_service$$inline_859$$) {
              var $decodedPayload$$inline_409$$;
              a: {
                if (($objectPayload$$inline_864_peerHostname$$inline_401$$ = $opt_origin_service$$inline_408_service$$inline_859$$.$objectPayload$) && $goog$isString$$($payload$$29$$)) {
                  try {
                    $decodedPayload$$inline_409$$ = $goog$json$parse$$($payload$$29$$);
                    break a;
                  } catch ($err$$inline_865$$) {
                    $goog$log$warning$$(this.logger, "Expected JSON payload for " + $name$$inline_403_serviceName$$9_serviceName$$inline_406$$ + ', was "' + $payload$$29$$ + '"');
                    $decodedPayload$$inline_409$$ = null;
                    break a;
                  }
                } else {
                  if (!$objectPayload$$inline_864_peerHostname$$inline_401$$ && !$goog$isString$$($payload$$29$$)) {
                    $decodedPayload$$inline_409$$ = $goog$json$serialize$$($payload$$29$$);
                    break a;
                  }
                }
                $decodedPayload$$inline_409$$ = $payload$$29$$;
              }
              null != $decodedPayload$$inline_409$$ && $opt_origin_service$$inline_408_service$$inline_859$$.$callback$($decodedPayload$$inline_409$$);
            }
          } else {
            $goog$log$info$$("CrossPageChannel::xpcDeliver(): Not connected.");
          }
        } else {
          this.$transport_$.$transportServiceHandler$($payload$$29$$);
        }
      }
    } else {
      $goog$log$warning$$($goog$net$xpc$logger$$, 'Message received from unapproved origin "' + $opt_origin_service$$inline_408_service$$inline_859$$ + '" - rejected.');
    }
  }
};
function $JSCompiler_StaticMethods_escapeServiceName_$$($name$$74$$) {
  $goog$net$xpc$CrossPageChannel$TRANSPORT_SERVICE_ESCAPE_RE_$$.test($name$$74$$) && ($name$$74$$ = "%" + $name$$74$$);
  return $name$$74$$.replace(/[%:|]/g, encodeURIComponent);
}
function $JSCompiler_StaticMethods_getRole$$($JSCompiler_StaticMethods_getRole$self$$) {
  var $role$$3$$ = $JSCompiler_StaticMethods_getRole$self$$.$cfg_$.role;
  return $goog$isNumber$$($role$$3$$) ? $role$$3$$ : window.parent == $JSCompiler_StaticMethods_getRole$self$$.$peerWindowObject_$ ? 1 : 0;
}
function $JSCompiler_StaticMethods_updateChannelNameAndCatalog$$($JSCompiler_StaticMethods_updateChannelNameAndCatalog$self$$, $name$$76$$) {
  $goog$log$fine$$("changing channel name to " + $name$$76$$);
  delete $goog$net$xpc$channels$$[$JSCompiler_StaticMethods_updateChannelNameAndCatalog$self$$.name];
  $JSCompiler_StaticMethods_updateChannelNameAndCatalog$self$$.name = $name$$76$$;
  $goog$net$xpc$channels$$[$name$$76$$] = $JSCompiler_StaticMethods_updateChannelNameAndCatalog$self$$;
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
  for (var $name$$77$$ in $goog$net$xpc$channels$$) {
    $goog$dispose$$($goog$net$xpc$channels$$[$name$$77$$]);
  }
}
;var $viewbix$sdk$event$VideoEvent$Type$$ = {$CLICK$:"click", $DURATION_CHANGE$:"durationchange", $ENDED$:"ended", ERROR:"error", $FULLSCREEN_CHANGE$:"fullscreenchange", $LOADED_DATA$:"loadeddata", $LOAD_START$:"loadstart", $PAUSE$:"pause", $PLAYING$:"play", $SEEKED$:"seeked", $SEEKING$:"seeking", $TIME_UPDATE$:"timeupdate"};
function $viewbix$sdk$helper$ElementHelper$getAutoSize$$($element$$119$$) {
  var $originalWidth$$ = $element$$119$$.style.width, $originalHeight$$ = $element$$119$$.style.height, $size$$14_style$$inline_417_w$$inline_412$$ = "auto", $h$$inline_414_originalDisplay$$inline_418$$;
  $size$$14_style$$inline_417_w$$inline_412$$ instanceof $goog$math$Size$$ ? ($h$$inline_414_originalDisplay$$inline_418$$ = $size$$14_style$$inline_417_w$$inline_412$$.height, $size$$14_style$$inline_417_w$$inline_412$$ = $size$$14_style$$inline_417_w$$inline_412$$.width) : $h$$inline_414_originalDisplay$$inline_418$$ = "auto";
  $element$$119$$.style.width = $goog$style$getPixelStyleValue_$$($size$$14_style$$inline_417_w$$inline_412$$);
  $element$$119$$.style.height = $goog$style$getPixelStyleValue_$$($h$$inline_414_originalDisplay$$inline_418$$);
  $size$$14_style$$inline_417_w$$inline_412$$ = $element$$119$$.style;
  $h$$inline_414_originalDisplay$$inline_418$$ = $size$$14_style$$inline_417_w$$inline_412$$.display;
  var $originalVisibility$$inline_419$$ = $size$$14_style$$inline_417_w$$inline_412$$.visibility, $originalPosition$$inline_420$$ = $size$$14_style$$inline_417_w$$inline_412$$.position, $originalWidth$$inline_421$$ = $size$$14_style$$inline_417_w$$inline_412$$.width, $originalheight$$inline_422$$ = $size$$14_style$$inline_417_w$$inline_412$$.height;
  $size$$14_style$$inline_417_w$$inline_412$$.visibility = "hidden";
  $size$$14_style$$inline_417_w$$inline_412$$.position = "absolute";
  $size$$14_style$$inline_417_w$$inline_412$$.display = "inline-block";
  $size$$14_style$$inline_417_w$$inline_412$$.width = "auto";
  $size$$14_style$$inline_417_w$$inline_412$$.height = "auto";
  var $w$$inline_423$$ = $element$$119$$.offsetWidth, $h$$inline_424$$ = $element$$119$$.offsetHeight;
  $size$$14_style$$inline_417_w$$inline_412$$.display = $h$$inline_414_originalDisplay$$inline_418$$;
  $size$$14_style$$inline_417_w$$inline_412$$.position = $originalPosition$$inline_420$$;
  $size$$14_style$$inline_417_w$$inline_412$$.visibility = $originalVisibility$$inline_419$$;
  $size$$14_style$$inline_417_w$$inline_412$$.width = $originalWidth$$inline_421$$;
  $size$$14_style$$inline_417_w$$inline_412$$.height = $originalheight$$inline_422$$;
  $size$$14_style$$inline_417_w$$inline_412$$ = new $goog$math$Size$$($w$$inline_423$$, $h$$inline_424$$);
  $element$$119$$.style.width = $originalWidth$$;
  $element$$119$$.style.height = $originalHeight$$;
  return $size$$14_style$$inline_417_w$$inline_412$$;
}
;function $viewbix$sdk$helper$EventHelper$setupResizeListening$$() {
  function $resetTriggers$$($element$$126_expand$$) {
    var $contract_triggers$$ = $element$$126_expand$$.$__resizeTriggers__$;
    $element$$126_expand$$ = $contract_triggers$$.firstElementChild;
    var $contract_triggers$$ = $contract_triggers$$.lastElementChild, $expandChild$$ = $element$$126_expand$$.firstElementChild;
    $contract_triggers$$.scrollLeft = $contract_triggers$$.scrollWidth;
    $contract_triggers$$.scrollTop = $contract_triggers$$.scrollHeight;
    $expandChild$$.style.width = $element$$126_expand$$.offsetWidth + 1 + "px";
    $expandChild$$.style.height = $element$$126_expand$$.offsetHeight + 1 + "px";
    $element$$126_expand$$.scrollLeft = $element$$126_expand$$.scrollWidth;
    $element$$126_expand$$.scrollTop = $element$$126_expand$$.scrollHeight;
  }
  function $scrollListener$$($e$$74$$) {
    var $element$$128$$ = $e$$74$$.currentTarget;
    $resetTriggers$$($element$$128$$);
    $element$$128$$.$__resizeRAF__$ && $cancelFrame$$($element$$128$$.$__resizeRAF__$);
    $element$$128$$.$__resizeRAF__$ = $requestFrame$$(function() {
      if ($element$$128$$.offsetWidth != $element$$128$$.$__resizeLast__$.width || $element$$128$$.offsetHeight != $element$$128$$.$__resizeLast__$.height) {
        $element$$128$$.$__resizeLast__$.width = $element$$128$$.offsetWidth, $element$$128$$.$__resizeLast__$.height = $element$$128$$.offsetHeight, $element$$128$$.$__resizeListeners__$.forEach(function($fn$$16$$) {
          $fn$$16$$.call($element$$128$$, $e$$74$$);
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
      return function($id$$22$$) {
        return $cancel$$.call(window, $id$$22$$);
      };
    }()
  }
  window.$addResizeListener$ = function $window$$addResizeListener$$($element$$129$$, $fn$$19$$) {
    $attachEvent$$ ? $element$$129$$.attachEvent("onresize", $fn$$19$$) : ($element$$129$$.$__resizeTriggers__$ || ("static" == $goog$style$getComputedStyle$$($element$$129$$, "position") && ($element$$129$$.style.position = "relative"), $element$$129$$.$__resizeLast__$ = {}, $element$$129$$.$__resizeListeners__$ = [], ($element$$129$$.$__resizeTriggers__$ = document.createElement("div")).className = "resize-triggers", $element$$129$$.$__resizeTriggers__$.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>', 
    $element$$129$$.appendChild($element$$129$$.$__resizeTriggers__$), $resetTriggers$$($element$$129$$), $element$$129$$.addEventListener("scroll", $scrollListener$$, !0)), $element$$129$$.$__resizeListeners__$.push($fn$$19$$));
  };
  window.$removeResizeListener$ = function $window$$removeResizeListener$$($element$$130$$, $fn$$20$$) {
    $attachEvent$$ ? $element$$130$$.detachEvent("onresize", $fn$$20$$) : ($element$$130$$.$__resizeListeners__$.splice($element$$130$$.$__resizeListeners__$.indexOf($fn$$20$$), 1), $element$$130$$.$__resizeListeners__$.length || ($element$$130$$.removeEventListener("scroll", $scrollListener$$), $element$$130$$.$__resizeTriggers__$ = !$element$$130$$.removeChild($element$$130$$.$__resizeTriggers__$)));
  };
}
;function $viewbix$sdk$helper$UriHelper$getProtocolAndDomain$$() {
  var $uri$$44$$ = new $goog$Uri$$(document.location.href);
  return $uri$$44$$.$scheme_$ + "://" + $uri$$44$$.$domain_$;
}
function $viewbix$sdk$helper$UriHelper$getParameters$$() {
  var $result$$21$$ = {};
  $goog$array$forEach$$($JSCompiler_StaticMethods_getDecodedQuery$$().split("&"), function($el$$31_q$$) {
    $el$$31_q$$ = $el$$31_q$$.split("=");
    $result$$21$$[$el$$31_q$$[0]] = $el$$31_q$$[1];
  });
  return $result$$21$$;
}
;function $viewbix$sdk$XpcMessage$$($name$$83$$, $opt_data$$4$$) {
  this.name = $name$$83$$;
  this.data = null != $opt_data$$4$$ ? $opt_data$$4$$ : {};
}
function $viewbix$sdk$XpcMessage$createXpcPayload$$($name$$84$$, $opt_data$$5$$) {
  return{name:$name$$84$$, data:null != $opt_data$$5$$ ? $opt_data$$5$$ : {}};
}
function $viewbix$sdk$XpcMessage$fromXpcPayload$$($payload$$30$$) {
  var $objPayload$$ = $payload$$30$$;
  $goog$isString$$($payload$$30$$) && ($objPayload$$ = $goog$json$parse$$($payload$$30$$));
  return new $viewbix$sdk$XpcMessage$$($objPayload$$.name, $objPayload$$.data);
}
;function $viewbix$sdk$track$Snowplow$$() {
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
$viewbix$sdk$track$Snowplow$$.$getInstance$ = function $$viewbix$sdk$track$Snowplow$$$$getInstance$$() {
  return $viewbix$sdk$track$Snowplow$$.$instance_$ ? $viewbix$sdk$track$Snowplow$$.$instance_$ : $viewbix$sdk$track$Snowplow$$.$instance_$ = new $viewbix$sdk$track$Snowplow$$;
};
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
  $goog$array$forEach$$($goog$object$getKeys$$($context$$9$$), function($key$$107$$) {
    0 <= $goog$array$indexOf$$($schemaProperties$$1$$, $key$$107$$) && $goog$object$add$$($newContext$$, $key$$107$$, $context$$9$$[$key$$107$$]);
    if (0 <= $goog$array$indexOf$$($booleanProperties$$1$$, $key$$107$$) && $goog$isString$$($newContext$$[$key$$107$$])) {
      $newContext$$[$key$$107$$] = "true" === $newContext$$[$key$$107$$];
    } else {
      if (0 <= $goog$array$indexOf$$($numberProperties$$1$$, $key$$107$$) && $goog$isString$$($newContext$$[$key$$107$$])) {
        var $property$$inline_428_result$$inline_429_result$$inline_432$$ = $newContext$$[$key$$107$$];
        null != $property$$inline_428_result$$inline_429_result$$inline_432$$ ? ($property$$inline_428_result$$inline_429_result$$inline_432$$ = $goog$string$toNumber$$($property$$inline_428_result$$inline_429_result$$inline_432$$), isNaN($property$$inline_428_result$$inline_429_result$$inline_432$$) && ($property$$inline_428_result$$inline_429_result$$inline_432$$ = null)) : $property$$inline_428_result$$inline_429_result$$inline_432$$ = null;
        $newContext$$[$key$$107$$] = $property$$inline_428_result$$inline_429_result$$inline_432$$;
      } else {
        0 <= $goog$array$indexOf$$($integerProperties$$1$$, $key$$107$$) && $goog$isString$$($newContext$$[$key$$107$$]) && ($property$$inline_428_result$$inline_429_result$$inline_432$$ = $goog$string$parseInt$$($newContext$$[$key$$107$$]), isNaN($property$$inline_428_result$$inline_429_result$$inline_432$$) && ($property$$inline_428_result$$inline_429_result$$inline_432$$ = null), $newContext$$[$key$$107$$] = $property$$inline_428_result$$inline_429_result$$inline_432$$);
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
        var $appPlacement_re$$inline_436$$;
        $appPlacement_re$$inline_436$$ = new RegExp($goog$string$regExpEscape$$("Apps"), "");
        $appPlacement_re$$inline_436$$ = $appAssociationProperty$$.replace($appPlacement_re$$inline_436$$, "");
        $goog$object$add$$($appAssociation_context$$10$$.data, "appPlacement", $appPlacement_re$$inline_436$$);
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
    var $selectedAppId$$ = $opt_trackingData$$2$$.$application$.id, $firstVisibleApp_menuElements$$ = $opt_trackingData$$2$$.$menu$.element.children[0].children, $lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$ = $firstVisibleApp_menuElements$$.length - ($opt_trackingData$$2$$.$menu$.$maxItems$ <= $opt_trackingData$$2$$.$menu$.$apps$.length ? 1 : 0), $appInMenu$$ = $goog$array$find$$($firstVisibleApp_menuElements$$, function($element$$137$$) {
      return $element$$137$$.getAttribute("data-app-id") == $selectedAppId$$;
    });
    null == $appInMenu$$ && null != $opt_trackingData$$2$$.$menu$.$overflowElement$ && 0 < $opt_trackingData$$2$$.$menu$.$overflowElement$.children.length && ($firstVisibleApp_menuElements$$ = $opt_trackingData$$2$$.$menu$.$overflowElement$.children[0].children, $appInMenu$$ = $goog$array$find$$($firstVisibleApp_menuElements$$, function($element$$138$$) {
      return $element$$138$$.getAttribute("data-app-id") == $selectedAppId$$;
    }), null != $appInMenu$$ && ($lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$ = $firstVisibleApp_menuElements$$.length));
    var $lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$ = $lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$ - 1, $firstVisibleAppId$$ = $firstVisibleApp_menuElements$$[0].getAttribute("data-app-id"), $lastVisibleAppId$$ = $firstVisibleApp_menuElements$$[$lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$].getAttribute("data-app-id"), $firstVisibleApp_menuElements$$ = $goog$array$find$$($opt_trackingData$$2$$.$menu$.$apps$, function($element$$139$$) {
      return $element$$139$$.id == $firstVisibleAppId$$;
    }), $lastVisibleApp_lastVisibleAppIndex_numVisibleApps$$ = $goog$array$find$$($opt_trackingData$$2$$.$menu$.$apps$, function($element$$140$$) {
      return $element$$140$$.id == $lastVisibleAppId$$;
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
  "applications" in $playerConfigurations$$ && delete $playerConfigurations$$.applications;
  return{schema:"iglu:com.viewbix/player_config_context/jsonschema/1-0-0", data:$viewbix$sdk$track$Snowplow$adaptContextToSchema$$($playerConfigurations$$, "affiliateRegex deleted locked videoEmailUrl tinyUrl detailsAppId defaultTwitterMessage facebookSharePageUrl playerId memberId videoUrl videoThumbnailUrl title ctaText ctaLink backgroundColor backButton|buttonBackgroundColor0 backButton|buttonBackgroundColor1 titleTextFormatColor ctaButtonBackgroundColor ctaButton|buttonBackgroundColor0 ctaButtonButtonTextFormatColor standardTextFormatFont cornerRadius customLogoUrl customLogoLink scaleLogoToTitleBar backgroundImage bottomLogoUrl bottomLogoLink showFacebookButton showTwitterButton showShareButton playVideoInApps backToVideoText showQualityButton useYouTubeHighQuality showViewbixBranding shareASaleAffiliateId videoLink keepControlsVisible fbConversionPixel".split(" "), 
  "deleted locked scaleLogoToTitleBar showFacebookButton showTwitterButton showShareButton playVideoInApps showQualityButton useYouTubeHighQuality showViewbixBranding keepControlsVisible".split(" "), "backgroundColor backButton|buttonBackgroundColor0 backButton|buttonBackgroundColor1 titleTextFormatColor ctaButtonBackgroundColor ctaButton|buttonBackgroundColor0 ctaButtonButtonTextFormatColor cornerRadius".split(" "), [])};
}
function $viewbix$sdk$track$Snowplow$getVideoContext$$() {
  var $JSCompiler_temp$$43_JSCompiler_temp_const$$44$$;
  if ($goog$string$isEmptySafe$$($viewbix$sdk$track$Snowplow$$.$getInstance$().$videoUrl$)) {
    $JSCompiler_temp$$43_JSCompiler_temp_const$$44$$ = null;
  } else {
    $JSCompiler_temp$$43_JSCompiler_temp_const$$44$$ = $viewbix$sdk$track$Snowplow$$.$getInstance$().$videoPlayer$.currentTime();
    var $JSCompiler_inline_result$$45_timeRanges$$inline_438$$;
    $JSCompiler_inline_result$$45_timeRanges$$inline_438$$ = $viewbix$sdk$track$Snowplow$$.$getInstance$().$videoPlayer$.played();
    $JSCompiler_inline_result$$45_timeRanges$$inline_438$$ = null == $JSCompiler_inline_result$$45_timeRanges$$inline_438$$ || 0 == $JSCompiler_inline_result$$45_timeRanges$$inline_438$$.length || 0 == $JSCompiler_inline_result$$45_timeRanges$$inline_438$$.start(0) && 0 == $JSCompiler_inline_result$$45_timeRanges$$inline_438$$.end(0) ? $viewbix$sdk$track$PlayerState$UNSTARTED$$ : $viewbix$sdk$track$Snowplow$$.$getInstance$().$videoPlayer$.paused() ? $viewbix$sdk$track$PlayerState$PAUSED$$ : $viewbix$sdk$track$PlayerState$PLAYING$$;
    $JSCompiler_temp$$43_JSCompiler_temp_const$$44$$ = {schema:"iglu:com.viewbix/video_context/jsonschema/1-0-0", data:{currentTime:$JSCompiler_temp$$43_JSCompiler_temp_const$$44$$, state:$JSCompiler_inline_result$$45_timeRanges$$inline_438$$, src:$viewbix$sdk$track$Snowplow$$.$getInstance$().$videoPlayer$.currentSrc(), volume:$viewbix$sdk$track$Snowplow$$.$getInstance$().$videoPlayer$.volume(), height:$viewbix$sdk$track$Snowplow$$.$getInstance$().$videoPlayer$.height()}};
  }
  return $JSCompiler_temp$$43_JSCompiler_temp_const$$44$$;
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
  null == $data$$70_interactionData_trackingData$$.target && "target" in $data$$70_interactionData_trackingData$$ && delete $data$$70_interactionData_trackingData$$.target;
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
  var $referrer$$ = document.referrer, $query$$8$$ = new $goog$Uri$QueryData$$(document.location.search.substring(1));
  $query$$8$$.$containsKey$($viewbix$sdk$track$TrackingParam$HTTP_REFERRER$$) && ($referrer$$ = $query$$8$$.get($viewbix$sdk$track$TrackingParam$HTTP_REFERRER$$), window.spvb("setReferrerUrl", $referrer$$));
  return{autoplay:-1 != window.location.href.indexOf("&ap=true"), layout:window.VBX_LAYOUT_NAME, query:window.location.search, cookies:document.cookie, headers:[$referrer$$]};
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
;function $viewbix$sdk$VbxNodeList$$($target$$60$$) {
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
  var $result$$27$$;
  1 == this.$nodeList_$.length ? $result$$27$$ = $goog$style$evaluateWithTemporaryDisplay_$$(this.$nodeList_$[0]) : ($result$$27$$ = [], $goog$array$forEach$$(this.$nodeList_$, function($node$$35$$) {
    $result$$27$$.push($goog$style$evaluateWithTemporaryDisplay_$$($node$$35$$));
  }));
  return $result$$27$$;
};
$JSCompiler_prototypeAlias$$.$getAutoSize$ = function $$JSCompiler_prototypeAlias$$$$getAutoSize$$() {
  var $result$$28$$;
  1 == this.$nodeList_$.length ? $result$$28$$ = $viewbix$sdk$helper$ElementHelper$getAutoSize$$(this.$nodeList_$[0]) : ($result$$28$$ = [], $goog$array$forEach$$(this.$nodeList_$, function($node$$36$$) {
    $result$$28$$.push($viewbix$sdk$helper$ElementHelper$getAutoSize$$($node$$36$$));
  }));
  return $result$$28$$;
};
$JSCompiler_prototypeAlias$$.$getPageOffset$ = function $$JSCompiler_prototypeAlias$$$$getPageOffset$$() {
  var $result$$29$$;
  1 == this.$nodeList_$.length ? $result$$29$$ = $goog$style$getPageOffset$$(this.$nodeList_$[0]) : ($result$$29$$ = [], $goog$array$forEach$$(this.$nodeList_$, function($node$$37$$) {
    $result$$29$$.push($goog$style$getPageOffset$$($node$$37$$));
  }));
  return $result$$29$$;
};
$JSCompiler_prototypeAlias$$.$getPageOffsetLeft$ = function $$JSCompiler_prototypeAlias$$$$getPageOffsetLeft$$() {
  var $result$$30$$;
  1 == this.$nodeList_$.length ? $result$$30$$ = $goog$style$getPageOffset$$(this.$nodeList_$[0]).x : ($result$$30$$ = [], $goog$array$forEach$$(this.$nodeList_$, function($node$$38$$) {
    $result$$30$$.push($goog$style$getPageOffset$$($node$$38$$).x);
  }));
  return $result$$30$$;
};
$JSCompiler_prototypeAlias$$.$getPageOffsetTop$ = function $$JSCompiler_prototypeAlias$$$$getPageOffsetTop$$() {
  var $result$$31$$;
  1 == this.$nodeList_$.length ? $result$$31$$ = $goog$style$getPageOffset$$(this.$nodeList_$[0]).y : ($result$$31$$ = [], $goog$array$forEach$$(this.$nodeList_$, function($node$$39$$) {
    $result$$31$$.push($goog$style$getPageOffset$$($node$$39$$).y);
  }));
  return $result$$31$$;
};
var $viewbix$sdk$track$TrackingParam$HTTP_REFERRER$$ = "r", $viewbix$sdk$track$TrackEventType$VSTART_UNIQUE$$ = "VSTART_UNIQUE", $viewbix$sdk$track$TrackEventType$VTHRESH_25$$ = "VTHRESH_25", $viewbix$sdk$track$TrackEventType$VTHRESH_50$$ = "VTHRESH_50", $viewbix$sdk$track$TrackEventType$VTHRESH_75$$ = "VTHRESH_75", $viewbix$sdk$track$TrackEventType$VTHRESH_100$$ = "VTHRESH_100", $viewbix$sdk$track$TrackEventType$USER_CLICK_CALL_TO_ACTION$$ = "USER_CLICK_CALL_TO_ACTION", $viewbix$sdk$track$TrackEventType$USER_CLICK_VIDEO_CALL_TO_ACTION$$ = 
"USER_CLICK_VIDEO_CALL_TO_ACTION", $viewbix$sdk$track$TrackEventType$USER_CLICK_MENU_ITEM$$ = "USER_CLICK_MENU_ITEM", $viewbix$sdk$track$TrackEventType$SYSTEM_SHOW_PREROLL_APP$$ = "SYSTEM_SHOW_PREROLL_APP", $viewbix$sdk$track$TrackEventType$SYSTEM_SHOW_MIDROLL_APP$$ = "SYSTEM_SHOW_MIDROLL_APP", $viewbix$sdk$track$TrackEventType$SYSTEM_SHOW_POSTROLL_APP$$ = "SYSTEM_SHOW_POSTROLL_APP", $viewbix$sdk$track$TrackEventType$USER_APP_COMPLETE$$ = "USER_APP_COMPLETE", $viewbix$sdk$track$TrackEventType$USER_ROLLAPP_COMPLETE$$ = 
"USER_ROLLAPP_COMPLETE", $viewbix$sdk$track$TrackEventType$USER_APP_SKIP$$ = "USER_APP_SKIP", $viewbix$sdk$track$TrackEventType$USER_APP_SELECT$$ = "USER_APP_SELECT", $viewbix$sdk$track$TrackEventType$USER_APP_DESELECT$$ = "USER_APP_DESELECT", $viewbix$sdk$track$TrackEventType$USER_APP_LOAD$$ = "USER_APP_LOAD", $viewbix$sdk$track$TrackEventType$USER_APP_RENDER$$ = "USER_APP_RENDER", $viewbix$sdk$track$TrackEventType$USER_CLICK_LOGO$$ = "USER_CLICK_LOGO", $viewbix$sdk$track$TrackEventType$USER_CLICK_SLIDER_IMAGE$$ = 
"USER_CLICK_SLIDER_IMAGE", $viewbix$sdk$track$TrackEventType$USER_NAVIGATE_TO_PAGE$$ = "USER_NAVIGATE_TO_PAGE", $viewbix$sdk$track$TrackEventType$IMPRESSION$$ = "IMPRESSION", $viewbix$sdk$track$PlayerState$UNSTARTED$$ = "unstarted", $viewbix$sdk$track$PlayerState$PLAYING$$ = "playing", $viewbix$sdk$track$PlayerState$PAUSED$$ = "paused";
var $viewbix$sdk$Core$detectedFeatures$$ = null, $viewbix$sdk$Core$windowOpen$$ = window.open;
window.open = function $window$open$($opt_url$$3_queryParams$$inline_474$$, $opt_name$$1$$, $opt_features$$, $opt_bool$$) {
  a: {
    var $qp$$inline_487_url$$inline_472$$ = $opt_url$$3_queryParams$$inline_474$$, $configFunction$$inline_473_linkParts$$inline_486_namedGroups$$inline_480_reString0$$inline_477$$ = null;
    try {
      null != getPlayerConfigurations && $goog$isFunction$$(getPlayerConfigurations) && ($configFunction$$inline_473_linkParts$$inline_486_namedGroups$$inline_480_reString0$$inline_477$$ = getPlayerConfigurations);
    } catch ($e$$inline_495$$) {
    }
    try {
      null != getAppConfigs && $goog$isFunction$$(getAppConfigs) && ($configFunction$$inline_473_linkParts$$inline_486_namedGroups$$inline_480_reString0$$inline_477$$ = getAppConfigs);
    } catch ($e$$inline_496$$) {
    }
    if ($goog$isFunction$$($configFunction$$inline_473_linkParts$$inline_486_namedGroups$$inline_480_reString0$$inline_477$$)) {
      $opt_url$$3_queryParams$$inline_474$$ = $viewbix$sdk$helper$UriHelper$getParameters$$();
      for (var $k$$inline_490_linkQuery$$inline_488_regexArray$$inline_475$$ = $configFunction$$inline_473_linkParts$$inline_486_namedGroups$$inline_480_reString0$$inline_477$$().affiliateRegex, $currentValue$$inline_883_i$$inline_476_linkQueryParams$$inline_489$$ = 0;$currentValue$$inline_883_i$$inline_476_linkQueryParams$$inline_489$$ < $k$$inline_490_linkQuery$$inline_488_regexArray$$inline_475$$.length;$currentValue$$inline_883_i$$inline_476_linkQueryParams$$inline_489$$++) {
        for (var $configFunction$$inline_473_linkParts$$inline_486_namedGroups$$inline_480_reString0$$inline_477$$ = $k$$inline_490_linkQuery$$inline_488_regexArray$$inline_475$$[$currentValue$$inline_883_i$$inline_476_linkQueryParams$$inline_489$$], $configFunction$$inline_473_linkParts$$inline_486_namedGroups$$inline_480_reString0$$inline_477$$ = $configFunction$$inline_473_linkParts$$inline_486_namedGroups$$inline_480_reString0$$inline_477$$.replace(/\\\|/g, "&pipe;"), $index$$inline_884_linkQueryParamParts$$inline_491_reArray$$inline_478$$ = 
        $configFunction$$inline_473_linkParts$$inline_486_namedGroups$$inline_480_reString0$$inline_477$$.split("|"), $j$$inline_479_linkQueryParamName$$inline_492$$ = 0;$j$$inline_479_linkQueryParamName$$inline_492$$ < $index$$inline_884_linkQueryParamParts$$inline_491_reArray$$inline_478$$.length;$j$$inline_479_linkQueryParamName$$inline_492$$++) {
          var $configFunction$$inline_473_linkParts$$inline_486_namedGroups$$inline_480_reString0$$inline_477$$ = {}, $m$$inline_485_reString$$inline_481$$ = $index$$inline_884_linkQueryParamParts$$inline_491_reArray$$inline_478$$[$j$$inline_479_linkQueryParamName$$inline_492$$], $m$$inline_485_reString$$inline_481$$ = $m$$inline_485_reString$$inline_481$$.replace("&pipe;", "\\|"), $reGroupFinder$$inline_482$$ = /\?P<([^>]+)>/g, $groupNumber$$inline_483$$ = 0, $groupMatch$$inline_484$$;
          do {
            $groupMatch$$inline_484$$ = $reGroupFinder$$inline_482$$.exec($m$$inline_485_reString$$inline_481$$), null != $groupMatch$$inline_484$$ && ($groupNumber$$inline_483$$++, $configFunction$$inline_473_linkParts$$inline_486_namedGroups$$inline_480_reString0$$inline_477$$[$groupNumber$$inline_483$$] = $groupMatch$$inline_484$$[1]);
          } while (null != $groupMatch$$inline_484$$);
          $reGroupFinder$$inline_482$$.lastIndex = 0;
          $m$$inline_485_reString$$inline_481$$ = $m$$inline_485_reString$$inline_481$$.replace($reGroupFinder$$inline_482$$, "");
          $m$$inline_485_reString$$inline_481$$ = (new RegExp($m$$inline_485_reString$$inline_481$$)).exec($qp$$inline_487_url$$inline_472$$);
          if (null != $m$$inline_485_reString$$inline_481$$) {
            if ("query" == $configFunction$$inline_473_linkParts$$inline_486_namedGroups$$inline_480_reString0$$inline_477$$[1]) {
              if ($configFunction$$inline_473_linkParts$$inline_486_namedGroups$$inline_480_reString0$$inline_477$$ = $qp$$inline_487_url$$inline_472$$.split("?"), 1 < $configFunction$$inline_473_linkParts$$inline_486_namedGroups$$inline_480_reString0$$inline_477$$.length) {
                $qp$$inline_487_url$$inline_472$$ = {};
                $k$$inline_490_linkQuery$$inline_488_regexArray$$inline_475$$ = $configFunction$$inline_473_linkParts$$inline_486_namedGroups$$inline_480_reString0$$inline_477$$[1];
                $currentValue$$inline_883_i$$inline_476_linkQueryParams$$inline_489$$ = $k$$inline_490_linkQuery$$inline_488_regexArray$$inline_475$$.split("&");
                for ($k$$inline_490_linkQuery$$inline_488_regexArray$$inline_475$$ = 0;$k$$inline_490_linkQuery$$inline_488_regexArray$$inline_475$$ < $currentValue$$inline_883_i$$inline_476_linkQueryParams$$inline_489$$.length;$k$$inline_490_linkQuery$$inline_488_regexArray$$inline_475$$++) {
                  $index$$inline_884_linkQueryParamParts$$inline_491_reArray$$inline_478$$ = $currentValue$$inline_883_i$$inline_476_linkQueryParams$$inline_489$$[$k$$inline_490_linkQuery$$inline_488_regexArray$$inline_475$$].split("="), $j$$inline_479_linkQueryParamName$$inline_492$$ = $index$$inline_884_linkQueryParamParts$$inline_491_reArray$$inline_478$$[0], $qp$$inline_487_url$$inline_472$$[$j$$inline_479_linkQueryParamName$$inline_492$$] = $opt_url$$3_queryParams$$inline_474$$.hasOwnProperty($j$$inline_479_linkQueryParamName$$inline_492$$) ? 
                  $opt_url$$3_queryParams$$inline_474$$[$j$$inline_479_linkQueryParamName$$inline_492$$] : 1 < $index$$inline_884_linkQueryParamParts$$inline_491_reArray$$inline_478$$.length ? null : $index$$inline_884_linkQueryParamParts$$inline_491_reArray$$inline_478$$[1];
                }
                var $k$$inline_490_linkQuery$$inline_488_regexArray$$inline_475$$ = "", $key$$inline_493_queryParamValue$$inline_494$$;
                for ($key$$inline_493_queryParamValue$$inline_494$$ in $qp$$inline_487_url$$inline_472$$) {
                  0 < $k$$inline_490_linkQuery$$inline_488_regexArray$$inline_475$$.length && ($k$$inline_490_linkQuery$$inline_488_regexArray$$inline_475$$ += "&"), $k$$inline_490_linkQuery$$inline_488_regexArray$$inline_475$$ += $key$$inline_493_queryParamValue$$inline_494$$ + "=" + $qp$$inline_487_url$$inline_472$$[$key$$inline_493_queryParamValue$$inline_494$$];
                }
                $qp$$inline_487_url$$inline_472$$ = $configFunction$$inline_473_linkParts$$inline_486_namedGroups$$inline_480_reString0$$inline_477$$[0] + "?" + $k$$inline_490_linkQuery$$inline_488_regexArray$$inline_475$$;
              }
            } else {
              for ($k$$inline_490_linkQuery$$inline_488_regexArray$$inline_475$$ = 1;$k$$inline_490_linkQuery$$inline_488_regexArray$$inline_475$$ < $m$$inline_485_reString$$inline_481$$.length;$k$$inline_490_linkQuery$$inline_488_regexArray$$inline_475$$++) {
                $key$$inline_493_queryParamValue$$inline_494$$ = $opt_url$$3_queryParams$$inline_474$$[$configFunction$$inline_473_linkParts$$inline_486_namedGroups$$inline_480_reString0$$inline_477$$[$k$$inline_490_linkQuery$$inline_488_regexArray$$inline_475$$]], null != $key$$inline_493_queryParamValue$$inline_494$$ && ($currentValue$$inline_883_i$$inline_476_linkQueryParams$$inline_489$$ = $m$$inline_485_reString$$inline_481$$[$k$$inline_490_linkQuery$$inline_488_regexArray$$inline_475$$], $index$$inline_884_linkQueryParamParts$$inline_491_reArray$$inline_478$$ = 
                $qp$$inline_487_url$$inline_472$$.indexOf($currentValue$$inline_883_i$$inline_476_linkQueryParams$$inline_489$$, $m$$inline_485_reString$$inline_481$$.index), $qp$$inline_487_url$$inline_472$$ = $qp$$inline_487_url$$inline_472$$.substring(0, $index$$inline_884_linkQueryParamParts$$inline_491_reArray$$inline_478$$) + $key$$inline_493_queryParamValue$$inline_494$$ + $qp$$inline_487_url$$inline_472$$.substr($index$$inline_884_linkQueryParamParts$$inline_491_reArray$$inline_478$$ + $currentValue$$inline_883_i$$inline_476_linkQueryParams$$inline_489$$.length))
                ;
              }
            }
            $opt_url$$3_queryParams$$inline_474$$ = $qp$$inline_487_url$$inline_472$$;
            break a;
          }
        }
      }
    }
    $opt_url$$3_queryParams$$inline_474$$ = $qp$$inline_487_url$$inline_472$$;
  }
  return $viewbix$sdk$Core$windowOpen$$.call(window, $opt_url$$3_queryParams$$inline_474$$, $opt_name$$1$$, $opt_features$$, $opt_bool$$);
};
function $viewbix$api$LayoutApi$$($playerId$$2$$, $layoutName$$, $opt_layoutSchemeAndAuthority$$, $opt_debug$$, $opt_local$$, $opt_minified$$) {
  $goog$events$EventTarget$$.call(this);
  this.$playerId$ = $playerId$$2$$;
  this.$layoutName$ = $layoutName$$;
  this.$layoutSchemeAndAuthority$ = $opt_layoutSchemeAndAuthority$$ || null;
  null != $opt_layoutSchemeAndAuthority$$ && "/" == $opt_layoutSchemeAndAuthority$$.substr(-1) && (this.$layoutSchemeAndAuthority$ = $opt_layoutSchemeAndAuthority$$.substr(0, $opt_layoutSchemeAndAuthority$$.length - 1));
  this.debug = $opt_debug$$ || !1;
  this.$minified_$ = $opt_minified$$ || !1;
  this.local = $opt_local$$ || !1;
  this.getElement = this.$getElement$;
}
$goog$inherits$$($viewbix$api$LayoutApi$$, $goog$events$EventTarget$$);
$JSCompiler_prototypeAlias$$ = $viewbix$api$LayoutApi$$.prototype;
$JSCompiler_prototypeAlias$$.$getElement$ = function $$JSCompiler_prototypeAlias$$$$getElement$$() {
  return this.element;
};
$JSCompiler_prototypeAlias$$.$getAdditionalQueryParams$ = function $$JSCompiler_prototypeAlias$$$$getAdditionalQueryParams$$() {
  return "";
};
function $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$$($JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$, $opt_hostPlayer$$) {
  var $layoutNameParameter_layoutUrl$$ = "";
  null != $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.$layoutName$ && ($layoutNameParameter_layoutUrl$$ = "&layout=" + $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.$layoutName$);
  var $layoutNameParameter_layoutUrl$$ = (null != $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.$layoutSchemeAndAuthority$ ? $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.$layoutSchemeAndAuthority$ : $viewbix$sdk$helper$UriHelper$getProtocolAndDomain$$()) + "/frame/" + $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.$playerId$ + "?debug=" + $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.debug.toString() + "&local=" + $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.local.toString() + 
  "&minified=" + $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.$minified_$.toString() + $layoutNameParameter_layoutUrl$$ + "&hostName=" + $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.$getHostName$() + $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.$getAdditionalQueryParams$(), $config$$1$$ = {};
  $config$$1$$.pu = $layoutNameParameter_layoutUrl$$;
  null != $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.channel && $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.channel.close();
  $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.channel = new $goog$net$xpc$CrossPageChannel$$($config$$1$$);
  $JSCompiler_StaticMethods_registerService$$($JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.channel, "LAYOUT_SERVICE", $goog$bind$$(function($payload$$31$$) {
    this.$receiveMessageFromLayout$($viewbix$sdk$XpcMessage$fromXpcPayload$$($payload$$31$$));
  }, $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$));
  $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.element = $goog$dom$createDom$$("DIV", {"class":"vbx-layout"});
  $JSCompiler_StaticMethods_createPeerIframe$$($JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.channel, $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.element, $goog$bind$$(function($iframe$$1$$) {
    this.$iframeElement_$ = $iframe$$1$$;
    $goog$style$setStyle$$(this.$iframeElement_$, {position:"absolute", top:"0", left:"0", width:"100%", height:"100%", border:"none"});
  }, $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$));
  $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.channel.$connect$(function() {
    $goog$isFunction$$(void 0) && (void 0)();
  });
  $goog$userAgent$IPHONE$$ && window.setTimeout(function() {
    var $iframeElement$$ = this.element.querySelector("iframe");
    null == $iframeElement$$ || $goog$string$isEmptySafe$$($iframeElement$$.src) || ($iframeElement$$.src = $iframeElement$$.src);
  }, 1E3);
  null != $opt_hostPlayer$$ && ($JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.$hostPlayer$ = $opt_hostPlayer$$, $JSCompiler_StaticMethods_listenToAllVideoEvents$$($JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$), $JSCompiler_StaticMethods_registerService$$($JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$.channel, "EXTERNAL_PLAYER_SERVICE", $goog$bind$$(function($payload$$32$$) {
    this.$receiveMessageFromExternalPlayer$($viewbix$sdk$XpcMessage$fromXpcPayload$$($payload$$32$$));
  }, $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$self$$)));
}
$JSCompiler_prototypeAlias$$.$receiveMessageFromLayout$ = function $$JSCompiler_prototypeAlias$$$$receiveMessageFromLayout$$($message$$29_payload$$33$$) {
  switch($message$$29_payload$$33$$.name) {
    case "DOM_CONTENT_LOADED":
      $message$$29_payload$$33$$ = $viewbix$sdk$XpcMessage$createXpcPayload$$("COMPLETE"), null != this.channel && null != $message$$29_payload$$33$$ && this.channel.send("LAYOUT_SERVICE", $message$$29_payload$$33$$), null != this.$hostPlayer$ && !this.$hostPlayer$.paused && $JSCompiler_StaticMethods_sendMessageToExternalPlayer$$(this, $viewbix$sdk$XpcMessage$createXpcPayload$$("play", $JSCompiler_StaticMethods_createVideoplayerData$$(this)));
  }
};
$JSCompiler_prototypeAlias$$.$receiveMessageFromExternalPlayer$ = function $$JSCompiler_prototypeAlias$$$$receiveMessageFromExternalPlayer$$($message$$30_seconds$$) {
  switch($message$$30_seconds$$.name) {
    case "LOAD":
      this.$hostPlayer$.src = $message$$30_seconds$$.data;
      break;
    case "PLAY":
      this.$hostPlayer$.play();
      break;
    case "PAUSE":
      this.$hostPlayer$.pause();
      break;
    case "BEFORE_SHOW_OVERLAY":
      this.$beforeShowOverlay$();
      break;
    case "AFTER_HIDE_OVERLAY":
      this.$afterHideOverlay$();
      break;
    case "AFTER_CREATE_PLAYER":
      this.$afterCreatePlayer$();
      break;
    case "CURRENT_TIME":
      $goog$isString$$($message$$30_seconds$$.data) && ($message$$30_seconds$$ = $goog$string$toNumber$$($message$$30_seconds$$.data.toString()), null != $message$$30_seconds$$ && (this.$hostPlayer$.currentTime = $message$$30_seconds$$));
      break;
    case "POSTER":
      $goog$isString$$($message$$30_seconds$$.data) && (this.$hostPlayer$.poster = $message$$30_seconds$$.data.toString());
      break;
    case "CONTROLS":
      $goog$isString$$($message$$30_seconds$$.data) && (this.$hostPlayer$.controls = "true" == $message$$30_seconds$$.data.toString().toLowerCase());
      break;
    case "AUTO_PLAY":
      break;
    default:
      debugger;
  }
};
function $JSCompiler_StaticMethods_sendMessageToLayout$$($JSCompiler_StaticMethods_sendMessageToLayout$self$$, $payload$$34$$) {
  null != $JSCompiler_StaticMethods_sendMessageToLayout$self$$.channel && null != $payload$$34$$ && ($goog$json$serialize$$($payload$$34$$), $JSCompiler_StaticMethods_sendMessageToLayout$self$$.channel.send("LAYOUT_SERVICE", $payload$$34$$));
}
function $JSCompiler_StaticMethods_sendMessageToExternalPlayer$$($JSCompiler_StaticMethods_sendMessageToExternalPlayer$self$$, $payload$$35$$) {
  null != $JSCompiler_StaticMethods_sendMessageToExternalPlayer$self$$.channel && null != $payload$$35$$ && ($goog$json$serialize$$($payload$$35$$), $JSCompiler_StaticMethods_sendMessageToExternalPlayer$self$$.channel.send("EXTERNAL_PLAYER_SERVICE", $payload$$35$$));
}
$JSCompiler_prototypeAlias$$.$getHostName$ = function $$JSCompiler_prototypeAlias$$$$getHostName$$() {
  return "viewbix";
};
function $JSCompiler_StaticMethods_listenToAllVideoEvents$$($JSCompiler_StaticMethods_listenToAllVideoEvents$self$$) {
  $goog$object$forEach$$($viewbix$sdk$event$VideoEvent$Type$$, $goog$bind$$(function($event$$2$$) {
    this.$hostPlayer$.addEventListener($event$$2$$, $goog$bind$$(function() {
      $JSCompiler_StaticMethods_sendMessageToExternalPlayer$$(this, $viewbix$sdk$XpcMessage$createXpcPayload$$($event$$2$$, $JSCompiler_StaticMethods_createVideoplayerData$$(this)));
    }, this));
  }, $JSCompiler_StaticMethods_listenToAllVideoEvents$self$$));
}
function $JSCompiler_StaticMethods_createVideoplayerData$$($JSCompiler_StaticMethods_createVideoplayerData$self$$) {
  var $currentSrc$$ = "";
  null != $JSCompiler_StaticMethods_createVideoplayerData$self$$.$hostPlayer$.currentSrc ? $currentSrc$$ = $JSCompiler_StaticMethods_createVideoplayerData$self$$.$hostPlayer$.currentSrc : null != $JSCompiler_StaticMethods_createVideoplayerData$self$$.$hostPlayer$.src && ($currentSrc$$ = $JSCompiler_StaticMethods_createVideoplayerData$self$$.$hostPlayer$.src);
  var $height$$16$$ = 0;
  null != $JSCompiler_StaticMethods_createVideoplayerData$self$$.$hostPlayer$.clientHeight && ($height$$16$$ = $JSCompiler_StaticMethods_createVideoplayerData$self$$.$hostPlayer$.clientHeight);
  return{duration:$JSCompiler_StaticMethods_createVideoplayerData$self$$.$hostPlayer$.duration, currentTime:$JSCompiler_StaticMethods_createVideoplayerData$self$$.$hostPlayer$.currentTime, volume:$JSCompiler_StaticMethods_createVideoplayerData$self$$.$hostPlayer$.volume, currentSrc:$currentSrc$$, height:$height$$16$$};
}
$JSCompiler_prototypeAlias$$.$beforeShowOverlay$ = function $$JSCompiler_prototypeAlias$$$$beforeShowOverlay$$() {
};
$JSCompiler_prototypeAlias$$.$afterHideOverlay$ = function $$JSCompiler_prototypeAlias$$$$afterHideOverlay$$() {
};
$JSCompiler_prototypeAlias$$.$afterCreatePlayer$ = function $$JSCompiler_prototypeAlias$$$$afterCreatePlayer$$() {
};
function $viewbix$api$VpaidApi$$($playerId$$3$$, $layoutName$$1$$, $layoutSchemeAndAuthority$$, $adType$$, $debug$$, $local$$1$$, $minified$$) {
  $viewbix$api$LayoutApi$$.call(this, $playerId$$3$$, $layoutName$$1$$, $layoutSchemeAndAuthority$$, $debug$$, $local$$1$$, $minified$$);
  this.$adType_$ = this.$originalAdType_$ = $adType$$;
  this.$videoSlot_$ = this.$slot_$ = null;
  this.$adHeight_$ = this.$adWidth_$ = 0;
  this.$adSkippableState_$ = !1;
  this.getAdLinear = this.$getAdLinear$;
  this.getAdWidth = this.$getAdWidth$;
  this.getAdHeight = this.$getAdHeight$;
  this.getAdExpanded = this.$getAdExpanded$;
  this.getAdSkippableState = this.$getAdSkippableState$;
  this.getAdRemainingTime = this.$getAdRemainingTime$;
  this.getAdDuration = this.$getAdDuration$;
  this.handshakeVersion = this.$handshakeVersion$;
  this.initAd = this.$initAd$;
  this.startAd = this.$startAd$;
  this.stopAd = this.$stopAd$;
  this.setAdVolume = this.$setAdVolume$;
  this.getAdVolume = this.$getAdVolume$;
  this.resizeAd = this.$resizeAd$;
  this.pauseAd = this.$pauseAd$;
  this.resumeAd = this.$resumeAd$;
  this.expandAd = this.$expandAd$;
  this.collapseAd = this.$collapseAd$;
  this.skipAd = this.$skipAd$;
  this.subscribe = this.$subscribe$;
  this.unsubscribe = this.$unsubscribe$;
  this.getAdCompanions = this.$getAdCompanions$;
  this.getAdIcons = this.$getAdIcons$;
}
$goog$inherits$$($viewbix$api$VpaidApi$$, $viewbix$api$LayoutApi$$);
$JSCompiler_prototypeAlias$$ = $viewbix$api$VpaidApi$$.prototype;
$JSCompiler_prototypeAlias$$.$getAdditionalQueryParams$ = function $$JSCompiler_prototypeAlias$$$$getAdditionalQueryParams$$() {
  var $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$ = $viewbix$api$VpaidApi$$.$superClass_$.$getAdditionalQueryParams$.call(this);
  if (null != this.$creativeData_$) {
    if (this.$creativeData_$.hasOwnProperty("AdParameters")) {
      $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$ = this.$creativeData_$.AdParameters, $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$ = new $goog$Uri$QueryData$$($additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$), $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$.remove("debug"), $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$.remove("local"), $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$.remove("minified"), 
      $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$.remove("layout"), $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$.remove("hostName"), $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$ = "&" + $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$.toString();
    } else {
      var $map$$inline_594_values$$inline_598$$ = this.$creativeData_$;
      if ("function" == typeof $map$$inline_594_values$$inline_598$$.$getKeys$) {
        $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$ = $map$$inline_594_values$$inline_598$$.$getKeys$();
      } else {
        if ("function" != typeof $map$$inline_594_values$$inline_598$$.$getValues$) {
          if ($goog$isArrayLike$$($map$$inline_594_values$$inline_598$$) || $goog$isString$$($map$$inline_594_values$$inline_598$$)) {
            for (var $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$ = [], $l$$inline_888_queryData$$inline_597$$ = $map$$inline_594_values$$inline_598$$.length, $i$$inline_599_i$$inline_889$$ = 0;$i$$inline_599_i$$inline_889$$ < $l$$inline_888_queryData$$inline_597$$;$i$$inline_599_i$$inline_889$$++) {
              $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$.push($i$$inline_599_i$$inline_889$$);
            }
          } else {
            $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$ = $goog$object$getKeys$$($map$$inline_594_values$$inline_598$$);
          }
        } else {
          $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$ = void 0;
        }
      }
      if ("undefined" == typeof $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$) {
        throw Error("Keys are undefined");
      }
      $l$$inline_888_queryData$$inline_597$$ = new $goog$Uri$QueryData$$(null, 0, void 0);
      $map$$inline_594_values$$inline_598$$ = $goog$structs$getValues$$($map$$inline_594_values$$inline_598$$);
      for ($i$$inline_599_i$$inline_889$$ = 0;$i$$inline_599_i$$inline_889$$ < $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$.length;$i$$inline_599_i$$inline_889$$++) {
        var $key$$inline_600$$ = $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$[$i$$inline_599_i$$inline_889$$], $value$$inline_601$$ = $map$$inline_594_values$$inline_598$$[$i$$inline_599_i$$inline_889$$];
        $goog$isArray$$($value$$inline_601$$) ? $JSCompiler_StaticMethods_setValues$$($l$$inline_888_queryData$$inline_597$$, $key$$inline_600$$, $value$$inline_601$$) : $l$$inline_888_queryData$$inline_597$$.add($key$$inline_600$$, $value$$inline_601$$);
      }
      $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$ = "&" + $l$$inline_888_queryData$$inline_597$$.toString();
    }
  }
  return $additionalQueryParams_keys$$inline_596_queryData$$3_rv$$inline_887$$;
};
$JSCompiler_prototypeAlias$$.$getHostName$ = function $$JSCompiler_prototypeAlias$$$$getHostName$$() {
  switch(this.$adType_$) {
    default:
      return "vpaidlinear";
    case $viewbix$api$VpaidApi$AdTypeName$NON_LINEAR$$:
      return "vpaidnonlinear";
  }
};
$JSCompiler_prototypeAlias$$.$receiveMessageFromExternalPlayer$ = function $$JSCompiler_prototypeAlias$$$$receiveMessageFromExternalPlayer$$($message$$32$$) {
  switch($message$$32$$.name) {
    case "LOAD":
      this.$originalAdType_$ == $viewbix$api$VpaidApi$AdTypeName$LINEAR$$ && (this.$hostPlayer$.src = $message$$32$$.data);
      break;
    default:
      $viewbix$api$VpaidApi$$.$superClass_$.$receiveMessageFromExternalPlayer$.call(this, $message$$32$$);
  }
};
$JSCompiler_prototypeAlias$$.$receiveMessageFromLayout$ = function $$JSCompiler_prototypeAlias$$$$receiveMessageFromLayout$$($message$$33$$) {
  switch($message$$33$$.name) {
    case "AFTER_CREATE_PLAYER":
      $goog$events$dispatchEvent$$(this, "AdLoaded");
      break;
    case "ONPAUSE":
      $goog$events$dispatchEvent$$(this, "AdPaused");
      break;
    case "ONRESUME":
      $goog$events$dispatchEvent$$(this, "AdStarted");
      break;
    case "VSTART":
      $goog$events$dispatchEvent$$(this, "AdVideoStart");
      break;
    case $viewbix$sdk$track$TrackEventType$VTHRESH_25$$:
      $goog$events$dispatchEvent$$(this, "AdVideoFirstQuartile");
      break;
    case $viewbix$sdk$track$TrackEventType$VTHRESH_50$$:
      $goog$events$dispatchEvent$$(this, "AdVideoMidpoint");
      break;
    case $viewbix$sdk$track$TrackEventType$VTHRESH_75$$:
      $goog$events$dispatchEvent$$(this, "AdVideoThirdQuartile");
      break;
    case $viewbix$sdk$track$TrackEventType$VTHRESH_100$$:
      $goog$events$dispatchEvent$$(this, "AdVideoComplete");
      $goog$events$dispatchEvent$$(this, "AdStopped");
      break;
    default:
      $viewbix$api$VpaidApi$$.$superClass_$.$receiveMessageFromLayout$.call(this, $message$$33$$);
  }
};
$JSCompiler_prototypeAlias$$.$getAdLinear$ = function $$JSCompiler_prototypeAlias$$$$getAdLinear$$() {
  return this.$adType_$ == $viewbix$api$VpaidApi$AdTypeName$LINEAR$$ ? !0 : !1;
};
$JSCompiler_prototypeAlias$$.$getAdWidth$ = function $$JSCompiler_prototypeAlias$$$$getAdWidth$$() {
  return this.$adWidth_$;
};
$JSCompiler_prototypeAlias$$.$getAdHeight$ = function $$JSCompiler_prototypeAlias$$$$getAdHeight$$() {
  return this.$adHeight_$;
};
$JSCompiler_prototypeAlias$$.$getAdExpanded$ = function $$JSCompiler_prototypeAlias$$$$getAdExpanded$$() {
  return this.$adExpanded$;
};
$JSCompiler_prototypeAlias$$.$getAdSkippableState$ = function $$JSCompiler_prototypeAlias$$$$getAdSkippableState$$() {
  return this.$adSkippableState_$;
};
$JSCompiler_prototypeAlias$$.$getAdRemainingTime$ = function $$JSCompiler_prototypeAlias$$$$getAdRemainingTime$$() {
  return 9999;
};
$JSCompiler_prototypeAlias$$.$getAdDuration$ = function $$JSCompiler_prototypeAlias$$$$getAdDuration$$() {
  return this.$hostPlayer$.duration;
};
$JSCompiler_prototypeAlias$$.$handshakeVersion$ = function $$JSCompiler_prototypeAlias$$$$handshakeVersion$$($playerVpaidVersion$$) {
  return $playerVpaidVersion$$;
};
$JSCompiler_prototypeAlias$$.$initAd$ = function $$JSCompiler_prototypeAlias$$$$initAd$$($width$$18$$, $height$$17$$, $viewMode$$, $desiredBitrate$$, $opt_creativeData$$, $opt_environmentVars$$) {
  this.$slot_$ = $opt_environmentVars$$.slot;
  this.$videoSlot_$ = $opt_environmentVars$$.videoSlot;
  this.$adWidth_$ = $width$$18$$;
  this.$adHeight_$ = $height$$17$$;
  this.$creativeData_$ = $opt_creativeData$$ || null;
  $JSCompiler_StaticMethods_loadLayoutAndSetUpXpc$$(this, this.$videoSlot_$);
  this.$slot_$.appendChild(this.$getElement$());
  $goog$style$setStyle$$(this.$slot_$, {position:"absolute", top:"0", left:"0", width:$width$$18$$ + "px", height:$height$$17$$ + "px", border:"none"});
};
$JSCompiler_prototypeAlias$$.$startAd$ = function $$JSCompiler_prototypeAlias$$$$startAd$$() {
  this.$adType_$ == $viewbix$api$VpaidApi$AdTypeName$LINEAR$$ && $JSCompiler_StaticMethods_sendMessageToLayout$$(this, $viewbix$sdk$XpcMessage$createXpcPayload$$("PLAY"));
  $goog$events$dispatchEvent$$(this, "AdStarted");
  $goog$events$dispatchEvent$$(this, "AdImpression");
};
$JSCompiler_prototypeAlias$$.$stopAd$ = function $$JSCompiler_prototypeAlias$$$$stopAd$$() {
  $goog$events$dispatchEvent$$(this, "AdStopped");
};
$JSCompiler_prototypeAlias$$.$setAdVolume$ = function $$JSCompiler_prototypeAlias$$$$setAdVolume$$($val$$41$$) {
  this.$hostPlayer$.volume = $val$$41$$;
  $JSCompiler_StaticMethods_sendMessageToLayout$$(this, $viewbix$sdk$XpcMessage$createXpcPayload$$("SET_VOLUME", $val$$41$$));
};
$JSCompiler_prototypeAlias$$.$getAdVolume$ = function $$JSCompiler_prototypeAlias$$$$getAdVolume$$() {
  return this.$hostPlayer$.volume;
};
$JSCompiler_prototypeAlias$$.$resizeAd$ = function $$JSCompiler_prototypeAlias$$$$resizeAd$$($width$$19$$, $height$$18$$, $viewMode$$1$$) {
  this.$adWidth_$ = $width$$19$$;
  this.$adHeight_$ = $height$$18$$;
  var $element$$inline_892_hostElement$$;
  $element$$inline_892_hostElement$$ = this.$slot_$;
  $element$$inline_892_hostElement$$ = $goog$isString$$($element$$inline_892_hostElement$$) ? document.getElementById($element$$inline_892_hostElement$$) : $element$$inline_892_hostElement$$;
  switch($viewMode$$1$$) {
    default:
      $goog$style$setStyle$$($element$$inline_892_hostElement$$, {width:$width$$19$$ + "px", height:$height$$18$$ + "px"});
      break;
    case "fullscreen":
      $goog$style$setStyle$$($element$$inline_892_hostElement$$, {width:"100%", height:"100%"});
  }
  $goog$events$dispatchEvent$$(this, "AdSizeChange");
};
$JSCompiler_prototypeAlias$$.$pauseAd$ = function $$JSCompiler_prototypeAlias$$$$pauseAd$$() {
  $JSCompiler_StaticMethods_sendMessageToLayout$$(this, $viewbix$sdk$XpcMessage$createXpcPayload$$("PAUSE"));
  $goog$events$dispatchEvent$$(this, "AdPaused");
};
$JSCompiler_prototypeAlias$$.$resumeAd$ = function $$JSCompiler_prototypeAlias$$$$resumeAd$$() {
  $JSCompiler_StaticMethods_sendMessageToLayout$$(this, $viewbix$sdk$XpcMessage$createXpcPayload$$("RESUME"));
  $goog$events$dispatchEvent$$(this, "AdPlaying");
};
$JSCompiler_prototypeAlias$$.$expandAd$ = function $$JSCompiler_prototypeAlias$$$$expandAd$$() {
  this.$adExpanded$ = !0;
  $goog$events$dispatchEvent$$(this, "AdExpandedChange");
};
$JSCompiler_prototypeAlias$$.$collapseAd$ = function $$JSCompiler_prototypeAlias$$$$collapseAd$$() {
  this.$adExpanded$ = !1;
  $goog$events$dispatchEvent$$(this, "AdExpandedChange");
};
$JSCompiler_prototypeAlias$$.$skipAd$ = function $$JSCompiler_prototypeAlias$$$$skipAd$$() {
};
$JSCompiler_prototypeAlias$$.$subscribe$ = function $$JSCompiler_prototypeAlias$$$$subscribe$$($aCallback$$, $eventName$$5$$, $aContext$$) {
  $goog$events$listen$$(this, $eventName$$5$$, $aCallback$$, !1, $aContext$$);
};
$JSCompiler_prototypeAlias$$.$unsubscribe$ = function $$JSCompiler_prototypeAlias$$$$unsubscribe$$($aCallback$$1$$, $eventName$$6$$) {
  $goog$events$unlisten$$(this, $eventName$$6$$, $aCallback$$1$$, !1);
};
$JSCompiler_prototypeAlias$$.$getAdCompanions$ = function $$JSCompiler_prototypeAlias$$$$getAdCompanions$$() {
  return "";
};
$JSCompiler_prototypeAlias$$.$getAdIcons$ = function $$JSCompiler_prototypeAlias$$$$getAdIcons$$() {
  return!1;
};
var $viewbix$api$VpaidApi$AdTypeName$LINEAR$$ = "linear", $viewbix$api$VpaidApi$AdTypeName$NON_LINEAR$$ = "nonlinear";
$viewbix$api$VpaidApi$$.prototype.$beforeShowOverlay$ = function $$viewbix$api$VpaidApi$$$$$beforeShowOverlay$$() {
  this.$originalAdType_$ == $viewbix$api$VpaidApi$AdTypeName$NON_LINEAR$$ && (this.$adType_$ = $viewbix$api$VpaidApi$AdTypeName$LINEAR$$, $goog$events$dispatchEvent$$(this, "AdLinearChange"));
};
$viewbix$api$VpaidApi$$.prototype.$afterHideOverlay$ = function $$viewbix$api$VpaidApi$$$$$afterHideOverlay$$() {
  this.$originalAdType_$ == $viewbix$api$VpaidApi$AdTypeName$NON_LINEAR$$ && (this.$adType_$ = $viewbix$api$VpaidApi$AdTypeName$NON_LINEAR$$, $goog$events$dispatchEvent$$(this, "AdLinearChange"));
};
$viewbix$api$VpaidApi$$.prototype.$afterCreatePlayer$ = function $$viewbix$api$VpaidApi$$$$$afterCreatePlayer$$() {
  this.$originalAdType_$ == $viewbix$api$VpaidApi$AdTypeName$NON_LINEAR$$ && (this.$adType_$ = $viewbix$api$VpaidApi$AdTypeName$NON_LINEAR$$, $goog$events$dispatchEvent$$(this, "AdLinearChange"));
};
$goog$exportPath_$$("VBX.select", function($target$$63$$) {
  return new $viewbix$sdk$VbxNodeList$$($target$$63$$);
}, void 0);
$goog$exportPath_$$("VBX.contentLoaded", function($handler$$49$$) {
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
        } catch ($e$$75$$) {
        }
        if (document.documentElement.doScroll && !$isFrame$$) {
          var $tryScroll$$ = function $$tryScroll$$$() {
            if (!$called$$2$$) {
              try {
                document.documentElement.doScroll("left"), $ready$$();
              } catch ($e$$76$$) {
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
}, void 0);
$goog$exportPath_$$("VBX.listen", function($element$$124$$, $type$$130$$, $listener$$77$$, $opt_capt$$13$$, $opt_handler$$14$$) {
  return $goog$isString$$($type$$130$$) && "resize" == $type$$130$$ && $element$$124$$ != window ? (window.$addResizeListener$ || $viewbix$sdk$helper$EventHelper$setupResizeListening$$(), window.$addResizeListener$($element$$124$$, null != $opt_handler$$14$$ ? $goog$bind$$($listener$$77$$, $opt_handler$$14$$) : $listener$$77$$), null) : $goog$events$listen$$($element$$124$$, $type$$130$$, $listener$$77$$, $opt_capt$$13$$, $opt_handler$$14$$);
}, void 0);
$goog$exportPath_$$("VBX.unlisten", function($element$$125$$, $type$$131$$, $listener$$78$$, $opt_capt$$14$$, $opt_handler$$15$$) {
  return $goog$isString$$($type$$131$$) && "resize" == $type$$131$$ && $element$$125$$ != window && window.$removeResizeListener$ ? (window.$removeResizeListener$($element$$125$$, $listener$$78$$), !0) : $goog$events$unlisten$$($element$$125$$, $type$$131$$, $listener$$78$$, $opt_capt$$14$$, $opt_handler$$15$$);
}, void 0);
$goog$exportPath_$$("VBX.getSize", function($element$$81$$) {
  return $goog$style$evaluateWithTemporaryDisplay_$$($element$$81$$);
}, void 0);
$goog$exportPath_$$("VBX.track", function($eventTrackingInfo$$inline_688_eventType$$11$$, $opt_data$$6$$, $opt_moreParams$$, $opt_trackingData$$10$$) {
  $eventTrackingInfo$$inline_688_eventType$$11$$ = $viewbix$sdk$track$Snowplow$$.$getInstance$().$eventTrackingMap_$[$eventTrackingInfo$$inline_688_eventType$$11$$];
  null != $eventTrackingInfo$$inline_688_eventType$$11$$ && window.spvb("trackUnstructEvent", {schema:$eventTrackingInfo$$inline_688_eventType$$11$$.schema, data:$eventTrackingInfo$$inline_688_eventType$$11$$.data($opt_trackingData$$10$$)}, $viewbix$sdk$track$Snowplow$buildContexts$$($eventTrackingInfo$$inline_688_eventType$$11$$, $opt_trackingData$$10$$));
}, void 0);
$goog$exportPath_$$("VBX.empty", $goog$string$isEmptySafe$$, void 0);
$goog$exportPath_$$("VBX.ok", function($val$$2$$) {
  return null != $val$$2$$;
}, void 0);
$goog$exportPath_$$("VBX.px", function($value$$137$$, $opt_units$$) {
  $goog$string$isEmptySafe$$($opt_units$$) && ($opt_units$$ = "px");
  var $num$$15$$ = parseFloat($value$$137$$);
  return isNaN($num$$15$$) ? "" : $num$$15$$.toString() + $opt_units$$;
}, void 0);
$goog$exportPath_$$("VBX.loading", function($element$$131$$, $opt_loading$$) {
  "boolean" == typeof $opt_loading$$ || ($opt_loading$$ = !0);
  $goog$isObject$$($element$$131$$) && 1 == $element$$131$$.nodeType && ($opt_loading$$ ? $goog$dom$classlist$add$$($element$$131$$, "vbx-loading") : $goog$dom$classlist$remove$$($element$$131$$, "vbx-loading"));
}, void 0);
$goog$exportPath_$$("VBX.addClass", $goog$dom$classlist$add$$, void 0);
$goog$exportPath_$$("VBX.removeClass", $goog$dom$classlist$remove$$, void 0);
$goog$exportPath_$$("VBX.toBoolean", function($value$$136$$, $opt_defaultValue$$) {
  $opt_defaultValue$$ = $opt_defaultValue$$ || !1;
  if (null === $value$$136$$ || !$goog$isDef$$($value$$136$$)) {
    return $opt_defaultValue$$;
  }
  if ("boolean" == typeof $value$$136$$) {
    return $value$$136$$;
  }
  if ($goog$isNumber$$($value$$136$$)) {
    return 0 != $value$$136$$;
  }
  if ($goog$isString$$($value$$136$$)) {
    var $cleaned$$ = $goog$string$trim$$($value$$136$$);
    a: {
      for (var $i$$inline_721$$ = 0;2 > $i$$inline_721$$;$i$$inline_721$$++) {
        var $quoteChar$$inline_722$$ = "\"'".charAt($i$$inline_721$$);
        if ($cleaned$$.charAt(0) == $quoteChar$$inline_722$$ && $cleaned$$.charAt($cleaned$$.length - 1) == $quoteChar$$inline_722$$) {
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
}, void 0);
$goog$exportPath_$$("VBX.colorIsBright", function($b$$32_rgb$$11$$) {
  var $r$$6$$ = $b$$32_rgb$$11$$ >> 16 & 255, $g$$5$$ = $b$$32_rgb$$11$$ >> 8 & 255;
  $b$$32_rgb$$11$$ &= 255;
  return 145 < Math.sqrt(.241 * $r$$6$$ * $r$$6$$ + .691 * $g$$5$$ * $g$$5$$ + .068 * $b$$32_rgb$$11$$ * $b$$32_rgb$$11$$);
}, void 0);
$goog$exportPath_$$("VBX.colorToString", function($rgb$$10$$, $opt_prefix$$) {
  $opt_prefix$$ = $opt_prefix$$ || "#";
  if ($goog$isString$$($rgb$$10$$) && $goog$string$caseInsensitiveStartsWith$$($rgb$$10$$, $opt_prefix$$)) {
    return $rgb$$10$$;
  }
  for (var $colorText$$ = $goog$string$parseInt$$($rgb$$10$$).toString(16);6 > $colorText$$.length;) {
    $colorText$$ = "0" + $colorText$$;
  }
  return $opt_prefix$$ + $colorText$$;
}, void 0);
$goog$exportPath_$$("VBX.supports", function($feature$$4$$) {
  if (null === $viewbix$sdk$Core$detectedFeatures$$) {
    var $props$$1$$ = "textShadow textStroke boxShadow borderRadius borderImage opacity".split(" "), $CSSprefix$$ = ["Webkit", "Moz", "O", "ms", "Khtml"], $d$$7$$ = document.createElement("browserFeatureDetectElement"), $test$$ = [], $p$$5$$, $JSCompiler_inline_result$$49_all$$inline_738_pty$$;
    for ($p$$5$$ in $props$$1$$) {
      var $JSCompiler_temp_const$$48$$ = $JSCompiler_inline_result$$49_all$$inline_738_pty$$ = $props$$1$$[$p$$5$$];
      a: {
        var $n$$inline_739_uprop$$inline_737$$ = $JSCompiler_inline_result$$49_all$$inline_738_pty$$.charAt(0).toUpperCase() + $JSCompiler_inline_result$$49_all$$inline_738_pty$$.substr(1);
        $JSCompiler_inline_result$$49_all$$inline_738_pty$$ = ($JSCompiler_inline_result$$49_all$$inline_738_pty$$ + " " + $CSSprefix$$.join($n$$inline_739_uprop$$inline_737$$ + " ") + $n$$inline_739_uprop$$inline_737$$).split(" ");
        for (var $n$$inline_739_uprop$$inline_737$$ = 0, $np$$inline_740$$ = $JSCompiler_inline_result$$49_all$$inline_738_pty$$.length;$n$$inline_739_uprop$$inline_737$$ < $np$$inline_740$$;$n$$inline_739_uprop$$inline_737$$++) {
          if ("" === $d$$7$$.style[$JSCompiler_inline_result$$49_all$$inline_738_pty$$[$n$$inline_739_uprop$$inline_737$$]]) {
            $JSCompiler_inline_result$$49_all$$inline_738_pty$$ = !0;
            break a;
          }
        }
        $JSCompiler_inline_result$$49_all$$inline_738_pty$$ = !1;
      }
      $test$$[$JSCompiler_temp_const$$48$$] = $JSCompiler_inline_result$$49_all$$inline_738_pty$$;
    }
    $viewbix$sdk$Core$detectedFeatures$$ = $test$$;
  }
  return $viewbix$sdk$Core$detectedFeatures$$[$feature$$4$$];
}, void 0);
$goog$exportPath_$$("VBX.extractLink", function($JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$) {
  if (null == $JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$) {
    return null;
  }
  $JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$ = /(\<a\s+href\s*=\s*["']{1}|\<iframe.+?src\s*=\s*["']{1}(?:\/\/)?|data-href\s*=\s*["']{1})?\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u202A\u202C]))/ig.exec($JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$);
  null != $JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$ ? ($JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$ = $JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$[2], null != $JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$ ? ($JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$ = $goog$string$trim$$($JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$) || "", $goog$string$isEmptySafe$$($JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$) || 0 == $JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$.lastIndexOf("http://", 
  0) || 0 == $JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$.lastIndexOf("https://", 0) || 0 == $JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$.lastIndexOf("tel://", 0) || 0 == $JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$.lastIndexOf("//", 0) || ($JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$ = "http://" + $JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$)) : $JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$ = null) : $JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$ = 
  null;
  return $JSCompiler_temp$$7_m$$3_text$$19_text$$inline_746$$;
}, void 0);
$goog$exportPath_$$("VBX.linkify", function($text$$20$$) {
  if (null == $text$$20$$) {
    return "";
  }
  $text$$20$$ = $text$$20$$.replace(/(\<a\s+href\s*=\s*["']{1}|\<img.+?src\s*=\s*["']{1}|\<iframe.+?src\s*=\s*["']{1}(?:\/\/)?|data-href\s*=\s*["']{1})?\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u202A\u202C]))/ig, function($$0$$, $$1$$, $$2$$) {
    return null == $$1$$ || /^[\s\xa0]*$/.test($$1$$) ? "<a onclick='window.open(\"" + $$2$$ + '", "_blank");return false;\'>' + $$2$$ + "</a>" : $goog$string$caseInsensitiveStartsWith$$($$1$$, "<img") || $goog$string$caseInsensitiveStartsWith$$($$1$$, "<iframe") || $goog$string$caseInsensitiveStartsWith$$($$1$$, "data-href") ? $$0$$ : "<a onclick='window.open(\"" + $$2$$ + '", "_blank");return false;\'';
  });
  $text$$20$$ = $text$$20$$.replace(/\"www/g, '"http://www');
  return $goog$string$trim$$($text$$20$$);
}, void 0);
$goog$exportPath_$$("VBX.listenMouseEnter", function($element$$121$$, $listener$$74$$, $opt_capt$$10$$, $opt_handler$$11$$) {
  return $goog$events$listen$$($element$$121$$, "mouseover", function($e$$71$$) {
    $e$$71$$.relatedTarget && $goog$dom$contains$$($element$$121$$, $e$$71$$.relatedTarget) || $listener$$74$$.call($opt_handler$$11$$, $e$$71$$);
  }, $opt_capt$$10$$, $opt_handler$$11$$);
}, void 0);
$goog$exportPath_$$("VBX.listenMouseLeave", function($element$$123$$, $listener$$76$$, $opt_capt$$12$$, $opt_handler$$13$$) {
  return $goog$events$listen$$($element$$123$$, "mouseout", function($e$$73$$) {
    $e$$73$$.relatedTarget && $goog$dom$contains$$($element$$123$$, $e$$73$$.relatedTarget) || $listener$$76$$.call($opt_handler$$13$$, $e$$73$$);
  }, $opt_capt$$12$$, $opt_handler$$13$$);
}, void 0);
$goog$exportPath_$$("VBX.VpaidApi", $viewbix$api$VpaidApi$$, void 0);
})();
