function calcular(tipo, valor) {
    
    if(tipo === 'acao') {
        if(valor === 'c') {
            document.getElementById('resultado').value = '';
        }
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor;
        }
        
        if(valor === 'r') {
            var vl_campo = eval(document.getElementById('resultado').value);
            eval(document.getElementById('resultado').value = Math.sqrt(vl_campo));
        }

        if(valor === '=') {
            var vl_campo = eval(document.getElementById('resultado').value);
            document.getElementById('resultado').value = vl_campo;
        }

    } else if(tipo === 'valor') {
        var vl_campo = document.getElementById('resultado').value;
        document.getElementById('resultado').value += valor;
    }
}