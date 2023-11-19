export const baseSentenceLabels = {
    minSentence: {
        label: "Pena mínima",
        years: "Anos",
        months: "Meses",
        days: "Dias"
    }, 
    maxSentence: {
        label: "Pena máxima",
        years: "Anos",
        months: "Meses",
        days: "Dias"
    },
    calculationTypes: {
        label: "Tipo de Cálculo",
        minimum: 'Calcular a partir da pena mínima.',
        average: 'Calcular a partir do intervalo entre a pena mínima e a máxima.',
        maximum: 'Calcular a partir do intervalo entre a pena mínima e a média entre elas.'
    },
    circumstancesWeight: {
        label: "Peso das Circunstâncias Judiciais",
        numerator: "Numerador",
        denominator: "Denominador"
    },
    defaultWeights: {
        weightOne: "Peso 1/8",
        weightTwo: "Peso 1/6",
        weightThree: "Peso Personalizado"
    },
    judicialCircumstances: {
        label: "Circunstâncias Judiciais Desfavoráveis",
        criminalRecord: "Antecedentes",
        socialConduct: "Conduta Social",
        personality: "Personalidade",
        culpability: "Culpabilidade",
        crimeMotive: "Motivo do Crime",
        crimeCircumstances: "Circunstâncias do Crime",
        crimeConsequences: "Consequência do Crime",
        victimBehavior: "Comportamento da Vítima"
    }
};

export const intermediateSentenceLabels = {
    aggravating: {
        label: "Agravantes",
        description: "São circunstâncias que tornam o crime mais reprovável, resultando em um aumento da pena-base. Art. 61, 62, 63 e 64",
        relapse: { 
            label: "Reincidência",
            description: 
            "Art. 63. Verifica-se a reincidência quando o agente comete novo crime, depois de transitar em julgado a sentença que, no País ou no estrangeiro, o tenha condenado por crime anterior." +
            "\n\nArt. 64. Para efeito de reincidência:" +
            "\nI – não prevalece a condenação anterior, se entre a data do cumprimento ou extinção da pena e a infração posterior tiver decorrido período de tempo superior a 5 (cinco) anos, computado o período de prova da suspensão ou do livramento condicional, se não ocorrer revogação;" +
            "\nII – não se consideram os crimes militares próprios e políticos."
        },
        crimeMotive: {  
            label: "Motivo do Crime",
            description: 
            "Motivos e circunstâncias do crime:" +
            "\na) por motivo fútil ou torpe;" +
            "\nb) para facilitar ou assegurar a execução, a ocultação, a impunidade ou vantagem de outro crime;" +
            "\nc) à traição, de emboscada, ou mediante dissimulação, ou outro recurso que dificultou ou tornou impossível a defesa do ofendido;" +
            "\nd) com emprego de veneno, fogo, explosivo, tortura ou outro meio insidioso ou cruel, ou de que podia resultar perigo comum;" +
            "\ne) contra ascendente, descendente, irmão ou cônjuge;" +
            "\nf) com abuso de autoridade ou prevalecendo-se de relações domésticas, de coabitação ou de hospitalidade, ou com violência contra a mulher na forma da lei específica;" +
            "\ng) com abuso de poder ou violação de dever inerente a cargo, ofício, ministério ou profissão;" +
            "\nh) contra criança, maior de 60 (sessenta) anos, enfermo ou mulher grávida;" +
            "\ni) quando o ofendido estava sob a imediata proteção da autoridade;" +
            "\nj) em ocasião de incêndio, naufrágio, inundação ou qualquer calamidade pública, ou de desgraça particular do ofendido;" +
            "\nl) em estado de embriaguez preordenada."
        },
        LeadershipOrOrganizationOfCrime: {  
            label: "Liderança ou Organização do Crime",
            description: "I – promove, ou organiza a cooperação no crime ou dirige a atividade dos demais agentes;"
        },
        CoercionOrInducementToCommitCrime: {
            label: "Coerção ou Indução à Execução do Crime",
            description: "II – coage ou induz outrem à execução material do crime;"
        },
        instigationOrAuthority: {
            label: "Instigação ou Abuso de Autoridade/Condição Pessoal",
            description: "III – instiga ou determina a cometer o crime alguém sujeito à sua autoridade ou não punível em virtude de condição ou qualidade pessoal;"
        },
        crimeForPayment: {
            label: "Execução do Crime Mediante Pagamento ou Promessa",
            description: "IV – executa o crime, ou nele participa, mediante paga ou promessa de recompensa."
        },
    },
    mitigating: {
        label: "Atenuantes",
        description: "São fatores que podem reduzir a reprovabilidade do crime, levando a uma diminuição da pena-base. Art. 65, 66",
        minorAgeOrSenior: {
            label: "Menor de 21 anos ou Maior de 70 anos",
            description: "I – ser o agente menor de 21 (vinte e um), na data do fato, ou maior de 70 (setenta) anos, na data da sentença;"
        },
        ignoranceOfLaw: {
            label: "Desconhecimento da Lei",
            description: "II – o desconhecimento da lei;"
        },
        agentFactors: {
            label: "Circunstâncias do Agente",
            description: "III – ter o agente:" +
                "\na) cometido o crime por motivo de relevante valor social ou moral;" +
                "\nb) procurado, por sua espontânea vontade e com eficiência, logo após o crime, evitar-lhe ou minorar-lhe as consequências, ou ter, antes do julgamento, reparado o dano;" +
                "\nc) cometido o crime sob coação a que podia resistir, ou em cumprimento de ordem de autoridade superior, ou sob a influência de violenta emoção, provocada por ato injusto da vítima;" +
                "\nd) confessado espontaneamente, perante a autoridade, a autoria do crime;" +
                "\ne) cometido o crime sob a influência de multidão em tumulto, se não o provocou."
        },
    }
};