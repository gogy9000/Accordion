import React from "react";
import  './AnalogClock.css'

export const AnalogClock = () => {
    let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    if (hours > 12) {
        hours -= 12;
    }

    let secondsStartDegree = 360 / 60 * seconds,
        minutesStartDegree = 360 / 60 * minutes + 6 / 60 * seconds,
        hoursStartDegree = 360 / 12 * hours + 30 / 60 * minutes + 0.5 / 60 * seconds;

    let style = document.createElement('style');

    style.type = 'text/css';
    style.innerHTML = '\
        @keyframes clock-hand-rotate--hour {\
            from {transform: rotate(' + hoursStartDegree + 'deg)}\
            to {transform: rotate(' + (hoursStartDegree + 360) + 'deg)}\
        }\
        @keyframes clock-hand-rotate--minute {\
            from {transform: rotate(' + minutesStartDegree + 'deg)}\
            to {transform: rotate(' + (minutesStartDegree + 360) + 'deg)}\
        }\
        @keyframes clock-hand-rotate--second {\
            from {transform: rotate(' + secondsStartDegree + 'deg)}\
            to {transform: rotate(' + (secondsStartDegree + 360) + 'deg)}\
        }\
        .clock__hand--hour {\
            animation: clock-hand-rotate--hour 43200s linear infinite;\
        }\
        .clock__hand--minute {\
            animation: clock-hand-rotate--minute 3600s linear infinite;\
        }\
        .clock__hand--second {\
            animation: clock-hand-rotate--second 60s linear infinite;\
        }';

    document.getElementsByTagName('head')[0].appendChild(style);
    return (
        <time className="clock">
            <span className="clock__stroke clock__stroke--small clock__stroke--1"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--2"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--3"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--4"></span>
            <span className="clock__stroke clock__stroke--5"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--6"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--7"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--8"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--9"></span>
            <span className="clock__stroke clock__stroke--10"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--11"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--12"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--13"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--14"></span>
            <span className="clock__stroke clock__stroke--15"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--16"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--17"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--18"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--19"></span>
            <span className="clock__stroke clock__stroke--20"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--21"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--22"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--23"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--24"></span>
            <span className="clock__stroke clock__stroke--25"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--26"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--27"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--28"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--29"></span>
            <span className="clock__stroke clock__stroke--30"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--31"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--32"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--33"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--34"></span>
            <span className="clock__stroke clock__stroke--35"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--36"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--37"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--38"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--39"></span>
            <span className="clock__stroke clock__stroke--40"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--41"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--42"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--43"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--44"></span>
            <span className="clock__stroke clock__stroke--45"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--46"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--47"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--48"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--49"></span>
            <span className="clock__stroke clock__stroke--50"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--51"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--52"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--53"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--54"></span>
            <span className="clock__stroke clock__stroke--55"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--56"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--57"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--58"></span>
            <span className="clock__stroke clock__stroke--small clock__stroke--59"></span>
            <span className="clock__stroke clock__stroke--60"></span>
            <span className="clock__hand clock__hand--hour"></span>
            <span className="clock__hand clock__hand--minute"></span>
            <span className="clock__hand clock__hand--second"></span>
        </time>
    )
}