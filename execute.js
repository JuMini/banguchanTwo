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
	__webpack_require__(67);
	__webpack_require__(68);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
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
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
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
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
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
/* 42 */
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
/* 43 */
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
/* 44 */
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
/* 45 */
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
/* 46 */
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
/* 47 */
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
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
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
/* 53 */
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
/* 54 */
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
/* 55 */
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
/* 56 */
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
/* 57 */
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
/* 58 */
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
/* 59 */
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
/* 60 */
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
/* 61 */
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
/* 62 */
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
/* 63 */
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
/* 64 */
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
/* 65 */
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
/* 66 */
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
/* 67 */
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
/* 68 */
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