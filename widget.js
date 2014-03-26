WAF.define('SliderBar', ['waf-core/widget'], function(widget) {
	
    var SliderBar = widget.create('SliderBar', {

        init: function() {	
        		var $node  = $(this.node);
        		$node.innerHTML = '<div id='bar'><div id='slider'></div></div><br /><div id='info'>info</div>';
        	
				var bar, slider;
				 
				function init(){
					bar = document.getElementById('bar');
					slider = document.getElementById('slider');
					info = document.getElementById('info');
					bar.addEventListener('mousedown', startSlide, false);	
					bar.addEventListener('mouseup', stopSlide, false);
				}
				 
				function startSlide(event){
					var set_perc = ((((event.clientX - bar.offsetLeft) / bar.offsetWidth)).toFixed(2));
					info.innerHTML = 'start' + set_perc + '%';	
					bar.addEventListener('mousemove', moveSlide, false);	
					slider.style.width = (set_perc * 100) + '%';	
				}
				 
				function moveSlide(event){
					var set_perc = ((((event.clientX - bar.offsetLeft) / bar.offsetWidth)).toFixed(2));
					info.innerHTML = 'moving : ' + set_perc + '%';
					slider.style.width = (set_perc * 100) + '%';
				}
				 
				function stopSlide(event){
					var set_perc = ((((event.clientX - bar.offsetLeft) / bar.offsetWidth)).toFixed(2));
					info.innerHTML = 'done : ' + set_perc + '%';
					bar.removeEventListener('mousemove', moveSlide, false);
					slider.style.width = (set_perc * 100) + '%';
				}
        }

    });

    return SliderBar;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */