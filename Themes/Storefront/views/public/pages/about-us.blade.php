@extends('public.layout')
@section('title','About US | GreensIntl')
@section('content')

<div>

<div class="breadcrumbs_area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="breadcrumb_content">
                        <h3 style="color: #fff;">About Us</h3>
                        <ul>
                            <li><a href="{{ route('home') }}">home</a></li>
                            <li>about us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

<section class="about_section">
       <div class="container">
            <div class="row">
                <div class="col-12">
                   <figure>
                        <div class="about_thumb">
                            <img src="{{url('themes/storefront/public/customtheme/assets\img\about\greensfront.jpg')}}" alt="">
                        </div>
                        <figcaption class="about_content">
                            <h1>ABOUT GREENS INTERNATIONAL</h1>
                            <p style="font-family: 'Ubuntu', sans-serif;">Greens International Gen. Trdg. LLC.is one of the leading trading companies in UAE.We were established in 2009 in Sharjah, with a vision to supply high-quality bakery ingredients and professional equipment to pastry kitchens and bakeries.

We are dealing with a wide variety of imported high-quality bakery ingredients, pastry tools, equipment and cake decorations. Our suppliers are the Best-in-class producers across the globe. We have an Elite clientele ranging from housewives baking at home to the Five-star Hotels, Catering and Bakery industries. Within a short span of time, we were able to make a name in the industry, developing a large client base. Our product range is very broad, with over 10,000 variety of products.

We are having a dedicated showroom in Sharjah displaying our whole range of products. We believe Baking is an Art and a thought for innovations is Creativity. We help you master these skills with our personalized service. We assure you that Greens will always be a one-stop solution for all your baking and cooking needs.</p>
                            <div class="about_signature">
                                <img src="{{url('themes/storefront/public/customtheme/assets/img/about/about-us-signature.png')}}" alt="">
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </section>


</div>
@endsection
