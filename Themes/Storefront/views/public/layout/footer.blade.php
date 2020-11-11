

<div class="shipping_area">
            <div class="container">
                <div class="row">
                    <div class="col-6 col-lg-3 col-md-6">
                        <div class="single_shipping">
                            <div class="shipping_icone">
                                <img src="{{url('themes/storefront/public/customtheme/assets/img/icon/Delivery.png')}}" alt="">
                            </div>
                            <div class="shipping_content">
                                <p>FREE UAE DELIVERY ON ORDERS ABOVE AED 100</p>
                                <a href="#" style="color: #26953f;font-size: 12px;font-weight: 600;">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-6">
                        <div class="single_shipping col_2">
                            <div class="shipping_icone">
                                <img src="{{url('themes/storefront/public/customtheme/assets/img/icon/Certification.png')}}" alt="">
                            </div>
                            <div class="shipping_content">
                                <p>HACCP & GHP Certified Company </p>
                                  <a href="#" style="color: #26953f;font-size: 12px;font-weight: 600;">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-6">
                        <div class="single_shipping col_3">
                            <div class="shipping_icone">
                                <img src="{{url('themes/storefront/public/customtheme/assets/img/icon/Gift-voicher.png')}}" alt="">
                            </div>
                            <div class="shipping_content">
                               <p>GIFT VOUCHERS Gifting the baker in your Life made easy </p>
                                  <a href="#" style="color: #26953f;font-size: 12px;font-weight: 600;">Learn more</a>

                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-6">
                        <div class="single_shipping col_4">
                            <div class="shipping_icone">
                                <img src="{{url('themes/storefront/public/customtheme/assets/img/icon/promo-code.png')}}" alt="">
                            </div>
                            <div class="shipping_content">
                                <p>GET 15 AED OFF ON YOUR FIRST ORDER ABOVE 200 AED. <br><strong>CODE: HI15</strong> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="footer_widgets mt-60">
            <div class="footer_top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 col-sm-7">
                            <div class="widgets_container contact_us">
                                <div class="footer_logo">

                                   <a href="{{ route('home') }}" class="header-logo">
                                        @if (is_null($logo))
                                        <h3>{{ setting('store_name') }}</h3>
                                        @else
                                        <img src="{{ $logo }}" alt="logo">
                                        @endif
                                    </a>

                                </div>
                                @if (setting('storefront_address'))
                                <p><span>Address:</span> {{ setting('storefront_address') }}</p>
                                @endif
                                @if (setting('store_email'))
                                <p><span>Email:</span> <a href="mailto:{{ setting('store_email') }}">{{ setting('store_email') }}</a></p>
                                @endif
                                @if (setting('store_phone'))
                                <p><span>Call us:</span> <a href="tel:{{ setting('store_phone') }}">{{ setting('store_phone') }}</a></p>
                                @endif
                            </div>
                            <div class="footer_payment">
                                        <ul>
                                            <li>

                                                <a href="#"><img src="{{url('themes/storefront/public/customtheme/assets/img/icon/fb.png')}}" alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="{{url('themes/storefront/public/customtheme/assets/img/icon/in.png')}}" alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="{{url('themes/storefront/public/customtheme/assets/img/icon/insta-2.png')}}" alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="{{url('themes/storefront/public/customtheme/assets/img/icon/wp.png')}}" alt="" /></a>

                                                <a href="#"><img src="assets\img\icon\fb.png" alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="assets\img\icon\in.png" alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="assets\img\icon\insta-2.png" alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="assets\img\icon\wp.png" alt="" /></a>

                                            </li>
                                        </ul>
                                    </div>
                        </div>
                        @if ($footerMenuOne->isNotEmpty())
                        <div class="col-lg-2 col-md-3 col-sm-5 col-6">
                            <div class="widgets_container widget_menu">
                                <h3>{{ setting('storefront_footer_menu_one_title') }}</h3>
                                <div class="footer_menu">
                                    <ul>
                                        @foreach ($footerMenuOne as $menuItem)
                                        <li><a href="{{ $menuItem->url() }}" target="{{ $menuItem->target }}">
                                                {{ $menuItem->name }}
                                            </a></li>
                                         @endforeach

                                    </ul>
                                </div>
                            </div>
                        </div>
                        @endif

                        @if ($footerMenuTwo->isNotEmpty())
                        <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="widgets_container widget_menu">
                                <h3>{{ setting('storefront_footer_menu_two_title') }}</h3>
                                <div class="footer_menu">
                                    <ul>
                                        @foreach ($footerMenuTwo as $menuItem)
                                        <li><a href="{{ $menuItem->url() }}" target="{{ $menuItem->target }}">
                                                {{ $menuItem->name }}
                                            </a></li>
                                        @endforeach

                                    </ul>
                                </div>
                            </div>
                        </div>
                        @endif

                        <div class="col-lg-4 col-md-6 col-sm-8">
                            <div class="widgets_container widget_newsletter">
                                <h3>Sign up newsletter</h3>
                                <p class="footer_desc">Get updates by subscribe our weekly newsletter</p>
                                <div class="subscribe_form">
                                    <form id="mc-form" class="mc-form footer-newsletter">
                                        <input id="mc-email" type="email" autocomplete="off" placeholder="Enter you email" />
                                        <button id="mc-submit">Subscribe</button>
                                    </form>

                                    <div class="mailchimp-alerts text-centre">
                                        <div class="mailchimp-submitting"></div>
                                        <div class="mailchimp-success"></div>
                                        <div class="mailchimp-error"></div>
                                    </div>

                                    <div class="footer_payment">
                                        <ul>
                                            <li>

                                                <a href="#"><img src="{{url('themes/storefront/public/customtheme/assets/img/icon/paypal1.jpg')}}" alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="{{url('themes/storefront/public/customtheme/assets/img/icon/paypal2.jpg')}}" alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="{{url('themes/storefront/public/customtheme/assets/img/icon/paypal3.jpg')}}" alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="{{url('themes/storefront/public/customtheme/assets/img/icon/paypal4.jpg')}}" alt="" /></a>

                                                <a href="#"><img src="assets\img\icon\paypal1.jpg" alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="assets\img\icon\paypal2.jpg" alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="assets\img\icon\paypal3.jpg" alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="assets\img\icon\paypal4.jpg" alt="" /></a>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer_bottom">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-7">
                            <div class="copyright_area">
                                <p>Copyright © 2020 <a href="#">Greens International</a> . All Rights Reserved.</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-5">





                            <div class="header_social text-right text-white footetrc">
                                    <ul>
                                        <li>
                                            <a href="#"><i class="ion-social-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="ion-social-googleplus-outline"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="ion-social-youtube-outline"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="ion-social-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="ion-social-instagram-outline"></i></a>
                                        </li>


                                    </ul>


                                    </ul>


                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>




<!-- footer theme starts -->













<!-- <footer class="footer-wrap">
    <div class="container">
        <div class="footer">
            <div class="footer-top">
                <div class="row">
                    <div class="col-lg-5 col-md-8">
                        <div class="contact-us">
                            <h4 class="title">{{ trans('storefront::layout.contact_us') }}</h4>

                            <ul class="list-inline contact-info">
                                @if (setting('store_phone'))
                                    <li>
                                        <i class="las la-phone"></i>
                                        <span>{{ setting('store_phone') }}</span>
                                    </li>
                                @endif

                                @if (setting('store_email'))
                                    <li>
                                        <i class="las la-envelope"></i>
                                        <span>{{ setting('store_email') }}</span>
                                    </li>
                                @endif

                                @if (setting('storefront_address'))
                                    <li>
                                        <i class="las la-map"></i>
                                        <span>{{ setting('storefront_address') }}</span>
                                    </li>
                                @endif
                            </ul>

                            @if (social_links()->isNotEmpty())
                                <ul class="list-inline social-links">
                                    @foreach (social_links() as $icon => $socialLink)
                                        <li>
                                            <a href="{{ $socialLink }}">
                                                <i class="{{ $icon }}"></i>
                                            </a>
                                        </li>
                                    @endforeach
                                </ul>
                            @endif
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-5">
                        <div class="footer-links">
                            <h4 class="title">{{ trans('storefront::layout.my_account') }}</h4>

                            <ul class="list-inline">
                                <li>
                                    <a href="{{ route('account.dashboard.index') }}">
                                        {{ trans('storefront::account.pages.dashboard') }}
                                    </a>
                                </li>

                                <li>
                                    <a href="{{ route('account.orders.index') }}">
                                        {{ trans('storefront::account.pages.my_orders') }}
                                    </a>
                                </li>

                                <li>
                                    <a href="{{ route('account.reviews.index') }}">
                                        {{ trans('storefront::account.pages.my_reviews') }}
                                    </a>
                                </li>

                                <li>
                                    <a href="{{ route('account.profile.edit') }}">
                                        {{ trans('storefront::account.pages.my_profile') }}
                                    </a>
                                </li>

                                @auth
                                    <li>
                                        <a href="{{ route('logout') }}">
                                            {{ trans('storefront::account.pages.logout') }}
                                        </a>
                                    </li>
                                @endauth
                            </ul>
                        </div>
                    </div>

                    @if ($footerMenuOne->isNotEmpty())
                        <div class="col-lg-3 col-md-5">
                            <div class="footer-links">
                                <h4 class="title">{{ setting('storefront_footer_menu_one_title') }}</h4>

                                <ul class="list-inline">
                                    @foreach ($footerMenuOne as $menuItem)
                                        <li>
                                            <a href="{{ $menuItem->url() }}" target="{{ $menuItem->target }}">
                                                {{ $menuItem->name }}
                                            </a>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    @endif

                    @if ($footerMenuTwo->isNotEmpty())
                        <div class="col-lg-3 col-md-5">
                            <div class="footer-links">
                                <h4 class="title">{{ setting('storefront_footer_menu_two_title') }}</h4>

                                <ul class="list-inline">
                                    @foreach ($footerMenuTwo as $menuItem)
                                        <li>
                                            <a href="{{ $menuItem->url() }}" target="{{ $menuItem->target }}">
                                                {{ $menuItem->name }}
                                            </a>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    @endif

                    @if ($footerTags->isNotEmpty())
                        <div class="col-lg-4 col-md-7">
                            <div class="footer-links footer-tags">
                                <h4 class="title">{{ trans('storefront::layout.tags') }}</h4>

                                <ul class="list-inline">
                                    @foreach ($footerTags as $footerTag)
                                        <li>
                                            <a href="{{ $footerTag->url() }}">
                                                {{ $footerTag->name }}
                                            </a>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    @endif
                </div>
            </div>

            <div class="footer-bottom">
                <div class="row align-items-center">
                    <div class="col-md-9 col-sm-18">
                        <div class="footer-text">
                            {!! $copyrightText !!}
                        </div>
                    </div>

                    @if ($acceptedPaymentMethodsImage->exists)
                        <div class="col-md-9 col-sm-18">
                            <div class="footer-payment">
                                <img src="{{ $acceptedPaymentMethodsImage->path }}" alt="accepted payment methods">
                            </div>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</footer>

 -->
 <!-- footer theme ends -->


