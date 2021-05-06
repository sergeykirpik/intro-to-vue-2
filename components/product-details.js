Vue.component('product-details', {
    template: /*html*/`
        <ul class="product-details">
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
    `,
    props: {
        details: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            description: 'Some product description'
        }
    }
})