const fetchData = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=13.0827&lon=80.2707&appid=13de3b24668b9df052fdb52aac018983&units=metric`
  );
  const data = await response.json();
  return data;
};

export default fetchData;
