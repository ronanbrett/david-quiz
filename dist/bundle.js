!function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,i){"use strict";function n(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[i],e[i]=n}return e}Object.defineProperty(t,"__esModule",{value:!0});var s=i(2),r=function(){function e(){var e=this;this.scoreCount=0,this.handleMigrant=function(){e.checkAnswer("migrant")},this.handleRefugee=function(){e.checkAnswer("refugee")},this.getNextQuestion=function(){s(".quiz__item-answer").removeClass("is-visible"),s(".quiz__controls").removeClass("locked"),s(".quiz__item").hide(),e.quizItems.length>0?(e.selectedItem=e.quizItems.shift(),s(e.selectedItem).show()):(s(".quiz__item").removeClass("is-visible"),s(".quiz__controls").hide(),s(".quiz__item--final").show(),s(".quiz__mini-score").removeClass("is-visible"))},this.init(),this.getNextQuestion()}return e.prototype.init=function(){this.quizItems=s(".quiz__item").toArray(),this.quizItems=n(this.quizItems),s("button#migrant").click(this.handleMigrant),s("button#refugee").click(this.handleRefugee),s("button#next").click(this.getNextQuestion)},e.prototype.checkAnswer=function(e){var t="migrant";s(this.selectedItem).hasClass("answer-refugee")&&(t="refugee"),e===t?(this.showCorrectAnswer(),this.scoreCount++):this.showInCorrectAnswer(),this.disableControls(),s(".quiz__score").text("Answers correct: "+this.scoreCount)},e.prototype.disableControls=function(){s(".quiz__controls").addClass("locked"),s(".quiz__mini-score").addClass("is-visible")},e.prototype.showCorrectAnswer=function(){s(this.selectedItem).find(".is-correct").addClass("is-visible"),s(this.selectedItem).find(".quiz__item-question").removeClass("is-visible")},e.prototype.showInCorrectAnswer=function(){s(this.selectedItem).find(".is-incorrect").addClass("is-visible"),s(this.selectedItem).find(".quiz__item-question").removeClass("is-visible")},e}();t.Container=r},function(e,t){},function(e,t){e.exports=jQuery},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i(1);var n=i(0);(new(function(){function e(){this.container=new n.Container}return e.prototype.init=function(){},e}())).init()}]);
//# sourceMappingURL=bundle.js.map