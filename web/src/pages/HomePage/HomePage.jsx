import React from "react";
import {Carousel, Nab, Hpcb} from "../../components";
import file from "../../components/Carousel/CarouselData.json";

const {slides} = file;

export const HomePage = () => {
    return (
        <div>
            <Carousel data={slides}/>
            <Nab/>
            <Hpcb/>
        </div>
    );
};
