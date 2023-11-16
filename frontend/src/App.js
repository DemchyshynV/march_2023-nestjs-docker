import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [car, setCar] = useState(null);

  useEffect(() => {
    axios.get('/api/cars/faad02f7-1431-406f-90a7-bf36f2e803ca').then(({ data })=>setCar(data))
  }, []);

    return (
        <div>
          <h1>MySuperCar</h1>
          {car && <h1>{car.producer}</h1>}
        </div>
    );
};

export {App};