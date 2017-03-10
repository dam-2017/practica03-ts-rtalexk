export class Cadena {
    private cadena: string;

    constructor(cadena: string) {
        this.cadena = cadena;
    }

    
    public get esPalindromo() : boolean {
        return this.isPalindrome();
    }
    public get vocales(): any {
        return this.countVocals();
    }
    public get letras(): number {
        return this.countLetters();
    }
    public get palabras(): number {
        return this.countWords();
    }
    
    private isPalindrome(): boolean {
        const mutedCad = this.cadena.split(' ').join('').split('').reverse().join('');
        return this.cadena.split(' ').join('') == mutedCad;
    }

    private countVocals(): any {
        let counter = { a: 0, e: 0, i: 0, o: 0, u: 0 };
        for (const cad of this.cadena) 
            if ('aeiou'.indexOf(cad) != -1) 
                counter[cad] = ++counter[cad];
        return counter;
    }
    
    private countLetters(): number {
        return +this.cadena.length;
    }
    
    private countWords(): number {
        return this.cadena.split(' ').length;
    }
}