Ext.data.JsonP.Ext_Version({"tagname":"class","name":"Ext.Version","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"code_type":"nop","inheritable":false,"inheritdoc":null,"meta":{"author":["Jacky Nguyen <jacky@sencha.com>"],"docauthor":["Jacky Nguyen <jacky@sencha.com>","翻译者:kimmking <kimmking.cn@gmail.com>","atian25 <atian25@qq.com>"],"markdown":true},"id":"class-Ext.Version","members":{"cfg":[],"property":[{"name":"lastRegisteredVersion","tagname":"property","owner":"Ext.Version","meta":{"private":true},"id":"property-lastRegisteredVersion"},{"name":"versions","tagname":"property","owner":"Ext.Version","meta":{"private":true},"id":"property-versions"}],"method":[{"name":"constructor","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-constructor"},{"name":"deprecate","tagname":"method","owner":"Ext.Version","meta":{"markdown":true},"id":"method-deprecate"},{"name":"equals","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-equals"},{"name":"getBuild","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-getBuild"},{"name":"getMajor","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-getMajor"},{"name":"getMinor","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-getMinor"},{"name":"getPatch","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-getPatch"},{"name":"getRelease","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-getRelease"},{"name":"getShortVersion","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-getShortVersion"},{"name":"getVersion","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-getVersion"},{"name":"gt","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-gt"},{"name":"gtEq","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-gtEq"},{"name":"isGreaterThan","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-isGreaterThan"},{"name":"isGreaterThanOrEqual","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-isGreaterThanOrEqual"},{"name":"isLessThan","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-isLessThan"},{"name":"isLessThanOrEqual","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-isLessThanOrEqual"},{"name":"lt","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-lt"},{"name":"ltEq","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-ltEq"},{"name":"match","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-match"},{"name":"setVersion","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-setVersion"},{"name":"toArray","tagname":"method","owner":"Ext.Version","meta":{},"id":"method-toArray"},{"name":"toString","tagname":"method","owner":"Ext.Version","meta":{"private":true},"id":"method-toString"},{"name":"valueOf","tagname":"method","owner":"Ext.Version","meta":{"private":true},"id":"method-valueOf"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[{"name":"compare","tagname":"method","owner":"Ext.Version","meta":{"static":true},"id":"static-method-compare"},{"name":"getComponentValue","tagname":"method","owner":"Ext.Version","meta":{"static":true},"id":"static-method-getComponentValue"}],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"Version.js","href":"Version.html#Ext-Version"}],"html_meta":{"author":null,"docauthor":null,"markdown":null},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Version.html#Ext-Version' target='_blank'>Version.js</a></div></pre><div class='doc-contents'><p>一个包装版本号的工具类，提供方便的版本比较方法。参见：<a href=\"#!/api/Ext.Version-static-method-compare\" rel=\"Ext.Version-static-method-compare\" class=\"docClass\">compare</a>. 示例:</p>\n\n<pre><code>var version = new <a href=\"#!/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a>('1.0.2beta');\nconsole.log(\"Version is \" + version); // 版本是 1.0.2beta\n\nconsole.log(version.getMajor()); // 1\nconsole.log(version.getMinor()); // 0\nconsole.log(version.getPatch()); // 2\nconsole.log(version.getBuild()); // 0\nconsole.log(version.getRelease()); // beta\n\nconsole.log(version.isGreaterThan('1.0.1')); // True\nconsole.log(version.isGreaterThan('1.0.2alpha')); // True\nconsole.log(version.isGreaterThan('1.0.2RC')); // False\nconsole.log(version.isGreaterThan('1.0.2')); // False\nconsole.log(version.isLessThan('1.0.2')); // True\n\nconsole.log(version.match(1.0)); // True\nconsole.log(version.match('1.0.2')); // True\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-lastRegisteredVersion' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-property-lastRegisteredVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-property-lastRegisteredVersion' class='name expandable'>lastRegisteredVersion</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-versions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-property-versions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-property-versions' class='name expandable'>versions</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.Version-method-constructor' class='name expandable'>Ext.Version</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> version</span> ) : <a href=\"#!/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>version</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>版本号的标准格式：major[.minor[.patch[.build[release]]]]\n例如: 1.0 或者 1.2.3beta 或者 1.2.3.4RC</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-deprecate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-deprecate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-deprecate' class='name expandable'>deprecate</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> packageName, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> since, <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> closure, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> scope</span> )</div><div class='description'><div class='short'>为废弃代码创建一个闭包函数\n\n// 下面的代码意味着Ext.oldMethod仅仅被4.0.0beta或更早的版本支持。 ...</div><div class='long'><p>为废弃代码创建一个闭包函数</p>\n\n<pre><code>// 下面的代码意味着Ext.oldMethod仅仅被4.0.0beta或更早的版本支持。\n// 如果Ext.getVersion('extjs')返回的版本比4.0.0beta大，例如 '4.0.0RC',\n// 回调函数将被执行：\nExt.deprecate('extjs', '4.0.0beta', function() {\n    Ext.oldMethod = Ext.newMethod;\n\n    ...\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>packageName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>包名</p>\n</div></li><li><span class='pre'>since</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>废弃前最后的版本号</p>\n</div></li><li><span class='pre'>closure</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>指定版本小于当前版本时执行的回调函数</p>\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>执行回调函数的scope (<tt>this</tt>)</p>\n</div></li></ul></div></div></div><div id='method-equals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-equals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-equals' class='name expandable'>equals</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> target</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>返回当前版本号是否等于参数中的版本号 ...</div><div class='long'><p>返回当前版本号是否等于参数中的版本号</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>要比较的版本</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>如果当前版本等于参数中的版本则为true，否则为false</p>\n</div></li></ul></div></div></div><div id='method-getBuild' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-getBuild' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-getBuild' class='name expandable'>getBuild</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>返回构建版本号 ...</div><div class='long'><p>返回构建版本号</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>build</p>\n</div></li></ul></div></div></div><div id='method-getMajor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-getMajor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-getMajor' class='name expandable'>getMajor</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>返回主版本号 ...</div><div class='long'><p>返回主版本号</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>major</p>\n</div></li></ul></div></div></div><div id='method-getMinor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-getMinor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-getMinor' class='name expandable'>getMinor</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>返回次要版本号 ...</div><div class='long'><p>返回次要版本号</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>minor</p>\n</div></li></ul></div></div></div><div id='method-getPatch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-getPatch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-getPatch' class='name expandable'>getPatch</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>返回补丁版本号 ...</div><div class='long'><p>返回补丁版本号</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>patch</p>\n</div></li></ul></div></div></div><div id='method-getRelease' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-getRelease' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-getRelease' class='name expandable'>getRelease</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>返回发布版本号 ...</div><div class='long'><p>返回发布版本号</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>release</p>\n</div></li></ul></div></div></div><div id='method-getShortVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-getShortVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-getShortVersion' class='name expandable'>getShortVersion</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>返回不包括圆点和release的短版本号 ...</div><div class='long'><p>返回不包括圆点和release的短版本号</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-getVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-getVersion' class='name expandable'>getVersion</a>( <span class='pre'>[<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> packageName]</span> ) : <a href=\"#!/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a></div><div class='description'><div class='short'>获取指定名称的包的版本号；将返回最后注册的版本号。 ...</div><div class='long'><p>获取指定名称的包的版本号；将返回最后注册的版本号。\n如果没有指定包名，返回最后一次调用Ext.setVersion设置的值。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>packageName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The package name, for example: 'core', 'touch', 'extjs'</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a></span><div class='sub-desc'><p>The version</p>\n</div></li></ul></div></div></div><div id='method-gt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-gt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-gt' class='name expandable'>gt</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> target</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>isGreaterThan的别名 ...</div><div class='long'><p><a href=\"#!/api/Ext.Version-method-isGreaterThan\" rel=\"Ext.Version-method-isGreaterThan\" class=\"docClass\">isGreaterThan</a>的别名</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-gtEq' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-gtEq' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-gtEq' class='name expandable'>gtEq</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> target</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>isGreaterThanOrEqual的别名 ...</div><div class='long'><p><a href=\"#!/api/Ext.Version-method-isGreaterThanOrEqual\" rel=\"Ext.Version-method-isGreaterThanOrEqual\" class=\"docClass\">isGreaterThanOrEqual</a>的别名</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isGreaterThan' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-isGreaterThan' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-isGreaterThan' class='name expandable'>isGreaterThan</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> target</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>返回当前版本号是否大于参数中的版本号 ...</div><div class='long'><p>返回当前版本号是否大于参数中的版本号</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>要比较的版本</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>如果当前版本大于参数中的版本则为true，否则为false</p>\n</div></li></ul></div></div></div><div id='method-isGreaterThanOrEqual' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-isGreaterThanOrEqual' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-isGreaterThanOrEqual' class='name expandable'>isGreaterThanOrEqual</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> target</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>返回当前版本号是否大于或等于参数中的版本号 ...</div><div class='long'><p>返回当前版本号是否大于或等于参数中的版本号</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>要比较的版本</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>如果当前版本大于等于参数中的版本则为true，否则为false</p>\n</div></li></ul></div></div></div><div id='method-isLessThan' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-isLessThan' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-isLessThan' class='name expandable'>isLessThan</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> target</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>返回当前版本号是否小于参数中的版本号 ...</div><div class='long'><p>返回当前版本号是否小于参数中的版本号</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>要比较的版本</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>如果当前版本小于参数中的版本则为true，否则为false</p>\n</div></li></ul></div></div></div><div id='method-isLessThanOrEqual' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-isLessThanOrEqual' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-isLessThanOrEqual' class='name expandable'>isLessThanOrEqual</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> target</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>返回当前版本号是否小于等于参数中的版本号 ...</div><div class='long'><p>返回当前版本号是否小于等于参数中的版本号</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>要比较的版本</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>如果当前版本小于等于参数中的版本则为true，否则为false</p>\n</div></li></ul></div></div></div><div id='method-lt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-lt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-lt' class='name expandable'>lt</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> target</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>isLessThan的别名 ...</div><div class='long'><p><a href=\"#!/api/Ext.Version-method-isLessThan\" rel=\"Ext.Version-method-isLessThan\" class=\"docClass\">isLessThan</a>的别名</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-ltEq' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-ltEq' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-ltEq' class='name expandable'>ltEq</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> target</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>isLessThanOrEqual的别名 ...</div><div class='long'><p><a href=\"#!/api/Ext.Version-method-isLessThanOrEqual\" rel=\"Ext.Version-method-isLessThanOrEqual\" class=\"docClass\">isLessThanOrEqual</a>的别名</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-match' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-match' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-match' class='name expandable'>match</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> target</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></div><div class='description'><div class='short'>返回当前版本号是否匹配参数中的版本号。示例：\n\nvar version = new Ext.Version('1.0.2beta');\nconsole.log(version.match(1)); // True\nconsole.lo...</div><div class='long'><p>返回当前版本号是否匹配参数中的版本号。示例：</p>\n\n<pre><code>var version = new <a href=\"#!/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a>('1.0.2beta');\nconsole.log(version.match(1)); // True\nconsole.log(version.match(1.0)); // True\nconsole.log(version.match('1.0.2')); // True\nconsole.log(version.match('1.0.2RC')); // False\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>要比较的版本</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>如果当前版本匹配参数中的版本则为true，否则为false</p>\n</div></li></ul></div></div></div><div id='method-setVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-setVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-setVersion' class='name expandable'>setVersion</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> packageName, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a> version</span> ) : <a href=\"#!/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a></div><div class='description'><div class='short'>设置指定名称的包的版本号。 ...</div><div class='long'><p>设置指定名称的包的版本号。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>packageName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>包名, 例如: 'core', 'touch', 'extjs'</p>\n</div></li><li><span class='pre'>version</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a><div class='sub-desc'><p>版本号, 例如: '1.2.3alpha', '2.4.0-dev'</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toArray' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-toArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-toArray' class='name expandable'>toArray</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>[]</div><div class='description'><div class='short'>返回如下格式: [major, minor, patch, build, release]. ...</div><div class='long'><p>返回如下格式: [major, minor, patch, build, release]. 对比较版本很有用。</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><strong class='private signature'>private</strong></div><div class='description'><div class='short'>覆盖原生的toString方法 ...</div><div class='long'><p>覆盖原生的toString方法</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>version</p>\n</div></li></ul></div></div></div><div id='method-valueOf' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-method-valueOf' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-method-valueOf' class='name expandable'>valueOf</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><strong class='private signature'>private</strong></div><div class='description'><div class='short'>覆盖原生的valueOf方法 ...</div><div class='long'><p>覆盖原生的valueOf方法</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>version</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-compare' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-static-method-compare' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-static-method-compare' class='name expandable'>compare</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> current, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> target</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><strong class='static signature'>static</strong></div><div class='description'><div class='short'>从左到右比较两个指定版本。如果其中包含有特殊的版本字符串，\n它们将被按照如下顺序处理：\n'dev' &lt; 'alpha' = 'a' &lt; 'beta' = 'b' &lt; 'RC' = 'rc' &lt; '#' &lt;...</div><div class='long'><p>从左到右比较两个指定版本。如果其中包含有特殊的版本字符串，\n它们将被按照如下顺序处理：\n'dev' &lt; 'alpha' = 'a' &lt; 'beta' = 'b' &lt; 'RC' = 'rc' &lt; '#' &lt; 'pl' = 'p' &lt; '任意的其他字符串'</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>current</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>要比较的当前版本</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>要比较的目标版本</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>如果当前版本小于目标版本返回-1，大于则返回1，相等则返回0。</p>\n</div></li></ul></div></div></div><div id='static-method-getComponentValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Version'>Ext.Version</span><br/><a href='source/Version.html#Ext-Version-static-method-getComponentValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Version-static-method-getComponentValue' class='name expandable'>getComponentValue</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> value</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='static signature'>static</strong></div><div class='description'><div class='short'>将一个版本字符串转换成为一个可以比较的值 ...</div><div class='long'><p>将一个版本字符串转换成为一个可以比较的值</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>要转换的值</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});