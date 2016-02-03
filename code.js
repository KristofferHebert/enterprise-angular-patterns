// don't use controllers in routes and templates
// https://medium.com/@bluepnume/sane-scalable-angular-apps-are-tricky-but-not-impossible-lessons-learned-from-paypal-checkout-c5320558d4ef#.1ig3fmh5g
// make everything a template
//

// sort folders by features, makes it easier to reuse code, because dependent code in the same folders
// mirror app structure
// http://www.slideshare.net/andrewalpert35/building-scalable-applications-with-angular-js
// one thing per file

angular.module('app',[])
    .directive('sampleDirective', function(){
        return {
            scope:{
                // OK blank
                // var: '='
            },
            template: template,
            controller($scope){
                console.log($scope.var)
            }
        }
    })
    .factory('sampleFactory', functino(){

        // use factories in place of services or other things. They all do the same thing
        return {}
    })
