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
];
