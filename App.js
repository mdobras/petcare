import pfotendoctor from './pfotendoctor-logo.svg';
import personhead from './vet_heads.jpg';
import lipoint from './icon_check_green_circle.svg';
import Zertifikat from './buchung_signets.png';
import { useState, useEffect } from 'react';
import './App.css';

const Skeleton = () => {
  return (
    <div class="Wrapper">
      <Nav></Nav>
      <Content></Content>
    </div>
  );
}

const Nav = () => {
  return (
    <div class="Nav">
      <div class="Bookmark">
        <a class="back" >Zurück zu Website</a>
      </div>
    </div>
  );
}

const Header = () => {
  return (

    <div class="CHeader">
      <a>
        <img class="Logo" src={pfotendoctor} />
      </a>

      <h1>Terminbuchung</h1>
      <img class="PHeads" src={personhead} />
      <p class="Advantages_customerTrust__29l9U">Über 3500 zufriedene Tierhalterinnen und Tierhalter vertrauen Pfotendoctor</p>
    </div>
  );
}


const ListBox = () => {
  return (
    <div class="Box">
      <ul>
        <li>
          <span class="Iconlistdot"><img src={lipoint} /></span>
          <span>Tierärzte mit <b>jahrelanger Berufserfahrung</b> lösen dein Problem Schritt für Schritt</span>
        </li>
        <li>
          <span class="Iconlistdot"><img src={lipoint} /></span>
          <span><b>9 von 10 Tierhaltern</b> würden Pfotendoctor weiterempfehlen</span>
        </li>
        <li>
          <span class="Iconlistdot"><img src={lipoint} /></span>
          <span>Für Kunden einer Tierkrankenversicherung <b>kostenlos</b></span>
        </li>
      </ul>
    </div>
  );
}
const Content = () => {
  const [timePickerList, setTimePickerList] = useState([true, false, false])
  const temp = new Date;
  console.log(temp)
  //const [Date, setDate] = useState()

  const activestyle = async (e, timepickelement) => {
    console.log(e.childnode, timepickelement)
    if (timepickelement === 1) {
      setTimePickerList([true, false, false])
    }

    if (timepickelement === 2) {
      setTimePickerList([false, true, false])
    }

    if (timepickelement === 3) {
      setTimePickerList([false, false, true])
    }
  }

  return (
    <div class="Contentbox">
      <div class="Column">
        <Header />
        <ListBox />
        <div class="ZertifikatContainer">
          <img class="Zertifikat" src={Zertifikat} />
        </div>
      </div>

      <div class="Columndivider" />
      <div class="Column">
        <div class="Bookingwrapper">
          <p class="Timelinequestion" >Wann möchten sie mit den Tierarzt sprechen? </p>
          <p class="Timelineinfo">Die Gesprächszeit beträgt 15 min</p>
          <div class="Daycontainerwrapper">
            <div class="Daycontainer">
              <div class={timePickerList[0] ? 'Timepicker Tactive' : 'Timepicker'} onClick={({ target }) => activestyle(target, 1)}>
                <span>Heute </span>
              </div>
              <div class={timePickerList[1] ? 'Timepicker Tactive' : 'Timepicker'} onClick={({ target }) => activestyle(target, 2)}>
                <span>Morgen </span>
              </div>
              <div class={timePickerList[2] ? 'Timepicker Tactive' : 'Timepicker'} onClick={({ target }) => activestyle(target, 3)}>
                <span>Übermorgen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}



const App = () => {
  return (

    <Skeleton></Skeleton>
  );
}

export default App;
