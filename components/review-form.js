Vue.component('review-form', {
    template: /*html*/`
        <form class="review-form" @submit.prevent="onSubmit">
            <h3>Product Review</h3>
            <errors :errors="errors" />
            <p>
                <label for="name">Name:</label>
                <input id="name" v-model="name" placeholder="name">
            </p>
            <p>
                <label for="review">Review:</label>
                <textarea id="review" v-model="review"></textarea>
            </p>
            <p>
                <label for="rating">Rating:</label>
                <select id="rating" v-model.number="rating">
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
            </p>
            <p>
                <input type="submit" value="Submit">
            </p>

        </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null,
            errors: []
        }
    },
    methods: {
        onSubmit() {
            this.errors = []
            if (!this.name) this.errors.push('Name required.')
            if (!this.review) this.errors.push('Review required.')
            if (!this.rating) this.errors.push('Rating required.')
            if (this.errors.length) return

            const productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
            }
            this.$root.$emit('review-submitted', productReview)
            this.name = '',
            this.review = '',
            this.rating = ''
        }
    }
})