/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);

	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);

	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(29);

	__webpack_require__(30);
	__webpack_require__(31);
	__webpack_require__(32);
	__webpack_require__(33);
	__webpack_require__(34);
	__webpack_require__(35);
	__webpack_require__(36);
	__webpack_require__(37);

	__webpack_require__(38);
	__webpack_require__(39);

	__webpack_require__(40);
	__webpack_require__(41);

	__webpack_require__(42);
	__webpack_require__(43);
	__webpack_require__(44);
	__webpack_require__(45);
	__webpack_require__(46);

	__webpack_require__(47);
	__webpack_require__(48);
	__webpack_require__(49);
	__webpack_require__(50);

	__webpack_require__(51);
	__webpack_require__(52);

	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);

	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);

	__webpack_require__(59);
	__webpack_require__(60);

	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);

	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.0.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-06-09T18:02Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}


	var
		version = "3.0.0",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.0
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-04
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true;
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
		// Known :disabled false positives:
		// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
		// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Check form elements and option elements for explicit disabling
			return "label" in elem && elem.disabled === disabled ||
				"form" in elem && elem.disabled === disabled ||

				// Check non-disabled form elements for fieldset[disabled] ancestors
				"form" in elem && elem.disabled === false && (
					// Support: IE6-11+
					// Ancestry is covered for us
					elem.isDisabled === disabled ||

					// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						("label" in elem || !disabledAncestor( elem )) !== disabled
				);
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( /*jshint -W002 */ value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList.then( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnotwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? JSON.parse( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) ),
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support: IE <=9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox <=42
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* jshint -W083 */
				anim.done( function() {

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;

		} else {
			opt.duration = typeof opt.duration === "number" ?
				opt.duration : opt.duration in jQuery.fx.speeds ?
					jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in uncached url if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rts, "" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win, rect, doc,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.parseJSON = JSON.parse;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}





	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}


	return jQuery;
	} ) );


/***/ },
/* 2 */
/***/ function(module, exports) {

	// Cross-broswer implementation of text ranges and selections
	// documentation: http://bililite.com/blog/2011/01/17/cross-browser-text-ranges-and-selections/
	// Version: 1.1
	// Copyright (c) 2010 Daniel Wachsstock
	// MIT license:
	// Permission is hereby granted, free of charge, to any person
	// obtaining a copy of this software and associated documentation
	// files (the "Software"), to deal in the Software without
	// restriction, including without limitation the rights to use,
	// copy, modify, merge, publish, distribute, sublicense, and/or sell
	// copies of the Software, and to permit persons to whom the
	// Software is furnished to do so, subject to the following
	// conditions:

	// The above copyright notice and this permission notice shall be
	// included in all copies or substantial portions of the Software.

	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
	// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	// OTHER DEALINGS IN THE SOFTWARE.

	(function(){

	bililiteRange = function(el, debug){
		var ret;
		if (debug){
			ret = new NothingRange(); // Easier to force it to use the no-selection type than to try to find an old browser
		}else if (document.selection){
			// Internet Explorer
			ret = new IERange();
		}else if (window.getSelection && el.setSelectionRange){
			// Standards. Element is an input or textarea 
			ret = new InputRange();
		}else if (window.getSelection){
			// Standards, with any other kind of element
			ret = new W3CRange();
		}else{
			// doesn't support selection
			ret = new NothingRange();
		}
		ret._el = el;
		ret._textProp = textProp(el);
		ret._bounds = [0, ret.length()];
		return ret;
	};

	function textProp(el){
		// returns the property that contains the text of the element
		if (typeof el.value != 'undefined') return 'value';
		if (typeof el.text != 'undefined') return 'text';
		if (typeof el.textContent != 'undefined') return 'textContent';
		return 'innerText';
	}

	// base class
	function Range(){}
	Range.prototype = {
		length: function() {
			return this._el[this._textProp].replace(/\r/g, '').length; // need to correct for IE's CrLf weirdness
		},
		bounds: function(s){
			if (s === 'all'){
				this._bounds = [0, this.length()];
			}else if (s === 'start'){
				this._bounds = [0, 0];
			}else if (s === 'end'){
				this._bounds = [this.length(), this.length()];
			}else if (s === 'selection'){
				this.bounds ('all'); // first select the whole thing for constraining
				this._bounds = this._nativeSelection();
			}else if (s){
				this._bounds = s; // don't error check now; the element may change at any moment, so constrain it when we need it.
			}else{
				var b = [
					Math.max(0, Math.min (this.length(), this._bounds[0])),
					Math.max(0, Math.min (this.length(), this._bounds[1]))
				];
				return b; // need to constrain it to fit
			}
			return this; // allow for chaining
		},
		select: function(){
			this._nativeSelect(this._nativeRange(this.bounds()));
			return this; // allow for chaining
		},
		text: function(text, select){
			if (arguments.length){
				this._nativeSetText(text, this._nativeRange(this.bounds()));
				if (select == 'start'){
					this.bounds ([this._bounds[0], this._bounds[0]]);
					this.select();
				}else if (select == 'end'){
					this.bounds ([this._bounds[0]+text.length, this._bounds[0]+text.length]);
					this.select();
				}else if (select == 'all'){
					this.bounds ([this._bounds[0], this._bounds[0]+text.length]);
					this.select();
				}
				return this; // allow for chaining
			}else{
				return this._nativeGetText(this._nativeRange(this.bounds()));
			}
		},
		insertEOL: function (){
			this._nativeEOL();
			this._bounds = [this._bounds[0]+1, this._bounds[0]+1]; // move past the EOL marker
			return this;
		}
	};


	function IERange(){}
	IERange.prototype = new Range();
	IERange.prototype._nativeRange = function (bounds){
		var rng;
		if (this._el.tagName == 'INPUT'){
			// IE 8 is very inconsistent; textareas have createTextRange but it doesn't work
			rng = this._el.createTextRange();
		}else{
			rng = document.body.createTextRange ();
			rng.moveToElementText(this._el);
		}
		if (bounds){
			if (bounds[1] < 0) bounds[1] = 0; // IE tends to run elements out of bounds
			if (bounds[0] > this.length()) bounds[0] = this.length();
			if (bounds[1] < rng.text.replace(/\r/g, '').length){ // correct for IE's CrLf wierdness
				// block-display elements have an invisible, uncounted end of element marker, so we move an extra one and use the current length of the range
				rng.moveEnd ('character', -1);
				rng.moveEnd ('character', bounds[1]-rng.text.replace(/\r/g, '').length);
			}
			if (bounds[0] > 0) rng.moveStart('character', bounds[0]);
		}
		return rng;					
	};
	IERange.prototype._nativeSelect = function (rng){
		rng.select();
	};
	IERange.prototype._nativeSelection = function (){
		// returns [start, end] for the selection constrained to be in element
		var rng = this._nativeRange(); // range of the element to constrain to
		var len = this.length();
		if (document.selection.type != 'Text') return [len, len]; // append to the end
		var sel = document.selection.createRange();
		try{
			return [
				iestart(sel, rng),
				ieend (sel, rng)
			];
		}catch (e){
			// IE gets upset sometimes about comparing text to input elements, but the selections cannot overlap, so make a best guess
			return (sel.parentElement().sourceIndex < this._el.sourceIndex) ? [0,0] : [len, len];
		}
	};
	IERange.prototype._nativeGetText = function (rng){
		return rng.text.replace(/\r/g, ''); // correct for IE's CrLf weirdness
	};
	IERange.prototype._nativeSetText = function (text, rng){
		rng.text = text;
	};
	IERange.prototype._nativeEOL = function(){
		if (typeof this._el.value != 'undefined'){
			this.text('\n'); // for input and textarea, insert it straight
		}else{
			this._nativeRange(this.bounds()).pasteHTML('<br/>');
		}
	};
	// IE internals
	function iestart(rng, constraint){
		// returns the position (in character) of the start of rng within constraint. If it's not in constraint, returns 0 if it's before, length if it's after
		var len = constraint.text.replace(/\r/g, '').length; // correct for IE's CrLf wierdness
		if (rng.compareEndPoints ('StartToStart', constraint) <= 0) return 0; // at or before the beginning
		if (rng.compareEndPoints ('StartToEnd', constraint) >= 0) return len;
		for (var i = 0; rng.compareEndPoints ('StartToStart', constraint) > 0; ++i, rng.moveStart('character', -1));
		return i;
	}
	function ieend (rng, constraint){
		// returns the position (in character) of the end of rng within constraint. If it's not in constraint, returns 0 if it's before, length if it's after
		var len = constraint.text.replace(/\r/g, '').length; // correct for IE's CrLf wierdness
		if (rng.compareEndPoints ('EndToEnd', constraint) >= 0) return len; // at or after the end
		if (rng.compareEndPoints ('EndToStart', constraint) <= 0) return 0;
		for (var i = 0; rng.compareEndPoints ('EndToStart', constraint) > 0; ++i, rng.moveEnd('character', -1));
		return i;
	}

	// an input element in a standards document. "Native Range" is just the bounds array
	function InputRange(){}
	InputRange.prototype = new Range();
	InputRange.prototype._nativeRange = function(bounds) {
		return bounds || [0, this.length()];
	};
	InputRange.prototype._nativeSelect = function (rng){
		this._el.setSelectionRange(rng[0], rng[1]);
	};
	InputRange.prototype._nativeSelection = function(){
		return [this._el.selectionStart, this._el.selectionEnd];
	};
	InputRange.prototype._nativeGetText = function(rng){
		return this._el.value.substring(rng[0], rng[1]);
	};
	InputRange.prototype._nativeSetText = function(text, rng){
		var val = this._el.value;
		this._el.value = val.substring(0, rng[0]) + text + val.substring(rng[1]);
	};
	InputRange.prototype._nativeEOL = function(){
		this.text('\n');
	};

	function W3CRange(){}
	W3CRange.prototype = new Range();
	W3CRange.prototype._nativeRange = function (bounds){
		var rng = document.createRange();
		rng.selectNodeContents(this._el);
		if (bounds){
			w3cmoveBoundary (rng, bounds[0], true, this._el);
			rng.collapse (true);
			w3cmoveBoundary (rng, bounds[1]-bounds[0], false, this._el);
		}
		return rng;					
	};
	W3CRange.prototype._nativeSelect = function (rng){
		window.getSelection().removeAllRanges();
		window.getSelection().addRange (rng);
	};
	W3CRange.prototype._nativeSelection = function (){
			// returns [start, end] for the selection constrained to be in element
			var rng = this._nativeRange(); // range of the element to constrain to
			if (window.getSelection().rangeCount == 0) return [this.length(), this.length()]; // append to the end
			var sel = window.getSelection().getRangeAt(0);
			return [
				w3cstart(sel, rng),
				w3cend (sel, rng)
			];
		};
	W3CRange.prototype._nativeGetText = function (rng){
		return rng.toString();
	};
	W3CRange.prototype._nativeSetText = function (text, rng){
		rng.deleteContents();
		rng.insertNode (document.createTextNode(text));
		this._el.normalize(); // merge the text with the surrounding text
	};
	W3CRange.prototype._nativeEOL = function(){
		var rng = this._nativeRange(this.bounds());
		rng.deleteContents();
		var br = document.createElement('br');
		br.setAttribute ('_moz_dirty', ''); // for Firefox
		rng.insertNode (br);
		rng.insertNode (document.createTextNode('\n'));
		rng.collapse (false);
	};
	// W3C internals
	function nextnode (node, root){
		//  in-order traversal
		// we've already visited node, so get kids then siblings
		if (node.firstChild) return node.firstChild;
		if (node.nextSibling) return node.nextSibling;
		if (node===root) return null;
		while (node.parentNode){
			// get uncles
			node = node.parentNode;
			if (node == root) return null;
			if (node.nextSibling) return node.nextSibling;
		}
		return null;
	}
	function w3cmoveBoundary (rng, n, bStart, el){
		// move the boundary (bStart == true ? start : end) n characters forward, up to the end of element el. Forward only!
		// if the start is moved after the end, then an exception is raised
		if (n <= 0) return;
		var node = rng[bStart ? 'startContainer' : 'endContainer'];
		if (node.nodeType == 3){
		  // we may be starting somewhere into the text
		  n += rng[bStart ? 'startOffset' : 'endOffset'];
		}
		while (node){
			if (node.nodeType == 3){
				if (n <= node.nodeValue.length){
					rng[bStart ? 'setStart' : 'setEnd'](node, n);
					// special case: if we end next to a <br>, include that node.
					if (n == node.nodeValue.length){
						// skip past zero-length text nodes
						for (var next = nextnode (node, el); next && next.nodeType==3 && next.nodeValue.length == 0; next = nextnode(next, el)){
							rng[bStart ? 'setStartAfter' : 'setEndAfter'](next);
						}
						if (next && next.nodeType == 1 && next.nodeName == "BR") rng[bStart ? 'setStartAfter' : 'setEndAfter'](next);
					}
					return;
				}else{
					rng[bStart ? 'setStartAfter' : 'setEndAfter'](node); // skip past this one
					n -= node.nodeValue.length; // and eat these characters
				}
			}
			node = nextnode (node, el);
		}
	}
	var     START_TO_START                 = 0; // from the w3c definitions
	var     START_TO_END                   = 1;
	var     END_TO_END                     = 2;
	var     END_TO_START                   = 3;
	// from the Mozilla documentation, for range.compareBoundaryPoints(how, sourceRange)
	// -1, 0, or 1, indicating whether the corresponding boundary-point of range is respectively before, equal to, or after the corresponding boundary-point of sourceRange. 
	    // * Range.END_TO_END compares the end boundary-point of sourceRange to the end boundary-point of range.
	    // * Range.END_TO_START compares the end boundary-point of sourceRange to the start boundary-point of range.
	    // * Range.START_TO_END compares the start boundary-point of sourceRange to the end boundary-point of range.
	    // * Range.START_TO_START compares the start boundary-point of sourceRange to the start boundary-point of range. 
	function w3cstart(rng, constraint){
		if (rng.compareBoundaryPoints (START_TO_START, constraint) <= 0) return 0; // at or before the beginning
		if (rng.compareBoundaryPoints (END_TO_START, constraint) >= 0) return constraint.toString().length;
		rng = rng.cloneRange(); // don't change the original
		rng.setEnd (constraint.endContainer, constraint.endOffset); // they now end at the same place
		return constraint.toString().length - rng.toString().length;
	}
	function w3cend (rng, constraint){
		if (rng.compareBoundaryPoints (END_TO_END, constraint) >= 0) return constraint.toString().length; // at or after the end
		if (rng.compareBoundaryPoints (START_TO_END, constraint) <= 0) return 0;
		rng = rng.cloneRange(); // don't change the original
		rng.setStart (constraint.startContainer, constraint.startOffset); // they now start at the same place
		return rng.toString().length;
	}

	function NothingRange(){}
	NothingRange.prototype = new Range();
	NothingRange.prototype._nativeRange = function(bounds) {
		return bounds || [0,this.length()];
	};
	NothingRange.prototype._nativeSelect = function (rng){ // do nothing
	};
	NothingRange.prototype._nativeSelection = function(){
		return [0,0];
	};
	NothingRange.prototype._nativeGetText = function (rng){
		return this._el[this._textProp].substring(rng[0], rng[1]);
	};
	NothingRange.prototype._nativeSetText = function (text, rng){
		var val = this._el[this._textProp];
		this._el[this._textProp] = val.substring(0, rng[0]) + text + val.substring(rng[1]);
	};
	NothingRange.prototype._nativeEOL = function(){
		this.text('\n');
	};

	})();

/***/ },
/* 3 */
/***/ function(module, exports) {

	 /*!
	 * jQuery Simulate v0.0.1 - simulate browser mouse and keyboard events
	 * https://github.com/jquery/jquery-simulate
	 *
	 * Copyright 2012 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * Date: Sun Dec 9 12:15:33 2012 -0500
	 */

	;(function( $, undefined ) {
		"use strict";

	var rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|contextmenu)|click/,
		rdocument = /\[object (?:HTML)?Document\]/;

	function isDocument(ele) {
		return rdocument.test(Object.prototype.toString.call(ele));
	}

	function windowOfDocument(doc) {
		if(doc&&doc!=document){
			for (var i=0; i < window.frames.length; i+=1) {
				if (window.frames[i].document === doc) {
					return window.frames[i];
				}
			}
			return window;
		}
		else{
			return window;
		}
	}

	$.fn.simulate = function( type, options ) {
		return this.each(function() {
			new $.simulate( this, type, options );
		});
	};

	$.simulate = function( elem, type, options ) {
		var method = $.camelCase( "simulate-" + type );

		this.target = elem;
		this.options = options || {};

		if ( this[ method ] ) {
			this[ method ]();
		} else {
			this.simulateEvent( elem, type, this.options );
		}
	};

	$.extend( $.simulate, {

		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		},

		buttonCode: {
			LEFT: 0,
			MIDDLE: 1,
			RIGHT: 2
		}
	});

	$.extend( $.simulate.prototype, {

		simulateEvent: function( elem, type, options ) {
			var event = this.createEvent( type, options );
			this.dispatchEvent( elem, type, event, options );
		},

		createEvent: function( type, options ) {
			if ( rkeyEvent.test( type ) ) {
				return this.keyEvent( type, options );
			}

			if ( rmouseEvent.test( type ) ) {
				return this.mouseEvent( type, options );
			}
		},

		mouseEvent: function( type, options ) {
			var event,
				eventDoc,
				doc = isDocument(this.target)? this.target : (this.target.ownerDocument || document),
				docEle,
				body;
			
			
			options = $.extend({
				bubbles: true,
				cancelable: (type !== "mousemove"),
				view: windowOfDocument(doc),
				detail: 0,
				screenX: 0,
				screenY: 0,
				clientX: 1,
				clientY: 1,
				ctrlKey: false,
				altKey: false,
				shiftKey: false,
				metaKey: false,
				button: 0,
				relatedTarget: undefined
			}, options );

			
			
			if ( doc.createEvent ) {
				event = doc.createEvent( "MouseEvents" );
				event.initMouseEvent( type, options.bubbles, options.cancelable,
					options.view, options.detail,
					options.screenX, options.screenY, options.clientX, options.clientY,
					options.ctrlKey, options.altKey, options.shiftKey, options.metaKey,
					options.button, options.relatedTarget || doc.body.parentNode );

				// IE 9+ creates events with pageX and pageY set to 0.
				// Trying to modify the properties throws an error,
				// so we define getters to return the correct values.
				if ( event.pageX === 0 && event.pageY === 0 && Object.defineProperty ) {
					eventDoc = isDocument(event.relatedTarget)? event.relatedTarget : (event.relatedTarget.ownerDocument || document);
					docEle = eventDoc.documentElement;
					body = eventDoc.body;

					Object.defineProperty( event, "pageX", {
						get: function() {
							return options.clientX +
								( docEle && docEle.scrollLeft || body && body.scrollLeft || 0 ) -
								( docEle && docEle.clientLeft || body && body.clientLeft || 0 );
						}
					});
					Object.defineProperty( event, "pageY", {
						get: function() {
							return options.clientY +
								( docEle && docEle.scrollTop || body && body.scrollTop || 0 ) -
								( docEle && docEle.clientTop || body && body.clientTop || 0 );
						}
					});
				}
			} else if ( doc.createEventObject ) {
				event = doc.createEventObject();
				$.extend( event, options );
				// standards event.button uses constants defined here: http://msdn.microsoft.com/en-us/library/ie/ff974877(v=vs.85).aspx
				// old IE event.button uses constants defined here: http://msdn.microsoft.com/en-us/library/ie/ms533544(v=vs.85).aspx
				// so we actually need to map the standard back to oldIE
				event.button = {
					0: 1,
					1: 4,
					2: 2
				}[ event.button ] || event.button;
			}

			return event;
		},

		keyEvent: function( type, options ) {
			var event, doc;
			options = $.extend({
				bubbles: true,
				cancelable: true,
				view: windowOfDocument(doc),
				ctrlKey: false,
				altKey: false,
				shiftKey: false,
				metaKey: false,
				keyCode: 0,
				charCode: undefined
			}, options );

			doc = isDocument(this.target)? this.target : (this.target.ownerDocument || document);
			if ( doc.createEvent ) {
				try {
					event = doc.createEvent( "KeyEvents" );
					event.initKeyEvent( type, options.bubbles, options.cancelable, options.view,
						options.ctrlKey, options.altKey, options.shiftKey, options.metaKey,
						options.keyCode, options.charCode );
				// initKeyEvent throws an exception in WebKit
				// see: http://stackoverflow.com/questions/6406784/initkeyevent-keypress-only-works-in-firefox-need-a-cross-browser-solution
				// and also https://bugs.webkit.org/show_bug.cgi?id=13368
				// fall back to a generic event until we decide to implement initKeyboardEvent
				} catch( err ) {
					event = doc.createEvent( "Events" );
					event.initEvent( type, options.bubbles, options.cancelable );
					$.extend( event, {
						view: options.view,
						ctrlKey: options.ctrlKey,
						altKey: options.altKey,
						shiftKey: options.shiftKey,
						metaKey: options.metaKey,
						keyCode: options.keyCode,
						charCode: options.charCode
					});
				}
			} else if ( doc.createEventObject ) {
				event = doc.createEventObject();
				$.extend( event, options );
			}

			if ( !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() ) || (({}).toString.call( window.opera ) === "[object Opera]") ) {
				event.keyCode = (options.charCode > 0) ? options.charCode : options.keyCode;
				event.charCode = undefined;
			}

			return event;
		},

		dispatchEvent: function( elem, type, event, options ) {
			if (options.jQueryTrigger === true) {
				$(elem).trigger($.extend({}, event, options, {type: type}));
			}
			else if ( elem.dispatchEvent ) {
				elem.dispatchEvent( event );
			} else if ( elem.fireEvent ) {
				elem.fireEvent( "on" + type, event );
			}
		},

		simulateFocus: function() {
			var focusinEvent,
				triggered = false,
				$element = $( this.target );

			function trigger() {
				triggered = true;
			}

			$element.bind( "focus", trigger );
			$element[ 0 ].focus();

			if ( !triggered ) {
				focusinEvent = $.Event( "focusin" );
				focusinEvent.preventDefault();
				$element.trigger( focusinEvent );
				$element.triggerHandler( "focus" );
			}
			$element.unbind( "focus", trigger );
		},

		simulateBlur: function() {
			var focusoutEvent,
				triggered = false,
				$element = $( this.target );

			function trigger() {
				triggered = true;
			}

			$element.bind( "blur", trigger );
			$element[ 0 ].blur();

			// blur events are async in IE
			setTimeout(function() {
				// IE won't let the blur occur if the window is inactive
				if ( $element[ 0 ].ownerDocument.activeElement === $element[ 0 ] ) {
					$element[ 0 ].ownerDocument.body.focus();
				}

				// Firefox won't trigger events if the window is inactive
				// IE doesn't trigger events if we had to manually focus the body
				if ( !triggered ) {
					focusoutEvent = $.Event( "focusout" );
					focusoutEvent.preventDefault();
					$element.trigger( focusoutEvent );
					$element.triggerHandler( "blur" );
				}
				$element.unbind( "blur", trigger );
			}, 1 );
		}
	});



	/** complex events **/

	function findCenter( elem ) {
		var offset,
			$document,
			$elem = $( elem );
		
		if ( isDocument($elem[0]) ) {
			$document = $elem;
			offset = { left: 0, top: 0 };
		}
		else {
			$document = $( $elem[0].ownerDocument || document );
			offset = $elem.offset();
		}
		
		return {
			x: offset.left + $elem.outerWidth() / 2 - $document.scrollLeft(),
			y: offset.top + $elem.outerHeight() / 2 - $document.scrollTop()
		};
	}

	function findCorner( elem ) {
		var offset,
			$document,
			$elem = $( elem );
		
		if ( isDocument($elem[0]) ) {
			$document = $elem;
			offset = { left: 0, top: 0 };
		}
		else {
			$document = $( $elem[0].ownerDocument || document );
			offset = $elem.offset();
		}

		return {
			x: offset.left - document.scrollLeft(),
			y: offset.top - document.scrollTop()
		};
	}

	$.extend( $.simulate.prototype, {
		simulateDrag: function() {
			var i = 0,
				target = this.target,
				options = this.options,
				center = options.handle === "corner" ? findCorner( target ) : findCenter( target ),
				x = Math.floor( center.x ),
				y = Math.floor( center.y ),
				coord = { clientX: x, clientY: y },
				dx = options.dx || ( options.x !== undefined ? options.x - x : 0 ),
				dy = options.dy || ( options.y !== undefined ? options.y - y : 0 ),
				moves = options.moves || 3;

			this.simulateEvent( target, "mousedown", coord );

			for ( ; i < moves ; i++ ) {
				x += dx / moves;
				y += dy / moves;

				coord = {
					clientX: Math.round( x ),
					clientY: Math.round( y )
				};

				this.simulateEvent( target.ownerDocument, "mousemove", coord );
			}

			if ( $.contains( document, target ) ) {
				this.simulateEvent( target, "mouseup", coord );
				this.simulateEvent( target, "click", coord );
			} else {
				this.simulateEvent( document, "mouseup", coord );
			}
		}
	});

	})( jQuery );


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*jshint camelcase:true, plusplus:true, forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, maxerr:100, white:false, onevar:false */
	/*global jQuery:true $:true */

	/* jQuery Simulate Extended Plugin 1.3.0
	 * http://github.com/j-ulrich/jquery-simulate-ext
	 * 
	 * Copyright (c) 2014 Jochen Ulrich
	 * Licensed under the MIT license (MIT-LICENSE.txt).
	 */

	;(function( $ ) {
		"use strict";

		/* Overwrite the $.simulate.prototype.mouseEvent function
		 * to convert pageX/Y to clientX/Y
		 */
		var originalMouseEvent = $.simulate.prototype.mouseEvent,
			rdocument = /\[object (?:HTML)?Document\]/;
		
		$.simulate.prototype.mouseEvent = function(type, options) {
			if (options.pageX || options.pageY) {
				var doc = rdocument.test(Object.prototype.toString.call(this.target))? this.target : (this.target.ownerDocument || document);
				options.clientX = (options.pageX || 0) - $(doc).scrollLeft();
				options.clientY = (options.pageY || 0) - $(doc).scrollTop();
			}
			return originalMouseEvent.apply(this, [type, options]);
		};
		
		
	})( jQuery );


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*jshint camelcase:true, plusplus:true, forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, maxerr:100, white:false, onevar:false */
	/*global jQuery:true $:true */

	/* jQuery Simulate Drag-n-Drop Plugin 1.3.0
	 * http://github.com/j-ulrich/jquery-simulate-ext
	 * 
	 * Copyright (c) 2014 Jochen Ulrich
	 * Licensed under the MIT license (MIT-LICENSE.txt).
	 */

	;(function($, undefined) {
		"use strict";
		
		/* Overwrite the $.fn.simulate function to reduce the jQuery set to the first element for the
		 * drag-n-drop interactions.
		 */
		$.fn.simulate = function( type, options ) {
			switch (type) {
			case "drag":
			case "drop":
			case "drag-n-drop":
				var ele = this.first();
				new $.simulate( ele[0], type, options);
				return ele;
			default:
				return this.each(function() {
					new $.simulate( this, type, options );
				});
			}
		};
		
		var now = Date.now || function() { return new Date().getTime(); };
		
		var rdocument = /\[object (?:HTML)?Document\]/;
		/**
		 * Tests whether an object is an (HTML) document object.
		 * @param {DOM Element} elem - the object/element to be tested
		 * @returns {Boolean} <code>true</code> if <i>elem</i> is an (HTML) document object.
		 * @private
		 * @author julrich
		 * @since 1.1
		 */
		function isDocument( elem ) {
			return rdocument.test(Object.prototype.toString.call($(elem)[0]));
		}
		
		/**
		 * Selects the first match from an array.
		 * @param {Array} array - Array of objects to be be tested
		 * @param {Function} check - Callback function that accepts one argument (which will be one element
		 * from the <i>array</i>) and returns a boolean.
		 * @returns {Boolean|null} the first element in <i>array</i> for which <i>check</i> returns <code>true</code>.
		 * If none of the elements in <i>array</i> passes <i>check</i>, <code>null</code> is returned.
		 * @private
		 * @author julrich
		 * @since 1.1
		 */
		function selectFirstMatch(array, check) {
			var i;
			if ($.isFunction(check)) {
				for (i=0; i < array.length; i+=1) {
					if (check(array[i])) {
						return array[i];
					}
				}
				return null;
			}
			else {
				for (i=0; i < array.length; i+=1) {
					if (array[i]) {
						return array[i];
					}
				}
				return null;
			}
		}
		
		// Based on the findCenter function from jquery.simulate.js
		/**
		 * Calculates the position of the center of an DOM element.
		 * @param {DOM Element} elem - the element whose center should be calculated.
		 * @returns {Object} an object with the properties <code>x</code> and <code>y</code>
		 * representing the position of the center of <i>elem</i> in page relative coordinates
		 * (i.e. independent of any scrolling).
		 * @private
		 * @author julrich
		 * @since 1.0
		 */
		function findCenter( elem ) {
			var offset,
				$elem = $( elem );
			if ( isDocument($elem[0]) ) {
				offset = {left: 0, top: 0}; 
			}
			else {
				offset = $elem.offset();
			}
				
			return {
				x: offset.left + $elem.outerWidth() / 2,
				y: offset.top + $elem.outerHeight() / 2
			};
		}
		
		/**
		 * Converts page relative coordinates into client relative coordinates.
		 * @param {Numeric|Object} x - Either the x coordinate of the page relative coordinates or
		 * an object with the properties <code>pageX</code> and <code>pageY</code> representing page
		 * relative coordinates.
		 * @param {Numeric} [y] - If <i>x</i> is numeric (i.e. the x coordinate of page relative coordinates),
		 * then this is the y coordinate. If <i>x</i> is an object, this parameter is skipped.
		 * @param {DOM Document} [docRel] - Optional DOM document object used to calculate the client relative
		 * coordinates. The page relative coordinates are interpreted as being relative to that document and
		 * the scroll position of that document is used to calculate the client relative coordinates.
		 * By default, <code>document</code> is used.
		 * @returns {Object} an object representing the client relative coordinates corresponding to the
		 * given page relative coordinates. The object either provides the properties <code>x</code> and
		 * <code>y</code> when <i>x</i> and <i>y</i> were given as arguments, or <code>clientX</code>
		 * and <code>clientY</code> when the parameter <i>x</i> was given as an object (see above).
		 * @private
		 * @author julrich
		 * @since 1.0
		 */
		function pageToClientPos(x, y, docRel) {
			var $document;
			if ( isDocument(y) ) {
				$document = $(y);
			} else {
				$document = $(docRel || document);
			}
			
			if (typeof x === "number" && typeof y === "number") {
				return {
					x: x - $document.scrollLeft(),
					y: y - $document.scrollTop()
				};
			}
			else if (typeof x === "object" && x.pageX && x.pageY) {
				return {
					clientX: x.pageX - $document.scrollLeft(),
					clientY: x.pageY - $document.scrollTop()
				};
			}
		}
		
		/**
		 * Browser-independent implementation of <code>document.elementFromPoint()</code>.
		 * 
		 * When run for the first time on a scrolled page, this function performs a check on how
		 * <code>document.elementFromPoint()</code> is implemented in the current browser. It stores
		 * the results in two static variables so that the check can be skipped for successive calls.
		 * 
		 * @param {Numeric|Object} x - Either the x coordinate of client relative coordinates or an object
		 * with the properties <code>x</code> and <code>y</code> representing client relative coordinates.
		 * @param {Numeric} [y] - If <i>x</i> is numeric (i.e. the x coordinate of client relative coordinates),
		 * this is the y coordinate. If <i>x</i> is an object, this parameter is skipped.
		 * @param {DOM Document} [docRel] - Optional DOM document object
		 * @returns {DOM Element|Null}
		 * @private
		 * @author Nicolas Zeh (Basic idea), julrich
		 * @see http://www.zehnet.de/2010/11/19/document-elementfrompoint-a-jquery-solution/
		 * @since 1.0
		 */
		function elementAtPosition(x, y, docRel) {
			var doc;
			if ( isDocument(y) ) {
				doc = y;
			} else {
				doc = docRel || document;
			}
			
			if(!doc.elementFromPoint) {
				return null;
			}

			var clientX = x, clientY = y;
			if (typeof x === "object" && (x.clientX || x.clientY)) {
				clientX = x.clientX || 0 ;
				clientY = x.clientY || 0;
			}
			
			if(elementAtPosition.prototype.check)
			{
				var sl, ele;
				if ((sl = $(doc).scrollTop()) >0)
				{
					ele = doc.elementFromPoint(0, sl + $(window).height() -1);
					if ( ele !== null && ele.tagName.toUpperCase() === 'HTML' ) { ele = null; }
					elementAtPosition.prototype.nativeUsesRelative = ( ele === null );
				}
				else if((sl = $(doc).scrollLeft()) >0)
				{
					ele = doc.elementFromPoint(sl + $(window).width() -1, 0);
					if ( ele !== null && ele.tagName.toUpperCase() === 'HTML' ) { ele = null; }
					elementAtPosition.prototype.nativeUsesRelative = ( ele === null );
				}
				elementAtPosition.prototype.check = (sl<=0); // Check was not meaningful because we were at scroll position 0
			}

			if(!elementAtPosition.prototype.nativeUsesRelative)
			{
				clientX += $(doc).scrollLeft();
				clientY += $(doc).scrollTop();
			}

			return doc.elementFromPoint(clientX,clientY);
		}
		// Default values for the check variables
		elementAtPosition.prototype.check = true;
		elementAtPosition.prototype.nativeUsesRelative = true;
		
		/**
		 * Informs the rest of the world that the drag is finished.
		 * @param {DOM Element} ele - The element which was dragged.
		 * @param {Object} [options] - The drag options.
		 * @fires simulate-drag
		 * @private
		 * @author julrich 
		 * @since 1.0
		 */
		function dragFinished(ele, options) {
			var opts = options || {};
			$(ele).trigger({type: "simulate-drag"});
			if ($.isFunction(opts.callback)) {
				opts.callback.apply(ele);
			}
		}
		
		/**
		 * Generates a series of <code>mousemove</code> events for a drag.
		 * @param {Object} self - The simulate object.
		 * @param {DOM Element} ele - The element which is dragged.
		 * @param {Object} start - The start coordinates of the drag, represented using the properties
		 * <code>x</code> and <code>y</code>.
		 * @param {Object} drag - The distance to be dragged, represented using the properties <code>dx</code>
		 * and <code>dy</code>.
		 * @param {Object} options - The drag options. Must have the property <code>interpolation</code>
		 * containing the interpolation options (<code>stepWidth</code>, <code>stepCount</code>, etc.).
		 * @requires eventTarget
		 * @requires now()
		 * @private
		 * @author julrich
		 * @since 1.0
		 */
		function interpolatedEvents(self, ele, start, drag, options) {
			var targetDoc = selectFirstMatch([ele, ele.ownerDocument], isDocument) || document,
				interpolOptions = options.interpolation,
				dragDistance = Math.sqrt(Math.pow(drag.dx,2) + Math.pow(drag.dy,2)), // sqrt(a^2 + b^2)
				stepWidth, stepCount, stepVector;
			
			if (interpolOptions.stepWidth) {
				stepWidth = parseInt(interpolOptions.stepWidth, 10);
				stepCount = Math.floor(dragDistance / stepWidth)-1;
				var stepScale = stepWidth / dragDistance;
				stepVector = {x: drag.dx*stepScale, y: drag.dy*stepScale };
			}
			else {
				stepCount = parseInt(interpolOptions.stepCount, 10);
				stepWidth = dragDistance / (stepCount+1);
				stepVector = {x: drag.dx/(stepCount+1), y: drag.dy/(stepCount+1)};
			}
			
			
			var coords = $.extend({},start);
			
			/**
			 * Calculates the effective coordinates for one <code>mousemove</code> event and fires the event.
			 * @requires eventTarget
			 * @requires targetDoc
			 * @requires coords
			 * @requires stepVector
			 * @requires interpolOptions
			 * @fires mousemove
			 * @inner
			 * @author julrich
			 * @since 1.0
			 */
			function interpolationStep() {
				coords.x += stepVector.x;
				coords.y += stepVector.y;
				var effectiveCoords = {pageX: coords.x, pageY: coords.y};
				if (interpolOptions.shaky && (interpolOptions.shaky === true || !isNaN(parseInt(interpolOptions.shaky,10)) )) {
					var amplitude = (interpolOptions.shaky === true)? 1 : parseInt(interpolOptions.shaky,10);
					effectiveCoords.pageX += Math.floor(Math.random()*(2*amplitude+1)-amplitude);
					effectiveCoords.pageY += Math.floor(Math.random()*(2*amplitude+1)-amplitude);
				}
				var clientCoord = pageToClientPos(effectiveCoords, targetDoc),
					eventTarget = elementAtPosition(clientCoord, targetDoc) || ele;
				self.simulateEvent( eventTarget, "mousemove", {pageX: Math.round(effectiveCoords.pageX), pageY: Math.round(effectiveCoords.pageY)});	
			}
			
			
			var lastTime;
			
			/**
			 * Performs one interpolation step (i.e. cares about firing the event) and then sleeps for
			 * <code>stepDelay</code> milliseconds.
			 * @requires lastTime
			 * @requires stepDelay
			 * @requires step
			 * @requires ele
			 * @requires eventTarget
			 * @reuiqre targetDoc
			 * @requires start
			 * @requires drag
			 * @requires now()
			 * @inner
			 * @author julrich
			 * @since 1.0
			 */
			function stepAndSleep() {
				var timeElapsed = now() - lastTime; // Work-around for Firefox & IE "bug": setTimeout can fire before the timeout
				if (timeElapsed >= stepDelay) {
					if (step < stepCount) {
						interpolationStep();
						step += 1;
						lastTime = now();
						setTimeout(stepAndSleep, stepDelay);
					}
					else {
						var pageCoord = {pageX: Math.round(start.x+drag.dx), pageY: Math.round(start.y+drag.dy)},
							clientCoord = pageToClientPos(pageCoord, targetDoc),
							eventTarget = elementAtPosition(clientCoord, targetDoc) || ele;
						self.simulateEvent( eventTarget, "mousemove", pageCoord);
						dragFinished(ele, options);
					}
				}
				else {
					setTimeout(stepAndSleep, stepDelay - timeElapsed);
				}

			}

			if ( (!interpolOptions.stepDelay && !interpolOptions.duration) || ((interpolOptions.stepDelay <= 0) && (interpolOptions.duration <= 0)) ) {
				// Trigger as fast as possible
				for (var i=0; i < stepCount; i+=1) {
					interpolationStep();
				}
				var pageCoord = {pageX: Math.round(start.x+drag.dx), pageY: Math.round(start.y+drag.dy)},
					clientCoord = pageToClientPos(pageCoord, targetDoc),
					eventTarget = elementAtPosition(clientCoord, targetDoc) || ele;
				self.simulateEvent( eventTarget, "mousemove", pageCoord);
				dragFinished(ele, options);
			}
			else {
				var stepDelay = parseInt(interpolOptions.stepDelay,10) || Math.ceil(parseInt(interpolOptions.duration,10) / (stepCount+1));
				var step = 0;

				lastTime = now();
				setTimeout(stepAndSleep, stepDelay);
			}
			
		}

		/**
		 * @returns {Object|undefined} an object containing information about the currently active drag
		 * or <code>undefined</code> when there is no active drag.
		 * The returned object contains the following properties:
		 * <ul>
		 *     <li><code>dragElement</code>: the dragged element</li>
		 *     <li><code>dragStart</code>: object with the properties <code>x</code> and <code>y</code>
		 * representing the page relative start coordinates of the drag</li>
		 *     <li><code>dragDistance</code>: object with the properties <code>x</code> and <code>y</code>
		 * representing the distance of the drag in x and y direction</li>
		 * </ul>
		 * @public
		 * @author julrich
		 * @since 1.0
		 */
		$.simulate.activeDrag = function() {
			if (!$.simulate._activeDrag) {
				return undefined;
			}
			return $.extend(true,{},$.simulate._activeDrag);
		};
		
		$.extend( $.simulate.prototype,

		/**
		 * @lends $.simulate.prototype
		 */
		{
			
		
			/**
			 * Simulates a drag.
			 *
			 * @see https://github.com/j-ulrich/jquery-simulate-ext/blob/master/doc/drag-n-drop.md
			 * @public
			 * @author julrich
			 * @since 1.0
			 */
			simulateDrag: function() {
				var self = this,
					ele = self.target,
					options = $.extend({
						dx: 0,
						dy: 0,
						dragTarget: undefined,
						clickToDrag: false,
						eventProps: {},
						interpolation: {
							stepWidth: 0,
							stepCount: 0,
							stepDelay: 0,
							duration: 0,
							shaky: false
						},
						callback: undefined
					},	this.options);
				
				var start,
					continueDrag = ($.simulate._activeDrag && $.simulate._activeDrag.dragElement === ele);
				
				if (continueDrag) {
					start = $.simulate._activeDrag.dragStart;
				}
				else {
					start = findCenter( ele );
				}
					
				var x = Math.round( start.x ),
					y = Math.round( start.y ),
					coord = { pageX: x, pageY: y },
					dx,
					dy;
					
				if (options.dragTarget) {
					var end = findCenter(options.dragTarget);
					dx = Math.round(end.x - start.x);
					dy = Math.round(end.y - start.y);
				}
				else {
					dx = options.dx || 0;
					dy = options.dy || 0;
				}
					
				if (continueDrag) {
					// We just continue to move the dragged element
					$.simulate._activeDrag.dragDistance.x += dx;
					$.simulate._activeDrag.dragDistance.y += dy;	
					coord = { pageX: Math.round(x + $.simulate._activeDrag.dragDistance.x) , pageY: Math.round(y + $.simulate._activeDrag.dragDistance.y) };
				}
				else {
					if ($.simulate._activeDrag) {
						// Drop before starting a new drag
						$($.simulate._activeDrag.dragElement).simulate( "drop" );
					}
					
					// We start a new drag
					$.extend(options.eventProps, coord);
					self.simulateEvent( ele, "mousedown", options.eventProps );
					if (options.clickToDrag === true) {
						self.simulateEvent( ele, "mouseup", options.eventProps );
						self.simulateEvent( ele, "click", options.eventProps );
					}
					$(ele).add(ele.ownerDocument).one('mouseup', function() {
						$.simulate._activeDrag = undefined;
					});
					
					$.extend($.simulate, {
						_activeDrag: {
							dragElement: ele,
							dragStart: { x: x, y: y },
							dragDistance: { x: dx, y: dy }
						}
					});
					coord = { pageX: Math.round(x + dx), pageY: Math.round(y + dy) };
				}

				if (dx !== 0 || dy !== 0) {
					
					if ( options.interpolation && (options.interpolation.stepCount || options.interpolation.stepWidth) ) {
						interpolatedEvents(self, ele, {x: x, y: y}, {dx: dx, dy: dy}, options);
					}
					else {
						var targetDoc = selectFirstMatch([ele, ele.ownerDocument], isDocument) || document,
							clientCoord = pageToClientPos(coord, targetDoc),
							eventTarget = elementAtPosition(clientCoord, targetDoc) || ele;

						$.extend(options.eventProps, coord);
						self.simulateEvent( eventTarget, "mousemove", options.eventProps );
						dragFinished(ele, options);
					}
				}
				else {
					dragFinished(ele, options);
				}
			},
			
			/**
			 * Simulates a drop.
			 * 
			 * @see https://github.com/j-ulrich/jquery-simulate-ext/blob/master/doc/drag-n-drop.md
			 * @public
			 * @author julrich
			 * @since 1.0
			 */
			simulateDrop: function() {
				var self = this,
					ele = this.target,
					activeDrag = $.simulate._activeDrag,
					options = $.extend({
						clickToDrop: false,
						eventProps: {},
						callback: undefined
					}, self.options),
					moveBeforeDrop = true,
					center = findCenter( ele ),
					x = Math.round( center.x ),
					y = Math.round( center.y ),
					coord = { pageX: x, pageY: y },
					targetDoc = ( (activeDrag)? selectFirstMatch([activeDrag.dragElement, activeDrag.dragElement.ownerDocument], isDocument) : selectFirstMatch([ele, ele.ownerDocument], isDocument) ) || document, 
					clientCoord = pageToClientPos(coord, targetDoc),
					eventTarget = elementAtPosition(clientCoord, targetDoc);
				
				if (activeDrag && (activeDrag.dragElement === ele || isDocument(ele))) {
					// We already moved the mouse during the drag so we just simulate the drop on the end position
					x = Math.round(activeDrag.dragStart.x + activeDrag.dragDistance.x);
					y = Math.round(activeDrag.dragStart.y + activeDrag.dragDistance.y);
					coord = { pageX: x, pageY: y };
					clientCoord = pageToClientPos(coord, targetDoc);
					eventTarget = elementAtPosition(clientCoord, targetDoc);
					moveBeforeDrop = false;
				}
				
				if (!eventTarget) {
					eventTarget = (activeDrag)? activeDrag.dragElement : ele;
				}
				
				$.extend(options.eventProps, coord);

				if (moveBeforeDrop === true) {
					// Else we assume the drop should happen on target, so we move there
					self.simulateEvent( eventTarget, "mousemove", options.eventProps );
				}

				if (options.clickToDrop) {
					self.simulateEvent( eventTarget, "mousedown", options.eventProps );
				}
				this.simulateEvent( eventTarget, "mouseup", options.eventProps );
				if (options.clickToDrop) {
					self.simulateEvent( eventTarget, "click", options.eventProps );
				}
				
				$.simulate._activeDrag = undefined;
				$(eventTarget).trigger({type: "simulate-drop"});
				if ($.isFunction(options.callback)) {
					options.callback.apply(eventTarget);
				}
			},
			
			/**
			 * Simulates a drag followed by drop.
			 * 
			 * @see https://github.com/j-ulrich/jquery-simulate-ext/blob/master/doc/drag-n-drop.md
			 * @public
			 * @author julrich
			 * @since 1.0
			 */
			simulateDragNDrop: function() {
				var self = this,
					ele = this.target,
					options = $.extend({
						dragTarget: undefined,
						dropTarget: undefined
					}, self.options),
					// If there is a dragTarget or dx/dy, then we drag there and simulate an independent drop on dropTarget or ele
					dropEle = ((options.dragTarget || options.dx || options.dy)? options.dropTarget : ele) || ele;
	/*
					dx = (options.dropTarget)? 0 : (options.dx || 0),
					dy = (options.dropTarget)? 0 : (options.dy || 0),
					dragDistance = { dx: dx, dy: dy };
				
				$.extend(options, dragDistance);
	*/			
				$(ele).simulate( "drag", $.extend({},options,{
					// If there is no dragTarget, no dx and no dy, we drag onto the dropTarget directly
					dragTarget: options.dragTarget || ((options.dx || options.dy)?undefined:options.dropTarget),
					callback: function() {
						$(dropEle).simulate( "drop", options );
					}
				}));
				
			}
		});
		
	}(jQuery));

/***/ },
/* 6 */
/***/ function(module, exports) {

	/*jshint camelcase:true, plusplus:true, forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, maxerr:100, white:false, onevar:false */
	/*global jQuery:true $:true bililiteRange:true */

	/* jQuery Simulate Key-Sequence Plugin 1.3.0
	 * http://github.com/j-ulrich/jquery-simulate-ext
	 * 
	 * Copyright (c) 2014 Jochen Ulrich
	 * Licensed under the MIT license (MIT-LICENSE.txt).
	 * 
	 * The plugin is an extension and modification of the jQuery sendkeys plugin by Daniel Wachsstock.
	 * Therefore, the original copyright notice and license follow below.
	 */

	// insert characters in a textarea or text input field
	// special characters are enclosed in {}; use {{} for the { character itself
	// documentation: http://bililite.com/blog/2008/08/20/the-fnsendkeys-plugin/
	// Version: 2.0
	// Copyright (c) 2010 Daniel Wachsstock
	// MIT license:
	// Permission is hereby granted, free of charge, to any person
	// obtaining a copy of this software and associated documentation
	// files (the "Software"), to deal in the Software without
	// restriction, including without limitation the rights to use,
	// copy, modify, merge, publish, distribute, sublicense, and/or sell
	// copies of the Software, and to permit persons to whom the
	// Software is furnished to do so, subject to the following
	// conditions:
	//
	// The above copyright notice and this permission notice shall be
	// included in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
	// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
	// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
	// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
	// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	// OTHER DEALINGS IN THE SOFTWARE.

	;(function($, undefined){
		"use strict";
		
		$.simulate.prototype.quirks = $.simulate.prototype.quirks || {};
		
		$.extend($.simulate.prototype.quirks, 

		/**
		 * @lends $.simulate.prototype.quirks
		 */		
		{
			/**
			 * When simulating with delay in non-input elements,
			 * all spaces are simulated at the end of the sequence instead
			 * of the correct position.
			 * @see {@link https://github.com/j-ulrich/jquery-simulate-ext/issues/6|issues #6}
			 */
			delayedSpacesInNonInputGlitchToEnd: undefined

		});
		
		$.extend($.simulate.prototype,
				
		/**
		 * @lends $.simulate.prototype
		 */		
		{
			
			/**
			 * Simulates sequencial key strokes.
			 * 
			 * @see https://github.com/j-ulrich/jquery-simulate-ext/blob/master/doc/key-sequence.md
			 * @public
			 * @author Daniel Wachsstock, julrich
			 * @since 1.0
			 */
			simulateKeySequence: function() {
				var target = this.target,
					$target = $(target),
					opts = $.extend({
						sequence: "",
						triggerKeyEvents: true,
						eventProps: {},
						delay: 0,
						callback: undefined
					}, this.options),
					sequence = opts.sequence;
				
				opts.delay = parseInt(opts.delay,10);

				var localkeys = {};

				// Fix for #6 (https://github.com/j-ulrich/jquery-simulate-ext/issues/6)
				if ($.simulate.prototype.quirks.delayedSpacesInNonInputGlitchToEnd && !$target.is('input,textarea')) {
					$.extend(localkeys, {
						' ': function(rng, s, opts) {
							var internalOpts = $.extend({}, opts, {
								triggerKeyEvents: false,
								delay: 0,
								callback: undefined
							});
							$.simulate.prototype.simulateKeySequence.defaults.simplechar(rng, '\xA0', internalOpts);
							$.simulate.prototype.simulateKeySequence.defaults['{leftarrow}'](rng, s, internalOpts);
							$.simulate.prototype.simulateKeySequence.defaults.simplechar(rng, s, opts);
							$.simulate.prototype.simulateKeySequence.defaults['{del}'](rng, s, internalOpts);
						}
					});
				}

				$.extend(localkeys, opts, $target.data('simulate-keySequence')); // allow for element-specific key functions

				// most elements to not keep track of their selection when they lose focus, so we have to do it for them
				var rng = $.data (target, 'simulate-keySequence.selection');
				if (!rng){
					rng = bililiteRange(target).bounds('selection');
					$.data(target, 'simulate-keySequence.selection', rng);
					$target.bind('mouseup.simulate-keySequence', function(){
						// we have to update the saved range. The routines here update the bounds with each press, but actual keypresses and mouseclicks do not
						$.data(target, 'simulate-keySequence.selection').bounds('selection');
					}).bind('keyup.simulate-keySequence', function(evt){
						// restore the selection if we got here with a tab (a click should select what was clicked on)
						if (evt.which === 9){
							// there's a flash of selection when we restore the focus, but I don't know how to avoid that.
							$.data(target, 'simulate-keySequence.selection').select();
						}else{
							$.data(target, 'simulate-keySequence.selection').bounds('selection');
						}	
					});
				}
				$target.focus();
				if (typeof sequence === 'undefined') { // no string, so we just set up the event handlers
					return;
				}
				sequence = sequence.replace(/\n/g, '{enter}'); // turn line feeds into explicit break insertions
				
				/**
				 * Informs the rest of the world that the sequences is finished.
				 * @fires simulate-keySequence
				 * @requires target
				 * @requires sequence
				 * @requires opts
				 * @inner
				 * @author julrich
				 * @since 1.0
				 */
				function sequenceFinished() {
					$target.trigger({type: 'simulate-keySequence', sequence: sequence});
					if ($.isFunction(opts.callback)) {
						opts.callback.apply(target, [{
							sequence: sequence
						}]);
					}
				}
				
				/**
				 * Simulates the key stroke for one character (or special sequence) and sleeps for
				 * <code>opts.delay</code> milliseconds.
				 * @requires lastTime
				 * @requires now()
				 * @requires tokenRegExp
				 * @requires opts
				 * @requires rng
				 * @inner
				 * @author julrich
				 * @since 1.0
				 */
				function processNextToken() {
					var timeElapsed = now() - lastTime; // Work-around for Firefox "bug": setTimeout can fire before the timeout
					if (timeElapsed >= opts.delay) {
						var match = tokenRegExp.exec(sequence);
						if ( match !== null ) {
							var s = match[0];
							(localkeys[s] || $.simulate.prototype.simulateKeySequence.defaults[s] || $.simulate.prototype.simulateKeySequence.defaults.simplechar)(rng, s, opts);
							setTimeout(processNextToken, opts.delay);
						}
						else {
							sequenceFinished();
						}
						lastTime = now();
					}
					else {
						setTimeout(processNextToken, opts.delay - timeElapsed);
					}
				}

				if (!opts.delay || opts.delay <= 0) {
					// Run as fast as possible
					sequence.replace(/\{[^}]*\}|[^{]+/g, function(s){
						(localkeys[s] || $.simulate.prototype.simulateKeySequence.defaults[s] || $.simulate.prototype.simulateKeySequence.defaults.simplechar)(rng, s, opts);
					});
					sequenceFinished();
				}
				else {
					var tokenRegExp = /\{[^}]*\}|[^{]/g; // This matches curly bracket expressions or single characters
					var now = Date.now || function() { return new Date().getTime(); },
						lastTime = now();
					
					processNextToken();
				}
				
			}
		});

		$.extend($.simulate.prototype.simulateKeySequence.prototype,
				
		/**
		 * @lends $.simulate.prototype.simulateKeySequence.prototype
		 */		
		{
			
				/**
				 * Maps special character char codes to IE key codes (covers IE and Webkit)
				 * @author julrich
				 * @since 1.0
				 */
				IEKeyCodeTable: {
					33: 49,	// ! -> 1
					64: 50,	// @ -> 2
					35: 51,	// # -> 3
					36: 52,	// $ -> 4
					37: 53,	// % -> 5
					94: 54,	// ^ -> 6
					38: 55,	// & -> 7
					42: 56,	// * -> 8
					40: 57,	// ( -> 9
					41: 48,	// ) -> 0
					
					59: 186,	// ; -> 186
					58: 186,	// : -> 186
					61: 187,	// = -> 187
					43: 187,	// + -> 187
					44: 188,	// , -> 188
					60: 188,	// < -> 188
					45: 189,	// - -> 189
					95: 189,	// _ -> 189
					46: 190,	// . -> 190
					62: 190,	// > -> 190
					47: 191,	// / -> 191
					63: 191,	// ? -> 191
					96: 192,	// ` -> 192
					126: 192,	// ~ -> 192
					91: 219,	// [ -> 219
					123: 219,	// { -> 219
					92: 220,	// \ -> 220
					124: 220,	// | -> 220
					93: 221,	// ] -> 221
					125: 221,	// } -> 221
					39: 222,	// ' -> 222
					34: 222		// " -> 222
				},
				
				/**
				 * Tries to convert character codes to key codes.
				 * @param {Numeric} character - A character code
				 * @returns {Numeric} The key code corresponding to the given character code,
				 * based on the key code table of InternetExplorer. If no corresponding key code
				 * could be found (which will be the case for all special characters except the common
				 * ones), the character code itself is returned. However, <code>keyCode === charCode</code>
				 * does not imply that no key code was found because some key codes are identical to the
				 * character codes (e.g. for uppercase characters).
				 * @requires $.simulate.prototype.simulateKeySequence.prototype.IEKeyCodeTable
				 * @see $.simulate.prototype.simulateKeySequence.prototype.IEKeyCodeTable
				 * @author julrich
				 * @since 1.0
				 */
				charToKeyCode: function(character) {
					var specialKeyCodeTable = $.simulate.prototype.simulateKeySequence.prototype.IEKeyCodeTable;
					var charCode = character.charCodeAt(0);
			
					if (charCode >= 64 && charCode <= 90 || charCode >= 48 && charCode <= 57) {
						// A-Z and 0-9
						return charCode;
					}
					else if (charCode >= 97 && charCode <= 122) {
						// a-z -> A-Z
						return character.toUpperCase().charCodeAt(0);
					}
					else if (specialKeyCodeTable[charCode] !== undefined) {
						return specialKeyCodeTable[charCode];
					}
					else {
						return charCode;
					}
				}
		});

		// add the functions publicly so they can be overridden
		$.simulate.prototype.simulateKeySequence.defaults = {
			
			/**
			 * Simulates key strokes of "normal" characters (i.e. non-special sequences).
			 * @param {Object} rng - bililiteRange object of the simulation target element.
			 * @param {String} s - String of (simple) characters to be simulated. 
			 * @param {Object} opts - The key-sequence options.
			 * @author Daniel Wachsstock, julrich
			 * @since 1.0
			 */
			simplechar: function (rng, s, opts){
				rng.text(s, 'end');
				if (opts.triggerKeyEvents) {
					for (var i =0; i < s.length; i += 1){
						var charCode = s.charCodeAt(i);
						var keyCode = $.simulate.prototype.simulateKeySequence.prototype.charToKeyCode(s.charAt(i));
						// a bit of cheating: rng._el is the element associated with rng.
						$(rng._el).simulate('keydown', $.extend({}, opts.eventProps, {keyCode: keyCode}));
						$(rng._el).simulate('keypress', $.extend({}, opts.eventProps,{keyCode: charCode, which: charCode, charCode: charCode}));
						$(rng._el).simulate('keyup', $.extend({}, opts.eventProps, {keyCode: keyCode}));
					}
				}
			},
			
			/**
			 * Simulates key strokes of a curly opening bracket. 
			 * @param {Object} rng - bililiteRange object of the simulation target element.
			 * @param {String} s - Ignored. 
			 * @param {Object} opts - The key-sequence options.
			 * @author Daniel Wachsstock, julrich
			 * @since 1.0
			 */
			'{{}': function (rng, s, opts){
				$.simulate.prototype.simulateKeySequence.defaults.simplechar(rng, '{', opts);
			},
			
			/**
			 * Simulates hitting the enter button.
			 * @param {Object} rng - bililiteRange object of the simulation target element.
			 * @param {String} s - Ignored. 
			 * @param {Object} opts - The key-sequence options.
			 * @author Daniel Wachsstock, julrich
			 * @since 1.0
			 */
			'{enter}': function (rng, s, opts){
				rng.insertEOL();
				rng.select();
				if (opts.triggerKeyEvents === true) {
					$(rng._el).simulate('keydown', $.extend({}, opts.eventProps, {keyCode: 13}));
					$(rng._el).simulate('keypress', $.extend({}, opts.eventProps, {keyCode: 13, which: 13, charCode: 13}));
					$(rng._el).simulate('keyup', $.extend({}, opts.eventProps, {keyCode: 13}));
				}
			},
			
			/**
			 * Simulates hitting the backspace button.
			 * @param {Object} rng - bililiteRange object of the simulation target element.
			 * @param {String} s - Ignored. 
			 * @param {Object} opts - The key-sequence options.
			 * @author Daniel Wachsstock, julrich
			 * @since 1.0
			 */
			'{backspace}': function (rng, s, opts){
				var b = rng.bounds();
				if (b[0] === b[1]) { rng.bounds([b[0]-1, b[0]]); } // no characters selected; it's just an insertion point. Remove the previous character
				rng.text('', 'end'); // delete the characters and update the selection
				if (opts.triggerKeyEvents === true) {
					$(rng._el).simulate('keydown', $.extend({}, opts.eventProps, {keyCode: 8}));
					$(rng._el).simulate('keyup', $.extend({}, opts.eventProps, {keyCode: 8}));
				}
			},
			
			/**
			 * Simulates hitting the delete button.
			 * @param {Object} rng - bililiteRange object of the simulation target element.
			 * @param {String} s - Ignored. 
			 * @param {Object} opts - The key-sequence options.
			 * @author Daniel Wachsstock, julrich
			 * @since 1.0
			 */
			'{del}': function (rng, s, opts){
				var b = rng.bounds();
				if (b[0] === b[1]) { rng.bounds([b[0], b[0]+1]); } // no characters selected; it's just an insertion point. Remove the next character
				rng.text('', 'end'); // delete the characters and update the selection
				if (opts.triggerKeyEvents === true) {
					$(rng._el).simulate('keydown', $.extend({}, opts.eventProps, {keyCode: 46}));
					$(rng._el).simulate('keyup', $.extend({}, opts.eventProps, {keyCode: 46}));
				}
			},
			
			/**
			 * Simulates hitting the right arrow button.
			 * @param {Object} rng - bililiteRange object of the simulation target element.
			 * @param {String} s - Ignored. 
			 * @param {Object} opts - The key-sequence options.
			 * @author Daniel Wachsstock, julrich
			 * @since 1.0
			 */
			'{rightarrow}':  function (rng, s, opts){
				var b = rng.bounds();
				if (b[0] === b[1]) { b[1] += 1; } // no characters selected; it's just an insertion point. Move to the right
				rng.bounds([b[1], b[1]]).select();
				if (opts.triggerKeyEvents === true) {
					$(rng._el).simulate('keydown', $.extend({}, opts.eventProps, {keyCode: 39}));
					$(rng._el).simulate('keyup', $.extend({}, opts.eventProps, {keyCode: 39}));
				}
			},
			
			/**
			 * Simulates hitting the left arrow button.
			 * @param {Object} rng - bililiteRange object of the simulation target element.
			 * @param {String} s - Ignored. 
			 * @param {Object} opts - The key-sequence options.
			 * @author Daniel Wachsstock, julrich
			 * @since 1.0
			 */
			'{leftarrow}': function (rng, s, opts){
				var b = rng.bounds();
				if (b[0] === b[1]) { b[0] -= 1; } // no characters selected; it's just an insertion point. Move to the left
				rng.bounds([b[0], b[0]]).select();
				if (opts.triggerKeyEvents === true) {
					$(rng._el).simulate('keydown', $.extend({}, opts.eventProps, {keyCode: 37}));
					$(rng._el).simulate('keyup', $.extend({}, opts.eventProps, {keyCode: 37}));
				}
			},
			
			/**
			 * Selects all characters in the target element.
			 * @param {Object} rng - bililiteRange object of the simulation target element.
			 * @author Daniel Wachsstock, julrich
			 * @since 1.0
			 */
			'{selectall}' : function (rng){
				rng.bounds('all').select();
			}
		};
		
		
			
		
		//####### Quirk detection #######
		if ($.simulate.ext_disableQuirkDetection !== true) { // Fixes issue #9 (https://github.com/j-ulrich/jquery-simulate-ext/issues/9)
			$(document).ready(function() {
				// delayedSpacesInNonInputGlitchToEnd
				// See issues #6 (https://github.com/j-ulrich/jquery-simulate-ext/issues/6)
				/* Append a div to the document (bililiteRange needs the element to be in the document), simulate
				 * a delayed sequence containing a space in the middle and check if the space moves to the end.
				 */
				var $testDiv = $('<div/>').css({height: 1, width: 1, position: 'absolute', left: -1000, top: -1000}).appendTo('body');
				$testDiv.simulate('key-sequence', {sequence: '\xA0 \xA0', delay:1, callback: function() {
					$.simulate.prototype.quirks.delayedSpacesInNonInputGlitchToEnd = ($testDiv.text() === '\xA0\xA0 ');
					$testDiv.remove();
				}});
			});
		}

	})(jQuery);

/***/ },
/* 7 */
/***/ function(module, exports) {

	/*jshint camelcase:true, plusplus:true, forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, maxerr:100, white:false, onevar:false */
	/*global jQuery:true $:true */

	/* jQuery Simulate Key-Combo Plugin 1.3.0
	 * http://github.com/j-ulrich/jquery-simulate-ext
	 * 
	 * Copyright (c) 2014 Jochen Ulrich
	 * Licensed under the MIT license (MIT-LICENSE.txt).
	 */

	/**
	 * 
	 * For details about key events, key codes, char codes etc. see http://unixpapa.com/js/key.html
	 */

	;(function($,undefined) {
		"use strict";

		/**
		 * Key codes of special keys.
		 * @private
		 * @author julrich
		 * @since 1.3.0
		 */
		var SpecialKeyCodes = {
			// Modifier Keys
			SHIFT:			16,
			CONTROL:		17,
			ALTERNATIVE:	18,
			META:			91,
			// Arrow Keys
			LEFT_ARROW:		37,
			UP_ARROW:		38,
			RIGHT_ARROW:	39,
			DOWN_ARROW:		40,
			// Function Keys
			F1:				112,
			F2:				113,
			F3:				114,
			F4:				115,
			F5:				116,
			F6:				117,
			F7:				118,
			F8:				119,
			F9:				120,
			F10:			121,
			F11:			122,
			F12:			123,
			// Other
			ENTER:			13,
			TABULATOR:		9,
			ESCAPE:			27,
			BACKSPACE:		8,
			INSERT:			45,
			DELETE:			46,
			HOME:			36,
			END:			35,
			PAGE_UP:		33,
			PAGE_DOWN:		34,

		};
		
		// SpecialKeyCode aliases
		SpecialKeyCodes.CTRL	= SpecialKeyCodes.CONTROL;
		SpecialKeyCodes.ALT		= SpecialKeyCodes.ALTERNATIVE;
		SpecialKeyCodes.COMMAND	= SpecialKeyCodes.META;
		SpecialKeyCodes.TAB		= SpecialKeyCodes.TABULATOR;
		SpecialKeyCodes.ESC		= SpecialKeyCodes.ESCAPE;
		

		$.extend( $.simulate.prototype,
				
		/**
		 * @lends $.simulate.prototype
		 */		
		{
			
			
			/**
			 * Simulates simultaneous key presses
			 * 
			 * @see https://github.com/j-ulrich/jquery-simulate-ext/blob/master/doc/key-combo.md
			 * @public
			 * @author julrich
			 * @since 1.0
			 */
			simulateKeyCombo: function() {
				var $target = $(this.target),
					options = $.extend({
						combo: "",
						eventProps: {},
						eventsOnly: false
					}, this.options),
					combo = options.combo,
					comboSplit = combo.split(/(\+)/),
					plusExpected = false,
					holdKeys = [],
					i;
				
				if (combo.length === 0) {
					return;
				}
				
				// Remove empty parts
				comboSplit = $.grep(comboSplit, function(part) {
					return (part !== "");
				});
				
				for (i=0; i < comboSplit.length; i+=1) {
					var key = comboSplit[i],
						keyLowered = key.toLowerCase(),
						keySpecial = key.toUpperCase().replace('-','_');
					
					if (plusExpected) {
						if (key !== "+") {
							throw 'Syntax error: expected "+"';
						}
						else {
							plusExpected = false;
						}
					}
					else {
						var keyCode;
						if ( key.length > 1) {
							// Assume a special key
							keyCode = SpecialKeyCodes[keySpecial];
							
							if (keyCode === undefined) {
								throw 'Syntax error: unknown special key "'+key+'" (forgot "+" between keys?)';
							}
							
							switch (keyCode) {
							case SpecialKeyCodes.CONTROL:
							case SpecialKeyCodes.ALT:
							case SpecialKeyCodes.SHIFT:
							case SpecialKeyCodes.META:
								options.eventProps[keyLowered+"Key"] = true;
								break;
							}
							holdKeys.unshift(keyCode);
							options.eventProps.keyCode = keyCode;
							options.eventProps.which = keyCode;
							options.eventProps.charCode = 0;
							$target.simulate("keydown", options.eventProps);
							
						}
						else {
							// "Normal" key
							keyCode = $.simulate.prototype.simulateKeySequence.prototype.charToKeyCode(key);
							holdKeys.unshift(keyCode);
							options.eventProps.keyCode = keyCode;
							options.eventProps.which = keyCode;
							options.eventProps.charCode = undefined;
							$target.simulate("keydown", options.eventProps);
							if (options.eventProps.shiftKey) {
								key = key.toUpperCase();
							}
							options.eventProps.keyCode = key.charCodeAt(0);
							options.eventProps.charCode = options.eventProps.keyCode;
							options.eventProps.which = options.eventProps.keyCode;
							$target.simulate("keypress", options.eventProps);
							if (options.eventsOnly !== true && !options.eventProps.ctrlKey && !options.eventProps.altKey && !options.eventProps.metaKey) {
								$target.simulate('key-sequence', {sequence: key, triggerKeyEvents: false});
							}
						}
						
						plusExpected = true;
					}
				}
				
				if (!plusExpected) {
					throw 'Syntax error: expected key (trailing "+"?)';
				}
				
				// Release keys
				options.eventProps.charCode = undefined;
				for (i=0; i < holdKeys.length; i+=1) {
					options.eventProps.keyCode = holdKeys[i];
					options.eventProps.which = holdKeys[i];
					switch (options.eventProps.keyCode) {
					case SpecialKeyCodes.ALT:		options.eventProps.altKey = false; break;
					case SpecialKeyCodes.SHIFT:		options.eventProps.shiftKey = false; break;
					case SpecialKeyCodes.CONTROL:	options.eventProps.ctrlKey = false; break;
					case SpecialKeyCodes.META:		options.eventProps.metaKey = false; break;
					default:
						break;
					}
					$target.simulate("keyup", options.eventProps);				
				}
			}
			
		});
	}(jQuery));

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	angular.module('grammer_execute',['ui.router', 'ngSanitize', 'ngResource', 'ngLodash'])
		// Possibly unhandled rejection 다루는 로직
		.config(['$qProvider', function ($qProvider) {
		    $qProvider.errorOnUnhandledRejections(false);
		}])

		.run(function($rootScope, $state, $window, $q, grammerGetService, lodash) {
			$rootScope._ = lodash;

	  	// Go Function Section
			$rootScope.goToPage = function(page, id, data){
				if(id<1) id=null;
				$state.go(page, { 'id':id, 'data':data }, { location: false });
			};

			// Message Function Section
			$rootScope.message = function(messagedir, content, interval_rest){
				if(interval_rest&&angular.isNumber(interval_rest)) $rootScope.$broadcast('message_'+messagedir, content, interval_rest);
				else $rootScope.$broadcast('message_'+messagedir, content);
			};

			// Countdown Function Section
			$rootScope.countdown = function(time){
				$rootScope.$broadcast('countdown', time);
			};

			// Set Function Section
			$rootScope.setDeviceWidthHeight = function(){
				$rootScope.device={ width:$window.innerWidth, height:$window.innerHeight };
			};

			// What Function Section
			$rootScope.what = function(obj){
			  console.log(obj);
			};

			$rootScope.initialize = function(){
				// boolean 관리
				$rootScope.booleans = {
					popup_boolean: false
				};

				$rootScope.values = {};

				// 기존 initialize 함수
				$rootScope.grammer_switch = 2;
				$rootScope.current_func_key = null;
				$rootScope.target_parent = null;
				$rootScope.setDeviceWidthHeight();
				$rootScope.excute_on = { value: null };
				$rootScope.excute_log_on = { value: null };
				grammerGetService.getGrammerStorage().then(function(grammer_storage){
					if(grammer_storage){
						$rootScope.excute_on.value = grammer_storage.excute_on;
						$rootScope.excute_log_on.value = grammer_storage.excute_log_on;
						$rootScope.grammer_storage = grammer_storage;
						if(grammer_storage.current_func_key&&grammer_storage.current_func_key!=null) $rootScope.current_func_key = grammer_storage.current_func_key; 
					}
					else{
						$rootScope.excute_on.value = true;
						$rootScope.excute_log_on.value = true;
						$rootScope.grammer_storage = null;
						$rootScope.current_func_key = null;
					}
				});
			};
			$rootScope.initialize();

			// Window Function Section 
			$window.addEventListener('resize', function() {
				$rootScope.$apply(function(){
					$rootScope.setDeviceWidthHeight();
				});
			});

			// function receiveMessage(event) {
			// 	console.log('event');
			// 	console.log(event);
			// 	console.info('event', event);
			// 	event.data = JSON.parse(event.data);
			// 	if(event.data.name=='responseForGetDocumentOfWoringFrame') $rootScope.$broadcast('DepartureOfDocumentForWorkingFrame', event.data.corresponding_frame_document);
			// };

			// window.addEventListener("message", receiveMessage, false);

			// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
			//   console.log(response.farewell);
			// });

			// OnMessage Function Section
			chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
				if(request.command=="goToPage"){
					location.href=request.value;
					sendResponse({response_value:"response"});
				}
			});
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	$(document).ready(function(){
		var div_grammer = $('<div class="f-ng" id="grammer" ng-app="grammer_execute"></div>');
	  div_grammer.append('<copyright-dir ng-if="$root.grammer_storage"></copyright-dir>');
	  div_grammer.append('<list-dir grammer-storage="$root.grammer_storage" ng-if="$root.grammer_storage"></list-dir>');
	  div_grammer.append('<popup-dir grammer-storage="$root.grammer_storage" ng-if="$root.booleans.popup_boolean&&$root.grammer_storage"></popup-dir>');
	  div_grammer.append('<logview-dir grammer-storage="$root.grammer_storage" grammer-key="$root.grammer_storage.grammer_key" versions="$root.grammer_storage.grammers[$root.grammer_storage.grammer_key].versions" version-key="$root.grammer_storage.grammers[$root.grammer_storage.grammer_key].version_key" version-value="$root.grammer_storage.grammers[$root.grammer_storage.grammer_key].versions[$root.grammer_storage.grammers[$root.grammer_storage.grammer_key].version_key]" ng-if="$root.grammer_storage"></logview-dir>')
	  $('html').append(div_grammer);
	  angular.bootstrap(div_grammer, ['grammer_execute']);
	});

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	angular.module('grammer_execute')
		.config(function ($httpProvider, $resourceProvider, $compileProvider) {

			$httpProvider.defaults.xsrfCookieName = 'csrftoken';
			$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
			$resourceProvider.defaults.stripTrailingSlashes = false;
			$compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|data|chrome-extension):/);
		});

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	angular.module('grammer_execute')
		.filter('capitalize', function() {
		  return function(input) {
		    return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
		  }
		})
		.filter('trusted', ['$sce', function ($sce) {
	    return function(url) {
	        return $sce.trustAsResourceUrl(url);
	    };
		}])
		.filter('digit2', function() {
			return function(input) {
				input = Number(input);
				if (input < 10) { 
					input = '0' + input;
				}
				return input;
			}
		})
		.filter('chromeExtensionURL', function() {
			return function(input) {
				if(input) return chrome.extension.getURL(input);
				else return null;
			}
		})
		.filter('logFuncKeyFilter', function(){
			return function(func_key) {
				if(func_key=='like') return '님의 게시물에 좋아요 했습니다.';
				else if(func_key=='follow') return '님을 팔로우 했습니다.';
				else if(func_key=='review') return '님에게/님의 게시글에 댓글/답글 달았습니다.';
				else if(func_key=='invite') return '님을 초대 했습니다.';
				else if(func_key=='signup') return '에 가입 했습니다.';
				else if(func_key=='friend') return '님에게 친구신청 했습니다.';
				else if(func_key=='message') return '님에게 메세지 보냈습니다.';
				else if(func_key=='unfriend') return '님을 친구요청 취소 했습니다.';
				else if(func_key=='filter') return '댓글필터링 했습니다.';
				else if(func_key=='extract') return '추출 했습니다.';
				else if(func_key=='unfollow') return '님을 언팔로우 했습니다.';
				else if(func_key=='unfollow_all') return '님을 언팔로우 했습니다.';
				else if(func_key=='empathize') return '님의 게시글에 공감했습니다.';
				else if(func_key=='add_together') return '님에게 서로이웃신청했습니다.';
				else return '님에게 작업했습니다.';
			}
		});

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.directive("listDir", function ($rootScope, $filter, $timeout, urlService, grammerGetService, grammerSetService) {
			return {
				link: function (scope, element, attrs) {

					// Set Function Section
					scope.setGrammerKeyOfGrammerStorage = function(grammer_key){
						scope.grammer_storage.grammer_key = grammer_key;
					};

					scope.setGrammerKeyOfGrammerStorageWithUrl = function(){
						// 접속중인 url과 grammers안의 grammer들을 비교해서 대응하는 grammer_key를 얻는다.
						grammerGetService.getGrammerKeyWithUrl().then(function(grammer_key){
							// grammer_storage를 get한 뒤 얻은 grammer_key를 넣어서 set하고 다시 가져온다.
							grammerSetService.setGrammerKey(grammer_key).then(function(grammer_key){
								// 앞단의 grammer_storage(scope.grammer_storage)에 grammer_key값을 세팅한다.
								scope.setGrammerKeyOfGrammerStorage(grammer_key);
							});
						});
					};

					// Toggle Function Section
					scope.toggleGrammer = function(grammer_key){
	          // displaymode(LIST) --> displaymode(DETAIL)
	          if(scope.displaymode == 'LIST'){
	            scope.displaymode = 'DETAIL';
	            // 서버 grammer_storage에 grammer_key를 세팅한다.
	            grammerSetService.setGrammerKey(grammer_key).then(function(grammer_key){
	              // 앞단 grammer_storage에 grammer_key를 세팅한다.
	              scope.setGrammerKeyOfGrammerStorage(grammer_key);
	            }, function(){
	              return;
	            });
	          }
	          // displaymode(DETAIL) --> displaymode(LIST)
	          else {
	            scope.displaymode = 'LIST';
	          }
	        };

					scope.toggleExcute = function(){
						grammerGetService.getGrammerStorage().then(function(grammer_storage_get){
							grammer_storage_get.excute_on = !grammer_storage_get.excute_on;
							grammerSetService.setGrammerStorage(grammer_storage_get).then(function(grammer_storage_set){
								$rootScope.excute_on.value = grammer_storage_set.excute_on;
							});
						});
					};

					scope.toggleExtension = function(){
						$rootScope.message('settings_inform', '우측 상단 주소창 옆 빨강색 GRAMMER 아이콘을 클릭해주세요 :)');
					};

					// Initialize Function Section
					scope.initialize = function(){
						if(!scope.grammer_storage) return;
						scope.setGrammerKeyOfGrammerStorageWithUrl();
					};

					scope.$watch('grammers', function(newValue, oldValue) {
						scope.initialize();
					});

					scope.$watch('grammer_storage.grammer_key', function(newValue, oldValue) {
						if(scope.grammer_storage.grammer_key) scope.displaymode = 'DETAIL';
						else scope.displaymode = 'LIST';
					});
			
					var timeoutPromise;
					scope.$watch('displaymode', function(newValue, oldValue){
						if(newValue==oldValue) return;
						if(scope.displaymode=='LIST'){
							$timeout.cancel(timeoutPromise);
						}
						if(scope.displaymode=='DETAIL'){
							if(!scope.grammer_storage.grammer_key){
								scope.displaymode = 'LIST';
								return;
							}
							var url = urlService.getUrl();
							if(_.includes(url, scope.grammer_storage.grammers[scope.grammer_storage.grammer_key].host)) return;
							$timeout.cancel(timeoutPromise);
							timeoutPromise = $timeout(function(){
								urlService.goToUrl(scope.grammer_storage.grammers[scope.grammer_storage.grammer_key].url);
							}, 1000);
						}
					});

				},
				replace: true,
				scope:{
					grammer_storage: "=grammerStorage"
				},
				restrict:"EA",
				templateUrl: $filter('trusted')(chrome.extension.getURL('templates_execute/list/listDir.html'))
			};
		});

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.directive("detailDir", function ($q, $rootScope, $filter, stringService, grammerStartService, grammerStopService, grammerSetService, grammerGetService){
			return {
			link: function (scope, element, attrs) {

					// Check Function Section
					scope.checkExistOfFuncs = function(funcs, message_boolean){
						// click==true인 func가 없으면 '하고 싶은 작업을 선택해주세요' 라는 메시지가 뜬다.
						if(!_.findKey(funcs, { 'click': true })){
							if(message_boolean) $rootScope.message('stopstart', '하고 싶은 작업을 선택해주세요');
							return false;
						}
						else{
							return true;
						}
					};

					// Start Function Section
					scope.start = function(){
						// click==true인 func가 없을 때
						if(!scope.checkExistOfFuncs(scope.version_value.funcs, true)){
							scope.togglePlay(false);
							scope.stop();
						}
						// click==true인 func가 있을 때
						else{
							grammerStartService.start();
							// if(new Date().getTime() <= new Date('9/1/2016').getTime()){
							// }
							// else{
							// 	alert('9월 1일까지만 사용할 수 있는 그래머 확장프로그램입니다.');
							// 	scope.stop();
							// }
						}
					};

					// Stop Function Section
					scope.stop = function(){
						grammerStopService.stop();
					};

					// Toggle Function Section	

					// (instagrammerUnfollow 사용)&&(Viral Version 사용==$rootScope.grammr_switch==2) 시 클릭한 func말고 나머지는 전부 click = false로 만들기
					// func toggle한다.
					scope.toggleFunc = function(func_key){
						// 해당 func이 준비되었을 때
						if(scope.version_value.funcs[func_key].ready!=false){
							scope.version_value.funcs[func_key].click = !scope.version_value.funcs[func_key].click;
						}
						// 해당 func이 준비되지 않았을 때
						else{
							scope.version_value.funcs[func_key].click = false; 
							$rootScope.message(func_key, func_key+' 기능은 지금 개발 중입니다. 잠시 기다려주세요!');
						}
						if((scope.version_value.funcs[func_key].ready!=false)
						&&scope.version_value.funcs[func_key].only&&($rootScope.grammer_switch==1||$rootScope.grammer_switch==2)){
							grammerSetService.setCurrentFuncKey(func_key).then(function(current_func_key){
								$rootScope.current_func_key = current_func_key;
							});
							// 해당 func만 click(true), 나머지 func click(false)
							grammerSetService.setClickOfFunc(scope.grammer_key, scope.version_key, func_key, scope.version_value.funcs[func_key].click).then(function(click_value){
								scope.version_value.funcs[func_key].click = click_value;
								angular.forEach(scope.version_value.funcs, function(func_value, func_key_at_funcs){
									if(func_key!=func_key_at_funcs){
										grammerSetService.setClickOfFunc(scope.grammer_key, scope.version_key, func_key_at_funcs, false).then(function(click_value){
											scope.version_value.funcs[func_key_at_funcs].click = click_value;
										});
									} 
								});
							});
						}
						else{
							grammerSetService.setClickOfFunc(scope.grammer_key, scope.version_key, func_key, scope.version_value.funcs[func_key].click).then(function(click_value){
								scope.version_value.funcs[func_key].click = click_value;
							});
						}
					};

					scope.togglePlayPrepare = function(){
						return $q(function(resolve, reject){
							grammerGetService.getStatuses(scope.grammer_key, scope.version_key).then(function(statuses_get){
								if(_.size(statuses_get)==0) { resolve(statuses_get); return; }
								var status_index = 0;
								angular.forEach(statuses_get, function(status_value, status_key){
									status_index += 1;
									if(!(stringService.containString1InString2WithoutCapital('limit', status_key)
										||stringService.containString1InString2WithoutCapital('end', status_key))) delete statuses_get[status_key];
									if(status_index>=_.size(statuses_get)) resolve(statuses_get);
								});
							}, function(){
								resolve({});
							});
						});
					};

					// toggle해놓은 func들을 한번에 돌린다.
					scope.togglePlay = function(play_value){
						// play_value가 boolean값이 아닐 때
						if(!_.isBoolean(play_value)){
							play_value = !scope.version_value.play;
						}
						// play_value===true
						if(play_value){
							scope.togglePlayPrepare().then(function(statuses){
								// statuses를 빈객체({})로 셋팅한다.
								grammerSetService.setStatuses(scope.grammer_key, scope.version_key, statuses).then(function(){
									grammerSetService.setPlayOfVersion(scope.grammer_key, scope.version_key, true);
									scope.version_value.play = true;
								});
							});
						}
						// play_value===false
						else{ scope.version_value.play = false; }
					};

					// 이 부분 때문에 새로고침을 해도 작업중이었으면 작업을 시작한다.
					// 이 부분 때문에 scope.stop 함수가 실행됨으로써 해당 버전의 statuses가 생성된다.
					scope.initialize = function(){
						if(scope.version_value.play){
							scope.start(); 
							return; 
						}
						scope.stop();
					};
					scope.initialize();

					// Watch Function Section
					scope.$watch('version_value.play', function(newValue, oldValue){
						if(newValue!==oldValue){
							if(scope.version_value.play){ scope.start(); return; }
							scope.stop();
						}
					});
				},
				replace: true,
				scope:{
					versions: "=versions",
					version_value: "=versionValue",
					version_key: "=versionKey",
					grammer_key: "=grammerKey"
				},
				restrict:"EA",
				templateUrl: $filter('trusted')(chrome.extension.getURL('templates_execute/detail/detailDir.html'))
			};
		});

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.directive("versionDir", function ($rootScope, $filter, grammerSetService) {
			return {
				link: function (scope, element, attrs) {

					// Get Function Section
					scope.getIdsOfVersions = function(){
						return _.values(_.mapValues(scope.grammer_value.versions, 'id'));
					};

					scope.getOrderedIdsOfVersions = function(){
						return _.orderBy(scope.getIdsOfVersions());
					};
					 
					scope.getIdOfCurrentVersion = function(){
						return scope.grammer_value.versions[scope.grammer_value.version_key].id;
					};

					scope.getIndexOfCurrentId = function(){
						return scope.getOrderedIdsOfVersions().indexOf(scope.getIdOfCurrentVersion());
					};

					scope.getPreIdOfCurrentVersion = function(){
						var pre_index = scope.getIndexOfCurrentId()-1;
						return scope.getOrderedIdsOfVersions()[pre_index];
					};

					scope.getNextIdOfCurrentVersion = function(){
						var next_index = scope.getIndexOfCurrentId()+1;
						return scope.getOrderedIdsOfVersions()[next_index];
					};

					// Increse Function Section
					scope.increaseVersion = function(){
						// $rootScope.what(_.filter(scope.grammer_value.versions, {'id':scope.getIdOfCurrentVersion()+1}));
						grammerSetService.setVersionKey(scope.grammer_key, _.findKey(scope.grammer_value.versions, ['id',scope.getNextIdOfCurrentVersion()])).then(function(version_key){
							scope.grammer_value.version_key = version_key;
						});
					};

					// Decrease Function Section
					scope.decreaseVersion = function(){
						grammerSetService.setVersionKey(scope.grammer_key, _.findKey(scope.grammer_value.versions, ['id',scope.getPreIdOfCurrentVersion()])).then(function(version_key){
							scope.grammer_value.version_key = version_key;
						});
					};

				},
				replace: true,
				scope:{
					grammer_key : "=grammerKey",
					grammer_value : "=grammerValue"
				},
				restrict:"EA",
				templateUrl: $filter('trusted')(chrome.extension.getURL('templates_execute/version/versionDir.html'))
			};
		});

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.directive("copyrightDir", function ($rootScope, $filter) {
			return {
				link: function (scope, element, attrs) {
					scope.openGrammerWindow = function(){
						var window_grammer = window.open('http://www.grammer.kr', '_blank');
						if(window_grammer) window_grammer.focus();
						else alert('Please allow popups for this website');
					};
				},
				replace: true,
				scope:false,
				restrict:"EA",
				templateUrl: $filter('trusted')(chrome.extension.getURL('templates_execute/copyright/copyrightDir.html'))
			};
		});

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.directive("messageDir", function ($rootScope, $filter, $timeout) {
			return {
				link: function (scope, element, attrs) {
						
					var timeoutShowTrue;
					var timeoutShowFalse;
					var timeoutDeleteTrue;

					scope.$on('message_'+attrs['message'], function(event, content, interval_rest){

						if(!(content&&content.length>=1)) return;
						// 쉼 메세지일 경우
						if(content.indexOf('쉬었다가')>=0){
							scope.message_of_attrs = { value: attrs['message'] };
							scope.message.content = content;
							scope.message.delete = false;
							$timeout.cancel(timeoutShowTrue);
							$timeout.cancel(timeoutShowFalse);
							$timeout.cancel(timeoutDeleteTrue);
							timeoutShowTrue = $timeout(function(){scope.message.show = true;},100);
							timeoutShowFalse = $timeout(function(){scope.message.show = false;},interval_rest*1000*60);
							timeoutDeleteTrue = $timeout(function(){scope.message.delete = true;},interval_rest*1000*60);
						}
						// 쉼 메시지가 아닌 경우
						else{
							scope.message_of_attrs = { value: attrs['message'] };
							scope.message.content = content;
							scope.message.delete = false;
							$timeout.cancel(timeoutShowTrue);
							$timeout.cancel(timeoutShowFalse);
							$timeout.cancel(timeoutDeleteTrue);
							timeoutShowTrue = $timeout(function(){scope.message.show = true;},100);
							timeoutShowFalse = $timeout(function(){scope.message.show = false;},7000);
							timeoutDeleteTrue = $timeout(function(){scope.message.delete = true;},7500);
						}
					});

					scope.delayDuration = function(){
						$timeout.cancel(timeoutShowTrue);
						$timeout.cancel(timeoutShowFalse);
						$timeout.cancel(timeoutDeleteTrue);
						timeoutShowTrue = $timeout(function(){scope.message.show = true;},100);
						timeoutShowFalse = $timeout(function(){scope.message.show = false;},4000);
						timeoutDeleteTrue = $timeout(function(){scope.message.delete = true;},4500);
					};

					scope.initialize = function(){
						scope.message = {
							content : '',
							show : false,
							delete : true
						}
					};
					scope.initialize();
				},
				replace: true,
				scope:{
				},
				restrict:"EA",
				templateUrl: $filter('trusted')(chrome.extension.getURL('templates_execute/message/messageDir.html'))
			};
		});

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.directive("countdownDir", function ($rootScope, $filter, $interval) {
			return {
				link: function (scope, element, attrs) {

					// Get Function Section
					scope.second = 0;
					scope.getSecond=function(){
						if(angular.isNumber(scope.time)&&scope.time>=1) scope.second = Math.floor(scope.time%60);
						else scope.second = 0;
					};
					scope.minute = 0;
					scope.getMinute=function(){
						if(angular.isNumber(scope.time)&&scope.time>=1) scope.minute = Math.floor((scope.time/60)%60);
						else scope.minute = 0;
					};
					scope.hour = 0;
					scope.getHour=function(){
						if(angular.isNumber(scope.time)&&scope.time>=1) scope.hour = Math.floor(scope.time/(60*60));
						else scope.hour = 0;
					};

					var intervalPromise;
					$rootScope.$on('countdown', function(event, time){
						$interval.cancel(intervalPromise);
						scope.time = Math.floor(time);
						// interval promise를 1초로 끊어서 주었다.
						intervalPromise = $interval(function(){
							scope.time -=1;
							scope.getSecond();
							scope.getMinute();
							scope.getHour();
						},1000);
					});

					scope.$watch('time', function(){
						if(scope.time<=0) $interval.cancel(intervalPromise);
					});


				},
				replace: true,
				scope:{
				},
				restrict:"EA",
				templateUrl: $filter('trusted')(chrome.extension.getURL('templates_execute/countdown/countdownDir.html'))
			};
		});

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	angular.module('grammer_execute')
		.directive('logviewDir', function($rootScope, $filter, grammerGetService, grammerSetService){
			return {
				link: function(scope, element, attrs){

					// Toggle Function Section
					scope.toggleExcuteLog = function(){
						grammerGetService.getGrammerStorage().then(function(grammer_storage_get){
							grammer_storage_get.excute_log_on = !grammer_storage_get.excute_log_on;
							grammerSetService.setGrammerStorage(grammer_storage_get).then(function(grammer_storage_set){
								$rootScope.excute_log_on.value = grammer_storage_set.excute_log_on;
							});
						});
					};

					scope.toggleFunc = function(func_key){
						scope.inform_click = false;
						scope.current_func_key = func_key;
						if(scope.version_value.funcs[func_key].ready!=false){
							scope.version_value.funcs[func_key].click_log = true;
							grammerSetService.setClickLogOfFunc(scope.grammer_key, scope.version_key, func_key, scope.version_value.funcs[func_key].click_log).then(function(click_value){
								scope.version_value.funcs[func_key].click_log = click_value;
								var funcs_list_not_matched = [];
								var check_number = 0;
								angular.forEach(scope.version_value.funcs, function(func_value, func_key_at_funcs){
									if(func_key!=func_key_at_funcs){
										funcs_list_not_matched.push({name:func_key_at_funcs});
										check_number += 1;
									}
									if(_.size(scope.version_value.funcs)==(check_number+1)){
										var func_index = 0;
										var execute = function(){
											grammerSetService.setClickLogOfFunc(scope.grammer_key, scope.version_key, funcs_list_not_matched[func_index].name, false).then(function(click_value){
												scope.version_value.funcs[funcs_list_not_matched[func_index].name].click_log = click_value;
												func_index += 1;
												if(func_index!=funcs_list_not_matched.length){
													execute();
												}
											});
										};
										execute();
									}
								});	
							});
						}	
						else{
							scope.version_value.funcs[func_key].click_log = false;
							alert('해당 기능은 현재 개발/개발예정 중에 있습니다. :)');
						}
					};

					// Reset Function Section
					scope.resetLogs = function(){
						grammerGetService.getFunc(scope.grammer_key, scope.version_key, scope.current_func_key).then(function(func_get){
							func_get.logs = [];
							grammerSetService.setFunc(scope.grammer_key, scope.version_key, scope.current_func_key, func_get).then(function(func_set){
								
							});
						});
					};

					// Initialize Section
					scope.initialize = function(){
						scope.inform_click = null;
						scope.current_func_key = null;
						var clicked_func = _.findKey(scope.version_value.funcs, {click_log:true});
						if(!clicked_func) scope.inform_click = true;
						else scope.current_func_key = clicked_func;
					};
					scope.initialize();

				},
				replace: true,
				scope: {
					grammer_storage: "=grammerStorage",
					grammer_key: "=grammerKey",
					versions: "=versions",
					version_key: "=versionKey",
					version_value: "=versionValue"
				},
				restrict:"EA",
				templateUrl:$filter('trusted')(chrome.extension.getURL('templates_execute/logview/logviewDir.html'))
			}
		})

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	angular.module('grammer_execute')
		.directive('popupDir', function($rootScope, $q, $filter, $interval, popupService){
			return {
				link: function(scope, element, attrs){

					// Resource Function Section
					// var resource_url = 'http://127.0.0.1:8000/InstaUnfollow/'; // 개발용
	        var resource_url = 'http://eb-grammer-app-dev.ap-northeast-2.elasticbeanstalk.com/InstaUnfollow/'; // 개인용
	        // var resource_url = 'http://ebgrammerapp-changho.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 신창호
	        // var resource_url = 'http://ebgrammerapp-heungbo.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 강흥보
	        // var resource_url = 'http://ebgrammerapp-changdae.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 안창대
	        // var resource_url = 'http://ebgrammerappdoochul.52ksw2uxxt.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 주두철
	        // var resource_url = 'http://ebgrammerapp.cznf3q5vi6.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 박희빈(삼월)
	        // var resource_url = 'http://ebgrammerapp-env-jisu.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 안지수
	        // var resource_url = 'http://ebGrammerApp-dongju-env.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 김동주
	        // var resource_url = 'http://ebGrammerApp-kimcorp-env.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 김기업(단순 기업형)
	        // var resource_url = 'http://ebGrammerApp-super-env.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 송준호 super
	        // var resource_url = 'http://ebGrammerApp-younghwa-env.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 문영화
	        // var resource_url = 'http://eb-grammer-app-dev.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 변동섭
	        // var resource_url = 'http://ebGrammerApp-cover-env.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 커버
	        // var resource_url = 'http://ebGrammerApp-minsun-env.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 강민성
	        // var resource_url = 'http://ebgrammerapp-bibong-env.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 비봉
	        // var resource_url = 'http://ebGrammerApp-dongu-env.ap-northeast-1.elasticbeanstalk.com/InstaUnfollow/'; // 기업용 동우
	        
	        // var resource_url_two = 'http://127.0.0.1:8000/FollowersFollowings/'; // 개발용
	        var resource_url_two = 'http://eb-grammer-app-dev.ap-northeast-2.elasticbeanstalk.com/FollowersFollowings/'; // 개인용
	        // var resource_url_two = 'http://ebgrammerapp-changho.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 신창호
	        // var resource_url_two = 'http://ebgrammerapp-heungbo.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 강흥보
	        // var resource_url_two = 'http://ebgrammerapp-changdae.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 안창대
	        // var resource_url_two = 'http://ebgrammerappdoochul.52ksw2uxxt.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 주두철
	        // var resource_url_two = 'http://ebgrammerapp.cznf3q5vi6.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 박희빈(삼월)
	        // var resource_url_two = 'http://ebgrammerapp-env-jisu.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 안지수
	        // var resource_url_two = 'http://ebGrammerApp-dongju-env.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 김동주
	        // var resource_url_two = 'http://ebGrammerApp-kimcorp-env.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 김기업(단순 기업형)
	        // var resource_url_two = 'http://ebGrammerApp-super-env.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 송준호 super
	        // var resource_url_two = 'http://ebGrammerApp-younghwa-env.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 문영화
	        // var resource_url_two = 'http://eb-grammer-app-dev.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 변동섭
	        // var resource_url_two = 'http://ebGrammerApp-cover-env.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 커버
	        // var resource_url_two = 'http://ebGrammerApp-minsun-env.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 강민성
	        // var resource_url_two = 'http://ebgrammerapp-bibong-env.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 비봉
	        // var resource_url_two = 'http://ebGrammerApp-dongu-env.ap-northeast-1.elasticbeanstalk.com/FollowersFollowings/'; // 기업용 동우

	        // Interval Function Section
	        scope.intervalRequest = function(){
	          return $q(function(resolve, reject){
	            var intervalPromise = $interval(function(){
	              // 이제 instaAccount 모델에서 followers, followings 가져오는 로직을 추가하여야 한다.
	              popupService.sendMessageOnPopupTwo(resource_url_two, scope.values.user_name).then(function(response){
	                if(response&&response.exist&&response.followers&&response.followings){
	                  $interval.cancel(intervalPromise);
	                  scope.values.server_information = '정보 리펙토링/저장 중입니다';
	                  popupService.refactorInformationOnPopup(response.followers, response.followings).then(function(){
	                    $interval.cancel(intervalPromise_first);
	                    if(scope.values.server_information_on) scope.values.server_information_on = false;
	                    $rootScope.$broadcast('useUnfollowNew');
	                  });
	                }
	                else{
	                  // scope.values.server_information_delay_on = false;
	                  // scope.values.server_information = '정보를 가져오는데 실패했습니다 다시 시도해주세요.';
	                }
	              });
	            }, 10000); // 10초에 한번씩
	          });
	        };

	        var intervalPromise_first;
	        // Use Function Section
	        scope.useUnfollowNew = function(){
	          scope.values.server_information_on = true;
	          if(!(scope.values&&scope.values.user_name&&scope.values.password)){
	            scope.values.server_information = '사용자이름과 비밀번호를 입력해주세요.';
	            return;
	          }
	          intervalPromise_first = $interval(function(){
	            scope.values.server_information_time += 1;
	          }, 1000);
	          scope.values.server_information_delay_on = true;
	          scope.values.server_information = '팔로워/팔로잉 리스트를 가져오는 중입니다';
	          popupService.sendMessageOnPopup(resource_url, scope.values.user_name, scope.values.password).then(function(response){
	            if(response.exist){
	            }
	            else{
	              // 사용자이름, 비밀번호가 부합하지 않을 때(제대로 된 정보를 가져오지 않았을 때)
	              scope.values.server_information_delay_on = false;
	              scope.values.server_information = '사용자이름과 비밀번호를 다시 입력해주세요.';
	            }
	          });
	          scope.intervalRequest(); 
	        };

	        scope.useUnfollowPast = function(){
	        	$rootScope.$broadcast('useUnfollowPast');
	        };

					// Initialize Function Section
					scope.initialize = function(){
						scope.text_list = [
							'안녕하세요. 그래머입니다.',
							'계정 사용자 이름과 비밀번호를 입력해주시면',
							'훨씬 빠른 언팔로우 작업이 가능합니다.',
							'입력하신 정보는 오로지 원활한 작업을 위해',
							'프로그램 내에서만 사용이 되며,',
							'그래머는 이를 <span class="t-bo c-bk">절대</span> 수집하지 않습니다.',
							'혹시 사용자이름, 비밀번호를',
							'잘 입력하셨는데 맞지 않다고 나온다면',
							'새로고침을 누르시고 본인임버튼을 클릭해주세요.',
							'하시는 일에 작게나마 도움이 되었으면 좋겠습니다.',
							'감사합니다 : )'
						];

						scope.values = { 
							user_name:null, 
							password:null,
							server_information_on:false,
	            server_information_delay_on:false,
							server_information:'',
	            server_information_time:0
						};

						scope.promises = [];
					};
					scope.initialize();

				},
				replace: true,
				scope:{
					grammer_storage: "=grammerStorage"
				},
				restrict:"EA",
				templateUrl: $filter('trusted')(chrome.extension.getURL('templates_execute/popup/popupDir.html'))
			}
		});

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('arrayService', function($q, $rootScope, stringService){

			this.target_parent;
			this.element_index;

			this.makeArray = function(string, split){
				if(angular.isArray(string)) return string;
				else if(angular.isString(string)) return string.split(split);
				else return [];
			};
			this.hasItems = function(array){
				try{
					if(!angular.isArray(array)) return false;
					return array.length>=1;
				}catch(e){
					return false;
				}
			};
			
			this.getRandom = function(array){
				if(!angular.isArray(array)) {
					return null;
				}
				return array[Math.floor(Math.random()*array.length)];
			};

			// words은 배열로 들어온다.
			// innerOuterHTMLs.list, innerOuterHTML
			// 1. innerOuterHTMLs.list -> 등록해 놓은 목록
			// 2. innerOuterHTML -> 긁어온 element 안의 innerHTML or outerHTML
			// innerOuterHTMLs.list, innerOuterHTML
			this.existWordsInString = function(words, string){
				var self = this;
				return $q(function(resolve, reject){
					if(!self.hasItems(words)){ resolve(false); return; }
					// 아랫줄은 string에서 모든 빈칸을 ""로 바꾼다.
					// \s 는 whitespace를 의미 
					// g 는 global을 의미 
					// 즉, /\s/g란 모든 빈칸을 의미한다.
					string = string.replace(/\s/g,"");
					angular.forEach(words, function(word, word_index){
						word = word.replace(/\s/g,"");
		  			if(word&&stringService.containString1InString2WithoutCapital(word, string)){ 
		  				resolve(word);
		  				return;
		  			}
		  			if(word_index+1==words.length){
		  				resolve(null);
		  				return;
		  			}
		  		});
				});
			};

			this.famoussayings = [
				'명성을 쌓는 것에는 20년이란 세월이 걸리며 명성을 무너뜨리는 것에는 5분도 걸리지 않는다. 그걸 명심한다면 당신의 행동이 달라질 것이다<br/><br/>-워렌버핏',
				'간단함이 훌륭함의 열쇠다<br/><br/>-이소룡',
				'승리하면 조금 배울 수 있고, 패배하면 모든 것을 배울 수 있다<br/><br/>-크리스티 메튜슨',
				'승자는 책임지는 태도로 살며, 패자는 약속을 남발한다<br/><br/>-유태경전',
				'말만 하고 행동하지 않는 사람은 잡초로 가득 찬 정원과 같다<br/><br/>-하우얼',
				'내 자신의 무식을 아는 것은 지식으로의 첫걸음이다<br/><br/>-바이런',
				'가시에 찔리지 않고서는 장미를 모을 수 없다<br/><br/>-핀페이',
				'고통을 거치지 않고 얻은 승리는 영광이 아니다<br/><br/>-나폴레옹',
				'기와 한 장 아껴서 대들보 썩는다<br/><br/>-한국속담',
				'바람이 불지 않으면 노를 저어라<br/><br/>-윈스턴 처칠',
				'강에서 물고기를 보고 탐내는 것보다 돌아가서 그물을 짜는 것이 옳다<br/><br/>-예악지',
				'역경은 사람을 부유하게 하지는 않으나 지혜롭게 한다<br/><br/>-풀러',
				'낭비한 시간에 대한 후회는 더 큰 시간 낭비다<br/><br/>-메이슨 쿨리',
				'들은 것은 잊어버리고, 본 것은 기억하고 직접 해 본 것은 이해한다<br/><br/>-공자',
				'산을 움직이려 하는 이는 작은 돌을 들어내는 일로 시작한다<br/><br/>-공자',
				'앞날을 결정짓고자 하면 옛 것을 공부하라<br/><br/>-공자',
				'아이디어의 좋고 나쁨은 어떻게 실행하느냐에 따라 결정된다<br/><br/>-카를로스 곤',
				'절대 포기하지 마라. 장벽에 부딪히거든, 그것이 절실함을 나에게 물어보는 장치에 불과하다는 것을 잊지 마라<br/><br/>-랜디 포시',
				'현재와 미래는 어떻게든 연결되어 있다.<br/><br/>-스티브 잡스',
				'모든 기능은 유지비용이 든다. 소수의 기능을 가지는 것은 우리가 정말로 신경 쓰는 것에 집중하도록 하고 그것들이 뛰어나도록 만든다<br/><br/>-데이비드 카프',
				'시도해보지 않고는 누구도 자신이 얼마만큼 해낼 수 있는지 알지 못한다.<br/><br/>-푸블릴리우스 시루스',
				'다리를 움직이지 않고는 작은 도랑도 건널 수 없다<br/><br/>-알랭',
				'항상 갈구하라.바보짓을 두려워마라<br/><br/>-스티브 잡스',
				'비장의 무기는 아직 손 안에 있다. 그것은 희망이다<br/><br/>-나폴레옹',
				'성공을 위한 세 가지 열쇠는 이것이다. 첫째는 끈기, 둘째는 끈기, 셋째도 끈기<br/><br/>-이소룡',
				'성공의 커다란 비결은 결코 지치지 않는 인간으로 인생을 살아가는 것이다.<br/><br/>-알버트 슈바이처',
				'나는 그저 나보다 머리가 좋은 사람들을 채용했을 뿐이다<br/><br/>-록펠러',
				'18년동안 아마존을 성공으로 이끈 3가지 큰 전략이 있다. 그것은 고객을 우선 생각하고, 발명하고, 인내하는 것이다<br/><br/>-제프 베조스',
				'가끔은 혁신을 추구하다 실수할 때도 있다. 하지만 빨리 인정하고 다른 혁신을 개선해 나가는 것이 최선이다<br/><br/>-스티브 잡스',
				'휴식은 게으름도, 멈춤도 아니다<br/><br/>-헨리 포드',
				'배우기만 하고 생각하지 않으면 얻는 것이 없고, 생각만 하고 배우지 않으면 위태롭다<br/><br/>-공자',
				'자신의 꿈을 만들어가지 못하면 언젠가 남의 꿈을 이루는데 이용될 것이다<br/><br/>-암바니',
				'성공은 최종적인 게 아니며 실패는 치명적인 게 아니다. 중요한 것은 지속하고자 하는 용기다<br/><br/>-윈스턴 처칠',
				'아무런 위험을 감수하지 않는다면 더 큰 위험을 감수하게 될 것이다<br/><br/>-에리카 종',
				'성공은 수고의 대가라는 것을 기억하라<br/><br/>-소포클레스',
				'실패는 고통스럽다. 그러나 최선을 다하지 못했음을 깨닫는 것은 몇 배 더 고통스럽다<br/><br/>-엔드류 매튜스',
				'품질이란 우연히 만들어지는 것이 아니라, 언제나 지적 노력의 결과이다.<br/><br/>-존 러스킨',
				'성공을 원한다면 많은 것들과 친해져야 한다. 인내심은 당신의 소중한 친구로, 경험은 친절한 상담자로, 신중함은 당신의 형제로, 희망은 늘 곁에서 지켜주는 부모님처럼 친해져야 한다<br/><br/>-J 에디슨',
				'자신이 대중과 똑같아질 때는 잠시 쉬고 고민할 때이다<br/><br/>-마크 트웨인',
				'성공은 영원하지 않고, 실패는 치명적이지 않다<br/><br/>-마이크 디트카',
				'정신 이상이란 계속 같은 행동을 되풀이하면서 다른 결과를 기대하는 것이다.<br/><br/>-아인슈타인',
				'우리가 해야할 일은 끊임없이 호기심을 갖고 새로운 생각을 시험해보고 새로운 인상을 받는 것이다<br/><br/>-월터 페이터',
				'빛을 보게 만들 수 없다면, 열이라도 느끼게 해라<br/><br/>-로널드 레이건',
				'아무 하는 일 없이 시간을 허비하지 않겠다고 맹세하라.우리가 항상 뭔가를 한다면 놀라우리만치 많은 일을 해낼 수 있다<br/><br/>-토마스 제퍼슨',
				'계속 노력해야 한다. 우리는 모두 성장하고 있다. 지름길은 없다. 방문객을 확보하려면 시간을 들여야 한다<br/><br/>-존 그루버',
				'다른 사람들이 할 수 있거나 할 일을 하지 말고, 다른 이들이 할 수 없고 하지 않을 일들을 해라<br/><br/>-아멜리아 에어하트',
				'패배는 최악의 실패가 아니다. 시도를 하지 않는 것이 진짜 실패다<br/><br/>-조지 우드베리',
				'실패로부터 성공을 이끌어내라.좌절과 실패는 성공에 이르는 가장 확실한 디딤돌이다<br/><br/>-데일 카네기',
				'경험을 현명하게 사용한다면, 어떤 일도 시간 낭비는 아니다<br/><br/>-오귀스트 르네 로댕',
				'계산된 위험을 감수해라. 이것은 단순한 무모함과는 완전히 다른 것이다.<br/><br/>-조지 스미스 패튼',
				'성공이란 열정을 잃지 않고 실패를 거듭할 수 있는 능력이다<br/><br/>-윈스턴 처칠',
				'경쟁우위가 없다면, 경쟁하지 마라<br/><br/>-잭 웰치',
				'실수를 해보지 않은 사람은 한번도 새로운 일을 시도해보지 않았던 사람이다.<br/><br/>-아인슈타인',
				'한 번 실패한 것이, 앞으로의 모든 일에 실패할 것이라고 의미하지는 않는다.<br/><br/>-마릴린 먼로',
				'사업의 비결은 다른 사람들은 아무도 모르고 있는 무엇인가를 아는 것이다.<br/><br/>-아리스토틀 오나시스',
				'성공에 대한 비밀은 따로 존재하지 않는다. 그것은 바로 준비, 근면성, 실패로부터의 배움이다<br/><br/>-콜린 파월',
				'비전이 있어야 전략이 생긴다<br/><br/>-제인스 쿠퍼',
				'리스크를 줄이는 것이 이익을 추구하는 일보다 더 중요하다<br/><br/>-제임스 핑크스',
				'비즈니스에서 중요한 것은 규모가 아니다. 자본금 50만 달러의 회사가 5백만 달러의 다른 회사보다 더 많은 이익을 올리는 경우가 있다. 효율이 따르지 않는다면 규모가 핸디캡이 된다<br/><br/>-허버트 카슨',
				'최악의 시나리오를 대비하지 않는 사업 계획이 가장 나쁜 계획이다<br/><br/>-슘페터',
				'아무리 힘들지라도 최선으로 여겨지는 길을 선택하라<br/><br/>-피타고라스',
				'새로운 경쟁우위 전략은 지금까지의 원칙과 디자인을 지속적으로 개선해 나가는 것이다<br/><br/>-다이앤 브래디',
				'제조, 회계, 배송 같은 일들은 밖에 하청주고 이익을 올리는 일에 집중하라.<br/><br/>-제프리 무어',
				'부자들은 보통 무엇인가 가치 있는 것을 창조하여 무엇인가 사회에서 필요한 것을 만들어 낸다. 그 부산물로 부를 창출하는 것이다<br/><br/>-게리 헥터',
				'지난 실수를 잊어라. 실패도 잊어라. 자신이 할 것을 빼놓고 전부 잊어라. 그리고 그 할 것을 실행하라<br/><br/>-윌리엄 듀런트',
				'중요한 질문은 “당신이 얼마나 바쁜가?”가 아니다. “당신이 무엇에 바쁜가”가 핵심 질문이다<br/><br/>-오프라 윈프리',
				'나는 실패한 것이 아니었다. 단지 성공하지 않는 10,000가지 방법을 발견했을 뿐이다<br/><br/>-에디슨',
				'가장 중요한 것은 기회를 잡는 것을 두려워 않는 것이다. 기억하라, 가장 큰 실패는 시도하지 않는 것이다<br/><br/>-데비 필즈',
				'놀라운 아이디어는 넘쳐난다. 단지 부족한 점은 그것을 실행하는 의지이다<br/><br/>-세스 고딘',
				'가장 중요한 것은 당장 자리에서 일어나서 무엇인가를 하는 것이다<br/><br/>-놀란 부쉬넬',
				'절대적인 목표는 만족하는 고객으로부터 돈을 받는 것이다<br/><br/>-존 이간',
				'팀원들을 두 판의 피자로 만족시킬 수 없다면, 팀이 너무 큰 것이다<br/><br/>-제프 베조스',
				'몇몇 사람들을 정말로 행복하게 만드는 것이 많은 사람들을 조금 행복하게 만드는 것보다 낫다<br/><br/>-폴 그레이엄',
				'아이디어가 전부는 아니다. 아이디어를 실현하는 것이 더 중요하다<br/><br/>-스콧 벨스키',
				'작은 규모로 머물러 있는 것이 나쁜 것은 아니다. 작은 팀으로도 얼마든지 큰 것들을 할 수 있다<br/><br/>-제이슨 프라이드',
				'실패를 걱정하지 마라. 한 번만 옳기만 하면 된다<br/><br/>-드류 휴스턴',
				'무엇인가 만들고 싶은 게 있고, 기술자가 아직 없다면, 아이디어를 실현할 가장 가까운 방법을 찾아라<br/><br/>-데니스 크롤리',
				'많이 실패해라. 그래서 빨리 성공할 수 있게 해라<br/><br/>-톰 켈리',
				'가능한 자기자본만으로 회사를 운영하라<br/><br/>-개릿 캠프',
				'데이터가 감정을 이긴다<br/><br/>-션 래드',
				'아이디어를 발전시키는 데 100명 단위의 회사를 가질 필요는 없다<br/><br/>-래리 페이지',
				'필요하지 않다면, 투자 받는 것에 대해 걱정하지 마라. 요즘은 예전보다 사업을 더 싸게 시작할 수 있다<br/><br/>-노아 에버렛',
				'근면함이 행운의 어머니이다<br/><br/>-벤자민 프랭클린',
				'사람들은 자주 엉뚱한 것에 열심이다. 열심히 하는 것보다 더 중요한 것은 올바른 것에 노력을 기울이는 것이다<br/><br/>-카트리나 페이크',
				'이론은 멋지지만, 실행에 옮기기 전까지는 쓸모 없는 것이다<br/><br/>-제임스 페니',
				'가장 불만스러워 하는 고객이 배움의 가장 좋은 원천이다<br/><br/>-빌 게이츠',
				'타이밍, 인내, 10년간의 노력이 자신을 갑작스런 성공으로 보이게 할 것이다.<br/><br/>-비즈 스톤',
				'실수를 하고 있지 않다면, 자신이 결정을 내리고 있지 않는 것이다<br/><br/>-캐더린 쿡',
				'백만가지 아이디어를 가질 수 있겠지만, 그것을 실현하기 전까지는 쓸모 없는 것일 뿐이다<br/><br/>-로렌 아마란티',
				'경쟁자들에 대해 잊고, 자신의 고객에게 집중해라<br/><br/>-잭 마',
				'스타트업을 경영하는 것은 얼굴에 지속적인 펀치를 맞는 것과 같다. 하지만 대기업에서 일하는 것은 물고문 당하는 것과 같다<br/><br/>-폴 그레이엄',
				'안 좋은 직원을 고용하는 것은 뛰어난 인재를 놓친 것보다 대가가 크다<br/><br/>-조 크라우스',
				'잘못이 아닌, 해결책을 찾아라<br/><br/>-포드',
				'필요가 발명의 어머니라면, 불만은 진보의 어머니다<br/><br/>-록펠러',
				'내 첫 번째 회사는 엄청나게 크게 실패했다. 두 번째 회사는 실패했지만, 첫 번째보다 덜 실패했다. 세 번째 회사는 적절하게 실패했고, 견딜 만 했다 네 번째 회사는 거의 실패하지 않았고, 크게 만족하지는 않았지만 그런대로 괜찮았다. 그 다음 다섯 번째 회사는 바로 Paypal이었다<br/><br/>-맥스 레브친',
				'중요한 것을 모두 측정하라<br/><br/>-밥 파슨스',
				'포기해야겠다는 생각이 들 때야말로 성공에 가까워진 때이다<br/><br/>-밥 파슨스',
				'편안한 상황에서 벗어나라<br/><br/>-밥 파슨스',
				'만일 날마다 거절당하지 않는다면, 자신의 목표가 충분히 야심차지 않은 것이다<br/><br/>-크리스 딕슨'
			];
		});

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('booleanService', function(stringService){
			this.makeBoolean = function(boolean){
				if(boolean==true){return true;}
				else if(boolean==false){return false;}
				else if(stringService.containString1InString2WithoutCapital(boolean, 'true')){return true;}
				else if(stringService.containString1InString2WithoutCapital(boolean, 'false')){return false;}
				else return false;
			};
			this.checkBoolean = function(boolean){
				if(boolean==true||boolean==false) { return true; }
				else { return false; }
			};
		});

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('cookieService', function($rootScope, $q){

			this.createCookie = function(name,value,days) {
				if (days) {
					var date = new Date();
					date.setTime(date.getTime()+(days*24*60*60*1000));
					var expires = "; expires="+date.toGMTString();
				}
				else var expires = "";
				document.cookie = name+"="+value+expires+"; path=/";
			};

			this.readCookie = function(name) {
				var nameEQ = name + "=";
				var ca = document.cookie.split(';');
				for(var i=0;i < ca.length;i++) {
					var c = ca[i];
					while (c.charAt(0)==' ') c = c.substring(1,c.length);
					if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
				}
				return null;
			};

			this.readCookies = function(name) {
				return $q(function(resolve, reject){
					var name_split = name + "=";
					var cookies = document.cookie.split(';');
					var values = [];
					angular.forEach(cookies, function(cookie, cookie_index){
						if(cookie.indexOf(name_split)==0){
							values.push(cookie.split(name_split)[1]);
						}
						if(cookie_index==cookies.length-1){
							resolve(values);
						}
					});
				});
			};

			// cookie를 다 긁어 온 뒤에 csrftoken 이 포함된 cookie들을 가져온 뒤, 해당 csrftoken 값을 모아서 반환(resolve) 한다. 
			this.readCsrftokens = function() {
				return $q(function(resolve, reject){
					var cookies = document.cookie.split(';');
					var values = [];
					angular.forEach(cookies, function(cookie, cookie_index){
						// 해당 cookie에 'csrftoken=' 가 포함되어 있을 때
						if(cookie.indexOf('csrftoken=')!==-1){
							values.push(cookie.split('csrftoken=')[1]);
						}
						if(cookie_index==cookies.length-1){
							resolve(values);
						}
					});
				});
			};

			this.eraseCookie = function(name) {
				createCookie(name,"",-1);
			}
		});


/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('htmlService', function($rootScope, $q, $timeout, $filter, arrayService, stringService, numberService, getSettingService){

			this.username;

			// Check Function Section
			this.checkContainingOfCorresponding = function(element, corresponding){
				var self = this;
				return $q(function(resolve, reject){
					var property_value;
					property_value = element.getAttribute(corresponding.criteria);
					if(corresponding.criteria&&corresponding.contain&&!stringService.containString1InString2WithoutCapital(corresponding.contain, property_value)){ reject(); }
					else{ resolve(); }
				});
			};

			// Element Function Section
			this.getElementsWithHref = function(elements, href, not_href){
				var self = this;
				return $q(function(resolve, reject){
					if(!(_.size(href)||_.size(not_href))){ resolve(elements); return; }
					var elements_href = [];
					angular.forEach(elements, function(element, element_index){
						var push_boolean = true;
						if(_.size(href)&&!stringService.containString1InString2WithoutCapital(href, element.href)) push_boolean = false;
						if(_.size(not_href)&&stringService.containString1InString2WithoutCapital(not_href, element.href)) push_boolean = false;
						if(push_boolean) elements_href.push(element);
						if(element_index+1>=elements.length) resolve(elements_href);
					});
				});
			};

			this.getElementWithCorrespondings = function(element, correspondings, condition){
				var self = this;
				return $q(function(resolve, reject){
					if(condition=='AND'){
						var promises = [];
						angular.forEach(correspondings, function(corresponding, corresponding_index){
							var promise = self.checkContainingOfCorresponding(element, corresponding);
							promises.push(promise);
							if(corresponding_index+1>=correspondings.length){
								$q.all(promises).then( function(){ resolve(element); return; }, function(){ reject(); return; } )
							}
						});
					}
					else if(condition=='OR'){
						var corresponding_index = 0;
						var selfCarryOut = function(){
							self.checkContainingOfCorresponding(element, correspondings[corresponding_index]).then(function(){
								resolve(element);
							}, function(){
								corresponding_index += 1;
								if(corresponding_index>=correspondings.length){ reject(); return; }
								selfCarryOut();
							});
						};
						selfCarryOut();				
					}
				});
			};

			this.getElementsWithCorrespondings = function(elements, correspondings){
				var self = this;
				return $q(function(resolve, reject){
					if(!(correspondings&&correspondings.value&&_.size(correspondings.value)>=1)){ resolve(elements); return; }
					var elements_corresponding = [];
					var element_index = 0;
					var selfCarryOut = function(){
						self.getElementWithCorrespondings(elements[element_index], correspondings.value, correspondings.condition).then(function(element){
							elements_corresponding.push(element);
							if(element_index+1>=_.size(elements)){
								resolve(elements_corresponding); return;
							}
							element_index += 1;
							selfCarryOut();
						}, function(){ 
							if(element_index+1>=_.size(elements)){
								resolve(elements_corresponding); return;
							}
							element_index += 1;
							selfCarryOut();
						});
					};
					selfCarryOut();
				});
			};

			// elements[element_index], innerOuterHTMLs
			this.getElementWithInnerOuterHTMLs = function(element, innerOuterHTMLs){
				var self = this;
				return $q(function(resolve, reject){
					if(!(_.size(innerOuterHTMLs.list.value)>=1||_.size(innerOuterHTMLs.list)>=1)){ resolve(element); return; }
					var innerOuterHTML;
					if(innerOuterHTMLs.type=='OUTERHTML'){ innerOuterHTML = element.outerHTML; }
					else{ innerOuterHTML = element.innerHTML; }
					if(innerOuterHTMLs.list.value){
						// innerOuterHTMLs.list.value가 배열의 형태일 때
						if(angular.isArray(innerOuterHTMLs.list.value)){
							arrayService.existWordsInString(innerOuterHTMLs.list.value, innerOuterHTML).then(function(word){
								if(word) resolve(word); 
								else reject();
							}, function(){
								reject();
							});
						}
						// innerOuterHTMLs.list.value가 배열의 형태가 아닐 때(문자열의 형태일 때)
						else {
							if(stringService.containString1InString2WithoutCapital(innerOuterHTMLs.list.value, innerOuterHTML)) resolve(innerOuterHTMLs.list.value);
							else reject();
						}
					}
					else {
						arrayService.existWordsInString(innerOuterHTMLs.list, innerOuterHTML).then(function(word){
							if(word) resolve(word);
							else reject();
						}, function(){
							reject();
						});
					}
				});
			};

			this.getElementsWithInnerOuterHTMLsSub = function(elements, innerOuterHTMLs){
				var self = this;
				return $q(function(resolve, reject){
					var element_index = 0;
					var elements_match = [];
					var execute = function(){
						self.getElementWithInnerOuterHTMLs(elements[element_index], innerOuterHTMLs).then(function(word){
							if(word) elements_match.push(elements[element_index]);
							element_index += 1;
							if(element_index>=elements.length) {
								resolve(elements_match);  
							}
							else execute();
						}, function(){
							element_index += 1;
							if(element_index>=elements.length) {
								resolve(elements_match); 
							}
							else execute();
						});
					};
					execute();
				});
			};

			// Element Function Section
			// elements, html.innerOuterHTMLs
			this.getElementsWithInnerOuterHTMLs = function(elements, innerOuterHTMLs){
				var self = this;
				return $q(function(resolve, reject){
					if(!(elements&&elements.length>=1)){ resolve(elements); return; }
					if(!(innerOuterHTMLs&&innerOuterHTMLs.list)){ resolve(elements); return; }
					else if(innerOuterHTMLs.list.setting_key){ 
						innerOuterHTMLs.list.value = getSettingService.getSetting(innerOuterHTMLs.list.setting_key); 
						self.getElementsWithInnerOuterHTMLsSub(elements, innerOuterHTMLs).then(function(elements_match){
							resolve(elements_match);
						});
					}
					else if(innerOuterHTMLs.list.html_value){
						// 배열일 때
						if(angular.isArray(innerOuterHTMLs.list.html_value)){
							var html_value_index = 0;
							var selfCarryOut = function(){
								self.getTextOfHtmlObjectWithSplit(innerOuterHTMLs.list.html_value[html_value_index], innerOuterHTMLs.list.html_value[html_value_index].split).then(function(identification){
									innerOuterHTMLs.list.value = identification;
									self.getElementsWithInnerOuterHTMLsSub(elements, innerOuterHTMLs).then(function(elements_match){
										resolve(elements_match);
									});
								}, function(){
									html_value_index += 1;
									if(html_value_index>=innerOuterHTMLs.list.html_value.length){ reject(); return; }
									selfCarryOut();
								});
							};
							selfCarryOut();
						}
						else {
							self.getTextOfHtmlObjectWithSplit(innerOuterHTMLs.list.html_value, innerOuterHTMLs.list.html_value.split).then(function(identification){
								innerOuterHTMLs.list.value = identification;
								self.getElementsWithInnerOuterHTMLsSub(elements, innerOuterHTMLs).then(function(elements_match){
									resolve(elements_match);
								});
							});
						}
					}
					else {
						self.getElementsWithInnerOuterHTMLsSub(elements, innerOuterHTMLs).then(function(elements_match){
							resolve(elements_match);
						});
					}
				});
			};

			this.getFrameIdFromFrameIdList = function(frame_id_list){
				var self = this;
				return(function(resolve, reject){
					var frame_id_value;
					angular.forEach(frame_id_list, function(frame_id_list_element, frame_id_list_element_index){
						if(frame_id_list_element.basic) frame_id_value += frame_id_list_element.basic;
						else if(frame_id_list_element.status) frame_id += getSettingService.getStatus(frame_id_list_element.status);
						if(frame_id_list_element_index+1>=frame_id_list.length) resolve(frame_id_value);
					});
				});
			};

			this.getElementsWithSelectorOnFrameId = function(frame_id, selector){
				return $q(function(resolve, reject){
					var elements;
					if(!window.frames[frame_id]&&parent.frames[frame_id]) 
						elements = parent.frames[frame_id].document.querySelectorAll(selector); 
					else if(window.frames[frame_id]&&!parent.frames[frame_id]) 
						elements = window.frames[frame_id].document.querySelectorAll(selector);
					else if(window.frames[frame_id]&&parent.frames[frame_id])
						elements = window.frames[frame_id].document.querySelectorAll(selector);
					else 
						elements = []; 
					resolve(elements);
				});
			};

			this.getFramesWithFrameId = function(frame_id, frame_id_index){
				return $q(function(resolve, reject){
					// frame_id_index가 0이 아닐때의 로직
					if(frame_id_index!==0){ working_frame = working_frame.frames[frame_id]; resolve(); return; }
					// frame_id_index가 0일 때만 구동되는 로직
					if(!window.frames[frame_id]&&parent.frames[frame_id]) { working_frame = parent.frames[frame_id]; }
					else if(window.frames[frame_id]&&!parent.frames[frame_id]) { working_frame = window.frames[frame_id]; }
					else if(window.frames[frame_id]&&parent.frames[frame_id]) { working_frame = window.frames[frame_id]; }
					// 유일하게 리젝나는 순간
					else { reject(); return; }
					// 위에서 만들어진 result_frame을 resolve하는 순간.
					// but, window.frames[frame_id] 또는 parent.frames[frame_id] 같은 frame들을 resolve시킬 수가 없기 때문에 다른 전역 변수에 지정을 해서 작업을 해야한다.
					resolve();
				});
			};

			var working_frame;
			this.getFramesWithFrameIdSuccession = function(frame_id_succession){
				var self = this;
				return $q(function(resolve, reject){
					working_frame = null;
					var frame_id_index = 0;
					var selfCarryOut = function(){
						self.getFramesWithFrameId(frame_id_succession[frame_id_index], frame_id_index).then(function(){
							frame_id_index += 1;
							if(frame_id_index>=frame_id_succession.length) resolve();
							else selfCarryOut();
						}, function(){
							reject();
						});
					};
					selfCarryOut();
				});
			};

			this.getElementsWithSelector = function(selector, parent_element, frame_id){
				var self = this;
				return $q(function(resolve, reject){
					var elements;
					// parent_element가 없을 때
					if(!(angular.isDefined(parent_element)&&parent_element)){ 
						if(angular.isDefined(frame_id)){
							if(angular.isString(frame_id)){
								self.getElementsWithSelectorOnFrameId(frame_id, selector).then(function(elements){
									resolve(elements);
								});
							}
							else if(angular.isObject(frame_id)&&angular.isArray(frame_id.list)){
								// 1. frame_id.list를 가지고 frame_id.value 를 제작
								// 2. frame_id.value를 가지고 셋팅
								self.getFrameIdFromFrameIdList(frame_id.list).then(function(frame_id_value){
									self.getElementsWithSelectorOnFrameId(frame_id_value, selector).then(function(elements){
										resolve(elements);
									});
								});
							}
							else if(angular.isObject(frame_id)&&angular.isArray(frame_id.succession)&&_.isNumber(frame_id.value)){
								// self.getFramesWithFrameIdSuccession가 끝났을 때 타겟팅된 frame을 working_frame이라는 변수에 저장해 놓았다.
								self.getFramesWithFrameIdSuccession(frame_id.succession).then(function(){
								 	// document.domain = ''





									// 1. background.js로 Naver blog의 타겟팅 된 Frame에 addEventListener가 포함된 script를 삽입하는 로직을 붙인다.
									self.sendMessageForGettingBlogFrame(frame_id.value);
									// 2. 해당 프레임(working_frame)의 document를 가져오기 위해 작업할 프레임에 postMessage를 보낸다.  
									working_frame.postMessage('getDocumentOfWorkingFrame', '*');
									// 3. 'getDocumentOfWorkingFrame' 신호를 받은 해당 프레임(working_frame)에 있는 addEventListenerOnNaverBlog.js에서 보낸 맞신호를 받는
									//    window.addEventListener(이벤트 리스너)를 추가한다.
									$rootScope.$on('DepartureOfDocumentForWorkingFrame', function(event, document){
										elements = document.querySelectorAll(selector); resolve(elements);
									});
								}, function(){
									reject();
								});
							}
						}
						else { elements = document.querySelectorAll(selector); resolve(elements); }
					}
					// parent_element가 있을 때
					else{ elements = parent_element.querySelectorAll(selector); resolve(elements); }
				});
			};

			// getElementsOfParentsElement에서는 selector를 얻은 뒤에 그것을 가지고
			// getElementsWithSelector를 호출한다.
			this.getElementsOfParentElement = function(html){
				var self = this;
				return $q(function(resolve, reject){
					self.getSelector(html).then(function(selector){
						var elements;
						// parent_html 있을 때
						if(html.parent_html){
							self.getElements(html.parent_html).then(function(parent_elements){
								if(!html.parent_html.index) arrayService.target_parent = parent_elements[0];
								else arrayService.target_parent = parent_elements[html.parent_html.index];
								self.getElementsWithSelector(selector, arrayService.target_parent, html.frame_id).then(function(elements){
									if(!(elements&&elements.length>=1)){ reject(); return; }
									resolve(elements); return;
								}, function(){
									reject();
								});
							}, function(){
								self.getElementsWithSelector(selector, null, html.frame_id).then(function(elements){
									if(!(elements&&elements.length>=1)){ reject(); return; }
									resolve(elements); return;
								}, function(){
									reject();
								});
							});
						}	
						// parent_html 없을 때
						else{
							// parent_element 있을 때
							if(html.parent_element) {
								self.getElementsWithSelector(selector, html.parent_element, html.frame_id).then(function(elements){
									if(!(elements&&elements.length>=1)){ reject(); return; }
									resolve(elements); return;
								}, function(){
									reject();
								});
							}
							// parent_element 없을 때
							else {
								self.getElementsWithSelector(selector, null, html.frame_id).then(function(elements){
									if(!(elements&&elements.length>=1)){ reject(); return; }
									resolve(elements); return;
								}, function(){
									reject();
								});
							}
						}
					}, function(){
						reject();
					});
				});
			};

			this.getElementsSub = function(html){
				var self = this;
				return $q(function(resolve, reject){
					// 일단 부모 element로 접근한다.
					self.getElementsOfParentElement(html).then(function(elements){
						self.getElementsWithHref(elements, html.href, html.not_href).then(function(elements){
							self.getElementsWithCorrespondings(elements, html.correspondings).then(function(elements){
								self.getElementsWithInnerOuterHTMLs(elements, html.innerOuterHTMLs).then(function(elements){
									if(elements&&elements.length>=1){ resolve(elements); }
									else{ reject(); }
								}, function(){ reject(); });
							}, function(){ reject(); });
						}, function(){ reject(); });
					}, function(){ reject(); });
				});
			};

			// 해당 elements를 get하는 함수
			this.getElements = function(html){
				var self = this;
				return $q(function(resolve, reject){
					// 1. html이 배열 형식일 때
					if(angular.isArray(html)){
						var html_index = 0;
						var selfCarryOut = function(){
							self.getElementsSub(html[html_index]).then(function(elements){
								resolve(elements);
							}, function(){
								html_index += 1;
								if(html_index>=_.size(html)) {
									reject();
								}
								else selfCarryOut();
							});
						};
						selfCarryOut();
					}
					// 2. html이 배열이 아닌 객체 형식일 때
					else{
						self.getElementsSub(html).then(function(elements){
							resolve(elements);
						}, function(){
							reject();
						});
					}
				});
			};

			// getElement를 하려면 getElements를 해야 한다.
			// option.htmls[html_index].html
			this.getElement = function(html, random, index){
				var self = this;
				return $q(function(resolve, reject){
					self.getElements(html).then(function(elements){
						if(!(elements.length>=1)){ reject(); return; }
						var element;
						if(random){
						  element = elements[Math.floor(Math.random()*elements.length)]; 
						}
						else if(html.index_range){
							element = elements[Math.floor(Math.random()*html.index_range)];
						}
						else if(index){ 
							element = elements[index]; 
						}
						else if(html.decent_index){
							element = elements[html.decent_index];
						}
						else if(html.status_index){
							var index_wanted = getSettingService.getStatus(html.status_index);
							index_wanted = Number(index_wanted);
							element = elements[index_wanted];
						}
						else{ element = elements[0]; }
						if(element) resolve(element);
						else reject();
					}, function(){ reject(); });
				});
			};

			// Selector Function Section
			this.getSelector = function(html){
				var self = this;
				return $q(function(resolve, reject){
					if(!html){ reject(); return; }
					var selector = '';
					if(html.tag) selector += html.tag;
					if(html&&html.classes&&_.size(html.classes.list)>=1){
						selector += '.'+html.classes.list.join('.');
					}
					if(html&&html.properties&&_.size(html.properties.list)>=1){
						selector += '['+html.properties.list.join('][')+']';
					}
					if(html&&html.not_classes&&_.size(html.not_classes.list)>=1){
						selector += ':not(.'+html.not_classes.list.join('):not(.')+')';
					}			
					if(html&&html.not_properties&&_.size(html.not_properties.list)>=1){
						selector += ':not(['+html.not_properties.list.join(']):not([')+'])';
					}
					resolve(selector);
				});
			};

			// Text Function Section
			this.getTextOfElementWithSplit = function(element, split){
				var self = this;
				// text 정하는 부분
				var text = '';
				if(split.attr){
					text = element.getAttribute(split.attr);
				}
				if(angular.isDefined(split)&&split.splice_kakao){
					text = text.replace(".", "/");
				}
				else if(split.html){
					if(split.html=='outerHTML') text = element.outerHTML;
					else text = element.innerHTML;
				}
				// 생성된 text 안에 params안의 어떤 param(Array)과 부합되는지 체크 하고 부합하는 param으로 작업한다.
				if(split.params&&_.size(split.params)>=1) {
					text = stringService.getSplit(text, split.params[0], split.params[1]);
				}
				if(_.size(text)>=1) text = text.replace(/\s/g,"");
				text = text.replace(/,/g,"");
				if(split.type=='NUMBER') text = numberService.makeNumber(text);
				return text;
			};

			this.getTextOfHtmlObjectWithSplit = function(html, split, random){
				var self = this;
				return $q(function(resolve, reject){
					// html이 Array가 아닌 Object인 경우
					if(!angular.isArray(html)){
						self.getElement(html, random).then(function(element){
							var text = self.getTextOfElementWithSplit(element, split);
							if(split.type=='NUMBER') text = numberService.makeNumber(text);
							resolve(text);
						}, function(){ reject(); });
					}
					// html이 Array인 경우
					else{
						// 재귀함수와 비동기함수
						var html_index = 0;
						var selfCarryOut = function(){
							self.getElement(html[html_index], random).then(function(element){
								var text = self.getTextOfElementWithSplit(element, html[html_index].split);
								if(html[html_index].split.type=='NUMBER') text = numberService.makeNumber(text);
								resolve(text);
							}, function(){
								html_index += 1;
								if(html_index>=html.length){ reject(); return; }
								else{ selfCarryOut(); }
							});
						};
						selfCarryOut();
					}
				});
			};

			this.getTextsOfHtmlObjectWithSplit = function(html, split){
				var self = this;
				return $q(function(resolve, reject){
					self.getElements(html).then(function(elements){
						var texts = [];
						if(elements.length==0) resolve(texts);
						angular.forEach(elements, function(element, element_index){
							var text;
							text = self.getTextOfElementWithSplit(element, split);
							texts.push(text);
							if(element_index+1>=elements.length){ resolve(texts); }
						});
					}, function(){ reject(); });
				});
			};

			this.getHTMLOfElement = function(element, option){
				var self = this;
				return $q(function(resolve, reject){
					var html_text;
					if(option.type=='innerHTML') html_text = element.innerHTML;
					else html_text = element.outerHTML;
					if(!(html_text&&html_text.length>=1)){ reject(); return; }
					html_text = html_text.split(option.params[0])[1];
					if(!(html_text&&html_text.length>=1)){ reject(); return; }
					html_text = html_text.split(option.params[1])[0];
					if(!(html_text&&html_text.length>=1)){ reject(); return; }
					html_text = html_text.replace(/'/g, "");
					html_text = html_text.replace(/&amp;/g, '&');
					if(!(html_text&&html_text.length>=1)){ reject(); return; }
					if(_.size(html_text)&&_.size(option.url.basic)&&!stringService.containString1InString2WithoutCapital(option.url.basic, html_text)){
						reject(); return;
					}
					resolve(html_text);
				});
			};


			// Send Function Section
			this.sendMessageForGettingBlogFrame = function(frame_id){
				var self = this;
				return $q(function(resolve, reject){
					chrome.runtime.sendMessage({
						action:'injectScriptOnNaverBlog',
						frame_id:frame_id
					}, function(response){
						resolve(response);
					});
				});
			};

		});

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('numberService', function($rootScope){
			// Get Function Section
			this.getRandomOfNumber = function(number, percentage){
				// 들어오는 number가 string형식일 수도 있으므로 자료형을 number로 바꿔준다.
				number = Number(number);
				if(!(angular.isNumber(number)&&number>=1)) return 1; 
				if(Math.random()<0.5) return Math.floor(number + Math.random()*number*percentage*0.01);
				else return Math.floor(number - Math.random()*number*percentage*0.01);
			};

			this.getRandomNumberInRange = function(range){
				range = Number(range);
				return Math.floor(Math.random()*range);
			};

			this.count = 1;
			this.getRandomOfFloatNumber = function(count){
				var self = this;
				count = Number(count);
				self.count += 1;
				if(self.count%3==0) return 0.1;
				else if(self.count%3==1) return 0.3;
				else if(self.count%3==2) return 0.5;
			};

			this.getRandomIndexOfArray = function(array){
				return Math.floor(Math.random()*array.length);
			};

			// Is Function Section
			this.isPositive = function(number){
				if(angular.isNumber(number)&&number>0) return true;
				else return false;
			};

			this.isSame = function(number1, number2){
				return Number(number1)==Number(number2);
			};
			
			// Make Function Section
			this.makeNumber = function(number){
				if(angular.isString(number)){
					number = number.replace(/\s/g, '');
					number = number.replace(/,/g, '');
				}
				if(angular.isString(number)&&number.indexOf('k')!=-1){
					number = Math.floor(Number(number.split('k')[0]))*1000;
				}
				else if(angular.isString(number)&&number.indexOf('m')!=-1){
					number = Math.floor(Number(number.split('m')[0]))*1000000;
				}
				else{
					number = Math.floor(Number(number));
				}
				if(!(angular.isNumber(number)&&number>=1)) return 0; 
				return number;
			};

			// Set Function Section
			this.setNumberInRange = function(number, range1, range2){
				var self = this;
				number = self.makeNumber(number);
				if(range1&&number<range1){
					range1 = self.makeNumber(range1);
					number += range1;
				}
				if(range2&&number>range2){
					range2 = self.makeNumber(range2);
					number = number%range2;
				}
				if(range1&&number<range1){
					range1 = self.makeNumber(range1);
					number += range1;
				}
				return number;
			};
		});

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('stringService', function($rootScope){
			// Check Function Section
			this.checkString = function(string){
				if(angular.isString(string)) return true;
				return false;
			};
			this.checkStringLength = function(string){
				var self = this;
				if(angular.isString(string)&&string.length>=1) return true;
				return false;
			};
			// Compare Function Section
			this.compareWithoutCapital = function(string1, string2){
				if(this.getLowercaseOfString(string1)==this.getLowercaseOfString(string2)) return true;
				else return false;
			};
			// Contain Function Section
			this.containString1InString2WithoutCapital = function(string1, string2){
				if(string1&&string2&&this.getLowercaseOfString(string2).indexOf(this.getLowercaseOfString(string1))!==-1){ return true;}
				else{ return false;}
			};
			// Get Function Section
			this.getUppercaseOfString = function(string){
				return angular.uppercase(string);
			};
			this.getLowercaseOfString = function(string){
				return angular.lowercase(string);
			};
			this.getStringWithDefalut = function(string, default_string){
				if(this.checkStringLength(string)) return string;
				else return default_string;
			};
			// Make Function Section
			this.makeString = function(string){
				if(!string) return '';
				return String(string);
			};

			this.getSplit = function(string, split1, split2){
				var self = this;
				if(!self.checkStringLength(string)) return '';
				if((split1&&string.indexOf(split1)==-1)&&(split2&&string.indexOf(split2)==-1)) return null;
				if(self.checkStringLength(string)&&split1&&self.checkStringLength(split1)&&(string.indexOf(split1)!=-1)) string = string.split(split1)[1];
				if(self.checkStringLength(string)&&split2&&self.checkStringLength(split2)&&(string.indexOf(split2)!=-1)) string = string.split(split2)[0];
				if(!(string&&string.length>=1)) return null;
				string = string.replace(/\s/g,"");
				return string;
			};

		});

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('timeoutService', function($rootScope, $timeout, $q){
			this.delayPromise = function(delay){
				return $q(function(resolve, reject){
					if(delay&&angular.isNumber(delay)){
						// delay가 원래 의미하는게 때문에 1000을 곱해준다.(second)
						$timeout(function(){ resolve(); }, delay*1000);
					}
					else{ resolve(); }
				});
			};
		});

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('urlService', function($rootScope, $q, $filter, arrayService, htmlService, numberService, getSettingService){
			
			// Initialize Section
			this.object_index;

			// Convert Function Section
			this.convertWithType = function(value, type){
				var self = this;
				this.setUrl();
				if(type=='NUMBER'){
					if(angular.isNumber(parseInt(value))&&parseInt(value)>=1){
						return parseInt(value);
					}
					else {
						return 0;
					}
				}
				if(type=='STRING'){
					return String(value);
				}
			};

			// Check Function Section
			this.checkLogsOfFunc = function(func_key){
				var self = this;
				return $q(function(resolve, reject){
					var func;
					func = getSettingService.getFunc(func_key);
					if(func&&func.logs&&angular.isArray(func.logs)) resolve(func.logs);
				});
			};

			this.checkNumberOfUsernameOnLogs = function(logs){
				var self = this;
				return $q(function(resolve, reject){
					self.object_index = 0;
					if(!(logs.length>0)) resolve();
					angular.forEach(logs, function(log, log_index){
						if(htmlService.username==log.target_user_name) self.object_index += 1;
						if(log_index+1>=logs.length) resolve();
					});
				});
			};

			// Get Function Section
			this.getUrl = function(){
				var self = this;
				self.setUrl();
				return self.url;
			};

			this.getUrlWithExtraWithUsername = function(edges, func_key){
				var self = this;
				return $q(function(resolve, reject){
					self.checkLogsOfFunc(func_key).then(function(logs){
						self.checkNumberOfUsernameOnLogs(logs).then(function(){
							var username_correspondings = [];
							angular.forEach(edges, function(edge, edge_index){
								if(edge.node.owner.username==htmlService.username) username_correspondings.push(edge.node);
								if(edge_index+1>=edges.length) {
									resolve(username_correspondings[self.object_index]);
								}
							});
						});
					});
				});
			};

			this.getUrlWithExtraGetTextWithSplit = function(url_extra_object, url_extra_object_html){
				var self = this;
				return $q(function(resolve, reject){
					htmlService.getTextOfHtmlObjectWithSplit(url_extra_object_html, url_extra_object_html.split, url_extra_object.random).then(function(text){
						if(!(url_extra_object&&url_extra_object.no_encode)){
							if(url_extra_object_html.split.type=='NUMBER')
								resolve(encodeURI(text, 'UTF-8'));
							else
								resolve(encodeURI(text.replace(/\s/g,""), 'UTF-8'));
						}
						else {
							if(url_extra_object_html.split.type=='NUMBER')
								resolve(text);
							else
								resolve(text.replace(/\s/g,""));
						}
					}, function(){ reject(); });
				});
			};

			// url_object.extra.list[extra_index]
			// ex) { html:this.htmls.id_review, type:'OBJECT' }
			this.getUrlWithExtra = function(url_extra_object){
				var self = this;
				return $q(function(resolve, reject){
					// [arrayService.getRandom(this.getSetting('list_search_tag'))]
					if(angular.isString(url_extra_object)){ 
						resolve(encodeURI(url_extra_object.replace(/\s/g,""), 'UTF-8')); 
					}
					// getRandomNumberInRange
					else if(url_extra_object.range){
						var number = numberService.getRandomNumberInRange(url_extra_object.range);
						resolve(encodeURI(number, 'UTF-8'));
					}
					// url_extra_object가 배열인 경우
					else if(!url_extra_object.range&&angular.isArray(url_extra_object)){
						if(url_extra_object[0]&&url_extra_object[0].setting_key){
							url_extra_object[0] = getSettingService.getSetting(url_extra_object[0].setting_key, url_extra_object[0].method);
							resolve(encodeURI(arrayService.getRandom(url_extra_object).replace(/\s/g,""), 'UTF-8'));
						}
						else resolve(encodeURI(arrayService.getRandom(url_extra_object).replace(/\s/g,""), 'UTF-8')); 
					}
					// 이하 url_extra_object가 배열이 아니고 객체({}) 형태인 경우
					else if(!url_extra_object.range&&!angular.isArray(url_extra_object)&&angular.isObject(url_extra_object)&&!angular.isString(url_extra_object)&&url_extra_object.setting_key){
						url_extra_object.value = getSettingService.getSetting(url_extra_object.setting_key, url_extra_object.method);
						if($rootScope.grammer_storage.grammer_key=="instagrammer"&&$rootScope.grammer_storage.grammers[$rootScope.grammer_storage.grammer_key].version_key=="specificuser"){
							if(!url_extra_object.value){
								$rootScope.message('stopstart', '셋팅창에서 작업할 계정을 적어주세요!!');
								$timeout(function(){ reject(); }, 3000);
							}
							else{ resolve(encodeURI(url_extra_object.value.replace(/\s/g,""), 'UTF-8')); }
						}
						else{
							resolve(encodeURI(arrayService.getRandom(url_extra_object.value).replace(/\s/g,""), 'UTF-8'));
						}
					}
					else if(!url_extra_object.range&&!angular.isArray(url_extra_object)&&angular.isObject(url_extra_object)&&!angular.isString(url_extra_object)&&url_extra_object.html&&url_extra_object.type!='OBJECT'){
						if(url_extra_object&&!angular.isArray(url_extra_object.html)){
							self.getUrlWithExtraGetTextWithSplit(url_extra_object, url_extra_object.html).then(function(url_text){
								resolve(url_text);
							}, function(){
								reject();
							});
						}
						else {
							var html_index = 0;
							var selfCarryOut = function(){
								self.getUrlWithExtraGetTextWithSplit(url_extra_object, url_extra_object.html[html_index]).then(function(url_text){
									resolve(url_text);
								}, function(){
									html_index += 1;
									if(html_index>=url_extra_object.html.length){ reject(); return; }
									else{ selfCarryOut(); }
								});
							};
							selfCarryOut();
						}
					}
					// instagrammerMyfollowerService 를 위한 로직
					else if(!url_extra_object.range&&!angular.isArray(url_extra_object)&&angular.isObject(url_extra_object)&&!angular.isString(url_extra_object)&&url_extra_object.html&&url_extra_object.type=='OBJECT'){
						htmlService.getElement(url_extra_object.html).then(function(script_object){
							var json_text = script_object.innerHTML.slice(21);
							// JSON.parse : JSON(Javascript Object Notation) 문자열을 개체로 변환합니다.
							json_text = JSON.parse(json_text.replace(/;/g,""));
							self.getUrlWithExtraWithUsername(json_text.entry_data.FeedPage[0].graphql.user.edge_web_feed_timeline.edges, url_extra_object.func_key).then(function(node_object){
								resolve(encodeURI(node_object.id, 'UTF-8'));
							});
						});
					}
					// instagrammerUnfollowService 를 위한 로직
					else if(!url_extra_object.range&&!angular.isArray(url_extra_object)&&angular.isObject(url_extra_object)&&!angular.isString(url_extra_object)&&url_extra_object.status&&url_extra_object.status_index){
						var status = $rootScope.grammer_storage.grammers[url_extra_object.grammer_key].versions[url_extra_object.version_key].statuses[url_extra_object.status];
						var status_index = $rootScope.grammer_storage.grammers[url_extra_object.grammer_key].versions[url_extra_object.version_key].statuses[url_extra_object.status_index];
						status_index = numberService.makeNumber(status_index);
						resolve(encodeURI(status[status_index], 'UTF-8'));
					}
					else if(!url_extra_object.range&&!angular.isArray(url_extra_object)&&angular.isObject(url_extra_object)&&!angular.isString(url_extra_object)&&url_extra_object.status&&!url_extra_object.status_index){
						var status = $rootScope.grammer_storage.grammers[url_extra_object.grammer_key].versions[url_extra_object.version_key].statuses[url_extra_object.status];
						if(url_extra_object.no_encode) { resolve(status); return; }
						resolve(encodeURI(status, 'UTF-8'));
					}
					else{ resolve(url_extra_object); }
				});
			};

			// option.url
			this.getUrlWithExtras = function(url_object){
				var self = this;
				return $q(function(resolve, reject){
					if(!url_object) reject();
					if(!(url_object&&url_object.basic)) var url='';
					else var url = url_object.basic;
					if(!(url_object.extra&&url_object.extra.list&&_.size(url_object.extra.list)>=1)){
						resolve(url); return;
					}
					var extra_index = 0;
					var execute = function(){
						self.getUrlWithExtra(url_object.extra.list[extra_index]).then(function(url_extra){
							url += url_extra;
							if(extra_index>=url_object.extra.list.length-1){ resolve(url); return; }
							else{ extra_index += 1; execute(); }
						}, function(){
							if(extra_index>=url_object.extra.list.length-1){ resolve(url); return; }
							else{ extra_index += 1; execute(); }
						});
					};
					execute();
				});
			};

			this.getVariableFromUrl = function(key, type){
				var self = this;
				self.setUrl();
				if( self.url.indexOf('_'+key+'=')!==-1 ){
					var part = self.url.split('_'+key+'=')[1];
					if ( part&&part.indexOf('/')!==-1 ) {
	          part = part.split('/')[0];
	        }
	        if ( part&&part.indexOf('&')!==-1 ) {
	          part = part.split('&')[0];
	        }
					return self.convertWithType(part, type);
				}
				else{
					if(type=='NUMBER'){ return 0; }
					else if(type=='STRING'){ return ''; }
				}
			};

			this.getSplit = function(param1, param2){
				var self = this;
				var url = self.getUrl();
				if(url.indexOf(param1)==-1&&url.indexOf(param2)==-1) return null;
				if(url.indexOf(param1)!=-1) url = url.split(param1)[1];
				if(url.indexOf(param2)!=-1) url = url.split(param2)[0];
				return url;
			};

			// Go Function Section
			this.goToUrl = function(url){
				location.href = url;
			};
			// Set Function Section
			this.setUrl = function(){
				var self = this;
				self.url = angular.copy(location.href);
			};

		});

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('popupService', function($rootScope, $q, grammerService, grammerSetService){

			// Send Function Section
			this.sendMessageOnPopup = function(resource_url, user_name, password, content){
				return $q(function(resolve, reject){
					chrome.runtime.sendMessage({
						resource_url : resource_url,
						user_name : user_name,
						password : password
					}, function(response){
						resolve(response);
					});
				});
			};

			this.sendMessageOnPopupTwo = function(resource_url, user_name){
				return $q(function(resolve, reject){
					chrome.runtime.sendMessage({
						resource_url : resource_url,
						user_name : user_name
					}, function(response){
						resolve(response);
					});
				});
			};

			// Set Function Section
			this.setRefactoredInformation = function(follower_total, following_total, promises_response){
				return $q(function(resolve, reject){
					grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'follower_total', follower_total).then(function(){
						grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'following_total', following_total).then(function(){
							grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'follower_list', promises_response[0]).then(function(){
								grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'following_list', promises_response[1]).then(function(){
									resolve();
								});
							});
						});
					});
				});
			};

			// Refactoring Function Section
			
			// followers_list --> , 로 join된 텍스트 형식
			this.refactorInformationOnFollowers_list = function(followers_list){
				return $q(function(resolve, reject){
					var followers;
					followers = followers_list.split(",");
					if(followers&&angular.isArray(followers)&&followers.length>=1) resolve(followers);
				});
			};

			// followings_list --> , 로 join된 텍스트 형식
			this.refactorInformationOnFollowings_list = function(followings_list){
				return $q(function(resolve, reject){
					var followings;
					followings = followings_list.split(",");
					if(followings&&angular.isArray(followings)&&followings.length>=1){
						// followings.reverse();
						resolve(followings);
					}
				});
			};

			this.refactorInformationOnPopup = function(followers_list, followings_list){
				var self = this;
				return $q(function(resolve, reject){
					var promises = [];
					if(followers_list.length>=1&&followings_list.length>=1){
						promises.push(self.refactorInformationOnFollowers_list(followers_list));
						promises.push(self.refactorInformationOnFollowings_list(followings_list));
					}
					$q.all(promises).then(function(promises_response){
						var follower_total = promises_response[0].length;
						var following_total = promises_response[1].length;
						self.setRefactoredInformation(follower_total, following_total, promises_response).then(function(){
							resolve();
						});
					});
				});
			};

		});

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('getSettingService', function($rootScope, arrayService, numberService){

			this.getStatus = function(status_key){
				var grammer_key = $rootScope.grammer_storage.grammer_key;
				var version_key = $rootScope.grammer_storage.grammers[grammer_key].version_key;
				if($rootScope.grammer_storage.grammers[grammer_key].versions[version_key].statuses[status_key]
				&&$rootScope.grammer_storage.grammers[grammer_key].versions[version_key].statuses[status_key].value) return $rootScope.grammer_storage.grammers[grammer_key].versions[version_key].statuses[status_key].value;
				else if($rootScope.grammer_storage.grammers[grammer_key].versions[version_key].statuses[status_key]) return $rootScope.grammer_storage.grammers[grammer_key].versions[version_key].statuses[status_key];
				else return null;
			};

			this.getSettingOriginal = function(setting_key){
				var grammer_key = $rootScope.grammer_storage.grammer_key;
				var version_key = $rootScope.grammer_storage.grammers[grammer_key].version_key;
				if($rootScope.grammer_storage.grammers[grammer_key].versions[version_key].settings[setting_key]
				&&$rootScope.grammer_storage.grammers[grammer_key].versions[version_key].settings[setting_key].value) return $rootScope.grammer_storage.grammers[grammer_key].versions[version_key].settings[setting_key].value;
				else return null;
			};

			this.getSettingGetRandom = function(setting_key){
				var self = this;
				return arrayService.getRandom(self.getSettingOriginal(setting_key));
			};

			this.getSettingGetRandomOfNumber = function(setting_key, percentage){
				var self = this;
				return numberService.getRandomOfNumber(self.getSettingOriginal(setting_key), percentage);
			};

			this.getSetting = function(setting_key, method, percentage){
				var self = this;
				if(method){
					if(method=='getRandom') return self.getSettingGetRandom(setting_key);
					if(method=='getRandomOfNumber') return self.getSettingGetRandomOfNumber(setting_key, percentage);
				} 
				else {
					return self.getSettingOriginal(setting_key); 
				}
			};

			this.getClick = function(click_key){
				var self = this;
				var grammer_key = $rootScope.grammer_storage.grammer_key;
				var version_key = $rootScope.grammer_storage.grammers[grammer_key].version_key;
				return $rootScope.grammer_storage.grammers[grammer_key].versions[version_key].funcs[click_key].click;
			};

			this.getFunc = function(func_key){
				var self = this;
				var grammer_key = $rootScope.grammer_storage.grammer_key;
				var version_key = $rootScope.grammer_storage.grammers[grammer_key].version_key;
				if($rootScope.grammer_storage.grammers[grammer_key].versions[version_key]
				&&$rootScope.grammer_storage.grammers[grammer_key].versions[version_key].funcs
				&&$rootScope.grammer_storage.grammers[grammer_key].versions[version_key].funcs[func_key])  
				 	return $rootScope.grammer_storage.grammers[grammer_key].versions[version_key].funcs[func_key];
				else
					return null;
			};
		});

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('grammerService', function($filter,
			bandgrammerInviteService, bandgrammerSignupService,
			blogrammerNewfriendService, blogrammerCommunicationService,
			facegrammerCompetitionService, facegrammerNewfriendService, facegrammerNewsfeedService, facegrammerPageService, facegrammerUnfriendService,
			instagrammerFollowService, instagrammerMyfollowerService, instagrammerUnfollowService, instagrammerSpecificuserService,
			kakaogrammerNewfriendService, kakaogrammerUnfriendService,
			pholagrammerFollowService, pholagrammerMyfollowerService, pholagrammerUnfollowService,
			postgrammerFollowService, postgrammerUnfollowService, postgrammerInviteService,
			twitgrammerFollowService, twitgrammerMyfollowerService, twitgrammerUnfollowService,
			vingrammerFollowService, vingrammerUnfollowService,
			youtugrammerFollowService, youtugrammerMyfollowerService, youtugrammerUnfollowService){

			this.grammer;
			this.version;
			this.service;
			this.target_user_name; 
			this.get = function(grammer_key, version_key){
				var service_name = $filter('lowercase')(grammer_key)+$filter('capitalize')(version_key)+'Service';
				var service;
				switch (service_name){
					case 'bandgrammerInviteService': return bandgrammerInviteService; break;
					case 'bandgrammerSignupService': return bandgrammerSignupService; break;

					case 'blogrammerNewfriendService':	return blogrammerNewfriendService; break;
					case 'blogrammerCommunicationService':	return blogrammerCommunicationService; break;

					case 'facegrammerCompetitionService':	return facegrammerCompetitionService; break;
					case 'facegrammerNewfriendService':	return facegrammerNewfriendService; break;
					case 'facegrammerNewsfeedService':	return facegrammerNewsfeedService; break;
					case 'facegrammerPageService':	return facegrammerPageService; break;
					case 'facegrammerUnfriendService':	return facegrammerUnfriendService; break;

					case 'instagrammerFollowService':	return instagrammerFollowService; break;
					case 'instagrammerMyfollowerService':	return instagrammerMyfollowerService; break;
					case 'instagrammerUnfollowService':	return instagrammerUnfollowService; break;
					case 'instagrammerSpecificuserService':	return instagrammerSpecificuserService; break;

					case 'kakaogrammerNewfriendService':	return kakaogrammerNewfriendService; break;
					case 'kakaogrammerUnfriendService':	return kakaogrammerUnfriendService; break;

					case 'pholagrammerFollowService':	return pholagrammerFollowService; break;
					case 'pholagrammerMyfollowerService':	return pholagrammerMyfollowerService; break;
					case 'pholagrammerUnfollowService':	return pholagrammerUnfollowService; break;

					case 'postgrammerFollowService': return postgrammerFollowService; break;
					case 'postgrammerUnfollowService': return postgrammerUnfollowService; break;
					case 'postgrammerInviteService': return postgrammerInviteService; break;

					case 'twitgrammerFollowService':	return twitgrammerFollowService; break;
					case 'twitgrammerMyfollowerService':	return twitgrammerMyfollowerService; break;
					case 'twitgrammerUnfollowService':	return twitgrammerUnfollowService; break;

					case 'vingrammerFollowService':	return vingrammerFollowService; break;
					case 'vingrammerUnfollowService':	return vingrammerUnfollowService; break;
					
					case 'youtugrammerFollowService':	return youtugrammerFollowService; break;
					case 'youtugrammerMyfollowerService':	return youtugrammerMyfollowerService; break;
					case 'youtugrammerUnfollowService':	return youtugrammerUnfollowService; break;
					default:
						return null;
				}
			};
		});

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('grammerCheckService', function($q, $rootScope, $timeout, numberService, stringService, urlService, htmlService, timeoutService){

			// Exist Function Section
			this.checkExistOfUrl = function(url){
				var self = this;
				return $q(function(resolve, reject){
					if(!url){ resolve(); return; }
					if(url.changing){ resolve(); return; }
					if(stringService.containString1InString2WithoutCapital(url.basic, urlService.getUrl())){ resolve(); }
					else{ reject(); }
				});
			};

			this.checkExistOfHtml = function(html){
				var self = this;
				return $q(function(resolve, reject){
					if(!html){ resolve(); return; }
					htmlService.getElements(html).then(function(elements){
						if(elements&&elements.length>=1){ resolve(); }
						else { reject(); }
					}, function(){ reject(); });
				});
			};

			// Identification Function Section
			this.checkIdentificationFromDB = function(grammer_key, version_key, identification){
				var self = this;
				return $q(function(resolve, reject){ 
					// var resource_url = 'http://127.0.0.1:8000/Grammer/'; // 개발용
	        var resource_url = 'http://eb-grammer-app-dev.ap-northeast-2.elasticbeanstalk.com/Grammer/'; // 개인용
	        // var resource_url = 'http://ebgrammerapp-changho.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 신창호
	        // var resource_url = 'http://ebgrammerapp-heungbo.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 강흥보
	        // var resource_url = 'http://ebgrammerapp-changdae.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 안창대
	        // var resource_url = 'http://ebgrammerappdoochul.52ksw2uxxt.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 주두철
	        // var resource_url = 'http://ebgrammerapp.cznf3q5vi6.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 박희빈(삼월)
	        // var resource_url = 'http://ebgrammerapp-env-jisu.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 안지수
	        // var resource_url = 'http://ebGrammerApp-dongju-env.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 김동주
	        // var resource_url = 'http://ebGrammerApp-kimcorp-env.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 김기업(단순 기업형)
	        // var resource_url = 'http://ebGrammerApp-super-env.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 고유주 super
	        // var resource_url = 'http://ebGrammerApp-younghwa-env.ap-northeast-2.elasticbeanstalk.com/Grammer/'; // 기업용 문영화
	        // var resource_url = 'http://eb-grammer-app-dev.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 변동섭
	        // var resource_url = 'http://ebGrammerApp-cover-env.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 커버 ** 인스타 언팔쿼리 기능 유.
	        // var resource_url = 'http://ebGrammerApp-minsun-env.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 강민성 ** 인스타 언팔쿼리 기능 유.
	        // var resource_url = 'http://ebgrammerapp-bibong-env.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 비봉 ** 인스타 언팔쿼리 기능 유.
	        // var resource_url = 'http://ebGrammerApp-dongu-env.ap-northeast-1.elasticbeanstalk.com/Grammer/'; // 기업용 동우 ** 인스타 언팔쿼리 기능 유.

					chrome.runtime.sendMessage({
						resource_url : resource_url,
						grammer_key : grammer_key,
						// version_key : version_key,
						identification : identification
					}, function(response){
						if(response.exist==true){ resolve(); return; }
						else{ 
							if(response.grammer==false){ $rootScope.message('stopstart', identification+'님 안녕하세요!<br/>'+grammer_key+'는 아직 런칭되지 않았습니다'); }
							else if(response.identification==false){ $rootScope.message('stopstart', identification+'님 안녕하세요!<br/> 고객님의 '+grammer_key+' 계정이 서버에 등록되지 않았습니다.'); }
							// else if(response.version==false){ $rootScope.message('stopstart', identification+'님 안녕하세요!<br/>'+version_key+' 구매 문의 : 010 9488 1462'); }
							else { $rootScope.message('stopstart', '에러가 발생했습니다<br/>문의 그래머 개발자: 010 9488 1462'); }
							$timeout(function(){ reject(); }, 5000);
						}
					});
				});
			};

			this.checkIdentificationSub = function(identification_html, grammer_key, version_key, timeoutPromise, service){
				var self = this;
				return $q(function(resolve, reject){
					var check_passed = service.getStatus('check_passed');
					if(check_passed&&_.isBoolean(check_passed)){
						$timeout.cancel(timeoutPromise);
						resolve();
					}
					else{
						htmlService.getTextOfHtmlObjectWithSplit(identification_html, identification_html.split).then(function(identification){
							$timeout.cancel(timeoutPromise);
							$rootScope.values.identification = identification;
							self.checkIdentificationFromDB(grammer_key, version_key, identification).then(function(){
								if(identification_html&&identification_html.check_once&&_.isBoolean(identification_html.check_once)){
									service.setStatus('identification', identification).then(function(){
										service.setStatus('check_passed', true).then(function(){
											resolve();
										}, function(){
											reject();
										});
									});
								}
								else{
									service.setStatus('identification', identification).then(function(){
										resolve();
									}, function(){
										reject();									
									});
								}
							}, function(){
								reject();
							});    
						}, function(){ reject(); });
					}
				});
			};
			
			this.checkIdentification = function(service){
				var self = this;
				return $q(function(resolve, reject){
					var count = 0;
					if(numberService.isPositive(service.getStatus('count'))){
						count = service.getStatus('count');
					}
					// count가 1000의 배수가 아닐 때 resolve, return
					// 0 또한 1000의 배수이다.
	        if(!(count%1000==0)){ resolve(); return; }
					$rootScope.message('stopstart', '서버 허가를 기다리고 있습니다');
					var grammer_key = service.grammer_key;
					var version_key = service.version_key;
					var identification_html = service.htmls.identification;
					if(!(grammer_key&&version_key&&identification_html)){
						$rootScope.message('stopstart', '아직 준비가 되지 않았습니다'); reject(); return;
					}
					var timeoutPromise;
					timeoutPromise = $timeout(function(){
						if(grammer_key=='postgrammer') $rootScope.message('stopstart', '로그인 후 구동해주세요');
						if(grammer_key=='blogrammer') $rootScope.message('stopstart', '로그인 후 구동해주세요');
					}, 2000);
					// identification_html 이 배열이 아닌 객체형태일 경우
					if(identification_html&&!angular.isArray(identification_html)){
						self.checkIdentificationSub(identification_html, grammer_key, version_key, timeoutPromise, service).then(function(){
							resolve();
						}, function(){
							reject();
						});
					}
					// identification_html 이 배열형태일 경우
					else {
						var identification_index = 0;
						var selfCarryOut = function(){
							self.checkIdentificationSub(identification_html[identification_index], grammer_key, version_key, timeoutPromise, service).then(function(){
								resolve();
							}, function(){
								identification_index += 1;
								if(identification_index>=identification_html.length){ reject(); return; }
								else{ selfCarryOut(); }
							});
						};
						selfCarryOut();
					}
				});
		  };

			// Page Function Section
			// page.urls
			this.checkPageWithUrls = function(urls){
				var self = this;
				return $q(function(resolve, reject){
					if(!(urls&&urls.list&&_.size(urls.list)>=1)){ resolve(); return; }
					if(urls.condition=='OR'){
						// 재귀함수와 비동기함수
						var url_index = 0;
						var execute = function(){
							self.checkExistOfUrl(urls.list[url_index]).then(function(){
								resolve(); return;
							}, function(){
								url_index += 1;
								if(url_index>=urls.list.length){ reject(); return; }
								else{ execute(); }
							});
						};
						execute();
					}
					// urls.condition == 'And'
					else{
						// angular.forEach 와 다수 비동기 병렬 함수 
						var promises = [];
						angular.forEach(urls.list, function(url, url_index){
							var promise = self.checkExistOfUrl(url);
							promises.push(promise);
							if(url_index>=urls.list.length-1){
								$q.all(promises).then( function(){ 
									resolve(); 
								}, function(){ 
									reject(); 
								});
							}
						});
					}
				});
			};

			this.checkPageWithHtmls = function(htmls){
				var self = this;
				return $q(function(resolve, reject){
					if(!(htmls&&htmls.list&&_.size(htmls.list)>=1)){ resolve(); return; }
					if(htmls.condition=='OR'){
						var html_index = 0;
						var execute = function(){
							self.checkExistOfHtml(htmls.list[html_index]).then(function(){
								resolve(); return;
							}, function(){
								html_index += 1;
								if(html_index>=htmls.list.length){ reject(); return; }
								else{ execute(); }
							});
						};
						execute();
					}
					else{
						var promises = [];
						angular.forEach(htmls.list, function(html, html_index){
							var promise = self.checkExistOfHtml(html);
							promises.push(promise);
							if(html_index>=htmls.list.length-1){
								$q.all(promises).then( function(){ 
									resolve(); 
								}, function(){ 
									reject(); 
								});
							}
						});
					}
				});
			};

			// checkPage에 들어오는 파라미터의 형식은 각 서비스.pages.start의 각 객체들을 의미한다.
			// checkPage함수는 grammerStartService.startService에서 service.pages.start에서 getPage를 할 때에 호출한다.
			this.checkPage = function(page){
				var self = this;
				return $q(function(resolve, reject){
					if(!page){ reject(); return; }
					var promises = [];
					promises.push(self.checkPageWithUrls(page.urls));
					promises.push(self.checkPageWithHtmls(page.htmls));
					$q.all(promises).then( function(successresponse){
						resolve();
					}, function(){
						reject(); 
					});
				});
			};

			// Rest Function Section
			this.checkRest = function(service){
				var self = this;
				return $q(function(resolve, reject){
					var count = service.getStatus('count');
					var boolean_rest = service.getSetting('boolean_rest');
					var count_rest = service.getSetting('count_rest');
					var interval_rest = service.getSetting('interval_rest');
					interval_rest = numberService.getRandomOfNumber(interval_rest, 50);
					if(!(boolean_rest&&_.gt(count_rest,0)&&_.gt(count,0))){; resolve(); return; }
					if(_.gt(count,count_rest)&&(count%count_rest==0)&&_.gt(count,service.getStatus('count_rested'))){
						$rootScope.message('stopstart', interval_rest+'분 쉬었다가 다시 시작합니다', interval_rest);
						$rootScope.$broadcast('countdown', interval_rest*60);
						timeoutService.delayPromise(interval_rest*60).then(function(){ resolve(); }, function(){ resolve(); });
					}
					else {
						resolve();
					}
				});
			};
		  
		});

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('grammerGetService', function($rootScope, $q, urlService, grammerCheckService){

			this.grammer_storage;

			this.getGrammerStorage = function(){
				return $q(function(resolve, reject){
					chrome.storage.local.get('grammer_storage', function(response) {
						resolve(angular.fromJson(response['grammer_storage']));
					});
				});
			};

			this.getGrammers = function(){
				var self = this;
				return $q(function(resolve, reject){
					self.getGrammerStorage().then(function(grammer_storage){
						if(!grammer_storage){ reject(); return; }
						resolve(grammer_storage.grammers);
					}, function(){
						reject();
					});
				});
			};

			this.getGrammer = function(grammer_key){
				var self = this;
				return $q(function(resolve, reject){
					self.getGrammers().then(function(grammers){
						if(!grammers[grammer_key]){ reject(); return; }
						resolve(grammers[grammer_key]);
					}, function(){
						reject();
					});
				});
			};

			// 원래 있는 grammer_key룰 가져오는 게 아니라 현재 url과 grammers를 비교해서 grammer_key를 가져온다.
			this.getGrammerKeyWithUrl = function(){
				var self = this;
				return $q(function(resolve, reject){
					var url = urlService.getUrl();
					self.getGrammers().then(function(grammers){
						var grammer_index = 0;
						angular.forEach(grammers, function(grammer_value, grammer_key){
							grammer_index += 1;
							if(angular.isString(grammer_value.host)){
								if(_.includes(url, grammer_value.host)){ resolve(grammer_key); return; }
							}
							else if(angular.isArray(grammer_value.host)){
								angular.forEach(grammer_value.host, function(host_element, host_element_index){
									if(_.includes(url, host_element)){ resolve(grammer_key); return; }
								});
							}
							if(grammer_index==_.size(grammers)){ reject(); return; }
						});
					});
				});
			};

			this.getGrammerValueWithUrl = function(){
				var self = this;
				return $q(function(resolve, reject){
					var url = urlService.getUrl();
					self.getGrammers().then(function(grammers){
						var grammer_index = 0;
						angular.forEach(grammers, function(grammer_value, grammer_key){
							grammer_index += 1;
							if(angular.isString(grammer_value.host)){
								if(_.includes(url, grammer_value.host)){ resolve(grammer_value); return; }
							}
							else if(angular.isArray(grammer_value.host)){
								angular.forEach(grammer_value.host, function(host_element, host_element_index){
									if(_.includes(url, host_element)){ resolve(grammer_value); return; }
								});
							}
							if(grammer_index==_.size(grammers)){ reject(); return; }
						});
					});
				});
			};

			this.getGrammerKeyValueWithUrl = function(){
				var self = this;
				return $q(function(resolve, reject){
					var url = urlService.getUrl();
					self.getGrammers().then(function(grammers){
						var grammer_index = 0;
						angular.forEach(grammers, function(grammer_value, grammer_key){
							grammer_index += 1;
							if(angular.isString(grammer_value.host)){
								if(_.includes(url, grammer_value.host)){ resolve({'key':grammer_key, 'value':grammer_value}); return; }
							}
							else if(angular.isArray(grammer_value.host)){
								angular.forEach(grammer_value.host, function(host_element, host_element_index){
									if(_.includes(url, host_element)){ resolve({'key':grammer_key, 'value':grammer_value}); return; }
								});
							}
							if(grammer_index==_.size(grammers)){ reject(); return; }
						});
					});
				});
			};

			this.getVersions = function(grammer_key){
				var self = this;
				return $q(function(resolve, reject){
					self.getGrammer(grammer_key).then(function(grammer_value){
						if(!grammer_value.versions){ reject(); return; }
						resolve(grammer_value.versions);
					}, function(){
						reject();
					});
				});
			};

			this.getVersion = function(grammer_key, version_key){
				var self = this;
				return $q(function(resolve, reject){
					self.getVersions(grammer_key).then(function(versions){
						if(!versions[version_key]){ reject(); return; }
						resolve(versions[version_key]);
					}, function(){
						reject();
					});
				});
			};

			this.getSettings = function(grammer_key, version_key){
				var self = this;
				return $q(function(resolve, reject){
					self.getVersion(grammer_key, version_key).then(function(version){
						if(!version.settings){ reject(); return; }
						resolve(version.settings);
					}, function(){
						reject();
					});
				});
			};

			this.getSetting = function(grammer_key, version_key, setting_key){
				var self = this;
				return $q(function(resolve, reject){
					self.getSettings(grammer_key, version_key).then(function(settings){
						if(!settings[setting_key]){ reject(); return; }
						resolve(settings[setting_key]);
					}, function(){
						reject();
					});
				});
			};

			this.getPlayOfVersion = function(grammer_key, version_key){
				var self = this;
				return $q(function(resolve, reject){
				self.getVersion(grammer_key, version_key).then(function(version){
						if(!angular.isDefined(version.play)){ reject(); return; }
						resolve(version.play);
					}, function(){
						reject();
					});
				});
			};

			this.getFuncs = function(grammer_key, version_key){
				var self = this;
				return $q(function(resolve, reject){
					self.getVersion(grammer_key, version_key).then(function(version){
						if(!version.funcs){ reject(); return; }
						resolve(version.funcs);
					}, function(){
						reject();
					});
				});
			};

			this.getFunc = function(grammer_key, version_key, func_key){
				var self = this;
				return $q(function(resolve, reject){
					self.getFuncs(grammer_key, version_key, func_key).then(function(funcs){
						if(!funcs[func_key]){ reject(); return; }
						resolve(funcs[func_key]);
					}, function(){
						reject();
					});
				});
			};

			this.getStatuses = function(grammer_key, version_key){
				var self = this;
				return $q(function(resolve, reject){
					self.getVersion(grammer_key, version_key).then(function(version){
						if(!version.statuses){ reject(); return; }
						resolve(version.statuses);
					}, function(){
						reject();
					});
				});
			};

			this.getStatus = function(grammer_key, version_key, status_key){
				var self = this;
				return $q(function(resolve, reject){
					self.getStatuses(grammer_key, version_key, status_key).then(function(statuses){
						if(!statuses[status_key]){ reject(); return; }
						resolve(statuses[status_key]);
					}, function(){
						reject();
					});
				});
			};

			// Boolean Function Section
			this.getBooleanFromBooleanAndPercentage = function(boolean, percentage){
				if(!boolean) return false;
				if(!(percentage>=0&&percentage<=100)) percentage = 100;
				if(Math.random()<=percentage*0.01){
				 	return true;
				}
				return false;
			};

			// Delay Function Section
			this.getDelayOfStep = function(page_delay, step_delay){
				var delay;
				if(page_delay&&step_delay){ delay = page_delay*step_delay*0.01; }
				else if(step_delay){ delay = step_delay; }
				else if(page_delay){ delay = page_delay; }
				else{ delay = 0; }
				return delay;
			};

			// // Page Function Section
			// 이 함수에 들어오는 파라미터는 각 서비스.pages.start 로 들어온다.
			this.getPage = function(pages){
				return $q(function(resolve, reject){
					if(!(_.size(pages)>=1)){ reject(); return; }
					var page_index=0;
					var execute = function(){
						// grammerCheckService.checkPage는 해당 페이지에서 내가 예를 들어 instagrammerfollowService 같은 곳에 
						// instagrammerfollowService.pages.start.(urls || htmls)에 맞게 
						// 각각의 url들과 html정보를 적어놓았는지 체크하는 함수이다.
						grammerCheckService.checkPage(pages[page_index]).then(function(){
							resolve(pages[page_index]); return;
						}, function(){
							if($rootScope.grammer_storage.grammer_key=="facegrammer"&&$rootScope.grammer_storage.grammers[$rootScope.grammer_storage.grammer_key].version_key=="page"){
								$rootScope.message('stopstart', '구동할 자신의 페이스북 페이지로 가주세요!!');
							}
							page_index+=1;
							if(page_index>=pages.length){ reject(); return; }
							else{ execute(); }
						});
					};
					execute();
				});
			};

			this.getPageCorrespondingWithUrl = function(pages){
				var self = this;
				return $q(function(resolve, reject){
					angular.forEach(pages, function(page, page_index){
						grammerCheckService.checkPageWithUrls(page.urls).then(function(){
							resolve(page);
						});
					});
				});
			};

		});

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';
	angular.module("grammer_execute")
		.service('grammerSetService', function($q, $rootScope, grammerGetService) {
		
			// Grammer Funcion Section
		
			this.setGrammerStorage = function(grammer_storage){
				return $q(function(resolve, reject){
					var obj = {};
					obj['grammer_storage'] = angular.toJson(grammer_storage);
					chrome.storage.local.set(obj, function(){
						grammerGetService.getGrammerStorage().then(function(grammer_storage_get){
							$rootScope.grammer_storage = grammer_storage_get;
							resolve(grammer_storage_get);
						},function(){
							reject();						
						});
					});
				});
			};

			this.setCurrentFuncKey = function(current_func_key){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getGrammerStorage().then(function(grammer_storage_get){
						grammer_storage_get.current_func_key = current_func_key;
						self.setGrammerStorage(grammer_storage_get).then(function(grammer_storage_set){
							resolve(grammer_storage_set.current_func_key);
						}, function(){
							reject();
						});
					});
				});
			};

			// get한 뒤에 grammer_storage_get.grammer_key에다가 grammer_key를 집어넣고 다시 set을 한다. 
			this.setGrammerKey = function(grammer_key){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getGrammerStorage().then(function(grammer_storage_get){
						grammer_storage_get.grammer_key = grammer_key;
						self.setGrammerStorage(grammer_storage_get).then(function(grammer_storage_set){
							resolve(grammer_storage_set.grammer_key);
						}, function(){
							reject();						
						});
					}, function(){
						reject();
					});
				});
			};

			this.setGrammers = function(grammers){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getGrammerStorage().then(function(grammer_storage_get){
						grammer_storage_get.grammers = grammers;
						self.setGrammerStorage(grammer_storage_get).then(function(grammer_storage_set){
							resolve(grammer_storage_set.grammers);
						}, function(){
							reject();						
						});
					}, function(){
						reject();
					});
				});
			};

			this.setGrammer = function(grammer_key, grammer_value){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getGrammers().then(function(grammers_get){
						grammers_get[grammer_key] = grammer_value;
						self.setGrammers(grammers_get).then(function(grammers_set){
							resolve(grammers_set[grammer_key]);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};

			this.setVersionKey = function(grammer_key, version_key){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getGrammer(grammer_key).then(function(grammer_get){
						grammer_get.version_key = version_key;
						self.setGrammer(grammer_key, grammer_get).then(function(grammer_set){
							resolve(grammer_set.version_key);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};

			this.setVersions = function(grammer_key, versions){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getGrammer(grammer_key).then(function(grammer_get){
						grammer_get.versions = versions;
						self.setGrammer(grammer_key, grammer_get).then(function(grammer_set){
							resolve(grammer_set.versions);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};

			this.setVersion = function(grammer_key, version_key, version_value){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getVersions(grammer_key).then(function(versions_get){
						versions_get[version_key] = version_value;
						self.setVersions(grammer_key, versions_get).then(function(versions_set){
							resolve(versions_set[version_key]);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};

			this.setPlayOfVersion = function(grammer_key, version_key, play_value){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getVersion(grammer_key, version_key).then(function(version_get){
						version_get.play = play_value;
						self.setVersion(grammer_key, version_key, version_get).then(function(version_set){
							resolve(version_set.play);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};

			this.setSettings = function(grammer_key, version_key, settings){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getVersion(grammer_key, version_key).then(function(version_get){
						version_get.settings = settings;
						self.setVersion(grammer_key, version_key, version_get).then(function(version_set){
							resolve(version_set.settings);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};

			this.setSetting = function(grammer_key, version_key, setting_key, setting_value){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getSettings(grammer_key, version_key).then(function(settings_get){
						settings_get[setting_key] = setting_value;
						self.setSettings(grammer_key, version_key, settings_get).then(function(settings_set){
							resolve(settings_set[setting_key]);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};
			
			this.setFuncs = function(grammer_key, version_key, funcs){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getVersion(grammer_key, version_key).then(function(version_get){
						version_get.funcs = funcs;
						self.setVersion(grammer_key, version_key, version_get).then(function(version_set){
							resolve(version_set.funcs);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};
			
			this.setFunc = function(grammer_key, version_key, func_key, func_value){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getFuncs(grammer_key, version_key).then(function(funcs_get){
						funcs_get[func_key] = func_value;
						self.setFuncs(grammer_key, version_key, funcs_get).then(function(funcs_set){
							resolve(funcs_set[func_key]);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};

			this.setStatuses = function(grammer_key, version_key, statuses){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getVersion(grammer_key, version_key).then(function(version_get){
						version_get.statuses = statuses;
						self.setVersion(grammer_key, version_key, version_get).then(function(version_set){
							resolve(version_set.statuses);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};
			
			this.setStatus = function(grammer_key, version_key, status_key, status_value){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getStatuses(grammer_key, version_key).then(function(statuses_get){
						statuses_get[status_key] = status_value;
						self.setStatuses(grammer_key, version_key, statuses_get).then(function(statuses_set){
							resolve(statuses_set[status_key]);
						}, function(){
							reject();
						});
					}, function(){
						// 맨 처음 로직 싸이클 돌리고 왔을 때 version.statuses를 설정한다. 
						var statuses_get = {};
						statuses_get[status_key] = status_value;
						self.setStatuses(grammer_key, version_key, statuses_get).then(function(statuses_set){
							resolve(statuses_set[status_key]);
						}, function(){
							reject();
						});
					});
				});
			};

			this.removeStatus = function(grammer_key, version_key, status_key){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getStatuses(grammer_key, version_key).then(function(statuses_get){
						statuses_get[status_key] = null;
						self.setStatuses(grammer_key, version_key, statuses_get).then(function(statuses_set){
							resolve();
						}, function(){
							reject();
						});
					}, function(){
						// 맨 처음 로직 싸이클 돌리고 왔을 때 version.statuses를 설정한다. 
						var statuses_get = {};
						statuses_get[status_key] = null;
						self.setStatuses(grammer_key, version_key, statuses_get).then(function(statuses_set){
							resolve();
						}, function(){
							reject();
						});
					});
				});
			};

			// click ( execute, extension:initialize false )
			this.setClickOfFunc = function(grammer_key, version_key, func_key, click_value){
				var self = this;
				return $q(function(resolve, reject){
					// 해당 func를 가져온다.
					grammerGetService.getFunc(grammer_key, version_key, func_key).then(function(func_get){
						// 가져온 func에 click속성을 생성하고, click_value 인자값을 설정해준다.
						func_get.click = click_value;
						// 가져온 func_get을 가지고 setFunc를 한다.
						self.setFunc(grammer_key, version_key, func_key, func_get).then(function(func_set){
							resolve(func_set.click);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};

			this.setClickLogOfFunc = function(grammer_key, version_key, func_key, click_value){
				var self = this;
				return $q(function(resolve, reject){
					grammerGetService.getFunc(grammer_key, version_key, func_key).then(function(func_get){
						func_get.click_log = click_value;
						self.setFunc(grammer_key, version_key, func_key, func_get).then(function(func_set){
							resolve(func_set.click_log);
						}, function(){
							reject();
						});
					}, function(){
						reject();
					});
				});
			};

	});

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('grammerGoService', function($rootScope, $location, arrayService, urlService, grammerGetService){

			// [this.urls.search]
			this.goPage = function(page){
				if(!(page&&page.urls&&page.urls.list&&_.size(page.urls.list)>=1)) return;
				// page.urls.list은 배열이다.
				// arrayService.getRandom이 주는 값은 객체이다.
				// var page_url = page.urls.list[0];
				var page_url = arrayService.getRandom(page.urls.list);
				// page_url은 객체형식이다.
				urlService.getUrlWithExtras(page_url).then(function(url){
					location.href = url;
				});
			};

			this.goNextPage = function(pages){
				var self = this;
				grammerGetService.getPage(pages).then(function(page){
					var index = pages.indexOf(page);
					if(index+1>=pages.length){
						self.goPage(pages[0]);
					}
					else{
						self.goPage(pages[index+1]);
					}
				});
			};

		});

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('grammerActionService', function($q, $timeout, $rootScope, $filter, $interval, $location, $window, arrayService, numberService, urlService, stringService, htmlService, cookieService, timeoutService, getSettingService, grammerService, grammerGetService, grammerSetService, grammerStopService, grammerGoService){

			// Delay Function Section
			this.actionDelay = function(delay, delay_position){
				var self = this;
				var real_delay = delay;
				if(delay_position&&delay_position>=0&&delay_position<=100){
					real_delay = delay*delay_position*0.01*1000;
				}
				else{ real_delay = Math.random()*delay*1000; }
				return real_delay;
			};

			// Delete Function Section
			// delete_object 형식 -> {component:'property', name:'href'}
			this.actionDeleteOnElementSub = function(element, delete_object){
				var self = this;
				return $q(function(resolve, reject){
					if(delete_object&&delete_object.component=='property'){
						element.removeAttribute(delete_object.name);
						resolve(element);
					}
					else{
						resolve(element);
					}
				});
			};
			
			// delete_info 형식 --> [{component:'property', name:'href'}]
			this.actionDeleteOnElement = function(element, delete_info){
				var self = this;
				return $q(function(resolve, reject){
					if(!(delete_info&&delete_info.length>=1)){ resolve(element); return; }
					var delete_index = 0;
					var selfCarryOut = function(){
						self.actionDeleteOnElementSub(element, delete_info[delete_index]).then(function(element){
							delete_index += 1;
							if(delete_info.length==delete_index){
								resolve(element); return;
							} 
							selfCarryOut(); 
						});
					};
					selfCarryOut();
				});
			};

			this.actionClick_singleSub = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					self.solvePandora(option.index).then(function(index){
						htmlService.getElement(option.html, option.random, index).then(function(element){
							// option.delete 형식 --> [{component:'property', name:'href'}]
							self.actionDeleteOnElement(element, option.delete).then(function(element){
								$(element).simulate('mouseenter');
								$(element).simulate('mouseover');
								$(element).simulate("focus");
								$timeout(function(){
									$(element).simulate("click");
									resolve();
								}, self.actionDelay(action_delay, option.delay_position));
							});
						}, function(){ resolve(); });
					});
				});
			};

			// Click Function Section
			// option, action_delay, action_func
			this.actionClick_single = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!(option&&option.conditions)){
						self.actionClick_singleSub(option, action_delay, action_func).then(function(){
							resolve();
						});
					}
					else{
						self.actionOnCondition(option).then(function(){
							self.actionClick_singleSub(option, action_delay, action_func).then(function(){
								resolve();
							});
						}, function(){
							resolve();
						});
					}
				});
			};

			this.actionClick_multiple = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					htmlService.getElements(option.html).then(function(elements){
						angular.forEach(elements, function(element, element_index){
							$timeout(function(){
								element.focus(); $(element).focus(); $(element).simulate("focus");
								$(element).simulate("click");
								if(element_index==elements.length-1){ resolve(); }
							}, self.actionDelay(action_delay, option.delay_position));
						});
					}, function(){ resolve(); });
				});
			};

			// 이 함수에 들어오는 option은 원래 action_object.click 형태이다.
			// 이 함수에 들어오는 option은 원래 action_object.func 형태이다.
			// action_object.click, action_delay, action_object.func
			this.actionClick = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!option.html){ resolve(); return;}
					if(option.target) self.actionSetParentElementOnHTML(option.html);
					if(option&&option.comparison){
						self.comparePandora(option.comparison).then(function(){
							if(!option.multiple){
								self.actionClick_single(option, action_delay, action_func).then(function(){ resolve(); }, function(){ reject(); });
							}
							else{
								self.actionClick_multiple(option, action_delay, action_func).then(function(){ resolve(); }, function(){ reject(); });
							}
						}, function(){
							if(!option.multiple){
								self.actionClick_single(option, action_delay, action_func).then(function(){ resolve(); }, function(){ reject(); });
							}
							else{
								self.actionClick_multiple(option, action_delay, action_func).then(function(){ resolve(); }, function(){ reject(); });
							}
						});
					}
					else{
						if(!option.multiple){
							self.actionClick_single(option, action_delay, action_func).then(function(){ resolve(); }, function(){ reject(); });
						}
						else{
							self.actionClick_multiple(option, action_delay, action_func).then(function(){ resolve(); }, function(){ reject(); });
						}
					}
				});
			};

			this.actionClick_check_count = function(count, count_limit){
				var self = this;
				return $q(function(resolve, reject){
					if(!angular.isNumber(count_limit)){ resolve(); return; }
					else{
						if(count>=count_limit) resolve();
						else reject();
					}
				});
			};

			this.actionClick_interval = function(option, action_delay, element, count, action_func){
				var self = this;
				return $q(function(resolve, reject){
					var intervalPromise = $interval(function(){
						var promises = [];
						if(option&&(option.count||option.comparison)){
							promises.push(self.actionClick_check_count(count, option.count));
							promises.push(self.comparePandora(option.comparison));
						}
						$q.all(promises).then(function(){
							if(angular.isDefined(option.comparison)||angular.isDefined(option.count)){
								$interval.cancel(intervalPromise); $(element).stop(); resolve(); return;
							}
							self.actionClick(option, action_delay, action_func);
						}, function(){
							count += 1;
							self.actionClick(option, action_delay, action_func);
						});
					}, option.interval*1000);
				});
			};

			this.actionMultiClick = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!option.html){ resolve(); return; }
					htmlService.getElement(option.html, option.random).then(function(element){
						var count = 1;
						if(!numberService.isPositive(option.interval)) option.interval = action_delay;
						self.actionClick(option, action_delay, action_func);
						self.actionClick_interval(option, action_delay, element, count, action_func).then(function(){ resolve(); }, function(){ reject(); });
					}, function(){
						resolve();
					});
				});
			};

			// Change Function Section
			this.addClassesOfElement = function(element, classes_add){
				var self = this;
				return $q(function(resolve, reject){
					if(!(classes_add&&(_.size(classes_add)>=1))){ resolve(); return; }
					angular.forEach(classes_add, function(class_add, class_add_index){
						element.classList.add(class_add);
						if(class_add_index==classes_add.length-1){ resolve(); }
					});
				});
			};
			this.removeClassesOfElement = function(element, classes_remove){
				var self = this;
				return $q(function(resolve, reject){
					if(!(classes_remove&&(_.size(classes_remove)>=1))){ resolve(); return; }
					angular.forEach(classes_remove, function(class_remove, class_remove_index){
						element.classList.remove(class_remove);
						if(class_remove_index==classes_remove.length-1){ resolve(); }
					});
				});
			};
			this.changeClassesOfElement = function(element, classes){
	      var self = this;
	        return $q(function(resolve, reject){
	          if(classes){
	            var promises = [];
	            if(classes.add&&classes.add.list&&(_.size(classes.add.list)>=1)){
	              var promise = self.addClassesOfElement(element, classes.add.list);
	              promises.push(promise);
	            }
	            if(classes.remove&&classes.remove.list&&(_.size(classes.remove.list)>=1)){
	              var promise = self.removeClassesOfElement(element, classes.remove.list);
	              promises.push(promise);
	            }
	            if(_.size(promises)>=1) resolve();
	            else $q.all(promises).then(function(){ resolve(); }, function(){ reject(); });
	          }
	          else resolve();
	       });
	    };
			this.addPropertiesOfElement = function(element, properties_add){
				var self = this;
				return $q(function(resolve, reject){
					angular.forEach(properties_add, function(property_add, property_add_index){
						element.setAttribute(property_add.name, property_add.value);
						if(property_add_index==properties_add.length-1){ resolve(); }
					});
				});
			};
			this.removePropertiesOfElement = function(element, properties_remove){
				var self = this;
				return $q(function(resolve, reject){
					if(!(properties_remove&&(_.size(properties_remove)>=1))){ resolve(); return; }
					angular.forEach(properties_remove, function(property_remove, property_remove_index){
						element.removeAttribute(property_remove.name);
						if(property_remove_index==properties_remove.length-1){ resolve(); }
					});
				});
			};
			this.changePropertiesOfElement = function(element, properties){
				var self = this;
				return $q(function(resolve, reject){
					if(properties){
						var promises = [];
						if(properties.add&&properties.add.list&&_(properties.add.list)){
							var promise = self.addPropertiesOfElement(element, properties.add.list);
							promises.push(promise);
						}
						if(properties.remove&&properties.remove.list&&(_.size(properties.remove.list)>=1)){
							var promise = self.removePropertiesOfElement(element, properties.remove.list);
							promises.push(promise);
						}
						if(_.size(promises)>=1) resolve();
						else $q.all(promises).then(function(){ resolve(); }, function(){ reject(); });
					}
					else resolve();
				});
			};

			// element, option.innerHTMLs
			this.changeInnerHTMLOfElement = function(element, innerHTMLs){
				var self = this;
				return $q(function(resolve, reject){
					if(innerHTMLs){
						if(innerHTMLs.all&&innerHTMLs.all.setting_key) {
							element.innerHTML = getSettingService.getSetting(innerHTMLs.all.setting_key, innerHTMLs.all.method);		
							resolve();
						}
						else if(innerHTMLs.prepend&&_.size(innerHTMLs.prepend)) {
							element.prepend(innerHTMLs.prepend);
							resolve();
						}
						else if(innerHTMLs.append&&_.size(innerHTMLs.append)) {
							element.append(innerHTMLs.append);
							resolve();
						}
						else if(innerHTMLs.all&&!innerHTMLs.all.setting_key) {
							element.innerHTML = innerHTMLs.all;
							resolve();
						}
					}
					else {
						resolve();
					}
				});
			};

			this.changeReplaceChildOfElementSub = function(replaceChild){
				var self = this;
				return $q(function(resolve, reject){
					if(replaceChild.text){
						replaceChild.text.value = getSettingService.getSetting(replaceChild.text.setting_key, replaceChild.text.method);
						if(replaceChild.text.value){
							replaceChild.text.value = ' '+replaceChild.text.value;
							resolve(replaceChild);
						}
					}
				});
			};

			this.changeReplaceChildOfElement = function(element, replaceChild){
				var self = this;
				return $q(function(resolve, reject){
					self.changeReplaceChildOfElementSub(replaceChild).then(function(replaceChild){
						var newChild = document.createTextNode(replaceChild.text.value);
						if(replaceChild.position=='LAST'){
							var index = element.childNodes.length-1;
							if(index<=0) index = 0;
							element.replaceChild(newChild, element.childNodes[index]);
						}
						resolve();
					});
				});
			};

			// element, option.replaceChilds
			this.changeReplaceChildsOfElement = function(element, replaceChilds){
				var self = this;
				return $q(function(resolve, reject){
					if(!(replaceChilds&&replaceChilds.list&&_.size(replaceChilds.list)>=1)){ resolve(); return; }
					var promises = [];
					angular.forEach(replaceChilds.list, function(replaceChild, replaceChild_index){
						var promise = self.changeReplaceChildOfElement(element, replaceChild);
						promises.push(promise);
						if(replaceChild_index==replaceChilds.list.length-1){
							$q.all(promises).then(function(){ resolve(); }, function(){ reject(); });	
						}
					});
				});
			};

			// action_object.change, action_delay, action_object.func
			this.actionChange = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!option.html){ resolve(); return;}
					htmlService.getElement(option.html, option.random).then(function(element){
						var promise_classes = self.changeClassesOfElement(element, option.classes);
						var promise_properties = self.changePropertiesOfElement(element, option.properties);
						var promise_innerHTMLs = self.changeInnerHTMLOfElement(element, option.innerHTMLs);
						var promise_replaceChilds = self.changeReplaceChildsOfElement(element, option.replaceChilds);
						$q.all([promise_classes, promise_properties, promise_innerHTMLs, promise_replaceChilds]).then(function(){ resolve(); }, function(){ reject(); });
					}, function(){ resolve(); });
				});
			};

			// Check Function Section
			// action_object.check, action_delay, action_object.func
			this.actionCheck = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(option&&option.status){
						if(option&&option.exist){
							if(grammerService.service.getStatus(option.status)) resolve();
							else reject();
						}
						else{
							if(grammerService.service.getStatus(option.status)) reject();
							else resolve();
						}
					}
					else{
						var promises = [];
						var html_index = 0;
						var execute = function(){
							if(option.htmls[html_index].target) self.actionSetParentElementOnHTML(option.htmls[html_index].html);
							htmlService.getElement(option.htmls[html_index].html).then(function(element){ // 요기 getElement에 index파라미터가 들어가야한다.
								// exist == true
								if(option.htmls[html_index].exist){
									html_index+=1;
									if(html_index>=option.htmls.length) resolve();
									else execute();
								}
								// exist == false
								else{
									$rootScope.message(action_func, option.htmls[html_index].message);
									reject();
								}
							}, function(){
								if(option.htmls[html_index].exist){
									$rootScope.message(action_func, option.htmls[html_index].message);
									reject();
								}
								else{
									html_index+=1;
									if(html_index>=option.htmls.length) {
										resolve();
									}
									else execute();
								}
							});
						};
						$timeout(function(){
							execute();
						}, self.actionDelay(action_delay, option.delay_position));
					}
				});
			};

			// Compare Function Section
			this.solveTextPandora = function(pandora){
				var self = this;
				return $q(function(resolve, reject){
					if(!pandora.isArray){
						if(pandora.target&&grammerService.service&&grammerService.service.target) self.actionSetParentElementOnHTML(pandora.html);
						htmlService.getTextOfHtmlObjectWithSplit(pandora.html, pandora.html.split).then(function(text){
							pandora.value = text;
							resolve(pandora);
						}, function(){ reject(); });
					}
					else{
						if(pandora.target&&grammerService.service&&grammerService.service.target) self.actionSetParentElementOnHTML(pandora.html);
						htmlService.getTextsOfHtmlObjectWithSplit(pandora.html, pandora.html.split).then(function(text_array){
							pandora.value = text_array;
							resolve(pandora);
						}, function(){ reject(); });	
					}
				});
			};
			this.solveNumberPandora = function(pandora){
				var self = this;
				return $q(function(resolve, reject){
					if(pandora.target&&grammerService.service&&grammerService.service.target) self.actionSetParentElementOnHTML(pandora.html);
					htmlService.getTextOfHtmlObjectWithSplit(pandora.html, pandora.html.split).then(function(text){
						pandora.value = numberService.makeNumber(text);
						if(pandora&&pandora.plus) pandora.value += pandora.plus;
						resolve(pandora);
					}, function(){ reject(); });
				});
			};

			// pandora.html에 해당하는 elements의 length를 pandora.value로 세팅하고, resolve한다.
			this.solveCountPandora = function(pandora){
				var self = this;
				return $q(function(resolve, reject){
					if(pandora.target&&grammerService.service&&grammerService.service.target) self.actionSetParentElementOnHTML(pandora.html);
					htmlService.getElements(pandora.html).then(function(elements){
						pandora.value = elements.length;
						pandora.value = numberService.makeNumber(pandora.value);
						resolve(pandora);
					}, function(){ pandora.value = 0; resolve(pandora); return; });
				});
			};

			this.solveQueryPandora = function(pandora){
				var self = this;
				return $q(function(resolve, reject){
					if(pandora.target&&grammerService.service&&grammerService.service.target) self.actionSetParentElementOnHTML(pandora.html);
					if(grammerService.service.grammer_key=='facegrammer'&&grammerService.service.version_key=='page'){
						pandora.value = [];
						htmlService.getElements(pandora.html).then(function(elements){
							var element_index = 0;
							var selfCarryOut = function(){
								// 1. elements[element_index]
								// 2. getElementsWithSelector 에서 가져오는 판을 설정한다. 
							};
							selfCarryOut();
							// pandora.value = elements;
							// resolve(pandora.value);
						}, function(){ pandora.value = []; resolve(pandora); return; });
					}
				});
			};

			this.solvePandoraAdditionalWork = function(pandora){
				var self = this;
				return $q(function(resolve, reject){
					if(!(pandora&&pandora.additional_work)) { reject(); return;}
					var pandora_value_final;
					if(pandora.additional_work.plus){
						self.solvePandoraSub(pandora.additional_work.plus).then(function(plus_pandora){
							if(plus_pandora.multiple){
								self.solvePandoraSub(plus_pandora.multiple).then(function(multiple_pandora){
									pandora_value_final = pandora.value + plus_pandora.value*multiple_pandora.value;
									resolve(pandora_value_final);
								});
							}
							else{
								pandora_value_final = pandora.value + plus_pandora.value;
								resolve(pandora_value_final);
							}
						});
					}
					else if(pandora.additional_work.minus){
						self.solvePandoraSub(pandora.additional_work.minus).then(function(minus_pandora){
							if(minus_pandora.multiple){
								self.solvePandoraSub(minus_pandora.multiple).then(function(multiple_pandora){
									pandora_value_final = pandora.value - minus_pandora.value*multiple_pandora.value;
									resolve(pandora_value_final);
								});
							}
							else{
								pandora_value_final = pandora.value - minus_pandora.value;
								resolve(pandora_value_final);
							}
						});
					}
				});
			};

			// 이 함수 안에 들어오는 pandora라는 인자는 loop.comparison.pandoras에 있는 객체이다.
			// pandora는 pandoras라는 배열에 있는 객체이다.
			this.solvePandora = function(pandora){
				var self = this;
				return $q(function(resolve, reject){
					if(!pandora){ resolve(null); return; }
					self.solvePandoraSub(pandora).then(function(pandora){
						self.solvePandoraAdditionalWork(pandora).then(function(pandora_value_final){
							pandora.value = pandora_value_final;
							resolve(pandora.value);
						}, function(){
							resolve(pandora.value);
						});
					}, function(){
						reject();
					});
				});
			};

			this.solvePandoraSub = function(pandora){
				var self = this;
				return $q(function(resolve, reject){
					if(!pandora){ resolve(null); return; }
					// 1. If pandora has basic value, set value as basic.
					if(angular.isDefined(pandora.basic)){ // *** additional work
						pandora.value = pandora.basic;
						resolve(pandora);
						return;
					}
					// 1. Set pandora as elements's length.
					if(angular.isDefined(pandora.html)){
						// 아래 세줄에서 resolve하는 value는 pandora.value이다. 
						if(pandora.type=='TEXT'){ self.solveTextPandora(pandora).then(function(pandora){ resolve(pandora); }, function(){ reject(); }); }
						else if(pandora.type=='NUMBER'){ self.solveNumberPandora(pandora).then(function(pandora){ resolve(pandora); }, function(){ reject(); }); }
						else if(pandora.type=='COUNT'){ self.solveCountPandora(pandora).then(function(pandora){ resolve(pandora); }, function(){ reject(); }); }
						else if(pandora.type=='QUERY'){ self.solveQueryPandora(pandora).then(function(pandora){ resolve(pandora); }, function(){ reject(); }); }
						else if(pandora.type=='HTML_CHECK'){ resolve(); }
					}
					// 1. Set pandora as status variable.
					else if(angular.isDefined(pandora.status)){ // *** additional work
						pandora.value = grammerService.service.getStatus(pandora.status);
						if(pandora.type=='COUNT'||pandora.type=='NUMBER'){ pandora.value = numberService.makeNumber(pandora.value); }
						else if(pandora.type=='LENGTH'){ pandora.value = pandora.value.length }
						resolve(pandora);
					}
					else if(angular.isDefined(pandora.setting)){ // *** additional work
						pandora.value = grammerService.service.getSetting(pandora.setting);
						if(pandora.type=='COUNT'||pandora.type=='NUMBER'){ pandora.value = numberService.makeNumber(pandora.value); }
						resolve(pandora);
					}
					else if(angular.isDefined(pandora.time)){ // *** additional work
						var date = new Date();
						if(pandora.time=='startday_month') pandora.value = date.getMonth() + 1;
						else if(pandora.time=='startday_date') pandora.value = date.getDate();
						else if(pandora.time=='startmoment_time') pandora.value = date.getTime();
						else if(pandora.time=='current_time') pandora.value = date.getTime();
						resolve(pandora);
					}
					else if(angular.isDefined(pandora.func_name)){
						var grammer_key = grammerService.service.grammer_key;
						var version_key = grammerService.service.version_key;
						var result_array = [];
						grammerGetService.getFunc(grammer_key, version_key, pandora.func_name).then(function(func){
							if(!(func.logs.length>=1)){ pandora.value = func.logs; resolve(pandora); return; }
							// log 형태 -> { target_user_name:status_value, func_key:func_name })
							angular.forEach(func.logs, function(log, log_index){
								result_array.push(log.target_user_name);
								if(log_index+1>=func.logs.length) {
									pandora.value = result_array;
									resolve(pandora);
								}
							});
						});
					}
					else{ resolve(pandora); return; }
				});
			};

			this.comparePandora_compare = function(comparison){
				if(!angular.isDefined(comparison.done)) comparison.done = false;
				if(comparison.type=='=='&&comparison.pandoras[0].value==comparison.pandoras[1].value){ comparison.done = true; }
				else if(comparison.type=='>'&&comparison.pandoras[0].value>comparison.pandoras[1].value){ comparison.done = true; }
				else if(comparison.type=='>='&&comparison.pandoras[0].value>=comparison.pandoras[1].value){ comparison.done = true; }
				else if(comparison.type=='<'&&comparison.pandoras[0].value<comparison.pandoras[1].value){ comparison.done = true; }
				else if(comparison.type=='<='&&comparison.pandoras[0].value<=comparison.pandoras[1].value){ comparison.done = true; }
				else if(comparison.type=='in'&&comparison.pandoras[1].value.indexOf(comparison.pandoras[0].value)!==-1){ comparison.done = true; }
				else if(comparison.type=='!in'&&comparison.pandoras[1].value.indexOf(comparison.pandoras[0].value)==-1){ comparison.done = true; }
				else if(comparison.type=='infinite'){ comparison.done = false; }
				else{ comparison.done = false; }
			};

			this.comparePandora_message = function(comparison){
				if(comparison.message){
					var message = '';
					if(comparison.message){ message += comparison.message+' '; }
					message += comparison.pandoras[0].value+' / '+comparison.pandoras[1].value;
					if(comparison.count_confirming&&comparison.count_confirm&&comparison.count_confirm.value) message += ' (확인중 '+comparison.count_confirming+'/'+comparison.count_confirm.value+' )';
					$rootScope.message('stopstart', message);
				}
				else if(comparison.messages){
					if(comparison.done) $rootScope.message('stopstart', comparison.messages[0]); // 작업 끝났을 때
					else $rootScope.message('stopstart', comparison.messages[1]); // 작업 진행중일 때 
				}
			};

			this.comparePandora_confirm = function(comparison){
				// 여기서 // try 를 증가시키기전에 오차 퍼센트를 계산하여 오차 퍼센트가 설정값보다 같거나(0%로 설정할 수도 있으므로) 작은지부터 확인하고 // try 로 넘어간다
				var self = this;
				return $q(function(resolve, reject){
					if(comparison.pandoras[0].value&&comparison.count_limit&&comparison.count_limit.value&&(comparison.pandoras[0].value>=comparison.count_limit.value)) {
						$rootScope.message('stopstart', '쿼리값이 한계값에 도달했습니다. 검색을 마칩니다.', 2);
						resolve(); return;
					}
					// comparison.perentage_error는 setting들 중에서 perentage_error키에 해당하는 value값이다.
					if(comparison.perentage_error&&comparison.perentage_error.value&&angular.isDefined(comparison.pandoras[1].value)){
						// comparison.pandoras[0].value와 comparison.pandoras[1].value의 차이를
						// 퍼센티지로 표현한 것을 perentage_error_current라는 변수에 담는다.
						var perentage_error_current = (comparison.pandoras[1].value-comparison.pandoras[0].value)/comparison.pandoras[1].value * 100;
						// perentage_error_current(현재 오차 퍼센트)가 comparison.perentage_error값 이상이면 reject 
						if(perentage_error_current>=comparison.perentage_error.value){ reject(); return; }
					}
					if(!(comparison.count_confirm&&comparison.count_confirm.value)){ resolve(); return; }
					if(!angular.isDefined(comparison.pandoras[0].value_before)) comparison.pandoras[0].value_before = comparison.pandoras[0].value;
					if(!angular.isDefined(comparison.pandoras[1].value_before)) comparison.pandoras[1].value_before = comparison.pandoras[1].value;
					if(comparison.start){
						if((comparison.pandoras[0].value_before==comparison.pandoras[0].value)&&(comparison.pandoras[1].value_before==comparison.pandoras[1].value)){
							comparison.count_confirming += 1;
						}
						else{
							comparison.pandoras[0].value_before = comparison.pandoras[0].value;
							comparison.pandoras[1].value_before = comparison.pandoras[1].value;
							comparison.count_confirming = 0;
						}

						if(comparison.count_confirming>comparison.count_confirm.value){ resolve(); return; }
						reject();
					}
					else{
						comparison.start = true;
						comparison.count_confirming = 0;
						reject();
					}
				});
			};

			this.comparePandora = function(comparison){
				var self = this;
				return $q(function(resolve, reject){
					if(comparison&&comparison.count_confirm&&comparison.count_confirm.setting_key)
						comparison.count_confirm.value = getSettingService.getSetting(comparison.count_confirm.setting_key);

					if(comparison&&comparison.perentage_error&&comparison.perentage_error.setting_key)
						comparison.perentage_error.value = getSettingService.getSetting(comparison.perentage_error.setting_key);

					if(comparison&&comparison.count_limit&&comparison.count_limit.setting_key)
						comparison.count_limit.value = getSettingService.getSetting(comparison.count_limit.setting_key);
					// 1. If comparison is empty, resolve.
					// resolve 1
					if(!(comparison&&comparison.pandoras&&_.size(comparison.pandoras)>=1)){ resolve(); return; }
					var promises = [];
					angular.forEach(comparison.pandoras, function(pandora, pandora_index){
						// 2. Push calulate pandora of pandora promise.
						promises.push(self.solvePandora(pandora));
						// comparison.pandoras안의 객체들(2개)을 전부 돌린다.
						if(pandora_index+1==comparison.pandoras.length){
							$q.all(promises).then(function(){
								// 3. Compare.
								// 이 함수는 comparison.done값을 설정하기 위한 함수다.
								self.comparePandora_compare(comparison);
								// 3. Message
								self.comparePandora_message(comparison);
								// 3. Reject when no count_confirm
								if(!(comparison.count_confirm&&angular.isDefined(comparison.count_confirm.value)&&comparison.count_confirm.value>=1)){ 
									// resolve 2
									if(comparison.done){ resolve(); return; }
									reject(); return;
								}
								// 3. Reject before confirm.
								
								// resolve 3
								self.comparePandora_confirm(comparison).then(function(){ resolve(); }, function(){ reject(); });
							}, function(){ reject(); } );
						}
					});
				});
			};

			// action_object.compare, action_delay, action_object.func
			this.actionCompare = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!option){ resolve(); return; }
					$timeout(function(){
						self.comparePandora(option).then(function(){ resolve(); }, function(){ reject(); });
					}, self.actionDelay(action_delay, option.delay_position));
				});
			};

			// Go Function Section
			// action_object.go, action_delay, action_object.func
			this.actionGo = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!option.url){ reject(); return; }
					urlService.getUrlWithExtras(option.url).then(function(url){
						if(option.target_username&&arrayService.element_index) self.actionTargetUsername(option.target_username, action_delay, arrayService.element_index);
						$timeout(function(){
							location.href = url;
							resolve();
							// return;
						}, self.actionDelay(action_delay, option.delay_position));
					}, function(){
						reject();
					});
				});
			};

			//  Input Function Section
			//  action_object.input, action_delay, action_object.func
			this.actionInput = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					var new_review_boolean = getSettingService.getSetting('boolean_review_by_username');
					if(!option.html){ resolve(); return; }
					if(option.target) self.actionSetParentElementOnHTML(option.html);
					htmlService.getElement(option.html, option.random).then(function(element){
						$(element).simulate("focus");
						// [this.texts.review]
						if(option.texts&&option.texts.length>=1){
							// option.texts[0]이 배열이 아닐 경우(option.texts 자체가 배열) --> option.texts를 작업하면 된다.
							if(!angular.isArray(option.texts[0])){
								if(!new_review_boolean) option.texts[0].value = getSettingService.getSetting(option.texts[0].setting_key, option.texts[0].method);
								else option.texts[0].value = '@' + grammerService.target_user_name + getSettingService.getSetting('list_reviews_on_user_name', 'getRandom');
								$timeout(function(){
									$(element).simulate("key-sequence", { sequence:option.texts[0].value } );
									// $(element).trigger('textarea');
									$(element).trigger('input');
									resolve();
								}, self.actionDelay(action_delay, option.delay_position));
							}
							// option.texts[0]이 배열인 경우 --> option.texts[0]를 작업하면 된다.(앞으로 이럴 경우가 없다.)
							else if(angular.isArray(option.texts[0])){
								option.texts[0].value = getSettingService.getSetting(option.texts[0].setting_key, option.texts[0].method);
								$timeout(function(){
									$(element).simulate("key-sequence", { sequence:option.texts[0].value[Math.floor(Math.random()*option.texts[0].value.length)] } );
									$(element).trigger('input');
									resolve();
								}, self.actionDelay(action_delay, option.delay_position));
							}
						}
						else if(option.type){
							var text;
							if(option.type=='EMAIL') text = faker.internet.email();
							else if(option.type=='FULLNAME') text = faker.name.findName();
							else if(option.type=='USERNAME') text = faker.internet.userName();
							else if(option.type=='PASSWORD') text = faker.internet.password();
							if(_.size(text)){
								$timeout(function(){
									$(element).simulate("key-sequence", { sequence:text } );
									$(element).trigger('input');
									resolve();
								}, self.actionDelay(action_delay, option.delay_position));
							}
							else{
								reject();
							}
						}
						else{
							$rootScope.message('stopstart', '입력할 문자가 없습니다');
							reject();
						}
					}, function(){
						resolve();
					});
				});
			};

			// Remove Function Section 
			this.actionMessage = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					$timeout(function(){
						$rootScope.message(action_func, option.text);
						resolve();
					}, self.actionDelay(action_delay, option.delay_position));
				});
			};

			// Remove Function Section 
			this.actionRemove = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!option.html){ resolve(); return;}
					if(option&&option.all){
						htmlService.getElements(option.html).then(function(elements){
							$timeout(function(){
								angular.forEach(elements, function(element, element_index){
									element.remove();
									if(element_index+1>=elements.length) resolve();
								});
							}, self.actionDelay(action_delay, option.delay_position));
						}, function(){
							resolve();
						});
					}
					else{
						htmlService.getElement(option.html, option.random).then(function(element){
							$timeout(function(){
								element.remove(); resolve();
							}, self.actionDelay(action_delay, option.delay_position));
						}, function(){
							resolve();
						});
					}
				});
			};

			this.actionOnCondition = function(option){
				var self = this;
				return $q(function(resolve, reject){
					var promises = [];
					angular.forEach(option.conditions, function(condition, condition_index){
						promises.push(self.solvePandora(condition));
						if(condition_index+1>=option.conditions.length){
							$q.all(promises).then(function(){
								if(option.conditions[0].value==option.conditions[1].value) resolve();
								else reject();
							});
						}
					});
				});
			};

			this.actionSaveSub = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					self.solvePandora(option.pandoras[0]).then(function(){
						if(option.pandoras[1].status){
							grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, option.pandoras[1].status, option.pandoras[0].value).then(function(status){
								resolve();
							});
						}
					}, function(){ reject(); });
				});
			};

			// Save Function Section
			// action_object.save, action_delay, action_object.func
			this.actionSave = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!(option.pandoras&&_.size(option.pandoras)>=1)){ reject(); }
					$timeout(function(){
						if(!(option&&option.conditions)){
							self.actionSaveSub(option, action_delay, action_func).then(function(){
								resolve();
							}, function(){
								reject();
							});
						}
						else{
							self.actionOnCondition(option).then(function(){
								// 조건에 만족했을 때
								self.actionSaveSub(option, action_delay, action_func).then(function(){
									resolve();
								}, function(){
									reject();
								});
							}, function(){
								// 조건에 만족하지 못했을 때
								resolve();
							});
							// self.solvePandora(option.condition[0]).then(function(first_pandora_value))
						}
					}, self.actionDelay(action_delay, option.delay_position));
				});
			};

			// Concat Function Section
			this.actionConcat = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!(option.pandoras&&_.size(option.pandoras)>=1)){ reject(); }
					$timeout(function(){
						self.solvePandora(option.pandoras[0]).then(function(){
							if(option.pandoras[1].status){
								grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, option.pandoras[1].status).then(function(status_get){
									var status_will_be_set = status_get.concat(option.pandoras[0].value);
									grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, option.pandoras[1].status, status_will_be_set).then(function(status){
										resolve();
									});
								});
							}
						}, function(){ reject(); });
					}, self.actionDelay(action_delay, option.delay_position));
				});
			};

			// Scroll Function Section
			// actionScroll_execute에서 사용할 수 있는 재료(offsetTop의 경우)
			// 1. element.offsetTop
			// 2. element.offsetParent.offsetTop
			this.actionScroll_execute = function(element, direction, interval, count, element_parent, body){
				if(count&&(count%5==0)){ 
					interval = numberService.getRandomOfFloatNumber(count);
				}
				else{ 
					interval = numberService.getRandomOfFloatNumber(grammerService.service.getStatus('count'));
				}
				if(direction=='UP'){ 
					$(element).animate({scrollTop: 0}, interval*1000, 'linear'); 
				}
				else if(direction=='OFFSETTOP'){
					if(grammerService.service.grammer_key=="instagrammer"&&grammerService.service.version_key=="unfollow"){
						$(element_parent).animate({scrollTop: element.offsetTop}, interval*1000, 'linear');
					} 
					else if(grammerService.service.grammer_key=="instagrammer"&&grammerService.service.version_key=="myfollower"){
						$('body').animate({scrollTop: element.offsetTop}, interval*1000, 'linear'); 
					}
					else if(grammerService.service.grammer_key=="facegrammer"&&grammerService.service.version_key=="newsfeed"){
						$('body').animate({scrollTop: element.offsetTop}, interval*1000, 'linear');
					}
					else if(grammerService.service.grammer_key=="facegrammer"&&(grammerService.service.version_key=="page"||grammerService.service.version_key=="newfriend")&&body){
						$('body').animate({scrollTop: element.offsetParent.offsetTop+330}, interval*1000, 'linear'); 
					}
					else if(grammerService.service.grammer_key=="facegrammer"&&(grammerService.service.version_key=="page"||grammerService.service.version_key=="newfriend")&&!body){
						$(element_parent).animate({scrollTop: element.offsetTop}, interval*1000, 'linear');
					}
					else{
						$('body').animate({scrollTop: element.offsetTop+($window.innerHeight*0.155)}, interval*1000, 'linear'); 
					}
				}
				// direction=='DOWN'
				else {
					$(element).animate({scrollTop: element.scrollHeight}, interval*1000, 'linear'); 
				}
			};

			this.actionScroll_check_count = function(count, count_limit){
				var self = this;
				return $q(function(resolve, reject){
					// 1. count_limit 이 없을 때 무조건 성공
					if(!angular.isNumber(count_limit)){ resolve(); return; }
					// 2. count_limit 이 있을 때 검증
					else{ 
						if(count>=count_limit) resolve();
						else reject();
					}
				});
			};

			// 이 함수에 문제가 있다.(어떠한 경우에 스크롤이 멈추고 진행이 안되는 문제)
			// option(action_object.scroll), action_delay, element, count
			this.actionScroll_interval = function(option, action_delay, element, count){
				var self = this;
				return $q(function(resolve, reject){
					// 1. interval Service
					var intervalPromise = $interval(function(){
						var promises = [];
						// if(option&&option.count&&option.comparison){
						if(option&&(option.count||option.comparison)){
							// 3-1. Check count.
							// actionScroll_check_count에 들어가는 option.count는 count_limit의 의미를 지닌다.
							promises.push(self.actionScroll_check_count(count, option.count));
							// 3-2. Check comparison.
							promises.push(self.comparePandora(option.comparison));
						}
						$q.all(promises).then(function(){
							// 4-1. Stop interval.
							// Error first possibility
							//  -> 아래 if문은 무조건 들어갈 수 밖에 없는데 그럼 멈추게 된다.
							//  그럼 그에 해당하는 원인은 actionScroll_check_count, comparePandora 두 함수가 예상과는 달리
							//  조금 일찍 둘다 resolve가 된 경우. 
							//  여기선 comparePandora에서 일찍 resolve가 된 경우밖에 없다.
							if(angular.isDefined(option.comparison)||angular.isDefined(option.count)){
								if(angular.isDefined(option.comparison)){
									grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, option.comparison.pandoras[1].status, option.comparison.pandoras[0].value).then(function(status_value){
										$interval.cancel(intervalPromise); $(element).stop(); resolve(); return;
									});
								}
								else {
									$interval.cancel(intervalPromise); $(element).stop(); resolve(); return;
								}
							}
							if(option.click){ self.actionClick(option.click, 0); }
							self.actionScroll_execute(element, option.direction, option.interval, count, null, option.body);
						}, function(){
							// option.click이 있을 때 actionClick을 실행시키기 위하여 잠시 scroll을 stop한다.
							$(element).stop();
							// 4-2. Continue interval.
							count += 1;
							if(option.click){ self.actionClick(option.click, 0); }
							self.actionScroll_execute(element, option.direction, option.interval, count, null, option.body);
						});
					}, option.interval*1000);

					// 2. Stop scroll if time is over.
					// Error second possibility
					//	-> action_delay가 터무니없이 낮게 들어올 수 있다는 점 
					if(numberService.isPositive(action_delay)){
						$timeout(function(){
							if(angular.isDefined(option.comparison)){
								grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, option.comparison.pandoras[1].status, option.comparison.pandoras[0].value).then(function(status_value){
									$interval.cancel(intervalPromise); $(element).stop(); resolve(); return;
								});
							}
							else {
								$interval.cancel(intervalPromise); $(element).stop(); resolve(); return;
							}
						}, self.actionDelay(action_delay, 100));
					}
				});
			};

			// action_object.scroll, action_delay, action_object.func
			this.actionScroll = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					// 1. If html is blank, set html with body.
					if(!option.html) option.html = {tag:'body'};
					htmlService.getElement(option.html, option.random).then(function(element){
						// count 초기화만 시켜놓는다.
						var count = 1;
						// 2. Set default interval as action_delay.
						if(!numberService.isPositive(option.interval)) option.interval=action_delay;
						// 2. Scroll just one time.
						self.actionScroll_execute(element, option.direction, option.interval, count, null, option.body);
						// 2. Scroll just one time.
						if(option.click){ self.actionClick(option.click, 0); }
						// 2. Scroll periodically.
						// actionScroll_interval에서 count를 작업시마다 +1 한다.
						self.actionScroll_interval(option, action_delay, element, count).then(function(){ resolve(); }, function(){ reject(); });
					}, function(){ 
						// $(element).stop();
						resolve(); 
					});
				});
			};

			// Log Function Section
			this.actionSet_func_log = function(action_object, func_name){
				return $q(function(resolve, reject){
					if(!func_name){ resolve(); return; }
					if(!(action_object&&action_object.log_push)){ resolve(); return; }
					grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'target_user_name').then(function(status_value){
						grammerGetService.getFunc(grammerService.service.grammer_key, grammerService.service.version_key, func_name).then(function(func_value){
							if(!(func_value&&func_value.logs)){ resolve(); return; }
							func_value.logs.push({ target_user_name:status_value, func_key:func_name });
							grammerSetService.setFunc(grammerService.service.grammer_key, grammerService.service.version_key, func_name, func_value).then(function(func_value){
								resolve();
							}, function(){
								reject();
							});
						});
					}, function(){
						grammerGetService.getFunc(grammerService.service.grammer_key, grammerService.service.version_key, func_name).then(function(func_value){
							if(!(func_value&&func_value.logs)){ resolve(); return; }
							func_value.logs.push({ target_user_name:grammerService.target_user_name, func_key:func_name });
							grammerSetService.setFunc(grammerService.service.grammer_key, grammerService.service.version_key, func_name, func_value).then(function(func_value){
								resolve();
							}, function(){
								reject();
							});
						});
					});
				});
			};

			// Set Function Section
			this.actionSetParentElementOnHTML = function(html){
				// html가 객체형식일 경우
				if(!angular.isArray(html)){ html.parent_element = grammerService.service.target; return; }
				// html가 배열형식일 경우
				angular.forEach(html, function(html_object, html_object_index){
					html_object.parent_element = grammerService.service.target;
					if(html_object_index+1>=html.length) return;
				});
			};

			// Status Function Section
			this.actionStatus_status = function(status){
				return $q(function(resolve, reject){
					if(!status){ resolve(); return; }
					var status_key;
					if(status&&status.increase) status_key = status.increase;
					else if(status&&status.decrease) status_key = status.decrease;
					else if(status&&status.set) status_key = status.set;
					// status_key 는 'count'같은 놈들이다.
					grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, status_key).then(function(status_value){
						if(!_.isNumber(status_value)) {
							status_value = 0;
						}
						if(status.increase) status_value += 1;
						else if(status.decrease) status_value -= 1;
						else if(status.set) {
							if(status.value=='target_user_name') status_value = grammerService.target_user_name;
							else status_value = status.value;
						}
						grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, status_key, status_value).then(function(status_value){
							resolve();
						}, function(){
							reject();
						});
					}, function(){
						var status_value;
						if(status.set) {
							if(status.value=='target_user_name') status_value = grammerService.target_user_name;
							else status_value = status.value;
						}
						else status_value = 0;
						if(status.increase) status_value += 1;
						else if(status.decrease) status_value -= 1;
						grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, status_key, status_value).then(function(status_value){
							resolve();
						}, function(){
							reject();
						});
					});
				});
			};

			this.actionStatus_statuses = function(statuses){
				var self = this;
				return $q(function(resolve, reject){
					if(!(_.size(statuses)>=1)){ resolve(); return; }
					var promises = [];
					var statuses_index = 0;
					var execute = function(){
						self.actionStatus_status(statuses[statuses_index]).then(function(){
							statuses_index += 1;
							if(statuses_index<statuses.length) execute();
							else resolve();
						}, function(){
							reject();
						});
					};
					execute();
				});
			};

			this.actionStatus = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!(option.statuses||option.set)){ resolve(); return; }
					$timeout(function(){
						if(option&&option.statuses) self.actionStatus_statuses(option.statuses).then(function(){ resolve(); }, function(){ reject(); });
						else if(option&&option.set) {
							self.actionStatus_status(option).then(function(){ resolve(); }, function(){ reject(); });
						}
					}, self.actionDelay(action_delay, 50));
				});
			};

			// Target Function Section
			this.removeBackGroundColorAll = function(){
				var self = this;
				return $q(function(resolve, reject){
					htmlService.getElements({ classes:{list:['b-be1']} }).then(function(elements){
						if(!(elements.length>=1)) {
							resolve(); return;
						}
						angular.forEach(elements, function(element, element_index){
							element.classList.remove('b-be1');
							element.background = null;
							if(elements.length==element_index+1){
								resolve();
							} 
						});
					}, function(){
						resolve();
					});
				});
			};
			 
			// action_object.target, action_delay, action_object.func
			this.actionTarget = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					if(!option.set){
						self.removeBackGroundColorAll().then(function(){
							if(grammerService.service&&grammerService.service.target) grammerService.service.target = null;
							resolve(); return;
						}, function(){
							if(grammerService.service&&grammerService.service.target) grammerService.service.target = null;
							resolve(); return;
						});
					}
					else {
						htmlService.getElements(option.html).then(function(elements){
							if(option.sort) elements = $filter('orderBy')(elements, '+offsetTop');
							self.solvePandora(option.index).then(function(index){
								// target의 index 객체가 status가 아닌 basic값으로 들어갈 때를 대비한 로직
								if(!angular.isNumber(index)) index = index.value; 
								if(elements&&elements[index]){
									grammerService.service.target = elements[index];
									if(option.target_username) self.actionTargetUsername(option.target_username, action_delay, index);
									// scroll section
									if(option.scroll&&option.scroll.value) {
										if(option.scroll.parent_html){
											htmlService.getElement(option.scroll.parent_html).then(function(parent_element){
												self.actionScroll_execute(grammerService.service.target, 'OFFSETTOP', 2, null, parent_element, option.body);
											});
										}
										else{
											self.actionScroll_execute(grammerService.service.target, 'OFFSETTOP', 2, null, arrayService.target_parent, option.body);
										}		
										self.actionClick(option.scroll);
									}
									$(grammerService.service.target).simulate('focus');
									grammerService.service.target.classList.add('b-be1');
									// user_name을 crawl하는 이유는 댓글을 달기 위함이다.
									if(option.crawl_user_name&&option.crawl_user_name.value){
										if(option.crawl_user_name&&option.crawl_user_name.target) option.crawl_user_name.target.parent_element = grammerService.service.target;
										htmlService.getElement(option.crawl_user_name.target).then(function(element){
											htmlService.username = element.innerHTML;
											resolve();
										});
									}
									else{
										resolve();
									}
								}
								else{ reject(); }
							}, function(){ reject(); });
						});
					}
				});
			};

			// Post Function Section
			// 1. url: 댓글 포스팅할 url
			// 2. data: 포스팅할 댓글
			// 3. headers: 
			this.actionPost_post = function(url, data, headers){
				var self = this;
				return $q(function(resolve, reject){
					// jquery Ajax method
					// Ajax method : Ajax is the art of exchanging data with a server, and update parts of a web page - without reloading the whole page.
					$.ajax({
						type: "POST",
						url: url,
						data: data,
						beforeSend: function(xhr){
							angular.forEach(headers, function(header, header_index){
								if(angular.isDefined(header.key)&&angular.isDefined(header.value)) xhr.setRequestHeader(header.key, header.value);
							});
						},
						success : function(data){ resolve(); },
						error : function(request, status, error){ reject(); }
					});
					// 1. beforeSend: A function to run before the request is sent
					// 2. success: A function to be run when the request succeeds
					// 3. error: A function to run if the request fails
					// xhr: xmlHttpRequest Object를 말함
					// xhr을 이용하여서 사용할 수 있는 Method References를 보려면 http://www.w3schools.com/xml/dom_http.asp 참고
				});
			};

			// option의 형태: post:{ url:this.urls.review, data:{ comment_text: this.texts.review }, headers:[{key:'x-instagram-ajax', value:1}, {key:'x-csrftoken', cookie:'csrftoken' }] }
			// csrftokens의 형태: csrftoken값들의 배열.
			this.actionPost_execute = function(option, csrftokens){
				var self = this;
				return $q(function(resolve, reject){
					var new_review_boolean = getSettingService.getSetting('boolean_review_by_username');
					urlService.getUrlWithExtras(option.url).then(function(url){
						var csrftoken_index = 0;
						var execute = function(){
							if(csrftokens){
								$filter('filter')(option.headers, {cookie:'csrftoken'})[0].value = csrftokens[csrftoken_index];
								csrftoken_index += 1;
							}
							// 1. option.data.comment_text가 배열인 경우 (이런 경우는 없을 것이다.)
							if(angular.isArray(option.data.comment_text)){
								var temporary_option_data = { comment_text: arrayService.getRandom(option.data.comment_text) };
								self.actionPost_post(url, temporary_option_data, option.headers ).then(function(){ resolve(); }, function(){ 
									if(csrftokens&&csrftoken_index==csrftokens.length-1){ execute(); }
									else reject();
								});
							}
							// 2. option.data.comment_text가 배열이 아닌 경우
							else{
								var temporary_text;
								if(!new_review_boolean) temporary_text = getSettingService.getSetting(option.data.comment_text.setting_key, option.data.comment_text.method);
								else temporary_text = '@' + grammerService.target_user_name + ' ' + getSettingService.getSetting('list_reviews_on_user_name', 'getRandom');
								var temporary_option_data = { comment_text: temporary_text };
								self.actionPost_post(url, temporary_option_data, option.headers ).then(function(){ resolve(); }, function(){ 
									if(csrftokens&&csrftoken_index==csrftokens.length-1){ execute(); }
									else reject();
								});
							}
						};
						execute();
					}, function(){ reject(); });
				});
			};

			// action_object.post, action_delay, action_object.func
			this.actionPost = function(option, action_delay){
				var self = this;
				return $q(function(resolve, reject){
					$timeout(function(){
						// 1. option.headers 배열에 cookie속성 값이 csrftoken인 객체가 있는지 csrftoken_headers에 담아서 판별한다.
						var csrftoken_headers = $filter('filter')(option.headers, {cookie:'csrftoken'});
						// 2. self.actionPost_execute를 통해 댓글을 포스트 한다.
						// 2-1. option.headers 배열에 1번에서 추출한 객체가 없다면 actionPost_execute를 통해 작업한다.
						if(!(csrftoken_headers&&csrftoken_headers.length>=1)){ self.actionPost_execute(option).then(function(){ resolve(); }, function(){ reject(); }); }
						// 2-2. option.headers 배열에 1번에서 추출한 객체가 있다면 cookieService.readCsrftokens 메서드를 활용해서 댓글 달기를 한다.
						else{
							cookieService.readCsrftokens().then(function(csrftokens){
								self.actionPost_execute(option, csrftokens).then(function(){ resolve(); }, function(){ reject(); });
							}, function(){ self.actionPost_execute(option).then(function(){ resolve(); }, function(){ reject(); }); });
						}
					}, self.actionDelay(action_delay, 100));
				});
			};

			this.actionGoPage = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					$timeout(function(){
						var service = grammerService.service;
						// grammerGoService.goPage(service.pages.start[0]);
						grammerGoService.goPage(service.pages.start[option.page_index]);
					}, self.actionDelay(action_delay, 100));
				});
			};

			this.actionUnfollowOnPost_execute = function(elFollow, elUnfollow, memberNo, followType, name){
				var self = this;
				return $q(function(resolve, reject){
					$.ajax({
		        url: "/my/unFollow.nhn",
		        async: true,
		        method: "post",
		        data: {
	            followType: followType,
	            followNo: memberNo
		        },
		        dataType: "json",
		        success: function(json) {
		        	resolve();
		        },
		        error: function() {
	            reject();
		        }
			    });
				});
			};

			this.actionUnfollowOnPost = function(action_delay){
				var self = this;
				return $q(function(resolve, reject){
					$timeout(function(){
						self.solvePandora({ status:'elUnfollow' }).then(function(elUnfollow){
							self.solvePandora({ status:'elFollow' }).then(function(elFollow){
								self.solvePandora({ status:'memberNo' }).then(function(memberNo){
									self.actionUnfollowOnPost_execute(elFollow, elUnfollow, memberNo, 'PERSON', grammerService.target_user_name).then(function(){
										resolve();
									}, function(){
										reject();
									});
								});
							});
						});
					}, self.actionDelay(action_delay, 100));
				});
			};

			this.actionNaverBlogSubmit = function(action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					$timeout(function(){
						grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'target_user_name').then(function(status_value){
							var b = document.createElement("form");
							b.id = "addBuddyPopupForm";
							document.body.appendChild(b);
							b.target = "_self";
							b.method = "post";
							b.action = "http://blog.naver.com/BuddyAdd.nhn?blogId=" + status_value;
							b.submit();
						}, function(){
							reject();
						});
					}, self.actionDelay(action_delay, 100));
				});
			};

			this.actionSubtractSave = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					$timeout(function(){
						// first_pandora_value --> 피뺄셈 값
						self.solvePandora(option.pandoras[0]).then(function(first_pandora_value){
							// second_pandora_value --> 뺄셈 값
							self.solvePandora(option.pandoras[1]).then(function(second_pandora_value){
								var result_value = first_pandora_value - second_pandora_value;
								grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, option.pandoras[2].status, result_value).then(function(status){
									resolve();
								}, function(){
									reject();
								});
							});
						});
					}, self.actionDelay(action_delay, 100));
				});
			};

			this.actionManageFollowingList = function(following_list, corresponding_index){
				var self = this;
				return $q(function(resolve, reject){
					var following_length_before = following_list.length;
					following_list.splice(corresponding_index, 1);
					var following_length_after = following_list.length;
					if(following_length_before-1==following_length_after) resolve();
					else reject();
				});
			};

			this.actionExcludeSub = function(follower_list, following_list, follower_index){
				var self = this;
				return $q(function(resolve, reject){
					var corresponding_index = following_list.indexOf(follower_list[follower_index]);
					if(corresponding_index>=0) {
						self.actionManageFollowingList(following_list, corresponding_index).then(function(){
							if(follower_index+1>=follower_list.length) resolve();
							else reject();
						}, function(){
							if(follower_index+1>=follower_list.length) resolve();
							else reject();
						});
					}
					else {
						if(follower_index+1>=follower_list.length) resolve();
						else reject();
					}
				});
			};

			this.actionExclude = function(option, action_delay, index){
				var self = this;
				return $q(function(resolve, reject){
					if(!(option.pandoras&&_.size(option.pandoras)>=1)){ reject(); }
					// first_pandora_value --> 팔로워 리스트
					self.solvePandora(option.pandoras[0]).then(function(first_pandora_value){
						// second_pandora_value --> 팔로잉 리스트
						self.solvePandora(option.pandoras[1]).then(function(second_pandora_value){
							var follower_index = 0;
							var selfCarryOut = function(){
								self.actionExcludeSub(first_pandora_value, second_pandora_value, follower_index).then(function(){
									// first_pandora_value : follower_list, second_pandora_value : following_list
									grammerSetService.removeStatus(grammerService.service.grammer_key, grammerService.service.version_key, option.pandoras[1].status).then(function(){
										grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, option.pandoras[1].status, second_pandora_value).then(function(status){
											resolve();
										});
									});
								}, function(){
									follower_index += 1;
									selfCarryOut();
								});
							};
							selfCarryOut();
						});
					});
				});
			};

			this.actionCrawlIndexOnTargetUsername = function(element, elements){
				var self = this;
				return $q(function(resolve, reject){
					var corresponding_index;
					angular.forEach(elements, function(element_ingredient, element_ingredient_index){
						if(element.innerHTML==element_ingredient.innerHTML){
							corresponding_index = element_ingredient_index;
							resolve(corresponding_index);
						}
					});
				});
			};

			// log기록을 위한 target으로 설정된 유저의 이름을 grammerService.target_user_name에 저장해 두는 로직
			this.actionTargetUsername = function(option, action_delay, index){
				var self = this;
				return $q(function(resolve, reject){
					var element;
					if(!option.html){ resolve(); return; }
					htmlService.getElements(option.html).then(function(elements){
						if(!(option&&option.random)){
							if(!index) {
								element = elements[0];
								if(option.type=='outerHTML') grammerService.target_user_name = element.outerHTML;
								else grammerService.target_user_name = element.innerHTML;
							}
							else {
								element = elements[index];
								if(option.type=='outerHTML') grammerService.target_user_name = element.outerHTML;
								else grammerService.target_user_name = element.innerHTML;
							}
						}
						else{
							element = elements[Math.floor(Math.random()*elements.length)];
							if(option.type=='outerHTML') grammerService.target_user_name = element.outerHTML;
							else grammerService.target_user_name = element.innerHTML;
						}
						if(option.html.split&&option.html.split.params&&_.size(option.html.split.params)>=1)
							grammerService.target_user_name = stringService.getSplit(grammerService.target_user_name, option.html.split.params[0], option.html.split.params[1]);
						if(option&&option.crawl_index) {
							var corresponding_index;
							self.actionCrawlIndexOnTargetUsername(element, elements).then(function(corresponding_index){
								var status_option = { set:'element_index', value:corresponding_index };
								self.actionStatus(status_option, 1, null);
							});
						}
						resolve();
					});
				});
			};

			this.actionOnPopup = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					$rootScope.booleans[option.variable] = option.value;
					$rootScope.$on('useUnfollowNew', function(event){
						$rootScope.booleans[option.variable] = !option.value;
						resolve();
					});
					$rootScope.$on('useUnfollowPast', function(event){
						$rootScope.booleans[option.variable] = !option.value;
						grammerStopService.stop();
						// reject();
					});
				});
			};

			this.actionMyNameCheck = function(option, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					// identification--> 구동하는 내 이름
					// user_name--> 상대방 이름
					var identification = $rootScope.values.identification;
				 	var user_name = grammerService.target_user_name;
					if(identification!=user_name) resolve();
					else reject();
				});
			};

			this.actionLogPush = function(action_object, action_delay, action_func){
				var self = this;
				return $q(function(resolve, reject){
					$timeout(function(){
						resolve();
						// self.actionSet_func_log(action_object, action_func).then(function(){
						// 	resolve();
						// }, function(){
						// 	reject();
						// });
					}, self.actionDelay(action_delay));
				});
			};

			this.actionReload = function(){
				var self = this;
				return $q(function(resolve, reject){
					location.reload();
					resolve();
				});
			};

			this.actionResolve = function(){
				var self = this;
				return $q(function(resolve, reject){
					resolve();
				});
			};

			this.actionStop = function(){
				var self = this;
				return $q(function(resolve, reject){
					grammerStopService.stop();
				});
			};

			this.action = function(action_object, action_delay){
				var self = this;
				return $q(function(resolve, reject){
					var timeoutPromise = timeoutService.delayPromise(action_delay);
					var actionPromise;
					if(!action_object.func) action_object.func = 'stopstart';
					if(action_object.action=='CLICK') actionPromise = self.actionClick(action_object.click, action_delay, action_object.func);
					else if(action_object.action=='MULTI_CLICK') actionPromise = self.actionMultiClick(action_object.click, action_delay, action_object.func);
					else if(action_object.action=='CHANGE') actionPromise = self.actionChange(action_object.change, action_delay, action_object.func);
					else if(action_object.action=='CHECK') actionPromise = self.actionCheck(action_object.check, action_delay, action_object.func);
					else if(action_object.action=='COMPARE') actionPromise = self.actionCompare(action_object.compare, action_delay, action_object.func);
					else if(action_object.action=='GO') actionPromise = self.actionGo(action_object.go, action_delay, action_object.func);
					else if(action_object.action=='INPUT') actionPromise = self.actionInput(action_object.input, action_delay, action_object.func);
					else if(action_object.action=='CONDITION') actionPromise = self.actionOnCondition(action_object.condition);
					else if(action_object.action=='MESSEAGE') actionPromise = self.actionMessage(action_object.message, action_delay, action_object.func);
					else if(action_object.action=='REMOVE') actionPromise = self.actionRemove(action_object.remove, action_delay, action_object.func);
					else if(action_object.action=='SAVE') actionPromise = self.actionSave(action_object.save, action_delay, action_object.func);
					else if(action_object.action=='CONCAT') actionPromise = self.actionConcat(action_object.concat, action_delay, action_object.func);
					else if(action_object.action=='SCROLL') actionPromise = self.actionScroll(action_object.scroll, action_delay, action_object.func);
					else if(action_object.action=='STATUS') actionPromise = self.actionStatus(action_object.status, action_delay, action_object.func);
					else if(action_object.action=='TARGET') actionPromise = self.actionTarget(action_object.target, action_delay, action_object.func);
					else if(action_object.action=='POST') actionPromise = self.actionPost(action_object.post, action_delay, action_object.func);
					else if(action_object.action=='GO_PAGE') actionPromise = self.actionGoPage(action_object.go_page, action_delay, action_object.func);
					else if(action_object.action=='UNFOLLOW_ON_POST') actionPromise = self.actionUnfollowOnPost(action_delay);
					else if(action_object.action=='NAVER_BLOG_SUBMIT') actionPromise = self.actionNaverBlogSubmit(action_delay, action_object.func);
					else if(action_object.action=='SUBTRACT_SAVE') actionPromise = self.actionSubtractSave(action_object.subtract_save, action_delay, action_object.func);
					else if(action_object.action=='EXCLUDE') actionPromise = self.actionExclude(action_object.exclude, action_delay, action_object.func);
					else if(action_object.action=='TARGET_USERNAME') actionPromise = self.actionTargetUsername(action_object.target_username, action_delay);
					else if(action_object.action=='ONPOPUP') actionPromise = self.actionOnPopup(action_object.on_popup, action_delay, action_object.func);
					else if(action_object.action=='MYNAME_CHECK') actionPromise = self.actionMyNameCheck(action_object.my_name_check, action_delay, action_object.func);
					else if(action_object.action=='LOG_PUSH') actionPromise = self.actionLogPush(action_object, action_delay, action_object.func);
					else if(action_object.action=='RELOAD') actionPromise = self.actionReload();
					else if(action_object.action=='RESOLVE') actionPromise = self.actionResolve();
					else if(action_object.action=='STOP') actionPromise = self.actionStop();
					else{ alert('아직 등록되지 않은 명령입니다. 그래머에게 이 소식을 알려주세요! 010-9488-1462'); reject(); }
					actionPromise.then(function(){
						timeoutPromise.then(function(){
							resolve();
						});
					}, function(){
						reject();
					});
				});
			};

		});

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('grammerStopService', function($rootScope, $location, $filter, arrayService, grammerGetService, grammerSetService){

			this.stop = function(){
				grammerGetService.getGrammerKeyValueWithUrl().then(function( grammer_pair ){
					grammerGetService.getPlayOfVersion(grammer_pair.key, grammer_pair.value.version_key).then(function(play){
						if(play==false){
							grammerGetService.getStatuses(grammer_pair.key, grammer_pair.value.version_key).then(function(statuses){
								var text = '';
								if(_.gt(statuses.like_count,0)||_.gt(statuses.review_count,0)||_.gt(statuses.follow_count,0)||_.gt(statuses.friend_count,0)||_.gt(statuses.unfollow_count,0)){	
									text += $filter('capitalize')(grammer_pair.key)+' 작업 : '+statuses.count+' 번<br/><br/>';
									if(statuses.starttime&&statuses.endtime){ text += ' ' + $filter('date')(new Date(statuses.starttime), 'hh시 mm분')+'~'+$filter('date')(new Date(statuses.endtime), 'hh시 mm분')+'<br/>'; }
									if(_.gt(statuses.like_count,0)) text += '좋아요 작업 : '+statuses.like_count+' 번<br/>'; 
									if(_.gt(statuses.review_count,0)) text += '댓글 작업 : '+statuses.review_count+' 번<br/>'; 
									if(_.gt(statuses.follow_count,0)) text += '팔로우 작업 : '+statuses.follow_count+' 번<br/>'; 
									if(_.gt(statuses.friend_count,0)) text += '친구추가 작업 : '+statuses.friend_count+' 번<br/>'; 
									if(_.gt(statuses.unfollow_count,0)) text += '언팔로우 작업 : '+statuses.unfollow_count+' 번<br/>';
									if(_.gt(statuses.up_count,0)) text += 'UP 버튼 클릭 작업 : '+statuses.up_count+' 번<br/>';
									if(_.gt(statuses.invite_count,0)) text += '초대 작업 : '+statuses.invite_count+' 번<br/>';
									if(_.gt(statuses.review_like_count,0)) text += '댓글 좋아요 작업 : '+statuses.review_like_count+' 번<br/>';
									if(_.gt(statuses.friend_invite_count,0)) text += '친구 초대 작업 : '+statuses.friend_invite_count+' 번<br/>';
									if(_.gt(statuses.empathize_count,0)) text += '공감 작업 : '+statuses.empathize_count+' 번<br/>';
									if(_.gt(statuses.neighborhood_count,0)) text += '서로이웃추가 작업 : '+statuses.neighborhood_count+' 번<br/>';
								}
								else{
									text += arrayService.getRandom(arrayService.famoussayings);
								}
								if(_.size(text)) $rootScope.message('stopstart', text );
							});
						}
						// play===true or play x
						else{
							grammerSetService.setPlayOfVersion(grammer_pair.key, grammer_pair.value.version_key, false).then(function(){
								location.href = grammer_pair.value.url;
							});
						}
					});
				});
			};

		});

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('grammerStartService', function($rootScope, $q, $timeout, $filter, timeoutService, getSettingService, htmlService, grammerService, grammerCheckService, grammerStopService, grammerGetService, grammerSetService, grammerActionService, grammerGoService){

			// Cancel Function Section
			this.cancelTimeoutPromise = function(timeoutPromises){
				return $q(function(resolve, reject){
					$timeout(function(){
						if(timeoutPromises&&_.size(timeoutPromises)>=1){
							angular.forEach(timeoutPromises, function(timeoutPromise, timeoutPromise_index){ 
								$timeout.cancel(timeoutPromise);
								if(timeoutPromises.length<=timeoutPromise_index+1) resolve();
							});
							return;
						}
						else { resolve(); }
					}, 1000);
				});
			};

			// Check Function Section
			this.checkChangeOfDay = function(checked_month, checked_date){
				var momentaryDate = new Date();
				var momentary_month = momentaryDate.getMonth() + 1;
				var momentary_date = momentaryDate.getDate();
				if(checked_date&&checked_month&&(momentary_date>checked_date)||(momentary_month>checked_month)) return true;
				else return false;
			};	

			this.actionCheckChangeOfDay = function(){
				var self = this;
				return $q(function(resolve, reject){
					self.getStartDayTimes().then(function(startday_times){
						self.getWorkEndTimes().then(function(work_end_times){
							if(work_end_times.work_end_month&&work_end_times.work_end_date){
								if(self.checkChangeOfDay(work_end_times.work_end_month, work_end_times.work_end_date)
								||self.checkChangeOfDay(startday_times.startday_month, startday_times.startday_date)) resolve();
								else reject();
							}
							else {
								if(self.checkChangeOfDay(startday_times.startday_month, startday_times.startday_date)) resolve();
								else reject();
							}
						});
					});
				});
			};

			// Get Function Section
			this.getStartDayTimes = function(){
				var self = this;
				return $q(function(resolve, reject){
					var startday_times = { startday_month:null, startday_date:null };
					grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'startday_month').then(function(startday_month){
						grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'startday_date').then(function(startday_date){
							startday_times.startday_month = startday_month;
							startday_times.startday_date = startday_date;
							resolve(startday_times);
						});
					});
				});
			};

			this.getWorkEndTimes = function(){
				var self = this;
				return $q(function(resolve, reject){
					var work_end_times = { work_end_month:null, work_end_date:null };
					grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'work_end_month').then(function(work_end_month){
						grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'work_end_date').then(function(work_end_date){
							work_end_times.work_end_month = work_end_month;
							work_end_times.work_end_date = work_end_date;
							resolve(work_end_times);
						});
					}, function(){
						resolve(work_end_times);
					});
				});
			};

			this.getActionObjectOption = function(action_object){
				var self = this;
				return $q(function(resolve, reject){
					var action_object_option;
					if(action_object.click) action_object_option = action_object.click;
					else if(action_object.change) action_object_option = action_object.change;
					else if(action_object.check) action_object_option = action_object.check;
					else if(action_object.input) action_object_option = action_object.input;
					else if(action_object.remove) action_object_option = action_object.remove;
					else if(action_object.target) action_object_option = action_object.target;
					if(action_object_option&&angular.isObject(action_object_option)) resolve(action_object_option);
					else reject();
				});
			};

			this.getActionObjectFunc = function(action_object){
				var self = this;
				return $q(function(resolve, reject){
					var action_object_func;
					if(action_object&&action_object.func) action_object_func = action_object.func;
					else action_object_func = 'stopstart';
					if(action_object_func&&angular.isString(action_object_func)) resolve(action_object_func);
					else reject();
				});
			};

			// Loop Function Section
			this.actionLoopSub = function(page){
				var self = this;
				return $q(function(resolve, reject){
					var timeoutPromises = [];
					var promises = [];
					if(page.delay&&page.delay.value&&angular.isNumber(page.delay.value)&&page.delay.value>=0){
						promises.push(timeoutService.delayPromise(page.delay.value));
						timeoutPromises.push($timeout(function(){ $rootScope.message('stopstart', '시간이 초과되어 다음 작업을 시작합니다.'); }, 1.5*(page.delay.value-1)*1000));
						timeoutPromises.push($timeout(function(){ resolve(); }, 1.5*page.delay.value*1000));
					}
					// startSteps를 actionLoop와 startPage에서 둘 다 사용한다.
					// self.startSteps(page).then(function(cancelTimeoutPromise_steps){
					self.startSteps(page).then(function(cancelTimeoutPromise_steps){
						// 3. Continue Loop
						// 1) (cancelTimeoutPromise_steps == true) --> 바로 resolve();
						if(cancelTimeoutPromise_steps){ self.cancelTimeoutPromise(timeoutPromises).then(function(){ resolve(); }); return; }
						// 2) (cancelTimeoutPromise_steps == false) --> page.delay.value 값 만큼 시간이 흐른 뒤 timeoutPromises에 있는 내용을 취소하고 resolve();
						else{
							if(promises&&_.size(promises)>=1){ // page.delay가 있을 때
								$q.all(promises).then(function(){
									self.cancelTimeoutPromise(timeoutPromises).then(function(){ resolve(); });
								});
							}
							else{ // page.delay가 없을 때
								resolve();
							}
						}
					}, function(){
						// 3. End Loop
						reject();
					});
				});
			};

			// 이 함수에 들어오는 파라미터 page는 어떤 action_object.action=='LOOP' 일 때 action_object.loop(object)이다.
			// grammerStartService.actionLoop 에서 resolve -> End Loop, reject -> Continue Loop
			this.actionLoop = function(page){
				var self = this;
				return $q(function(resolve, reject){
					if(page&&page.delay&&page.delay.setting_key) page.delay.value = getSettingService.getSetting(page.delay.setting_key, page.delay.method, page.delay.percentage);
					else page.delay = { value: null };
					// 1. Examine comparation of loop.
					// if(!page.comparison){ reject(); return; }
					// a. comparePandora에서 resolve가 난다면 loop가 종료
					// b. comparePandora에서 reject가 난다면 loop 계속
					if(page.comparison){
						grammerActionService.comparePandora(page.comparison).then(function(){
							// 2. End Loop
							reject(); return;
						}, function(){
							self.actionLoopSub(page).then(function(){ resolve(); }, function(){ reject(); });
						});
					}
					else{
						self.actionLoopSub(page).then(function(){ resolve(); }, function(){ reject(); });
					}
				});
			};

			this.actionTrycatch = function(try_page, catch_page, check_page, finally_page){
				var self = this;
				return $q(function(resolve, reject){
					if(!try_page){ resolve(true); return; }
					// 1. try_page 실행
					self.startSteps(try_page).then(
						function(cancelTimeoutPromise_steps){
							if(!finally_page){ resolve(cancelTimeoutPromise_steps); return; }
							// 2-1. try_page 실행 성공 후 finally_page 실행
							self.startSteps(finally_page).then(function(){ resolve(); }, function(){ reject(); });
						}, 
						function(){
							// 2-2. try_page 실행 실패 후 catch_page 실행
							self.startSteps(catch_page).then(
								function(cancelTimeoutPromise_steps){
									// 2-2-1. catch_page 실행 성공 후 finally_page 실행
									if(!finally_page){ resolve(true); return; }
									self.startSteps(finally_page).then(function(){ resolve(true); }, function(){ reject(); });
								}, 
								function(){
									// 2-2-2. catch_page 실행 실패 후 check_page 실행
									self.startSteps(check_page).then(
										function(cancelTimeoutPromise_steps){
											// 2-2-2-1. check_page 실행 성공 후 finally_page 실행
											if(!finally_page){ resolve(cancelTimeoutPromise_steps); return; }
											self.startSteps(finally_page).then(function(){ resolve(cancelTimeoutPromise_steps); }, function(){ reject(); });
										},
										function(){
											// 2-2-2-2. check_page 실행 실패 후 finally_page 실행
											if(!finally_page){ resolve(true); return; }
											self.startSteps(finally_page).then(function(cancelTimeoutPromise_steps){ resolve(cancelTimeoutPromise_steps); }, function(){ reject(); });
										}
									);
								}
							);
						}
					);
				});
			};

			// 이 함수에 들어오는 action_object는 list_step[step_index].list_action 배열안의 객체 하나이다.
			this.startAction_execute = function(action_object, delay){
				var self = this;
				return $q(function(resolve, reject){
					if(action_object.description) $rootScope.message(action_object.func, action_object.description+' 작업 시작');
					if(action_object.action=='LOOP'){
						var execute = function(){
							self.actionLoop(action_object.loop).then(function(){ execute(); }, function(){ resolve(); });
						};
						execute();
					}
					else if(action_object.action=='TRYCATCH'){
						self.actionTrycatch(action_object.try, action_object.catch, action_object.check, action_object.finally).then(function(timeoutPromise_cancel){ resolve(timeoutPromise_cancel); }, function(){ reject();});
					}
					else{
						grammerActionService.action(action_object, delay).then(function(){
							grammerActionService.actionSet_func_log(action_object, action_object.func).then(function(){
								grammerActionService.actionStatus_statuses(action_object.statuses).then(function(){
									if(action_object.description) $rootScope.message(action_object.func, action_object.description+' 작업 완료');
									resolve();
								});
							});
						}, function(){
							reject();
						});
					}
				});
			};

			this.setFuncOptionPercentage = function(action_object){
				var self = this;
				return $q(function(resolve, reject){
					if(action_object.func_option&&action_object.func_option.percentage&&action_object.func_option.percentage.setting_key){
						var percentage = action_object.func_option.percentage;
						action_object.func_option.percentage.value = getSettingService.getSetting(percentage.setting_key);
						if(_.isNumber(action_object.func_option.percentage.value)) resolve();
					}
					else resolve();
				});
			};

			this.setFuncOptionBoolean = function(action_object){
				var self = this;
				return $q(function(resolve, reject){
					if(action_object.func_option_fix&&_.isBoolean(action_object.func_option_fix)&&action_object.func_option.boolean.value){
						resolve();
					} 
					else if(action_object.func_option_fix&&_.isBoolean(action_object.func_option_fix)&&!action_object.func_option.boolean.value){
						reject();
					}
					else{
						if(action_object.func_option&&action_object.func_option.boolean&&action_object.func_option.boolean.click_key){
							var boolean = action_object.func_option.boolean;
							if(boolean.setting_key) 
								action_object.func_option.boolean.value = grammerGetService.getBooleanFromBooleanAndPercentage(getSettingService.getClick(boolean.click_key), getSettingService.getSetting(boolean.setting_key));
							if(boolean.setting_value)
								action_object.func_option.boolean.value = grammerGetService.getBooleanFromBooleanAndPercentage(getSettingService.getClick(boolean.click_key), boolean.setting_value);
							if(_.isBoolean(action_object.func_option.boolean.value)) resolve();
						}
						else resolve();
					}
				});
			};

			this.setFuncOptionClick = function(action_object){
				var self = this;
				return $q(function(resolve, reject){
					if(action_object.func_option_fix&&_.isBoolean(action_object.func_option_fix)&&action_object.func_option.click.value){
						resolve();
					}
					else if(action_object.func_option_fix&&_.isBoolean(action_object.func_option_fix)&&!action_object.func_option.click.value){
						reject();
					}
					else{
						if(action_object.func_option&&action_object.func_option.click&&action_object.func_option.click.click_key){
							var click = action_object.func_option.click;
							action_object.func_option.click.value = getSettingService.getClick(click.click_key);
							if(_.isBoolean(action_object.func_option.click.value)&&action_object.func_option.click.value) resolve();
							else reject();
						}
						else resolve();
					}
				});
			};

			this.setDayLimitValue = function(action_object, day_limit_value){
				var self = this;
				return $q(function(resolve, reject){
					action_object.func_option.day_limit.value = day_limit_value;
					if(_.isBoolean(action_object.func_option.day_limit.value)) resolve(); 
				});
			};

			this.setWorkEndTimesSub = function(momentary_month, momentary_date){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'work_end_month', momentary_month).then(function(){
						grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, 'work_end_date', momentary_date).then(function(){
							resolve();
						});
					});
				});
			};

			this.setWorkEndTimes = function(){
				var self = this;
				return $q(function(resolve, reject){
					var momentaryDate = new Date();
					var momentary_month = momentaryDate.getMonth() + 1;
					var momentary_date = momentaryDate.getDate();
					self.setWorkEndTimesSub(momentary_month, momentary_date).then(function(){
						resolve();
					});
				});
			};

			this.setFuncOptionDayLimitSub = function(action_object, count_status){
				var self = this;
				return $q(function(resolve, reject){
					// 1. 하루 작업량에 도달했을 경우
					if(count_status==action_object.func_option.day_limit.limit_value){
						self.setWorkEndTimes().then(function(){
							reject();
						});
					}
					// 2. 하루 작업량에 도달하지 못했을 경우
					else if(count_status<action_object.func_option.day_limit.limit_value){
						resolve();
					}
				});
			};

			this.setFuncOptionDayLimit = function(action_object){
				var self = this;
				return $q(function(resolve, reject){
					if(!(action_object.func_option&&action_object.func_option.day_limit&&(action_object.func_option.day_limit.limit_setting_key||action_object.func_option.day_limit.limit_status_key))){ resolve(); return; }
					// *** limit_value -> 하루 제한 된 작업 수
					if(action_object.func_option&&action_object.func_option.day_limit&&action_object.func_option.day_limit.limit_setting_key)
						action_object.func_option.day_limit.limit_value = getSettingService.getSetting(action_object.func_option.day_limit.limit_setting_key);
					else if(action_object.func_option&&action_object.func_option.day_limit&&action_object.func_option.day_limit.limit_status_key)
						action_object.func_option.day_limit.limit_value = grammerService.service.getStatus(action_object.func_option.day_limit.limit_status_key);
					// action_object.func_option.day_limit.limit_value = setting_value;
					grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, action_object.func_option.day_limit.status_key).then(function(count_status){
						// count_status -> 각 작업시 마다 올라가는 follow_limit_count와 같은 값
						self.actionCheckChangeOfDay().then(function(){
							// 1. Date가 수정되어 제한을 풀고 count_status를 0으로 초기화 한 뒤 작업을 하도록 하는 경우(resolve)
							self.setDayLimitValue(action_object, true).then(function(){
								grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, action_object.func_option.day_limit.status_key, 0).then(function(status){
									resolve();
								});
							});
						}, function(){
							// -> 그래머 시작한 날과 해당 작업하려는 날이 같은 경우
							self.setFuncOptionDayLimitSub(action_object, count_status).then(function(){
								// 2. 아직 하루 한계치에 도달을 못해서 해당작업을 하게 되는 경우(resolve)
								resolve();
							}, function(){
								// 3. 하루 한계치에 도달해서 해당작업을 하지 못하게 하는 경우(reject)
								self.setDayLimitValue(action_object, false).then(function(){
									resolve();
									// reject();
								});
							});
						});
					}, function(){
						// 4. 해당 작업을 맨 처음 시작할 때 해당 status_key에 해당하는 value를 초기화 하고 작업을 시작하는 경우(resolve)
						grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, action_object.func_option.day_limit.status_key, 0).then(function(status){
							resolve();
						});
					});
				});
			};

			this.setWorkLimitValue = function(action_object, work_limit_value){
				var self = this;
				return $q(function(resolve, reject){
					action_object.func_option.work_limit.value = work_limit_value;
					if(_.isBoolean(action_object.func_option.work_limit.value)) resolve();
				});
			};

			this.setFuncOptionWorkLimitSub = function(action_object, count_status){
				var self = this;
				return $q(function(resolve, reject){
					// 1. 작업 한계치에 도달했을 경우
					if(count_status==action_object.func_option.work_limit.limit_value){
						reject();
					}
					// 2. 하루 작업 한계치에 도달하지 못했을 경우
					else if(count_status<action_object.func_option.work_limit.limit_value){
						resolve();
					}
				});
			};

			this.setFuncOptionWorkLimit = function(action_object){
				var self = this;
				return $q(function(resolve, reject){
					if(!(action_object.func_option&&action_object.func_option.work_limit&&(action_object.func_option.work_limit.limit_setting_key||action_object.func_option.work_limit.limit_status_key))){ resolve(); return; }
					// *** limit_value -> 하루 제한 된 작업 수
					if(action_object.func_option&&action_object.func_option.work_limit&&action_object.func_option.work_limit.limit_setting_key)
						action_object.func_option.work_limit.limit_value = getSettingService.getSetting(action_object.func_option.work_limit.limit_setting_key);
					else if(action_object.func_option&&action_object.func_option.work_limit&&action_object.func_option.work_limit.limit_status_key)
						action_object.func_option.work_limit.limit_value = grammerService.service.getStatus(action_object.func_option.work_limit.limit_status_key);
					grammerGetService.getStatus(grammerService.service.grammer_key, grammerService.service.version_key, action_object.func_option.work_limit.status_key).then(function(count_status){
						// --> 작업 한계치 도달했는지 확인 후 해당 변수 지정한 후 resolve Or reject
						self.setFuncOptionWorkLimitSub(action_object, count_status).then(function(){
							// 작업 한계치 도달하지 않은 상태 -> resolve
							self.setWorkLimitValue(action_object, true).then(function(){
								resolve();
							});
						}, function(){
							self.setWorkLimitValue(action_object, false).then(function(){
								resolve();
								// reject();
							}); 
						});
					}, function(){	
						// 해당 작업을 맨 처음 시작할 때 해당 status_key에 해당하는 value를 초기화 하고 작업을 시작하는 경우(resolve)
						grammerSetService.setStatus(grammerService.service.grammer_key, grammerService.service.version_key, action_object.func_option.work_limit.status_key, 0).then(function(status){
							resolve();
						});
					});
				});
			};

			this.setHtmlExistValue = function(action_object, html_exist_value){
				var self = this;
				return $q(function(resolve, reject){
					action_object.func_option.html_check.value = html_exist_value;
					if(_.isBoolean(action_object.func_option.html_check.value)) resolve();
				});
			};

			this.setFuncOptionHtmlExist = function(action_object){
				var self = this;
				return $q(function(resolve, reject){
					if(!(action_object.func_option&&action_object.func_option.html_check&&action_object.func_option.html_check.check)){ resolve(); return; }
					// 이하는 html의 존재 여부를 살피고 
					// 1. 존재할 경우 -> action_object.func_option.html_check.value = true
					// 2. 존재하지 않을 경우 -> action_object.func_option.html_check_value = false
					self.getActionObjectOption(action_object).then(function(action_object_option){
						self.getActionObjectFunc(action_object).then(function(action_object_func){
							htmlService.getElement(action_object_option.html).then(function(){
								self.setHtmlExistValue(action_object, true).then(function(){
									resolve();
								});
							}, function(){
								self.setHtmlExistValue(action_object, false).then(function(){
									resolve();
								});
							});
						});
					}, function(){
						resolve();
					});
				});
			};

			this.setFuncOption = function(action_object){
				var self = this;
				return $q(function(resolve, reject){
					var promises = [];
					promises.push(self.setFuncOptionPercentage(action_object));
					promises.push(self.setFuncOptionBoolean(action_object));
					promises.push(self.setFuncOptionClick(action_object));
					promises.push(self.setFuncOptionDayLimit(action_object));
					promises.push(self.setFuncOptionWorkLimit(action_object));
					promises.push(self.setFuncOptionHtmlExist(action_object));
					$q.all(promises).then(function(){
						resolve();
					}, function(){
						reject();
					});
				});
			}; 

			this.startActionSub = function(page, action_object, delay){
				var self = this;
				return $q(function(resolve, reject){
					self.setFuncOption(action_object).then(function(){
						// startAction을 할 시에 action_object.func가 없으면 stopstart로 초기화
						if(!(_.size(action_object.func)>=1)) action_object.func = 'stopstart';
						// 1. action_object.func_option이 있는 경우
						if(action_object&&action_object.func_option){
							// action_object.func_option.boolean은 작업을 할지 안할지에 대한 boolean값이다.
							// action_object.func_option.boolean.value -> false
							if(action_object.func_option.boolean&&_.isBoolean(action_object.func_option.boolean.value)&&!action_object.func_option.boolean.value){
								// action_object.func_option.click.value -> true
								if(action_object.func_option.click&&_.isBoolean(action_object.func_option.click.value)&&action_object.func_option.click.value){
									$rootScope.message(action_object.func, action_object.description+' 작업은 '+action_object.func_option.percentage.value+'% 확률로 작동하여 이번엔 건너뜁니다');
								}
								resolve();
								return;
							}
							// action_object.func_option.boolean.value -> true
							else{
								if(action_object.func_option&&action_object.func_option.day_limit&&_.isBoolean(action_object.func_option.day_limit.value)&&!action_object.func_option.day_limit.value){
									$rootScope.message(action_object.func, action_object.description+' 작업은 하루 한계 작업 수에 도달하여 이번엔 건너뜁니다');
									resolve();
									return;
								}
								else if(action_object.func_option&&action_object.func_option.work_limit&&_.isBoolean(action_object.func_option.work_limit.value)&&!action_object.func_option.work_limit.value){
									$rootScope.message(action_object.func, action_object.description+' 작업은 한계 작업 수에 도달하여 이번엔 건너뜁니다');
									resolve();
									return;
								}
								else if(action_object.func_option&&action_object.func_option.html_check&&_.isBoolean(action_object.func_option.html_check.value)&&!action_object.func_option.html_check.value){
									$rootScope.message(action_object.func, action_object.description+' 작업은 관련 정보가 없어서 이번엔 건너뜁니다.');
									resolve();
									return;
								}
								self.startAction_execute(action_object, delay).then(function(timeoutPromise_cancel){
									resolve(timeoutPromise_cancel);
								},function(){
									reject();
								});
							}
						}
						// 2. 그 외
						//  -> 각 서비스의 초기화 처럼 action_object.func_option이 없는 경우
						else{
							self.startAction_execute(action_object, delay).then(function(timeoutPromise_cancel){
								resolve(timeoutPromise_cancel);
							},function(){
								reject();
							});
						}
					}, function(){
						resolve();
					});
				});
			};

			// startAction에 들어오는 action_object 는 list_step에 있는 객체들중 하나이다.
			this.startAction = function(page, action_object, delay){
				var self = this;
				return $q(function(resolve, reject){
					// instagrammerUnfollowService 용
					if(angular.isDefined(page.select)&&(page.select===true)){
						if(action_object.permissions
						&&(_.size(action_object.permissions)>=1)
						&&(action_object.permissions.indexOf($rootScope.current_func_key)>=0)){
							action_object.func = $rootScope.current_func_key;
							self.startActionSub(page, action_object, delay).then(function(timeoutPromise_cancel){
								resolve(timeoutPromise_cancel);
							}, function(){
								reject();
							});
						}
						else{
							resolve();
						}
					}
					// 그 외
					else{
						self.startActionSub(page, action_object, delay).then(function(timeoutPromise_cancel){
							resolve(timeoutPromise_cancel);
						}, function(){
							reject();
						})
					}
				});
			};

			// Step Function Section
			// 이 함수를 바로 위에서 가지고 있는 startSteps 에선 step_index라는 변수로 list_step함수의 모든 객체에 접근을 한다.
			// i.e , startSteps -> startStep
			// 이 함수에서 step은 서비스.pages.start배열의 객체 하나의 list_step(배열)에 있는 객체 하나이다.(list_step[step_index]의 형태로 주입되서 들어온다.)
			// page, page.list_step[step_index], delay
			this.startStep = function(page, step, delay){
				var self = this;
				return $q(function(resolve, reject){
					var promises = [];
					// action_object은 step.list_action 배열에 있는 객체 하나씩을 의미한다.
					angular.forEach(step.list_action, function(action_object, action_index){
						var promise = self.startAction(page, action_object, delay);
						promises.push(promise);
					});
					$q.all(promises).then(function(cancelTimeoutPromise_actions){
						if(step.stop){
							$rootScope.message('stopstart', $filter('uppercase')(grammerService.service.grammer_key)+'가 '+$filter('uppercase')(grammerService.service.version_key)+' 임무를 완수했습니다');
							$timeout(function(){
								grammerStopService.stop(grammerService.service.grammer_key, grammerService.service.version_key);
							}, 3000);
						}
						else {
							resolve(_.some(cancelTimeoutPromise_actions, Boolean));
						}
					}, function(){ reject(); });
				});
			};

			// page or page[index]
			this.startStepsSub = function(page){
				var self = this;
				return $q(function(resolve, reject){
					if(page.delay&&page.delay.setting_key&&!page.delay.value) page.delay.value = getSettingService.getSetting(page.delay.setting_key, page.delay.method, page.delay.percentage);
					var step_index = 0;
					if(page.delay&&page.delay.value&&page.countdown!=false) $rootScope.countdown(page.delay.value);
					var cancelTimeoutPromise_steps = false;
					var execute = function(){
						var delay;
						if(page.delay&&page.delay.value) delay = grammerGetService.getDelayOfStep(page.delay.value, page.list_step[step_index].delay);
						else delay = grammerGetService.getDelayOfStep(null, page.list_step[step_index].delay);
						if(!(page.delay&&page.delay.value)&&page.list_step[step_index].delay&&(page.list_step[step_index].countdown!=false)) $rootScope.countdown(page.list_step[step_index].delay);
						self.startStep(page, page.list_step[step_index], delay).then(function(cancelTimeoutPromise_step){
							grammerActionService.actionStatus_statuses(page.list_step[step_index].statuses).then(function(){
								step_index+=1;
								if(cancelTimeoutPromise_step){ cancelTimeoutPromise_steps = true; }
								if(!(step_index>=page.list_step.length)) execute();
								else{
									$rootScope.message('stopstart', '잠시 후에 작업을 시작합니다'); 
									resolve(cancelTimeoutPromise_steps);
								}
							});
						},function(){ reject(); });
					};
					execute();
				});
			};

			// 이 함수에 들어오는 page파라미터는 서비스.pages.start라는 배열에 있는 객체 하나이다. 
			// 또는 어떤 action_object.action=='LOOP' 일 때 action_object.loop(object)이다.
			// 서비스.pages.start라는 배열에 있는 객체 또는 배열(facegrammerNewfriendService의 경우) 하나
			this.startSteps = function(page){
				// facegrammerNewfriendService와 같은 경우엔 page가 객체가 아닌 배열이다.
				// page 파라미터가 객체인 경우와 배열인 경우를 나눠서 생각하여야 한다.
				var self = this;
				return $q(function(resolve, reject){
					if(!(page&&_.size(page)>=1)) reject();
					// service가 facegrammerNewfriendService인 경우
					if(page.select_one){
						grammerGetService.getPageCorrespondingWithUrl(page.pages).then(function(page){
							self.startStepsSub(page).then(function(cancelTimeoutPromise_steps){
								resolve(cancelTimeoutPromise_steps);
							}, function(){
								reject();
							});
						});
					}
					else{
						self.startStepsSub(page).then(function(cancelTimeoutPromise_steps){
							resolve(cancelTimeoutPromise_steps);
						}, function(){
							reject();
						});
					}
				});
			};

			// Page Function Section
			// 이 함수에 들어오는 page파라미터는 서비스.pages.start라는 배열에 있는 객체 하나이다. 
			// page, page.delay.value
			this.startPage = function(page, page_delay){
				var self = this;
				return $q(function(resolve, reject){
					var promises = [];
					promises.push(self.startSteps(page));
					var timeoutPromises = [];
					if(_.isNumber(page_delay)&&page_delay>=0){ 
						promises.push(timeoutService.delayPromise(page_delay));
						timeoutPromises.push($timeout(function(){ $rootScope.message('stopstart', '시간이 초과되어 새로운 작업을 시작합니다'); }, 1.5*(page_delay-1)*1000));
						timeoutPromises.push($timeout(function(){ resolve(); }, 1.5*page_delay*1000));
					}
					$q.all(promises).then(function(){
						grammerActionService.actionStatus_statuses(page.statuses).then(function(){
							$rootScope.message('stopstart', '다음 작업 페이지로 이동합니다');
							$timeout(function(){
								if(timeoutPromises&&_.size(timeoutPromises)>=1){
									angular.forEach(timeoutPromises, function(timeoutPromise){ $timeout.cancel(timeoutPromise); });
								}
								resolve();
							}, 1000);
						});
					}, function(){ 
						$timeout(function(){ reject(); }, 2000); 
					});
				});
			};

			this.startService = function(service){
				var self = this;
				if(!(_.size(service.pages.start))>=1) return;
				var getPage_count = 0;
				var getPage = function(){
					getPage_count+=1;
					grammerGetService.getPage(service.pages.start).then(function(page){
						// page.delay.value --> 초기화
						if(page&&page.delay&&page.delay.value) page.delay.value = null;
						if(page&&page.delay&&page.delay.setting_key) page.delay.value = getSettingService.getSetting(page.delay.setting_key, page.delay.method, page.delay.percentage);
						else page.delay = { value: null };
						self.startPage(page, page.delay.value).then(function(){
							if(page.goNextPage!==false&&!(_.isNumber(page.next_page_index)&&page.next_page_index>=0)) grammerGoService.goNextPage(service.pages.start);
							else if(_.isNumber(page.next_page_index)&&page.next_page_index>=0) grammerGoService.goPage(service.pages.start[page.next_page_index]);
							else self.start();
						}, function(){
							// ******* 작업중에 한번이라도 reject가 난다면 page의 첫 객체로 이동한다.
							grammerGoService.goPage(service.pages.start[0]);
						});
					}, function(){
						if(getPage_count<=5){
							$timeout(function(){
								$rootScope.message('stopstart', '작업 준비 중입니다 ( '+getPage_count+'/5 )');
								getPage();
							}, 300);
						}
						else { 
							grammerGoService.goPage(service.pages.start[0]); 
						}
					});
				};
				getPage();
			};

			// Start Function Section
			this.start = function(){
				var self = this;
				var promises = [];
				grammerGetService.getGrammerKeyValueWithUrl().then(function( grammer_pair ){
					var promises = [];
					grammerService.service = grammerService.get( grammer_pair.key, grammer_pair.value.version_key );
					promises.push(grammerCheckService.checkIdentification(grammerService.service));
					promises.push(grammerCheckService.checkRest(grammerService.service));
					$q.all(promises).then(function(){
						// 매 작업 때마다 작업중인 version 에 count_rested라는 속성을 추가시키고, 
						// 그 해당 값을 version.statuses[state_key]를 이용하여 할당 시킨다.
						grammerSetService.setStatus(grammer_pair.key, grammer_pair.value.version_key, 'count_rested', grammerService.service.getStatus('count')).then(function(status){
							grammerGetService.getStatus(grammer_pair.key, grammer_pair.value.version_key, 'count').then(function(status){
								self.startService(grammerService.service);
							}, function(){
								grammerSetService.setStatus(grammer_pair.key, grammer_pair.value.version_key, 'count', 0).then(function(status){
									self.startService(grammerService.service);
								});
							});
						});
					}, function(){ grammerStopService.stop(); });
				}, function(){ $rootScope.message('stopstart', '그래머 스타트 오류입니다. 그래머에게 이 사실을 알려주세요! 010 9488 1462'); });
			};
		});

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('bandgrammerInviteService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'bandgrammer';
			this.version_key = 'invite';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			this.htmls = {
				html_name:{ tag:null,
					classes:{list:[]},
					properties:{list:[]},
					href:null,
					innerHTMLs:{list:[]}
				}
			};
			this.urls = {
				url_search:{ basic:null, extra:{list:[]}, changing:false },
			};
			this.pages = {
				start:[
					{
						url : null, delay:null,
						htmls : {list:[], condition:null},
						list_step:[
							{list_action:[ { action:null, description:null } ], delay:null}
						]
					}
				],
				stop:[]
			};
		});

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('bandgrammerSignupService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'bandgrammer';
			this.version_key = 'signup';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			this.htmls = {
				html_name:{ tag:null,
					classes:{list:[]},
					properties:{list:[]},
					href:null,
					innerHTMLs:{list:[]}
				}
			};
			this.urls = {
				url_search:{ basic:null, extra:{list:[]}, changing:false },
			};
			this.pages = {
				start:[
					{
						url : null, delay:null,
						htmls : {list:[], condition:null},
						list_step:[
							{list_action:[ { action:null, description:null } ], delay:null}
						]
					}
				],
				stop:[]
			};
		});

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('blogrammerNewfriendService', function($q, $rootScope, arrayService, numberService, grammerSetService){
			this.grammer_key = 'blogrammer';
			this.version_key = 'newfriend';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['gnb_mail_address']},
					properties:{list:['href']},
					split:{ html:'innerHTML', params:[null, '@naver.com'] },
					check_once: true
				},
				// correspondings 에 있는 것중에서 하나만 만족해도 resolve할 수 있도록 수정.
				// correspondings 에 있는 것중 아무것도 만족하지 않으면 reject
				blog_bulletin:{ tag:'div',
					classes:{list:['multi_img']},
					properties:{list:['onclick']},
					split:{ attr:'onclick', params:["goBlankUrl('", "');"] },
					correspondings:{
						value:[
							{criteria:'onclick', contain:'blog.naver.com'},
							{criteria:'onclick', contain:'blog.me'}
						],
						condition:'OR'
					}
				},
				btn_empathize_do:{ tag:'a',
					classes:{list:['u_likeit_list_btn', 'u_type_img', 'u_none_txt', 'pcol2']},
					properties:{list:['href', 'data-sid', 'data-did', 'data-cid', 'data-likeit']},
					frame_id:'mainFrame'
				},
				btn_empathize_did:{ tag:'a',
					classes:{list:['u_likeit_list_btn', 'u_type_img', 'u_none_txt', 'pcol2', 'on']},
					properties:{list:['href', 'data-sid', 'data-did', 'data-cid', 'data-likeit']},
					frame_id:'mainFrame'
				},
				btn_review_open:{ tag:'a',
					classes:{list:['pcol2', '_cmtList', '_returnFalse']},
					properties:{list:['href']},
					innerOuterHTMLs:{list:['댓글']},
					frame_id:'mainFrame'
				},
				btn_review_opened:{ tag:'a',
					classes:{list:['pcol3', '_cmtList', '_returnFalse']},
					properties:{list:['href']},
					innerOuterHTMLs:{list:['댓글']},
					frame_id:'mainFrame'
				},
				user_real_id:{ tag:'a',
					classes:{list:['link', '_buddyList', '_returnFalseGnb']},
					properties:{list:['href', 'onclick']},
					innerOuterHTMLs:{list:['이웃블로그']},
					split:{ html:'outerHTML', params:['http://blog.naver.com|',')">이웃블로그'] },
					frame_id:'mainFrame'
				},
				logNo:{ tag:'frame',
					properties:{list:['name="mainFrame"', 'src', 'scrolling', 'onload']},
					split:{ attr:'src', params:['&logNo=', '&'] }
				},
				screen_frame_src:{ tag:'frame',
					properties:{list:['name="screenFrame"', 'src', 'scrolling']},
					split:{ attr:'src', params:[null, null] }
				},
				box_frameset:{ tag:'frameset',
					properties:{list:['rows', 'frameborder', 'framespacing']}
				},
				box_formComment:{ tag:'form',
					properties:{list:['id="formCommentLoginUser"', 'action="/CommentWrite.nhn"', 'method="post"']}
				},
				src_review:{ tag:'iframe',
					properties:{list:['allowtransparency="true"', 'src']},
					correspondings:{
						value:[
							{criteria:'src', contain:'CommentList.nhn'}
						],
						condition:'OR'
					},
					split:{ attr:'src', params:[null, null] },
					frame_id:'mainFrame'
				},
				box_neighborhood:{ tag:'div',
					classes:{list:['bx']},
					innerOuterHTMLs:{list:['서로이웃']}
				},
				box_neighborhood_together_disable:{ tag:'label',
					classes:{list:['disabled']},
					properties:{list:['for="p31_2"']},
					innerOuterHTMLs:{list:['서로이웃']}
				},
				box_select_neighborhood_together:{ tag:'input',
					classes:{list:['input_radio']},
					properties:{list:['name="relation"', 'type="radio"', 'value="1"']}
				},
				neighborhood_together_execute:{ tag:'a',
					parent_html:{ tag:'div', properties:{list:['id="footer"']} },
					properties:{list:['href="javascript:buddyAdd();"']},
					innerOuterHTMLs:{list:['다음']}
				},
				neighborhood_together_confirm:{ tag:'input',
					parent_html:{ tag:'div', properties:{list:['id="footer"']} },
					properties:{list:['type="image"', 'width="48"', 'height="28"']},
					innerOuterHTMLs:{list:['확인'], type:'OUTERHTML' }
				},
				btn_sticker_review:{ tag:'a',
					classes:{list:['pcol2']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['스티커 댓글']}
				},
				btn_sticker_category:{ tag:'button',
					properties:{list:['type="button"', 'data-value="line_characters_in_love"']},
					innerOuterHTMLs:{list:['http://gfmarket.phinf.naver.net']}
				},
				btn_sticker:{ tag:'button',
					parent_html:{ tag:'div', 
						parent_html:{ tag:'li', classes:{list:['active']} },
						classes:{list:['se2_linesticker_list']} 
					},
					properties:{list:['type="button"', 'data-value']},
					index_range:17
				},
				form_neighborhood:{ tag:'form',
					properties:{list:['id="addBuddyPopupForm"', 'target="addBuddy"', 'method="post"']}
				},
				btn_review_delete:{ tag:'span',
					innerOuterHTMLs:{list:['삭제']}
				},
				btn_master_only:{ tag:'input',
					properties:{list:['type="checkbox"', 'id="master_only"', 'name="temp.secretYn"', 'value="true"']}
				},
				btn_add_neighborhood:{ tag:'a',
					properties:{list:['target', 'href', 'onclick']},
					innerOuterHTMLs:{list:['이웃추가']},
					frame_id:'mainFrame'
				},
				btn_add_neighborhood_check:{ tag:'a',
					properties:{list:['href', 'id="buddyinvite_config_anchor"']},
					innerOuterHTMLs:{list:['서로이웃 맺기']}
				},
				btn_apply_submitted:{ tag:'a',
					properties:{list:['href']},
					innerOuterHTMLs:{list:['보낸신청']},
					frame_id:'papermain'
				},
				userid_already_neighborhood_apply:{ tag:'a',
					parent_html:{ tag:'table', properties:{list:['cellspacing', 'summary="이웃맺기 보낸신청 목록"']} },
					properties:{list:['target="_blank"']},
					innerOuterHTMLs:{list:['http://blog.naver.com/GoBlog.nhn?userId='], type:'OUTERHTML'},
					split:{ html:'innerHTML', params:['(',')'] },
					frame_id:'papermain'
				},
				btn_goPage_to_other_page:{ tag:'a',
					parent_html:{ tag:'div', classes:{list:['paginate']} },
					properties:{list:['href']},
					innerOuterHTMLs:{list:['javascript:goPage'], type:'OUTERHTML'},
					frame_id:'papermain'
				},
				btn_admin_neighborhood_together:{ tag:'a',
					properties:{list:['href', 'onclick']},
					innerOuterHTMLs:{list:['서로이웃 맺기 관리']}
				},
				input_neighborhood_apply:{ tag:'textarea',
					properties:{list:['name="message"', 'id="message"']}
				},
				div_commentWriteWarningArea:{ tag:'div',
					classes:{list:['nob', 'pcol2']},
					properties:{list:['id="commentWriteWarningArea"']},
					innerOuterHTMLs:{list:['제한기능']}
				},
				div_spam:{ tag:'div',
					properties:{list:['id="whole-body"']},
					innerOuterHTMLs:{list:{ setting_key:'list_spam' }},
					frame_id:'mainFrame'
				},
				input_review:{ tag:'textarea',
					classes:{list:['textarea', '_activeId', '_commentRosText']},
					properties:{list:['cols', 'rows', 'id="commentTextArea"']}
				},
				btn_review_submit:{ tag:'input',
					classes:{list:['_btnComment', 'btn', '_rosRestrict', '_commentRosButton', '_activeId']},
					properties:{list:['type="image"', 'src', 'alt="댓글입력"']}
				}
			};

			// Url Section
			this.urls = {
				pre_search:{ basic:'http://admin.blog.naver.com/AdminMain.nhn?blogId=', extra:{list:[ { grammer_key:'blogrammer', version_key:'newfriend', status:'identification', no_encode:true }, '&Redirect=Buddyinfo' ]}, changing:false },
				search:{ basic:'http://section.blog.naver.com/sub/SearchBlog.nhn?type=post&option.keyword=', extra:{list:[ [{ setting_key:'list_search_tag', method:'getRandom' }], '&term=&option.startDate=&option.endDate=&option.page.currentPage=', { range:10 }, '&option.orderBy=date' ]}, changing:false },
				work_first:{ basic:'blog.naver.com', changing:false },
				work_second:{ basic:'blog.me', changing:false },
				detail:{ extra:{list:[ { html:this.htmls.blog_bulletin, no_encode:true, random:true } ]} },
				modified_frame:{ extra:{list:[ { html:this.htmls.screen_frame_src } ]}, changing:false },
				review_url:{ basic:'blog.naver.com', extra:{list:[ { status:'review_link', grammer_key:'blogrammer', version_key:'newfriend', no_encode:true } ]} },
				review_execution_page:{ basic:'blog.naver.com/CommentList.nhn?blogId=', changing:false },
				neighborhood_url:{ basic:'blog.naver.com/BuddyAdd.nhn?blogId=', changing:false },
				neighborhood_second_url:{ basic:'http://blog.naver.com/BuddyAdd.nhn', changing:false }
			};

			// Interval Section
			this.intervals = {
				search:{ setting_key:'interval_search', method:'getRandomOfNumber', percentage:30 },
				work:{ setting_key:'interval_work', method:'getRandomOfNumber', percentage:30 },
				review:{ setting_key:'interval_review', method:'getRandomOfNumber', percentage:30 },
				neighborhood:{ setting_key:'interval_neighborhood', method:'getRandomOfNumber', percentage:30 }
			};
			
			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' },
				friend_messages:{ setting_key:'list_friend_messages', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
				empathize:{ click:{ click_key:'empathize' }, percentage:100, boolean:{ click_key:'empathize', setting_value:100 }, html_check:{ check:true } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' }, day_limit:{ limit:100, status_key:'review_limit_count' }, html_check:{ check:true } },
				review_must:{ click:{ click_key:'review' }, percentage:100, boolean:{ click_key:'review', setting_value:100 }, html_check:{ check:true } },
				neighborhood:{ click:{ click_key:'neighborhood' }, percentage:{ setting_key:'percentage_neighborhood' }, boolean:{ click_key:'neighborhood', setting_key:'percentage_neighborhood' }, day_limit:{ limit:100, status_key:'neighborhood_limit_count' }, html_check:{ check:true } },
				message:{ click:{ click_key:'message' }, percentage:{ setting_key:'percentage_message' }, boolean:{ click_key:'message', setting_key:'percentage_message' }, day_limit:{ limit:100, status_key:'message_limit_count' }, html_check:{ check:true } }
			};

			// Page Section
			this.pages = {
				start:[
					// 이미 작업한 유저 검색하는 페이지
					{
						urls : {list:[this.urls.pre_search], condition:'AND'},
						htmls : {list:[this.htmls.btn_add_neighborhood_check], condition:'AND'},
						list_step : [
							{list_action:[ 
								{ action:'CLICK', click:{ html:this.htmls.btn_add_neighborhood_check } } 
							], delay:3, countdown:false},
							{list_action:[
								{ action:'CLICK', click:{ html:this.htmls.btn_apply_submitted } }
							], delay:3, countdown:false},
							{list_action:[
								{ action:'STATUS', status:{ set:'already_neighborhood_apply', value:[] } }
							], delay:2, countdown:false},
							{list_action:[
								{ action:'STATUS', status:{ set:'page_index', value:0 } }
							], delay:1, countdown:false},
							{list_action:[
								{ action:'SAVE', save:{ pandoras:[{html:this.htmls.btn_goPage_to_other_page, type:'COUNT', additional_work:{ plus:{basic:1} } }, {status:'total_page_number_at_already_neighborhood_apply'}] } }
							], delay:2, countdown:false},
							{list_action:[ { action:'LOOP',
								loop:{
									list_step:[
										{list_action:[
											{ action:'STATUS', status:{ statuses:[ {increase:'page_index'} ] } }
										], delay:1},
										{list_action:[ 
											{ action:'CONCAT', description:'이미 이웃신청한 목록 저장', concat:{ pandoras:[{html:this.htmls.userid_already_neighborhood_apply, type:'TEXT', isArray:true}, {status:'already_neighborhood_apply'}] } } 
										], delay:5},
										{list_action:[
											{ action:'TRYCATCH',
												try : {
													list_step:[
														{list_action:[
															{ action:'COMPARE', description:'작업 진행 확인', compare:{ type:'>=', pandoras:[{status:'page_index'}, {status:'total_page_number_at_already_neighborhood_apply'}] } }
														], delay:2},
														// 작업 진행 마무리 되었을 때
														{list_action:[
															{ action:'GO_PAGE', description:'블로그래머', go_page:{ page_index:1 } }
														], delay:2}
													]
												},
												catch : {
													// 작업 진행 마무리 되지 않았을 때
													list_step:[
														{list_action:[
															{ action:'CLICK', click:{ html:this.htmls.btn_goPage_to_other_page, index:{status:'page_index', additional_work:{ minus:{basic:1} }} } }
														], delay:2}
													]
												}
											}
										]}
									]
								}
							} ]}
						]
					},
					// 블로그 게시물 선택하는 페이지
					{
						urls : {list:[this.urls.search], condition:'AND'},
						htmls : {list:[this.htmls.blog_bulletin], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SAVE', save:{ pandoras:[{time:'startday_month'}, {status:'startday_month'}], conditions:[{status:'count'}, {basic:0}] } } ], delay:1},
							{list_action:[ { action:'SAVE', save:{ pandoras:[{time:'startday_date'}, {status:'startday_date'}], conditions:[{status:'count'}, {basic:0}] } } ], delay:1},
							{list_action:[ { action:'GO', description:'게시물 선택', go:{ url:this.urls.detail, delay_position:100 } } ], delay:98}
						],
						delay:this.intervals.search
					},
					// 블로그 게시물 페이지
					{
						urls : {list:[this.urls.work_first, this.urls.work_second], condition:'OR'},
						htmls : {list:[this.htmls.box_frameset], condition:'AND'},
						list_step:[
							{list_action:[ { action:'TRYCATCH',
								try : {
									list_step:[
										// screenFrame 없이 mainFrame만 존재하는 경우
										{list_action:[
											{ action:'CHECK', description:'프레임 확인', check:{ htmls:[ { html:this.htmls.user_real_id, exist:true, message:'수정할 프레임' } ] } }
										], delay:5, countdown:false},
										{list_action:[ { action:'TRYCATCH', 
											try : {
												list_step:[
													{list_action:[
														{ action:'CHECK', func:'empathize', description:'공감한 게시물인지 검사', check:{ htmls:[ {html:this.htmls.btn_empathize_did, exist:false, message:'이미 공감중'} ] } },
														{ action:'CHECK', description:'유저 아이디 있는지 검사', check:{ htmls:[ {html:this.htmls.user_real_id, exist:true, message:'유저 아이디가 없음'} ] } },
														{ action:'CHECK', description:'스팸 게시물 검사', check:{ htmls:[ {html:this.htmls.div_spam, exist:false, message:'스팸 단어를 포함하고 있습니다.'} ] } }
													], delay:10},
													{list_action:[
														{ action:'TARGET_USERNAME', description:'유저이름 타겟팅', target_username:{ html:this.htmls.user_real_id, type:'outerHTML' } }
													], delay:10},
													{list_action:[
														{ action:'STATUS', status:{ set:'target_user_name', value:'target_user_name' } }
													], delay:10},
													{list_action:[
														{ action:'COMPARE', description:'이미 서로이웃 신청된 사람인지 검사', compare:{ type:'!in', pandoras:[{status:'target_user_name'}, {status:'already_neighborhood_apply'}] } }
													], delay:5},
													{list_action:[
														{ action:'CLICK', func:'empathize', func_option:this.funcs_option.empathize, description:'공감', click:{ html:this.htmls.btn_empathize_do }, log_push:true, statuses:[{increase:'empathize_count'}] }
													], delay:10},
													// 댓글 목록은 관련 html이 있다면 차단 여부를 확인 하기 위해 무조건 연다.
													{list_action:[
														{ action:'CLICK', func:'review', func_option:this.funcs_option.review_must, description:'댓글 목록 열기', click:{ html:this.htmls.btn_review_open } }
													], delay:10},
													// 댓글 src 저장작업
													/*{list_action:[
														{ action:'SAVE', func:'review', func_option:this.funcs_option.review, description:'댓글 준비작업', save:{ pandoras:[{html:this.htmls.src_review, type:'TEXT'}, {status:'review_link'}], delay_position:50 } }
													], delay:15},
													{list_action:[
														{ action:'GO', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 작업 url로 이동', go:{ url:this.urls.review_url, delay_position:100 } }
													], delay:10},*/
													// 1. 댓글목록 상태에 따른 검증
													//   a. 댓글목록관련 html이 있어서 댓글목록이 열려 있는 상태 -> 댓글 작업 페이지로 간다. -> 추후 서로이웃 추가도 알아서 하게 된다.
													//   b. 댓글목록관련 html이 없어서 댓글목록이 열려 있지 않아 차단 검증을 할 수 없는 상태 -> 새로운 작업을 시작한다. 
													// 2. but, 댓글 달러는 가지 않은 상태
													{list_action:[ { action:'TRYCATCH',
														try : {
															list_step:[
																// 댓글목록관련 html이 있는지 확인하고 진행한다.
																{list_action:[
																	{ action:'CHECK', description:'사전 준비/검증 작업 first', check:{ htmls:[ {html:this.htmls.btn_review_opened, exist:true, message:'작업 불가능'} ] } },
																	{ action:'CHECK', description:'사전 준비/검증 작업 second', check:{ htmls:[ {html:this.htmls.btn_add_neighborhood, exist:true, message:'작업 불가능'} ] } }
																], delay:4, countdown:false},
																{list_action:[
																	{ action:'SAVE', func:'review', func_option:this.funcs_option.review, description:'댓글 준비작업', save:{ pandoras:[{html:this.htmls.src_review, type:'TEXT'}, {status:'review_link'}], delay_position:50 } }
																], delay:3, countdown:false},
																{list_action:[
																	{ action:'GO', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 작업 url로 이동', go:{ url:this.urls.review_url, delay_position:50 } }
																], delay:10, countdown:false},
																{list_action:[
																	{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
																], delay:3, countdown:false}
															]
														},
														catch : {
															list_step:[
																// 포함된 경우 -> 새로운 작업 시작
																{list_action:[
																	{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
																], delay:2}
															]
														}
													} ]}
												],
												delay:this.intervals.work
											},
											catch : {
												list_step:[
													{list_action:[
														{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
													], delay:3}
												],
												countdown:false
											}
										} ]}
									]
								},
								catch : {
									list_step:[
										// screenFrame 이 있어서 작업을 할 수 없는 경우
										// id가 screenFrame인 frame태그의 src에 있는 곳으로 이동한다.
										{list_action:[ { action:'GO', description:'프레임 수정', go:{ url:this.urls.modified_frame, delay_position:20 } } ], delay:10, countdown:false}
									],
									countdown:false
								}
							} ]}
						]
					},
					// 댓글등록 작업하는 페이지
					{
						urls:{list:[this.urls.review_execution_page], condition:'AND'},
						htmls:{list:[this.htmls.box_formComment], condition:'AND'},
						list_step:[
							// 타겟된 유저가 나를 차단하지는 않았는지 확인하고 작업시작 여부 결정
							{list_action:[ { action:'TRYCATCH', 
								try:{
									list_step:[
										{list_action:[
											{ action:'CHECK', description:'서로이웃추가 작업 가능 여부 확인', check:{ htmls:[ {html:this.htmls.div_commentWriteWarningArea, exist:false, message:'작업 불가'} ] } }
										], delay:2, countdown:false},
										{list_action:[ { action:'TRYCATCH',
											// 스티커 댓글 작업 로직
											try:{
												list_step:[
													{list_action:[
														{ action:'CONDITION', condition:{ conditions:[{setting:'sticker_review_boolean'}, {basic:true}] } }
													], delay:5, countdown:false},
													// 반복문 start
													{list_action:[ { action:'TRYCATCH',
														try:{
															list_step:[
																{list_action:[
																	{ action:'CHECK', func:'review', description:'내 댓글 확인', check:{ htmls:[ {html:this.htmls.btn_review_delete, exist:false, message:'다음 작업페이지로 이동'} ] } }
																], delay:10},
																{list_action:[
																	{ action:'CLICK', func:'review', click:{ html:this.htmls.btn_master_only, conditions:[{setting:'secret_review'}, {basic:true}] } }
																], delay:10},
																{list_action:[
																	{ action:'CLICK', func:'review', description:'스티커댓글 클릭', click:{ html:this.htmls.btn_sticker_review } }
																], delay:10},
																{list_action:[
																	{ action:'CLICK', func:'review', description:'스티커댓글 종류선택', click:{ html:this.htmls.btn_sticker_category } }
																], delay:10},
																{list_action:[
																	{ action:'LOG_PUSH', func:'review', description:'로그 추가', log_push:true }
																], delay:10},
																{list_action:[
																	{ action:'STATUS', status:{ statuses:[ {increase:'review_count'} ] } }
																], delay:20},
																{list_action:[
																	{ action:'STATUS', status:{ statuses:[ {increase:'review_limit_count'} ] } }
																], delay:20},
																{list_action:[
																	{ action:'CLICK', func:'review', description:'스티커 선택/ 댓글 등록', click:{ html:this.htmls.btn_sticker }, log_push:true }
																], delay:10}
															],
															delay:this.intervals.review
														},
														catch:{
															list_step:[
																{list_action:[ { action:'TRYCATCH',
																	try : {
																		list_step:[
																			{list_action:[ 
																				{ action:'COMPARE', description:'이미 서로이웃 신청된 사람인지 체크', compare:{ type:'!in', pandoras:[{status:'target_user_name'}, {func_name:'neighborhood'}] } } 
																			], delay:2, countdown:false},
																			// 포함되지 않은 경우 -> 서로이웃추가 작업 url로 이동
																			{list_action:[
																				{ action:'NAVER_BLOG_SUBMIT', func_option:this.funcs_option.neighborhood, func:'neighborhood', description:'서로이웃추가 작업 url로 이동'}
																			], delay:2, countdown:false},
																			{list_action:[
																				{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
																			], delay:2, countdown:false}
																		],
																	},
																	catch : {
																		list_step:[
																			// 포함된 경우 -> 새로운 작업 시작
																			{list_action:[
																				{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
																			], delay:2, countdown:false}
																		]
																	}
																} ]}
															],
															countdown:false
														}
													} ]}
													// 반복문 end
												],
												countdown:false
											},
											// 일반 댓글 작업 로직
											catch:{
												list_step:[
													// 반복문 start
													{list_action:[ { action:'TRYCATCH',
														try:{
															list_step:[
																{list_action:[
																	{ action:'CHECK', func:'review', description:'내 댓글 확인', check:{ htmls:[ {html:this.htmls.btn_review_delete, exist:false, message:'다음 작업페이지로 이동'} ] } }
																], delay:10},
																{list_action:[
																	{ action:'CLICK', func:'review', click:{ html:this.htmls.btn_master_only, conditions:[{setting:'secret_review'}, {basic:true}] } }
																], delay:10},
																{list_action:[
																	{ action:'INPUT', func:'review', description:'댓글 입력', input:{ html:this.htmls.input_review, texts:[this.texts.review] } }
																], delay:10},
																{list_action:[
																	{ action:'LOG_PUSH', func:'review', description:'로그 추가', log_push:true }
																], delay:10},
																{list_action:[
																	{ action:'STATUS', status:{ statuses:[ {increase:'review_count'} ] } }
																], delay:10},
																{list_action:[
																	{ action:'STATUS', status:{ statuses:[ {increase:'review_limit_count'} ] } }
																], delay:10},
																{list_action:[
																	{ action:'CLICK', func:'review', description:'댓글 등록', click:{ html:this.htmls.btn_review_submit } }
																], delay:10}
															],
															delay:this.intervals.review
														},
														catch:{
															list_step:[
																{list_action:[ { action:'TRYCATCH',
																	try : {
																		list_step:[
																			{list_action:[ 
																				{ action:'COMPARE', description:'이미 서로이웃 신청된 사람인지 체크', compare:{ type:'!in', pandoras:[{status:'target_user_name'}, {func_name:'neighborhood'}] } } 
																			], delay:2, countdown:false},
																			// 포함되지 않은 경우 -> 서로이웃추가 작업 url로 이동
																			{list_action:[
																				{ action:'NAVER_BLOG_SUBMIT', func_option:this.funcs_option.neighborhood, func:'neighborhood', description:'서로이웃추가 작업 url로 이동'}
																			], delay:2, countdown:false},
																			{list_action:[
																				{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
																			], delay:2, countdown:false}
																		],
																	},
																	catch : {
																		list_step:[
																			// 포함된 경우 -> 새로운 작업 시작
																			{list_action:[
																				{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
																			], delay:2, countdown:false}
																		]
																	}
																} ]}
															],
															countdown:false
														}
													} ]}
													// 반복문 end
												],
												countdown:false
											}
										} ]}
									],
									countdown:false
								},
								catch:{
									list_step:[
										{list_action:[
											{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
										], delay:2, countdown:false}
									],
									countdown:false
								}
							} ]}
						],
						delay:this.intervals.review
					},
					// 서로이웃추가 작업하는 페이지
					{
						urls:{list:[this.urls.neighborhood_url], condition:'AND'},
						htmls:{list:[this.htmls.box_neighborhood], condition:'AND'},
						list_step:[
							{list_action:[ { action:'TRYCATCH',
								try:{
									list_step:[
										// 작업할 계정이 서이추를 허용해놨는지 확인
										{list_action:[ 
											{ action:'CHECK', func:'neighborhood', description:'서로이웃추가 가능 여부 검사', check:{ htmls:[ {html:this.htmls.box_neighborhood_together_disable, exist:false, message:'서로이웃추가 불가/ 새로운 작업 시작'} ] } } 
										], delay:10},
										// 서이추 가능할 경우
										{list_action:[
											{ action:'CLICK', func:'neighborhood', description:'서로이웃 클릭', click:{ html:this.htmls.box_select_neighborhood_together } }
										], delay:30},
										{list_action:[
											{ action:'CLICK', func:'neighborhood', description:'서로이웃 신청', click:{ html:this.htmls.neighborhood_together_execute } }
										], delay:30}
									],
									delay:this.intervals.neighborhood
								},
								catch:{
									list_step:[
										// 서이추 불가능할 경우
										{list_action:[
											{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
										], delay:2}
									],
									countdown:false
								}
							} ]}
						],
						delay:this.intervals.neighborhood,
						next_page_index:0
					},
					{
						urls:{list:[this.urls.neighborhood_second_url], condition:'AND'},
						htmls:{list:[this.htmls.neighborhood_together_confirm], condition:'AND'},
						list_step:[
							{list_action:[
								{ action:'LOG_PUSH', func:'neighborhood', description:'로그 추가', log_push:true }
							], delay:12},
							{list_action:[
								{ action:'STATUS', status:{ statuses:[ {increase:'neighborhood_count'} ] } }
							], delay:12},
							{list_action:[
								{ action:'STATUS', status:{ statuses:[ {increase:'neighborhood_limit_count'} ] } }
							], delay:12},
							{list_action:[
								{ action:'STATUS', status:{ statuses:[ {increase:'count'} ] } }
							], delay:12},
							{list_action:[
								{ action:'CHANGE', func:'neighborhood', description:'서로이웃 신청 메시지 리셋', change:{ html:this.htmls.input_neighborhood_apply, innerHTMLs:{ all:'  ' } } }
							], delay:10},
							{list_action:[
								{ action:'INPUT', func:'neighborhood', description:'서로이웃 신청 메시지 작성', input:{ html:this.htmls.input_neighborhood_apply, texts:[this.texts.friend_messages] } }
							], delay:20},
							{list_action:[
								{ action:'CLICK', func:'neighborhood', description:'서로이웃 신청 완료', click:{ html:this.htmls.neighborhood_together_confirm } }
							], delay:20}
						],
						delay:this.intervals.neighborhood
					},
					{
						urls:{list:[this.urls.neighborhood_second_url], condition:'AND'},
						htmls:{list:[this.htmls.btn_admin_neighborhood_together], condition:'AND'},
						list_step:[
							{list_action:[
								{ action:'GO_PAGE', description:'새로운 작업 시작', go_page:{ page_index:1 } }
							], delay:20}
						],
						delay:10
					}
				],
				stop:[]
			};
		});

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('blogrammerCommunicationService', function($q, $rootScope, arrayService, numberService, grammerSetService){
			this.grammer_key = 'blogrammer';
			this.version_key = 'communication';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['gnb_mail_address']},
					properties:{list:['href']},
					split:{ html:'innerHTML', params:[null, '@naver.com'] },
					check_once: true
				},
				box_view_all:{ tag:'a',
					classes:{list:['plist', 'pcol2', 'hand', '_toggleTopList', 'itemSubjectBoldfont', '_returnFalse']},
					properties:{list:['href', 'tabindex']},
					innerOuterHTMLs:{list:['전체보기']}
				},
				box_user_tit:{ tag:'a',
					parent_html:{ tag:'p',
						parent_html:{ tag:'div', classes:{list:['user_tit']} }
					},
					properties:{list:['href="http://blog.naver.com/MyBlog.nhn"']}
				},
				btn_review_open:{ tag:'a',
					classes:{list:['pcol2', '_cmtList', '_returnFalse']},
					properties:{list:['href']},
					innerOuterHTMLs:{list:['댓글']}
				},
				src_review:{ tag:'iframe',
					properties:{list:['allowtransparency="true"', 'src']},
					correspondings:{
						value:[
							{criteria:'src', contain:'CommentList.nhn'}
						],
						condition:'OR'
					},
					split:{ attr:'src', params:[null, null] }
				},
				box_textarea_at_review_page:{ tag:'textarea',
					classes:{list:['textarea', '_activeId', '_commentRosText']},
					properties:{list:['cols', 'rows', 'id="commentTextArea"']}
				},
				box_review:{ tag:'li',
					parent_html:{ tag:'ul',
						classes:{list:['cmlist']},
						properties:{list:['id="commentList"']}
					},
					classes:{list:['_countableComment']},
					not_classes:{list:['reply']}
				},
				box_already_reply_check:{ tag:'li',
					parent_html:{ tag:'ul',
						classes:{list:['cmlist']},
						properties:{list:['id="commentList"']}
					},
					classes:{list:['reply', '_countableComment']},
					status_index:'review_index'
				},
				box_review_reply:{ tag:'li',
					parent_html:{ tag:'ul',
						classes:{list:['cmlist']},
						properties:{list:['id="commentList"']}
					},
					classes:{list:['reply', 'insert']},
					innerOuterHTMLs:{list:['비밀 답글']}
				},
				btn_review_reply:{ tag:'a',
					classes:{list:['_btnReplyForm', '_rosRestrict', '_commentRosButton', '_returnFalse', 'pcol2']},
					properties:{list:['href']},
					innerOuterHTMLs:{list:['답글']}
				},
				input_review:{ tag:'textarea',
					classes:{list:['textarea','nolog_t','pcol2','_activeId']},
					properties:{list:['name="comment.contents"', 'maxlength="6000"']}
				},
				btn_review_submit:{ tag:'input',
					classes:{list:['_btnComment', 'btn_r', '_activeId']},
					properties:{list:['type="image"', 'src', 'alt="답글입력"']}
				}
			};

			// Url Section
			this.urls = {
				work_first:{ basic:'blog.naver.com', changing:false },
				// 댓글목록 수와 url목록을 가져올 수 있도록 하는 페이지
				work:{ basic:'http://blog.naver.com', extra:{list:[ '/PostList.nhn?blogId=', { grammer_key:'blogrammer', version_key:'communication', status:'identification', no_encode:true }, '&categoryNo=0&currentPage=', { status:'communication_current_page', grammer_key:'blogrammer', version_key:'communication', no_encode:true } ]} },
				// 댓글작업을 할 수 있도록 하는 페이지
				work_review:{ basic:'http://blog.naver.com', extra:{list:[ { grammer_key:'blogrammer', version_key:'communication', status:'review_urls_at_page', status_index:'review_work_index' } ]}, changing:false },
				work_review_check:{ basic:'http://blog.naver.com/CommentList.nhn', changing:false }
			};

			// Interval Section
			this.intervals = {
			};
			
			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
			};

			// Page Section
			this.pages = {
				start:[
					// page_index : 0
					{
						urls : {list:[this.urls.work_first], condition:'AND'},
						htmls : {list:[this.htmls.box_user_tit], condition:'AND'},
						list_step : [
							// 초기화
							{list_action:[
								{ action:'STATUS', description:'초기화', status:{ set:'communication_current_page', value:1 } }
							], delay:3, countdown:false}
						]
					},
					// page_index : 1
					{
						urls : {list:[this.urls.work], condition:'AND'},
						htmls : {list:[this.htmls.box_view_all], condition:'AND'},
						list_step : [
							{list_action:[
								{ action:'CLICK', description:'모든 댓글 목록 클릭', click:{ html:this.htmls.btn_review_open, multiple:true } }
							], delay:3, countdown:false},
							{list_action:[
								{ action:'STATUS', description:'댓글 작업 초기화', status:{ set:'review_work_index', value:0 } }
							], delay:3, countdown:false},
							{list_action:[
								{ action:'SAVE', description:'작업할 댓글 url 목록 저장', save:{ pandoras:[{html:this.htmls.src_review, type:'TEXT', isArray:true}, {status:'review_urls_at_page'}] } },
								{ action:'SAVE', description:'작업할 댓글 url 목록 수 저장', save:{ pandoras:[{html:this.htmls.src_review, type:'COUNT'}, {status:'review_urls_total'}] } }
							], delay:6, countdown:false},
							{list_action:[
								{ action:'STATUS', func:'review', description:'초기화', status:{ set:'review_index', value:0 } }
							], delay:2, countdown:false},
							{list_action:[
								{ action:'GO', description:'댓글 작업 페이지로 이동', go:{ url:this.urls.work_review, delay_position:100 } }
							], delay:3, countdown:false}
						]
					},
					// page_index : 2
					// 댓글페이지에 가서 루프 돌리는 로직
					{
						urls : {list:[this.urls.work_review], condition:'AND'},
						htmls : {list:[this.htmls.box_textarea_at_review_page], condition:'AND'},
						list_step : [
							{list_action:[ { action:'TRYCATCH',
								try : {
									list_step:[
										{list_action:[
											{ action:'CHECK', func:'review', description:'댓글 유무 검사', check:{ htmls:[ {html:this.htmls.box_review, exist:true, message:'댓글 없음/대댓글 작업 불가능'} ] } }
										], delay:2, countdown:false},
										{list_action:[
											{ action:'SAVE', func:'review', description:'작업할 댓글 수 갱신', save:{ pandoras:[{html:this.htmls.box_review, type:'COUNT'}, {status:'review_total'}] } }
										], delay:2, countdown:false},
										{list_action:[ { action:'TRYCATCH',
											try : {
												list_step:[
													{list_action:[ 
														{ action:'TARGET', func:'review', description:'댓글 타겟 설정', target:{ html:this.htmls.box_review, index:{status:'review_index', type:'NUMBER'}, set:true, scroll:{value:true}, body:true } } 
													], delay:2, countdown:false},
													{list_action:[
														{ action:'CHECK', func:'review', description:'답글 버튼 유무 검사', check:{ htmls:[ { target:true, html:this.htmls.btn_review_reply, exist:true, message:'답글 버튼 없음' } ] } }
													], delay:2, countdown:false},
													{list_action:[
														{ action:'CHECK', func:'review', description:'사전 작업 여부 검사', check:{ htmls:[ { html:this.htmls.box_already_reply_check, exist:false, message:'이미 대댓글 작업함' } ] } }
													], delay:2, countdown:false},
													{list_action:[
														{ action:'CLICK', func:'review', description:'답글 버튼 클릭', click:{ target:true, html:this.htmls.btn_review_reply } }
													], delay:2, countdown:false},
													{list_action:[
														{ action:'TARGET', func:'review', description:'타겟팅 해제', target:{ set:false } }
													], delay:2, countdown:false},
													{list_action:[
														{ action:'TARGET', func:'review', description:'답글 ui 타겟 설정', target:{ html:this.htmls.box_review_reply, index:{ basic:0 }, set:true, scroll:{value:true}, body:true } }
													], delay:2, countdown:false},
													{list_action:[
														{ action:'INPUT', func:'review', description:'댓글 입력', input:{ target:true, html:this.htmls.input_review, texts:[this.texts.review] }, message:'Tip : 5개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' }
													], delay:2, countdown:false},
													// start
													// 댓글이 등록될 경우에 아래 catch와 finally를 작업하지 못한다.
													// 그러므로 아래 로직은 댓글 등록을 할 경우에 필요한 status 작업이라 생각하면 된다.
													{list_action:[
														{ action:'STATUS', status:{ statuses:[ {increase:'review_index'} ] } }
													], delay:1, countdown:false},
													{list_action:[
														{ action:'STATUS', status:{ statuses:[ {increase:'count'} ] } }
													], delay:1, countdown:false},
													// end
													{list_action:[
														{ action:'CLICK', func:'review', description:'댓글 등록', click:{ target:true, html:this.htmls.btn_review_submit }, log_push:true, statuses:[{increase:'review_count'}] }
													], delay:5}
												],
												countdown:false
											},
											// 다음 사람에게 타겟팅한다.
											catch : {
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'review', message:{ text:'답글 버튼 없음/ 이미 대댓글 작업함', delay_position:0 } } ], delay:2, countdown:false}
												],
												countdown:false
											},
											finally : {
												list_step:[
													{list_action:[ 
														{ action:'TARGET', func:'review', description:'타겟팅 해제', target:{ set:false } } 
													], delay:2, countdown:false},
													// start
													// catch에 걸려서 여기까지 오게 된 경우에 필요한 status 작업이라 생각하면 된다.
													{list_action:[
														{ action:'STATUS', status:{ statuses:[ {increase:'review_index'} ] } }
													], delay:1, countdown:false},
													{list_action:[
														{ action:'STATUS', status:{ statuses:[ {increase:'count'} ] } }
													], delay:1, countdown:false},
													// end
													{list_action:[ { action:'TRYCATCH',
													 	try:{
													 		list_step:[
													 			{list_action:[ 
													 				{ action:'COMPARE', description:'댓글작업 진행 상황 확인', compare:{ type:'>=', pandoras:[{status:'review_index', type:'NUMBER'}, {status:'review_total', type:'NUMBER'}] } } 
													 			], delay:2, countdown:false},
													 			// 한 페이지 내 댓글작업 끝났을 경우 
													 			{list_action:[
																	{ action:'STATUS', func:'review', description:'초기화', status:{ set:'review_index', value:0 } }
																], delay:2, countdown:false},
												 				{list_action:[
												 					{ action:'STATUS', status:{ statuses:[ {increase:'review_work_index'} ] } }
												 				], delay:2, countdown:false},
												 				{list_action:[ { action:'TRYCATCH', 
												 					try:{
												 						list_step:[
												 							{list_action:[
												 								{ action:'COMPARE', description:'current_page 내 작업 상황 확인', compare:{ type:'>=', pandoras:[{status:'review_work_index', type:'NUMBER'}, {status:'review_urls_total', type:'NUMBER'}] } }
												 							], delay:2, countdown:false},
												 							// current_page내 댓글작업 끝났을 경우
												 							// communication_current_page를 늘리고 다음페이지로 넘어간다.
												 							{list_action:[
												 								{ action:'STATUS', status:{ statuses:[ {increase:'communication_current_page'} ] } }
												 							], delay:2, countdown:false},
												 							{list_action:[
												 								{ action:'GO_PAGE', go_page:{ page_index:1 } }
												 							], delay:2, countdown:false}
												 						],
												 						countdown:false
												 					},
												 					catch:{
												 						list_step:[
												 							// current_page내 댓글작업 끝나지 않았을 경우
															 				{list_action:[
															 					{ action:'GO', description:'다음 댓글 작업 페이지로 이동', go:{ url:this.urls.work_review, delay_position:20 } }
															 				], delay:10, countdown:false}
												 						],
												 						countdown:false
												 					}
												 				} ]}
													 		],
													 		countdown:false
													 	},
													 	catch:{
													 		list_step:[
													 			// 한 페이지 내 댓글작업 끝나지 않았을 경우
													 			{list_action:[
													 				{ action:'GO_PAGE', go_page:{ page_index:2 } }
													 			], delay:2, countdown:false}
													 		],
													 		countdown:false
													 	}
													} ]}
												],
												countdown:false
											}
										} ]}
									],
									countdown:false
								},
								catch : {
									list_step:[
										{list_action:[
						 					{ action:'STATUS', status:{ statuses:[ {increase:'review_work_index'} ] } }
						 				], delay:2, countdown:false},
						 				{list_action:[ { action:'TRYCATCH', 
						 					try:{
						 						list_step:[
						 							{list_action:[
						 								{ action:'COMPARE', description:'current_page 내 작업 상황 확인', compare:{ type:'>=', pandoras:[{status:'review_work_index', type:'NUMBER'}, {status:'review_urls_total', type:'NUMBER'}] } }
						 							], delay:2, countdown:false},
						 							// current_page내 댓글작업 끝났을 경우
						 							{list_action:[
						 								{ action:'STATUS', status:{ statuses:[ {increase:'communication_current_page'} ] } }
						 							], delay:2, countdown:false},
						 							{list_action:[
						 								{ action:'GO_PAGE', go_page:{ page_index:1 } }
						 							], delay:2, countdown:false}
						 						],
						 						countdown:false
						 					},
						 					catch:{
						 						list_step:[
						 							// current_page내 댓글작업 끝나지 않았을 경우
									 				{list_action:[
									 					{ action:'GO', description:'다음 댓글 작업 페이지로 이동', go:{ url:this.urls.work_review, delay_position:20 } }
									 				], delay:10, countdown:false}
						 						],
						 						countdown:false
						 					}
						 				} ]}
									],
									countdown:false
								}
							} ]}

						]
					}
				],
				stop:[]
			};
		});


/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('facegrammerCompetitionService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'facegrammer';
			this.version_key = 'competition';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			this.interval = numberService.getRandomOfNumber(this.getSetting('setting_name_en'), 50);
			this.htmls = {
				html_name:{ tag:null,
					classes:{list:[]},
					properties:{list:[]},
					href:null,
					innerHTMLs:{list:[]}
				}
			};
			this.urls = {
				url_search:{ basic:null, extra:{list:[]}, changing:false },
			};
			this.pages = {
				start:[
					{
						url : null, delay:null,
						htmls : {list:[], condition:null},
						list_step:[
							{list_action:[ { action:null, description:null } ], delay:null}
						]
					}
				],
				stop:[]
			};
		});

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('facegrammerNewfriendService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'facegrammer';
			this.version_key = 'newfriend';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:[
					// 핸드폰 번호가 계정아이디일 경우
					{ tag:'a',
						classes:{list:['_2s25']},
						split:{ attr:'href', params:[] }
					},
					// 이메일이 계정아이디일 경우
					{ tag:'a',
						classes:{list:['_5yf', '_4qx2']},
						split:{ attr:'href', params:[] }
					}
				],
				btn_page:{ tag:'div',
					classes:{list:['_4xjz']},
					innerOuterHTMLs:{list:['페이지']}
				},
				btn_page_two:{ tag:'div',
					classes:{list:['linkWrap', 'noCount']},
					innerOuterHTMLs:{list:['페이지']}
				},
				btn_profile:{ tag:'a',
					classes:{list:['_5pb8', '_8o', '_8s', 'lfloat', '_ohe']},
					properties:{list:['data-ft', 'data-hovercard']},
					href:'https://www.facebook.com/',
					split:{ attr:'href', params:[] },
					correspondings:{
						value:[
							{critetia:'data-hovercard', contain:'/ajax/hovercard/user.php'}
						],
						condition:'AND'
					}
				},
				page_list:{ tag:'a',
					classes:{list:['_2ial', '_8o', '_8s', 'lfloat', '_ohe']},
					properties:{list:['href', 'aria-hidden="true"', 'data-testid']},
					href:'https://www.facebook.com',
					split:{ attr:'href', params:[] }
				},
				btn_page_bulletin: [
					{ tag:'a',
						parent_html:{ tag:'div', classes:{list:['_2yaa']}, not_classes:{list:['_2yap']} },
						classes:{list:['_2yau']},
						innerOuterHTMLs:{list:['게시물']},
						split:{ attr:'href', params:['https://www.facebook.com/'] }
					},
					{ tag:'a',
						classes:{list:['_3f-h']},
						not_classes:{list:['_3f-i']},
						innerOuterHTMLs:{list:['게시물']},
						split:{ attr:'href', params:['https://www.facebook.com/'] }
					}
				],
				btn_page_bulletin_clicked: [
					{ tag:'a',
						parent_html:{ tag:'div', classes:{list:['_2yaa', '_2yap']} },
						classes:{list:['_2yau']},
						innerOuterHTMLs:{list:['게시물']},
						split:{ attr:'href', params:['https://www.facebook.com/'] }
					},
					{ tag:'a',
						classes:{list:['_3f-h', '_3f-i']},
						innerOuterHTMLs:{list:['게시물']},
						split:{ attr:'href', params:['https://www.facebook.com/'] }
					}
				],
				box_page_bulletin:{ tag:'div',
					parent_html:{ tag:'div', classes:{list:['_2uor', '_1qkq', '_1qkx']} },
					classes:{list:['_4-u2', 'mbm', '_5jmm', '_5pat', '_5v3q', '_4-u8']}
				},
				div_review_like_list: { tag:'div',
					parent_html:{ tag:'div', classes:{list:['_ipp']} },
					classes:{list:['_3t53', '_4ar-', '_ipn']}
				},
				tab_liking:{ tag:'a',
					classes:{list:['_2x4v']},
					properties:{list:['rel="ignore"']}
				},
				feel_sympathy_number: { tag:'span',
					properties:{list:['aria-label', 'style="color: rgb(88, 144, 255);"']},
					split:{ attr:'aria-label', params:['해당사항 없음', '명이'] }
				},
				box_user_like_scroll:{ tag:'div', 
					parent_html:{ tag:'div', 
						classes:{list:['_4-i2', '_50f4']} 
					},
					classes:{list:['uiScrollableAreaWrap', 'scrollable']}, 
					properties:{list:['aria-label="스크롤 가능한 부분"', 'role="group"', 'tabindex="0"']}
				},
				btn_like_more: { tag:'a',
					classes:{list:['pam', 'uiBoxLightblue', 'uiMorePagerPrimary']},
					not_properties:{list:['ajaxify']},
					innerOuterHTMLs:{list:['더 보기']}
				},
				box_user_like:{ tag:'li',
					classes:{list:['_5i_q']}
				},
				btn_friend_add:{ tag:'button',
					classes:{list:['_42ft', '_4jy0', 'FriendRequestAdd', 'addButton', '_4jy3', '_517h', '_51sy']},
					not_classes:{list:['hidden_elem']},
					innerOuterHTMLs:{list:['추가', '친구']}
				},
				btn_tab_liking_close: { tag:'a',
					classes:{list:['_42ft', '_5upp', '_50zy', 'layerCancel', '_1f6', '_51-t', '_50-0', '_50z-']},
					innerOuterHTMLs:{list:['닫기']}
				},
				div_spam_page_name: { tag:'a',
					classes:{list:['_2wma']},
					innerOuterHTMLs:{list:{ setting_key:'list_spam' }}
				},
				btn_confirm_friend: { tag:'button',
					classes:{list:['_42ft', '_4jy0', 'layerConfirm', 'uiOverlayButton', '_4jy3', '_4jy1', 'selected', '_51sy']},
					innerOuterHTMLs:{list:['확인']}
				},
				btn_close_friend: { tag:'a',
					classes:{list:['_42ft', '_42fu', 'layerCancel', 'autofocus', 'uiOverlayButton', 'selected', '_42g-', '_42gy']},
					innerOuterHTMLs:{list:['닫기']}
				},
				btn_close_friend2: { tag:'a',
					classes:{list:['autofocus', 'layerCancel', '_4jy0', '_4jy3', '_4jy1', '_51sy', 'selected', '_42ft']},
					innerOuterHTMLs:{list:['닫기']}
				},
				div_scroll_parent: { tag:'div',
					classes:{list:['uiScrollableAreaWrap', 'scrollable']},
					propreties:{list:['aria-label="스크롤 가능한 부분"', 'role="group"', 'tabindex="0"']}
				},
				div_no_result: { tag:'div',
					classes:{list:['_43zq', '_50f3', '_5kx5']},
					innerOuterHTMLs:{list:['사람이나 게시물을 찾으세요? 이름, 장소 혹은 다른 단어를 입력해보세요.']}
				}
			};

			// Url Section
			this.urls = {
				basic:{ basic:'https://www.facebook.com', extra:{list:[]}, changing:false },
				page_basic:{ basic:'https://www.facebook.com/pg/', extra:{list:[]}, changing:false },
				search_page:{ basic:'https://www.facebook.com/search/pages/?q=', extra:{list:[ [{ setting_key:'list_search_tag', method:'getRandom' }] ]}, changing:false },
				page_list:{ basic:'', extra:{ list:[ { html:this.htmls.page_list, random:true } ] }, changing:false },
				page_bulletin_btn:{ basic:'https://www.facebook.com/', extra:{list:[ {html:this.htmls.btn_page_bulletin} ] }, changing:false }
			};

			// Interval Section
			this.intervals = {
				search : { setting_key:'interval_search', method:'getRandomOfNumber', percentage:80 },
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:80 }
			};

			// Func Section
			this.funcs_option = {
				friend_add:{ click:{ click_key:'friend_add' }, percentage:100, boolean:{ click_key:'friend_add', setting_value:100 } }
			};
			
			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.search_page], condition:'AND'},
						htmls : {list:[this.htmls.btn_page, this.htmls.btn_page_two], condition:'OR'},
						list_step : [
							{list_action:[ { action:'CHECK', description:'검색결과 있는지 체크', check:{ htmls:[ {html:this.htmls.div_no_result, exist:false, message:'검색결과 없음'} ] } } ], delay:10},
							{list_action:[ { action:'SCROLL', description:'페이지 검색', scroll:{ interval:5 } } ], delay:80},
							{list_action:[ { action:'GO', description:'페이지 선택', go:{ url:this.urls.page_list, delay_position:90 } } ], delay:10}
						],
						delay:this.intervals.search
					},
					{
						urls : {list:[this.urls.basic], condition:'AND'},
						htmls : {list:[this.htmls.btn_page_bulletin], condition:'AND'},
						list_step : [
							{list_action:[ { action:'TRYCATCH', func:'stopstart', 
								try : {
									list_step:[
										{list_action:[ { action:'CHECK', func:'stopstart', description:'페이지 이름 검사', check:{ htmls:[ { html:this.htmls.div_spam_page_name, exist:false, message:'작업 제외 : 페이지 이름에 스팸목록 포함' } ] } } ], delay: 2, countdown:false }
									]
								},
								catch : {
									list_step:[
										{list_action:[ { action:'MESSEAGE', func:'stopstart', message:{ text:'작업 제외 : 페이지 이름에 스팸목록 포함', delay_position:0 } } ], delay:3, countdown:false}
									]
								}
							} ]},
							{list_action:[ { action:'GO', description:'게시글버튼 클릭', go:{ url:this.urls.page_bulletin_btn } } ], delay:4}
						],
						delay:10
					},
					{
						urls : {list:[this.urls.page_basic], condition:'AND'},
						htmls : {list:[this.htmls.btn_page_bulletin_clicked], condition:'AND'},
						list_step : [
							{list_action:[ { action:'SCROLL', description:'게시글 검색', scroll:{ interval:5, body:true, comparison:{ type: '>=', pandoras: [ {html:this.htmls.box_page_bulletin, type:'COUNT'}, {basic:'전체 게시글 수'} ], message:'페이지 게시글 검색', count_limit:{ setting_key:'page_list_search_limit' }, count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ]},
							{list_action:[ { action:'STATUS', description:'초기화', status:{ set:'bulletin_index', value:0 } } ], delay:3},
							{list_action:[ { action:'SAVE', description:'작업할 게시글 수 갱신', save:{ pandoras:[{html:this.htmls.box_page_bulletin, type:'COUNT'}, {status:'bulletin_total'}] } } ], delay:3},
							{list_action:[ { action:'LOOP', description:'페이지 작업 반복',
								loop:{
									list_step:[
										{list_action:[ { action:'TARGET', description:'게시글 타겟 설정', target:{ html:this.htmls.box_page_bulletin, index:{status:'bulletin_index', type:'NUMBER'}, set:true, scroll:{ value:true }, body:true } } ], delay:2},
										{list_action:[ { action:'TRYCATCH', func:'friend_add',
											try : {
												list_step:[
													{list_action:[ { action:'CHECK', func:'friend_add', check:{ htmls:[ { target:true, html:this.htmls.div_review_like_list, exist:true, message:'친구추가작업 제외 : 공감 한 사람 없음' } ] } } ], delay: 2, countdown:false },
													{list_action:[ { action:'STATUS', func:'friend_add', func_option:this.funcs_option.friend_add, description:'친구추가 작업 초기화', status:{ set:'friend_index', value:0 } } ], delay: 3, countdown:false},
													{list_action:[ { action:'CLICK', func:'friend_add', func_option:this.funcs_option.friend_add, description:'공감한 리스트 팝업 열기', click:{ target:true, html:this.htmls.tab_liking, delay_position:0 } } ], delay:15, countdown:false},
													{list_action:[ { action:'SAVE', func:'friend_add', func_option:this.funcs_option.friend_add, description:'총 공감 수 저장', save:{ pandoras:[{html:this.htmls.feel_sympathy_number, type:'NUMBER'}, {status:'sympathy_total'}], delay_position:50 } } ], delay:2, countdonw:false },
													{list_action:[ { action:'SCROLL', func:'friend_add', func_option:this.funcs_option.friend_add, description:'공감한 리스트 검색', scroll:{ body:false, html:this.htmls.box_user_like_scroll, interval:4, click:{ html:this.htmls.btn_like_more }, comparison:{ type:'infinite', pandoras:[ {html:this.htmls.box_user_like, type:'COUNT'}, {status:'sympathy_total'} ], message:'공감한 리스트 검색', count_confirm:{ setting_key:'count_confirm' }, perentage_error:80 } } } ]},
													{list_action:[ { action:'LOOP', func:'friend_add', func_option:this.funcs_option.friend_add, description:'친구추가 작업 반복', 
														loop:{
															list_step:[
																{list_action:[ { action:'TRYCATCH',
																	try : {
																		list_step:[
																			{list_action:[ { action:'TARGET', func:'friend_add', func_option:this.funcs_option.friend_add, description:'공감한 사람 타겟팅', target:{ body:false, html:this.htmls.box_user_like, index:{status:'friend_index', type:'NUMBER'}, set:true, scroll:{ value:true, parent_html:this.htmls.div_scroll_parent } } } ], delay:2, countdown:false},
																			{list_action:[ { action:'CHECK', func:'friend_add', func_option:this.funcs_option.friend_add, description:'친구추가 여부 검사', check:{ htmls:[ { target:true, html:this.htmls.btn_friend_add, exist:true, message:'친구추가 버튼 없음' } ] } } ], delay:2, countdown:false},
																			{list_action:[ { action:'CLICK', func:'friend_add', func_option:this.funcs_option.friend_add, description:'친구추가', click:{ target:true, html:this.htmls.btn_friend_add } } ], delay: 5, countdown:false, statuses:[{increase:'friend_count'}]},
																			{list_action:[ { action:'CLICK', func:'friend_add', func_option:this.funcs_option.friend_add, click:{ html:this.htmls.btn_confirm_friend } } ], delay: 3, countdown:false},
																			{list_action:[ { action:'CLICK', func:'frined_add', func_option:this.funcs_option.friend_add, click:{ html:this.htmls.btn_close_friend } } ], delay:3, countdown:false},
																			{list_action:[ { action:'CLICK', func:'frined_add', func_option:this.funcs_option.friend_add, click:{ html:this.htmls.btn_close_friend2 } } ], delay:3, countdown:false}
																		],
																		countdown:false
																	},
																	catch : {
																		list_step:[
																			{list_action:[ { action:'MESSEAGE', func:'friend_add', message:{ text:'친구추가 버튼 없음', delay_position:0 } } ], delay:2, countdown:false }
																		],
																		countdown:false
																	},
																	finally : {
																		list_step:[
																			{list_action:[ { action:'TARGET', func:'friend_add', description:'사람 타겟팅 해제', target:{ set:false } } ], delay:2, countdown:false},
																			{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'friend_index'} ] } } ], delay:2, countdown:false}
																		],
																		countdown:false
																	}
																} ]}
															],
															delay: this.intervals.work,
															comparison:{ type:'>=', pandoras:[{status:'friend_index', type:'NUMBER'}, {status:'sympathy_total'}], message:'친구추가 작업' }
														}
													} ]},
													{list_action:[ { action:'CLICK', func:'friend_add', func_option:this.funcs_option.friend_add, description:'공감한 리스트 팝업 닫기', click:{ html:this.htmls.btn_tab_liking_close } } ], delay:2, countdown:false}
												]
											},
											catch : {
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'friend_add', message:{ text:'친구추가 작업 제외 : 공감한 사람 없음', delay_position:0 } } ], delay:3, countdown:false}
												]
											}
										} ]},
										{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'count'}, {increase:'bulletin_index'} ] } } ], countdown:false},
										{list_action:[ { action:'TARGET', description:'타겟 해제', target:{ set:false } } ], delay:5}
									],
									comparison:{ type:'>=', pandoras:[{status:'bulletin_index', type:'NUMBER'}, {status:'bulletin_total'}], message:'친구추가 작업' }
								}
							} ]}
						]
					}
				],
				stop:[]
			};
			
		});

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('facegrammerNewsfeedService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'facegrammer';
			this.version_key = 'newsfeed';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			this.interval = numberService.getRandomOfNumber(this.getSetting('interval_work'), 50);
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['_2s25']},
					properties:{list:['accesskey', 'data-gt', 'href']},
					split:{ attr:'href', params:[] }
				},
				btn_newsfeed:{ tag:'div',
					classes:{list:['linkWrap', 'noCount']},
					properties:{list:['dir="ltr"']},
					innerOuterHTMLs:{list:['뉴스피드']}
				},
				div_newsfeed:{ tag:'div',
					parent_html:{ tag:'div', classes:{list:['_5jmm', '_5pat', '_3lb4', 'x_3-ucv_ev6']} },
					classes:{list:['_3ccb']}
				},
				// div_newsfeed:{ tag:'div',
				// 	classes:{list:['_5jmm', '_5pat', '_3lb4', 'x_3-ucv_ev6']},
				// 	properties:{list:['data-fte="1"', 'data-ftr="1"']}
				// },
				div_not_newsfeed:{ tag:'ul',
					classes:{list:['uiList', 'uiCollapsedList', 'uiCollapsedListHidden', '_5pbz', '_5va0', '_4kg']}
				},
				btn_like_do:{ tag:'a',
					classes:{list:['UFILikeLink', '_4x9-', '_4x9_', '_48-k']},
					not_classes:{list:['UFILinkBright']},
					properties:{list:['aria-pressed="false"']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				btn_like_did:{ tag:'a',
					classes:{list:['UFILikeLink', '_4x9-', '_4x9_', '_48-k']},
					properties:{list:['aria-pressed="true"', 'UFILinkBright']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				btn_view_more:{ tag:'a',
					classes:{list:['_5usd']},
					properties:{list:['role="button"']},
					innerOuterHTMLs:{list:['소식 더 보기']}
				}
			};

			this.urls = {
				url_search:{ basic:'https://www.facebook.com', extra:{list:[]}, changing:false }
			};

			// Interval Section
			this.intervals = {
				work : numberService.getRandomOfNumber(this.getSetting('interval_work'), 50)
			};

			// Func Section
			this.funcs_option = {
				// this.getClick(func_key) 함수는 해당 version의 funcs중 func_key에 해당하는 func_value의 click값을 가져오는 함수이다.
				// this.getSetting(setting_key) 함수는 해당 version의 settings중 setting_key에 해당하는 setting_value의 value값을 가져오는 함수이다.
				like:{ click:this.getClick('like'), percentage:100, boolean:grammerGetService.getBooleanFromBooleanAndPercentage(this.getClick('like'),100) },
				review:{ click:this.getClick('review'), percentage:this.getSetting('percentage_review'), each:true }
			};

			this.pages = {
				start:[
					{
						urls: {list:[this.urls.url_search], condition:'AND'},
						htmls: {list:[this.htmls.btn_newsfeed], condition:'AND'},
						list_step:[
							// newsfeed_index는 타겟을 순차적으로 설정하기 위한 도구이다.
							{list_action:[ { action:'STATUS', func:'stopstart', description:'초기화', status:{ set:'newsfeed_index', value:0, delay_position:100 } } ], delay: 2, countdown: false },
							{list_action:[ { action:'STATUS', func:'stopstart', description:'초기화', status:{ set:'newsfeed_total', value:0, delay_position:100 } } ], delay: 2, countdown: false },
							{list_action:[ { action:'LOOP', func:'stopstart', description:'뉴스피드 작업 반복',
								loop:{
									list_step: [
										{list_action:[ { action:'SCROLL', description:'뉴스피드 검색', scroll:{ interval:5 } } ], delay:20},
										{list_action:[ { action:'TARGET', func:'like', description:'타겟 설정', target:{ html:this.htmls.div_newsfeed, index:{status:'newsfeed_index', type:'NUMBER'}, set:true, scroll:{ value:true, html:this.htmls.btn_view_more }, sort:true } } ], delay: 5, countdown: false },
										{list_action:[ { action:'TRYCATCH', func:'like',
											try: {
												list_step:[
													{list_action:[ 
														{ action:'CHECK', func:'like', description:'좋아요 검사', check:{ htmls:[ { target:true, html:this.htmls.btn_like_did, exist:false, message:'이미 좋아요 중'}, { target:true, html:this.htmls.btn_like_do, exist:true, message:'좋아요 버튼 없음' } ] } },
														{ action:'CHECK', func:'stopstart', description:'뉴스피드 검사', check:{ htmls:[ { target:true, html:this.htmls.div_not_newsfeed, exist:false, message:'뉴스피드 게시글 아님' } ] } }
													], delay:5, countdown: false },
													{list_action:[ { action:'MESSEAGE', func:'stopstart', message:{ text:'좋아요 예정', delay_position:0 } } ], delay: 2, countdown: false },
													{list_action:[ { action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ target:true, html:this.htmls.btn_like_do } } ], statuses:[{increase:'like_count'}], delay: 10, countdown: false }
													
													// {list_action:[ { action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ target:true, html:this.htmls.btn_like_do, index:{status:'count', type:'NUMBER'} } } ], statuses:[{increase:'like_count'}], delay: 10, countdown: false }
													// {list_action:[ { action:'INPUT', func:'review', func_option:this.funcs_option.review, description:'댓글 입력',	input:{ html:this.htmls.input_review, texts:[this.texts.review]}, message:'Tip : 10개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' } ], delay:2, countdown: false },
													// {list_action:[
													// 	{ action:'POST', func:'review', func_option:this.funcs_option.review, description:'댓글 등록',
													// 		post:{ url:this.urls.review, data:{ comment_text: this.texts.review }, headers:[{key:'x-instagram-ajax', value:1}, {key:'x-csrftoken', cookie:'csrftoken' }] }, message:'Tip : 서버에서 댓글을 바로 달아 새로고침해야 확인 가능', statuses:[{increase:'review_count'}]
													// 	}
													// ], delay:5, countdown: false }
												],
												countdown: false
											},
											catch: {
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'stopstart', message:{ text:'뉴스피드작업 제외 : 이미 좋아요 한 게시글 or 뉴스피드 게시글 아님', delay_position:0 } } ], delay: 2, countdown: false },
													{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'count'} ] } } ], delay: 2, countdown: false }
												],
												countdown: false
											}
										} ] },
										{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'newsfeed_index'} ] } } ], delay: 2, countdown: false },
										{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'count'} ] } } ], delay: 2, countdown: false },
										{list_action:[ { action:'TARGET', func:'like', description:'타겟 해제', target:{ set:false } } ], delay: 5, countdown: false }
									],
									delay:this.intervals.work,
									comparison:{ type:'infinite', pandoras:[{status:'newsfeed_index', type:'NUMBER'}, {status:'newsfeed_total', type:'NUMBER'}], message:'뉴스피드' }
								} }
							], statuses:[{increase:'count'}], stop:true }
						]
					}
				],
				stop:[]
			};
		});

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('facegrammerPageService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'facegrammer';
			this.version_key = 'page';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			// Html Section
			this.htmls = {
				identification:[
					// 핸드폰 번호가 계정아이디일 경우
					{ tag:'a',
						classes:{list:['_2s25']},
						split:{ attr:'href', params:[] }
					},
					// 이메일이 계정아이디일 경우
					{ tag:'a',
						classes:{list:['_5yf', '_4qx2']},
						split:{ attr:'href', params:[] }
					},
					{ tag:'a',
						classes:{list:['_2wmb']},
						properties:{list:['href', 'data-hover', 'data-tooltip-content']},
						split:{ html:'innerHTML', params:['@',null] }
					}
				],
				page_list_section:{ tag:'div',
					classes:{list:['_4ciy']},
					innerOuterHTMLs:{list:['페이지']}
				},
				page_list_element:{ tag:'li',
					parent_html:{ tag:'ul', classes:{list:['_bui', 'nonDroppableNav', '_3-96']}, not_properties:{list:['data-ft']} },
					classes:{list:['clearfix', 'sideNavItem', 'stat_elem']}
				},
				page_url:{ tag:'a',
					parent_html:{ tag:'li', 
						parent_html:{ tag:'ul', classes:{list:['_bui', 'nonDroppableNav', '_3-96']}, not_properties:{list:['data-ft']} }, 
						classes:{list:['clearfix', 'sideNavItem', 'stat_elem']} },
					classes:{list:['_5afe']},
					split:{ attr:'href', params:['https://www.facebook.com/'] }
				},
				page_tab:[
					{ tag:'li',
						classes:{list:['_5vwz', '_5vwy', '_45hc', '_1hqh']},
						split:{ attr:'href', params:[] }
					},
					{ tag:'li',
						classes:{list:['_ju-', '_5vwz', '_5vwy', '_45hc', '_1hqh']},
						split:{ attr:'href', params:[] }
					}
				],
				box_page_bulletin:{ tag:'div',
					parent_html:{ tag:'div', classes:{list:['_2uor', '_1qkq', '_1qkx']} },
					classes:{list:['_4-u2', 'mbm', '_5jmm', '_5pat', '_5v3q', '_4-u8']}
				},
				tab_liking:{ tag:'a',
					classes:{list:['_2x4v']},
					properties:{list:['rel="ignore"']}
				},
				box_user_like_scroll:{ tag:'div',
					parent_html:{ tag:'div', 
						parent_html:{ tag:'div', classes:{list:['_4-i2', '_50f4']} },
						classes:{list:['uiScrollableAreaWrap', 'scrollable']}, 
						properties:{list:['aria-label="스크롤 가능한 부분"', 'role="group"', 'tabindex="0"']} 
					},
					classes:{list:['uiScrollableAreaBody']},
					properties:{list:['style="width:445px;"']}
				},
				box_my_friend_scroll:{ tag:'div',
					classes:{list:['fbProfileBrowserResult', 'scrollable', 'threeColumns', 'hideSummary']}
				},
				box_user_like:{ tag:'li',
					classes:{list:['_5i_q']}
				},
				box_my_friend_list:{ tag:'li',
					classes:{list:['fbProfileBrowserListItem', '_1sn']}
				},
				feel_sympathy_number: { tag:'span',
					properties:{list:['aria-label', 'style="color: rgb(88, 144, 255);"']},
					split:{ attr:'aria-label', params:['해당사항 없음', '명이'] }
				},
				btn_like_more: { tag:'a',
					classes:{list:['pam', 'uiBoxLightblue', 'uiMorePagerPrimary']},
					innerOuterHTMLs:{list:['더 보기']}
				},
				btn_bulletin_like_do: { tag:'a',	
					classes:{list:['UFILikeLink', '_4x9-', '_4x9_', '_48-k']},
					properties:{list:['aria-pressed="false"']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				btn_bulletin_like_did: { tag:'a',
					classes:{list:['UFILikeLink', '_4x9-', '_4x9_', '_48-k', 'UFILinkBright']},
					properties:{list:['aria-pressed="true"']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				btn_invite_do: { tag:'a',
					classes:{list:['_42ft', '_4jy0', '_4jy3', '_517h', '_51sy']},
					innerOuterHTMLs:{list:['초대']}
				},
				btn_review_list: { tag:'a',
					classes:{list:['_p']},
					innerOuterHTMLs:{list:['작성된 순서']}
				},
				btn_review_like_do: { tag:'a',
					classes:{list:['UFILikeLink']},
					properties:{list:['title="좋아요"']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				btn_review_more: { tag:'a',
					classes:{list:['UFIPagerLink']},
					innerOuterHTMLs:{list:['더 보기']}
				},
				div_review_element: { tag:'div',
					classes:{list:['UFIRow', 'UFIComment', '_4oep']},
					properties:{list:['role="article"']}
				},
				div_review_like_list: { tag:'div',
					parent_html:{ tag:'div', classes:{list:['_ipp']} },
					classes:{list:['_3t53', '_4ar-', '_ipn']}
				},
				btn_tab_liking_close: { tag:'a',
					classes:{list:['_42ft', '_5upp', '_50zy', 'layerCancel', '_463u', '_51-t', '_50-0', '_50z-']},
					innerOuterHTMLs:{list:['닫기']}
				},
				div_review_check_first: { tag:'a',
					classes:{list:['_ipm']},
					split:{ html:'innerHTML', params:['댓글 ','개'], type:'NUMBER' }
				},
				div_review_check_second: { tag:'a',
					classes:{list:['UFIPagerLink']},
					innerOuterHTMLs:{list:['더 보기']},
					split:{ html:'innerHTML', params:['댓글 ','개'], type:'NUMBER' }
				},
				div_review_check_third: { tag:'span',
					classes:{list:['fcg', 'UFIPagerCount']},
					split:{ html:'innerHTML', params:['해당사항 없음', '개 중'], type:'NUMBER' }
				},
				btn_page_home: [
					{ tag:'a',
						classes:{list:['_2yau']},
						innerOuterHTMLs:{list:['홈']}
					},
					{ tag:'a',
						classes:{list:['_3f-h']},
						innerOuterHTMLs:{list:['홈']}
					}
				],
				btn_page_bulletin: [
					{ tag:'a',
						parent_html:{ tag:'div', 
							classes:{list:['_2yaa']}, 
							not_classes:{list:['_2yap']}
						},
						classes:{list:['_2yau']},
						innerOuterHTMLs:{list:['게시물']}
					},
					{ tag:'a',
						classes:{list:['_3f-h']},
						not_classes:{list:['_3f-i']},
						innerOuterHTMLs:{list:['게시물']}
					}
				],
				btn_page_bulletin_clicked: [
					{ tag:'a',
						parent_html:{ tag:'div', 
							classes:{list:['_2yaa', '_2yap']} 
						},
						classes:{list:['_2yau']},
						innerOuterHTMLs:{list:['게시물']}
					},
					{ tag:'a',
						classes:{list:['_3f-h', '_3f-i']},
						innerOuterHTMLs:{list:['게시물']}
					}
				],
				div_spam: { tag:'div',
					classes:{list:['UFICommentContent']},
					innerOuterHTMLs:{list:{ setting_key:'list_spam' }}
				},
				btn_friend_invite : { tag:'a',
					classes:{list:['_39g5']},
					properties:{list:['role="button"']},
					innerOuterHTMLs:{list:['친구에게 페이지 좋아요 요청']}
				},
				btn_friend_invite_close : { tag:'a',
					classes:{list:['_42ft', '_5upp', '_50zy', 'layerCancel', '_51-t', '_50-0', '_50z-']}
				},
				btn_friend_invite_indivisual : { tag:'a',
					classes:{list:['uiButton', '_1sm']},
					innerOuterHTMLs:{list:['초대']}
				}
			};

			// Url Section
			this.urls = {
				page_bulletin_btn:{ basic:'https://www.facebook.com/', extra:{list:[]} },
				page_bulletin_btn_business:{ basic:'https://business.facebook.com/', extra:{list:[]} }
			};

			// Interval Section
			this.intervals = {
				search: { setting_key:'interval_search', method:'getRandomOfNumber', percentage:30 },
				prepare: { setting_key:'interval_prepare', method:'getRandomOfNumber', percentage:30 },
				work: { setting_key:'interval_work', method:'getRandomOfNumber', percentage:30 }
			};

			// Func Section
			this.funcs_option = {
				review_like:{ click:{ click_key:'review_like' }, percentage:100, boolean:{ click_key:'review_like', setting_value:100 } },
				bulletin_invite:{ click:{ click_key:'bulletin_invite' }, percentage:100, boolean:{ click_key:'bulletin_invite', setting_value:100 } },
				friend_invite:{ click:{ click_key:'friend_invite' }, percentage:100, boolean:{ click_key:'friend_invite', setting_value:100 }, html_check:{ check:true } }
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[], condition:'OR'},
						htmls : {list:[this.htmls.page_tab, this.htmls.btn_page_home, this.htmls.btn_page_bulletin], condition:'AND'},
						list_step:[
							{list_action:[ { action:'CLICK', func:'friend_invite', func_option:this.funcs_option.friend_invite, description:'친구에게 페이지 좋아요 요청 버튼 클릭', click:{ html:this.htmls.btn_friend_invite } } ], delay:10, countdown:false},
							{list_action:[ { action:'SCROLL', func:'friend_invite', func_option:this.funcs_option.friend_invite, description:'내 친구들 검색', scroll:{ interval:5, html:this.htmls.box_my_friend_scroll, comparison:{ type:'>=', pandoras:[ {html:this.htmls.box_my_friend_list, type:'COUNT'}, {basic:'전체 내 친구들 수'} ], message:'내 친구들 검색', count_confirm:{ setting_key:'count_confirm' }, perentage_error:80 } } } ]},
							{list_action:[ { action:'STATUS', func:'friend_invite', func_option:this.funcs_option.friend_invite, description:'초기화', status:{ set:'friend_index', value:0 } } ], delay:3},
							{list_action:[ { action:'SAVE', func:'friend_invite', func_option:this.funcs_option.friend_invite, description:'작업할 친구들 수 갱신', save:{ pandoras:[{html:this.htmls.box_my_friend_list, type:'COUNT'}, {status:'friend_total'}] } } ], delay:3},
							{list_action:[ { action:'LOOP', func:'friend_invite', func_option:this.funcs_option.friend_invite, description:'내 친구들 페이지 초대 작업 반복', 
								loop:{
									list_step:[
										{list_action:[ { action:'TRYCATCH', 
											try : {
												list_step:[
													{list_action:[ { action:'TARGET', func:'friend_invite', func_option:this.funcs_option.friend_invite, description:'내 친구 타겟 설정', target:{ html:this.htmls.box_my_friend_list, index:{status:'friend_index', type:'NUMBER'}, set:true, scroll:{value:true} } } ], delay:2, countdown:false},
													{list_action:[ { action:'CHECK', func:'friend_invite', func_option:this.funcs_option.friend_invite, description:'초대 여부 검사', check:{ htmls:[ { target:true, html:this.htmls.btn_friend_invite_indivisual, exist:true, message:'초대 버튼 없음' } ] } } ], delay:2, countdown:false},
													{list_action:[ { action:'CLICK', func:'friend_invite', func_option:this.funcs_option.friend_invite, description:'초대 작업 시작', click:{ target:true, html:this.htmls.btn_friend_invite_indivisual } } ], delay: 5, countdown:false, statuses:[{increase:'friend_invite_count'}]}
												],
												countdown:false
											},
											catch : {
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'friend_invite', func_option:this.funcs_option.friend_invite, message:{ text:'초대 버튼 없음', delay_positon:0 } } ], delay:2, countdown:false}
												],
												countdown:false
											},
											finally : {
												list_step:[
													{list_action:[ { action:'TARGET', func:'friend_invite', description:'친구 타겟팅 해제', target:{ set:false } } ], delay:2, countdown:false}, 
													{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'friend_index'} ] } } ], delay:2, countdown:false}
												],
												countdown:false
											}	
										} ]}
									],
									delay: this.intervals.work,
									comparison:{ type:'>=', pandoras:[{status:'friend_index', type:'NUMBER'}, {status:'friend_total'}], message:'초대 작업' }
								}
							} ]},
							{list_action:[ { action:'CLICK', func:'friend_invite', func_option:this.funcs_option.friend_invite, description:'내 친구들 리스트 닫기', click:{ html:this.htmls.btn_friend_invite_close } } ], delay:2, countdown:false},
							{list_action:[ { action:'CLICK', description:'게시글버튼 클릭', click:{ html:this.htmls.btn_page_bulletin, delay_position:100 } } ], delay:6, countdown:false}
						]
					},
					{
						urls : {list:[], condition:'OR'},
						htmls : {list:[this.htmls.page_tab, this.htmls.btn_page_bulletin_clicked], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SCROLL', description:'게시글 검색', scroll:{ interval:5, body:true, comparison:{ type: '>=', pandoras: [ {html:this.htmls.box_page_bulletin, type:'COUNT'}, {basic:'전체 게시글 수'} ], message:'페이지 게시글 검색', count_limit:{ setting_key:'page_list_search_limit' }, count_confirm:{ setting_key:'count_confirm' }, perentage_error:80 } } } ] },
							{list_action:[ { action:'STATUS', description:'초기화', status:{ set:'bulletin_index', value:0 } } ], delay:3 },
							{list_action:[ { action:'SAVE', description:'작업할 게시글 수 갱신', save:{ pandoras:[{html:this.htmls.box_page_bulletin, type:'COUNT'}, {status:'bulletin_total'}] } } ], delay:3},
							{list_action:[ { action:'LOOP', description:'페이지 작업 반복',
								loop:{
									list_step:[
										{list_action:[ { action:'TARGET', description:'게시글 타겟 설정', target:{ html:this.htmls.box_page_bulletin, index:{status:'bulletin_index', type:'NUMBER'}, set:true, scroll:{ value:true }, body:true } } ], delay:2},
										{list_action:[ { action:'TRYCATCH', func:'bulletin_invite',
											try : {
												list_step:[
													{list_action:[ { action:'CHECK', func:'bulletin_invite', check:{ htmls:[ { target:true, html:this.htmls.div_review_like_list, exist:true, message:'초대작업 제외 : 좋아요 한 사람 없음' } ] } } ], delay: 2, countdown:false },
													{list_action:[ { action:'STATUS', func_option:this.funcs_option.bulletin_invite, description:'초대 작업 초기화', status:{ set:'invite_index', value:0 } } ], delay: 2, countdown:false }, 
													{list_action:[ { action:'CLICK', func:'bulletin_invite', func_option:this.funcs_option.bulletin_invite, description:'공감한 리스트 팝업 열기', click:{ target:true, html:this.htmls.tab_liking, delay_position:0 } } ], delay:10, countdown:false },
													{list_action:[ { action:'SAVE', func:'bulletin_invite', func_option:this.funcs_option.bulletin_invite, description:'총 공감 수 저장', save:{ pandoras:[{html:this.htmls.feel_sympathy_number, type:'NUMBER'}, {status:'sympathy_total'}], delay_position:50 } } ], delay:2, countdown:false },
													{list_action:[ { action:'SCROLL', func:'bulletin_invite', func_option:this.funcs_option.bulletin_invite, description:'공감한 리스트 검색', scroll:{ html:this.htmls.box_user_like_scroll, interval:4, click:{ html:this.htmls.btn_like_more }, comparison:{ type:'infinite', pandoras:[ {html:this.htmls.box_user_like, type:'COUNT'}, {status:'sympathy_total'} ], message:'공감한 리스트 검색', count_confirm:{ setting_key:'count_confirm' }, perentage_error:80 } } } ] },
													{list_action:[ { action:'LOOP', func:'bulletin_invite', func_option:this.funcs_option.bulletin_invite, description:'초대 작업 반복',
														loop:{
															list_step:[
																{list_action:[ { action:'TRYCATCH',
																	try : {
																		list_step:[
																			{list_action:[ { action:'TARGET', func:'bulletin_invite', func_option:this.funcs_option.bulletin_invite, description:'공감한 사람 타겟팅', target:{ html:this.htmls.box_user_like, index:{status:'invite_index', type:'NUMBER'}, set:true, scroll:{ value:true } } } ], delay:2, countdown:false},
																			{list_action:[ { action:'CHECK', func:'bulletin_invite', func_option:this.funcs_option.bulletin_invite, description:'초대 여부 검사', check:{ htmls:[ { target:true, html:this.htmls.btn_invite_do, exist:true, message:'초대 버튼 없음' } ] } } ], delay:1, countdown:false},
																			{list_action:[ { action:'CLICK', func:'bulletin_invite', func_option:this.funcs_option.bulletin_invite, description:'초대 작업 시작', click:{ target:true, html:this.htmls.btn_invite_do } } ], delay: 5, countdown:false, statuses:[{increase:'invite_count'}] }
																		],
																		countdown:false
																	},
																	catch : {
																		list_step:[
																			{list_action:[ { action:'MESSEAGE', func:'bulletin_invite', message:{ text:'초대 버튼 없음', delay_position:0 }} ], delay:2, countdown:false }
																		],
																		countdown:false
																	},
																	finally : {
																		list_step:[
																			{list_action:[ { action:'TARGET', func:'bulletin_invite', description:'사람 타겟팅 해제', target:{ set:false } } ], delay:2, countdown:false},
																			{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'invite_index'} ] } } ], delay:2, countdown:false}
																		],
																		countdown:false
																	}
																} ]}
															],
															delay: this.intervals.work,
															comparison:{ type:'>=', pandoras:[{status:'invite_index', type:'NUMBER'}, {status:'sympathy_total'}], message:'초대 작업' }
														} 
													} ]},
													{list_action:[ { action:'CLICK', func:'bulletin_invite', func_option:this.funcs_option.bulletin_invite, description:'공감한 리스트 팝업 닫기', click:{ html:this.htmls.btn_tab_liking_close } } ], delay:2, countdown:false }
												]
											},
											catch : {
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'bulletin_invite', message:{ text:'초대작업 제외 : 좋아요 한 사람 없음', delay_position:0 } } ], delay:3, countdown:false }
												]
											}
										} ]},

										{list_action:[ { action:'TARGET', description:'게시글 타겟 설정', target:{ html:this.htmls.box_page_bulletin, index:{status:'bulletin_index', type:'NUMBER'}, set:true, scroll:{ value:true }, body:true } } ], delay:2},

										{list_action:[ { action:'TRYCATCH', func:'review_like',
											try : {
												list_step:[
													{list_action:[ { action:'CHECK', func:'review_like', func_option:this.funcs_option.review_like, description:'댓글 유무 검사', check:{ htmls:[ { target:true, html:this.htmls.btn_review_list, exist:true, message:'댓글 좋아요 작업 제외 : 댓글 없음' } ] } } ], delay: 2, countdown:false},
													{list_action:[ { action:'STATUS', func:'review_like', func_option:this.funcs_option.review_like, description:'댓글 좋아요 작업 초기화', func_option:this.funcs_option.review_like, status:{ set:'like_index', value:0 } } ], delay: 2, countdown:false },

													{list_action:[ { action:'TRYCATCH', func:'review_like', 
														try : {
															list_step:[
																{list_action:[ { action:'CHECK', func:'review_like', description:'총 댓글 수 체크', check:{ htmls:[ { target:true, html:this.htmls.div_review_check_first, exist:true } ] } } ], delay: 1, countdown:false},
																{list_action:[ { action:'SAVE', func:'review_like', func_option:this.funcs_option.review_like, description:'총 댓글 수 저장', save:{ pandoras:[{html:this.htmls.div_review_check_first, type:'NUMBER'}, {status:'review_total'}], delay_position:50 } } ], delay:1, countdown:false}
															]
														},
														catch : {
															list_step:[
																{list_action:[ { action:'CHECK', func:'review_like', description:'총 댓글 수 체크', check:{ htmls:[ { target:true, html:this.htmls.div_review_check_second, exist:true } ] } } ], delay: 1, countdown:false},
																{list_action:[ { action:'SAVE', func:'review_like', func_option:this.funcs_option.review_like, description:'총 댓글 수 저장', save:{ pandoras:[{html:this.htmls.div_review_check_second, plus:2, type:'NUMBER'}, {status:'review_total'}], delay_position:50 } } ], delay:1, countdown:false}
															]
														},
														check : {
															list_step:[
																{list_action:[ { action:'CHECK', func:'review_like', description:'총 댓글 수 체크', check:{ htmls:[ { target:true, html:this.htmls.div_review_check_third, exist:true } ] } } ], delay: 1, countdown:false},
																{list_action:[ { action:'SAVE', func:'review_like', func_option:this.funcs_option.review_like, description:'총 댓글 수 저장', save:{ pandoras:[{html:this.htmls.div_review_check_third, type:'NUMBER'}, {status:'review_total'}], delay_position:50 } } ], delay:1, countdown:false}
															]
														},
														finally : {
															list_step:[
																{list_action:[ { action:'TRYCATCH', func:'review_like', 
																	try : {
																		list_step:[
																			{list_action:[ { action:'CHECK', func:'review_like', check:{ status:'review_total', exist:true } } ], delay: 1, countdown:false}
																		]
																	},
																	catch : {
																		list_step:[
																			{list_action:[ { action:'SAVE', func:'review_like', func_option:this.funcs_option.review_like, description:'총 댓글 수 저장', save:{ pandoras:[{html:this.htmls.div_review_element, type:'COUNT', target:true}, {status:'review_total'}], delay_position:50 } } ], delay:5, countdown:false}
																		]
																	}
																} ]},
																{list_action:[ { action:'MESSEAGE', func:'review_like', message:{ text:'총 댓글 수 저장 완료' } } ], delay: 2, countdown:false}
															]
														}
													} ]},

													{list_action:[ { action:'MULTI_CLICK', func:'review_like', func_option:this.funcs_option.review_like, description:'댓글 리스트 검색', click:{ html:this.htmls.btn_review_more, interval:3, target:true, comparison:{ type: '>=', pandoras : [ {html:this.htmls.div_review_element, type:'COUNT', target:true}, {status:'review_total'} ], message:'댓글 검색 작업', count_confirm:{ setting_key:'count_confirm' }, perentage_error:80 } } } ] },
													{list_action:[ { action:'LOOP', func:'review_like', func_option:this.funcs_option.review_like, description:'댓글 좋아요 작업 반복', 
														loop:{
															list_step:[
																{list_action:[ { action:'TRYCATCH',
																	try : {
																		list_step:[
																			{list_action:[ { action:'TARGET', func:'review_like', func_option:this.funcs_option.review_like, description:'댓글 타겟팅', target:{ html:this.htmls.div_review_element, index:{status:'like_index', type:'NUMBER'}, set:true, scroll:{ value:true } } } ], delay:1, countdown:false },
																			{list_action:[ 
																				{ action:'CHECK', func:'review_like', func_option:this.funcs_option.review_like, description:'댓글 좋아요 여부 검사', check:{ htmls:[ { target:true, html:this.htmls.btn_review_like_do, exist:true, message:'이미 댓글 좋아요 중' } ] } },
																				{ action:'CHECK',						   func_option:this.funcs_option.review_like, description:'스팸 검사', check:{ htmls:[ { target:true, html:this.htmls.div_spam, exist:false, message:'스팸 단어를 포함하고 있어요!:(' } ] } } 
																			], delay:1, countdown:false},
																			{list_action:[ { action:'CLICK', func:'review_like', func_option:this.funcs_option.review_like, description:'댓글 좋아요', click:{ target:true, html:this.htmls.btn_review_like_do } } ], delay: 5, countdown:false, statuses:[{increase:'review_like_count'}]}
																		],
																		countdown:false
																	},
																	catch : {
																		list_step:[
																			{list_action:[ { action:'MESSEAGE', func:'review_like', message:{ text:'이미 댓글 좋아요/좋아요 신청 중' }} ], delay:1, countdown:false }
																		],
																		countdown:false
																	},
																	finally : {
																		list_step:[
																			{list_action:[ { action:'TARGET', func:'review_like', description:'댓글 타겟팅 해제', target:{ set:false } } ], delay:1, countdown:false},
																			{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'like_index'} ] } } ], delay:1, countdown:false}
																		],
																		countdown:false
																	}
																} ]}
															],
															delay: this.intervals.work, 
															comparison:{ type:'>=', pandoras:[{status:'like_index', type:'NUMBER'}, {status:'review_total', type:'NUMBER'}], message:'댓글 좋아요 작업' }
														}
													} ]}
												]
											},
											catch : {
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'review_like', message:{ text:'댓글 좋아요 작업 제외 : 댓글 없음', delay_position:0 } } ], delay:3, countdown:false }
												]
											}
										} ]},
										{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'count'}, {increase:'bulletin_index'} ] } } ], countdown:false },
										{list_action:[ { action:'TARGET', description:'타겟 해제', target:{ set:false } } ], delay:5}
									],
									comparison:{ type:'>=', pandoras:[{status:'bulletin_index', type:'NUMBER'}, {status:'bulletin_total'}], message:'페이지 작업' }
								}
							} ]}
						],
						statuses:[{increase:'count'}]
					}
				],
				stop:[]
			};
		});

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('facegrammerUnfriendService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'facegrammer';
			this.version_key = 'unfriend';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['_2s25']},
					split:{ attr:'href', params:[] }
				},
				box_friend_recommand:{ tag:'div',
					classes:{list:['mtl', '_30d', '_5ewg']},
					properties:{list:['id="fbSearchResultsBox"']},
					innerOuterHTMLs:{list:['알 수도 있는 사람']}
				},
				box_friend_doing:{ tag:'div',
					classes:{list:['mtl', '_30d', '_5ewg', '_5n-u']},
					innerOuterHTMLs:{list:['친구 요청이 전송됨']}
				},
				box_friend_doing_none:{ tag:'div',
					classes:{list:['mtl', '_30d', '_5ewg', '_5n-u']},
					innerOuterHTMLs:{list:['전송된 친구 요청 없음']}
				},
				btn_more:{ tag:'a',
					// parent_html:{ tag:'div', classes:{list:['mtl', '_30d', '_5ewg', '_5n-u']}, innerOuterHTMLs:{list:['친구 요청이 전송됨']} },
					classes:{list:['pam', 'uiBoxLightblue', '_5cz', 'uiMorePagerPrimary']},
					properties:{list:['rel="async"', 'role="button"']},
					innerOuterHTMLs:{list:['요청 더 보기']}
				},
				box_friend:{
					parent_html:{ tag:'div', classes:{list:['mtl', '_30d', '_5ewg', '_5n-u']}, innerOuterHTMLs:{list:['친구 요청이 전송됨']} },
					classes:{list:['clearfix', 'ruUserBox', '_3-z']}
				},
				btn_friend_doing:{ tag:'button',
					classes:{list:['_42ft', '_4jy0', 'FriendRequestOutgoing', 'enableFriendListFlyout', 'outgoingButton', 'enableFriendListFlyout', '_4jy3', '_517h', '_51sy']},
					not_classes:{list:['hidden_elem']},
					properties:{list:['data-flloc="ru_req_promo"', 'data-profileid', 'type="button"', 'data-cancelref="outgoing_requests"']},
					innerOuterHTMLs:{list:['친구 요청 전송됨']}
				},
				btn_unfriend_do:{ tag:'li',
					classes:{list:['uiMenuItem', 'FriendListCancel']},
					properties:{list:['data-label="친구 요청 취소"']},
					innerOuterHTMLs:{list:['친구 요청 취소']}
				},
				btn_unfriend_do_confirm:{ tag:'button',
					classes:{list:['_42ft', '_42fu', 'layerConfirm', 'uiOverlayButton', '_42g-', '_42gy']},
					properties:{list:['value="1"', 'type="submit"']},
					innerOuterHTMLs:{list:['요청 취소']}
				}
			};

			// Url Section
			this.urls = {
				work:{ basic:'https://www.facebook.com/friends/requests/?fcref=ff&outgoing=1', changing:false }
			};

			// Interval Section
			this.intervals = {
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.work], condition:'AND'},
						htmls : {list:[this.htmls.box_friend_doing, this.htmls.box_friend_doing_none], condition:'OR'},
						list_step:[
							{list_action:[ { action:'REMOVE', func:'unfriend', description:'알 수도 있는 사람 제거', remove:{ html:this.htmls.box_friend_recommand } } ], delay:3},
							{list_action:[ { action:'SCROLL', func:'unfriend', description:'요청 중인 친구 검색', scroll:{ count:0.3, click:{ html:this.htmls.btn_more}, comparison:{type:'>=', pandoras:[{html:this.htmls.box_friend, type:'COUNT'}, {basic:'요청 중인 친구'} ], message:'요청 중인 친구', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ] },
							{list_action:[ { action:'SAVE', func:'unfriend', description:'요청 수 저장', save:{ pandoras:[{html:this.htmls.box_friend, type:'COUNT'}, {status :'unfriend_total'}] } } ], delay:3 },
							{list_action:[ { action:'STATUS', func:'unfriend', status:{ set:'unfriend_count', value:0 } } ], delay:1 },
							{list_action:[ { action:'LOOP', func:'unfriend', description:'요청 취소 반복',
								loop:{
									list_step:[
										{list_action:[ { action:'TARGET', func:'unfriend', description:'타겟 설정', target:{ html:this.htmls.box_friend, index:{status:'unfriend_count', type:'NUMBER'}, set:true, scroll:{ value:true } } } ], delay:5 },
										{list_action:[ { action:'CLICK', func:'unfriend', description:'팝업 열기', click:{ target:true, html:this.htmls.btn_friend_doing, delay_position:50 } } ], delay:5},
										{list_action:[ { action:'CLICK', func:'unfriend', description:'요청 취소 클릭', click:{ html:this.htmls.btn_unfriend_do, delay_position:50 } } ], delay:10},
										{list_action:[ { action:'CLICK', func:'unfriend', description:'요청 취소', click:{ html:this.htmls.btn_unfriend_do_confirm, delay_position:50 } } ], log_push:true, delay:10, statuses:[{increase:'unfriend_count'}, {increase:'count'}]},
										{list_action:[ { action:'TARGET', func:'unfriend', description:'타겟 해제', target:{ set:false } } ], delay:5}
									],
									comparison:{type:'>=', pandoras:[{status :'unfriend_count', type:'NUMBER'}, {status :'unfriend_total', type:'NUMBER'}], message:'요청취소 중' },
									delay:this.intervals.work
								} 
							} ], stop:true }
						]
					}
				],
				stop:[]
			};

		});


/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('instagrammerMyfollowerService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'instagrammer';
			this.version_key = 'myfollower';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			this.htmls = {
				identification:[
					{ tag:'a',
						classes:{list:['_soakw', '_vbtk2', 'coreSpriteDesktopNavProfile']},
						innerOuterHTMLs:{list:['프로필']},
						split:{ attr:'href', params:['/', '/'] }
					},
					{ tag:'a',
						classes:{list:['_gx3bg']},
						split:{ attr:'href', params:['/', '/'] },
						decent_index:3
					},
					{ tag:'strong',
						classes:{list:['-cx-PRIVATE-NavBar__username']},
						split:{ html:'innerHTML' }
					}
				],
				user_name:[
					{ tag:'a',
						classes:{list:['_4zhc5', 'notranslate', '_ook48']}
					},
					{ tag:'a',
						classes:{list:['_4zhc5', 'notranslate', '_jozwt']}
					}
				],
				myfeed_list:{ tag:'div',
					parent_html:{tag:'div', classes:{list:['_qj7yb']}}
				},
				myfeed_list_second:{ tag:'main',
					classes:{list:['_6ltyr']}
				},
				myfeed_list_third:{ tag:'section',
					classes:{list:['_jx516']}
				},
				myfeed_element:[
					{ tag:'article',
						classes:{list:['_h2d1o', '_55zw1', '_p8mqr', '_qs5p4']}
					},
					{ tag:'article',
						classes:{list:['_h2d1o', '_j5hrx', '_pieko']}
					},
					{ tag:'article',
						classes:{list:['_8ab8k', '_j5hrx', '_pieko']}
					}
				],
				btn_like_do:[
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteLikeHeartOpen']},
						innerOuterHTMLs:{list:['좋아요']} 
					},
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteHeartOpen']},
						innerOuterHTMLs:{list:['좋아요']}
					}
				],
				input_review:[
					{ tag:'input',
						classes:{list:['_2hc0g', '_qy55y']},
						properties:{list:['type="text"', 'aria-label', 'placeholder']}
					},
					{ tag:'input',
						classes:{list:['_7uiwk', '_qy55y']},
						properties:{list:['type="text"', 'aria-label', 'placeholder']}
					}
				],
				id_review:{ tag:'script',
					properties:{list:["type='text/javascript'"]},
					innerOuterHTMLs:{list:['window._sharedData']}
				},
				username_bulletin:[
					{ tag:'a',
						properties:{list:['title', 'href']},
						classes:{list:['_4zhc5', 'notranslate', '_ebg8h']}
					},
					{ tag:'a',
						properties:{list:['title', 'href']},
						classes:{list:['_4zhc5', 'notranslate', '_ook48']}
					}
				],
				check_like_did:[
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteLikeHeartFull']},
						innerOuterHTMLs:{list:['좋아요 취소']}
					},
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteHeartFull']},
						innerOuterHTMLs:{list:['좋아요 취소']}
					}
				]
			};

			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' }
			};

			// Url Section
			this.urls = {
				url_search:{ basic:'https://www.instagram.com', extra:{list:[]}, changing:false },			
				review:{ basic:'/web/comments/', extra:{list:[ { html:this.htmls.id_review, type:'OBJECT', func_key:'review' }, '/add/' ] } }
			};

			// Interval Section
			this.intervals = {
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:5 }
			};

			// Func Section
			this.funcs_option = {
				// this.getClick(func_key) 함수는 해당 version의 funcs중 func_key에 해당하는 func_value의 click값을 가져오는 함수이다.
				// this.getSetting(setting_key) 함수는 해당 version의 settings중 setting_key에 해당하는 setting_value의 value값을 가져오는 함수이다.
				like:{ click:{ click_key:'like' }, percentage:100, boolean:{ click_key:'like', setting_value:100 } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' }, html_check:{ check:true } },
				review_second:{ click:{ click_key:'review' }, percentage:100, boolean:{ click_key:'review', setting_value:100 } }
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls: {list:[this.urls.url_search], condition:'AND'},
						htmls: {list:[this.htmls.myfeed_list, this.htmls.myfeed_list_second, this.htmls.myfeed_list_third], condition:'AND'},
						list_step:[
							{list_action:[ { action:'STATUS', func:'stopstart', description:'초기화', status:{ set:'reload_interval', value:20, delay_position:100 } } ], delay: 2, countdown: false },
							{list_action:[ { action:'STATUS', func:'stopstart', description:'초기화', status:{ set:'myfollower_index', value:0, delay_position:100 } } ], delay: 2, countdown: false },
							{list_action:[ { action:'LOOP', func:'stopstart', description:'마이피드 작업 반복',
								loop:{
									list_step: [
										{list_action:[ { action:'SCROLL', description:'마이피드 검색', scroll:{ interval:5 } } ], delay:8, countdown:false},
										{list_action:[ { action:'TARGET', description:'타겟 설정', target:{ html:this.htmls.myfeed_element, index:{status:'myfollower_index', type:'NUMBER'}, set:true, scroll:{ value:true }, target_username:{ html:this.htmls.user_name, type:'innerHTML' }, crawl_user_name:{ value: true, target: this.htmls.username_bulletin } } } ], delay: 1, countdown: false },
										{list_action:[ { action:'STATUS', status:{ set:'target_user_name', value:'target_user_name' } } ], delay:2},
										{list_action:[ { action:'TRYCATCH',
											try: {
												list_step:[
													{list_action:[ { action:'CHECK', func:'like', description:'좋아요 검사', check:{ htmls:[ { target:true, html:this.htmls.check_like_did, exist:false, message:'이미 좋아요 중'} ] } } ], delay:2, countdown: false},
													{list_action:[ { action:'MESSEAGE', func:'stopstart', message:{ text:'좋아요 예정', delay_position:0 } } ], delay: 2, countdown: false },
													{list_action:[ { action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ target:true, html:this.htmls.btn_like_do }, log_push:true, statuses:[{increase:'like_count'}] } ], delay: 3, countdown: false },
													{list_action:[ { action:'INPUT', func:'review', func_option:this.funcs_option.review, description:'댓글 입력', input:{ target:true, html:this.htmls.input_review, texts:[this.texts.review]}, message:'Tip : 10개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' } ], delay:5, countdown: false },
													{list_action:[
														{ action:'POST', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 등록',
															post:{ url:this.urls.review, data:{ comment_text: this.texts.review }, headers:[{key:'x-instagram-ajax', value:1}, {key:'x-csrftoken', cookie:'csrftoken' }] }, message:'Tip : 서버에서 댓글을 바로 달아 새로고침해야 확인 가능', log_push:true, statuses:[{increase:'review_count'}]
														}
													], delay:5, countdown: false }
												],
												countdown: false
											},
											catch: {
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'stopstart', message:{ text:'마이피드작업 제외 : 이미 좋아요 한 게시글', delay_position:0 } } ], delay: 2, countdown: false }
												],
												countdown: false
											},
											finally: {
												list_step:[
													{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'myfollower_index'} ] } } ], delay: 1, countdown: false },
													{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'count'} ] } } ], delay: 1, countdown: false },
													{list_action:[ { action:'TRYCATCH', func:'review', func_option:this.funcs_option.review_second,
														try: {
															list_step:[
																{list_action:[ { action:'COMPARE', func:'stopstart', description:'새로고침 간격 확인', compare:{ type:'>=', pandoras:[{status:'myfollower_index', type:'NUMBER'}, {status:'reload_interval', type:'NUMBER'}] } } ], delay: 3, countdown:false},
																// 반응이 resolve일 경우
																{list_action:[ { action:'RELOAD' } ]}
															],
															countdown:false
														},
														catch: {
															list_step:[
																// 반응이 reject일 경우
																{list_action:[ { action:'RESOLVE' } ]}
															],
															countdown:false
														}
													} ]}
												],
												countdown: false
											}
										} ] },
										{list_action:[ { action:'TARGET', func:'like', description:'타겟 해제', target:{ set:false } } ], delay: 2, countdown: false }
									],
									delay:this.intervals.work,
									comparison:{ type:'infinite', pandoras:[{basic:'해당사항 없음'}, {basic:'해당사항 없음'}], message:'마이피드' }
								} }
							]}
						]
					}
				],
				stop:[]
			};
		});

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('instagrammerFollowService', function($rootScope, $q, $timeout, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'instagrammer';
			this.version_key = 'follow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:[
					{ tag:'a',
						classes:{list:['_soakw', '_vbtk2', 'coreSpriteDesktopNavProfile']},
						innerOuterHTMLs:{list:['프로필']},
						split:{ attr:'href', params:['/', '/'] }
					},
					{ tag:'a',
						classes:{list:['_gx3bg']},
						split:{ attr:'href', params:['/', '/'] },
						decent_index:3
					},
					{ tag:'strong',
						classes:{list:['-cx-PRIVATE-NavBar__username']},
						split:{ html:'innerHTML' }
					}
				],
				user_name:[
					{ tag:'a',
						classes:{list:['_4zhc5', 'notranslate', '_ook48']}
					},
					{ tag:'a',
						classes:{list:['_4zhc5', 'notranslate', '_jozwt']}
					}
				],
				popular_posts:{ tag:'div',
					classes:{list:['_5kftd']},
					innerOuterHTMLs:{list:['인기 게시물']}
				},
				post_img:{ tag:'a',
					classes:{list:['_8mlbc', '_vbtk2', '_t5r8b']},
					properties:{list:['href']},
					innerOuterHTMLs:{list:['img', '?tagged='], type:'OUTERHTML'},
					href:'/p/',
					split:{ attr:'href', params:[null, '/?tagged='] }
				},
				btn_more:{ tag:'a',
					innerOuterHTMLs:{list:['더 읽어들이기']},
					href:'/explore/tags/'
				},
				div_spam:[
					{ tag:'li',
						classes:{list:['_nk46a']},
						innerOuterHTMLs:{list:{ setting_key:'list_spam' }}
					},
					{ tag:'li',
						classes:{list:['_99ch8']},
						innerOuterHTMLs:{list:{ setting_key:'list_spam' }}
					}
				],
				div_spammer:[
					{ tag:'a',
						classes:{list:['_4zhc5', 'notranslate', '_jozwt']},
						innerOuterHTMLs:{list:{ setting_key:'list_spammer' }}
					},
					{ tag:'a',
						classes:{list:['_4zhc5', 'notranslate', '_ook48']},
						innerOuterHTMLs:{list:{ setting_key:'list_spammer' }}
					}
				],
				div_my_bulletin:{ tag:'a',
					classes:{list:['_4zhc5', 'notranslate', '_ook48']},
					innerOuterHTMLs:{list:{ 
						html_value:[
							{ tag:'a',
								classes:{list:['_soakw', '_vbtk2', 'coreSpriteDesktopNavProfile']},
								innerOuterHTMLs:{list:['프로필']},
								split:{ attr:'href', params:['/', '/'] }
							},
							{ tag:'a',
								classes:{list:['_gx3bg']},
								split:{ attr:'href', params:['/', '/'] },
								decent_index:3
							},
							{ tag:'strong',
								classes:{list:['-cx-PRIVATE-NavBar__username']},
								split:{ html:'innerHTML' }
							}
						]
					}}
				},
				btn_follow_did:{ tag:'button',
					innerOuterHTMLs:{list:['팔로잉']}
				},
				btn_follow_do:{ tag:'button',
					innerOuterHTMLs:{list:['팔로우']}
				},
				check_like_do:[
					{	tag:'span',
						classes:{list:['_soakw', 'coreSpriteLikeHeartOpen']},
						innerOuterHTMLs:{list:['좋아요']}
					},
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteHeartOpen']},
						innerOuterHTMLs:{list:['좋아요']}
					}
				],
				check_like_did:[
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteLikeHeartFull']},
						innerOuterHTMLs:{list:['좋아요 취소']}
					},
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteHeartFull']},
						innerOuterHTMLs:{list:['좋아요 취소']}
					}
				],
				btn_like_do:{ tag:'a',
					properties:{list:['role="button"', 'aria-disabled="false"']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				input_review:[
					{ tag:'input',
						classes:{list:['_2hc0g', '_qy55y']},
						properties:{list:['type="text"', 'aria-label', 'placeholder']}
					},
					{ tag:'input',
						classes:{list:['_7uiwk', '_qy55y']},
						properties:{list:['type="text"', 'aria-label', 'placeholder']}
					}
				],
				id_review:{ tag:'meta',
					properties:{list:["property='al:ios:url'"]},
					split:{ attr:'content', params:['instagram://media?id='] }
				}
			};

			// Url Section
			this.urls = {
				search:{ basic:'https://www.instagram.com/explore/tags/', extra:{list:[ [{ setting_key:'list_search_tag', method:'getRandom' }] ]}, changing:false },
				work:{ basic:'https://www.instagram.com/p/', changing:false },
				detail:{ basic:'https://www.instagram.com', extra:{list:[ { html:this.htmls.post_img, no_encode:true, random:true } ] } },
				review:{ basic:'/web/comments/', extra:{list:[ { html:this.htmls.id_review }, '/add/' ] } }
			};

			// Interval Section
			this.intervals = {
				search : { setting_key:'interval_search', method:'getRandomOfNumber', percentage:50 },
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
			};

			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
				// this.getClick(func_key) 함수는 해당 version의 funcs중 func_key에 해당하는 func_value의 click값을 가져오는 함수이다.
				like:{ click:{ click_key:'like' }, percentage:100, boolean:{ click_key:'like', setting_value:100 } },
				follow:{ click:{ click_key:'follow' }, percentage:{ setting_key:'percentage_follow' }, boolean:{ click_key:'follow', setting_key:'percentage_follow' } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' } }
			};
			
			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.search], condition:'OR'},
						htmls : {list:[this.htmls.popular_posts, this.htmls.post_img, this.htmls.btn_more], condition:'OR'},
						list_step:[
							{list_action:[ 
								{ action:'REMOVE', description:'인기 게시물 제거', remove:{ html:this.htmls.popular_posts } } 
							], delay:5},
							{list_action:[ 
								{ action:'SCROLL', description:'게시물 검색', scroll:{ interval:5, click:{ html:this.htmls.btn_more} } } 
							], delay:80},
							{list_action:[ 
								{ action:'GO', description:'게시물 선택', go:{ url:this.urls.detail, delay_position:100 } } 
							], delay:15}
						],
						delay:this.intervals.search
					},
					{
						urls : {list:[this.urls.work], condition:'OR'},
						htmls : {list:[this.htmls.check_like_do, this.htmls.check_like_did, this.htmls.btn_like_do], condition:'OR'},
						list_step:[
							{list_action:[
								{ action:'TARGET_USERNAME', description:'유저이름 타겟팅', target_username:{ html:this.htmls.user_name, type:'innerHTML' }}
							], delay:8},
							{list_action:[
								{ action:'STATUS', status:{ set:'target_user_name', value:'target_user_name' } }
							], delay:2},
							{list_action:[
								{ action:'MYNAME_CHECK' }
							], delay:5},
							{list_action:[
								{ action:'CHECK', func:'follow', description:'팔로우 검사', check:{ htmls:[ {html:this.htmls.btn_follow_did, exist:false, message:'이미 팔로우 중'}, {html:this.htmls.btn_follow_do, exist:true, message:'팔로우 버튼 없음'} ]}},
								{ action:'CHECK', func:'like', description:'좋아요 검사', check:{ htmls:[ {html:this.htmls.check_like_did, exist:false, message:'이미 좋아요 중'} ] } },
								{ action:'CHECK', func:'review', description:'내 게시글 검사', check:{ htmls:[ {html:this.htmls.div_my_bulletin, exist:false, message:'내 게시글입니다'} ] } },
								{ action:'CHECK', description:'스팸/스팸유저 검사', check:{ htmls:[ {html:this.htmls.div_spam, exist:false, message:'스팸 단어를 포함하고 있습니다'}, {html:this.htmls.div_spammer, exist:false, message:'스팸유저의 게시물입니다'} ] } }
							], delay:5},
							{list_action:[
								{ action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ html:this.htmls.btn_like_do}, log_push:true, statuses:[{increase:'like_count'}] }
							], delay:5},
							{list_action:[
								{ action:'CLICK', func:'follow', func_option:this.funcs_option.follow, description:'팔로우', click:{ html:this.htmls.btn_follow_do}, log_push:true, statuses:[{increase:'follow_count'}] }
							], delay:5},
							{list_action:[ 
								{ action:'INPUT', func:'review', func_option:this.funcs_option.review, description:'댓글 입력',	input:{ html:this.htmls.input_review, texts:[this.texts.review]}, message:'Tip : 10개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' } 
							], delay:5},
							{list_action:[
								{ action:'POST', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 등록',
									post:{ url:this.urls.review, data:{ comment_text: this.texts.review }, headers:[{key:'x-instagram-ajax', value:1}, {key:'x-csrftoken', cookie:'csrftoken' }] }, message:'Tip : 서버에서 댓글을 바로 달아 새로고침해야 확인 가능', log_push:true, statuses:[{increase:'review_count'}]
								}
							], delay:5}
						],
						delay:this.intervals.work,
						statuses:[{increase:'count'}]
					}
				],
				stop:[]
			};
			
		});

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('instagrammerUnfollowService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'instagrammer';
			this.version_key = 'unfollow';
			// getSetting에서 가져오는 setting.value 값은 extension의 grammerInitializeService.initializeValueOfSetting 에서 셋팅한다.
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:[
					{ tag:'a',
						classes:{list:['_soakw', '_vbtk2', 'coreSpriteDesktopNavProfile']},
						innerOuterHTMLs:{list:['프로필']},
						split:{ attr:'href', params:['/', '/'] }
					},
					{ tag:'a',
						classes:{list:['_gx3bg']},
						split:{ attr:'href', params:['/', '/'] },
						decent_index:3
					},
					{ tag:'strong',
						classes:{list:['-cx-PRIVATE-NavBar__username']},
						split:{ html:'innerHTML' }
					}
				],
				user_name:{ tag:'h1',
					classes:{list:['_i572c', 'notranslate']}
				},
				text_follower:{ tag:'span',
					parent_html:{tag:'a', classes:{list:['_s53mj']}, properties:{list:['href']}, innerOuterHTMLs:{list:['팔로워']}, href:'/followers/'},
					classes:{list:['_bkw5z']},
					properties:{list:['title']},
					split:{ attr:'title', params:[], type:'NUMBER' }
				},
				text_following:{ tag:'span',
					parent_html:{tag:'a', classes:{list:['_s53mj']}, properties:{list:['href']}, innerOuterHTMLs:{list:['팔로우']}, href:'/following/'},
					classes:{list:['_bkw5z']},
					split:{ html:'innerHTML', params:[], type:'NUMBER' }
				},
				tab_follower:{ tag:'a',
					classes:{list:['_s53mj']},
					properties:{list:['href']},
					innerOuterHTMLs:{list:['팔로워']},
					href:'/followers/',
				},
				tab_following:{ tag:'a',
					classes:{list:['_s53mj']},
					properties:{list:['href']},
					innerOuterHTMLs:{list:['팔로우']},
					href:'/following/',
				},
				btn_close:{ tag:'button',
					classes:{list:['_3eajp']},
					innerOuterHTMLs:{list:['닫기']}
				},
				box_scroll:{ tag:'div',
					classes:{list:['_4gt3b']}
				},
				box_user_follower:{ tag:'li',
					parent_html:{tag:'div', classes:{list:['_4gt3b']}},
					classes:{list:['_cx1ua']}
				},
				box_user_following:{ tag:'li',
					parent_html:{tag:'div', classes:{list:['_4gt3b']}},
					classes:{list:['_cx1ua']}
				},
				text_username:{ tag:'a',
					classes:{list:['_4zhc5', '_j7lfh']},
					properties:{list:['title', 'href']},
					split:{ html:'innerHTML', params:[] }
				},
				text_username_on_profile_page:{ tag:'h1',
					classes:{list:['_i572c', 'notranslate']},
					properties:{list:['title']},
					split:{ html:'innerHTML', params:[] }
				},
				btn_unfollow_do:{ tag:'button',
					innerOuterHTMLs:{list:['팔로잉']}
				},
				btn_profile_edit:{ tag:'button',
					innerOuterHTMLs:{list:['프로필 편집']}
				},
				div_undefined_user:{ tag:'div',
					classes:{list:['error-container', '-cx-PRIVATE-ErrorPage__errorContainer']},
					innerOuterHTMLs:{list:['죄송합니다']}
				},
				div_prohibited_user:{ tag:'h1',
					classes:{list:['_i572c', 'notranslate']},
					innerOuterHTMLs:{list:{ setting_key:'prohibited_user' }}
				}
			};

			// Url Section
			this.urls = {
				mypage:{ basic:'https://www.instagram.com/', extra:{list:[{html:this.htmls.identification}, '/']}, changing:false },
				work_unfollow:{ basic:'https://www.instagram.com/', extra:{list:[{status:'following_list', status_index:'unfollow_index', grammer_key:'instagrammer', version_key:'unfollow' }, '/']}, changing:false },
				unfollow_page:{ basic:'https://www.instagram.com/', changing:false }
			};

			// Interval Section
			this.intervals = {
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
				// work : numberService.getRandomOfNumber(this.getSetting('interval_work'), 50)
			};

			// Func Section
			this.funcs_option = {
			};

			// Page Section
			this.pages = {
				start:[
					{
						select: true,
						urls : {list:[this.urls.mypage], condition:'AND'},
						htmls : {list:[this.htmls.btn_profile_edit], condition:'AND'},
						list_step:[
							// *********** 일반형 버전
							// {list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 수 저장', permissions:['unfollow'], save:{ pandoras:[{html:this.htmls.text_follower, type:'NUMBER'}, {status :'follower_total'}], delay_position:50 } } ], delay:3 },
							// {list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 수 저장', permissions:['unfollow', 'unfollow_all'], save:{ pandoras:[{html:this.htmls.text_following, type:'NUMBER'}, {status :'following_total'}], delay_position:50 } } ], delay:3 },
							// {list_action:[ { action:'CLICK', func:'unfollow', description:'팔로워 팝업 열기', permissions:['unfollow'], click:{ html:this.htmls.tab_follower, delay_position:0 } } ], delay:3 },
							// {list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로워 검색', permissions:['unfollow'], scroll:{ html:this.htmls.box_scroll, interval:1, comparison:{ type: '>=', pandoras : [ {html:this.htmls.box_user_follower, type:'COUNT'}, {status:'follower_total', type:'NUMBER'} ], message:'팔로워', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ] },
							// {list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 저장', permissions:['unfollow'], save:{ pandoras:[{html:this.htmls.text_username, type:'TEXT', isArray:true}, {status:'follower_list'}] } } ], delay:3 },
							// {list_action:[ { action:'CLICK', func:'unfollow', permissions:['unfollow'], click:{ html:this.htmls.btn_close, delay_position:0 } } ], delay:1 },
							// {list_action:[ { action:'CLICK', func:'unfollow', description:'팔로잉 팝업 열기', permissions:['unfollow', 'unfollow_all'], click:{ html:this.htmls.tab_following, delay_position:0 } } ], delay:3 },
							// {list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로잉 검색', permissions:['unfollow', 'unfollow_all'], scroll:{ html:this.htmls.box_scroll, interval:1, comparison:{ type: '>=', pandoras : [ {html:this.htmls.box_user_following, type:'COUNT'}, {status:'following_total', type:'NUMBER'} ], message:'팔로잉', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ] },
							// {list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 저장', permissions:['unfollow', 'unfollow_all'], save:{ pandoras:[{html:this.htmls.text_username, type:'TEXT', isArray:true}, {status:'following_list'}] } } ], delay:3 },
							// {list_action:[ { action:'EXCLUDE', func:'unfollow', permissions:['unfollow'], description:'맞팔 제외 팔로잉 리스트 추출', exclude:{ pandoras:[{status:'follower_list'}, {status:'following_list'}] } } ], delay:5},
							// {list_action:[ { action:'STATUS', func:'unfollow', permissions:['unfollow', 'unfollow_all'], status:{ set:'unfollow_index', value:0 } } ], delay: 2 },
							// {list_action:[ { action:'SAVE', func:'unfollow', permissions:['unfollow'], description:'팔로잉 수 갱신', save:{ pandoras:[{status:'following_list', type:'LENGTH'}, {status:'following_total'}] } } ], delay:2},
							// {list_action:[ { action:'GO', description:'언팔로우 작업페이지로 이동', permissions:['unfollow', 'unfollow_all'], go:{ url:this.urls.work_unfollow, delay_position:50 } } ], delay:6}

							// *********** 언팔 기능 추가 버전 
							{list_action:[ { action:'TRYCATCH', func:'unfollow', permissions:['unfollow', 'unfollow_all'], 
								try : {
									select: true,
									list_step:[
										{list_action:[ { action:'ONPOPUP', func:'unfollow', description:'팝업', permissions:['unfollow', 'unfollow_all'], on_popup:{ variable:'popup_boolean', value:true, delay_position:90 } } ], delay:3},
										// 반응이 resolve일 경우 -> 새로운 언팔로우 기능을 사용하게 됨
										{list_action:[ { action:'EXCLUDE', func:'unfollow', permissions:['unfollow'], description:'맞팔 제외 팔로잉 리스트 추출', exclude:{ pandoras:[{status:'follower_list'}, {status:'following_list'}] } } ], delay:5},
										{list_action:[ { action:'STATUS', func:'unfollow', permissions:['unfollow', 'unfollow_all'], status:{ set:'unfollow_index', value:0 } } ], delay: 2 },
										{list_action:[ { action:'SAVE', func:'unfollow', permissions:['unfollow'], description:'팔로잉 수 갱신', save:{ pandoras:[{status:'following_list', type:'LENGTH'}, {status:'following_total'}] } } ], delay:2},
										{list_action:[ { action:'GO', description:'언팔로우 작업페이지로 이동', permissions:['unfollow', 'unfollow_all'], go:{ url:this.urls.work_unfollow, delay_position:50 } } ], delay:6}
									],
									countdown: false
								},
								catch : {
									select: true,
									list_step:[
										// 반응이 reject일 경우 -> 기존의 언팔로우 기능을 사용하게 됨
										{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 수 저장', permissions:['unfollow'], save:{ pandoras:[{html:this.htmls.text_follower, type:'NUMBER'}, {status :'follower_total'}], delay_position:50 } } ], delay:3 },
										{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 수 저장', permissions:['unfollow', 'unfollow_all'], save:{ pandoras:[{html:this.htmls.text_following, type:'NUMBER'}, {status :'following_total'}], delay_position:50 } } ], delay:3 },
										{list_action:[ { action:'CLICK', func:'unfollow', description:'팔로워 팝업 열기', permissions:['unfollow'], click:{ html:this.htmls.tab_follower, delay_position:0 } } ], delay:3 },
										{list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로워 검색', permissions:['unfollow'], scroll:{ html:this.htmls.box_scroll, interval:0.3, comparison:{ type: '>=', pandoras : [ {html:this.htmls.box_user_follower, type:'COUNT'}, {status:'follower_total', type:'NUMBER'} ], message:'팔로워', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ] },
										{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 저장', permissions:['unfollow'], save:{ pandoras:[{html:this.htmls.text_username, type:'TEXT', isArray:true}, {status:'follower_list'}] } } ], delay:3 },
										{list_action:[ { action:'CLICK', func:'unfollow', permissions:['unfollow'], click:{ html:this.htmls.btn_close, delay_position:0 } } ], delay:1 },
										{list_action:[ { action:'CLICK', func:'unfollow', description:'팔로잉 팝업 열기', permissions:['unfollow', 'unfollow_all'], click:{ html:this.htmls.tab_following, delay_position:0 } } ], delay:3 },
										{list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로잉 검색', permissions:['unfollow', 'unfollow_all'], scroll:{ html:this.htmls.box_scroll, interval:0.3, comparison:{ type: '>=', pandoras : [ {html:this.htmls.box_user_following, type:'COUNT'}, {status:'following_total', type:'NUMBER'} ], message:'팔로잉', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ] },
										{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 저장', permissions:['unfollow', 'unfollow_all'], save:{ pandoras:[{html:this.htmls.text_username, type:'TEXT', isArray:true}, {status:'following_list'}] } } ], delay:3 },
										{list_action:[ { action:'STATUS', func:'unfollow', permissions:['unfollow', 'unfollow_all'], status:{ set:'unfollow_index', value:0 } } ], delay: 2 },
										{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 수 갱신', permissions:['unfollow', 'unfollow_all'], save:{ pandoras:[{html:this.htmls.box_user_following, type:'COUNT'}, {status :'following_total'}] } } ], delay:2 },
										{list_action:[ { action:'GO', description:'언팔로우 작업페이지로 이동', permissions:['unfollow', 'unfollow_all'], go:{ url:this.urls.work_unfollow, delay_position:50 } } ], delay:6}
									],
									countdown: false
								}
							} ]}
						],
					},
					{
						select: true,
						urls : {list:[this.urls.unfollow_page], condition:'AND'},
						htmls : {list:[this.htmls.text_follower, this.htmls.text_following, this.htmls.div_undefined_user], condition:'OR'},
						list_step:[
							{list_action:[ { action:'LOOP', func:'unfollow', description:'언팔로우 반복', permissions:['unfollow', 'unfollow_all'],
								loop:{
									list_step:[
										{list_action:[ { action:'TRYCATCH', func:'unfollow', permissions:['unfollow', 'unfollow_all'],
											try : { 
												select: true,
												list_step:[
													{list_action:[ 
														{ action:'CHECK', func:'unfollow', permissions:['unfollow', 'unfollow_all'], description:'유저 존재 여부 확인', check:{ htmls:[ { html:this.htmls.div_undefined_user, exist:false, message:'언팔로우 제외 : 존재하지 않는 유저' } ] } },
														{ action:'CHECK', func:'stopstart', permissions:['unfollow', 'unfollow_all'], description:'언팔금지 목록 포함 여부 확인', check:{ htmls:[ { html:this.htmls.div_prohibited_user, exist:false, message:'언팔로우 제외 : 언팔 금지된 유저' } ] } },
														{ action:'CHECK', func:'unfollow', permissions:['unfollow', 'unfollow_all'], description:'팔로잉 버튼 유무 확인', check:{ htmls:[ { html:this.htmls.btn_unfollow_do, exist:true, message:'언팔로우 제외 : 팔로잉 버튼 없음' } ] } }
													], delay: 3, countdown:false },
													{list_action:[ { action:'TARGET_USERNAME', func:'unfollow', permissions:['unfollow', 'unfollow_all'], description:'유저이름 타겟팅', target_username:{ html:this.htmls.user_name, type:'innerHTML' }} ], delay:1, countdown:false},
													// {list_action:[ { action:'COMPARE', permissions:['unfollow'], description:'맞팔확인', compare:{ type:'!in', pandoras:[{ target:true, html:this.htmls.text_username_on_profile_page, type:'TEXT' }, {status:'follower_list'}] } } ], delay:1, countdown:false},
													{list_action:[ { action:'STATUS', status:{ set:'target_user_name', value:'target_user_name' } } ], delay:1, countdown:false },
													{list_action:[ { action:'MESSEAGE', func:'unfollow', permissions:['unfollow'], message:{ text:'언팔 예정', delay_position:0 } } ], delay: 1, countdown:false },
													{list_action:[ { action:'CLICK', func:'unfollow', permissions:['unfollow', 'unfollow_all'], description:'언팔로우', click:{ target:true, html:this.htmls.btn_unfollow_do }, log_push:true, statuses:[{increase:'unfollow_limit_count'}] } ], delay: 30},
													{list_action:[ { action:'STATUS', permissions:['unfollow', 'unfollow_all'], status:{ statuses:[ {increase:'unfollow_count'} ] } } ], delay: 1, countdown:false }
												],
												countdown:false
											},
											catch : {
												select: true,
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'unfollow', permissions:['unfollow', 'unfollow_all'], message:{ text:'언팔로우 제외 : 맞팔인 유저 or 존재하지 않는 유저 or 팔로잉 버튼 없음 or 언팔 금지된 유저', delay_position:0 } } ], delay: 2, countdown:false }
												],
												countdown:false
											},
											finally : {
												select: true,
												list_step:[
													{list_action:[ { action:'STATUS', permissions:['unfollow', 'unfollow_all'], status:{ statuses:[ {increase:'unfollow_index'} ] } } ], delay:1, countdown:false },
													{list_action:[ { action:'STATUS', permissions:['unfollow', 'unfollow_all'], status:{ statuses:[ {increase:'count'} ] } } ], delay:1, countdown:false },
													{list_action:[ { action:'TRYCATCH', func:'unfollow', permissions:['unfollow', 'unfollow_all'], 
														try : {
															select: true,
															list_step:[
																// 끝났을 때 resolve, 끝나지 않았을 때 reject
																{list_action:[ { action:'COMPARE', permissions:['unfollow', 'unfollow_all'], description:'작업 진행 상황 확인', compare:{ type:'>=', pandoras:[{status:'unfollow_index', type:'NUMBER'}, {status:'following_total', type:'NUMBER'}] } } ], delay: 1, countdown:false},
																{list_action:[ { action:'STOP', permissions:['unfollow', 'unfollow_all'], description:'작업 종료' } ], delay:1, countdown:false}
															],
															countdown:false
														},
														// 작업 끝나지 않았을 때
														catch : {
															select: true,
															list_step:[
																{list_action:[ { action:'GO', description:'다음 언팔로우 작업페이지로 이동', permissions:['unfollow', 'unfollow_all'], go:{ url:this.urls.work_unfollow, delay_position:20 } } ], delay:10, countdown:false}
															],
															countdown:false
														}
													} ]}
												],
												countdown:false
											}
										} ] }
									]
								}
							} ] }
						]
					}
				],
				stop:[]
			};
		});

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('instagrammerSpecificuserService', function($rootScope, $q, $timeout, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'instagrammer';
			this.version_key = 'specificuser';
			this.getSetting = function( settingkey ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:[
					{ tag:'a',
						classes:{list:['_soakw', '_vbtk2', 'coreSpriteDesktopNavProfile']},
						innerOuterHTMLs:{list:['프로필']},
						split:{ attr:'href', params:['/', '/'] }
					},
					{ tag:'a',
						classes:{list:['_gx3bg']},
						split:{ attr:'href', params:['/', '/'] },
						decent_index:3
					},
					{ tag:'strong',
						classes:{list:['-cx-PRIVATE-NavBar__username']},
						split:{ html:'innerHTML' }
					}
				],
				btn_follow_following:[
					{ tag: 'button',
						innerOuterHTMLs:{list:['팔로우']}
					},
					{ tag: 'button',
						innerOuterHTMLs:{list:['팔로잉']}
					}
				],
				btn_recommended_user:{ tag:'button',
					classes:{list:['_ah57t', '_i46jh', '_rmr7s']}
				},
				text_follower:{ tag:'span',
					parent_html:{tag:'a', classes:{list:['_s53mj']}, properties:{list:['href']}, innerOuterHTMLs:{list:['팔로워']}, href:'/followers/'},
					classes:{list:['_bkw5z']},
					properties:{list:['title']},
					split:{ attr:'title', params:[], type:'NUMBER' }
				},
				tab_follower:{ tag:'a',
					classes:{list:['_s53mj']},
					properties:{list:['href']},
					innerOuterHTMLs:{list:['팔로워']},
					href:'/followers/',
				},
				text_username:{ tag:'a',
					classes:{list:['_4zhc5', '_j7lfh']},
					properties:{list:['title', 'href']},
					split:{ html:'innerHTML', params:[] }
				},
				text_targeted_user_name:{ tag:'h1',
					classes:{list:['_i572c', 'notranslate']},
					innerOuterHTMLs:{list:{ setting_key:'targeted_user' }}
				},
				user_work_bulletin:{ tag:'a',
					classes:{list:['_8mlbc', '_vbtk2', '_t5r8b']},
					properties:{list:['href']},
					split:{ attr:'href', params:[null, null] }
				},
				check_like_do:[
					{	tag:'span',
						classes:{list:['_soakw', 'coreSpriteLikeHeartOpen']},
						innerOuterHTMLs:{list:['좋아요']}
					},
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteHeartOpen']},
						innerOuterHTMLs:{list:['좋아요']}
					}
				],
				check_like_did:[
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteLikeHeartFull']},
						innerOuterHTMLs:{list:['좋아요 취소']}
					},
					{ tag:'span',
						classes:{list:['_soakw', 'coreSpriteHeartFull']},
						innerOuterHTMLs:{list:['좋아요 취소']}
					}
				],
				btn_like_do:{ tag:'a',
					properties:{list:['role="button"', 'aria-disabled="false"']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				user_name:[
					{ tag:'a',
						classes:{list:['_4zhc5', 'notranslate', '_ook48']}
					},
					{ tag:'a',
						classes:{list:['_4zhc5', 'notranslate', '_jozwt']}
					}
				],
				btn_follow_did:{ tag:'button',
					innerOuterHTMLs:{list:['팔로잉']}
				},
				btn_follow_do:{ tag:'button',
					innerOuterHTMLs:{list:['팔로우']}
				},
				div_spam:{ tag:'li',
					classes:{list:['_nk46a']},
					innerOuterHTMLs:{list:{ setting_key:'list_spam' }}
				},
				div_spammer:{ tag:'a',
					classes:{list:['_4zhc5', 'notranslate', '_ook48']},
					innerOuterHTMLs:{list:{ setting_key:'list_spammer' }}
				},
				input_review:[
					{ tag:'input',
						classes:{list:['_2hc0g', '_qy55y']},
						properties:{list:['type="text"', 'aria-label', 'placeholder']}
					},
					{ tag:'input',
						classes:{list:['_7uiwk', '_qy55y']},
						properties:{list:['type="text"', 'aria-label', 'placeholder']}
					}
				],
				id_review:{ tag:'meta',
					properties:{list:["property='al:ios:url'"]},
					split:{ attr:'content', params:['instagram://media?id='] }
				},
				box_user_follower:{ tag:'li',
					parent_html:{tag:'div', classes:{list:['_4gt3b']}},
					classes:{list:['_cx1ua']}
				},
				box_scroll:{ tag:'div',
					classes:{list:['_4gt3b']}
				},
				box_existing_following:{ tag:'li',
					classes:{list:['_cx1ua']},
					innerOuterHTMLs:{list:['팔로잉']}
				},
				box_me:{ tag:'li',
					classes:{list:['_cx1ua']},
					innerOuterHTMLs:{list:{ 
						html_value:[
							{ tag:'a',
								classes:{list:['_soakw', '_vbtk2', 'coreSpriteDesktopNavProfile']},
								innerOuterHTMLs:{list:['프로필']},
								split:{ attr:'href', params:['/', '/'] }
							},
							{ tag:'a',
								classes:{list:['_gx3bg']},
								split:{ attr:'href', params:['/', '/'] },
								decent_index:3
							}
						]
					}}
				},
				btn_option:{ tag:'button',
					classes:{list:['_fcwm8', 'coreSpriteEllipsis', '_soakw']},
					innerOuterHTMLs:{list:['옵션']}
				},
				wrong_user_name:{ tag:'div',
					classes:{list:['_o0ohn']},
					innerOuterHTMLs:{list:['https://scontent-icn1-1.cdninstagram.com/t51.2885-19/s320x320/13628245_1756859711256597_1471815419_a.jpg']}
				},
				div_not_open:{ tag:'h2',
					classes:{list:['_glq0k']},
					innerOuterHTMLs:{list:['비공개 계정입니다']}
				},
				div_no_bulletin:{ tag:'h2',
					classes:{list:['_2gvyi']},
					innerOuterHTMLs:{list:['아직 게시물이 없습니다.']}
				}
			};

			// Url Section
			this.urls = {
				work_specific_user_start:{ basic:'https://www.instagram.com/', extra:{list:[{setting_key:'targeted_user'}, '/']}, changing:false }, //
				work_specific_user:{ basic:'https://www.instagram.com/', extra:{list:[{status:'follower_list', status_index:'work_index', grammer_key:'instagrammer', version_key:'specificuser'}, '/']}, changing:false }, //
				detail:{ basic:'https://www.instagram.com', extra:{list:[ { html:this.htmls.user_work_bulletin, random:true } ]}, changing:false },
				work:{ basic:'https://www.instagram.com/p/', changing:false },//
				review:{ basic:'/web/comments/', extra:{list:[ { html:this.htmls.id_review }, '/add/' ] }, changing:false }
			};

			// Interval Section
			this.intervals = {
			};

			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
				// this.getClick(func_key) 함수는 해당 version의 funcs중 func_key에 해당하는 func_value의 click값을 가져오는 함수이다.
				like:{ click:{ click_key:'like' }, percentage:100, boolean:{ click_key:'like', setting_value:100 } },
				follow:{ click:{ click_key:'follow' }, percentage:{ setting_key:'percentage_follow' }, boolean:{ click_key:'follow', setting_key:'percentage_follow' } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' } }
			};
			
			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.work_specific_user_start], condition:'AND'},
						htmls : {list:[this.htmls.btn_follow_following, this.htmls.text_targeted_user_name], condition:'AND'},
						list_step:[
							// {list_action:[ { action:'SAVE', save:{ pandoras:[{html:this.htmls.identification, type:'TEXT'}, {status:'identification'}] } } ], delay:1, countdown:false},
							{list_action:[ { action:'SAVE', description:'팔로워 수 저장', save:{ pandoras:[{html:this.htmls.text_follower, type:'NUMBER'}, {status:'follower_total'}], delay_position:50 } } ], delay:3, countdown:false},
							{list_action:[ { action:'CLICK', description:'팔로워 팝업 열기', click:{ html:this.htmls.tab_follower, delay_position:50 } } ], delay:3, countdown:false},
							{list_action:[ { action:'SCROLL', description:'팔로워 검색', scroll:{ html:this.htmls.box_scroll, interval:0.3, comparison:{ type: '>=', pandoras:[ {html:this.htmls.box_user_follower, type:'COUNT'}, {status:'follower_total', type:'NUMBER'} ], message:'팔로워', count_limit:{ setting_key:'search_limit_value' }, count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ]},
							{list_action:[ { action:'REMOVE', description:'기존 팔로잉 제거', remove:{ html:this.htmls.box_existing_following, all:true } } ], delay:2, countdown:false},
							{list_action:[ { action:'REMOVE', remove:{ html:this.htmls.box_me } } ], delay:1, countdown:false},
							{list_action:[ { action:'SAVE', description:'팔로워 저장', save:{ pandoras:[{html:this.htmls.text_username, type:'TEXT', isArray:true}, {status:'follower_list'}], delay_position:10 } } ], delay:3, countdown:false},
							{list_action:[ { action:'STATUS', status:{ set:'work_index', value:0 } } ], delay:2, countdown:false},
							{list_action:[ { action:'SAVE', description:'작업할 팔로워 수 갱신', save:{ pandoras:[{status:'follower_list', type:'LENGTH'}, {status:'follower_total'}] } } ], delay:2, countdown:false},
							{list_action:[ { action:'GO', description:'작업할 유저페이지로 이동', go:{ url:this.urls.work_specific_user, delay_position:100 } } ], delay:3, countdown:false}
						]
					},
					{
						urls : {list:[this.urls.work_specific_user], condition:'AND'},
						htmls : {list:[this.htmls.btn_follow_following, this.htmls.btn_option], condition:'AND'},
						list_step:[
							{list_action:[ { action:'TRYCATCH', 
								try : {
									list_step:[
										{list_action:[ { action:'CHECK', check:{ htmls:[ {html:this.htmls.wrong_user_name, exist:false, message:'잘못된 계정'} ] } } ], delay:1, countdown:false},
										{list_action:[ { action:'CHECK', func:'like', check:{ htmls:[ {html:this.htmls.div_not_open, exist:false, message:'비공개 계정'} ] } } ], delay:1, countdown:false},
										{list_action:[ { action:'CHECK', func:'follow', check:{ htmls:[ {html:this.htmls.div_no_bulletin, exist:false, message:'게시글 없음'} ] } } ], delay:1, countdown:false},
										// resolve 
										{list_action:[ { action:'GO', description:'게시물 선택', go:{ url:this.urls.detail, delay_position:100 } } ], delay:5, countdown:false}
									],
									countdown:false
								},
								catch : {
									list_step:[
										// reject
										{list_action:[ { action:'STATUS', status:{ statuses:[{increase:'work_index'}] } } ], delay:1, countdown:false},
										{list_action:[ { action:'GO', description:'작업할 유저페이지로 이동', go:{ url:this.urls.work_specific_user, delay_position:100 } } ], delay:3, countdown:false}
									],
									countdown:false
								}
							} ]}
						]
					},
					{
						urls : {list:[this.urls.work], condition:'AND'},
						htmls : {list:[this.htmls.check_like_do, this.htmls.check_like_did, this.htmls.btn_like_do], condition:'OR'},
						list_step:[
							{list_action:[ { action:'TRYCATCH', 
								try : {
									list_step:[
										{list_action:[
											{ action:'TARGET_USERNAME', description:'유저이름 타겟팅', target_username:{ html:this.htmls.user_name, type:'innerHTML' }}
										], delay:4, countdown:false},
										{list_action:[
											{ action:'STATUS', status:{ set:'target_user_name', value:'target_user_name' } }
										], delay:4, countdown:false},
										{list_action:[
											{ action:'MYNAME_CHECK' }
										], delay:4, countdown:false},
										{list_action:[
											{ action:'CHECK', func:'follow', description:'팔로우 검사', check:{ htmls:[ {html:this.htmls.btn_follow_did, exist:false, message:'이미 팔로우 중'}, {html:this.htmls.btn_follow_do, exist:true, message:'팔로우 버튼 없음'} ]}},
											{ action:'CHECK', func:'like', description:'좋아요 검사', check:{ htmls:[ {html:this.htmls.check_like_did, exist:false, message:'이미 좋아요 중'} ] } },
											{ action:'CHECK', description:'스팸/스팸유저 검사', check:{ htmls:[ {html:this.htmls.div_spam, exist:false, message:'스팸 단어를 포함하고 있습니다'}, {html:this.htmls.div_spammer, exist:false, message:'스팸유저의 게시물입니다'} ] } }
										], delay:4, countdown:false},
										{list_action:[
											{ action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ html:this.htmls.btn_like_do}, log_push:true, statuses:[{increase:'like_count'}, {increase:'work_index'}] }
										], delay:4, countdown:false},
										{list_action:[
											{ action:'CLICK', func:'follow', func_option:this.funcs_option.follow, description:'팔로우', click:{ html:this.htmls.btn_follow_do}, log_push:true, statuses:[{increase:'follow_count'}] }
										], delay:4, countdown:false},
										{list_action:[ 
											{ action:'INPUT', func:'review', func_option:this.funcs_option.review, description:'댓글 입력',	input:{ html:this.htmls.input_review, texts:[this.texts.review]}, message:'Tip : 10개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' } 
										], delay:4, countdown:false},
										{list_action:[
											{ action:'POST', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 등록',
												post:{ url:this.urls.review, data:{ comment_text: this.texts.review }, headers:[{key:'x-instagram-ajax', value:1}, {key:'x-csrftoken', cookie:'csrftoken' }] }, message:'Tip : 서버에서 댓글을 바로 달아 새로고침해야 확인 가능', log_push:true, statuses:[{increase:'review_count'}]
											}
										], delay:4, countdown:false},
										{list_action:[ { action:'TRYCATCH', 
											try : {
												list_step:[
													// 끝났을 때 resolve, 끝나지 않았을 때 reject
													{list_action:[ { action:'COMPARE', description:'작업 진행 상황 확인', compare:{ type:'>=', pandoras:[{status:'work_index', type:'NUMBER'}, {status:'follower_total', type:'NUMBER'}] } } ], delay: 2, countdown:false},
													{list_action:[ { action:'STOP', description:'작업 종료' } ], delay:2, countdown:false}
												],
												countdown:false
											},
											// 작업 끝나지 않았을 때
											catch : {
												list_step:[
													{list_action:[ { action:'GO', description:'작업할 유저페이지로 이동', go:{ url:this.urls.work_specific_user, delay_position:50 } } ], delay:8, countdown:false}
												],
												countdown:false
											}
										} ]}
									],
									countdown:false
								},
								catch : {
									list_step:[
										{list_action:[ { action:'STATUS', status:{ statuses:[{increase:'work_index'}] } } ], delay:1, countdown:false},
										{list_action:[ { action:'GO', description:'작업할 유저페이지로 이동', go:{ url:this.urls.work_specific_user, delay_position:100 } } ], delay:3, countdown:false}
									],
									countdown:false
								}
							} ]}
						],
						statuses:[{increase:'count'}]
					}
				],
				stop:[]
			};
			
		});

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('kakaogrammerNewfriendService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'kakaogrammer';
			this.version_key = 'newfriend';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['link_name', '_displayName']},
					split:{ attr:'href', params:['/'] }
				},
				tab_photo:{ tag:'a',
					classes:{list:['link_menu', '_changeMode']},
					innerOuterHTMLs:{list:['사진']}
				},
				tab_movie:{ tag:'a',
					classes:{list:['link_menu', '_changeMode']},
					innerOuterHTMLs:{list:['동영상']}
				},
				popular_posts:{ tag:'div',
					classes:{list:['cont_recomm']},
					properties:{list:['data-part-name']},
					innerOuterHTMLs:{list:['인기 게시물']},
				},
				recommended_posts:{ tag:'div',
					classes:{list:['cont_recomm']},
					properties:{list:['data-part-name']},
					innerOuterHTMLs:{list:['추천 태그']}
				},
				post_img_bulletin:{ tag:'a',
					classes:{list:['link_thumb', '_link']},
					properties:{list:['data-kant-id']},
					innerOuterHTMLs:{list:['이미지 로딩중']}
				},
				post_img:{ tag:'a',
					classes:{list:['link_thumb', '_link']},
					properties:{list:['data-kant-id']},
					not_href:'/ch/',
					split:{ attr:'href', params:[] }
				},
				post_text:{ tag:'a',
					classes:{list:['link_txt', '_link']},
					properties:{list:['data-kant-id']},
					split:{ attr:'href', params:[] }
				},
				post_img2:{ tag:'div',
					classes:{list:['img_item']},
					properties:{list:['data-model']},
					split:{ attr:'data-model', splice_kakao:true, params:[] }
				},
				div_spam:{ tag:'div',
					classes:{list:['_content']},
					innerOuterHTMLs:{list:{ setting_key:'list_spam' }},
					indexes:[0]
				},
				div_spammer:{ tag:'a',
					classes:{list:['pf_name']},
					properties:{list:['data-profile-popup','data-kant-id','data-kant-group']},
					innerOuterHTMLs:{list:{ setting_key:'list_spammer' }}
				},
				div_selected_bulletin:{ tag:'div',
					classes:{list:['feed detail_desc', '_feedContainer']}
				},
				btn_friend_do:{ tag:'a',
					classes:{list:['btn_receive', '_btnRequestFriend', '_friendButtons']},
					properties:{list:['data-kant-id']},
					not_properties:{list:['style="display:none"']},
					innerOuterHTMLs:{list:['친구신청']},
				},
				btn_friend_doing:{ tag:'a',
					classes:{list:['btn_receive', 'btn_receive_v2', '_btnRequestingFriend', '_friendButtons']},
					properties:{list:['data-kant-id']},
					not_properties:{list:['style="display:none"']},
					innerOuterHTMLs:{list:['신청 중']},
				},
				btn_friend_did:{ tag:'a',
					classes:{list:['btn_left']},
					properties:{list:['data-kant-id']},
					not_properties:{list:['style="display:none"']},
					innerOuterHTMLs:{list:['친구']},
				},
				btn_receive_feed:{ tag:'a',
					classes:{list:['btn_receive', '_btnFollowFriend', '_friendButtons']},
					properties:{list:['data-kant-id']},
					innerOuterHTMLs:{list:['소식받기']}
				},
				btn_feel:{ tag:'button',
					classes:{list:['_btnLike']},
					properties:{list:['data-kant-id']},
					innerOuterHTMLs:{list:['느낌']}
				},
				btn_up:{ tag:'button',
					classes:{list:['_btnUp']},
					properties:{list:['data-kant-id']},
					innerOuterHTMLs:{list:['UP 하기']}
				},
				btn_like1_do:{ tag:'button',
					parent_html:{ tag:'div', properties:{list:['data-part-name="likeButton"']} },
					classes:{list:['_btnLike']},
					properties:{list:['data-kant-id="91"']},
					not_properties:{list:['style="display:none"']},
					innerOuterHTMLs:{list:['느낌']}
				},
				btn_like1_did:{ tag:'span',
					parent_html:{ tag:'div', properties:{list:['data-part-name="likeButton"']} },
					classes:{list:['ico_ks', '_btnLikeWrapper']},
					not_properties:{list:['style="display:none"']},
					innerOuterHTMLs:{list:['좋아요', '멋져요', '기뻐요', '슬퍼요', '힘내요']}
				},
				btn_like2_do:{ tag:'button',
					parent_html:{ tag:'ul', classes:{list:['ly', 'feel_layer']}, properties:{list:['data-part-name="likeButtonLayer"']} },
					properties:{list:['data-kant-id']},
					not_properties:{list:['data-kant-id="92"']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				input_review:{ tag:'textarea',
					classes:{list:['_text']},
					properties:{list:['title="댓글 입력"']}
				},
				text_total_apply:{ tag:'span',
					classes:{list:['_count']},
					split:{ html:'innerHTML' },
					decent_index:4
				},
				btn_review_do:{ tag:'a',
					classes:{list:['_btnCommentSubmit', 'btn_com']},
					not_properties:{list:['style="display:none"']},
					innerOuterHTMLs:{list:['전송']},
				},
				btn_liking:{ tag:'span',
					classes:{list:['ico_ks', 'bn_like', '_btnLikeWrapper']},
					properties:{list:['style="display: inline;"']}
				},
				btn_friend_apply:{ tag:'a',
					classes:{list:['link_friend']},
					innerOuterHTMLs:{list:['신청']}
				},
				btn_other_limit:{ tag:'a',
					classes:{list:['btn_com', 'btn_or', '_dialogOk', '_dialogBtn']},
					properties:{list:['data-kant-id']},
					innerOuterHTMLs:{list:['확인']}
				},
				review_textarea:{ tag:'textarea',
					classes:{list:['_text']},
					properties:{list:['title="댓글 입력"']}
				},
				logout_prepare:{ tag:'a',
					classes:{list:['link_mystory', '_btnMenu']},
					properties:{list:['data-kant-id', 'data-kant-group']},
					innerOuterHTMLs:{list:['메뉴']}
				},
				logout:{ tag:'a',
					classes:{list:['link_logout', '_btnLogout']},
					properties:{list:['data-skip-navigate', 'data-kant-id', 'data-kant-ignore']},
					innerOuterHTMLs:{list:['로그아웃']}
				}
			};

			// Url Section
			this.urls = {
				newfriend_initial_work:{ basic:'https://story.kakao.com/', changing:false },
				search:{ basic:'https://story.kakao.com/hashtag/', extra:{list:[[{ setting_key:'list_search_tag', method:'getRandom' }]]}, changing:false },
				detail:{ basic:'https://story.kakao.com/', extra:{list:[ { html:this.htmls.post_img2, random:true } ] } },
				work:{ basic:'https://story.kakao.com/' }
			};

			// Interval Section
			this.intervals = {
				search : { setting_key:'interval_search', method:'getRandomOfNumber', percentage:50 },
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
			};
			
			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
				like:{ click:{ click_key:'like' }, percentage:100, boolean:{ click_key:'like', setting_value:100 } },
				// friend:{ click:{ click_key:'friend' }, percentage:{ setting_key:'percentage_friend' }, boolean:{ click_key:'friend', setting_key:'percentage_friend' }, day_limit:{ limit_setting_key:'friend_limit_value', status_key:'friend_limit_count' } },
				friend:{ click:{ click_key:'friend' }, percentage:{ setting_key:'percentage_friend' }, boolean:{ click_key:'friend', setting_key:'percentage_friend' }, work_limit:{ limit_status_key:'friend_limit_value', status_key:'friend_limit_count' } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' } }
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.newfriend_initial_work], condition:'OR'},
						htmls : {list:[this.htmls.tab_photo, this.htmls.tab_movie], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SAVE', save:{ pandoras:[{time:'startmoment_time'}, {status:'startmoment_time'}], conditions:[{status:'count'}, {basic:0}] } } ], delay:1},
							{list_action:[ { action:'CLICK', description:'신청 버튼 클릭', click:{ html:this.htmls.btn_friend_apply, delete:[{component:'property', name:'href'}] } } ], delay:2, countdown:false},
							{list_action:[ { action:'SAVE', description:'누적된 친구요청 수 저장', save:{ pandoras:[{html:this.htmls.text_total_apply, type:'NUMBER'}, {status:'total_apply_number'}], delay_position:50 } } ], delay:1, countdown:false},
							{list_action:[ { action:'SUBTRACT_SAVE', description:'가능 친구요청 수 저장', subtract_save:{ pandoras:[{setting:'kakao_friend_apply_limit'}, {status:'total_apply_number'}, {status:'friend_limit_value'}] } } ], delay:1, countdown:false}
							// {list_action:[ { action:'SUBTRACT_SAVE', description:'가능 친구요청 수 저장', subtract_save:{ pandoras:[{basic:200}, {status:'total_apply_number'}, {status:'friend_limit_value'}] } } ], delay:1, countdown:false}
						]
					},
					{
						urls : {list:[this.urls.search], condition:'OR'},
						htmls : {list:[this.htmls.post_img, this.htmls.post_text], condition:'OR'},
						list_step:[
							{list_action:[ { action:'REMOVE', description:'추천 태그 게시물 제거', remove:{ html:this.htmls.recommended_posts } } ], delay:5},
							{list_action:[ { action:'SCROLL', description:'게시물 검색', scroll:{ interval:5 } } ], delay:80},
							{list_action:[ { action:'GO', description:'게시물 선택', go:{ url:this.urls.detail, delay_position:100 } } ], delay:10}
						],
						delay:this.intervals.search
					},
					{
						urls : {list:[this.urls.work], condition:'OR'},
						htmls : {list:[this.htmls.btn_friend_do, this.htmls.btn_up, this.htmls.btn_feel], condition:'AND'},
						list_step:[
							{list_action:[ { action:'CHECK', description:'친구 검사', check:{ htmls:[ 
								{html:this.htmls.btn_friend_doing, exist:false, message:'이미 친구 요청 중'}, 
								{html:this.htmls.btn_friend_do, exist:true, message:'친구추가 버튼 없음'}, 
								{html:this.htmls.btn_receive_feed, exist:false, message:'페이지 게시물'} ] } }
							], delay:10, countdown:false},
							{list_action:[ { action:'CHECK', description:'좋아요 검사', check:{ htmls:[
								{html:this.htmls.btn_feel, exist:true, message:'느낌 버튼 없음'},
								{html:this.htmls.btn_liking, exist:false, message:'이미 좋아요 중'} ] } }
							], delay:10, countdown:false},
							{list_action:[ { action:'CHECK', description:'스팸/스팸유저 검사', check:{ htmls:[
								{html:this.htmls.div_spam, exist:false, message:'스팸 단어를 포함하고 있습니다'},
								{html:this.htmls.div_spammer, exist:false, message:'스팸유저의 게시물입니다'} ] } } 
							], delay:10, countdown:false},
							{list_action:[ 
								{ action:'CLICK', func:'friend', func_option:this.funcs_option.friend, description:'친구 추가', click:{ html:this.htmls.btn_friend_do }, statuses:[{increase:'friend_count'}, {increase:'friend_limit_count'}] } 
							], delay:10, countdown:false},
							{list_action:[
								{ action:'CLICK', func:'friend', func_option:this.funcs_option.friend, func_option_fix:true, click:{ html:this.htmls.btn_other_limit } }
							], delay:2, countdown:false},
							{list_action:[ 
								{ action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'느낌버튼 클릭', click:{ html:this.htmls.btn_feel } } 
							], delay:10, countdown:false},
							{list_action:[ 
								{ action:'CLICK', func:'like', func_option:this.funcs_option.like, func_option_fix:true, description:'좋아요버튼 클릭', click:{ html:this.htmls.btn_like2_do }, statuses:[{increase:'like_count'}] } 
							], delay:10, countdown:false},
							{list_action:[
								{ action:'CLICK', func:'review', func_option:this.funcs_option.review, description:'댓글 입력창 클릭', click:{ html:this.htmls.review_textarea } }
							], delay:5, countdown:false},
							{list_action:[ 
								{ action:'INPUT', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 입력', input:{ html:this.htmls.input_review, texts:[this.texts.review]}, message:'Tip : 10개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' } 
							], delay:5, countdown:false},
							{list_action:[ 
								{ action:'CLICK', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 등록', click:{ html:this.htmls.btn_review_do}, statuses:[{increase:'review_count'}] } 
							], delay:5, countdown:false},
							{list_action:[
								{ action:'TRYCATCH',
									try : {
										list_step:[
											// 끝났을 때 resolve, 끝나지 않았을 때 reject 
											{list_action:[ { action:'COMPARE', description:'작업 시간 확인', compare:{ type:'>=', pandoras:[{time:'current_time'}, {status:'startmoment_time', additional_work:{ plus:{setting:'work_time_limit', multiple:{basic:3600000} } } }] } } ], delay: 2, countdown:false},
											{list_action:[ { action:'CLICK', click:{ html:this.htmls.logout_prepare, delete:[{component:'property', name:'href'}] } } ], delay: 1, countdown:false},
											{list_action:[ { action:'CLICK', description:'로그아웃', click:{ html:this.htmls.logout } } ], delay: 1, countdown:false},
											{list_action:[ { action:'STOP', description:'작업 종료' } ], delay:2, countdown:false}
										],
										countdown:false
									},
									catch : {
										list_step:[
											{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'count'} ] } } ], delay:1, countdown:false}
										],
										countdown:false
									}
								}
							], delay:10, countdown:false}
						],
						delay:this.intervals.work
					}
				],
				stop:[]
			};

		});

/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('kakaogrammerUnfriendService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'kakaogrammer';
			this.version_key = 'unfriend';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['link_name', '_displayName']},
					split:{ attr:'href', params:['/'] }
				},
				tab_photo:{ tag:'a',
					classes:{list:['link_menu', '_changeMode']},
					innerOuterHTMLs:{list:['사진']}
				},
				tab_movie:{ tag:'a',
					classes:{list:['link_menu', '_changeMode']},
					innerOuterHTMLs:{list:['동영상']}
				},
				btn_friend_apply:{ tag:'a',
					classes:{list:['link_friend']},
					innerOuterHTMLs:{list:['신청']}
				},
				text_total_apply:{ tag:'span',
					classes:{list:['_count']},
					split:{ html:'innerHTML' },
					decent_index:4
				},
				box_scroll:{ tag:'ul',
					// parent_html:{ tag:'div',
					// 	classes:{list:['_list', 'inner_tabcont']},
					// 	properties:{list:['style="overflow: hidden; height: 634px;"']}
					// },
					classes:{list:['list_cate', 'list_cate_send']},
					properties:{list:['data-part-name', 'style="display: block;"']}
				},
				box_apply:{ tag:'li',
					parent_html:{ tag:'ul',
						classes:{list:['list_cate', 'list_cate_send']},
						properties:{list:['data-part-name']}
					},
					properties:{list:['data-model']}
				},
				btn_friend_applying:{ tag:'button',
					classes:{list:['btn_link']},
					properties:{list:['data-kant-id']},
					innerOuterHTMLs:{list:['신청취소']}
				},
				btn_friend_applying_confirm:{ tag:'a',
					classes:{list:['btn_com', 'btn_or', '_dialogOk', '_dialogBtn']},
					properties:{list:['data-kant-id']},
					innerOuterHTMLs:{list:['확인']}
				}
			};

			// Url Section
			this.urls = {
				unfriend_work:{ basic:'https://story.kakao.com/', changing:false }
			};

			// Interval Section
			this.intervals = {
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.unfriend_work], condition:'AND'},
						htmls : {list:[this.htmls.tab_photo, this.htmls.tab_movie], condition:'AND'},
						list_step:[
							{list_action:[ { action:'CLICK', func:'unfriend', description:'신청 버튼 클릭', click:{ html:this.htmls.btn_friend_apply, delete:[{component:'property', name:'href'}] } } ], delay:3},
							{list_action:[ { action:'SAVE', func:'unfriend', description:'총 친구요청 수 저장', save:{ pandoras:[{html:this.htmls.text_total_apply, type:'NUMBER'}, {status:'unfriend_total'}], delay_position:50 } } ], delay:2 },
							{list_action:[ { action:'SCROLL', func:'unfriend', description:'친구요청 검색', scroll:{ interval:1, html:this.htmls.box_scroll, comparison:{ type: '>=', pandoras : [ {html:this.htmls.box_apply, type:'COUNT'}, {status:'unfriend_total', type:'NUMBER'} ], message:'총 요청', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ]},
							{list_action:[ { action:'STATUS', func:'unfriend', status:{ set:'fix_number', value:0 } } ], delay:1 },
							{list_action:[ { action:'STATUS', func:'unfriend', status:{ set:'unfriend_count', value:0 } } ], delay:1 },
							{list_action:[ { action:'LOOP', func:'unfriend', description:'요청 취소 반복',
								loop:{
									list_step:[
										{list_action:[ { action:'TARGET', func:'unfriend', description:'타겟 설정', target:{ html:this.htmls.box_apply, index:{status:'fix_number', type:'NUMBER'}, set:true, scroll:{ value:true } } } ], delay:5 },
										{list_action:[ { action:'CLICK', func:'unfriend', description:'요청취소 클릭', click:{ target:true, html:this.htmls.btn_friend_applying } } ], delay:5, statuses:[{increase:'unfriend_count'}]},
										{list_action:[ { action:'CLICK', func:'unfriend', description:'요청취소 확인 클릭', click:{ html:this.htmls.btn_friend_applying_confirm, delete:[{component:'property', name:'href'}] } } ], delay:5},
										{list_action:[ { action:'TARGET', func:'unfriend', description:'타겟 해제', target:{ set:false } } ], delay:5}
									],
									comparison:{type:'>=', pandoras:[{status:'unfriend_count', type:'NUMBER'}, {status:'unfriend_total', type:'NUMBER'}], message:'요청취소 중'},
									delay:this.intervals.work
								}
							} ] }
						]
					}
				]
			};


		});

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('pholagrammerFollowService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'pholagrammer';
			this.version_key = 'follow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['btn_my']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['My Account']},
					split:{ attr:'href', params:['/my/', '/profile'] }
				},
				input_search:{ tag:'input',
					classes:{list:['sch_input_text', '_input_search']},
					properties:{list:['id="sch_input_text"', 'type="text"']},
				},
				tab_post:{ tag:'a',
					classes:{list:['btn_tab', 'btn_tab_on']},
					properties:{list:['data-search-filter', 'onclick']},
					innerOuterHTMLs:{list:['포스트']}
				},
				btn_keyword :{ tag:'a',
					classes:{list:['link_sch_tag']},
					properties:{list:['data-search-keyword', 'onclick']},
				},
				btn_post_more :{ tag:'a',
					classes:{list:['btn_view_more']},
					properties:{list:['data-persist-component']},
					href:'/post/',
					innerOuterHTMLs:{list:['더보기']},
					split:{ attr:'href', params:[] }
				},
				div_spam:{ tag:'span',
					classes:{list:['item_data _post_content']},
					innerOuterHTMLs:{list:{ setting_key:'list_spam' }},
					indexes:[0]
				},
				div_spammer:{ tag:'a',
					classes:{list:['profile_wrap']},
					properties:{list:['data-persist-component']},
					href:'/my/',
					innerOuterHTMLs:{list:{ setting_key:'list_spammer' }}
				},
				btn_follow_do :{ tag:'a',
					classes:{list:['btn_follow']},
					not_classes:{list:['btn_follow_on']},
					properties:{list:['id="follow_btn"', 'data-follow-component="MEMBER"', 'onclick']},
					innerOuterHTMLs:{list:['팔로우']}
				},
				btn_follow_did :{ tag:'a',
					classes:{list:['btn_follow', 'btn_follow_on']},
					properties:{list:['id="follow_btn"', 'data-follow-component="MEMBER"', 'onclick']},
					innerOuterHTMLs:{list:['팔로우']}
				},
				btn_like_do :{ tag:'a',
					parent_html:{ tag:'div', classes:{list:['item_btns_wrap']} },
					classes:{list:['u_likeit_list_btn', 'u_type_img', 'u_none_txt']},
					not_classes:{list:['on']},
					properties:{list:['data-likeit-component', 'onclick']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				btn_like_did :{ tag:'a',
					parent_html:{ tag:'div', classes:{list:['item_btns_wrap']} },
					classes:{list:['u_likeit_list_btn', 'u_type_img', 'u_none_txt', 'on']},
					properties:{list:['data-likeit-component', 'onclick']},
					innerOuterHTMLs:{list:['좋아요']}
				},
				input_review :{ tag:'textarea',
					classes:{list:['u_cbox_text']},
					properties:{list:['id="cbox_module__write_textarea"']}
				},
				btn_review_do :{ tag:'button',
					classes:{list:['u_cbox_btn_upload']},
					properties:{list:['type="button"']},
					innerOuterHTMLs:{list:['등록']}
				}
			};

			// Url Section
			this.urls = {
				search:{ basic:'http://www.pholar.co/search', changing:false },
				work:{ basic:'http://www.pholar.co/post/', changing:false },
				detail:{ basic:'', extra:{list:[ { html:this.htmls.btn_post_more, random:true } ] } }
			};

			// Interval Section
			this.intervals = {
				search : { setting_key:'interval_search', method:'getRandomOfNumber', percentage:50 },
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
			};

			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' },
				search:{ setting_key:'list_search_tag', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
				like:{ click:{ click_key:'like' }, percentage:100, boolean:{ click_key:'like', setting_value:100 } },
				follow:{ click:{ click_key:'follow' }, percentage:{ setting_key:'percentage_follow' }, boolean:{ click_key:'follow', setting_key:'percentage_follow' } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' } }
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.search], condition:'OR'},
						htmls : {list:[this.htmls.input_search, this.htmls.tab_post], condition:null},
						list_step:[
							{list_action:[ { action:'INPUT', description:'검색어 입력', input:{ html:this.htmls.input_search, texts:[this.texts.search]} } ], delay:10},
							{list_action:[ { action:'CLICK', description:'관련 키워드 보기', click:{ html:this.htmls.tab_post } } ], delay:10},
							{list_action:[ { action:'CLICK', description:'키워드 선택', click:{ html:this.htmls.btn_keyword } } ], delay:10},
							{list_action:[ { action:'SCROLL', description:'게시물 검색', scroll:{ interval:5 } } ], delay:60},
							{list_action:[ { action:'GO', description:'게시물 선택', go:{ url:this.urls.detail, delay_position:100 } } ], delay:10}
						],
						delay:this.intervals.search
					},
					{
						urls : {list:[this.urls.work], condition:'OR'},
						htmls : {list:[this.htmls.btn_follow_do, this.htmls.btn_follow_did, this.htmls.btn_like_do, this.htmls.btn_like_did], condition:'OR'},
						list_step:[
							{list_action:[
								{ action:'CHECK', func:'follow', 	description:'팔로우 검사', 	check:{ htmls:[ {html:this.htmls.btn_follow_did, 	exist:false, message:'이미 팔로우 중'}, {html:this.htmls.btn_follow_do, exist:true, message:'팔로우 버튼 없음'} ]}},
								{ action:'CHECK', func:'like', 		description:'좋아요 검사', 	check:{ htmls:[ {html:this.htmls.btn_like_did, exist:false, message:'이미 좋아요 중'}, {html:this.htmls.btn_like_do, exist:true, message:'좋아요 버튼 없음'} ] } },
								{ action:'CHECK', 								description:'스팸/스팸유저 검사', 		check:{ htmls:[ {html:this.htmls.div_spam, 			exist:false, message:'스팸 단어를 포함하고 있습니다'}, {html:this.htmls.div_spammer, exist:false, message:'스팸유저의 게시물입니다'} ] } }
							], delay:5},
							{list_action:[
								{ action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ html:this.htmls.btn_like_do}, log_push:true, statuses:[{increase:'like_count'}] }
							], delay:10},
							{list_action:[
								{ action:'CLICK', func:'follow', func_option:this.funcs_option.follow, description:'팔로우', click:{ html:this.htmls.btn_follow_do}, log_push:true, statuses:[{increase:'follow_count'}] }
							], delay:10},
							{list_action:[ { action:'CLICK', func:'review', func_option:this.funcs_option.review,	description:'댓글 입력창 열기', click:{ html:this.htmls.input_review} } ], delay:5},
							{list_action:[ { action:'INPUT', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 입력',	input:{ html:this.htmls.input_review, texts:[this.texts.review]}, message:'Tip : 10개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' } ], delay:5},
							{list_action:[ { action:'CLICK', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 등록', click:{ html:this.htmls.btn_review_do}, log_push:true, statuses:[{increase:'review_count'}] } ], delay:5}
						],
						delay:this.intervals.work,
						statuses:[{increase:'count'}]
					}
				],
				stop:[]
			};
			
		});

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('pholagrammerMyfollowerService', function($rootScope, $q, arrayService, numberService, grammerGetService){
			this.grammer_key = 'pholagrammer';
			this.version_key = 'myfollower';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			
			this.interval_search = numberService.getRandomOfNumber(this.getSetting('interval_search'), 50);
			this.interval_work = numberService.getRandomOfNumber(this.getSetting('interval_work'), 50);
			this.htmls = {
				html_name:{ tag:null,
					classes:{list:[]},
					properties:{list:[]},
					href:null,
					innerHTMLs:{list:[]}
				}
			};
			this.urls = {
				url_search:{ basic:'http://www.pholar.co/search', changing:false },
				url_work:{ basic:'http://www.pholar.co/post/', changing:false },
				url_home:{ basic:'http://www.pholar.co', changing:false }
			};
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.url_search_tag, this.urls.url_search_location], condition:'OR'},
						htmls : {list:[], condition:null},
						list_step:[
							{list_action:[ { action:null, description:null } ], delay:null}
						],
						delay:this.interval_search
					}
				],
				stop:[]
			};
		});

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('pholagrammerUnfollowService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'pholagrammer';
			this.version_key = 'unfollow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['btn_my']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['My Account']},
					split:{ attr:'href', params:['/my/', '/profile'] }
				},
				text_follower:{ tag:'a',
					classes:{list:['box_sub']},
					properties:{list:['data-persist-component="unique_idx2"', 'data-persist-param']},
					innerOuterHTMLs:{list:['팔로워']},
					split:{ html:'innerHTML', params:['<em class="cnt_num">','</em>'], type:'NUMBER' }
				},
				text_following:{ tag:'a',
					classes:{list:['box_sub']},
					properties:{list:['data-persist-component="unique_idx2"', 'data-persist-param']},
					innerOuterHTMLs:{list:['팔로잉']},
					split:{ html:'innerHTML', params:['<em class="cnt_num">','</em>'], type:'NUMBER' }
				},
				tab_follower:{ tag:'h2',
					classes:{list:['follow_head', 'my_follow']},
					innerOuterHTMLs:{list:['님의 팔로워']}
				},
				tab_following:{ tag:'h2',
					classes:{list:['follow_head']},
					innerOuterHTMLs:{list:['님의 팔로잉']}
				},
				tab_following_user:{ tag:'a',
					classes:{list:['btn_tab', 'btn_tab_on']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['유저']}
				},
				box_user:{ tag:'li',
					classes:{list:['item_follow_wrap']}
				},
				text_userid:{ tag:'a',
					classes:{list:['link_profile']},
					properties:{list:['href', 'title="계정 상세페이지"', 'onclick']},
					split:{ attr:'href', params:[null, null] }
				},
				btn_unfollow_do:{ tag:'a',
					classes:{list:['btn_follow', 'btn_follow_on']},
					properties:{list:['data-follow-component="MEMBER"', 'data-member-no']},
					innerOuterHTMLs:{list:['팔로잉']}
				},
				// btn_unfollow_more:{ tag:'div',
				// 	classes:{list:['_more', 'follow_view_more']},
				// 	innerOuterHTMLs:{list:['리스트 더 보기']}
				// }
				btn_unfollow_more:{ tag:'a',
					classes:{list:['btn_view_more']},
					// properties:{list:['href', 'data-more-type="next"', 'data-request-param']},
					innerOuterHTMLs:{list:['리스트 더 보기']}
				},
				btn_follow_do:{ tag:'a',
					classes:{list:['btn_follow', 'btn_follow_on']},
					properties:{list:['data-follow-component', 'data-member-no']},
					innerOuterHTMLs:{list:['팔로우']}
				},
				btn_edit:{ tag:'a',
					classes:{list:['btn_setting', '_btn_toggle_tools']},
					properties:{list:['title="설정하기"']},
					innerOuterHTMLs:{list:['설정하기']}
				},
				access_denied:{ tag:'span',
					classes:{list:['ly_inform_msg']}
				}
			};

			// Url Section
			this.urls = {
				mypage:{ basic:'http://www.pholar.co/my/', extra:{list:[{html:this.htmls.identification}, '/profile']}, changing:false },
				follower:{ basic:'http://www.pholar.co/my/', extra:{list:[{html:this.htmls.identification}, '/profile/follower']}, changing:false },
				following:{ basic:'http://www.pholar.co/my/', extra:{list:[{html:this.htmls.identification}, '/profile/following/user']}, changing:false },
				work_unfollow:{ basic:'http://www.pholar.co', extra:{list:[{status:'following_list', status_index:'unfollow_index', grammer_key:'pholagrammer', version_key:'unfollow'}]}, changing:false }
			};

			// Interval Section
			this.intervals = {
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
				// work : numberService.getRandomOfNumber(this.getSetting('interval_work'), 50)
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.mypage], condition:'AND'},
						htmls : {list:[this.htmls.text_follower, this.htmls.text_following, this.htmls.btn_edit], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 수 저장', save:{ pandoras:[{html:this.htmls.text_follower, type:'NUMBER'}, {status :'follower_total'}] } } ], delay:3 },
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 수 저장', save:{ pandoras:[{html:this.htmls.text_following, type:'NUMBER'}, {status :'following_total'}] } } ], delay:3 }
						],
						delay:6
					},
					{
						urls : {list:[this.urls.follower], condition:'AND'},
						htmls : {list:[this.htmls.tab_follower], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로워 검색', scroll:{ interval:0.3, click:{ html:this.htmls.btn_unfollow_more, delete:[{component:'property', name:'href'}] }, comparison:{ type: '>=', pandoras : [{html:this.htmls.box_user, type:'COUNT'}, {status:'follower_total', type:'NUMBER'} ], message:'팔로워 검색 중', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ] },
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 저장', save:{ pandoras:[{html:this.htmls.text_userid, type:'TEXT', isArray:true}, {status:'follower_list'}] } } ], delay:3 }
						]
					},
					{
						urls : {list:[this.urls.following], condition:'AND'},
						htmls : {list:[this.htmls.tab_following, this.htmls.tab_following_user], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로잉 검색', scroll:{ interval:0.3, click:{ html:this.htmls.btn_unfollow_more, delete:[{component:'property', name:'href'}] }, comparison:{ type: '>=', pandoras : [{html:this.htmls.box_user, type:'COUNT'}, {status:'following_total', type:'NUMBER'} ], message:'팔로잉 검색 중', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ] },
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 저장', save:{ pandoras:[{html:this.htmls.text_userid, type:'TEXT', isArray:true}, {status:'following_list'}] } } ], delay:3 },
							{list_action:[ { action:'EXCLUDE', func:'unfollow', description:'맞팔 제외 팔로잉 리스트 추출', exclude:{ pandoras:[{status:'follower_list'}, {status:'following_list'}] } } ], delay:3},
							{list_action:[ { action:'STATUS', func:'unfollow', status:{ set:'unfollow_index', value:0 } } ], delay:2},
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 수 갱신', save:{ pandoras:[{status:'following_list', type:'LENGTH'}, {status:'following_total'}] } } ], delay:2},
							{list_action:[ { action:'GO', func:'unfollow', description:'언팔로우 작업페이지로 이동', go:{ url:this.urls.work_unfollow, delay_position:50 } } ], delay:6}
						]
					},
					{
						urls : {list:[this.urls.work_unfollow], condition:'OR'},
						htmls : {list:[this.htmls.text_follower, this.htmls.text_following, this.htmls.access_denied], condition:'OR'},
						list_step:[
							{list_action:[ { action:'LOOP', func:'unfollow', description:'언팔로우 반복',
								loop:{
									list_step:[
										{list_action:[ { action:'TRYCATCH', func:'unfollow',
											try : {
												list_step:[
													{list_action:[ { action:'CHECK', func:'unfollow', description:'언팔로우 가능 여부 검사', check:{ htmls:[ {html:this.htmls.access_denied, exist:false, message:'접근 불가'} ] } } ], delay:2},
													{list_action:[ { action:'MESSEAGE', func:'unfollow', message:{ text:'언팔 예정', delay_position:0 } } ], delay: 1, countdown:false },
													{list_action:[ { action:'CLICK', func:'unfollow', description:'언팔로우', click:{ html:this.htmls.btn_follow_do, delete:[{component:'property', name:'href'}] } } ], delay:10}
												],
												countdown:false
											},
											catch : {
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'unfollow', message:{ text:'언팔로우 불가 계정' } } ], delay:2, countdown:false }
												],
												countdown:false
											},
											finally : {
												list_step:[
													{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'unfollow_index'} ] } } ], delay:1, countdown:false },
													{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'count'} ] } } ], delay:1, countdown:false},
													{list_action:[ { action:'TRYCATCH', func:'unfollow',
														try : {
															list_step:[
																{list_action:[ { action:'COMPARE', description:'작업 진행 상황 확인', compare:{ type:'>=', pandoras:[{status:'unfollow_index', type:'NUMBER'}, {status:'following_total', type:'NUMBER'}] } } ], delay:3, countdown:false},
																{list_action:[ { action:'STOP', description:'작업 종료' } ], delay:2, countdown:false}
															],
															countdown:false
														},
														catch : {
															list_step:[
																{list_action:[ { action:'GO', description:'다음 언팔로우 작업페이지로 이동', go:{ url:this.urls.work_unfollow, delay_position:20 } } ], delay:10, countdown:false}
															]
														}
													} ]}
												],
												countdown:false
											}
										} ]}
									]
								}
							} ]}
						]
					}
				],
				stop:[]
			};

		});

/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('twitgrammerFollowService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'twitgrammer';
			this.version_key = 'follow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['account-summary', 'account-summary-small', 'js-nav']},
					properties:{list:['data-nav="view_profile"']},
					split:{ attr:'href', params:['/'] }
				},
				recent_tab_tweet:{ tag:'a',
					classes:{list:['AdaptiveFiltersBar-target', 'AdaptiveFiltersBar-target--link', 'u-textUserColor', 'js-nav']},
					properties:{list:['href', 'data-nav="search_filter_tweets"']},
					href:'/search?',
					innerOuterHTMLs:{list:['최신']}
				},
				post_tweet:{ tag:'div',
					parent_html:{tag:'li', classes:{list:['js-stream-item', 'stream-item']}, properties:{list:['data-item-id', 'data-item-type']}},
					classes:{list:['tweet', 'js-stream-tweet', 'js-actionable-tweet', 'js-profile-popup-actionable', 'original-tweet', 'js-original-tweet']},
					properties:{list:['data-tweet-id', 'data-item-id', 'data-permalink-path', 'data-screen-name', 'data-name', 'data-user-id', 'data-you-follow', 'data-follows-you', 'data-you-block', 'data-disclosure-type']}
				},
				main_tweet:{ tag:'div',
					classes:{list:['permalink-inner', 'permalink-tweet-container']}
				},
				div_spam:{ tag:'p',
					parent_html:{ tag:'div', classes:{list:['js-tweet-text-container']} },
					classes:{list:['TweetTextSize', 'TweetTextSize--26px', 'js-tweet-text', 'tweet-text']},
					properties:{list:['data-aria-label-part']},
					innerOuterHTMLs:{list:{ setting_key:'list_spam' }}
				},
				div_spammer:{ tag:'strong',
					classes:{list:['fullname', 'js-action-profile-name', 'show-popup-with-id']},
					properties:{list:['data-aria-label-part']},
					innerOuterHTMLs:{list:{ setting_key:'list_spammer' }}
				},
				check_follow:{ tag:'div',
					classes:{list:['user-actions', 'btn-group', 'not-muting', 'not-following']},
					properties:{list:['data-user-id', 'data-screen-name', 'data-name', 'data-protected="false"']}
				},
				check_following:{ tag:'div',
					classes:{list:['user-actions', 'btn-group', 'not-muting', 'including', 'following']},
					properties:{list:['data-user-id', 'data-screen-name', 'data-name', 'data-protected="false"']} 
				},
				btn_follow:{ tag:'button',
					classes:{list:['user-actions-follow-button', 'js-follow-btn', 'follow-button', 'btn']},
					properties:{list:['type="button"']},
					innerOuterHTMLs:{list:['팔로우', '팔로잉', '언팔로우']}
				},
				check_liked:{ tag:'div',
					classes:{list:['IconContainer', 'js-tooltip']},
					properties:{list:['data-original-title']},
					innerOuterHTMLs:{list:['마음에 들어함']}
				},
				btn_like:{ tag:'button',
					parent_html:{ tag:'div', classes:{list:['ProfileTweet-action', 'ProfileTweet-action--favorite', 'js-toggleState']} },
					classes:{list:['ProfileTweet-actionButton', 'js-actionButton', 'js-actionFavorite']},
					properties:{list:['type="button"']},
					innerOuterHTMLs:{list:['마음에 들어요']}
				},
				input_review_open:{ tag:'form',
					parent_html:{ tag:'div', classes:{list:['inline-reply-tweetbox', 'swift']} },
					classes:{list:['t1-form', 'tweet-form', 'condensed']},
					properties:{list:['method="post"', 'target="tweet-post-iframe"', 'data-default-text', 'data-condensed-text', 'action', 'enctype', 'data-poll-composer-rows', 'data-poll-duration']}
				},
				// input_review:{ tag:'div',
				// 	parent_html:{ tag:'div',
				// 		parent_html:{ tag:'div',
				// 			parent_html:{ tag:'div',
				// 				parent_html:{ tag:'div', 
				// 					classes:{list:['RichEditor', 'RichEditor--emojiPicker', 'is-fakeFocus']}
				// 				},
				// 				classes:{list:['RichEditor-container', 'u-borderRadiusInherit']}
				// 			},
				// 			classes:{list:['RichEditor-scrollContainer', 'u-borderRadiusInherit']}
				// 		},
				// 		classes:{list:['tweet-box', 'rich-editor']}
				// 	}
				// },
				input_review:{ tag:'div',
					parent_html:{ tag:'div',
						parent_html:{ tag:'div', classes:{list:['RichEditor-scrollContainer', 'u-borderRadiusInherit']}, index:3 },
						classes:{list:['tweet-box', 'rich-editor']},
						properties:{list:['aria-labelledby', 'name="tweet"', 'contenteditable="true"', 'spellcheck="true"', 'role="textbox"', 'aria-multiline="true"', 'data-placeholder-default="무슨 일이 일어나고 있나요?"', 'data-placeholder-poll-composer-on="질문하기..."', 'data-placeholder-reply="내 답글을 트윗합니다."', 'dir="ltr"', 'aria-autocomplete="list"', 'aria-expanded="false"', 'aria-owns']},
						innerOuterHTMLs:{list:['tweet-box-reply-to','typeahead-dropdown'], type:'OUTERHTML'}
					},
					not_classes:{list:['topbar', 'js-topbar', 'global-nav']},
					not_properties:{list:['data-at-shortcutkeys', 'id="doc"']},
					innerOuterHTMLs:{list:['<s>@</s>','twitter-atreply', 'pretty-link']}
				},
				btn_review_do:{ tag:'button',
					parent_html:{ tag:'div', classes:{list:['TweetBoxToolbar-tweetButton', 'tweet-button']}, index:1 },
					classes:{list:['btn', 'primary-btn', 'tweet-action', 'disabled', 'tweet-btn', 'js-tweet-btn']},
					properties:{list:['type="button"']},
					innerOuterHTMLs:{list:['트윗하기']}
				},
				btn_review_changed:{ tag:'button',
					parent_html:{ tag:'div', classes:{list:['TweetBoxToolbar-tweetButton', 'tweet-button']}, index:1 },
					classes:{list:['btn', 'primary-btn', 'tweet-action', 'tweet-btn', 'js-tweet-btn']},
					properties:{list:['type="button"']},
					innerOuterHTMLs:{list:['트윗하기']}
				}
			};

			// Url Section
			this.urls = {
				search:{ basic:'https://twitter.com/search?f=tweets&vertical=default&q=', extra:{list:[[{ setting_key:'list_search_tag', method:'getRandom' }], '&src=typd']}, changing:false },
				work:{ basic:'https://twitter.com', extra:{list:[]}, changing:true }
			};

			// Interval Section
			this.intervals = {
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:10 }
			};

			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
				like:{ click:{ click_key:'like' }, percentage:100, boolean:{ click_key:'like', setting_value:100 } },
				follow:{ click:{ click_key:'follow' }, percentage:{ setting_key:'percentage_follow' }, boolean:{ click_key:'follow', setting_key:'percentage_follow' } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' } }
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.search], condition:'OR'},
						htmls : {list:[this.htmls.recent_tab_tweet], condition:'OR'},
						list_step:[
							{list_action:[ { action:'SCROLL', description:'트윗 검색', scroll:{ interval:5 } } ], delay:20},
							{list_action:[ { action:'CLICK', description:'트윗 선택', click:{ html:this.htmls.post_tweet } } ], delay:5},
							{list_action:[
								{ action:'CHECK', func:'follow', description:'팔로우 검사', check:{ htmls:[ {html:this.htmls.check_following, exist:false, message:'이미 팔로잉 중'}, {html:this.htmls.check_follow, exist:true, message:'팔로우 버튼 없음'} ] } },
								{ action:'CHECK', func:'like', description:'좋아요 검사', check:{ htmls:[ {html:this.htmls.check_liked, exist:false, message:'이미 좋아요 중'} ] } },
								{ action:'CHECK', description:'스팸/스팸유저 검사', check:{ htmls:[ {html:this.htmls.div_spam, exist:false, message:'스팸 단어를 포함하고 있습니다'}, {html:this.htmls.div_spammer, exist:false, message:'스팸유저의 게시물입니다'} ] } } 
							], delay:5},
							{list_action:[
								{ action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ html:this.htmls.btn_like}, log_push:true, statuses:[{increase:'like_count'}] }
							], delay:5},
							{list_action:[
								{ action:'CLICK', func:'follow', func_option:this.funcs_option.follow, description:'팔로우', click:{ html:this.htmls.btn_follow}, log_push:true, statuses:[{increase:'follow_count'}] }
							], delay:5},
							{list_action:[ { action:'CHANGE', func:'review', func_option:this.funcs_option.review, description:'댓글 입력창 열기', change:{ html:this.htmls.input_review_open, classes:{ remove:{list:['condensed']}}}, message:'Tip : 10개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' } ], delay:5},
							{list_action:[ { action:'CHANGE', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 입력', change:{ html:this.htmls.input_review, replaceChilds:{list:[{ text:this.texts.review, position:'LAST' } ] } } } ], delay:5},
							{list_action:[ { action:'CHANGE', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 버튼 활성화', change:{ html:this.htmls.btn_review_do, classes:{ remove:{list:['disabled'] } }, properties:{ remove:{list:[{name:'disabled'}] } } } } ], delay:5},
							{list_action:[ { action:'CLICK', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 등록', click:{ html:this.htmls.btn_review_changed }, log_push:true, statuses:[{increase:'review_count'}] } ], delay:5}
						],
						delay:this.intervals.work,
						statuses:[{increase:'count'}]
					}
				],
				stop:[]
			};

		});

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('twitgrammerMyfollowerService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'twitgrammer';
			this.version_key = 'myfollower';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			this.interval_search = numberService.getRandomOfNumber(this.getSetting('interval_search'), 50);
			this.interval_work = numberService.getRandomOfNumber(this.getSetting('interval_work'), 50);
			this.htmls = {
				html_name:{ tag:null,
					classes:{list:[]},
					properties:{list:[]},
					href:null,
					innerHTMLs:{list:[]}
				}
			};
			this.urls = {
				url_search_tag:{ basic:'https://twitter.com/search?f=tweets&vertical=default&q=', extra:{list:[arrayService.getRandom(this.getSetting('list_search_tag'))]}, changing:false },
				url_search_location:{ basic:'https://twitter.com/search?f=tweets&vertical=default&q=', extra:{list:[arrayService.getRandom(this.getSetting('list_search_location'))]}, changing:false },
				url_work:{ basic:'https://twitter.com/', changing:false },
				url_home:{ basic:'https://twitter.com', changing:false }
			};
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.url_search_tag, this.urls.url_search_location], condition:'OR'},
						htmls : {list:[], condition:null},
						list_step:[
							{list_action:[ { action:null, description:null } ], delay:null}
						],
						delay:this.interval_search
					}
				],
				stop:[]
			};
		});

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('twitgrammerUnfollowService', function($rootScope, $q, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'twitgrammer';
			this.version_key = 'unfollow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['account-summary', 'account-summary-small', 'js-nav']},
					properties:{list:['data-nav="view_profile"']},
					split:{ attr:'href', params:['/'] }
				},
				text_follower:{ tag:'li',
					classes:{list:['ProfileNav-item', 'ProfileNav-item--followers']},
					not_classes:{list:['is-active']},
					innerOuterHTMLs:{list:['팔로워']},
					split:{ html:'innerHTML', params:['<span class="ProfileNav-value" data-is-compact="false">','</span>'], type:'NUMBER' }
				},
				text_following:{ tag:'li',
					classes:{list:['ProfileNav-item', 'ProfileNav-item--following']},
					// not_classes:{list:['is-active']},
					innerOuterHTMLs:{list:['팔로잉']},
					split:{ html:'innerHTML', params:['<span class="ProfileNav-value" data-is-compact="false">','</span>'], type:'NUMBER' }
				},
				tab_follower:{ tag:'li',
					classes:{list:['ProfileNav-item', 'ProfileNav-item--followers']},
					not_classes:{list:['is-active']},
					innerOuterHTMLs:{list:['팔로워']}
				},
				tab_follower_active:{ tag:'li',
					classes:{list:['ProfileNav-item', 'ProfileNav-item--followers', 'is-active']},
					innerOuterHTMLs:{list:['팔로워']}
				},
				tab_following:{ tag:'li',
					classes:{list:['ProfileNav-item', 'ProfileNav-item--following']},
					not_classes:{list:['is-active']},
					innerOuterHTMLs:{list:['팔로잉']}
				},
				tab_following_active:{ tag:'li',
					classes:{list:['ProfileNav-item', 'ProfileNav-item--following', 'is-active']},
					innerOuterHTMLs:{list:['팔로잉']}
				},
				box_user:{ tag:'div',
					classes:{list:['ProfileCard', 'js-actionable-user']},
					properties:{list:['data-screen-name', 'data-user-id', 'data-feedback-token', 'data-impression-id']}
				},
				text_username:{ tag:'a',
					classes:{list:['ProfileNameTruncated-link', 'u-textInheritColor', 'js-nav', 'js-action-profile-name']},
					properties:{list:['data-aria-label-part', 'href']},
					split:{ attr:'href', params:['/'] }
				},
				btn_unfollow_do:{ tag:'button',
					classes:{list:['user-actions-follow-button', 'js-follow-btn', 'follow-button', 'btn', 'small', 'small-follow-btn']},
					properties:{list:['type="button"']},
					innerOuterHTMLs:{list:['팔로잉', '언팔로우']}
				}
			};

			// Url Section
			this.urls = {
				mypage:{ basic:'https://twitter.com/', extra:{list:[{html:this.htmls.identification}]}, changing:false },
				follower:{ basic:'https://twitter.com/followers', extra:{list:[]}, changing:false },
				following:{ basic:'https://twitter.com/following', extra:{list:[]}, changing:false }
			};

			// Interval Section
			this.intervals = {
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
				// work : numberService.getRandomOfNumber(this.getSetting('interval_work'), 50)
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.mypage], condition:'AND'},
						htmls : {list:[this.htmls.text_follower, this.htmls.text_following, this.htmls.tab_follower, this.htmls.tab_following], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 수 저장', save:{ pandoras:[{html:this.htmls.text_follower, type:'NUMBER'}, {status :'follower_total'}] } } ], delay:50 },
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 수 저장', save:{ pandoras:[{html:this.htmls.text_following, type:'NUMBER'}, {status :'following_total'}] } } ], delay:50 }
						],
						delay:6
					},
					{
						urls : {list:[this.urls.follower], condition:'AND'},
						htmls : {list:[this.htmls.tab_follower_active, this.htmls.tab_following], condition:'OR'},
						list_step:[
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로워 검색', scroll:{ count:0.3, comparison:{ type: '>=', pandoras : [{html:this.htmls.box_user, type:'COUNT'}, {status:'follower_total', type:'NUMBER'} ], message:'팔로워 검색 중', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting:'perentage_error' } } } } ] },
							// {list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로워 검색', scroll:{ count:0.3, comparison:{ type: '>=', pandoras : [{html:this.htmls.box_user, type:'COUNT'}, {status:'follower_total', type:'NUMBER'} ], message:'팔로워 검색 중', count_confirm:this.getSetting('count_confirm'), perentage_error:this.getSetting('perentage_error') } } } ] },
							// {list_action:[ { action:'SCROLL', func:'unfollow', description:'위로 이동', scroll:{ direction:'UP', count:1 } } ], delay:5 },
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 저장', save:{ pandoras:[{html:this.htmls.text_username, type:'TEXT', isArray:true}, {status:'follower_list'}] } } ], delay:3 }
						]
					},
					{
						urls : {list:[this.urls.following], condition:'AND'},
						htmls : {list:[this.htmls.tab_follower, this.htmls.tab_following_active], condition:'OR'},
						list_step:[
							// 팔로잉 검색 시에 comparison이 없다.
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로잉 검색', scroll:{ count:0.3, comparison:{ type: '>=', pandoras : [{html:this.htmls.box_user, type:'COUNT'}, {status:'following_total', type:'NUMBER'}], message:'팔로잉 검색 중', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting:'perentage_error' } } } } ] },
							// {list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로잉 검색', scroll:{ count:0.3, comparison:{ type: '>=', pandoras : [{html:this.htmls.box_user, type:'COUNT'}, {status:'following_total', type:'NUMBER'}], message:'팔로잉 검색 중', count_confirm:this.getSetting('count_confirm'), perentage_error:this.getSetting('perentage_error') } } } ] },
							// {list_action:[ { action:'SCROLL', func:'unfollow', description:'위로 이동', scroll:{ direction:'UP', count:1 } } ], delay:5 },
							{list_action:[ { action:'LOOP', func:'unfollow', description:'언팔로우 반복',
								loop:{
									list_step:[
										{list_action:[ { action:'SAVE', func:'unfollow', description:'요청 수 저장', save:{ pandoras:[{html:this.htmls.box_user, type:'COUNT'}, {status :'following_total'}] } } ], delay:5 },
										{list_action:[ { action:'TARGET', func:'unfollow', description:'타겟 설정', target:{ html:this.htmls.box_user, index:{status:'unfollow_count', type:'NUMBER'}, set:true, scroll:{ value:true } } } ], delay:5},
										{list_action:[ { action:'CLICK', func:'unfollow', description:'언팔로우', click:{ target:true, html:this.htmls.btn_unfollow_do, comparison:{ type:'!in', pandoras:[{ target:true, html:this.htmls.text_username, type:'TEXT' }, {status:'follower_list'}], reject:{timeoutPromise:'RESOLVE'}, messages:['맞팔이 되어있지 않은 유저 (언팔로우 예정)', '맞팔이 되어있는 유저 (언팔로우 제외)'] } }, log_push:true, statuses:[{increase:'unfollow_count'}, {increase:'count'}] } ], delay: 10 },
										{list_action:[ { action:'TARGET', func:'unfollow', description:'타겟 해제', target:{ set:false } } ], delay:5}
									],
									comparison:{type:'>=', pandoras:[{status:'unfollow_count', type:'NUMBER'}, {status:'following_total', type:'NUMBER'}], message:'언팔로우 중' },
									delay:this.intervals.work
								}
							} ], stop:true }
						]
					}
				],
				stop:[]
			};

		});

/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('vingrammerFollowService', function($rootScope, $q, arrayService, numberService, urlService, grammerGetService, grammerSetService){
			this.grammer_key = 'vingrammer';
			this.version_key = 'follow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['sidebar-profile-thumbnail']},
					properties:{list:['ui-sref="user.cover(currentUser)"', 'ui-sref-opts']},
					split:{ attr:'href', params:['/'] }
				},
				input_search:{ tag:'input',
					classes:{list:['search-input']},
					properties:{list:['type="text"', 'ng-model']},
					innerOuterHTMLs:{list:['검색어를 입력해 주세요'], type:'OUTERHTML'}
				},
				btn_keyword:{ tag:'a',
					classes:{list:['search-explore-keyword-link']},
					properties:{list:['ui-sref']},
					href:'/popular/',
					split:{ attr:'href', params:[] }
				},
				popular_posts:{ tag:'a',
					classes:{list:['ncard-contents-group']},
					properties:{list:['ng-switch-when']}
				},
				post_title:{ tag:'a',
					classes:{list:['ncard-text']},
					properties:{list:['ng-href']},
					innerOuterHTMLs:{list:['/posts/'], type:'OUTERHTML'},
					split:{ attr:'href', params:[] }
				},
				div_spam:{ tag:'p',
					parent_html:{ tag:'div', properties:{list:['vi-autolink="block.content"']} },
					innerOuterHTMLs:{list:{ setting_key:'list_spam' }}
				},
				div_spammer:{ tag:'div',
					classes:{list:['collection-title']},
					innerOuterHTMLs:{list:{ setting_key:'list_spammer' }}
				},
				btn_follow_do:{ tag:'a',
					classes:{list:['collection-follow']},
					not_classes:{list:['collection-follow--unfollow']},
					properties:{list:['ng-switch-when', 'ng-click="followCollection(collection, $refreshSlick)"']},
					innerOuterHTMLs:{list:['Follow']}
				},
				btn_follow_did:{ tag:'a',
					classes:{list:['collection-follow', 'collection-follow--unfollow']},
					properties:{list:['ng-switch-when', 'ng-click="unfollowCollection(collection, $refreshSlick)"']},
					innerOuterHTMLs:{list:['UnFollow']}
				},
				check_like_did:{ tag:'i',
					parent_html:{ tag:'a', classes:{list:['lcard-button-link', 'onboarding-step-like']}, properties:{list:['ng-click="toggleCardLike()"']}, innerOuterHTMLs:{list:['카드가 좋다면 좋아요를 눌러주세요.']}},
					classes:{list:['card-like-icon', 'active']},
					properties:{list:['ng-class="{ active:post.is_liked }"']}
				},
				btn_like_do:{ tag:'a',
					classes:{list:['lcard-button-link', 'onboarding-step-like']},
					properties:{list:['ng-click="toggleCardLike()"']},
					innerOuterHTMLs:{list:['카드가 좋다면 좋아요를 눌러주세요.']}
				},
				input_review:{ tag:'textarea',
					properties:{list:['ng-focus', 'ng-keypress', 'vi-autosize', 'ng-attr-placeholder']}
				},
				btn_review_do:{ tag:'button',
					classes:{list:['btn', 'btn-primary']},
					properties:{list:['ng-click="addComment()"']}
				}
			};

			// Url Section
			this.urls = {
				search1:{ basic:'https://www.vingle.net/search', extra:{list:[]}, changing:false },
				search2:{ basic:'https://www.vingle.net/popular', extra:{list:[]}, changing:false },
				review:{ basic:'https://www.vingle.net/api/cards/', extra:{list:[urlService.getSplit('https://www.vingle.net/posts/','-'), '/comments' ]} },
				list:{ basic:'', extra:{list:[ { html:this.htmls.btn_keyword, random:true } ] } },
				detail:{ basic:'https://www.vingle.net', extra:{list:[ { html:this.htmls.post_title, random:true } ] } },
				work:{ basic:'https://www.vingle.net/posts/', changing:false }
			};

			// Interval Section
			this.intervals = {
				search : { setting_key:'interval_search', method:'getRandomOfNumber', percentage:50 },
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
			};

			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
				like:{ click:{ click_key:'like' }, percentage:100, boolean:{ click_key:'like', setting_value:100 } },
				// like:{ click:this.getClick('like'), percentage:100, boolean:grammerGetService.getBooleanFromBooleanAndPercentage(this.getClick('like'),100) },
				follow:{ click:{ click_key:'follow' }, percentage:{ setting_key:'percentage_follow' }, boolean:{ click_key:'follow', setting_key:'percentage_follow' } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' } }
			};
			
			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.search1], condition:'OR'},
						htmls : {list:[this.htmls.input_search, this.htmls.btn_keyword], condition:'AND'},
						list_step:[
							{list_action:[ { action:'GO', description:'키워드 선택', go:{ url:this.urls.list, delay_position:100 } } ], delay:100}
						],
						delay:5
					},
					{
						urls : {list:[this.urls.search2], condition:'OR'},
						htmls : {list:[], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SCROLL', description:'게시물 검색', scroll:{ interval:5 } } ], delay:90},
							{list_action:[ { action:'GO', description:'게시물 선택', go:{ url:this.urls.detail, delay_position:100 } } ], delay:10}
						],
						delay:this.intervals.search
					},
					{
						urls : {list:[this.urls.work], condition:'OR'},
						htmls : {list:[this.htmls.btn_follow_do, this.htmls.btn_follow_did, this.htmls.btn_friend_did, this.htmls.check_like_did, this.htmls.btn_like_do], condition:'OR'},
						list_step:[
							{list_action:[
								{ action:'CHECK', func:'follow', description:'팔로우 검사', check:{ htmls:[ {html:this.htmls.btn_follow_did, exist:false, message:'이미 팔로잉 중'}, {html:this.htmls.btn_follow_do, exist:true, message:'팔로우 버튼 없음'} ] } },
								{ action:'CHECK', func:'like', description:'좋아요 검사', check:{ htmls:[ {html:this.htmls.check_like_did, exist:false, message:'이미 좋아요 중'}, {html:this.htmls.btn_like_do, exist:true, message:'좋아요 버튼 없음'} ]}},
								{ action:'CHECK', description:'스팸/스팸유저 검사', check:{  htmls:[ {html:this.htmls.div_spam, exist:false, message:'스팸 단어를 포함하고 있습니다'}, {html:this.htmls.div_spammer, exist:false, message:'스팸유저의 게시물입니다'} ] } }
							], delay:5},
							{list_action:[
								{ action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ html:this.htmls.btn_like_do}, statuses:[{increase:'like_count'}] }
							], delay:10},
							{list_action:[
								{ action:'CLICK', func:'follow', func_option:this.funcs_option.follow, description:'팔로우', click:{ html:this.htmls.btn_follow_do}, statuses:[{increase:'follow_count'}] }
							], delay:10},
							{list_action:[ { action:'INPUT', func:'review', func_option:this.funcs_option.review, description:'댓글 입력',	input:{ html:this.htmls.input_review, texts:[this.texts.review]},  message:'Tip : 10개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' } ], delay:5},
							{list_action:[
								{ action:'POST', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글서버 등록', 
									post:{ 
										url:this.urls.review, 
										data:{ comment:{ content:this.texts.review }, 
										post_id:Number(urlService.getSplit('https://www.vingle.net/posts/','-'))}
									}, 
									message:'Tip : 서버에서 댓글을 바로 달아 새로고침해야 확인 가능',
									statuses:[{increase:'review_count'}]
								}
							], delay:5}
						],
						delay:this.intervals.work,
						statuses:[{increase:'count'}]
					}
				],
				stop:[]
			};

		});

/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('vingrammerUnfollowService', function($rootScope, $q, arrayService, numberService, urlService, grammerGetService, grammerSetService){
			this.grammer_key = 'vingrammer';
			this.version_key = 'unfollow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['sidebar-profile-thumbnail']},
					properties:{list:['ui-sref="user.cover(currentUser)"', 'ui-sref-opts']},
					split:{ attr:'href', params:['/'] }
				},
				btn_collections_following_do:{ tag:'a',
					classes:{list:['user-sub-menu-item', 'active']},
					properties:{list:['ui-sref-active="active"', 'ui-sref="user.collections.following"', 'href']},
					innerOuterHTMLs:{list:['팔로우하고 있는 컬렉션']},
					split:{ html:'innerHTML', params:[null,'개의 팔로우하고 있는 컬렉션'], type:'NUMBER' }
				},
				btn_unfollow_do:{ tag:'a',
					classes:{list:['btn', 'btn-collection-follow', 'user-collection-btn', 'btn-collection-follow--default']},
					properties:{list:['ng-click="toggleFollowCollection()"']},
					innerOuterHTMLs:{list:['언팔로우']}
				}
			};

			// Url Section
			this.urls = {
				work:{ basic:'https://www.vingle.net/', extra:{list:[{html:this.htmls.identification}, '/following_collections']}, changing:false }
			};

			// Interval Section
			this.intervals = {
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
				// work : numberService.getRandomOfNumber(this.getSetting('interval_work'), 50)
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.work], condition:'AND'},
						htmls : {list:[this.htmls.btn_collections_following_do, this.htmls.btn_unfollow_do], condition:'OR'},
						list_step:[
							{list_action:[ { action:'SAVE', func:'unfollow', description:'컬렉션 수 저장', save:{ pandoras:[{html:this.htmls.btn_collections_following_do, type:'NUMBER'}, {status :'collections_total'}] } } ], delay:3 },
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'컬렉션 검색', scroll:{ interval:0.3, comparison:{ type: '>=', pandoras : [ { html:this.htmls.btn_unfollow_do }, {status:'collections_total', type:'NUMBER'} ], message:'컬렉션 검색 중' } } } ] },
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'위로 이동', scroll:{ direction:'UP', count:1 } } ], delay:5 },
							{list_action:[ { action:'LOOP', func:'unfollow', description:'언팔로우 반복',
								loop:{
									list_step:[
										{list_action:[ { action:'CLICK', func:'unfollow', description:'언팔로우', click:{ html:this.htmls.btn_unfollow_do }, log_push:true, statuses:[{increase:'unfollow_count'}, {increase:'count'}], delay: 100 } ] }
									],
									comparison:{type:'>=', pandoras:[{status:'unfollow_count', type:'NUMBER'}, {status:'collections_total', type:'NUMBER'}], message:'언팔로우 중' },
									delay:this.intervals.work
								}
							} ], stop:true }
						]
					}
				],
				stop:[]
			};

		});

/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('youtugrammerFollowService', function($rootScope, $q, arrayService, numberService, urlService, grammerGetService, grammerSetService){
			this.grammer_key = 'youtugrammer';
			this.version_key = 'follow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['yt-masthead-picker-header', 'yt-masthead-picker-active-account']},
					properties:{list:['href']},
					split:{html:'innerHTML'}
				},
				div_spam:{ tag:'span',
					classes:{list:['watch-title']},
					properties:{list:['dir']},
					innerOuterHTMLs:{list:{ setting_key:'list_spam' }}
				},
				div_spammer:{ tag:'a',
					classes:{list:['g-hovercard', 'yt-uix-sessionlink', 'spf-link']},
					properties:{list:['data-ytid', 'data-sessionlink']},
					href:'/channel/',
					innerOuterHTMLs:{list:{ setting_key:'list_spammer' }}
				},
				btn_videotitle:{ tag:'a',
					classes:{list:['yt-uix-sessionlink', 'yt-uix-tile-link', 'yt-ui-ellipsis', 'yt-ui-ellipsis-2', 'spf-link']},
					properties:{list:['data-sessionlink', 'title', 'aria-describedby']},
					href:'/watch?',
					split:{ attr:'href', params:[] }
				},
				btn_like_do:{ tag:'button',
					classes:{list:['yt-uix-button', 'yt-uix-button-size-default', 'yt-uix-button-opacity', 'yt-uix-button-has-icon', 'no-icon-markup', 'like-button-renderer-like-button', 'like-button-renderer-like-button-unclicked']},
					not_classes:{list:['like-button-renderer-like-button-clicked', 'hid']},
					properties:{list:['type="button"', 'data-post-data']}
				},
				btn_like_did:{ tag:'button',
					classes:{list:['yt-uix-button', 'yt-uix-button-size-default', 'yt-uix-button-opacity', 'yt-uix-button-has-icon', 'no-icon-markup', 'like-button-renderer-like-button', 'like-button-renderer-like-button-clicked']},
					not_classes:{list:['like-button-renderer-like-button-unclicked', 'hid']},
					properties:{list:['type="button"', 'data-post-data']}
				},
				btn_follow_do:{ tag:'button',
					classes:{list:['yt-uix-button', 'yt-uix-button-size-default', 'yt-uix-button-subscribe-branded', 'yt-uix-button-has-icon', 'no-icon-markup', 'yt-uix-subscription-button', 'yt-can-buffer']},
					properties:{list:['type="button"', 'onclick']},
					not_properties:{list:['data-is-subscribed="true"']}
				},
				btn_follow_did:{ tag:'button',
					classes:{list:['yt-uix-button', 'yt-uix-button-size-default', 'yt-uix-button-subscribe-branded', 'yt-uix-button-has-icon', 'no-icon-markup', 'yt-uix-subscription-button', 'yt-can-buffer']},
					properties:{list:['type="button"', 'onclick', 'data-is-subscribed="true"']}
				},
				btn_stop_video:{ tag:'video',
					classes:{list:['video-stream', 'html5-main-video']}
				},
				btn_review_open:{ tag:'div',
					classes:{list:['comment-simplebox-renderer-collapsed', 'comment-simplebox-trigger']},
					properties:{list:['data-simplebox-id="comment-simplebox-create-comment"']},
					innerOuterHTMLs:{list:['공개 댓글 추가']}
				},
				input_review:{ tag:'div',
					parent_html:{ tag:'div', classes:{list:['comment-simplebox']}, properties:{list:['id="comment-simplebox"']}},
					classes:{list:['comment-simplebox-text']},
					properties:{list:['role="textbox"', 'aria-multiline="true"']}
				},
				btn_review_do:{ tag:'button',
					classes:{list:['yt-uix-button', 'yt-uix-button-size-default', 'yt-uix-button-primary', 'yt-uix-button-empty', 'comment-simplebox-submit', 'yt-uix-sessionlink']},
					properties:{list:['type="button"', 'onclick', 'aria-label', 'data-target', 'data-params', 'data-sessionlink', 'data-sessionlink-target']},
					innerOuterHTMLs:{list:['댓글']}
				}
			};

			// Url Section
			this.urls = {
				search:{ basic:'https://www.youtube.com/results?search_query=', extra:{list:[[{ setting_key:'list_search_tag', method:'getRandom' }],['&sp=EgIIAg%253D%253D', '&sp=EgIIAw%253D%253D', '&sp=EgIIBEgo6gMA', '&sp=EgIIBQ%253D%253D']]}, changing:false },
				detail:{ basic:'https://www.youtube.com', extra:{list:[ { html:this.htmls.btn_videotitle, random:true } ] } },
				work:{ basic:'https://www.youtube.com/watch?v=', changing:false },
				review:{ basic:'www.youtube.com/comment_service_ajax?action_create_comment=1', changing:false }
			};

			// Interval Section
			this.intervals = {
				search : { setting_key:'interval_search', method:'getRandomOfNumber', percentage:50 },
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
			};
			
			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
				like:{ click:{ click_key:'like' }, percentage:100, boolean:{ click_key:'like', setting_value:100 } },
				// like:{ click:this.getClick('like'), percentage:100, boolean:grammerGetService.getBooleanFromBooleanAndPercentage(this.getClick('like'),100) },
				follow:{ click:{ click_key:'follow' }, percentage:{ setting_key:'percentage_follow' }, boolean:{ click_key:'follow', setting_key:'percentage_follow' } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' } }
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.search], condition:'OR'},
						htmls : {list:[this.htmls.btn_videotitle], condition:'OR'},
						list_step:[
							{list_action:[ { action:'SCROLL', description:'영상 검색', scroll:{ count:1 } } ], delay:80},
							{list_action:[ { action:'SCROLL', description:'위로 이동', scroll:{ direction:'UP', count:1} } ], delay:10},
							{list_action:[ { action:'GO', description:'영상 선택', go:{ url:this.urls.detail, delay_position:100 } } ], delay:10}
						],
						delay:this.intervals.search
					},
					{
						urls : {list:[this.urls.work], condition:'OR'},
						htmls : {list:[this.htmls.btn_like_do, this.htmls.btn_like_did, this.htmls.btn_follow_do, this.htmls.btn_follow_did], condition:'OR'},
						list_step:[
							{list_action:[ { action:'SCROLL', description:'아래로 이동', scroll:{ count:1} } ], delay:3},
							{list_action:[ { action:'SCROLL', description:'위로 이동', scroll:{ direction:'UP', count:1} } ], delay:3},
							{list_action:[
								{ action:'CHECK', func:'like',	description:'좋아요 검사', 	check:{ htmls:[ {html:this.htmls.btn_like_did, exist:false, message:'이미 좋아요 중'}, {html:this.htmls.btn_like_do, exist:true, message:'좋아요 버튼 없음'} ] } },
								{ action:'CHECK', func:'follow',	description:'구독 검사', 	check:{ htmls:[ {html:this.htmls.btn_follow_did, exist:false, message:'이미 구독 중'}, {html:this.htmls.btn_follow_do, exist:true, message:'구독 버튼 없음'} ] } }
							], delay:5},
							{list_action:[ { action:'CLICK', description:'영상 정지', click:{ html:this.htmls.btn_stop_video } }, ], delay:5},
							{list_action:[
								{ action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ html:this.htmls.btn_like_do }, log_push:true, statuses:[{increase:'like_count'}] }
							], delay:5},
							{list_action:[
								{ action:'CLICK', func:'follow', func_option:this.funcs_option.follow, description:'구독', click:{ html:this.htmls.btn_follow_do }, log_push:true, statuses:[{increase:'follow_count'}] }
							], delay:5},
							{list_action:[ { action:'CLICK', func:'review', func_option:this.funcs_option.review, description:'댓글 입력창 열기', click:{ html:this.htmls.btn_review_open}, message:'Tip : 10개 이상 댓글들을 설정하고 매일 조금씩 바꿔주면 안전' } ], delay:5},
							{list_action:[ { action:'CHANGE', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 입력', change:{ html:this.htmls.input_review, innerHTMLs:{ all:{ setting_key:'list_reviews', method:'getRandom' } } } } ], delay:5},
							{list_action:[ { action:'CHANGE', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 버튼 활성화', change:{ html:this.htmls.btn_review_do, properties:{ remove:{list:[{name:'disabled'}] } } } } ], delay:5},
							{list_action:[ { action:'CLICK', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 등록', click:{ html:this.htmls.btn_review_do}, log_push:true, statuses:[{increase:'review_count'}] } ], delay:5}
						],
						delay:this.intervals.work,
						statuses:[{increase:'count'}]
					}
				],
				stop:[]
			};

		});

/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('youtugrammerMyfollowerService', function($rootScope, $q, arrayService, numberService, urlService, grammerGetService, grammerSetService){
			this.grammer_key = 'youtugrammer';
			this.version_key = 'myfollower';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};
			
			this.interval = numberService.getRandomOfNumber(this.getSetting('setting_name_en'), 50);
			this.htmls = {
				html_name:{ tag:null,
					classes:{list:[]},
					properties:{list:[]},
					href:null,
					innerHTMLs:{list:[]}
				}
			};
			this.urls = {
				url_search:{ basic:null, extra:{list:[]}, changing:false },
			};
			this.pages = {
				start:[
					{
						url : null, delay:null,
						htmls : {list:[], condition:null},
						list_step:[
							{list_action:[ { action:null, description:null } ], delay:null}
						]
					}
				],
				stop:[]
			};
		});

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('youtugrammerUnfollowService', function($rootScope, $q, arrayService, numberService, urlService, grammerGetService, grammerSetService){
			this.grammer_key = 'youtugrammer';
			this.version_key = 'unfollow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Url Section
			this.urls = {
				work:{ basic:'https://www.youtube.com/subscription_manager', extra:{list:[]}, changing:false }
			};
			
			// Html Section
			this.htmls = {
				identification:{ tag:'a',
					classes:{list:['yt-masthead-picker-header', 'yt-masthead-picker-active-account']},
					properties:{list:['href']},
					split:{html:'innerHTML'}
				},
				text_subscription:{ tag:'h2',
					classes:{list:['subscription-manager-title']},
					innerOuterHTMLs:{list:['구독정보']},
					split:{ html:'innerHTML', params:['<b>','</b>개'], type:'NUMBER' }
				},
				btn_unfollow_do:{ tag:'button',
					classes:{list:['yt-uix-button', 'yt-uix-button-size-default', 'yt-uix-button-subscribed-branded', 'yt-uix-button-has-icon', 'no-icon-markup', 'yt-uix-subscription-button', 'yt-can-buffer', 'hover-enabled']},
					properties:{list:['type="button"', 'onclick', 'aria-role="button"', 'aria-busy', 'aria-live', 'data-clicktracking', 'data-is-subscribed="True"', 'data-style-type']}
				},
				btn_unfollow_did:{ tag:'button',
					classes:{list:['yt-uix-button', 'yt-uix-button-size-default', 'yt-uix-button-has-icon', 'no-icon-markup', 'yt-uix-subscription-button', 'yt-can-buffer', 'yt-is-buffered', 'yt-uix-button-subscribe-branded']},
					properties:{list:['type="button"', 'onclick', 'aria-role="button"', 'aria-busy', 'aria-live', 'data-clicktracking', 'data-style-type']},
					not_properties:{list:['data-is-subscribed="True"']}
				}
			};

			// Interval Section
			this.intervals = {
				work : { setting_key:'interval_work', method:'getRandomOfNumber', percentage:50 }
				// work : numberService.getRandomOfNumber(this.getSetting('interval_work'), 50)
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.work], condition:'AND'},
						htmls : {list:[this.htmls.btn_unfollow_do, this.htmls.btn_unfollow_did], condition:'OR'},
						list_step:[
							{list_action:[ { action:'SAVE', func:'unfollow', description:'채널 수 저장', save:{ pandoras:[{html:this.htmls.text_subscription, type:'NUMBER'}, {status:'channels_total'}] } } ], delay:3 },
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'채널 검색', scroll:{ interval:0.3, comparison:{ type: '>=', pandoras : [{html:this.htmls.text_subscription}, {status:'channels_total', type:'NUMBER'} ], message:'채널 검색 중' } } } ] },
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'위로 이동', scroll:{ direction:'UP', count:1 } } ], delay:5 },
							{list_action:[ { action:'LOOP', func:'unfollow', description:'언팔로우 반복',
								loop:{
									list_step:[
										{list_action:[ { action:'CLICK', func:'unfollow', description:'언팔로우', click:{ html:this.htmls.btn_unfollow_do }, log_push:true, statuses:[{increase:'unfollow_count'}, {increase:'count'}], delay: 100 } ] }
									],
									comparison:{type:'>=', pandoras:[{status:'unfollow_count', type:'NUMBER'}, {status:'channels_total', type:'NUMBER'}], message:'언팔로우 중' },
									delay:this.intervals.work
								}
							} ], stop:true }
						]
					}
				],
				stop:[]
			};

		});

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('postgrammerFollowService', function($rootScope, $q, $timeout, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'postgrammer';
			this.version_key = 'follow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				// identification에서는 일반적인 getElements가 아니다. checkIdentification에서 getTextOfElementWithSplit 함수로 진행된다.
				identification:{ tag:'script',
					properties:{list:['type="text/javascript"']},
					innerOuterHTMLs:{list:['nhn=window.nhn']},
					split:{ html:'innerHTML', params:[',id:"','",memberNo'] }
				},
				post_tab:{ tag:'a',
					classes:{list:['tab1', 'on']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['포스트']}
				},
				series_tab:{ tag:'a',
					classes:{list:['tab2']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['시리즈']}
				},
				editor_tab:{ tag:'a',
					classes:{list:['tab3']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['에디터']} 
				},
				tag_tab:{ tag:'a',
					classes:{list:['tab4']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['태그']}
				},
				popular_post_bulletin:{	tag:'li',
					classes:{list:['_cds', 'check_visible']},
					properties:{list:['paramname', 'cursor', 'volumeno']},
					innerOuterHTMLs:{list:['팔로워', '스타에디터']}
				},
				post_bulletin:{ tag:'a',
					classes:{list:['link_end']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['<h3 class="tit_feed ell">']}
				},
				btn_more:{ tag:'button',
					classes:{list:['btn_lst_more', '_more', '_returnFalse']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['더보기']}
				},
				btn_like:{ tag:'a',
					parent_html:{ tag:'div', classes:{list:['u_likeit_list_module']} },
					classes:{list:['u_likeit_list_btn', 'u_type_bright', 'u_none_txt']},
					properties:{list:['onclick', 'href']}
				},
				btn_like_did:{ tag:'a',
					parent_html:{ tag:'div', classes:{list:['u_likeit_list_module']} },
					classes:{list:['u_likeit_list_btn', 'u_type_bright', 'u_none_txt', 'on']},
					properties:{list:['onclick', 'href']}
				},
				btn_follow:{ tag:'button',
					parent_html:{ tag:'div', classes:{list:['flt_r']} },
					classes:{list:['btn_flw', '__followAnchor']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['팔로우']}
				},
				btn_follow_did:{ tag:'button',
					parent_html:{ tag:'div', classes:{list:['flt_r']} },
					classes:{list:['btn_flw', '__followAnchor']},
					properties:{list:['onclick', 'style="display: none;"']},
					innerOuterHTMLs:{list:['팔로우']}
				},
				btn_review_submit:{ tag:'button',
					classes:{list:['u_cbox_btn_upload']},
					properties:{list:['data-action', 'data-log']},
					innerOuterHTMLs:{list:['등록']}
				},
				div_spammer:{ tag:'span',
					classes:{list:['nick']},
					innerOuterHTMLs:{list:{ setting_key:'list_spammer' }}
				},
				div_spam:{ tag:'p',
					parent_html:{ tag:'div', classes:{list:['se_textView']} },
					classes:{list:['se_textarea']}
				},
				input_review:{ tag:'textarea',
					classes:{list:['u_cbox_text']}
				},
				user_name:{ tag:'span',
					classes:{list:['ell']}
				},
				btn_recent:{ tag:'label',
					classes:{list:['option', '_createDate']},
					properties:{list:['data-type', 'onclick']},
					innerOuterHTMLs:{list:['최신순']}
				},
				btn_sticker_review:{ tag:'button',
					classes:{list:['u_cbox_btn_upload_sticker']},
					properties:{list:['data-action', 'data-log']},
					innerOuterHTMLs:{list:['스티커']}
				},
				btn_sticker_category:{ tag:'button',
					parent_html:{ tag:'li', classes:{list:['u_cbox_sticker_tab_item']}, properties:{list:['data-id="line_characters_in_love"']} },
					classes:{list:['u_cbox_sticker_tab_btn']},
					properties:{list:['type="button"', 'data-action', 'data-param']},
					innerOuterHTMLs:{list:['background-image:url']}
				},
				btn_sticker:{ tag:'button',
					parent_html:{ 
						parent_html:{ tag:'div', classes:{list:['u_cbox_sticker_area']}, not_properties:{list:['style="display: none;"']} },
						tag:'ul', classes:{list:['u_cbox_sticker_list']}, properties:{list:['data-id']} 
					},
					classes:{list:['u_cbox_sticker_btn']},
					properties:{list:['type="button"', 'data-action', 'data-param', 'data-animation']},
					index_range:15
				}
			};

			// Url Section
			this.urls = {
				search:{ basic:'http://post.naver.com/search/post.nhn?keyword=', extra:{list:[ [{ setting_key:'list_search_tag', method:'getRandom' }], '&sortType=createDate.dsc&range=&term=all&navigationType=current' ]}, changing:false },
				work:{ basic:'http://post.naver.com/viewer/postView.nhn', changing:false },
				detail:{ basic:'http://post.naver.com/viewer/postView.nhn?', extra:{list:[ { html:this.htmls.post_bulletin, random:true } ]} }
			};

			// Interval Section
			this.intervals = {
				search:{ setting_key:'interval_search', method:'getRandomOfNumber', percentage:10 },
				work:{ setting_key:'interval_work', method:'getRandomOfNumber', percentage:10 }
			};

			// Text Section
			this.texts = {
				review:{ setting_key:'list_reviews', method:'getRandom' }
			};

			// Func Section
			this.funcs_option = {
				like:{ click:{ click_key:'like' }, percentage:100, boolean:{ click_key:'like', setting_value:100 }, day_limit:{ limit_setting_key:'like_limit', status_key:'like_limit_count' } },
				follow:{ click:{ click_key:'follow' }, percentage:{ setting_key:'percentage_follow' }, boolean:{ click_key:'follow', setting_key:'percentage_follow' }, day_limit:{ limit_setting_key:'follow_limit', status_key:'follow_limit_count' } },
				review:{ click:{ click_key:'review' }, percentage:{ setting_key:'percentage_review' }, boolean:{ click_key:'review', setting_key:'percentage_review' }, day_limit:{ limit_setting_key:'review_limit', status_key:'review_limit_count' } }
			};

			// Page Section
			this.pages = {
				start:[
					{
						urls : {list:[this.urls.search], condition:'OR'},
						htmls : {list:[this.htmls.post_tab, this.htmls.series_tab, this.htmls.editor_tab, this.htmls.tag_tab, this.htmls.post_bulletin], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SAVE', save:{ pandoras:[{time:'startday_month'}, {status:'startday_month'}], conditions:[{status:'count'}, {basic:0}] } } ], delay:1},
							{list_action:[ { action:'SAVE', save:{ pandoras:[{time:'startday_date'}, {status:'startday_date'}], conditions:[{status:'count'}, {basic:0}] } } ], delay:1},
							{list_action:[ { action:'SCROLL', description:'게시물 검색', scroll:{ interval:3, click:{ html:this.htmls.btn_more, delete:[{component:'property', name:'href'}] }} } ], delay:66},
							{list_action:[ { action:'REMOVE', description:'인기 게시물 제거', remove:{ html:this.htmls.popular_post_bulletin, all:true, delay_position:50 } } ], delay:5},
							{list_action:[ { action:'TARGET_USERNAME', description:'유저이름 타겟팅', target_username:{ html:this.htmls.user_name, random:true, crawl_index:true, type:'innerHTML' } } ], delay:15},
							{list_action:[ { action:'STATUS', status:{ set:'target_user_name', value:'target_user_name' } } ], delay:2},
							{list_action:[ { action:'CLICK', description:'해당 게시물 선택', click:{ html:this.htmls.post_bulletin, index:{ status:'element_index' }, delay_position:100 } } ], delay:10}
						],
						delay:this.intervals.search
					},
					{
						urls : {list:[this.urls.work], condition:'OR'},
						htmls : {list:[this.htmls.btn_like, this.htmls.btn_like_did, this.htmls.btn_follow, this.htmls.btn_follow_did, this.htmls.btn_review_submit], condition:'OR'},
						list_step:[
							{list_action:[
								{ action:'CHECK', func:'follow', description:'팔로우 검사', check:{ htmls:[ {html:this.htmls.btn_follow_did, exist:false, message:'이미 팔로우 중'}, {html:this.htmls.btn_follow, exist:true, message:'팔로우 버튼 없음' } ] } },
								{ action:'CHECK', func:'like', description:'좋아요 검사', check:{ htmls:[ {html:this.htmls.btn_like_did, exist:false, message:'이미 좋아요 중'}, {html:this.htmls.btn_like, exist:true, message:'좋아요 버튼 없음' } ] } },
								{ action:'CHECK', description:'스팸/스팸유저 검사', check:{ htmls:[ {html:this.htmls.div_spam, exist:false, message:'스팸 단어를 포함하고 있습니다'}, {html:this.div_spammer, exist:false, message:'스팸유저의 게시물입니다'} ] } }
							], delay:5},
							{list_action:[ { action:'TRYCATCH', 
								try:{
									list_step:[
										{list_action:[
											{ action:'CONDITION', condition:{ conditions:[{setting:'sticker_review_boolean'}, {basic:true}] } }
										], delay:5, countdown:false},
										{list_action:[
											{ action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ html:this.htmls.btn_like }, log_push:true, statuses:[{increase:'like_count'}, {increase:'like_limit_count'}] }
										], delay:20, countdown:false},
										{list_action:[
											{ action:'CLICK', func:'follow', func_option:this.funcs_option.follow, description:'팔로우', click:{ html:this.htmls.btn_follow }, log_push:true, statuses:[{increase:'follow_count'}, {increase:'follow_limit_count'}] }
										], delay:20, countdown:false},
										{list_action:[
											{ action:'CLICK', func:'review', func_option:this.funcs_option.review, description:'스티커 댓글 클릭', click:{ html:this.htmls.btn_sticker_review } }
										], delay:20, countdown:false},
										{list_action:[
											{ action:'CLICK', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'스티커 종류 선택', click:{ html:this.htmls.btn_sticker_category, random:true }, log_push:true, statuses:[{increase:'review_count'}, {increase:'review_limit_count'}] }
										], delay:20, countdown:false},
										{list_action:[
											{ action:'CLICK', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'스티커 선택/ 댓글 등록', click:{ html:this.htmls.btn_sticker, random:true } }
										], delay:10, countdown:false}
									],
									delay:this.intervals.work
								},
								catch:{
									list_step:[
										{list_action:[
											{ action:'CLICK', func:'like', func_option:this.funcs_option.like, description:'좋아요', click:{ html:this.htmls.btn_like }, log_push:true, statuses:[{increase:'like_count'}, {increase:'like_limit_count'}] }
										], delay:25, countdown:false},
										{list_action:[
											{ action:'CLICK', func:'follow', func_option:this.funcs_option.follow, description:'팔로우', click:{ html:this.htmls.btn_follow }, log_push:true, statuses:[{increase:'follow_count'}, {increase:'follow_limit_count'}] }
										], delay:25, countdown:false},
										{list_action:[
											{ action:'INPUT', func:'review', func_option:this.funcs_option.review, description:'댓글 입력', input:{ html:this.htmls.input_review, texts:[this.texts.review] } }
										], delay:20, countdown:false},
										{list_action:[
											{ action:'CLICK', func:'review', func_option:this.funcs_option.review, func_option_fix:true, description:'댓글 등록', click:{ html:this.htmls.btn_review_submit }, log_push:true, statuses:[{increase:'review_count'}, {increase:'review_limit_count'}] }
										], delay:20, countdown:false}
									],
									delay:this.intervals.work
								}
							} ] }
						],
						statuses:[{increase:'count'}]
					}
				]
			};

		});

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('postgrammerUnfollowService', function($rootScope, $q, $timeout, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'postgrammer';
			this.version_key = 'unfollow';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				// identification에서는 일반적인 getElements가 아니다. checkIdentification에서 getTextOfElementWithSplit 함수로 진행된다.
				identification:{ tag:'script',
					properties:{list:['type="text/javascript"']},
					innerOuterHTMLs:{list:['nhn=window.nhn']},
					split:{ html:'innerHTML', params:['isLoggedIn:true,id:"','",memberNo'] }
				},
				btn_profile_edit:{ tag:'a',
					// classes:{list:['btn_set', 'profileEdit']},
					properties:{list:['href', 'onclick']},
					innerOuterHTMLs:{list:['설정']}
				},
				btn_profile_statistic:{ tag:'a',
					// classes:{list:['btn_t1']},
					properties:{list:['href', 'onclick']},
					innerOuterHTMLs:{list:['통계']}
				},
				text_follower:[
					{ tag:'span',
						parent_html:{ tag:'a',
							properties:{list:['href']},
							href:'/my/followerList.nhn'
						},
						classes:{list:['num']},
						split:{ html:'innerHTML' }
					},
					{ tag:'em',
						parent_html:{ tag:'a',
							properties:{list:['href']},
							href:'/my/followerList.nhn'
						},
						split:{ html:'innerHTML' }
					}
				],
				text_following:[
					{	tag:'span',
						parent_html:{ tag:'a',
							properties:{list:['href']},
							href:'/my/followingList.nhn'
						},
						classes:{list:['num']},
						split:{ html:'innerHTML' }
					},
					{ tag:'em',
						parent_html:{ tag:'a',
							properties:{list:['href']},
							href:'/my/followingList.nhn'
						},
						split:{ html:'innerHTML' }
					}
				],
				btn_invite_friend:{ tag:'span',
					classes:{list:['naver-splugin-c']},
					innerOuterHTMLs:{list:['친구 초대하기']}
				},
				btn_follower:{ tag:'a',
					// parent_html:{ tag:'div', classes:{list:['follow_state']} },
					properties:{list:['href']},
					href:'/my/followerList.nhn',
					innerOuterHTMLs:{list:['팔로워']},
					split:{ attr:'href', params:[null, null] }
				},
				btn_following:{ tag:'a',
					// parent_html:{ tag:'li', classes:{list:['inner']} },
					properties:{list:['href']},
					href:'/my/followingList.nhn',
					innerOuterHTMLs:{list:['팔로잉']},
					split:{ attr:'href', params:[null, null] }
				},
				box_follower_following_link:{ tag:'a',
					// parent_html:{ tag:'div', classes:{list:['info_top']} },
					classes:{list:['user_lnk']},
					properties:{list:['href', 'onclick']},
					href:'/my.nhn?navigationType=push',
					innerOuterHTMLs:{list:['<strong class="post_tit ell">']},
					split:{ attr:'href', params:[null, null] }
				},
				btn_editor:{ tag:'a',
					// parent_html:{ tag:'li' },
					properties:{list:['href']},
					classes:{list:['tab1', 'on']},
					innerOuterHTMLs:{list:['에디터']}
				},
				btn_series:{ tag:'a',
					// parent_html:{ tag:'li' },
					properties:{list:['href']},
					classes:{list:['tab3']},
					innerOuterHTMLs:{list:['시리즈']}
				},
				btn_tag:{ tag:'a',
					// parent_html:{ tag:'li' }, 
					properties:{list:['href']},
					classes:{list:['tab2']},
					innerOuterHTMLs:{list:['태그']}
				},
				head_following:{ tag:'h2',	
					innerOuterHTMLs:{list:['팔로잉']}
				},
				head_follower:{ tag:'h2',
					innerOuterHTMLs:{list:['팔로워']}
				},
				box_user_follower_following:{ tag:'li',
					classes:{list:['user_info_item']}
				},
				btn_more:{ tag:'button',
					classes:{list:['btn_lst_more', '_more', '_returnFalse']},
					properties:{list:['onclick']},
					innerOuterHTMLs:{list:['더보기']}
				},
				btn_my_following:[
					{ tag:'a',
						classes:{list:['btn', 'is_following']},
						properties:{list:['onclick', 'id']},
						innerOuterHTMLs:{list:['팔로잉']}
					},
					{ tag:'button',
						classes:{list:['btn_flw', 'on']},
						properties:{list:['onclick']},
						innerOuterHTMLs:{list:['팔로잉']}
					}
				],
				span_prohibited_user:{ tag:'span',
					classes:{list:['name']},
					innerOuterHTMLs:{list:{ setting_key:'prohibited_user' }}
				},
				user_name:[
					{ tag:'span',
						classes:{list:['name']}
					},
					{ tag:'a',
						parent_html:{ tag:'h2', classes:{list:['name']} },
						properties:{list:['href', 'onclick']}
					}	
				],
				btn_unfollow_do:[
					{ tag:'a',
						classes:{list:['btn', 'is_following']},
						properties:{list:['onclick']},
						innerOuterHTMLs:{list:['팔로잉']},
						split:{ attr:'id', params:[null, null] }
					},
					{ tag:'button',
						classes:{list:['btn_flw', 'on']},
						properties:{list:['onclick']},
						innerOuterHTMLs:{list:['팔로잉']},
						split:{ attr:'id', params:[null, null] }
					}
				],
				btn_follow_do:[
					{ tag:'a',
						classes:{list:['btn']},
						properties:{list:['onclick']},
						innerOuterHTMLs:{list:['팔로우']},
						split:{ attr:'id', params:[null, null] }
					},
					{ tag:'button',
						classes:{list:['btn_flw']},
						properties:{list:['onclick']},
						innerOuterHTMLs:{list:['팔로우']},
						split:{ attr:'id', params:[null, null] }
					}
				],
				btn_unfollow_do_for_id:[
					{ tag:'a',
						classes:{list:['btn', 'is_following']},
						properties:{list:['onclick']},
						innerOuterHTMLs:{list:['팔로잉']},
						split:{ attr:'id', params:['unfollowAuthor_', null] }
					},
					{ tag:'button', 
						classes:{list:['btn_flw', 'on']},
						properties:{list:['onclick']},
						innerOuterHTMLs:{list:['팔로잉']},
						split:{ attr:'id', params:['unfollowAuthor_', null] }
					}
				]
			};

			// Url Section
			this.urls = {
				mypage:{ basic:'http://m.post.naver.com/', extra:{list:[{html:this.htmls.identification}, '?isHome=1']}, changing:false },
				follower_following_url:{ basic:'http://m.post.naver.com/my/', changing:false },
				follower_search:{ basic:'http://m.post.naver.com', extra:{list:[{status:'follower_link', grammer_key:'postgrammer', version_key:'unfollow'}]}, changing:false },
				following_search:{ basic:'http://m.post.naver.com', extra:{list:[{status:'following_link', grammer_key:'postgrammer', version_key:'unfollow'}]}, changing:false },
				work_unfollow:{ basic:'http://post.naver.com', extra:{list:[{status:'following_list', status_index:'unfollow_index', grammer_key:'postgrammer', version_key:'unfollow'}]}, changing:false }
			};

			// Interval Section
			this.intervals = {

			};

			// Text Section
			this.texts = {

			};

			// Func Section
			this.funcs_option = {

			};

			// Page Section
			this.pages = {
				start:[
					// 첫 마이페이지 링크
					{
						urls : {list:[this.urls.mypage], condition:'AND'},
						htmls : {list:[this.htmls.btn_profile_edit, this.htmls.btn_profile_statistic], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 수 저장', save:{ pandoras:[{html:this.htmls.text_follower, type:'NUMBER'}, {status:'follower_total'}], delay_position:50 } } ], delay:2, countdown:false },
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 수 저장', save:{ pandoras:[{html:this.htmls.text_following, type:'NUMBER'}, {status:'following_total'}], delay_position:50 } } ], delay:2, countdown:false },
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 검색창 링크 저장', save:{ pandoras:[{html:this.htmls.btn_follower, type:'TEXT'}, {status:'follower_link'}], delay_position:50 } } ], delay:2, countdown:false },
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 검색창 링크 저장', save:{ pandoras:[{html:this.htmls.btn_following, type:'TEXT'}, {status:'following_link'}], delay_position:50 } } ], delay:2, countdown:false },
							{list_action:[ { action:'GO', func:'unfollow', description:'팔로워 검색창으로 이동', go:{ url:this.urls.follower_search, delay_position:100 } } ], delay:2, countdown:false }
						]
					},
					// 팔로워 작업
					{
						urls : {list:[this.urls.follower_following_url], condition:'AND'},
						htmls : {list:[this.htmls.btn_invite_friend, this.htmls.head_follower], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로워 검색', scroll:{ interval:1, click:{ html:this.htmls.btn_more }, comparison:{ type:'>=', pandoras:[ {html:this.htmls.box_user_follower_following, type:'COUNT'}, {status:'follower_total', type:'NUMBER'} ], message:'팔로워', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ]},
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로워 저장', save:{ pandoras:[{html:this.htmls.box_follower_following_link, type:'TEXT', isArray:true}, {status:'follower_list'}] } } ], delay:2, countdown:false },
							{list_action:[ { action:'GO', func:'unfollow', description:'팔로잉 검색창으로 이동', go:{ url:this.urls.following_search, delay_position:100 } } ], delay:2, countdown:false }
						]
					},
					// 팔로잉 작업 && 팔로잉 맞팔 추출 작업
					{
						urls : {list:[this.urls.follower_following_url], condition:'AND'},
						htmls : {list:[this.htmls.btn_editor, this.htmls.btn_tag, this.htmls.btn_series, this.htmls.head_following], condition:'AND'},
						list_step:[
							{list_action:[ { action:'SCROLL', func:'unfollow', description:'팔로잉 검색', scroll:{ interval:1, click:{ html:this.htmls.btn_more }, comparison:{ type:'>=', pandoras:[ {html:this.htmls.box_user_follower_following, type:'COUNT'}, {status:'following_total', type:'NUMBER'} ], message:'팔로잉', count_confirm:{ setting_key:'count_confirm' }, perentage_error:{ setting_key:'perentage_error' } } } } ]},
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 저장', save:{ pandoras:[{html:this.htmls.box_follower_following_link, type:'TEXT', isArray:true}, {status:'following_list'}] } } ], delay:2, countdown:false },
							{list_action:[ { action:'EXCLUDE', func:'unfollow', description:'맞팔 제외 팔로잉 리스트 추출', exclude:{ pandoras:[{status:'follower_list'}, {status:'following_list'}] } } ], delay:2, countdown:false},
							{list_action:[ { action:'STATUS', func:'unfollow', status:{ set:'unfollow_index', value:0 } } ], delay:2, countdown:false},
							{list_action:[ { action:'SAVE', func:'unfollow', description:'팔로잉 수 갱신', save:{ pandoras:[{status:'following_list', type:'LENGTH'}, {status:'following_total'}] } } ], delay:2, countdown:false},
							{list_action:[ { action:'GO', func:'unfollow', description:'언팔로우 작업페이지로 이동', go:{ url:this.urls.work_unfollow, delay_position:50 } } ], delay:4, countdown:false}
						]
					},
					// 언팔로우 작업 반복
					{
						urls : {list:[this.urls.work_unfollow], condition:'AND'},
						htmls : {list:[this.htmls.btn_my_following], condition:'AND'},
						list_step:[
							{list_action:[ { action:'LOOP', func:'unfollow', description:'언팔로우 반복',
								loop:{
									list_step:[
										{list_action:[ { action:'TRYCATCH', func:'unfollow',
											try : {
												list_step:[
													{list_action:[
														{ action:'CHECK', func:'unfollow', description:'언팔금지 목록 포함 여부 확인', check:{ htmls:[ { html:this.htmls.span_prohibited_user, exist:false, message:'언팔로우 제외 : 언팔 금지된 유저' } ] } }
													], delay: 1, countdown:false},
													{list_action:[ { action:'TARGET_USERNAME', func:'unfollow', description:'유저이름 타겟팅', target_username:{ html:this.htmls.user_name, type:'innerHTML' } } ], delay:1, countdown:false},
													{list_action:[ { action:'STATUS', status:{ set:'target_user_name', value:'target_user_name' } } ], delay:1, countdown:false},
													{list_action:[ { action:'SAVE', func:'unfollow', save:{ pandoras:[{html:this.htmls.btn_unfollow_do, type:'TEXT'}, {status:'elUnfollow'}] } } ], delay:1, countdown:false},
													{list_action:[ { action:'SAVE', func:'unfollow', save:{ pandoras:[{html:this.htmls.btn_follow_do, type:'TEXT'}, {status:'elFollow'}] } } ], delay:1, countdown:false},
													{list_action:[ { action:'SAVE', func:'unfollow', save:{ pandoras:[{html:this.htmls.btn_unfollow_do_for_id, type:'TEXT'}, {status:'memberNo'}] } } ], delay:1, countdown:false},
													{list_action:[ { action:'UNFOLLOW_ON_POST', func:'unfollow', description:'언팔로우', log_push:true, statuses:[{increase:'unfollow_count'}] } ], delay:5},
													{list_action:[ { action:'REMOVE', func:'unfollow', remove:{ html:this.htmls.btn_unfollow_do } } ]},
													{list_action:[ { action:'CHANGE', func:'unfollow', change:{ html:this.htmls.btn_follow_do, properties:{remove:{list:[{name:'style'}]}} } } ]}
												],
												countdown:false
											},
											catch : {
												list_step:[
													{list_action:[ { action:'MESSEAGE', func:'unfollow', message:{ text:'언팔로우 제외 : 언팔 금지된 유저', delay_position:0 } } ], delay: 4, countdown:false}
												],
												countdown:false
											},
											finally : {
												list_step:[
													{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'unfollow_index'} ] } } ], delay:1, countdown:false},
													{list_action:[ { action:'STATUS', status:{ statuses:[ {increase:'count'} ] } } ], delay:1, countdown:false},
													{list_action:[ { action:'TRYCATCH', func:'unfollow',
														try : {
															list_step:[
																// 끝났을 때 resolve, 끝나지 않았을 때 reject
																{list_action:[ { action:'COMPARE', description:'작업 진행 상황 확인', compare:{ type:'>=', pandoras:[{status:'unfollow_index', type:'NUMBER'}, {status:'following_total', type:'NUMBER'}] } } ], delay:2, countdown:false},
																{list_action:[ { action:'STOP', description:'작업 종료' } ], delay:2, countdown:false}
															],
															countdown:false
														},
														// 작업 끝나지 않았을 때
														catch : {
															list_step:[
																{list_action:[ { action:'GO', description:'다음 언팔로우 작업페이지로 이동', go:{ url:this.urls.work_unfollow, delay_position:20 } } ], delay:10, countdown:false}
															],
															countdown:false
														}
													} ]}
												],
												countdown:false
											}
										} ]}
									]
								}
							} ]}
						]
					}
				]
			};

		});

/***/ },
/* 66 */
/***/ function(module, exports) {

	'use strict';

	angular.module("grammer_execute")
		.service('postgrammerInviteService', function($rootScope, $q, $timeout, arrayService, numberService, grammerGetService, grammerSetService){
			this.grammer_key = 'postgrammer';
			this.version_key = 'invite';
			this.getSetting = function( setting_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].settings[setting_key].value; } catch(e){ return; } };
			this.getClick = function( func_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].funcs[func_key].click; } catch(e){ return; } };
			this.getStatus = function( status_key ){ try{ return $rootScope.grammer_storage.grammers[this.grammer_key].versions[this.version_key].statuses[status_key]; } catch(e){ return; } };
			this.setStatus = function( status_key, status_value ){
				var self = this;
				return $q(function(resolve, reject){
					grammerSetService.setStatus(self.grammer_key, self.version_key, status_key, status_value).then(function(status){
						resolve();
					}, function(){
						reject();
					});
				});
			};

			// Html Section
			this.htmls = {
				// identification에서는 일반적인 getElements가 아니다. checkIdentification에서 getTextOfElementWithSplit 함수로 진행된다.
				identification:{ tag:'script',
					properties:{list:['type="text/javascript"']},
					innerOuterHTMLs:{list:['nhn=window.nhn']},
					split:{ html:'innerHTML', params:['isLoggedIn:true,id:"','",memberNo'] }
				}
			};

			// Url Section
			this.urls = {

			};

			// Interval Section
			this.intervals = {

			};

			// Text Section
			this.texts = {

			};

			// Func Section
			this.funcs_option = {

			};

			// Page Section
			this.pages = {
				start:[
				]
			};

		});

/***/ }
/******/ ]);