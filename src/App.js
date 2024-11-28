import logo from './logo.svg';
import c from './App.module.css';

const App = () => {
  return (
    <div className={c.home}>
      <div className={c.text} >Хор Ржевской Покровской Старообрядческой общины</div>
      <div className={c.div} >
      <div className={c.buttons} >
      <a href="/" className={c.a} > <img className={c.img} src='https://cdn.icon-icons.com/icons2/2429/PNG/512/telegram_logo_icon_147228.png' />Телеграм </a>
      <a href="/" className={c.a}> <img className={c.img} src='https://img.icons8.com/?size=80&id=FHhIGGevoHnP&format=png' />Яндекс Музыка</a>
      <a href="/" className={c.a}> <img className={c.img} src='https://cdn.icon-icons.com/icons2/836/PNG/512/Youtube_icon-icons.com_66802.png' />YouTube</a>
      <a href="/" className={c.a}> <img className={c.img} src='https://www.ph4.org/_RU/DL/LOGO_ICON/r/rutube.gif' />Rutube</a>
      </div>
      </div>
    </div>
  );
}

export default App;
