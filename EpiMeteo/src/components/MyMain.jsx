import { Col, Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import ThreeCol from "./ThreeCol";
import { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import PopularCities from "./PopularCities";

const MyMain = (props) => {

    const [searchedCity, setSearchedCity] = useState('Palermo')

    return (
        <Col
            className="flex-grow-1 m-0 p-5"
        >
            <Container fluid className="m-0 p-0">
                <ThreeCol
                    left={<SearchBar onSubmit={(searchVal) => setSearchedCity(searchVal)} />}
                    center=""
                    right=""
                />
                <ThreeCol
                    left={<CurrentWeather city={searchedCity}/>}
                    center={""}
                    right={<PopularCities onCityClick={(city) => setSearchedCity(city) } />}
                />
            </Container>

        </Col>
    );
}

export default MyMain;