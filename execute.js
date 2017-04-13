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

	__webpack_require__(60); 
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);

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


/***/ },
/* 1 */
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
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
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
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
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
/* 43 */
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
/* 44 */
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
/* 45 */
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
/* 46 */
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
/* 47 */
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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
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
/* 53 */
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
/* 54 */
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
/* 55 */
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
/* 56 */
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
/* 57 */
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
/* 58 */
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
/* 59 */
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

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.0.0 | (c) jQuery Foundation | jquery.org/license */
	!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.0.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return a&&"[object Object]"===k.call(a)?(b=e(a))?(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n):!0:!1},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;d>f;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a)?(d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e):void 0},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"===c||r.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\x00"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[0>c?c+b:c]}),even:pa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,e>i&&ya(a.slice(i,e)),f>e&&ya(a=a.slice(e)),f>e&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;d>b;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;d>b;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(f>b)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(1>=b&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){
	return j.call(r(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;g>f;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;g>f;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;d>c;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;o>n;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){return this.originalEvent?b(this.originalEvent):void 0}:function(){return this.originalEvent?this.originalEvent[a]:void 0},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==va()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===va()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&r.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;m>l;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;i>l;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;e>d;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;e>d;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),0>=d||null==d){if(d=Ma(a,b,f),(0>d||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){return c?!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)}):void 0},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){return b?(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;e>g;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);g>f;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;e>d;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c);
	}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){return r.isArray(b)?a.checked=r.inArray(r(a).val(),b)>-1:void 0}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?r.event.trigger(a,b,c,!0):void 0}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",0>b&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;return o.cors||Pb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){return c?(c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c):void 0})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"=="function"&&__webpack_require__(61)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return r}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});


/***/ },
/* 61 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 62 */
/***/ function(module, exports) {

	/*
	 AngularJS v1.6.0
	 (c) 2010-2016 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(A){'use strict';function H(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.6.0/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var f=encodeURIComponent,e;e=arguments[d];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=f(e)}return new b(c)}}function ta(a){if(null==a||Wa(a))return!1;if(G(a)||y(a)||F&&a instanceof
	F)return!0;var b="length"in Object(a)&&a.length;return W(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function q(a,b,d){var c,f;if(a)if(B(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(G(a)||ta(a)){var e="object"!==typeof a;c=0;for(f=a.length;c<f;c++)(e||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(Cc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
	b.call(d,a[c],c,a);else for(c in a)va.call(a,c)&&b.call(d,a[c],c,a);return a}function Dc(a,b,d){for(var c=Object.keys(a).sort(),f=0;f<c.length;f++)b.call(d,a[c[f]],c[f]);return c}function Ec(a){return function(b,d){a(d,b)}}function he(){return++qb}function Rb(a,b,d){for(var c=a.$$hashKey,f=0,e=b.length;f<e;++f){var g=b[f];if(E(g)||B(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&E(n)?ea(n)?a[m]=new Date(n.valueOf()):Xa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
	Sb(n)?a[m]=n.clone():(E(a[m])||(a[m]=G(n)?[]:{}),Rb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function Q(a){return Rb(a,wa.call(arguments,1),!1)}function ie(a){return Rb(a,wa.call(arguments,1),!0)}function X(a){return parseInt(a,10)}function Tb(a,b){return Q(Object.create(a),b)}function v(){}function Ya(a){return a}function fa(a){return function(){return a}}function Ub(a){return B(a.toString)&&a.toString!==la}function x(a){return"undefined"===typeof a}function u(a){return"undefined"!==
	typeof a}function E(a){return null!==a&&"object"===typeof a}function Cc(a){return null!==a&&"object"===typeof a&&!Fc(a)}function y(a){return"string"===typeof a}function W(a){return"number"===typeof a}function ea(a){return"[object Date]"===la.call(a)}function B(a){return"function"===typeof a}function Xa(a){return"[object RegExp]"===la.call(a)}function Wa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function Ia(a){return"boolean"===typeof a}function je(a){return a&&W(a.length)&&
	ke.test(la.call(a))}function Sb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function le(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function xa(a){return L(a.nodeName||a[0]&&a[0].nodeName)}function $a(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Fa(a,b){function d(a,b){var d=b.$$hashKey,e;if(G(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(Cc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
	(b[e]=c(a[e]));else for(e in a)va.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!E(a))return a;var b=e.indexOf(a);if(-1!==b)return g[b];if(Wa(a)||Za(a))throw Ga("cpws");var b=!1,c=f(a);void 0===c&&(c=G(a)?[]:Object.create(Fc(a)),b=!0);e.push(a);g.push(c);return b?d(a,c):c}function f(a){switch(la.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer),
	a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(B(a.cloneNode))return a.cloneNode(!0)}
	var e=[],g=[];if(b){if(je(b)||"[object ArrayBuffer]"===la.call(b))throw Ga("cpta");if(a===b)throw Ga("cpi");G(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});e.push(a);g.push(b);return d(a,b)}return c(a)}function ma(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(G(a)){if(!G(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!ma(a[c],b[c]))return!1;return!0}}else{if(ea(a))return ea(b)?ma(a.getTime(),
	b.getTime()):!1;if(Xa(a))return Xa(b)?a.toString()===b.toString():!1;if(Za(a)||Za(b)||Wa(a)||Wa(b)||G(b)||ea(b)||Xa(b))return!1;d=T();for(c in a)if("$"!==c.charAt(0)&&!B(a[c])){if(!ma(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&u(b[c])&&!B(b[c]))return!1;return!0}return!1}function ab(a,b,d){return a.concat(wa.call(b,d))}function bb(a,b){var d=2<arguments.length?wa.call(arguments,2):[];return!B(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,
	ab(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Gc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Wa(b)?d="$WINDOW":b&&A.document===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function cb(a,b){if(!x(a))return W(b)||(b=b?2:null),JSON.stringify(a,Gc,b)}function Hc(a){return y(a)?JSON.parse(a):a}function Ic(a,b){a=a.replace(me,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return ga(d)?b:d}function Vb(a,
	b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=Ic(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ya(a){a=F(a).clone();try{a.empty()}catch(b){}var d=F("<div>").append(a).html();try{return a[0].nodeType===Ja?L(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+L(b)})}catch(c){return L(d)}}function Jc(a){try{return decodeURIComponent(a)}catch(b){}}function Kc(a){var b={};q((a||"").split("&"),function(a){var c,f,e;a&&(f=a=a.replace(/\+/g,"%20"),
	c=a.indexOf("="),-1!==c&&(f=a.substring(0,c),e=a.substring(c+1)),f=Jc(f),u(f)&&(e=u(e)?Jc(e):!0,va.call(b,f)?G(b[f])?b[f].push(e):b[f]=[b[f],e]:b[f]=e))});return b}function Wb(a){var b=[];q(a,function(a,c){G(a)?q(a,function(a){b.push(ia(c,!0)+(!0===a?"":"="+ia(a,!0)))}):b.push(ia(c,!0)+(!0===a?"":"="+ia(a,!0)))});return b.length?b.join("&"):""}function db(a){return ia(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ia(a,b){return encodeURIComponent(a).replace(/%40/gi,
	"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ne(a,b){var d,c,f=Ka.length;for(c=0;c<f;++c)if(d=Ka[c]+b,y(d=a.getAttribute(d)))return d;return null}function oe(a,b){var d,c,f={};q(Ka,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Ka,function(b){b+="app";var f;!d&&(f=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=f,c=f.getAttribute(b))});d&&(pe?(f.strictDi=null!==ne(d,"strict-di"),
	b(d,c?[c]:[],f)):A.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Lc(a,b,d){E(d)||(d={});d=Q({strictDi:!1},d);var c=function(){a=F(a);if(a.injector()){var c=a[0]===A.document?"document":ya(a);throw Ga("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
	b.unshift("ng");c=eb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},f=/^NG_ENABLE_DEBUG_INFO!/,e=/^NG_DEFER_BOOTSTRAP!/;A&&f.test(A.name)&&(d.debugInfoEnabled=!0,A.name=A.name.replace(f,""));if(A&&!e.test(A.name))return c();A.name=A.name.replace(e,"");Z.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};B(Z.resumeDeferredBootstrap)&&Z.resumeDeferredBootstrap()}function qe(){A.name=
	"NG_ENABLE_DEBUG_INFO!"+A.name;A.location.reload()}function re(a){a=Z.element(a).injector();if(!a)throw Ga("test");return a.get("$$testability")}function Mc(a,b){b=b||"_";return a.replace(se,function(a,c){return(c?b:"")+a.toLowerCase()})}function te(){var a;if(!Nc){var b=rb();(na=x(b)?A.jQuery:b?A[b]:void 0)&&na.fn.on?(F=na,Q(na.fn,{scope:Na.scope,isolateScope:Na.isolateScope,controller:Na.controller,injector:Na.injector,inheritedData:Na.inheritedData}),a=na.cleanData,na.cleanData=function(b){for(var c,
	f=0,e;null!=(e=b[f]);f++)(c=na._data(e,"events"))&&c.$destroy&&na(e).triggerHandler("$destroy");a(b)}):F=U;Z.element=F;Nc=!0}}function fb(a,b,d){if(!a)throw Ga("areq",b||"?",d||"required");return a}function sb(a,b,d){d&&G(a)&&(a=a[a.length-1]);fb(B(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Oa(a,b){if("hasOwnProperty"===a)throw Ga("badname",b);}function Oc(a,b,d){if(!b)return a;b=b.split(".");for(var c,f=a,e=b.length,g=0;g<e;g++)c=
	b[g],a&&(a=(f=a)[c]);return!d&&B(a)?bb(f,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,f=1;b!==d&&(b=b.nextSibling);f++)if(c||a[f]!==b)c||(c=F(wa.call(a,0,f))),c.push(b);return c||a}function T(){return Object.create(null)}function Xb(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!Ub(a)||G(a)||ea(a)?cb(a):a.toString()}return a}function ue(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=H("$injector"),c=H("ng");a=b(a,"angular",Object);a.$$minErr=
	a.$$minErr||H;return b(a,"module",function(){var a={};return function(e,g,h){if("hasOwnProperty"===e)throw c("badname","module");g&&a.hasOwnProperty(e)&&(a[e]=null);return b(a,e,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return C}}function b(a,d,f){f||(f=c);return function(b,c){c&&B(c)&&(c.$$moduleName=e);f.push([a,d,arguments]);return C}}if(!g)throw d("nomod",e);var c=[],f=[],p=[],t=a("$injector","invoke","push",f),C={_invokeQueue:c,_configBlocks:f,_runBlocks:p,
	requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",f),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:t,run:function(a){p.push(a);return this}};h&&t(h);return C})}})}
	function ja(a,b){if(G(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(E(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function ve(a){var b=[];return JSON.stringify(a,function(a,c){c=Gc(a,c);if(E(c)){if(0<=b.indexOf(c))return"...";b.push(c)}return c})}function we(a){Q(a,{bootstrap:Lc,copy:Fa,extend:Q,merge:ie,equals:ma,element:F,forEach:q,injector:eb,noop:v,bind:bb,toJson:cb,fromJson:Hc,identity:Ya,isUndefined:x,isDefined:u,isString:y,isFunction:B,
	isObject:E,isNumber:W,isElement:Sb,isArray:G,version:xe,isDate:ea,lowercase:L,uppercase:ub,callbacks:{$$counter:0},getTestability:re,reloadWithDebugInfo:qe,$$minErr:H,$$csp:za,$$encodeUriSegment:db,$$encodeUriQuery:ia,$$stringify:Xb});Yb=ue(A);Yb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ye});a.provider("$compile",Pc).directive({a:ze,input:Qc,textarea:Qc,form:Ae,script:Be,select:Ce,option:De,ngBind:Ee,ngBindHtml:Fe,ngBindTemplate:Ge,ngClass:He,ngClassEven:Ie,ngClassOdd:Je,
	ngCloak:Ke,ngController:Le,ngForm:Me,ngHide:Ne,ngIf:Oe,ngInclude:Pe,ngInit:Qe,ngNonBindable:Re,ngPluralize:Se,ngRepeat:Te,ngShow:Ue,ngStyle:Ve,ngSwitch:We,ngSwitchWhen:Xe,ngSwitchDefault:Ye,ngOptions:Ze,ngTransclude:$e,ngModel:af,ngList:bf,ngChange:cf,pattern:Rc,ngPattern:Rc,required:Sc,ngRequired:Sc,minlength:Tc,ngMinlength:Tc,maxlength:Uc,ngMaxlength:Uc,ngValue:df,ngModelOptions:ef}).directive({ngInclude:ff}).directive(vb).directive(Vc);a.provider({$anchorScroll:gf,$animate:hf,$animateCss:jf,$$animateJs:kf,
	$$animateQueue:lf,$$AnimateRunner:mf,$$animateAsyncRun:nf,$browser:of,$cacheFactory:pf,$controller:qf,$document:rf,$$isDocumentHidden:sf,$exceptionHandler:tf,$filter:Wc,$$forceReflow:uf,$interpolate:vf,$interval:wf,$http:xf,$httpParamSerializer:yf,$httpParamSerializerJQLike:zf,$httpBackend:Af,$xhrFactory:Bf,$jsonpCallbacks:Cf,$location:Df,$log:Ef,$parse:Ff,$rootScope:Gf,$q:Hf,$$q:If,$sce:Jf,$sceDelegate:Kf,$sniffer:Lf,$templateCache:Mf,$templateRequest:Nf,$$testability:Of,$timeout:Pf,$window:Qf,$$rAF:Rf,
	$$jqLite:Sf,$$HashMap:Tf,$$cookieReader:Uf})}])}function gb(a,b){return b.toUpperCase()}function wb(a){return a.replace(Vf,gb)}function Xc(a){a=a.nodeType;return 1===a||!a||9===a}function Yc(a,b){var d,c,f=b.createDocumentFragment(),e=[];if(Zb.test(a)){d=f.appendChild(b.createElement("div"));c=(Wf.exec(a)||["",""])[1].toLowerCase();c=oa[c]||oa._default;d.innerHTML=c[1]+a.replace(Xf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;e=ab(e,d.childNodes);d=f.firstChild;d.textContent=""}else e.push(b.createTextNode(a));
	f.textContent="";f.innerHTML="";q(e,function(a){f.appendChild(a)});return f}function U(a){if(a instanceof U)return a;var b;y(a)&&(a=R(a),b=!0);if(!(this instanceof U)){if(b&&"<"!==a.charAt(0))throw $b("nosel");return new U(a)}if(b){b=A.document;var d;a=(d=Yf.exec(a))?[b.createElement(d[1])]:(d=Yc(a,b))?d.childNodes:[];ac(this,a)}else B(a)?Zc(a):ac(this,a)}function bc(a){return a.cloneNode(!0)}function xb(a,b){b||hb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,f=d.length;c<f;c++)hb(d[c])}
	function $c(a,b,d,c){if(u(c))throw $b("offargs");var f=(c=yb(a))&&c.events,e=c&&c.handle;if(e)if(b){var g=function(b){var c=f[b];u(d)&&$a(c||[],d);u(d)&&c&&0<c.length||(a.removeEventListener(b,e),delete f[b])};q(b.split(" "),function(a){g(a);zb[a]&&g(zb[a])})}else for(b in f)"$destroy"!==b&&a.removeEventListener(b,e),delete f[b]}function hb(a,b){var d=a.ng339,c=d&&ib[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),$c(a)),delete ib[d],a.ng339=void 0))}function yb(a,
	b){var d=a.ng339,d=d&&ib[d];b&&!d&&(a.ng339=d=++Zf,d=ib[d]={events:{},data:{},handle:void 0});return d}function cc(a,b,d){if(Xc(a)){var c,f=u(d),e=!f&&b&&!E(b),g=!b;a=(a=yb(a,!e))&&a.data;if(f)a[wb(b)]=d;else{if(g)return a;if(e)return a&&a[wb(b)];for(c in b)a[wb(c)]=b[c]}}}function Ab(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Bb(a,b){b&&a.setAttribute&&q(b.split(" "),function(b){a.setAttribute("class",R((" "+(a.getAttribute("class")||
	"")+" ").replace(/[\n\t]/g," ").replace(" "+R(b)+" "," ")))})}function Cb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=R(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",R(d))}}function ac(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function ad(a,b){return Db(a,"$"+(b||"ngController")+
	"Controller")}function Db(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=G(b)?b:[b];a;){for(var c=0,f=b.length;c<f;c++)if(u(d=F.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function bd(a){for(xb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Eb(a,b){b||xb(a);var d=a.parentNode;d&&d.removeChild(a)}function $f(a,b){b=b||A;if("complete"===b.document.readyState)b.setTimeout(a);else F(b).on("load",a)}function Zc(a){function b(){A.document.removeEventListener("DOMContentLoaded",
	b);A.removeEventListener("load",b);a()}"complete"===A.document.readyState?A.setTimeout(a):(A.document.addEventListener("DOMContentLoaded",b),A.addEventListener("load",b))}function cd(a,b){var d=Fb[b.toLowerCase()];return d&&dd[xa(a)]&&d}function ag(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var e=b[d||c.type],g=e?e.length:0;if(g){if(x(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=
	!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=e.specialHandlerWrapper||bg;1<g&&(e=ja(e));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,e[l])}};d.elem=a;return d}function bg(a,b,d){d.call(a,b)}function cg(a,b,d){var c=b.relatedTarget;c&&(c===a||dg.call(a,c))||d.call(a,b)}function Sf(){this.$get=function(){return Q(U,{hasClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)},addClass:function(a,
	b){a.attr&&(a=a[0]);return Cb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)}})}}function ka(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||he)():d+":"+a}function Pa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function ed(a){a=(Function.prototype.toString.call(a)+" ").replace(eg,"");return a.match(fg)||a.match(gg)}function hg(a){return(a=ed(a))?
	"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(a,b){function d(a){return function(b,c){if(E(b))q(b,Ec(a));else return a(b,c)}}function c(a,b){Oa(a,"service");if(B(b)||G(b))b=p.instantiate(b);if(!b.$get)throw ca("pget",a);return n[a+"Provider"]=b}function f(a,b){return function(){var c=J.invoke(b,this);if(x(c))throw ca("undef",a);return c}}function e(a,b,d){return c(a,{$get:!1!==d?f(a,b):b})}function g(a){fb(x(a)||G(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,
	c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{y(a)?(c=Yb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):B(a)?b.push(p.invoke(a)):G(a)?b.push(p.invoke(a)):sb(a,"module")}catch(e){throw G(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),ca("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===
	k)throw ca("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e),a[b]}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=eb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw ca("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);G(a)&&(a=a[a.length-1]);d=a;if(La||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;
	Ia(f)||(f=d.$$ngIsClass=/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)+" "));d=f}return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=G(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:eb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Pa([],!0),n={$provide:{provider:d(c),factory:d(e),
	service:d(function(a,b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return e(a,fa(b),!1)}),constant:d(function(a,b){Oa(a,"constant");n[a]=b;t[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=J.invoke(d,c);return J.invoke(b,null,{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){Z.isString(b)&&l.push(b);throw ca("unpr",l.join(" <- "));}),t={},C=h(t,function(a,b){var c=p.get(a+"Provider",b);return J.invoke(c.$get,c,
	void 0,a)}),J=C;n.$injectorProvider={$get:fa(C)};var s=g(a),J=C.get("$injector");J.strictDi=b;q(s,function(a){a&&J.invoke(a)});return J}function gf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function f(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===xa(a))return b=a,!0});return b}function e(a){if(a){a.scrollIntoView();var c;c=g.yOffset;B(c)?c=c():Sb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):
	W(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=y(a)?a:W(a)?a.toString():d.hash();var b;a?(b=h.getElementById(a))?e(b):(b=f(h.getElementsByName(a)))?e(b):"top"===a&&e(null):e(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||$f(function(){c.$evalAsync(g)})});return g}]}function jb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;G(a)&&(a=a.join(" "));G(b)&&(b=b.join(" "));return a+" "+b}function ig(a){y(a)&&
	(a=a.split(" "));var b=T();q(a,function(a){a.length&&(b[a]=!0)});return b}function Aa(a){return E(a)?a:{}}function jg(a,b,d,c){function f(a){try{a.apply(null,wa.call(arguments,1))}finally{if(C--,0===C)for(;J.length;)try{J.pop()()}catch(b){d.error(b)}}}function e(){r=null;g();h()}function g(){s=D();s=x(s)?null:s;ma(s,O)&&(s=O);O=s}function h(){if(w!==k.url()||M!==s)w=k.url(),M=s,q(K,function(a){a(k.url(),s)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,t={};k.isMock=!1;var C=
	0,J=[];k.$$completeOutstandingRequest=f;k.$$incOutstandingRequestCount=function(){C++};k.notifyWhenNoOutstandingRequests=function(a){0===C?a():J.push(a)};var s,M,w=l.href,N=b.find("base"),r=null,D=c.history?function(){try{return m.state}catch(a){}}:v;g();M=s;k.url=function(b,d,e){x(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=M===e;if(w===b&&(!c.history||f))return k;var h=w&&Ba(w)===Ba(b);w=b;M=e;!c.history||h&&f?(h||(r=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),
	e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(r=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),M=s);r&&(r=b);return k}return r||l.href.replace(/%27/g,"'")};k.state=function(){return s};var K=[],pa=!1,O=null;k.onUrlChange=function(b){if(!pa){if(c.history)F(a).on("popstate",e);F(a).on("hashchange",e);pa=!0}K.push(b);return b};k.$$applicationDestroyed=function(){F(a).off("hashchange popstate",e)};k.$$checkUrlChange=h;k.baseHref=function(){var a=N.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,
	""):""};k.defer=function(a,b){var c;C++;c=n(function(){delete t[c];f(a)},b||0);t[c]=!0;return c};k.defer.cancel=function(a){return t[a]?(delete t[a],p(a),f(v),!0):!1}}function of(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new jg(a,c,b,d)}]}function pf(){this.$get=function(){function a(a,c){function f(a){a!==n&&(p?p===a&&(p=a.n):p=a,e(a.n,a.p),e(a,n),n=a,n.n=null)}function e(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw H("$cacheFactory")("iid",a);var g=0,h=
	Q({},c,{id:a}),k=T(),l=c&&c.capacity||Number.MAX_VALUE,m=T(),n=null,p=null;return b[a]={put:function(a,b){if(!x(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});f(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;f(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===n&&(n=b.p);b===p&&(p=b.n);e(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=T();g=0;m=T();n=p=null},destroy:function(){m=
	h=k=null;delete b[a]},info:function(){return Q({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,f){a[f]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Mf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Pc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=T();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw da("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]=
	{mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==L(b))throw da("baddir",a);if(a!==a.trim())throw da("baddir",a);}function f(a){var b=a.require||a.controller&&a.name;!G(b)&&E(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var e={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,h=/(([\w-]+)(?::([^;]+))?;?)/,k=le("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
	m=/^(on[a-z]+|formaction)$/,n=T();this.directive=function w(b,d){fb(b,"name");Oa(b,"directive");y(b)?(c(b),fb(d,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(e[b],function(e,g){try{var h=a.invoke(e);B(h)?h={compile:fa(h)}:!h.compile&&h.link&&(h.compile=fa(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=f(h);var k=h,l=h.restrict;if(l&&(!y(l)||!/[EACM]/.test(l)))throw da("badrestrict",l,b);k.restrict=
	l||"EA";h.$$moduleName=e.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),e[b].push(d)):q(b,Ec(w));return this};this.component=function(a,b){function c(a){function e(b){return B(b)||G(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:kg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};
	q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,B(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return u(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return u(a)?
	(p=a,this):p};var t=!1;this.preAssignBindingsEnabled=function(a){return u(a)?(t=a,this):t};var C=10;this.onChangesTtl=function(a){return arguments.length?(C=a,this):C};var J=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(J=a,this):J};var s=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(s=a,this):s};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,
	b,c,f,n,pa,O,z,P,I){function V(){try{if(!--za)throw ca=void 0,da("infchng",C);O.$apply(function(){for(var a=[],b=0,c=ca.length;b<c;++b)try{ca[b]()}catch(d){a.push(d)}ca=void 0;if(a.length)throw a;})}finally{za++}}function r(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function Y(a,b,c){ua.innerHTML="<span "+b+">";b=ua.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function ra(a,
	b){try{a.addClass(b)}catch(c){}}function aa(a,b,c,d,e){a instanceof F||(a=F(a));var f=Ma(a,b,a,c,d,e);aa.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw da("multilink");fb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==xa(d)&&la.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?F(fa(g,F("<div>").append(a).html())):
	c?Na.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);aa.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Ma(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,p,n,t;if(K)for(t=Array(c.length),m=0;m<h.length;m+=3)f=h[m],t[f]=c[f];else t=c;m=0;for(p=h.length;m<p;)k=t[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),aa.$$addScopeInfo(F(k),l)):l=a,n=c.transcludeOnThisElement?ha(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ha(a,b):null,c(f,l,
	k,d,n)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k=G(a)||a instanceof F,l,m,p,n,K,t=0;t<a.length;t++){l=new r;11===La&&Gb(a,t,k);m=dc(a[t],[],l,0===t?d:void 0,e);(f=m.length?U(m,a[t],l,b,c,null,[],[],f):null)&&f.scope&&aa.$$addScopeClass(l.$$element);l=f&&f.terminal||!(p=a[t].childNodes)||!p.length?null:Ma(p,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(t,f,l),n=!0,K=K||f;f=null}return n?g:null}function Gb(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===
	Ja)for(;;){f=e?d.nextSibling:a[b+1];if(!f||f.nodeType!==Ja)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ha(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=T(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ha(a,b.$$slots[f],c):null;return d}function dc(a,b,c,d,e){var f=c.$attr,g;switch(a.nodeType){case 1:g=xa(a);W(b,
	Ca(g),"E",d,e);for(var k,l,m,p,n=a.attributes,K=0,t=n&&n.length;K<t;K++){var D=!1,s=!1;k=n[K];l=k.name;m=k.value;k=Ca(l);(p=Ha.test(k))&&(l=l.replace(fd,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));(k=k.match(Ka))&&X(k[1])&&(D=l,s=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=Ca(l.toLowerCase());f[k]=l;if(p||!c.hasOwnProperty(k))c[k]=m,cd(a,k)&&(c[k]=!0);qa(a,b,m,k,p);W(b,k,"A",d,e,D,s)}"input"===g&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete",
	"off");if(!Ga)break;f=a.className;E(f)&&(f=f.animVal);if(y(f)&&""!==f)for(;a=h.exec(f);)k=Ca(a[2]),W(b,k,"C",d,e)&&(c[k]=R(a[3])),f=f.substr(a.index+a[0].length);break;case Ja:ja(b,a.nodeValue);break;case 8:if(!Fa)break;H(a,b,c,d,e)}b.sort(ia);return b}function H(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Ca(f[1]);W(b,h,"M",d,e)&&(c[h]=R(f[2]))}}catch(k){}}function gd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw da("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&
	e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return F(d)}function hd(a,b,c){return function(d,e,f,g,h){e=gd(e[0],b,c);return a(d,e,f,g,h)}}function fc(a,b,c,d,e,f){var g;return a?aa(b,c,d,e,f):function(){g||(g=aa(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function U(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=hd(a,c,d));a.require=z.require;a.directiveName=J;if(s===z||z.$$isolateScope)a=sa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=hd(b,c,d));b.require=
	z.require;b.directiveName=J;if(s===z||z.$$isolateScope)b=sa(b,{isolateScope:!0});k.push(b)}}function p(a,e,f,g,l){function m(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=void 0);pa&&(e=I);c||(c=pa?J.parent():J);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,u);if(x(f))throw da("noslot",d,ya(J));}else return l(a,b,e,c,u)}var n,z,C,w,P,I,Qa,J;b===f?(g=d,J=d.$$element):(J=F(f),g=new r(J,d));P=e;s?w=e.$new(!0):K&&(P=e.$parent);l&&(Qa=m,Qa.$$boundTransclude=l,Qa.isSlotFilled=function(a){return!!l.$$slots[a]});
	D&&(I=ba(J,g,Qa,D,w,e,s));s&&(aa.$$addScopeInfo(J,w,!0,!(O&&(O===s||O===s.$$originalDirective))),aa.$$addScopeClass(J,!0),w.$$isolateBindings=s.$$isolateBindings,z=na(e,g,w,w.$$isolateBindings,s),z.removeWatches&&w.$on("$destroy",z.removeWatches));for(n in I){z=D[n];C=I[n];var V=z.$$bindings.bindToController;if(t){C.bindingInfo=V?na(P,g,C.instance,V,z):{};var N=C();N!==C.instance&&(C.instance=N,J.data("$"+z.name+"Controller",N),C.bindingInfo.removeWatches&&C.bindingInfo.removeWatches(),C.bindingInfo=
	na(P,g,C.instance,V,z))}else C.instance=C(),J.data("$"+z.name+"Controller",C.instance),C.bindingInfo=na(P,g,C.instance,V,z)}q(D,function(a,b){var c=a.require;a.bindToController&&!G(c)&&E(c)&&Q(I[b].instance,S(b,c,J,I))});q(I,function(a){var b=a.instance;if(B(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(B(b.$onInit))try{b.$onInit()}catch(e){c(e)}B(b.$doCheck)&&(P.$watch(function(){b.$doCheck()}),b.$doCheck());B(b.$onDestroy)&&P.$on("$destroy",function(){b.$onDestroy()})});
	n=0;for(z=h.length;n<z;n++)C=h[n],ta(C,C.isolateScope?w:e,J,g,C.require&&S(C.directiveName,C.require,J,I),Qa);var u=e;s&&(s.template||null===s.templateUrl)&&(u=w);a&&a(u,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)C=k[n],ta(C,C.isolateScope?w:e,J,g,C.require&&S(C.directiveName,C.require,J,I),Qa);q(I,function(a){a=a.instance;B(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,K=l.newScopeDirective,D=l.controllerDirectives,s=l.newIsolateScopeDirective,O=l.templateDirective,C=l.nonTlbTranscludeDirective,
	w=!1,P=!1,pa=l.hasElementTranscludeDirective,I=d.$$element=F(b),z,J,V,N=e,u,ra=!1,Y=!1,v,A=0,y=a.length;A<y;A++){z=a[A];var Ma=z.$$start,H=z.$$end;Ma&&(I=gd(b,Ma,H));V=void 0;if(n>z.priority)break;if(v=z.scope)z.templateUrl||(E(v)?(Z("new/isolated scope",s||K,z,I),s=z):Z("new/isolated scope",s,z,I)),K=K||z;J=z.name;if(!ra&&(z.replace&&(z.templateUrl||z.template)||z.transclude&&!z.$$tlb)){for(v=A+1;ra=a[v++];)if(ra.transclude&&!ra.$$tlb||ra.replace&&(ra.templateUrl||ra.template)){Y=!0;break}ra=!0}!z.templateUrl&&
	z.controller&&(D=D||T(),Z("'"+J+"' controller",D[J],z,I),D[J]=z);if(v=z.transclude)if(w=!0,z.$$tlb||(Z("transclusion",C,z,I),C=z),"element"===v)pa=!0,n=z.priority,V=I,I=d.$$element=F(aa.$$createComment(J,d[J])),b=I[0],ka(f,wa.call(V,0),b),V[0].$$parentNode=V[0].parentNode,N=fc(Y,V,e,n,g&&g.name,{nonTlbTranscludeDirective:C});else{var ha=T();if(E(v)){V=[];var Gb=T(),L=T();q(v,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Gb[a]=b;ha[b]=null;L[b]=c});q(I.contents(),function(a){var b=Gb[Ca(xa(a))];
	b?(L[b]=!0,ha[b]=ha[b]||[],ha[b].push(a)):V.push(a)});q(L,function(a,b){if(!a)throw da("reqslot",b);});for(var ec in ha)ha[ec]&&(ha[ec]=fc(Y,ha[ec],e))}else V=F(bc(b)).contents();I.empty();N=fc(Y,V,e,void 0,void 0,{needsNewScope:z.$$isolateScope||z.$$newScope});N.$$slots=ha}if(z.template)if(P=!0,Z("template",O,z,I),O=z,v=B(z.template)?z.template(I,d):z.template,v=Ea(v),z.replace){g=z;V=Zb.test(v)?id(fa(z.templateNamespace,R(v))):[];b=V[0];if(1!==V.length||1!==b.nodeType)throw da("tplrt",J,"");ka(f,
	I,b);y={$attr:{}};v=dc(b,[],y);var W=a.splice(A+1,a.length-(A+1));(s||K)&&$(v,s,K);a=a.concat(v).concat(W);ea(d,y);y=a.length}else I.html(v);if(z.templateUrl)P=!0,Z("template",O,z,I),O=z,z.replace&&(g=z),p=ga(a.splice(A,a.length-A),I,d,f,w&&N,h,k,{controllerDirectives:D,newScopeDirective:K!==z&&K,newIsolateScopeDirective:s,templateDirective:O,nonTlbTranscludeDirective:C}),y=a.length;else if(z.compile)try{u=z.compile(I,d,N);var X=z.$$originalDirective||z;B(u)?m(null,bb(X,u),Ma,H):u&&m(bb(X,u.pre),
	bb(X,u.post),Ma,H)}catch(ca){c(ca,ya(I))}z.terminal&&(p.terminal=!0,n=Math.max(n,z.priority))}p.scope=K&&!0===K.scope;p.transcludeOnThisElement=w;p.templateOnThisElement=P;p.transclude=N;l.hasElementTranscludeDirective=pa;return p}function S(a,b,c,d){var e;if(y(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw da("ctreq",b,a);}else if(G(b))for(e=
	[],g=0,f=b.length;g<f;g++)e[g]=S(a,b[g],c,d);else E(b)&&(e={},q(b,function(b,f){e[f]=S(a,b,c,d)}));return e||null}function ba(a,b,c,d,e,f,g){var h=T(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"===n&&(n=b[l.name]);m=pa(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function $(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Tb(a[d],{$$isolateScope:b,$$newScope:c})}function W(b,c,f,g,h,k,l){if(c===
	h)return null;var m=null;if(e.hasOwnProperty(c)){h=a.get(c+"Directive");for(var n=0,p=h.length;n<p;n++)if(c=h[n],(x(g)||g>c.priority)&&-1!==c.restrict.indexOf(f)){k&&(c=Tb(c,{$$start:k,$$end:l}));if(!c.$$bindings){var K=m=c,t=c.name,D={isolateScope:null,bindToController:null};E(K.scope)&&(!0===K.bindToController?(D.bindToController=d(K.scope,t,!0),D.isolateScope={}):D.isolateScope=d(K.scope,t,!1));E(K.bindToController)&&(D.bindToController=d(K.bindToController,t,!0));if(D.bindToController&&!K.controller)throw da("noctrl",
	t);m=m.$$bindings=D;E(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function X(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function ea(a,b){var c=b.$attr,d=a.$attr;q(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}
	function ga(a,b,d,e,g,h,k,l){var m=[],n,p,K=b[0],t=a.shift(),s=Tb(t,{templateUrl:null,transclude:null,replace:null,$$originalDirective:t}),z=B(t.templateUrl)?t.templateUrl(b,d):t.templateUrl,C=t.templateNamespace;b.empty();f(z).then(function(c){var f,D;c=Ea(c);if(t.replace){c=Zb.test(c)?id(fa(C,R(c))):[];f=c[0];if(1!==c.length||1!==f.nodeType)throw da("tplrt",t.name,z);c={$attr:{}};ka(e,b,f);var w=dc(f,[],c);E(t.scope)&&$(w,!0);a=w.concat(a);ea(d,c)}else f=K,b.html(c);a.unshift(s);n=U(a,f,d,g,b,t,
	h,k,l);q(e,function(a,c){a===f&&(e[c]=b[0])});for(p=Ma(b[0].childNodes,g);m.length;){c=m.shift();D=m.shift();var O=m.shift(),I=m.shift(),w=b[0];if(!c.$$destroyed){if(D!==K){var P=D.className;l.hasElementTranscludeDirective&&t.replace||(w=bc(f));ka(O,F(D),w);ra(F(w),P)}D=n.transcludeOnThisElement?ha(c,n.transclude,I):I;n(p,c,w,e,D)}}m=null}).catch(function(a){a instanceof Error&&c(a)}).catch(v);return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(n.transcludeOnThisElement&&(a=ha(b,n.transclude,
	e)),n(p,b,c,d,a)))}}function ia(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Z(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw da("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ya(d));}function ja(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&aa.$$addBindingClass(a);return function(a,c){var e=c.parent();b||aa.$$addBindingClass(e);aa.$$addBindingInfo(e,d.expressions);
	a.$watch(d,function(a){c[0].nodeValue=a})}}})}function fa(a,b){a=L(a||"html");switch(a){case "svg":case "math":var c=A.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function oa(a,b){if("srcdoc"===b)return z.HTML;var c=xa(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return z.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b||"link"===c&&"href"===b)return z.RESOURCE_URL}function qa(a,
	c,d,e,f){var g=oa(a,e),h=k[e]||f,l=b(d,!f,g,h);if(l){if("multiple"===e&&"select"===xa(a))throw da("selmulti",ya(a));if(m.test(e))throw da("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=T());var k=f[e];k!==d&&(l=k&&b(k,!0,g,h),d=k);l&&(f[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&f.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function ka(a,b,c){var d=b[0],e=
	b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=A.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);F.hasData(d)&&(F.data(c,F.data(d)),F(d).off("$destroy"));F.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function sa(a,b){return Q(function(){return a.apply(null,arguments)},
	a,b)}function ta(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ya(d))}}function na(a,c,d,e,f){function g(b,c,e){!B(d.$onChanges)||c===e||c!==c&&e!==e||(ca||(a.$$postDigest(V),ca=[]),m||(m={},ca.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Hb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,t,D,s,z;switch(e.mode){case "@":p||va.call(c,m)||(d[h]=c[m]=void 0);p=c.$observe(m,function(a){if(y(a)||Ia(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=
	a;t=c[m];y(t)?d[h]=b(t)(a):Ia(t)&&(d[h]=t);l[h]=new Hb(gc,d[h]);k.push(p);break;case "=":if(!va.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;D=n(c[m]);z=D.literal?ma:function(a,b){return a===b||a!==a&&b!==b};s=D.assign||function(){t=d[h]=D(a);throw da("nonassign",c[m],m,f.name);};t=d[h]=D(a);p=function(b){z(b,d[h])||(z(b,t)?s(a,b=d[h]):d[h]=b);return t=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,D.literal);k.push(p);break;case "<":if(!va.call(c,m)){if(p)break;
	c[m]=void 0}if(p&&!c[m])break;D=n(c[m]);var C=D.literal,w=d[h]=D(a);l[h]=new Hb(gc,d[h]);p=a.$watch(D,function(a,b){if(b===a){if(b===w||C&&ma(b,w))return;b=w}g(h,a,b);d[h]=a},C);k.push(p);break;case "&":D=c.hasOwnProperty(m)?n(c[m]):v;if(D===v&&p)break;d[h]=function(b){return D(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Da=/^\w/,ua=A.document.createElement("div"),Fa=J,Ga=s,za=C,ca;r.prototype={$normalize:Ca,$addClass:function(a){a&&
	0<a.length&&P.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&P.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=jd(a,b);c&&c.length&&P.addClass(this.$$element,c);(c=jd(b,a))&&c.length&&P.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=cd(this.$$element[0],a),g=kd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Mc(a,"-"));f=xa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===
	a)||"img"===f&&"src"===a)this[a]=b=I(b,"src"===a);else if("img"===f&&"srcset"===a&&u(b)){for(var f="",g=R(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+I(R(g[m]),!0),f=f+(" "+R(g[m+1]));g=R(g[2*l]).split(/\s/);f+=I(R(g[0]),!0);2===g.length&&(f+=" "+R(g[1]));this[a]=b=f}!1!==d&&(null===b||x(b)?this.$$element.removeAttr(e):Da.test(e)?this.$$element.attr(e,b):Y(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},
	$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=T()),e=d[a]||(d[a]=[]);e.push(b);O.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||x(c[a])||b(c[a])});return function(){$a(e,b)}}};var Aa=b.startSymbol(),Ba=b.endSymbol(),Ea="{{"===Aa&&"}}"===Ba?Ya:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,Ba)},Ha=/^ngAttr[A-Z]/,Ka=/^(.+)Start$/;aa.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];G(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:v;aa.$$addBindingClass=
	p?function(a){ra(a,"ng-binding")}:v;aa.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:v;aa.$$addScopeClass=p?function(a,b){ra(a,b?"ng-isolate-scope":"ng-scope")}:v;aa.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return A.document.createComment(c)};return aa}]}function Hb(a,b){this.previousValue=a;this.currentValue=b}function Ca(a){return a.replace(fd,"").replace(lg,gb)}function jd(a,b){var d="",c=a.split(/\s+/),
	f=b.split(/\s+/),e=0;a:for(;e<c.length;e++){for(var g=c[e],h=0;h<f.length;h++)if(g===f[h])continue a;d+=(0<d.length?" ":"")+g}return d}function id(a){a=F(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Ja&&""===d.nodeValue.trim())&&mg.call(a,b,1)}return a}function kg(a,b){if(b&&y(b))return b;if(y(a)){var d=ld.exec(a);if(d)return d[3]}}function qf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Oa(b,"controller");E(b)?
	Q(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function f(a,b,c,d){if(!a||!E(a.$scope))throw H("$controller")("noscp",d,b);a.$scope[b]=c}return function(e,g,h,k){var l,m,n;h=!0===h;k&&y(k)&&(n=k);if(y(e)){k=e.match(ld);if(!k)throw md("ctrlfmt",e);m=k[1];n=n||k[3];e=a.hasOwnProperty(m)?a[m]:Oc(g.$scope,m,!0)||(b?Oc(c,m,!0):void 0);if(!e)throw md("ctrlreg",m);sb(e,m,!0)}if(h)return h=(G(e)?e[e.length-1]:e).prototype,l=Object.create(h||null),n&&f(g,n,
	l,m||e.name),Q(function(){var a=d.invoke(e,l,g,m);a!==l&&(E(a)||B(a))&&(l=a,n&&f(g,n,l,m||e.name));return l},{instance:l,identifier:n});l=d.instantiate(e,g,m);n&&f(g,n,l,m||e.name);return l}}]}function rf(){this.$get=["$window",function(a){return F(a.document)}]}function sf(){this.$get=["$document","$rootScope",function(a,b){function d(){f=c.hidden}var c=a[0],f=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return f}}]}function tf(){this.$get=
	["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function hc(a){return E(a)?ea(a)?a.toISOString():cb(a):a}function yf(){this.$get=function(){return function(a){if(!a)return"";var b=[];Dc(a,function(a,c){null===a||x(a)||(G(a)?q(a,function(a){b.push(ia(c)+"="+ia(hc(a)))}):b.push(ia(c)+"="+ia(hc(a))))});return b.join("&")}}}function zf(){this.$get=function(){return function(a){function b(a,f,e){null===a||x(a)||(G(a)?q(a,function(a,c){b(a,f+"["+(E(a)?c:"")+"]")}):E(a)&&!ea(a)?Dc(a,
	function(a,c){b(a,f+(e?"":"[")+c+(e?"":"]"))}):d.push(ia(f)+"="+ia(hc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function ic(a,b){if(y(a)){var d=a.replace(ng,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(nd))||(c=(c=d.match(og))&&pg[c[0]].test(d));c&&(a=Hc(d))}}return a}function od(a){var b=T(),d;y(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var f=L(R(a.substr(0,d)));a=R(a.substr(d+1));f&&(b[f]=b[f]?b[f]+", "+a:a)}):E(a)&&q(a,function(a,d){var e=L(d),g=R(a);e&&
	(b[e]=b[e]?b[e]+", "+g:g)});return b}function pd(a){var b;return function(d){b||(b=od(a));return d?(d=b[L(d)],void 0===d&&(d=null),d):b}}function qd(a,b,d,c){if(B(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function xf(){var a=this.defaults={transformResponse:[ic],transformRequest:[function(a){return E(a)&&"[object File]"!==la.call(a)&&"[object Blob]"!==la.call(a)&&"[object FormData]"!==la.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ja(jc),put:ja(jc),
	patch:ja(jc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return u(a)?(b=!!a,this):b};var d=this.interceptors=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(c,f,e,g,h,k,l,m){function n(b){function d(a,b){for(var c=0,e=b.length;c<e;){var f=b[c++],g=b[c++];a=a.then(f,g)}b.length=0;return a}function e(a,b){var c,
	d={};q(a,function(a,e){B(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function f(a){var b=Q({},a);b.data=qd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!E(b))throw H("$http")("badreq",b);if(!y(m.valueOf(b.url)))throw H("$http")("badreq",b.url);var g=Q({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},b);g.headers=function(b){var c=
	a.headers,d=Q({},b.headers),f,g,h,c=Q({},c.common,c[L(b.method)]);a:for(f in c){g=L(f);for(h in d)if(L(h)===g)continue a;d[f]=c[f]}return e(d,ja(b))}(b);g.method=ub(g.method);g.paramSerializer=y(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;c.$$incOutstandingRequestCount();var h=[],n=[];b=k.resolve(g);q(s,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&n.push(a.response,a.responseError)});b=d(b,h);b=b.then(function(b){var c=
	b.headers,d=qd(b.data,pd(c),void 0,b.transformRequest);x(d)&&q(c,function(a,b){"content-type"===L(b)&&delete c[b]});x(b.withCredentials)&&!x(a.withCredentials)&&(b.withCredentials=a.withCredentials);return p(b,d).then(f,f)});b=d(b,n);return b=b.finally(function(){c.$$completeOutstandingRequest(v)})}function p(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){p(c,a,d,e)}P&&
	(200<=a&&300>a?P.put(Y,[a,c,od(d),e]):P.remove(Y));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function p(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?O.resolve:O.reject)({data:a,status:b,headers:pd(d),config:c,statusText:e})}function K(a){p(a.data,a.status,ja(a.headers()),a.statusText)}function s(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var O=k.defer(),z=O.promise,P,I,V=c.headers,r="jsonp"===L(c.method),Y=c.url;r?Y=m.getTrustedResourceUrl(Y):y(Y)||(Y=m.valueOf(Y));Y=t(Y,
	c.paramSerializer(c.params));r&&(Y=C(Y,c.jsonpCallbackParam));n.pendingRequests.push(c);z.then(s,s);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(P=E(c.cache)?c.cache:E(a.cache)?a.cache:J);P&&(I=P.get(Y),u(I)?I&&B(I.then)?I.then(K,K):G(I)?p(I[1],I[0],ja(I[2]),I[3]):p(I,200,{},"OK"):P.put(Y,z));x(I)&&((I=rd(c.url)?e()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(V[c.xsrfHeaderName||a.xsrfHeaderName]=I),f(c.method,Y,d,l,V,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),
	g(c.uploadEventHandlers)));return z}function t(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function C(a,b){if(/[&?][^=]+=JSON_CALLBACK/.test(a))throw sd("badjsonp",a);if((new RegExp("[&?]"+b+"=")).test(a))throw sd("badjsonp",b,a);return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var J=g("$http");a.paramSerializer=y(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var s=[];q(d,function(a){s.unshift(y(a)?l.get(a):l.invoke(a))});n.pendingRequests=[];(function(a){q(arguments,
	function(a){n[a]=function(b,c){return n(Q({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){n[a]=function(b,c,d){return n(Q({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Bf(){this.$get=function(){return function(){return new A.XMLHttpRequest}}}function Af(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return qg(a,c,a.defer,b,d[0])}]}function qg(a,b,d,c,f){function e(a,
	b,d){a=a.replace("JSON_CALLBACK",b);var e=f.createElement("script"),m=null;e.type="text/javascript";e.src=a;e.async=!0;m=function(a){e.removeEventListener("load",m);e.removeEventListener("error",m);f.body.removeChild(e);e=null;var g=-1,t="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),t=a.type,g="error"===a.type?404:200);d&&d(g,t)};e.addEventListener("load",m);e.addEventListener("error",m);f.body.appendChild(e);return m}return function(f,h,k,l,m,n,p,t,C,J){function s(){w&&w();N&&
	N.abort()}h=h||a.url();if("jsonp"===L(f))var M=c.createCallback(h),w=e(h,M,function(a,b){var e=200===a&&c.getResponse(M);u(D)&&d.cancel(D);w=N=null;l(a,e,"",b);c.removeCallback(M)});else{var N=b(f,h);N.open(f,h,!0);q(m,function(a,b){u(a)&&N.setRequestHeader(b,a)});N.onload=function(){var a=N.statusText||"",b="response"in N?N.response:N.responseText,c=1223===N.status?204:N.status;0===c&&(c=b?200:"file"===Da(h).protocol?404:0);var e=N.getAllResponseHeaders();u(D)&&d.cancel(D);w=N=null;l(c,b,e,a)};f=
	function(){u(D)&&d.cancel(D);w=N=null;l(-1,null,null,"")};N.onerror=f;N.onabort=f;N.ontimeout=f;q(C,function(a,b){N.addEventListener(b,a)});q(J,function(a,b){N.upload.addEventListener(b,a)});p&&(N.withCredentials=!0);if(t)try{N.responseType=t}catch(r){if("json"!==t)throw r;}N.send(x(k)?null:k)}if(0<n)var D=d(s,n);else n&&B(n.then)&&n.then(s)}}function vf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler",
	"$sce",function(d,c,f){function e(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,b)}function h(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function k(e,k,p,n){function M(a){try{var b=a;a=p?f.getTrusted(p,b):f.valueOf(b);return n&&!u(a)?a:Xb(a)}catch(d){c(Ea.interr(e,d))}}if(!e.length||-1===e.indexOf(a)){var w;k||(k=g(e),w=fa(k),w.exp=e,w.expressions=[],w.$$watchDelegate=h);return w}n=!!n;var q,r,D=0,K=[],pa=[];w=e.length;for(var O=[],z=[];D<w;)if(-1!==(q=
	e.indexOf(a,D))&&-1!==(r=e.indexOf(b,q+l)))D!==q&&O.push(g(e.substring(D,q))),D=e.substring(q+l,r),K.push(D),pa.push(d(D,M)),D=r+m,z.push(O.length),O.push("");else{D!==w&&O.push(g(e.substring(D)));break}p&&1<O.length&&Ea.throwNoconcat(e);if(!k||K.length){var P=function(a){for(var b=0,c=K.length;b<c;b++){if(n&&x(a[b]))return;O[z[b]]=a[b]}return O.join("")};return Q(function(a){var b=0,d=K.length,f=Array(d);try{for(;b<d;b++)f[b]=pa[b](a);return P(f)}catch(g){c(Ea.interr(e,g))}},{exp:e,expressions:K,
	$$watchDelegate:function(a,b){var c;return a.$watchGroup(pa,function(d,e){var f=P(d);B(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,e),"g"),p=new RegExp(b.replace(/./g,e),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function wf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,f){function e(e,k,l,m){function n(){p?e.apply(null,t):e(s)}var p=4<arguments.length,t=p?wa.call(arguments,4):
	[],C=b.setInterval,q=b.clearInterval,s=0,M=u(m)&&!m,w=(M?c:d).defer(),r=w.promise;l=u(l)?l:0;r.$$intervalId=C(function(){M?f.defer(n):a.$evalAsync(n);w.notify(s++);0<l&&s>=l&&(w.resolve(s),q(r.$$intervalId),delete g[r.$$intervalId]);M||a.$apply()},k);g[r.$$intervalId]=w;return r}var g={};e.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].promise.catch(v),g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return e}]}function kc(a){a=
	a.split("/");for(var b=a.length;b--;)a[b]=db(a[b]);return a.join("/")}function td(a,b){var d=Da(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=X(d.port)||rg[d.protocol]||null}function ud(a,b){if(sg.test(a))throw kb("badpath",a);var d="/"!==a.charAt(0);d&&(a="/"+a);var c=Da(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Kc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function lc(a,
	b){return a.slice(0,b.length)===b}function sa(a,b){if(lc(b,a))return b.substr(a.length)}function Ba(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function lb(a){return a.replace(/(#.+)|#$/,"$1")}function mc(a,b,d){this.$$html5=!0;d=d||"";td(a,this);this.$$parse=function(a){var d=sa(b,a);if(!y(d))throw kb("ipthprfx",a,b);ud(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Wb(this.$$search),d=this.$$hash?"#"+db(this.$$hash):"";this.$$url=kc(this.$$path)+
	(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,f){if(f&&"#"===f[0])return this.hash(f.slice(1)),!0;var e,g;u(e=sa(a,c))?(g=e,g=d&&u(e=sa(d,e))?b+(sa("/",e)||e):a+g):u(e=sa(b,c))?g=b+e:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function nc(a,b,d){td(a,this);this.$$parse=function(c){var f=sa(a,c)||sa(b,c),e;x(f)||"#"!==f.charAt(0)?this.$$html5?e=f:(e="",x(f)&&(a=c,this.replace())):(e=sa(d,f),x(e)&&(e=f));ud(e,this);c=this.$$path;var f=a,g=/^\/[A-Z]:(\/.*)/;lc(e,
	f)&&(e=e.replace(f,""));g.exec(e)||(c=(e=g.exec(c))?e[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Wb(this.$$search),f=this.$$hash?"#"+db(this.$$hash):"";this.$$url=kc(this.$$path)+(b?"?"+b:"")+f;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ba(a)===Ba(b)?(this.$$parse(b),!0):!1}}function vd(a,b,d){this.$$html5=!0;nc.apply(this,arguments);this.$$parseLinkUrl=function(c,f){if(f&&"#"===f[0])return this.hash(f.slice(1)),!0;var e,g;a===
	Ba(c)?e=c:(g=sa(b,c))?e=a+d+g:b===c+"/"&&(e=b);e&&this.$$parse(e);return!!e};this.$$compose=function(){var b=Wb(this.$$search),f=this.$$hash?"#"+db(this.$$hash):"";this.$$url=kc(this.$$path)+(b?"?"+b:"")+f;this.$$absUrl=a+d+this.$$url}}function Ib(a){return function(){return this[a]}}function wd(a,b){return function(d){if(x(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Df(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return u(b)?(a=b,
	this):a};this.html5Mode=function(a){if(Ia(a))return b.enabled=a,this;if(E(a)){Ia(a.enabled)&&(b.enabled=a.enabled);Ia(a.requireBase)&&(b.requireBase=a.requireBase);if(Ia(a.rewriteLinks)||y(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,f,e,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",
	l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw kb("nobase");p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=f.history?mc:vd}else p=Ba(n),m=nc;var t=p.substr(0,Ba(p).lastIndexOf("/")+1);l=new m(p,t,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var C=/^\s*(javascript|mailto):/i;e.on("click",function(a){var f=b.rewriteLinks;if(f&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var h=F(a.target);"a"!==xa(h[0]);)if(h[0]===
	e[0]||!(h=h.parent())[0])return;if(!y(f)||!x(h.attr(f))){var f=h.prop("href"),k=h.attr("href")||h.attr("xlink:href");E(f)&&"[object SVGAnimatedString]"===f.toString()&&(f=Da(f.animVal).href);C.test(f)||!f||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(f,k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}});lb(l.absUrl())!==lb(n)&&c.url(l.absUrl(),!0);var q=!0;c.onUrlChange(function(a,b){lc(a,t)?(d.$evalAsync(function(){var c=l.absUrl(),
	e=l.$$state,f;a=lb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(q=!1,k(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){var a=lb(c.url()),b=lb(l.absUrl()),e=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&f.history&&e!==l.$$state;if(q||m)q=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,e).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),
	l.$$state=e):(m&&h(b,g,e===l.$$state?null:l.$$state),k(a,e)))});l.$$replace=!1});return l}]}function Ef(){var a=!0,b=this;this.debugEnabled=function(b){return u(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function f(a){var b=d.console||{},f=b[a]||b.log||v;a=!1;try{a=!!f.apply}catch(k){}return a?function(){var a=
	[];q(arguments,function(b){a.push(c(b))});return f.apply(b,a)}:function(a,b){f(a,null==b?"":b)}}return{log:f("log"),info:f("info"),warn:f("warn"),error:f("error"),debug:function(){var c=f("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function tg(a){return a+""}function ug(a,b){return"undefined"!==typeof a?a:b}function xd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function S(a,b){var d,c,f;switch(a.type){case r.Program:d=!0;q(a.body,function(a){S(a.expression,b);d=
	d&&a.expression.constant});a.constant=d;break;case r.Literal:a.constant=!0;a.toWatch=[];break;case r.UnaryExpression:S(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case r.BinaryExpression:S(a.left,b);S(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case r.LogicalExpression:S(a.left,b);S(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case r.ConditionalExpression:S(a.test,
	b);S(a.alternate,b);S(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case r.Identifier:a.constant=!1;a.toWatch=[a];break;case r.MemberExpression:S(a.object,b);a.computed&&S(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case r.CallExpression:d=f=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){S(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});
	a.constant=d;a.toWatch=f?c:[a];break;case r.AssignmentExpression:S(a.left,b);S(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case r.ArrayExpression:d=!0;c=[];q(a.elements,function(a){S(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case r.ObjectExpression:d=!0;c=[];q(a.properties,function(a){S(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case r.ThisExpression:a.constant=
	!1;a.toWatch=[];break;case r.LocalsExpression:a.constant=!1,a.toWatch=[]}}function yd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function zd(a){return a.type===r.Identifier||a.type===r.MemberExpression}function Ad(a){if(1===a.body.length&&zd(a.body[0].expression))return{type:r.AssignmentExpression,left:a.body[0].expression,right:{type:r.NGValueParameter},operator:"="}}function Bd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===
	r.Literal||a.body[0].expression.type===r.ArrayExpression||a.body[0].expression.type===r.ObjectExpression)}function Cd(a,b){this.astBuilder=a;this.$filter=b}function Dd(a,b){this.astBuilder=a;this.$filter=b}function oc(a){return B(a.valueOf)?a.valueOf():vg.call(a)}function Ff(){var a=T(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(f){function e(a,b){return null==
	a||null==b?a===b:"object"===typeof a&&(a=oc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function g(a,b,c,d,f){var g=d.inputs,h;if(1===g.length){var k=e,g=g[0];return a.$watch(function(a){var b=g(a);e(b,k)||(h=d(a,void 0,void 0,[b]),k=b&&oc(b));return h},b,c,f)}for(var l=[],m=[],n=0,q=g.length;n<q;n++)l[n]=e,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var k=g[c](a);if(b||(b=!e(k,l[c])))m[c]=k,l[c]=k&&oc(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,f)}function h(a,
	b,c,d,e){function f(a){return d(a)}function h(a,c,d){l=a;B(b)&&b(a,c,d);u(a)&&d.$$postDigest(function(){u(l)&&k()})}var k,l;return k=d.inputs?g(a,h,c,d,e):a.$watch(f,h,c)}function k(a,b,c,d){function e(a){var b=!0;q(a,function(a){u(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;B(b)&&b(a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function l(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function m(a,b){if(!b)return a;var c=
	a.$$watchDelegate,d=!1,c=c!==k&&c!==h?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return u(e)?c:e},d=!a.inputs;a.$$watchDelegate&&a.$$watchDelegate!==g?(c.$$watchDelegate=a.$$watchDelegate,c.inputs=a.inputs):b.$stateful||(c.$$watchDelegate=g,c.inputs=a.inputs?a.inputs:[a]);return c}var n={csp:za().noUnsafeEval,literals:Fa(b),isIdentifierStart:B(d)&&d,isIdentifierContinue:B(c)&&c};return function(b,c){var d,e,s;switch(typeof b){case "string":return s=
	b=b.trim(),d=a[s],d||(":"===b.charAt(0)&&":"===b.charAt(1)&&(e=!0,b=b.substring(2)),d=new pc(n),d=(new qc(d,f,n)).parse(b),d.constant?d.$$watchDelegate=l:e?d.$$watchDelegate=d.literal?k:h:d.inputs&&(d.$$watchDelegate=g),a[s]=d),m(d,c);case "function":return m(b,c);default:return m(v,c)}}}]}function Hf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Ed(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):a}}function If(){var a=
	!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Ed(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):a}}function Ed(a,b,d){function c(){return new f}function f(){var a=this.promise=new e;this.resolve=function(b){k(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){p(a,b)}}function e(){this.$$state={status:0}}function g(){for(;!w&&u.length;){var a=u.shift();a.pur||(a.pur=!0,a=a.value,a="Possibly unhandled rejection: "+("function"===
	typeof a?a.toString().replace(/ \{[\s\S]*$/,""):x(a)?"undefined":"string"!==typeof a?ve(a):a),b(a))}}function h(b){!d||b.pending||2!==b.status||b.pur||(0===w&&0===u.length&&a(g),u.push(b));!b.processScheduled&&b.pending&&(b.processScheduled=!0,++w,a(function(){var c,e,f;f=b.pending;b.processScheduled=!1;b.pending=void 0;try{for(var h=0,l=f.length;h<l;++h){b.pur=!0;e=f[h][0];c=f[h][b.status];try{B(c)?k(e,c(b.value)):1===b.status?k(e,b.value):m(e,b.value)}catch(n){m(e,n)}}}finally{--w,d&&0===w&&a(g)}}))}
	function k(a,b){a.$$state.status||(b===a?n(a,M("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,n(a,b))}function e(b){p(a,b)}var f,g=!1;try{if(E(b)||B(b))f=b.then;B(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,h(a.$$state))}catch(k){d(k)}}function m(a,b){a.$$state.status||n(a,b)}function n(a,b){a.$$state.value=b;a.$$state.status=2;h(a.$$state)}function p(c,d){var e=c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,
	c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{p(c,B(a)?a(d):d)}catch(h){b(h)}}})}function t(a){var b=new e;m(b,a);return b}function C(a,b,c){var d=null;try{B(c)&&(d=c())}catch(e){return t(e)}return d&&B(d.then)?d.then(function(){return b(a)},t):b(a)}function r(a,b,c,d){var f=new e;k(f,a);return f.then(b,c,d)}function s(a){if(!B(a))throw M("norslvr",a);var b=new e;a(function(a){k(b,a)},function(a){m(b,a)});return b}var M=H("$q",TypeError),w=0,u=[];Q(e.prototype,{then:function(a,b,c){if(x(a)&&x(b)&&
	x(c))return this;var d=new e;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&h(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return C(b,v,a)},function(b){return C(b,t,a)},b)}});var v=r;s.prototype=e.prototype;s.defer=c;s.reject=t;s.when=r;s.resolve=v;s.all=function(a){var b=new e,c=0,d=G(a)?[]:{};q(a,function(a,e){c++;r(a).then(function(a){d[e]=a;--c||k(b,d)},function(a){m(b,
	a)})});0===c&&k(b,d);return b};s.race=function(a){var b=c();q(a,function(a){r(a).then(b.resolve,b.reject)});return b.promise};return s}function Rf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,f=!!d,e=f?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};e.supported=f;return e}]}function Gf(){function a(a){function b(){this.$$watchers=
	this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++qb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=H("$rootScope"),c=null,f=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(e,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===La&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=
	a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++qb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(M.$$phase)throw d("inprog",M.$$phase);M.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function t(a,b,c){do a.$$listenerCount[c]-=
	b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function C(){}function r(){for(;A.length;)try{A.shift()()}catch(a){e(a)}f=null}function s(){null===f&&(f=h.defer(function(){M.$apply(r)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=
	d;(b||c!==this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:C,get:f,exp:e||a,eq:!!d};c=null;B(b)||(l.fn=v);k||(k=h.$$watchers=[]);k.unshift(l);p(this,1);return function(){0<=$a(k,l)&&p(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&
	b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!x(e)){if(E(e))if(ta(e))for(f!==n&&(f=n,s=f.length=0,l++),a=e.length,s!==a&&(l++,f.length=s=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==
	p&&(f=p={},s=0,l++);a=0;for(b in e)va.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(s++,f[b]=g,l++));if(s>a)for(b in l++,f)va.call(e,b)||(s--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},t=!0,s=0;return this.$watch(m,function(){t?(t=!1,b(e,e,d)):b(e,h,d);if(k)if(E(e))if(ta(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)va.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
	g,k,l,m,p,t,s,q=b,v,x=[],A,y;n("$digest");h.$$checkUrlChange();this===M&&null!==f&&(h.defer.cancel(f),r());c=null;do{s=!1;v=this;for(p=0;p<w.length;p++){try{y=w[p],y.scope.$eval(y.expression,y.locals)}catch(F){e(F)}c=null}w.length=0;a:do{if(p=v.$$watchers)for(t=p.length;t--;)try{if(a=p[t])if(m=a.get,(g=m(v))!==(k=a.last)&&!(a.eq?ma(g,k):ga(g)&&ga(k)))s=!0,c=a,a.last=a.eq?Fa(g,null):g,l=a.fn,l(g,k===C?g:k,v),5>q&&(A=4-q,x[A]||(x[A]=[]),x[A].push({msg:B(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):
	a.exp,newVal:g,oldVal:k}));else if(a===c){s=!1;break a}}catch(E){e(E)}if(!(p=v.$$watchersCount&&v.$$childHead||v!==this&&v.$$nextSibling))for(;v!==this&&!(p=v.$$nextSibling);)v=v.$parent}while(v=p);if((s||w.length)&&!q--)throw M.$$phase=null,d("infdig",b,x);}while(s||w.length);for(M.$$phase=null;D<u.length;)try{u[D++]()}catch(G){e(G)}u.length=D=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===M&&h.$$applicationDestroyed();p(this,
	-this.$$watchersCount);for(var b in this.$$listenerCount)t(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=v;this.$on=this.$watch=this.$watchGroup=function(){return v};this.$$listeners=
	{};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){M.$$phase||w.length||h.defer(function(){w.length&&M.$digest()});w.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){u.push(a)},$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{M.$$phase=null}}catch(b){e(b)}finally{try{M.$digest()}catch(c){throw e(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&A.push(b);a=g(a);s()},$on:function(a,b){var c=
	this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,t(e,1,a))}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ab([h],arguments,1),l,m;do{d=f.$$listeners[a]||c;h.currentScope=f;l=0;for(m=d.length;l<
	m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;f=f.$parent}while(f);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return f;for(var g=ab([f],arguments,1),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,
	1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}f.currentScope=null;return f}};var M=new m,w=M.$$asyncQueue=[],u=M.$$postDigestQueue=[],A=M.$$applyAsyncQueue=[],D=0;return M}]}function ye(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return u(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b=a,this):b};
	this.$get=function(){return function(d,c){var f=c?b:a,e;e=Da(d).href;return""===e||e.match(f)?d:"unsafe:"+e}}}function wg(a){if("self"===a)return a;if(y(a)){if(-1<a.indexOf("***"))throw ua("iwcard",a);a=Fd(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Xa(a))return new RegExp("^"+a.source+"$");throw ua("imatcher");}function Gd(a){var b=[];u(a)&&q(a,function(a){b.push(wg(a))});return b}function Kf(){this.SCE_CONTEXTS=qa;var a=["self"],b=[];this.resourceUrlWhitelist=
	function(b){arguments.length&&(a=Gd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Gd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?rd(b):!!a.exec(b.href)}function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ua("unsafe");
	};d.has("$sanitize")&&(e=d.get("$sanitize"));var g=f(),h={};h[qa.HTML]=f(g);h[qa.CSS]=f(g);h[qa.URL]=f(g);h[qa.JS]=f(g);h[qa.RESOURCE_URL]=f(h[qa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ua("icontext",a,b);if(null===b||x(b)||""===b)return b;if("string"!==typeof b)throw ua("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||x(f)||""===f)return f;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&f instanceof g)return f.$$unwrapTrustedValue();if(d===qa.RESOURCE_URL){var g=
	Da(f.toString()),n,p,t=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){t=!0;break}if(t)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){t=!1;break}if(t)return f;throw ua("insecurl",f.toString());}if(d===qa.HTML)return e(f);throw ua("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Jf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>La)throw ua("iequirks");var c=ja(qa);c.isEnabled=function(){return a};
	c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var f=c.parseAs,e=c.getTrusted,g=c.trustAs;q(qa,function(a,b){var d=L(b);c[("parse_as_"+d).replace(rc,gb)]=function(b){return f(a,b)};c[("get_trusted_"+d).replace(rc,gb)]=function(b){return e(a,b)};c[("trust_as_"+d).replace(rc,gb)]=function(b){return g(a,b)}});
	return c}]}function Lf(){this.$get=["$window","$document",function(a,b){var d={},c=!(a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,f=X((/android (\d+)/.exec(L((a.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h=g.body&&g.body.style,k=!1,l=!1;h&&(k=!!("transition"in h||"webkitTransition"in h),l=!!("animation"in h||"webkitAnimation"in h));return{history:!(!c||4>f||e),
	hasEvent:function(a){if("input"===a&&La)return!1;if(x(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:za(),transitions:k,animations:l,android:f}}]}function Nf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,f,e){function g(h,k){g.totalPendingRequests++;if(!y(h)||x(d.get(h)))h=e.getTrustedResourceUrl(h);var l=c.defaults&&c.defaults.transformResponse;G(l)?l=l.filter(function(a){return a!==
	ic}):l===ic&&(l=null);return c.get(h,Q({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){d.put(h,a.data);return a.data},function(a){k||(a=xg("tpload",h,a.status,a.statusText),b(a));return f.reject(a)})}g.totalPendingRequests=0;return g}]}function Of(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=Z.element(a).data("$binding");c&&
	q(c,function(c){d?(new RegExp("(^|\\s)"+Fd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Pf(){this.$get=["$rootScope","$browser",
	"$q","$$q","$exceptionHandler",function(a,b,d,c,f){function e(e,k,l){B(e)||(l=k,k=e,e=v);var m=wa.call(arguments,3),n=u(l)&&!l,p=(n?c:d).defer(),t=p.promise,q;q=b.defer(function(){try{p.resolve(e.apply(null,m))}catch(b){p.reject(b),f(b)}finally{delete g[t.$$timeoutId]}n||a.$apply()},k);t.$$timeoutId=q;g[q]=p;return t}var g={};e.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].promise.catch(v),g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):
	!1};return e}]}function Da(a){La&&(ba.setAttribute("href",a),a=ba.href);ba.setAttribute("href",a);return{href:ba.href,protocol:ba.protocol?ba.protocol.replace(/:$/,""):"",host:ba.host,search:ba.search?ba.search.replace(/^\?/,""):"",hash:ba.hash?ba.hash.replace(/^#/,""):"",hostname:ba.hostname,port:ba.port,pathname:"/"===ba.pathname.charAt(0)?ba.pathname:"/"+ba.pathname}}function rd(a){a=y(a)?Da(a):a;return a.protocol===Hd.protocol&&a.host===Hd.host}function Qf(){this.$get=fa(A)}function Id(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
	var d=a[0]||{},c={},f="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==f)for(f=a,a=f.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),x(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function Uf(){this.$get=Id}function Wc(a){function b(d,c){if(E(d)){var f={};q(d,function(a,c){f[c]=b(c,a)});return f}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Jd);b("date",Kd);
	b("filter",yg);b("json",zg);b("limitTo",Ag);b("lowercase",Bg);b("number",Ld);b("orderBy",Md);b("uppercase",Cg)}function yg(){return function(a,b,d,c){if(!ta(a)){if(null==a)return a;throw H("filter")("notarray",a);}c=c||"$";var f;switch(sc(b)){case "function":break;case "boolean":case "null":case "number":case "string":f=!0;case "object":b=Dg(b,d,c,f);break;default:return a}return Array.prototype.filter.call(a,b)}}function Dg(a,b,d,c){var f=E(a)&&d in a;!0===b?b=ma:B(b)||(b=function(a,b){if(x(a))return!1;
	if(null===a||null===b)return a===b;if(E(b)||E(a)&&!Ub(a))return!1;a=L(""+a);b=L(""+b);return-1!==a.indexOf(b)});return function(e){return f&&!E(e)?Ha(e,a[d],b,d,!1):Ha(e,a,b,d,c)}}function Ha(a,b,d,c,f,e){var g=sc(a),h=sc(b);if("string"===h&&"!"===b.charAt(0))return!Ha(a,b.substring(1),d,c,f);if(G(a))return a.some(function(a){return Ha(a,b,d,c,f)});switch(g){case "object":var k;if(f){for(k in a)if("$"!==k.charAt(0)&&Ha(a[k],b,d,c,!0))return!0;return e?!1:Ha(a,b,d,c,!1)}if("object"===h){for(k in b)if(e=
	b[k],!B(e)&&!x(e)&&(g=k===c,!Ha(g?a:a[k],e,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function sc(a){return null===a?"null":typeof a}function Jd(a){var b=a.NUMBER_FORMATS;return function(a,c,f){x(c)&&(c=b.CURRENCY_SYM);x(f)&&(f=b.PATTERNS[1].maxFrac);return null==a?a:Nd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,f).replace(/\u00A4/g,c)}}function Ld(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Nd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,
	c)}}function Eg(a){var b=0,d,c,f,e,g;-1<(c=a.indexOf(Od))&&(a=a.replace(Od,""));0<(f=a.search(/e/i))?(0>c&&(c=f),c+=+a.slice(f+1),a=a.substring(0,f)):0>c&&(c=a.length);for(f=0;a.charAt(f)===tc;f++);if(f===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===tc;)g--;c-=f;d=[];for(e=0;f<=g;f++,e++)d[e]=+a.charAt(f)}c>Pd&&(d=d.splice(0,Pd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Fg(a,b,d,c){var f=a.d,e=f.length-a.i;b=x(b)?Math.min(Math.max(d,e),c):+b;d=b+a.i;c=f[d];if(0<d){f.splice(Math.max(a.i,d));for(var g=
	d;g<f.length;g++)f[g]=0}else for(e=Math.max(0,e),a.i=1,f.length=Math.max(1,d=b+1),f[0]=0,g=1;g<d;g++)f[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)f.unshift(0),a.i++;f.unshift(1);a.i++}else f[d-1]++;for(;e<Math.max(0,b);e++)f.push(0);if(b=f.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))f.unshift(b),a.i++}function Nd(a,b,d,c,f){if(!y(a)&&!W(a)||isNaN(a))return"";var e=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(e)k="\u221e";else{g=Eg(h);Fg(g,f,b.minFrac,b.maxFrac);k=g.d;h=g.i;
	f=g.e;e=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?e=k.splice(h,k.length):(e=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);e.length&&(k+=c+e.join(""));f&&(k+="e+"+f)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Jb(a,b,d,c){var f="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,f="-");for(a=""+a;a.length<b;)a=tc+
	a;d&&(a=a.substr(a.length-b));return f+a}function $(a,b,d,c,f){d=d||0;return function(e){e=e["get"+a]();if(0<d||e>-d)e+=d;0===e&&-12===d&&(e=12);return Jb(e,b,c,f)}}function mb(a,b,d){return function(c,f){var e=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return f[g][e]}}function Qd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Rd(a){return function(b){var d=Qd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+
	Math.round(b/6048E5);return Jb(b,a)}}function uc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Kd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var e=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(e=X(b[9]+b[10]),g=X(b[9]+b[11]));h.call(a,X(b[1]),X(b[2])-1,X(b[3]));e=X(b[4]||0)-e;g=X(b[5]||0)-g;h=X(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,e,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
	return function(c,d,e){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;y(c)&&(c=Gg.test(c)?X(c):b(c));W(c)&&(c=new Date(c));if(!ea(c)||!isFinite(c.getTime()))return c;for(;d;)(l=Hg.exec(d))?(h=ab(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();e&&(m=Ic(e,m),c=Vb(c,e,!0));q(h,function(b){k=Ig[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function zg(){return function(a,b){x(b)&&(b=2);return cb(a,b)}}function Ag(){return function(a,
	b,d){b=Infinity===Math.abs(Number(b))?Number(b):X(b);if(ga(b))return a;W(a)&&(a=a.toString());if(!ta(a))return a;d=!d||isNaN(d)?0:X(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?vc(a,d,d+b):0===d?vc(a,b,a.length):vc(a,Math.max(0,d+b),d)}}function vc(a,b,d){return y(a)?a.slice(b,d):wa.call(a,b,d)}function Md(a){function b(b){return b.map(function(b){var c=1,d=Ya;if(B(b))d=b;else if(y(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var f=
	d(),d=function(a){return a[f]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(E(k)&&(k=a.index),E(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,e,g,h){if(null==a)return a;if(!ta(a))throw H("orderBy")("notarray",a);G(e)||(e=[e]);0===e.length&&
	(e=["+"]);var k=b(e),l=g?-1:1,m=B(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(B(e.valueOf)&&(e=e.valueOf(),d(e)))break a;Ub(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*
	l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Ra(a){B(a)&&(a={link:a});a.restrict=a.restrict||"AC";return fa(a)}function Kb(a,b,d,c,f){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=f(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=Lb;this.$$element=a;this.$$animate=c;Sd(this)}function Sd(a){a.$$classCache={};a.$$classCache[Td]=!(a.$$classCache[nb]=
	a.$$element.hasClass(nb))}function Ud(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Mc(c,"-"):"";b(a,nb+c,!0===d);b(a,Td+c,!1===d)}var c=a.set,f=a.unset;a.clazz.prototype.$setValidity=function(a,g,h){x(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,h)):(this.$pending&&f(this.$pending,a,h),Vd(this.$pending)&&(this.$pending=void 0));
	Ia(g)?g?(f(this.$error,a,h),c(this.$$success,a,h)):(c(this.$error,a,h),f(this.$$success,a,h)):(f(this.$error,a,h),f(this.$$success,a,h));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=Vd(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,g,this)}}function Vd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;
	return!0}function wc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Sa(a,b,d,c,f,e){var g=L(b[0].type);if(!f.android){var h=!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(e.defer.cancel(k),k=null);if(!h){var f=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(f=R(f));(c.$viewValue!==f||""===f&&c.$$hasNativeValidators)&&c.$setViewValue(f,a)}};if(f.hasEvent("input"))b.on("input",l);else{var m=
	function(a,b,c){k||(k=e.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(f.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(Wd[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=e.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?
	"":c.$viewValue;b.val()!==a&&b.val(a)}}function Mb(a,b){return function(d,c){var f,e;if(ea(d))return d;if(y(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Jg.test(d))return new Date(d);a.lastIndex=0;if(f=a.exec(d))return f.shift(),e=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(f,function(a,c){c<b.length&&(e[b[c]]=+a)}),new Date(e.yyyy,
	e.MM-1,e.dd,e.HH,e.mm,e.ss||0,1E3*e.sss||0)}return NaN}}function ob(a,b,d,c){return function(f,e,g,h,k,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return u(a)&&!ea(a)?d(a)||void 0:a}xc(f,e,g,h);Sa(f,e,g,h,k,l);var t=h&&h.$options.getOption("timezone"),q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,q),t&&(a=Vb(a,t)),a});h.$formatters.push(function(a){if(a&&!ea(a))throw pb("datefmt",a);if(n(a))return(q=a)&&
	t&&(q=Vb(q,t,!0)),m("date")(a,c,t);q=null;return""});if(u(g.min)||g.ngMin){var r;h.$validators.min=function(a){return!n(a)||x(r)||d(a)>=r};g.$observe("min",function(a){r=p(a);h.$validate()})}if(u(g.max)||g.ngMax){var s;h.$validators.max=function(a){return!n(a)||x(s)||d(a)<=s};g.$observe("max",function(a){s=p(a);h.$validate()})}}}function xc(a,b,d,c){(c.$$hasNativeValidators=E(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Xd(a){a.$$parserName=
	"number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Kg.test(b))return parseFloat(b)});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!W(b))throw pb("numfmt",b);b=b.toString()}return b})}function Ta(a){u(a)&&!W(a)&&(a=parseFloat(a));return ga(a)?void 0:a}function yc(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function Yd(a,b,d){a=Number(a);if((a|0)!==a||(b|0)!==b||(d|0)!==d){var c=Math.max(yc(a),yc(b),yc(d)),
	c=Math.pow(10,c);a*=c;b*=c;d*=c}return 0===(a-b)%d}function Zd(a,b,d,c,f){if(u(c)){a=a(c);if(!a.constant)throw pb("constexpr",d,c);return a(b)}return f}function zc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var f=a[d],m=0;m<b.length;m++)if(f===b[m])continue a;c.push(f)}return c}function f(a){var b=[];return G(a)?(q(a,function(a){b=b.concat(f(a))}),b):y(a)?a.split(" "):E(a)?(q(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",
	link:function(e,g,h){function k(a){a=l(a,1);h.$addClass(a)}function l(a,b){var c=g.data("$classCounts")||T(),d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||(e.$index&1)===b){var c=f(a||[]);if(!p)k(c);else if(!ma(a,p)){var d=f(p);m(d,c)}}p=G(a)?a.map(function(a){return ja(a)}):ja(a)}
	var p;e.$watch(h[a],n,!0);h.$observe("class",function(b){n(e.$eval(h[a]))});"ngClass"!==a&&e.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=f(e.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g))}})}}}]}function Nb(a,b,d,c,f,e,g,h,k){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;
	this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=k(d.name||"",!1)(a);this.$$parentForm=Lb;this.$options=Ob;this.$$parsedNgModel=f(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$currentValidationRunId=0;this.$$scope=a;this.$$attr=d;this.$$element=c;this.$$animate=e;this.$$timeout=g;this.$$parse=
	f;this.$$q=h;this.$$exceptionHandler=b;Sd(this);Lg(this)}function Lg(a){a.$$scope.$watch(function(){var b=a.$$ngModelGet(a.$$scope);if(b!==a.$modelValue&&(a.$modelValue===a.$modelValue||b===b)){a.$modelValue=a.$$rawModelValue=b;a.$$parserValid=void 0;for(var d=a.$formatters,c=d.length,f=b;c--;)f=d[c](f);a.$viewValue!==f&&(a.$$updateEmptyClasses(f),a.$viewValue=a.$$lastCommittedViewValue=f,a.$render(),a.$$runValidators(a.$modelValue,a.$viewValue,v))}return b})}function Ac(a){this.$$options=a}function $d(a,
	b){q(b,function(b,c){u(a[c])||(a[c]=b)})}var Mg=/^\/(.+)\/([a-z]*)$/,va=Object.prototype.hasOwnProperty,L=function(a){return y(a)?a.toLowerCase():a},ub=function(a){return y(a)?a.toUpperCase():a},La,F,na,wa=[].slice,mg=[].splice,Ng=[].push,la=Object.prototype.toString,Fc=Object.getPrototypeOf,Ga=H("ng"),Z=A.angular||(A.angular={}),Yb,qb=0;La=A.document.documentMode;var ga=Number.isNaN||function(a){return a!==a};v.$inject=[];Ya.$inject=[];var G=Array.isArray,ke=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
	R=function(a){return y(a)?a.trim():a},Fd=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},za=function(){if(!u(za.rules)){var a=A.document.querySelector("[ng-csp]")||A.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");za.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=za;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,
	noInlineStyle:!1}}}return za.rules},rb=function(){if(u(rb.name_))return rb.name_;var a,b,d=Ka.length,c,f;for(b=0;b<d;++b)if(c=Ka[b],a=A.document.querySelector("["+c.replace(":","\\:")+"jq]")){f=a.getAttribute(c+"jq");break}return rb.name_=f},me=/:/g,Ka=["ng-","data-ng-","ng:","x-ng-"],pe=function(a){if(!a.currentScript)return!0;var b=a.currentScript.getAttribute("src"),d=a.createElement("a");d.href=b;if(a.location.origin===d.origin)return!0;switch(d.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;
	default:return!1}}(A.document),se=/[A-Z]/g,Nc=!1,Ja=3,xe={full:"1.6.0",major:1,minor:6,dot:0,codeName:"rainbow-tsunami"};U.expando="ng339";var ib=U.cache={},Zf=1;U._data=function(a){return this.cache[a[this.expando]]||{}};var Vf=/-([a-z])/g,Og=/^-ms-/,zb={mouseleave:"mouseout",mouseenter:"mouseover"},$b=H("jqLite"),Yf=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Zb=/<|&#?\w+;/,Wf=/<([\w:-]+)/,Xf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,oa={option:[1,'<select multiple="multiple">',
	"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};oa.optgroup=oa.option;oa.tbody=oa.tfoot=oa.colgroup=oa.caption=oa.thead;oa.th=oa.td;var dg=A.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Na=U.prototype={ready:Zc,toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},
	eq:function(a){return 0<=a?F(this[a]):F(this[this.length+a])},length:0,push:Ng,sort:[].sort,splice:[].splice},Fb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Fb[L(a)]=a});var dd={};q("input select option textarea button form details".split(" "),function(a){dd[a]=!0});var kd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};q({data:cc,removeData:hb,hasData:function(a){for(var b in ib[a.ng339])return!0;
	return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)hb(a[b])}},function(a,b){U[b]=a});q({data:cc,inheritedData:Db,scope:function(a){return F.data(a,"$scope")||Db(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return F.data(a,"$isolateScope")||F.data(a,"$isolateScopeNoTemplate")},controller:ad,injector:function(a){return Db(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Ab,css:function(a,b,d){b=wb(b.replace(Og,"ms-"));if(u(d))a.style[b]=d;
	else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Ja&&2!==c&&8!==c&&a.getAttribute){var c=L(b),f=Fb[c];if(u(d))null===d||!1===d&&f?a.removeAttribute(b):a.setAttribute(b,f?c:d);else return a=a.getAttribute(b),f&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(u(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(x(d)){var c=a.nodeType;return 1===c||c===Ja?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(x(b)){if(a.multiple&&"select"===
	xa(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(x(b))return a.innerHTML;xb(a,!0);a.innerHTML=b},empty:bd},function(a,b){U.prototype[b]=function(b,c){var f,e,g=this.length;if(a!==bd&&x(2===a.length&&a!==Ab&&a!==ad?b:c)){if(E(b)){for(f=0;f<g;f++)if(a===cc)a(this[f],b);else for(e in b)a(this[f],e,b[e]);return this}f=a.$dv;g=x(f)?Math.min(g,1):g;for(e=0;e<g;e++){var h=a(this[e],b,c);f=f?f+h:h}return f}for(f=0;f<g;f++)a(this[f],
	b,c);return this}});q({removeData:hb,on:function(a,b,d,c){if(u(c))throw $b("onargs");if(Xc(a)){c=yb(a,!0);var f=c.events,e=c.handle;e||(e=c.handle=ag(a,f));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=f[b];h||(h=f[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,e));h.push(d)};g--;)b=c[g],zb[b]?(h(zb[b],cg),h(b,void 0,!0)):h(b)}},off:$c,one:function(a,b,d){a=F(a);a.on(b,function f(){a.off(b,d);a.off(b,f)});a.on(b,d)},replaceWith:function(a,
	b){var d,c=a.parentNode;xb(a);q(new U(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new U(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new U(b),function(b){a.insertBefore(b,d)})}},
	wrap:function(a,b){var d=F(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Eb,detach:function(a){Eb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new U(b);for(var f=0,e=b.length;f<e;f++){var g=b[f];c.insertBefore(g,d.nextSibling);d=g}},addClass:Cb,removeClass:Bb,toggleClass:function(a,b,d){b&&q(b.split(" "),function(b){var f=d;x(f)&&(f=!Ab(a,b));(f?Cb:Bb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},
	find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:bc,triggerHandler:function(a,b,d){var c,f,e=b.type||b,g=yb(a);if(g=(g=g&&g.events)&&g[e])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:v,type:e,target:a},b.type&&(c=Q(c,
	b)),b=ja(g),f=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,f)})}},function(a,b){U.prototype[b]=function(b,c,f){for(var e,g=0,h=this.length;g<h;g++)x(e)?(e=a(this[g],b,c,f),u(e)&&(e=F(e))):ac(e,a(this[g],b,c,f));return u(e)?e:this}});U.prototype.bind=U.prototype.on;U.prototype.unbind=U.prototype.off;Pa.prototype={put:function(a,b){this[ka(a,this.nextUid)]=b},get:function(a){return this[ka(a,this.nextUid)]},remove:function(a){var b=this[a=ka(a,this.nextUid)];delete this[a];
	return b}};var Tf=[function(){this.$get=[function(){return Pa}]}],fg=/^([^(]+?)=>/,gg=/^[^(]*\(\s*([^)]*)\)/m,Pg=/,/,Qg=/^\s*(_?)(\S+?)\1\s*$/,eg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,ca=H("$injector");eb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw y(d)&&d||(d=a.name||hg(a)),ca("strictdi",d);b=ed(a);q(b[1].split(Pg),function(a){a.replace(Qg,function(a,b,d){c.push(d)})})}a.$inject=c}}else G(a)?(b=a.length-1,sb(a[b],"fn"),c=a.slice(0,b)):sb(a,
	"fn",!0);return c};var ae=H("$animate"),kf=function(){this.$get=v},lf=function(){var a=new Pa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function f(a,b,c){var d=!1;b&&(b=y(b)?b.split(" "):G(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function e(){q(b,function(b){var c=a.get(b);if(c){var d=ig(b.attr("class")),e="",f="";q(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Cb(a,e);f&&Bb(a,f)});a.remove(b)}});b.length=0}return{enabled:v,
	on:v,off:v,pin:v,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=f(k,h,!0),l=f(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(e);g=new d;g.complete();return g}}}]},hf=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw ae("notcsel",d);var f=d+"-animation";b.$$registeredAnimations[d.substr(1)]=
	f;a.factory(f,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw ae("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,
	off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,e,g,h){e=e&&F(e);g=g&&F(g);e=e||g.parent();b(f,e,g);return a.push(f,"enter",Aa(h))},move:function(f,e,g,h){e=e&&F(e);g=g&&F(g);e=e||g.parent();b(f,e,g);return a.push(f,"move",Aa(h))},leave:function(b,c){return a.push(b,"leave",Aa(c),function(){b.remove()})},addClass:function(b,c,g){g=Aa(g);g.addClass=jb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Aa(g);g.removeClass=jb(g.removeClass,
	c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Aa(h);h.addClass=jb(h.addClass,c);h.removeClass=jb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Aa(k);k.from=k.from?Q(k.from,c):c;k.to=k.to?Q(k.to,g):g;k.tempClasses=jb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],nf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=
	!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},mf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,f){function e(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?f(a,0,!1):b(a)};this._state=0}e.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};e.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};
	e.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:v,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&
	this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return e}]},jf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,f){function e(){a(function(){g.addClass&&
	(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=f||{};g.$$prepared||(g=Fa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:e,end:e}}}]},da=H("$compile"),gc=new function(){};Pc.$inject=["$provide","$$sanitizeUriProvider"];Hb.prototype.isFirstChange=function(){return this.previousValue===gc};var fd=/^((?:x|data)[:\-_])/i,
	lg=/[:\-_]+(.)/g,md=H("$controller"),ld=/^(\S+)(\s+as\s+([\w$]+))?$/,uf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof F&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},nd="application/json",jc={"Content-Type":nd+";charset=utf-8"},og=/^\[|^\{(?!\{)/,pg={"[":/]$/,"{":/}$/},ng=/^\)]\}',?\n/,sd=H("$http"),Ea=Z.$interpolateMinErr=H("$interpolate");Ea.throwNoconcat=function(a){throw Ea("noconcat",a);};Ea.interr=function(a,b){return Ea("interr",a,b.toString())};
	var Cf=function(){this.$get=["$window",function(a){function b(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var d=a.angular.callbacks,c={};return{createCallback:function(a){a="_"+(d.$$counter++).toString(36);var e="angular.callbacks."+a,g=b(a);c[e]=d[a]=g;return e},wasCalled:function(a){return c[a].called},getResponse:function(a){return c[a].data},removeCallback:function(a){delete d[c[a].id];delete c[a]}}}]},Rg=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,rg={http:80,https:443,ftp:21},kb=H("$location"),
	sg=/^\s*[\\/]{2,}/,Sg={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Ib("$$absUrl"),url:function(a){if(x(a))return this.$$url;var b=Rg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Ib("$$protocol"),host:Ib("$$host"),port:Ib("$$port"),path:wd("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(y(a)||
	W(a))a=a.toString(),this.$$search=Kc(a);else if(E(a))a=Fa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw kb("isrcharg");break;default:x(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:wd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([vd,nc,mc],function(a){a.prototype=Object.create(Sg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==mc||!this.$$html5)throw kb("nostate");
	this.$$state=x(b)?null:b;return this}});var Ua=H("$parse"),vg={}.constructor.prototype.valueOf,Pb=T();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Pb[a]=!0});var Tg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},pc=function(a){this.options=a};pc.prototype={constructor:pc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();
	else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Pb[b],f=Pb[d];Pb[a]||c||f?(a=f?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=
	a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?
	this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===
	a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=u(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ua("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=L(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
	c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;
	for(var d="",c=a,f=!1;this.index<this.text.length;){var e=this.text.charAt(this.index),c=c+e;if(f)"u"===e?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Tg[e]||e,f=!1;else if("\\"===e)f=!0;else{if(e===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=e}this.index++}this.throwError("Unterminated quote",b)}};var r=function(a,b){this.lexer=
	a;this.options=b};r.Program="Program";r.ExpressionStatement="ExpressionStatement";r.AssignmentExpression="AssignmentExpression";r.ConditionalExpression="ConditionalExpression";r.LogicalExpression="LogicalExpression";r.BinaryExpression="BinaryExpression";r.UnaryExpression="UnaryExpression";r.CallExpression="CallExpression";r.MemberExpression="MemberExpression";r.Identifier="Identifier";r.Literal="Literal";r.ArrayExpression="ArrayExpression";r.Property="Property";r.ObjectExpression="ObjectExpression";
	r.ThisExpression="ThisExpression";r.LocalsExpression="LocalsExpression";r.NGValueParameter="NGValueParameter";r.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:r.Program,body:a}},expressionStatement:function(){return{type:r.ExpressionStatement,
	expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!zd(a))throw Ua("lval");a={type:r.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:r.ConditionalExpression,
	test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:r.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:r.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.relational()};
	return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},
	unary:function(){var a;return(a=this.expect("+","-","!"))?{type:r.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Fa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:r.Literal,value:this.options.literals[this.consume().text]}:
	this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:r.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:r.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:r.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");
	return a},filter:function(a){a=[a];for(var b={type:r.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:r.Identifier,name:a.text}},constant:function(){return{type:r.Literal,value:this.consume().value}},
	arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:r.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:r.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?
	(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:r.ObjectExpression,properties:a}},throwError:function(a,b){throw Ua("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ua("ueoe",
	this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ua("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,f){if(this.tokens.length>a){a=this.tokens[a];var e=a.text;if(e===b||e===d||e===c||e===f||!(b||d||c||f))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:r.ThisExpression},
	$locals:{type:r.LocalsExpression}}};Cd.prototype={compile:function(a){var b=this;a=this.astBuilder.ast(a);this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};S(a,b.$filter);var d="",c;this.stage="assign";if(c=Ad(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=yd(a.body);b.stage="inputs";q(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=
	d;var h=b.nextId();b.recurse(a,h);b.return_(h);b.state.inputs.push(d);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);d='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";d=(new Function("$filter","getStringValue","ifDefined","plus",d))(this.$filter,tg,ug,xd);this.state=this.stage=void 0;d.literal=Bd(a);d.constant=a.constant;return d},USE:"use",STRICT:"strict",watchFns:function(){var a=[],
	b=this.state.inputs,d=this;q(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+
	";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,f,e){var g,h,k=this,l,m,n;c=c||v;if(!e&&u(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,f,!0));else switch(a.type){case r.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case r.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);
	break;case r.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case r.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case r.LogicalExpression:b=b||this.nextId();k.recurse(a.left,
	b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case r.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case r.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){f&&
	1!==f&&k.if_(k.isNull(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));c(b);break;case r.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){a.computed?(h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),f&&1!==f&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,
	h),"{}")),m=k.computedMember(g,h),k.assign(b,m),d&&(d.computed=!0,d.name=h)):(f&&1!==f&&k.if_(k.isNull(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}")),m=k.nonComputedMember(g,a.property.name),k.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){k.assign(b,"undefined")});c(b)},!!f);break;case r.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),
	m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){q(a.arguments,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m=g.name?k.member(g.context,g.name,g.computed)+"("+l.join(",")+")":h+"("+l.join(",")+")";k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case r.AssignmentExpression:h=this.nextId();g={};this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),
	function(){k.recurse(a.right,h);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case r.ArrayExpression:l=[];q(a.elements,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case r.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===
	r.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===r.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case r.ThisExpression:this.assign(b,"s");c(b||"s");break;case r.LocalsExpression:this.assign(b,"l");c(b||"l");break;case r.NGValueParameter:this.assign(b,"v"),c(b||
	"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",
	a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,
	b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,f,e){var g=this;return function(){g.recurse(a,b,d,c,f,e)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(y(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(W(a))return a.toString();
	if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ua("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Dd.prototype={compile:function(a){var b=this;a=this.astBuilder.ast(a);S(a,b.$filter);var d,c;if(d=Ad(a))c=this.recurse(d);d=yd(a.body);var f;d&&(f=[],q(d,function(a,c){var d=b.recurse(a);a.input=d;f.push(d);
	a.watchId=c}));var e=[];q(a.body,function(a){e.push(b.recurse(a.expression))});d=0===a.body.length?v:1===a.body.length?e[0]:function(a,b){var c;q(e,function(d){c=d(a,b)});return c};c&&(d.assign=function(a,b,d){return c(a,d,b)});f&&(d.inputs=f);d.literal=Bd(a);d.constant=a.constant;return d},recurse:function(a,b,d){var c,f,e=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case r.Literal:return this.value(a.value,b);case r.UnaryExpression:return f=this.recurse(a.argument),this["unary"+
	a.operator](f,b);case r.BinaryExpression:return c=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](c,f,b);case r.LogicalExpression:return c=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](c,f,b);case r.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case r.Identifier:return e.identifier(a.name,b,d);case r.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(f=a.property.name),
	a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(c,f,b,d):this.nonComputedMember(c,f,b,d);case r.CallExpression:return g=[],q(a.arguments,function(a){g.push(e.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,c,d,e){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,e));a=f.apply(void 0,n,e);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,e){var n=f(a,c,d,e),p;if(null!=n.value){p=[];for(var q=0;q<
	g.length;++q)p.push(g[q](a,c,d,e));p=n.value.apply(n.context,p)}return b?{value:p}:p};case r.AssignmentExpression:return c=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,e,g){var n=c(a,d,e,g);a=f(a,d,e,g);n.context[n.name]=a;return b?{value:a}:a};case r.ArrayExpression:return g=[],q(a.elements,function(a){g.push(e.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case r.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?
	g.push({key:e.recurse(a.key),computed:!0,value:e.recurse(a.value)}):g.push({key:a.key.type===r.Identifier?a.key.name:""+a.key.value,computed:!1,value:e.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case r.ThisExpression:return function(a){return b?{value:a}:a};case r.LocalsExpression:return function(a,c){return b?{value:c}:c};case r.NGValueParameter:return function(a,
	c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,f,e){d=a(d,c,f,e);d=u(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,f,e){d=a(d,c,f,e);d=u(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,f,e){d=!a(d,c,f,e);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,f,e,g){var h=a(c,f,e,g);c=b(c,f,e,g);h=xd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,f,e,g){var h=a(c,f,e,g);c=b(c,f,e,g);
	h=(u(h)?h:0)-(u(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)*b(c,f,e,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)/b(c,f,e,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)%b(c,f,e,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)===b(c,f,e,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,f,e,g){c=a(c,
	f,e,g)!==b(c,f,e,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)==b(c,f,e,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)!=b(c,f,e,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)<b(c,f,e,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)>b(c,f,e,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,
	g)<=b(c,f,e,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)>=b(c,f,e,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)&&b(c,f,e,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)||b(c,f,e,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(f,e,g,h){f=a(f,e,g,h)?b(f,e,g,h):d(f,e,g,h);return c?{value:f}:f}},value:function(a,b){return function(){return b?{context:void 0,
	name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,f,e,g){c=f&&a in f?f:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});f=c?c[a]:void 0;return b?{context:c,name:a,value:f}:f}},computedMember:function(a,b,d,c){return function(f,e,g,h){var k=a(f,e,g,h),l,m;null!=k&&(l=b(f,e,g,h),l+="",c&&1!==c&&k&&!k[l]&&(k[l]={}),m=k[l]);return d?{context:k,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(f,e,g,h){f=a(f,e,g,h);c&&1!==c&&f&&null==f[b]&&(f[b]={});e=null!=f?f[b]:void 0;
	return d?{context:f,name:b,value:e}:e}},inputs:function(a,b){return function(d,c,f,e){return e?e[b]:a(d,c,f)}}};var qc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new r(a,d);this.astCompiler=d.csp?new Dd(this.ast,b):new Cd(this.ast,b)};qc.prototype={constructor:qc,parse:function(a){return this.astCompiler.compile(a)}};var ua=H("$sce"),qa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},rc=/_([a-z])/g,xg=H("$compile"),ba=A.document.createElement("a"),Hd=
	Da(A.location.href);Id.$inject=["$document"];Wc.$inject=["$provide"];var Pd=22,Od=".",tc="0";Jd.$inject=["$locale"];Ld.$inject=["$locale"];var Ig={yyyy:$("FullYear",4,0,!1,!0),yy:$("FullYear",2,0,!0,!0),y:$("FullYear",1,0,!1,!0),MMMM:mb("Month"),MMM:mb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),LLLL:mb("Month",!1,!0),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",
	3),EEEE:mb("Day"),EEE:mb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Jb(Math[0<a?"floor":"ceil"](a/60),2)+Jb(Math.abs(a%60),2))},ww:Rd(2),w:Rd(1),G:uc,GG:uc,GGG:uc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Hg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,Gg=/^-?\d+$/;Kd.$inject=["$locale"];var Bg=fa(L),Cg=fa(ub);Md.$inject=["$parse"];var ze=fa({restrict:"E",
	compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===la.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(f)||a.preventDefault()})}}}}),vb={};q(Fb,function(a,b){function d(a,d,f){a.$watch(f[c],function(a){f.$set(b,!!a)})}if("multiple"!==a){var c=Ca("ng-"+b),f=d;"checked"===a&&(f=function(a,b,f){f.ngModel!==f[c]&&d(a,b,f)});vb[c]=function(){return{restrict:"A",priority:100,link:f}}}});q(kd,
	function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,f){if("ngPattern"===b&&"/"===f.ngPattern.charAt(0)&&(c=f.ngPattern.match(Mg))){f.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(f[b],function(a){f.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Ca("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,f){var e=a,g=a;"href"===a&&"[object SVGAnimatedString]"===la.call(c.prop("href"))&&(g="xlinkHref",f.$attr[g]="xlink:href",e=null);f.$observe(b,function(b){b?
	(f.$set(g,b),La&&e&&c.prop(e,f[g])):"href"===a&&f.$set(g,null)})}}}});var Lb={$addControl:v,$$renameControl:function(a,b){a.$name=b},$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v,$setSubmitted:v};Kb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Kb.prototype={$rollbackViewValue:function(){q(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){q(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Oa(a.$name,"input");
	this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];q(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);q(this.$error,function(b,d){this.$setValidity(d,null,a)},this);q(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);$a(this.$$controls,a);a.$$parentForm=Lb},$setDirty:function(){this.$$animate.removeClass(this.$$element,
	Va);this.$$animate.addClass(this.$$element,Qb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Va,Qb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;q(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){q(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;this.$$parentForm.$setSubmitted()}};
	Ud({clazz:Kb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&($a(c,d),0===c.length&&delete a[b])}});var be=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||v}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Kb,compile:function(d,e){d.addClass(Va).addClass(nb);var g=e.name?"name":a&&e.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in
	e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var q=g?c(n.$name):v;g&&(q(a,n),e.$observe(g,function(b){n.$name!==b&&(q(a,void 0),n.$$parentForm.$$renameControl(n,b),q=c(n.$name),q(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);q(a,void 0);Q(n,Lb)})}}}}}]},Ae=be(),
	Me=be(!0),Jg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Ug=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Vg=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Kg=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,ce=/^(\d{4,})-(\d{2})-(\d{2})$/,de=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
	Bc=/^(\d{4,})-W(\d\d)$/,ee=/^(\d{4,})-(\d\d)$/,fe=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Wd=T();q(["date","datetime-local","month","time","week"],function(a){Wd[a]=!0});var ge={text:function(a,b,d,c,f,e){Sa(a,b,d,c,f,e);wc(c)},date:ob("date",ce,Mb(ce,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ob("datetimelocal",de,Mb(de,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:ob("time",fe,Mb(fe,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:ob("week",Bc,function(a,b){if(ea(a))return a;
	if(y(a)){Bc.lastIndex=0;var d=Bc.exec(a);if(d){var c=+d[1],f=+d[2],e=d=0,g=0,h=0,k=Qd(c),f=7*(f-1);b&&(d=b.getHours(),e=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+f,d,e,g,h)}}return NaN},"yyyy-Www"),month:ob("month",ee,Mb(ee,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,f,e){xc(a,b,d,c);Xd(c);Sa(a,b,d,c,f,e);var g,h;if(u(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||x(g)||a>=g},d.$observe("min",function(a){g=Ta(a);c.$validate()});
	if(u(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||x(h)||a<=h},d.$observe("max",function(a){h=Ta(a);c.$validate()});if(u(d.step)||d.ngStep){var k;c.$validators.step=function(a,b){return c.$isEmpty(b)||x(k)||Yd(b,g||0,k)};d.$observe("step",function(a){k=Ta(a);c.$validate()})}},url:function(a,b,d,c,f,e){Sa(a,b,d,c,f,e);wc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||Ug.test(d)}},email:function(a,b,d,c,f,e){Sa(a,b,d,c,f,e);wc(c);c.$$parserName=
	"email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Vg.test(d)}},radio:function(a,b,d,c){var f=!d.ngTrim||"false"!==R(d.ngTrim);x(d.name)&&b.attr("name",++qb);b.on("click",function(a){var g;b[0].checked&&(g=d.value,f&&(g=R(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;f&&(a=R(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,f,e){function g(a,c){b.attr(a,d[a]);d.$observe(a,c)}function h(a){n=Ta(a);ga(c.$modelValue)||
	(m?(a=b.val(),n>a&&(a=n,b.val(a)),c.$setViewValue(a)):c.$validate())}function k(a){p=Ta(a);ga(c.$modelValue)||(m?(a=b.val(),p<a&&(b.val(p),a=p<n?n:p),c.$setViewValue(a)):c.$validate())}function l(a){q=Ta(a);ga(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}xc(a,b,d,c);Xd(c);Sa(a,b,d,c,f,e);var m=c.$$hasNativeValidators&&"range"===b[0].type,n=m?0:void 0,p=m?100:void 0,q=m?1:void 0,r=b[0].validity;a=u(d.min);f=u(d.max);e=u(d.step);var v=c.$render;c.$render=m&&u(r.rangeUnderflow)&&
	u(r.rangeOverflow)?function(){v();c.$setViewValue(b.val())}:v;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(n)||b>=n},g("min",h));f&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(p)||b<=p},g("max",k));e&&(c.$validators.step=m?function(){return!r.stepMismatch}:function(a,b){return c.$isEmpty(b)||x(q)||Yd(b,n||0,q)},g("step",l))},checkbox:function(a,b,d,c,f,e,g,h){var k=Zd(h,a,"ngTrueValue",d.ngTrueValue,!0),l=Zd(h,a,"ngFalseValue",
	d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return ma(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:v,button:v,submit:v,reset:v,file:v},Qc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,e,g,h){h[0]&&(ge[L(g.type)]||ge.text)(f,e,g,h[0],b,a,d,c)}}}}],Wg=/^(true|false|\d+)$/,
	df=function(){return{restrict:"A",priority:100,compile:function(a,b){return Wg.test(b.ngValue)?function(a,b,f){a=a.$eval(f.ngValue);b.prop("value",a);f.$set("value",a)}:function(a,b,f){a.$watch(f.ngValue,function(a){b.prop("value",a);f.$set("value",a)})}}}},Ee=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,f){a.$$addBindingInfo(c,f.ngBind);c=c[0];b.$watch(f.ngBind,function(a){c.textContent=Xb(a)})}}}}],Ge=["$interpolate","$compile",function(a,
	b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];e.$observe("ngBindTemplate",function(a){d.textContent=x(a)?"":a})}}}}],Fe=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,f){var e=b(f.ngBindHtml),g=b(f.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,f){d.$$addBindingInfo(c,f.ngBindHtml);b.$watch(g,function(){var d=e(b);
	c.html(a.getTrustedHtml(d)||"")})}}}}],cf=fa({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),He=zc("",!0),Je=zc("Odd",0),Ie=zc("Even",1),Ke=Ra({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Le=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Vc={},Xg={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
	function(a){var b=Ca("ng-"+a);Vc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(f,e){var g=d(e[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Xg[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Oe=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,f,e,g){var h,k,l;d.$watch(f.ngIf,function(d){d?k||g(function(d,e){k=e;d[d.length++]=
	b.$$createComment("end ngIf",f.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),h=null))})}}}],Pe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Z.noop,compile:function(c,f){var e=f.ngInclude||f.src,g=f.onload||"",h=f.autoscroll;return function(c,f,m,n,p){var q=0,r,v,s,x=function(){v&&(v.remove(),
	v=null);r&&(r.$destroy(),r=null);s&&(d.leave(s).done(function(a){!1!==a&&(v=null)}),v=s,s=null)};c.$watch(e,function(e){var m=function(a){!1===a||!u(h)||h&&!c.$eval(h)||b()},v=++q;e?(a(e,!0).then(function(a){if(!c.$$destroyed&&v===q){var b=c.$new();n.template=a;a=p(b,function(a){x();d.enter(a,null,f).done(m)});r=b;s=a;r.$emit("$includeContentLoaded",e);c.$eval(g)}},function(){c.$$destroyed||v!==q||(x(),c.$emit("$includeContentError",e))}),c.$emit("$includeContentRequested",e)):(x(),n.template=null)})}}}}],
	ff=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,f){la.call(d[0]).match(/SVG/)?(d.empty(),a(Yc(f.template,A.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(b))}}}],Qe=Ra({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),bf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var f=d.ngList||", ",e="false"!==d.ngTrim,g=
	e?R(f):f;c.$parsers.push(function(a){if(!x(a)){var b=[];a&&q(a.split(g),function(a){a&&b.push(e?R(a):a)});return b}});c.$formatters.push(function(a){if(G(a))return a.join(f)});c.$isEmpty=function(a){return!a||!a.length}}}},nb="ng-valid",Td="ng-invalid",Va="ng-pristine",Qb="ng-dirty",pb=H("ngModel");Nb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Nb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=
	this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);B(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){B(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw pb("nonassign",this.$$attr.ngModel,ya(this.$$element));},$render:v,$isEmpty:function(a){return x(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,
	"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Qb);this.$$animate.addClass(this.$$element,Va)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Va);this.$$animate.addClass(this.$$element,Qb);this.$$parentForm.$setDirty()},
	$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!ga(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,
	d=this.$valid,c=this.$modelValue,f=this.$options.getOption("allowInvalid"),e=this;this.$$runValidators(b,a,function(a){f||d===a||(e.$modelValue=a?b:void 0,e.$modelValue!==c&&e.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;q(k.$validators,function(d,f){var g=Boolean(d(a,b));c=c&&g;e(f,g)});return c?!0:(q(k.$asyncValidators,function(a,b){e(b,null)}),!1)}function f(){var c=[],d=!0;q(k.$asyncValidators,function(f,g){var h=f(a,b);if(!h||!B(h.then))throw pb("nopromise",
	h);e(g,void 0);c.push(h.then(function(){e(g,!0)},function(){d=!1;e(g,!1)}))});c.length?k.$$q.all(c).then(function(){g(d)},v):g(!0)}function e(a,b){h===k.$$currentValidationRunId&&k.$setValidity(a,b)}function g(a){h===k.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var h=this.$$currentValidationRunId,k=this;(function(){var a=k.$$parserName||"parse";if(x(k.$$parserValid))e(a,null);else return k.$$parserValid||(q(k.$validators,function(a,b){e(b,null)}),q(k.$asyncValidators,function(a,
	b){e(b,null)})),e(a,k.$$parserValid),k.$$parserValid;return!0})()?c()?f():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;if(this.$$parserValid=x(a)?void 0:!0)for(var d=0;d<
	this.$parsers.length;d++)if(a=this.$parsers[d](a),x(a)){this.$$parserValid=!1;break}ga(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,f=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;f&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){f||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,
	this.$modelValue);q(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");W(b[a])?b=b[a]:W(b["default"])&&(b=b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$scope.$root.$$phase?
	this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})}};Ud({clazz:Nb,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var af=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Nb,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(nb);return{pre:function(a,b,f,e){var g=e[0];b=e[1]||g.$$parentForm;if(e=e[2])g.$options=e.$options;g.$$initGetterSetters();b.$addControl(g);f.$observe("name",
	function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,f,e){function g(){h.$setTouched()}var h=e[0];if(h.$options.getOption("updateOn"))c.on(h.$options.getOption("updateOn"),function(a){h.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){h.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Ob,Yg=/(\s+|^)default(\s+|$)/;Ac.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=
	!1;a=Q({},a);q(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=R(d.replace(Yg,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],$d(a,this.$$options));$d(a,Ob.$$options);return new Ac(a)}};Ob=new Ac({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var ef=function(){return{restrict:"A",priority:10,require:["ngModelOptions",
	"?^^ngModelOptions"],controller:function(){},link:{pre:function(a,b,d,c){c[0].$options=(c[1]?c[1].$options:Ob).createChild(a.$eval(d.ngModelOptions))}}}},Re=Ra({terminal:!0,priority:1E3}),Zg=H("ngOptions"),$g=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ze=["$compile","$document","$parse",function(a,b,d){function c(a,
	b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&ta(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match($g);if(!n)throw Zg("iexp",a,ya(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var r=n[9];b=d(n[2]?n[1]:p);var v=a&&d(a)||b,s=r&&d(r),u=r?function(a,b){return s(c,b)}:function(a){return ka(a)},w=function(a,b){return u(a,B(a,b))},x=d(n[2]||n[1]),A=d(n[3]||
	""),D=d(n[4]||""),K=d(n[8]),y={},B=q?function(a,b){y[q]=b;y[p]=a;return y}:function(a){y[p]=a;return y};return{trackBy:r,getTrackByValue:w,getWatchables:d(K,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=B(l,h),l=u(l,h);b.push(l);if(n[2]||n[1])l=x(c,h),b.push(l);n[4]&&(h=D(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=K(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===g?n:g[n],q=B(d[p],p),s=v(c,q),p=u(s,q),t=x(c,q),y=A(c,q),q=
	D(c,q),s=new e(p,s,t,y,q);a.push(s);b[p]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[w(a)]},getViewValueFromOption:function(a){return r?Fa(a.viewValue):a.viewValue}}}}}var f=A.document.createElement("option"),e=A.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=v},post:function(d,h,k,l){function m(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,
	b.textContent=a.label);b.value=a.selectValue}function n(){var a=w&&p.readValue();if(w)for(var b=w.items.length-1;0<=b;b--){var c=w.items[b];u(c.group)?Eb(c.element.parentNode):Eb(c.element)}w=y.getOptions();var d={};A&&h.prepend(p.emptyOption);w.items.forEach(function(a){var b;if(u(a.group)){b=d[a.group];b||(b=e.cloneNode(!1),B.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=f.cloneNode(!1)}else b=B,c=f.cloneNode(!1);b.appendChild(c);m(a,c)});h[0].appendChild(B);r.$render();
	r.$isEmpty(a)||(b=p.readValue(),(y.trackBy||v?ma(a,b):a===b)||(r.$setViewValue(b),r.$render()))}var p=l[0],r=l[1],v=k.multiple;l=0;for(var x=h.children(),s=x.length;l<s;l++)if(""===x[l].value){p.hasEmptyOption=!0;p.emptyOption=x.eq(l);break}var A=!!p.emptyOption;F(f.cloneNode(!1)).val("?");var w,y=c(k.ngOptions,h,d),B=b[0].createDocumentFragment();p.generateUnknownOptionValue=function(a){return"?"};v?(p.writeValue=function(a){w.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=
	w.getOptionFromViewValue(a))a.element.selected=!0})},p.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=w.selectValueMap[a])&&!a.disabled&&b.push(w.getViewValueFromOption(a))});return b},y.trackBy&&d.$watchCollection(function(){if(G(r.$viewValue))return r.$viewValue.map(function(a){return y.getTrackByValue(a)})},function(){r.$render()})):(p.writeValue=function(a){var b=w.selectValueMap[h.val()],c=w.getOptionFromViewValue(a);b&&b.element.removeAttribute("selected");c?(h[0].value!==c.selectValue&&
	(p.removeUnknownOption(),p.unselectEmptyOption(),h[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):A?p.selectEmptyOption():p.unknownOption.parent().length?p.updateUnknownOption(a):p.renderUnknownOption(a)},p.readValue=function(){var a=w.selectValueMap[h.val()];return a&&!a.disabled?(p.unselectEmptyOption(),p.removeUnknownOption(),w.getViewValueFromOption(a)):null},y.trackBy&&d.$watch(function(){return y.getTrackByValue(r.$viewValue)},function(){r.$render()}));
	A&&(p.emptyOption.remove(),a(p.emptyOption)(d),8===p.emptyOption[0].nodeType?(p.hasEmptyOption=!1,p.registerOption=function(a,b){""===b.val()&&(p.hasEmptyOption=!0,p.emptyOption=b,p.emptyOption.removeClass("ng-scope"),r.$render(),b.on("$destroy",function(){p.hasEmptyOption=!1;p.emptyOption=void 0}))}):p.emptyOption.removeClass("ng-scope"));h.empty();n();d.$watchCollection(y.getWatchables,n)}}}}],Se=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(e,
	g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=e.$eval(m)||{},r={},u=b.startSymbol(),y=b.endSymbol(),s=u+l+"-"+n+y,A=Z.noop,w;q(h,function(a,b){var c=f.exec(b);c&&(c=(c[1]?"-":"")+L(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){r[d]=b(a.replace(c,s))});e.$watch(l,function(b){var c=parseFloat(b),f=ga(c);f||c in p||(c=a.pluralCat(c-n));c===w||f&&ga(w)||(A(),f=r[c],x(f)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),A=v,k()):
	A=e.$watch(f,k),w=c)})}}}],Te=["$parse","$animate","$compile",function(a,b,d){var c=H("ngRepeat"),f=function(a,b,c,d,f,m,n){a[c]=d;f&&(a[f]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
	if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],r=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var v=l[3]||l[1],u=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var s,x,w,A,y={$id:ka};r?s=a(r):(w=function(a,b){return ka(b)},A=function(a){return a});return function(a,d,e,g,l){s&&(x=function(b,c,d){u&&(y[u]=b);y[v]=c;y.$index=
	d;return s(a,y)});var m=T();a.$watchCollection(n,function(e){var g,n,r=d[0],s,t=T(),y,B,F,E,G,H,L;p&&(a[p]=e);if(ta(e))G=e,n=x||w;else for(L in n=x||A,G=[],e)va.call(e,L)&&"$"!==L.charAt(0)&&G.push(L);y=G.length;L=Array(y);for(g=0;g<y;g++)if(B=e===G?g:G[g],F=e[B],E=n(B,F,g),m[E])H=m[E],delete m[E],t[E]=H,L[g]=H;else{if(t[E])throw q(L,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,E,F);L[g]={id:E,scope:void 0,clone:void 0};t[E]=!0}for(s in m){H=m[s];E=tb(H.clone);b.leave(E);if(E[0].parentNode)for(g=
	0,n=E.length;g<n;g++)E[g].$$NG_REMOVED=!0;H.scope.$destroy()}for(g=0;g<y;g++)if(B=e===G?g:G[g],F=e[B],H=L[g],H.scope){s=r;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);H.clone[0]!==s&&b.move(tb(H.clone),null,r);r=H.clone[H.clone.length-1];f(H.scope,g,v,F,u,B,y)}else l(function(a,c){H.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;H.clone=a;t[H.id]=H;f(H.scope,g,v,F,u,B,y)});m=t})}}}}],Ue=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,
	function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ne=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ve=Ra(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),We=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases=
	{}}],link:function(d,c,f,e){var g=[],h=[],k=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(f.ngSwitch||f.on,function(c){for(var d,f;k.length;)a.cancel(k.pop());d=0;for(f=l.length;d<f;++d){var r=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(r)).done(m(k,d))}h.length=0;l.length=0;(g=e.cases["!"+c]||e.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),
	f)})})})}}}],Xe=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,f){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});q(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:f,element:b})})}}),Ye=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,f){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:f,element:b})}}),ah=H("ngTransclude"),
	$e=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,e,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw ah("orphan",ya(b));e.ngTransclude===e.$attr.ngTransclude&&(e.ngTransclude="");e=e.ngTransclude||e.ngTranscludeSlot;h(function(a,c){var d;if(d=a.length)a:{d=0;for(var e=a.length;d<e;d++){var g=a[d];if(g.nodeType!==Ja||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(k(),c.$destroy())},null,e);e&&!h.isSlotFilled(e)&&
	k()}}}}],Be=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],bh={$setViewValue:v,$render:v},ch=["$element","$scope",function(a,b){function d(){h||(h=!0,b.$$postDigest(function(){h=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}function f(a){a.prop("selected",!0);a.attr("selected",!0)}
	var e=this,g=new Pa;e.selectValueMap={};e.ngModelCtrl=bh;e.multiple=!1;e.unknownOption=F(A.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);f(e.unknownOption);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);f(e.unknownOption);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+ka(a)+" ?"};e.removeUnknownOption=
	function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),f(e.emptyOption))};e.unselectEmptyOption=function(){e.hasEmptyOption&&e.emptyOption.removeAttr("selected")};b.$on("$destroy",function(){e.renderUnknownOption=v});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&c.removeAttribute("selected");e.hasOption(b)?
	(e.removeUnknownOption(),c=ka(b),a.val(c in e.selectValueMap?c:b),f(F(a[0].options[a[0].selectedIndex]))):null==b&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(b):e.renderUnknownOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Oa(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=g.get(a)||0;g.put(a,c+1);d()}};e.removeOption=function(a){var b=g.get(a);b&&(1===b?(g.remove(a),""===a&&(e.hasEmptyOption=
	!1,e.emptyOption=void 0)):g.put(a,b-1))};e.hasOption=function(a){return!!g.get(a)};var h=!1,k=!1;e.registerOption=function(a,b,d,f,g){if(d.$attr.ngValue){var h,k=NaN;d.$observe("value",function(a){var d,f=b.prop("selected");u(k)&&(e.removeOption(h),delete e.selectValueMap[k],d=!0);k=ka(a);h=a;e.selectValueMap[k]=a;e.addOption(a,b);b.attr("value",k);d&&f&&c()})}else f?d.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");u(h)&&(e.removeOption(h),d=!0);h=a;e.addOption(a,b);d&&f&&c()}):
	g?a.$watch(g,function(a,f){d.$set("value",a);var g=b.prop("selected");f!==a&&e.removeOption(f);e.addOption(a,b);f&&g&&c()}):e.addOption(d.value,b);d.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=d.value;e.removeOption(b);e.ngModelCtrl.$render();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Ce=function(){return{restrict:"E",require:["select",
	"?ngModel"],controller:ch,priority:1,link:{pre:function(a,b,d,c){var f=c[0],e=c[1];if(e){if(f.ngModelCtrl=e,b.on("change",function(){f.removeUnknownOption();a.$apply(function(){e.$setViewValue(f.readValue())})}),d.multiple){f.multiple=!0;f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in f.selectValueMap?f.selectValueMap[b]:b))});return a};f.writeValue=function(a){var c=new Pa(a);q(b.find("option"),function(a){a.selected=u(c.get(a.value))||
	u(c.get(f.selectValueMap[a.value]))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||ma(g,e.$viewValue)||(g=ja(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}else f.registerOption=v},post:function(a,b,d,c){var f=c[1];if(f){var e=c[0];f.$render=function(){e.writeValue(f.$viewValue)}}}}}},De=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,f;u(d.ngValue)||(u(d.value)?c=a(d.value,!0):(f=a(b.text(),!0))||d.$set("value",
	b.text()));return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,f)}}}}],Sc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Rc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var f,e=d.ngPattern||d.pattern;d.$observe("pattern",
	function(a){y(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw H("ngPattern")("noregexp",e,a,ya(b));f=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||x(f)||f.test(b)}}}}},Uc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var f=-1;d.$observe("maxlength",function(a){a=X(a);f=ga(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>f||c.$isEmpty(b)||b.length<=f}}}}},Tc=function(){return{restrict:"A",require:"?ngModel",
	link:function(a,b,d,c){if(c){var f=0;d.$observe("minlength",function(a){f=X(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=f}}}}};A.angular.bootstrap?A.console&&console.log("WARNING: Tried to load angular more than once."):(te(),we(Z),Z.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
	ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",
	mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var f=a|0,e=c;void 0===e&&(e=Math.min(b(a),3));Math.pow(10,e);return 1==f&&0==
	e?"one":"other"}})}]),F(function(){oe(A.document,Lc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
	//# sourceMappingURL=angular.min.js.map


/***/ },
/* 63 */
/***/ function(module, exports) {

	/*
	 AngularJS v1.5.7
	 (c) 2010-2016 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(P,d){'use strict';function G(t,g){g=g||{};d.forEach(g,function(d,q){delete g[q]});for(var q in t)!t.hasOwnProperty(q)||"$"===q.charAt(0)&&"$"===q.charAt(1)||(g[q]=t[q]);return g}var z=d.$$minErr("$resource"),M=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;d.module("ngResource",["ng"]).provider("$resource",function(){var t=/^https?:\/\/[^\/]*/,g=this;this.defaults={stripTrailingSlashes:!0,cancellable:!1,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},
	"delete":{method:"DELETE"}}};this.$get=["$http","$log","$q","$timeout",function(q,L,H,I){function A(d,h){return encodeURIComponent(d).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,h?"%20":"+")}function B(d,h){this.template=d;this.defaults=v({},g.defaults,h);this.urlParams={}}function J(e,h,n,k){function c(a,b){var c={};b=v({},h,b);u(b,function(b,h){x(b)&&(b=b());var f;if(b&&b.charAt&&"@"==b.charAt(0)){f=a;var l=b.substr(1);if(null==l||""===l||"hasOwnProperty"===
	l||!M.test("."+l))throw z("badmember",l);for(var l=l.split("."),m=0,k=l.length;m<k&&d.isDefined(f);m++){var r=l[m];f=null!==f?f[r]:void 0}}else f=b;c[h]=f});return c}function N(a){return a.resource}function m(a){G(a||{},this)}var t=new B(e,k);n=v({},g.defaults.actions,n);m.prototype.toJSON=function(){var a=v({},this);delete a.$promise;delete a.$resolved;return a};u(n,function(a,b){var h=/^(POST|PUT|PATCH)$/i.test(a.method),e=a.timeout,E=d.isDefined(a.cancellable)?a.cancellable:k&&d.isDefined(k.cancellable)?
	k.cancellable:g.defaults.cancellable;e&&!d.isNumber(e)&&(L.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."),delete a.timeout,e=null);m[b]=function(f,l,k,g){var r={},n,w,C;switch(arguments.length){case 4:C=g,w=k;case 3:case 2:if(x(l)){if(x(f)){w=f;C=l;break}w=l;C=k}else{r=f;n=l;w=k;break}case 1:x(f)?
	w=f:h?n=f:r=f;break;case 0:break;default:throw z("badargs",arguments.length);}var D=this instanceof m,p=D?n:a.isArray?[]:new m(n),s={},A=a.interceptor&&a.interceptor.response||N,B=a.interceptor&&a.interceptor.responseError||void 0,y,F;u(a,function(a,b){switch(b){default:s[b]=O(a);case "params":case "isArray":case "interceptor":case "cancellable":}});!D&&E&&(y=H.defer(),s.timeout=y.promise,e&&(F=I(y.resolve,e)));h&&(s.data=n);t.setUrlParams(s,v({},c(n,a.params||{}),r),a.url);r=q(s).then(function(f){var c=
	f.data;if(c){if(d.isArray(c)!==!!a.isArray)throw z("badcfg",b,a.isArray?"array":"object",d.isArray(c)?"array":"object",s.method,s.url);if(a.isArray)p.length=0,u(c,function(b){"object"===typeof b?p.push(new m(b)):p.push(b)});else{var l=p.$promise;G(c,p);p.$promise=l}}f.resource=p;return f},function(b){(C||K)(b);return H.reject(b)});r["finally"](function(){p.$resolved=!0;!D&&E&&(p.$cancelRequest=d.noop,I.cancel(F),y=F=s.timeout=null)});r=r.then(function(b){var a=A(b);(w||K)(a,b.headers);return a},B);
	return D?r:(p.$promise=r,p.$resolved=!1,E&&(p.$cancelRequest=y.resolve),p)};m.prototype["$"+b]=function(a,c,d){x(a)&&(d=c,c=a,a={});a=m[b].call(this,a,this,c,d);return a.$promise||a}});m.bind=function(a){return J(e,v({},h,a),n)};return m}var K=d.noop,u=d.forEach,v=d.extend,O=d.copy,x=d.isFunction;B.prototype={setUrlParams:function(e,h,n){var k=this,c=n||k.template,g,m,q="",a=k.urlParams={};u(c.split(/\W/),function(b){if("hasOwnProperty"===b)throw z("badname");!/^\d+$/.test(b)&&b&&(new RegExp("(^|[^\\\\]):"+
	b+"(\\W|$)")).test(c)&&(a[b]={isQueryParamValue:(new RegExp("\\?.*=:"+b+"(?:\\W|$)")).test(c)})});c=c.replace(/\\:/g,":");c=c.replace(t,function(a){q=a;return""});h=h||{};u(k.urlParams,function(a,e){g=h.hasOwnProperty(e)?h[e]:k.defaults[e];d.isDefined(g)&&null!==g?(m=a.isQueryParamValue?A(g,!0):A(g,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),c=c.replace(new RegExp(":"+e+"(\\W|$)","g"),function(a,b){return m+b})):c=c.replace(new RegExp("(/?):"+e+"(\\W|$)","g"),function(a,b,c){return"/"==
	c.charAt(0)?c:b+c})});k.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");e.url=q+c.replace(/\/\\\./,"/.");u(h,function(a,c){k.urlParams[c]||(e.params=e.params||{},e.params[c]=a)})}};return J}]})})(window,window.angular);
	//# sourceMappingURL=angular-resource.min.js.map


/***/ },
/* 64 */
/***/ function(module, exports) {

	/**
	 * State-based routing for AngularJS
	 * @version v0.3.1
	 * @link http://angular-ui.github.com/
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */
	"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return R(new(R(function(){},{prototype:a})),b)}function e(a){return Q(arguments,function(b){b!==a&&Q(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return Q(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l]&&i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return R({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return Q(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return Q(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function n(a,b){var c=P(a),d=c?[]:{};return Q(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=P(a)?[]:{};return Q(a,function(a,d){c[d]=b(a,d)}),c}function p(a,b){var d=1,f=2,i={},j=[],k=i,l=R(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,N(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);Q(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return O(a)&&a.then&&a.$$promises}if(!O(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return Q(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!L(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;Q(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!O(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=R({},d),u=1+q.length/3,v=!1;if(L(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),R(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function q(a,b,c){this.fromConfig=function(a,b,c){return L(a.template)?this.fromString(a.template,b):L(a.templateUrl)?this.fromUrl(a.templateUrl,b):L(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return M(a)?a(b):a},this.fromUrl=function(c,d){return M(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function r(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new U.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:f=f.replace(/\/$/,""),e=["(?:/(",")|/)?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),h&&(j=U.type(h)||d(U.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)})),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=R({params:{}},O(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new U.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function s(a){R(this,a)}function t(){function a(a){return null!=a?a.toString().replace(/~/g,"~~").replace(/\//g,"~2F"):a}function e(a){return null!=a?a.toString().replace(/~2F/g,"/").replace(/~~/g,"~"):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return M(a)||P(a)&&M(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(u[a.name],l.invoke(a.def))}}function k(a){R(this,a||{})}U=this;var l,m=!1,p=!0,q=!1,u={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!L(a)||"string"==typeof a},pattern:/[^\/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return L(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^\/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return L(a)&&(m=a),m},this.strictMode=function(a){return L(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!L(a))return q;if(a!==!0&&a!==!1&&!N(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new r(a,R(f(),b))},this.isMatcher=function(a){if(!O(a))return!1;var b=!0;return Q(r.prototype,function(c,d){M(c)&&(b=b&&L(a[d])&&M(a[d]))}),b},this.type=function(a,b,c){if(!L(b))return u[a];if(u.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return u[a]=new s(R({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},Q(x,function(a,b){u[b]=new s(R({name:b},a))}),u=d(u,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),Q(x,function(a,b){u[b]||(u[b]=new s(a))}),this}],this.Param=function(a,d,e,f){function j(a){var b=O(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function k(c,d,e){if(c.type&&d)throw new Error("Param '"+a+"' has two type configurations.");return d?d:c.type?b.isString(c.type)?u[c.type]:c.type instanceof s?c.type:new s(c.type):"config"===e?u.any:u.string}function m(){var b={array:"search"===f?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return R(b,c,e).array}function p(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!L(c)||null==c)return q;if(c===!0||N(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function r(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=P(a.replace)?a.replace:[],N(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return-1===h(g,a.from)}).concat(f)}function t(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(e.$$fn);if(null!==a&&a!==c&&!x.type.is(a))throw new Error("Default value ("+a+") for parameter '"+x.id+"' is not an instance of Type ("+x.type.name+")");return a}function v(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(x.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),L(a)?x.type.$normalize(a):t()}function w(){return"{Param:"+a+" "+d+" squash: '"+A+"' optional: "+z+"}"}var x=this;e=j(e),d=k(e,d,f);var y=m();d=y?d.$asArray(y,"search"===f):d,"string"!==d.name||y||"path"!==f||e.value!==c||(e.value="");var z=e.value!==c,A=p(e,z),B=r(e,y,z,A);R(this,{id:a,type:d,location:f,array:y,squash:A,replace:B,isOptional:z,value:v,dynamic:c,config:e,toString:w})},k.prototype={$$new:function(){return d(this,R(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),Q(b,function(b){Q(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return Q(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return Q(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function u(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return L(d)?d:!0}function h(d,e,f,g,h){function m(a,b,c){return"/"===q?a:b?q.slice(0,-1)+a:c?q.slice(1)+a:a}function n(a){function b(a){var b=a(f,d);return b?(N(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){p&&d.url()===p;p=c;var e,g=j.length;for(e=0;g>e;e++)if(b(j[e]))return;k&&b(k)}}function o(){return i=i||e.$on("$locationChangeSuccess",n)}var p,q=g.baseHref(),r=d.url();return l||o(),{sync:function(){n()},listen:function(){return o()},update:function(a){return a?void(r=d.url()):void(d.url()!==r&&(d.url(r),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),p=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled),g=g&&h.history;var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=m(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!M(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(N(a)){var b=a;a=function(){return b}}else if(!M(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=N(b);if(N(a)&&(a=d.compile(a)),!h&&!M(b)&&!P(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),R(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:N(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),R(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function v(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=N(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=z[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){A[a]||(A[a]=[]),A[a].push(b)}function p(a){for(var b=A[a]||[];b.length;)q(b.shift())}function q(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!N(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(z.hasOwnProperty(c))throw new Error("State '"+c+"' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):N(b.parent)?b.parent:O(b.parent)&&N(b.parent.name)?b.parent.name:"";if(e&&!z[e])return n(e,b.self);for(var f in C)M(C[f])&&(b[f]=C[f](b,C.$delegates[f]));return z[c]=b,!b[B]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){y.$current.navigable==b&&j(a,c)||y.transitionTo(b,a,{inherit:!0,location:!1})}]),p(c),b}function r(a){return a.indexOf("*")>-1}function s(a){for(var b=a.split("."),c=y.$current.name.split("."),d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length?!1:c.join("")===b.join("")}function t(a,b){return N(a)&&!L(b)?C[a]:M(b)&&N(a)?(C[a]&&!C.$delegates[a]&&(C.$delegates[a]=C[a]),C[a]=b,this):this}function u(a,b){return O(a)?b=a:b.name=a,q(b),this}function v(a,e,f,h,l,n,p,q,t){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),D;if(!g.retry)return null;if(f.$retry)return p.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?A:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),p.update(),h}function v(a,c,d,g,i,j){function m(){var c=[];return Q(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(M(d.controllerProvider)||P(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,c.$$resolveAs=d.resolveAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error("transition superseded")),C=e.reject(new Error("transition prevented")),D=e.reject(new Error("transition aborted")),E=e.reject(new Error("transition failed"));return x.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,R({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=R({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c["#"];if(!L(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!L(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[B])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,H=[];if(f.reload){if(N(f.reload)||O(f.reload)){if(O(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var I=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!I)throw new Error("No such reload state '"+(N(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[D]&&F!==I;)G=H[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=H[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c["#"]=r),y.params=c,S(y.params,n),S(k(b.params.$$keys(),n),b.locals.globals.$stateParams),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),r&&(c["#"]=r),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l,f).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),null==y.transition&&p.update(),C;for(var J=e.when(G),K=D;K<z.length;K++,F=z[K])G=H[K]=d(G),J=v(F,c,F===b,J,G,f);var M=y.transition=J.then(function(){var d,e,g;if(y.transition!==M)return A;for(d=o.length-1;d>=D;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<z.length;d++)e=z[d],e.locals=H[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return y.transition!==M?A:(y.$current=b,y.current=b.self,y.params=c,S(y.params,n),y.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),p.update(!0),y.current)}).then(null,function(d){return y.transition!==M?A:(y.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||p.update(),e.reject(d))});return M},y.is=function(a,b,d){d=R({relative:y.$current},d||{});var e=m(a,d.relative);return L(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){if(d=R({relative:y.$current},d||{}),N(a)&&r(a)){if(!s(a))return!1;a=y.$current.name}var e=m(a,d.relative);return L(e)?L(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=R({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=m(a,d.relative);if(!L(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},y.get=function(a,b){if(0===arguments.length)return o(g(z),function(a){return z[a].self});var c=m(a,b||y.$current);return c&&c.self?c.self:null},y}function w(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new U.ParamSet(f);return g.$$equals(b,c)}return!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b))?!0:void 0}var x,y,z={},A={},B="abstract",C={parent:function(a){if(L(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):x},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=d(a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(N(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||x).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new U.ParamSet;return Q(a.params||{},function(a,c){b[c]||(b[c]=new U.Param(c,null,a,"config"))}),b},params:function(a){var b=l(a.ownParams,a.ownParams.$$keys());return a.parent&&a.parent.params?R(a.parent.params.$$new(),b):new U.ParamSet},views:function(a){var b={};return Q(L(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),c.resolveAs=c.resolveAs||a.resolveAs||"$resolve",b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?R({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};x=q({name:"",url:"^",views:null,"abstract":!0}),x.navigable=null,this.decorator=t,this.state=u,this.$get=v,v.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function w(){function a(a,b){return{load:function(a,c){var d,e={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return c=R(e,c),c.view&&(d=b.fromConfig(c.view,c.params,c.locals)),d}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function x(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function y(a,c,d,e,f){function g(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function h(a,c){var d=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(k)return{enter:function(a,c,d){b.version.minor>2?k.enter(a,null,c).then(d):k.enter(a,null,c,d)},leave:function(a,c){b.version.minor>2?k.leave(a).then(c):k.leave(a,c)}};if(j){var e=j&&j(c,a);return{enter:function(a,b,c){e.enter(a,null,b),c()},leave:function(a,b){e.leave(a),b()}}}return d()}var i=g(),j=i("$animator"),k=i("$animate"),l={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,g,i){return function(c,g,j){function k(){if(m&&(m.remove(),m=null),o&&(o.$destroy(),o=null),n){var a=n.data("$uiViewAnim");s.leave(n,function(){a.$$animLeave.resolve(),m=null}),m=n,n=null}}function l(h){var l,m=A(c,j,g,e),t=m&&a.$current&&a.$current.locals[m];if(h||t!==p){l=c.$new(),p=a.$current.locals[m],l.$emit("$viewContentLoading",m);var u=i(l,function(a){var e=f.defer(),h=f.defer(),i={$animEnter:e.promise,$animLeave:h.promise,$$animLeave:h};a.data("$uiViewAnim",i),s.enter(a,g,function(){e.resolve(),o&&o.$emit("$viewContentAnimationEnded"),(b.isDefined(r)&&!r||c.$eval(r))&&d(a)}),k()});n=u,o=l,o.$emit("$viewContentLoaded",m),o.$eval(q)}}var m,n,o,p,q=j.onload||"",r=j.autoscroll,s=h(j,c);g.inheritedData("$uiView");c.$on("$stateChangeSuccess",function(){l(!1)}),l(!0)}}};return l}function z(a,c,d,e){return{restrict:"ECA",priority:-400,compile:function(f){var g=f.html();return function(f,h,i){var j=d.$current,k=A(f,i,h,e),l=j&&j.locals[k];if(l){h.data("$uiView",{name:k,state:l.$$state}),h.html(l.$template?l.$template:g);var m=b.extend({},l);f[l.$$resolveAs]=m;var n=a(h.contents());if(l.$$controller){l.$scope=f,l.$element=h;var o=c(l.$$controller,l);l.$$controllerAs&&(f[l.$$controllerAs]=o,f[l.$$controllerAs][l.$$resolveAs]=m),M(o.$onInit)&&o.$onInit(),h.data("$ngControllerController",o),h.children().data("$ngControllerController",o)}n(f)}}}}}function A(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function B(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function C(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function D(a){var b="[object SVGAnimatedString]"===Object.prototype.toString.call(a.prop("href")),c="FORM"===a[0].nodeName;return{attr:c?"action":b?"xlink:href":"href",isAnchor:"A"===a.prop("tagName").toUpperCase(),clickable:!c}}function E(a,b,c,d,e){return function(f){var g=f.which||f.button,h=e();if(!(g>1||f.ctrlKey||f.metaKey||f.shiftKey||a.attr("target"))){var i=c(function(){b.go(h.state,h.params,h.options)});f.preventDefault();var j=d.isAnchor&&!h.href?1:0;f.preventDefault=function(){j--<=0&&c.cancel(i)}}}}function F(a,b){return{relative:C(a)||b.$current,inherit:!0}}function G(a,c){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(d,e,f,g){var h,i=B(f.uiSref,a.current.name),j={state:i.state,href:null,params:null},k=D(e),l=g[1]||g[0],m=null;j.options=R(F(e,a),f.uiSrefOpts?d.$eval(f.uiSrefOpts):{});var n=function(c){c&&(j.params=b.copy(c)),j.href=a.href(i.state,j.params,j.options),m&&m(),l&&(m=l.$$addStateInfo(i.state,j.params)),null!==j.href&&f.$set(k.attr,j.href)};i.paramExpr&&(d.$watch(i.paramExpr,function(a){a!==j.params&&n(a)},!0),j.params=b.copy(d.$eval(i.paramExpr))),n(),k.clickable&&(h=E(e,a,c,k,function(){return j}),e.bind("click",h),d.$on("$destroy",function(){e.unbind("click",h)}))}}}function H(a,b){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(c,d,e,f){function g(b){m.state=b[0],m.params=b[1],m.options=b[2],m.href=a.href(m.state,m.params,m.options),n&&n(),j&&(n=j.$$addStateInfo(m.state,m.params)),m.href&&e.$set(i.attr,m.href)}var h,i=D(d),j=f[1]||f[0],k=[e.uiState,e.uiStateParams||null,e.uiStateOpts||null],l="["+k.map(function(a){return a||"null"}).join(", ")+"]",m={state:null,params:null,options:null,href:null},n=null;c.$watch(l,g,!0),g(c.$eval(l)),i.clickable&&(h=E(d,a,b,i,function(){return m}),d.bind("click",h),c.$on("$destroy",function(){d.unbind("click",h)}))}}}function I(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(b,d,e,f){function g(b,c,e){var f=a.get(b,C(d)),g=h(b,c),i={state:f||{name:b},params:c,hash:g};return p.push(i),q[g]=e,function(){var a=p.indexOf(i);-1!==a&&p.splice(a,1)}}function h(a,c){if(!N(a))throw new Error("state should be a string");return O(c)?a+T(c):(c=b.$eval(c),O(c)?a+T(c):a)}function i(){for(var a=0;a<p.length;a++)l(p[a].state,p[a].params)?j(d,q[p[a].hash]):k(d,q[p[a].hash]),m(p[a].state,p[a].params)?j(d,n):k(d,n)}function j(a,b){f(function(){a.addClass(b)})}function k(a,b){a.removeClass(b)}function l(b,c){return a.includes(b.name,c)}function m(b,c){return a.is(b.name,c)}var n,o,p=[],q={};n=c(e.uiSrefActiveEq||"",!1)(b);try{o=b.$eval(e.uiSrefActive)}catch(r){}o=o||c(e.uiSrefActive||"",!1)(b),O(o)&&Q(o,function(c,d){if(N(c)){var e=B(c,a.current.name);g(e.state,b.$eval(e.paramExpr),d)}}),this.$$addStateInfo=function(a,b){if(!(O(o)&&p.length>0)){var c=g(a,b,o);return i(),c}},b.$on("$stateChangeSuccess",i),i()}]}}function J(a){var b=function(b,c){return a.is(b,c)};return b.$stateful=!0,b}function K(a){var b=function(b,c,d){return a.includes(b,c,d)};return b.$stateful=!0,b}var L=b.isDefined,M=b.isFunction,N=b.isString,O=b.isObject,P=b.isArray,Q=b.forEach,R=b.extend,S=b.copy,T=b.toJson;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),p.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",p),q.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",q);var U;r.prototype.concat=function(a,b){var c={caseInsensitive:U.caseInsensitive(),strict:U.strictMode(),squash:U.defaultSquashPolicy()};return new r(this.sourcePath+a+this.sourceSearch,R(c,b),this)},r.prototype.toString=function(){return this.source},r.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var l,m;for(e=0;j>e;e++){for(g=h[e],l=this.params[g],m=d[e+1],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),L(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}for(;i>e;e++){for(g=h[e],k[g]=this.params[g].value(b[g]),l=this.params[g],m=b[g],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);L(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}return k},r.prototype.parameters=function(a){return L(a)?this.params[a]||null:this.$$paramNames},r.prototype.validates=function(a){return this.params.$$validates(a)},r.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=p?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1],t=f+1===h;if(q===!1)null!=r&&(j+=P(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var u=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(u)[1]}else N(q)&&(j+=q+s);t&&m.squash===!0&&"/"===j.slice(-1)&&(j=j.slice(0,-1))}else{if(null==r||p&&q!==!1)continue;if(P(r)||(r=[r]),0===r.length)continue;r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},s.prototype.is=function(a,b){return!0},s.prototype.encode=function(a,b){return a},s.prototype.decode=function(a,b){return a},s.prototype.equals=function(a,b){return a==b},s.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},s.prototype.pattern=/.*/,s.prototype.toString=function(){return"{Type:"+this.name+"}"},s.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},s.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return P(a)?a:L(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){if(P(c)&&0===c.length)return c;c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",t),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),u.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",u),v.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").factory("$stateParams",function(){return{}}).constant("$state.runtime",{autoinject:!0}).provider("$state",v).run(["$injector",function(a){
	a.get("$state.runtime").autoinject&&a.get("$state")}]),w.$inject=[],b.module("ui.router.state").provider("$view",w),b.module("ui.router.state").provider("$uiViewScroll",x),y.$inject=["$state","$injector","$uiViewScroll","$interpolate","$q"],z.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",y),b.module("ui.router.state").directive("uiView",z),G.$inject=["$state","$timeout"],H.$inject=["$state","$timeout"],I.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",G).directive("uiSrefActive",I).directive("uiSrefActiveEq",I).directive("uiState",H),J.$inject=["$state"],K.$inject=["$state"],b.module("ui.router.state").filter("isState",J).filter("includedByState",K)}(window,window.angular);

/***/ },
/* 65 */
/***/ function(module, exports) {

	/*
	 AngularJS v1.5.7
	 (c) 2010-2016 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(q,e){'use strict';function A(a){var c=[];v(c,e.noop).chars(a);return c.join("")}function h(a,c){var b={},d=a.split(","),l;for(l=0;l<d.length;l++)b[c?e.lowercase(d[l]):d[l]]=!0;return b}function B(a,c){null===a||void 0===a?a="":"string"!==typeof a&&(a=""+a);g.innerHTML=a;var b=5;do{if(0===b)throw w("uinput");b--;q.document.documentMode&&r(g);a=g.innerHTML;g.innerHTML=a}while(a!==g.innerHTML);for(b=g.firstChild;b;){switch(b.nodeType){case 1:c.start(b.nodeName.toLowerCase(),C(b.attributes));
	break;case 3:c.chars(b.textContent)}var d;if(!(d=b.firstChild)&&(1==b.nodeType&&c.end(b.nodeName.toLowerCase()),d=b.nextSibling,!d))for(;null==d;){b=b.parentNode;if(b===g)break;d=b.nextSibling;1==b.nodeType&&c.end(b.nodeName.toLowerCase())}b=d}for(;b=g.firstChild;)g.removeChild(b)}function C(a){for(var c={},b=0,d=a.length;b<d;b++){var l=a[b];c[l.name]=l.value}return c}function x(a){return a.replace(/&/g,"&amp;").replace(D,function(a){var b=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(b-55296)+
	(a-56320)+65536)+";"}).replace(E,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function v(a,c){var b=!1,d=e.bind(a,a.push);return{start:function(a,f){a=e.lowercase(a);!b&&F[a]&&(b=a);b||!0!==n[a]||(d("<"),d(a),e.forEach(f,function(b,f){var g=e.lowercase(f),h="img"===a&&"src"===g||"background"===g;!0!==G[g]||!0===y[g]&&!c(b,h)||(d(" "),d(f),d('="'),d(x(b)),d('"'))}),d(">"))},end:function(a){a=e.lowercase(a);b||!0!==n[a]||!0===z[a]||(d("</"),d(a),d(">"));a==
	b&&(b=!1)},chars:function(a){b||d(x(a))}}}function r(a){if(a.nodeType===q.Node.ELEMENT_NODE)for(var c=a.attributes,b=0,d=c.length;b<d;b++){var e=c[b],f=e.name.toLowerCase();if("xmlns:ns1"===f||0===f.lastIndexOf("ns1:",0))a.removeAttributeNode(e),b--,d--}(c=a.firstChild)&&r(c);(c=a.nextSibling)&&r(c)}var w=e.$$minErr("$sanitize"),D=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,E=/([^\#-~ |!])/g,z=h("area,br,col,hr,img,wbr"),m=h("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),k=h("rp,rt"),u=e.extend({},k,m),
	m=e.extend({},m,h("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),k=e.extend({},k,h("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),H=h("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
	F=h("script,style"),n=e.extend({},z,m,k,u),y=h("background,cite,href,longdesc,src,xlink:href"),u=h("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),k=h("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
	!0),G=e.extend({},y,k,u),g;(function(a){if(a.document&&a.document.implementation)a=a.document.implementation.createHTMLDocument("inert");else throw w("noinert");var c=(a.documentElement||a.getDocumentElement()).getElementsByTagName("body");1===c.length?g=c[0]:(c=a.createElement("html"),g=a.createElement("body"),c.appendChild(g),a.appendChild(c))})(q);e.module("ngSanitize",[]).provider("$sanitize",function(){var a=!1;this.$get=["$$sanitizeUri",function(c){a&&e.extend(n,H);return function(a){var d=
	[];B(a,v(d,function(a,b){return!/^unsafe:/.test(c(a,b))}));return d.join("")}}];this.enableSvg=function(c){return e.isDefined(c)?(a=c,this):a}});e.module("ngSanitize").filter("linky",["$sanitize",function(a){var c=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,b=/^mailto:/i,d=e.$$minErr("linky"),g=e.isString;return function(f,h,k){function m(a){a&&p.push(A(a))}function q(a,b){var c,d=r(a);p.push("<a ");for(c in d)p.push(c+'="'+d[c]+'" ');!e.isDefined(h)||
	"target"in d||p.push('target="',h,'" ');p.push('href="',a.replace(/"/g,"&quot;"),'">');m(b);p.push("</a>")}if(null==f||""===f)return f;if(!g(f))throw d("notstring",f);for(var r=e.isFunction(k)?k:e.isObject(k)?function(){return k}:function(){return{}},s=f,p=[],t,n;f=s.match(c);)t=f[0],f[2]||f[4]||(t=(f[3]?"http://":"mailto:")+t),n=f.index,m(s.substr(0,n)),q(t,f[0].replace(b,"")),s=s.substring(n+f[0].length);m(s);return a(p.join(""))}}])})(window,window.angular);
	//# sourceMappingURL=angular-sanitize.min.js.map


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * JavaScript Cookie v2.1.2
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
	;(function (factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			var OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = OldCookies;
				return api;
			};
		}
	}(function () {
		function extend () {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[ i ];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}

		function init (converter) {
			function api (key, value, attributes) {
				var result;
				if (typeof document === 'undefined') {
					return;
				}

				// Write

				if (arguments.length > 1) {
					attributes = extend({
						path: '/'
					}, api.defaults, attributes);

					if (typeof attributes.expires === 'number') {
						var expires = new Date();
						expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
						attributes.expires = expires;
					}

					try {
						result = JSON.stringify(value);
						if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}

					if (!converter.write) {
						value = encodeURIComponent(String(value))
							.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
					} else {
						value = converter.write(value, key);
					}

					key = encodeURIComponent(String(key));
					key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
					key = key.replace(/[\(\)]/g, escape);

					return (document.cookie = [
						key, '=', value,
						attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
						attributes.path    && '; path=' + attributes.path,
						attributes.domain  && '; domain=' + attributes.domain,
						attributes.secure ? '; secure' : ''
					].join(''));
				}

				// Read

				if (!key) {
					result = {};
				}

				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling "get()"
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var rdecode = /(%[0-9A-Z]{2})+/g;
				var i = 0;

				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var cookie = parts.slice(1).join('=');

					if (cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}

					try {
						var name = parts[0].replace(rdecode, decodeURIComponent);
						cookie = converter.read ?
							converter.read(cookie, name) : converter(cookie, name) ||
							cookie.replace(rdecode, decodeURIComponent);

						if (this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}

						if (key === name) {
							result = cookie;
							break;
						}

						if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}

				return result;
			}

			api.set = api;
			api.get = function (key) {
				return api(key);
			};
			api.getJSON = function () {
				return api.apply({
					json: true
				}, [].slice.call(arguments));
			};
			api.defaults = {};

			api.remove = function (key, attributes) {
				api(key, '', extend(attributes, {
					expires: -1
				}));
			};

			api.withConverter = init;

			return api;
		}

		return init(function () {});
	}));


/***/ },
/* 67 */
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
/* 68 */
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
/* 69 */
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
/* 70 */
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
/* 71 */
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
/* 72 */
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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * @license
	 * lodash 4.6.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash exports="amd" iife="angular.module('ngLodash', []).constant('lodash', null).config(function ($provide) { %output% $provide.constant('lodash', _);});" --output build/ng-lodash.js`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	angular.module("ngLodash",[]).constant("lodash",null).config(["$provide",function(a){function b(a,b){return a.set(b[0],b[1]),a}function c(a,b){return a.add(b),a}function d(a,b,c){var d=c.length;switch(d){case 0:return a.call(b);case 1:return a.call(b,c[0]);case 2:return a.call(b,c[0],c[1]);case 3:return a.call(b,c[0],c[1],c[2])}return a.apply(b,c)}function e(a,b,c,d){for(var e=-1,f=a.length;++e<f;){var g=a[e];b(d,g,c(g),a)}return d}function f(a,b){for(var c=-1,d=a.length,e=-1,f=b.length,g=Array(d+f);++c<d;)g[c]=a[c];for(;++e<f;)g[c++]=b[e];return g}function g(a,b){for(var c=-1,d=a.length;++c<d&&b(a[c],c,a)!==!1;);return a}function h(a,b){for(var c=a.length;c--&&b(a[c],c,a)!==!1;);return a}function i(a,b){for(var c=-1,d=a.length;++c<d;)if(!b(a[c],c,a))return!1;return!0}function j(a,b){for(var c=-1,d=a.length,e=0,f=[];++c<d;){var g=a[c];b(g,c,a)&&(f[e++]=g)}return f}function k(a,b){return!!a.length&&u(a,b,0)>-1}function l(a,b,c){for(var d=-1,e=a.length;++d<e;)if(c(b,a[d]))return!0;return!1}function m(a,b){for(var c=-1,d=a.length,e=Array(d);++c<d;)e[c]=b(a[c],c,a);return e}function n(a,b){for(var c=-1,d=b.length,e=a.length;++c<d;)a[e+c]=b[c];return a}function o(a,b,c,d){var e=-1,f=a.length;for(d&&f&&(c=a[++e]);++e<f;)c=b(c,a[e],e,a);return c}function p(a,b,c,d){var e=a.length;for(d&&e&&(c=a[--e]);e--;)c=b(c,a[e],e,a);return c}function q(a,b){for(var c=-1,d=a.length;++c<d;)if(b(a[c],c,a))return!0;return!1}function r(a,b,c){for(var d=-1,e=a.length;++d<e;){var f=a[d],g=b(f);if(null!=g&&(h===X?g===g:c(g,h)))var h=g,i=f}return i}function s(a,b,c,d){var e;return c(a,function(a,c,f){return b(a,c,f)?(e=d?c:a,!1):void 0}),e}function t(a,b,c){for(var d=a.length,e=c?d:-1;c?e--:++e<d;)if(b(a[e],e,a))return e;return-1}function u(a,b,c){if(b!==b)return M(a,c);for(var d=c-1,e=a.length;++d<e;)if(a[d]===b)return d;return-1}function v(a,b,c,d){for(var e=c-1,f=a.length;++e<f;)if(d(a[e],b))return e;return-1}function w(a,b,c,d,e){return e(a,function(a,e,f){c=d?(d=!1,a):b(c,a,e,f)}),c}function x(a,b){var c=a.length;for(a.sort(b);c--;)a[c]=a[c].value;return a}function y(a,b){for(var c,d=-1,e=a.length;++d<e;){var f=b(a[d]);f!==X&&(c=c===X?f:c+f)}return c}function z(a,b){for(var c=-1,d=Array(a);++c<a;)d[c]=b(c);return d}function A(a,b){return m(b,function(b){return[b,a[b]]})}function B(a){return function(b){return a(b)}}function C(a,b){return m(b,function(b){return a[b]})}function D(a,b){for(var c=-1,d=a.length;++c<d&&u(b,a[c],0)>-1;);return c}function E(a,b){for(var c=a.length;c--&&u(b,a[c],0)>-1;);return c}function F(a){return a&&a.Object===Object?a:null}function G(a,b){if(a!==b){var c=null===a,d=a===X,e=a===a,f=null===b,g=b===X,h=b===b;if(a>b&&!f||!e||c&&!g&&h||d&&h)return 1;if(b>a&&!c||!h||f&&!d&&e||g&&e)return-1}return 0}function H(a,b,c){for(var d=-1,e=a.criteria,f=b.criteria,g=e.length,h=c.length;++d<g;){var i=G(e[d],f[d]);if(i){if(d>=h)return i;var j=c[d];return i*("desc"==j?-1:1)}}return a.index-b.index}function I(a,b){for(var c=a.length,d=0;c--;)a[c]===b&&d++;return d}function J(a){return tc[a]}function K(a){return uc[a]}function L(a){return"\\"+xc[a]}function M(a,b,c){for(var d=a.length,e=b+(c?0:-1);c?e--:++e<d;){var f=a[e];if(f!==f)return e}return-1}function N(a){var b=!1;if(null!=a&&"function"!=typeof a.toString)try{b=!!(a+"")}catch(c){}return b}function O(a,b){return a="number"==typeof a||zb.test(a)?+a:-1,b=null==b?va:b,a>-1&&a%1==0&&b>a}function P(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}function Q(a){var b=-1,c=Array(a.size);return a.forEach(function(a,d){c[++b]=[d,a]}),c}function R(a,b){for(var c=-1,d=a.length,e=0,f=[];++c<d;){var g=a[c];(g===b||g===aa)&&(a[c]=aa,f[e++]=c)}return f}function S(a){var b=-1,c=Array(a.size);return a.forEach(function(a){c[++b]=a}),c}function T(a){if(!a||!lc.test(a))return a.length;for(var b=kc.lastIndex=0;kc.test(a);)b++;return b}function U(a){return a.match(kc)}function V(a){return vc[a]}function W(a){function F(a){if(Og(a)&&!zk(a)&&!(a instanceof Eb)){if(a instanceof Db)return a;if(Vi.call(a,"__wrapped__"))return He(a)}return new Db(a)}function zb(){}function Db(a,b){this.__wrapped__=a,this.__actions__=[],this.__chain__=!!b,this.__index__=0,this.__values__=X}function Eb(a){this.__wrapped__=a,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ya,this.__views__=[]}function Fb(){var a=new Eb(this.__wrapped__);return a.__actions__=Md(this.__actions__),a.__dir__=this.__dir__,a.__filtered__=this.__filtered__,a.__iteratees__=Md(this.__iteratees__),a.__takeCount__=this.__takeCount__,a.__views__=Md(this.__views__),a}function Gb(){if(this.__filtered__){var a=new Eb(this);a.__dir__=-1,a.__filtered__=!0}else a=this.clone(),a.__dir__*=-1;return a}function Hb(){var a=this.__wrapped__.value(),b=this.__dir__,c=zk(a),d=0>b,e=c?a.length:0,f=qe(0,e,this.__views__),g=f.start,h=f.end,i=h-g,j=d?h:g-1,k=this.__iteratees__,l=k.length,m=0,n=sj(i,this.__takeCount__);if(!c||Z>e||e==i&&n==i)return Ad(a,this.__actions__);var o=[];a:for(;i--&&n>m;){j+=b;for(var p=-1,q=a[j];++p<l;){var r=k[p],s=r.iteratee,t=r.type,u=s(q);if(t==sa)q=u;else if(!u){if(t==ra)continue a;break a}}o[m++]=q}return o}function Ib(){}function Jb(a,b){return Lb(a,b)&&delete a[b]}function Kb(a,b){if(zj){var c=a[b];return c===_?X:c}return Vi.call(a,b)?a[b]:X}function Lb(a,b){return zj?a[b]!==X:Vi.call(a,b)}function Mb(a,b,c){a[b]=zj&&c===X?_:c}function Nb(a){var b=-1,c=a?a.length:0;for(this.clear();++b<c;){var d=a[b];this.set(d[0],d[1])}}function Ob(){this.__data__={hash:new Ib,map:wj?new wj:[],string:new Ib}}function Pb(a){var b=this.__data__;return ye(a)?Jb("string"==typeof a?b.string:b.hash,a):wj?b.map["delete"](a):ac(b.map,a)}function Qb(a){var b=this.__data__;return ye(a)?Kb("string"==typeof a?b.string:b.hash,a):wj?b.map.get(a):bc(b.map,a)}function Rb(a){var b=this.__data__;return ye(a)?Lb("string"==typeof a?b.string:b.hash,a):wj?b.map.has(a):cc(b.map,a)}function Sb(a,b){var c=this.__data__;return ye(a)?Mb("string"==typeof a?c.string:c.hash,a,b):wj?c.map.set(a,b):ec(c.map,a,b),this}function Tb(a){var b=-1,c=a?a.length:0;for(this.__data__=new Nb;++b<c;)this.push(a[b])}function Ub(a,b){var c=a.__data__;if(ye(b)){var d=c.__data__,e="string"==typeof b?d.string:d.hash;return e[b]===_}return c.has(b)}function Vb(a){var b=this.__data__;if(ye(a)){var c=b.__data__,d="string"==typeof a?c.string:c.hash;d[a]=_}else b.set(a,_)}function Wb(a){var b=-1,c=a?a.length:0;for(this.clear();++b<c;){var d=a[b];this.set(d[0],d[1])}}function Xb(){this.__data__={array:[],map:null}}function Yb(a){var b=this.__data__,c=b.array;return c?ac(c,a):b.map["delete"](a)}function Zb(a){var b=this.__data__,c=b.array;return c?bc(c,a):b.map.get(a)}function $b(a){var b=this.__data__,c=b.array;return c?cc(c,a):b.map.has(a)}function _b(a,b){var c=this.__data__,d=c.array;d&&(d.length<Z-1?ec(d,a,b):(c.array=null,c.map=new Nb(d)));var e=c.map;return e&&e.set(a,b),this}function ac(a,b){var c=dc(a,b);if(0>c)return!1;var d=a.length-1;return c==d?a.pop():lj.call(a,c,1),!0}function bc(a,b){var c=dc(a,b);return 0>c?X:a[c][1]}function cc(a,b){return dc(a,b)>-1}function dc(a,b){for(var c=a.length;c--;)if(vg(a[c][0],b))return c;return-1}function ec(a,b,c){var d=dc(a,b);0>d?a.push([b,c]):a[d][1]=c}function fc(a,b,c,d){return a===X||vg(a,Ti[c])&&!Vi.call(d,c)?b:a}function gc(a,b,c){(c!==X&&!vg(a[b],c)||"number"==typeof b&&c===X&&!(b in a))&&(a[b]=c)}function hc(a,b,c){var d=a[b];Vi.call(a,b)&&vg(d,c)&&(c!==X||b in a)||(a[b]=c)}function ic(a,b,c,d){return Jj(a,function(a,e,f){b(d,a,c(a),f)}),d}function kc(a,b){return a&&Nd(b,Ah(b),a)}function tc(a,b){for(var c=-1,d=null==a,e=b.length,f=Array(e);++c<e;)f[c]=d?X:xh(a,b[c]);return f}function uc(a){return Bg(a)?a:[]}function vc(a){return"function"==typeof a?a:ri}function wc(a){return zk(a)?a:Ge(a)}function xc(a,b,c){return a===a&&(c!==X&&(a=c>=a?a:c),b!==X&&(a=a>=b?a:b)),a}function Ac(a,b,c,d,e,f,h){var i;if(d&&(i=f?d(a,e,f,h):d(a)),i!==X)return i;if(!Ng(a))return a;var j=zk(a);if(j){if(i=se(a),!b)return Md(a,i)}else{var k=pe(a),l=k==Ga||k==Ha;if(Ak(a))return Dd(a,b);if(k==Ka||k==Ba||l&&!f){if(N(a))return f?a:{};if(i=te(l?{}:a),!b)return i=kc(i,a),c?Pd(a,i):i}else{if(!sc[k])return f?a:{};i=ue(a,k,b)}}h||(h=new Wb);var m=h.get(a);return m?m:(h.set(a,i),(j?g:Nc)(a,function(e,f){hc(i,f,Ac(e,b,c,d,f,a,h))}),c&&!j?Pd(a,i):i)}function Bc(a){var b=Ah(a),c=b.length;return function(d){if(null==d)return!c;for(var e=c;e--;){var f=b[e],g=a[f],h=d[f];if(h===X&&!(f in Object(d))||!g(h))return!1}return!0}}function Dc(a){return Ng(a)?ij(a):{}}function Ec(a,b,c){if("function"!=typeof a)throw new Ri($);return kj(function(){a.apply(X,c)},b)}function Fc(a,b,c,d){var e=-1,f=k,g=!0,h=a.length,i=[],j=b.length;if(!h)return i;c&&(b=m(b,B(c))),d?(f=l,g=!1):b.length>=Z&&(f=Ub,g=!1,b=new Tb(b));a:for(;++e<h;){var n=a[e],o=c?c(n):n;if(g&&o===o){for(var p=j;p--;)if(b[p]===o)continue a;i.push(n)}else f(b,o,d)||i.push(n)}return i}function Gc(a,b){var c=!0;return Jj(a,function(a,d,e){return c=!!b(a,d,e)}),c}function Jc(a,b,c,d){var e=a.length;for(c=ih(c),0>c&&(c=-c>e?0:e+c),d=d===X||d>e?e:ih(d),0>d&&(d+=e),d=c>d?0:jh(d);d>c;)a[c++]=b;return a}function Kc(a,b){var c=[];return Jj(a,function(a,d,e){b(a,d,e)&&c.push(a)}),c}function Lc(a,b,c,d){d||(d=[]);for(var e=-1,f=a.length;++e<f;){var g=a[e];b>0&&Bg(g)&&(c||zk(g)||yg(g))?b>1?Lc(g,b-1,c,d):n(d,g):c||(d[d.length]=g)}return d}function Mc(a,b){return null==a?a:Lj(a,b,Bh)}function Nc(a,b){return a&&Lj(a,b,Ah)}function Oc(a,b){return a&&Mj(a,b,Ah)}function Pc(a,b){return j(b,function(b){return Kg(a[b])})}function Qc(a,b){b=xe(b,a)?[b+""]:wc(b);for(var c=0,d=b.length;null!=a&&d>c;)a=a[b[c++]];return c&&c==d?a:X}function Rc(a,b){return Vi.call(a,b)||"object"==typeof a&&b in a&&null===fj(a)}function Sc(a,b){return b in Object(a)}function Tc(a,b,c){return a>=sj(b,c)&&a<rj(b,c)}function Uc(a,b,c){for(var d=c?l:k,e=a[0].length,f=a.length,g=f,h=Array(f),i=1/0,j=[];g--;){var n=a[g];g&&b&&(n=m(n,B(b))),i=sj(n.length,i),h[g]=!c&&(b||e>=120&&n.length>=120)?new Tb(g&&n):X}n=a[0];var o=-1,p=h[0];a:for(;++o<e&&j.length<i;){var q=n[o],r=b?b(q):q;if(!(p?Ub(p,r):d(j,r,c))){for(g=f;--g;){var s=h[g];if(!(s?Ub(s,r):d(a[g],r,c)))continue a}p&&p.push(r),j.push(q)}}return j}function Vc(a,b,c,d){return Nc(a,function(a,e,f){b(d,c(a),e,f)}),d}function Wc(a,b,c){xe(b,a)||(b=wc(b),a=Ee(a,b),b=Ze(b));var e=null==a?a:a[b];return null==e?X:d(e,a,c)}function Xc(a,b,c,d,e){return a===b?!0:null==a||null==b||!Ng(a)&&!Og(b)?a!==a&&b!==b:Yc(a,b,Xc,c,d,e)}function Yc(a,b,c,d,e,f){var g=zk(a),h=zk(b),i=Ca,j=Ca;g||(i=pe(a),i=i==Ba?Ka:i),h||(j=pe(b),j=j==Ba?Ka:j);var k=i==Ka&&!N(a),l=j==Ka&&!N(b),m=i==j;if(m&&!k)return f||(f=new Wb),g||bh(a)?he(a,b,c,d,e,f):ie(a,b,i,c,d,e,f);if(!(e&ma)){var n=k&&Vi.call(a,"__wrapped__"),o=l&&Vi.call(b,"__wrapped__");if(n||o)return f||(f=new Wb),c(n?a.value():a,o?b.value():b,d,e,f)}return m?(f||(f=new Wb),je(a,b,c,d,e,f)):!1}function Zc(a,b,c,d){var e=c.length,f=e,g=!d;if(null==a)return!f;for(a=Object(a);e--;){var h=c[e];if(g&&h[2]?h[1]!==a[h[0]]:!(h[0]in a))return!1}for(;++e<f;){h=c[e];var i=h[0],j=a[i],k=h[1];if(g&&h[2]){if(j===X&&!(i in a))return!1}else{var l=new Wb,m=d?d(j,k,i,a,b,l):X;if(!(m===X?Xc(k,j,d,la|ma,l):m))return!1}}return!0}function $c(a){var b=typeof a;return"function"==b?a:null==a?ri:"object"==b?zk(a)?dd(a[0],a[1]):cd(a):zi(a)}function _c(a){return qj(Object(a))}function ad(a){a=null==a?a:Object(a);var b=[];for(var c in a)b.push(c);return b}function bd(a,b){var c=-1,d=Ag(a)?Array(a.length):[];return Jj(a,function(a,e,f){d[++c]=b(a,e,f)}),d}function cd(a){var b=me(a);if(1==b.length&&b[0][2]){var c=b[0][0],d=b[0][1];return function(a){return null==a?!1:a[c]===d&&(d!==X||c in Object(a))}}return function(c){return c===a||Zc(c,a,b)}}function dd(a,b){return function(c){var d=xh(c,a);return d===X&&d===b?zh(c,a):Xc(b,d,X,la|ma)}}function ed(a,b,c,d,e){if(a!==b){var f=zk(b)||bh(b)?X:Bh(b);g(f||b,function(g,h){if(f&&(h=g,g=b[h]),Ng(g))e||(e=new Wb),fd(a,b,h,c,ed,d,e);else{var i=d?d(a[h],g,h+"",a,b,e):X;i===X&&(i=g),gc(a,h,i)}})}}function fd(a,b,c,d,e,f,g){var h=a[c],i=b[c],j=g.get(i);if(j)return void gc(a,c,j);var k=f?f(h,i,c+"",a,b,g):X,l=k===X;l&&(k=i,zk(i)||bh(i)?zk(h)?k=h:Bg(h)?k=Md(h):(l=!1,k=Ac(i,!f)):Xg(i)||yg(i)?yg(h)?k=lh(h):!Ng(h)||d&&Kg(h)?(l=!1,k=Ac(i,!f)):k=h:l=!1),g.set(i,k),l&&e(k,i,d,f,g),g["delete"](i),gc(a,c,k)}function gd(a,b,c){var d=-1;b=m(b.length?b:Array(1),le());var e=bd(a,function(a,c,e){var f=m(b,function(b){return b(a)});return{criteria:f,index:++d,value:a}});return x(e,function(a,b){return H(a,b,c)})}function hd(a,b){return a=Object(a),o(b,function(b,c){return c in a&&(b[c]=a[c]),b},{})}function id(a,b){var c={};return Mc(a,function(a,d){b(a,d)&&(c[d]=a)}),c}function jd(a){return function(b){return null==b?X:b[a]}}function kd(a){return function(b){return Qc(b,a)}}function ld(a,b,c,d){var e=d?v:u,f=-1,g=b.length,h=a;for(c&&(h=m(a,B(c)));++f<g;)for(var i=0,j=b[f],k=c?c(j):j;(i=e(h,k,i,d))>-1;)h!==a&&lj.call(h,i,1),lj.call(a,i,1);return a}function md(a,b){for(var c=a?b.length:0,d=c-1;c--;){var e=b[c];if(d==c||e!=f){var f=e;if(O(e))lj.call(a,e,1);else if(xe(e,a))delete a[e];else{var g=wc(e),h=Ee(a,g);null!=h&&delete h[Ze(g)]}}}return a}function nd(a,b){return a+nj(uj()*(b-a+1))}function od(a,b,c,d){for(var e=-1,f=rj(mj((b-a)/(c||1)),0),g=Array(f);f--;)g[d?f:++e]=a,a+=c;return g}function pd(a,b,c,d){b=xe(b,a)?[b+""]:wc(b);for(var e=-1,f=b.length,g=f-1,h=a;null!=h&&++e<f;){var i=b[e];if(Ng(h)){var j=c;if(e!=g){var k=h[i];j=d?d(k,i,h):X,j===X&&(j=null==k?O(b[e+1])?[]:{}:k)}hc(h,i,j)}h=h[i]}return a}function qd(a,b,c){var d=-1,e=a.length;0>b&&(b=-b>e?0:e+b),c=c>e?e:c,0>c&&(c+=e),e=b>c?0:c-b>>>0,b>>>=0;for(var f=Array(e);++d<e;)f[d]=a[d+b];return f}function rd(a,b){var c;return Jj(a,function(a,d,e){return c=b(a,d,e),!c}),!!c}function sd(a,b,c){var d=0,e=a?a.length:d;if("number"==typeof b&&b===b&&Aa>=e){for(;e>d;){var f=d+e>>>1,g=a[f];(c?b>=g:b>g)&&null!==g?d=f+1:e=f}return e}return td(a,b,ri,c)}function td(a,b,c,d){b=c(b);for(var e=0,f=a?a.length:0,g=b!==b,h=null===b,i=b===X;f>e;){var j=nj((e+f)/2),k=c(a[j]),l=k!==X,m=k===k;if(g)var n=m||d;else n=h?m&&l&&(d||null!=k):i?m&&(d||l):null==k?!1:d?b>=k:b>k;n?e=j+1:f=j}return sj(f,za)}function ud(a){return vd(a)}function vd(a,b){for(var c=0,d=a.length,e=a[0],f=b?b(e):e,g=f,h=1,i=[e];++c<d;)e=a[c],f=b?b(e):e,vg(f,g)||(g=f,i[h++]=e);return i}function wd(a,b,c){var d=-1,e=k,f=a.length,g=!0,h=[],i=h;if(c)g=!1,e=l;else if(f>=Z){var j=b?null:Oj(a);if(j)return S(j);g=!1,e=Ub,i=new Tb}else i=b?[]:h;a:for(;++d<f;){var m=a[d],n=b?b(m):m;if(g&&n===n){for(var o=i.length;o--;)if(i[o]===n)continue a;b&&i.push(n),h.push(m)}else e(i,n,c)||(i!==h&&i.push(n),h.push(m))}return h}function xd(a,b){b=xe(b,a)?[b+""]:wc(b),a=Ee(a,b);var c=Ze(b);return null!=a&&yh(a,c)?delete a[c]:!0}function yd(a,b,c,d){return pd(a,b,c(Qc(a,b)),d)}function zd(a,b,c,d){for(var e=a.length,f=d?e:-1;(d?f--:++f<e)&&b(a[f],f,a););return c?qd(a,d?0:f,d?f+1:e):qd(a,d?f+1:0,d?e:f)}function Ad(a,b){var c=a;return c instanceof Eb&&(c=c.value()),o(b,function(a,b){return b.func.apply(b.thisArg,n([a],b.args))},c)}function Bd(a,b,c){for(var d=-1,e=a.length;++d<e;)var f=f?n(Fc(f,a[d],b,c),Fc(a[d],f,b,c)):a[d];return f&&f.length?wd(f,b,c):[]}function Cd(a,b,c){for(var d=-1,e=a.length,f=b.length,g={};++d<e;)c(g,a[d],f>d?b[d]:X);return g}function Dd(a,b){if(b)return a.slice();var c=new a.constructor(a.length);return a.copy(c),c}function Ed(a){var b=new a.constructor(a.byteLength);return new cj(b).set(new cj(a)),b}function Fd(a){return o(Q(a),b,new a.constructor)}function Gd(a){var b=new a.constructor(a.source,tb.exec(a));return b.lastIndex=a.lastIndex,b}function Hd(a){return o(S(a),c,new a.constructor)}function Id(a){return Hj?Object(Hj.call(a)):{}}function Jd(a,b){var c=b?Ed(a.buffer):a.buffer;return new a.constructor(c,a.byteOffset,a.length)}function Kd(a,b,c,d){for(var e=-1,f=a.length,g=c.length,h=-1,i=b.length,j=rj(f-g,0),k=Array(i+j),l=!d;++h<i;)k[h]=b[h];for(;++e<g;)(l||f>e)&&(k[c[e]]=a[e]);for(;j--;)k[h++]=a[e++];return k}function Ld(a,b,c,d){for(var e=-1,f=a.length,g=-1,h=c.length,i=-1,j=b.length,k=rj(f-h,0),l=Array(k+j),m=!d;++e<k;)l[e]=a[e];for(var n=e;++i<j;)l[n+i]=b[i];for(;++g<h;)(m||f>e)&&(l[n+c[g]]=a[e++]);return l}function Md(a,b){var c=-1,d=a.length;for(b||(b=Array(d));++c<d;)b[c]=a[c];return b}function Nd(a,b,c){return Od(a,b,c)}function Od(a,b,c,d){c||(c={});for(var e=-1,f=b.length;++e<f;){var g=b[e],h=d?d(c[g],a[g],g,c,a):a[g];hc(c,g,h)}return c}function Pd(a,b){return Nd(a,Rj(a),b)}function Qd(a,b){return function(c,d){var f=zk(c)?e:ic,g=b?b():{};return f(c,a,le(d),g)}}function Rd(a){return lg(function(b,c){var d=-1,e=c.length,f=e>1?c[e-1]:X,g=e>2?c[2]:X;for(f="function"==typeof f?(e--,f):X,g&&we(c[0],c[1],g)&&(f=3>e?X:f,e=1),b=Object(b);++d<e;){var h=c[d];h&&a(b,h,d,f)}return b})}function Sd(a,b){return function(c,d){if(null==c)return c;if(!Ag(c))return a(c,d);for(var e=c.length,f=b?e:-1,g=Object(c);(b?f--:++f<e)&&d(g[f],f,g)!==!1;);return c}}function Td(a){return function(b,c,d){for(var e=-1,f=Object(b),g=d(b),h=g.length;h--;){var i=g[a?h:++e];if(c(f[i],i,f)===!1)break}return b}}function Ud(a,b,c){function d(){var b=this&&this!==Hc&&this instanceof d?f:a;return b.apply(e?c:this,arguments)}var e=b&ba,f=Xd(a);return d}function Vd(a){return function(b){b=nh(b);var c=lc.test(b)?U(b):X,d=c?c[0]:b.charAt(0),e=c?c.slice(1).join(""):b.slice(1);return d[a]()+e}}function Wd(a){return function(b){return o(ni(Vh(b)),a,"")}}function Xd(a){return function(){var b=arguments;switch(b.length){case 0:return new a;case 1:return new a(b[0]);case 2:return new a(b[0],b[1]);case 3:return new a(b[0],b[1],b[2]);case 4:return new a(b[0],b[1],b[2],b[3]);case 5:return new a(b[0],b[1],b[2],b[3],b[4]);case 6:return new a(b[0],b[1],b[2],b[3],b[4],b[5]);case 7:return new a(b[0],b[1],b[2],b[3],b[4],b[5],b[6])}var c=Dc(a.prototype),d=a.apply(c,b);return Ng(d)?d:c}}function Yd(a,b,c){function e(){for(var g=arguments.length,h=Array(g),i=g,j=oe(e);i--;)h[i]=arguments[i];var k=3>g&&h[0]!==j&&h[g-1]!==j?[]:R(h,j);if(g-=k.length,c>g)return ee(a,b,$d,e.placeholder,X,h,k,X,X,c-g);var l=this&&this!==Hc&&this instanceof e?f:a;return d(l,this,h)}var f=Xd(a);return e}function Zd(a){return lg(function(b){b=Lc(b,1);var c=b.length,d=c,e=Db.prototype.thru;for(a&&b.reverse();d--;){var f=b[d];if("function"!=typeof f)throw new Ri($);if(e&&!g&&"wrapper"==ke(f))var g=new Db([],!0)}for(d=g?d:c;++d<c;){f=b[d];var h=ke(f),i="wrapper"==h?Pj(f):X;g=i&&ze(i[0])&&i[1]==(ia|ea|ga|ja)&&!i[4].length&&1==i[9]?g[ke(i[0])].apply(g,i[3]):1==f.length&&ze(f)?g[h]():g.thru(f)}return function(){var a=arguments,d=a[0];if(g&&1==a.length&&zk(d)&&d.length>=Z)return g.plant(d).value();for(var e=0,f=c?b[e].apply(this,a):d;++e<c;)f=b[e].call(this,f);return f}})}function $d(a,b,c,d,e,f,g,h,i,j){function k(){for(var r=arguments.length,s=r,t=Array(r);s--;)t[s]=arguments[s];if(o)var u=oe(k),v=I(t,u);if(d&&(t=Kd(t,d,e,o)),f&&(t=Ld(t,f,g,o)),r-=v,o&&j>r){var w=R(t,u);return ee(a,b,$d,k.placeholder,c,t,w,h,i,j-r)}var x=m?c:this,y=n?x[a]:a;return r=t.length,h?t=Fe(t,h):p&&r>1&&t.reverse(),l&&r>i&&(t.length=i),this&&this!==Hc&&this instanceof k&&(y=q||Xd(y)),y.apply(x,t)}var l=b&ia,m=b&ba,n=b&ca,o=b&(ea|fa),p=b&ka,q=n?X:Xd(a);return k}function _d(a,b){return function(c,d){return Vc(c,a,b(d),{})}}function ae(a){return lg(function(b){return b=m(Lc(b,1),le()),lg(function(c){var e=this;return a(b,function(a){return d(a,e,c)})})})}function be(a,b,c){b=ih(b);var d=T(a);if(!b||d>=b)return"";var e=b-d;c=c===X?" ":c+"";var f=bi(c,mj(e/T(c)));return lc.test(c)?U(f).slice(0,e).join(""):f.slice(0,e)}function ce(a,b,c,e){function f(){for(var b=-1,i=arguments.length,j=-1,k=e.length,l=Array(k+i),m=this&&this!==Hc&&this instanceof f?h:a;++j<k;)l[j]=e[j];for(;i--;)l[j++]=arguments[++b];return d(m,g?c:this,l)}var g=b&ba,h=Xd(a);return f}function de(a){return function(b,c,d){return d&&"number"!=typeof d&&we(b,c,d)&&(c=d=X),b=kh(b),b=b===b?b:0,c===X?(c=b,b=0):c=kh(c)||0,d=d===X?c>b?1:-1:kh(d)||0,od(b,c,d,a)}}function ee(a,b,c,d,e,f,g,h,i,j){var k=b&ea,l=h?Md(h):X,m=k?g:X,n=k?X:g,o=k?f:X,p=k?X:f;b|=k?ga:ha,b&=~(k?ha:ga),b&da||(b&=~(ba|ca));var q=[a,b,e,o,m,p,n,l,i,j],r=c.apply(X,q);return ze(a)&&Sj(r,q),r.placeholder=d,r}function fe(a){var b=Pi[a];return function(a,c){if(a=kh(a),c=ih(c)){var d=(nh(a)+"e").split("e"),e=b(d[0]+"e"+(+d[1]+c));return d=(nh(e)+"e").split("e"),+(d[0]+"e"+(+d[1]-c))}return b(a)}}function ge(a,b,c,d,e,f,g,h){var i=b&ca;if(!i&&"function"!=typeof a)throw new Ri($);var j=d?d.length:0;if(j||(b&=~(ga|ha),d=e=X),g=g===X?g:rj(ih(g),0),h=h===X?h:ih(h),j-=e?e.length:0,b&ha){var k=d,l=e;d=e=X}var m=i?X:Pj(a),n=[a,b,c,d,e,k,l,f,g,h];if(m&&Ce(n,m),a=n[0],b=n[1],c=n[2],d=n[3],e=n[4],h=n[9]=null==n[9]?i?0:a.length:rj(n[9]-j,0),!h&&b&(ea|fa)&&(b&=~(ea|fa)),b&&b!=ba)o=b==ea||b==fa?Yd(a,b,h):b!=ga&&b!=(ba|ga)||e.length?$d.apply(X,n):ce(a,b,c,d);else var o=Ud(a,b,c);var p=m?Nj:Sj;return p(o,n)}function he(a,b,c,d,e,f){var g=-1,h=e&ma,i=e&la,j=a.length,k=b.length;if(j!=k&&!(h&&k>j))return!1;var l=f.get(a);if(l)return l==b;var m=!0;for(f.set(a,b);++g<j;){var n=a[g],o=b[g];if(d)var p=h?d(o,n,g,b,a,f):d(n,o,g,a,b,f);if(p!==X){if(p)continue;m=!1;break}if(i){if(!q(b,function(a){return n===a||c(n,a,d,e,f)})){m=!1;break}}else if(n!==o&&!c(n,o,d,e,f)){m=!1;break}}return f["delete"](a),m}function ie(a,b,c,d,e,f,g){switch(c){case Ra:return a.byteLength==b.byteLength&&d(new cj(a),new cj(b))?!0:!1;case Da:case Ea:return+a==+b;case Fa:return a.name==b.name&&a.message==b.message;case Ja:return a!=+a?b!=+b:a==+b;case La:case Na:return a==b+"";case Ia:var h=Q;case Ma:var i=f&ma;if(h||(h=S),a.size!=b.size&&!i)return!1;var j=g.get(a);return j?j==b:he(h(a),h(b),d,e,f|la,g.set(a,b));case Oa:if(Hj)return Hj.call(a)==Hj.call(b)}return!1}function je(a,b,c,d,e,f){var g=e&ma,h=Ah(a),i=h.length,j=Ah(b),k=j.length;if(i!=k&&!g)return!1;for(var l=i;l--;){var m=h[l];if(!(g?m in b:Rc(b,m)))return!1}var n=f.get(a);if(n)return n==b;var o=!0;f.set(a,b);for(var p=g;++l<i;){m=h[l];var q=a[m],r=b[m];if(d)var s=g?d(r,q,m,b,a,f):d(q,r,m,a,b,f);if(!(s===X?q===r||c(q,r,d,e,f):s)){o=!1;break}p||(p="constructor"==m)}if(o&&!p){var t=a.constructor,u=b.constructor;t!=u&&"constructor"in a&&"constructor"in b&&!("function"==typeof t&&t instanceof t&&"function"==typeof u&&u instanceof u)&&(o=!1)}return f["delete"](a),o}function ke(a){for(var b=a.name+"",c=Cj[b],d=Vi.call(Cj,b)?c.length:0;d--;){var e=c[d],f=e.func;if(null==f||f==a)return e.name}return b}function le(){var a=F.iteratee||si;return a=a===si?$c:a,arguments.length?a(arguments[0],arguments[1]):a}function me(a){for(var b=Jh(a),c=b.length;c--;)b[c][2]=Be(b[c][1]);return b}function ne(a,b){var c=a[b];return Tg(c)?c:X}function oe(a){var b=Vi.call(F,"placeholder")?F:a;return b.placeholder}function pe(a){return Yi.call(a)}function qe(a,b,c){for(var d=-1,e=c.length;++d<e;){var f=c[d],g=f.size;switch(f.type){case"drop":a+=g;break;case"dropRight":b-=g;break;case"take":b=sj(b,a+g);break;case"takeRight":a=rj(a,b-g)}}return{start:a,end:b}}function re(a,b,c){if(null==a)return!1;var d=c(a,b);d||xe(b)||(b=wc(b),a=Ee(a,b),null!=a&&(b=Ze(b),d=c(a,b)));var e=a?a.length:X;return d||!!e&&Mg(e)&&O(b,e)&&(zk(a)||_g(a)||yg(a))}function se(a){var b=a.length,c=a.constructor(b);return b&&"string"==typeof a[0]&&Vi.call(a,"index")&&(c.index=a.index,c.input=a.input),c}function te(a){return"function"!=typeof a.constructor||Ae(a)?{}:Dc(fj(a))}function ue(a,b,c){var d=a.constructor;switch(b){case Ra:return Ed(a);case Da:case Ea:return new d(+a);case Sa:case Ta:case Ua:case Va:case Wa:case Xa:case Ya:case Za:case $a:return Jd(a,c);case Ia:return Fd(a);case Ja:case Na:return new d(a);case La:return Gd(a);case Ma:return Hd(a);case Oa:return Id(a)}}function ve(a){var b=a?a.length:X;return Mg(b)&&(zk(a)||_g(a)||yg(a))?z(b,String):null}function we(a,b,c){if(!Ng(c))return!1;var d=typeof b;return("number"==d?Ag(c)&&O(b,c.length):"string"==d&&b in c)?vg(c[b],a):!1}function xe(a,b){return"number"==typeof a?!0:!zk(a)&&(kb.test(a)||!jb.test(a)||null!=b&&a in Object(b))}function ye(a){var b=typeof a;return"number"==b||"boolean"==b||"string"==b&&"__proto__"!=a||null==a}function ze(a){var b=ke(a),c=F[b];if("function"!=typeof c||!(b in Eb.prototype))return!1;if(a===c)return!0;var d=Pj(c);return!!d&&a===d[0]}function Ae(a){var b=a&&a.constructor,c="function"==typeof b&&b.prototype||Ti;return a===c}function Be(a){return a===a&&!Ng(a)}function Ce(a,b){var c=a[1],d=b[1],e=c|d,f=(ba|ca|ia)>e,g=d==ia&&c==ea||d==ia&&c==ja&&a[7].length<=b[8]||d==(ia|ja)&&b[7].length<=b[8]&&c==ea;if(!f&&!g)return a;d&ba&&(a[2]=b[2],e|=c&ba?0:da);var h=b[3];if(h){var i=a[3];a[3]=i?Kd(i,h,b[4]):Md(h),a[4]=i?R(a[3],aa):Md(b[4])}return h=b[5],h&&(i=a[5],a[5]=i?Ld(i,h,b[6]):Md(h),a[6]=i?R(a[5],aa):Md(b[6])),h=b[7],h&&(a[7]=Md(h)),d&ia&&(a[8]=null==a[8]?b[8]:sj(a[8],b[8])),null==a[9]&&(a[9]=b[9]),a[0]=b[0],a[1]=e,a}function De(a,b,c,d,e,f){return Ng(a)&&Ng(b)&&ed(a,b,X,De,f.set(b,a)),a}function Ee(a,b){return 1==b.length?a:xh(a,qd(b,0,-1))}function Fe(a,b){for(var c=a.length,d=sj(b.length,c),e=Md(a);d--;){var f=b[d];a[d]=O(f,c)?e[f]:X}return a}function Ge(a){var b=[];return nh(a).replace(lb,function(a,c,d,e){b.push(d?e.replace(rb,"$1"):c||a)}),b}function He(a){if(a instanceof Eb)return a.clone();var b=new Db(a.__wrapped__,a.__chain__);return b.__actions__=Md(a.__actions__),b.__index__=a.__index__,b.__values__=a.__values__,b}function Ie(a,b){b=rj(ih(b),0);var c=a?a.length:0;if(!c||1>b)return[];for(var d=0,e=0,f=Array(mj(c/b));c>d;)f[e++]=qd(a,d,d+=b);return f}function Je(a){for(var b=-1,c=a?a.length:0,d=0,e=[];++b<c;){var f=a[b];f&&(e[d++]=f)}return e}function Ke(a,b,c){var d=a?a.length:0;return d?(b=c||b===X?1:ih(b),qd(a,0>b?0:b,d)):[]}function Le(a,b,c){var d=a?a.length:0;return d?(b=c||b===X?1:ih(b),b=d-b,qd(a,0,0>b?0:b)):[]}function Me(a,b){return a&&a.length?zd(a,le(b,3),!0,!0):[]}function Ne(a,b){return a&&a.length?zd(a,le(b,3),!0):[]}function Oe(a,b,c,d){var e=a?a.length:0;return e?(c&&"number"!=typeof c&&we(a,b,c)&&(c=0,d=e),Jc(a,b,c,d)):[]}function Pe(a,b){return a&&a.length?t(a,le(b,3)):-1}function Qe(a,b){return a&&a.length?t(a,le(b,3),!0):-1}function Re(a){var b=a?a.length:0;return b?Lc(a,1):[]}function Se(a){var b=a?a.length:0;return b?Lc(a,ua):[]}function Te(a,b){var c=a?a.length:0;return c?(b=b===X?1:ih(b),Lc(a,b)):[]}function Ue(a){for(var b=-1,c=a?a.length:0,d={};++b<c;){var e=a[b];d[e[0]]=e[1]}return d}function Ve(a){return a?a[0]:X}function We(a,b,c){var d=a?a.length:0;return d?(c=ih(c),0>c&&(c=rj(d+c,0)),u(a,b,c)):-1}function Xe(a){return Le(a,1)}function Ye(a,b){return a?pj.call(a,b):""}function Ze(a){var b=a?a.length:0;return b?a[b-1]:X}function $e(a,b,c){var d=a?a.length:0;if(!d)return-1;var e=d;if(c!==X&&(e=ih(c),e=(0>e?rj(d+e,0):sj(e,d-1))+1),b!==b)return M(a,e,!0);for(;e--;)if(a[e]===b)return e;return-1}function _e(a,b){return a&&a.length&&b&&b.length?ld(a,b):a}function af(a,b,c){return a&&a.length&&b&&b.length?ld(a,b,le(c)):a}function bf(a,b,c){return a&&a.length&&b&&b.length?ld(a,b,X,c):a}function cf(a,b){var c=[];if(!a||!a.length)return c;var d=-1,e=[],f=a.length;for(b=le(b,3);++d<f;){var g=a[d];b(g,d,a)&&(c.push(g),e.push(d))}return md(a,e),c}function df(a){return a?vj.call(a):a}function ef(a,b,c){var d=a?a.length:0;return d?(c&&"number"!=typeof c&&we(a,b,c)?(b=0,c=d):(b=null==b?0:ih(b),c=c===X?d:ih(c)),qd(a,b,c)):[]}function ff(a,b){return sd(a,b)}function gf(a,b,c){return td(a,b,le(c))}function hf(a,b){var c=a?a.length:0;if(c){var d=sd(a,b);if(c>d&&vg(a[d],b))return d}return-1}function jf(a,b){return sd(a,b,!0)}function kf(a,b,c){return td(a,b,le(c),!0)}function lf(a,b){var c=a?a.length:0;if(c){var d=sd(a,b,!0)-1;if(vg(a[d],b))return d}return-1}function mf(a){return a&&a.length?ud(a):[]}function nf(a,b){return a&&a.length?vd(a,le(b)):[]}function of(a){return Ke(a,1)}function pf(a,b,c){return a&&a.length?(b=c||b===X?1:ih(b),qd(a,0,0>b?0:b)):[]}function qf(a,b,c){var d=a?a.length:0;return d?(b=c||b===X?1:ih(b),b=d-b,qd(a,0>b?0:b,d)):[]}function rf(a,b){return a&&a.length?zd(a,le(b,3),!1,!0):[]}function sf(a,b){return a&&a.length?zd(a,le(b,3)):[]}function tf(a){return a&&a.length?wd(a):[]}function uf(a,b){return a&&a.length?wd(a,le(b)):[]}function vf(a,b){return a&&a.length?wd(a,X,b):[]}function wf(a){if(!a||!a.length)return[];var b=0;return a=j(a,function(a){return Bg(a)?(b=rj(a.length,b),!0):void 0}),z(b,function(b){return m(a,jd(b))})}function xf(a,b){if(!a||!a.length)return[];var c=wf(a);return null==b?c:m(c,function(a){return d(b,X,a)})}function yf(a,b){return Cd(a||[],b||[],hc)}function zf(a,b){return Cd(a||[],b||[],pd)}function Af(a){var b=F(a);return b.__chain__=!0,b}function Bf(a,b){return b(a),a}function Cf(a,b){return b(a)}function Df(){return Af(this)}function Ef(){return new Db(this.value(),this.__chain__)}function Ff(a){return this.map(a).flatten()}function Gf(){this.__values__===X&&(this.__values__=hh(this.value()));var a=this.__index__>=this.__values__.length,b=a?X:this.__values__[this.__index__++];return{done:a,value:b}}function Hf(){return this}function If(a){for(var b,c=this;c instanceof zb;){var d=He(c);d.__index__=0,d.__values__=X,b?e.__wrapped__=d:b=d;var e=d;c=c.__wrapped__}return e.__wrapped__=a,b}function Jf(){var a=this.__wrapped__;if(a instanceof Eb){var b=a;return this.__actions__.length&&(b=new Eb(this)),b=b.reverse(),b.__actions__.push({func:Cf,args:[df],thisArg:X}),new Db(b,this.__chain__)}return this.thru(df)}function Kf(){return Ad(this.__wrapped__,this.__actions__)}function Lf(a,b,c){var d=zk(a)?i:Gc;return c&&we(a,b,c)&&(b=X),d(a,le(b,3))}function Mf(a,b){var c=zk(a)?j:Kc;return c(a,le(b,3))}function Nf(a,b){if(b=le(b,3),zk(a)){var c=t(a,b);return c>-1?a[c]:X}return s(a,b,Jj)}function Of(a,b){if(b=le(b,3),zk(a)){var c=t(a,b,!0);return c>-1?a[c]:X}return s(a,b,Kj)}function Pf(a,b){return Lc(Tf(a,b),1)}function Qf(a,b){return"function"==typeof b&&zk(a)?g(a,b):Jj(a,vc(b))}function Rf(a,b){return"function"==typeof b&&zk(a)?h(a,b):Kj(a,vc(b))}function Sf(a,b,c,d){a=Ag(a)?a:Ph(a),c=c&&!d?ih(c):0;var e=a.length;return 0>c&&(c=rj(e+c,0)),_g(a)?e>=c&&a.indexOf(b,c)>-1:!!e&&u(a,b,c)>-1}function Tf(a,b){var c=zk(a)?m:bd;return c(a,le(b,3))}function Uf(a,b,c,d){return null==a?[]:(zk(b)||(b=null==b?[]:[b]),c=d?X:c,zk(c)||(c=null==c?[]:[c]),gd(a,b,c))}function Vf(a,b,c){var d=zk(a)?o:w,e=arguments.length<3;return d(a,le(b,4),c,e,Jj)}function Wf(a,b,c){var d=zk(a)?p:w,e=arguments.length<3;return d(a,le(b,4),c,e,Kj)}function Xf(a,b){var c=zk(a)?j:Kc;return b=le(b,3),c(a,function(a,c,d){return!b(a,c,d)})}function Yf(a){var b=Ag(a)?a:Ph(a),c=b.length;return c>0?b[nd(0,c-1)]:X}function Zf(a,b){var c=-1,d=hh(a),e=d.length,f=e-1;for(b=xc(ih(b),0,e);++c<b;){var g=nd(c,f),h=d[g];d[g]=d[c],d[c]=h}return d.length=b,d}function $f(a){return Zf(a,ya)}function _f(a){if(null==a)return 0;if(Ag(a)){var b=a.length;return b&&_g(a)?T(a):b}return Ah(a).length}function ag(a,b,c){var d=zk(a)?q:rd;return c&&we(a,b,c)&&(b=X),d(a,le(b,3))}function bg(a,b){if("function"!=typeof b)throw new Ri($);return a=ih(a),function(){return--a<1?b.apply(this,arguments):void 0}}function cg(a,b,c){return b=c?X:b,b=a&&null==b?a.length:b,ge(a,ia,X,X,X,X,b)}function dg(a,b){var c;if("function"!=typeof b)throw new Ri($);return a=ih(a),function(){return--a>0&&(c=b.apply(this,arguments)),1>=a&&(b=X),c}}function eg(a,b,c){b=c?X:b;var d=ge(a,ea,X,X,X,X,X,b);return d.placeholder=eg.placeholder,d}function fg(a,b,c){b=c?X:b;var d=ge(a,fa,X,X,X,X,X,b);return d.placeholder=fg.placeholder,d}function gg(a,b,c){function d(){o&&dj(o),k&&dj(k),q=0,j=k=n=o=p=X}function e(b,c){c&&dj(c),k=o=p=X,b&&(q=qk(),l=a.apply(n,j),o||k||(j=n=X))}function f(){var a=b-(qk()-m);0>=a||a>b?e(p,k):o=kj(f,a)}function g(){return(o&&p||k&&t)&&(l=a.apply(n,j)),d(),l}function h(){e(t,o)}function i(){if(j=arguments,m=qk(),n=this,p=t&&(o||!r),s===!1)var c=r&&!o;else{q||k||r||(q=m);var d=s-(m-q),e=(0>=d||d>s)&&(r||k);e?(k&&(k=dj(k)),q=m,l=a.apply(n,j)):k||(k=kj(h,d))}return e&&o?o=dj(o):o||b===s||(o=kj(f,b)),c&&(e=!0,l=a.apply(n,j)),!e||o||k||(j=n=X),l}var j,k,l,m,n,o,p,q=0,r=!1,s=!1,t=!0;if("function"!=typeof a)throw new Ri($);return b=kh(b)||0,
	Ng(c)&&(r=!!c.leading,s="maxWait"in c&&rj(kh(c.maxWait)||0,b),t="trailing"in c?!!c.trailing:t),i.cancel=d,i.flush=g,i}function hg(a){return ge(a,ka)}function ig(a,b){if("function"!=typeof a||b&&"function"!=typeof b)throw new Ri($);var c=function(){var d=arguments,e=b?b.apply(this,d):d[0],f=c.cache;if(f.has(e))return f.get(e);var g=a.apply(this,d);return c.cache=f.set(e,g),g};return c.cache=new ig.Cache,c}function jg(a){if("function"!=typeof a)throw new Ri($);return function(){return!a.apply(this,arguments)}}function kg(a){return dg(2,a)}function lg(a,b){if("function"!=typeof a)throw new Ri($);return b=rj(b===X?a.length-1:ih(b),0),function(){for(var c=arguments,e=-1,f=rj(c.length-b,0),g=Array(f);++e<f;)g[e]=c[b+e];switch(b){case 0:return a.call(this,g);case 1:return a.call(this,c[0],g);case 2:return a.call(this,c[0],c[1],g)}var h=Array(b+1);for(e=-1;++e<b;)h[e]=c[e];return h[b]=g,d(a,this,h)}}function mg(a,b){if("function"!=typeof a)throw new Ri($);return b=b===X?0:rj(ih(b),0),lg(function(c){var e=c[b],f=c.slice(0,b);return e&&n(f,e),d(a,this,f)})}function ng(a,b,c){var d=!0,e=!0;if("function"!=typeof a)throw new Ri($);return Ng(c)&&(d="leading"in c?!!c.leading:d,e="trailing"in c?!!c.trailing:e),gg(a,b,{leading:d,maxWait:b,trailing:e})}function og(a){return cg(a,1)}function pg(a,b){return b=null==b?ri:b,wk(b,a)}function qg(){if(!arguments.length)return[];var a=arguments[0];return zk(a)?a:[a]}function rg(a){return Ac(a,!1,!0)}function sg(a,b){return Ac(a,!1,!0,b)}function tg(a){return Ac(a,!0,!0)}function ug(a,b){return Ac(a,!0,!0,b)}function vg(a,b){return a===b||a!==a&&b!==b}function wg(a,b){return a>b}function xg(a,b){return a>=b}function yg(a){return Bg(a)&&Vi.call(a,"callee")&&(!jj.call(a,"callee")||Yi.call(a)==Ba)}function zg(a){return Og(a)&&Yi.call(a)==Ra}function Ag(a){return null!=a&&Mg(Qj(a))&&!Kg(a)}function Bg(a){return Og(a)&&Ag(a)}function Cg(a){return a===!0||a===!1||Og(a)&&Yi.call(a)==Da}function Dg(a){return Og(a)&&Yi.call(a)==Ea}function Eg(a){return!!a&&1===a.nodeType&&Og(a)&&!Xg(a)}function Fg(a){if(Ag(a)&&(zk(a)||_g(a)||Kg(a.splice)||yg(a)))return!a.length;for(var b in a)if(Vi.call(a,b))return!1;return!0}function Gg(a,b){return Xc(a,b)}function Hg(a,b,c){c="function"==typeof c?c:X;var d=c?c(a,b):X;return d===X?Xc(a,b,c):!!d}function Ig(a){return Og(a)?Yi.call(a)==Fa||"string"==typeof a.message&&"string"==typeof a.name:!1}function Jg(a){return"number"==typeof a&&oj(a)}function Kg(a){var b=Ng(a)?Yi.call(a):"";return b==Ga||b==Ha}function Lg(a){return"number"==typeof a&&a==ih(a)}function Mg(a){return"number"==typeof a&&a>-1&&a%1==0&&va>=a}function Ng(a){var b=typeof a;return!!a&&("object"==b||"function"==b)}function Og(a){return!!a&&"object"==typeof a}function Pg(a){return Og(a)&&pe(a)==Ia}function Qg(a,b){return a===b||Zc(a,b,me(b))}function Rg(a,b,c){return c="function"==typeof c?c:X,Zc(a,b,me(b),c)}function Sg(a){return Wg(a)&&a!=+a}function Tg(a){return null==a?!1:Kg(a)?$i.test(Ui.call(a)):Og(a)&&(N(a)?$i:xb).test(a)}function Ug(a){return null===a}function Vg(a){return null==a}function Wg(a){return"number"==typeof a||Og(a)&&Yi.call(a)==Ja}function Xg(a){if(!Og(a)||Yi.call(a)!=Ka||N(a))return!1;var b=fj(a);if(null===b)return!0;var c=b.constructor;return"function"==typeof c&&c instanceof c&&Ui.call(c)==Xi}function Yg(a){return Ng(a)&&Yi.call(a)==La}function Zg(a){return Lg(a)&&a>=-va&&va>=a}function $g(a){return Og(a)&&pe(a)==Ma}function _g(a){return"string"==typeof a||!zk(a)&&Og(a)&&Yi.call(a)==Na}function ah(a){return"symbol"==typeof a||Og(a)&&Yi.call(a)==Oa}function bh(a){return Og(a)&&Mg(a.length)&&!!rc[Yi.call(a)]}function ch(a){return a===X}function dh(a){return Og(a)&&pe(a)==Pa}function eh(a){return Og(a)&&Yi.call(a)==Qa}function fh(a,b){return b>a}function gh(a,b){return b>=a}function hh(a){if(!a)return[];if(Ag(a))return _g(a)?U(a):Md(a);if(hj&&a[hj])return P(a[hj]());var b=pe(a),c=b==Ia?Q:b==Ma?S:Ph;return c(a)}function ih(a){if(!a)return 0===a?a:0;if(a=kh(a),a===ua||a===-ua){var b=0>a?-1:1;return b*wa}var c=a%1;return a===a?c?a-c:a:0}function jh(a){return a?xc(ih(a),0,ya):0}function kh(a){if(Ng(a)){var b=Kg(a.valueOf)?a.valueOf():a;a=Ng(b)?b+"":b}if("string"!=typeof a)return 0===a?a:+a;a=a.replace(ob,"");var c=wb.test(a);return c||yb.test(a)?zc(a.slice(2),c?2:8):vb.test(a)?xa:+a}function lh(a){return Nd(a,Bh(a))}function mh(a){return xc(ih(a),-va,va)}function nh(a){if("string"==typeof a)return a;if(null==a)return"";if(ah(a))return Ij?Ij.call(a):"";var b=a+"";return"0"==b&&1/a==-ua?"-0":b}function oh(a,b){var c=Dc(a);return b?kc(c,b):c}function ph(a,b){return s(a,le(b,3),Nc,!0)}function qh(a,b){return s(a,le(b,3),Oc,!0)}function rh(a,b){return null==a?a:Lj(a,vc(b),Bh)}function sh(a,b){return null==a?a:Mj(a,vc(b),Bh)}function th(a,b){return a&&Nc(a,vc(b))}function uh(a,b){return a&&Oc(a,vc(b))}function vh(a){return null==a?[]:Pc(a,Ah(a))}function wh(a){return null==a?[]:Pc(a,Bh(a))}function xh(a,b,c){var d=null==a?X:Qc(a,b);return d===X?c:d}function yh(a,b){return re(a,b,Rc)}function zh(a,b){return re(a,b,Sc)}function Ah(a){var b=Ae(a);if(!b&&!Ag(a))return _c(a);var c=ve(a),d=!!c,e=c||[],f=e.length;for(var g in a)!Rc(a,g)||d&&("length"==g||O(g,f))||b&&"constructor"==g||e.push(g);return e}function Bh(a){for(var b=-1,c=Ae(a),d=ad(a),e=d.length,f=ve(a),g=!!f,h=f||[],i=h.length;++b<e;){var j=d[b];g&&("length"==j||O(j,i))||"constructor"==j&&(c||!Vi.call(a,j))||h.push(j)}return h}function Ch(a,b){var c={};return b=le(b,3),Nc(a,function(a,d,e){c[b(a,d,e)]=a}),c}function Dh(a,b){var c={};return b=le(b,3),Nc(a,function(a,d,e){c[d]=b(a,d,e)}),c}function Eh(a,b){return b=le(b),id(a,function(a,c){return!b(a,c)})}function Fh(a,b){return null==a?{}:id(a,le(b))}function Gh(a,b,c){if(xe(b,a))d=null==a?X:a[b];else{b=wc(b);var d=xh(a,b);a=Ee(a,b)}return d===X&&(d=c),Kg(d)?d.call(a):d}function Hh(a,b,c){return null==a?a:pd(a,b,c)}function Ih(a,b,c,d){return d="function"==typeof d?d:X,null==a?a:pd(a,b,c,d)}function Jh(a){return A(a,Ah(a))}function Kh(a){return A(a,Bh(a))}function Lh(a,b,c){var d=zk(a)||bh(a);if(b=le(b,4),null==c)if(d||Ng(a)){var e=a.constructor;c=d?zk(a)?new e:[]:Kg(e)?Dc(fj(a)):{}}else c={};return(d?g:Nc)(a,function(a,d,e){return b(c,a,d,e)}),c}function Mh(a,b){return null==a?!0:xd(a,b)}function Nh(a,b,c){return null==a?a:yd(a,b,vc(c))}function Oh(a,b,c,d){return d="function"==typeof d?d:X,null==a?a:yd(a,b,vc(c),d)}function Ph(a){return a?C(a,Ah(a)):[]}function Qh(a){return null==a?[]:C(a,Bh(a))}function Rh(a,b,c){return c===X&&(c=b,b=X),c!==X&&(c=kh(c),c=c===c?c:0),b!==X&&(b=kh(b),b=b===b?b:0),xc(kh(a),b,c)}function Sh(a,b,c){return b=kh(b)||0,c===X?(c=b,b=0):c=kh(c)||0,a=kh(a),Tc(a,b,c)}function Th(a,b,c){if(c&&"boolean"!=typeof c&&we(a,b,c)&&(b=c=X),c===X&&("boolean"==typeof b?(c=b,b=X):"boolean"==typeof a&&(c=a,a=X)),a===X&&b===X?(a=0,b=1):(a=kh(a)||0,b===X?(b=a,a=0):b=kh(b)||0),a>b){var d=a;a=b,b=d}if(c||a%1||b%1){var e=uj();return sj(a+e*(b-a+yc("1e-"+((e+"").length-1))),b)}return nd(a,b)}function Uh(a){return Tk(nh(a).toLowerCase())}function Vh(a){return a=nh(a),a&&a.replace(Ab,J).replace(jc,"")}function Wh(a,b,c){a=nh(a),b="string"==typeof b?b:b+"";var d=a.length;return c=c===X?d:xc(ih(c),0,d),c-=b.length,c>=0&&a.indexOf(b,c)==c}function Xh(a){return a=nh(a),a&&fb.test(a)?a.replace(db,K):a}function Yh(a){return a=nh(a),a&&nb.test(a)?a.replace(mb,"\\$&"):a}function Zh(a,b,c){a=nh(a),b=ih(b);var d=T(a);if(!b||d>=b)return a;var e=(b-d)/2,f=nj(e),g=mj(e);return be("",f,c)+a+be("",g,c)}function $h(a,b,c){return a=nh(a),a+be(a,b,c)}function _h(a,b,c){return a=nh(a),be(a,b,c)+a}function ai(a,b,c){return c||null==b?b=0:b&&(b=+b),a=nh(a).replace(ob,""),tj(a,b||(ub.test(a)?16:10))}function bi(a,b){a=nh(a),b=ih(b);var c="";if(!a||1>b||b>va)return c;do b%2&&(c+=a),b=nj(b/2),a+=a;while(b);return c}function ci(){var a=arguments,b=nh(a[0]);return a.length<3?b:b.replace(a[1],a[2])}function di(a,b,c){return nh(a).split(b,c)}function ei(a,b,c){return a=nh(a),c=xc(ih(c),0,a.length),a.lastIndexOf(b,c)==c}function fi(a,b,c){var d=F.templateSettings;c&&we(a,b,c)&&(b=X),a=nh(a),b=Dk({},b,d,fc);var e=Dk({},b.imports,d.imports,fc),f=Ah(e),g=C(e,f),h,i,j=0,k=b.interpolate||Bb,l="__p += '",m=Qi((b.escape||Bb).source+"|"+k.source+"|"+(k===ib?sb:Bb).source+"|"+(b.evaluate||Bb).source+"|$","g"),n="//# sourceURL="+("sourceURL"in b?b.sourceURL:"lodash.templateSources["+ ++qc+"]")+"\n";a.replace(m,function(b,c,d,e,f,g){return d||(d=e),l+=a.slice(j,g).replace(Cb,L),c&&(h=!0,l+="' +\n__e("+c+") +\n'"),f&&(i=!0,l+="';\n"+f+";\n__p += '"),d&&(l+="' +\n((__t = ("+d+")) == null ? '' : __t) +\n'"),j=g+b.length,b}),l+="';\n";var o=b.variable;o||(l="with (obj) {\n"+l+"\n}\n"),l=(i?l.replace(_a,""):l).replace(ab,"$1").replace(bb,"$1;"),l="function("+(o||"obj")+") {\n"+(o?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(h?", __e = _.escape":"")+(i?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+l+"return __p\n}";var p=Xk(function(){return Function(f,n+"return "+l).apply(X,g)});if(p.source=l,Ig(p))throw p;return p}function gi(a){return nh(a).toLowerCase()}function hi(a){return nh(a).toUpperCase()}function ii(a,b,c){if(a=nh(a),!a)return a;if(c||b===X)return a.replace(ob,"");if(b+="",!b)return a;var d=U(a),e=U(b);return d.slice(D(d,e),E(d,e)+1).join("")}function ji(a,b,c){if(a=nh(a),!a)return a;if(c||b===X)return a.replace(qb,"");if(b+="",!b)return a;var d=U(a);return d.slice(0,E(d,U(b))+1).join("")}function ki(a,b,c){if(a=nh(a),!a)return a;if(c||b===X)return a.replace(pb,"");if(b+="",!b)return a;var d=U(a);return d.slice(D(d,U(b))).join("")}function li(a,b){var c=na,d=oa;if(Ng(b)){var e="separator"in b?b.separator:e;c="length"in b?ih(b.length):c,d="omission"in b?nh(b.omission):d}a=nh(a);var f=a.length;if(lc.test(a)){var g=U(a);f=g.length}if(c>=f)return a;var h=c-T(d);if(1>h)return d;var i=g?g.slice(0,h).join(""):a.slice(0,h);if(e===X)return i+d;if(g&&(h+=i.length-h),Yg(e)){if(a.slice(h).search(e)){var j,k=i;for(e.global||(e=Qi(e.source,nh(tb.exec(e))+"g")),e.lastIndex=0;j=e.exec(k);)var l=j.index;i=i.slice(0,l===X?h:l)}}else if(a.indexOf(e,h)!=h){var m=i.lastIndexOf(e);m>-1&&(i=i.slice(0,m))}return i+d}function mi(a){return a=nh(a),a&&eb.test(a)?a.replace(cb,V):a}function ni(a,b,c){return a=nh(a),b=c?X:b,b===X&&(b=oc.test(a)?nc:mc),a.match(b)||[]}function oi(a){var b=a?a.length:0,c=le();return a=b?m(a,function(a){if("function"!=typeof a[1])throw new Ri($);return[c(a[0]),a[1]]}):[],lg(function(c){for(var e=-1;++e<b;){var f=a[e];if(d(f[0],this,c))return d(f[1],this,c)}})}function pi(a){return Bc(Ac(a,!0))}function qi(a){return function(){return a}}function ri(a){return a}function si(a){return $c("function"==typeof a?a:Ac(a,!0))}function ti(a){return cd(Ac(a,!0))}function ui(a,b){return dd(a,Ac(b,!0))}function vi(a,b,c){var d=Ah(b),e=Pc(b,d);null!=c||Ng(b)&&(e.length||!d.length)||(c=b,b=a,a=this,e=Pc(b,Ah(b)));var f=Ng(c)&&"chain"in c?c.chain:!0,h=Kg(a);return g(e,function(c){var d=b[c];a[c]=d,h&&(a.prototype[c]=function(){var b=this.__chain__;if(f||b){var c=a(this.__wrapped__),e=c.__actions__=Md(this.__actions__);return e.push({func:d,args:arguments,thisArg:a}),c.__chain__=b,c}return d.apply(a,n([this.value()],arguments))})}),a}function wi(){return Hc._===this&&(Hc._=Zi),this}function xi(){}function yi(a){return a=ih(a),function(){return arguments[a]}}function zi(a){return xe(a)?jd(a):kd(a)}function Ai(a){return function(b){return null==a?X:Qc(a,b)}}function Bi(a,b){if(a=ih(a),1>a||a>va)return[];var c=ya,d=sj(a,ya);b=vc(b),a-=ya;for(var e=z(d,b);++c<a;)b(c);return e}function Ci(a){return zk(a)?m(a,String):Ge(a)}function Di(a){var b=++Wi;return nh(a)+b}function Ei(a,b){var c;return a===X&&b===X?0:(a!==X&&(c=a),b!==X&&(c=c===X?b:c+b),c)}function Fi(a){return a&&a.length?r(a,ri,wg):X}function Gi(a,b){return a&&a.length?r(a,le(b),wg):X}function Hi(a){return Li(a)/(a?a.length:0)}function Ii(a){return a&&a.length?r(a,ri,fh):X}function Ji(a,b){return a&&a.length?r(a,le(b),fh):X}function Ki(a,b){var c;return a===X&&b===X?0:(a!==X&&(c=a),b!==X&&(c=c===X?b:c-b),c)}function Li(a){return a&&a.length?y(a,ri):0}function Mi(a,b){return a&&a.length?y(a,le(b)):0}a=a?Ic.defaults({},a,Ic.pick(Hc,pc)):Hc;var Ni=a.Date,Oi=a.Error,Pi=a.Math,Qi=a.RegExp,Ri=a.TypeError,Si=a.Array.prototype,Ti=a.Object.prototype,Ui=a.Function.prototype.toString,Vi=Ti.hasOwnProperty,Wi=0,Xi=Ui.call(Object),Yi=Ti.toString,Zi=Hc._,$i=Qi("^"+Ui.call(Vi).replace(mb,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_i=Cc?a.Buffer:X,aj=a.Reflect,bj=a.Symbol,cj=a.Uint8Array,dj=a.clearTimeout,ej=aj?aj.enumerate:X,fj=Object.getPrototypeOf,gj=Object.getOwnPropertySymbols,hj="symbol"==typeof(hj=bj&&bj.iterator)?hj:X,ij=Object.create,jj=Ti.propertyIsEnumerable,kj=a.setTimeout,lj=Si.splice,mj=Pi.ceil,nj=Pi.floor,oj=a.isFinite,pj=Si.join,qj=Object.keys,rj=Pi.max,sj=Pi.min,tj=a.parseInt,uj=Pi.random,vj=Si.reverse,wj=ne(a,"Map"),xj=ne(a,"Set"),yj=ne(a,"WeakMap"),zj=ne(Object,"create"),Aj=yj&&new yj,Bj=!jj.call({valueOf:1},"valueOf"),Cj={},Dj=wj?Ui.call(wj):"",Ej=xj?Ui.call(xj):"",Fj=yj?Ui.call(yj):"",Gj=bj?bj.prototype:X,Hj=Gj?Gj.valueOf:X,Ij=Gj?Gj.toString:X;F.templateSettings={escape:gb,evaluate:hb,interpolate:ib,variable:"",imports:{_:F}};var Jj=Sd(Nc),Kj=Sd(Oc,!0),Lj=Td(),Mj=Td(!0);ej&&!jj.call({valueOf:1},"valueOf")&&(ad=function(a){return P(ej(a))});var Nj=Aj?function(a,b){return Aj.set(a,b),a}:ri,Oj=xj&&2===new xj([1,2]).size?function(a){return new xj(a)}:xi,Pj=Aj?function(a){return Aj.get(a)}:xi,Qj=jd("length"),Rj=gj||function(){return[]};(wj&&pe(new wj)!=Ia||xj&&pe(new xj)!=Ma||yj&&pe(new yj)!=Pa)&&(pe=function(a){var b=Yi.call(a),c=b==Ka?a.constructor:null,d="function"==typeof c?Ui.call(c):"";if(d)switch(d){case Dj:return Ia;case Ej:return Ma;case Fj:return Pa}return b});var Sj=function(){var a=0,b=0;return function(c,d){var e=qk(),f=qa-(e-b);if(b=e,f>0){if(++a>=pa)return c}else a=0;return Nj(c,d)}}(),Tj=lg(function(a,b){return zk(a)||(a=null==a?[]:[Object(a)]),b=Lc(b,1),f(a,b)}),Uj=lg(function(a,b){return Bg(a)?Fc(a,Lc(b,1,!0)):[]}),Vj=lg(function(a,b){var c=Ze(b);return Bg(c)&&(c=X),Bg(a)?Fc(a,Lc(b,1,!0),le(c)):[]}),Wj=lg(function(a,b){var c=Ze(b);return Bg(c)&&(c=X),Bg(a)?Fc(a,Lc(b,1,!0),X,c):[]}),Xj=lg(function(a){var b=m(a,uc);return b.length&&b[0]===a[0]?Uc(b):[]}),Yj=lg(function(a){var b=Ze(a),c=m(a,uc);return b===Ze(c)?b=X:c.pop(),c.length&&c[0]===a[0]?Uc(c,le(b)):[]}),Zj=lg(function(a){var b=Ze(a),c=m(a,uc);return b===Ze(c)?b=X:c.pop(),c.length&&c[0]===a[0]?Uc(c,X,b):[]}),$j=lg(_e),_j=lg(function(a,b){b=m(Lc(b,1),String);var c=tc(a,b);return md(a,b.sort(G)),c}),ak=lg(function(a){return wd(Lc(a,1,!0))}),bk=lg(function(a){var b=Ze(a);return Bg(b)&&(b=X),wd(Lc(a,1,!0),le(b))}),ck=lg(function(a){var b=Ze(a);return Bg(b)&&(b=X),wd(Lc(a,1,!0),X,b)}),dk=lg(function(a,b){return Bg(a)?Fc(a,b):[]}),ek=lg(function(a){return Bd(j(a,Bg))}),fk=lg(function(a){var b=Ze(a);return Bg(b)&&(b=X),Bd(j(a,Bg),le(b))}),gk=lg(function(a){var b=Ze(a);return Bg(b)&&(b=X),Bd(j(a,Bg),X,b)}),hk=lg(wf),ik=lg(function(a){var b=a.length,c=b>1?a[b-1]:X;return c="function"==typeof c?(a.pop(),c):X,xf(a,c)}),jk=lg(function(a){a=Lc(a,1);var b=a.length,c=b?a[0]:0,d=this.__wrapped__,e=function(b){return tc(b,a)};return!(b>1||this.__actions__.length)&&d instanceof Eb&&O(c)?(d=d.slice(c,+c+(b?1:0)),d.__actions__.push({func:Cf,args:[e],thisArg:X}),new Db(d,this.__chain__).thru(function(a){return b&&!a.length&&a.push(X),a})):this.thru(e)}),kk=Qd(function(a,b,c){Vi.call(a,c)?++a[c]:a[c]=1}),lk=Qd(function(a,b,c){Vi.call(a,c)?a[c].push(b):a[c]=[b]}),mk=lg(function(a,b,c){var e=-1,f="function"==typeof b,g=xe(b),h=Ag(a)?Array(a.length):[];return Jj(a,function(a){var i=f?b:g&&null!=a?a[b]:X;h[++e]=i?d(i,a,c):Wc(a,b,c)}),h}),nk=Qd(function(a,b,c){a[c]=b}),ok=Qd(function(a,b,c){a[c?0:1].push(b)},function(){return[[],[]]}),pk=lg(function(a,b){if(null==a)return[];var c=b.length;return c>1&&we(a,b[0],b[1])?b=[]:c>2&&we(b[0],b[1],b[2])&&(b.length=1),gd(a,Lc(b,1),[])}),qk=Ni.now,rk=lg(function(a,b,c){var d=ba;if(c.length){var e=R(c,oe(rk));d|=ga}return ge(a,d,b,c,e)}),sk=lg(function(a,b,c){var d=ba|ca;if(c.length){var e=R(c,oe(sk));d|=ga}return ge(b,d,a,c,e)}),tk=lg(function(a,b){return Ec(a,1,b)}),uk=lg(function(a,b,c){return Ec(a,kh(b)||0,c)}),vk=lg(function(a,b){b=m(Lc(b,1),le());var c=b.length;return lg(function(e){for(var f=-1,g=sj(e.length,c);++f<g;)e[f]=b[f].call(this,e[f]);return d(a,this,e)})}),wk=lg(function(a,b){var c=R(b,oe(wk));return ge(a,ga,X,b,c)}),xk=lg(function(a,b){var c=R(b,oe(xk));return ge(a,ha,X,b,c)}),yk=lg(function(a,b){return ge(a,ja,X,X,X,Lc(b,1))}),zk=Array.isArray,Ak=_i?function(a){return a instanceof _i}:qi(!1),Bk=Rd(function(a,b){if(Bj||Ae(b)||Ag(b))return void Nd(b,Ah(b),a);for(var c in b)Vi.call(b,c)&&hc(a,c,b[c])}),Ck=Rd(function(a,b){if(Bj||Ae(b)||Ag(b))return void Nd(b,Bh(b),a);for(var c in b)hc(a,c,b[c])}),Dk=Rd(function(a,b,c,d){Od(b,Bh(b),a,d)}),Ek=Rd(function(a,b,c,d){Od(b,Ah(b),a,d)}),Fk=lg(function(a,b){return tc(a,Lc(b,1))}),Gk=lg(function(a){return a.push(X,fc),d(Dk,X,a)}),Hk=lg(function(a){return a.push(X,De),d(Mk,X,a)}),Ik=_d(function(a,b,c){a[b]=c},qi(ri)),Jk=_d(function(a,b,c){Vi.call(a,b)?a[b].push(c):a[b]=[c]},le),Kk=lg(Wc),Lk=Rd(function(a,b,c){ed(a,b,c)}),Mk=Rd(function(a,b,c,d){ed(a,b,c,d)}),Nk=lg(function(a,b){return null==a?{}:(b=m(Lc(b,1),String),hd(a,Fc(Bh(a),b)))}),Ok=lg(function(a,b){return null==a?{}:hd(a,Lc(b,1))}),Pk=Wd(function(a,b,c){return b=b.toLowerCase(),a+(c?Uh(b):b)}),Qk=Wd(function(a,b,c){return a+(c?"-":"")+b.toLowerCase()}),Rk=Wd(function(a,b,c){return a+(c?" ":"")+b.toLowerCase()}),Sk=Vd("toLowerCase"),Tk=Vd("toUpperCase"),Uk=Wd(function(a,b,c){return a+(c?"_":"")+b.toLowerCase()}),Vk=Wd(function(a,b,c){return a+(c?" ":"")+Uh(b)}),Wk=Wd(function(a,b,c){return a+(c?" ":"")+b.toUpperCase()}),Xk=lg(function(a,b){try{return d(a,X,b)}catch(c){return Ig(c)?c:new Oi(c)}}),Yk=lg(function(a,b){return g(Lc(b,1),function(b){a[b]=rk(a[b],a)}),a}),Zk=Zd(),$k=Zd(!0),_k=lg(function(a,b){return function(c){return Wc(c,a,b)}}),al=lg(function(a,b){return function(c){return Wc(a,c,b)}}),bl=ae(m),cl=ae(i),dl=ae(q),el=de(),fl=de(!0),gl=fe("ceil"),hl=fe("floor"),il=fe("round");return F.prototype=zb.prototype,F.prototype.constructor=F,Db.prototype=Dc(zb.prototype),Db.prototype.constructor=Db,Eb.prototype=Dc(zb.prototype),Eb.prototype.constructor=Eb,Ib.prototype=zj?zj(null):Ti,Nb.prototype.clear=Ob,Nb.prototype["delete"]=Pb,Nb.prototype.get=Qb,Nb.prototype.has=Rb,Nb.prototype.set=Sb,Tb.prototype.push=Vb,Wb.prototype.clear=Xb,Wb.prototype["delete"]=Yb,Wb.prototype.get=Zb,Wb.prototype.has=$b,Wb.prototype.set=_b,ig.Cache=Nb,F.after=bg,F.ary=cg,F.assign=Bk,F.assignIn=Ck,F.assignInWith=Dk,F.assignWith=Ek,F.at=Fk,F.before=dg,F.bind=rk,F.bindAll=Yk,F.bindKey=sk,F.castArray=qg,F.chain=Af,F.chunk=Ie,F.compact=Je,F.concat=Tj,F.cond=oi,F.conforms=pi,F.constant=qi,F.countBy=kk,F.create=oh,F.curry=eg,F.curryRight=fg,F.debounce=gg,F.defaults=Gk,F.defaultsDeep=Hk,F.defer=tk,F.delay=uk,F.difference=Uj,F.differenceBy=Vj,F.differenceWith=Wj,F.drop=Ke,F.dropRight=Le,F.dropRightWhile=Me,F.dropWhile=Ne,F.fill=Oe,F.filter=Mf,F.flatMap=Pf,F.flatten=Re,F.flattenDeep=Se,F.flattenDepth=Te,F.flip=hg,F.flow=Zk,F.flowRight=$k,F.fromPairs=Ue,F.functions=vh,F.functionsIn=wh,F.groupBy=lk,F.initial=Xe,F.intersection=Xj,F.intersectionBy=Yj,F.intersectionWith=Zj,F.invert=Ik,F.invertBy=Jk,F.invokeMap=mk,F.iteratee=si,F.keyBy=nk,F.keys=Ah,F.keysIn=Bh,F.map=Tf,F.mapKeys=Ch,F.mapValues=Dh,F.matches=ti,F.matchesProperty=ui,F.memoize=ig,F.merge=Lk,F.mergeWith=Mk,F.method=_k,F.methodOf=al,F.mixin=vi,F.negate=jg,F.nthArg=yi,F.omit=Nk,F.omitBy=Eh,F.once=kg,F.orderBy=Uf,F.over=bl,F.overArgs=vk,F.overEvery=cl,F.overSome=dl,F.partial=wk,F.partialRight=xk,F.partition=ok,F.pick=Ok,F.pickBy=Fh,F.property=zi,F.propertyOf=Ai,F.pull=$j,F.pullAll=_e,F.pullAllBy=af,F.pullAllWith=bf,F.pullAt=_j,F.range=el,F.rangeRight=fl,F.rearg=yk,F.reject=Xf,F.remove=cf,F.rest=lg,F.reverse=df,F.sampleSize=Zf,F.set=Hh,F.setWith=Ih,F.shuffle=$f,F.slice=ef,F.sortBy=pk,F.sortedUniq=mf,F.sortedUniqBy=nf,F.split=di,F.spread=mg,F.tail=of,F.take=pf,F.takeRight=qf,F.takeRightWhile=rf,F.takeWhile=sf,F.tap=Bf,F.throttle=ng,F.thru=Cf,F.toArray=hh,F.toPairs=Jh,F.toPairsIn=Kh,F.toPath=Ci,F.toPlainObject=lh,F.transform=Lh,F.unary=og,F.union=ak,F.unionBy=bk,F.unionWith=ck,F.uniq=tf,F.uniqBy=uf,F.uniqWith=vf,F.unset=Mh,F.unzip=wf,F.unzipWith=xf,F.update=Nh,F.updateWith=Oh,F.values=Ph,F.valuesIn=Qh,F.without=dk,F.words=ni,F.wrap=pg,F.xor=ek,F.xorBy=fk,F.xorWith=gk,F.zip=hk,F.zipObject=yf,F.zipObjectDeep=zf,F.zipWith=ik,F.extend=Ck,F.extendWith=Dk,vi(F,F),F.add=Ei,F.attempt=Xk,F.camelCase=Pk,F.capitalize=Uh,F.ceil=gl,F.clamp=Rh,F.clone=rg,F.cloneDeep=tg,F.cloneDeepWith=ug,F.cloneWith=sg,F.deburr=Vh,F.endsWith=Wh,F.eq=vg,F.escape=Xh,F.escapeRegExp=Yh,F.every=Lf,F.find=Nf,F.findIndex=Pe,F.findKey=ph,F.findLast=Of,F.findLastIndex=Qe,F.findLastKey=qh,F.floor=hl,F.forEach=Qf,F.forEachRight=Rf,F.forIn=rh,F.forInRight=sh,F.forOwn=th,F.forOwnRight=uh,F.get=xh,F.gt=wg,F.gte=xg,F.has=yh,F.hasIn=zh,F.head=Ve,F.identity=ri,F.includes=Sf,F.indexOf=We,F.inRange=Sh,F.invoke=Kk,F.isArguments=yg,F.isArray=zk,F.isArrayBuffer=zg,F.isArrayLike=Ag,F.isArrayLikeObject=Bg,F.isBoolean=Cg,F.isBuffer=Ak,F.isDate=Dg,F.isElement=Eg,F.isEmpty=Fg,F.isEqual=Gg,F.isEqualWith=Hg,F.isError=Ig,F.isFinite=Jg,F.isFunction=Kg,F.isInteger=Lg,F.isLength=Mg,F.isMap=Pg,F.isMatch=Qg,F.isMatchWith=Rg,F.isNaN=Sg,F.isNative=Tg,F.isNil=Vg,F.isNull=Ug,F.isNumber=Wg,F.isObject=Ng,F.isObjectLike=Og,F.isPlainObject=Xg,F.isRegExp=Yg,F.isSafeInteger=Zg,F.isSet=$g,F.isString=_g,F.isSymbol=ah,F.isTypedArray=bh,F.isUndefined=ch,F.isWeakMap=dh,F.isWeakSet=eh,F.join=Ye,F.kebabCase=Qk,F.last=Ze,F.lastIndexOf=$e,F.lowerCase=Rk,F.lowerFirst=Sk,F.lt=fh,F.lte=gh,F.max=Fi,F.maxBy=Gi,F.mean=Hi,F.min=Ii,F.minBy=Ji,F.noConflict=wi,F.noop=xi,F.now=qk,F.pad=Zh,F.padEnd=$h,F.padStart=_h,F.parseInt=ai,F.random=Th,F.reduce=Vf,F.reduceRight=Wf,F.repeat=bi,F.replace=ci,F.result=Gh,F.round=il,F.runInContext=W,F.sample=Yf,F.size=_f,F.snakeCase=Uk,F.some=ag,F.sortedIndex=ff,F.sortedIndexBy=gf,F.sortedIndexOf=hf,F.sortedLastIndex=jf,F.sortedLastIndexBy=kf,F.sortedLastIndexOf=lf,F.startCase=Vk,F.startsWith=ei,F.subtract=Ki,F.sum=Li,F.sumBy=Mi,F.template=fi,F.times=Bi,F.toInteger=ih,F.toLength=jh,F.toLower=gi,F.toNumber=kh,F.toSafeInteger=mh,F.toString=nh,F.toUpper=hi,F.trim=ii,F.trimEnd=ji,F.trimStart=ki,F.truncate=li,F.unescape=mi,F.uniqueId=Di,F.upperCase=Wk,F.upperFirst=Tk,F.each=Qf,F.eachRight=Rf,F.first=Ve,vi(F,function(){var a={};return Nc(F,function(b,c){Vi.call(F.prototype,c)||(a[c]=b)}),a}(),{chain:!1}),F.VERSION=Y,g(["bind","bindKey","curry","curryRight","partial","partialRight"],function(a){F[a].placeholder=F}),g(["drop","take"],function(a,b){Eb.prototype[a]=function(c){var d=this.__filtered__;if(d&&!b)return new Eb(this);c=c===X?1:rj(ih(c),0);var e=this.clone();return d?e.__takeCount__=sj(c,e.__takeCount__):e.__views__.push({size:sj(c,ya),type:a+(e.__dir__<0?"Right":"")}),e},Eb.prototype[a+"Right"]=function(b){return this.reverse()[a](b).reverse()}}),g(["filter","map","takeWhile"],function(a,b){var c=b+1,d=c==ra||c==ta;Eb.prototype[a]=function(a){var b=this.clone();return b.__iteratees__.push({iteratee:le(a,3),type:c}),b.__filtered__=b.__filtered__||d,b}}),g(["head","last"],function(a,b){var c="take"+(b?"Right":"");Eb.prototype[a]=function(){return this[c](1).value()[0]}}),g(["initial","tail"],function(a,b){var c="drop"+(b?"":"Right");Eb.prototype[a]=function(){return this.__filtered__?new Eb(this):this[c](1)}}),Eb.prototype.compact=function(){return this.filter(ri)},Eb.prototype.find=function(a){return this.filter(a).head()},Eb.prototype.findLast=function(a){return this.reverse().find(a)},Eb.prototype.invokeMap=lg(function(a,b){return"function"==typeof a?new Eb(this):this.map(function(c){return Wc(c,a,b)})}),Eb.prototype.reject=function(a){return a=le(a,3),this.filter(function(b){return!a(b)})},Eb.prototype.slice=function(a,b){a=ih(a);var c=this;return c.__filtered__&&(a>0||0>b)?new Eb(c):(0>a?c=c.takeRight(-a):a&&(c=c.drop(a)),b!==X&&(b=ih(b),c=0>b?c.dropRight(-b):c.take(b-a)),c)},Eb.prototype.takeRightWhile=function(a){return this.reverse().takeWhile(a).reverse()},Eb.prototype.toArray=function(){return this.take(ya)},Nc(Eb.prototype,function(a,b){var c=/^(?:filter|find|map|reject)|While$/.test(b),d=/^(?:head|last)$/.test(b),e=F[d?"take"+("last"==b?"Right":""):b],f=d||/^find/.test(b);e&&(F.prototype[b]=function(){var b=this.__wrapped__,g=d?[1]:arguments,h=b instanceof Eb,i=g[0],j=h||zk(b),k=function(a){var b=e.apply(F,n([a],g));return d&&l?b[0]:b};j&&c&&"function"==typeof i&&1!=i.length&&(h=j=!1);var l=this.__chain__,m=!!this.__actions__.length,o=f&&!l,p=h&&!m;if(!f&&j){b=p?b:new Eb(this);var q=a.apply(b,g);return q.__actions__.push({func:Cf,args:[k],thisArg:X}),new Db(q,l)}return o&&p?a.apply(this,g):(q=this.thru(k),o?d?q.value()[0]:q.value():q)})}),g(["pop","push","shift","sort","splice","unshift"],function(a){var b=Si[a],c=/^(?:push|sort|unshift)$/.test(a)?"tap":"thru",d=/^(?:pop|shift)$/.test(a);F.prototype[a]=function(){var a=arguments;return d&&!this.__chain__?b.apply(this.value(),a):this[c](function(c){return b.apply(c,a)})}}),Nc(Eb.prototype,function(a,b){var c=F[b];if(c){var d=c.name+"",e=Cj[d]||(Cj[d]=[]);e.push({name:b,func:c})}}),Cj[$d(X,ca).name]=[{name:"wrapper",func:X}],Eb.prototype.clone=Fb,Eb.prototype.reverse=Gb,Eb.prototype.value=Hb,F.prototype.at=jk,F.prototype.chain=Df,F.prototype.commit=Ef,F.prototype.flatMap=Ff,F.prototype.next=Gf,F.prototype.plant=If,F.prototype.reverse=Jf,F.prototype.toJSON=F.prototype.valueOf=F.prototype.value=Kf,hj&&(F.prototype[hj]=Hf),F}var X,Y="4.6.1",Z=200,$="Expected a function",_="__lodash_hash_undefined__",aa="__lodash_placeholder__",ba=1,ca=2,da=4,ea=8,fa=16,ga=32,ha=64,ia=128,ja=256,ka=512,la=1,ma=2,na=30,oa="...",pa=150,qa=16,ra=1,sa=2,ta=3,ua=1/0,va=9007199254740991,wa=1.7976931348623157e308,xa=NaN,ya=4294967295,za=ya-1,Aa=ya>>>1,Ba="[object Arguments]",Ca="[object Array]",Da="[object Boolean]",Ea="[object Date]",Fa="[object Error]",Ga="[object Function]",Ha="[object GeneratorFunction]",Ia="[object Map]",Ja="[object Number]",Ka="[object Object]",La="[object RegExp]",Ma="[object Set]",Na="[object String]",Oa="[object Symbol]",Pa="[object WeakMap]",Qa="[object WeakSet]",Ra="[object ArrayBuffer]",Sa="[object Float32Array]",Ta="[object Float64Array]",Ua="[object Int8Array]",Va="[object Int16Array]",Wa="[object Int32Array]",Xa="[object Uint8Array]",Ya="[object Uint8ClampedArray]",Za="[object Uint16Array]",$a="[object Uint32Array]",_a=/\b__p \+= '';/g,ab=/\b(__p \+=) '' \+/g,bb=/(__e\(.*?\)|\b__t\)) \+\n'';/g,cb=/&(?:amp|lt|gt|quot|#39|#96);/g,db=/[&<>"'`]/g,eb=RegExp(cb.source),fb=RegExp(db.source),gb=/<%-([\s\S]+?)%>/g,hb=/<%([\s\S]+?)%>/g,ib=/<%=([\s\S]+?)%>/g,jb=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,kb=/^\w*$/,lb=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,mb=/[\\^$.*+?()[\]{}|]/g,nb=RegExp(mb.source),ob=/^\s+|\s+$/g,pb=/^\s+/,qb=/\s+$/,rb=/\\(\\)?/g,sb=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,tb=/\w*$/,ub=/^0x/i,vb=/^[-+]0x[0-9a-f]+$/i,wb=/^0b[01]+$/i,xb=/^\[object .+?Constructor\]$/,yb=/^0o[0-7]+$/i,zb=/^(?:0|[1-9]\d*)$/,Ab=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Bb=/($^)/,Cb=/['\n\r\u2028\u2029\\]/g,Db="\\ud800-\\udfff",Eb="\\u0300-\\u036f\\ufe20-\\ufe23",Fb="\\u20d0-\\u20f0",Gb="\\u2700-\\u27bf",Hb="a-z\\xdf-\\xf6\\xf8-\\xff",Ib="\\xac\\xb1\\xd7\\xf7",Jb="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Kb="\\u2018\\u2019\\u201c\\u201d",Lb=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Mb="A-Z\\xc0-\\xd6\\xd8-\\xde",Nb="\\ufe0e\\ufe0f",Ob=Ib+Jb+Kb+Lb,Pb="["+Db+"]",Qb="["+Ob+"]",Rb="["+Eb+Fb+"]",Sb="\\d+",Tb="["+Gb+"]",Ub="["+Hb+"]",Vb="[^"+Db+Ob+Sb+Gb+Hb+Mb+"]",Wb="\\ud83c[\\udffb-\\udfff]",Xb="(?:"+Rb+"|"+Wb+")",Yb="[^"+Db+"]",Zb="(?:\\ud83c[\\udde6-\\uddff]){2}",$b="[\\ud800-\\udbff][\\udc00-\\udfff]",_b="["+Mb+"]",ac="\\u200d",bc="(?:"+Ub+"|"+Vb+")",cc="(?:"+_b+"|"+Vb+")",dc=Xb+"?",ec="["+Nb+"]?",fc="(?:"+ac+"(?:"+[Yb,Zb,$b].join("|")+")"+ec+dc+")*",gc=ec+dc+fc,hc="(?:"+[Tb,Zb,$b].join("|")+")"+gc,ic="(?:"+[Yb+Rb+"?",Rb,Zb,$b,Pb].join("|")+")",jc=RegExp(Rb,"g"),kc=RegExp(Wb+"(?="+Wb+")|"+ic+gc,"g"),lc=RegExp("["+ac+Db+Eb+Fb+Nb+"]"),mc=/[a-zA-Z0-9]+/g,nc=RegExp([_b+"?"+Ub+"+(?="+[Qb,_b,"$"].join("|")+")",cc+"+(?="+[Qb,_b+bc,"$"].join("|")+")",_b+"?"+bc+"+",_b+"+",Sb,hc].join("|"),"g"),oc=/[a-z][A-Z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,pc=["Array","Buffer","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Reflect","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],qc=-1,rc={};rc[Sa]=rc[Ta]=rc[Ua]=rc[Va]=rc[Wa]=rc[Xa]=rc[Ya]=rc[Za]=rc[$a]=!0,rc[Ba]=rc[Ca]=rc[Ra]=rc[Da]=rc[Ea]=rc[Fa]=rc[Ga]=rc[Ia]=rc[Ja]=rc[Ka]=rc[La]=rc[Ma]=rc[Na]=rc[Pa]=!1;var sc={};sc[Ba]=sc[Ca]=sc[Ra]=sc[Da]=sc[Ea]=sc[Sa]=sc[Ta]=sc[Ua]=sc[Va]=sc[Wa]=sc[Ia]=sc[Ja]=sc[Ka]=sc[La]=sc[Ma]=sc[Na]=sc[Oa]=sc[Xa]=sc[Ya]=sc[Za]=sc[$a]=!0,sc[Fa]=sc[Ga]=sc[Pa]=!1;var tc={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss"},uc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},vc={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},wc={"function":!0,object:!0},xc={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},yc=parseFloat,zc=parseInt,Ac=wc[typeof exports]&&exports&&!exports.nodeType?exports:X,Bc=wc[typeof module]&&module&&!module.nodeType?module:X,Cc=Bc&&Bc.exports===Ac?Ac:X,Dc=F(Ac&&Bc&&"object"==typeof global&&global),Ec=F(wc[typeof self]&&self),Fc=F(wc[typeof window]&&window),Gc=F(wc[typeof this]&&this),Hc=Dc||Fc!==(Gc&&Gc.window)&&Fc||Ec||Gc||Function("return this")(),Ic=W();(Fc||Ec||{})._=Ic,"function"=="function"&&"object"==typeof __webpack_require__(61)&&__webpack_require__(61)&&!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return Ic}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)),a.constant("lodash",Ic)}]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(74)(module), (function() { return this; }())))

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ]);