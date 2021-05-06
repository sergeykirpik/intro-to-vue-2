Vue.component('cart', {
    props: {
        cart: {
            type: Array,
            required: true,
        }
    },
    template: /*html*/`
        <div class="cart">
            <p>Cart({{ cart.length }})</p>
        </div>
    `,
})