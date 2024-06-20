import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "./forecast.css"

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const Forecast = (props) => {
    const currentDay = new Date().getDay();
    const forecastDays = DAYS.slice(currentDay+1, DAYS.length).concat(DAYS.slice(0, currentDay+1));
    console.log(forecastDays)
    return (
    <>
        <label className={props.darkMode ? "title--dark" : "title--light"}>Daily</label>
        <Accordion allowZeroExpanded>
            {props.data.list.slice(0, 7).map((item, idx) => (
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className={props.darkMode ? "daily--item--dark" : "daily--item--white"}>
                                <img alt="weather" className="icon--small" src={props.darkMode ? `icon/d${item.weather[0].icon}.png` : `icon/${item.weather[0].icon}.png`}/>
                                <label className={props.darkMode ? "day--dark" : "day--light"}>{forecastDays[idx]}</label>
                                <label className={props.darkMode ? "description--dark" : "description--light"}>{item.weather[0].description}</label>
                                <label className={props.darkMode ? "min-max--dark" : "min-max--light"}>{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="daily--grid">
                            <div className={props.darkMode ? "grid--item--dark" : "grid--item--light"}>
                                <label>Pressure</label>
                                <label>{item.main.pressure} hPa</label>
                            </div>
                            <div className={props.darkMode ? "grid--item--dark" : "grid--item--light"}>
                                <label>Humidity</label>
                                <label>{item.main.humidity}%</label>
                            </div>
                            <div className={props.darkMode ? "grid--item--dark" : "grid--item--light"}>
                                <label>Clouds</label>
                                <label>{item.clouds.all}%</label>
                            </div>
                            <div className={props.darkMode ? "grid--item--dark" : "grid--item--light"}>
                                <label>Wind Speed</label>
                                <label>{item.wind["speed"]} m/s</label>
                            </div>
                            <div className={props.darkMode ? "grid--item--dark" : "grid--item--light"}>
                                <label>Sea level</label>
                                <label>{item.main.sea_level}m</label>
                            </div>
                            <div className={props.darkMode ? "grid--item--dark" : "grid--item--light"}>
                                <label>Feels Like</label>
                                <label>{Math.round(item.main.feels_like)}°C</label>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                
            ))}
            
        </Accordion>
    </>
    )
}

export default Forecast;