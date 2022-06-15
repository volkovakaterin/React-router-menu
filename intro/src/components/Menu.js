import HomePage from './HomePage';
import DriftPage from './DriftPage';
import ForzaPage from './ForzaPage';
import TimeAttackPage from './TimeAttackPage';
import {Routes, Route, NavLink} from'react-router-dom';
import React, { useState } from 'react';
import { nanoid } from 'nanoid'

export default function Menu() {
    const [select, setSelect] = useState('/')
    const links = [
        {link: '/', name: 'Главная', key: nanoid()},
        {link: '/drift', name: 'Дрифт-такси', key: nanoid()},
        {link: '/timeattack', name: 'Time Attac', key: nanoid()},
        {link: '/forza', name: 'Forza Karting', key: nanoid()},

    ]
    const activeLink = (link, e) => {
        setSelect(link);
}
    const menu = links.map((element) =>
    <NavLink key={element.key} className={(element.link === select) ? 'menu__item menu__item-active' : 'menu__item'} to={element.link}  onClick={(e)=>activeLink(element.link, e)}>{element.name}</NavLink>
            );

    return (
        <>
        <nav className='menu'>
        {menu}
        </nav>
        <Routes>     
              <Route path="/" element={<HomePage/>} />
              <Route path="/drift" element={<DriftPage/>} />
              <Route path="/timeattack" element={<TimeAttackPage/>} />
              <Route path="/forza" element={<ForzaPage/>} />
            
        </Routes>
        </>
    )
  }