let url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json";
const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };

  let drop=document.querySelector('#yes');
  let img=document.querySelector('#no');

  let msg=document.querySelector('.msg');

  let code=Object.keys(countryList);
  for(let c of code){
    let option=document.createElement('option');
    option.textContent=c;
    drop.append(option);

    if(c=='INR'){
        option.selected='selected';
    }
  }

  let drop1=document.querySelector('#yes1');
  let img1=document.querySelector('#no1');
  for(let c of code){
    let option=document.createElement('option');
    option.textContent=c;
    drop1.append(option);
    if(c=='USD'){
        option.selected='selected';
    }
  }

  const flagurl="https://flagsapi.com/";
  const ff="/flat/64.png";


  drop.addEventListener("change",function updateFlag(){
          let x=drop.value;
          let y=countryList[x];
         let newS=`https://flagsapi.com/${y}/flat/64.png`;
         img.src=newS;
  });

  drop1.addEventListener("change",function updateFlag(){
    let x=drop1.value;
    let y=countryList[x];
   let newS=`https://flagsapi.com/${y}/flat/64.png`;
   img1.src=newS;
});

const btn=document.querySelector('button');



btn.addEventListener("click",async(e)=>{
   e.preventDefault();

   let amount=document.querySelector('.amount input');
   let value=amount.value;
   if(value<1) {
    value=1;
    amount.value=1;
   }

   let x=drop.value.toLowerCase();
   let y=drop1.value.toLowerCase();
   

   const url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${x}.json`
   let res=await fetch(url);
   let data=await res.json();
   let rate=data[x][y];
   
   let final=rate*value;

   msg.innerText=`${value} ${x.toUpperCase()} = ${final} ${y.toUpperCase()}`;

   


});

let icon=document.querySelector('i');

icon.addEventListener("click",()=>{
    let x=img.src;
    img.src=img1.src;
    img1.src=x;
    

    let u=drop.value;
   drop.value=drop1.value;
   drop1.value=u;

   
})

