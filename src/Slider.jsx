import React, {useState, useEffect} from 'react';
import Arrow from "./Components/Arrow";
import Card from "./Components/Card";
import Loading from "./Components/Loading";

function Slider(props) {
    const [heroes, setHeroes] = useState([]);
    const [courser, setCurrent] = useState(0)
    const [arrowIcon, setArrowIcon] = useState(0)
    useEffect(() => {
        fetch('http://localhost:3001/heroes')
            .then(response => response.json())
            .then(hero => setHeroes(hero))
    }, [])

    function arrowPrev() {

        if (courser !== 0) {
            const current = courser - 1;
            setCurrent(current)
        } else {
            const current = courser + 1;

           setArrowIcon(1)
        }
    }
    function arrowNext() {
        if (heroes.length - 1 > courser) {
            const current = courser + 1
            setCurrent(current)
        } else {
            setArrowIcon(2)
        }
        //const current = courser + 1 < heroes.length ? courser + 1 : 0
        /*  const current = courser+1 > 0 ?0 :courser+1*/

    }

    return (

        <div className="slide-container">
            <div className="wrapper">
                {!heroes.length ? <Loading/> : <>
                    {courser > 0 ? <Arrow direction={"prev"}
                                          handlerArrow={arrowPrev}/> : ''}
                    <Card hero={heroes[courser]}/>
                    {heroes.length - 1 !== courser ? <Arrow direction={"next"} handlerArrow={arrowNext}/> : ''}
                </>
                }
            </div>
        </div>);
}

export default Slider;

