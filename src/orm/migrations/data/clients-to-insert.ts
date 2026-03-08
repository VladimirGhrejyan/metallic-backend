export interface ClientPhoneToInsert {
    phone: string;
    name: string | null;
}

export interface ClientToInsert {
    name: string;
    address: string | null;
    priceAdjustment: number;
    taxpayerRegistrationNumber: string | null;
    phones: ClientPhoneToInsert[];
}

export const CLIENTS_TO_INSERT: ClientToInsert[] = [
    {
        name: 'X',
        address: null,
        priceAdjustment: -20,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'X գնորդ',
        address: null,
        priceAdjustment: -6,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'XՄեծածախ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'XՎԱՃԱՌՔ',
        address: null,
        priceAdjustment: -11,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Ա/Ձ Արամ Խաչատուրյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098015809',
                name: null,
            },
        ],
    },
    {
        name: 'Աբբաս Մալաթիա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098520093',
                name: null,
            },
        ],
    },
    {
        name: 'Աբգար Կապան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093704074',
                name: null,
            },
        ],
    },
    {
        name: 'Աբո Արարատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098606460',
                name: null,
            },
        ],
    },
    {
        name: 'Աբո Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094207673',
                name: null,
            },
        ],
    },
    {
        name: 'Աբո Գորվ.Կանդիցիոնեռ',
        address: null,
        priceAdjustment: -5,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '041688888',
                name: null,
            },
        ],
    },
    {
        name: 'Աբո Ծիածան Կարեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '033393890',
                name: null,
            },
        ],
    },
    {
        name: 'Աբո Մխչյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094207673',
                name: null,
            },
        ],
    },
    {
        name: 'Ազատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Ազատ Ղարաբաղ ցրող',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077737348',
                name: null,
            },
        ],
    },
    {
        name: 'Ազատ Շամշադին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094988899',
                name: null,
            },
        ],
    },
    {
        name: 'Ազատ Շենիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093269115',
                name: null,
            },
        ],
    },
    {
        name: 'Ազատ տաչիլոյի քար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077901544',
                name: null,
            },
        ],
    },
    {
        name: 'Ալբերդ Շեն մասիվ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095252025',
                name: null,
            },
        ],
    },
    {
        name: 'Ալբերտ կահույքի գործ',
        address: null,
        priceAdjustment: -5,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096636307',
                name: null,
            },
        ],
    },
    {
        name: 'Ալիկ Երևան տոնավաճառ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099313477',
                name: null,
            },
        ],
    },
    {
        name: 'Ալիկ Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098785185',
                name: null,
            },
        ],
    },
    {
        name: 'Ալյանս Շին Արտյոմ',
        address: 'Երևամ Արցախի 43/1',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '00245372',
        phones: [
            {
                phone: '094202707',
                name: null,
            },
        ],
    },
    {
        name: 'Ահմեդ հաճախորդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Աղաբեկ Արագաց(Ապարան)',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095500851',
                name: null,
            },
        ],
    },
    {
        name: 'Աղաս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093655590',
                name: null,
            },
        ],
    },
    {
        name: 'Աղաս Աբովյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093649806',
                name: null,
            },
        ],
    },
    {
        name: 'Աղաս Կայարան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099333717',
                name: null,
            },
        ],
    },
    {
        name: 'Աղաս Մալաթիա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091457008',
                name: null,
            },
        ],
    },
    {
        name: 'Աղաս ՌՈՒՍ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Աղասի Ղուկասյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093210121',
                name: null,
            },
        ],
    },
    {
        name: 'Աղվան Սասունիկ գյուղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077330855',
                name: null,
            },
        ],
    },
    {
        name: 'Ամալիա Ոսկեվան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Աման Սարդարապատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093144015',
                name: null,
            },
        ],
    },
    {
        name: 'Ամատունի Ապարան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094873806',
                name: null,
            },
            {
                phone: '077507705',
                name: null,
            },
        ],
    },
    {
        name: 'Ամիրամ Նորատուս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077500068',
                name: null,
            },
        ],
    },
    {
        name: 'Ամրամ գնորդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077905717',
                name: null,
            },
        ],
    },
    {
        name: 'Ամրամ պոչի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077905717',
                name: null,
            },
        ],
    },
    {
        name: 'Անահիտ Կարմիրյան ՍՊԸ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094793917',
                name: null,
            },
        ],
    },
    {
        name: 'Անահիտ մալաթիա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077216665',
                name: null,
            },
        ],
    },
    {
        name: 'Անանիա Կոշ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091433022',
                name: null,
            },
        ],
    },
    {
        name: 'Անդո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'ԱՆԴՈ ԱՄՎ Պարտներ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077475000',
                name: null,
            },
        ],
    },
    {
        name: 'Անդո Արաքս թրչնաբուծական',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077353202',
                name: 'Արտյոմ',
            },
            {
                phone: '098554455',
                name: 'Անդո',
            },
        ],
    },
    {
        name: 'Անդո Արմեն Ֆորշին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099987070',
                name: 'Անդո',
            },
            {
                phone: '094507777',
                name: 'Արմեն',
            },
            {
                phone: '094001515',
                name: null,
            },
        ],
    },
    {
        name: 'Անդո Արմեն ֆորշին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099987070',
                name: null,
            },
            {
                phone: '077089999',
                name: null,
            },
        ],
    },
    {
        name: 'Անդո Գնունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093573642',
                name: null,
            },
        ],
    },
    {
        name: 'Անդո Թալին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077086655',
                name: null,
            },
        ],
    },
    {
        name: 'Անդո Լեոպարդ Բանգլադեշ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099778377',
                name: null,
            },
        ],
    },
    {
        name: 'Անդո Խորվիրապ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094967635',
                name: null,
            },
        ],
    },
    {
        name: 'Անդո Նազրվան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098930403',
                name: null,
            },
        ],
    },
    {
        name: 'Անդո Նոր Հաճն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099680066',
                name: null,
            },
        ],
    },
    {
        name: 'Անդո Շինարար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077868206',
                name: null,
            },
        ],
    },
    {
        name: 'Անդո փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099442206',
                name: null,
            },
        ],
    },
    {
        name: 'Անդրանիկ ավտոկայան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '043737444',
                name: null,
            },
        ],
    },
    {
        name: 'Անդրանիկ Բագրեվանդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096663383',
                name: null,
            },
        ],
    },
    {
        name: 'Անդրեյ Նանո Ակկորդ ՍՊԸ',
        address: 'Արմավիր Էջմիածին Խորենացի 1',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '04247238',
        phones: [
            {
                phone: '055201114',
                name: null,
            },
            {
                phone: '097201114',
                name: null,
            },
        ],
    },
    {
        name: 'Անժելա Արմավիր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098657009',
                name: null,
            },
        ],
    },
    {
        name: 'Անժելա Վեդի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093847884',
                name: null,
            },
        ],
    },
    {
        name: 'Անի Էջմիածին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098409860',
                name: null,
            },
        ],
    },
    {
        name: 'Անի Օլ Ինկլուզիվ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077658861',
                name: null,
            },
        ],
    },
    {
        name: 'Աննա Արամ առաքում',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093183905',
                name: null,
            },
        ],
    },
    {
        name: 'Աննա Նյու Սիթի Փրոջեքթ',
        address: null,
        priceAdjustment: -5,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '044771317',
                name: null,
            },
            {
                phone: '077771377',
                name: null,
            },
        ],
    },
    {
        name: 'Անուշավան Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093200960',
                name: null,
            },
        ],
    },
    {
        name: 'Անուշավան կոմիտաս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077224008',
                name: null,
            },
        ],
    },
    {
        name: 'Աշիկ Ռայկոմ երաժտական խան.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091611864',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ  Սևանի հացի գործ.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091407895',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ Ալեքսանյան Ա/Ձ',
        address: null,
        priceAdjustment: -10,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Աշոտ Արագածավան',
        address: 'Գ․ Արագածավան Բաղրամյան 100-1',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '54670879',
        phones: [
            {
                phone: '091060559',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ Արո Փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Աշոտ Բաղդասարյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077229911',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ Գնունի անտենա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094661916',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ Լեո',
        address: 'Ք․ Երևան Լեո 20',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '00448345',
        phones: [
            {
                phone: '091212586',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ Խաչատրյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077532351',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ Ծաղկահովիտ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093555157',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ Կոմիտաս Եղիկյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077882801',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ կոֆե փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091487484',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ Հոկտեմբերյան',
        address: 'ԱՐՄԱՎԻՐ ՄՅԱՍՆԻԿՅԱՆ ՄՅԱՍՆԻԿՅԱՆ ԲԱՂՐԱՄՅԱՆ Փ. 5',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '49532872',
        phones: [
            {
                phone: '093479501',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ Մեղրի Իշխան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077576261',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ Չարենցավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094871089',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ Ռենալեքս',
        address: 'Ք․ Երևան Մաշտոց 36',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '00024186',
        phones: [
            {
                phone: '091423214',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ Սահակյան Թալին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '56200227',
        phones: [
            {
                phone: '091295635',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ Սիլաչի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098757537',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ Սուրմալու',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093114731',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ ստրեչ բերող',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098252282',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ Ստրեչ Մասիվ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098252282',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ Տիգրան Մեծ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098757537',
                name: null,
            },
        ],
    },
    {
        name: 'Աշոտ Քանաքեռ Մթերային',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091329270',
                name: null,
            },
        ],
    },
    {
        name: 'Ապավեն Վանաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095010666',
                name: null,
            },
        ],
    },
    {
        name: 'Առաքել գնունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094563907',
                name: null,
            },
        ],
    },
    {
        name: 'Առաքում Արմեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '033037060',
                name: null,
            },
        ],
    },
    {
        name: 'Ավագ Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098060190',
                name: null,
            },
        ],
    },
    {
        name: 'Ավետ Նորհաճն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093286723',
                name: null,
            },
        ],
    },
    {
        name: 'Ավետիս Կաքավաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094422900',
                name: null,
            },
        ],
    },
    {
        name: 'Ավետիք արհեստավոր',
        address: null,
        priceAdjustment: -10,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Ավետիք էրեբունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095454975',
                name: null,
            },
        ],
    },
    {
        name: 'Ավիկ Արարատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094550060',
                name: null,
            },
        ],
    },
    {
        name: 'Ավիկ Հացառատ Քյավառ',
        address: 'Ք․ Գավառ Հենրիկ Աբրահամյան 10',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '87701062',
        phones: [
            {
                phone: '094727040',
                name: null,
            },
        ],
    },
    {
        name: 'Ավո Գայ շինանյութ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099184747',
                name: null,
            },
        ],
    },
    {
        name: 'Ավո Ռեկլամ',
        address: null,
        priceAdjustment: -5,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055211656',
                name: null,
            },
        ],
    },
    {
        name: 'Ատոմ Վարդենիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094472000',
                name: null,
            },
        ],
    },
    {
        name: 'Արա Դագոռ Քոնսթրաքշն',
        address: 'Վ․ Անտառային 125',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '08276091',
        phones: [
            {
                phone: '098978188',
                name: null,
            },
        ],
    },
    {
        name: 'Արա Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093246031',
                name: null,
            },
        ],
    },
    {
        name: 'Արա ՄՉՍ',
        address: null,
        priceAdjustment: -10,
        taxpayerRegistrationNumber: '02281879',
        phones: [
            {
                phone: '098405012',
                name: null,
            },
        ],
    },
    {
        name: 'Արամ  XOXO',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098310500',
                name: null,
            },
        ],
    },
    {
        name: 'Արամ 4-րդ Մասիվ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099870058',
                name: null,
            },
        ],
    },
    {
        name: 'Արամ Platinum',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արամ Անդո Հրազդան (Դարբին)',
        address: 'Ք․ Հրազդան Ջրառատ թաղ․ 279/1 279/2',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '03035498',
        phones: [
            {
                phone: '098119488',
                name: null,
            },
        ],
    },
    {
        name: 'Արամ Բյուրեղ Կվարտալ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077008135',
                name: null,
            },
        ],
    },
    {
        name: 'Արամ Գառնի Տաթևիկ Հովհաննիսյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091032747',
                name: null,
            },
        ],
    },
    {
        name: 'Արամ Գյումրի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093744742',
                name: null,
            },
        ],
    },
    {
        name: 'Արամ կոֆե ՍԱՄԱՐԿՈ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արամ մասիվ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094644483',
                name: null,
            },
        ],
    },
    {
        name: 'Արամ Մարտունի Սոլառ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093931206',
                name: null,
            },
        ],
    },
    {
        name: 'Արամ Մոնամի',
        address: 'ԵՐԵՎԱՆ ԿԵՆՏՐՈՆ ԿԵՆՏՐՈՆ ԹԱՂԱՄԱՍ ՄՈՍԿՈՎՅԱՆ Փ. 28',
        priceAdjustment: -5,
        taxpayerRegistrationNumber: '02654714',
        phones: [
            {
                phone: '096147258',
                name: null,
            },
        ],
    },
    {
        name: 'Արամ Մոնթե Քրիսթո',
        address: null,
        priceAdjustment: -5,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091368967',
                name: null,
            },
        ],
    },
    {
        name: 'Արամ Շինույութ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098058886',
                name: null,
            },
        ],
    },
    {
        name: 'Արամ Ոսկեվազ',
        address: 'Ոսկևազ Արարատյան 12',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '54747195',
        phones: [
            {
                phone: '077552062',
                name: null,
            },
        ],
    },
    {
        name: 'Արամ Սարգսյան Վեդի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094009291',
                name: null,
            },
        ],
    },
    {
        name: 'Արամ Վարիկ Ֆանտան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094316850',
                name: null,
            },
        ],
    },
    {
        name: 'Արամ Վեդի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արամ Վերին Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093973133',
                name: null,
            },
        ],
    },
    {
        name: 'Արամ Տաշիր գռուպ',
        address: null,
        priceAdjustment: -5,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077494479',
                name: null,
            },
        ],
    },
    {
        name: 'Արայիկ Անդրեասյան Տնաշեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099258082',
                name: null,
            },
        ],
    },
    {
        name: 'Արայիկ Գրիգորյան Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093246031',
                name: null,
            },
        ],
    },
    {
        name: 'Արայիկ է',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արայիկ Մալաթիա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093576385',
                name: null,
            },
        ],
    },
    {
        name: 'Արայիկ Նոր Երզնկա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077108788',
                name: null,
            },
        ],
    },
    {
        name: 'Արայիկ չարբախ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արայիկ Սևան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077360025',
                name: null,
            },
        ],
    },
    {
        name: 'Արայիկ տեղական մատիտ կաֆելի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093019997',
                name: null,
            },
        ],
    },
    {
        name: 'Արայիկ Ֆուտբոլիստ գնունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արարատ Մասիվ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077586885',
                name: null,
            },
        ],
    },
    {
        name: 'Արարատ Ոսկևան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077224710',
                name: null,
            },
        ],
    },
    {
        name: 'Արաքս Հոմշին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արգամ Բյուրեղավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096410011',
                name: null,
            },
            {
                phone: '093750908',
                name: null,
            },
        ],
    },
    {
        name: 'Արգամ Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093060003',
                name: null,
            },
        ],
    },
    {
        name: 'Արեգ Մալաթիա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093576385',
                name: null,
            },
        ],
    },
    {
        name: 'Արեն Բեջանյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094934774',
                name: null,
            },
        ],
    },
    {
        name: 'Արեն Վանաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077393235',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր 195տաղ.Փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091425332',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր 5-րդ Մասիվ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098419197',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Vini tape',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096077077',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Աբովյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055002018',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Ալափարս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094583090',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Աշտարակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094941618',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Ասատրյան',
        address: 'Արմավիրի մարզ գ․ Վ․ Արտաշատ Հախնազարյան փ․ 9',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '80361376',
        phones: [
            {
                phone: '093060677',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Ավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055226000',
                name: null,
            },
            {
                phone: '055029555',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Բագրատաշեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093679468',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Գալստյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արթուր Գեղանիստ խաչմերուկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093616538',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Գյումրի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099955955',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Գնունի սանտեխն.',
        address: 'Ք․ Երևան Վարդանանց 15/5 Տաղ․ 2',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '23195897',
        phones: [
            {
                phone: '091080300',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Գողթ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091555528',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Գոռ Լոյլ բիզնես',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093096696',
                name: null,
            },
            {
                phone: '033777776',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Գորիս WD-40',
        address: 'ՆՈՐ ԽԱՐԲԵՐԴ ԱՄԱՌԱՆՈՑԱՅԻՆ Փ. 97/22',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '02326769',
        phones: [
            {
                phone: '098963636',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Դավթյան կոմիտաս 65',
        address: null,
        priceAdjustment: -2,
        taxpayerRegistrationNumber: '26510561',
        phones: [
            {
                phone: '077332246',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Դարակերտ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077373731',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Եղեգնաձեոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077986688',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Եղվարդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094003560',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր երկաթի ցեխ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091569418',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Էլբոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091374799',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Էջմիածին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094043960',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Էրեբունի թանգարան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094589044',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Թելսել',
        address: null,
        priceAdjustment: -5,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094381911',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր ժուլիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արթուր Ղափան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093335523',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Մասիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093608880',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Մասիվ ավտոպահեստ.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077701210',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Նոր -Հաճն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094010888',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր ոսկու շուկա',
        address: 'Խորենացի 24 3հ 3/17',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '30931858',
        phones: [
            {
                phone: '091912525',
                name: null,
            },
            {
                phone: '095912525',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Չարենցավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093255453',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր ռադիո Նար -Դոս',
        address: 'Ք.Երևան Նար-Դոս 39ա',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '00650603',
        phones: [
            {
                phone: '095909089',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Ռեսանտա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արթուր Վանաձոր Արձագանք ՍՊԸ',
        address: 'Վանա ձոր Տիգրան մեծի 81 Ա',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '06915527',
        phones: [
            {
                phone: '098588874',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Վանաձոր Զապչաստ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093159000',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Վարդանանց փող․',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055613303',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Վեդի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094572258',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր Տեմպ շին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093662210',
                name: null,
            },
        ],
    },
    {
        name: 'Արթուր փեթակ տնտեսական',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արթուր Քոչար Պարտեզ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077590403',
                name: null,
            },
            {
                phone: '044031403',
                name: null,
            },
        ],
    },
    {
        name: 'Արիկ Fix Top հաճախորդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091418026',
                name: null,
            },
        ],
    },
    {
        name: 'Արիկ Կիմ FIX TOP',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077069669',
                name: null,
            },
        ],
    },
    {
        name: 'Արիկ Շրջանային',
        address: 'Ք․ Երևան Բայրոն 12/73',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '25211417',
        phones: [
            {
                phone: '094908065',
                name: null,
            },
        ],
    },
    {
        name: 'Արծիվ Երևան Տոնավաճառ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091412596',
                name: null,
            },
        ],
    },
    {
        name: 'Արծրուն Մղչյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077319696',
                name: null,
            },
        ],
    },
    {
        name: 'Արծրուն Սպիտակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077471751',
                name: null,
            },
        ],
    },
    {
        name: 'Արկադի Բագրևան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077090560',
                name: null,
            },
        ],
    },
    {
        name: 'Արկադի մատակարար Տիգ․Մեծ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արկադի Ստեփանավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093860639',
                name: null,
            },
        ],
    },
    {
        name: 'Արկադի Տիգրան Մեծ',
        address: 'Ք․Երևան Տիգրան Մեծի 36',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '00092112',
        phones: [
            {
                phone: '091428096',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Maxmarket Պատո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091566756',
                name: null,
            },
        ],
    },
    {
        name: 'Արման NETSAN',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094470533',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Royal',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094141315',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Ա/Ձ Եսմա Համբարյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091115445',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Ա․Կ․Գրուպ Սալիկ',
        address: 'Հաղթանակի 1փողոց 44/15',
        priceAdjustment: -5,
        taxpayerRegistrationNumber: '02815758',
        phones: [
            {
                phone: '094207685',
                name: null,
            },
            {
                phone: '095207685',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Այրացիա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արման Արտաշատ Կուդո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '041404140',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Գորիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098596413',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Դարոինկ',
        address: null,
        priceAdjustment: -5,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093927555',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Դիլիջան Զապչաստ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094200706',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Եղեգնաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093629920',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Էջմիածին վարագույրի ձող',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098701007',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Կաքավաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093305059',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077692020',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Մհեր ՍՊԸ Ղարաբաղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '097229229',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Շենգավիթ մետրոի մոտ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094050588',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Չարբախ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091100242',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Սարդարապատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093144015',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Սմարթ-Ինֆորմատիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093771451',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Սուրմալու',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093559974',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Վարդենիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094141470',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093102019',
                name: null,
            },
        ],
    },
    {
        name: 'Արման Օսան մեր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արմեն  Վահրամ  կվարտալ աքսես.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093107136',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն AS PLASTICS Դույլ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077501919',
                name: null,
            },
            {
                phone: '093458932',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Vertex',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077490110',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն VESTA',
        address: 'Ծովակալ Իսակովի պ. 48/1',
        priceAdjustment: -5,
        taxpayerRegistrationNumber: '01829451',
        phones: [
            {
                phone: '093336888',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Ալավերդի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093333361',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Աղավնաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094221200',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Աղավնատուն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093361301',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Աշտարակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094933358',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Աշտարակ Սպեց Շին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094502040',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Ապարան',
        address: 'Արագածոտնի մարզ գ․Արագած կենտրոնական խճուղի 9 նրբանցք տուն 10',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '54797758',
        phones: [
            {
                phone: '094826480',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Առինջ մոլ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095479797',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն ավտոպահեստ.Կոմիտաս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091860786',
                name: null,
            },
            {
                phone: '093860786',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Արարատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094880359',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Արթուր Էջմիածին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093361301',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Արմավիր Իսքանդարյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093839977',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Արմավիր Խանջյան գյուղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094277271',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Արմեն սկոչի ընկեր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096343242',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093840846',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093838580',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Արտյոմ Երև․ Տոնավ․Ռ և Ա',
        address: 'ՍՄԲԱՏ ԶՈՐԱՎԱՐԻ Փ. 11/1',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '02317012',
        phones: [
            {
                phone: '043450305',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Բաբախանյան եղբայրներ',
        address: 'Ք Երևան Ալեք Մանուկյան 9/1',
        priceAdjustment: -10,
        taxpayerRegistrationNumber: '08251891',
        phones: [
            {
                phone: '041088811',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Բագրավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093669944',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Բանգլադեշ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094881820',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Բուլդի',
        address: 'Մայրաքաղաքային 98',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '04425785',
        phones: [
            {
                phone: '094188510',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Գառնի արտադրություն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091781210',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Գասպարյան Աշտարակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098775020',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Գյուլբենկյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093393929',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Գյուրջյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099072155',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Գնունի 7/15 ԱՎ ԱՇ ՍՊԸ',
        address: 'Վարդանանց 78 7/1 7/2',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '01351809',
        phones: [
            {
                phone: '094717166',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Գնունի սանտեխն.',
        address: 'Վարդանանց 15/2',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '08295275',
        phones: [
            {
                phone: '094215633',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Գորիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091637172',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Դիլիջան շինանյութ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093507488',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Թաիրով Վարպետի ընկեր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077215999',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Ծաղկահովիտ Ապարան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094576959',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Ծարավ Աղբյուր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099707020',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Կալինինո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094771775',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Կարեն Ֆուրմանով կոմիտաս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091042929',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն կացին տանող',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091748481',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Կոմիտաս շուկայի մոտ',
        address: 'Կոմիտաս 49',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '20119984',
        phones: [
            {
                phone: '044484150',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Հրազդան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094076004',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Հրազդան Լեռնանիստ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093444917',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն մալաթիա շուկա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055202531',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Մասիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094003987',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Մարտունի Ծովինար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094666064',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն մեբելի գործ',
        address: null,
        priceAdjustment: -6,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093254774',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Մեծամոր',
        address: 'Ք․ Մեծամոր թիվ 2 խանութ',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '49638737',
        phones: [
            {
                phone: '093567752',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Մեղրի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098333456',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն մեր (Համիկ)',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արմեն մեր կողքի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077571727',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Մխչյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098107515',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Նար Դոս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077909080',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Նոր Տուն(ԲԱՐՍԻՍ ՍՊԸ)',
        address: 'Արին Բերդի 3-րդ նրբ․ 9',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '02230504',
        phones: [
            {
                phone: '094766400',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Շամշադին, Բերդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094220573',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Շին Հաբ',
        address: 'Ք․Երևան Գլինկաի 23/1',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '00538776',
        phones: [
            {
                phone: '044802020',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Պառավաքար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098000331',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Պեմզա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094609709',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Սևան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077188115',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Սկոչ  ARMENIA',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077490110',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Վայք',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093581580',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Վանաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094806070',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն փայտի պոչ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093410688',
                name: null,
            },
            {
                phone: '099410688',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Փեթակ 141տաղ.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091292988',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Փեթակ 22տ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093200660',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Փլեյ Սիթի',
        address: null,
        priceAdjustment: -5,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091214389',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Օվալ պլաստ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077665599',
                name: null,
            },
        ],
    },
    {
        name: 'Արմեն Ֆռեզնո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արմո Դավո Երևան տոնավ.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077273727',
                name: null,
            },
        ],
    },
    {
        name: 'Արմո Երևան տոնավաճառ Akfix',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արշակ Առինջ Մոլ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077205006',
                name: null,
            },
        ],
    },
    {
        name: 'Արշակ Կաքավաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098805803',
                name: null,
            },
        ],
    },
    {
        name: 'Արշակ Կաքավաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098805803',
                name: null,
            },
        ],
    },
    {
        name: 'Արշակ Հոկտեմբերյան(VAKA)',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091469030',
                name: null,
            },
        ],
    },
    {
        name: 'Արշակ Շինարարներ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077577844',
                name: null,
            },
        ],
    },
    {
        name: 'Արշակ Տաշիր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094190975',
                name: null,
            },
        ],
    },
    {
        name: 'Արշամ Չարբախ Զբոռնի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091487646',
                name: null,
            },
        ],
    },
    {
        name: 'Արշավիր Ղափան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արո ազատ հաճախորդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091414343',
                name: null,
            },
            {
                phone: '094434148',
                name: null,
            },
        ],
    },
    {
        name: 'Արո Գեղանիստ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077348871',
                name: null,
            },
        ],
    },
    {
        name: 'Արո Իբիցա',
        address: null,
        priceAdjustment: -5,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095789889',
                name: null,
            },
        ],
    },
    {
        name: 'Արո Իմեքս Գրուպ IDEAL',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099407022',
                name: null,
            },
        ],
    },
    {
        name: 'Արո Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077070208',
                name: null,
            },
        ],
    },
    {
        name: 'Արո Ջրվեժ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099002625',
                name: null,
            },
        ],
    },
    {
        name: 'Արսեն 1-մաս Սամվել',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077147455',
                name: null,
            },
        ],
    },
    {
        name: 'Արսեն Առատաշեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077202041',
                name: null,
            },
        ],
    },
    {
        name: 'Արսեն Ավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094787161',
                name: null,
            },
        ],
    },
    {
        name: 'Արսեն Բանգլադեշ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077080507',
                name: null,
            },
        ],
    },
    {
        name: 'Արսեն գազ կշեռք',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096911600',
                name: null,
            },
        ],
    },
    {
        name: 'Արսեն Եղեգնաձոր',
        address: 'Վայոց Ձոր , Գյուղ Չիվա 9-րդ նրբանցք 1-4տնամերձի նկատմամբ',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '76812338',
        phones: [
            {
                phone: '093965115',
                name: null,
            },
        ],
    },
    {
        name: 'Արսեն Եռանկյունի շուկա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099218450',
                name: null,
            },
        ],
    },
    {
        name: 'Արսեն Էկո Մարկետ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096020060',
                name: null,
            },
        ],
    },
    {
        name: 'Արսեն Կանցլեռ ԱՌԷԱ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091421044',
                name: null,
            },
        ],
    },
    {
        name: 'Արսեն կվարտալ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091466280',
                name: null,
            },
        ],
    },
    {
        name: 'Արսեն մեշոկի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094919756',
                name: null,
            },
        ],
    },
    {
        name: 'Արսեն Ստեփանավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098768616',
                name: null,
            },
        ],
    },
    {
        name: 'Արսեն Ստեփանավանի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077113181',
                name: null,
            },
        ],
    },
    {
        name: 'Արսեն ՏՈՊ ՔՈ',
        address: null,
        priceAdjustment: -5,
        taxpayerRegistrationNumber: '01294039',
        phones: [
            {
                phone: '099001920',
                name: null,
            },
        ],
    },
    {
        name: 'Արսեն փչփուռ Penosil',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077116277',
                name: null,
            },
        ],
    },
    {
        name: 'Արսեն քյավառ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077869606',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ Ալավերդի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091761645',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ Ալավերդի Տուշպա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077488859',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ Ավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093770111',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ Բանգլադեշ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091727500',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ բանվորի արձան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արտակ Բջնի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098169007',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ Գավառ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091700701',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ գնունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091880490',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ Դոլֆին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '02545909',
        phones: [
            {
                phone: '091920920',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ էջմիածին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094401356',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ Թալին Արագածավան',
        address: 'Արագածավան Բաղրամյան 57/1',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '54614143',
        phones: [],
    },
    {
        name: 'Արտակ Կիրովական',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099030503',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093966626',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ Մարտին-Տիգրան ՍՊԸ',
        address: 'Եղբայրության 16/78',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '00189518',
        phones: [
            {
                phone: '098823878',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ Մարտունի',
        address: 'Ք․ Մարտունի Կամոյի 51',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '08209692',
        phones: [
            {
                phone: '098063606',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ մեր յուղի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093380781',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ նոյեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094440429',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ Շահնազար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094909526',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ Ջրվեժ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099026009',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ Ռեալ Թայմ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098781991',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ Վանաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094050626',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ Փարաքար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077627373',
                name: null,
            },
        ],
    },
    {
        name: 'Արտակ փեթակ /57 տաղավար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093839592',
                name: null,
            },
        ],
    },
    {
        name: 'Արտաշ Գյումրի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091371765',
                name: null,
            },
        ],
    },
    {
        name: 'Արտաշ Երևան Լայն ՍՊԸ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '033889908',
                name: null,
            },
        ],
    },
    {
        name: 'Արտաշ Կիլիկյա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '033077727',
                name: null,
            },
        ],
    },
    {
        name: 'Արտաշ Նուբարաշեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099884475',
                name: null,
            },
        ],
    },
    {
        name: 'Արտյոմ 4 Գյուղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055099950',
                name: null,
            },
        ],
    },
    {
        name: 'Արտյոմ Modern',
        address: 'Ք․Երևան Սայաթ-Նովա 37',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '09413172',
        phones: [
            {
                phone: '099998886',
                name: null,
            },
        ],
    },
    {
        name: 'Արտյոմ Գեղադիր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094806262',
                name: null,
            },
        ],
    },
    {
        name: 'Արտյոմ Գնունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099220990',
                name: null,
            },
        ],
    },
    {
        name: 'Արտյոմ Գնունի Մատակարար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արտյոմ Երանոս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094510070',
                name: null,
            },
        ],
    },
    {
        name: 'Արտյոմ էդոյի Քրիտափոր փող.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055669960',
                name: null,
            },
        ],
    },
    {
        name: 'Արտյոմ Հարթավան Ապարան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094707101',
                name: null,
            },
        ],
    },
    {
        name: 'Արտյոմ Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093358686',
                name: null,
            },
        ],
    },
    {
        name: 'Արտյոմ Մեղրի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093753500',
                name: null,
            },
        ],
    },
    {
        name: 'Արտյոմ մեր ԼԻԼի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Արտյոմ Մոսո դզող փչող',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '043737384',
                name: null,
            },
        ],
    },
    {
        name: 'Արտյոմ Պռոֆիքս',
        address: 'քաղաք Երևան,Սողոմոն Տարոնցի 16/1',
        priceAdjustment: 5,
        taxpayerRegistrationNumber: '02315574',
        phones: [
            {
                phone: '091083423',
                name: null,
            },
        ],
    },
    {
        name: 'Արտյոմ Սահակյան Շին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093111231',
                name: null,
            },
        ],
    },
    {
        name: 'Արտյոմ Սոնաքս Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077129901',
                name: null,
            },
        ],
    },
    {
        name: 'Արտյոմ սվեռլո /4 Crown',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093931006',
                name: null,
            },
        ],
    },
    {
        name: 'Արտյոմ Վանաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093151538',
                name: null,
            },
        ],
    },
    {
        name: 'Արտուշ Մասիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093651950',
                name: null,
            },
        ],
    },
    {
        name: 'Բաբիկ Վարդենիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093565535',
                name: null,
            },
        ],
    },
    {
        name: 'Բաբկեն ՎԻ ԴԻ ԱՌ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091216102',
                name: null,
            },
        ],
    },
    {
        name: 'Բաբո Կարեն Թալին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098565666',
                name: null,
            },
            {
                phone: '098909048',
                name: null,
            },
        ],
    },
    {
        name: 'Բագրատ Մոլիբդեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093787766',
                name: null,
            },
        ],
    },
    {
        name: 'Բագրատ Ստեփանավան',
        address: 'Ստեփանավան Բաղրամյան 15',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '69509781',
        phones: [
            {
                phone: '094822210',
                name: null,
            },
        ],
    },
    {
        name: 'Բաղդո Իջևան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095800858',
                name: null,
            },
        ],
    },
    {
        name: 'Բեն սվեռլոներ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091488179',
                name: null,
            },
        ],
    },
    {
        name: 'Բիգ Փրոջեքթ',
        address: 'ք․Երևան Ոսկերիչների 1',
        priceAdjustment: -10,
        taxpayerRegistrationNumber: '00924693',
        phones: [
            {
                phone: '094748641',
                name: null,
            },
            {
                phone: '091371013',
                name: null,
            },
            {
                phone: '098450459',
                name: 'Երջո',
            },
        ],
    },
    {
        name: 'Բորիս բանգլադեշ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '033228842',
                name: null,
            },
        ],
    },
    {
        name: 'Բորյա VENTS',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '043042211',
                name: null,
            },
        ],
    },
    {
        name: 'Բռակ ապրանքներ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Գաբրիել Մասիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093161222',
                name: null,
            },
        ],
    },
    {
        name: 'Գագիկ Բաղրամյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099103848',
                name: null,
            },
        ],
    },
    {
        name: 'Գագիկ Գ․Ա․Շին ՍՊԸ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077950095',
                name: null,
            },
        ],
    },
    {
        name: 'Գագիկ Երանոս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093214489',
                name: null,
            },
        ],
    },
    {
        name: 'Գագո Աշտարակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093488042',
                name: null,
            },
        ],
    },
    {
        name: 'Գագո Ավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077263646',
                name: null,
            },
        ],
    },
    {
        name: 'Գագո Բարձրաշեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091349450',
                name: null,
            },
        ],
    },
    {
        name: 'Գագո Գյումրի',
        address: 'Ք․ Գյումրի Ավտոկայանի տարածք 8/2',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '57241435',
        phones: [
            {
                phone: '093946494',
                name: null,
            },
        ],
    },
    {
        name: 'Գագո Դավթաշեն ավտոպ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091366601',
                name: null,
            },
        ],
    },
    {
        name: 'Գագո Դիլիջան առողջարան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091096919',
                name: null,
            },
            {
                phone: '094996919',
                name: null,
            },
        ],
    },
    {
        name: 'Գագո Եղեգնաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093873991',
                name: null,
            },
        ],
    },
    {
        name: 'Գագո Լուգա մասսիվ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091306157',
                name: null,
            },
            {
                phone: '099075757',
                name: null,
            },
        ],
    },
    {
        name: 'Գագո Մալաթիա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099028249',
                name: null,
            },
        ],
    },
    {
        name: 'Գագո Շին․Լիդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094391005',
                name: null,
            },
        ],
    },
    {
        name: 'Գագո Ստյոպ ռադիո Բաղրամյան',
        address: 'Ք․Երևան Բաղրամյան 68',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '72992234',
        phones: [
            {
                phone: '091791468',
                name: null,
            },
        ],
    },
    {
        name: 'Գագո Վանաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094799231',
                name: null,
            },
        ],
    },
    {
        name: 'Գագո Վիգեն Քարի Հանք',
        address: 'Շիրակի մարզ Գ․ Գոգհովիտ 11-րդ փող 8/1 հողամաս',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '00249674',
        phones: [
            {
                phone: '098400540',
                name: null,
            },
            {
                phone: '094400140',
                name: null,
            },
        ],
    },
    {
        name: 'Գագո տենի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094206226',
                name: null,
            },
        ],
    },
    {
        name: 'ԳԱԼՇԻՆ Քասախ',
        address: 'Քասախ Զորավար Անդրանիկի 9',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '01363618',
        phones: [
            {
                phone: '096355876',
                name: null,
            },
        ],
    },
    {
        name: 'Գալո փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098234000',
                name: null,
            },
        ],
    },
    {
        name: 'Գալուստ Բերդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077722203',
                name: null,
            },
        ],
    },
    {
        name: 'Գալուստ Կիևյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095090070',
                name: null,
            },
        ],
    },
    {
        name: 'Գալուստ Հրազդան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093384317',
                name: null,
            },
        ],
    },
    {
        name: 'Գառնիկ Աբովյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093041166',
                name: null,
            },
            {
                phone: '094108188',
                name: null,
            },
        ],
    },
    {
        name: 'Գառնիկ Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094312326',
                name: null,
            },
        ],
    },
    {
        name: 'Գառնիկ Գայանե Ստեփանավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094193803',
                name: null,
            },
        ],
    },
    {
        name: 'Գառնիկ Գնունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096556600',
                name: null,
            },
        ],
    },
    {
        name: 'Գառնիկ գումի շուկա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077792131',
                name: null,
            },
        ],
    },
    {
        name: 'Գառնիկ Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094474448',
                name: null,
            },
        ],
    },
    {
        name: 'Գառնիկ սիլիկ.կլեյ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098880288',
                name: null,
            },
        ],
    },
    {
        name: 'Գարեգին Ալավերդի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094147024',
                name: null,
            },
        ],
    },
    {
        name: 'Գարիկ 3-րդ Մասիվ Գեղաշեն',
        address: 'Ք․ Երևան Բաղյան փող․ 3/3 39շ․',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '03580045',
        phones: [
            {
                phone: '094556500',
                name: null,
            },
        ],
    },
    {
        name: 'Գարիկ GA',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Գարիկ GA մատակարար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Գարիկ Անդրեասյան Երևան տոն․',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099258082',
                name: null,
            },
        ],
    },
    {
        name: 'Գարիկ Առաքիչ Աստիճան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Գարիկ աստիճան տանող',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Գարիկ Արտաշատ Կանաչուտ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094112011',
                name: null,
            },
        ],
    },
    {
        name: 'Գարիկ Գեղաշեն',
        address: 'ԲԻԼՏԵՌ',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '03556344',
        phones: [
            {
                phone: '094556500',
                name: null,
            },
        ],
    },
    {
        name: 'Գարիկ Գյուրի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094390639',
                name: null,
            },
        ],
    },
    {
        name: 'Գարիկ Խաչիկ Եղեգնաձոր',
        address: 'Վայոց Ձորի մարզ, Արենի համայնք,Խաչիկ գյուղ 17 փողոց 1 տուն',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '76844917',
        phones: [
            {
                phone: '077854031',
                name: null,
            },
        ],
    },
    {
        name: 'Գարիկ Հայրենիք',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099221180',
                name: null,
            },
        ],
    },
    {
        name: 'Գարիկ Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094000714',
                name: null,
            },
        ],
    },
    {
        name: 'Գարիկ Ջանֆիդա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094102444',
                name: null,
            },
        ],
    },
    {
        name: 'Գարիկ Սիսավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094173770',
                name: null,
            },
        ],
    },
    {
        name: 'Գարիկ Սպիտակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077260501',
                name: null,
            },
        ],
    },
    {
        name: 'Գարիկ Ստեփանավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094522059',
                name: null,
            },
        ],
    },
    {
        name: 'Գարիկ Վանաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098565657',
                name: null,
            },
        ],
    },
    {
        name: 'Գարիկ Վարդենիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093306988',
                name: null,
            },
        ],
    },
    {
        name: 'Գափո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091011085',
                name: null,
            },
        ],
    },
    {
        name: 'Գեղամ Աշտարակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099999876',
                name: null,
            },
        ],
    },
    {
        name: 'Գեղամ Արինջ Մոլ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077663639',
                name: null,
            },
        ],
    },
    {
        name: 'Գեղամ Գառնի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099636661',
                name: null,
            },
        ],
    },
    {
        name: 'Գեղամ Իջևան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093977811',
                name: null,
            },
        ],
    },
    {
        name: 'Գեղամ մետաքս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '041210105',
                name: null,
            },
        ],
    },
    {
        name: 'Գեղամ տեց',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093125998',
                name: null,
            },
        ],
    },
    {
        name: 'Գեորգի պոչ բերող',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077007055',
                name: null,
            },
        ],
    },
    {
        name: 'Գնել Բազմաբերդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091464750',
                name: null,
            },
        ],
    },
    {
        name: 'Գնել էկոտոմատո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094044315',
                name: null,
            },
        ],
    },
    {
        name: 'Գնել Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093818772',
                name: null,
            },
        ],
    },
    {
        name: 'Գոհար Խաչիկ Գյումրի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093578561',
                name: null,
            },
        ],
    },
    {
        name: 'Գողացված ապրանքներ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Գոռ ԱՅԹԵՔ ԳՐՈՒՊ ՍՊԸ',
        address: 'Ք․ Երևան Ս․ Վրացյան 86/7',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '00537541',
        phones: [
            {
                phone: '077992126',
                name: null,
            },
        ],
    },
    {
        name: 'Գոռ Արևշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093999940',
                name: null,
            },
        ],
    },
    {
        name: 'Գոռ Արո Ջրվեժ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099002625',
                name: null,
            },
        ],
    },
    {
        name: 'Գոռ Դավիթ Բեկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077285857',
                name: null,
            },
        ],
    },
    {
        name: 'Գոռ Հնաբերդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093669884',
                name: null,
            },
        ],
    },
    {
        name: 'Գոռ Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094343542',
                name: null,
            },
        ],
    },
    {
        name: 'Գոռ Ձորափ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '041108811',
                name: null,
            },
        ],
    },
    {
        name: 'Գոռ Սիմետրիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093644902',
                name: null,
            },
        ],
    },
    {
        name: 'Գոռ Սպիտակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099616916',
                name: null,
            },
        ],
    },
    {
        name: 'Գոռ Սպիտակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099616916',
                name: null,
            },
        ],
    },
    {
        name: 'Գոռ Տեց',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094483268',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Աթենք',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098355453',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Ակնալիճ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093484880',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ անկյունակ տեղական',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093219993',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Առինջ մոլ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094007710',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Ասկոշեն Ռոստովյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098276677',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Արթիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094914631',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Արմավիր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '043751010',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Բ4',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096755050',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Գնունի',
        address: 'Ք․Երևան Վարդանանց 78',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '30947015',
        phones: [
            {
                phone: '099191822',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Գնունի Չենջ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091386162',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Դվին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094380946',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Դվին Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094380946',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Զեյթուն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091248550',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Էջմիածին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093484880',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Էջմիածին էլեկտրո ապրանք.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098333081',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Խաչիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055008001',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Ծիածան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093818018',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Հրազդան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093360399',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Մասիվ մատակարար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098276677',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Մարտունի',
        address: 'Գյուղ Արծվանիստ 1փողոց 107',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '72907121',
        phones: [
            {
                phone: '077572658',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Միսակյան Ակնալիճ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093484880',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Մխիթարյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095121531',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Մռո շինանյութ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099451508',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Պալդիում վիլկա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '044222229',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Ջերմուկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098686778',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Ստեփանավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093920777',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ Վարդենիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094200334',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ փեթակ դրսի 18/',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098027760',
                name: null,
            },
        ],
    },
    {
        name: 'Գևորգ օդորակիչ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '043200400',
                name: null,
            },
        ],
    },
    {
        name: 'Գուգո 16 կվարտալ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099988883',
                name: null,
            },
        ],
    },
    {
        name: 'Գուգո Ապարան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094394121',
                name: null,
            },
        ],
    },
    {
        name: 'Գուգո Մասիվ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '033058555',
                name: null,
            },
        ],
    },
    {
        name: 'Գուգո մեր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Գուգո Սաքո մեր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'ԳՈՒՅՔԱԳՐՈՒՄ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Գուրգե Արագաց',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093004024',
                name: null,
            },
        ],
    },
    {
        name: 'Գուրգեն Գնունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091407047',
                name: null,
            },
        ],
    },
    {
        name: 'Գուրգեն Գուրենո ՍՊԸ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099099300',
                name: null,
            },
        ],
    },
    {
        name: 'Գուրգեն Եղեգնաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093181616',
                name: null,
            },
        ],
    },
    {
        name: 'Գուրգեն Պտղնի Ալֆա Շին Թրեյդին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077100090',
                name: null,
            },
        ],
    },
    {
        name: 'Գուրգեն Տաշիր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094614603',
                name: null,
            },
        ],
    },
    {
        name: 'Գոքոր Աղաս Արինջ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091013757',
                name: null,
            },
        ],
    },
    {
        name: 'Գոքոր Աղաս Գառաժ Մոլ',
        address: 'Մազմանյան 1',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '01246238',
        phones: [
            {
                phone: '091305559',
                name: null,
            },
            {
                phone: '077607661',
                name: null,
            },
        ],
    },
    {
        name: 'Գոքոր Աղասի կվարտալ',
        address: 'Գևորգ Չաուշ 34',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '01246238',
        phones: [
            {
                phone: '091013757',
                name: null,
            },
        ],
    },
    {
        name: 'Գրիգոր Արտաշատ Նորաշեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077454611',
                name: null,
            },
        ],
    },
    {
        name: 'Գրիգոր Գառնի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096705702',
                name: null,
            },
        ],
    },
    {
        name: 'Գրիգոր ծաղկի գործ',
        address: 'ՀՀ Ք Երևան Կենտրոն թաղ․ Աթենքի 10',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '00543165',
        phones: [
            {
                phone: '098368557',
                name: null,
            },
        ],
    },
    {
        name: 'Գրիգոր ՋԻ-ՋԻ ՍՈԼՅՈՒՇՆՍ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055898899',
                name: null,
            },
        ],
    },
    {
        name: 'Գրիգոր Սպիտակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094554660',
                name: null,
            },
        ],
    },
    {
        name: 'Գրիշ Արմեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099074740',
                name: null,
            },
        ],
    },
    {
        name: 'Գրիշ Եղեգնաձոր  Սաֆարյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093236016',
                name: null,
            },
        ],
    },
    {
        name: 'Գրիշ ԷԼԵԿՏՐԻԿԱ',
        address: 'Ք․Երևան Վարդանանց փ․78',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '02633964',
        phones: [
            {
                phone: '096294929',
                name: null,
            },
        ],
    },
    {
        name: 'Գրիշա Աղավնաձոր Պետրոսյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093429472',
                name: null,
            },
        ],
    },
    {
        name: 'Գրիշա Արմա Լեդեր ՍՊԸ',
        address: null,
        priceAdjustment: -20,
        taxpayerRegistrationNumber: '02267957',
        phones: [
            {
                phone: '099284146',
                name: null,
            },
            {
                phone: '041214772',
                name: null,
            },
        ],
    },
    {
        name: 'Դանիել Akfix',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093748244',
                name: null,
            },
        ],
    },
    {
        name: 'Դանիել Կոմիտաս',
        address: 'Կոտայքի մարզ Գ Առինջ Խ․ Աբովյան թաղամաս 8րդ փող 2 հող',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '01028391',
        phones: [
            {
                phone: '091420631',
                name: null,
            },
        ],
    },
    {
        name: 'Դավիթ M-շին բառի խանութ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '01315961',
        phones: [
            {
                phone: '098909909',
                name: null,
            },
            {
                phone: '096101100',
                name: null,
            },
            {
                phone: '041029909',
                name: null,
            },
        ],
    },
    {
        name: 'Դավիթ Աբովյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098568433',
                name: null,
            },
        ],
    },
    {
        name: 'Դավիթ Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077575465',
                name: null,
            },
        ],
    },
    {
        name: 'Դավիթ բանվորի արձան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094570715',
                name: null,
            },
        ],
    },
    {
        name: 'Դավիթ Գյումրի Թորոսյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099593969',
                name: null,
            },
        ],
    },
    {
        name: 'Դավիթ Դանիելյան Աբովյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094108188',
                name: null,
            },
        ],
    },
    {
        name: 'Դավիթ Դարչինյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055568414',
                name: null,
            },
        ],
    },
    {
        name: 'Դավիթ Մաստեր Կլեյին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093177382',
                name: null,
            },
        ],
    },
    {
        name: 'Դավիթ Մարալիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077904490',
                name: null,
            },
        ],
    },
    {
        name: 'Դավիթ Նոր Գյուղ',
        address: 'Նոր Գյուղ 1փ․1/1',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '86728214',
        phones: [
            {
                phone: '077773699',
                name: null,
            },
        ],
    },
    {
        name: 'Դավիթ Նոր Հաճն Բարսեղյան Նաիրի',
        address: 'Նոր Հաճն Շահումյան 2/7',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '43247244',
        phones: [
            {
                phone: '077773699',
                name: null,
            },
        ],
    },
    {
        name: 'Դավիթ Պռոշյան սովխոզ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '058776535',
                name: null,
            },
        ],
    },
    {
        name: 'Դավիթ ՌԵԴԱ ՍՊԸ Ղարաբաղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '097235703',
                name: null,
            },
        ],
    },
    {
        name: 'Դավիթ Սևան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094553203',
                name: null,
            },
        ],
    },
    {
        name: 'Դավիթ Սմարթ Ֆասադ',
        address: 'Ք Երևան Եղվարդի խճուղի 111',
        priceAdjustment: -5,
        taxpayerRegistrationNumber: '01356792',
        phones: [
            {
                phone: '099950112',
                name: null,
            },
        ],
    },
    {
        name: 'Դավիթ Վայք',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093000271',
                name: null,
            },
        ],
    },
    {
        name: 'Դավիթ Տնաշեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077720160',
                name: null,
            },
        ],
    },
    {
        name: 'Դավիթ Տուն կոմպլեքս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Դավիթ Օշական',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '097202177',
                name: null,
            },
        ],
    },
    {
        name: 'Դավո Դեկոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Դավո ԴՄ մարկետ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094504771',
                name: null,
            },
        ],
    },
    {
        name: 'Դավո Մոնումենտ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093454567',
                name: null,
            },
        ],
    },
    {
        name: 'Դավո Նոր աստղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077245622',
                name: null,
            },
        ],
    },
    {
        name: 'Դավո Փեթակ Արման',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Դեկոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Դոլֆին ՍՊԸ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '02545909',
        phones: [
            {
                phone: '099565501',
                name: null,
            },
            {
                phone: '091920920',
                name: null,
            },
        ],
    },
    {
        name: 'Եղիշ Ժայռ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077474375',
                name: null,
            },
        ],
    },
    {
        name: 'Եղիշ Հոկտեմբերյան թունաքիմիկատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093440266',
                name: null,
            },
        ],
    },
    {
        name: 'Երվանդ մասիվ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099121454',
                name: null,
            },
            {
                phone: '077121456',
                name: 'ԱՍՏՂԻԿ',
            },
        ],
    },
    {
        name: 'Եփո Կալդե',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094842222',
                name: null,
            },
        ],
    },
    {
        name: 'Զառա Կոմիտաս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055098777',
                name: null,
            },
        ],
    },
    {
        name: 'Զավեն Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098588220',
                name: null,
            },
        ],
    },
    {
        name: 'Զավեն Տեց',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Զոհրաբ Նարեկ գյուղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093509023',
                name: null,
            },
        ],
    },
    {
        name: 'Զորիկ Աբովյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091060680',
                name: null,
            },
        ],
    },
    {
        name: 'Զորիկ Բաղրամյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094700066',
                name: null,
            },
        ],
    },
    {
        name: 'Զորիկ զոդման ապակի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094099594',
                name: null,
            },
        ],
    },
    {
        name: 'Զորիկ Նորապատ Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077978997',
                name: null,
            },
        ],
    },
    {
        name: 'Զորիկ չարբախ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077413831',
                name: null,
            },
        ],
    },
    {
        name: 'Էդգար Աբովյան Unical house',
        address: 'քաղաք Աբովյան , Հատիսի 1/104',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '03575011',
        phones: [
            {
                phone: '091030300',
                name: null,
            },
        ],
    },
    {
        name: 'Էդգար Աշտարակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096606600',
                name: null,
            },
            {
                phone: '093584900',
                name: null,
            },
        ],
    },
    {
        name: 'Էդգար Ավետիսյան Ա/Ձ',
        address: null,
        priceAdjustment: -5,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077779670',
                name: null,
            },
        ],
    },
    {
        name: 'Էդգար ԱՐՄԱՆՍՈՆ ՍՊԸ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077104700',
                name: null,
            },
        ],
    },
    {
        name: 'Էդգար Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094443098',
                name: null,
            },
        ],
    },
    {
        name: 'Էդգար Զեյթուն Գուտապ',
        address: 'Ք.Երևան Ռուբինյանց 10 շենքի կից',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '25311808',
        phones: [
            {
                phone: '055993388',
                name: null,
            },
        ],
    },
    {
        name: 'Էդգար Էջմիածին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094995141',
                name: null,
            },
        ],
    },
    {
        name: 'Էդգար կոմպյուտերի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Էդգար Հովհաննիսյան Ա/Ձ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093009898',
                name: null,
            },
        ],
    },
    {
        name: 'Էդգար մեր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Էդգար Ուլնեցի MYHOME',
        address: 'Կ․ Ուլնեցու 62/2',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '00521233',
        phones: [
            {
                phone: '077975747',
                name: null,
            },
        ],
    },
    {
        name: 'Էդգար Սարո Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077706724',
                name: null,
            },
            {
                phone: '093896897',
                name: null,
            },
        ],
    },
    {
        name: 'Էդգար Սոլար արևային համակ.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077555961',
                name: null,
            },
        ],
    },
    {
        name: 'Էդգար Ստեփանավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '044885550',
                name: null,
            },
        ],
    },
    {
        name: 'Էդգար փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'էդգար փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091423452',
                name: null,
            },
        ],
    },
    {
        name: 'Էդգար Քաջարան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093000899',
                name: null,
            },
        ],
    },
    {
        name: 'Էդգար քեմիքլս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Էդիկ Աբովյան Հանրապետական',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077955235',
                name: null,
            },
        ],
    },
    {
        name: 'Էդիկ Միկա Գլենդել-Հիլզ',
        address: 'Արգիշտի 11/3',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '02598978',
        phones: [
            {
                phone: '055355004',
                name: null,
            },
        ],
    },
    {
        name: 'Էդմոն ՏՈԴՈՍ ԱԿԱ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Էդո EDON',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094019070',
                name: null,
            },
        ],
    },
    {
        name: 'Էդո Ալաշկերտ Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077569888',
                name: null,
            },
        ],
    },
    {
        name: 'Էդո Գնունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096080808',
                name: null,
            },
        ],
    },
    {
        name: 'Էդո Գողթ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091664767',
                name: null,
            },
        ],
    },
    {
        name: 'Էդո Դիօկսիդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093202428',
                name: null,
            },
        ],
    },
    {
        name: 'Էդո Խանջյան',
        address: 'Գ․Խանջյան',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '49571803',
        phones: [
            {
                phone: '093341525',
                name: null,
            },
        ],
    },
    {
        name: 'Էդո Հրազդան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098282896',
                name: null,
            },
        ],
    },
    {
        name: 'Էդո պուշկա EDON',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Էդո Ջերմուկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095707908',
                name: null,
            },
        ],
    },
    {
        name: 'Էդո Ռուբինար',
        address: 'Ք․Երևան Թեյշեբաինի 3/5',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '00460786',
        phones: [
            {
                phone: '094333529',
                name: null,
            },
        ],
    },
    {
        name: 'Էդո Վարդենիս սվարչիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098757872',
                name: null,
            },
        ],
    },
    {
        name: 'Էդուարդ ոսկու շուկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098215588',
                name: null,
            },
        ],
    },
    {
        name: 'Էդվարդ Ալաշկերտ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077569888',
                name: null,
            },
        ],
    },
    {
        name: 'Էդվարդ Էջմիածին',
        address: 'Արմավիրի մարզ գ․ Առատաշեն Մաշտոցի 10/',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '49659048',
        phones: [
            {
                phone: '093000768',
                name: null,
            },
        ],
    },
    {
        name: 'Էդվարդ ոսկու շուկա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098215588',
                name: null,
            },
        ],
    },
    {
        name: 'Էդվին Էջմիածին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094418933',
                name: null,
            },
        ],
    },
    {
        name: 'Էլիտ շինանյութ Հարութ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077428544',
                name: null,
            },
            {
                phone: '077542484',
                name: null,
            },
        ],
    },
    {
        name: 'Էմանուել Բերդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094909115',
                name: null,
            },
        ],
    },
    {
        name: 'Էմիլ Լուսակերտ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093698200',
                name: null,
            },
        ],
    },
    {
        name: 'Էմին Քանաքեր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055169016',
                name: null,
            },
        ],
    },
    {
        name: 'Էռնեստ Գնունի',
        address: 'Ք․Երևան Չարենցի փող․2նրբ․32տուն',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '30943289',
        phones: [
            {
                phone: '099800808',
                name: null,
            },
        ],
    },
    {
        name: 'Էրիկ Եղեգնաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094453212',
                name: null,
            },
        ],
    },
    {
        name: 'Էրիկ Մասիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093344997',
                name: null,
            },
        ],
    },
    {
        name: 'Էրիկ Նար-դոս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '044889696',
                name: null,
            },
        ],
    },
    {
        name: 'Էրիկ Շանի Հկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Թաթուլ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098124414',
                name: null,
            },
        ],
    },
    {
        name: 'Թաթուլ էջմիածին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098010069',
                name: null,
            },
        ],
    },
    {
        name: 'Թաթուլ մեր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055937789',
                name: null,
            },
        ],
    },
    {
        name: 'Թաթուլ մեր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Թովմաս Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093169466',
                name: null,
            },
        ],
    },
    {
        name: 'Ժաննա Սևան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077889693',
                name: null,
            },
        ],
    },
    {
        name: 'Ժիրո Աշտարակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Ժիրո Աշտարակ շլանգի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099111135',
                name: null,
            },
        ],
    },
    {
        name: 'Ժոռ Եղեգնաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098000807',
                name: null,
            },
        ],
    },
    {
        name: 'Ժոռ Սոլո',
        address: null,
        priceAdjustment: 1,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094769392',
                name: null,
            },
        ],
    },
    {
        name: 'ժոռ Փեթակ Asmaco',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077775422',
                name: null,
            },
        ],
    },
    {
        name: 'ԺՎ&Ա ՍՊԸ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093330330',
                name: null,
            },
        ],
    },
    {
        name: 'Իգոր UKRAIN',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Իգոր Գավառ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093414734',
                name: null,
            },
        ],
    },
    {
        name: 'Իլյիչ Ճամբարակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093335356',
                name: null,
            },
        ],
    },
    {
        name: 'Իսահակ  ԴԻ ԵՍ Սիսթեմս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091212062',
                name: null,
            },
        ],
    },
    {
        name: 'Իվան Եղեգնաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094777814',
                name: null,
            },
        ],
    },
    {
        name: 'Իրինա Աշտարակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077807345',
                name: null,
            },
        ],
    },
    {
        name: 'Լապորտիվա ՍՊԸ Աննա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Լեռնիկ Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093201568',
                name: null,
            },
        ],
    },
    {
        name: 'Լեռնիկ Շամշադին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093994422',
                name: null,
            },
        ],
    },
    {
        name: 'Լեռնիկ ցրող',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077072218',
                name: null,
            },
        ],
    },
    {
        name: 'Լիստ․am',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Լյով Արմենի ընկեր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099033303',
                name: null,
            },
        ],
    },
    {
        name: 'Լյով Դավթաշեն',
        address: 'Տիգ.Պետ.48/6',
        priceAdjustment: -2,
        taxpayerRegistrationNumber: '20172914',
        phones: [
            {
                phone: '091504264',
                name: null,
            },
        ],
    },
    {
        name: 'Լյով Զառ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Լյով Մոսկվա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Լյովա Ալավերդի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093003555',
                name: null,
            },
        ],
    },
    {
        name: 'Լյովա Ավշար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098981177',
                name: null,
            },
        ],
    },
    {
        name: 'Լյովա Բանգլադ,',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098657872',
                name: null,
            },
        ],
    },
    {
        name: 'Լյովա Բանգլադեշ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099657872',
                name: null,
            },
            {
                phone: '098657872',
                name: null,
            },
        ],
    },
    {
        name: 'Լյովա Գեղանիստ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093743808',
                name: null,
            },
        ],
    },
    {
        name: 'Լյովա Փեթակ (Չաղ)',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093029506',
                name: null,
            },
            {
                phone: '091456643',
                name: null,
            },
        ],
    },
    {
        name: 'Լյուդվիգ ԳԵՅԻՄ ՇԻՆ',
        address: 'Շիրակի մարզի Սարատակ համայնքի միջնակարգ դպրոցի կառուցման հասց․գտնվող հողամաս',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '05561943',
        phones: [
            {
                phone: '094595059',
                name: null,
            },
        ],
    },
    {
        name: 'Լյուդվիգ Գրիգորյան',
        address: null,
        priceAdjustment: -5,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Լյուդվիգ Դոմիքս ՍՊԸ',
        address: 'ԵՐԵՎԱՆ ԱՐԱԲԿԻՐ ԱՐԱԲԿԻՐ ԹԱՂԱՄԱՍ ՆԱԻՐԻ ԶԱՐՅԱՆ Փ. 22Ա',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '08290918',
        phones: [
            {
                phone: '033484858',
                name: null,
            },
        ],
    },
    {
        name: 'Լոյլ բիզնես',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Լևոն  ԼԵՎԿՈՄՊ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094062021',
                name: null,
            },
        ],
    },
    {
        name: 'Լևոն Գագո Եղեգնաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077349999',
                name: null,
            },
        ],
    },
    {
        name: 'Լևոն Գեղանիստ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077398008',
                name: null,
            },
        ],
    },
    {
        name: 'Լևոն Գյումրի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095055060',
                name: null,
            },
        ],
    },
    {
        name: 'Լևոն Դիլիջան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '041577057',
                name: null,
            },
        ],
    },
    {
        name: 'Լևոն Հովտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077527252',
                name: null,
            },
        ],
    },
    {
        name: 'Լևոն ոսկու շուկա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093561155',
                name: null,
            },
        ],
    },
    {
        name: 'Լևոն Չինարի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093877113',
                name: null,
            },
        ],
    },
    {
        name: 'Լևոն Պռոշյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077032260',
                name: null,
            },
        ],
    },
    {
        name: 'Լորենց պալաս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095877878',
                name: null,
            },
        ],
    },
    {
        name: 'Լորետա Սևան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093024527',
                name: null,
            },
        ],
    },
    {
        name: 'Լութո Տաշիր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093679747',
                name: null,
            },
        ],
    },
    {
        name: 'Լուվա ՍՊԸ Շուշանիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093450991',
                name: null,
            },
        ],
    },
    {
        name: 'Խ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Խաչատուր Արշալույս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093937893',
                name: null,
            },
        ],
    },
    {
        name: 'Խաչիկ Աբովյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098535744',
                name: null,
            },
        ],
    },
    {
        name: 'Խաչիկ Աբովյան 6-րդ Միկրո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '044177111',
                name: null,
            },
        ],
    },
    {
        name: 'Խաչիկ Աշտարակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099999914',
                name: null,
            },
        ],
    },
    {
        name: 'Խաչիկ Աշտարակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093774888',
                name: null,
            },
        ],
    },
    {
        name: 'Խաչիկ Գյումրի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077731112',
                name: null,
            },
        ],
    },
    {
        name: 'Խաչիկ Թալին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077802900',
                name: null,
            },
        ],
    },
    {
        name: 'Խաչիկ Մալաթյա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093307542',
                name: null,
            },
        ],
    },
    {
        name: 'Խաչիկ Մարալիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094041319',
                name: null,
            },
        ],
    },
    {
        name: 'Խաչիկ Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093828973',
                name: null,
            },
        ],
    },
    {
        name: 'Խաչիկ վարդենիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094560057',
                name: null,
            },
        ],
    },
    {
        name: 'Խաչիկ Վեդի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Խաչո Նոյեմբերյան Կոթի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094245181',
                name: null,
            },
        ],
    },
    {
        name: 'Խլղաթյան Շին ՍՊԸ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '04422512',
        phones: [
            {
                phone: '091040066',
                name: null,
            },
        ],
    },
    {
        name: 'Ծովիկ Գառնի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099387006',
                name: null,
            },
        ],
    },
    {
        name: 'Կամո Մալաթյա շուկա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091513678',
                name: null,
            },
        ],
    },
    {
        name: 'Կամո Մարալիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093810191',
                name: null,
            },
        ],
    },
    {
        name: 'Կամո Սարո Արգավանդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077361131',
                name: null,
            },
        ],
    },
    {
        name: 'Կամո վարդենիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093878955',
                name: null,
            },
        ],
    },
    {
        name: 'Կառլեն Աշտարակ ԻՆՈՍԻՄՍ',
        address: 'Ք Աշտարակ Նարեկացու 84/1',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '05027421',
        phones: [
            {
                phone: '093153815',
                name: null,
            },
        ],
    },
    {
        name: 'Կարապետ Գյումրի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094335694',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն 1 մաս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094474583',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն 3 մաս Չեխովի փող.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096110109',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն ԱՊՐԵԿՈ սպը',
        address: 'Ք․Երևան Մալխասյանց 9',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '02703454',
        phones: [
            {
                phone: '077543333',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Արայիկ Տռապի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Կարեն Արզնի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096338844',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Արթուր Փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Կարեն Արման Ավան',
        address: 'ԵՐԵՎԱՆ ՆՈՐ ՆՈՐՔ ՆՈՐ ՆՈՐՔ ԹԱՂԱՄԱՍ ԽՈՒԴՅԱԿՈՎԻ Փ. 184/2',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '01016635',
        phones: [
            {
                phone: '098417746',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094607344',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Բյուրավան Արտաշատ',
        address: 'Բյուրավան Հ․ Սահակյան 1',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '47860588',
        phones: [
            {
                phone: '098763441',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն բուժանյութեր Նոր Գեղի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093696920',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Գազպրոմ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Կարեն Գյումրի ռադիոտեխն.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093188194',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն գնունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Կարեն Եղվարդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099554322',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն ԶԻՊՈՆ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091215486',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Էլեկտրիկ Օրբելի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Կարեն Էլիտա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077746001',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Էքստերիեր Փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099430664',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Թալին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077185577',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Լուսակերտ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094252420',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Կոմիտաս Խաչատրյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094976710',
                name: null,
            },
            {
                phone: '091976710',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Հադրութ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '097760000',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '033630333',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Ղազարյան Ա/Ձ',
        address: 'Ք․Երևան Գայի Պողոտա 12/2 41Ա․տաղավար',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '25295609',
        phones: [
            {
                phone: '091547543',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Ղարաբաղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '097102222',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Մասիվ',
        address: 'Բ.Մուրադյան  2/3',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '83813335',
        phones: [
            {
                phone: '077649008',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն մասիվ Մատակարար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077649008',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Մարգարյան փողոց',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093770224',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Մարտունի Աստղաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094381999',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Մխչյան ԿՌ Շին',
        address: 'ՀՀ Արարատի մարզ գյուղ Մխչյան Շահումյան փողոց տուն 23',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '04237648',
        phones: [
            {
                phone: '077198989',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Մրգաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093453343',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն ներժ տռապ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091104400',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Նոյեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '041833300',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Նոր Գեղի',
        address: 'Կոտայքի մարզ, Գ․ Նոր Գեղի Երևանյան փ․ 249',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '81688109',
        phones: [
            {
                phone: '077155154',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Շամշադին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093544141',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Շինարար քայլող',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Կարեն Ոսկեհատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094818192',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Ոսկեվազ',
        address: 'Արագածոտնի մարզ, Ոսկևազ',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '54656491',
        phones: [
            {
                phone: '077235236',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Սիսիան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077005667',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Վարուժ Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099060800',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Վերշինա Կահույք',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055336605',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն տերմինալ S1ծրագիր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091238181',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն փեթակ ձոր 1',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098385722',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Քանաքեռ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055442266',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Քասախ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099475445',
                name: null,
            },
        ],
    },
    {
        name: 'Կարեն Ֆուրմանով',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091736515',
                name: null,
            },
        ],
    },
    {
        name: 'Կարո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Կարո ծաղիգի գործ անող',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '043300202',
                name: null,
            },
        ],
    },
    {
        name: 'Կարո Մասիվ ցրող',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091122232',
                name: null,
            },
        ],
    },
    {
        name: 'Կնյազ  Ախուրյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093183065',
                name: null,
            },
        ],
    },
    {
        name: 'Կոլյա Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094930505',
                name: null,
            },
        ],
    },
    {
        name: 'Հակման Երևան Տոնավաճառ',
        address: 'ԵՐԵՎԱՆ ՇԵՆԳԱՎԻԹ ՇԵՆԳԱՎԻԹ ԹԱՂԱՄԱՍ Ս.ԶՈՐԱՎԱՐԻ Փ. 11/1 շ.',
        priceAdjustment: -5,
        taxpayerRegistrationNumber: '02820198',
        phones: [
            {
                phone: '098026600',
                name: null,
            },
            {
                phone: '077706755',
                name: null,
            },
        ],
    },
    {
        name: 'Հակոբ Աբաջյան Շին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Հակոբ Ալեք Մանուկյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055464449',
                name: null,
            },
        ],
    },
    {
        name: 'Հակոբ Արեշ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094802810',
                name: null,
            },
        ],
    },
    {
        name: 'Հակոբ Գնունի',
        address: 'Վարդանանց  78',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '30939705',
        phones: [
            {
                phone: '098426780',
                name: null,
            },
        ],
    },
    {
        name: 'Հակոբ Զովունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093334633',
                name: null,
            },
        ],
    },
    {
        name: 'Հակոբ ԻՆՎԻ',
        address: 'Արտաշիսյան 94/38',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '02599869',
        phones: [
            {
                phone: '033888868',
                name: null,
            },
        ],
    },
    {
        name: 'Հակոբ Ծիածան Վիկտոր Համբ.',
        address: 'ԵՐԵՎԱՆ ԱՐԱԲԿԻՐ ԱՐԱԲԿԻՐ ԹԱՂԱՄԱՍ Ա. ԱՎԵՏԻՍՅԱՆ Փ. 78 շ. 3 բն.',
        priceAdjustment: -5,
        taxpayerRegistrationNumber: '00103837',
        phones: [
            {
                phone: '094701551',
                name: null,
            },
        ],
    },
    {
        name: 'Հակոբ Կամեռաներ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099171718',
                name: null,
            },
        ],
    },
    {
        name: 'Հակոբ ՄՄԱ Գրուպ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055696669',
                name: null,
            },
        ],
    },
    {
        name: 'Հակոբ ոսկու բազառ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093569515',
                name: null,
            },
        ],
    },
    {
        name: 'Հակոբ Սահակ-Սերվիս',
        address: 'Բաղրամյան 69',
        priceAdjustment: -2,
        taxpayerRegistrationNumber: '01242005',
        phones: [
            {
                phone: '094937474',
                name: null,
            },
            {
                phone: '012203203',
                name: null,
            },
        ],
    },
    {
        name: 'Հակոբ Վարթենիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077790199',
                name: null,
            },
        ],
    },
    {
        name: 'Հակոբ ք.Աբովյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093451945',
                name: null,
            },
        ],
    },
    {
        name: 'Հակոբ քայլող',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096784448',
                name: null,
            },
        ],
    },
    {
        name: 'Հակոբ Քյավառ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091764563',
                name: null,
            },
        ],
    },
    {
        name: 'Համիկ Արտաշատ ՀՎԳ',
        address: 'Օգոստոսի 23 տուն 17 Արարատի մարզ Ք Արտաշատ',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '04220172',
        phones: [
            {
                phone: '055424277',
                name: null,
            },
        ],
    },
    {
        name: 'Համլետ Expert 1 Հ. Քոչար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093515924',
                name: null,
            },
            {
                phone: '055654646',
                name: null,
            },
        ],
    },
    {
        name: 'Համլետ Արթիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094080884',
                name: null,
            },
        ],
    },
    {
        name: 'Համլետ պապի քայլող',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Համլետ Վեդի VM',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093777736',
                name: null,
            },
        ],
    },
    {
        name: 'Համո Աշտարակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098242424',
                name: null,
            },
        ],
    },
    {
        name: 'Համո Գավառ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094751504',
                name: null,
            },
        ],
    },
    {
        name: 'Համո գնունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091477210',
                name: null,
            },
        ],
    },
    {
        name: 'Համո Եղվարդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094062636',
                name: null,
            },
        ],
    },
    {
        name: 'Համո Մոնոլիտ հաճախորդ',
        address: 'ԵՐԵՎԱՆ ՇԵՆԳԱՎԻԹ ԹԱՂԱՄԱՍ ԱՐՏԱՇԻՍՅԱՆ 94/16',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '08909273',
        phones: [],
    },
    {
        name: 'Համո Ռաֆ․METAL Group',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '01268239',
        phones: [
            {
                phone: '096469018',
                name: null,
            },
        ],
    },
    {
        name: 'Համո Ստեփանավան հյուրանոց',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093911122',
                name: null,
            },
        ],
    },
    {
        name: 'Համո տեց',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077060142',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ և Ռաֆայել ՍՊԸ Էդո VAK',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094333529',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ 2-րդ Մասիվ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095078887',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ Առինջ',
        address: 'Առինջ',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '71008614',
        phones: [
            {
                phone: '093031102',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ Արմավիր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093184804',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ Արո Փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055535304',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ Գազավիկ',
        address: null,
        priceAdjustment: -5,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095888866',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ Գիռոս Արմեն',
        address: null,
        priceAdjustment: -5,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095652220',
                name: null,
            },
            {
                phone: '077717548',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ Դոմինո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091602939',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ Էլեկտրիկ սմարտ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094932324',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ Թալին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093701966',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ Թել Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094670220',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ Ծիածան Ռոստովյան 11/4',
        address: 'Ք․Երևան Ռոստովյան 11/4',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '01273864',
        phones: [
            {
                phone: '094190088',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ հարևան Սամո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Հայկ Հովիկ Գնունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099727735',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ Հրազդան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098404203',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ Մարգարյ.փող.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094190088',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098000630',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ Պենոտեքս ՍՊԸ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099552009',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ Պլանետ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055881234',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ սիլիկոն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099599655',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ Ստեփանավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094819218',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ Վանաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094204235',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկ Փեթակ տնտեսակ.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093195055',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկազ 3-րդ Մաս Սամվել',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098922800',
                name: null,
            },
        ],
    },
    {
        name: 'Հայկարամ Գյումրի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093782548',
                name: null,
            },
        ],
    },
    {
        name: 'Հաշվով Փոխանցում',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Հասմիկ Վեդի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094177130',
                name: null,
            },
        ],
    },
    {
        name: 'Հարութ Աբովյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077816033',
                name: null,
            },
        ],
    },
    {
        name: 'Հարութ ածուխ պահեստի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Հարութ Արգավանդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055437702',
                name: null,
            },
        ],
    },
    {
        name: 'Հարութ Եղեգնաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077005604',
                name: null,
            },
        ],
    },
    {
        name: 'Հարութ կաբելային',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098098407',
                name: null,
            },
        ],
    },
    {
        name: 'Հարութ Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077772444',
                name: null,
            },
        ],
    },
    {
        name: 'Հարութ Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094774460',
                name: null,
            },
        ],
    },
    {
        name: 'Հարութ Մոսո Եռանկյունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093967966',
                name: null,
            },
        ],
    },
    {
        name: 'Հարութ Տեց',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077835347',
                name: null,
            },
        ],
    },
    {
        name: 'Հենո Շամշադին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094570405',
                name: null,
            },
        ],
    },
    {
        name: 'Հերմինե MKSS',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055583204',
                name: null,
            },
        ],
    },
    {
        name: 'Հիդրոգռուպ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077393891',
                name: null,
            },
        ],
    },
    {
        name: 'ՀԻՆ ՄՆԱՑՈՐԴ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Հոպար Վարդան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091402517',
                name: null,
            },
        ],
    },
    {
        name: 'Հովասափ Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093341750',
                name: null,
            },
        ],
    },
    {
        name: 'Հովիկ Աշտարակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093516188',
                name: null,
            },
        ],
    },
    {
        name: 'Հովիկ Արտաշատ Գյուղ Նարեկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077590201',
                name: null,
            },
        ],
    },
    {
        name: 'Հովիկ ԳԴՀ ՍՊԸ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091411485',
                name: null,
            },
            {
                phone: '094401485',
                name: null,
            },
        ],
    },
    {
        name: 'Հովիկ Գնունի',
        address: 'Վարդանանաց 69/6 վաճ․ 6/2',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '30941773',
        phones: [
            {
                phone: '091374102',
                name: null,
            },
        ],
    },
    {
        name: 'Հովիկ Գնունի էլեկտրո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091727725',
                name: null,
            },
        ],
    },
    {
        name: 'Հովիկ Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093109320',
                name: null,
            },
        ],
    },
    {
        name: 'Հովիկ Սարի Թաղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099222747',
                name: null,
            },
        ],
    },
    {
        name: 'Հովիկ Վաղարշյան Ավետիսյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098090405',
                name: null,
            },
        ],
    },
    {
        name: 'Հովհաննես Նորք-Մարաշ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091300960',
                name: null,
            },
        ],
    },
    {
        name: 'Հովհաննես Վեդի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093285039',
                name: null,
            },
        ],
    },
    {
        name: 'Հովո Ազատան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094814932',
                name: null,
            },
        ],
    },
    {
        name: 'Հովո Լայվ Գրուպ BOSCH',
        address: 'Արշակունյաց 17/14 շենք 12',
        priceAdjustment: -5,
        taxpayerRegistrationNumber: '00190799',
        phones: [
            {
                phone: '094664577',
                name: null,
            },
        ],
    },
    {
        name: 'Հովո Կուդո ներկ տանող',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Հովո կվարտալ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094439595',
                name: null,
            },
        ],
    },
    {
        name: 'Հովո հաճախորդ (Terminator)',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '82917917',
        phones: [
            {
                phone: '099691038',
                name: null,
            },
            {
                phone: '093861122',
                name: null,
            },
        ],
    },
    {
        name: 'Հովո Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094030052',
                name: null,
            },
        ],
    },
    {
        name: 'Հովո Շինարար Էրեբունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '043502000',
                name: null,
            },
        ],
    },
    {
        name: 'Հովո Չարբախ տնտեսակ.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093801060',
                name: null,
            },
        ],
    },
    {
        name: 'Հովո Սարյան փող.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Հովո Տանձուտ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093505520',
                name: null,
            },
        ],
    },
    {
        name: 'Հովո Քաղցրաշեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '041838689',
                name: null,
            },
        ],
    },
    {
        name: 'Հովսեփ դույլ շինարարական',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093741714',
                name: null,
            },
        ],
    },
    {
        name: 'Հովսեփ Մասիվ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094116060',
                name: null,
            },
        ],
    },
    {
        name: 'Հունան Գնունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077081154',
                name: null,
            },
        ],
    },
    {
        name: 'Հուսիկ Աշոցք',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094909067',
                name: null,
            },
        ],
    },
    {
        name: 'Հուսիկ Արեստակեսյան Բոքս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091490692',
                name: null,
            },
        ],
    },
    {
        name: 'Հուսիկ Եղեգնաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099336020',
                name: null,
            },
        ],
    },
    {
        name: 'Հրայր Մամիկոն Եղվարդ ներկրող',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Հրայր Մարտակերտ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '097210999',
                name: null,
            },
        ],
    },
    {
        name: 'Հրայր Չարենցավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093999985',
                name: null,
            },
        ],
    },
    {
        name: 'Հրայր Ստեփանավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093303100',
                name: null,
            },
        ],
    },
    {
        name: 'Հրայր Ստեփանավան Փայտփորիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099777620',
                name: null,
            },
        ],
    },
    {
        name: 'Հրայր փեթակ N13',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093411783',
                name: null,
            },
        ],
    },
    {
        name: 'Հրանտ Արմաշ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093699615',
                name: null,
            },
        ],
    },
    {
        name: 'Հրանտ Եղեգնաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094120622',
                name: null,
            },
        ],
    },
    {
        name: 'Հրաչ 3-րդ մաս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055160902',
                name: null,
            },
        ],
    },
    {
        name: 'Հրաչ 6 րդ մասիվ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091496006',
                name: null,
            },
        ],
    },
    {
        name: 'Հրաչ Արևիկ Մկո',
        address: 'Ք․ Երևան Վարդանանց 24 շին․ թիվ 41',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '01514539',
        phones: [
            {
                phone: '093722244',
                name: null,
            },
        ],
    },
    {
        name: 'Հրաչ Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098565980',
                name: null,
            },
        ],
    },
    {
        name: 'Հրաչ Արցախի փողոց',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055212224',
                name: null,
            },
            {
                phone: '093212234',
                name: null,
            },
        ],
    },
    {
        name: 'Հրաչ արցախի փողոց',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055105523',
                name: null,
            },
        ],
    },
    {
        name: 'Հրաչ գազ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093426522',
                name: null,
            },
        ],
    },
    {
        name: 'Հրաչ Եղվարդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093131799',
                name: null,
            },
        ],
    },
    {
        name: 'Հրաչ Զեյթուն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094331078',
                name: null,
            },
        ],
    },
    {
        name: 'Հրաչ Էջմիածին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093187520',
                name: null,
            },
        ],
    },
    {
        name: 'Հրաչ Վարդենիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093605066',
                name: null,
            },
        ],
    },
    {
        name: 'Հրո Երևան տոնավաճառ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091412596',
                name: null,
            },
        ],
    },
    {
        name: 'Հրո փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Ղազար ՈՒջան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094117736',
                name: null,
            },
        ],
    },
    {
        name: 'Մագդա երևան տոնավաճառ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Մահմադ Պարսիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093655590',
                name: null,
            },
        ],
    },
    {
        name: 'Մամիկ․ Հրայր Դավթաշեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094434904',
                name: null,
            },
        ],
    },
    {
        name: 'Մամիկոն Եղվարդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094434904',
                name: null,
            },
        ],
    },
    {
        name: 'Մամիկոն Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094669667',
                name: null,
            },
        ],
    },
    {
        name: 'Մամիկոն Շին Լիդեռ',
        address: 'Ք․ Երևան Արշակունյաց 204',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '02259512',
        phones: [
            {
                phone: '033950709',
                name: null,
            },
        ],
    },
    {
        name: 'Մայիս Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077593657',
                name: null,
            },
        ],
    },
    {
        name: 'Մանուկ Դեմո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055535391',
                name: null,
            },
        ],
    },
    {
        name: 'Մանուկ կայարան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Մանվել Նարեկ էջմիածին Ջրառատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093096600',
                name: null,
            },
        ],
    },
    {
        name: 'Մարատ Գազի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098501002',
                name: null,
            },
        ],
    },
    {
        name: 'Մարատ Եղվարդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098883680',
                name: null,
            },
        ],
    },
    {
        name: 'Մարգար Գորիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094536677',
                name: null,
            },
        ],
    },
    {
        name: 'Մարգար Եղեգնաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093171168',
                name: null,
            },
        ],
    },
    {
        name: 'Մարգար հաճախորդ մանղալ սարգ․',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077558644',
                name: null,
            },
        ],
    },
    {
        name: 'Մարգար Նոր աստղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094353620',
                name: null,
            },
            {
                phone: '077245622',
                name: 'Դավո',
            },
        ],
    },
    {
        name: 'Մարգար Պարսկ.ապրանք',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Մարգար պռակլատկի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091487883',
                name: null,
            },
        ],
    },
    {
        name: 'Մարզպետ Թալին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099383800',
                name: null,
            },
        ],
    },
    {
        name: 'Մարզպետ Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093144898',
                name: null,
            },
        ],
    },
    {
        name: 'Մարտիկ Չարենցավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077804900',
                name: null,
            },
        ],
    },
    {
        name: 'Մարտին Ավել',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077369687',
                name: null,
            },
        ],
    },
    {
        name: 'Մարտին-Տիգրան ՍՊԸ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098823878',
                name: null,
            },
        ],
    },
    {
        name: 'Մարտիրոսյան Շին Քոնսթրաքշն',
        address: 'Ք․Եղվարդ Երևանյան թաղամաս 7/7',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '03581314',
        phones: [
            {
                phone: '099800810',
                name: null,
            },
        ],
    },
    {
        name: 'Մարտուն Ամասիա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093230193',
                name: null,
            },
        ],
    },
    {
        name: 'Մարտուն Վանաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094273838',
                name: null,
            },
        ],
    },
    {
        name: 'Մացո Գյումրի սեպերատոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093317361',
                name: null,
            },
        ],
    },
    {
        name: 'Մացո Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099090075',
                name: null,
            },
        ],
    },
    {
        name: 'Մաքսիմ Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094349452',
                name: null,
            },
        ],
    },
    {
        name: 'Մեսրոպ Ախթալա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077402000',
                name: null,
            },
        ],
    },
    {
        name: 'Մեսրոպ Գավառ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093213003',
                name: null,
            },
        ],
    },
    {
        name: 'Մեսրոպ Էջմիածին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093323100',
                name: null,
            },
        ],
    },
    {
        name: 'Մետալիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077531853',
                name: null,
            },
        ],
    },
    {
        name: 'Մերուժ Հիմնադրամ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094800509',
                name: null,
            },
        ],
    },
    {
        name: 'Մերուժ Մանթաշ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098322652',
                name: null,
            },
        ],
    },
    {
        name: 'Մերուժ Ֆուրմանով',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055979566',
                name: null,
            },
        ],
    },
    {
        name: 'Միհրան Makita մեր',
        address: null,
        priceAdjustment: -4,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096641444',
                name: null,
            },
            {
                phone: '091710444',
                name: null,
            },
        ],
    },
    {
        name: 'Միհրան Դավթաշեն ՀՈՄ.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '033717000',
                name: null,
            },
        ],
    },
    {
        name: 'Մինաս Սուրմալու',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098218188',
                name: null,
            },
        ],
    },
    {
        name: 'Միշա Ղարաբաղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093660009',
                name: null,
            },
        ],
    },
    {
        name: 'Միշա Մարտունի Վարդաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094169995',
                name: null,
            },
        ],
    },
    {
        name: 'Միշա Մերձավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099218500',
                name: null,
            },
        ],
    },
    {
        name: 'Միշա Քանաքեռ Գես',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094447748',
                name: null,
            },
        ],
    },
    {
        name: 'Միսակ  Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094341452',
                name: null,
            },
        ],
    },
    {
        name: 'Միսակ Արմավիր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098285320',
                name: null,
            },
        ],
    },
    {
        name: 'Միսակ Հովո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098668533',
                name: null,
            },
        ],
    },
    {
        name: 'Միսակ Սարգսյան Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094320107',
                name: null,
            },
        ],
    },
    {
        name: 'Միսակ տոնավաճառ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091877470',
                name: null,
            },
        ],
    },
    {
        name: 'Միրզոյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Միքայել Ալավերդի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093723682',
                name: null,
            },
        ],
    },
    {
        name: 'Մխիթար Շինարար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Մխո Ավտոապակիների աշխարհ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Մխո Դավո Կաբել Փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Մխո Էջմիածին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094363909',
                name: null,
            },
        ],
    },
    {
        name: 'Մխո Ղարաբաղ (Դավիթ)',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '097844646',
                name: null,
            },
        ],
    },
    {
        name: 'Մխո Մխչյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077282020',
                name: null,
            },
        ],
    },
    {
        name: 'Մխո փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077667892',
                name: null,
            },
        ],
    },
    {
        name: 'Մկո Ակնալիճ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093228515',
                name: null,
            },
        ],
    },
    {
        name: 'Մկո Արարատյան մասիվ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055940014',
                name: null,
            },
        ],
    },
    {
        name: 'Մկո Բանգլադեշ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091511137',
                name: null,
            },
        ],
    },
    {
        name: 'Մկո բանջարանոց',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077541050',
                name: null,
            },
        ],
    },
    {
        name: 'Մկո Գյումրի ծաղիկի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093090959',
                name: null,
            },
        ],
    },
    {
        name: 'Մկո Ռուբեն Շինանյութ',
        address: 'Ք․ Երևան Սեբաստիա 37/6',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '01817333',
        phones: [
            {
                phone: '043901020',
                name: null,
            },
        ],
    },
    {
        name: 'Մկո սալյուտ Փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094390990',
                name: null,
            },
        ],
    },
    {
        name: 'Մկրտիչ Ծաղկաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091500312',
                name: null,
            },
        ],
    },
    {
        name: 'Մհեր',
        address: 'Բուռնազյան 56',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '02708165',
        phones: [
            {
                phone: '093057007',
                name: null,
            },
        ],
    },
    {
        name: 'Մհեր Արամուս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098440404',
                name: null,
            },
        ],
    },
    {
        name: 'Մհեր Գանձասար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '044355414',
                name: null,
            },
        ],
    },
    {
        name: 'Մհեր Գորիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093022265',
                name: null,
            },
        ],
    },
    {
        name: 'Մհեր Դիլիջան',
        address: 'Ք․ Դիլիջան Այգեստան 17Բ',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '71044982',
        phones: [
            {
                phone: '098044757',
                name: null,
            },
        ],
    },
    {
        name: 'Մհեր Ղափան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094868400',
                name: null,
            },
        ],
    },
    {
        name: 'Մհեր Մարտակերտ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '097229229',
                name: null,
            },
            {
                phone: '055229209',
                name: null,
            },
        ],
    },
    {
        name: 'Մնո Նուբարաշեն',
        address: 'Նուբարաշեն 11փողոց 14/1',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '23252817',
        phones: [
            {
                phone: '094312247',
                name: null,
            },
        ],
    },
    {
        name: 'Մնո Չարենցավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093508530',
                name: null,
            },
        ],
    },
    {
        name: 'Մոսո Լուսակերտ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094676760',
                name: null,
            },
        ],
    },
    {
        name: 'Մոսո Մեծամոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '033901010',
                name: null,
            },
        ],
    },
    {
        name: 'Մոսո Քոչար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098701170',
                name: null,
            },
            {
                phone: '091253002',
                name: null,
            },
        ],
    },
    {
        name: 'Մուշեղ երրորդ գյուղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077667653',
                name: null,
            },
        ],
    },
    {
        name: 'Մուշեղ Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077770087',
                name: null,
            },
        ],
    },
    {
        name: 'Մուշեղ Վանաձոր',
        address: 'Ք․Վանաձոր Նժդեհի 11/2',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '06919906',
        phones: [
            {
                phone: '094171802',
                name: null,
            },
        ],
    },
    {
        name: 'Մուրադ Քաղցրաշեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099014906',
                name: null,
            },
        ],
    },
    {
        name: 'Մռդո Գործիքների աշխարհ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '+37410441398',
                name: null,
            },
        ],
    },
    {
        name: 'Մրդո Հարութ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Մրդո Փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Յուրա Գնունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077911097',
                name: null,
            },
        ],
    },
    {
        name: 'Յուրա Թալին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094932828',
                name: null,
            },
        ],
    },
    {
        name: 'Յուրա Հացառատ(Գավառ)',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093577431',
                name: null,
            },
        ],
    },
    {
        name: 'Յուրա Ղարաբաղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '90026798',
        phones: [
            {
                phone: '044232221',
                name: null,
            },
        ],
    },
    {
        name: 'Նաիրի Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077975411',
                name: null,
            },
        ],
    },
    {
        name: 'Նառա Գեղանիստ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093920237',
                name: null,
            },
        ],
    },
    {
        name: 'Նարդոս պապի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Նարեկ իզոլենտի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '043113911',
                name: null,
            },
        ],
    },
    {
        name: 'Նարեկ Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098973687',
                name: null,
            },
        ],
    },
    {
        name: 'Նարեկ Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Նարեկ Սամո 11տաղ.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098333343',
                name: null,
            },
        ],
    },
    {
        name: 'Նարեկ Սեքյուրիթի Սիսթեմս ՍՊԸ',
        address: null,
        priceAdjustment: -6,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055072200',
                name: null,
            },
            {
                phone: '055200188',
                name: null,
            },
        ],
    },
    {
        name: 'Նարեկ ՍՏԱՏԻԿ ՍՊԸ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098840580',
                name: null,
            },
        ],
    },
    {
        name: 'Նարեկ փեթակ SONASHI',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Նարեկ օնլայն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077797706',
                name: null,
            },
        ],
    },
    {
        name: 'Նարեկ Ֆերմեր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093867777',
                name: null,
            },
        ],
    },
    {
        name: 'Նարինե Արմավիր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093746521',
                name: null,
            },
        ],
    },
    {
        name: 'Նարինե Դիզայներ',
        address: null,
        priceAdjustment: -4,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096877569',
                name: null,
            },
        ],
    },
    {
        name: 'Նելսոն Բագրևանդ ՍՆ-84',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096500170',
                name: null,
            },
        ],
    },
    {
        name: 'Նելսոն Ղարաբաղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '097262767',
                name: null,
            },
        ],
    },
    {
        name: 'Նոր ավելացում',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Նորիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091415014',
                name: null,
            },
        ],
    },
    {
        name: 'Նորիկ Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093016130',
                name: null,
            },
        ],
    },
    {
        name: 'Նորիկ Գառնի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091180965',
                name: null,
            },
        ],
    },
    {
        name: 'Նորիկ Էջմիածին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093133034',
                name: null,
            },
        ],
    },
    {
        name: 'Նորիկ Կայարան',
        address: 'Տիգրան Մեծի 63/36',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '00884687',
        phones: [
            {
                phone: '099400176',
                name: null,
            },
        ],
    },
    {
        name: 'Նորիկ Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091596529',
                name: null,
            },
        ],
    },
    {
        name: 'Նորիկ Շուկաից',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Նորիկ Փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Նորո Արամ Խաչատրյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094030243',
                name: null,
            },
        ],
    },
    {
        name: 'Նորո Արարատ Շին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '041900911',
                name: null,
            },
        ],
    },
    {
        name: 'Նորո էրեբունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094790055',
                name: null,
            },
        ],
    },
    {
        name: 'Նորո Ռեկլամի EXD',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077425550',
                name: null,
            },
        ],
    },
    {
        name: 'Նունե ԱՐՏ ԿԼԻՄԱ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Նվեր Էջմիածին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077270027',
                name: null,
            },
        ],
    },
    {
        name: 'Նվեր ԻՆՆՈՏԵԿ',
        address: 'Արին Բերդի փող. 24/5շ. փ/դ 0087',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '00543948',
        phones: [
            {
                phone: '095250707',
                name: null,
            },
        ],
    },
    {
        name: 'Նվեր Մարտակերտ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '097284888',
                name: null,
            },
        ],
    },
    {
        name: 'Շահեն Զեյթուն',
        address: 'Ք Երևան Ռուբինյանց 27',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '03535114',
        phones: [
            {
                phone: '093460608',
                name: null,
            },
        ],
    },
    {
        name: 'Շահեն Մասիվ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Շահեն Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094217227',
                name: null,
            },
        ],
    },
    {
        name: 'Շանթ Արթիկ',
        address: 'Արթիկ Բաբաջանյան փող․ 25',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '61707894',
        phones: [
            {
                phone: '094907272',
                name: null,
            },
        ],
    },
    {
        name: 'Շանթ Ձորաղբյուր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093770199',
                name: null,
            },
        ],
    },
    {
        name: 'Շանթ մատակարար Արթիկի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Շանթ Սարգիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094938857',
                name: null,
            },
        ],
    },
    {
        name: 'Շանթ ՎԻՏԵ ԳՐՈՒՊ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093761739',
                name: null,
            },
        ],
    },
    {
        name: 'Շեն Տուն Կիրովական',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Շին Լիդեռ Գագո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094391005',
                name: null,
            },
        ],
    },
    {
        name: 'Շինմագ Արշակ',
        address: null,
        priceAdjustment: -4,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098807772',
                name: null,
            },
        ],
    },
    {
        name: 'Շմավոն Նոյեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '041300741',
                name: null,
            },
        ],
    },
    {
        name: 'Շողիկ Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093756984',
                name: null,
            },
        ],
    },
    {
        name: 'Ոսկան Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094116177',
                name: null,
            },
        ],
    },
    {
        name: 'Չինաստան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Պակասորդ ապրանքներ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Պապանինո Շին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094384227',
                name: null,
            },
        ],
    },
    {
        name: 'Պապին Գավառ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077757271',
                name: null,
            },
        ],
    },
    {
        name: 'Պատո Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093226272',
                name: null,
            },
        ],
    },
    {
        name: 'Պատվեր չինա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Պարույր Քելեջյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093363510',
                name: null,
            },
        ],
    },
    {
        name: 'Պետիկ Նորապատ Հոկտ.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093511652',
                name: null,
            },
        ],
    },
    {
        name: 'Պետրոս Կոմիտաս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099692122',
                name: null,
            },
        ],
    },
    {
        name: 'Պոպո խաղալիքների խանութ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Ջերմուկի Նոր Կյանք Առողջարան',
        address: 'Քաղաք Ջերմուկ Մյասնիկյան 2',
        priceAdjustment: -4,
        taxpayerRegistrationNumber: '09103365',
        phones: [
            {
                phone: '094794554',
                name: null,
            },
        ],
    },
    {
        name: 'ՋԻ ԷՄ Քոնսթրաքշն ՍՊԸ Հրաչ',
        address: 'Կոմիտաս 49/12',
        priceAdjustment: -5,
        taxpayerRegistrationNumber: '08285067',
        phones: [
            {
                phone: '098606159',
                name: null,
            },
        ],
    },
    {
        name: 'Ջիվան Գուսանա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093324671',
                name: null,
            },
        ],
    },
    {
        name: 'Ջիվան Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094935454',
                name: null,
            },
        ],
    },
    {
        name: 'Ջորջ ոսկերչական',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '043672497',
                name: null,
            },
        ],
    },
    {
        name: 'Ռադիկ Արթիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077292707',
                name: null,
            },
        ],
    },
    {
        name: 'Ռազո մեր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Ռայա Սենիկ Նուբարաշեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091476304',
                name: null,
            },
        ],
    },
    {
        name: 'Ռայմոնդ Ղարաբաղ',
        address: 'Բագրատունյաց 36 39/1',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '08266288',
        phones: [
            {
                phone: '097209959',
                name: null,
            },
        ],
    },
    {
        name: 'Ռան Օյլ Ալեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091438888',
                name: null,
            },
        ],
    },
    {
        name: 'Ռաֆիկ Էլիտա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094488789',
                name: null,
            },
        ],
    },
    {
        name: 'Ռաֆո AKFIX',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099882233',
                name: null,
            },
        ],
    },
    {
        name: 'Ռաֆո Autoparts+',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077753747',
                name: null,
            },
        ],
    },
    {
        name: 'Ռաֆո Կամեռա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091887652',
                name: null,
            },
        ],
    },
    {
        name: 'Ռեսանտա Երևան տոնավաճառ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094939397',
                name: null,
            },
        ],
    },
    {
        name: 'Ռիչարդ RICH PRINT',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077666421',
                name: null,
            },
        ],
    },
    {
        name: 'Ռիփսիկ ոսկու շուկա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099552211',
                name: null,
            },
        ],
    },
    {
        name: 'Ռոբ 3-դ մաս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093313702',
                name: null,
            },
        ],
    },
    {
        name: 'Ռոբ Մեղրի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '78679692',
        phones: [
            {
                phone: '094702080',
                name: null,
            },
        ],
    },
    {
        name: 'Ռոբ Վայք',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093877212',
                name: null,
            },
        ],
    },
    {
        name: 'Ռոբա Ստեփանակերտ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Ռոբերտ ազատ հաճախորդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '097267626',
                name: null,
            },
        ],
    },
    {
        name: 'Ռոբերտ Բաղրամյան',
        address: 'Արմավիրի մարզ գյուղ Դալարիկ Երևանյան 24',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '04463319',
        phones: [
            {
                phone: '093069955',
                name: null,
            },
        ],
    },
    {
        name: 'Ռոլանդ Հրազդան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095802000',
                name: null,
            },
        ],
    },
    {
        name: 'Ռոման Ագարակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098260220',
                name: null,
            },
        ],
    },
    {
        name: 'Ռոման Էլիտա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095440437',
                name: null,
            },
        ],
    },
    {
        name: 'Ռոման Հարությունյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Ռոման Ձորաղբյուր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095200024',
                name: null,
            },
        ],
    },
    {
        name: 'Ռոմիկ Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094007440',
                name: null,
            },
        ],
    },
    {
        name: 'Ռոմիկ Փեթակ 3 րդ.տաղավար',
        address: 'Արշակունյաց 17Ա',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '43046226',
        phones: [
            {
                phone: '099288867',
                name: null,
            },
        ],
    },
    {
        name: 'Ռուբեն Գյուլբենկյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093310579',
                name: null,
            },
        ],
    },
    {
        name: 'Ռուբիկ Քելբաջար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '097255513',
                name: null,
            },
        ],
    },
    {
        name: 'Ռուբո 16 կվարտալ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099988883',
                name: null,
            },
        ],
    },
    {
        name: 'Ռուբո Energizer',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Ռուբո RICH PLAZA',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098080101',
                name: null,
            },
        ],
    },
    {
        name: 'Ռուբո Գնունի',
        address: 'Ք․Երեվան Վարդանանց 78',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '30944188',
        phones: [
            {
                phone: '094606608',
                name: null,
            },
        ],
    },
    {
        name: 'Ռուբո Էլիտա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094153445',
                name: null,
            },
            {
                phone: '010570096',
                name: null,
            },
        ],
    },
    {
        name: 'Ռուբո Մեղրի Ագարակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077222528',
                name: null,
            },
        ],
    },
    {
        name: 'Ռուբո պլոմբ Գնունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094606609',
                name: null,
            },
        ],
    },
    {
        name: 'Ռուբո Սպիտակ',
        address: 'ՊԱՆՐԱԳՈՐԾՆԵՐԻ ԹԱՂ. 223',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '66985474',
        phones: [
            {
                phone: '096575707',
                name: null,
            },
        ],
    },
    {
        name: 'Ռուդոլֆ Ղարաբաղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '097779991',
                name: null,
            },
        ],
    },
    {
        name: 'Ռուզան Փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Ռուզաննա Շամշադին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077679118',
                name: null,
            },
        ],
    },
    {
        name: 'Ռուզաննա Վանաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Ռուստամ Գավառ',
        address: 'Գավառ',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '74394033',
        phones: [
            {
                phone: '094003043',
                name: null,
            },
        ],
    },
    {
        name: 'ՍԱԲԶ ՍՊԸ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093234230',
                name: null,
            },
        ],
    },
    {
        name: 'Սևակ 8-րդ Ռուզան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Սևակ Աշոտ Ղարաբաղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '90041078',
        phones: [
            {
                phone: '097258258',
                name: null,
            },
            {
                phone: '094258258',
                name: null,
            },
        ],
    },
    {
        name: 'Սևակ Էջմիածին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094603622',
                name: null,
            },
        ],
    },
    {
        name: 'Սևակ Թալին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093441864',
                name: null,
            },
        ],
    },
    {
        name: 'Սևակ Լուսակերտ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098950509',
                name: null,
            },
        ],
    },
    {
        name: 'Սևակ Կաբելի դիմացի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Սևակ Հայրենի Տուն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098977966',
                name: null,
            },
        ],
    },
    {
        name: 'Սևակ Չարենցավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098977966',
                name: null,
            },
        ],
    },
    {
        name: 'Սևակ Ջերմուկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '044473733',
                name: null,
            },
        ],
    },
    {
        name: 'Սևակ Վահան մեր կողքի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091020578',
                name: null,
            },
        ],
    },
    {
        name: 'Սևակ Քյավառ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091420948',
                name: null,
            },
        ],
    },
    {
        name: 'Սամո առաքիչ տեցի կռուգ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Սամո Արթուր Քյավառ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077787679',
                name: null,
            },
        ],
    },
    {
        name: 'Սամո գնունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091195965',
                name: null,
            },
            {
                phone: '093195965',
                name: null,
            },
        ],
    },
    {
        name: 'Սամո Միքս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '043067760',
                name: null,
            },
        ],
    },
    {
        name: 'Սամո շինարար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '033233330',
                name: null,
            },
        ],
    },
    {
        name: 'Սամո Ստյոպ Հաճախորդ',
        address: 'քաղաք Երևան,Սևանի 33/2',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '02651362',
        phones: [],
    },
    {
        name: 'Սամո Ստյոպ ներմուծող',
        address: 'քաղաք Երևան,Սևանի 33/2',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '02651362',
        phones: [],
    },
    {
        name: 'Սամո տեց',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077788977',
                name: null,
            },
        ],
    },
    {
        name: 'Սամո Քանաքեռ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099001616',
                name: null,
            },
        ],
    },
    {
        name: 'Սամսոն Աշոցք',
        address: 'Շիրակի մարզ Աշոցք համայնք 5 փող 3 խանութ',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '05804089',
        phones: [
            {
                phone: '091756822',
                name: null,
            },
        ],
    },
    {
        name: 'Սամսոն Արթիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094824994',
                name: null,
            },
        ],
    },
    {
        name: 'Սամվել 3-րդ Մաս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077321213',
                name: null,
            },
        ],
    },
    {
        name: 'Սամվել EKF կեմրիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093345944',
                name: null,
            },
        ],
    },
    {
        name: 'Սամվել Արարատ Մնացականյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094042920',
                name: null,
            },
        ],
    },
    {
        name: 'Սամվել Արմաշ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098591019',
                name: null,
            },
        ],
    },
    {
        name: 'Սամվել Արտաշատի Դպրոց',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098484718',
                name: null,
            },
        ],
    },
    {
        name: 'Սամվել Բաղանիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094185418',
                name: null,
            },
        ],
    },
    {
        name: 'Սամվել գնուն. ԼԱՆԿԱ ՍՊԸ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '041072360',
                name: null,
            },
        ],
    },
    {
        name: 'Սամվել Գնունի շուկա վարագ․ձող',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091310906',
                name: null,
            },
        ],
    },
    {
        name: 'Սամվել Եղեգնաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093052513',
                name: null,
            },
        ],
    },
    {
        name: 'Սամվել Զեյթուն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093958039',
                name: null,
            },
        ],
    },
    {
        name: 'Սամվել Կայարան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '043550555',
                name: null,
            },
        ],
    },
    {
        name: 'Սամվել Կարմիր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091500863',
                name: null,
            },
        ],
    },
    {
        name: 'Սամվել Մալաթիա Էլեկտրոնիկա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094419482',
                name: null,
            },
        ],
    },
    {
        name: 'Սամվել Մարալիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098391414',
                name: null,
            },
        ],
    },
    {
        name: 'Սամվել Մարկագրո Թույն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077210131',
                name: null,
            },
        ],
    },
    {
        name: 'Սամվել Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Սամվել շվեցար տանող',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055549225',
                name: null,
            },
        ],
    },
    {
        name: 'Սամվել Վերին Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098360100',
                name: null,
            },
        ],
    },
    {
        name: 'Սայաթ գնունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099221777',
                name: null,
            },
        ],
    },
    {
        name: 'Սայաթ Վարդենիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093113834',
                name: null,
            },
        ],
    },
    {
        name: 'Սաշա Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093514131',
                name: null,
            },
        ],
    },
    {
        name: 'Սասուն Արարատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '044141460',
                name: null,
            },
        ],
    },
    {
        name: 'Սասուն Բաղրամյան ալյուր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091605077',
                name: null,
            },
        ],
    },
    {
        name: 'Սասուն Ղարաբաղ Նորայր և Հրայր)',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093900064',
                name: null,
            },
        ],
    },
    {
        name: 'Սասուն Յուղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094543315',
                name: null,
            },
        ],
    },
    {
        name: 'Սասուն Ստեփանակերտ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '097270221',
                name: null,
            },
        ],
    },
    {
        name: 'Սասուն Տաշիր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093314565',
                name: null,
            },
        ],
    },
    {
        name: 'Սարգիս Արմեն Փեթակ 109',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096595710',
                name: null,
            },
        ],
    },
    {
        name: 'Սարգիս Գերմանիա երգիչ',
        address: null,
        priceAdjustment: -5,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055698989',
                name: null,
            },
        ],
    },
    {
        name: 'Սարգիս Եղեցի Լույս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Սարգիս Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094262492',
                name: null,
            },
        ],
    },
    {
        name: 'Սարգիս Վանաձեոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094271270',
                name: null,
            },
        ],
    },
    {
        name: 'Սարո Արարատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093522035',
                name: null,
            },
        ],
    },
    {
        name: 'Սաքո Աբովյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077967777',
                name: null,
            },
        ],
    },
    {
        name: 'Սաքո ԱՐԷՍ ԿՈ',
        address: null,
        priceAdjustment: -5,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '044500252',
                name: null,
            },
        ],
    },
    {
        name: 'Սաքո Արթուր Ավանի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077471038',
                name: null,
            },
        ],
    },
    {
        name: 'Սաքո Գետազատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094501213',
                name: null,
            },
        ],
    },
    {
        name: 'Սաքո գնունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091426988',
                name: null,
            },
        ],
    },
    {
        name: 'Սաքո Լաքի ՏՐԻՆԻՏԻ',
        address: 'ԿՈՏԱՅՔ ԵՂՎԱՐԴ ՆԱՐ-ԴՈՍԻ Փ. 22',
        priceAdjustment: -5,
        taxpayerRegistrationNumber: '04229057',
        phones: [
            {
                phone: '095228022',
                name: null,
            },
        ],
    },
    {
        name: 'Սաքո Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091921616',
                name: null,
            },
        ],
    },
    {
        name: 'Սաքո մատակարար սավոկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Սաքո Սիսիան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077055755',
                name: null,
            },
        ],
    },
    {
        name: 'Սաքո Սիսիան փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Սաքո Սմարթ Պրոդուկտ',
        address: 'ԵՐԵՎԱՆ ՇԵՆԳԱՎԻԹ ՇԵՆԳԱՎԻԹ ԹԱՂԱՄԱՍ ԲԱԳՐԱՏՈՒՆՅԱՑ Փ. 51 20 ԲՆ.',
        priceAdjustment: 3,
        taxpayerRegistrationNumber: '02323254',
        phones: [
            {
                phone: '055342717',
                name: null,
            },
        ],
    },
    {
        name: 'Սաքո Սպիրալ փեթակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095483814',
                name: null,
            },
        ],
    },
    {
        name: 'Սաքո Վիստա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098222233',
                name: null,
            },
        ],
    },
    {
        name: 'Սաքո փեթակ Գուգո մեր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Սեթո Մարկուս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094343454',
                name: null,
            },
        ],
    },
    {
        name: 'Սեթրակ Մարտունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093907109',
                name: null,
            },
        ],
    },
    {
        name: 'Սեյրան Աթոյան փ.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '041406600',
                name: null,
            },
        ],
    },
    {
        name: 'Սեյրան Ղարաբաղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '097293989',
                name: null,
            },
        ],
    },
    {
        name: 'Սեյրան Մասիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077924727',
                name: null,
            },
        ],
    },
    {
        name: 'Սեյրան մասիվ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091386038',
                name: null,
            },
        ],
    },
    {
        name: 'Սենիկ Գորիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Սենո Կարեն Գյումրի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094902591',
                name: null,
            },
        ],
    },
    {
        name: 'Սերգեյ Աբովյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095899988',
                name: null,
            },
        ],
    },
    {
        name: 'Սերգեյ Ագարակ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098807708',
                name: null,
            },
        ],
    },
    {
        name: 'Սերգեյ Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098232402',
                name: null,
            },
        ],
    },
    {
        name: 'Սերգեյ գնորդ չերեպ.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077889920',
                name: null,
            },
        ],
    },
    {
        name: 'Սերգեյ Էջմիածին Բալայան Շին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055262226',
                name: null,
            },
        ],
    },
    {
        name: 'Սերգեյ Նուբարաշեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093001568',
                name: null,
            },
        ],
    },
    {
        name: 'Սերգեյ Օվալպլաստ',
        address: null,
        priceAdjustment: -5,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094887738',
                name: null,
            },
        ],
    },
    {
        name: 'Սերգո Նոյեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077031034',
                name: null,
            },
        ],
    },
    {
        name: 'Սերո Աշտարակ Առողջ Այգի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Սերոբ Ստյոպա Էջմիածին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093559159',
                name: null,
            },
        ],
    },
    {
        name: 'Սերոժ Առինջ (չենջ գնունի)',
        address: 'Ավան Առիննջ 1 ՄԿՐՇ․ 1/4 33',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '26697274',
        phones: [],
    },
    {
        name: 'Սերոժ Բագրատաշեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094484858',
                name: null,
            },
        ],
    },
    {
        name: 'Սերոժ գնունի (չենջ)',
        address: 'Ք․ Երևան Վարդանանց 78',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '37481354',
        phones: [
            {
                phone: '091218590',
                name: null,
            },
        ],
    },
    {
        name: 'Սերոժ ՇԻՆ Մաստեռ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055456666',
                name: null,
            },
            {
                phone: '093686811',
                name: null,
            },
        ],
    },
    {
        name: 'Սեփո Ղուկասավան',
        address: 'ԱՐԱՐԱՏ ՂՈՒԿԱՍԱՎԱՆ ՂՈՒԿԱՍԱՎԱՆ ԱՐԱՄԻ Փ. 8',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '49723418',
        phones: [
            {
                phone: '055699288',
                name: null,
            },
        ],
    },
    {
        name: 'Սիմոն Արման Ինտերկլիմա',
        address: 'Ք․Երևան Երվանդ Քոչար 1/77',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '06936464',
        phones: [
            {
                phone: '091716141',
                name: null,
            },
        ],
    },
    {
        name: 'Սիմոն հաճախորդ Բոքստեր',
        address: 'Արցախի 41',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '02279963',
        phones: [
            {
                phone: '077407733',
                name: null,
            },
        ],
    },
    {
        name: 'Սիմոն Մեղրի ապակի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '044269959',
                name: null,
            },
        ],
    },
    {
        name: 'Սիմոն Ներմուծող',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077407733',
                name: null,
            },
        ],
    },
    {
        name: 'Սլավիկ Աբովյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Սմարթ Օֆիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Սմբատ Արշակունյաց',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094863545',
                name: null,
            },
        ],
    },
    {
        name: 'Սմբատ Օպտիմա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098652005',
                name: null,
            },
        ],
    },
    {
        name: 'Սմբո Կիևյան',
        address: 'Ք Երևան Կիևյան 30',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '20059165',
        phones: [
            {
                phone: '091326636',
                name: null,
            },
        ],
    },
    {
        name: 'Սյոմա Ղարաբաղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '097243233',
                name: null,
            },
        ],
    },
    {
        name: 'Սյոմա Չարենցավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077042740',
                name: null,
            },
        ],
    },
    {
        name: 'Սևո Նոր Հաճն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Սոս Գոռ Ղափան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077888857',
                name: null,
            },
        ],
    },
    {
        name: 'Սոս Սիսթեմս ՍՊԸ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '060467689',
                name: null,
            },
        ],
    },
    {
        name: 'Սուրեն Աբովյան նոր գյուղ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098786123',
                name: null,
            },
        ],
    },
    {
        name: 'Սուրեն Ալվինա հյուրանոց Ծաղկ.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093866767',
                name: null,
            },
        ],
    },
    {
        name: 'Սուրեն Աղաբաբյան  Վանաձոր',
        address: 'Ք․ Վանաձոր Զաքյան 4/4',
        priceAdjustment: -5,
        taxpayerRegistrationNumber: '66931195',
        phones: [
            {
                phone: '094888085',
                name: null,
            },
            {
                phone: '098888085',
                name: null,
            },
        ],
    },
    {
        name: 'Սուրեն Գուրգեն Ալավերդի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093479806',
                name: null,
            },
        ],
    },
    {
        name: 'Սուրեն Հրազդան',
        address: 'Ք․ Մեղրի Զ․ Անդրանիկ 36',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '03022025',
        phones: [
            {
                phone: '094241174',
                name: null,
            },
        ],
    },
    {
        name: 'Սուրեն Ստեփանավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094023979',
                name: null,
            },
        ],
    },
    {
        name: 'Սուրո Արմեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093074740',
                name: null,
            },
        ],
    },
    {
        name: 'Սուրո Ուջան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093373878',
                name: null,
            },
        ],
    },
    {
        name: 'Սուրո փեթակ Սամո կողքի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077870977',
                name: null,
            },
        ],
    },
    {
        name: 'Սպարտակ բահի պոչ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099440440',
                name: null,
            },
        ],
    },
    {
        name: 'Սպո Հրազդան հաճախորդ',
        address: 'Կոտայքի մարզ Հրազդան Սպանդարյան փ․1,1/5',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '03036096',
        phones: [
            {
                phone: '077400441',
                name: null,
            },
        ],
    },
    {
        name: 'Ստայեռ-Զուբռ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Ստեփան Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098797996',
                name: null,
            },
        ],
    },
    {
        name: 'Ստեփան Նոյեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094398919',
                name: null,
            },
        ],
    },
    {
        name: 'Ստյոպ Շենգավիթ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093655065',
                name: null,
            },
        ],
    },
    {
        name: 'Ստյոպ Քանաքեռ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055482444',
                name: null,
            },
        ],
    },
    {
        name: 'Ստյոպա Էջմիածին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091463297',
                name: null,
            },
        ],
    },
    {
        name: 'ՍՏՋ Գռուպ Հրո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Վազգեն Հոկտեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093560447',
                name: null,
            },
        ],
    },
    {
        name: 'Վազգեն Մալաթիա',
        address: 'Ք․Երևան Միքայելյան 1 թիվ 17',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '86713226',
        phones: [
            {
                phone: '041340000',
                name: null,
            },
        ],
    },
    {
        name: 'Վազգեն Մասիս Նորաբաց',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '044122213',
                name: null,
            },
        ],
    },
    {
        name: 'Վազգեն Պետրոսյան Կուդո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055909395',
                name: null,
            },
        ],
    },
    {
        name: 'Վազգեն Սարգսյան Կիլիկիա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077887281',
                name: null,
            },
        ],
    },
    {
        name: 'Վալենսի ՍՊԸ Վիլեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091656660',
                name: null,
            },
        ],
    },
    {
        name: 'Վալեր ԷՄ ՋԻ գրուպ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093599519',
                name: null,
            },
        ],
    },
    {
        name: 'Վահագ Աթենք',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Վահագ Առինջ մոլ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077111349',
                name: null,
            },
        ],
    },
    {
        name: 'Վահագ Գեղանիստ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094669299',
                name: null,
            },
        ],
    },
    {
        name: 'Վահագ Գնւնի MAKITA',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '0552857525',
                name: null,
            },
        ],
    },
    {
        name: 'Վահագ Գորիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094464806',
                name: null,
            },
        ],
    },
    {
        name: 'Վահագ Դիլիջան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099465635',
                name: null,
            },
        ],
    },
    {
        name: 'Վահագ Շամշադին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093674200',
                name: null,
            },
        ],
    },
    {
        name: 'Վահագ Փեթակ  Էրեբունի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Վահագ Փեթակ Ավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Վահան Աղաս',
        address: 'Երևան Գևորգ Չաուշի 34',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '00258786',
        phones: [
            {
                phone: '099884432',
                name: null,
            },
        ],
    },
    {
        name: 'Վահան Գյումրի Վաենտորգ',
        address: 'Ք․ Գյումրի Շիրակացու 27 դոս',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '57450314',
        phones: [
            {
                phone: '077374595',
                name: null,
            },
            {
                phone: '077404996',
                name: null,
            },
        ],
    },
    {
        name: 'Վահան Կիևյան տնտես.',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099874422',
                name: null,
            },
        ],
    },
    {
        name: 'Վահան Մռդո Հարութ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094380848',
                name: null,
            },
        ],
    },
    {
        name: 'Վահան Չարենցավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093383396',
                name: null,
            },
        ],
    },
    {
        name: 'Վահան ՎԱԿ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091111171',
                name: null,
            },
        ],
    },
    {
        name: 'Վահան ցրող',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094380848',
                name: null,
            },
        ],
    },
    {
        name: 'Վահան Օհանավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094640922',
                name: null,
            },
        ],
    },
    {
        name: 'Վահե Արթիկի Հաճախորդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094184114',
                name: null,
            },
        ],
    },
    {
        name: 'Վահե գործիք AM',
        address: 'ԵՐԵՎԱՆ ՔԱՆԱՔԵՌ-ԶԵՅԹՈՒՆ ՔԱՆԱՔԵՌ ՀԷԿ ԲԱՆԱՎԱՆ 2/1 2',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '85378168',
        phones: [
            {
                phone: '095065176',
                name: null,
            },
        ],
    },
    {
        name: 'Վահե Կվարտալ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099808088',
                name: null,
            },
        ],
    },
    {
        name: 'Վահե Մարտունի Զոլաքար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093515707',
                name: null,
            },
        ],
    },
    {
        name: 'Վահե Նոր գեղի',
        address: 'Նոր Հաճն Թևոսյան 155',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '03579777',
        phones: [
            {
                phone: '099484810',
                name: null,
            },
        ],
    },
    {
        name: 'Վահե Նորագավիթ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091416190',
                name: null,
            },
        ],
    },
    {
        name: 'Վահե Ռոզ Ֆիլդ ՍՊԸ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '03551263',
        phones: [
            {
                phone: '077030010',
                name: null,
            },
        ],
    },
    {
        name: 'Վահրամ  Իջևան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093091703',
                name: null,
            },
        ],
    },
    {
        name: 'Վահրամ Արթիկի ձեռնոց',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094184114',
                name: null,
            },
        ],
    },
    {
        name: 'Վահրամ ԱՐՆԴԱՆԵ (Թոթլ)',
        address: null,
        priceAdjustment: -3,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093506680',
                name: null,
            },
        ],
    },
    {
        name: 'Վահրամ Ծիլքար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '041944759',
                name: null,
            },
        ],
    },
    {
        name: 'Վահրամ Սոլառա',
        address: null,
        priceAdjustment: -3,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077172716',
                name: null,
            },
        ],
    },
    {
        name: 'Վահրամ Ստեփանակերտ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '097207633',
                name: null,
            },
        ],
    },
    {
        name: 'Վահրամ Վարդենիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093795705',
                name: null,
            },
        ],
    },
    {
        name: 'Վաղարշ և որդիներ Կոնցեռն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Վաղո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093199588',
                name: null,
            },
        ],
    },
    {
        name: 'Վաղո Կիրովական',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093963848',
                name: null,
            },
        ],
    },
    {
        name: 'Վաղո Նոր Հաճն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Վան Ալբ Շին ՍՊԸ',
        address: null,
        priceAdjustment: -20,
        taxpayerRegistrationNumber: '08625327',
        phones: [
            {
                phone: '094133808',
                name: null,
            },
        ],
    },
    {
        name: 'Վանիկ AVTOSIL',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098228060',
                name: null,
            },
        ],
    },
    {
        name: 'Վանիկ Արարատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093646677',
                name: null,
            },
        ],
    },
    {
        name: 'Վանիկ Արենի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098032211',
                name: null,
            },
        ],
    },
    {
        name: 'Վանիկ Շամշադին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077475624',
                name: null,
            },
        ],
    },
    {
        name: 'Վանիկ տեց',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098228060',
                name: null,
            },
        ],
    },
    {
        name: 'Վանուշ Գև (Արսեն Մանուկյան)',
        address: 'Գ․ Հասրաթյան 11',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '32474999',
        phones: [
            {
                phone: '077008489',
                name: null,
            },
        ],
    },
    {
        name: 'Վաչագան Եղեգնաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077956693',
                name: null,
            },
        ],
    },
    {
        name: 'Վաչիկ Արամուս շինանյութ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096880066',
                name: null,
            },
        ],
    },
    {
        name: 'Վաչիկ Չարենցավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093939346',
                name: null,
            },
        ],
    },
    {
        name: 'Վաչո փեթակ ախռանա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Վասո ռուս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Վարազդատ Շինարարներ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '099810101',
                name: null,
            },
        ],
    },
    {
        name: 'Վարդան Աբովյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094677670',
                name: null,
            },
        ],
    },
    {
        name: 'Վարդան Առինջ մոլ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094362797',
                name: null,
            },
        ],
    },
    {
        name: 'Վարդան Առիջ մոլ Շամշադինցի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077040934',
                name: null,
            },
        ],
    },
    {
        name: 'Վարդան Բագրևան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091554178',
                name: null,
            },
        ],
    },
    {
        name: 'Վարդան Գառնի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096921218',
                name: null,
            },
        ],
    },
    {
        name: 'Վարդան Գյուլբենկյան Ավետիսյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093704434',
                name: null,
            },
        ],
    },
    {
        name: 'Վարդան գյուղ Այգեձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093013024',
                name: null,
            },
        ],
    },
    {
        name: 'Վարդան գնունի',
        address: 'Կենտրոն թաղ․ Վարդանանց 69/6',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '30954904',
        phones: [
            {
                phone: '096060000',
                name: null,
            },
        ],
    },
    {
        name: 'Վարդան եռանկյունի շուկա 406',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098423058',
                name: null,
            },
        ],
    },
    {
        name: 'Վարդան ԼԱՊՈՐՏԻՎԱ ՍՊՐ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094340001',
                name: null,
            },
        ],
    },
    {
        name: 'Վարդան Լենտ Խաղողի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091408802',
                name: null,
            },
        ],
    },
    {
        name: 'Վարդան հաճախորդ լենտի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091408802',
                name: null,
            },
        ],
    },
    {
        name: 'Վարդան Ղազարյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091305176',
                name: null,
            },
        ],
    },
    {
        name: 'Վարդան Ղափան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093311717',
                name: null,
            },
        ],
    },
    {
        name: 'Վարդան մալաթյա',
        address: 'Սվաճյան 12/79 10/29',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '32538806',
        phones: [
            {
                phone: '094380806',
                name: null,
            },
        ],
    },
    {
        name: 'Վարդան մեր Դավթյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091402517',
                name: null,
            },
        ],
    },
    {
        name: 'Վարդան Վարդենիս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093868740',
                name: null,
            },
        ],
    },
    {
        name: 'Վարդուհի Հոկտեմբերյան',
        address: 'Արմավիրի մարզ գյուղ Հուշակերտ  5',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '04461622',
        phones: [
            {
                phone: '098358686',
                name: null,
            },
        ],
    },
    {
        name: 'Վարուժ գայկավյորտ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093612117',
                name: null,
            },
        ],
    },
    {
        name: 'Վարուժ Իջևան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093072092',
                name: null,
            },
        ],
    },
    {
        name: 'Վարպետ Շինանյութ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077180610',
                name: null,
            },
        ],
    },
    {
        name: 'Վելդլենդ դիմացի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091521492',
                name: null,
            },
        ],
    },
    {
        name: 'Վելլի Բեյ ՍՊԸ Սաքո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '041557781',
                name: null,
            },
        ],
    },
    {
        name: 'Վեոլիա Ջուր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077093293',
                name: null,
            },
        ],
    },
    {
        name: 'Վերադարձ Հոմշին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'ՎԻ ԷՅՋ Քեմիքլս',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093000899',
                name: null,
            },
        ],
    },
    {
        name: 'Վիգեն Շամշադին Այգեձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093981450',
                name: null,
            },
        ],
    },
    {
        name: 'Վիգեն Շին պլազա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091164646',
                name: null,
            },
        ],
    },
    {
        name: 'Վիլեն Ղափան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077281202',
                name: null,
            },
        ],
    },
    {
        name: 'Վիլիկ 2 Մասիվ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098585759',
                name: null,
            },
        ],
    },
    {
        name: 'Վիլո Սաքո Էջմիածին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077663505',
                name: null,
            },
        ],
    },
    {
        name: 'Վիկտոր Չարենցավան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094310433',
                name: null,
            },
        ],
    },
    {
        name: 'Վիտալիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '096777235',
                name: null,
            },
        ],
    },
    {
        name: 'Վլադ Գյումրի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093538467',
                name: null,
            },
        ],
    },
    {
        name: 'Վլադ Նոյեմբերյան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093032840',
                name: null,
            },
        ],
    },
    {
        name: 'Վլադ Վանաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094010559',
                name: null,
            },
        ],
    },
    {
        name: 'Վովա Սևան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093256898',
                name: null,
            },
        ],
    },
    {
        name: 'Վովա Փարաքար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093920220',
                name: null,
            },
        ],
    },
    {
        name: 'Վրեժ Մոսկվա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Վրեժ Շամշադին',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093040804',
                name: null,
            },
        ],
    },
    {
        name: 'Տարոն Ալավերդի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077613570',
                name: null,
            },
        ],
    },
    {
        name: 'Տարոն Ապարան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098467338',
                name: null,
            },
        ],
    },
    {
        name: 'Տարոն Արենի',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095774466',
                name: null,
            },
        ],
    },
    {
        name: 'Տարոն Եղեգնաձոր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093399075',
                name: null,
            },
        ],
    },
    {
        name: 'Տարոն Ջրվեժ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077230533',
                name: null,
            },
        ],
    },
    {
        name: 'Տիգրան RICH Ռաֆո',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094191129',
                name: null,
            },
            {
                phone: '044708084',
                name: null,
            },
        ],
    },
    {
        name: 'Տիգրան WD-40',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '077002000',
                name: null,
            },
        ],
    },
    {
        name: 'Տիգրան Արթիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094914631',
                name: null,
            },
        ],
    },
    {
        name: 'Տիգրան Արմավիր',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098239090',
                name: null,
            },
        ],
    },
    {
        name: 'Տիգրան էլեկտրոդ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093589009',
                name: null,
            },
        ],
    },
    {
        name: 'Տիգրան Էլիտա',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091577052',
                name: null,
            },
        ],
    },
    {
        name: 'Տիգրան Ըդվանս',
        address: null,
        priceAdjustment: -2,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '055336601',
                name: null,
            },
        ],
    },
    {
        name: 'Տիգրան Թաիրով',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093553595',
                name: null,
            },
        ],
    },
    {
        name: 'Տիգրան Շինարար մատակարար',
        address: 'Ք Երևան Գ Նժդեհ 34',
        priceAdjustment: -15,
        taxpayerRegistrationNumber: '01556053',
        phones: [
            {
                phone: '091460052',
                name: null,
            },
        ],
    },
    {
        name: 'Տիգրան Շտիգեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094922928',
                name: null,
            },
        ],
    },
    {
        name: 'Տիգրան Պալաս առևտրի կենտր․',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '095618687',
                name: null,
            },
        ],
    },
    {
        name: 'Տիգրան Սիսիան',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093362707',
                name: null,
            },
        ],
    },
    {
        name: 'Տիգրան Վայք',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094032245',
                name: null,
            },
        ],
    },
    {
        name: 'Տիգրան տեցի կռուգ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093735545',
                name: null,
            },
        ],
    },
    {
        name: 'Տիկո Դավթաշեն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093905080',
                name: null,
            },
        ],
    },
    {
        name: 'Տիկո Զեյթուն',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '094011677',
                name: null,
            },
        ],
    },
    {
        name: 'Տիկո Իզոլենտ տանող',
        address: 'Ք Երևան Հր․ Քոչար 4/54',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '84657406',
        phones: [
            {
                phone: '043407777',
                name: null,
            },
        ],
    },
    {
        name: 'Տիկո կամեռաներ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093668366',
                name: null,
            },
        ],
    },
    {
        name: 'Տիկո մեր Պահեստի',
        address: 'Երևան Սևանի 5/2',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '00901537',
        phones: [
            {
                phone: '041022011',
                name: null,
            },
        ],
    },
    {
        name: 'Տիկո Սիմետրիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '044344453',
                name: null,
            },
        ],
    },
    {
        name: 'Տիկո Տեց ավտոաքսեսուար',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098810524',
                name: null,
            },
        ],
    },
    {
        name: 'Տիկո Օշական',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091665666',
                name: null,
            },
        ],
    },
    {
        name: 'Տոլիկ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '091339430',
                name: null,
            },
        ],
    },
    {
        name: 'Տրիբո ՍՊԸ',
        address: 'Արշակունյաց 39/1',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '02259073',
        phones: [
            {
                phone: '093840880',
                name: null,
            },
        ],
    },
    {
        name: 'Ցոլակ Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093018251',
                name: null,
            },
        ],
    },
    {
        name: 'Փեթակ',
        address: 'ք. Երևան Արշակունյաց 17Ա',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '02542951',
        phones: [],
    },
    {
        name: 'Փոխանցում հաշվով',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Քաջիկ Գորից',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093030947',
                name: null,
            },
        ],
    },
    {
        name: 'Քարտով վճարում',
        address: null,
        priceAdjustment: -5,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
    {
        name: 'Օմար Արմեն Գնունի',
        address: 'Վարդանանց 78',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '30943142',
        phones: [
            {
                phone: '091713113',
                name: null,
            },
            {
                phone: '094888868',
                name: null,
            },
        ],
    },
    {
        name: 'ֆելիքս Չարբախ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '098833969',
                name: null,
            },
        ],
    },
    {
        name: 'Ֆիրդուս Սուրմալու',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093318953',
                name: null,
            },
        ],
    },
    {
        name: 'Ֆուլ Հաուս',
        address: 'Վերին Անտառային 144/3',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '00478524',
        phones: [
            {
                phone: '044041001',
                name: null,
            },
        ],
    },
    {
        name: 'Ֆուլ Հաուս Մարկետ ՄԱՍԻՎ Գրիշ',
        address: 'Գյուլիքևխյան 4 շենք  70 ոչ բնակելի տարածք',
        priceAdjustment: 0,
        taxpayerRegistrationNumber: '00478524',
        phones: [
            {
                phone: '091210461',
                name: null,
            },
        ],
    },
    {
        name: 'Ֆրանց Արտաշատ',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [
            {
                phone: '093730038',
                name: null,
            },
        ],
    },
    {
        name: '1275',
        address: null,
        priceAdjustment: 0,
        taxpayerRegistrationNumber: null,
        phones: [],
    },
];
