<!DOCTYPE html>
<html lang="en">

<head>

  @include('layouts.meta')

  @include('layouts.style')

</head>

<body id="page-top">

  @include('layouts.nav')

  <div id="wrapper">

    @include('layouts.sidebar')

    <div id="content-wrapper">

      <div class="container-fluid">

        @include('layouts.breadcrumb')

        @yield('content')

      </div>

      @include('layouts.footer')
    </div>
  </div>

  @include('layouts.utilities')

  @include('layouts.script')


</body>

</html>
