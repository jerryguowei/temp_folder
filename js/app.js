(function () {
    'use strict';

    var isOnGitHub = window.location.hostname === 'blueimp.github.io',
        url = '';

    angular.module('demo', [
        'blueimp.fileupload'
    ]).controller('DemoFileUploadController', [
            '$scope', '$http', '$filter', '$window',
            function ($scope, $http) {
                $scope.options = {
                    url: url
                };
                    $scope.loadingFiles = false;
                    // $http.get(url)
                    //     .then(
                    //         function (response) {
                    //             $scope.loadingFiles = false;
                    //             $scope.queue = response.data.files || [];
                    //         },
                    //         function () {
                    //             $scope.loadingFiles = false;
                    //         }
                    //     );
                
            }
        ]);

}());
