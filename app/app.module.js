(function () {
    angular
        .module('app', [
            // Angular modules
            'ngAnimate',        // animations
            'ngAria',
            'ngMessages',

            // 3rd Party Modules
            'angular-c360',
            'ui.router',
            'cgBusy',
            'ngMaterial'])
        .run(appRun);

    /* @ngInject */
    function appRun($state, common, c360Context) {

    }
})();
