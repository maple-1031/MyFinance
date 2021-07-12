$.fn.animate2 = function (properties, duration, ease) {
    ease = ease || 'ease';
    var $this = this;
    var cssOrig = { transition: $this.css('transition') };
    return $this.queue(next => {
        properties['transition'] = 'all ' + duration + 'ms ' + ease;
        $this.css(properties);
        setTimeout(function () {
            $this.css(cssOrig);
            next();
        }, duration);
    });
};

$(function () {
    $(document).on("click", ".lightPie", function () {
        var animElem = document.getElementById("pieChart");
        var timingProperties2Left = {
            duration: 300,
            complete: function () {
                animElem.setAttribute("data-pos", "left");
            }
        }

        var timingProperties2Center = {
            duration: 500,
            complete: function () {
                animElem.setAttribute("data-pos", "center")
            }
        }

        if ($("#pieChart").attr("data-pos") == "center") {
            $("#pieChart").animate2({
                transform: `rotate(${$(this).attr("data-rot")}deg)`
            }, 200
            ).delay(100)
            .animate({
                left: "-5%"
            }, timingProperties2Left
            );
            $(".amount").animate({
                opacity: 0
            }, 200
            );
            $(".main_header").animate({
                height: "30%"
            }, 300
            );
        } else {
            $("#pieChart").animate2({
                transform: "rotate(0deg)"
            }, 100
            )
            .animate({
                left: "50%"
            }, timingProperties2Center
            );
            $(".amount").delay(200).animate({
                opacity: 1
            }, 500
            );
            $(".main_header").animate({
                height: "70%"
            }, 300
            );
        }
    });
});
