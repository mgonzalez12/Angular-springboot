package com.springboot.api.apiRest.models.dao;

import com.springboot.api.apiRest.models.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IClienteDao extends JpaRepository<Cliente,Long> {

}
