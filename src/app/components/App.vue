<template>
  <div class="">
    <form @submit.prevent="addTech" class="grid grid-rows-1 grid-cols-1">
      <p class="font-Poppins">Seccion de imagenes | Tech</p>
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
    </form>
  </div>
</template>

<script>
import axios from "axios";
class Tech {
  constructor(url, titulo, tag) {
    this.url = url;
    this.titulo = titulo;
    this.tag = tag;
  }
}

export default {
  data() {
    return {
      Tech:{
        url: '',
        titulo: '',
        tag: ''
      },
    };
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
            tag: this.Tech.tag
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        });

      // fetch("/api/details", {
      //   method: "POST",
      //   body: JSON.stringify(this.Tech),
      //   Headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //   }
      // }).then(res => res.json())
      // .then(data =>console.log(data))

      this.Tech = new Tech();
    },
  },
};
</script>
