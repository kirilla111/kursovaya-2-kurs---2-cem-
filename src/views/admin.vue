<template>
  <div class="main">
    <h1 class="form__title">Administrator page</h1>
    <div class="modal" id="modal_window"></div>
    <div class="info" v-if="isAutorized">
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
          Total: {{ filtered_food_info.length }}
        </div>
      </div>

      <div class="info__grid">
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
          <div  @click="editRow(index)" class="row__cell green">
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
    </div>
    <div class="main__container" v-else>
      <p class="container__options">
        If you are not the administrator of our site, please leave this page
      </p>
      <form class="container__form">
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
  </div>
</template>

<script>
import axios from "axios";
//import router from "../router"

export default {
  name: "admin",
  data() {
    return {
      food_info: [],
      isAutorized: false,
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
      // return this.food_info.filter(function (elem) {
      //   if (filter === '') return true;
      //   else return elem.food_name.toLowerCase().indexOf(filter) > -1;
      // });
    },
  },
  mounted: function () {
    //this.getTableData();
  },
  // pass = 0;
  // update = 1;
  // insert = 2;
  // delete = 3;
  methods: {
    findIndex(id) {
      var index = 0;
      this.food_info.forEach((element) => {
        if (id === element.id) return index;
        index++;
      });

      // return this.food_info.filter(function (elem) {
      //   if (filter === '') return true;
      //   else return elem.food_name.toLowerCase().indexOf(filter) > -1;
      // });
    },
    editRow(index) {
      console.log(index);

      var id = document.getElementById(`${0}${index}`).value;
      var food_name = document.getElementById(`${1}${index}`).value;
      var description = document.getElementById(`${2}${index}`).value;
      var category = document.getElementById(`${3}${index}`).value;
      var price = document.getElementById(`${4}${index}`).value;
      var brand = document.getElementById(`${5}${index}`).value;
      var image = document.getElementById(`${6}${index}`).value;

      var item;

      console.log(id);
      var i = 0;
      this.food_info.forEach((element) => {
        if (element.id === id) {
          item = element;
          index = i;
        }
        i++;
      });

      console.log(item);
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
      this.showModal(true,'Successfully!');
    },
    cancelChanges() {
      this.getTableData();
    },
    saveChanges() {
      var response = confirm("Are You sure?");
      var params = { table: this.food_info };
      console.log({ params });
      let vm = this;
      if (response) {
        axios
          .get(
            "http://localhost/afanasyev-project-php/admin_actions.php?action=write",
            { params }
          )
          .then(function (response) {
            //console.log(response);
            console.log(response.data);
            var e = response.data.errors;
            var u = response.data.updates;
            //console.log(vm.isAutorized);
            if (e > 0) {
              vm.showModal(false, `Errors: ${e}, Updates ${u}`);
            }
            else{
              vm.showModal(true, `Errors: ${e}, Updates ${u}`);
            }
            vm.getTableData();
          });
      } else {
      }
    },
    deleteRow(index) {
      this.filtered_food_info[index].updated = "3";
      this.showModal(true,'Deleted!');
    },
    addNewRow() {
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
      //console.log(this.food_info);
      //console.log(this.food_info[this.food_info-1]);
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
        this.showModal(false,'Error!');
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
            console.log(response);
            vm.showModal(true,'Welcome!');
          } else {
            vm.showModal(false,'Error!');
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
          console.log(response);
          if (response.data.error) {
            this.errorMsg = response.data.message;
          } else {
            vm.food_info = response.data.food_info;
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
  margin-bottom: 22%;
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

.main {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 120px;
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
  position: absolute;
  text-align: center;
  top: 20px;
  right: 20px;
  background-color: black;
  padding: 20px 50px;
  color: white;
  opacity: 0;
  border-radius: 10px;
}
.show {
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
button{
  padding: 15px;
  width: 80px;
}
.main__container{
  border-top: 0px;
}
</style>