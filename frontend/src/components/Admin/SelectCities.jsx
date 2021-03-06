import React, { useState, useEffect } from 'react'
import Select from 'react-select';
import axios from 'axios';

const customStyles = {
    container: (provided) => ({
        width: '100%',
        fontSize: '1rem',
        border: 'none',
        margin: '1rem 0',
        height: '3rem',
        borderRadius: '5px',
        boxShadow: '0px 0px 4px 0px #00000074',
        "@media (min-width: 768px)": {
            ...provided["@media (min-width: 768px)"],
            marginRight: '.3rem'
        }
    }),
    control: (provided, state) => ({
        ...provided,
        outline: state.isFocused ? 'none' : 'none',
        cursor: 'pointer',
        border: 'none',
        height: '3rem',
        borderRadius: '5px',
    }),
    menu: () => ({
        backgroundColor: 'var(--primary-color)',
        borderRadius: '0px 0px 5px 5px',
    }),
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px solid var(--secondary-color)',
        height: '60px',
        display: 'flex',
        backgroundColor:
            state.isSelected
                ? 'white'
                : state.isFocused
                    ? 'var(--color-1)'
                    : undefined,
        borderRadius: state.isSelected ? 'inherited' : 'none',
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: "#7cc3be",
        }
    }),
    menuList: () => ({
        display: 'flex',
        flexDirection: 'column',
        height: 'fit-content',
        maxHeight: '215px',
        overflowY: 'scroll',
        scrollbar: 'smooth',
        "::-webkit-scrollbar": {
            display: 'none'
        }
    }),
    singleValue: (provided, state) => ({
        ...provided,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'
    }),
    menuPortal: base => ({
        ...base,
        position: 'absolute',
        zIndex: 1
    })
}

const SelectCities = ({ selectedCity, setSelectedCity, urlBase, setCityId }) => {

    const [cities, setCities] = useState([])

    const handleChange = (e) => {
        if (e != null) {
            setSelectedCity(e.value)
            let id = ["Rosario", "Villa Carlos Paz", "San Carlos de Bariloche", "Ushuaia"].indexOf(e.value);
            setCityId(id);
        }
    };

    useEffect(() => {
        setSelectedCity(selectedCity);
        // eslint-disable-next-line
    }, [selectedCity]);

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const resp = await axios.get(`${urlBase}/cities`);
                setCities(resp.data);
            } catch (error) {
                console.warn(error)
            };
        };
        fetchCities();
        // eslint-disable-next-line
    }, [])

    const options = cities.map((elem, id) => {
        return {
            value: elem.name,
            label: (
                <div className={`cities-list ${id === cities.length - 1 && 'no-border'}`} >
                    <div className='list-item'>
                        <h4>{`${elem.name}`}</h4>
                        <p>{elem.country}</p>
                    </div>
                </div>
            )
        };
    });

    return (
        <div className="select-container">
            <Select
                className='select'
                placeholder={
                    <div className='placeholder'>
                        Ciudad
                    </div >
                }
                styles={customStyles}
                options={options}
                onChange={handleChange}
                components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                }}
                menuPosition="fixed"
            />
        </div>
    )
}

export default SelectCities;