import express from "express"
const app = express()
const port = process.env.PORT || 3000
app.get("/", (req, res) => {    //res => respond req , req => request 
    res.send("server created");
});
const quotes = 
    [
        {
          "author": "Franz Kafka",
          "quote": "A first sign of the beginning of understanding is the wish to die."
        },
        {
          "author": "Fyodor Dostoevsky",
          "quote": "Man only likes to count his troubles; he doesn't calculate his happiness.",
          "source": "Notes from Underground"
        },
        {
          "author": "Franz Kafka",
          "quote": "In man’s struggle against the world, bet on the world."
        },
        {
          "author": "Fyodor Dostoevsky",
          "quote": "The mystery of human existence lies not in just staying alive, but in finding something to live for.",
          "source": "The Brothers Karamazov"
        },
        {
          "author": "Franz Kafka",
          "quote": "I am a cage, in search of a bird."
        }
      ]
      

app.get("/quotes", (req, res) => {
    res.json(quotes);
})

app.listen(port, () => {
    console.log("server listening");
});
