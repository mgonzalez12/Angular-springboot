package com.springboot.api.apiRest.models.services;

import com.springboot.api.apiRest.models.entity.Cliente;

import java.util.List;

public interface IClienteService {

    public List<Cliente> findAll();
}
