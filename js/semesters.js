/* Semestres, matérias e pastas do Google Drive.
   Para um semestre novo: acrescente um item em SEMESTERS com as pastas das matérias.
   As anotações (Google Docs "1BIM - X" / "2BIM - X") e os resumos em PDF são
   encontrados automaticamente nas pastas pelo botão "Atualizar do Drive". */
const SEMESTERS=[
  {id:'8',label:'8º semestre',folder:'1WSHc2xMUoDXwxGr0DFxy5vb6DSVhlUGx',subjects:[
    {key:'dpt',name:'Direito Processual do Trabalho',short:'DPT',folder:'1rx4DXhU5zcjuufcq_QLb3B6Hh4B2Q5oi',docs:{1:'18LI2DrdzGho_3DEFZ_ROZHV51qGGaS9UXh43Yfa4tiY',2:'1D4nLg9cglxKzhnLt1A3xfSH39ihqT11Rz17GqvcFWxI'}},
    {key:'tgot',name:'Teoria Geral da Obrigação Tributária',short:'TGOT',folder:'1zDM-ApE82nsPITT_wpbfDD55gqy4aX5l',docs:{1:'1ukUJjwfcPssjPeN5L44iO6ZuUwFHiKESL_ja1FLD-68',2:'1KoWl8eQ9aBPfXE0gLVFWF6d0V82mFfOKFnGHlc76ueM'}},
    {key:'dec',name:'Direito Econômico e Concorrencial',short:'DEC',folder:'1w6RlijYI6bMF84-4doOaSMFAMjUjhDb2',docs:{1:'1BUHEFHI7efE8UEd6Kv3XDgUjTiCBnrDvS_Jx2-virTQ',2:'1dJ45VFE89xjKi6tXP_-X2JxOzmQHeV9AKdlHoq7RFk0'}},
    {key:'dss',name:'Direito da Seguridade Social',short:'DSS',folder:'16G8fvCyqErev64oxAA7Y5egoaa4F0ptA',docs:{1:'1Nm554dsvS-ZuTIRmulmV5SR8QbfmQNV0JNCPyQmIeIc',2:'1jRPyNJX6mTGCDZbj_VadROItccVrnmxYjfHzjvvUwKY'}},
    {key:'rebi',name:'Relações Estatais, Bens e Intervenções',short:'REBI',folder:'1swxIMaQ2myN3CdcBURTPPsKNHBVr75Ks',docs:{1:'1uUUigWIRWbwuJ_MFj5__A9yt97o1NksCJ7u2DY8nPUE',2:'1GXLY0G2BKnNZ8-_zmTYvQA8w2tWaGDRleQYMiQluCbk'}},
    {key:'etica',name:'Ética Profissional',short:'Ética',folder:'1qukrcQxjttlzn-qQX_R2BX_u7sE9LbLh',docs:{1:'1HlsXmCxtTFXeh_n9QziKWTeduF4ezXxWHR1SoS1_FHc',2:'1wiOqh_AS5l7XtWQwZotPAZpGlmXYUgwDEW8unlLmk2o'}},
    {key:'dde',name:'Direito Digital Eletrônico',short:'DDE',folder:'1rW1etDmOjx69Mdh24L7SUcoy6zKJmVfQ',docs:{1:'1sAI1jxgv3QJhE2lwpsJcKj9UeBE9eXzWmu0Wj9qZ9Fo',2:'12QjQI8qllSNvf-QLrP7XMLjrhWuxrHkQ4gk8YjscbY0'}},
    {key:'di',name:'Direito da Inovação',short:'DI',folder:'1ngBJ0mpotVwvKFyseyBK7UEXHYXp19m4',docs:{1:'1Y89CJwUbgcmGMMn2s95D-eK2iJsOBGJGTdTDzDz2n2Y',2:'1GVhAxS_RZq7KDtQfG-Huk3p5Et3wDid069UXf-GvgWU'}},
    /* práticas extensionistas: ficam fora da lista de matérias; só aparecem se tiverem resumo */
    {key:'ajt',name:'Prática Extensionista: Acesso à Justiça do Trabalho',short:'AJT',folder:'1Uqa5VLFVfyix6EB_6i_qbnVz86FCpNMC',hidden:true,docs:{1:'14RpF84SEwBWnxvj8Fw6iFh-ZsVAc66AjY69BYIkC1uM',2:'1pCpHc78qnpJPCYQ1NxcN2f0s7flkH2BrZonV7wdQUq0'}},
    {key:'petss',name:'Prática Extensionista: Temas de Seguridade',short:'PETSS',folder:'1j6OEy1nn7BtOUCAevYZdR1rTpyxpQoJ8',hidden:true,docs:{1:'1CIhNd-F_dmT4IICLfPBtvCFvnIW77YXJH7I7btJtDqE',2:'1WdmLP6wBirGastfD7omY33_H1G9Obvfvky69DSFoIiQ'}}
  ]},
  {id:'9',label:'9º semestre',folder:'1xh0ppdKRf98yaZOReTEaSMRfaH_a79Rq',subjects:[
    {key:'psi',name:'Psicologia Jurídica',short:'PSI',folder:'16wDvl9cCPhpNMwar9pHd0bxM_vHTHgA-',docs:{}},
    {key:'dad',name:'Direito Antidiscriminatório',short:'DAD',folder:'1C9jWDC4n9Goyt1pntmWHIVdM9vrKuSsx',docs:{}},
    {key:'ptrib',name:'Processo Tributário',short:'PTRIB',folder:'1VjwAUQpvEVN4cFsRZnJ187-DhjQvIAsS',docs:{}},
    {key:'tcc1',name:'TCC 1',short:'TCC 1',folder:'1acK1r3AcVzBgcX6bw74qKEYNh9ZUhg5y',docs:{}},
    {key:'pedt',name:'Prática Extensionista: Temas de Direito Tributário',short:'PEDT',folder:'1jmVJCtnmIiwCoho2_z0HH0yRzE_HYcBP',docs:{}},
    {key:'dfin',name:'Direito Financeiro',short:'DFIN',folder:'1vzrRFkwxMTcgsdArSK1SUAT5jSXz2Tmw',docs:{}},
    {key:'tdc',name:'Tutela dos Direitos Difusos e Coletivos',short:'TDC',folder:'1y0s0NZlAt3S5HZqd85kAuqy16ALNtjHA',docs:{}}
  ]},
  {id:'10',label:'10º semestre',folder:'1AWr5U8G6ekiegO5KZ495ZKW78a4ADS35',subjects:[
    {key:'pe40',name:'Prática Extensionista: Direito 4.0',short:'D 4.0',folder:'1G0uZdBZvXlulNLZPG1mv2STST9VPjWxV',docs:{}},
    {key:'dcai',name:'Direito da Criança, Adolescente, Idoso e PCD',short:'DCAI',folder:'1NZCUbde4BPgZBrhMgwlZCWc9XzEHiJsH',docs:{}},
    {key:'tcc2',name:'TCC 2',short:'TCC 2',folder:'1VIzRCHDFSTPaETCvP0l8hxPK_HR5USxB',docs:{}},
    {key:'drc',name:'Direito das Relações de Consumo',short:'DRC',folder:'1cI7WXRinbaaPyQJn-Ks3k7YdETRJJquJ',docs:{}},
    {key:'peod',name:'Prática Extensionista: Observatório de Decisões',short:'POD',folder:'1hSKe0EkmMUJCpmT80Fo_xKh2-mBWgkBL',docs:{}},
    {key:'damb',name:'Direito Ambiental',short:'DAMB',folder:'1hTWPsc6nGaHW3vQ86Ce5LEuuxCTUYFwN',docs:{}}
  ]}
];

/* Cores das matérias novas (as do 8º continuam em SUBJECT_THEMES, no app.js) */
const EXTRA_SUBJECT_THEMES={
  psi:{name:'lavanda',primary:'#8E6CC9',accent:'#CDBBEF',soft:'#F5F0FD',ink:'#5A3D94'},
  dad:{name:'coral',primary:'#E0603F',accent:'#F7BBA9',soft:'#FDF0EB',ink:'#9A3A20'},
  ptrib:{name:'pink',primary:'#EF63BA',accent:'#F7BDE1',soft:'#FEF0F9',ink:'#A33080'},
  tcc1:{name:'grafite',primary:'#5B6472',accent:'#C3C9D3',soft:'#F1F3F6',ink:'#363C46'},
  pedt:{name:'rosa antigo',primary:'#B5577E',accent:'#E7B8CB',soft:'#FBEFF4',ink:'#7A3051'},
  dfin:{name:'esmeralda',primary:'#2E8B6A',accent:'#A6DCC6',soft:'#EAF7F1',ink:'#1D5C45'},
  tdc:{name:'azul',primary:'#1E67A9',accent:'#9FC5E8',soft:'#EDF5FB',ink:'#154D7E'},
  pe40:{name:'ciano',primary:'#1C8FA8',accent:'#A3DCE8',soft:'#E9F7FA',ink:'#135F70'},
  dcai:{name:'laranja',primary:'#D97800',accent:'#FFD499',soft:'#FFF4E0',ink:'#8A4C00'},
  tcc2:{name:'grafite',primary:'#5B6472',accent:'#C3C9D3',soft:'#F1F3F6',ink:'#363C46'},
  drc:{name:'vermelho',primary:'#D60056',accent:'#F5B3D0',soft:'#FDE8F2',ink:'#8A0037'},
  peod:{name:'verde-azulado',primary:'#45818E',accent:'#A8D0D6',soft:'#E6F5F7',ink:'#2E5860'},
  damb:{name:'verde',primary:'#3E7D4F',accent:'#B3D9BC',soft:'#EDF7EF',ink:'#28553A'},
  ajt:{name:'vermelho',primary:'#D60056',accent:'#F5B3D0',soft:'#FDE8F2',ink:'#8A0037'},
  petss:{name:'pink',primary:'#EF63BA',accent:'#F7BDE1',soft:'#FEF0F9',ink:'#A33080'}
};

/* Arquivos cujo nome não diz o tipo (conferido pelo conteúdo do PDF) */
const RESUMO_OVERRIDES={
  '1XEAPBzs4rgvZJrfV0RXD1IFN9lVXwMu0':{kind:'enxuto'},   // Resumo_Tributario_TGOT_P1 = enxuto P&B
  '10_mRk9qtBEm4AJSn8iX8sU-Q6zSWrn1z':{kind:'extra',stage:'1'}, // Cola_Direito_Economico (prova 01/out)
  '15AQuJkcCohOaHfCaROsa7AcIvEPGiCrI':{kind:'extra',stage:'1'}  // Cola_Direito_da_Inovacao
};

/* Retrato das pastas em 13/11/2026 (tarde) — usado até o primeiro "Atualizar do Drive" */
const DRIVE_SNAPSHOT={
  '1rx4DXhU5zcjuufcq_QLb3B6Hh4B2Q5oi':[
    ['1X-0ausemdmyLdQdX99lU_K9FFoAr1oFF','Resumo_ProcTrabalho_P2_v2.pdf','2026-11-13T17:17:13Z'],
    ['1APYHh7k7CUF_TwurgEhUYpDwamYH8Xg1','Resumo_Enxuto_ProcTrabalho_P2_v2.pdf','2026-11-13T17:17:11Z'],
    ['1JkqlgIngYJG3l3J_D1NrY8aq4E71_Zji','Micro_ProcTrabalho_P2_Contestacao.pdf','2026-11-06T00:55:44Z']
  ],
  '1zDM-ApE82nsPITT_wpbfDD55gqy4aX5l':[
    ['1BqqVZDlUGfx4NRdT2_yVDwyveuQR77jJ','Resumo_TGOT_P2_v2.pdf','2026-11-13T17:18:31Z'],
    ['1SnPPM_Lkj6d1UmkCH42dNo10MP47vwj4','Resumo_Enxuto_TGOT_P2_v2.pdf','2026-11-13T17:18:30Z']
  ],
  '1w6RlijYI6bMF84-4doOaSMFAMjUjhDb2':[
    ['10LbNSVa2-eN3cstDVP9cZb0uqvWh158c','Resumo_Direito_Economico_Concorrencial_P2.pdf','2026-11-13T04:09:40Z'],
    ['1pJkvFjflw4NRDsv8WHWgPfN5jde5M9mm','Resumo_Enxuto_Direito_Economico_Concorrencial_P2.pdf','2026-11-13T04:09:38Z'],
    ['10_mRk9qtBEm4AJSn8iX8sU-Q6zSWrn1z','Cola_Direito_Economico.pdf','2026-10-05T08:38:10Z']
  ],
  '16G8fvCyqErev64oxAA7Y5egoaa4F0ptA':[
    ['1DjFplkeSXQ2J2K5JKIc0GYQwZqDk5PYH','Resumo_Seguridade_Social_P2.pdf','2026-11-13T17:18:11Z'],
    ['1VCvNGDJxLURrskkk-2KhrwF_IrK7wSqy','Resumo_Enxuto_Seguridade_Social_P2.pdf','2026-11-13T17:18:10Z']
  ],
  '1swxIMaQ2myN3CdcBURTPPsKNHBVr75Ks':[
    ['1Gs4f79EUMxPa8tdFKlXR9JjehDTtoelX','Resumo_REBI_P1_v2.pdf','2026-10-05T08:39:02Z'],
    ['1qMLbAvQFk4JNNxGpQcbXTd8c5D19tEfc','Resumo_REBI_P1_v2.pdf','2026-09-22T13:14:10Z'],
    ['1jrE0BpbhMdjuSMCqYIqvTZ1xkov3TtWf','REBI_P1_Resumo_v6.pdf','2026-09-20T17:51:19Z']
  ],
  '1qukrcQxjttlzn-qQX_R2BX_u7sE9LbLh':[
    ['1lH3SvTbJ5hz0SK6Awb2PgorRATpdEDss','Resumo_Etica_Profissional_P2_v4.pdf','2026-11-13T17:17:50Z'],
    ['19IQ3-MAQtHmCN_7hkHHBMKGMYxyvdDFw','Resumo_Enxuto_Etica_Profissional_P2_v4.pdf','2026-11-13T17:17:49Z']
  ],
  '1rW1etDmOjx69Mdh24L7SUcoy6zKJmVfQ':[
    ['1I7HVfk6L8gx-iRc_Egc3Ukpv2Ct2LRsO','Resumo_DDE_P1 (6).pdf','2026-09-20T17:14:38Z']
  ],
  '1ngBJ0mpotVwvKFyseyBK7UEXHYXp19m4':[
    ['1qV4iAMtwQb-erYjtLbBpe-b21eWoQLHd','Resumo_Direito_da_Inovacao_P2.pdf','2026-11-13T04:09:35Z'],
    ['1rMk3m7GZD3On0OfQsAxxN-1m-C73KfqG','Resumo_Enxuto_Direito_da_Inovacao_P2.pdf','2026-11-13T04:09:33Z'],
    ['15AQuJkcCohOaHfCaROsa7AcIvEPGiCrI','Cola_Direito_da_Inovacao.pdf','2026-10-05T08:37:35Z']
  ]
};
