
public class Individuo {

		private String nomePessoa;
		private int    idadePessoa;
		
		public String getNomePessoa() {
			return nomePessoa;
		}
		public void setNomePessoa(String nomePessoa) {
			this.nomePessoa = nomePessoa;
		}
		public int getIdadePessoa() {
			return idadePessoa;
		}
		public void setIdadePessoa(int idadePessoa) {
			this.idadePessoa = idadePessoa;
		}
		@Override
		public String toString() {
			return "Pessoa [nomePessoa=" + nomePessoa + ", idadePessoa=" + idadePessoa + "]";
		}
		
}
