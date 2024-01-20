import React from "react";
import {Carousel,CardComponent,CardComponentForCart} from "../../components";
import file from "../../components/Carousel/CarouselData.json";


const {slides} = file;

export const HomePage = () => {
    return (
        <div><Carousel data={slides}/>
            <CardComponent  CardItem={{id: "1", head: "Кросовка Рита", price: "300р"}}/>
            {/* <CardComponentForCart Cardd={{id: "2", head: "Boots", price: "200р"}}/> */}
            </div>  
              

    );
};
