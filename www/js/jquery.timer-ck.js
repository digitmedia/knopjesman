/**
 * jquery.timer.js
 *
 * Copyright (c) 2011 Jason Chavannes <jason.chavannes@gmail.com>
 *
 * http://jchavannes.com/jquery-timer
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */(function($){$.timer=function(func,time,autostart){this.set=function(func,time,autostart){this.init=!0;if(typeof func=="object"){var paramList=["autostart","time"];for(var arg in paramList)func[paramList[arg]]!=undefined&&eval(paramList[arg]+" = func[paramList[arg]]");func=func.action}typeof func=="function"&&(this.action=func);isNaN(time)||(this.intervalTime=time);if(autostart&&!this.isActive){this.isActive=!0;this.setTimer()}return this};this.once=function(e){var t=this;isNaN(e)&&(e=0);window.setTimeout(function(){t.action()},e);return this};this.play=function(e){if(!this.isActive){e?this.setTimer():this.setTimer(this.remaining);this.isActive=!0}return this};this.pause=function(){if(this.isActive){this.isActive=!1;this.remaining-=new Date-this.last;this.clearTimer()}return this};this.stop=function(){this.isActive=!1;this.remaining=this.intervalTime;this.clearTimer();return this};this.toggle=function(e){this.isActive?this.pause():e?this.play(!0):this.play();return this};this.reset=function(){this.isActive=!1;this.play(!0);return this};this.clearTimer=function(){window.clearTimeout(this.timeoutObject)};this.setTimer=function(e){var t=this;if(typeof this.action!="function")return;isNaN(e)&&(e=this.intervalTime);this.remaining=e;this.last=new Date;this.clearTimer();this.timeoutObject=window.setTimeout(function(){t.go()},e)};this.go=function(){if(this.isActive){this.action();this.setTimer()}};if(this.init)return new $.timer(func,time,autostart);this.set(func,time,autostart);return this}})(jQuery);