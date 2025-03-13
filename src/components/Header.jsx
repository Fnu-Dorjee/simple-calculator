import titleImg from '../assets/img3.png';

export default function Header(){
    return (
        <header id='header'>
            <img src={titleImg} alt='img'/>
            <h1>Investment Calculator</h1>
        </header>
    );
}