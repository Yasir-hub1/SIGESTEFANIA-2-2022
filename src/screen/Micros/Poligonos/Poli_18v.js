import { StyleSheet } from 'react-native'
import React,{useState} from 'react'
import  {  Polyline } from "react-native-maps";

const Poli_18v = ({onPress = () => {}}) => {

    const [coordinates] = useState([
      { latitude: -17.7913021996, longitude: -63.1728197004 },
      { longitude: -63.1728424003, latitude: -17.7912265998 },
      { latitude: -17.7911592003, longitude: -63.1728852002 },
      { latitude: -17.7911093002, longitude: -63.1729390003 },
      { longitude: -63.1730037998, latitude: -17.7910731004 },
      { latitude: -17.7910527004, longitude: -63.1730758003 },
      { latitude: -17.7910600998, longitude: -63.1731695001 },
      { latitude: -17.7910833002, longitude: -63.1732742004 },
      { longitude: -63.1736015002, latitude: -17.7911235003 },
      { longitude: -63.1744082997, latitude: -17.7912491004 },
      { latitude: -17.7914868004, longitude: -63.1758292996 },
      { longitude: -63.1766477995, latitude: -17.7916167997 },
      { longitude: -63.1776006996, latitude: -17.7917782001 },
      { latitude: -17.7917643004, longitude: -63.1777071003 },
      { longitude: -63.1777410996, latitude: -17.7917506996 },
      { latitude: -17.7917487002, longitude: -63.1777779004 },
      { latitude: -17.7917587997, longitude: -63.1778131997 },
      { latitude: -17.7917797003, longitude: -63.1778428996 },
      { longitude: -63.1778579998, latitude: -17.7917989003 },
      { longitude: -63.1778680003, latitude: -17.7918210001 },
      { latitude: -17.7918907997, longitude: -63.1783009999 },
      { longitude: -63.178597, latitude: -17.7919403001 },
      { longitude: -63.1795275001, latitude: -17.7920852004 },
      { latitude: -17.7922439001, longitude: -63.1804944004 },
      { longitude: -63.1813120997, latitude: -17.7923752002 },
      { longitude: -63.1814509002, latitude: -17.792399 },
      { longitude: -63.1826243, latitude: -17.7926043999 },
      { longitude: -63.1827437004, latitude: -17.7926237002 },
      { latitude: -17.7927461002, longitude: -63.1835317003 },
      { latitude: -17.7928654002, longitude: -63.1843121 },
      { latitude: -17.7929698003, longitude: -63.1850265001 },
      { latitude: -17.7930852, longitude: -63.1858626004 },
      { latitude: -17.7931882997, longitude: -63.1865433002 },
      { latitude: -17.7931851004, longitude: -63.1867958005 },
      { longitude: -63.1868226, latitude: -17.7931521999 },
      { latitude: -17.7931252996, longitude: -63.1868557001 },
      { latitude: -17.7930244998, longitude: -63.1868870003 },
      { longitude: -63.1869361, latitude: -17.7927042003 },
      { latitude: -17.7922330002, longitude: -63.1869955003 },
      { longitude: -63.1870508004, latitude: -17.7917378998 },
      { longitude: -63.1870613996, latitude: -17.7916434 },
      { latitude: -17.7904551001, longitude: -63.1872328997 },
      { latitude: -17.7901262999, longitude: -63.1872769 },
      { longitude: -63.1873471996, latitude: -17.7897607001 },
      { latitude: -17.7896500003, longitude: -63.1873678998 },
      { latitude: -17.7894546002, longitude: -63.1874201 },
      { longitude: -63.1874070997, latitude: -17.7894060002 },
      { latitude: -17.7893561001, longitude: -63.1874115001 },
      { latitude: -17.7893143998, longitude: -63.1874301002 },
      { latitude: -17.7892799, longitude: -63.1874608997 },
      { longitude: -63.1875399995, latitude: -17.7891727 },
      { longitude: -63.1876015001, latitude: -17.7890093996 },
      { longitude: -63.1877387997, latitude: -17.7886243002 },
      { latitude: -17.7880407001, longitude: -63.1879745997 },
      { longitude: -63.1883560998, latitude: -17.7870043996 },
      { latitude: -17.7869346, longitude: -63.1883797998 },
      { latitude: -17.7868553004, longitude: -63.1884102998 },
      { longitude: -63.1886008004, latitude: -17.7863238002 },
      { longitude: -63.1886840004, latitude: -17.7860178996 },
      { longitude: -63.1887047002, latitude: -17.7858604002 },
      { latitude: -17.7855134, longitude: -63.1887542998 },
      { latitude: -17.7850819001, longitude: -63.1887930001 },
      { latitude: -17.7848451, longitude: -63.1887965997 },
      { latitude: -17.7846853999, longitude: -63.1887823996 },
      { longitude: -63.1887787999, latitude: -17.7846689004 },
      { longitude: -63.1887551999, latitude: -17.7845595003 },
      { longitude: -63.1887154996, latitude: -17.7845094004 },
      { latitude: -17.7844497997, longitude: -63.1886946003 },
      { longitude: -63.1886947004, latitude: -17.7843869998 },
      { latitude: -17.7843247999, longitude: -63.1887175003 },
      { latitude: -17.7842733996, longitude: -63.1887608999 },
      { longitude: -63.1887904, latitude: -17.7841794996 },
      { longitude: -63.1888014, latitude: -17.7840771002 },
      { longitude: -63.1888003002, latitude: -17.7839885003 },
      { longitude: -63.1887996998, latitude: -17.7831412001 },
      { latitude: -17.7822982996, longitude: -63.1887919997 },
      { latitude: -17.7821798996, longitude: -63.1887908998 },
      { latitude: -17.7820596004, longitude: -63.1887907998 },
      { longitude: -63.1887901996, latitude: -17.7812142001 },
      { latitude: -17.7809621998, longitude: -63.1887914002 },
      { latitude: -17.7808050999, longitude: -63.1887793004 },
      { latitude: -17.7806132997, longitude: -63.1887440996 },
      { latitude: -17.7801916996, longitude: -63.1886723997 },
      { longitude: -63.1886180996, latitude: -17.7797415996 },
      { latitude: -17.7794336997, longitude: -63.1885696002 },
      { latitude: -17.7790226998, longitude: -63.1884475001 },
      { longitude: -63.1882403, latitude: -17.7784461004 },
      { longitude: -63.1881983996, latitude: -17.7783413999 },
      { longitude: -63.1879702998, latitude: -17.7779052001 },
      { longitude: -63.1876563996, latitude: -17.7774686999 },
      { latitude: -17.7771549004, longitude: -63.1873780002 },
      { longitude: -63.1872228997, latitude: -17.7769944002 },
      { longitude: -63.1872063001, latitude: -17.7769773002 },
      { longitude: -63.1870733996, latitude: -17.7768700001 },
      { latitude: -17.7765004, longitude: -63.1865886998 },
      { longitude: -63.1861702997, latitude: -17.7762626997 },
      { longitude: -63.1859531, latitude: -17.7761710003 },
      { latitude: -17.7761180998, longitude: -63.1858397003 },
      { latitude: -17.7760864, longitude: -63.1857718998 },
      { latitude: -17.7757470996, longitude: -63.1847538003 },
      { latitude: -17.7757087002, longitude: -63.1846386 },
      { latitude: -17.7756801999, longitude: -63.1845531997 },
      { longitude: -63.1844740002, latitude: -17.7756550002 },
      { latitude: -17.7755970999, longitude: -63.1842920002 },
      { latitude: -17.7753290999, longitude: -63.1834216 },
      { latitude: -17.7753098998, longitude: -63.1833645002 },
      { latitude: -17.7752728002, longitude: -63.1832320002 },
      { latitude: -17.7750361002, longitude: -63.1824394997 },
      { longitude: -63.1822805998, latitude: -17.7749911002 },
      { longitude: -63.1821000003, latitude: -17.7749444001 },
      { longitude: -63.1816910002, latitude: -17.7748725001 },
      { longitude: -63.1811686, latitude: -17.7747730003 },
      { latitude: -17.7747330997, longitude: -63.1809491001 },
      { longitude: -63.1799288004, latitude: -17.7746940003 },
      { longitude: -63.1788177002, latitude: -17.7746652999 },
      { latitude: -17.7746866997, longitude: -63.1782241 },
      { longitude: -63.1780391996, latitude: -17.7747006999 },
      { longitude: -63.1778609996, latitude: -17.7747226001 },
      { latitude: -17.7747510996, longitude: -63.1776267996 },
      { latitude: -17.7748677001, longitude: -63.1770359003 },
      { longitude: -63.1768036001, latitude: -17.7749087997 },
      { latitude: -17.7749807, longitude: -63.1764876 },
      { latitude: -17.7750424999, longitude: -63.1762661004 },
      { latitude: -17.7751137003, longitude: -63.1760401003 },
      { longitude: -63.1758826999, latitude: -17.7751669998 },
      { longitude: -63.1757479999, latitude: -17.7752189999 },
      { longitude: -63.1752956003, latitude: -17.7753999998 },
      { longitude: -63.1751896003, latitude: -17.7754416 },
      { latitude: -17.7754613998, longitude: -63.1751438 },
      { latitude: -17.7754913, longitude: -63.1750873998 },
      { longitude: -63.1749740003, latitude: -17.7755629001 },
      { longitude: -63.1749612001, latitude: -17.7756155997 },
      { longitude: -63.1749340001, latitude: -17.7756631004 },
      { longitude: -63.1748842004, latitude: -17.7757089997 },
      { longitude: -63.1748213997, latitude: -17.7757368998 },
      { longitude: -63.1747524001, latitude: -17.7757438001 },
      { longitude: -63.1746849, latitude: -17.7757289002 },
      { longitude: -63.1744550004, latitude: -17.7758946997 },
      { latitude: -17.7761009002, longitude: -63.1741840002 },
      { latitude: -17.7763087003, longitude: -63.1739820999 },
      { longitude: -63.1737393999, latitude: -17.7765894 },
      { latitude: -17.7766068998, longitude: -63.1737264002 },
      { latitude: -17.7766963999, longitude: -63.1736595999 },
      { longitude: -63.1736188004, latitude: -17.7767691 },
      { longitude: -63.1735960999, latitude: -17.7768096004 },
      { latitude: -17.7771149998, longitude: -63.1734332996 },
      { latitude: -17.7774049996, longitude: -63.1733144002 },
      { longitude: -63.1731934004, latitude: -17.7777509 },
      { latitude: -17.7779089996, longitude: -63.1731678996 },
      { latitude: -17.7780430996, longitude: -63.1731768999 },
      { latitude: -17.7780878996, longitude: -63.1731951997 },
      { longitude: -63.1732003998, latitude: -17.7781357998 },
      { latitude: -17.7781832004, longitude: -63.1731920998 },
      { latitude: -17.7782270004, longitude: -63.1731709003 },
      { latitude: -17.7782639003, longitude: -63.1731383002 },
      { latitude: -17.7782912001, longitude: -63.1730965998 },
      { longitude: -63.1730396002, latitude: -17.7785160999 },
      { latitude: -17.7785565002, longitude: -63.1730308999 },
      { longitude: -63.1728382002, latitude: -17.779434 },
      { longitude: -63.1728285999, latitude: -17.7795225996 },
      { latitude: -17.7796033004, longitude: -63.1728137002 },
      { latitude: -17.7808755002, longitude: -63.172619 },
      { longitude: -63.1726045004, latitude: -17.7809782002 },
      { longitude: -63.1724842002, latitude: -17.7818190004 },
      { longitude: -63.1724709998, latitude: -17.7819229004 },
      { longitude: -63.1723795004, latitude: -17.7825688002 },
      { latitude: -17.7828400001, longitude: -63.1723492997 },
      { longitude: -63.1723864996, latitude: -17.7828880999 },
      { longitude: -63.1724065998, latitude: -17.7829447004 },
      { latitude: -17.7830045002, longitude: -63.1724076997 },
      { latitude: -17.7830510996, longitude: -63.1723945 },
      { latitude: -17.7830931998, longitude: -63.1723696997 },
      { latitude: -17.7831281999, longitude: -63.1723347004 },
      { longitude: -63.1722917998, latitude: -17.7831538003 },
      { longitude: -63.1722369003, latitude: -17.7834059003 },
      { latitude: -17.7840703001, longitude: -63.1721449 },
      { latitude: -17.7848496, longitude: -63.1720344999 },
      { longitude: -63.1719989996, latitude: -17.7850980004 },
      { longitude: -63.1719539003, latitude: -17.7854106001 },
      { longitude: -63.1719878004, latitude: -17.7854577999 },
      { latitude: -17.7855128001, longitude: -63.1720042999 },
      { latitude: -17.7855698997, longitude: -63.1720015996 },
      { longitude: -63.1719833003, latitude: -17.7856177997 },
      { latitude: -17.7856587998, longitude: -63.1719513998 },
      { longitude: -63.1719085997, latitude: -17.7856894997 },
      { latitude: -17.7857951003, longitude: -63.1718856995 },
      { latitude: -17.7859525999, longitude: -63.1718566003 },
      { latitude: -17.7865832999, longitude: -63.1717614997 },
      { latitude: -17.7877228004, longitude: -63.1715849997 },
      { longitude: -63.1715039999, latitude: -17.7883020996 },
      { longitude: -63.1714802996, latitude: -17.7884597001 },
      { latitude: -17.7886798995, longitude: -63.1714568996 },
      { longitude: -63.1714536002, latitude: -17.7889162002 },
      { longitude: -63.1714761997, latitude: -17.7891452996 },
      { latitude: -17.7894039, longitude: -63.1715337002 },
      { latitude: -17.7896473996, longitude: -63.1716114 },
      { longitude: -63.1717154, latitude: -17.7898905 },
      { longitude: -63.1717971004, latitude: -17.7900033998 },
      { longitude: -63.1718336005, latitude: -17.7900611004 },
      { longitude: -63.1719016998, latitude: -17.7901565997 },
      { latitude: -17.7903455999, longitude: -63.1720479999 },
      { latitude: -17.7906879001, longitude: -63.1724261998 },
      { longitude: -63.1725471002, latitude: -17.7907801999 },
      { longitude: -63.1726625004, latitude: -17.7908600997 },
      { latitude: -17.7909405001, longitude: -63.1726540002 },
      { latitude: -17.7909695001, longitude: -63.1726324999 },
      { latitude: -17.7910082999, longitude: -63.1725978 },
      { latitude: -17.791028, longitude: -63.1725105997 },
      { longitude: -63.1723110002, latitude: -17.7908710996 }

      ]);
  return (
    <Polyline
    coordinates={coordinates}
    strokeColor="ivory"
    strokeWidth={4}
    lineCap="round"
    tappable={true}
    lineJoin="round"
    onPress={onPress}
    lineDashPattern={[5]}
  />
  )
}

export default Poli_18v

const styles = StyleSheet.create({})