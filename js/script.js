require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import modal, { openModal } from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', function () {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
    //eto dlya toqo ctob kod ne slomalsa
    const today = new Date();
    const deadline = new Date(today.setDate(today.getDate() + 20));
    

    ///Inkapsulaciya

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal');
    timer('.timer', deadline);
    forms('form',modalTimerId);
    calc();
    cards();
    slider({
        container:'.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow:'.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        inner: '.offer__slider-inner'
    });


});