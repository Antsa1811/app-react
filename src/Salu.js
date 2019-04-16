import React, {Component} from 'react';

class Salu extends Component{

    constructor(){
        super();
        this.state= {
            total:0
        }
    }
    
    modal(){
        var btnModal=document.getElementById('btnModal');       
    }

    console(){
        return console.log('Vous aver cliquer sur le boutton');
    }

    couleur(){
            var textC= document.getElementById('textC');
            textC.style.color="red";
    }
    nocouleur(){
        var textC= document.getElementById('textC');
        textC.style.color="black";
        
    }

    couleurText(){
        var textC= document.getElementById('textC');
        textC.style.color="green";
        textC.style.fontSize="50px";        
    }
    
    calSomme(){
        var nb1=document.getElementById('nb1').value;
        var nb2=document.getElementById('nb2').value;
      
        if(isNaN(nb1) || isNaN(nb2) || nb1 == "" || nb2=="" ){
           alert("veuiller entrer des chiffres");
        }else{
            this.setState({
                total:parseInt(nb1)+parseInt(nb2)
            });  
        }
          
            
           
    }


    render (){
        return (
            <div className="container">
               
             <h1 className="title" >Formulaire d'inscription numero 1 </h1>  
                    <input className="input" type="text" placeholder="Teste de React" />
                    <input className="input" type="text" placeholder="Teste de React" />
                    <input className="input" type="text" placeholder="Teste de React" />
                    <button>Lancer</button>
                    <button id="btn-console" onClick={()=>this.console()} >Afficher une console</button>
                            
            <div className="modal is active" >
                <div className="modal-background" ></div>
                <div className="modal-content" >
                    <p>lorem sjkdqjk jkqsjd skqjdklqsjdkl </p>
                </div>
                <button className="modal-close is-large" aria-label="close" ></button>
            </div> 
        <button onClick={()=>this.modal()} id="btnModal">lancer le modal</button> 


                  <p class="title" id="textC" > Texte de couleur </p>
                  <button onClick={()=> this.couleur()} >Changer dde couleur rouge</button>
                  <button onClick={()=> this.nocouleur()} >Enlever le couleur</button>
                  <button onClick={()=> this.couleurText() }>Changer de couleur vert est agrandir le texte</button>


            <h1 class="title"> Calcule de somme </h1>
                <div className="field" >
                    <label className="label" >Le premier chiffre</label><input id="nb1" type="text" className="input" placeholder="Entrer votre premier texte" required="require"/>
                    <label className="label" >Le deuxieme chiffre</label><input id="nb2" type="text" className="input" placeholder="Entrer le deuxieme chiffre" required="require"/>
                    <button onClick={()=>this.calSomme() } className="button is-primary" >Calculer</button>
                    <br/>
                    <br/>
                    <p className="notification is-success">La réponse du calcule : {this.state.total}   </p>
                </div>

            </div>
        );
    }
}

export default Salu;