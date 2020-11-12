<div class="header_bottom sticky-header green-bg">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-10">
                <div class="main_menu menu_position">
                    @include('public.layout.navigation.primary_menu')
                </div>
            </div>
            <div class="col-lg-2">
                <div class="header_account_area hiddenmobile">
                    <div class="header-column-right d-flex">
                        <a href="{{ route('account.wishlist.index') }}" class="header-wishlist">
                            <div class="icon-wrap">
                                <i class="lar la-heart"></i>
                                <div class="count" v-text="wishlistCount"></div>
                            </div>
                        </a>
                        <div class="header-cart">
                            <div class="icon-wrap">
                                <i class="las la-cart-arrow-down"></i>
                                <div class="item_count count" v-text="cart.quantity"></div>
                            </div>
                            <span style="color: #fff" v-html="cart.subTotal.inCurrentCurrency.formatted"></span>
                        </div>
                    </div>
                </div>
                <!-- <div class="header_account_list header_wishlist d-block d-sm-none">
                    <a href="wishlist.html"><span class="lnr lnr-magnifier"></span></a>
                </div>-->
            </div>
        </div>
    </div>
</div>
</div>
<!-- start navigation theme -->
<!-- <section class="navigation-wrap">
<div class="container">
    <div class="navigation-inner">
        @include('public.layout.navigation.category_menu')
        @include('public.layout.navigation.primary_menu')
        <span class="navigation-text">
            {{ setting('storefront_navbar_text') }}
        </span>
    </div>
</div>
</section> -->
<!-- end navigation theme -->