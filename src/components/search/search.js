import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL, geoAPIOptions } from "./api"

const Search = (props) => {

    const [search, setSearch] = useState(null)

    const loadOptions = async (inputValue) => {
        const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
        geoAPIOptions
      )
      const response_1 = await response.json()
      return {
        options: response_1.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          }
        }),
      }
      };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        props.onSearchChange(searchData)
    }

    const customStyles = {
        control: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: props.darkMode ? "rgb(0, 0, 0, 0)" : "rgb(255, 255, 255)",
          
        }),
        placeholder: (defaultStyles) => ({
            ...defaultStyles,
            color: props.darkMode ? "white" : "black",
            zIndex: 1,
        }),
        input: (defaultStyles) => ({
            ...defaultStyles,
            color: props.darkMode ? "white" : "black",
        }),
        singleValue: (defaultStyles) => ({
            ...defaultStyles,
            color: props.darkMode ? "white" : "black",
            zIndex: 1,
        }),
        menu: (defaultStyles) => ({
            ...defaultStyles,
            backgroundColor: "rgb(0, 0, 0, 0)"
        }),
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            backgroundColor: props.darkMode ? (state.isFocused ? "rgb(255, 255, 255, 0.15)" : "rgb(0, 0, 0, 0)") : (state.isFocused ? "rgb(0, 0, 0, 0.15)" : "rgb(0, 0, 0, 0)"),
            color: props.darkMode ? "white" : "black",
            "&:hover":{
                backgroundColor: props.darkMode ? "rgb(255, 255, 255, 0.15)" : "rgb(0, 0, 0, 0.15)"
            },
        }),
        
      }

    return (
        <AsyncPaginate
            styles={customStyles}
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search