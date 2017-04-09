function routerConfig($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider

        .state('intro', {
            url: '/intro',
            views: {
                home: {
                    templateUrl: 'app/locations/intro/intro.html',
                    controller: 'IntroController as introCtrl'
                }
            }
        })
        .state('splash', {
            url: '/splash',
            views: {
                home: {
                    templateUrl: 'app/locations/splash/splash.html',
                    controller: 'SplashController as splCtrl'
                }
            }
        })
        .state('home', {
            url: '/home',
            views: {
                home: {
                    templateUrl: 'app/locations/home/home.html',
                    controller: 'HomeController as homeCtrl'
                }
            }
        })

        .state('map', {
            url: '/map',
            views: {
                home: {
                    templateUrl: 'app/locations/map/map.html',
                    controller: 'MapController as map'
                }
            }
        })
        .state('latinhub', {
            url: '/latinhub',
            views: {
                home: {
                    templateUrl: 'app/locations/latinhub/latinhub.html',
                    controller: 'LatinhubController as latinhub'
                }
            }
        })
        .state('contest', {
            url: '/contest',
            views: {
                home: {
                    templateUrl: 'app/locations/contest/contest.html',
                    controller: 'ContestController as contest'
                }
            }
        })
        .state('sponsors', {
            url: '/sponsors',
            views: {
                home: {
                    templateUrl: 'app/locations/sponsors/sponsors.html',
                    controller: 'SponsorsController as sponsors'
                }
            }
        })        
        .state('media', {
            url: '/media',
            views: {
                home: {
                    templateUrl: 'app/locations/media/media.html',
                    controller: 'MediaController as media'
                }
            }
        })        

    .state('detailMaster', {
        url: '/detail/:section/:id',
        views: {
            home: {
                templateUrl: 'app/locations/detail/detail.html',
                controller: 'DetailController as detail'
            }
        }
    })


    .state('plazas', {
            url: '/plazas',
            views: {
                home: {
                    templateUrl: 'app/locations/plazas/plazas.html',
                    controller: 'PlazasController as plaza'
                }
            }
        })
        .state('detail', {
            url: '/plazas/detail/:id',
            views: {
                home: {
                    templateUrl: 'app/locations/plazas/detail.html',
                    controller: 'PlazasController as plaza'
                }
            }
        })

    .state('detail.day1', {
            url: '/day1',
            templateUrl: 'app/locations/plazas/detail.day1.html',
            controller: 'PlazasController as plaza'
        })
        .state('detail.day2', {
            url: '/day2',
            templateUrl: 'app/locations/plazas/detail.day2.html',
            controller: 'PlazasController as plaza'
        })
        .state('detail.biz', {
            url: '/biz',
            templateUrl: 'app/locations/plazas/detail.biz.html',
            controller: 'PlazasController as plaza'
        })


    //Event
    .state('event', {
            url: '/event',
            views: {
                home: {
                    templateUrl: 'app/locations/event/event.html',
                    controller: 'EventController as event'
                }
            }
        })
        .state('event.eat', {
            url: '/eat',
            templateUrl: 'app/locations/event/eat.html',
            controller: 'EatController as eat'
        })
        .state('event.play', {
            url: '/play',
            templateUrl: 'app/locations/event/play.html'
        })
        .state('event.live', {
            url: '/live',
            templateUrl: 'app/locations/event/live.html'
        })
        .state('mainStage', {
            url: '/mainstage',
            views: {
                home: {
                    templateUrl: 'app/locations/mainstage/mainstage.html',
                    controller: 'MainstageController as mainstageCtrl'
                }
            }
        })

    .state('vendors', {
            url: '/vendors',
            views: {
                home: {
                    templateUrl: 'app/locations/vendors/vendors.html',
                    controller: 'VendorsController as vendor'
                }
            }
        })
        .state('vendors.products', {
            url: '/products',
            templateUrl: 'app/locations/vendors/products.html'
        })
        .state('vendors.nonprofit', {
            url: '/nonprofit',
            templateUrl: 'app/locations/vendors/nonprofit.html'
        })


    .state('mainStage.detail', {
        url: '/detail/:id',
        views: {
            mainstage: {
                templateUrl: 'app/locations/mainstage/detail.html'
            }
        }
    });



    $urlRouterProvider.otherwise('/intro');
}

export default routerConfig;
