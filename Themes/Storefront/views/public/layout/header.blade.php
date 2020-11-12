<div class="header_middle">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-2 col-md-3 col-sm-3 col-2">
                                   <a href="{{ route('home') }}" class="header-logo">
                                        @if (is_null($logo))
                                        <h3>{{ setting('store_name') }}</h3>
                                        @else
                                        <img src="{{ $logo }}" alt="logo">
                                        @endif
                                    </a>
            </div>
            <div class="col-lg-8 col-md-6 col-sm-7 col-10">
                <div class="header_right_info">
                    <div class="search_container mobail_s_none">
                        <form action="#">
                            <div class="hover_category"></div>
                            <div class="search_box">
                                <input placeholder="Search product..." type="text" />
                                <button type="submit"><span class="lnr lnr-magnifier"></span></button>
                            </div>
                        </form>
                    </div>
                    <div class="header_account_area hiddendesktop">
                        <div class="header_account_list header_wishlist">
                            <a href="wishlist.html"><span class="lnr lnr-heart text-red"></span> <span class="item_count">3</span> </a>
                        </div>
                        <div class="header_account_list mini_cart_wrapper">
                            <a href="javascript:void(0)"><span class="lnr lnr-cart"></span><span class="item_count">2</span></a>
                            <div class="mini_cart">
                                <div class="cart_gallery">
                                    <div class="cart_close">
                                        <div class="cart_text">
                                            <h3>cart</h3>
                                        </div>
                                        <div class="mini_cart_close">
                                            <a href="javascript:void(0)"><i class="icon-x"></i></a>
                                        </div>
                                    </div>
                                    <div class="cart_item">
                                        <div class="cart_img">
                                            <a href="#"><img src="{{url('themes/storefront/public/customtheme/assets/img/s-product/product.jpg')}}" alt=""></a>
                                        </div>
                                        <div class="cart_info">
                                            <a href="#">Primis In Faucibus</a>
                                            <p>1 x <span> AED 65.00 </span></p>
                                        </div>
                                        <div class="cart_remove">
                                            <a href="#"><i class="icon-x"></i></a>
                                        </div>
                                    </div>
                                    <div class="cart_item">
                                        <div class="cart_img">
                                            <a href="#"><img src="{{url('themes/storefront/public/customtheme/assets/img/s-product/product2.jpg')}}" alt=""></a>
                                        </div>
                                        <div class="cart_info">
                                            <a href="#">Letraset Sheets</a>
                                            <p>1 x <span> AED 60.00 </span></p>
                                        </div>
                                        <div class="cart_remove">
                                            <a href="#"><i class="icon-x"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="mini_cart_table">
                                    <div class="cart_table_border">
                                        <div class="cart_total">
                                            <span>Sub total:</span>
                                            <span class="price">AED 125.00</span>
                                        </div>
                                        <div class="cart_total mt-10">
                                            <span>total:</span>
                                            <span class="price">AED 125.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mini_cart_footer">
                                    <div class="cart_button">
                                        <a href="cart.html"><i class="fa fa-shopping-cart"></i> View cart</a>
                                    </div>
                                    <div class="cart_button">
                                        <a href="checkout.html"><i class="fa fa-sign-in"></i> Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="header_account_list header_wishlist d-block d-sm-none">
                            <a href="wishlist.html"><span class="lnr lnr-magnifier"></span></a>
                        </div>-->
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-7 col-10">
                <div class="header_social text-right d-none d-sm-block">
                    <ul>
                        <li><a href="login.html" style="font-size: 14px;"><i class="lnr lnr-user"></i> Register</a></li>
                        <li style="margin-left: -13px;"><span>/</span></li>
                        <li><a href="login.html" style="font-size: 14px;margin-left: -16px;"><i class="lnr lnr-lock"></i> Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container-fluid hiddendesktop">
            <div class="search_container">
                <form action="#">
                    <div class="search_box">
                        <input placeholder="Search product..." type="text" />
                        <button type="submit"><span class="lnr lnr-magnifier"></span></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>













<!-- <header class="header-wrap">
    <div class="header-wrap-inner">
        <div class="container">
            <div class="row flex-nowrap justify-content-between position-relative">
                <div class="header-column-left">
                    <div class="sidebar-menu-icon-wrap">
                        <div class="sidebar-menu-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <a href="{{ route('home') }}" class="header-logo">
                        @if (is_null($logo))
                            <h3>{{ setting('store_name') }}</h3>
                        @else
                            <img src="{{ $logo }}" alt="logo">
                        @endif
                    </a>
                </div>

                <header-search
                    :categories="{{ $categories }}"
                    :most-searched-keywords="{{ $mostSearchedKeywords }}"
                    initial-query="{{ request('query') }}"
                    initial-category="{{ request('category') }}"
                >
                </header-search>

                <div class="header-column-right d-flex">
                    <a href="{{ route('account.wishlist.index') }}" class="header-wishlist">
                        <div class="icon-wrap">
                            <i class="lar la-heart"></i>
                            <div class="count" v-text="wishlistCount"></div>
                        </div>

                        <span>{{ trans('storefront::layout.favorites') }}</span>
                    </a>

                    <div class="header-cart">
                        <div class="icon-wrap">
                            <i class="las la-cart-arrow-down"></i>
                            <div class="count" v-text="cart.quantity"></div>
                        </div>

                        <span v-html="cart.subTotal.inCurrentCurrency.formatted"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
 -->