import * as $ from 'jquery'

export class Container {
    quizItems: any;
    selectedItem: any;

    scoreCount = 0;

    constructor() {
        this.init();
        this.getNextQuestion();
    }

    init() {
        this.quizItems = $('.quiz__item').toArray();
        $('button#migrant').click(this.handleMigrant)
        $('button#refugee').click(this.handleRefugee)
        $('button#next').click(this.getNextQuestion)
    }

    handleMigrant = () => {
        this.checkAnswer('migrant')
    }
    handleRefugee = () => {
        this.checkAnswer('refugee')
    }

    checkAnswer(answer: string) {
        if (answer === $(this.selectedItem).data().answer) {
            this.showCorrectAnswer();
            this.scoreCount++;
        } else {
            this.showInCorrectAnswer()
        }
        this.disableControls();
        $('.quiz__score').text(`Answers correct: ${this.scoreCount}`);

    }

    disableControls() {
        $('.quiz__controls').addClass('locked');
        $('.quiz__mini-score').addClass('visible');
    }


    showCorrectAnswer() {
        $(this.selectedItem).find('.is-correct').show();
        $(this.selectedItem).find('.quiz__item-question').hide();
    }

    showInCorrectAnswer() {
        $(this.selectedItem).find('.is-incorrect').show();
        $(this.selectedItem).find('.quiz__item-question').hide();
    }

    getNextQuestion = () => {
        $('.quiz__controls').removeClass('locked');
        $(this.quizItems).hide();
        if (this.quizItems.length > 0) {
            this.selectedItem = this.quizItems.shift();
            $(this.selectedItem).show();    
        } else {
            
            $('.quiz__item, .quiz__controls').hide();
            $('.quiz__item--final').show();
            $('.quiz__mini-score').hide();
            
        }
        
    }
}