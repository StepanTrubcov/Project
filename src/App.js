import logo from './logo.svg';
import c from './App.module.css';
import music from './img/music.svg'
import telegram from './img/telegram.svg'
import YouTube from './img/YouTube.svg'

const App = () => {
  return (
    <div className={c.home}>
      <div className={c.text} >Хор Ржевской Покровской Старообрядческой общины</div>
      <div className={c.div} >
      <div className={c.buttons} >
      <a href="/" className={c.a} > <img className={c.img} src={telegram} /> <div className={c.name} >Телеграм</div></a>
      <a href="/" className={c.a}> <img className={c.img} src={music} /><div className={c.name} >Яндекс Музыка</div></a>
      <a href="/" className={c.a}> <img className={c.img} src={YouTube} /><div className={c.name} >YouTube</div></a>
      <a href="/" className={c.a}> <img className={c.img} src='https://raw.githubusercontent.com/3dproger/AxelChat/23324c264e0391cdc6fb46c74691435315fdf572/misc/images/rutube-icon.svg' /><div className={c.name} >Rutube</div></a>
      </div>
      </div>
    </div>
  );
}

export default App;
