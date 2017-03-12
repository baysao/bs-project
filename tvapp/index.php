<!DOCTYPE html>
<html ng-app="tv-app">
<head>
    <title ng-bind="$root.pageTitle"></title>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
    <link type="text/css" rel="stylesheet" href="css/app.css" />
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600' rel='stylesheet' type='text/css'>
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/swiper.min.css" rel="stylesheet" type="text/css" />
    <link type="text/css" rel="stylesheet" href="css/font-awesome.min.css">
    <link type="text/css" rel="stylesheet" href="css/simple-line-icons.css">
    <link href="css/style.css" rel="stylesheet" type="text/css" />
</head>

<body>
    <div class="wrapper ng-scope" ng-controller="indexCtrl">
        <div ng-include="'/partials/header.html'"></div>        

        <div id="wrapper">
            <div class="container">
                <div ui-view autoscroll="false" class="wrap-partials"></div>
            </div>
        </div>
        
        <div ng-include="'/partials/footer.html'"></div>
    </div>
    <script type="text/javascript" src="js/jquery-1.11.1.js"></script>
    <script type="text/javascript" src="js/velocity.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-animate.js"></script>
    <script src="//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-1.2.2.js"></script>
    <script type="text/javascript" src="js/angular-ui-router.min.js"></script>
    <script type="text/javascript" src="js/swiper.min.js"></script>
    <script src="js/jquery.easing.1.3.js"></script>
    <script src="js/jquery.nicescroll.min.js"></script>
    <script type="text/javascript" src="js/common.js"></script>
    <script type="text/javascript" src="js/loading-bar.min.js"></script>
    
    <script type="text/javascript" src="js/jquery.slimscroll.min.js"></script>
    <script type="text/javascript" src="app/app.js"></script>
    <script type="text/javascript" src="app/data.js"></script>
    <script type="text/javascript" src="app/controllers.js"></script>
</body>

</html>
