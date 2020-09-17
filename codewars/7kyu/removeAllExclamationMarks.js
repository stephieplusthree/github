//Description:

//Remove all exclamation marks from sentence except at the end.

//Examples

//remove("Hi!") == "Hi!"
//remove("Hi!!!") == "Hi!!!"
//remove("!Hi") == "Hi"
//remove("!Hi!") == "Hi!"
//remove("Hi! Hi!") == "Hi Hi!"
//remove("Hi") == "Hi"

//Answer

function remove(s){
    const remove = s.replace(/!+([^!])/g, '$1')
    return remove
}