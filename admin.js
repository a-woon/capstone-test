const admin = require("firebase-admin");

const type = "service_account";
const project_id = "bankingcapstone";
const private_key_id = "5818f11efd2b2ce92dd04f883b8c684fd48cdef4";
const private_key =
  "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDURoO9BoF4qNRA\n4d5v/Rj052T+ALBBYtQuDR7JFg5LSqOW5qhwSjussKLYgYw7tx95SNOmm6zxpiQ/\nhWOxtEmh8BB8BxfUy5RxcmpGFA5EHNyOWkJve45uUN6GH1zSHfvRC+MwFfutpjU+\n5wwGcxZR230Cb9F99OITMPEjuOPPMQITD4Pzy75ZCJKruDCqMpSPAw8o+KBzj/Fm\nzozZnmJS3cfmkn3sAOXccVhVSlWUgNCT3fLr+nBSoMWwE06H98rCK93pz2piTYcb\njyhwefBSyFHgzngQCNeL3OUAQEfxSPQPKv26M4uqB7XnwrSJNyhLf5dcSjF27/32\ngA9yus2lAgMBAAECggEAAbn1FlN4OBf/aeusWHLRgiRjoOE2jcGVAi7fIjmIsjoQ\nLIkBs7AW3ietm18qWc36do0OE5vOg0SbpNyb2/UgaC3ApJGWMwfY1Dde/+Tn3Mvz\nS0EWqztxBBqqRKL6qUbPJnsXROvY2Sex5SoR4feLpezIDn4EUSbts8RBIc4+JBA5\nKlPoI/YgdDjfy0PtsnaCCRtQ7WwG9PzAf26p/rqWgUOJcTOpUBuElLJ8i9dUOv/f\n8r+6desIaG+yKojTG7gyhtQ9eMJchSLLJU6S6I6hOzkjkfT/D42JB90/Ehspx/JA\n9+vSuhVX9BOPUX1BWY+AMD0Qw1pVRaB1Qml9rGuYgQKBgQD/cVHRLJkEEs5KgtjK\nU3mn2KrKiNtO0bTt5gVYwqJu3YzUKlQRlQherjjNAIQbZNZkhj3sQZoETDDBFWSl\nZp+Gu1sLUjuzxUqnsorRksgeUydG7PIEk11CBwi2HdFmvQSk97NwSqxZDwJbmq6H\n6v383g7crwuELX4awJM7/Ve5oQKBgQDUvRVeTv6n2vaNQYBRf3MKrQzYNBGcEmK0\npTYGwLr/iXf/Y1ar2bGX40L+ciHuJBaDxMZZcmzA0B0d8w/aVv3Z3hoqAc2yDUA3\nQcRbIDKkcM1UZHWoiVoiDg/Fh4tFiMhutRsGCTC52TaiUpEhLeejoLXkQw1i3BDr\n6x5BfWw9hQKBgQCiH88Y3qBjeHgbzH5Bs8dj411K3J+sn+agkzxTgHzNtqnaQt9G\npXtBdHwyiKBQLqjv9k+48k4Jaj4LXkOZws9/GMyJG/EugQqH8wauSuXecVJdbqeQ\nheNLs+EwjS5JcbBP77Kgk5RdleweLceWFmyLoHh4UlUR2DnQSudnzLxv4QKBgAlN\no4uWRMiuaK3QuX3W5v8GhlNGI6cBntNrjitJbmQSbO78NyQYxw1vYNSjxRwW8+0b\nQ9lRibP85ekTYhQYTc2jSt2fapFoxvAjriSWCeDrFe+k3QhbyVdH6iSnQs3tp2ZA\nAUiISls2Ro9esP4UddbQBmRPElzKZusKQy51/6/JAoGACvZ+UwoqFOqduQTpAP+e\nwVnBI512T3BTIXVebNS5amKipogZOqW3q3cF6DNIwr9NyLH9iwQZJ/1QPTOyrUnj\n/rUZZ5zQIqrdWIOAiV0w4DPbBu6Zxa14CvoGCFEBpdXUqY4gJ4WpjQRBBwhHwUJQ\nSbfXEgbVxM4AQHQZu+TvgKo=\n-----END PRIVATE KEY-----\n";
const client_email =
  "firebase-adminsdk-5f02o@bankingcapstone.iam.gserviceaccount.com";
const client_id = "114168139469896544716";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url =
  "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url =
  "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5f02o%40bankingcapstone.iam.gserviceaccount.com";

/* const type = "";
const project_id = "";
const private_key_id = "";
const private_key = ""
const client_email = "";
const client_id = "";
const auth_uri = "";
const token_uri = "";
const auth_provider_x509_cert_url = "";
const client_x509_cert_url = ""; */

// credential grants access to Firebase services
admin.initializeApp({
  credential: admin.credential.cert({
    type,
    project_id,
    private_key_id,
    private_key: private_key.replace(/\\n/g, "\n"),
    client_email,
    client_id,
    auth_uri,
    token_uri,
    auth_provider_x509_cert_url,
    client_x509_cert_url,
  }),
});

module.exports = admin;
