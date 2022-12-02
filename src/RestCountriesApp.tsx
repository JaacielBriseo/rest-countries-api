import { useCountriesData } from "./api/useCountriesData"

export const RestCountriesApp = () => {
  const {countries} = useCountriesData()
  console.log(countries);
  return (
    <div>RestCountriesApp</div>
  )
}
