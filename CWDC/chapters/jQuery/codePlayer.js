/**
 * Project: UdemySchool.
 * By: Ronny Rosabal
 * Date: 7/17/15
 * Time: 2:08 PM
 * Content: javascript for Udemy project code player
 */

"use strict";

/**************************************
Table of Content
***************************************/

/*
* #GLOBAL VARIABLES
*  ~window
*  ~header
*  ~body
*
*
*
* #FUNCTIONS
*
*
*
* #OBJECTS
*
*
*
* #FUNCTION CALLS
*/



/**************************************
#GLOBAL VARIABLES
***************************************/

// ~window
var windowWidth = window.outerWidth;
var windowHeight = window.innerHeight;

// ~header
var toggleClass = document.getElementsByClassName('toggle');

// ~body
var codeContainer = document.getElementsByClassName('codeContainer');
var headerHeight = document.getElementById('headerContainer').offsetHeight;
var codeHeight = windowHeight - headerHeight;



/**************************************
#FUNCTIONS
***************************************/

$('.toggle').click(function(){

  $(this).toggleClass('selected');

  var activeDiv = $(this).html();

  $('#' + activeDiv).toggle();

  var showingDivs = $('.codeContainer').filter(function(){

    return($(this).css('display') != 'none');

  }).length;

  var width = 100 / showingDivs;

  $('.codeContainer').width(width + '%');


});

$('#runButton').click(function(){

  $('iframe').contents().find('html').html('<style>' + $('#cssCode').val() + '</style>' + $('#htmlCode').val());

  document.getElementById('resultFrame').contentWindow.eval($('#jsCode').val());//TODO: delete if uploading to online server

});



/**************************************
#OBJECTS
***************************************/



/**************************************
#FUNCTIONS CALLS
***************************************/

console.log(windowHeight);
console.log(headerHeight);
console.log(codeHeight);
for(var i = 0; i < codeContainer.length; i++){
  codeContainer[i].style.height = codeHeight + "px";
  console.log(codeContainer[i]);
}
console.log(windowWidth);