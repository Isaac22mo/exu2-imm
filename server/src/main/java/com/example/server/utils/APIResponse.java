package com.example.server.utils;

import lombok.Data;
import org.springframework.http.HttpStatus;
import tools.jackson.databind.deser.jdk.ObjectArrayDeserializer;

@Data
public class APIResponse {
    private String message;
    private Object data;
    private HttpStatus status;
    private boolean error;

    public APIResponse(String message, HttpStatus status) {
        this.message = message;
        this.status = status;
    }

    public APIResponse(boolean error, HttpStatus status, String message) {
        this.error = error;
        this.status = status;
        this.message = message;
    }

    public APIResponse(Object data, HttpStatus status, String message) {
        this.data = data;
        this.status = status;
        this.message = message;
    }
}
