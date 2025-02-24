import installRecentVersionOfGit from "./assets/installRecentVersionOfGit.svg";
import checkGitVersion from "./assets/checkGitVersion.svg";
import configureGitNameEmail from "./assets/configureGitNameEmail.svg";
import configureGitIfGithubIsPrivate from "./assets/configureGitIfGithubIsPrivate.svg";
import changeBranchToMain from "./assets/changeBranchToMain.svg";
import branchForMerge from "./assets/branchForMerge.svg";
import gitGettingNameAndEmail from "./assets/gitGettingNameAndEmail.svg";
import showSshKey from "./assets/showSshKey.svg";
import createNewSshKey from "./assets/createNewSshKey.svg";
import checkAlgorithmKeyEd2551 from "./assets/checkAlgorithmKeyEd2551.svg"
import gitClone from "./assets/gitClone.svg";
import gitRemoteV from "./assets/gitRemoteV.svg";
import gitStatus from "./assets/gitStatus.svg";
import gitAdd from "./assets/gitAdd.svg";
import gitAdd2 from "./assets/gitAdd2.svg";
import gitCommitM from "./assets/gitCommitM.svg";
import gitLog from "./assets/gitLog.svg";
import gitPush from "./assets/gitPush.svg";
import gitPushOriginMain from "./assets/gitPushOriginMain.svg";
import gitConfigGlobalCoreEditorCodeWait from "./assets/gitConfigGlobalCoreEditorCodeWait.svg";
import gitCommit from "./assets/gitCommit.svg";

export const sintaxGitArray = [
    {id: 1, categoria: "instalacao e configuracao do git", texto: "Eu instalo a versao mais recente do git", sintax: "veja a minha sintax", imagem: installRecentVersionOfGit},
    {id: 2, categoria: "instalacao e configuracao do git", texto: "Eu verifico qual a versao do git", sintax: "veja a minha sintax", imagem: checkGitVersion},
    {id: 3, categoria: "instalacao e configuracao do git", texto: "Eu configuro o neme e email para que o git possa saber quem voce e vincular melhor ao seu repositorio do github", sintax: "veja a minha sintax", imagem: configureGitNameEmail},
    {id: 4, categoria: "instalacao e configuracao do git", texto: "Voce deve digitar este comando se o seu repositorio do github e privado", sintax: "veja a minha sintax", imagem: configureGitIfGithubIsPrivate},
    {id: 5, categoria: "instalacao e configuracao do git", texto: "Eu altero o branch padrao para main", sintax: "veja a minha sintax", imagem: changeBranchToMain},
    {id: 6, categoria: "instalacao e configuracao do git", texto: "Eu difino o comportamento padrao de reconciliacao de branch para mesclagem", sintax: "veja a minha sintax", imagem: branchForMerge},
    {id: 7, categoria: "instalacao e configuracao do git", texto: "Eu exibo o nome e email para verificar se a configuracao foi bem sucedida", sintax: "veja a minha sintax", imagem: gitGettingNameAndEmail},
    {id: 8, categoria: "instalacao e configuracao do git", texto: "Eu verifico se voce tem uma chave ssh do algoritmo Ed25519 ja instalada", sintax: "veja a minha sintax", imagem: checkAlgorithmKeyEd2551},
    {id: 9, categoria: "instalacao e configuracao do git", texto: "Eu crio uma nova chave ssh", sintax: "veja a minha sintax", imagem: createNewSshKey},
    {id: 10, categoria: "instalacao e configuracao do git", texto: "Eu exibo a chave ssh publica para voce colar no github", sintax: "veja a minha sintax", imagem: showSshKey},
    {id: 11, categoria: "clonagem clonar", texto: "Eu clono o github com a sua maquina local, para que voce possa enviar seus trabalhos para o seu repositorio github remoto", sintax: "veja a minha sintax", imagem: gitClone},
    {id: 12, categoria: "clonagem clonar", texto: "Eu exibo a url do repositorio que voce crio no github, que e o controle remoto da sua copia local e o nome da sua conexao remota", sintax: "veja a minha sintax", imagem: gitRemoteV},
    {id: 13, categoria: "floxo de trabalho", texto: "Eu Forneco informações sobre o estado atual do seu repositorio. eu mostro quais arquivos foram modificados, quais estao no estagio de preparacao e quais nao foram rastreados pelo Git", sintax: "veja a minha sintax", imagem: gitStatus},
    {id: 14, categoria: "floxo de trabalho", texto: "Eu adiciono o arquivo a area de preparacao no git, isto e, para receber coisas como commits", sintax: "veja a minha sintax", imagem: gitAdd},
    {id: 15, categoria: "floxo de trabalho", texto: "Eu adiciono todos arquivos a area de preparacao no git, isto e, para receber coisas como commits", sintax: "veja a minha sintax", imagem: gitAdd2},
    {id: 16, categoria: "floxo de trabalho", texto: "Eu commito o arquivo, isto e, avisar o que foi feito no arquivo", sintax: "veja a minha sintax", imagem: gitCommitM},
    {id: 17, categoria: "floxo de trabalho", texto: "Eu mostro o historico do repositorio, isto e, os commits que foram feitas quem os fez e a que tempo", sintax: "veja a minha sintax", imagem: gitLog},
    {id: 18, categoria: "floxo de trabalho", texto: "Eu enviou seu trabalho para o seu repositorio remoto", sintax: "veja a minha sintax", imagem: gitPush},
    {id: 19, categoria: "floxo de trabalho", texto: "Eu enviou seu trabalho para o seu repositorio remoto, que alem do main tem outas ramificacoes", sintax: "veja a minha sintax", imagem: gitPushOriginMain},
    {id: 20, categoria: "floxo de trabalho", texto: "Eu altero o editor de mensagem padrao, isto permite voce fazer commits no terminal ou no conforto do vs code", sintax: "veja a minha sintax", imagem: gitConfigGlobalCoreEditorCodeWait},
    {id: 21, categoria: "floxo de trabalho", texto: "No vs code eu abro o editor de mensagem", sintax: "veja a minha sintax", imagem: gitCommit},
];
