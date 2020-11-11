     <div class="header_top" style="background-image: url({{url('themes/storefront/public/customtheme/assets/img/promo.jpg')}})">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 col-md-12">
                                <div class="shipall">
                                    FREE SHIPPING FOR ALL ORDERS ABOVE AED 50
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>


                         <div class="header_middle">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-2 col-md-3 col-sm-3 col-2">
                                <div class="logo">
                                    <a href="index.html"><img src="{{url('themes/storefront/public/customtheme/assets/img/logo/logo.png')}}" alt="" /></a>
                                </div>
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

                <!-- theme -->
           <!--      <section class="top-nav-wrap">
    <div class="container">
        <div class="top-nav">
            <div class="row justify-content-between">
                <div class="top-nav-left d-none d-lg-block">
                    <span>{{ setting('storefront_welcome_text') }}</span>
                </div>

                <div class="top-nav-right">
                    <ul class="list-inline top-nav-right-list">
                        <li>
                            <a href="{{ route('contact.create') }}">
                                <i class="las la-phone"></i>
                                {{ trans('storefront::layout.contact') }} Us
                            </a>
                        </li>

                        <li>
                            <a href="{{ route('compare.index') }}">
                                <i class="las la-random"></i>
                                {{ trans('storefront::layout.compare') }}
                            </a>
                        </li>

                        @if (is_multilingual())
                            <li>
                                <i class="las la-language"></i>
                                <select class="custom-select-option arrow-black" onchange="location = this.value">
                                    @foreach (supported_locales() as $locale => $language)
                                        <option value="{{ localized_url($locale) }}" {{ locale() === $locale ? 'selected' : '' }}>
                                            {{ $language['name'] }}
                                        </option>
                                    @endforeach
                                </select>
                            </li>
                        @endif

                        @if (is_multi_currency())
                            <li>
                                <i class="las la-money-bill"></i>
                                <select class="custom-select-option arrow-black" onchange="location = this.value">
                                    @foreach (setting('supported_currencies') as $currency)
                                        <option
                                            value="{{ route('current_currency.store', ['code' => $currency]) }}"
                                            {{ currency() === $currency ? 'selected' : '' }}
                                        >
                                            {{ $currency }}
                                        </option>
                                    @endforeach
                                </select>
                            </li>
                        @endif

                        @auth
                            <li>
                                <a href="{{ route('account.dashboard.index') }}">
                                    <i class="las la-user"></i>
                                    {{ trans('storefront::layout.account') }}
                                </a>
                            </li>
                        @else
                            <li>
                                <a href="{{ route('login') }}">
                                    <i class="las la-sign-in-alt"></i>
                                    {{ trans('storefront::layout.login') }}
                                </a>
                            </li>
                        @endauth
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section> -->

                <!-- theme ends -->