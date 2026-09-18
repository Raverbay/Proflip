const file=document.getElementById('file'),out=document.getElementById('out');file.addEventListener('change',async()=>{const f=file.files[0];if(f)out.textContent=await f.text()});
