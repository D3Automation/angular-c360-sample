(function () {
    'use strict';

    angular.module('app')
        .controller('ErrorController', ErrorController);

    /* @ngInject */
    function ErrorController($state, c360Context) {
        var vm = this;
        
        vm.message = null;
        vm.retry = retry;

        activate();

        function activate() {
            vm.message = getErrorMessage();
        }

        function retry() {
            $state.go("model");
        }

        function getErrorMessage() {
            var message = "Unknown Error";
            var viewer = c360Context.getViewer();
            var checkContext = false;            

            if (viewer) {
                switch(viewer.state) {
                    case ADSK.C360.loadedState.GPUAccelerationDisabled:
                        message = "GPU Acceleration Disabled";
                        break;
                    case ADSK.C360.loadedState.SecurityBlocked:
                        message = "Security Blocked";
                        break;
                    case ADSK.C360.loadedState.Not3DCapable:
                        message = "Not 3D Capable";
                        break;
                    case ADSK.C360.loadedState.TemporarilyUnavailable:
                        message = "Temporarily Unavailable";
                        break;
                    case ADSK.C360.loadedState.NotStandardsCompliant:
                        message = "Not Standards Compliant";
                        break;
                    case ADSK.C360.loadedState.WebGLNotSupported:
                        message = "WebGL Not Supported";
                        break;
                    case ADSK.C360.loadedState.ThirdPartyCookiesDisabled:
                        message = "Third Party Cookies Disabled";
                        break;
                    case ADSK.C360.loadedState.DesignOpenInOtherWindowOrTab:
                        message = "Design Open in Other Window or Tab";
                        break;
                    case ADSK.C360.loadedState.ServerMaintenance:
                        message = "Server Maintenance";
                        break;
                    case ADSK.C360.loadedState.Forbidden:
                        message = "Forbidden";
                        break;
                    case ADSK.C360.loadedState.NotFound:
                        message = "Design Not Found";
                        break;
                    case ADSK.C360.loadedState.Error:
                        checkContext = true;
                        break;
                    case ADSK.C360.loadedState.Loaded:
                        checkContext = true;
                        break;                    
                }
            } else {
                checkContext = true;
            }

            if (checkContext) {
                var lastError = c360Context.getLastError();
                
                if (lastError) {
                    message = lastError;
                }
            }

            return message;
        }
    }
})();