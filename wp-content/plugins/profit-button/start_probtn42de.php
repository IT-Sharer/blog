

    FloatingButtonFunc();

function runYourFunctionWhenJQueryIsLoaded() {
    if (window.$){
        FloatingButtonFunc();
    } else {
        setTimeout(runYourFunctionWhenJQueryIsLoaded, 50);
    }
}

function FloatingButtonFunc() {    
    jQuery(document).ready(function() {
        setTimeout(InitButton, 2500);
    });
}

function InitButton() {
    jQuery(document).StartButton({
		    "mainStyleCss": "https://pizzabtn.herokuapp.com/stylesheets/probtn.css",
                            "jqueryPepPath": "https:/pizzabtn.herokuapp.com/javascripts/jquery.pep.min.js",
                'ButtonImage': 'http://itsbeta.com/wp-content/uploads/2013/08/Shop_button_pizza_norm.png',                'ButtonDragImage': 'http://itsbeta.com/wp-content/uploads/2013/08/Shop_button_pizza_norm.png',                'ButtonOpenImage': 'http://itsbeta.com/wp-content/uploads/2013/08/Shop_button_pizza_norm.png',                'ButtonInactiveImage': 'http://itsbeta.com/wp-content/uploads/2013/08/Shop_button_pizza_norm.png',                'domain': 'wordpress.plugin',
                'ContentURL': 'http://benfenghua.wicp.net',                'HintText': ' more',            	    });
}
