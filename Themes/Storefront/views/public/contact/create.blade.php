@extends('public.layout')

@section('title', trans('storefront::contact.contact'))

@section('content')
    <div class="breadcrumbs_area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb_content">
                       <h3 style="color: #fff">Contact Us</h3>
                        <ul>
                            <li><a href="{{ route('home') }}">home</a></li>
                            <li>contact us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

   <div class="contact_map mt-70">
       <div class="map-area">
          <iframe
                    width="100%"
                    height="500"
                    src="https://maps.google.com/maps?q={{ setting('storefront_address') }}&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0">
                </iframe>
       </div>
    </div>
    <!--contact map end-->

    <!--contact area start-->
    <div class="contact_area">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                   <div class="contact_message content">
                        <h3>{{ trans('storefront::contact.contact') }}</h3>
                         <p>Welcome to the one of the world's best known company in the industry! We are committed to the highest quality, reliability, responsibility, continuous improvement and strive to build long-term relationships with our clients.</p>
                        <ul>
                            @if (setting('storefront_address'))
                            <li><i class="fa fa-map-o"></i>  {{ setting('storefront_address') }}</li>
                            @endif
                            <li><i class="fa fa-envelope-o"></i> <a href="mailto:{{ setting('store_email') }}">{{ setting('store_email') }}</a></li>
                            @if (setting('store_phone'))
                            <li><i class="fa fa-phone"></i><a href="tel:{{ setting('store_phone') }}">{{ setting('store_phone') }}</a>  </li>
                            @endif
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="contact-form-right">
                        <h3 class="title">{{ trans('storefront::contact.leave_a_message') }}</h3>

                        <div class="contact-form">
                            <form method="POST" action="{{ route('contact.store') }}">
                                @csrf

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="email">
                                                {{ trans('contact::attributes.email') }}<span>*</span>
                                            </label>

                                            <input type="text" name="email" value="{{ old('email') }}" id="email" class="form-control">

                                            @error('email')
                                                <span class="error-message">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="subject">
                                                {{ trans('contact::attributes.subject') }}<span>*</span>
                                            </label>

                                            <input type="text" name="subject" value="{{ old('subject') }}" id="subject" class="form-control">

                                            @error('subject')
                                                <span class="error-message">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="col-md-18">
                                        <div class="form-group">
                                            <label for="message">
                                                {{ trans('contact::attributes.message') }}<span>*</span>
                                            </label>

                                            <textarea rows="5" name="message" id="message" class="form-control">{{ old('message') }}</textarea>

                                            @error('message')
                                                <span class="error-message">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="col-md-18">
                                        <div class="form-group p-t-5">
                                            @captcha
                                            <input type="text" name="captcha" class="captcha-input" placeholder="{{ trans('storefront::layout.enter_captcha_code') }}">

                                            @error('captcha')
                                                <span class="error-message">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="col-md-18">
                                        <button type="submit" class="btn btn-lg btn-primary" style="background-color: #000;" data-loading>
                                            {{ trans('storefront::contact.send_message') }}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>








































@endsection
