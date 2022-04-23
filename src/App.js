import { useEffect, useRef, useState } from 'react';
import './App.scss';
import LinhAva from './imgs/278455875_3124406504465129_1565749706590830861_n.jpg';
import GiapAva from './imgs/55959576_1082547498607807_2346048657633050624_n.jpg';
function App() {
  const [duration, setduration] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const startDateRef = useRef();

  const timeCalculation = () => {
    const currentTime = new Date();
    const daysTemp =
      (-startDateRef.current.getTime() + currentTime.getTime()) /
      (1000 * 3600 * 24);
    const days = Math.floor(daysTemp);
    const hours = Math.floor((daysTemp - days) * 24);

    const minutes = Math.floor(((daysTemp - days) * 24 - hours) * 60);
    const seconds = Math.floor(
      (((daysTemp - days) * 24 - hours) * 60 - minutes) * 60
    );

    console.log({ days, hours, minutes, seconds });
    setduration({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    startDateRef.current = new Date('04/16/2022');

    setInterval(() => {
      timeCalculation();
    }, 1000);
  }, []);

  const toggle = () => {
    const ele = document.getElementsByClassName('left-sidebar')[0];
    ele.classList.toggle('minimize');
  };

  return (
    <div class='main-container'>
      <div class='left-sidebar'>
        <div class='inner'>
          <div class='user-profile'>
            <div class='user-background'></div>
            <div class='user-image'>
              <img src={LinhAva} alt='LinhAva' />
            </div>
            <div class='user-info'>
              <p class='user-name'>Linh Phan</p>
              <p class='user-title'>Bé Thỏ Cute</p>
              <p class='user-location'>
                <i class='icon ion-md-locate'></i> Daklak
              </p>
            </div>
          </div>
          <div class='user-profile'>
            <div class='user-background'></div>
            <div class='user-image'>
              <img src={GiapAva} alt='GiapAva' />
            </div>
            <div class='user-info'>
              <p class='user-name'>Giap Le</p>
              <p class='user-title'>Anh Bé Cà Rốt</p>
              <p class='user-location'>
                <i class='icon ion-md-locate'></i> Dong Nai
              </p>
            </div>
          </div>
          <div class='main-menu'></div>
          <div class='social-links'>
            <a href='#'>
              <i class='icon ion-logo-facebook'></i>
            </a>
            <a href='#'>
              <i class='icon ion-logo-twitter'></i>
            </a>
            <a href='#'>
              <i class='icon ion-logo-instagram'></i>
            </a>
          </div>
        </div>
        <div class='toggle-button' onClick={toggle}>
          <i class='icon ion-md-arrow-dropleft'></i>
        </div>
      </div>
      <div class='main-content'>
        <div class='modal timer-display show'>
          <div class='heading'>
            <h3>The Day We Start To Stay Together</h3>
          </div>
          <div class='countdown-timer-large'>
            <div class='animatedBackground'></div>
            <div class='info'>
              <div class='header'>
                <h2>Keep It Forever</h2>
              </div>
              <div class='countdown'>
                <div>
                  <p>{duration.days}</p>
                  <p>days</p>
                </div>
                <div>
                  <p>{duration.hours}</p>
                  <p>hours</p>
                </div>
                <div>
                  <p>{duration.minutes}</p>
                  <p>minutes</p>
                </div>
                <div>
                  <p>{duration.seconds}</p>
                  <p>seconds</p>
                </div>
              </div>
            </div>
          </div>
          <div class='countdown-timer-small'>
            <div class='backgroundImage'></div>
            <div class='countdown'>
              <div>
                <p>{duration.days}</p>
                <p>days</p>
              </div>
              <div>
                <p>{duration.hours}</p>
                <p>hours</p>
              </div>
              <div>
                <p>{duration.minutes}</p>
                <p>minutes</p>
              </div>
              <div>
                <p>{duration.seconds}</p>
                <p>seconds</p>
              </div>
            </div>
            <div class='animated-clock-face'></div>
          </div>
        </div>
      </div>
      <div class='right-sidebar'>
        <div class='btn open-timer-btn'>
          <i class='icon ion-md-timer'></i>
        </div>
      </div>
    </div>
  );
}

export default App;
