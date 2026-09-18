const o=new URLSearchParams(location.search).get('order');if(o)confirmationText.textContent=`Ordine demo ${o} registrato. Il pagamento reale non è stato eseguito.`;
