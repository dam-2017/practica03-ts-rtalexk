export class Numero {
    private numero: number;

    constructor(numero: number) {
        this.numero = numero;
    }

    
    public get num() : number {
        return this.numero;
    }
    

    public sumar(items: number): number {
        return this.numero + items;
    }
    
    public sumarArray(items: Array<number>): number {
        return this.numero + items.reduce((total, num) => {
            return total + num;
        });
    }

    public restar(items: number): number {
        return this.numero - items;
    }

    public restarArray(items: Array<number>): number {
        return this.numero - items.reduce((total, num) => {
            return total + num;
        });
    }

    
    public factorialNum(num: number) : number {
        return this.calcFactorial(num);
    }
    public get factorial() : number {
        return this.calcFactorial(this.numero);
    }
    private calcFactorial(num: number): number {
        return num == 1 ? num : num * this.calcFactorial(num - 1);
    }

    public get primo(): boolean {
        let n = this.numero;
        let i = 2;
        for (; n % i != 0 && i < n; i++);
        return n == i;
    }
    public primoNum(num: number): boolean {
        let n = num;
        let i = 2;
        for (; n % i != 0 && i < n; i++);
        return n == i;
    }
}