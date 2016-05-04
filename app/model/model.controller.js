(function () {
    'use strict';

    angular.module('app')
        .controller('ModelController', ModelController);

    /* @ngInject */
    function ModelController(rootPart) {
        var vm = this;

        vm.rootPart = rootPart;

        activate();

        function activate() {

        }
    }
})();