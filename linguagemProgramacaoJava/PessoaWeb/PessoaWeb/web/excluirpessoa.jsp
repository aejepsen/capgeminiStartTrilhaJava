<%-- 
    Document   : excluirpessoa
    Created on : 4 de mar. de 2023, 17:19:52
    Author     : allan
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page  import="Classe.Pessoa" %>

<% 
    int idpessoa = Integer.parseInt(request.getParameter("idpessoa"));
    Pessoa p = new Pessoa();
    p.setIdPessoa(idpessoa);
    if (p.excluirpessoa()) {
        response.sendRedirect("consultarpessoa.jsp?pmensagem=Pessoa removida com sucesso");
    }else {
        response.sendRedirect("consultarpessoa.jsp?pmensagem=Problemas ao excluir a pessoa");
    
    }

%>
