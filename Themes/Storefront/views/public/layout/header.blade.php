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
                </div>
            </div>
            <div class="col-lg-2 col-md-6 col-sm-7 col-10">
                <div class="header_social text-right d-none d-sm-block">
                    <ul>
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
