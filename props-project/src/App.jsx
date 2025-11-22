import Cards from '../Components/Cards'
import User from '../Components/User'
import './App.css'


function App() {

  let subjects={
    sub1:"Science of Chemistry",
    sub2:"Science of Biology",
    sub3:"Science of Physics",
    sub4:"Science of Mathematics"
  }

  let buttons={

    btn1Txt :"Click me",
    btn2Txt : "Learn More"

  }
  let cardInfo={
    txt1:"Modern Design Solutions",
    txt2:"Modern Website Solutions"
  }
 

  return (
    <>
     <Cards  subject={subjects.sub1}/>
     <Cards  subject={subjects.sub2}/>
     <Cards  subject={subjects.sub3}/>
     <User   cardtxt={cardInfo.txt1} btntext={buttons.btn1Txt} />
     <User   cardtxt={cardInfo.txt2} btntext={buttons.btn2Txt} />
    </>
  )
}

export default App
