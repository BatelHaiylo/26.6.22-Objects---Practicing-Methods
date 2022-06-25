class Person{
    constructor(name,age,height,width,gender,isReligious,ethnicity){
        this.name = name
        this.age = age
        this.height = height
        this.width = width
        this.gender = gender
        this.isReligious = isReligious
        this.ethnicity = ethnicity
    }
    genderAdjustments(color) {
        switch(this.gender){
            case "female":
                document.body.innerText +="Who run the world?"
                return document.body.style.backgroundColor = `${color}`
            case "male":
                document.body.innerText +="Mans worls"
                return document.body.style.backgroundColor = `${color}`
            case "Transgender":
                document.body.innerText +="male or female it do make no diffrens - i stop the world"
                return document.body.style.backgroundColor = `${color}`
            case "non-binary":
                document.body.innerText +="אל תכלאוני בשום כלוב"
                return document.body.style.backgroundColor = `${color}`
            case "agender":
                document.body.innerText +="you are who you are"
                return document.body.style.backgroundColor = `${color}`
        }
    }
}
class Mommy extends Person{
    constructor(name,age,height,width,gender,isReligious,ethnicity,status,numOfKids,isAwsome){
        super(name,age,height,width,gender,isReligious,ethnicity)
        this.status  = status
        this.numOfKids = numOfKids
        this.isAwsome = isAwsome
    }
    dearMama(){
        switch(this.isAwsome){
            case true:
                return document.body.innerHTML +=`\n <h1>Dear Mama</h1>
                <img src="https://i.pinimg.com/564x/c8/f4/e9/c8f4e9197f4dfc4f1c367ecad942e3e4.jpg" alt="i love you mamo" style="width:vw;">`
            case false:
                return document.body.innerHTML +=`\n <h1>Im Sorry Mama</h1>
                <img src="https://i.pinimg.com/564x/22/73/7c/22737cbf83f38b1ec759b547f8491a3d.jpg" alt="i love you mamo" style="width:vw;">`
        }
    }
    disassembly(){
        for (const [key, value] of Object.entries(this)) {
            console.log(`${key}: ${value}`);
        }
    }
}

const myMommy = new Mommy( 'Pheleg Smany Haiylo',50,1.64,70,'female',true,'Ethiopian','married',7,true)
const sun = new Person( 'Sun Monro',28,1.79,82,'non-binary',false,'Astonian')
console.log(myMommy)
myMommy.dearMama()
console.log(myMommy.genderAdjustments("green"))

console.log(Object.assign(myMommy,sun));
console.log(Object.create(sun));
myMommy.disassembly()
console.log(Object.hasOwn(sun, 'status'));
console.log(Object.hasOwn(sun, 'height'));


  
