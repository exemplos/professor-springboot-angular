package com.franciscocalaca.cadastro;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaDao extends CrudRepository<Pessoa, Integer>{

}
