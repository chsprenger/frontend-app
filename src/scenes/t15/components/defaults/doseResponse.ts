export const doseResponseDefaults = [
  {
    bestFitModel: 'exponential',
    hostType: 'guinea pig',
    route: 'inhalation',
    doseUnits: 'spores',
    response: 'death',
    reference: 'Druett 1953',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Bacillus_anthracis:_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Bacillus anthracis',
    k: 0.0000165
  },
  {
    bestFitModel: 'beta-Poisson',
    hostType: 'C57BL/6 mice and diabetic rat',
    route: 'intranasal,intraperitoneal',
    doseUnits: 'CFU',
    response: 'death',
    reference: 'Liu, Koo et al. 2002 and Brett and Woods 1996',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Burkholderia_pseudomallei:_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Burkholderia pseudomallei',
    alpha: 0.328,
    n50: 5430,
  },
  {
    bestFitModel: 'beta-Poisson',
    hostType: 'human',
    route: 'oral (in milk)',
    doseUnits: 'CFU',
    response: 'infection',
    reference: 'Black et al 1988',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Campylobacter_jejuni_and_Campylobacter_coli:_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Campylobacter jejuni and Campylobacter coli',
    alpha: 0.144,
    n50: 890
  },
  {
    bestFitModel: 'beta-Poisson',
    hostType: 'C57BL/1OScN mice',
    route: 'intraperitoneal',
    doseUnits: 'PFU',
    response: 'death',
    reference: 'Williams et al, 1982',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Coxiella_burnetii:_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Coxiella burnetii',
    alpha: 0.357,
    n50: 493000000
  },
  {
    bestFitModel: 'exponential',
    hostType: 'pig',
    route: 'oral (in food)',
    doseUnits: 'CFU',
    response: 'shedding in feces',
    reference: 'Cornick & Helgerson (2004)',
    link:
      'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Escherichia_coli_enterohemorrhagic_(EHEC):_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Escherichia coli enterohemorrhagic (EHEC)',
    k: 0.000218
  },
  {
    bestFitModel: 'beta-Poisson',
    hostType: 'human',
    route: 'oral (in milk)',
    doseUnits: 'CFU',
    response: 'positive stool isolation',
    reference: 'DuPont et al. (1971)',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Escherichia_coli:_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Escherichia coli',
    alpha: 0.155,
    n50: 2110000
  },
  {
    bestFitModel: 'exponential',
    hostType: 'monkeys',
    route: 'inhalation',
    doseUnits: 'CFU',
    response: 'death',
    reference: 'Day and Berendt, 1972',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Francisella_tularensis:_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Francisella tularensis',
    k: 0.0473
  },
  {
    bestFitModel: 'exponential',
    hostType: 'guinea pig',
    route: 'inhalation',
    doseUnits: 'CFU',
    response: 'infection',
    reference: 'Muller et al. (1983)',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Legionella_pneumophila:_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Legionella pneumophila',
    k: 0.0599
  },
  {
    bestFitModel: 'exponential',
    hostType: 'C57B1/6J mice',
    route: 'oral',
    doseUnits: 'CFU',
    response: 'death',
    reference: 'Golnazarian, Donnelly et al. 1989',
    link:
      'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Listeria_monocytogenes_(Death_as_response):_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Listeria monocytogenes (Death as response)',
    k: 0.0000115
  },
  {
    bestFitModel: 'beta-Poisson',
    hostType: 'C57Bl/6J mice',
    route: 'oral',
    doseUnits: 'CFU',
    response: 'infection',
    reference: 'Golnazarian',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Listeria_monocytogenes_(Infection):_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Listeria monocytogenes (Infection)',
    alpha: 0.253,
    n50: 277
  },
  {
    bestFitModel: 'beta-Poisson',
    hostType: 'pooled',
    route: 'oral',
    doseUnits: 'CFU',
    response: 'stillbirths',
    reference: 'Smith, Williams2007',
    link:
      'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Listeria_monocytogenes_(Stillbirths):_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Listeria monocytogenes (Stillbirths)',
    alpha: 0.0422,
    n50: 1780000000
  },
  {
    bestFitModel: 'exponential',
    hostType: 'deer',
    route: 'oral',
    doseUnits: 'CFU',
    response: 'infection',
    reference: "O'Brien et al(1976)",
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Mycobacterium_avium:_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Mycobacterium avium',
    k: 0.000693
  },
  {
    bestFitModel: 'beta-Poisson',
    hostType: 'white rabbit',
    route: 'contact lens',
    doseUnits: 'CFU',
    response: 'corneal ulceration',
    reference: 'Lawin-Brussel et al. (1993)',
    link:
      'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Pseudomonas_aeruginosa_(Contact_lens):_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Pseudomonas aeruginosa (Contact lens)',
    alpha: 0.19,
    n50: 18500
  },
  {
    bestFitModel: 'exponential',
    hostType: 'Swiss webster mice (5day old)',
    route: 'injected in eyelids',
    doseUnits: 'CFU',
    response: 'death',
    reference: 'Hazlett, Rosen et al. 1978',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Pseudomonas_aeruginosa_(bacterimia):_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Pseudomonas aeruginosa (bacterimia)',
    k: 0.000105
  },
  {
    bestFitModel: 'beta-Poisson',
    hostType: 'Pooled data',
    route: 'NA',
    doseUnits: 'CFU',
    response: 'morbidity',
    reference: 'Saslaw and Carlisle 1966 and Dupont, Hornick et al. 1973',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Rickettsia_rickettsi:_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Rickettsia rickettsi',
    alpha: 0.777,
    n50: 21.3
  },
  {
    bestFitModel: 'beta-Poisson',
    hostType: 'human',
    route: 'oral, in milk',
    doseUnits: 'CFU',
    response: 'disease',
    reference: 'Hornick et al. (1966),Hornick et al. (1970)',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Salmonella_Typhi:_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Salmonella Typhi',
    alpha: 0.175,
    n50: 1110000
  },
  {
    bestFitModel: 'beta-Poisson',
    hostType: 'human',
    route: 'oral, with eggnog',
    doseUnits: 'CFU',
    response: 'positive stool culture',
    reference: 'McCullough and Elsele,1951',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Salmonella_anatum:_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Salmonella anatum',
    alpha: 0.318,
    n50: 37100
  },
  {
    bestFitModel: 'beta-Poisson',
    hostType: 'human',
    route: 'oral, with eggnog',
    doseUnits: 'CFU',
    response: 'infection',
    reference: 'McCullough and Eisele 1951,2',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Salmonella_meleagridis:_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Salmonella meleagridis',
    alpha: 0.389,
    n50: 16800
  },
  {
    bestFitModel: 'beta-Poisson',
    hostType: 'mice',
    route: 'intraperitoneal',
    doseUnits: 'CFU',
    response: 'death',
    reference: 'Meynell and Meynell,1958',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Salmonella_nontyphoid:_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Salmonella nontyphoid',
    alpha: 0.21,
    n50: 49.8
  },
  {
    bestFitModel: 'exponential',
    hostType: 'human',
    route: 'oral',
    doseUnits: 'CFU',
    response: 'infection',
    reference: 'McCullough and Elsele,1951',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Salmonella_serotype_newport:_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Salmonella serotype newport',
    k: 0.00000397
  },
  {
    bestFitModel: 'beta-Poisson',
    hostType: 'human',
    route: 'oral (in milk)',
    doseUnits: 'CFU',
    response: 'positive stool isolation',
    reference: 'DuPont et al. (1972b)',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Shigella:_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Shigella',
    alpha: 0.265,
    n50: 1480
  },
  {
    bestFitModel: 'exponential',
    hostType: 'human',
    route: 'subcutaneous',
    doseUnits: 'CFU/cm2',
    response: 'infection',
    reference: 'Rose and Haas 1999',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Staphylococcus_aureus:_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Staphylococcus aureus',
    k: 7.64e-8
  },
  {
    bestFitModel: 'beta-Poisson',
    hostType: 'human',
    route: 'oral (with NaHCO3)',
    doseUnits: 'CFU',
    response: 'infection',
    reference: 'Hornick et al., (1971)',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Vibrio_cholerae:_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Vibrio cholerae',
    alpha: 0.25,
    n50: 243
  },
  {
    bestFitModel: 'exponential',
    hostType: 'mice',
    route: 'intranasal',
    doseUnits: 'CFU',
    response: 'death',
    reference: 'Lathem et al. 2005',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Yersinia_pestis:_Dose_response_Models',
    pathogenGroup: 'Bacteria',
    pathogenName: 'Yersinia pestis',
    k: 0.00163
  },
  {
    bestFitModel: 'exponential',
    hostType: 'human',
    route: 'inhalation',
    doseUnits: 'TCID50',
    response: 'infection',
    reference: 'Couch, Cate et al. 1966',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Adenovirus:_Dose_response_Models',
    pathogenGroup: 'Viruses',
    pathogenName: 'Adenovirus',
    k: 0.607
  },
  {
    bestFitModel: 'beta-Poisson',
    hostType: 'human',
    route: 'oral',
    doseUnits: 'PFU',
    response: 'infection',
    reference: 'Schiff et al.,1984',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Echovirus:_Dose_response_Models',
    pathogenGroup: 'Viruses',
    pathogenName: 'Echovirus',
    alpha: 1.06,
    n50: 922
  },
  {
    bestFitModel: 'exponential',
    hostType: 'pig',
    route: 'oral',
    doseUnits: 'PFU',
    response: 'infection',
    reference: 'Cliver, 1981',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Enteroviruses:_Dose_response_Models',
    pathogenGroup: 'Viruses',
    pathogenName: 'Enteroviruses',
    k: 0.00374
  },
  {
    bestFitModel: 'beta-Poisson',
    hostType: 'human',
    route: 'intranasal',
    doseUnits: 'TCID50',
    response: 'infection',
    reference: 'Murphy et al., 1984 & Murphy et al., 1985',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Influenza:_Dose_response_Models',
    pathogenGroup: 'Viruses',
    pathogenName: 'Influenza',
    alpha: 0.581,
    n50: 945000
  },
  {
    bestFitModel: 'exponential',
    hostType: 'guinea pig',
    route: 'subcutaneous',
    doseUnits: 'PFU',
    response: 'death',
    reference: 'Jahrling et al., 1982',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Lassa_virus:_Dose_response_Models',
    pathogenGroup: 'Viruses',
    pathogenName: 'Lassa virus',
    k: 2.95
  },
  {
    bestFitModel: 'exponential',
    hostType: 'human',
    route: 'oral (capsule)',
    doseUnits: 'PD50 (mouse paralytic doses)',
    response: 'alimentary infection',
    reference: 'Koprowski',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Poliovirus:_Dose_response_Models',
    pathogenGroup: 'Viruses',
    pathogenName: 'Poliovirus',
    k: 0.491
  },
  {
    bestFitModel: 'beta-Poisson',
    hostType: 'human',
    route: 'intranasal',
    doseUnits: 'TCID50 doses',
    response: 'infection',
    reference: 'Hendley et al., 1972',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Rhinovirus:_Dose_response_Models',
    pathogenGroup: 'Viruses',
    pathogenName: 'Rhinovirus',
    alpha: 0.221,
    n50: 1.81
  },
  {
    bestFitModel: 'beta-Poisson',
    hostType: 'human',
    route: 'oral',
    doseUnits: 'FFU',
    response: 'infection',
    reference: 'Ward et al, 1986',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Rotavirus:_Dose_response_Models',
    pathogenGroup: 'Viruses',
    pathogenName: 'Rotavirus',
    alpha: 0.253,
    n50: 6.17,
  },
  {
    bestFitModel: 'exponential',
    hostType: 'mice hACE-2 and A/J',
    route: 'intranasal',
    doseUnits: 'PFU',
    response: 'death',
    reference: 'DeDiego et al., 2008 &  De Albuquerque et al., 2006',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/SARS:_Dose_response_Models',
    pathogenGroup: 'Viruses',
    pathogenName: 'SARS',
    k: 0.00246
  },
  {
    bestFitModel: 'exponential',
    hostType: 'human',
    route: 'oral',
    doseUnits: 'oocysts',
    response: 'infection',
    reference: 'Messner et al. 2001',
    link:
      'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Cryptosporidium_parvum_and_Cryptosporidium_hominis:_Dose_response_Models',
    pathogenGroup: 'Protozoa',
    pathogenName: 'Cryptosporidium parvum and Cryptosporidium hominis',
    k: 0.0572
  },
  {
    bestFitModel: 'beta-Poisson',
    hostType: 'human',
    route: 'oral',
    doseUnits: 'Cysts',
    response: 'infection',
    reference: 'Rendtorff 1954',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Endamoeba_coli:_Dose_response_Models',
    pathogenGroup: 'Protozoa',
    pathogenName: 'Endamoeba coli',
    alpha: 0.101,
    n50: 341
  },
  {
    bestFitModel: 'exponential',
    hostType: 'human',
    route: 'oral',
    doseUnits: 'Cysts',
    response: 'infection',
    reference: 'Rendtorff 1954',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Giardia_duodenalis:_Dose_response_Models',
    pathogenGroup: 'Protozoa',
    pathogenName: 'Giardia duodenalis',
    k: 0.0199
  },
  {
    bestFitModel: 'exponential',
    hostType: 'mice',
    route: 'intravenous',
    doseUnits: 'no of trophozoites',
    response: 'death',
    reference: 'Adams et al. 1976 & Haggerty and John 1978',
    link: 'http://qmrawiki.canr.msu.edu/kwb.defaultindex.php/Naegleria_fowleri:_Dose_response_Models',
    pathogenGroup: 'Protozoa',
    pathogenName: 'Naegleria fowleri',
    k: 3.42e-7,
  }
];
