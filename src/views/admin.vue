<template>
  <h1>Admin page</h1>
</template>

<script>


export default {
  name: 'admin',
  data:{
    errorMsg: '',
    successMsg: '',
    users: []
  },
  methods: {
    getTableData(){
      axious.get('http://localhost/afanasyev-project-php/process.php?action=read').
             then(function(response){
               if (response.data.error){
                 this.errorMsg = response.data.message;
               }
               else {
                 this.users = response.data.users;
               }
             })
    }
  }
}
</script>

<style>

</style>