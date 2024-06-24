import "./current-weather.css"

const CurrentWeather = (props) => {
    return (
        props.data &&
        <div className={props.darkMode ? "weather--dark" : "weather--light"}>
            <div className="top">
                <div>
                    <p className="city">{props.data.city}</p>
                    <p className="weather--description">{props.data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather--icon" src={props.darkMode ? `icon/d${props.data.weather[0].icon}.png` : `icon/${props.data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(props.data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter--row">
                        <span className={props.darkMode ? "parameter--label--dark" : "parameter--label--light"}>Details</span>
                    </div>
                    <div className="parameter--row">
                        <span className={props.darkMode ? "parameter--label--dark" : "parameter--label--light"}>Feels like⠀<i class="bi bi-thermometer-half"></i></span>
                        
                        <span className={props.darkMode ? "parameter--value--dark" : "parameter--value--light"}>{Math.round(props.data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter--row">
                        <span className={props.darkMode ? "parameter--label--dark" : "parameter--label--light"}>Wind⠀⠀⠀⠀<i class="bi bi-wind"></i></span>
                        
                        <span className={props.darkMode ? "parameter--value--dark" : "parameter--value--light"}>{props.data.wind["speed"]} m/s</span>
                    </div>
                    <div className="parameter--row">
                        <span className={props.darkMode ? "parameter--label--dark" : "parameter--label--light"}>Humidity⠀<i className="bi bi-moisture"></i></span>
                        
                        <span className={props.darkMode ? "parameter--value--dark" : "parameter--value--light"}>{props.data.main.humidity}%</span>
                    </div>
                    <div className="parameter--row">
                        <span className={props.darkMode ? "parameter--label--dark" : "parameter--label--light"}>Pressure⠀ <i class="bi bi-speedometer"></i></span>
                        
                        <span className={props.darkMode ? "parameter--value--dark" : "parameter--value--light"}>{props.data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;