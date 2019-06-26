<template>
  <v-dialog max-width="600px" v-model="dialog">
    <v-btn slot="activator" class="black lime accent-3--text">Contact Me</v-btn>

    <v-card>
      <v-card-title class="success--text">
        <h2>Get In Touch With Mario</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            v-model="name"
            label="First/Last Name"
            prepend-icon="person"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            v-model="phone"
            label="Your Phone/Mobile"
            prepend-icon="dialer_sip"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field v-model="email" label="Your Email" prepend-icon="email" :rules="inputRules"></v-text-field>
          <v-textarea
            v-model="message"
            label="Shoot Me A Note"
            prepend-icon="message"
            :rules="inputRules"
          ></v-textarea>
          <v-menu v-model="menu" :close-on-content-click="false">
            <v-text-field
              slot="activator"
              :rules="inputRules"
              :value="formattedDate"
              clearable
              label="Best Day to Contact"
              prepend-icon="date_range"
            ></v-text-field>
            <v-date-picker v-model="due" @change="menu = false"></v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>
          <v-card-text
            class="font-weight-thin font-italic"
          >I do not sell/share your information with any third party!</v-card-text>
          <v-spacer></v-spacer>
          <v-btn flat @click="submit" class="success mx-0 mt-3" :loading="loading">Submit</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
import db from "@/fb";
export default {
  data() {
    return {
      name: "",
      content: "",
      phone: "",
      email: "",
      message: "",
      due: null,
      menu: false,
      inputRules: [
        v => !!v || "This field is required",
        v => v.length >= 3 || "Minimum length is 3 characters"
      ],
      loading: false,
      dialog: false
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          name: this.name,
          email: this.email,
          message: this.message,
          phone: this.phone,
          due: format(this.due, "Do MMM YYYY"),
          avenue: "Tekclas Designs Form submitted via the web",
          status: "ongoing"
        };
        db.collection("projects")
          .add(project)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit("projectAdded");
          })
          .then(() => {
            this.$data.name = "";
          })
          .then(() => {
            this.$data.email = "";
          })
          .then(() => {
            this.$data.phone = "";
          })
          .then(() => {
            this.$data.due = "";
          })
          .then(() => {
            this.$data.message = "";
          });
      }
    }
  },
  computed: {
    formattedDate() {
      console.log(this.due);
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    }
  }
};
</script>