<ul class="navbar-nav">
    @auth
    
            <a style="text-decoration:none"class="nav-link" href="{{ route('dashboard') }}">{{ __('Video') }}</a>
      
    @endauth
</ul>
