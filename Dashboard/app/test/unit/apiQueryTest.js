describe('apiQuery', function() {

    beforeEach(module('apiViewer'));

    it('should check that the http request is built in the correct format', inject(function(apiQuery){
        var labels = ['callName','label1','label2'];
        var values = ['value1','value2'];
        var test = apiQuery.buildQuery(labels,values);
        expect(test).toBe('callName?label1=value1&label2=value2');
    }));
});
