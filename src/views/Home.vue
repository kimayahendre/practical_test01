<template>
  <div id="home" class="bg-light">
    <Header />
    <div class="container mt-5 bg-white">
      <div class="row box_shadow">
        <div class="col-md-12">
          <h1 class="text-center mt-3 h1-font">
            <i class="fa fa-users mr-2" aria-hidden="true"></i> Users
          </h1>
          <!-- User Details -->
          <div class="row mt-5">
            <div
              v-for="(users, index) in all_users"
              :key="index"
              class="col-md-4 mt-2"
            >
              <div class="card" style="width: 18rem">
                <img
                  class="card-img-top"
                  src="@/assets/img.png"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">{{ users.name }}</h5>
                  <p class="card-text">Email: {{ users.email }}</p>
                  <p class="card-text">Phone: {{ users.phone }}</p>
                  <p class="card-text">Website: {{ users.website }}</p>
                  <router-link :to="'/viewuserpost/?userId='+users.id">
                    <button type="button" class="btn btn-info rounded-0">
                      View Posts
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      all_users: [],
    };
  },
  methods: {
    ...mapActions(["GetAllUsers"]),
  },
  mounted() {
    this.GetAllUsers().then((res) => {
      this.all_users = res;
    });
  },
};
</script>
<style scoped>
.h1-font {
  font-size: 24px;
}
.box_shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.card-img-top {
  height: 200px;
}
</style>
