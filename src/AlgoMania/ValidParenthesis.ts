/*
Dada uma string com apenas os seguintes caracteres '(', ')', '{', '}', '[', ']' determine se uma determinada string é válida.
Uma string é considerada válida se:
Caracteres de abertura devem ser fechadas pelo mesmo tipo. 
Abertura devem ser fechados com uma chave correspondente. Uma string vazia é considerada válida.

Exemplos:
Entrada: '[]'
Saída: True

Entrada: '[()]'
Saída: True

Entrada: '['
Saída: False

Entrada: '[('
Saída: False

Entrada: ')[('
Saída: False
*/
//O(n) - O(n)
class ValidParenthesis {

  validateParenthesis(value: string): boolean {
    let stack = [];
    let mapping = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
  
    for (let i = 0; i < value.length; i++) {
      if (!(value[i] in mapping && (stack.length > 0 && mapping[value[i]] == stack.pop())))
        stack.push(value[i]);
    }
    return stack.length == 0;
  }
}

export { ValidParenthesis };