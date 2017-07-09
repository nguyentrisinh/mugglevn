/**
 * Created by liemn on 4/21/2017.
 */
const translator = {
    address: 'place',
    website: 'link',
    type: 'grade',
    size: 'group',
    time:'alarm_on',
    salary:'credit_card',
    number:'group_work',
    deadline:'new_releases',
}

const translatorSkill = {
    "0":{
        icon:'',
        color:''
    },
    "1":{
        icon:'icon-php',
        color:"#6c7eb7",
    },
    "2":{
        icon:"icon-mysql",
        color: "#00618a"

    },
    "3":{
        icon: "icon-html5",
        color:'#f16528'
    },
    "4":{
        icon:"icon-css3",
        color: "#2fabde"
    },
    "5":{
        icon:"icon-javascript",
        color:'#f4c036',
    },
    "6":{
       icon:'icon-python',
        color:'#f6cc11',
    },
    "7":{
       icon:'icon-java',
        color:'#e11f22',
    },
    "8":{
       icon:"fa fa-code",
        color:"#00599d",
    },
    "9":{
        icon:'fa fa-graduation-cap',
        color:'#21304c',
    },
    "10":{
        icon:'fa fa-language',
        color:'#e5e5e5',
    },
    "11":{
        icon:'fa fa-object-group',
        color:'#00599d'
    },
    "15":{
        icon:'icon-git',
        color:'#f05033',

    },
    "18":{
        icon:'fa fa-laptop',
        color:'#02fdff'
    },
    "19":{
        icon:'fa fa-cog',
        color:'b67614',
    },
    "24":{
        icon:'icon-csharp',
        color:'#073648',
    },
    "25":{
        icon:'fa fa-trophy',
        color:'#fec901'
    },
    "26":{
        icon:'fa fa-graduation-cap',
        color:'#21304c',
    },
    "27":{
        icon:'fa fa-microchip',
        color:'#19b317',
    },
    "28":{
        icon:'fa fa-smile-o',
        color:'#fec901',
    },
    "29":{
        icon:'fa fa-commenting-o',
        color:'lightgray'
    },
    "31":{
        icon:'fa fa-server',
        color:'lightgray',

    },
    "32": {
        icon: 'icon-ruby-on-rails',
        color: '#cc0000'
},
    "37":{
        icon:'icon-dotnet',
        color:'#165c9c',
    },
    "39":{
        icon:'fa fa-code',
        color:'#00599d'
    },
    "40":{
        icon:'fa fa-cloud',
        color:'#165c9c',
    },
    "41":{
        icon:'icon-bootstrap',
        color:'#563d7c',
    },
    "42":{
        icon:'icon-angular',
        color:'#b52e31',
    },
    "43":{
        icon:'icon-jquery',
        color:'#0868ab'
    },
    "44":{
        icon:'icon-nodejs',
        color:'#90c53f'
    },
    "45":{
        icon:'icon-CMS',
        color:'#21759a'
    },
    "46":{
        icon:'',
        color:''
    },
    "47":{
        icon:'fa fa-android',
        color:'#99cc00',
    },
    "48":{
        icon:'fa fa-apple',
        color:'#9b9b9b',
    },
    "49":{
        icon:'fa fa-cloud',
        color:'#49c7f4'
    },
    "50":{
        icon:'fa fa-check-circle-o',
        color:'#005baa',
    },
    "51":{
        icon:'icon-mobile-device',
        color:'#bbd6dd'
    },
    "52":{
        icon:'fa fa-object-group',
        color:'#073648'
    },
    "54":{
        icon:'icon-mobile-device',
        color:'#bbd6dd'
    },
    "53":{
        icon:'fa fa-reweet',
        color:'#49c7f4'

},
    "56":{
        icon:'fa fa-check-circle-o',
        color:'#005baa',
    },
    "57":{
        icon:'fa fa-linux',
        color:'#ff7f00',
    },
    "58":{
        icon:'icon-apache',
        color:"#a1225d"
    },
    "55":{
        icon:'',
        color:''
    },
    "59":{
        icon:'',
        color:''
    },"60":{
        icon:'',
        color:''
    },"61":{
        icon:'',
        color:''
    },
}

const translatorBenefit = {
    "1":'fa fa-usd',
    "5":'fa fa-book',
    "4":'fa fa-rocket',
    "6":'fa fa-envira',
    "11":"fa fa-futbol-o",
    bed:'fa fa-bed',
    bath:'fa fa-bath',
    ot:'fa fa-bolt',
    cafe:'fa fa-coffee',
    "2":'fa fa-cutlery',
    "3":'fa fa-heartbeat',
    "7":'fa fa-clock-o'
}

export const Translator =(key)=>{
    return translator[key];
}

export const TranslatorBenefit =(key)=>{
    return translatorBenefit[key];
}

export const TranslatorSkill =(key)=>{
    return translatorSkill[key];
}