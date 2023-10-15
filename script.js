let img1 = document.querySelector("#n1")

let img2 = document.querySelector("#n2")

let img3 = document.querySelector("#n3")

let img4 = document.querySelector("#n4")

let span1 = document.querySelector('#s1')

let span2 = document.querySelector('#s2')

let span3 = document.querySelector('#s3')

let span4 = document.querySelector('#s4')



function bt(arg){
    
        img1.classList.add('hidden')
        img2.classList.add('hidden')
        img3.classList.add('hidden')
        img4.classList.add('hidden')

        span1.innerHTML=('brightness_1')
        span2.innerHTML=('brightness_1')
        span3.innerHTML=('brightness_1')
        span4.innerHTML=('brightness_1')

    switch(arg){

        case 1 :
            
           img1.classList.remove('hidden')
           span1.innerHTML=('radio_button_checked')
            
            break
        

        case 2 :

        
            img2.classList.remove('hidden')
        

            span2.innerHTML=('radio_button_checked')

            break

        case 3 :

            img3.classList.remove('hidden')

            span3.innerHTML=('radio_button_checked')
        
            break

        case 4 :

            img4.classList.remove('hidden')

            span4.innerHTML=('radio_button_checked')
            break

    }
}



