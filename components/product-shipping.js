Vue.component('product-shipping', {
    template: /*html*/`
        <p style="text-align: center">{{ shipping }}</p>
    `,
    props: ['premium'],
    computed: {
        shipping() {
            if (this.premium) {
                return 'Free'
            } else {
                return '2.99'
            }
        },
    }
})