(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("util"), require("net"), require("tls"), require("domain"), require("rxjs"), require("core-decorators"), require("crypto"), require("dns"), require("events"));
	else if(typeof define === 'function' && define.amd)
		define(["util", "net", "tls", "domain", "rxjs", "core-decorators", "crypto", "dns", "events"], factory);
	else if(typeof exports === 'object')
		exports["MikroNode"] = factory(require("util"), require("net"), require("tls"), require("domain"), require("rxjs"), require("core-decorators"), require("crypto"), require("dns"), require("events"));
	else
		root["MikroNode"] = factory(root["util"], root["net"], root["tls"], root["domain"], root["rxjs"], root["core-decorators"], root["crypto"], root["dns"], root["events"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_25__) {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _desc, _value, _class;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _simpleAssign3 = __webpack_require__(2);

	var _simpleAssign4 = _interopRequireDefault(_simpleAssign3);

	var _simpleAssign = __webpack_require__(2);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _util = __webpack_require__(3);

	var _util2 = _interopRequireDefault(_util);

	var _net = __webpack_require__(4);

	var _net2 = _interopRequireDefault(_net);

	var _tls2 = __webpack_require__(5);

	var _tls3 = _interopRequireDefault(_tls2);

	var _promise = __webpack_require__(6);

	var _promise2 = _interopRequireDefault(_promise);

	var _rxjs = __webpack_require__(17);

	var _coreDecorators = __webpack_require__(18);

	var _crypto = __webpack_require__(19);

	var _crypto2 = _interopRequireDefault(_crypto);

	var _dns = __webpack_require__(20);

	var _dns2 = _interopRequireDefault(_dns);

	var _Util = __webpack_require__(21);

	var _constants = __webpack_require__(22);

	var _parser = __webpack_require__(23);

	var _parser2 = _interopRequireDefault(_parser);

	var _Connection = __webpack_require__(24);

	var _Connection2 = _interopRequireDefault(_Connection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	    var desc = {};
	    Object['ke' + 'ys'](descriptor).forEach(function (key) {
	        desc[key] = descriptor[key];
	    });
	    desc.enumerable = !!desc.enumerable;
	    desc.configurable = !!desc.configurable;

	    if ('value' in desc || desc.initializer) {
	        desc.writable = true;
	    }

	    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	        return decorator(target, property, desc) || desc;
	    }, desc);

	    if (context && desc.initializer !== void 0) {
	        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	        desc.initializer = undefined;
	    }

	    if (desc.initializer === void 0) {
	        Object['define' + 'Property'](target, property, desc);
	        desc = null;
	    }

	    return desc;
	}

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Socket = _net2.default.Socket;

	var nullString = String.fromCharCode(0);

	var _host = new WeakMap();

	var _port = new WeakMap();

	var _debug = new WeakMap();

	var _timeout = new WeakMap();

	var _sock = new WeakMap();

	var _status = new WeakMap();

	var _tls = new WeakMap();

	var _socketOpts = new WeakMap();

	var _socketProto = new WeakMap();

	var MikroNode = function () {
	    /**
	     * Creates a MikroNode API object.
	     * @exports mikronode
	     * @function
	     * @static
	     * @param {string} host - The host name or ip address
	     * @param {number} [port=8728] - Sets the port if not the standard 8728 (8729 for
	     *           TLS).
	     * @param {number} [timeout=0] - Sets the socket inactivity timeout. A timeout
	     *           does not necessarily mean that an error has occurred, especially if you're
	     *           only listening for events.
	     * @param {(object|boolean)} [options.tls] - Set to true to use TLS for this connection.
	     *           Set to an object to use TLS and pass the object to tls.connect as the tls
	     *           options. If your device uses self-signed certificates, you'll either have to
	     *           set 'rejectUnauthorized : false' or supply the proper CA certificate. See the
	     *           options for
	     *           {@link https://nodejs.org/api/tls.html#tls_tls_connect_port_host_options_callback|tls.connect()}
	     *           for more info.
	     * @throws <strong>WARNING: If you do not listen for 'error' or 'timeout' events and one
	     *            occurrs during the initial connection (host unreachable, connection refused,
	     *            etc.), an "Unhandled 'error' event" exception will be thrown.</strong>
	     * 
	     * @example
	     * 
	     * <pre>
	     * var MikroNode = require('mikronode');
	     * 
	     * var device1 = new MikroNode('192.168.88.1')
	     * var device2 = new MikroNode('192.168.88.2')
	     * var promise1 = Observable.fromPromise(device1.connect('admin', 'mypassword'));
	     * var promise2 = Observable.fromPromise(device2.connect('admin', 'mypassword'));
	     *
	     *  // When connected to both servers.
	     *  Observable.zip(promise1,promise2).subscribe(function(connections) {
	     *      connections[0].closeOnDone(true); // Set close on done for the connection. All channels must be done before this will issue done.
	     *      connections[1].closeOnDone(true);
	     *      var channel1=connections[0].openChannel(null,true); // choose chanel number for me, close chanel on done.
	     *      var channel2=connections[1].openChannel(null,true); // choose chanel number for me, close chanel on done.
	     *      // Everything is an observable stream now. Much more powerful
	     *      channel1.data.merge(channel2.data).map(function(sentence){ return sentence; // do something cool mapping streams from both devices })
	                    .filter(function(sentence){ return sentence.type!='trap'}) // filter out traps. We could split off the stream and handle it somewhere else.
	     *              .subscribe(function(sentence){ console.log(sentence)}
	     *  }
	     * , null
	     * , function(err)
	     *     console.error('Error when connecting: ', err);
	     *   });
	     * 
	     * </pre>
	     */


	    /** Timeout for connecting. */


	    /** Port to connect */
	    function MikroNode(host) {
	        var port = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8728;
	        var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;

	        _classCallCheck(this, MikroNode);

	        _debug.set(this, _constants.DEBUG.NONE);

	        _status.set(this, _constants.CONNECTION.DISCONNECTED);

	        _tls.set(this, null);

	        _socketOpts.set(this, {});

	        _socketProto.set(this, 'tcp4');

	        // const {debug,port,timeout}=opts;
	        _host.set(this, host);

	        _port.set(this, port);

	        _timeout.set(this, timeout);
	    }

	    /** Change debug level **/


	    /** Socket connected to mikrotik device */


	    /** Debug Level */


	    _createClass(MikroNode, [{
	        key: 'setDebug',
	        value: function setDebug(debug) {
	            _debug.set(this, debug);

	            if (_sock.get(this)) _sock.get(this).setDebug(debug);
	            if (this.connection) this.connection.setDebug(debug);
	        }

	        /** Change the port */

	    }, {
	        key: 'setPort',
	        value: function setPort(port) {
	            _port.set(this, port);
	        }

	        /** get/set tls options for this connection */

	    }, {
	        key: 'TLS',
	        value: function TLS() {
	            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	            if (opts) {
	                _tls.set(this, opts);

	                if (opts.host) _host.set(this, opts.host);
	                if (opts.port) _port.set(this, opts.port);
	                return this;
	            }
	            return _tls.get(this);
	        }
	    }, {
	        key: 'setTimeout',

	        /** Set timeout for socket connecion */
	        value: function setTimeout(timeout) {
	            _timeout.set(this, timeout);

	            _sock.get(this).setTimeout(timeout);
	        }

	        /** Connect to remote server using ID and password */

	    }, {
	        key: 'connect',
	        value: function connect(arg1, arg2) {
	            var _this = this;

	            _debug.get(this) >= _constants.DEBUG.INFO && console.log('Connecting to ' + _host.get(this));

	            var cb = void 0;
	            _debug.get(this) >= _constants.DEBUG.SILLY && console.log('Creating socket');

	            _sock.set(this, new SocketStream(_timeout.get(this), _debug.get(this), _tls.get(this) ? _typeof(_tls.get(this)) === _typeof({}) ? _tls.get(this) : {} : false));

	            var stream = _sock.get(this).getStream();

	            if ((typeof arg1 === 'undefined' ? 'undefined' : _typeof(arg1)) === _typeof({})) {
	                _socketOpts.set(this, _extends({}, _socketOpts.get(this), { arg1: arg1 }));

	                if ((typeof arg1 === 'undefined' ? 'undefined' : _typeof(arg1)) === _typeof(function () {})) cb = arg2;
	            } else if ((typeof arg1 === 'undefined' ? 'undefined' : _typeof(arg1)) === _typeof(function () {})) cb = arg1;

	            var close = function close() {
	                return _sock.get(_this).getStream().sentence.complete();
	            };
	            /** Flag added to choose between pre-v6.43 and post-v6.43 (post-v6.43 by default)*/
	            var login = function login(user, password, post, cb) {
	                if (post === undefined) {
	                    post = true;
	                }
	                _debug.get(_this) >= _constants.DEBUG.DEBUG && console.log('Logging in');
	                stream.write('/login');

	                var _getUnwrappedPromise = (0, _Util.getUnwrappedPromise)(),
	                    promise = _getUnwrappedPromise.promise,
	                    resolve = _getUnwrappedPromise.resolve,
	                    reject = _getUnwrappedPromise.reject;
	                // Create a connection handler


	                _this.connection = new _Connection2.default(_extends({}, stream, { close: close }), function (challenge) {
	                    if (post) {
	                        stream.write(["/login", "=name=" + user, "=password=" + password]);
	                    } else {
	                        var md5 = _crypto2.default.createHash('md5');
	                        md5.update(Buffer.concat([Buffer.from(nullString + password), Buffer.from(challenge)]));
	                        stream.write(["/login", "=name=" + user, "=response=00" + md5.digest("hex")]);
	                    }
	                }, { resolve: resolve, reject: reject });
	                _this.connection.setDebug(_debug.get(_this));
	                promise.then(function () {
	                    if (cb) cb(null, _this.connection);
	                }, function (err) {
	                    if (cb) cb(err, null);
	                });
	                return promise;
	            };

	            _debug.get(this) >= _constants.DEBUG.SILLY && console.log('Creating promise for socket connect');
	            var promise = new _promise2.default(function (resolve, reject) {
	                _debug.get(_this) >= _constants.DEBUG.SILLY && console.log('Connecting to remote host. Detected %s', _net2.default.isIPv6(_host.get(_this)) ? 'ipv6' : _net2.default.isIPv4(_host.get(_this)) ? 'ipv4' : 'DNS lookup');
	                var fn = _net2.default.isIPv4(_host.get(_this)) || _net2.default.isIPv6(_host.get(_this)) ? (_socketOpts.get(_this).family = _net2.default.isIPv6(_host.get(_this)) ? 6 : 4, function (a, b) {
	                    return b(null, [a]);
	                }) : _socketOpts.get(_this).family == 6 ? _dns2.default.resolve4 : _dns2.default.resolve6;

	                fn(_host.get(_this), function (err, data) {
	                    if (err) {
	                        return reject("Host resolve error: ", err);
	                    }
	                    // this.debug>=DEBUG.DEBUG&&console.log('Socket connect: ',{...this.socketOpts,...this.tls,host:this.host,port:this.port});
	                    _sock.get(_this).connect(_extends({}, _socketOpts.get(_this), _tls.get(_this), {
	                        host: data[0],
	                        port: _port.get(_this)
	                    })).then(function (_ref) {
	                        var _ref2 = _toArray(_ref),
	                            socketOpts = _ref2[0],
	                            args = _ref2.slice(1);

	                        _debug.get(_this) >= _constants.DEBUG.DEBUG && console.log('Connected. Waiting for login.');
	                        // initiate the login process
	                        resolve([login, socketOpts].concat(_toConsumableArray(args)));
	                        if (cb) cb.apply(undefined, [null, login, socketOpts].concat(_toConsumableArray(args)));
	                        /* Initiate Login */
	                        _sock.get(_this).getStream().sentence.take(1).subscribe(null, reject, null);
	                    }).catch(function (err) {
	                        if (cb) cb(err, null);
	                        reject(err);
	                    });
	                    // reject connect promise if the socket throws an error.
	                });
	            });
	            // Connect to the server.
	            return promise;
	        }
	    }, {
	        key: 'socketOpts',
	        set: function set(opts) {
	            _socketOpts.set(this, opts);

	            if (opts.host) _host.set(this, opts.host);
	            if (opts.port) _port.set(this, opts.port);
	        }
	    }]);

	    return MikroNode;
	}();

	// Object.keys(DEBUG).forEach(k=>MikroNode[k]=DEBUG[k]);


	var api = (0, _simpleAssign2.default)(MikroNode, _constants.DEBUG);
	exports.default = (0, _simpleAssign2.default)(api, { CONNECTION: _constants.CONNECTION, CHANNEL: _constants.CHANNEL, EVENT: _constants.EVENT, resultsToObj: _Util.resultsToObj, getUnwrappedPromise: _Util.getUnwrappedPromise });

	/** Handles the socket connection and parsing of infcoming data. */
	/* This entire class is private (not exported) */

	var _rawSocket = new WeakMap();

	var _socket = new WeakMap();

	var _status2 = new WeakMap();

	var _debug2 = new WeakMap();

	var _sentence$ = new WeakMap();

	var _parsed$ = new WeakMap();

	var _data$ = new WeakMap();

	var _closeSocket = new WeakMap();

	var SocketStream = (_class = function () {
	    function SocketStream(timeout, debug, tls) {
	        var _this2 = this;

	        _classCallCheck(this, SocketStream);

	        _status2.set(this, _constants.CONNECTION.NONE);

	        _debug2.set(this, _constants.DEBUG.NONE);

	        _closeSocket.set(this, function (e) {
	            _debug2.get(this) >= _constants.DEBUG.DEBUG && console.log("Closing Socket ", e);
	            e ? _rawSocket.get(this).destroy(e) : _rawSocket.get(this).destroy();
	        }.bind(this));

	        debug >= _constants.DEBUG.DEBUG && console.log('SocketStream::new', [timeout, debug]);

	        _debug2.set(this, debug);

	        _rawSocket.set(this, new Socket());

	        _socket.set(this, tls ? new _tls3.default.TLSSocket(_rawSocket.get(this), tls) : _rawSocket.get(this));

	        _sentence$.set(this, new _rxjs.Subject());
	        // Each raw sentence from the stream passes through this parser.


	        var holdBuffer = [];

	        _parsed$.set(this, _sentence$.get(this).do(function (d) {
	            return _debug2.get(_this2) >= _constants.DEBUG.SILLY && console.log("Data to parse:", JSON.stringify(d));
	        }).map(function (o) {
	            return o.map(function (x) {
	                return x.split("\r").join("\\r").split("\n").join("\\n");
	            }).join('\n');
	        }) // Make array string.
	        .map(function (d) {
	            if (holdBuffer.length) {
	                console.log("Hold buffer:", holdBuffer);
	                holdBuffer = [];
	            }
	            var s = _parser2.default.parse(d);
	            s.host = _this2.host;
	            return s;
	        }).catch(function (e) {
	            holdBuffer = [];
	            console.error("***************************************************************************");
	            console.error("***************************************************************************");
	            console.error("Error processing sentence:", e);
	            console.error("Skipping and continuing");
	            console.error("***************************************************************************");
	            console.error("***************************************************************************");
	            return _parsed$.get(_this2);
	        }).filter(function (e) {
	            return !!e;
	        }).flatMap(function (d) {
	            Object.keys(d).forEach(function (k) {
	                if (typeof d[k] === "string") d[k] = d[k].split("\\r").join("\r").split("\\n").join("\n");
	            });
	            return _rxjs.Observable.from(d);
	        }) // break off observable from parse stream.
	        .share()); // parse the string.

	        // When we receive data, it is pushed into the stream defined below.


	        _data$.set(this, _rxjs.Observable.fromEvent(_socket.get(this), 'data'));
	        // this is the stream reader/parser.
	        // My poor stream parser


	        _data$.get(this).scan(function ( /* @type Buffer */last, /* @type Buffer */stream, i) {
	            var buff = Buffer.concat([last, stream]),
	                end = 0,
	                idx = 0,
	                packet = void 0;
	            _debug2.get(_this2) >= _constants.DEBUG.DEBUG && console.log("Packet received: ", stream.toString().split('\0'));
	            _debug2.get(_this2) >= _constants.DEBUG.DEBUG && last.length > 0 && console.log("Starting parse loop w/existing packet ", last.toString());

	            while (idx < buff.length && (end = buff.indexOf('\0', idx, "utf8")) !== -1) {
	                _debug2.get(_this2) >= _constants.DEBUG.SILLY && console.log("Decoding: ", idx, end, buff.length, buff.slice(idx, end));
	                packet = (0, _Util.decodePacket)(buff.slice(idx, end));
	                idx = end + 1;
	                _debug2.get(_this2) >= _constants.DEBUG.SILLY && console.log('Detected end of sentence, posting existing sentence', packet);
	                _sentence$.get(_this2).next(packet);
	            }
	            return idx >= buff.length ? Buffer.alloc(0) : buff.slice(idx, buff.length);
	        }, Buffer.from([])).subscribe(function (e) {
	            return _debug2.get(_this2) >= _constants.DEBUG.DEBUG && e.length && console.log('Buffer leftover: ', e);
	        }, _closeSocket.get(this), _closeSocket.get(this));

	        _socket.get(this).on('end', function (a) {
	            _debug2.get(_this2) >= _constants.DEBUG.INFO && console.log('Connection end ' + a);
	            if (_status2.get(_this2) == _constants.CONNECTION.CONNECTED)
	                // Completing the sentence closes all downstream observables and completes any subscriptions.
	                _sentence$.get(_this2).complete();
	            // this.handler.close(true);
	        });

	        _socket.get(this).on('error', function (a) {
	            _debug2.get(_this2) >= _constants.DEBUG.ERROR && console.log('Connection error: ' + a);
	            // Erroring the sentence closes all downstream observables and issues error any subscriptions.
	            _sentence$.get(_this2).error(a);
	        });

	        this.setTimeout(timeout);

	        // This will be called if there is no activity to the server.
	        // If this occurs before the login is successful, it could be
	        // that it is a connection timeout.
	        _socket.get(this).setKeepAlive(true);
	        this.b = [];
	        this.len = 0;
	        this.line = '';
	    }

	    // This is the function handler for error or complete for the parsing functions.


	    _createClass(SocketStream, [{
	        key: 'setDebug',
	        value: function setDebug(d) {
	            _debug2.get(this) >= _constants.DEBUG.DEBUG && console.log('SocketStream::setDebug', [d]);

	            _debug2.set(this, d);
	        }
	    }, {
	        key: 'setTimeout',
	        value: function setTimeout(timeout) {
	            var _this3 = this;

	            _debug2.get(this) >= _constants.DEBUG.DEBUG && console.log('SocketStream::setTimeout', [timeout]);
	            _socket.get(this).setTimeout(timeout * 1000, function (e) {
	                // the socket timed out. According to the NodeJS api docs, right after this, it will be._closed.
	                if (_status2.get(_this3) !== _constants.CONNECTION.CONNECTED) {
	                    _debug2.get(_this3) && console.log('Socket Timeout');
	                    _sentence$.get(_this3).error("Timeout: ", JSON.stringify(e));
	                    // self.emit('error','Timeout Connecting to host',self);
	                }
	            });
	        }

	        /** Connect the socket */

	    }, {
	        key: 'connect',
	        value: function connect(socketOpts) {
	            var _this4 = this;

	            _debug2.get(this) >= _constants.DEBUG.DEBUG && console.log('SocketStream::Connect %s', this.tls ? "(TLS)" : "", socketOpts);

	            _status2.set(this, _constants.CONNECTION.CONNECTING);

	            this.host = socketOpts.host || 'localhost';
	            return new _promise2.default(function (res, rej) {
	                /** Listen for complete on stream to dictate if socket will close */
	                _sentence$.get(_this4)
	                // .do(d=>console.log("Sentence: ",d))
	                .subscribe(null, function (e) {
	                    rej(e);_closeSocket.get(_this4)();
	                }, _closeSocket.get(_this4));
	                // Connect to the socket. This works for both TLS and non TLS sockets.
	                try {
	                    _rawSocket.get(_this4).connect(socketOpts, function () {
	                        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                            args[_key] = arguments[_key];
	                        }

	                        _debug2.get(_this4) >= _constants.DEBUG.INFO && console.log('SocketStream::Connected ', args, socketOpts);

	                        _status2.set(_this4, _constants.CONNECTION.CONNECTED);

	                        socketOpts = _extends({}, socketOpts, {
	                            localAddress: _socket.get(_this4).localAddress,
	                            localPort: _socket.get(_this4).localPort
	                        });
	                        if (_socket.get(_this4).encrypted) res([_extends({}, socketOpts, {
	                            authorized: _socket.get(_this4).authorized,
	                            authorizationError: _socket.get(_this4).authorizationError,
	                            protocol: _socket.get(_this4).getProtocol(),
	                            alpnProtocol: _socket.get(_this4).alpnProtocol,
	                            npnProtocol: _socket.get(_this4).npnProtocol,
	                            cipher: _socket.get(_this4).getCipher(),
	                            cert: _socket.get(_this4).getPeerCertificate()
	                        })].concat(args));else res([socketOpts].concat(args));
	                    });
	                } catch (e) {
	                    _debug2.get(_this4) >= _constants.DEBUG.DEBUG && console.error('Caught exception while opening socket: ', e);
	                    rej(e);
	                }
	            });
	        }

	        /** Provides access to all of the different stages of input streams and the write stream. */

	    }, {
	        key: 'getStream',
	        value: function getStream() {
	            return { sentence: _sentence$.get(this), write: this.write, read: _parsed$.get(this), raw: _data$.get(this) };
	        }
	    }, {
	        key: 'write',
	        value: function write(data, args) {
	            var _this5 = this;

	            if (args && (typeof args === 'undefined' ? 'undefined' : _typeof(args)) === _typeof({})) {
	                _debug2.get(this) >= _constants.DEBUG.SILLY && console.log("Converting obj to args", args);
	                data = data.concat(Array.isArray(args) ? args : (0, _Util.objToAPIParams)(args, data[0].split('/').pop()));
	            }
	            _debug2.get(this) >= _constants.DEBUG.DEBUG && console.log('SocketStream::write:', [data]);
	            if (!_socket.get(this) || !(_status2.get(this) & (_constants.CONNECTION.CONNECTED | _constants.CONNECTION.CONNECTING))) {
	                _debug2.get(this) > _constants.DEBUG.WARN && console.log('write: not connected ');
	                return;
	            }
	            if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === _constants.STRING_TYPE) data = [data];else if (!Array.isArray(data)) return;
	            data.forEach(function (i) {
	                try {
	                    _debug2.get(_this5) >= _constants.DEBUG.DEBUG && console.log('SocketStream::write: sending ' + i);
	                    _socket.get(_this5).write((0, _Util.encodeString)(i, _debug2.get(_this5) & _constants.DEBUG.SILLY));
	                } catch (error) {
	                    _sentence$.get(_this5).error(error);
	                }
	            });
	            _socket.get(this).write(nullString);
	        }
	    }]);

	    return SocketStream;
	}(), (_applyDecoratedDescriptor(_class.prototype, 'write', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'write'), _class.prototype)), _class);
	module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	  return target;
	};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("util");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("net");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("tls");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(7)


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(8);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(16);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var asap = __webpack_require__(9);

	function noop() {}

	// States:
	//
	// 0 - pending
	// 1 - fulfilled with _value
	// 2 - rejected with _value
	// 3 - adopted the state of another promise, _value
	//
	// once the state is no longer pending (0) it is immutable

	// All `_` prefixed properties will be reduced to `_{random number}`
	// at build time to obfuscate them and discourage their use.
	// We don't use symbols or Object.defineProperty to fully hide them
	// because the performance isn't good enough.


	// to avoid using try/catch inside critical functions, we
	// extract them to here.
	var LAST_ERROR = null;
	var IS_ERROR = {};
	function getThen(obj) {
	  try {
	    return obj.then;
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}

	function tryCallOne(fn, a) {
	  try {
	    return fn(a);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	function tryCallTwo(fn, a, b) {
	  try {
	    fn(a, b);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}

	module.exports = Promise;

	function Promise(fn) {
	  if (typeof this !== 'object') {
	    throw new TypeError('Promises must be constructed via new');
	  }
	  if (typeof fn !== 'function') {
	    throw new TypeError('Promise constructor\'s argument is not a function');
	  }
	  this._U = 0;
	  this._V = 0;
	  this._W = null;
	  this._X = null;
	  if (fn === noop) return;
	  doResolve(fn, this);
	}
	Promise._Y = null;
	Promise._Z = null;
	Promise._0 = noop;

	Promise.prototype.then = function(onFulfilled, onRejected) {
	  if (this.constructor !== Promise) {
	    return safeThen(this, onFulfilled, onRejected);
	  }
	  var res = new Promise(noop);
	  handle(this, new Handler(onFulfilled, onRejected, res));
	  return res;
	};

	function safeThen(self, onFulfilled, onRejected) {
	  return new self.constructor(function (resolve, reject) {
	    var res = new Promise(noop);
	    res.then(resolve, reject);
	    handle(self, new Handler(onFulfilled, onRejected, res));
	  });
	}
	function handle(self, deferred) {
	  while (self._V === 3) {
	    self = self._W;
	  }
	  if (Promise._Y) {
	    Promise._Y(self);
	  }
	  if (self._V === 0) {
	    if (self._U === 0) {
	      self._U = 1;
	      self._X = deferred;
	      return;
	    }
	    if (self._U === 1) {
	      self._U = 2;
	      self._X = [self._X, deferred];
	      return;
	    }
	    self._X.push(deferred);
	    return;
	  }
	  handleResolved(self, deferred);
	}

	function handleResolved(self, deferred) {
	  asap(function() {
	    var cb = self._V === 1 ? deferred.onFulfilled : deferred.onRejected;
	    if (cb === null) {
	      if (self._V === 1) {
	        resolve(deferred.promise, self._W);
	      } else {
	        reject(deferred.promise, self._W);
	      }
	      return;
	    }
	    var ret = tryCallOne(cb, self._W);
	    if (ret === IS_ERROR) {
	      reject(deferred.promise, LAST_ERROR);
	    } else {
	      resolve(deferred.promise, ret);
	    }
	  });
	}
	function resolve(self, newValue) {
	  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	  if (newValue === self) {
	    return reject(
	      self,
	      new TypeError('A promise cannot be resolved with itself.')
	    );
	  }
	  if (
	    newValue &&
	    (typeof newValue === 'object' || typeof newValue === 'function')
	  ) {
	    var then = getThen(newValue);
	    if (then === IS_ERROR) {
	      return reject(self, LAST_ERROR);
	    }
	    if (
	      then === self.then &&
	      newValue instanceof Promise
	    ) {
	      self._V = 3;
	      self._W = newValue;
	      finale(self);
	      return;
	    } else if (typeof then === 'function') {
	      doResolve(then.bind(newValue), self);
	      return;
	    }
	  }
	  self._V = 1;
	  self._W = newValue;
	  finale(self);
	}

	function reject(self, newValue) {
	  self._V = 2;
	  self._W = newValue;
	  if (Promise._Z) {
	    Promise._Z(self, newValue);
	  }
	  finale(self);
	}
	function finale(self) {
	  if (self._U === 1) {
	    handle(self, self._X);
	    self._X = null;
	  }
	  if (self._U === 2) {
	    for (var i = 0; i < self._X.length; i++) {
	      handle(self, self._X[i]);
	    }
	    self._X = null;
	  }
	}

	function Handler(onFulfilled, onRejected, promise){
	  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	  this.promise = promise;
	}

	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, promise) {
	  var done = false;
	  var res = tryCallTwo(fn, function (value) {
	    if (done) return;
	    done = true;
	    resolve(promise, value);
	  }, function (reason) {
	    if (done) return;
	    done = true;
	    reject(promise, reason);
	  });
	  if (!done && res === IS_ERROR) {
	    done = true;
	    reject(promise, LAST_ERROR);
	  }
	}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var domain; // The domain module is executed on demand
	var hasSetImmediate = typeof setImmediate === "function";

	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including network IO events in Node.js.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Avoids a function call
	    queue[queue.length] = task;
	}

	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory excaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;

	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}

	rawAsap.requestFlush = requestFlush;
	function requestFlush() {
	    // Ensure flushing is not bound to any domain.
	    // It is not sufficient to exit the domain, because domains exist on a stack.
	    // To execute code outside of any domain, the following dance is necessary.
	    var parentDomain = process.domain;
	    if (parentDomain) {
	        if (!domain) {
	            // Lazy execute the domain module.
	            // Only employed if the user elects to use domains.
	            domain = __webpack_require__(10);
	        }
	        domain.active = process.domain = null;
	    }

	    // `setImmediate` is slower that `process.nextTick`, but `process.nextTick`
	    // cannot handle recursion.
	    // `requestFlush` will only be called recursively from `asap.js`, to resume
	    // flushing after an error is thrown into a domain.
	    // Conveniently, `setImmediate` was introduced in the same version
	    // `process.nextTick` started throwing recursion errors.
	    if (flushing && hasSetImmediate) {
	        setImmediate(flush);
	    } else {
	        process.nextTick(flush);
	    }

	    if (parentDomain) {
	        domain.active = process.domain = parentDomain;
	    }
	}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = require("domain");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Promise = __webpack_require__(8);

	module.exports = Promise;
	Promise.prototype.done = function (onFulfilled, onRejected) {
	  var self = arguments.length ? this.then.apply(this, arguments) : this;
	  self.then(null, function (err) {
	    setTimeout(function () {
	      throw err;
	    }, 0);
	  });
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Promise = __webpack_require__(8);

	module.exports = Promise;
	Promise.prototype.finally = function (f) {
	  return this.then(function (value) {
	    return Promise.resolve(f()).then(function () {
	      return value;
	    });
	  }, function (err) {
	    return Promise.resolve(f()).then(function () {
	      throw err;
	    });
	  });
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//This file contains the ES6 extensions to the core Promises/A+ API

	var Promise = __webpack_require__(8);

	module.exports = Promise;

	/* Static Functions */

	var TRUE = valuePromise(true);
	var FALSE = valuePromise(false);
	var NULL = valuePromise(null);
	var UNDEFINED = valuePromise(undefined);
	var ZERO = valuePromise(0);
	var EMPTYSTRING = valuePromise('');

	function valuePromise(value) {
	  var p = new Promise(Promise._0);
	  p._V = 1;
	  p._W = value;
	  return p;
	}
	Promise.resolve = function (value) {
	  if (value instanceof Promise) return value;

	  if (value === null) return NULL;
	  if (value === undefined) return UNDEFINED;
	  if (value === true) return TRUE;
	  if (value === false) return FALSE;
	  if (value === 0) return ZERO;
	  if (value === '') return EMPTYSTRING;

	  if (typeof value === 'object' || typeof value === 'function') {
	    try {
	      var then = value.then;
	      if (typeof then === 'function') {
	        return new Promise(then.bind(value));
	      }
	    } catch (ex) {
	      return new Promise(function (resolve, reject) {
	        reject(ex);
	      });
	    }
	  }
	  return valuePromise(value);
	};

	var iterableToArray = function (iterable) {
	  if (typeof Array.from === 'function') {
	    // ES2015+, iterables exist
	    iterableToArray = Array.from;
	    return Array.from(iterable);
	  }

	  // ES5, only arrays and array-likes exist
	  iterableToArray = function (x) { return Array.prototype.slice.call(x); };
	  return Array.prototype.slice.call(iterable);
	}

	Promise.all = function (arr) {
	  var args = iterableToArray(arr);

	  return new Promise(function (resolve, reject) {
	    if (args.length === 0) return resolve([]);
	    var remaining = args.length;
	    function res(i, val) {
	      if (val && (typeof val === 'object' || typeof val === 'function')) {
	        if (val instanceof Promise && val.then === Promise.prototype.then) {
	          while (val._V === 3) {
	            val = val._W;
	          }
	          if (val._V === 1) return res(i, val._W);
	          if (val._V === 2) reject(val._W);
	          val.then(function (val) {
	            res(i, val);
	          }, reject);
	          return;
	        } else {
	          var then = val.then;
	          if (typeof then === 'function') {
	            var p = new Promise(then.bind(val));
	            p.then(function (val) {
	              res(i, val);
	            }, reject);
	            return;
	          }
	        }
	      }
	      args[i] = val;
	      if (--remaining === 0) {
	        resolve(args);
	      }
	    }
	    for (var i = 0; i < args.length; i++) {
	      res(i, args[i]);
	    }
	  });
	};

	Promise.reject = function (value) {
	  return new Promise(function (resolve, reject) {
	    reject(value);
	  });
	};

	Promise.race = function (values) {
	  return new Promise(function (resolve, reject) {
	    iterableToArray(values).forEach(function(value){
	      Promise.resolve(value).then(resolve, reject);
	    });
	  });
	};

	/* Prototype Methods */

	Promise.prototype['catch'] = function (onRejected) {
	  return this.then(null, onRejected);
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// This file contains then/promise specific extensions that are only useful
	// for node.js interop

	var Promise = __webpack_require__(8);
	var asap = __webpack_require__(15);

	module.exports = Promise;

	/* Static Functions */

	Promise.denodeify = function (fn, argumentCount) {
	  if (
	    typeof argumentCount === 'number' && argumentCount !== Infinity
	  ) {
	    return denodeifyWithCount(fn, argumentCount);
	  } else {
	    return denodeifyWithoutCount(fn);
	  }
	};

	var callbackFn = (
	  'function (err, res) {' +
	  'if (err) { rj(err); } else { rs(res); }' +
	  '}'
	);
	function denodeifyWithCount(fn, argumentCount) {
	  var args = [];
	  for (var i = 0; i < argumentCount; i++) {
	    args.push('a' + i);
	  }
	  var body = [
	    'return function (' + args.join(',') + ') {',
	    'var self = this;',
	    'return new Promise(function (rs, rj) {',
	    'var res = fn.call(',
	    ['self'].concat(args).concat([callbackFn]).join(','),
	    ');',
	    'if (res &&',
	    '(typeof res === "object" || typeof res === "function") &&',
	    'typeof res.then === "function"',
	    ') {rs(res);}',
	    '});',
	    '};'
	  ].join('');
	  return Function(['Promise', 'fn'], body)(Promise, fn);
	}
	function denodeifyWithoutCount(fn) {
	  var fnLength = Math.max(fn.length - 1, 3);
	  var args = [];
	  for (var i = 0; i < fnLength; i++) {
	    args.push('a' + i);
	  }
	  var body = [
	    'return function (' + args.join(',') + ') {',
	    'var self = this;',
	    'var args;',
	    'var argLength = arguments.length;',
	    'if (arguments.length > ' + fnLength + ') {',
	    'args = new Array(arguments.length + 1);',
	    'for (var i = 0; i < arguments.length; i++) {',
	    'args[i] = arguments[i];',
	    '}',
	    '}',
	    'return new Promise(function (rs, rj) {',
	    'var cb = ' + callbackFn + ';',
	    'var res;',
	    'switch (argLength) {',
	    args.concat(['extra']).map(function (_, index) {
	      return (
	        'case ' + (index) + ':' +
	        'res = fn.call(' + ['self'].concat(args.slice(0, index)).concat('cb').join(',') + ');' +
	        'break;'
	      );
	    }).join(''),
	    'default:',
	    'args[argLength] = cb;',
	    'res = fn.apply(self, args);',
	    '}',
	    
	    'if (res &&',
	    '(typeof res === "object" || typeof res === "function") &&',
	    'typeof res.then === "function"',
	    ') {rs(res);}',
	    '});',
	    '};'
	  ].join('');

	  return Function(
	    ['Promise', 'fn'],
	    body
	  )(Promise, fn);
	}

	Promise.nodeify = function (fn) {
	  return function () {
	    var args = Array.prototype.slice.call(arguments);
	    var callback =
	      typeof args[args.length - 1] === 'function' ? args.pop() : null;
	    var ctx = this;
	    try {
	      return fn.apply(this, arguments).nodeify(callback, ctx);
	    } catch (ex) {
	      if (callback === null || typeof callback == 'undefined') {
	        return new Promise(function (resolve, reject) {
	          reject(ex);
	        });
	      } else {
	        asap(function () {
	          callback.call(ctx, ex);
	        })
	      }
	    }
	  }
	};

	Promise.prototype.nodeify = function (callback, ctx) {
	  if (typeof callback != 'function') return this;

	  this.then(function (value) {
	    asap(function () {
	      callback.call(ctx, null, value);
	    });
	  }, function (err) {
	    asap(function () {
	      callback.call(ctx, err);
	    });
	  });
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var rawAsap = __webpack_require__(9);
	var freeTasks = [];

	/**
	 * Calls a task as soon as possible after returning, in its own event, with
	 * priority over IO events. An exception thrown in a task can be handled by
	 * `process.on("uncaughtException") or `domain.on("error")`, but will otherwise
	 * crash the process. If the error is handled, all subsequent tasks will
	 * resume.
	 *
	 * @param {{call}} task A callable object, typically a function that takes no
	 * arguments.
	 */
	module.exports = asap;
	function asap(task) {
	    var rawTask;
	    if (freeTasks.length) {
	        rawTask = freeTasks.pop();
	    } else {
	        rawTask = new RawTask();
	    }
	    rawTask.task = task;
	    rawTask.domain = process.domain;
	    rawAsap(rawTask);
	}

	function RawTask() {
	    this.task = null;
	    this.domain = null;
	}

	RawTask.prototype.call = function () {
	    if (this.domain) {
	        this.domain.enter();
	    }
	    var threw = true;
	    try {
	        this.task.call();
	        threw = false;
	        // If the task throws an exception (presumably) Node.js restores the
	        // domain stack for the next event.
	        if (this.domain) {
	            this.domain.exit();
	        }
	    } finally {
	        // We use try/finally and a threw flag to avoid messing up stack traces
	        // when we catch and release errors.
	        if (threw) {
	            // In Node.js, uncaught exceptions are considered fatal errors.
	            // Re-throw them to interrupt flushing!
	            // Ensure that flushing continues if an uncaught exception is
	            // suppressed listening process.on("uncaughtException") or
	            // domain.on("error").
	            rawAsap.requestFlush();
	        }
	        // If the task threw an error, we do not want to exit the domain here.
	        // Exiting the domain would prevent the domain from catching the error.
	        this.task = null;
	        this.domain = null;
	        freeTasks.push(this);
	    }
	};



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Promise = __webpack_require__(8);

	module.exports = Promise;
	Promise.enableSynchronous = function () {
	  Promise.prototype.isPending = function() {
	    return this.getState() == 0;
	  };

	  Promise.prototype.isFulfilled = function() {
	    return this.getState() == 1;
	  };

	  Promise.prototype.isRejected = function() {
	    return this.getState() == 2;
	  };

	  Promise.prototype.getValue = function () {
	    if (this._V === 3) {
	      return this._W.getValue();
	    }

	    if (!this.isFulfilled()) {
	      throw new Error('Cannot get a value of an unfulfilled promise.');
	    }

	    return this._W;
	  };

	  Promise.prototype.getReason = function () {
	    if (this._V === 3) {
	      return this._W.getReason();
	    }

	    if (!this.isRejected()) {
	      throw new Error('Cannot get a rejection reason of a non-rejected promise.');
	    }

	    return this._W;
	  };

	  Promise.prototype.getState = function () {
	    if (this._V === 3) {
	      return this._W.getState();
	    }
	    if (this._V === -1 || this._V === -2) {
	      return 0;
	    }

	    return this._V;
	  };
	};

	Promise.disableSynchronous = function() {
	  Promise.prototype.isPending = undefined;
	  Promise.prototype.isFulfilled = undefined;
	  Promise.prototype.isRejected = undefined;
	  Promise.prototype.getValue = undefined;
	  Promise.prototype.getReason = undefined;
	  Promise.prototype.getState = undefined;
	};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = require("crypto");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = require("dns");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function encodeString(s, d) {
	    var data = null;
	    var len = Buffer.byteLength(s);
	    var offset = 0;

	    if (len < 0x80) {
	        data = new Buffer(len + 1);
	        data[offset++] = len;
	    } else if (len < 0x4000) {
	        data = new Buffer(len + 2);
	        len |= 0x8000;
	        data[offset++] = len >> 8 & 0xff;
	        data[offset++] = len & 0xff;
	    } else if (len < 0x200000) {
	        data = new Buffer(len + 3);
	        len |= 0xC00000;
	        data[offset++] = len >> 16 & 0xff;
	        data[offset++] = len >> 8 & 0xff;
	        data[offset++] = len & 0xff;
	    } else if (len < 0x10000000) {
	        data = new Buffer(len + 4);
	        len |= 0xE0000000;
	        data[offset++] = len >> 24 & 0xff;
	        data[offset++] = len >> 16 & 0xff;
	        data[offset++] = len >> 8 & 0xff;
	        data[offset++] = len & 0xff;
	    } else {
	        data = new Buffer(len + 5);
	        data[offset++] = 0xF0;
	        data[offset++] = len >> 24 & 0xff;
	        data[offset++] = len >> 16 & 0xff;
	        data[offset++] = len >> 8 & 0xff;
	        data[offset++] = len & 0xff;
	    }
	    data.utf8Write(s, offset);
	    d && console.log("Writing ", data);
	    return data;
	}

	function decodePacket(data) {
	    if (!data.length) return [];
	    var buf = [];
	    var idx = 0;
	    while (idx < data.length) {
	        var len = void 0;
	        var b = data[idx++];
	        if (b & 128) {
	            // Ported from the PHP API on the Wiki. Thanks
	            if ((b & 192) == 128) {
	                len = ((b & 63) << 8) + data[idx++];
	            } else {
	                if ((b & 224) == 192) {
	                    len = ((b & 31) << 8) + data[idx++];
	                    len = (len << 8) + data[idx++];
	                } else {
	                    if ((b & 240) == 224) {
	                        len = ((b & 15) << 8) + data[idx++];
	                        len = (len << 8) + data[idx++];
	                        len = (len << 8) + data[idx++];
	                    } else {
	                        len = data[idx++];
	                        len = (len << 8) + data[idx++];
	                        len = (len << 8) + data[idx++];
	                        len = (len << 8) + data[idx++];
	                    }
	                }
	            }
	        } else {
	            len = b;
	        }
	        // console.log("Pushing ",idx,len,data.slice(idx,idx+len));
	        buf.push(data.slice(idx, idx + len).toString('utf8'));
	        idx += len;
	    }
	    return buf;
	}
	//hexDump=require('./hexdump');
	function hexDump(data) {
	    var hex = [];
	    var cref = [];
	    var i = 0,
	        j = 0;
	    for (j = 0; j < data.length; j++) {
	        i = j % 8;
	        //m=ctrl.indexOf(data[j]);
	        if (data[j] < 20 || data[j] > 126) cref[i] = '.';else cref[i] = String.fromCharCode(data[j]);
	        hex[i] = Number(data[j]).toString(16);
	        while (hex[i].length < 2) {
	            hex[i] = "0" + hex[i];
	        }if (hex.length == 8) {
	            console.log("%d: %s    %s", j - 7, hex.join(' '), cref.join(''));
	            hex = [];
	            cref = [];
	        }
	    }
	    if (i != 8) {
	        console.log(hex.join(' ') + '    ' + cref.join(''));
	        hex = [];
	        cref = [];
	    }
	}

	// This is probably over done...
	// Uncomment if you want to detail trace your promises.
	function nullfunc() {}
	var rejectionWatcher = new WeakMap();

	// function clearRejectionTrack(catcher,reason) {
	//     const x=rejectionWatcher.get(this);
	//     x.splice(x.findIndex(catcher),1);
	//     return catcher.call(this,reason);
	// }

	// function proxyThenCatch(promise) {
	//     const catchEx = promise.catch;
	//     const thenEx = promise.then;

	//     console.log("Adding promise to watcher map");
	//     // rejectionWatcher.set(promise,[]);

	//     promise.then=function(handler,catcher) {
	//         if (catcher) {
	//             // rejectionWatcher.get(promise).push(catcher);
	//             console.log("tracking catcher");
	//         }
	//         return proxyThenCatch(thenEx.call(promise,handler,clearRejectionTrack.bind(promise,catcher)));
	//     }.bind(promise);

	//     promise.catch=function(catcher) {
	//         if (!catcher) return;
	//         // rejectionWatcher.get(promise).push(catcher);
	//         return proxyThenCatch(catchEx.call(promise,catcher));
	//     }.bind(promise);
	//     return promise;
	// }

	process.on('unhandledRejection', function (event, promise) {
	    if (event.cmd) return;
	    //     console.log("caught unhandled rejection. Command still running...");
	    //     rejectionWatcher.set(promise,event);
	    // } else
	    console.error("Unhandled rejection: ", JSON.stringify(event, true, 4), '\n', promise);
	});

	// process.on('rejectionHandled',function(p){
	//     console.log('Rejection handled.');
	//     rejectionWatcher.delete(p);
	// });

	function getUnwrappedPromise() {
	    var _resolve = void 0,
	        _reject = void 0;
	    var e = new Error();
	    var promise = new Promise(function (res, rej) {
	        _resolve = res;
	        _reject = rej;
	    });
	    promise.createdAt = e.stack.split('\n').slice(2, 3).join('\n');
	    return {
	        get promise() {
	            return promise;
	        },
	        resolve: function resolve() {
	            if (_resolve === nullfunc) return;
	            //   const e = new Error();
	            //   console.log("Resolving promise",promise);
	            //   console.log(e.stack.split('\n').slice(2).join('\n'))
	            _reject = nullfunc;
	            var r = _resolve.apply(undefined, arguments);
	            _resolve = nullfunc;return r;
	        },
	        reject: function reject() {
	            if (_reject === nullfunc) return;
	            //   const e = new Error();
	            //   console.log("Rejecting promise",promise);
	            //   console.log(e.stack.split('\n').slice(2).join('\n'))
	            _resolve = nullfunc;
	            var r = _reject.apply(undefined, arguments);
	            _reject = nullfunc;
	            return r;
	        }
	    };
	}

	function objToAPIParams(obj, type) {
	    var prefix = type === 'print' ? '' : '=';
	    return Object.keys(obj).map(function (k) {
	        return obj[k] ? '' + prefix + k + '=' + obj[k] : '' + prefix + k;
	    });
	}

	function resultsToObj(r) {
	    if (r.type) {
	        if (Array.isArray(r.data)) return resultsToObj(r.data);
	        return [];
	    }
	    if (r.length && Array.isArray(r[0])) return r.map(resultsToObj);
	    if (!Array.isArray(r)) return {};
	    return r.reduce(function (p, f) {
	        p[f.field] = f.value;return p;
	    }, {});
	}
	exports.hexDump = hexDump;
	exports.decodePacket = decodePacket;
	exports.encodeString = encodeString;
	exports.objToAPIParams = objToAPIParams;
	exports.resultsToObj = resultsToObj;
	exports.getUnwrappedPromise = getUnwrappedPromise;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var STRING_TYPE = _typeof("");

	var DEBUG = {
	    NONE: 0,
	    ERROR: 1,
	    WARN: 2,
	    INFO: 4,
	    DEBUG: 8,
	    SILLY: 16
	};

	var connectionLabels = {
	    DISCONNECTED: "Disconnected" // Disconnected from device
	    , ERROR: "Error" // ERROR defined above means a connect or transport error.
	    , CONNECTING: "Connecting" // Connecting to device
	    , CONNECTED: "Connected" // Connected and idle
	    , WAITING: "Waiting" // Waiting for response(s)
	    , CLOSING: "Closing",
	    CLOSED: "Closed"
	};

	var CONNECTION = {
	    DISCONNECTED: 0,
	    CONNECTING: 1,
	    CONNECTED: 2,
	    WAITING: 4,
	    CLOSING: 8,
	    CLOSED: 16,
	    ERROR: 32
	};

	var CHANNEL = {
	    NONE: 0,
	    OPEN: 1,
	    CLOSED: 2,
	    CLOSING: 4,
	    RUNNING: 8,
	    DONE: 16
	};
	var EVENT = {
	    TRAP: 'trap',
	    TRAP_TAG: 'trap_tag',
	    DONE: 'done',
	    DONE_RET: 'done_ret',
	    FATAL: 'fatal',
	    FATAL_TAG: 'fatal_tag',
	    TAG: 'tag',
	    DONE_RET_TAG: 'done_ret_tag',
	    DONE_TAG: 'done_tag',
	    RE: 're',
	    DATA: 'data' // This is an artifical event, not one from the API
	};

	exports.STRING_TYPE = STRING_TYPE;
	exports.DEBUG = DEBUG;
	exports.CONNECTION = CONNECTION;
	exports.CHANNEL = CHANNEL;
	exports.EVENT = EVENT;
	exports.connectionLabels = connectionLabels;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	/*
	 * Generated by PEG.js 0.10.0.
	 *
	 * http://pegjs.org/
	 */

	"use strict";

	function peg$subclass(child, parent) {
	  function ctor() {
	    this.constructor = child;
	  }
	  ctor.prototype = parent.prototype;
	  child.prototype = new ctor();
	}

	function peg$SyntaxError(message, expected, found, location) {
	  this.message = message;
	  this.expected = expected;
	  this.found = found;
	  this.location = location;
	  this.name = "SyntaxError";

	  if (typeof Error.captureStackTrace === "function") {
	    Error.captureStackTrace(this, peg$SyntaxError);
	  }
	}

	peg$subclass(peg$SyntaxError, Error);

	peg$SyntaxError.buildMessage = function (expected, found) {
	  var DESCRIBE_EXPECTATION_FNS = {
	    literal: function literal(expectation) {
	      return "\"" + literalEscape(expectation.text) + "\"";
	    },

	    "class": function _class(expectation) {
	      var escapedParts = "",
	          i;

	      for (i = 0; i < expectation.parts.length; i++) {
	        escapedParts += expectation.parts[i] instanceof Array ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1]) : classEscape(expectation.parts[i]);
	      }

	      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
	    },

	    any: function any(expectation) {
	      return "any character";
	    },

	    end: function end(expectation) {
	      return "end of input";
	    },

	    other: function other(expectation) {
	      return expectation.description;
	    }
	  };

	  function hex(ch) {
	    return ch.charCodeAt(0).toString(16).toUpperCase();
	  }

	  function literalEscape(s) {
	    return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
	      return '\\x0' + hex(ch);
	    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
	      return '\\x' + hex(ch);
	    });
	  }

	  function classEscape(s) {
	    return s.replace(/\\/g, '\\\\').replace(/\]/g, '\\]').replace(/\^/g, '\\^').replace(/-/g, '\\-').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
	      return '\\x0' + hex(ch);
	    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
	      return '\\x' + hex(ch);
	    });
	  }

	  function describeExpectation(expectation) {
	    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
	  }

	  function describeExpected(expected) {
	    var descriptions = new Array(expected.length),
	        i,
	        j;

	    for (i = 0; i < expected.length; i++) {
	      descriptions[i] = describeExpectation(expected[i]);
	    }

	    descriptions.sort();

	    if (descriptions.length > 0) {
	      for (i = 1, j = 1; i < descriptions.length; i++) {
	        if (descriptions[i - 1] !== descriptions[i]) {
	          descriptions[j] = descriptions[i];
	          j++;
	        }
	      }
	      descriptions.length = j;
	    }

	    switch (descriptions.length) {
	      case 1:
	        return descriptions[0];

	      case 2:
	        return descriptions[0] + " or " + descriptions[1];

	      default:
	        return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
	    }
	  }

	  function describeFound(found) {
	    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
	  }

	  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
	};

	function peg$parse(input, options) {
	  options = options !== void 0 ? options : {};

	  var peg$FAILED = {},
	      peg$startRuleFunctions = { start: peg$parsestart },
	      peg$startRuleFunction = peg$parsestart,
	      peg$c0 = function peg$c0(p) {
	    return p;
	  },
	      peg$c1 = function peg$c1(tag, data) {
	    return { type: "data", data: data, tag: tag };
	  },
	      peg$c2 = function peg$c2(tag) {
	    return { type: "re", tag: tag };
	  },
	      peg$c3 = function peg$c3(data, tag) {
	    return { type: "data", data: data, tag: tag };
	  },
	      peg$c4 = function peg$c4(data) {
	    return { type: "data", data: data };
	  },
	      peg$c5 = function peg$c5(re) {
	    return { type: "re" };
	  },
	      peg$c6 = function peg$c6(e) {
	    return e;
	  },
	      peg$c7 = "!re",
	      peg$c8 = peg$literalExpectation("!re", false),
	      peg$c9 = function peg$c9() {
	    return "";
	  },
	      peg$c10 = function peg$c10(id, value) {
	    return { field: id, value: value };
	  },
	      peg$c11 = "=",
	      peg$c12 = peg$literalExpectation("=", false),
	      peg$c13 = /^[.a-zA-Z\-0-9]/,
	      peg$c14 = peg$classExpectation([".", ["a", "z"], ["A", "Z"], "-", ["0", "9"]], false, false),
	      peg$c15 = function peg$c15(id) {
	    return id.join('');
	  },
	      peg$c16 = /^[^\r\n\0]/,
	      peg$c17 = peg$classExpectation(["\r", "\n", "\0"], true, false),
	      peg$c18 = function peg$c18(v) {
	    return v.join('');
	  },
	      peg$c19 = /^[\r\n\0]/,
	      peg$c20 = peg$classExpectation(["\r", "\n", "\0"], false, false),
	      peg$c21 = function peg$c21(v) {
	    return '';
	  },
	      peg$c22 = function peg$c22(f) {
	    return { type: "fatal", data: f };
	  },
	      peg$c23 = function peg$c23(t) {
	    return t;
	  },
	      peg$c24 = "!done",
	      peg$c25 = peg$literalExpectation("!done", false),
	      peg$c26 = "=ret=",
	      peg$c27 = peg$literalExpectation("=ret=", false),
	      peg$c28 = peg$anyExpectation(),
	      peg$c29 = function peg$c29(ret) {
	    return { type: "done_ret", data: ret.join('') };
	  },
	      peg$c30 = function peg$c30(tag, ret) {
	    return { type: "done_ret", tag: tag, data: ret.join('') };
	  },
	      peg$c31 = function peg$c31(tag) {
	    return { type: "done_ret", tag: tag };
	  },
	      peg$c32 = function peg$c32() {
	    return { type: "done" };
	  },
	      peg$c33 = function peg$c33(tag) {
	    return { type: "tag", tag: tag };
	  },
	      peg$c34 = ".tag=",
	      peg$c35 = peg$literalExpectation(".tag=", false),
	      peg$c36 = /^[a-zA-Z_\-0-9]/,
	      peg$c37 = peg$classExpectation([["a", "z"], ["A", "Z"], "_", "-", ["0", "9"]], false, false),
	      peg$c38 = /^[0-9]/,
	      peg$c39 = peg$classExpectation([["0", "9"]], false, false),
	      peg$c40 = function peg$c40(id, subid) {
	    return id.join('') + ":" + subid.join('');
	  },
	      peg$c41 = "!trap",
	      peg$c42 = peg$literalExpectation("!trap", false),
	      peg$c43 = function peg$c43(tag, d) {
	    return { type: "trap", tag: tag, data: d };
	  },
	      peg$c44 = function peg$c44(d) {
	    return { type: "trap", data: d };
	  },
	      peg$c45 = "!fatal",
	      peg$c46 = peg$literalExpectation("!fatal", false),
	      peg$c47 = function peg$c47(v) {
	    return v;
	  },
	      peg$c48 = /^[ \t\r\n\f\0x00]/,
	      peg$c49 = peg$classExpectation([" ", "\t", "\r", "\n", "\f", "\0", "x", "0", "0"], false, false),
	      peg$c50 = function peg$c50() {
	    return "";
	  },
	      peg$c51 = /^[^ \t\r\n\f\0x00]/,
	      peg$c52 = peg$classExpectation([" ", "\t", "\r", "\n", "\f", "\0", "x", "0", "0"], true, false),
	      peg$c53 = /^[\0x00]/,
	      peg$c54 = peg$classExpectation(["\0", "x", "0", "0"], false, false),
	      peg$c55 = /^[:]/,
	      peg$c56 = peg$classExpectation([":"], false, false),
	      peg$currPos = 0,
	      peg$savedPos = 0,
	      peg$posDetailsCache = [{ line: 1, column: 1 }],
	      peg$maxFailPos = 0,
	      peg$maxFailExpected = [],
	      peg$silentFails = 0,
	      peg$result;

	  if ("startRule" in options) {
	    if (!(options.startRule in peg$startRuleFunctions)) {
	      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
	    }

	    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
	  }

	  function text() {
	    return input.substring(peg$savedPos, peg$currPos);
	  }

	  function location() {
	    return peg$computeLocation(peg$savedPos, peg$currPos);
	  }

	  function expected(description, location) {
	    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);

	    throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location);
	  }

	  function error(message, location) {
	    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);

	    throw peg$buildSimpleError(message, location);
	  }

	  function peg$literalExpectation(text, ignoreCase) {
	    return { type: "literal", text: text, ignoreCase: ignoreCase };
	  }

	  function peg$classExpectation(parts, inverted, ignoreCase) {
	    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
	  }

	  function peg$anyExpectation() {
	    return { type: "any" };
	  }

	  function peg$endExpectation() {
	    return { type: "end" };
	  }

	  function peg$otherExpectation(description) {
	    return { type: "other", description: description };
	  }

	  function peg$computePosDetails(pos) {
	    var details = peg$posDetailsCache[pos],
	        p;

	    if (details) {
	      return details;
	    } else {
	      p = pos - 1;
	      while (!peg$posDetailsCache[p]) {
	        p--;
	      }

	      details = peg$posDetailsCache[p];
	      details = {
	        line: details.line,
	        column: details.column
	      };

	      while (p < pos) {
	        if (input.charCodeAt(p) === 10) {
	          details.line++;
	          details.column = 1;
	        } else {
	          details.column++;
	        }

	        p++;
	      }

	      peg$posDetailsCache[pos] = details;
	      return details;
	    }
	  }

	  function peg$computeLocation(startPos, endPos) {
	    var startPosDetails = peg$computePosDetails(startPos),
	        endPosDetails = peg$computePosDetails(endPos);

	    return {
	      start: {
	        offset: startPos,
	        line: startPosDetails.line,
	        column: startPosDetails.column
	      },
	      end: {
	        offset: endPos,
	        line: endPosDetails.line,
	        column: endPosDetails.column
	      }
	    };
	  }

	  function peg$fail(expected) {
	    if (peg$currPos < peg$maxFailPos) {
	      return;
	    }

	    if (peg$currPos > peg$maxFailPos) {
	      peg$maxFailPos = peg$currPos;
	      peg$maxFailExpected = [];
	    }

	    peg$maxFailExpected.push(expected);
	  }

	  function peg$buildSimpleError(message, location) {
	    return new peg$SyntaxError(message, null, null, location);
	  }

	  function peg$buildStructuredError(expected, found, location) {
	    return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
	  }

	  function peg$parsestart() {
	    var s0, s1, s2, s3;

	    s0 = peg$currPos;
	    s1 = peg$parses();
	    if (s1 !== peg$FAILED) {
	      s2 = [];
	      s3 = peg$parsepacket();
	      if (s3 !== peg$FAILED) {
	        while (s3 !== peg$FAILED) {
	          s2.push(s3);
	          s3 = peg$parsepacket();
	        }
	      } else {
	        s2 = peg$FAILED;
	      }
	      if (s2 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c0(s2);
	        s0 = s1;
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	    } else {
	      peg$currPos = s0;
	      s0 = peg$FAILED;
	    }
	    if (s0 === peg$FAILED) {
	      s0 = peg$parsenull();
	    }

	    return s0;
	  }

	  function peg$parsepacket() {
	    var s0, s1, s2, s3, s4, s5;

	    s0 = peg$currPos;
	    s1 = peg$parsere();
	    if (s1 !== peg$FAILED) {
	      s2 = peg$parses();
	      if (s2 !== peg$FAILED) {
	        s3 = peg$parsetag();
	        if (s3 !== peg$FAILED) {
	          s4 = [];
	          s5 = peg$parsedata();
	          if (s5 !== peg$FAILED) {
	            while (s5 !== peg$FAILED) {
	              s4.push(s5);
	              s5 = peg$parsedata();
	            }
	          } else {
	            s4 = peg$FAILED;
	          }
	          if (s4 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c1(s3, s4);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	    } else {
	      peg$currPos = s0;
	      s0 = peg$FAILED;
	    }
	    if (s0 === peg$FAILED) {
	      s0 = peg$currPos;
	      s1 = peg$parsere();
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parses();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parsetag();
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c2(s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        s1 = peg$parsere();
	        if (s1 !== peg$FAILED) {
	          s2 = peg$parses();
	          if (s2 !== peg$FAILED) {
	            s3 = [];
	            s4 = peg$parsedata();
	            if (s4 !== peg$FAILED) {
	              while (s4 !== peg$FAILED) {
	                s3.push(s4);
	                s4 = peg$parsedata();
	              }
	            } else {
	              s3 = peg$FAILED;
	            }
	            if (s3 !== peg$FAILED) {
	              s4 = peg$parsetag();
	              if (s4 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c3(s3, s4);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	        if (s0 === peg$FAILED) {
	          s0 = peg$currPos;
	          s1 = peg$parsere();
	          if (s1 !== peg$FAILED) {
	            s2 = peg$parses();
	            if (s2 !== peg$FAILED) {
	              s3 = [];
	              s4 = peg$parsedata();
	              if (s4 !== peg$FAILED) {
	                while (s4 !== peg$FAILED) {
	                  s3.push(s4);
	                  s4 = peg$parsedata();
	                }
	              } else {
	                s3 = peg$FAILED;
	              }
	              if (s3 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c4(s3);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	          if (s0 === peg$FAILED) {
	            s0 = peg$currPos;
	            s1 = peg$parsere();
	            if (s1 !== peg$FAILED) {
	              s2 = peg$parses();
	              if (s2 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c5(s1);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	            if (s0 === peg$FAILED) {
	              s0 = peg$currPos;
	              s1 = peg$parseend();
	              if (s1 !== peg$FAILED) {
	                s2 = peg$parses();
	                if (s2 !== peg$FAILED) {
	                  peg$savedPos = s0;
	                  s1 = peg$c6(s1);
	                  s0 = s1;
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$FAILED;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	              }
	            }
	          }
	        }
	      }
	    }

	    return s0;
	  }

	  function peg$parsere() {
	    var s0, s1;

	    s0 = peg$currPos;
	    if (input.substr(peg$currPos, 3) === peg$c7) {
	      s1 = peg$c7;
	      peg$currPos += 3;
	    } else {
	      s1 = peg$FAILED;
	      if (peg$silentFails === 0) {
	        peg$fail(peg$c8);
	      }
	    }
	    if (s1 !== peg$FAILED) {
	      peg$savedPos = s0;
	      s1 = peg$c9();
	    }
	    s0 = s1;

	    return s0;
	  }

	  function peg$parsedata() {
	    var s0, s1, s2, s3;

	    s0 = peg$currPos;
	    s1 = peg$parseidentifier();
	    if (s1 !== peg$FAILED) {
	      s2 = peg$parsevalue();
	      if (s2 !== peg$FAILED) {
	        s3 = peg$parses();
	        if (s3 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c10(s1, s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	    } else {
	      peg$currPos = s0;
	      s0 = peg$FAILED;
	    }

	    return s0;
	  }

	  function peg$parseidentifier() {
	    var s0, s1, s2, s3;

	    s0 = peg$currPos;
	    if (input.charCodeAt(peg$currPos) === 61) {
	      s1 = peg$c11;
	      peg$currPos++;
	    } else {
	      s1 = peg$FAILED;
	      if (peg$silentFails === 0) {
	        peg$fail(peg$c12);
	      }
	    }
	    if (s1 !== peg$FAILED) {
	      s2 = [];
	      if (peg$c13.test(input.charAt(peg$currPos))) {
	        s3 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s3 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c14);
	        }
	      }
	      if (s3 !== peg$FAILED) {
	        while (s3 !== peg$FAILED) {
	          s2.push(s3);
	          if (peg$c13.test(input.charAt(peg$currPos))) {
	            s3 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) {
	              peg$fail(peg$c14);
	            }
	          }
	        }
	      } else {
	        s2 = peg$FAILED;
	      }
	      if (s2 !== peg$FAILED) {
	        if (input.charCodeAt(peg$currPos) === 61) {
	          s3 = peg$c11;
	          peg$currPos++;
	        } else {
	          s3 = peg$FAILED;
	          if (peg$silentFails === 0) {
	            peg$fail(peg$c12);
	          }
	        }
	        if (s3 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c15(s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	    } else {
	      peg$currPos = s0;
	      s0 = peg$FAILED;
	    }

	    return s0;
	  }

	  function peg$parsevalue() {
	    var s0, s1, s2;

	    s0 = peg$currPos;
	    s1 = [];
	    if (peg$c16.test(input.charAt(peg$currPos))) {
	      s2 = input.charAt(peg$currPos);
	      peg$currPos++;
	    } else {
	      s2 = peg$FAILED;
	      if (peg$silentFails === 0) {
	        peg$fail(peg$c17);
	      }
	    }
	    if (s2 !== peg$FAILED) {
	      while (s2 !== peg$FAILED) {
	        s1.push(s2);
	        if (peg$c16.test(input.charAt(peg$currPos))) {
	          s2 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) {
	            peg$fail(peg$c17);
	          }
	        }
	      }
	    } else {
	      s1 = peg$FAILED;
	    }
	    if (s1 !== peg$FAILED) {
	      peg$savedPos = s0;
	      s1 = peg$c18(s1);
	    }
	    s0 = s1;
	    if (s0 === peg$FAILED) {
	      s0 = peg$currPos;
	      if (peg$c19.test(input.charAt(peg$currPos))) {
	        s1 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c20);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c21(s1);
	      }
	      s0 = s1;
	    }

	    return s0;
	  }

	  function peg$parseend() {
	    var s0, s1, s2, s3, s4, s5, s6, s7;

	    s0 = peg$currPos;
	    s1 = peg$parsefatal();
	    if (s1 !== peg$FAILED) {
	      peg$savedPos = s0;
	      s1 = peg$c22(s1);
	    }
	    s0 = s1;
	    if (s0 === peg$FAILED) {
	      s0 = peg$currPos;
	      s1 = peg$parsetrap();
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c23(s1);
	      }
	      s0 = s1;
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        if (input.substr(peg$currPos, 5) === peg$c24) {
	          s1 = peg$c24;
	          peg$currPos += 5;
	        } else {
	          s1 = peg$FAILED;
	          if (peg$silentFails === 0) {
	            peg$fail(peg$c25);
	          }
	        }
	        if (s1 !== peg$FAILED) {
	          s2 = peg$parses();
	          if (s2 !== peg$FAILED) {
	            if (input.substr(peg$currPos, 5) === peg$c26) {
	              s3 = peg$c26;
	              peg$currPos += 5;
	            } else {
	              s3 = peg$FAILED;
	              if (peg$silentFails === 0) {
	                peg$fail(peg$c27);
	              }
	            }
	            if (s3 !== peg$FAILED) {
	              s4 = [];
	              if (input.length > peg$currPos) {
	                s5 = input.charAt(peg$currPos);
	                peg$currPos++;
	              } else {
	                s5 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                  peg$fail(peg$c28);
	                }
	              }
	              if (s5 !== peg$FAILED) {
	                while (s5 !== peg$FAILED) {
	                  s4.push(s5);
	                  if (input.length > peg$currPos) {
	                    s5 = input.charAt(peg$currPos);
	                    peg$currPos++;
	                  } else {
	                    s5 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                      peg$fail(peg$c28);
	                    }
	                  }
	                }
	              } else {
	                s4 = peg$FAILED;
	              }
	              if (s4 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c29(s4);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	        if (s0 === peg$FAILED) {
	          s0 = peg$currPos;
	          if (input.substr(peg$currPos, 5) === peg$c24) {
	            s1 = peg$c24;
	            peg$currPos += 5;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) {
	              peg$fail(peg$c25);
	            }
	          }
	          if (s1 !== peg$FAILED) {
	            s2 = peg$parses();
	            if (s2 !== peg$FAILED) {
	              s3 = peg$parsetag();
	              if (s3 !== peg$FAILED) {
	                s4 = peg$parses();
	                if (s4 !== peg$FAILED) {
	                  if (input.substr(peg$currPos, 5) === peg$c26) {
	                    s5 = peg$c26;
	                    peg$currPos += 5;
	                  } else {
	                    s5 = peg$FAILED;
	                    if (peg$silentFails === 0) {
	                      peg$fail(peg$c27);
	                    }
	                  }
	                  if (s5 !== peg$FAILED) {
	                    s6 = [];
	                    if (input.length > peg$currPos) {
	                      s7 = input.charAt(peg$currPos);
	                      peg$currPos++;
	                    } else {
	                      s7 = peg$FAILED;
	                      if (peg$silentFails === 0) {
	                        peg$fail(peg$c28);
	                      }
	                    }
	                    if (s7 !== peg$FAILED) {
	                      while (s7 !== peg$FAILED) {
	                        s6.push(s7);
	                        if (input.length > peg$currPos) {
	                          s7 = input.charAt(peg$currPos);
	                          peg$currPos++;
	                        } else {
	                          s7 = peg$FAILED;
	                          if (peg$silentFails === 0) {
	                            peg$fail(peg$c28);
	                          }
	                        }
	                      }
	                    } else {
	                      s6 = peg$FAILED;
	                    }
	                    if (s6 !== peg$FAILED) {
	                      peg$savedPos = s0;
	                      s1 = peg$c30(s3, s6);
	                      s0 = s1;
	                    } else {
	                      peg$currPos = s0;
	                      s0 = peg$FAILED;
	                    }
	                  } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                  }
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$FAILED;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	          if (s0 === peg$FAILED) {
	            s0 = peg$currPos;
	            if (input.substr(peg$currPos, 5) === peg$c24) {
	              s1 = peg$c24;
	              peg$currPos += 5;
	            } else {
	              s1 = peg$FAILED;
	              if (peg$silentFails === 0) {
	                peg$fail(peg$c25);
	              }
	            }
	            if (s1 !== peg$FAILED) {
	              s2 = peg$parses();
	              if (s2 !== peg$FAILED) {
	                s3 = peg$parsetag();
	                if (s3 !== peg$FAILED) {
	                  peg$savedPos = s0;
	                  s1 = peg$c31(s3);
	                  s0 = s1;
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$FAILED;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	            if (s0 === peg$FAILED) {
	              s0 = peg$currPos;
	              if (input.substr(peg$currPos, 5) === peg$c24) {
	                s1 = peg$c24;
	                peg$currPos += 5;
	              } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                  peg$fail(peg$c25);
	                }
	              }
	              if (s1 !== peg$FAILED) {
	                peg$savedPos = s0;
	                s1 = peg$c32();
	              }
	              s0 = s1;
	              if (s0 === peg$FAILED) {
	                s0 = peg$currPos;
	                s1 = peg$parsetag();
	                if (s1 !== peg$FAILED) {
	                  peg$savedPos = s0;
	                  s1 = peg$c33(s1);
	                }
	                s0 = s1;
	              }
	            }
	          }
	        }
	      }
	    }

	    return s0;
	  }

	  function peg$parsetag() {
	    var s0, s1, s2, s3, s4, s5;

	    s0 = peg$currPos;
	    if (input.substr(peg$currPos, 5) === peg$c34) {
	      s1 = peg$c34;
	      peg$currPos += 5;
	    } else {
	      s1 = peg$FAILED;
	      if (peg$silentFails === 0) {
	        peg$fail(peg$c35);
	      }
	    }
	    if (s1 !== peg$FAILED) {
	      s2 = [];
	      if (peg$c36.test(input.charAt(peg$currPos))) {
	        s3 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s3 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c37);
	        }
	      }
	      if (s3 !== peg$FAILED) {
	        while (s3 !== peg$FAILED) {
	          s2.push(s3);
	          if (peg$c36.test(input.charAt(peg$currPos))) {
	            s3 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) {
	              peg$fail(peg$c37);
	            }
	          }
	        }
	      } else {
	        s2 = peg$FAILED;
	      }
	      if (s2 !== peg$FAILED) {
	        s3 = peg$parsecolon();
	        if (s3 !== peg$FAILED) {
	          s4 = [];
	          if (peg$c38.test(input.charAt(peg$currPos))) {
	            s5 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s5 = peg$FAILED;
	            if (peg$silentFails === 0) {
	              peg$fail(peg$c39);
	            }
	          }
	          if (s5 !== peg$FAILED) {
	            while (s5 !== peg$FAILED) {
	              s4.push(s5);
	              if (peg$c38.test(input.charAt(peg$currPos))) {
	                s5 = input.charAt(peg$currPos);
	                peg$currPos++;
	              } else {
	                s5 = peg$FAILED;
	                if (peg$silentFails === 0) {
	                  peg$fail(peg$c39);
	                }
	              }
	            }
	          } else {
	            s4 = peg$FAILED;
	          }
	          if (s4 !== peg$FAILED) {
	            s5 = peg$parses();
	            if (s5 !== peg$FAILED) {
	              peg$savedPos = s0;
	              s1 = peg$c40(s2, s4);
	              s0 = s1;
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	    } else {
	      peg$currPos = s0;
	      s0 = peg$FAILED;
	    }
	    if (s0 === peg$FAILED) {
	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 5) === peg$c34) {
	        s1 = peg$c34;
	        peg$currPos += 5;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c35);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = [];
	        if (peg$c36.test(input.charAt(peg$currPos))) {
	          s3 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s3 = peg$FAILED;
	          if (peg$silentFails === 0) {
	            peg$fail(peg$c37);
	          }
	        }
	        if (s3 !== peg$FAILED) {
	          while (s3 !== peg$FAILED) {
	            s2.push(s3);
	            if (peg$c36.test(input.charAt(peg$currPos))) {
	              s3 = input.charAt(peg$currPos);
	              peg$currPos++;
	            } else {
	              s3 = peg$FAILED;
	              if (peg$silentFails === 0) {
	                peg$fail(peg$c37);
	              }
	            }
	          }
	        } else {
	          s2 = peg$FAILED;
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parses();
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c15(s2);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	    }

	    return s0;
	  }

	  function peg$parsetrap() {
	    var s0, s1, s2, s3, s4, s5, s6;

	    s0 = peg$currPos;
	    if (input.substr(peg$currPos, 5) === peg$c41) {
	      s1 = peg$c41;
	      peg$currPos += 5;
	    } else {
	      s1 = peg$FAILED;
	      if (peg$silentFails === 0) {
	        peg$fail(peg$c42);
	      }
	    }
	    if (s1 !== peg$FAILED) {
	      s2 = peg$parses();
	      if (s2 !== peg$FAILED) {
	        s3 = peg$parsetag();
	        if (s3 !== peg$FAILED) {
	          s4 = peg$parses();
	          if (s4 !== peg$FAILED) {
	            s5 = [];
	            s6 = peg$parsedata();
	            if (s6 !== peg$FAILED) {
	              while (s6 !== peg$FAILED) {
	                s5.push(s6);
	                s6 = peg$parsedata();
	              }
	            } else {
	              s5 = peg$FAILED;
	            }
	            if (s5 !== peg$FAILED) {
	              peg$savedPos = s0;
	              s1 = peg$c43(s3, s5);
	              s0 = s1;
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	    } else {
	      peg$currPos = s0;
	      s0 = peg$FAILED;
	    }
	    if (s0 === peg$FAILED) {
	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 5) === peg$c41) {
	        s1 = peg$c41;
	        peg$currPos += 5;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c42);
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parses();
	        if (s2 !== peg$FAILED) {
	          s3 = [];
	          s4 = peg$parsedata();
	          if (s4 !== peg$FAILED) {
	            while (s4 !== peg$FAILED) {
	              s3.push(s4);
	              s4 = peg$parsedata();
	            }
	          } else {
	            s3 = peg$FAILED;
	          }
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c44(s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	    }

	    return s0;
	  }

	  function peg$parsefatal() {
	    var s0, s1, s2, s3;

	    s0 = peg$currPos;
	    if (input.substr(peg$currPos, 6) === peg$c45) {
	      s1 = peg$c45;
	      peg$currPos += 6;
	    } else {
	      s1 = peg$FAILED;
	      if (peg$silentFails === 0) {
	        peg$fail(peg$c46);
	      }
	    }
	    if (s1 !== peg$FAILED) {
	      s2 = peg$parses();
	      if (s2 !== peg$FAILED) {
	        s3 = peg$parsevalue();
	        if (s3 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c47(s3);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	    } else {
	      peg$currPos = s0;
	      s0 = peg$FAILED;
	    }

	    return s0;
	  }

	  function peg$parses() {
	    var s0, s1, s2;

	    s0 = peg$currPos;
	    s1 = [];
	    if (peg$c48.test(input.charAt(peg$currPos))) {
	      s2 = input.charAt(peg$currPos);
	      peg$currPos++;
	    } else {
	      s2 = peg$FAILED;
	      if (peg$silentFails === 0) {
	        peg$fail(peg$c49);
	      }
	    }
	    while (s2 !== peg$FAILED) {
	      s1.push(s2);
	      if (peg$c48.test(input.charAt(peg$currPos))) {
	        s2 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s2 = peg$FAILED;
	        if (peg$silentFails === 0) {
	          peg$fail(peg$c49);
	        }
	      }
	    }
	    if (s1 !== peg$FAILED) {
	      peg$savedPos = s0;
	      s1 = peg$c50();
	    }
	    s0 = s1;

	    return s0;
	  }

	  function peg$parsens() {
	    var s0, s1;

	    s0 = [];
	    if (peg$c51.test(input.charAt(peg$currPos))) {
	      s1 = input.charAt(peg$currPos);
	      peg$currPos++;
	    } else {
	      s1 = peg$FAILED;
	      if (peg$silentFails === 0) {
	        peg$fail(peg$c52);
	      }
	    }
	    if (s1 !== peg$FAILED) {
	      while (s1 !== peg$FAILED) {
	        s0.push(s1);
	        if (peg$c51.test(input.charAt(peg$currPos))) {
	          s1 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s1 = peg$FAILED;
	          if (peg$silentFails === 0) {
	            peg$fail(peg$c52);
	          }
	        }
	      }
	    } else {
	      s0 = peg$FAILED;
	    }

	    return s0;
	  }

	  function peg$parsenull() {
	    var s0;

	    if (peg$c53.test(input.charAt(peg$currPos))) {
	      s0 = input.charAt(peg$currPos);
	      peg$currPos++;
	    } else {
	      s0 = peg$FAILED;
	      if (peg$silentFails === 0) {
	        peg$fail(peg$c54);
	      }
	    }

	    return s0;
	  }

	  function peg$parsecolon() {
	    var s0;

	    if (peg$c55.test(input.charAt(peg$currPos))) {
	      s0 = input.charAt(peg$currPos);
	      peg$currPos++;
	    } else {
	      s0 = peg$FAILED;
	      if (peg$silentFails === 0) {
	        peg$fail(peg$c56);
	      }
	    }

	    return s0;
	  }

	  peg$result = peg$startRuleFunction();

	  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
	    return peg$result;
	  } else {
	    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
	      peg$fail(peg$endExpectation());
	    }

	    throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
	  }
	}

	module.exports = {
	  SyntaxError: peg$SyntaxError,
	  parse: peg$parse
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _desc, _value, _class;

	var _util = __webpack_require__(3);

	var _util2 = _interopRequireDefault(_util);

	var _events = __webpack_require__(25);

	var _events2 = _interopRequireDefault(_events);

	var _rxjs = __webpack_require__(17);

	var _coreDecorators = __webpack_require__(18);

	var _constants = __webpack_require__(22);

	var _Channel = __webpack_require__(26);

	var _Channel2 = _interopRequireDefault(_Channel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var _status = new WeakMap();

	var _channels = new WeakMap();

	var _stream = new WeakMap();

	var _debug = new WeakMap();

	var _closeOnDone = new WeakMap();

	var Connection = (_class = function (_events$EventEmitter) {
	  _inherits(Connection, _events$EventEmitter);

	  function Connection(stream, loginHandler, p) {
	    _classCallCheck(this, Connection);

	    var _this = _possibleConstructorReturn(this, (Connection.__proto__ || Object.getPrototypeOf(Connection)).call(this));

	    _status.set(_this, _constants.CONNECTION.NONE);

	    _channels.set(_this, []);

	    _debug.set(_this, _constants.DEBUG.NONE);

	    _closeOnDone.set(_this, false);

	    var login = stream.read
	    // .do(d=>console.log("Sentence: ",d))
	    .takeWhile(function (o) {
	      return _status.get(_this) !== _constants.CONNECTION.CONNECTED;
	    }).share();

	    _stream.set(_this, stream);

	    var rejectAndClose = function rejectAndClose(d) {
	      p.reject(d);
	      _this.close();
	    };

	    login.filter(function (d) {
	      return d.type === _constants.EVENT.TRAP;
	    }).do(function (t) {
	      _this.emit('trap', t.data);
	      _debug.get(_this) && console.log('Trap during login: ', t.data);
	    }).map(function (t) {
	      return t.data;
	    }).subscribe(rejectAndClose, rejectAndClose);

	    login.filter(function (d) {
	      return d.type === _constants.EVENT.DONE_RET;
	    }).subscribe(function (data) {
	      _status.set(_this, _constants.CONNECTION.CONNECTING);

	      _debug.get(_this) >= _constants.DEBUG.DEBUG && console.log("Got done_ret, building response to ", data);
	      var a = data.data.split('');
	      var challenge = [];
	      while (a.length) {
	        challenge.push(parseInt("0x" + a.shift() + a.shift()));
	      }_debug.get(_this) >= _constants.DEBUG.DEBUG && console.log('Challenge length:' + challenge.length);
	      if (challenge.length != 16) {
	        _status.set(_this, _constants.CONNECTION.ERROR);

	        _debug.get(_this) >= _constants.DEBUG.WARN && console.log(_status.get(_this));
	        stream.sentence.error('Bad Connection Response: ' + data);
	      } else {
	        loginHandler(challenge);
	      }
	    });

	    login.filter(function (d) {
	      return d.type === _constants.EVENT.DONE;
	    }).subscribe(function (d) {
	      _status.set(_this, _constants.CONNECTION.CONNECTED);

	      _debug.get(_this) >= _constants.DEBUG.INFO && console.log('Login complete: Connected');
	      p.resolve(_this);
	    }, rejectAndClose, function () {
	      _debug.get(_this) >= _constants.DEBUG.DEBUG && console.log("Login stream complete");
	    });

	    stream.read.subscribe(null, null, function (e) {
	      _channels.get(_this).forEach(function (c) {
	        return c.close(true);
	      });
	      setTimeout(function () {
	        _this.emit('close', _this);
	      }, 50);
	    });
	    return _this;
	  }

	  _createClass(Connection, [{
	    key: 'close',
	    value: function close() {
	      _debug.get(this) >= _constants.DEBUG.SILLY && console.log("Closing connection through stream");
	      this.emit('close', this);
	      _stream.get(this).close();
	    }

	    /*
	     * @deprecated use debug(level)
	     */

	  }, {
	    key: 'setDebug',
	    value: function setDebug(d) {
	      _debug.set(this, d);

	      return this;
	    }
	  }, {
	    key: 'debug',
	    value: function debug() {
	      if (arguments.length) _debug.set(this, arguments.length <= 0 ? undefined : arguments[0]);else return _debug.get(this);
	      return this;
	    }

	    /** If all channels are closed, close this connection */

	  }, {
	    key: 'closeOnDone',
	    value: function closeOnDone() {
	      if (arguments.length) _closeOnDone.set(this, !!(arguments.length <= 0 ? undefined : arguments[0]));else return _closeOnDone.get(this);
	      return this;
	    }
	  }, {
	    key: 'getChannel',
	    value: function getChannel(id) {
	      return _channels.get(this).filter(function (c) {
	        return c.getId() == id;
	      })[0];
	    }
	  }, {
	    key: 'openChannel',
	    value: function openChannel(id, closeOnDone) {
	      var _this2 = this;

	      _debug.get(this) >= _constants.DEBUG.SILLY && console.log("Connection::OpenChannel");
	      if (!id) {
	        id = +new Date();
	      } else {
	        if (_channels.get(this).some(function (c) {
	          return c.getId() === id;
	        })) throw 'Channel already exists for ID ' + id;
	      }
	      _debug.get(this) >= _constants.DEBUG.SILLY && console.log("Creating proxy stream");
	      var matchId = RegExp("^" + id + "-");
	      var s = {
	        "read": _stream.get(this).read.filter(function (e) {
	          return matchId.test(e.tag);
	        }),
	        "write": function write(d, args) {
	          var cmdTrack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	          if ((typeof d === 'undefined' ? 'undefined' : _typeof(d)) === _constants.STRING_TYPE) d = d.split("\n");
	          if (Array.isArray(d) && d.length) {
	            d.push('.tag=' + id + '-' + cmdTrack);
	            return _stream.get(_this2).write(d, args);
	          } else return;
	        },
	        "close": function close() {
	          var channel = _this2.getChannel(id);
	          if (channel) {
	            _debug.get(_this2) >= _constants.DEBUG.DEBUG && console.log("Closing channel ", id);
	            setTimeout(channel.emit.bind(channel, 'close', channel), 50);
	            _channels.get(_this2).splice(_channels.get(_this2).indexOf(channel), 1);
	            if (_channels.get(_this2).filter(function (c) {
	              return c.status & (_constants.CHANNEL.OPEN | _constants.CHANNEL.RUNNING);
	            }).length === 0 && _closeOnDone.get(_this2)) _this2.close();
	          } else _debug.get(_this2) >= _constants.DEBUG.WARN && console.log("Could not find channel %s when trying to close", id);
	        },
	        "done": function done() {
	          // If Connection closeOnDone, then check if all channels are done.
	          if (_closeOnDone.get(_this2)) {
	            var cl = _channels.get(_this2).filter(function (c) {
	              return c.status & (_constants.CHANNEL.OPEN | _constants.CHANNEL.RUNNING);
	            });
	            if (cl.length) return false;
	            _debug.get(_this2) >= _constants.DEBUG.DEBUG && console.log("Channel done (%s)", id);
	            _channels.get(_this2).filter(function (c) {
	              return c.status & _constants.CHANNEL.DONE;
	            }).forEach(function (c) {
	              return console.log("Closing...", c);
	            });
	            return true;
	          }
	          return false;
	        }
	      };
	      var c;
	      _debug.get(this) >= _constants.DEBUG.INFO && console.log("Creating channel ", id);
	      _channels.get(this).push(c = new _Channel2.default(id, s, _debug.get(this), closeOnDone));
	      _debug.get(this) >= _constants.DEBUG.INFO && console.log("Channel %s Created", id);
	      return c;
	    }
	  }, {
	    key: 'connected',
	    get: function get() {
	      return !!(_status.get(this) & (_constants.CONNECTION.CONNECTED | _constants.CONNECTION.WAITING | _constants.CONNECTION.CLOSING));
	    }
	  }]);

	  return Connection;
	}(_events2.default.EventEmitter), (_applyDecoratedDescriptor(_class.prototype, 'openChannel', [_coreDecorators.autobind], Object.getOwnPropertyDescriptor(_class.prototype, 'openChannel'), _class.prototype)), _class);
	exports.default = Connection;
	module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = require("events");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _util = __webpack_require__(3);

	var _util2 = _interopRequireDefault(_util);

	var _events = __webpack_require__(25);

	var _events2 = _interopRequireDefault(_events);

	var _rxjs = __webpack_require__(17);

	var _constants = __webpack_require__(22);

	var _Util = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// console.log2=console.log;
	// console.log=function(...args) {
	//     const stack=new Error().stack.split('\n');
	//     const file = (stack[2].match(/\(([^:]+:\d+)/)||['',''])[1].split("/").pop()+": "+typeof args[0]==="string"?args.shift():'';
	//     console.log2(file,...args);
	// }

	var _id = new WeakMap();

	var _status = new WeakMap();

	var _closed = new WeakMap();

	var _stream = new WeakMap();

	var _debug = new WeakMap();

	var _closeOnDone = new WeakMap();

	var _closeOnTrap = new WeakMap();

	var _bufferedStream = new WeakMap();

	var _data = new WeakMap();

	var _read = new WeakMap();

	var _trap = new WeakMap();

	var _write = new WeakMap();

	var _sync = new WeakMap();

	var _dataBuffer = new WeakMap();

	var _buffer = new WeakMap();

	var _cmdCount = new WeakMap();

	var _cmd = new WeakMap();

	var _done = new WeakMap();

	var _clearCommand = new WeakMap();

	var _lastCommand = new WeakMap();

	var _getCommand = new WeakMap();

	var _registerCommand = new WeakMap();

	var _getStreamByEventType = new WeakMap();

	var _setupEventSubscription = new WeakMap();

	var Channel = function (_events$EventEmitter) {
	    _inherits(Channel, _events$EventEmitter);

	    /** 
	      * Create new channel on a connection. This should not be called manually. Use Connection.openChannel
	      * @constructor
	      * @param {string|number} id ID of the channel
	      * @param {object} stream stream object representing link to connection.
	      * @param {number} debug The debug level.
	      * @param {boolean} closeOnDone If the channel should close itself when the next done event occurs, and there are no more commands to run.
	      */


	    /**
	      * Command ID tracking.
	      * @private
	      * @instance
	      * @member {Object}
	      * @memberof Channel
	      */


	    /** Command buffer. All output commands go through this buffer.
	     * @private
	     * @instance
	     * @member {Array} buffer
	     * @memberof Channel
	     */


	    /** If commands should be synchronous.
	     * @private
	     * @instance
	     * @member {boolean} sync
	     * @memberof Channel
	    **/


	    /** Trap stream
	     * @private
	     * @instance
	     * @member {Observable} trap
	     * @memberof Channel
	    **/


	    /** "data stream" for this channel. no other sentences execpt data sentences get to this point.
	     * @private
	     * @instance
	     * @member {Observable} data
	     * @memberof Channel
	    **/


	    /** If wether to call close on this channel when trap event occurs.
	     * @private
	     * @instance
	     * @member {boolean} closeOnTrap
	     * @memberof Channel
	    **/


	    /** Current Debug level for this channel.
	     * @private
	     * @instance
	     * @member {int} debug
	     * @memberof Channel
	    **/


	    /** ID of the channel. 
	     * @private
	     * @instance
	     * @member {boolean} id
	     * @memberof Channel
	    **/
	    function Channel(id, stream, debug, closeOnDone) {
	        _classCallCheck(this, Channel);

	        var _this = _possibleConstructorReturn(this, (Channel.__proto__ || Object.getPrototypeOf(Channel)).call(this));

	        _status.set(_this, _constants.CHANNEL.OPEN);

	        _closed.set(_this, false);

	        _debug.set(_this, _constants.DEBUG.NONE);

	        _closeOnDone.set(_this, true);

	        _closeOnTrap.set(_this, false);

	        _write.set(_this, new _rxjs.Subject());

	        _sync.set(_this, true);

	        _dataBuffer.set(_this, {});

	        _buffer.set(_this, []);

	        _cmdCount.set(_this, 0);

	        _cmd.set(_this, {});

	        _clearCommand.set(_this, function (commandId) {
	            if ((typeof commandId === 'undefined' ? 'undefined' : _typeof(commandId)) === _typeof({})) {
	                if (commandId.cmd) return _clearCommand.get(this)(commandId.cmd.id);
	                if (commandId.id) return _clearCommand.get(this)(commandId.id);
	                return null;
	            }
	            _debug.get(this) >= _constants.DEBUG.DEBUG && console.log("Clearing command cache for #", commandId);
	            var cmd = _cmd.get(this)[commandId];
	            if (!cmd) return;
	            delete cmd.promise.cmd;
	            delete cmd.promise.resolve;
	            delete cmd.promise.reject;
	            delete cmd.promise;
	            delete _cmd.get(this)[commandId];
	            if (!Object.keys(_cmd.get(this)).length) {
	                if (_closeOnDone.get(this)) this.close();
	            }
	        }.bind(_this));

	        _lastCommand.set(_this, function (commandId) {
	            return _cmd.get(this)[commandId - 1];
	        }.bind(_this));

	        _getCommand.set(_this, function (commandId) {
	            if (!commandId) return null;
	            if ((typeof commandId === 'undefined' ? 'undefined' : _typeof(commandId)) === _typeof({})) {
	                if (commandId.cmd) return commandId.cmd;else return null;
	            }
	            return _cmd.get(this)[commandId];
	        }.bind(_this));

	        _registerCommand.set(_this, function (command, args, promise) {
	            _cmdCount.set(this, _cmdCount.get(this) + 1);

	            var commandId = _cmdCount.get(this);
	            _cmd.get(this)[commandId] = { id: commandId, cmd: { id: commandId, command: command, args: args }, promise: promise };
	            (function (id, p) {
	                var _this2 = this;

	                var race = _rxjs.Observable.race(_done.get(this).filter(function (data) {
	                    return data.cmd && data.cmd.id === id;
	                })
	                // .do(
	                //     d=>console.log("*** Done in %s:%s",d.cmd.id,id)
	                // )
	                .take(1), _trap.get(this).filter(function (data) {
	                    return data.cmd && data.cmd.id === id;
	                })
	                // .do(
	                //     d=>console.log("*** Trap in %s:%s",d.cmd.id,id)
	                // )
	                .take(1)).take(1);

	                race.partition(function (data) {
	                    return data.type == _constants.EVENT.TRAP || data.type === _constants.EVENT.TRAP_TAG;
	                }).reduce(function (r, o, i) {
	                    if (i == 0) {
	                        o.subscribe(function (error) {
	                            _debug.get(_this2) >= _constants.DEBUG.DEBUG && console.error("*** Register Command: trap", id, error);

	                            _status.set(_this2, _constants.CHANNEL.DONE);

	                            if (_closeOnTrap.get(_this2)) {
	                                _status.set(_this2, _constants.CHANNEL.CLOSING);

	                                _debug.get(_this2) >= _constants.DEBUG.DEBUG && console.log('Channel (%s):: read-done catch CLOSING', _id.get(_this2));
	                                _this2.close(true);
	                            }
	                            p.reject(error);
	                            _this2.emit('trap', error);
	                        }, null);
	                    } else return o;
	                }, {});

	                var isListen = command.split('/').indexOf('listen') > 0;
	                _data.get(this).filter(function (data) {
	                    return data.cmd.id === id;
	                }).takeUntil(race).do(function (d) {
	                    return _debug.get(_this2) >= _constants.DEBUG.SILLY && console.log("*** Data in %s:%s", d.cmd.id, id);
	                }).reduce(function (acc, d) {
	                    if (d.data && !isListen) acc.data = acc.data.concat([d.data]);
	                    return acc;
	                }, { cmd: _cmd.get(this)[id].cmd, tag: _id.get(this), data: [] }).do(function (d) {
	                    return _debug.get(_this2) >= _constants.DEBUG.SILLY && console.log("*** Reduced Data in ", d);
	                }).takeUntil(race.filter(function (data) {
	                    return data.type == _constants.EVENT.TRAP || data.type === _constants.EVENT.TRAP_TAG;
	                })).subscribe(function (data) {
	                    _debug.get(_this2) >= _constants.DEBUG.SILLY && console.log("*** Register Command: subscribe", id, data);

	                    _status.set(_this2, _constants.CHANNEL.DONE);

	                    _bufferedStream.get(_this2).next(data);
	                    p.resolve(data);
	                    _this2.emit('done', data);
	                }, function (error) {
	                    _debug.get(_this2) >= _constants.DEBUG.SILLY && console.error("*** Register Command: error", id, error);
	                },
	                // this should happen for every command
	                function () {
	                    _debug.get(_this2) >= _constants.DEBUG.SILLY && console.log("*** Register Command: complete", commandId);
	                    setTimeout(function () {
	                        return _clearCommand.get(_this2)(id);
	                    }, 50); // make sure all promises complete before running this.
	                });
	            }).bind(this)(commandId, promise);
	            return _cmd.get(this)[commandId].cmd;
	        }.bind(_this));

	        _getStreamByEventType.set(_this, function (event) {
	            switch (event) {
	                case _constants.EVENT.DONE:
	                    return _bufferedStream.get(this);
	                case _constants.EVENT.TRAP:
	                    return _trap.get(this);
	                case _constants.EVENT.FATAL:
	                    return this.fatal;
	                default:
	                    return _read.get(this);
	            }
	        }.bind(_this));

	        _setupEventSubscription.set(_this, function (event, stream) {
	            var _this3 = this;

	            if (this.listeners(event)) return;
	            // take from the stream until there are no more event listeners for that event.
	            var listenerStream = stream.takeWhile(function (o) {
	                return !_this3.listeners(event);
	            });
	            listenerStream.subscribe(function (e) {
	                _this3.emit(event, e);
	            });
	            return listenerStream;
	        }.bind(_this));

	        _debug.set(_this, debug);

	        _debug.get(_this) & _constants.DEBUG.SILLY && console.log('Channel::New', [].slice.call(arguments));

	        _closeOnDone.set(_this, (typeof closeOnDone === 'undefined' ? 'undefined' : _typeof(closeOnDone)) === _typeof(true) ? closeOnDone : _closeOnDone.get(_this));

	        _id.set(_this, id); // hold a copy.

	        if (_status.get(_this) & (_constants.CHANNEL.CLOSING | _constants.CHANNEL.CLOSED)) return _possibleConstructorReturn(_this); // catch bad status

	        _stream.set(_this, stream); // Hold a copy
	        // Stream for reading everything.


	        _read.set(_this, stream.read.takeWhile(function (data) {
	            return !(_status.get(_this) & _constants.CHANNEL.CLOSED);
	        }).do(function (e) {
	            return _debug.get(_this) >= _constants.DEBUG.SILLY && console.log('Channel (%s)::%s Sentence on channel ', e.tag);
	        }).flatMap(function (data) {
	            var cmd = _this.getCommandId(data);
	            var d = _extends({}, data, { tag: data.tag.substring(0, data.tag.lastIndexOf('-')), cmd: (_getCommand.get(_this)(cmd) || { cmd: null }).cmd });
	            if (d.type == _constants.EVENT.DONE_RET || d.type === _constants.EVENT.DONE_RET_TAG) {
	                d.data = d.data;
	                var d2 = _extends({}, d, { type: _constants.EVENT.DATA });
	                return _rxjs.Observable.of(d2).concat(_rxjs.Observable.of(d));
	            }
	            return _rxjs.Observable.of(d);
	        }).share());

	        // Stream for sentences with data.


	        _data.set(_this, _this.createStream(_read.get(_this), [_constants.EVENT.DATA, _constants.EVENT.DATA_RET, _constants.EVENT.DATA_RET_TAG]).share());

	        // Stream for signaling when done.


	        _done.set(_this, _this.createStream(_read.get(_this), [_constants.EVENT.DONE, _constants.EVENT.DONE_RET, _constants.EVENT.DONE_TAG]).share());

	        // Stream for all traps from device.


	        _trap.set(_this, _read.get(_this).filter(function (e) {
	            return e.type == _constants.EVENT.TRAP || e.type === _constants.EVENT.TRAP_TAG;
	        }).do(function (e) {
	            return _debug.get(_this) >= _constants.DEBUG.DEBUG && console.log('Channel (%s)::TRAP ', id);
	        }).share());

	        _read.get(_this).filter(function (e) {
	            return e.type == _constants.EVENT.FATAL;
	        }).subscribe(function (e) {
	            _debug.get(_this) >= _constants.DEBUG.DEBUG && console.log('Channel (%s)::FATAL ', id);

	            _status.set(_this, _constants.CHANNEL.CLOSING);

	            _this.close();
	        });

	        _bufferedStream.set(_this, new _rxjs.Subject());

	        return _this;
	    }

	    /**
	     * 
	     * @param {string} command The command to write to the device on this channel.
	     * @param {*} args Arguments to pass as part of the command.
	     */


	    /** Data buffer per command execution
	     * @private
	     * @instance
	     * @member {Object} buffer
	     * @memberof Channel
	    **/


	    /** write stream
	     * @private
	     * @instance
	     * @member {Subject} write
	     * @memberof Channel
	    **/


	    /** contains all sentences for this stream
	     * @private
	     * @instance
	     * @member {Observable} read
	     * @memberof Channel
	    **/


	    /** The buffered stream. Used to hold all results until done or trap events occur.
	     * @private
	     * @instance
	     * @member {Observable} bufferedStream
	     * @memberof Channel
	    **/


	    /** If whether to call close on this channel when done event occurs, and there are no commands in the queue to run.
	     * @private
	     * @instance
	     * @member {boolean} closeOnDone
	     * @memberof Channel
	    **/


	    /** In/Out stream object for this channel.
	     * @private
	     * @instance
	     * @member {Object} stream
	     * @memberof Channel
	    **/


	    /** Current channel status. See Constants for list of channel status (CHANNEL)
	     * @private
	     * @instance
	     * @member {boolean} id
	     * @memberof Channel
	    **/


	    _createClass(Channel, [{
	        key: 'write',
	        value: function write(command) {
	            var _this4 = this;

	            var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	            if (_status.get(this) & (_constants.CHANNEL.CLOSED | _constants.CHANNEL.CLOSING)) {
	                _debug.get(this) >= _constants.DEBUG.WARN && console.error("Cannot write on closed or closing channel");
	                var p = new Promise(function (resolve, reject) {
	                    return reject({ tag: _id.get(_this4), data: { message: "Cannot write on closed or closing channel" }, cmd: { command: command, args: args } });
	                });
	                // p.catch(e=>{console.error(e.data.message)});
	                return p;
	            }
	            if (command === '/cancel') {
	                Object.keys(_cmd.get(this)).forEach(function (id) {
	                    _stream.get(_this4).write(command, args, id);
	                });
	                return Promise.resolve({ tag: _id.get(this), data: { message: "/cancel sent." } });
	            }

	            var _getUnwrappedPromise = (0, _Util.getUnwrappedPromise)(),
	                promise = _getUnwrappedPromise.promise,
	                resolve = _getUnwrappedPromise.resolve,
	                reject = _getUnwrappedPromise.reject;

	            promise.resolve = resolve;
	            promise.reject = reject;
	            // Add the command to the registry.
	            var cmd = _registerCommand.get(this)(command, args, promise);
	            var commandId = cmd.id;
	            promise.cmd = cmd;

	            if (Object.keys(_cmd.get(this)).length - 1 == 0 && !(_sync.get(this) && _status.get(this) & _constants.CHANNEL.RUNNING)) {
	                // console.log("There are no commands in the buffer, but channel is in running state while sync enabled.");
	                _status.set(this, _constants.CHANNEL.RUNNING);

	                _debug.get(this) >= _constants.DEBUG.INFO && console.log("Writing on channel %s", _id.get(this), command, args);
	                _stream.get(this).write(command, args, commandId);
	            } else {
	                var last = _lastCommand.get(this)(commandId);
	                // If we are in sync mode, wait until the command is complete
	                if (_sync.get(this)) last.promise.then(function () {
	                    _status.set(_this4, _constants.CHANNEL.RUNNING);

	                    _stream.get(_this4).write(command, args, commandId);
	                }).catch(function () {
	                    _stream.get(_this4).write(command, args, commandId);
	                });
	                // Otherwise since the last command was sent, we can send this one now.
	                else {
	                        _status.set(this, _constants.CHANNEL.RUNNING);

	                        _stream.get(this).write(command, args, commandId);
	                    }
	            }

	            return promise;
	        }

	        /**
	         * Clear the command from cache
	         * @param {number} commandId 
	         */

	        /**
	         * Get the last command relative to the commandId
	         * @param {number} commandId 
	         */


	        /**
	         * 
	         * @param {string} command Command to send to device
	         * @param {array} args Arguments for command
	         * @param {object} promise object containing resolve and reject functions.
	         */

	    }, {
	        key: 'createStream',


	        /**
	         * Create a stream filtered by list of event types.
	         * @param {Observable} stream The stream representing the incoming data
	         * @param {Array} events list of events to filter by
	         * @return {Observable} The incoming stream filtered to only the packets having data.
	         */
	        value: function createStream(stream, events) {
	            var _this5 = this;

	            return _read.get(this).filter(function (e) {
	                return events.indexOf(e.type) != -1;
	            }).do(function (e) {
	                return _debug.get(_this5) >= _constants.DEBUG.DEBUG && console.log('Channel (%s)::%s flatMap', e.tag, e.type);
	            }).flatMap(function (d) {
	                return _rxjs.Observable.of(d);
	                // this.dataBuffer[d.cmd.id].push(d.data);
	            });
	        }
	        /**
	         * 
	         * @param {Object} data Sentence object from read stream
	         * @return {String} Command ID of sentence.
	         */

	    }, {
	        key: 'getCommandId',
	        value: function getCommandId(data) {
	            if (!data) return null;
	            if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === _typeof({})) return this.getCommandId(data.tag);
	            return data.substring(data.lastIndexOf('-') + 1);
	        }

	        // status() { return this.status }

	    }, {
	        key: 'close',
	        value: function close(force) {
	            var _this6 = this;

	            if (_status.get(this) & _constants.CHANNEL.RUNNING) {
	                if (force) Object.keys(_cmd.get(this)).forEach(function (id) {
	                    _stream.get(_this6).write('/cancel', [], id);
	                });

	                _closeOnDone.set(this, true);

	                _sync.set(this, true);

	                _status.set(this, _constants.CHANNEL.CLOSING);

	                return;
	            }
	            if (_status.get(this) & _constants.CHANNEL.CLOSED) return;

	            _status.set(this, _constants.CHANNEL.CLOSED);

	            _debug.get(this) >= _constants.DEBUG.INFO && console.log('Channel (%s)::CLOSED', _id.get(this));
	            _bufferedStream.get(this).complete();
	            _stream.get(this).close();
	            this.removeAllListeners(_constants.EVENT.DONE);
	            this.removeAllListeners(_constants.EVENT.DATA);
	            this.removeAllListeners(_constants.EVENT.TRAP);
	        }

	        /** Data stream returns each sentence from the device as it is received. **/

	    }, {
	        key: 'sync',


	        /**
	         * Commands are sent to the device in a synchronous manor. This is enabled by default.
	         * @param {sync} sync If passed, this sets the value of sync.
	         * @return If sync parameter is not passed, the value of sync is returned. Otherwise this channel object is returned.
	         */
	        value: function sync() {
	            if (arguments.length) {
	                _sync.set(this, !!(arguments.length <= 0 ? undefined : arguments[0]));

	                return this;
	            }
	            return _sync.get(this);
	        }

	        /**
	         * 
	         * @param {Observable} stream Take incoming commands to write to this channel from the provided stream. The channel will stop taking commands if a fatal error occurs, or if the channel is closing or closed.
	         * 
	         */

	    }, {
	        key: 'pipeFrom',
	        value: function pipeFrom(stream) {
	            var _this7 = this;

	            if (_status.get(this) & (_constants.CHANNEL.DONE | _constants.CHANNEL.OPEN)) {
	                _status.set(this, _constants.CHANNEL.RUNNING);

	                stream.takeWhile(function (o) {
	                    return !(_status.get(_this7) & (_constants.CHANNEL.FATAL | _constants.CHANNEL.CLOSING | _constants.CHANNEL.CLOSED));
	                }).subscribe(function (d) {
	                    return _write.get(_this7)(d);
	                }, function () {
	                    _status.set(_this7, _constants.CHANNEL.DONE);

	                    _stream.get(_this7).close();
	                }, function () {
	                    _status.set(_this7, _constants.CHANNEL.DONE);

	                    _stream.get(_this7).close();
	                });
	            }
	        }
	    }, {
	        key: 'getId',
	        value: function getId() {
	            return _id.get(this);
	        }
	    }, {
	        key: 'on',
	        value: function on(event, func) {
	            var ret = _get(Channel.prototype.__proto__ || Object.getPrototypeOf(Channel.prototype), 'on', this).call(this, event, func);
	            _setupEventSubscription.get(this)(event, _getStreamByEventType.get(this)(event));
	            return ret;
	        }
	    }, {
	        key: 'addEventListener',
	        value: function addEventListener(event, func) {
	            var ret = _get(Channel.prototype.__proto__ || Object.getPrototypeOf(Channel.prototype), 'addEventListener', this).call(this, event, func);
	            _setupEventSubscription.get(this)(event, _getStreamByEventType.get(this)(event));
	            return ret;
	        }
	    }, {
	        key: 'once',
	        value: function once(event, func) {
	            var ret = _get(Channel.prototype.__proto__ || Object.getPrototypeOf(Channel.prototype), 'once', this).call(this, event, func);
	            _setupEventSubscription.get(this)(event, _getStreamByEventType.get(this)(event));
	            return ret;
	        }

	        /**
	         * @param {String} event The event name to map to an observable stream.
	         * @return Observable stream.
	         */


	        /**
	         * @param {String} event The name of the event to setup for emitting.
	         * @param {Observable} stream The stream to listen for events.
	         * @return {Observable} Stream that will send out a copy of its input as long as there are event callbacks for the event requested.
	         */

	    }, {
	        key: 'closeOnDone',


	        /** When the done sentence arrives, close the channel. This only works in synchronous mode. **/
	        value: function closeOnDone() {
	            if (arguments.length) _closeOnDone.set(this, !!(arguments.length <= 0 ? undefined : arguments[0]));else _closeOnDone.get(this);
	            return this;
	        }

	        /** If trap occurs, consider it closed. **/

	    }, {
	        key: 'closeOnTrap',
	        value: function closeOnTrap() {
	            if (arguments.length) _closeOnTrap.set(this, !!(arguments.length <= 0 ? undefined : arguments[0]));else return _closeOnTrap.get(this);
	            return this;
	        }
	    }, {
	        key: 'data',
	        get: function get() {
	            return _data.get(this);
	        }

	        /** Done stream buffers every sentence and returns all sentences at once.
	            Don't use this stream when "listen"ing to data. Done never comes on a watch/listen command.
	            A trap signals the end of the data of a listen command.
	         **/

	    }, {
	        key: 'done',
	        get: function get() {
	            return _bufferedStream.get(this);
	        }

	        /** When a trap occurs, the trap sentence flows through this stream **/

	    }, {
	        key: 'trap',
	        get: function get() {
	            // TRAP_TAG is the only one that *should* make it here.
	            return _trap.get(this);
	        }

	        /** This is the raw stream. Everything for this channel comes through here. **/

	    }, {
	        key: 'stream',
	        get: function get() {
	            return _read.get(this);
	        }

	        /**
	         * Get the current status of this channel.
	         * @return The status code
	         */

	    }, {
	        key: 'status',
	        get: function get() {
	            return _status.get(this);
	        }
	    }]);

	    return Channel;
	}(_events2.default.EventEmitter);

	exports.default = Channel;
	module.exports = exports['default'];

/***/ })
/******/ ])
});
;