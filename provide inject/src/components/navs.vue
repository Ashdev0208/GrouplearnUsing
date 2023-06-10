<template>
    <div class="container navbar_dk mt-2">

        <MDBNavbar container expand="lg" bg="light" class="d-flex justify-content-between ps-3 pb-1">
            <MDBNavbarBrand>
                <!-- <MDBIcon icon="mdb" iconStyle="fab" size="2x" /> -->
                <a href="#" class="text-decoration-none text-dark">LOGO</a>
            </MDBNavbarBrand>
            <MDBNavbarToggler target="#navbarColor01" @click="collapse7 = !collapse7"></MDBNavbarToggler>
            <MDBCollapse id="navbarColor01" v-model="collapse7" class="ms-7">
                <MDBNavbarNav class="mb-2 mb-lg-0  ">
                    <MDBNavbarItem href="#" linkClass="link-oq">SUBJECTS</MDBNavbarItem>
                </MDBNavbarNav>
            </MDBCollapse>

            <MDBNavbarNav class=" mb-lg-0 d-flex flex-row ms-auto gap-1 align-items-end pb-0"
                style="margin-right: 0 !important;">
                <MDBNavbarItem>
                    <MDBDropdown class="nav-item" v-model="dropdown5">
                        <MDBDropdownToggle tag="a" class="nav-link" @click="dropdown5 = !dropdown5">
                            <MDBIcon :flag="flags_l" class="m-0" id="til_bayroq"></MDBIcon>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href="#" @click="flags_l = 'uzbekistan'">
                                <MDBIcon flag="uzbekistan" /> UZB
                                <MDBIcon icon="check" class="text-success ms-2"></MDBIcon>
                            </MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem href="#" @click="flags_l = 'united-kingdom'">
                                <MDBIcon flag="united-kingdom" /> ENG

                            </MDBDropdownItem>
                            <MDBDropdownItem href="#" @click="flags_l = 'russia'">
                                <MDBIcon flag="russia" /> RU
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavbarItem>
                <MDBNavbarItem class="me-3 me-lg-0" linkClass="link-secondary">
                    <MDBDropdown class="nav-item bg-" v-model="dropdown788888">
                        <MDBDropdownToggle tag="a" class="nav-link" @click="dropdown788888 = !dropdown788888">
                            <MDBIcon :icon="backgroun_icon" class="yorug_Bol" id="tun_kun"></MDBIcon>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu >
                            <MDBDropdownItem href="#" @click="orqaFOn('moon')">
                                <MDBIcon icon="moon" /> Dark
                                <!-- <MDBIcon icon="check" class="text-success ms-2"></MDBIcon> -->
                            </MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem href="#" @click="orqaFOn('sun')">
                                <MDBIcon icon="sun" class="text-warning"/> Light

                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    <!-- <MDBBadge notification color="danger" pill>20</MDBBadge> -->
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBDropdown class="nav-item" v-model="dropdown6">
                        <MDBDropdownToggle tag="a" class="nav-link" @click="dropdown6 = !dropdown6"><img
                                src="../assets/userimg.png" class="rounded-circle" height="35" alt="" loading="lazy" />
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem href="#">
                                <MDBIcon icon="user" /> My profile
                            </MDBDropdownItem>
                            <MDBDropdownItem href="#">
                                <MDBIcon icon="cog" /> Settings
                            </MDBDropdownItem>
                            <MDBDropdownItem href="#">
                                <MDBIcon icon="sign-out-alt" /> Logout
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBNavbarItem>
            </MDBNavbarNav>


        </MDBNavbar>
    </div>
</template>

<script setup>
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
import { ref, onMounted } from "vue";
import { defineComponent } from 'vue'

const flags_l = ref("uzbekistan")
let backgroun_icon = ref("moon"); 
let tunstill  = ref()
const collapse7 = ref(false);
const dropdown6 = ref(false);
const dropdown5 = ref(false);
const dropdown79 = ref(false);
const dropdown788888 = ref(false);

document.body.style.backgroundColor = "#353534"
document.body.style.color = "#fff"
const orqaFOn = (async (arg) => {
    backgroun_icon.value = await arg;
    let yorug_icon =await  document.querySelector(".yorug_Bol")
    if (arg == "moon") { document.body.style.backgroundColor = "#353534"; document.body.style.color = "#fff";}
    if (arg == "sun") { document.body.style.backgroundColor = "#fff"; document.body.style.color = "#353534";yorug_icon.classList.add('text-warning')}
    // else{document.body.style.backgroundColor="#1c283f"}
})
</script> 


<style  scoped>
.dropdown-toggle::after {
    display: none !important;
}

.tunstill{
    color: orange !important;
}
#tun_kun {
    font-size: 30px;
}
#til_bayroq{
    font-size: 40px !important;
}
/* .dropdown-toggle {
    background-color: aqua;
    border-radius: 50% !important;
} */

.ms-7 {
    margin-left: 70px;
    font-weight: 700;
}

.navbar {
    border: solid 3.5px #c0bfbf;
    border-radius: 17px !important;
    background: #fafeff !important;
    /* box-shadow: 0 0 5px #b0b0b0; */
}
</style>