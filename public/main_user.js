class Game {
    constructor(){
        this.currentLevel = 1;
        this.question = {};
        this.win = false;
        this.lose = false;
    };
    getQuestion(){
        $.ajax({
            url: '/api/getQuestionByLevel',
            method: 'post',
            data: { level:this.currentLevel },
            success: (data)=>{
                this.question = data;
                $('.first').val(data.answerA);
                $('.second').val(data.answerB);
                $('.third').val(data.answerC);
                $('.fourth').val(data.answerD);
                $('.question').html(data.title);
                $($('.amount > li')[12-this.currentLevel+1]).removeClass('active');
                $($('.amount > li')[12-this.currentLevel]).addClass('active');
            },
            error: function(e){
                throw new Error('Fetching error 0x01');
            }
        });
    }
    levelUp(){
        if(this.currentLevel<12){
            this.currentLevel++;
            this.getQuestion();
            $('.shaddy').addClass('active');
            $('.correct').addClass('active');
            setTimeout(function(){
                $('.shaddy').removeClass('active');
                $('.correct').removeClass('active');
            },1000);
        } else {
            this.win = true;
        }
    }
    loseGame() {
        this.lose = true;
        $('.shaddy').addClass('active');
        $('.zufall').addClass('active');
        //TODO: Will be refreshing web on click NEWGAME
    }
    confirmAnswer(selected){
        if(selected===this.question.correct){
            this.levelUp();
            console.log("Level UP");
        } else {
            console.log("LOST");
            this.loseGame();
        }
    }

}

let game = new Game();
game.getQuestion();

//events
$('.answer').click(function(e){
    e.preventDefault();
    const selectedAnswer = $(this).attr('id');
    game.confirmAnswer(selectedAnswer);
});

$('.new-game').click(function(){
    window.location.reload();
});