<template>
<main>
  <div class="flex-container">
    <div class="flex-container__print">
      <img
        src="http://cdn.onlinewebfonts.com/svg/download_572259.png"
        width="50"
        id="printBu"
        alt="print page"
        @click="printPage()"
      />
    </div>
    <h1>Confirmation:</h1>
    <div class="flex-container__check">
      <div class="check__food-info">
        <h2>Food to deliver:</h2>
        <div class="food-info__columns item__row">
          <p>№</p>
          <p>Product</p>
          <p>Count</p>
          <!-- <p>Total</p> -->
        </div>
        <div class=".food-info__list">
          <div class="list__item" v-for="(row, index) in cart" :key="index">
            <div class="item__row">
              <p>{{ index }}</p>
              <p>{{ row.food_name }}</p>
              <p>{{ row.count }}</p>
            </div>
            <p>
              Price: {{ row.count }}X{{ row.price }} =
              {{ row.count * parseFloat(row.price) }}$
            </p>
          </div>
        </div>
        <h3 class="food-info__total">
          Total amount without discount: {{ getTotalSumm() }}$
        </h3>
      </div>
      <form v-on:submit.prevent="onSubmit" class="check__form">
        <div class="form__item">
          <label>We deliver anywhere !</label>
          <input
            type="text"
            placeholder="Address to deliver"
            v-model="address"
            required
          />
        </div>
        <div class="form__item">
          <label>Time of deliver</label>
          <input
            type="datetime-local"
            id="deliverTimeInput"
            :min="parseDate(new Date())"
            :value="parseDate(new Date())"
          />
        </div>
        <div class="show-on-print">Your Telethone number:</div>
        <div v-if="!isSignUp" class="form__item">
          <input
            id="tn_input"
            type="number"
            placeholder="Telethone Number"
            v-model="tel_num"
            min="1000000"
            max="10000000000"
            required
          />
          <!-- <button>Confirm Address</button> -->
        </div>
        <div class="form__item confirmation">
          <div class="confirmation__check">
            <label>Pay by Card</label> <input type="checkbox" checked />
          </div>
          <button @click="startTimer()" id="BuTimer" type="submit">
            Confirm
          </button>
        </div>
      </form>
    </div>
  </div>
  <div v-if="isSignUp" class="flex-container__item" id="print-text-h2">
    <h2>Your personal discount: {{ discount }}%</h2>
    <h2 class="food-info__total">
      Total amount with personal discount: {{ getSummWithDiscount() }}$
    </h2>
  </div>
  </main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      search: "",
      tel_num: "",
      address: "",
      cart: [
        {
      
        },
      ],
      isSignUp: false,
      discount: 0.0
    };
  },
  methods: {
    initCartInfo() {
      this.isSignUp = this.$store.getters.sign;
      if (this.isSignUp){
        console.log('tr');
        this.getUserDiscount();
      }
      this.cart = this.$store.getters.cart;
    },
    parseDate(date) {
      date.setHours(date.getHours() + 1); // Сегодня + 1 час
      var dd = date.getDate();
      var mm = date.getMonth() + 1; // Месяца идут с 0, так что добавляем 1.
      var yyyy = date.getFullYear();
      var minutes = date.getMinutes();
      var hour = date.getHours();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      if (hour < 10) {
        hour = "0" + hour;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      date = yyyy + "-" + mm + "-" + dd + "T" + hour + ":" + minutes;
      return date;
    },
    printPage() {
      javascript: (print());
    },
    getTotalSumm: function () {
      var total = 0;
      this.cart.forEach((element) => {
        total += element.count * parseFloat(element.price);
      });
      return round(total);
    },
    round(number){
      return +number.toFixed(2);
    },
    startTimer() {
      if (((this.tel_num != ""  && this.tel_num.length>6) || this.isSignUp) && this.address != "")
        if (this.cart.length > 0) {
                    document.getElementById("BuTimer").disabled = true;

          var date = document.getElementById("deliverTimeInput").value;
          var items = [];
          this.cart.forEach(element => {
            items.push({"id": element.id, "count": element.count});
          });
          console.log(this.$store.getters.sign);
          var params = {"items": items, "info": this.$store.getters.sign, "address": this.address, "order_date": date };
          axios
          .get(
            `http://localhost/afanasyev-project-php/insert_data.php`,{params}
          )
          .then(function (response) {
            console.log(response);
          });
      
          this.$store.commit("clear");

          var bu = document.getElementById("BuTimer");
          var date = new Date();
          date.setHours(date.getHours() + 1);
          var endDate = date;
          let timerId = setTimeout(function tick() {
            var mills = endDate - new Date();
            if (mills > 1000) {
              var mins = Math.floor(mills / (1000 * 60));
              var seconds = Math.floor((mills - mins * (1000 * 60)) / 1000);
              bu.innerHTML = `Time left ${mins}:${seconds}`;
              timerId = setTimeout(tick, 1000); // (*)
            } else {
              bu.innerHTML = "Food Delivered!";
              return;
            }
          }, 1000);
        } else {
          alert("Cart is empty!");
        }
    },
    getUserDiscount(){
      let vm = this;
      axios
        .get(
          `http://localhost/afanasyev-project-php/get_user_discount.php`
        )
        .then(function (response) {
          console.log(response.data);
          vm.discount = response.data.discount;
        });
    },
    getSummWithDiscount(){
      var discount = parseFloat(this.discount);
      var summ = this.getTotalSumm();
      return round(summ*((100-discount)/100));
    }
  },
  mounted() {
    this.initCartInfo();
  },
};
</script>

<style>
.flex-container__check {
  display: flex;
  padding: 20px;
  margin-left: 10%;
  margin-right: 10%;
  justify-content: center;
  gap: 10%;
}
.item__row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid black;
  /* gap: 10px; */
}
.check__form {
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.show-on-print{
  display:none;
}
.form__item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.form__item input {
  padding: 10px;
  width: 200px;
}
.check__form button {
  border-radius: 2px;
}
.confirmation__check {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.confirmation__check input {
  padding: 10px;
  width: auto;
}
.confirmation {
  display: flex;
  flex-direction: row;
}
.flex-container__item {
  margin-bottom: 150px;
}
.flex-container__print {
  position: absolute;
  margin-left: 20px;
  cursor: pointer;
}
.flex-container__print:hover {
  transform: scale(1.2);
  transition: transform 0.5s;
}
@media (max-width: 450px) {
  .flex-container__check {
    flex-direction: column;
    gap: 30px;
  }
  .flex-container__print {
    position: static;
    margin-left: 0px;
    margin-top: 10px;
    cursor: pointer;
  }
}
@media print {
  #printBu{
    display:none;
  }
  h1{
    font-size:2.5em;
  }
  h2{
    font-size:1.8em;
  }
  .flex-container__check{
    font-size:1em;
  }
  #mFooter{
    display:none;
  }
  #nav-links,#nav-buttons{
    display:none;
  }
  body{
        background-color: white;
        page-break-inside: avoid;
        orphans: 5;
        widows: 2;
        text-align:center;
  }
  .break-page{
    page-break-after: always;
  }
  @page{
      margin-top: 2cm;
      margin-bottom: 2cm;
      margin-left: 1cm;
      margin-right: 1cm;
  }
  .flex-container__check {
    flex-direction: column;
    gap: 50px;
  }
  input{
    border:0px;
    width:100%;
    text-align:center;
    padding:20px;
  }
 .show-on-print{
    display:block;
  }
  #BuTimer{
    display: none;
  }
  #print-text-h2 h2{
    font-size: 1.6em;
  }
}
</style>