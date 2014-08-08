


Google Analytics Widget
========================
The Google Analytics Widget allows you to display a nice Widget when the user deactivates Google Analytics.

Show Don't Tell
===============
 [Demo & usage ](http://secra.github.io/ga-widget/example/index.html)


How To Install It
=============


You can install it via script

 ``` html
 <script type="text/javascript" src="gaSecraWidget.js"></script>;
 ```

or install it via bower


```bash
bower install ga-widget
```

How To Use It
=============

###1. Add the "ga-secra-widget" class to the link

 ```html
 <!--
    You have the possibility to add a text to give the user help over an "data-text" attribute.<br>
    the class "ga-secra-widget" is needed, because otherwise the widget will fail.
    -->
    <a href="#" data-text="here you can tell why you need Google Analytics"
                class="ga-secra-widget">Disable Google Analytics</a>
```
###2. Style It

 ```css

    /* The Popup Container*/
    .ga-secra-widget-cont {

    }

    /* The Popup Container if Google Analytics hasn't been deactivated*/
    .activated {

    }

    /* The Popup Container if Google Analytics has been deactivated*/
    .deactivated {

    }

    /* The Popup Container if Google Analytics is already deactivated*/
    .already {

    }

    /* The "Yes" Button*/
    .yes_button {

    }

    /* The "No" Button*/
    .no_button {

    }

    /* The "OK" Button*/
    .ok_button {

    }
```


###3. You're done !
Options
========

By now the only thing that can be configured are the Appereance over CSS and <br>the help text over the "data-text" Attribute in the link. <br>By default the help text is empty.


License
=======

Copyright (c) 2014 SECRA GmbH.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
