import  investmentImage  from '../assets/investment-calculator-logo.png';

export default function Header(){
    return <header id="header">
        <img src={investmentImage} alt="Money bag logo" />
        <h1>Investment Calculator</h1>
    </header>
}