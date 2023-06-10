<template>
    <Navbar class="mt-3"></Navbar>
    <div class="container Asosiy  mt-2">
        <div class="fanlar_list" v-if="teacher">
            <div class="fanlar_list_child " @click="FanlarUchunFUng(0)">
                <MDBIcon flag="united-kingdom" /> ENGLISH
            </div>
            <div class="fanlar_list_child" @click="FanlarUchunFUng(1)">
                <MDBIcon flag="russia" /> MATH
            </div>
            <div class="fanlar_list_child fanlar_list_child_aktiv_uchun" @click="FanlarUchunFUng(2)">
                <MDBIcon flag="russia" /> RUSSIAN
            </div>
            <div class="fanlar_list_child" @click="FanlarUchunFUng(3)">
                <MDBIcon flag="russia" /> HISTORY
            </div>
            <div class="fanlar_list_child" @click="FanlarUchunFUng(4)">
                <MDBIcon flag="russia" /> BIOLOGY
            </div>
            <div class="fanlar_list_child" @click="FanlarUchunFUng(5)">
                <MDBIcon flag="russia" /> CHIMISTRY
            </div>
            <div class="fanlar_list_child" @click="FanlarUchunFUng(6)">
                <MDBIcon flag="russia" /> INFORMATICS
            </div>
            <div class="fanlar_list_child" @click="FanlarUchunFUng(7)">
                <MDBIcon flag="russia" /> LAW
            </div>
            <div class="fanlar_list_child" @click="FanlarUchunFUng(8)">
                <MDBIcon flag="russia" /> ART & DESIGN
            </div>
            <div class="fanlar_list_child" @click="FanlarUchunFUng(9)">
                <MDBIcon flag="russia" /> SUBJECT
            </div>
        </div>
        <div class="fanlar_flex_list">
            <div class="card "   v-for="i in card_list_fan" :key="i.id" :title="i.name">
                <img src="../assets/kreslo.jpg" alt="" class="img-top">
                <p class="pt-2">{{ i.name }}</p>
            </div>

        </div>
    </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import Navbar from './navs.vue';
let teacher = ref(true);
import {
    MDBNavbar,
    MDBNavbarItem,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBBadge,
    MDBIcon,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
} from 'mdb-vue-ui-kit';

let card_list_fan = ref([
    { "id": 0, 'name': "english", "rasim": new URL('rasim manzili', import.meta.url) },
    { "id": 1, 'name': "math", "rasim": new URL('rasim manzili', import.meta.url) },
    { "id": 2, 'name': "russian", "rasim": new URL('rasim manzili', import.meta.url) },
    { "id": 3, 'name': "history", "rasim": new URL('rasim manzili', import.meta.url) },
    { "id": 4, 'name': "biology", "rasim": new URL('rasim manzili', import.meta.url) },
    { "id": 5, 'name': "chimistry", "rasim": new URL('rasim manzili', import.meta.url) },
    { "id": 6, 'name': "informatics", "rasim": new URL('rasim manzili', import.meta.url) },
    { "id": 7, 'name': "law", "rasim": new URL('rasim manzili', import.meta.url) },
    { "id": 8, 'name': "art and design", "rasim": new URL('rasim manzili', import.meta.url) },
    { "id": 9, 'name': "jubject", "rasim": new URL('rasim manzili', import.meta.url) },
    { "id": 10, 'name': "jubject", "rasim": new URL('rasim manzili', import.meta.url) },
    { "id": 11, 'name': "jubject", "rasim": new URL('rasim manzili', import.meta.url) },
    { "id": 12, 'name': "jubject", "rasim": new URL('rasim manzili', import.meta.url) },
]);

let fanlarqiymati = ref(0);

const nimadurasasaa = onMounted(async () => {
    let cardlar_fan = await document.querySelectorAll(".card");
   cardlar_fan[2].classList.add("fanlar_list_child_aktiv_uchun2"); 
})

let FanlarUchunFUng = async (argument) => {
    fanlarqiymati.value = argument;
    let fanlar_list_child = await document.querySelectorAll(".fanlar_list_child");
    let cardlar_fan = await document.querySelectorAll(".card");
    await fanlar_list_child.forEach((el, index) => {
        if (fanlarqiymati.value == index) {el.classList.add("fanlar_list_child_aktiv_uchun");}
        else {el.classList.remove("fanlar_list_child_aktiv_uchun");}
    })

    await cardlar_fan.forEach((el2, index2) => {
        if (fanlarqiymati.value == index2) {el2.classList.add("fanlar_list_child_aktiv_uchun2");}
        else {el2.classList.remove("fanlar_list_child_aktiv_uchun2");}
    })


}
</script>
<style scoped>
.img-top {
    width: 110px;
    height: 120px;
    border-radius: 25%;
    object-fit: cover;
}

.Asosiy {
    display: flex;
    justify-content: space-between;
}

.fanlar_list {
    padding: 10px;
    padding-top: 15px;
    border: solid 3.5px #c0bfbf;
    border-radius: 17px !important;
    box-shadow: 0 0 5px #b0b0b0;
    width: 23%;
    display: flex;
    flex-direction: column;
    gap: 25px; 
}

.card {
    width: 150px;
    height: 170px;
    /* box-shadow: 0 0 5px #ffffff; */
    border: solid rgb(157, 157, 157) 2px;
    background: none;
    display: flex;
    padding-top: 15px;
    justify-content: end;
    align-items: center;
    transition: ease 0.2s;
    border-radius: 15px;
}

.fanlar_flex_list {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    /* background-color: #787878; */
    height: 620px;
    justify-content: space-between;
    width: 73%;
    gap: 46px;
    padding-top: 12px;
    border-radius: 17px !important;
    padding-bottom: 0 !important;
    background-attachment: scroll;
    overflow-y: auto;
}

.fanlar_list .fanlar_list_child { 
    cursor: pointer;
    box-shadow: 0 0 5px #787878;
    border-radius: 10px !important;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 5px 10px;
    font-weight: 800;

}
.fanlar_list_child_aktiv_uchun2{
    transform: scale(1.1);
    background: rgb(87, 208, 255) !important;
}
.fanlar_list_child_aktiv_uchun {  
    background: rgb(87, 208, 255) !important; 
}</style>