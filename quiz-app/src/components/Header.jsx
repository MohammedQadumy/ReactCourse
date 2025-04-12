import QuizLogoImg from '../assets/quiz-logo.png';

export default function Header(){
    return <header>
        <img src={QuizLogoImg} alt='Quiz Logo' />
        <h1>ReactQuiz</h1>
    </header>
}