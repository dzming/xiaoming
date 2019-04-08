<template>
    <div id="service">
        <header>
            <div id="title">
                <h2>客服</h2>
                <p>service</p>
            </div>
        </header>
        <div id="body">
            
        </div>
        <div id="footer">
            <ul>
                <li @click="$router.push({ path: '/home' })">
                    <img src="../assets/store0.png" alt>
                </li>
                <li @click="$router.push({ path: '/fund' })">
                    <img src="../assets/fund0.png" alt>
                </li>
                <li @click="$router.push({ path: '/designer' })">
                    <img src="../assets/designer0.png" alt>
                </li>
                <li @click="$router.push({ path: '/service' })">
                    <img src="../assets/service1.png" alt>
                </li>
                <li @click="$router.push({ path: '/me' })">
                    <img src="../assets/me0.png" alt>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scope>
    #service {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
</style>