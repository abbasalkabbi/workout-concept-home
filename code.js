const loading=document.querySelector('.loading')

window.addEventListener('load',()=>{
   
   
   loading.style.opacity='0';
}
);
window.addEventListener('offline', ()=>{
    loading.style.opacity='1';
});
window.addEventListener('online', ()=>{
    loading.style.opacity='0';
});