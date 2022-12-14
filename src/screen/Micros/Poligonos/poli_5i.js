import { StyleSheet } from 'react-native'
import React,{useState} from 'react'
import  {  Polyline } from "react-native-maps";

const Poli_5i = ({onPress = () => {}}) => {

    const [coordinates] = useState([
        //inicio  de ida de linea 5//
        { latitude: -17.7269919003, longitude: -63.1385394003 },
        { latitude: -17.7267964001, longitude: -63.1384128004 },
        { latitude: -17.7263757003, longitude: -63.1390920996 },
        { latitude: -17.7260199003, longitude: -63.1396667001 },
        { latitude: -17.7256377, longitude: -63.1402837997 },
        { latitude: -17.7253100003, longitude: -63.1408129001 },
        { longitude: -63.1398402001, latitude: -17.7238274996 },
        { longitude: -63.1392783997, latitude: -17.7242085004 },
        { longitude: -63.1390216002, latitude: -17.7238354999 },
        { longitude: -63.1386548, latitude: -17.7232991004 },
        { latitude: -17.7226240997, longitude: -63.1385244002 },
        { longitude: -63.1383746997, latitude: -17.7219476997 },
        { latitude: -17.7214778002, longitude: -63.1383079001 },
        { longitude: -63.1388055005, latitude: -17.7211134998 },
        { latitude: -17.7218268996, longitude: -63.1392954002 },
        { longitude: -63.1402675996, latitude: -17.7232835002 },
        { longitude: -63.1407539, latitude: -17.7227535999 },
        { longitude: -63.1412368997, latitude: -17.7222132997 },
        { latitude: -17.7215538003, longitude: -63.1415690998 },
        { latitude: -17.7210818004, longitude: -63.1418244004 },
        { latitude: -17.7211199997, longitude: -63.1421144 },
        { latitude: -17.7212681001, longitude: -63.1430503999 },
        { longitude: -63.1436853, latitude: -17.7213600004 },
        { latitude: -17.7215205996, longitude: -63.1438740001 },
        { latitude: -17.7227034996, longitude: -63.1446764998 },
        { latitude: -17.7228062, longitude: -63.1447331998 },
        { latitude: -17.7228479003, longitude: -63.1447203997 },
        { latitude: -17.7228912, longitude: -63.1447170004 },
        { latitude: -17.7229568004, longitude: -63.1447305996 },
        { latitude: -17.7230147998, longitude: -63.1447653996 },
        { longitude: -63.1448177003, latitude: -17.7230591999 },
        { longitude: -63.1447362002, latitude: -17.7231050998 },
        { latitude: -17.7234152, longitude: -63.1442102996 },
        { latitude: -17.7236876003, longitude: -63.1438177997 },
        { longitude: -63.1436799, latitude: -17.7237844 },
        { latitude: -17.7243726, longitude: -63.1440675004 },
        { longitude: -63.1444643001, latitude: -17.7249289004 },
        { longitude: -63.1448192001, latitude: -17.7255168996 },
        { longitude: -63.1429876002, latitude: -17.7266442003 },
        { latitude: -17.7271988999, longitude: -63.1433625998 },
        { longitude: -63.1439860002, latitude: -17.7281485996 },
        { latitude: -17.7291257999, longitude: -63.1446239995 },
        { latitude: -17.7297902001, longitude: -63.1450613001 },
        { latitude: -17.7304422, longitude: -63.1454834999 },
        { latitude: -17.7310286999, longitude: -63.1458507001 },
        { latitude: -17.7315867997, longitude: -63.1462036004 },
        { latitude: -17.7321391998, longitude: -63.1465650004 },
        { latitude: -17.7327584996, longitude: -63.1469430999 },
        { latitude: -17.7328215001, longitude: -63.1469845996 },
        { latitude: -17.7328809, longitude: -63.1470206003 },
        { longitude: -63.1470883003, latitude: -17.7329887996 },
        { latitude: -17.7327636004, longitude: -63.1474612004 },
        { longitude: -63.1478836004, latitude: -17.7334001997 },
        { longitude: -63.1482629001, latitude: -17.7339859002 },
        { latitude: -17.7340471998, longitude: -63.1483098 },
        { longitude: -63.1487391996, latitude: -17.7347941997 },
        { longitude: -63.1491667002, latitude: -17.7354772999 },
        { latitude: -17.7357436001, longitude: -63.1494648998 },
        { latitude: -17.7374421001, longitude: -63.1506164003 },
        { latitude: -17.7377867002, longitude: -63.1500453001 },
        { longitude: -63.1504746999, latitude: -17.7384185003 },
        { latitude: -17.7391005, longitude: -63.1509372997 },
        { latitude: -17.7391683996, longitude: -63.1509764001 },
        { longitude: -63.1510421004, latitude: -17.7392706002 },
        { latitude: -17.7393302004, longitude: -63.1510788 },
        { latitude: -17.7395394002, longitude: -63.1507319998 },
        { latitude: -17.7401618004, longitude: -63.1497 },
        { latitude: -17.7411202997, longitude: -63.1481109004 },
        { latitude: -17.7411475, longitude: -63.1480659004 },
        { longitude: -63.1480187999, latitude: -17.7411759003 },
        { latitude: -17.7418099004, longitude: -63.1484646001 },
        { longitude: -63.1488778003, latitude: -17.7423886 },
        { longitude: -63.1495919, latitude: -17.7434891997 },
        { longitude: -63.1501334998, latitude: -17.7443240002 },
        { latitude: -17.7445166003, longitude: -63.1502584 },
        { longitude: -63.1506183002, latitude: -17.7450712998 },
        { longitude: -63.1510404995, latitude: -17.7457220001 },
        { latitude: -17.7475111999, longitude: -63.1522013002 },
        { latitude: -17.7475527004, longitude: -63.1522764 },
        { longitude: -63.1523290002, latitude: -17.7475748002 },
        { latitude: -17.7475886998, longitude: -63.1523888002 },
        { latitude: -17.7475901004, longitude: -63.1524556001 },
        { longitude: -63.1525007002, latitude: -17.7475932 },
        { longitude: -63.1525347998, latitude: -17.7476108002 },
        { longitude: -63.1525727004, latitude: -17.7476380002 },
        { longitude: -63.1526230161, latitude: -17.7477035831 },
        { latitude: -17.7477341075, longitude: -63.1526378855 },
        { latitude: -17.7477495998, longitude: -63.1526440998 },
        { latitude: -17.7477854002, longitude: -63.1526496003 },
        { longitude: -63.1526470003, latitude: -17.7478072997 },
        { longitude: -63.1527982, latitude: -17.7480180004 },
        { longitude: -63.1538753, latitude: -17.7495472 },
        { latitude: -17.7499857056, longitude: -63.1541739132 },
        { latitude: -17.7502365004, longitude: -63.1543446999 },
        { latitude: -17.7503381998, longitude: -63.1544138997 },
        { latitude: -17.750596733, longitude: -63.154589947 },
        { latitude: -17.7512072147, longitude: -63.1550033183 },
        { latitude: -17.7517071726, longitude: -63.1553487393 },
        { longitude: -63.1557786431, latitude: -17.752333537 },
        { latitude: -17.7529320001, longitude: -63.1561894 },
        { longitude: -63.1565969998, latitude: -17.7535134004 },
        { longitude: -63.1569651001, latitude: -17.7540453003 },
        { longitude: -63.1573479998, latitude: -17.7545829996 },
        { longitude: -63.1581101997, latitude: -17.7541233997 },
        { latitude: -17.7543677004, longitude: -63.1582795997 },
        { latitude: -17.7548843998, longitude: -63.1574874996 },
        { latitude: -17.7549343001, longitude: -63.1574136999 },
        { latitude: -17.7552459, longitude: -63.1569791996 },
        { latitude: -17.7557158999, longitude: -63.1563704002 },
        { latitude: -17.7563034004, longitude: -63.1556542002 },
        { longitude: -63.1555442, latitude: -17.7565410003 },
        { longitude: -63.1555093998, latitude: -17.7566482999 },
        { latitude: -17.7567581002, longitude: -63.1554933005 },
        { latitude: -17.7568422998, longitude: -63.1554931996 },
        { latitude: -17.7568812997, longitude: -63.1554999998 },
        { latitude: -17.7569700999, longitude: -63.1555227996 },
        { latitude: -17.7571412998, longitude: -63.1555550001 },
        { latitude: -17.7573022002, longitude: -63.1556380999 },
        { latitude: -17.7575065998, longitude: -63.1557668996 },
        { longitude: -63.1560863002, latitude: -17.7579722002 },
        { longitude: -63.1564381004, latitude: -17.7584842998 },
        { latitude: -17.7589812, longitude: -63.1567715998 },
        { longitude: -63.1571538997, latitude: -17.7595594002 },
        { latitude: -17.7598984996, longitude: -63.1573867002 },
        { longitude: -63.1574710998, latitude: -17.7600213998 },
        { latitude: -17.7603327999, longitude: -63.1576840999 },
        { longitude: -63.1578236996, latitude: -17.7605391001 },
        { latitude: -17.7611174, longitude: -63.1582252998 },
        { latitude: -17.7616614003, longitude: -63.1585944001 },
        { latitude: -17.7622176002, longitude: -63.1589727999 },
        { longitude: -63.1592710996, latitude: -17.7626539996 },
        { longitude: -63.1593603002, latitude: -17.7627859998 },
        { longitude: -63.1596396997, latitude: -17.7631981004 },
        { latitude: -17.7632989998, longitude: -63.1597408002 },
        { longitude: -63.1598187999, latitude: -17.7632886003 },
        { longitude: -63.1598966999, latitude: -17.7632998001 },
        { latitude: -17.7633316002, longitude: -63.1599680004 },
        { latitude: -17.7633814004, longitude: -63.1600268005 },
        { latitude: -17.7634494996, longitude: -63.1600703003 },
        { longitude: -63.1600900996, latitude: -17.7635267998 },
        { latitude: -17.7636062999, longitude: -63.1600845997 },
        { latitude: -17.7636803998, longitude: -63.1600540995 },
        { latitude: -17.7640627996, longitude: -63.1603776999 },
        { latitude: -17.7643344003, longitude: -63.1606479002 },
        { latitude: -17.764435, longitude: -63.1607699002 },
        { latitude: -17.7644192998, longitude: -63.1608654998 },
        { latitude: -17.7644359, longitude: -63.1609608 },
        { latitude: -17.7644572004, longitude: -63.1609988002 },
        { latitude: -17.7644827998, longitude: -63.1610444003 },
        { latitude: -17.7645546999, longitude: -63.1611062 },
        { latitude: -17.7645851002, longitude: -63.1611171996 },
        { longitude: -63.1611380005, latitude: -17.7646425004 },
        { longitude: -63.1611358998, latitude: -17.7647353996 },
        { latitude: -17.7649110998, longitude: -63.1611933002 },
        { latitude: -17.7650083003, longitude: -63.1612585 },
        { latitude: -17.7656219003, longitude: -63.1618056003 },
        { longitude: -63.1624952, latitude: -17.7663771004 },
        { latitude: -17.7664058998, longitude: -63.1625215002 },
        { latitude: -17.7669146996, longitude: -63.1629919999 },
        { latitude: -17.7670255, longitude: -63.1630976001 },
        { latitude: -17.7671061003, longitude: -63.1631744997 },
        { latitude: -17.7673863996, longitude: -63.1634468998 },
        { latitude: -17.7678987002, longitude: -63.1639415002 },
        { latitude: -17.768153, longitude: -63.1642095996 },
        { longitude: -63.164468, latitude: -17.7683857996 },
        { longitude: -63.1650136001, latitude: -17.7688576999 },
        { longitude: -63.1653821, latitude: -17.7691696996 },
        { longitude: -63.1654174002, latitude: -17.7691996 },
        { longitude: -63.1654805996, latitude: -17.7692532002 },
        { latitude: -17.7693049997, longitude: -63.1655418002 },
        { latitude: -17.7695814996, longitude: -63.1658640002 },
        { latitude: -17.7697305996, longitude: -63.1660377997 },
        { longitude: -63.1667833998, latitude: -17.7703651 },
        { latitude: -17.7704186999, longitude: -63.1668464 },
        { latitude: -17.7710310002, longitude: -63.1675722 },
        { longitude: -63.1676574997, latitude: -17.7711044996 },
        { latitude: -17.7712132998, longitude: -63.1678065002 },
        { longitude: -63.1679453999, latitude: -17.7712576003 },
        { latitude: -17.7712766997, longitude: -63.1680714005 },
        { latitude: -17.7712624999, longitude: -63.1682270996 },
        { latitude: -17.7712056001, longitude: -63.1684716003 },
        { latitude: -17.7711491997, longitude: -63.1685692996 },
        { latitude: -17.7709707996, longitude: -63.1688842001 },
        { longitude: -63.1691148997, latitude: -17.7708481997 },
        { longitude: -63.1694530995, latitude: -17.7706971002 },
        { latitude: -17.7705125002, longitude: -63.1699666998 },
        { longitude: -63.1705188998, latitude: -17.7703691998 },
        { latitude: -17.7702644004, longitude: -63.1709210996 },
        { longitude: -63.1709876998, latitude: -17.7702491996 },
        { longitude: -63.1710953999, latitude: -17.7702306998 },
        { longitude: -63.1711146185, latitude: -17.7702510791 },
        { longitude: -63.1712046997, latitude: -17.7703466004 },
        { latitude: -17.7704124, longitude: -63.1712722996 },
        { latitude: -17.7706071996, longitude: -63.1715135996 },
        { latitude: -17.7707720998, longitude: -63.1717359996 },
        { longitude: -63.1722687999, latitude: -17.7713548997 },
        { longitude: -63.1725196001, latitude: -17.7715996003 },
        { longitude: -63.1727726997, latitude: -17.7718782004 },
        { longitude: -63.1731924995, latitude: -17.7723186999 },
        { longitude: -63.1733116001, latitude: -17.7724531003 },
        { longitude: -63.1738610999, latitude: -17.7730401997 },
        { latitude: -17.7733620997, longitude: -63.1741727998 },
        { longitude: -63.1742412997, latitude: -17.7734323002 },
        { latitude: -17.7735446002, longitude: -63.1743510999 },
        { longitude: -63.1744798999, latitude: -17.7736754001 },
        { latitude: -17.7737584996, longitude: -63.1745617997 },
        { latitude: -17.7738990998, longitude: -63.1747306002 },
        { longitude: -63.1748710996, latitude: -17.7740120002 },
        { latitude: -17.7742821, longitude: -63.1752008003 },
        { longitude: -63.1752301997, latitude: -17.7743019003 },
        { longitude: -63.1752649004, latitude: -17.7743238996 },
        { longitude: -63.1752907002, latitude: -17.7743374004 },
        { latitude: -17.7747487003, longitude: -63.1761226003 },
        { latitude: -17.7748330003, longitude: -63.1762999999 },
        { longitude: -63.1767958004, latitude: -17.7747088004 },
        { longitude: -63.1770613996, latitude: -17.7746506 },
        { longitude: -63.1774135998, latitude: -17.7745871001 },
        { latitude: -17.7745674997, longitude: -63.1775619002 },
        { latitude: -17.7745544996, longitude: -63.1776103001 },
        { longitude: -63.1776604003, latitude: -17.7745482996 },
        { latitude: -17.7745296, longitude: -63.1778299002 },
        { latitude: -17.7745129268, longitude: -63.1779923207 },
        { latitude: -17.7745044004, longitude: -63.1780779998 },
        { longitude: -63.178246, latitude: -17.7744918003 },
        { longitude: -63.1784133, latitude: -17.7744857998 },
        { longitude: -63.1788379001, latitude: -17.7744701 },
        { latitude: -17.7744670999, longitude: -63.1793867005 },
        { longitude: -63.1799443, latitude: -17.7744865996 },
        { latitude: -17.7744976999, longitude: -63.1801362999 },
        { longitude: -63.1807471996, latitude: -17.7745203001 },
        { longitude: -63.1808791998, latitude: -17.7745268001 },
        { longitude: -63.1811114002, latitude: -17.7745557999 },
        { latitude: -17.7746765998, longitude: -63.1817206003 },
        { latitude: -17.7747499996, longitude: -63.1821118001 },
        { longitude: -63.1822937996, latitude: -17.7747978996 },
        { latitude: -17.7750920998, longitude: -63.1832542998 },
        { longitude: -63.1833802999, latitude: -17.7751259 },
        { longitude: -63.1833645002, latitude: -17.7753098998 },
        { longitude: -63.1833570996, latitude: -17.7753929002 },
        { latitude: -17.7764421002, longitude: -63.1832630996 },
        { latitude: -17.7777376191, longitude: -63.1831470598 },
        { latitude: -17.7788008337, longitude: -63.1830518254 },
        { latitude: -17.7789976002, longitude: -63.1841694997 },
        { latitude: -17.7792172001, longitude: -63.1852492996 },
        { latitude: -17.7801374001, longitude: -63.1851700996 },
        { longitude: -63.1850765002, latitude: -17.7809582002 },
        { latitude: -17.7814521002, longitude: -63.1850278997 },
        { latitude: -17.7819405001, longitude: -63.1849877996 },
        { longitude: -63.1849463005, latitude: -17.7823100998 },
        { latitude: -17.7829510003, longitude: -63.1848728995 },
        { longitude: -63.1847854997, latitude: -17.7839652997 },
        { latitude: -17.7850279997, longitude: -63.1846695 },
        { latitude: -17.7851414001, longitude: -63.1846546001 },
        { latitude: -17.7860509997, longitude: -63.1845348998 },
        { latitude: -17.7873846998, longitude: -63.1843602997 },
        { latitude: -17.7874120002, longitude: -63.1844260004 },
        { longitude: -63.1853446998, latitude: -17.7875822 },
        { latitude: -17.7877363252, longitude: -63.1862170511 },
        { longitude: -63.1862594997, latitude: -17.7877443998 },
        { longitude: -63.1864403998, latitude: -17.7877946 },
        { longitude: -63.1866676001, latitude: -17.7878921001 },
        { longitude: -63.1872816996, latitude: -17.7881196998 },
        { latitude: -17.7886243002, longitude: -63.1877387997 },
        { longitude: -63.1879102001, latitude: -17.7887765 },
        { longitude: -63.1883108004, latitude: -17.7892120996 },
        { longitude: -63.1884972367, latitude: -17.7894588501 },
        { longitude: -63.1886671002, latitude: -17.7896914996 },
        { longitude: -63.1887308002, latitude: -17.7897627 },
        { latitude: -17.7900815999, longitude: -63.1889271996 },
        { longitude: -63.1894505002, latitude: -17.7908107996 },
        { latitude: -17.7913573001, longitude: -63.1898154999 },
        { longitude: -63.1900587001, latitude: -17.7916786002 },
        { longitude: -63.1907431001, latitude: -17.7925920997 },
        { latitude: -17.7919275997, longitude: -63.1913262997 },
        { latitude: -17.7912886996, longitude: -63.1919045999 },
        { longitude: -63.1920422996, latitude: -17.7911674999 },
        { longitude: -63.1920802002, latitude: -17.7911239997 },
        { latitude: -17.7910780998, longitude: -63.1920949001 },
        { latitude: -17.7904914003, longitude: -63.1921728 },
        { longitude: -63.1921981002, latitude: -17.7900664004 },
        { longitude: -63.1921401998, latitude: -17.7899231996 },
        { longitude: -63.1921033999, latitude: -17.7899114003 },
        { longitude: -63.1920790001, latitude: -17.7898965997 },
        { longitude: -63.1920582999, latitude: -17.7898774 },
        { longitude: -63.1920364004, latitude: -17.7898431997 },
        { longitude: -63.1920259001, latitude: -17.7898025996 },
        { longitude: -63.1920288002, latitude: -17.7897616998 },
        { latitude: -17.7897236004, longitude: -63.1920444999 },
        { latitude: -17.7896917004, longitude: -63.1920715 },
        { latitude: -17.7896692004, longitude: -63.1921070999 },
        { longitude: -63.1921481999, latitude: -17.7896578001 },
        { latitude: -17.7896582998, longitude: -63.1921889004 },
        { longitude: -63.1922278002, latitude: -17.7896699 },
        { latitude: -17.7896924927, longitude: -63.1922616009 },
        { longitude: -63.192281218, latitude: -17.7897143238 },
        { longitude: -63.1922990997, latitude: -17.7897447001 },
        { longitude: -63.1923059996, latitude: -17.7897693999 },
        { latitude: -17.7897829996, longitude: -63.1924413005 },
        { latitude: -17.7898504001, longitude: -63.1930855996 },
        { latitude: -17.7899982, longitude: -63.1941344998 },
        { longitude: -63.1943005002, latitude: -17.7900243996 },
        { latitude: -17.7900441003, longitude: -63.1944191004 },
        { latitude: -17.7900648999, longitude: -63.1945359997 },
        { latitude: -17.7900964003, longitude: -63.1947066999 },
        { latitude: -17.7901592996, longitude: -63.1949290997 },
        { latitude: -17.7903013998, longitude: -63.1952524003 },
        { longitude: -63.1964079998, latitude: -17.7908076 },
        { latitude: -17.7908263996, longitude: -63.1964515001 },
        { latitude: -17.7908656004, longitude: -63.1965419001 },
        { latitude: -17.7910399004, longitude: -63.1969605001 },
        { latitude: -17.7912103998, longitude: -63.1973600001 },
        { longitude: -63.1977770003, latitude: -17.7913904004 },
        { latitude: -17.7916819001, longitude: -63.1984524 },
        { longitude: -63.1991068997, latitude: -17.7919628 },
        { latitude: -17.7921948996, longitude: -63.1996466005 },
        { latitude: -17.7924127998, longitude: -63.2001534004 },
        { latitude: -17.7929128996, longitude: -63.2012912 },
        { longitude: -63.2016810997, latitude: -17.7930819999 },
        { longitude: -63.2018506004, latitude: -17.7931566997 },
        { latitude: -17.7937110003, longitude: -63.2031438002 },
        { longitude: -63.2037411999, latitude: -17.7939834003 },
        { longitude: -63.2041445999, latitude: -17.7941735997 },
        { latitude: -17.7942241996, longitude: -63.2042409 },
        { latitude: -17.7944232004, longitude: -63.2046101996 },
        { latitude: -17.7944575, longitude: -63.2046576001 },
        { longitude: -63.2050555004, latitude: -17.7947048004 },
        { longitude: -63.2052254002, latitude: -17.7947743999 },
        { longitude: -63.2053613001, latitude: -17.7948136004 },
        { latitude: -17.7947658002, longitude: -63.2054539001 },
        { latitude: -17.7947528996, longitude: -63.2055584002 },
        { longitude: -63.2056608002, latitude: -17.7947764999 },
        { latitude: -17.7948245003, longitude: -63.2057374 },
        { longitude: -63.2057943998, latitude: -17.7948930004 },
        { latitude: -17.7949749996, longitude: -63.2058259002 },
        { latitude: -17.7950490001, longitude: -63.2059616997 },
        { latitude: -17.7950925003, longitude: -63.2060637001 },
        { latitude: -17.7954769998, longitude: -63.2077737998 },
        { longitude: -63.2081974002, latitude: -17.7955713998 },
        { longitude: -63.2084181999, latitude: -17.7956156998 },
        { latitude: -17.7957693004, longitude: -63.2090756004 },
        { longitude: -63.2097331002, latitude: -17.7959173002 },
        { longitude: -63.2104229004, latitude: -17.7960662997 },
        { longitude: -63.2107906004, latitude: -17.7961555 },
        { longitude: -63.2110597995, latitude: -17.7962144997 },
        { longitude: -63.211726, latitude: -17.7963647999 },
        { longitude: -63.2119439002, latitude: -17.7964076004 },
        { longitude: -63.2124410996, latitude: -17.7965272002 },
        { longitude: -63.2131356999, latitude: -17.7966773997 },
        { latitude: -17.7967631997, longitude: -63.2134877997 },
        { longitude: -63.2137913, latitude: -17.7968291 },
        { latitude: -17.7969812996, longitude: -63.2144478 },
        { latitude: -17.7971111996, longitude: -63.2150095003 },
        { longitude: -63.2152501004, latitude: -17.7971362003 },
        { latitude: -17.7971199003, longitude: -63.2154360001 },
        { longitude: -63.2156799001, latitude: -17.7970728 },
        { latitude: -17.7969844, longitude: -63.2157830004 },
        { longitude: -63.2159069, latitude: -17.7969251001 },
        { latitude: -17.7968985997, longitude: -63.2160490003 },
        { longitude: -63.2161931997, latitude: -17.7969103002 },
        { longitude: -63.2163011, latitude: -17.7969492999 },
        { longitude: -63.2163286002, latitude: -17.7969592999 },
        { latitude: -17.7970417997, longitude: -63.2164445004 },
        { latitude: -17.7971515002, longitude: -63.2165321999 },
        { longitude: -63.2165847998, latitude: -17.7972799996 },
        { longitude: -63.2167235005, latitude: -17.7974941003 },
        { longitude: -63.2168959003, latitude: -17.7976895996 },
        { latitude: -17.7978501999, longitude: -63.2171434005 },
        { latitude: -17.7980477998, longitude: -63.2175189002 },
        { latitude: -17.7982109, longitude: -63.2178520002 },
        { longitude: -63.2184791002, latitude: -17.7985175001 },
        { latitude: -17.7989555001, longitude: -63.2193475004 },
        { latitude: -17.7991401004, longitude: -63.2197819996 },
        { longitude: -63.2199096001, latitude: -17.7991879999 },
        { longitude: -63.2200228003, latitude: -17.799226 },
        { longitude: -63.2206943003, latitude: -17.7994684996 },
        { latitude: -17.7996270996, longitude: -63.2211263999 },
        { longitude: -63.2224624, latitude: -17.8001175997 },
        { longitude: -63.2232588996, latitude: -17.8004048004 },
        { longitude: -63.2240130001, latitude: -17.8006783998 },
        { latitude: -17.8009313004, longitude: -63.2246740002 },
        { longitude: -63.2250714, latitude: -17.8010923998 },
        { longitude: -63.2254240997, latitude: -17.8012546003 },
        { longitude: -63.2257703996, latitude: -17.8014256004 },
        { latitude: -17.8014346001, longitude: -63.2257861995 },
        { latitude: -17.8015682996, longitude: -63.2259805005 },
        { latitude: -17.8017142999, longitude: -63.2261175003 },
        { latitude: -17.8018157996, longitude: -63.2261911999 },
        { longitude: -63.2262347996, latitude: -17.8018789998 },
        { longitude: -63.2262960004, latitude: -17.8020243004 },
        { longitude: -63.2263699004, latitude: -17.8021484003 },
        { longitude: -63.2268291002, latitude: -17.8032590001 },
        { latitude: -17.8038891002, longitude: -63.2271525997 },
        { longitude: -63.2274591997, latitude: -17.8052083997 },
        { longitude: -63.2275745004, latitude: -17.8057788003 },
        { latitude: -17.8061423998, longitude: -63.2276491001 },
        { latitude: -17.8064909003, longitude: -63.2277086997 },
        { longitude: -63.2278886004, latitude: -17.8075241998 },
        { longitude: -63.2279066005, latitude: -17.8076550004 },
        { longitude: -63.2280393998, latitude: -17.8084699004 },
        { longitude: -63.2282144998, latitude: -17.8092384001 },
        { longitude: -63.2283750001, latitude: -17.8096117999 },
        { latitude: -17.8099205002, longitude: -63.2285123002 },
        { longitude: -63.2288663997, latitude: -17.8105589997 },
        { longitude: -63.2291888999, latitude: -17.8112098996 },
        { latitude: -17.8118148003, longitude: -63.2295202004 },
        { latitude: -17.8120679, longitude: -63.2296524998 },
        { longitude: -63.2300574996, latitude: -17.8128413998 },
        { longitude: -63.2301421996, latitude: -17.8128983003 },
        { longitude: -63.2302399003, latitude: -17.8129238002 },
        { latitude: -17.8129311998, longitude: -63.2302971 },
        { longitude: -63.2303486995, latitude: -17.8129527001 },
        { longitude: -63.2304234002, latitude: -17.8130221996 },
        { longitude: -63.2304571, latitude: -17.8131163003 },
        { longitude: -63.2304394, latitude: -17.8131401997 },
        { longitude: -63.2304010997, latitude: -17.8132868001 },
        { longitude: -63.2303729998, latitude: -17.8133584003 },
        { latitude: -17.8134464002, longitude: -63.2303733997 },
        { latitude: -17.8139336004, longitude: -63.2306059997 },
        { latitude: -17.8152147003, longitude: -63.2312429997 },
        { longitude: -63.2315493, latitude: -17.8158329996 },
        { longitude: -63.2318870001, latitude: -17.8164846999 },
        { latitude: -17.8171194002, longitude: -63.2322066004 },
        { longitude: -63.2325095004, latitude: -17.8177424996 },
        { longitude: -63.2328251996, latitude: -17.8183554996 },
        { latitude: -17.8193742997, longitude: -63.2333000998 },
        { longitude: -63.2337272997, latitude: -17.8202542002 },
        { longitude: -63.2342258004, latitude: -17.8212292004 },
        { longitude: -63.2347173002, latitude: -17.8222470999 },
        { latitude: -17.8229151, longitude: -63.2350738001 },
        { longitude: -63.2351173997, latitude: -17.8230171998 },
        { latitude: -17.8240685, longitude: -63.235616 }
       
        //fin  de ida de linea 5//
      ]);
  return (
    <Polyline
    coordinates={coordinates}
    strokeColor="green"
    strokeWidth={4}
    lineCap="round"
    tappable={true}
    lineJoin="round"
    onPress={onPress}
  />
  )
}

export default Poli_5i

const styles = StyleSheet.create({})