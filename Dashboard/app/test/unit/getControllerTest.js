describe('getAllVatCodesController', function(){
    var $controllerConstructor, scope;
    
    beforeEach(module("apiViewer"));

    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
    }));

    it('should populate the first item in labelList with the name of the call', function(){
        var ctrl = $controllerConstructor("getAllVatCodesController",
            {'$scope':scope,})

        expect(scope.labels[0]).toEqual("getAllVatCodes");
    });
});


describe('getMetadataController', function(){
    var $controllerConstructor, scope;
    
    beforeEach(module("apiViewer"));

    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
    }));

    it('should populate error, data and values and then run clickClear to remove these mock values', function(){
        var ctrl = $controllerConstructor("getMetadataController",
            {'$scope':scope,})

        scope.values = ['userInput1','userInput2'];
        scope.error = "this is a mock error"
        scope.data = "this is mock data"
        expect(scope.values[0]).toEqual("userInput1");
        expect(scope.error).toBeTruthy;
        expect(scope.values[0]).toBeTruthy;
        scope.clearClick();
        expect(scope.values.length).toBeLessThan(1);
        expect(scope.error).toBeNull;
        expect(scope.values[0]).toBeNull;
    });
});


describe('getAllTenderTypesController', function(){
    var $controllerConstructor, scope;
    
    beforeEach(module("apiViewer"));

    beforeEach(inject(function($controller, $rootScope, $window){
        spyOn( $window, 'open').and.callFake( function(){
            return true;
        });
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
    }));

    it('should test that the goTo function opens a new window with correctly formatted URL', function(){
        var ctrl = $controllerConstructor("getAllTenderTypesController",
            {'$scope':scope,})

        scope.values = ['0'];
        scope.goTo()
        expect(window.open).toHaveBeenCalledWith("https://epos.uatpaypoint.services/POSWebServiceProxyV2/rest/POSService/getAllTenderTypes?datasourceId=0");

    });
});