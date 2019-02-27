package com.franciscocalaca.cadastro;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/produto")
public class ProdutoService {
	
	@Autowired
	private ProdutoDao produtoDao;
	
	@RequestMapping(value="/list", method = RequestMethod.GET)
	public List<Produto> list(){
		List<Produto> result = new ArrayList<>();
		produtoDao.findAll().forEach(p -> {result.add(p);});
		return result;
	}

}
