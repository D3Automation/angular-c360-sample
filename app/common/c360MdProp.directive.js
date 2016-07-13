(function () {
    'use strict';

    angular
    .module('app')
    .directive('c360MdProp', c360MdProp);

    function c360MdProp() {
        return {
            restrict: 'E',
            scope: {
                uiProp: '=',
                propLabel: '@'
            },
            controller: function ($scope) {
                var vm = this;

                setLabel();

                $scope.$watch('vm.uiProp', function (newValue, oldValue) {
                    setLabel();
                });

                function setLabel() {
                    if (vm.uiProp && !vm.propLabel) {
                        vm.propLabel = vm.uiProp.fullName;
                    }
                }
            },
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: 'app/common/c360MdProp.html'
        };
    }
})();