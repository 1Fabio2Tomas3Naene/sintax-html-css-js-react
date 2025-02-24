import { sintaxGitArray } from "./sintaxArray";

export const allSintaxGit = () => {
    return sintaxGitArray
};

export const filterByTypedWordGit = (typedWordGit) => {
    return sintaxGitArray.filter((sintaxGitSintaxes) =>
        sintaxGitSintaxes.categoria.toLowerCase().includes(typedWordGit.toLowerCase()) ||
        sintaxGitSintaxes.texto.toLowerCase().includes(typedWordGit.toLowerCase())
    )
};
