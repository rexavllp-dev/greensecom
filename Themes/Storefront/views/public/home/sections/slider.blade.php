<section class="slider_section mb-70">
            <div class="slider_area owl-carousel">
                @foreach ($slider->slides as $slide)
                 <div class="single_slider d-flex align-items-center" data-bgimg="{{ $slide->file->path }}">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="slider_content">
                                    <h1>{!! $slide->caption_1 !!}</h1>
                                    <h2>{!! $slide->caption_2 !!}</h2>

                                    @if ($slide->call_to_action_text)
                                    <br>
                                    <a
                                                href="{{ $slide->call_to_action_url }}"
                                                class="btn btn-primary btn-slider"
                                                target="{{ $slide->open_in_new_window ? '_blank' : '_self' }}"
                                            >
                                                {!! $slide->call_to_action_text !!}
                                            </a>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
</section>



