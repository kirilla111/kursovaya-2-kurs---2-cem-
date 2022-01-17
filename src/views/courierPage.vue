<template>
  <main v-if="isCourierSigned">
    <!-- <main> -->
    <div class="main__dashboard_container">
        <button class="dashboard_container__button" @click="showDashboard()">Show Dashbord</button>
        <h3 v-if="toShowDashboard" class="dashboard_container__title">Your Activity</h3>
        <div  v-if="toShowDashboard" class="dashboard_container__diagramm">
          <line-chart :data="diagramm_info"></line-chart>
        </div>
        
        
    </div>

    <div v-if="more_info.length > 0" class="main__more_info_container">
      
     

      <h1>More Info!</h1>

      <div class="more_info_container__title">
        {{ more_info[0].address }}, {{ more_info[0].date }}
      </div>
      <div class="info_container__item_bold">
        <p>Quantity</p>
        <p>Food</p>
        <p>Brand</p>
      </div>
      <div
        class="info_container__item"
        v-for="(item, index) in more_info[0].info"
        :key="index"
      >
        <p>{{ item.food_quantity }}</p>
        <p>{{ item.food_name }}</p>
        <p>{{ item.title }}</p>
      </div>
      <button class="info_container__back_button" @click="clearInfoArray()">
        Back
      </button>
    </div>
    <h1>Your Deliveries!</h1>
    <h3 v-if="deliveries.length === 0">Empty ..</h3>
    <div class="main__deliveries_container">
      <div
        v-for="(item, index) in deliveries"
        :key="index"
        class="deliveries_container__item"
      >
        <div class="item__info">
          <div class="info__text">
            <h3>Address:</h3>
            <p>{{ item.address }}</p>
          </div>
          <div class="info__text">
            <h3>Ordered at:</h3>
            <p>{{ item.order_date }}</p>
          </div>
        </div>
        <div class="item__buttons_container">
          <button @click="GetMoreInfo(item, index)">More Info</button>
          <button
            class="buttons_container__button_green"
            @click="confirm(item, index)"
          >
            Confirm
          </button>
          <button
            class="buttons_container__button_red"
            @click="toOrders(item, index)"
          >
            Drop Delivery
          </button>
        </div>
      </div>
    </div>
    <h1>Choose item to deliver!</h1>
    <div class="main__order_container">
      <div v-for="(item, index) in orders" :key="index" class="container__item">
        <div class="item__info">
          <div class="info__text">
            <h3>Address:</h3>
            <p>{{ item.address }}</p>
          </div>
          <div class="info__text">
            <h3>Ordered at:</h3>
            <p>{{ item.order_date }}</p>
          </div>
        </div>
        <button @click="toDeliveries(item, index)">Choose!</button>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      toShowDashboard: false,
      diagramm_info: [],
      diagramm_info_copy: [],
      more_info: [],
      deliveries: [],
      orders: [],
    };
  },
  methods: {
    toDeliveries(item, index) {
      this.deliveries.push(item);
      this.orders.splice(index, 1);

      var params = {
        date: item.order_date,
        address: item.address,
      };
      axios
        .get(
          "http://localhost/afanasyev-project-php/courier_actions.php?action=confirm",
          {
            params,
          }
        )
        .then(function (response) {
          console.log(response.data);
        });
    },
    clearInfoArray() {
      this.more_info = [];
    },
    toOrders(item, index) {
      this.orders.push(item);
      this.deliveries.splice(index, 1);

      var params = {
        date: item.order_date,
        address: item.address,
      };
      axios
        .get(
          "http://localhost/afanasyev-project-php/courier_actions.php?action=drop",
          {
            params,
          }
        )
        .then(function (response) {
          console.log(response.data);
        });
    },
    confirm(item, index) {
      this.deliveries.splice(index, 1);
      var params = {
        date: item.order_date,
        address: item.address,
      };
      axios
        .get(
          "http://localhost/afanasyev-project-php/courier_actions.php?action=delivered",
          {
            params,
          }
        )
        .then(function (response) {
          console.log(response.data);
        });
    },
    showDashboard(){
        let vm = this;
        axios
        .get(
          "http://localhost/afanasyev-project-php/courier_actions.php?action=diagramm_info")
        .then(function (response) {
          console.log(response.data);
          var data = response.data.diagramm_info;
          vm.diagramm_info = response.data.diagramm_info;
          
          
          vm.diagramm_info = [];
          data.forEach(element => {
            vm.diagramm_info.push([`${element.date}`, element.count])
          });
        });
        
        this.toShowDashboard = !this.toShowDashboard;


    },
    GetMoreInfo(item, index) {
      let vm = this;
      var params = {
        date: item.order_date,
        address: item.address,
      };

      axios
        .get(
          "http://localhost/afanasyev-project-php/courier_actions.php?action=more_info",
          {
            params,
          }
        )
        .then(function (response) {
          vm.more_info = [];
          vm.more_info.push({
            date: item.order_date,
            address: item.address,
            info: response.data.more_info,
          });
        });
    },
  },
  computed: {
    isCourierSigned: function () {
      console.log(this.$store.getters.courierSign);
      if (this.$store.getters.courierSign) {
        let vm = this;

        axios
          .get("http://localhost/afanasyev-project-php/courier_info.php")
          .then(function (response) {
            vm.orders = response.data.orders;
            vm.deliveries = response.data.deliveries;
            console.log(response.data);
          });
      }
      return this.$store.getters.courierSign;
      //return true;
    },
  },
};
</script>

<style scoped>
.main__order_container,
.main__deliveries_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 10%;
  gap: 10px;
}

.info_container__item,
.info_container__item_bold {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 0 10%;
  border-bottom: 1px solid white;
  background-color: var(--hover-color);
  color: white;
  font-weight: bold;
}
.info_container__item_bold {
  background-color: var(--color-primary);
  align-items: center;
  font-size: 20px;
  margin-top: 15px;
}
button {
  height: 50px;
  margin-right: 20px;
}
.item__info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-right: 20px;
  padding-left: 10px;
}
.item__buttons_container {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.container__item,
.deliveries_container__item {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--hover-color);
}
.container__item:hover,
.deliveries_container__item:hover {
  background-color: var(--hover-color);
  color: var(--main-bg);
}

.buttons_container__button_red {
  background-color: red;
}
.buttons_container__button_green {
  background-color: green;
}
.info__text {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: left;
  align-items: center;
}
@media (max-width: 760px) {
  .container__item,
  .deliveries_container__item {
    flex-direction: column;
    padding-bottom: 10px;
  }
  .info__text {
    justify-content: center;
  }
}
@media (max-width: 350px) {
  .item__buttons_container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
@media (max-width: 500px) {
  .info_container__item,
  .info_container__item_bold {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.more_info_container__title {
  font-weight: bold;
  /* width: fit-content; */
  text-align: left;
  margin-left: 10%;
  margin-right: 10%;
  font-size: 22px;
}
.info_container__back_button {
  width: 30%;
  margin-top: 20px;
  font-size: 20px;
}
</style>