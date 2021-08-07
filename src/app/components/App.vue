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
            v-model="tech.url"
          />
        </div>
        <div class="grid grid-rows-1 grid-cols-2 items-center">
          <p>Titulo</p>
          <input
            class="border-2 rounded-sm p-2"
            type="text"
            name=""
            id=""
            v-model="tech.titulo"
          />
        </div>
        <div class="grid grid-rows-1 grid-cols-2 items-center">
          <p>Tag</p>
          <input
            class="border-2 rounded-sm p-2"
            type="text"
            name=""
            id=""
            v-model="tech.tag"
          />
        </div>

        <div class="grid grid-cols-2">
          <div></div>
          <div v-if="edit === false">
            <button class="rounded-sm text-md bg-indigo-900 p-2 text-gray-50">
              Aceptar
            </button>
          </div>
          <div v-else>
            <button class="rounded-sm text-md bg-indigo-900 p-2 text-gray-50">
              Editar
            </button>
          </div>
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
        <div
          class="text-white col-span-1 justify-center flex flex-col text-center"
        >
          <button
            @click="deleteTech(list._id)"
            href=""
            class="bg-red-900 p-1 flex text-center"
          >
            Eliminar
          </button>
          <button
            @click="editTech(list._id)"
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
      tech: new Tech(),
      lists: [],
      edit: false,
      idTech: "",
    };
  },
  created() {
    this.getTech();
  },
  methods: {
    addTech() {
      // Solicitar y enviar datos al servidor
      // LLamar la API rest
      if (this.edit === false) {
        axios
          .post(
            "/api/details",
            {
              url: this.tech.url,
              titulo: this.tech.titulo,
              tag: this.tech.tag,
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
      } else {
        axios
          .put(
            "/api/details/" + this.idTech,
            {
              url: this.tech.url,
              titulo: this.tech.titulo,
              tag: this.tech.tag,
            },
          )
          .then((response) => {
            console.log(response.data);
          })
          .then((data) => {
            this.getTech();
          });
      }

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

    editTech(id) {
      axios
        .get("/api/details/" + id)
        .then((response) => {
          this.tech = new Tech(
            response.data.url,
            response.data.titulo,
            response.data.tag
          );
          this.idTech = response.data._id;
          this.edit = true;
        })
        .then((data) => {
          console.log(data);
        });
    },
  },
};
</script>
