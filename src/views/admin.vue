<template>
  <main class="main">
    <h1 class="form__title">Administrator page</h1>
    <div class="modal" id="modal_window"></div>
    <div class="info" v-if="isAutorized">
       <div class="info__dashboard_container">
        <button class="dashboard_container__button" @click="showDashboard()">Show Dashbord</button>
        <div  v-if="toShowDashboard" class="dashboard_container__diagramm">
          <!-- <line-chart :data="diagramm_info"></line-chart> -->
          <div class="diagramm__pie_container">
            <div class="pie_container__pie_chart">
              <div class="pie_chart__">Brand Revenue</div>
              <pie-chart :data="brand_revenue"></pie-chart>
            </div>
            <div class="pie_container__pie_chart">
              <div class="pie_chart__">Brand Rating</div>
              <pie-chart :data="brand_rating"></pie-chart>
            </div>
            <div class="pie_container__pie_chart">
              <div class="pie_chart__">Category Revenue</div>
              <pie-chart :data="category_revenue"></pie-chart>
            </div>
          </div>
          
          <line-chart :data="order_info"></line-chart>
        </div>
      </div>

      <div class="info__actions">
        <input
          class="actions__search"
          placeholder="Search.."
          type="text"
          v-model="filter"
        />
        <button @click="addNewRow" class="actions__button">Add</button>
        <button @click="saveChanges" class="actions__button green">Save</button>
        <button @click="cancelChanges" class="actions__button red">
          Cancel
        </button>
        <div style="padding: 10px; text-align: right">
          Total: {{ getTotal() }}
        </div>
        <button
          @click="goToCouriers()"
          id="toCourButton"
          class="actions__button"
        >
          Couriers
        </button>
      </div>

      <div class="info__grid" v-if="!toCouriers">
        <div class="grid__head">
          <p class="head__cell corner-left">Id</p>
          <p class="head__cell">Name</p>
          <p class="head__cell">Descripton</p>
          <p class="head__cell">Category</p>
          <p class="head__cell">Price</p>
          <p class="head__cell">Company</p>
          <p class="head__cell">Image URL</p>
          <p class="head__cell green">Edit</p>
          <p class="head__cell corner-right red">Remove</p>
        </div>

        <div
          class="grid__row"
          v-bind:class="{ gray: index % 2 == 0 }"
          v-for="(food, index) in filtered_food_info"
          :key="index"
        >
          <input
            disabled
            :id="0 + '' + index"
            class="row__cell"
            v-model="food.id"
          />
          <input
            :id="1 + '' + index"
            class="row__cell"
            v-model="food.food_name"
          />
          <input
            :id="2 + '' + index"
            class="row__cell"
            v-model="food.description"
          />
          <input
            :id="3 + '' + index"
            class="row__cell"
            v-model="food.category"
          />
          <input
            :id="4 + '' + index"
            class="row__cell"
            min="0.00"
            type="number"
            step="0.01"
            v-model="food.price"
          />
          <input :id="5 + '' + index" class="row__cell" v-model="food.brand" />
          <input :id="6 + '' + index" class="row__cell" v-model="food.image" />
          <div @click="editRow(index)" class="row__cell green">
            <img
              src="https://i.stack.imgur.com/F2zuF.png"
              height="30"
              alt="Edit"
            />
          </div>
          <div @click="deleteRow(index)" class="row__cell red">
            <img
              src="http://cdn.onlinewebfonts.com/svg/download_216356.png"
              height="32"
              alt="Delete"
            />
          </div>
        </div>
      </div>
      <div class="info__grid" v-else>
        <div class="grid__head">
          <p class="head__cell corner-left">Login</p>
          <p class="head__cell">Password</p>
          <p class="head__cell green">Edit</p>
          <p class="head__cell corner-right red">Remove</p>
        </div>
        <div
          class="grid__row"
          v-bind:class="{ gray: index % 2 == 0 }"
          v-for="(item, index) in courier_info"
          :key="index"
        >
          <input class="row__cell" v-model="item.login"/>
          <input class="row__cell" v-model="item.password" />
          <div @click="editRowCourier(index)" class="row__cell green">
            <img
              src="https://i.stack.imgur.com/F2zuF.png"
              height="30"
              alt="Edit"
            />
          </div>
          <div @click="deleteRowCourier(index)" class="row__cell red">
            <img
              src="http://cdn.onlinewebfonts.com/svg/download_216356.png"
              height="32"
              alt="Delete"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="main__container" v-else>
      <p class="container__options">
        If you are not the administrator of our site, please leave this page
      </p>
      <form v-on:submit.prevent="onSubmit" class="container__form">
        <div class="form__item">
          <label class="item__label"> Login: </label>
          <input
            id="admin_login"
            class="item__input"
            type="text"
            placeholder=""
            required
          />
        </div>

        <div class="form__item">
          <label class="item__label"> Password: </label>
          <input
            id="admin_password"
            class="item__input"
            type="password"
            placeholder=""
            required
          />
        </div>

        <div class="form__item row">
          <router-link to="/"
            ><button class="item__button">Back</button></router-link
          >
          <button type="submit" @click="TrySignUp" class="item__button">
            Enter
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import axios from "axios";
//import router from "../router"

export default {
  name: "admin",
  data() {
    return {
      food_info: [],
      courier_info: [
        // {
        //   login: "cour",
        //   password: "pwd",
        // },
      ],
      brand_revenue: [],
      order_info: [],
      brand_rating: [],
      category_revenue: [],
      isAutorized: false,
      toCouriers: false,
      toShowDashboard: false,
      filter: "",
    };
  },
  computed: {
    filtered_food_info: function () {
      var keyword = this.filter.toLowerCase();
      return this.food_info.filter(
        (x) =>
          (x.food_name.toLowerCase().includes(keyword) ||
            x.brand.toLowerCase().includes(keyword) ||
            //x.id.toLowerCase().includes(keyword) ||
            x.description.toLowerCase().includes(keyword) ||
            //x.price.includes(keyword) ||
            x.category.toLowerCase().includes(keyword)) &&
          x.updated != "3"
      );
    },
  },
  mounted: function () {
    //this.getTableData();
  },

  methods: {
    getTotal(){
      if (this.toCouriers) return this.courier_info.length;
      else return this.food_info.length;
    },
    editRowCourier(index) {
      this.showModal(true, "Successfully!");
    },
    deleteRowCourier(index) {
      this.courier_info.splice(index, 1);
      this.showModal(true, "Deleted!");
    },
    goToCouriers() {
      this.toCouriers = !this.toCouriers;

      if (this.toCouriers) document.getElementById("toCourButton").innerHTML = "Food";
      else document.getElementById("toCourButton").innerHTML = "Couriers";
      
    },
    findIndex(id) {
      var index = 0;
      this.food_info.forEach((element) => {
        if (id === element.id) return index;
        index++;
      });
    },
    editRow(index) {
      //console.log(index);
      
      var id = document.getElementById(`${0}${index}`).value;
      var food_name = document.getElementById(`${1}${index}`).value;
      var description = document.getElementById(`${2}${index}`).value;
      var category = document.getElementById(`${3}${index}`).value;
      var price = document.getElementById(`${4}${index}`).value;
      var brand = document.getElementById(`${5}${index}`).value;
      var image = document.getElementById(`${6}${index}`).value;

      var item;

      //console.log(id);
      var i = 0;
      this.food_info.forEach((element) => {
        if (element.id === id) {
          item = element;
          index = i;
        }
        i++;
      });

      //console.log(item);
      // var filtered_food = this.filtered_food_info;

      if (item.updated === "0") item.updated = "1";
      if (item.updated === "2") item.updated = "2";

      item.food_name = food_name;
      item.description = description;
      item.category = category;
      item.price = price;
      item.brand = brand;
      item.image = image;

      this.food_info[index].food_name = food_name;
      this.showModal(true, "Successfully!");
    },
    cancelChanges() {
      this.getTableData();
    },
     showDashboard(){
        let vm = this;
        axios
        .get(
          "http://localhost/afanasyev-project-php/admin_actions.php?action=diagramm_info")
        .then(function (response) {
          console.log(response.data);
          var data = response.data.brand_revenue;
          vm.brand_revenue = [];
          data.forEach(element => {
            vm.brand_revenue.push([`${element.title}`, element.revenue])
          });

          data = response.data.brand_rating;
          vm.brand_rating = [];
          data.forEach(element => {
            vm.brand_rating.push([`${element.title}`, element.rating])
          });

          data = response.data.category_revenue;
          vm.category_revenue = [];
          data.forEach(element => {
            vm.category_revenue.push([`${element.title}`, element.revenue])
          });

          data = response.data.order_info;
          vm.order_info = [];
          data.forEach(element => {
            vm.order_info.push([`${element.date}`, element.count])
          });
            // : [],
            // : [],
          

         
        });
        
        this.toShowDashboard = !this.toShowDashboard;


    },
    saveChanges() {
      if (this.toCouriers){
        var response = confirm("Are You sure?");
        var params = { table: this.courier_info };
        let vm = this;
        if (response) {
          axios
            .get(
              "http://localhost/afanasyev-project-php/admin_actions_courier.php?action=write",
              { params }
            )
            .then(function (response) {
              var e = response.data.errors;
              var u = response.data.updates;
              if (e > 0) {
                vm.showModal(false, `Errors: ${e}, Updates ${u}`);
              } else {
                vm.showModal(true, `Errors: ${e}, Updates ${u}`);
              }
              vm.getTableData();
            });
        }
      }
      else{
        var response = confirm("Are You sure?");
        var params = { table: this.food_info };
        //console.log({ params });
        let vm = this;
        if (response) {
          axios
            .get(
              "http://localhost/afanasyev-project-php/admin_actions.php?action=write",
              { params }
            )
            .then(function (response) {
              //console.log(response);
              //console.log(response.data);
              var e = response.data.errors;
              var u = response.data.updates;
              //console.log(vm.isAutorized);
              if (e > 0) {
                vm.showModal(false, `Errors: ${e}, Updates ${u}`);
              } else {
                vm.showModal(true, `Errors: ${e}, Updates ${u}`);
              }
              vm.getTableData();
            });
        } else {
        }
      }
    },
    deleteRow(index) {
      this.filtered_food_info[index].updated = "3";
      this.showModal(true, "Deleted!");
    },
    addNewRow() {
      if (this.toCouriers){
        this.courier_info.push({login: '', password: ''})
      }else{
        this.food_info[this.food_info.length] = {
          id: `${parseInt(this.food_info[this.food_info.length - 1].id) + 1}`,
          food_name: "",
          description: "",
          category: "",
          price: "",
          brand: "",
          image: "",
          updated: "2",
        };
      }
    },
    showModal(type, message) {
      var modal = document.getElementById("modal_window");

      modal.innerHTML = message;

      if (type) {
        modal.style.backgroundColor = "#00cc99";
      } else {
        modal.style.backgroundColor = "#ff3300";
      }
      modal.classList.add("show");
      setTimeout(function () {
        modal.classList.remove("show");
      }, 2000);
    },
    TrySignUp: function () {
      var login = document.getElementById("admin_login").value;
      let password = document.getElementById("admin_password").value;

      if (login == "" || password == "") {
        this.showModal(false, "Error!");
        return;
      }

      let vm = this;
      let params = { login: `${login}`, password: `${password}` };
      axios
        .get("http://localhost/afanasyev-project-php/admin_signup.php", {
          params,
        })
        .then(function (response) {
          //console.log(response);
          if (response.data.session) {
            vm.isAutorized = response.data.session;
            vm.getTableData();
            //console.log(response);
            vm.showModal(true, "Welcome!");
          } else {
            vm.showModal(false, "Error!");
          }
          //console.log(vm.isAutorized);
        });
    },
    getTableData() {
      let vm = this;
      axios
        .get(
          "http://localhost/afanasyev-project-php/admin_actions.php?action=read"
        )
        .then(function (response) {
          //console.log(response);
          if (response.data.error) {
            this.errorMsg = response.data.message;
          } else {
            vm.food_info = response.data.food_info;
            vm.courier_info = response.data.courier_info;

            console.log(vm.courier_info);
          }
        });
    },
  },
};
</script>

<style scoped>
.container__form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 60px 5%;
  gap: 20px;
  border-radius: 10px;
  border: 1px solid var(--border-color-primary);
  margin-top: 30px;
}
.form__item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.main__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
form input {
  padding: 8px 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid var(--border-color-primary);
  font-weight: 400;
  outline: none;
}
h1 {
  margin-top: 3%;
  margin-bottom: 0px;
}
.row {
  margin-top: 30px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
}

.container__options {
  margin-top: 30px;
  text-align: center;
}
/* @media  (max-width: 600px) {
    h1{
      margin-top: 10%;
    }
} */
.info__grid {
  color: white;
  display: grid;
  gap: 2px;
}
@media (max-width: 770px) {
  .info__actions {
    flex-direction: column !important;
  }
}
.grid__head {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 2px;
  font-weight: 400;
}
.head__cell {
  width: 10%;
  padding: 10px 0px;
  margin: 0px;
  background-color: var(--color-primary);
}
.corner-left {
  border-radius: 20px 0px 0px;
}
.corner-right {
  border-radius: 0px 20px 0px 0px;
}
.grid__row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2px;
  margin: 0px;
}
.row__cell {
  width: 10%;
  padding: 10px 0px;
  margin: 0px;
  margin-top: 0px;
  border: 0px;
  background-color: var(--color-primary);
  text-align: center;
  font-size: 17px;
}
.row__cell input:hover {
  background-color: var(#ff7e53);
}
.info__grid input {
  outline: none;
  border: 0px;
  font-weight: 400;
  color: inherit;
}
.green {
  background-color: #00cc99;
}
.red {
  background-color: #ff3300;
}

.actions__search {
  height: 30px;
  padding-left: 10px;
}
.info__actions {
  display: flex;
  padding: 15px 100px;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
  align-items: flex-start;
}
.modal {
  display: block;
  position: fixed;
  text-align: center;
  top: 20px;
  right: 20px;
  background-color: black;
  padding: 20px 50px;
  color: white;
  opacity: 0;
  border-radius: 10px;
  visibility: hidden;
}
.show {
  visibility: visible;
  animation: showModal 2s 1;
  animation-fill-mode: forwards;
}
@keyframes showModal {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.gray .row__cell {
  background-color: var(--hover-color);
}
.gray .green {
  background-color: #00cc99;
}
.gray .red {
  background-color: #ff3300;
}
.row__cell:hover {
  background-color: var(--hover-color);
}
.gray .row__cell:hover {
  background-color: var(--color-primary);
}
button {
  padding: 15px;
  /* width: 80px; */
}
.main__container {
  border-top: 0px;
}
.main {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 22%;
}
.grid__head p {
  color: white;
}
</style>