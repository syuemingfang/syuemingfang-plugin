


# Plugin jQuery Plugin
  a demo plugin for jQuery. 

  CDN: `https://syuemingfang-plugin.googlecode.com/git/js/plugin.js`

  [GitHub project](https://github.com/syuemingfang/syuemingfang-plugin)

**************************************************************************************************


+ Version: 0.1.0.0
+ Copyright © 2013 [Syue](mailto:syuemingfang@gmail.com). All rights reserved.
+ Date: *Thu Aug 29 2013 11:16:29 GMT+0800 (Central Standard Time)*

## Examples
 1. **Standard** [Power by Cinderella](http://html.cxm.tw/?url=https://raw.github.com/syuemingfang/syuemingfang-plugin/master/example.html)
 2. **Debug** [Power by jsPipe](http://jspipe.cxm.tw/?url=http://html.cxm.tw/index.php?url=https://raw.github.com/syuemingfang/syuemingfang-plugin/master/example.html)

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
 3. **Set** copy code from the `<head>` and `</head>` tags and paste it on your page.

        <script>
        $(document).ready(function(){
          //Usage
        });
        </script>

**************************************************************************************************
 
## Options
+ **on** an object in which the string keys represent one or more space-separated event types and optional namespaces, and the values represent a handler function to be called for the event(s).
+ **str** a message
 
****************************************************************************************************
## API
+ **log(str)** outputs a message to the web console.
 
****************************************************************************************************
## Function
+ **initialize()**
+ **start()**