import java.util.LinkedList;
public class LinkedListCarros {

	    public static void main(String[] args) {

	    String carro;
	    LinkedList<String> cars = new LinkedList<String>();
	    cars.add("Volvo");
	    cars.add("BMW");
	    cars.add("Ford");

			/*
			 * addFirst() - adiciona um elemento no início da lista
			 * addLast() - adiciona um elemento no final da lista
			 * getFirst() - retorna o primeiro elemento da lista
			 * getLast() - retorna o último elemento da lista
			 * removeFirst() - remove o primeiro elemento da lista
			 * removeLast() - remove o último elemento da list
			 */
	    
	    // incluindo Mazda no inicio
	    cars.addFirst("Mazda");
	    System.out.println(cars);
	    
	    // Incluindo Bugatti no fim
	    cars.addLast("Bugatti");
	    System.out.println(cars);
	    
	    carro = cars.get(3);
	    System.out.println(carro);
	    
	    // removendo Mazda
	    cars.removeFirst();
	    System.out.println(cars);    
	    // pega o primeiro
	    System.out.println(cars.getFirst());
	    System.out.println(cars);
	    }
	    
}