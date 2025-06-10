import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Students from './Students.jsx'



function App() {
      return (
        <>

      <button></button>
      <Header></Header>
      <Food></Food>
      <student name="Tendo Calvin" age={30}> isStudent={true}</student>
      <student name="David Beckham" age={55}> isStudent={false}</student>
      <student name="Cristiano Ronaldo" age={40}> isStudent={false}</student>
      <student name="Jimmy Donaldson" age={25}> isStudent={true}</student>
      <student name="Celine Dept" age={28}> isStudent={false}</student>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Footer></Footer>
      
      </>
    );
}

export default App
