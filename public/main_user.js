$.ajax({
    url: '/api/getQuestionByLevel',
    data: { level: 1},
    success: function(data){
        console.log(data);
    }
});