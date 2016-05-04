(function () {
    angular.module('app')
        .controller('ErrorDialogController', ErrorDialogController);

    /* @ngInject */
    function ErrorDialogController($mdDialog, error) {
        var vm = this;

        //#region Bindable Members

        vm.ok = ok;
        vm.message = error.message;
        vm.details = error.details;
        vm.toggleDetails = toggleDetails;
        vm.detailsCollapsed = true;

        //#endregion

        initialize();

        //#region Private Functions

        function initialize() {

        }

        function ok() {
            $mdDialog.hide();
        }

        function toggleDetails() {
            vm.detailsCollapsed = !vm.detailsCollapsed;
        }

        //#endregion
    }
})();