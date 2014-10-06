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
<pre><code>new <b>Nightmare()</b>
  .<b>goto</b>(<i>'http://yahoo.com'</i>)
  .<b>type</b>(<i>'input[title="Search"]'</i>, <i>'github nightmare'</i>)
  .<b>click</b>(<i>'.searchsubmit'</i>)
  .run();
</code></pre>
</div>

</div>


---


## Pluggable

You can also build plugins to repeat automated sequences in a single call.

Here's an example where the Swiftly login sequence has been abstracted for repeated use:

<pre><code><i>/**
 * Login to a Swiftly account.
 *
 * @param {String} email
 * @param {String} password
 */</i>

exports.login = function(email, password){
  return function(nightmare) {
    nightmare
      .<b>viewport</b>(<i>800</i>, <i>1600</i>)
      .<b>goto</b>(<i>'https://swiftly.com/login'</i>)
        .<b>type</b>(<i>'#username'</i>, <i>email</i>)
        .<b>type</b>(<i>'#password'</i>, <i>password</i>)
        .<b>click</b>(<i>'.button--primary'</i>)
      .<b>wait</b>();
  };
};
</pre></code>

<p>...then you can use the plugin like this:</p>

<pre><code>var Swiftly = require('nightmare-swiftly');
new <b>Nightmare()</b>
  .<b>use</b>(Swiftly.login(<i>email</i>, <i>password</i>))
  .<b>use</b>(Swiftly.task(<i>instructions</i>, <i>uploads</i>, <i>path</i>))
  .run();
</code></pre>



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
