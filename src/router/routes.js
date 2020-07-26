import Vue from 'vue'
import Achilles from '../component/Achilles.vue';
import Agni from '../component/Agni.vue';
import AhMuzenCab from '../component/ah-muzen-cab.vue';
import AhPuch from '../component/ah-puch.vue';
import Amaterasu from '../component/Amaterasu.vue';
import Anhur from '../component/Anhur.vue';
import Anubis from '../component/Anubis.vue';
import AoKuang from '../component/ao-kuang.vue';
import Aphrodite from '../component/Aphrodite.vue';
import Apollo from '../component/Apollo.vue';
import Arachne from '../component/Arachne.vue';
import Ares from '../component/ares.vue';
import Artemis from '../component/Artemis.vue';
import Athena from '../component/athena.vue';
import Awilik from '../component/awilix.vue';
import BabaYaga from '../component/baba-yaga.vue';
import Bacchus from '../component/bacchus.vue';
import Bakasura from '../component/bakasura.vue';
import BaronSamedi from '../component/baron-samedi.vue';
import Bastet from '../component/bastet.vue';
import Bellona from '../component/bellona.vue';
import Cabrakan from '../component/cabrakan.vue';
import Camazotz from '../component/camazotz.vue';
import Cerberus from '../component/cerberus.vue';
import Cernunnos from '../component/cernunnos.vue';
import Chaac from '../component/chaac.vue';
import ChangE from '../component/chang-e.vue';
import Chernobog from '../component/chernobog.vue';
import Chiron from '../component/chiron.vue';
import Chronos from '../component/chronos.vue';
import Cthulhu from '../component/cthulhu.vue';
import CuChulainn from '../component/cu-chulainn.vue';
import Cupid from '../component/cupid.vue';
import DaJi from '../component/da-ji.vue';
import Discordia from '../component/discordia.vue';
import ErlangShen from '../component/erlang-shen.vue';
import Fafnir from '../component/fafnir.vue';
import Fenrir from '../component/fenrir.vue';
import Freya from '../component/freya.vue';
import Ganesha from '../component/ganesha.vue';
import Geb from '../component/geb.vue';
import GuanYu from '../component/guan-yu.vue';
import Hachiman from '../component/hachiman.vue';
import Hades from '../component/hades.vue';
import HeBo from '../component/he-bo.vue';
import Heimdallr from '../component/heimdallr.vue';
import Hel from '../component/hel.vue';
import Hercules from '../component/hercules.vue';
import Horus from '../component/horus.vue';
import HouYi from '../component/hou-yi.vue';
import HunBatz from '../component/hun-batz.vue';
import Isis from '../component/isis.vue';
import Izanami from '../component/izanami.vue';
import Janus from '../component/janus.vue';
import JingWei from '../component/jing-wei.vue';
import Jormungandr from '../component/jormungandr.vue';
import Kali from '../component/kali.vue';
import Khepri from '../component/khepri.vue';
import KingArthur from '../component/king-arthur.vue';
import Kukulkan from '../component/kukulkan.vue';
import Kumbhakarna from '../component/kumbhakarna.vue';
import Kuzenbo from '../component/kuzenbo.vue';
import Loki from '../component/loki.vue';
import Medusa from '../component/medusa.vue';
import Mercury from '../component/mercury.vue';
import Merlin from '../component/merlin.vue';
import Mulan from '../component/mulan.vue';
import NeZha from '../component/ne-zha.vue';
import Neith from '../component/neith.vue';
import Nemesis from '../component/nemesis.vue';
import Nike from '../component/nike.vue';
import Nox from '../component/nox.vue';
import NuWa from '../component/nu-wa.vue';
import Odin from '../component/odin.vue';
import Olorun from '../component/olorun.vue';
import Osiris from '../component/osiris.vue';
import Pele from '../component/pele.vue';
import Persephone from '../component/persephone.vue';
import Poseidon from '../component/poseidon.vue';
import Ra from '../component/ra.vue';
import Raijin from '../component/raijin.vue';
import Rama from '../component/rama.vue';
import Ratakoskr from '../component/ratatoskr.vue';
import Ravana from '../component/ravana.vue';
import Scylla from '../component/scylla.vue';
import Serqet from '../component/serqet.vue';
import Set from '../component/set.vue';
import Skadi from '../component/skadi.vue';
import Sobek from '../component/sobek.vue';
import Sol from '../component/sol.vue';
import SunWukong from '../component/sun-wukong.vue';
import Susano from '../component/susano.vue';
import Sylvanus from '../component/sylvanus.vue';
import Terra from '../component/terra.vue';
import Thanatos from '../component/thanatos.vue';
import TheMorrigan from '../component/the-morrigan.vue';
import Thor from '../component/thor.vue';
import Thoth from '../component/thoth.vue';
import Tyr from '../component/tyr.vue';
import Ullr from '../component/ullr.vue';
import Vamana from '../component/vamana.vue';
import Vulcan from '../component/vulcan.vue';
import Xbalanque from '../component/xbalanque.vue';
import XingTian from '../component/xing-tian.vue';
import Yemoja from '../component/yemoja.vue';
import Ymir from '../component/ymir.vue';
import Zeus from '../component/zeus.vue';
import ZhongKui from '../component/zhong-kui.vue';
import Home from '../component/home.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/achilles',
        name: 'achilles',
        component: Achilles
    },
    {
        path: '/agni',
        name: 'agni',
        component: Agni
    },
    {
        path: '/ah-muzen-cab',
        name: 'ah-muzen-cab',
        component: AhMuzenCab
    },
    {
        path: '/ah-puch',
        name: 'ah-puch',
        component: AhPuch
    },
    {
        path: '/amaterasu',
        name: 'amaterasu',
        component: Amaterasu
    },
    {
        path: '/anhur',
        name: 'anhur',
        component: Anhur
    },
    {
        path: '/anubis',
        name: 'anubis',
        component: Anubis
    },
    {
        path: '/ao-kuang',
        name: 'ao-kung',
        component: AoKuang
    },

    {
        path: '/aphrodite',
        name: 'aphrodite',
        component: Aphrodite
    },
    {
        path: '/apollo',
        name: 'apollo',
        component: Apollo
    },
    {
        path: '/arachne',
        name: 'arachne',
        component: Arachne
    },
    {
        path: '/ares',
        name: 'ares',
        component: Ares
    },
    {
        path: '/artemis',
        name: 'artemis',
        component: Artemis
    },
    {
        path: '/athena',
        name: 'athena',
        component: Athena
    },
    {
        path: '/awilix',
        name: 'awilix',
        component: Awilik
    },
    {
        path: '/baba-yaga',
        name: 'baba-yaga',
        component: BabaYaga
    },
    {
        path: '/bacchus',
        name: 'bacchus',
        component: Bacchus
    },
    {
        path: '/bakasura',
        name: 'bakasura',
        component: Bakasura
    },
    {
        path: '/baron-samedi',
        name: 'baron-samedi',
        component: BaronSamedi
    },
    {
        path: '/bastet',
        name: 'bastet',
        component: Bastet
    },
    {
        path: '/bellona',
        name: 'bellona',
        component: Bellona
    },
    {
        path: '/cabrakan',
        name: 'cabrakan',
        component: Cabrakan
    },
    {
        path: '/camazotz',
        name: 'camazotz',
        component: Camazotz
    },
    {
        path: '/cerberus',
        name: 'cerberus',
        component: Cerberus
    },
    {
        path: '/cernunnos',
        name: 'cernunnos',
        component: Cernunnos
    },
    {
        path: '/chaac',
        name: 'chaac',
        component: Chaac
    },
    {
        path: '/chang-e',
        name: 'chang-e',
        component: ChangE
    },
    {
        path: '/chernobog',
        name: 'chernobog',
        component: Chernobog
    },
    {
        path: '/chiron',
        name: 'chiron',
        component: Chiron
    },
    {
        path: '/chronos',
        name: 'chronos',
        component: Chronos
    },

    {
        path: '/cthulhu',
        name: 'cthulhu',
        component: Cthulhu
    },
    {
        path: '/cu-chulainn',
        name: 'cu-chulainn',
        component: CuChulainn
    },
    {
        path: '/cupid',
        name: 'cupid',
        component: Cupid
    },
    {
        path: '/daji',
        name: 'daji',
        component: DaJi
    },
    {
        path: '/discordia',
        name: 'discordia',
        component: Discordia
    },
    {
        path: '/erlang-shen',
        name: 'erlang-shen',
        component: ErlangShen
    },
    {
        path: '/fafnir',
        name: 'fafnir',
        component: Fafnir
    },
    {
        path: '/fenrir',
        name: 'fenrir',
        component: Fenrir
    },
    {
        path: '/freya',
        name: 'freya',
        component: Freya
    },
    {
        path: '/ganesha',
        name: 'ganesha',
        component: Ganesha
    },
    {
        path: '/geb',
        name: 'geb',
        component: Geb
    },
    {
        path: '/guan-yu',
        name: 'guan-yu',
        component: GuanYu
    },
    {
        path: '/hachiman',
        name: 'hachiman',
        component: Hachiman
    },
    {
        path: '/hades',
        name: 'hades',
        component: Hades
    },
    {
        path: '/he-bo',
        name: 'he-bo',
        component: HeBo
    },
    {
        path: '/heimdallr',
        name: 'heimdallr',
        component: Heimdallr
    },
    {
        path: '/hel',
        name: 'hel',
        component: Hel
    },
    {
        path: '/hercules',
        name: 'hercules',
        component: Hercules
    },
    {
        path: '/horus',
        name: 'horus',
        component: Horus
    },
    {
        path: '/hou-yi',
        name: 'hou-yi',
        component: HouYi
    },
    {
        path: '/hunBatz',
        name: 'hunBatz',
        component: HunBatz
    },
    {
        path: '/isis',
        name: 'isis',
        component: Isis
    },
    {
        path: '/izanami',
        name: 'izanami',
        component: Izanami
    },
    {
        path: '/janus',
        name: 'janus',
        component: Janus
    },
    {
        path: '/jing-wei',
        name: 'jing-wei',
        component: JingWei
    },
    {
        path: '/jormungandr',
        name: 'jormungandr',
        component: Jormungandr
    },
    {
        path: '/kali',
        name: 'kali',
        component: Kali
    },
    {
        path: '/khepri',
        name: 'khepri',
        component: Khepri
    },
    {
        path: '/king-arthur',
        name: 'king-arthur',
        component: KingArthur
    },
    {
        path: '/kukulkan',
        name: 'kukulkan',
        component: Kukulkan
    },
    {
        path: '/kumbhakarna',
        name: 'kumbhakarna',
        component: Kumbhakarna
    },
    {
        path: '/kuzenbo',
        name: 'kuzenbo',
        component: Kuzenbo
    },
    {
        path: '/loki',
        name: 'loki',
        component: Loki
    },
    {
        path: '/medusa',
        name: 'medusa',
        component: Medusa
    },
    {
        path: '/mercury',
        name: 'mercury',
        component: Mercury
    },
    {
        path: '/merlin',
        name: 'merlin',
        component: Merlin
    },
    {
        path: '/mulan',
        name: 'mulan',
        component: Mulan
    },
    {
        path: '/ne-zha',
        name: 'ne-zha',
        component: NeZha
    },
    {
        path: '/neith',
        name: 'neith',
        component: Neith
    },
    {
        path: '/nemesis',
        name: 'nemesis',
        component: Nemesis
    },
    {
        path: '/nike',
        name: 'nike',
        component: Nike
    },
    {
        path: '/nox',
        name: 'nox',
        component: Nox
    },
    {
        path: '/nu-wa',
        name: 'nu-wa',
        component: NuWa
    },
    {
        path: '/odin',
        name: 'odin',
        component: Odin
    },
    {
        path: '/olorun',
        name: 'olorun',
        component: Olorun
    },
    {
        path: '/osiris',
        name: 'osiris',
        component: Osiris
    },
    {
        path: '/pele',
        name: 'pele',
        component: Pele
    },
    {
        path: '/persephone',
        name: 'persephone',
        component: Persephone
    },
    {
        path: '/poseidon',
        name: 'poseidon',
        component: Poseidon
    },
    {
        path: '/ra',
        name: 'ra',
        component: Ra
    },
    {
        path: '/raijin',
        name: 'raijin',
        component: Raijin
    },
    {
        path: '/rama',
        name: 'rama',
        component: Rama
    },
    {
        path: '/ratakoskr',
        name: 'ratakoskr',
        component: Ratakoskr
    },
    {
        path: '/ravana',
        name: 'ravana',
        component: Ravana
    },
    {
        path: '/scylla',
        name: 'scylla',
        component: Scylla
    },
    {
        path: '/serqet',
        name: 'serqet',
        component: Serqet
    },
    {
        path: '/set',
        name: 'set',
        component: Set
    },
    {
        path: '/skadi',
        name: 'skadi',
        component: Skadi
    },
    {
        path: '/sobek',
        name: 'sobek',
        component: Sobek
    },
    {
        path: '/sol',
        name: 'sol',
        component: Sol
    },
    {
        path: '/sun-wu-kong',
        name: 'sun-wu-kong',
        component: SunWukong
    },
    {
        path: '/susano',
        name: 'susano',
        component: Susano
    },
    {
        path: '/sylvanus',
        name: 'sylvanus',
        component: Sylvanus
    },
    {
        path: '/terra',
        name: 'terra',
        component: Terra
    },
    {
        path: '/thanatos',
        name: 'thanatos',
        component: Thanatos
    },
    {
        path: '/the-morrigan',
        name: 'the-morrigan',
        component: TheMorrigan
    },
    {
        path: '/thor',
        name: 'thor',
        component: Thor
    },
    {
        path: '/thoth',
        name: 'thoth',
        component: Thoth
    },
    {
        path: '/tyr',
        name: 'tyr',
        component: Tyr
    },
    {
        path: '/ullr',
        name: 'ullr',
        component: Ullr
    },
    {
        path: '/vamana',
        name: 'vamana',
        component: Vamana
    },
    {
        path: '/vulcan',
        name: 'vulcan',
        component: Vulcan
    },
    {
        path: '/xbalanque',
        name: 'xbalanque',
        component: Xbalanque
    },
    {
        path: '/xing-tian',
        name: 'xing-tian',
        component: XingTian
    },
    {
        path: '/yemoja',
        name: 'yemoja',
        component: Yemoja
    },
    {
        path: '/ymir',
        name: 'ymir',
        component: Ymir
    },
    {
        path: '/zeus',
        name: 'zeus',
        component: Zeus
    },
    {
        path: '/zhong-kui',
        name: 'zhong-kui',
        component: ZhongKui
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;
