class Game {
    constructor() {
        this.currentLevel = 1;
        this.question = {};
        this.win = false;
        this.lose = false;
        this.guaranteed = 0;
    };

    getQuestion() {
        $.ajax({
            url: '/api/getQuestionByLevel',
            method: 'post',
            data: {level: this.currentLevel},
            success: (data) => {
                this.question = data;
                $('.first').val(data.answerA);
                $('.second').val(data.answerB);
                $('.third').val(data.answerC);
                $('.fourth').val(data.answerD);
                $('.question').html(data.title);
                $($('.amount > li')[12 - this.currentLevel + 1]).removeClass('active');
                $($('.amount > li')[12 - this.currentLevel]).addClass('active');
            },
            error: function (e) {
                throw new Error('Fetching error 0x01');
            }
        });
    }

    levelUp() {
        if (this.currentLevel < 12) {
            this.currentLevel++;
            this.getQuestion();
            $('.shaddy').addClass('active');
            $('.correct').addClass('active');
            if (guaranteed.indexOf(this.currentLevel - 2) !== -1) {
                this.guaranteed = prices[this.currentLevel - 2];
            }
            $('.zufall > .sub').html(negativeVibes[Math.floor(Math.random() * 3)] + " Masz " + this.guaranteed + "zł");
            $('.correct > .sub').html(goodVibes[Math.floor(Math.random() * goodVibes.length - 1)]);
            setTimeout(function () {
                $('.shaddy').removeClass('active');
                $('.correct').removeClass('active');
            }, 2000);
        } else {
            this.win = true;
            this.winGame();
        }
    }

    winGame() {
        $('.winner').addClass('active');
    }

    loseGame() {
        this.lose = true;
        $('.shaddy').addClass('active');
        $('.zufall').addClass('active');
    }

    confirmAnswer(selected) {
        if (selected === this.question.correct) {
            this.levelUp();
        } else {
            this.loseGame();
        }
    }

}

const prices = ["500", "1000", "2000", "5000", "10.000", "20.000", "40.000", "75.000", "125.000", "250.000", "500.000", "1.000.000"];
const guaranteed = [1, 6, 11];
const goodVibes = [
    "Idziesz jak burza! &#127785;",
    "Oby tak dalej! &#128522;",
    "Niemożliwe!!! &#128516;",
    "Szansa na milion coraz bliżej! &#128519;",
    "Dasz radę! &#128519;"
];

const negativeVibes = [
    "Tym razem się nie udało, przykro nam &#128554;",
    "Zawsze możesz zagrać jeszcze raz &#128527;",
    "Następnym razem będzie lepiej &#128527;",
    "Spróbuj jeszcze raz &#128527;"
];

let game = new Game();
game.getQuestion();

//events
$('.answer').click(function (e) {
    e.preventDefault();
    const selectedAnswer = $(this).attr('id');
    $(this).addClass('selected');
    setTimeout(() => {
        $(this).removeClass('selected');
        game.confirmAnswer(selectedAnswer);
    }, 1500);
});

$('.new-game').click(function () {
    window.location.reload();
});