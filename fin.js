function fincal(){
    i=0
    amount=document.getElementById('amount').value
    month=document.getElementById('month').value
    switch(month){
        case '12':
            var EMI=101*amount/1000
            break
        case '18':
            var EMI=72.75*amount/1000
            break
        case '24':
            var EMI=59.5*amount/1000
            break
        case '30':
            var EMI=51.25*amount/1000
            break
        case '36':
            var EMI=46*amount/1000
            break
    }
      document.getElementById('EMI').innerHTML =EMI
      EMI_table=document.getElementById('outputContainer')
      table=""
        while(amount>0){
            if(amount>EMI){
                i=i+1
                intrest=parseInt(amount*0.03)
                remaining=EMI-intrest
                amount=amount-remaining
                table=table+ i+" - "+amount+" - "+intrest+"<br>"
            }
            else{
                i=i+1
                intrest=parseInt(amount*0.03)
                remaining=EMI-intrest
                amount=amount-remaining
                table=table+ i+" - "+"("+amount+") - "+intrest+"<br>"
                
            }
            EMI_table.innerHTML = table;
        }
    
}