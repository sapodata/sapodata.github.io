/*!
\file
\brief Main JS file
*/

//Shortcuts
var log = console.log;

//Global constants
const MAX_PAGE = 3;

//Global vars
var Current_Page = 1;

/*!
\brief Get direction of mousewheel event
*/
function mw_direction(Event){
  var Delta = Event.originalEvent.wheelDelta;

  if (Delta<0)
    return "down";

  return "up";
}

/*!
\brief Go to next page horizontally
*/
function go_next_page(){
  if (Current_Page==MAX_PAGE)
    return;

  Current_Page++;
  var Scroll_Left = (Current_Page-1)*window.innerWidth + "px";
  //log(Scroll_Left);

  $("html,body").animate({ scrollLeft:Scroll_Left });
  log("Current page:",Current_Page);
}

/*!
\brief Go to prev page horizontally
*/
function go_prev_page(){
  if (Current_Page==1)
    return;

  Current_Page--;
  var Scroll_Left = (Current_Page-1)*window.innerWidth + "px";
  //log(Scroll_Left);

  $("html,body").animate({ scrollLeft:Scroll_Left });
  log("Current page:",Current_Page);
}

//PROGRAMME ENTRY POINT=========================================================
/*!
\brief Main function
*/
async function main(){

  //Commented-out, not to spoil the vertical scrollbar
  /*$(window).on("mousewheel",function(Event){
    if (mw_direction(Event)=="down")
      go_next_page();
    else
    if (mw_direction(Event)=="up")
      go_prev_page();
    else
      log("Code doesn't get here!");
  });*/
}

$(main);
//EOF