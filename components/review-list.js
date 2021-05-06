Vue.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true,
        }
    },
    template: /*html*/`
        <div class="review-list">
            <p v-if="!reviews.length" style="text-align: center">There are no reviews yet.</p>
            <ul>
                <review-item v-for="(review, index) in reviews" :key="index" :review="review"></review-item>
            </ul>
        </div>
    `
})