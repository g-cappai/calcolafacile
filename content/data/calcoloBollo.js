export const regioni = Object.freeze({
  ABRUZZO: "Abruzzo",
  BASILICATA: "Basilicata",
  CALABRIA: "Calabria",
  CAMPANIA: "Campania",
  E_ROMAGNA: "Emilia-Romagna",
  F_V_G: "Friuli Venezia Giulia",
  LAZIO: "Lazio",
  LIGURIA: "Liguria",
  LOMBARDIA: "Lombardia",
  MARCHE: "Marche",
  MOLISE: "Molise",
  PIEMONTE: "Piemonte",
  PUGLIA: "Puglia",
  SARDEGNA: "Sardegna",
  SICILIA: "Sicilia",
  TOSCANA: "Toscana",
  T_A_A_T: "Trentino-Alto Adige (Trento)",
  T_A_A_B: "Trentino-Alto Adige (Bolzano)",
  UMBRIA: "Umbria",
  V_D_A: "Valle d'Aosta",
  VENETO: "Veneto",
});

export const misurePotenza = Object.freeze({
  KW: "kW",
  CV: "CV",
});

export const classiEuro = Object.freeze({
  E0: "Euro 0",
  E1: "Euro 1",
  E2: "Euro 2",
  E3: "Euro 3",
  E4: "Euro 4",
  E5: "Euro 5",
  E6: "Euro 6",
});

export const tariffeBollo = [
  {
    regioni: ["Abruzzo", "Campania"],
    tariffe: [
      { classeEuro: ["Euro 0"], prezzi: [3.63, 5.45] },
      { classeEuro: ["Euro 1"], prezzi: [3.51, 5.27] },
      { classeEuro: ["Euro 2"], prezzi: [3.39, 5.08] },
      { classeEuro: ["Euro 3"], prezzi: [3.27, 4.91] },
      { classeEuro: ["Euro 4", "Euro 5", "Euro 6"], prezzi: [3.12, 4.96] },
    ],
  },
  {
    regioni: [
      "Basilicata",
      "Emilia-Romagna",
      "Lombardia",
      "Sicilia",
      "Puglia",
      "Umbria",
      "Valle d'Aosta",
      "Friuli Venezia Giulia",
      "Sardegna",
    ],
    tariffe: [
      { classeEuro: ["Euro 0"], prezzi: [3.0, 4.5] },
      { classeEuro: ["Euro 1"], prezzi: [2.9, 4.35] },
      { classeEuro: ["Euro 2"], prezzi: [2.8, 4.2] },
      { classeEuro: ["Euro 3"], prezzi: [2.7, 4.05] },
      { classeEuro: ["Euro 4", "Euro 5", "Euro 6"], prezzi: [2.58, 3.87] },
    ],
  },
  {
    regioni: ["Trentino-Alto Adige (Bolzano)"],
    tariffe: [
      { classeEuro: ["Euro 0"], prezzi: [2.7, 4.05] },
      { classeEuro: ["Euro 1"], prezzi: [2.61, 3.92] },
      { classeEuro: ["Euro 2"], prezzi: [2.52, 3.78] },
      { classeEuro: ["Euro 3"], prezzi: [2.43, 3.65] },
      { classeEuro: ["Euro 4"], prezzi: [2.32, 3.48] },
      { classeEuro: ["Euro 5", "Euro 6"], prezzi: [2.09, 3.13] },
    ],
  },
  {
    regioni: ["Calabria", "Lazio", "Liguria", "Veneto"],
    tariffe: [
      { classeEuro: ["Euro 0"], prezzi: [3.3, 4.95] },
      { classeEuro: ["Euro 1"], prezzi: [3.19, 4.79] },
      { classeEuro: ["Euro 2"], prezzi: [3.08, 4.62] },
      { classeEuro: ["Euro 3"], prezzi: [2.97, 4.46] },
      { classeEuro: ["Euro 4", "Euro 5", "Euro 6"], prezzi: [2.84, 4.26] },
    ],
  },
  {
    regioni: ["Toscana"],
    tariffe: [
      { classeEuro: ["Euro 0"], prezzi: [3.47, 5.45] },
      { classeEuro: ["Euro 1"], prezzi: [3.35, 5.37] },
      { classeEuro: ["Euro 2"], prezzi: [3.23, 5.08] },
      { classeEuro: ["Euro 3"], prezzi: [3.12, 4.91] },
      { classeEuro: ["Euro 4", "Euro 5", "Euro 6"], prezzi: [2.71, 4.26] },
    ],
  },
  {
    regioni: ["Trentino-Alto Adige (Trento)"],
    tariffe: [
      { classeEuro: ["Euro 0"], prezzi: [3.0, 4.5] },
      { classeEuro: ["Euro 1"], prezzi: [2.9, 4.35] },
      { classeEuro: ["Euro 2"], prezzi: [2.8, 4.2] },
      { classeEuro: ["Euro 3"], prezzi: [2.7, 4.05] },
      { classeEuro: ["Euro 4"], prezzi: [2.58, 3.87] },
      { classeEuro: ["Euro 5", "Euro 6"], prezzi: [2.06, 3.1] },
    ],
  },
  {
    regioni: ["Piemonte"],
    tariffe: [
      {
        classeEuro: ["Euro 0"],
        prezzi: [
          [3.0, 3.18],
          [3.24, 4.86],
          [3.3, 4.95],
        ],
      },
      {
        classeEuro: ["Euro 1"],
        prezzi: [
          [2.9, 3.07],
          [3.13, 4.7],
          [3.19, 4.79],
        ],
      },
      {
        classeEuro: ["Euro 2"],
        prezzi: [
          [2.8, 2.97],
          [3.02, 4.54],
          [3.08, 4.62],
        ],
      },
      {
        classeEuro: ["Euro 3"],
        prezzi: [
          [2.7, 2.86],
          [2.92, 4.37],
          [2.97, 4.46],
        ],
      },
      {
        classeEuro: ["Euro 4", "Euro 5", "Euro 6"],
        prezzi: [
          [2.58, 2.73],
          [2.79, 4.18],
          [2.84, 4.26],
        ],
      },
    ],
  },
  {
    regioni: ["Molise"],
    tariffe: [
      { classeEuro: ["Euro 0"], prezzi: [3.53, 5.3] },
      { classeEuro: ["Euro 1"], prezzi: [3.38, 5.07] },
      { classeEuro: ["Euro 2"], prezzi: [3.24, 4.85] },
      { classeEuro: ["Euro 3"], prezzi: [3.09, 4.63] },
      { classeEuro: ["Euro 4", "Euro 5", "Euro 6"], prezzi: [2.76, 4.14] },
    ],
  },
];
