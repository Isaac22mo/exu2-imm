package com.example.server.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.server.dto.SumaDto;
import com.example.server.service.SumaService;
import com.example.server.utils.APIResponse;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/suma")
public class SumaController {
    private final SumaService service;

    public SumaController(SumaService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<?> calcular (@RequestBody SumaDto dto){
        double result = service.SumaCalculator(dto.getNum1(), dto.getNum2());
        APIResponse response = new APIResponse(result, HttpStatus.OK, "Calculdo suma");
        return ResponseEntity.ok(response);
    }
    
}



