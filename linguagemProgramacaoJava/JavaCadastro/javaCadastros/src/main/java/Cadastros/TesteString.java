package Cadastros;

public class TesteString {
  private static void aumentarLetras(String frase) throws NullPointerException {
    String novaFrase;
    novaFrase = frase.toUpperCase();
    System.out.println("Frase antiga: " + frase);
    System.out.println("Frase nova: " + novaFrase);

  }

  public static void main(String[] args) {
    try {
      aumentarLetras(null);
    } catch (NullPointerException e) {
      System.out.println("Erro: " + e.getMessage());
    }
  }
  
}
