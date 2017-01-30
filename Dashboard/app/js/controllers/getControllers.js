var MainController = function ($scope, $http, $window, apiQuery, getData, labelList) {
        $scope.values = [];
        $scope.labels = labelList;

        var apiQueryString = function () {
            return apiQuery.buildQuery(labelList, $scope.values)
        }

        $scope.getFunction = function () {
            return getData.dataPromise(apiQueryString()).then(
                function(response){
                    $scope.data = response.data;
                },
                function(reason){
                    $scope.error = reason.data;
                });
        }

        $scope.goTo = function () {
            $window.open(baseUrl + apiQueryString());
        };

        $scope.clearClick = function () {
            $scope.error = null;
            $scope.data = null;
            $scope.values = [];
        };
};


apiViewer.controller("generateReportController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["generateReport", "datasourceId", "reportType", "groupByType", "groupId", "startDateTime", "endDateTime", "pageIndex", "pageSize", "sortColumn", "filters"];
    MainController($scope, $http, $window, apiQuery, getData, labelList);
});

apiViewer.controller("getAllTenderTypesController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["getAllTenderTypes", "datasourceId"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});

apiViewer.controller("getAllVatCodesController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["getAllVatCodes"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});

apiViewer.controller("getMetadataController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["getMetadata", "datasourceId"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});

apiViewer.controller("getProductController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["getProduct", "productId", "datasourceId"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});

apiViewer.controller("getProductByCategoryController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["getProductByCategory", "productCategoryId", "datasourceId"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});

apiViewer.controller("getProductByEanController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["getProductByEan", "eanCode", "datasourceId"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});

apiViewer.controller("getProductCategoriesController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["getProductCategories", "datasourceId"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});

apiViewer.controller("getProductCategoryController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["getProductCategory", "datasourceId", "productCategoryId"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});

apiViewer.controller("getProductMaintenanceController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["getProductMaintenance", "productId", "datasourceId"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});

apiViewer.controller("getPromotionController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["getPromotion", "promotionId", "datasourceId"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});

apiViewer.controller("getPromotionMaintenanceController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["getPromotionMaintenance", "promotionId", "datasourceId"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});

apiViewer.controller("getQuickSellButtonController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["getQuickSellButton", "datasourceId", "quickSellButtonId"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});

apiViewer.controller("getQuickSellPageSetupController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["getQuickSellPageSetup", "datasourceId", "quickSellPageId"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});

apiViewer.controller("getTenderButtonController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["getTenderButton", "datasourceId", "tenderButtonId"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});

apiViewer.controller("getTenderPageSetupController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["getTenderPageSetup", "datasourceId"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});

apiViewer.controller("getTenderTypeController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["getTenderType", "datasourceId", "tenderTypeId"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});

apiViewer.controller("getTenderTypeMaintenanceController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["getTenderTypeMaintenance", "datasourceId", "tenderTypeId"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});

apiViewer.controller("getTillSettingsController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["getTillSettings", "datasourceId"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});

apiViewer.controller("searchProductsController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["searchProducts", "searchCriteria", "datasourceId", "isDumpCode", "pageIndex", "pageSize", "sortColumn"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});

apiViewer.controller("searchPromotionsController", function($scope, $http, $window, apiQuery, getData) {
    var labelList = ["searchPromotions", "searchCriteria", "datasourceId", "pageIndex", "pageSize", "sortColumn"];
    MainController($scope, $http, $window, apiQuery, getData, labelList)
});