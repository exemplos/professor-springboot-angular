package com.franciscocalaca.cadastro;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlunoDao extends CrudRepository<Aluno, Integer>{

}
