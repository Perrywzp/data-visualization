;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gongsi" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M91.2666 908.7334H500V91.2666015625H91.2666015625V908.7333984375zM346.7246 193.4502h102.18359375v102.18359375H346.724609375V193.4501953125zM346.7246 397.8164h102.18359375V500H346.724609375V397.81640625zM346.7246 602.1836h102.18359375v102.18359375H346.724609375V602.18359375zM142.3584 193.4502h102.18359375v102.18359375H142.3583984375V193.4501953125zM142.3584 397.8164h102.18359375V500H142.3583984375V397.81640625zM142.3584 602.1836h102.18359375v102.18359375H142.3583984375V602.18359375zM551.0918 346.7246h357.6416015625v51.091796875H551.091796875V346.724609375zM551.0918 908.7334h102.1826171875V704.3662109375h153.275390625v204.3662109375h102.18359375V448.908203125H551.091796875V908.7333984375z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fanhui" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M622.650611 284.901749 447.745069 284.901749 447.745069 142.823869 63.980685 334.705038l383.76336 191.882192L447.744046 384.834762l189.391465 0c149.914358 0 224.855164 62.789045 224.855164 188.368158 0 129.928165-77.435627 194.876386-232.338602 194.876386L187.952184 768.079306l0 99.93199L634.146433 868.011296c211.184817 0 316.777737-95.104031 316.777737-285.311071C950.924169 384.178823 841.510224 284.901749 622.650611 284.901749z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-loading" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M875.861333 588.444444c-30.691556 0-55.608889-24.903111-55.608889-55.608889 0-30.677333 24.917333-55.566222 55.608889-55.566222 30.663111 0 55.580444 24.888889 55.580444 55.566222C931.441778 563.541333 906.524444 588.444444 875.861333 588.444444zM769.308444 324.394667c-25.585778 0-46.336-20.736-46.336-46.321778 0-25.585778 20.750222-46.321778 46.336-46.321778s46.336 20.736 46.336 46.321778C815.644444 303.658667 794.894222 324.394667 769.308444 324.394667zM769.308444 718.136889c35.84 0 64.867556 29.041778 64.867556 64.839111 0 35.84-29.027556 64.881778-64.867556 64.881778-35.811556 0-64.867556-29.041778-64.867556-64.881778C704.440889 747.178667 733.496889 718.136889 769.308444 718.136889zM514.531556 282.695111c-61.411556 0-111.175111-49.777778-111.175111-111.175111 0-61.397333 49.763556-111.175111 111.175111-111.175111 61.383111 0 111.160889 49.777778 111.160889 111.175111C625.692444 232.917333 575.914667 282.695111 514.531556 282.695111zM262.058667 379.975111c-54.997333 0-99.584-44.600889-99.584-99.598222s44.586667-99.598222 99.584-99.598222c55.011556 0 99.612444 44.600889 99.612444 99.598222S317.070222 379.975111 262.058667 379.975111zM245.859556 532.835556c0 51.2-41.486222 92.672-92.657778 92.672-51.157333 0-92.643556-41.472-92.643556-92.672 0-51.157333 41.486222-92.657778 92.643556-92.657778C204.373333 440.177778 245.859556 481.678222 245.859556 532.835556zM262.058667 704.241778c44.771556 0 81.066667 36.280889 81.066667 81.066667 0 44.771556-36.295111 81.066667-81.066667 81.066667-44.757333 0-81.066667-36.295111-81.066667-81.066667C180.992 740.508444 217.301333 704.241778 262.058667 704.241778zM516.849778 820.039111c39.651556 0 71.779556 32.156444 71.779556 71.793778 0 39.665778-32.142222 71.822222-71.779556 71.822222-39.665778 0-71.822222-32.156444-71.822222-71.822222C445.041778 852.195556 477.184 820.039111 516.849778 820.039111z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M765.734654 917.608795l-162.206474 0c-16.857963 0-30.536511-13.343926-30.536511-29.825312L572.991669 711.753151 451.237552 711.753151l0 176.030331c0 16.481386-13.657058 29.825312-30.515021 29.825312l-162.457184 0c-16.85694 0-30.516045-13.343926-30.516045-29.825312L227.749302 542.871644l-132.525448 0c-12.550863 0-23.844082-7.57145-28.424405-18.989512-4.581346-11.463087-1.527798-24.474439 7.697317-32.796996l416.777682-376.785812c11.712774-10.542111 29.762891-10.542111 41.476688 0l416.755169 376.785812c9.223068 8.322558 12.278663 21.333909 7.696294 32.796996-4.581346 11.417039-15.876612 18.989512-28.424405 18.989512l-132.525448 0 0 344.911839C796.251722 904.264869 782.592617 917.608795 765.734654 917.608795L765.734654 917.608795zM634.068783 857.954077 634.068783 857.954077"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-track" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M904.385227 442.10614C890.549104 790.895965 516.059967 1018.883469 516.059967 1018.883469S196.404694 825.707818 134.773008 522.884908c-12.715603-38.830377-19.828604-80.193437-19.828604-123.310444 0-218.658022 177.293939-395.938658 395.975497-395.938658S906.869814 180.916443 906.869814 399.573441C906.869814 413.994895 905.871067 428.123684 904.385227 442.10614zM510.918877 147.396002c-122.240065 0-221.361597 99.097996-221.361597 221.337037 0 122.240065 99.121532 221.337037 221.361597 221.337037 122.240065 0 221.337037-99.096972 221.337037-221.337037C732.255914 246.493997 633.158942 147.396002 510.918877 147.396002zM614.986047 513.140986l-101.412714-47.550992-101.411691 47.550992 13.885242-111.132076-76.56377-81.752955 110.010533-21.144576 54.079686-98.074689 54.080709 98.074689 110.010533 21.144576-76.564793 81.752955L614.986047 513.140986z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yingyongguanli" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M932.223 10.24l-825.95 0c-50.475 0-91.772 41.297-91.772 91.772l0 825.95c0 50.48 41.297 91.775 91.772 91.775l825.95 0c50.48 0 91.775-41.295 91.775-91.775l0-825.95C1023.997 51.537 982.703 10.24 932.223 10.24zM955.168 905.013c0 25.25-20.645 45.895-45.895 45.895L129.217 950.908c-25.24 0-45.887-20.645-45.887-45.895L83.33 124.957c0-25.24 20.647-45.887 45.887-45.887l780.056 0c25.25 0 45.895 20.647 45.895 45.887L955.168 905.013zM771.618 239.67c-39 0-68.83 29.827-68.83 68.83 0 20.65 9.18 39.002 22.945 50.475l0 64.24c0 114.72-91.775 206.484-206.484 206.484-114.717 0-206.489-91.765-206.489-206.484l0-64.24c13.765-11.472 22.945-29.825 22.945-50.475 0-39.002-29.827-68.83-68.83-68.83-39.005 0-68.83 29.827-68.83 68.83 0 29.827 18.355 55.062 45.885 64.242l0 50.472c0 151.42 123.892 275.314 275.319 275.314 151.42 0 275.314-123.895 275.314-275.314l0-50.472c27.535-9.18 45.885-34.415 45.885-64.242C840.448 269.497 810.628 239.67 771.618 239.67z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)