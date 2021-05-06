Vue.component('product-tabs', {
    template: /*html*/`
        <div>
            <div>
                <span class="tab"
                        v-for="(tab, index) in tabs"
                        :key="index"
                        @click="selectTab(tab)"
                        :class="{ activeTab: selectedTab === tab }"
                        >{{ tab }}
                </span>
            </div>

            <review-list v-if="reviewsTabSelected" :reviews="reviews"/>

            <review-form v-if="formTabSelected" />

            <product-shipping v-if="shippingTabSelected" :premium="premium" />

            <product-details v-if="detailsTabSelected" :details="details" />

        </div>
    `,
    props: ['reviews', 'premium', 'details'],
    data() {
        return {
            tabs: ['Reviews', 'Make a Review', 'Shipping', 'Details'],
            selectedTab: 'Reviews',
        }
    },
    methods: {
        selectTab(tab) {
            this.selectedTab = tab
        },
    },
    computed: {
        reviewsTabSelected() {
            return this.selectedTab === this.tabs[0]
        },
        formTabSelected() {
            return this.selectedTab === this.tabs[1]
        },
        shippingTabSelected() {
            return this.selectedTab === this.tabs[2]
        },
        detailsTabSelected() {
            return this.selectedTab === this.tabs[3]
        }
    }
})