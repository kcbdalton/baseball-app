import { PlayingCard } from "../models/CardGameModels/PlayingCard.js";
import { Hand } from "@/models/CardGameModels/Hand.js";
/**
 * Creates a deck of 52 cards, with number cards, face cards (Jack, Queen, King), and aces.
 * @returns {PlayingCard[]} A shuffled deck of cards
 */
export function createDeck() {
	const suits = [ "Hearts", "Diamonds", "Clubs", "Spades" ];
	const values = [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	const faceCards = [ "Jack", "Queen", "King" ];
	const deck = [];
	
  
	for (const suit of suits) {
		for (const value of values) {
			deck.push(new PlayingCard(suit, value, `${value}_of_${suit}.png`));
		}
	}
  
	for (const suit of suits) {
		for (const faceCard of faceCards) {
			deck.push(new PlayingCard(suit, faceCard, `${faceCard}_of_${suit}.png`));
		}
	}

	for (const suit of suits) {
		deck.push(new PlayingCard(suit, "Ace", `Ace_of_${suit}.png`));
	}
	
	return deck;
}
export function shuffle(deck) {
	for (let i = deck.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
		[deck[i], deck[j]] = [deck[j], deck[i]]; // Swap the elements
	}

	return deck
}
/**
 * Randomly chooses a card from the deck and then removes it from the deck.
 * @returns {PlayingCard} A random card
 */
export function dealCard(currentDeck) {
	if (currentDeck.length === 0) {
		throw new Error("The deck is empty! Cannot deal more cards.");
	}
	const randomIndex = Math.floor(Math.random() * currentDeck.length);

	// Remove the card at the random index from the deck and add it to dealt cards
	const dealtCard = currentDeck.splice(randomIndex, 1)[0];
	return dealtCard;
}

export function initialDeal(currentDeck) {
	let playerHand = new Hand();
	let dealerHand = new Hand();
	for (let i = 0; i < 4; i++) {
		if (i % 2 === 0) {
			playerHand.push(dealCard(currentDeck))
		} else {
			dealerHand.push(dealCard(currentDeck))
		}
	}

	return [playerHand, dealerHand]
}



export const deck = createDeck();