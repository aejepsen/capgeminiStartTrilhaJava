<%-- 
    Document   : receberdadospessoa.jsp
    Created on : 4 de mar. de 2023, 15:51:31
    Author     : allan
--%>
<%@page import="Classe.Pessoa" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%
    String vnomepessoa = request.getParameter("nomepessoa");
    String vemail      = request.getParameter("email");
    
    Pessoa pes = new Pessoa();
    pes.setNomePessoa(vnomepessoa);
    pes.setemail(vemail);
    
if(pes.IncluirPessoa()){
    response.sendRedirect("cadastrarpessoa.jsp?pmensagem=Pessoa cadastrada com sucesso");
    }else {
    response.sendRedirect("cadastrarpessoa.jsp?pmensagem=Problemas ao cadastrar pessoa");   
    }
%>


