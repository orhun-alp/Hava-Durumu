const HavaDurumu =(props)=>{
    const {weather} = props;
    if(!weather) {
        return <p>Yukleniyor....</p>;
    }
    
    return (
        <div>
            <h3>{weather.name}</h3>
            <h4>{weather.weather.map((data) => data.description).join(", ")}</h4>
            <p>{weather.main.temp - 273} derece</p>
            <p>{new Date(weather.dt * 1000).toLocaleDateString()}</p>

        </div>
    )
}

export default HavaDurumu;