/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Classes;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


public class Pessoa {
    
    private int idPessoa;
    private String nomePessoa;
    private String email;

    public boolean incluirPessoa(){
        
        String sql = "insert into pessoa ";
               sql += " (nomepessoa, email) ";
               sql += " values(?,?); ";
        Connection con = Conexao.conectar();
        
        try {
            PreparedStatement stmt = con.prepareStatement(sql);
            stmt.setString(1, this.nomePessoa);
            stmt.setString(2, this.email);
            stmt.execute();        
        }catch (SQLException ex){
            System.out.println("Erros " + ex.getMessage() + sql);
            return false;     
        }
        return true;
    }

    public boolean alterarPessoa(Pessoa p) {
        
        Connection con = Conexao.conectar();
        
        String sql = "update pessoa ";
               sql += " set nomepessoa = ?, ";
               sql += " email = ? ";
               sql += " where idpessoa = ? ";
        
//        open();
//        stmt = con.prepareStatement("update Pessoa set nomepessoa = ?, email = ? where idPessoa = ?");
        try{
            PreparedStatement stmt = con.prepareStatement(sql);
            stmt.setString(1, this.nomePessoa);
            stmt.setString(2, this.email);
            stmt.setInt(3, this.idPessoa);
            stmt.execute();
        }catch (SQLException ex) {
            System.out.println("Erro: " + ex.getMessage());
            return false;
        }
        return true;
    }

    public boolean excluirPessoa(Pessoa p) {

//        open();
//        stmt = con.prepareStatement("delete from Pessoa where idPessoa = ?");
//        stmt.setInt(1, p.getIdPessoa());
//        stmt.execute();
//        stmt.close();
//        close();

        Connection con = Conexao.conectar();
        String sql = "delete from pessoa ";
               sql += "where idpessoa = ?";
               
        try {
            PreparedStatement stmt = con.prepareStatement(sql);
            stmt.setInt(1, this.idPessoa);
            stmt.execute();
        }catch (SQLException ex) {
            System.out.println("Erro: " + ex.getMessage());
            return false;
        }
        return true;
    }
    
    
    // retornando um objeto
    public Pessoa consultarPessoaIndividual(int cod) {
//        open();
//        stmt = con.prepareStatement("select * from pessoa where idpessoa = ? ");
//        stmt.setInt(1, cod);

        Connection con = Conexao.conectar();

        String sql = "select idpessoa, nomepessoa, email ";
               sql += " from pessoa";
               sql += " where idpessoa = ? ";   
               
        Pessoa colab = null;        

        try {
            PreparedStatement stmt = con.prepareStatement(sql);
            stmt.setInt(1, cod);
            ResultSet rs = stmt.executeQuery();
            if(rs.next()){
                Pessoa pes = new Pessoa();
                pes.setIdPessoa(rs.getInt("idpessoa"));
                pes.setNomePessoa(rs.getString("nomepessoa"));
                pes.setEmail(rs.getString("email"));   
            }         
        }
        catch (SQLException ex) {
            System.out.println("Erro: " + ex.getMessage());
        }
        return colab;       
    }

    public List<Pessoa> ListarPessoas() {
        
        List<Pessoa> lista = new ArrayList<>();
        Connection con = Conexao.connectar();
        
        String sql  = "select idpessoa, nomepessoa, email  ";
               sql += " from pessoa, ";
               sql += " order by 2";
        
        try {
            PreparedStatement stmt = con.prepareStatement(sql);
            ResultSet rs = stmt.executeQuery();
            while (rs.next()){
                Pessoa pessoa = new Pessoa();
                pessoa.setIdPessoa(rs.getInt("idpessoa"));
                pessoa.setNomePessoa(rs.getString("nomepessoa"));
                pessoa.setEmail(rs.getString("email"));
                lista.add(pessoa);           
            }

        } catch (Exception ex) {
            System.out.println("Erro: " + ex.getMessage());
        }
        return lista;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getIdPessoa() {
        return idPessoa;
    }

    public void setIdPessoa(int idPessoa) {
        this.idPessoa = idPessoa;
    }

    public String getNomePessoa() {
        return nomePessoa;
    }

    public void setNomePessoa(String nomePessoa) {
        this.nomePessoa = nomePessoa;
    }
    
}