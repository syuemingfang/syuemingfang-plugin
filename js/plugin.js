/*!

# Plugin jQuery Plugin
  a demo plugin for jQuery. 

  CDN: <input value='https://code.google.com/p/syuemingfang-plugin/source/browse/js/plugin.js' class='form-control'/>

  [GitHub project](https://github.com/syuemingfang/syuemingfang-plugin)

****************************************************************************************************/

/*!

+ Version: 0.1.0.0
+ Copyright © 2013 [Syue](mailtot:syuemingfang@gmail.com). All rights reserved.
+ Date: *Thu Aug 29 2013 11:16:29 GMT+0800 (Central Standard Time)*

## Examples
 1. **Standard** [Power by Cinderella](http://html.cxm.tw/?url=https://raw.github.com/syuemingfang/syuemingfang-plugin/master/example.html)

## How to Use
 1. **Setup** include this javascript files in your header.
  + **jQuery**
   `<script src='http://code.jquery.com/jquery-1.8.3.min.js'></script>`
  + **This Plguin**
   `<script src='https://syuemingfang-plugin.googlecode.com/git/js/plugin.js'></script>`
 2. **Usage**
  + **Format**  This Plugin accepts settings from an object of key/value pairs.
   `$(selector).plugin({key: value...})`
  + **Example**
     + `$('button').plugin({on: 'click'})`
 3. **Set** copy code from the <head> and </head> tags and paste it on your page.

        <script>
        $(document).ready(function(){
          //Usage
        });
        </script>

****************************************************************************************************/
;(function($){
 $.fn.plugin=function(opt){
  var f=$.fn.plugin;
  $.extend(f, {
    version: '0.1.0.0',
    //!## Options
    set: {
      on: 'click', //!+ **on** an object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
      str: 'Hello World' //!+ **str** a message
    },
    //!## API
    log: function(str){
      //!+ **log(str)** outputs a message to the web console.
      console.log(str)
    },
  }); 
  //!## Function
  var func=function(that, set){
    var initialize=function(){
      //!+ **initialize()**
      // Declare
      // Constructor
      that.on(set.on, function(){
         start();
      });
    }
    var start=function(){
      //!+ **start()**
      // Declare
      // Constructor
      f.log(set.str);
      setTimeout(start, 1000);
    }
    initialize();
  }
  return this.each(function(){ 
    var set=$.extend(f.set, opt);
    func($(this), set);
  });
 }
})(jQuery);