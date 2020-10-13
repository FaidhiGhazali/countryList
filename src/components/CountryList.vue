<template>
  <v-container>
    <v-row>
      <v-col md="3" xs="12">
        <v-text-field v-model="search" label="Search for a country" solo>
        </v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col md="3" xs="12">
        <v-select
          v-model="selectedRegion"
          :items="regionItems"
          label="Filter by region"
          solo
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="3" lg="3" xl="3" v-for="i in filterRegion" :key="i">
        <v-row>
          <v-col>
            <v-card elevation="10">
              <router-link :to="`/details/${i.name}`">
                <v-img :aspect-ratio="16 / 9" :src="i.flag"></v-img>
              </router-link>
              <v-card-text class="text-xs-h6 font-weight-black">{{
                i.name
              }}</v-card-text>
              <v-card-text>{{ i.population }}</v-card-text>
              <v-card-text>{{ i.region }}</v-card-text>
              <v-card-text>{{ i.capital }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "CountryList",

  data: () => ({
    selectedRegion: "All Countries",
    search: "",
    listCountryDetails: [],
    regionItems: [
      {
        text: "All Countries",
      },
      {
        text: "Africa",
      },
      {
        text: "Americas",
      },
      {
        text: "Asia",
      },
      {
        text: "Europe",
      },
      {
        text: "Oceania",
      },
    ],
  }),
  methods: {
    getCountryAll() {
      axios
        .get(
          `https://restcountries.eu/rest/v2/all?fields=flag;name;population;region;capital`
        )
        .then((response) => {
          this.listCountryDetails = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  computed: {
    filterRegion() {
      if (this.selectedRegion == "All Countries" && this.search == "") {
        return this.listCountryDetails;
      }
      return this.listCountryDetails.filter(
        (item) =>
          item.region === this.selectedRegion ||
          item.name.toLowerCase() === this.search
      );
    },
  },
  mounted() {
    this.getCountryAll();
  },
};
</script>
<style scoped></style>
