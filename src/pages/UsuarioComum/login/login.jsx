import React,{useState} from "react";
import './login.css';
// import ModalForgetPassword, {ToggleModalForgot} from "../forgotPassword/forgotPassword";
// Importando o icon do botão de fechar o modal.
import iconModalClose from '../../../assets/iconLoginModalClose.svg';
import {BoxInfoModal} from "../../../components/boxInfo/boxInfo";
import { Link } from "react-router-dom";

 {/*Função de fechar o modal. Ele vai adicionar a classe hide na div loginCentralize, 
que vai fazer a div sumir e aparecer, quando o botão escolhido for clicado.*/}
export function ToggleModal()
{
    const loginCentralize = document.querySelector("#loginCentralize");
    loginCentralize.classList.toggle("hideLogin");
    const back = document.querySelector("#backLogin");
    back.classList.toggle("hideLogin");
}


function Login()
{

    return(
        <div id="backLogin" className="hideLogin">
            
            <div id="loginCentralize" className="hideLogin" >

                <div id="loginContainer">

                    <div>
                        <button id = "closeModal" onClick={ToggleModal}>
                            <img src={iconModalClose} alt="icone para fechar o modal, tem formato de X"/>
                        </button>
                    </div>
                                       
                    <BoxInfoModal title={'Login'} idBox='titleBoxBranco' idModal='loginBox' idDivisor='divisorBranco'></BoxInfoModal>
                    <div id="loginBody">

                        <div className="loginInputs">
                            <span className="nameInput">Usuário</span>
                            <input type="email"/>
                        </div>

                        <div className="loginInputs">
                            <span className="nameInput">Senha</span>
                            <input type="password"/>
                            <Link
                            to='/esqueciSenha'>
                                <span className="forgotPassword">Esqueci minha senha</span> 
                            </Link>
                        </div>
                        
                        <div id="loginButtons">
                            <button id="loginButtonSignIn">ENTRAR</button>
                            <Link id="loginButtonSignUp" to='/cadastroUsuario'
                                >Não possuo cadastro
                            </Link>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}

export default Login;