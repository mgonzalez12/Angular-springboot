package com.springboot.api.apiRest.models.services;

import com.springboot.api.apiRest.models.dao.IClienteDao;
import com.springboot.api.apiRest.models.entity.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ClienteServiceImpl implements IClienteService{

    @Autowired
    private IClienteDao clienteDao;

    @Override
    @Transactional
    public List<Cliente> findAll() {
        return (List<Cliente>) clienteDao.findAll();
    }
}
