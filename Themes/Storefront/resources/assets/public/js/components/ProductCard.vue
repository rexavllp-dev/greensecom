<template>
 
    <div class="single_product">

        <div class="product_thumb">
            <a class="primary_img" :href="productUrl"><img :src="baseImage" :class="{ 'image-placeholder': ! hasBaseImage }" alt="product image"></a>
            <a class="secondary_img" :href="productUrl"><img :src="baseImage" :class="{ 'image-placeholder': ! hasBaseImage }" alt="product image"></a>
            <div class="label_product">
                
             
            </div>
            <div class="action_links">
                <ul>
                    <li class="add_to_cart"><a  v-if="hasNoOption || product.is_out_of_stock"
                        class="btn btn-primary btn-add-to-cart"
                        :class="{ 'btn-loading': addingToCart }"
                        :disabled="product.is_out_of_stock"
                        @click="addToCart" title="" data-original-title="Add to cart"><span class="lnr lnr-cart"></span></a></li>
                        <li class="quick_button"><a href="#" data-toggle="modal" data-target="#modal_box" title="" data-original-title="quick view"> <span class="lnr lnr-magnifier"></span></a></li>
                        <li class="wishlist"><a  title="" data-original-title="Add to Wishlist"  class="btn btn-wishlist"
                            :class="{ 'added': inWishlist }"
                            :title="$trans('storefront::product_card.wishlist')"
                            @click="syncWishlist"><span class="lnr lnr-heart"></span></a></li>  
                            
                        </ul>
                    </div>
                </div>
                <div class="product_content grid_content">
                    <h4 class="product_name"><a :href="productUrl">{{ product.name }}</a></h4>
                    <p><a href="#"></a></p>
                    <div class="price_box"> 
                        <span class="current_price" v-html="product.formatted_price"></span>
                    </div>
                </div>
                
            </div>

            

        </template>

        <script>
        import ProductRating from './ProductRating.vue';
        import ProductCardMixin from '../mixins/ProductCardMixin';

        export default {
            components: { ProductRating },

            mixins: [
            ProductCardMixin,
            ],

            props: ['product'],
        };
        </script>
