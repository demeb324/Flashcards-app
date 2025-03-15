import './App.css';
import React from 'react';
import { useState } from 'react';
import Card from './components/Card';

const App = () => {
  const flashcards = [
    { question: 'Click on "Next Card" for next card!', answer: 'Welcome!' },
    { question: 'A linear data structure that follows the LIFO (Last In, First Out) principle.', answer: 'Stack' },
    { question: 'A linear data structure that follows the FIFO (First In, First Out) principle.', answer: 'Queue' },
    { question: 'A tree data structure in which each node has at most two children, referred to as the left child and the right child.', answer: 'BinaryTree' },
    { question: 'A linear data structure where each element is a separate object, with each element (node) containing a reference (link) to the next node in the sequence.', answer: 'LinkedList' },
    { question: 'A data structure that implements an associative array, a structure that can map keys to values using a hash function.', answer: 'HashTable' },
    { question: 'A data structure that consists of a finite set of vertices (nodes) and a set of edges connecting these vertices.', answer: 'Graph' },
  ];

  const [cardIndex, setCardIndex] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const handleInputChange = (e) => setUserAnswer(e.target.value);

  const handleNextCard = () => {
    if (cardIndex < flashcards.length - 1) {
      setCardIndex(cardIndex + 1);
      setCardFlipped(false); // Reset flip state for the new card
      setFeedback(''); // Reset feedback
      setUserAnswer(''); // Clear input field
    }
  };

  const handlePrevCard = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
      setCardFlipped(false);
      setFeedback('');
      setUserAnswer('');
    }
  };

  const handleCheckAnswer = () => {
    if (!cardFlipped) {
      if (userAnswer.toLowerCase() === flashcards[cardIndex].answer.toLowerCase()) {
        setFeedback('Correct :)');
        setCurrentStreak(currentStreak + 1);
        if (currentStreak + 1 > longestStreak) {
          setLongestStreak(currentStreak + 1);
        }
      } else {
        setFeedback(`Incorrect (;*-*) Flip to see answer!`);
        setCurrentStreak(0);
      }
    }
  }

  return (
    <div className="App">
      <h1>Data Structures and Algorithms Review!</h1>
      <h1>Test your skills &#128572;</h1>
      <h3>This is an interactive review to see how much you know about DSA!</h3>
      <h3>Click on card to see answer and click on "Next Card" for next card!</h3>
      <br />
      <h3>🔥 Current Streak: {currentStreak}</h3>
      <h3>🏆 Longest Streak: {longestStreak}</h3>
      <h3>Card {cardIndex + 1} of {flashcards.length}</h3>
      <Card 
        card={flashcards[cardIndex]} 
        flipped={cardFlipped} 
        setFlipped={setCardFlipped} 
      />
      
      <input 
        type="text" 
        value={userAnswer} 
        onChange={handleInputChange} 
        placeholder="Type your answer here..." 
      />
      <button onClick={handleCheckAnswer}>Check Answer</button>
      <p>{feedback}</p>
      <br />
      <button onClick={handlePrevCard} disabled={cardIndex === 0}>Previous Card</button>
      <button onClick={handleNextCard} disabled={cardIndex === flashcards.length - 1}>Next Card</button>
    </div>
  );
};

export default App;