import { getCityAll } from "@/service";
import { defineStore, PiniaVuePlugin } from "pinia";

const useCityStore = defineStore("city",{
  state: () => ({
    allCities: {},
    currentCity: {cityName: "广州"}
  }),
  actions: {
    async fetchAllCitiesData() {
      const res = await getCityAll()
      this.allCities = res.data 
    }
  }
})


export default useCityStore