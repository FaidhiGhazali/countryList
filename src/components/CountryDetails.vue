<template>
  <v-container>
    <v-row>
      <v-btn :to="`/`" class="ma-10 ml-2">Back</v-btn>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6" v-if="country.flag">
        <v-card class="d-inline-flex">
          <v-img max-height="550" max-width="450" :src="country.flag"></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" lg="6">
        <v-input class="text-lg-h5"> {{ country.name }} </v-input>
        <v-input label="Native Name:"> {{ country.nativeName }} </v-input>
        <v-input label="Population:"> {{ country.population }} </v-input>
        <v-input label="Region:"> {{ country.region }} </v-input>
        <v-input label="Sub-Region:"> {{ country.subregion }} </v-input>
        <v-input
          label="Top Level Domain:"
          v-for="i in country.topLevelDomain"
          :key="i"
        >
          {{ i }}
        </v-input>
        <v-input label="Currencies:">
          <span>{{currencies}}</span>
        </v-input>
        <v-input label="Languages:" >
          <span > {{languages}} </span> 
        </v-input>
        <v-input label="Border Countries:">
          <v-btn class="ma-2 mb-0" v-for="i in country.borders" :key="i">{{
            i
          }}</v-btn>
        </v-input>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "CountryDetails",
  data: () => ({
    country: {},
  }),

  methods: {
    getCountryDetails() {
      axios
        .get(
          `https://restcountries.eu/rest/v2/name/${this.$route.params.name}/?fullText=true`
        )
        .then((response) => {
          const [country] = response.data;
          this.country = country;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  computed: {
    languages() {
      return this.country.languages.map(item => item.name).join(', ') 
    },
     currencies() {
      return this.country.currencies.map(item => item.name).join(', ') 
    },
  },
  mounted() {
    this.getCountryDetails();
  },
};
</script>

<style></style>
