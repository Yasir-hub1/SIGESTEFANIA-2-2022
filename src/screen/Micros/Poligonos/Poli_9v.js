import { StyleSheet } from 'react-native'
import React,{useState} from 'react'
import  {  Polyline } from "react-native-maps";

const Poli_9v = ({onPress = () => {}}) => {

    const [coordinates] = useState([

      { latitude: -17.7714495001, longitude: -63.2090742003 },
  { latitude: -17.7714597, longitude: -63.2090042 },
  { latitude: -17.7715068002, longitude: -63.2085784995 },
  { longitude: -63.2082204004, latitude: -17.7715570003 },
  { latitude: -17.7715943997, longitude: -63.2079067001 },
  { longitude: -63.2075413003, latitude: -17.7716444002 },
  { longitude: -63.2072288, latitude: -17.7716926999 },
  { longitude: -63.2067777004, latitude: -17.7717484 },
  { latitude: -17.7717852997, longitude: -63.2065388999 },
  { longitude: -63.2060204002, latitude: -17.7718568996 },
  { longitude: -63.2058650004, latitude: -17.7718862999 },
  { longitude: -63.2053026002, latitude: -17.7719832997 },
  { longitude: -63.2052045004, latitude: -17.7719972002 },
  { latitude: -17.7720591, longitude: -63.2047818003 },
  { longitude: -63.2045754996, latitude: -17.7721134996 },
  { longitude: -63.2044882003, latitude: -17.7721411003 },
  { latitude: -17.7722444002, longitude: -63.2043852 },
  { longitude: -63.2043626003, latitude: -17.7722739996 },
  { longitude: -63.2043235999, latitude: -17.7723248998 },
  { latitude: -17.7723785999, longitude: -63.2042354999 },
  { latitude: -17.7723982997, longitude: -63.2041377998 },
  { latitude: -17.7723845, longitude: -63.2040390004 },
  { longitude: -63.2039514, latitude: -17.7723389001 },
  { latitude: -17.7722840002, longitude: -63.2038697996 },
  { latitude: -17.7722522002, longitude: -63.2038226005 },
  { longitude: -63.2037784002, latitude: -17.7722342996 },
  { latitude: -17.7722016999, longitude: -63.2036978997 },
  { longitude: -63.2035597998, latitude: -17.7721830002 },
  { longitude: -63.2033713004, latitude: -17.7721878998 },
  { latitude: -17.7722155998, longitude: -63.2031721001 },
  { longitude: -63.2030783002, latitude: -17.7722328997 },
  { longitude: -63.203024, latitude: -17.7722543996 },
  { longitude: -63.2029796, latitude: -17.7722809998 },
  { latitude: -17.7723274998, longitude: -63.2029021002 },
  { latitude: -17.7724185998, longitude: -63.2028352 },
  { longitude: -63.2027924998, latitude: -17.7724518001 },
  { latitude: -17.7724855002, longitude: -63.2027166997 },
  { longitude: -63.2026338001, latitude: -17.7724964 },
  { longitude: -63.2025512002, latitude: -17.7724835997 },
  { longitude: -63.2024761996, latitude: -17.7724481999 },
  { latitude: -17.7724115002, longitude: -63.2024318999 },
  { latitude: -17.7723669999, longitude: -63.2023965002 },
  { latitude: -17.7723388998, longitude: -63.2022960999 },
  { longitude: -63.2018723999, latitude: -17.7723698003 },
  { latitude: -17.7724354004, longitude: -63.2013726005 },
  { longitude: -63.2012944999, latitude: -17.7724471 },
  { longitude: -63.2012805001, latitude: -17.7724491997 },
  { longitude: -63.2011853997, latitude: -17.7724605 },
  { latitude: -17.7724924996, longitude: -63.2009481001 },
  { longitude: -63.1998695, latitude: -17.7726347999 },
  { longitude: -63.1990256004, latitude: -17.7727425999 },
  { latitude: -17.7728391, longitude: -63.1982847998 },
  { longitude: -63.1981056999, latitude: -17.7728629999 },
  { longitude: -63.1972684997, latitude: -17.7729660998 },
  { longitude: -63.1971128, latitude: -17.7729823004 },
  { longitude: -63.1970154004, latitude: -17.7729956999 },
  { longitude: -63.1969594002, latitude: -17.7730026004 },
  { latitude: -17.7731449996, longitude: -63.1958050996 },
  { longitude: -63.1951744, latitude: -17.7732233998 },
  { longitude: -63.1949380996, latitude: -17.7732549003 },
  { latitude: -17.7733091, longitude: -63.1944848998 },
  { latitude: -17.7735040001, longitude: -63.1929308995 },
  { latitude: -17.7735498999, longitude: -63.1926041002 },
  { latitude: -17.7735623997, longitude: -63.1924707 },
  { longitude: -63.1922132002, latitude: -17.7735905996 },
  { longitude: -63.1919474996, latitude: -17.7736146999 },
  { longitude: -63.1916941999, latitude: -17.7736368002 },
  { longitude: -63.1916880001, latitude: -17.7736593002 },
  { latitude: -17.7737003004, longitude: -63.1916674999 },
  { latitude: -17.7737416998, longitude: -63.1916288996 },
  { latitude: -17.7737700997, longitude: -63.1915790003 },
  { longitude: -63.1915224001, latitude: -17.7737828003 },
  { latitude: -17.7737794, longitude: -63.1914686998 },
  { longitude: -63.1914180997, latitude: -17.7737618997 },
  { latitude: -17.7737315997, longitude: -63.1913747003 },
  { latitude: -17.7737416004, longitude: -63.1910142999 },
  { longitude: -63.1907657998, latitude: -17.7737670997 },
  { longitude: -63.1906936003, latitude: -17.7737764004 },
  { longitude: -63.1893807003, latitude: -17.7739502004 },
  { latitude: -17.7739897001, longitude: -63.1890606003 },
  { latitude: -17.7740981004, longitude: -63.1890449997 },
  { longitude: -63.1890089002, latitude: -17.7741687003 },
  { latitude: -17.7742458996, longitude: -63.1889566997 },
  { longitude: -63.1888800997, latitude: -17.7743145003 },
  { latitude: -17.7745404002, longitude: -63.1885628001 },
  { latitude: -17.7748211004, longitude: -63.1881010996 },
  { latitude: -17.7753379996, longitude: -63.1885622997 },
  { latitude: -17.7759156997, longitude: -63.1890853997 },
  { longitude: -63.1893311001, latitude: -17.7763803002 },
  { latitude: -17.7770627999, longitude: -63.1897223002 },
  { longitude: -63.1899685996, latitude: -17.7774841003 },
  { longitude: -63.1899641996, latitude: -17.7775415001 },
  { latitude: -17.7776155997, longitude: -63.1899414004 },
  { latitude: -17.7777176998, longitude: -63.1898970996 },
  { latitude: -17.7778212002, longitude: -63.1898273999 },
  { latitude: -17.7778850002, longitude: -63.1897401998 },
  { longitude: -63.1893911998, latitude: -17.7780130996 },
  { latitude: -17.7783632998, longitude: -63.1884214 },
  { latitude: -17.7788888004, longitude: -63.1886140999 },
  { latitude: -17.7794084998, longitude: -63.1887793999 },
  { longitude: -63.1888515996, latitude: -17.7797043001 },
  { latitude: -17.7797789002, longitude: -63.1888711999 },
  { latitude: -17.7800688004, longitude: -63.1889137995 },
  { latitude: -17.7804081002, longitude: -63.1889621997 },
  { longitude: -63.1889762, latitude: -17.7805816001 },
  { longitude: -63.18896, latitude: -17.7806113 },
  { latitude: -17.7806311998, longitude: -63.1889375996 },
  { longitude: -63.188916, latitude: -17.7806480997 },
  { latitude: -17.7806570998, longitude: -63.1888924004 },
  { latitude: -17.7806614001, longitude: -63.1888487002 },
  { longitude: -63.1888049002, latitude: -17.7806577997 },
  { latitude: -17.7806424, longitude: -63.1887713998 },
  { latitude: -17.7806132997, longitude: -63.1887440996 },
  { latitude: -17.7806124999, longitude: -63.1886764001 },
  { latitude: -17.7804406999, longitude: -63.1873416999 },
  { longitude: -63.1860195999, latitude: -17.7802578 },
  { longitude: -63.1856147004, latitude: -17.7802004 },
  { latitude: -17.7801374001, longitude: -63.1851700996 },
  { longitude: -63.1840608999, latitude: -17.7799629003 },
  { latitude: -17.7797723996, longitude: -63.1829648001 },
  { latitude: -17.7796087004, longitude: -63.1818750998 },
  { longitude: -63.1809350003, latitude: -17.7794708996 },
  { latitude: -17.7793498004, longitude: -63.1803027998 },
  { longitude: -63.1790983998, latitude: -17.7791283004 },
  { longitude: -63.1789720997, latitude: -17.7796385002 },
  { longitude: -63.1787697003, latitude: -17.7804566005 },
  { latitude: -17.7814991998, longitude: -63.1785090003 },
  { latitude: -17.7814107996, longitude: -63.1774515001 },
  { longitude: -63.1764982003, latitude: -17.7812866996 },
  { latitude: -17.7811055996, longitude: -63.1748612002 },
  { longitude: -63.1738178002, latitude: -17.7809919001 },
  { longitude: -63.1737518003, latitude: -17.7810472997 },
  { latitude: -17.7810503004, longitude: -63.1737194001 },
  { latitude: -17.7809527003, longitude: -63.1726850002 },
  { longitude: -63.1726358999, latitude: -17.7809617002 },
  { latitude: -17.7809782002, longitude: -63.1726045004 },
  { longitude: -63.1724842002, latitude: -17.7818190004 },
  { latitude: -17.7819229004, longitude: -63.1724709998 },
  { longitude: -63.1723795004, latitude: -17.7825688002 },
  { longitude: -63.1723492997, latitude: -17.7828400001 },
  { longitude: -63.1723864996, latitude: -17.7828880999 },
  { latitude: -17.7829447004, longitude: -63.1724065998 },
  { longitude: -63.1724076997, latitude: -17.7830045002 },
  { longitude: -63.1723945, latitude: -17.7830510996 },
  { longitude: -63.1723696997, latitude: -17.7830931998 },
  { latitude: -17.7831281999, longitude: -63.1723347004 },
  { latitude: -17.7831538003, longitude: -63.1722917998 },
  { longitude: -63.1722369003, latitude: -17.7834059003 },
  { latitude: -17.7840703001, longitude: -63.1721449 },
  { latitude: -17.7848496, longitude: -63.1720344999 },
  { latitude: -17.7850980004, longitude: -63.1719989996 },
  { longitude: -63.1719539003, latitude: -17.7854106001 },
  { latitude: -17.7854577999, longitude: -63.1719878004 },
  { longitude: -63.1720042999, latitude: -17.7855128001 },
  { latitude: -17.7855698997, longitude: -63.1720015996 },
  { longitude: -63.1719833003, latitude: -17.7856177997 },
  { longitude: -63.1719513998, latitude: -17.7856587998 },
  { longitude: -63.1719085997, latitude: -17.7856894997 },
  { latitude: -17.7857086001, longitude: -63.1718523996 },
  { longitude: -63.1717926999, latitude: -17.7857098004 },
  { latitude: -17.7856930003, longitude: -63.1717357002 },
  { longitude: -63.1716871, latitude: -17.7856599998 },
  { latitude: -17.7856101002, longitude: -63.1716498998 },
  { latitude: -17.7855511001, longitude: -63.1716326004 },
  { latitude: -17.7854535997, longitude: -63.1715301998 },
  { latitude: -17.7853618997, longitude: -63.1713736999 },
  { longitude: -63.1710211996, latitude: -17.7852328003 },
  { longitude: -63.1708053997, latitude: -17.7851581003 },
  { latitude: -17.7851081997, longitude: -63.1706241002 },
  { longitude: -63.1704364998, latitude: -17.7850828004 },
  { longitude: -63.1703253996, latitude: -17.7850871002 },
  { latitude: -17.7851029004, longitude: -63.1702574 },
  { latitude: -17.7851397, longitude: -63.1700983998 },
  { latitude: -17.7852177003, longitude: -63.1699152995 },
  { latitude: -17.7853795002, longitude: -63.1696413001 },
  { latitude: -17.7855163996, longitude: -63.1693704997 },
  { longitude: -63.1689059997, latitude: -17.7858028004 },
  { longitude: -63.1683891998, latitude: -17.7860609998 },
  { longitude: -63.1675892999, latitude: -17.7864289997 },
  { latitude: -17.7866604004, longitude: -63.1668941001 },
  { longitude: -63.1668701998, latitude: -17.7866667 },
  { latitude: -17.7867446999, longitude: -63.1665714002 },
  { longitude: -63.1661024002, latitude: -17.7868807004 },
  { latitude: -17.7870453998, longitude: -63.1653916998 },
  { longitude: -63.1650592001, latitude: -17.7871263996 },
  { longitude: -63.1647545003, latitude: -17.7872137 },
  { latitude: -17.7872536, longitude: -63.1646416999 },
  { latitude: -17.7872858996, longitude: -63.1645865003 },
  { longitude: -63.1645505999, latitude: -17.7873153004 },
  { longitude: -63.1644298, latitude: -17.7873824997 },
  { longitude: -63.1643608003, latitude: -17.7874266001 },
  { latitude: -17.7874865999, longitude: -63.1642604004 },
  { longitude: -63.1641562998, latitude: -17.7875420997 },
  { latitude: -17.7876024998, longitude: -63.164017 },
  { longitude: -63.1638912998, latitude: -17.787656 },
  { longitude: -63.1636003004, latitude: -17.7877407002 },
  { longitude: -63.1631503998, latitude: -17.7878542 },
  { latitude: -17.7879011, longitude: -63.1629621998 },
  { latitude: -17.7879465997, longitude: -63.1627924996 },
  { latitude: -17.7880440001, longitude: -63.1626913997 },
  { latitude: -17.7880969996, longitude: -63.1626245 },
  { latitude: -17.7881327996, longitude: -63.1625580998 },
  { longitude: -63.1624737003, latitude: -17.7881799003 },
  { latitude: -17.7882176004, longitude: -63.1624268002 },
  { longitude: -63.1623040003, latitude: -17.7882302996 },
  { longitude: -63.1621831004, latitude: -17.7882228 },
  { latitude: -17.7881693, longitude: -63.1620960003 },
  { latitude: -17.7881032999, longitude: -63.1620398999 },
  { latitude: -17.7879610997, longitude: -63.1619807003 },
  { longitude: -63.1619948004, latitude: -17.7877953001 },
  { latitude: -17.7876158004, longitude: -63.1620207998 },
  { latitude: -17.7874548002, longitude: -63.1620262995 },
  { latitude: -17.7872281001, longitude: -63.1619942004 },
  { longitude: -63.1619840998, latitude: -17.7872045 },
  { latitude: -17.7869996999, longitude: -63.1618962997 },
  { latitude: -17.7867936, longitude: -63.1617624998 },
  { longitude: -63.1614070003, latitude: -17.7864459996 },
  { latitude: -17.7862677003, longitude: -63.1612247 },
  { latitude: -17.7859036003, longitude: -63.1608373999 },
  { latitude: -17.7858344, longitude: -63.1607670002 },
  { latitude: -17.7855255002, longitude: -63.160386 },
  { longitude: -63.1601506002, latitude: -17.7853765996 },
  { latitude: -17.7852541003, longitude: -63.1598994003 },
  { latitude: -17.7851168003, longitude: -63.1595454 },
  { longitude: -63.1592397999, latitude: -17.7850317996 },
  { latitude: -17.7849906, longitude: -63.1590916002 },
  { latitude: -17.7849629003, longitude: -63.1587880004 },
  { latitude: -17.7849534997, longitude: -63.1584289996 },
  { longitude: -63.1580316999, latitude: -17.7849910001 },
  { longitude: -63.1578962999, latitude: -17.7850080002 },
  { latitude: -17.7849988999, longitude: -63.1577774001 },
  { longitude: -63.1575802998, latitude: -17.7850928996 },
  { latitude: -17.7853334998, longitude: -63.1569853997 },
  { longitude: -63.1566973998, latitude: -17.7854352996 },
  { longitude: -63.1564121004, latitude: -17.7854813997 },
  { longitude: -63.1561284001, latitude: -17.7855199001 },
  { longitude: -63.1553110999, latitude: -17.7855505002 },
  { longitude: -63.1552038, latitude: -17.7855545 },
  { longitude: -63.1540723001, latitude: -17.7855967996 },
  { latitude: -17.7856033996, longitude: -63.1528292003 },
  { latitude: -17.7856115999, longitude: -63.1527488998 },
  { latitude: -17.7856452002, longitude: -63.1524864001 },
  { latitude: -17.7856880999, longitude: -63.1515203998 },
  { longitude: -63.1504666004, latitude: -17.7857245997 },
  { latitude: -17.7857448001, longitude: -63.1498827001 },
  { longitude: -63.1489406005, latitude: -17.7857816001 },
  { latitude: -17.7858757998, longitude: -63.1486588999 },
  { latitude: -17.7859687002, longitude: -63.1485237997 },
  { latitude: -17.7861414, longitude: -63.1483907004 },
  { longitude: -63.1482931003, latitude: -17.7862956002 },
  { longitude: -63.1482136998, latitude: -17.7864873997 },
  { longitude: -63.1483546001, latitude: -17.7885335996 },
  { latitude: -17.7887906002, longitude: -63.1483723001 },
  { latitude: -17.7890653998, longitude: -63.1484058997 },
  { longitude: -63.1484094999, latitude: -17.7890948003 },
  { latitude: -17.7894395, longitude: -63.1484271998 },
  { latitude: -17.7894913002, longitude: -63.1484300005 },
  { longitude: -63.1484491999, latitude: -17.7898031002 },
  { longitude: -63.1483762002, latitude: -17.7898561003 },
  { longitude: -63.1483123005, latitude: -17.7898802996 },
  { longitude: -63.1482411003, latitude: -17.7898822001 },
  { latitude: -17.7898295998, longitude: -63.1480832998 },
  { longitude: -63.1479497001, latitude: -17.7897642002 },
  { latitude: -17.7897313002, longitude: -63.1478067998 },
  { longitude: -63.1475975999, latitude: -17.7896989997 },
  { longitude: -63.1473682004, latitude: -17.7896758 },
  { latitude: -17.7896733003, longitude: -63.1472005997 },
  { longitude: -63.1471330003, latitude: -17.7896779003 },
  { longitude: -63.1470631999, latitude: -17.7896827 },
  { longitude: -63.1468648004, latitude: -17.7896965002 },
  { latitude: -17.7897589998, longitude: -63.1465007996 },
  { longitude: -63.1459648997, latitude: -17.7898510998 },
  { longitude: -63.1458219004, latitude: -17.7898912004 },
  { longitude: -63.1456481998, latitude: -17.7899761002 },
  { latitude: -17.7901261998, longitude: -63.1452744998 },
  { latitude: -17.7901472998, longitude: -63.1452065003 },
  { latitude: -17.7901741003, longitude: -63.1449364002 },
  { longitude: -63.1447479004, latitude: -17.7901764 },
  { longitude: -63.1446748002, latitude: -17.7901634997 },
  { longitude: -63.1444781, latitude: -17.7901383001 },
  { latitude: -17.7901078996, longitude: -63.1443204002 },
  { longitude: -63.1439528001, latitude: -17.7900197002 },
  { longitude: -63.1437905003, latitude: -17.7899956 },
  { longitude: -63.1436789999, latitude: -17.7899914996 },
  { longitude: -63.1436152, latitude: -17.7899892 },
  { latitude: -17.7900222997, longitude: -63.1433665999 },
  { latitude: -17.7901166002, longitude: -63.1430806997 },
  { longitude: -63.1427566, latitude: -17.7902068996 },
  { longitude: -63.1426382998, latitude: -17.7902398003 },
  { longitude: -63.1423659997, latitude: -17.7903069002 },
  { latitude: -17.7903874003, longitude: -63.1420704996 },
  { latitude: -17.7904887997, longitude: -63.1418708 },
  { latitude: -17.7905932001, longitude: -63.1417169996 },
  { longitude: -63.1415464999, latitude: -17.7907418998 },
  { longitude: -63.1413365998, latitude: -17.7909350997 },
  { longitude: -63.1410605004, latitude: -17.7911450002 },
  { latitude: -17.7912026999, longitude: -63.1409480996 },
  { latitude: -17.7912364997, longitude: -63.1408149 },
  { latitude: -17.7912660999, longitude: -63.1405055996 },
  { latitude: -17.7912887, longitude: -63.1402693999 },
  { latitude: -17.7913827001, longitude: -63.1392857996 },
  { longitude: -63.1384478999, latitude: -17.7914563002 },
  { longitude: -63.1379943996, latitude: -17.7914899998 },
  { longitude: -63.1371425003, latitude: -17.7915678 },
  { longitude: -63.1365629999, latitude: -17.7916206999 },
  { longitude: -63.1343975, latitude: -17.7918328998 },
  { longitude: -63.1344668997, latitude: -17.7924721998 },
  { latitude: -17.7930949997, longitude: -63.1345227998 },
  { longitude: -63.1345953998, latitude: -17.7937365002 },
  { longitude: -63.1352153998, latitude: -17.7936796996 },
  { latitude: -17.7943071998, longitude: -63.1352810004 },
  { latitude: -17.7949335997, longitude: -63.1353445003 },
  { longitude: -63.1347154997, latitude: -17.7949897001 },
  { latitude: -17.7956133, longitude: -63.1347709002 },
  { longitude: -63.1348449996, latitude: -17.7962737996 },
  { latitude: -17.7968927001, longitude: -63.1348926 },
  { longitude: -63.1321451996, latitude: -17.7971594 },
  { longitude: -63.1306606999, latitude: -17.7972623004 },
  { latitude: -17.7973840996, longitude: -63.1292132 },
  { latitude: -17.7967389001, longitude: -63.1290738999 },
  { longitude: -63.1289864998, latitude: -17.7964095004 },
  { longitude: -63.1289304996, latitude: -17.7961215996 },
  { latitude: -17.7962666, longitude: -63.1282306001 },
  { latitude: -17.7964418999, longitude: -63.1270883998 },
  { longitude: -63.1271395003, latitude: -17.7968245998 },
  { latitude: -17.7970750998, longitude: -63.1271668999 },
  { latitude: -17.7970684, longitude: -63.1271130998 },
  { longitude: -63.1269875997, latitude: -17.7970829002 },
  { longitude: -63.1261625996, latitude: -17.7971112001 },
  { latitude: -17.7971302, longitude: -63.1249718999 },
  { latitude: -17.7971664998, longitude: -63.1242723001 },
  { latitude: -17.797306, longitude: -63.1226885 },
  { latitude: -17.7973917996, longitude: -63.1210154996 },
  { latitude: -17.7974859998, longitude: -63.1192792996 },
  { longitude: -63.1185908999, latitude: -17.7975408996 },
  { latitude: -17.7976146997, longitude: -63.1168601998 },
  { longitude: -63.1151901996, latitude: -17.7977415996 },
  { latitude: -17.7977889, longitude: -63.1137793 },
  { longitude: -63.1130276001, latitude: -17.7978570996 },
  { latitude: -17.7979438003, longitude: -63.1110408002 },
  { latitude: -17.7979894002, longitude: -63.1089425003 },
  { latitude: -17.7980659003, longitude: -63.1089487997 },
  { latitude: -17.7980748004, longitude: -63.1086097004 },
  { latitude: -17.7979478996, longitude: -63.1086006005 },
  { latitude: -17.7979485998, longitude: -63.1079296998 },
  { latitude: -17.7979583998, longitude: -63.1069484 },
  { latitude: -17.7979813001, longitude: -63.1057818002 },
  { latitude: -17.7979872998, longitude: -63.1049464 },
  { latitude: -17.7980237997, longitude: -63.1039315003 },
  { longitude: -63.1014634002, latitude: -17.7981603998 },
  { latitude: -17.7983177997, longitude: -63.0993180999 },
  { latitude: -17.7989695999, longitude: -63.0993849 },
  { longitude: -63.0994458997, latitude: -17.7996148002 },
  { latitude: -17.8003034004, longitude: -63.0995029996 },
  { longitude: -63.0995512998, latitude: -17.8009299003 },
  { latitude: -17.8019207001, longitude: -63.0995790004 },
  { longitude: -63.0990975996, latitude: -17.8019477997 },
  { latitude: -17.8019824004, longitude: -63.0983163997 },
  { latitude: -17.8021599997, longitude: -63.0982906997 },
  { longitude: -63.0974622999, latitude: -17.8021781004 },
  { longitude: -63.0967005004, latitude: -17.8021689 },
  { longitude: -63.0959968999, latitude: -17.8021495004 },
  { latitude: -17.8022020998, longitude: -63.0953743 },
  { longitude: -63.0949415997, latitude: -17.8022370998 },
  { longitude: -63.0947394, latitude: -17.8022737001 },
  { longitude: -63.0945879003, latitude: -17.8023229997 },
  { latitude: -17.8025292003, longitude: -63.0937221998 },
  { latitude: -17.8026925996, longitude: -63.0928918999 },
  { longitude: -63.0918694002, latitude: -17.8029017 },
  { longitude: -63.0913822004, latitude: -17.8030388997 },
  { latitude: -17.8031103001, longitude: -63.0911940995 },
  { latitude: -17.8032881003, longitude: -63.0908297995 },
  { longitude: -63.090725, latitude: -17.8033646001 },
  { latitude: -17.8039128996, longitude: -63.0891072998 },
  { latitude: -17.8037552999, longitude: -63.0890911996 }
        
              
      ]);
  return (
    <Polyline
    coordinates={coordinates}
    strokeColor="red"
    strokeWidth={4}
    lineCap="round"
    tappable={true}
    lineJoin="round"
    onPress={onPress}
    lineDashPattern={[5]}
  />
  )
}

export default Poli_9v

const styles = StyleSheet.create({})