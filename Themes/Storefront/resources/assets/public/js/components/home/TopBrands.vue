<template>
    <section class="top-brands-wrap clearfix">
                        <div class="container">

                        <div class="section_title">
                            <h2  class="head-stripe">SHOP BY BRANDS</h2>

                    </div>
                </div>
        <div class="container">
            <div class="single_product">
                <a
                    v-for="(topBrand, index) in topBrands"
                    :key="index"
                    :href="topBrand.url"
                    class="top-brand-image"
                >
                    <img :src="topBrand.logo.path" alt="brand logo" style="padding-right: 57px">
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['topBrands'],
    };
</script>
