// Made for the public
// We thank you for showing interest :)
// We exist on Github at github.com/MovsisyanMher/

//#region Event handlers

// Track the mouse movement of the player
document.addEventListener("mousemove", onMUpdate, false);
// Track the mousewheel of the player
document.addEventListener("wheel", onWUpdate, false);
// Track clicks
document.addEventListener("mousedown", onMouse, false);

document.addEventListener("keydown", onKey, false);

document.addEventListener("paste", onPaste, false);


function onPaste(e)
{
    e.stopPropagation();
    e.preventDefault();
    data = e.clipboardData || window.clipboardData;
    // Input is the variable of your choice that becomes the clipboard text
    Input = data.getData("Text").replace(/\s/g,"");
}


// This gets hoisted
function onMUpdate(e)
{
    // Your logic goes here


    // Account the last recorded mouse position
    mouseLocation = [e.pageX, e.pageY];
}


// This gets hoisted
function onWUpdate(e)
{
    // e.deltaY = 3 for wheelup
    // e.deltaY = -3 for wheeldown
}


// This gets hoisted up per request
function onKey(e)
{
    
}


// This gets hoisted
function onMouse(e)
{
    
}


//#endregion Event handlers