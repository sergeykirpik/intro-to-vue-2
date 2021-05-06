Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        },
    },
    template: /*html*/`
        <div class="product">
            <div class="product-image">
                <img :src="image">
            </div>

            <div class="product-info">

                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else
                :class="{ outOfStock: !inStock }"
                >Out of stock
                </p>

                <div class="color-box"
                    v-for="(variant, index) in variants"
                    :key="variant.variantId"
                    :style="{ backgroundColor: variant.variantColor }"
                    @mouseover="updateProduct(index)"
                    >
                </div>

                <button @click="addToCart"
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock }"
                    >Add to cart
                </button>

            </div>

            <product-tabs :reviews="reviews" :premium="premium" :details="details" />

        </div>
    `,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            variants: [
                {
                    variantId: 2234,
                    variantColor: 'green',
                    variantImage: './assets/vmSocks-green.jpg',
                    variantQuantity: 10,
                },
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantImage: './assets/vmSocks-blue.jpg',
                    variantQuantity: 0,
                },
            ],
            selectedVariant: 0,
            reviews: [],
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.sel.variantId)
        },
        updateProduct(variantIndex) {
            this.selectedVariant = variantIndex
        },
        addReview(review) {
            this.reviews.push(review)
        }
    },
    mounted() {
        this.$root.$on('review-submitted', review => {
            this.addReview(review)
        })
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.sel.variantImage
        },
        inStock() {
            return this.sel.variantQuantity > 0
        },

        sel() {
            return this.variants[this.selectedVariant]
        }
    }
})
