---
layout: default
title: Typography
permalink: /typography

font_sizes:
  - font_size:
    label: text-xs
    value: .75rem
  - font_size:
    label: text-sm
    value: .875rem
  - font_size:
    label: text-base
    value: 1rem
  - font_size:
    label: text-lg
    value: 1.125rem
  - font_size:
    label: text-xl
    value: 1.25rem
  - font_size:
    label: text-2xl
    value: 1.5rem
  - font_size:
    label: text-3xl
    value: 1.875rem
  - font_size:
    label: text-4xl
    value: 2.25rem
---

## Font Family
[Inter](https://rsms.me/inter){:target="_blank" rel="nofollow"} is the only typeface included with Bricks.

---

## Font Size
Control the font size of an element using the <code>.text-{size}</code> utilities.

<div class="border border-charlie rounded-lg p-6 mb-3">
  {% for font_size in page.font_sizes %}
    <div class="text-sm text-delta mb-2">.{{ font_size.label }} ({{ font_size.value }})</div>
    <div class="{{ font_size.label }} {% if forloop.last == false %}mb-6{% endif %}">The quick brown fox jumped over the lazy dog.</div>
  {% endfor %}
</div>

---

## Emphasis
Use the following html tags and utility classes to add emphasis to text.

<div class="border border-charlie rounded-lg p-6">
  <div class="text-sm text-delta mb-2">.font-normal</div>
  <div class="mb-6">The quick brown fox jumped over the lazy dog.</div>

  <div class="text-sm text-delta mb-2">b, strong, .font-bold</div>
  <div class="font-bold mb-6">The quick brown fox jumped over the lazy dog.</div>

  <div class="text-sm text-delta mb-2">em, .italic</div>
  <div class="italic mb-6">The quick brown fox jumped over the lazy dog.</div>

  <div class="text-sm text-delta mb-2">.uppercase</div>
  <div class="uppercase">The quick brown fox jumped over the lazy dog.</div>
</div>

<div class="bg-bravo rounded-lg p-6">
  {% highlight html %}
  <strong>The quick brown fox jumped over the lazy dog.</strong>

  {% endhighlight %}
</div>
