const express = require('express')
const router = express.Router()

const wordCounter = {
    pizza: 2,
    cake: 5,
    apple: 7,
    pasta: 10
}

router.get('/sanity',function(req,res){
    res.send("hello")
})

router.get('/word/:word', function(req, res){
    let word = req.params.word
    
    if(wordCounter[word]){
       res.send({count: wordCounter[word]})
    }
    else{
        res.send({count:0})
    }
    })
router.post('/word/:word', function(req, res){
    let word = req.params.word
    if(wordCounter[word]){
        wordCounter[word]++
        res.send(wordCounter)
     }
     else{
        wordCounter[word] = 1
        res.send({text: `Added ${word}`, currentCount: wordCounter[word]})
     }
})

router.post('/words/:sentence', function(req, res){
    let numNewWords = 0
    let numOldWords = 0

    let sentence = req.params.sentence
    let splitSentence = sentence.split(' ')
    splitSentence.forEach(w => {
        if(wordCounter[w]){
           numOldWords++
        }
        else{
            numNewWords++
        }
    });
        res.send(`text: "Added ${numNewWords} words, ${numOldWords} already existed"`)
})

router.get('/total',function(req,res){
    counter = 0
    for(let i in wordCounter){
        counter++
    }
    res.send({text: "Total Count", count:counter})
})
module.exports = router
