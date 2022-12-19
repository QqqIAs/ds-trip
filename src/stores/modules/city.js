import { defineStore } from "pinia";

const useCitystore = defineStore("city",{
  state: () => ({
    cities: []
  }),
  actions: {

  }
})

export default useCitystore