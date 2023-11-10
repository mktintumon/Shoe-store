package com.bxnhub.web.entities;

public class QRCodeResponse {
    private String qrcodeUrl;
    private String secret;

    public QRCodeResponse(String qrcodeUrl ,String secret) {
        this.qrcodeUrl = qrcodeUrl;
        this.secret = secret;
    }

    public String getQrcodeUrl() {
        return qrcodeUrl;
    }

    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
    }

    public void setQrcodeUrl(String qrcodeUrl) {
        this.qrcodeUrl = qrcodeUrl;
    }
}
