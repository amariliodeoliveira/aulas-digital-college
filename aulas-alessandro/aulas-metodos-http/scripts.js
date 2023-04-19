const API_URL = "https://api.digitalcollege.com.br/";

function cadastrar() {
  fetch(API_URL + "veiculos", {
    method: "POST",
  });
}

function listar() {
  fetch(API_URL + "veiculos", {
    method: "GET",
  });
}

function editar() {
  fetch(API_URL + "veiculos", {
    method: "PUT",
  });
}

function excluir() {
  fetch(API_URL + "veiculos", {
    method: "DELETE",
  });
}
