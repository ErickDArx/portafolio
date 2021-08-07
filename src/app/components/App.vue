<template>
  <div class="">
    <form @submit.prevent="addTech" class="grid grid-rows-1 grid-cols-1">
      <p class="font-Poppins mb-5">Seccion de imagenes | Tech</p>
      <div class="grid grid-cols-1 grid-rows-3 gap-2">
        <div class="grid grid-rows-1 grid-cols-2 items-center">
          <p>URL</p>
          <input
            class="border-2 rounded-sm p-2"
            type="text"
            name=""
            id=""
            v-model="Tech.url"
          />
        </div>
        <div class="grid grid-rows-1 grid-cols-2 items-center">
          <p>Titulo</p>
          <input
            class="border-2 rounded-sm p-2"
            type="text"
            name=""
            id=""
            v-model="Tech.titulo"
          />
        </div>
        <div class="grid grid-rows-1 grid-cols-2 items-center">
          <p>Tag</p>
          <input
            class="border-2 rounded-sm p-2"
            type="text"
            name=""
            id=""
            v-model="Tech.tag"
          />
        </div>

        <div class="grid grid-cols-2">
          <div></div>
          <button class="rounded-sm text-md bg-indigo-900 p-2 text-gray-50">
            Aceptar
          </button>
        </div>
      </div>
      <div></div>
    </form>

    <div v-for="list in lists" :key="list._id">
      <div
        class="
          mt-2
          border-2
          grid grid-cols-4 grid-rows-1
          justify-center
          items-center
        "
      >
        <img class="col-span-1" v-bind:src="list.url" alt="" />
        <p class="col-span-1">Titulo : {{ list.titulo }}</p>
        <p class="col-span-1">Tag : {{ list.tag }}</p>
        <div class="text-white col-span-1 block text-center">
          <button
            @click="deleteTech(list._id)"
            href=""
            class="bg-red-900 p-1 flex text-center"
          >
            Eliminar
          </button>
          <button
            @click="updateTech(list._id)"
            href=""
            class="bg-blue-900 p-1 flex text-center"
          >
            Actualizar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Tech: {
        url: "",
        titulo: "",
        tag: "",
      },
      lists: [],
    };
  },
  created() {
    this.getTech();
  },
  methods: {
    addTech() {
      // Solicitar y enviar datos al servidor
      // LLamar la API rest
      axios
        .post(
          "/api/details",
          {
            url: this.Tech.url,
            titulo: this.Tech.titulo,
            tag: this.Tech.tag,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .then((data) => {
          this.getTech();
        });
      this.Tech = new Tech();
    },
    getTech() {
      axios.get("/api/details").then((response) => {
        this.lists = response.data;
      });
    },
    deleteTech(id) {
      axios
        .delete("/api/details/" + id)
        .then((response) => {
          this.lists = response.data;
        })
        .then((data) => {
          this.getTech();
        });
    },
    updateTech(id) {
      axios
        .update("/api/details/" + id)
        .then((response) => {
          this.lists = response.data;
        })
        .then((data) => {
          this.getTech();
        });
    },
  },
};
</script>
