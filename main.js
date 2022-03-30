$(document).ready(function () {
    // console.log(new Date().getTime())
    AOS.init({
        duration: 800,
    });
    var endDate = new Date(1649653200000).getTime() / 1000
    var thisDate = new Date().getTime() / 1000


    var allTime = parseInt(endDate - thisDate)

    var timerWrapper = document.querySelector('.timer-wrapper')
    // var allTime = parseInt(timerWrapper.getAttribute('data-all-time'))

    var timers = timerWrapper.querySelectorAll('.this-time')

    var secondWrapper = timerWrapper.querySelector('.sec-num')
    var minuteWrapper = timerWrapper.querySelector('.min-num')
    var hourWrapper = timerWrapper.querySelector('.hour-num')
    var dayWrapper = timerWrapper.querySelector('.day-num')
    var allIsNull = 0


    function setAllTime() {
        var activeTime = allTime
        var thisDay = parseInt(activeTime / (60 * 60 * 24));
        var thisMinute
        var thisHour
        var thisSecond

        if (allTime % (60 * 60 * 24)) {
            thisHour = parseInt((activeTime -= (thisDay * 60 * 60 * 24)) / (60 * 60))
        } else {
            thisHour = 0;
        }
        if (activeTime % (60 * 60)) {
            thisMinute = parseInt((activeTime -= (thisHour * 60 * 60)) / 60);
        } else {
            thisMinute = 0
        }
        if (activeTime % 60) {
            thisSecond = activeTime - thisMinute * 60;
        } else {
            thisSecond = 0
        }

        timers.forEach((item) => {
            var sliders = item.querySelectorAll('.time-slider span')

            if (item.classList.contains('sec-num')) {
                setThisTime(sliders, thisSecond)
            }

            if (item.classList.contains('min-num')) {
                setThisTime(sliders, thisMinute)
            }

            if (item.classList.contains('hour-num')) {
                setThisTime(sliders, thisHour)
            }

            if (item.classList.contains('day-num')) {
                setThisTime(sliders, thisDay)
            }
        })
    }

    function setThisTime(sliders, thisSecond) {
        if (thisSecond >= 10) {
            sliders[0].innerHTML = parseInt(thisSecond / 10);
            sliders[1].innerHTML = (thisSecond - parseInt(thisSecond / 10) * 10)
        } else {
            sliders[0].innerHTML = 0
            sliders[1].innerHTML = thisSecond
        }
    }

    setAllTime()

    var selector = document.getElementById("i-num");
    var im = new Inputmask("+(999)-99-999-99-99");


    function updateTimeExtra1(timeSliders, newSpan) {
        timeSliders.appendChild(newSpan)
        timeSliders.classList.add('active')

        setTimeout(() => {
            timeSliders.children[0].innerHTML = timeSliders.children[1].innerHTML
            timeSliders.children[1].remove()
            timeSliders.classList.remove('active')
        }, 400)
    }

    function updateTimes(timeWrapper, type) {
        var timeSliders = timeWrapper.querySelectorAll('.time-slider')

        var fistSlider = parseInt(timeSliders[1].children[0].innerHTML)
        var secondSlider = parseInt(timeSliders[0].children[0].innerHTML)

        var newSpan = document.createElement('span')
        newSpan.classList.add('opacityAnimation')

        if (fistSlider >= 1) {
            newSpan.innerHTML = fistSlider - 1

        } else {
            if (type === "hour") {
                newSpan.innerHTML = 3
            } else if (type === "day") {
                if (secondSlider < 1) {
                    newSpan.innerHTML = 0
                    allIsNull = 1
                } else {
                    newSpan.innerHTML = 9
                }
            } else {
                newSpan.innerHTML = 9
            }
            var newSpan2 = document.createElement('span')
            newSpan2.classList.add('opacityAnimation')
            if (secondSlider >= 1) {
                newSpan2.innerHTML = secondSlider - 1
                updateTimeExtra1(timeSliders[0], newSpan2)

            } else {
                minuteStatus = 1
                hourStatus = 1
                dayStatus = 1
                if (type === "hour") {
                    newSpan2.innerHTML = 2
                } else if (type === "day") {
                    newSpan2.innerHTML = 0
                    allIsNull = 1
                } else {
                    newSpan2.innerHTML = 5
                }
                updateTimeExtra1(timeSliders[0], newSpan2)
            }
        }
        updateTimeExtra1(timeSliders[1], newSpan)

    }

    var minuteStatus = 0
    var hourStatus = 0
    var dayStatus = 0

    function setStatusNull() {
        minuteStatus = 0
        hourStatus = 0
        dayStatus = 0
    }

    function setAllTimeNull() {
        timers.forEach((item) => {
            item.querySelectorAll('.time-slider span').forEach((spanItem) => {
                spanItem.innerHTML = 0;
            })
        })


    }

    var timer = setInterval(() => {
        setStatusNull()
        updateTimes(secondWrapper)
        if (minuteStatus === 1) {
            setStatusNull()
            updateTimes(minuteWrapper)

            if (hourStatus === 1) {
                setStatusNull()
                updateTimes(hourWrapper, "hour")

                if (dayStatus === 1) {
                    setStatusNull()
                    updateTimes(dayWrapper, 'day')
                    if (allIsNull === 1) {
                        clearInterval(timer)
                        setAllTimeNull()

                    }
                }
            }
        }
    }, 1000)

})
