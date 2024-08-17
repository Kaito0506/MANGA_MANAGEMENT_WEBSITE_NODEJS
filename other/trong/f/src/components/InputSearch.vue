<script setup>
defineProps({
    modelValue: { type: String, default: '' },
})

const $emit = defineEmits(['submit', 'update:modelValue']);
</script>

<template>
    <div class="d-flex m-2">
        <input class="form-control me-2" type="text" placeholder="Search" :value="modelValue"
            @input="(e) => $emit('update:modelValue', e.target.value)" @keyup.enter="$emit('submit')">
        <button class="btn btn-outline-success text-light" type="button" @click="$emit('submit')">Search</button>
    </div>
</template>

