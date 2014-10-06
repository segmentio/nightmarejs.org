---
template: index.html
---


---


## Simple API

Browser automation with Nightmare is simple and clear: goto A, click B, type C, click D and wait until you see E.

Here's a search on Yahoo with raw Phantomjs:

<pre><code>
<b>phantom.create</b>(function (ph) {
  <b>ph.createPage</b>(function (page) {
    <b>page.open</b>(<i>'http://yahoo.com'</i>, function (status) {
      <b>page.evaluate</b>(function () {
        var el = document.querySelector(<i>'input[title="Search"]'</i>);
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

And then the same result with Nightmare:

<pre><code>new <b>Nightmare()</b>
  .<b>goto</b>(<i>'http://yahoo.com'</i>)
  .<b>type</b>(<i>'input[title="Search"]'</i>, <i>'github nightmare'</i>)
  .<b>click</b>(<i>'.searchsubmit'</i>)
  .run();
</code></pre>

The API methods are all simple English directions, which lets you simplify deeply nested callbacks into a few sequential statements.

You can [check out Nightmare's full API here](https://github.com/segmentio/nightmare#api).


---


## Pluggable



---


## Install it

Nightmare and its plugins can be installed with npm:

<pre><code>$ <b>npm</b> install <i>nightmare</i></code></pre>

The package exposes a [Javascript API](https://github.com/segmentio/nightmare#api).

---


## The Plugins
The core Nightmare library doesn't bundle any plugins by default. You just require new ones as needed, or make your own! 

Here's a list of the current plugins:

<ul class="Plugin-list">
{% for plugin in plugins %}
  <li class="Plugin">
    <a class="Plugin-link" href="{{ plugin.repository }}">
      <h1 class="Plugin-title">{{ plugin.name }}<i class="Plugin-icon ss-{{ plugin.icon }}"></i></h1>
      <i class="Plugin-arrow ss-right"></i>
      <p class="Plugin-description">{{ plugin.description }}</p>
    </a>
  </li>
{% endfor %}
</ul>

If you write your own plugins, submit a pull request to the [nightmare](https://github.com/segmentio/nightmare/tree/gh-pages/src/plugins.json) repository and it will show up here!


---
