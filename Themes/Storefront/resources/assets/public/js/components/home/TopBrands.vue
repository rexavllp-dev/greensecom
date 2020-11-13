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
            <div class="col-12" style="margin-top: 0px">
                <a href="brands" class="buttonseemore" style="padding: 7px; font-size: 11px; border-radius: 20px;font-weight: 500;float: right">See More <span class="lnr lnr-arrow-right" style="color: #26953f" ></span></a>
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
