document.addEventListener('DOMContentLoaded', () => {
const list = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
const card = document.querySelectorAll('.card');
const gameOver = document.querySelector('.game_over');
const buttonGame = document.querySelector('button');

function shuffleArray(array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	};
};


function assing(array, elem) {
	shuffleArray(array);
	for (let i = 0; i < elem.length; i++) {
		elem[i].classList.add(`number${array[i]}`);
	}
}

assing(list, card);




function clickCard() {
		let card1;
		let card2;
		let cardCount = [];
		let r = 3;
		let p = 0;
		let e = 0;

		for (let k = 0; k < card.length; k++) {
			card[k].addEventListener('click', () => {

				if (e === 7) {
					gameOver.classList.add('game');
				}

				for (let i = 0; i < 8; i++) {
					if (card[k].classList.contains(`card_number${[i]}`)){
						continue;
					}
					else if (card[k].classList.contains(`number${[i]}`)) {
						card[k].classList.add(`card_number${[i]}`)
						card[k].disabled = 'disabled';
						cardCount.push(i);
						console.log(cardCount);

						if (cardCount.length === r) {
							card1 = cardCount[p];
							card2 = cardCount[p + 1];

							if (card1 !== card2) {
								let cardNumber1 = document.querySelector(`.card_number${cardCount[p]}`);
								let cardNumber2 = document.querySelector(`.card_number${cardCount[p + 1]}`);

								if (cardNumber1.classList.contains(`card_number${cardCount[p]}`)) {
									cardNumber1.classList.remove(`card_number${cardCount[p]}`);
								}

								if (cardNumber2.classList.contains(`card_number${cardCount[p + 1]}`)) {
									cardNumber2.classList.remove(`card_number${cardCount[p + 1]}`);
								}

								cardCount.splice(p, 2);
							}
							else if (card1 === card2) {
								e++;
								r = r + 2;
								p = p + 2;
							}

							console.log(e);
						}
					}
				}
			});
		};
	};


function gameReturn (){
buttonGame.addEventListener('click', () => {
	assing(list, card);
})
};

clickCard();
gameReturn ();
});






