<template>
    <div :class="className" class="flex flex-col text-white m-1 md:m-2 text-xs md:block">
        <span class="font-semibold capitalize">{{ name }}:</span>
        <span class="ml-2 text-gray-300 text-sm">{{ value }}</span>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ""
        },
        value: {
            type: String,
            default: ""
        },
    },
    computed: {
        className(){
            return !['id','genero'].includes(this.name.toLowerCase()) 
                ? {} : {hidden: true};
        }
    },
}
</script>