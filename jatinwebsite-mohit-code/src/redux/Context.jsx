import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import servicesData from '../new.json';
import axios from "axios";

const AppContext = React.createContext();

const API = "./new.json";

const intialState = {
    title: "",
    description: "",
    imageURL:"",

    services: [],

};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intialState);

    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "NIKE",
                image: "./images/shoe.jpg",
            },
        });
    };

    const udpateAboutPage = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            payload: {
                name: "FUCK YOU BITCH",
                image: "./images/shoe.jpg",
            },
        });
    };

    //  to get the api data
    const getServices = () => {
        try {

            const data = servicesData;


            dispatch({ type: "GET_SERVICES", payload: data });
        } catch (error) {
            console.log(error);
        }
    };

    // to call the api
    useEffect(() => {
        getServices(API);
    }, []);

    return (
        <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
            {children}
        </AppContext.Provider>
    );
};

// gloabal custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useGlobalContext };