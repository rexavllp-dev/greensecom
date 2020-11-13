<template>
  <div class="banner_area banner_gallery2">
        <div class="container">
             <div class="section_title">
        <h2 class="head-stripe">BAKING ESSENTIALS</h2>
    </div>
            <div class="row">

                    <div class="col-lg-3 col-md-3 col-6" style="padding-left: 2px;padding-right: 2px"
                    v-for="(tab, index) in tabs"
                        :key="index"
                        :class="classes(tab)"
                        @click="change(tab)">
                    <div class="banner2_sidebar">
                        <div class="banner_thumb mb-1">
                            <a :href="tab.url"><img :src="tab.logo" :class="{ 'image-placeholder': ! tab.hasLogo }" alt="category logo"></a> 
                        </div>
                      
                    </div>
                </div>
               
         
               
             
            </div>
        
        </div>
         <dynamic-tab
            v-for="(category, index) in data.categories"
            :key="index"
            :label="category.name"
            :initial-logo="category.logo"
            :url="route('storefront.featured_category_products.index', { categoryNumber: index + 1 })"
        >
        </dynamic-tab>
    </div>


</template>

<script>
    import ProductCard from '../ProductCard.vue';
    import DynamicTabsMixin from '../../mixins/DynamicTabsMixin';
    import { slickPrevArrow, slickNextArrow } from '../../functions';

    export default {
        components: { ProductCard },

        mixins: [
            DynamicTabsMixin,
        ],

        props: ['data'],

        methods: {
            selector() {
                return $('.featured-category-products');
            },

            slickOptions() {
                return {
                    rows: 0,
                    dots: true,
                    arrows: false,
                    infinite: true,
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    rtl: window.GreensIntl.rtl,
                    prevArrow: slickPrevArrow(),
                    nextArrow: slickNextArrow(),
                    responsive: [
                        {
                            breakpoint: 1761,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 5,
                            },
                        },
                        {
                            breakpoint: 1301,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4,
                            },
                        },
                        {
                            breakpoint: 1051,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            },
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4,
                            },
                        },
                        {
                            breakpoint: 881,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            },
                        },
                        {
                            breakpoint: 641,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            },
                        },
                    ],
                };
            },
        },
    };
</script>
