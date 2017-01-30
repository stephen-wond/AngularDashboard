apiViewer.service('apiQuery', function(){ //this loops through the labelList and valueList to associate a label to a value 
    this.buildQuery = function(labelList, valueList){
        var inputs;
        for (var i = 0; i < labelList.length; i++)
        {
            if (i == 0) {
                inputs = labelList[i];
                if (labelList.length > 1){
                    inputs += '?';
                }
                continue;
            }
            inputs += labelList[i] + '=' + valueList[i-1];
            if (i != labelList.length-1) {
                inputs += '&';
            }
        }
        return inputs;
    }
});