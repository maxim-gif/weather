import * as S from "./main.style"
import { getWeather } from "../../api";
import { useState } from "react";
import { useEffect } from "react";
import _ from 'lodash';


export const Main = () => {

 
    const [dataWeather, setDataWeather] = useState({})
    const [currentWeather, setCurrentWeather] = useState({})
    const [textInput, setTextInput] = useState('')
    const [error, setError] = useState('')
    const [city, setCity] = useState('')
    const [daysHtml, setDaysHtml] = useState([])

    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    const date = new Date();
    const hours = date.getHours();

    const getDayWeek = (originalDate ) => {
      let parts = originalDate.split('/')
      let newDate = parts[1] + '/' + parts[0] + '/' + parts[2];
      let date = new Date(newDate)
      let day = date.getDay()
      return daysOfWeek[day]
     }
    
     const handleGetWeather = async(textInput) => {
      const weather = await getWeather(textInput)
      if (weather.error) {
        console.log(weather.error);
        setError(weather.error)
      } else {
        setDataWeather(weather.data)
        setCity(weather.nameCity)
      }
  }

    useEffect(() => {
      handleGetWeather('Москва')
    }, [])

    useEffect(() => {
      setError('')
    }, [textInput])

    useEffect(() => {
      if (dataWeather && Object.keys(dataWeather).length !== 0) {
        const timePeriods = dataWeather.Days[0].Timeframes
        const res = timePeriods.filter(e => e.time/100 >= hours)
        setCurrentWeather(res[0])

        dataWeather.Days.splice(0, 1);
        dataWeather.Days.splice(-1, 1);
        
        const result = dataWeather.Days.map((day, index) => (
          <S.ItemDay key={index}>
            <span>{getDayWeek(day.date)}</span>
            <S.DayImage src={"/set2/" +day.Timeframes[4].wx_icon}></S.DayImage>
            <S.TempDay>{day.Timeframes[4].temp_c}°</S.TempDay>
            <S.DayDescription>{day.Timeframes[4].wx_desc}</S.DayDescription>
          </S.ItemDay>
        ))
        setDaysHtml(result)
      }
    
    }, [dataWeather])

 
  return (
    <S.Container>
        <S.CurrentDay>
            <S.MainInfo>
              <S.Temperature>{currentWeather.temp_c}°</S.Temperature>
              <S.Description>{currentWeather.wx_desc}</S.Description>
              <S.HumAndWind>
                <S.Humidity>
                  <span>Влажность</span>
                  <span>{currentWeather.humid_pct}%</span>  
                </S.Humidity>
                <S.Wind>
                  <span>Ветер</span>
                  <span>{currentWeather.windspd_kmh} км/ч</span>
                </S.Wind>
              </S.HumAndWind>
            </S.MainInfo>
            <S.NameCity>{_.capitalize(city)}</S.NameCity>
        </S.CurrentDay>
        <S.DopInfo>
          <S.GetCity>
            <S.Error>{error}</S.Error>
            <span>Выбрать город</span>
            <S.InputCity value={textInput} onChange={(e) => setTextInput(e.target.value.replaceAll('<', '&lt;').replaceAll('>', '&gt;'))}></S.InputCity>
            <S.ButtonCity onClick={() => {
              handleGetWeather(textInput)
              setTextInput('')
              }}>Применить</S.ButtonCity>
          </S.GetCity>
          <S.DaysContainer>
            <S.Days>
              {daysHtml}
            </S.Days>
          </S.DaysContainer>
        </S.DopInfo>

    </S.Container>
  );
};