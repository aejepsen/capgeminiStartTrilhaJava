
public class Pessoa {

		public String nome, cpf, cnpj, RG, InscEstatual;
		public String situacaoPessoa;	

		public String getNome() {
			return nome;
		}
		public void setNome(String nome) {
			this.nome = nome;
		}
		public String getCpf() {
			return cpf;
		}
		public void setCpf(String cpf) {
			this.cpf = cpf;
		}
		public String getCnpj() {
			return cnpj;
		}
		public void setCnpj(String cnj) {
			this.cnpj = cnj;
		}
		public String getRG() {
			return RG;
		}
		public void setRG(String RG) {
			this.RG = RG;
		}
		public String getInscEstatual() {
			return InscEstatual;
		}
		public void setInscEstatual(String inscEstatual) {
			InscEstatual = inscEstatual;
		}
		public String getSituacaoPessoa() {
			return situacaoPessoa;
		}
		public void setSituacaoPessoa(String situacaoPessoa) {
			this.situacaoPessoa = situacaoPessoa;
		}
		@Override
		public String toString() {
			return "Pessoa [nome=" + nome + ", cpf=" + cpf + ", cnpj=" + cnpj + ", RG=" + RG + ", InscEstatual="
			+ InscEstatual + ", situacaoPessoa=" + situacaoPessoa + "]";
		}
		
}
