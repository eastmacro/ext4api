Ext.data.JsonP.Ext_Number({"tagname":"class","name":"Ext.Number","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"code_type":"assignment","inheritable":false,"inheritdoc":null,"meta":{"docauthor":["翻译者:kimmking <kimmking.cn@gmail.com>"]},"id":"class-Ext.Number","members":{"cfg":[],"property":[],"method":[{"name":"constrain","tagname":"method","owner":"Ext.Number","meta":{},"id":"method-constrain"},{"name":"from","tagname":"method","owner":"Ext.Number","meta":{},"id":"method-from"},{"name":"randomInt","tagname":"method","owner":"Ext.Number","meta":{},"id":"method-randomInt"},{"name":"snap","tagname":"method","owner":"Ext.Number","meta":{},"id":"method-snap"},{"name":"snapInRange","tagname":"method","owner":"Ext.Number","meta":{},"id":"method-snapInRange"},{"name":"toFixed","tagname":"method","owner":"Ext.Number","meta":{},"id":"method-toFixed"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"Number.js","href":"Number2.html#Ext-Number"}],"html_meta":{"docauthor":null},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Number2.html#Ext-Number' target='_blank'>Number.js</a></div></pre><div class='doc-contents'><p>一组处理数字的实用静态方法集合。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constrain' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number2.html#Ext-Number-method-constrain' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-constrain' class='name expandable'>constrain</a>( <span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> number, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> min, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> max</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Checks whether or not the passed number is within a desired range. ...</div><div class='long'><p>Checks whether or not the passed number is within a desired range.  If the number is already within the\nrange it is returned, otherwise the min or max value is returned depending on which side of the range is\nexceeded. Note that this method returns the constrained value but does not change the current number.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>number</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The number to check</p>\n</div></li><li><span class='pre'>min</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The minimum number in the range</p>\n</div></li><li><span class='pre'>max</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The maximum number in the range</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The constrained value if outside the range, otherwise the current value</p>\n</div></li></ul></div></div></div><div id='method-from' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number2.html#Ext-Number-method-from' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-from' class='name expandable'>from</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> value, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> defaultValue</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Validate that a value is numeric and convert it to a number if necessary. ...</div><div class='long'><p>Validate that a value is numeric and convert it to a number if necessary. Returns the specified default value if\nit is not.</p>\n\n<pre><code><a href=\"#!/api/Ext.Number-method-from\" rel=\"Ext.Number-method-from\" class=\"docClass\">Ext.Number.from</a>('1.23', 1); // returns 1.23\n<a href=\"#!/api/Ext.Number-method-from\" rel=\"Ext.Number-method-from\" class=\"docClass\">Ext.Number.from</a>('abc', 1); // returns 1\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>defaultValue</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The value to return if the original value is non-numeric</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>value, if numeric, defaultValue otherwise</p>\n\n</div></li></ul></div></div></div><div id='method-randomInt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number2.html#Ext-Number-method-randomInt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-randomInt' class='name expandable'>randomInt</a>( <span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> from, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> to</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Returns a random integer between the specified range (inclusive) ...</div><div class='long'><p>Returns a random integer between the specified range (inclusive)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>from</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>Lowest value to return.</p>\n</div></li><li><span class='pre'>to</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>Highst value to return.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>A random integer within the specified range.</p>\n</div></li></ul></div></div></div><div id='method-snap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number2.html#Ext-Number-method-snap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-snap' class='name expandable'>snap</a>( <span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> value, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> increment, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> minValue, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> maxValue</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Snaps the passed number between stopping points based upon a passed increment value. ...</div><div class='long'><p>Snaps the passed number between stopping points based upon a passed increment value.</p>\n\n<p>The difference between this and <a href=\"#!/api/Ext.Number-method-snapInRange\" rel=\"Ext.Number-method-snapInRange\" class=\"docClass\">snapInRange</a> is that <a href=\"#!/api/Ext.Number-method-snapInRange\" rel=\"Ext.Number-method-snapInRange\" class=\"docClass\">snapInRange</a> uses the minValue\nwhen calculating snap points:</p>\n\n<pre><code>r = <a href=\"#!/api/Ext.Number-method-snap\" rel=\"Ext.Number-method-snap\" class=\"docClass\">Ext.Number.snap</a>(56, 2, 55, 65);        // Returns 56 - snap points are zero based\n\nr = <a href=\"#!/api/Ext.Number-method-snapInRange\" rel=\"Ext.Number-method-snapInRange\" class=\"docClass\">Ext.Number.snapInRange</a>(56, 2, 55, 65); // Returns 57 - snap points are based from minValue\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The unsnapped value.</p>\n</div></li><li><span class='pre'>increment</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The increment by which the value must move.</p>\n</div></li><li><span class='pre'>minValue</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The minimum value to which the returned value must be constrained. Overrides the increment.</p>\n</div></li><li><span class='pre'>maxValue</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The maximum value to which the returned value must be constrained. Overrides the increment.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The value of the nearest snap target.</p>\n</div></li></ul></div></div></div><div id='method-snapInRange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number2.html#Ext-Number-method-snapInRange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-snapInRange' class='name expandable'>snapInRange</a>( <span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> value, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> increment, [<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> minValue], [<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> maxValue]</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Snaps the passed number between stopping points based upon a passed increment value. ...</div><div class='long'><p>Snaps the passed number between stopping points based upon a passed increment value.</p>\n\n<p>The difference between this and <a href=\"#!/api/Ext.Number-method-snap\" rel=\"Ext.Number-method-snap\" class=\"docClass\">snap</a> is that <a href=\"#!/api/Ext.Number-method-snap\" rel=\"Ext.Number-method-snap\" class=\"docClass\">snap</a> does not use the minValue\nwhen calculating snap points:</p>\n\n<pre><code>r = <a href=\"#!/api/Ext.Number-method-snap\" rel=\"Ext.Number-method-snap\" class=\"docClass\">Ext.Number.snap</a>(56, 2, 55, 65);        // Returns 56 - snap points are zero based\n\nr = <a href=\"#!/api/Ext.Number-method-snapInRange\" rel=\"Ext.Number-method-snapInRange\" class=\"docClass\">Ext.Number.snapInRange</a>(56, 2, 55, 65); // Returns 57 - snap points are based from minValue\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The unsnapped value.</p>\n</div></li><li><span class='pre'>increment</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The increment by which the value must move.</p>\n</div></li><li><span class='pre'>minValue</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The minimum value to which the returned value must be constrained.</p>\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>maxValue</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The maximum value to which the returned value must be constrained.</p>\n<p>Defaults to: <code>Infinity</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The value of the nearest snap target.</p>\n</div></li></ul></div></div></div><div id='method-toFixed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number2.html#Ext-Number-method-toFixed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-toFixed' class='name expandable'>toFixed</a>( <span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> value, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> precision</span> )</div><div class='description'><div class='short'>Formats a number using fixed-point notation ...</div><div class='long'><p>Formats a number using fixed-point notation</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The number to format</p>\n</div></li><li><span class='pre'>precision</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The number of digits to show after the decimal point</p>\n</div></li></ul></div></div></div></div></div></div></div>"});