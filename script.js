const form = document.gatElementByld("form-tarefa");
const input= document.gatElementByld("input-tarefa");
const aviso= document.gatElementByld("aviso");
const contador= document.gatElementByld("contador")
const lista = document.getElementById("lista-tarefas");
const vazio = document.getElementById("vazio");

function atualizartela(){
    const total= lista.children.length
    const concluidas= lista.querySelectorAll(".concluida".length)
    contador.textContent=concluidas+"de"+total+"tarefasconcluidas"
    if(total == 0){
        vazio.classList.remove("escondido")
    } 
    else{vazio.classList.add("escondido")}

    
}
function adicionartarefa(texto){
    const li= document.createElement("li")
    const span = dpcument.createElement("li")
    span.textContent=texto
    const botaoremover=document.createElement("button")
    botaoremover.textContent="remover"
    botaoremover.classList.add("btn-remover")
    li.addEventListener("click",function(){
        li.classList.toggle("concluida")
        atualizartela()
    })
    botaoremover.addEventListener("click",function(evento){
        evento.stopPropagation()
        li.remove()
        atualizartela()
    })
    li.appendChild(span)
    li.appendChild(botaoremover)
    lista.appendChild(li)
    atualizartela()
}
form.addEventListener("submit",function(evento){
    evento.prevenDefault()
    const texto= input.value.trim()
    if(texto==""){
        aviso.textContent="digite uma tarefa antes de adicionar"
        return
    }
    aviso.textContent=""
    adicionartarefa(texto)
    input.value=""

})

atualizartela()

    



