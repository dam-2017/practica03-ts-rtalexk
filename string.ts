export class Cadena {
    private cadena: string;

    constructor(cadena: string) {
        this.cadena = cadena;
    }

    public get cad(): string {
        return this.cadena;
    }    
    
    public get esPalindromo() : boolean {
        return this.isPalindrome(this.cadena);
    }
    public get vocales(): any {
        return this.countVocals(this.cadena);
    }
    public get letras(): number {
        return this.countLetters(this.cadena);
    }
    public get palabras(): number {
        return this.countWords(this.cadena);
    }
    public esPalindromoCad(cad: string): boolean {
        return this.isPalindrome(cad);
    }
    public vocalesCad(cad: string): any {
        return this.countVocals(cad);
    }
    public letrasCad(cad: string): number {
        return this.countLetters(cad);
    }
    public palabrasCad(cad: string): number {
        return this.countWords(cad);
    }
    
    private isPalindrome(cad: string): boolean {
        const mutedCad = cad.split(' ').join('').split('').reverse().join('');
        return this.cadena.split(' ').join('') == mutedCad;
    }

    private countVocals(cadena: string): any {
        let counter = { a: 0, e: 0, i: 0, o: 0, u: 0 };
        for (const cad of cadena) 
            if ('aeiou'.indexOf(cad) != -1) 
                counter[cad] = ++counter[cad];
        return counter;
    }
    
    private countLetters(cad: string): number {
        return +cad.length;
    }
    
    private countWords(cad: string): number {
        return cad.split(' ').length;
    }
}