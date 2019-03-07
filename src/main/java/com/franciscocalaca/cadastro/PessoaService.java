package com.franciscocalaca.cadastro;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "/pessoa")
public class PessoaService {

	@Autowired
	private PessoaDao pessoaDao;
	
	@RequestMapping(value="/list", method = RequestMethod.GET)
	public List<Pessoa> list() {
		List<Pessoa> result = new ArrayList<>();
		pessoaDao.findAll().forEach(p -> {result.add(p);});
		return result;
	}
	
	//TODO fiz ctrl+c ctrl+v, corrigir
	@RequestMapping(value="/save", method = RequestMethod.POST)
	public void save(@RequestBody Pessoa pessoa) {
		pessoaDao.save(pessoa);
	}
	
	@RequestMapping(value="/delete/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("id") Integer id) {
		pessoaDao.deleteById(id);
	}
}















