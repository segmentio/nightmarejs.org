---
template: index.html
---


---


## Simple API

Every method is a simple English command: goto, refresh, click, type... you can check out [Nightmare's full API here](https://github.com/segmentio/nightmare#api).

Nightmare lets you simplify deeply nested callbacks into a few sequential statements. Here's an example search on Yahoo:

<div class="Splitcode-wrapper">

<div class="Splitcode-wrapper-left">
<h3>Raw Phantomjs</h3>
<pre><code><b>phantom.create</b>(function (ph) {
  <b>ph.createPage</b>(function (page) {
    <b>page.open</b>(<i>'http://yahoo.com'</i>, function (status) {
      <b>page.evaluate</b>(function () {
        var el =
          document.querySelector(<i>'input[title="Search"]'</i>);
        el.value = <i>'github nightmare'</i>;
      }, function (result) {
        <b>page.evaluate</b>(function () {
          var el = document.querySelector(<i>'.searchsubmit'</i>);
          var event = document.createEvent(<i>'MouseEvent'</i>);
          event.initEvent(<i>'click'</i>, <i>true</i>, <i>false</i>);
          el.dispatchEvent(event);
        }, function (result) {
          ph.exit();
        });
      });
    });
  });
});
</code></pre>
</div>

<div class="Splitcode-wrapper-right">
<h3>With Nightmare</h3>
<pre><code>yield <b>Nightmare()</b>
  .<b>goto</b>(<i>'http://yahoo.com'</i>)
  .<b>type</b>(<i>'input[title="Search"]'</i>, <i>'github nightmare'</i>)
  .<b>click</b>(<i>'.searchsubmit'</i>);
</code></pre>
</div>

</div>

---


## Install it

Nightmare and its plugins can be installed with npm:

<pre><code>$ <b>npm</b> install <i>nightmare</i></code></pre>

The package exposes a [Javascript API](https://github.com/segmentio/nightmare#api).

---
