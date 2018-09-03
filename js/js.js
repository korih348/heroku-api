var gradient = document.querySelector('.gradient-top');
var body = document.querySelector('.body');
var header = document.querySelector('.header');
var header_title = document.querySelector('.header-title');
var tarif_block = document.querySelector('.tarif_block');
var header_left_block = document.querySelector('.header_left_block');
var header_center_block = document.querySelector('.header_center_block');
var header_right_block = document.querySelector('.header_right_block');

setTimeout(()=>{
    gradient.remove(gradient);
    header_title.style.top = '50px';
},500)

setTimeout(()=>{
    tarif_block.style.bottom = '400px';
    tarif_block.style.opacity = 1;
},1000)

/*setTimeout(()=>{
    //body.style.overflow = 'auto';
},2000)*/

const left_block_toggle = (state) =>{
    if(state === true)
    {
        header.style.left = '100%'
        header_left_block.style.left = '0'
    }
    else{
        header.style.left = '0'
        header_left_block.style.left = '-100%'
    }
}
const center_block_toggle = (state) =>{
    if(state === true)
    {
        header.style.top = '-100%'
        header_center_block.style.top = 0
    }
    else{
        header.style.top = '0'
        header_center_block.style.top = '100%'
    }
}
const right_block_toggle = (state) =>{
    if(state === true)
    {
        header.style.left = '-100%'
        header_right_block.style.right = 0
    }
    else{
        header.style.left = 0
        header_right_block.style.right = '-100%'
    }
}
