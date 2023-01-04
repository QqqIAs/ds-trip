import { getHomeCategories, getHomeHotCityAll,getHomeHouseList } from "@/service";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home",{
  state: () => ({
    hotSuggests: [],
    categories: [],
    houseList: [],
    currentPage: 1
  }),
  actions: {
    async fetchAllHotCitiesData() {
      const res = await getHomeHotCityAll()
      this.hotSuggests = res.data 
    },
    async fetchCategoriesData() {
      const res = await getHomeCategories()
      this.categories = res.data
    },
    async fetchHouseListData() {
      const res = await getHomeHouseList(this.currentPage++)
      this.houseList.push(...res.data)
    } 
  }
})


export default useHomeStore