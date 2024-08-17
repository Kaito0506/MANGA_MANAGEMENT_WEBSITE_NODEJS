<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useQueryClient, useQuery, useMutation } from '@tanstack/vue-query';
import { useRouter } from 'vue-router';
import BookCard from '../components/BookCard.vue';
import makeBookService from '../services/book.service'
import Pagination from '../components/Pagination.vue';
import InputSearch from '../components/InputSearch.vue';
import BookInformation from '../components/BookInformation.vue';
import AppHeader from '../components/AppHeader.vue';


const totalPages = ref(1);
const currentPage = ref(1);
const $router = useRouter();
const books = ref([]);
const searchText = ref('');

const { isLoading, isError, data, error, refetch } = useQuery({
   queryKey: ['books', searchText, currentPage],
   queryFn: async () => {
      try {
         const res = await makeBookService.getBooks(searchText.value, currentPage.value)
         totalPages.value = res.metadata.lastPage ?? 1;
         return res
      } catch (error) {
         console.log(error);
      }
   },
});

const retrieveBooks = () => {
   refetch();
}

const queryClient = useQueryClient();

</script>

<template>
   <AppHeader />
   <InputSearch v-model="searchText" />
   <!-- show book -->
   <!-- {{ data.books }}
   {{ currentPage }} -->
   <span v-if="isLoading">Loading...</span>
   <span v-else-if="isError">{{ error.message }}</span>
   <BookCard v-else-if="data.books.length > 0" :books="data.books" />

   <!-- Navigator -->
   <div class="mt-3 d-flex justify-content-center align-items-center">
      <Pagination :totalPages="totalPages" v-model:currentPage="currentPage" />
   </div>
</template>
 
<script>
export default {
   name: 'BookCollection'
}
</script>