
type MenuOptions = '' |'all' | 'dog' | 'cat' | 'fishes'

export const createMenuObject= (activeMenu:MenuOptions)=>{

  let returnMenu = {
    all:false,
    dog:false,
    cat:false,
    fishes:false
  }


if( activeMenu !== '' ) {
 returnMenu[activeMenu] = true 
}


return returnMenu
}