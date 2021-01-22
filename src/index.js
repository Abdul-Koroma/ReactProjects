import React from 'react';
import ReactDom from 'react-dom'
// CSS, java script not needed
import './index.css'
// always need to return JSX
// className instead of class
// use camelCase for html attribute

function BookList() { // must be capital letter for functionality
  return (
    <section className='booklist'>
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'> 
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => {
  return (
    <img src='https://m.media-amazon.com/images/I/9131ReRjnAL._AC_UY218_.jpg' alt=''></img>
  );
}

const Title = () => {
  return (
    <h1>The White Griaffe </h1>
  );
}

const Author = () => {
  return (
    <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Lauren ST. John</h4>
  );
} 
// Could also use const nested components like
// const Message = () => {return <p>this is my message</p>;};(<Message/>)

// Can also use
// const Greeting = () => {
//    return React.createElement('h1', {}, 'hello world'); 
// }; can also recursively embed CreateElements

ReactDom.render(<BookList/>, document.getElementById('root')); 
// JS is injected into the root