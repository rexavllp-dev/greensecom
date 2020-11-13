<template><div class="banner_area banner_gallery2">
    <div class="container">
        <div class="container">
            <div class="section_title">
                <h2  class="head-stripe">SHOP BY BRANDS</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 col-6" v-for="(topBrand, index) in topBrands"
                :key="index">
                <div class="single_product">
                    
                    <a
                        
                        :href="topBrand.url"
                        class="top-brand-image"
                        >
                        <img :src="topBrand.logo.path" alt="brand logo" >
                    </a>
                </div>
            </div>
            
        </div>
        <div class="row">
            <div class="col-12" style="margin-top: 35px">
                <a href="brands" style="padding: 15px; font-size: 18px; border-radius: 20px;font-weight: 500;float: right">See More</a>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
props: ['topBrands'],
};
</script>
