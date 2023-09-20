let cins = prompt('cinsivizi daxil edin- ')
let yas = prompt('yasinizi daxil edin- ')
yas = Number(yas)


let cavab = cins === 'kisi' && yas > 18 ? 'kisi qeydiyyata alindi': 
            cins === 'qadin' && yas > 17 ? 'qadin qeydiyyata alindi' : 
            cins === 'kisi' && yas < 18 ? 'kisi qeydiyyata alinmadi!': 
            cins === 'qadin' && yas < 17 ? 'qadin qeydiyyata alinmadi!' : 
            'wrong'
            
            

console.log(cavab)

















