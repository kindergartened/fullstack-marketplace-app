import React from "react";
import {Carousel} from "../../components";
import file from "../../components/Carousel/CarouselData.json";

const {slides} = file;

export const HomePage = () => {
    return (
        <Carousel data={slides}/>
    );
};
