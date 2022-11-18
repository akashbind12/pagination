<template>
  <v-data-table
    :headers="headers"
    :items="allData "
    :items-per-page="5"
    :server-items-length="totalItems"
    class="elevation-1"
    @pagination="paginate"
    :footer-props="{
      itemsPerPageOptions : [5,10,15,20]
    }"
  ></v-data-table>
</template>

<script>
 import axios from "axios"
  export default {
    name : "TablePagination",
    data () {
      return {
        headers: [
          {
            text: 'city',
            align: 'start',
            sortable: false,
            value: 'city',
          },
          { text: 'country', value: 'country' },
          { text: 'landmark', value: 'landmark' },
        ],
        allData : [],
        totalItems : 100
      }
    },
    created(){
      this.getData(1,5)
    },
    methods : {
      paginate(e){
        console.log(e)
        this.getData(e.page,e.itemsPerPage)
      },

      async getData(pageNo,perPage){
        let res = await axios.get(`https://api.agprop.in/api/property/public?page=${pageNo}&per_page=${perPage}`)
        let data = res.data.data.data
        console.log(data)
        let arr = [];
        // console.log(arr)
        for(let i=0; i<data.length; i++){
           let   obj= {"city" : data[i].city,
              "country" : data[i].country,
              "landmark" : data[i].landmark,
          };
          // console.log(obj)
          arr.push(obj)
        }
        // console.log(arr)
        this.allData  = arr
        this.totalItems = res.data.data.totalItems
      }
    }

  }
</script>