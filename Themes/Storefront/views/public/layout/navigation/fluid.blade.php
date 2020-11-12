<ul class="sub_menu" style="width: 1140px;background-image: url({{ $menu->backgroundImage() }});background-position: center;">
    <div class="container">
        <div class="row">
            @foreach ($subMenus as $subMenu)
            <div class="col-md-3">
                <h4  style="margin-top: 10px;">
                <a href="{{ $subMenu->url() }}" target="{{ $subMenu->target() }}">
                    {{ $subMenu->name() }}
                </a></h4>
                @foreach ($subMenu->items() as $item)
                <li>
                <a href="{{ $item->url() }}" target="{{ $subMenu->target() }}">
                    {{ $item->name() }}
                </a></li>
                @endforeach
            </div>
            @endforeach
        </div>
    </div>
</ul>