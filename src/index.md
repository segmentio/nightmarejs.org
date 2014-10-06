---
template: index.html
---


---


## Simple API

Browser automation with Nightmare is simple and clear: goto W, click Y, upload S, type I, click W, type Y and wait until you see G.

Here's a search on Yahoo:
<pre><code>new <b>Nightmare()</b>
  .<b>goto</b>(<i>'http://yahoo.com'</i>)
  .<b>type</b>(<i>'input[title="Search"]'</i>, <i>'github nightmare'</i>)
  .<b>click</b>(<i>'.searchsubmit'</i>)
  .run();
</code></pre>

The methods are basic english directions, which lets you simplify [deeply nested callbacks](https://github.com/sgentle/phantomjs-node#how-do-i-use-it) into a few sequential statements. No knocks on phantomjs-node though, it's being used under the hood and is quite clever!

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
