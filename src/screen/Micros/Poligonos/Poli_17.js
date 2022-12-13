import { StyleSheet } from 'react-native'
import React,{useState} from 'react'
import  {  Polyline } from "react-native-maps";

const Poli_17 = ({onPress = () => {}}) => {

    const [coordinates] = useState([
      { latitude: -17.7906685999, longitude: -63.1720837003 },
      { longitude: -63.1719267996, latitude: -17.7905072 },
      { longitude: -63.1717844996, latitude: -17.7903514002 },
      { latitude: -17.7901753999, longitude: -63.1716561002 },
      { longitude: -63.1715769003, latitude: -17.7900518999 },
      { longitude: -63.1715269003, latitude: -17.7899611996 },
      { latitude: -17.7895314002, longitude: -63.1713491998 },
      { longitude: -63.1712798999, latitude: -17.7892528 },
      { longitude: -63.1712579, latitude: -17.7890495999 },
      { latitude: -17.7888354001, longitude: -63.1712538001 },
      { latitude: -17.7885376003, longitude: -63.1712706002 },
      { longitude: -63.1712749999, latitude: -17.7884606003 },
      { latitude: -17.7883918998, longitude: -63.1712803001 },
      { longitude: -63.1712943002, latitude: -17.7883102997 },
      { latitude: -17.7882603004, longitude: -63.1713028997 },
      { longitude: -63.1714043001, latitude: -17.7876114 },
      { latitude: -17.7865515002, longitude: -63.1715639 },
      { latitude: -17.7859087, longitude: -63.1716611003 },
      { latitude: -17.7856599998, longitude: -63.1716871 },
      { longitude: -63.1716498998, latitude: -17.7856101002 },
      { longitude: -63.1716326004, latitude: -17.7855511001 },
      { latitude: -17.7855085998, longitude: -63.1716335005 },
      { latitude: -17.7854675002, longitude: -63.171645 },
      { latitude: -17.7854302, longitude: -63.1716664003 },
      { longitude: -63.1716934997, latitude: -17.7854012999 },
      { longitude: -63.1717263999, latitude: -17.7853785999 },
      { latitude: -17.7850853998, longitude: -63.1717771997 },
      { latitude: -17.7848368998, longitude: -63.1718170997 },
      { latitude: -17.7840499999, longitude: -63.171938 },
      { longitude: -63.1720466998, latitude: -17.7833947003 },
      { latitude: -17.7832975996, longitude: -63.1720522997 },
      { longitude: -63.1720679998, latitude: -17.7831210001 },
      { longitude: -63.1720348996, latitude: -17.7830839999 },
      { latitude: -17.7830277003, longitude: -63.1720086002 },
      { longitude: -63.1720020996, latitude: -17.7829664003 },
      { latitude: -17.7829062004, longitude: -63.1720160996 },
      { longitude: -63.1720491996, latitude: -17.7828532003 },
      { latitude: -17.7828293005, longitude: -63.1720743003 },
      { longitude: -63.1721033999, latitude: -17.7828097999 },
      { latitude: -17.7827953999, longitude: -63.1721355999 },
      { latitude: -17.7826056001, longitude: -63.1721718002 },
      { longitude: -63.1721968002, latitude: -17.782451 },
      { longitude: -63.1722758003, latitude: -17.7819881996 },
      { latitude: -17.7817955002, longitude: -63.1722933999 },
      { latitude: -17.7808534999, longitude: -63.1724186996 },
      { longitude: -63.1725130005, latitude: -17.7801873 },
      { longitude: -63.1726049, latitude: -17.7795509998 },
      { latitude: -17.7794914001, longitude: -63.1726125998 },
      { latitude: -17.7793955003, longitude: -63.1726289002 },
      { longitude: -63.1726638, latitude: -17.7792174004 },
      { latitude: -17.7787907002, longitude: -63.1727608002 },
      { longitude: -63.1728302002, latitude: -17.7785120004 },
      { latitude: -17.7782544998, longitude: -63.1728735002 },
      { latitude: -17.7782144999, longitude: -63.1728432998 },
      { longitude: -63.1728256997, latitude: -17.7781681996 },
      { longitude: -63.1728219004, latitude: -17.7781180999 },
      { latitude: -17.7780689003, longitude: -63.1728326999 },
      { longitude: -63.1728572999, latitude: -17.7780244998 },
      { latitude: -17.7779882996, longitude: -63.1728939 },
      { longitude: -63.1729561999, latitude: -17.7778702004 },
      { longitude: -63.17298, latitude: -17.7778082997 },
      { latitude: -17.7776717002, longitude: -63.1730173996 },
      { latitude: -17.7775564003, longitude: -63.1730509997 },
      { latitude: -17.7773864, longitude: -63.1731043999 },
      { longitude: -63.1731727999, latitude: -17.7772018998 },
      { longitude: -63.1732473998, latitude: -17.7770367002 },
      { longitude: -63.1734219004, latitude: -17.7766948 },
      { longitude: -63.1734897997, latitude: -17.7766049998 },
      { longitude: -63.1735093001, latitude: -17.7765790999 },
      { longitude: -63.1735576997, latitude: -17.7765149999 },
      { latitude: -17.7765071996, longitude: -63.1735635999 },
      { longitude: -63.1738697004, latitude: -17.7761413 },
      { latitude: -17.7757584, longitude: -63.1742933999 },
      { longitude: -63.1745557996, latitude: -17.7755468 },
      { latitude: -17.7754936999, longitude: -63.1745627002 },
      { longitude: -63.1745842001, latitude: -17.7754442004 },
      { longitude: -63.1746187999, latitude: -17.7754019999 },
      { longitude: -63.1746782001, latitude: -17.7753630999 },
      { longitude: -63.1747432001, latitude: -17.7753462 },
      { latitude: -17.7753497003, longitude: -63.1748105002 },
      { longitude: -63.1748731001, latitude: -17.7753734997 },
      { longitude: -63.1750803998, latitude: -17.7752775004 },
      { latitude: -17.7752251002, longitude: -63.1751929999 },
      { longitude: -63.1754282, latitude: -17.7751327996 },
      { longitude: -63.1757017002, latitude: -17.7750279004 },
      { latitude: -17.7749385003, longitude: -63.1759453001 },
      { latitude: -17.7748753001, longitude: -63.1761563999 },
      { latitude: -17.7748330003, longitude: -63.1762999999 },
      { longitude: -63.1767958004, latitude: -17.7747088004 },
      { longitude: -63.1770613996, latitude: -17.7746506 },
      { longitude: -63.1774135998, latitude: -17.7745871001 },
      { latitude: -17.7745674997, longitude: -63.1775619002 },
      { longitude: -63.1776103001, latitude: -17.7745544996 },
      { longitude: -63.1776604003, latitude: -17.7745482996 },
      { latitude: -17.7745336003, longitude: -63.1778013004 },
      { longitude: -63.1778299002, latitude: -17.7745296 },
      { latitude: -17.7745117997, longitude: -63.1780033001 },
      { latitude: -17.7745044004, longitude: -63.1780779998 },
      { longitude: -63.178246, latitude: -17.7744918003 },
      { latitude: -17.7744857998, longitude: -63.1784133 },
      { latitude: -17.7744701, longitude: -63.1788379001 },
      { longitude: -63.1793867005, latitude: -17.7744670999 },
      { latitude: -17.7744865996, longitude: -63.1799443 },
      { latitude: -17.7744976999, longitude: -63.1801362999 },
      { longitude: -63.1807471996, latitude: -17.7745203001 },
      { latitude: -17.7745268001, longitude: -63.1808791998 },
      { latitude: -17.7745557999, longitude: -63.1811114002 },
      { latitude: -17.7746765998, longitude: -63.1817206003 },
      { latitude: -17.7747499996, longitude: -63.1821118001 },
      { latitude: -17.7747978996, longitude: -63.1822937996 },
      { longitude: -63.1832542998, latitude: -17.7750920998 },
      { latitude: -17.7751259, longitude: -63.1833802999 },
      { longitude: -63.1834349004, latitude: -17.7751441001 },
      { latitude: -17.7754364002, longitude: -63.1843501998 },
      { latitude: -17.7754800996, longitude: -63.1844908996 },
      { longitude: -63.1845780996, latitude: -17.7755073996 },
      { longitude: -63.1846398996, latitude: -17.7755263997 },
      { longitude: -63.1848081003, latitude: -17.7755835996 },
      { longitude: -63.1858544998, latitude: -17.7759034999 },
      { latitude: -17.7759286002, longitude: -63.1859036003 },
      { latitude: -17.7759514999, longitude: -63.1859485002 },
      { latitude: -17.7760441003, longitude: -63.1861554002 },
      { latitude: -17.7761000004, longitude: -63.1862803997 },
      { longitude: -63.1867039996, latitude: -17.7763511996 },
      { longitude: -63.1870459002, latitude: -17.7766042004 },
      { longitude: -63.1872075999, latitude: -17.7767306001 },
      { latitude: -17.7768496003, longitude: -63.1873440004 },
      { longitude: -63.1875693999, latitude: -17.7770794999 },
      { longitude: -63.1878918997, latitude: -17.7774718998 },
      { latitude: -17.7778541, longitude: -63.1881455001 },
      { longitude: -63.1883459002, latitude: -17.7782024004 },
      { latitude: -17.7783632998, longitude: -63.1884214 },
      { latitude: -17.7788888004, longitude: -63.1886140999 },
      { longitude: -63.1887793999, latitude: -17.7794084998 },
      { latitude: -17.7797043001, longitude: -63.1888515996 },
      { longitude: -63.1888711999, latitude: -17.7797789002 },
      { longitude: -63.1889137995, latitude: -17.7800688004 },
      { latitude: -17.7804081002, longitude: -63.1889621997 },
      { latitude: -17.7805816001, longitude: -63.1889762 },
      { latitude: -17.7807717997, longitude: -63.1889933001 },
      { longitude: -63.1890130997, latitude: -17.7809398002 },
      { longitude: -63.1890204, latitude: -17.7812311996 },
      { latitude: -17.7820445002, longitude: -63.1890017001 },
      { longitude: -63.1890004001, latitude: -17.7821010997 },
      { latitude: -17.7821976, longitude: -63.1889982004 },
      { latitude: -17.7823042002, longitude: -63.1889990003 },
      { longitude: -63.1890060999, latitude: -17.7832175 },
      { latitude: -17.7839755996, longitude: -63.1890059999 },
      { latitude: -17.7841736996, longitude: -63.1890329001 },
      { longitude: -63.1890498003, latitude: -17.7842918999 },
      { latitude: -17.7843193, longitude: -63.1890704998 },
      { longitude: -63.1890948996, latitude: -17.7843781001 },
      { longitude: -63.1890981003, latitude: -17.7844412999 },
      { latitude: -17.7845020999, longitude: -63.1890798004 },
      { longitude: -63.1890418999, latitude: -17.7845540002 },
      { latitude: -17.7845680002, longitude: -63.1890223997 },
      { longitude: -63.1890027999, latitude: -17.7846665999 },
      { longitude: -63.1890015998, latitude: -17.7848640003 },
      { longitude: -63.1890022004, latitude: -17.7850815998 },
      { latitude: -17.7855135002, longitude: -63.1889820999 },
      { latitude: -17.7858909001, longitude: -63.1889172002 },
      { longitude: -63.1888833997, latitude: -17.7860558998 },
      { latitude: -17.7864445, longitude: -63.1887741004 },
      { latitude: -17.7865249001, longitude: -63.1887431998 },
      { longitude: -63.1886050999, latitude: -17.7869278001 },
      { longitude: -63.1885871999, latitude: -17.7869735998 },
      { longitude: -63.1885591, latitude: -17.7870706999 },
      { latitude: -17.7878825004, longitude: -63.1882595998 },
      { latitude: -17.7885105001, longitude: -63.1880089996 },
      { longitude: -63.1879102001, latitude: -17.7887765 },
      { longitude: -63.1877946, latitude: -17.7890719003 },
      { latitude: -17.7892072004, longitude: -63.1877594997 },
      { longitude: -63.1877184001, latitude: -17.7893582998 },
      { longitude: -63.1877226998, latitude: -17.7893999998 },
      { longitude: -63.1877147004, latitude: -17.7894410996 },
      { longitude: -63.1876962999, latitude: -17.7894770004 },
      { latitude: -17.7895070004, longitude: -63.1876686999 },
      { latitude: -17.7895291003, longitude: -63.1876337001 },
      { latitude: -17.7897350003, longitude: -63.1875631004 },
      { latitude: -17.7897890998, longitude: -63.1875532001 },
      { longitude: -63.1874340999, latitude: -17.7906042004 },
      { longitude: -63.1872891996, latitude: -17.7916539998 },
      { longitude: -63.1872738004, latitude: -17.7917689003 },
      { latitude: -17.7922579999, longitude: -63.1872079999 },
      { latitude: -17.7927331999, longitude: -63.1871334004 },
      { longitude: -63.1871067003, latitude: -17.7929774002 },
      { longitude: -63.1871005997, latitude: -17.7931260996 },
      { latitude: -17.7931612996, longitude: -63.1871410002 },
      { longitude: -63.1871706998, latitude: -17.7932051003 },
      { latitude: -17.7932687998, longitude: -63.1871900999 },
      { latitude: -17.7933350996, longitude: -63.1871869997 },
      { longitude: -63.1871617003, latitude: -17.7933969004 },
      { latitude: -17.7934396996, longitude: -63.1871260995 },
      { latitude: -17.7934719996, longitude: -63.1870798996 },
      { latitude: -17.7934914001, longitude: -63.1870264002 },
      { longitude: -63.1869587996, latitude: -17.7934960004 },
      { latitude: -17.7934802996, longitude: -63.1868929998 },
      { longitude: -63.1868357996, latitude: -17.7934457998 },
      { latitude: -17.7934082001, longitude: -63.1868009001 },
      { longitude: -63.1867766995, latitude: -17.7933635996 },
      { latitude: -17.7932000999, longitude: -63.1857505995 },
      { longitude: -63.1850073001, latitude: -17.7930950003 },
      { latitude: -17.7929892996, longitude: -63.1843216001 },
      { latitude: -17.7927302004, longitude: -63.1827285001 },
      { latitude: -17.7927120003, longitude: -63.1826099 },
      { longitude: -63.1814323004, latitude: -17.7925043002 },
      { longitude: -63.1812932005, latitude: -17.7924839996 },
      { latitude: -17.7923459002, longitude: -63.1804786999 },
      { latitude: -17.7921891003, longitude: -63.1795129002 },
      { longitude: -63.1778369003, latitude: -17.7919259996 },
      { longitude: -63.1778081999, latitude: -17.7919435998 },
      { longitude: -63.1777752, latitude: -17.7919516996 },
      { latitude: -17.7919496, longitude: -63.1777412002 },
      { latitude: -17.7919372998, longitude: -63.1777096 },
      { latitude: -17.7919163, longitude: -63.1776836004 },
      { longitude: -63.1776658999, latitude: -17.7918885001 },
      { longitude: -63.1766298004, latitude: -17.7917236003 },
      { longitude: -63.1758070997, latitude: -17.7915977002 },
      { longitude: -63.1743796003, latitude: -17.7913573999 },
      { longitude: -63.1737337001, latitude: -17.7912470004 },
      { longitude: -63.1736288004, latitude: -17.7912461001 },
      { longitude: -63.1735459003, latitude: -17.7912742002 },
      { latitude: -17.7913631004, longitude: -63.1734389002 },
      { latitude: -17.7914170996, longitude: -63.1734301003 },
      { latitude: -17.7914685996, longitude: -63.1734112004 },
      { longitude: -63.1733660998, latitude: -17.7915363003 },
      { longitude: -63.1733037004, latitude: -17.7915901003 },
      { latitude: -17.7916259001, longitude: -63.1732283 },
      { longitude: -63.1731456997, latitude: -17.7916413003 },
      { longitude: -63.1730647001, latitude: -17.7916355998 },
      { longitude: -63.1729880999, latitude: -17.7916101998 },
      { latitude: -17.7915667997, longitude: -63.1729208997 },
      { latitude: -17.7914910001, longitude: -63.1728566999 },
      { latitude: -17.7913995999, longitude: -63.1728217 },
      { latitude: -17.7913021996, longitude: -63.1728197004 },
      { latitude: -17.791028, longitude: -63.1725105997 },
      { latitude: -17.7908710996, longitude: -63.1723110002 }

      ]);
  return (
    <Polyline
    coordinates={coordinates}
    strokeColor="blue"
    strokeWidth={4}
    lineCap="round"
    tappable={true}
    lineJoin="round"
    onPress={onPress}
  />
  )
}

export default Poli_17

const styles = StyleSheet.create({})