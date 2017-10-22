(function(){
    var BACTERIE_COUNT = 80;
    var colors = ['#062D75', '#E8292F'];
    var bacteries = [];
    var container = window.document.getElementById("u1570");
    var interval1;
    var interval2

    
    function fillContainer () {
        var k = 1;
        for(var i=0; i<BACTERIE_COUNT; i++) {
            k = 1-k;
            var bacterie = new Bacterie(colors[k]);
            
            bacteries.push(bacterie);
            container.appendChild(bacterie.element);
        }
        runColorChanging(); 
    }




    function clearBacteries() {
        if(bacteries.length ==0) return;
        for(var i=0; i<BACTERIE_COUNT; i++) {
                container.removeChild(bacteries[i].element);
        }
        bacteries = [];
    }

    function runFillingInterval(){
        interval1 = setInterval(function(){
            clearInterval(interval2);
            clearBacteries();
            fillContainer();
        }, 4000);
    }

    function runColorChanging(){
        interval2 = setInterval(function(){
            for(var i=0; i<BACTERIE_COUNT; i++) {
                //console.log(bacteries[i]);
                bacteries[i].changeColor(colors[Math.round(Math.random())]);
            }

        }, 2000);
    }
        


    function Bacterie(color) {

            
            this.height = 26;
            this.width = 60;

            this.color;
            this.x;
            this.y;
            this.rotation;
            this.element;


           
            this.changeColor = function(color){
                Object.assign(this.element.style, {
                    backgroundColor : color//colors[Math.round(Math.random())]
                });


            }
            this.getRotation = function() {
                return Math.floor((Math.random() * 360) + 1);
            }
            this.getPosition = function(max){
                return Math.floor((Math.random() * max) + 1);
            }
            this.createElement = function(){

                this.element = document.createElement('div');
                Object.assign(this.element.style, {
                    height: this.height +"px", 
                    width: this.width+"px", 
                    backgroundColor: color,
                    borderRadius: '20px',
                    transform: 'rotate('+ this.getRotation() + 'deg)',
                    position:'absolute',
                    top: this.getPosition(380) +'px',
                    left: this.getPosition(1596) +'px',
                    zIndex:2
                });
                
               
            }

            this.createElement();
            return this;

    }


    fillContainer();   
    runFillingInterval();
   
})();