Vue.component('review-item', {
    props: {
        review: {
            type: Object,
            required: true,
        },

    },
    template: `
        <li>
            <p>{{ review.name }}</p>
            <p>Rating: {{ review.rating }}</p>
            <p>{{ review.review }}</p>
        </li>
    `
})