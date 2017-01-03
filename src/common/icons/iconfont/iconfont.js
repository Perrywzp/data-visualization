;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-track" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M904.385227 442.10614C890.549104 790.895965 516.059967 1018.883469 516.059967 1018.883469S196.404694 825.707818 134.773008 522.884908c-12.715603-38.830377-19.828604-80.193437-19.828604-123.310444 0-218.658022 177.293939-395.938658 395.975497-395.938658S906.869814 180.916443 906.869814 399.573441C906.869814 413.994895 905.871067 428.123684 904.385227 442.10614zM510.918877 147.396002c-122.240065 0-221.361597 99.097996-221.361597 221.337037 0 122.240065 99.121532 221.337037 221.361597 221.337037 122.240065 0 221.337037-99.096972 221.337037-221.337037C732.255914 246.493997 633.158942 147.396002 510.918877 147.396002zM614.986047 513.140986l-101.412714-47.550992-101.411691 47.550992 13.885242-111.132076-76.56377-81.752955 110.010533-21.144576 54.079686-98.074689 54.080709 98.074689 110.010533 21.144576-76.564793 81.752955L614.986047 513.140986z"  ></path>' +
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