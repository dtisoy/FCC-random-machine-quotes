import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import quotesList from './english.json';
import { useEffect, useState } from 'react';

const CardQuote = (props) => {
     const [quoteIdx, setQuoteIdx] = useState(1);

    useEffect( () => {
        setQuoteIdx(getRandomInt(0, 1000));
}, [])
   
    const cardStyle = {
      maxWidth: '50rem',
      margin: '10rem auto'
       }
   const quote = quotesList.quotes[quoteIdx];
   return(
    <Card bg="dark" text="light" border="warning" style={cardStyle} id="quote-box">
      <Card.Body className="text-center">
<blockquote className="blockquote">
        <Card.Text className="fs-3 mt-3" id="text">{quote.text}</Card.Text>
        <footer className="blockquote-footer fst-italic fs-5 text-end w-50 m-auto" id="author">{quote.source}</footer>  
</blockquote>
        <Button variant="outline-warning mx-3" id="new-quote" onClick={() => setQuoteIdx(getRandomInt(1, 1000))}>New quote</Button>
        <Card.Link className="btn btn-outline-primary mx-3" href={"https://twitter.com/intent/tweet?text="+quote.text+'%0A%0A- '+quote.source}  target="_blank" id="tweet-quote" rel="noreferrer">Tweet</Card.Link>
      </Card.Body>

    </Card>
    );
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default CardQuote;
