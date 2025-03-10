import './App.css';
import React from 'react';
import { useState } from 'react';
import Card from './components/Card';

const App = () => {
  const flashcards = [
    { question: 'Welcome!', answer: 'Click on "\Next Card\" for next card!' },
    { question: 'What is a stack?', answer: 'A stack is a linear data structure that follows the LIFO (Last In, First Out) principle.' },
    { question: 'What is a queue?', answer: 'A queue is a linear data structure that follows the FIFO (First In, First Out) principle.' },
    { question: 'What is a binary tree?', answer: 'A binary tree is a tree data structure in which each node has at most two children, referred to as the left child and the right child.' },
    { question: 'What is a linked list?', answer: 'A linked list is a linear data structure where each element is a separate object, with each element (node) containing a reference (link) to the next node in the sequence.' },
    { question: 'What is a hash table?', answer: 'A hash table is a data structure that implements an associative array, a structure that can map keys to values using a hash function.' },
    { question: 'What is a graph?', answer: 'A graph is a data structure that consists of a finite set of vertices (nodes) and a set of edges connecting these vertices.' },
  ];

  const [cardIndex, setCardIndex] = useState(0);

  const handleNextCard = () => {
    if (cardIndex <= flashcards.length - 2) {
      setCardIndex(cardIndex + 1);
    }
  };

  const handlePrevCard = () => {
    if (cardIndex >= 1) {
      setCardIndex(cardIndex - 1);
    }
  };

  return (
    <div className="App">
      <h1>Data Structures and Algorithms Review!</h1>
      <h1>Test your skills &#128572;</h1>
      <h3>Click on card to see answer and click on "Next Card" for next card!</h3>
      <br />
      <h3>Card {cardIndex + 1} of {flashcards.length}</h3>
      <Card card={flashcards[cardIndex]} flipped={false}/>
      <button onClick={handlePrevCard}>Previous Card</button>
      <button onClick={handleNextCard}>Next Card</button>
    </div>
  );
};

export default App;