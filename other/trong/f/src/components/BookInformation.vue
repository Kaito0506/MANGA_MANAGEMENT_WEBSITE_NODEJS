<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 ">
                <div class="book-image text-right">
                    <img :src="selectedBook.image" alt="" class="book-image">
                </div>
            </div>

            <div class="col-md-8">
                <div class="book-info text-left"> <!-- Left-align the text -->
                    <h1 class="book-name">{{ selectedBook.name }}</h1> <!-- Increase the text size -->
                    <p class="author"><strong>Author:</strong> {{ selectedBook.author }}</p>
                    <p class="description"><strong>Abstract:</strong> {{ selectedBook.abstract }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    selectedBook: {
        type: Object,
        required: true
    }
});
</script>

<style>
.book-info {
    font-size: 25px;
}
.book-image{
    width: 300px;
    height: 500px;
}


</style>
