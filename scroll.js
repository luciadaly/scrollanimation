    $(document).ready(function () {

    const duration = 1;
    const time = 200;

    // Set Flight Path

    const flightPathUp = {
        curviness: 0.5,
        autoRotate: false,
        values: [{
            x: 0,
            y: -100
        }]
    }

    const flightPathUp2 = {
        curviness: 0.5,
        autoRotate: false,
        values: [{
            x: 0,
            y: -80
        }]
    }

    const flightPathUp3 = {
        curviness: 0.5,
        autoRotate: false,
        values: [{
            x: 0,
            y: -100
        }]
    }

    const flightPathUp4 = {
        curviness: 0.5,
        autoRotate: false,
        values: [{
            x: 0,
            y: -80
        }]
    }

    // Create Tweens 

    const tween = new TimelineLite();

    tween.add(
        TweenLite.to('.image-4', duration, {
            bezier: flightPathUp,
            ease: Power1.easeInOut,
            opacity: 1
        })
    );

    tween.add(
        TweenLite.to('.image-4', duration, {
            bezier: flightPathUp3,
            ease: Power1.easeInOut,
            opacity: 0.1
        })
    );

    tween.add(
        TweenLite.to('.image-3', duration, {
            bezier: flightPathUp2,
            ease: Power1.easeInOut,
            opacity: 1
        })
    );

    tween.add(
        TweenLite.to('.image-3', duration, {
            bezier: flightPathUp4,
            ease: Power1.easeInOut,
            opacity: 0.1
        })
    );

    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
            triggerElement: '.animation',
            triggerHook: 0,
            offset: -120,
            duration: time,
        })
        .setTween(tween)
        .addIndicators()
        .addTo(controller);
});