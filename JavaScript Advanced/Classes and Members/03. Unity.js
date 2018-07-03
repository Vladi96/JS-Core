class Rat {
    constructor(name){
        this.name = name
        this.otherRat =[]
    }
    toString(){
        let result = `${this.name}\n`
        for (let rat of this.otherRat ) {
            result+=`##${rat}\n`
        }
        return result
    }
    unite(otherRat){
        if(otherRat instanceof Rat){
            this.otherRat.push(otherRat)
        }
    }
    getRats(){
        return this.otherRat
    }
}
let test=new Rat("Pesho")
console.log(test.toString())
console.log(test.getRats())