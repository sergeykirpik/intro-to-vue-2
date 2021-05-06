Vue.component('errors', {
    props: {
        errors: {
            type: Array,
            required: true,
        }
    },
    template: /*html*/`
    <p v-if="errors.length" class="errors">
        <b>Please correct the following error(s):</b>
        <ul style="color: red">
            <li v-for="error in errors">{{ error }}</li>
        </ul>
    </p>
`
})