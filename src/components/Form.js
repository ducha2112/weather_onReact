import { useState } from "react";

function Form(props) {
  const [city, setCity] = useState("");
  const getWeather = (city) => {
    props.getWeather(city.trim());
    setCity("");
  };

  return (
    <div>
      <h1>Получение погоды</h1>
      <form>
        <input
          placeholder="Введите город (англ.)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="button" onClick={() => getWeather(city)}>
          Получить
        </button>
      </form>
    </div>
  );
}

export default Form;
