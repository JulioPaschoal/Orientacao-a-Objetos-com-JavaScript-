let pessoa = {
    nome: "Julio Paschoal",
    idade: 15,
    falar: function () {
        console.log("Oi, meu nome é Julio Paschoal");
    },
    aniversario() {
        this.idade += 1;
    },
    dizerIdade() {
        console.log("A minha idade é " + this.idade + " anos");
    },
    podeDirigir: function(){
        if(this.idade >= 18){
            console.log("Pode dirigir");
        }else{
            console.log("Ainda não pode dirigir");
        }
    }
}
