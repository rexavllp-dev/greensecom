<ul class="sub_menu" style="width: 1140px;background-image: url({{ $menu->backgroundImage() }});background-position: center;">
    <div class="container">
        <div class="row">

            @php
            $count = 1;
            @endphp
            <div class="col-md-3">
            @foreach ($subMenus as $subMenu)
            <h4  style="margin-top: 10px;"><a href="{{ $subMenu->url() }}" target="{{ $subMenu->target() }}">
                            {{ $subMenu->name() }}
                        </a></h4>
            @foreach ($subMenu->items() as $item)
            <li><a href="{{ $item->url() }}" target="{{ $subMenu->target() }}">
                {{ $item->name() }}
            </a></li>
            @if($count % 15 == 0)
            </div>
            <div class="col-md-3">
            @endif
            @php
            $count++;
            @endphp
            @endforeach
            @php
            $count++;
            @endphp
            @endforeach
            </div>
        </div>
    </div>
</ul>














