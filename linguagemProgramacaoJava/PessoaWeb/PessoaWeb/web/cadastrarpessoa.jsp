<%-- 
    Document   : cadastrarpessoa
    Created on : 4 de mar. de 2023, 16:22:28
    Author     : allan
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.List"%>
<%@page import="Classes.Pessoa"%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="styles/padraotelacadastro.css">
        <script src="https://ajax.googleapis.com/ajax/libs/2.1.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.css" rel="stylesheet"></script>
    </head>
    <body>
        <div class="container">
            <form id="pessoa" action="receberdadospessoa.jsp" method="Post">
                <h3 clas=""text-center>cadastro de Pessoas</h3>
                <p></p>
                <label class="cabecalho" id="msg">
                    <%
                        if(request.getParameter("pmensagem") != null)
                        out.write(request.getParameter("pmensagem"));                    
                    %>                    
                </label>
                
                <fildset>
                    <label>Nome</label>
                    <div class="nomespace">
                        <input 
                            id=nomepessoa 
                            name="nomepessoa" 
                            placeholder="Informe o nome" 
                            type="text" 
                            required 
                            maxlength="40"
                            style="text-transform:uppercase"
                        >                      
                    </div>                    
                </fildset>
                <fildset>
                    <label>Email</label>
                    <div class="email">
                        <input 
                            id=email 
                            name="email" 
                            placeholder="Informe o email" 
                            type="email" 
                            required 
                            maxlength="50"
                        >                        
                    </div>
                </fildset><br>
                <div>
                    <div class="form-group col-md3 h-10">
                        <input type="submit" value="Cadastrar" class="btn btn-primary" onclick="enviaForm()" />
                    </div>
                    <div class="form-group col-md3 h-10">
                        <input type="reset" value="Cancelar" class="btn btn-danger"/>
                    </div>                    
                </div>
            </form>           
        </div>
        <script>
            function enviaForm(){
                document.forms[0].submit();    
            }
        </script>
        <script>
            function cancela() {
                document.getElementsByClassName("msg-popup2")[0].style.display = "none";
                
            }
            function mostraqrExclusao(pessoa){
                document.getElementsByClassName("msg-popup2")[0].style.display = "block";
                var link = document.getElementById("exclui");
                link.ref = "excluirpessoa.jsp?idpessoa=" + pessoa;
            }
        </script>
    </body>
</html>
