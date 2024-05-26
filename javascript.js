function calcular(tipo, valor){
    //verificar o tipo
    if(tipo === 'acao'){
        if(valor === 'ac'){
            document.getElementById('visor').value = ''
        }
        
        if(valor === 'oposto'){
           var neg = eval(document.getElementById('visor').value)
           document.getElementById('visor').value = (neg * -1)
        }

        if(valor === 'porcentagem'){
            var perc = eval(document.getElementById('visor').value)
            document.getElementById('visor').value = (perc/100)
        }

        if(valor === '/' || valor === '*' || valor === '-' || valor === '+'){
            document.getElementById('visor').value += valor 
        }

        if(valor === '='){
            var resultado = eval(document.getElementById('visor').value)
            document.getElementById('visor').value = resultado
        }
        

    } else if(tipo === 'numero'){
        //imprimir o numero clicado na tela
        document.getElementById('visor').value += valor
    }

}