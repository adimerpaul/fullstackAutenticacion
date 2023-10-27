<template>
  <q-page>
    <h6>{{ token }}</h6>
    <pre>{{ cars }}</pre>
  </q-page>
</template>

<script>

export default {
  name: 'PaginaPage2',
  data(){
    return {
      token: localStorage.getItem('token'),
      cars: []
    }
  },
  mounted(){
    this.carsGet();
  },
  methods:{
    carsGet(){
      this.$axios.get('http://localhost:8000/api/cars',
        { headers: {"Authorization" : `Bearer ${this.token}`} }
      )
      .then(res=>{
        console.log(res.data);
        this.cars = res.data
      })
    }
  }
}
</script>
