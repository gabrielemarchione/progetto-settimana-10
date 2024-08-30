import { Col, Row, Spinner } from "react-bootstrap";
import { showCurrentTime } from "../modules/DateTime";
import { useEffect, useState } from "react";
import { ArrowUp, Droplet, Water, Wind } from "react-bootstrap-icons";

const CurrentWeather = (props) => {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getCurrentWeather = (city) => {

        fetch('https://api.openweathermap.org/data/2.5/weather?appid=7d92ebbfe5c767a95debf50a30df7c93&lang=it&units=metric&q=' + city)
            .then(response => {
                if (response.ok) {
                    
                    return response.json()
                } else {
                   
                    throw new Error('La chiamata non è andata a buon fine')
                }
            })
            .then(searchObj => {
                setTimeout(() => {
                    setCurrentWeather(searchObj);
                    setIsLoading(false);
                }, 1000);
            })
            .catch(error => {
                console.error(error);
            })

    }

    useEffect(() => {
        setIsLoading(true);
        getCurrentWeather(props.city);
    }, [props.city])

    return (
        <>

            <div className="dark-blue-trasparent w-100 p-3 rounded-4">
                <h6 className="fw-bold p-0 m-0">
                    Current Weather in  {props.city}
                </h6>
                {showCurrentTime()}
                {
                    isLoading ? (
                        <div>
                            <Spinner variant="info" animation="grow" />
                        </div>
                    ) : (
                        <>
                            <Row className="my-3 text-center align-items-center">
                                <Col sm={6}>
                                    <img
                                        src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
                                        alt="weather icon"
                                        className="img-fluid w-100"
                                    />
                                </Col>
                                <Col sm={6}>
                                    <h3 className="m-0">
                                        {currentWeather.main.temp}<sup style={{ fontSize: "0.6em" }}>°C</sup>
                                    </h3>

                                    {currentWeather.weather[0].main}

                                </Col>
                            </Row>
                            <Row className="text-center">
                               
                                <Col sm={3} className="d-flex flex-column gap-1">
                                    <Droplet className="d-block m-auto" />

                                    {currentWeather.main.humidity}%

                                </Col>
                                <Col sm={3} className="d-flex flex-column gap-1">
                                    <Wind className="d-block m-auto" />

                                    {currentWeather.wind.speed}

                                </Col>
                                <Col sm={3} className="d-flex flex-column gap-1">
                                    <ArrowUp
                                        className="d-block m-auto"
                                        style={{ transform: `rotate(${currentWeather.wind.deg}deg)` }}
                                    />

                                    {currentWeather.wind.deg}°

                                </Col> 
                                <Col sm={3} className="d-flex flex-column gap-1">
                                    <Water className="d-block m-auto" />

                                    {currentWeather.main.grnd_level}

                                </Col>
                            </Row>
                        </>

                    )
                }
            </div>
        </>
    );
};


export default CurrentWeather;