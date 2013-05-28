/*
 * jQuery srt
 *
 * version 0.1 (November 28, 2008)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *//*
  usage:
    <video src="example.ogg" id="examplevideo" />
    <div class="srt" data-video="examplevideo" data-srt="example.srt"></div>

  jquery.srt.js will try to load subtitles in all elements with 'srt' class.
  'data-video' atribute is used to link to the related video,
  if no data-srt is provided, the contents of the div is parsed as srt.
*/$(document).ready(function(){function e(e){var t=0;if(e){var n=e.split(":");for(i=0;i<n.length;i++)t=t*60+parseFloat(n[i].replace(",","."))}return t}function r(e){return e.replace(/^\s+|\s+$/g,"")}function u(u){var a=u.attr("data-video"),f=u.text();u.text("");f=f.replace(/\r\n|\r|\n/g,"\n");var l={};f=r(f);var c=f.split("\n\n");for(s in c){st=c[s].split("\n");if(st.length>=2){n=st[0];i=r(st[1].split(" --> ")[0]);o=r(st[1].split(" --> ")[1]);t=st[2];if(st.length>2)for(j=3;j<st.length;j++)t+="\n"+st[j];is=e(i);os=e(o);l[is]={i:i,o:o,t:t}}}var h=-1,p=setInterval(function(){var e=document.getElementById(a).currentTime,t=-1;for(s in l){if(s>e)break;t=s}if(t>0)if(t!=h){u.html(l[t].t);h=t}else l[t].o<e&&u.html("")},100)}$(".srt").each(function(){var e=$(this),t=e.attr("data-video");if(!t)return;var n=e.attr("data-srt");n?$(this).load(n,function(t,n,r){u(e)}):u(e)})});