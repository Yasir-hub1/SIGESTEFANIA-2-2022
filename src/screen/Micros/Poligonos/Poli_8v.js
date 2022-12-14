import { StyleSheet } from 'react-native'
import React,{useState} from 'react'
import  {  Polyline } from "react-native-maps";

const Poli_8v = ({onPress = () => {}}) => {

    const [coordinates] = useState([
        //inicio  de vuelta de linea 8//
        { latitude: -17.7180457002, longitude: -63.1386699004 },
  { latitude: -17.7181557, longitude: -63.1393337004 },
  { latitude: -17.7182628996, longitude: -63.1400362004 },
  { longitude: -63.1407250004, latitude: -17.7183739001 },
  { longitude: -63.1414123, latitude: -17.7184729996 },
  { latitude: -17.7185424999, longitude: -63.1418255996 },
  { latitude: -17.7186216997, longitude: -63.1420765995 },
  { latitude: -17.7180743, longitude: -63.1425044998 },
  { longitude: -63.1428886, latitude: -17.7175190998 },
  { longitude: -63.1437065001, latitude: -17.7163205002 },
  { longitude: -63.1446525004, latitude: -17.7147573001 },
  { longitude: -63.1447079002, latitude: -17.7148012 },
  { longitude: -63.1449639998, latitude: -17.7154703999 },
  { longitude: -63.1450779002, latitude: -17.7157063996 },
  { longitude: -63.1456616, latitude: -17.7172428996 },
  { longitude: -63.1464053996, latitude: -17.7189914 },
  { latitude: -17.7191794001, longitude: -63.1466531 },
  { latitude: -17.7194321997, longitude: -63.1469586001 },
  { longitude: -63.1479663998, latitude: -17.7202700003 },
  { longitude: -63.1485409004, latitude: -17.7207416996 },
  { latitude: -17.7213464002, longitude: -63.1492717002 },
  { longitude: -63.1499841, latitude: -17.7219486002 },
  { latitude: -17.7222646001, longitude: -63.1503800001 },
  { latitude: -17.7226143998, longitude: -63.1508127996 },
  { latitude: -17.7226810003, longitude: -63.1508900996 },
  { longitude: -63.1509047996, latitude: -17.7227090999 },
  { latitude: -17.7227446999, longitude: -63.1509830999 },
  { longitude: -63.1510554998, latitude: -17.7227881004 },
  { latitude: -17.7228239004, longitude: -63.1511239 },
  { latitude: -17.7228481999, longitude: -63.1511868996 },
  { latitude: -17.7229465004, longitude: -63.1511963004 },
  { longitude: -63.1511923, latitude: -17.723027 },
  { latitude: -17.7231701, longitude: -63.1511426995 },
  { latitude: -17.7232647998, longitude: -63.1510938997 },
  { longitude: -63.1511449002, latitude: -17.7235363 },
  { latitude: -17.7237788998, longitude: -63.1511588001 },
  { latitude: -17.7242768001, longitude: -63.1511287004 },
  { longitude: -63.1517422997, latitude: -17.7240348003 },
  { latitude: -17.7237834004, longitude: -63.1523761003 },
  { latitude: -17.7235484998, longitude: -63.1530194004 },
  { latitude: -17.7232758998, longitude: -63.1537177999 },
  { longitude: -63.1544851997, latitude: -17.7229628004 },
  { longitude: -63.1546096995, latitude: -17.7232130999 },
  { latitude: -17.7237888999, longitude: -63.1549117997 },
  { longitude: -63.1551989, latitude: -17.7243966998 },
  { longitude: -63.1554826004, latitude: -17.7250209996 },
  { latitude: -17.7256062002, longitude: -63.1557895001 },
  { longitude: -63.1561757, latitude: -17.7264123997 },
  { latitude: -17.7280098998, longitude: -63.1569431003 },
  { longitude: -63.1568483996, latitude: -17.7282283996 },
  { longitude: -63.1568679003, latitude: -17.7282701002 },
  { latitude: -17.7283541996, longitude: -63.1568996003 },
  { longitude: -63.1569384004, latitude: -17.7284499001 },
  { longitude: -63.1570271998, latitude: -17.7284234003 },
  { latitude: -17.7281169, longitude: -63.1581618996 },
  { longitude: -63.1581972002, latitude: -17.7281095004 },
  { latitude: -17.7281088998, longitude: -63.1582325002 },
  { longitude: -63.1583022004, latitude: -17.7281184998 },
  { longitude: -63.1584397996, latitude: -17.7281412997 },
  { latitude: -17.7281545998, longitude: -63.1585133003 },
  { latitude: -17.7281453998, longitude: -63.1585874 },
  { latitude: -17.7281247998, longitude: -63.1586327999 },
  { latitude: -17.7281148003, longitude: -63.1586549003 },
  { longitude: -63.1587090005, latitude: -17.7280656999 },
  { longitude: -63.1587900999, latitude: -17.7279756001 },
  { longitude: -63.1588403002, latitude: -17.7279322 },
  { latitude: -17.7278988998, longitude: -63.1588975003 },
  { longitude: -63.1592904001, latitude: -17.7277308002 },
  { longitude: -63.1594451, latitude: -17.7276661001 },
  { latitude: -17.7271427001, longitude: -63.1606969996 },
  { longitude: -63.1613431005, latitude: -17.7268725003 },
  { latitude: -17.7265937996, longitude: -63.1620095001 },
  { longitude: -63.1634246001, latitude: -17.7260020999 },
  { longitude: -63.1635176002, latitude: -17.7259631997 },
  { latitude: -17.7256516998, longitude: -63.1642625 },
  { longitude: -63.1642858997, latitude: -17.7256419997 },
  { latitude: -17.7253041997, longitude: -63.1650937 },
  { longitude: -63.1653090003, latitude: -17.7252142003 },
  { longitude: -63.1654118999, latitude: -17.7251711004 },
  { latitude: -17.7251506404, longitude: -63.1654608588 },
  { latitude: -17.7265366002, longitude: -63.1660097995 },
  { longitude: -63.1660804003, latitude: -17.7267172997 },
  { latitude: -17.7271690942, longitude: -63.1662570331 },
  { latitude: -17.7277018002, longitude: -63.1664653002 },
  { longitude: -63.1667304004, latitude: -17.7283736 },
  { longitude: -63.1668923001, latitude: -17.7287835998 },
  { longitude: -63.1669254999, latitude: -17.7288678002 },
  { latitude: -17.7289233001, longitude: -63.1669474002 },
  { longitude: -63.1671085001, latitude: -17.7293313 },
  { latitude: -17.7298226996, longitude: -63.1673025003 },
  { longitude: -63.1674093001, latitude: -17.7300932997 },
  { latitude: -17.7303595997, longitude: -63.1675144004 },
  { longitude: -63.1678667435, latitude: -17.7312508265 },
  { longitude: -63.1682010512, latitude: -17.7320964245 },
  { longitude: -63.1682998313, latitude: -17.7323462787 },
  { longitude: -63.1687596003, latitude: -17.7335092 },
  { latitude: -17.7336363004, longitude: -63.1688072995 },
  { longitude: -63.1690250003, latitude: -17.7342158 },
  { longitude: -63.1696635997, latitude: -17.7358360997 },
  { longitude: -63.1697978998, latitude: -17.7361769002 },
  { latitude: -17.7365235999, longitude: -63.1699345 },
  { longitude: -63.1703627001, latitude: -17.7376100999 },
  { longitude: -63.1711828003, latitude: -17.7396911 },
  { latitude: -17.7398699998, longitude: -63.1712612001 },
  { longitude: -63.1714928534, latitude: -17.740484713 },
  { latitude: -17.7406449172, longitude: -63.1715532256 },
  { longitude: -63.1716358999, latitude: -17.7408642999 },
  { longitude: -63.1719649004, latitude: -17.7417230999 },
  { longitude: -63.1720839003, latitude: -17.7420509999 },
  { latitude: -17.7429312998, longitude: -63.1724242005 },
  { longitude: -63.1728288998, latitude: -17.7439631001 },
  { latitude: -17.7440859996, longitude: -63.1728739001 },
  { longitude: -63.1730643003, latitude: -17.7445741 },
  { latitude: -17.7449610996, longitude: -63.1732152001 },
  { longitude: -63.1737041999, latitude: -17.7461867996 },
  { latitude: -17.7475509997, longitude: -63.1742416998 },
  { latitude: -17.7478751001, longitude: -63.1743555 },
  { latitude: -17.7482753, longitude: -63.1744958996 },
  { longitude: -63.1748654002, latitude: -17.7492282004 },
  { longitude: -63.1748947, latitude: -17.7493507003 },
  { latitude: -17.7494769002, longitude: -63.1748910003 },
  { latitude: -17.7495548, longitude: -63.1748774001 },
  { latitude: -17.7497243997, longitude: -63.1748445004 },
  { longitude: -63.1748282003, latitude: -17.7497740004 },
  { longitude: -63.1747910997, latitude: -17.7498868996 },
  { latitude: -17.7499908171, longitude: -63.1747943813 },
  { longitude: -63.1747965, latitude: -17.7500578997 },
  { latitude: -17.7501278823, longitude: -63.1748244669 },
  { latitude: -17.7502168, longitude: -63.1748600005 },
  { latitude: -17.7502967996, longitude: -63.1749284003 },
  { longitude: -63.1750481, latitude: -17.7503839999 },
  { longitude: -63.1751121004, latitude: -17.7504251996 },
  { longitude: -63.1752011002, latitude: -17.7505043003 },
  { latitude: -17.7505229002, longitude: -63.1752206003 },
  { latitude: -17.7505464998, longitude: -63.1752498004 },
  { latitude: -17.7506225002, longitude: -63.1753437997 },
  { latitude: -17.7507530004, longitude: -63.1754435997 },
  { latitude: -17.7508534, longitude: -63.1754973996 },
  { latitude: -17.7512489996, longitude: -63.1756584005 },
  { latitude: -17.7513865002, longitude: -63.1757088004 },
  { latitude: -17.7515830998, longitude: -63.1757809004 },
  { latitude: -17.7517915998, longitude: -63.1758632998 },
  { latitude: -17.7519989997, longitude: -63.1759808998 },
  { latitude: -17.7526118, longitude: -63.1762195996 },
  { latitude: -17.7532339, longitude: -63.1764602997 },
  { longitude: -63.1766857004, latitude: -17.7538383001 },
  { longitude: -63.1768538001, latitude: -17.7542566998 },
  { latitude: -17.7544519997, longitude: -63.1769322997 },
  { longitude: -63.1771054998, latitude: -17.7548633 },
  { longitude: -63.1771849004, latitude: -17.7550677002 },
  { longitude: -63.1775592004, latitude: -17.7560105003 },
  { longitude: -63.1776901999, latitude: -17.7563388003 },
  { longitude: -63.1779312998, latitude: -17.7569428997 },
  { latitude: -17.7573656999, longitude: -63.1780977004 },
  { latitude: -17.7577890997, longitude: -63.1782644004 },
  { longitude: -63.1783328004, latitude: -17.7579629003 },
  { longitude: -63.1784073996, latitude: -17.7581522998 },
  { latitude: -17.7582672, longitude: -63.1784526004 },
  { longitude: -63.1785422001, latitude: -17.7584948002 },
  { longitude: -63.1787827999, latitude: -17.7591062004 },
  { latitude: -17.7595382003, longitude: -63.1789522003 },
  { longitude: -63.1789939, latitude: -17.7596415998 },
  { longitude: -63.1792128999, latitude: -17.7601779002 },
  { longitude: -63.1792205003, latitude: -17.7601986003 },
  { latitude: -17.7603227998, longitude: -63.1792662001 },
  { longitude: -63.1798323003, latitude: -17.7617788003 },
  { longitude: -63.1801731999, latitude: -17.7626477002 },
  { longitude: -63.1801974004, latitude: -17.7627093002 },
  { longitude: -63.1804622998, latitude: -17.7633839998 },
  { latitude: -17.7638058997, longitude: -63.1806347999 },
  { latitude: -17.7641224998, longitude: -63.1807642001 },
  { latitude: -17.7644011004, longitude: -63.1808672999 },
  { longitude: -63.1809194005, latitude: -17.7645418003 },
  { latitude: -17.7647818997, longitude: -63.1810082002 },
  { longitude: -63.1812356002, latitude: -17.7653679999 },
  { latitude: -17.7658280003, longitude: -63.1814207999 },
  { latitude: -17.7662832996, longitude: -63.1815988997 },
  { longitude: -63.1817969002, latitude: -17.7667657998 },
  { latitude: -17.7670413003, longitude: -63.1819109 },
  { latitude: -17.7671854003, longitude: -63.1819589999 },
  { longitude: -63.1821131999, latitude: -17.7676296 },
  { latitude: -17.7680824998, longitude: -63.1822328002 },
  { longitude: -63.1823252999, latitude: -17.7685080996 },
  { longitude: -63.1823705004, latitude: -17.7687655996 },
  { latitude: -17.7691715996, longitude: -63.1824182998 },
  { latitude: -17.7692385002, longitude: -63.1824261997 },
  { longitude: -63.1824376, latitude: -17.7696406003 },
  { latitude: -17.7699191003, longitude: -63.1824400004 },
  { latitude: -17.7700976001, longitude: -63.1824415004 },
  { longitude: -63.1824326004, latitude: -17.7702009004 },
  { latitude: -17.7703860002, longitude: -63.1824003001 },
  { latitude: -17.7705815002, longitude: -63.1823834001 },
  { latitude: -17.7708098996, longitude: -63.1823665004 },
  { latitude: -17.7709385001, longitude: -63.1823569996 },
  { longitude: -63.1823194, latitude: -17.7714586004 },
  { longitude: -63.1822927997, latitude: -17.7718691003 },
  { latitude: -17.7722314999, longitude: -63.1822692996 },
  { latitude: -17.7728935003, longitude: -63.1822426002 },
  { latitude: -17.7735545998, longitude: -63.1821923 },
  { longitude: -63.1821838004, latitude: -17.7737247 },
  { longitude: -63.1821625998, latitude: -17.7740300996 },
  { latitude: -17.7747499996, longitude: -63.1821118001 },
  { latitude: -17.7749444001, longitude: -63.1821000003 },
  { longitude: -63.1822805998, latitude: -17.7749911002 },
  { latitude: -17.7750361002, longitude: -63.1824394997 },
  { longitude: -63.1832320002, latitude: -17.7752728002 },
  { longitude: -63.1833645002, latitude: -17.7753098998 },
  { longitude: -63.1834216, latitude: -17.7753290999 },
  { latitude: -17.7755970999, longitude: -63.1842920002 },
  { latitude: -17.7756550002, longitude: -63.1844740002 },
  { longitude: -63.1845531997, latitude: -17.7756801999 },
  { latitude: -17.7757087002, longitude: -63.1846386 },
  { longitude: -63.1847538003, latitude: -17.7757470996 },
  { longitude: -63.1857718998, latitude: -17.7760864 },
  { longitude: -63.1858397003, latitude: -17.7761180998 },
  { longitude: -63.1859531, latitude: -17.7761710003 },
  { latitude: -17.7762626997, longitude: -63.1861702997 },
  { latitude: -17.7765004, longitude: -63.1865886998 },
  { longitude: -63.1870733996, latitude: -17.7768700001 },
  { longitude: -63.1872063001, latitude: -17.7769773002 },
  { longitude: -63.1872228997, latitude: -17.7769944002 },
  { longitude: -63.1873780002, latitude: -17.7771549004 },
  { longitude: -63.1876563996, latitude: -17.7774686999 },
  { longitude: -63.1879702998, latitude: -17.7779052001 },
  { latitude: -17.7783413999, longitude: -63.1881983996 },
  { latitude: -17.7784461004, longitude: -63.1882403 },
  { longitude: -63.1884475001, latitude: -17.7790226998 },
  { latitude: -17.7794336997, longitude: -63.1885696002 },
  { longitude: -63.1886180996, latitude: -17.7797415996 },
  { latitude: -17.7801916996, longitude: -63.1886723997 },
  { longitude: -63.1887440996, latitude: -17.7806132997 },
  { longitude: -63.1887793004, latitude: -17.7808050999 },
  { longitude: -63.1887914002, latitude: -17.7809621998 },
  { latitude: -17.7812142001, longitude: -63.1887901996 },
  { latitude: -17.7820596004, longitude: -63.1887907998 },
  { latitude: -17.7821798996, longitude: -63.1887908998 },
  { longitude: -63.1887919997, latitude: -17.7822982996 },
  { latitude: -17.7831412001, longitude: -63.1887996998 },
  { longitude: -63.1888003002, latitude: -17.7839885003 },
  { longitude: -63.1888014, latitude: -17.7840771002 },
  { latitude: -17.7841794996, longitude: -63.1887904 },
  { latitude: -17.7842733996, longitude: -63.1887608999 },
  { latitude: -17.7843247999, longitude: -63.1887175003 },
  { longitude: -63.1886947004, latitude: -17.7843869998 },
  { latitude: -17.7844497997, longitude: -63.1886946003 },
  { latitude: -17.7845094004, longitude: -63.1887154996 },
  { longitude: -63.1887551999, latitude: -17.7845595003 },
  { longitude: -63.1887787999, latitude: -17.7846689004 },
  { latitude: -17.7846853999, longitude: -63.1887823996 },
  { longitude: -63.1887965997, latitude: -17.7848451 },
  { latitude: -17.7850819001, longitude: -63.1887930001 },
  { longitude: -63.1887542998, latitude: -17.7855134 },
  { longitude: -63.1887047002, latitude: -17.7858604002 },
  { longitude: -63.1886840004, latitude: -17.7860178996 },
  { longitude: -63.1886008004, latitude: -17.7863238002 },
  { longitude: -63.1884102998, latitude: -17.7868553004 },
  { latitude: -17.7869346, longitude: -63.1883797998 },
  { longitude: -63.1883560998, latitude: -17.7870043996 },
  { latitude: -17.7880407001, longitude: -63.1879745997 },
  { longitude: -63.1877387997, latitude: -17.7886243002 },
  { latitude: -17.7890093996, longitude: -63.1876015001 },
  { longitude: -63.1875399995, latitude: -17.7891727 },
  { longitude: -63.1874608997, latitude: -17.7892799 },
  { longitude: -63.1874301002, latitude: -17.7893143998 },
  { longitude: -63.1874115001, latitude: -17.7893561001 },
  { latitude: -17.7894060002, longitude: -63.1874070997 },
  { latitude: -17.7894546002, longitude: -63.1874201 },
  { longitude: -63.1873678998, latitude: -17.7896500003 },
  { latitude: -17.7897607001, longitude: -63.1873471996 },
  { longitude: -63.1872769, latitude: -17.7901262999 },
  { latitude: -17.7904551001, longitude: -63.1872328997 },
  { longitude: -63.1870613996, latitude: -17.7916434 },
  { longitude: -63.1870508004, latitude: -17.7917378998 },
  { longitude: -63.1869955003, latitude: -17.7922330002 },
  { latitude: -17.7927042003, longitude: -63.1869361 },
  { longitude: -63.1868870003, latitude: -17.7930244998 },
  { latitude: -17.7931252996, longitude: -63.1868557001 },
  { latitude: -17.7931521999, longitude: -63.1868226 },
  { latitude: -17.7931851004, longitude: -63.1867958005 },
  { longitude: -63.1867702003, latitude: -17.7932417999 },
  { longitude: -63.1867636001, latitude: -17.7933032004 },
  { longitude: -63.1867766995, latitude: -17.7933635996 },
  { longitude: -63.1868009001, latitude: -17.7934082001 },
  { latitude: -17.7934457998, longitude: -63.1868357996 },
  { latitude: -17.7938184, longitude: -63.1867804003 },
  { longitude: -63.1866753005, latitude: -17.7944742998 },
  { longitude: -63.1866009997, latitude: -17.7949977004 },
  { latitude: -17.7951273, longitude: -63.1865787 },
  { latitude: -17.7955899, longitude: -63.1864988999 },
  { latitude: -17.7963530998, longitude: -63.1863796997 },
  { longitude: -63.1861820002, latitude: -17.7976091997 },
  { longitude: -63.1861601003, latitude: -17.7977483004 },
  { latitude: -17.7979294, longitude: -63.1860742997 },
  { longitude: -63.1860502, latitude: -17.7979688998 },
  { longitude: -63.1860379003, latitude: -17.798013 },
  { longitude: -63.1860385005, latitude: -17.7980586001 },
  { latitude: -17.7981024996, longitude: -63.1860519 },
  { latitude: -17.7982268004, longitude: -63.1860801003 },
  { latitude: -17.7982622003, longitude: -63.1860825997 },
  { longitude: -63.1860792004, latitude: -17.7983061998 },
  { latitude: -17.7983935997, longitude: -63.1860599 },
  { latitude: -17.7984641997, longitude: -63.1860477004 },
  { longitude: -63.1859333996, latitude: -17.7991247003 },
  { longitude: -63.1858319, latitude: -17.7997660001 },
  { latitude: -17.7999478997, longitude: -63.1858030002 },
  { longitude: -63.1857957002, latitude: -17.7999936998 },
  { latitude: -17.8004084001, longitude: -63.1857300999 },
  { longitude: -63.1856962001, latitude: -17.8004873002 },
  { latitude: -17.8005533002, longitude: -63.1856528004 },
  { longitude: -63.1856025003, latitude: -17.8006001001 },
  { longitude: -63.1855355001, latitude: -17.8006359003 },
  { longitude: -63.1854258999, latitude: -17.8006789999 },
  { longitude: -63.1846580001, latitude: -17.8004582 },
  { longitude: -63.1841434004, latitude: -17.8003142 },
  { latitude: -17.8002554999, longitude: -63.1839256996 },
  { latitude: -17.8001817996, longitude: -63.1836752996 },
  { longitude: -63.1825192001, latitude: -17.7998555997 },
  { longitude: -63.1817365998, latitude: -17.7996400996 },
  { longitude: -63.1816380998, latitude: -17.7996156001 },
  { longitude: -63.1808677997, latitude: -17.7994224001 },
  { longitude: -63.1807508998, latitude: -17.7994196003 },
  { longitude: -63.1806013999, latitude: -17.7993603996 },
  { latitude: -17.7992933002, longitude: -63.1803819002 },
  { latitude: -17.7992651996, longitude: -63.1802561999 },
  { longitude: -63.1801034004, latitude: -17.7992226004 },
  { longitude: -63.1796137997, latitude: -17.7990900004 },
  { longitude: -63.1794960001, latitude: -17.7990581998 },
  { latitude: -17.7988013004, longitude: -63.1785473004 },
  { longitude: -63.1765370004, latitude: -17.7982571002 },
  { latitude: -17.7982150002, longitude: -63.1763815998 },
  { longitude: -63.1757866002, latitude: -17.7980539004 },
  { longitude: -63.1754945, latitude: -17.7980131997 },
  { latitude: -17.7979908998, longitude: -63.1753636996 },
  { latitude: -17.7979548998, longitude: -63.1753469004 },
  { longitude: -63.1753310997, latitude: -17.7979210004 },
  { latitude: -17.7978656, longitude: -63.1752754999 },
  { longitude: -63.1752086998, latitude: -17.7978329999 },
  { longitude: -63.1751345, latitude: -17.7978221999 },
  { latitude: -17.7978343003, longitude: -63.1750606 },
  { longitude: -63.1749943997, latitude: -17.7978681004 },
  { latitude: -17.7978929999, longitude: -63.1749698002 },
  { longitude: -63.1749429996, latitude: -17.7979201004 },
  { latitude: -17.7979323001, longitude: -63.1747123999 },
  { longitude: -63.1745105001, latitude: -17.7979290997 },
  { latitude: -17.7979259996, longitude: -63.1743814999 },
  { latitude: -17.7979552996, longitude: -63.1741796997 },
  { longitude: -63.1728472004, latitude: -17.7981791004 },
  { latitude: -17.7984601004, longitude: -63.1711741002 },
  { latitude: -17.7986316999, longitude: -63.1701992001 },
  { longitude: -63.1699779002, latitude: -17.7986573998 },
  { latitude: -17.7986517996, longitude: -63.1697891996 },
  { latitude: -17.7986483003, longitude: -63.1695352996 },
  { longitude: -63.1694559002, latitude: -17.7986378 },
  { longitude: -63.1694023996, latitude: -17.7986115 },
  { longitude: -63.1693250003, latitude: -17.7985978 },
  { latitude: -17.7985559002, longitude: -63.1691186004 },
  { latitude: -17.7984659003, longitude: -63.1688106 },
  { longitude: -63.1685584, latitude: -17.7983834001 },
  { longitude: -63.1685031004, latitude: -17.7983652996 },
  { longitude: -63.1682954999, latitude: -17.7982912002 },
  { longitude: -63.1681353, latitude: -17.7982135003 },
  { longitude: -63.1679256002, latitude: -17.7980847004 },
  { longitude: -63.1676692999, latitude: -17.7978843999 },
  { latitude: -17.7977064002, longitude: -63.1674726004 },
  { latitude: -17.7974518996, longitude: -63.1672640998 },
  { longitude: -63.1670511999, latitude: -17.7971546002 },
  { latitude: -17.7968849, longitude: -63.1669035997 },
  { longitude: -63.1667783, latitude: -17.7965728999 },
  { longitude: -63.1667123998, latitude: -17.7963376002 },
  { longitude: -63.1666304003, latitude: -17.7958961004 },
  { latitude: -17.7958024998, longitude: -63.1666146998 },
  { longitude: -63.1665614997, latitude: -17.7954773003 },
  { longitude: -63.1665252996, latitude: -17.7952630998 },
  { latitude: -17.7949559999, longitude: -63.1664715996 },
  { longitude: -63.1663575996, latitude: -17.7948169997 },
  { latitude: -17.794763, longitude: -63.1662173002 },
  { longitude: -63.1660514996, latitude: -17.7947727996 },
  { latitude: -17.7948052004, longitude: -63.1655069003 },
  { latitude: -17.7939726999, longitude: -63.1653849002 },
  { latitude: -17.7930763997, longitude: -63.1652427002 },
  { latitude: -17.7927592003, longitude: -63.1651869001 },
  { longitude: -63.1650452002, latitude: -17.7919211997 },
  { longitude: -63.1650407004, latitude: -17.7918533004 },
  { latitude: -17.791133, longitude: -63.1648068004 },
  { longitude: -63.1645849997, latitude: -17.7905235998 },
  { longitude: -63.1645643004, latitude: -17.7904591001 },
  { latitude: -17.7906077998, longitude: -63.1640349001 },
  { latitude: -17.7907343003, longitude: -63.1635847997 },
  { longitude: -63.1629996998, latitude: -17.7888878 },
  { latitude: -17.7881534998, longitude: -63.1627544999 },
  { latitude: -17.7880982998, longitude: -63.1627403003 },
  { longitude: -63.1627448002, latitude: -17.7880444998 },
  { longitude: -63.1627924996, latitude: -17.7879465997 },
  { longitude: -63.1628271999, latitude: -17.7878721001 },
  { latitude: -17.7877729999, longitude: -63.16283 },
  { latitude: -17.7876963997, longitude: -63.1628093001 },
  { longitude: -63.1627618999, latitude: -17.7875745002 },
  { latitude: -17.7875722998, longitude: -63.1626209002 },
  { longitude: -63.1624981001, latitude: -17.7875957002 },
  { longitude: -63.1623664004, latitude: -17.7876529004 },
  { latitude: -17.7877249002, longitude: -63.1622570002 },
  { latitude: -17.7877969997, longitude: -63.1621505004 },
  { longitude: -63.1620434, latitude: -17.7878906997 },
  { longitude: -63.1619807003, latitude: -17.7879610997 },
  { longitude: -63.1619661002, latitude: -17.7880014999 },
  { longitude: -63.1619605999, latitude: -17.7880571998 },
  { latitude: -17.7881759002, longitude: -63.1619529004 },
  { longitude: -63.1619647003, latitude: -17.7882581996 },
  { latitude: -17.7889835999, longitude: -63.1621471 },
  { longitude: -63.1623922997, latitude: -17.7899008001 },
  { longitude: -63.1625278002, latitude: -17.7903916999 },
  { longitude: -63.1626462997, latitude: -17.7908829997 },
  { latitude: -17.7911249999, longitude: -63.1626986997 },
  { longitude: -63.1627546998, latitude: -17.7914382003 },
  { longitude: -63.1627873998, latitude: -17.7917408004 },
  { latitude: -17.7921341996, longitude: -63.1627887998 },
  { latitude: -17.7925337998, longitude: -63.1627471999 },
  { latitude: -17.7928137996, longitude: -63.1626903997 },
  { latitude: -17.7931862996, longitude: -63.1626053001 },
  { latitude: -17.7935478998, longitude: -63.1625049005 },
  { longitude: -63.1623476, latitude: -17.7939846 },
  { latitude: -17.7940749, longitude: -63.1622978001 },
  { latitude: -17.7942282996, longitude: -63.1621928003 },
  { longitude: -63.1620258001, latitude: -17.7943879999 },
  { latitude: -17.7944354998, longitude: -63.1619722004 },
  { longitude: -63.1618928998, latitude: -17.7944494002 },
  { latitude: -17.7944836998, longitude: -63.1617529004 },
  { latitude: -17.7945001001, longitude: -63.1615784998 },
  { longitude: -63.1608584999, latitude: -17.7945745999 },
  { latitude: -17.7946192, longitude: -63.1605536 },
  { latitude: -17.7946420003, longitude: -63.1603784 },
  { longitude: -63.1594232004, latitude: -17.7947870997 },
  { longitude: -63.1591860002, latitude: -17.7948180003 },
  { longitude: -63.1591369998, latitude: -17.7948243999 },
  { longitude: -63.1588491999, latitude: -17.7948724996 },
  { longitude: -63.1581963004, latitude: -17.7950444999 },
  { longitude: -63.1576489997, latitude: -17.7952527996 },
  { longitude: -63.1573199004, latitude: -17.7953841 },
  { latitude: -17.7953645, longitude: -63.1572403998 },
  { latitude: -17.7953676002, longitude: -63.1571582999 },
  { longitude: -63.1570806996, latitude: -17.7953933002 },
  { latitude: -17.7954518998, longitude: -63.1570016996 },
  { longitude: -63.1569493997, latitude: -17.7955331996 },
  { latitude: -17.7956266996, longitude: -63.1569304002 },
  { latitude: -17.7960101996, longitude: -63.1559388997 },
  { longitude: -63.1553318002, latitude: -17.7962520003 },
  { latitude: -17.7964625004, longitude: -63.1548232004 },
  { latitude: -17.7966988999, longitude: -63.1542388004 },
  { latitude: -17.7970028997, longitude: -63.1535116004 },
  { longitude: -63.1529791995, latitude: -17.7972115996 },
  { longitude: -63.1527842001, latitude: -17.7972849997 },
  { longitude: -63.1520788999, latitude: -17.7975914999 },
  { latitude: -17.7981467001, longitude: -63.1506979996 },
  { longitude: -63.1505517995, latitude: -17.7981570997 },
  { longitude: -63.1503055997, latitude: -17.7981364997 },
  { longitude: -63.1502235997, latitude: -17.7980939004 },
  { latitude: -17.7980533003, longitude: -63.1500664997 },
  { latitude: -17.7980582996, longitude: -63.1499038 },
  { longitude: -63.1497497998, latitude: -17.7981084997 },
  { latitude: -17.7981995996, longitude: -63.1496179995 },
  { latitude: -17.7982984, longitude: -63.1495353004 },
  { longitude: -63.1494799, latitude: -17.7984131998 },
  { longitude: -63.1492991999, latitude: -17.7985474998 },
  { latitude: -17.7986158, longitude: -63.1491459001 },
  { longitude: -63.1486194001, latitude: -17.7987599998 },
  { longitude: -63.1471766001, latitude: -17.7991224002 },
  { latitude: -17.7996453003, longitude: -63.1451024001 },
  { longitude: -63.1444742996, latitude: -17.7998092002 },
  { longitude: -63.1443973996, latitude: -17.7998292996 },
  { latitude: -17.7998451004, longitude: -63.1443274002 },
  { latitude: -17.7999852003, longitude: -63.1437069004 },
  { longitude: -63.1427095, latitude: -17.8002570999 },
  { longitude: -63.1423032995, latitude: -17.8003391996 },
  { longitude: -63.1419284003, latitude: -17.8004353998 },
  { longitude: -63.1417119997, latitude: -17.8004961004 },
  { latitude: -17.8005443999, longitude: -63.1415286998 },
  { latitude: -17.8007336001, longitude: -63.1408511001 },
  { latitude: -17.8009652996, longitude: -63.1398118003 },
  { longitude: -63.1385368002, latitude: -17.8011010999 },
  { longitude: -63.1385254, latitude: -17.8011023002 },
  { latitude: -17.8011380997, longitude: -63.1380823997 },
  { longitude: -63.1373350999, latitude: -17.8012033996 },
  { longitude: -63.1359848001, latitude: -17.8013213998 },
  { latitude: -17.8013534998, longitude: -63.1356168 },
  { longitude: -63.1353978004, latitude: -17.8013766001 },
  { latitude: -17.8013844002, longitude: -63.1352912001 },
  { latitude: -17.8009440002, longitude: -63.1352542003 },
  { latitude: -17.8007105997, longitude: -63.1352248004 },
  { latitude: -17.8000509998, longitude: -63.1351703999 },
  { longitude: -63.1351129999, latitude: -17.7994173 },
  { latitude: -17.7987817997, longitude: -63.1350722999 },
  { longitude: -63.1350215003, latitude: -17.7981611996 },
  { longitude: -63.1349786003, latitude: -17.7977374999 },
  { longitude: -63.1349663, latitude: -17.7975276002 },
  { longitude: -63.1348926, latitude: -17.7968927001 },
  { latitude: -17.7962737996, longitude: -63.1348449996 },
  { latitude: -17.7956133, longitude: -63.1347709002 },
  { latitude: -17.7949897001, longitude: -63.1347154997 },
  { longitude: -63.1353445003, latitude: -17.7949335997 },
  { latitude: -17.7943071998, longitude: -63.1352810004 },
  { longitude: -63.1352153998, latitude: -17.7936796996 },
  { latitude: -17.7937365002, longitude: -63.1345953998 },
  { latitude: -17.7930949997, longitude: -63.1345227998 },
  { longitude: -63.1344668997, latitude: -17.7924721998 },
  { longitude: -63.1343975, latitude: -17.7918328998 },
  { longitude: -63.1343918998, latitude: -17.7917769 },
  { longitude: -63.1343867001, latitude: -17.7917239 },
  { longitude: -63.1343818997, latitude: -17.7916711998 },
  { longitude: -63.1339914997, latitude: -17.7917052003 },
  { latitude: -17.7918013997, longitude: -63.1329812003 },
  { latitude: -17.7919281002, longitude: -63.1316403002 },
  { longitude: -63.1301128002, latitude: -17.7920391004 },
  { longitude: -63.1285456998, latitude: -17.7921394996 },
  { latitude: -17.7922172003, longitude: -63.1270654003 },
  { latitude: -17.7921262996, longitude: -63.1269316997 },
  { latitude: -17.7921222004, longitude: -63.1267994003 },
  { latitude: -17.7921559998, longitude: -63.1267118995 },
  { latitude: -17.7921843001, longitude: -63.1266703999 },
  { longitude: -63.1266007001, latitude: -17.7922243004 },
  { longitude: -63.1265170997, latitude: -17.7923035001 },
  { latitude: -17.7923638002, longitude: -63.1264801995 },
  { latitude: -17.7924351003, longitude: -63.1264659997 },
  { longitude: -63.1264659, latitude: -17.7925306 },
  { latitude: -17.7925826997, longitude: -63.1264981004 },
  { latitude: -17.7926207998, longitude: -63.1265628 },
  { longitude: -63.1266654998, latitude: -17.7927203004 },
  { latitude: -17.7928299, longitude: -63.1267291998 },
  { longitude: -63.1267327997, latitude: -17.7931553998 },
  { longitude: -63.1268063003, latitude: -17.7939131997 },
  { latitude: -17.7951593996, longitude: -63.1269501003 },
  { latitude: -17.7957983002, longitude: -63.1270178998 },
  { longitude: -63.1270883998, latitude: -17.7964418999 },
  { latitude: -17.7968245998, longitude: -63.1271395003 },
  { longitude: -63.1271668999, latitude: -17.7970750998 },
  { latitude: -17.7970684, longitude: -63.1271130998 },
  { longitude: -63.1269875997, latitude: -17.7970829002 },
  { longitude: -63.1271445004, latitude: -17.7986279999 },
  { latitude: -17.7993374003, longitude: -63.1272160998 },
  { latitude: -17.7998119002, longitude: -63.1272640999 },
  { longitude: -63.1273466999, latitude: -17.8005035004 },
  { latitude: -17.8010472, longitude: -63.1273993997 },
  { latitude: -17.8012655999, longitude: -63.1274179005 },
  { latitude: -17.8017551999, longitude: -63.1274977003 },
  { latitude: -17.8018256999, longitude: -63.1274947998 },
  { longitude: -63.1274692002, latitude: -17.8019869996 },
  { longitude: -63.1273903997, latitude: -17.80212 },
  { latitude: -17.802168, longitude: -63.1273719002 },
  { longitude: -63.1273664999, latitude: -17.8022129001 },
  { latitude: -17.8022465996, longitude: -63.1273706 },
  { latitude: -17.8023115003, longitude: -63.1273784003 },
  { longitude: -63.1273975998, latitude: -17.8023376 },
  { latitude: -17.8023981004, longitude: -63.1274475002 },
  { longitude: -63.1275233001, latitude: -17.8024548997 },
  { latitude: -17.8026299999, longitude: -63.1275738 },
  { latitude: -17.8038588996, longitude: -63.1277438999 },
  { latitude: -17.8042180997, longitude: -63.1277842002 },
  { longitude: -63.1279219, latitude: -17.8058928997 },
  { longitude: -63.1279232001, latitude: -17.8059972003 },
  { latitude: -17.8075826996, longitude: -63.1280604002 },
  { longitude: -63.1280680996, latitude: -17.8076547998 },
  { latitude: -17.8077251998, longitude: -63.1280564001 },
  { longitude: -63.1280024003, latitude: -17.8078147003 },
  { longitude: -63.1279240996, latitude: -17.8079025002 },
  { latitude: -17.8079409997, longitude: -63.1279245998 },
  { latitude: -17.8079559, longitude: -63.1280008997 },
  { latitude: -17.8079840002, longitude: -63.1280692998 },
  { latitude: -17.8080282997, longitude: -63.1281226997 },
  { longitude: -63.1281449997, latitude: -17.808073 },
  { longitude: -63.1282633996, latitude: -17.8095336003 },
  { longitude: -63.1283092996, latitude: -17.8100997 },
  { latitude: -17.8101240002, longitude: -63.1283114996 },
  { latitude: -17.8109109996, longitude: -63.1283590998 },
  { longitude: -63.1284765996, latitude: -17.8120884001 },
  { longitude: -63.1285010997, latitude: -17.8123424998 },
  { longitude: -63.1285048003, latitude: -17.8123988 },
  { longitude: -63.128472, latitude: -17.8124148003 },
  { latitude: -17.8124500999, longitude: -63.1284302 },
  { latitude: -17.8124940997, longitude: -63.1283988003 },
  { longitude: -63.1283764997, latitude: -17.8125601997 },
  { longitude: -63.1283775997, latitude: -17.8126297 },
  { longitude: -63.1284019996, latitude: -17.8126950996 },
  { longitude: -63.1284470998, latitude: -17.8127497999 },
  { latitude: -17.8127796001, longitude: -63.1284907998 },
  { longitude: -63.1285406002, latitude: -17.8127986998 },
  { longitude: -63.1285925002, latitude: -17.8128059997 },
  { longitude: -63.1286447996, latitude: -17.8128016999 },
  { latitude: -17.8127860002, longitude: -63.1286945997 },
  { latitude: -17.8127517, longitude: -63.1287491998 },
  { latitude: -17.812704, longitude: -63.1287911003 },
  { latitude: -17.8126785003, longitude: -63.1289151001 },
  { longitude: -63.1291554997, latitude: -17.8126472997 },
  { longitude: -63.1304206997, latitude: -17.8125576004 },
  { latitude: -17.8124660001, longitude: -63.1318926 },
  { latitude: -17.8124214002, longitude: -63.1325685996 },
  { longitude: -63.1343804997, latitude: -17.8123017001 },
  { latitude: -17.8121717998, longitude: -63.1364120002 },
  { latitude: -17.8122372997, longitude: -63.1364672001 },
  { latitude: -17.8124136999, longitude: -63.1365072997 },
  { longitude: -63.1365547003, latitude: -17.8128282997 },
  { longitude: -63.1366167002, latitude: -17.8133930996 },
  { longitude: -63.1367432998, latitude: -17.8139579003 },
  { longitude: -63.1369412997, latitude: -17.8143820001 },
  { latitude: -17.8145865004, longitude: -63.1370337001 },
  { longitude: -63.1371580998, latitude: -17.8147791003 },
  { latitude: -17.8149199, longitude: -63.1372692002 },
  { longitude: -63.1376107999, latitude: -17.8153560996 },
  { longitude: -63.1392206003, latitude: -17.8168525001 },
  { longitude: -63.1398095, latitude: -17.8173956002 },
  { longitude: -63.1389104996, latitude: -17.8182491997 },
  { longitude: -63.1387036996, latitude: -17.8184485 },
  { latitude: -17.8187996002, longitude: -63.1383320996 },
  { longitude: -63.1380441004, latitude: -17.8190594004 },
  { longitude: -63.1377816999, latitude: -17.8193055002 },
  { latitude: -17.8195398003, longitude: -63.1375502003 },
  { longitude: -63.1363185995, latitude: -17.8206948004 },
  { longitude: -63.1359203996, latitude: -17.8210810003 },
  { latitude: -17.8211583003, longitude: -63.1358407001 },
  { latitude: -17.8212946, longitude: -63.1357050004 },
  { longitude: -63.1350329996, latitude: -17.8219295004 },
  { latitude: -17.8222884999, longitude: -63.1346232996 },
  { latitude: -17.8229180002, longitude: -63.1340043996 },
  { longitude: -63.1335185003, latitude: -17.8233884001 },
  { longitude: -63.1329887999, latitude: -17.823866 },
  { latitude: -17.8243925996, longitude: -63.1324270002 },
  { latitude: -17.8244034997, longitude: -63.1324118998 },
  { latitude: -17.8249852998, longitude: -63.1318198995 },
  { latitude: -17.8249398002, longitude: -63.1317289999 },
  { latitude: -17.8249250002, longitude: -63.1316281999 },
  { longitude: -63.1315656005, latitude: -17.8249563003 },
  { longitude: -63.1315318003, latitude: -17.824995 },
  { latitude: -17.825047, longitude: -63.1315118001 },
  { longitude: -63.1315075997, latitude: -17.8251086998 },
  { latitude: -17.8251786998, longitude: -63.1315302997 },
  { latitude: -17.8252466997, longitude: -63.1315970999 },
  { latitude: -17.8252682, longitude: -63.1316618002 },
  { longitude: -63.1317402004, latitude: -17.8252812001 },
  { longitude: -63.1329842999, latitude: -17.8258984004 },
  { longitude: -63.1331453001, latitude: -17.8259756998 },
  { longitude: -63.1336360996, latitude: -17.8262156996 },
  { latitude: -17.8268246996, longitude: -63.1347699004 },
  { latitude: -17.8270374003, longitude: -63.1352068002 },
  { latitude: -17.8271331004, longitude: -63.1354035005 },
  { latitude: -17.8279723999, longitude: -63.1370229004 },
 { longitude: -63.1372063998, latitude: -17.8280675001 }, 
        
        //fin  de vuelta de linea 8//
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

export default Poli_8v