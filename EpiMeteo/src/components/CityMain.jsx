import { useEffect, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";


const CityMain = (props) => {

    const [cityWeather, setCityWeather] = useState(null)

    const getCurrentWeather = (city) => {

        fetch('https://api.openweathermap.org/data/2.5/weather?appid=4b16c95e11d22feaaaaa45d129396fb5&lang=it&units=metric&q=' + city)
            .then(response => {
                if (response.ok) {

                    return response.json()
                } else {
                    
                    throw new Error('La chiamata non è andata a buon fine')
                }
            })
            .then(searchObj => {
                setTimeout(() => {
                    setCityWeather(searchObj)
                }, 1000);
            })
            .catch(error => {
                console.error(error);
            })

    }

    useEffect(() => getCurrentWeather(props.city), [])

    return (
        <Row
            key={props.city}
            className="my-3"
            onClick={(e)=> props.onCityClick(props.city)}
        >

            {
                !cityWeather ? (
                    <Spinner variant="info" animation="grow" />
                ) : (
                    <>
                        <Col sm={2}>
                            <img
                                src={`http://openweathermap.org/img/w/${cityWeather.weather[0].icon}.png`}
                                alt="weather icon"
                                className="img-fluid w-100"
                            />
                        </Col>
                        <Col>
                            {cityWeather.name}
                        </Col>
                        <Col>
                            {cityWeather.weather[0].main}
                        </Col>
                    </>
                )
            }
        </Row>
    );
}

export default CityMain;