import CityMain from "./CityMain";


const PopularCities = (props) => {

    const cities = [
        'Castrovillari',
        'Domodossola',
        'Caltanissetta',
        'Sassari',
        'Napoli',
    ]

    return (
        <div className="dark-blue-trasparent w-100 p-3 rounded-4">
            <h6>
                Popular cities
            </h6>

            {
                cities.map((city) => (
                    <CityMain city={city} onCityClick={(city) => props.onCityClick(city)} />
                ))
            }

        </div>
    );
};

export default PopularCities