import {useState} from "react"
function App()
{
   const question=[
    {
      questionText:"which is the  frontend framework used to create web apps?",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"React js",isCorrect:true},
        {answerText:"Express js",isCorrect:false},
        {answerText:"mongo DB",isCorrect:false},
      ]
    },
    {
      questionText:"which is the web server among this?",
      answerOption:[
        {answerText:"Node js",isCorrect:true},
        {answerText:"React js",isCorrect:false},
        {answerText:"Express js",isCorrect:false},
        {answerText:"mongo DB",isCorrect:false},
      ]
    },
    {
      questionText:"which is node js framework create",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"React js",isCorrect:false},
        {answerText:"Express js",isCorrect:true},
        {answerText:"mongo DB",isCorrect:false},
      ]
    },
    {
      questionText:"which is use to create database",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"React js",isCorrect:false},
        {answerText:"Express js",isCorrect:false},
        {answerText:"mongo DB",isCorrect:true},
      ]
    },
    {
      questionText:"which is allow the array methods",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"React js",isCorrect:true},
        {answerText:"Express js",isCorrect:false},
        {answerText:"mongo DB",isCorrect:false},
      ]
    },
    {
      questionText:"which is creating server api website ",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"React js",isCorrect:false},
        {answerText:"Express js",isCorrect:true},
        {answerText:"mongo DB",isCorrect:false},
      ]
    },
    {
      questionText:"which is use to adding database",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"React js",isCorrect:false},
        {answerText:"Express js",isCorrect:false},
        {answerText:"mongo DB",isCorrect:true},
      ]
    },
    {
      questionText:"which  is used to create a file system",
      answerOption:[
        {answerText:"Node js",isCorrect:true},
        {answerText:"React js",isCorrect:false},
        {answerText:"Express js",isCorrect:false},
        {answerText:"mongo DB",isCorrect:false},
      ]
    },
    {
      questionText:"which is use to create a variables",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"React js",isCorrect:true},
        {answerText:"Express js",isCorrect:false},
        {answerText:"mongo DB",isCorrect:false},
      ]
    },
    {
      questionText:"which is backend framework of javascript",
      answerOption:[
        {answerText:"Node js",isCorrect:false},
        {answerText:"React js",isCorrect:false},
        {answerText:"Express js",isCorrect:true},
        {answerText:"mongo DB",isCorrect:false},
      ]
    },
    
   ]
   const [currentQuestion,setCurrentQuestion]=useState(0)
   const [showScore,setShowSccore]=useState(false)
   const [score,setScore]=useState(0)
   const Handle=(isCorrect)=>{
    if(isCorrect)
    {
      setScore(score+1)
    }
    const nextQuestion=currentQuestion+1
    if(nextQuestion<question.length)
    {
      setCurrentQuestion(nextQuestion)
    } 
    else
    {
      setShowSccore(true)
    }
  }
  return(
    <div className="quiz">
      {showScore?(
        <div className="score-section">
          YOU HAVE SCORE {score}OUT OF {question.length}!!!
          </div>
      ):(
        <>
        <div className="question-section">
          <span>QUESTION{currentQuestion+1}</span>/{question.length}
        </div>
        <div className="question-text">
          {question[currentQuestion].questionText}
        </div>
        <div className="answer-section">
          {question[currentQuestion].answerOption.map((answerOption)=>(
            <button onClick={()=>Handle(answerOption.isCurrect)}>{answerOption.answerText}</button>
          ))}
        </div>
        </>
      )
      }
      </div>
    
  )
}
export default App