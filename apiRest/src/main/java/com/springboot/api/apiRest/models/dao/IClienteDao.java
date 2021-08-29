package com.springboot.api.apiRest.models.dao;

import com.springboot.api.apiRest.models.entity.Cliente;
import org.springframework.data.repository.CrudRepository;

public interface IClienteDao extends CrudRepository<Cliente,Long> {

}
