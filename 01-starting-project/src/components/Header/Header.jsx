import reactImg from '../../assets/react-core-concepts.png'
import './Header.css'
const reactDescription = ['Fundemental','Crucial','Core'];

function getRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}

export default function Header(){

    const description = reactDescription[getRandomInt(2)]
  
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essential</h1>
        <p> {description} React concepts you will need for almsot any app you are going to build!</p>
      </header>
    );
  }