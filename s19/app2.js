// fetch('https://restcountries.com/v3.1/name/Turkey').then((response)=>{
//     console.log(response)
//     return response.json();
// })
// .then((data)=>{
//     console.log(data[0].currencies)
// })

const getCountry = async (countryName)=>{
    const response = await fetch('https://restcountries.com/v3.1/name/Turkey');
    const data = await response.json()
    console.log(data[0].currencies)
}

getCountry("Canada")