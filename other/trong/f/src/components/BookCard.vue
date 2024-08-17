<template>
    <div class="book-card">
        <div class="row">
            <div class="col-sm-3" v-for="(book, index) in props.books" :key="index">
                <RouterLink :to="{ name: 'bookdetail', params: { id: book.id } }">
                    <div class="book-container">
                        <!-- Set a fixed width and height for the images -->
                        <img :src="book.image" alt="" class="book-image">
                    </div>
                    <div class="book-info">
                        <h5 class="book-name">{{ book.name }}</h5>
                        <p class="author">Author: {{ book.author }}</p>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
    <!-- <br>
    <hr>
    <br>
    {{ props.books }} -->
</template>

<script setup>
import { ref } from 'vue';
import { object } from 'yup';
import { useRouter, useRoute } from 'vue-router';
const $router = useRouter();
const $route = useRoute();

const props = defineProps({ books: { type: Array, default: () => [] } });


const $emit = defineEmits(['update:selectedIndex']);



</script>

<style scoped>
.book-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
}

/* Style for the book container (including image) */
.book-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Define a fixed width and height for the images */
.book-image {
    width: 200px;
    height: 250px;
    padding: 5px;
}

/* Style for the book name and author */
.book-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    text-align: center;
}

.author,
.book-name {
    text-decoration: none;
    color: black;
    /* Remove underline */
}

a {
    text-decoration: none;
}
</style>
